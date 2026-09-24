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
          say: 'Si el VEF uno sube más de doce por ciento y más de doscientos mililitros después del broncodilatador, el asma está confirmada.' },
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
