// Clase 19.10 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_obstetricia_bloque_3.cjs (ob-10).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-10',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Un cuello y una ecografía deciden entre cinco cuadros distintos',
      say: 'Bienvenida. Hoy vemos el aborto espontáneo, sus formas clínicas, el aborto séptico, y la ley que regula la interrupción voluntaria del embarazo en Chile. Es un tema denso, con hasta cinco cuadros parecidos entre sí. Pero se ordena con solo dos preguntas: ¿el cuello está abierto o cerrado?, y ¿qué muestra la ecografía? Con esas dos respuestas, vas a saber exactamente qué hacer.',
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico diferencial',
      title: 'El cuello uterino es tu primera pista',
      nodes: [
        { id: 'met', col: 0, row: 2, k: 'start', t: 'Metrorragia primer trimestre', s: 'Con o sin dolor cólico' },
        { id: 'oci', col: 1, row: 2, k: 'q', t: '¿Cómo está el cuello?', s: 'Tacto vaginal' },
        { id: 'cer', col: 2, row: 0, k: 'mech', t: 'Cerrado', s: 'La cavidad no se está vaciando' },
        { id: 'abi', col: 2, row: 4, k: 'mech', t: 'Abierto', s: 'La cavidad se está vaciando' },
        { id: 'lcf', col: 3, row: 0, k: 'good', t: 'Embrión con latidos', s: 'Amenaza de aborto' },
        { id: 'sin', col: 3, row: 1, k: 'risk', t: 'Sin latidos, sin restos', s: 'Aborto retenido' },
        { id: 'vac', col: 3, row: 2, k: 'good', t: 'Cavidad vacía y fina', s: 'Aborto completo' },
        { id: 'res', col: 3, row: 4, k: 'risk', t: 'Con restos en la cavidad', s: 'Aborto incompleto' },
      ],
      edges: [
        { from: 'met', to: 'oci' },
        { from: 'oci', to: 'cer', label: 'cerrado' }, { from: 'oci', to: 'abi', label: 'abierto' },
        { from: 'cer', to: 'lcf' }, { from: 'cer', to: 'sin' }, { from: 'cer', to: 'vac' },
        { from: 'abi', to: 'res' },
      ],
      steps: [
        { show: ['met'], note: 'El síntoma es siempre el mismo',
          say: 'Toda esta clase parte del mismo síntoma: metrorragia en el primer trimestre, con o sin dolor cólico. Y como el síntoma no distingue nada, tu primer movimiento tiene que ser otro.' },
        { show: ['oci'], note: 'La pregunta que ordena todo',
          say: 'Con el tacto vaginal preguntas una sola cosa: ¿el orificio cervical interno está cerrado o abierto? Esa respuesta ya te divide el problema en dos mitades.' },
        { show: ['cer'], note: 'Cerrado no significa que todo esté bien',
          say: 'Si está cerrado, la cavidad no se está vaciando en este momento. Pero eso no basta: puede ser un embarazo que sigue, uno que ya murió, o uno que ya se vació por completo. Ahí es donde entra la ecografía.' },
        { show: ['lcf'], note: 'Amenaza de aborto',
          say: 'Si la ecografía muestra un embrión con latidos, es una amenaza de aborto: el embarazo sigue vivo.' },
        { show: ['sin'], note: 'Aborto retenido',
          say: 'Si el embrión no tiene latidos, o hay un saco sin ningún embrión adentro, y la cavidad no está vacía, es un aborto retenido: el embarazo ya murió, pero el cuerpo todavía no lo expulsó.' },
        { show: ['vac'], note: 'Aborto completo',
          say: 'Y si la cavidad está vacía, con un endometrio fino y regular, es un aborto completo: ya se expulsó todo, y el cuello volvió a cerrarse.' },
        { show: ['abi'], note: 'Abierto siempre significa que algo se está vaciando',
          say: 'Ahora, si el orificio está abierto, la cavidad se está vaciando en este momento, o ya perdió su contenido de forma incompleta.' },
        { show: ['res'], note: 'Aborto incompleto',
          say: 'Con restos ovulares todavía dentro del útero, es un aborto incompleto. Y si además hay fiebre y mal olor, guarda esa alarma, porque volvemos a ella enseguida.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo',
      title: 'Retenido e incompleto: médico o quirúrgico',
      cards: [
        { title: 'Manejo médico', tag: 'Menos de 12 semanas, estable', kind: 'pharma', items: [
          { t: 'Misoprostol, ochocientos microgramos', d: 'Vaginal o sublingual, dosis única',
            say: 'Para el aborto retenido o incompleto, si la paciente está estable y con menos de doce semanas, tu primera opción es el misoprostol: ochocientos microgramos, vaginal o sublingual, dosis única, repetible a las veinticuatro horas.' },
        ] },
        { title: 'Manejo quirúrgico', tag: 'AMEU sobre legrado', kind: 'key', items: [
          { t: 'AMEU: menos perforación', d: 'Y menos sinequias que el legrado',
            say: 'Si necesitas cirugía, la aspiración manual endouterina es mejor que el legrado con cureta: perfora menos y deja menos cicatrices dentro del útero.' },
        ] },
        { title: 'No lo olvides', tag: 'Rh negativo', kind: 'alert', items: [
          { t: 'Inmunoglobulina anti D', d: 'Dentro de las primeras setenta y dos horas',
            say: 'Y algo que se te puede escapar: si la paciente es Rh negativo y no está sensibilizada, le das inmunoglobulina anti D dentro de las primeras setenta y dos horas, sea cual sea el tipo de aborto.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Urgencia',
      title: 'Aborto séptico: se trata como cualquier absceso',
      nodes: [
        { id: 'fie', col: 0, row: 0, k: 'risk', t: 'Fiebre y flujo fétido', s: 'Útero blando y muy doloroso' },
        { id: 'atb', col: 1, row: 0, k: 'mech', t: 'Antibiótico triple, endovenoso', s: 'Ampicilina, gentamicina, metronidazol' },
        { id: 'hor', col: 2, row: 0, k: 'q', t: 'Dos a cuatro horas después', s: 'Con el antibiótico ya circulando' },
        { id: 'evac', col: 3, row: 0, k: 'good', t: 'Evacuación uterina', s: 'AMEU o legrado suave' },
        { id: 'hist', col: 3, row: 2, k: 'trap', t: 'Histerectomía', s: 'Solo si no responde o hay necrosis' },
      ],
      edges: [
        { from: 'fie', to: 'atb' }, { from: 'atb', to: 'hor' }, { from: 'hor', to: 'evac' },
        { from: 'evac', to: 'hist', label: 'si falla' },
      ],
      steps: [
        { show: ['fie'], note: 'Fiebre, flujo fétido, útero doloroso',
          say: 'El cuadro más grave de esta clase es el aborto séptico. Fiebre, flujo vaginal de olor fétido, y un útero blando y exquisitamente doloroso. Piensa en él como un absceso dentro del útero, y trátalo igual que cualquier absceso.' },
        { show: ['atb'], note: 'Nunca evacuar primero',
          say: 'Lo primero, siempre, es el antibiótico endovenoso de amplio espectro, triple asociación: ampicilina, gentamicina y metronidazol. Nunca evacúas antes de cubrir la infección.' },
        { show: ['hor'], note: 'Esperas a que el antibiótico esté circulando',
          say: 'Esperas de dos a cuatro horas, con el antibiótico ya circulando en la sangre.' },
        { show: ['evac'], note: 'Recién ahí sacas el foco',
          say: 'Y recién ahí evacúas el útero, con aspiración manual o un legrado suave. Evacuar antes, sin cobertura antibiótica, empuja bacterias a la sangre y puede desencadenar un shock séptico.' },
        { show: ['hist'], note: 'Última línea, no la primera',
          say: 'La histerectomía queda solo para cuando no responde, hay necrosis del útero, o el shock no cede. No es el primer paso: es el último.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Ley 21.030',
      title: 'Las tres causales que despenalizan el aborto en Chile',
      cards: [
        { title: 'Causal uno', tag: 'Riesgo vital', kind: 'key', items: [
          { t: 'Riesgo vital materno', d: 'Sin límite de semanas, sin comité',
            say: 'En Chile, la interrupción del embarazo está despenalizada en tres causales. La primera es el riesgo vital de la madre. No tiene límite de semanas, y no necesitas ningún comité: basta tu diagnóstico como médico tratante.' },
        ] },
        { title: 'Causal dos', tag: 'Inviabilidad fetal', kind: 'key', items: [
          { t: 'Patología fetal letal', d: 'Ratifica un segundo especialista',
            say: 'La segunda es la inviabilidad fetal letal, una patología incompatible con la vida fuera del útero. Aquí sí necesitas que un segundo ginecobstetra la confirme.' },
        ] },
        { title: 'Causal tres', tag: 'Violación', kind: 'alert', items: [
          { t: 'Doce semanas, o catorce si es menor', d: 'Y no exige denuncia previa',
            say: 'Y la tercera es la violación, con un plazo de doce semanas, o de catorce si la paciente tiene menos de catorce años. Fíjate en algo que se pregunta seguido: no se exige denuncia ni condena previa, solo la evaluación de un equipo psicosocial.' },
          { t: 'Objeción de conciencia', d: 'No aplica si el riesgo vital es inminente',
            say: 'El equipo puede objetar conciencia, pero no puede negarse si la paciente está en riesgo vital inmediato y no hay otro médico disponible.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos las cinco formas clínicas en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las cinco formas, lado a lado',
      head: ['Forma clínica', 'Cuello', 'Ecografía', 'Conducta'],
      rows: [
        { cells: ['Amenaza de aborto', 'Cerrado', 'Embrión con latidos', 'Reposo relativo, control'],
          say: 'Repasemos en la tabla. Amenaza de aborto: cuello cerrado, embrión con latidos. Reposo relativo y control.' },
        { cells: ['Aborto retenido', 'Cerrado', 'Sin latidos o saco sin embrión', 'Misoprostol o AMEU'],
          say: 'Aborto retenido: cuello cerrado, sin latidos, o un saco sin embrión adentro. Misoprostol o AMEU.' },
        { cells: ['Aborto completo', 'Cerrado', 'Cavidad vacía y fina', 'Observación'],
          say: 'Aborto completo: cuello ya cerrado, cavidad vacía. Solo observación.' },
        { cells: ['Aborto incompleto', 'Abierto', 'Restos dentro del útero', 'AMEU o misoprostol'],
          say: 'Aborto incompleto: cuello abierto, con restos dentro. AMEU o misoprostol.' },
        { cells: ['Aborto séptico', 'Generalmente abierto', 'Restos, fiebre y mal olor', 'Antibiótico antes de evacuar'],
          say: 'Y el séptico: cuello generalmente abierto, con fiebre y mal olor. Antibiótico primero, evacuación después. Ese orden es justo la trampa que más se repite.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 26 años, con 8 semanas por fecha de última regla, consulta por metrorragia escasa de 2 días y dolor cólico leve. Al tacto vaginal el orificio cervical interno está cerrado. La ecografía transvaginal muestra un embrión de 9 milímetros, sin latidos cardíacos visibles.',
      question: '¿Cuál es el diagnóstico y la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Amenaza de aborto; reposo relativo y control ambulatorio' },
        { letter: 'B', text: 'Aborto retenido; ofrecer misoprostol o AMEU' },
        { letter: 'C', text: 'Aborto incompleto; realizar AMEU de urgencia' },
        { letter: 'D', text: 'Embarazo ectópico; solicitar beta-hCG cuantitativa' },
        { letter: 'E', text: 'Aborto completo; solo observación' },
      ],
      correct: 'B',
      explanation: 'Embrión de 9 milímetros sin latidos, con cuello cerrado, cumple el criterio ecográfico de no viabilidad (7 milímetros o más sin actividad cardíaca): es un aborto retenido. Se ofrece misoprostol o AMEU, según la preferencia de la paciente.',
      say: {
        stem: 'Vamos al caso. Mujer de veintiséis años, con ocho semanas por fecha de última regla, consulta por metrorragia escasa de dos días y dolor cólico leve. El orificio cervical interno está cerrado, y la ecografía transvaginal muestra un embrión de nueve milímetros, sin latidos cardíacos visibles.',
        question: '¿Cuál es el diagnóstico y la conducta más adecuada?',
        options: 'Tus opciones: amenaza de aborto con reposo, aborto retenido con misoprostol o AMEU, aborto incompleto con AMEU de urgencia, embarazo ectópico con beta-hCG, o aborto completo con observación. Piénsalo.',
        answer: 'Es la B. El embrión mide nueve milímetros, por encima del corte de siete, y no tiene latidos: eso confirma la muerte embrionaria. Y como el cuello sigue cerrado, el cuerpo todavía no lo ha expulsado. Es un aborto retenido, y ahí ofreces misoprostol o AMEU, según lo que prefiera la paciente. No es incompleto, porque el cuello está cerrado; y no es ectópico, porque el saco está dentro del útero.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 97',
      stem: 'Paciente de 21 años consulta por fiebre hasta 38,9 grados, dolor hipogástrico intenso y sangrado vaginal de mal olor, iniciado hace 48 horas. Tiene frecuencia cardíaca de 120, presión arterial de 90/60 y temperatura de 38,7 grados. En la especuloscopía se observan sangre y restos ovulares de mal olor. El útero está muy doloroso a la palpación. La ecografía transvaginal muestra contenido uterino irregular de 18 milímetros.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar histerectomía' },
        { letter: 'B', text: 'Realizar laparoscopía exploradora' },
        { letter: 'C', text: 'Administrar antibióticos endovenosos y realizar evacuación uterina' },
        { letter: 'D', text: 'Administrar metotrexato' },
        { letter: 'E', text: 'Administrar misoprostol y conducir el trabajo de aborto' },
      ],
      correct: 'C',
      explanation: 'Fiebre, taquicardia, restos ovulares de mal olor y útero muy doloroso: aborto séptico con restos retenidos. Se cubre primero con antibióticos endovenosos de amplio espectro y luego se evacúa la cavidad con AMEU o legrado.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Paciente de veintiún años consulta por fiebre hasta treinta y ocho coma nueve, dolor hipogástrico intenso y sangrado de mal olor, de cuarenta y ocho horas. Tiene frecuencia cardíaca de ciento veinte y presión de noventa sobre sesenta. Se ven restos ovulares de mal olor, con el útero muy doloroso. La ecografía muestra contenido uterino irregular.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: histerectomía, laparoscopía exploradora, antibióticos endovenosos más evacuación uterina, metotrexato, o misoprostol para conducir el aborto. Piénsalo.',
        answer: 'Es la C. Fiebre, taquicardia, mal olor y útero muy doloroso, con restos retenidos: es un aborto séptico. Y el orden importa: primero antibióticos endovenosos de amplio espectro, y luego evacúas la cavidad. Ni la histerectomía ni la laparoscopía son el primer paso, y evacuar de entrada con misoprostol, sin cubrir la infección, es justo la trampa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 20',
      stem: 'Paciente de 32 años, cursando un embarazo de 6 semanas por amenorrea, consulta por metrorragia de un día de evolución, sin otros síntomas. En la especuloscopía se observa salida de sangre por el orificio cervical externo. La ecografía transvaginal muestra un saco gestacional colapsado a nivel del istmo. La subunidad beta de gonadotrofina coriónica resulta 5.500 unidades internacionales por litro.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Aborto retenido' },
        { letter: 'B', text: 'Amenaza de aborto' },
        { letter: 'C', text: 'Aborto incompleto' },
        { letter: 'D', text: 'Embarazo ectópico' },
        { letter: 'E', text: 'Mola hidatiforme' },
      ],
      correct: 'C',
      explanation: 'La visualización de un saco gestacional dentro del útero descarta el embarazo ectópico. Un saco colapsado, migrando hacia el cuello, con beta-hCG que ya no corresponde a un embarazo en curso, define el aborto incompleto.',
      say: {
        stem: 'Y una tercera pregunta real, del EUNACOM de julio de dos mil veinticuatro. Paciente de treinta y dos años, con seis semanas por amenorrea, consulta por metrorragia de un día. Se ve sangre saliendo del cuello. La ecografía muestra un saco gestacional colapsado, a la altura del istmo, y la beta-hCG resulta cinco mil quinientas.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: aborto retenido, amenaza de aborto, aborto incompleto, embarazo ectópico, o mola hidatiforme. Piénsalo.',
        answer: 'Es la C, aborto incompleto. El saco está dentro del útero, así que el ectópico queda descartado de inmediato. Y un saco colapsado, camino a salir por el cuello, es exactamente lo que ves cuando el aborto ya está en curso y todavía quedan restos por expulsar.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 118',
      stem: 'Paciente de 22 años, con un embarazo de 18 semanas, acude a urgencias solicitando la interrupción voluntaria del embarazo. No presenta ninguna de las tres causales legales vigentes en Chile.',
      question: '¿Cuál es la conducta médica correcta?',
      options: [
        { letter: 'A', text: 'Informar que la interrupción no procede legalmente y derivar a consejería' },
        { letter: 'B', text: 'Realizar la interrupción por solicitud de la paciente' },
        { letter: 'C', text: 'Derivar de urgencia a matrona' },
        { letter: 'D', text: 'Hospitalizar para observación' },
        { letter: 'E', text: 'Referir a comité de ética del hospital' },
      ],
      correct: 'A',
      explanation: 'La ley chilena solo permite la interrupción en las tres causales: riesgo vital, inviabilidad fetal letal y violación. Sin ninguna de ellas presente, no procede, y la conducta es informar, orientar y derivar a apoyo psicosocial.',
      say: {
        stem: 'Y para cerrar las preguntas reales, esta es del EUNACOM de julio de dos mil veinticinco, sobre la ley. Paciente de veintidós años, con un embarazo de dieciocho semanas, acude a urgencias solicitando la interrupción del embarazo, sin cumplir ninguna de las tres causales legales.',
        question: '¿Cuál es la conducta médica correcta?',
        options: 'Las opciones: informar que no procede y derivar a consejería, realizar la interrupción por su sola solicitud, derivar a matrona, hospitalizar para observación, o referir a un comité de ética. Piénsalo.',
        answer: 'Es la A. La ley chilena solo despenaliza tres causales, y ninguna está presente aquí. No procede la interrupción, y tu rol es informarle esto con claridad, orientarla, y derivarla a apoyo psicosocial. No hay comité que pueda autorizar una cuarta causal que la ley no contempla.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Dos preguntas', kind: 'key', items: [
          { t: 'Primero, mira el cuello', d: 'Cerrado o abierto',
            say: 'Cerremos con las reglas de oro. Frente a una metrorragia del primer trimestre, primero miras el cuello: cerrado o abierto.' },
          { t: 'Luego, la ecografía', d: 'Latidos, restos, o cavidad vacía',
            say: 'Y después la ecografía te dice si hay latidos, si hay restos, o si la cavidad está vacía. Con esas dos respuestas tienes el diagnóstico.' },
        ] },
        { title: 'Aborto séptico', tag: 'El orden importa', kind: 'alert', items: [
          { t: 'Antibiótico antes de evacuar', d: 'Nunca al revés',
            say: 'En el séptico, el antibiótico va siempre antes de evacuar. Invertir ese orden es la trampa más clásica del tema.' },
        ] },
        { title: 'Ley 21.030', tag: 'Tres causales', kind: 'normal', items: [
          { t: 'Riesgo vital, inviabilidad, violación', d: 'Nada más despenaliza el aborto en Chile',
            say: 'Y en la ley, solo tres causales despenalizan el aborto: riesgo vital, inviabilidad fetal letal, y violación. Si te llevas una sola idea de hoy: el cuello y la ecografía te dan el diagnóstico, y en el séptico, primero el antibiótico. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Metrorragia del primer trimestre: qué forma de aborto es',
    root: N('start', 'Metrorragia en el primer trimestre', 'Con o sin dolor cólico',
      'Paciente con sangrado en el primer trimestre. No memorices cinco cuadros por separado: el cuello y la ecografía te llevan directo al diagnóstico.',
      ['', N('q', '¿Cómo está el orificio cervical?', 'Esa es la primera pregunta',
        '¿El orificio cervical interno está cerrado o abierto al tacto?',
        ['Cerrado', N('q', '¿Qué muestra la ecografía?', 'Tres caminos posibles',
          'Con el cuello cerrado, la ecografía te separa en tres.',
          ['Embrión con latidos', N('ok', 'Amenaza de aborto', 'Reposo relativo, control',
            'El embarazo sigue viable: reposo relativo y control ambulatorio.')],
          ['Sin latidos, con contenido', N('do', 'Aborto retenido', 'Misoprostol u AMEU',
            'El embarazo ya no es viable, pero el cuerpo no lo ha expulsado: ofreces misoprostol o AMEU.')],
          ['Cavidad vacía y fina', N('ok', 'Aborto completo', 'Observación',
            'Ya se expulsó todo: solo observación.')])],
        ['Abierto', N('q', '¿Hay fiebre y mal olor?', 'La alarma que cambia todo',
          'Con el cuello abierto y restos dentro del útero, pregúntate si hay fiebre y flujo fétido.',
          ['NO', N('do', 'Aborto incompleto', 'AMEU o misoprostol',
            'Restos dentro del útero, sin infección: evacúas con AMEU o misoprostol.')],
          ['SÍ', N('alert', 'Aborto séptico', 'Antibiótico antes de evacuar',
            'Fiebre y mal olor con restos retenidos: antibiótico triple endovenoso primero, evacuación uterina después. La histerectomía queda solo si no responde.')])])]),
  },
};
