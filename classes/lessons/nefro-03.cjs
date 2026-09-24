// Clase 1.3 de Nefrología — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_nefrologia.cjs (nefro-03).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'nefro-03',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'La cifra no dializa: lo que manda es la clínica, y se recuerda con cinco vocales',
      say: 'Bienvenidos. En las dos clases anteriores dijimos varias veces que había que vigilar los criterios de diálisis de urgencia. Hoy los vemos a fondo, junto al síndrome urémico. Es de los temas más evaluados en medicina interna y urgencias, y se ordena con una regla de cinco letras: AEIOU. Pero antes, una idea que vale más que cualquier número.',
    },

    {
      type: 'flow',
      kicker: 'La idea central',
      title: 'La creatinina sola no conecta a nadie a una máquina',
      nodes: [
        { id: 'a', col: 0, row: 0, k: 'start', t: 'Creatinina 8 mg/dL', s: 'Asintomático' },
        { id: 'am', col: 2, row: 0, k: 'good', t: 'Manejo médico', s: 'Sin urgencia dialítica' },
        { id: 'b', col: 0, row: 3, k: 'start', t: 'Creatinina 3 mg/dL', s: 'Con edema pulmonar o hiperkalemia con ECG alterado' },
        { id: 'bm', col: 2, row: 3, k: 'alert', t: 'Diálisis de urgencia', s: 'Riesgo vital en minutos' },
        { id: 'reg', col: 4, row: 1, k: 'q', t: 'Manda la clínica', s: 'Regla AEIOU' },
      ],
      edges: [
        { from: 'a', to: 'am' }, { from: 'b', to: 'bm' },
        { from: 'am', to: 'reg' }, { from: 'bm', to: 'reg' },
      ],
      steps: [
        { show: ['a', 'am'], note: 'Un número alto no es una urgencia',
          say: 'Imagina dos pacientes. El primero tiene una creatinina de ocho, pero está asintomático. Por impresionante que se vea el número, se puede manejar médicamente.' },
        { show: ['b', 'bm'], note: 'Un número moderado puede matar',
          say: 'El segundo tiene una creatinina de tres, mucho menor, pero está con un edema pulmonar que no responde, o con una hiperkalemia que ya altera el electrocardiograma. Este paciente se muere en minutos si no se dializa.' },
        { show: ['reg'], note: 'La cifra aislada nunca es la indicación',
          say: 'La conclusión es la regla de la clase: la cifra aislada de creatinina o de nitrógeno ureico no es indicación de diálisis urgente. Lo que la indica es la clínica, la uremia grave o una descompensación vital, y eso se resume en AEIOU.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Síndrome urémico',
      title: 'Cuando las toxinas urémicas dañan otros órganos',
      cards: [
        { title: 'Encefalopatía urémica', tag: 'Cerebro', kind: 'alert', items: [
          { t: 'Letargia, desorientación, asterixis', d: 'Mioclonías; luego convulsiones o coma',
            say: 'El síndrome urémico es el conjunto de síntomas que produce la acumulación de toxinas urémicas en una falla renal avanzada. Las manifestaciones más peligrosas son tres. La primera es la encefalopatía: letargia, desorientación, mioclonías y asterixis, ese aleteo de las manos, que puede terminar en convulsiones o coma.' },
        ] },
        { title: 'Pericarditis urémica', tag: 'Corazón', kind: 'alert', items: [
          { t: 'Dolor pleuropericárdico y roce', d: 'Indicación formal de diálisis urgente',
            say: 'La segunda es la pericarditis urémica: dolor torácico pleuropericárdico y un roce pericárdico al auscultar. Es indicación formal de diálisis de urgencia.' },
          { t: 'Sin heparina en la diálisis', d: 'Riesgo de taponamiento hemorrágico',
            say: 'Y un detalle que se pregunta: en ese paciente no se anticoagula con heparina durante la diálisis, porque un pericardio inflamado puede sangrar y terminar en un taponamiento cardíaco.' },
        ] },
        { title: 'Disfunción plaquetaria', tag: 'Sangrado', kind: 'pharma', items: [
          { t: 'Sangrado mucocutáneo', d: 'Falla la adhesión plaquetaria',
            say: 'La tercera es la disfunción plaquetaria urémica. Las plaquetas están en número normal, pero no se adhieren bien, por una alteración del factor de von Willebrand, y el paciente sangra por piel y mucosas.' },
          { t: 'Desmopresina 0,3 mcg/kg', d: 'Revierte el defecto en forma transitoria',
            say: 'Se revierte en forma transitoria con desmopresina, cero coma tres microgramos por kilo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Indicaciones de diálisis de urgencia',
      title: 'AEIOU: las cinco vocales que dializan',
      cards: [
        { title: 'Metabólicas', tag: 'A y E', kind: 'criteria', items: [
          { t: 'A · Acidosis refractaria', d: 'pH < 7,15 o HCO₃ < 10 pese a bicarbonato',
            say: 'Vamos letra por letra. A, de acidosis: una acidosis metabólica severa que no responde al bicarbonato, habitualmente con pH bajo siete coma quince o bicarbonato bajo diez.' },
          { t: 'E · Hiperkalemia grave', d: 'K > 6,5 con cambios en el ECG o refractaria',
            say: 'E, de electrolitos: una hiperkalemia sobre seis coma cinco, con cambios en el electrocardiograma, como ondas T picudas o QRS ancho, o que no responde al gluconato de calcio, la insulina con glucosa y el salbutamol. Fíjate que primero va el tratamiento médico, y la diálisis es para lo refractario.' },
        ] },
        { title: 'Tóxicos y volumen', tag: 'I y O', kind: 'criteria', items: [
          { t: 'I · Intoxicaciones dializables', d: 'SLIME: salicilatos, litio, isopropanol, metanol, etilenglicol',
            say: 'I, de intoxicaciones, pero solo las dializables. Se recuerdan con otra sigla, SLIME: salicilatos, litio, isopropanol, metanol y etilenglicol.' },
          { t: 'O · Sobrecarga de volumen', d: 'Edema pulmonar refractario a furosemida o anuria',
            say: 'O, de sobrecarga de volumen: un edema pulmonar agudo que no responde a dosis máximas de furosemida endovenosa, o en un paciente anúrico. Es la causa más común de diálisis urgente en el servicio de urgencia.' },
        ] },
        { title: 'Uremia', tag: 'U', kind: 'alert', items: [
          { t: 'U · Uremia sintomática', d: 'Pericarditis, encefalopatía, sangrado activo',
            say: 'Y U, de uremia sintomática: la pericarditis, la encefalopatía o la diátesis hemorrágica activa. Justamente las tres manifestaciones que acabamos de ver.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'La diálisis de urgencia',
      title: 'Acceso vascular y la complicación de la primera sesión',
      cards: [
        { title: 'Acceso vascular', tag: 'Catéter temporal', kind: 'key', items: [
          { t: 'Catéter de doble lumen', d: 'Tipo Mahurkar',
            say: 'Para dializar de urgencia se necesita un acceso vascular temporal: un catéter venoso central de doble lumen, el catéter Mahurkar.' },
          { t: 'Yugular interna derecha', d: 'Evitar la subclavia',
            say: 'El sitio de elección es la vena yugular interna derecha, que tiene menos trombosis y estenosis. La subclavia se evita, para no estenosar el territorio donde en el futuro irá una fístula arteriovenosa. Esa diferencia se pregunta.' },
        ] },
        { title: 'Desequilibrio dialítico', tag: 'Primera sesión', kind: 'alert', items: [
          { t: 'Cefalea, vómitos, agitación, convulsiones', d: 'Edema cerebral osmótico',
            say: 'La complicación neurológica clásica de la primera sesión es el síndrome de desequilibrio dialítico: cefalea, náuseas, vómitos, agitación y hasta convulsiones. La urea baja muy rápido en la sangre, pero lento en el cerebro, y el agua entra al cerebro: es un edema cerebral osmótico.' },
          { t: 'Prevención: sesiones cortas', d: '2 horas y a flujo bajo',
            say: 'Se previene con sesiones iniciales suaves, cortas, de unas dos horas, y a flujos bajos, sobre todo en pacientes con uremia muy elevada.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'AEIOU: el criterio y el error frecuente',
      head: ['Criterio', 'Hallazgo', 'Error frecuente'],
      rows: [
        { cells: ['A · Acidosis', 'pH < 7,15 refractario a bicarbonato', 'Dializar una acidosis leve compensada (pH 7,30)'],
          say: 'Repasemos cada letra con su error típico. Acidosis: se dializa la refractaria, bajo siete coma quince. El error es dializar una acidosis leve y compensada, con pH siete coma treinta.' },
        { cells: ['E · Electrolitos', 'K > 6,5 con cambios ECG o refractario', 'Dializar sin dar antes gluconato de calcio IV'],
          say: 'Hiperkalemia: sobre seis coma cinco con cambios en el electrocardiograma o refractaria. El error es ir directo a la diálisis sin antes dar gluconato de calcio, que protege el corazón en minutos.' },
        { cells: ['I · Intoxicaciones', 'Litio, metanol, etilenglicol, salicilatos', 'Creer que las benzodiacepinas se dializan'],
          say: 'Intoxicaciones: litio, metanol, etilenglicol y salicilatos. El error es pensar que cualquier intoxicación se dializa, por ejemplo, las benzodiacepinas.' },
        { cells: ['O · Sobrecarga', 'Edema pulmonar refractario', 'Esperar horas con bolos de furosemida en un anúrico'],
          say: 'Sobrecarga: edema pulmonar refractario. El error es seguir repitiendo bolos de furosemida durante horas en un riñón que ya no responde.' },
        { cells: ['U · Uremia', 'Pericarditis, encefalopatía, sangrado', 'Usar heparina en la pericarditis urémica'],
          say: 'Y uremia: pericarditis, encefalopatía o sangrado. El error es heparinizar al paciente con pericarditis, con riesgo de hemopericardio.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 62 años con enfermedad renal crónica avanzada sin diálisis. Traído por 48 horas de desorientación y somnolencia progresiva. Estuporoso, con asterixis bilateral. Frote sistodiastólico en el borde esternal izquierdo. Creatinina 9,2 mg/dL, BUN 120 mg/dL, K 5,2 mEq/L, pH venoso 7,28, HCO₃ 16 mEq/L. Sin congestión pulmonar.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Hemodiálisis de urgencia sin heparina sistémica' },
        { letter: 'B', text: 'Hemodiálisis de urgencia con heparina en dosis plenas' },
        { letter: 'C', text: 'Bicarbonato IV y control de gases en 6 horas' },
        { letter: 'D', text: 'Observar: el potasio y el pH no están en rango de diálisis' },
        { letter: 'E', text: 'Furosemida en altas dosis y restricción hídrica' },
      ],
      correct: 'A',
      explanation: 'Encefalopatía urémica (asterixis) y pericarditis urémica (frote): criterio U, indicación absoluta de hemodiálisis urgente aunque el potasio y el pH no estén en rango crítico. La pericarditis obliga a evitar la heparinización plena por riesgo de hemopericardio y taponamiento.',
      say: {
        stem: 'Vamos al caso. Hombre de sesenta y dos años con enfermedad renal crónica avanzada, todavía sin diálisis. Lo traen por dos días de desorientación y somnolencia. Está estuporoso, con asterixis en ambas manos, y se ausculta un frote en el borde esternal izquierdo. La creatinina es nueve coma dos, el potasio cinco coma dos, el pH siete coma veintiocho, y no tiene congestión pulmonar.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las alternativas: hemodiálisis de urgencia sin heparina, hemodiálisis con heparina en dosis plenas, bicarbonato y control en seis horas, observar porque el potasio y el pH no están en rango, o furosemida con restricción hídrica. Piénsalo.',
        answer: 'Es la A. La asterixis es encefalopatía urémica y el frote es pericarditis urémica: criterio U, y eso basta para dializar, aunque el potasio y el pH no sean críticos. Por eso la D es la trampa: mira los números y no la clínica. Y la B falla en un detalle: con pericarditis, la heparina plena arriesga un taponamiento.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 126',
      stem: 'Paciente usuaria de litio en sopor profundo, litemia de 2,6 mEq/L.',
      question: '¿Cuál es el tratamiento más adecuado?',
      options: [
        { letter: 'A', text: 'Lavado gástrico y carbón activado' },
        { letter: 'B', text: 'Solución salina 0,9% endovenosa' },
        { letter: 'C', text: 'Suspender litio y observar' },
        { letter: 'D', text: 'Diuresis forzada con furosemida' },
        { letter: 'E', text: 'Hemodiálisis de urgencia' },
      ],
      correct: 'E',
      explanation: 'Intoxicación por litio con neurotoxicidad grave (sopor profundo): criterio I de AEIOU. El litio es pequeño, poco unido a proteínas y muy dializable. El carbón activado no une el litio.',
      say: {
        stem: 'Ahora preguntas reales. La primera, del EUNACOM de enero de dos mil veintitrés. Paciente usuaria de litio, en sopor profundo, con una litemia de dos coma seis.',
        question: '¿Cuál es el tratamiento más adecuado?',
        options: 'Las opciones: lavado gástrico con carbón activado, suero fisiológico, suspender el litio y observar, diuresis forzada con furosemida, o hemodiálisis de urgencia. Piénsalo.',
        answer: 'Es la E, hemodiálisis de urgencia. Es la I de AEIOU: el litio es una molécula pequeña, que casi no se une a proteínas, y se dializa muy bien. Lo que decide aquí es la neurotoxicidad grave, el sopor profundo. El carbón activado es el distractor clásico, pero no une el litio, así que no sirve.',
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
      explanation: 'Paciente en hemodiálisis que falta a su sesión y come en exceso: hiperkalemia, que da debilidad muscular y bradiarritmias. El primer examen es el ECG; el primer tratamiento, gluconato de calcio IV.',
      say: {
        stem: 'La siguiente, del EUNACOM de diciembre de dos mil veinticinco. Paciente de veintisiete años en hemodiálisis que falta a su sesión del sábado porque se va a una fiesta, con mucha comida y bebida. El lunes amanece con malestar y dificultad para mover las extremidades. Tiene tetraparesia y una frecuencia cardíaca de cuarenta.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: Guillain Barré, hipokalemia, hiperkalemia, hipocalcemia, o hiperfosfatemia. Piénsalo.',
        answer: 'Es la C, hiperkalemia. Un paciente sin riñones que se salta la diálisis y come de más acumula potasio, y el potasio alto paraliza el músculo y enlentece el corazón. El Guillain Barré es el distractor por la tetraparesia, pero no explica la bradicardia ni el contexto. Lo primero es el electrocardiograma, que se hace al tiro.',
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
      explanation: 'Hiperkalemia grave con repercusión cardíaca: lo primero es estabilizar la membrana miocárdica con gluconato de calcio IV. Después se desplaza el potasio (insulina + glucosa, salbutamol) y se elimina; la diálisis se reserva para lo refractario o el paciente anúrico.',
      say: {
        stem: 'Y la última, del EUNACOM de enero de dos mil veintitrés, que conecta con la tabla de trampas. Paciente con bradicardia de treinta y un potasio de ocho coma tres.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: bicarbonato, insulina con glucosa, gluconato de calcio, resinas de intercambio, o hemodiálisis de urgencia. Piénsalo.',
        answer: 'Es la C, gluconato de calcio. La hemodiálisis es la trampa: el potasio de ocho es criterio E, pero el corazón no puede esperar a que se instale un catéter. El calcio estabiliza la membrana en minutos; después se mete el potasio a las células y se elimina, y la diálisis entra si no responde. Esto lo profundizamos en la clase de hiperkalemia.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Indicación', tag: 'Manda la clínica', kind: 'key', items: [
          { t: 'La cifra aislada no dializa', d: 'Dializa la clínica: AEIOU',
            say: 'Cerremos con las reglas de oro. La creatinina o el nitrógeno ureico por sí solos no son indicación de diálisis urgente; lo es la clínica, la regla AEIOU.' },
          { t: 'Hiperkalemia: primero calcio', d: 'Diálisis si es refractaria',
            say: 'En la hiperkalemia, primero gluconato de calcio, y diálisis si es refractaria.' },
          { t: 'Edema pulmonar refractario', d: 'La causa más común de diálisis urgente',
            say: 'El edema pulmonar que no responde a furosemida es la causa más común de diálisis urgente.' },
        ] },
        { title: 'Uremia', tag: 'Criterio U', kind: 'alert', items: [
          { t: 'Pericarditis urémica: sin heparina', d: 'Riesgo de taponamiento',
            say: 'La pericarditis urémica se dializa de urgencia y sin heparina.' },
          { t: 'Sangrado urémico: desmopresina', d: '0,3 mcg/kg',
            say: 'Y el sangrado urémico se revierte transitoriamente con desmopresina.' },
        ] },
        { title: 'Procedimiento', tag: 'Acceso y primera sesión', kind: 'normal', items: [
          { t: 'Yugular interna derecha', d: 'Evitar la subclavia',
            say: 'El catéter va en la yugular interna derecha, y la primera sesión es corta y suave, para evitar el desequilibrio dialítico. Si te llevas una sola idea de hoy: no se dializa un número, se dializa un paciente con acidosis, potasio, tóxicos, agua o uremia que no responden. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Falla renal avanzada: ¿diálisis de urgencia?',
    root: N('start', 'Falla renal avanzada', 'Aguda o crónica',
      'Paciente con falla renal avanzada. La pregunta no es cuánta creatinina tiene, sino si tiene alguna de las cinco vocales.',
      ['', N('q', '¿Hay criterio AEIOU?', 'Acidosis, potasio, tóxico, volumen, uremia',
        '¿Tiene acidosis refractaria, hiperkalemia grave, una intoxicación dializable, sobrecarga de volumen o uremia sintomática?',
        ['NO', N('ok', 'Manejo médico', 'Aunque la creatinina sea alta',
          'Si no hay ninguna, manejo médico, aunque la creatinina sea muy alta. El número solo no dializa.')],
        ['Potasio > 6,5 con ECG', N('do', 'Gluconato de calcio primero', 'Luego insulina + glucosa y salbutamol',
          'Hiperkalemia grave con cambios en el electrocardiograma: primero gluconato de calcio, después insulina con glucosa y salbutamol.',
          ['Refractaria', N('alert', 'Hemodiálisis de urgencia', 'Catéter en yugular interna derecha',
            'Si no responde, hemodiálisis de urgencia, con catéter en la yugular interna derecha.')])],
        ['Pericarditis urémica', N('alert', 'Hemodiálisis sin heparina', 'Riesgo de taponamiento',
          'Pericarditis urémica: hemodiálisis de urgencia, sin heparina, por el riesgo de hemopericardio.')],
        ['Acidosis, tóxico, edema o encefalopatía', N('alert', 'Hemodiálisis de urgencia', 'Primera sesión corta y a flujo bajo',
          'Acidosis refractaria, litio o alcoholes tóxicos, edema pulmonar refractario o encefalopatía urémica: hemodiálisis de urgencia. La primera sesión, corta y a flujo bajo, para evitar el desequilibrio dialítico.')])]),
  },
};
