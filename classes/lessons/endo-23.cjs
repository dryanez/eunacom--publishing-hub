// Clase 7.23 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_endocrinologia.cjs (endo-23).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'endo-23',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Tropinas que no suben, y la regla que salva vidas: cortisol antes que tiroides',
      say: 'Bienvenidos. Venimos de la acromegalia, un exceso de hormona hipofisaria. Hoy vemos lo contrario: el hipopituitarismo, cuando la hipófisis deja de producir, y su causa más clásica en el examen, el síndrome de Sheehan. El EUNACOM insiste en dos ideas: cómo lo reconoces en el laboratorio, y en qué orden reemplazas las hormonas. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Síndrome de Sheehan: una glándula grande con poca sangre',
      nodes: [
        { id: 'emb', col: 0, row: 0, k: 'cause', t: 'Embarazo', s: 'La hipófisis duplica su tamaño' },
        { id: 'vas', col: 1, row: 0, k: 'mech', t: 'Sin más irrigación', s: 'Sistema portal de baja presión' },
        { id: 'hem', col: 0, row: 2, k: 'cause', t: 'Hemorragia obstétrica grave', s: 'Inercia, rotura uterina, DPPNI' },
        { id: 'sho', col: 1, row: 2, k: 'mech', t: 'Shock hipovolémico', s: 'Hipotensión severa sostenida' },
        { id: 'nec', col: 2, row: 1, k: 'effect', t: 'Necrosis adenohipofisaria', s: 'Más del 75–90 % de la glándula' },
        { id: 'pan', col: 3, row: 1, k: 'alert', t: 'Panhipopituitarismo', s: 'Caen todas las tropinas' },
      ],
      edges: [
        { from: 'emb', to: 'vas' },
        { from: 'hem', to: 'sho' },
        { from: 'vas', to: 'nec', label: 'vulnerable' },
        { from: 'sho', to: 'nec', label: 'isquemia' },
        { from: 'nec', to: 'pan' },
      ],
      steps: [
        { show: ['emb'], note: 'Hiperplasia de lactotropos',
          say: 'Primero, una definición. Hipopituitarismo es el déficit de una o más hormonas de la hipófisis; cuando caen todas, se llama panhipopituitarismo. Y para entender el Sheehan, partamos por el embarazo: los lactotropos se multiplican, preparando la lactancia, y la adenohipófisis llega a duplicar su tamaño.' },
        { show: ['vas'], note: 'Crece la glándula, no la irrigación',
          say: 'El problema es que la irrigación no crece al mismo ritmo. La hipófisis depende del sistema portal hipotálamo hipofisario, que es de baja presión. Al final del embarazo tienes una glándula grande, con una irrigación justa.' },
        { show: ['hem', 'sho'], note: 'El gatillo: sangrado masivo en el parto',
          say: 'Ahora agrega el gatillo: una hemorragia obstétrica grave en el parto o el puerperio inmediato, por inercia uterina, rotura uterina o desprendimiento prematuro de placenta. La paciente cae en shock hipovolémico, con hipotensión severa y sostenida.' },
        { show: ['nec'], note: 'Vasoespasmo, trombosis y necrosis',
          say: 'Esa glándula vulnerable sufre vasoespasmo, trombosis y necrosis isquémica. Se pierde más del setenta y cinco a noventa por ciento de la adenohipófisis.' },
        { show: ['pan'], note: 'Por eso Sheehan es la causa clásica',
          say: 'Y el resultado es un panhipopituitarismo: caen todas las tropinas a la vez. Por eso, cuando el enunciado parte con una hemorragia del parto, tu cabeza ya tiene que estar en la hipófisis.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Clínica',
      title: 'La secuencia después del parto',
      nodes: [
        { id: 'lac', col: 0, row: 1, k: 'alert', t: 'Fracaso de la lactancia', s: 'Agalactia: el síntoma más precoz' },
        { id: 'ame', col: 1, row: 1, k: 'effect', t: 'Amenorrea persistente', s: 'Y pérdida de vello axilar y pubiano' },
        { id: 'hip', col: 2, row: 1, k: 'effect', t: 'Hipotiroidismo secundario', s: 'Astenia, frío, piel seca cérea' },
        { id: 'adr', col: 3, row: 1, k: 'risk', t: 'Déficit corticotropo', s: 'Hipotensión, hiponatremia, hipoglicemia' },
      ],
      edges: [
        { from: 'lac', to: 'ame', label: 'luego' },
        { from: 'ame', to: 'hip' },
        { from: 'hip', to: 'adr' },
      ],
      steps: [
        { show: ['lac'], note: 'Cae la prolactina: no hay leche',
          say: 'Veamos cómo se presenta, porque la secuencia es muy lógica si recuerdas el mecanismo. Lo primero que falla es lo que más creció: los lactotropos. La prolactina se desploma y la madre no logra amamantar, no tiene leche. Ese fracaso completo de la lactancia es el síntoma más precoz y el más característico.' },
        { show: ['ame'], note: 'Caen LH, FSH y andrógenos suprarrenales',
          say: 'Después, la regla no vuelve nunca más después del puerperio: amenorrea secundaria persistente, por falta de gonadotropinas. Y se pierde el vello axilar y pubiano, porque también faltan los andrógenos suprarrenales.' },
        { show: ['hip'], note: 'Cae la TSH',
          say: 'Luego aparece el hipotiroidismo secundario: astenia profunda, intolerancia al frío, piel seca y de aspecto céreo, y letargia.' },
        { show: ['adr'], note: 'Cae la ACTH: lo más peligroso',
          say: 'Y lo más peligroso, el déficit de ACTH: mareo al pararse, hipotensión, hiponatremia y crisis de hipoglicemia. Fíjate en la piel: es pálida, no pigmentada, porque la ACTH está baja. Esa diferencia con la enfermedad de Addison se pregunta.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Laboratorio',
      title: 'El sello bioquímico: tropinas que no suben',
      cards: [
        { title: 'La regla', tag: 'Falla central', kind: 'key', items: [
          { t: 'Hormona periférica baja', d: 'Con tropina baja o inapropiadamente normal',
            say: 'Pasemos al laboratorio, y aquí está la clave de todo el tema. Cuando falla una glándula periférica, la hipófisis intenta compensar y su tropina sube mucho. En el hipopituitarismo la hipófisis es la que falla: la hormona periférica está baja, y la tropina está baja o, lo que más confunde, normal. Una tropina normal con una hormona baja es inapropiada: debería estar alta.' },
        ] },
        { title: 'Eje por eje', tag: 'Tres pares', kind: 'criteria', items: [
          { t: 'Cortisol bajo + ACTH baja o normal', d: 'En Addison la ACTH está muy alta',
            say: 'En el eje suprarrenal: cortisol matinal bajo con ACTH baja o normal. En la enfermedad de Addison, en cambio, la ACTH está muy alta.' },
          { t: 'T4 libre baja + TSH baja o normal', d: 'En el primario la TSH está muy alta',
            say: 'En el tiroideo: T cuatro libre baja con TSH baja o normal. En el hipotiroidismo primario, la TSH estaría muy elevada.' },
          { t: 'Estradiol o testosterona bajos', d: 'Con FSH y LH bajas o normales',
            say: 'Y en el gonadal: estradiol bajo en la mujer, o testosterona baja en el hombre, con FSH y LH bajas o normales. En la menopausia precoz estarían muy altas.' },
        ] },
        { title: 'Imagen', tag: 'Fase tardía', kind: 'normal', items: [
          { t: 'Silla turca vacía', d: 'Fosa ocupada por líquido cefalorraquídeo',
            say: 'Y en la imagen: en las fases tardías del Sheehan, la resonancia muestra la silla turca vacía: mira esta imagen. La fosa hipofisaria queda llena de líquido cefalorraquídeo, con una lámina atrófica de glándula pegada al piso.',
            photo: { src: 'biblioteca/05_endocrinologia/endo-23/01_rm_silla_turca_vacia__nelson_p4815.jpg', label: 'Silla turca vacía', at: 'mira esta imagen', credit: 'Nelson 22.ª ed., Fig. 645.5A' } },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento',
      title: 'La regla de oro: cortisol antes que tiroides',
      nodes: [
        { id: 'pan', col: 0, row: 1, k: 'start', t: 'Panhipopituitarismo', s: 'Cortisol y T4 libre bajos' },
        { id: 'lt4', col: 1, row: 0, k: 'trap', t: 'Levotiroxina primero', s: 'El error que mata' },
        { id: 'met', col: 2, row: 0, k: 'mech', t: 'Sube el metabolismo', s: 'Acelera el aclaramiento de cortisol' },
        { id: 'cri', col: 3, row: 0, k: 'alert', t: 'Crisis suprarrenal', s: 'Shock en 24–48 horas' },
        { id: 'hc', col: 1, row: 2, k: 'good', t: '1. Hidrocortisona', s: '15–20 mg/día oral' },
        { id: 'lev', col: 2, row: 2, k: 'good', t: '2. Levotiroxina', s: '50–100 mcg/día, 24–48 h después' },
        { id: 'sex', col: 3, row: 2, k: 'good', t: '3. Estrógenos o andrógenos', s: 'Según edad y deseo de fertilidad' },
      ],
      edges: [
        { from: 'pan', to: 'lt4', label: 'error' },
        { from: 'lt4', to: 'met' },
        { from: 'met', to: 'cri' },
        { from: 'pan', to: 'hc', label: 'correcto' },
        { from: 'hc', to: 'lev' },
        { from: 'lev', to: 'sex' },
      ],
      steps: [
        { show: ['pan'], note: 'Le faltan varias hormonas a la vez',
          say: 'Ahora el tratamiento, que es reemplazar lo que falta. Pero cuando faltan cortisol y hormona tiroidea al mismo tiempo, el orden importa, y mucho. Esta es la regla de seguridad que más se pregunta del tema.' },
        { show: ['lt4', 'met'], note: 'La T4 aumenta el consumo de cortisol',
          say: 'Mira qué pasa si partes por la levotiroxina. La hormona tiroidea aumenta el metabolismo basal, y con eso el hígado elimina más rápido el poco cortisol que le queda a la paciente.' },
        { show: ['cri'], note: 'Crisis suprarrenal aguda',
          say: 'El resultado es una crisis suprarrenal aguda, fulminante, con shock circulatorio en menos de veinticuatro a cuarenta y ocho horas. Por tratar el cansancio, la llevaste a la unidad de cuidados intensivos.' },
        { show: ['hc'], note: 'Siempre se parte con el glucocorticoide',
          say: 'Por eso la secuencia correcta parte siempre con el glucocorticoide: hidrocortisona oral, quince a veinte miligramos al día.' },
        { show: ['lev'], note: 'Recién con el cortisol asegurado',
          say: 'Recién después de veinticuatro a cuarenta y ocho horas de un buen reemplazo de cortisol, se inicia la levotiroxina, cincuenta a cien microgramos al día.' },
        { show: ['sex'], note: 'Al final, el eje gonadal',
          say: 'Y al final se agregan estrógenos o andrógenos, según la edad y el deseo de fertilidad. Cortisol, tiroides y después gónadas: ese es el orden.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Seguimiento',
      title: 'Cómo se controla el reemplazo',
      cards: [
        { title: 'Levotiroxina', tag: 'La TSH no sirve', kind: 'alert', items: [
          { t: 'Titular con T4 libre', d: 'En el tercio medio-alto de lo normal',
            say: 'Y la segunda regla que se pregunta: cómo ajustas la levotiroxina. En el hipotiroidismo primario usas la TSH. Aquí no sirve, porque la hipófisis no la fabrica y se quedará baja siempre, con cualquier dosis. La dosis se ajusta solo con la T cuatro libre, buscando dejarla en el tercio medio alto de lo normal.' },
        ] },
        { title: 'Hidrocortisona', tag: 'Por clínica', kind: 'pharma', items: [
          { t: 'Peso, presión arterial y energía', d: 'Ajuste según el bienestar',
            say: 'La hidrocortisona se ajusta por la clínica: el bienestar, el peso y la presión arterial.' },
        ] },
        { title: 'Control general', tag: 'Largo plazo', kind: 'normal', items: [
          { t: 'Densitometría ósea', d: 'Y ajuste periódico de dosis',
            say: 'En el largo plazo se pide densitometría ósea y se revisan las dosis en forma periódica.' },
          { t: 'No es GES directo', d: 'Garantías por patología asociada',
            say: 'Y como dato administrativo, no es GES directo: las garantías vienen por la patología gineco obstétrica previa o por la insuficiencia hormonal crónica.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Eje gonadal en el hombre',
      title: 'Hipogonadismo masculino: ¿falla el testículo o la hipófisis?',
      nodes: [
        { id: 'sus', col: 0, row: 2, k: 'start', t: 'Sospecha clínica', s: 'Libido baja, testículos pequeños, ginecomastia' },
        { id: 'tes', col: 1, row: 2, k: 'q', t: 'Testosterona total matinal', s: 'Baja en dos mediciones' },
        { id: 'lh', col: 2, row: 2, k: 'q', t: 'LH y FSH', s: 'Separan primario de secundario' },
        { id: 'pri', col: 3, row: 0, k: 'effect', t: 'LH y FSH altas: primario', s: 'Falla el testículo' },
        { id: 'ca1', col: 4, row: 0, k: 'cause', t: 'Klinefelter, orquitis, criptorquidia', s: 'Quimio o radioterapia, trauma' },
        { id: 'sec', col: 3, row: 3, k: 'effect', t: 'LH y FSH bajas o normales: secundario', s: 'Falla la hipófisis o el hipotálamo' },
        { id: 'ca2', col: 4, row: 2, k: 'cause', t: 'Prolactinoma, tumor selar, opioides', s: 'Hemocromatosis, Kallmann, obesidad' },
        { id: 'nxt', col: 4, row: 4, k: 'refer', t: 'Prolactina, ferritina y RM selar', s: 'Si prolactina alta o más déficits' },
      ],
      edges: [
        { from: 'sus', to: 'tes' }, { from: 'tes', to: 'lh' },
        { from: 'lh', to: 'pri', label: 'altas' }, { from: 'pri', to: 'ca1' },
        { from: 'lh', to: 'sec', label: 'bajas o normales' },
        { from: 'sec', to: 'ca2' }, { from: 'sec', to: 'nxt' },
      ],
      steps: [
        { show: ['sus'], note: 'Se sospecha por la clínica',
          say: 'Antes de cerrar la clase, un contraste que sigue la misma lógica del eje: el hipogonadismo masculino. Lo sospechas ante libido baja, menos erecciones matinales, disfunción eréctil, ginecomastia, pérdida de vello, testículos pequeños o blandos, infertilidad u osteoporosis en un hombre. Si empieza antes de la pubertad, hay retraso puberal y proporciones eunucoides.' },
        { show: ['tes'], note: 'Primero la testosterona de la mañana',
          say: 'El diagnóstico parte con la testosterona total medida en la mañana, en ayunas. Tiene que estar baja en al menos dos mediciones, bajo trescientos nanogramos por decilitro aproximadamente.' },
        { show: ['lh'], note: 'Luego LH y FSH',
          say: 'Y después se piden LH y FSH. Es el mismo razonamiento de siempre: una hormona periférica baja, y la tropina te dice dónde está la falla.' },
        { show: ['pri', 'ca1'], note: 'Tropinas altas: el testículo',
          say: 'Si la LH y la FSH están altas, es un hipogonadismo primario: el testículo falla y la hipófisis lo empuja. La causa genética más frecuente es el síndrome de Klinefelter, con testículos pequeños y firmes, talla alta, ginecomastia y azoospermia, que se confirma con un cariotipo. También la orquitis urliana, la criptorquidia, la quimioterapia, la radioterapia y el trauma o la torsión testicular.' },
        { show: ['sec', 'ca2'], note: 'Tropinas bajas o normales: la hipófisis',
          say: 'Si la LH y la FSH están bajas, o inapropiadamente normales, es un hipogonadismo secundario. Aquí caben el prolactinoma, los tumores selares y el hipopituitarismo, la hemocromatosis, el síndrome de Kallmann, que cursa con anosmia, el uso de opioides, corticoides o anabolizantes, la obesidad severa y la diabetes mal controlada.' },
        { show: ['nxt'], note: 'En el secundario, siempre buscar la causa',
          say: 'En el secundario siempre mides prolactina y ferritina, y pides una resonancia de la silla turca si la prolactina está alta, si hay otros déficits hipofisarios o si hay síntomas de masa selar.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Eje gonadal en el hombre',
      title: 'Testosterona: cuándo, a quién no y cómo se controla',
      cards: [
        { title: 'Tratamiento', tag: 'Primero la causa', kind: 'pharma', items: [
          { t: 'Tratar la causa primero', d: 'Opioides, anabolizantes, peso, cabergolina',
            say: 'Primero se trata la causa: suspender opioides o anabolizantes, bajar de peso, y cabergolina si es un prolactinoma.' },
          { t: 'Testosterona solo con hipogonadismo confirmado', d: 'Gel diario o inyección intramuscular',
            say: 'La terapia con testosterona se indica solo cuando el hipogonadismo está confirmado por la clínica y por el laboratorio. Se usa en gel diario o en inyecciones intramusculares, el undecanoato cada diez a catorce semanas, o el enantato cada dos a tres semanas.' },
        ] },
        { title: 'Contraindicaciones', tag: 'Se preguntan', kind: 'alert', items: [
          { t: 'Cáncer de próstata o mama, APE sobre 4 sin estudio', d: 'Nódulo prostático',
            say: 'No se da con cáncer de próstata o de mama, ni con un nódulo prostático o un antígeno prostático sobre cuatro sin estudio urológico.' },
          { t: 'Hematocrito sobre 50 %, apnea grave, insuficiencia cardíaca', d: 'Descompensada o sin tratar',
            say: 'Tampoco con hematocrito sobre cincuenta por ciento, apnea del sueño grave sin tratar o insuficiencia cardíaca descompensada.' },
          { t: 'Si desea fertilidad: no', d: 'Suprime la espermatogénesis',
            say: 'Y la contraindicación que más se olvida: si el paciente desea fertilidad a corto plazo. La testosterona suprime la espermatogénesis; en el hipogonadismo secundario eso se maneja con gonadotropinas, por el especialista.' },
        ] },
        { title: 'Seguimiento', tag: '3 a 6 meses, luego anual', kind: 'criteria', items: [
          { t: 'Testosterona, hematocrito y APE', d: 'Hematocrito sobre 54 %: reducir o suspender',
            say: 'El seguimiento es a los tres a seis meses y después cada año: testosterona, que debe quedar en el rango medio normal, hematocrito, que obliga a reducir o suspender si pasa de cincuenta y cuatro por ciento, y antígeno prostático con tacto rectal desde los cuarenta años.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'La hipófisis que se infarta en el parto',
      images: [
        { src: 'animaciones/endo-23/A1_sheehan.mp4', label: 'Sheehan', credit: 'Ilustración: Servier Medical Art, CC BY 4.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Primero falla la leche',
          say: 'En el embarazo la hipófisis crece. Con una hemorragia grave del parto cae la presión, y la adenohipófisis se necrosa. Lo primero que falla es la prolactina: no hay leche. Después la amenorrea, el hipotiroidismo y la insuficiencia suprarrenal. Se trata primero con cortisol y recién después con levotiroxina.' },
      ],
    },
    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol de decisión, desde la sospecha hasta el reemplazo.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Falla primaria o falla central',
      head: ['Eje', 'Falla primaria', 'Hipopituitarismo', 'Cómo se controla'],
      rows: [
        { cells: ['Tiroideo', 'T4L baja, TSH muy alta', 'T4L baja, TSH baja o normal', 'Levotiroxina según T4 libre'],
          say: 'Repasemos el contraste que más se pregunta. Eje tiroideo: en la falla primaria, T cuatro libre baja con TSH muy alta; en el hipopituitarismo, TSH baja o normal. Y la levotiroxina se titula con T cuatro libre.' },
        { cells: ['Suprarrenal', 'Cortisol bajo, ACTH muy alta, hiperpigmentación', 'Cortisol bajo, ACTH baja o normal, piel pálida', 'Hidrocortisona por clínica'],
          say: 'Eje suprarrenal: el Addison tiene la ACTH muy alta y la piel pigmentada; el hipopituitarismo, ACTH baja y piel pálida. La hidrocortisona se ajusta por clínica.' },
        { cells: ['Gonadal', 'Estradiol bajo, FSH y LH muy altas', 'Estradiol bajo, FSH y LH bajas o normales', 'Síntomas y fertilidad'],
          say: 'Eje gonadal: en la falla ovárica, FSH y LH muy altas; en la falla central, bajas o normales. Aquí se controlan los síntomas y la fertilidad.' },
        { cells: ['Reemplazo', 'Levotiroxina primero', 'Hidrocortisona primero', 'Error: crisis suprarrenal'],
          say: 'Y el orden: en el hipopituitarismo, hidrocortisona primero. Partir por la levotiroxina es la respuesta incorrecta que precipita una crisis suprarrenal.' },
        { cells: ['Hombre', 'Testosterona baja, LH y FSH altas: Klinefelter', 'Testosterona baja, LH y FSH bajas: prolactina y RM', 'Testosterona si no desea fertilidad'],
          say: 'Y en el hombre con testosterona baja, el mismo contraste: si la LH y la FSH están altas, el testículo, como en el Klinefelter; si están bajas, la hipófisis, y mides prolactina y pides resonancia. La testosterona queda para quien no busca fertilidad.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 36 años con astenia invalidante, intolerancia al frío y piel seca. Hace 2 años, parto complicado con hemorragia por atonía uterina, politransfusión e histerectomía. Nunca logró amamantar y no ha vuelto a menstruar. Pálida, cérea, PA 90/60 mmHg, sin vello axilar ni pubiano. T4L 0,4 ng/dL, TSH 1,1 mUI/L, cortisol 1,9 mcg/dL, ACTH 6 pg/mL, FSH 1,8 UI/L.',
      question: '¿Cuál es la conducta terapéutica inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Levotiroxina 100 mcg/día y controlar TSH en 6 semanas' },
        { letter: 'B', text: 'Hidrocortisona oral y, 24–48 horas después, levotiroxina' },
        { letter: 'C', text: 'Estrógenos y progestágenos para recuperar las menstruaciones' },
        { letter: 'D', text: 'Levotiroxina e hidrocortisona el mismo día, luego ajustar según TSH' },
        { letter: 'E', text: 'Cabergolina para recuperar la lactancia' },
      ],
      correct: 'B',
      explanation: 'Síndrome de Sheehan: hemorragia posparto, agalactia, amenorrea y pérdida de vello, con hormonas periféricas bajas y tropinas bajas o inapropiadamente normales. Se inicia hidrocortisona y, 24–48 h después, levotiroxina, titulada con T4 libre. Partir con levotiroxina puede precipitar una crisis suprarrenal.',
      say: {
        stem: 'Vamos al caso. Mujer de treinta y seis años con astenia invalidante, intolerancia al frío y piel seca. Hace dos años tuvo un parto con hemorragia por atonía uterina, con transfusiones e histerectomía. Nunca pudo amamantar y no ha vuelto a menstruar. Está pálida, cérea, con presión de noventa sobre sesenta y sin vello axilar ni pubiano. T cuatro libre baja con TSH normal, cortisol bajo con ACTH baja, y FSH baja.',
        question: '¿Cuál es la conducta terapéutica inicial más adecuada?',
        options: 'Las alternativas: levotiroxina y controlar TSH, hidrocortisona y después levotiroxina, estrógenos y progestágenos, las dos hormonas el mismo día ajustando por TSH, o cabergolina. Piénsalo.',
        answer: 'Es la B. Es un Sheehan de libro: hemorragia, agalactia, amenorrea y hormonas bajas con tropinas que no suben. La trampa es la A, que tiene dos errores: parte con levotiroxina, lo que puede precipitar una crisis suprarrenal, y controla con TSH, que en la falla central no sirve. La D también cae por la TSH.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 109',
      stem: 'Una paciente de 28 años, se realiza una histerectomía postparto, por una inercia uterina. Usted la atiende 6 meses después, sin lactancia y permaneciendo en amenorrea. Presenta un cuadro de astenia, adinamia y malestar general, asociada a debilidad. Tiene piel seca, con cabello quebradizo, palidez y su presión arterial es de 90/60 mmHg.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Tiroiditis postparto' },
        { letter: 'B', text: 'Panhipopituitarismo' },
        { letter: 'C', text: 'Depresión postparto' },
        { letter: 'D', text: 'Insuficiencia ovárica' },
        { letter: 'E', text: 'Hipotiroidismo' },
      ],
      correct: 'B',
      explanation: 'Síndrome de Sheehan clásico: hemorragia obstétrica que obliga a histerectomía, seguida de ausencia de lactancia, amenorrea, astenia, piel seca, palidez e hipotensión. Es un panhipopituitarismo.',
      say: {
        stem: 'Ahora las preguntas reales. Esta es del EUNACOM de julio de dos mil quince. Paciente de veintiocho años con histerectomía posparto por inercia uterina. Seis meses después no ha tenido lactancia y sigue en amenorrea. Tiene astenia, adinamia y debilidad, piel seca, pelo quebradizo, palidez, y presión de noventa sobre sesenta.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: tiroiditis posparto, panhipopituitarismo, depresión posparto, insuficiencia ovárica, o hipotiroidismo. Piénsalo.',
        answer: 'Es la B, panhipopituitarismo por síndrome de Sheehan. Una histerectomía por inercia uterina te dice hemorragia grave, y sin lactancia más amenorrea te dice hipófisis. El distractor tentador es el hipotiroidismo, porque la piel seca y el pelo quebradizo encajan, pero explica solo una parte: no explica la agalactia, la amenorrea ni la hipotensión. Aquí fallan todos los ejes.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 111',
      stem: 'Un paciente consulta por disminución del deseo sexual y de las erecciones. Además, presenta astenia y debilidad, que ha ido aumentando, desde hace algunos meses. También, refiere haber chocado con un mueble, por no haberlo visto, resultado con lesiones. Al examen físico se aprecia pálido, con disminución del vello corporal, tiene edema de extremidades inferiores y disminución de la visión en la zona temporal del campo visual.',
      question: '¿Cuál es el examen de elección para iniciar el estudio de este paciente?',
      options: [
        { letter: 'A', text: 'Radiografía de silla turca' },
        { letter: 'B', text: 'Prolactinemia' },
        { letter: 'C', text: 'Resonancia magnética de silla turca' },
        { letter: 'D', text: 'Fondo de ojo' },
        { letter: 'E', text: 'TAC de cerebro' },
      ],
      correct: 'C',
      explanation: 'Tumor hipofisario clásico, con compresión del quiasma e hipopituitarismo. Se estudia con resonancia magnética de silla turca.',
      say: {
        stem: 'La segunda, del EUNACOM de diciembre de dos mil dieciocho. Un hombre con baja del deseo sexual y de las erecciones, astenia y debilidad de meses. Cuenta que chocó con un mueble porque no lo vio. Está pálido, con menos vello corporal, edema de piernas, y pérdida de la visión temporal.',
        question: '¿Cuál es el examen de elección para iniciar el estudio?',
        options: 'Las opciones: radiografía de silla turca, prolactinemia, resonancia de silla turca, fondo de ojo, o TAC de cerebro. Piénsalo.',
        answer: 'Es la C, resonancia de silla turca. Aquí el hipopituitarismo no viene de un parto, sino de un tumor que comprime: hipogonadismo, astenia, palidez y pérdida de vello, más una hemianopsia que delata la masa sobre el quiasma. La prolactinemia es tentadora por la disfunción eréctil, pero con un defecto del campo visual lo que necesitas es ver la masa. Y la radiografía de silla turca ya no se usa.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2016 · Pregunta 171",
      "stem": "Un paciente de 32 años consulta por disfunción sexual asociada a disminución del vello facial. Al examen físico presenta disminución del vello corporal y disminución bilateral del tamaño testicular.",
      "question": "¿Cuál es el estudio más adecuado para proseguir el enfrentamiento de este paciente?",
      "options": [
        {
          "letter": "A",
          "text": "Prolactina"
        },
        {
          "letter": "B",
          "text": "Testosterona y LH"
        },
        {
          "letter": "C",
          "text": "Espermiograma y FSH"
        },
        {
          "letter": "D",
          "text": "Ecografía testicular"
        },
        {
          "letter": "E",
          "text": "HCG y estradiol"
        }
      ],
      "correct": "B",
      "explanation": "Disfunción sexual, menos vello y testículos pequeños son hipogonadismo clínico. Se confirma con testosterona total matinal y se mide LH para clasificarlo: LH alta indica falla testicular primaria (ej. Klinefelter); LH baja o normal indica causa hipotálamo-hipofisaria, que obliga a medir prolactina y a estudiar la silla turca.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil dieciséis. Un hombre de treinta y dos años tiene disfunción sexual, menos vello facial y corporal, y testículos pequeños.",
        "question": "¿Cuál es el estudio más adecuado para seguir el enfrentamiento?",
        "options": "Las opciones: prolactina, testosterona y LH, espermiograma y FSH, ecografía testicular, o HCG y estradiol. Piénsalo.",
        "answer": "Es la B. Es un hipogonadismo clínico: la testosterona lo confirma y la LH dice si es primario o central. La prolactina tienta, pero se pide después, si la LH no está elevada."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Sospecha y diagnóstico', tag: 'Falla central', kind: 'key', items: [
          { t: 'Hemorragia posparto + agalactia', d: 'Sheehan hasta demostrar lo contrario',
            say: 'Cerremos con las reglas de oro. Hemorragia del parto seguida de fracaso de la lactancia y amenorrea: síndrome de Sheehan.' },
          { t: 'Hormona baja + tropina baja o normal', d: 'Una tropina normal es inapropiada',
            say: 'El sello de laboratorio es la hormona periférica baja con una tropina baja o inapropiadamente normal. Si la tropina está muy alta, la falla es periférica.' },
          { t: 'Testosterona baja: LH y FSH dicen dónde', d: 'Altas: testículo; bajas: hipófisis',
            say: 'Lo mismo en el hombre: con testosterona baja, la LH y la FSH dicen dónde está la falla.' },
        ] },
        { title: 'Tratamiento', tag: 'Regla vital', kind: 'alert', items: [
          { t: 'Hidrocortisona antes que levotiroxina', d: 'Evita la crisis suprarrenal',
            say: 'Siempre hidrocortisona primero, y la levotiroxina veinticuatro a cuarenta y ocho horas después.' },
          { t: 'Levotiroxina según T4 libre', d: 'Nunca según TSH',
            say: 'Y la levotiroxina se ajusta con T cuatro libre, nunca con TSH. En la próxima clase terminamos la hipófisis con su parte posterior: diabetes insípida y SIADH. Si te llevas una sola idea de hoy: en el hipopituitarismo, cortisol antes que tiroides. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Hipopituitarismo: reconocer y reemplazar en orden',
    root: N('start', 'Sospecha de hipopituitarismo', 'Astenia, palidez, hipotensión, amenorrea',
      'Paciente con astenia intensa, palidez cérea, hipotensión y amenorrea, sobre todo si hubo una hemorragia en el parto y fracasó la lactancia.',
      ['', N('q', 'Hormonas periféricas bajas', '¿Cómo están las tropinas?',
        'Se miden cortisol, T cuatro libre y estradiol o testosterona, junto con sus tropinas. La pregunta es cómo responde la hipófisis.',
        ['Muy altas', N('ok', 'Falla primaria', 'Addison, hipotiroidismo primario, falla ovárica',
          'Si las tropinas están muy altas, la hipófisis funciona y la falla es de la glándula periférica: Addison, hipotiroidismo primario o falla ovárica.')],
        ['Bajas o normales', N('alert', 'Hipopituitarismo', 'Falla central',
          'Si están bajas o inapropiadamente normales, la falla es central: hipopituitarismo.',
          ['Imagen', N('refer', 'RM de silla turca', 'Masa o silla turca vacía',
            'La resonancia muestra la causa: una masa que comprime, o la silla turca vacía en un Sheehan tardío.')],
          ['Tratar', N('do', 'Hidrocortisona primero', '15–20 mg/día oral',
            'El reemplazo parte siempre con hidrocortisona oral, para no precipitar una crisis suprarrenal.',
            ['24–48 h', N('do', 'Levotiroxina', 'Titular con T4 libre, nunca TSH',
              'Veinticuatro a cuarenta y ocho horas después se agrega levotiroxina, ajustada con la T cuatro libre, y al final estrógenos o andrógenos según edad y fertilidad.')])])])]),
  },
};
