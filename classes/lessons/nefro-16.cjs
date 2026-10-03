// Clase 4.4 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_nefrologia.cjs (nefro-16).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'nefro-16',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'El nefrítico que destruye el riñón en semanas: reconocerlo, clasificarlo y tratarlo ya',
      say: 'Bienvenidos. En la clase anterior vimos un nefrítico que se resuelve solo, la postestreptocócica. Hoy vemos el extremo opuesto: la glomerulonefritis rápidamente progresiva, el cuadro más grave de la nefrología, que puede dejar a un paciente en diálisis para siempre en cuestión de semanas. Es una emergencia, y el examen pregunta tres cosas: reconocerla, saber qué tipo es, y no retrasar el tratamiento.',
    },

    {
      type: 'points',
      kicker: 'Definición',
      title: '¿Qué es una glomerulonefritis rápidamente progresiva?',
      cards: [
        { title: 'Los tres criterios', tag: 'Anatomoclínico', kind: 'criteria', items: [
          { t: 'Pierde más del 50 % de la TFG', d: 'En días a semanas',
            say: 'Partamos por la definición, que tiene tres partes. La primera es la velocidad: el paciente pierde más de la mitad de su filtración glomerular en días o semanas. Por ejemplo, una creatinina que era normal hace dos meses y hoy está sobre cuatro.' },
          { t: 'Síndrome nefrítico activo', d: 'Acantocitos y cilindros hemáticos',
            say: 'La segunda es un síndrome nefrítico activo, con hematuria glomerular masiva, acantocitos y cilindros hemáticos. Es lo que vimos en la clase pasada, pero sin frenos.' },
          { t: 'Semilunas en > 50 % de los glomérulos', d: 'En la biopsia renal',
            say: 'Y la tercera es histológica: en la biopsia, más de la mitad de los glomérulos tiene semilunas. Por eso también se la llama glomerulonefritis extracapilar.' },
        ] },
        { title: 'Cómo se presenta', tag: 'En el examen', kind: 'alert', items: [
          { t: 'Adulto mayor con síntomas generales', d: 'Astenia, baja de peso, febrícula, anemia',
            say: 'En el examen el paciente típico es un adulto mayor que lleva semanas con malestar, astenia, baja de peso y febrícula, y que después agrega orina oscura, menos orina, edema e hipertensión. Si ves esa combinación con una creatinina que se disparó, piensa en esta enfermedad.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Las semilunas: por qué el tiempo importa',
      nodes: [
        { id: 'nec', col: 0, row: 1, k: 'cause', t: 'Necrosis de la membrana basal', s: 'Se rompe la pared capilar' },
        { id: 'fib', col: 1, row: 1, k: 'mech', t: 'Fibrina y macrófagos', s: 'Salen al espacio de Bowman' },
        { id: 'pro', col: 2, row: 1, k: 'mech', t: 'Proliferan células parietales', s: 'Rodean el ovillo' },
        { id: 'cel', col: 3, row: 0, k: 'good', t: 'Semiluna celular', s: 'Reversible con tratamiento' },
        { id: 'fbr', col: 3, row: 2, k: 'risk', t: 'Semiluna fibrosa', s: 'Cicatriz irreversible' },
        { id: 'dia', col: 4, row: 2, k: 'alert', t: 'Diálisis crónica', s: 'No responde a fármacos' },
      ],
      edges: [
        { from: 'nec', to: 'fib' }, { from: 'fib', to: 'pro' }, { from: 'pro', to: 'cel' },
        { from: 'cel', to: 'fbr', label: 'en semanas' }, { from: 'fbr', to: 'dia' },
      ],
      steps: [
        { show: ['nec'], note: 'Todo parte con una pared capilar rota',
          say: 'Veamos qué es una semiluna, porque explica por qué esto es una urgencia. Todo parte con una necrosis que atraviesa la membrana basal del glomérulo y rompe la pared del capilar.' },
        { show: ['fib'], note: 'La inflamación invade el espacio de Bowman',
          say: 'Por esa rotura salen fibrina, macrófagos y mediadores inflamatorios hacia el espacio de Bowman, que es donde normalmente se recoge la orina.' },
        { show: ['pro'], note: 'Se forma una media luna que asfixia el ovillo',
          say: 'Eso estimula a las células epiteliales parietales a proliferar, y forman una media luna que va rodeando y asfixiando al ovillo capilar. Esa es la semiluna.' },
        { show: ['cel'], note: 'Al principio: celular y reversible',
          say: 'Al principio la semiluna es celular, está hecha de células vivas e inflamación, y es reversible si se inmunosuprime a tiempo.' },
        { show: ['fbr', 'dia'], note: 'Si se espera: fibrosa e irreversible',
          say: 'Pero en semanas se vuelve fibrocelular y después fibrosa: una cicatriz que ya no responde a ningún fármaco, y el paciente termina en diálisis crónica. Por eso el porcentaje de semilunas fibrosas en la biopsia es el factor pronóstico más importante. Aquí el tiempo es riñón.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Clasificación',
      title: 'La inmunofluorescencia divide en tres tipos',
      nodes: [
        { id: 'if', col: 0, row: 2, k: 'start', t: 'Inmunofluorescencia', s: 'De la biopsia renal' },
        { id: 't1', col: 2, row: 0, k: 'effect', t: 'Lineal', s: 'IgG a lo largo de la MBG' },
        { id: 't2', col: 2, row: 2, k: 'effect', t: 'Granular', s: 'Inmunocomplejos, C3 bajo' },
        { id: 't3', col: 2, row: 4, k: 'effect', t: 'Escasa o nula', s: 'Pauciinmune' },
        { id: 'd1', col: 4, row: 0, k: 'risk', t: 'Tipo 1: anti-MBG', s: '10–15 % · Goodpasture' },
        { id: 'd2', col: 4, row: 2, k: 'risk', t: 'Tipo 2: inmunocomplejos', s: '20–30 % · lupus, postinfecciosa' },
        { id: 'd3', col: 4, row: 4, k: 'alert', t: 'Tipo 3: vasculitis ANCA', s: '60 % · la más frecuente' },
      ],
      edges: [
        { from: 'if', to: 't1' }, { from: 'if', to: 't2' }, { from: 'if', to: 't3' },
        { from: 't1', to: 'd1' }, { from: 't2', to: 'd2' }, { from: 't3', to: 'd3' },
      ],
      steps: [
        { show: ['if'], note: 'Cómo se ven los anticuerpos en el glomérulo',
          say: 'Ahora, la clasificación. Las semilunas se ven iguales en cualquier glomerulonefritis rápidamente progresiva. Lo que las separa es la inmunofluorescencia, que muestra cómo se depositan los anticuerpos. Hay tres patrones.' },
        { show: ['t1', 'd1'], note: 'Lineal: anticuerpos contra la propia membrana',
          say: 'Patrón lineal: la inmunoglobulina G dibuja una línea continua a lo largo de la membrana basal, porque el anticuerpo está dirigido contra la membrana misma. Es el tipo uno, por anticuerpos anti membrana basal, diez a quince por ciento de los casos.' },
        { show: ['t2', 'd2'], note: 'Granular: inmunocomplejos que consumen complemento',
          say: 'Patrón granular: grumos de inmunoglobulina G y C tres en el mesangio y la pared capilar. Son inmunocomplejos, y consumen complemento, así que el C tres está bajo. Es el tipo dos, veinte a treinta por ciento.' },
        { show: ['t3', 'd3'], note: 'Pauciinmune: casi nada que ver, y es la más frecuente',
          say: 'Y el tercer patrón es casi no ver nada: la inmunofluorescencia es negativa o escasa, y por eso se llama pauciinmune. Es el tipo tres, asociado a los anticuerpos ANCA, y es el más frecuente: cerca del sesenta por ciento, sobre todo en mayores de sesenta años.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tipos 1 y 2',
      title: 'Anti-membrana basal e inmunocomplejos',
      cards: [
        { title: 'Tipo 1: anti-MBG', tag: 'Lineal', kind: 'alert', items: [
          { t: 'Anticuerpos anti-MBG positivos', d: 'IgG lineal en la biopsia',
            say: 'Veamos cada tipo. En el tipo uno, la serología muestra anticuerpos anti membrana basal glomerular, y la biopsia, ese depósito lineal.' },
          { t: 'Con hemorragia alveolar = Goodpasture', d: 'Hemoptisis e infiltrados pulmonares',
            say: 'Cuando además hay hemorragia alveolar difusa, con hemoptisis e infiltrados pulmonares, se llama síndrome de Goodpasture. Es un síndrome riñón pulmón: el mismo anticuerpo ataca la membrana basal del glomérulo y la del alvéolo.' },
        ] },
        { title: 'Tipo 2: inmunocomplejos', tag: 'Granular, C3 bajo', kind: 'key', items: [
          { t: 'Lupus clase IV', d: 'Nefritis lúpica proliferativa difusa',
            say: 'En el tipo dos, el complemento está bajo y hay que buscar la enfermedad que genera los inmunocomplejos. La primera es la nefritis lúpica proliferativa difusa, clase cuatro, que veremos en la próxima clase.' },
          { t: 'Postinfecciosa grave', d: 'Y endocarditis bacteriana subaguda',
            say: 'Luego, una glomerulonefritis postinfecciosa grave, y la endocarditis bacteriana subaguda, que es un clásico de pregunta: un paciente con endocarditis que hace hematuria dismórfica y C tres bajo.' },
          { t: 'Crioglobulinemia mixta', d: 'Asociada a hepatitis C',
            say: 'Y la crioglobulinemia mixta, asociada al virus de la hepatitis C.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tipo 3',
      title: 'Vasculitis ANCA: PAM y granulomatosis',
      cards: [
        { title: 'Poliangeítis microscópica', tag: 'ANCA-p · anti-MPO', kind: 'key', items: [
          { t: 'ANCA-p (anti-MPO) > 80 %', d: 'Patrón perinuclear, mieloperoxidasa',
            say: 'Dentro de las vasculitis ANCA hay dos que tienes que separar. La poliangeítis microscópica se asocia a ANCA con patrón perinuclear, dirigidos contra la mieloperoxidasa, en más del ochenta por ciento.' },
          { t: 'Riñón aislado o capilaritis pulmonar', d: 'Sin granulomas · adulto mayor',
            say: 'Da un compromiso renal aislado, o con capilaritis pulmonar, pero sin granulomas. Es la vasculitis clásica del adulto mayor con síntomas generales y la creatinina subiendo.' },
        ] },
        { title: 'Granulomatosis con poliangeítis', tag: 'ANCA-c · anti-PR3', kind: 'alert', items: [
          { t: 'ANCA-c (anti-PR3) > 90 %', d: 'Patrón citoplasmático, proteinasa 3',
            say: 'La granulomatosis con poliangeítis, la antigua enfermedad de Wegener, se asocia a ANCA con patrón citoplasmático, contra la proteinasa tres, en más del noventa por ciento.' },
          { t: 'Vía aérea superior', d: 'Sinusitis destructiva, nariz en silla de montar',
            say: 'Y su sello es la vía aérea superior: sinusitis crónica destructiva, otitis y perforación del tabique, con la nariz en silla de montar.' },
          { t: 'Nódulos pulmonares cavitados', d: 'Más glomerulonefritis necrotizante',
            say: 'Además, nódulos pulmonares cavitados y glomerulonefritis necrotizante. Para recordarlo: la c de citoplasmático va con la granulomatosis, que tiene cavidades.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Manejo de emergencia',
      title: 'Biopsiar urgente, pero no esperar para tratar',
      nodes: [
        { id: 'sos', col: 0, row: 1, k: 'start', t: 'Sospecha de GNRP', s: 'Creatinina que sube en semanas + nefrítico' },
        { id: 'bio', col: 1, row: 0, k: 'refer', t: 'Biopsia renal urgente', s: 'Confirma y clasifica' },
        { id: 'pul', col: 1, row: 2, k: 'good', t: 'Pulsos de metilprednisolona', s: '500–1.000 mg/día × 3 días' },
        { id: 'cit', col: 2, row: 2, k: 'good', t: 'Ciclofosfamida o rituximab', s: 'Inducción de remisión' },
        { id: 'cot', col: 3, row: 3, k: 'mech', t: 'Cotrimoxazol', s: 'Profilaxis de Pneumocystis' },
        { id: 'pla', col: 3, row: 1, k: 'alert', t: 'Plasmaféresis', s: 'Anti-MBG, hemorragia alveolar, Cr > 5,7' },
      ],
      edges: [
        { from: 'sos', to: 'bio' }, { from: 'sos', to: 'pul', label: 'no postergar' },
        { from: 'pul', to: 'cit' }, { from: 'cit', to: 'cot' }, { from: 'cit', to: 'pla', label: 'si corresponde' },
      ],
      steps: [
        { show: ['sos', 'bio'], note: 'La biopsia es urgente',
          say: 'Pasemos al manejo. Ante la sospecha, la biopsia renal es una urgencia médica: es el examen que confirma el diagnóstico, cuenta las semilunas y dice el tipo.' },
        { show: ['pul'], note: 'Si la biopsia se retrasa, igual se trata',
          say: 'Pero ojo: si la biopsia se retrasa y el deterioro renal es acelerado, o hay compromiso pulmonar, el tratamiento no se posterga. Se parte con pulsos de metilprednisolona intravenosa, quinientos a mil miligramos al día por tres días seguidos, y luego prednisona oral a un miligramo por kilo.' },
        { show: ['cit'], note: 'Inmunosupresión citotóxica',
          say: 'Junto a los corticoides va un inmunosupresor citotóxico: ciclofosfamida, o rituximab, un anticuerpo anti CD veinte, especialmente útil en la vasculitis ANCA que recae.' },
        { show: ['cot'], note: 'Proteger del Pneumocystis',
          say: 'Y con esa inmunosupresión tan intensa, se agrega cotrimoxazol como profilaxis de la neumonía por Pneumocystis jirovecii.' },
        { show: ['pla'], note: 'Retirar los anticuerpos de la sangre',
          say: 'El último pilar es la plasmaféresis, que retira los anticuerpos circulantes. El libro la indica de primera línea en la enfermedad anti membrana basal o Goodpasture, y en la vasculitis ANCA con hemorragia alveolar activa o con creatinina sobre cinco coma siete o necesidad de diálisis.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Esquema de rescate: dosis y duración',
      cards: [
        { title: 'Inducción', tag: 'Fases 1 y 2', kind: 'pharma', items: [
          { t: 'Metilprednisolona 1.000 mg/día IV', d: 'Infusión de 2 h, 3 días seguidos',
            say: 'Veamos el esquema con sus números. La fase uno es la metilprednisolona, hasta mil miligramos al día en infusión de dos horas, por tres días, para detener la inflamación de las semilunas.' },
          { t: 'Ciclofosfamida mensual 3–6 meses', d: 'O rituximab 375 mg/m² semanal × 4',
            say: 'La fase dos es la ciclofosfamida intravenosa mensual por tres a seis meses, o rituximab, trescientos setenta y cinco miligramos por metro cuadrado a la semana por cuatro dosis. El objetivo es una remisión profunda.' },
        ] },
        { title: 'Plasmaféresis', tag: 'Rescate', kind: 'alert', items: [
          { t: 'Recambio de 4 L diarios', d: 'Con albúmina al 5 %',
            say: 'La plasmaféresis recambia cuatro litros de plasma al día, reemplazados con albúmina al cinco por ciento.' },
          { t: '7 a 14 sesiones', d: 'Hemorragia alveolar o falla dialítica',
            say: 'Se hacen siete a catorce sesiones, en la hemorragia alveolar o en la falla renal que ya requiere diálisis.' },
        ] },
        { title: 'Profilaxis', tag: 'Obligatoria', kind: 'normal', items: [
          { t: 'Cotrimoxazol 160/800 mg', d: '3 veces por semana',
            say: 'Y el cotrimoxazol, ciento sesenta con ochocientos miligramos, tres veces por semana, es obligatorio mientras dure la inmunosupresión.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un árbol de decisión, tal como vas a enfrentar a un paciente con un nefrítico que empeora en semanas.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Los tres tipos en una tabla',
      head: ['Tipo', 'Inmunofluorescencia', 'Serología', 'Pista extrarrenal'],
      rows: [
        { cells: ['1: anti-MBG / Goodpasture', 'Lineal de IgG en la MBG', 'Anti-MBG (+)', 'Hemorragia alveolar, hemoptisis'],
          say: 'Repasemos en una tabla, porque así se pregunta: te dan una pista y tienes que llegar al tipo. Tipo uno: depósito lineal, anti membrana basal positivo, y la pista extrarrenal es la hemorragia alveolar con hemoptisis.' },
        { cells: ['2: inmunocomplejos', 'Granular de IgG / C3', 'ANA, anti-DNA, C3/C4 bajos, crioglobulinas', 'Lupus, púrpura, soplo de endocarditis'],
          say: 'Tipo dos: depósito granular, complemento bajo, y las pistas son las de la enfermedad de base: lupus con artritis, púrpura palpable de la crioglobulinemia, o un soplo de endocarditis.' },
        { cells: ['3: PAM', 'Pauciinmune', 'ANCA-p (anti-MPO)', 'Adulto mayor, síntomas generales, capilaritis'],
          say: 'Tipo tres, poliangeítis microscópica: pauciinmune, ANCA perinuclear, en un adulto mayor con febrícula, baja de peso y mialgias. El complemento es normal, y eso la separa de la postestreptocócica y del lupus.' },
        { cells: ['3: GPA (Wegener)', 'Pauciinmune', 'ANCA-c (anti-PR3)', 'Sinusitis, silla de montar, nódulos cavitados'],
          say: 'Y tipo tres, granulomatosis con poliangeítis: pauciinmune, ANCA citoplasmático, con sinusitis destructiva, nariz en silla de montar y nódulos cavitados. Y una última trampa: si te preguntan qué examen confirma el diagnóstico, la respuesta es la biopsia, no los ANCA.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 71 años con 6 semanas de astenia, baja de 5 kg y febrícula; en los últimos 10 días, orinas oscuras, menor diuresis y edema. PA 176/110 mmHg. Creatinina 4,3 mg/dL (0,9 hace 2 meses). Sedimento: 80 % de acantocitos y cilindros hemáticos; proteinuria 1,8 g/24 h. Hb 9,2 g/dL, VHS 98 mm/h. C3 y C4 normales, ANA negativo, ANCA-p (anti-MPO) positivo.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Furosemida y restricción de sodio; controlar C3 en 8 semanas' },
        { letter: 'B', text: 'Hospitalizar, biopsia renal urgente y pulsos de metilprednisolona + ciclofosfamida o rituximab' },
        { letter: 'C', text: 'Prednisona oral 20 mg/día ambulatoria' },
        { letter: 'D', text: 'Hemodiálisis crónica sin inmunosupresión' },
        { letter: 'E', text: 'Solo IECA y control en 3 meses' },
      ],
      correct: 'B',
      explanation: 'Creatinina de 0,9 a 4,3 en semanas + nefrítico activo + ANCA-p con complemento normal: GNRP pauciinmune por poliangeítis microscópica. Es una emergencia: hospitalizar, biopsia urgente e inducción inmediata con pulsos de metilprednisolona más ciclofosfamida o rituximab.',
      say: {
        stem: 'Vamos al caso. Hombre de setenta y un años con seis semanas de astenia, cinco kilos de baja de peso y febrícula, y en los últimos diez días, orina oscura, menos orina y edema. Presión de ciento setenta y seis con ciento diez. Su creatinina era cero coma nueve hace dos meses y hoy es cuatro coma tres. Hay acantocitos y cilindros hemáticos, anemia, VHS de noventa y ocho, complemento normal y ANCA perinuclear positivo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: furosemida y controlar el C tres, hospitalizar con biopsia urgente y pulsos de metilprednisolona más ciclofosfamida o rituximab, prednisona oral en dosis baja, hemodiálisis crónica sin inmunosuprimir, o solo IECA. Piénsalo.',
        answer: 'La respuesta es la B. La creatinina se multiplicó en semanas, hay un nefrítico activo, y el ANCA perinuclear con complemento normal apunta a una poliangeítis microscópica. Es una emergencia: biopsia urgente y pulsos sin esperar. La A es la trampa: es el manejo de la postestreptocócica, pero aquí el complemento es normal y el riñón no se va a recuperar solo. Y la diálisis sin inmunosupresión renuncia a unas semilunas que todavía pueden ser reversibles.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 164',
      stem: 'Un paciente de 71 años presenta desde hace dos meses malestar general, mialgias y febrícula ocasional, además de episodios de hematuria, especialmente en el último tiempo. Al examen físico, presenta frecuencia cardíaca 82 latidos por minuto, presión arterial 176/111 mmHg, edema bimaleolar y disminución del volumen de orina. El examen cardiopulmonar muestra ritmo regular en dos tiempos sin soplos y murmullo pulmonar presente con crépitos bibasales, sin otros ruidos. En los exámenes de laboratorio destacan creatininemia: 4,34 mg/dL, BUN: 72 mg/dL, sedimento de orina: 10 leucocitos por campo y 60 hematíes por campo, con 10% de acantocitos.',
      question: '¿Qué examen es el más adecuado para confirmar el diagnóstico?',
      options: [
        { letter: 'A', text: 'Anticuerpos antinucleares (ANA)' },
        { letter: 'B', text: 'Biopsia renal' },
        { letter: 'C', text: 'Anticuerpos anticitoplasma de neutrófilos (ANCA)' },
        { letter: 'D', text: 'UroTAC' },
        { letter: 'E', text: 'Electroforesis de proteínas en orina' },
      ],
      correct: 'B',
      explanation: 'Adulto mayor con síntomas generales, nefrítico y falla renal que progresa: GNRP, probablemente por poliangeítis microscópica. Los ANCA orientan, pero el examen que confirma el diagnóstico de GNRP es la biopsia renal.',
      say: {
        stem: 'Vamos con las preguntas reales. Esta es del EUNACOM de diciembre de dos mil veinticinco. Paciente de setenta y un años con dos meses de malestar, mialgias y febrícula, que agrega hematuria, edema y menos orina. Presión de ciento setenta y seis con ciento once, creatinina cuatro coma tres, y acantocitos en el sedimento.',
        question: '¿Qué examen es el más adecuado para confirmar el diagnóstico?',
        options: 'Las opciones son: anticuerpos antinucleares, biopsia renal, ANCA, uroTAC, o electroforesis de proteínas en orina. Piénsalo.',
        answer: 'Es la B, biopsia renal. El cuadro es una glomerulonefritis rápidamente progresiva, y lo más probable es una poliangeítis microscópica. Los ANCA son el distractor más tentador, porque sí se piden y orientan mucho. Pero la pregunta dice confirmar, y lo que confirma es la biopsia: muestra las semilunas y el patrón de inmunofluorescencia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 44',
      stem: 'Una paciente de 67 años, presenta un cuadro de malestar general, asociado a febrículas y edema de las extremidades inferiores. Al examen físico, su presión arterial es 180/110 mmHg y se constata el edema blando, con signo de la fóvea. En sus exámenes de sangre destaca creatininemia de 4,1 mg/dl, BUN de 60 mg/dl y sedimento de orina con 60 eritrocitos por campo, con 80% de dismorfia y leucocitos de 10 a 15 por campo y cilindros hemáticos. Su hemograma muestra hemoglobina: 11,8 mg/dl, hematocrito: 36%, blancos: 10.000 por mm3, plaquetas: 160.000 por mm3.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Glomerulonefritis postestreptocócica' },
        { letter: 'B', text: 'Nefropatía diabética' },
        { letter: 'C', text: 'Lesión glomerular mínima' },
        { letter: 'D', text: 'Vasculitis ANCA positiva' },
        { letter: 'E', text: 'Púrpura trombocitopénico trombótico' },
      ],
      correct: 'D',
      explanation: 'Adulta mayor con síntomas generales, nefrítico (dismorfia, cilindros hemáticos, HTA) y creatinina de 4,1: GNRP, cuya causa más frecuente a esta edad es la vasculitis ANCA (poliangeítis microscópica). Plaquetas normales descartan el PTT.',
      say: {
        stem: 'Una del EUNACOM de diciembre de dos mil diecisiete. Mujer de sesenta y siete años con malestar general, febrícula y edema. Presión de ciento ochenta con ciento diez, creatinina cuatro coma uno, ochenta por ciento de dismorfia y cilindros hemáticos. Plaquetas normales.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: glomerulonefritis postestreptocócica, nefropatía diabética, lesión glomerular mínima, vasculitis ANCA positiva, o púrpura trombocitopénico trombótico. Piénsalo.',
        answer: 'Es la D, vasculitis ANCA positiva. Adulta mayor, síntomas generales, nefrítico y una creatinina de cuatro: es el perfil de la poliangeítis microscópica. La postestreptocócica tienta por el nefrítico, pero no se describe una infección previa y es un cuadro de niños y jóvenes. Y el púrpura trombocitopénico trombótico necesitaría plaquetas bajas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 106',
      stem: 'Una paciente de 76 años presenta, desde hace un mes tos, disnea y expectoración, que en ocasiones es hemoptoica. A lo anterior se agrega hematuria, orinas espumosas, edema de extremidades inferiores y malestar general. En sus exámenes destaca creatinina: 4,6 mg/dl, BUN: 89 mg/dl, K: 5,9 mEq/L, Na: 130 mEq/L, proteinuria: 1.600 mg/24 horas, ANA negativos y complemento normal.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Glomerulonefritis postestreptocócica' },
        { letter: 'B', text: 'Lupus eritematoso sistémico' },
        { letter: 'C', text: 'Tuberculosis miliar' },
        { letter: 'D', text: 'Vasculitis sistémica' },
        { letter: 'E', text: 'Púrpura trombocitopénico trombótico' },
      ],
      correct: 'D',
      explanation: 'Síndrome riñón-pulmón (hemoptisis + GNRP) en una adulta mayor con ANA negativos y complemento normal: vasculitis sistémica, probablemente poliangeítis microscópica. El complemento normal descarta la postestreptocócica y el lupus.',
      say: {
        stem: 'Ahora una del EUNACOM de julio de dos mil diecinueve. Mujer de setenta y seis años con un mes de tos y disnea, a veces con expectoración con sangre, a la que se agregan hematuria, edema y malestar. Creatinina cuatro coma seis, potasio alto, proteinuria de mil seiscientos miligramos, ANA negativos y complemento normal.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: glomerulonefritis postestreptocócica, lupus, tuberculosis miliar, vasculitis sistémica, o púrpura trombocitopénico trombótico. Piénsalo.',
        answer: 'Es la D, vasculitis sistémica. Hemoptisis más glomerulonefritis rápidamente progresiva es un síndrome riñón pulmón. A los setenta y seis años, con ANA negativos y complemento normal, lo más probable es una poliangeítis microscópica con capilaritis pulmonar. El complemento normal es el dato que descarta la postestreptocócica y el lupus.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 154',
      stem: 'Un paciente de 33 años, hospitalizado por una endocarditis subaguda por estreptococus víridans, en tratamiento con penicilina y gentamicina por vía endovenosa, presenta un cuadro de hematuria de algunos días de evolución. Se solicita sedimento de orina que muestra 50 glóbulos rojos por campo con 95% de dismorfia y presencia de cilindros hemáticos, creatinina de 2,4mg/dL, ANA (-), fracción C3 del complemento de 53mg/dL (valor normal: 75-135 mg/dL).',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Embolias renales a repetición' },
        { letter: 'B', text: 'Nefritis intersticial secundaria al uso de penicilina' },
        { letter: 'C', text: 'Daño tubular agudo secundario al uso de gentamicina' },
        { letter: 'D', text: 'Glomerulonefritis por depósito de complejos inmunes' },
        { letter: 'E', text: 'Síndrome hemolítico urémico' },
      ],
      correct: 'D',
      explanation: 'Hematuria dismórfica con cilindros hemáticos = glomerulonefritis. En una endocarditis subaguda con C3 bajo, es una glomerulonefritis por inmunocomplejos (tipo 2). Las embolias, la nefritis intersticial y la necrosis tubular no dan cilindros hemáticos ni consumen complemento.',
      say: {
        stem: 'La última, del EUNACOM de julio de dos mil diecisiete. Paciente de treinta y tres años hospitalizado por una endocarditis subaguda por estreptococo viridans, con penicilina y gentamicina. Hace hematuria con noventa y cinco por ciento de dismorfia y cilindros hemáticos, creatinina dos coma cuatro, ANA negativo, y C tres bajo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: embolias renales, nefritis intersticial por penicilina, daño tubular por gentamicina, glomerulonefritis por complejos inmunes, o síndrome hemolítico urémico. Piénsalo.',
        answer: 'Es la D, glomerulonefritis por inmunocomplejos, el tipo dos. La dismorfia y los cilindros hemáticos te dicen que el daño es glomerular, y el C tres bajo te dice que hay inmunocomplejos, que aquí vienen de la endocarditis. La pregunta te tienta con los fármacos: la gentamicina y la penicilina dañan el túbulo y el intersticio, pero no dan cilindros hemáticos ni bajan el complemento.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Reconocer', tag: 'Emergencia', kind: 'alert', items: [
          { t: 'Nefrítico + creatinina que sube en semanas', d: 'Semilunas en > 50 % de los glomérulos',
            say: 'Cerremos con las reglas de oro. Nefrítico con una creatinina que se dispara en semanas es una glomerulonefritis rápidamente progresiva, con semilunas en más de la mitad de los glomérulos.' },
          { t: 'Semiluna celular reversible, fibrosa no', d: 'El tiempo es riñón',
            say: 'La semiluna celular es reversible; la fibrosa, no. Por eso es una emergencia.' },
        ] },
        { title: 'Clasificar', tag: 'Inmunofluorescencia', kind: 'criteria', items: [
          { t: 'Lineal: anti-MBG / Goodpasture', d: 'Granular: inmunocomplejos, C3 bajo',
            say: 'Lineal es anti membrana basal y Goodpasture; granular son inmunocomplejos con C tres bajo.' },
          { t: 'Pauciinmune: ANCA, la más frecuente', d: 'ANCA-p = PAM · ANCA-c = GPA',
            say: 'Pauciinmune es vasculitis ANCA, la más frecuente en el adulto mayor: perinuclear para la poliangeítis microscópica, citoplasmático para la granulomatosis.' },
        ] },
        { title: 'Tratar', tag: 'Sin esperar', kind: 'pharma', items: [
          { t: 'Biopsia urgente + pulsos de metilprednisolona', d: 'Más ciclofosfamida o rituximab',
            say: 'Biopsia urgente, pero los pulsos de metilprednisolona con ciclofosfamida o rituximab no esperan.' },
          { t: 'Plasmaféresis en Goodpasture', d: 'Y en hemorragia alveolar',
            say: 'Y plasmaféresis en el Goodpasture y en la hemorragia alveolar. Si te llevas una sola idea de hoy: en la glomerulonefritis rápidamente progresiva el tiempo es riñón, así que se biopsia rápido y se trata sin esperar. En la próxima clase vemos una de sus causas en detalle, la nefritis lúpica. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Glomerulonefritis rápidamente progresiva: diagnóstico y rescate',
    root: N('start', 'Nefrítico + creatinina que sube en semanas', 'Sospecha de GNRP',
      'Paciente con un síndrome nefrítico activo y una creatinina que se multiplicó en semanas. Sospecha de glomerulonefritis rápidamente progresiva: hospitalizar, biopsia renal urgente y, si hay deterioro acelerado, pulsos de metilprednisolona sin esperar el resultado.',
      ['', N('q', '¿Qué muestra la inmunofluorescencia?', 'Más la serología',
        'La biopsia y la serología dicen el tipo. ¿Cómo es la inmunofluorescencia?',
        ['Lineal, anti-MBG +', N('alert', 'Tipo 1: anti-MBG / Goodpasture', 'Pulsos + ciclofosfamida + plasmaféresis',
          'Depósito lineal y anti membrana basal positivo: tipo uno. Si hay hemorragia alveolar es un Goodpasture. Pulsos, ciclofosfamida y plasmaféresis, que aquí es de primera línea.')],
        ['Granular, C3 bajo', N('do', 'Tipo 2: inmunocomplejos', 'Buscar lupus, endocarditis, VHC',
          'Depósito granular con complemento bajo: tipo dos. Busca la enfermedad de base: lupus, endocarditis, postinfecciosa o crioglobulinemia por hepatitis C, y trátala junto con la inmunosupresión.')],
        ['Pauciinmune, ANCA +', N('q', 'Tipo 3: vasculitis ANCA', '¿Hemorragia alveolar o Cr > 5,7?',
          'Casi sin depósitos y ANCA positivo: tipo tres, la más frecuente. Pulsos de metilprednisolona más ciclofosfamida o rituximab, con cotrimoxazol. ¿Hay hemorragia alveolar o creatinina sobre cinco coma siete?',
          ['SÍ', N('alert', 'Agregar plasmaféresis', '4 L diarios, 7–14 sesiones',
            'Si la hay, el libro agrega plasmaféresis de rescate.')],
          ['NO', N('ok', 'Pulsos + ciclofosfamida o rituximab', 'Más cotrimoxazol',
            'Si no, se sigue con la inducción: corticoides más ciclofosfamida o rituximab, y cotrimoxazol.')])])]),
  },
};
