// Clase 12.10 (Traumatología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_traumatologia.cjs (trauma-10). Preguntas: banco real EUNACOM (class_questions.cjs --search).
// Las tablas plantilla del libro (Parámetro clínico / Criterio quirúrgico, "LCA, Lachman, McMurray", "GES < 48 h") no corresponden al tema y no se usan.
// El libro deja vacías la sección de clínica y la de clasificación: la posición impúdica sale de la mnemotecnia y de la pregunta real;
// fractura intracapsular contra trocantérica y su cirugía (prótesis, tornillo dinámico, tornillos canulados) salen de las explicaciones de sus preguntas.
// La fractura de cadera típica del banco real (Diciembre 2018, Pregunta 50) ya la usa otra clase; aquí se usan los casos del libro rotulados
// "Caso representativo" para fractura y prótesis, y dos preguntas reales de luxación posterior.
// Imágenes: no hay en las bibliotecas extraídas una radiografía clara de fractura de cuello femoral o trocantérica (ver informe).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'trauma-10',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Fractura de cadera en el adulto mayor: diagnóstico, prótesis o fijación, y su gran diferencial',
      say: 'Bienvenido. Hoy vemos la fractura de cadera, la fractura osteoporótica por excelencia. En el examen te piden tres cosas: reconocerla por la posición de la pierna, pedir el estudio correcto y elegir la cirugía según el tipo de fractura y la edad. Y siempre aparece su gran diferencial, la luxación posterior.',
    },

    {
      type: 'points',
      kicker: 'Concepto',
      title: 'Por qué la fractura de cadera importa',
      cards: [
        { title: 'Mecanismo', tag: 'Osteoporosis', kind: 'key', items: [
          { t: 'Caída de propia altura', d: 'Trauma de baja energía sobre hueso frágil',
            say: 'En el adulto mayor basta un tropiezo o un resbalón, una caída desde la propia altura sobre el costado. El hueso osteoporótico no resiste ese golpe, y por eso la fractura de cadera es una fractura osteoporótica por excelencia.' },
          { t: 'En el joven, alta energía', d: 'Accidente de tránsito o caída de altura',
            say: 'En un paciente joven la historia cambia. Para romper el fémur proximal hace falta un trauma de muy alto impacto, como un accidente de tránsito o una caída de gran altura.' },
        ] },
        { title: 'Gravedad', tag: 'Pronóstico', kind: 'alert', items: [
          { t: 'Mortalidad a dos años: 50%', d: 'Geriatría y traumatología se juntan',
            say: 'Es una de las principales causas de morbimortalidad del adulto mayor. Se estima que la mitad de los pacientes fallece dentro de los dos años siguientes a la fractura.' },
          { t: 'No es solo cirugía', d: 'También prevención y rehabilitación',
            say: 'Por eso el enfoque no es solo quirúrgico. También hay que prevenir la osteoporosis y las caídas, y rehabilitar al paciente después de operarlo.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Clínica',
      title: 'Posición impúdica y posición púdica',
      head: ['Dato', 'Fractura de cadera', 'Luxación posterior'],
      rows: [
        { cells: ['Paciente típico', 'Adulto mayor, caída a nivel', 'Joven, choque o caída de altura'],
          say: 'Parte por el paciente. La fractura es del adulto mayor osteoporótico que se cae. La luxación posterior, en cambio, necesita un golpe fuerte, y es la lesión del joven en un accidente.' },
        { cells: ['Posición del miembro', 'Rotación externa y acortamiento', 'Aducción y rotación interna'],
          say: 'La fractura deja la pierna acortada y rotada hacia afuera, con una ligera abducción. Es la posición impúdica. La luxación posterior deja la pierna en aducción, con rotación interna y acortada. Es la posición púdica.' },
        { cells: ['Mnemotecnia', 'Impúdica: muestra la ingle', 'Púdica: se esconde'],
          say: 'Una forma de no confundirte. En la posición impúdica el paciente no tiene pudor, y al rotar la pierna hacia afuera muestra la zona inguinal. En la púdica, la pierna se cierra y se esconde, hacia adentro.' },
        { cells: ['Complicación asociada', 'Necrosis avascular', 'Lesión del nervio ciático'],
          say: 'Cada una tiene su complicación estrella. La fractura de cuello desplazada puede dejar necrosis avascular de la cabeza femoral. La luxación posterior se asocia a lesión del nervio ciático.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Imágenes',
      title: 'Qué estudio pedir',
      cards: [
        { title: 'Radiografía, no resonancia', tag: 'Primer examen', kind: 'key', items: [
          { t: 'Pelvis AP', d: 'Compara ambas caderas; busca fractura contralateral',
            say: 'La radiografía de pelvis anteroposterior permite comparar las dos caderas y descartar fracturas asociadas en el lado contrario.' },
          { t: 'Cadera AP y axial', d: 'Muestran el rasgo en el fémur proximal',
            say: 'Para ver el rasgo de fractura en el fémur proximal se piden la radiografía de cadera anteroposterior y la axial. Con eso se clasifica la fractura y se planifica la cirugía.' },
        ] },
        { title: 'Trampas de examen', tag: 'Lo que se pregunta', kind: 'alert', items: [
          { t: 'Resonancia magnética no es la primera', d: 'Es para partes blandas, no para el diagnóstico inicial',
            say: 'Un distractor frecuente es la resonancia. La resonancia sirve para meniscos y ligamentos. La fractura de cadera se diagnostica con radiografía.' },
          { t: 'No pidas radiografía de fémur', d: 'La lesión está en la cadera, no en la diáfisis',
            say: 'Otro distractor es la radiografía de fémur en dos proyecciones. La posición impúdica localiza la lesión en la cadera, así que el estudio es de pelvis y cadera.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Del cuello roto a la necrosis',
      nodes: [
        { id: 'cu', col: 0, row: 1, k: 'cause', t: 'Fractura de cuello femoral', s: 'Intracapsular' },
        { id: 'des', col: 1, row: 1, k: 'mech', t: 'Fractura desplazada', s: 'Se rompen las circunflejas' },
        { id: 'vas', col: 2, row: 0, k: 'risk', t: 'Cabeza sin irrigación', s: 'Depende de ramas del cuello' },
        { id: 'nec', col: 3, row: 0, k: 'alert', t: 'Necrosis avascular', s: 'La complicación más grave' },
        { id: 'pro', col: 3, row: 2, k: 'good', t: 'Prótesis de entrada', s: 'Evita esperar la necrosis' },
      ],
      edges: [
        { from: 'cu', to: 'des' },
        { from: 'des', to: 'vas' },
        { from: 'vas', to: 'nec' },
        { from: 'des', to: 'pro' },
      ],
      steps: [
        { show: ['cu', 'des'], note: 'La irrigación de la cabeza pasa por el cuello',
          say: 'La cabeza femoral recibe su irrigación principalmente de las arterias circunflejas, que rodean el cuello. Si el cuello se fractura y los fragmentos se desplazan, esos vasos se cortan.' },
        { show: ['vas', 'nec'], note: 'Sin sangre, la cabeza se necrosa',
          say: 'La cabeza queda sin aporte de sangre y se necrosa. La necrosis avascular de la cabeza femoral es la complicación más frecuente y más grave de las fracturas de cuello desplazadas.' },
        { show: ['pro'], note: 'Por eso se reemplaza la articulación',
          say: 'Y de aquí sale la conducta. Si el riesgo de necrosis es muy alto, no tiene sentido fijar una cabeza que probablemente morirá. Se reemplaza la articulación desde el inicio, con una prótesis.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Siempre cirugía: qué cirugía',
      cards: [
        { title: 'Regla general', tag: 'Quirúrgica', kind: 'key', items: [
          { t: 'Tratamiento siempre quirúrgico', d: 'Salvo riesgo vital que contraindique anestesia',
            say: 'La fractura de cadera se opera siempre, salvo que haya un riesgo vital inminente que contraindique la anestesia. El manejo conservador tiene una mortalidad muy alta por las complicaciones del reposo.' },
          { t: 'Cuanto antes, mejor', d: 'Cirugía precoz, en las primeras 24 a 48 horas',
            say: 'Mientras más precoz es la cirugía, menor es la morbimortalidad. La meta es operar dentro de las primeras cuarenta y ocho horas.' },
        ] },
        { title: 'Prótesis de entrada', tag: 'Tres condiciones', kind: 'criteria', items: [
          { t: 'Cuello femoral, intracapsular', d: 'Las tres condiciones deben cumplirse juntas',
            say: 'Se prefiere reemplazar la articulación y no fijar el hueso cuando se cumplen las tres condiciones al mismo tiempo. Primera, fractura de cuello femoral, que es intracapsular.' },
          { t: 'Fractura desplazada', d: 'Segunda condición',
            say: 'Segunda, que esté desplazada.' },
          { t: 'Paciente mayor de 65 años', d: 'Tercera condición',
            say: 'Y tercera, que el paciente tenga más de sesenta y cinco años. Si falta una de las tres, ya no es prótesis de entrada.' },
        ] },
        { title: 'Si no cumple', tag: 'Fijar el hueso', kind: 'pharma', items: [
          { t: 'Intertrocantérica: tornillo dinámico', d: 'Osteosíntesis, no prótesis',
            say: 'Las fracturas intertrocantéricas se fijan con un tornillo dinámico de cadera, el DHS. Es una osteosíntesis, no una prótesis.' },
          { t: 'Cuello no desplazado o joven', d: 'Tornillos canulados',
            say: 'En una fractura de cuello en menores de sesenta y cinco años o que no está desplazada, se fija con tornillos canulados, porque el riesgo de necrosis es menor.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Decisión quirúrgica',
      title: 'Qué cirugía para cada caso',
      head: ['Caso', 'Cirugía', 'Por qué'],
      rows: [
        { cells: ['Cuello desplazado, mayor de 65', 'Prótesis de cadera', 'Alto riesgo de necrosis'],
          say: 'Cuello desplazado en mayor de sesenta y cinco años: prótesis. Es el caso clásico del examen.' },
        { cells: ['Cuello, menor de 65 o no desplazado', 'Tornillos canulados', 'Menor riesgo de necrosis'],
          say: 'Cuello en menor de sesenta y cinco años, o sin desplazamiento: tornillos canulados.' },
        { cells: ['Intertrocantérica', 'Tornillo dinámico de cadera', 'Fractura extracapsular'],
          say: 'Fractura intertrocantérica: tornillo dinámico de cadera.' },
        { cells: ['Paciente postrado crónico', 'Cirugía de Girdlestone', 'Solo evitar el dolor'],
          say: 'Y el paciente postrado crónico, que ya no camina, se maneja con la cirugía de Girdlestone, que veremos ahora.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Cirugía de rescate',
      title: 'Procedimiento de Girdlestone',
      cards: [
        { title: 'En qué consiste', tag: 'Paliativa', kind: 'key', items: [
          { t: 'Se retira la cabeza femoral', d: 'Queda sin articulación, una cadera flotante',
            say: 'En el Girdlestone se retira la cabeza femoral y se descarta, dejando al paciente sin articulación. Queda lo que se llama una cadera flotante.' },
          { t: 'Para el postrado crónico', d: 'Que ya no camina',
            say: 'Es una cirugía de salvataje, paliativa, para pacientes postrados crónicos que ya no caminan.' },
        ] },
        { title: 'Para qué sirve', tag: 'Objetivo', kind: 'alert', items: [
          { t: 'Eliminar el dolor', d: 'El roce de los fragmentos óseos',
            say: 'El objetivo es eliminar el dolor que causa el roce de los fragmentos óseos, y así evitar complicaciones como el delirium o las infecciones.' },
          { t: 'Sin implantes caros', d: 'No tiene sentido en quien no camina',
            say: 'No se justifica un implante caro en alguien que ya no camina. Ojo: si el paciente de setenta y dos años camina, no es Girdlestone. Merece prótesis.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico diferencial',
      title: 'Luxación posterior de cadera',
      cards: [
        { title: 'Mecanismo y clínica', tag: 'Copiloto', kind: 'key', items: [
          { t: 'Rodilla contra el tablero', d: 'El accidente clásico del copiloto',
            say: 'El mecanismo típico es el accidente del copiloto: en un choque frontal, la rodilla golpea el tablero y empuja la cadera hacia atrás. También ocurre en caídas de altura.' },
          { t: 'Aducción, rotación interna, acortamiento', d: 'Posición púdica',
            say: 'La pierna queda en aducción, con rotación interna y acortada. Es la posición púdica, la opuesta a la de la fractura.' },
        ] },
        { title: 'Complicación y manejo', tag: 'Urgencia', kind: 'alert', items: [
          { t: 'Lesión del nervio ciático', d: 'Examina sensibilidad y motilidad distal',
            say: 'La complicación frecuente es la lesión del nervio ciático. Por eso siempre debes evaluar la sensibilidad y la motilidad del pie.' },
          { t: 'Reducción cerrada bajo anestesia', d: 'En pabellón; luego inmovilización',
            say: 'El tratamiento es la reducción cerrada, bajo anestesia, en pabellón, seguida de inmovilización. No parte con cirugía abierta.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del paciente con dolor de cadera tras el trauma a la cirugía que corresponde.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Cadera: posición, diagnóstico, conducta',
      head: ['Dato', 'Diagnóstico', 'Conducta'],
      rows: [
        { cells: ['Adulto mayor, rotación externa y acortada', 'Fractura de cadera', 'Radiografía de pelvis y cadera; cirugía'],
          say: 'Adulto mayor que se cae, con la pierna acortada y rotada hacia afuera: fractura de cadera. Pides radiografía de pelvis y cadera, y se opera.' },
        { cells: ['Cuello desplazado, mayor de 65', 'Necrosis avascular probable', 'Prótesis de cadera'],
          say: 'Cuello desplazado en mayor de sesenta y cinco años: prótesis. No tornillos, no manejo conservador.' },
        { cells: ['Choque, aducción y rotación interna', 'Luxación posterior', 'Reducción cerrada bajo anestesia'],
          say: 'Choque con rodilla contra el tablero, aducción y rotación interna: luxación posterior, y se reduce de forma cerrada bajo anestesia.' },
        { cells: ['Postrado crónico con fractura', 'Fractura de cadera', 'Girdlestone'],
          say: 'Postrado crónico con fractura de cadera: cirugía de Girdlestone para quitar el dolor.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Una mujer de 88 años, postrada hace tres años por secuelas de un accidente vascular, sufre una caída de la cama y presenta una fractura de cuello femoral desplazada. Tiene dolor intenso al movilizarla y está en riesgo de delirium. No camina desde hace tres años.',
      question: '¿Cuál es la cirugía más adecuada?',
      options: [
        { letter: 'A', text: 'Prótesis total de cadera cementada' },
        { letter: 'B', text: 'Tornillos canulados' },
        { letter: 'C', text: 'Cirugía de Girdlestone' },
        { letter: 'D', text: 'Tornillo dinámico de cadera' },
        { letter: 'E', text: 'Manejo conservador con reposo y analgesia' },
      ],
      correct: 'C',
      explanation: 'En un paciente postrado crónico que ya no camina, la cirugía de salvataje es la de Girdlestone: se retira la cabeza femoral para eliminar el dolor y evitar complicaciones como el delirium, sin implantes costosos. La prótesis se reserva para quien camina. El tornillo dinámico es para fracturas intertrocantéricas, y el manejo conservador tiene alta mortalidad.',
      say: {
        stem: 'Una mujer de ochenta y ocho años, postrada hace tres años por secuelas de un accidente vascular, que se cae de la cama y tiene una fractura de cuello femoral desplazada. Tiene mucho dolor al movilizarla, riesgo de delirium, y no camina desde hace tres años.',
        question: '¿Cuál es la cirugía más adecuada?',
        options: 'Las opciones: prótesis total de cadera; tornillos canulados; cirugía de Girdlestone; tornillo dinámico de cadera; o manejo conservador. Piénsalo.',
        answer: 'Es la C. En un postrado crónico que ya no camina, la cirugía es el Girdlestone, que quita el dolor y previene delirium e infecciones. La A es la trampa: una fractura de cuello desplazada en mayor de sesenta y cinco años pide prótesis, pero en quien camina. Y el manejo conservador no es opción por su mortalidad.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un adulto mayor de 70 años con osteoporosis sufre una caída y no puede caminar. Al examen presenta abducción, rotación externa y acortamiento de la extremidad derecha.',
      question: '¿Cuál es el diagnóstico y el estudio inicial?',
      options: [
        { letter: 'A', text: 'Luxación posterior de cadera; TAC de cadera' },
        { letter: 'B', text: 'Fractura de cadera; radiografía anteroposterior de cadera y pelvis' },
        { letter: 'C', text: 'Fractura de cadera; resonancia magnética de cadera' },
        { letter: 'D', text: 'Fractura de fémur; radiografía de fémur en dos proyecciones' },
        { letter: 'E', text: 'Coxartrosis aguda; radiografía de pelvis' },
      ],
      correct: 'B',
      explanation: 'La posición impúdica con rotación externa y acortamiento, tras una caída en un adulto mayor osteoporótico, es una fractura de cadera. Se diagnostica con radiografía de cadera anteroposterior y axial más pelvis anteroposterior. La resonancia es para partes blandas, y la luxación posterior tiene posición púdica.',
      say: {
        stem: 'Un adulto mayor de setenta años con osteoporosis que se cae y no puede caminar. La pierna derecha está en abducción, rotación externa y acortada.',
        question: '¿Cuál es el diagnóstico y el estudio inicial?',
        options: 'Las opciones: luxación posterior con tomografía; fractura de cadera con radiografía anteroposterior de cadera y pelvis; fractura de cadera con resonancia; fractura de fémur con radiografía de fémur; o coxartrosis aguda. Piénsalo.',
        answer: 'Es la B. Caída, osteoporosis y posición impúdica son una fractura de cadera, y el estudio inicial es la radiografía. La C es la trampa: acierta el diagnóstico, pero la resonancia no es el primer examen. Y la luxación posterior tendría aducción y rotación interna.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente de 72 años, que camina sin ayuda, tiene una fractura de cuello femoral desplazada.',
      question: '¿Cuál es el tratamiento?',
      options: [
        { letter: 'A', text: 'DHS o tornillo dinámico de cadera' },
        { letter: 'B', text: 'Prótesis de cadera' },
        { letter: 'C', text: 'Tornillo canulado y observar si hace necrosis' },
        { letter: 'D', text: 'Cirugía de Girdlestone' },
        { letter: 'E', text: 'Inmovilización y manejo conservador por la edad' },
      ],
      correct: 'B',
      explanation: 'Fractura de cuello femoral, desplazada y en mayor de 65 años: las tres condiciones para indicar prótesis de entrada, por el alto riesgo de necrosis avascular. El tornillo dinámico es para fracturas intertrocantéricas, el Girdlestone para postrados, y la fractura de cadera siempre se opera.',
      say: {
        stem: 'Un paciente de setenta y dos años, que camina sin ayuda, con una fractura de cuello femoral desplazada.',
        question: '¿Cuál es el tratamiento?',
        options: 'Las opciones: tornillo dinámico de cadera; prótesis de cadera; tornillo canulado y observar la necrosis; cirugía de Girdlestone; o manejo conservador por la edad. Piénsalo.',
        answer: 'Es la B. Cuello femoral, desplazada y mayor de sesenta y cinco años: prótesis de entrada. La A es la trampa, porque el tornillo dinámico es de las fracturas intertrocantéricas. La D no, porque el Girdlestone es para el que ya no camina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 10',
      stem: 'Una paciente de 26 años, sin antecedentes, mientras iba como copiloto sufre accidente de tránsito, resultando con dolor en extremidad inferior derecha. Al ingreso con vía aérea permeable, respiración espontánea, sin sangramientos evidentes, presión arterial de 150/90, Glasgow 15, extremidad inferior derecha en posición púdica.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Luxación anterior de cadera' },
        { letter: 'B', text: 'Fractura intertrocantérica' },
        { letter: 'C', text: 'Fractura de cuello femoral' },
        { letter: 'D', text: 'Luxación posterior de cadera' },
        { letter: 'E', text: 'Fractura de pelvis' },
      ],
      correct: 'D',
      explanation: 'La posición púdica es característica de la luxación posterior. La fractura, en cambio, tiene posición impúdica: abducción, rotación externa y acortamiento.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil trece. Una mujer de veintiséis años, copiloto en un accidente de tránsito, con dolor en la pierna derecha. Está estable, con Glasgow quince, y la extremidad inferior derecha está en posición púdica.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: luxación anterior de cadera; fractura intertrocantérica; fractura de cuello femoral; luxación posterior de cadera; o fractura de pelvis. Piénsalo.',
        answer: 'Es la D. Copiloto y posición púdica son una luxación posterior de cadera. Las fracturas de cuello y la intertrocantérica tendrían posición impúdica, con rotación externa. Y la luxación anterior también daría rotación externa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 98',
      stem: 'Un hombre protagoniza un accidente de tránsito, chocando de manera frontal, contra otro automóvil. Presenta intenso dolor en la cadera derecha, que le impide caminar. En su examen tiene una rotación fija hacia interno, con aducción del muslo.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Fractura de cuello femoral' },
        { letter: 'B', text: 'Fractura de cotilo' },
        { letter: 'C', text: 'Esguince grado 3 de cadera' },
        { letter: 'D', text: 'Luxación anterior de cadera' },
        { letter: 'E', text: 'Luxación posterior de cadera' },
      ],
      correct: 'E',
      explanation: 'Aducción y rotación interna fija tras un choque frontal es la posición púdica de la luxación posterior de cadera. La fractura de cuello femoral tiene posición impúdica, con rotación externa.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Un hombre que choca de frente con otro automóvil, con intenso dolor de la cadera derecha que le impide caminar. Tiene una rotación fija hacia adentro, con el muslo en aducción.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: fractura de cuello femoral; fractura de cotilo; esguince grado tres de cadera; luxación anterior; o luxación posterior de cadera. Piénsalo.',
        answer: 'Es la E. Rotación interna fija con aducción, tras un choque frontal, es la posición púdica de la luxación posterior. La fractura de cuello habría dejado la pierna rotada hacia afuera. Y recuerda examinar el nervio ciático.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: fractura de cadera',
      cards: [
        { title: 'Reconocerla', tag: 'Diagnóstico', kind: 'key', items: [
          { t: 'Impúdica: fractura; púdica: luxación', d: 'Rotación externa contra aducción e interna',
            say: 'Cerremos con las reglas de oro. Adulto mayor con caída, pierna acortada y rotada hacia afuera: fractura de cadera, posición impúdica. Joven con choque y pierna en aducción y rotación interna: luxación posterior, posición púdica.' },
          { t: 'Radiografía de pelvis y cadera', d: 'No resonancia ni radiografía de fémur',
            say: 'El estudio inicial es la radiografía de pelvis anteroposterior y de cadera anteroposterior y axial. No resonancia, y no radiografía de fémur.' },
        ] },
        { title: 'Operarla bien', tag: 'Conducta', kind: 'alert', items: [
          { t: 'Cuello, desplazada, mayor de 65: prótesis', d: 'Las tres juntas',
            say: 'Cuello femoral, desplazada y mayor de sesenta y cinco años: prótesis de entrada, por el riesgo de necrosis avascular. Intertrocantérica, tornillo dinámico. Postrado crónico, Girdlestone.' },
          { t: 'La luxación posterior se reduce cerrada', d: 'Y examina el nervio ciático',
            say: 'Y la luxación posterior se reduce de forma cerrada, bajo anestesia, después de revisar el ciático. Si te llevas una sola idea de hoy: la posición de la pierna te dice si es fractura o luxación, y la edad y el tipo de fractura te dicen qué se opera. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Dolor de cadera tras un trauma en adulto mayor',
    root: N('start', 'Dolor e impotencia de la cadera', 'Tras una caída o un choque',
      'Un paciente con dolor de cadera e impotencia funcional tras un trauma. Lo primero es mirar la posición de la pierna y el mecanismo, porque eso separa fractura de luxación.',
      ['Rotación externa y acortamiento', N('do', 'Sospechar fractura de cadera', 'Adulto mayor osteoporótico',
        'Si la pierna está acortada y rotada hacia afuera en un adulto mayor que se cayó, sospechas fractura de cadera. Es la posición impúdica.',
        ['Radiografía de pelvis y cadera', N('q', 'Tipo de fractura', 'Cuello o intertrocantérica',
          'Con la radiografía de pelvis anteroposterior y de cadera anteroposterior y axial clasificas la fractura.',
          ['Cuello desplazado, mayor de 65', N('refer', 'Prótesis de cadera', 'Cirugía precoz',
            'Cuello desplazado en mayor de sesenta y cinco años va a prótesis, operada de forma precoz.')],
          ['Intertrocantérica o cuello no desplazado', N('do', 'Osteosíntesis', 'Tornillo dinámico o canulados',
            'La intertrocantérica se fija con tornillo dinámico de cadera, y el cuello no desplazado o en menor de sesenta y cinco con tornillos canulados.')],
          ['Postrado crónico', N('ok', 'Girdlestone', 'Solo para el dolor',
            'Si el paciente es un postrado crónico que ya no camina, se hace el Girdlestone para eliminar el dolor.')],
        )],
      )],
      ['Aducción y rotación interna', N('alert', 'Luxación posterior de cadera', 'Choque o caída de altura',
        'Si la pierna está en aducción y rotación interna tras un choque, es una luxación posterior, la posición púdica.',
        ['Examinar nervio ciático', N('refer', 'Reducción cerrada bajo anestesia', 'En pabellón; inmovilizar',
          'Revisas la sensibilidad y la motilidad del pie por el riesgo de lesión del ciático, y reduces de forma cerrada bajo anestesia en pabellón, con inmovilización posterior.')],
      )],
    ),
  },
};
