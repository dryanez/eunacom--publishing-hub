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
const PH_A = { src: 'biblioteca/20_cardiologia/cardio-18/01_edema-pulmonar-alveolar-florido__chest-xray-survival-guide_p160.jpg', label: 'Edema alveolar florido', at: 'Mira esta radiografía', credit: 'The Chest X-Ray: A Survival Guide, Fig. 11.26' };
const PH_B = { src: 'biblioteca/20_cardiologia/cardio-18/02_edema-intersticial-florido__chest-xray-survival-guide_p160.jpg', label: 'Edema intersticial', at: 'En esta otra', credit: 'The Chest X-Ray: A Survival Guide, Fig. 11.25' };

module.exports = {
  id: 'cardio-18',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'El edema agudo de pulmón: reconocerlo, tratarlo en diez minutos y buscar qué lo desencadenó',
      say: 'Bienvenido. En la clase anterior vimos el tratamiento crónico de la insuficiencia cardíaca. Hoy vemos su forma más dramática: la insuficiencia cardíaca aguda y el edema agudo de pulmón. Es la emergencia que más se ve de madrugada en el SAPU, un paciente sentado, azulado, que no puede hablar. Se salva si haces tres cosas en minutos: presión positiva, nitroglicerina y furosemida. Y el examen pregunta qué dar, qué no dar y qué lo desencadenó.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Cómo el líquido llega al alvéolo',
      nodes: [
        { id: 'v', col: 0, row: 1, k: 'cause', t: 'Falla el ventrículo', s: 'O la aurícula no se vacía' },
        { id: 'p', col: 1, row: 1, k: 'mech', t: 'Sube la presión capilar', s: '> 18-20 mmHg' },
        { id: 'i', col: 2, row: 0, k: 'effect', t: 'Edema intersticial', s: 'Líneas B de Kerley' },
        { id: 'a', col: 3, row: 1, k: 'alert', t: 'Edema alveolar', s: '> 25 mmHg: alas de mariposa' },
        { id: 'h', col: 4, row: 1, k: 'alert', t: 'Hipoxemia', s: 'Taquipnea, espuma rosada' },
      ],
      edges: [{ from: 'v', to: 'p' }, { from: 'p', to: 'i' }, { from: 'i', to: 'a' }, { from: 'a', to: 'h' }],
      steps: [
        { show: ['v', 'p'], note: 'La presión se devuelve al pulmón',
          say: 'El líquido sale del capilar según el equilibrio de Starling: lo empuja la presión hidrostática y lo retiene la presión oncótica. Cuando el ventrículo izquierdo falla, la presión de la aurícula y de las venas pulmonares sube y se transmite hacia atrás, al capilar. Sobre dieciocho a veinte milímetros de mercurio, el líquido empieza a salir.' },
        { show: ['i', 'a'], note: 'Primero el intersticio, después el alvéolo',
          say: 'Primero llena el intersticio, y en la radiografía ves las líneas de Kerley. Con una presión sobre veinticinco rompe la barrera y llena los alvéolos, el edema alveolar en alas de mariposa.' },
        { show: ['h'], note: 'Alvéolo inundado, alvéolo que no ventila',
          say: 'Los alvéolos llenos de líquido no intercambian gases: aparecen la hipoxemia, la taquipnea y el esputo espumoso rosado. Y este mecanismo explica el tratamiento: la presión positiva empuja el líquido de vuelta, los vasodilatadores bajan la presión y el diurético reduce el volumen.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Cómo se ve un edema agudo de pulmón',
      cards: [
        { title: 'Cuadro clínico', tag: 'Emergencia', kind: 'alert', items: [
          { t: 'Disnea de reposo, ortopnea, 30-40/min', d: 'Sudor frío, cianosis, ansiedad',
            say: 'El paciente está sentado, con disnea de reposo, respiración rápida de treinta a cuarenta por minuto, sudor frío, cianosis y mucha ansiedad. Muchas veces ocurre de noche.' },
          { t: 'Esputo rosado espumoso; crépitos hasta los ápices', d: 'R3, yugulares; a veces sibilancias',
            say: 'Tose un esputo espumoso rosado. Los crépitos llegan hasta los ápices, hay tercer ruido, yugulares ingurgitadas y a veces sibilancias, lo que se llama asma cardíaca.' },
        ] },
        { title: 'La presión manda', tag: 'Qué tipo de edema', kind: 'key', items: [
          { t: 'PA alta: EAP hipertensivo', d: 'El más frecuente; responde a vasodilatadores',
            say: 'La presión arterial te dice qué tipo de edema es. Si está alta, a veces sobre doscientos, es un edema hipertensivo, el más frecuente y el que mejor responde a los vasodilatadores.' },
          { t: 'PA baja y frío: shock cardiogénico', d: 'Tema 3.4',
            say: 'Si está baja y el paciente está frío, es un shock cardiogénico, que veremos en la próxima clase.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clasificación',
      title: 'Forrester: caliente o frío, seco o húmedo',
      cards: [
        { title: 'Perfiles', tag: 'Perfusión y congestión', kind: 'criteria', items: [
          { t: 'A caliente y seco', d: 'Normal',
            say: 'La clasificación de Forrester combina dos preguntas: ¿está bien perfundido, es decir, caliente o frío?, y ¿está congestionado, es decir, húmedo o seco? El perfil A es caliente y seco: normal.' },
          { t: 'B caliente y húmedo', d: 'El EAP clásico',
            say: 'El perfil B es caliente y húmedo: congestión sin hipoperfusión. Es el edema agudo clásico y se trata con vasodilatador y diurético.' },
          { t: 'L frío y seco · C frío y húmedo', d: 'C = shock cardiogénico',
            say: 'El perfil L es frío y seco: hipoperfusión sin congestión, como una hipovolemia, y requiere volumen con cuidado. Y el perfil C es frío y húmedo: hipoperfusión con congestión, el shock cardiogénico.' },
        ] },
        { title: 'Killip', tag: 'En el infarto', kind: 'normal', items: [
          { t: 'I sin IC · II crépitos o R3 · III edema · IV shock', d: 'Pronóstico del IAM',
            say: 'En el infarto se usa la escala de Killip: uno, sin insuficiencia; dos, con crépitos o tercer ruido; tres, edema pulmonar; y cuatro, shock cardiogénico.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Desencadenantes',
      title: 'Por qué ahora: la regla CHAMP',
      cards: [
        { title: 'CHAMP', tag: 'Siempre buscar', kind: 'key', items: [
          { t: 'C coronario · H hipertensiva', d: 'SCA y crisis hipertensiva',
            say: 'En el edema agudo siempre se pregunta por qué ahora. La regla CHAMP ayuda. C de coronario: un síndrome coronario agudo, que exige reperfusión. H de hipertensiva: una crisis hipertensiva.' },
          { t: 'A arritmia · M mecánica', d: 'FA rápida; papilar, CIV, válvula aguda',
            say: 'A de arritmia: fibrilación auricular rápida, taquicardia ventricular o bloqueo avanzado. M de mecánica o miocardio: la rotura de un músculo papilar o una comunicación interventricular tras un infarto, una insuficiencia aórtica aguda y una miocarditis.' },
          { t: 'P pulmonar: TEP', d: 'Más infección, anemia, fármacos',
            say: 'P de pulmonar: la embolia. Y suma infección, anemia, falla renal, hipertiroidismo, exceso de sal, abandono del tratamiento y fármacos como los antiinflamatorios.' },
        ] },
        { title: 'Tratarlos cambia todo', tag: 'Conducta específica', kind: 'alert', items: [
          { t: 'SCA: reperfusión', d: 'Angioplastía si hay shock',
            say: 'Si es un síndrome coronario con supradesnivel o shock, el tratamiento es la reperfusión inmediata.' },
          { t: 'FA inestable: cardioversión', d: 'Válvula o septo roto: cirugía',
            say: 'La fibrilación auricular inestable se cardioverte. La rotura valvular o septal necesita cirugía de urgencia. Y sin tratar la causa, descongestionar es solo un parche.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Exámenes y radiografía',
      cards: [
        { title: 'Lo inmediato', tag: 'Sin retrasar el tratamiento', kind: 'key', items: [
          { t: 'ECG, troponina, creatinina, gases', d: 'Lactato si hay mala perfusión',
            say: 'Se pide de inmediato un electrocardiograma de doce derivaciones, troponina, creatinina y electrolitos, hemograma, gases arteriales y lactato si hay mala perfusión. Nada de esto retrasa el tratamiento.' },
          { t: 'BNP < 100 o NT-proBNP < 300 descarta', d: 'Alto = muy probable',
            say: 'El péptido natriurético descarta la insuficiencia aguda con un BNP menor de cien o un NT-proBNP menor de trescientos. Y la ecografía a la cabecera muestra líneas B difusas en el pulmón y una vena cava dilatada.' },
        ] },
        { title: 'Radiografía de tórax', tag: 'Dos patrones', kind: 'criteria', items: [
          { t: 'Edema alveolar: alas de mariposa', d: 'Cardiomegalia y derrame',
            say: 'La radiografía muestra los patrones del edema. Mira esta radiografía: hay un infiltrado alveolar bilateral que parte desde los hilios, el corazón está agrandado y hay derrame. Eso es el edema alveolar florido.',
            photo: PH_A },
          { t: 'Edema intersticial: Kerley y cefalización', d: 'Antes de inundar el alvéolo',
            say: 'En esta otra, el pulmón muestra engrosamiento de las paredes de los bronquios y líneas septales, que es el edema intersticial, la etapa previa a inundar los alvéolos. Además se ve la cefalización de los vasos del vértice.',
            photo: PH_B },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diferencial',
      title: 'No toda disnea aguda es un edema',
      cards: [
        { title: 'Lo que se confunde', tag: 'Cómo separarlo', kind: 'criteria', items: [
          { t: 'EPOC y asma', d: 'Sibilancias, antecedentes, sin congestión',
            say: 'El asma y la EPOC dan sibilancias y antecedentes, pero no yugulares ingurgitadas ni edema. Ojo: la insuficiencia cardíaca también puede dar sibilancias, y un EPOC puede además tener insuficiencia: se tratan ambas.' },
          { t: 'Neumonía y TEP', d: 'Fiebre y consolidación; campos limpios',
            say: 'La neumonía da fiebre y una consolidación unilateral. La embolia pulmonar da disnea súbita con los campos limpios.' },
          { t: 'SDRA o edema no cardiogénico', d: 'Corazón normal, BNP bajo',
            say: 'El edema no cardiogénico, por sepsis, trauma o aspiración, tiene una presión capilar normal, un corazón de tamaño normal y un péptido natriurético bajo, y no mejora con diuréticos.' },
        ] },
        { title: 'Pregunta real', tag: 'Diciembre 2024', kind: 'key', items: [
          { t: 'Anciano, 2 semanas de disnea, PA 200/100', d: 'R3, yugulares, crépitos: IC aguda',
            say: 'Una pregunta real de diciembre de dos mil veinticuatro describe a un hombre de ochenta y dos años con dos semanas de disnea progresiva, presión de doscientos sobre cien, yugulares ingurgitadas, tercer ruido y crépitos bibasales. La respuesta es insuficiencia cardíaca aguda, no síndrome coronario, disección ni neumonía.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Los primeros diez minutos',
      cards: [
        { title: 'Todo a la vez', tag: 'Sentado, monitor, vía', kind: 'key', items: [
          { t: 'Sentado con piernas colgando', d: 'Monitor, vía venosa, ECG',
            say: 'Los primeros diez minutos se hacen todos a la vez. Sientas al paciente con las piernas colgando, para disminuir el retorno venoso, lo monitorizas y le pones una vía.' },
          { t: 'O₂ solo si SatO₂ < 90%', d: 'Meta 94-98%',
            say: 'Das oxígeno solo si la saturación está bajo noventa por ciento, con meta de noventa y cuatro a noventa y ocho. El exceso no ayuda.' },
        ] },
        { title: 'VNI: la primera línea', tag: 'CPAP 5-10 cmH₂O', kind: 'pharma', items: [
          { t: 'Presión positiva con mascarilla', d: 'La que más evita la intubación',
            say: 'La ventilación no invasiva con presión positiva, ya sea CPAP o BiPAP, es la intervención de primera línea que más reduce la necesidad de intubar. Con cinco a diez centímetros de agua recluta los alvéolos inundados, disminuye el trabajo respiratorio y baja la precarga y la poscarga del ventrículo.' },
          { t: 'Intubar si falla la VNI', d: 'pH < 7,25, agotamiento, conciencia',
            say: 'Se intuba si la VNI falla, o hay agotamiento, alteración de conciencia, acidosis con pH menor de siete veinticinco o hipoxemia refractaria.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Vasodilatador',
      title: 'Nitroglicerina endovenosa',
      cards: [
        { title: 'Cómo darla', tag: 'PAS ≥ 110', kind: 'pharma', items: [
          { t: '10-20 mcg/min, subir cada 5 min', d: 'Hasta 200 mcg/min',
            say: 'La nitroglicerina endovenosa es el vasodilatador de elección en el edema con presión sistólica de ciento diez o más. Se parte con diez a veinte microgramos por minuto y se sube cada cinco minutos. Mientras se instala la vía se dan cero coma cuatro miligramos bajo la lengua cada cinco minutos.' },
          { t: 'Venodilata y baja la poscarga', d: 'Alivio en pocos minutos',
            say: 'A dosis bajas dilata las venas y baja la precarga; a dosis mayores dilata las arterias y baja la poscarga. El alivio es casi inmediato.' },
        ] },
        { title: 'No usarla si…', tag: 'Contraindicaciones', kind: 'alert', items: [
          { t: 'PAS < 90-100 mmHg', d: 'Ni shock',
            say: 'No se usa si la presión sistólica está bajo noventa o cien, ni en el shock.' },
          { t: 'Infarto de VD, estenosis aórtica grave', d: 'Sildenafil o tadalafil reciente',
            say: 'Tampoco en el infarto del ventrículo derecho, en la estenosis aórtica grave o si tomó sildenafil o tadalafil en las últimas veinticuatro a cuarenta y ocho horas. Si la presión es muy alta, el nitroprusiato en UCI es una opción.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diurético',
      title: 'Furosemida y lo que no se da',
      cards: [
        { title: 'Furosemida EV', tag: 'En bolo', kind: 'pharma', items: [
          { t: '20-40 mg, o 1-2,5 veces la dosis oral diaria', d: 'Venodilata antes de la diuresis',
            say: 'La furosemida endovenosa en bolo: veinte a cuarenta miligramos si no la usaba, y una a dos y media veces su dosis oral diaria si ya la tomaba. Produce venodilatación en cinco a quince minutos, antes de que aparezca la diuresis, y diuresis profusa en media hora a una hora.' },
          { t: 'Reevaluar a las 2 h; duplicar si no responde', d: 'Diuresis > 100-150 mL/h',
            say: 'A las dos horas evalúas la respuesta: una diuresis sobre cien a ciento cincuenta mililitros por hora. Si no la hay, duplicas la dosis o agregas otro diurético. Y no se da al paciente hipovolémico, el perfil frío y seco.' },
        ] },
        { title: 'Lo que no', tag: 'Muy preguntado', kind: 'alert', items: [
          { t: 'Morfina de rutina', d: 'Más intubación y mortalidad',
            say: 'La morfina de rutina, para calmar la ansiedad, se asoció con más ventilación mecánica y más mortalidad. No se recomienda.' },
          { t: 'Betabloqueador EV, calcioantagonista', d: 'Continuar el crónico salvo shock',
            say: 'Tampoco betabloqueadores ni calcioantagonistas endovenosos. El betabloqueador que ya tomaba se mantiene, salvo shock o bradicardia grave.' },
        ] },
      ],
    },

    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'El edema hipertensivo: de B a A',
      images: [
        { src: 'animaciones/cardio-18/A1_eap_forrester_tratamiento.mp4', label: 'Forrester, tratamiento y respuesta', credit: 'Gráfico propio · criterios del Manual EUNACOM de Cardiología' },
      ],
      steps: [
        { note: 'Tres medidas y el paciente mejora',
          say: 'Mira a este paciente en el perfil B, caliente y húmedo, con saturación de setenta y ocho y presión de doscientos diez. Primero el CPAP, y la saturación sube. Luego la nitroglicerina, y la presión baja. Después la furosemida, baja la presión capilar y el paciente pasa al perfil A. Fíjate también en el otro paciente: con presión de setenta y ocho y frío está en el perfil C, y ahí no se dan vasodilatadores: se usa noradrenalina.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Hipoperfusión y escalamiento',
      title: 'Cuando no es un edema hipertensivo',
      cards: [
        { title: 'PAS < 90 o frío', tag: 'Shock cardiogénico', kind: 'alert', items: [
          { t: 'Noradrenalina para PAM ≥ 65', d: '± dobutamina',
            say: 'Si la presión sistólica está bajo noventa o hay hipoperfusión, no se dan vasodilatadores ni diuréticos como primera medida. Se inicia noradrenalina para llevar la presión media a sesenta y cinco o más, y dobutamina si el gasto sigue bajo.' },
          { t: 'UCI y reperfusión si es IAM', d: 'Tema 3.4',
            say: 'Se traslada a UCI y, si hay un infarto, se revasculariza. Lo vemos en detalle en la próxima clase.' },
        ] },
        { title: 'Si no mejora', tag: 'Escalar', kind: 'criteria', items: [
          { t: 'Intubación y ventilación mecánica', d: 'Agotamiento o hipoxemia refractaria',
            say: 'Si el paciente no mejora en treinta a sesenta minutos o se agota, se intuba y se ventila.' },
          { t: 'Ultrafiltración en UCI', d: 'Resistencia al diurético con falla renal',
            say: 'En quien no responde al diurético y tiene falla renal, se evalúa la ultrafiltración en UCI.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Situaciones especiales',
      title: 'Qué cambia según la causa',
      cards: [
        { title: 'Válvulas', tag: 'Cuidado con los vasodilatadores', kind: 'alert', items: [
          { t: 'Estenosis mitral: controlar la frecuencia', d: 'La taquicardia sube la presión',
            say: 'En la estenosis mitral, la taquicardia acorta el llenado y sube la presión de la aurícula: además del diurético, se controla la frecuencia con betabloqueador.' },
          { t: 'Estenosis aórtica grave: vasodilatador con mucha cautela', d: 'IAo aguda: sin betabloqueador',
            say: 'En la estenosis aórtica grave los vasodilatadores potentes pueden producir hipotensión. Y en la insuficiencia aórtica aguda está contraindicado el betabloqueador, porque impide la taquicardia compensadora.' },
        ] },
        { title: 'Otros contextos', tag: 'Y hospitalización', kind: 'criteria', items: [
          { t: 'Embarazo: sin IECA, ARA II ni espironolactona', d: 'Hidralazina y nitratos',
            say: 'En el embarazo y el puerperio se piensa en miocardiopatía periparto y preeclampsia, y no se usan IECA, ARA dos ni espironolactona.' },
          { t: 'Hospitalizar: reposo, hipoxemia, PA baja', d: 'UCI si VNI, aminas o shock',
            say: 'Toda insuficiencia aguda con disnea de reposo, hipoxemia o presión baja se hospitaliza. Va a UCI si necesita VNI, aminas, tiene shock o necesita ultrafiltración.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Después de la urgencia',
      title: 'Alta y prevención de reingresos',
      cards: [
        { title: 'Antes del alta', tag: 'Los pilares', kind: 'pharma', items: [
          { t: 'Diurético oral y peso seco', d: 'Pérdida de 0,5-1 kg al día',
            say: 'Con el paciente estable, el diurético pasa a vía oral y se fija el peso seco. Se espera ver una pérdida de medio a un kilo por día.' },
          { t: 'Iniciar los 4 pilares antes del alta', d: 'IECA/ARNI, BB, espironolactona, iSGLT2',
            say: 'Antes del alta se inician o reanudan los cuatro pilares de la clase anterior y se corrige el desencadenante.' },
        ] },
        { title: 'Controles', tag: 'Primer mes crítico', kind: 'criteria', items: [
          { t: 'Control a los 7-14 días', d: 'Peso, PA, creatinina, K',
            say: 'La primera visita es a los siete a catorce días. El primer mes es el de mayor riesgo de reingreso.' },
          { t: 'Educación: sal, peso, signos de alarma', d: 'Hiponatremia y congestión residual predicen reingreso',
            say: 'Se refuerza la educación: sal, pesarse a diario y signos de alarma. Una hiponatremia, una creatinina en alza o una congestión que persiste al alta predicen reingreso.' },
        ] },
      ],
    },

    { type: 'pathway', intro: 'Armemos el árbol: del paciente que se ahoga a la estabilización.' },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Edema agudo de pulmón: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['EAP con SatO₂ 82%', 'CPAP', 'Cánula nasal o intubar de entrada'],
          say: 'Edema agudo con hipoxemia: presión positiva con CPAP. La cánula nasal no basta y la intubación se reserva para el que falla.' },
        { cells: ['EAP con PA 190/100', 'Nitroglicerina EV + furosemida', 'Nifedipino o betabloqueador'],
          say: 'Edema hipertensivo: nitroglicerina y furosemida. El nifedipino y el betabloqueador intravenoso son errores.' },
        { cells: ['Paciente ansioso con EAP', 'No dar morfina de rutina', 'Morfina para calmar'],
          say: 'Un paciente ansioso con edema: no se da morfina de rutina, aumenta la intubación.' },
        { cells: ['PAS < 90 con frío y congestión', 'Noradrenalina ± dobutamina', 'Nitroglicerina y furosemida'],
          say: 'Si la presión está baja y el paciente frío, es shock cardiogénico: noradrenalina, no vasodilatador.' },
        { cells: ['Infarto de VD + edema', 'Sin nitratos', 'Nitroglicerina'],
          say: 'Con infarto del ventrículo derecho no se dan nitratos.' },
        { cells: ['Anciano con disnea, R3, yugulares, PA 200/100', 'IC aguda', 'SCA, disección o neumonía'],
          say: 'Disnea progresiva con tercer ruido y yugulares altas en un anciano: insuficiencia cardíaca aguda.' },
        { cells: ['Edema sin cardiomegalia y BNP bajo', 'Edema no cardiogénico', 'Más diurético'],
          say: 'Edema con corazón normal y péptido bajo es no cardiogénico: busca sepsis o aspiración.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 74 años, hipertensa, llega al SAPU sentada, taquipneica a 36/min, cianótica y sudorosa, con esputo espumoso rosado. PA 210/115 mmHg, FC 125 lpm, SatO₂ 78% al aire ambiente, crépitos hasta los ápices. El ECG no muestra supradesnivel del ST.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'CPAP, nitroglicerina EV y furosemida EV, y buscar el desencadenante' },
        { letter: 'B', text: 'Morfina y cánula nasal a 2 L/min' },
        { letter: 'C', text: 'Betabloqueador endovenoso para controlar la frecuencia' },
        { letter: 'D', text: 'Salbutamol nebulizado y corticoides' },
        { letter: 'E', text: 'Bolo de 1.000 mL de suero fisiológico' },
      ],
      correct: 'A',
      explanation: 'Es un EAP hipertensivo (perfil caliente y húmedo). En los primeros 10 minutos: sentada, monitor, CPAP de 5-10 cmH₂O, nitroglicerina endovenosa y furosemida en bolo. Se pide troponina, BNP y exámenes, y se busca el desencadenante. La morfina de rutina, el betabloqueador y el volumen empeoran el cuadro; el salbutamol no trata el edema.',
      say: {
        stem: 'Una mujer de setenta y cuatro años, hipertensa, llega al SAPU sentada, con treinta y seis respiraciones por minuto, cianótica, sudorosa y con esputo espumoso rosado. La presión es de doscientos diez sobre ciento quince, la saturación de setenta y ocho por ciento y hay crépitos hasta los ápices.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: CPAP, nitroglicerina y furosemida; morfina y cánula nasal; betabloqueador endovenoso; salbutamol y corticoides; o un bolo de suero. Piénsalo.',
        answer: 'Es la A. Es un edema agudo hipertensivo. Se sienta, se pone presión positiva, nitroglicerina para bajar la precarga y la poscarga, y furosemida. Y se busca el desencadenante. La D tienta por las sibilancias, el asma cardíaca, pero el salbutamol no trata el edema. Y la E con suero agrega volumen a un pulmón inundado.',
      },
    },

    realQuiz('EUNACOM Diciembre 2024 · Pregunta 88',
      'Disnea progresiva en un adulto mayor con ingurgitación yugular, tercer ruido, crépitos bibasales y signos de sobrecarga del ventrículo izquierdo es una insuficiencia cardíaca aguda. El SCA daría dolor y cambios isquémicos; la disección, dolor transfixiante y soplo diastólico; la neumonía, fiebre y esputo; el TEP, campos limpios y disnea súbita.',
      {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticuatro. Un paciente de ochenta y dos años tiene dos semanas de disnea progresiva, frecuencia de noventa y dos, presión de doscientos sobre cien y saturación de noventa por ciento. Tiene ingurgitación yugular, un ritmo de tres tiempos por tercer ruido y crépitos bibasales, y el electrocardiograma muestra signos de sobrecarga del ventrículo izquierdo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: síndrome coronario agudo; disección aórtica; neumonía; insuficiencia cardíaca aguda; o tromboembolismo pulmonar. Piénsalo.',
        answer: 'Es la D. Tercer ruido, yugulares y crépitos con sobrecarga del ventrículo izquierdo son una insuficiencia cardíaca aguda. La B tienta porque está hipertenso, pero la disección da dolor transfixiante y un soplo diastólico. El tromboembolismo da campos limpios.',
      }, o => { o[4].text = 'Tromboembolismo pulmonar'; }),

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un hombre de 70 años con edema agudo de pulmón hipertensivo, con PA 200/110 mmHg y SatO₂ de 82%, ya está sentado y con monitor.',
      question: '¿Cuál es la medida respiratoria de primera línea más efectiva para evitar la intubación?',
      options: [
        { letter: 'A', text: 'Ventilación no invasiva con presión positiva continua (CPAP)' },
        { letter: 'B', text: 'Oxigenoterapia por cánula nasal a 2 litros por minuto' },
        { letter: 'C', text: 'Intubación orotraqueal inmediata' },
        { letter: 'D', text: 'Nebulización continua con salbutamol' },
        { letter: 'E', text: 'Aspiración traqueal a circuito abierto' },
      ],
      correct: 'A',
      explanation: 'La presión positiva continua recluta los alvéolos inundados, mejora la oxigenación y reduce la precarga y la poscarga: baja de forma importante la necesidad de intubar. La cánula nasal no basta; la intubación se reserva para la falla de la VNI.',
      say: {
        stem: 'Un caso representativo del banco. Un hombre de setenta años tiene un edema agudo hipertensivo, con presión de doscientos diez sobre ciento diez y saturación de ochenta y dos por ciento.',
        question: '¿Cuál es la medida respiratoria de primera línea que mejor evita la intubación?',
        options: 'Las opciones: CPAP; cánula nasal a dos litros; intubación inmediata; salbutamol; o aspiración traqueal. Piénsalo.',
        answer: 'Es la A. La presión positiva recluta los alvéolos inundados y reduce la precarga y la poscarga. La B tienta porque da oxígeno, pero no abre los alvéolos llenos de líquido.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: IC aguda y edema agudo de pulmón',
      cards: [
        { title: 'Los diez minutos', tag: 'Todo a la vez', kind: 'key', items: [
          { t: 'Sentado, O₂ si < 90%, CPAP', d: 'La VNI evita la intubación',
            say: 'Cerremos con las reglas de oro. Sientas al paciente, das oxígeno solo si la saturación está bajo noventa y pones presión positiva, que es la medida que más evita la intubación.' },
          { t: 'Nitroglicerina si PAS ≥ 110; furosemida EV', d: 'Sin morfina de rutina',
            say: 'Nitroglicerina endovenosa si la presión sistólica es de ciento diez o más, y furosemida endovenosa. Sin morfina de rutina ni betabloqueadores.' },
        ] },
        { title: 'Pensar y escalar', tag: 'El perfil y la causa', kind: 'alert', items: [
          { t: 'PA baja y frío: noradrenalina', d: 'Es shock cardiogénico',
            say: 'Si la presión está baja y el paciente frío, no es un edema hipertensivo: es un shock cardiogénico y necesita noradrenalina.' },
          { t: 'Buscar el desencadenante: CHAMP', d: 'Y los 4 pilares antes del alta',
            say: 'Busca siempre qué lo desencadenó con la regla CHAMP, y antes del alta inicia los cuatro pilares. Si te llevas una sola idea de hoy: en el edema agudo de pulmón, la presión positiva y la nitroglicerina son tu tratamiento, y la presión arterial decide todo lo demás. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Edema agudo de pulmón: de la urgencia a la estabilización',
    root: N('start', 'Disnea súbita con espuma rosada', 'Saturación < 90%, crépitos hasta los ápices',
      'Llega un paciente sentado, azulado, con crépitos hasta los ápices y espuma rosada. Es un edema agudo de pulmón: se trata en los primeros diez minutos, todo a la vez.',
      ['Siempre', N('do', 'Sentado, monitor, vía, CPAP', 'O₂ si saturación < 90%',
        'Lo primero es sentarlo con las piernas colgando, monitorizarlo, ponerle una vía, oxígeno si hace falta y presión positiva con CPAP.',
        ['PAS ≥ 110', N('ok', 'Nitroglicerina + furosemida EV', 'Edema hipertensivo',
          'Si la presión sistólica es de ciento diez o más, das nitroglicerina endovenosa y furosemida en bolo.',
          ['Mejora a los 30-60 min', N('ok', 'Pasar a vía oral', 'Buscar la causa (CHAMP)',
            'Si mejora, pasas el diurético a vía oral, buscas el desencadenante y antes del alta inicias los cuatro pilares.')],
          ['No mejora o se agota', N('alert', 'Intubar y UCI', 'Ultrafiltración si no responde',
            'Si no mejora o se agota, se intuba, se traslada a UCI y se evalúa la ultrafiltración.')],
        )],
        ['PAS < 90 o frío', N('refer', 'Shock cardiogénico', 'Noradrenalina ± dobutamina',
          'Si la presión sistólica está bajo noventa o el paciente está frío, es un shock cardiogénico: noradrenalina, dobutamina, UCI y reperfusión si es un infarto.')],
      )],
    ),
  },
};
