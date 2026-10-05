// Clase 14.13 (Otorrinolaringología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_otorrino.cjs (orl-13). Preguntas: banco real EUNACOM (class_questions.cjs --search).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'orl-13',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuándo una amigdalitis es estreptocócica, cómo se usa la escala de McIsaac y por qué se completan diez días de antibiótico',
      say: 'Bienvenido. La faringoamigdalitis es de las consultas más frecuentes, y el examen te pone a prueba en dos cosas. Primero, no tratar con antibióticos lo que es viral, que es la gran mayoría. Segundo, cuando sí es estreptocócica, tratarla bien, porque el objetivo no es la garganta: es evitar la fiebre reumática. Hoy vemos la escala de McIsaac, el esquema con penicilina y los diagnósticos diferenciales que se preguntan.',
    },

    {
      type: 'flow',
      kicker: 'Etiología',
      title: 'Casi todas son virales',
      nodes: [
        { id: 'fa', col: 0, row: 1, k: 'start', t: 'Faringitis aguda', s: 'Dolor de garganta y fiebre' },
        { id: 'vi', col: 1, row: 0, k: 'good', t: 'Viral', s: '70 a 85% adultos; 50 a 70% niños' },
        { id: 'sb', col: 1, row: 2, k: 'alert', t: 'Estreptococo del grupo A', s: '15 a 30% niños; 5 a 10% adultos' },
        { id: 'sv', col: 2, row: 0, k: 'effect', t: 'Tos, coriza, disfonía', s: 'Conjuntivitis, aftas, diarrea' },
        { id: 'tr', col: 2, row: 2, k: 'effect', t: 'Se trata con antibiótico', s: 'Previene fiebre reumática' },
      ],
      edges: [
        { from: 'fa', to: 'vi' },
        { from: 'fa', to: 'sb' },
        { from: 'vi', to: 'sv' },
        { from: 'sb', to: 'tr' },
      ],
      steps: [
        { show: ['fa', 'vi'], note: 'Adenovirus, rinovirus, coronavirus, influenza, Epstein-Barr',
          say: 'Parte por el número: más del setenta por ciento de las faringitis en adultos y más de la mitad en niños son virales. Los culpables son adenovirus, rinovirus, coronavirus, influenza y el virus de Epstein-Barr, que causa la mononucleosis.' },
        { show: ['sv'], note: 'Si hay síntomas respiratorios, es viral',
          say: 'Y los virus dejan una huella: tos, coriza o rinorrea, disfonía, conjuntivitis, aftas orales y diarrea. Si tu paciente tiene alguno de estos, prácticamente descartaste el estreptococo.' },
        { show: ['sb', 'tr'], note: 'El único blanco bacteriano',
          say: 'El único patógeno bacteriano común que justifica tratamiento formal es el Streptococcus pyogenes, el estreptococo betahemolítico del grupo A. Causa entre quince y treinta por ciento de los casos en niños de tres a catorce años, y solo cinco a diez por ciento en adultos. En menores de tres años es extraordinariamente raro y casi nunca se asocia a fiebre reumática.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Escala de McIsaac',
      cards: [
        { title: 'Un punto cada uno', tag: 'Centor modificado', kind: 'criteria', items: [
          { t: 'Fiebre mayor de 38 °C', d: 'Medida axilar',
            say: 'El exudado blanco en las amígdalas aparece tanto en infecciones bacterianas como virales, sobre todo por adenovirus o por mononucleosis. Por eso se usa la escala de McIsaac, que estima la probabilidad de estreptococo. Cada criterio suma un punto. Primero, fiebre medida mayor de treinta y ocho grados axilar.' },
          { t: 'Exudado amigdalino', d: 'O amígdalas muy tumefactas',
            say: 'Segundo, exudado amigdalino o amígdalas intensamente tumefactas.' },
          { t: 'Adenopatías anteriores dolorosas', d: 'Cervicales anteriores, sensibles',
            say: 'Tercero, adenopatías cervicales anteriores dolorosas a la palpación.' },
          { t: 'Ausencia de tos', d: 'La tos orienta a virus',
            say: 'Cuarto, ausencia de tos. Esos cuatro son los criterios de Centor.' },
        ] },
        { title: 'El factor edad', tag: 'Lo agrega McIsaac', kind: 'key', items: [
          { t: '3 a 14 años: +1 punto', d: '15 a 44: cero; 45 o más: menos uno',
            say: 'McIsaac agrega la edad: de tres a catorce años suma un punto, de quince a cuarenta y cuatro años no suma nada, y desde los cuarenta y cinco años resta un punto. Por eso el niño escolar tiene tanto riesgo, y el adulto mayor tan poco.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Conducta',
      title: 'Qué hacer según el puntaje',
      head: ['Puntaje', 'Probabilidad', 'Conducta diagnóstica', 'Tratamiento'],
      rows: [
        { cells: ['0 a 1', 'Menos de 5 a 10%', 'Sin test ni cultivo', 'Solo sintomático'],
          say: 'Con cero o un punto, la probabilidad es menor de cinco por ciento en adultos y de diez por ciento en niños. No pides test ni cultivo, y solo das tratamiento sintomático con paracetamol o ibuprofeno.' },
        { cells: ['2', '10 a 17%', 'Test rápido o cultivo', 'Solo si el test es positivo'],
          say: 'Con dos puntos, pides un test rápido de antígeno estreptocócico o un cultivo, y tratas solo si resulta positivo.' },
        { cells: ['3', '25 a 35%', 'Test rápido o cultivo', 'Solo si el test es positivo'],
          say: 'Con tres puntos es lo mismo: test o cultivo, y antibiótico solo si es positivo.' },
        { cells: ['4 a 5', '50 a 60%', 'Test, cultivo o tratamiento empírico', 'Penicilina benzatina o amoxicilina'],
          say: 'Con cuatro o cinco puntos la probabilidad llega a cincuenta o sesenta por ciento, y puedes pedir el test o iniciar tratamiento empírico directo con penicilina benzatina o con amoxicilina.' },
      ],
    },

    {
      type: 'image',
      layout: 'gallery',
      kicker: 'Así se ve',
      title: 'Amígdalas: exudado y sin exudado',
      images: [
        { src: 'biblioteca/17_otorrino/orl-13/01_amigdalitis-aguda-folicular__bailey-love_p756.jpg', label: 'Amigdalitis aguda folicular: placas blancas en las criptas', credit: 'Bailey & Love 27.ª ed., Fig. 47.21' },
        { src: 'biblioteca/17_otorrino/orl-13/02_amigdalitis-exudativa__bates_p322.jpg', label: 'Garganta roja con exudado blanco en las amígdalas', credit: 'Bates, Guía de exploración física, Tabla 7-23 (amigdalitis exudativa)' },
        { src: 'biblioteca/17_otorrino/orl-13/03_faringitis-sin-exudado__bates_p322.jpg', label: 'Faringe enrojecida sin exudado', credit: 'Bates, Guía de exploración física, Tabla 7-23 (faringitis)' },
      ],
      steps: [
        { note: 'Placas blancas en las criptas',
          say: 'Esta es una amigdalitis aguda con exudado blanco en las criptas. Fíjate que se ve igual en una infección bacteriana y en una viral, como adenovirus o mononucleosis. Por eso la foto sola no decide: necesitas la escala.' },
        { note: 'Rojo con exudado, más fiebre y adenopatías',
          say: 'Aquí, una garganta roja con exudado blanco. Según Bates, esto junto con fiebre y adenopatías cervicales aumenta la probabilidad de estreptococo o de mononucleosis. Las adenopatías anteriores sugieren estreptococo, y las posteriores, mononucleosis.' },
        { note: 'Roja sin exudado: no descarta nada por sí sola',
          say: 'Y aquí una faringe enrojecida sin exudado. Tiene causas virales y bacterianas. Si además no hay fiebre ni adenopatías, la probabilidad de estreptococo o de Epstein-Barr baja.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Viral, estreptocócica y mononucleosis',
      head: ['Característica', 'Viral', 'Estreptococo', 'Mononucleosis'],
      rows: [
        { cells: ['Vía aérea', 'Tos, rinorrea, disfonía, aftas', 'Sin tos ni coriza', 'Sin tos; odinofagia intensa y prolongada'],
          say: 'Esta tabla es la que más rinde. En la vía aérea, el cuadro viral tiene tos, rinorrea, disfonía o aftas. El estreptococo, en cambio, tiene ausencia rigurosa de tos, coriza y disfonía. La mononucleosis tampoco tiene tos, pero la odinofagia es muy intensa y prolongada.' },
        { cells: ['Exudado', 'Raro o puntiforme', 'Placas pultáceas confluentes', 'Extenso, con membranas gruesas'],
          say: 'El exudado es raro o muy fino en la viral, en placas confluentes en el estreptococo, y extenso, con membranas gruesas, en la mononucleosis.' },
        { cells: ['Adenopatías', 'Submandibulares pequeñas', 'Anteriores muy dolorosas', 'Posteriores, axilares y esplenomegalia'],
          say: 'Las adenopatías son la clave para separar los dos últimos: anteriores y dolorosas en el estreptococo; posteriores, axilares y con esplenomegalia en la mononucleosis.' },
        { cells: ['Con amoxicilina', 'Sin cambio', 'Cura en 24 a 48 horas', 'Exantema máculo-papular pruriginoso'],
          say: 'Y la amoxicilina da la pista final. En el estreptococo cura en veinticuatro a cuarenta y ocho horas. En la mononucleosis produce un exantema máculo-papular pruriginoso, en más del noventa por ciento. Esa asociación es un clásico del examen.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Penicilina: el esquema de elección',
      cards: [
        { title: 'Primera línea', tag: 'Sensibilidad 100%', kind: 'pharma', items: [
          { t: 'Penicilina benzatina IM única', d: '1.200.000 UI si pesa más de 27 kg',
            say: 'El estreptococo del grupo A conserva sensibilidad del cien por ciento a la penicilina: no se ha descrito ninguna cepa resistente. La primera opción es penicilina benzatina intramuscular en dosis única, que asegura el cumplimiento. Se usa un millón doscientas mil unidades en adultos y en niños de más de veintisiete kilos, y seiscientas mil unidades en niños de menos de veintisiete kilos.' },
          { t: 'Amoxicilina por 10 días', d: '50 mg/kg/día cada 12 o 24 horas, máximo 1 g',
            say: 'La segunda opción es amoxicilina oral, cincuenta miligramos por kilo al día, dividida cada doce o veinticuatro horas, con un máximo de un gramo diario, durante diez días completos. En el banco real del examen, la respuesta de elección ha sido siempre la amoxicilina.' },
        ] },
        { title: 'Alergia a penicilina', tag: 'Según el tipo', kind: 'alert', items: [
          { t: 'No anafiláctica: cefadroxilo', d: '30 mg/kg/día por 10 días',
            say: 'Si la alergia está demostrada pero no es anafiláctica, se usa una cefalosporina de primera generación: cefadroxilo, treinta miligramos por kilo al día, por diez días.' },
          { t: 'Anafilaxia: macrólido', d: 'Azitromicina 5 días o claritromicina 10 días',
            say: 'Si hay antecedente de anafilaxia o alergia mediada por IgE, se usa un macrólido: azitromicina, doce miligramos por kilo al día en niños o quinientos miligramos en adultos, por cinco días; o claritromicina, quince miligramos por kilo al día por diez días.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Por qué diez días',
      title: 'El objetivo es evitar la fiebre reumática',
      nodes: [
        { id: 'ab', col: 0, row: 1, k: 'good', t: 'Antibiótico por 10 días', s: 'Erradica el germen de la orofaringe' },
        { id: 'fr', col: 1, row: 0, k: 'good', t: 'Previene fiebre reumática', s: 'Carditis y artritis' },
        { id: 'pe', col: 1, row: 1, k: 'good', t: 'Previene el absceso periamigdalino', s: 'Complicación supurativa' },
        { id: 'gn', col: 1, row: 2, k: 'trap', t: 'No previene la glomerulonefritis', s: 'Es por inmunocomplejos' },
      ],
      edges: [
        { from: 'ab', to: 'fr' },
        { from: 'ab', to: 'pe' },
        { from: 'ab', to: 'gn', label: 'no' },
      ],
      steps: [
        { show: ['ab', 'fr'], note: 'Los esquemas de 5 o 7 días no la aseguran',
          say: 'Aquí está el porqué de todo el esquema. Se necesitan diez días completos para erradicar el germen de la orofaringe y prevenir la fiebre reumática aguda, con su carditis y su artritis. Los esquemas de cinco o siete días no aseguran la prevención de la carditis. Por eso la penicilina benzatina, que es una sola dosis, es tan atractiva.' },
        { show: ['pe'], note: 'También evita complicaciones supurativas',
          say: 'El antibiótico previene también las complicaciones supurativas, como el absceso periamigdalino.' },
        { show: ['gn'], note: 'La glomerulonefritis ocurre igual',
          say: 'Pero ojo con la trampa: el antibiótico no previene la glomerulonefritis postestreptocócica, porque se desencadena por inmunocomplejos, independientemente del tratamiento. Si te preguntan qué complicación se evita con el tratamiento, es la fiebre reumática.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol completo: de la historia clínica al puntaje y al tratamiento.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un niño de 8 años consulta con fiebre de 38,9 °C y odinofagia intensa de 24 horas, sin tos, rinorrea ni diarrea. Tiene amígdalas hiperémicas con exudado pultáceo en placas, petequias en el paladar blando y adenopatías anteriores bilaterales de 2 cm muy sensibles. El resto del examen es normal.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Tratamiento sintomático solamente, porque casi todas son virales' },
        { letter: 'B', text: 'Amoxicilina oral 50 mg/kg/día durante 10 días' },
        { letter: 'C', text: 'Amoxicilina oral durante 5 días' },
        { letter: 'D', text: 'Ceftriaxona endovenosa con hospitalización' },
        { letter: 'E', text: 'Esperar el resultado de la serología para Epstein-Barr' },
      ],
      correct: 'B',
      explanation: 'McIsaac 5 puntos: edad de 3 a 14 años, fiebre, exudado, adenopatías anteriores dolorosas y ausencia de tos. Probabilidad de estreptococo de 50 a 60%: tratamiento con penicilina benzatina (600.000 UI, o 1.200.000 UI si pesa más de 27 kg) o amoxicilina por 10 días completos, para prevenir la fiebre reumática.',
      say: {
        stem: 'Veamos un caso. Niño de ocho años con fiebre de treinta y ocho coma nueve y dolor de garganta intenso de un día. No tiene tos, ni rinorrea, ni diarrea. Las amígdalas están hiperémicas, con exudado en placas, hay petequias en el paladar blando y adenopatías anteriores bilaterales de dos centímetros, muy sensibles.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: solo tratamiento sintomático; amoxicilina por diez días; amoxicilina por cinco días; ceftriaxona endovenosa hospitalizado; o esperar la serología para Epstein-Barr. Piénsalo.',
        answer: 'Es la B. Aplica McIsaac: edad de tres a catorce años, uno; fiebre, uno; exudado, uno; adenopatías anteriores dolorosas, uno; y ausencia de tos, uno. Son cinco puntos, con cincuenta a sesenta por ciento de probabilidad, así que se trata con amoxicilina por diez días completos. La C es la trampa: cinco días no asegura la prevención de la fiebre reumática.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 75',
      stem: 'Un niño de 2 años y 6 meses presenta fiebre, hasta 39°C, asociado a irritabilidad, odinofagia y malestar general. En su examen físico destacan adenopatías cervicales bilaterales y faringe eritematosa y congestiva, con abundante exudado amigdalino bilateral. La auscultación pulmonar muestra murmullo pulmonar presente, sin ruidos agregados.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Amigdalitis estreptocócica' },
        { letter: 'B', text: 'Mononucleosis infecciosa' },
        { letter: 'C', text: 'Influenza' },
        { letter: 'D', text: 'Infección por Streptococcus pneumoniae' },
        { letter: 'E', text: 'Infección por adenovirus' },
      ],
      correct: 'E',
      explanation: 'En un niño menor de 3 años la causa más probable de una faringitis con exudado es viral, por adenovirus. La faringitis estreptocócica es extraordinariamente rara a esa edad.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de diciembre de dos mil dieciocho. Un niño de dos años y seis meses con fiebre de hasta treinta y nueve grados, irritabilidad y odinofagia. Tiene adenopatías cervicales bilaterales y la faringe eritematosa con abundante exudado amigdalino. El pulmón está normal.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: amigdalitis estreptocócica, mononucleosis infecciosa, influenza, infección por neumococo, o infección por adenovirus. Piénsalo.',
        answer: 'Es la E, adenovirus. Mucho exudado engaña, pero la edad manda: bajo los tres años la faringitis estreptocócica es extraordinariamente rara, y el adenovirus es el que produce exudado abundante. La A es la tentación, justamente por el exudado.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 131',
      stem: 'Un paciente de 8 años presenta un cuadro de odinofagia de un día de evolución, intenso, asociado a fiebre. Al examen físico tiene faringe congestiva, con exudado amigdalino bilateral y presencia de una adenopatía cervical. Su hermano menor está en tratamiento por escarlatina confirmada.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar amoxicilina oral' },
        { letter: 'B', text: 'Solicitar test pack para estreptococo' },
        { letter: 'C', text: 'Solicitar cultivo faríngeo' },
        { letter: 'D', text: 'Solicitar IgM para virus Ebstein Baar' },
        { letter: 'E', text: 'Indicar tratamiento sintomatico' },
      ],
      correct: 'A',
      explanation: 'Niño en edad escolar con fiebre, exudado y adenopatía, y contacto familiar con escarlatina confirmada: la probabilidad de estreptococo es alta y se inicia amoxicilina empírica.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil quince. Un niño de ocho años con odinofagia intensa de un día, fiebre, faringe congestiva con exudado bilateral y una adenopatía cervical. Su hermano menor está en tratamiento por escarlatina confirmada.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: iniciar amoxicilina, test rápido para estreptococo, cultivo faríngeo, IgM para Epstein-Barr, o tratamiento sintomático. Piénsalo.',
        answer: 'Es la A. Edad escolar, fiebre, exudado y adenopatía suman una probabilidad alta, y además hay un contacto con escarlatina confirmada, que es estreptococo. Con la probabilidad tan alta, se trata de forma empírica, sin esperar un test.' },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 143',
      stem: 'Un paciente de 8 años consulta por fiebre alta, asociada a odinofagia intensa. En su examen físico se aprecia faringe eritematosa, asociada a exudado bilateral. Se solicita una prueba rápida de detección de antígenos estreptocócicos, la que resulta positiva.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Amoxicilina' },
        { letter: 'B', text: 'Amoxicilina + ácido clavulánico' },
        { letter: 'C', text: 'Azitromicina' },
        { letter: 'D', text: 'Clindamicina' },
        { letter: 'E', text: 'Metronidazol' },
      ],
      correct: 'A',
      explanation: 'Test rápido positivo para estreptococo del grupo A: el tratamiento de elección es amoxicilina por 10 días. El estreptococo es 100% sensible a la penicilina, por lo que no se necesita clavulánico ni macrólidos, que quedan para la alergia a penicilina.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de diciembre de dos mil diecisiete. Un niño de ocho años con fiebre alta y odinofagia intensa, faringe eritematosa y exudado bilateral. La prueba rápida de antígeno estreptocócico resulta positiva.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: amoxicilina, amoxicilina con ácido clavulánico, azitromicina, clindamicina o metronidazol. Piénsalo.',
        answer: 'Es la A, amoxicilina. El estreptococo es cien por ciento sensible a la penicilina, así que no necesitas ampliar el espectro con clavulánico. La azitromicina es la opción solo si hay alergia grave a la penicilina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 164',
      stem: 'Paciente de 17 años presenta un cuadro de fiebre, malestar general y odinofagia, de 7 días de evolución. Al examen, presenta lesiones blanquecinas en las amígdalas y congestión de la orofaringe, adenopatías cervicales y se palpa el bazo moderadamente aumentado de tamaño.',
      question: '¿Cuál es el agente causal más probable?',
      options: [
        { letter: 'A', text: 'Adenovirus' },
        { letter: 'B', text: 'Virus influenza' },
        { letter: 'C', text: 'Virus de Ebstein Barr' },
        { letter: 'D', text: 'Citomegalovirus' },
        { letter: 'E', text: 'Estreptococo A' },
      ],
      correct: 'C',
      explanation: 'Adolescente con odinofagia prolongada, exudado, adenopatías y esplenomegalia: mononucleosis infecciosa por virus de Epstein-Barr.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil dieciséis. Un paciente de diecisiete años con fiebre, malestar general y odinofagia de siete días. Tiene lesiones blanquecinas en las amígdalas, adenopatías cervicales, y se palpa el bazo moderadamente aumentado de tamaño.',
        question: '¿Cuál es el agente causal más probable?',
        options: 'Las opciones: adenovirus, virus influenza, virus de Epstein-Barr, citomegalovirus, o estreptococo A. Piénsalo.',
        answer: 'Es la C, Epstein-Barr. Siete días de evolución, esplenomegalia y adenopatías en un adolescente son la mononucleosis. Recuerda la tabla: el estreptococo no produce esplenomegalia, y la amoxicilina en este paciente daría un exantema.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 48',
      stem: 'Un paciente de 22 años, con antecedente de una amigdalitis bacteriana, hace 2 semanas, con tratamiento antibiótico incompleto, presenta un cuadro de cefalea y orinas espumosas, asociado a edema de extremidades inferiores. Al examen físico, tiene PA: 180/110 mmHg, FC: 62 lpm. Se solicitan exámenes, que muestran creatinina: 2,0 mg/dl, BUN: 46 mg/dl, sedimento de orina con abundantes glóbulos rojos, con 80% de dismorfia, ANA (-) y proteinuria de 900 mg/24 horas; C3 y C4 bajos.',
      question: '¿Cuál es el tratamiento de elección?',
      options: [
        { letter: 'A', text: 'Diuréticos' },
        { letter: 'B', text: 'Antiinflamatorios' },
        { letter: 'C', text: 'Antibióticos' },
        { letter: 'D', text: 'Inmunosupresores' },
        { letter: 'E', text: 'Corticoides' },
      ],
      correct: 'A',
      explanation: 'Hipertensión, edema, hematuria dismórfica y C3 bajo, dos semanas después de una amigdalitis: glomerulonefritis postestreptocócica. Es un proceso mediado por inmunocomplejos que el antibiótico no previene ni revierte; el tratamiento es de soporte, con diuréticos.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de julio de dos mil diecinueve. Un joven de veintidós años con una amigdalitis bacteriana hace dos semanas, con tratamiento antibiótico incompleto. Ahora tiene cefalea, orinas espumosas y edema de las piernas, con presión de ciento ochenta sobre ciento diez. En los exámenes, creatinina de dos, hematuria con ochenta por ciento de dismorfia, proteinuria de novecientos miligramos y complemento bajo.',
        question: '¿Cuál es el tratamiento de elección?',
        options: 'Las opciones: diuréticos, antiinflamatorios, antibióticos, inmunosupresores, o corticoides. Piénsalo.',
        answer: 'Es la A. Dos semanas después de una amigdalitis, con hipertensión, edema, hematuria dismórfica y complemento bajo, es una glomerulonefritis postestreptocócica. Se desencadena por inmunocomplejos, así que el antibiótico no la previene ni la revierte. El tratamiento es de soporte, con diuréticos. La C es la tentación, pero esa es justamente la trampa de la clase.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 48',
      stem: 'Hombre de 20 años con odinofagia severa, fiebre 39°C, dificultad para abrir la boca (trismus) y desviación de la úvula hacia el lado contrario.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Angina de Ludwig' },
        { letter: 'B', text: 'Faringitis estreptocócica' },
        { letter: 'C', text: 'Absceso periamigdalino' },
        { letter: 'D', text: 'Mononucleosis infecciosa' },
        { letter: 'E', text: 'Epiglotitis' },
      ],
      correct: 'C',
      explanation: 'Odinofagia severa, fiebre, trismo y desviación contralateral de la úvula son el absceso periamigdalino, una complicación supurativa de la amigdalitis.',
      say: {
        stem: 'Una última pregunta real, del EUNACOM de julio de dos mil veinticinco. Un hombre de veinte años con odinofagia severa, fiebre de treinta y nueve grados, dificultad para abrir la boca por trismus, y desviación de la úvula hacia el lado contrario.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: angina de Ludwig, faringitis estreptocócica, absceso periamigdalino, mononucleosis infecciosa, o epiglotitis. Piénsalo.',
        answer: 'Es la C. El trismus y la úvula desviada son las dos palabras clave del absceso periamigdalino, una complicación supurativa de la amigdalitis. Recuerda que el tratamiento antibiótico de la amigdalitis ayuda a prevenirla, pero no lo hace imposible.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: faringoamigdalitis',
      cards: [
        { title: 'Diagnóstico', tag: 'McIsaac', kind: 'key', items: [
          { t: 'Tos o coriza: es viral', d: 'Sin antibiótico',
            say: 'Cerremos con las reglas de oro. Si hay tos, coriza, disfonía o conjuntivitis, es viral y no lleva antibiótico. Si no, aplica McIsaac: fiebre, exudado, adenopatías anteriores dolorosas, ausencia de tos y la edad.' },
          { t: '0-1 nada; 2-3 test', d: 'Cuatro a cinco: test o tratamiento empírico',
            say: 'Con cero o un punto no se hace nada. Con dos o tres, test rápido o cultivo. Con cuatro o cinco, test o tratamiento empírico.' },
        ] },
        { title: 'Tratamiento', tag: 'Prevenir fiebre reumática', kind: 'pharma', items: [
          { t: 'Benzatina o amoxicilina 10 días', d: 'El objetivo es la fiebre reumática',
            say: 'El tratamiento es penicilina benzatina intramuscular en dosis única, o amoxicilina por diez días completos, para prevenir la fiebre reumática.' },
          { t: 'No previene la glomerulonefritis', d: 'Amoxicilina en mononucleosis: exantema',
            say: 'El antibiótico no previene la glomerulonefritis postestreptocócica, y la amoxicilina en una mononucleosis da un exantema. Si te llevas una sola idea de hoy: en la garganta, primero el puntaje y luego el antibiótico, y si lo das, por diez días. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de la faringoamigdalitis aguda según McIsaac',
    root: N('start', 'Paciente con odinofagia y fiebre', '¿Tiene tos, coriza, disfonía o conjuntivitis?',
      'Un paciente con dolor de garganta. Primero buscas la huella de un virus.',
      ['Sí', N('ok', 'Faringitis viral', 'Tratamiento sintomático',
        'Con tos, coriza, disfonía o conjuntivitis, es viral. Tratamiento sintomático, sin antibiótico.')],
      ['No', N('q', 'Puntaje de McIsaac', 'Fiebre, exudado, adenopatías, sin tos y edad',
        'Sin esos síntomas, calculas el puntaje de McIsaac.',
        ['0 a 1 punto', N('ok', 'Sintomático', 'Sin test ni antibiótico',
          'Probabilidad baja: solo tratamiento sintomático, sin test ni cultivo.')],
        ['2 a 3 puntos', N('q', 'Test rápido o cultivo', '¿Resultado positivo?',
          'Con dos o tres puntos pides un test rápido o un cultivo.',
          ['Positivo', N('do', 'Penicilina benzatina o amoxicilina 10 días', 'Alergia: cefadroxilo o macrólido',
            'Si es positivo, penicilina benzatina intramuscular en dosis única o amoxicilina por diez días. Si hay alergia, cefadroxilo, o un macrólido en anafilaxia.')],
          ['Negativo', N('ok', 'Tratamiento sintomático', 'Sin antibiótico',
            'Si es negativo, solo tratamiento sintomático.')],
        )],
        ['4 a 5 puntos', N('do', 'Test, o tratamiento empírico', 'Benzatina o amoxicilina 10 días',
          'Con cuatro o cinco puntos puedes pedir el test o tratar de forma empírica con penicilina benzatina o amoxicilina por diez días, para prevenir la fiebre reumática.')],
      )],
    ),
  },
};
