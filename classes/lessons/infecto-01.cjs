// Clase 1.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_infectologia.cjs (inf-01).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'infecto-01',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Reconocer la disfunción orgánica, separar sepsis de shock y actuar en la primera hora',
      say: 'Bienvenidos al primer bloque de infectología, el de las urgencias críticas: sepsis y las infecciones del sistema nervioso central. Partimos con sepsis y shock séptico, un tema que el examen evalúa en todas sus versiones. Todo se ordena con dos ideas: la sepsis se define por la disfunción de órganos, no por la fiebre, y el reloj manda, porque cada hora cuenta. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Definición',
      title: '¿Qué es la sepsis según Sepsis-3?',
      nodes: [
        { id: 'inf', col: 0, row: 1, k: 'cause', t: 'Infección', s: 'Sospechada o confirmada' },
        { id: 'hue', col: 1, row: 1, k: 'mech', t: 'Respuesta desregulada', s: 'El huésped se daña a sí mismo' },
        { id: 'dis', col: 2, row: 1, k: 'effect', t: 'Disfunción orgánica aguda', s: 'SOFA sube 2 o más puntos' },
        { id: 'sep', col: 3, row: 1, k: 'alert', t: 'Sepsis', s: 'Potencialmente mortal' },
        { id: 'sir', col: 1, row: 3, k: 'trap', t: 'SIRS', s: 'Abandonado por inespecífico' },
      ],
      edges: [
        { from: 'inf', to: 'hue' },
        { from: 'hue', to: 'dis' },
        { from: 'dis', to: 'sep' },
        { from: 'sir', to: 'sep', label: 'ya no define' },
      ],
      steps: [
        { show: ['inf'], note: 'Todo parte de una infección',
          say: 'Empecemos por la definición, porque de ella sale todo lo que se pregunta. El punto de partida es una infección, sospechada o confirmada: una neumonía, una infección urinaria, un foco abdominal.' },
        { show: ['hue'], note: 'El daño lo hace la respuesta del huésped',
          say: 'Pero lo que convierte esa infección en sepsis no es la bacteria en sí. Es la respuesta del huésped, que se desregula. El organismo, al defenderse, termina dañando sus propios tejidos.' },
        { show: ['dis'], note: 'Lo que define la sepsis es el órgano que falla',
          say: 'Y ese daño se expresa como disfunción orgánica aguda. Para medirla usamos el puntaje SOFA: si sube dos o más puntos respecto del basal del paciente, hay disfunción orgánica. Fíjate en la palabra basal: lo que importa es el cambio agudo, no el valor absoluto. Un paciente que ya tenía un órgano enfermo no cuenta como séptico por eso; cuenta si empeora con la infección.' },
        { show: ['sep'], note: 'Sepsis = infección + disfunción orgánica',
          say: 'Infección más disfunción orgánica: eso es la sepsis según el consenso Sepsis tres. Una disfunción orgánica potencialmente mortal causada por una respuesta desregulada del huésped a la infección. Esa frase vale la pena aprenderla tal cual.' },
        { show: ['sir'], note: 'Trampa: el SIRS ya no define la sepsis',
          say: 'Y ojo con la trampa. Antes la sepsis se definía con el síndrome de respuesta inflamatoria sistémica, el SIRS: fiebre, taquicardia, leucocitosis. Ese concepto se abandonó por inespecífico, porque cualquier resfrío con fiebre lo cumplía. Si una alternativa te habla de criterios SIRS para definir sepsis, desconfía.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'qSOFA y SOFA: la alarma y la confirmación',
      cards: [
        { title: 'qSOFA', tag: 'En la cabecera', kind: 'criteria', items: [
          { t: 'FR ≥ 22 rpm', d: 'Taquipnea',
            say: 'En la urgencia no tienes tiempo de calcular un SOFA completo. Por eso existe el qSOFA, el SOFA rápido, que tiene solo tres criterios clínicos. El primero: frecuencia respiratoria de veintidós o más por minuto.' },
          { t: 'Glasgow < 15', d: 'Cualquier alteración de conciencia',
            say: 'El segundo: cualquier alteración de conciencia, es decir, un Glasgow menor de quince.' },
          { t: 'PAS ≤ 100 mmHg', d: 'Presión sistólica baja',
            say: 'Y el tercero: presión sistólica de cien milímetros de mercurio o menos. Fíjate que ninguno requiere laboratorio: se evalúan en la cabecera del paciente en segundos. Respiración, cabeza y presión: tres cosas que ves y mides sin esperar ningún examen.' },
        ] },
        { title: 'Cómo se interpreta', tag: 'Dos de tres', kind: 'key', items: [
          { t: 'qSOFA ≥ 2: alto riesgo', d: 'Herramienta de alarma rápida',
            say: 'Dos o más de estos tres criterios identifican a un paciente con alto riesgo de muerte. El qSOFA es una alarma: te dice que mires con cuidado y que busques la disfunción orgánica.' },
          { t: 'SOFA ≥ 2 confirma', d: 'Aumento agudo sobre el basal',
            say: 'La confirmación la da el SOFA: sospecha de infección más un aumento agudo de dos o más puntos. El qSOFA alerta, el SOFA confirma.' },
        ] },
        { title: 'Lo que no es qSOFA', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: 'Fiebre, taquicardia, leucocitosis', d: 'Eran criterios SIRS',
            say: 'Y esto se pregunta directo. La temperatura, la frecuencia cardíaca y los leucocitos no forman parte del qSOFA. Eran criterios del antiguo SIRS. Si te preguntan qué parámetro pertenece al qSOFA, busca la respiración, la conciencia o la presión sistólica.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Shock séptico',
      title: 'Shock séptico: lo que persiste después del volumen',
      nodes: [
        { id: 'sep', col: 0, row: 1, k: 'start', t: 'Sepsis con hipotensión', s: 'O lactato elevado' },
        { id: 'vol', col: 1, row: 1, k: 'mech', t: 'Cristaloides 30 mL/kg', s: 'Resucitación adecuada' },
        { id: 'res', col: 2, row: 1, k: 'q', t: '¿Qué persiste?', s: 'Se evalúa tras el volumen' },
        { id: 'sns', col: 3, row: 0, k: 'good', t: 'PA se estabiliza', s: 'Sepsis sin shock' },
        { id: 'vas', col: 3, row: 2, k: 'alert', t: 'Vasopresor para PAM ≥ 65', s: 'Y lactato > 2 mmol/L' },
        { id: 'sho', col: 4, row: 2, k: 'risk', t: 'Shock séptico', s: 'Mortalidad > 40 %' },
      ],
      edges: [
        { from: 'sep', to: 'vol' },
        { from: 'vol', to: 'res' },
        { from: 'res', to: 'sns', label: 'responde' },
        { from: 'res', to: 'vas', label: 'no responde' },
        { from: 'vas', to: 'sho' },
      ],
      steps: [
        { show: ['sep'], note: 'El shock es un subgrupo de la sepsis',
          say: 'Ahora, el shock séptico. No es una enfermedad distinta: es un subgrupo de la sepsis, el más grave, donde además del órgano que falla hay un colapso circulatorio y celular profundo.' },
        { show: ['vol'], note: 'La definición exige resucitar primero',
          say: 'Y aquí está el detalle que el examen busca. El shock séptico solo se puede diagnosticar después de una resucitación adecuada con volumen: treinta mililitros por kilo de cristaloides. ¿Por qué? Porque antes de hablar de shock hay que demostrar que la hipotensión no era simplemente falta de volumen.' },
        { show: ['res'], note: 'La pregunta se hace después del volumen',
          say: 'Entonces, la pregunta es: después de ese volumen, ¿qué persiste?' },
        { show: ['sns'], note: 'Si responde, es sepsis, no shock',
          say: 'Si la presión se estabiliza con el volumen, el paciente tiene sepsis, pero no shock séptico.' },
        { show: ['vas'], note: 'Dos criterios, los dos a la vez',
          say: 'Si, a pesar del volumen, necesita vasopresores para mantener una presión arterial media de sesenta y cinco o más, y además el lactato sigue sobre dos milimoles por litro, eso es shock séptico. Son dos criterios y tienen que estar los dos al mismo tiempo. El vasopresor te dice que los vasos no responden; el lactato te dice que las células ya están sufriendo por falta de oxígeno.' },
        { show: ['sho'], note: 'De 10–15 % a más de 40 % de mortalidad',
          say: 'La diferencia importa porque cambia el pronóstico: la sepsis tiene una mortalidad cercana al diez a quince por ciento, y el shock séptico supera el cuarenta por ciento.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Paquete de la primera hora',
      title: 'Los primeros 60 minutos',
      cards: [
        { title: 'Medir y cultivar', tag: 'Sin retrasar el antibiótico', kind: 'criteria', items: [
          { t: 'Lactato sérico', d: 'Repetir a las 2–4 h si está alto',
            say: 'Pasemos a lo que tienes que hacer, y rápido, porque cada hora de demora en los antibióticos aumenta la mortalidad en un ocho por ciento. Lo primero es medir el lactato. Si está elevado, se vuelve a medir a las dos a cuatro horas.' },
          { t: 'Meta: bajar > 20 % en 2 h', d: 'Mide si la perfusión mejora',
            say: 'La meta es que baje más de un veinte por ciento en dos horas. El lactato es tu marcador de perfusión: si baja, la resucitación está funcionando.' },
          { t: '2 hemocultivos', d: 'Antes del antibiótico, sin demorarlo > 45 min',
            say: 'Luego, dos frascos de hemocultivos, antes del antibiótico. Pero con un límite: la toma de cultivos nunca puede retrasar el antibiótico más de cuarenta y cinco minutos.' },
        ] },
        { title: 'Tratar', tag: 'Dentro de la hora', kind: 'pharma', items: [
          { t: 'Antibióticos EV de amplio espectro', d: 'Dosis plenas, según foco probable',
            say: 'Después, antibióticos endovenosos de amplio espectro, en dosis plenas, elegidos según el foco probable. El antibiótico es lo que ataca la causa; todo lo demás es soporte. Y por eso la regla de los cuarenta y cinco minutos: cultivar es importante, pero nunca a costa de atrasar el antibiótico.' },
          { t: 'Cristaloides 30 mL/kg', d: 'Si hay hipotensión o lactato ≥ 4',
            say: 'Y cristaloides, Ringer lactato o solución fisiológica, a treinta mililitros por kilo en bolo rápido. Esto se indica si hay hipotensión o si el lactato es de cuatro o más. Fíjate cómo se conecta con la definición de shock: primero se da este volumen, y recién después se evalúa si el paciente respondió o no.' },
          { t: 'Noradrenalina precoz', d: 'Si no se logra PAM ≥ 65',
            say: 'Y si con el volumen no logras una presión arterial media de sesenta y cinco, no esperes: noradrenalina precoz. Ese es el paquete completo.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Escalamiento vasoactivo',
      title: 'Vasopresores: el orden que se pregunta',
      nodes: [
        { id: 'hip', col: 0, row: 1, k: 'start', t: 'PAM < 65 tras volumen', s: 'Shock séptico' },
        { id: 'nor', col: 1, row: 1, k: 'good', t: 'Noradrenalina EV', s: 'Primera línea · vía periférica posible' },
        { id: 'dop', col: 1, row: 3, k: 'trap', t: 'Dopamina', s: 'Proscrita: arritmias y mortalidad' },
        { id: 'ref', col: 2, row: 1, k: 'q', t: 'Refractario', s: 'Noradrenalina > 0,25 mcg/kg/min' },
        { id: 'vhc', col: 3, row: 1, k: 'alert', t: 'Vasopresina + hidrocortisona', s: '0,03 U/min · 200 mg/día EV' },
        { id: 'dob', col: 3, row: 3, k: 'refer', t: 'Dobutamina', s: 'Si falla de bomba: ScvO₂ < 70 %' },
      ],
      edges: [
        { from: 'hip', to: 'nor' },
        { from: 'hip', to: 'dop', label: 'nunca' },
        { from: 'nor', to: 'ref', label: 'dosis crecientes' },
        { from: 'ref', to: 'vhc', label: 'asociar' },
        { from: 'ref', to: 'dob', label: 'disfunción miocárdica' },
      ],
      steps: [
        { show: ['hip'], note: 'Shock séptico: el volumen no bastó',
          say: 'Veamos el escalamiento, porque el examen pregunta el orden. El paciente sigue con una presión arterial media bajo sesenta y cinco a pesar del volumen.' },
        { show: ['nor'], note: 'Noradrenalina: primera línea indiscutida',
          say: 'El vasopresor de primera línea es la noradrenalina endovenosa. Y un detalle práctico: se puede iniciar por una vía periférica mientras se instala el catéter venoso central. No se espera el catéter para partir.' },
        { show: ['dop'], note: 'Trampa: la dopamina',
          say: 'La trampa clásica es la dopamina. Está proscrita en el shock séptico porque produce más arritmias y se asocia a mayor mortalidad. Si aparece como primera opción, descártala. Es una de las alternativas incorrectas más repetidas del tema, justamente porque suena a fármaco de urgencia.' },
        { show: ['ref'], note: 'Refractario: dosis altas sin respuesta',
          say: 'Si la hipotensión persiste pese a dosis crecientes de noradrenalina, sobre cero coma veinticinco microgramos por kilo por minuto, hablamos de shock refractario.' },
        { show: ['vhc'], note: 'El corticoide es para el refractario',
          say: 'En ese momento se asocia vasopresina, a cero coma cero tres unidades por minuto, e hidrocortisona endovenosa, doscientos miligramos al día. Fíjate en el orden: el corticoide no va antes del vasopresor, va cuando la noradrenalina ya no alcanza.' },
        { show: ['dob'], note: 'Si el problema es la bomba',
          say: 'Y si además el corazón falla, es decir, la saturación venosa central sigue bajo setenta por ciento con una presión media adecuada, se agrega dobutamina, que mejora la contractilidad.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol de decisión, tal como lo vas a razonar frente al paciente y frente a la pregunta.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Sepsis, shock séptico o hipovolemia',
      head: ['Parámetro', 'Sepsis', 'Shock séptico', 'Hipovolemia'],
      rows: [
        { cells: ['Criterio', 'Infección + SOFA ≥ 2', 'PAM < 65 post fluidos + lactato > 2', 'Déficit intravascular puro'],
          say: 'Comparemos tres pacientes hipotensos, porque la diferencia se pregunta. La sepsis es infección más disfunción orgánica. El shock séptico es hipotensión que persiste después del volumen, con lactato alto. Y la hipovolemia es simplemente falta de volumen.' },
        { cells: ['Respuesta a 30 mL/kg', 'Estabiliza la PA', 'Refractario', 'Restaura PA y perfusión'],
          say: 'La clave está en la respuesta al volumen. La sepsis estabiliza la presión, al menos transitoriamente. El shock séptico es refractario. Y la hipovolemia se corrige por completo, porque el problema era solo de volumen.' },
        { cells: ['Vasopresor', 'No indicado', 'Noradrenalina, meta PAM ≥ 65', 'Contraindicado: requiere volumen'],
          say: 'Por eso el vasopresor solo tiene sentido en el shock séptico. En la hipovolemia está contraindicado: darle noradrenalina a un paciente vacío es un error, lo que necesita es volumen.' },
        { cells: ['Lactato', 'Normal o leve alza', '> 2 mmol/L post fluidos', 'Normaliza con volumen'],
          say: 'El lactato sigue la misma lógica. En el shock séptico queda sobre dos después del volumen; en la hipovolemia se normaliza cuando repones.' },
        { cells: ['Mortalidad', '10–15 %', '> 40 %', '< 5 % con reposición'],
          say: 'Y el pronóstico: diez a quince por ciento en la sepsis, más de cuarenta en el shock séptico, y menos de cinco por ciento en la hipovolemia bien repuesta.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 68 años con ITU complicada febril (39 °C), soporoso, PA 82/48 (PAM 59 mmHg), FC 122 lpm, FR 26 rpm. Se administran 2.500 mL de Ringer lactato (30 mL/kg) en 2 horas. Tras la carga, la PA es 84/50 mmHg (PAM 61 mmHg) y el lactato 4,2 mmol/L.',
      question: '¿Cuál es la conducta inmediata más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar noradrenalina EV con meta de PAM ≥ 65 mmHg' },
        { letter: 'B', text: 'Iniciar dopamina EV en infusión continua' },
        { letter: 'C', text: 'Administrar hidrocortisona EV antes de cualquier vasopresor' },
        { letter: 'D', text: 'Repetir otra carga de 2.500 mL de cristaloides' },
        { letter: 'E', text: 'Esperar el resultado de los hemocultivos para ajustar el tratamiento' },
      ],
      correct: 'A',
      explanation: 'Shock séptico de foco urinario: tras 30 mL/kg persiste PAM < 65 mmHg con lactato > 2 mmol/L. Se inicia noradrenalina EV (meta PAM ≥ 65), junto con hemocultivos y antibióticos de amplio espectro. La dopamina está proscrita y la hidrocortisona se reserva para el shock refractario a noradrenalina.',
      say: {
        stem: 'Vamos con un caso. Hombre de sesenta y ocho años con una infección urinaria complicada, fiebre de treinta y nueve grados, soporoso, presión de ochenta y dos sobre cuarenta y ocho, con una presión media de cincuenta y nueve, taquicárdico y taquipneico. Recibe dos mil quinientos mililitros de Ringer lactato, que son treinta mililitros por kilo. Después de la carga, la presión media es de sesenta y uno y el lactato, cuatro coma dos.',
        question: '¿Cuál es la conducta inmediata más adecuada?',
        options: 'Tienes cinco opciones: noradrenalina con meta de presión media de sesenta y cinco, dopamina, hidrocortisona antes del vasopresor, otra carga de volumen igual, o esperar los hemocultivos. Piénsalo.',
        answer: 'La respuesta es la A. Recibió el volumen completo y sigue con presión media bajo sesenta y cinco y lactato sobre dos: es un shock séptico, y la conducta es noradrenalina, junto con hemocultivos y antibióticos. La dopamina es la trampa más tentadora, pero está proscrita. La hidrocortisona queda para cuando la noradrenalina no alcanza. Y repetir volumen a ciegas solo produce edema pulmonar y mayor falla ventricular. El paciente ya demostró que el volumen no basta.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: '¿Cuál de los siguientes hallazgos clínicos forma parte del score qSOFA (quick SOFA) para la identificación rápida de sepsis en el servicio de urgencia?',
      question: '¿Qué parámetro pertenece al qSOFA?',
      options: [
        { letter: 'A', text: 'Temperatura axilar > 38,3 °C o < 36,0 °C' },
        { letter: 'B', text: 'Leucocitosis > 12.000/mm³ o baciliformes > 10 %' },
        { letter: 'C', text: 'Frecuencia respiratoria ≥ 22 respiraciones por minuto' },
        { letter: 'D', text: 'Frecuencia cardíaca > 90 latidos por minuto' },
        { letter: 'E', text: 'Diuresis horaria < 0,5 mL/kg/h' },
      ],
      correct: 'C',
      explanation: 'El qSOFA tiene solo tres parámetros clínicos, sin laboratorio: FR ≥ 22 rpm, alteración de conciencia (Glasgow < 15) y PAS ≤ 100 mmHg. Temperatura, taquicardia y leucocitosis eran criterios del antiguo SIRS, abandonado por inespecífico.',
      say: {
        stem: 'Ahora una pregunta del banco EUNACOM, un caso representativo de cómo se evalúa este tema. ¿Cuál de estos hallazgos forma parte del qSOFA para identificar rápidamente una sepsis en la urgencia?',
        question: '¿Qué parámetro pertenece al qSOFA?',
        options: 'Las opciones son: temperatura alta o baja, leucocitosis o baciliformes elevados, frecuencia respiratoria de veintidós o más, frecuencia cardíaca sobre noventa, o diuresis baja. Piénsalo.',
        answer: 'Es la C, la frecuencia respiratoria de veintidós o más. El qSOFA tiene solo tres elementos, respiración, conciencia y presión sistólica, y ninguno requiere laboratorio. La temperatura, la taquicardia y la leucocitosis son la trampa: eran criterios del antiguo SIRS, que se abandonó justamente por inespecífico.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Definir', tag: 'Sepsis-3', kind: 'key', items: [
          { t: 'Sepsis = infección + SOFA ≥ 2', d: 'El SIRS se abandonó',
            say: 'Cerremos con las reglas de oro. La sepsis es infección más disfunción orgánica, un aumento de dos o más puntos en el SOFA. El SIRS ya no define nada.' },
          { t: 'qSOFA: FR, conciencia, PAS', d: 'Dos de tres: alto riesgo',
            say: 'El qSOFA es la alarma en la cabecera: frecuencia respiratoria, conciencia y presión sistólica. Dos de tres, alto riesgo.' },
          { t: 'Shock = vasopresor + lactato > 2', d: 'Pese a 30 mL/kg de volumen',
            say: 'Y el shock séptico se diagnostica después del volumen: necesidad de vasopresor para una presión media de sesenta y cinco, más lactato sobre dos.' },
        ] },
        { title: 'Actuar', tag: 'Primera hora', kind: 'pharma', items: [
          { t: 'Lactato, 2 hemocultivos, ATB, volumen', d: 'Cada hora de retraso: +8 % mortalidad',
            say: 'En la primera hora: lactato, dos hemocultivos, antibióticos de amplio espectro y cristaloides a treinta mililitros por kilo.' },
          { t: 'Noradrenalina, nunca dopamina', d: 'Refractario: vasopresina + hidrocortisona',
            say: 'El vasopresor es la noradrenalina, nunca la dopamina. Si es refractario, vasopresina e hidrocortisona; si falla la bomba, dobutamina.' },
        ] },
        { title: 'Lo que viene', tag: 'Próxima clase', kind: 'alert', items: [
          { t: 'Fiebre + cefalea + rigidez de nuca', d: 'Meningitis: otra carrera contra el reloj',
            say: 'La próxima clase sigue en urgencias: la meningitis bacteriana, donde el antibiótico tampoco puede esperar. Si te llevas una sola idea de hoy: la sepsis se define por el órgano que falla, y el antibiótico va dentro de la primera hora. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Sepsis: de la sospecha al vasopresor',
    root: N('start', 'Sospecha de infección', 'Con signos de gravedad',
      'Paciente con una infección sospechada que se ve grave. La primera pregunta no es qué bacteria es, sino si hay disfunción orgánica.',
      ['', N('q', '¿qSOFA ≥ 2 o SOFA sube ≥ 2?', 'FR · conciencia · PAS',
        'Mira la frecuencia respiratoria, la conciencia y la presión sistólica. Dos de tres en el qSOFA, o un aumento agudo de dos puntos en el SOFA, te hacen pensar en sepsis.',
        ['NO', N('ok', 'Infección sin disfunción', 'Tratar el foco y reevaluar',
          'Si no hay disfunción orgánica, es una infección que se trata según su foco, con reevaluación, porque puede evolucionar.')],
        ['SÍ', N('do', 'Paquete de la primera hora', 'Lactato · 2 hemocultivos · ATB · 30 mL/kg',
          'Si la hay, es sepsis y empieza el reloj: lactato, dos hemocultivos, antibióticos endovenosos de amplio espectro, y cristaloides a treinta mililitros por kilo si hay hipotensión o lactato de cuatro o más.',
          ['', N('q', '¿PAM ≥ 65 tras el volumen?', 'Evaluar respuesta',
            'Después del volumen, la pregunta es si la presión arterial media llegó a sesenta y cinco.',
            ['SÍ', N('ok', 'Sepsis sin shock', 'Mantener soporte y desescalar',
              'Si responde, es sepsis sin shock. Se ajustan los fluidos según la diuresis, que debe ser mayor de medio mililitro por kilo por hora, y se desescala el antibiótico según el cultivo. Por eso los hemocultivos iban antes del antibiótico: son los que te permiten, después, estrechar el espectro.')],
            ['NO', N('alert', 'Shock séptico: noradrenalina', 'Meta PAM ≥ 65 · nunca dopamina',
              'Si no responde y el lactato está sobre dos, es shock séptico: noradrenalina precoz, incluso por vía periférica. La dopamina no es opción.',
              ['Refractario', N('refer', 'Vasopresina + hidrocortisona', 'Dobutamina si falla la bomba',
                'Si la noradrenalina a dosis altas no alcanza, se asocian vasopresina e hidrocortisona, y dobutamina si hay disfunción miocárdica. Este paciente se maneja en cuidados intensivos, y se deriva apenas lo estabilizas.')])])])])]),
  },
};
