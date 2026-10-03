// Clase 5.5 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_nefrologia.cjs (nefro-22).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'nefro-22',
  tier: 1,
  slides: [
    {
      type: 'cover',
      subtitle: 'Los cortes de filtración que cambian la receta y cómo proteger el riñón del contraste',
      say: 'Bienvenidos a la última clase de nefrología. Hoy vemos algo muy práctico: cómo ajustar fármacos cuando el riñón falla, y cómo evitar dañarlo nosotros mismos. Es daño evitable, y el examen lo pregunta con números concretos: el corte de filtración de la metformina y la forma de prevenir la nefropatía por contraste. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Metformina',
      title: 'Por qué la metformina se vuelve peligrosa',
      nodes: [
        { id: 'tfg', col: 0, row: 1, k: 'cause', t: 'TFG que cae', s: 'La metformina se elimina intacta por el riñón' },
        { id: 'acu', col: 1, row: 1, k: 'mech', t: 'Se acumula', s: 'Inhibe el complejo I mitocondrial' },
        { id: 'glu', col: 2, row: 1, k: 'mech', t: 'Se bloquea la gluconeogénesis', s: 'El hígado no consume lactato' },
        { id: 'mala', col: 3, row: 1, k: 'alert', t: 'Acidosis láctica (MALA)', s: 'Mortalidad > 40 %' },
      ],
      edges: [
        { from: 'tfg', to: 'acu' }, { from: 'acu', to: 'glu' }, { from: 'glu', to: 'mala' },
      ],
      steps: [
        { show: ['tfg'], note: 'Primera línea en diabetes, pero depende del riñón',
          say: 'Partamos por la metformina, el fármaco de primera línea en la diabetes tipo dos. Su problema es que se elimina sin cambios por el riñón, por filtración y secreción. Si la filtración cae, la metformina se queda.' },
        { show: ['acu', 'glu'], note: 'El hígado deja de limpiar el lactato',
          say: 'Al acumularse, inhibe el complejo uno de la mitocondria del hígado, y bloquea la gluconeogénesis a partir de lactato. Dicho simple: el hígado deja de consumir el lactato, y el lactato sube.' },
        { show: ['mala'], note: 'Rara, pero letal',
          say: 'El resultado es la acidosis láctica asociada a metformina, con una mortalidad sobre el cuarenta por ciento. Por eso los cortes de filtración de este fármaco no son un detalle: se preguntan.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Metformina',
      title: 'Los tres cortes de filtración',
      cards: [
        { title: 'Según la TFG estimada', tag: 'mL/min', kind: 'criteria', items: [
          { t: 'TFG 45–59', d: 'Mantener dosis, vigilar cada 6 meses',
            say: 'Los cortes son tres. Con una filtración entre cuarenta y cinco y cincuenta y nueve, se mantiene la dosis y se vigila la función renal cada seis meses.' },
          { t: 'TFG 30–44', d: 'Reducir al 50 %: máximo 1.000 mg/día',
            say: 'Entre treinta y cuarenta y cuatro, se reduce la dosis máxima a la mitad, con un tope de mil miligramos al día, y no se inicia en quien no la estaba tomando.' },
          { t: 'TFG < 30', d: 'Contraindicación absoluta: suspender',
            say: 'Y bajo treinta, contraindicación absoluta: se suspende de inmediato. El libro también da un equivalente en creatinina: sobre dos en la mujer o sobre dos coma cinco en el hombre.' },
        ] },
        { title: 'Qué usar en su lugar', tag: 'Alternativas', kind: 'pharma', items: [
          { t: 'Insulina o inhibidor de DPP-4', d: 'Linagliptina no requiere ajuste',
            say: 'Si hay que suspenderla, el control glicémico sigue con insulina o con un inhibidor de la DPP cuatro con ajuste renal. La linagliptina tiene la ventaja de no requerir ajuste.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Otros fármacos',
      title: 'Los que dañan o se acumulan',
      cards: [
        { title: 'AINE', tag: 'Contraindicados', kind: 'alert', items: [
          { t: 'Cierran la arteriola aferente', d: 'Sin prostaglandinas vasodilatadoras',
            say: 'El segundo grupo que se pregunta son los antiinflamatorios no esteroidales, los AINE. En un riñón enfermo, la arteriola aferente depende de las prostaglandinas para mantenerse abierta. El AINE las bloquea, y cae el flujo que entra al glomérulo.' },
          { t: 'Cualquier grado de ERC o IRA', d: 'Necrosis tubular isquémica e hiperkalemia',
            say: 'El resultado es necrosis tubular isquémica e hiperkalemia. Por eso están formalmente contraindicados en cualquier grado de enfermedad renal crónica o de injuria renal aguda. Es la misma idea que el IECA en la estenosis renal que vimos hace dos clases, pero en la arteriola de entrada.' },
        ] },
        { title: 'Se acumulan', tag: 'Ajustar', kind: 'pharma', items: [
          { t: 'Aminoglucósidos: TFG < 60', d: 'Espaciar según clearance y niveles',
            say: 'Los aminoglucósidos, como la amikacina, dan necrosis tubular tóxica y ototoxicidad. Con filtración bajo sesenta, se espacian los intervalos según el clearance y los niveles plasmáticos.' },
          { t: 'Enoxaparina: TFG < 30', d: 'Bajar al 50 % o usar heparina no fraccionada',
            say: 'Y la enoxaparina, una heparina de bajo peso molecular, se acumula bajo treinta y aumenta el riesgo de hemorragia mayor. Se reduce la dosis a la mitad o se cambia a heparina no fraccionada.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Nefropatía por contraste',
      title: 'Proteger el riñón antes del TAC',
      nodes: [
        { id: 'def', col: 0, row: 1, k: 'start', t: 'Nefropatía por contraste', s: 'Creatinina ≥ 0,3 o ≥ 50 % en 48–72 h' },
        { id: 'rie', col: 1, row: 0, k: 'risk', t: 'Factores de riesgo', s: 'ERC, diabetes, deshidratación, IC' },
        { id: 'hid', col: 2, row: 1, k: 'good', t: 'Hidratación IV isotónica', s: 'SF 0,9 % 1–1,5 mL/kg/h, 6–12 h antes y después' },
        { id: 'med', col: 3, row: 0, k: 'good', t: 'Menos contraste, suspender nefrotóxicos', s: 'Baja osmolaridad; AINE e IECA 48 h antes' },
        { id: 'tra', col: 3, row: 2, k: 'trap', t: 'Furosemida, manitol, N-acetilcisteína', s: 'No protegen' },
      ],
      edges: [
        { from: 'def', to: 'rie' }, { from: 'rie', to: 'hid', label: 'prevenir' },
        { from: 'hid', to: 'med' }, { from: 'hid', to: 'tra', label: 'no' },
      ],
      steps: [
        { show: ['def'], note: 'Definición con cifras',
          say: 'El otro gran tema es el contraste yodado. La nefropatía por contraste es un alza de la creatinina de cero coma tres o más, o de un cincuenta por ciento sobre la basal, en las cuarenta y ocho a setenta y dos horas siguientes al examen, sin otra causa.' },
        { show: ['rie'], note: 'Quién está en riesgo',
          say: 'El riesgo lo tienen los pacientes con enfermedad renal previa, sobre todo con filtración bajo treinta a cuarenta y cinco, los diabéticos con nefropatía, los deshidratados y los que tienen insuficiencia cardíaca.' },
        { show: ['hid'], note: 'La única medida con alta evidencia',
          say: 'La única medida con evidencia sólida es la hidratación intravenosa con cristaloides isotónicos: suero fisiológico, o bicarbonato isotónico, a uno a uno coma cinco mililitros por kilo por hora, de seis a doce horas antes y de seis a doce horas después. Expande el volumen y diluye el contraste en el túbulo.' },
        { show: ['med'], note: 'Medidas que suman',
          say: 'Se suma usar un contraste iso o de baja osmolaridad, en la menor dosis posible, y suspender los nefrotóxicos, los AINE y los IECA o ARA dos, cuarenta y ocho horas antes.' },
        { show: ['tra'], note: 'Las trampas del examen',
          say: 'Y las trampas: la furosemida y el manitol están contraindicados, porque depletan volumen y empeoran la isquemia. Y la N-acetilcisteína no ha demostrado ser mejor que la hidratación.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos las decisiones en un árbol, partiendo por la filtración.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Fármacos que se ajustan en la falla renal',
      head: ['Fármaco', 'Umbral de TFG', 'Riesgo', 'Conducta'],
      rows: [
        { cells: ['Metformina', '< 30 mL/min', 'Acidosis láctica', 'Suspender de inmediato'],
          say: 'Repasemos. Metformina bajo treinta: acidosis láctica, se suspende. Y recuerda que entre treinta y cuarenta y cuatro no se suspende, se reduce a la mitad.' },
        { cells: ['AINE (ibuprofeno, ketorolaco)', 'Cualquier ERC o IRA', 'Necrosis tubular, hiperkalemia', 'Contraindicados'],
          say: 'AINE, como ibuprofeno o ketorolaco: contraindicados con cualquier grado de daño renal.' },
        { cells: ['Aminoglucósidos (amikacina)', '< 60 mL/min', 'Necrosis tubular, ototoxicidad', 'Espaciar según clearance y niveles'],
          say: 'Aminoglucósidos bajo sesenta: se espacian los intervalos según clearance y niveles.' },
        { cells: ['Enoxaparina', '< 30 mL/min', 'Hemorragia mayor', 'Reducir 50 % o heparina no fraccionada'],
          say: 'Y enoxaparina bajo treinta: reducir a la mitad o cambiar a heparina no fraccionada.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 66 años con DM2 en tratamiento con metformina 850 mg cada 8 horas. Asintomático. En sus controles, TFG estimada estable en 38 mL/min/1,73 m² en dos mediciones. HbA1c 7,0 %.',
      question: '¿Cuál es la conducta más adecuada respecto de la metformina?',
      options: [
        { letter: 'A', text: 'Suspenderla e iniciar insulina' },
        { letter: 'B', text: 'Reducir la dosis a un máximo de 1.000 mg al día' },
        { letter: 'C', text: 'Mantener la dosis actual y controlar en 1 año' },
        { letter: 'D', text: 'Aumentar la dosis para compensar la menor eliminación' },
        { letter: 'E', text: 'Reemplazarla por glibenclamida' },
      ],
      correct: 'B',
      explanation: 'Con TFG entre 30 y 44 mL/min la metformina no se suspende: se reduce la dosis máxima al 50 % (máximo 1.000 mg/día) y se monitoriza la función renal. La suspensión es obligatoria recién con TFG < 30.',
      say: {
        stem: 'Vamos con un caso. Hombre de sesenta y seis años, diabético, con metformina ochocientos cincuenta cada ocho horas. Está asintomático, y su filtración estimada es estable en treinta y ocho en dos mediciones. Hemoglobina glicosilada de siete.',
        question: '¿Cuál es la conducta más adecuada respecto de la metformina?',
        options: 'Las opciones: suspenderla e iniciar insulina, reducir la dosis a un máximo de mil miligramos al día, mantenerla igual, aumentarla, o cambiarla por glibenclamida. Piénsalo.',
        answer: 'Es la B. Treinta y ocho está en la franja de treinta a cuarenta y cuatro: no se suspende, se reduce a la mitad, con un tope de mil miligramos. Suspender es la trampa, porque suena prudente, pero eso corresponde bajo treinta. Y aumentar la dosis es justo al revés: si el riñón elimina menos, hay que dar menos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 9',
      stem: 'Paciente 80 años con antecedente de artrosis en tratamiento con paracetamol 1 gr c/8 horas, con control parcial del dolor. Realiza adecuadamente sus actividades de la vida diaria, usa bastón y sale acompañada. Tiene antecedente de HTA e Insuficiencia cardíaca congestiva en capacidad funcional III.',
      question: '¿Cuál es el mejor fármaco a agregar para continuar el manejo del dolor?',
      options: [
        { letter: 'A', text: 'Ibuprofeno v.o.' },
        { letter: 'B', text: 'Pregabalina v.o.' },
        { letter: 'C', text: 'Ketorolaco v.o.' },
        { letter: 'D', text: 'Lidocaína en parches' },
        { letter: 'E', text: 'Tramadol v.o.' },
      ],
      correct: 'E',
      explanation: 'En una adulta mayor hipertensa y con insuficiencia cardíaca, los AINE (ibuprofeno, ketorolaco) se evitan por el riesgo de insuficiencia renal aguda. Se agrega tramadol.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil dieciséis. Mujer de ochenta años con artrosis, que toma paracetamol y tiene un control parcial del dolor. Es hipertensa y tiene insuficiencia cardíaca en capacidad funcional tres.',
        question: '¿Cuál es el mejor fármaco a agregar para el dolor?',
        options: 'Las opciones: ibuprofeno, pregabalina, ketorolaco, lidocaína en parches, o tramadol. Piénsalo.',
        answer: 'Es la E, tramadol. La clave está en el terreno: adulta mayor, hipertensa y con insuficiencia cardíaca. Su riñón depende de las prostaglandinas para mantener el flujo, y un AINE la puede llevar a una insuficiencia renal aguda. Por eso caen el ibuprofeno y el ketorolaco, que son la tentación natural después del paracetamol.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Mujer de 70 años con diabetes mellitus en tratamiento con metformina 850 mg cada 12 horas acude a control. Sus exámenes revelan creatinina de 2.2 mg/dL con filtrado glomerular estimado en 25 mL/min/1.73m². La paciente está asintomática.',
      question: '¿Cuál es la conducta farmacológica correcta respecto al manejo de su diabetes?',
      options: [
        { letter: 'A', text: 'Suspender la metformina de inmediato e indicar una alternativa terapéutica segura' },
        { letter: 'B', text: 'Aumentar la metformina a 850 mg cada 8 horas para compensar la menor eliminación' },
        { letter: 'C', text: 'Mantener la metformina en la misma dosis y asociar hidroclorotiazida' },
        { letter: 'D', text: 'Agregar glibenclamida a dosis plenas' },
        { letter: 'E', text: 'Suspender todos los fármacos y dejarla únicamente con dieta' },
      ],
      correct: 'A',
      explanation: 'Con TFG < 30 mL/min la metformina se acumula y puede causar acidosis láctica (mortalidad > 40 %). Se suspende de inmediato y se reemplaza por insulina o un inhibidor de DPP-4 ajustado a la función renal.',
      say: {
        stem: 'Ahora una pregunta del banco EUNACOM. Mujer de setenta años, diabética, con metformina ochocientos cincuenta cada doce horas. Está asintomática, pero su creatinina es dos coma dos y su filtración estimada, veinticinco.',
        question: '¿Cuál es la conducta correcta respecto de su diabetes?',
        options: 'Las opciones: suspender la metformina e indicar una alternativa segura, aumentarla, mantenerla y agregar hidroclorotiazida, agregar glibenclamida, o dejarla solo con dieta. Piénsalo.',
        answer: 'Es la A. Veinticinco está bajo treinta: contraindicación absoluta, se suspende de inmediato por el riesgo de acidosis láctica, y se reemplaza por insulina o un inhibidor de la DPP cuatro. Fíjate en la diferencia con el caso anterior: con treinta y ocho se reducía, con veinticinco se suspende. Y la E tienta porque también suspende, pero dejar a una diabética sin tratamiento no es la conducta.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Hombre de 68 años con antecedente de enfermedad renal crónica estadio 3b (TFG 35 mL/min) debe someterse a una tomografía computarizada de tórax con contraste yodado para etapificación oncológica.',
      question: '¿Cuál es la medida preventiva de primera línea más efectiva para reducir el riesgo de nefropatía inducida por contraste?',
      options: [
        { letter: 'A', text: 'Hidratación intravenosa con cristaloides isotónicos (suero fisiológico al 0.9%) antes y después del examen' },
        { letter: 'B', text: 'Administración de furosemida en bolo antes del medio de contraste' },
        { letter: 'C', text: 'Hemodiálisis profiláctica inmediatamente después del procedimiento' },
        { letter: 'D', text: 'Indicar manitol al 20% en infusión continua' },
        { letter: 'E', text: 'Administración de prednisona oral 50 mg 12 horas antes' },
      ],
      correct: 'A',
      explanation: 'La hidratación IV con cristaloides isotónicos (1–1,5 mL/kg/h, 6–12 h antes y después) es la única profilaxis con evidencia sólida. Furosemida y manitol depletan volumen y agravan la isquemia; los corticoides previenen la alergia al contraste, no la nefropatía.',
      say: {
        stem: 'Y una más del banco. Hombre de sesenta y ocho años con enfermedad renal crónica, filtración de treinta y cinco, que necesita un TAC de tórax con contraste yodado para etapificar un cáncer.',
        question: '¿Cuál es la medida preventiva de primera línea más efectiva?',
        options: 'Las opciones: hidratación intravenosa con suero fisiológico antes y después, furosemida en bolo, hemodiálisis profiláctica, manitol, o prednisona antes del examen. Piénsalo.',
        answer: 'Es la A, la hidratación intravenosa isotónica antes y después. Es la única medida con evidencia sólida. La furosemida y el manitol tientan porque suenan a proteger el riñón aumentando la diuresis, pero depletan volumen y empeoran la isquemia. Y la prednisona es para la alergia al contraste, que es otro problema.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Metformina', tag: 'Los cortes', kind: 'key', items: [
          { t: 'TFG < 30: suspender', d: '30–44: reducir a máximo 1.000 mg/día',
            say: 'Cerremos con las reglas de oro. Metformina: bajo treinta se suspende; entre treinta y cuarenta y cuatro se reduce a la mitad, con un tope de mil miligramos al día.' },
        ] },
        { title: 'Nefrotóxicos', tag: 'Evitar o ajustar', kind: 'alert', items: [
          { t: 'AINE contraindicados en ERC o IRA', d: 'Aminoglucósidos y enoxaparina: ajustar',
            say: 'Los AINE están contraindicados con cualquier daño renal, y en el adulto mayor frágil se evitan. Los aminoglucósidos se espacian bajo sesenta, y la enoxaparina se reduce bajo treinta.' },
        ] },
        { title: 'Contraste yodado', tag: 'Prevención', kind: 'pharma', items: [
          { t: 'Hidratación IV isotónica', d: 'Antes y después; nada de diuréticos',
            say: 'Y antes del contraste, hidratación intravenosa isotónica, antes y después, sin diuréticos. Si te llevas una sola idea de hoy: antes de recetar o de pedir un contraste, mira la filtración, porque el daño renal por fármacos es el más evitable de todos. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Fármacos y riñón: primero la filtración',
    root: N('start', 'Paciente con posible daño renal', 'Calcular la TFG estimada',
      'Antes de recetar un fármaco que se elimina por el riñón, o de pedir un examen con contraste, se calcula la filtración estimada.',
      ['', N('q', '¿Qué vas a indicar?', 'Metformina · AINE · contraste',
        'La conducta depende de qué vas a indicar.',
        ['Metformina', N('q', '¿Cuál es la TFG?', 'mL/min',
          'Si es metformina, la filtración decide la dosis.',
          ['45–59', N('ok', 'Mantener', 'Vigilar cada 6 meses',
            'Entre cuarenta y cinco y cincuenta y nueve, se mantiene y se vigila.')],
          ['30–44', N('do', 'Reducir al 50 %', 'Máximo 1.000 mg/día; no iniciar',
            'Entre treinta y cuarenta y cuatro, se reduce a la mitad, con tope de mil miligramos, y no se inicia en quien no la toma.')],
          ['< 30', N('alert', 'Suspender', 'Insulina o inhibidor de DPP-4',
            'Bajo treinta, se suspende de inmediato y se cambia a insulina o a un inhibidor de la DPP cuatro.')])],
        ['AINE', N('alert', 'No indicar', 'Contraindicados en ERC o IRA',
          'Si es un AINE y hay daño renal, no se indica: está contraindicado.')],
        ['Contraste yodado', N('do', 'Hidratación IV isotónica', 'Menor dosis; suspender AINE e IECA',
          'Si es un contraste yodado en un paciente de riesgo, hidratación intravenosa isotónica antes y después, la menor dosis de contraste, y suspender AINE e IECA cuarenta y ocho horas antes.')])]),
  },
};
