// Clase 3.3 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_nefrologia.cjs (nefro-11, bloque 3).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'nefro-11',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Leer los gases en pasos, separar por anion gap y usar poco bicarbonato',
      say: 'Bienvenidos. Hoy entramos al equilibrio ácido base con la acidosis metabólica. Es uno de los ejercicios más estructurados del EUNACOM, y eso es una ventaja: si sigues siempre los mismos pasos, llegas a la respuesta. Vamos a aprender tres cálculos, la fórmula de Winter, el anion gap y la brecha osmolar, y una regla de tratamiento: el bicarbonato se usa mucho menos de lo que uno cree.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: '¿Qué es una acidosis metabólica?',
      nodes: [
        { id: 'hco', col: 0, row: 1, k: 'cause', t: 'Cae el bicarbonato', s: 'Trastorno primario' },
        { id: 'ph', col: 1, row: 1, k: 'effect', t: 'Baja el pH', s: 'Acidemia: pH < 7,35' },
        { id: 'kus', col: 2, row: 1, k: 'mech', t: 'Hiperventilación', s: 'Respiración de Kussmaul' },
        { id: 'co2', col: 3, row: 1, k: 'good', t: 'Baja la pCO2', s: 'Compensa, no normaliza' },
        { id: 'dos', col: 2, row: 3, k: 'q', t: '¿Por qué cayó?', s: 'Ácido agregado o bicarbonato perdido' },
      ],
      edges: [
        { from: 'hco', to: 'ph' }, { from: 'ph', to: 'kus' }, { from: 'kus', to: 'co2' }, { from: 'hco', to: 'dos' },
      ],
      steps: [
        { show: ['hco'], note: 'El problema empieza en el bicarbonato',
          say: 'Partamos por la definición. La acidosis metabólica es una caída primaria del bicarbonato plasmático, el principal amortiguador de la sangre.' },
        { show: ['ph'], note: 'Menos amortiguador, más acidez',
          say: 'Con menos bicarbonato, el pH baja. Hablamos de acidemia cuando el pH está bajo siete coma treinta y cinco.' },
        { show: ['kus', 'co2'], note: 'El pulmón responde de inmediato',
          say: 'Y el pulmón responde de inmediato: el paciente hiperventila, con esa respiración profunda y rápida que se llama de Kussmaul, para botar CO dos y así levantar el pH. Esa es la compensación respiratoria.' },
        { show: ['dos'], note: 'Dos caminos, un divisor',
          say: 'Ahora, el bicarbonato puede caer por dos razones: porque se agregó un ácido que lo consume, o porque se perdió bicarbonato. Distinguir esas dos es el trabajo del anion gap, que es el divisor de toda la clase.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico sistemático',
      title: 'Leer los gases en pasos',
      nodes: [
        { id: 'p1', col: 0, row: 1, k: 'start', t: '1. pH', s: '< 7,35 acidemia · > 7,45 alcalemia' },
        { id: 'p2', col: 1, row: 1, k: 'q', t: '2. HCO3 < 22 mEq/L', s: 'Componente metabólico primario' },
        { id: 'p3', col: 2, row: 1, k: 'mech', t: '3. Winter', s: 'pCO2 esperada = 1,5 × HCO3 + 8 ± 2' },
        { id: 'ac', col: 3, row: 0, k: 'risk', t: 'pCO2 mayor a la esperada', s: 'Acidosis respiratoria agregada' },
        { id: 'al', col: 3, row: 2, k: 'risk', t: 'pCO2 menor a la esperada', s: 'Alcalosis respiratoria agregada' },
        { id: 'ok', col: 3, row: 1, k: 'good', t: 'Dentro del rango', s: 'Compensación adecuada' },
      ],
      edges: [
        { from: 'p1', to: 'p2' }, { from: 'p2', to: 'p3' },
        { from: 'p3', to: 'ac', label: 'sobre' }, { from: 'p3', to: 'ok', label: 'dentro' }, { from: 'p3', to: 'al', label: 'bajo' },
      ],
      steps: [
        { show: ['p1'], note: 'Primero, ¿hacia dónde va el pH?',
          say: 'Veamos cómo leer los gases. Primer paso, el pH: bajo siete coma treinta y cinco es acidemia, sobre siete coma cuarenta y cinco es alcalemia.' },
        { show: ['p2'], note: 'Segundo, ¿quién lo explica?',
          say: 'Segundo paso: ¿quién explica ese pH? Si el bicarbonato está bajo veintidós, el componente primario es metabólico.' },
        { show: ['p3'], note: 'Tercero, ¿el pulmón compensa bien?',
          say: 'Tercer paso, y el que más se pregunta: ¿el pulmón está compensando lo que corresponde? Para eso usas la fórmula de Winter. La presión de CO dos esperada es uno coma cinco por el bicarbonato, más ocho, con un margen de más o menos dos.' },
        { show: ['ok'], note: 'Compensación pura',
          say: 'Si la presión de CO dos medida cae dentro de ese rango, la compensación es adecuada y hay un solo trastorno.' },
        { show: ['ac', 'al'], note: 'Fuera de rango: hay un segundo trastorno',
          say: 'Si la presión de CO dos medida es mayor que la esperada, el pulmón no está botando lo suficiente: hay una acidosis respiratoria agregada, por ejemplo por fatiga muscular. Si es menor, hay una alcalosis respiratoria agregada. Así se detecta un trastorno mixto.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Winter en la práctica',
      title: 'Un ejemplo con números',
      cards: [
        { title: 'Shock séptico', tag: 'HCO3 10 mEq/L', kind: 'criteria', items: [
          { t: '1,5 × 10 = 15', d: '15 + 8 = 23 mmHg',
            say: 'Hagamos un ejemplo, porque así sale en el examen. Paciente en shock séptico con bicarbonato de diez. Uno coma cinco por diez da quince; más ocho, veintitrés.' },
          { t: 'Rango esperado: 21 a 25 mmHg', d: 'Más o menos 2',
            say: 'Con el margen de dos, la presión de CO dos esperada va de veintiuno a veinticinco milímetros de mercurio.' },
        ] },
        { title: 'Interpretación', tag: 'Compara con lo medido', kind: 'key', items: [
          { t: 'Sobre 25: acidosis respiratoria', d: 'El pulmón se está cansando',
            say: 'Si la presión de CO dos medida estuviera sobre veinticinco, hay una acidosis respiratoria agregada: el paciente se está cansando, y eso es una alarma para apoyar la ventilación.' },
          { t: 'Bajo 21: alcalosis respiratoria', d: 'Algo más estimula la respiración',
            say: 'Si estuviera bajo veintiuno, hay una alcalosis respiratoria agregada: algo, además de la acidosis, está estimulando la respiración.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Anion gap',
      title: 'El divisor etiológico',
      cards: [
        { title: 'Cálculo', tag: 'Normal 8–12 mEq/L', kind: 'key', items: [
          { t: 'AG = Na − (Cl + HCO3)', d: 'Aniones no medidos',
            say: 'El cuarto paso es el anion gap. Es el sodio menos la suma del cloro y el bicarbonato. Representa los aniones que no medimos, y lo normal es de ocho a doce miliequivalentes por litro.' },
          { t: 'Lo forma sobre todo la albúmina', d: 'Sus cargas negativas',
            say: '¿Y quiénes son esos aniones no medidos? Principalmente las cargas negativas de la albúmina. Esto es clave para lo que sigue.' },
        ] },
        { title: 'Corrección por albúmina', tag: 'Trampa', kind: 'alert', items: [
          { t: '+2,5 por cada 1 g/dL bajo 4,0', d: 'Crítico, nefrótico, cirrótico',
            say: 'Si la albúmina está baja, como en el paciente crítico, nefrótico o cirrótico, el anion gap se subestima. Por cada gramo por decilitro que la albúmina baje de cuatro, sumas dos coma cinco al anion gap calculado.' },
          { t: 'Sin corregir, se esconde un AG alto', d: 'Parece normal y no lo es',
            say: 'Si no corriges, una acidosis con anion gap elevado puede hacerse pasar por normal. Y te equivocas de causa.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Anion gap elevado',
      title: 'Se agregó un ácido: MUDPILES',
      nodes: [
        { id: 'ag', col: 0, row: 2, k: 'start', t: 'AG > 12, normoclorémica', s: 'Aniones que desplazan al HCO3' },
        { id: 'k', col: 1, row: 0, k: 'cause', t: 'Cetoacidosis', s: 'Diabética, alcohólica, ayuno' },
        { id: 'u', col: 2, row: 0, k: 'cause', t: 'Uremia', s: 'Sulfatos y fosfatos' },
        { id: 'l', col: 1, row: 4, k: 'cause', t: 'Acidosis láctica', s: 'Shock, metformina · lactato > 2' },
        { id: 's', col: 2, row: 4, k: 'cause', t: 'Salicilatos', s: 'Más alcalosis respiratoria' },
        { id: 'tox', col: 3, row: 2, k: 'alert', t: 'Metanol · etilenglicol', s: 'Ceguera · falla renal con oxalato' },
      ],
      edges: [
        { from: 'ag', to: 'k' }, { from: 'ag', to: 'u' }, { from: 'ag', to: 'l' }, { from: 'ag', to: 's' }, { from: 'ag', to: 'tox' },
      ],
      steps: [
        { show: ['ag'], note: 'Un ácido nuevo en la sangre',
          say: 'Si el anion gap está sobre doce, se agregó un ácido. Su anión ocupa el lugar del bicarbonato sin que suba el cloro, por eso se llama normoclorémica. La mnemotecnia clásica es MUDPILES, o KUSSMAUL.' },
        { show: ['k'], note: 'La más frecuente en el examen',
          say: 'La primera, cetoacidosis: la diabética, con acetoacetato y beta hidroxibutirato, pero también la alcohólica y la del ayuno prolongado.' },
        { show: ['u'], note: 'El riñón que ya no excreta',
          say: 'Uremia: la insuficiencia renal aguda severa o la crónica avanzada, que retiene sulfatos y fosfatos.' },
        { show: ['l'], note: 'Hipoperfusión',
          say: 'Acidosis láctica: el shock séptico, cardiogénico o hipovolémico, con lactato sobre dos milimoles por litro, y también la intoxicación por metformina.' },
        { show: ['s'], note: 'Un patrón mixto típico',
          say: 'Salicilatos: la intoxicación por aspirina da típicamente acidosis metabólica con una alcalosis respiratoria precoz. Es un trastorno mixto de libro.' },
        { show: ['tox'], note: 'Los alcoholes tóxicos',
          say: 'Y los alcoholes tóxicos: el metanol, que produce ácido fórmico y daña el ojo hasta la ceguera; y el etilenglicol, que produce ácido oxálico, falla renal y cristales de oxalato de calcio en la orina.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Anion gap normal',
      title: 'Se perdió bicarbonato: hiperclorémica',
      cards: [
        { title: 'Pérdida digestiva', tag: 'La más frecuente', kind: 'criteria', items: [
          { t: 'Diarrea profusa', d: 'También fístulas enterocutáneas, pancreáticas, biliares',
            say: 'Si el anion gap es normal, entre ocho y doce, no se agregó un ácido: se perdió bicarbonato, y el riñón reabsorbe cloro para mantener la electroneutralidad. Por eso es hiperclorémica. La causa más frecuente es la diarrea profusa, y también las fístulas.' },
          { t: 'Anion gap urinario negativo', d: 'El riñón excreta amonio normal',
            say: 'Para separarla de una causa renal sirve el anion gap urinario: en la diarrea es negativo, porque el riñón sano sigue excretando amonio.' },
        ] },
        { title: 'Pérdida renal: ATR', tag: 'Anion gap urinario positivo', kind: 'alert', items: [
          { t: 'Tipo 1 distal', d: 'Orina pH > 5,5, hipokalemia, nefrocalcinosis',
            say: 'En las acidosis tubulares renales, el anion gap urinario es positivo. La tipo uno, distal, no logra secretar protones: la orina queda con pH sobre cinco coma cinco, con hipokalemia y nefrocalcinosis.' },
          { t: 'Tipo 2 proximal · tipo 4', d: 'Fanconi · hipoaldosteronismo con hiperkalemia',
            say: 'La tipo dos, proximal, no reabsorbe bicarbonato, con hipokalemia y a veces síndrome de Fanconi. Y la tipo cuatro es un hipoaldosteronismo, la única con hiperkalemia. Esa diferencia de potasio se pregunta.' },
        ] },
        { title: 'Yatrogenia', tag: 'Ojo', kind: 'normal', items: [
          { t: 'Suero fisiológico masivo', d: '154 mEq/L de cloro',
            say: 'Y la causa que uno mismo provoca: grandes volúmenes de suero fisiológico, que tiene ciento cincuenta y cuatro de cloro y desplaza al bicarbonato.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Brecha osmolar',
      title: 'Cuando sospechas un alcohol tóxico',
      nodes: [
        { id: 'ag', col: 0, row: 1, k: 'start', t: 'AG elevado sin explicación', s: 'Sin cetosis, lactato ni uremia' },
        { id: 'cal', col: 1, row: 1, k: 'mech', t: 'Osm calculada', s: '2 × Na + glicemia/18 + BUN/2,8' },
        { id: 'bre', col: 2, row: 1, k: 'q', t: 'Brecha = medida − calculada', s: '¿Mayor de 10 mOsm/kg?' },
        { id: 'tox', col: 3, row: 0, k: 'alert', t: 'Metanol o etilenglicol', s: 'Alcohol tóxico circulando' },
        { id: 'tx', col: 3, row: 2, k: 'good', t: 'Fomepizol o etanol', s: '+ hemodiálisis de urgencia' },
      ],
      edges: [
        { from: 'ag', to: 'cal' }, { from: 'cal', to: 'bre' }, { from: 'bre', to: 'tox', label: '> 10' }, { from: 'tox', to: 'tx' },
      ],
      steps: [
        { show: ['ag'], note: 'Anion gap alto que no calza',
          say: 'Ahora, ¿qué haces con un anion gap elevado que no se explica, sin cetosis, sin lactato alto y sin uremia? Calculas la brecha osmolar.' },
        { show: ['cal'], note: 'Lo que debería medir',
          say: 'Primero la osmolaridad calculada: dos por el sodio, más la glicemia dividida por dieciocho, más el nitrógeno ureico dividido por dos coma ocho.' },
        { show: ['bre'], note: 'La diferencia es lo que no conoces',
          say: 'Luego restas: osmolaridad medida por el laboratorio menos la calculada. Esa diferencia es una sustancia con osmoles que no estás midiendo.' },
        { show: ['tox'], note: 'Sobre diez: alcohol tóxico',
          say: 'Si la brecha es mayor de diez, denuncia un alcohol tóxico: metanol o etilenglicol. Y la clínica ayuda: el metanol da visión borrosa, descrita como una tormenta de nieve, por la toxicidad del ácido fórmico sobre el nervio óptico.' },
        { show: ['tx'], note: 'Antídoto y diálisis',
          say: 'El tratamiento tiene dos piezas: el antídoto, fomepizol o etanol, que bloquea la formación de los metabolitos tóxicos, y la hemodiálisis de urgencia para sacar el tóxico antes de que dañe los órganos.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Bicarbonato',
      title: '¿Por qué el bicarbonato puede dañar?',
      cards: [
        { title: 'Riesgos', tag: 'Tres peligros', kind: 'alert', items: [
          { t: 'Acidosis intracelular paradójica', d: 'El CO2 cruza al cerebro, el HCO3 no',
            say: 'Vamos al tratamiento, y partamos por lo que el bicarbonato puede hacer mal. Primero, la acidosis intracelular paradójica. Al amortiguar protones, el bicarbonato genera CO dos, un gas que cruza libremente la barrera hematoencefálica, mientras el bicarbonato no la cruza. Resultado: la sangre mejora y el líquido cefalorraquídeo se acidifica.' },
          { t: 'Hipocalcemia iónica aguda', d: 'Tetania y colapso cardiovascular',
            say: 'Segundo, la hipocalcemia iónica aguda. Al subir el pH, la albúmina captura más calcio libre, y puede aparecer tetania y colapso cardiovascular.' },
          { t: 'Sobrecarga de sodio', d: 'Hipervolemia',
            say: 'Y tercero, una sobrecarga masiva de sodio con hipervolemia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Bicarbonato',
      title: '¿Cuándo sí usar bicarbonato?',
      cards: [
        { title: 'Indicado', tag: 'Solo en estos casos', kind: 'pharma', items: [
          { t: 'pH < 7,10 o HCO3 < 6–8', d: 'Con inestabilidad hemodinámica',
            say: 'Por eso el bicarbonato endovenoso se reserva para la acidosis crítica: pH bajo siete coma diez, o bicarbonato bajo seis a ocho, con inestabilidad hemodinámica.' },
          { t: 'Meta: pH 7,20, no normalizar', d: 'Bicarbonato 2/3 molar, infusión lenta',
            say: 'Y aun así, con bicarbonato dos tercios molar en infusión lenta, y con una meta modesta: llevar el pH a siete coma veinte, no normalizarlo.' },
          { t: 'Pérdidas puras de HCO3: ATR', d: 'Bicarbonato o citrato de K oral',
            say: 'La otra indicación son las pérdidas puras de bicarbonato. En la acidosis tubular renal crónica se da bicarbonato o citrato de potasio por boca, para prevenir la osteomalacia, el raquitismo y la nefrocalcinosis.' },
        ] },
        { title: 'No indicado', tag: 'Tratar la causa', kind: 'key', items: [
          { t: 'Cetoacidosis y láctica moderada', d: 'pH > 7,15: fluidos e insulina',
            say: 'En la cetoacidosis diabética y la acidosis láctica moderada, con pH sobre siete coma quince, el tratamiento es la causa: fluidos e insulina. Al corregir la causa, el cuerpo metaboliza los cetoácidos y el lactato, y los convierte de vuelta en bicarbonato propio.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol de decisión, como vas a leer cualquier gas con acidosis metabólica.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conclusión correcta', 'Error frecuente'],
      rows: [
        { cells: ['pCO2 fuera del rango de Winter', 'Trastorno respiratorio agregado', 'Asumir compensación'],
          say: 'Repasemos las trampas. Si la presión de CO dos no cae en el rango de Winter, hay un segundo trastorno. El error es asumir que todo es compensación.' },
        { cells: ['AG normal con albúmina baja', 'Corregir: +2,5 por g/dL', 'Descartar un AG elevado'],
          say: 'Con albúmina baja, corrige el anion gap antes de descartar que esté elevado.' },
        { cells: ['ERC etapa 3–4, AG normal', 'Menor amoniogénesis renal', 'Acumulación de ácidos orgánicos'],
          say: 'En la enfermedad renal crónica intermedia, la acidosis es con anion gap normal, por menor producción de amonio. El anion gap sube recién en la etapa terminal.' },
        { cells: ['AG alto + brecha osmolar > 10', 'Metanol o etilenglicol', 'Pensar en cetoacidosis'],
          say: 'Anion gap alto con brecha osmolar sobre diez es un alcohol tóxico, y va antídoto más diálisis.' },
        { cells: ['Cetoacidosis con pH 7,12', 'Fluidos + insulina', 'Bicarbonato de rutina'],
          say: 'En la cetoacidosis, aun con pH de siete coma doce, no va bicarbonato de rutina: fluidos e insulina.' },
        { cells: ['pH < 7,10 con inestabilidad', 'Bicarbonato, meta pH 7,20', 'Normalizar el pH'],
          say: 'Y cuando el bicarbonato sí está indicado, el error es querer normalizar el pH: la meta es siete coma veinte.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 24 años con diabetes tipo 1 que suspendió la insulina hace 48 horas. Llega estuporoso, con respiración de Kussmaul (FR 34), aliento cetónico, PA 95/60 mmHg, FC 122 lpm y mucosas secas. Gases: pH 7,12, pCO2 16 mmHg, HCO3 5 mEq/L. Glicemia 480 mg/dL, Na 134, Cl 98, K 5,2 mEq/L, cetonemia 5,8 mmol/L.',
      question: '¿Cuál es la conducta más adecuada respecto del trastorno ácido-base?',
      options: [
        { letter: 'A', text: 'Bicarbonato de sodio 2/3 molar hasta normalizar el pH' },
        { letter: 'B', text: 'Cristaloides isotónicos e insulina rápida en infusión a 0,1 U/kg/h' },
        { letter: 'C', text: 'Intubar e hiperventilar para bajar la pCO2' },
        { letter: 'D', text: 'Hemodiálisis de urgencia' },
        { letter: 'E', text: 'Fomepizol y hemodiálisis' },
      ],
      correct: 'B',
      explanation: 'CAD severa: AG = 134 − (98 + 5) = 31. Winter: 1,5 × 5 + 8 = 15,5 ± 2 (13,5–17,5); la pCO2 de 16 es compensación pura. El tratamiento es cristaloides isotónicos e insulina 0,1 U/kg/h; la insulina frena la lipólisis y los cetoácidos se metabolizan a bicarbonato. Con pH 7,12 no se indica bicarbonato de rutina.',
      say: {
        stem: 'Vamos al caso. Hombre de veinticuatro años con diabetes tipo uno que suspendió la insulina hace dos días. Llega estuporoso, con respiración de Kussmaul, aliento cetónico, hipotenso, taquicárdico y deshidratado. pH siete coma doce, presión de CO dos de dieciséis, bicarbonato de cinco. Glicemia de cuatrocientos ochenta, sodio ciento treinta y cuatro, cloro noventa y ocho, potasio cinco coma dos, y cetonemia alta.',
        question: '¿Cuál es la conducta más adecuada respecto del trastorno ácido base?',
        options: 'Las opciones: bicarbonato hasta normalizar el pH, cristaloides e insulina en infusión, intubar e hiperventilar, hemodiálisis de urgencia, o fomepizol con hemodiálisis. Piénsalo.',
        answer: 'Es la B. El anion gap da treinta y uno, elevado por cetoácidos, y Winter da trece y medio a diecisiete y medio: su presión de CO dos de dieciséis es compensación pura. El tratamiento es la causa, fluidos e insulina, que frena la lipólisis y devuelve el bicarbonato. El distractor es el bicarbonato: con pH de siete coma doce no está indicado, y normalizar el pH nunca es la meta.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 6',
      stem: 'Un paciente de 66 años con antecedente de insuficiencia renal crónica, en etapa IIIB, con creatinina estable en 1,8 mg/dl y clearence de creatinina estimado de 35 ml/min. Se realiza exámenes de laboratorio que muestran sodio: 138 mEq/L, cloro: 102 mEq/L potasio: 4,8 mEq/L, bicarbonato plasmático: 16 mEq/L y anion gap: 10.',
      question: '¿Cuál es la causa más probable de sus alteraciones?',
      options: [
        { letter: 'A', text: 'Acumulación de ácidos orgánicos' },
        { letter: 'B', text: 'Disminución de la producción de bicarbonato' },
        { letter: 'C', text: 'Cetosis' },
        { letter: 'D', text: 'Acumulación de ácido úrico' },
        { letter: 'E', text: 'Intoxicación por medicamentos' },
      ],
      correct: 'B',
      explanation: 'Acidosis metabólica con anion gap normal en ERC etapa 3b: la menor masa renal reduce la amoniogénesis y la regeneración de bicarbonato. El AG se eleva por acumulación de ácidos orgánicos recién en la etapa terminal.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticuatro. Paciente de sesenta y seis años con enfermedad renal crónica etapa tres b, creatinina estable de uno coma ocho y clearance de treinta y cinco. Sodio ciento treinta y ocho, cloro ciento dos, potasio cuatro coma ocho, bicarbonato dieciséis y anion gap de diez.',
        question: '¿Cuál es la causa más probable de sus alteraciones?',
        options: 'Las opciones: acumulación de ácidos orgánicos, disminución de la producción de bicarbonato, cetosis, acumulación de ácido úrico, o intoxicación por medicamentos. Piénsalo.',
        answer: 'Es la B. El bicarbonato está bajo y el anion gap es de diez, normal. Entonces no se agregó un ácido: el riñón enfermo produce menos amonio y regenera menos bicarbonato. El distractor es la A, porque uno asocia insuficiencia renal con uremia, pero la acumulación de ácidos orgánicos, que sube el anion gap, aparece recién en la etapa terminal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 19',
      stem: 'Un paciente de 12 años consulta por un cuadro de malestar general, asociado a bajo de peso, que en las últimas horas se le agrega poliuria importante. Consulta porque en las últimas horas se agrega gran compromiso del estado general, seguido de compromiso de conciencia. Al examen físico está taquicárdico, soporoso, con polipnea y signos de deshidratación. En sus exámenes presenta glicemia de 470 mg/dl, sodio de 143 mEq/L, potasio de 4,8 mEq/L, cloro de 97 mEq/L, bicarbonato de 12 mEq/L y pH de 7,05.',
      question: '¿Qué fluido debe administrarse a este paciente?',
      options: [
        { letter: 'A', text: 'Suero glucosado' },
        { letter: 'B', text: 'Suero glucosalino' },
        { letter: 'C', text: 'Solución salina al 0,45%' },
        { letter: 'D', text: 'Solución salina al 0,9%' },
        { letter: 'E', text: 'Solución ringer lactato' },
      ],
      correct: 'D',
      explanation: 'Cetoacidosis diabética (AG = 143 − (97 + 12) = 34): se trata la causa con cristaloides isotónicos e insulina. El fluido de elección es la solución salina al 0,9%; el Ringer lactato también es un cristaloide isotónico aceptable, pero la respuesta esperada es el suero fisiológico.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil quince. Paciente de doce años con baja de peso y poliuria, que evoluciona con compromiso de conciencia. Está taquicárdico, soporoso, con polipnea y deshidratado. Glicemia de cuatrocientos setenta, sodio ciento cuarenta y tres, potasio cuatro coma ocho, cloro noventa y siete, bicarbonato doce y pH siete coma cero cinco.',
        question: '¿Qué fluido debe administrarse a este paciente?',
        options: 'Las opciones: suero glucosado, suero glucosalino, solución salina al cero coma cuarenta y cinco, solución salina al cero coma nueve, o Ringer lactato. Piénsalo.',
        answer: 'Es la D, suero fisiológico. Calcula el anion gap: da treinta y cuatro, una cetoacidosis diabética de debut. Fíjate que el bicarbonato no aparece entre las opciones, y es a propósito: se trata la causa, con cristaloide isotónico e insulina. El Ringer también es isotónico y no sería un error clínico, pero la respuesta esperada es el suero fisiológico. Los sueros hipotónicos o con glucosa no son el fluido inicial.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Siempre en pasos', kind: 'key', items: [
          { t: 'pH, HCO3, Winter, anion gap', d: 'pCO2 = 1,5 × HCO3 + 8 ± 2',
            say: 'Cerremos con las reglas de oro. Lee siempre en el mismo orden: pH, bicarbonato, Winter y anion gap. Si la presión de CO dos cae fuera del rango de Winter, hay un segundo trastorno.' },
          { t: 'AG alto: se agregó un ácido', d: 'AG normal: se perdió bicarbonato',
            say: 'Anion gap alto significa que se agregó un ácido; normal, que se perdió bicarbonato. Y corrige por la albúmina.' },
          { t: 'Brecha osmolar > 10', d: 'Metanol o etilenglicol: antídoto + diálisis',
            say: 'Con anion gap alto sin explicación, calcula la brecha osmolar: sobre diez es un alcohol tóxico.' },
        ] },
        { title: 'Tratamiento', tag: 'Poco bicarbonato', kind: 'alert', items: [
          { t: 'Tratar la causa', d: 'Fluidos e insulina en la cetoacidosis',
            say: 'Se trata la causa: en la cetoacidosis, fluidos e insulina.' },
          { t: 'Bicarbonato solo con pH < 7,10', d: 'E inestabilidad · meta pH 7,20',
            say: 'El bicarbonato, solo con pH bajo siete coma diez e inestabilidad, y sin normalizar. En la próxima clase vemos el trastorno opuesto, la alcalosis metabólica, y cómo se combinan los trastornos. Si te llevas una sola idea de hoy: la acidosis metabólica se diagnostica con el anion gap y se trata corrigiendo la causa, no con bicarbonato. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Acidosis metabólica: del gas a la causa',
    root: N('start', 'pH < 7,35 y HCO3 < 22', 'Acidosis metabólica',
      'Tienes un pH bajo con bicarbonato bajo: es una acidosis metabólica. Ahora, los pasos.',
      ['', N('q', '¿pCO2 en el rango de Winter?', '1,5 × HCO3 + 8 ± 2',
        'Primero la compensación. ¿La presión de CO dos medida cae en el rango que predice Winter? Si no, anota un trastorno respiratorio agregado y sigue.',
        ['calcula el AG', N('q', '¿Anion gap corregido > 12?', 'Na − (Cl + HCO3), ajustar por albúmina',
          'Luego el anion gap, corregido por la albúmina. ¿Está sobre doce?',
          ['NO', N('do', 'AG normal: pérdida de HCO3', 'Diarrea · ATR · suero fisiológico masivo',
            'Si es normal, se perdió bicarbonato: diarrea, acidosis tubular renal o exceso de suero fisiológico. Trata la causa; en la acidosis tubular crónica, álcali oral.')],
          ['SÍ', N('q', '¿Brecha osmolar > 10?', 'Si no hay cetosis, lactato ni uremia',
            'Si está alto, se agregó un ácido. Si no hay cetosis, lactato ni uremia que lo expliquen, calcula la brecha osmolar.',
            ['NO', N('ok', 'Tratar la causa', 'Fluidos, insulina, soporte',
              'Sin brecha, es cetoacidosis, acidosis láctica o uremia: se trata la causa con fluidos, insulina y soporte. Bicarbonato solo con pH bajo siete coma diez e inestabilidad.')],
            ['SÍ', N('alert', 'Metanol o etilenglicol', 'Fomepizol o etanol + hemodiálisis',
              'Con brecha osmolar sobre diez, es un alcohol tóxico: fomepizol o etanol, y hemodiálisis de urgencia.')])])])]),
  },
};
