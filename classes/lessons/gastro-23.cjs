// Clase 6.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_gastroenterologia.cjs (gastro-23).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gastro-23',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Hidratar según el grado, no dar antidiarreicos y descartar Giardia antes que celíaca',
      say: 'Bienvenidos. Abrimos el bloque pediátrico con la diarrea aguda y crónica en el niño. Muchas ideas ya las vimos en la clase de diarrea del adulto y en la de malabsorción, pero en el niño cambian los números y cambian las trampas. Es un foco prioritario del perfil nuevo, así que vamos con calma.',
    },

    {
      type: 'flow',
      kicker: 'Diarrea aguda',
      title: 'Hidratar según el grado de deshidratación',
      nodes: [
        { id: 'dia', col: 0, row: 1, k: 'start', t: 'Diarrea aguda', s: 'Casi siempre rotavirus' },
        { id: 'a', col: 1, row: 0, k: 'good', t: 'Plan A: sin deshidratación', s: 'SRO 100–200 mL tras cada deposición' },
        { id: 'b', col: 1, row: 1, k: 'mech', t: 'Plan B: moderada 5–10 %', s: 'SRO 50–100 mL/kg en 4–6 h' },
        { id: 'c', col: 1, row: 2, k: 'alert', t: 'Plan C: grave > 10 % o shock', s: 'SF 20 mL/kg EV en bolo' },
        { id: 'frac', col: 2, row: 1, k: 'good', t: 'Si vomita: fraccionar', s: 'Sigue siendo vía oral' },
        { id: 'io', col: 2, row: 2, k: 'alert', t: 'Sin vena: intraósea', s: 'No se retrasa el volumen' },
      ],
      edges: [
        { from: 'dia', to: 'a' }, { from: 'dia', to: 'b' }, { from: 'dia', to: 'c' },
        { from: 'b', to: 'frac' }, { from: 'c', to: 'io' },
      ],
      steps: [
        { show: ['dia'], note: 'Viral: el tratamiento es el agua',
          say: 'Partamos por la diarrea aguda. En el niño es mayoritariamente viral, por rotavirus, y se resuelve sola. Lo que puede matar al niño no es el virus, sino la deshidratación. Por eso el pilar es hidratar, según el grado de deshidratación.' },
        { show: ['a'], note: 'En la casa',
          say: 'Si no hay deshidratación, es el plan A, en la casa: sales de rehidratación oral, cien a doscientos mililitros después de cada deposición. La idea es reponer lo que se va perdiendo.' },
        { show: ['b'], note: 'La que más se pregunta',
          say: 'Si la deshidratación es moderada, entre un cinco y un diez por ciento, es el plan B: sales de rehidratación oral, cincuenta a cien mililitros por kilo, en cuatro a seis horas. Aquí ya no reponemos solo lo que se pierde, sino el déficit que el niño trae.' },
        { show: ['frac'], note: 'El vómito no es sinónimo de vena',
          say: 'Y si vomita, no corras a poner una vía: fracciona las sales en volúmenes pequeños y frecuentes. El vómito solo no saca al niño del plan B.' },
        { show: ['c'], note: 'Shock, conciencia, íleo, vómitos incoercibles',
          say: 'El plan C es para la deshidratación grave, sobre el diez por ciento, o cuando hay shock, compromiso de conciencia, íleo o vómitos incoercibles. Ahí la vía oral ya no sirve: suero fisiológico endovenoso, veinte mililitros por kilo, en bolo.' },
        { show: ['io'], note: 'Intraósea si no hay acceso venoso',
          say: 'Y si no logras una vía venosa en un niño en shock, no pierdas tiempo: se usa la vía intraósea.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diarrea aguda',
      title: 'Fármacos: lo que se da y lo que no',
      cards: [
        { title: 'Contraindicado', tag: 'La trampa', kind: 'alert', items: [
          { t: 'Antidiarreicos: nunca', d: 'Loperamida contraindicada en pediatría',
            say: 'Ahora, los fármacos. Los antidiarreicos, como la loperamida, están contraindicados en la diarrea aguda pediátrica. Es el error clásico, y el examen lo pone como alternativa para ver si caes.' },
          { t: 'Antieméticos: sí, si vomita', d: 'Solo si hay vómitos',
            say: 'Lo que sí se puede usar son los antieméticos, si el niño tiene vómitos.' },
        ] },
        { title: 'Antibiótico', tag: 'Solo disentería', kind: 'pharma', items: [
          { t: 'Shigella o E. coli enteroinvasora', d: 'Disentería + fiebre alta + mal estado general',
            say: '¿Y los antibióticos? Casi nunca, porque la gran mayoría es viral. Se indican solo ante Shigella o Escherichia coli enteroinvasora, que se sospechan con disentería, fiebre alta y mal estado general.' },
          { t: 'Ciprofloxacino oral', d: 'Cefotaximo EV si hay sepsis',
            say: 'El de elección es el ciprofloxacino oral. Y fíjate que es una excepción a la regla de no usar quinolonas en niños, igual que en el adulto con disentería. Si hay sepsis, cefotaximo endovenoso.' },
        ] },
        { title: 'No tratar', tag: 'Se pregunta', kind: 'key', items: [
          { t: 'Salmonella no tifoidea', d: 'No complicada: sin antibiótico',
            say: 'Y una excepción al revés: la Salmonella no tifoidea no complicada no se trata, porque el antibiótico prolonga el estado de portador.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diarrea crónica',
      title: 'Lo más frecuente y lo que hay que descartar primero',
      cards: [
        { title: 'Diarrea crónica inespecífica', tag: 'La más frecuente', kind: 'key', items: [
          { t: 'Exceso de jugos', d: 'Azucarados e hiperosmolares',
            say: 'Pasemos a la diarrea crónica del lactante y del preescolar. La causa más frecuente es la más simple: la diarrea crónica inespecífica, por exceso de jugos azucarados. Son líquidos hiperosmolares, que arrastran agua hacia el intestino.' },
          { t: 'Niño sano que crece bien', d: 'Conducta: suspender los jugos',
            say: 'La pista es que el niño está sano y crece bien. No necesitas exámenes: la conducta es suspender los jugos.' },
        ] },
        { title: 'Giardiasis', tag: 'Descartar siempre', kind: 'alert', items: [
          { t: 'Preescolar rural, varios familiares', d: 'Flatulencia y dolor cólico',
            say: 'La segunda es la giardiasis. El cuadro típico es un preescolar de zona rural, con flatulencia y dolor cólico, y muchas veces con varios miembros de la familia afectados.' },
          { t: 'Parasitológico seriado', d: '3 muestras · tinidazol o metronidazol',
            say: 'Se diagnostica con un parasitológico seriado, de tres muestras, y se trata con tinidazol o metronidazol.' },
          { t: 'Antes de diagnosticar celíaca', d: 'Puede dar malabsorción idéntica',
            say: 'Y esta es la regla de la clase: la Giardia puede dar un síndrome de malabsorción igual al de la celíaca. Por eso siempre se descarta Giardia antes de diagnosticar una enfermedad celíaca.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diarrea crónica',
      title: 'Celíaca y fibrosis quística',
      cards: [
        { title: 'Enfermedad celíaca', tag: 'Desde el año', kind: 'criteria', items: [
          { t: 'Desde el año de vida', d: 'Con la introducción del gluten',
            say: 'Si descartaste la Giardia y el niño tiene malabsorción, piensa en celíaca. Aparece desde el año de vida, cuando se introduce el gluten en la dieta. Antes de eso, no hay gluten que la gatille.' },
          { t: 'Malabsorción + anemia ferropénica', d: 'Anti-transglutaminasa → biopsia duodenal',
            say: 'La pista es la malabsorción con anemia ferropénica. Como vimos en la clase de malabsorción, se piden anticuerpos anti transglutaminasa, y se confirma con biopsia duodenal.' },
          { t: 'Dieta sin gluten', d: 'De por vida',
            say: 'El tratamiento es la dieta sin gluten, de por vida.' },
        ] },
        { title: 'Fibrosis quística', tag: 'Intestino + pulmón', kind: 'alert', items: [
          { t: 'Esteatorrea', d: 'Por insuficiencia pancreática',
            say: 'La otra causa de malabsorción en el niño es la fibrosis quística. La diarrea es con esteatorrea, porque el páncreas no produce enzimas suficientes.' },
          { t: 'Neumonías recurrentes', d: 'Pseudomonas, S. aureus',
            say: 'Y la pista que la separa de todo lo demás está fuera del intestino: neumonías recurrentes, por Pseudomonas o Staphylococcus aureus. Diarrea grasa más pulmón: fibrosis quística.' },
          { t: 'Test del sudor', d: 'Cloro ≥ 60 mmol/L confirma',
            say: 'Se confirma con el test del sudor: un cloro de sesenta milimoles por litro o más.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Alergia a la proteína de leche de vaca',
      title: 'Un diagnóstico que se hace con la dieta',
      nodes: [
        { id: 'gi', col: 0, row: 0, k: 'effect', t: 'Síntomas digestivos', s: 'Diarrea, reflujo, sangre, lesiones perianales' },
        { id: 'al', col: 0, row: 2, k: 'effect', t: 'Síntomas alérgicos', s: 'Exantema, sibilancias' },
        { id: 'sos', col: 1, row: 1, k: 'q', t: 'Lactante: sospecha APLV', s: 'No hay test en sangre validado' },
        { id: 'hid', col: 2, row: 1, k: 'good', t: 'Fórmula extensamente hidrolizada', s: 'O dieta materna sin lácteos · 2–4 sem' },
        { id: 'rei', col: 3, row: 1, k: 'mech', t: 'Mejora → reintroducir', s: 'Si vuelven los síntomas' },
        { id: 'conf', col: 4, row: 1, k: 'alert', t: 'Diagnóstico confirmado', s: 'Por prueba terapéutica' },
      ],
      edges: [
        { from: 'gi', to: 'sos' }, { from: 'al', to: 'sos' }, { from: 'sos', to: 'hid' },
        { from: 'hid', to: 'rei' }, { from: 'rei', to: 'conf' },
      ],
      steps: [
        { show: ['gi'], note: 'El intestino',
          say: 'La última causa es la alergia a la proteína de leche de vaca, que se ve en el lactante. Tiene síntomas digestivos: diarrea crónica, reflujo, sangre en las deposiciones y lesiones perianales.' },
        { show: ['al'], note: 'La pista: la piel y el pulmón',
          say: 'Y lo que te da la pista es que se acompaña de síntomas alérgicos: exantema o sibilancias. Síntomas digestivos más alérgicos en un lactante: piensa en esta alergia.' },
        { show: ['sos'], note: 'Ojo: no hay examen de sangre',
          say: 'Ahora, ¿cómo la confirmas? Aquí está la trampa: no existe un test sanguíneo validado. Si una alternativa te ofrece un examen de sangre para confirmarla, descártala.' },
        { show: ['hid'], note: 'Retirar la proteína',
          say: 'El diagnóstico se hace con una prueba terapéutica. Se retira la proteína de la leche de vaca: fórmula extensamente hidrolizada, o dieta sin lácteos para la madre si toma pecho, por dos a cuatro semanas.' },
        { show: ['rei', 'conf'], note: 'Mejora al retirar, empeora al reintroducir',
          say: 'Si el niño mejora, se reintroduce la leche. Y si los síntomas reaparecen, el diagnóstico queda confirmado. Mejora al sacarla, empeora al volver a darla: esa es la prueba.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos todo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Diarrea crónica del lactante: la pista y el estudio',
      head: ['Causa', 'Pista clínica', 'Estudio / conducta'],
      rows: [
        { cells: ['Diarrea crónica inespecífica', 'Niño sano que crece bien; bebe muchos jugos', 'Clínico → suspender jugos'],
          say: 'Repasemos la diarrea crónica en una tabla. Niño sano que crece bien y toma muchos jugos: diarrea crónica inespecífica, se suspenden los jugos.' },
        { cells: ['Giardiasis', 'Zona rural, flatulencia, varios familiares afectados', 'Parasitológico seriado → tinidazol'],
          say: 'Zona rural, flatulencia y la familia completa con síntomas: giardiasis, parasitológico seriado y tinidazol.' },
        { cells: ['Enfermedad celíaca', 'Malabsorción + anemia ferropénica desde el año', 'Anti-transglutaminasa + biopsia duodenal'],
          say: 'Malabsorción con anemia ferropénica desde el año de vida: celíaca, anti transglutaminasa y biopsia duodenal.' },
        { cells: ['Fibrosis quística', 'Esteatorrea + neumonías recurrentes', 'Test del sudor'],
          say: 'Esteatorrea con neumonías recurrentes: fibrosis quística, test del sudor.' },
        { cells: ['Alergia a la proteína de leche de vaca', 'Síntomas GI + alérgicos en el lactante', 'Prueba terapéutica con fórmula hidrolizada'],
          say: 'Y síntomas digestivos más alérgicos en un lactante: alergia a la proteína de leche de vaca, prueba terapéutica con fórmula hidrolizada. Fíjate que cada causa tiene su propia pista y su propio examen.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Lactante de 10 meses con diarrea acuosa de 3 días, sin sangre. Al examen está irritable, llora sin lágrimas, tiene las mucosas secas y los ojos hundidos, y ha perdido el 7 % de su peso. Bebe con avidez pequeñas cantidades de líquido que se le ofrecen.',
      question: '¿Cuál es el manejo más adecuado?',
      options: [
        { letter: 'A', text: 'Plan A: SRO 100–200 mL tras cada deposición, en casa' },
        { letter: 'B', text: 'Plan B: SRO 50–100 mL/kg en 4–6 horas, reevaluando' },
        { letter: 'C', text: 'Plan C: suero fisiológico 20 mL/kg EV en bolo' },
        { letter: 'D', text: 'SRO más loperamida para reducir las pérdidas' },
        { letter: 'E', text: 'SRO más ciprofloxacino oral por 3 días' },
      ],
      correct: 'B',
      explanation: 'Pérdida del 7 % del peso, mucosas secas, ojos hundidos y llanto sin lágrimas: deshidratación moderada. Como tolera la vía oral, corresponde el Plan B con SRO 50–100 mL/kg en 4–6 h. No requiere suero EV (no hay shock ni intolerancia oral), la loperamida está contraindicada y no hay disentería que justifique antibiótico.',
      say: {
        stem: 'Vamos al caso. Lactante de diez meses con diarrea acuosa de tres días, sin sangre. Está irritable, llora sin lágrimas, tiene las mucosas secas y los ojos hundidos, y ha perdido el siete por ciento de su peso. Bebe con avidez los líquidos que se le ofrecen.',
        question: '¿Cuál es el manejo más adecuado?',
        options: 'Las alternativas: plan A en casa, plan B con sales de rehidratación en cuatro a seis horas, plan C con suero en bolo, sales más loperamida, o sales más ciprofloxacino. Piénsalo.',
        answer: 'Es la B. Siete por ciento de pérdida, mucosas secas, ojos hundidos y llanto sin lágrimas: deshidratación moderada, plan B. El distractor tentador es el plan C, porque el niño se ve deshidratado, pero no está en shock, no tiene compromiso de conciencia, y lo más importante, bebe con avidez: la vía oral funciona. La loperamida está contraindicada, y sin disentería no hay antibiótico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Preescolar de 4 años de una zona rural consulta por diarrea crónica de 2 meses, con abundante flatulencia y dolor abdominal tipo cólico. Dos hermanos tienen síntomas similares. Crece en un percentil bajo pero estable.',
      question: '¿Cuál es el diagnóstico más probable y su tratamiento?',
      options: [
        { letter: 'A', text: 'Diarrea crónica inespecífica; suspender los jugos' },
        { letter: 'B', text: 'Enfermedad celíaca; dieta sin gluten' },
        { letter: 'C', text: 'Giardiasis; tinidazol (o metronidazol)' },
        { letter: 'D', text: 'Fibrosis quística; enzimas pancreáticas' },
        { letter: 'E', text: 'Alergia a la proteína de leche de vaca; fórmula hidrolizada' },
      ],
      correct: 'C',
      explanation: 'Diarrea crónica con flatulencia y dolor cólico en un preescolar rural, con convivientes afectados: giardiasis. Se confirma con parasitológico seriado (3 muestras) y se trata con tinidazol o metronidazol. Puede dar malabsorción idéntica a la celíaca, por lo que siempre se descarta antes.',
      say: {
        stem: 'Ahora una pregunta del banco EUNACOM. Preescolar de cuatro años, de zona rural, con diarrea crónica de dos meses, mucha flatulencia y dolor tipo cólico. Dos hermanos tienen síntomas parecidos. Crece en un percentil bajo, pero estable.',
        question: '¿Cuál es el diagnóstico más probable y su tratamiento?',
        options: 'Las opciones: diarrea crónica inespecífica, celíaca, giardiasis, fibrosis quística, o alergia a la proteína de leche de vaca, cada una con su tratamiento. Piénsalo.',
        answer: 'La respuesta es la C, giardiasis, con tinidazol o metronidazol. Zona rural, flatulencia, dolor cólico y los hermanos con lo mismo: es la pista de libro. El distractor tentador es la celíaca, porque hay diarrea crónica y un crecimiento bajo. Pero la regla es descartar Giardia antes de diagnosticar celíaca, y aquí además el contagio familiar habla de un parásito.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 62',
      stem: 'Niño de 3 años presenta diarrea de 3 meses de evolución, intermitente, generalmente acuosa, pero que en ocasiones contiene escasos restos vegetales. Ha subido 600 gramos en ese periodo y su talla es 90 cm. Tiene signos vitales normales, se aprecia hidratado y su examen abdominal muestra un abdomen blando, depresible e indoloro, sin visceromegalia ni otras alteraciones.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Diarrea crónica inespecífica' },
        { letter: 'B', text: 'Enfermedad celíaca' },
        { letter: 'C', text: 'Enteropatía perdedora de proteínas' },
        { letter: 'D', text: 'Alergia a la proteína de la leche de vaca' },
        { letter: 'E', text: 'Intolerancia a los disacáridos' },
      ],
      correct: 'A',
      explanation: 'Diarrea intermitente con restos vegetales en un niño sano, que sigue creciendo y está hidratado, sin ningún otro hallazgo: diarrea crónica inespecífica, por exceso de jugos hiperosmolares. No necesita exámenes: la conducta es suspenderlos.',
      say: {
        stem: 'Ahora una pregunta real del examen, de julio de dos mil diecisiete. Niño de tres años con diarrea de tres meses, intermitente, generalmente acuosa, que a veces trae restos vegetales. Subió seiscientos gramos en ese periodo y mide noventa centímetros. Está con signos vitales normales, hidratado, y el abdomen es blando y sin hallazgos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: diarrea crónica inespecífica, enfermedad celíaca, enteropatía perdedora de proteínas, alergia a la proteína de leche de vaca, o intolerancia a los disacáridos. Piénsalo.',
        answer: 'Es la A. El niño está sano y sigue creciendo, sin anemia ni ningún signo de alarma: es la diarrea crónica inespecífica, por exceso de jugos. La celíaca y la alergia a la proteína de leche de vaca se acompañan de mal incremento de peso o de otros síntomas, y aquí no hay nada de eso.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 6',
      stem: 'Lactante de 4 meses con infecciones respiratorias a repetición, deposiciones grasas malolientes y retraso pondoestatural. La madre refiere que el sudor del niño "sabe salado".',
      question: '¿Cuál es el examen diagnóstico de elección?',
      options: [
        { letter: 'A', text: 'Broncoscopía' },
        { letter: 'B', text: 'Test del sudor (electrolitos en sudor)' },
        { letter: 'C', text: 'Test de metacolina' },
        { letter: 'D', text: 'TAC de tórax de alta resolución' },
        { letter: 'E', text: 'Espirometría' },
      ],
      correct: 'B',
      explanation: 'Infecciones respiratorias recurrentes, más esteatorrea, más mal incremento de peso, más el detalle clásico del sudor salado: fibrosis quística. El examen diagnóstico es el test del sudor, con cloro mayor o igual a sesenta milimoles por litro.',
      say: {
        stem: 'Otra pregunta real, de julio de dos mil veinticinco. Lactante de cuatro meses con infecciones respiratorias a repetición, deposiciones grasas y malolientes, y retraso en el crecimiento. La madre cuenta que el sudor del niño sabe salado.',
        question: '¿Cuál es el examen diagnóstico de elección?',
        options: 'Las opciones: broncoscopía, test del sudor, test de metacolina, TAC de tórax de alta resolución, o espirometría. Piénsalo.',
        answer: 'Es la B. Diarrea grasa más neumonías recurrentes es la combinación que te lleva a fibrosis quística, y aquí además está el dato clásico del sudor salado, que es literalmente el examen que confirma: el test del sudor.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 91',
      stem: 'Lactante de 2 meses con diarrea, vómitos y dermatitis perioral y perianal tras la introducción de fórmula láctea. El test de parche resulta positivo para proteína de leche de vaca.',
      question: '¿Cuál es el manejo?',
      options: [
        { letter: 'A', text: 'Cambiar a fórmula extensamente hidrolizada o elemental' },
        { letter: 'B', text: 'Continuar la fórmula habitual y agregar antihistamínico' },
        { letter: 'C', text: 'Hospitalizar para estudio endoscópico' },
        { letter: 'D', text: 'Iniciar corticoides orales' },
        { letter: 'E', text: 'Cambiar a leche de soja' },
      ],
      correct: 'A',
      explanation: 'Diarrea y vómitos, más dermatitis, tras introducir fórmula láctea: alergia a la proteína de leche de vaca. El tratamiento es retirar la proteína, con una fórmula extensamente hidrolizada o elemental. La leche de soja no se recomienda antes de los seis meses, por reactividad cruzada.',
      say: {
        stem: 'Y una pregunta más del banco real, también de julio de dos mil veinticinco. Lactante de dos meses con diarrea, vómitos y dermatitis alrededor de la boca y del ano, después de empezar con fórmula láctea. El test de parche da positivo para proteína de leche de vaca.',
        question: '¿Cuál es el manejo?',
        options: 'Las opciones: cambiar a fórmula extensamente hidrolizada o elemental, seguir con la fórmula habitual y dar antihistamínico, hospitalizar para estudio endoscópico, iniciar corticoides orales, o cambiar a leche de soja. Piénsalo.',
        answer: 'Es la A. El diagnóstico ya está confirmado, así que el manejo es retirar la proteína de la leche de vaca con una fórmula extensamente hidrolizada. La trampa es la E, la leche de soja: no se recomienda en menores de seis meses, porque hay reactividad cruzada con la proteína de la leche de vaca.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diarrea aguda', tag: 'Hidratar', kind: 'key', items: [
          { t: 'Plan según el grado', d: 'A en casa · B SRO 50–100 mL/kg · C SF 20 mL/kg',
            say: 'Cerremos con las reglas de oro. En la diarrea aguda se hidrata según el grado: plan A en casa, plan B con sales en cuatro a seis horas, y plan C con suero en bolo.' },
          { t: 'Sin antidiarreicos', d: 'Antibiótico solo en disentería',
            say: 'Nunca antidiarreicos. Antibiótico solo en la disentería, con ciprofloxacino, y la Salmonella no tifoidea no complicada no se trata.' },
        ] },
        { title: 'Diarrea crónica', tag: 'Pistas', kind: 'alert', items: [
          { t: 'Niño sano: suspender jugos', d: 'La causa más frecuente',
            say: 'En la crónica, si el niño está sano y crece bien, suspende los jugos.' },
          { t: 'Giardia antes que celíaca', d: 'Parasitológico seriado',
            say: 'Descarta siempre la Giardia antes de diagnosticar celíaca.' },
          { t: 'APLV: prueba terapéutica', d: 'No hay test en sangre',
            say: 'Y la alergia a la proteína de leche de vaca se confirma retirando y reintroduciendo la leche, no con un examen. Si te llevas una sola idea de hoy: en la diarrea del niño, lo que salva es el agua, no el fármaco. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Diarrea en el niño: hidratar según el grado',
    root: N('start', 'Niño con diarrea', 'Primero: ¿aguda o crónica?',
      'Partimos de un niño con diarrea. Lo primero es definir si es un cuadro agudo o crónico, porque la lógica es completamente distinta.',
      ['', N('q', '¿Aguda o crónica?', 'Define la pregunta siguiente',
        '¿Es aguda o crónica?',
        ['Aguda', N('q', '¿Grado de deshidratación?', 'Sin antidiarreicos',
          'En la aguda, mayoritariamente viral, el pilar es hidratar según el grado de deshidratación. Los antidiarreicos están contraindicados, y el antibiótico queda solo para la disentería.',
          ['Sin', N('ok', 'Plan A: SRO en casa', '100–200 mL tras cada deposición',
            'Sin deshidratación: plan A, sales de rehidratación oral cien a doscientos mililitros tras cada deposición, en casa.')],
          ['5–10 %', N('ok', 'Plan B: SRO 50–100 mL/kg', 'En 4–6 horas · fraccionar si vomita',
            'Deshidratación moderada: plan B, sales de rehidratación cincuenta a cien mililitros por kilo en cuatro a seis horas, fraccionadas si vomita.')],
          ['> 10 % o shock', N('alert', 'Plan C: SF 20 mL/kg en bolo', 'Intraósea si no hay acceso',
            'Deshidratación grave, shock o compromiso de conciencia: plan C, suero fisiológico veinte mililitros por kilo en bolo, por vía intraósea si no hay acceso venoso.')])],
        ['Crónica', N('q', '¿Niño sano que crece bien?', 'Y toma muchos jugos',
          'En la crónica, la primera pregunta es si el niño está sano y crece bien.',
          ['SÍ', N('ok', 'Suspender jugos', 'Diarrea crónica inespecífica',
            'Si está sano, es la diarrea crónica inespecífica por jugos: se suspenden los jugos.')],
          ['NO', N('do', 'Buscar la causa por su pista', 'Giardia siempre antes que celíaca',
            'Si no, se busca la causa por su pista: parasitológico seriado para la Giardia, anti transglutaminasa para la celíaca, test del sudor para la fibrosis quística, o prueba terapéutica para la alergia a la proteína de leche. Y antes de diagnosticar celíaca, siempre se descarta la Giardia.')])])]),
  },
};
