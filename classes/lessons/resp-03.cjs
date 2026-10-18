// Clase Neumología 1.3 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neumologia.cjs (resp-03, bloque 1).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'resp-03',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Confirmar el diagnóstico, medir el control y subir de escalón sin usar salbutamol solo',
      say: 'Bienvenidos. En la clase anterior dijimos que una crisis es la señal de que el asma de base no está controlada. Hoy vemos justamente eso: el asma crónica, un problema GES para personas de quince años y más. El examen pregunta cómo se confirma, cómo se mide el control y cómo se sube de escalón. Y ojo con el cambio de paradigma: el salbutamol solo ya no es tratamiento. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico',
      title: 'Clínica variable + flujo variable',
      nodes: [
        { id: 'cli', col: 0, row: 1, k: 'start', t: 'Síntomas variables', s: 'Sibilancias, disnea, opresión, tos' },
        { id: 'esp', col: 1, row: 1, k: 'q', t: 'Espirometría con BD', s: '¿Obstrucción reversible?' },
        { id: 'bd', col: 2, row: 0, k: 'good', t: 'VEF1 > 12% y > 200 mL', s: 'Confirma asma' },
        { id: 'nor', col: 2, row: 2, k: 'effect', t: 'Espirometría normal', s: 'No descarta asma' },
        { id: 'pef', col: 3, row: 1, k: 'good', t: 'Variabilidad del PEF > 10%', s: 'Diurna' },
        { id: 'met', col: 3, row: 3, k: 'good', t: 'Metacolina: VEF1 cae > 20%', s: 'Hiperreactividad bronquial' },
      ],
      edges: [
        { from: 'cli', to: 'esp' }, { from: 'esp', to: 'bd', label: 'sí' }, { from: 'esp', to: 'nor', label: 'no' },
        { from: 'nor', to: 'pef' }, { from: 'nor', to: 'met' },
      ],
      steps: [
        { show: ['cli'], note: 'Enfermedad inflamatoria crónica',
          say: 'El asma es una enfermedad inflamatoria crónica de la vía aérea. Su sello es la variabilidad: síntomas que van y vienen, como sibilancias, disnea, opresión torácica y tos, junto con una limitación del flujo aéreo que también varía.' },
        { show: ['esp'], note: 'La clínica sola no confirma',
          say: 'Por eso el diagnóstico exige las dos cosas: clínica compatible y la demostración de esa variabilidad en el flujo. El primer examen es la espirometría con broncodilatador, que ya sabes leer.' },
        { show: ['bd'], note: 'Reversibilidad',
          say: 'Si el VEF uno sube más de doce por ciento y más de doscientos mililitros después del broncodilatador, el asma está confirmada. Mira este esquema: antes y después del salbutamol, la curva sube y el VEF uno gana volumen.',
            photo: { src: 'biblioteca/02_neumologia/resp-03/S1_prueba-broncodilatadora__propio.svg', label: 'Antes y después', at: 'Mira este esquema', credit: 'Dibujo propio (esquema)' } },
        { show: ['nor'], note: 'El asmático sin crisis puede tener espirometría normal',
          say: 'Pero ojo: el asmático que consulta sin síntomas ese día puede tener una espirometría perfectamente normal. Eso no descarta el asma.' },
        { show: ['pef', 'met'], note: 'Otras formas de demostrar variabilidad',
          say: 'En ese caso, la variabilidad se demuestra de otra forma: con una variabilidad diurna del PEF de más de diez por ciento, o con el test de metacolina, en que el VEF uno cae más de veinte por ciento. La metacolina provoca el broncoespasmo que el bronquio sano no hace. Esa situación, espirometría normal y metacolina, se pregunta mucho.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Control',
      title: 'Cuatro preguntas sobre las últimas 4 semanas',
      cards: [
        { title: 'Criterios GINA', tag: 'En cada control', kind: 'criteria', items: [
          { t: 'Síntomas diurnos > 2 veces/semana', d: 'En las últimas 4 semanas',
            say: 'Con el diagnóstico hecho, en cada control se mide el control del asma, preguntando por las últimas cuatro semanas. Son cuatro preguntas. Primera: ¿síntomas de día más de dos veces por semana?' },
          { t: 'Algún despertar nocturno por asma', d: 'Basta uno',
            say: 'Segunda: ¿algún despertar nocturno por asma? Basta uno solo.' },
          { t: 'Rescate > 2 veces/semana', d: 'Uso del inhalador de alivio',
            say: 'Tercera: ¿usó el inhalador de alivio más de dos veces por semana?' },
          { t: 'Cualquier limitación de la actividad', d: 'Física habitual',
            say: 'Y cuarta: ¿tuvo cualquier limitación de su actividad física habitual? Fíjate que el umbral de las dos primeras preguntas de frecuencia es el mismo: más de dos veces por semana.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Control',
      title: 'Contar criterios y revisar antes de subir',
      nodes: [
        { id: 'cue', col: 0, row: 1, k: 'start', t: 'Contar criterios', s: 'De 0 a 4' },
        { id: 'bie', col: 1, row: 0, k: 'good', t: '0: bien controlada', s: 'Mantener' },
        { id: 'par', col: 1, row: 1, k: 'effect', t: '1 o 2: parcialmente controlada', s: 'Revisar y ajustar' },
        { id: 'no', col: 1, row: 2, k: 'risk', t: '3 o 4: no controlada', s: 'Revisar y escalar' },
        { id: 'rev', col: 2, row: 1, k: 'q', t: 'Técnica y adherencia', s: 'Revisar antes de escalar' },
        { id: 'sub', col: 3, row: 1, k: 'mech', t: 'Subir un escalón', s: 'Si ambas son correctas' },
      ],
      edges: [
        { from: 'cue', to: 'bie' }, { from: 'cue', to: 'par' }, { from: 'cue', to: 'no' },
        { from: 'par', to: 'rev' }, { from: 'no', to: 'rev' }, { from: 'rev', to: 'sub' },
      ],
      steps: [
        { show: ['cue', 'bie'], note: 'Ningún criterio',
          say: 'Ahora cuentas los criterios. Si no cumple ninguno, el asma está bien controlada.' },
        { show: ['par'], note: 'Uno o dos',
          say: 'Si cumple uno o dos, está parcialmente controlada.' },
        { show: ['no'], note: 'Tres o cuatro',
          say: 'Y si cumple tres o cuatro, no está controlada. Esa cuenta se pregunta tal cual, así que en el caso clínico cuenta con calma cada criterio.' },
        { show: ['rev'], note: 'La causa más frecuente de mal control',
          say: 'Y aquí viene la conducta que más se pregunta. Antes de subir el tratamiento, es obligatorio revisar la técnica del inhalador y la adherencia. Muchas veces el paciente no está mal controlado porque el remedio no le sirva, sino porque no lo usa o lo usa mal.' },
        { show: ['sub'], note: 'Recién entonces se escala',
          say: 'Solo si la técnica y la adherencia están bien, se sube un escalón. Veamos cuáles son.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Cambio de paradigma',
      title: 'Nunca salbutamol solo',
      cards: [
        { title: 'SABA en monoterapia', tag: 'Proscrito', kind: 'alert', items: [
          { t: 'Más exacerbaciones graves y muerte', d: 'Alivia, pero no desinflama',
            say: 'Antes de los escalones, el cambio de paradigma. El salbutamol, que es un beta dos agonista de acción corta, un SABA, alivia el síntoma, pero no trata la inflamación. Usado solo, aumenta el riesgo de exacerbaciones graves y de muerte por asma. Por eso hoy la monoterapia con SABA está formalmente proscrita.' },
        ] },
        { title: 'Corticoide inhalado', tag: 'Piedra angular', kind: 'key', items: [
          { t: 'Todo asmático recibe CI', d: 'Desde el primer escalón',
            say: 'La consecuencia es simple: todo paciente asmático recibe un corticoide inhalado, desde el primer escalón. El corticoide inhalado es la piedra angular, porque ataca la inflamación, que es la base de la enfermedad.' },
          { t: 'Formoterol: alivio rápido', d: 'Combinado con el CI',
            say: 'Y la forma preferida de darlo es combinado con formoterol, un broncodilatador de acción rápida y larga. Así, cada vez que el paciente busca alivio, recibe también su dosis de antiinflamatorio.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Escalones GINA, vía preferida',
      cards: [
        { title: 'Escalones 1 a 3', tag: 'Dosis baja', kind: 'pharma', items: [
          { t: 'Escalón 1–2: budesonida/formoterol SOS', d: '160/4,5 mcg, 1 puff a demanda',
            say: 'Veamos los escalones de la vía preferida. En los escalones uno y dos, corticoide inhalado en dosis baja con formoterol, solo a demanda. Por ejemplo, ciento sesenta microgramos de budesonida con cuatro coma cinco de formoterol, un puff cuando hay síntomas.' },
          { t: 'Escalón 3: CI/formoterol diario + rescate', d: 'Estrategia MART, dosis baja',
            say: 'En el escalón tres, la misma combinación en dosis baja pasa a ser diaria, y además se usa como rescate. Eso se llama estrategia MART, de mantención y rescate, y reduce significativamente las exacerbaciones.' },
        ] },
        { title: 'Escalones 4 y 5', tag: 'Dosis media y alta', kind: 'alert', items: [
          { t: 'Escalón 4: CI/LABA dosis media', d: 'Con rescate MART',
            say: 'En el escalón cuatro, corticoide inhalado en dosis media con el beta agonista de acción larga, el LABA, manteniendo el rescate MART.' },
          { t: 'Escalón 5: + tiotropio o biológicos', d: 'Anti-IgE o anti-IL5, previa derivación',
            say: 'Y en el escalón cinco, el asma grave, se agrega tiotropio, que es un antimuscarínico de acción larga, o un biológico anti IgE o anti interleucina cinco, previa derivación al especialista.' },
        ] },
        { title: 'Vía alternativa', tag: 'Con SABA de rescate', kind: 'normal', items: [
          { t: 'CI diario + SABA SOS', d: 'El salbutamol nunca va solo',
            say: 'Existe una vía alternativa, que es la clásica: corticoide inhalado diario, al que se suma un LABA en los escalones siguientes, con salbutamol de rescate. Es aceptable, porque el salbutamol va acompañado de un corticoide de base; lo que nunca es aceptable es el salbutamol solo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Asma grave',
      title: 'Antes de rotularla, descarta lo difícil',
      cards: [
        { title: 'Definición', tag: 'Escalón 4–5', kind: 'key', items: [
          { t: 'No controlada pese a CI dosis alta + LABA', d: 'O solo controlada con ese nivel',
            say: 'Asma grave es la que sigue sin control a pesar del escalón cuatro o cinco, corticoide inhalado en dosis alta más LABA, o que solo se controla con ese nivel de tratamiento.' },
        ] },
        { title: 'Primero, el asma difícil', tag: 'Descartar', kind: 'alert', items: [
          { t: 'Técnica y adherencia', d: 'La causa más frecuente',
            say: 'Pero antes de decir grave hay que descartar el asma difícil. Primero la técnica del inhalador y la adherencia, que son la causa más frecuente de falta de control.' },
          { t: 'Exposición persistente', d: 'Alérgenos, tabaco, ocupacional',
            say: 'Después, la exposición que se mantiene: alérgenos, tabaco o el ambiente laboral.' },
          { t: 'Comorbilidades', d: 'Rinosinusitis, reflujo, obesidad, apnea',
            say: 'Y las comorbilidades: rinosinusitis, reflujo, obesidad y apnea del sueño. Sin olvidar los diagnósticos alternativos, como EPOC o disfunción de cuerdas vocales.' },
        ] },
        { title: 'Qué hace el médico general', tag: 'Y a quién deriva', kind: 'pharma', items: [
          { t: 'Optimiza el escalón y trata comorbilidades', d: 'CI-formoterol medio o alto, agregar tiotropio',
            say: 'Tu parte es optimizar el escalón, con corticoide inhalado y formoterol en dosis media o alta, agregar tiotropio, y tratar las comorbilidades. Y evitar los ciclos repetidos de corticoide oral.' },
          { t: 'Deriva al broncopulmonar', d: 'Eosinófilos, IgE; biológicos o termoplastía',
            say: 'Se deriva al broncopulmonar para fenotipificar, con eosinófilos e inmunoglobulina E, y evaluar un biológico, anti IgE, anti interleucina cinco o anti interleucina cuatro y trece, o una termoplastía.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Técnica',
      title: 'El inhalador presurizado con aerocámara',
      cards: [
        { title: 'Siete pasos', tag: 'MDI + aerocámara', kind: 'key', items: [
          { t: 'Agitar y acoplar a la aerocámara', d: 'Exhalar suave antes de partir',
            say: 'La técnica del inhalador se pregunta. Primero se agita el inhalador, se acopla a la aerocámara y se exhala suavemente.' },
          { t: 'Boquilla sellada, un disparo', d: 'Mascarilla en niños y adultos mayores',
            say: 'Se sellan los labios sobre la boquilla, o se usa mascarilla en niños y adultos mayores, y se dispara una sola vez. Mira esta imagen: los labios sellan la boquilla de la aerocámara y el inhalador va acoplado en el otro extremo.',
            photo: { src: '_web/160_resp_Crisis_asmática_Asma_crónica__Commons_1.jpg', label: 'Inhalador con aerocámara', at: 'Mira esta imagen', credit: 'Blausen.com staff (2014), CC BY 3.0 · Wikimedia Commons' } },
          { t: '4–6 respiraciones tranquilas', d: 'O inspiración lenta y apnea de 10 segundos',
            say: 'Luego se respira lento y profundo, o cuatro a seis respiraciones tranquilas a volumen corriente, y si puede, se aguanta la respiración diez segundos.' },
          { t: 'Esperar 30–60 segundos entre puff', d: 'Enjuagar la boca si es corticoide',
            say: 'Entre un puff y el siguiente se esperan treinta a sesenta segundos, y al terminar un corticoide inhalado se enjuaga la boca.' },
        ] },
        { title: 'Dos detalles', tag: 'Trampas', kind: 'alert', items: [
          { t: 'Sin cámara hay que coordinar', d: 'Revisar la técnica en cada control',
            say: 'Sin aerocámara el paciente debe coordinar el disparo con la inspiración, por eso la técnica se revisa en cada control. La cámara se limpia con detergente una vez por semana.' },
          { t: 'Polvo seco: al revés', d: 'Inspiración rápida y profunda; no se agita',
            say: 'Y los inhaladores de polvo seco, turbuhaler o accuhaler, son al revés: exigen una inspiración rápida y profunda, y no se agitan.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Los escalones',
      images: [
        { src: 'animaciones/resp-03/A1_escalones_gina.mp4', label: 'GINA', credit: 'Animación propia' },
      ],
      steps: [
        { note: 'Corticoide inhalado desde el inicio',
          say: 'Todo asmático lleva corticoide inhalado. En los escalones uno y dos, corticoide con formoterol a demanda; en el tres, diario y de rescate; en el cuatro, en dosis media; y en el cinco, se deriva para tiotropio o un biológico. Antes de subir, se revisa la técnica y la adherencia.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tos crónica',
      title: 'Más de 8 semanas: tres causas y una respuesta',
      nodes: [
        { id: 'tos', col: 0, row: 1, k: 'start', t: 'Tos > 8 semanas', s: 'Historia, examen y radiografía' },
        { id: 'ieca', col: 1, row: 0, k: 'trap', t: 'IECA o tabaco', s: 'Suspender: cede en 1–4 semanas' },
        { id: 'rx', col: 1, row: 2, k: 'q', t: 'Radiografía normal', s: 'Sin IECA ni tabaco' },
        { id: 'tres', col: 2, row: 2, k: 'cause', t: 'Goteo posterior, asma, reflujo', s: 'Las tres más frecuentes' },
        { id: 'emp', col: 3, row: 2, k: 'good', t: 'Tratamiento empírico', s: 'Se confirma por la respuesta' },
        { id: 'alar', col: 3, row: 0, k: 'alert', t: 'Banderas rojas', s: 'Hemoptisis, baja de peso, disnea, > 20 paq-año' },
        { id: 'tac', col: 4, row: 0, k: 'refer', t: 'TAC de tórax', s: 'Cáncer o tuberculosis' },
      ],
      edges: [
        { from: 'tos', to: 'ieca' }, { from: 'tos', to: 'rx' }, { from: 'rx', to: 'tres' },
        { from: 'tres', to: 'emp' }, { from: 'tos', to: 'alar' }, { from: 'alar', to: 'tac' },
      ],
      steps: [
        { show: ['tos', 'ieca'], note: 'Primero, descartar lo obvio',
          say: 'La tos crónica es la que dura más de ocho semanas en el adulto. Se parte con la historia, el examen y una radiografía de tórax. Si el paciente toma un inhibidor de la enzima convertidora, se suspende: la tos suele ceder en una a cuatro semanas.' },
        { show: ['rx', 'tres'], note: 'Radiografía normal: tres sospechosos',
          say: 'Si la radiografía es normal y no hay IECA ni tabaco, las tres causas más frecuentes son el goteo posterior por rinosinusitis, el asma, incluida la variante tusígena, y el reflujo gastroesofágico.' },
        { show: ['emp'], note: 'Se trata en ese orden',
          say: 'Se trata de forma empírica, en ese orden: antihistamínico con descongestionante o corticoide nasal, corticoide inhalado con formoterol, e inhibidor de la bomba de protones. Y el diagnóstico se confirma por la respuesta. Se pide también espirometría con broncodilatador.' },
        { show: ['alar', 'tac'], note: 'Con banderas rojas, imagen',
          say: 'Pero si hay hemoptisis, baja de peso, disnea, más de veinte paquetes-año o una radiografía anormal, no se trata a ciegas: se pide una TAC de tórax y se piensa en cáncer o tuberculosis. Y si la tos persiste sin causa, se deriva.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos diagnóstico, control y escalones en un solo árbol, como lo vas a razonar en el control del CESFAM.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Síntomas típicos, espirometría normal', 'Test de metacolina', 'Descartar el asma'],
          say: 'Repasemos las trampas. Síntomas típicos con espirometría normal: test de metacolina. El error es descartar el asma porque la espirometría salió bien.' },
        { cells: ['Asmático solo con salbutamol', 'Agregar corticoide inhalado', 'Mantener SABA en monoterapia'],
          say: 'Asmático tratado solo con salbutamol: hay que agregar el corticoide inhalado. Mantener el salbutamol solo es la respuesta incorrecta más clásica del tema.' },
        { cells: ['Parcial o no controlada', 'Revisar técnica y adherencia', 'Subir el escalón de inmediato'],
          say: 'Asma parcial o no controlada: primero técnica y adherencia. El error es subir el escalón sin revisar.' },
        { cells: ['No controlada con buena técnica', 'Subir un escalón: CI + LABA', 'Ciclos largos de prednisona oral'],
          say: 'No controlada con buena técnica y adherencia: se sube un escalón, por ejemplo corticoide con LABA. Los corticoides orales prolongados no son el camino.' },
        { cells: ['Asma grave refractaria', 'Tiotropio o biológicos: derivar', 'Manejarla solo en APS'],
          say: 'Y el asma grave refractaria, en el escalón cinco, se deriva para tiotropio o biológicos.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 32 años con asma, en tratamiento solo con salbutamol inhalado a demanda. En el último mes tuvo síntomas diurnos 4 días a la semana, despertó 2 veces por tos y usa salbutamol casi todos los días. No refiere limitación de actividad. Espirometría: VEF1 72% con respuesta broncodilatadora positiva.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Mantener salbutamol a demanda y citar en 3 meses' },
        { letter: 'B', text: 'Indicar salbutamol en horario cada 6 horas' },
        { letter: 'C', text: 'Iniciar corticoide inhalado en dosis baja con LABA, o budesonida/formoterol' },
        { letter: 'D', text: 'Prednisona oral 40 mg al día por 1 mes' },
        { letter: 'E', text: 'Derivar para terapia biológica anti-IgE' },
      ],
      correct: 'C',
      explanation: 'Tres criterios GINA (síntomas diurnos > 2/semana, despertar nocturno, rescate > 2/semana): asma no controlada, en monoterapia con SABA, que está proscrita. Hay que iniciar tratamiento antiinflamatorio de mantención: CI en dosis baja + LABA, o budesonida/formoterol según la vía preferida.',
      say: {
        stem: 'Vamos con un caso. Mujer de treinta y dos años, asmática, que usa solo salbutamol a demanda. En el último mes tuvo síntomas de día cuatro días a la semana, despertó dos veces por tos y usa salbutamol casi todos los días. No refiere limitación de su actividad. La espirometría muestra respuesta broncodilatadora positiva.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: mantener el salbutamol a demanda, salbutamol en horario, corticoide inhalado con LABA o budesonida con formoterol, prednisona oral por un mes, o derivar para un biológico. Piénsalo.',
        answer: 'Es la C. Cuenta los criterios: síntomas de día, despertar nocturno y uso de rescate frecuente. Son tres: asma no controlada. Y el problema de fondo es que está solo con salbutamol, que hoy está proscrito. La conducta es iniciar el antiinflamatorio de mantención. La B es la trampa: dar el salbutamol en horario es más de lo mismo, sin corticoide. Y la prednisona por un mes o el biológico se saltan todos los escalones.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 163',
      stem: 'Una paciente de 19 años presenta disnea, asociada a tos y ocasionalmente sibilancias. Refiere que sus síntomas suelen ser más frecuentes e intensos durante la noche. Ha notado aumento en la intensidad y frecuencia de estos síntomas, desde que adoptó un gato hace un mes. Sus signos vitales son normales, satura 98% a FiO2 ambientas y su examen cardiopulmonar es normal. Se solicita una radiografía de tórax, que resulta normal. Se realiza una espirometría basal y postbroncodilatador, que muestra parámetros dentro de la normalidad.',
      question: '¿Cuál es el examen de elección para confirmar el diagnóstico?',
      options: [
        { letter: 'A', text: 'IgE sérica total' },
        { letter: 'B', text: 'TAC de tórax' },
        { letter: 'C', text: 'Prueba de provocación bronquial con metacolina' },
        { letter: 'D', text: 'Prueba cutánea para alérgenos inhalados' },
        { letter: 'E', text: 'Serología para Mycoplasma pneumoniae' },
      ],
      correct: 'C',
      explanation: 'Síntomas compatibles con asma pero sin obstrucción en el examen ni en la espirometría: la variabilidad se demuestra con la provocación bronquial con metacolina (caída del VEF1 > 20%). El prick test demuestra atopia, no asma.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticuatro. Mujer de diecinueve años con disnea, tos y sibilancias ocasionales, peores de noche y desde que adoptó un gato. Examen normal, radiografía normal, y una espirometría basal y post broncodilatador dentro de rangos normales.',
        question: '¿Cuál es el examen de elección para confirmar el diagnóstico?',
        options: 'Las opciones: IgE sérica total, TAC de tórax, provocación bronquial con metacolina, prueba cutánea para alérgenos, o serología para Mycoplasma. Piénsalo.',
        answer: 'Es la C, la metacolina. La clínica es típica, pero la espirometría es normal, y eso no descarta el asma. La variabilidad se demuestra provocando el broncoespasmo: si el VEF uno cae más de veinte por ciento, se confirma. El distractor tentador es la prueba cutánea, por el gato; pero esa prueba demuestra alergia, no asma.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 19',
      stem: 'Una paciente con antecedente de rinitis alérgica y asma consulta por disnea frecuente, asociada a respiración sibilante y tos, que aparece con frecuencia luego de exponerse a los alergenos, en la noche, cuando cursa con alguna infección respiratoria alta o después de realizar ejercicio. Al examen físico tiene FR: 13 rpm, satura 96% a FiO2 ambiental y en su examen pulmonar destacan sibilancias espiratorias bilaterales.',
      question: '¿Cuál es la conducta más adecuada con ella?',
      options: [
        { letter: 'A', text: 'Evitar los alergenos por 3 meses' },
        { letter: 'B', text: 'Iniciar salmeterol 2 puff cada 12 horas' },
        { letter: 'C', text: 'Iniciar salbutamol 2 puff cada 6 horas' },
        { letter: 'D', text: 'Iniciar fluticasona 2 puff cada 12 horas' },
        { letter: 'E', text: 'Iniciar terapia de desensibilización a los alergenos' },
      ],
      correct: 'D',
      explanation: 'Asma con síntomas frecuentes, incluidos nocturnos: necesita tratamiento antiinflamatorio de mantención con corticoide inhalado, con un broncodilatador de rescate. El salbutamol en horario y el LABA solo no tratan la inflamación.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil diecisiete. Paciente con rinitis alérgica y asma, con disnea, sibilancias y tos frecuentes, que aparecen con alérgenos, de noche, con infecciones y con el ejercicio. Está estable, satura noventa y seis por ciento, y tiene sibilancias espiratorias.',
        question: '¿Cuál es la conducta más adecuada con ella?',
        options: 'Las opciones: evitar alérgenos por tres meses, salmeterol, salbutamol cada seis horas, fluticasona cada doce horas, o desensibilización. Piénsalo.',
        answer: 'Es la D, el corticoide inhalado. Tiene síntomas frecuentes y nocturnos, y lo que le falta es el antiinflamatorio de base. Lo ideal sería con un broncodilatador de rescate, pero de las opciones, la piedra angular es la fluticasona. El salbutamol en horario es la trampa del SABA solo. Y el salmeterol solo tampoco sirve: un LABA en asma siempre va con corticoide.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.05.1.002 · Asma bronquial grave",
      "stem": "Hombre de 42 años con asma, en tratamiento con fluticasona/salmeterol en dosis media. Refiere síntomas diurnos casi diarios, despertares nocturnos semanales y 2 crisis en el año. Al observarlo usar su inhalador presurizado, dispara sin coordinar con la inspiración y no hace apnea. Retira sus inhaladores en forma irregular.",
      "question": "Antes de catalogarlo como asma grave y subir de escalón, ¿cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Agregar prednisona oral en dosis bajas permanentes"
        },
        {
          "letter": "B",
          "text": "Corregir la técnica inhalatoria (por ejemplo, con aerocámara) y reforzar la adherencia"
        },
        {
          "letter": "C",
          "text": "Derivar de inmediato para terapia biológica"
        },
        {
          "letter": "D",
          "text": "Agregar montelukast y teofilina"
        },
        {
          "letter": "E",
          "text": "Cambiar a salbutamol nebulizado en horario"
        }
      ],
      "correct": "B",
      "explanation": "La mayoría del asma 'difícil' no es grave: es mala técnica, mala adherencia o comorbilidades no tratadas. Antes de subir de escalón o hablar de asma grave hay que corregir la técnica (aerocámara con el presurizado), reforzar la adherencia y reevaluar en semanas.",
      "say": {
        "stem": "Un hombre de cuarenta y dos años, con asma, usa un inhalador combinado en dosis media pero sigue con síntomas casi diarios y despertares. Al mirarlo usar el inhalador, dispara sin coordinar con la inspiración, y retira sus remedios en forma irregular.",
        "question": "Antes de catalogarlo como asma grave, ¿qué corresponde hacer?",
        "options": "Las opciones: prednisona crónica, corregir técnica y adherencia, terapia biológica, montelukast con teofilina o salbutamol en horario. Piénsalo.",
        "answer": "Es la B. Antes de llamar grave a un asma hay que ver si el remedio está llegando al bronquio, y aquí no llega. La terapia biológica tienta por el mal control, pero es para el asma grave real, que se define solo después de corregir técnica y adherencia."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.05.4.005 · Espirometría",
      "stem": "Mujer de 24 años con episodios de tos nocturna, sibilancias y disnea con el ejercicio desde hace 1 año. Espirometría: VEF1/CVF 0,68; VEF1 2,10 L (74 % del predicho). Tras 400 mcg de salbutamol: VEF1 2,46 L.",
      "question": "¿Cuál es la interpretación más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Espirometría normal"
        },
        {
          "letter": "B",
          "text": "Patrón restrictivo"
        },
        {
          "letter": "C",
          "text": "Obstrucción con respuesta broncodilatadora significativa, compatible con asma"
        },
        {
          "letter": "D",
          "text": "EPOC por VEF1/CVF menor de 0,70"
        },
        {
          "letter": "E",
          "text": "Obstrucción fija sin respuesta broncodilatadora"
        }
      ],
      "correct": "C",
      "explanation": "Hay obstrucción (VEF1/CVF bajo 0,70) y el VEF1 sube 360 mL, un 17 %: supera el umbral de respuesta broncodilatadora significativa (12 % y 200 mL). En una joven con síntomas variables, confirma asma. En la EPOC la obstrucción persiste tras el broncodilatador.",
      "say": {
        "stem": "Una mujer de veinticuatro años tiene tos nocturna y sibilancias con el ejercicio. La espirometría muestra una relación entre volumen espiratorio del primer segundo y capacidad vital de cero coma sesenta y ocho, con un volumen del primer segundo de dos coma diez litros, que sube a dos coma cuarenta y seis tras el salbutamol.",
        "question": "¿Cuál es la interpretación más adecuada?",
        "options": "Las opciones: normal, restricción, obstrucción con respuesta broncodilatadora compatible con asma, EPOC o obstrucción fija. Piénsalo.",
        "answer": "Es la C. Hay obstrucción, y el volumen del primer segundo sube trescientos sesenta mililitros, cerca de diecisiete por ciento: pasa el umbral de doce por ciento y doscientos mililitros. La EPOC tienta por la relación bajo cero coma setenta, pero en una joven con síntomas variables y gran respuesta, es asma."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.1.019 · Asma bronquial",
      "stem": "Un niño de 8 años con asma usa salbutamol inhalado a demanda. En el último mes ha tenido síntomas diurnos 4 días por semana, despertares nocturnos por tos 2 veces por semana y limitación para hacer deporte. Su técnica inhalatoria con aerocámara es correcta.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Mantener salbutamol a demanda"
        },
        {
          "letter": "B",
          "text": "Iniciar corticoide inhalado en dosis baja de mantención"
        },
        {
          "letter": "C",
          "text": "Iniciar prednisona oral por 5 días"
        },
        {
          "letter": "D",
          "text": "Iniciar montelukast como monoterapia de primera línea"
        },
        {
          "letter": "E",
          "text": "Iniciar teofilina oral"
        }
      ],
      "correct": "B",
      "explanation": "Un asma no controlada (síntomas más de 2 veces por semana, despertares nocturnos, limitación de actividad) requiere tratamiento de mantención. De acuerdo con la guía GES de asma en menores de 15 años y GINA, el pilar es el corticoide inhalado en dosis baja (ej. budesonida o fluticasona) con aerocámara, más salbutamol de rescate.",
      "say": {
        "stem": "Un niño de ocho años con asma, solo con salbutamol, tiene síntomas cuatro días a la semana, despierta de noche y no puede hacer deporte.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: solo salbutamol, corticoide inhalado en dosis baja, prednisona oral, montelukast solo o teofilina. Piénsalo.",
        "answer": "Es la B. Es un asma no controlada y necesita mantención con corticoide inhalado en dosis baja. El montelukast tienta porque es oral y cómodo, pero es menos eficaz y queda como alternativa."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.05.1.035 · Tos crónica",
      "stem": "Una mujer de 58 años, no fumadora, consulta por tos seca persistente de 3 meses. Hace 4 meses inició enalapril por hipertensión arterial. Su radiografía de tórax es normal y no tiene síntomas de reflujo, rinitis ni sibilancias.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Iniciar omeprazol empírico"
        },
        {
          "letter": "B",
          "text": "Solicitar TAC de tórax"
        },
        {
          "letter": "C",
          "text": "Iniciar un corticoide inhalado"
        },
        {
          "letter": "D",
          "text": "Suspender el enalapril y cambiar a un ARA II (como losartán)"
        },
        {
          "letter": "E",
          "text": "Iniciar codeína a permanencia"
        }
      ],
      "correct": "D",
      "explanation": "La tos crónica (más de 8 semanas) en no fumadores con radiografía normal se debe principalmente a goteo postnasal, asma y reflujo, pero siempre debe descartarse el uso de IECA, que causa tos seca en 5 a 20% de los usuarios por acumulación de bradicinina. Se cambia a un ARA II y la tos cede en 1 a 4 semanas.",
      "say": {
        "stem": "Una mujer de cincuenta y ocho años, no fumadora, tiene tos seca hace tres meses. Comenzó enalapril un mes antes de la tos. Su radiografía es normal y no tiene reflujo, rinitis ni sibilancias.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: omeprazol empírico, TAC de tórax, corticoide inhalado, cambiar el enalapril por un antagonista del receptor de angiotensina o codeína. Piénsalo.",
        "answer": "Es la D. El enalapril, como todo inhibidor de la enzima convertidora, causa tos seca por bradicinina, y se cambia por losartán u otro similar. El omeprazol tienta porque el reflujo es causa frecuente, pero aquí no hay síntomas de reflujo y sí un fármaco culpable."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.05.5.006 · Inhalación de aerosoles presurizados",
      "stem": "Un niño de 6 años con asma usa salbutamol en inhalador presurizado de dosis medida. La madre refiere que no mejora durante las crisis. Al observar la técnica, el niño dispara el inhalador directamente en la boca y respira rápidamente.",
      "question": "¿Cuál es la indicación más adecuada para mejorar la técnica?",
      "options": [
        {
          "letter": "A",
          "text": "Cambiar a salbutamol en jarabe"
        },
        {
          "letter": "B",
          "text": "Indicar nebulizaciones diarias permanentes"
        },
        {
          "letter": "C",
          "text": "Aumentar el número de puffs sin cambiar la técnica"
        },
        {
          "letter": "D",
          "text": "Usar aerocámara (espaciador), con mascarilla o boquilla según la edad, y realizar varias respiraciones tras cada puff"
        },
        {
          "letter": "E",
          "text": "Disparar el inhalador hacia la nariz"
        }
      ],
      "correct": "D",
      "explanation": "La mayoría de los pacientes, especialmente los niños, no coordina el disparo con la inspiración, y gran parte del fármaco queda en la orofaringe. La aerocámara mejora el depósito pulmonar y reduce efectos locales: se agita el inhalador, se dispara un puff en la aerocámara y se respira 5 a 6 veces por puff. Los jarabes no se recomiendan.",
      "say": {
        "stem": "Un niño asmático de seis años usa salbutamol en inhalador presurizado y no mejora en las crisis. Al observarlo, dispara el inhalador directo en la boca y respira rápido.",
        "question": "¿Qué indicación mejora más su técnica?",
        "options": "Las opciones: cambiar a jarabe, nebulizaciones diarias, más puffs con la misma técnica, usar aerocámara con varias respiraciones por puff o dispararlo hacia la nariz. Piénsalo.",
        "answer": "Es la D. La aerocámara evita el problema de coordinación y lleva mucho más fármaco al pulmón. Aumentar los puffs tienta, pero con mala técnica el fármaco sigue quedando en la boca."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Variabilidad', kind: 'key', items: [
          { t: 'Espirometría normal no descarta', d: 'Metacolina: VEF1 cae > 20%',
            say: 'Cerremos con las reglas de oro. El asma se confirma demostrando variabilidad, y una espirometría normal no la descarta: ahí va la metacolina.' },
        ] },
        { title: 'Control', tag: 'Últimas 4 semanas', kind: 'criteria', items: [
          { t: '0 bien · 1–2 parcial · 3–4 no controlada', d: 'Cuatro criterios GINA',
            say: 'El control se mide con cuatro criterios de las últimas cuatro semanas: cero es bien controlada, uno o dos parcial, tres o cuatro no controlada.' },
          { t: 'Técnica y adherencia antes de subir', d: 'Siempre',
            say: 'Y antes de subir un escalón, siempre revisar la técnica y la adherencia.' },
        ] },
        { title: 'Tratamiento', tag: 'CI desde el inicio', kind: 'pharma', items: [
          { t: 'Nunca SABA en monoterapia', d: 'Todo asmático con CI',
            say: 'Todo asmático lleva corticoide inhalado, y la vía preferida es la combinación con formoterol, a demanda al principio y como MART después.' },
          { t: 'Escalón 5: tiotropio o biológicos', d: 'Previa derivación',
            say: 'El escalón cinco se deriva. En la próxima clase vamos a ver la otra enfermedad obstructiva, la EPOC, donde la lógica se invierte: allá mandan los broncodilatadores y el corticoide inhalado queda restringido. Si te llevas una sola idea de hoy: en el asma, el salbutamol nunca va solo. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Asma crónica: diagnóstico, control y escalones',
    root: N('start', 'Sospecha de asma', 'Síntomas respiratorios variables',
      'Paciente con síntomas respiratorios variables. Lo primero es confirmar el asma demostrando variabilidad del flujo.',
      ['', N('q', '¿Espirometría con BD positiva?', 'VEF1 > 12% y > 200 mL',
        '¿La espirometría muestra una respuesta broncodilatadora positiva?',
        ['NO, normal', N('do', 'Metacolina o variabilidad del PEF', 'VEF1 cae > 20% o PEF > 10%',
          'Si es normal, no se descarta: se busca la variabilidad con metacolina o con la variabilidad diurna del PEF.')],
        ['SÍ', N('q', '¿Cuántos criterios GINA?', 'Últimas 4 semanas',
          'Con el asma confirmada, en cada control se cuentan los cuatro criterios de las últimas cuatro semanas.',
          ['0', N('ok', 'Bien controlada', 'Mantener el escalón',
            'Sin criterios, está bien controlada y se mantiene el escalón.')],
          ['1 a 4', N('do', 'Técnica y adherencia, luego subir', 'CI/formoterol → MART → dosis media',
            'Con uno o más criterios, parcial o no controlada, primero se revisa la técnica inhalatoria y la adherencia. Solo si están bien, se sube un escalón: de CI con formoterol a demanda, a MART, a dosis media.')],
          ['Grave refractaria', N('refer', 'Escalón 5: derivar', 'Tiotropio o biológicos',
            'Y si ya es un asma grave refractaria, se deriva para tiotropio o biológicos.')])])]),
  },
};
