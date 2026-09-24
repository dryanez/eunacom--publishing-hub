// Clase 1.3 — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_reumatologia.cjs (reuma-03).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'reuma-03',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Microscopía de luz polarizada, manejo de la crisis aguda y cuándo iniciar hipouricemiantes',
      say: 'Bienvenidos. Hoy cerramos el bloque de monoartritis con las artropatías microcristalinas: gota y condrocalcinosis. En el EUNACOM este tema tiene trampas clásicas: el ácido úrico normal en plena crisis, el alopurinol que jamás se parte en agudo, y la luz polarizada que define el diagnóstico por el color del cristal. Al terminar sabrás diferenciar urato de pirofosfato, calmar el dolor agudo y titular el tratamiento crónico con su profilaxis obligatoria. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Por qué precipita el ácido úrico?',
      nodes: [
        { id: 'hip', col: 0, row: 1, k: 'cause', t: 'Hiperuricemia crónica', s: '> 6.8 mg/dL de ácido úrico sérico' },
        { id: 'hipo', col: 1, row: 0, k: 'mech', t: '90% hipoexcreción renal', s: 'El riñón elimina poco urato' },
        { id: 'sob', col: 1, row: 2, k: 'mech', t: '10% sobreproducción', s: 'Lisis tumoral o déficit enzimático' },
        { id: 'gat', col: 2, row: 1, k: 'risk', t: 'Gatillantes agudos', s: 'Alcohol · carnes · tiazidas · estrés' },
        { id: 'pre', col: 3, row: 1, k: 'alert', t: 'Precipitación en la articulación', s: 'Cristales de urato monosódico' },
        { id: 'pod', col: 4, row: 1, k: 'alert', t: 'Podagra hiperaguda', s: 'Inflamasoma y dolor extremo' },
      ],
      edges: [
        { from: 'hip', to: 'hipo' },
        { from: 'hip', to: 'sob' },
        { from: 'hipo', to: 'gat' },
        { from: 'sob', to: 'gat' },
        { from: 'gat', to: 'pre' },
        { from: 'pre', to: 'pod' },
      ],
      steps: [
        { show: ['hip'], note: 'Punto de saturación físico-química',
          say: 'La gota se origina en la hiperuricemia crónica, definida como una concentración plasmática de ácido úrico superior a seis coma ocho miligramos por decilitro. A esa concentración se supera el límite físico de solubilidad en el plasma.' },
        { show: ['hipo', 'sob'], note: 'La causa casi siempre es renal',
          say: 'Ojo con el mecanismo: en el noventa por ciento de los pacientes el problema no es que produzcan demasiado ácido úrico, sino que el riñón excreta menos de lo debido. Solo el diez por ciento son sobreproductores, como en la lisis tumoral.' },
        { show: ['gat'], note: 'Factores que disparan la crisis',
          say: 'Sobre ese terreno hiperuricémico crónico, un cambio brusco dispara la precipitación articular: la ingesta de alcohol, especialmente cerveza por su contenido en purinas y guanosina, comidas copiosas con carnes rojas y mariscos, deshidratación aguda o el inicio de diuréticos tiazídicos y furosemida.' },
        { show: ['pre', 'pod'], note: 'Activación del inflamasoma',
          say: 'Los cristales de urato precipitan en la membrana sinovial y activan el inflamasoma celular, desatando una tormenta de interleuquinas que culmina en la podagra: una sinovitis hiperaguda y lancinante.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica de la gota',
      title: 'Ataque agudo de podagra versus tofos crónicos',
      cards: [
        { title: 'Podagra aguda', tag: 'Inicio nocturno explosivo', kind: 'alert', items: [
          { t: 'Primera articulación MFT en 50 a 70%', d: 'Dolor extremo al roce de las sábanas',
            say: 'La presentación clásica es la podagra: inflamación violenta de la primera articulación metatarsofalángica del pie, que suele comenzar de noche y alcanza su máxima intensidad en menos de doce a veinticuatro horas.' },
          { t: 'Tumefacción violácea y calor', d: 'El paciente no tolera ni el roce de la ropa',
            say: 'La articulación se pone roja, caliente y tumefacta, con un dolor tan exquisito que el paciente no tolera ni el peso de las sábanas sobre el pie.' },
        ] },
        { title: 'Gota tofácea crónica', tag: 'Años de evolución', kind: 'criteria', items: [
          { t: 'Tofos en pabellón y tendones', d: 'Depósitos granulomatosos indoloros',
            say: 'Tras años de hiperuricemia sin tratar aparecen los tofos: acúmulos nodulares de cristales de urato rodeados de reacción inflamatoria, típicos en el hélix de la oreja, el olécranon y el tendón de Aquiles.' },
          { t: 'Deformidad articular fija', d: 'Daño óseo progresivo',
            say: 'Los tofos pueden fistulizar material blanquecino como tiza y van destruyendo progresivamente la arquitectura de la articulación.' },
        ] },
        { title: 'Radiología clásica', tag: 'Signo de Martel', kind: 'key', items: [
          { t: 'Erosiones en sacabocado', d: 'Bordes colgantes escleróticos',
            say: 'En la radiografía simple la gota crónica muestra erosiones periarticulares en sacabocado con bordes escleróticos colgantes, conocido como el signo de Martel.' },
          { t: 'Sin osteopenia periarticular', d: 'La gran diferencia con la AR',
            say: 'Y un dato de examen crucial: a diferencia de la artritis reumatoide, la gota no produce osteopenia yuxtaarticular.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Condrocalcinosis: el cristal de pirofosfato de calcio',
      nodes: [
        { id: 'cpp', col: 0, row: 1, k: 'cause', t: 'Pirofosfato de calcio dihidratado', s: 'Cristales de CPPD en cartílago' },
        { id: 'eda', col: 1, row: 0, k: 'risk', t: 'Envejecimiento articular > 65 años', s: 'Causa primaria idiopática' },
        { id: 'sec', col: 1, row: 2, k: 'trap', t: 'Causas secundarias metabólicas', s: 'Hemocromatosis · hiperparatiroidismo' },
        { id: 'rod', col: 2, row: 1, k: 'mech', t: 'Predilección por rodilla', s: '50% de las monoartritis' },
        { id: 'rad', col: 3, row: 1, k: 'alert', t: 'Calcificación meniscal lineal', s: 'Condrocalcinosis radiológica' },
      ],
      edges: [
        { from: 'cpp', to: 'eda' },
        { from: 'cpp', to: 'sec' },
        { from: 'eda', to: 'rod' },
        { from: 'sec', to: 'rod' },
        { from: 'rod', to: 'rad' },
      ],
      steps: [
        { show: ['cpp'], note: 'Una sal de calcio completamente distinta',
          say: 'La condrocalcinosis o pseudogota no tiene nada que ver con el ácido úrico. Se debe al depósito de cristales de pirofosfato de calcio dihidratado en el cartílago hialino y en el fibrocartílago.' },
        { show: ['eda'], note: 'Adulto mayor como grupo principal',
          say: 'Su causa más común es el envejecimiento fisiológico del cartílago, presentándose típicamente en adultos mayores de sesenta y cinco años.' },
        { show: ['sec'], note: 'Las causas secundarias se preguntan',
          say: 'Sin embargo, si la condrocalcinosis o pseudogota se presenta en un adulto menor de cincuenta años, es mandatorio estudiar causas metabólicas secundarias: hemocromatosis con sobrecarga férrica, hiperparatiroidismo primario con hipercalcemia, o hipomagnesemia severa.' },
        { show: ['rod', 'rad'], note: 'La rodilla es la articulación reina',
          say: 'La articulación afectada en la mitad de los casos es la rodilla. Y en la radiografía se observa una calcificación lineal o punteada característica en los meniscos o en el cartílago articular.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Estudio de certeza',
      title: 'Microscopio de luz polarizada con compensador rojo',
      nodes: [
        { id: 'asp', col: 0, row: 1, k: 'start', t: 'Líquido sinovial con cristales', s: 'Aspirado por artrocentesis' },
        { id: 'got', col: 1, row: 0, k: 'alert', t: 'Urato: aguja fina afilada', s: 'Birrefringencia fuertemente negativa' },
        { id: 'pse', col: 1, row: 2, k: 'alert', t: 'Pirofosfato: romboidal', s: 'Birrefringencia débilmente positiva' },
        { id: 'ama', col: 2, row: 0, k: 'good', t: 'Paralelo = AMARILLO', s: 'Perpendicular se ve azul' },
        { id: 'azu', col: 2, row: 2, k: 'good', t: 'Paralelo = AZUL', s: 'Perpendicular se ve amarillo' },
      ],
      edges: [
        { from: 'asp', to: 'got' },
        { from: 'asp', to: 'pse' },
        { from: 'got', to: 'ama' },
        { from: 'pse', to: 'azu' },
      ],
      steps: [
        { show: ['asp'], note: 'El patrón de oro diagnóstico',
          say: 'El diagnóstico de certeza absoluto de una artropatía por microcristales no lo da el examen de sangre ni la radiografía: lo da el examen en fresco del líquido sinovial bajo microscopio de luz polarizada con compensador rojo de primer orden.' },
        { show: ['got', 'ama'], note: 'Cristal de gota',
          say: 'Los cristales de urato monosódico de la gota tienen forma de aguja fina intracelular y muestran birrefringencia intensamente negativa. Cuando la aguja se alinea paralela al eje del compensador, se ve de color amarillo brillante.' },
        { show: ['pse', 'azu'], note: 'Cristal de pseudogota',
          say: 'En cambio, los cristales de pirofosfato de calcio de la pseudogota son romboidales o rectangulares, y tienen birrefringencia débilmente positiva. Al alinearse paralelos al eje del compensador, se ven de color azul.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Trampas EUNACOM',
      title: 'Tres trampas clásicas de laboratorio',
      cards: [
        { title: 'Ácido úrico normal en agudo', tag: 'La trampa número 1', kind: 'alert', items: [
          { t: 'Normal en 30 a 40% de crisis', d: 'La inflamación aumenta la excreción renal',
            say: 'Primera trampa: hasta en un cuarenta por ciento de los pacientes en plena crisis de podagra, el ácido úrico en sangre sale normal o incluso bajo.' },
          { t: 'Nunca descarta una gota', d: 'Las citoquinas favorecen la uricosuria',
            say: 'La interleuquina seis y el estado inflamatorio aumentan la excreción renal de urato. Por eso, un ácido úrico normal jamás descarta un ataque de gota aguda.' },
        ] },
        { title: 'Recuentos celulares gigantes', tag: 'Simula pus', kind: 'criteria', items: [
          { t: 'Pseudogota con > 100.000 GB', d: 'Líquido extremadamente turbio',
            say: 'Segunda trampa: la condrocalcinosis en adultos mayores puede provocar una respuesta inflamatoria descomunal, con recuentos sinoviales de más de cien mil leucocitos por milímetro cúbico.' },
          { t: 'Sin bacterias al Gram ni cultivo', d: 'El cristal positivo da la respuesta',
            say: 'Aunque parece séptico por la celularidad, la tinción de Gram no muestra bacterias y la microscopía revela abundantes cristales de pirofosfato con birrefringencia positiva.' },
        ] },
        { title: 'Coexistencia con infección', tag: 'Infección oculta', kind: 'key', items: [
          { t: 'Coexistencia en 5% de los casos', d: 'Cristales más gérmenes piógenos',
            say: 'Tercera trampa: ver cristales no te exime de enviar el cultivo. Hasta en un cinco por ciento de las articulaciones infectadas coexisten microcristales y bacterias.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento de la crisis',
      title: 'Manejo agudo: calmar el dolor y la regla de oro',
      nodes: [
        { id: 'cri', col: 0, row: 1, k: 'start', t: 'Crisis aguda de gota', s: 'Dolor y flogosis intensa' },
        { id: 'ain', col: 1, row: 0, k: 'good', t: 'AINEs a dosis plenas', s: 'Naproxeno o indometacina en jóvenes' },
        { id: 'col', col: 1, row: 1, k: 'good', t: 'Colchicina en dosis bajas', s: '1 mg + 0.5 mg a la hora' },
        { id: 'cor', col: 1, row: 2, k: 'alert', t: 'Corticoides sistémicos', s: 'Prednisona en falla renal o úlcera' },
        { id: 'tra', col: 2, row: 1, k: 'trap', t: 'REGLA DE ORO: Jamás alopurinol', s: 'No iniciar durante la crisis' },
      ],
      edges: [
        { from: 'cri', to: 'ain' },
        { from: 'cri', to: 'col' },
        { from: 'cri', to: 'cor' },
        { from: 'cri', to: 'tra', label: 'prohibido' },
      ],
      steps: [
        { show: ['cri'], note: 'El objetivo exclusivo es desinflamar',
          say: 'En el ataque agudo de gota el único objetivo es apagar la inflamación y calmar el dolor. Existen tres opciones de primera línea según el perfil del paciente.' },
        { show: ['ain'], note: 'Primera línea en jóvenes sanos',
          say: 'Los antiinflamatorios no esteroidales a dosis plenas, como naproxeno quinientos miligramos cada doce horas o indometacina, son la primera opción en pacientes jóvenes sin daño renal ni gástrico.' },
        { show: ['col'], note: 'Esquema moderno de colchicina',
          say: 'La colchicina oral se administra exclusivamente en esquema moderno de dosis bajas: un miligramo al inicio y medio miligramo una hora después, alcanzando un máximo de uno coma cinco miligramos en las primeras veinticuatro horas. Los esquemas antiguos horarios están formalmente proscritos por diarrea severa.' },
        { show: ['cor'], note: 'El salvavidas en pacientes complejos',
          say: 'Y si el paciente tiene insuficiencia renal crónica, úlcera péptica activa o usa anticoagulantes, el fármaco de elección es prednisona oral treinta a treinta y cinco miligramos al día por cinco días.' },
        { show: ['tra'], note: 'La regla de oro del EUNACOM',
          say: 'Y grábate esta regla de oro: durante la crisis aguda jamás se debe iniciar alopurinol. Cambiar bruscamente el ácido úrico moviliza los cristales y prolonga la inflamación. Si ya lo tomaba, se mantiene a la misma dosis.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Terapia a largo plazo',
      title: 'Hipouricemiantes y profilaxis de reactivación',
      cards: [
        { title: '¿A quién indicar alopurinol?', tag: 'Indicaciones formales', kind: 'criteria', items: [
          { t: 'Dos o más crisis al año', d: 'O presencia de tofos o erosiones',
            say: 'El tratamiento hipouricemiante no se indica en el primer ataque. Se indica ante dos o más crisis al año, tofos clínicos o radiológicos, daño articular erosivo, litiasis renal o daño renal crónico.' },
          { t: 'Iniciar 2 a 4 semanas después', d: 'Con la crisis totalmente resuelta',
            say: 'Se inicia dos a cuatro semanas después de que la crisis aguda se haya resuelto por completo, nunca durante el dolor.' },
        ] },
        { title: 'Titulación y metas', tag: 'Dosis progresiva', kind: 'pharma', items: [
          { t: 'Alopurinol 100 mg al día', d: '50 mg en falla renal, titular mensual',
            say: 'El alopurinol se inicia siempre en dosis bajas de cien miligramos al día, o cincuenta miligramos en falla renal crónica avanzada, y se titula mensualmente de cien en cien miligramos hasta alcanzar la meta terapéutica deseada.' },
          { t: 'Meta de uricemia < 6.0 mg/dL', d: 'Menor a 5.0 si tiene tofos palpables',
            say: 'La meta de ácido úrico en sangre es menor a seis coma cero miligramos por decilitro en todos los pacientes, y menor a cinco coma cero si tiene tofos para acelerar su reabsorción.' },
        ] },
        { title: 'Profilaxis obligatoria', tag: 'No olvidar la colchicina', kind: 'alert', items: [
          { t: 'Colchicina 0.5 mg al día', d: 'Por 3 a 6 meses continuos',
            say: 'Todo inicio o cambio de dosis de alopurinol debe acompañarse obligatoriamente de colchicina en dosis baja, medio miligramo al día, durante tres a seis meses continuos.' },
          { t: 'Previene brotes reactivos', d: 'Por movilización de depósitos',
            say: 'Al descender rápidamente el ácido úrico en sangre, los depósitos tisulares y los tofos se disuelven parcialmente, desprendiendo microcristales que desatan una sinovitis de rebote. La colchicina profiláctica previene eficazmente estas crisis reactivas de movilización.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Integremos todo el enfrentamiento de las artropatías microcristalinas en un árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Diferencias críticas entre Gota y Condrocalcinosis',
      head: ['Característica', 'Gota (Urato Monosódico)', 'Condrocalcinosis (Pirofosfato)', 'Trampa en el examen'],
      rows: [
        { cells: ['Cristal y microscopía', 'Agujas · birrefringencia (-) intensa', 'Romboides · birrefringencia (+) débil', 'Paralelo: gota amarillo, pseudogota azul'],
          say: 'Repasemos la tabla comparativa. El cristal de gota tiene forma de aguja y birrefringencia fuertemente negativa; al compensador se ve amarillo paralelo. El de pseudogota es romboidal con birrefringencia débilmente positiva y se ve azul paralelo.' },
        { cells: ['Articulación típica', '1ra metatarsofalángica (Podagra > 50%)', 'Rodilla (> 50%) y muñeca', 'Podagra en hombre de mediana edad; rodilla en anciano'],
          say: 'La gota afecta la primera metatarsofalángica en más de la mitad de los casos. La pseudogota afecta predominantemente la rodilla en adultos mayores.' },
        { cells: ['Hallazgo radiológico', 'Erosiones en sacabocado (Martel)', 'Calcificación lineal de meniscos', 'La gota no tiene osteopenia; pseudogota tiene meniscos blancos'],
          say: 'En radiografía la gota muestra erosiones en sacabocado con borde colgante sin osteopenia. La pseudogota muestra calcificación lineal de meniscos.' },
        { cells: ['Manejo de crisis aguda', 'AINEs, colchicina baja dosis o prednisona', 'AINEs, corticoides intraarticulares o reposo', 'Jamás iniciar alopurinol durante el ataque de gota'],
          say: 'El manejo agudo de ambas busca desinflamar con antiinflamatorios o corticoides. La trampa de oro: nunca partir alopurinol en una crisis de gota.' },
        { cells: ['Terapia crónica', 'Alopurinol titulado + colchicina profilaxis', 'No hay fármaco disolvente de CPPD', 'Alopurinol requiere colchicina por tres a seis meses'],
          say: 'Y en el largo plazo, la gota se controla con alopurinol titulado más colchicina profiláctica. En la condrocalcinosis no existen medicamentos para disolver el pirofosfato.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico tipo EUNACOM',
      stem: 'Hombre de 64 años con antecedente de insuficiencia renal crónica etapa 3b (VFG 38 mL/min) y cardiopatía coronaria, consulta por 12 horas de dolor insoportable, tumefacción violácea y calor en la primera articulación metatarsofalángica derecha. Se realiza artrocentesis que confirma abundantes cristales en forma de aguja con birrefringencia intensamente negativa bajo luz polarizada. Su creatinina es de 2,2 mg/dL.',
      question: '¿Cuál es el tratamiento de primera línea más adecuado para la crisis actual?',
      options: [
        { letter: 'A', text: 'Indometacina 50 mg cada 8 horas por vía oral' },
        { letter: 'B', text: 'Alopurinol 300 mg al día por vía oral' },
        { letter: 'C', text: 'Prednisona 30 mg al día por vía oral por 5 días' },
        { letter: 'D', text: 'Colchicina 1 mg cada 2 horas hasta que aparezca diarrea' },
        { letter: 'E', text: 'Febuxostat 80 mg al día por vía oral' },
      ],
      correct: 'C',
      explanation: 'En un paciente con insuficiencia renal crónica etapa 3b, los AINEs están absolutamente contraindicados por riesgo de falla renal aguda anúrica, y la colchicina tiene alto riesgo de toxicidad neuromuscular y renal. Los corticoides sistémicos (prednisona 30-35 mg/día por 5 días) son la terapia de primera línea de elección. El alopurinol y febuxostat están contraindicados durante la crisis aguda.',
      say: {
        stem: 'Vamos al caso clínico de la clase. Hombre de sesenta y cuatro años con insuficiencia renal crónica etapa tres b y cardiopatía coronaria, que consulta por doce horas de dolor insoportable y eritema violáceo en la primera articulación metatarsofalángica. La punción confirma cristales en aguja con birrefringencia intensamente negativa. Su creatinina es de dos coma dos.',
        question: '¿Cuál es el tratamiento de primera línea más adecuado para la crisis actual?',
        options: 'Las opciones: indometacina oral, alopurinol trescientos miligramos al día, prednisona oral treinta miligramos al día por cinco días, colchicina horaria hasta provocar diarrea, o febuxostat oral. Piénsalo.',
        answer: 'La respuesta correcta es la C. Frente a un ataque agudo de gota en un paciente con insuficiencia renal crónica, los antiinflamatorios no esteroidales están contraindicados por el riesgo de precipitaciones renales graves, y la colchicina tiene alto riesgo de acumulación tóxica. El fármaco de primera línea de elección son los corticoides sistémicos con prednisona. El alopurinol y el febuxostat jamás se inician en la crisis aguda, y los esquemas horarios de colchicina están formalmente proscritos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 30',
      stem: 'Un paciente de 56 años, hipertenso y dislipidémico, en tratamiento con hidroclorotiazida y atorvastatina, consulta por dolor muy intenso en el pie derecho, especialmente en el primer ortejo, que inició hace algunas horas. Al examen físico tiene eritema del ortejo, el que es muy doloroso a la movilización. Se observa edema en dicho ortejo y en la zona bimaleolar. Se solicitan exámenes, que muestran hemograma, con leucocitos de 12.000 por mm³, PCR: 2 (VN: menor a 1 mg/L), creatinina: 0,8 mg/dl. ¿Cuál es el primer fármaco que debe administrarse para el manejo actual de este paciente?',
      options: [
        { letter: 'A', text: 'Diclofenaco sódico' },
        { letter: 'B', text: 'Cloxacilina' },
        { letter: 'C', text: 'Alopurinol' },
        { letter: 'D', text: 'Prednisona' },
        { letter: 'E', text: 'Clindamicina' },
      ],
      correct: 'A',
      explanation: 'Cuadro típico de podagra aguda desencadenada por hidroclorotiazida. Con función renal normal (creatinina 0,8 mg/dl) y sin contraindicación gástrica, los AINEs potentes (como diclofenaco o naproxeno) son la primera línea tradicional para yugular la crisis. El alopurinol está estrictamente contraindicado en agudo.',
      say: {
        stem: 'Pregunta real del EUNACOM de diciembre de dos mil dieciocho, pregunta treinta. Paciente de cincuenta y seis años, en tratamiento con hidroclorotiazida y atorvastatina, que consulta por dolor muy intenso y eritema en el primer ortejo derecho de pocas horas. Tiene creatinina de cero coma ocho y doce mil leucocitos.',
        question: '¿Cuál es el primer fármaco que debe administrarse para el manejo actual de este paciente?',
        options: 'Las opciones: diclofenaco sódico, cloxacilina, alopurinol, prednisona, o clindamicina. Piénsalo.',
        answer: 'Es la A. La clínica es una podagra aguda de libro, desencadenada por el uso de hidroclorotiazida, un diurético que compite por la excreción de ácido úrico. Como el paciente tiene función renal impecable con creatinina cero coma ocho, el tratamiento de elección para calmar la crisis son los antiinflamatorios no esteroidales a dosis plenas, como el diclofenaco. La trampa habitual es marcar alopurinol, que jamás debe administrarse en un cuadro agudo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 64',
      stem: 'Un paciente de 81 años presenta dolor muy intenso en la rodilla derecha, con EVA 8/10, que le impide caminar. En su examen físico, se aprecia eritema y aumento de volumen de la rodilla. Se solicita radiografía de rodilla, que muestra calcificación meniscal. Además, se realiza punción articular, que da salida a un líquido sinovial, con 160.000 glóbulos blancos por mm³, sin visualización de bacterias y con presencia de cristales con elongación positiva débil. ¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Artritis séptica' },
        { letter: 'B', text: 'Artritis por cristales de pirofosfato de calcio' },
        { letter: 'C', text: 'Artritis por cristales de hidroxiapatita de calcio' },
        { letter: 'D', text: 'Artritis por oxalato de calcio' },
        { letter: 'E', text: 'Gota' },
      ],
      correct: 'B',
      explanation: 'Condrocalcinosis (pseudogota) clásica en paciente anciano: monoartritis de rodilla con calcificación meniscal en la radiografía y líquido sinovial con cristales de birrefringencia positiva débil (elongación positiva). Aunque el recuento leucocitario es descomunal (160.000 GB/mm³), la ausencia de bacterias y los cristales confirman artritis por pirofosfato.',
      say: {
        stem: 'Examen de julio de dos mil diecinueve, pregunta sesenta y cuatro. Paciente de ochenta y un años con gonalgia derecha intensa que le impide caminar, con eritema y aumento de volumen. La radiografía muestra calcificación meniscal, y la artrocentesis revela ciento sesenta mil glóbulos blancos por milímetro cúbico, sin bacterias y con cristales con elongación positiva débil.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las alternativas: artritis séptica, artritis por cristales de pirofosfato de calcio, artritis por cristales de hidroxiapatita, artritis por oxalato, o gota. Piénsalo.',
        answer: 'La respuesta correcta es la B. Es una condrocalcinosis clásica: adulto mayor, gonalgia aguda, calcificación meniscal en la radiografía y cristales con elongación positiva débil, que es la descripción exacta del pirofosfato de calcio. Fíjate en la trampa monumental del líquido: ciento sesenta mil leucocitos te hace pensar en artritis séptica, pero el enunciado explícitamente descarta bacterias e identifica el cristal. La pseudogota puede ser extremadamente inflamatoria.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 55',
      stem: 'Un paciente de 70 años, con cuadro de 2 horas de dolor y ardor en pie derecho. Al examen físico destaca eritema en primera articulación del pie derecho, sin otras alteraciones. Refiere que ha presentado este mismo cuadro en dos ocasiones en los últimos 6 meses. El tratamiento de elección en este paciente es:',
      options: [
        { letter: 'A', text: 'Probenecid' },
        { letter: 'B', text: 'Alopurinol' },
        { letter: 'C', text: 'Corticoides tópicos' },
        { letter: 'D', text: 'Paracetamol' },
        { letter: 'E', text: 'Colchicina' },
      ],
      correct: 'E',
      explanation: 'Frente a una crisis aguda recurrente de gota (podagra), el objetivo inmediato es la supresión de la inflamación. Dentro de las opciones listadas, la colchicina oral es el tratamiento de elección para la crisis aguda. El alopurinol y probenecid están contraindicados durante el ataque agudo.',
      say: {
        stem: 'Pregunta real de julio de dos mil trece, pregunta cincuenta y cinco. Paciente de setenta años con dos horas de dolor y ardor en el primer ortejo del pie derecho, con eritema articular, habiendo presentado dos cuadros idénticos en los últimos seis meses.',
        question: 'El tratamiento de elección en este paciente es:',
        options: 'Las opciones: probenecid, alopurinol, corticoides tópicos, paracetamol, o colchicina. Piénsalo.',
        answer: 'Es la E. En un cuadro agudo de podagra la prioridad es yugular la crisis. Dentro de las alternativas disponibles, la colchicina es el antiinflamatorio de elección para el ataque agudo de gota. El alopurinol y el probenecid son hipouricemiantes y están formalmente contraindicados durante la fase aguda, aunque el paciente tenga indicación de recibirlos más adelante por la recurrencia de los episodios.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Luz polarizada', tag: 'Diferencia de certeza', kind: 'key', items: [
          { t: 'Urato: aguja negativa amarilla', d: 'Birrefringencia intensamente negativa',
            say: 'Cerremos con las tres reglas de oro. En el microscopio de luz polarizada: aguja fina con birrefringencia negativa amarilla paralela es gota; romboide con birrefringencia positiva azul paralela es pseudogota.' },
          { t: 'Ácido úrico normal no descarta', d: 'En 30 a 40% de crisis agudas',
            say: 'El ácido úrico plasmático sale normal en un tercio de las crisis de gota por aumento de la excreción renal.' },
        ] },
        { title: 'Manejo de la crisis aguda', tag: 'Regla de oro', kind: 'alert', items: [
          { t: 'Jamás iniciar alopurinol en agudo', d: 'Desestabiliza y prolonga la crisis',
            say: 'Durante la crisis aguda jamás se inicia alopurinol. Si el paciente ya lo tomaba crónicamente, se mantiene sin cambios.' },
          { t: 'Prednisona en daño renal', d: 'AINEs o colchicina en jóvenes',
            say: 'El manejo del dolor agudo se hace con AINEs o colchicina en dosis bajas, y con prednisona oral si existe daño renal o úlcera péptica.' },
        ] },
        { title: 'Terapia a largo plazo', tag: 'Cuándo y cómo', kind: 'pharma', items: [
          { t: 'Alopurinol a las 2 a 4 semanas', d: 'Si hay dos o más crisis al año o tofos',
            say: 'El alopurinol se inicia dos a cuatro semanas después de resuelta la crisis, titulado progresivamente hasta lograr una uricemia menor a seis miligramos por decilitro.' },
          { t: 'Colchicina profiláctica obligatoria', d: '0.5 mg al día por 3 a 6 meses',
            say: 'Y todo inicio de alopurinol requiere colchicina profiláctica en dosis baja durante tres a seis meses continuos. Si te llevas una sola idea de hoy: en gota la crisis se apaga sin tocar el ácido úrico, y el alopurinol se titula semanas después con colchicina de escudo. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de enfrentamiento: Gota y Condrocalcinosis',
    root: N('start', 'Sospecha de artritis microcristalina', 'Monoartritis aguda con líquido inflamatorio',
      'Paciente con dolor agudo, aumento de volumen y líquido articular inflamatorio. Se debe definir qué cristal está presente.',
      ['', N('q', '¿Qué cristal muestra la luz polarizada?', 'Microscopía con compensador rojo',
        'El microscopio de luz polarizada define la etiología observando la morfología y el color del cristal.',
        ['Agujas birrefringencia (-) amarilla: Gota', N('q', '¿En qué fase se encuentra el paciente?', 'Manejo agudo vs crónico',
          'Confirmada la gota por cristales de urato monosódico, la conducta depende estrictamente de si está en crisis o intercrisis.',
          ['Crisis aguda: Podagra / dolor actual', N('ok', 'AINEs, colchicina baja dosis o corticoides', 'PROHIBIDO iniciar alopurinol',
            'En agudo el objetivo es exclusivamente desinflamar. AINEs o colchicina en dosis bajas si es sano; prednisona oral si tiene falla renal o úlcera. Jamás iniciar alopurinol durante la crisis.')],
          ['Intercrisis / Crónica: >= 2 crisis o tofos', N('do', 'Alopurinol titulado + Colchicina profilaxis', 'Iniciar 2 a 4 semanas post crisis',
            'Indicación de tratamiento hipouricemiante a largo plazo. Iniciar alopurinol dos a cuatro semanas después de la crisis, asociando colchicina profiláctica por tres a seis meses continuos.')])],
        ['Romboides birrefringencia (+) azul: Pseudogota', N('ok', 'Reposo + AINEs o corticoides', 'Descartar causas secundarias en jóvenes',
          'Artritis por pirofosfato de calcio dihidratado. Manejo sintomático con reposo y antiinflamatorios o corticoides intraarticulares. Si es menor de cincuenta años, descartar hemocromatosis e hiperparatiroidismo.')])]),
  },
};
