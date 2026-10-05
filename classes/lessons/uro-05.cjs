// Clase 13.5 (Urología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_urologia.cjs (uro-05). Preguntas: banco real EUNACOM (class_questions.cjs --search).
// El código de la clase (4.01.2.002) no tiene preguntas reales propias; se usan las que salen de la búsqueda por tema (testículo agudo, torsión, hidátide).
// Preguntas reales no usadas: Diciembre 2018 P137 (explorar, repite el punto de las otras). Ninguna de las usadas aparece en otra clase.
// Seguridad: la exploración quirúrgica nunca se posterga por una ecografía si la sospecha es alta; la destorsión manual se enseña solo como medida que no reemplaza ni retrasa la cirugía.
// Imágenes: no hay una figura clínica de torsión extraída en Bailey & Love ni en Bates (las de Bates son ilustraciones de menos de 250 px; Bailey Fig. 80.3 a 80.5 no se extrajo); ver informe.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'uro-05',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Escroto agudo: torsión testicular versus torsión de hidátide, y por qué no se espera la ecografía',
      say: 'Bienvenido. Hoy vemos el escroto agudo. Un adolescente con dolor testicular brusco puede perder el testículo en pocas horas, y el examen quiere saber si lo operas ya o si esperas. Distinguiremos la torsión del cordón, que es urgencia quirúrgica, de la torsión de la hidátide, que se maneja con reposo. Y un principio claro: si la sospecha es alta, no se espera la ecografía.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Qué pasa en la torsión del cordón',
      nodes: [
        { id: 'b', col: 0, row: 1, k: 'cause', t: 'Badajo de campana', s: 'Túnica vaginal envuelve todo' },
        { id: 'g', col: 1, row: 1, k: 'mech', t: 'El testículo gira', s: 'Sobre su cordón' },
        { id: 'v', col: 2, row: 0, k: 'mech', t: 'Se ocluye la vena', s: 'Congestión y edema' },
        { id: 'a', col: 3, row: 1, k: 'risk', t: 'Se colapsa la arteria', s: 'Isquemia del testículo' },
        { id: 't', col: 4, row: 1, k: 'alert', t: 'El tiempo decide', s: 'Menos de 6 horas: más de 90%' },
        { id: 'c', col: 2, row: 2, k: 'effect', t: 'Anomalía bilateral', s: 'También el otro lado' },
      ],
      edges: [
        { from: 'b', to: 'g' }, { from: 'g', to: 'v' }, { from: 'v', to: 'a' },
        { from: 'a', to: 't' }, { from: 'b', to: 'c' },
      ],
      steps: [
        { show: ['b', 'g'], note: 'Un testículo que gira libre',
          say: 'La torsión intravaginal ocurre cuando la túnica vaginal envuelve de forma anormal el testículo, el epidídimo y el cordón, y el testículo no queda anclado a la pared posterior del escroto. Esa anomalía congénita se llama deformidad en badajo de campana, y permite que el testículo gire libre sobre su propio eje.' },
        { show: ['v', 'a'], note: 'Primero la vena, luego la arteria',
          say: 'Al girar, primero se ocluye el retorno venoso. Hay congestión, edema y sube la presión dentro del testículo. Después de unos giros se colapsa también la arteria y empieza la isquemia.' },
        { show: ['t'], note: 'La viabilidad depende de las horas',
          say: 'Y aquí está el dato que manda sobre todo el tema: el tiempo. Si se opera dentro de las primeras seis horas, el testículo se salva en más de noventa por ciento. A las doce horas cae a veinte o cincuenta por ciento, y después de veinticuatro horas es casi cero.' },
        { show: ['c'], note: 'El badajo de campana es bilateral',
          say: 'Y un detalle que se pregunta: el badajo de campana es bilateral en más del ochenta por ciento de los casos. Por eso el testículo del otro lado también está en riesgo.' },
      ],
    },

    {
      type: 'image',
      light: true,
      kicker: 'Así se ve',
      title: 'El badajo de campana',
      images: [
        { src: 'biblioteca/19_urologia/uro-05/01_badajo-de-campana-torsion__bailey-love_p1520.jpg', label: 'A: fijación normal de la túnica vaginal. B: inserción alta, badajo de campana', credit: 'Bailey & Love 27.ª ed., Fig. 80.4' },
      ],
      steps: [
        { note: 'A: el testículo queda anclado',
          say: 'A la izquierda, lo normal: la túnica vaginal, en rojo, rodea solo la parte anterior, y el testículo queda fijo atrás al escroto.' },
        { note: 'B: cuelga libre y puede girar',
          say: 'A la derecha, el badajo de campana: la túnica se inserta alto y envuelve todo. El testículo cuelga libre, como el badajo de una campana, y puede girar sobre el cordón.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Cómo se reconoce la torsión',
      cards: [
        { title: 'Historia', tag: '12 a 18 años', kind: 'key', items: [
          { t: 'Dolor brusco y desgarrador', d: 'Muchas veces durmiendo',
            say: 'Típicamente, un adolescente con dolor testicular súbito, intensísimo, muchas veces mientras duerme o tras un ejercicio leve. Hay otro pico en el período neonatal.' },
          { t: 'Náuseas y vómitos', d: 'Sin fiebre ni disuria',
            say: 'Se acompaña de náuseas y vómitos, que son vegetativos. No hay fiebre ni síntomas urinarios, y eso la separa de la infección.' },
        ] },
        { title: 'Tres signos al examen', tag: 'Se preguntan', kind: 'alert', items: [
          { t: 'Reflejo cremastérico abolido', d: 'Sensibilidad mayor de 95%',
            say: 'El primero es el reflejo cremastérico, que está ausente en el lado afectado. Tiene una sensibilidad de más de noventa y cinco por ciento. Si está presente y es simétrico, la torsión es muy poco probable.' },
          { t: 'Gouverneur: ascendido y horizontal', d: 'Testículo retraído y rotado',
            say: 'El segundo, el signo de Gouverneur: el testículo está ascendido, horizontalizado y rotado hacia adelante.' },
          { t: 'Prehn negativo', d: 'Elevarlo no alivia',
            say: 'El tercero, el signo de Prehn negativo. Al elevar el testículo, el dolor no mejora e incluso empeora. En etapas tardías, el hemiescroto se pone rojo, edematoso y duro.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico diferencial',
      title: 'Torsión de la hidátide de Morgagni',
      cards: [
        { title: 'Qué es', tag: '7 a 12 años', kind: 'key', items: [
          { t: 'Apéndice del polo superior', d: 'Remanente mülleriano',
            say: 'La hidátide de Morgagni es un remanente embrionario, del conducto mülleriano, que cuelga del polo superior del testículo. Si se tuerce, produce una isquemia pequeña y localizada. Es la causa más frecuente de escroto agudo en niños de siete a doce años.' },
          { t: 'Dolor gradual y localizado', d: 'Solo en el polo superior',
            say: 'El dolor es más gradual y se localiza justo en el polo superior. Casi no hay vómitos.' },
        ] },
        { title: 'Cómo se distingue', tag: 'Signo clave', kind: 'alert', items: [
          { t: 'Cremastérico presente', d: 'Testículo en posición normal',
            say: 'A diferencia de la torsión del cordón, el reflejo cremastérico se conserva, y el testículo está en su posición normal, sin retraer.' },
          { t: 'Signo del punto azul', d: 'Patognomónico',
            say: 'Y el signo patognomónico es el punto azul: se ve o se palpa por transparencia, en el polo superior, el apéndice isquémico.' },
          { t: 'Reposo y AINE', d: 'Cirugía solo si hay duda',
            say: 'El tratamiento es conservador, con reposo y antiinflamatorios. Solo se opera si hay duda con una torsión del cordón. Y en una pregunta por edad, el adolescente es torsión del cordón, y el escolar más chico es la hidátide.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'El Doppler no puede retrasar la cirugía',
      cards: [
        { title: 'Qué muestra el Doppler', tag: 'Examen de apoyo', kind: 'normal', items: [
          { t: 'Sin flujo arterial', d: 'Y signo del remolino en el cordón',
            say: 'La ecografía Doppler testicular muestra ausencia de flujo en el testículo, y el signo del remolino en el cordón. Tiene una sensibilidad de ochenta y cinco a noventa por ciento y una especificidad de noventa y cinco.' },
          { t: 'Solo si la duda es intermedia', d: 'Cuadros atípicos',
            say: 'Es un examen de apoyo, para los casos de sospecha intermedia o atípica.' },
        ] },
        { title: 'La regla de oro', tag: 'Urgencia', kind: 'alert', items: [
          { t: 'Sospecha alta: pabellón', d: 'No esperar imágenes',
            say: 'Si la sospecha clínica de torsión es alta, se va directo a explorar el escroto. No se espera al ecografista, no se traslada al paciente para una ecografía y no se pide un examen para decidir. Cada hora cuenta, y ese retraso se considera una falta médica.' },
          { t: 'Todo testículo agudo se explora', d: 'Ante la duda, también',
            say: 'La regla de las preguntas reales es simple: todo testículo agudo en un adolescente se explora. Y si hay duda, también se explora. No se da solo analgesia, ni solo antibióticos, ni se suspende el escroto y se espera.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cirugía',
      title: 'Qué se hace en pabellón',
      cards: [
        { title: 'Exploración', tag: 'Anestesia general', kind: 'key', items: [
          { t: 'Incisión escrotal y destorsión', d: 'Hacia afuera, como abrir un libro',
            say: 'Se abre el escroto, se abre la túnica vaginal y se destuerce el cordón, habitualmente hacia afuera, como abrir un libro. Luego se aplican compresas tibias unos diez a quince minutos para ver si el testículo se reperfunde.' },
          { t: 'Viable: orquidopexia', d: 'Rosado y sangra al corte',
            say: 'Si recupera el color rosado y sangra, se conserva y se fija a la pared del escroto con una sutura no reabsorbible. Si sigue negro azulado, se hace orquiectomía.' },
        ] },
        { title: 'No olvidar', tag: 'Obligatorio', kind: 'alert', items: [
          { t: 'Fijar también el otro testículo', d: 'Siempre, en el mismo acto',
            say: 'La orquidopexia del testículo contralateral es obligatoria, en el mismo acto, porque el badajo de campana es bilateral.' },
          { t: 'Destorsión manual: solo puente', d: 'No reemplaza la cirugía',
            say: 'La destorsión manual desde medial a lateral puede aliviar el dolor, pero no reemplaza la cirugía, que sigue siendo obligatoria, y nunca debe retrasar el traslado a pabellón.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del dolor testicular agudo a la cirugía o al reposo.',
    },

    {
      type: 'table',
      kicker: 'Diferencial',
      title: 'Escroto agudo: tres causas frente a frente',
      head: ['Parámetro', 'Torsión del cordón', 'Hidátide', 'Epididimitis'],
      rows: [
        { cells: ['Edad', '12 a 18 años', '7 a 12 años', 'Adulto activo'],
          say: 'La edad orienta mucho. La torsión del cordón es de adolescentes, la hidátide de escolares, y la epididimitis de adultos sexualmente activos.' },
        { cells: ['Inicio del dolor', 'Brusco', 'Gradual', 'Progresivo, días'],
          say: 'El dolor de la torsión es brusco, a veces despierta al paciente. El de la hidátide es gradual, y el de la epididimitis progresa en horas o días.' },
        { cells: ['Vómitos', 'Muy frecuentes', 'Raros', 'Raros, hay fiebre'],
          say: 'Los vómitos son muy frecuentes en la torsión. En la epididimitis predominan la fiebre y la disuria.' },
        { cells: ['Reflejo cremastérico', 'Abolido', 'Presente', 'Presente'],
          say: 'El reflejo cremastérico solo está abolido en la torsión del cordón.' },
        { cells: ['Signo de Prehn', 'Negativo', 'Indiferente', 'Positivo'],
          say: 'Elevar el testículo no alivia en la torsión, y sí alivia en la epididimitis.' },
        { cells: ['Doppler', 'Sin flujo', 'Flujo normal', 'Flujo aumentado'],
          say: 'En el Doppler, la torsión no tiene flujo, la hidátide lo tiene normal, y la epididimitis, aumentado.' },
        { cells: ['Conducta', 'Pabellón urgente', 'Reposo y AINE', 'Antibióticos'],
          say: 'Y la conducta: pabellón de urgencia, reposo y antiinflamatorios, o antibióticos según la edad.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Escroto agudo: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Adolescente, dolor brusco, vómitos', 'Exploración quirúrgica', 'Pedir ecografía primero'],
          say: 'Adolescente con dolor brusco y vómitos: exploración quirúrgica inmediata. El error es pedir la ecografía y esperar.' },
        { cells: ['Cremastérico abolido', 'Torsión del cordón', 'Pensar en epididimitis'],
          say: 'Reflejo cremastérico abolido: torsión del cordón. Con epididimitis e hidátide, el reflejo se conserva.' },
        { cells: ['Prehn negativo', 'Torsión: no alivia', 'Confundirlo con epididimitis'],
          say: 'En la torsión, elevar el testículo no alivia el dolor. En la epididimitis sí alivia.' },
        { cells: ['Punto azul, 7 a 12 años', 'Reposo y AINE', 'Operar de rutina'],
          say: 'Punto azul en un escolar: torsión de hidátide, con reposo y antiinflamatorios.' },
        { cells: ['Después de la cirugía', 'Fijar los dos testículos', 'Fijar solo el afectado'],
          say: 'Operada una torsión, se fijan los dos testículos. Olvidar el contralateral es el error.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Adolescente de 14 años llega a las 4 AM por dolor testicular izquierdo brutal de 2 horas, que lo despertó, con dos vómitos. Afebril. El testículo izquierdo está doloroso, ascendido y horizontalizado. El reflejo cremastérico izquierdo está abolido y elevar el testículo no alivia el dolor.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Ecografía Doppler testicular antes de decidir' },
        { letter: 'B', text: 'Exploración quirúrgica urgente y orquidopexia bilateral' },
        { letter: 'C', text: 'Ceftriaxona y doxiciclina con control en 24 horas' },
        { letter: 'D', text: 'Analgésicos, suspensorio escrotal y alta' },
        { letter: 'E', text: 'Reposo y AINE por torsión de hidátide' },
      ],
      correct: 'B',
      explanation: 'Cuadro típico de torsión del cordón: adolescente, inicio brusco nocturno, vómitos, Gouverneur positivo, Prehn negativo y cremastérico abolido, a solo 2 horas. Se explora de inmediato, sin esperar imágenes, y se fijan ambos testículos.',
      say: {
        stem: 'Un adolescente de catorce años llega a las cuatro de la mañana con un dolor testicular izquierdo brutal de dos horas, que lo despertó, y dos vómitos. No tiene fiebre. El testículo está ascendido y horizontalizado, el reflejo cremastérico está abolido y elevarlo no alivia el dolor.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: Doppler antes de decidir; exploración quirúrgica urgente y orquidopexia bilateral; antibióticos con control mañana; analgesia y alta; o reposo y antiinflamatorios. Piénsalo.',
        answer: 'Es la B. Todo es torsión del cordón, y solo han pasado dos horas, es decir, el testículo aún se puede salvar. La A es la tentación: con sospecha alta no se espera la imagen. Y la E sería de un niño más chico, con reflejo conservado.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 44',
      stem: 'Un paciente de 16 años presenta dolor testicular derecho intenso, de inicio súbito, asociado a náuseas. Al examen se palpa el testículo derecho muy doloroso y aumentado de tamaño.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Torsión testicular' },
        { letter: 'B', text: 'Torsión de la hidátide' },
        { letter: 'C', text: 'Infarto testicular' },
        { letter: 'D', text: 'Orquiepididimitis' },
        { letter: 'E', text: 'Trombosis de varicocele' },
      ],
      correct: 'A',
      explanation: 'Cuadro clásico de torsión testicular. La edad de adolescente orienta más a torsión del cordón que a hidátide, que es de niños más chicos.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil quince. Un paciente de dieciséis años con dolor testicular derecho intenso, de inicio súbito, con náuseas. El testículo está muy doloroso y aumentado de tamaño.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: torsión testicular; torsión de la hidátide; infarto testicular; orquiepididimitis; o trombosis de varicocele. Piénsalo.',
        answer: 'Es la A. Inicio súbito, náuseas y adolescente: torsión del cordón. La B es la trampa, pero la hidátide es de niños de siete a doce años y de inicio más gradual.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 158',
      stem: 'Un paciente de 16 años, sin antecedentes, consulta por dolor testicular que inició hace una hora, asociado a náuseas, vómitos y sudoración. Al examen físico se aprecia testículo derecho ascendido respecto al contralateral y escaso eritema circundante.',
      question: 'La conducta más adecuada en este caso es:',
      options: [
        { letter: 'A', text: 'Realizar ecografía testicular' },
        { letter: 'B', text: 'Indicar doxiciclina y cirpofloxacino' },
        { letter: 'C', text: 'Indicar ketorolaco endovenoso y suspensión testicular' },
        { letter: 'D', text: 'Realizar exploración quirúrgica inmediata' },
        { letter: 'E', text: 'Solicitar exámenes generales, parámetros inflamatorios y sedimento de orina, luego decidir conducta según resultados' },
      ],
      correct: 'D',
      explanation: 'Testículo agudo con sospecha de torsión: exploración quirúrgica inmediata. No se esperan imágenes ni exámenes.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil trece. Un joven de dieciséis años con dolor testicular de una hora, náuseas, vómitos y sudoración. El testículo derecho está ascendido y hay poco eritema.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: ecografía testicular; doxiciclina y ciprofloxacino; ketorolaco y suspensión testicular; exploración quirúrgica inmediata; o exámenes generales y sedimento para decidir después. Piénsalo.',
        answer: 'Es la D. Testículo ascendido, dolor brusco y vómitos: probable torsión, y se explora de inmediato. La A y la E son las trampas, porque hacen perder horas. Y la C da analgesia y deja el testículo isquémico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 91',
      stem: 'Adolescente de 13 años quien consulta por dolor inguinal y testicular izquierdo, intenso, de 45 minutos de evolución, irradiado a hipogastrio y acompañado de náuseas y vómitos. Al examen físico está afebril, con escroto enrojecido, testículo retraído y doloroso a la palpación.',
      question: '¿Cuál es la conducta a seguir?',
      options: [
        { letter: 'A', text: 'Administrar AINES' },
        { letter: 'B', text: 'Administrar antibióticos' },
        { letter: 'C', text: 'Cirugía' },
        { letter: 'D', text: 'Realizar suspensión testicular' },
        { letter: 'E', text: 'Solicitar ecografía testicular' },
      ],
      correct: 'C',
      explanation: 'Es una torsión testicular, o al menos un testículo agudo, y se maneja con exploración quirúrgica.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil dieciséis. Un adolescente de trece años con dolor inguinal y testicular izquierdo intenso de cuarenta y cinco minutos, irradiado al hipogastrio, con náuseas y vómitos. No tiene fiebre, el escroto está rojo y el testículo está retraído y doloroso.',
        question: '¿Cuál es la conducta a seguir?',
        options: 'Las opciones: antiinflamatorios; antibióticos; cirugía; suspensión testicular; o ecografía testicular. Piénsalo.',
        answer: 'Es la C. El dolor puede irradiarse al hipogastrio y confundir con un cuadro abdominal, pero el testículo retraído y doloroso es torsión, y se opera. La E es la tentación, y esa ecografía solo retrasa la cirugía.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 97',
      stem: 'Un paciente de 19 años consulta por dolor en el testículo izquierdo, de inicio brusco y que se ha asociado a vómitos y malestar general. Al examen físico se aprecia testículo izquierdo edematoso, muy doloroso y ascendido.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar exploración quirúrgica escrotal' },
        { letter: 'B', text: 'Realizar ecografía doppler testicular' },
        { letter: 'C', text: 'Realizar pieloTAC' },
        { letter: 'D', text: 'Solicitar TAC de abdomen y pelvis' },
        { letter: 'E', text: 'Indicar reposo y analgésicos' },
      ],
      correct: 'A',
      explanation: 'Todo testículo agudo se explora, más aún a esta edad, en que se sospecha torsión.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecisiete. Un joven de diecinueve años con dolor brusco en el testículo izquierdo, vómitos y malestar. El testículo está edematoso, muy doloroso y ascendido.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: exploración quirúrgica escrotal; Doppler testicular; pielotac; TAC de abdomen y pelvis; o reposo y analgésicos. Piénsalo.',
        answer: 'Es la A. Todo testículo agudo se explora. Recuerda que el rango de edad de la torsión llega hasta adultos jóvenes. La B es la trampa, porque el Doppler no debe retrasar la cirugía, y el pielotac es para el cólico renal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 94',
      stem: 'Un hombre de 16 años presenta dolor testicular intenso, que inició hace 8 horas. Tiene EVA 8/10 y al examen testicular se constata testículo derecho muy doloroso, que no mejora con la suspensión testicular.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Antibióticos orales' },
        { letter: 'B', text: 'Doppler testicular' },
        { letter: 'C', text: 'Analgésicos orales' },
        { letter: 'D', text: 'Antibióticos endovenosos' },
        { letter: 'E', text: 'Exploración quirúrgica' },
      ],
      correct: 'E',
      explanation: 'Dolor testicular intenso en un adolescente que no mejora al elevar el testículo (Prehn negativo): torsión hasta demostrar lo contrario. Se explora. Con 8 horas, el tiempo ya corre en contra.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecinueve. Un joven de dieciséis años con dolor testicular muy intenso de ocho horas. El testículo derecho no mejora al suspenderlo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: antibióticos orales; Doppler testicular; analgésicos orales; antibióticos endovenosos; o exploración quirúrgica. Piénsalo.',
        answer: 'Es la E. Que el dolor no mejore al suspender el testículo es un Prehn negativo, y en un adolescente es torsión hasta demostrar lo contrario. Con ocho horas ya pasó la ventana ideal, así que menos aún se puede esperar. Los antibióticos y los analgésicos no resuelven una torsión.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: escroto agudo',
      cards: [
        { title: 'Torsión del cordón', tag: 'Urgencia quirúrgica', kind: 'alert', items: [
          { t: 'Todo testículo agudo se explora', d: 'Menos de 6 horas: más de 90%',
            say: 'Cerremos con las reglas de oro. La torsión del cordón es una urgencia quirúrgica dependiente del tiempo: dentro de las seis primeras horas se salva más del noventa por ciento.' },
          { t: 'Cremastérico abolido, Prehn negativo', d: 'Gouverneur positivo',
            say: 'Los signos son reflejo cremastérico abolido, Prehn negativo y testículo ascendido y horizontal.' },
          { t: 'Nunca esperar imágenes', d: 'Si la sospecha es alta',
            say: 'Con sospecha alta, no se espera el Doppler ni se traslada para una ecografía.' },
        ] },
        { title: 'Hidátide y cirugía', tag: 'Diferencial', kind: 'key', items: [
          { t: 'Hidátide: punto azul, reposo y AINE', d: 'Cremastérico presente',
            say: 'La torsión de hidátide es de escolares, con reflejo conservado y punto azul, y se maneja con reposo y antiinflamatorios.' },
          { t: 'Orquidopexia bilateral siempre', d: 'Badajo de campana bilateral',
            say: 'Y al operar una torsión, se fijan ambos testículos. Si te llevas una sola idea de hoy: ante un testículo agudo en un adolescente, se explora, y no se espera la ecografía. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Escroto agudo: torsión o hidátide',
    root: N('start', 'Dolor testicular agudo', 'Adolescente o niño',
      'Un niño o adolescente con dolor testicular de inicio agudo. Lo primero es preguntarte si puede ser una torsión del cordón, porque es la que no puede esperar.',
      ['Brusco, vómitos, cremastérico abolido, Prehn negativo', N('alert', 'Sospecha alta de torsión', 'Urgencia quirúrgica',
        'Si el dolor es brusco, hay vómitos, el reflejo cremastérico está abolido y elevar el testículo no alivia, la sospecha de torsión es alta.',
        ['Sin esperar imágenes', N('refer', 'Exploración quirúrgica inmediata', 'Menos de 6 horas: más de 90%',
          'Se va directo a pabellón. No se espera ecografía ni exámenes: cada hora de retraso cuesta testículo.',
          ['Testículo viable', N('ok', 'Orquidopexia bilateral', 'Fijar los dos lados',
            'Si se reperfunde, se fija con sutura no reabsorbible, y se fija también el testículo contralateral.')],
          ['No viable', N('do', 'Orquiectomía y fijar el otro', 'Siempre el contralateral',
            'Si queda negro azulado, orquiectomía, y se fija igual el testículo del otro lado.')],
        )],
      )],
      ['Gradual, cremastérico presente, punto azul', N('ok', 'Torsión de hidátide', 'Escolar de 7 a 12 años',
        'Si el dolor es gradual, localizado en el polo superior, con reflejo conservado y punto azul, es una torsión de hidátide.',
        ['Manejo', N('do', 'Reposo y AINE', 'Cirugía solo si hay duda',
          'Se maneja con reposo y antiinflamatorios. Solo se opera si no se puede descartar una torsión del cordón.')],
      )],
      ['Fiebre, disuria, Prehn positivo', N('do', 'Pensar en epididimitis', 'Se ve en la próxima clase',
        'Si hay fiebre, síntomas urinarios y elevar el testículo alivia el dolor, piensa en epididimitis, que es el tema de la próxima clase.')],
    ),
  },
};
