// Clase 10.16 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neurologia.cjs (neuro-16).
// Preguntas reales: banco real (classes/scripts/class_questions.cjs neuro-16 y --search).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'neuro-16',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Debilidad que sube, reflejos que desaparecen y un diafragma que hay que vigilar',
      say: 'Bienvenidos. Hoy dejamos el cerebro y bajamos al nervio periférico, con el síndrome de Guillain-Barré. Es la causa más frecuente de parálisis flácida aguda en el adulto, es una urgencia, y es de las preguntas más rentables del examen. Casi todo se resuelve con dos ideas: el hallazgo que nunca falta es la arreflexia, y lo que mata es la falla respiratoria. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Una infección que confunde al sistema inmune',
      nodes: [
        { id: 'inf', col: 0, row: 2, k: 'cause', t: 'Infección 1 a 4 semanas antes', s: 'Campylobacter, CMV, EBV, influenza' },
        { id: 'mim', col: 1, row: 2, k: 'mech', t: 'Mimetismo molecular', s: 'El germen se parece al nervio' },
        { id: 'ac', col: 2, row: 2, k: 'mech', t: 'Anticuerpos antigangliósido', s: 'Más complemento y macrófagos' },
        { id: 'aidp', col: 3, row: 1, k: 'effect', t: 'Desmielinizante (AIDP)', s: 'Ataca la mielina' },
        { id: 'axo', col: 3, row: 3, k: 'risk', t: 'Axonal (AMAN, AMSAN)', s: 'Ataca el axón: peor pronóstico' },
      ],
      edges: [
        { from: 'inf', to: 'mim' }, { from: 'mim', to: 'ac' },
        { from: 'ac', to: 'aidp', label: 'mielina' }, { from: 'ac', to: 'axo', label: 'axón' },
      ],
      steps: [
        { show: ['inf'], note: '70 % tuvo una infección reciente',
          say: 'Empecemos por el mecanismo. Setenta por ciento de los pacientes cuenta una infección en las una a cuatro semanas previas. El agente más común, y el de peor pronóstico, es el Campylobacter jejuni, que da una diarrea. También citomegalovirus, Epstein-Barr, micoplasma, zika, influenza y el coronavirus del COVID.' },
        { show: ['mim', 'ac'], note: 'Anticuerpos contra el germen que atacan el nervio',
          say: '¿Y por qué una diarrea termina en parálisis? Por mimetismo molecular: las moléculas del germen se parecen a los gangliósidos del nervio. El sistema inmune fabrica anticuerpos contra la bacteria, pero esos anticuerpos también reconocen el nervio, y activan el complemento sobre él. Es una enfermedad autoinmune gatillada por una infección.' },
        { show: ['aidp'], note: 'La forma clásica: la conducción se bloquea',
          say: 'En la forma clásica, la desmielinizante, los macrófagos destruyen la mielina de las raíces y de los nervios. La señal eléctrica ya no salta de nodo en nodo, y se bloquea.' },
        { show: ['axo'], note: 'Si se daña el axón, la recuperación es lenta',
          say: 'En las variantes axonales, el ataque va directo a la membrana del axón. Ahí el nervio degenera, y la recuperación es más lenta y con más secuelas. Por eso el Campylobacter, que se asocia a estas formas, es el de peor pronóstico.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: '¿Cómo se ve un Guillain-Barré?',
      cards: [
        { title: 'Lo cardinal', tag: 'Criterios de Asbury', kind: 'key', items: [
          { t: 'Debilidad flácida, simétrica, ascendente', d: 'Parte en las piernas y sube en días',
            say: 'Veamos la clínica. Parte con hormigueo en pies y manos, en calcetín y guante, y luego aparece la debilidad: flácida, bilateral, relativamente simétrica, y ascendente. Primero le cuesta pararse de la silla o subir escaleras, y en días sube a los brazos, al tronco y a la cara.' },
          { t: 'Arreflexia generalizada', d: 'El hallazgo más constante y obligatorio',
            say: 'Y el hallazgo que nunca falta: la hiporreflexia o arreflexia generalizada. Es obligatoria para el diagnóstico. Fíjate en la consecuencia: si los reflejos están vivos, prácticamente descartas Guillain-Barré y tienes que pensar en la médula, una compresión o una mielitis.' },
          { t: 'Nadir a las 2 a 4 semanas', d: 'Después se estabiliza',
            say: 'La progresión llega a su punto más bajo habitualmente a las dos a cuatro semanas del inicio.' },
        ] },
        { title: 'Lo que acompaña', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: 'Pares craneales en más del 50 %', d: 'Sobre todo diplejía facial',
            say: 'Más de la mitad compromete pares craneales, y lo más típico es la parálisis facial bilateral. Si además toma los pares bajos, aparece disfagia, disartria y acumulación de secreciones, con riesgo de aspiración.' },
          { t: 'Disautonomía hasta 65 % de los graves', d: 'Presión lábil, arritmias, íleo',
            say: 'La disautonomía aparece hasta en sesenta y cinco por ciento de los graves: presión que salta entre hipertensión e hipotensión, taquicardia, bradicardias bruscas e incluso asistolia, íleo y retención urinaria.' },
          { t: 'Dolor radicular hasta 80 %', d: 'A menudo antes de la debilidad',
            say: 'Y un detalle que confunde: el dolor lumbar y radicular es muy frecuente, hasta ochenta por ciento, y muchas veces aparece antes que la debilidad.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Lo que mata',
      title: 'La falla respiratoria llega en silencio',
      nodes: [
        { id: 'dia', col: 0, row: 1, k: 'cause', t: 'Diafragma e intercostales débiles', s: 'Frénico C3 a C5' },
        { id: 'hip', col: 1, row: 1, k: 'mech', t: 'Hipoventilación', s: 'Atelectasias e hipercapnia' },
        { id: 'sat', col: 2, row: 0, k: 'trap', t: 'Saturación normal', s: 'Engaña hasta el final' },
        { id: 'reg', col: 2, row: 2, k: 'q', t: 'Regla 20/30/40', s: 'Cada 4 a 6 horas' },
        { id: 'iot', col: 3, row: 2, k: 'alert', t: 'UCI e intubación electiva', s: 'Antes de la hipoxemia' },
      ],
      edges: [
        { from: 'dia', to: 'hip' }, { from: 'hip', to: 'sat', label: 'no mires' },
        { from: 'hip', to: 'reg', label: 'mide' }, { from: 'reg', to: 'iot', label: 'si cae' },
      ],
      steps: [
        { show: ['dia', 'hip'], note: 'Hasta 30 % termina en falla respiratoria',
          say: 'Ahora lo más importante. Hasta treinta por ciento de los pacientes desarrolla insuficiencia respiratoria, y es la causa principal de ingreso a UCI y de muerte. El mecanismo es el mismo de siempre: la debilidad llega al diafragma y a los intercostales, y el paciente hipoventila.' },
        { show: ['sat'], note: 'Sin crépitos, sin sibilancias, saturando bien',
          say: 'Y aquí está la trampa. No es un problema del pulmón: no hay crépitos ni sibilancias, y la saturación se mantiene engañosamente normal hasta que el diafragma claudica. Si esperas que desature, llegaste tarde.' },
        { show: ['reg'], note: 'CVF menor de 20 mL/kg · PImáx que no llega a −30 · PEmáx menor de 40',
          say: 'Por eso se mide la mecánica al lado de la cama cada cuatro a seis horas, con la regla veinte, treinta, cuarenta. Capacidad vital forzada bajo veinte mililitros por kilo, o una caída de más de treinta por ciento en veinticuatro horas. Presión inspiratoria máxima que no alcanza menos treinta centímetros de agua. Y presión espiratoria máxima bajo cuarenta, que significa una tos que ya no moviliza secreciones.' },
        { show: ['iot'], note: 'No logra contar hasta 20 en una espiración',
          say: 'Si no tienes espirómetro, pídele que inspire hondo y cuente en voz alta. Si no llega a veinte en una sola espiración, su capacidad vital está bajo quince a veinte mililitros por kilo. Ese paciente va a UCI para intubación electiva, antes de que aparezca la hipoxemia.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Unidad de paciente crítico',
      title: 'Quién va a UCI y cómo se intuba',
      cards: [
        { title: 'Criterios de UCI e intubación', tag: 'Basta uno', kind: 'criteria', items: [
          { t: 'CVF menor de 15 mL/kg', d: 'Intubación electiva inmediata',
            say: 'Ordenemos los criterios. Con capacidad vital bajo veinte mililitros por kilo, ingresa a UCI con monitoreo continuo. Y bajo quince, la capacidad vital es crítica: intubación electiva inmediata.' },
          { t: 'Compromiso bulbar progresivo', d: 'Disfagia, disfonía, sin reflejo nauseoso',
            say: 'También se intuba para proteger la vía aérea cuando avanza el compromiso bulbar: disfagia severa, disfonía y pérdida del reflejo nauseoso. Ahí el riesgo es la neumonía aspirativa masiva.' },
          { t: 'Disautonomía grave', d: 'Presión lábil, bradicardia bajo 40',
            say: 'Y la disautonomía grave, con presión muy lábil, bradicardia bajo cuarenta o arritmias, necesita línea arterial y telemetría en UCI, por el riesgo de asistolia.' },
        ] },
        { title: 'Intubación', tag: 'Regla de seguridad', kind: 'alert', items: [
          { t: 'Nunca succinilcolina', d: 'Hiperkalemia fulminante y paro',
            say: 'Y si vas a intubar, una regla que se pregunta: la succinilcolina está contraindicada. El músculo denervado llena su superficie de receptores de acetilcolina, y al despolarizarlos todos juntos sale una cantidad masiva de potasio. El resultado es hiperkalemia fulminante, arritmias y asistolia.' },
          { t: 'Rocuronio 1,2 mg/kg', d: 'No despolarizante, no libera potasio',
            say: 'El relajante de elección es el rocuronio, uno coma dos miligramos por kilo, un bloqueador no despolarizante que no libera potasio.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico',
      title: 'Punción lumbar y electromiografía',
      nodes: [
        { id: 'pl', col: 0, row: 1, k: 'start', t: 'Punción lumbar', s: 'Estudio del LCR' },
        { id: 'dis', col: 1, row: 0, k: 'good', t: 'Disociación albúmino-citológica', s: 'Proteínas altas, células normales' },
        { id: 'sem', col: 2, row: 0, k: 'trap', t: 'Primera semana: puede ser normal', s: 'No descarta Guillain-Barré' },
        { id: 'ple', col: 1, row: 2, k: 'alert', t: 'Más de 50 células', s: 'Buscar otra causa' },
        { id: 'emg', col: 3, row: 1, k: 'good', t: 'Electromiografía', s: 'Onda F prolongada o ausente' },
      ],
      edges: [
        { from: 'pl', to: 'dis', label: 'típico' }, { from: 'dis', to: 'sem', label: 'ojo' },
        { from: 'pl', to: 'ple', label: 'atípico' }, { from: 'dis', to: 'emg' },
      ],
      steps: [
        { show: ['pl', 'dis'], note: 'Proteínas sobre 45 mg/dL con menos de 10 a 50 células',
          say: 'El diagnóstico se confirma con dos exámenes. El primero es la punción lumbar, y el hallazgo clásico tiene nombre propio: disociación albúmino-citológica. Proteínas altas, sobre cuarenta y cinco miligramos por decilitro, a menudo entre cien y cuatrocientos, con un recuento de células normal o casi normal. La inflamación está en las raíces, que sueltan proteínas, pero no hay infección en el líquido.' },
        { show: ['sem'], note: 'Máxima sensibilidad entre el día 7 y el 14',
          say: 'Y una perla que se pregunta: en la primera semana, las proteínas pueden ser normales hasta en treinta a cincuenta por ciento de los pacientes. La disociación se hace evidente entre el día siete y el catorce. Un líquido normal al comienzo no descarta Guillain-Barré, y no debe retrasar el tratamiento.' },
        { show: ['ple'], note: 'VIH, Lyme, polio, meningitis carcinomatosa',
          say: 'Al revés, si el líquido trae más de cincuenta células, eso no calza. Tienes que buscar otra causa: VIH, enfermedad de Lyme, poliomielitis o meningitis carcinomatosa.' },
        { show: ['emg'], note: 'Confirma y clasifica: desmielinizante o axonal',
          say: 'El segundo examen es la electromiografía con velocidades de conducción. Confirma la neuropatía y separa la forma desmielinizante de la axonal. El signo más precoz es la onda F prolongada o ausente, que refleja el daño en las raíces. Después aparecen el bloqueo de conducción, la dispersión temporal y las velocidades muy lentas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Variantes',
      title: 'No todos los Guillain-Barré son iguales',
      cards: [
        { title: 'Formas motoras', tag: 'Desmielinizante y axonales', kind: 'key', items: [
          { t: 'AIDP: la clásica', d: 'Más de 85 % en Occidente',
            say: 'La forma clásica, la desmielinizante, es más del ochenta y cinco por ciento en Occidente: debilidad ascendente, parestesias distales y arreflexia.' },
          { t: 'AMAN: motora pura', d: 'Anti-GM1, tras Campylobacter; más ventilación',
            say: 'La neuropatía axonal motora aguda es motora pura, sin alteraciones sensitivas objetivas. Se asocia a anticuerpos anti GM uno tras un Campylobacter, es rápida y severa, y requiere ventilación con más frecuencia.' },
          { t: 'AMSAN: motora y sensitiva', d: 'Fulminante, recuperación muy lenta',
            say: 'Y la forma axonal motora y sensitiva es la más grave: tetraparesia con pérdida sensitiva profunda, evolución fulminante y secuelas.' },
        ] },
        { title: 'Formas craneales', tag: 'Anti-GQ1b', kind: 'criteria', items: [
          { t: 'Miller Fisher', d: 'Ataxia + arreflexia + oftalmoplejía',
            say: 'Después vienen las variantes que parten por arriba. El síndrome de Miller Fisher tiene una tríada que se pregunta: ataxia, arreflexia y oftalmoplejía bilateral externa. Su anticuerpo es el anti GQ uno b, presente en más del noventa por ciento.' },
          { t: 'Encefalitis de Bickerstaff', d: 'Lo mismo + compromiso de conciencia',
            say: 'La encefalitis de tronco de Bickerstaff es del mismo espectro, pero se suma compromiso de conciencia, desde letargia hasta coma, y puede tener signos piramidales.' },
          { t: 'Faringo-cérvico-braquial', d: 'Ptosis, disfagia, cuello; piernas sanas',
            say: 'Y la variante faringo cérvico braquial toma la faringe, el cuello y los hombros, con ptosis y disfagia, respetando las piernas. Se confunde con botulismo o miastenia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Inmunoterapia: dos opciones, igual de eficaces',
      cards: [
        { title: 'A quién y cuándo', tag: 'Precoz', kind: 'key', items: [
          { t: 'Marcha alterada, progresión rápida o falla respiratoria', d: 'Idealmente antes de 2 semanas, hasta 4',
            say: 'Pasemos al tratamiento. La inmunoterapia se indica en todo paciente con la marcha alterada, progresión rápida o insuficiencia respiratoria, y se inicia precoz: idealmente en las primeras dos semanas, y hasta las cuatro semanas desde el inicio de la debilidad.' },
        ] },
        { title: 'Las dos opciones', tag: 'Misma eficacia', kind: 'pharma', items: [
          { t: 'Inmunoglobulina EV', d: '0,4 g/kg/día por 5 días (total 2 g/kg)',
            say: 'La primera es la inmunoglobulina humana endovenosa, cero coma cuatro gramos por kilo al día durante cinco días, dos gramos por kilo en total. Es la más usada porque va por una vena periférica. Ojo en el déficit congénito de IgA, donde está contraindicada.' },
          { t: 'Plasmaféresis', d: '200 a 250 mL/kg en 4 a 5 sesiones',
            say: 'La segunda es la plasmaféresis: doscientos a doscientos cincuenta mililitros por kilo de plasma, en cuatro a cinco sesiones en días alternos. Remueve físicamente los anticuerpos, pero necesita un catéter central de alto flujo y un equipo especializado.' },
        ] },
        { title: 'Lo que no se hace', tag: 'Trampas del examen', kind: 'alert', items: [
          { t: 'No combinar ambas', d: 'Sin beneficio extra, más complicaciones',
            say: 'Dos reglas que no se discuten. Primero, no se combinan la inmunoglobulina y la plasmaféresis, ni juntas ni una tras otra: no suma beneficio y duplica las complicaciones.' },
          { t: 'Corticoides: contraindicados', d: 'No aceleran la recuperación',
            say: 'Y segundo, los corticoides están contraindicados. No aceleran la recuperación ni evitan el ventilador, y retrasan la reparación del nervio. Es la alternativa trampa más clásica, porque suena lógico en una enfermedad autoinmune.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Soporte',
      title: 'Lo que evita las complicaciones',
      cards: [
        { title: 'Prevención', tag: 'Desde el primer día', kind: 'normal', items: [
          { t: 'Enoxaparina 40 mg SC al día', d: 'Más compresión neumática',
            say: 'Y no olvides el soporte. Todo paciente que no camina recibe profilaxis tromboembólica desde el primer día, con enoxaparina cuarenta miligramos subcutánea al día y compresión neumática, para evitar un tromboembolismo pulmonar fatal.' },
          { t: 'Kinesiterapia motora precoz', d: 'Para recuperar función',
            say: 'Y fisioterapia motora precoz.' },
        ] },
        { title: 'Dolor', tag: 'Neuropático', kind: 'pharma', items: [
          { t: 'Gabapentina o pregabalina', d: 'Para el dolor radicular',
            say: 'El dolor es neuropático, así que se trata con gabapentina o pregabalina.' },
          { t: 'Evitar opioides en dosis altas', d: 'Deprimen la respiración',
            say: 'Y se evitan los opioides en dosis altas, porque deprimen el centro respiratorio de un paciente que ya ventila al límite.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión, tal como lo vas a razonar en la urgencia.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Debilidad ascendente con reflejos vivos', 'Pensar en la médula', 'Diagnosticar Guillain-Barré'],
          say: 'Repasemos las trampas. Debilidad de las cuatro extremidades con reflejos vivos: piensa en la médula. El error es llamarlo Guillain-Barré, porque sin arreflexia no lo es.' },
        { cells: ['Saturación normal, cuenta hasta 12', 'UCI e intubación electiva', 'Tranquilizarse por la oximetría'],
          say: 'Paciente que satura bien pero cuenta solo hasta doce en una espiración: UCI e intubación electiva. El error es confiar en el saturómetro.' },
        { cells: ['LCR normal en la primera semana', 'Mantener la sospecha y tratar', 'Descartar el diagnóstico'],
          say: 'Líquido normal en la primera semana: se mantiene la sospecha y se trata. El error es descartar el diagnóstico.' },
        { cells: ['Tratamiento inmunomodulador', 'Inmunoglobulina o plasmaféresis', 'Corticoides o combinar ambas'],
          say: 'Tratamiento: inmunoglobulina o plasmaféresis, una de las dos. Los errores son dar corticoides o combinarlas.' },
        { cells: ['Intubación en Guillain-Barré', 'Rocuronio', 'Succinilcolina'],
          say: 'Si hay que intubar, rocuronio. La succinilcolina puede provocar un paro por hiperkalemia.' },
        { cells: ['Ataxia + arreflexia + oftalmoplejía', 'Miller Fisher, anti-GQ1b', 'Pensar en un ACV de tronco'],
          say: 'Y la tríada de ataxia, arreflexia y oftalmoplejía: Miller Fisher. La arreflexia es la que te dice que no es un accidente vascular de tronco.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 34 años con diarrea autolimitada hace 2 semanas. Hace 4 días inicia hormigueo en los pies y debilidad que sube a los brazos; ahora le cuesta tragar. PA 155/95 lábil, FC 102, SatO2 97 %. Tetraparesia flácida simétrica y arreflexia universal. Solo logra contar hasta 12 en una espiración. LCR: proteínas 145 mg/dL, 2 células/μL.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Metilprednisolona 1 g EV por 5 días y control en sala' },
        { letter: 'B', text: 'Ingreso a UCI, intubación electiva con rocuronio e inmunoglobulina EV' },
        { letter: 'C', text: 'Intubación con succinilcolina y plasmaféresis más inmunoglobulina' },
        { letter: 'D', text: 'Hospitalizar en sala y repetir la punción lumbar en 7 días' },
        { letter: 'E', text: 'Oxígeno por naricera y observar, ya que la saturación es normal' },
      ],
      correct: 'B',
      explanation: 'Guillain-Barré (debilidad ascendente, arreflexia, disociación albúmino-citológica) con compromiso bulbar y conteo menor de 20: falla respiratoria inminente. UCI, intubación electiva sin succinilcolina (rocuronio) e inmunoglobulina EV o plasmaféresis, sin combinarlas. Los corticoides están contraindicados y la saturación normal no tranquiliza.',
      say: {
        stem: 'Vamos con un caso. Hombre de treinta y cuatro años con una diarrea autolimitada hace dos semanas. Hace cuatro días empezó con hormigueo en los pies y debilidad que ya subió a los brazos, y ahora le cuesta tragar. Presión lábil, taquicardia, y saturación de noventa y siete por ciento. Tiene tetraparesia flácida simétrica, arreflexia universal, y solo cuenta hasta doce en una espiración. El líquido trae proteínas de ciento cuarenta y cinco con dos células.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: metilprednisolona y control en sala; UCI, intubación con rocuronio e inmunoglobulina; intubación con succinilcolina y plasmaféresis más inmunoglobulina; hospitalizar en sala y repetir la punción; u oxígeno y observar porque satura bien. Piénsalo.',
        answer: 'Es la B. Es un Guillain-Barré de libro, con disociación albúmino-citológica, y además tiene disfagia y cuenta solo hasta doce: la falla respiratoria es inminente. Va a UCI, intubación electiva con rocuronio, e inmunoglobulina. La C tiene dos errores: succinilcolina y combinar ambas terapias. La A usa corticoides. Y la E es la trampa del saturómetro: la saturación es lo último que cae.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 23',
      stem: 'Un paciente de 29 años consulta por un cuadro de 7 días, progresivo, de disminución de la fuerza muscular, tanto en las extremidades superiores, como en las inferiores, siendo mayor en las inferiores. Tiene el antecedente de haber sufrido una influenza hace 14 días. Al examen físico tiene arreflexia aquiliana bilateral, asociada a hiporreflexia rotuliana mayor a derecha, con paresia M4 en las extremidades superiores y M3 en las inferiores.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Radiculopatía S1 derecho' },
        { letter: 'B', text: 'Polineuropatía desmielinizante aguda' },
        { letter: 'C', text: 'Meningitis viral' },
        { letter: 'D', text: 'Mielopatía por influenza' },
        { letter: 'E', text: 'Miositis viral' },
      ],
      correct: 'B',
      explanation: 'Infección 2 semanas antes, debilidad progresiva de las cuatro extremidades de predominio en las piernas e hipo o arreflexia: síndrome de Guillain-Barré, polineuropatía desmielinizante aguda.',
      say: {
        stem: 'Ahora preguntas reales. Esta es del EUNACOM de diciembre de dos mil dieciocho. Paciente de veintinueve años con siete días de debilidad progresiva de las cuatro extremidades, mayor en las piernas. Tuvo influenza hace catorce días. Al examen tiene arreflexia aquiliana bilateral, reflejos rotulianos disminuidos, y paresia de las cuatro extremidades, más marcada abajo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: radiculopatía S uno derecha, polineuropatía desmielinizante aguda, meningitis viral, mielopatía por influenza, o miositis viral. Piénsalo.',
        answer: 'Es la B, polineuropatía desmielinizante aguda, es decir, un Guillain-Barré. Infección dos semanas antes, debilidad que predomina abajo y reflejos que se apagan. La radiculopatía es tentadora por la asimetría leve de los reflejos, pero no explica la debilidad de los brazos. Y la mielopatía daría reflejos vivos, no abolidos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 85',
      stem: 'Un paciente de 38 años consulta por paresia facial bilateral, de una semana de evolución, mayor a izquierda. Además, presenta paresia del sexto bervio craneal izquierdo. Al examen físico tiene disminución generalizada de las fuerzas de las extremidades, con arreflexia e hipotonía.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Polineuropatía' },
        { letter: 'B', text: 'Síndrome de Guillain Barré' },
        { letter: 'C', text: 'Miastenia gravis' },
        { letter: 'D', text: 'Esclerosis múltiple' },
        { letter: 'E', text: 'Infarto de troncoencéfalo' },
      ],
      correct: 'B',
      explanation: 'Diplejía facial (el par craneal más comprometido en el Guillain-Barré), compromiso de otro par craneal y debilidad generalizada con arreflexia e hipotonía: síndrome de Guillain-Barré.',
      say: {
        stem: 'La siguiente es del EUNACOM de julio de dos mil diecinueve. Paciente de treinta y ocho años con una semana de paresia facial bilateral, mayor a izquierda, y paresia del sexto par izquierdo. Al examen tiene debilidad generalizada de las extremidades con arreflexia e hipotonía.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: polineuropatía, Guillain-Barré, miastenia gravis, esclerosis múltiple, o infarto de tronco. Piénsalo.',
        answer: 'Es la B, Guillain-Barré. La parálisis facial bilateral es el compromiso de par craneal más típico de esta enfermedad, y la arreflexia con hipotonía lo confirma. El infarto de tronco es el distractor, pero daría signos de primera motoneurona, no arreflexia. En el examen, esta pregunta se ha repetido casi igual.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 165',
      stem: 'Un paciente de 24 años, sin antecedentes, es traído porque desde que despertó en la mañana no puede movilizar sus cuatro extremidades, sin otros síntomas. Al examen físico se corrobora fuerza totalmente disminuida en todo su cuerpo, sensibilidad normal, reflejos osteotendíneos presentes y simétricos.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Síndrome de Guillain Barré' },
        { letter: 'B', text: 'Miastenia Gravis' },
        { letter: 'C', text: 'Botulismo' },
        { letter: 'D', text: 'Lesión medular cervical' },
        { letter: 'E', text: 'Parálisis periódica hipokalémica' },
      ],
      correct: 'E',
      explanation: 'Debilidad de las cuatro extremidades que aparece al despertar, con reflejos presentes: no es Guillain-Barré, porque este tiene reflejos abolidos. Por descarte, parálisis periódica hipokalémica.',
      say: {
        stem: 'Esta es del EUNACOM de julio de dos mil trece, y es para probar la regla de los reflejos. Paciente de veinticuatro años, sin antecedentes, que desde que despertó no puede mover las cuatro extremidades. La fuerza está totalmente disminuida, la sensibilidad es normal, y los reflejos están presentes y simétricos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: Guillain-Barré, miastenia gravis, botulismo, lesión medular cervical, o parálisis periódica hipokalémica. Piénsalo.',
        answer: 'Es la E, parálisis periódica hipokalémica. El distractor tentador es el Guillain-Barré, porque es una debilidad de las cuatro extremidades en un joven. Pero los reflejos están presentes, y el Guillain-Barré los tiene abolidos. Además, se instaló de golpe al despertar, no ascendiendo en días.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 86',
      stem: 'Una mujer de 32 años consulta por debilidad progresiva en ambas piernas, que inició hace 5 días y ha avanzado a las extremidades superiores en las últimas 48 horas. Refiere sensación de hormigueo en manos y pies, pero sin alteración sensorial significativa. No presenta fiebre ni dolor. Hace dos semanas tuvo un cuadro de infección respiratoria con tos y congestión nasal. Al examen físico, destaca debilidad simétrica en las extremidades, arreflexia global y marcha inestable. No hay signos de afectación de los pares craneales.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar resonancia magnética de columna' },
        { letter: 'B', text: 'Iniciar tratamiento con inmunoglobulina intravenosa' },
        { letter: 'C', text: 'Solicitar resonancia magnética de cerebro' },
        { letter: 'D', text: 'Administrar corticosteroides endovenosos' },
        { letter: 'E', text: 'Iniciar aciclovir endovenoso' },
      ],
      correct: 'B',
      explanation: 'Guillain-Barré típico (infección previa, debilidad ascendente simétrica, arreflexia) con marcha alterada: indicación de inmunoterapia precoz con inmunoglobulina EV. Los corticoides están contraindicados.',
      say: {
        stem: 'Y la última, del EUNACOM de julio de dos mil veinticuatro. Mujer de treinta y dos años con cinco días de debilidad en ambas piernas que en las últimas cuarenta y ocho horas subió a los brazos, con hormigueo en manos y pies. Tuvo una infección respiratoria hace dos semanas. Tiene debilidad simétrica, arreflexia global y marcha inestable, sin compromiso de pares craneales.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: resonancia de columna, inmunoglobulina endovenosa, resonancia de cerebro, corticoides endovenosos, o aciclovir. Piénsalo.',
        answer: 'Es la B, inmunoglobulina endovenosa. Es un Guillain-Barré típico, y la marcha alterada ya es indicación de inmunoterapia precoz. La trampa es la D: los corticoides no sirven en el Guillain-Barré. Y la resonancia de columna sería para una debilidad con reflejos vivos o nivel sensitivo, que aquí no hay.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Los reflejos mandan', kind: 'key', items: [
          { t: 'Debilidad ascendente + arreflexia', d: 'Tras una infección reciente',
            say: 'Cerremos con las reglas de oro. Debilidad flácida, simétrica y ascendente con arreflexia, después de una infección reciente: Guillain-Barré. Si los reflejos están vivos, no lo es.' },
          { t: 'Disociación albúmino-citológica', d: 'Puede faltar la primera semana',
            say: 'El líquido muestra proteínas altas con células normales, pero puede ser normal en la primera semana.' },
        ] },
        { title: 'Urgencia', tag: 'Vigilar la respiración', kind: 'alert', items: [
          { t: 'Regla 20/30/40 y conteo', d: 'La saturación engaña',
            say: 'La respiración se vigila con la regla veinte, treinta, cuarenta, o con el conteo en una espiración. La saturación engaña.' },
          { t: 'Intubar sin succinilcolina', d: 'Rocuronio',
            say: 'Si hay que intubar, rocuronio, nunca succinilcolina.' },
        ] },
        { title: 'Tratamiento', tag: 'Una de dos', kind: 'pharma', items: [
          { t: 'Inmunoglobulina o plasmaféresis', d: 'Sin combinar, nunca corticoides',
            say: 'Y el tratamiento es inmunoglobulina o plasmaféresis, sin combinarlas y sin corticoides. Si te llevas una sola idea de hoy: en el Guillain-Barré, los reflejos hacen el diagnóstico y la capacidad vital decide la conducta. En la próxima clase seguimos con la debilidad, pero en la unión neuromuscular: la miastenia gravis. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Guillain-Barré: de la sospecha a la inmunoterapia',
    root: N('start', 'Debilidad aguda de las 4 extremidades', 'Flácida, simétrica, ascendente',
      'Paciente con debilidad aguda, flácida y simétrica, que parte en las piernas y sube. Lo primero es mirar los reflejos.',
      ['', N('q', '¿Cómo están los reflejos?', 'Arreflexia o reflejos vivos',
        'Los reflejos te dicen dónde está el problema. La arreflexia apunta al nervio periférico; los reflejos vivos, a la médula.',
        ['Vivos', N('refer', 'Pensar en la médula', 'Compresión o mielitis',
          'Si los reflejos están vivos, prácticamente descartas Guillain-Barré. Piensa en una compresión medular o una mielitis transversa.')],
        ['Abolidos', N('q', '¿Hay falla respiratoria o bulbar?', 'Regla 20/30/40 · conteo',
          'Si hay arreflexia, sospechas Guillain-Barré. Antes que cualquier examen, evalúa la respiración: capacidad vital, presiones máximas, conteo en una espiración y compromiso bulbar.',
          ['Sí', N('alert', 'UCI e intubación electiva', 'Rocuronio, nunca succinilcolina',
            'Capacidad vital bajo quince a veinte, disfagia o disautonomía grave: UCI e intubación electiva, con rocuronio y nunca con succinilcolina.',
            ['', N('do', 'Punción lumbar y EMG', 'Disociación albúmino-citológica',
              'En paralelo se confirma con punción lumbar y electromiografía. Recuerda que el líquido puede ser normal la primera semana.',
              ['', N('ok', 'Inmunoglobulina o plasmaféresis', 'Sin combinar; sin corticoides',
                'Y se inicia inmunoterapia precoz: inmunoglobulina cero coma cuatro gramos por kilo al día por cinco días, o plasmaféresis. Nunca las dos, nunca corticoides.')])])],
          ['No', N('do', 'UPC o intermedio monitorizado', 'Capacidad vital cada 4 a 6 horas',
            'Si todavía ventila bien, se hospitaliza monitorizado, midiendo la capacidad vital cada cuatro a seis horas, con telemetría y control de presión.',
            ['', N('ok', 'Inmunoterapia si la marcha está alterada', 'Inmunoglobulina o plasmaféresis',
              'Si la marcha está alterada o progresa rápido, inmunoterapia precoz, con profilaxis tromboembólica y manejo del dolor neuropático.')])])])]),
  },
};
