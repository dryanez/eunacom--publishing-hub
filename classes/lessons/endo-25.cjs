// Clase 7.25 (Endocrinología) — guion docente escrito a mano (estándar Módulo 1). Tema nuevo de hueco del Perfil V3.
// Fuente clínica: books/scripts/dataset_endocrinologia_bloque_5.cjs (endo-25). Código: 1.03.1.023 Ginecomastia
// (Dx específico · Tx inicial · Seguimiento derivar, según books/data/v3_codemap.json).
// Preguntas reales (class_questions.cjs --search "ginecomastia|espironolactona|klinefelter"): Julio 2025 P45 (puberal, código de la clase),
// Julio 2013 P93 (puberal unilateral con antecedente familiar), Julio 2017 P100 (neonatal), Julio 2025 P83 (ginecomastia e hipogonadismo:
// testosterona matinal; código 1.03.1.012, no usada en endo-23). Enunciados y alternativas copiados tal cual del banco.
// No usadas: Diciembre 2024 P16 (enunciado roto, dos alternativas B y explicación de otra pregunta); las de espironolactona en insuficiencia
// cardíaca e HTA resistente (Julio 2024 P153, Agosto 2021 P135, Julio 2025 P1, Diciembre 2018 P93, Diciembre 2017 P8 y P13, Enero 2023 P81,
// Diciembre 2022 P51, Agosto 2021 P136), Julio 2016 P98 y P99, y Julio 2013 P58: no tratan ginecomastia.
// Julio 2013 P93 tiene como clave "controlar en un año"; el libro indica el primer control a los 6 meses (se aclara en la voz).
// Sin imágenes: no hay foto verificada de ginecomastia en books/data/atlas_fotos_verificadas.json ni en classes/media/biblioteca;
// en _candidatas solo está Bailey & Love Fig. 6.22 (facies leonina y ginecomastia en lepra), que no muestra lo que enseña la clase.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'endo-25',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Fisiológica, farmacológica o patológica: cuándo tranquilizar, qué fármaco cambiar y qué no se te puede pasar',
      say: 'Bienvenido. Venimos de la neoplasia endocrina múltiple, y hoy vemos un motivo de consulta muy frecuente: un hombre con la mama aumentada. Casi siempre es benigno, y el examen pregunta tres cosas: qué hacer con el adolescente, qué fármaco lo causa, y qué estudio pides cuando sospechas algo más. Partamos por el mecanismo.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Estrógenos estimulan, andrógenos frenan',
      nodes: [
        { id: 'e', col: 0, row: 0, k: 'cause', t: 'Exceso de estrógenos', s: 'O más aromatización en la grasa' },
        { id: 't', col: 0, row: 2, k: 'cause', t: 'Déficit de testosterona', s: 'Hipogonadismo, edad' },
        { id: 'r', col: 0, row: 4, k: 'cause', t: 'Receptor androgénico bloqueado', s: 'Fármacos' },
        { id: 'b', col: 2, row: 2, k: 'mech', t: 'Desbalance estrógeno-andrógeno', s: 'A favor del estrógeno' },
        { id: 'g', col: 4, row: 1, k: 'effect', t: 'Proliferación glandular', s: 'Benigna' },
        { id: 'd', col: 4, row: 3, k: 'effect', t: 'Disco retroareolar', s: '≥ 2 cm, concéntrico al pezón' },
      ],
      edges: [
        { from: 'e', to: 'b' }, { from: 't', to: 'b' }, { from: 'r', to: 'b' },
        { from: 'b', to: 'g' }, { from: 'g', to: 'd' },
      ],
      steps: [
        { show: ['b'], note: 'Dos hormonas que tiran en sentido contrario',
          say: 'La mama del hombre tiene un poco de tejido glandular, y dos hormonas tiran en sentido contrario. Los estrógenos lo estimulan y los andrógenos lo frenan. La ginecomastia aparece cuando ese balance se inclina hacia el estrógeno.' },
        { show: ['e'], note: 'Primer camino: más estrógeno',
          say: 'El primer camino es tener más estrógeno. Puede venir de afuera o fabricarse en el propio cuerpo, porque el tejido adiposo convierte andrógenos en estrógenos. A eso se le llama aromatización periférica.' },
        { show: ['t', 'r'], note: 'Menos testosterona, o testosterona que no actúa',
          say: 'El segundo camino es tener menos testosterona, como en el hipogonadismo. Y el tercero, que la testosterona esté, pero no pueda actuar, porque un fármaco bloquea su receptor. Guarda estos tres caminos, porque cada causa que veamos cae en uno de ellos.' },
        { show: ['g', 'd'], note: 'Lo que palpas',
          say: 'El resultado es una proliferación benigna de la glándula. Al examen palpas un disco firme o elástico, centrado bajo el pezón, de dos centímetros o más. Puede ser de un lado o de los dos, y a veces duele.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico diferencial',
      title: '¿Glándula, grasa o cáncer?',
      cards: [
        { title: 'Ginecomastia', tag: 'Tejido glandular', kind: 'key', items: [
          { t: 'Disco ≥ 2 cm bajo el pezón', d: 'Firme o elástico, concéntrico',
            say: 'Lo primero es confirmar que es una ginecomastia de verdad. La clave es el disco: tejido glandular firme, concéntrico al pezón, de dos centímetros o más. Mira a este paciente: desarrollo mamario bilateral en un hombre, en tratamiento con espironolactona.',
            photo: { src: 'biblioteca/05_endocrinologia/endo-25/01_ginecomastia__talley_p503.jpg', label: 'Ginecomastia bilateral', at: 'Mira a este paciente', credit: 'Talley & O\'Connor, Clinical Examination, Fig. 29.14' } },
        ] },
        { title: 'Seudoginecomastia', tag: 'Solo grasa', kind: 'normal', items: [
          { t: 'Lipomastia del obeso', d: 'Sin disco retroareolar',
            say: 'La seudoginecomastia, o lipomastia, es solo grasa, propia de la obesidad. No hay glándula.' },
          { t: 'Maniobra en pinza', d: 'Pulgar e índice hacia el pezón',
            say: 'La diferencias con una maniobra simple. Tomas la mama en pinza con el pulgar y el índice, y acercas los dedos hacia el pezón. En la lipomastia los dedos llegan sin encontrar ningún disco.' },
        ] },
        { title: 'Cáncer de mama masculino', tag: 'No se te puede pasar', kind: 'alert', items: [
          { t: 'Unilateral, dura, excéntrica, fija', d: 'Indolora',
            say: 'El diferencial grave es el cáncer de mama del hombre. Sospéchalo ante una masa de un solo lado, dura, indolora, fija y excéntrica, es decir, que no está centrada bajo el pezón.' },
          { t: 'Retracción, secreción con sangre', d: 'Úlcera o adenopatía axilar',
            say: 'Suma la retracción del pezón, la secreción sanguinolenta, la ulceración o una adenopatía axilar. Es más frecuente después de los sesenta años, en el síndrome de Klinefelter y en los portadores de BRCA dos.' },
          { t: 'Mamografía o ecografía y biopsia', d: 'Derivación urgente',
            say: 'Ante esa sospecha no se observa: mamografía o ecografía, biopsia y derivación urgente.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Etiología fisiológica',
      title: 'Tres picos normales',
      cards: [
        { title: 'Fisiológica', tag: 'Distribución trimodal', kind: 'normal', items: [
          { t: 'Neonatal: estrógenos maternos', d: '60-90% de los RN; regresa en semanas',
            say: 'Ahora las causas, y partimos por las normales. La ginecomastia fisiológica tiene tres picos. El primero es el recién nacido: la tiene entre sesenta y noventa por ciento, por los estrógenos de la madre, y regresa en semanas.' },
          { t: 'Puberal: Tanner 2 a 4', d: 'Hasta la mitad o más; bilateral, sensible',
            say: 'El segundo, el que más se pregunta, es la pubertad. Hasta la mitad o más de los varones la tiene entre Tanner dos y cuatro, muchas veces de los dos lados y sensible.' },
          { t: 'Adulto mayor', d: 'Menos testosterona, más aromatización',
            say: 'Y el tercero es el adulto mayor, por dos de los caminos que vimos: baja la testosterona y aumenta la aromatización en el tejido graso.' },
        ] },
        { title: 'Conducta', tag: 'No sobreestudiar', kind: 'key', items: [
          { t: 'Puberal: regresa sola en > 90%', d: 'En 6 meses a 2 años',
            say: 'La puberal regresa sola en más del noventa por ciento de los casos, entre seis meses y dos años.' },
          { t: 'Examen normal: sin exámenes', d: 'Tranquilizar y control a los 6 meses',
            say: 'Por eso, si el examen es normal, con testículos normales y sin fármacos, no pides exámenes. Tranquilizas al adolescente y lo controlas a los seis meses. Sobreestudiar a un púber sano es el error que el examen castiga.' },
          { t: 'Recién nacido: tranquilizar', d: 'No exprimir la mama',
            say: 'En el recién nacido es lo mismo: se tranquiliza a los padres y no se exprime la mama.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Etiología farmacológica',
      title: 'El fármaco: la causa adquirida más común',
      cards: [
        { title: 'Fármacos y drogas', tag: '10-25% de los casos', kind: 'pharma', items: [
          { t: 'Espironolactona: la más típica', d: 'Bloquea el receptor androgénico',
            say: 'Entre las causas adquiridas, la más común son los fármacos, entre diez y veinticinco por ciento de los casos. El más típico, el que tienes que tener en la punta de la lengua, es la espironolactona. Bloquea el receptor de andrógenos y además aumenta la conversión de testosterona a estradiol.' },
          { t: 'Ketoconazol, cimetidina, antiandrógenos', d: 'Análogos de GnRH, finasterida, dutasterida',
            say: 'En la misma línea están el ketoconazol, la cimetidina, los antiandrógenos y los análogos de GnRH del cáncer de próstata, y la finasterida y la dutasterida. También los estrógenos, la digoxina, el metronidazol y antirretrovirales como el efavirenz.' },
          { t: 'Antipsicóticos y metoclopramida', d: 'Por hiperprolactinemia',
            say: 'Los antipsicóticos y la metoclopramida la producen a través de la prolactina alta, como viste en la clase de hiperprolactinemia.' },
          { t: 'Anabolizantes, alcohol, marihuana', d: 'Y opioides',
            say: 'Y las drogas: esteroides anabolizantes, alcohol, marihuana y opioides. Pregúntalas directamente, porque el paciente rara vez las cuenta solo.' },
        ] },
        { title: 'Conducta', tag: 'Tratamiento inicial', kind: 'key', items: [
          { t: 'Suspender o cambiar el fármaco', d: 'Espironolactona → eplerenona',
            say: 'La conducta es tuya: suspender o cambiar el fármaco. El ejemplo clásico es cambiar la espironolactona por eplerenona, un antagonista mineralocorticoide selectivo que casi no da ginecomastia. Ya lo viste en el hiperaldosteronismo.' },
          { t: 'Actuar antes de 12 meses', d: 'Después el tejido se fibrosa',
            say: 'Y hazlo pronto. La regresión es más probable si actúas antes de doce meses. Después el tejido se fibrosa y ya no vuelve atrás con medidas médicas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Etiología patológica',
      title: 'Enfermedades y tumores',
      cards: [
        { title: 'Enfermedades', tag: 'Tratar la causa', kind: 'criteria', items: [
          { t: 'Cirrosis hepática', d: 'Con estigmas de daño hepático',
            say: 'Las causas patológicas también caen en los tres caminos. La clásica es la cirrosis hepática: el paciente con estigmas de daño hepático y ginecomastia.' },
          { t: 'ERC en diálisis, hipertiroidismo', d: 'Y realimentación tras desnutrición',
            say: 'Le siguen la enfermedad renal crónica en diálisis, el hipertiroidismo y la realimentación después de una desnutrición.' },
          { t: 'Hipogonadismo primario o secundario', d: 'Klinefelter: el primario típico',
            say: 'Y el hipogonadismo, que puede ser primario, con el Klinefelter como ejemplo típico, o secundario, cuando falla la hipófisis.' },
        ] },
        { title: 'Tumores', tag: 'No se te pueden pasar', kind: 'alert', items: [
          { t: 'Testículo: Leydig o Sertoli', d: 'Producen estrógenos',
            say: 'Ahora lo que no se te puede pasar: los tumores. Los tumores testiculares de células de Leydig o de Sertoli producen estrógenos directamente.' },
          { t: 'Germinales y hCG ectópica', d: 'Coriocarcinoma; pulmón, hígado',
            say: 'Los tumores germinales, como el coriocarcinoma, producen gonadotrofina coriónica, la hCG, y algunos tumores de pulmón o de hígado la producen en forma ectópica.' },
          { t: 'Suprarrenal feminizante', d: 'Cerca de 1/4 queda idiopática',
            say: 'Y los tumores suprarrenales feminizantes. Aun así, cerca de un cuarto de los casos queda sin causa, como idiopática.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Evaluación clínica',
      title: 'Anamnesis y examen: el testículo es obligatorio',
      cards: [
        { title: 'Anamnesis', tag: 'Qué preguntar', kind: 'criteria', items: [
          { t: 'Tiempo, velocidad, dolor', d: 'Crecimiento rápido: alerta',
            say: 'Con esto en mente, la evaluación. Pregunta cuánto tiempo lleva, qué tan rápido crece y si duele. Una ginecomastia que crece rápido es otra historia.' },
          { t: 'Todos los fármacos y drogas', d: 'Alcohol, anabolizantes',
            say: 'Revisa todos los fármacos, el alcohol, las drogas y los anabolizantes.' },
          { t: 'Síntomas de la causa', d: 'Hipogonadismo, tiroides, hígado, riñón',
            say: 'Y busca síntomas de la enfermedad de base: hipogonadismo, hipertiroidismo, hepatopatía o nefropatía.' },
        ] },
        { title: 'Examen físico', tag: 'Diagnóstico específico', kind: 'alert', items: [
          { t: 'Medir el disco', d: 'Ambas mamas y axilas',
            say: 'Al examen mides el diámetro del disco, examinas las dos mamas y las axilas, y buscas estigmas de daño hepático.' },
          { t: 'Examen testicular obligatorio', d: 'Tamaño, consistencia, masas',
            say: 'Y nunca te saltes el examen testicular: tamaño, consistencia y masas. Un tumor de Leydig o un tumor germinal puede debutar con una ginecomastia, y la masa la encuentras tú.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Estudio',
      title: 'Cuándo se estudia y qué se pide',
      cards: [
        { title: 'Sospecha de patológica', tag: 'Cuándo estudiar', kind: 'alert', items: [
          { t: 'Adulto sin causa evidente', d: 'O inicio reciente y doloroso',
            say: 'Se estudia cuando sospechas una ginecomastia patológica. En el adulto, cuando no hay una causa evidente, o cuando es de inicio reciente y dolorosa.' },
          { t: 'Crecimiento rápido o disco > 5 cm', d: 'A cualquier edad',
            say: 'También cuando crece rápido o cuando el disco mide más de cinco centímetros.' },
          { t: 'Púber: testículos anormales', d: 'O persiste más de 2 años',
            say: 'Y en el púber, solo si los testículos son anormales o si la ginecomastia persiste más de dos años.' },
        ] },
        { title: 'Qué pedir', tag: 'Estudio escalonado', kind: 'criteria', items: [
          { t: 'Perfil hepático, creatinina, TSH', d: 'Hígado, riñón y tiroides',
            say: 'El estudio busca las causas que ya conoces. Para las enfermedades: perfil hepático, creatinina y TSH.' },
          { t: 'Testosterona total, LH, FSH', d: 'Estradiol y β-hCG',
            say: 'Para las hormonas: testosterona total, LH, FSH, estradiol y beta-hCG. Esa lista se pregunta tal cual.' },
          { t: 'Prolactina si hay galactorrea', d: 'O sospecha de hipogonadismo secundario',
            say: 'Y prolactina solo si hay galactorrea o sospechas un hipogonadismo secundario.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Interpretación',
      title: 'Cómo leer el estudio hormonal',
      cards: [
        { title: 'Hormona alta', tag: 'Pensar en tumor', kind: 'alert', items: [
          { t: 'β-hCG alta: tumor germinal', d: 'Eco testicular; si es normal, TC de tórax y abdomen',
            say: 'Si pediste el estudio, tienes que saber leerlo. Son cuatro patrones, y cada uno te manda a un examen distinto. Si la beta-hCG está alta, piensas en un tumor germinal y pides una ecografía testicular. Si el testículo es normal, buscas un origen ectópico con un TAC de tórax y abdomen.' },
          { t: 'Estradiol alto, LH normal o baja', d: 'Eco testicular (Leydig) y TC suprarrenal',
            say: 'Si el estradiol está alto con una LH normal o baja, algo está fabricando estrógeno por su cuenta. Pides ecografía testicular, buscando un tumor de Leydig, y TAC suprarrenal.' },
        ] },
        { title: 'Testosterona baja', tag: 'Mirar la LH', kind: 'criteria', items: [
          { t: 'LH alta: hipogonadismo primario', d: 'Cariotipo si sospechas Klinefelter',
            say: 'Si la testosterona está baja y la LH alta, el testículo falla y la hipófisis lo empuja: es un hipogonadismo primario. Si sospechas un Klinefelter, pides un cariotipo.' },
          { t: 'LH baja: hipogonadismo secundario', d: 'Prolactina y RM de silla turca',
            say: 'Y si la testosterona y la LH están bajas, el problema está arriba: es un hipogonadismo secundario. Pides prolactina y resonancia de silla turca.' },
        ] },
      ],
    },
    {
      type: 'points',
      kicker: 'Tratamiento y derivación',
      title: 'Tratar la causa y saber derivar',
      cards: [
        { title: 'Tratamiento inicial', tag: 'Lo haces tú', kind: 'pharma', items: [
          { t: 'Suspender o cambiar el fármaco', d: 'Y tratar la enfermedad de base',
            say: 'El tratamiento es el de la causa. Suspendes o cambias el fármaco y tratas la enfermedad de base, idealmente antes de doce meses, antes de que el tejido se fibrose.' },
          { t: 'Puberal: solo observar', d: 'Sin fármacos',
            say: 'La ginecomastia puberal solo se observa.' },
          { t: 'Tamoxifeno: solo especialista', d: '10-20 mg/día por 3 meses',
            say: 'El tamoxifeno existe, pero lo indica el especialista: diez a veinte miligramos al día por tres meses, en la ginecomastia dolorosa de menos de un año, o para prevenir la que causan los antiandrógenos en el cáncer de próstata.' },
        ] },
        { title: 'Derivar', tag: 'Seguimiento', kind: 'alert', items: [
          { t: 'Endocrinología', d: 'Estudio alterado o sin causa aclarada',
            say: 'Y en el Perfil tu nivel de seguimiento es derivar. A endocrinología va la ginecomastia patológica con estudio alterado o sin causa aclarada.' },
          { t: 'Cirugía', d: 'Fibrosa > 1-2 años o impacto psicológico',
            say: 'A cirugía, la fibrosa de más de uno a dos años, o la que tiene un impacto psicológico importante. Se hace una mastectomía subcutánea, con o sin liposucción.' },
          { t: 'Urgente', d: 'Sospecha de cáncer de mama o tumor testicular',
            say: 'Y con urgencia, la sospecha de cáncer de mama o de tumor testicular. No hay garantía GES específica, pero esa derivación oncológica es prioritaria.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del aumento de volumen a la conducta.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Ginecomastia: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Recién nacido con mamas aumentadas', 'Tranquilizar; no exprimir', 'Pedir hormonas o ecografía'],
          say: 'Recién nacido con mamas aumentadas: estrógenos maternos. Se tranquiliza y no se exprime. Pedir hormonas o una ecografía es la trampa.' },
        { cells: ['Púber Tanner 2-4, testículos normales', 'Tranquilizar; control a los 6 meses', 'Pedir exámenes o biopsia'],
          say: 'Púber con testículos normales: se tranquiliza y se controla a los seis meses. Pedir exámenes o una biopsia es el error.' },
        { cells: ['Púber: > 2 años, > 5 cm o testículos anormales', 'Estudiar y derivar', 'Seguir observando'],
          say: 'Pero si persiste más de dos años, mide más de cinco centímetros o los testículos son anormales, ya no se observa: se estudia y se deriva.' },
        { cells: ['Usuario de espironolactona', 'Cambiar a eplerenona', 'Biopsia, o suspender sin reemplazo'],
          say: 'Usuario de espironolactona con un disco blando y centrado: se cambia por eplerenona. La biopsia sobra, y suspenderla sin reemplazo le quita un fármaco útil.' },
        { cells: ['Cirrosis, ERC o hipertiroidismo', 'Tratar la causa', 'Tamoxifeno de entrada'],
          say: 'Cirrosis, enfermedad renal crónica o hipertiroidismo: se trata la causa. El tamoxifeno no es tu primera herramienta, lo indica el especialista.' },
        { cells: ['Testículos pequeños, libido baja', 'Testosterona, LH y FSH', 'Operar la mama sin estudiar'],
          say: 'Testículos pequeños y libido baja: hipogonadismo. Testosterona, LH y FSH, con cariotipo si la LH es alta o prolactina si es baja, y derivación a endocrinología.' },
        { cells: ['Masa testicular o crecimiento rápido', 'β-hCG, AFP y eco testicular; urgente', 'Tamoxifeno y control'],
          say: 'Ginecomastia que crece rápido o con masa testicular: beta-hCG, alfafetoproteína y ecografía testicular, con derivación urgente. Dar tamoxifeno sin estudiar retrasa el diagnóstico de un cáncer.' },
        { cells: ['Masa dura, excéntrica, fija', 'Mamografía o eco y biopsia', 'Observar como ginecomastia'],
          say: 'Y la masa dura, excéntrica y fija: mamografía o ecografía y biopsia. Esa no se observa.' },
      ],
    },
    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 63 años con insuficiencia cardíaca con fracción de eyección reducida, en tratamiento con enalapril, bisoprolol, furosemida y espironolactona 25 mg/día desde hace 8 meses. Consulta por aumento de volumen doloroso de ambas mamas de 4 meses de evolución. Se palpa bajo ambas areolas un disco firme, móvil, centrado en el pezón, de 3 cm, sensible, sin retracción ni secreción del pezón ni adenopatías axilares. Testículos de 20 mL, simétricos y sin masas. Sin estigmas de daño hepático. Perfil hepático, creatinina y TSH normales.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Mamografía bilateral y biopsia core' },
        { letter: 'B', text: 'Cambiar la espironolactona por eplerenona y controlar la regresión' },
        { letter: 'C', text: 'Solicitar testosterona, LH, FSH, estradiol y β-hCG antes de decidir' },
        { letter: 'D', text: 'Suspender la espironolactona sin reemplazo' },
        { letter: 'E', text: 'Derivar a cirugía para mastectomía subcutánea' },
      ],
      correct: 'B',
      explanation: 'Ginecomastia farmacológica por espironolactona: disco concéntrico, bilateral y sensible, sin rasgos de cáncer y con testículos normales; no requiere biopsia ni estudio hormonal extenso. Se cambia por eplerenona, que conserva el beneficio pronóstico en la insuficiencia cardíaca y casi no produce ginecomastia. Si persiste más de 12 a 24 meses y se vuelve fibrosa, se deriva a cirugía.',
      say: {
        stem: 'Un hombre de sesenta y tres años con insuficiencia cardíaca con fracción de eyección reducida toma espironolactona hace ocho meses. Hace cuatro meses le duelen y le crecen las dos mamas. Tiene un disco firme, móvil y centrado de tres centímetros bajo cada areola, sin retracción, secreción ni adenopatías. Los testículos son normales, y el perfil hepático, la creatinina y la TSH también.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: mamografía y biopsia; cambiar la espironolactona por eplerenona; estudio hormonal completo antes de decidir; suspender la espironolactona sin reemplazo; o mastectomía subcutánea. Piénsalo.',
        answer: 'Es la B. Disco centrado, bilateral y sensible, testículos normales y un fármaco causante: es una ginecomastia por espironolactona. Se cambia por eplerenona, que conserva el beneficio en la insuficiencia cardíaca y casi no da ginecomastia. La D tienta, pero le quitas a este paciente un fármaco que mejora su pronóstico. Y la cirugía es solo si persiste fibrosa por más de uno a dos años.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 45',
      stem: 'Adolescente masculino de 14 años con aumento bilateral del tejido mamario subareolar, sensible al tacto, sin secreción. Sin medicamentos. Desarrollo puberal Tanner 3.',
      question: '¿Cuál es el diagnóstico y conducta?',
      options: [
        { letter: 'A', text: 'Ginecomastia puberal fisiológica; tranquilizar y observar' },
        { letter: 'B', text: 'Cáncer de mama masculino; biopsia urgente' },
        { letter: 'C', text: 'Hiperprolactinemia; solicitar prolactina' },
        { letter: 'D', text: 'Hipogonadismo; solicitar testosterona' },
        { letter: 'E', text: 'Tumor testicular; solicitar ecografía testicular' },
      ],
      correct: 'A',
      explanation: 'Ginecomastia bilateral, sensible, en Tanner 3 y sin fármacos: ginecomastia puberal fisiológica. Regresa sola en 6 meses a 2 años en más del 90%. Con examen testicular normal no se piden exámenes: tranquilizar y controlar a los 6 meses.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un adolescente de catorce años tiene aumento del tejido bajo ambas areolas, sensible al tacto y sin secreción. No toma medicamentos y está en Tanner tres.',
        question: '¿Cuál es el diagnóstico y la conducta?',
        options: 'Las opciones: ginecomastia puberal, tranquilizar y observar; cáncer de mama con biopsia urgente; hiperprolactinemia con prolactina; hipogonadismo con testosterona; o tumor testicular con ecografía. Piénsalo.',
        answer: 'Es la A. Bilateral, sensible, en Tanner tres y sin fármacos: es la ginecomastia puberal, que regresa sola. Se tranquiliza y se controla a los seis meses. La E tienta, pero sin masa testicular no hay tumor que buscar. Eso sí, el testículo lo examinas siempre: ese examen normal es lo que te permite no pedir nada.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 93',
      stem: 'Un adolescente de 13 años, con antecedentes familiares de cáncer de mama, es traído por presentar aumento de volumen en mama derecha, asociado a hipersensibilidad local, sin otros síntomas. Al examen físico se aprecia mama derecha aumentada de volumen y a la palpación, destaca tumoración de consistencia gomosa y fácil de movilizar, desarrollo puberal normal para su edad, sin otros hallazgos. Se solicita ecografía mamaria que muestra nódulo de bordes lisos de 5 milímetros de diámetro.',
      question: 'La conducta más adecuada es:',
      options: [
        { letter: 'A', text: 'Solicitar estudio genético' },
        { letter: 'B', text: 'Tranquilizar a los padres y al paciente, y controlar en un año' },
        { letter: 'C', text: 'Indicar tratamiento hormonal y controlar' },
        { letter: 'D', text: 'Realizar mastectomía parcial' },
        { letter: 'E', text: 'Realizar biopsia estereotáxica' },
      ],
      correct: 'B',
      explanation: 'Ginecomastia puberal benigna, aunque sea unilateral: tejido gomoso, móvil y sensible, con desarrollo puberal normal. El antecedente familiar no cambia la conducta: tranquilizar y controlar (el libro indica el primer control a los 6 meses).',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil trece. Un adolescente de trece años, con antecedente familiar de cáncer de mama, tiene la mama derecha aumentada y sensible. Se palpa un tejido gomoso y móvil, y su pubertad es normal. La ecografía muestra un nódulo de bordes lisos de cinco milímetros.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: estudio genético; tranquilizar y controlar; tratamiento hormonal; mastectomía parcial; o biopsia estereotáxica. Piénsalo.',
        answer: 'Es la B. Tejido gomoso, móvil y sensible en un adolescente con pubertad normal es una ginecomastia puberal, aunque sea de un solo lado. El antecedente familiar es la trampa que empuja a la A o a la E, pero no cambia nada frente a un disco blando a esta edad. Se tranquiliza y se controla; el libro propone el primer control a los seis meses.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 100',
      stem: 'Un recién nacido de 20 días de vida presenta ginecomastia bilateral. Se palpa tejido mamario de 1,5 cm en cada mama, de consistencia firme. El resto del examen físico es normal y ha subido adecuadamente de peso.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar niveles plasmáticos de prolactina' },
        { letter: 'B', text: 'Solicitar niveles de estrógenos, progesterona, LH y FSH' },
        { letter: 'C', text: 'Solicitar ecografía mamaria' },
        { letter: 'D', text: 'Realizar biopsia' },
        { letter: 'E', text: 'Observar y controlar ambulatoriamente' },
      ],
      correct: 'E',
      explanation: 'Ginecomastia neonatal fisiológica, por estrógenos maternos: la presenta el 60-90% de los recién nacidos y regresa en semanas. Con un niño sano que sube bien de peso, se tranquiliza a los padres, no se exprime la mama y se controla.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecisiete. Un recién nacido de veinte días tiene tejido mamario firme de un centímetro y medio en cada mama. El resto del examen es normal y sube bien de peso.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: prolactina; estrógenos, progesterona, LH y FSH; ecografía mamaria; biopsia; u observar y controlar. Piénsalo.',
        answer: 'Es la E. Es una ginecomastia neonatal, por los estrógenos de la madre, y la tienen entre sesenta y noventa por ciento de los recién nacidos. Con un niño sano que sube bien de peso, se observa, se tranquiliza a los padres y no se exprime la mama. La B tienta porque suena completa, pero es sobreestudiar un hallazgo normal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 83',
      stem: 'Hombre de 38 años con disminución de la libido, disfunción eréctil, fatiga y ginecomastia bilateral. Testículos de tamaño normal.',
      question: '¿Cuál es el estudio de elección inicial?',
      options: [
        { letter: 'A', text: 'Testosterona total sérica matinal' },
        { letter: 'B', text: 'Ecografía testicular' },
        { letter: 'C', text: 'Espermograma' },
        { letter: 'D', text: 'FSH y LH' },
        { letter: 'E', text: 'Prolactina' },
      ],
      correct: 'A',
      explanation: 'Libido baja, disfunción eréctil y ginecomastia sugieren hipogonadismo: el estudio inicial es la testosterona total matinal. Si está baja, la LH y la FSH lo clasifican: LH alta, primario (cariotipo si se sospecha Klinefelter); LH baja, secundario (prolactina y RM de silla turca).',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un hombre de treinta y ocho años tiene baja de la libido, disfunción eréctil, fatiga y ginecomastia bilateral. Sus testículos son de tamaño normal.',
        question: '¿Cuál es el estudio inicial de elección?',
        options: 'Las opciones: testosterona total matinal; ecografía testicular; espermograma; FSH y LH; o prolactina. Piénsalo.',
        answer: 'Es la A. Libido baja, disfunción eréctil y ginecomastia te hacen pensar en un hipogonadismo, y lo primero es confirmar la testosterona total en la mañana. La D tienta, porque la LH y la FSH también están en el estudio, pero sirven para clasificar el hipogonadismo en primario o secundario una vez que confirmas la testosterona baja.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: ginecomastia',
      cards: [
        { title: 'Reconocer', tag: 'Glándula, grasa o cáncer', kind: 'key', items: [
          { t: 'Disco ≥ 2 cm = glándula', d: 'Sin disco: lipomastia',
            say: 'Cerremos con las reglas de oro. La ginecomastia es glándula: un disco de dos centímetros o más, centrado bajo el pezón. Sin disco, es grasa.' },
          { t: 'Dura, excéntrica, fija: biopsia', d: 'Cáncer de mama masculino',
            say: 'Una masa dura, excéntrica o fija, con retracción o secreción con sangre, se estudia como un cáncer de mama, con imagen y biopsia.' },
          { t: 'Examen testicular siempre', d: 'Leydig o tumor germinal',
            say: 'Y el testículo se examina siempre, porque un tumor puede debutar con una ginecomastia.' },
        ] },
        { title: 'Conducta', tag: 'Lo que se pregunta', kind: 'alert', items: [
          { t: 'Púber sano: tranquilizar', d: 'Control a los 6 meses',
            say: 'El púber con examen normal no se estudia: se tranquiliza y se controla a los seis meses.' },
          { t: 'Espironolactona → eplerenona', d: 'Antes de 12 meses',
            say: 'La farmacológica se resuelve cambiando el fármaco, como la espironolactona por eplerenona, antes de que el tejido se fibrose.' },
          { t: 'Patológica: estudiar y derivar', d: 'Hepático, creatinina, TSH y hormonas',
            say: 'La patológica se estudia con perfil hepático, creatinina, TSH, testosterona, LH, FSH, estradiol y beta-hCG, y se deriva. Si te llevas una sola idea de hoy: ante una mama aumentada en un hombre, decide primero si es glándula, grasa o cáncer, y después examina los testículos. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Ginecomastia en atención primaria',
    root: N('start', 'Mama aumentada en un varón', 'Mamas, axilas y testículos',
      'Un hombre consulta por una mama aumentada. Examinas las dos mamas, las axilas y los testículos, y te haces la primera pregunta: ¿hay un disco?',
      ['Sin disco, solo grasa', N('ok', 'Seudoginecomastia', 'Lipomastia del obeso',
        'Si en la maniobra en pinza no encuentras un disco, es grasa: una seudoginecomastia, propia de la obesidad.')],
      ['Masa dura o masa testicular', N('alert', 'Banderas rojas', 'Biopsia o β-hCG, AFP y eco; urgente',
        'Si la masa es dura, excéntrica o fija, o si palpas una masa testicular, son banderas rojas. Para la mama, mamografía o ecografía y biopsia; para el testículo, beta-hCG, alfafetoproteína y ecografía. Y derivas con urgencia.')],
      ['Disco blando y centrado', N('q', '¿Púber normal o fármaco?', 'Definir el tipo',
        'Si el disco es blando y centrado, defines si es fisiológica, farmacológica o patológica.',
        ['Púber con examen normal', N('ok', 'Puberal', 'Tranquilizar; control a los 6 meses',
          'Si es un púber con testículos normales y sin fármacos, es la ginecomastia puberal. Tranquilizas y controlas a los seis meses, sin exámenes.')],
        ['Fármaco causante', N('do', 'Farmacológica', 'Suspender o cambiar el fármaco',
          'Si hay un fármaco causante, lo suspendes o lo cambias, como la espironolactona por eplerenona, antes de doce meses.',
          ['Persiste fibrosa', N('refer', 'Cirugía', 'Mastectomía subcutánea',
            'Si persiste fibrosa por más de uno a dos años, o tiene un impacto psicológico importante, derivas a cirugía.')],
        )],
        ['Adulto sin causa, rápida o > 5 cm', N('do', 'Estudio', 'Hepático, creatinina, TSH y hormonas',
          'Si es un adulto sin causa, crece rápido o mide más de cinco centímetros, pides perfil hepático, creatinina y TSH, más testosterona, LH, FSH, estradiol y beta-hCG.',
          ['Alterado o sin causa', N('refer', 'Endocrinología', 'Según el patrón hormonal',
            'Si el estudio sale alterado o no aclara la causa, derivas a endocrinología.')],
        )],
      )],
    ),
  },
};
