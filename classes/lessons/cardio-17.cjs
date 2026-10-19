const fs = require('fs'), path = require('path');
const BANK = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'books', 'data', 'real_questions_by_code.json'), 'utf8'));
const fix = s => s.replace(/([a-záéíóúñ])- ([a-záéíóúñ])/g, '$1$2').replace(/\s+/g, ' ').trim();
// Pregunta real del banco: enunciado y alternativas tal cual (solo se unen las palabras cortadas por guion del PDF).
function realQuiz(tag, explanation, say, edit) {
  let q; for (const v of Object.values(BANK)) { q = v.find(x => x.recTag === tag); if (q) break; }
  if (!q) throw new Error('no está en el banco: ' + tag);
  let stem = fix(q.stem), question = 'Elige la alternativa correcta.';
  const i = stem.lastIndexOf('¿');
  if (i > 0) { question = stem.slice(i); stem = stem.slice(0, i).trim(); }
  else { const m = stem.match(/^(.*[.?])\s+([^.?]+:)$/); if (m) { stem = m[1]; question = m[2]; } }
  const options = q.options.map(o => ({ letter: o.id, text: fix(o.text) }));
  if (edit) edit(options);
  return { type: 'quiz', kicker: 'Pregunta real EUNACOM', title: tag, stem, question, options, correct: q.correcta, explanation, say };
}
const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });
module.exports = {
  id: 'cardio-17',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Los fármacos que alargan la vida en la fracción reducida, los que solo alivian y los que dañan',
      say: 'Bienvenido. En la clase anterior diagnosticamos la insuficiencia cardíaca y la clasificamos con la fracción de eyección. Hoy vemos el tratamiento de la fracción reducida, una de las pocas enfermedades crónicas donde los fármacos correctos cambian de verdad la sobrevida. El examen pregunta todos los años lo mismo: qué fármaco agregarías, cuál suspenderías y qué diurético mejora el pronóstico. Vamos a ordenar los cuatro pilares, las dosis, los controles y los dispositivos.',
    },

    {
      type: 'flow',
      kicker: 'Principio',
      title: 'Bloquear la neurohormona, no solo sacar agua',
      nodes: [
        { id: 'd', col: 0, row: 1, k: 'cause', t: 'Corazón débil', s: 'FEVI ≤ 40%' },
        { id: 'a', col: 1, row: 1, k: 'mech', t: 'Renina, aldosterona, simpático', s: 'Activación crónica' },
        { id: 'r', col: 2, row: 1, k: 'effect', t: 'Remodelado y arritmias', s: 'Fibrosis y dilatación' },
        { id: 'm', col: 3, row: 1, k: 'alert', t: 'Hospital y muerte', s: 'Progresión' },
        { id: 'p', col: 2, row: 0, k: 'good', t: 'Cuatro pilares', s: 'Bloquean el eje' },
        { id: 'f', col: 3, row: 2, k: 'trap', t: 'Furosemida', s: 'Solo alivia síntomas' },
      ],
      edges: [{ from: 'd', to: 'a' }, { from: 'a', to: 'r' }, { from: 'r', to: 'm' }, { from: 'p', to: 'a' }],
      steps: [
        { show: ['d', 'a'], note: 'Un sistema que ayuda y daña',
          say: 'Cuando el corazón pierde fuerza, el cuerpo activa el sistema de renina, angiotensina y aldosterona, y el simpático, para mantener la presión. Al principio compensa. Pero con los meses esa activación produce fibrosis, dilatación y arritmias.' },
        { show: ['r', 'm'], note: 'Remodelado',
          say: 'Ese remodelado es lo que lleva a las hospitalizaciones y a la muerte. Por eso el tratamiento moderno no consiste en sacar agua, sino en bloquear ese eje.' },
        { show: ['p', 'f'], note: 'Qué sí alarga la vida',
          say: 'Hay cuatro familias de fármacos que lo hacen y reducen la mortalidad. Y hay uno que solo alivia: la furosemida. Es la distinción que más se pregunta.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Panorama',
      title: 'Qué alarga la vida y qué no',
      cards: [
        { title: 'Reducen la mortalidad', tag: 'Los cuatro pilares', kind: 'key', items: [
          { t: 'ARNI, IECA o ARA II', d: 'Pilar 1',
            say: 'El primer pilar es el bloqueo de la angiotensina: un inhibidor de la neprilisina con valsartán, llamado ARNI, o un IECA, o si hay tos un ARA dos.' },
          { t: 'Betabloqueador con evidencia', d: 'Pilar 2',
            say: 'El segundo es un betabloqueador con evidencia: bisoprolol, carvedilol o metoprolol succinato.' },
          { t: 'Espironolactona', d: 'Pilar 3',
            say: 'El tercero es un antagonista de la aldosterona, es decir, la espironolactona o la eplerenona.' },
          { t: 'iSGLT2', d: 'Pilar 4',
            say: 'Y el cuarto es un inhibidor del cotransportador sodio-glucosa dos, la dapagliflozina o la empagliflozina.' },
        ] },
        { title: 'No la reducen', tag: 'Solo síntomas', kind: 'alert', items: [
          { t: 'Furosemida y otros diuréticos', d: 'Peso seco, mínima dosis',
            say: 'La furosemida y los demás diuréticos alivian la congestión, pero no modifican la historia natural. Se usa la dosis mínima que mantenga el peso seco.' },
          { t: 'Digoxina, isosorbide', d: 'Sin beneficio en mortalidad',
            say: 'La digoxina y los nitratos tampoco alargan la vida. Si el examen te pregunta qué agregar para mejorar el pronóstico, nunca será uno de estos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Pilar 1',
      title: 'IECA, ARA II o ARNI',
      cards: [
        { title: 'IECA y ARA II', tag: 'Los clásicos', kind: 'pharma', items: [
          { t: 'Enalapril 2,5 mg c/12 h → 10-20 mg', d: 'Captopril, lisinopril',
            say: 'El enalapril parte con dos coma cinco miligramos cada doce horas y se sube hasta diez o veinte miligramos cada doce horas. Reduce la poscarga y el remodelado.' },
          { t: 'Tos: cambiar a ARA II', d: 'Losartán, candesartán',
            say: 'Si da tos seca, por la bradicinina, se cambia a un ARA dos como el losartán o el candesartán. Nunca se combinan un IECA con un ARA dos.' },
          { t: 'Cuidado: embarazo, angioedema, K alto', d: 'Estenosis renal bilateral',
            say: 'Están contraindicados en el embarazo, ante un angioedema previo, con hiperkalemia grave y en la estenosis bilateral de las arterias renales.' },
        ] },
        { title: 'ARNI', tag: 'Sacubitrilo / valsartán', kind: 'key', items: [
          { t: '24/26 o 49/51 → 97/103 mg c/12 h', d: 'Supera al enalapril',
            say: 'El sacubitrilo con valsartán combina un ARA dos con el bloqueo de la neprilisina, la enzima que destruye los péptidos natriuréticos. Superó al enalapril en reducir la muerte cardiovascular y las hospitalizaciones. Se parte con veinticuatro sobre veintiséis o cuarenta y nueve sobre cincuenta y uno, y se sube hasta noventa y siete sobre ciento tres cada doce horas.' },
          { t: 'Lavado de 36 horas tras el IECA', d: 'Angioedema grave si se juntan',
            say: 'La regla de seguridad que se pregunta: suspender el IECA al menos treinta y seis horas antes de la primera dosis. Si se juntan, se acumula la bradicinina y aparece un angioedema grave. Y el ARNI nunca se combina con un IECA.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Pilar 2',
      title: 'Betabloqueadores con evidencia',
      cards: [
        { title: 'Cuáles', tag: 'Solo tres', kind: 'pharma', items: [
          { t: 'Bisoprolol, carvedilol, metoprolol succinato', d: 'No atenolol ni propranolol',
            say: 'Solo tres betabloqueadores reducen la mortalidad: bisoprolol, carvedilol y metoprolol succinato. El atenolol y el propranolol no tienen esa evidencia, así que una alternativa que diga reemplazar el carvedilol por atenolol es una trampa.' },
          { t: 'Bisoprolol 1,25 → 10 mg; carvedilol 3,125 → 25 mg c/12 h', d: 'Metoprolol succ. 12,5-25 → 200 mg',
            say: 'Bisoprolol parte con uno coma veinticinco miligramos al día y llega a diez. Carvedilol parte con tres coma ciento veinticinco cada doce horas y llega a veinticinco. Reducen la muerte súbita y mejoran la fracción de eyección con los meses.' },
        ] },
        { title: 'Cómo iniciarlo', tag: 'La regla', kind: 'criteria', items: [
          { t: 'Euvolémico y estable', d: 'FC > 60, sin shock ni bloqueo',
            say: 'Se inicia con el paciente compensado, sin congestión grave, sin shock, con frecuencia sobre sesenta y sin bloqueo avanzado.' },
          { t: 'Duplicar la dosis cada 2 semanas', d: 'Si empeora la congestión: subir diurético',
            say: 'Se duplica la dosis cada dos semanas. Si al principio empeora un poco la congestión, se sube el diurético y no se suspende el betabloqueador. En la descompensación aguda no se inicia, pero el que ya tomaba se mantiene, salvo shock o bradicardia grave.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Pilar 3',
      title: 'Espironolactona',
      cards: [
        { title: 'Qué hace', tag: 'Reduce la mortalidad', kind: 'key', items: [
          { t: 'Bloquea la aldosterona', d: '12,5-25 mg/día → 25-50 mg',
            say: 'La aldosterona retiene sodio, produce fibrosis y hace perder potasio, y sigue alta aunque se use un IECA. La espironolactona, de doce coma cinco a veinticinco miligramos al día, hasta cincuenta, o la eplerenona, reducen la mortalidad.' },
          { t: 'La respuesta de las preguntas reales', d: 'No tiazidas ni torasemida',
            say: 'Es la respuesta de muchas preguntas reales: qué diurético se agrega para mejorar el pronóstico, o qué fármaco es más importante agregar a un paciente que ya tiene IECA, betabloqueador y furosemida. Siempre la espironolactona, no la hidroclorotiazida, la clortalidona ni la torasemida.' },
        ] },
        { title: 'Seguridad', tag: 'Control estricto', kind: 'alert', items: [
          { t: 'K < 5,0 y VFG > 30', d: 'Antes de iniciar',
            say: 'Se inicia solo con potasio menor de cinco y filtración glomerular mayor de treinta.' },
          { t: 'Controlar K y creatinina: 3 días, 1 semana, mensual', d: 'Ginecomastia: eplerenona',
            say: 'Se controlan potasio y creatinina a los tres días, a la semana y luego cada mes por tres meses. Se reduce si el potasio pasa de cinco coma cinco. No se asocia con suplementos de potasio ni antiinflamatorios. Si da ginecomastia, se cambia a eplerenona.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Pilar 4',
      title: 'iSGLT2: dapagliflozina y empagliflozina',
      cards: [
        { title: 'Qué aportan', tag: 'Con o sin diabetes', kind: 'key', items: [
          { t: '10 mg al día, sin titular', d: 'Dapagliflozina o empagliflozina',
            say: 'Los inhibidores del cotransportador sodio-glucosa dos nacieron como antidiabéticos. En la insuficiencia cardíaca reducen las hospitalizaciones y la muerte cardiovascular, en diabéticos y en no diabéticos. Se usa diez miligramos al día, sin titulación y con poco efecto sobre la presión.' },
          { t: 'También en FEmr y FEp', d: 'Único con beneficio en la FEp',
            say: 'Sirven también en la fracción levemente reducida y en la preservada, donde son el grupo con beneficio demostrado.' },
        ] },
        { title: 'Precauciones', tag: 'Lo que se vigila', kind: 'alert', items: [
          { t: 'Infección genital, hipovolemia', d: 'VFG ≥ 20-25',
            say: 'Se vigilan las infecciones genitales por hongos y la depleción de volumen si ya hay dosis altas de diurético. Se pueden iniciar con filtración sobre veinte a veinticinco.' },
          { t: 'Cetoacidosis euglicémica', d: 'Suspender 3 días antes de cirugía',
            say: 'Y la cetoacidosis euglicémica, que es rara: se suspenden tres días antes de una cirugía y durante una enfermedad aguda con mala ingesta. No se usan en la diabetes tipo uno.' },
        ] },
      ],
    },

    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'Cuatro pilares, dos semanas a la vez',
      images: [
        { src: 'animaciones/cardio-17/A1_cuatro_pilares_titulacion.mp4', label: 'Titulación de los cuatro pilares', credit: 'Gráfico propio · criterios del Manual EUNACOM de Cardiología' },
      ],
      steps: [
        { note: 'De la dosis inicial a la meta en ocho semanas',
          say: 'Mira cómo se arma el tratamiento en el tiempo. Se parte el mismo día con dosis bajas de varios pilares, y cada una o dos semanas se sube la dosis de uno, con controles de potasio y creatinina. En unas ocho semanas el paciente ya tiene los cuatro en dosis meta, y a los tres meses se repite el ecocardiograma para decidir si necesita un desfibrilador.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Otros fármacos',
      title: 'Diurético y los que suman',
      cards: [
        { title: 'Furosemida', tag: 'Peso seco', kind: 'pharma', items: [
          { t: '20-40 mg al día; la mínima dosis', d: 'En falla renal: de asa, no tiazida',
            say: 'La furosemida se ajusta al peso seco, con la dosis mínima suficiente, porque el exceso produce hipovolemia, falla renal e hipokalemia. En la insuficiencia renal el diurético es el de asa, no la tiazida.' },
          { t: 'Hidroclorotiazida sola: no mejora el pronóstico', d: 'Esquema incompleto',
            say: 'Un esquema con enalapril e hidroclorotiazida está incompleto: falta betabloqueador y espironolactona.' },
        ] },
        { title: 'Indicaciones precisas', tag: 'Segundo escalón', kind: 'criteria', items: [
          { t: 'Ivabradina', d: 'Sinusal, FC ≥ 70, FEVI ≤ 35%',
            say: 'La ivabradina, en ritmo sinusal con frecuencia de setenta o más a pesar de la dosis máxima de betabloqueador.' },
          { t: 'Hidralazina + isosorbide; hierro EV', d: 'Sin tolerar IECA; déficit de hierro',
            say: 'Hidralazina con isosorbide cuando no se tolera el IECA, el ARA dos ni el ARNI. Y hierro endovenoso si hay déficit de hierro.' },
          { t: 'Digoxina: solo síntomas o FA', d: 'Falla renal: se acumula',
            say: 'La digoxina para síntomas persistentes o fibrilación auricular, sin efecto sobre la mortalidad y con riesgo en la insuficiencia renal, porque se elimina por el riñón.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Qué evitar',
      title: 'Fármacos que empeoran la insuficiencia',
      cards: [
        { title: 'Suspender', tag: 'Muy preguntado', kind: 'alert', items: [
          { t: 'Nifedipino', d: 'Inotropo negativo',
            say: 'El más preguntado: el nifedipino. Dos preguntas reales piden qué fármaco debe suspenderse en un paciente con insuficiencia cardíaca y disfunción sistólica, entre losartán, metformina, aspirina, hidroclorotiazida y nifedipino. Siempre es el nifedipino.' },
          { t: 'Verapamilo y diltiazem', d: 'Deprimen la contractilidad',
            say: 'El verapamilo y el diltiazem también deprimen la contractilidad y no se usan en la fracción reducida.' },
          { t: 'AINE y pioglitazona', d: 'Retienen sodio y agua',
            say: 'Los antiinflamatorios retienen sodio y bloquean el IECA, y la pioglitazona retiene líquido. Tampoco se usan antiarrítmicos de clase uno.' },
        ] },
        { title: 'Ojo con el amlodipino', tag: 'Neutro', kind: 'normal', items: [
          { t: 'Amlodipino: neutro, pero da edema', d: 'Se confunde con congestión',
            say: 'El amlodipino es neutro en la insuficiencia, pero produce edema de las piernas que se confunde con congestión. Si el paciente tiene piernas hinchadas con presión normal y toma amlodipino, se suspende.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cómo iniciar',
      title: 'Secuencia práctica y fracciones no reducidas',
      cards: [
        { title: 'Fracción reducida', tag: 'Paso a paso', kind: 'key', items: [
          { t: 'Descongestionar; iniciar iSGLT2 y betabloqueador', d: 'Luego IECA/ARNI y espironolactona',
            say: 'Primero se descongestiona hasta el peso seco. Luego se inicia el inhibidor del cotransportador y el betabloqueador a dosis baja, y en las semanas siguientes el IECA o el ARNI y la espironolactona, con control de creatinina y potasio a la semana.' },
          { t: 'Un fármaco cada 1-2 semanas', d: 'Meta en 6-8 semanas',
            say: 'Se titula un fármaco cada una o dos semanas, de modo que en seis a ocho semanas tenga los cuatro. La hipotensión sin síntomas no obliga a suspender.' },
        ] },
        { title: 'FEmr y FEp', tag: 'Otro enfoque', kind: 'criteria', items: [
          { t: 'FEmr: iSGLT2 y según el caso los otros', d: 'Tratar como FEr si baja',
            say: 'En la fracción levemente reducida, se usa el inhibidor del cotransportador y los otros pilares según el caso.' },
          { t: 'FEp: iSGLT2, diurético, comorbilidades', d: 'HTA, FA, obesidad, diabetes',
            say: 'En la fracción preservada se usa el inhibidor del cotransportador, diurético para la congestión y, sobre todo, tratar las comorbilidades: hipertensión, fibrilación auricular, obesidad, diabetes y apnea del sueño.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Dispositivos',
      title: 'Desfibrilador y resincronizador',
      cards: [
        { title: 'DAI', tag: 'Muerte súbita', kind: 'alert', items: [
          { t: 'FEVI ≤ 35% tras 3 meses de terapia óptima', d: 'NYHA II-III, expectativa > 1 año',
            say: 'El desfibrilador implantable previene la muerte súbita. En prevención primaria se indica con fracción de eyección de treinta y cinco por ciento o menos a pesar de al menos tres meses de tratamiento óptimo, en clase dos o tres y con una expectativa de vida de más de un año.' },
          { t: 'Prevención secundaria', d: 'Tras TV o FV no reversible',
            say: 'En prevención secundaria, si el paciente sobrevivió a una taquicardia o fibrilación ventricular que no tenía causa reversible.' },
        ] },
        { title: 'Resincronizador (TRC)', tag: 'Marcapaso biventricular', kind: 'criteria', items: [
          { t: 'Sinusal, FEVI ≤ 35%, BCRI con QRS ≥ 150 ms', d: '130-149: considerar',
            say: 'El resincronizador se indica en ritmo sinusal, con fracción de treinta y cinco por ciento o menos, síntomas pese al tratamiento y bloqueo completo de rama izquierda con QRS de ciento cincuenta milisegundos o más. Entre ciento treinta y ciento cuarenta y nueve, se considera. Mejora los síntomas y reduce hospitalizaciones y mortalidad.' },
          { t: 'Estadio D: trasplante o asistencia', d: 'Y cuidados paliativos',
            say: 'En la insuficiencia avanzada, estadio D, se evalúa el trasplante, la asistencia ventricular o los cuidados paliativos.' },
        ] },
      ],
    },

    { type: 'pathway', intro: 'Armemos el árbol: de la fracción reducida a los dispositivos.' },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Tratamiento de la IC: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['IECA + betabloqueador + furosemida, FEVI baja', 'Agregar espironolactona', 'Agregar losartán o más diurético'],
          say: 'Con IECA, betabloqueador y furosemida y la fracción baja, lo que falta es la espironolactona. Agregar un ARA dos al IECA es el error.' },
        { cells: ['IC con nifedipino', 'Suspender el nifedipino', 'Suspender el IECA'],
          say: 'Insuficiencia con nifedipino: se suspende el nifedipino, que es inotropo negativo.' },
        { cells: ['IC + hidroclorotiazida sin betabloqueador', 'Agregar carvedilol', 'Agregar isosorbide o más tiazida'],
          say: 'Si falta el betabloqueador, es lo más importante de agregar. Más tiazida o nitratos solo alivian síntomas.' },
        { cells: ['Cambio de IECA a ARNI', '36 horas de lavado', 'Cambio directo'],
          say: 'Para pasar de un IECA al sacubitrilo hay que esperar treinta y seis horas. El cambio directo produce angioedema.' },
        { cells: ['Reemplazar carvedilol por atenolol', 'No hacerlo', 'Cualquier betabloqueador sirve'],
          say: 'Solo bisoprolol, carvedilol y metoprolol succinato tienen evidencia. El atenolol no.' },
        { cells: ['IC con creatinina alta y digoxina', 'Es la menos adecuada', 'Usarla para mejorar la sobrevida'],
          say: 'La digoxina se acumula en la falla renal y no mejora la mortalidad. Es la menos adecuada de la lista.' },
        { cells: ['FEVI ≤ 35% tras 3 meses de tratamiento', 'Evaluar DAI', 'Implantar apenas se mide la FEVI'],
          say: 'El desfibrilador se indica después de tres meses de terapia óptima, no apenas se mide la fracción.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 59 años con miocardiopatía dilatada posinfarto y FEVI de 28%, en clase II de la NYHA, recibe solo enalapril 10 mg cada 12 horas y furosemida 40 mg al día. Está euvolémico: PA 118/75 mmHg, FC 74 lpm. Creatinina 1,0 mg/dL y potasio 4,3 mEq/L.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Agregar betabloqueador con evidencia, espironolactona e iSGLT2, y titular, con control de creatinina y potasio' },
        { letter: 'B', text: 'Aumentar la furosemida a 120 mg al día' },
        { letter: 'C', text: 'Cambiar el enalapril por losartán y agregar verapamilo' },
        { letter: 'D', text: 'Agregar digoxina como único fármaco adicional' },
        { letter: 'E', text: 'Implantar un desfibrilador de inmediato' },
      ],
      correct: 'A',
      explanation: 'Tiene IC con fracción reducida con un solo pilar. Se agregan betabloqueador (bisoprolol, que se duplica cada 2 semanas), espironolactona (potasio 4,3 y filtración normal) e iSGLT2, y el IECA se titula o se cambia por ARNI con 36 horas de lavado. El diurético no mejora el pronóstico, el verapamilo lo empeora y el DAI se evalúa después de 3 meses de tratamiento óptimo.',
      say: {
        stem: 'Un hombre de cincuenta y nueve años con miocardiopatía dilatada posinfarto y fracción de eyección de veintiocho por ciento está en clase dos, con enalapril y furosemida. Está compensado, con presión de ciento dieciocho sobre setenta y cinco, creatinina normal y potasio de cuatro coma tres.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: agregar betabloqueador, espironolactona y el inhibidor del cotransportador, y titular; subir la furosemida; cambiar a losartán y agregar verapamilo; agregar solo digoxina; o implantar un desfibrilador de inmediato. Piénsalo.',
        answer: 'Es la A. Solo tiene un pilar de cuatro. Se agregan el betabloqueador, la espironolactona, con potasio y filtración adecuados, y el inhibidor del cotransportador, y se titulan. La B tienta porque suena a más tratamiento, pero la furosemida no mejora la sobrevida. Y el desfibrilador se evalúa a los tres meses de terapia óptima.',
      },
    },

    realQuiz('EUNACOM Julio 2025 · Pregunta 1',
      'La espironolactona reduce la mortalidad en la IC con fracción reducida y clase III-IV (estudio RALES) y se agrega a la furosemida y al IECA, controlando potasio y creatinina. Hidroclorotiazida, indapamida, clortalidona y torasemida aumentan la diuresis pero no mejoran el pronóstico.',
      {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Una mujer de sesenta y ocho años tiene insuficiencia cardíaca con fracción de eyección de treinta y cinco por ciento, clase funcional tres, y recibe furosemida y enalapril.',
        question: '¿Cuál es el diurético que se debe agregar para mejorar el pronóstico?',
        options: 'Las opciones: hidroclorotiazida; indapamida; clortalidona; espironolactona; o torasemida. Piénsalo.',
        answer: 'Es la D. La espironolactona es el diurético que reduce la mortalidad, porque bloquea la aldosterona, y se agrega controlando potasio y creatinina. Las otras alivian el edema pero no mejoran el pronóstico. La E tienta porque la torasemida es un diurético de asa, pero no alarga la vida.',
      }),

    realQuiz('EUNACOM Diciembre 2017 · Pregunta 10',
      'Es un insuficiente cardíaco con IECA y diurético, pero sin betabloqueador: el carvedilol reduce la mortalidad y la muerte súbita. El losartán no se agrega porque ya recibe un IECA; el isosorbide y más diurético solo alivian síntomas.',
      {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Un hombre de sesenta y seis años, hipertenso e insuficiente cardíaco, con enalapril e hidroclorotiazida, tiene disnea de grandes esfuerzos, ortopnea de dos almohadas y poco edema. El electrocardiograma tiene signos de hipertrofia ventricular izquierda.',
        question: '¿Cuál fármaco es más importante agregar?',
        options: 'Las opciones: isosorbide; carvedilol; losartán; furosemida; o hidroclorotiazida. Piénsalo.',
        answer: 'Es la B. Le falta el betabloqueador, que aumenta la sobrevida. La C tienta porque el losartán también la aumenta, pero el paciente ya recibe un IECA y no se combinan.',
      }),

    realQuiz('EUNACOM Agosto 2021 · Pregunta 135',
      'Con FEVI 23% y disnea progresiva, el fármaco que agrava la IC es el nifedipino, por su efecto inotrópico negativo; se suspende y se agregan betabloqueador (dosis baja) y espironolactona. El losartán, la aspirina y la metformina no están contraindicados.',
      {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Un hombre de setenta y un años, hipertenso y diabético, con insuficiencia cardíaca, recibe losartán, metformina, aspirina, nifedipino e hidroclorotiazida. Su disnea progresó: aparece al caminar una cuadra, con edema, crépitos bilaterales y una fracción de eyección de veintitrés por ciento.',
        question: '¿Qué fármaco debe suspenderse?',
        options: 'Las opciones: losartán; metformina; aspirina; nifedipino; o hidroclorotiazida. Piénsalo.',
        answer: 'Es la D. El nifedipino es un inotropo negativo y empeora la insuficiencia con disfunción sistólica. La E tienta, porque la tiazida también retiene o pierde electrolitos, pero no es la que agrava la bomba.',
      }),

    realQuiz('EUNACOM Diciembre 2017 · Pregunta 8',
      'Con fracción de eyección de 24% y síntomas pese a enalapril, carvedilol y furosemida, falta el tercer pilar: agregar espironolactona. Reemplazar el diurético por hidroclorotiazida, el enalapril por losartán o el carvedilol por atenolol no mejora el pronóstico.',
      {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Un hombre de cincuenta años con miocardiopatía dilatada, en tratamiento con enalapril, carvedilol y furosemida, tiene disnea de esfuerzos moderados, ortopnea, choque de la punta desplazado y crepitaciones en ambas bases. El ecocardiograma muestra una fracción de eyección de veinticuatro por ciento.',
        question: '¿Qué cambio recomendaría?',
        options: 'Las opciones: reemplazar la furosemida por hidroclorotiazida; reemplazar el enalapril por losartán; reemplazar el carvedilol por atenolol; agregar hidralazina; o agregar espironolactona. Piénsalo.',
        answer: 'Es la E. Ya tiene IECA y betabloqueador; falta el antagonista de la aldosterona. Las tres primeras son reemplazos sin beneficio, y la hidralazina es para quien no tolera el IECA.',
      }),

    realQuiz('EUNACOM Diciembre 2017 · Pregunta 13',
      'Con fracción de eyección de 28% los pilares son IECA o ARA II, betabloqueador, espironolactona y diurético de asa, con control estricto si hay creatinina de 1,8 mg/dL y potasio de 3,8. La digoxina es la menos adecuada: se acumula en la insuficiencia renal, con riesgo de intoxicación, y no mejora la mortalidad.',
      {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Una mujer de cuarenta años con asma e insuficiencia cardíaca tiene un ecocardiograma con cardiomegalia, paredes finas y fracción de eyección de veintiocho por ciento. La creatinina es uno coma ocho y el potasio tres coma ocho.',
        question: '¿Qué fármaco está contraindicado en esta paciente?',
        options: 'Las opciones: enalapril; losartán; furosemida; espironolactona; o digoxina. Piénsalo.',
        answer: 'La clave publicada es la E. La digoxina se elimina por el riñón y se acumula con creatinina elevada, con riesgo de intoxicación, y además no mejora la mortalidad. Los otros cuatro son pilares o diurético y se pueden usar con control. Nota: hablar de contraindicación es discutible; es la menos adecuada.',
      }),

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: tratamiento de la IC con fracción reducida',
      cards: [
        { title: 'Los pilares', tag: 'Alargan la vida', kind: 'key', items: [
          { t: 'ARNI o IECA; betabloqueador; espironolactona; iSGLT2', d: 'Se inician y se titulan',
            say: 'Cerremos con las reglas de oro. Cuatro pilares alargan la vida: el ARNI o el IECA, un betabloqueador con evidencia, la espironolactona y el inhibidor del cotransportador sodio-glucosa dos.' },
          { t: 'IECA → ARNI: 36 horas', d: 'Potasio y creatinina en cada paso',
            say: 'Del IECA al ARNI, treinta y seis horas de lavado. Y controlas potasio y creatinina al iniciar la espironolactona y el bloqueo de la angiotensina.' },
        ] },
        { title: 'Lo que no', tag: 'Y lo que daña', kind: 'alert', items: [
          { t: 'Furosemida: síntomas, no sobrevida', d: 'Mínima dosis, peso seco',
            say: 'La furosemida alivia, pero no alarga la vida.' },
          { t: 'Suspender nifedipino, verapamilo, AINE', d: 'DAI y TRC a los 3 meses si FEVI ≤ 35%',
            say: 'Suspende el nifedipino, el verapamilo, el diltiazem y los antiinflamatorios, y a los tres meses evalúa el desfibrilador y el resincronizador. Si te llevas una sola idea de hoy: en la fracción reducida se bloquea la neurohormona con cuatro fármacos y el diurético solo sirve para los síntomas. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Insuficiencia cardíaca con fracción reducida: del diagnóstico a los dispositivos',
    root: N('start', 'IC con FEVI ≤ 40%', 'Estable, sin shock',
      'Tienes un paciente con insuficiencia cardíaca con fracción de eyección de cuarenta por ciento o menos y estable. Lo primero es el peso seco y los cuatro pilares.',
      ['Con congestión', N('do', 'Furosemida hasta el peso seco', 'Mínima dosis eficaz',
        'Si hay congestión, parte con el diurético de asa hasta alcanzar el peso seco. Es sintomático, no alarga la vida.')],
      ['Compensado', N('do', 'Iniciar los cuatro pilares', 'Dosis bajas, titular cada 1-2 semanas',
        'Con el paciente compensado, inicias betabloqueador, inhibidor del cotransportador, espironolactona y el IECA o ARNI, y subes uno cada una o dos semanas, controlando potasio y creatinina.',
        ['Controles a los 3 meses', N('q', 'FEVI ≤ 35%, NYHA II-III', 'Con tratamiento óptimo',
          'A los tres meses con terapia óptima, repites el ecocardiograma y preguntas si la fracción sigue en treinta y cinco o menos.',
          ['QRS ≥ 150 ms con BCRI', N('alert', 'Resincronizador (TRC)', 'Ritmo sinusal',
            'Si hay bloqueo de rama izquierda con QRS de ciento cincuenta o más en ritmo sinusal, se indica el resincronizador.')],
          ['Sin esa conducción', N('alert', 'Desfibrilador (DAI)', 'Prevención primaria',
            'Si no se cumple eso, se indica el desfibrilador implantable en prevención primaria, con expectativa de vida de más de un año.')],
        )],
      )],
    ),
  },
};
