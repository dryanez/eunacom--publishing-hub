// Clase 8.9 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_hematologia.cjs (hem-09).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'hem-09',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'La microcitosis que no es ferropenia y la hemoglobina que se vuelve hoz',
      say: 'Bienvenidos. En la clase anterior vimos defectos de la membrana y de las enzimas del glóbulo rojo. Hoy llegamos al último lugar donde puede fallar: la hemoglobina misma. Vemos las talasemias y la anemia de células falciformes. Y el examen pregunta sobre todo una cosa: reconocer el rasgo talasémico, esa microcitosis que parece ferropenia pero no lo es, y en la que dar hierro es un error.',
    },

    {
      type: 'flow',
      kicker: 'Mapa del tema',
      title: 'Dos formas de fallar la hemoglobina',
      nodes: [
        { id: 'gen', col: 0, row: 1, k: 'start', t: 'Gen de la globina', s: 'Beta-globina, cromosoma 11' },
        { id: 'cua', col: 1, row: 0, k: 'cause', t: 'Defecto cuantitativo', s: 'Se fabrican menos cadenas' },
        { id: 'tal', col: 2, row: 0, k: 'effect', t: 'Talasemia', s: 'Menor o mayor' },
        { id: 'cul', col: 1, row: 2, k: 'cause', t: 'Defecto cualitativo', s: 'Se fabrica una cadena anormal' },
        { id: 'hbs', col: 2, row: 2, k: 'effect', t: 'Drepanocitosis', s: 'Hemoglobina S' },
        { id: 'ele', col: 3, row: 1, k: 'good', t: 'Electroforesis de hemoglobina', s: 'Confirma ambas' },
      ],
      edges: [
        { from: 'gen', to: 'cua' }, { from: 'cua', to: 'tal' },
        { from: 'gen', to: 'cul' }, { from: 'cul', to: 'hbs' },
        { from: 'tal', to: 'ele' }, { from: 'hbs', to: 'ele' },
      ],
      steps: [
        { show: ['gen'], note: 'Las hemoglobinopatías nacen en el gen de la globina',
          say: 'Partamos con un mapa. La hemoglobina adulta tiene cadenas alfa y beta, y las dos enfermedades de hoy nacen de mutaciones en el gen de la beta-globina, en el cromosoma once.' },
        { show: ['cua', 'tal'], note: 'Talasemia: cadena normal, pero en poca cantidad',
          say: 'La mutación puede fallar de dos maneras. En la talasemia, la cadena beta es normal, pero se fabrica en menor cantidad o no se fabrica. Es un defecto de cantidad.' },
        { show: ['cul', 'hbs'], note: 'Drepanocitosis: cantidad normal, cadena alterada',
          say: 'En la drepanocitosis ocurre lo contrario: la cadena se fabrica, pero con un error en su estructura. Esa hemoglobina anormal es la hemoglobina S. Es un defecto de calidad.' },
        { show: ['ele'], note: 'Un solo examen confirma las dos',
          say: 'Y aunque son distintas, las dos se confirman con el mismo examen: la electroforesis de hemoglobina. Veamos primero la talasemia.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Talasemia beta',
      title: 'Rasgo menor vs talasemia mayor',
      nodes: [
        { id: 'mut', col: 0, row: 1, k: 'cause', t: 'Mutación beta-globina', s: 'Beta+ reduce, beta0 anula' },
        { id: 'het', col: 1, row: 0, k: 'mech', t: 'Heterocigoto', s: 'Un gen afectado' },
        { id: 'men', col: 2, row: 0, k: 'good', t: 'Rasgo talasémico menor', s: 'Asintomático, hallazgo' },
        { id: 'hom', col: 1, row: 2, k: 'mech', t: 'Homocigoto beta0', s: 'Sin cadenas beta' },
        { id: 'alf', col: 2, row: 2, k: 'mech', t: 'Cadenas alfa libres', s: 'Precipitan en el eritroblasto' },
        { id: 'may', col: 3, row: 2, k: 'risk', t: 'Talasemia mayor (Cooley)', s: 'Eritropoyesis ineficaz + hemólisis' },
      ],
      edges: [
        { from: 'mut', to: 'het' }, { from: 'het', to: 'men' },
        { from: 'mut', to: 'hom' }, { from: 'hom', to: 'alf' }, { from: 'alf', to: 'may' },
      ],
      steps: [
        { show: ['mut'], note: 'Beta+ produce menos; beta0 no produce',
          say: 'La talasemia beta se debe a mutaciones que disminuyen la síntesis de cadena beta, llamadas beta más, o que la anulan por completo, llamadas beta cero.' },
        { show: ['het', 'men'], note: 'El que ve el médico general',
          say: 'Si solo un gen está afectado, el portador heterocigoto, tenemos el rasgo talasémico menor. Es asintomático y casi siempre se descubre por casualidad en un hemograma de rutina. Este es el paciente que vas a ver en tu consulta, y el que pregunta el examen.' },
        { show: ['hom', 'alf'], note: 'Sin beta, las alfa sobran y precipitan',
          say: 'En el otro extremo está el homocigoto beta cero, que no fabrica ninguna cadena beta. Las cadenas alfa quedan sin pareja, se acumulan y precipitan dentro del eritroblasto, que muere antes de salir de la médula.' },
        { show: ['may'], note: 'Anemia grave desde el primer año de vida',
          say: 'Eso es la talasemia mayor, o anemia de Cooley: una eritropoyesis ineficaz profunda más una hemólisis extrema. Se manifiesta desde el primer año de vida con anemia grave.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Rasgo talasémico menor',
      title: 'El hemograma que parece ferropenia y no lo es',
      cards: [
        { title: 'Lo que llama la atención', tag: 'Desproporción', kind: 'criteria', items: [
          { t: 'VCM muy bajo: 60 a 72 fL', d: 'Con Hb normal o apenas baja (10–12)',
            say: 'Veamos el hemograma del rasgo, porque es la clave del tema. Lo primero es una desproporción: una microcitosis muy marcada, con volumen corpuscular entre sesenta y setenta y dos, pero con una hemoglobina normal o apenas baja, entre diez y doce. Mucha microcitosis para tan poca anemia.' },
          { t: 'Glóbulos rojos normales o altos', d: 'Más de 5 a 5,5 millones',
            say: 'Y lo segundo, que es lo que más discrimina: el recuento de glóbulos rojos está normal o alto, sobre cinco o cinco y medio millones. La médula fabrica muchos glóbulos, pero cada uno es pequeño. En la ferropenia, en cambio, faltan glóbulos.' },
        ] },
        { title: 'Índices que lo delatan', tag: 'Sin gastar', kind: 'key', items: [
          { t: 'Índice de Mentzer menor de 13', d: 'VCM dividido por millones de GR',
            say: 'De ahí sale el índice de Mentzer: divides el volumen corpuscular por el recuento de glóbulos rojos en millones. Si da menos de trece, orienta a talasemia; si da más de trece, a ferropenia.' },
          { t: 'RDW normal', d: 'Microcitosis homogénea',
            say: 'El ancho de distribución eritrocitaria, el RDW, es normal: todos los glóbulos son igual de pequeños. En la ferropenia está alto, porque conviven glóbulos de distintos tamaños.' },
        ] },
        { title: 'Perfil de hierro', tag: 'Normal', kind: 'alert', items: [
          { t: 'Ferritina normal', d: 'No falta hierro',
            say: 'Y el perfil de hierro es normal, con ferritina normal. Aquí está la trampa: si ves microcitosis y das hierro sin mirar la ferritina, estás tratando una deficiencia que no existe, y generas sobrecarga de hierro. Es un error grave de examen.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Talasemia mayor',
      title: 'Anemia de Cooley: transfusión y hierro de sobra',
      cards: [
        { title: 'Clínica', tag: 'Primer año de vida', kind: 'alert', items: [
          { t: 'Anemia grave dependiente de transfusión', d: 'Transfusiones crónicas periódicas',
            say: 'Volvamos a la talasemia mayor. Desde el primer año de vida, el niño tiene una anemia grave que depende de transfusiones crónicas y periódicas.' },
          { t: 'Hepatoesplenomegalia masiva', d: 'Y facies de ardilla',
            say: 'La médula trata de compensar y se expande: eso deforma los huesos del cráneo y la cara, y da la facies de ardilla. Además, hay hepatoesplenomegalia masiva.' },
        ] },
        { title: 'Complicación', tag: 'Sobrecarga de hierro', kind: 'pharma', items: [
          { t: 'Hemocromatosis transfusional', d: 'Cirrosis, miocardiopatía, diabetes',
            say: 'Y cada transfusión trae hierro que el cuerpo no puede eliminar. Con los años aparece una hemocromatosis transfusional, con cirrosis, miocardiopatía y diabetes, que puede ser letal.' },
          { t: 'Quelantes de hierro', d: 'Deferoxamina o deferasirox',
            say: 'Por eso estos pacientes necesitan quelantes de hierro, deferoxamina o deferasirox. Fíjate en la paradoja: el talasémico no necesita hierro, lo que necesita es sacárselo.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Drepanocitosis',
      title: 'Hemoglobina S: de la hipoxia a la oclusión',
      nodes: [
        { id: 'val', col: 0, row: 1, k: 'cause', t: 'Glutámico por valina', s: 'Posición 6 de la cadena beta' },
        { id: 'gat', col: 0, row: 3, k: 'cause', t: 'Hipoxia, acidosis, deshidratación', s: 'Gatillantes' },
        { id: 'pol', col: 1, row: 2, k: 'mech', t: 'La HbS polimeriza', s: 'Fibras rígidas' },
        { id: 'hoz', col: 2, row: 2, k: 'mech', t: 'Drepanocito', s: 'Glóbulo en forma de hoz' },
        { id: 'voc', col: 3, row: 1, k: 'risk', t: 'Oclusión microvascular', s: 'Dolor óseo, tórax agudo, priapismo' },
        { id: 'baz', col: 3, row: 3, k: 'risk', t: 'Autoesplenectomía', s: 'Asplenia hacia los 5–6 años' },
        { id: 'sep', col: 4, row: 3, k: 'alert', t: 'Sepsis por encapsulados', s: 'Neumococo, Salmonella, Haemophilus' },
      ],
      edges: [
        { from: 'val', to: 'pol' }, { from: 'gat', to: 'pol', label: 'gatilla' }, { from: 'pol', to: 'hoz' },
        { from: 'hoz', to: 'voc' }, { from: 'hoz', to: 'baz', label: 'infartos del bazo' }, { from: 'baz', to: 'sep' },
      ],
      steps: [
        { show: ['val'], note: 'Una sola mutación puntual, autosómica recesiva',
          say: 'Pasemos a la drepanocitosis, o anemia de células falciformes. Es autosómica recesiva, y se debe a una sola mutación puntual: en la posición seis de la cadena beta, el ácido glutámico se cambia por valina. Esa hemoglobina es la hemoglobina S.' },
        { show: ['gat', 'pol'], note: 'Desoxigenada, la HbS forma fibras',
          say: 'Mientras está oxigenada se comporta bien. Pero con hipoxia, acidosis o deshidratación, la hemoglobina S desoxigenada se polimeriza y forma fibras rígidas. Recuerda esos tres gatillantes, porque el tratamiento apunta justo a revertirlos.' },
        { show: ['hoz'], note: 'El glóbulo pierde flexibilidad',
          say: 'Esas fibras deforman el glóbulo en forma de hoz o medialuna: el drepanocito, rígido y sin flexibilidad.' },
        { show: ['voc'], note: 'Crisis dolorosa, síndrome torácico agudo, priapismo',
          say: 'Un glóbulo rígido tapa los capilares. De ahí salen las crisis vasooclusivas dolorosas, con dolor óseo intolerable en fémur, columna o tórax; el síndrome torácico agudo, con infiltrados, disnea y dolor torácico, que es la principal causa de muerte en adultos; y el priapismo isquémico.' },
        { show: ['baz', 'sep'], note: 'Sin bazo funcional: riesgo de sepsis fulminante',
          say: 'Y la complicación que conecta con la clase anterior: los microinfartos repetidos en el bazo lo van atrofiando, hasta dejar una asplenia funcional hacia los cinco o seis años. Es la autoesplenectomía. Igual que el esplenectomizado, este niño queda expuesto a sepsis fulminante por neumococo, Haemophilus y Salmonella.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico de certeza',
      title: 'Electroforesis de hemoglobina: qué buscar',
      cards: [
        { title: 'Rasgo talasémico beta', tag: 'HbA2 alta', kind: 'key', items: [
          { t: 'HbA2 mayor de 3,5 %', d: 'Habitualmente 4 a 7 %',
            say: 'La confirmación de ambas es la electroforesis de hemoglobina, por cromatografía líquida de alta resolución o por enfoque isoeléctrico. En el rasgo talasémico beta, el hallazgo que la confirma es la hemoglobina A dos sobre tres coma cinco por ciento, habitualmente entre cuatro y siete.' },
          { t: 'A veces HbF levemente alta', d: 'Hemoglobina fetal',
            say: 'A veces también sube un poco la hemoglobina fetal. La lógica es simple: si falta cadena beta, el cuerpo usa las otras cadenas para armar hemoglobinas alternativas.' },
        ] },
        { title: 'Anemia falciforme', tag: 'HbSS', kind: 'alert', items: [
          { t: 'HbS mayoritaria', d: 'Más de 70 a 90 %, sin HbA1',
            say: 'En la anemia falciforme homocigota, la electroforesis muestra un pico mayoritario de hemoglobina S, sobre setenta a noventa por ciento, y no hay hemoglobina A uno.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Crisis vasooclusiva en urgencias',
      cards: [
        { title: 'Manejo agudo', tag: 'Urgencia', kind: 'pharma', items: [
          { t: 'Hidratación EV vigorosa', d: 'Cristaloides isotónicos',
            say: 'Veamos la crisis vasooclusiva en urgencias. Lo primero es hidratación endovenosa vigorosa con cristaloides isotónicos. ¿Por qué? Porque revierte la deshidratación, uno de los gatillantes, y ayuda a despolimerizar la hemoglobina S.' },
          { t: 'Opioides de inmediato', d: 'Morfina EV o fentanilo',
            say: 'Segundo, analgesia inmediata y escalonada con opioides potentes, morfina endovenosa o fentanilo. El dolor es isquémico e intolerable; no se le deja esperando.' },
          { t: 'Oxígeno si saturación menor de 92 %', d: 'No de rutina',
            say: 'Tercero, oxígeno, pero solo si la saturación está bajo noventa y dos por ciento.' },
          { t: 'Ceftriaxona si hay infección', d: 'Cubre neumococo',
            say: 'Y cuarto, antibiótico empírico inmediato si hay una infección intercurrente, con ceftriaxona, que cubre al neumococo. Recuerda que este paciente no tiene bazo.' },
        ] },
        { title: 'Prevención', tag: 'Largo plazo', kind: 'key', items: [
          { t: 'Hidroxiurea', d: 'Sube la hemoglobina fetal, que no polimeriza',
            say: 'A largo plazo, el tratamiento modificador es la hidroxiurea. Estimula la síntesis de hemoglobina fetal, que no se polimeriza, y así reduce en más de la mitad las crisis dolorosas y el síndrome torácico agudo.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en el árbol que usarás frente a una microcitosis.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Ferropenia vs rasgo talasémico menor',
      head: ['Parámetro', 'Anemia ferropénica', 'Rasgo talasémico beta'],
      rows: [
        { cells: ['VCM', 'Bajo, proporcional a la anemia', 'Muy bajo (< 70 fL), desproporcionado'],
          say: 'Repasemos la comparación que más se pregunta. En la ferropenia, el volumen corpuscular baja en proporción a la anemia. En el rasgo, baja mucho más de lo que la anemia justifica.' },
        { cells: ['Glóbulos rojos', 'Bajos (< 4 millones)', 'Normales o altos (> 5–5,5 millones)'],
          say: 'Los glóbulos rojos: bajos en la ferropenia, normales o altos en el rasgo.' },
        { cells: ['Índice de Mentzer', 'Mayor de 13', 'Menor de 13'],
          say: 'El índice de Mentzer: sobre trece orienta a ferropenia, bajo trece a talasemia.' },
        { cells: ['RDW', 'Alto (> 15 %)', 'Normal (11,5–14,5 %)'],
          say: 'El RDW: alto en la ferropenia, sobre quince por ciento, y normal en el rasgo.' },
        { cells: ['Ferritina', 'Baja (< 30 ng/mL)', 'Normal o levemente alta'],
          say: 'La ferritina: baja en la ferropenia, bajo treinta, y normal en el rasgo.' },
        { cells: ['Electroforesis', 'Normal (HbA2 < 3 %)', 'HbA2 > 3,5 %'],
          say: 'La electroforesis: normal en la ferropenia, y con hemoglobina A dos sobre tres coma cinco en el rasgo.' },
        { cells: ['Conducta', 'Hierro oral y buscar el sangrado', 'Consejo genético; no dar hierro'],
          say: 'Y la conducta: en la ferropenia, hierro oral y buscar la causa del sangrado. En el rasgo, asesoría genética y nada de hierro. Esa es la respuesta que el examen busca.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 26 años, asintomático, de ascendencia italiana, en examen preventivo laboral. Hb 11,8 g/dL, VCM 64 fL, HCM 20 pg, glóbulos rojos 5,8 millones/µL, RDW 12,8 % (normal), plaquetas y leucocitos normales. Recibió sulfato ferroso oral por 3 meses sin cambios en el hemograma. Ferritina 140 ng/mL (VN 30–200), saturación de transferrina 32 %.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Cambiar a hierro endovenoso por mala absorción oral' },
        { letter: 'B', text: 'Suspender el hierro y solicitar electroforesis de hemoglobina' },
        { letter: 'C', text: 'Solicitar endoscopía y colonoscopía para buscar sangrado' },
        { letter: 'D', text: 'Duplicar la dosis de sulfato ferroso por 3 meses más' },
        { letter: 'E', text: 'Solicitar biopsia de médula ósea' },
      ],
      correct: 'B',
      explanation: 'Microcitosis marcada con Hb casi normal, GR 5,8 millones, Mentzer 64/5,8 = 11 (< 13), RDW normal y ferritina normal: rasgo talasémico beta menor. Se suspende el hierro (evitar sobrecarga) y se confirma con electroforesis: HbA2 > 3,5 %.',
      say: {
        stem: 'Vamos con un caso. Hombre de veintiséis años, asintomático, de ascendencia italiana, en un examen preventivo. Hemoglobina de once coma ocho, volumen corpuscular de sesenta y cuatro, glóbulos rojos de cinco coma ocho millones, y RDW normal. Otro médico le dio sulfato ferroso por tres meses, y el hemograma quedó idéntico. Hoy la ferritina es ciento cuarenta, normal, con saturación de transferrina de treinta y dos por ciento.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: pasar a hierro endovenoso, suspender el hierro y pedir electroforesis, estudiar sangrado con endoscopía y colonoscopía, duplicar el sulfato ferroso, o biopsia de médula. Piénsalo.',
        answer: 'Es la B. Mira la desproporción: un volumen de sesenta y cuatro con hemoglobina casi normal, glóbulos rojos altos, y un Mentzer de sesenta y cuatro dividido por cinco coma ocho, que da once, bajo trece. RDW y ferritina normales: es un rasgo talasémico. Se suspende el hierro y se pide electroforesis buscando la hemoglobina A dos alta. El hierro endovenoso tienta porque el oral no funcionó, pero no funcionó porque nunca faltó hierro.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 115',
      stem: 'Un niño de 9 meses tiene palidez de piel y mucosas, por lo que se solicita un hemograma, que muestra hemoglobina: 9 g/dl, hematocrito: 36%, VCM: 68 fl, glóbulos blancos: 6.500 por mm3, plaquetas: 450.000 por mm3.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Anemia ferropriva' },
        { letter: 'B', text: 'Anemia por enfermedades crónicos' },
        { letter: 'C', text: 'Trombocitosis esencial' },
        { letter: 'D', text: 'Hemoglobinopatía' },
        { letter: 'E', text: 'Microesferocitosis familiar' },
      ],
      correct: 'A',
      explanation: 'Es una anemia ferropénica clásica, tanto por la edad como por la microcitosis. La hemoglobinopatía es posible, pero mucho menos frecuente; sin un recuento de glóbulos rojos alto, RDW normal y ferritina normal, no hay por qué pensar primero en ella.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil dieciocho. Niño de nueve meses con palidez. Su hemograma muestra hemoglobina de nueve, volumen corpuscular de sesenta y ocho, blancos normales y plaquetas de cuatrocientas cincuenta mil.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: anemia ferropriva, anemia de enfermedades crónicas, trombocitosis esencial, hemoglobinopatía, o microesferocitosis familiar. Piénsalo.',
        answer: 'Es la A, anemia ferropriva. A los nueve meses, las reservas de hierro del nacimiento se agotan, y la microcitosis con plaquetas en el límite alto es la ferropenia clásica del lactante. La hemoglobinopatía es el distractor tentador después de esta clase, pero es mucho menos frecuente, y aquí no tienes ningún dato que la sugiera: ni glóbulos rojos altos, ni RDW normal, ni ferritina normal. Lo frecuente primero.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Paciente de 45 años consulta porque le indicaron que padecía de anemia. El hemograma constata recuento de blancos y plaquetas normales, Hcto: 33%, Hb: 11 g/dl, VCM: 70. En el frotis se aprecia isocitosis y normalidad del índice de dispersión eritrocítica. Se solicita perfil de hierro que resulta normal.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Talasemia' },
        { letter: 'B', text: 'Anemia ferropénica' },
        { letter: 'C', text: 'Anemia de enfermedades crónicas' },
        { letter: 'D', text: 'Anemia hemolítica crónica' },
        { letter: 'E', text: 'Hemocromatosis' },
      ],
      correct: 'A',
      explanation: 'Microcitosis con anemia leve, isocitosis (RDW normal) y perfil de hierro normal: rasgo talasémico. La ferropenia tendría RDW alto y ferritina baja; la anemia de enfermedades crónicas tendría ferremia baja con ferritina normal o alta y suele ser normocítica.',
      say: {
        stem: 'Ahora un caso representativo del banco EUNACOM. Paciente de cuarenta y cinco años a quien le dijeron que tenía anemia. Tiene hemoglobina de once, volumen corpuscular de setenta, blancos y plaquetas normales. El frotis muestra isocitosis, con índice de dispersión eritrocitaria normal, y el perfil de hierro es normal.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: talasemia, anemia ferropénica, anemia de enfermedades crónicas, anemia hemolítica crónica, o hemocromatosis. Piénsalo.',
        answer: 'Es la A, talasemia. Microcitosis con anemia leve, todos los glóbulos del mismo tamaño y hierro normal: es el rasgo talasémico. La ferropenia es la trampa, porque es la microcitosis más frecuente, pero tendría el RDW alto y el hierro bajo. Fíjate que la pregunta te da justo los dos datos que las separan.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Rasgo talasémico', tag: 'No es ferropenia', kind: 'key', items: [
          { t: 'Microcitosis desproporcionada', d: 'GR altos, RDW y ferritina normales',
            say: 'Cerremos con las reglas de oro. Microcitosis marcada con poca anemia, glóbulos rojos altos, RDW normal y ferritina normal: rasgo talasémico, con Mentzer bajo trece.' },
          { t: 'Confirmar con electroforesis', d: 'HbA2 mayor de 3,5 %',
            say: 'Se confirma con electroforesis, buscando la hemoglobina A dos sobre tres coma cinco por ciento.' },
          { t: 'Nunca dar hierro', d: 'Genera sobrecarga',
            say: 'Y nunca le des hierro: no le falta, y lo sobrecargas.' },
        ] },
        { title: 'Talasemia mayor', tag: 'Cooley', kind: 'alert', items: [
          { t: 'Transfusiones + quelantes', d: 'Deferoxamina o deferasirox',
            say: 'La talasemia mayor debuta en el primer año con anemia grave, depende de transfusiones y necesita quelantes de hierro.' },
        ] },
        { title: 'Drepanocitosis', tag: 'HbS', kind: 'pharma', items: [
          { t: 'Crisis: volumen, opioides, O2 si < 92 %', d: 'Ceftriaxona si hay infección',
            say: 'En la crisis falciforme: volumen, opioides, oxígeno si la saturación está bajo noventa y dos, y ceftriaxona si hay infección.' },
          { t: 'Hidroxiurea a largo plazo', d: 'Sube la HbF',
            say: 'A largo plazo, hidroxiurea. Si te llevas una sola idea de hoy: frente a una microcitosis, mira los glóbulos rojos y la ferritina antes de dar hierro. En la próxima clase cerramos las hemolíticas con las microangiopatías trombóticas. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Microcitosis: ¿ferropenia o rasgo talasémico?',
    root: N('start', 'Anemia microcítica', 'VCM bajo en el hemograma',
      'Tienes un hemograma con microcitosis. Antes de indicar hierro, hay que decidir si realmente falta hierro.',
      ['', N('q', '¿Ferritina y recuento de GR?', 'Más RDW e índice de Mentzer',
        'Mira la ferritina, el recuento de glóbulos rojos, el RDW y el índice de Mentzer.',
        ['Ferritina baja, GR bajos, RDW alto', N('do', 'Anemia ferropénica', 'Mentzer mayor de 13',
          'Ferritina baja, pocos glóbulos, RDW alto y Mentzer sobre trece: ferropenia.',
          ['', N('ok', 'Hierro oral + buscar sangrado', 'Ver clase de ferropenia',
            'Hierro oral y buscar la causa del sangrado, como vimos en la clase de ferropenia.')])],
        ['Ferritina normal, GR altos, RDW normal', N('do', 'Electroforesis de hemoglobina', 'Mentzer menor de 13',
          'Ferritina normal, glóbulos altos, RDW normal y Mentzer bajo trece: sospecha de rasgo talasémico. Pides electroforesis de hemoglobina.',
          ['HbA2 > 3,5 %', N('ok', 'Rasgo talasémico beta', 'Suspender hierro, consejo genético',
            'Hemoglobina A dos sobre tres coma cinco: rasgo talasémico beta. Se suspende el hierro y se da asesoría genética.')])],
        ['Lactante con anemia grave', N('refer', 'Talasemia mayor', 'Transfusión + quelantes',
          'Si en cambio es un lactante con anemia grave desde el primer año, hepatoesplenomegalia y facies de ardilla, piensa en talasemia mayor: transfusiones crónicas y quelantes, con hematología.')])]),
  },
};
