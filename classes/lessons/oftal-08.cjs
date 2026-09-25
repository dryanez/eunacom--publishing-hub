// Clase 15.8 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_oftalmologia.cjs (oftal-08).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'oftal-08',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'La causa número uno de ceguera reversible, y por qué el único tratamiento es el bisturí',
      say: 'Bienvenidos. Hoy vemos las cataratas, la causa más frecuente de ceguera reversible en el mundo y en Chile. Es un tema agradecido para el examen: la clínica es reconocible a distancia, el examen que la confirma se hace en cualquier consulta, y el tratamiento no admite ambigüedad, porque no existe ningún colirio que la cure. Vamos a verlo completo, incluyendo los plazos de la garantía GES.',
    },

    {
      type: 'points',
      kicker: 'Etiología',
      title: 'Tres formas de opacificarse, tres pistas distintas',
      cards: [
        { title: 'Catarata senil', tag: 'Más del noventa por ciento', kind: 'criteria', items: [
          { t: 'Nuclear', d: 'Esclerosis amarillenta del núcleo; da miopización',
            say: 'El cristalino normal es una lente transparente, y con la edad sus proteínas se desnaturalizan y opacifican. La forma senil explica más del noventa por ciento de los casos, y tiene tres variantes. La nuclear, la más clásica, es una esclerosis del núcleo que se pone amarillenta y produce miopización.' },
          { t: 'Cortical', d: 'Opacidades en radios de rueda',
            say: 'La cortical da opacidades radiales, como radios de rueda, en la periferia del cristalino.' },
          { t: 'Subcapsular posterior', d: 'Pérdida visual rápida y deslumbramiento diurno',
            say: 'Y la subcapsular posterior, justo delante de la cápsula, es la que da una caída visual desproporcionadamente rápida y mucho deslumbramiento con luz de día.' },
        ] },
        { title: 'Cataratas secundarias', tag: 'Fármacos y enfermedades', kind: 'alert', items: [
          { t: 'Corticoides, en jóvenes', d: 'Producen típicamente la subcapsular posterior',
            say: 'Y un dato que se pregunta mucho: el uso prolongado de corticoides, tópicos o sistémicos, produce típicamente una catarata subcapsular posterior, incluso en pacientes jóvenes.' },
          { t: 'Diabetes mellitus', d: 'Cataratas corticales juveniles o senil acelerada',
            say: 'La diabetes también acelera el proceso, por acumulación de sorbitol dentro del cristalino.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Clínica',
      title: 'La segunda visión: cuando el paciente mejora antes de empeorar',
      nodes: [
        { id: 'opa', col: 0, row: 1, k: 'cause', t: 'Cristalino opacificado', s: 'Sin dolor, sin ojo rojo' },
        { id: 'av', col: 1, row: 0, k: 'effect', t: 'Baja visual lenta y bilateral', s: 'Estrictamente indolora' },
        { id: 'des', col: 1, row: 2, k: 'effect', t: 'Deslumbramiento nocturno', s: 'Con luces de otros autos' },
        { id: 'mio', col: 2, row: 1, k: 'trap', t: 'Miopización paradójica', s: 'El présbita vuelve a leer sin lentes' },
        { id: 'rrp', col: 3, row: 1, k: 'good', t: 'Reflejo rojo pupilar atenuado', s: 'Examen de confirmación en atención primaria' },
      ],
      edges: [
        { from: 'opa', to: 'av' }, { from: 'opa', to: 'des' },
        { from: 'av', to: 'mio' }, { from: 'mio', to: 'rrp' }, { from: 'des', to: 'rrp' },
      ],
      steps: [
        { show: ['opa', 'av'], note: 'Lenta, bilateral, y sin dolor',
          say: 'La clínica es reconocible a distancia. La agudeza visual baja de forma lenta, bilateral, y estrictamente indolora, sin ojo rojo.' },
        { show: ['des'], note: 'Molestia clásica al conducir de noche',
          say: 'El paciente se queja de deslumbramiento y fotofobia, sobre todo al conducir de noche frente a las luces de otros autos.' },
        { show: ['mio'], note: 'La trampa clásica de examen',
          say: 'Y aquí está la trampa clásica: el núcleo engrosado aumenta el poder refractivo del ojo y lo miopiza, así que el anciano présbita, de pronto, vuelve a leer de cerca sin sus anteojos. El paciente lo cuenta feliz, como una mejoría, cuando en realidad es la catarata avanzando.' },
        { show: ['rrp'], note: 'A un metro, con el oftalmoscopio directo',
          say: 'El examen de elección en atención primaria es el reflejo rojo pupilar: con el oftalmoscopio directo a un metro de distancia, el cristalino normal da un brillo rojo anaranjado parejo. La catarata lo atenúa o lo recorta con manchas oscuras.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento y GES',
      title: 'Cirugía siempre, y con plazos legales',
      cards: [
        { title: 'Indicación quirúrgica', tag: 'La define la funcionalidad', kind: 'key', items: [
          { t: 'No existe tratamiento médico', d: 'Ningún colirio previene ni revierte la catarata',
            say: 'El tratamiento es cien por ciento quirúrgico: no hay ningún colirio que prevenga, retrase o revierta una catarata.' },
          { t: 'Impacto en la vida del paciente', d: 'Leer, conducir, riesgo de caídas',
            say: 'Y ya no se espera a que la catarata madure. La indicación hoy la define el impacto en la calidad de vida y la autonomía: si le dificulta leer, conducir, o le aumenta el riesgo de caídas, se opera.' },
        ] },
        { title: 'Facoemulsificación', tag: 'La técnica de elección', kind: 'criteria', items: [
          { t: 'Microincisión y lente intraocular', d: 'Ultrasonido fragmenta el núcleo; se implanta una lente plegable',
            say: 'La técnica de elección es la facoemulsificación: una microincisión corneal, se abre la cápsula anterior, una sonda de ultrasonido fragmenta y aspira el cristalino opaco, y se implanta una lente intraocular plegable dentro del mismo saco capsular, con anestesia tópica y en forma ambulatoria.' },
        ] },
        { title: 'Garantía GES número veintiuno', tag: 'Plazos legales', kind: 'alert', items: [
          { t: 'Confirmación diagnóstica y cirugía con plazo', d: 'Con agudeza visual igual o menor a cero coma tres',
            say: 'Y el dato administrativo que se pregunta: la garantía GES número veintiuno obliga a confirmar el diagnóstico y, en el ojo con agudeza visual igual o menor a cero coma tres, a operar dentro de un plazo máximo fijado por ley. Todo paciente con catarata sintomática debe notificarse.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Subtipos de catarata: la pista que decide el origen',
      head: ['Subtipo', 'Dónde se ubica', 'Factor asociado', 'Pista clínica'],
      rows: [
        { cells: ['Nuclear', 'Núcleo central', 'Envejecimiento senil', 'Miopización paradójica'],
          say: 'Repasemos las trampas por subtipo. La nuclear está en el núcleo central, es la senil clásica, y da esa miopización paradójica.' },
        { cells: ['Cortical', 'Corteza periférica', 'Senil, diabetes', 'Deslumbramiento nocturno'],
          say: 'La cortical está en la periferia, se asocia a la diabetes, y da deslumbramiento con las luces de los autos.' },
        { cells: ['Subcapsular posterior', 'Delante de la cápsula posterior', 'Corticoides, diabetes, jóvenes', 'Caída visual rápida, deslumbramiento diurno'],
          say: 'La subcapsular posterior es la del usuario crónico de corticoides, incluso joven, y avanza rápido, con deslumbramiento de día.' },
        { cells: ['Traumática', 'Fibras subcapsulares', 'Contusión o herida penetrante', 'Opacidad en roseta, monocular'],
          say: 'Y la traumática, tras una contusión o una herida, da una opacidad en forma de roseta, siempre en un solo ojo. Si el examen te da el fármaco o el mecanismo, ya sabes el subtipo.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 72 años, autovalente, consulta por visión borrosa bilateral de 1 año de evolución que le dificulta reconocer caras en la calle. De noche le molestan mucho las luces de los autos, pero comenta contenta que ahora puede leer el diario sin sus lentes de aumento. No refiere dolor ni ojo rojo. Agudeza visual 20/70 en ambos ojos. La oftalmoscopía muestra atenuación marcada del reflejo rojo pupilar bilateral.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Indicar un colirio antioxidante para retrasar la progresión' },
        { letter: 'B', text: 'Tranquilizar: leer sin lentes es un signo de mejoría' },
        { letter: 'C', text: 'Notificar GES 21 y derivar para facoemulsificación con lente intraocular' },
        { letter: 'D', text: 'Solicitar campo visual computarizado antes de decidir' },
        { letter: 'E', text: 'Indicar cambio de lentes ópticos y control en 1 año' },
      ],
      correct: 'C',
      explanation: 'Baja visual lenta, bilateral e indolora, con deslumbramiento nocturno, miopización paradójica y atenuación del reflejo rojo pupilar: catarata senil. La conducta es notificar la garantía GES 21 y derivar para facoemulsificación con implante de lente intraocular; no existe tratamiento médico.',
      say: {
        stem: 'Vamos al caso. Mujer de setenta y dos años, autovalente, con visión borrosa bilateral de un año, que le dificulta reconocer caras en la calle. De noche le molestan mucho las luces de los autos, pero cuenta contenta que ahora puede leer el diario sin sus lentes de aumento. No tiene dolor ni ojo rojo. Su agudeza visual está bastante reducida en ambos ojos, y la oftalmoscopía muestra el reflejo rojo pupilar muy atenuado en los dos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: un colirio antioxidante para retrasar la progresión, tranquilizarla porque leer sin lentes es mejoría, notificar la garantía GES veintiuno y derivar para facoemulsificación, pedir un campo visual antes de decidir, o solo cambiar los lentes ópticos. Piénsalo.',
        answer: 'Es la C. Todo el cuadro es una catarata senil de libro: baja visual lenta, bilateral, indolora, con deslumbramiento nocturno, la miopización paradójica que ella describe como mejoría, y el reflejo rojo atenuado. La opción B es la trampa más importante: leer sin lentes no es una mejoría, es el cristalino empeorando. Y como no existe colirio que trate la catarata, la conducta es notificar el GES y derivar a cirugía.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2018 · Pregunta 171',
      stem: 'Una paciente de 78 años presenta disminución de la visión del ojo derecho, de 4 meses de evolución. Al examen tiene caída de la agudeza visual de dicho ojo, con disminución de la visión del contraste y afectación del rojo pupilar.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Glaucoma crónico' },
        { letter: 'B', text: 'Catarata' },
        { letter: 'C', text: 'Degeneración macular relacionada con la edad' },
        { letter: 'D', text: 'Vicio de refracción' },
        { letter: 'E', text: 'Atrofia del nervio óptico' },
      ],
      correct: 'B',
      explanation: 'Baja visual progresiva, con disminución de la sensibilidad al contraste y alteración del reflejo rojo pupilar: catarata. El glaucoma no altera el reflejo rojo ni la agudeza visual central hasta el final; el vicio de refracción no afecta el rojo pupilar.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil dieciocho. Paciente de setenta y ocho años, con disminución de la visión del ojo derecho, de cuatro meses de evolución. Al examen: caída de la agudeza visual de ese ojo, con menor visión del contraste y afectación del reflejo rojo pupilar.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: glaucoma crónico, catarata, degeneración macular relacionada con la edad, vicio de refracción, o atrofia del nervio óptico.',
        answer: 'Es la B, catarata. El dato que decide la pregunta es la afectación del reflejo rojo pupilar: eso solo lo da una opacidad del cristalino. El glaucoma no lo altera, y respeta la visión central hasta fases terminales; y un vicio de refracción tampoco afecta el rojo pupilar. La combinación de baja de contraste más rojo pupilar alterado es la firma de la catarata.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 33',
      stem: 'Un paciente de 68 años, con antecedente de diabetes mellitus tipo 2, consulta por disminución progresiva de la agudeza visual del ojo derecho. Tiene agudeza visual 20/20 en el ojo izquierdo y bastante menor en el derecho. Su rojo pupilar demuestra una opacidad central con forma de estrella.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Retinopatía diabética' },
        { letter: 'B', text: 'Edema macular' },
        { letter: 'C', text: 'Catarata' },
        { letter: 'D', text: 'Glaucoma' },
        { letter: 'E', text: 'Hemorragia vítrea' },
      ],
      correct: 'C',
      explanation: 'Disminución progresiva de la agudeza visual con opacidad central en el rojo pupilar: catarata. La retinopatía diabética no da síntomas directos; el edema macular progresa en días, no de forma lenta; el glaucoma no afecta el rojo pupilar; la hemorragia vítrea es de aparición súbita.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil diecinueve. Paciente de sesenta y ocho años, diabético tipo dos, con disminución progresiva de la visión del ojo derecho. La visión del ojo izquierdo es normal, y la del derecho está bastante más baja. Su reflejo rojo pupilar muestra una opacidad central, con forma de estrella.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: retinopatía diabética, edema macular, catarata, glaucoma, o hemorragia vítrea.',
        answer: 'Es la C, catarata. Este caso está armado para tentarte con la diabetes hacia una retinopatía, pero la retinopatía diabética no da síntomas directos ni altera el rojo pupilar. El glaucoma tampoco lo altera. El edema macular avanza en días, no de forma progresiva y lenta. Solo la opacidad del cristalino explica ese hallazgo central en el rojo pupilar.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 156',
      stem: 'Paciente con agudeza visual 20/40 bilateral que no mejora con agujero estenopeico. La refracción no muestra cambios.',
      question: '¿Cuál es la causa más probable de esta alteración visual?',
      options: [
        { letter: 'A', text: 'Opacidad de medios, como una catarata' },
        { letter: 'B', text: 'Error refractivo no corregido' },
        { letter: 'C', text: 'Ambliopía' },
        { letter: 'D', text: 'Glaucoma' },
        { letter: 'E', text: 'Degeneración macular' },
      ],
      correct: 'A',
      explanation: 'El agujero estenopeico mejora la visión solo cuando la causa es un error refractivo. Si no mejora y la refracción es normal, la causa es una opacidad de medios, como la catarata, o una patología retinal o neural; en un adulto mayor, lo más probable es catarata.',
      say: {
        stem: 'Cerremos con una última pregunta real, del EUNACOM de julio de dos mil veinticinco. Paciente con agudeza visual reducida en ambos ojos, que no mejora al mirar a través de un agujero estenopeico, con una refracción sin cambios.',
        question: '¿Cuál es la causa más probable de esta alteración visual?',
        options: 'Las opciones: opacidad de medios como una catarata, error refractivo no corregido, ambliopía, glaucoma, o degeneración macular.',
        answer: 'Es la A, opacidad de medios. El agujero estenopeico es una prueba simple: si la visión mejora al mirar por el orificio, el problema es un error refractivo, algo que unos lentes corrigen. Si no mejora, como en este caso, el problema no es refractivo, sino una opacidad en el camino de la luz, o una patología retinal o neural. En un paciente de edad, la causa más probable de esa opacidad es la catarata.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'El diagnóstico', tag: 'Reflejo rojo pupilar', kind: 'key', items: [
          { t: 'Baja visual lenta, bilateral, indolora', d: 'Con atenuación del reflejo rojo',
            say: 'Cerremos con las reglas de oro. Baja visual lenta, bilateral e indolora, con atenuación del reflejo rojo pupilar, es catarata hasta que se demuestre lo contrario.' },
        ] },
        { title: 'La trampa clásica', tag: 'Miopización paradójica', kind: 'alert', items: [
          { t: 'Volver a leer sin lentes no es mejoría', d: 'Es el cristalino engrosándose',
            say: 'Y la trampa clásica: que un présbita vuelva a leer sin lentes no es una mejoría, es el signo de que la catarata avanza.' },
        ] },
        { title: 'El tratamiento', tag: 'Cien por ciento quirúrgico', kind: 'pharma', items: [
          { t: 'Facoemulsificación con lente intraocular', d: 'Ningún colirio trata la catarata',
            say: 'Y si te llevas una sola idea de hoy: no existe tratamiento médico para la catarata. Es cien por ciento quirúrgico, con facoemulsificación e implante de lente intraocular, dentro de los plazos que fija la garantía GES. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Baja visual lenta e indolora: confirma con el reflejo rojo',
    root: (() => {
      const cirugia = N('ok', 'Facoemulsificación con lente intraocular', 'Notificar GES 21 y programar cirugía',
        'Notifica la garantía GES número veintiuno y programa la facoemulsificación con implante de lente intraocular, dentro de los plazos legales.');
      const catarataConfirmada = N('alert', 'Catarata confirmada', 'Evaluar impacto funcional para indicar cirugía',
        'Con la catarata confirmada por el reflejo rojo, evalúa el impacto en la vida diaria del paciente para definir la cirugía.',
        ['dificulta leer, conducir o hay caídas', cirugia]);
      const otraCausa = N('refer', 'Buscar otra causa', 'Reflejo rojo normal: piensa en retina o vía óptica',
        'Si el reflejo rojo es normal, la baja visual no es por el cristalino: evalúa retina, mácula o nervio óptico.');
      const preguntaReflejo = N('q', '¿El reflejo rojo pupilar está atenuado o recortado?', 'Examen con oftalmoscopio directo a un metro',
        'Evalúa el reflejo rojo pupilar con el oftalmoscopio directo, a un metro de distancia, en ambos ojos.',
        ['Sí, atenuado o con manchas', catarataConfirmada],
        ['No, reflejo rojo normal', otraCausa]);
      return N('start', 'Baja visual lenta, bilateral e indolora', 'Sin dolor ni ojo rojo, en un adulto mayor',
        'Paciente adulto mayor con disminución lenta, progresiva e indolora de la visión, sin ojo rojo ni dolor.',
        ['', preguntaReflejo]);
    })(),
  },
};
