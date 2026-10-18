// Clase 17.19 (Psiquiatría) — guion docente escrito a mano (estándar Módulo 1). Tema NUEVO del libro (no estaba en psiquiatria_decks_data.json). Tier 2 del libro.
// Fuente clínica: books/scripts/dataset_psiquiatria.cjs (psiq-19). Códigos del Perfil: 5.01.3.001 Clasificaciones en psiquiatría, 5.01.3.005 Higiene del sueño, 5.01.1.022 Trastornos facticios
// y 5.01.3.009 Nociones de psiquiatría forense (books/data/v3_topic_codes.json). Nivel oficial en books/data/v3_codemap.json: sospecha, tratamiento inicial y derivar.
// Preguntas reales (class_questions.cjs --search "facticio|simulación|Münchhausen|insomnio|higiene del sueño|zolpidem|imputab|DSM|CIE-10"):
//   Agosto 2021 P163 (laxantes, vómitos y termómetro adulterado: facticio de tipo Münchhausen), Diciembre 2019 P172 (pensionado, esposa abnegada: facticio frente a simulación),
//   Julio 2017 P47 (insulina escondida: facticio, sin ganancia económica), Diciembre 2024 P94 (enfermera con insomnio que se automedica: higiene del sueño).
// No usadas por repetir: Diciembre 2017 P102 y Diciembre 2018 P131 (facticio), Diciembre 2024 P85 (alternativas de otra pregunta pegadas: el enunciado dice facticio y las opciones son exámenes).
//   Julio 2015 P108 (insomnio en un anciano de 81 años: el propio banco la llama «mala»).
// Sin pregunta real sobre clasificaciones (CIE-10) ni psiquiatría forense: se usan dos preguntas del libro como «Caso representativo» (Perfil V3 5.01.3.001 y 5.01.3.009), sin fecha.
// La pregunta del libro de facticio y la de higiene del sueño se omiten porque hay reales. El caso clínico es la viñeta del libro.
// Imágenes: ninguna. No hay foto verificada de estos temas (son criterios, escalones y marco legal) en atlas_fotos_verificadas.json ni en classes/media/biblioteca.
// Animación: gráfico solo de código (psiq_nuevas.html?v=facticio): matriz de intencionalidad y motivación que ubica facticio, simulación, somatomorfo y conversivo.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'psiq-19',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Clasificaciones, higiene del sueño, trastornos facticios y psiquiatría forense: cuatro temas del médico general',
      say: 'Bienvenido. Esta clase reúne cuatro temas que el médico general usa a diario. Primero, qué clasificación usar en Chile para la ficha y las licencias. Segundo, el insomnio y por qué la higiene del sueño va antes que cualquier pastilla. Tercero, los trastornos facticios y cómo se separan de la simulación y de los trastornos somatomorfos. Y cuarto, las nociones de psiquiatría forense: imputabilidad, capacidad y hospitalización involuntaria. Partamos por las clasificaciones.',
    },

    {
      type: 'points',
      kicker: 'Clasificaciones',
      title: 'DSM-5 y CIE-10: cuál se usa en Chile',
      cards: [
        { title: 'El diagnóstico psiquiátrico', tag: 'Clínico y sindromático', kind: 'key', items: [
          { t: 'Entrevista y examen mental', d: 'No hay examen de laboratorio confirmatorio',
            say: 'El diagnóstico psiquiátrico es clínico y sindromático. Se basa en la entrevista, en el examen mental y en criterios operativos, no en un examen de laboratorio que lo confirme.' },
          { t: 'Qué se examina', d: 'Conciencia, atención, pensamiento, afecto, juicio',
            say: 'El examen mental recorre la apariencia, la conciencia, la atención, la orientación, la memoria, el lenguaje, el curso y el contenido del pensamiento, la sensopercepción, el afecto, la conducta, el juicio y la introspección.' },
        ] },
        { title: 'Dos sistemas', tag: 'Cuál para qué', kind: 'criteria', items: [
          { t: 'CIE-10 de la OMS: oficial en Chile', d: 'Ficha, estadísticas, licencias y GES',
            say: 'La CIE-diez, de la Organización Mundial de la Salud, es la clasificación oficial en Chile para la ficha clínica, las estadísticas, las licencias médicas y el GES. Los trastornos mentales están en el capítulo cinco, con los códigos F cero cero a F noventa y nueve.' },
          { t: 'DSM-5: criterios diagnósticos', d: 'Descriptivo, categorial; sin ejes',
            say: 'El DSM cinco, de la Asociación Americana de Psiquiatría, se usa más como referencia de criterios diagnósticos, y eliminó el sistema multiaxial. Y la CIE-once, vigente desde dos mil veintidós, saca la incongruencia de género de los trastornos mentales.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'CIE-10, capítulo F',
      title: 'Qué hay en cada grupo',
      head: ['Código', 'Grupo', 'Ejemplos'],
      rows: [
        { cells: ['F00-F09', 'Trastornos orgánicos', 'Demencia, delirium'],
          say: 'El F cero es el de los trastornos orgánicos: demencia y delirium.' },
        { cells: ['F10-F19', 'Uso de sustancias', 'Alcohol, cocaína, cannabis'],
          say: 'F uno, el uso de sustancias: alcohol, cocaína y cannabis.' },
        { cells: ['F20-F29', 'Esquizofrenia y delirantes', 'Esquizofrenia, psicosis breve'],
          say: 'F dos, la esquizofrenia y los trastornos delirantes.' },
        { cells: ['F30-F39', 'Del ánimo', 'Depresión, bipolar, distimia'],
          say: 'F tres, los trastornos del ánimo: depresión, bipolar y distimia.' },
        { cells: ['F40-F48', 'Neuróticos, estrés y somatomorfos', 'Pánico, TOC, TEPT, disociativos'],
          say: 'F cuatro, los neuróticos, ligados al estrés y somatomorfos: pánico, TOC, trastorno de estrés postraumático y disociativos.' },
        { cells: ['F50-F59', 'Conductuales con disfunción fisiológica', 'Anorexia, insomnio, disfunción sexual'],
          say: 'F cinco, los síndromes conductuales con disfunción fisiológica: la alimentación, el sueño y las disfunciones sexuales.' },
        { cells: ['F60-F69', 'Personalidad y conducta del adulto', 'Límite, antisocial, parafilias'],
          say: 'F seis, la personalidad y la conducta del adulto: el límite, el antisocial y las parafilias.' },
        { cells: ['F70-F98', 'Retardo, desarrollo e infancia', 'Autismo, TDAH, enuresis'],
          say: 'F siete es el retardo mental, F ocho los trastornos del desarrollo psicológico, como el autismo, y F nueve los de inicio en la infancia, como el TDAH, los de conducta y la enuresis.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Insomnio',
      title: 'Qué es y qué buscar antes de tratar',
      cards: [
        { title: 'Concepto', tag: 'Sueño del adulto', kind: 'normal', items: [
          { t: 'Adulto: 7 a 9 horas', d: 'Ciclos de unos 90 minutos NREM y REM',
            say: 'El adulto duerme entre siete y nueve horas, en ciclos de unos noventa minutos de sueño NREM y REM.' },
          { t: 'Insomnio crónico: 3 noches por semana, 3 meses', d: 'Con repercusión diurna',
            say: 'El insomnio crónico es la dificultad para conciliar o mantener el sueño, o el despertar precoz, al menos tres noches por semana durante tres meses, con repercusión durante el día.' },
        ] },
        { title: 'Causas a descartar', tag: 'Antes del hipnótico', kind: 'alert', items: [
          { t: 'Depresión, ansiedad, apnea, dolor', d: 'Despertar precoz: depresión',
            say: 'Antes de tratarlo se buscan sus causas: la depresión, que da despertar precoz, la ansiedad, la apnea del sueño, el síndrome de piernas inquietas y el dolor.' },
          { t: 'Cafeína, alcohol y estimulantes', d: 'Corticoides, broncodilatadores, ISRS, betabloqueadores',
            say: 'También el abuso de cafeína, alcohol o estimulantes, y fármacos como los corticoides, los broncodilatadores, los ISRS y los betabloqueadores.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Higiene del sueño',
      title: 'La primera medida, siempre',
      cards: [
        { title: 'Hábitos', tag: 'Qué hacer', kind: 'key', items: [
          { t: 'Horarios fijos, también fines de semana', d: 'Acostarse y levantarse a la misma hora',
            say: 'La higiene del sueño es la primera medida de todo insomnio, y la única que corresponde si es leve o no tiene causa clara. Primero, horarios fijos para acostarse y levantarse, también los fines de semana.' },
          { t: 'Cama solo para dormir y para el sexo', d: 'Si no duerme en 20 minutos, levantarse',
            say: 'La cama se usa solo para dormir y para la actividad sexual. Si no se duerme en veinte minutos, se sale de la cama y se vuelve cuando haya sueño. Eso se llama control de estímulos.' },
          { t: 'Dormitorio oscuro, silencioso y fresco', d: 'Sin pantallas 1 hora antes',
            say: 'El dormitorio debe ser oscuro, silencioso y fresco, y se apagan las pantallas una hora antes.' },
        ] },
        { title: 'Qué evitar', tag: 'Sustancias y rutinas', kind: 'alert', items: [
          { t: 'Siestas largas o tardías', d: 'Más de 30 minutos o después de las 15 h',
            say: 'Se evitan las siestas de más de treinta minutos o después de las quince horas.' },
          { t: 'Cafeína, tabaco y alcohol de noche', d: 'Cafeína 6 a 8 horas antes',
            say: 'No se toma cafeína en las seis a ocho horas previas, ni se fuma de noche, y se evita el alcohol, porque fragmenta el sueño. La cena es liviana y el ejercicio es regular, pero no en las tres horas previas.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Escalones',
      title: 'Insomnio: de la causa al fármaco',
      head: ['Escalón', 'Medida', 'Clave de examen'],
      rows: [
        { cells: ['Causas', 'Depresión, ansiedad, apnea, dolor, fármacos', 'Tratar la causa antes del hipnótico'],
          say: 'Primero la causa: depresión, ansiedad, apnea, dolor, cafeína o fármacos. Se trata la causa antes de dar un hipnótico.' },
        { cells: ['Higiene del sueño', 'Horarios, cama, sin siestas ni cafeína', 'Primera medida siempre'],
          say: 'Segundo, la higiene del sueño, que es la primera medida siempre.' },
        { cells: ['TCC para el insomnio', 'Control de estímulos y restricción del sueño', 'Primera línea del insomnio crónico'],
          say: 'Si persiste, la primera línea es la terapia cognitivo-conductual para el insomnio, con control de estímulos y restricción del sueño.' },
        { cells: ['Fármacos', 'Zolpidem o zopiclona 2 a 4 semanas', 'Evitar benzodiacepinas de vida media larga'],
          say: 'Los fármacos son de segunda línea y por poco tiempo: zolpidem o zopiclona hasta dos a cuatro semanas. Se evitan las benzodiacepinas de vida media larga.' },
        { cells: ['Evitar', 'Quetiapina u otros antipsicóticos sedantes', 'Sin indicación ni evidencia'],
          say: 'Y no se usa quetiapina ni otros antipsicóticos sedantes para un insomnio simple, porque no tienen indicación ni evidencia. Si hay depresión o ansiedad, se trata la enfermedad de base.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Trastorno facticio',
      title: 'Producir síntomas para ser paciente',
      cards: [
        { title: 'Qué es', tag: 'Intencional, sin recompensa externa', kind: 'criteria', items: [
          { t: 'Produce o falsifica síntomas', d: 'O se induce una enfermedad o lesión',
            say: 'El trastorno facticio consiste en producir o falsificar de manera intencional síntomas físicos o psicológicos, o inducirse una enfermedad o una lesión, con engaño, para asumir el rol de enfermo. No hay una recompensa externa evidente. Su forma crónica y grave es el síndrome de Münchhausen.' },
          { t: 'Se sospecha por el patrón', d: 'Historia dramática, pero inconsistente',
            say: 'Se sospecha ante una historia dramática pero inconsistente, múltiples hospitalizaciones y cicatrices quirúrgicas, conocimiento médico o trabajo en salud, y síntomas que no responden o empeoran con el tratamiento y mejoran cuando el paciente no es observado.' },
        ] },
        { title: 'Ejemplos de la vida real', tag: 'Cómo lo hacen', kind: 'alert', items: [
          { t: 'Laxantes o insulina', d: 'Glicemia baja con insulina alta y péptido C bajo',
            say: 'Los ejemplos son la ingesta de laxantes o de insulina, esta última con glicemia baja, insulina alta y péptido C bajo, porque la insulina es de afuera. También anticoagulantes, con hemorragia e INR prolongado.' },
          { t: 'Termómetro adulterado y lesiones cutáneas', d: 'Fiebre facticia',
            say: 'Y la manipulación del termómetro, con fiebre facticia, y las lesiones cutáneas autoinfligidas.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Cómo distinguirlos',
      title: 'Facticio, simulación, somatomorfo y conversivo',
      head: ['Entidad', '¿Intencional?', 'Motivación', 'Conducta'],
      rows: [
        { cells: ['Trastorno facticio', 'Sí, con engaño', 'Asumir el rol de enfermo', 'Evitar procedimientos; interconsulta psiquiátrica'],
          say: 'En el facticio, la producción es intencional y el engaño es consciente, pero la motivación es psicológica: asumir el rol de enfermo. Se evitan los procedimientos innecesarios y se pide interconsulta de psiquiatría, sin acusar.' },
        { cells: ['Simulación', 'Sí, consciente', 'Beneficio externo', 'Documentar; no es enfermedad'],
          say: 'En la simulación también hay engaño consciente, pero con un beneficio externo claro, como una licencia, dinero, evitar la cárcel o conseguir drogas. No es una enfermedad mental, y se documenta de forma objetiva.' },
        { cells: ['Somatomorfo', 'No', 'Sufrimiento por síntomas sin causa orgánica', 'Controles regulares; ISRS o TCC'],
          say: 'En el somatomorfo los síntomas son involuntarios, no hay engaño. El manejo son los controles regulares, sin repetir exámenes, y el ISRS o la terapia cognitivo-conductual.' },
        { cells: ['Conversivo', 'No', 'Déficit neurológico ligado a estrés', 'Explicar, rehabilitar y derivar'],
          say: 'En el conversivo hay un déficit neurológico funcional ligado a un estrés, también involuntario. Se explica con claridad, se rehabilita y se deriva.' },
        { cells: ['Facticio impuesto a otro', 'Sí, hacia un tercero', 'Rol de cuidador de un niño enfermo', 'Proteger al menor y notificar'],
          say: 'Y el facticio impuesto a otro: un cuidador, casi siempre la madre, provoca la enfermedad de un niño. Es una forma de abuso infantil, y obliga a proteger al menor y a notificar a la justicia de familia.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Facticio',
      title: 'Cómo se maneja en la práctica',
      cards: [
        { title: 'Conducta', tag: 'Sospecha, inicio y derivación', kind: 'key', items: [
          { t: 'No confrontar con acusaciones', d: 'Ficha única y equipo coordinado',
            say: 'La conducta es no confrontar de modo acusatorio, coordinar al equipo, mantener una ficha única y evitar exámenes y procedimientos invasivos innecesarios.' },
          { t: 'Interconsulta de psiquiatría', d: 'Con empatía: el sufrimiento es real',
            say: 'Se pide interconsulta de psiquiatría y se plantea con empatía que el sufrimiento es real y que existen ayudas.' },
        ] },
        { title: 'Pronóstico', tag: 'Reservado', kind: 'alert', items: [
          { t: 'Suele abandonar al ser descubierto', d: 'Pronóstico reservado',
            say: 'El pronóstico es reservado, y el paciente suele abandonar el centro cuando es descubierto.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Psiquiatría forense',
      title: 'Imputabilidad y medidas de seguridad',
      cards: [
        { title: 'Imputabilidad', tag: 'La pregunta central', kind: 'criteria', items: [
          { t: 'Comprender lo ilícito y autodeterminarse', d: 'Capacidad de entender el acto',
            say: 'La psiquiatría forense aplica el conocimiento clínico a las preguntas de la justicia. La más importante es la imputabilidad: la capacidad de comprender el carácter ilícito del acto y de actuar conforme a esa comprensión.' },
          { t: '«Loco o demente»: inimputable', d: 'Salvo que actúe en un intervalo lúcido',
            say: 'En el Código Penal chileno, el loco o demente está exento de responsabilidad penal, salvo que haya actuado en un intervalo lúcido. Eso se llama inimputabilidad por enajenación mental.' },
          { t: 'Medidas de seguridad, no pena', d: 'Internación en un establecimiento psiquiátrico',
            say: 'Y no recibe una pena, sino medidas de seguridad, como la internación en un establecimiento psiquiátrico.' },
        ] },
        { title: 'Qué no exime', tag: 'Trampas', kind: 'alert', items: [
          { t: 'Psicosis con delirio y órdenes alucinatorias', d: 'Típicamente inimputable',
            say: 'El paciente psicótico que mata por un delirio y por órdenes alucinatorias en pleno brote es típicamente inimputable.' },
          { t: 'Alcohol o drogas no eximen', d: 'Ni los trastornos de personalidad',
            say: 'El solo consumo de alcohol o de drogas no lo es, y los trastornos de la personalidad tampoco.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Psiquiatría forense',
      title: 'Capacidad, peritaje y deber de denuncia',
      cards: [
        { title: 'Capacidad', tag: 'Civil y de consentir', kind: 'criteria', items: [
          { t: 'Interdicción por demencia', d: 'Quien no puede administrar sus bienes',
            say: 'La capacidad civil se pierde con la interdicción por demencia, que declara incapaz a quien no puede administrar sus bienes.' },
          { t: 'Consentir: comprender, apreciar, razonar, elegir', d: 'Cuatro habilidades',
            say: 'La capacidad para consentir tiene cuatro habilidades: comprender la información, apreciar su situación, razonar y expresar una elección.' },
        ] },
        { title: 'Rol del médico', tag: 'Peritaje y denuncia', kind: 'key', items: [
          { t: 'El perito no es el médico tratante', d: 'Habitualmente el Servicio Médico Legal',
            say: 'El peritaje psiquiátrico lo hace un perito, habitualmente del Servicio Médico Legal. Es distinto del rol del médico tratante, que no debe peritar a su propio paciente.' },
          { t: 'Deber de denunciar delitos', d: 'Sin vulnerar el secreto médico',
            say: 'Y el médico debe denunciar los delitos que conozca en el ejercicio de sus funciones, como lesiones graves o abuso sexual, sin que eso vulnere el secreto médico.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Marco legal',
      title: 'Ley 21.331 y hospitalización involuntaria',
      cards: [
        { title: 'Derechos', tag: 'Ley 21.331, 2021', kind: 'key', items: [
          { t: 'Consentimiento informado', d: 'El medio menos restrictivo',
            say: 'La Ley veintiuno mil trescientos treinta y uno, de dos mil veintiuno, reconoce los derechos de las personas en atención de salud mental: consentimiento informado y atención en el medio menos restrictivo. La hospitalización y la contención son el último recurso.' },
        ] },
        { title: 'Hospitalización involuntaria', tag: 'Condiciones', kind: 'alert', items: [
          { t: 'Indicada por psiquiatra', d: 'Riesgo cierto e inminente',
            say: 'La hospitalización involuntaria solo procede por indicación de un médico psiquiatra, cuando hay un riesgo cierto e inminente para la persona o para terceros y no existe una alternativa menos restrictiva.' },
          { t: 'Se informa y se revisa', d: 'Autoridad sanitaria y comisión regional',
            say: 'Se informa a la autoridad sanitaria y queda sujeta a revisión por una comisión regional. La contención física se registra en la ficha y debe respetar la dignidad del paciente.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Intención y motivo: dónde cae cada cuadro',
      images: [
        { src: 'animaciones/psiq-19/A1_facticio_matriz.mp4', label: 'Facticio, simulación y somatomorfo', credit: 'Gráfico y animación propios' },
      ],
      steps: [
        { note: 'Dos preguntas: ¿lo produce a propósito? ¿qué busca?',
          say: 'Mira cómo se arma la matriz. La primera pregunta es si el síntoma es intencional, y la segunda, qué busca la persona. Si es intencional y busca un beneficio externo, es simulación. Si es intencional, pero lo que busca es ser tratado como enfermo, es facticio. Y si no es intencional, es un cuadro somatomorfo o conversivo. Cuando el que produce el síntoma es un cuidador en un niño, la matriz se enciende en rojo: hay que proteger al menor.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del síntoma sin causa orgánica a la conducta.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Psiquiatría general: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Registrar diagnóstico para licencia y GES', 'CIE-10 de la OMS', 'DSM-5 o una escala'],
          say: 'Registrar un diagnóstico para la licencia, las estadísticas y el GES: CIE-diez. El DSM cinco da criterios, pero no es el oficial.' },
        { cells: ['Insomnio leve sin causa clara', 'Higiene del sueño', 'Zolpidem o quetiapina de entrada'],
          say: 'Insomnio leve sin causa clara: higiene del sueño. Partir con zolpidem, y menos con quetiapina, es el error.' },
        { cells: ['Toma laxantes a escondidas, sin ganancia', 'Trastorno facticio', 'Simulación o conversivo'],
          say: 'Se provoca síntomas, miente y no hay ganancia externa: trastorno facticio. El error es llamarlo simulación.' },
        { cells: ['Fingir para obtener licencia o dinero', 'Simulación; no es enfermedad', 'Facticio'],
          say: 'Si finge para conseguir una licencia, dinero o evitar un castigo, es simulación, que no es una enfermedad mental.' },
        { cells: ['Madre que enferma al hijo', 'Proteger al niño y notificar', 'Tratar a la madre en silencio'],
          say: 'Una madre que provoca la enfermedad de su hijo: es un abuso infantil, se protege al niño y se notifica a la justicia de familia.' },
        { cells: ['Brote psicótico con delirio y órdenes', 'Inimputable: medida de seguridad', 'Pena de cárcel o imputable'],
          say: 'Un delito cometido en pleno brote psicótico, por un delirio y órdenes alucinatorias: inimputable, con medida de seguridad. El alcohol o las drogas solos no eximen.' },
        { cells: ['Paciente psicótico con riesgo inminente', 'Hospitalización involuntaria, por psiquiatra', 'Indicarla el médico general'],
          say: 'Un paciente con riesgo inminente: hospitalización involuntaria, que indica un psiquiatra y se informa a la autoridad sanitaria.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Enfermera de 31 años, hospitalizada hace dos semanas por diarrea, vómitos y dolor abdominal de difícil manejo, sorprendida por el personal ingiriendo laxantes a escondidas y manipulando el termómetro. Los exámenes descartan patología orgánica. No tiene licencia médica, juicio pendiente ni beneficio económico aparente. En el interrogatorio relata varias hospitalizaciones previas en otros centros.',
      question: '¿Cuál es el diagnóstico y la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Simulación; denunciar y dar el alta' },
        { letter: 'B', text: 'Trastorno facticio; no confrontar de modo acusatorio, evitar exámenes y procedimientos innecesarios, ficha única e interconsulta de psiquiatría' },
        { letter: 'C', text: 'Trastorno conversivo; explicar y derivar a rehabilitación' },
        { letter: 'D', text: 'Gastroenteritis aguda; completar estudio con colonoscopía y TAC' },
        { letter: 'E', text: 'Trastorno de somatización; controles regulares sin derivar' },
      ],
      correct: 'B',
      explanation: 'Trastorno facticio: produce síntomas de forma intencional (laxantes, termómetro) sin beneficio externo evidente, solo para asumir el rol de enfermo, a diferencia de la simulación (hay un motivo externo) y de los trastornos somatomorfos (síntomas involuntarios). La conducta es no confrontar de forma acusatoria, evitar exámenes y procedimientos innecesarios, coordinar al equipo con una ficha única y pedir interconsulta de psiquiatría.',
      say: {
        stem: 'Una enfermera de treinta y un años lleva dos semanas hospitalizada por diarrea, vómitos y dolor abdominal de difícil manejo. El personal la sorprende tomando laxantes a escondidas y manipulando el termómetro. Los exámenes no muestran patología orgánica, no tiene licencia ni beneficio económico, y relata varias hospitalizaciones previas en otros centros.',
        question: '¿Cuál es el diagnóstico y la conducta más adecuada?',
        options: 'Las opciones: simulación con denuncia y alta; trastorno facticio sin confrontar, con ficha única e interconsulta de psiquiatría; conversivo; gastroenteritis con más estudio; o somatización. Piénsalo.',
        answer: 'Es la B. Produce síntomas a propósito, trabaja en salud, tiene hospitalizaciones previas y no hay ninguna ganancia externa: es un trastorno facticio. Se evita acusarla y se evitan los procedimientos innecesarios, con ficha única e interconsulta de psiquiatría. La A tienta porque hay engaño consciente, pero la simulación exige un beneficio externo, y aquí no lo hay.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 163',
      stem: 'Una paciente de 22 años es hospitalizada por un cuadro de diarrea, vómitos y dolor abdominal de difícil manejo. Durante la hospitalización es sorprendida ingiriendo laxantes, autoinduciéndose vómitos y adulterando la temperatura del termómetro. Se solicitan exámenes, descartándose patología orgánica. Además, luego de indagar, no se encuentra ninguna ganancia evidente con estos síntomas.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Trastorno conversivo' },
        { letter: 'B', text: 'Trastorno facticio' },
        { letter: 'C', text: 'Trastorno delirante' },
        { letter: 'D', text: 'Trastorno bipolar' },
        { letter: 'E', text: 'Trastorno de la conducta alimentaria' },
      ],
      correct: 'B',
      explanation: 'Trastorno facticio clásico, tipo Münchhausen: se autoprovoca síntomas, no solo los finge. No tiene ganancias externas, así que no es simulación; la ganancia es afectiva, el rol de enfermo.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Una paciente de veintidós años hospitalizada por diarrea, vómitos y dolor abdominal es sorprendida tomando laxantes, provocándose vómitos y adulterando el termómetro. Los exámenes no muestran patología orgánica y no hay ninguna ganancia evidente.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: conversivo; facticio; delirante; bipolar; o trastorno de la conducta alimentaria. Piénsalo.',
        answer: 'Es la B. Se provoca los síntomas a propósito y no hay beneficio externo: trastorno facticio. La A tienta por la ausencia de causa orgánica, pero el conversivo es involuntario. Y la E tienta por los vómitos y laxantes, pero aquí no hay miedo a engordar ni alteración del peso: el fin es estar enferma.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 172',
      stem: 'Un paciente de 57 años presenta múltiples síntomas difíciles de precisar. Se ha realiza múltiples exámenes y evaluaciones médicas, sin poder llegar a un diagnóstico. Sin embargo, él insiste en que está muy enfermo y no puede realizar actividades básicas, como asearse. Hace 2 años fue pensionado por esto, sin cambiar su conducta. Su esposa lo cuida y lo asiste abnegadamente.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Trastorno por simulación' },
        { letter: 'B', text: 'Trastorno hipocondríaco' },
        { letter: 'C', text: 'Trastorno de somatización' },
        { letter: 'D', text: 'Trastorno facticio' },
        { letter: 'E', text: 'Trastorno de personalidad dependiente' },
      ],
      correct: 'D',
      explanation: 'Que se haya pensionado hace pensar en una simulación, pero que no cambie su conducta y que su vida esté tan afectada hace pensar más en un trastorno facticio. Que su esposa lo cuide con tanta dedicación apunta a una ganancia afectiva: atención y cuidados.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecinueve. Un paciente de cincuenta y siete años tiene múltiples síntomas imprecisos y ningún examen da un diagnóstico, pero insiste en que está muy enfermo y no puede ni asearse. Lo pensionaron hace dos años y su conducta no cambió. Su esposa lo cuida con dedicación.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: simulación; hipocondría; somatización; facticio; o personalidad dependiente. Piénsalo.',
        answer: 'Es la D. Lo que parece una ganancia, la pensión, no cambió su conducta, y lo que sostiene el cuadro es la atención y el cuidado de su esposa: una ganancia afectiva, el rol de enfermo. La A tienta por la pensión, pero la simulación busca un beneficio externo y suele ceder cuando lo obtiene.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 47',
      stem: 'Una paciente de 30 años, diabética tipo 1, con historia de 5 hospitalizaciones en el último año por cuadros de hipoglicemia severa. Actualmente ingresa en shock hipoglicémico, el que es manejado adecuadamente. Durante su hospitalización, es sorprendida en el baño inyectándose una dosis de insulina que no le correspondía, lo cual ella posteriormente niega.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Trastorno disociativo' },
        { letter: 'B', text: 'Trastorno somatomorfo' },
        { letter: 'C', text: 'Trastorno hipocondriaco' },
        { letter: 'D', text: 'Trastorno por simulación' },
        { letter: 'E', text: 'Trastorno facticio' },
      ],
      correct: 'E',
      explanation: 'Trastorno facticio clásico. No es una simulación, porque no hay un fin económico u otro beneficio externo: se inyecta insulina para enfermarse, y lo niega.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecisiete. Una paciente de treinta años, diabética tipo uno, tiene cinco hospitalizaciones en un año por hipoglicemias severas. Ahora, ya estabilizada, la sorprenden en el baño inyectándose una insulina que no le correspondía, y después lo niega.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: disociativo; somatomorfo; hipocondría; simulación; o facticio. Piénsalo.',
        answer: 'Es la E. Se provoca la enfermedad con insulina y lo niega, sin ningún beneficio externo: facticio. La D es la tentación del examen, porque hay engaño consciente, pero sin un fin económico o legal no es simulación. Y recuerda que la insulina de afuera da insulina alta con péptido C bajo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2024 · Pregunta 94',
      stem: 'Enfermera luego de sus turnos de urgencia le cuesta dormir y se automedica con diazepam.',
      question: 'Conducta:',
      options: [
        { letter: 'A', text: 'Clotiazepam antes de dormir' },
        { letter: 'B', text: 'Quetiapina' },
        { letter: 'C', text: 'Higiene del sueño / control ambiental' },
        { letter: 'D', text: 'Zolpidem' },
        { letter: 'E', text: 'Observación clínica' },
      ],
      correct: 'C',
      explanation: 'Insomnio sin causa médica evidente en el contexto del trabajo por turnos: la primera medida es la higiene del sueño y el control ambiental. Las benzodiacepinas y los hipnóticos son de segunda línea y por poco tiempo, y la quetiapina no tiene indicación para un insomnio simple.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticuatro. Una enfermera que trabaja turnos de urgencia tiene dificultad para dormir después de sus turnos y se automedica con diazepam.',
        question: '¿Cuál es la conducta?',
        options: 'Las opciones: clotiazepam antes de dormir; quetiapina; higiene del sueño y control ambiental; zolpidem; u observación clínica. Piénsalo.',
        answer: 'Es la C. El insomnio sin otra causa parte siempre con higiene del sueño y control del ambiente, y además hay que suspender la automedicación con benzodiacepina. La D tienta porque el zolpidem es el hipnótico de elección cuando se necesita uno, pero es de segunda línea y por pocas semanas. Y la quetiapina no tiene indicación.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un médico de un CESFAM debe registrar el diagnóstico de un paciente con depresión para efectos estadísticos, de licencia médica y de notificación GES, según el sistema oficial usado por el Ministerio de Salud de Chile.',
      question: '¿Qué sistema de clasificación corresponde utilizar?',
      options: [
        { letter: 'A', text: 'Escala de depresión de Hamilton' },
        { letter: 'B', text: 'Manual Diagnóstico y Estadístico DSM-5 de la Asociación Americana de Psiquiatría' },
        { letter: 'C', text: 'Escala de Evaluación de la Actividad Global (GAF)' },
        { letter: 'D', text: 'Clasificación de Kraepelin' },
        { letter: 'E', text: 'Clasificación Internacional de Enfermedades (CIE) de la OMS' },
      ],
      correct: 'E',
      explanation: 'En Chile, las estadísticas oficiales, las licencias médicas y los registros del sistema de salud usan la Clasificación Internacional de Enfermedades (CIE) de la OMS. El DSM-5 es muy usado en clínica e investigación y abandonó el sistema multiaxial. Las escalas GAF y Hamilton miden gravedad, no clasifican.',
      say: {
        stem: 'Un caso representativo del banco. Un médico de un CESFAM debe registrar el diagnóstico de depresión de un paciente, para efectos estadísticos, de licencia médica y de notificación GES, según el sistema oficial del Ministerio de Salud de Chile.',
        question: '¿Qué sistema de clasificación corresponde utilizar?',
        options: 'Las opciones: escala de Hamilton; DSM cinco; GAF; clasificación de Kraepelin; o CIE de la OMS. Piénsalo.',
        answer: 'Es la E. La CIE de la Organización Mundial de la Salud es la oficial en Chile para la ficha, las licencias y el GES. La B es la tentación: el DSM cinco es muy usado para los criterios, pero no es el sistema oficial de registro. Y Hamilton y GAF no clasifican, miden gravedad.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Hombre de 28 años con esquizofrenia, sin tratamiento hace 6 meses, agrede gravemente a su vecino. En el peritaje se constata que al momento del hecho cursaba un episodio psicótico agudo, con delirio de persecución en el que el vecino lo iba a matar, y alucinaciones auditivas que le ordenaban defenderse.',
      question: '¿Qué concepto pericial corresponde a su condición al momento del delito?',
      options: [
        { letter: 'A', text: 'Simulación' },
        { letter: 'B', text: 'Inimputabilidad por enajenación mental' },
        { letter: 'C', text: 'Imputabilidad plena' },
        { letter: 'D', text: 'Trastorno facticio' },
        { letter: 'E', text: 'Responsabilidad penal agravada por la enfermedad' },
      ],
      correct: 'B',
      explanation: 'La imputabilidad es la capacidad de comprender la ilicitud de un acto y autodeterminarse según esa comprensión. Un episodio psicótico agudo que priva totalmente de razón al momento del hecho determina inimputabilidad (Código Penal, loco o demente). No exime de consecuencias: el tribunal puede imponer medidas de seguridad, como la internación o el tratamiento.',
      say: {
        stem: 'Un caso representativo del banco. Un hombre de veintiocho años con esquizofrenia, sin tratamiento hace seis meses, agrede gravemente a su vecino. El peritaje muestra que cursaba un episodio psicótico agudo, con un delirio de persecución y voces que le ordenaban defenderse.',
        question: '¿Qué concepto pericial corresponde a su condición al momento del delito?',
        options: 'Las opciones: simulación; inimputabilidad por enajenación mental; imputabilidad plena; trastorno facticio; o responsabilidad agravada por la enfermedad. Piénsalo.',
        answer: 'Es la B. Un brote psicótico que le quita por completo la razón al momento del hecho produce inimputabilidad por enajenación mental. No queda sin consecuencias: el tribunal puede imponer medidas de seguridad, como una internación o un tratamiento. La C es la trampa: tener una enfermedad no significa ser imputable ni exento por sí solo; lo que decide es el estado al momento del hecho.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: psiquiatría general',
      cards: [
        { title: 'Clasificar y dormir', tag: 'CIE-10 e higiene', kind: 'key', items: [
          { t: 'CIE-10: oficial en Chile', d: 'DSM-5 aporta criterios',
            say: 'Cerremos con las reglas de oro. La CIE-diez es la clasificación oficial en Chile para la ficha, el GES y las licencias, y el DSM cinco aporta los criterios.' },
          { t: 'Higiene del sueño primero', d: 'TCC; hipnótico solo 2 a 4 semanas',
            say: 'La higiene del sueño es la primera medida del insomnio. Después viene la terapia cognitivo-conductual, y el hipnótico solo por dos a cuatro semanas. La quetiapina no se usa para un insomnio simple.' },
        ] },
        { title: 'Facticio y ley', tag: 'Lo que se pregunta', kind: 'alert', items: [
          { t: 'Facticio: intencional, sin ganancia externa', d: 'Simulación: con beneficio externo',
            say: 'El facticio produce síntomas a propósito, para ser paciente, sin ganancia externa. La simulación sí la tiene y no es una enfermedad mental.' },
          { t: 'Psicosis en el hecho: inimputable', d: 'Hospitalización involuntaria: psiquiatra',
            say: 'La psicosis que priva de razón al momento del delito produce inimputabilidad, con medidas de seguridad. Y la hospitalización involuntaria la indica un psiquiatra, ante un riesgo cierto e inminente. Si te llevas una sola idea de hoy: ante un síntoma sin causa orgánica, pregunta si es intencional y qué busca la persona. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Síntoma sin causa orgánica: facticio, simulación o somatomorfo',
    root: N('start', 'Síntomas sin causa orgánica', 'Exámenes negativos y sospecha de engaño o sufrimiento',
      'Un paciente tiene síntomas que los exámenes no explican. La primera pregunta es si los produce de forma intencional.',
      ['No es intencional', N('q', 'Somatomorfo o conversivo', 'Síntomas involuntarios',
        'Si los síntomas son involuntarios, no hay engaño. Hay que ver si son síntomas físicos persistentes o un déficit neurológico ligado a un estrés.',
        ['Síntomas físicos múltiples', N('do', 'Somatomorfo', 'Controles regulares; ISRS o TCC',
          'Si son síntomas físicos múltiples, es un trastorno somatomorfo. Se hacen controles regulares sin repetir exámenes, y se usa un ISRS o terapia cognitivo-conductual.')],
        ['Déficit neurológico funcional', N('do', 'Conversivo', 'Explicar, rehabilitar y derivar',
          'Si hay un déficit neurológico funcional ligado a un estrés, es un trastorno conversivo. Se explica con claridad, se rehabilita y se deriva.')],
      )],
      ['Intencional, con beneficio externo', N('ok', 'Simulación', 'Documentar; no es enfermedad mental',
        'Si lo produce a propósito para obtener una licencia, dinero, evitar un castigo o conseguir drogas, es una simulación. No es una enfermedad mental, y se documenta de forma objetiva.')],
      ['Intencional, sin beneficio externo', N('alert', 'Trastorno facticio', 'No acusar; ficha única; psiquiatría',
        'Si lo produce a propósito, sin beneficio externo, para asumir el rol de enfermo, es un trastorno facticio. No se confronta con acusaciones, se evitan procedimientos innecesarios, se usa una ficha única y se pide interconsulta de psiquiatría.',
        ['El que lo causa es un cuidador', N('alert', 'Facticio impuesto a otro', 'Proteger al niño; notificar',
          'Si un cuidador provoca la enfermedad de un niño, es un abuso infantil: se protege al menor y se notifica a la justicia de familia.')],
      )],
    ),
  },
};
