// Clase 3.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_nefrologia.cjs (nefro-09, bloque 3).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'nefro-09',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Membrana, redistribución y eliminación: el orden que salva la vida',
      say: 'Bienvenidos. Hoy vemos la hiperkalemia grave, el trastorno electrolítico más letal de la urgencia y una pregunta casi segura en cada EUNACOM. La buena noticia es que todo se ordena en tres pasos: proteger la membrana, meter el potasio a la célula y sacarlo del cuerpo. Si entiendes por qué van en ese orden, la pregunta de la primera medida no se te va a escapar nunca.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Por qué el potasio alto detiene el corazón?',
      nodes: [
        { id: 'int', col: 0, row: 1, k: 'cause', t: 'K: 98% intracelular', s: 'Solo 2% en el plasma' },
        { id: 'sub', col: 1, row: 1, k: 'mech', t: 'Sube el K extracelular', s: 'Potencial de reposo menos negativo' },
        { id: 'can', col: 2, row: 1, k: 'mech', t: 'Canales de sodio inactivados', s: 'Conducción AV e intraventricular lenta' },
        { id: 'gra', col: 3, row: 0, k: 'risk', t: 'Grave: K > 6,5 mEq/L', s: 'Leve > 5,5 · moderada > 6,0' },
        { id: 'par', col: 3, row: 2, k: 'alert', t: 'FV o asistolia', s: 'En minutos, sin aviso' },
      ],
      edges: [
        { from: 'int', to: 'sub', label: 'si se acumula' },
        { from: 'sub', to: 'can' },
        { from: 'can', to: 'gra' },
        { from: 'can', to: 'par' },
      ],
      steps: [
        { show: ['int'], note: 'El potasio vive dentro de la célula',
          say: 'Partamos por el mecanismo. El potasio es el catión de adentro de la célula: noventa y ocho por ciento está en el intracelular y apenas un dos por ciento en el plasma. Por eso, un cambio pequeño en el plasma tiene un efecto enorme sobre la membrana.' },
        { show: ['sub'], note: 'La membrana queda despolarizada',
          say: 'Cuando el potasio extracelular sube, el potencial de reposo del miocito se vuelve menos negativo. La célula queda parcialmente despolarizada, como un resorte que ya no se puede tensar.' },
        { show: ['can'], note: 'Sin canales de sodio, la conducción se enlentece',
          say: 'Y una membrana despolarizada inactiva los canales de sodio que dependen del voltaje. Resultado: la conducción entre aurícula y ventrículo, y dentro del ventrículo, se vuelve lenta. Ese enlentecimiento es lo que vas a ver en el electrocardiograma.' },
        { show: ['gra'], note: 'Leve, moderada y grave',
          say: 'Para clasificarla: sobre cinco coma cinco miliequivalentes por litro es leve, sobre seis es moderada, y sobre seis coma cinco es grave. La toxicidad depende de la cifra, pero también de lo rápido que subió.' },
        { show: ['par'], note: 'Paro sin pródromo',
          say: 'Y lo que la hace tan temida: sobre seis coma cinco, el paciente puede caer en fibrilación ventricular o en asistolia en cuestión de minutos, sin ningún aviso previo.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Electrocardiograma',
      title: 'La progresión en el ECG',
      nodes: [
        { id: 't', col: 0, row: 0, k: 'effect', t: 'T alta, picuda, simétrica', s: 'Primer signo · K 5,5–6,5' },
        { id: 'pr', col: 1, row: 1, k: 'effect', t: 'PR largo, P aplanada', s: 'K 6,5–7,0' },
        { id: 'qrs', col: 2, row: 2, k: 'risk', t: 'Sin P y QRS ancho', s: 'K 7,0–8,0' },
        { id: 'sin', col: 3, row: 3, k: 'risk', t: 'Bradicardia extrema, onda sinusoidal', s: 'Ritmo idioventricular, bloqueo AV' },
        { id: 'fv', col: 4, row: 4, k: 'alert', t: 'FV o asistolia', s: 'Paro' },
      ],
      edges: [
        { from: 't', to: 'pr' }, { from: 'pr', to: 'qrs' }, { from: 'qrs', to: 'sin' }, { from: 'sin', to: 'fv' },
      ],
      steps: [
        { show: ['t'], note: 'Onda T picuda: el signo precoz',
          say: 'El electrocardiograma sigue una progresión bastante típica, pero traicionera. Lo primero son las ondas T altas, picudas, simétricas y de base angosta, en general con potasio entre cinco coma cinco y seis coma cinco.' },
        { show: ['pr'], note: 'Se afecta la aurícula',
          say: 'Luego se alarga el PR y la onda P se va aplanando, entre seis coma cinco y siete.' },
        { show: ['qrs'], note: 'Desaparece la P, se ensancha el QRS',
          say: 'Entre siete y ocho, la P desaparece por completo y el QRS se ensancha. Aquí ya estás frente a un corazón al borde del paro.' },
        { show: ['sin', 'fv'], note: 'El final: onda sinusoidal y paro',
          say: 'Después viene el ritmo idioventricular, la bradicardia extrema, el bloqueo auriculoventricular avanzado y el patrón en onda sinusoidal. El último paso es la fibrilación ventricular o la asistolia. Fíjate en la palabra traicionera: no siempre se recorren todas las etapas, y el paciente puede saltar al paro desde cualquiera.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: '¿Cómo llega el paciente con hiperkalemia grave?',
      cards: [
        { title: 'Corazón', tag: 'Lo que mata', kind: 'alert', items: [
          { t: 'Bradicardia con QRS ancho', d: 'Hiperkalemia hasta demostrar lo contrario',
            say: 'Veamos cómo llega. En el corazón, el cuadro típico es la bradicardia severa con QRS ancho. Y una regla que se pregunta: en un paciente renal crónico o dializado, bradicardia con QRS ancho es hiperkalemia hasta que se demuestre lo contrario.' },
          { t: 'Hipotensión, síncope, paro', d: 'Por bloqueo y bajo gasto',
            say: 'Esa bradicardia puede dar hipotensión, síncope y, al final, el paro. Por eso ante la sospecha, lo primero es un monitor y un electrocardiograma, que están disponibles en segundos.' },
        ] },
        { title: 'Músculo', tag: 'Ojo en el examen', kind: 'criteria', items: [
          { t: 'Tetraparesia flácida', d: 'Ascendente, con reflejos abolidos',
            say: 'La otra cara es neuromuscular. La hiperkalemia grave da debilidad profunda, hasta una tetraparesia flácida ascendente con reflejos osteotendíneos abolidos.' },
          { t: 'Simula un Guillain-Barré', d: 'El contexto renal da la pista',
            say: 'Por eso puede disfrazarse de síndrome de Guillain-Barré. La pista está en el contexto: un paciente en hemodiálisis que faltó a su sesión y comió mucho. Esa historia exacta ya salió en el examen, y la vamos a ver.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Paso 1 · Membrana',
      title: 'Primero el calcio: compra tiempo',
      nodes: [
        { id: 'ind', col: 0, row: 1, k: 'start', t: 'ECG alterado o K > 6,5 inestable', s: 'Incluso solo T picudas' },
        { id: 'glu', col: 1, row: 1, k: 'good', t: 'Gluconato de calcio 10%', s: '10 mL IV en 2 a 5 minutos' },
        { id: 'mec', col: 2, row: 0, k: 'mech', t: 'Sube el umbral de disparo', s: 'Inicio 1–3 min · dura 30–60 min' },
        { id: 'rep', col: 2, row: 2, k: 'q', t: '¿Persiste el ECG a los 5–10 min?', s: 'Repetir una segunda ampolla' },
        { id: 'no', col: 3, row: 1, k: 'trap', t: 'No baja el potasio', s: 'Cero efecto en la kalemia' },
      ],
      edges: [
        { from: 'ind', to: 'glu' }, { from: 'glu', to: 'mec' }, { from: 'glu', to: 'rep' },
        { from: 'mec', to: 'no', label: 'pero' },
      ],
      steps: [
        { show: ['ind'], note: 'Cualquier cambio en el ECG basta',
          say: 'Ahora el tratamiento, paso por paso. ¿Cuándo actuar de inmediato? Frente a cualquier alteración del electrocardiograma atribuible a hiperkalemia, incluso si son solo ondas T picudas, o con potasio sobre seis coma cinco e inestabilidad.' },
        { show: ['glu'], note: 'La primera medida, siempre',
          say: 'Y la primera medida, absoluta, es el gluconato de calcio al diez por ciento: una ampolla de diez mililitros por vía endovenosa, en dos a cinco minutos. Esto es lo que el examen pregunta una y otra vez.' },
        { show: ['mec'], note: 'Devuelve la excitabilidad normal',
          say: '¿Por qué funciona? El calcio lleva el umbral de disparo del miocito a valores menos negativos, y así restaura la distancia normal entre el reposo y el umbral. Actúa en uno a tres minutos y su efecto dura treinta a sesenta minutos.' },
        { show: ['rep'], note: 'Se puede repetir',
          say: 'Si a los cinco a diez minutos el electrocardiograma sigue alterado, se repite una segunda ampolla.' },
        { show: ['no'], note: 'Solo compra tiempo',
          say: 'Y ahora la trampa conceptual: el calcio no baja el potasio en nada. Solo compra tiempo para que actúen las otras medidas. Por eso, si en una pregunta te dicen que se dio calcio y se revirtió el electrocardiograma, el problema no está resuelto: el potasio sigue igual de alto.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Paso 1 · Marcapasos',
      title: '¿Y si el paciente está bradicárdico?',
      cards: [
        { title: 'Primero la membrana', tag: 'Trampa clásica', kind: 'alert', items: [
          { t: 'Marcapasos sin calcio: falla', d: 'El miocardio despolarizado no captura',
            say: 'Una duda que aparece siempre: si el paciente llega con treinta latidos por minuto, ¿no debería ir un marcapasos? El libro es claro. Un marcapasos transitorio instalado sin estabilizar antes la membrana suele fracasar, porque el miocardio despolarizado no captura el estímulo eléctrico.' },
          { t: 'Calcio antes que todo', d: 'Luego redistribuir y eliminar',
            say: 'Así que aunque la alternativa del marcapasos suene lógica frente a una bradicardia, en la hiperkalemia la respuesta es el calcio. Primero la membrana, después todo lo demás.' },
        ] },
        { title: 'Monitorización', tag: 'Minuto cero', kind: 'normal', items: [
          { t: 'Monitor ECG continuo', d: 'Y vía venosa gruesa',
            say: 'En paralelo, desde el minuto cero: monitor electrocardiográfico continuo y una vía venosa gruesa. Sin eso no puedes ver si el calcio funcionó ni administrar lo que viene.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Paso 2 · Redistribución',
      title: 'Meter el potasio a la célula',
      cards: [
        { title: 'Insulina + glucosa', tag: 'La más potente', kind: 'pharma', items: [
          { t: 'Insulina regular 10 UI IV', d: 'Con 50–100 mL de SG 30%',
            say: 'El segundo paso es desplazar el potasio al interior de la célula. La medida más potente es la insulina: diez unidades de insulina regular endovenosa en bolo, con cincuenta a cien mililitros de suero glucosado al treinta por ciento, o doscientos cincuenta a quinientos de suero glucosado al diez.' },
          { t: 'Activa la Na-K ATPasa', d: 'Inicio 15–30 min · dura 4–6 h',
            say: 'La insulina estimula la bomba de sodio y potasio en el músculo y el hígado. Empieza a actuar en quince a treinta minutos y dura cuatro a seis horas. ¿Y la glucosa? Está ahí solo para evitar una hipoglicemia severa, por eso se controla la glicemia en forma seriada.' },
        ] },
        { title: 'Salbutamol', tag: 'Sinérgico', kind: 'pharma', items: [
          { t: 'Nebulizado 10–20 mg', d: 'Cuatro veces la dosis del asma',
            say: 'Se suma el salbutamol nebulizado en dosis altas, diez a veinte miligramos, unas cuatro veces la dosis que usas en el asma. Estimula la misma bomba por otra vía y actúa en sinergia con la insulina.' },
        ] },
        { title: 'Bicarbonato', tag: 'Solo con acidosis', kind: 'alert', items: [
          { t: 'Si pH < 7,1 o HCO3 < 12', d: 'Acidosis metabólica severa confirmada',
            say: 'El bicarbonato de sodio solo sirve si coexiste una acidosis metabólica severa confirmada: pH bajo siete coma uno, o bicarbonato bajo doce.' },
          { t: 'Inútil en el anúrico', d: 'Sobrecarga de volumen e hipocalcemia',
            say: 'Sin acidosis, o en el paciente anúrico en diálisis, es ineficaz y además provoca sobrecarga de volumen e hipocalcemia iónica. Todo este paso baja la kalemia entre medio y un poco más de un miliequivalente, pero es transitorio.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Paso 3 · Eliminación',
      title: 'Sacar el potasio del cuerpo',
      cards: [
        { title: 'Si el paciente orina', tag: 'Diuresis conservada', kind: 'pharma', items: [
          { t: 'Furosemida 40–80 mg IV', d: 'Fuerza la secreción distal de K',
            say: 'El potasio que metiste a la célula vuelve a salir en unas horas. Por eso, en paralelo, hay que eliminarlo. Si el paciente orina, la furosemida, cuarenta a ochenta miligramos endovenosos, aumenta el flujo tubular y la llegada de sodio al túbulo colector, y con eso fuerza la secreción de potasio.' },
          { t: 'Quelantes intestinales', d: 'Kayexalate, patiromer, ZS-9: lentos',
            say: 'Los quelantes intestinales, como el sulfonato de poliestireno, el patiromer o el ciclosilicato de zirconio, actúan en horas. Sirven para el manejo subagudo o ambulatorio, no para el rescate.' },
        ] },
        { title: 'Hemodiálisis de urgencia', tag: 'La más rápida y definitiva', kind: 'alert', items: [
          { t: 'Anuria o diálisis que omitió sesión', d: 'Indicación inmediata',
            say: 'Y la herramienta más rápida, potente y definitiva es la hemodiálisis de urgencia. Es mandatoria en la anuria y en el paciente en diálisis que omitió su sesión.' },
          { t: 'Refractaria o con edema pulmonar', d: 'También indicación inmediata',
            say: 'También en la hiperkalemia refractaria al tratamiento médico, o asociada a edema agudo de pulmón. Esto conecta con la clase de urgencias dialíticas: la hiperkalemia refractaria es una de las indicaciones clásicas de diálisis.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Arsenal terapéutico',
      title: 'Cada fármaco, su tiempo',
      head: ['Intervención', 'Inicio', 'Duración', '¿Baja la kalemia?'],
      rows: [
        { cells: ['Gluconato de calcio 10%', '1–3 min', '30–60 min', 'NO'],
          say: 'Ordenemos el arsenal por tiempos, porque así se razona en el examen. El gluconato de calcio actúa en uno a tres minutos, dura media hora a una hora, y no baja la kalemia.' },
        { cells: ['Insulina 10 UI + SG 30%', '15–30 min', '4–6 h', 'SÍ, la redistribuye'],
          say: 'La insulina con glucosa actúa en quince a treinta minutos y dura cuatro a seis horas. Baja el potasio, pero lo esconde en la célula.' },
        { cells: ['Salbutamol nebulizado 10–20 mg', '15–30 min', '2–4 h', 'SÍ, la redistribuye'],
          say: 'El salbutamol tiene un inicio parecido y dura dos a cuatro horas.' },
        { cells: ['Furosemida 40–80 mg IV', '15–30 min', '4–6 h', 'SÍ, lo elimina'],
          say: 'La furosemida también actúa en quince a treinta minutos, pero esta sí saca el potasio del cuerpo, siempre que el paciente orine.' },
        { cells: ['Hemodiálisis de urgencia', 'Al conectar', 'Permanente', 'SÍ, elimina masivamente'],
          say: 'Y la hemodiálisis actúa apenas se conecta, con un efecto permanente. Fíjate en la lógica: lo más rápido protege, lo intermedio redistribuye, y lo definitivo elimina.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Secuencia',
      title: 'Los primeros treinta minutos',
      nodes: [
        { id: 'm0', col: 0, row: 1, k: 'start', t: 'Minuto 0', s: 'Monitor ECG + vía venosa gruesa' },
        { id: 'm1', col: 1, row: 1, k: 'good', t: 'Minutos 1–5', s: 'Gluconato de calcio 10%' },
        { id: 'm5', col: 2, row: 1, k: 'good', t: 'Minutos 5–15', s: 'Insulina + SG 30% + salbutamol' },
        { id: 'm15', col: 3, row: 0, k: 'good', t: 'Minutos 15–30, orina', s: 'Furosemida 80 mg IV' },
        { id: 'hd', col: 3, row: 2, k: 'refer', t: 'Minutos 15–30, anuria o ERC 5', s: 'Nefrología: hemodiálisis' },
      ],
      edges: [
        { from: 'm0', to: 'm1' }, { from: 'm1', to: 'm5' },
        { from: 'm5', to: 'm15', label: 'orina' }, { from: 'm5', to: 'hd', label: 'no orina' },
      ],
      steps: [
        { show: ['m0'], note: 'Ver el corazón antes de tratar',
          say: 'Pongamos todo en un reloj. Minuto cero: monitor continuo, vía venosa gruesa, y buscar en el trazado las T picudas, el PR largo o el QRS ancho.' },
        { show: ['m1'], note: 'Proteger',
          say: 'Minutos uno a cinco: gluconato de calcio, y se repite a los cinco a diez minutos si el electrocardiograma no mejora.' },
        { show: ['m5'], note: 'Redistribuir',
          say: 'Minutos cinco a quince: insulina rápida con suero glucosado y salbutamol nebulizado, con controles de glicemia cada treinta a sesenta minutos para no provocar una hipoglicemia.' },
        { show: ['m15', 'hd'], note: 'Eliminar según la diuresis',
          say: 'Y entre los quince y treinta minutos, eliminar. Si orina, furosemida. Si está anúrico o tiene una enfermedad renal crónica en etapa cinco, llamado urgente a nefrología para hemodiálisis. La diuresis decide el camino.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Pseudohiperkalemia',
      title: 'Cuando el potasio alto no es real',
      cards: [
        { title: 'Sospecharla', tag: 'Paciente y ECG normales', kind: 'criteria', items: [
          { t: 'Asintomático, ECG normal', d: 'Kalemia alta sin explicación',
            say: 'Antes de cerrar el tratamiento, una trampa importante. Si el paciente está completamente asintomático, el electrocardiograma es rigurosamente normal y el potasio alto no tiene explicación, piensa en pseudohiperkalemia.' },
          { t: 'Hemólisis en la punción', d: 'Torniquete largo, puño apretado, aguja fina',
            say: 'La causa principal es la hemólisis mecánica al tomar la muestra: torniquete prolongado, puño apretado o aguja de calibre fino. El potasio sale de los glóbulos rojos en el tubo, no en el paciente.' },
          { t: 'Plaquetas o leucocitos muy altos', d: '> 500.000 plaquetas o > 50.000 blancos',
            say: 'También la dan la trombocitosis marcada, sobre quinientas mil plaquetas, y la leucocitosis extrema, sobre cincuenta mil.' },
        ] },
        { title: 'Conducta', tag: 'Repetir antes de tratar', kind: 'key', items: [
          { t: 'Nueva muestra sin torniquete', d: 'O gases arteriales con electrolitos',
            say: 'La conducta es repetir la muestra venosa sin torniquete, o tomar gases arteriales con electrolitos. Tratar un número falso con calcio, insulina o diálisis es exponer al paciente a daño sin beneficio.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol de decisión, tal como lo vas a razonar frente a una kalemia alta.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Hiperkalemia con bradicardia o QRS ancho', 'Gluconato de calcio IV primero', 'Marcapasos o diálisis como primera medida'],
          say: 'Repasemos las trampas. Hiperkalemia con bradicardia o QRS ancho: primero gluconato de calcio. El error es partir por el marcapasos o por la diálisis.' },
        { cells: ['ECG revertido tras el calcio', 'Insulina + glucosa y salbutamol', 'Creer que el problema está resuelto'],
          say: 'Si el calcio revirtió el electrocardiograma, sigue la insulina con glucosa y el salbutamol. El error es pensar que se resolvió: el potasio no ha bajado nada.' },
        { cells: ['Rescate agudo', 'Medidas IV de acción rápida', 'Resinas de intercambio'],
          say: 'En el rescate agudo no van las resinas: tardan horas.' },
        { cells: ['Hiperkalemia sin acidosis severa', 'Insulina + glucosa', 'Bicarbonato de rutina'],
          say: 'El bicarbonato no es de rutina: solo si hay acidosis metabólica severa.' },
        { cells: ['Dializado que omitió sesión, anúrico', 'Hemodiálisis de urgencia', 'Furosemida'],
          say: 'En el dializado anúrico que faltó a su sesión, la furosemida no tiene dónde actuar: va hemodiálisis de urgencia.' },
        { cells: ['K alto, asintomático, ECG normal', 'Repetir muestra sin torniquete', 'Tratar el número'],
          say: 'Y si el potasio está alto pero el paciente y su electrocardiograma están normales, se repite la muestra antes de tratar.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 28 años en hemodiálisis trisemanal, omite su sesión del sábado tras una reunión con abundante asado y cítricos. El lunes llega con paresia flácida de las 4 extremidades, en sopor, FC 34 lpm, PA 75/40 mmHg. ECG: sin ondas P, ritmo idioventricular, QRS de 180 ms y T picudas. K 8,6 mEq/L, pH 7,24, HCO3 14 mEq/L. Ya recibió gluconato de calcio al 10% IV.',
      question: '¿Cuál es la medida que elimina el potasio en forma definitiva en este paciente?',
      options: [
        { letter: 'A', text: 'Furosemida 80 mg IV' },
        { letter: 'B', text: 'Salbutamol nebulizado 10 a 20 mg' },
        { letter: 'C', text: 'Hemodiálisis de urgencia' },
        { letter: 'D', text: 'Sulfonato de poliestireno sódico oral' },
        { letter: 'E', text: 'Bicarbonato de sodio IV' },
      ],
      correct: 'C',
      explanation: 'Dializado que omitió su sesión, con hiperkalemia de 8,6 y toxicidad cardíaca: tras el calcio y en paralelo al shifting, la eliminación definitiva es la hemodiálisis de urgencia. La furosemida requiere diuresis; el salbutamol solo redistribuye; las resinas tardan horas; el bicarbonato no está indicado con pH 7,24 y HCO3 14, y es ineficaz en el anúrico.',
      say: {
        stem: 'Vamos con un caso. Hombre de veintiocho años en hemodiálisis que falta a su sesión del sábado tras una reunión con mucho asado y cítricos. El lunes llega en sopor, con paresia flácida de las cuatro extremidades, treinta y cuatro latidos por minuto e hipotensión. Sin ondas P, QRS muy ancho y T picudas. Potasio de ocho coma seis, pH siete coma veinticuatro. Ya recibió gluconato de calcio.',
        question: '¿Cuál es la medida que elimina el potasio en forma definitiva en este paciente?',
        options: 'Las opciones son: furosemida endovenosa, salbutamol nebulizado, hemodiálisis de urgencia, sulfonato de poliestireno oral, o bicarbonato de sodio endovenoso. Piénsalo.',
        answer: 'La respuesta es la C, hemodiálisis de urgencia. Es un dializado que omitió su sesión: indicación inmediata. El distractor tentador es la furosemida, pero necesita un riñón que produzca orina. El salbutamol solo esconde el potasio en la célula, las resinas tardan horas, y el bicarbonato no está indicado con este pH. Mientras llega la diálisis, se inicia la insulina con glucosa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 107',
      stem: 'Paciente con bradicardia de 30 lpm e hiperkalemia de 8,3 mEq/L.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Bicarbonato de sodio endovenoso' },
        { letter: 'B', text: 'Insulina + glucosa endovenosa' },
        { letter: 'C', text: 'Gluconato de calcio endovenoso' },
        { letter: 'D', text: 'Kayexalate oral' },
        { letter: 'E', text: 'Hemodiálisis de urgencia' },
      ],
      correct: 'C',
      explanation: 'Hiperkalemia grave con toxicidad cardíaca (bradicardia): lo primero es estabilizar la membrana con gluconato de calcio IV, que actúa en 1–3 minutos. Insulina con glucosa y hemodiálisis van después o en paralelo, nunca antes.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de enero de dos mil veintitrés. Paciente con bradicardia de treinta latidos por minuto e hiperkalemia de ocho coma tres.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: bicarbonato de sodio, insulina con glucosa, gluconato de calcio, kayexalate oral, o hemodiálisis de urgencia. Piénsalo.',
        answer: 'Es la C, gluconato de calcio endovenoso. Fíjate que dice conducta inicial, y la bradicardia te dice que el corazón ya está sufriendo. Lo primero es proteger la membrana. La trampa es la hemodiálisis: es la medida definitiva, pero demora en instalarse, y este paciente puede hacer un paro antes. La insulina con glucosa es el paso dos, y el kayexalate tarda horas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 151',
      stem: 'Un paciente de 27 años, con antecedente de insuficiencia renal crónica en hemodiálisis, no asiste a su sesión dialítica del día sábado, debido a que acude a una fiesta con abundante consumo de comida y bebidas. El día lunes amanece con marcado malestar general y dificultad para mover las extremidades, por lo que es llevado al servicio de urgencia. Al examen físico se constata tetraparesia y frecuencia cardíaca de 40 latidos por minuto.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Síndrome de Guillain-Barré' },
        { letter: 'B', text: 'Hipokalemia' },
        { letter: 'C', text: 'Hiperkalemia' },
        { letter: 'D', text: 'Hipocalcemia' },
        { letter: 'E', text: 'Hiperfosfatemia' },
      ],
      correct: 'C',
      explanation: 'Dializado que omite su sesión + tetraparesia + bradicardia: hiperkalemia grave. Se confirma con ECG inmediato y se trata con gluconato de calcio IV, luego insulina con glucosa, salbutamol y eliminación.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Paciente de veintisiete años en hemodiálisis que no asiste a su sesión del sábado porque va a una fiesta con abundante comida y bebida. El lunes amanece con malestar y dificultad para mover las extremidades. Al examen tiene tetraparesia y cuarenta latidos por minuto.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: síndrome de Guillain-Barré, hipokalemia, hiperkalemia, hipocalcemia, o hiperfosfatemia. Piénsalo.',
        answer: 'Es la C, hiperkalemia. Junta las tres piezas: un dializado que omite su sesión, una tetraparesia flácida y una bradicardia. El distractor es el Guillain-Barré, que también da debilidad ascendente, pero no explica la bradicardia ni el contexto. Y la hipokalemia también da debilidad, pero un dializado que faltó a su sesión acumula potasio, no lo pierde. El paso siguiente es el electrocardiograma y el calcio.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'El orden', tag: 'Membrana, shifting, eliminación', kind: 'key', items: [
          { t: 'Primero gluconato de calcio', d: 'ECG alterado o K > 6,5 inestable',
            say: 'Cerremos con las reglas de oro. Con electrocardiograma alterado, o potasio sobre seis coma cinco con inestabilidad, lo primero es siempre el gluconato de calcio.' },
          { t: 'El calcio no baja el potasio', d: 'Compra 30 a 60 minutos',
            say: 'El calcio no baja el potasio: solo compra tiempo.' },
          { t: 'Insulina + glucosa y salbutamol', d: 'Redistribuyen en 15–30 min',
            say: 'La insulina con glucosa y el salbutamol meten el potasio a la célula, y el bicarbonato solo sirve si hay acidosis severa.' },
        ] },
        { title: 'Eliminar', tag: 'Decide la diuresis', kind: 'pharma', items: [
          { t: 'Orina: furosemida', d: 'Anuria o dializado: hemodiálisis',
            say: 'Para eliminarlo, decide la diuresis: si orina, furosemida; si no orina o es dializado, hemodiálisis de urgencia.' },
        ] },
        { title: 'Trampas', tag: 'Ojo', kind: 'alert', items: [
          { t: 'Bradicardia con QRS ancho en renal', d: 'Hiperkalemia hasta demostrar lo contrario',
            say: 'En el renal crónico, bradicardia con QRS ancho es hiperkalemia hasta demostrar lo contrario. Y si todo está normal menos el número, repite la muestra.' },
          { t: 'Próxima clase: hipokalemia', d: 'El otro extremo del potasio',
            say: 'En la próxima clase vemos el otro extremo, la hipokalemia. Si te llevas una sola idea de hoy: frente a una hiperkalemia con el corazón comprometido, primero calcio, porque protege, aunque no baje ni un miliequivalente. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Hiperkalemia: proteger, redistribuir, eliminar',
    root: N('start', 'Kalemia elevada', 'Monitor + ECG de inmediato',
      'Te informan un potasio elevado. Lo primero no es el número: es mirar el corazón con un monitor y un electrocardiograma.',
      ['', N('q', '¿ECG alterado o K > 6,5 con inestabilidad?', 'T picudas, PR largo, QRS ancho, bradicardia',
        'La pregunta clave: ¿hay alteraciones electrocardiográficas atribuibles al potasio, o una cifra sobre seis coma cinco con inestabilidad?',
        ['NO, asintomático', N('do', 'Sospechar pseudohiperkalemia', 'Repetir sin torniquete o gases arteriales',
          'Si el paciente está asintomático, con electrocardiograma normal y sin explicación para el potasio alto, sospecha pseudohiperkalemia y repite la muestra antes de tratar.')],
        ['SÍ', N('alert', 'Calcio, luego insulina + glucosa', 'Gluconato 10% · insulina 10 UI + SG 30% + salbutamol',
          'Si hay compromiso cardíaco, gluconato de calcio al diez por ciento de inmediato, repitiendo si el trazado no mejora. Enseguida, redistribuir con insulina, glucosa y salbutamol. El bicarbonato solo si hay acidosis severa.',
          ['', N('q', '¿El paciente orina?', 'Define cómo eliminar',
            'Y en paralelo hay que eliminar el potasio. ¿El paciente tiene diuresis?',
            ['SÍ', N('ok', 'Furosemida 40–80 mg IV', 'Más quelantes intestinales',
              'Si orina, furosemida endovenosa, y quelantes intestinales para el manejo posterior.')],
            ['NO o dializado', N('refer', 'Hemodiálisis de urgencia', 'También si es refractaria o hay edema pulmonar',
              'Si está anúrico, es un dializado que omitió su sesión, la hiperkalemia es refractaria o hay edema pulmonar: hemodiálisis de urgencia.')])])])]),
  },
};
