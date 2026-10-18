// Clase 10.10 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neurologia.cjs (neuro-10).
// Preguntas reales: banco real (classes/scripts/class_questions.cjs neuro-10 y --search).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'neuro-10',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: '¿Fue una crisis o un síncope? ¿Fue provocada? ¿Hay que tratar?',
      say: 'Bienvenidos. En la clase pasada vimos la crisis que no se detiene. Hoy vemos el escenario más común en la urgencia: el adulto que llega después de su primer episodio de pérdida de conciencia con movimientos. La clase se ordena con tres preguntas, en este orden: ¿fue una crisis o un síncope?, ¿fue provocada?, y ¿hay que iniciar un antiepiléptico? Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Enfrentamiento',
      title: 'Primera pregunta: ¿fue provocada?',
      nodes: [
        { id: 'epi', col: 0, row: 1, k: 'start', t: 'Primer episodio', s: 'Pérdida de conciencia con movimientos' },
        { id: 'q', col: 1, row: 1, k: 'q', t: '¿Hubo un gatillante agudo?', s: 'Metabólico, tóxico, estructural agudo' },
        { id: 'pro', col: 2, row: 0, k: 'effect', t: 'Crisis sintomática aguda', s: 'Provocada' },
        { id: 'noep', col: 3, row: 0, k: 'good', t: 'No es epilepsia', s: 'Corregir la causa, sin FAE crónico' },
        { id: 'nop', col: 2, row: 2, k: 'effect', t: 'Primera crisis no provocada', s: 'Sin gatillante' },
        { id: 'est', col: 3, row: 2, k: 'refer', t: 'Estudio completo', s: 'Buscar lesión estructural' },
      ],
      edges: [
        { from: 'epi', to: 'q' }, { from: 'q', to: 'pro', label: 'sí' }, { from: 'pro', to: 'noep' },
        { from: 'q', to: 'nop', label: 'no' }, { from: 'nop', to: 'est' },
      ],
      steps: [
        { show: ['epi'], note: 'El paciente ya no está convulsionando',
          say: 'El escenario es este: un adulto que tuvo un episodio único de pérdida de conciencia con movimientos anormales, y que ahora está despierto frente a ti. Suponiendo que fue una crisis, y el síncope lo vemos enseguida, lo primero es saber si fue provocada o no.' },
        { show: ['q'], note: 'Buscar la agresión aguda que la explica',
          say: 'Es decir, ¿hubo una agresión aguda, sistémica, tóxica o cerebral, en estrecha relación temporal con la crisis?' },
        { show: ['pro', 'noep'], note: 'Principio EUNACOM: no es epilepsia',
          say: 'Si la hubo, es una crisis sintomática aguda, o provocada. Y este es un principio del examen: no es epilepsia. Tiene bajo riesgo de repetirse una vez resuelta la causa, y no requiere antiepiléptico crónico. Se trata la causa.' },
        { show: ['nop', 'est'], note: 'Sin gatillante: estudiar',
          say: 'Si no hubo ningún gatillante, es una primera crisis no provocada. Esa sí requiere un estudio completo, para buscar una causa estructural en el cerebro que aumente el riesgo de que se repita.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Crisis provocadas',
      title: 'Las causas que se buscan primero',
      cards: [
        { title: 'Metabólicas', tag: 'Se corrigen', kind: 'criteria', items: [
          { t: 'Hipoglicemia bajo 50 mg/dL', d: 'Primer examen: glicemia capilar',
            say: 'Veamos las causas de crisis provocadas. La primera, y la que se descarta en segundos, es la hipoglicemia severa, bajo cincuenta. Por eso la glicemia capilar es lo primero que se mide.' },
          { t: 'Hiponatremia bajo 120 o rápida', d: 'También hipocalcemia',
            say: 'Luego los electrolitos: la hiponatremia aguda grave, bajo ciento veinte o de instalación rápida, y la hipocalcemia.' },
          { t: 'Uremia o encefalopatía hepática', d: 'Falla de órgano',
            say: 'Y la falla de órganos: la uremia y la encefalopatía hepática.' },
        ] },
        { title: 'Tóxicas y cerebrales agudas', tag: 'Relación temporal', kind: 'alert', items: [
          { t: 'Abstinencia alcohólica', d: 'A las 24–48 h del cese',
            say: 'Entre las tóxicas, la clásica es la abstinencia de alcohol, que da crisis a las veinticuatro a cuarenta y ocho horas de dejar de beber.' },
          { t: 'Meningitis o encefalitis herpética', d: 'Infección aguda del SNC',
            say: 'Y las cerebrales agudas: una infección del sistema nervioso, como la meningitis o la encefalitis herpética…' },
          { t: 'TEC o ACV en fase hiperaguda', d: 'Isquémico o hemorrágico',
            say: '…un traumatismo encéfalo craneano agudo, o un accidente cerebrovascular en su fase hiperaguda. En todas ellas, la conducta es tratar la causa, no la epilepsia.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Síncope convulsivo',
      title: 'Segunda pregunta: ¿crisis o síncope?',
      nodes: [
        { id: 'gat', col: 0, row: 1, k: 'cause', t: 'De pie, calor, estrés', s: 'Reflejo vasovagal' },
        { id: 'hip', col: 1, row: 1, k: 'mech', t: 'Hipoperfusión cerebral global', s: 'Autolimitada' },
        { id: 'pro', col: 1, row: 0, k: 'effect', t: 'Pródromos', s: 'Mareo, visión en túnel, palidez, sudor' },
        { id: 'tro', col: 2, row: 2, k: 'mech', t: 'Hipoxia del tronco', s: 'Formación reticular' },
        { id: 'mio', col: 3, row: 2, k: 'trap', t: 'Mioclonías breves', s: 'Arrítmicas, menos de 15 s' },
        { id: 'rec', col: 3, row: 0, k: 'good', t: 'Recuperación lúcida', s: 'En segundos, al acostarse' },
      ],
      edges: [
        { from: 'gat', to: 'hip' }, { from: 'hip', to: 'pro', label: 'antes' },
        { from: 'hip', to: 'tro', label: 'si sigue de pie' }, { from: 'tro', to: 'mio' }, { from: 'hip', to: 'rec', label: 'al caer' },
      ],
      steps: [
        { show: ['gat', 'hip'], note: 'El síncope es un problema de flujo, no eléctrico',
          say: 'Ahora el gran diferencial: el síncope. Es una pérdida transitoria de conciencia por hipoperfusión cerebral global, que se autolimita. El típico es el vasovagal: estar de pie mucho rato, el calor, una aglomeración o ver sangre.' },
        { show: ['pro'], note: 'El síncope avisa',
          say: 'Como la presión cae de a poco, el síncope avisa: mareo, visión borrosa o en túnel, calor, palidez, frialdad y sudor profuso. Esos pródromos autonómicos graduales son la primera pista.' },
        { show: ['rec'], note: 'Al quedar horizontal, la sangre vuelve',
          say: 'Y cuando el paciente cae al suelo y queda acostado, la sangre vuelve al cerebro y se recupera en segundos, lúcido, orientado, y recordando los pródromos.' },
        { show: ['tro'], note: 'Si lo mantienen de pie, la hipoxia se prolonga',
          say: 'Pero aquí está la trampa. Si los testigos sostienen al paciente de pie, o el síncope se prolonga, la hipoxia alcanza la formación reticular del tronco.' },
        { show: ['mio'], note: 'Síncope convulsivo: hasta 15–20 % de los síncopes',
          say: 'Y aparecen sacudidas. Es el síncope convulsivo, y ocurre hasta en el quince a veinte por ciento de los síncopes. Pero esas mioclonías son distintas: arrítmicas, asincrónicas, de poca amplitud, sin fase tónica previa, empiezan después del colapso y duran menos de diez a quince segundos. Que haya movimientos no convierte un síncope en epilepsia.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Semiología',
      title: 'Síncope vs crisis: lo que cuenta el testigo',
      head: ['Parámetro', 'Síncope vasovagal', 'Síncope cardiogénico', 'Crisis tónico-clónica'],
      rows: [
        { cells: ['Gatillante', 'De pie, calor, estrés, agujas', 'Esfuerzo, palpitaciones', 'Privación de sueño, alcohol o nada'],
          say: 'Pongamos lado a lado lo que te cuenta el testigo. El vasovagal tiene un gatillante claro. El cardiogénico aparece con el esfuerzo o tras palpitaciones, y eso es una bandera roja. La crisis aparece tras privación de sueño, alcohol, o sin gatillante.' },
        { cells: ['Pródromos', 'Graduales: mareo, túnel, sudor', 'Breves o ausentes: cae en plomo', 'Ausentes, o aura focal de segundos'],
          say: 'Los pródromos: graduales en el vasovagal; breves o ausentes en el cardiogénico, que cae en plomo; y en la crisis, ausentes, o un aura focal de pocos segundos, como la sensación epigástrica que sube.' },
        { cells: ['Movimientos', 'Mioclonías tras caer, menos de 15 s', 'Ausentes o mioclonías breves', 'Tónica 10–20 s, luego clonías rítmicas'],
          say: 'Los movimientos: en el síncope, mioclonías breves después de caer. En la crisis, una secuencia estereotipada: fase tónica de diez a veinte segundos, y luego clonías rítmicas y sincrónicas.' },
        { cells: ['Lengua', 'Punta, si se golpea', 'Punta, si se golpea', 'Borde lateral, profunda'],
          say: 'La lengua, que se pregunta mucho. En el síncope, si hay mordedura, es en la punta, por el golpe de la mandíbula al caer. En la crisis, la contracción de los músculos masticatorios muerde el borde lateral, y eso es prácticamente patognomónico. Mira esta lengua: las marcas en el borde lateral son la mordedura típica de una crisis.',
            photo: { src: '_web/337_neuro_Primera_crisis_vs_síncope__Commons_1.jpg', label: 'Mordedura lateral de lengua', at: 'Mira esta lengua', credit: 'Wikimedia Commons, CC BY-SA 3.0' } },
        { cells: ['Color', 'Pálido como papel, sudoroso', 'Palidez cérea o cianosis', 'Cianosis peribucal'],
          say: 'El color: el sincopal está blanco como el papel y sudoroso. El que convulsiona está cianótico, porque el espasmo de los músculos respiratorios lo deja en apnea.' },
        { cells: ['Esfínteres', 'Muy infrecuente', 'Infrecuente', 'Frecuente'],
          say: 'La incontinencia de orina es frecuente en la crisis y muy rara en el síncope.' },
        { cells: ['Recuperación', 'Inmediata y lúcida', 'Rápida al volver el ritmo', 'Postictal de 15 a 60 min'],
          say: 'Y la diferencia más fuerte de todas: la recuperación. El síncope se recupera inmediato y lúcido. La crisis deja un período postictal de quince a sesenta minutos, con somnolencia, confusión, cefalea y dolores musculares.' },
        { cells: ['Laboratorio', 'Lactato y prolactina normales', 'ECG alterado', 'Lactato alto, prolactina alta transitoria'],
          say: 'En el laboratorio, la crisis eleva transitoriamente el lactato y la prolactina; el síncope no. Y el cardiogénico se delata en el electrocardiograma.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Otro imitador',
      title: 'Crisis no epilépticas psicógenas',
      cards: [
        { title: 'Pseudocrisis', tag: 'Mujer joven', kind: 'alert', items: [
          { t: 'Movimientos asincrónicos y bizarros', d: 'Balanceo pélvico, cabeza de lado a lado',
            say: 'Hay un tercer imitador: las crisis no epilépticas psicógenas, o pseudocrisis. Son más frecuentes en mujeres jóvenes, y los movimientos son asincrónicos y bizarros: balanceo de la pelvis, cabeza de un lado a otro.' },
          { t: 'Ojos cerrados con fuerza', d: 'Resiste la apertura ocular',
            say: 'El signo más útil: los ojos están fuertemente cerrados, y la paciente resiste cuando intentas abrirlos.' },
          { t: 'Prolactina y lactato normales', d: 'Reflejo pupilar sin alteración',
            say: 'Y el laboratorio acompaña: prolactina y lactato normales, a diferencia de la crisis verdadera.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Decisión de tratar',
      title: 'Tercera pregunta: ¿inicio un antiepiléptico?',
      cards: [
        { title: 'Definición ILAE 2014', tag: 'Una sola crisis basta si…', kind: 'key', items: [
          { t: 'Riesgo de recurrencia sobre 60 %', d: 'En 10 años: igual que tener 2 crisis',
            say: 'Llegamos a la decisión terapéutica. Antes se exigían dos crisis no provocadas para hablar de epilepsia. La definición de la ILAE de dos mil catorce permite diagnosticarla, y tratar, después de una sola crisis no provocada, si el riesgo de repetir supera el sesenta por ciento en diez años. Es el mismo riesgo que tener ya dos crisis.' },
        ] },
        { title: 'Qué da ese riesgo', tag: 'Iniciar FAE', kind: 'criteria', items: [
          { t: 'Lesión en RM o TAC', d: 'Infarto, hematoma, tumor, displasia, esclerosis mesial',
            say: '¿Qué da ese riesgo? Primero, una lesión epileptogénica en la neuroimagen: un infarto antiguo, un hematoma, una contusión, una malformación, un tumor, una displasia o una esclerosis mesial.' },
          { t: 'EEG epileptiforme', d: 'Puntas, ondas agudas, punta-onda',
            say: 'Segundo, un electroencefalograma con actividad epileptiforme inequívoca.' },
          { t: 'Crisis durante el sueño', d: 'O déficit focal permanente',
            say: 'Y el libro agrega la crisis durante el sueño y un déficit neurológico focal permanente al examen.' },
        ] },
        { title: 'Todo normal', tag: 'No iniciar FAE', kind: 'normal', items: [
          { t: 'Examen, imagen y EEG normales', d: 'Riesgo a 5 años: 30 a 40 %',
            say: 'En cambio, si el examen, la imagen y el electroencefalograma son normales, el riesgo a cinco años es de solo treinta a cuarenta por ciento.' },
          { t: 'Sin FAE: higiene de sueño, sin alcohol', d: 'Y no conducir',
            say: 'En ese paciente no se inicia antiepiléptico. Se indica higiene del sueño, cero alcohol, y restricción de manejo. Esa es la respuesta que el examen busca.' },
        ] },
      ],
    },
    {
      type: 'points',
      kicker: 'Epilepsia',
      title: 'Sospechar epilepsia y derivar',
      cards: [
        { title: 'Crisis focal', tag: 'Empieza localizada', kind: 'key', items: [
          { t: 'Aura, sacudida, trastorno visual', d: 'Temporal, motora u occipital',
            say: 'Tras una primera crisis, la sospecha de epilepsia se apoya en lo que cuentan los testigos. La crisis focal empieza con síntomas localizados: un aura epigástrica o de déjà vu en el lóbulo temporal, sacudidas de una mano en la corteza motora, un trastorno visual en el occipital.' },
          { t: 'Conciencia conservada o alterada', d: 'Mirada fija, automatismos, amnesia',
            say: 'Puede conservar la conciencia, y es focal simple, o alterarla: mirada fija, automatismos con la boca y amnesia.' },
        ] },
        { title: 'Crisis generalizada', tag: 'Ambos hemisferios', kind: 'criteria', items: [
          { t: 'Tónico-clónica o ausencias', d: 'Cianosis, mordedura lateral, postictal',
            say: 'La generalizada afecta ambos hemisferios desde el inicio: tónico-clónica, con pérdida de conciencia, cianosis, mordedura lateral de lengua y estado postictal, o ausencias breves con mirada fija, típicas del niño.' },
        ] },
        { title: 'Qué hace el médico general', tag: 'Sospechar y derivar', kind: 'alert', items: [
          { t: 'Examen, TAC, EEG, laboratorio', d: 'Medidas de seguridad',
            say: 'Con examen neurológico, TAC, electroencefalograma y laboratorio básico, sospechas la epilepsia, indicas medidas de seguridad: no conducir, no nadar solo, no trabajar en alturas.' },
          { t: 'Derivar al neurólogo', d: 'Confirma y elige el fármaco',
            say: 'Y derivas al neurólogo para confirmar el diagnóstico y definir el antiepiléptico. La selección del fármaco la vemos en la clase de epilepsia.' },
        ] },
      ],
    },


    {
      type: 'points',
      kicker: 'Estudio en urgencia',
      title: 'Qué pedir a toda primera crisis',
      cards: [
        { title: 'Laboratorio', tag: 'Buscar la causa provocada', kind: 'criteria', items: [
          { t: 'Glicemia capilar inmediata', d: 'Electrolitos: Na, K, Ca, Mg',
            say: 'Veamos el estudio en la urgencia. Glicemia capilar inmediata y electrolitos: sodio, potasio, calcio y magnesio.' },
          { t: 'Función renal y hepática, gases', d: 'Hemograma y tóxicos en orina',
            say: 'Función renal y hepática, gases venosos, donde el lactato sube en la crisis y es normal en el síncope, hemograma, y tóxicos en orina, como cocaína y anfetaminas.' },
        ] },
        { title: 'ECG y neuroimagen', tag: 'Obligatorios', kind: 'key', items: [
          { t: 'ECG de 12 derivaciones', d: 'QT largo, WPW, Brugada, bloqueos',
            say: 'El electrocardiograma es obligatorio en todos, porque el síncope cardiogénico puede disfrazarse de crisis. Se buscan QT largo, preexcitación de Wolff-Parkinson-White, patrón de Brugada o bloqueos bifasciculares.' },
          { t: 'TAC sin contraste en urgencia', d: 'Luego RM ambulatoria',
            say: 'Y la neuroimagen: TAC de cerebro sin contraste en la urgencia, para descartar un hematoma subdural, una hemorragia subaracnoidea, un tumor o un infarto extenso. Después, de forma electiva, la resonancia.' },
        ] },
        { title: 'Restricciones', tag: 'Obligación médico-legal', kind: 'alert', items: [
          { t: 'No conducir por 6 a 12 meses', d: 'Consignarlo en la ficha',
            say: 'Y algo que no se puede olvidar: advertir, y dejar escrito en la ficha, la prohibición de conducir por al menos seis a doce meses sin crisis.' },
          { t: 'Ni maquinaria, altura, ni nadar solo', d: 'Actividades de riesgo',
            say: 'Tampoco operar maquinaria pesada, trabajar en altura o nadar sin supervisión.' },
        ] },
      ],
    },
    {
      type: 'points',
      kicker: 'En el lactante',
      title: 'BRUE y muerte súbita del lactante',
      cards: [
        { title: 'BRUE', tag: 'Reemplaza al ALTE', kind: 'key', items: [
          { t: 'Menor de 1 año, < 1 minuto, resuelto', d: 'Cianosis, apnea, cambio de tono o de respuesta',
            say: 'El antiguo ALTE se reemplazó por el BRUE: un evento breve resuelto inexplicado. Es un episodio súbito, de menos de un minuto, en un lactante menor de un año, con cianosis o palidez, respiración ausente o irregular, cambio marcado del tono o de la respuesta, que no tiene explicación tras una buena anamnesis y examen.' },
          { t: 'Si hay causa, ya no es BRUE', d: 'Reflujo, convulsión, infección, maltrato',
            say: 'Si encuentras una causa, como reflujo con atragantamiento, una convulsión, una bronquiolitis o maltrato, ya no es un BRUE. Por eso se busca el relato de los padres, los antecedentes, la alimentación, el ambiente de sueño y signos de maltrato: hematomas, frenillo lesionado, hemorragias retinianas.' },
        ] },
        { title: 'Riesgo', tag: 'Estratificar', kind: 'criteria', items: [
          { t: 'Bajo riesgo: todo debe cumplirse', d: '> 60 días · ≥ 32 semanas · evento único < 1 min · sin RCP · examen normal',
            say: 'Es de bajo riesgo si cumple todo: más de sesenta días de vida, nacido a las treinta y dos semanas o más, un solo evento, menos de un minuto, sin reanimación por personal de salud, sin antecedentes relevantes y examen normal. Se educa a los padres, se les enseña reanimación, se observa con oximetría un rato y se controla pronto, sin exámenes de rutina.' },
          { t: 'Alto riesgo: hospitalizar y estudiar', d: '< 60 días, prematuro, repetido o prolongado',
            say: 'Los de alto riesgo, menores de sesenta días, prematuros o con eventos repetidos o prolongados, se hospitalizan y se estudian según la sospecha: infección, convulsiones, causa cardíaca o metabólica, reflujo, apnea y maltrato.' },
        ] },
        { title: 'Muerte súbita', tag: 'SMSL: prevención', kind: 'alert', items: [
          { t: 'Boca arriba, cuna firme, sin objetos', d: 'Máxima incidencia entre los 2 y 4 meses',
            say: 'La muerte súbita del lactante es el fallecimiento inesperado de un menor de un año que no se explica ni con la autopsia ni con la revisión de la escena. Su máxima incidencia es entre los dos y los cuatro meses. La prevención es simple: dormir siempre boca arriba, en cuna con colchón firme y sin almohadas ni peluches.' },
          { t: 'Misma pieza, no la misma cama', d: 'Lactancia, chupete, sin humo, vacunas al día',
            say: 'Compartir la pieza, pero no la cama, sobre todo si los padres fuman, toman alcohol o sedantes. Lactancia materna, chupete al dormir, evitar el sobrearropamiento, nada de humo de tabaco y vacunas al día.' },
        ] },
      ],
    },


    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Flujo que cae y vuelve',
      images: [
        { src: 'animaciones/neuro-10/A1_sincope_flujo.mp4', label: 'Síncope', credit: 'Animación propia' },
      ],
      steps: [
        { note: 'Recupera en segundos',
          say: 'En el síncope el flujo cerebral cae, el paciente pierde la conciencia, y al caer el flujo vuelve: recupera en segundos y orientado. En la crisis hay mordedura del borde lateral de la lengua y una confusión postictal larga.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos las tres preguntas en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Sacudidas breves tras desmayo con pródromos', 'Síncope convulsivo: educar', 'Llamarlo epilepsia e iniciar FAE'],
          say: 'Repasemos las trampas. Sacudidas breves después de un desmayo con pródromos y recuperación lúcida: síncope convulsivo. Se educa. Llamarlo epilepsia e iniciar un antiepiléptico es el error.' },
        { cells: ['Crisis con hipoglicemia o hiponatremia', 'Corregir la causa', 'Antiepiléptico crónico'],
          say: 'Crisis con hipoglicemia o hiponatremia: se corrige la causa. No es epilepsia, y no lleva antiepiléptico crónico.' },
        { cells: ['Primera crisis, estudio normal', 'Sin FAE; no conducir', 'Iniciar FAE de rutina'],
          say: 'Primera crisis no provocada con examen, imagen y electroencefalograma normales: no se inicia antiepiléptico, y se restringe la conducción.' },
        { cells: ['Primera crisis + lesión o EEG epileptiforme', 'Epilepsia: iniciar FAE', 'Esperar una segunda crisis'],
          say: 'Primera crisis con lesión en la imagen o electroencefalograma epileptiforme: ya es epilepsia, y se trata. Esperar una segunda crisis es el error.' },
        { cells: ['Síncope con esfuerzo, sin pródromos', 'ECG y estudio cardiológico', 'Tratarlo como vasovagal'],
          say: 'Síncope con el esfuerzo o sin pródromos: piensa en el corazón, electrocardiograma y estudio cardiológico.' },
        { cells: ['Mordedura en la punta de la lengua', 'Golpe al caer', 'Asumir crisis epiléptica'],
          say: 'Y la mordedura en la punta de la lengua es del golpe al caer. La que habla de crisis es la del borde lateral.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 22 años, sana, de pie en una fila bancaria calurosa y concurrida, refiere mareo intenso, visión borrosa y náuseas; se pone pálida y sudorosa y cae al suelo, inconsciente por unos 20 segundos. Una testigo describe sacudidas breves y aisladas de ambos brazos por unos 5 segundos. A los 2 minutos está despierta, orientada y recuerda los síntomas previos. Sin incontinencia ni mordedura de lengua. Examen físico y neurológico normales.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar levetiracetam y solicitar EEG ambulatorio' },
        { letter: 'B', text: 'Solicitar resonancia magnética de cerebro y EEG antes de decidir' },
        { letter: 'C', text: 'Explicar el diagnóstico de síncope vasovagal y educar en maniobras de contrapresión' },
        { letter: 'D', text: 'Iniciar ácido valproico por tratarse de una crisis generalizada' },
        { letter: 'E', text: 'Hospitalizar para video-EEG' },
      ],
      correct: 'C',
      explanation: 'Síncope vasovagal con mioclonías anóxicas (síncope convulsivo): gatillante claro, pródromos autonómicos, inconsciencia breve, sacudidas de menos de 15 s tras el colapso, sin mordedura lateral ni incontinencia, y recuperación inmediata y lúcida. No es una crisis epiléptica: no requiere EEG ni antiepilépticos; se educa en maniobras de contrapresión y medidas higiénico-dietéticas.',
      say: {
        stem: 'Vamos con un caso. Mujer de veintidós años, sana, de pie en una fila del banco, con calor y mucha gente. Siente un mareo intenso, visión borrosa y náuseas, se pone pálida y sudorosa, y cae, inconsciente por unos veinte segundos. Una testigo vio sacudidas breves de ambos brazos, unos cinco segundos. A los dos minutos está despierta, orientada, y recuerda lo que sintió antes. No hubo incontinencia ni mordedura, y su examen es normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: iniciar levetiracetam y pedir un electroencefalograma; pedir resonancia y electroencefalograma antes de decidir; explicar que fue un síncope vasovagal y educar; iniciar ácido valproico; u hospitalizar para video monitoreo. Piénsalo.',
        answer: 'Es la C. Tiene todo el síncope vasovagal: gatillante, pródromos, pérdida de conciencia breve, sacudidas de pocos segundos después de caer, y recuperación inmediata y lúcida. Es un síncope convulsivo. La A y la D tientan por las sacudidas, pero las mioclonías no convierten un síncope en epilepsia. No necesita electroencefalograma ni antiepilépticos: se educa en maniobras de contrapresión.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 72',
      stem: 'Un paciente de 78 años, diabético, en tratamiento con glibenclamida 15 mg/día, presenta convulsiones tónico-clónicas subintrantes desde hace algunos minutos. Hace 3 días se realizó control de exámenes, con glicemia de ayuno de 185 mg/dl y electrolitos plasmáticos dentro de rangos normales.',
      question: '¿Cuál es la causa más probable de sus convulsiones?',
      options: [
        { letter: 'A', text: 'Hipomagnesemia' },
        { letter: 'B', text: 'Hipernatremia' },
        { letter: 'C', text: 'Hipoglicemia' },
        { letter: 'D', text: 'Hipocalcemia' },
        { letter: 'E', text: 'Cetoacidosis' },
      ],
      correct: 'C',
      explanation: 'La glibenclamida tiene alto riesgo de hipoglicemia. Que la glicemia haya estado alta hace 3 días no impide que ahora esté baja (típicamente el paciente sube la dosis tras un mal control). Es una crisis sintomática aguda: se mide la glicemia capilar de inmediato.',
      say: {
        stem: 'Ahora las preguntas reales. La primera, del EUNACOM de agosto de dos mil veintiuno. Un paciente de setenta y ocho años, diabético, que usa glibenclamida quince miligramos al día, presenta convulsiones tónico-clónicas subintrantes desde hace unos minutos. Hace tres días tenía una glicemia de ciento ochenta y cinco y electrolitos normales.',
        question: '¿Cuál es la causa más probable de sus convulsiones?',
        options: 'Las opciones: hipomagnesemia, hipernatremia, hipoglicemia, hipocalcemia o cetoacidosis. Piénsalo.',
        answer: 'Es la C, hipoglicemia. La glibenclamida tiene alto riesgo de hipoglicemia, y es típico que el paciente suba la dosis cuando ve un examen alto. La glicemia de hace tres días es el distractor: no dice nada de la de hoy. Es una crisis provocada, y por eso la glicemia capilar es lo primero que se mide.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 144',
      stem: 'Un adolescente de 14 años presenta cefalea de una semana de evolución. Es traído al servicio de urgencia, tras presentar una convulsión tónico-clónica de 10 minutos de duración, luego de lo que quedó con confusión postictal. Su examen físico no tiene signos focales. Se solicita una tomografía axial computada de cerebro, que muestra una lesión quística de 3 cm en la zona frontotemporal y se realiza una punción lumbar, que muestra proteínas 60 mg/dl, con 70 células por mm3, con 70% de mononucleares y presencia de abundantes eosinófilos.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Quiste aracnoidal' },
        { letter: 'B', text: 'Astrocitoma pilocítico' },
        { letter: 'C', text: 'Encefalitis herpética' },
        { letter: 'D', text: 'Meningitis tuberculosa' },
        { letter: 'E', text: 'Neurocisticercosis' },
      ],
      correct: 'E',
      explanation: 'Primera crisis con una lesión quística en la TAC y eosinófilos en el LCR: neurocisticercosis (Taenia solium). Muestra por qué toda primera crisis lleva neuroimagen: buscar una causa estructural.',
      say: {
        stem: 'La segunda, del EUNACOM de diciembre de dos mil diecinueve. Un adolescente de catorce años con una semana de cefalea llega tras una convulsión de diez minutos, con confusión postictal. Sin signos focales. La TAC muestra una lesión quística de tres centímetros frontotemporal, y la punción lumbar tiene setenta células, predominio mononuclear, y abundantes eosinófilos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: quiste aracnoidal, astrocitoma pilocítico, encefalitis herpética, meningitis tuberculosa o neurocisticercosis. Piénsalo.',
        answer: 'Es la E, neurocisticercosis. La clave es la suma: una lesión quística más eosinófilos en el líquido. El quiste aracnoidal tienta por la palabra quiste, pero no explica los eosinófilos. Y fíjate en la lección para esta clase: por esto toda primera crisis lleva neuroimagen, para buscar una causa estructural.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 28',
      stem: 'Una paciente de 14 años presenta caída al suelo, con inconsciencia de 30 segundos, recuperándose luego por completo.',
      question: '¿Cuál de los siguientes antecedentes orientan a una causa cardiogénica del cuadro?',
      options: [
        { letter: 'A', text: 'Ausencia de episodios anteriores' },
        { letter: 'B', text: 'Relación con la micción' },
        { letter: 'C', text: 'Relación con el ejercicio' },
        { letter: 'D', text: 'Relación con la tos' },
        { letter: 'E', text: 'Ocurrencia al incorporarse desde la posición acostada' },
      ],
      correct: 'C',
      explanation: 'El síncope durante el ejercicio, o en reposo sin gatillante ni pródromos, sugiere causa cardiogénica. La micción y la tos se asocian a síncopes situacionales (reflejos); el incorporarse, a síncope ortostático.',
      say: {
        stem: 'La tercera, del EUNACOM de julio de dos mil diecinueve. Una adolescente de catorce años cae al suelo, inconsciente por treinta segundos, y se recupera por completo.',
        question: '¿Qué antecedente orienta a una causa cardiogénica?',
        options: 'Las opciones: que no haya tenido episodios antes, relación con la micción, relación con el ejercicio, relación con la tos, u ocurrir al levantarse. Piénsalo.',
        answer: 'Es la C, relación con el ejercicio. El síncope con el esfuerzo es la bandera roja del corazón. La micción y la tos son síncopes situacionales, que son reflejos, y el que ocurre al levantarse es ortostático.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 180',
      stem: 'Un paciente de 70 años, sin antecedentes de importancia presenta un síncope de reposo sin pródromo, con recuperación completa. Al examen físico se encuentra orientado, en Glasgow 15, con frecuencia cardíaca de 40 latidos por minuto.',
      question: '¿Cuál es el examen de elección para iniciar el estudio?',
      options: [
        { letter: 'A', text: 'Monitoreo electrocardiográfico de 24 horas' },
        { letter: 'B', text: 'Ecocardiograma' },
        { letter: 'C', text: 'TAC de cerebro' },
        { letter: 'D', text: 'Resonancia magnética de cerebro' },
        { letter: 'E', text: 'Electrocardiograma' },
      ],
      correct: 'E',
      explanation: 'Síncope de reposo, sin pródromos y con bradicardia: sospecha de síncope cardiogénico por bradiarritmia. El examen inicial es el electrocardiograma de 12 derivaciones, que puede mostrar bloqueos AV o enfermedad del nodo.',
      say: {
        stem: 'Y la última, del EUNACOM de julio de dos mil veinticuatro. Un hombre de setenta años tiene un síncope en reposo, sin pródromos, y se recupera por completo. Está orientado, con Glasgow quince, y una frecuencia cardíaca de cuarenta.',
        question: '¿Cuál es el examen de elección para iniciar el estudio?',
        options: 'Las opciones: Holter de veinticuatro horas, ecocardiograma, TAC de cerebro, resonancia de cerebro o electrocardiograma. Piénsalo.',
        answer: 'Es la E, el electrocardiograma. Síncope en reposo, sin pródromos y con bradicardia: es cardiogénico hasta demostrar lo contrario, y el primer examen es el electrocardiograma, que puede mostrar un bloqueo. El Holter tienta, pero el primer paso es el electrocardiograma. Y conecta con la clase: el electrocardiograma se pide a todo paciente con una primera pérdida de conciencia.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2019 · Pregunta 41",
      "stem": "Adolescente de 16 años convulsiona al despertar, en la mañana siguiente de haber estado jugando videojuegos hasta tarde. Además refiere mioclonías matinales frecuentes desde hace algunos meses. Su examen físico es normal, al igual que su examen neurológico.",
      "question": "¿Cuál es el tratamiento de elección?",
      "options": [
        {
          "letter": "A",
          "text": "Suspender por completo los videojuegos"
        },
        {
          "letter": "B",
          "text": "Ácido valproico"
        },
        {
          "letter": "C",
          "text": "Carbamazepina"
        },
        {
          "letter": "D",
          "text": "Melatonina en la noche"
        },
        {
          "letter": "E",
          "text": "Diazepam si convulsiona nuevamente"
        }
      ],
      "correct": "B",
      "explanation": "Mioclonías matinales más una crisis tónico-clónica al despertar tras privación de sueño: epilepsia mioclónica juvenil, una epilepsia generalizada que requiere tratamiento prolongado. El ácido valproico es de elección en varones (en mujeres en edad fértil se prefiere levetiracetam o lamotrigina). La carbamazepina agrava mioclonías y ausencias; evitar trasnochar ayuda, pero no reemplaza el fármaco.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil diecinueve. Un adolescente de dieciséis años convulsiona al despertar, después de trasnochar con videojuegos, y hace meses tiene sacudidas musculares en las mañanas. El examen neurológico es normal.",
        "question": "¿Cuál es el tratamiento de elección?",
        "options": "Las opciones: suspender los videojuegos, ácido valproico, carbamazepina, melatonina, o diazepam si vuelve a convulsionar. Piénsalo.",
        "answer": "Es la B. Es una epilepsia mioclónica juvenil, y en un varón el ácido valproico es el fármaco de elección. La carbamazepina tienta porque es un antiepiléptico clásico, pero empeora las mioclonías de las epilepsias generalizadas."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.10.4.005 · Electroencefalograma",
      "stem": "Hombre de 31 años, sano, presenta una primera crisis tónico-clónica generalizada no provocada, presenciada, con mordedura lateral de lengua y confusión postictal de 20 minutos. Examen neurológico y exámenes generales normales; RM de encéfalo normal. El EEG interictal de rutina, realizado a los 5 días, es normal.",
      "question": "¿Cuál es la interpretación más adecuada del EEG?",
      "options": [
        {
          "letter": "A",
          "text": "No descarta epilepsia: un EEG interictal es normal en una proporción relevante de pacientes, y puede repetirse con privación de sueño"
        },
        {
          "letter": "B",
          "text": "Descarta epilepsia y permite dar el alta sin controles"
        },
        {
          "letter": "C",
          "text": "Confirma una crisis psicógena no epiléptica"
        },
        {
          "letter": "D",
          "text": "Indica que la crisis fue un síncope convulsivo"
        },
        {
          "letter": "E",
          "text": "Obliga a iniciar fenitoína de inmediato"
        }
      ],
      "correct": "A",
      "explanation": "El EEG interictal de rutina detecta descargas epileptiformes solo en una parte de los pacientes con epilepsia; su sensibilidad aumenta con registros repetidos, privación de sueño o video-EEG. Un EEG normal no descarta epilepsia, y uno anormal tras una primera crisis aumenta el riesgo de recurrencia y apoya iniciar tratamiento. El diagnóstico sigue siendo clínico.",
      "say": {
        "stem": "Un hombre de treinta y un años tiene una primera crisis tónico clónica con mordedura lateral de lengua y confusión posterior. La resonancia es normal y el electroencefalograma de rutina a los cinco días también.",
        "question": "¿Cómo se interpreta este electroencefalograma normal?",
        "options": "Las opciones: no la descarta y puede repetirse con privación de sueño, descarta epilepsia, confirma una crisis psicógena, indica un síncope o obliga a iniciar fenitoína. Piénsalo.",
        "answer": "Es la A. El electroencefalograma entre crisis sale normal en muchos epilépticos, así que no descarta nada, y se puede repetir con privación de sueño. Pensar que lo descarta es el error tentador, pero el diagnóstico de una crisis es clínico."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.1.053 · Síncope",
      "stem": "Una adolescente de 14 años, sana, presentó pérdida de conciencia de 20 segundos mientras estaba de pie en un acto escolar con calor. Antes sintió náuseas, calor, visión borrosa y palidez; tras caer se recuperó completamente en segundos, sin confusión. No tiene antecedentes familiares de muerte súbita. Su examen cardiovascular y neurológico y el electrocardiograma son normales.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Solicitar electroencefalograma"
        },
        {
          "letter": "B",
          "text": "Solicitar TAC de cerebro"
        },
        {
          "letter": "C",
          "text": "Solicitar Holter de ritmo y ecocardiograma"
        },
        {
          "letter": "D",
          "text": "Educar sobre síncope vasovagal: hidratación y maniobras de contrapresión"
        },
        {
          "letter": "E",
          "text": "Iniciar ácido valproico"
        }
      ],
      "correct": "D",
      "explanation": "Pérdida de conciencia breve, con gatillante (bipedestación prolongada, calor), pródromo autonómico y recuperación rápida sin período postictal, con examen y ECG normales, es un síncope vasovagal, la causa más frecuente en adolescentes. Se maneja con educación, hidratación, sal y maniobras de contrapresión.",
      "say": {
        "stem": "Una adolescente de catorce años se desmayó veinte segundos estando de pie con calor, tras náuseas y visión borrosa, y se recuperó al tiro. Su examen y electrocardiograma son normales.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: electroencefalograma, TAC de cerebro, Holter y ecocardiograma, educar sobre síncope vasovagal o ácido valproico. Piénsalo.",
        "answer": "Es la D. Es un síncope vasovagal típico y se maneja con educación e hidratación. El Holter y el ecocardiograma tientan, pero se reservan para síncopes con ejercicio, palpitaciones, electrocardiograma anormal o muerte súbita familiar."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2016 · Pregunta 162",
      "stem": "Un niño de 24 meses ha presentado 3 episodios de llanto de breve duración, seguidos de apnea y luego pérdida de conciencia, recuperándose al poco tiempo. Al examen físico no tiene alteraciones.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Instruir a los padres en reanimación cardiopulmonar"
        },
        {
          "letter": "B",
          "text": "Solicitar TAC de cerebro"
        },
        {
          "letter": "C",
          "text": "Educar a los padres en el manejo de las emociones del niño"
        },
        {
          "letter": "D",
          "text": "Solicitar electroencefalograma"
        },
        {
          "letter": "E",
          "text": "Indicar monitor cardíaco"
        }
      ],
      "correct": "C",
      "explanation": "Llanto o enojo seguido de apnea, cianosis o palidez y breve pérdida de conciencia con recuperación espontánea, entre los 6 meses y 5 años, son espasmos del sollozo (apneas emotivas): eventos benignos sin riesgo vital. Se tranquiliza y educa a los padres y se descarta anemia ferropénica, que los aumenta. No requieren EEG ni neuroimagen.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil dieciséis. Un niño de dos años ha tenido tres episodios en que llora, deja de respirar y pierde la conciencia brevemente, recuperándose solo, con examen normal.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: enseñar reanimación, TAC de cerebro, educar en el manejo de las emociones, electroencefalograma o monitor cardíaco. Piénsalo.",
        "answer": "Es la C. Son espasmos del sollozo, benignos, y basta educar a los padres. El electroencefalograma tienta por la pérdida de conciencia, pero el gatillante emocional claro y la recuperación rápida no sugieren epilepsia."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.10.1.022 · Síndromes convulsivos sintomáticos",
      "stem": "Hombre de 62 años, diabético usuario de insulina, presenta una crisis tónico-clónica generalizada en su casa. Al llegar el SAMU tiene glicemia capilar de 28 mg/dL; se administra glucosa endovenosa y recupera completamente la conciencia. Examen neurológico normal.",
      "question": "¿Cuál es la conducta más adecuada respecto de la crisis?",
      "options": [
        {
          "letter": "A",
          "text": "Iniciar ácido valproico de mantención"
        },
        {
          "letter": "B",
          "text": "Diagnosticar epilepsia del adulto"
        },
        {
          "letter": "C",
          "text": "Iniciar levetiracetam por al menos 2 años"
        },
        {
          "letter": "D",
          "text": "Resonancia y electroencefalograma antes de reiniciar la insulina"
        },
        {
          "letter": "E",
          "text": "Corregir la causa y ajustar el tratamiento de la diabetes, sin fármaco antiepiléptico crónico"
        }
      ],
      "correct": "E",
      "explanation": "Una crisis desencadenada por una alteración metabólica aguda (hipoglicemia, hiponatremia, hipocalcemia, abstinencia alcohólica) es una crisis sintomática aguda, no epilepsia. Se trata corrigiendo la causa y previniendo que se repita; no requiere antiepiléptico de mantención, porque el riesgo de recurrencia depende de la causa.",
      "say": {
        "stem": "Hombre diabético con insulina que convulsiona con una glicemia de veintiocho y se recupera por completo con glucosa.",
        "question": "¿Qué haces respecto a la crisis?",
        "options": "Las opciones: valproato de mantención, diagnosticar epilepsia, levetiracetam por años, estudiar antes de reiniciar insulina o corregir la causa sin antiepiléptico. Piénsalo.",
        "answer": "Es la E. Corregir la causa y ajustar la diabetes, sin antiepilépticos. Es una crisis sintomática aguda por hipoglicemia, no una epilepsia."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Crisis o síncope', tag: 'Lo cuenta el testigo', kind: 'key', items: [
          { t: 'Síncope: pródromos y recuperación lúcida', d: 'Mioclonías breves no son epilepsia',
            say: 'Cerremos con las reglas de oro. El síncope avisa con pródromos y se recupera lúcido en segundos, aunque haya tenido sacudidas breves.' },
          { t: 'Crisis: lengua lateral, cianosis, postictal', d: 'Postictal de 15 a 60 minutos',
            say: 'La crisis muerde el borde lateral de la lengua, deja cianosis y un postictal de quince a sesenta minutos.' },
        ] },
        { title: 'Provocada o no', tag: 'Primero la causa', kind: 'alert', items: [
          { t: 'Crisis provocada no es epilepsia', d: 'Se corrige la causa, sin FAE crónico',
            say: 'La crisis provocada no es epilepsia: se corrige la causa.' },
          { t: 'Glicemia, electrolitos, ECG y TAC', d: 'A toda primera crisis',
            say: 'Y a toda primera crisis, glicemia, electrolitos, electrocardiograma y TAC.' },
        ] },
        { title: 'Tratar o no', tag: 'Riesgo sobre 60 %', kind: 'pharma', items: [
          { t: 'Lesión o EEG epileptiforme: FAE', d: 'Ya es epilepsia',
            say: 'Si hay lesión en la imagen o electroencefalograma epileptiforme, ya es epilepsia y se trata.' },
          { t: 'Todo normal: sin FAE, sin manejar', d: 'Por 6 a 12 meses',
            say: 'Si todo es normal, no se trata, pero no maneja por seis a doce meses. Si te llevas una sola idea de hoy: antes de pensar en epilepsia, pregúntate si fue un síncope y si fue provocada. En la próxima clase cambiamos de bloque y entramos a los trastornos del movimiento con la enfermedad de Parkinson. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Primera pérdida de conciencia con movimientos',
    root: N('start', 'Primer episodio con movimientos', 'Relato del testigo',
      'Adulto que tuvo un primer episodio de pérdida de conciencia con movimientos. Todo parte por el relato del testigo.',
      ['', N('q', '¿Pródromos y recuperación lúcida?', 'Mioclonías breves tras caer',
        '¿Tuvo pródromos autonómicos, sacudidas breves después de caer, y recuperación inmediata y lúcida?',
        ['SÍ', N('ok', 'Síncope convulsivo', 'ECG; si es vasovagal, educar',
          'Si es así, es un síncope. Electrocardiograma, y si es vasovagal, educación en maniobras de contrapresión, sin antiepilépticos. Si aparece con esfuerzo o sin pródromos, estudio cardiológico.')],
        ['NO', N('q', '¿Hay una causa aguda?', 'Glicemia, electrolitos, tóxicos, TAC',
          'Si fue una crisis, con postictal o mordedura lateral, se busca una causa aguda: glicemia, electrolitos, tóxicos, electrocardiograma y TAC.',
          ['SÍ', N('do', 'Crisis provocada', 'Corregir la causa, sin FAE crónico',
            'Si hay una causa aguda, es una crisis provocada: se corrige la causa, sin antiepiléptico crónico.')],
          ['NO', N('q', '¿Riesgo de recurrencia sobre 60 %?', 'RM, EEG, crisis en sueño, déficit',
            'Si no la hay, es una primera crisis no provocada. ¿Tiene lesión en la imagen, electroencefalograma epileptiforme, crisis durante el sueño o déficit focal?',
            ['SÍ', N('alert', 'Epilepsia: iniciar FAE', 'Derivar a neurología',
              'Si tiene alguno, ya es epilepsia: se inicia antiepiléptico y se deriva a neurología.')],
            ['NO', N('refer', 'Sin FAE', 'Higiene de sueño, sin alcohol, no conducir',
              'Si todo es normal, no se inicia antiepiléptico: higiene del sueño, sin alcohol y sin conducir por seis a doce meses.')])])])]),
  },
};
