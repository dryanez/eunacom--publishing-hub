// Clase 3.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_nefrologia.cjs (nefro-10, bloque 3).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'nefro-10',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Onda U, reglas de la vía venosa y el magnesio que nadie mide',
      say: 'Bienvenidos. En la clase anterior vimos el potasio alto; hoy vamos al otro extremo, la hipokalemia. El examen pregunta tres cosas: reconocer la onda U en el electrocardiograma, saber cuánto potasio puedes pasar por una vena periférica, y acordarte del magnesio cuando el potasio no sube. Partamos.',
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: '¿Cómo se presenta la hipokalemia?',
      cards: [
        { title: 'Músculo esquelético', tag: 'K < 3,5 mEq/L', kind: 'criteria', items: [
          { t: 'Debilidad simétrica ascendente', d: 'Parte en las extremidades inferiores',
            say: 'Hablamos de hipokalemia con potasio bajo tres coma cinco miliequivalentes por litro. El potasio es clave para la repolarización y la contracción muscular, así que la clínica es muscular. Lo típico es una debilidad simétrica y ascendente, que parte en las piernas.' },
          { t: 'Calambres, mialgias, hiporreflexia', d: 'Reflejos osteotendíneos disminuidos',
            say: 'Se suman calambres, mialgias y reflejos osteotendíneos disminuidos. Fíjate que la debilidad se parece a la de la hiperkalemia: por eso el contexto y el electrocardiograma son los que separan.' },
        ] },
        { title: 'Músculo liso', tag: 'Intestino', kind: 'normal', items: [
          { t: 'Constipación e íleo paralítico', d: 'El intestino también se paraliza',
            say: 'El músculo liso también se afecta: constipación y, en los casos graves, íleo paralítico.' },
        ] },
        { title: 'Severa', tag: 'K < 2,0 mEq/L', kind: 'alert', items: [
          { t: 'Rabdomiolisis', d: 'Y parálisis del diafragma',
            say: 'Y bajo dos miliequivalentes puede aparecer rabdomiolisis, e hipoventilación por parálisis del diafragma. Ahí la hipokalemia ya compromete la vida.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Electrocardiograma',
      title: 'La onda U y el riesgo de arritmia',
      nodes: [
        { id: 't', col: 0, row: 1, k: 'effect', t: 'T aplanada o invertida', s: 'Primer cambio' },
        { id: 'st', col: 1, row: 1, k: 'effect', t: 'Infradesnivel del ST', s: '' },
        { id: 'u', col: 2, row: 1, k: 'mech', t: 'Onda U prominente', s: 'Tras la T, mejor en V2–V4' },
        { id: 'qu', col: 3, row: 0, k: 'risk', t: 'QT aparente largo', s: 'En realidad, intervalo QU' },
        { id: 'arr', col: 3, row: 2, k: 'alert', t: 'Ectopias, TV polimorfa, FV', s: 'Torsades de pointes' },
        { id: 'dig', col: 4, row: 1, k: 'trap', t: 'Usuario de digoxina', s: 'Mantener K sobre 4,0' },
      ],
      edges: [
        { from: 't', to: 'st' }, { from: 'st', to: 'u' }, { from: 'u', to: 'qu' }, { from: 'u', to: 'arr' },
        { from: 'arr', to: 'dig', label: 'potencia' },
      ],
      steps: [
        { show: ['t', 'st'], note: 'Se altera la repolarización',
          say: 'En el electrocardiograma, el potasio bajo altera la repolarización. Lo primero es una onda T que se aplana o se invierte, y luego un infradesnivel del segmento ST.' },
        { show: ['u'], note: 'El signo que se pregunta',
          say: 'Y aparece el signo que el examen quiere que reconozcas: la onda U, una pequeña deflexión positiva que sigue a la T, más visible entre V dos y V cuatro.' },
        { show: ['qu'], note: 'El QT largo es en realidad un QU',
          say: 'Cuando la T se aplana y la U crece, parece que el QT se alarga. En realidad estás midiendo un intervalo QU.' },
        { show: ['arr'], note: 'De la ectopia a la fibrilación',
          say: 'Y el riesgo es arrítmico: extrasístoles ventriculares, taquicardia ventricular polimorfa como la torsades de pointes, y fibrilación ventricular, sobre todo si hay una cardiopatía de base.' },
        { show: ['dig'], note: 'Potasio y digoxina compiten',
          say: 'Ojo con el usuario de digoxina. El potasio y la digoxina compiten por el mismo sitio en la bomba de sodio y potasio. Si el potasio baja, la digoxina se une más y aparece la intoxicación digitálica con arritmias graves. Por eso en estos pacientes el potasio se mantiene sobre cuatro.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Etiología',
      title: '¿Por dónde se pierde el potasio?',
      nodes: [
        { id: 'ku', col: 0, row: 2, k: 'q', t: 'Potasio urinario en 24 h', s: '¿El riñón ahorra o pierde?' },
        { id: 'ext', col: 1, row: 0, k: 'cause', t: '< 20 mEq/día: extrarrenal', s: 'Diarrea, fístulas, laxantes' },
        { id: 'hta', col: 2, row: 1, k: 'cause', t: '> 20 con HTA', s: 'Conn, estenosis renal, Cushing' },
        { id: 'pan', col: 2, row: 3, k: 'cause', t: '> 20 con PA normal', s: 'Diuréticos, vómitos, Bartter, Gitelman' },
        { id: 'shi', col: 1, row: 4, k: 'mech', t: 'Redistribución', s: 'Alcalosis, beta-2, insulina' },
        { id: 'diu', col: 3, row: 3, k: 'risk', t: 'Tiazidas y diuréticos de asa', s: 'Causa más frecuente ambulatoria' },
      ],
      edges: [
        { from: 'ku', to: 'ext', label: 'ahorra' }, { from: 'ku', to: 'hta', label: 'pierde' },
        { from: 'ku', to: 'pan', label: 'pierde' }, { from: 'ku', to: 'shi', label: 'variable' },
        { from: 'pan', to: 'diu' },
      ],
      steps: [
        { show: ['ku'], note: 'La orina te dice dónde está la pérdida',
          say: 'Ahora, ¿de dónde sale el potasio? La pregunta la responde la orina. Si mides el potasio urinario de veinticuatro horas, sabes si el riñón está ahorrando o perdiendo.' },
        { show: ['ext'], note: 'El riñón ahorra: la pérdida es digestiva',
          say: 'Si es menor de veinte miliequivalentes al día, el riñón está ahorrando bien, y la pérdida es extrarrenal: diarrea profusa, fístulas entéricas o abuso de laxantes. Suele acompañarse de acidosis metabólica, y se trata con cloruro de potasio y cristaloides.' },
        { show: ['hta'], note: 'Fuga renal con hipertensión',
          say: 'Si es mayor de veinte, el riñón está perdiendo potasio. Y ahí la presión arterial separa. Con hipertensión, piensa en exceso de mineralocorticoides: el hiperaldosteronismo primario o síndrome de Conn, la estenosis de la arteria renal o el Cushing. El tratamiento es la espironolactona o la cirugía del adenoma.' },
        { show: ['pan', 'diu'], note: 'Fuga renal con presión normal',
          say: 'Con presión normal: los diuréticos, los vómitos repetidos, y los síndromes de Bartter y Gitelman. Y de todos, los diuréticos tiazídicos y de asa son la causa más frecuente de hipokalemia en el paciente ambulatorio. Se suspende el diurético y se aporta potasio y magnesio.' },
        { show: ['shi'], note: 'El potasio no se perdió: se escondió',
          say: 'Por último, la redistribución: el potasio no se perdió, entró a la célula. Pasa con la alcalosis metabólica, los agonistas beta dos y el exceso de insulina. Es justo el mecanismo que usamos a propósito para tratar la hiperkalemia.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Reposición: primero la boca',
      cards: [
        { title: 'Vía oral', tag: 'De elección', kind: 'key', items: [
          { t: 'Si tolera, siempre oral', d: 'Gluconato de K o KCl retard',
            say: 'Pasemos al tratamiento. Siempre que el paciente tolere la vía digestiva, la vía oral es la de elección, con gluconato de potasio o comprimidos de cloruro de potasio retard. La absorción enteral es más lenta y previene la hiperkalemia de rebote.' },
          { t: 'K > 2,5–3,0 y sin síntomas', d: 'Candidato a vía oral',
            say: 'Es la opción cuando el potasio está sobre dos coma cinco a tres y el paciente no tiene síntomas.' },
        ] },
        { title: 'Vía endovenosa', tag: 'Cuándo', kind: 'alert', items: [
          { t: 'K < 2,5 mEq/L', d: 'O cambios en el ECG, o intolerancia oral',
            say: 'El cloruro de potasio endovenoso queda para la hipokalemia severa, bajo dos coma cinco, cuando hay cambios en el electrocardiograma, o cuando el paciente no tolera la vía oral. Y ahí hay reglas estrictas, que son las que se preguntan.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Reglas de seguridad',
      title: 'Cloruro de potasio endovenoso',
      cards: [
        { title: 'Vía periférica', tag: 'La más preguntada', kind: 'criteria', items: [
          { t: 'Máximo 40 mEq por litro', d: '2 ampollas de KCl 10% = 26,8 mEq',
            say: 'Por vena periférica, la concentración máxima es cuarenta miliequivalentes por litro de solución. Para que te ubiques: dos ampollas de diez mililitros de cloruro de potasio al diez por ciento aportan veintiséis coma ocho miliequivalentes. Más concentrado, produce flebitis química dolorosa y esclerosis de la vena.' },
          { t: 'Máximo 10–20 mEq por hora', d: 'Velocidad de infusión',
            say: 'Y la velocidad máxima es de diez a veinte miliequivalentes por hora. Cuarenta por litro y diez a veinte por hora: esas dos cifras son la pregunta.' },
        ] },
        { title: 'Vía central', tag: 'Casos graves', kind: 'alert', items: [
          { t: 'Hasta 60–80 mEq por litro', d: '20–40 mEq/h en paro o arritmia grave',
            say: 'Si necesitas más, concentraciones de sesenta a ochenta por litro, o velocidades de veinte a cuarenta por hora en un paro o una arritmia ventricular grave, la vía central es obligatoria.' },
          { t: 'Bomba de infusión + monitor', d: 'Siempre',
            say: 'Y siempre con bomba de infusión continua y monitorización electrocardiográfica. Nunca en bolo.' },
        ] },
        { title: 'Vehículo', tag: 'Trampa', kind: 'pharma', items: [
          { t: 'Diluir en suero fisiológico', d: 'Nunca en suero glucosado',
            say: 'Por último, el vehículo: el potasio se diluye en suero fisiológico, nunca en suero glucosado. ¿Por qué? Porque la glucosa estimula la insulina, la insulina mete potasio a la célula, y empeoras la hipokalemia justo mientras intentas corregirla.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Magnesio',
      title: 'Si el potasio no sube, mide el magnesio',
      nodes: [
        { id: 'mg', col: 0, row: 1, k: 'cause', t: 'Hipomagnesemia', s: 'Causa más común de refractariedad' },
        { id: 'romk', col: 1, row: 1, k: 'mech', t: 'Se pierde el freno de ROMK', s: 'Túbulo colector' },
        { id: 'fug', col: 2, row: 1, k: 'effect', t: 'Fuga renal continua de K', s: 'El KCl se va por la orina' },
        { id: 'ref', col: 3, row: 0, k: 'risk', t: 'Hipokalemia refractaria', s: 'No sube pese a buen aporte' },
        { id: 'tx', col: 3, row: 2, k: 'good', t: 'Sulfato de magnesio IV', s: 'Medir y reponer' },
      ],
      edges: [
        { from: 'mg', to: 'romk' }, { from: 'romk', to: 'fug' }, { from: 'fug', to: 'ref' }, { from: 'ref', to: 'tx', label: 'conducta' },
      ],
      steps: [
        { show: ['mg'], note: 'El factor que se olvida',
          say: 'Y la regla que más se olvida. La hipomagnesemia es la causa más común de que una hipokalemia no responda al tratamiento.' },
        { show: ['romk'], note: 'El magnesio frena la salida de potasio',
          say: 'El mecanismo es elegante. El magnesio dentro de la célula actúa como un freno sobre el canal ROMK, el canal que secreta potasio en el túbulo colector. Si el magnesio cae, se pierde ese freno y el canal queda abierto.' },
        { show: ['fug', 'ref'], note: 'Un balde con un agujero',
          say: 'Con el canal abierto, hay una fuga renal continua de potasio. Es como llenar un balde con un agujero: todo el cloruro de potasio que pasas se va por la orina, y la kalemia no sube.' },
        { show: ['tx'], note: 'Medir y reponer magnesio',
          say: 'Por eso, frente a toda hipokalemia refractaria a un aporte adecuado de cloruro de potasio, la conducta es medir y reponer magnesio con sulfato de magnesio endovenoso. Si no tapas el agujero, el potasio no se va a quedar.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un árbol de decisión para la hipokalemia.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['K bajo, tolera vía oral, sin síntomas', 'Sales de potasio orales', 'KCl endovenoso de rutina'],
          say: 'Repasemos las trampas. Si el paciente tolera la vía oral y no tiene síntomas, sales de potasio por boca. El error es ir directo a la vía venosa.' },
        { cells: ['KCl por vena periférica', 'Máx. 40 mEq/L y 10–20 mEq/h', 'Concentrar o acelerar para corregir rápido'],
          say: 'Por vena periférica, máximo cuarenta por litro y diez a veinte por hora. El error es concentrar o acelerar para corregir más rápido.' },
        { cells: ['Dilución del KCl', 'Suero fisiológico', 'Suero glucosado'],
          say: 'Se diluye en suero fisiológico. El glucosado empeora la hipokalemia.' },
        { cells: ['K no sube tras 24 h de aporte', 'Medir y reponer magnesio', 'Seguir subiendo el KCl'],
          say: 'Si el potasio no sube, repones magnesio. Seguir subiendo el cloruro de potasio es llenar el balde con el agujero abierto.' },
        { cells: ['Hipokalemia + HTA, sin diuréticos', 'Pensar en hiperaldosteronismo primario', 'Llamarla hipertensión esencial'],
          say: 'Y una hipokalemia con hipertensión, sin diuréticos que la expliquen, es un hiperaldosteronismo primario hasta demostrar lo contrario.' },
        { cells: ['Usuario de digoxina con K bajo', 'Corregir y mantener K > 4,0', 'Ignorar el riesgo de toxicidad'],
          say: 'En el usuario de digoxina, la hipokalemia precipita la intoxicación digitálica: el potasio se mantiene sobre cuatro.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 56 años, hipertensa, que cambió hidroclorotiazida por clortalidona a dosis plenas. Consulta por astenia, calambres y palpitaciones. ECG: T aplanadas, ondas U en V2–V4 y extrasístoles ventriculares aisladas. K 2,8 mEq/L, Mg 1,4 mg/dL (VN 1,8–2,4). Se inicia KCl periférico a 10 mEq/h. A las 24 horas, con 80 mEq acumulados, el K es 2,9 mEq/L.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Aumentar el KCl periférico a 40 mEq/h' },
        { letter: 'B', text: 'Administrar sulfato de magnesio endovenoso' },
        { letter: 'C', text: 'Cambiar el vehículo a suero glucosado al 5%' },
        { letter: 'D', text: 'Agregar furosemida' },
        { letter: 'E', text: 'Suspender el aporte y controlar en 48 horas' },
      ],
      correct: 'B',
      explanation: 'Hipokalemia por tiazida, refractaria a un aporte adecuado, con magnesio bajo: la hipomagnesemia libera el canal ROMK y el potasio se pierde por la orina. Se repone sulfato de magnesio IV. Subir a 40 mEq/h supera el límite periférico, y el suero glucosado empeora la hipokalemia.',
      say: {
        stem: 'Vamos al caso. Mujer de cincuenta y seis años, hipertensa, que cambió la hidroclorotiazida por clortalidona en dosis plenas. Consulta por astenia, calambres y palpitaciones. Su electrocardiograma muestra ondas T aplanadas, ondas U y extrasístoles aisladas. Potasio de dos coma ocho y magnesio de uno coma cuatro, bajo lo normal. Se pasa cloruro de potasio periférico a diez por hora, y a las veinticuatro horas el potasio sigue en dos coma nueve.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: aumentar el cloruro de potasio a cuarenta por hora, sulfato de magnesio endovenoso, cambiar el vehículo a suero glucosado, agregar furosemida, o suspender y controlar. Piénsalo.',
        answer: 'Es la B. Tiene una hipokalemia por tiazida que no sube con un aporte correcto, y el magnesio está bajo: es el balde con el agujero. Se repone magnesio. El distractor tentador es la A, subir la velocidad, pero cuarenta por hora por una vena periférica supera el límite de seguridad y no arregla la fuga. El glucosado la empeora y la furosemida pierde aún más potasio.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 60',
      stem: 'Un paciente de 78 años, diabético, hipertenso y dislipidémico está en tratamiento con metformina, glibenclamida, enalapril, hidroclorotiazida, aspirina y atorvastatina. Se realiza exámenes de laboratorio, entre los que destacan sodio plasmático: 130 mEq/L, potasio plasmático: 3,4 mEq/L, creatinina plasmática: 1,1 mg/dl.',
      question: '¿Cuál es la causa más probable de sus alteraciones?',
      options: [
        { letter: 'A', text: 'Nefroesclerosis hipertensiva' },
        { letter: 'B', text: 'Uso de hidroclorotiazida' },
        { letter: 'C', text: 'Nefropatía diabética' },
        { letter: 'D', text: 'Uso de enalapril' },
        { letter: 'E', text: 'Uso de aspirina' },
      ],
      correct: 'B',
      explanation: 'Hipokalemia leve con hiponatremia en un usuario de tiazida: los diuréticos tiazídicos son la causa más frecuente de hipokalemia ambulatoria. El enalapril tiende a subir el potasio, no a bajarlo.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de agosto de dos mil veintiuno. Paciente de setenta y ocho años, diabético, hipertenso y dislipidémico, que toma metformina, glibenclamida, enalapril, hidroclorotiazida, aspirina y atorvastatina. En sus exámenes tiene sodio de ciento treinta, potasio de tres coma cuatro y creatinina de uno coma uno.',
        question: '¿Cuál es la causa más probable de sus alteraciones?',
        options: 'Las opciones: nefroesclerosis hipertensiva, hidroclorotiazida, nefropatía diabética, enalapril, o aspirina. Piénsalo.',
        answer: 'Es la B, la hidroclorotiazida. Es la causa más frecuente de hipokalemia en el paciente ambulatorio, y además explica la hiponatremia. El distractor es el enalapril, pero piensa en el mecanismo: el enalapril baja la aldosterona, así que retiene potasio, no lo pierde. Y la creatinina normal descarta que el riñón sea el problema.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2022 · Pregunta 121',
      stem: 'Un paciente de 37 años es diagnosticado de hipertensión hace un año, en tratamiento con enalapril, atenolol e hidroclorotiazida, a pesar de lo cual ha presentado valores tensionales sobre el objetivo, con varias tomas sobre 160/110 mmHg. Además, aqueja astenia, debilidad de las extremidades inferiores y cefalea frecuente. Se solicitan exámenes generales, que muestran TSH: 6,0 UI/L, creatinina: 1,2 mg/dl, sodio: 142 mEq/L, potasio: 3,1 mEq/L, hemograma normal y glicemia de ayuno: 72 mg/dl. Se solicita TAC de abdomen, que muestra un tumor suprarrenal derecho, de 2 cm de diámetro, sólido y homogéneo.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Feocromocitoma' },
        { letter: 'B', text: 'Hipertensión esencial' },
        { letter: 'C', text: 'Hipertensión renovascular' },
        { letter: 'D', text: 'Hipertensión asociada a insuficiencia renal' },
        { letter: 'E', text: 'Hiperaldosteronismo primario' },
      ],
      correct: 'E',
      explanation: 'Adulto joven con HTA resistente a 3 fármacos, hipokalemia con debilidad y un adenoma suprarrenal sólido: hiperaldosteronismo primario (Conn). Es la fuga renal de potasio con hipertensión.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil veintidós. Hombre de treinta y siete años con hipertensión que no se controla pese a enalapril, atenolol e hidroclorotiazida, con tomas sobre ciento sesenta ciento diez. Tiene astenia, debilidad de las piernas y cefalea. Potasio de tres coma uno, creatinina de uno coma dos, y un scanner que muestra un tumor suprarrenal derecho de dos centímetros, sólido y homogéneo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: feocromocitoma, hipertensión esencial, hipertensión renovascular, hipertensión por insuficiencia renal, o hiperaldosteronismo primario. Piénsalo.',
        answer: 'Es la E, hiperaldosteronismo primario. Es la fila de la fuga renal con hipertensión: un paciente joven, con hipertensión resistente, hipokalemia sintomática y un adenoma suprarrenal. El distractor es el feocromocitoma, que también es un tumor suprarrenal, pero da crisis paroxísticas, no hipokalemia. Y no te confundas con la tiazida: puede sumar, pero no explica el tumor ni la resistencia.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'ECG y orina', kind: 'key', items: [
          { t: 'T aplanada, ST infradesnivelado, onda U', d: 'El ECG de la hipokalemia',
            say: 'Cerremos con las reglas de oro. El electrocardiograma de la hipokalemia es la T aplanada, el ST infradesnivelado y la onda U.' },
          { t: 'Tiazidas: causa ambulatoria más frecuente', d: 'Con HTA sin diurético, pensar en Conn',
            say: 'La causa ambulatoria más frecuente son los diuréticos; y con hipertensión sin diuréticos, piensa en Conn.' },
        ] },
        { title: 'Reposición', tag: 'Seguridad', kind: 'pharma', items: [
          { t: 'Oral si tolera', d: 'Periférica: 40 mEq/L y 10–20 mEq/h',
            say: 'Si tolera, por boca. Por vena periférica, cuarenta por litro y diez a veinte por hora, diluido en suero fisiológico.' },
        ] },
        { title: 'Refractaria', tag: 'Magnesio', kind: 'alert', items: [
          { t: 'Si no sube: magnesio', d: 'Sulfato de magnesio IV',
            say: 'Y si el potasio no sube, mide y repone magnesio. En la próxima clase entramos al equilibrio ácido base con la acidosis metabólica, donde el potasio va a volver a aparecer. Si te llevas una sola idea de hoy: la hipokalemia que no responde es una hipomagnesemia hasta demostrar lo contrario. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Hipokalemia: cómo reponer y cuándo pensar en magnesio',
    root: N('start', 'K < 3,5 mEq/L', 'Clínica + ECG',
      'Paciente con potasio bajo tres coma cinco. Primero evalúa los síntomas y toma un electrocardiograma.',
      ['', N('q', '¿K < 2,5, ECG alterado o no tolera oral?', 'Define la vía',
        'La pregunta que define la vía: ¿el potasio está bajo dos coma cinco, hay cambios en el electrocardiograma, o el paciente no tolera la vía oral?',
        ['NO', N('ok', 'Potasio oral', 'Gluconato de K o KCl retard',
          'Si no, la vía oral es la de elección, con sales de potasio.')],
        ['SÍ', N('q', '¿Paro o arritmia ventricular grave?', 'Define periférica o central',
          'Si hay que ir por vena, ¿hay un paro o una arritmia ventricular grave que obligue a pasar más rápido?',
          ['NO', N('do', 'KCl periférico en SF', 'Máx. 40 mEq/L y 10–20 mEq/h',
            'Si no, cloruro de potasio periférico en suero fisiológico, máximo cuarenta por litro y diez a veinte por hora.')],
          ['SÍ', N('alert', 'KCl por vía central', '20–40 mEq/h, bomba + monitor ECG',
            'Si hay arritmia grave, vía central, con bomba de infusión y monitor continuo.')])],
        ['No sube pese a aporte', N('refer', 'Medir y reponer magnesio', 'Sulfato de magnesio IV',
          'Y si en cualquier camino el potasio no sube pese a un aporte adecuado, mide y repone magnesio.')])]),
  },
};
