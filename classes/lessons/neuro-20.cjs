// Clase 10.20 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neurologia.cjs (neuro-20).
// Preguntas reales: banco real (classes/scripts/class_questions.cjs neuro-20 y --search).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'neuro-20',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Segundos, horas o días: la duración ordena el vértigo, y el HINTS encuentra el ACV escondido',
      say: 'Bienvenidos. En la clase anterior vimos cómo la frente separa una parálisis facial central de una periférica. Hoy hacemos lo mismo con el vértigo: la gran mayoría es periférico y benigno, pero entre ellos se esconde un accidente cerebrovascular de fosa posterior que no puedes dejar pasar. Vamos a aprender a separarlos con la historia y con tres maniobras junto a la cama. Partamos.',
    },

    {
      type: 'points',
      kicker: 'Periférico vs central',
      title: 'Primero, ¿dónde está la lesión?',
      cards: [
        { title: 'Vértigo periférico', tag: '85–90% de los casos', kind: 'normal', items: [
          { t: 'Brusco, intenso, con muchos vómitos', d: 'Náuseas, sudoración, palidez',
            say: 'Lo primero es confirmar que es un vértigo verdadero, una sensación ilusoria de giro, y no un presíncope o una inestabilidad. Luego viene la pregunta clave: ¿periférico o central? El periférico, que es el ochenta y cinco a noventa por ciento, parte brusco, es muy intenso y trae un gran cortejo vegetativo: náuseas, vómitos, sudoración y palidez.' },
          { t: 'Camina, aunque se ladee', d: 'Puede haber tinnitus o hipoacusia',
            say: 'El paciente se ladea hacia el lado de la lesión, pero puede caminar. Y si se compromete la cóclea, aparecen síntomas auditivos: tinnitus, hipoacusia o plenitud en el oído.' },
          { t: 'Nistagmo unidireccional', d: 'Horizontal-rotatorio; se inhibe al fijar la mirada',
            say: 'El nistagmo periférico es unidireccional, horizontal y rotatorio, con la fase rápida hacia el oído sano. No cambia de dirección al mirar a los lados, y se inhibe cuando el paciente fija la mirada.' },
        ] },
        { title: 'Vértigo central', tag: 'Urgencia vital', kind: 'alert', items: [
          { t: 'No puede mantenerse de pie', d: 'Ataxia desproporcionada al giro',
            say: 'El central es el diez a quince por ciento, y es una urgencia vital: infarto vertebrobasilar, hemorragia cerebelosa, esclerosis múltiple o un tumor de fosa posterior. Aquí el giro puede ser más sordo, pero la ataxia es desproporcionada: el paciente no puede ni pararse sin apoyo.' },
          { t: 'Focalidad de tronco o cerebelo', d: 'Diplopía, disartria, disfagia, dismetría',
            say: 'Suele acompañarse de focalidad: visión doble, disartria, disfagia, dismetría o un síndrome de Horner.' },
          { t: 'Nistagmo vertical o que cambia', d: 'No se inhibe al fijar la mirada',
            say: 'Y el nistagmo central es vertical puro, torsional puro, o cambia de dirección según hacia dónde mira el paciente. Y no se inhibe con la fijación.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Síndrome vestibular agudo',
      title: 'Por qué la imagen no basta',
      nodes: [
        { id: 'sva', col: 0, row: 1, k: 'start', t: 'Vértigo continuo de inicio súbito', s: 'Nistagmo, náuseas, dura días' },
        { id: 'tac', col: 1, row: 0, k: 'trap', t: 'TAC sin contraste', s: 'Detecta <15–20% de los infartos' },
        { id: 'rmn', col: 1, row: 2, k: 'risk', t: 'RM con difusión precoz', s: '12–20% falsos negativos en 24–48 h' },
        { id: 'hin', col: 2, row: 1, k: 'good', t: 'HINTS junto a la cama', s: 'Sensibilidad 100%, especificidad 96%' },
        { id: 'con', col: 3, row: 1, k: 'q', t: '¿Algún signo central?', s: 'Basta uno' },
      ],
      edges: [
        { from: 'sva', to: 'tac' }, { from: 'sva', to: 'rmn' },
        { from: 'tac', to: 'hin', label: 'no basta' }, { from: 'rmn', to: 'hin', label: 'puede fallar' },
        { from: 'hin', to: 'con' },
      ],
      steps: [
        { show: ['sva'], note: 'El escenario donde se esconde el ACV',
          say: 'Ahora el escenario difícil: el síndrome vestibular agudo. Un vértigo continuo, de inicio súbito, con nistagmo espontáneo, náuseas e inestabilidad, que dura días. Puede ser una neuronitis vestibular, benigna, o un infarto de cerebelo o de tronco. ¿Cómo los separas?' },
        { show: ['tac'], note: 'La TAC no ve bien la fosa posterior',
          say: 'La tentación es pedir una TAC. Pero la TAC sin contraste detecta menos del quince a veinte por ciento de los infartos de fosa posterior. Una TAC normal no te tranquiliza.' },
        { show: ['rmn'], note: 'Incluso la resonancia puede fallar al inicio',
          say: 'Incluso la resonancia con difusión puede dar entre doce y veinte por ciento de falsos negativos en las primeras veinticuatro a cuarenta y ocho horas.' },
        { show: ['hin'], note: 'Tres maniobras oculomotoras',
          say: 'Lo que rinde más en esas primeras horas es el protocolo HINTS, hecho junto a la cama por un médico entrenado. Tiene una sensibilidad de cien por ciento y una especificidad de noventa y seis por ciento para el ACV, más que la resonancia precoz.' },
        { show: ['con'], note: 'Un solo signo central basta',
          say: 'Son tres maniobras, y basta que una sola salga central para tratar al paciente como un ACV. Veámoslas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Protocolo HINTS',
      title: 'Tres maniobras que encuentran el infarto',
      cards: [
        { title: 'Head Impulse', tag: 'La paradoja', kind: 'alert', items: [
          { t: 'Girar rápido la cabeza 10–20°', d: 'El paciente mira tu nariz',
            say: 'La primera es el impulso cefálico, o maniobra de Halmagyi. El paciente mira tu nariz y tú le giras la cabeza rápido, diez a veinte grados, hacia un lado. Evalúa el reflejo vestíbulo-ocular. Mira estos registros del impulso cefálico: en el periférico, el ojo no acompaña al giro y aparecen sacadas correctivas.',
            photo: { src: '_web/159_neuro_Vértigo__Open-i_2.jpg', label: 'Registro impulso cefálico', at: 'Mira estos registros', credit: 'Open-i (NLM), CC BY' } },
          { t: 'Periférico: sacada correctiva', d: 'El reflejo está dañado: test anormal',
            say: 'En la neuronitis vestibular el reflejo está dañado: los ojos se van con la cabeza y luego vuelven con una sacada rápida a tu nariz. El test sale anormal.' },
          { t: 'Normal en vértigo continuo: ACV', d: 'Los ojos se quedan fijos',
            say: 'Y aquí está la paradoja que se pregunta: en el infarto de cerebelo o tronco, el nervio vestibular está sano, y los ojos se quedan clavados en tu nariz. Un impulso cefálico normal, en un paciente con vértigo continuo, es una bandera roja de ACV.' },
        ] },
        { title: 'Nistagmo', tag: 'Dirección', kind: 'criteria', items: [
          { t: 'Cambia de dirección o es vertical', d: 'Categóricamente central',
            say: 'La segunda es el nistagmo. Si es unidireccional, calza con periférico. Pero si cambia de dirección según hacia dónde mira el paciente, o es vertical puro, es central.' },
        ] },
        { title: 'Test of Skew', tag: 'Oclusión alternante', kind: 'key', items: [
          { t: 'Sacada vertical al desocluir', d: 'Desviación oblicua: lesión de tronco',
            say: 'La tercera es el test de skew: tapas un ojo y lo destapas rápido. Si al destaparlo el ojo hace una sacada vertical para realinearse, hay una desviación oblicua, muy específica de infarto de tronco.' },
          { t: 'Cualquier signo central: código ACV', d: 'UTAC y angio-RM urgente (GES 37)',
            say: 'Resumen: impulso normal, nistagmo que cambia de dirección o skew presente, o un paciente que no puede estar de pie. Cualquiera basta para activar el código ACV, hospitalizar en la unidad de tratamiento del ataque cerebrovascular por el GES treinta y siete, y pedir una angio resonancia urgente.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'VPPB',
      title: 'Cristales sueltos: el vértigo más frecuente',
      nodes: [
        { id: 'oto', col: 0, row: 1, k: 'cause', t: 'Otoconias sueltas', s: 'Se desprenden del utrículo' },
        { id: 'can', col: 1, row: 1, k: 'mech', t: 'Caen al canal posterior', s: '85–90% de los casos' },
        { id: 'pos', col: 2, row: 0, k: 'effect', t: 'Vértigo de segundos', s: 'Al acostarse, girar o mirar arriba' },
        { id: 'dix', col: 2, row: 2, k: 'q', t: 'Dix-Hallpike positivo', s: 'Nistagmo torsional con latencia' },
        { id: 'epl', col: 3, row: 1, k: 'good', t: 'Maniobra de Epley', s: 'Cura >80–90% en una sesión' },
        { id: 'no', col: 4, row: 1, k: 'trap', t: 'Sin imágenes ni fármacos', s: 'Ni betahistina ni dimenhidrinato' },
      ],
      edges: [
        { from: 'oto', to: 'can' }, { from: 'can', to: 'pos' }, { from: 'can', to: 'dix' },
        { from: 'pos', to: 'epl' }, { from: 'dix', to: 'epl' }, { from: 'epl', to: 'no' },
      ],
      steps: [
        { show: ['oto'], note: 'Un problema mecánico',
          say: 'Pasemos a la causa más frecuente de vértigo en todas las edades: el vértigo postural paroxístico benigno. Es un problema mecánico. Unos cristales de carbonato de calcio, las otoconias, se desprenden del utrículo.' },
        { show: ['can'], note: 'Canalitiasis del canal posterior',
          say: 'Y caen a un conducto semicircular, en el ochenta y cinco a noventa por ciento de los casos al posterior. Cuando la cabeza cambia de posición, los cristales se mueven con la gravedad y estimulan el canal.' },
        { show: ['pos'], note: 'Segundos, siempre con un cambio de posición',
          say: 'Por eso la clínica es tan característica: crisis de vértigo muy intensas pero muy breves, de menos de un minuto, típicamente diez a treinta segundos, gatilladas por acostarse, darse vuelta en la cama o mirar hacia arriba. Sin hipoacusia, sin tinnitus y sin focalidad.' },
        { show: ['dix'], note: 'La maniobra que lo confirma',
          say: 'Se confirma con la maniobra de Dix-Hallpike: se lleva al paciente de sentado a acostado, con la cabeza girada cuarenta y cinco grados y colgando bajo la camilla. Tras una latencia de dos a diez segundos aparece el vértigo con un nistagmo torsional y hacia arriba, que dura menos de un minuto y se fatiga al repetir. Mira esta secuencia: de sentado a acostado, con la cabeza girada y colgando.',
            photo: { src: 'biblioteca/09_neurologia/neuro-20/02_dix_hallpike__usuario.jpg', label: 'Maniobra de Dix-Hallpike', at: 'Mira esta secuencia', credit: 'Fotografía propia del curso' } },
        { show: ['epl'], note: 'Se cura en la consulta',
          say: 'Y se cura en la misma consulta con la maniobra de reposición de Epley: una secuencia de giros de la cabeza que devuelve los cristales al utrículo. Resuelve más del ochenta a noventa por ciento en la primera sesión. Y esta es la secuencia de Epley, giro por giro.',
            photo: { src: 'biblioteca/09_neurologia/neuro-20/01_maniobra_epley__harrison_p202.jpg', label: 'Maniobra de Epley', at: 'Y esta es la secuencia', credit: 'Harrison, Principios de Medicina Interna, p. 202' } },
        { show: ['no'], note: 'La trampa clásica',
          say: 'Y la trampa: en el VPPB no se piden TAC ni resonancia, y no se indican sedantes vestibulares. Ni cinarizina, ni betahistina, ni dimenhidrinato. Los fármacos no mueven cristales y además retrasan la compensación.' },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Los cristales que se salen de lugar',
      images: [
        { src: 'animaciones/neuro-20/A1_vppb_cristales.mp4', label: 'VPPB: cristales en el canal posterior', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Cristales en el canal posterior',
          say: 'Mira el oído interno. Los otolitos, cristales de carbonato de calcio, se sueltan y caen al canal posterior; con cada cambio de posición se mueven y dan vértigo de segundos. Dix-Hallpike los desplaza y confirma el diagnóstico. Epley los devuelve al utrículo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Otras causas periféricas',
      title: 'Neuronitis vestibular y enfermedad de Menière',
      cards: [
        { title: 'Neuronitis vestibular', tag: 'Días, sin audición afectada', kind: 'criteria', items: [
          { t: 'Crisis única, continua, de días', d: '2–3 días intensos; mejora en 2–4 semanas',
            say: 'La neuronitis vestibular es una inflamación del nervio vestibular, habitualmente viral. Da una crisis única de vértigo severo y continuo, intenso por dos a tres días, que se recupera en dos a cuatro semanas, con vómitos y lateropulsión hacia el lado enfermo.' },
          { t: 'Sin síntomas auditivos', d: 'Si los hay, pensar en laberintitis',
            say: 'No tiene síntomas auditivos, y eso la separa de la laberintitis. El HINTS es periférico, con impulso cefálico anormal.' },
          { t: 'Sedantes vestibulares solo 48–72 h', d: 'Dimenhidrinato 50 mg c/8 h',
            say: 'Aquí sí se usan sedantes vestibulares, como dimenhidrinato cincuenta miligramos cada ocho horas, pero solo las primeras cuarenta y ocho a setenta y dos horas. Prolongarlos impide que el cerebro compense.' },
        ] },
        { title: 'Enfermedad de Menière', tag: 'Horas, con audición afectada', kind: 'pharma', items: [
          { t: 'Vértigo de 20 min a 12 h', d: 'Episodios espontáneos recurrentes',
            say: 'La enfermedad de Menière es una hidropesía endolinfática: aumenta la presión de la endolinfa. Da crisis espontáneas y recurrentes de vértigo que duran de veinte minutos a doce horas.' },
          { t: 'Hipoacusia fluctuante, tinnitus, plenitud', d: 'Hipoacusia de tonos graves',
            say: 'Y se acompaña de hipoacusia neurosensorial fluctuante de tonos graves, tinnitus del mismo lado y sensación de oído tapado.' },
          { t: 'Poca sal, diurético y betahistina', d: 'Sal <2 g/día; betahistina 24 mg c/12 h',
            say: 'Se maneja restringiendo la sal a menos de dos gramos al día, la cafeína y el tabaco, con diuréticos como la hidroclorotiazida, y betahistina veinticuatro miligramos cada doce horas.' },
        ] },
      ],
    },
    {
      type: 'points',
      kicker: 'Síndrome atáxico',
      title: 'Ataxia: cerebelosa, sensitiva o vestibular',
      cards: [
        { title: 'Cerebelosa', tag: 'Romberg negativo', kind: 'key', items: [
          { t: 'Dismetría, temblor intencional, nistagmo', d: 'Disartria escandida, hipotonía',
            say: 'La ataxia es incoordinación del movimiento y de la marcha que no se explica por debilidad. La cerebelosa tiene dismetría, el dedo nariz y el talón rodilla se pasan, disdiadococinesia, temblor intencional, hipotonía, nistagmo y disartria escandida. El Romberg es negativo.' },
          { t: 'Hemisferio: ipsilateral · vermis: marcha', d: 'Base amplia, marcha de ebrio',
            say: 'Las lesiones hemisféricas dan ataxia de las extremidades del mismo lado, y las del vermis, ataxia del tronco y de la marcha, con base de sustentación amplia, la marcha de ebrio. Mira esta resonancia sagital: la atrofia cerebelosa de una ataxia espinocerebelosa hereditaria.',
            photo: { src: 'biblioteca/09_neurologia/neuro-20/03_atrofia_cerebelosa_sca1_rm__harrison_p3465.jpg', label: 'Atrofia cerebelosa (SCA1)', at: 'Mira esta resonancia sagital', credit: 'Harrison, Principios de Medicina Interna 21.ª ed., Fig. 439-1' } },
        ] },
        { title: 'Otros tipos', tag: 'Distinguir', kind: 'criteria', items: [
          { t: 'Sensitiva: empeora sin ver', d: 'Romberg positivo; B12, tabes, neuropatías',
            say: 'La ataxia sensitiva, de cordones posteriores y nervios, empeora al cerrar los ojos: Romberg positivo, marcha taloneante que mira el suelo, pérdida de posición y vibración y arreflexia. Se ve en déficit de vitamina B doce, neurosífilis, polineuropatías y ganglionopatías paraneoplásicas.' },
          { t: 'Vestibular y frontal', d: 'Lateropulsión · marcha que no parte',
            say: 'La vestibular da lateropulsión hacia el lado lesionado, con vértigo y nistagmo. Y la frontal, dificultad para iniciar la marcha con la fuerza conservada, típica de la hidrocefalia normotensiva.' },
        ] },
        { title: 'Causas y conducta', tag: 'Qué hacer', kind: 'alert', items: [
          { t: 'Aguda con cefalea o vómitos: TAC urgente', d: 'Infarto o hematoma cerebeloso',
            say: 'Una ataxia aguda, sobre todo con cefalea, vómitos, compromiso de conciencia o signos de tronco, exige TAC urgente: es un infarto o un hematoma cerebeloso hasta demostrar lo contrario, una emergencia por el edema y la hidrocefalia. También alcohol y fármacos como fenitoína, carbamazepina, litio y benzodiacepinas.' },
          { t: 'Subaguda y crónica', d: 'Tumor, paraneoplásica, alcohol, B12, tiroides, celíaca',
            say: 'Si es subaguda, piensa en tumores y en síndromes paraneoplásicos, como el anti Yo en cáncer de mama y ovario. Si es crónica: alcoholismo, hipotiroidismo, déficit de vitamina B doce, E o tiamina, enfermedad celíaca, esclerosis múltiple y ataxias hereditarias. Corriges lo reversible, pides resonancia, kinesioterapia, y derivas a neurología.' },
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
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Respuesta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Segundos, al girar en la cama', 'VPPB: Dix-Hallpike y Epley', 'Betahistina o TAC'],
          say: 'Repasemos las trampas. Vértigo de segundos al girar en la cama: VPPB, se confirma con Dix-Hallpike y se trata con Epley. El error es la betahistina o la TAC.' },
        { cells: ['Días continuos, sin síntomas auditivos', 'Neuronitis vestibular', 'Menière o VPPB'],
          say: 'Vértigo continuo de días, sin síntomas auditivos: neuronitis vestibular.' },
        { cells: ['Horas, con hipoacusia y tinnitus', 'Enfermedad de Menière', 'Neuronitis vestibular'],
          say: 'Crisis de horas con hipoacusia fluctuante y tinnitus: Menière.' },
        { cells: ['Neuronitis vestibular', 'Sedantes solo 48–72 h', 'Mantenerlos semanas'],
          say: 'En la neuronitis, sedantes vestibulares solo por cuarenta y ocho a setenta y dos horas. Mantenerlos retrasa la compensación.' },
        { cells: ['Vértigo continuo con impulso cefálico normal', 'Sospechar ACV de fosa posterior', 'Tranquilizarse porque es normal'],
          say: 'Vértigo continuo con impulso cefálico normal: sospecha un ACV. Es la paradoja: el test normal es el preocupante.' },
        { cells: ['Nistagmo vertical o que cambia de dirección', 'Central: código ACV', 'Dimenhidrinato y alta'],
          say: 'Nistagmo vertical o que cambia de dirección: central, y se activa el código ACV.' },
        { cells: ['Vértigo con TAC normal', 'No descarta infarto de fosa posterior', 'Dar de alta'],
          say: 'Y una TAC normal no descarta un infarto de fosa posterior. Si el HINTS es central, el paciente no se va a la casa.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 68 años, hipertenso y diabético, con vértigo continuo desde hace 10 horas, vómitos e inestabilidad. No puede mantenerse de pie sin apoyo. Sin hipoacusia. Impulso cefálico sin sacada correctiva hacia ambos lados; nistagmo horizontal que bate a la derecha al mirar a la derecha y a la izquierda al mirar a la izquierda. TAC de encéfalo sin contraste normal.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Dimenhidrinato EV y alta con control, porque la TAC es normal' },
        { letter: 'B', text: 'Maniobra de Epley' },
        { letter: 'C', text: 'Activar código ACV, hospitalizar en UTAC y angio-RM urgente' },
        { letter: 'D', text: 'Betahistina 24 mg c/12 h y restricción de sal' },
        { letter: 'E', text: 'Sedantes vestibulares por 3 semanas y rehabilitación vestibular' },
      ],
      correct: 'C',
      explanation: 'Síndrome vestibular agudo en un paciente vascular con HINTS central: impulso cefálico normal y nistagmo que cambia de dirección, más incapacidad de mantenerse de pie. La TAC normal no descarta un infarto de fosa posterior: se activa el código ACV, se hospitaliza en UTAC (GES 37) y se pide angio-RM urgente.',
      say: {
        stem: 'Vamos con un caso. Hombre de sesenta y ocho años, hipertenso y diabético, con diez horas de vértigo continuo, vómitos e inestabilidad; no puede estar de pie sin apoyo. No tiene hipoacusia. El impulso cefálico no muestra sacada correctiva, y el nistagmo bate a la derecha al mirar a la derecha y a la izquierda al mirar a la izquierda. La TAC sin contraste es normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: dimenhidrinato y alta porque la TAC es normal, maniobra de Epley, activar el código ACV con hospitalización y angio resonancia, betahistina con restricción de sal, o sedantes por tres semanas. Piénsalo.',
        answer: 'Es la C. Parece una neuronitis, pero el HINTS es central: el impulso cefálico es normal, y eso es la paradoja; el nistagmo cambia de dirección; y el paciente no puede pararse. El distractor tentador es la A, apoyada en la TAC normal, pero la TAC no ve bien la fosa posterior. Este paciente tiene un infarto de cerebelo o tronco hasta demostrar lo contrario.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2022 · Pregunta 168',
      stem: 'Un paciente de 35 años presenta un golpe en la cabeza, debido a una caída a nivel, hace un mes. Desde entonces ha presentado reiterados episodios de vértigo intenso, de segundos de duración, que aparece con algunos movimientos de la cabeza. No tiene síntomas auditivos y su examen neurológico muestra movilidad coordinada y conservada, sin alteraciones de la marcha ni del examen de pares craneanos. Los síntomas se reproducen con las maniobras de Dix-Hallpike.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Difenidol 25 mg al día por 7 días' },
        { letter: 'B', text: 'Betahistina 8 mg cada 12 horas por 1 mes' },
        { letter: 'C', text: 'Solicitar prueba calórica' },
        { letter: 'D', text: 'Solicitar resonancia magnética nuclear de troncoencéfalo y cerebro' },
        { letter: 'E', text: 'Realizar maniobras de reposición vestibular' },
      ],
      correct: 'E',
      explanation: 'Vértigo de segundos gatillado por movimientos de la cabeza, sin síntomas auditivos ni focalidad, con Dix-Hallpike positivo: VPPB (el traumatismo de cráneo puede desprender otoconias). Se trata con maniobras de reposición (Epley); no se indican fármacos ni neuroimágenes.',
      say: {
        stem: 'Ahora preguntas reales. Esta es del EUNACOM de diciembre de dos mil veintidós. Paciente de treinta y cinco años que hace un mes se golpeó la cabeza en una caída. Desde entonces tiene episodios de vértigo intenso, de segundos, con algunos movimientos de la cabeza. Sin síntomas auditivos, con examen neurológico normal, y los síntomas se reproducen con el Dix-Hallpike.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: difenidol por siete días, betahistina por un mes, prueba calórica, resonancia de tronco y cerebro, o maniobras de reposición vestibular. Piénsalo.',
        answer: 'Es la E, maniobras de reposición. Segundos, gatillado por la posición, sin síntomas auditivos, y Dix-Hallpike positivo: es un VPPB. El golpe en la cabeza puede soltar los cristales. La resonancia tienta por el antecedente de trauma, pero el examen neurológico es normal y en el VPPB no se piden imágenes. Y ni el difenidol ni la betahistina mueven cristales.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 88',
      stem: 'Una paciente de 43 años presenta vértigo de 5 días de evolución, intenso, asociado a vómitos, lo que limita sus actividades. No tiene síntomas auditivos.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Parálisis cocleovestibular' },
        { letter: 'B', text: 'Vértigo postural' },
        { letter: 'C', text: 'Hídrops endolinfático' },
        { letter: 'D', text: 'Neuronitis vestibular' },
        { letter: 'E', text: 'Neurinoma del acústico' },
      ],
      correct: 'D',
      explanation: 'Vértigo intenso y continuo de días, con vómitos y sin síntomas auditivos: neuronitis vestibular. La ausencia de síntomas auditivos descarta la parálisis cocleovestibular y el hídrops endolinfático (Menière); el vértigo postural dura segundos.',
      say: {
        stem: 'La siguiente es del EUNACOM de agosto de dos mil veintiuno. Paciente de cuarenta y tres años con cinco días de vértigo intenso y vómitos, que le limitan sus actividades. No tiene síntomas auditivos.',
        question: 'El diagnóstico más probable es:',
        options: 'Las opciones: parálisis cocleovestibular, vértigo postural, hídrops endolinfático, neuronitis vestibular, o neurinoma del acústico. Piénsalo.',
        answer: 'Es la D, neuronitis vestibular. Usa la duración: días de vértigo continuo. Y usa la audición: sin síntomas auditivos. El hídrops endolinfático, que es la enfermedad de Menière, tienta porque también da vértigo intenso, pero dura horas y trae hipoacusia y tinnitus. El vértigo postural dura segundos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 154',
      stem: 'Paciente de 50 años con episodios de vértigo rotatorio, tinnitus unilateral fluctuante e hipoacusia neurosensorial ipsilateral. Los síntomas duran horas. Audiometría disponible en una semana.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Enfermedad de Ménière' },
        { letter: 'B', text: 'Vértigo posicional paroxístico benigno (VPPB)' },
        { letter: 'C', text: 'Neuritis vestibular' },
        { letter: 'D', text: 'ACV de fosa posterior' },
        { letter: 'E', text: 'Schwannoma vestibular' },
      ],
      correct: 'A',
      explanation: 'Vértigo episódico de horas, con hipoacusia neurosensorial y tinnitus fluctuantes del mismo lado: enfermedad de Menière. El VPPB dura segundos y no tiene hipoacusia; la neuronitis dura días y no tiene síntomas auditivos.',
      say: {
        stem: 'La última es del EUNACOM de julio de dos mil veinticinco. Paciente de cincuenta años con episodios de vértigo rotatorio, tinnitus fluctuante de un lado e hipoacusia neurosensorial del mismo lado. Los síntomas duran horas.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: enfermedad de Menière, VPPB, neuritis vestibular, ACV de fosa posterior, o schwannoma vestibular. Piénsalo.',
        answer: 'Es la A, enfermedad de Menière. Episodios de horas, con hipoacusia y tinnitus fluctuantes del mismo lado. El schwannoma vestibular tienta por la hipoacusia y el tinnitus unilaterales, pero es progresivo, no da crisis de vértigo de horas que van y vienen. Fíjate cómo en las tres preguntas la duración ordenó el diagnóstico: segundos, días y horas.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.10.1.025 · Síndromes vertiginosos periféricos",
      "stem": "Mujer de 57 años con 5 días de episodios de vértigo rotatorio intenso de menos de 1 minuto, que aparecen al darse vuelta en la cama o al mirar hacia arriba, con náuseas. Sin hipoacusia, tinnitus ni síntomas neurológicos. Examen neurológico normal. Maniobra de Dix-Hallpike derecha: tras una latencia de 5 segundos, nistagmo torsional geotrópico y vertical hacia arriba, que dura 20 segundos y se agota al repetirla.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Betahistina 24 mg cada 12 horas por 3 meses"
        },
        {
          "letter": "B",
          "text": "Dimenhidrinato diario por 3 semanas"
        },
        {
          "letter": "C",
          "text": "RM de encéfalo urgente"
        },
        {
          "letter": "D",
          "text": "Prednisona oral por 10 días"
        },
        {
          "letter": "E",
          "text": "Maniobra de reposición de Epley"
        }
      ],
      "correct": "E",
      "explanation": "Vértigo posicional breve con Dix-Hallpike positivo (latencia, nistagmo torsional geotrópico, duración menor de 1 minuto y fatigable): vértigo posicional paroxístico benigno del canal semicircular posterior derecho. Se trata con la maniobra de reposición de Epley, efectiva en la mayoría con 1 o 2 sesiones. Los sedantes vestibulares retrasan la compensación; no requiere imagen.",
      "say": {
        "stem": "Una mujer de cincuenta y siete años tiene episodios de vértigo de segundos al darse vuelta en la cama. La maniobra de Dix Hallpike a derecha provoca, tras una breve latencia, nistagmo torsional que se agota, con examen neurológico normal.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: betahistina por tres meses, dimenhidrinato por tres semanas, resonancia urgente, prednisona oral o maniobra de Epley. Piénsalo.",
        "answer": "Es la E. Es un vértigo posicional paroxístico benigno del canal posterior, y la maniobra de Epley reposiciona los otolitos y lo resuelve. El dimenhidrinato tienta para las náuseas, pero mantenido por semanas retrasa la compensación vestibular."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.10.1.018 · Síndrome atáxico",
      "stem": "Hombre de 68 años, hipertenso, presenta en forma súbita vértigo, vómitos, cefalea occipital e imposibilidad de mantenerse de pie. Al examen tiene dismetría en la prueba índice-nariz y disdiadococinesia derechas, marcha con lateralización a derecha y nistagmo que cambia de dirección con la mirada.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Maniobra de Epley"
        },
        {
          "letter": "B",
          "text": "Betahistina y control ambulatorio"
        },
        {
          "letter": "C",
          "text": "Corticoides por neuronitis vestibular"
        },
        {
          "letter": "D",
          "text": "Audiometría"
        },
        {
          "letter": "E",
          "text": "Neuroimagen urgente (TAC o resonancia de cerebro) por sospecha de lesión cerebelosa"
        }
      ],
      "correct": "E",
      "explanation": "Un síndrome atáxico agudo con dismetría y disdiadococinesia ipsilaterales, cefalea y nistagmo que cambia de dirección es de origen central: debe descartarse hemorragia o infarto cerebeloso con neuroimagen urgente, porque el edema puede comprimir el tronco y causar hidrocefalia, requiriendo cirugía. Epley y betahistina son para cuadros periféricos.",
      "say": {
        "stem": "Hombre de sesenta y ocho años, hipertenso, con vértigo súbito, cefalea occipital, dismetría derecha y nistagmo que cambia de dirección.",
        "question": "¿Qué haces?",
        "options": "Las opciones: maniobra de Epley, betahistina, corticoides, audiometría o neuroimagen urgente. Piénsalo.",
        "answer": "Es la E. Neuroimagen urgente, porque los signos cerebelosos y el nistagmo que cambia de dirección indican causa central. La betahistina tienta por el vértigo, pero es para cuadros periféricos."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La duración ordena', tag: 'Periférico', kind: 'key', items: [
          { t: 'Segundos y posicional: VPPB', d: 'Dix-Hallpike y Epley, sin fármacos',
            say: 'Cerremos con las reglas de oro. Segundos y gatillado por la posición: VPPB, que se confirma con Dix-Hallpike y se cura con Epley, sin fármacos ni imágenes.' },
          { t: 'Días, sin audición afectada: neuronitis', d: 'Sedantes solo 48–72 h',
            say: 'Días de vértigo continuo sin síntomas auditivos: neuronitis vestibular, con sedantes solo por cuarenta y ocho a setenta y dos horas.' },
          { t: 'Horas, con hipoacusia: Menière', d: 'Sal, diurético, betahistina',
            say: 'Horas, con hipoacusia fluctuante y tinnitus: Menière, con poca sal, diurético y betahistina.' },
        ] },
        { title: 'El ACV escondido', tag: 'HINTS', kind: 'alert', items: [
          { t: 'Impulso normal, nistagmo que cambia, skew', d: 'Basta uno: código ACV',
            say: 'En el vértigo continuo, busca el ACV con el HINTS: impulso cefálico normal, nistagmo que cambia de dirección o skew presente. Basta uno, o un paciente que no puede estar de pie, para activar el código ACV.' },
          { t: 'La TAC normal no descarta', d: 'Angio-RM urgente, UTAC',
            say: 'Y recuerda que la TAC normal no descarta un infarto de fosa posterior. Si te llevas una sola idea de hoy: en el vértigo, la duración te dice qué periférico es, y el HINTS te dice si en realidad es un ACV. En la próxima clase vemos el delirium. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Vértigo agudo: VPPB, periférico o ACV',
    root: N('start', 'Vértigo verdadero', 'Sensación de giro',
      'Paciente con vértigo verdadero, una sensación ilusoria de giro. La primera pregunta es cómo se comporta en el tiempo.',
      ['', N('q', '¿Episodios de segundos con la posición?', 'Acostarse, girar, mirar arriba',
        '¿Son crisis de segundos, gatilladas por la posición de la cabeza?',
        ['Sí', N('ok', 'VPPB: Dix-Hallpike y Epley', 'Sin imágenes ni fármacos',
          'Si son segundos con la posición, es un VPPB: Dix-Hallpike para confirmar y Epley para curar, sin imágenes ni fármacos.')],
        ['No, episodios de horas', N('do', 'Menière', 'Audiometría; sal, diurético, betahistina',
          'Si son crisis de horas con hipoacusia y tinnitus, piensa en Menière: audiometría, restricción de sal, diurético y betahistina.')],
        ['No, continuo de días', N('q', 'HINTS: ¿algún signo central?', 'Impulso, nistagmo, skew, bipedestación',
          'Si el vértigo es continuo, es un síndrome vestibular agudo, y haces el HINTS.',
          ['Todo periférico', N('do', 'Neuronitis vestibular', 'Sedantes solo 48–72 h',
            'Si todo es periférico, con impulso anormal, nistagmo unidireccional y sin skew, es una neuronitis vestibular: sedantes solo por cuarenta y ocho a setenta y dos horas.')],
          ['Algún signo central', N('alert', 'Código ACV: UTAC y angio-RM', 'GES 37; la TAC no descarta',
            'Si hay un solo signo central, activas el código ACV, hospitalizas en la unidad de ataque cerebrovascular y pides una angio resonancia urgente.')])])]),
  },
};
