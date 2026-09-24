// Clase 4.5 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_nefrologia.cjs (nefro-17).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'nefro-17',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Por qué en el lupus el riñón se biopsia siempre, y qué clase obliga a tratar fuerte',
      say: 'Bienvenidos. Hoy cerramos el bloque de glomérulos con la nefropatía lúpica. Es el compromiso del lupus que más pesa en la sobrevida, y aparece hasta en la mitad de los pacientes. Vas a ver que el tema se ordena con dos ideas: en el lupus, ante cualquier daño renal, se biopsia; y lo que manda en el tratamiento es la clase que muestra esa biopsia.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Inmunocomplejos en el glomérulo',
      nodes: [
        { id: 'les', col: 0, row: 1, k: 'cause', t: 'Lupus activo', s: 'Anti-dsDNA en títulos altos' },
        { id: 'ic', col: 1, row: 1, k: 'mech', t: 'Inmunocomplejos', s: 'Se depositan en el glomérulo' },
        { id: 'cla', col: 2, row: 0, k: 'mech', t: 'Vía clásica del complemento', s: 'C3 y C4 bajos por consumo' },
        { id: 'glo', col: 2, row: 2, k: 'effect', t: 'Daño glomerular', s: 'Sedimento activo, proteinuria, HTA' },
        { id: 'bio', col: 3, row: 1, k: 'alert', t: 'La clínica no predice la lesión', s: 'Por eso se biopsia' },
      ],
      edges: [
        { from: 'les', to: 'ic' }, { from: 'ic', to: 'cla', label: 'activan' },
        { from: 'ic', to: 'glo', label: 'inflaman' }, { from: 'glo', to: 'bio' },
      ],
      steps: [
        { show: ['les'], note: 'El anti-dsDNA acompaña a la actividad renal',
          say: 'Partamos por el mecanismo. En el lupus activo hay anticuerpos en títulos altos, sobre todo los anti ADN de doble cadena, los anti-dsDNA. Son los que más se asocian a la nefritis.' },
        { show: ['ic'], note: 'Anticuerpo más antígeno',
          say: 'Esos anticuerpos se unen a su antígeno y forman inmunocomplejos, que terminan depositados en el glomérulo.' },
        { show: ['cla'], note: 'Se consumen C3 y C4',
          say: 'Los inmunocomplejos activan la vía clásica del complemento, y por eso se consumen las dos fracciones: C tres y C cuatro bajan juntas. Fíjate en el contraste con la clase de postestreptocócica, donde bajaba el C tres con un C cuatro normal. Esa diferencia se pregunta.' },
        { show: ['glo'], note: 'Nefrítico, nefrótico o ambos',
          say: 'Y en el glomérulo, esos depósitos inflaman. Según dónde y cuánto se depositen, vas a ver hematuria dismórfica y cilindros, proteinuria que puede llegar a rango nefrótico, hipertensión y caída de la filtración.' },
        { show: ['bio'], note: 'La biopsia define la agresividad',
          say: 'Y aquí está la clave del tema. La correlación entre la clínica y la histología es pobre: un sedimento discreto puede esconder una lesión grave. Por eso la biopsia no es opcional, es la que define la agresividad y el tratamiento.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: '¿Cuándo se biopsia el riñón en el lupus?',
      cards: [
        { title: 'Biopsia obligatoria', tag: 'Basta uno', kind: 'alert', items: [
          { t: 'Proteinuria ≥ 0,5 g/24 h', d: 'O índice proteinuria/creatininuria ≥ 0,5',
            say: '¿Cuándo se biopsia? Basta uno de tres criterios. El primero es una proteinuria confirmada de medio gramo o más en veinticuatro horas, o un índice proteinuria creatininuria de cero coma cinco o más.' },
          { t: 'Sedimento activo', d: '≥ 5 hematíes por campo, dismórficos o cilindros',
            say: 'El segundo es un sedimento activo: cinco o más glóbulos rojos por campo, glóbulos rojos dismórficos, o cilindros hemáticos o leucocitarios.' },
          { t: 'Caída inexplicada de la TFG', d: 'Sin otra causa que la explique',
            say: 'Y el tercero, un deterioro de la filtración glomerular que no tiene otra explicación. Cualquiera de los tres, en un paciente con lupus, obliga a biopsiar.' },
        ] },
        { title: 'Marcadores de actividad', tag: 'En sangre', kind: 'key', items: [
          { t: 'Anti-dsDNA en títulos altos', d: 'Acompaña a la nefritis activa',
            say: 'En sangre, dos marcadores te dicen que el lupus está activo en el riñón. Primero, los anti-dsDNA en títulos altos.' },
          { t: 'C3 y C4 bajos', d: 'Consumo por la vía clásica',
            say: 'Y segundo, el consumo de C tres y C cuatro. Pero ojo: estos marcadores apoyan la sospecha, no reemplazan la biopsia. Te dicen que hay actividad, no qué clase de lesión hay.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clasificación ISN/RPS',
      title: 'Seis clases: las que no son proliferativas',
      cards: [
        { title: 'Clases I y II', tag: 'Mesangiales', kind: 'normal', items: [
          { t: 'I: mesangial mínima', d: 'Óptica normal, depósitos en la IF',
            say: 'La biopsia se informa con la clasificación internacional ISN RPS, que tiene seis clases. La clase uno es la mesangial mínima: el microscopio óptico es normal y solo la inmunofluorescencia muestra depósitos. Es asintomática y basta el tratamiento de base del lupus.' },
          { t: 'II: mesangial proliferativa', d: 'Microhematuria o proteinuria leve',
            say: 'La clase dos es la mesangial proliferativa: solo aumenta la celularidad del mesangio, con microhematuria o proteinuria leve. Tiene buen pronóstico.' },
        ] },
        { title: 'Clase V', tag: 'Membranosa', kind: 'criteria', items: [
          { t: 'Síndrome nefrótico puro', d: 'Depósitos subepiteliales, MBG gruesa',
            say: 'La clase cinco es la membranosa lúpica. Se comporta como la membranosa que vimos entre las glomerulopatías primarias: síndrome nefrótico puro, con la membrana basal engrosada y depósitos subepiteliales.' },
          { t: 'Calcineurina o MMF + corticoides', d: 'Tratamiento de la clase V',
            say: 'Se trata con inhibidores de calcineurina o con micofenolato, más corticoides.' },
        ] },
        { title: 'Clase VI', tag: 'Esclerosante', kind: 'alert', items: [
          { t: 'Más del 90 % esclerosado', d: 'Daño irreversible',
            say: 'Y la clase seis es la esclerosante avanzada: más del noventa por ciento de los glomérulos ya está cicatrizado. Es daño irreversible, así que inmunosuprimir no tiene sentido.' },
          { t: 'Diálisis o trasplante', d: 'ERC avanzada',
            say: 'Lo que corresponde es preparar al paciente para diálisis o trasplante, que es justamente donde empieza el próximo bloque, el de enfermedad renal crónica.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Clases III y IV',
      title: 'Las proliferativas: la urgencia del tema',
      nodes: [
        { id: 'pro', col: 0, row: 1, k: 'start', t: 'Proliferación endocapilar', s: 'Clases III y IV' },
        { id: 'c3', col: 1, row: 0, k: 'risk', t: 'Clase III: focal', s: '< 50 % de los glomérulos' },
        { id: 'c4', col: 1, row: 2, k: 'alert', t: 'Clase IV: difusa', s: '≥ 50 %: la más frecuente y grave' },
        { id: 'cli', col: 2, row: 2, k: 'effect', t: 'Nefrítico-nefrótico grave', s: 'HTA y falla renal aguda' },
        { id: 'wl', col: 3, row: 2, k: 'mech', t: 'Asas de alambre', s: 'Depósitos subendoteliales masivos' },
        { id: 'inm', col: 3, row: 0, k: 'alert', t: 'Inmunosupresión agresiva', s: 'Ambas clases' },
      ],
      edges: [
        { from: 'pro', to: 'c3' }, { from: 'pro', to: 'c4' },
        { from: 'c4', to: 'cli' }, { from: 'cli', to: 'wl', label: 'biopsia' },
        { from: 'c3', to: 'inm' }, { from: 'wl', to: 'inm' },
      ],
      steps: [
        { show: ['pro'], note: 'Proliferan células dentro del capilar',
          say: 'Ahora lo importante. Las clases tres y cuatro son las proliferativas: las células proliferan dentro del capilar glomerular. Son verdaderas urgencias inmunológicas.' },
        { show: ['c3'], note: 'Menos de la mitad de los glomérulos',
          say: 'La diferencia entre ellas es de extensión. En la clase tres, focal, está comprometida menos de la mitad de los glomérulos.' },
        { show: ['c4'], note: 'La que más se pregunta',
          say: 'En la clase cuatro, difusa, está comprometida la mitad o más. Y es la que tienes que recordar: es la forma más frecuente y la más grave.' },
        { show: ['cli'], note: 'Se mezclan nefrítico y nefrótico',
          say: 'Clínicamente cursa con un síndrome nefrítico grave, proteinuria en rango nefrótico, hipertensión y falla renal aguda. Es decir, un cuadro mixto, y eso te tiene que hacer pensar en lupus en una mujer joven.' },
        { show: ['wl'], note: 'El hallazgo histológico clásico',
          say: 'En la biopsia, el hallazgo clásico son las asas capilares en asa de alambre, por los depósitos subendoteliales masivos.' },
        { show: ['inm'], note: 'Tres o cuatro: se trata fuerte',
          say: 'Y la conducta es la misma para las dos: inmunosupresión agresiva. Si la biopsia dice tres o cuatro, no se espera.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento',
      title: 'Inducción y mantenimiento',
      nodes: [
        { id: 'pul', col: 0, row: 1, k: 'start', t: 'Pulsos de metilprednisolona', s: '0,5–1 g/día EV × 3 días' },
        { id: 'pdn', col: 1, row: 0, k: 'mech', t: 'Prednisona oral', s: '0,5–1 mg/kg/día' },
        { id: 'ind', col: 1, row: 2, k: 'mech', t: 'MMF o ciclofosfamida EV', s: 'Pauta Euro-Lupus' },
        { id: 'man', col: 2, row: 1, k: 'good', t: 'Mantenimiento', s: 'MMF o azatioprina, largo plazo' },
        { id: 'hcq', col: 3, row: 1, k: 'trap', t: 'Hidroxicloroquina', s: 'Obligatoria en todos' },
      ],
      edges: [
        { from: 'pul', to: 'pdn', label: 'luego' }, { from: 'pul', to: 'ind', label: 'más' },
        { from: 'pdn', to: 'man' }, { from: 'ind', to: 'man' }, { from: 'man', to: 'hcq', label: 'siempre' },
      ],
      steps: [
        { show: ['pul'], note: 'Inducción de remisión',
          say: 'El tratamiento de las proliferativas tiene dos fases. La primera es la inducción de remisión, y parte con pulsos de metilprednisolona endovenosa, de medio a un gramo al día por tres días.' },
        { show: ['pdn'], note: 'Después, corticoide oral',
          say: 'Después de los pulsos se sigue con prednisona oral, de medio a un miligramo por kilo al día.' },
        { show: ['ind'], note: 'El inmunosupresor que acompaña',
          say: 'Y el corticoide nunca va solo. Se combina con micofenolato mofetil, o con ciclofosfamida endovenosa según la pauta Euro-Lupus.' },
        { show: ['man'], note: 'Segunda fase',
          say: 'Lograda la remisión, viene el mantenimiento a largo plazo, con micofenolato o azatioprina.' },
        { show: ['hcq'], note: 'Salvo contraindicación oftalmológica',
          say: 'Y un detalle que se olvida: la hidroxicloroquina es obligatoria en todos los pacientes con lupus, tengan o no nefritis, salvo contraindicación oftalmológica. Reduce los brotes y protege la sobrevida renal. Si la paciente la dejó, ese abandono suele explicar el brote.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos todo en un solo árbol, desde el examen de orina hasta el tratamiento.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'La clase decide el tratamiento',
      head: ['Clase', 'Clínica habitual', 'Tratamiento'],
      rows: [
        { cells: ['I · mesangial mínima', 'Sedimento normal o microhematuria', 'Tratamiento basal del LES'],
          say: 'Repasemos la clasificación con su conducta al lado. Clase uno, mesangial mínima: sedimento normal o microhematuria aislada, y basta el tratamiento basal del lupus.' },
        { cells: ['II · mesangial proliferativa', 'Microhematuria, proteinuria < 1 g/día', 'Corticoides en dosis bajas según síntomas'],
          say: 'Clase dos, mesangial proliferativa: microhematuria y proteinuria de menos de un gramo al día. Corticoides en dosis bajas según los síntomas.' },
        { cells: ['III · proliferativa focal', 'Nefrítico, proteinuria, HTA', 'Metilprednisolona + MMF o ciclofosfamida'],
          say: 'Clase tres, proliferativa focal: nefrítico, proteinuria e hipertensión. Inducción con metilprednisolona más micofenolato o ciclofosfamida.' },
        { cells: ['IV · proliferativa difusa', 'Nefrítico-nefrótico grave, falla renal aguda', 'Pulsos + MMF o Euro-Lupus'],
          say: 'Clase cuatro, la más frecuente y grave: nefrítico nefrótico con falla renal aguda. Pulsos de corticoides más micofenolato, o ciclofosfamida por Euro-Lupus. La trampa es tratarla solo con prednisona oral.' },
        { cells: ['V · membranosa', 'Síndrome nefrótico puro', 'Inhibidor de calcineurina o MMF + corticoides'],
          say: 'Clase cinco, membranosa: síndrome nefrótico puro, con inhibidores de calcineurina o micofenolato más corticoides.' },
        { cells: ['VI · esclerosante', 'ERC avanzada', 'Diálisis o trasplante'],
          say: 'Y clase seis, esclerosante: enfermedad renal crónica avanzada. Aquí la trampa es la contraria: seguir inmunosuprimiendo un riñón cicatrizado. Lo que corresponde es la terapia de reemplazo.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 26 años con LES diagnosticado hace un año, en tratamiento irregular con hidroxicloroquina. Consulta por astenia, cefalea y orinas oscuras espumosas. Eritema malar, úlceras orales, PA 160/105 mmHg, edema bimaleolar. Creatinina 1,6 mg/dL (basal 0,7), sedimento con 80 % de hematíes dismórficos y cilindros hemáticos, proteinuria 2,4 g/24 h. C3 y C4 muy bajos, anti-dsDNA fuertemente positivo.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Aumentar la hidroxicloroquina y controlar en un mes' },
        { letter: 'B', text: 'Enalapril y repetir la proteinuria en 6 meses' },
        { letter: 'C', text: 'Hospitalizar, biopsia renal urgente e inducción con pulsos de metilprednisolona + MMF o ciclofosfamida' },
        { letter: 'D', text: 'Prednisona oral en dosis bajas y alta' },
        { letter: 'E', text: 'Iniciar hemodiálisis crónica' },
      ],
      correct: 'C',
      explanation: 'Brote lúpico con síndrome nefrítico activo (HTA, alza de creatinina, hematuria dismórfica, cilindros, proteinuria) y consumo de C3 y C4 con anti-dsDNA alto: orienta a nefropatía lúpica proliferativa (clase III o IV). Conducta: hospitalizar, biopsia renal urgente para clasificar e iniciar inducción con pulsos de metilprednisolona más micofenolato o ciclofosfamida.',
      say: {
        stem: 'Vamos al caso. Mujer de veintiséis años con lupus de un año, que toma la hidroxicloroquina en forma irregular. Consulta por orinas oscuras y espumosas. Tiene eritema malar, úlceras orales, presión de ciento sesenta con ciento cinco y edema. La creatinina subió de cero coma siete a uno coma seis, hay hematuria dismórfica con cilindros hemáticos, y la proteinuria es de dos coma cuatro gramos. Tiene C tres y C cuatro muy bajos, y anti-dsDNA fuertemente positivo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las alternativas: subir la hidroxicloroquina y controlar, enalapril y repetir la proteinuria en seis meses, hospitalizar con biopsia urgente e inducción, prednisona oral en dosis bajas, o hemodiálisis crónica. Piénsalo.',
        answer: 'Es la C. Tiene un síndrome nefrítico activo, con consumo de complemento y anti-dsDNA alto: esto es una nefropatía lúpica proliferativa hasta demostrar lo contrario. Se hospitaliza, se biopsia para clasificar, y se induce con pulsos y micofenolato o ciclofosfamida. La A es tentadora porque abandonó la hidroxicloroquina, y ese abandono explica el brote, pero subirla no alcanza. Y la D se queda corta frente a una clase tres o cuatro.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 113',
      stem: 'Una paciente de 26 años, consulta por malestar general, asociada a cefalea y orinas oscuras. Refiere fotosensibilidad. Al examen físico tiene FC: 66x’. PA: 160/106 mmHg, úlceras orales y edema de extremidades inferiores. Se solicitan exámenes que muestran sedimento de orina con eritrocitos abundantes, con 17% de dismorfia, proteinuria 500 mg/L. Su creatinina plasmática resulta 1,4 mg/dl y la fracción del complemento C3 está disminuida.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Nefropatía lúpica' },
        { letter: 'B', text: 'Nefropatía por IgA' },
        { letter: 'C', text: 'Vasculitis ANCA positivo' },
        { letter: 'D', text: 'Glomerulonefritis postestreptocócica' },
        { letter: 'E', text: 'Glomerulopatía por cambios mínimos' },
      ],
      correct: 'A',
      explanation: 'Mujer joven con fotosensibilidad y úlceras orales (clínica de LES) que suma compromiso renal (hipertensión, hematuria, proteinuria, alza de creatinina) y C3 bajo: nefropatía lúpica. La IgA y las vasculitis ANCA cursan con complemento normal; la postestreptocócica requiere una infección previa; los cambios mínimos no dan hematuria ni C3 bajo.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil dieciocho. Paciente de veintiséis años con malestar, cefalea y orinas oscuras. Refiere fotosensibilidad. Tiene presión de ciento sesenta con ciento seis, úlceras orales y edema. El sedimento muestra abundantes glóbulos rojos, hay proteinuria, la creatinina es uno coma cuatro y el C tres está disminuido.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: nefropatía lúpica, nefropatía por IgA, vasculitis ANCA positiva, glomerulonefritis postestreptocócica, o cambios mínimos. Piénsalo.',
        answer: 'Es la A, nefropatía lúpica. La clave está fuera del riñón: una mujer joven con fotosensibilidad y úlceras orales es lupus, y el compromiso renal con C tres bajo lo confirma. El complemento te ayuda a descartar: la IgA y las vasculitis ANCA tienen complemento normal. La postestreptocócica sí baja el C tres, pero necesita una infección previa y no explica la fotosensibilidad ni las úlceras.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Biopsia', kind: 'key', items: [
          { t: 'Lupus + daño renal = biopsia', d: 'Proteinuria ≥ 0,5 g/24 h o sedimento activo',
            say: 'Cerremos con las reglas de oro. En un paciente con lupus, proteinuria de medio gramo o más, o un sedimento activo, obliga a biopsiar. La clínica no predice la lesión.' },
          { t: 'Anti-dsDNA alto, C3 y C4 bajos', d: 'Actividad renal',
            say: 'Los anti-dsDNA altos con C tres y C cuatro bajos marcan actividad, y el C cuatro bajo la separa de la postestreptocócica.' },
        ] },
        { title: 'Clases', tag: 'ISN/RPS', kind: 'alert', items: [
          { t: 'Clase IV: la más frecuente y grave', d: 'Asas de alambre',
            say: 'La clase cuatro, proliferativa difusa, es la más frecuente y la más grave, con asas de alambre en la biopsia.' },
          { t: 'III y IV: inducción agresiva', d: 'Pulsos + MMF o ciclofosfamida',
            say: 'Las clases tres y cuatro se tratan con inducción agresiva: pulsos de metilprednisolona más micofenolato o ciclofosfamida, y luego mantenimiento con micofenolato o azatioprina.' },
        ] },
        { title: 'Siempre', tag: 'Todos los pacientes', kind: 'pharma', items: [
          { t: 'Hidroxicloroquina en todos', d: 'Salvo contraindicación oftalmológica',
            say: 'Y la hidroxicloroquina va en todos. Si te llevas una sola idea de hoy: en el lupus, el riñón se biopsia, y la biopsia decide cuán fuerte tratar. En la próxima clase entramos a la enfermedad renal crónica. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Nefropatía lúpica: de la orina al tratamiento',
    root: N('start', 'Paciente con lupus', 'Control de orina y función renal',
      'Paciente con lupus conocido o en estudio. En cada control buscas daño renal en la orina y en la creatinina, porque el riñón puede estar comprometido sin síntomas.',
      ['', N('q', '¿Hay daño renal?', 'Proteinuria ≥ 0,5 g/24 h · sedimento activo · caída de TFG',
        '¿Tiene proteinuria de medio gramo o más, un sedimento activo, o una caída de la filtración sin otra causa?',
        ['NO', N('ok', 'Tratamiento basal del LES', 'Hidroxicloroquina + control',
          'Si no hay daño renal, sigue su tratamiento de base, con hidroxicloroquina, y controles periódicos de orina.')],
        ['SÍ', N('do', 'Biopsia renal', 'Obligatoria: define la clase',
          'Si hay cualquiera de los tres, biopsia renal. No se trata a ciegas, porque la clínica no predice la clase.',
          ['I o II', N('ok', 'Mesangiales', 'Basal o corticoides en dosis bajas',
            'Clases uno o dos, mesangiales: tratamiento basal del lupus o corticoides en dosis bajas según los síntomas.')],
          ['III o IV', N('alert', 'Proliferativas', 'Pulsos + MMF o ciclofosfamida',
            'Clases tres o cuatro, proliferativas: inducción con pulsos de metilprednisolona más micofenolato o ciclofosfamida, y luego mantenimiento.')],
          ['V', N('do', 'Membranosa', 'Calcineurina o MMF + corticoides',
            'Clase cinco, membranosa: inhibidores de calcineurina o micofenolato, más corticoides.')],
          ['VI', N('refer', 'Esclerosante', 'Diálisis o trasplante',
            'Clase seis, esclerosante: el daño es irreversible, y se prepara al paciente para diálisis o trasplante.')])])]),
  },
};
