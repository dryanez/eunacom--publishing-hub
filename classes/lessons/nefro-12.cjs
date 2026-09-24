// Clase 3.4 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_nefrologia.cjs (nefro-12, bloque 3).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'nefro-12',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'El cloro urinario decide: suero fisiológico o buscar un exceso de aldosterona',
      say: 'Bienvenidos. En la clase anterior vimos la acidosis metabólica; hoy vamos al trastorno opuesto, la alcalosis metabólica, y cerramos con los trastornos mixtos. Toda la clase gira en torno a un examen barato, el cloro urinario, que te dice si la alcalosis se cura con suero fisiológico o si hay un exceso de aldosterona detrás.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Generar y mantener: dos cosas distintas',
      nodes: [
        { id: 'def', col: 0, row: 1, k: 'start', t: 'pH > 7,45 · HCO3 > 28', s: 'Alcalosis metabólica' },
        { id: 'gen', col: 1, row: 0, k: 'cause', t: 'Factor generador', s: 'Pérdida de H+ o ganancia de HCO3' },
        { id: 'man', col: 1, row: 2, k: 'cause', t: 'Factor de mantención', s: 'Volumen bajo, hipocloremia, hipokalemia' },
        { id: 'rin', col: 2, row: 2, k: 'mech', t: 'El riñón no bota el HCO3', s: 'La alcalosis se perpetúa' },
        { id: 'hip', col: 3, row: 0, k: 'effect', t: 'Hipoventilación compensatoria', s: 'ΔpCO2 = 0,7 × ΔHCO3' },
        { id: 'tec', col: 3, row: 1, k: 'risk', t: 'Techo de pCO2: 55 mmHg', s: 'La hipoxemia frena la hipoventilación' },
      ],
      edges: [
        { from: 'def', to: 'gen' }, { from: 'def', to: 'man' }, { from: 'man', to: 'rin' },
        { from: 'gen', to: 'hip', label: 'pulmón' }, { from: 'hip', to: 'tec' },
      ],
      steps: [
        { show: ['def'], note: 'El espejo de la acidosis',
          say: 'La alcalosis metabólica es el espejo de lo que vimos la clase pasada: pH sobre siete coma cuarenta y cinco y bicarbonato sobre veintiocho miliequivalentes por litro.' },
        { show: ['gen'], note: 'Algo sube el bicarbonato',
          say: 'Para que exista necesitas dos cosas. Primero, un factor generador: se pierden protones, como en el vómito, o se gana bicarbonato.' },
        { show: ['man', 'rin'], note: 'Algo impide botarlo',
          say: 'Pero un riñón sano botaría ese exceso de bicarbonato en horas. Por eso se necesita un segundo factor, de mantención: depleción de volumen, hipocloremia o hipokalemia, que impiden al riñón excretar el bicarbonato. Y esta idea es la clave del tratamiento: si corriges la mantención, el riñón cura la alcalosis solo.' },
        { show: ['hip'], note: 'El pulmón retiene CO2',
          say: 'El pulmón compensa al revés que en la acidosis: hipoventila para retener CO dos. La presión de CO dos sube cero coma siete por cada miliequivalente que sube el bicarbonato.' },
        { show: ['tec'], note: 'La compensación tiene techo',
          say: 'Pero esa compensación tiene techo: rara vez supera los cincuenta y cinco milímetros de mercurio, porque si el paciente hipoventila demasiado se pone hipoxémico, y la hipoxemia vuelve a estimular la respiración.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: '¿Qué le pasa al paciente alcalótico?',
      cards: [
        { title: 'Calcio iónico bajo', tag: 'Lo que más se ve', kind: 'alert', items: [
          { t: 'Parestesias, irritabilidad', d: 'Periorales y en las manos',
            say: 'Veamos la clínica. Al subir el pH, la albúmina captura más calcio, y baja el calcio ionizado aunque el calcio total esté normal. El paciente tiene parestesias, sobre todo periorales, e irritabilidad neuromuscular.' },
          { t: 'Chvostek, Trousseau, tetania', d: 'Espasmo carpopedal',
            say: 'Y puede llegar a los signos de Chvostek y Trousseau, y a la tetania con espasmo carpopedal. Es el mismo mecanismo que vimos como riesgo del bicarbonato en la clase anterior.' },
        ] },
        { title: 'Potasio y corazón', tag: 'Hipokalemia', kind: 'criteria', items: [
          { t: 'Hipokalemia por redistribución', d: 'Y arritmias',
            say: 'Además, la alcalosis mete potasio a la célula, así que se acompaña de hipokalemia, con debilidad y riesgo de arritmias. Es la redistribución que vimos en la clase de hipokalemia.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico',
      title: 'El cloro urinario separa dos mundos',
      nodes: [
        { id: 'clu', col: 0, row: 2, k: 'q', t: 'Cloro urinario', s: 'El examen de elección' },
        { id: 'sen', col: 1, row: 0, k: 'good', t: 'Clu < 20: sensible a cloro', s: 'VEC bajo, hipotensión' },
        { id: 'vom', col: 2, row: 0, k: 'cause', t: 'Vómitos, SNG, diuréticos pasados', s: 'Pérdida de HCl' },
        { id: 'res', col: 1, row: 3, k: 'risk', t: 'Clu > 20: resistente a cloro', s: 'VEC normal o alto' },
        { id: 'hta', col: 2, row: 2, k: 'cause', t: 'Con HTA', s: 'Conn, Cushing, estenosis renal' },
        { id: 'pan', col: 2, row: 4, k: 'cause', t: 'Con PA normal', s: 'Bartter, Gitelman' },
      ],
      edges: [
        { from: 'clu', to: 'sen', label: '< 20' }, { from: 'sen', to: 'vom' },
        { from: 'clu', to: 'res', label: '> 20' }, { from: 'res', to: 'hta' }, { from: 'res', to: 'pan' },
      ],
      steps: [
        { show: ['clu'], note: 'Un examen de orina decide la conducta',
          say: 'Ahora, el examen clave. Frente a una alcalosis metabólica, pides el cloro urinario. Te dice si el riñón está ávido de cloro y volumen, o si lo está botando.' },
        { show: ['sen'], note: 'El riñón retiene todo el cloro',
          say: 'Si el cloro urinario es menor de veinte miliequivalentes por litro, el riñón está reteniendo todo el cloro que puede: hay depleción de volumen e hipocloremia. Es la alcalosis sensible a cloro, o salino responsiva.' },
        { show: ['vom'], note: 'El vómito es la causa estelar',
          say: 'La causa estelar es la pérdida gástrica de ácido clorhídrico: vómitos repetidos, una estenosis pilórica, o una sonda nasogástrica abierta. También los diuréticos tiazídicos o de asa, una vez que se suspenden.' },
        { show: ['res'], note: 'El riñón bota cloro: el volumen no es el problema',
          say: 'Si el cloro urinario es mayor de veinte, el volumen está normal o expandido. Es la alcalosis resistente a cloro: aquí el suero fisiológico no la va a corregir.' },
        { show: ['hta'], note: 'Con hipertensión: exceso mineralocorticoide',
          say: 'Y la presión arterial vuelve a separar, igual que en la hipokalemia. Con hipertensión, piensa en exceso de mineralocorticoides: hiperaldosteronismo primario o síndrome de Conn, Cushing, o estenosis de la arteria renal.' },
        { show: ['pan'], note: 'Con presión normal: tubulopatías',
          say: 'Con presión normal, las tubulopatías genéticas: el síndrome de Bartter, que afecta el asa, y el de Gitelman, que afecta el túbulo distal.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Tratar según el cloro urinario',
      cards: [
        { title: 'Sensible a cloro', tag: 'Clu < 20', kind: 'pharma', items: [
          { t: 'Suero fisiológico 0,9% + KCl', d: 'Hay que aportar cloro',
            say: 'El tratamiento sigue la misma división. En la alcalosis sensible a cloro, suero fisiológico al cero coma nueve por ciento con cloruro de potasio. Fíjate en la palabra cloro: sin aportar cloro, la alcalosis no se cura.' },
          { t: 'El cloro deja botar el HCO3', d: 'Intercambio por pendrina en el colector',
            say: '¿Por qué el cloro? Porque en el túbulo colector, el transportador llamado pendrina intercambia bicarbonato por cloro. Si le das cloro, el riñón puede botar bicarbonato en la orina y el pH se normaliza.' },
        ] },
        { title: 'Resistente a cloro', tag: 'Clu > 20', kind: 'alert', items: [
          { t: 'Con HTA: espironolactona', d: 'O cirugía del adenoma',
            say: 'En la resistente con hipertensión, el problema es la aldosterona: se usa espironolactona, o se corrige la causa, como la cirugía del adenoma suprarrenal.' },
          { t: 'Bartter y Gitelman', d: 'Suplementos de potasio y magnesio',
            say: 'Y en Bartter y Gitelman, suplementos de potasio y magnesio.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Vómitos',
      title: '¿Por qué el vómito se perpetúa?',
      nodes: [
        { id: 'hcl', col: 0, row: 1, k: 'cause', t: 'Pérdida de HCl gástrico', s: 'Queda HCO3 sin amortiguar' },
        { id: 'vol', col: 1, row: 1, k: 'mech', t: 'Hipovolemia e hipocloremia', s: 'Se activa la aldosterona' },
        { id: 'ald', col: 2, row: 1, k: 'mech', t: 'Reabsorbe Na, secreta H+ y K+', s: 'Aciduria paradójica' },
        { id: 'res', col: 3, row: 0, k: 'effect', t: 'Alcalosis + hipokalemia', s: 'Hipoclorémica' },
        { id: 'tx', col: 3, row: 2, k: 'good', t: 'SF 0,9% + KCl', s: 'Restaurar cloro y volemia' },
      ],
      edges: [
        { from: 'hcl', to: 'vol' }, { from: 'vol', to: 'ald' }, { from: 'ald', to: 'res' }, { from: 'res', to: 'tx', label: 'se corrige con' },
      ],
      steps: [
        { show: ['hcl'], note: 'Se va el ácido, queda la base',
          say: 'Veamos el ejemplo más preguntado, el paciente que vomita. Pierde ácido clorhídrico, y el bicarbonato que el estómago generó queda en la sangre sin amortiguar.' },
        { show: ['vol', 'ald'], note: 'El riñón prioriza el volumen',
          say: 'Además pierde volumen y cloro. La aldosterona se activa y el riñón reabsorbe sodio a toda costa, pero a cambio secreta protones y potasio en la orina. Por eso la orina puede ser ácida en plena alcalosis: es la aciduria paradójica.' },
        { show: ['res'], note: 'El círculo vicioso',
          say: 'El resultado es una alcalosis hipoclorémica e hipokalémica, que el riñón mantiene porque está priorizando el volumen sobre el pH.' },
        { show: ['tx'], note: 'Romper el círculo',
          say: 'Y la salida es devolver lo que falta: volumen, cloro y potasio. Suero fisiológico con cloruro de potasio. Apenas el riñón recupera volumen y cloro, deja de retener bicarbonato.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Trastornos mixtos',
      title: '¿Hay uno o dos trastornos?',
      cards: [
        { title: 'El método', tag: 'Compensación esperada', kind: 'key', items: [
          { t: 'Calcular la pCO2 esperada', d: 'Acidosis: Winter · alcalosis: 0,7 × ΔHCO3',
            say: 'Cerremos el bloque con los trastornos mixtos. La herramienta es siempre la misma: calcular cuánto debería compensar el pulmón. En la acidosis usas Winter; en la alcalosis, la regla del cero coma siete.' },
          { t: 'Fuera de lo esperado: segundo trastorno', d: 'Mayor: acidosis resp. · menor: alcalosis resp.',
            say: 'Si la presión de CO dos medida no calza con la esperada, hay un segundo trastorno respiratorio. Si está más alta de lo esperado, se agrega una acidosis respiratoria; si está más baja, una alcalosis respiratoria.' },
        ] },
        { title: 'Pistas', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: 'pH normal no descarta', d: 'Dos trastornos pueden anularse',
            say: 'Y una pista que se pregunta: un pH normal no descarta un trastorno. Si tienes un bicarbonato muy alterado con pH normal, probablemente hay dos trastornos que se están anulando. Lo vas a ver en la pregunta real que viene.' },
          { t: 'Salicilatos: ejemplo clásico', d: 'Acidosis metabólica + alcalosis respiratoria',
            say: 'El ejemplo clásico que vimos en la clase anterior es la intoxicación por salicilatos: acidosis metabólica con una alcalosis respiratoria precoz.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un árbol de decisión para la alcalosis metabólica.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Vómitos, Clu < 20', 'SF 0,9% + KCl', 'Acetazolamida o ácido clorhídrico'],
          say: 'Repasemos las trampas. Vómitos con cloro urinario bajo veinte: suero fisiológico con cloruro de potasio. Las alternativas exóticas, como acetazolamida o ácido clorhídrico, son distractores.' },
        { cells: ['Alcalosis sensible a cloro', 'Aportar cloro', 'Suero glucosado'],
          say: 'Si la alcalosis es sensible a cloro, necesita cloro. Un suero glucosado no trae cloro y no la corrige.' },
        { cells: ['HTA + hipokalemia + Clu > 20', 'Hiperaldosteronismo primario', 'Pensar en vómitos ocultos'],
          say: 'Hipertensión, hipokalemia y cloro urinario alto: hiperaldosteronismo primario. Los vómitos ocultos darían cloro urinario bajo.' },
        { cells: ['Clu > 20 con PA normal', 'Bartter o Gitelman', 'Llamarla sensible a cloro'],
          say: 'Cloro urinario alto con presión normal: Bartter o Gitelman.' },
        { cells: ['Parestesias y Trousseau con alcalosis', 'Calcio iónico bajo por el pH', 'Buscar solo hipocalcemia total'],
          say: 'Y las parestesias o el Trousseau en una alcalosis se explican por el calcio iónico bajo, aunque el calcio total esté normal.' },
        { cells: ['pH normal con HCO3 muy alterado', 'Buscar un trastorno mixto', 'Informar gases normales'],
          say: 'Por último, un pH normal con bicarbonato muy alterado es un trastorno mixto, no unos gases normales.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 38 años con úlcera duodenal estenosante, con 5 días de vómitos profusos tras cada ingesta, debilidad y calambres periorales. PA 95/60 mmHg con ortostatismo, FC 110 lpm, mucosas muy secas. pH 7,54, pCO2 48 mmHg, HCO3 42 mEq/L, Na 135, Cl 82, K 2,6 mEq/L. Cloro urinario: 8 mEq/L.',
      question: '¿Cuál es la conducta prioritaria?',
      options: [
        { letter: 'A', text: 'Espironolactona oral' },
        { letter: 'B', text: 'Suero fisiológico 0,9% IV con cloruro de potasio' },
        { letter: 'C', text: 'Suero glucosado al 5% IV' },
        { letter: 'D', text: 'Acetazolamida IV' },
        { letter: 'E', text: 'Solicitar aldosterona y renina plasmáticas' },
      ],
      correct: 'B',
      explanation: 'Alcalosis metabólica hipoclorémica e hipokalémica por vómitos (síndrome pilórico), con cloro urinario < 20: sensible a cloro. La conducta es SF 0,9% con KCl para restaurar cloro y volemia. La espironolactona y el estudio de aldosterona corresponden a la alcalosis resistente a cloro con HTA.',
      say: {
        stem: 'Vamos al caso. Hombre de treinta y ocho años con una úlcera duodenal estenosante y cinco días de vómitos profusos después de cada comida. Tiene debilidad y calambres periorales. Está hipotenso, con ortostatismo, taquicárdico y muy deshidratado. pH siete coma cincuenta y cuatro, bicarbonato cuarenta y dos, cloro ochenta y dos, potasio dos coma seis, y cloro urinario de ocho.',
        question: '¿Cuál es la conducta prioritaria?',
        options: 'Las opciones: espironolactona, suero fisiológico con cloruro de potasio, suero glucosado, acetazolamida, o pedir aldosterona y renina. Piénsalo.',
        answer: 'Es la B. Es una alcalosis hipoclorémica e hipokalémica por un síndrome pilórico, y el cloro urinario de ocho confirma que es sensible a cloro. Suero fisiológico con cloruro de potasio. Los calambres periorales son el calcio iónico bajo por la alcalosis. El distractor es la espironolactona, o pedir aldosterona: eso es para la alcalosis resistente con hipertensión, y este paciente está hipotenso con el cloro urinario bajo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 147',
      stem: "Una paciente de 78 años, con antecedente de hipertensión arterial, en tratamiento con hidroclorotiazida, presenta un cuadro de diarrea y vómitos, seguido de compromiso de conciencia. Al examen físico está en sopor profundo, con PA: 80/50 y frecuencia cardiaca de 120x', regular, con sequedad de mucosas. Se solicitan exámenes de laboratorio que muestran natremia: 156. mEq/L, cloremia: 114 mEq/L, potasemia: 3,1 mEq/L, pH: 7,40, bicarbonato: 14 mmol/L, CO2: 20 mmHg.",
      question: '¿Cuál de los siguientes fluidos se debe administrar en primer lugar?',
      options: [
        { letter: 'A', text: 'Suero glucosado al 5% ev' },
        { letter: 'B', text: 'Suero fisiológico al 0,9% ev' },
        { letter: 'C', text: 'Solución de bicarbonato al 2/3 molar ev' },
        { letter: 'D', text: 'Agua por sonda nasogástrica' },
        { letter: 'E', text: 'Sales de rehidratación oral' },
      ],
      correct: 'B',
      explanation: 'Shock hipovolémico con deshidratación hipertónica: primero se corrige la volemia con suero fisiológico y después la natremia. Los gases esconden un trastorno mixto: HCO3 14 con pH 7,40; Winter predice pCO2 de 27 a 31 y la medida es 20, así que hay acidosis metabólica con alcalosis respiratoria agregada. El bicarbonato no está indicado.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil dieciséis. Paciente de setenta y ocho años, hipertensa, usuaria de hidroclorotiazida, con diarrea y vómitos, que llega en sopor profundo, con presión de ochenta cincuenta y frecuencia de ciento veinte. Sodio ciento cincuenta y seis, cloro ciento catorce, potasio tres coma uno, pH siete coma cuarenta, bicarbonato catorce y CO dos de veinte.',
        question: '¿Cuál de los siguientes fluidos se debe administrar en primer lugar?',
        options: 'Las opciones: suero glucosado, suero fisiológico, bicarbonato dos tercios molar, agua por sonda, o sales de rehidratación oral. Piénsalo.',
        answer: 'Es la B, suero fisiológico. La paciente está en shock, y en el shock primero se repone la volemia con un cristaloide; la natremia se corrige después. El glucosado tienta por el sodio alto, pero no sostiene la presión. Y fíjate en los gases: un pH normal con bicarbonato de catorce. Winter predice una presión de CO dos de veintisiete a treinta y uno, y es veinte. Es un trastorno mixto, y el bicarbonato no está indicado.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 31',
      stem: "Un paciente de 70 años, diabético tipo 2 e hipertenso, en tratamiento con metformina, losartán e hidroclorotiazida, presenta un cuadro de 4 días de vómitos alimentarios y diarrea, evolucionando con malestar general y disminución del volumen urinario. Al examen físico está bradipsíquico, con presión arterial de 100/50 mmHg, frecuencia cardíaca de 110x'. En sus exámenes de laboratorio destaca creatinina: 2,0 mg/dl, BUN: 78 mg/dl, FeNa: 0,5%, sodio: 130 mEq/L, potasio: 2,0 mEq/L y cloro: 110 mEq/L.",
      question: '¿Qué fluido debe administrarse inicialmente?',
      options: [
        { letter: 'A', text: 'Solución glucosada al 5%' },
        { letter: 'B', text: 'Solución ringer lactato' },
        { letter: 'C', text: 'Albúmina al 5%' },
        { letter: 'D', text: 'Solución glucosalina isotónica' },
        { letter: 'E', text: 'Solución de bicarbonato al 2/3 molar' },
      ],
      correct: 'B',
      explanation: 'Hipovolemia con falla prerrenal (FeNa 0,5%) por vómitos, diarrea y tiazida: lo primero es reponer volumen con un cristaloide isotónico. Sin suero fisiológico entre las opciones, el Ringer lactato es la elección, y además aporta algo de potasio. El KCl se agrega en paralelo, sin glucosa como vehículo.',
      say: {
        stem: 'Otra pregunta real del mismo examen, julio de dos mil dieciséis. Paciente de setenta años, diabético e hipertenso, con metformina, losartán e hidroclorotiazida, que tiene cuatro días de vómitos y diarrea, con menos orina. Está bradipsíquico, con presión de cien cincuenta y taquicárdico. Creatinina de dos, nitrógeno ureico de setenta y ocho, fracción excretada de sodio de cero coma cinco por ciento, sodio ciento treinta, potasio dos y cloro ciento diez.',
        question: '¿Qué fluido debe administrarse inicialmente?',
        options: 'Las opciones: glucosado, Ringer lactato, albúmina, glucosalino isotónico, o bicarbonato. Piénsalo.',
        answer: 'Es la B, Ringer lactato. Está hipovolémico, con una falla prerrenal, y lo primero es el volumen con un cristaloide isotónico. El suero fisiológico no está entre las opciones, y el Ringer además trae algo de potasio. El potasio de dos se repone en paralelo, y recuerda la clase anterior: nunca con glucosa como vehículo. El bicarbonato no tiene indicación.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Cloro urinario', kind: 'key', items: [
          { t: 'Clu < 20: sensible a cloro', d: 'Vómitos, SNG, diuréticos pasados',
            say: 'Cerremos con las reglas de oro. Cloro urinario bajo veinte es una alcalosis sensible a cloro: vómitos, sonda nasogástrica o diuréticos ya suspendidos.' },
          { t: 'Clu > 20 con HTA: Conn', d: 'Con PA normal: Bartter o Gitelman',
            say: 'Cloro urinario sobre veinte con hipertensión es un exceso de aldosterona como el Conn; con presión normal, Bartter o Gitelman.' },
        ] },
        { title: 'Tratamiento', tag: 'Dar cloro', kind: 'pharma', items: [
          { t: 'SF 0,9% + KCl', d: 'Sin cloro no se cura',
            say: 'La sensible a cloro se trata con suero fisiológico y cloruro de potasio, y la resistente con hipertensión, con espironolactona o cirugía.' },
        ] },
        { title: 'Trastornos mixtos', tag: 'Compensación', kind: 'alert', items: [
          { t: 'Calcular siempre la compensación', d: 'pH normal no descarta',
            say: 'Y en todo gas, calcula la compensación esperada: si no calza, hay dos trastornos, aunque el pH sea normal. Con esto cerramos el bloque de potasio y ácido base; en la próxima clase entramos a las glomerulopatías. Si te llevas una sola idea de hoy: en la alcalosis metabólica, el cloro urinario decide si basta el suero fisiológico. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Alcalosis metabólica: el cloro urinario decide',
    root: N('start', 'pH > 7,45 y HCO3 > 28', 'Alcalosis metabólica',
      'Tienes un pH alto con bicarbonato alto: alcalosis metabólica. Revisa la compensación y pide el examen clave.',
      ['', N('q', '¿Cloro urinario < 20 mEq/L?', 'El examen de elección',
        'La pregunta es una sola: ¿el cloro urinario está bajo veinte?',
        ['SÍ', N('ok', 'Sensible a cloro', 'Vómitos, SNG, diuréticos · SF 0,9% + KCl',
          'Si está bajo veinte, es sensible a cloro: vómitos, sonda nasogástrica o diuréticos suspendidos. Suero fisiológico con cloruro de potasio.')],
        ['NO', N('q', '¿Hipertensión arterial?', 'Resistente a cloro',
          'Si está sobre veinte, es resistente a cloro, y el suero no la va a corregir. ¿El paciente es hipertenso?',
          ['SÍ', N('refer', 'Exceso de mineralocorticoides', 'Conn, Cushing, estenosis renal · espironolactona',
            'Con hipertensión, busca un exceso de mineralocorticoides: Conn, Cushing o estenosis de la arteria renal. Espironolactona o corrección quirúrgica.')],
          ['NO', N('do', 'Bartter o Gitelman', 'Suplementos de K y Mg',
            'Con presión normal, piensa en Bartter o Gitelman, y suplementa potasio y magnesio.')])])]),
  },
};
