// Clase 1.2 de Endocrinología — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_endocrinologia.cjs (endo-02).
// Preguntas reales: books/data/real_questions_by_code.json vía classes/scripts/class_questions.cjs.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'endo-02',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'A quién tratar, con cuánta levotiroxina y cómo se toma',
      say: 'Bienvenidos. En la clase anterior aprendimos a leer el perfil tiroideo. Hoy lo usamos para tratar la enfermedad endocrina más frecuente de la consulta: el hipotiroidismo primario, que tiene garantía GES y afecta a cerca de una de cada diez personas adultas en Chile, sobre todo mujeres. El examen pregunta cuatro cosas: a qué subclínico se trata, con qué dosis se parte, cómo se toma la levotiroxina y cuándo se controla. Vamos a verlas todas.',
    },

    {
      type: 'flow',
      kicker: 'Etiología',
      title: '¿Por qué falla la tiroides?',
      nodes: [
        { id: 'hash', col: 0, row: 1, k: 'cause', t: 'Tiroiditis de Hashimoto', s: 'Autoinmune · la causa n° 1' },
        { id: 'ac', col: 1, row: 0, k: 'mech', t: 'Anti-TPO y anti-Tg', s: 'Infiltración linfocitaria' },
        { id: 'des', col: 2, row: 1, k: 'mech', t: 'Destrucción de folículos', s: 'Falla progresiva' },
        { id: 'otr', col: 0, row: 3, k: 'cause', t: 'Otras causas', s: 'Radioyodo, tiroidectomía, amiodarona, litio' },
        { id: 't4', col: 3, row: 1, k: 'effect', t: 'T4 libre baja', s: 'Hipotiroidismo primario' },
        { id: 'tsh', col: 4, row: 1, k: 'good', t: 'TSH alta', s: 'El examen que lo detecta' },
      ],
      edges: [
        { from: 'hash', to: 'ac' }, { from: 'ac', to: 'des' }, { from: 'hash', to: 'des' },
        { from: 'otr', to: 'des' }, { from: 'des', to: 't4' }, { from: 't4', to: 'tsh', label: 'la hipófisis responde' },
      ],
      steps: [
        { show: ['hash'], note: 'En Chile, casi siempre es Hashimoto',
          say: 'Partamos por la causa. En Chile, y en cualquier país con buen aporte de yodo, la causa más frecuente de hipotiroidismo primario en el adulto es la tiroiditis crónica autoinmune, la enfermedad de Hashimoto.' },
        { show: ['ac', 'des'], note: 'Los anticuerpos marcan el ataque',
          say: 'Es un ataque autoinmune: aparecen anticuerpos antiperoxidasa, los anti TPO, y antitiroglobulina, y los linfocitos infiltran la glándula y van destruyendo los folículos. La falla es lenta y progresiva, y por eso muchos pacientes pasan primero por una etapa subclínica.' },
        { show: ['otr'], note: 'Preguntar siempre por el pasado y los fármacos',
          say: 'Hay otras causas que conviene buscar en la historia: una ablación previa con radioyodo o una tiroidectomía, y dos fármacos, la amiodarona y el litio.' },
        { show: ['t4', 'tsh'], note: 'El mismo termostato de la clase anterior',
          say: 'Por cualquiera de estos caminos, la T cuatro libre baja y la hipófisis responde subiendo la TSH. Es el patrón primario que vimos en la clase anterior, y por eso la TSH es el examen que lo detecta.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Todo se enlentece',
      cards: [
        { title: 'Síntomas', tag: 'Metabolismo lento', kind: 'criteria', items: [
          { t: 'Astenia, frío, constipación', d: 'Bradipsiquia y somnolencia',
            say: 'La clínica se entiende con una sola idea: todo el metabolismo se enlentece. Astenia marcada, intolerancia al frío, constipación pertinaz, pensamiento lento y somnolencia.' },
          { t: 'Aumento de peso moderado', d: '2 a 5 kg, por retención de líquido',
            say: 'El peso sube, pero poco: dos a cinco kilos, por retención de líquido. Ojo, el hipotiroidismo no explica una obesidad mórbida por sí solo.' },
          { t: 'Piel seca, pelo quebradizo, voz ronca', d: 'Y alteraciones menstruales',
            say: 'Además, piel seca y descamativa, pelo quebradizo que se cae, voz ronca, y alteraciones menstruales, tanto reglas escasas como abundantes.' },
        ] },
        { title: 'Examen físico', tag: 'Lo que se pregunta', kind: 'key', items: [
          { t: 'Relajación lenta del aquiliano', d: 'El signo más específico',
            say: 'Al examen hay bradicardia, y un signo que se pregunta: el reflejo aquiliano con la fase de relajación enlentecida. Es el signo físico más específico del hipotiroidismo.' },
          { t: 'Mixedema y bocio firme', d: 'Edema duro que no deja fóvea',
            say: 'También la cara abotagada con edema periorbitario duro, que no deja fóvea: eso es el mixedema. Y la tiroides puede estar aumentada, difusa, firme e indolora, o atrófica.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Laboratorio',
      title: 'Alteraciones que corrige la levotiroxina',
      cards: [
        { title: 'Dislipidemia', tag: 'Regla EUNACOM', kind: 'alert', items: [
          { t: 'Colesterol total y LDL altos', d: 'Menos receptores hepáticos de LDL',
            say: 'El hipotiroidismo también altera los exámenes generales, y estas alteraciones se corrigen con levotiroxina, no con fármacos específicos. La primera es la dislipidemia: el hígado expresa menos receptores de LDL, y el colesterol total y el LDL suben, muchas veces sobre doscientos o doscientos cincuenta.' },
          { t: 'No partir con estatinas', d: 'Se normaliza al corregir la TSH',
            say: 'Y aquí está la regla que se pregunta: no se parte con estatinas. Al normalizar la TSH, el perfil lipídico suele normalizarse por completo. Por eso ante una dislipidemia nueva, siempre se pide TSH.' },
        ] },
        { title: 'Anemia', tag: '30 a 40%', kind: 'criteria', items: [
          { t: 'Normocítica normocrómica', d: 'Menos estímulo a la médula',
            say: 'La segunda es la anemia, en el treinta a cuarenta por ciento de los casos. Lo habitual es normocítica, por menor estímulo a la médula.' },
          { t: 'Macrocítica: anemia perniciosa', d: 'Otra enfermedad autoinmune asociada',
            say: 'Pero puede ser microcítica, por reglas abundantes, o macrocítica, cuando se asocia a una anemia perniciosa, otra enfermedad autoinmune que acompaña al Hashimoto. Esa asociación se pregunta.' },
        ] },
        { title: 'Otros', tag: 'Electrolitos y músculo', kind: 'normal', items: [
          { t: 'Hiponatremia euvolémica', d: 'Menor filtración y más ADH',
            say: 'La tercera es la hiponatremia hiposmolar euvolémica, por menor filtración renal y un exceso de hormona antidiurética.' },
          { t: 'CK elevada', d: 'Miopatía hipotiroidea proximal',
            say: 'Y la cuarta, una CK elevada, por una miopatía proximal. Estas dos, llevadas al extremo, son parte del coma mixedematoso de la próxima clase.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Hipotiroidismo subclínico',
      title: '¿A quién se trata?',
      nodes: [
        { id: 'sub', col: 0, row: 2, k: 'start', t: 'TSH alta + T4L normal', s: 'Hipotiroidismo subclínico' },
        { id: 'q', col: 1, row: 2, k: 'q', t: '¿TSH ≥ 10?', s: 'El primer corte' },
        { id: 'diez', col: 2, row: 0, k: 'alert', t: 'Tratar siempre', s: 'Aunque sea asintomático' },
        { id: 'fac', col: 2, row: 3, k: 'q', t: 'TSH 4,5–9,9', s: '¿Hay un factor agravante?' },
        { id: 'si', col: 3, row: 2, k: 'good', t: 'Tratar', s: 'Embarazo, anti-TPO (+), bocio, síntomas, ECV' },
        { id: 'no', col: 3, row: 4, k: 'refer', t: 'Observar', s: 'Control de TSH' },
      ],
      edges: [
        { from: 'sub', to: 'q' }, { from: 'q', to: 'diez', label: 'sí' }, { from: 'q', to: 'fac', label: 'no' },
        { from: 'fac', to: 'si', label: 'sí' }, { from: 'fac', to: 'no', label: 'no' },
      ],
      steps: [
        { show: ['sub'], note: 'No todos se tratan',
          say: 'Ahora la pregunta que más se repite del tema: el hipotiroidismo subclínico, TSH alta con T cuatro libre normal. No todos se tratan, y el examen quiere saber si conoces los criterios.' },
        { show: ['q', 'diez'], note: 'TSH de 10 o más: siempre',
          say: 'El primer corte es la TSH de diez. Con diez o más se trata siempre, aunque el paciente esté completamente asintomático, porque el riesgo de progresar a hipotiroidismo clínico y de daño cardiovascular es alto.' },
        { show: ['fac'], note: 'Entre 4,5 y 9,9 decide el paciente',
          say: 'Entre cuatro coma cinco y nueve coma nueve, lo que decide no es el número, sino el paciente. Hay que buscar factores agravantes.' },
        { show: ['si'], note: 'Cinco razones para tratar',
          say: 'Se trata si hay embarazo o deseo de embarazo próximo, con meta de TSH bajo dos coma cinco; si hay anticuerpos anti TPO positivos, que predicen progresión de cerca de un cinco por ciento al año; si hay bocio; si hay síntomas, como ensayo terapéutico de tres a seis meses; o si hay dislipidemia grave o enfermedad cardiovascular establecida en menores de sesenta y cinco años.' },
        { show: ['no'], note: 'Sin factores: se controla',
          say: 'Si no hay ninguno de esos factores, no se trata: se observa y se controla la TSH.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Hipotiroidismo subclínico',
      title: 'El adulto mayor: no sobretratar',
      cards: [
        { title: 'Mayor de 70–80 años', tag: 'Asintomático', kind: 'alert', items: [
          { t: 'TSH 4,5–9,9: observar', d: 'Control clínico anual',
            say: 'Hay un grupo en que la regla se invierte: el adulto mayor de setenta a ochenta años, asintomático, con TSH entre cuatro coma cinco y nueve coma nueve. En él, la conducta es observación con control anual.' },
          { t: 'La TSH sube con la edad', d: 'Es fisiológico',
            say: '¿Por qué? Porque con los años la TSH sube de forma fisiológica, y ese valor no significa enfermedad.' },
          { t: 'Tratar da arritmias y fracturas', d: 'Fibrilación auricular y osteoporosis',
            say: 'Y tratarlo no aporta beneficio, pero sí aumenta el riesgo de fibrilación auricular y de fracturas por osteoporosis. En el anciano asintomático, el sobretratamiento es el error.' },
        ] },
        { title: 'La trampa', tag: 'En el examen', kind: 'criteria', items: [
          { t: 'Adolescente o joven sin factores', d: 'Tampoco se trata',
            say: 'Y no confundas subclínico con tratar. Un joven con TSH de seis, T cuatro libre normal y ningún factor agravante tampoco recibe levotiroxina: se controla. Lo vas a ver en una pregunta real al final.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Levotiroxina',
      title: '¿Con cuánto se parte?',
      cards: [
        { title: 'Adulto joven sano', tag: 'Dosis plena', kind: 'pharma', items: [
          { t: '1,6 mcg/kg de peso ideal/día', d: 'Habitualmente 75 a 125 mcg/día',
            say: 'Pasemos al tratamiento. La levotiroxina oral es la terapia de elección, y la dosis depende de quién es el paciente. El adulto joven, sin cardiopatía, parte con la dosis plena desde el primer día: uno coma seis microgramos por kilo de peso ideal al día, que suele quedar entre setenta y cinco y ciento veinticinco microgramos.' },
        ] },
        { title: 'Adulto mayor o coronario', tag: 'Start low, go slow', kind: 'alert', items: [
          { t: '25 a 50 mcg/día', d: '12,5 mcg/día si la coronariopatía es grave',
            say: 'El adulto mayor de sesenta a sesenta y cinco años, o el paciente con cardiopatía coronaria, parte bajo: veinticinco a cincuenta microgramos al día, y en el coronario grave, incluso doce coma cinco.' },
          { t: 'Subir 12,5–25 mcg cada 6–8 semanas', d: 'Según la TSH',
            say: 'Y se sube despacio, de doce coma cinco a veinticinco microgramos cada seis a ocho semanas, según la TSH. En inglés se resume como empezar bajo y avanzar lento.' },
          { t: 'Dosis plena de golpe: isquemia', d: 'Angina, infarto, fibrilación auricular',
            say: '¿Por qué tanto cuidado? Porque la hormona tiroidea aumenta el consumo de oxígeno del corazón. Dar la dosis plena de golpe a un cardiópata puede desencadenar angina, un infarto o una fibrilación auricular. Esa es la alternativa trampa.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Levotiroxina',
      title: 'Cómo se toma: la regla de oro',
      cards: [
        { title: 'Administración', tag: 'En ayunas', kind: 'key', items: [
          { t: 'Ayuno estricto, con agua pura', d: '30 a 60 min antes del desayuno',
            say: 'La levotiroxina tiene un margen terapéutico estrecho y se absorbe mal si hay algo en el intestino. Por eso se toma en ayunas estricta, con un vaso de agua pura, sin gas, al menos treinta a sesenta minutos antes del desayuno.' },
          { t: 'O al acostarse', d: '3 a 4 horas después de comer',
            say: 'La alternativa es tomarla al acostarse, siempre que hayan pasado tres a cuatro horas desde la última comida.' },
        ] },
        { title: 'Interferencias', tag: 'Separar 4 horas', kind: 'alert', items: [
          { t: 'Hierro, calcio, antiácidos', d: 'Hidróxido de aluminio o magnesio',
            say: 'Y hay fármacos que la atrapan en el intestino o reducen su absorción, y deben separarse al menos cuatro horas: el sulfato ferroso, el carbonato de calcio y los antiácidos con aluminio o magnesio.' },
          { t: 'Sucralfato, colestiramina, IBP', d: 'Omeprazol incluido',
            say: 'También el sucralfato, la colestiramina y los inhibidores de la bomba de protones, como el omeprazol. Fíjate que muchos de estos los toman justamente las mujeres mayores con osteoporosis o anemia: la paciente típica del hipotiroidismo.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Seguimiento',
      title: 'Controlar a las 6 a 8 semanas',
      nodes: [
        { id: 'ini', col: 0, row: 1, k: 'start', t: 'Inicio o cambio de dosis', s: 'Levotiroxina' },
        { id: 'esp', col: 1, row: 1, k: 'mech', t: 'Esperar 6 a 8 semanas', s: 'Nuevo estado estable' },
        { id: 'tsh', col: 2, row: 1, k: 'q', t: 'Medir TSH', s: '¿Está en meta?' },
        { id: 'met', col: 3, row: 0, k: 'good', t: 'Meta 0,5–2,5 mUI/L', s: 'Mantener la dosis' },
        { id: 'alt', col: 3, row: 2, k: 'trap', t: 'TSH alta', s: 'Primero: ¿cómo la toma?' },
        { id: 'aju', col: 4, row: 2, k: 'refer', t: 'Ajustar 12,5–25 mcg', s: 'Y volver a medir' },
      ],
      edges: [
        { from: 'ini', to: 'esp' }, { from: 'esp', to: 'tsh' },
        { from: 'tsh', to: 'met', label: 'sí' }, { from: 'tsh', to: 'alt', label: 'no' }, { from: 'alt', to: 'aju' },
        { from: 'aju', to: 'esp', label: 'otra vez' },
      ],
      steps: [
        { show: ['ini', 'esp'], note: 'La TSH tarda en reajustarse',
          say: 'Finalmente, el seguimiento. Cada vez que inicias o cambias la dosis, hay que esperar entre seis y ocho semanas antes de medir. Es el tiempo que necesita la TSH para llegar a un nuevo equilibrio. Medir a las dos semanas es un error clásico.' },
        { show: ['tsh', 'met'], note: 'Se controla con TSH',
          say: 'Se controla con la TSH, y la meta estándar es entre cero coma cinco y dos coma cinco. Si está en meta, se mantiene la dosis.' },
        { show: ['alt'], note: 'Antes de subir, preguntar',
          say: 'Si la TSH sigue alta, antes de subir la dosis pregunta cómo toma la pastilla. ¿La toma con el desayuno, con café con leche, junto al calcio o al hierro? Muchas veces el problema no es la dosis, sino la absorción.' },
        { show: ['aju'], note: 'Y el ciclo se repite',
          say: 'Corregida la forma de tomarla, se ajusta de doce coma cinco a veinticinco microgramos, y se vuelve a medir a las seis u ocho semanas. El ciclo se repite hasta llegar a la meta.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos el diagnóstico y el tratamiento en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Subclínico con TSH ≥ 10', 'Levotiroxina siempre', 'Observar porque es asintomático'],
          say: 'Repasemos las trampas. Subclínico con TSH de diez o más: se trata siempre. El error es observar porque el paciente no tiene síntomas.' },
        { cells: ['Subclínico 4,5–9,9 sin factores', 'Control de TSH', 'Iniciar levotiroxina'],
          say: 'Subclínico entre cuatro coma cinco y nueve coma nueve, sin factores agravantes: se controla. El error es tratar un número.' },
        { cells: ['Mayor de 70–80 años, TSH < 10, asintomático', 'Observación anual', 'Tratar y causar arritmia'],
          say: 'Adulto mayor de setenta a ochenta, asintomático, con TSH bajo diez: observación anual. Tratarlo aumenta la fibrilación auricular y las fracturas.' },
        { cells: ['Coronario o adulto mayor', '25–50 mcg/día y subir lento', 'Dosis plena de 1,6 mcg/kg'],
          say: 'Coronario o adulto mayor: veinticinco a cincuenta microgramos y subir lento. La dosis plena de entrada es el distractor.' },
        { cells: ['Colesterol alto + TSH alta', 'Levotiroxina primero', 'Partir con estatinas'],
          say: 'Colesterol alto con hipotiroidismo: primero levotiroxina. Partir con estatinas es la respuesta incorrecta.' },
        { cells: ['TSH alta en control', 'Revisar cómo la toma', 'Subir la dosis sin preguntar'],
          say: 'Y la TSH que sigue alta en control: revisar la forma de tomarla y las interferencias antes de subir la dosis.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 62 años, hipertensa controlada, con 6 meses de astenia, constipación y aumento de 4 kg. FC 54 lpm, piel seca y fría, relajación aquiliana prolongada y tiroides difusamente aumentada, firme e indolora. TSH 42,5 mUI/L, T4 libre 0,41 ng/dL, colesterol total 268 mg/dL y anti-TPO 650 UI/mL.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Levotiroxina 1,6 mcg/kg/día y atorvastatina desde hoy' },
        { letter: 'B', text: 'Levotiroxina 50 mcg/día en ayunas y control de TSH en 6 a 8 semanas' },
        { letter: 'C', text: 'Repetir TSH y T4 libre en 3 meses antes de tratar' },
        { letter: 'D', text: 'Solicitar ecografía y punción tiroidea antes de tratar' },
        { letter: 'E', text: 'Levotiroxina 50 mcg/día y control de TSH en 2 semanas' },
      ],
      correct: 'B',
      explanation: 'Hipotiroidismo primario clínico por Hashimoto (TSH > 10, T4L baja, bocio firme, anti-TPO alto). Por su edad se parte con 50 mcg/día en ayunas y se controla la TSH a las 6–8 semanas. La hipercolesterolemia es secundaria y se corrige con levotiroxina, sin estatinas de entrada.',
      say: {
        stem: 'Vamos al caso. Mujer de sesenta y dos años, hipertensa controlada, con seis meses de astenia, constipación y cuatro kilos más. Tiene bradicardia de cincuenta y cuatro, piel seca y fría, relajación aquiliana lenta, y una tiroides aumentada, firme e indolora. La TSH es de cuarenta y dos, la T cuatro libre está baja, el colesterol en doscientos sesenta y ocho, y los anti TPO fuertemente positivos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: dosis plena de levotiroxina con atorvastatina, cincuenta microgramos en ayunas con TSH a las seis u ocho semanas, repetir exámenes en tres meses, ecografía y punción, o cincuenta microgramos con TSH en dos semanas. Piénsalo.',
        answer: 'Es la B. Es un hipotiroidismo primario clínico por Hashimoto, y por su edad se parte con dosis baja, cincuenta microgramos en ayunas, controlando la TSH a las seis u ocho semanas. La A es la trampa doble: dosis plena en una paciente de sesenta y dos años, y una estatina que no hace falta, porque el colesterol baja al corregir la tiroides. Y la E falla en el tiempo: a las dos semanas la TSH todavía no se estabiliza.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 15',
      stem: 'Una paciente de 27 años, en amenorrea por lactancia, presenta un cuadro de astenia y malestar general, constipación y dificultades para concentrarse, asociado a intolerancia al frío. Además, refiere que no ha podido bajar de peso. Al examen físico tiene FC: 67x’, PA: 120/80 mmHg, se aprecia piel seca y cabello ralo, sin otras alteraciones en el examen físico segmentario. Se solicitan exámenes de laboratorio que muestran TSH: 14,7 UI/L, T4 libre: 0,6 ng/dl, T3: 46 ng/dl.',
      question: '¿Cuál es la conducta más adecuada en este momento?',
      options: [
        { letter: 'A', text: 'Iniciar tratamiento con levotiroxina oral' },
        { letter: 'B', text: 'Solicitar ecografía tiroidea' },
        { letter: 'C', text: 'Solicitar cintigrafía tiroidea' },
        { letter: 'D', text: 'Solicitar prueba de captación de yodo radiactivo' },
        { letter: 'E', text: 'Repetir los exámenes en 6 semanas' },
      ],
      correct: 'A',
      explanation: 'Hipotiroidismo clínico: síntomas y T4 libre baja con TSH alta. Se inicia levotiroxina. Aun si fuera subclínico, una TSH sobre 10 obliga a tratar. Las imágenes no cambian la conducta.',
      say: {
        stem: 'Ahora preguntas reales. Esta es del EUNACOM de agosto de dos mil veintiuno. Mujer de veintisiete años, en amenorrea por lactancia, con astenia, constipación, dificultad para concentrarse e intolerancia al frío, y no logra bajar de peso. Tiene piel seca y cabello ralo. La TSH es de catorce coma siete, con la T cuatro libre baja.',
        question: '¿Cuál es la conducta más adecuada en este momento?',
        options: 'Las opciones: iniciar levotiroxina, ecografía tiroidea, cintigrafía, captación de yodo, o repetir los exámenes en seis semanas. Piénsalo.',
        answer: 'Es la A. Síntomas, TSH alta y T cuatro libre baja: hipotiroidismo primario clínico, y se trata. Y aunque la T cuatro fuera normal, una TSH sobre diez igual obliga a tratar. Las imágenes son la trampa: la ecografía y la cintigrafía no cambian nada en un hipotiroidismo, y repetir el examen solo retrasa el tratamiento.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 21',
      stem: 'Una paciente de 17 años, con hábitos de vida sedentarios y obesidad se realiza exámenes de control, en los que presenta TSH: 6,5 UI/L, T4 libre: 1,5 ng/dl (VN: 0,7 a 1,9 ng/dl) y T3 libre 300 pg/dl (VN: 130 a 450 pg/dl).',
      question: 'La conducta más adecuada es:',
      options: [
        { letter: 'A', text: 'Iniciar levotiroxina' },
        { letter: 'B', text: 'Controlar hormonas tiroideas en 6 meses' },
        { letter: 'C', text: 'Solicitar anticuerpos antiperoxidasa tiroidea' },
        { letter: 'D', text: 'Solicitar ecografía tiroidea' },
        { letter: 'E', text: 'Solicitar cintigrafía tiroidea con yodo radiactivo' },
      ],
      correct: 'B',
      explanation: 'Hipotiroidismo subclínico (TSH 6,5 con T4 libre normal) sin factores agravantes: no requiere tratamiento y se controla. La obesidad no es un criterio para iniciar levotiroxina.',
      say: {
        stem: 'Otra, del EUNACOM de diciembre de dos mil dieciocho. Adolescente de diecisiete años, sedentaria y con obesidad, que en exámenes de control tiene una TSH de seis coma cinco, con T cuatro libre y T tres libre normales.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: iniciar levotiroxina, controlar las hormonas en seis meses, pedir anticuerpos antiperoxidasa, ecografía, o cintigrafía. Piénsalo.',
        answer: 'Es la B. Es un subclínico con una TSH bajo diez, y no hay embarazo, bocio ni síntomas: se controla. La A es la trampa, porque la obesidad hace pensar que la tiroides explica el peso, y ya vimos que no es así. Las imágenes no aportan.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 110',
      stem: 'Una paciente de 35 años presenta un cuadro de astenia importante. Al examen físico tiene FC: 59x’, PA: 110/70 mmHg, se aprecia palidez, ictericia, vitiligo, edema de EEII, piel seca, con pelo quebradizo. En sus exámenes tiene hematocrito: 27%, con VCM: 110.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Depresión' },
        { letter: 'B', text: 'Daño hepático crónico' },
        { letter: 'C', text: 'Déficit de vitamina B12' },
        { letter: 'D', text: 'Enfermedad de Addison' },
        { letter: 'E', text: 'Hipotiroidismo' },
      ],
      correct: 'E',
      explanation: 'Bradicardia, piel seca, pelo quebradizo y edema: hipotiroidismo. La anemia macrocítica y el vitíligo apuntan a autoinmunidad asociada (anemia perniciosa), pero el cuadro global lo explica el hipotiroidismo.',
      say: {
        stem: 'Una del EUNACOM de julio de dos mil quince. Mujer de treinta y cinco años con astenia importante. Tiene frecuencia de cincuenta y nueve, palidez, ictericia, vitíligo, edema de piernas, piel seca y pelo quebradizo. El hematocrito es de veintisiete, con un volumen corpuscular de ciento diez: una anemia macrocítica.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: depresión, daño hepático crónico, déficit de vitamina B doce, enfermedad de Addison, o hipotiroidismo. Piénsalo.',
        answer: 'Es la E, hipotiroidismo. Bradicardia, piel seca, pelo quebradizo y edema es el cuadro completo. El distractor tentador es el déficit de B doce, por la macrocitosis, y de hecho puede coexistir: el vitíligo te avisa que hay autoinmunidad, y la anemia perniciosa acompaña al Hashimoto. Pero el déficit de B doce no explica la bradicardia, la piel seca ni el edema.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 36',
      stem: 'Un paciente se realiza una tiroidectomía total hace varios años, por un carcinoma tiroideo. Suspende el tratamiento con levotiroxina hace 6 meses.',
      question: '¿Qué alteración tendrá con mayor probabilidad en su examen físico?',
      options: [
        { letter: 'A', text: 'Mixedema pretibial' },
        { letter: 'B', text: 'Exoftalmo' },
        { letter: 'C', text: 'Melanoplaquias' },
        { letter: 'D', text: 'Piel seca' },
        { letter: 'E', text: 'Acantosis nigricans' },
      ],
      correct: 'D',
      explanation: 'Sin tiroides y sin levotiroxina, el paciente está hipotiroideo: piel seca. El mixedema pretibial y el exoftalmo son de la enfermedad de Graves; las melanoplaquias, del Addison; y la acantosis nigricans, de la resistencia a la insulina.',
      say: {
        stem: 'Y una última, del EUNACOM de diciembre de dos mil diecisiete. Paciente con tiroidectomía total hace años por un cáncer de tiroides, que suspendió la levotiroxina hace seis meses.',
        question: '¿Qué alteración tendrá con mayor probabilidad en su examen físico?',
        options: 'Las opciones: mixedema pretibial, exoftalmo, melanoplaquias, piel seca, o acantosis nigricans. Piénsalo.',
        answer: 'Es la D, piel seca. Sin tiroides y sin hormona, está hipotiroideo. La trampa es el mixedema pretibial, porque suena a hipotiroidismo; pero el mixedema de la región pretibial es de la enfermedad de Graves, junto con el exoftalmo, y lo veremos en el bloque de hipertiroidismo. El mixedema del hipotiroidismo es el edema duro de la cara.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'A quién tratar', tag: 'Subclínico', kind: 'key', items: [
          { t: 'TSH ≥ 10: siempre', d: '4,5–9,9: solo con factores agravantes',
            say: 'Cerremos con las reglas de oro. Todo hipotiroidismo clínico se trata. En el subclínico, con TSH de diez o más, siempre; entre cuatro coma cinco y nueve coma nueve, solo si hay embarazo, anticuerpos, bocio, síntomas o enfermedad cardiovascular.' },
          { t: 'Anciano asintomático con TSH < 10', d: 'Observar',
            say: 'Y el anciano asintomático con TSH bajo diez se observa.' },
        ] },
        { title: 'Cuánto', tag: 'Dosis', kind: 'pharma', items: [
          { t: 'Joven: 1,6 mcg/kg/día', d: 'Mayor o coronario: 25–50 mcg y subir lento',
            say: 'El joven parte con uno coma seis microgramos por kilo; el adulto mayor o el coronario, con veinticinco a cincuenta, subiendo lento.' },
        ] },
        { title: 'Cómo y cuándo', tag: 'Absorción y control', kind: 'alert', items: [
          { t: 'Ayunas, 30–60 min antes del desayuno', d: 'Lejos del hierro, calcio e IBP',
            say: 'Se toma en ayunas con agua, lejos del hierro, el calcio y el omeprazol.' },
          { t: 'TSH a las 6–8 semanas', d: 'Meta 0,5 a 2,5',
            say: 'Y la TSH se controla a las seis u ocho semanas. Si te llevas una sola idea de hoy: la levotiroxina se ajusta al paciente, no al número; el anciano y el coronario van lento, y una TSH que no baja casi siempre es un problema de cómo se toma. En la próxima clase vemos la forma extrema de esta enfermedad: el coma mixedematoso. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Hipotiroidismo primario y subclínico en APS',
    root: N('start', 'TSH alta', 'Confirmar con T4 libre',
      'Paciente con una TSH alta. Lo primero es mirar la T cuatro libre, porque separa el hipotiroidismo clínico del subclínico.',
      ['', N('q', '¿T4 libre?', 'Baja o normal',
        '¿La T cuatro libre está baja o todavía normal?',
        ['Baja', N('q', 'Hipotiroidismo clínico', '¿Mayor o coronario?',
          'T cuatro libre baja: hipotiroidismo primario clínico, que siempre se trata, con garantía GES. La dosis depende de quién es el paciente.',
          ['NO', N('do', '1,6 mcg/kg/día', 'Dosis plena desde el inicio',
            'Adulto joven sin cardiopatía: dosis plena desde el inicio, uno coma seis microgramos por kilo de peso ideal. En ayunas, y TSH a las seis u ocho semanas.')],
          ['SÍ', N('alert', '25–50 mcg/día', 'Subir 12,5–25 cada 6–8 semanas',
            'Adulto mayor o coronario: veinticinco a cincuenta microgramos, y se sube despacio cada seis a ocho semanas. La dosis plena de golpe puede provocar isquemia o arritmia.')])],
        ['Normal', N('q', 'Subclínico: ¿TSH ≥ 10?', 'Primer corte',
          'T cuatro libre normal: hipotiroidismo subclínico. El primer corte es la TSH de diez.',
          ['SÍ', N('do', 'Tratar siempre', 'Aunque sea asintomático',
            'Con diez o más se trata siempre, aunque el paciente no tenga síntomas.')],
          ['NO', N('q', '¿Factor agravante?', 'Embarazo, anti-TPO, bocio, síntomas, ECV',
            'Entre cuatro coma cinco y nueve coma nueve se buscan factores: embarazo, anticuerpos anti TPO, bocio, síntomas o enfermedad cardiovascular en menores de sesenta y cinco.',
            ['SÍ', N('do', 'Tratar', '25–50 mcg/día',
              'Si hay un factor, se trata, con dosis bajas y ajuste según la TSH.')],
            ['NO', N('ok', 'Observar', 'Control; anciano: anual',
              'Si no hay ninguno, se observa y se controla la TSH. Y en el mayor de setenta a ochenta asintomático, la observación anual es la conducta, no un descuido.')])])])]),
  },
};
