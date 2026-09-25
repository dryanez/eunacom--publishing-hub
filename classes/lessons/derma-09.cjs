// Clase 16.9 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_dermatologia.cjs (derma-09).
// Nota: el código de la clase (6.01.2.004) no devuelve preguntas reales de confianza suficiente;
// se usó --search para encontrar las preguntas reales que sí enseñan este tema.
// Preguntas reales EUNACOM: node classes/scripts/class_questions.cjs --search "Stevens-Johnson|necrólisis epidérmica|Nikolsky|síndrome de Lyell|SCORTEN"
// -> EUNACOM Julio 2024 · Pregunta 94 (código 6.01.2.013, confianza 0.85)
// -> EUNACOM Julio 2016 · Pregunta 48 (código 6.01.2.013, confianza 0.9)

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'derma-09',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'El gran quemado médico: cuándo sospechar Stevens-Johnson y necrólisis epidérmica tóxica, y qué decide el pronóstico',
      say: 'Bienvenidos. Ya vimos la urticaria, la reacción alérgica más común a fármacos. Hoy subimos al otro extremo del espectro: el Síndrome de Stevens-Johnson y la necrólisis epidérmica tóxica, las dos reacciones medicamentosas más graves que existen, con una piel que se comporta literalmente como la de un gran quemado. La idea central de hoy es una sola pregunta cuantitativa que decide todo: qué porcentaje de la piel se desprende. Partamos por el mecanismo.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Del fármaco a la apoptosis masiva de la epidermis',
      nodes: [
        { id: 'far', col: 0, row: 0, k: 'cause', t: 'Fármaco de alto riesgo', s: 'Sulfas, alopurinol, anticonvulsivantes' },
        { id: 'lat', col: 0, row: 1, k: 'cause', t: 'Latencia de 1 a 4 semanas', s: 'Nunca a las pocas horas' },
        { id: 'hla', col: 1, row: 0, k: 'mech', t: 'HLA reconoce al fármaco', s: 'Predisposición genética específica' },
        { id: 'cd8', col: 1, row: 1, k: 'mech', t: 'Linfocitos T CD8 clonales', s: 'Se activan contra el queratinocito' },
        { id: 'gra', col: 2, row: 0, k: 'effect', t: 'Granulisina masiva', s: 'La principal toxina apoptótica' },
        { id: 'apo', col: 2, row: 1, k: 'effect', t: 'Apoptosis de toda la epidermis', s: 'Muerte celular programada' },
        { id: 'gq', col: 3, row: 1, k: 'risk', t: 'Piel de gran quemado médico', s: 'Pérdida total de la barrera' },
      ],
      edges: [
        { from: 'far', to: 'hla' }, { from: 'lat', to: 'hla', label: 'tras ese plazo' },
        { from: 'hla', to: 'cd8' }, { from: 'cd8', to: 'gra' },
        { from: 'gra', to: 'apo' }, { from: 'apo', to: 'gq' },
      ],
      steps: [
        { show: ['far'], note: 'Acrónimo de examen: S-A-P-O-C',
          say: 'Empecemos por el fármaco. Un acrónimo te sirve para el examen: sulfonamidas como el cotrimoxazol, alopurinol, anticonvulsivantes aromáticos como la carbamazepina o la fenitoína, oxicams como el piroxicam, y cefalosporinas o penicilinas. Esos son los cinco grupos de mayor riesgo.' },
        { show: ['lat'], note: 'La latencia es un dato que se pregunta directo',
          say: 'Y un dato que se pregunta directo: el cuadro no aparece a las pocas horas de la primera dosis, ni tampoco después de años de un tratamiento crónico sin cambios. Aparece con una latencia típica de una a cuatro semanas tras iniciar el fármaco culpable.' },
        { show: ['hla', 'cd8'], note: 'No es alergia inmediata: es inmunidad celular',
          say: 'El mecanismo no es una alergia inmediata mediada por inmunoglobulina E, como en la urticaria. Aquí un sistema HLA específico del paciente reconoce el fármaco como si fuera un péptido extraño, y eso activa clones de linfocitos T citotóxicos CD ocho contra los propios queratinocitos de la piel.' },
        { show: ['gra', 'apo'], note: 'Granulisina: la toxina que explica la extensión',
          say: 'Esos linfocitos liberan granulisina, junto con perforina y granzima B. La granulisina es la principal responsable, porque desencadena apoptosis masiva y simultánea de todo el espesor de la epidermis, no célula por célula, sino en bloque.' },
        { show: ['gq'], note: 'De aquí viene el manejo en centro de quemados',
          say: 'Y ahí está la clave que explica todo el manejo que viene: cuando la epidermis muere en bloque, la piel pierde su función de barrera igual que en una quemadura extensa. Por eso a este paciente se le trata, literalmente, como a un gran quemado médico.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Clínica',
      title: 'Del pródromo al signo de Nikolsky',
      nodes: [
        { id: 'pro', col: 0, row: 0, k: 'cause', t: 'Pródromo pseudogripal', s: 'Fiebre alta y ardor ocular, 1 a 3 días antes' },
        { id: 'dia', col: 1, row: 0, k: 'mech', t: 'Dianas atípicas', s: 'Solo 2 anillos, dolor desproporcionado' },
        { id: 'fli', col: 2, row: 0, k: 'effect', t: 'Flictenas flácidas', s: 'Se rompen con facilidad' },
        { id: 'nik', col: 3, row: 0, k: 'alert', t: 'Signo de Nikolsky positivo', s: 'La epidermis se desprende en sábana' },
        { id: 'muc', col: 2, row: 1, k: 'risk', t: 'Mucosas en más del 90%', s: 'Oral, ocular, urogenital' },
      ],
      edges: [
        { from: 'pro', to: 'dia' }, { from: 'dia', to: 'fli' }, { from: 'fli', to: 'nik' }, { from: 'fli', to: 'muc' },
      ],
      steps: [
        { show: ['pro'], note: 'El pródromo antecede a las lesiones',
          say: 'Uno a tres días antes de las lesiones, el paciente hace un cuadro pseudogripal: fiebre sobre treinta y ocho y medio, malestar general, dolor faríngeo y un ardor ocular que ya anuncia el compromiso de mucosas que viene.' },
        { show: ['dia'], note: 'Diana atípica: solo 2 anillos, no 3',
          say: 'Después aparecen las lesiones cutáneas, y aquí hay un detalle fino que se pregunta: son dianas atípicas, con solo dos anillos concéntricos y un centro purpúrico o ampollar, a diferencia de la diana clásica de tres anillos del eritema multiforme, que vemos en la próxima clase. Y el dolor cutáneo es intenso, desproporcionado para lo que se ve al examinar.' },
        { show: ['fli'], note: 'Ampollas flácidas que confluyen',
          say: 'Esas lesiones confluyen y forman grandes ampollas flácidas, que se rompen con facilidad y dejan la dermis roja y denudada, con aspecto de escaldadura térmica.' },
        { show: ['nik'], note: 'La maniobra que confirma el diagnóstico al examen físico',
          say: 'Y aquí está el signo que más se pregunta: el signo de Nikolsky. Al deslizar el dedo con una fricción suave sobre piel eritematosa que parece intacta, la epidermis se despega en sábana y deja la dermis húmeda al descubierto. Existe también el signo de Asboe-Hansen: al comprimir el centro de una ampolla intacta, el líquido se extiende hacia los lados.' },
        { show: ['muc'], note: 'El riesgo ocular es el que deja secuela',
          say: 'Y en más del noventa por ciento de los casos hay compromiso severo de al menos dos mucosas: la oral, con costras hemáticas gruesas en los labios; la ocular, con riesgo de simbléfaron y ceguera; y la urogenital. Por eso la interconsulta oftalmológica es urgente, desde el primer día.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clasificación',
      title: 'La pregunta que decide todo: cuánta piel se desprendió',
      cards: [
        { title: 'Síndrome de Stevens-Johnson', tag: 'Menos del 10 por ciento', kind: 'criteria', items: [
          { t: 'Desprendimiento menor al 10% de la BSA', d: 'Con compromiso grave de 2 o más mucosas',
            say: 'La distinción entre estos cuadros no depende de la gravedad clínica que impresiona al ojo: es estrictamente cuantitativa, según el porcentaje de superficie corporal total con desprendimiento franco. Si es menos del diez por ciento, con compromiso de dos o más mucosas, hablamos de Síndrome de Stevens-Johnson.' },
        ] },
        { title: 'Superposición SSJ / NET', tag: 'Entre el 10 y el 30 por ciento', kind: 'alert', items: [
          { t: 'Zona intermedia de gravedad', d: 'Mortalidad entre 10 y 15 por ciento',
            say: 'Entre el diez y el treinta por ciento de desprendimiento, se llama síndrome de superposición, y ya tiene una mortalidad relevante, entre diez y quince por ciento.' },
        ] },
        { title: 'Necrólisis Epidérmica Tóxica', tag: 'Más del 30 por ciento', kind: 'alert', items: [
          { t: 'Puede llegar al 70 u 80% de la piel', d: 'Mortalidad de 30 a 50 por ciento',
            say: 'Y sobre el treinta por ciento, es Necrólisis Epidérmica Tóxica, o síndrome de Lyell, que puede llegar a comprometer hasta el ochenta por ciento de toda la piel, con una mortalidad de treinta a cincuenta por ciento por sepsis y shock. Guarda este corte: menos de diez, Stevens-Johnson; más de treinta, NET.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Pronóstico',
      title: 'Escala SCORTEN: 7 variables, evaluadas en las primeras 48 horas',
      cards: [
        { title: 'Variables clínicas', tag: '1 punto cada una', kind: 'criteria', items: [
          { t: 'Edad de 40 años o más', d: 'Menor capacidad de regeneración epitelial',
            say: 'El SCORTEN suma un punto por cada una de siete variables, evaluadas dentro de las primeras cuarenta y ocho horas. Las variables clínicas son: edad de cuarenta años o más.' },
          { t: 'Frecuencia cardíaca de 120 o más', d: 'Respuesta hiperadrenérgica al shock',
            say: 'Frecuencia cardíaca de ciento veinte latidos por minuto o más.' },
          { t: 'Cáncer activo', d: 'Inmunosupresión y caquexia de base',
            say: 'Y la presencia de un cáncer o neoplasia hematológica activa.' },
        ] },
        { title: 'Variables de laboratorio', tag: 'Reflejan la falla de barrera', kind: 'criteria', items: [
          { t: 'Nitrógeno ureico mayor a 28', d: 'Hipovolemia prerrenal por pérdida masiva',
            say: 'En el laboratorio: nitrógeno ureico en sangre sobre veintiocho, o urea sobre sesenta.' },
          { t: 'Bicarbonato menor a 20', d: 'Acidosis metabólica por hipoperfusión',
            say: 'Bicarbonato sérico bajo veinte.' },
          { t: 'Glicemia mayor a 252', d: 'Estrés metabólico extremo',
            say: 'Y glicemia en ayunas sobre doscientos cincuenta y dos. La séptima variable, que ya vimos, es la extensión inicial desprendida sobre el diez por ciento.' },
        ] },
        { title: 'Lo que predice', tag: 'A más puntos, más mortalidad', kind: 'alert', items: [
          { t: 'Cero a un punto: tres por ciento', d: 'Cinco puntos o más: sobre noventa por ciento',
            say: 'Y el gradiente es brutal: con cero o un punto, la mortalidad esperada es de solo tres por ciento. Con cinco puntos o más, supera el noventa por ciento. Por eso el SCORTEN se calcula siempre, apenas ingresa el paciente.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Como en un gran quemado: retiro del fármaco y soporte crítico',
      cards: [
        { title: 'La medida que más salva', tag: 'Retiro inmediato', kind: 'key', items: [
          { t: 'Suspender el fármaco sospechoso, ya', d: 'Sin esperar exámenes confirmatorios',
            say: 'Pasemos al tratamiento. La medida con mayor impacto en la sobrevida es suspender de inmediato todo fármaco introducido en las últimas ocho semanas, sin esperar ningún examen confirmatorio. Mientras más corta la vida media del fármaco y más precoz el retiro, menor la mortalidad.' },
        ] },
        { title: 'Soporte en UCI o Centro de Quemados', tag: 'Como en una quemadura extensa', kind: 'alert', items: [
          { t: 'Fluidoterapia agresiva y ambiente térmico', d: 'Sala a treinta a treinta y dos grados',
            say: 'El paciente se hospitaliza en Unidad de Cuidados Intensivos o en un Centro de Gran Quemado, con fluidoterapia intravenosa agresiva y una sala térmica calefaccionada entre treinta y treinta y dos grados, porque pierde calor de forma masiva por la piel denudada.' },
          { t: 'Nunca desbridar quirúrgicamente', d: 'La piel desprendida es un apósito biológico',
            say: 'Y ojo con la trampa más clásica del manejo: a diferencia de una quemadura térmica profunda, aquí nunca se desbrida quirúrgicamente la epidermis necrótica. Esa piel actúa como un apósito biológico natural que protege la dermis mientras reepiteliza.' },
        ] },
        { title: 'Interconsulta oftalmológica urgente', tag: 'Desde el primer día', kind: 'normal', items: [
          { t: 'Lágrimas artificiales y lisis de sinequias', d: 'Para evitar simbléfaron y ceguera',
            say: 'Y la evaluación por oftalmología no se puede diferir: aseo ocular continuo, lágrimas artificiales sin conservantes, y desbridamiento manual diario de las sinequias que empiezan a formarse, para evitar el simbléfaron y la ceguera.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol de decisión completo, desde la sospecha inicial hasta el destino de hospitalización.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Desprendimiento menor a 10% con 2 mucosas', 'Suspender el fármaco y hospitalizar', 'Tratar como una alergia leve con antihistamínico'],
          say: 'Repasemos las trampas que más se repiten. Con menos del diez por ciento de desprendimiento y dos mucosas comprometidas, la conducta es suspender el fármaco y hospitalizar. El error es tratarlo como una alergia leve con solo un antihistamínico.' },
        { cells: ['Desprendimiento mayor a 30%', 'Traslado inmediato a Centro de Quemados', 'Manejarlo en una sala común sin control térmico'],
          say: 'Con más del treinta por ciento, es NET, y el traslado a un Centro de Quemados es inmediato. El error es dejarlo en una sala común, sin el control térmico que necesita.' },
        { cells: ['Ampollas rotas y piel desprendida', 'Cubrir con gasas no adherentes', 'Desbridar quirúrgicamente en pabellón'],
          say: 'Frente a la piel desprendida, se cubre con gasas no adherentes o apósitos de plata. El error grave es desbridar quirúrgicamente, como si fuera una quemadura de tercer grado.' },
        { cells: ['Bicarbonato de 16 mEq/L al ingreso', 'Suma 1 punto de SCORTEN', 'Ignorar el laboratorio en el pronóstico'],
          say: 'Un bicarbonato de dieciséis suma un punto en el SCORTEN, porque el corte es bajo veinte. El error es mirar solo la piel y olvidar que el laboratorio también define el pronóstico.' },
        { cells: ['Diana de 2 anillos y desprendimiento cutáneo', 'Pensar en SSJ o NET', 'Confundirlo con eritema multiforme'],
          say: 'Y la última, que conecta con la próxima clase: una diana de solo dos anillos, con dolor intenso y desprendimiento, es SSJ o NET, no eritema multiforme. El eritema multiforme tiene tres anillos y nunca despega la piel.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 45 años, con antecedente de crisis de gota, inició cotrimoxazol hace 12 días por una infección urinaria. Consulta por 3 días de fiebre de 38,8 °C, dolor faríngeo y ardor ocular, a lo que se agrega hoy una erupción dolorosa con máculas purpúricas de 2 anillos en tronco y algunas flictenas. Al examen presenta desprendimiento epidérmico estimado en 6% de la superficie corporal, úlceras orales con costras hemáticas y conjuntivitis bilateral. Al frotar suavemente la piel eritematosa perilesional, la epidermis se desprende con facilidad.',
      question: '¿Cuál es el diagnóstico y la conducta inmediata más adecuada?',
      options: [
        { letter: 'A', text: 'Urticaria aguda; iniciar antihistamínico H1 de segunda generación' },
        { letter: 'B', text: 'Eritema multiforme major; observación ambulatoria con antivirales' },
        { letter: 'C', text: 'Síndrome de Stevens-Johnson; suspender el cotrimoxazol y hospitalizar' },
        { letter: 'D', text: 'Necrólisis epidérmica tóxica; traslado a Centro de Quemados' },
        { letter: 'E', text: 'Penfigoide ampollar; iniciar clobetasol tópico de alta potencia' },
      ],
      correct: 'C',
      explanation: 'Latencia de 12 días con cotrimoxazol, pródromo pseudogripal, dianas atípicas de 2 anillos, Nikolsky positivo, desprendimiento del 6% de la BSA y compromiso de 2 mucosas: Síndrome de Stevens-Johnson. La conducta inmediata es suspender el fármaco y hospitalizar. NET requeriría más del 30%; el eritema multiforme no despega la piel; el penfigoide es Nikolsky negativo y en ancianos.',
      say: {
        stem: 'Vamos con un caso. Mujer de cuarenta y cinco años, con antecedente de gota, que inició cotrimoxazol hace doce días. Consulta por tres días de fiebre, dolor faríngeo y ardor ocular, a lo que se agrega hoy una erupción dolorosa con máculas purpúricas de dos anillos y algunas flictenas. Tiene desprendimiento del seis por ciento de la piel, úlceras orales con costras hemáticas y conjuntivitis bilateral. Al frotar suavemente la piel eritematosa cercana, la epidermis se desprende con facilidad.',
        question: '¿Cuál es el diagnóstico y la conducta inmediata más adecuada?',
        options: 'Las opciones: urticaria aguda con antihistamínico, eritema multiforme major en observación, Síndrome de Stevens-Johnson con suspensión del fármaco y hospitalización, necrólisis epidérmica tóxica con traslado a quemados, o penfigoide ampollar con clobetasol tópico. Piénsalo.',
        answer: 'Es la C. Doce días de latencia con cotrimoxazol, pródromo pseudogripal, dianas atípicas, Nikolsky positivo, seis por ciento de desprendimiento y dos mucosas comprometidas: eso es Stevens-Johnson, no NET, porque el corte de NET es sobre treinta por ciento. El eritema multiforme no tiene Nikolsky positivo ni desprendimiento. Y el penfigoide es Nikolsky negativo, en un paciente mucho mayor, sin este pródromo febril.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 94',
      stem: 'Un paciente de 29 años, tratado con amoxicilina por amigdalitis pultácea diagnosticada hace 14 días, presenta desde hace 3 días ardor en los ojos, lesiones en la boca, malestar general y aparición de un rash cutáneo. Al examen físico se aprecia eritema conjuntival bilateral, úlceras orales y un exantema con pápulas y placas eritematosas en tronco y extremidades.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Síndrome de Stevens-Johnson' },
        { letter: 'B', text: 'Gingivoestomatitis herpética' },
        { letter: 'C', text: 'Necrólisis epidérmica tóxica' },
        { letter: 'D', text: 'Pénfigo' },
        { letter: 'E', text: 'Escarlatina' },
      ],
      correct: 'A',
      explanation: 'Compromiso de mucosas oral y ocular, exantema con pápulas y placas, y latencia de 14 días con un fármaco de riesgo como la amoxicilina: Síndrome de Stevens-Johnson. La gingivoestomatitis herpética no explica el compromiso ocular ni el exantema del tronco.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticuatro. Un paciente de veintinueve años, tratado con amoxicilina por una amigdalitis desde hace catorce días, presenta desde hace tres días ardor ocular, lesiones en la boca, malestar general y un rash cutáneo. Al examen tiene eritema conjuntival bilateral, úlceras orales, y un exantema con pápulas y placas eritematosas en el tronco y las extremidades.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: Síndrome de Stevens-Johnson, gingivoestomatitis herpética, necrólisis epidérmica tóxica, pénfigo, o escarlatina.',
        answer: 'Es la A, Síndrome de Stevens-Johnson. Catorce días de latencia con un fármaco de riesgo, compromiso de dos mucosas y un exantema que ya vimos que corresponde al patrón típico. La gingivoestomatitis herpética no da compromiso ocular ni exantema en el tronco. Y para hablar de necrólisis epidérmica tóxica necesitaríamos un desprendimiento mucho mayor, que el enunciado no describe.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 48',
      stem: 'Una paciente de 26 años, se realiza una colecistectomía laparoscópica hace 2 semanas. Inicialmente evoluciona bien, pero hace 12 horas presenta un cuadro de fiebre y dolor cutáneo generalizado, con eritema generalizado de la piel y compromiso de las mucosas. Hace algunas horas comienza con aparición de ampollas generalizadas.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Psoriasis eritrodérmica' },
        { letter: 'B', text: 'Escarlatina quirúrgica' },
        { letter: 'C', text: 'Pustulosis exantemática' },
        { letter: 'D', text: 'Necrólisis epidérmica tóxica' },
        { letter: 'E', text: 'Pénfigo' },
      ],
      correct: 'D',
      explanation: 'Latencia de 2 semanas tras una cirugía (con fármacos perioperatorios, típicamente betalactámicos), dolor cutáneo desproporcionado, eritema generalizado, compromiso de mucosas y ampollas generalizadas con desprendimiento: Necrólisis Epidérmica Tóxica.',
      say: {
        stem: 'Una segunda pregunta real, del EUNACOM de julio de dos mil dieciséis. Una paciente de veintiséis años se realiza una colecistectomía laparoscópica hace dos semanas. Evoluciona bien al principio, pero hace doce horas presenta fiebre y dolor cutáneo generalizado, con eritema de toda la piel y compromiso de las mucosas. Hace algunas horas empiezan a aparecer ampollas generalizadas.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: psoriasis eritrodérmica, escarlatina quirúrgica, pustulosis exantemática, necrólisis epidérmica tóxica, o pénfigo.',
        answer: 'Es la D, Necrólisis Epidérmica Tóxica. La cirugía es la pista de los fármacos: antibióticos perioperatorios, con una latencia de dos semanas. El dolor cutáneo desproporcionado, el eritema generalizado, el compromiso de mucosas y las ampollas que se generalizan describen exactamente el cuadro que vimos hoy. El pénfigo da ampollas flácidas también, pero sin este pródromo febril agudo ni esta latencia farmacológica tan característica.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'El corte que lo decide todo', tag: 'Porcentaje de piel desprendida', kind: 'key', items: [
          { t: 'Menos de 10%: Stevens-Johnson', d: 'Más de 30%: Necrólisis Epidérmica Tóxica',
            say: 'Cerremos con las reglas de oro. El corte que decide todo es el porcentaje de superficie corporal desprendida: menos de diez por ciento, Stevens-Johnson; más de treinta, necrólisis epidérmica tóxica.' },
        ] },
        { title: 'El signo que confirma', tag: 'Nikolsky positivo', kind: 'alert', items: [
          { t: 'La epidermis se desprende con fricción suave', d: 'Negativo en eritema multiforme y penfigoide',
            say: 'El signo de Nikolsky positivo confirma el diagnóstico al examen físico. Si es negativo, piensa en eritema multiforme o en penfigoide, que vemos más adelante.' },
        ] },
        { title: 'Lo que salva la vida', tag: 'Retiro inmediato del fármaco', kind: 'pharma', items: [
          { t: 'Suspender ya, sin esperar exámenes', d: 'Manejo en UCI o Centro de Quemados, nunca desbridar',
            say: 'Y lo que más salva la vida es suspender el fármaco de inmediato, sin esperar exámenes, y trasladar a un centro con capacidad de manejar a un gran quemado médico. Si te llevas una sola idea de hoy: mide el desprendimiento, confirma con Nikolsky, y suspende el fármaco ya. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'SSJ y NET: de la sospecha al destino de hospitalización',
    root: N(
      'start', 'Paciente con fiebre, dolor cutáneo y dianas atípicas tras un fármaco', 'Primero confirma el signo de Nikolsky',
      'Frente a un paciente con este cuadro, el primer paso al examen físico es buscar el signo de Nikolsky sobre piel eritematosa perilesional.',
      ['', N(
        'q', '¿El signo de Nikolsky es positivo?', 'Fricción suave sobre piel eritematosa',
        'El desprendimiento de la epidermis con la fricción suave confirma que hay necrosis epidérmica en curso.',
        ['No, o dudoso', N(
          'refer', 'Reevaluar el diagnóstico', 'Pensar en eritema multiforme o urticaria',
          'Sin Nikolsky, hay que reconsiderar: una diana de tres anillos sin desprendimiento sugiere eritema multiforme; un habón evanescente, urticaria.',
        )],
        ['Sí, positivo', N(
          'q', '¿Qué porcentaje de superficie corporal está desprendida?', 'Regla de los nueve de Wallace',
          'Confirmado el Nikolsky, la superficie desprendida clasifica la gravedad y define el destino de hospitalización.',
          ['Menos del 10%', N(
            'do', 'Síndrome de Stevens-Johnson', 'Suspender el fármaco y hospitalizar',
            'Con menos del diez por ciento de desprendimiento y compromiso de mucosas, es Stevens-Johnson: suspensión inmediata del fármaco y hospitalización con manejo de soporte.',
          )],
          ['Entre 10% y 30%', N(
            'refer', 'Síndrome de superposición SSJ / NET', 'UCI, seguimiento estricto de la extensión',
            'La zona intermedia tiene mortalidad relevante, entre diez y quince por ciento, y requiere Unidad de Cuidados Intensivos con reevaluación seriada de la extensión.',
          )],
          ['Más del 30%', N(
            'alert', 'Necrólisis Epidérmica Tóxica', 'Traslado inmediato a Centro de Quemados',
            'Sobre el treinta por ciento es NET: traslado inmediato a un Centro de Gran Quemado, con fluidoterapia agresiva, control térmico y protección ocular urgente.',
          )],
        )],
      )],
    ),
  },
};
