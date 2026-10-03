// Clase 15.17 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_oftalmologia.cjs (oftal-17).
// El código de Perfil de la clase (6.02.1.030) NO trae preguntas reales sobre celulitis
// preseptal/orbitaria en el banco: todas las que devuelve son en realidad sobre uveítis o
// glaucoma agudo (mismo error de código descrito en REVISION_CONTENIDO.md), incluida
// "EUNACOM Diciembre 2022 · Pregunta 46", que además está en la lista de preguntas con datos
// corruptos y nunca se usa. Se buscó entonces por texto ("celulitis orbitaria", "proptosis",
// "oftalmoplejía", "seno cavernoso") y se usan las dos preguntas reales donde el enunciado por
// sí solo, sin depender de ninguna imagen, decide el diagnóstico de celulitis orbitaria: EUNACOM
// Diciembre 2017 · Pregunta 122 (código 2.01.1.005) y EUNACOM Julio 2013 · Pregunta 44 (código
// 6.02.1.005). Se descarta "EUNACOM Diciembre 2024 · Pregunta 1" (código 6.02.2.007): su
// enunciado y sus alternativas llegan corruptos (la opción A queda incrustada dentro del
// enunciado, hay dos alternativas marcadas "C"), el mismo tipo de dato dañado ya documentado
// para otras preguntas del banco.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'oftal-17',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Un párpado hinchado que puede ser un antibiótico oral o una hospitalización de urgencia',
      say: 'Bienvenidos. Hoy vemos celulitis preseptal contra celulitis orbitaria, uno de los diagnósticos diferenciales más rentables de todo el examen. Los dos cuadros pueden empezar viéndose igual, un párpado rojo e hinchado, pero uno se trata con un antibiótico oral en la casa y el otro puede terminar en meningitis o trombosis cerebral si no lo hospitalizas a tiempo. La diferencia la decide una barrera de milímetros. Vamos a verla.',
    },

    {
      type: 'flow',
      kicker: 'Anatomía',
      title: 'El septum orbitario: la barrera que separa dos enfermedades distintas',
      nodes: [
        { id: 'sep', col: 1, row: 1, k: 'start', t: 'Septum orbitario', s: 'Lámina fibrosa del reborde óseo al tarso' },
        { id: 'pre', col: 0, row: 0, k: 'cause', t: 'Infección por delante', s: 'Herida, picadura, orzuelo, dacriocistitis' },
        { id: 'pos', col: 0, row: 2, k: 'cause', t: 'Infección por detrás', s: 'Sinusitis etmoidal en el 85 a 90 por ciento' },
        { id: 'presep', col: 2, row: 0, k: 'good', t: 'Celulitis preseptal', s: 'Solo tejido subcutáneo' },
        { id: 'orbit', col: 2, row: 2, k: 'risk', t: 'Celulitis orbitaria', s: 'Grasa, músculos y nervio óptico' },
      ],
      edges: [
        { from: 'pre', to: 'sep' }, { from: 'sep', to: 'presep' },
        { from: 'pos', to: 'sep' }, { from: 'sep', to: 'orbit' },
      ],
      steps: [
        { show: ['sep'], note: 'Una lámina fibrosa que actúa de muralla',
          say: 'Empecemos por la anatomía, porque ahí está toda la lógica del tema. El septum orbitario es una lámina fibrosa densa que va desde el periostio del reborde orbitario hasta las placas tarsales de los párpados, y funciona como una muralla física frente a los microorganismos.' },
        { show: ['pre'], note: 'Piel rota: picadura, herida, orzuelo',
          say: 'Si la infección se queda por delante de esa muralla, hablamos de celulitis preseptal. Suele entrar por una rotura de la piel: una picadura de insecto, un rasguño, un orzuelo o una dacriocistitis. Los gérmenes son el estafilococo dorado y el estreptococo pyogenes, los mismos de cualquier infección cutánea.' },
        { show: ['pos'], note: 'La lámina papirácea es finísima',
          say: 'Pero si la infección atraviesa el septum, ya estamos hablando de celulitis orbitaria, y en el ochenta y cinco a noventa por ciento de los casos el origen es una sinusitis paranasal, sobre todo la etmoidal, porque la lámina papirácea que separa el etmoides de la órbita es extremadamente delgada.' },
        { show: ['presep'], note: 'Se queda en el tejido subcutáneo',
          say: 'La preseptal se queda en el tejido subcutáneo del párpado, sin tocar el contenido de la órbita. Nada más, y eso es justo lo que la hace un cuadro tan benigno.' },
        { show: ['orbit'], note: 'Ahora sí compromete estructuras que importan',
          say: 'La orbitaria invade la grasa, los músculos extraoculares y llega cerca del nervio óptico. Y ese es el punto: un mismo párpado rojo puede ser una infección trivial o una emergencia, y lo que las separa es apenas una lámina de milímetros.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología',
      title: 'Los tres signos que certifican compromiso orbitario',
      cards: [
        { title: 'Lo que comparten los dos cuadros', tag: 'No sirve para diferenciar', kind: 'normal', items: [
          { t: 'Eritema, edema tenso y fiebre', d: 'Presentes en ambos, por eso no bastan solos',
            say: 'Antes de ir a las diferencias, un dato importante: eritema, edema palpebral tenso, calor y fiebre están presentes en los dos cuadros. Solos, no te sirven para diferenciar nada, así que el examen te va a poner esos hallazgos en las dos alternativas para obligarte a buscar los signos que sí decidan.' },
        ] },
        { title: 'Los tres signos cardinales de invasión orbitaria', tag: 'Si aparece uno, ya es orbitaria', kind: 'alert', items: [
          { t: 'Oftalmoplejía dolorosa', d: 'Dolor al mover el ojo, motilidad limitada',
            say: 'Lo que sí separa los cuadros son tres signos. El primero es la oftalmoplejía dolorosa: la inflamación de los músculos extraoculares limita el movimiento del ojo y duele al intentarlo. En la preseptal, el ojo se mueve libre, simétrico e indoloro en todas las direcciones.' },
          { t: 'Proptosis', d: 'El globo ocular empujado hacia adelante',
            say: 'El segundo es la proptosis: el pus y el edema dentro de la cavidad ósea cerrada empujan el ojo hacia adelante. En la preseptal no hay proptosis, porque la infección nunca entra a esa cavidad.' },
          { t: 'Baja de agudeza visual y defecto pupilar', d: 'Por compresión o isquemia del nervio óptico',
            say: 'Y el tercero, el más grave: disminución de la agudeza visual, discromatopsia y defecto pupilar aferente relativo, por compresión o isquemia del nervio óptico. En la preseptal, la visión y las pupilas están siempre normales. Basta un solo signo de estos tres para que ya no sea preseptal.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Complicación fatal',
      title: 'Cuando la infección cruza al seno cavernoso',
      nodes: [
        { id: 'ret', col: 0, row: 1, k: 'cause', t: 'Venas oftálmicas sin válvulas', s: 'La infección puede subir sin freno' },
        { id: 'cav', col: 1, row: 1, k: 'mech', t: 'Trombosis del seno cavernoso', s: 'Extensión intracraneana' },
        { id: 'bil', col: 2, row: 0, k: 'risk', t: 'Bilateralización', s: 'Cruza al ojo contralateral' },
        { id: 'par', col: 2, row: 1, k: 'risk', t: 'Parálisis de pares tres, cuatro y seis', s: 'Oftalmoplejía completa, bilateral' },
        { id: 'tri', col: 2, row: 2, k: 'risk', t: 'Compromiso de conciencia y fiebre en agujas', s: 'Estupor, cefalea frontal severa' },
      ],
      edges: [
        { from: 'ret', to: 'cav' }, { from: 'cav', to: 'bil' }, { from: 'cav', to: 'par' }, { from: 'cav', to: 'tri' },
      ],
      steps: [
        { show: ['ret'], note: 'Sin válvulas, el flujo puede invertirse',
          say: 'Y aquí está la complicación que hace que este tema sea tan urgente. Las venas oftálmicas no tienen válvulas, así que la infección puede propagarse hacia atrás, hacia el cráneo, sin ningún freno mecánico.' },
        { show: ['cav'], note: 'Una estructura venosa que atraviesan varios pares craneales',
          say: 'Y ese camino lleva al seno cavernoso, una estructura venosa por la que pasan los pares craneales tercero, cuarto y sexto, además de las ramas del trigémino. Si se infecta y se trombosa, es una emergencia neuroquirúrgica de mortalidad muy alta.' },
        { show: ['bil'], note: 'La pista más fácil de reconocer',
          say: 'La señal más fácil de reconocer, y la que se pregunta, es la bilateralización: el edema y la proptosis que estaban en un ojo empiezan a aparecer también en el otro.' },
        { show: ['par'], note: 'Ya no es solo el nervio óptico',
          say: 'Se suma la parálisis de los pares tercero, cuarto y sexto, con oftalmoplejía completa y bilateral, porque el seno cavernoso los atraviesa a los dos lados.' },
        { show: ['tri'], note: 'El cuadro se vuelve sistémico',
          say: 'Y aparece fiebre en agujas, cefalea frontal severa y compromiso de conciencia, que puede llegar hasta el estupor. También puede haber hipoestesia en la frente y la mejilla, por compromiso de las ramas del trigémino que también atraviesan el seno cavernoso. Si ves bilateralización en una celulitis orbitaria, piensa de inmediato en trombosis del seno cavernoso.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Estudio y tratamiento',
      title: 'La imagen que confirma y el tratamiento que no se negocia',
      cards: [
        { title: 'Imagen', tag: 'Obligatoria ante cualquier sospecha', kind: 'key', items: [
          { t: 'TAC de órbita, senos y encéfalo con contraste', d: 'Confirma la sinusitis, busca absceso, descarta extensión intracraneana',
            say: 'Ante cualquier sospecha de celulitis orbitaria, el examen obligatorio es la tomografía computada de órbita, senos paranasales y encéfalo con contraste endovenoso. Confirma la sinusitis de origen, distingue un flemón de un absceso subperióstico, y descarta la extensión intracraneana.' },
        ] },
        { title: 'Celulitis preseptal', tag: 'Manejo ambulatorio', kind: 'pharma', items: [
          { t: 'Amoxicilina con ácido clavulánico oral', d: 'Siete a diez días, con control clínico a las veinticuatro horas',
            say: 'La celulitis preseptal, en un paciente estable, se trata en la casa con amoxicilina y ácido clavulánico oral, por siete a diez días, con control clínico obligatorio a las veinticuatro horas.' },
        ] },
        { title: 'Celulitis orbitaria', tag: 'Hospitalización obligatoria', kind: 'alert', items: [
          { t: 'Cubre neumococo, estafilococo y anaerobios', d: 'Los gérmenes típicos de una sinusitis complicada',
            say: 'La cobertura antibiótica se elige pensando en los gérmenes de una sinusitis complicada: Streptococcus pneumoniae, Staphylococcus aureus, incluyendo cepas resistentes a meticilina, y anaerobios orofaríngeos cuando el foco es más profundo.' },
          { t: 'Ceftriaxona más vancomicina endovenosas', d: 'A veces se agrega metronidazol',
            say: 'Por eso el esquema es ceftriaxona más vancomicina endovenosas, y a veces se agrega metronidazol si hay sospecha de anaerobios.' },
          { t: 'Cirugía si hay absceso grande o falla del tratamiento', d: 'Mayor a un centímetro, baja de visión, o sin mejoría en cuarenta y ocho horas',
            say: 'Y se evalúa drenaje quirúrgico con otorrinolaringología si el absceso subperióstico mide más de un centímetro, si cae la agudeza visual, o si no mejora después de cuarenta y ocho horas de antibiótico endovenoso.' },
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
      title: 'Preseptal contra orbitaria, signo por signo',
      head: ['Hallazgo', 'Celulitis preseptal', 'Celulitis orbitaria'],
      rows: [
        { cells: ['Origen habitual', 'Herida, picadura, orzuelo', 'Sinusitis etmoidal en la gran mayoría'],
          say: 'Repasemos las trampas. El origen: preseptal viene de una herida o picadura; orbitaria, casi siempre de una sinusitis etmoidal.' },
        { cells: ['Motilidad ocular', 'Normal e indolora', 'Oftalmoplejía dolorosa'],
          say: 'La motilidad ocular es normal e indolora en la preseptal; dolorosa y limitada en la orbitaria.' },
        { cells: ['Proptosis', 'Ausente', 'Presente'],
          say: 'La proptosis está ausente en la preseptal y presente en la orbitaria.' },
        { cells: ['Agudeza visual', 'Normal', 'Puede caer, con defecto pupilar aferente'],
          say: 'La visión es normal en la preseptal; en la orbitaria puede caer, con defecto pupilar aferente.' },
        { cells: ['Imagen', 'No es necesaria si el cuadro es claro', 'Tomografía computada obligatoria'],
          say: 'La imagen no es necesaria si el cuadro preseptal es claro; en la orbitaria, la tomografía es obligatoria.' },
        { cells: ['Trampa clásica', 'Hospitalizar y pedir tomografía de más', 'Tratar en la casa con antibiótico oral'],
          say: 'Y las trampas clásicas: hospitalizar y pedir tomografía a una preseptal simple es exceso; mandar a la casa con antibiótico oral a una orbitaria es el error que puede costarle la visión o la vida al paciente.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Clasificación de Chandler',
      title: 'Los cinco escalones de la infección orbitaria',
      head: ['Estadio', 'Qué está pasando', 'Conducta'],
      rows: [
        { cells: ['Uno: celulitis preseptal', 'Edema y eritema sin invadir la órbita', 'Tratamiento oral ambulatorio'],
          say: 'La clasificación de Chandler ordena esto en cinco escalones, y ayuda a no perderse. El primero es la celulitis preseptal: edema sin invadir la órbita, tratamiento oral ambulatorio.' },
        { cells: ['Dos: celulitis orbitaria', 'Infiltración difusa de la grasa orbitaria', 'Hospitalización con antibióticos endovenosos'],
          say: 'El segundo es la celulitis orbitaria propiamente tal: infiltración difusa de la grasa orbitaria, sin colección todavía. Ya requiere hospitalización con antibióticos endovenosos.' },
        { cells: ['Tres: absceso subperióstico', 'Pus entre el hueso y la periórbita', 'Tomografía con contraste y drenaje quirúrgico'],
          say: 'El tercero es el absceso subperióstico: el pus ya se acumuló entre el hueso y la periórbita, desplazando el globo ocular. Ahí se pide tomografía con contraste y se evalúa drenaje quirúrgico.' },
        { cells: ['Cuatro: absceso orbitario', 'Colección purulenta dentro de la grasa orbitaria', 'Drenaje quirúrgico de urgencia'],
          say: 'El cuarto es el absceso orbitario, ya dentro de la grasa orbitaria, con oftalmoplejía total y riesgo real de ceguera: drenaje quirúrgico de urgencia.' },
        { cells: ['Cinco: trombosis del seno cavernoso', 'Tromboflebitis séptica que cruza al otro lado', 'Unidad crítica y antibióticos endovenosos en dosis altas'],
          say: 'Y el quinto escalón es la trombosis del seno cavernoso, con la bilateralización que ya vimos: unidad crítica y antibióticos endovenosos en dosis altas, evaluando anticoagulación.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Niño de 6 años, con antecedente de picadura de insecto en el párpado hace 2 días, consulta por edema y eritema palpebral derecho, con fiebre de 38,2 grados. Los movimientos oculares están conservados, sin dolor al moverlos, no hay proptosis y la agudeza visual es 20/20 en ambos ojos.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Hospitalizar de inmediato e iniciar ceftriaxona más vancomicina endovenosas' },
        { letter: 'B', text: 'Solicitar tomografía computada de órbita antes de definir el tratamiento' },
        { letter: 'C', text: 'Iniciar amoxicilina con ácido clavulánico oral en forma ambulatoria, con control clínico en 24 horas' },
        { letter: 'D', text: 'Indicar corticoides orales en dosis altas para bajar el edema' },
        { letter: 'E', text: 'Derivar de urgencia a neurocirugía por sospecha de trombosis del seno cavernoso' },
      ],
      correct: 'C',
      explanation: 'La motilidad ocular conservada e indolora, la ausencia de proptosis y la agudeza visual normal descartan compromiso orbitario y confirman una celulitis preseptal secundaria a la picadura. El manejo es ambulatorio con amoxicilina y ácido clavulánico oral, con control a las 24 horas; ni la hospitalización ni la tomografía son necesarias de entrada.',
      say: {
        stem: 'Vamos con un caso. Un niño de seis años, con una picadura de insecto en el párpado hace dos días, consulta por edema y eritema palpebral derecho, con fiebre de treinta y ocho coma dos grados. Los movimientos oculares están conservados, sin dolor al moverlos, no hay proptosis y la agudeza visual es normal en ambos ojos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: hospitalizar e iniciar ceftriaxona más vancomicina, pedir tomografía antes de decidir, iniciar amoxicilina con ácido clavulánico oral en forma ambulatoria con control en veinticuatro horas, indicar corticoides orales en dosis altas, o derivar de urgencia por trombosis del seno cavernoso. Piénsalo.',
        answer: 'Es la C. Repasa los tres signos que buscamos: motilidad normal e indolora, sin proptosis, visión normal. Ninguno está presente, así que esto es una celulitis preseptal por la picadura, no orbitaria. Se trata en la casa con amoxicilina y ácido clavulánico, y control a las veinticuatro horas. La hospitalización, la tomografía y la sospecha de trombosis son todas para el cuadro orbitario, que aquí no existe.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 122',
      stem: 'Una niña de 4 años presenta un cuadro catarral, con abundante rinorrea. Evoluciona con eritema y dolor periocular derecho, asociado a proptosis.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Celulitis preorbitaria' },
        { letter: 'B', text: 'Celulitis orbitaria' },
        { letter: 'C', text: 'Orbitopatía distiroidea' },
        { letter: 'D', text: 'Pseudotumor orbitario' },
        { letter: 'E', text: 'Etmoiditis aguda' },
      ],
      correct: 'B',
      explanation: 'La proptosis es la que define el compromiso orbitario, y por eso la respuesta es celulitis orbitaria. Es secundaria a la sinusitis que acompaña al cuadro catarral, casi siempre etmoidal en una niña de esta edad. La celulitis preseptal, por definición, no da proptosis.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil diecisiete. Una niña de cuatro años presenta un cuadro catarral, con abundante secreción nasal. Evoluciona con enrojecimiento y dolor alrededor del ojo derecho, junto con proptosis.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: celulitis preorbitaria, celulitis orbitaria, orbitopatía distiroidea, pseudotumor orbitario, o etmoiditis aguda. Piénsalo.',
        answer: 'Es la B. La palabra que resuelve la pregunta es proptosis: eso solo aparece cuando la infección ya cruzó el septum orbitario. Además, el cuadro catarral previo apunta al origen más frecuente, la sinusitis etmoidal. La celulitis preorbitaria es la trampa más tentadora, porque también da un párpado inflamado, pero por definición nunca da proptosis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 44',
      stem: 'Un paciente de 35 años, con cuadro de ojo rojo asociado a secreción mucopurulenta desde hace un día, por lo cual se le indicó colirio de cloranfenicol cada 8 horas, evoluciona con aumento del enrojecimiento, edema palpebral y quemosis.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Alergia al cloranfenicol' },
        { letter: 'B', text: 'Celulitis orbitaria' },
        { letter: 'C', text: 'Obstrucción lacrimal' },
        { letter: 'D', text: 'Chalazión' },
        { letter: 'E', text: 'Absceso tarsal' },
      ],
      correct: 'B',
      explanation: 'Una conjuntivitis bacteriana que se complica con más eritema, edema palpebral progresivo y quemosis, en vez de mejorar con el tratamiento tópico, orienta a que la infección superó la conjuntiva y avanzó hacia el tejido orbitario. La alergia al cloranfenicol es mucho menos frecuente y no explica la quemosis progresiva.',
      say: {
        stem: 'Una última pregunta real, del EUNACOM de julio de dos mil trece, con otro punto de entrada. Un paciente de treinta y cinco años, con ojo rojo y secreción mucopurulenta desde hace un día, tratado con colirio de cloranfenicol cada ocho horas, evoluciona con más enrojecimiento, edema palpebral y quemosis.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: alergia al cloranfenicol, celulitis orbitaria, obstrucción lacrimal, chalazión, o absceso tarsal. Piénsalo.',
        answer: 'Es la B. Esto empezó como una conjuntivitis bacteriana simple, pero en vez de mejorar con el tratamiento, empeora con más edema y quemosis, la señal de que la infección atravesó el septum y se volvió celulitis orbitaria. La alergia al cloranfenicol es la trampa, pero es mucho menos frecuente y no explica esa progresión tan agresiva.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Los tres signos', tag: 'Basta uno solo', kind: 'key', items: [
          { t: 'Oftalmoplejía dolorosa, proptosis, o baja visual con DPAR', d: 'Cualquiera de los tres confirma orbitaria',
            say: 'Cerremos con las reglas de oro. Oftalmoplejía dolorosa, proptosis, o baja de visión con defecto pupilar aferente: basta que aparezca uno solo para que ya no sea preseptal, sino orbitaria.' },
        ] },
        { title: 'Estudio y tratamiento', tag: 'Ambulatorio contra hospitalización', kind: 'pharma', items: [
          { t: 'Preseptal: amoxicilina con clavulánico oral', d: 'Ambulatorio, control en veinticuatro horas',
            say: 'La preseptal se trata en la casa, con amoxicilina y ácido clavulánico oral, y control a las veinticuatro horas.' },
          { t: 'Orbitaria: tomografía y hospitalización', d: 'Ceftriaxona más vancomicina endovenosas',
            say: 'La orbitaria exige tomografía de órbita con contraste y hospitalización, con ceftriaxona más vancomicina endovenosas.' },
        ] },
        { title: 'Alarma máxima', tag: 'Trombosis del seno cavernoso', kind: 'alert', items: [
          { t: 'Bilateralización más oftalmoplejía completa', d: 'Emergencia neuroquirúrgica',
            say: 'Si te llevas una sola idea de hoy: la proptosis y la oftalmoplejía dolorosa son las que separan preseptal de orbitaria, y si esos signos se bilateralizan, piensa de inmediato en trombosis del seno cavernoso. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Párpado rojo e hinchado: decide entre celulitis preseptal y orbitaria',
    root: (() => {
      const uci = N('refer', 'Hospitalización en unidad crítica más antibióticos endovenosos altos', 'Anticoagulación según evaluación neuroquirúrgica',
        'Deriva de inmediato a una unidad crítica: la trombosis del seno cavernoso necesita antibióticos endovenosos en dosis altas y evaluación neuroquirúrgica.');
      const cavernoso = N('alert', 'Sospecha de trombosis del seno cavernoso', 'Emergencia de altísima mortalidad',
        'Sospecha trombosis del seno cavernoso: la infección cruzó por las venas oftálmicas sin válvulas hacia el cráneo.',
        ['', uci]);

      const cirugia = N('refer', 'Evaluación quirúrgica con otorrinolaringología', 'Absceso mayor a un centímetro, baja visual o sin mejoría en 48 horas',
        'Si el absceso subperióstico mide más de un centímetro, la visión cae, o no mejora en cuarenta y ocho horas, se evalúa drenaje quirúrgico con otorrinolaringología.');
      const atbEv = N('do', 'Hospitalizar con ceftriaxona más vancomicina endovenosas', 'Ambos siempre juntos, y metronidazol si hay sospecha de anaerobios',
        'Hospitaliza de inmediato e inicia ceftriaxona más vancomicina endovenosas.',
        ['', cirugia]);
      const tac = N('do', 'Tomografía de órbita, senos y encéfalo con contraste', 'Confirma la sinusitis y busca absceso',
        'Pide de urgencia una tomografía de órbita, senos paranasales y encéfalo con contraste, para confirmar la sinusitis de origen y buscar un absceso.',
        ['', atbEv]);
      const bilat = N('q', 'Los signos se están extendiendo al otro ojo', 'Bilateralización con oftalmoplejía completa',
        'Pregúntate si los signos empiezan a aparecer también en el ojo contrario.',
        ['sí, se bilateraliza', cavernoso],
        ['no, sigue unilateral', tac]);
      const orbitaria = N('alert', 'Sospecha de celulitis orbitaria', 'Al menos un signo de invasión profunda presente',
        'Con al menos uno de los tres signos presentes, sospecha celulitis orbitaria y revisa si ya se bilateralizó.',
        ['', bilat]);

      const ambulatorio = N('ok', 'Amoxicilina con ácido clavulánico oral', 'Siete a diez días, control clínico en veinticuatro horas',
        'Indica amoxicilina con ácido clavulánico oral por siete a diez días, y agenda un control clínico obligatorio en veinticuatro horas.');
      const preseptal = N('do', 'Sospecha de celulitis preseptal', 'Sin oftalmoplejía, sin proptosis, visión normal',
        'Con motilidad normal e indolora, sin proptosis y con visión normal, sospecha celulitis preseptal.',
        ['', ambulatorio]);

      const signosQ = N('q', 'Hay oftalmoplejía dolorosa, proptosis, o baja visual con defecto pupilar', 'Basta uno solo para pensar en orbitaria',
        'Busca los tres signos cardinales: dolor al mover el ojo, proptosis, o caída de la visión con defecto pupilar aferente. Basta uno solo.',
        ['sí, al menos uno', orbitaria],
        ['no, ninguno', preseptal]);

      return N('start', 'Párpado rojo, hinchado y con calor local', 'Unilateral, con o sin fiebre',
        'Ante un párpado rojo, hinchado y caliente, revisa primero la motilidad ocular, la proptosis y la agudeza visual, antes de pensar en cualquier antibiótico.',
        ['', signosQ]);
    })(),
  },
};
