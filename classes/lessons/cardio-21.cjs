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
const HAR = f => `Harrison's Principles of Internal Medicine, 21.ª ed., Fig. ${f}`;
const PH_DCM = { src: 'biblioteca/20_cardiologia/cardio-21/01_dilatada-pieza-dilatacion-vi__harrison_p1999.jpg', label: 'Dilatada: pieza explantada', at: 'Mira esta pieza', credit: HAR('259-2') };
const PH_AMP = { src: 'biblioteca/20_cardiologia/cardio-21/02_restrictiva-amiloidosis-pieza__harrison_p2009.jpg', label: 'Amiloidosis: corazón firme', at: 'Mira este corazón', credit: HAR('259-12') };
const PH_AME = { src: 'biblioteca/20_cardiologia/cardio-21/03_restrictiva-amiloidosis-eco__harrison_p2009.jpg', label: 'Eco: paredes gruesas', at: 'Y en este ecocardiograma', credit: HAR('259-13') };
const PH_MRI = { src: 'biblioteca/20_cardiologia/cardio-21/04_miocarditis-rm-realce-tardio__harrison_p2001.jpg', label: 'RM: realce tardío', at: 'Mira esta resonancia', credit: HAR('259-6') };

module.exports = {
  id: 'cardio-21',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuando la insuficiencia cardíaca no tiene causa evidente: la historia es la pista',
      say: 'Bienvenido. Ya vimos la insuficiencia cardíaca y la miocardiopatía hipertrófica. Hoy cerramos el bloque con las otras enfermedades del músculo: la miocardiopatía dilatada, la restrictiva y la miocarditis. Cuando un paciente joven tiene insuficiencia cardíaca y las coronarias están sanas, la respuesta del examen casi siempre está en la historia: el alcohol, el Chagas, la quimioterapia, el puerperio o la infección viral de hace dos semanas. Vamos a ordenarlo.',
    },

    {
      type: 'points',
      kicker: 'Enfoque',
      title: 'Cómo se ordenan las miocardiopatías',
      cards: [
        { title: 'Por el fenotipo', tag: 'Lo dice el ecocardiograma', kind: 'key', items: [
          { t: 'Dilatada: ventrículo grande, FEVI baja', d: 'La más frecuente',
            say: 'Una miocardiopatía es una enfermedad del músculo que no se explica por coronarias, válvulas ni hipertensión. Se clasifica por lo que muestra el ecocardiograma. La dilatada tiene el ventrículo grande y la contracción deprimida.' },
          { t: 'Hipertrófica y restrictiva', d: 'Pared gruesa; ventrículo rígido',
            say: 'La hipertrófica tiene la pared engrosada, y la vimos en la clase anterior. La restrictiva tiene un ventrículo rígido que no se llena. Y existe una forma arritmogénica del ventrículo derecho, en el joven con taquicardia ventricular.' },
          { t: 'Miocarditis: inflamación aguda', d: 'Puede terminar en dilatada',
            say: 'La miocarditis es la inflamación aguda del miocardio, y puede evolucionar a una dilatada.' },
        ] },
        { title: 'Cuándo sospechar', tag: 'Pistas', kind: 'alert', items: [
          { t: 'IC en < 50 años sin factores de riesgo', d: 'Coronarias sanas',
            say: 'Sospecha miocardiopatía en un menor de cincuenta años con insuficiencia cardíaca sin factores de riesgo, con coronarias sanas, o con antecedentes familiares de insuficiencia, marcapaso o muerte súbita.' },
          { t: 'Arritmia ventricular o síncope de esfuerzo', d: 'Estudio genético y familiar',
            say: 'También ante arritmias ventriculares sin causa, síncope de esfuerzo o insuficiencia con bloqueos. El estudio familiar y genético es parte del manejo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Dilatada',
      title: 'Causas: la historia es la pista',
      cards: [
        { title: 'Las causas', tag: 'Hasta 50% genéticas', kind: 'key', items: [
          { t: 'Idiopática o familiar', d: 'Mutaciones de la titina',
            say: 'La miocardiopatía dilatada es la dilatación progresiva de los ventrículos con disfunción sistólica, una fracción menor de cuarenta por ciento. Es la causa más frecuente de insuficiencia en el adulto joven y la primera indicación de trasplante. Entre treinta y cincuenta por ciento son hereditarias, sobre todo por mutaciones de la titina.' },
          { t: 'Alcohol, tóxicos, tiroides, tiamina', d: 'Cocaína, hipo e hipertiroidismo',
            say: 'Después vienen el alcohol, la cocaína, las enfermedades endocrinas como el hipo y el hipertiroidismo, el déficit de tiamina y la hemocromatosis.' },
          { t: 'Miocarditis viral, taquicardiomiopatía', d: 'Periparto, autoinmune',
            say: 'La miocarditis viral previa, la taquicardia sostenida, el puerperio y las enfermedades autoinmunes. Y el Takotsubo, una falla transitoria por estrés en una mujer posmenopáusica, con coronarias normales.' },
        ] },
        { title: 'Las que se preguntan', tag: 'Dato y conducta', kind: 'alert', items: [
          { t: 'Alcohol > 80 g/día por > 5 años', d: 'Reversible con abstinencia',
            say: 'El alcohol, con consumo de más de ochenta gramos al día por más de cinco años. Es potencialmente reversible con la abstinencia total.' },
          { t: 'Antraciclinas: dosis acumulada', d: 'Riesgo sobre 450-550 mg/m²',
            say: 'Las antraciclinas, como la doxorrubicina, dañan de forma dependiente de la dosis acumulada, con riesgo sobre cuatrocientos cincuenta a quinientos cincuenta miligramos por metro cuadrado, y pueden manifestarse años después. El trastuzumab produce una disfunción habitualmente reversible.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Chagas',
      title: 'La miocardiopatía chagásica',
      cards: [
        { title: 'Dato epidemiológico', tag: 'Zona rural endémica', kind: 'alert', items: [
          { t: 'T. cruzi: vinchuca, transfusión', d: 'Aparece 10-30 años después',
            say: 'El Chagas es la enfermedad causada por Trypanosoma cruzi, transmitida por la vinchuca, y también por transfusión y de madre a hijo. Se pregunta en zonas rurales endémicas. La miocardiopatía crónica aparece diez a treinta años después del contagio.' },
          { t: 'Serología: dos pruebas', d: 'Estudio por infectología',
            say: 'El diagnóstico es serológico, con dos pruebas, y el estudio lo ve infectología.' },
        ] },
        { title: 'Cómo es', tag: 'Eléctrica y mecánica', kind: 'key', items: [
          { t: 'BRD + hemibloqueo anterior izquierdo', d: 'Arritmias ventriculares',
            say: 'La clave es el electrocardiograma: bloqueo de rama derecha con hemibloqueo anterior izquierdo, más arritmias ventriculares.' },
          { t: 'Aneurisma apical, tromboembolia, megaórganos', d: 'IC predominantemente derecha',
            say: 'En el ecocardiograma se ve el aneurisma apical. Produce tromboembolias, insuficiencia con predominio derecho, y a veces megaesófago o megacolon asociados. Se trata la insuficiencia y las arritmias, y se evalúa el tratamiento antiparasitario.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Dilatada',
      title: 'Clínica, diagnóstico y tratamiento',
      cards: [
        { title: 'Clínica y estudio', tag: 'IC en el joven', kind: 'key', items: [
          { t: 'Choque de la punta lateral, R3, soplo mitral', d: 'Disnea, ortopnea, edema',
            say: 'Los síntomas son los de la insuficiencia cardíaca, con palpitaciones, síncope y embolias. Al examen, el choque de la punta está desplazado hacia lateral y abajo, hay tercer ruido y un soplo de insuficiencia mitral por la dilatación del anillo.' },
          { t: 'Eco: ventrículo esférico y FEVI baja', d: 'Coronarias, RM, TSH, ferritina',
            say: 'Mira esta pieza: el ventrículo izquierdo está masivamente dilatado. El ecocardiograma muestra ese ventrículo esférico y una fracción baja. Se descartan las coronarias con coronariografía o angio TAC, y la resonancia muestra fibrosis. Se piden también TSH, ferritina, serología de Chagas y la historia de alcohol y quimioterapia.',
            photo: PH_DCM },
        ] },
        { title: 'Tratamiento', tag: 'Como IC-FEr', kind: 'pharma', items: [
          { t: 'Cuatro pilares + causa', d: 'Abstinencia de alcohol',
            say: 'El tratamiento es el de la insuficiencia con fracción reducida de la clase tres punto dos: los cuatro pilares, más tratar la causa, con abstinencia total de alcohol.' },
          { t: 'DAI si FEVI ≤ 35% a los 3 meses', d: 'TRC si BCRI con QRS ancho',
            say: 'Después de tres meses de terapia óptima, si la fracción sigue en treinta y cinco o menos se evalúa el desfibrilador, y el resincronizador si hay bloqueo de rama izquierda. Se anticoagula si hay fibrilación auricular o un trombo, y en la forma terminal está el trasplante.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Periparto',
      title: 'Disnea en el puerperio',
      cards: [
        { title: 'Definición', tag: 'Miocardiopatía periparto', kind: 'alert', items: [
          { t: 'Último mes de embarazo a 5 meses del parto', d: 'FEVI < 45%',
            say: 'La miocardiopatía periparto es una falla sistólica, con fracción menor de cuarenta y cinco, que aparece en el último mes del embarazo o hasta cinco meses después del parto, en una mujer antes sana. Se asocia a preeclampsia, multiparidad y edad avanzada.' },
          { t: 'R3, crépitos, edema', d: 'El TEP es súbito y sin galope',
            say: 'Una pregunta real de dos mil veinticuatro describe una puérpera al cuarto día con disnea creciente, taquicardia, tercer ruido, crépitos bibasales y edema. La respuesta es miocardiopatía periparto. El tromboembolismo debuta de forma súbita y no da galope, y la embolia de líquido amniótico ocurre durante el parto.' },
        ] },
        { title: 'Manejo', tag: 'Según embarazo o lactancia', kind: 'pharma', items: [
          { t: 'Embarazada: hidralazina, nitrato, BB, diurético', d: 'Sin IECA, ARA II ni espironolactona',
            say: 'Si todavía está embarazada, se usan hidralazina con nitrato, betabloqueador y diurético. Están contraindicados el IECA, el ARA dos, el ARNI y la espironolactona. Después del parto, se usa el tratamiento habitual de la insuficiencia.' },
          { t: 'Bromocriptina; anticoagular si FEVI < 30%', d: 'Sin recuperar: no más embarazos',
            say: 'Se considera la bromocriptina, que inhibe la prolactina, y anticoagulación si la fracción es menor de treinta. Si la fracción no se recupera, se desaconseja un nuevo embarazo.' },
        ] },
      ],
    },

    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'Un ventrículo que no se llena',
      images: [
        { src: 'animaciones/cardio-21/A1_restrictiva_presion_diastolica.mp4', label: 'Presión diastólica y FEVI por miocardiopatía', credit: 'Gráfico propio · criterios del Manual EUNACOM de Cardiología' },
      ],
      steps: [
        { note: 'La presión sube de golpe y se queda arriba',
          say: 'Mira la presión del ventrículo. En el corazón normal, en la diástole se llena de forma suave y la presión se mantiene baja. En el restrictivo, tras la sístole la presión cae, el ventrículo se llena rápido de golpe y la presión salta a una meseta alta: la caída y meseta, el signo de la raíz cuadrada. Y mira las fracciones: baja en la dilatada, normal en la restrictiva, y alta en la hipertrófica.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Restrictiva',
      title: 'Qué es y qué la causa',
      cards: [
        { title: 'Fisiología y clínica', tag: 'Rigidez', kind: 'key', items: [
          { t: 'Ventrículos normales, aurículas gigantes', d: 'FEVI normal o casi',
            say: 'En la restrictiva el ventrículo es rígido, de tamaño normal y con función sistólica casi normal, pero el llenado está restringido. Las aurículas se dilatan mucho.' },
          { t: 'IC derecha: Kussmaul, ascitis, edema', d: 'PA baja, pulso pequeño',
            say: 'El cuadro clínico es de insuficiencia con predominio derecho: yugulares ingurgitadas con signo de Kussmaul, edema, hepatomegalia y ascitis, con presión arterial baja o normal.' },
        ] },
        { title: 'Causas', tag: 'La amiloidosis lidera', kind: 'alert', items: [
          { t: 'Amiloidosis AL y ATTR', d: 'Equimosis periorbitaria, macroglosia, túnel carpiano',
            say: 'La causa más frecuente es la amiloidosis cardíaca. La de cadenas livianas, asociada a mieloma, da macroglosia, equimosis periorbitarias, síndrome nefrótico y neuropatía. Una pregunta real de dos mil diecisiete describe a un adulto mayor con equimosis periorbitaria, proteinuria masiva e hipoalbuminemia, y la respuesta es amiloidosis primaria. La de transtiretina aparece en el adulto mayor, con túnel carpiano.' },
          { t: 'Hemocromatosis, sarcoidosis, Löffler, radioterapia', d: 'Bronceado, bloqueo AV, eosinofilia',
            say: 'Otras causas son la hemocromatosis, con bronceado, diabetes y ferritina alta; la sarcoidosis, con bloqueo auriculoventricular y adenopatías hiliares; la fibrosis endomiocárdica con eosinofilia; y la radioterapia mediastínica.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Restrictiva',
      title: 'Diagnóstico y tratamiento',
      cards: [
        { title: 'Pistas del examen', tag: 'Discordancia', kind: 'criteria', items: [
          { t: 'ECG de bajo voltaje con paredes gruesas', d: 'Clave de la amiloidosis',
            say: 'La clave es la discordancia: electrocardiograma de bajo voltaje a pesar de paredes gruesas en el ecocardiograma. Mira este corazón: está firme, de superficie cerosa, con las aurículas dilatadas.',
            photo: PH_AMP },
          { t: 'Eco: paredes brillantes, aurículas dilatadas', d: 'RM: realce difuso',
            say: 'Y en este ecocardiograma se ven las paredes engrosadas de ambos ventrículos sin dilatación importante, y las aurículas muy dilatadas. La resonancia muestra un realce tardío difuso.',
            photo: PH_AME },
          { t: 'Inmunofijación; pirofosfato', d: 'Define AL o ATTR',
            say: 'Para el tipo, se piden inmunofijación y cadenas livianas en suero y orina: si hay componente monoclonal, se biopsia. Si no lo hay, el centellograma con pirofosfato positivo confirma la ATTR sin biopsia.' },
        ] },
        { title: 'Tratamiento', tag: 'Cuidado', kind: 'pharma', items: [
          { t: 'Causa: quimioterapia en AL, tafamidis en ATTR', d: 'Sangrías en hemocromatosis',
            say: 'Se trata la causa: quimioterapia dirigida en la AL, tafamidis en la ATTR, sangrías o quelantes en la hemocromatosis y corticoides en la sarcoidosis.' },
          { t: 'Diuréticos con cuidado; sin digoxina ni betabloqueador', d: 'La precarga es indispensable',
            say: 'Los diuréticos con mucho cuidado, porque el gasto depende de la precarga. Los betabloqueadores y calcioantagonistas se toleran mal, y la digoxina se une al amiloide y es tóxica.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diferencial',
      title: 'Restrictiva o pericarditis constrictiva',
      cards: [
        { title: 'Constrictiva', tag: 'Curable', kind: 'alert', items: [
          { t: 'Pericardio calcificado o engrosado', d: 'Golpe pericárdico',
            say: 'La pericarditis constrictiva también da insuficiencia derecha con ventrículos pequeños, pero es curable. Tiene el pericardio calcificado o engrosado, un golpe pericárdico, y el antecedente de pericarditis, tuberculosis, radioterapia o cirugía cardíaca.' },
          { t: 'Interdependencia ventricular', d: 'Tto: pericardiectomía',
            say: 'Muestra interdependencia de los ventrículos y variación respiratoria marcada del flujo mitral. Se confirma con ecocardiograma, tomografía o resonancia, y se trata con pericardiectomía.' },
        ] },
        { title: 'Restrictiva', tag: 'Miocardio infiltrado', kind: 'normal', items: [
          { t: 'Miocardio engrosado, bajo voltaje', d: 'Sin cura quirúrgica',
            say: 'En la restrictiva el miocardio está engrosado e infiltrado, el voltaje es bajo y el tratamiento es el de la causa. No se cura con cirugía.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Miocarditis',
      title: 'Causas y clínica',
      cards: [
        { title: 'Causas', tag: 'Joven y varón', kind: 'key', items: [
          { t: 'Virus: Coxsackie B, parvovirus B19, SARS-CoV-2', d: 'Adenovirus, VHH-6, VIH',
            say: 'La miocarditis es la inflamación del miocardio, más frecuente en jóvenes y varones. La causa más común es viral: Coxsackie B, parvovirus B diecinueve, adenovirus y SARS-CoV dos.' },
          { t: 'Chagas agudo, autoinmune, fármacos', d: 'Células gigantes, inmunoterapia',
            say: 'Otras causas son el Chagas agudo, las enfermedades autoinmunes, la miocarditis de células gigantes, los fármacos y la inmunoterapia oncológica. La asociada a vacunas de ARN mensajero es rara, en varones jóvenes, casi siempre leve.' },
        ] },
        { title: 'Clínica', tag: 'Pródromo viral', kind: 'alert', items: [
          { t: 'Cuadro viral 1-2 semanas antes', d: 'Dolor pericárdico o isquémico, disnea',
            say: 'La historia típica es un cuadro viral una a dos semanas antes, seguido de dolor torácico, a veces pericárdico, disnea, palpitaciones o síncope.' },
          { t: 'Formas graves: IC, shock, bloqueo AV, TV', d: 'Miocarditis fulminante',
            say: 'Las formas graves se presentan como insuficiencia aguda, shock cardiogénico, bloqueo auriculoventricular de alto grado o arritmias ventriculares, y pueden causar muerte súbita.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Miocarditis',
      title: 'Diagnóstico y tratamiento',
      cards: [
        { title: 'Diagnóstico', tag: 'Examen no invasivo de elección: RM', kind: 'criteria', items: [
          { t: 'Troponina alta, ECG con ST cóncavo, coronarias normales', d: 'Angio o coronariografía si > 40 años',
            say: 'Hay troponina elevada, a veces como en un infarto, un electrocardiograma con supradesnivel cóncavo difuso, y las coronarias son normales. La coronariografía o el angio TAC se hacen en mayores de cuarenta años o con factores de riesgo, para descartar un infarto.' },
          { t: 'RM con realce tardío mesocárdico', d: 'Edema T2: criterios de Lake Louise',
            say: 'El examen confirmatorio no invasivo de elección es la resonancia magnética. Mira esta resonancia: el realce tardío con gadolinio es mesocárdico, que es un patrón no isquémico, y se acompaña de edema. La biopsia no es de rutina: se reserva para las formas graves.',
            photo: PH_MRI },
        ] },
        { title: 'Tratamiento', tag: 'Soporte y reposo', kind: 'pharma', items: [
          { t: 'Soporte; IECA y betabloqueador al estabilizar', d: 'Sin corticoides de rutina ni AINE',
            say: 'El tratamiento es de soporte: se manejan la insuficiencia y las arritmias. No hay antiviral específico y los corticoides no se usan de rutina, salvo en las formas de células gigantes, eosinofílica, sarcoidea o autoinmune. Los antiinflamatorios se evitan si hay disfunción ventricular.' },
          { t: 'Sin deporte competitivo 3-6 meses', d: 'Hasta normalizar función, marcadores y Holter',
            say: 'Y lo más importante para el examen: reposo del ejercicio competitivo e intenso por tres a seis meses, hasta normalizar la función ventricular, los marcadores y el Holter, por el riesgo de muerte súbita. La mayoría se recupera, pero una parte evoluciona a miocardiopatía dilatada.' },
        ] },
      ],
    },

    { type: 'pathway', intro: 'Armemos el árbol: de la insuficiencia sin causa al diagnóstico.' },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Miocardiopatías y miocarditis: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['IC en joven con R3, choque lateral y soplo apical', 'Miocardiopatía dilatada', 'Miocardiopatía hipertrófica'],
          say: 'Un joven con insuficiencia, choque de la punta lateral, tercer ruido y un soplo apical tiene una miocardiopatía dilatada. El soplo es una insuficiencia mitral funcional.' },
        { cells: ['Puérpera con disnea, R3 y crépitos', 'Miocardiopatía periparto', 'TEP o embolia amniótica'],
          say: 'Una puérpera con disnea, galope y crépitos: miocardiopatía periparto. El tromboembolismo es súbito y sin galope.' },
        { cells: ['Equimosis periorbitaria + proteinuria + VHS alta', 'Amiloidosis', 'Nefrosis lipoidea'],
          say: 'Equimosis periorbitaria con síndrome nefrótico y VHS alta: amiloidosis primaria, causa de miocardiopatía restrictiva.' },
        { cells: ['ECG de bajo voltaje con paredes gruesas', 'Amiloidosis', 'Hipertrofia hipertensiva'],
          say: 'Bajo voltaje con paredes gruesas es la discordancia de la amiloidosis. La hipertensiva tiene voltaje alto.' },
        { cells: ['Pródromo viral, troponina alta, coronarias normales', 'Miocarditis: RM', 'Biopsia de rutina'],
          say: 'Pródromo viral, troponina alta y coronarias normales: miocarditis. Se confirma con resonancia, no con biopsia de rutina.' },
        { cells: ['Miocarditis aguda', 'Sin deporte 3-6 meses', 'Test de esfuerzo o AINE altos'],
          say: 'En la miocarditis, no hay deporte competitivo por tres a seis meses. La prueba de esfuerzo y los antiinflamatorios en dosis altas son errores.' },
        { cells: ['Amiloidosis con IC', 'Evitar digoxina y betabloqueador', 'Tratar como IC-FEr'],
          say: 'En la amiloidosis, la digoxina es tóxica y los betabloqueadores se toleran mal. No se trata como una fracción reducida.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 28 años con dolor precordial de 2 días que aumenta con la inspiración, precedido por un cuadro respiratorio alto hace 10 días. PA 118/72 mmHg, FC 98 lpm, afebril. El ECG muestra supradesnivel cóncavo difuso del ST con descenso del PR, la troponina está 30 veces sobre el límite, la FEVI es de 48% con hipocinesia lateral y la coronariografía es normal.',
      question: '¿Cuál es el examen confirmatorio no invasivo de elección y el manejo?',
      options: [
        { letter: 'A', text: 'Resonancia magnética cardíaca; soporte y reposo de deporte competitivo por 3 a 6 meses' },
        { letter: 'B', text: 'Biopsia endomiocárdica de urgencia y corticoides en dosis altas' },
        { letter: 'C', text: 'Test de esfuerzo y alta si es normal' },
        { letter: 'D', text: 'Ibuprofeno en dosis altas y alta deportiva' },
        { letter: 'E', text: 'Fibrinólisis con tenecteplase' },
      ],
      correct: 'A',
      explanation: 'Es una miocarditis aguda (miopericarditis). La resonancia muestra edema y realce tardío no isquémico; el tratamiento es de soporte, con control de la insuficiencia y de las arritmias, y reposo del ejercicio intenso por 3 a 6 meses. La biopsia se reserva para formas graves, los corticoides no son de rutina, la prueba de esfuerzo está contraindicada y no hay oclusión coronaria para fibrinolizar.',
      say: {
        stem: 'Un hombre de veintiocho años tiene dolor precordial de dos días que aumenta con la inspiración, diez días después de un resfrío. El electrocardiograma muestra supradesnivel cóncavo difuso y descenso del PR, la troponina está treinta veces sobre el límite, la fracción es de cuarenta y ocho por ciento con hipocinesia lateral, y la coronariografía es normal.',
        question: '¿Cuál es el examen confirmatorio no invasivo de elección y el manejo?',
        options: 'Las opciones: resonancia y reposo del deporte por tres a seis meses; biopsia y corticoides; test de esfuerzo; ibuprofeno y alta deportiva; o fibrinólisis. Piénsalo.',
        answer: 'Es la A. Es una miocarditis, con una leve disfunción. La resonancia la confirma con el realce tardío, y se trata con soporte y reposo del deporte. La B tienta porque suena a diagnóstico definitivo, pero la biopsia se reserva para formas graves y los corticoides no son de rutina.',
      },
    },

    realQuiz('EUNACOM Julio 2015 · Pregunta 54',
      'Un adulto joven con disnea, ortopnea y edema, choque de la punta desplazado, galope por tercer ruido y un soplo sistólico apical que no cambia con la inspiración (insuficiencia mitral funcional por dilatación del anillo) tiene una miocardiopatía dilatada clásica. La hipertrófica y la estenosis aórtica dan un soplo eyectivo; la insuficiencia aórtica, un soplo diastólico; la estenosis mitral, un retumbo diastólico.',
      {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil quince. Un paciente de treinta y un años tiene disnea de esfuerzos, ortopnea y astenia. La presión es ciento veinte sobre setenta, hay edema de las piernas, el choque de la punta está desplazado dos centímetros hacia lateral, se ausculta un galope con un soplo sistólico en el ápex que no varía con la inspiración, y hay crépitos basales.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: miocardiopatía hipertrófica; miocardiopatía dilatada; insuficiencia aórtica; estenosis aórtica; o estenosis mitral. Piénsalo.',
        answer: 'Es la B. Un joven con insuficiencia, un corazón dilatado con galope y una insuficiencia mitral funcional: miocardiopatía dilatada. La A tienta, porque también da disnea en el joven, pero produce un soplo eyectivo que aumenta con Valsalva y un choque sostenido, no un corazón dilatado.',
      }),

    realQuiz('EUNACOM Julio 2024 · Pregunta 3',
      'Una puérpera con disnea creciente, taquicardia, tercer ruido, crépitos bibasales y edema tiene una insuficiencia cardíaca con disfunción sistólica: miocardiopatía periparto (último mes del embarazo a 5 meses del parto). El TEP sería súbito, la embolia de líquido amniótico ocurre durante el parto y el edema no cardiogénico no produce galope.',
      {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Una paciente de treinta y cinco años, primípara, está en el cuarto día posparto vaginal, con un embarazo normal. Consulta por una disnea que ha aumentado en los últimos días y que ahora es de reposo. Tiene frecuencia de ciento dos, presión de ciento diez sobre sesenta, galope por tercer ruido, crépitos bibasales, saturación de noventa y cuatro por ciento y edema con fóvea.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: edema pulmonar no cardiogénico; miocardiopatía periparto; tromboembolismo pulmonar; embolia de líquido amniótico; o neumonía. Piénsalo.',
        answer: 'Es la B. Insuficiencia con disfunción sistólica, con galope, en una puérpera: miocardiopatía periparto. La C tienta porque el puerperio es de riesgo para tromboembolismo, pero este debuta de forma súbita y no da galope ni crépitos.',
      }),

    realQuiz('EUNACOM Diciembre 2017 · Pregunta 64',
      'Un adulto mayor con equimosis periorbitaria espontánea, proteinuria nefrótica, hipoalbuminemia y VHS muy elevada tiene una amiloidosis primaria (AL): causa de síndrome nefrótico y de miocardiopatía restrictiva, con macroglosia y neuropatía. La nefrosis lipoidea y la nefropatía diabética no dan VHS alta ni equimosis, la enfermedad de Berger es hematúrica y la arteritis de la temporal no produce nefrosis.',
      {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Un paciente de ochenta años consulta por equimosis periorbitaria sin antecedente traumático, asociada a astenia y edema de las piernas. Los exámenes muestran creatinina de dos coma seis, proteinuria de ocho coma cuatro gramos al día, albuminemia de uno coma cuatro y una VHS de noventa y seis.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: nefrosis lipoidea; nefropatía diabética; amiloidosis primaria; enfermedad de Berger; o arteritis de la temporal. Piénsalo.',
        answer: 'Es la C. Equimosis periorbitaria con síndrome nefrótico y VHS alta es amiloidosis primaria, la misma que infiltra el corazón y produce la miocardiopatía restrictiva. La A tienta por la proteinuria, pero la nefrosis lipoidea no da VHS alta.',
      }),

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: dilatada, restrictiva y miocarditis',
      cards: [
        { title: 'Reconocer', tag: 'La historia es la pista', kind: 'key', items: [
          { t: 'Dilatada: alcohol, Chagas, antraciclinas, periparto', d: 'Tratar con los 4 pilares',
            say: 'Cerremos con las reglas de oro. La miocardiopatía dilatada: ventrículo grande y fracción baja. Mira la historia: alcohol, Chagas, quimioterapia, puerperio. Se trata con los cuatro pilares y la causa.' },
          { t: 'Restrictiva: aurículas gigantes, bajo voltaje', d: 'Amiloidosis; evitar digoxina',
            say: 'La restrictiva: aurículas gigantes, ventrículos normales, bajo voltaje y paredes gruesas. La causa principal es la amiloidosis. Se evita la digoxina.' },
        ] },
        { title: 'Miocarditis', tag: 'Y reposo', kind: 'alert', items: [
          { t: 'Pródromo viral + troponina + coronarias normales', d: 'RM con realce tardío',
            say: 'La miocarditis: pródromo viral, troponina alta y coronarias normales. La resonancia con realce tardío la confirma.' },
          { t: 'Soporte; sin deporte 3-6 meses', d: 'Biopsia solo en formas graves',
            say: 'Se trata con soporte y reposo del deporte competitivo por tres a seis meses. Si te llevas una sola idea de hoy: ante una insuficiencia cardíaca sin causa evidente, la historia es la pista, y la resonancia es el examen que tipifica el miocardio. Nos vemos en la próxima clase, con las valvulopatías.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Miocardiopatías y miocarditis: de la insuficiencia sin causa al diagnóstico',
    root: N('start', 'IC o troponina alta sin causa evidente', 'Coronarias sanas, sin valvulopatía grave',
      'Llega un paciente joven con insuficiencia cardíaca, arritmia o troponina elevada, sin infarto ni valvulopatía que lo expliquen. Pides ecocardiograma, ECG y descartas las coronarias.',
      ['Ventrículo dilatado, FEVI baja', N('do', 'Miocardiopatía dilatada', 'Buscar la causa en la historia',
        'Si el ventrículo está dilatado con fracción baja, es una miocardiopatía dilatada. Buscas alcohol, Chagas, quimioterapia, puerperio, tiroides y familiares.',
        ['Puerperio', N('alert', 'Periparto', 'Sin IECA si está embarazada',
          'Si está en el puerperio, es una miocardiopatía periparto: tratamiento de la insuficiencia adecuado a embarazo o lactancia y bromocriptina.')],
        ['Otra causa', N('ok', 'Cuatro pilares + causa', 'DAI a los 3 meses si FEVI ≤ 35%',
          'En los demás casos, cuatro pilares, tratamiento de la causa y desfibrilador si la fracción sigue en treinta y cinco o menos a los tres meses.')],
      )],
      ['Paredes gruesas, aurículas grandes, FEVI normal', N('do', 'Restrictiva', 'ECG de bajo voltaje',
        'Si las paredes son gruesas, las aurículas grandes y la fracción normal, con bajo voltaje en el electrocardiograma, es una restrictiva.',
        ['Componente monoclonal', N('alert', 'Amiloidosis AL', 'Biopsia; quimioterapia',
          'Con un componente monoclonal, es una amiloidosis AL: biopsia y quimioterapia.')],
        ['Sin componente monoclonal', N('ok', 'Pirofosfato: ATTR', 'Tafamidis',
          'Sin componente monoclonal, el centellograma con pirofosfato confirma la ATTR, y se trata con tafamidis.')],
      )],
      ['Pródromo viral + troponina + coronarias normales', N('alert', 'Miocarditis', 'Resonancia con realce tardío',
        'Con pródromo viral, troponina elevada y coronarias normales, es una miocarditis. La resonancia la confirma, se trata con soporte y reposo del deporte competitivo por tres a seis meses.',
        ['Shock, bloqueo AV o TV', N('refer', 'UCI y biopsia', 'Soporte mecánico',
          'Si hay shock, bloqueo de alto grado o taquicardia ventricular, UCI, biopsia endomiocárdica y soporte mecánico.')],
      )],
    ),
  },
};
