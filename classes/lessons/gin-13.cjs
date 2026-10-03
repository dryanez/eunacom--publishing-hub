// Clase 20.13 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_ginecologia.cjs (gin-13, bloque 4).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gin-13',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Del PAP alterado a la decisión que separa cirugía de quimiorradioterapia',
      say: 'Bienvenido a la clase de hoy. Vamos a ver el cáncer cervicouterino, las lesiones que lo preceden y la colposcopía, uno de los temas de mayor rentabilidad del examen. Vas a aprender a leer un Papanicolau alterado, a saber cuándo corresponde biopsiar, y a entender por qué hay un punto exacto en que la cirugía deja de ser la respuesta correcta. Empecemos por el virus que está detrás de casi todos los casos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Por qué el VPH causa cáncer?',
      nodes: [
        { id: 'vac', col: 0, row: 0, k: 'good', t: 'Vacuna nonavalente', s: 'Gratis en cuarto y quinto básico' },
        { id: 'vph', col: 0, row: 2, k: 'cause', t: 'VPH de alto riesgo', s: 'Serotipos 16 y 18, los más oncogénicos' },
        { id: 'e6e7', col: 1, row: 2, k: 'mech', t: 'E6 y E7 actúan', s: 'Bloquean la p53 y la proteína Rb' },
        { id: 'inest', col: 2, row: 2, k: 'mech', t: 'Inestabilidad genómica', s: 'La célula ya no repara sus errores' },
        { id: 'cancer', col: 3, row: 2, k: 'risk', t: 'Cáncer cervicouterino', s: 'Aparece años después de la infección' },
      ],
      edges: [
        { from: 'vac', to: 'vph', label: 'previene' },
        { from: 'vph', to: 'e6e7' }, { from: 'e6e7', to: 'inest' }, { from: 'inest', to: 'cancer' },
      ],
      steps: [
        { show: ['vph'], note: 'Solo importan de verdad el 16 y el 18',
          say: 'Todo parte de una infección: el virus papiloma humano. Fíjate que no cualquier serotipo importa igual. Los que te tienes que aprender son el dieciséis y el dieciocho, porque juntos explican más de setenta de cada cien cánceres de cuello uterino.' },
        { show: ['e6e7'], note: 'Dos frenos que se caen a la vez',
          say: 'Este virus no solo infecta: produce dos proteínas que hacen todo el daño. La E6 degrada la p cincuenta y tres, que es el gen que frena células dañadas. Y la E7 inactiva la proteína del retinoblastoma, que también frena la división celular. Con esas dos barreras caídas, la célula pierde el control.' },
        { show: ['inest'], note: 'De infección a lesión precancerosa',
          say: 'Sin esos frenos, la célula acumula errores en su ADN y ya no los repara. Eso es la inestabilidad genómica, y es el paso que transforma una infección en una lesión precancerosa.' },
        { show: ['cancer'], note: 'Un proceso lento: por eso sirve tamizar',
          say: 'Si esto se mantiene por años, sin que nadie lo detecte, llegas al cáncer cervicouterino. Y aquí está la buena noticia: este proceso es lento, toma años, y eso es justamente lo que hace posible el tamizaje que viene ahora.' },
        { show: ['vac'], note: 'Prevención primaria, antes del tamizaje',
          say: 'Antes de seguir, un dato de prevención primaria: la vacuna nonavalente, que en Chile se da gratis en cuarto y quinto básico, previene la infección por los serotipos que más importan.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tamizaje',
      title: '¿A quién y cada cuánto se hace el PAP?',
      cards: [
        { title: 'Tamizaje poblacional', tag: 'Garantía GES N.º 3', kind: 'key', items: [
          { t: 'PAP cada tres años', d: 'En mujeres de 25 a 64 años',
            say: 'El primer pilar es el tamizaje poblacional. En Chile, toda mujer entre veinticinco y sesenta y cuatro años se hace un Papanicolau cada tres años. Y ese intervalo no es al azar: se eligió porque el cáncer tarda años en desarrollarse, así que tres años sigue detectando a tiempo.' },
          { t: 'Test de VPH', d: 'Desde los 30 años, cada 5 si es negativo',
            say: 'El otro método es el test de virus papiloma humano, que se usa desde los treinta años. Si sale negativo, el control se espera hasta cinco años, porque es más sensible que el Papanicolau y permite espaciar más los controles.' },
        ] },
        { title: 'Vacuna VPH', tag: 'Prevención primaria', kind: 'normal', items: [
          { t: 'Vacuna nonavalente', d: 'Gratuita para escolares de 4.º y 5.º básico',
            say: 'Y antes del tamizaje está la vacuna nonavalente, gratuita para escolares de cuarto y quinto básico. Vacuna y tamizaje trabajan en momentos distintos: una previene la infección, el otro detecta la lesión ya instalada.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Sistema Bethesda',
      title: 'Cómo se lee un PAP alterado',
      cards: [
        { title: 'Atipia escamosa', tag: 'ASC', kind: 'criteria', items: [
          { t: 'ASC-US', d: 'Significado indeterminado, la alteración más frecuente',
            say: 'Ahora, cómo se lee un Papanicolau alterado. El sistema Bethesda tiene varias categorías, y la primera que te tienes que aprender es el ASC-US: significa atipia de significado indeterminado, y es la alteración más frecuente de todas.' },
          { t: 'ASC-H', d: 'No se puede descartar lesión de alto grado',
            say: 'Un poco más grave es el ASC-H, donde no se puede descartar una lesión de alto grado. Fíjate en la diferencia: uno es indeterminado, el otro ya levanta sospecha.' },
        ] },
        { title: 'Lesiones intraepiteliales', tag: 'LIE', kind: 'criteria', items: [
          { t: 'LIEBG o NIE I', d: 'Casi siempre regresiona sola en dos años',
            say: 'Después vienen las lesiones intraepiteliales. La de bajo grado, o NIE uno, es la infección misma por el virus, y en más de ochenta de cada cien casos regresiona sola en dos años. No te apures a tratarla.' },
          { t: 'LIEAG o NIE II-III', d: 'Alto riesgo de progresar a cáncer invasor',
            say: 'La de alto grado, NIE dos o NIE tres, es distinta: tiene alto riesgo de progresar a cáncer invasor, y esa es la que te obliga a actuar rápido.' },
        ] },
        { title: 'Glandular o invasor', tag: 'Sin margen de duda', kind: 'alert', items: [
          { t: 'AGC o sospecha de invasión', d: 'Se deriva de inmediato, sin observar',
            say: 'Y si el informe habla de células glandulares atípicas, o de sospecha de invasión, no hay margen de duda: se deriva de inmediato.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Algoritmo',
      title: 'Qué hacer con cada resultado del PAP',
      nodes: [
        { id: 'ascus', col: 0, row: 1, k: 'start', t: 'ASC-US o LIEBG', s: 'En mayores de 30 años' },
        { id: 'vphtest', col: 1, row: 1, k: 'q', t: '¿VPH 16 o 18?', s: 'Es lo que decide el paso siguiente' },
        { id: 'obs', col: 2, row: 0, k: 'good', t: 'Control en 6 a 12 meses', s: 'Negativo, u otro genotipo con PAP normal' },
        { id: 'colpo1', col: 2, row: 2, k: 'alert', t: 'Colposcopía y biopsia', s: 'Positivo para 16 o 18' },
        { id: 'alto', col: 0, row: 3, k: 'risk', t: 'LIEAG, ASC-H o AGC', s: 'Alta sospecha, no se espera' },
        { id: 'colpo2', col: 1, row: 3, k: 'alert', t: 'Colposcopía inmediata', s: 'Menos de 30 días, por GES' },
      ],
      edges: [
        { from: 'ascus', to: 'vphtest' }, { from: 'vphtest', to: 'obs', label: 'negativo' }, { from: 'vphtest', to: 'colpo1', label: '16 o 18' },
        { from: 'alto', to: 'colpo2' },
      ],
      steps: [
        { show: ['ascus'], note: 'Primer paso: buscar el virus',
          say: 'Con esa clasificación en la cabeza, vamos al algoritmo. Si tu paciente tiene un ASC-US o una lesión de bajo grado, y tiene más de treinta años, el siguiente paso es buscar el virus papiloma humano.' },
        { show: ['vphtest'], note: 'No todos los genotipos pesan igual',
          say: 'Y aquí viene un matiz que se pregunta: no cualquier virus de alto riesgo cambia la conducta de la misma forma. Si el positivo es el dieciséis o el dieciocho, vas directo a colposcopía. Pero si es otro genotipo de alto riesgo, con un Papanicolau normal, la conducta sigue siendo el control.' },
        { show: ['obs'], note: 'Todavía no toca colposcopía',
          say: 'Entonces, si el test es negativo, o es un genotipo distinto con Papanicolau normal, controlas en seis a doce meses. Nada de colposcopía todavía.' },
        { show: ['colpo1'], note: 'Los dos serotipos que sí cambian todo',
          say: 'Si el test es positivo para dieciséis o dieciocho, ahí sí: colposcopía y biopsia.' },
        { show: ['alto'], note: 'Te saltas el paso anterior',
          say: 'Pero si el resultado ya viene como lesión de alto grado, ASC-H, o células glandulares atípicas, te saltas todo lo anterior.' },
        { show: ['colpo2'], note: 'El plazo que se pregunta siempre',
          say: 'La derivación es inmediata, a la Unidad de Patología Cervical, con un plazo garantizado de menos de treinta días. Acuérdate de ese plazo, porque el GES lo exige y se pregunta seguido.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento preinvasor',
      title: 'Cómo se trata la lesión de alto grado',
      cards: [
        { title: 'Conización cervical', tag: 'NIE II y NIE III', kind: 'key', items: [
          { t: 'LEEP o cono frío', d: 'Extirpa toda la zona de transformación',
            say: 'Con la biopsia confirmando NIE dos o NIE tres, el tratamiento es la conización cervical, ya sea con asa eléctrica, la LEEP, o con bisturí, el cono frío.' },
          { t: 'Diagnóstica y curativa', d: 'Si los márgenes quedan libres de lesión',
            say: 'Y ojo con esto: la conización no solo diagnostica, también cura, siempre que los márgenes queden libres de lesión.' },
        ] },
        { title: 'Colposcopía', tag: 'Cómo se ve la lesión', kind: 'normal', items: [
          { t: 'Ácido acético', d: 'Marca las zonas sospechosas de blanco denso',
            say: '¿Y cómo ve el especialista la lesión antes de biopsiar? Con ácido acético, que marca las zonas sospechosas de un blanco denso.' },
          { t: 'Test de Schiller', d: 'La zona alterada no capta el lugol',
            say: 'Y con el test de Schiller, usando lugol: la zona alterada no se tiñe, mientras que el tejido sano sí capta el yodo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cáncer invasor',
      title: 'Cómo se presenta el cáncer ya instalado',
      cards: [
        { title: 'Clínica clásica', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: 'Sinusorragia', d: 'Sangrado que aparece tras la relación sexual',
            say: 'Pasemos al cáncer ya instalado. El síntoma más clásico, y el que más se pregunta, es la sinusorragia: un sangrado que aparece después de la relación sexual.' },
          { t: 'Leucorrea fétida', d: 'Como agua de lavar carne',
            say: 'También puede aparecer una leucorrea con mal olor, que los libros describen como agua de lavar carne. Fíjate en esa imagen, porque aparece literal en los enunciados.' },
        ] },
        { title: 'Al examen', tag: 'Especuloscopía', kind: 'criteria', items: [
          { t: 'Masa friable o úlcera', d: 'Sangra fácil al tocarla',
            say: 'Al examen con espéculo vas a encontrar una masa que sangra fácil al tocarla, o una úlcera en el cuello. Con esa imagen, no hay que dudar: se biopsia directo.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Etapificación FIGO',
      title: 'El corte que decide cirugía o quimiorradioterapia',
      nodes: [
        { id: 'ia', col: 0, row: 1, k: 'start', t: 'Confinado al cérvix', s: 'Estadios IA a IIA1' },
        { id: 'cirradical', col: 1, row: 0, k: 'good', t: 'Cirugía radical', s: 'Wertheim-Meigs, con linfadenectomía' },
        { id: 'iib', col: 0, row: 3, k: 'risk', t: 'Invade el parametrio', s: 'Estadio IIB en adelante' },
        { id: 'qrt', col: 1, row: 3, k: 'alert', t: 'Quimiorradioterapia', s: 'Cisplatino, radioterapia y braquiterapia' },
        { id: 'trap', col: 2, row: 3, k: 'trap', t: 'Operar de todas formas', s: 'Contraindicado: no logra bordes libres' },
      ],
      edges: [
        { from: 'ia', to: 'cirradical' }, { from: 'iib', to: 'qrt' }, { from: 'qrt', to: 'trap', label: 'nunca' },
      ],
      steps: [
        { show: ['ia'], note: 'La parte más preguntada de la clase',
          say: 'Ahora la parte que más se pregunta de toda la clase: la etapificación FIGO y su punto de quiebre. Mientras el tumor está confinado al cuello, o invade la vagina sin tocar el parametrio, estás en un estadio precoz.' },
        { show: ['cirradical'], note: 'Histerectomía con linfadenectomía',
          say: 'Ahí el tratamiento es quirúrgico: la histerectomía radical con linfadenectomía pélvica, la operación de Wertheim-Meigs.' },
        { show: ['iib'], note: 'Todo cambia con el parametrio',
          say: 'Pero apenas el tumor invade el parametrio, estás en el estadio dos B en adelante, y todo cambia.' },
        { show: ['qrt'], note: 'Ya no se opera',
          say: 'El tratamiento ya no es cirugía: es quimiorradioterapia, con cisplatino semanal, radioterapia externa y braquiterapia.' },
        { show: ['trap'], note: 'Guarda esta idea para el examen',
          say: 'Y aquí está la trampa clásica: operar a una paciente con parametrios invadidos. No se hace, porque no vas a lograr bordes libres, y solo agregas complicaciones sin ganar sobrevida. Guarda esta idea: el parametrio es la frontera entre operar y no operar.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo el razonamiento, desde el PAP alterado hasta la decisión final, en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['ASC-US en mayor de 30 años', 'Test de VPH', 'Colposcopía de entrada'],
          say: 'Repasemos las trampas. ASC-US en una mayor de treinta: se pide el test de VPH, no una colposcopía de entrada.' },
        { cells: ['VPH+ (no 16 ni 18), PAP normal', 'Control en 6 a 12 meses', 'Colposcopía inmediata'],
          say: 'Si el VPH es positivo pero no es dieciséis ni dieciocho, y el Papanicolau es normal, se controla, no se deriva de inmediato.' },
        { cells: ['LIEAG, ASC-H o AGC', 'Colposcopía en menos de 30 días', 'Repetir el PAP para confirmar'],
          say: 'Con lesión de alto grado, ASC-H, o células glandulares atípicas, la colposcopía es inmediata. Repetir el PAP solo retrasa el diagnóstico.' },
        { cells: ['NIE II o NIE III', 'Conización con márgenes libres', 'Histerectomía de entrada'],
          say: 'NIE dos o NIE tres se trata con conización. Ir directo a una histerectomía es un exceso terapéutico.' },
        { cells: ['Estadio IIB o mayor', 'Quimiorradioterapia con cisplatino', 'Cirugía radical'],
          say: 'Y desde el estadio dos B en adelante, quimiorradioterapia. Operar ahí es la trampa más clásica de todo el tema.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 46 años, en control de salud sexual, refiere sangrado escaso después de las relaciones sexuales desde hace 2 meses. Su último Papanicolau, hace 8 meses, fue normal. Al examen con espéculo se observa una lesión exofítica friable de 1,5 cm en el labio anterior del cuello uterino, que sangra al contacto.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Repetir el Papanicolau en este momento' },
        { letter: 'B', text: 'Realizar colposcopía con biopsia dirigida de la lesión' },
        { letter: 'C', text: 'Solicitar tipificación de virus papiloma humano' },
        { letter: 'D', text: 'Indicar tratamiento antibiótico y controlar en un mes' },
        { letter: 'E', text: 'Programar histerectomía total sin biopsia previa' },
      ],
      correct: 'B',
      explanation: 'Sinusorragia con una lesión exofítica friable visible al espéculo es cáncer cervicouterino hasta que se demuestre lo contrario. Con una lesión visible, el Papanicolau no aporta: se biopsia directamente en la colposcopía. La tipificación de VPH no cambia la conducta cuando ya hay una lesión visible, y operar sin biopsia previa es un error grave.',
      say: {
        stem: 'Vamos con un caso. Mujer de cuarenta y seis años, en control de salud sexual, que cuenta un sangrado escaso después de las relaciones sexuales desde hace dos meses. Su último Papanicolau, hace ocho meses, fue normal. Al examen con espéculo se ve una lesión que sangra fácil al tocarla, de un centímetro y medio, en el labio anterior del cuello uterino.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes cinco opciones: repetir el Papanicolau ahora, hacer colposcopía con biopsia dirigida, pedir la tipificación del virus papiloma humano, dar antibióticos y controlar en un mes, o programar una histerectomía sin biopsia previa. Piénsalo.',
        answer: 'Es la B. Fíjate que aquí ya hay una lesión visible, así que el Papanicolau ya no aporta nada: cuando ves la lesión, biopsias directo, en la misma colposcopía. La tipificación de virus no cambia nada frente a una lesión que ya se ve. Y operar sin biopsia previa, sin saber si es invasor o qué tan invasor, es un error grave.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 172',
      stem: 'Una mujer de 34 años, con vacunación completa contra el virus papiloma humano, se realiza un PAP, que es informado como muestra satisfactoria sin presencia de atipías celulares, y una prueba de detección de virus papiloma humano que es informada como positiva para VPH de alto riesgo, serotipo 56.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Indicar refuerzo de la vacunación contra el VPH' },
        { letter: 'B', text: 'Realizar control de PAP en un año' },
        { letter: 'C', text: 'Realizar colposcopía' },
        { letter: 'D', text: 'Repetir el PAP en este momento' },
        { letter: 'E', text: 'Realizar conización cervical' },
      ],
      correct: 'B',
      explanation: 'A diferencia de los serotipos 16 y 18, que se derivan a colposcopía de manera inmediata por ser los más agresivos, otros genotipos de alto riesgo, como el 56, con un PAP normal, se manejan con observación y control en un año.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Mujer de treinta y cuatro años, con la vacuna contra el VPH completa, se realiza un Papanicolau, que sale normal, sin atipías, y una prueba de VPH que resulta positiva para un serotipo de alto riesgo, el cincuenta y seis.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: reforzar la vacuna, controlar el PAP en un año, hacer colposcopía, repetir el PAP ahora mismo, o hacer una conización cervical. Piénsalo.',
        answer: 'Es la B. Este es justo el matiz que vimos: el dieciséis y el dieciocho van directo a colposcopía si salen positivos, pero el cincuenta y seis es otro genotipo de alto riesgo, y con el Papanicolau normal, la conducta es controlar en un año, no derivar de inmediato.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 91',
      stem: 'Una paciente de 35 años, multípara de 1, se realiza PAP de control, que es informado como presencia de atipias escamosas de significado incierto (ASC-US). Su especuloscopía es normal.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar colposcopía y biopsia cervical' },
        { letter: 'B', text: 'Solicitar reacción de cadena de polimerasa para virus papiloma humano' },
        { letter: 'C', text: 'Realizar diatermocoagulación cervical' },
        { letter: 'D', text: 'Realizar histerectomía' },
        { letter: 'E', text: 'Realizar biopsia de endometrio' },
      ],
      correct: 'B',
      explanation: 'Ante un ASC-US, la conducta más aceptada es solicitar la prueba de VPH. Si resulta positiva para un genotipo de alto riesgo, se deriva a colposcopía y biopsia; si es negativa, se puede observar o repetir el PAP en 6 a 12 meses.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil veinticuatro. Paciente de treinta y cinco años, con un hijo, se hace un Papanicolau de control que informa atipia escamosa de significado indeterminado, un ASC-US. Su especuloscopía es normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: colposcopía y biopsia, pedir la prueba de VPH, hacer diatermocoagulación, hacer histerectomía, o biopsiar el endometrio. Piénsalo.',
        answer: 'Es la B. Con un ASC-US, el paso siguiente es buscar el virus, no ir directo a colposcopía. Si el test sale positivo para un genotipo de alto riesgo, ahí recién se deriva a colposcopía y biopsia. Sin esa prueba de por medio, todas las demás opciones se adelantan al paso que corresponde.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 21',
      stem: 'Una paciente de 25 años, con antecedente de haber iniciado su vida sexual a los 14 años y mantener relaciones con múltiples parejas sin métodos de barrera, se realiza un PAP que es informado como lesión de alto grado. Además, se realiza tipificación de virus papiloma humano, que muestra serotipo de bajo grado.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar nuevo PAP en 6 meses' },
        { letter: 'B', text: 'Solicitar nuevo PAP en 6 años' },
        { letter: 'C', text: 'Realizar colposcopía y eventual biopsia' },
        { letter: 'D', text: 'Realizar conización cervical' },
        { letter: 'E', text: 'Realizar histerectomía' },
      ],
      correct: 'C',
      explanation: 'El PAP de alto grado siempre se deriva a colposcopía y biopsia, sin importar el resultado de la tipificación de VPH: esa prueba solo cambia la conducta cuando el PAP es de bajo grado.',
      say: {
        stem: 'Una más, del EUNACOM de diciembre de dos mil diecinueve. Paciente de veinticinco años, con inicio sexual a los catorce años y múltiples parejas sin métodos de barrera, se hace un Papanicolau que informa lesión de alto grado. Además, la tipificación del virus muestra un serotipo de bajo grado.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: repetir el PAP en seis meses, repetirlo en seis años, hacer colposcopía y eventual biopsia, hacer conización, o hacer histerectomía. Piénsalo.',
        answer: 'Es la C. Fíjate en la trampa: el resultado del virus es de bajo grado, pero eso no importa aquí, porque el Papanicolau ya viene como lesión de alto grado. Y un Papanicolau de alto grado siempre va a colposcopía y biopsia, sin que la tipificación del virus cambie nada.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Tamizaje', tag: 'Regla de oro', kind: 'key', items: [
          { t: 'PAP cada 3 años', d: 'De los 25 a los 64 años',
            say: 'Cerremos con las reglas de oro. El Papanicolau se hace cada tres años, entre los veinticinco y los sesenta y cuatro.' },
          { t: 'Solo el 16 y el 18', d: 'Van directo; otros genotipos con PAP normal se controlan',
            say: 'Y solo el dieciséis y el dieciocho, con Papanicolau alterado, van directo a colposcopía. Los demás genotipos, con Papanicolau normal, se controlan.' },
        ] },
        { title: 'Preinvasor', tag: 'Conización', kind: 'pharma', items: [
          { t: 'NIE II o NIE III', d: 'Conización con márgenes libres',
            say: 'El NIE dos y el NIE tres se tratan con conización, y los márgenes libres son los que confirman la cura.' },
        ] },
        { title: 'El corte que decide todo', tag: 'Parametrio', kind: 'alert', items: [
          { t: 'Sin parametrio: cirugía', d: 'Histerectomía radical de Wertheim-Meigs',
            say: 'Sin invasión del parametrio, cirugía radical.' },
          { t: 'Con parametrio: quimiorradioterapia', d: 'La cirugía queda contraindicada',
            say: 'Con parametrio invadido, quimiorradioterapia, y la cirugía queda contraindicada. Si te llevas una sola idea de hoy: el parametrio es la frontera entre operar y no operar. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Del PAP alterado a la decisión final',
    root: N('start', 'PAP alterado', '¿Qué categoría de Bethesda informa?',
      'Paciente con un Papanicolau alterado. La categoría de Bethesda es lo que abre el árbol de decisión completo.',
      ['ASC-US o LIEBG, mayor de 30 años', N('q', '¿VPH 16 o 18?', 'Los únicos que cambian la conducta de inmediato',
        'Con ASC-US o lesión de bajo grado, el paso es buscar el virus. Pero solo el dieciséis y el dieciocho, positivos, adelantan la colposcopía.',
        ['Negativo, u otro genotipo', N('ok', 'Control en 6 a 12 meses', 'Sin colposcopía por ahora',
          'Si el test es negativo, o es otro genotipo de alto riesgo con Papanicolau normal, controlas en seis a doce meses.')],
        ['Positivo para 16 o 18', N('do', 'Colposcopía y biopsia', 'Confirma o descarta la lesión',
          'Con dieciséis o dieciocho positivo, colposcopía y biopsia.')])],
      ['LIEAG, ASC-H o AGC', N('alert', 'Colposcopía inmediata', 'Unidad de Patología Cervical, menos de 30 días',
        'Con lesión de alto grado, ASC-H, o células glandulares atípicas, te saltas el test de virus: la colposcopía es inmediata, con plazo GES de menos de treinta días.',
        ['Biopsia: NIE II o III', N('do', 'Conización, LEEP o cono frío', 'Curativa si los márgenes quedan libres',
          'Si la biopsia confirma NIE dos o NIE tres, el tratamiento es la conización, con asa eléctrica o con bisturí.')],
        ['Biopsia: cáncer invasor', N('q', '¿Invade el parametrio?', 'El corte que decide cirugía o quimiorradioterapia',
          'Si la biopsia ya muestra cáncer invasor, todo depende de si el tumor tocó el parametrio.',
          ['No, estadios IA a IIA1', N('ok', 'Cirugía radical de Wertheim-Meigs', 'Histerectomía con linfadenectomía',
            'Sin invasión del parametrio, cirugía radical: histerectomía con linfadenectomía pélvica.')],
          ['Sí, estadio IIB o más', N('alert', 'Quimiorradioterapia', 'La cirugía queda contraindicada',
            'Con el parametrio invadido, quimiorradioterapia con cisplatino, radioterapia y braquiterapia. Operar ahí es la trampa clásica del tema.')])])]),
  },
};
