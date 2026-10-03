// Clase 1.4 — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_reumatologia.cjs (reuma-04).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'reuma-04',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Dolor mecánico, signos radiológicos cardinales y escalera analgésica GES',
      say: 'Bienvenidos. Hoy revisamos la artrosis u osteoartritis, la enfermedad articular más prevalente en Chile y en el mundo. En el examen EUNACOM la artrosis se evalúa con tres pilares bien claros: reconocer el dolor de ritmo mecánico, identificar los cuatro signos radiológicos cardinales y manejar la escalera terapéutica sin cometer el error de dar antiinflamatorios a pacientes con daño renal o insuficiencia cardíaca. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Degeneración del cartílago y remodelación ósea',
      nodes: [
        { id: 'sob', col: 0, row: 1, k: 'cause', t: 'Sobrecarga y envejecimiento', s: 'Edad · obesidad · microtrauma' },
        { id: 'car', col: 1, row: 1, k: 'mech', t: 'Pérdida del cartílago hialino', s: 'Fisuras y adelgazamiento' },
        { id: 'sub', col: 2, row: 0, k: 'effect', t: 'Esclerosis subcondral', s: 'Hueso eburnado y reactivo' },
        { id: 'ost', col: 2, row: 2, k: 'effect', t: 'Osteofitos marginales', s: 'Proliferación ósea en bordes' },
        { id: 'geo', col: 3, row: 1, k: 'effect', t: 'Geodas o quistes subcondrales', s: 'Microfracturas por presión' },
      ],
      edges: [
        { from: 'sob', to: 'car' },
        { from: 'car', to: 'sub' },
        { from: 'car', to: 'ost' },
        { from: 'sub', to: 'geo' },
        { from: 'ost', to: 'geo' },
      ],
      steps: [
        { show: ['sob', 'car'], note: 'No es inflamatoria primaria',
          say: 'A diferencia de la artritis reumatoide, la artrosis no es una enfermedad inflamatoria autoinmune. Es una falla biomecánica global de la articulación, donde la edad, la obesidad y la sobrecarga mecánica van desgastando progresivamente el cartílago articular.' },
        { show: ['sub'], note: 'Reacción del hueso adyacente',
          say: 'Al perderse la amortiguación del cartílago, el hueso subcondral recibe un impacto excesivo, engrosándose y volviéndose denso y esclerótico.' },
        { show: ['ost'], note: 'Osteofitos marginales',
          say: 'En los márgenes articulares el periostio responde formando excrecencias óseas: los osteofitos. Son el intento desesperado de la articulación por repartir la carga en una superficie más ancha.' },
        { show: ['geo'], note: 'Quistes por microimpactos',
          say: 'La presión del líquido sinovial a través de microfisuras óseas genera cavidades quísticas o geodas subcondrales. Estos cuatro elementos explican directamente la radiografía que veremos a continuación.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica cardinal',
      title: 'Ritmo mecánico y deformidades típicas',
      cards: [
        { title: 'Ritmo del dolor', tag: 'Mecánico clásico', kind: 'key', items: [
          { t: 'Empeora con el uso articular', d: 'Alivia claramente con el reposo',
            say: 'El síntoma cardinal es el dolor de ritmo mecánico: empeora al caminar o cargar peso, y alivia de inmediato cuando el paciente se sienta o descansa.' },
          { t: 'Rigidez matinal breve', d: 'Dura menos de quince a treinta minutos',
            say: 'Presenta rigidez al levantarse, pero es breve, dura menos de quince a treinta minutos, desapareciendo con los primeros movimientos. Si dura más de una hora, debes pensar en artritis reumatoide.' },
        ] },
        { title: 'Manos y nódulos', tag: 'Examen físico', kind: 'criteria', items: [
          { t: 'Nódulos de Heberden en distales', d: 'Interfalángicas distales de las manos',
            say: 'En las manos se forman nódulos óseos duros e indoloros: los nódulos de Heberden en las articulaciones interfalángicas distales.' },
          { t: 'Nódulos de Bouchard en proximales', d: 'Y rizartrosis en la base del pulgar',
            say: 'Y los nódulos de Bouchard en las interfalángicas proximales. El compromiso de la primera carpometacarpiana o rizartrosis deforma la base del pulgar.' },
        ] },
        { title: 'Rodilla y cadera', tag: 'Grandes articulaciones', kind: 'alert', items: [
          { t: 'Gonartrosis con crepitación ósea', d: 'Crujido palpable al movilizar',
            say: 'En la rodilla destaca el crujido o crepitación palpable a la flexoextensión, con atrofia del cuádriceps.' },
          { t: 'Coxartrosis: dolor en la ingle', d: 'O referido hacia la rodilla',
            say: 'En la cadera el dolor se ubica típicamente en la región inguinal y la cara anterior del muslo, limitando la rotación interna. Recuerda siempre que la cadera puede doler como una gonalgia referida.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Radiología simple',
      title: 'Los cuatro signos radiológicos cardinales',
      nodes: [
        { id: 'rx', col: 0, row: 1, k: 'start', t: 'Radiografía articular en carga', s: 'El examen diagnóstico de elección' },
        { id: 'pin', col: 1, row: 0, k: 'mech', t: '1. Pinzamiento asimétrico', s: 'Disminución del espacio interarticular' },
        { id: 'esc', col: 1, row: 2, k: 'mech', t: '2. Esclerosis subcondral', s: 'Línea blanca densa bajo el cartílago' },
        { id: 'ost', col: 2, row: 0, k: 'alert', t: '3. Osteofitos marginales', s: 'Picos óseos en bordes articulares' },
        { id: 'geo', col: 2, row: 2, k: 'alert', t: '4. Geodas o quistes', s: 'Zonas radiolúcidas en hueso esponjoso' },
        { id: 'tra', col: 3, row: 1, k: 'trap', t: 'Sin osteopenia ni erosiones', s: 'Ausencia de signos inflamatorios' },
      ],
      edges: [
        { from: 'rx', to: 'pin' },
        { from: 'rx', to: 'esc' },
        { from: 'rx', to: 'ost' },
        { from: 'rx', to: 'geo' },
        { from: 'pin', to: 'tra' },
        { from: 'ost', to: 'tra' },
      ],
      steps: [
        { show: ['rx'], note: 'Radiografía de pie',
          say: 'Para diagnosticar artrosis no necesitas resonancia ni exámenes sofisticados: la radiografía simple bilateral y en carga es el examen de elección.' },
        { show: ['pin', 'esc'], note: 'Pinzamiento y esclerosis',
          say: 'Los primeros dos hallazgos son la disminución asimétrica del espacio articular por desgaste focal del cartílago, y la esclerosis subcondral, que se ve como una línea blanca densa en la zona de mayor presión.' },
        { show: ['ost', 'geo'], note: 'Osteofitos y geodas',
          say: 'Se suman los osteofitos en los bordes de la articulación y las geodas o quistes subcondrales en el hueso esponjoso.' },
        { show: ['tra'], note: 'Lo que NO debe aparecer',
          say: 'Y fíjate en lo que nunca aparece: en la artrosis no hay osteopenia yuxtaarticular ni erosiones marginales en sacabocado. Si ves erosiones, estás frente a artritis reumatoide o microcristales.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Terapia escalonada',
      title: 'Manejo no farmacológico y escalera analgésica',
      cards: [
        { title: 'Medidas basales obligatorias', tag: 'No farmacológico', kind: 'key', items: [
          { t: 'Baja de peso y ejercicio aeróbico', d: 'Kinesioterapia fortalecedora',
            say: 'El pilar que más modifica los síntomas es no farmacológico: reducción de peso en pacientes obesos, fortalecimiento del cuádriceps mediante kinesioterapia y uso de bastón en la mano contralateral.' },
          { t: 'Educación y calzado amortiguado', d: 'Reducir la carga de impacto',
            say: 'El calzado con suela amortiguada y la protección articular reducen las fuerzas de impacto sobre la rodilla y la cadera.' },
        ] },
        { title: 'Primera línea analgésica', tag: 'Paso uno', kind: 'pharma', items: [
          { t: 'Paracetamol hasta 3 a 4 g al día', d: 'El fármaco de inicio recomendado',
            say: 'El fármaco de primera línea de elección es el paracetamol, administrado en dosis de un gramo cada ocho horas, con un máximo de cuatro gramos al día.' },
          { t: 'Excelente perfil cardiovascular', d: 'Seguro en daño renal leve',
            say: 'Se prefiere por su seguridad gástrica y renal, especialmente en adultos mayores polimedicados.' },
        ] },
        { title: 'Segunda línea y trampas', tag: 'AINEs y precauciones', kind: 'alert', items: [
          { t: 'AINEs tópicos u orales breves', d: 'Solo si el paracetamol no basta',
            say: 'Si el paracetamol no logra controlar el dolor, se escala a antiinflamatorios tópicos o antiinflamatorios no esteroidales orales por ciclos cortos.' },
          { t: 'Contraindicación en IC y falla renal', d: 'Usar tramadol si hay comorbilidad',
            say: 'Ojo con el examen: en pacientes hipertensos descompensados, con insuficiencia cardíaca o falla renal crónica, los antiinflamatorios están contraindicados y se prefiere tramadol oral.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Cirugía y GES',
      title: 'Infiltración, reemplazo protésico y garantías en Chile',
      nodes: [
        { id: 'ter', col: 0, row: 1, k: 'start', t: 'Fallo de analgesia médica', s: 'Dolor persistente e incapacidad' },
        { id: 'inf', col: 1, row: 0, k: 'mech', t: 'Infiltración corticoide intraarticular', s: 'Alivio transitorio en brotes' },
        { id: 'art', col: 1, row: 2, k: 'alert', t: 'Artroplastia total de cadera o rodilla', s: 'Reemplazo protésico definitivo' },
        { id: 'ges', col: 2, row: 2, k: 'good', t: 'Garantía GES en mayores de 65 años', s: 'Endoprótesis total de cadera' },
      ],
      edges: [
        { from: 'ter', to: 'inf' },
        { from: 'ter', to: 'art' },
        { from: 'art', to: 'ges', label: 'cadera GES' },
      ],
      steps: [
        { show: ['ter', 'inf'], note: 'Infiltración intraarticular',
          say: 'Cuando el tratamiento farmacológico oral no alcanza, se puede recurrir a la infiltración intraarticular con corticoides de depósito, que entrega alivio transitorio durante los brotes de dolor agudo.' },
        { show: ['art'], note: 'Cirugía de reemplazo protésico',
          say: 'Y en pacientes con dolor intratable y limitación funcional severa que no responden al manejo conservador, la solución definitiva es la artroplastia total de rodilla o cadera.' },
        { show: ['ges'], note: 'Garantía explícita en salud',
          say: 'En Chile la endoprótesis total de cadera por coxartrosis grave está garantizada por el GES para personas de sesenta y cinco años o más. Esa edad se pregunta en el examen.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Veamos el algoritmo diagnóstico y terapéutico completo de la artrosis.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Diagnóstico diferencial: Artrosis versus Artritis Reumatoide',
      head: ['Parámetro', 'Artrosis / Osteoartritis', 'Artritis Reumatoide', 'Trampa habitual'],
      rows: [
        { cells: ['Ritmo del dolor', 'Mecánico: peor con la carga y alivia en reposo', 'Inflamatorio: peor en reposo y alivia al mover', 'Confundir rigidez de quince minutos con la matinal de una hora'],
          say: 'Repasemos la tabla comparativa. El ritmo del dolor en la artrosis es puramente mecánico: empeora al caminar y cede al sentarse. En la artritis reumatoide es inflamatorio: despierta de noche y mejora con la actividad.' },
        { cells: ['Articulaciones de manos', 'IFD (Heberden), IFP (Bouchard) y 1ra CMC', 'MCF, IFP y muñecas (respeta las IFD)', 'La artrosis ataca las distales; la artritis reumatoide jamás las toca'],
          say: 'En las manos la artrosis afecta las interfalángicas distales con nódulos de Heberden y la base del pulgar. La artritis reumatoide compromete metacarpofalángicas y muñecas, respetando siempre las distales.' },
        { cells: ['Radiografía simple', 'Pinzamiento asimétrico, osteofitos, esclerosis', 'Erosiones marginales y osteopenia yuxtaarticular', 'En artrosis no hay osteopenia ni erosiones en sacabocado'],
          say: 'En la radiografía la artrosis muestra pinzamiento asimétrico, esclerosis y osteofitos sin osteopenia. La artritis reumatoide muestra erosiones marginales y osteopenia periarticular.' },
        { cells: ['Tratamiento de primera línea', 'Paracetamol y medidas físicas no farmacológicas', 'Metotrexato semanal (FARME) precoz', 'Iniciar antiinflamatorios en paciente con insuficiencia cardíaca'],
          say: 'Y en el tratamiento, la artrosis parte con paracetamol y baja de peso; la artritis reumatoide requiere fármacos modificadores como metotrexato desde el primer día.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico tipo EUNACOM',
      stem: 'Mujer de 64 años con sobrepeso consulta por dolor en ambas rodillas de 8 meses de evolución, que empeora al subir escaleras y al caminar distancias largas, aliviando con el reposo. Al examen físico destaca crepitación ósea articular a la flexión de rodillas y presencia de nódulos duros e indoloros en articulaciones interfalángicas distales de ambas manos. Radiografía de rodillas muestra pinzamiento femorotibial medial asimétrico y osteofitos marginales.',
      question: '¿Cuál es la primera medida farmacológica más adecuada para iniciar su tratamiento?',
      options: [
        { letter: 'A', text: 'Prednisona 20 mg al día por vía oral' },
        { letter: 'B', text: 'Paracetamol 1 g cada 8 horas por vía oral' },
        { letter: 'C', text: 'Metotrexato 15 mg por vía oral una vez a la semana' },
        { letter: 'D', text: 'Infiltración intraarticular con ácido hialurónico' },
        { letter: 'E', text: 'Celecoxib 200 mg al día de forma permanente' },
      ],
      correct: 'B',
      explanation: 'Cuadro clínico y radiológico clásico de osteoartritis (gonartrosis y nódulos de Heberden en IFD). La primera línea farmacológica según las guías clínicas y el estándar EUNACOM es el paracetamol en dosis de hasta 3-4 g/día, asociado a medidas no farmacológicas como baja de peso y kinesioterapia.',
      say: {
        stem: 'Vamos al caso clínico. Mujer de sesenta y cuatro años que consulta por dolor mecánico en ambas rodillas de ocho meses, con crepitación articular, nódulos duros en articulaciones interfalángicas distales y radiografía con pinzamiento asimétrico y osteofitos.',
        question: '¿Cuál es la primera medida farmacológica más adecuada para iniciar su tratamiento?',
        options: 'Las opciones: prednisona oral, paracetamol un gramo cada ocho horas, metotrexato semanal, infiltración con ácido hialurónico, o celecoxib permanente. Piénsalo.',
        answer: 'La respuesta correcta es la B. Es una artrosis de rodillas y manos de libro. La primera línea farmacológica recomendada es el paracetamol en dosis de un gramo cada ocho horas. Los corticoides orales y el metotrexato son para artritis inflamatorias como la artritis reumatoide, y los antiinflamatorios orales se reservan para cuando el paracetamol falla o hay brotes agudos dolorosos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 121',
      stem: 'Una paciente de 64 años consulta por artralgias de las manos, caderas y rodillas. Al examen físico presenta aumento de volumen de las articulaciones interfalángicas, con nódulos de Heberden. Además tiene limitación de los movimientos de las rodillas, con dolor y crepitación articular, sin signos inflamatorios y limitación a la abducción de ambas caderas.',
      question: '¿Cuál es el tratamiento inicial más adecuado?',
      options: [
        { letter: 'A', text: 'Prednisona' },
        { letter: 'B', text: 'Paracetamol' },
        { letter: 'C', text: 'Metotrexato' },
        { letter: 'D', text: 'Bifosfonatos' },
        { letter: 'E', text: 'Ibuprofeno' },
      ],
      correct: 'B',
      explanation: 'La presencia de nódulos de Heberden, crepitación ósea articular sin calor ni eritema y limitación mecánica confirma artrosis poliarticular. La primera línea de tratamiento analgésico es el paracetamol.',
      say: {
        stem: 'Pregunta real del EUNACOM de julio de dos mil diecisiete, pregunta ciento veintiuno. Paciente de sesenta y cuatro años con dolor en manos, caderas y rodillas, con nódulos de Heberden en interfalángicas, crepitación articular sin signos inflamatorios y limitación motora.',
        question: '¿Cuál es el tratamiento inicial más adecuado?',
        options: 'Las alternativas: prednisona, paracetamol, metotrexato, bifosfonatos, o ibuprofeno. Piénsalo.',
        answer: 'Es la B. Nódulos de Heberden con crepitación sin signos inflamatorios es artrosis. El tratamiento inicial de elección es el paracetamol. El ibuprofeno es de segunda línea y tiene mayor toxicidad gástrica y renal, y fármacos como metotrexato o prednisona no tienen ningún rol en el manejo de la artrosis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 102',
      stem: 'Una paciente de 61 años consulta por dolor articular de ambas manos. Al examen se aprecia aumento de volumen de las articulaciones interfalángicas proximales y distales. Se solicita radiografía de manos, que muestra disminución simétrica del espacio interarticular de las articulaciones interfalángicas, con compromiso de la primera articulación carpometacarpiana bilateral, con presencia de quistes subcondrales. Los ANA y FR resultan positivos.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Artritis psoriática' },
        { letter: 'B', text: 'Artritis reumatoide' },
        { letter: 'C', text: 'Artritis reactiva' },
        { letter: 'D', text: 'Condrocalcinosis' },
        { letter: 'E', text: 'Artrosis' },
      ],
      correct: 'E',
      explanation: 'Compromiso de articulaciones interfalángicas distales (Heberden), proximales (Bouchard) y de la primera carpometacarpiana (rizartrosis), asociado a quistes subcondrales en la radiografía, es patognomónico de artrosis nodal de manos. La positividad a títulos bajos de ANA y FR es un hallazgo inespecífico común en adultos mayores que no debe desviar el diagnóstico clínico.',
      say: {
        stem: 'Examen de julio de dos mil dieciséis, pregunta ciento dos. Paciente de sesenta y un años con dolor y aumento de volumen en articulaciones interfalángicas proximales y distales. La radiografía muestra disminución del espacio articular en interfalángicas, compromiso de la primera carpometacarpiana y quistes subcondrales. Los anticuerpos antinucleares y el factor reumatoide resultan positivos.',
        question: 'El diagnóstico más probable es:',
        options: 'Las opciones: artritis psoriásica, artritis reumatoide, artritis reactiva, condrocalcinosis, o artrosis. Piénsalo.',
        answer: 'La respuesta correcta es la E. Esta pregunta es una de las trampas más elegantes del banco: te ponen anticuerpos antinucleares y factor reumatoide positivos para tentarte con artritis reumatoide. Pero mira la clínica: hay compromiso de interfalángicas distales y de la primera carpometacarpiana con quistes subcondrales, lo que es característico de artrosis. La artritis reumatoide jamás compromete las interfalángicas distales.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 9',
      stem: 'Paciente 80 años con antecedente de artrosis en tratamiento con paracetamol 1 gr c/8 horas, con control parcial del dolor. Realiza adecuadamente sus actividades de la vida diaria, usa bastón y sale acompañada. Tiene antecedente de HTA e Insuficiencia cardíaca congestiva en capacidad funcional III. ¿Cuál es el mejor fármaco a agregar para continuar el manejo del dolor?',
      options: [
        { letter: 'A', text: 'Ibuprofeno v.o.' },
        { letter: 'B', text: 'Pregabalina v.o.' },
        { letter: 'C', text: 'Ketorolaco v.o.' },
        { letter: 'D', text: 'Lidocaína en parches' },
        { letter: 'E', text: 'Tramadol v.o.' },
      ],
      correct: 'E',
      explanation: 'Aunque los AINEs son la segunda línea habitual tras el paracetamol, están formalmente contraindicados en pacientes con insuficiencia cardíaca congestiva avanzada e hipertensión arterial por riesgo de descompensación hemodinámica y falla renal aguda. En este escenario, el fármaco de elección para escalar analgesia es un opioide débil como el tramadol.',
      say: {
        stem: 'Pregunta real de julio de dos mil dieciséis, pregunta nueve. Paciente de ochenta años con artrosis en tratamiento con paracetamol un gramo cada ocho horas con alivio parcial. Tiene hipertensión arterial e insuficiencia cardíaca congestiva en capacidad funcional tres.',
        question: '¿Cuál es el mejor fármaco a agregar para continuar el manejo del dolor?',
        options: 'Las opciones: ibuprofeno oral, pregabalina oral, ketorolaco oral, lidocaína en parches, o tramadol oral. Piénsalo.',
        answer: 'Es la E. Si bien los antiinflamatorios no esteroidales son la segunda línea analgésica tradicional, en un paciente con insuficiencia cardíaca en capacidad funcional tres están absolutamente contraindicados porque retienen sodio, elevan la presión y desencadenan edema pulmonar o falla renal. Por eso, el escalón correcto en este paciente frágil es un opioide débil como el tramadol.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Ritmo y localización', tag: 'Diferencia clínica', kind: 'key', items: [
          { t: 'Dolor mecánico que cede en reposo', d: 'Rigidez matinal menor a 30 minutos',
            say: 'Cerremos con las tres reglas de oro. El dolor de la artrosis es mecánico y cede al descansar, con rigidez matinal breve de menos de quince a treinta minutos.' },
          { t: 'Ataca las distales y el pulgar', d: 'Heberden en IFD y rizartrosis en 1ra CMC',
            say: 'En las manos compromete las interfalángicas distales con nódulos de Heberden y la primera carpometacarpiana, respetando las muñecas.' },
        ] },
        { title: 'Radiología sin inflamación', tag: 'Cuatro signos', kind: 'criteria', items: [
          { t: 'Pinzamiento, esclerosis y osteofitos', d: 'Con geodas o quistes subcondrales',
            say: 'En la radiografía busca pinzamiento asimétrico, esclerosis, osteofitos y geodas. Nunca hay osteopenia periarticular ni erosiones.' },
        ] },
        { title: 'Escalera analgésica segura', tag: 'Tratamiento racional', kind: 'alert', items: [
          { t: 'Paracetamol de primera línea', d: 'Hasta 3 a 4 gramos al día',
            say: 'La primera línea farmacológica es siempre el paracetamol, junto con la baja de peso y el ejercicio.' },
          { t: 'Evitar AINEs si hay daño cardíaco o renal', d: 'Preferir tramadol en pacientes frágiles',
            say: 'Y jamás indiques antiinflamatorios orales a pacientes con insuficiencia cardíaca o daño renal: escala directamente a tramadol. Si te llevas una sola idea de hoy: la artrosis ataca las interfalángicas distales con dolor mecánico y osteofitos, y se trata primero con paracetamol y bastón. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de enfrentamiento: Artrosis / Osteoartritis',
    root: N('start', 'Dolor articular de ritmo mecánico', 'Empeora con el uso · alivia con el reposo',
      'Paciente con dolor articular que empeora al caminar o cargar peso, con rigidez matinal menor a treinta minutos y crepitación ósea.',
      ['', N('q', '¿Radiografía simple confirma artrosis?', 'Pinzamiento, osteofitos, esclerosis y geodas',
        'Se solicita radiografía en carga. Confirma disminución asimétrica del espacio, esclerosis subcondral y osteofitos, sin erosiones.',
        ['NO: Radiografía normal', N('refer', 'Buscar dolor referido o causa periarticular', 'Cadera referida a rodilla o bursitis',
          'Si la radiografía de rodilla es normal, recuerda examinar la cadera en busca de patología coxofemoral o evaluar bursitis periarticular.')],
        ['SÍ: Artrosis confirmada', N('do', 'Pilar no farmacológico obligatorio', 'Baja de peso + kinesioterapia + bastón',
          'Toda artrosis requiere educación, reducción de peso, fortalecimiento muscular del cuádriceps y asistencia de marcha con bastón contralateral.',
          ['', N('q', '¿Respuesta al tratamiento analgésico inicial?', 'Escalera analgésica escalonada',
            'Se inicia analgesia con paracetamol en dosis de hasta un gramo cada ocho horas.',
            ['Control del dolor con Paracetamol', N('ok', 'Mantener paracetamol a demanda', 'Seguimiento funcional en atención primaria',
              'El dolor se controla adecuadamente. Se mantiene paracetamol a demanda y se continúa con el programa kinesiológico de mantención.')],
            ['Dolor persistente sin contraindicaciones', N('do', 'AINEs tópicos u orales por ciclos cortos', 'Asociar gastroprotección si hay riesgo',
              'Si el paracetamol es insuficiente y no hay contraindicaciones, se indican antiinflamatorios tópicos o ciclos cortos de antiinflamatorios orales.')],
            ['Dolor persistente con insuficiencia cardíaca o falla renal', N('alert', 'Tramadol oral o infiltración corticoide', 'Contraindicación estricta de AINEs orales',
              'Si el paciente tiene insuficiencia cardíaca, daño renal crónico o hipertensión descompensada, los AINEs orales están prohibidos: se indica tramadol oral o infiltración con corticoides.')],
            ['Fallo médico con incapacidad severa', N('alert', 'Evaluación quirúrgica: Artroplastia total', 'Garantía GES en cadera para mayores de 65 años',
              'En dolor refractario e impotencia funcional invalidante se deriva a traumatología para reemplazo protésico total de cadera o rodilla. En Chile la endoprótesis de cadera está garantizada por el GES desde los sesenta y cinco años.')])])])]),
  },
};
