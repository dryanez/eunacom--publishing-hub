// Clase 17.18 (Psiquiatría) — guion docente escrito a mano (estándar Módulo 1), reescrito desde el tema del libro. Tier 2 del libro (tema muy amplio: se usan todas las secciones).
// Fuente clínica: books/scripts/dataset_psiquiatria.cjs (psiq-18). Códigos del Perfil: 5.01.1.028 TDAH, 5.01.1.018 TCA, 5.01.1.023 TEA, 5.01.1.024 aprendizaje, 5.01.1.025 retardo mental,
// 5.01.1.026 enuresis, 5.01.1.030 oposicionista desafiante, 5.01.1.031 disocial, 5.01.1.033 ansiosos en niños, 5.01.4.004 WAIS y WISC, 2.01.1.082, 2.01.1.085, 2.01.1.139 y 2.01.1.142
// (books/data/v3_topic_codes.json).
// Preguntas reales (class_questions.cjs psiq-18 y --search sobre anorexia, bulimia, atracón, déficit atencional, autismo, aprendizaje, oposicionista, disocial, tics, enuresis):
//   Diciembre 2025 P145 (anorexia clásica con IMC 16 y minimización), Julio 2015 P80 (anorexia con purga: la purga no es exclusiva de la bulimia), Julio 2016 P45 (bulimia con ayuno y ejercicio como compensación),
//   Diciembre 2019 P76 (hipertrofia parotídea como signo de vómitos), Diciembre 2025 P70 (TDAH del adulto, de alta capacidad), Julio 2024 P145 (trastorno disocial en un niño de 11 años),
//   Julio 2015 P87 (dislexia), Enero 2023 P37 (TEA: rutina, aislamiento y juego sin función), Julio 2025 P105 (niño con TEA que se golpea la cabeza: derivar), Julio 2017 P64 (tics transitorios).
// No usadas por repetir: Julio 2025 P4, Julio 2019 P168 (anorexia), Diciembre 2024 P141 (bulimia, igual que Julio 2016 P45), Julio 2024 P155, Enero 2023 P176, Julio 2015 P86 (TDAH adulto),
//   Julio 2015 P77 y P78, Diciembre 2017 P140, Diciembre 2019 P74, Julio 2019 P47 (TEA clásico), Julio 2025 P38 (trastorno de conducta, mismo tema que Julio 2024 P145).
// Fuera de la clase: Julio 2016 P78 (ausencias en un escolar: neurología), Diciembre 2025 P7 (enuresis en una anciana de 95 años, geriatría), Julio 2017 P152 (agorafobia).
// Sin pregunta real sobre enuresis infantil, discapacidad intelectual, ansiedad por separación, atracones, pica ni realimentación: se resumen en la voz y en la tabla de trampas.
// Imágenes: ninguna. Única candidata: Bates p302 «Parotid Gland Enlargement» (classes/media/_candidatas_b, F254), que muestra a un niño pequeño con el tronco desnudo y no una paciente con bulimia;
//   no se usa (niño desnudo y no es la entidad de la clase). No hay foto verificada de lanugo, signo de Russell ni erosión dental en atlas_fotos_verificadas.json ni en classes/media/biblioteca.
// Animación: gráfico solo de código (psiq_nuevas.html?v=tca): escala del IMC con los cortes de la anorexia y del ingreso, y curva del fósforo en una realimentación rápida frente a una lenta con suplementos.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'psiq-18',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'TDAH, trastornos de la conducta alimentaria y los otros trastornos del niño y del adolescente que se piden en el examen',
      say: 'Bienvenido. Hoy cubrimos la psiquiatría del niño y del adolescente, y es una clase larga porque el Perfil pide muchos temas. Dos son los grandes: el déficit atencional y los trastornos de la conducta alimentaria, con los criterios que obligan a hospitalizar a una paciente con anorexia. Después veremos con más rapidez el autismo, la discapacidad intelectual, los trastornos del aprendizaje, la conducta, la ansiedad infantil, la enuresis y los tics. Partamos por el déficit atencional.',
    },

    {
      type: 'flow',
      kicker: 'TDAH',
      title: 'Poca dopamina y noradrenalina en la corteza prefrontal',
      nodes: [
        { id: 'g', col: 0, row: 2, k: 'cause', t: 'Base genética', s: 'Heredabilidad cercana al 75 %' },
        { id: 'd', col: 2, row: 2, k: 'mech', t: 'Déficit de dopamina y noradrenalina', s: 'Corteza prefrontal' },
        { id: 'i', col: 4, row: 0, k: 'effect', t: 'Inatención', s: 'Se distrae, olvida, no termina' },
        { id: 'h', col: 4, row: 2, k: 'effect', t: 'Hiperactividad e impulsividad', s: 'No se queda quieto, interrumpe' },
        { id: 'm', col: 2, row: 4, k: 'good', t: 'Metilfenidato', s: 'Bloquea la recaptación' },
      ],
      edges: [
        { from: 'g', to: 'd' }, { from: 'd', to: 'i' }, { from: 'd', to: 'h' }, { from: 'm', to: 'd', label: 'corrige' },
      ],
      steps: [
        { show: ['g', 'd'], note: 'Un trastorno del neurodesarrollo',
          say: 'El trastorno por déficit de atención e hiperactividad es una condición del neurodesarrollo, con una base genética poligénica y una heredabilidad cercana al setenta y cinco por ciento. Se relaciona con un déficit de dopamina y noradrenalina en la corteza prefrontal, la zona que organiza la atención y frena los impulsos.' },
        { show: ['i', 'h'], note: 'Dos grupos de síntomas',
          say: 'De ahí salen dos grupos de síntomas: la inatención, en que el niño se distrae, olvida y no termina las tareas, y la hiperactividad con impulsividad, en que no se queda quieto e interrumpe.' },
        { show: ['m'], note: 'El fármaco actúa en el mismo punto',
          say: 'Y el tratamiento farmacológico actúa justo ahí: el metilfenidato bloquea la recaptación de dopamina y noradrenalina en la corteza prefrontal, y mejora la concentración.' },
      ],
    },

    {
      type: 'points',
      kicker: 'TDAH',
      title: 'Criterios diagnósticos: cuatro obligatorios',
      cards: [
        { title: 'Los cuatro criterios', tag: 'DSM-5', kind: 'criteria', items: [
          { t: '6 síntomas durante 6 meses', d: 'Inatención o hiperactividad; adultos: 5',
            say: 'El diagnóstico exige cuatro cosas. Primero, al menos seis síntomas de inatención o seis de hiperactividad-impulsividad durante seis meses. En mayores de diecisiete años, incluidos los adultos, bastan cinco.' },
          { t: 'Varios síntomas antes de los 12 años', d: 'Inicio en la infancia',
            say: 'Segundo, varios síntomas presentes antes de los doce años, aunque se consulte de adulto.' },
          { t: 'En al menos dos entornos', d: 'Colegio y casa',
            say: 'Tercero, que se manifiesten en al menos dos lugares, por ejemplo el colegio y la casa. Si un niño solo se distrae en clases pero rinde y se concentra en su hogar, no es un TDAH.' },
          { t: 'Deterioro evidente', d: 'Académico o social',
            say: 'Y cuarto, un deterioro evidente del rendimiento académico o social.' },
        ] },
        { title: 'Presentaciones', tag: 'Subtipos', kind: 'key', items: [
          { t: 'Combinada: la más frecuente', d: 'Inatención e hiperactividad',
            say: 'La presentación combinada es la más frecuente.' },
          { t: 'Inatenta: frecuente en niñas', d: 'Pasa desapercibida',
            say: 'La de predominio inatento es frecuente en niñas y pasa desapercibida, porque no hay hiperactividad que moleste en la sala.' },
          { t: 'Adulto: de alta capacidad', d: 'Procrastina, pierde cosas, hace listas',
            say: 'En el adulto se ve la historia desde la infancia de olvidos, procrastinación y dificultad para terminar tareas, que se descompensa cuando aumenta la carga laboral.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'TDAH',
      title: 'Tratamiento: multimodal y metilfenidato',
      cards: [
        { title: 'Intervención', tag: 'Primero lo no farmacológico', kind: 'key', items: [
          { t: 'Psicopedagogía y adecuaciones', d: 'PIE: programa de integración escolar',
            say: 'El tratamiento es multimodal: psicopedagogía y adecuaciones curriculares dentro del programa de integración escolar, además de orientación a la familia.' },
        ] },
        { title: 'Psicoestimulante', tag: 'Primera línea farmacológica', kind: 'pharma', items: [
          { t: 'Metilfenidato', d: 'Acción corta o liberación prolongada',
            say: 'El tratamiento farmacológico de primera línea son los psicoestimulantes, y el que debes recordar es el metilfenidato, en formulación de acción corta o de liberación prolongada.' },
          { t: 'Menos apetito: curva de crecimiento', d: 'Insomnio de conciliación, taquicardia, alza de PA',
            say: 'Sus efectos adversos son la disminución del apetito, por lo que se vigila la curva pondoestatural, el insomnio de conciliación y una leve taquicardia o alza de la presión.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Anorexia nerviosa',
      title: 'Tres criterios y dos subtipos',
      cards: [
        { title: 'Criterios cardinales', tag: 'Los tres', kind: 'criteria', items: [
          { t: 'Restricción y peso bajo', d: 'IMC < 18,5 o percentil < 5 en niños',
            say: 'La anorexia nerviosa se define por tres criterios. Primero, una restricción del aporte de energía que lleva a un peso significativamente bajo: un índice de masa corporal, el IMC, menor de dieciocho y medio en adultos, o un percentil de peso para la talla bajo cinco en niños.' },
          { t: 'Miedo intenso a engordar', d: 'O conducta que impide subir de peso',
            say: 'Segundo, un miedo intenso a ganar peso o a engordar, o una conducta persistente que impide subirlo.' },
          { t: 'Imagen corporal distorsionada', d: 'No reconoce el peligro del bajo peso',
            say: 'Y tercero, una alteración de la percepción del propio peso o cuerpo, o la falta de reconocimiento del peligro del peso bajo. La paciente se ve gorda estando delgadísima.' },
        ] },
        { title: 'Subtipos', tag: 'Cómo restringe', kind: 'normal', items: [
          { t: 'Restrictivo puro', d: 'Dieta y ejercicio',
            say: 'El subtipo restrictivo baja de peso con dieta, ayuno y ejercicio extenuante.' },
          { t: 'Purgativo o con atracones', d: 'La purga no es exclusiva de la bulimia',
            say: 'En el subtipo purgativo, o con atracones, además se induce vómitos o usa laxantes. Esto se pregunta: la purga también ocurre en la anorexia, y lo que la distingue es el peso bajo.' },
          { t: 'Niega la enfermedad', d: 'Oculta, miente, normaliza la delgadez',
            say: 'Y la paciente típicamente niega estar enferma, oculta el cuerpo con ropa grande, miente y dice que sus amigas hacen lo mismo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Anorexia nerviosa',
      title: 'Qué le pasa al cuerpo y cuándo hospitalizar',
      cards: [
        { title: 'Signos de desnutrición', tag: 'Examen físico', kind: 'key', items: [
          { t: 'Bradicardia, hipotensión, hipotermia', d: 'FC < 50 lpm',
            say: 'La desnutrición se ve en el examen: bradicardia sinusal bajo cincuenta por minuto, hipotensión ortostática e hipotermia.' },
          { t: 'Lanugo y piel amarilla seca', d: 'Hipercarotenemia',
            say: 'La piel es seca y amarillenta, por hipercarotenemia, y aparece lanugo, que es un vello fino y suave en el dorso y la cara.' },
          { t: 'Amenorrea y osteoporosis', d: 'Amenorrea ya no es criterio',
            say: 'Hay amenorrea, que el DSM cinco ya no exige, pero que es muy frecuente, y a largo plazo osteoporosis.' },
        ] },
        { title: 'Hospitalización inmediata', tag: 'Riesgo de muerte súbita', kind: 'alert', items: [
          { t: 'IMC < 13 a 14, o pérdida > 20 % en 3 meses', d: 'Desnutrición grave',
            say: 'La paciente se hospitaliza de inmediato si tiene un IMC menor de trece a catorce, o una pérdida aguda de más del veinte por ciento del peso en tres meses.' },
          { t: 'FC < 40, PAS < 80, QTc > 460', d: 'Arritmias ventriculares',
            say: 'También si tiene frecuencia cardíaca bajo cuarenta o arritmias ventriculares, presión sistólica bajo ochenta o hipotensión ortostática grave, o un intervalo QT corregido de más de cuatrocientos sesenta milisegundos.' },
          { t: 'K < 3, hipofosfatemia, hipoglicemia', d: 'Trastornos metabólicos',
            say: 'Y si hay hipokalemia bajo tres, hipofosfatemia o hipoglicemia sintomática. El riesgo es la muerte súbita por arritmia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Bulimia nerviosa',
      title: 'Atracón, compensación y peso normal',
      cards: [
        { title: 'Criterios', tag: 'Al menos 1 por semana por 3 meses', kind: 'criteria', items: [
          { t: 'Atracones: grandes, rápidos, sin control', d: 'En menos de 2 horas',
            say: 'La bulimia nerviosa son episodios recurrentes de atracón: ingesta voraz y rápida, en menos de dos horas, de una cantidad desmesurada, con sensación de pérdida de control.' },
          { t: 'Compensación inapropiada', d: 'Vómitos, laxantes, diuréticos, ayuno, ejercicio',
            say: 'Seguidos de conductas compensatorias para no engordar: vómitos autoinducidos, laxantes, diuréticos, ayuno o ejercicio extenuante. Se exige al menos un episodio por semana durante tres meses.' },
          { t: 'Peso normal o sobrepeso', d: 'A diferencia de la anorexia',
            say: 'Y a diferencia de la anorexia, el peso es habitualmente normal o con sobrepeso. Por eso pasa desapercibida.' },
        ] },
        { title: 'Signos y tratamiento', tag: 'Examen y fármaco', kind: 'pharma', items: [
          { t: 'Esmalte erosionado, parótidas, Russell', d: 'Signo de Russell: callos en los nudillos',
            say: 'Los signos físicos son la erosión del esmalte dental por el lado de la lengua, la hipertrofia bilateral de las parótidas y el signo de Russell, que son callosidades en los nudillos por provocarse el vómito.' },
          { t: 'Fluoxetina 60 mg al día', d: 'Más terapia cognitivo-conductual',
            say: 'El fármaco aprobado es la fluoxetina en dosis altas, sesenta miligramos al día, que reduce los atracones y las purgas, junto con terapia cognitivo-conductual.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Realimentación',
      title: 'El síndrome de realimentación',
      cards: [
        { title: 'Qué es', tag: 'Emergencia metabólica', kind: 'alert', items: [
          { t: 'Hidratos de carbono de golpe', d: 'En un paciente caquéctico',
            say: 'El síndrome de realimentación es una emergencia metabólica que aparece al reintroducir hidratos de carbono de forma brusca en un paciente caquéctico. El estímulo de la insulina empuja glucosa, potasio y fósforo hacia dentro de las células.' },
          { t: 'Hipofosfatemia severa aguda', d: 'Paro, edema pulmonar, convulsiones, rabdomiólisis',
            say: 'El resultado es una hipofosfatemia severa y aguda, que puede causar paro cardíaco, edema pulmonar agudo, convulsiones y rabdomiólisis.' },
        ] },
        { title: 'Prevención', tag: 'Lenta y con suplementos', kind: 'key', items: [
          { t: 'Empezar con 1.000 a 1.200 kcal al día', d: 'Enteral, lenta y progresiva',
            say: 'Se previene realimentando de forma enteral, lenta y progresiva, partiendo con mil a mil doscientas calorías al día.' },
          { t: 'Fósforo, magnesio y tiamina', d: 'Profilaxis desde el inicio',
            say: 'Y suplementando desde el comienzo fósforo, magnesio y tiamina. Es lo que el examen espera en una paciente con anorexia grave que ingresa.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Los tres trastornos',
      title: 'Anorexia, bulimia y atracón',
      head: ['Dato', 'Anorexia', 'Bulimia', 'Atracón'],
      rows: [
        { cells: ['Peso', 'Muy bajo: IMC < 18,5', 'Normal o sobrepeso', 'Sobrepeso u obesidad'],
          say: 'El peso es la primera diferencia. En la anorexia es significativamente bajo; en la bulimia, normal o con sobrepeso; y en el trastorno por atracón, sobrepeso u obesidad.' },
        { cells: ['Atracones', 'Solo en el subtipo purgativo', 'Siempre', 'Siempre, con culpa'],
          say: 'Los atracones están siempre en la bulimia y en el atracón, y solo en el subtipo purgativo de la anorexia.' },
        { cells: ['Compensación', 'Restricción, ejercicio, purgas', 'Siempre presente', 'Ausente'],
          say: 'Las conductas compensatorias están presentes en la bulimia siempre, y en el trastorno por atracón están estrictamente ausentes, y esa es la diferencia clave entre los dos.' },
        { cells: ['Imagen corporal', 'Distorsión severa', 'Preocupación excesiva', 'Malestar sin distorsión'],
          say: 'La distorsión de la imagen corporal es severa en la anorexia y menor en los otros.' },
        { cells: ['Fármaco', 'Ninguno revierte la emaciación', 'Fluoxetina 60 mg y TCC', 'TCC; lisdexanfetamina o topiramato'],
          say: 'Y el fármaco: en la anorexia, ninguno revierte la emaciación; en la bulimia, fluoxetina en dosis altas con psicoterapia; en el atracón, la psicoterapia cognitivo-conductual, con un ISRS de apoyo, y el libro cita también lisdexanfetamina o topiramato.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Atracones e infancia',
      title: 'Atracón, pica, rumiación y ARFID',
      cards: [
        { title: 'Trastorno por atracones', tag: 'Sin conducta compensatoria', kind: 'criteria', items: [
          { t: 'Al menos 1 por semana por 3 meses', d: 'Ingesta enorme, sin hambre, con vergüenza',
            say: 'El trastorno por atracones son episodios, al menos uno por semana durante tres meses, de ingesta de una cantidad muy grande en poco tiempo, con pérdida de control, hasta sentirse mal y sin hambre, con vergüenza. No hay conductas compensatorias.' },
          { t: 'Obesidad, depresión, ansiedad', d: 'TCC; ISRS de apoyo; derivar',
            say: 'Se asocia a obesidad, depresión y ansiedad. Se trata con terapia cognitivo-conductual, un ISRS de apoyo, el manejo de la obesidad, y derivación a salud mental.' },
        ] },
        { title: 'En la infancia', tag: 'Sospecha y derivación', kind: 'normal', items: [
          { t: 'Pica: ingiere no nutritivos un mes o más', d: 'Tierra o yeso; anemia ferropénica',
            say: 'La pica es la ingesta persistente, por un mes o más, de sustancias no nutritivas, como tierra o yeso. Es frecuente en el retraso del desarrollo y en la anemia ferropénica, por lo que se piden hemograma, ferritina, plumbemia y estudio de parásitos.' },
          { t: 'Rumiación y ARFID', d: 'Regurgita y remastica; restringe sin distorsión corporal',
            say: 'La rumiación es regurgitar y volver a masticar. El trastorno de evitación o restricción de la ingesta, el ARFID, es la restricción por desinterés, aversión sensorial o miedo a atragantarse, con falla de crecimiento y sin distorsión de la imagen corporal.' },
          { t: 'Descartar causa orgánica', d: 'Reflujo, alergia, estreñimiento, anemia',
            say: 'Antes de etiquetar una conducta, se descartan causas orgánicas, se grafica el crecimiento, y se educa a los padres: comidas regulares, sin pantallas y sin forzar.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Neurodesarrollo',
      title: 'Trastorno del espectro autista',
      cards: [
        { title: 'Qué es y cómo se sospecha', tag: 'Sospecha y derivación', kind: 'criteria', items: [
          { t: 'Dos dominios', d: 'Comunicación social; conductas repetitivas',
            say: 'El trastorno del espectro autista tiene dos dominios: un déficit persistente en la comunicación y la interacción social, y patrones restringidos y repetitivos, como estereotipias, rigidez ante los cambios, intereses fijos y reactividad sensorial alterada. Parte en la infancia temprana y es cuatro veces más frecuente en varones.' },
          { t: 'Señales de alerta', d: 'Sin gestos a los 12 meses; sin palabras a los 16',
            say: 'Las señales de alerta son no tener balbuceo ni gestos a los doce meses, ninguna palabra a los dieciséis, ninguna frase de dos palabras a los veinticuatro, y cualquier pérdida de lenguaje o habilidades sociales a cualquier edad.' },
        ] },
        { title: 'Conducta', tag: 'No esperar el diagnóstico', kind: 'key', items: [
          { t: 'Tamizaje M-CHAT entre 16 y 30 meses', d: 'Controles de 18 y 24 meses',
            say: 'El tamizaje es con el M-CHAT, entre los dieciséis y los treinta meses, en los controles de dieciocho y veinticuatro. Se descarta hipoacusia con audiometría.' },
          { t: 'Derivar e iniciar intervención', d: 'Neurología o psiquiatría infantil; ADOS-2',
            say: 'Se deriva a neurología o psiquiatría infantil para confirmar con el ADOS-dos y se parte con intervención temprana intensiva sin esperar el diagnóstico definitivo.' },
          { t: 'Sin fármaco para el núcleo', d: 'Risperidona o aripiprazol solo por especialista',
            say: 'No hay un fármaco para el núcleo del trastorno. La risperidona o el aripiprazol se reservan, por el especialista, para la irritabilidad o la agresividad graves. Y las vacunas no causan autismo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Neurodesarrollo',
      title: 'Discapacidad intelectual y trastornos del aprendizaje',
      cards: [
        { title: 'Discapacidad intelectual', tag: 'CI menor de 70', kind: 'criteria', items: [
          { t: 'CI < 70 y déficit adaptativo', d: 'Inicio en el desarrollo',
            say: 'La discapacidad intelectual, antes llamada retardo mental, requiere un coeficiente intelectual menor de setenta, un déficit en la conducta adaptativa y un inicio en el período del desarrollo.' },
          { t: 'Leve 50-69; moderada 35-49', d: 'Grave 20-34; profunda < 20',
            say: 'Es leve con un CI de cincuenta a sesenta y nueve, que es cerca del ochenta y cinco por ciento; moderada entre treinta y cinco y cuarenta y nueve; grave entre veinte y treinta y cuatro; y profunda bajo veinte.' },
          { t: 'Sospechar por hitos o fracaso escolar', d: 'EEDP bajo 2 años; TEPSI de 2 a 5',
            say: 'Se sospecha por retraso de los hitos, con el EEDP bajo los dos años y el TEPSI entre dos y cinco, o por fracaso escolar. Las causas incluyen síndrome de Down, X frágil, alcohol en el embarazo, hipotiroidismo congénito y fenilcetonuria.' },
        ] },
        { title: 'Aprendizaje', tag: 'Persistente, 6 meses o más', kind: 'key', items: [
          { t: 'Dislexia, disgrafía, discalculia', d: 'Lectura, escritura, cálculo',
            say: 'El trastorno específico del aprendizaje son dificultades persistentes, seis meses o más pese a una intervención adecuada, en la lectura, que es la dislexia, con lectura lenta y confusión de letras como la be y la de; en la escritura; o en el cálculo.' },
          { t: 'Descartar visión, audición, TDAH, ansiedad', d: 'Evaluación psicopedagógica y WISC',
            say: 'Antes de diagnosticarlo se descartan déficit visual o auditivo, TDAH, ansiedad o depresión y mala escolarización. Se confirma con la evaluación psicopedagógica y el WISC, y el manejo es la intervención psicopedagógica con adecuaciones.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Escalas de inteligencia',
      title: 'WISC y WAIS: cómo usar el informe',
      cards: [
        { title: 'Qué son', tag: 'Escalas de Wechsler', kind: 'normal', items: [
          { t: 'WPPSI, WISC-V y WAIS-IV', d: 'Preescolares, 6 a 16 años, adultos',
            say: 'El WPPSI es para preescolares, el WISC cinco para niños de seis a dieciséis años y el WAIS cuatro para adultos. Las aplica el psicólogo.' },
          { t: 'CI total: media 100, DE 15', d: 'Promedio 90 a 109',
            say: 'Entregan un coeficiente intelectual total con media de cien y desviación estándar de quince, con un rango promedio entre noventa y ciento nueve, y cinco índices, entre ellos la comprensión verbal y la memoria de trabajo.' },
        ] },
        { title: 'Cómo lo usa el médico', tag: 'Interpretar', kind: 'key', items: [
          { t: 'CI < 70 y déficit adaptativo', d: 'Define la discapacidad intelectual',
            say: 'Un CI menor de setenta más un déficit adaptativo define discapacidad intelectual; un CI de setenta a ochenta y cuatro es limítrofe.' },
          { t: 'Diferencia entre índices', d: 'Memoria de trabajo y velocidad bajas: TDAH',
            say: 'Diferencias marcadas entre índices sugieren un trastorno específico: la memoria de trabajo y la velocidad de procesamiento bajas son típicas del TDAH. Un CI aislado nunca diagnostica por sí solo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Conducta',
      title: 'Oposicionista desafiante y disocial',
      cards: [
        { title: 'Oposicionista desafiante', tag: 'Desafía a la autoridad', kind: 'normal', items: [
          { t: 'Enojo, discute, vengativo, 6 meses', d: '4 o más síntomas; sin violar derechos ajenos',
            say: 'El trastorno oposicionista desafiante es un patrón de al menos seis meses de enojo e irritabilidad, actitud discutidora y desafiante y actitud vengativa, con cuatro o más síntomas, dirigido a las figuras de autoridad, sin violar los derechos de los demás.' },
        ] },
        { title: 'Disocial', tag: 'Más grave', kind: 'alert', items: [
          { t: 'Viola derechos y normas', d: '3 o más criterios en 12 meses',
            say: 'El trastorno disocial es más grave: viola los derechos de otros y las normas sociales, con agresión a personas o animales, destrucción de propiedad, engaño o robo, fugas y ausentismo escolar antes de los trece años. Se exigen tres o más criterios en doce meses.' },
          { t: 'Puede evolucionar a antisocial', d: 'Inicio antes de los 10 años: peor pronóstico',
            say: 'El oposicionista puede evolucionar a disocial y este, después de los dieciocho años, a un trastorno antisocial de la personalidad. Si empieza antes de los diez años, el pronóstico es peor.' },
        ] },
        { title: 'Manejo', tag: 'No es farmacológico', kind: 'key', items: [
          { t: 'Entrenamiento a los padres', d: 'Intervención escolar y familiar',
            say: 'La base del tratamiento es el entrenamiento a los padres y la intervención escolar y familiar, no los fármacos. El metilfenidato trata el TDAH asociado, y la risperidona se deja, por el especialista, para la agresión grave.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Ansiedad infantil',
      title: 'Separación, mutismo selectivo y tratamiento',
      cards: [
        { title: 'Cuadros frecuentes', tag: 'Cómo se presentan', kind: 'criteria', items: [
          { t: 'Ansiedad por separación', d: '4 semanas o más; pico a los 7-9 años',
            say: 'La ansiedad por separación es el miedo excesivo a separarse de las figuras de apego, por cuatro semanas o más, con un pico a los siete a nueve años. Es típico el dolor abdominal o la cefalea de la mañana, que se pasan el fin de semana, con rechazo escolar.' },
          { t: 'Mutismo selectivo', d: 'No habla en ciertos lugares; sí en casa',
            say: 'El mutismo selectivo es no hablar en situaciones sociales específicas, como el colegio, pese a hacerlo en casa, por más de un mes.' },
          { t: 'Descartar causas médicas', d: 'Hipertiroidismo, asma, arritmias, cafeína; maltrato y bullying',
            say: 'Antes se descartan causas médicas, como el hipertiroidismo, el asma, las arritmias o la cafeína, y se pregunta por maltrato y bullying.' },
        ] },
        { title: 'Tratamiento', tag: 'Escalonado', kind: 'key', items: [
          { t: 'Psicoeducación y TCC con exposición', d: 'Retorno rápido a clases',
            say: 'El tratamiento parte con psicoeducación a la familia y al colegio y terapia cognitivo-conductual con exposición gradual, con retorno rápido a clases: no se refuerza la evitación.' },
          { t: 'ISRS si es moderado a grave', d: 'Sertralina o fluoxetina; sin benzodiacepinas',
            say: 'En los cuadros moderados a graves se agrega un ISRS, como sertralina o fluoxetina, con control semanal al inicio, y se evitan las benzodiacepinas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Enuresis',
      title: 'Qué es y cómo se estudia',
      cards: [
        { title: 'Definición y tipos', tag: '5 años o más', kind: 'criteria', items: [
          { t: 'Al menos 2 veces por semana, 3 meses', d: 'Emisión involuntaria de orina',
            say: 'La enuresis es la emisión involuntaria de orina, de día o de noche, al menos dos veces por semana durante tres meses, en un niño de cinco años o más.' },
          { t: 'Primaria o secundaria', d: 'Secundaria: reaparece tras 6 meses secos',
            say: 'Es primaria si nunca tuvo control por seis meses, y secundaria si reaparece tras seis meses secos; en esa buscas infección urinaria, diabetes, apnea del sueño, estreñimiento, epilepsia o estrés psicosocial, como un abuso o el nacimiento de un hermano.' },
          { t: 'Monosintomática o no', d: 'Solo nocturna, o con síntomas diurnos',
            say: 'Y es monosintomática si es solo nocturna, o no monosintomática si hay síntomas diurnos.' },
        ] },
        { title: 'Causa y estudio', tag: 'Qué pedir', kind: 'key', items: [
          { t: 'Poliuria nocturna, vejiga pequeña, sueño profundo', d: 'Fuerte carga familiar',
            say: 'La causa habitual es una poliuria nocturna por menor hormona antidiurética, una baja capacidad vesical y un sueño profundo, con fuerte carga familiar.' },
          { t: 'Orina completa y densidad', d: 'Urocultivo y glicemia si hay síntomas',
            say: 'Se pide orina completa con densidad urinaria, urocultivo si hay síntomas y glicemia si hay poliuria, y se examinan genitales y columna lumbosacra.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Enuresis',
      title: 'Tratamiento escalonado',
      cards: [
        { title: 'Primero lo conductual', tag: 'Base del tratamiento', kind: 'key', items: [
          { t: 'Educar sin castigos', d: 'Diario miccional; líquidos en el día',
            say: 'El tratamiento parte con educación sin castigos, un diario miccional, concentrar los líquidos durante el día, vaciar la vejiga antes de acostarse y tratar el estreñimiento.' },
          { t: 'Alarma de enuresis: primera línea', d: 'Desde los 7 años; 6-8 semanas hasta 3 meses',
            say: 'La alarma de enuresis es la primera línea y la de mejor resultado a largo plazo, desde los siete años, durante seis a ocho semanas y hasta tres meses.' },
        ] },
        { title: 'Fármacos', tag: 'Segundo escalón', kind: 'pharma', items: [
          { t: 'Desmopresina 0,2-0,4 mg', d: 'Restringir líquidos desde 1 hora antes',
            say: 'La desmopresina, cero coma dos a cero coma cuatro miligramos por la noche, sirve en la poliuria nocturna o para ocasiones puntuales. Se restringen los líquidos desde una hora antes por el riesgo de hiponatremia.' },
          { t: 'Oxibutinina si hay urgencia diurna', d: 'Imipramina: última línea, cardiotóxica',
            say: 'La oxibutinina se agrega si hay urgencia diurna, y la imipramina queda como última línea por su cardiotoxicidad. Se deriva a urología o nefrología si la enuresis diurna es resistente, hay anomalías anatómicas o infección urinaria recurrente.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tics',
      title: 'Tics transitorios y síndrome de Tourette',
      cards: [
        { title: 'Qué son', tag: 'Movimientos o sonidos bruscos', kind: 'criteria', items: [
          { t: 'Bruscos, rápidos, no rítmicos', d: 'Motores o vocales',
            say: 'Los tics son movimientos o vocalizaciones bruscos, rápidos y no rítmicos, como pestañear, levantar las cejas, sacudir la cabeza o carraspear.' },
          { t: 'Transitorios: menos de 1 año', d: 'Frecuentes; se observan',
            say: 'Los tics transitorios, de menos de un año, son frecuentes en la infancia y se observan, sin tratamiento.' },
        ] },
        { title: 'Tourette', tag: 'Más de un año', kind: 'alert', items: [
          { t: '2 o más tics motores y 1 vocal', d: 'Más de 1 año; antes de los 18',
            say: 'El síndrome de Tourette exige dos o más tics motores y al menos uno vocal durante más de un año, con inicio antes de los dieciocho, y se asocia a TDAH y TOC.' },
          { t: 'Psicoeducación y CBIT', d: 'Fármacos solo si interfieren',
            say: 'El manejo es psicoeducación y terapia conductual, y solo si los tics interfieren con la vida se usan fármacos, como el aripiprazol, la risperidona o la clonidina, por el especialista.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Anorexia: los cortes del IMC y la realimentación',
      images: [
        { src: 'animaciones/psiq-18/A1_anorexia_realimentacion.mp4', label: 'IMC y fósforo en la realimentación', credit: 'Gráfico y animación propios' },
      ],
      steps: [
        { note: 'Cortes del IMC y el fósforo cuando se realimenta',
          say: 'Mira primero la escala del índice de masa corporal. Bajo dieciocho y medio hay anorexia, y bajo trece a catorce se hospitaliza. A la derecha, ves qué pasa con el fósforo cuando se parte con una realimentación rápida: se desploma, y ese es el síndrome de realimentación. Con una realimentación lenta, que parte con mil a mil doscientas calorías, y con fósforo, magnesio y tiamina, el fósforo se mantiene en su rango.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la adolescente que come poco a la conducta, con los criterios de ingreso por delante.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Infanto-juvenil: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['IMC 13,7, FC 36, QTc largo', 'Hospitalizar de inmediato', 'Manejo ambulatorio'],
          say: 'IMC menor de catorce, pulso de treinta y seis y QT largo: hospitalización inmediata. Manejarla en forma ambulatoria o dejarla para otro control es el error.' },
        { cells: ['Ingresa una anoréxica grave', 'Realimentar lento; fósforo, magnesio y tiamina', 'Dar carbohidratos en cantidad'],
          say: 'Al ingresar una paciente con anorexia grave, se realimenta lento con suplementos de fósforo, magnesio y tiamina. Una carga rápida de hidratos de carbono produce un síndrome de realimentación.' },
        { cells: ['Peso normal, vómitos, parótidas', 'Bulimia: fluoxetina y TCC', 'Anorexia'],
          say: 'Peso normal con atracones, vómitos e hipertrofia parotídea: bulimia. Se trata con fluoxetina en dosis altas y terapia.' },
        { cells: ['IMC 16, vómitos y miedo a engordar', 'Anorexia purgativa', 'Bulimia'],
          say: 'Bajo peso con miedo a engordar y vómitos provocados: anorexia de tipo purgativo. La purga también existe en la anorexia, y lo que decide es el peso bajo.' },
        { cells: ['Distraído solo en el colegio', 'No es TDAH sin segundo entorno', 'Metilfenidato de entrada'],
          say: 'El niño que se distrae solo en el colegio y rinde en la casa no cumple el criterio de dos entornos. Indicar metilfenidato de entrada es el error.' },
        { cells: ['Sin balbuceo ni gestos a los 12 meses', 'Audiometría, derivar e intervenir', 'Esperar y observar'],
          say: 'Sin gestos a los doce meses o con pérdida del lenguaje: audiometría, derivación e intervención temprana, sin esperar el diagnóstico definitivo.' },
        { cells: ['Agresión, robo y fugas a los 11 años', 'Disocial: entrenamiento a padres', 'Risperidona de entrada'],
          say: 'Agresión, robo y fugas en un niño: disocial, y la base es el entrenamiento a los padres. La risperidona es del especialista y para la agresión grave.' },
        { cells: ['Mojar la cama a los 8 años', 'Educación y alarma de enuresis', 'Castigar o imipramina'],
          say: 'Enuresis en un niño sano de ocho años: educación sin castigos y alarma de enuresis. La desmopresina es el segundo escalón y la imipramina, la última línea.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Adolescente de 15 años llevada por su madre por una baja de peso de 14 kg en 4 meses. Come solo lechuga y agua, cuenta calorías, se pesa 4 veces al día y hace abdominales por más de 3 horas diarias. Mide 1,62 m y pesa 36 kg (IMC 13,7). Tiene piel amarillenta y seca, lanugo en la espalda y manos frías y cianóticas. PA 80/50 mmHg, FC 36 lpm, temperatura axilar 35,2 °C. Llora diciendo que sus padres exageran y que todavía tiene las piernas y el abdomen deformes por exceso de grasa. El ECG muestra bradicardia sinusal extrema y QTc de 480 ms.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Manejo ambulatorio con control nutricional semanal y sertralina' },
        { letter: 'B', text: 'Hospitalización urgente con monitorización cardíaca, realimentación enteral lenta con tiamina y fósforo, balance hidroelectrolítico y abordaje psiquiátrico una vez estable' },
        { letter: 'C', text: 'Alimentación abundante en calorías desde el primer día para recuperar el peso rápidamente' },
        { letter: 'D', text: 'Fluoxetina 60 mg al día y control en un mes' },
        { letter: 'E', text: 'Derivar al psiquiatra de forma electiva y citar en 3 meses' },
      ],
      correct: 'B',
      explanation: 'Anorexia nerviosa restrictiva con criterios de hospitalización inmediata: IMC menor de 14, bradicardia menor de 40, hipotensión, hipotermia y QTc prolongado, con riesgo de arritmias ventriculares y muerte súbita. Se hospitaliza con monitorización cardíaca, realimentación enteral lenta con tiamina y fósforo para prevenir el síndrome de realimentación y balance hidroelectrolítico estricto. El abordaje psiquiátrico se hace una vez estabilizada.',
      say: {
        stem: 'Una adolescente de quince años bajó catorce kilos en cuatro meses. Come solo lechuga, cuenta las calorías y hace abdominales por más de tres horas. Tiene un IMC de trece coma siete, lanugo, manos frías, presión de ochenta sobre cincuenta, pulso de treinta y seis y temperatura baja. Dice que se ve deforme por la grasa. El electrocardiograma muestra bradicardia extrema y QT largo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: manejo ambulatorio con sertralina; hospitalización con monitorización y realimentación lenta con tiamina y fósforo; alimentación abundante desde el primer día; fluoxetina y control en un mes; o derivación electiva. Piénsalo.',
        answer: 'Es la B. Es una anorexia con casi todos los criterios de hospitalización: IMC bajo catorce, pulso bajo cuarenta, hipotensión, hipotermia y QT prolongado, con riesgo de arritmia y muerte súbita. Se hospitaliza con monitoreo y se realimenta de forma lenta con tiamina y fósforo. La C tienta porque la paciente necesita recuperar peso, pero una carga rápida de hidratos de carbono puede causar un síndrome de realimentación.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 145',
      stem: 'Una paciente de 17 años es traída por su padre, quien se muestra muy preocupado porque la considera muy delgada y siente que come muy poco. Relata que solo come una fracción del plato que se sirve en su casa y que deja gran parte de la comida que se le envía al colegio. La paciente comenta que la mayoría de sus compañeras son igualmente delgadas y no considera que tenga un problema, más allá de mostrarse molesta por la insistencia de su padre en consultar. Su IMC es de 16 kg/m².',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Trastorno obsesivo de la personalidad' },
        { letter: 'B', text: 'Bulimia nervosa' },
        { letter: 'C', text: 'Anorexia nervosa' },
        { letter: 'D', text: 'Dismorfofobia' },
        { letter: 'E', text: 'Sana' },
      ],
      correct: 'C',
      explanation: 'Anorexia nerviosa clásica: restricción alimentaria, bajo peso (IMC 16), minimización del problema, normalización de la delgadez y escasa conciencia de enfermedad. Las niñas y adolescentes son el grupo en que suele comenzar.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Una paciente de diecisiete años es traída por su padre, que la ve muy delgada. Come una fracción del plato y deja gran parte de la comida del colegio. Ella dice que sus compañeras son igual de delgadas, no cree tener un problema y se molesta con su padre. Su IMC es de dieciséis.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: trastorno obsesivo de la personalidad; bulimia; anorexia; dismorfofobia; o sana. Piénsalo.',
        answer: 'Es la C. Restricción, bajo peso, y sobre todo la minimización y la normalización de la delgadez: anorexia nerviosa. La E tienta porque ella dice que está bien, pero el IMC de dieciséis lo desmiente: negar la enfermedad es parte del cuadro.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 80',
      stem: 'Una paciente de 17 años ha bajado 15 kilogramos en el último tiempo. Su IMC actual es de 16. Tiene mucho miedo a engordar y de hecho quiere bajar un poco más de peso, por lo que luego de comer se induce vómitos, con mucha frecuencia. Está en amenorrea desde hace 4 meses.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Trastorno alimentario no especificado' },
        { letter: 'B', text: 'Bulimia nervosa' },
        { letter: 'C', text: 'Anorexia nervosa' },
        { letter: 'D', text: 'Depresión mayor' },
        { letter: 'E', text: 'Distimia' },
      ],
      correct: 'C',
      explanation: 'Anorexia nerviosa: peso bajo (IMC 16), miedo a engordar y amenorrea. La purga no es exclusiva de la bulimia: la anorexia puede tenerla, en el subtipo purgativo. Lo que distingue es el peso bajo.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil quince. Una paciente de diecisiete años bajó quince kilos, con un IMC de dieciséis. Tiene mucho miedo a engordar, quiere bajar más y se induce vómitos con frecuencia después de comer. Lleva cuatro meses en amenorrea.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: trastorno alimentario no especificado; bulimia; anorexia; depresión mayor; o distimia. Piénsalo.',
        answer: 'Es la C. El peso es bajo, con miedo a engordar y amenorrea: anorexia nerviosa de subtipo purgativo. La B es la trampa, porque los vómitos hacen pensar en bulimia, pero en la bulimia el peso es normal o alto. La purga existe en las dos, y el peso las separa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 45',
      stem: 'Paciente de 23 años, que desde hace 6 meses experimenta desánimo, que ella dice que es causado por estar muy disconforme con su figura. Refiere que experimenta momentos en que come muchas galletas, sin parar, hasta ser imposible seguir comiendo, en especial cuando está ansiosa. Además, tiene miedo de reprobar en la universidad. Refiere que 3 veces por semana, puede trotar 5 horas y comer menos de 200 Calorías al día. Niega provocarse vómitos, ya que refiere que no puede inducírselos, aunque ha intentado.',
      question: '¿Cuál es el diagnóstico de sospecha?',
      options: [
        { letter: 'A', text: 'Anorexia nervosa' },
        { letter: 'B', text: 'Trastorno por atracones' },
        { letter: 'C', text: 'Depresión mayor' },
        { letter: 'D', text: 'Bulimia nervosa' },
        { letter: 'E', text: 'Trastorno de ansiedad generalizada' },
      ],
      correct: 'D',
      explanation: 'Bulimia nerviosa: atracones característicos más conductas compensatorias. La compensación no es solo el vómito o los laxantes: el ayuno y el ejercicio extenuante también cuentan.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil dieciséis. Una mujer de veintitrés años está desanimada por su figura. Tiene momentos en que come galletas sin parar, sobre todo cuando está ansiosa. Tres veces por semana trota cinco horas y come menos de doscientas calorías al día. Niega vomitar, porque no puede inducírselo, aunque lo ha intentado.',
        question: '¿Cuál es el diagnóstico de sospecha?',
        options: 'Las opciones: anorexia; trastorno por atracones; depresión mayor; bulimia; o ansiedad generalizada. Piénsalo.',
        answer: 'Es la D. Hay atracones con pérdida de control y una compensación con ayuno y ejercicio extenuante: bulimia. La B tienta porque hay atracones, pero en el trastorno por atracones no hay conductas compensatorias. Y recuerda que compensar no es solo vomitar.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 76',
      stem: '¿Cuál de los siguientes hallazgos del examen físico sugieren un trastorno de conducta alimentaria en una adolescente?',
      question: 'Elija la alternativa correcta.',
      options: [
        { letter: 'A', text: 'IMC de 20' },
        { letter: 'B', text: 'Hipertrofia de las parótidas' },
        { letter: 'C', text: 'Telangiectasias periorales' },
        { letter: 'D', text: 'Pulso dicroto' },
        { letter: 'E', text: 'Hiperpigmentación areolar' },
      ],
      correct: 'B',
      explanation: 'La hipertrofia de las parótidas es un signo de vómitos recurrentes, por lo que sugiere un trastorno de la conducta alimentaria con purga, como la bulimia.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecinueve. Se pregunta cuál de estos hallazgos del examen físico sugiere un trastorno de la conducta alimentaria en una adolescente.',
        question: 'Elige la alternativa correcta.',
        options: 'Las opciones: IMC de veinte; hipertrofia de las parótidas; telangiectasias periorales; pulso dicroto; o hiperpigmentación areolar. Piénsalo.',
        answer: 'Es la B. El aumento de volumen de las parótidas es un signo de vómitos recurrentes, junto con la erosión del esmalte y el signo de Russell. La A es la trampa: un IMC normal no descarta un trastorno alimentario, porque en la bulimia el peso es normal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 70',
      stem: 'Una mujer de 30 años, ingeniera civil, refiere que desde su infancia se le pierden con frecuencia las cosas y que le es difícil realizar tareas, en especial porque las procrastina y le cuesta terminarlas una vez iniciadas. Por ello realiza listas de todas las cosas que debe hacer a modo de cumplir con ellas. Recientemente, en su trabajo ha aumentado su carga laboral y responsabilidades, lo que la tiene agobiada y angustiada.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Trastorno del espectro autista' },
        { letter: 'B', text: 'Trastorno obsesivo compulsivo' },
        { letter: 'C', text: 'Trastorno de personalidad' },
        { letter: 'D', text: 'Trastorno por déficit atencional hiperactivo' },
        { letter: 'E', text: 'Trastorno de angustia generalizada' },
      ],
      correct: 'D',
      explanation: 'TDAH clásico del adulto, de alta capacidad (logró ser ingeniera): síntomas desde la infancia, descompensados por el aumento de la carga laboral. Se maneja con técnicas de trabajo y, en algunos casos, con estimulantes como el metilfenidato.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Una ingeniera de treinta años cuenta que desde la infancia pierde cosas, procrastina y le cuesta terminar lo que empieza, por lo que hace listas. Hoy, con más carga laboral, está agobiada y angustiada.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: autismo; trastorno obsesivo compulsivo; trastorno de personalidad; déficit atencional con hiperactividad; o ansiedad generalizada. Piénsalo.',
        answer: 'Es la D. Los síntomas vienen desde la infancia y se descompensan cuando sube la exigencia: TDAH del adulto, que puede ser de alta capacidad. La E tienta por la angustia actual, pero esa angustia es consecuencia de la sobrecarga. Y las listas no son compulsiones: son una estrategia para compensar.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 145',
      stem: 'En el servicio de urgencias, usted evalúa a un niño de 11 años, que se ha comportado muy agresivo, autoagrediéndose y golpeando a su madre. Ella refiere que fue citada al colegio, debido a que su hijo tenía malas notas y un comportamiento inapropiado. En la entrevista, el director del colegio le comunicó que había insultado y agredido a sus compañeros y a uno de sus profesores. Tras ser confrontado por su madre, el niño procedió a agredirla y luego se infringió cortes en los brazos. Además, su abuela refiere que el niño miente y le ha robado alcohol y cigarrillos de su tienda.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Trastorno disocial' },
        { letter: 'B', text: 'Trastorno de personalidad limítrofe' },
        { letter: 'C', text: 'Trastorno del espectro autista' },
        { letter: 'D', text: 'Trastorno por déficit atencional' },
        { letter: 'E', text: 'Trastorno oposicionista desafiante' },
      ],
      correct: 'A',
      explanation: 'Trastorno de conducta disocial: comportamientos agresivos que violan los derechos de otros y las normas sociales (agresión a personas, mentiras, robo). Sin un manejo adecuado puede evolucionar a un trastorno antisocial de la personalidad.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Un niño de once años es muy agresivo, se autoagrede y golpea a su madre. En el colegio insultó y agredió a compañeros y a un profesor, miente y robó alcohol y cigarrillos de la tienda de su abuela.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: disocial; personalidad límite; autismo; déficit atencional; o oposicionista desafiante. Piénsalo.',
        answer: 'Es la A. Agresión a personas, mentiras y robo violan los derechos de otros y las normas: trastorno disocial. La E tienta porque también hay desafío, pero el oposicionista desafía a la autoridad sin violar los derechos de los demás. Y el límite no se diagnostica en un niño de once años.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 87',
      stem: 'Un niño de 7 años perdió el año escolar. Presenta dificultades en la lectoescritura, invierte fonemas con frecuencia, es muy lento para leer y le cuesta deletrear. Su padre no terminó el colegio, porque tenía problemas similares.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Coeficiente intelectual límite' },
        { letter: 'B', text: 'Trastorno oposicionista desafiante' },
        { letter: 'C', text: 'Trastorno por déficit atencional' },
        { letter: 'D', text: 'Dislexia' },
        { letter: 'E', text: 'Trastorno del desarrollo' },
      ],
      correct: 'D',
      explanation: 'Dislexia: dificultad persistente en la lectura, con lectura lenta, inversión de fonemas y dificultad para deletrear, que se hace evidente al ingresar a la escuela, con antecedente familiar. Se confirma con evaluación psicopedagógica y WISC.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil quince. Un niño de siete años perdió el año escolar. Le cuesta la lectoescritura, invierte fonemas, lee muy lento y le cuesta deletrear. Su padre no terminó el colegio por problemas parecidos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: coeficiente intelectual límite; oposicionista desafiante; déficit atencional; dislexia; o trastorno del desarrollo. Piénsalo.',
        answer: 'Es la D. Lectura lenta, inversión de fonemas y dificultad para deletrear, con antecedente familiar y apareciendo al entrar a la escuela: dislexia. La A tienta por el fracaso escolar, pero un CI límite afectaría todas las áreas, no solo la lectoescritura.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 37',
      stem: 'Niña que no se comunica con compañeros, responde agresivamente ante cambios en sus rutinas y guarda muñecas sin jugar con ellas.',
      question: '¿Diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Trastorno por déficit atencional con hiperactividad' },
        { letter: 'B', text: 'Trastorno de ansiedad generalizada' },
        { letter: 'C', text: 'Trastorno del espectro autista' },
        { letter: 'D', text: 'Trastorno de conducta' },
        { letter: 'E', text: 'Retraso global del desarrollo' },
      ],
      correct: 'C',
      explanation: 'Trastorno del espectro autista: déficit de la comunicación social (no se comunica con sus compañeros) y patrones restringidos y repetitivos (rigidez ante los cambios de rutina y juego sin función, guardando las muñecas).',
      say: {
        stem: 'Una pregunta real del EUNACOM de enero de dos mil veintitrés. Una niña no se comunica con sus compañeros, reacciona con agresividad ante los cambios en sus rutinas y guarda las muñecas sin jugar con ellas.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: TDAH; ansiedad generalizada; trastorno del espectro autista; trastorno de conducta; o retraso global del desarrollo. Piénsalo.',
        answer: 'Es la C. Hay un déficit de comunicación social y, al mismo tiempo, un patrón restringido: rigidez frente a los cambios y juego sin función simbólica. Son los dos dominios del autismo. La D tienta por la agresividad, pero aquí es una reacción a la alteración de la rutina, no una violación de normas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 105',
      stem: 'Niño de 3 años con antecedente de autismo. Presenta episodios de golpear su cabeza contra la pared repetidamente, varias veces al día.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Derivar a psiquiatría infantil para evaluación y manejo conductual' },
        { letter: 'B', text: 'Hospitalizar de urgencia' },
        { letter: 'C', text: 'Iniciar haloperidol' },
        { letter: 'D', text: 'Solicitar EEG para descartar epilepsia' },
        { letter: 'E', text: 'Solo observar' },
      ],
      correct: 'A',
      explanation: 'Las conductas repetitivas y autolesivas forman parte del espectro autista y requieren manejo especializado: se deriva a psiquiatría infantil y a un equipo de terapia conductual. No hay fármaco para el núcleo del trastorno; los antipsicóticos atípicos se reservan, por el especialista, para la irritabilidad o la agresividad graves.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un niño de tres años con autismo se golpea la cabeza contra la pared de forma repetida, varias veces al día.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: derivar a psiquiatría infantil para evaluación y manejo conductual; hospitalizar; iniciar haloperidol; solicitar electroencefalograma; o solo observar. Piénsalo.',
        answer: 'Es la A. La conducta autolesiva es parte del espectro y exige manejo especializado: psiquiatría infantil y terapia conductual. La C tienta porque la agresión suena a antipsicótico, pero en el autismo los fármacos son solo del especialista y no para el núcleo del trastorno. Y la E ignora un riesgo de daño.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 64',
      stem: 'Un niño de 7 años comienza hace 3 meses con pestañeo frecuente asociado a expresiones faciales como levantar las cejas, a lo que en el último tiempo se agregan movimientos involuntarios de las extremidades superiores, asociados a sacudidas bruscas de la cabeza y en los últimos días además se ha agregado carraspera.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Síndrome de Gilles de la Tourette' },
        { letter: 'B', text: 'Trastorno obsesivo' },
        { letter: 'C', text: 'Corea' },
        { letter: 'D', text: 'Enfermedad por tics' },
        { letter: 'E', text: 'Crisis epiléptica parcial' },
      ],
      correct: 'D',
      explanation: 'Presenta múltiples tics motores y ahora uno vocal (carraspera), pero de solo 3 meses de evolución. El síndrome de Tourette requiere al menos un año de duración; con menos tiempo se trata de un trastorno de tics transitorio, que se observa.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecisiete. Un niño de siete años lleva tres meses con pestañeo frecuente y gestos faciales, y después movimientos involuntarios de los brazos y sacudidas bruscas de la cabeza. En los últimos días se agregó carraspera.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: síndrome de Tourette; trastorno obsesivo; corea; enfermedad por tics; o crisis epiléptica parcial. Piénsalo.',
        answer: 'Es la D. Son tics motores y uno vocal, pero llevan solo tres meses. El Tourette exige más de un año de evolución, así que esto es un trastorno por tics, transitorio, que se observa y se educa a la familia. La A es la tentación clásica: tics más carraspera suenan a Tourette, pero el tiempo no alcanza.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: psiquiatría infanto-juvenil',
      cards: [
        { title: 'TDAH y neurodesarrollo', tag: 'Criterios', kind: 'key', items: [
          { t: 'TDAH: antes de 12 años y en 2 entornos', d: 'Metilfenidato de primera línea',
            say: 'Cerremos con las reglas de oro. El TDAH exige síntomas antes de los doce años y en al menos dos entornos, y su fármaco de primera línea es el metilfenidato.' },
          { t: 'Autismo: derivar y estimular', d: 'Sin esperar el diagnóstico',
            say: 'En el autismo se sospecha por las señales de alerta, se descarta hipoacusia, se deriva y se inicia la intervención temprana sin esperar.' },
        ] },
        { title: 'Alimentación', tag: 'Lo que más se pregunta', kind: 'alert', items: [
          { t: 'Anorexia: IMC < 13-14, FC < 40, QTc > 460', d: 'Hospitalizar',
            say: 'En la anorexia, el IMC bajo trece a catorce, el pulso bajo cuarenta o el QT prolongado obligan a hospitalizar.' },
          { t: 'Realimentar lento, con fósforo y tiamina', d: 'Bulimia: fluoxetina 60 mg',
            say: 'Se realimenta de forma lenta, con fósforo, magnesio y tiamina, para evitar el síndrome de realimentación. En la bulimia, peso normal y fluoxetina en dosis altas. Si te llevas una sola idea de hoy: ante una paciente con anorexia y bradicardia, primero se hospitaliza y después se realimenta con cuidado. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Adolescente con alteración de la conducta alimentaria',
    root: N('start', 'Adolescente que come poco o purga', 'Peso, miedo a engordar y atracones',
      'Una adolescente consulta porque come poco, o porque come en exceso y se purga. Lo primero es medir el peso y buscar los criterios de gravedad.',
      ['Peso bajo, miedo a engordar', N('q', 'Anorexia nerviosa', 'IMC, pulso, PA, ECG y electrolitos',
        'Si el peso es bajo, con miedo a engordar y distorsión de la imagen corporal, es una anorexia nerviosa. Se miden el IMC, el pulso, la presión, la temperatura, el electrocardiograma y los electrolitos.',
        ['IMC < 13-14, FC < 40, QTc > 460, K < 3', N('alert', 'Hospitalizar de inmediato', 'Monitoreo y realimentación lenta',
          'Si cumple cualquier criterio de gravedad, se hospitaliza de inmediato con monitorización cardíaca, realimentación enteral lenta con tiamina, fósforo y magnesio, y balance hidroelectrolítico estricto. Después viene el abordaje psiquiátrico.')],
        ['Estable', N('refer', 'Equipo especializado', 'Seguimiento nutricional y psiquiátrico',
          'Si está estable, se deriva a un equipo especializado, con seguimiento nutricional y psiquiátrico y con la familia. Ningún psicofármaco revierte la emaciación.')],
      )],
      ['Atracones y purgas, peso normal', N('do', 'Bulimia nerviosa', 'Fluoxetina 60 mg y TCC',
        'Si hay atracones seguidos de vómitos, laxantes, ayuno o ejercicio, con peso normal o sobrepeso, y signos como las parótidas hipertróficas o el signo de Russell, es una bulimia. Se trata con fluoxetina en dosis altas y terapia cognitivo-conductual.')],
      ['Atracones sin compensación', N('do', 'Trastorno por atracones', 'TCC; ISRS de apoyo; derivar',
        'Si hay atracones sin ninguna conducta compensatoria, con vergüenza y obesidad, es un trastorno por atracones. Se trata con terapia cognitivo-conductual, un ISRS de apoyo y manejo de la obesidad, y se deriva a salud mental.')],
    ),
  },
};
