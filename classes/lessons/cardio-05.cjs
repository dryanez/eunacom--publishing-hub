// Clase 1.5 (Cardiología) — Anticoagulación en fibrilación auricular. Guion escrito a mano (modelo cardio-14).
// Fuente clínica: books/scripts/dataset_cardiologia_bloque_1.cjs (cardio-05). Código 1.01.3.003 Manejo del paciente en tratamiento
// anticoagulante (conocimiento), según books/data/v3_codemap.json.
// Preguntas reales (class_questions.cjs cardio-05 y --search "anticoagul|CHA|acenocumarol"): Diciembre 2025 P150 (prótesis mecánica
// mitral e IRC: acenocumarol) y Julio 2025 P97 (FA no valvular, CHA2DS2-VASc 4: ACOD). Enunciados y alternativas copiados del banco.
// Se agregan dos preguntas del banco del libro (Banco Oficial AEE): prótesis mecánica mitral y estenosis mitral reumática.
// No usadas: Diciembre 2018 P92 (clave acenocumarol con CHADS2 2, el libro indica ACOD; además necesita ECG; anotada en las dudas);
// Julio 2013 P45 y Julio 2019 P173 (heparina de bajo peso más verapamilo, discutibles).
// Fotos en contexto: no se encontró una figura verificada de la orejuela izquierda ni del trombo auricular; anotado en
// classes/docs/auditoria_imagenes/FALTANTES_cardio_bloque_1.md.
// En movimiento: scenes/cardio_b1.html ?v=cha2ds2 (gráfico propio del puntaje).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cardio-05',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'A quién se anticoagula, con qué fármaco y qué hacer cuando algo sale mal',
      say: 'Bienvenido. Ya sabes reconocer una fibrilación auricular. Hoy vemos lo que realmente cambia la vida del paciente: evitar el accidente cerebrovascular. Anticoagular bien reduce el riesgo de embolia cerebral en cerca de dos tercios. Tú decides a quién se anticoagula, con qué fármaco y cómo se rescata cuando hay un sangrado. El examen pregunta el puntaje, la elección del fármaco y los errores clásicos, como dar aspirina.',
    },

    {
      type: 'flow',
      kicker: 'Principio',
      title: 'El riesgo no depende de los síntomas',
      nodes: [
        { id: 'f', col: 0, row: 1, k: 'cause', t: 'Fibrilación auricular', s: 'Paroxística, persistente o permanente' },
        { id: 'e', col: 1, row: 1, k: 'mech', t: 'Estasis en la orejuela', s: 'Se forma un trombo' },
        { id: 'a', col: 2, row: 0, k: 'alert', t: 'ACV embólico', s: 'Extenso y letal' },
        { id: 'n', col: 2, row: 2, k: 'trap', t: 'Aunque no haya síntomas', s: 'Ni frecuencia alta ni ritmo' },
        { id: 'p', col: 3, row: 1, k: 'q', t: 'Puntaje CHA₂DS₂-VASc', s: 'Define si se anticoagula' },
        { id: 'r', col: 4, row: 1, k: 'good', t: 'Anticoagulante oral', s: 'No aspirina' },
      ],
      edges: [{ from: 'f', to: 'e' }, { from: 'e', to: 'a' }, { from: 'e', to: 'n' }, { from: 'a', to: 'p' }, { from: 'n', to: 'p' }, { from: 'p', to: 'r' }],
      steps: [
        { show: ['f', 'e'], note: 'Se forma un trombo',
          say: 'En la fibrilación auricular la aurícula izquierda, y sobre todo su orejuela, no se contrae. La sangre se estanca y se forma un trombo que puede viajar al cerebro.' },
        { show: ['a', 'n'], note: 'No hay que esperar síntomas',
          say: 'El riesgo existe en la forma paroxística, en la persistente y en la permanente. No depende de los síntomas ni de si la frecuencia está controlada. Una paciente asintomática con pulso irregular y varios factores de riesgo debe anticoagularse igual.' },
        { show: ['p', 'r'], note: 'El puntaje decide',
          say: 'Entonces, ¿a quién? Eso lo decide el puntaje de riesgo, y el tratamiento es un anticoagulante oral. La aspirina no es una alternativa.' },
      ],
    },

    {
      type: 'points',
      kicker: 'El puntaje',
      title: 'CHA₂DS₂-VASc: ocho letras',
      cards: [
        { title: 'Un punto', tag: 'Cada uno', kind: 'criteria', items: [
          { t: 'C · H · D · V · A · Sc', d: 'IC · HTA · diabetes · enfermedad vascular · edad 65-74 · sexo femenino',
            say: 'El puntaje CHA₂DS₂-VASc suma ocho factores. Valen un punto la insuficiencia cardíaca, la hipertensión, la diabetes, la enfermedad vascular, como un infarto previo o la enfermedad arterial periférica, la edad entre sesenta y cinco y setenta y cuatro años, y el sexo femenino.' },
        ] },
        { title: 'Dos puntos', tag: 'Los pesados', kind: 'alert', items: [
          { t: 'Edad ≥ 75 años', d: 'A₂',
            say: 'Valen dos puntos la edad de setenta y cinco años o más...' },
          { t: 'ACV, AIT o tromboembolismo previo', d: 'S₂',
            say: '...y el antecedente de accidente cerebrovascular, ataque isquémico transitorio o tromboembolismo.' },
        ] },
      ],
    },

    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'Calculemos el puntaje de una paciente',
      images: [
        { src: 'animaciones/cardio-05/A1_cha2ds2_vasc.mp4', label: 'Mujer de 76 años, hipertensa y diabética, con FA', credit: 'Animación propia con los criterios del libro' },
      ],
      steps: [
        { note: 'Se suma y se decide',
          say: 'Veamos a una mujer de setenta y seis años con fibrilación crónica, hipertensa y diabética. La hipertensión suma uno, la edad de setenta y cinco o más suma dos, la diabetes suma uno y el sexo femenino suma uno: el total es cinco. En la mujer, tres o más puntos obligan a anticoagular de por vida. Y la elección es un anticoagulante oral directo, salvo que tenga una válvula mecánica o una estenosis mitral.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Umbral',
      title: 'A quién se anticoagula',
      cards: [
        { title: 'Según el sexo', tag: 'Se pregunta', kind: 'key', items: [
          { t: 'Hombre ≥ 2 · Mujer ≥ 3', d: 'Anticoagulación oral obligatoria',
            say: 'Con dos o más puntos en el hombre y tres o más en la mujer, la anticoagulación oral es obligatoria y permanente.' },
          { t: 'Hombre 1 · Mujer 2', d: 'Considerar, decidir con el paciente',
            say: 'Con un punto en el hombre o dos en la mujer, se considera anticoagular y se decide con el paciente.' },
          { t: 'Hombre 0 · Mujer 1', d: 'No anticoagular',
            say: 'Con cero en el hombre o uno en la mujer, no se anticoagula: no hay beneficio y sí riesgo de sangrado.' },
        ] },
        { title: 'Dos reglas', tag: 'Errores clásicos', kind: 'alert', items: [
          { t: 'La edad avanzada no contraindica', d: '78 años con puntaje 4: anticoagular',
            say: 'La edad avanzada no es una contraindicación, sino un factor de riesgo. Una mujer de setenta y ocho años con puntaje cuatro se anticoagula.' },
          { t: 'Aspirina: contraindicada como monoterapia', d: 'No previene el ACV y sangra',
            say: 'Y la aspirina, sola o con clopidogrel, no previene el accidente cerebrovascular de la fibrilación y sangra casi tanto como un anticoagulante. Es la respuesta incorrecta clásica.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Qué fármaco',
      title: 'ACOD: la primera línea',
      cards: [
        { title: 'Anticoagulantes orales directos', tag: 'FA no valvular', kind: 'pharma', items: [
          { t: 'Apixabán 5 mg c/12 h', d: '2,5 mg si 2 de: ≥ 80 años, ≤ 60 kg, creatinina ≥ 1,5',
            say: 'Los anticoagulantes orales directos son la primera línea en la fibrilación no valvular. El apixabán se da cinco miligramos cada doce horas, y baja a dos coma cinco si el paciente cumple dos de tres criterios: ochenta años o más, peso de sesenta kilos o menos, o creatinina de uno coma cinco o más.' },
          { t: 'Rivaroxabán 20 mg/día con comida · dabigatrán 150 mg c/12 h', d: 'Edoxabán 60 mg/día',
            say: 'El rivaroxabán se da veinte miligramos al día con la comida, y el dabigatrán, ciento cincuenta cada doce horas, con eliminación renal de ochenta por ciento. El apixabán tiene el menor riesgo de sangrado y es el de elección en el adulto mayor.' },
          { t: 'Sin control del INR · antes: función renal y peso', d: 'Una dosis olvidada importa',
            say: 'No requieren controles de laboratorio, pero antes de indicarlos se mide la función renal, el hemograma y el peso. Tienen vida media corta: una dosis olvidada importa.' },
        ] },
        { title: 'Por qué se prefieren', tag: 'Frente a la warfarina', kind: 'key', items: [
          { t: 'Eficacia igual o mayor · mitad de hemorragia intracraneal', d: 'Sin ajustes por la dieta',
            say: 'Son igual o más eficaces que la warfarina para evitar el accidente cerebrovascular, producen cerca de la mitad de hemorragias intracraneales y no necesitan ajustes por la dieta.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'La excepción',
      title: 'FA valvular: antagonista de vitamina K',
      cards: [
        { title: 'ACOD contraindicados', tag: 'Dos escenarios', kind: 'alert', items: [
          { t: 'Estenosis mitral reumática moderada o grave', d: 'FA valvular',
            say: 'Hay dos escenarios en que los anticoagulantes directos están estrictamente contraindicados. El primero, la estenosis mitral reumática moderada o grave.' },
          { t: 'Prótesis valvular mecánica', d: 'Más trombosis protésica y sangrado',
            say: 'El segundo, las prótesis valvulares mecánicas, porque los ensayos mostraron más trombosis de la prótesis y más sangrado.' },
        ] },
        { title: 'Qué se da', tag: 'Acenocumarol o warfarina', kind: 'pharma', items: [
          { t: 'INR 2,0-3,0 en estenosis mitral', d: '2,5-3,5 en prótesis mecánica mitral',
            say: 'En ambos casos el tratamiento es un antagonista de vitamina K, acenocumarol o warfarina. La meta del INR es de dos a tres en la estenosis mitral y de dos coma cinco a tres coma cinco en la prótesis mecánica mitral.' },
          { t: 'IRC grave: antagonista de vitamina K o apixabán', d: 'No heparina de bajo peso',
            say: 'También se usan cuando no hay acceso a un anticoagulante directo, en el síndrome antifosfolípido y en la insuficiencia renal avanzada. Una paciente con prótesis mecánica mitral e insuficiencia renal con clearance de veinte, que hace una fibrilación, recibe acenocumarol.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Seguimiento y complicaciones',
      title: 'Sangrado, reversión e interacciones',
      cards: [
        { title: 'Riesgo de sangrado', tag: 'HAS-BLED', kind: 'criteria', items: [
          { t: 'No sirve para negar, sino para corregir', d: 'HTA, AINE, antiagregantes, alcohol, INR lábil',
            say: 'El puntaje HAS-BLED no se usa para negar la anticoagulación, sino para corregir lo que se puede: controlar la presión arterial, suspender los AINE y los antiagregantes innecesarios, limitar el alcohol y estabilizar el INR.' },
          { t: 'Control de INR y de función renal', d: 'ACOD: función renal y Hb al menos anual',
            say: 'Con acenocumarol se controla el INR, con mucha frecuencia al inicio y después cada cuatro semanas; con los anticoagulantes directos, la función renal y la hemoglobina al menos una vez al año.' },
        ] },
        { title: 'Sangrado mayor', tag: 'Revertir', kind: 'alert', items: [
          { t: 'Warfarina o acenocumarol: vitamina K + concentrado de complejo protrombínico', d: 'Plasma si no hay',
            say: 'Si hay un sangrado mayor, suspendes el anticoagulante, haces medidas locales y reviertes. Con warfarina o acenocumarol, vitamina K endovenosa más concentrado de complejo protrombínico.' },
          { t: 'Dabigatrán: idarucizumab · apixabán o rivaroxabán: andexanet', d: 'Procedimientos: suspender 24-72 h',
            say: 'Con dabigatrán, idarucizumab; con apixabán o rivaroxabán, andexanet alfa. Y antes de una cirugía de alto riesgo, el anticoagulante directo se suspende entre uno y tres días, sin puente de heparina.' },
        ] },
      ],
    },

    { type: 'pathway', intro: 'Armemos el árbol: de la fibrilación a la elección del anticoagulante.' },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Anticoagulación en FA: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Mujer 76 años, HTA y DM, FA asintomática', 'ACOD permanente (puntaje 5)', 'Aspirina o no tratar'],
          say: 'Mujer de setenta y seis años, hipertensa y diabética, asintomática: puntaje cinco, anticoagulante directo. El error es dar aspirina o no tratar porque está asintomática.' },
        { cells: ['Prótesis mecánica mitral + FA', 'Acenocumarol, INR 2,5-3,5', 'Apixabán o rivaroxabán'],
          say: 'Prótesis mecánica y fibrilación: acenocumarol. El error es usar un anticoagulante directo.' },
        { cells: ['Estenosis mitral reumática + FA', 'Antagonista de vitamina K, INR 2-3', 'ACOD'],
          say: 'Estenosis mitral reumática con fibrilación: antagonista de vitamina K, no anticoagulante directo.' },
        { cells: ['Mujer 78 años, puntaje 4', 'Anticoagular', 'No hacerlo por la edad'],
          say: 'Una mujer de setenta y ocho años con puntaje cuatro se anticoagula. No hacerlo por la edad es el error.' },
        { cells: ['Hombre, puntaje 0', 'No anticoagular', 'Dar anticoagulante por los síntomas'],
          say: 'Hombre con puntaje cero: no se anticoagula, aunque tenga síntomas.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 76 años, hipertensa y diabética, asintomática. Pulso irregular a 84 lpm. ECG: fibrilación auricular crónica sin valvulopatía. Clearance de creatinina 62 mL/min, peso 68 kg. Toma aspirina 100 mg al día por indicación previa.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Mantener la aspirina, porque está asintomática' },
        { letter: 'B', text: 'Aspirina más clopidogrel' },
        { letter: 'C', text: 'Anticoagulante oral directo (por ejemplo apixabán 5 mg cada 12 horas) y suspender la aspirina si no tiene otra indicación' },
        { letter: 'D', text: 'Acenocumarol con INR de 2,5 a 3,5' },
        { letter: 'E', text: 'No anticoagular por tener 76 años' },
      ],
      correct: 'C',
      explanation: 'CHA₂DS₂-VASc de 5 (edad ≥ 75: 2, HTA: 1, diabetes: 1, sexo femenino: 1): anticoagulación oral permanente con un ACOD. La aspirina no previene el ACV de la FA. El apixabán se mantiene en 5 mg porque solo cumple un criterio de reducción (la edad).',
      say: {
        stem: 'Una mujer de setenta y seis años, hipertensa y diabética, asintomática, tiene una fibrilación auricular crónica sin valvulopatía. Su clearance de creatinina es de sesenta y dos y pesa sesenta y ocho kilos. Toma aspirina cien miligramos al día.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: mantener la aspirina; aspirina más clopidogrel; anticoagulante oral directo y suspender la aspirina; acenocumarol con INR alto; o no anticoagular por la edad. Piénsalo.',
        answer: 'Es la C. El puntaje es cinco: edad con dos puntos, hipertensión, diabetes y sexo femenino. Corresponde un anticoagulante oral directo, y la aspirina no sirve. La E tienta, pero la edad avanzada no es contraindicación, es un factor de riesgo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 150',
      stem: 'Un paciente de 62 años, con antecedente de prótesis mecánica de válvula mitral e insuficiencia renal crónica, con un clearence de creatinina estimado de 20 ml/min, presenta un cuadro de palpitaciones. Se realiza electrocardiograma que muestra una taquiarritmia irregular con QRS angosto y ausencia de onda P.',
      question: '¿Qué tratamiento es el más adecuado para su manejo?',
      options: [
        { letter: 'A', text: 'Apixabán' },
        { letter: 'B', text: 'Enoxaparina' },
        { letter: 'C', text: 'Dabigatrán' },
        { letter: 'D', text: 'Acenocumarol' },
        { letter: 'E', text: 'Rivaroxabán' },
      ],
      correct: 'D',
      explanation: 'La prótesis mecánica contraindica los anticoagulantes directos; el tratamiento es un cumarínico. La insuficiencia renal grave refuerza la elección, y las heparinas de bajo peso molecular no se recomiendan por acumulación.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Un paciente de sesenta y dos años con prótesis mecánica de válvula mitral e insuficiencia renal crónica, con clearance de veinte, consulta por palpitaciones. El electrocardiograma muestra una taquiarritmia irregular, de QRS angosto y sin ondas P.',
        question: '¿Qué tratamiento es el más adecuado?',
        options: 'Las opciones: apixabán; enoxaparina; dabigatrán; acenocumarol; o rivaroxabán. Piénsalo.',
        answer: 'Es la D. Es una fibrilación con prótesis mecánica: los anticoagulantes directos están contraindicados, y la insuficiencia renal grave refuerza el cumarínico. La A tienta porque el apixabán sí puede usarse en la insuficiencia renal, pero no con una válvula mecánica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 97',
      stem: 'Mujer de 78 años con fibrilación auricular permanente no valvular, CHA₂DS₂-VASc de 4. Sin antecedente de hemorragia.',
      question: '¿Cuál es el manejo antitrombótico más adecuado?',
      options: [
        { letter: 'A', text: 'Anticoagulación oral con apixabán o rivaroxabán' },
        { letter: 'B', text: 'Aspirina 100 mg/día' },
        { letter: 'C', text: 'No anticoagular por edad avanzada' },
        { letter: 'D', text: 'Heparina de bajo peso molecular' },
        { letter: 'E', text: 'Clopidogrel + aspirina' },
      ],
      correct: 'A',
      explanation: 'En la FA no valvular con CHA₂DS₂-VASc de 3 o más en la mujer corresponde anticoagulación oral. Los ACOD son preferibles en el adulto mayor por el menor riesgo de hemorragia intracraneal; la edad no contraindica y la aspirina no previene el ACV.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Una mujer de setenta y ocho años tiene fibrilación auricular permanente no valvular con puntaje de cuatro, sin antecedente de hemorragia.',
        question: '¿Cuál es el manejo antitrombótico más adecuado?',
        options: 'Las opciones: anticoagulante oral con apixabán o rivaroxabán; aspirina; no anticoagular por la edad; heparina de bajo peso molecular; o clopidogrel con aspirina. Piénsalo.',
        answer: 'Es la A. Con puntaje de cuatro en una mujer, anticoagulación oral, y los anticoagulantes directos son preferibles en el adulto mayor. La C tienta, pero la edad no contraindica anticoagular.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Hombre de 60 años portador de una prótesis valvular mecánica mitral consulta por fibrilación auricular.',
      question: '¿Cuál es el tratamiento anticoagulante de elección?',
      options: [
        { letter: 'A', text: 'Acenocumarol o warfarina con meta de INR entre 2,5 y 3,5' },
        { letter: 'B', text: 'Apixabán 5 mg cada 12 horas' },
        { letter: 'C', text: 'Rivaroxabán 20 mg al día' },
        { letter: 'D', text: 'Dabigatrán 150 mg cada 12 horas' },
        { letter: 'E', text: 'Heparina de bajo peso molecular por vía subcutánea indefinida' },
      ],
      correct: 'A',
      explanation: 'Las prótesis mecánicas contraindican los anticoagulantes directos. El tratamiento validado es un antagonista de vitamina K con INR de 2,5 a 3,5 en la posición mitral.',
      say: {
        stem: 'Una pregunta del banco del libro. Un hombre de sesenta años con una prótesis valvular mecánica mitral consulta por fibrilación auricular.',
        question: '¿Cuál es el anticoagulante de elección?',
        options: 'Las opciones: acenocumarol o warfarina con INR de dos coma cinco a tres coma cinco; apixabán; rivaroxabán; dabigatrán; o heparina de bajo peso molecular indefinida. Piénsalo.',
        answer: 'Es la A. Con prótesis mecánica, solo antagonista de vitamina K. Las opciones B, C y D son anticoagulantes directos, contraindicados: aumentan la trombosis de la prótesis.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: anticoagulación en FA',
      cards: [
        { title: 'A quién', tag: 'Puntaje', kind: 'key', items: [
          { t: 'CHA₂DS₂-VASc: hombre ≥ 2 · mujer ≥ 3', d: 'No depende de los síntomas',
            say: 'Cerremos con las reglas de oro. Se anticoagula según el puntaje: hombre con dos o más, mujer con tres o más. No depende de los síntomas ni de la frecuencia.' },
          { t: 'Aspirina: no', d: 'La edad no contraindica',
            say: 'La aspirina no previene el accidente cerebrovascular de la fibrilación, y la edad avanzada no contraindica anticoagular.' },
        ] },
        { title: 'Con qué', tag: 'Fármaco', kind: 'pharma', items: [
          { t: 'FA no valvular: ACOD de primera línea', d: 'Apixabán, rivaroxabán, dabigatrán',
            say: 'En la fibrilación no valvular, un anticoagulante oral directo.' },
          { t: 'Prótesis mecánica o estenosis mitral: acenocumarol o warfarina', d: 'INR 2-3 · 2,5-3,5 mitral mecánica',
            say: 'En la prótesis mecánica y la estenosis mitral reumática, un antagonista de vitamina K con INR de dos a tres, o dos y medio a tres y medio en la prótesis mecánica mitral.' },
          { t: 'Tras cardiovertir: ≥ 4 semanas', d: 'Sangrado mayor: revertir',
            say: 'Si te llevas una sola idea de hoy: la fibrilación auricular se anticoagula por el riesgo de embolia, no por los síntomas, y el fármaco depende de si hay una válvula mecánica o una estenosis mitral. Nos vemos en la próxima clase, donde veremos otra taquicardia clásica del examen: la TPSV y el síndrome de Wolff-Parkinson-White.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Fibrilación auricular: a quién se anticoagula y con qué',
    root: N('start', 'FA o flutter confirmado', 'Anticoagular según el riesgo',
      'Tienes un paciente con fibrilación auricular o flutter. Lo primero que decides es si tiene una estenosis mitral reumática o una prótesis mecánica.',
      ['Estenosis mitral o válvula mecánica', N('alert', 'FA valvular', 'Antagonista de vitamina K',
        'Si hay estenosis mitral reumática moderada o grave, o una prótesis mecánica, no calculas el puntaje: acenocumarol o warfarina, con INR de dos a tres, o dos y medio a tres y medio en la prótesis mecánica mitral. Los anticoagulantes directos están contraindicados.')],
      ['FA no valvular', N('q', 'Calcular CHA₂DS₂-VASc', 'Hombre ≥ 2 · mujer ≥ 3',
        'Si no es valvular, calculas el puntaje de riesgo y decides según el sexo.',
        ['Hombre ≥ 2 o mujer ≥ 3', N('ok', 'ACOD de por vida', 'Apixabán, rivaroxabán, dabigatrán',
          'Con dos o más en el hombre o tres o más en la mujer, anticoagulante oral directo permanente. Se miden la función renal y el peso, y se ajusta la dosis.')],
        ['Hombre 0 o mujer 1', N('refer', 'No anticoagular', 'Reevaluar cada año',
          'Con cero en el hombre o uno en la mujer, no se anticoagula, y se recalcula cada año.')],
      )],
    ),
  },
};
