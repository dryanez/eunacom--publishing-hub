// Clase 17.2 (Psiquiatría) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_psiquiatria.cjs (psiq-02). Preguntas: banco real EUNACOM (class_questions.cjs y --search).
// El código de la clase (1.12.1.002) no tiene preguntas reales propias; la psiquiatría real del banco está bajo 5.01.1.xxx. De la búsqueda por tema se usaron:
//   Julio 2025 P82 (un episodio maníaco basta: bipolar I), Julio 2024 P114 (depresión aparente con hipomanía/manía familiar: bipolar),
//   Diciembre 2025 P130 (viraje con sertralina: suspender antidepresivo, quetiapina), Julio 2025 P92 (tratamiento de la manía aguda),
//   Diciembre 2022 P120 (intoxicación por litio moderada: suero fisiológico).
// No usadas: Diciembre 2025 P77, Julio 2019 P34, Enero 2023 P165 (mismo punto que Julio 2025 P82); Diciembre 2018 P128, Diciembre 2019 P13, Julio 2017 P178 (mismo punto que Diciembre 2025 P130; viraje por ISRS);
//   Enero 2023 P126 (hemodiálisis por litemia 2,6) y Enero 2023 P125 (diabetes insípida nefrogénica por litio): ya las usan nefro-03 y endo-24/nefro-07, así que no se repiten;
//   Diciembre 2022 P94 (poliuria con litio: la correcta del banco, "SIADH", es incoherente con el cuadro; descartada); Diciembre 2024 P35 (alternativas y correcta desordenadas); Julio 2015 P72 (la correcta del banco es haloperidol, el libro pone antipsicótico atípico más estabilizador como primera línea).
// Sin pregunta real sobre teratogenicidad del valproato: una pregunta del libro como "Caso representativo".
// Imágenes: ninguna (psiquiatría; no hay figura clínica útil en los libros extraídos).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'psiq-02',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Trastorno bipolar I y II: manía versus hipomanía y estabilizadores del ánimo',
      say: 'Bienvenido. Hoy vemos el trastorno bipolar. Es el gran diagnóstico diferencial de la depresión recurrente, y el error de confundirlos tiene consecuencias serias. El examen pregunta cómo se distingue la manía de la hipomanía, qué se hace en una manía aguda, por qué no se usan antidepresivos solos, y cómo se maneja el litio, que tiene un margen de seguridad estrecho.',
    },

    {
      type: 'points',
      kicker: 'Clasificación',
      title: 'Bipolar I, II y ciclotimia',
      cards: [
        { title: 'Los tres diagnósticos', tag: 'Qué define cada uno', kind: 'key', items: [
          { t: 'Bipolar I: un episodio maníaco', d: 'Basta uno en toda la vida',
            say: 'El trastorno bipolar tipo uno exige al menos un episodio maníaco completo a lo largo de la vida. Un solo episodio maníaco sella el diagnóstico, aunque nunca haya tenido una depresión; eso sí, más del noventa por ciento la presenta.' },
          { t: 'Bipolar II: hipomanía y depresión', d: 'Un episodio de cada uno',
            say: 'El tipo dos requiere al menos un episodio hipomaníaco y al menos un episodio depresivo mayor. Y atención: si alguna vez hubo una manía, es tipo uno, nunca tipo dos.' },
          { t: 'Ciclotimia: 2 años de fluctuación', d: 'Síntomas que no alcanzan criterios',
            say: 'La ciclotimia es la fluctuación durante al menos dos años, un año en niños y adolescentes, de síntomas hipomaníacos y depresivos que no alcanzan la gravedad ni la duración de un episodio completo.' },
        ] },
        { title: 'Por qué importa', tag: 'Base', kind: 'alert', items: [
          { t: 'Heredabilidad cercana al 80%', d: 'La mayor entre los trastornos mayores',
            say: 'Es el trastorno psiquiátrico mayor con más carga genética, con heredabilidad cercana al ochenta por ciento. Por eso el antecedente familiar pesa.' },
          { t: 'Muchos debutan como depresión', d: 'Diagnóstico equivocado frecuente',
            say: 'Muchos pacientes debutan con una depresión y se tratan como unipolares durante años. Por eso siempre se pregunta por episodios de euforia, de poco sueño y de gasto excesivo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Criterios DSM-5',
      title: 'Qué es una manía',
      cards: [
        { title: 'Núcleo del cuadro', tag: 'Obligatorio', kind: 'key', items: [
          { t: 'Ánimo elevado, expansivo o irritable', d: 'Persistente y anormal',
            say: 'Tanto la manía como la hipomanía comparten un núcleo: ánimo anormal y persistentemente elevado, expansivo o irritable, con aumento de la actividad o de la energía dirigida a metas.' },
          { t: 'Al menos 3 de 7 síntomas', d: 'Cuatro si el ánimo es solo irritable',
            say: 'Y al menos tres de siete síntomas adicionales, cuatro si el ánimo es solo irritable.' },
        ] },
        { title: 'Los siete síntomas', tag: 'Lista', kind: 'criteria', items: [
          { t: 'Grandiosidad; poca necesidad de sueño', d: 'Descansado tras 2 o 3 horas',
            say: 'Autoestima exagerada o ideas de grandeza, y disminución de la necesidad de dormir: el paciente se siente descansado después de dos o tres horas.' },
          { t: 'Verborrea; fuga de ideas', d: 'Pensamiento acelerado',
            say: 'Verborrea o presión para hablar, y fuga de ideas, con pensamiento acelerado.' },
          { t: 'Distraibilidad; hiperactividad', d: 'Agitación dirigida a metas',
            say: 'Facilidad para distraerse y aumento de la actividad dirigida a metas, o agitación.' },
          { t: 'Conductas de riesgo', d: 'Compras, sexo, inversiones imprudentes',
            say: 'Y participación excesiva en actividades con riesgo de consecuencias dañinas: compras descontroladas, conductas sexuales de riesgo, inversiones imprudentes.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'La diferencia que se pregunta',
      title: 'Manía versus hipomanía',
      head: ['Parámetro', 'Manía (bipolar I)', 'Hipomanía (bipolar II)'],
      rows: [
        { cells: ['Duración mínima', '7 días, o cualquiera si hospitaliza', '4 días'],
          say: 'La manía dura al menos siete días, o cualquier duración si necesita hospitalización. La hipomanía, al menos cuatro días.' },
        { cells: ['Funcionamiento', 'Deterioro grave y evidente', 'Sin deterioro significativo'],
          say: 'En la manía hay deterioro grave: pérdida del trabajo, quiebra económica, problemas legales. En la hipomanía el funcionamiento se mantiene, e incluso puede aumentar la productividad.' },
        { cells: ['Psicosis', 'Puede haber', 'Nunca'],
          say: 'En la manía puede haber delirios, por ejemplo de grandeza, o alucinaciones. En la hipomanía nunca hay psicosis, y si aparece, el episodio pasa a ser manía.' },
        { cells: ['Hospitalización', 'Frecuente', 'No la requiere'],
          say: 'La manía se hospitaliza con frecuencia por el riesgo para el paciente o para otros. Si un episodio necesitó hospitalización, no era hipomanía.' },
        { cells: ['Diagnóstico', 'Un episodio define bipolar I', 'Exige además depresión previa'],
          say: 'Un episodio maníaco define bipolar tipo uno. La hipomanía, para ser bipolar tipo dos, exige además un episodio depresivo mayor.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Cómo se clasifica un episodio',
      title: 'Elevación del ánimo: manía o hipomanía',
      nodes: [
        { id: 'a', col: 0, row: 1, k: 'start', t: 'Ánimo elevado o irritable', s: 'Menos sueño, más energía' },
        { id: 'b', col: 1, row: 1, k: 'q', t: '¿Psicosis u hospitalización?', s: 'Deterioro grave' },
        { id: 'c', col: 2, row: 0, k: 'alert', t: 'Manía', s: '7 días o más' },
        { id: 'd', col: 3, row: 0, k: 'risk', t: 'Bipolar I', s: 'Un episodio basta' },
        { id: 'e', col: 2, row: 2, k: 'mech', t: 'Hipomanía', s: '4 días, funcional' },
        { id: 'f', col: 3, row: 2, k: 'effect', t: 'Bipolar II', s: 'Si además hubo depresión' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c', label: 'sí' }, { from: 'c', to: 'd' }, { from: 'b', to: 'e', label: 'no' }, { from: 'e', to: 'f' },
      ],
      steps: [
        { show: ['a', 'b'], note: 'Primero, la gravedad',
          say: 'Ante un paciente con ánimo elevado, poco sueño y mucha energía, la primera pregunta no es el nombre, sino cuánto lo está afectando. Hay psicosis, hay riesgo, necesitó hospitalizarse.' },
        { show: ['c', 'd'], note: 'Si es grave, es manía',
          say: 'Si hay psicosis o hospitalización, es una manía, y con un solo episodio el diagnóstico es bipolar tipo uno.' },
        { show: ['e', 'f'], note: 'Si es funcional, hipomanía',
          say: 'Si dura al menos cuatro días, es notorio para otros pero no deteriora, es hipomanía. Para hablar de bipolar tipo dos tiene que haber además un episodio depresivo mayor.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento',
      title: 'Manía aguda: una urgencia',
      nodes: [
        { id: 'a', col: 0, row: 1, k: 'alert', t: 'Manía aguda', s: 'Psicosis, agitación, riesgo' },
        { id: 'b', col: 1, row: 1, k: 'mech', t: 'Hospitalización protegida', s: 'GES 52' },
        { id: 'c', col: 2, row: 0, k: 'good', t: 'Antipsicótico atípico', s: 'Olanzapina, risperidona, quetiapina' },
        { id: 'd', col: 2, row: 2, k: 'good', t: 'Estabilizador', s: 'Litio o valproato' },
        { id: 'e', col: 3, row: 1, k: 'refer', t: 'Agitación intensa', s: 'Haloperidol con lorazepam' },
        { id: 'f', col: 4, row: 1, k: 'trap', t: 'Sin antidepresivos', s: 'Suspender si los tomaba' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'b', to: 'd' }, { from: 'c', to: 'e' }, { from: 'e', to: 'f' },
      ],
      steps: [
        { show: ['a', 'b'], note: 'Se protege al paciente',
          say: 'La manía aguda con psicosis, agitación o riesgo es una urgencia. Se hospitaliza en una unidad psiquiátrica protegida, y el trastorno bipolar tiene garantía explícita en salud, el GES número cincuenta y dos.' },
        { show: ['c', 'd'], note: 'Antipsicótico más estabilizador',
          say: 'El tratamiento de elección es la combinación de un antipsicótico atípico, como olanzapina, risperidona o quetiapina, con un estabilizador del ánimo, litio o valproato. El antipsicótico controla rápido, y el estabilizador sostiene.' },
        { show: ['e', 'f'], note: 'Antidepresivos, nunca',
          say: 'Si hay agitación muy intensa, el libro permite haloperidol con lorazepam, o terapia electroconvulsiva si es refractaria. Y si el paciente tomaba un antidepresivo, se suspende de inmediato, porque puede empeorar la manía.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Depresión bipolar',
      title: 'No se trata como la unipolar',
      cards: [
        { title: 'Qué sí usar', tag: 'Con evidencia', kind: 'pharma', items: [
          { t: 'Quetiapina 300 mg al día', d: 'Lurasidona o cariprazina también',
            say: 'La depresión bipolar no se trata igual que la unipolar. Los fármacos con más evidencia son la quetiapina, a trescientos miligramos al día, la lurasidona y la cariprazina, o la combinación de olanzapina con fluoxetina.' },
          { t: 'Lamotrigina', d: 'Titulación muy lenta',
            say: 'La lamotrigina es muy útil para prevenir y tratar las fases depresivas, pero se sube muy lento, empezando con veinticinco miligramos al día, por el riesgo de rash grave, el síndrome de Stevens-Johnson.' },
        ] },
        { title: 'Lo que no se hace', tag: 'Trampa', kind: 'alert', items: [
          { t: 'Antidepresivo en monoterapia', d: 'Nunca en un paciente bipolar',
            say: 'El gran error del examen: nunca un antidepresivo solo en un paciente bipolar. Puede desencadenar un viraje maníaco agudo.' },
          { t: 'Riesgo de viraje y ciclado rápido', d: 'Más de 4 episodios al año',
            say: 'También puede inducir ciclado rápido, que son más de cuatro episodios al año, y aumentar la impulsividad y el riesgo suicida.' },
          { t: 'Sospecha tras un ISRS: suspender', d: 'Insomnio sin fatiga, verborrea',
            say: 'Y si alguien parte un antidepresivo y a los días tiene mucha energía, duerme poco y habla sin parar, es un viraje: se suspende el antidepresivo y se investiga un bipolar de base.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Litio',
      title: 'El estándar de oro, con margen estrecho',
      cards: [
        { title: 'Uso y monitoreo', tag: 'Litemia', kind: 'pharma', items: [
          { t: 'Profilaxis: 0,6 a 1,0 mEq/L', d: 'Manía aguda: 0,8 a 1,2',
            say: 'El litio es el estándar de oro para prevenir recaídas y tiene efecto antisuicida demostrado. Su margen es estrecho. En mantenimiento la litemia se mantiene entre cero coma seis y uno coma cero, y en manía aguda entre cero coma ocho y uno coma dos.' },
          { t: 'Muestra a las 12 horas', d: 'Después de la última dosis',
            say: 'La muestra se toma por la mañana, exactamente doce horas después de la última dosis.' },
          { t: 'Antes: riñón, tiroides, ECG', d: 'Electrolitos y test de embarazo',
            say: 'Antes de partir se piden creatinina, orina, TSH, electrolitos, electrocardiograma y test de embarazo. Y se controlan función renal y tiroidea cada seis meses.' },
        ] },
        { title: 'Qué sube el litio', tag: 'Interacciones', kind: 'alert', items: [
          { t: 'AINE, tiazidas, IECA o ARA-II', d: 'Reducen su excreción renal',
            say: 'Los antiinflamatorios no esteroidales, las tiazidas y los inhibidores de la enzima convertidora o antagonistas de angiotensina suben la litemia, porque el riñón retiene más litio.' },
          { t: 'Deshidratación y dieta sin sal', d: 'Vómitos y diarrea también',
            say: 'Lo mismo hacen la deshidratación y la dieta baja en sodio. Un paciente con diarrea y vómitos es un candidato a intoxicación.' },
          { t: 'Toxicidad crónica: riñón, tiroides', d: 'Diabetes insípida nefrogénica',
            say: 'A largo plazo daña el riñón, produce diabetes insípida nefrogénica, con poliuria y sed, e hipotiroidismo.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Intoxicación por litio',
      title: 'Litemia y conducta',
      head: ['Litemia', 'Clínica', 'Conducta'],
      rows: [
        { cells: ['1,5 a 2,0', 'Náuseas, diarrea, temblor fino', 'Suspender litio, hidratar'],
          say: 'Con litemia entre uno coma cinco y dos coma cero: náuseas, vómitos, diarrea, temblor fino y debilidad. Se suspende el litio y se hidrata.' },
        { cells: ['2,0 a 2,5', 'Temblor grosero, ataxia, confusión', 'Hospitalizar; suero fisiológico'],
          say: 'Entre dos y dos coma cinco: temblor grosero, ataxia, disartria, hiperreflexia y confusión. Se suspende el litio, se hospitaliza y se pasa suero fisiológico abundante, que repone volumen y favorece que el riñón elimine el litio.' },
        { cells: ['Más de 2,5', 'Convulsiones, arritmias, coma', 'Hemodiálisis si hay compromiso grave'],
          say: 'Sobre dos coma cinco: convulsiones, arritmias, insuficiencia renal, coma. Se indica hemodiálisis de urgencia si la litemia pasa de cuatro, o si pasa de dos coma cinco con deterioro neurológico o falla renal.' },
        { cells: ['Siempre', 'Diuréticos, carbón activado', 'No sirven'],
          say: 'Y dos errores clásicos: las tiazidas suben el litio, no lo bajan, y el carbón activado no une al litio.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Otros estabilizadores',
      title: 'Valproato, lamotrigina, carbamazepina',
      head: ['Fármaco', 'Rango y control', 'Alerta'],
      rows: [
        { cells: ['Valproato', '50 a 100 µg/mL; hígado, plaquetas', 'Teratogénico: espina bífida'],
          say: 'El valproato sirve en manía disfórica, episodios mixtos y ciclado rápido, con niveles de cincuenta a cien microgramos por mililitro. Exige control del hígado y de las plaquetas, por el riesgo de hepatotoxicidad, trombocitopenia y pancreatitis. Y es muy teratogénico.' },
        { cells: ['Lamotrigina', 'Titulación lenta', 'Rash, Stevens-Johnson'],
          say: 'La lamotrigina previene las fases depresivas. Se titula despacio por el riesgo de rash grave. El valproato duplica su nivel, y la carbamazepina lo reduce a la mitad.' },
        { cells: ['Carbamazepina', '4 a 12 µg/mL', 'Aplasia, hiponatremia, inductor'],
          say: 'La carbamazepina produce aplasia medular, agranulocitosis e hiponatremia, y es un inductor enzimático que baja la eficacia de los anticonceptivos.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Mujer en edad fértil',
      title: 'Valproato y embarazo',
      cards: [
        { title: 'El riesgo', tag: 'Teratogenia', kind: 'alert', items: [
          { t: 'Defectos del tubo neural', d: 'Espina bífida; retraso cognitivo',
            say: 'El valproato es el estabilizador más teratogénico: produce defectos del tubo neural, como espina bífida, malformaciones craneofaciales y deterioro del neurodesarrollo.' },
          { t: 'Evitar en edad fértil', d: 'Salvo anticoncepción rigurosa',
            say: 'Por eso está contraindicado en mujeres en edad fértil sin anticoncepción rigurosa. La carbamazepina tampoco es una alternativa segura.' },
        ] },
        { title: 'La conducta', tag: 'Planificar', kind: 'key', items: [
          { t: 'Cambio planificado, antes del embarazo', d: 'Lamotrigina o antipsicótico atípico',
            say: 'Si la paciente quiere embarazarse, se planifica el cambio gradual, antes de la concepción, a una opción menos teratogénica, como lamotrigina o quetiapina, con ácido fólico en dosis altas.' },
          { t: 'No suspender todo de golpe', d: 'Riesgo alto de recaída',
            say: 'Y no se suspende todo de golpe, porque la recaída maníaca durante el embarazo y el puerperio es grave.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del ánimo elevado al tratamiento.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Un episodio maníaco', 'Bipolar I', 'Exigir depresión previa'],
          say: 'Un solo episodio maníaco ya es bipolar tipo uno, aunque no haya depresión previa.' },
        { cells: ['Psicosis o hospitalización', 'Manía, no hipomanía', 'Llamarlo hipomanía'],
          say: 'Si hay psicosis o hubo hospitalización, es manía.' },
        { cells: ['Euforia tras iniciar ISRS', 'Suspender; es bipolar', 'Subir la dosis'],
          say: 'Si aparece euforia, poco sueño y verborrea tras iniciar un antidepresivo, es un viraje: se suspende el fármaco y se piensa en bipolar.' },
        { cells: ['Depresión en bipolar', 'Quetiapina o lamotrigina', 'ISRS solo'],
          say: 'La depresión de un paciente bipolar no se trata con antidepresivo solo.' },
        { cells: ['Litemia alta con temblor y ataxia', 'Suspender y suero fisiológico', 'Diurético o carbón'],
          say: 'Intoxicación por litio: suspender, hospitalizar e hidratar con suero fisiológico. Hemodiálisis si es grave.' },
        { cells: ['Bipolar que planea embarazo', 'Cambiar valproato antes', 'Mantener valproato'],
          say: 'Y el valproato en una mujer que quiere embarazarse se cambia antes de la concepción.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 24 años, llevado a urgencias por su familia. Desde hace 5 días duerme 1 hora por noche sin cansancio, gastó el dinero de su matrícula en relojes, habla sin pausa saltando de tema y afirma que fue elegido por el gobierno para rediseñar la capital. Está agitado y desinhibido. Toxicológico en orina negativo. A los 20 años tuvo una depresión moderada.',
      question: '¿Cuál es el diagnóstico y la conducta?',
      options: [
        { letter: 'A', text: 'Bipolar II con hipomanía; psicoterapia ambulatoria y sertralina' },
        { letter: 'B', text: 'Bipolar I con manía psicótica; hospitalizar, antipsicótico atípico más estabilizador' },
        { letter: 'C', text: 'Déficit atencional del adulto; metilfenidato' },
        { letter: 'D', text: 'Personalidad esquizoide descompensada; reposo y clonazepam' },
        { letter: 'E', text: 'Depresión psicótica; fluoxetina en dosis altas' },
      ],
      correct: 'B',
      explanation: 'Insomnio sin fatiga, verborrea, fuga de ideas, gasto imprudente y delirio de grandeza: es una manía con psicosis, de 5 días, con riesgo conductual. Eso es bipolar I, y se hospitaliza e inicia antipsicótico atípico más litio o valproato. Los antidepresivos y estimulantes empeoran la manía.',
      say: {
        stem: 'Un hombre de veinticuatro años traído por su familia. Cinco días durmiendo una hora por noche sin cansancio, gastó el dinero de su matrícula en relojes, habla sin pausa saltando de tema, dice que fue elegido por el gobierno para rediseñar la capital, está agitado y desinhibido. El toxicológico es negativo y a los veinte años tuvo una depresión moderada.',
        question: '¿Cuál es el diagnóstico y la conducta?',
        options: 'Las opciones: bipolar dos con hipomanía, psicoterapia y sertralina; bipolar uno con manía psicótica, hospitalizar y antipsicótico más estabilizador; déficit atencional con metilfenidato; personalidad esquizoide con reposo y clonazepam; o depresión psicótica con fluoxetina. Piénsalo.',
        answer: 'Es la B. Los delirios de grandeza ya lo sacan de la hipomanía: es una manía, un episodio basta para bipolar uno, y con psicosis y riesgo se hospitaliza e inicia antipsicótico atípico más litio o valproato. La sertralina y los estimulantes empeoran una manía, y la depresión previa orienta a bipolar, no a depresión psicótica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 82',
      stem: 'Paciente de 35 años con episodios previos de tristeza profunda de 3 semanas de duración. Ahora consulta por irritabilidad, euforia, grandiosidad, insomnio sin cansancio y gastó todos sus ahorros en 4 días. ¿Cuál es el diagnóstico?',
      question: '¿Cuál es el diagnóstico?',
      options: [
        { letter: 'A', text: 'Trastorno bipolar tipo I' },
        { letter: 'B', text: 'Trastorno depresivo mayor recurrente' },
        { letter: 'C', text: 'Trastorno de ansiedad generalizada' },
        { letter: 'D', text: 'Trastorno obsesivo compulsivo' },
        { letter: 'E', text: 'Trastorno de personalidad borderline' },
      ],
      correct: 'A',
      explanation: 'Episodios depresivos previos más un episodio maníaco actual (grandiosidad, euforia, insomnio sin cansancio, gasto impulsivo) es trastorno bipolar tipo I. Un episodio maníaco es suficiente para el diagnóstico.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un paciente de treinta y cinco años con episodios previos de tristeza profunda de tres semanas. Ahora viene con irritabilidad, euforia, grandiosidad, insomnio sin cansancio y gastó todos sus ahorros en cuatro días.',
        question: '¿Cuál es el diagnóstico?',
        options: 'Las opciones: bipolar tipo uno; depresión mayor recurrente; ansiedad generalizada; trastorno obsesivo compulsivo; o personalidad límite. Piénsalo.',
        answer: 'Es la A. Los episodios depresivos previos podrían engañarte hacia una depresión recurrente, pero el episodio actual es una manía, y un episodio maníaco basta para bipolar tipo uno. Esa es la lectura que se pregunta: el polo de elevación manda sobre el depresivo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 114',
      stem: 'Una paciente de 23 años presenta un cuadro de 3 semanas de evolución caracterizado por ánimo bajo, tristeza, disminución de sus actividades, asociado a hipersomnia diurna y aumento de peso de 5 kg en poco tiempo. Además, refiere dificultades de concentración en sus actividades educacionales. Tiene antecedentes de tres episodios similares en los últimos años y su hermana refiere que también ha presentado dos episodios en los cuales ha tenido periodos con mucho ánimo y aumento de la energía, incurriendo en gastos excesivos y desarrollando múltiples proyectos. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Trastorno de personalidad histriónico' },
        { letter: 'B', text: 'Trastorno afectivo bipolar' },
        { letter: 'C', text: 'Trastorno por déficit atencional hiperactivo' },
        { letter: 'D', text: 'Trastorno de personalidad limítrofe' },
        { letter: 'E', text: 'Depresión atípica' },
      ],
      correct: 'B',
      explanation: 'El episodio actual parece una depresión atípica (hipersomnia, aumento de peso), pero hubo dos períodos de ánimo elevado, mucha energía, gastos excesivos y múltiples proyectos. Eso apunta a trastorno afectivo bipolar. En la depresión bipolar se usan antipsicóticos atípicos, no antidepresivos solos.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Una paciente de veintitrés años con tres semanas de ánimo bajo, hipersomnia y aumento de cinco kilos, con dificultad para concentrarse. Ha tenido tres episodios parecidos, y su hermana cuenta que también tuvo dos períodos de mucho ánimo y energía, con gastos excesivos y muchos proyectos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: personalidad histriónica; trastorno afectivo bipolar; déficit atencional; personalidad límite; o depresión atípica. Piénsalo.',
        answer: 'Es la B. La depresión con hipersomnia y aumento de peso te tienta a pensar en depresión atípica, pero los períodos de ánimo elevado, mucha energía y gasto excesivo son hipomanías o manías. Por eso, antes de dar un antidepresivo a una depresión, siempre se pregunta por esos episodios, a la paciente y a la familia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 130',
      stem: 'Un paciente de 27 años presenta ánimo bajo, anhedonia y desconcentración, asociado a baja de peso y dificultades para dormir, por lo que se le indica tratamiento con sertralina 50 mg al día. Evoluciona con clara mejoría de los síntomas, sin embargo, su pareja refiere que anda más irritable, ha aumentado el gasto de dinero y ha iniciado nuevos proyectos. Suspende el medicamento, persistiendo con disminución de los requerimientos de sueño, irritabilidad y verborrea. ¿Qué fármaco es más adecuado para su manejo actual?',
      question: '¿Qué fármaco es más adecuado para su manejo actual?',
      options: [
        { letter: 'A', text: 'Sertralina' },
        { letter: 'B', text: 'Mirtazapina' },
        { letter: 'C', text: 'Bupropión' },
        { letter: 'D', text: 'Diazepam' },
        { letter: 'E', text: 'Quetiapina' },
      ],
      correct: 'E',
      explanation: 'Viró a una hipomanía en el contexto de un trastorno bipolar no diagnosticado. Están contraindicados todos los antidepresivos (sertralina, mirtazapina, bupropión). El tratamiento de elección es un antipsicótico atípico, como la quetiapina.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Un hombre de veintisiete años con depresión recibe sertralina, cincuenta miligramos. Mejora, pero su pareja nota que está más irritable, gasta más dinero y parte nuevos proyectos. Suspende el medicamento, y persiste con menos necesidad de sueño, irritabilidad y verborrea.',
        question: '¿Qué fármaco es más adecuado para su manejo actual?',
        options: 'Las opciones: sertralina; mirtazapina; bupropión; diazepam; o quetiapina. Piénsalo.',
        answer: 'Es la E. La mejoría con un antidepresivo seguida de irritabilidad, gasto y poca necesidad de sueño es un viraje a hipomanía, y revela un trastorno bipolar no diagnosticado. Por eso todos los antidepresivos, no solo la sertralina, quedan descartados. El tratamiento es un antipsicótico atípico, como la quetiapina, y el diazepam no trata la hipomanía.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 92',
      stem: 'Paciente con trastorno bipolar tipo I presenta episodio de manía aguda con agitación, desinhibición y grandiosidad. ¿Cuál es el tratamiento de elección en fase aguda?',
      question: '¿Cuál es el tratamiento de elección en fase aguda?',
      options: [
        { letter: 'A', text: 'Litio + antipsicótico atípico (quetiapina u olanzapina)' },
        { letter: 'B', text: 'Solo antidepresivos ISRS' },
        { letter: 'C', text: 'Benzodiacepinas en monoterapia' },
        { letter: 'D', text: 'Lamotrigina en dosis progresiva' },
        { letter: 'E', text: 'Ácido valproico en monoterapia oral' },
      ],
      correct: 'A',
      explanation: 'Manía aguda: tratamiento combinado con un estabilizador del ánimo (litio o ácido valproico) más un antipsicótico atípico para controlar rápido los síntomas. Litio más quetiapina es un esquema estándar.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un paciente con trastorno bipolar tipo uno presenta una manía aguda, con agitación, desinhibición y grandiosidad.',
        question: '¿Cuál es el tratamiento de elección en fase aguda?',
        options: 'Las opciones: litio más antipsicótico atípico; solo antidepresivos; benzodiacepinas solas; lamotrigina; o valproato solo. Piénsalo.',
        answer: 'Es la A. En manía aguda se combina un estabilizador, litio o valproato, con un antipsicótico atípico que controla rápido la agitación. Los antidepresivos empeoran la manía, las benzodiacepinas solas no tratan la enfermedad, y la lamotrigina es para prevenir fases depresivas y se sube muy lento.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2022 · Pregunta 120',
      stem: 'Un paciente de 20 años, con diagnóstico de trastorno bipolar, en tratamiento con risperidona y litio, desde hace 3 meses, consulta por un cuadro de una semana de evolución de náuseas, malestar general y tendencia al sopor. Al examen físico se constata desorientado, con temblor de extremidades superiores. Se solicitan exámenes, entre los que destaca litemia de 2,2 mEq/L (rango normal: 0,6 a 1,2 mEq/L) y creatininemia: 1,3 mg/dl. ¿Cuál es la conducta inicial más adecuada?',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Plasmaféresis' },
        { letter: 'B', text: 'Hemodiálisis' },
        { letter: 'C', text: 'Alcalinizar la orina' },
        { letter: 'D', text: 'Administrar suero fisiológico endovenoso' },
        { letter: 'E', text: 'Diazepam endovenoso' },
      ],
      correct: 'D',
      explanation: 'Intoxicación moderada por litio (litemia 2,2, temblor, desorientación). Se suspende el litio y se hidrata con suero fisiológico endovenoso. La hemodiálisis se reserva para formas graves.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veintidós. Un paciente de veinte años, bipolar, con risperidona y litio hace tres meses. Una semana con náuseas, malestar y tendencia al sopor. Está desorientado, con temblor en los brazos. La litemia es dos coma dos, con un rango normal de cero coma seis a uno coma dos, y la creatinina uno coma tres.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: plasmaféresis; hemodiálisis; alcalinizar la orina; suero fisiológico endovenoso; o diazepam endovenoso. Piénsalo.',
        answer: 'Es la D. Es una intoxicación moderada: litemia entre dos y dos coma cinco, con temblor y confusión. Se suspende el litio y se hidrata con suero fisiológico, que repone volumen y ayuda al riñón a eliminar el litio. La hemodiálisis se reserva para la litemia muy alta, o mayor de dos coma cinco con compromiso neurológico o renal grave.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Mujer de 26 años con trastorno bipolar tipo I bien controlado, que desea planificar un embarazo. Está en tratamiento con ácido valproico 1.000 mg/día, con niveles estables de 75 µg/mL.',
      question: '¿Cuál es la conducta más adecuada respecto a su farmacoterapia?',
      options: [
        { letter: 'A', text: 'Mantener el ácido valproico a la misma dosis' },
        { letter: 'B', text: 'Reemplazar el ácido valproico por carbamazepina' },
        { letter: 'C', text: 'Planificar el cambio gradual a un estabilizador menos teratogénico (lamotrigina o quetiapina) y suplementar ácido fólico en dosis altas' },
        { letter: 'D', text: 'Suspender todos los fármacos durante todo el embarazo' },
        { letter: 'E', text: 'Agregar litio al valproato para proteger al feto' },
      ],
      correct: 'C',
      explanation: 'El valproato es el estabilizador más teratogénico (defectos del tubo neural, malformaciones, deterioro del neurodesarrollo). Antes del embarazo se cambia, de forma gradual y planificada, a un fármaco de mejor perfil, con ácido fólico en dosis altas. La carbamazepina también es teratogénica, y suspender todo expone a una recaída maníaca grave.',
      say: {
        stem: 'Una mujer de veintiséis años con trastorno bipolar tipo uno bien controlado, que quiere planificar un embarazo. Toma ácido valproico, mil miligramos al día, con niveles estables de setenta y cinco microgramos por mililitro.',
        question: '¿Cuál es la conducta más adecuada respecto a su farmacoterapia?',
        options: 'Las opciones: mantener el valproico; reemplazarlo por carbamazepina; planificar el cambio gradual a lamotrigina o quetiapina con ácido fólico; suspender todo; o agregar litio. Piénsalo.',
        answer: 'Es la C. El valproato es el estabilizador más teratogénico, así que antes de la concepción se pasa, de forma gradual, a un fármaco de mejor perfil, con ácido fólico en dosis altas. La carbamazepina también es teratogénica, y suspender todo expone a una recaída maníaca grave en el embarazo y el puerperio.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: trastorno bipolar',
      cards: [
        { title: 'Diagnóstico', tag: 'Manía o hipomanía', kind: 'key', items: [
          { t: 'Un episodio maníaco: bipolar I', d: 'Manía: 7 días, psicosis o deterioro',
            say: 'Cerremos con las reglas de oro. Un solo episodio maníaco es bipolar tipo uno. La manía dura siete días o necesita hospitalización, y si hay psicosis es manía. La hipomanía dura cuatro días y nunca tiene psicosis.' },
          { t: 'Siempre preguntar por euforia previa', d: 'Antes de diagnosticar depresión',
            say: 'Antes de dar un antidepresivo, pregunta por euforia previa, poco sueño y gasto excesivo, en el paciente y en la familia.' },
        ] },
        { title: 'Conducta', tag: 'Tratamiento', kind: 'alert', items: [
          { t: 'Manía: antipsicótico más estabilizador', d: 'Nunca antidepresivo solo',
            say: 'La manía se trata con antipsicótico atípico más litio o valproato, y se hospitaliza si hay psicosis o riesgo. Nunca un antidepresivo solo en un paciente bipolar.' },
          { t: 'Litio: litemia y toxicidad', d: 'Valproato: evitar si hay embarazo',
            say: 'El litio se vigila con litemia, y la intoxicación se maneja con suspensión e hidratación, con hemodiálisis si es grave. El valproato se evita en la mujer que planea un embarazo. Si te llevas una sola idea de hoy: ante una depresión, descarta primero una manía, porque el antidepresivo solo puede desatarla. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Trastorno bipolar: de la elevación del ánimo al tratamiento',
    root: N('start', 'Ánimo elevado o irritable', 'Poco sueño, mucha energía',
      'Un paciente con ánimo elevado o irritable, menos necesidad de dormir y más energía. Lo primero es decidir si es manía o hipomanía.',
      ['Siempre', N('q', '¿Psicosis o necesidad de hospitalizar?', 'Duración y deterioro',
        'Se evalúa si hay delirios, deterioro grave o riesgo para sí mismo o terceros, y cuánto dura.',
        ['Sí: manía, bipolar I', N('refer', 'Hospitalización protegida', 'Antipsicótico atípico más litio o valproato',
          'Manía aguda es una urgencia: hospitalización psiquiátrica, antipsicótico atípico más litio o valproato, y se suspende cualquier antidepresivo.',
          ['Con litio', N('do', 'Litemia, riñón y tiroides', 'Meta 0,6 a 1,0 en mantención',
            'Si se usa litio, se mide la litemia a las doce horas, se controlan riñón y tiroides, y se evitan antiinflamatorios, tiazidas e inhibidores de la enzima convertidora.')])],
        ['No: hipomanía, 4 días', N('ok', 'Bipolar II si hubo depresión', 'Quetiapina o estabilizador',
          'Si es funcional y dura al menos cuatro días, es hipomanía. Con un episodio depresivo mayor previo, es bipolar dos.',
          ['Depresión bipolar', N('alert', 'Sin antidepresivo en monoterapia', 'Quetiapina, lurasidona o lamotrigina',
            'En la fase depresiva se usa quetiapina, lurasidona, cariprazina, olanzapina con fluoxetina o lamotrigina, nunca un antidepresivo solo.')])],
      )],
    ),
  },
};
