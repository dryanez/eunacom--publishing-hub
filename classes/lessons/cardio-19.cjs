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
  id: 'cardio-19',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Reconocer el shock, distinguir sus cuatro tipos y tratar el cardiogénico',
      say: 'Bienvenido. Un paciente con la presión baja, la piel fría y confuso es una emergencia en que tienes minutos para decidir qué tipo de shock es, porque el tratamiento de uno es el veneno del otro. En la clase anterior vimos el edema agudo de pulmón. Hoy vemos el shock cardiogénico y su diagnóstico diferencial con los otros tres shocks: el perfil hemodinámico, el vasopresor de primera línea y la medida que realmente salva la vida después de un infarto.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Presión = gasto por resistencia',
      nodes: [
        { id: 'g', col: 0, row: 1, k: 'mech', t: 'Gasto cardíaco', s: 'FC, precarga, contractilidad' },
        { id: 'r', col: 0, row: 3, k: 'mech', t: 'Resistencia vascular', s: 'Tono de las arterias' },
        { id: 'p', col: 2, row: 2, k: 'q', t: 'Presión media', s: 'PAM ≥ 65 mmHg' },
        { id: 'h', col: 3, row: 2, k: 'alert', t: 'Hipoperfusión', s: 'Oliguria, confusión' },
        { id: 'l', col: 4, row: 2, k: 'effect', t: 'Lactato y acidosis', s: '> 2 mmol/L' },
      ],
      edges: [{ from: 'g', to: 'p' }, { from: 'r', to: 'p' }, { from: 'p', to: 'h' }, { from: 'h', to: 'l' }],
      steps: [
        { show: ['g', 'r', 'p'], note: 'Dos factores sostienen la presión',
          say: 'La presión arterial media es el producto del gasto cardíaco por la resistencia vascular. Y el gasto depende de la frecuencia, de la precarga, de la contractilidad y de la poscarga. El shock aparece cuando falla alguno de esos eslabones.' },
        { show: ['h', 'l'], note: 'Lo que define el shock es la hipoperfusión',
          say: 'Pero lo que define el shock no es la cifra de presión, sino la hipoperfusión: los órganos no reciben el oxígeno que necesitan, las células pasan a metabolismo anaerobio y se acumula lactato. La hipotensión puede faltar al principio, porque la taquicardia y la vasoconstricción la compensan.' },
      ],
    },

    {
      type: 'points',
      kicker: 'A la cabecera',
      title: 'Cómo se reconoce y se clasifica',
      cards: [
        { title: 'Hipoperfusión', tag: 'Sin esperar exámenes', kind: 'alert', items: [
          { t: 'Confusión, oliguria < 0,5 mL/kg/h', d: 'PAS < 90 o PAM < 65',
            say: 'Los signos de hipoperfusión que buscas sin esperar exámenes son la confusión o somnolencia, la diuresis menor de cero coma cinco mililitros por kilo por hora, la piel fría, pálida o moteada con llenado capilar lento, la taquicardia y la taquipnea. La definición práctica es presión sistólica bajo noventa o media bajo sesenta y cinco, con esos signos.' },
          { t: 'Lactato > 2 mmol/L', d: 'Marcador de respuesta',
            say: 'El lactato sobre dos milimoles por litro lo confirma, y su descenso mide la respuesta al tratamiento.' },
        ] },
        { title: 'Tres preguntas', tag: '¿Volumen, bomba, tubería u obstáculo?', kind: 'key', items: [
          { t: 'Piel fría o caliente', d: 'Caliente al inicio: distributivo',
            say: 'Para clasificar el shock te haces tres preguntas. Primero, la piel: fría en el hipovolémico, el cardiogénico y el obstructivo, y caliente al inicio del distributivo.' },
          { t: 'Yugulares: planas o altas', d: 'Altas: cardiogénico u obstructivo',
            say: 'Segundo, las yugulares: planas en el hipovolémico y el distributivo, y altas en el cardiogénico y el obstructivo.' },
          { t: 'Pulmones: crépitos o limpios', d: 'Y ecografía a la cabecera',
            say: 'Tercero, los pulmones: con crépitos en el cardiogénico y limpios en el obstructivo. Y una ecografía de corazón, vena cava y pulmón lo confirma en minutos.' },
        ] },
      ],
    },

    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'Los cuatro shocks en una tabla',
      images: [
        { src: 'animaciones/cardio-19/A1_cuatro_shocks_hemodinamia.mp4', label: 'Perfil hemodinámico de los cuatro shocks', credit: 'Gráfico propio · criterios del Manual EUNACOM de Cardiología' },
      ],
      steps: [
        { note: 'Gasto, presión de llenado y resistencia',
          say: 'Mira el perfil de cada uno. El cardiogénico: gasto bajo, presión de llenado alta y resistencia alta. El hipovolémico: gasto bajo, presión de llenado baja y resistencia alta. El distributivo: gasto alto y resistencia baja. Y el obstructivo: gasto bajo, presión venosa alta y resistencia alta. Fíjate: el gasto está bajo en tres de los cuatro, y solo el distributivo tiene resistencia baja.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Hipovolémico y distributivo',
      title: 'Los dos de yugulares bajas',
      cards: [
        { title: 'Hipovolémico', tag: 'Falta volumen', kind: 'normal', items: [
          { t: 'Hemorragia, vómitos, quemaduras', d: 'Yugulares planas, mucosas secas',
            say: 'El shock hipovolémico es el de la hemorragia, los vómitos y la diarrea, las quemaduras y el tercer espacio. Tiene yugulares planas, mucosas secas y piel fría.' },
          { t: 'Volumen o sangre y controlar la fuente', d: 'Vasopresores solo de puente',
            say: 'Se trata con cristaloides o sangre y control del sitio de sangrado. Los vasopresores son solo un puente. Con las pérdidas de más de treinta por ciento aparecen hipotensión, oliguria y confusión.' },
        ] },
        { title: 'Distributivo', tag: 'Falla la tubería', kind: 'key', items: [
          { t: 'Sepsis, anafilaxia, neurogénico', d: 'Gasto alto, resistencia baja, piel caliente',
            say: 'El shock distributivo es el de la sepsis, la anafilaxia y el shock neurogénico. Hay vasodilatación y fuga capilar: el gasto está alto con resistencia baja, y la piel es caliente y enrojecida al inicio.' },
          { t: 'Sepsis: antibiótico en la 1.ª hora + noradrenalina', d: 'Anafilaxia: adrenalina IM',
            say: 'En la sepsis, antibiótico en la primera hora, cristaloide treinta mililitros por kilo y noradrenalina si no se logra la presión media. En la anafilaxia, adrenalina intramuscular en el muslo. Y el neurogénico se reconoce por hipotensión con bradicardia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Obstructivo',
      title: 'Alguien tiene que quitar el obstáculo',
      cards: [
        { title: 'Las tres causas', tag: 'Yugulares altas, pulmones limpios', kind: 'alert', items: [
          { t: 'TEP masivo', d: 'Disnea súbita, VD dilatado: trombolisis',
            say: 'El shock obstructivo tiene yugulares muy altas con los pulmones limpios. La embolia pulmonar masiva produce disnea súbita, hipoxemia y un ventrículo derecho dilatado en la ecografía. Se trata con anticoagulación y trombolisis.' },
          { t: 'Taponamiento cardíaco', d: 'Tríada de Beck: pericardiocentesis',
            say: 'El taponamiento se sospecha con la tríada de Beck: hipotensión, yugulares ingurgitadas y ruidos cardíacos apagados, más pulso paradójico. El tratamiento es la pericardiocentesis.' },
          { t: 'Neumotórax a tensión', d: 'Clínico: descomprimir sin esperar la Rx',
            say: 'Y el neumotórax a tensión es un diagnóstico clínico, sin murmullo y con desviación de la tráquea. Se descomprime con aguja y se drena, sin esperar la radiografía.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Shock cardiogénico',
      title: 'Qué es y por qué ocurre',
      cards: [
        { title: 'Definición', tag: 'Falla de bomba', kind: 'key', items: [
          { t: 'PAS < 90 por > 30 min o vasopresores', d: 'Con hipoperfusión y congestión',
            say: 'El shock cardiogénico es la hipoperfusión por falla de la bomba, con volumen adecuado. Se define por presión sistólica bajo noventa por más de treinta minutos, o necesidad de vasopresores, con signos de hipoperfusión y congestión pulmonar.' },
          { t: 'Killip IV; perfil frío y húmedo', d: 'Mortalidad 40-50%',
            say: 'En el infarto es el Killip cuatro, el perfil frío y húmedo de Forrester. Sigue teniendo una mortalidad de cuarenta a cincuenta por ciento.' },
        ] },
        { title: 'Causas', tag: 'El infarto lidera', kind: 'alert', items: [
          { t: 'IAM extenso: ~80%', d: 'Anterior grande, VD',
            say: 'La causa principal es el infarto agudo, alrededor del ochenta por ciento, por pérdida extensa de músculo, como un infarto anterior grande.' },
          { t: 'Complicaciones mecánicas', d: 'Papilar, CIV, pared libre',
            say: 'O por una complicación mecánica: rotura del músculo papilar, comunicación interventricular o rotura de la pared libre.' },
          { t: 'Miocarditis, valvulopatía, arritmia, Takotsubo', d: 'Periparto, intoxicaciones',
            say: 'Otras causas son la miocarditis fulminante, las valvulopatías agudas, las arritmias graves, el Takotsubo, la miocardiopatía periparto y las intoxicaciones por betabloqueadores o calcioantagonistas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Qué se pide y qué se busca',
      cards: [
        { title: 'Inmediato', tag: 'Sin retrasar el tratamiento', kind: 'key', items: [
          { t: 'ECG, troponina, lactato, gases', d: 'Creatinina y función hepática',
            say: 'Se toma un electrocardiograma de doce derivaciones, troponina, lactato, gases arteriales, creatinina y pruebas hepáticas, y una radiografía de tórax.' },
          { t: 'Ecocardiograma urgente', d: 'Función, válvulas, derrame, comunicaciones',
            say: 'El ecocardiograma urgente muestra la función de ambos ventrículos, las válvulas, el derrame pericárdico y las comunicaciones. Es clave para descartar una complicación mecánica: un soplo nuevo a los tres a siete días de un infarto debe hacerte pensar en ella.' },
        ] },
        { title: 'Coronariografía', tag: 'Parte del manejo', kind: 'alert', items: [
          { t: 'Todo shock con sospecha isquémica', d: 'Angioplastía de la culpable',
            say: 'La coronariografía es parte del tratamiento en todo shock con sospecha de origen isquémico, porque permite abrir la arteria culpable.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Abrir la arteria; sostener presión y gasto',
      cards: [
        { title: 'Reperfusión', tag: 'Lo que cambia la sobrevida', kind: 'key', items: [
          { t: 'Angioplastía primaria inmediata', d: 'Sin importar el tiempo de evolución',
            say: 'En el infarto con shock, el tratamiento que cambia la sobrevida es la angioplastía primaria inmediata de la arteria culpable, sin importar el tiempo de evolución, aun pasadas las ciento veinte minutos. La fibrinólisis solo si no hay hemodinamia.' },
          { t: 'Cirugía urgente en complicación mecánica', d: 'Cardioversión o marcapaso en arritmias',
            say: 'Las complicaciones mecánicas van a cirugía de urgencia. Las arritmias se tratan con cardioversión o marcapaso, y el taponamiento con pericardiocentesis.' },
        ] },
        { title: 'Fármacos', tag: 'Soporte hemodinámico', kind: 'pharma', items: [
          { t: 'Noradrenalina 0,05-1 mcg/kg/min', d: 'PAM ≥ 65; menos arritmias que dopamina',
            say: 'El vasopresor de primera línea es la noradrenalina, en infusión continua, para llevar la presión media a sesenta y cinco o más. Tiene menos arritmias y menor mortalidad que la dopamina.' },
          { t: 'Dobutamina 2,5-20 mcg/kg/min', d: 'Inótropo; con noradrenalina si hay hipotensión',
            say: 'El inótropo es la dobutamina, que aumenta la contractilidad por el receptor beta uno. Si hay hipotensión, se asocia a la noradrenalina.' },
          { t: 'No rellenar con volumen', d: 'Salvo infarto del VD o hipovolemia',
            say: 'No se rellena con litros de suero: el paciente está congestionado. Solo un bolo pequeño si hay hipovolemia clara o infarto del ventrículo derecho.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Soporte',
      title: 'Cuando los fármacos no bastan',
      cards: [
        { title: 'Soporte mecánico', tag: 'UCI cardiológica', kind: 'criteria', items: [
          { t: 'Balón, Impella, ECMO venoarterial', d: 'Puente a recuperación o trasplante',
            say: 'Si no responde, en una UCI cardiológica se usa el soporte circulatorio mecánico: el balón de contrapulsación, que ya no es de rutina, dispositivos percutáneos como el Impella, y el ECMO venoarterial, como puente a la recuperación, al trasplante o a la asistencia definitiva.' },
          { t: 'Derivar precozmente', d: 'Hemodinamia y UCI, con noradrenalina iniciada',
            say: 'Tu rol como médico general es derivar precozmente, con noradrenalina ya iniciada, monitor y médico en la ambulancia, a un centro con hemodinamia y UCI.' },
        ] },
        { title: 'Ventilación', tag: 'Hipoxemia', kind: 'normal', items: [
          { t: 'VNI o intubación', d: 'Cuidado con la presión alta en infarto de VD',
            say: 'Si hay hipoxemia grave, ventilación no invasiva o intubación, con cuidado de no usar presiones muy altas en el infarto del ventrículo derecho.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Errores',
      title: 'Lo que no se debe hacer',
      cards: [
        { title: 'Errores clásicos', tag: 'Se castigan', kind: 'alert', items: [
          { t: 'Litros de suero al cardiogénico', d: 'Empeora el edema pulmonar',
            say: 'El primer error: dar litros de suero al shock cardiogénico. Empeora el edema pulmonar.' },
          { t: 'Nitroglicerina o furosemida con PA baja', d: 'Bajan una presión que ya está baja',
            say: 'El segundo: dar nitroglicerina o diuréticos a un paciente hipotenso.' },
          { t: 'Dopamina primero; betabloqueador por la taquicardia', d: 'La taquicardia compensa',
            say: 'Usar dopamina como primera elección, o betabloqueador por la taquicardia, que es compensadora. Olvidar la complicación mecánica del infarto. Y esperar los resultados de laboratorio antes de tratar.' },
        ] },
      ],
    },

    { type: 'pathway', intro: 'Armemos el árbol: de la hipotensión al tipo de shock.' },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Shock: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Gasto alto, resistencia baja, piel caliente', 'Shock distributivo', 'Shock cardiogénico'],
          say: 'Gasto alto con resistencia baja y piel caliente es shock distributivo, séptico o anafiláctico. Lo contrario del cardiogénico.' },
        { cells: ['Gasto bajo, presión de llenado alta, crépitos', 'Shock cardiogénico', 'Dar volumen'],
          say: 'Gasto bajo, presión de llenado alta y crépitos: shock cardiogénico. El error es dar volumen.' },
        { cells: ['Yugulares planas, piel fría, sangrado', 'Hipovolémico: volumen', 'Noradrenalina sola'],
          say: 'Yugulares planas y sangrado: hipovolemia. Se rellena con volumen o sangre.' },
        { cells: ['Yugulares altas, pulmones limpios, hipotensión', 'Obstructivo', 'Diurético'],
          say: 'Yugulares altas con pulmones limpios e hipotensión: obstructivo, es decir taponamiento, embolia o neumotórax. Se quita el obstáculo.' },
        { cells: ['Shock cardiogénico por IAM', 'Angioplastía sin importar el tiempo', 'Esperar o fibrinolizar tarde'],
          say: 'Shock por infarto: angioplastía aunque pasen más de doce horas. Es la excepción al límite de tiempo.' },
        { cells: ['Vasopresor del shock cardiogénico', 'Noradrenalina', 'Dopamina o fenilefrina'],
          say: 'El vasopresor de primera línea es la noradrenalina, no la dopamina.' },
        { cells: ['Infarto de VD: yugulares altas, pulmón limpio', 'Volumen', 'Nitratos'],
          say: 'En el infarto del ventrículo derecho sí se da volumen, y no se dan nitratos.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 65 años con un infarto anterior hace 3 días llega confuso, con PA 70/40 mmHg, FC 115 lpm, extremidades frías, diuresis escasa, yugulares ingurgitadas y crépitos hasta los campos medios. Lactato 5 mmol/L. El ecocardiograma muestra aquinesia anterior extensa, FEVI de 20% y sin derrame pericárdico ni soplo nuevo.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Noradrenalina ± dobutamina, UCI y angioplastía urgente de la arteria culpable' },
        { letter: 'B', text: 'Bolo de 1.000 mL de suero fisiológico y reevaluar' },
        { letter: 'C', text: 'Nitroglicerina en infusión y furosemida endovenosa' },
        { letter: 'D', text: 'Betabloqueador endovenoso para controlar la taquicardia' },
        { letter: 'E', text: 'Alta con control en 48 horas' },
      ],
      correct: 'A',
      explanation: 'Es un shock cardiogénico por infarto anterior extenso (perfil frío y húmedo, Killip IV). Se sostiene la presión con noradrenalina y el gasto con dobutamina, y se revasculariza la arteria culpable aunque hayan pasado más de 12 horas. El volumen empeora la congestión; los vasodilatadores y diuréticos bajan una presión ya baja; el betabloqueador deprime el gasto.',
      say: {
        stem: 'Un hombre de sesenta y cinco años, con un infarto anterior hace tres días, llega confuso, con presión de setenta sobre cuarenta, extremidades frías, poca diuresis, yugulares ingurgitadas y crépitos hasta los campos medios. El lactato es de cinco y el ecocardiograma muestra una fracción de eyección de veinte por ciento, sin derrame ni soplo nuevo.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: noradrenalina y dobutamina, UCI y angioplastía; bolo de suero; nitroglicerina y furosemida; betabloqueador endovenoso; o alta con control. Piénsalo.',
        answer: 'Es la A. Es un shock cardiogénico por infarto. Se sostiene la presión con noradrenalina, el gasto con dobutamina y se abre la arteria, aunque hayan pasado más de doce horas. La B tienta porque la presión está baja, pero está congestionado y el suero empeora el edema.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente de 58 años con shock cardiogénico refractario a volumen tras un infarto agudo del miocardio presenta PA 75/45 mmHg y signos de hipoperfusión.',
      question: '¿Cuál es el vasopresor de primera línea para restaurar la presión arterial media?',
      options: [
        { letter: 'A', text: 'Noradrenalina en infusión continua' },
        { letter: 'B', text: 'Dopamina en dosis altas' },
        { letter: 'C', text: 'Fenilefrina en bolo' },
        { letter: 'D', text: 'Isoproterenol endovenoso' },
        { letter: 'E', text: 'Epinefrina subcutánea' },
      ],
      correct: 'A',
      explanation: 'La noradrenalina es el vasopresor de primera línea: su efecto alfa-1 eleva la presión media y tiene un moderado efecto beta-1; produce menos arritmias y menor mortalidad que la dopamina.',
      say: {
        stem: 'Un caso representativo del banco. Un paciente de cincuenta y ocho años tiene un shock cardiogénico tras un infarto, con presión de setenta y cinco sobre cuarenta y cinco y signos de hipoperfusión.',
        question: '¿Cuál es el vasopresor de primera línea?',
        options: 'Las opciones: noradrenalina; dopamina en dosis altas; fenilefrina en bolo; isoproterenol; o epinefrina subcutánea. Piénsalo.',
        answer: 'Es la A. La noradrenalina eleva la presión con menos arritmias y menor mortalidad. La B tienta porque la dopamina se usaba antes, pero produce más taquiarritmias.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente en shock presenta en el monitoreo hemodinámico gasto cardíaco aumentado, resistencia vascular sistémica disminuida y presión capilar pulmonar baja. La piel está caliente y enrojecida.',
      question: '¿Cuál es el tipo de shock?',
      options: [
        { letter: 'A', text: 'Shock distributivo (séptico)' },
        { letter: 'B', text: 'Shock cardiogénico' },
        { letter: 'C', text: 'Shock hipovolémico' },
        { letter: 'D', text: 'Shock obstructivo por taponamiento' },
        { letter: 'E', text: 'Shock obstructivo por embolia pulmonar masiva' },
      ],
      correct: 'A',
      explanation: 'Gasto alto con resistencia baja y presión de llenado baja o normal es el patrón del shock distributivo, con vasodilatación y piel caliente. Los otros tres cursan con gasto bajo y resistencia alta.',
      say: {
        stem: 'Otro caso representativo. Un paciente en shock tiene gasto cardíaco aumentado, resistencia vascular disminuida, presión capilar pulmonar baja y piel caliente.',
        question: '¿Qué tipo de shock es?',
        options: 'Las opciones: distributivo; cardiogénico; hipovolémico; obstructivo por taponamiento; u obstructivo por embolia. Piénsalo.',
        answer: 'Es la A. Gasto alto con resistencia baja es la firma del shock distributivo. La B tienta porque es un shock, pero el cardiogénico tiene el gasto bajo y la resistencia alta.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: los cuatro shocks',
      cards: [
        { title: 'Reconocer y clasificar', tag: 'Cabecera', kind: 'key', items: [
          { t: 'Hipoperfusión, no solo hipotensión', d: 'Lactato > 2, oliguria, confusión',
            say: 'Cerremos con las reglas de oro. El shock es hipoperfusión, no solo hipotensión: confusión, oliguria, piel moteada y lactato sobre dos.' },
          { t: 'Piel, yugulares y pulmones', d: 'Ecografía a la cabecera',
            say: 'Con la piel, las yugulares y los pulmones, más una ecografía, distingues los cuatro tipos. Gasto bajo en tres de los cuatro; resistencia baja solo en el distributivo.' },
        ] },
        { title: 'Tratar', tag: 'Cardiogénico', kind: 'alert', items: [
          { t: 'Noradrenalina ± dobutamina', d: 'Sin litros de suero',
            say: 'En el cardiogénico, noradrenalina más dobutamina si hace falta, sin litros de suero.' },
          { t: 'Angioplastía sin importar el tiempo', d: 'UCI cardiológica',
            say: 'Y la medida que salva la vida es la angioplastía de la arteria culpable, aunque haya pasado el tiempo. Si te llevas una sola idea de hoy: ante un shock, primero clasifica el tipo, porque el volumen que salva a uno ahoga al otro. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Shock: del paciente hipotenso al tratamiento',
    root: N('start', 'Hipotensión con hipoperfusión', 'Confusión, oliguria, lactato > 2',
      'Llega un paciente con presión baja y signos de mala perfusión. Aseguras la vía aérea, dos vías, monitor, electrocardiograma y ecografía, y te preguntas qué tipo de shock es.',
      ['Yugulares planas', N('do', 'Hipovolémico o distributivo', 'Piel fría: volumen; caliente: sepsis',
        'Con yugulares planas, piensas en pérdida de volumen o en vasodilatación. Si la piel es fría y hay sangrado, das volumen o sangre; si es caliente, es sepsis o anafilaxia.',
        ['Sepsis', N('ok', 'Antibiótico + cristaloide + noradrenalina', '1.ª hora',
          'En la sepsis, antibiótico en la primera hora, treinta mililitros por kilo de cristaloide y noradrenalina para la presión media.')],
        ['Anafilaxia', N('ok', 'Adrenalina IM', 'Más volumen',
          'En la anafilaxia, adrenalina intramuscular en el muslo y volumen.')],
      )],
      ['Yugulares altas y pulmones limpios', N('refer', 'Obstructivo', 'TEP, taponamiento, neumotórax',
        'Con yugulares altas y pulmones limpios es un shock obstructivo: trombolisis en el TEP, pericardiocentesis en el taponamiento y descompresión en el neumotórax.')],
      ['Yugulares altas y crépitos', N('alert', 'Shock cardiogénico', 'Noradrenalina ± dobutamina',
        'Con yugulares altas y crépitos es un shock cardiogénico: noradrenalina, dobutamina si el gasto es bajo, sin volumen, y a UCI.',
        ['Infarto', N('ok', 'Angioplastía urgente', 'Sin importar el tiempo',
          'Si es un infarto, angioplastía de la arteria culpable sin importar el tiempo de evolución.')],
        ['Complicación mecánica', N('refer', 'Cirugía de urgencia', 'Ecocardiograma',
          'Si el ecocardiograma muestra una complicación mecánica, como una rotura papilar, se estabiliza y va a cirugía de urgencia.')],
      )],
    ),
  },
};
