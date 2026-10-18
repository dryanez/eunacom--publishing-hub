// Clase 19.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_obstetricia_bloque_1.cjs (ob-01).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

const pwPenicilina = N('alert', 'Penicilina G endovenosa', 'Al entrar en trabajo de parto',
  'Si el cultivo sale positivo, no la tratas antes. Anotas el resultado en su carné, y ella recibe penicilina G endovenosa apenas entre en trabajo de parto, o se le rompan las membranas.');

const pwSinTratar = N('ok', 'No necesita nada más', 'Cultivo negativo, control habitual',
  'Si el cultivo sale negativo, sigue con el control habitual, sin ninguna profilaxis.');

const pwEgb = N('q', '¿El cultivo salió positivo?', 'Streptococcus agalactiae',
  'Y aquí viene la pregunta donde más se equivocan: ¿el cultivo salió positivo?',
  ['Sí', pwPenicilina],
  ['No', pwSinTratar]);

const pwBateria1 = N('do', 'Batería del primer trimestre', 'Grupo, Rh, VDRL, VIH, glicemia',
  'Antes de las doce semanas pides la batería completa: grupo y Rh, Coombs indirecto, VDRL, test de VIH, glicemia de ayunas, orina y urocultivo.');

const pwPtgo = N('do', 'PTGO con 75 gramos', 'A todas, entre las 24 y 28 semanas',
  'Entre las veinticuatro y las veintiocho semanas, la prueba de tolerancia a la glucosa con setenta y cinco gramos va para todas tus pacientes, no solo para las de riesgo.');

const pwSemana = N('q', '¿En qué semana está?', 'Eso decide el examen',
  'Lo primero que te preguntas es en qué semana está tu paciente, porque eso decide qué examen toca.',
  ['Antes de las 12 semanas', pwBateria1],
  ['Entre las 24 y 28 semanas', pwPtgo],
  ['Entre las 35 y 37 semanas', pwEgb]);

const pwAlto = N('do', 'Ácido fólico 4 a 5 mg', 'Alto riesgo de defecto del tubo neural',
  'Si tiene un hijo previo con defecto del tubo neural, es diabética, o toma anticonvulsivantes, le indicas cuatro a cinco miligramos al día.');

const pwBajo = N('do', 'Ácido fólico 0,4 a 1 mg', 'Bajo riesgo, sin antecedentes',
  'Si no tiene esos antecedentes, con cero coma cuatro a un miligramo al día te alcanza.');

const pwRiesgo = N('q', '¿Tiene antecedente de riesgo?', 'Para el tubo neural',
  'La otra pregunta te la haces desde el primer control: ¿tiene algún antecedente de riesgo para el tubo neural?',
  ['Sí: hijo con DTN, diabética o anticonvulsivantes', pwAlto],
  ['No', pwBajo]);

const pwRoot = N('start', 'Primer control prenatal', 'Dos preguntas antes de recetar',
  'Aquí tienes a tu paciente en su primer control. Antes de recetar nada, hazte dos preguntas.',
  ['¿Cuánto ácido fólico le indico?', pwRiesgo],
  ['¿Qué examen toca esta semana?', pwSemana]);

