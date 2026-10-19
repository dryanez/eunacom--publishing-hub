// Clase 12.7 (Traumatología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_traumatologia.cjs (trauma-07). Preguntas: banco real EUNACOM (class_questions.cjs --search).
// El libro nombra "reglas de Ottawa" solo en el campo GES; el texto principal enseña los puntos de palpación (maléolos, base del quinto
// metatarsiano, cabeza del peroné) y la imposibilidad de apoyar, que es lo que se resume aquí como criterio para pedir radiografía.
// Síndrome compartimental (trauma-03) y fracturas expuestas (trauma-02) se mencionan solo como enlace. Esguince (grados) queda en trauma-09.
// Los textos genéricos del libro sobre luxación glenohumeral / Colles / escafoides y las tablas plantilla no se usan.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'trauma-07',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Fracturas de pierna y tobillo: cuándo sospechar, cuándo pedir radiografía y qué se hace',
      say: 'Bienvenido. Hoy vemos las fracturas de extremidad inferior que más caen en el examen: fémur, pierna y, sobre todo, tobillo. Hay una regla simple que ordena casi todo: estas fracturas son quirúrgicas. Y hay una trampa clásica: confundir una fractura de tobillo con un esguince. Vamos a aprender a distinguirlas, a decidir cuándo pedir radiografía y qué hacer mientras llega la cirugía.',
    },

    {
      type: 'points',
      kicker: 'Concepto',
      title: 'Cómo sospechar una fractura',
      cards: [
        { title: 'Clínica común', tag: 'Cualquier hueso', kind: 'key', items: [
          { t: 'Dolor intenso e impotencia funcional', d: 'No puede apoyar ni caminar',
            say: 'Sea cual sea el hueso, la fractura de extremidad inferior da un dolor intenso de inicio súbito, justo después del golpe, y una impotencia funcional: el paciente no puede apoyar ni caminar.' },
          { t: 'Deformidad y crepitación', d: 'Eje desviado, ruido óseo al mover',
            say: 'Además puedes ver deformidad, con desviación del eje de la extremidad, y sentir crepitación ósea al mover o palpar.' },
          { t: 'Equimosis y aumento de volumen', d: 'Local, a veces extensa',
            say: 'Y aparecen equimosis y aumento de volumen local. Si el cuadro es este, sospechas fractura de inmediato.' },
        ] },
        { title: 'Regla del examen', tag: 'Muy preguntada', kind: 'alert', items: [
          { t: 'Fémur, pierna y tobillo: cirugía', d: 'El yeso es la excepción',
            say: 'Esta es la regla que tienes que llevarte: las fracturas de fémur, de pierna, es decir tibia y peroné, y de tobillo se tratan, por regla general, con cirugía. El manejo ortopédico es la excepción, reservado a casos muy específicos o a pacientes que no pueden operarse.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Fémur y pierna',
      title: 'Fémur y pierna: estudio y tratamiento',
      cards: [
        { title: 'Fractura de fémur', tag: 'Diáfisis', kind: 'key', items: [
          { t: 'Radiografía AP y lateral', d: 'Fémur completo, cadera y rodilla; más pelvis',
            photo: { src: 'biblioteca/18_traumatologia/trauma-07/21_femur-espiroidea__sherman_p577.jpg', label: 'Fractura espiroidea de fémur', at: 'En esta radiografía', credit: 'Sherman, Atlas of Clinical Emergency Medicine, p. 577' },
            say: 'En el fémur, el diagnóstico se confirma con radiografía anteroposterior y lateral del fémur completo, con la cadera y la rodilla incluidas, más una radiografía de pelvis para descartar una fractura asociada del cuello femoral o del acetábulo. En esta radiografía ves un trazo espiroideo con acortamiento y desplazamiento. Es una fractura de gran energía que puede perder hasta un litro y medio de sangre, así que vigilas el shock, y mientras esperas la cirugía inmovilizas con férula de tracción.' },
          { t: 'Tratamiento siempre quirúrgico', d: 'Clavo intramedular o placa',
            say: 'El tratamiento es quirúrgico, habitualmente con un clavo intramedular o una placa. El yeso no logra vencer la fuerza de los músculos del muslo y termina en consolidación viciosa o en pseudoartrosis, que vimos en la clase anterior.' },
        ] },
        { title: 'Fractura de pierna', tag: 'Tibia y peroné', kind: 'alert', items: [
          { t: 'Diáfisis de la tibia', d: 'Con frecuencia asociada a fractura del peroné',
            say: 'La fractura de pierna es la de la diáfisis de la tibia, que a menudo se acompaña de una fractura del peroné.' },
          { t: 'Síndrome compartimental', d: 'Urgencia quirúrgica: fasciotomía',
            say: 'Es peligrosa por dos complicaciones que siempre se preguntan. La primera es el síndrome compartimental: los compartimentos de la pierna tienen poco espacio, el edema y el sangrado suben la presión y cae la perfusión. Es una urgencia quirúrgica, con fasciotomía, como vimos en su clase.' },
          { t: 'Trombosis venosa profunda', d: 'Trauma e inmovilización prolongada',
            say: 'La segunda es la trombosis venosa profunda, porque el trauma y la inmovilización prolongada son factores de riesgo mayores.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico diferencial',
      title: 'Esguince o fractura de tobillo',
      head: ['Hallazgo', 'Esguince', 'Fractura'],
      rows: [
        { cells: ['Apoyo', 'Doloroso, pero posible', 'Imposible apoyar'],
          say: 'En el esguince el paciente puede apoyar, aunque le duela. En la fractura no logra apoyar. La imposibilidad de apoyar es el signo que más orienta a fractura.' },
        { cells: ['Crepitación ósea', 'Ausente', 'Presente'],
          say: 'La crepitación ósea no existe en el esguince y sí puede estar en la fractura.' },
        { cells: ['Dolor a la palpación', 'En ligamentos', 'Sobre prominencias óseas'],
          say: 'Si el dolor está sobre el hueso, sobre las prominencias óseas, piensas en fractura. Si está sobre los ligamentos, piensas en esguince.' },
        { cells: ['Equimosis', 'Tardía y localizada', 'Inmediata y extensa'],
          say: 'Y la equimosis del esguince suele ser tardía y localizada, mientras que la de la fractura es inmediata y extensa. Ojo: ninguno de estos signos reemplaza a la radiografía, como vamos a ver.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Examen del tobillo',
      title: 'Qué palpar: criterios para radiografía',
      cards: [
        { title: 'Puntos óseos a palpar', tag: 'Sistemático', kind: 'key', items: [
          { t: 'Maléolos medial y lateral', d: 'Su fractura es la más común del tobillo',
            say: 'Palpa siempre los dos maléolos, el medial y el lateral. Su fractura es la más frecuente en el tobillo.' },
          { t: 'Base del quinto metatarsiano', d: 'Avulsión por el peroneo lateral corto',
            say: 'Luego la base del quinto metatarsiano: el músculo peroneo lateral corto tracciona y puede arrancar un fragmento. Es la fractura por avulsión que se confunde con un esguince. Mira esta radiografía del pie: el fragmento arrancado en la base del quinto metatarsiano.',
            photo: { src: 'biblioteca/18_traumatologia/trauma-07/23_quinto-metatarsiano-base-rx__knoop_p347.jpg', label: 'Base del quinto metatarsiano', at: 'Mira esta radiografía', credit: 'The Atlas of Emergency Medicine (Knoop), p. 347' } },
          { t: 'Cabeza del peroné', d: 'Fractura de Maisonneuve',
            say: 'Y la cabeza del peroné. El golpe se transmite por la sindesmosis, que es la unión fibrosa entre tibia y peroné, y puede fracturar el peroné arriba, cerca de la rodilla. Eso se llama fractura de Maisonneuve. Si solo miras el tobillo, la pierdes. Mira esta radiografía: el tobillo lesionado y, más arriba, el peroné fracturado.',
            photo: { src: 'biblioteca/18_traumatologia/trauma-07/24_maisonneuve__sherman_p615.jpg', label: 'Maisonneuve', at: 'Mira esta radiografía', credit: 'Atlas of Clinical Emergency Medicine (Sherman), p. 615' } },
        ] },
        { title: 'Cuándo pedir radiografía', tag: 'Reglas de Ottawa', kind: 'alert', items: [
          { t: 'Dolor óseo en esos puntos', d: 'Maléolos o base del quinto metatarsiano',
            say: 'La idea de las reglas de Ottawa es no pedir radiografía a todo el mundo, pero sí a quien tiene dolor sobre esos puntos óseos.' },
          { t: 'Imposibilidad de apoyar', d: 'Signo que orienta a fractura',
            say: 'Y a quien no logra apoyar el pie. En el examen, como veremos, una torcedura con dolor óseo o equimosis bimaleolar se estudia con radiografía.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Conducta',
      title: 'Torcedura de tobillo: radiografía primero',
      nodes: [
        { id: 'to', col: 0, row: 1, k: 'start', t: 'Torcedura de tobillo', s: 'Dolor, equimosis, no apoya bien' },
        { id: 'rx', col: 1, row: 1, k: 'q', t: 'Radiografía de tobillo', s: 'Descarta fractura primero' },
        { id: 'fx', col: 2, row: 0, k: 'alert', t: 'Hay fractura', s: 'Tratamiento quirúrgico' },
        { id: 'es', col: 2, row: 2, k: 'good', t: 'Radiografía normal', s: 'Recién ahí: esguince' },
      ],
      edges: [
        { from: 'to', to: 'rx' },
        { from: 'rx', to: 'fx', label: 'Alterada' },
        { from: 'rx', to: 'es', label: 'Normal' },
      ],
      steps: [
        { show: ['to', 'rx'], note: 'Ante la duda, es fractura hasta demostrar lo contrario',
          say: 'La regla del libro dice que un esguince es una fractura hasta que se demuestre lo contrario con una radiografía. Ante una torcedura con dolor, equimosis o dificultad para apoyar, tu primera conducta es pedir radiografía de tobillo.' },
        { show: ['fx', 'es'], note: 'El esguince es un diagnóstico de exclusión',
          say: 'Si la radiografía muestra fractura, el tratamiento es quirúrgico. Solo si sale normal haces el diagnóstico de esguince, que ves en la clase de partes blandas. Aquí hay un matiz que se pregunta: si te piden el diagnóstico más probable de una torcedura simple con equimosis, la respuesta es esguince; pero si te piden la conducta, es la radiografía.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Partes blandas',
      title: 'Esguince: grados y tratamiento',
      cards: [
        { title: 'Grados', tag: 'Lesión de un ligamento', kind: 'criteria', items: [
          { t: 'Grado I: microdesgarros', d: 'Dolor y edema leves; se puede apoyar',
            say: 'Una vez descartada la fractura, el esguince es la lesión de un ligamento, y se grada. En el grado uno hay microdesgarros, dolor y edema leves, sin inestabilidad, y el paciente puede apoyar.' },
          { t: 'Grado II: rotura parcial', d: 'Equimosis, dolor al apoyar, inestabilidad leve',
            say: 'El grado dos es una rotura parcial, con edema, equimosis, dolor al apoyo e inestabilidad leve.' },
          { t: 'Grado III: rotura completa', d: 'Inestabilidad franca; ecografía o RM y derivar',
            say: 'El grado tres es la rotura completa, con inestabilidad franca. Se confirma con ecografía o resonancia y se deriva. El más frecuente es el del ligamento peroneoastragalino anterior, por inversión del tobillo.' },
        ] },
        { title: 'Tratamiento de los grados I y II', tag: 'PRICE', kind: 'key', items: [
          { t: 'PRICE: protección, reposo, hielo, compresión, elevación', d: 'Hielo 15 a 20 minutos cada 2 a 3 horas',
            say: 'Se trata con PRICE: protección, reposo relativo, hielo quince a veinte minutos cada dos a tres horas durante cuarenta y ocho a setenta y dos horas, compresión con venda elástica y elevación. Con paracetamol o antiinflamatorio por pocos días.' },
          { t: 'Vendaje funcional y apoyo progresivo', d: 'Grado II: inmovilización semirrígida 1 a 2 semanas',
            say: 'Se agrega vendaje funcional o tobillera y apoyo progresivo según tolerancia. En el grado dos, además, una inmovilización semirrígida por una a dos semanas. Después, kinesiterapia con propiocepción para prevenir recidivas; el retorno al deporte demora de una a seis semanas.' },
          { t: 'Derivar: grado III, sindesmosis, más de 6 semanas', d: 'Dolor sobre la sindesmosis',
            say: 'Derivas el grado tres, la sospecha de lesión de la sindesmosis, con dolor sobre ella o compresión tibioperonea dolorosa, y los síntomas que persisten más de seis semanas. El mismo manejo vale para el esguince acromioclavicular grado uno y el de los dedos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Fractura de tobillo: qué se hace',
      cards: [
        { title: 'Tratamiento definitivo', tag: 'Quirúrgico', kind: 'key', items: [
          { t: 'Reducción y osteosíntesis', d: 'Sobre todo si hay dos maléolos o sindesmosis inestable',
            say: 'El tratamiento definitivo de la fractura de tobillo es la reducción y la osteosíntesis quirúrgica, sobre todo si hay compromiso de ambos maléolos o inestabilidad de la sindesmosis.' },
          { t: 'No es RICE con bota', d: 'Eso es el esguince',
            say: 'Cuidado con la trampa: el reposo, hielo, compresión y elevación con bota removible es el manejo del esguince, no el de una fractura confirmada.' },
        ] },
        { title: 'Mientras llega la cirugía', tag: 'Manejo inicial', kind: 'alert', items: [
          { t: 'Analgesia y reducción cerrada', d: 'Bajo sedación o anestesia',
            say: 'Si la fractura o luxofractura está desplazada, el manejo inicial es analgesia y reducción cerrada, bajo sedación o anestesia, para devolver el pie a su eje.' },
          { t: 'Valva de yeso abierta', d: 'Inmovilización transitoria; evita compartimental',
            say: 'Después se inmoviliza de forma transitoria con una valva de yeso abierta, no con un yeso circular cerrado, para evitar un síndrome compartimental. Esto vale para otras fracturas desplazadas que esperan cirugía.' },
          { t: 'Neurovascular antes y después', d: 'Pulsos, llene capilar, sensibilidad',
            say: 'Y siempre evalúas la parte neurovascular distal, con pulsos, llene capilar y sensibilidad, antes y después de inmovilizar.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Fractura de tobillo',
      title: 'Luxofractura de tobillo y clasificación de Weber',
      cards: [
        { title: 'Qué es', tag: 'Rotación del pie en carga', kind: 'alert', items: [
          { t: 'Maléolos, ligamentos y astrágalo', d: 'Bimaleolar o trimaleolar',
            photo: { src: 'biblioteca/18_traumatologia/trauma-07/22_luxofractura-tobillo-rx__sherman_p540.jpg', label: 'Luxofractura de tobillo', at: 'Mira estas radiografías', credit: 'Sherman, Atlas of Clinical Emergency Medicine, p. 540' },
            say: 'La luxofractura de tobillo se produce por una rotación del pie con el tobillo en carga: fractura de uno o más maléolos, lesión de ligamentos y subluxación o luxación del astrágalo. Mira estas radiografías: el astrágalo se desplaza fuera de la mortaja y hay fragmentos del maléolo. Si compromete el maléolo posterior, es trimaleolar. La clínica es deformidad evidente, edema importante e imposibilidad de apoyar.' },
          { t: 'Weber: A, B y C según la sindesmosis', d: 'Las C son inestables',
            say: 'La clasificación de Weber mira el nivel del rasgo del peroné respecto de la sindesmosis. La A es infrasindesmal, la B transindesmal y la C suprasindesmal. Las C son inestables.' },
        ] },
        { title: 'Manejo de urgencia', tag: 'Y derivación', kind: 'key', items: [
          { t: 'Ottawa y tres proyecciones', d: 'AP, lateral y de mortaja',
            say: 'Con las reglas de Ottawa decides la radiografía, y se piden anteroposterior, lateral y de mortaja.' },
          { t: 'Reducir si hay compromiso vascular o cutáneo', d: 'Luego valva suropédica',
            say: 'Examinas lo neurovascular y la piel. Si hay luxación con compromiso vascular o cutáneo, reduces; después valva suropédica, elevación, analgesia y derivación para osteosíntesis.' },
          { t: 'Necrosis cutánea, compartimental, artrosis', d: 'Complicaciones',
            say: 'Complican la necrosis de la piel, el síndrome compartimental y la artrosis postraumática.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Tobillo y pierna: errores típicos',
      head: ['Situación', 'Haces', 'No haces'],
      rows: [
        { cells: ['Torcedura con dolor o equimosis', 'Radiografía de tobillo', 'Alta como esguince sin radiografía'],
          say: 'Torcedura con dolor, equimosis o dificultad para apoyar: pides radiografía. No das el alta con un diagnóstico de esguince sin haber descartado la fractura.' },
        { cells: ['Fractura de tobillo confirmada', 'Cirugía; férula mientras', 'RICE con bota removible'],
          say: 'Fractura de tobillo confirmada: cirugía, y una inmovilización transitoria mientras tanto. La bota con hielo y elevación es del esguince.' },
        { cells: ['Primera imagen del tobillo', 'Radiografía simple', 'TAC o resonancia de entrada'],
          say: 'La primera imagen del tobillo es la radiografía simple. Ni el TAC ni la resonancia son el examen inicial.' },
        { cells: ['Dolor intenso bajo el yeso', 'Retirar el yeso ya', 'Elevar o repetir radiografías'],
          say: 'Y dolor intenso con edema bajo un yeso en una fractura de pierna es síndrome compartimental hasta demostrar lo contrario: retiras el yeso de inmediato.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la lesión de extremidad inferior a la radiografía, la cirugía y las complicaciones.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un hombre de 32 años sufre un accidente de moto y llega con dolor intenso en el muslo derecho, deformidad del eje de la extremidad y crepitación. No puede mover la pierna. Los pulsos distales están presentes.',
      question: '¿Cuál es el estudio y el tratamiento más adecuados?',
      options: [
        { letter: 'A', text: 'Radiografía de fémur AP y lateral con cadera y rodilla; cirugía con clavo intramedular' },
        { letter: 'B', text: 'Radiografía solo de la zona del dolor; yeso por seis semanas' },
        { letter: 'C', text: 'Resonancia magnética de muslo; reposo y analgesia' },
        { letter: 'D', text: 'Solo radiografía de pelvis; manejo ortopédico' },
        { letter: 'E', text: 'Ecografía de partes blandas; vendaje compresivo' },
      ],
      correct: 'A',
      explanation: 'La fractura de fémur se confirma con radiografía AP y lateral que incluya las articulaciones proximal y distal, y su tratamiento es siempre quirúrgico, habitualmente con clavo intramedular o placa. El manejo ortopédico no vence la fuerza muscular y termina en consolidación viciosa o pseudoartrosis.',
      say: {
        stem: 'Un hombre de treinta y dos años tras un accidente de moto, con dolor intenso en el muslo derecho, deformidad del eje de la extremidad y crepitación. No puede mover la pierna y los pulsos distales están presentes.',
        question: '¿Cuál es el estudio y el tratamiento más adecuados?',
        options: 'Las opciones: radiografía de fémur con cadera y rodilla, y cirugía con clavo; radiografía de la zona y yeso por seis semanas; resonancia y reposo; solo pelvis y manejo ortopédico; o ecografía y vendaje. Piénsalo.',
        answer: 'Es la A. Deformidad, crepitación e impotencia funcional son una fractura de fémur. Se confirma con radiografía anteroposterior y lateral que incluya cadera y rodilla, y se opera, habitualmente con clavo intramedular. El yeso es la trampa: no contrarresta la fuerza muscular y deja una consolidación viciosa o una pseudoartrosis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 7',
      stem: 'Una paciente de 68 años hace dos días sufre torsión del tobillo derecho, mientras bajaba escaleras. Evoluciona con intenso dolor, que le dificulta caminar. Al examen físico presenta edema de tobillo derecho, con equimosis bimaleolar, asociado a dolor a la palpación fibular ipsilateral.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Indicar inmovilizador de tobillo' },
        { letter: 'B', text: 'Inmovilizar con bota larga de yeso' },
        { letter: 'C', text: 'Solicitar radiografías de tobillo' },
        { letter: 'D', text: 'Solicitar TAC de tobillo' },
        { letter: 'E', text: 'Indicar reposo y analgesia, con elevación de la extremidad' },
      ],
      correct: 'C',
      explanation: 'La sospecha es una fractura de tobillo, principalmente por el dolor a la palpación ósea. Sin embargo, tanto en un esguince como en una sospecha de fractura, la conducta inicial es descartar la fractura con radiografías de tobillo (AP, lateral y oblicua).',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Una paciente de sesenta y ocho años, con torsión del tobillo hace dos días al bajar escaleras. Tiene dolor intenso que le dificulta caminar, edema, equimosis en ambos maléolos y dolor al palpar el peroné.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: inmovilizador de tobillo; bota larga de yeso; radiografías de tobillo; tomografía de tobillo; o reposo, analgesia y elevación. Piénsalo.',
        answer: 'Es la C. El dolor sobre el hueso y la equimosis bimaleolar orientan a fractura, pero incluso si fuera un esguince, lo primero siempre es descartar la fractura con radiografías de tobillo, anteroposterior, lateral y oblicua. Inmovilizar o dar reposo sin imagen es partir por el final, y el TAC no es el examen inicial.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente con fractura de tobillo confirmada en la radiografía.',
      question: '¿Cuál es el tratamiento?',
      options: [
        { letter: 'A', text: 'RICE más bota removible por cuatro semanas' },
        { letter: 'B', text: 'Yeso de pierna por seis semanas' },
        { letter: 'C', text: 'Cirugía con reducción y osteosíntesis' },
        { letter: 'D', text: 'Observación ambulatoria y control en una semana' },
        { letter: 'E', text: 'Inmovilización con bota de yeso y evaluar en dos semanas' },
      ],
      correct: 'C',
      explanation: 'Las fracturas de fémur, pierna y tobillo se tratan quirúrgicamente por regla general. La cirugía permite reducir y fijar bien, y que el paciente apoye antes. El RICE con bota es el manejo del esguince; la inmovilización solo es parte del manejo mientras llega la cirugía.',
      say: {
        stem: 'Un paciente con una fractura de tobillo confirmada en la radiografía.',
        question: '¿Cuál es el tratamiento?',
        options: 'Las opciones: reposo, hielo, compresión y elevación con bota removible; yeso de pierna por seis semanas; cirugía con reducción y osteosíntesis; observación ambulatoria; o bota de yeso y control en dos semanas. Piénsalo.',
        answer: 'Es la C. Fémur, pierna y tobillo se operan por regla general: la cirugía reduce y fija bien, y permite apoyar antes. La A es la trampa: esa bota con hielo y elevación es el manejo del esguince, no de una fractura confirmada. La inmovilización solo acompaña mientras llega la cirugía.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.02.2.003 · Esguince grado1",
      "stem": "Mujer de 24 años se dobla el tobillo derecho hacia adentro jugando básquetbol hace 3 horas. Pudo caminar 4 pasos al llegar al SAPU. Al examen: leve aumento de volumen y dolor a la palpación del ligamento peroneoastragalino anterior, sin dolor en el borde posterior ni la punta de los maléolos, ni en la base del quinto metatarsiano ni en el navicular. Cajón anterior negativo.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Radiografía de tobillo AP, lateral y mortaja antes de indicar tratamiento"
        },
        {
          "letter": "B",
          "text": "Bota de yeso por 4 semanas"
        },
        {
          "letter": "C",
          "text": "Reposo relativo, hielo, compresión y elevación, analgesia, carga precoz según tolerancia y ejercicios de propiocepción"
        },
        {
          "letter": "D",
          "text": "Resonancia magnética para evaluar rotura ligamentosa"
        },
        {
          "letter": "E",
          "text": "Derivación a traumatología para reparación quirúrgica"
        }
      ],
      "correct": "C",
      "explanation": "Por las reglas de tobillo de Ottawa (camina 4 pasos, sin dolor óseo en maléolos, quinto metatarsiano ni navicular) no requiere radiografía. Es un esguince grado 1 del peroneoastragalino anterior, que se trata con medidas RICE, analgesia, movilización y carga precoz y rehabilitación propioceptiva; el yeso no está indicado.",
      "say": {
        "stem": "Una mujer de veinticuatro años se dobla el tobillo hacia adentro jugando básquetbol. Camina cuatro pasos, tiene leve aumento de volumen y dolor solo sobre el ligamento anterior, sin dolor en los huesos ni inestabilidad.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: radiografías antes de tratar, bota de yeso por cuatro semanas, reposo relativo con hielo, compresión, elevación y carga precoz, resonancia, o cirugía. Piénsalo.",
        "answer": "Es la C. Según las reglas de Ottawa no necesita radiografía, y un esguince leve se trata con hielo, compresión, elevación, analgesia y carga precoz con ejercicios de equilibrio. La radiografía tienta, pero camina y no tiene dolor en los puntos óseos clave."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.4.007 · Radiografía de extremidades",
      "stem": "Mujer de 28 años sufre un esguince por inversión del tobillo derecho jugando básquetbol. Presenta dolor y edema en la zona lateral. No puede dar 4 pasos al llegar a urgencia y tiene dolor a la palpación del borde posterior del maléolo lateral.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Solicitar resonancia magnética de tobillo"
        },
        {
          "letter": "B",
          "text": "Solicitar radiografía de tobillo AP, lateral y mortaja"
        },
        {
          "letter": "C",
          "text": "Inmovilizar sin estudio radiológico"
        },
        {
          "letter": "D",
          "text": "Solicitar TAC de tobillo"
        },
        {
          "letter": "E",
          "text": "Solicitar radiografía de pie exclusivamente"
        }
      ],
      "correct": "B",
      "explanation": "Según las reglas de Ottawa, se solicita radiografía de tobillo si hay dolor en la zona maleolar con dolor a la palpación del borde posterior o la punta de cualquiera de los maléolos, o incapacidad de dar 4 pasos. Esta paciente cumple ambos criterios. La radiografía de extremidades debe incluir al menos 2 proyecciones ortogonales.",
      "say": {
        "stem": "Mujer de veintiocho años con un esguince en inversión del tobillo derecho jugando básquetbol. No puede dar cuatro pasos y le duele al palpar el borde posterior del maléolo lateral.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: resonancia de tobillo, radiografía de tobillo en tres proyecciones, inmovilizar sin radiografía, TAC de tobillo o solo radiografía de pie. Piénsalo.",
        "answer": "Es la B. Cumple las reglas de Ottawa, con dolor en el borde posterior del maléolo e incapacidad de dar cuatro pasos, así que necesita radiografía de tobillo. Inmovilizar sin estudio tienta porque la mayoría son esguinces, pero con estos criterios podrías estar dejando pasar una fractura."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: pierna y tobillo',
      cards: [
        { title: 'Pierna y fémur', tag: 'Cirugía', kind: 'key', items: [
          { t: 'Fémur, pierna y tobillo: cirugía', d: 'El yeso definitivo es la excepción',
            say: 'Cerremos con las reglas de oro. Fémur, pierna y tobillo se operan por regla general. Y en la pierna vigilas el síndrome compartimental y la trombosis venosa profunda.' },
          { t: 'Dolor bajo el yeso: retirarlo', d: 'Síndrome compartimental hasta demostrar lo contrario',
            say: 'Si hay dolor intenso o edema distal bajo un yeso, lo retiras de inmediato y llamas al traumatólogo.' },
        ] },
        { title: 'Tobillo', tag: 'Radiografía', kind: 'alert', items: [
          { t: 'Torcedura: radiografía primero', d: 'Dolor óseo o imposibilidad de apoyar',
            say: 'En el tobillo, toda torcedura con dolor sobre el hueso, equimosis o dificultad para apoyar se estudia con radiografía, y palpas maléolos, base del quinto metatarsiano y cabeza del peroné.' },
          { t: 'Esguince: solo con radiografía normal', d: 'Fractura: cirugía; valva abierta mientras',
            say: 'El esguince se diagnostica solo con la radiografía normal. Si hay fractura, cirugía, y mientras tanto reducción cerrada y valva de yeso abierta. Si te llevas una sola idea de hoy: un tobillo que se torció es una fractura hasta que la radiografía diga lo contrario. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Lesión de extremidad inferior tras un trauma',
    root: N('start', 'Trauma de extremidad inferior', 'Dolor, impotencia, deformidad',
      'Un paciente con un trauma de extremidad inferior, con dolor y dificultad para apoyar. Primero evalúas el estado neurovascular y luego decides el estudio.',
      ['Deformidad o crepitación en muslo o pierna', N('do', 'Radiografía AP y lateral', 'Con articulaciones vecinas',
        'Si hay deformidad y crepitación en el muslo o la pierna, pides radiografía anteroposterior y lateral, incluyendo la articulación de arriba y la de abajo.',
        ['Fractura de fémur, tibia o peroné', N('refer', 'Tratamiento quirúrgico', 'Clavo o placa; derivar',
          'Las fracturas de fémur y de pierna se operan, habitualmente con clavo intramedular o placa.')],
        ['Dolor intenso o edema bajo el yeso', N('alert', 'Síndrome compartimental', 'Retirar el yeso; fasciotomía',
          'Si después de inmovilizar aparece dolor intenso y edema distal, sospechas síndrome compartimental: retiras el yeso de inmediato y fasciotomía.')],
      )],
      ['Torcedura de tobillo', N('do', 'Palpar y pedir radiografía', 'Maléolos, quinto metatarsiano, peroné',
        'Si es una torcedura de tobillo, palpas maléolos, base del quinto metatarsiano y cabeza del peroné, y pides radiografía de tobillo.',
        ['Fractura o luxofractura', N('refer', 'Reducir, valva abierta y cirugía', 'Analgesia y neurovascular',
          'Si hay fractura o luxofractura, analgesia, reducción cerrada, valva de yeso abierta y cirugía definitiva.')],
        ['Radiografía normal', N('ok', 'Esguince de tobillo', 'Manejo según grado',
          'Si la radiografía es normal, recién ahí haces el diagnóstico de esguince, que se maneja según su grado.')],
      )],
    ),
  },
};