module.exports = {
  id: 'ob-01',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Calendario, suplementación y la batería de exámenes que no te puedes saltar',
      say: 'Bienvenido a la primera clase de obstetricia. Vas a ver el control prenatal de bajo riesgo: el calendario de visitas, cuánto ácido fólico, calcio y hierro le indicas a tu paciente, y qué examen toca en cada trimestre. Suena administrativo, pero es de las clases más rentables del examen, porque casi todo se pregunta con una fecha o una dosis exacta. Empecemos.',
    },

    {
      type: 'flow',
      kicker: 'Antes de todo',
      title: '¿En qué semana está tu paciente?',
      nodes: [
        { id: 'fum', col: 0, row: 1, k: 'start', t: 'Fecha de última regla', s: 'Si el ciclo era regular y confiable' },
        { id: 'nag', col: 1, row: 1, k: 'mech', t: 'Regla de Naegele', s: 'Más siete días, menos tres meses' },
        { id: 'eco', col: 0, row: 3, k: 'cause', t: 'Ecografía precoz', s: 'Longitud céfalo-nalgas, entre 7 y 14 semanas' },
        { id: 'dif', col: 1, row: 2, k: 'q', t: '¿Cuánto difieren?', s: 'Fecha de regla versus ecografía' },
        { id: 'cor', col: 2, row: 3, k: 'good', t: 'Corriges por la ecografía', s: 'Pasa a ser la fecha oficial' },
        { id: 'man', col: 2, row: 1, k: 'effect', t: 'Mantienes la fecha de regla', s: 'Diferencia pequeña' },
      ],
      edges: [
        { from: 'fum', to: 'nag' },
        { from: 'nag', to: 'dif' },
        { from: 'eco', to: 'dif' },
        { from: 'dif', to: 'cor', label: 'más de 5 a 7 días' },
        { from: 'dif', to: 'man', label: 'menos de 5 días' },
      ],
      steps: [
        { show: ['fum'], note: 'Punto de partida: la fecha de última regla',
          say: 'Antes de pedir cualquier examen, tienes que saber en qué semana está tu paciente, porque de eso depende todo lo demás. Si su fecha de última regla es confiable y su ciclo era regular, partes de ahí.' },
        { show: ['nag'], note: 'Naegele: más siete días, menos tres meses',
          say: 'Con esa fecha aplicas la regla de Naegele: le sumas siete días y le restas tres meses. Ahí tienes la fecha probable de parto.' },
        { show: ['eco'], note: 'La ecografía precoz mide mejor',
          say: 'Pero fíjate en algo importante: la ecografía del primer trimestre, entre las siete y las catorce semanas, mide la longitud céfalo-nalgas, y es más precisa que la fecha que te da la paciente.' },
        { show: ['dif'], note: 'Comparas las dos fechas',
          say: 'Entonces comparas las dos. ¿Y si no coinciden?' },
        { show: ['cor'], note: 'Diferencia grande: gana la ecografía',
          say: 'Si la diferencia es mayor a cinco o siete días, la ecografía gana: se vuelve la fecha oficial, y ya no se mueve más.' },
        { show: ['man'], note: 'Diferencia chica: te quedas con la regla',
          say: 'Si la diferencia es menor, te quedas con la fecha de última regla. Esa diferencia se pregunta seguido, así que guárdala.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Suplementación',
      title: 'Lo que le recetas, y cuándo empieza cada cosa',
      cards: [
        { title: 'Ácido fólico', tag: 'Antes del embarazo', kind: 'pharma', items: [
          { t: 'Bajo riesgo', d: '0,4 a 1 miligramo al día',
            say: 'Pasemos a lo que le vas a recetar. En una paciente sin antecedentes, el ácido fólico va de cero coma cuatro a un miligramo al día.' },
          { t: 'Alto riesgo', d: '4 a 5 miligramos al día',
            say: 'Pero si hay un hijo previo con defecto del tubo neural, si es diabética, o si toma anticonvulsivantes, la dosis sube diez veces: cuatro a cinco miligramos al día. Y en los dos casos, empiezas tres meses antes de buscar el embarazo, y mantienes hasta que se cierra el tubo neural, a las doce semanas.' },
        ] },
        { title: 'Carbonato de calcio', tag: 'Desde las 12 a 16 semanas', kind: 'pharma', items: [
          { t: '1.000 a 1.500 mg al día', d: 'Recién desde las 12 a 16 semanas',
            say: 'El calcio arranca después, entre las doce y las dieciséis semanas, con mil a mil quinientos miligramos al día. Fíjate en el porqué: baja el riesgo de preeclampsia en más de la mitad.' },
        ] },
        { title: 'Hierro oral', tag: 'Desde las 16 a 20 semanas', kind: 'pharma', items: [
          { t: '30 a 60 mg al día', d: 'Si la hemoglobina o ferritina están al límite',
            say: 'El hierro se suma desde las dieciséis a veinte semanas, si la hemoglobina o la ferritina están justo en el límite. Y acuérdate de la meta: hemoglobina de once o más en el primer y tercer trimestre, y diez coma cinco en el segundo, porque ahí el plasma se diluye más.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Batería de exámenes',
      title: 'Qué toca en cada trimestre',
      cards: [
        { title: 'Primer trimestre', tag: 'Antes de las 12 semanas', kind: 'criteria', items: [
          { t: 'Grupo, Rh y Coombs', d: 'Hemograma, VDRL, VIH, glicemia y urocultivo',
            say: 'Ahora los exámenes. En el primer trimestre pides grupo y Rh con Coombs indirecto, hemograma, VDRL, test de VIH, glicemia de ayunas, orina con urocultivo, y en zonas con riesgo, serología de Chagas.' },
          { t: 'Glicemia entre 100 y 125', d: 'Repites el examen antes de decidir',
            say: 'Ojo con la glicemia de ayunas. Si te sale entre cien y ciento veinticinco, no corras a pedir la prueba de tolerancia: repites la glicemia. Si se repite alterada, ya es diabetes gestacional precoz. Si sale ciento veintiséis o más, es una diabetes pregestacional que recién se manifiesta.' },
        ] },
        { title: 'Segundo trimestre', tag: '24 a 28 semanas', kind: 'key', items: [
          { t: 'PTGO con 75 gramos', d: 'A todas las embarazadas',
            say: 'A las veinticuatro a veintiocho semanas le pides la prueba de tolerancia a la glucosa con setenta y cinco gramos, a todas tus pacientes, no solo a las de riesgo.' },
          { t: '140 a las 2 horas', d: 'Diagnostica diabetes gestacional',
            say: 'Si a las dos horas la glicemia es ciento cuarenta o más, ya tienes el diagnóstico de diabetes gestacional.' },
        ] },
        { title: 'Tercer trimestre', tag: '35 a 37 semanas', kind: 'alert', items: [
          { t: 'Cultivo vaginorrectal', d: 'Busca el Streptococcus agalactiae',
            say: 'Y entre las treinta y cinco y las treinta y siete semanas tomas el cultivo vaginorrectal, buscando el Streptococcus agalactiae, el estreptococo del grupo B.' },
          { t: 'Si sale positivo', d: 'Penicilina G endovenosa durante el parto',
            say: 'Si sale positivo, tú no tratas antes del parto: la bacteria vuelve en pocos días. Lo que haces es dejarlo anotado, y ella recibe penicilina G endovenosa apenas entre en trabajo de parto.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Anemia en el embarazo',
      title: 'Cómo se define y cómo se confirma',
      cards: [
        { title: 'Definición', tag: 'OMS y MINSAL', kind: 'criteria', items: [
          { t: 'Hb menor de 11 g/dL', d: '1.er y 3.er trimestre',
            say: 'Volvamos a la anemia, que es muy preguntada. Se define como hemoglobina menor de once en el primer y tercer trimestre, y menor de diez coma cinco en el segundo.' },
          { t: 'Leve, moderada, severa', d: '10-10,9 · 7-9,9 · menor de 7',
            say: 'Se grada en leve, de diez a diez coma nueve; moderada, de siete a nueve coma nueve; y severa, bajo siete.' },
          { t: '90% es ferropénica', d: 'Plasma +40-50%, glóbulos +20-30%',
            say: 'Cerca del noventa por ciento es por falta de hierro, porque el plasma aumenta más que la masa de glóbulos rojos y los requerimientos de hierro se disparan. Le siguen el déficit de folato o vitamina B doce y las hemoglobinopatías.' },
        ] },
        { title: 'Diagnóstico', tag: 'Hemograma y ferritina', kind: 'key', items: [
          { t: 'VCM y HCM bajos', d: 'Ferritina menor de 30 ng/mL',
            say: 'Para confirmarla pides hemograma con índices: volumen y hemoglobina corpuscular bajos, y una ferritina menor de treinta nanogramos por mililitro, que confirma el déficit de hierro.' },
          { t: 'VCM muy bajo, ferritina normal', d: 'Electroforesis: talasemia',
            say: 'Si el volumen corpuscular es muy bajo pero la ferritina es normal, piensa en talasemia y pides electroforesis de hemoglobina. Y si el patrón no es ferropénico, frotis, reticulocitos, folato y vitamina B doce.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Anemia en el embarazo',
      title: 'Tratamiento: oral primero, endovenoso si falla',
      cards: [
        { title: 'Hierro oral', tag: 'Primera línea', kind: 'pharma', items: [
          { t: '100 a 200 mg de hierro elemental', d: 'Fraccionado, lejos de las comidas',
            say: 'El tratamiento de la anemia ferropénica es hierro oral en dosis terapéutica: cien a doscientos miligramos de hierro elemental al día, fraccionado, lejos de las comidas y con vitamina C. Un comprimido de sulfato ferroso de trescientos miligramos aporta sesenta de hierro elemental.' },
          { t: 'Sin té, café, leche ni calcio', d: 'Bloquean la absorción',
            say: 'No lo tomes junto con té, café, leche ni con el carbonato de calcio de la profilaxis, porque bloquean la absorción. Si da epigastralgia o constipación, bajas la dosis o lo das en días alternos.' },
          { t: 'Hb sube 1 g/dL en 2-3 semanas', d: 'Control a las 4 semanas',
            say: 'La respuesta se ve rápido: reticulocitos a los siete a diez días, y la hemoglobina sube al menos un gramo en dos a tres semanas. La controlas a las cuatro. Mantienes el hierro hasta tres meses después de normalizarla y al menos seis semanas postparto.' },
        ] },
        { title: 'Endovenoso y transfusión', tag: 'Situaciones especiales', kind: 'alert', items: [
          { t: 'Hierro EV', d: 'Intolerancia, falla o poco tiempo al parto',
            say: 'El hierro endovenoso es para intolerancia o falla del oral, malabsorción, o una anemia moderada a severa que descubres en el segundo o tercer trimestre con poco tiempo para el parto. Nunca en el primer trimestre.' },
          { t: 'Transfusión', d: 'Hb menor de 7 con repercusión',
            say: 'La transfusión se reserva para hemoglobina bajo siete con repercusión hemodinámica, sangrado activo, o anemia severa cerca del parto. Toda anemia severa se hospitaliza y se estudia en alto riesgo obstétrico.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'El calendario del control prenatal',
      images: [
        { src: 'animaciones/ob-01/A1_calendario.mp4', label: 'Calendario por semana', credit: 'Animación propia · Guía Perinatal MINSAL' },
      ],
      steps: [
        { note: 'Cada examen, su semana',
          say: 'Mira cómo se ordena todo en el tiempo. Mientras avanza el embarazo se van encendiendo el ácido fólico, la batería de ingreso, la ecografía de las once a catorce, el calcio y el hierro, la prueba de tolerancia a la glucosa entre las veinticuatro y veintiocho semanas, y al final el cultivo vaginorrectal. Cada dato tiene su ventana, y eso es lo que se pregunta.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos las dos preguntas del control prenatal en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las dosis y los tiempos que más se confunden',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Alto riesgo de defecto del tubo neural', 'Ácido fólico 4 a 5 mg desde 3 meses antes', 'Dejarla con 0,4 mg, como si fuera bajo riesgo'],
          say: 'Repasemos las trampas. Alto riesgo de defecto del tubo neural: ácido fólico cuatro a cinco miligramos, desde tres meses antes. El error es dejarla con la dosis de bajo riesgo.' },
        { cells: ['FUM y ecografía difieren más de 5 a 7 días', 'Corregir la edad gestacional por la ecografía', 'Mantener la fecha de última regla'],
          say: 'Si la fecha de última regla y la ecografía difieren más de cinco a siete días, corriges por la ecografía. El error es aferrarse a la fecha que dio la paciente.' },
        { cells: ['Glicemia de ayuno entre 100 y 125', 'Repetir la glicemia de ayuno', 'Pedir la PTGO de inmediato'],
          say: 'Glicemia de ayuno entre cien y ciento veinticinco: repites la glicemia. El error es saltarte ese paso y pedir la prueba de tolerancia de una vez.' },
        { cells: ['PTGO con glicemia de 140 o más a las 2 horas', 'Diagnóstico de diabetes gestacional', 'Pedir una segunda prueba para confirmar'],
          say: 'Con la prueba de tolerancia, si a las dos horas sale ciento cuarenta o más, el diagnóstico ya está hecho. El error es pedir una segunda prueba, como si hiciera falta confirmar.' },
        { cells: ['Cultivo vaginorrectal positivo, paciente sin síntomas', 'Anotar y dar penicilina G en el parto', 'Tratarla con antibiótico oral antes del parto'],
          say: 'Y con el cultivo positivo para estreptococo, la respuesta es penicilina en el parto, no antes. Ese antibiótico oral previo es la trampa más repetida de todo el tema.' },
        { cells: ['Anemia ferropénica leve a moderada, estable', 'Hierro oral 100 a 200 mg de hierro elemental', 'Indicar hierro endovenoso o transfundir de entrada'],
          say: 'Y con anemia por falta de hierro, estable, la primera línea es hierro oral en dosis de tratamiento. El error es saltar al hierro endovenoso o a la transfusión, que se guardan para la falla, la intolerancia o la anemia severa.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Primigesta de 9 semanas por FUM confiable, sin antecedentes mórbidos, acude a su primer control prenatal. Pregunta qué debe empezar a tomar y qué exámenes se le van a solicitar.',
      question: '¿Cuál es la indicación correcta para este control?',
      options: [
        { letter: 'A', text: 'Ácido fólico 0,4 a 1 mg al día y batería completa de exámenes del primer trimestre' },
        { letter: 'B', text: 'Ácido fólico 4 a 5 mg al día, por tratarse de su primer embarazo' },
        { letter: 'C', text: 'Iniciar carbonato de calcio 1.000 mg al día desde este control' },
        { letter: 'D', text: 'Solicitar la PTGO de 75 gramos en este mismo control' },
        { letter: 'E', text: 'Iniciar hierro oral profiláctico desde este control' },
      ],
      correct: 'A',
      explanation: 'Sin antecedentes de riesgo, el ácido fólico es en dosis de bajo riesgo (0,4–1 mg/día), y a las 9 semanas corresponde la batería del primer trimestre. El calcio se inicia recién a las 12–16 semanas, la PTGO a las 24–28 semanas, y el hierro desde las 16–20 semanas: ninguno de los tres corresponde todavía.',
      say: {
        stem: 'Vamos con un caso. Primigesta de nueve semanas, por una fecha de regla confiable, sin antecedentes, que llega a su primer control prenatal. Te pregunta qué tiene que empezar a tomar y qué exámenes le vas a pedir.',
        question: '¿Cuál es la indicación correcta para este control?',
        options: 'Tienes cinco opciones: ácido fólico en dosis baja más la batería del primer trimestre, ácido fólico en dosis alta solo por ser su primer embarazo, iniciar calcio desde ya, pedir la prueba de tolerancia a la glucosa ahora mismo, o iniciar hierro desde ya. Piénsalo.',
        answer: 'Es la A. No tiene ningún antecedente de riesgo, así que el ácido fólico va en dosis baja, y a las nueve semanas corresponde justo la batería del primer trimestre. El resto son trampas de tiempo: el calcio parte a las doce a dieciséis semanas, la prueba de tolerancia a las veinticuatro a veintiocho, y el hierro desde las dieciséis a veinte. Ninguno de esos tres toca todavía.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 60',
      stem: 'Mujer de 35 años, con embarazo de 15 semanas, sin síntomas. En exámenes de control destaca VDRL negativo, hemoglobina de 11,5 mg/dL y glicemia de ayuno de 108 mg/dL. Examen físico normal, con altura uterina acorde.',
      question: '¿Cuál es la conducta más adecuada en este caso?',
      options: [
        { letter: 'A', text: 'Solicitar test de tolerancia oral a la glucosa' },
        { letter: 'B', text: 'Indicar dieta y mantener el control habitual' },
        { letter: 'C', text: 'Solicitar hemoglobina glicosilada' },
        { letter: 'D', text: 'Indicar insulina subcutánea' },
        { letter: 'E', text: 'Solicitar una nueva glicemia de ayunas' },
      ],
      correct: 'E',
      explanation: 'Glicemia de ayuno entre 100 y 125 mg/dL: se repite el examen, no se salta a la prueba de tolerancia ni se trata todavía. La PTGO se reserva para las 24 a 28 semanas, salvo que la segunda glicemia confirme la diabetes gestacional precoz.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil trece. Mujer de treinta y cinco años, con embarazo de quince semanas, sin síntomas. Su VDRL es negativo, su hemoglobina es once coma cinco, y su glicemia de ayuno sale en ciento ocho. El examen físico es normal.',
        question: '¿Cuál es la conducta más adecuada en este caso?',
        options: 'Las opciones son: pedir la prueba de tolerancia a la glucosa, indicar dieta y seguir el control habitual, pedir hemoglobina glicosilada, indicar insulina, o pedir una nueva glicemia de ayunas. Piénsalo.',
        answer: 'Es la E. Fíjate que ciento ocho cae justo entre cien y ciento veinticinco, y eso no te manda directo a la prueba de tolerancia: primero repites la glicemia de ayunas. Si vuelve a salir alterada, ahí sí es diabetes gestacional precoz. Pedir la prueba de tolerancia de entrada, o tratarla con insulina, es adelantarse al paso que corresponde.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 38',
      stem: 'Paciente de 25 años, vegana estricta, con antecedente de un parto hace 6 meses de un hijo con mielomeningocele, consulta porque desea planificar un nuevo embarazo.',
      question: '¿Qué suplemento se le debe indicar de manera prioritaria?',
      options: [
        { letter: 'A', text: 'Vitamina B12' },
        { letter: 'B', text: 'Ácido fólico' },
        { letter: 'C', text: 'Calcio' },
        { letter: 'D', text: 'Hierro' },
        { letter: 'E', text: 'Ácidos grasos omega-3' },
      ],
      correct: 'B',
      explanation: 'La dieta vegana estricta se asocia sobre todo a déficit de vitamina B12, pero el antecedente de un hijo con defecto del tubo neural manda por sobre eso: se indica ácido fólico en dosis alta (4 mg/día), idealmente desde 3 meses antes del embarazo y hasta la semana 12.',
      say: {
        stem: 'Y una pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Paciente de veinticinco años, vegana estricta, con un parto hace seis meses de un hijo con mielomeningocele, que consulta porque quiere planificar un nuevo embarazo.',
        question: '¿Cuál es el suplemento que se indica de manera prioritaria?',
        options: 'Las opciones: vitamina B doce, ácido fólico, calcio, hierro, o ácidos grasos omega tres. Piénsalo.',
        answer: 'Es la B. La pregunta te tienta con la vitamina B doce, porque la dieta vegana sí se asocia a ese déficit. Pero el antecedente que manda aquí es el hijo previo con defecto del tubo neural: eso te obliga al ácido fólico en dosis alta, cuatro miligramos al día, empezando idealmente tres meses antes del embarazo y hasta la semana doce. La vitamina B doce importa, pero no es la prioridad de esta paciente.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2018 · Pregunta 90",
      "stem": "Paciente con antecedente de reglas irregulares, que ocurren cada 45 a 60 días, se realiza un test de embarazo que resulta positivo. Refiere una FUR segura hace 6 semanas y se solicitó una hCG plasmática de 25.000 UI/L, que corresponde a una edad gestacional entre 6 y 7 semanas.",
      "question": "¿Cuál es la forma ideal para determinar la edad gestacional en esta paciente?",
      "options": [
        {
          "letter": "A",
          "text": "FUR segura"
        },
        {
          "letter": "B",
          "text": "Medición de la altura uterina"
        },
        {
          "letter": "C",
          "text": "Determinación de hCG plasmática en 48 horas"
        },
        {
          "letter": "D",
          "text": "Medición ecográfica del saco gestacional"
        },
        {
          "letter": "E",
          "text": "Medición ecográfica de la longitud cráneo-nalgas"
        }
      ],
      "correct": "E",
      "explanation": "Con ciclos irregulares la FUR no es confiable, aunque la paciente la recuerde con seguridad. El mejor método es la ecografía precoz, y en el primer trimestre (hasta las 14 semanas) manda la longitud cráneo-nalgas, con error de pocos días. El saco gestacional es menos preciso; la hCG y la altura uterina no sirven para datar el embarazo.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil dieciocho. Una mujer con reglas cada cuarenta y cinco a sesenta días tiene un test de embarazo positivo, una fecha de última regla de hace seis semanas que recuerda bien, y una gonadotrofina de veinticinco mil.",
        "question": "¿Cuál es la forma ideal para determinar la edad gestacional?",
        "options": "Las opciones: la fecha de última regla, la altura uterina, repetir la gonadotrofina en cuarenta y ocho horas, el saco gestacional en ecografía, o la longitud cráneo nalgas. Piénsalo.",
        "answer": "Es la E. Con ciclos irregulares la fecha de última regla no es confiable, y en el primer trimestre la longitud cráneo nalgas es el método más preciso. El saco gestacional tienta porque también es ecográfico, pero es mucho menos exacto para datar."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2025 · Pregunta 53",
      "stem": "Embarazada de 20 semanas, asintomática, con hemoglobina de 9,0 g/dL, VCM de 72 fL (microcítica) y ferritina de 8 ng/mL.",
      "question": "¿Cuál es el tratamiento de elección?",
      "options": [
        {
          "letter": "A",
          "text": "Hierro oral elemental 200 mg/día"
        },
        {
          "letter": "B",
          "text": "Transfusión de glóbulos rojos"
        },
        {
          "letter": "C",
          "text": "Hierro endovenoso"
        },
        {
          "letter": "D",
          "text": "Vitamina B12 intramuscular"
        },
        {
          "letter": "E",
          "text": "Ácido fólico"
        }
      ],
      "correct": "A",
      "explanation": "Anemia ferropénica del embarazo (Hb bajo 11 g/dL, microcitosis y ferritina baja) en paciente asintomática: el tratamiento de primera línea es hierro oral en dosis terapéutica. El hierro endovenoso se reserva para intolerancia, malabsorción o falta de respuesta; la transfusión, para anemia grave sintomática o hemorragia.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil veinticinco. Embarazada de veinte semanas, sin síntomas, con hemoglobina de nueve, anemia microcítica y ferritina de ocho.",
        "question": "¿Cuál es el tratamiento de elección?",
        "options": "Las opciones: hierro oral, transfusión, hierro endovenoso, vitamina B doce o ácido fólico. Piénsalo.",
        "answer": "Es la A. Es una anemia ferropénica leve a moderada y sin síntomas, así que va hierro oral en dosis de tratamiento. El hierro endovenoso tienta, pero se guarda para intolerancia, malabsorción o falta de respuesta al oral."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Fechado y folato', tag: 'Lo primero', kind: 'key', items: [
          { t: 'Diferencia mayor a 5-7 días', d: 'Corrige por la ecografía precoz',
            say: 'Cerremos con las reglas de oro. Si la fecha de última regla y la ecografía precoz difieren más de cinco a siete días, corriges por la ecografía.' },
          { t: 'Alto riesgo de DTN', d: 'Ácido fólico 4 a 5 mg, no 0,4 mg',
            say: 'Y con antecedente de defecto del tubo neural, diabetes o anticonvulsivantes, el ácido fólico va en dosis alta, no en la dosis de bajo riesgo.' },
        ] },
        { title: 'La glicemia y la PTGO', tag: 'No te adelantes', kind: 'pharma', items: [
          { t: 'Glicemia 100 a 125', d: 'Se repite, no se trata todavía',
            say: 'Una glicemia de ayuno entre cien y ciento veinticinco se repite, no se trata todavía.' },
          { t: 'PTGO a las 24-28 semanas', d: '140 a las 2 horas: diagnóstico',
            say: 'Y la prueba de tolerancia va a las veinticuatro a veintiocho semanas, con ciento cuarenta a las dos horas como corte diagnóstico.' },
        ] },
        { title: 'Estreptococo del grupo B', tag: 'Se trata en el parto', kind: 'alert', items: [
          { t: 'Cultivo positivo', d: 'Penicilina G solo durante el parto',
            say: 'El cultivo positivo para estreptococo del grupo B no se trata antes: se anota, y se da penicilina G durante el parto. Si te llevas una sola idea de hoy: en el control prenatal, cada dato tiene su semana exacta, y esa semana es justamente lo que se pregunta. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Control prenatal: suplementación y batería de exámenes',
    root: pwRoot,
  },
};
