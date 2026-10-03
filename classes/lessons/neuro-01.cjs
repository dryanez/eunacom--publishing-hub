// Clase 10.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neurologia.cjs (neuro-01).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'neuro-01',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Descartar sangre, mirar el reloj y reperfundir: trombolisis, trombectomía y UTAC',
      say: 'Bienvenidos. Abrimos neurología con la urgencia neurológica más importante: el ataque cerebrovascular isquémico, una garantía GES y la principal causa de discapacidad adquirida en el adulto. Es un tema que se pregunta todos los años, y casi todas las preguntas se ordenan con tres ideas: descartar sangre con un TAC sin contraste, mirar el reloj, y cuidar la presión arterial. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Tiempo es cerebro: núcleo y penumbra',
      nodes: [
        { id: 'occ', col: 0, row: 1, k: 'cause', t: 'Oclusión arterial aguda', s: 'Un trombo o un émbolo' },
        { id: 'cor', col: 1, row: 0, k: 'risk', t: 'Núcleo isquémico', s: 'Flujo < 10 mL/100 g/min' },
        { id: 'nec', col: 2, row: 0, k: 'alert', t: 'Necrosis en minutos', s: 'Irreversible' },
        { id: 'pen', col: 1, row: 2, k: 'mech', t: 'Penumbra isquémica', s: 'Flujo 10–20 por colaterales' },
        { id: 'rep', col: 2, row: 2, k: 'good', t: 'Reperfusión rápida', s: 'Se rescata la penumbra' },
        { id: 'exp', col: 3, row: 1, k: 'risk', t: 'El núcleo crece', s: '1,9 millones de neuronas por minuto' },
      ],
      edges: [
        { from: 'occ', to: 'cor' }, { from: 'cor', to: 'nec' }, { from: 'occ', to: 'pen' },
        { from: 'pen', to: 'rep', label: 'si llegas a tiempo' }, { from: 'pen', to: 'exp', label: 'si no' },
      ],
      steps: [
        { show: ['occ'], note: 'Todo parte de una arteria que se tapa',
          say: 'Empecemos por el mecanismo, porque explica toda la urgencia de este tema. Una arteria cerebral se tapa de golpe, por un trombo o por un émbolo, y el tejido que irriga queda sin flujo.' },
        { show: ['cor', 'nec'], note: 'El núcleo ya está perdido',
          say: 'En el centro se forma el núcleo isquémico, donde el flujo cae bajo diez mililitros por cada cien gramos por minuto. Ahí se acaba el ATP, falla la bomba de sodio y potasio, y las neuronas mueren en minutos. Ese tejido ya no se recupera.' },
        { show: ['pen'], note: 'La penumbra es lo que se puede salvar',
          say: 'Pero alrededor queda una zona distinta: la penumbra isquémica. Recibe algo de flujo por las colaterales, entre diez y veinte. Sus neuronas están silentes, no funcionan, pero siguen vivas. Por eso el déficit inicial puede ser mayor que el daño definitivo.' },
        { show: ['rep'], note: 'Toda la terapia apunta a la penumbra',
          say: 'Si reabres la arteria rápido, rescatas la penumbra. Todo lo que vamos a ver hoy, la trombolisis y la trombectomía, apunta a salvar esa zona.' },
        { show: ['exp'], note: 'Cada minuto cuenta',
          say: 'Y si no llegas a tiempo, el núcleo crece a costa de la penumbra. Se pierden cerca de un millón novecientas mil neuronas por minuto. De ahí la frase que tienes que recordar: tiempo es cerebro.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Etiología',
      title: 'Clasificación TOAST: ¿de dónde vino el trombo?',
      cards: [
        { title: 'Las más frecuentes', tag: 'Grandes causas', kind: 'key', items: [
          { t: 'Aterosclerosis de grandes vasos', d: 'Estenosis ≥ 50 % carotídea o intracraneal',
            say: 'La clasificación TOAST ordena las causas en cinco grupos. La primera es la aterosclerosis de grandes vasos: una estenosis de cincuenta por ciento o más, u oclusión, de la carótida interna o de los troncos intracraneales.' },
          { t: 'Cardioembolia', d: 'Fibrilación auricular, trombo post-IAM, prótesis',
            say: 'La segunda es la cardioembolia: el émbolo viene del corazón, por una fibrilación auricular, un trombo mural después de un infarto, una miocardiopatía dilatada o una prótesis valvular mecánica.' },
          { t: 'Pequeño vaso: infarto lacunar', d: '< 15 mm, por hipertensión y diabetes',
            say: 'La tercera es la oclusión de pequeño vaso, el infarto lacunar: infartos de menos de quince milímetros en los ganglios basales, la cápsula interna o el tronco, por el daño que la hipertensión y la diabetes hacen en las arterias perforantes.' },
        ] },
        { title: 'Otras', tag: 'Piensa en el joven', kind: 'alert', items: [
          { t: 'Otra etiología determinada', d: 'Disección, vasculitis, trombosis venosa, antifosfolípidos',
            say: 'La cuarta es otra etiología determinada. La más preguntada es la disección arterial, carotídea o vertebral, en el adulto joven después de un trauma cervical o una elongación brusca. También entran la vasculitis, la trombosis venosa cerebral y el síndrome antifosfolípidos.' },
          { t: 'Indeterminada o criptogénica', d: 'Sin causa tras el estudio',
            say: 'Y la quinta, la etiología indeterminada o criptogénica, cuando el estudio no encuentra la causa.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Territorios vasculares',
      title: 'Circulación anterior: dónde está la lesión',
      cards: [
        { title: 'Arteria cerebral media', tag: 'La más frecuente', kind: 'key', items: [
          { t: 'Hemiparesia faciobraquial contralateral', d: 'Cara y brazo más que pierna',
            say: 'Ahora, la clínica según el territorio, porque el examen te describe un paciente y te pregunta qué arteria es. La cerebral media da una hemiparesia y hemihipoestesia contralateral de predominio faciobraquial: cara y brazo más que pierna.' },
          { t: 'Mirada hacia el lado de la lesión', d: 'Desviación oculocefálica ipsilateral',
            say: 'Con desviación de la mirada hacia el lado de la lesión.' },
          { t: 'Afasia o negligencia', d: 'Dominante: afasia · no dominante: negligencia',
            say: 'Y la clave es la corteza. Si es el hemisferio dominante, afasia: de Broca, de Wernicke o global. Si es el no dominante, negligencia del hemiespacio y asomatognosia. Retén esto: la afasia te dice que la lesión es cortical.' },
        ] },
        { title: 'Arteria cerebral anterior', tag: 'Pierna > brazo', kind: 'criteria', items: [
          { t: 'Paresia crural contralateral', d: 'La pierna más que el brazo',
            say: 'La cerebral anterior es al revés: la paresia es crural, la pierna más que el brazo.' },
          { t: 'Lóbulo frontal', d: 'Abulia, incontinencia, apraxia de la marcha',
            say: 'Y como irriga el lóbulo frontal, da abulia, mutismo acinético, reflejos arcaicos, incontinencia urinaria de origen frontal, apraxia de la marcha y pérdida de la inhibición social.' },
        ] },
        { title: 'Arteria cerebral posterior', tag: 'Visión', kind: 'normal', items: [
          { t: 'Hemianopsia homónima contralateral', d: 'Con preservación macular',
            say: 'La cerebral posterior irriga el lóbulo occipital, así que su signo es visual: una hemianopsia homónima contralateral con preservación macular.' },
          { t: 'Alexia sin agrafia', d: 'Agnosia visual, amnesia anterógrada',
            say: 'Puede dar alexia sin agrafia, agnosia visual, desorientación topográfica, y amnesia anterógrada si compromete el hipocampo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Territorios vasculares',
      title: 'Circulación posterior y pequeño vaso',
      cards: [
        { title: 'Vertebrobasilar', tag: 'Síndrome cruzado', kind: 'alert', items: [
          { t: 'Par craneal ipsilateral + déficit contralateral', d: 'Síndrome cruzado o alterno',
            say: 'La circulación vertebrobasilar irriga el tronco y el cerebelo. Su sello es el síndrome cruzado: un par craneal afectado del mismo lado de la lesión, y una hemiparesia o hemihipoestesia del lado contrario.' },
          { t: 'Vértigo central, ataxia, diplopía', d: 'Disfagia, disartria, hasta coma',
            say: 'Se acompaña de vértigo central, ataxia severa, diplopía, disfagia y disartria, y la conciencia puede fluctuar hasta el coma.' },
        ] },
        { title: 'Infarto lacunar', tag: 'Síndromes puros', kind: 'key', items: [
          { t: 'Motor puro', d: 'Brazo posterior de la cápsula interna',
            say: 'Y el infarto lacunar, el de pequeño vaso, da síndromes puros. El más típico es la hemiparesia motora pura, por una laguna en el brazo posterior de la cápsula interna.' },
          { t: 'Sensitivo puro', d: 'Núcleo ventral posterolateral del tálamo',
            say: 'O un síndrome sensitivo puro, por una laguna en el tálamo. También existen la ataxia con hemiparesia y la disartria con mano torpe.' },
          { t: 'Sin afasia, hemianopsia ni negligencia', d: 'No compromete la corteza',
            say: 'Y fíjate en lo que no tiene, porque es lo que el examen usa para que lo reconozcas: no hay afasia, ni hemianopsia, ni negligencia. La laguna es profunda y no toca la corteza. Una hemiparesia pura, sin trastorno del lenguaje ni sensitivo, es lacunar.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico clínico',
      title: 'Reconocerlo y medir el déficit',
      cards: [
        { title: 'Prehospitalario', tag: 'Cincinnati · FAST', kind: 'criteria', items: [
          { t: 'Cara, brazo y habla', d: 'Asimetría facial, brazo que cae, habla anormal',
            say: 'Veamos cómo se reconoce. Fuera del hospital se usa la escala de Cincinnati, o FAST: asimetría facial, un brazo que cae al elevarlo, y el habla alterada, con disartria o afasia.' },
          { t: '1 signo: 72 % · 3 signos: 85 %', d: 'Probabilidad de ACV',
            say: 'Un solo signo ya da una probabilidad de ataque cerebrovascular de setenta y dos por ciento, y los tres, de ochenta y cinco.' },
        ] },
        { title: 'En urgencias', tag: 'Escala NIHSS', kind: 'key', items: [
          { t: 'NIHSS de 0 a 42 puntos', d: 'Cuantifica el déficit',
            say: 'En urgencias el déficit se cuantifica con la escala NIHSS, del Instituto Nacional de Salud de Estados Unidos, que va de cero a cuarenta y dos puntos. Evalúa conciencia, mirada, campos visuales, fuerza, sensibilidad, lenguaje y negligencia.' },
          { t: '< 5: menor · 5–15: moderado', d: 'Moderado: candidato a trombolisis',
            say: 'Bajo cinco es un ataque cerebrovascular menor. Entre cinco y quince es moderado, con mucha penumbra que salvar: el candidato prioritario a trombolisis.' },
          { t: '≥ 16: sospecha de gran vaso', d: '21–42: grave, riesgo de herniación',
            say: 'Con dieciséis o más, sospechas una oclusión de gran vaso, como la carótida terminal o el primer segmento de la cerebral media. Y sobre veintiuno es un infarto grave, con mortalidad sobre el cuarenta por ciento y riesgo de edema y herniación.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Neuroimagen de urgencia',
      title: 'El TAC sin contraste busca sangre',
      nodes: [
        { id: 'def', col: 0, row: 1, k: 'start', t: 'Déficit focal agudo', s: 'Emergencia tiempo-dependiente' },
        { id: 'tac', col: 1, row: 1, k: 'q', t: 'TAC sin contraste', s: 'Informado en ≤ 30 min' },
        { id: 'san', col: 2, row: 0, k: 'alert', t: 'Hay sangre', s: 'ACV hemorrágico' },
        { id: 'nor', col: 2, row: 2, k: 'good', t: 'TAC normal', s: 'Hasta 60–70 % al inicio' },
        { id: 'pre', col: 3, row: 2, k: 'effect', t: 'Signos precoces', s: 'ACM hiperdensa, ribete insular' },
        { id: 'ang', col: 3, row: 0, k: 'refer', t: 'AngioTAC si NIHSS ≥ 6', s: 'Buscar oclusión de gran vaso' },
        { id: 'trp', col: 1, row: 3, k: 'trap', t: 'Esperar una resonancia', s: 'Retrasa la reperfusión' },
      ],
      edges: [
        { from: 'def', to: 'tac' }, { from: 'tac', to: 'san', label: 'sí' }, { from: 'tac', to: 'nor', label: 'no' },
        { from: 'nor', to: 'pre', label: 'a veces' }, { from: 'nor', to: 'ang' }, { from: 'tac', to: 'trp', label: 'nunca' },
      ],
      steps: [
        { show: ['def', 'tac'], note: 'El examen inicial e inaplazable',
          say: 'Ahora el examen. Frente a un déficit focal agudo, el examen de elección es el TAC de encéfalo sin contraste, y tiene que estar hecho e informado en treinta minutos o menos desde el ingreso. Esa es la garantía GES.' },
        { show: ['san'], note: 'Su objetivo es descartar hemorragia',
          say: 'Y lo más importante es entender para qué lo pides. En las primeras horas, el objetivo del TAC no es ver el infarto: es descartar sangre. Si hay hemorragia, el trombolítico queda prohibido, y es otro tema, que vemos en la clase de hemorragia intracerebral.' },
        { show: ['nor'], note: 'Un TAC normal no descarta el infarto',
          say: 'Si no hay sangre, fíjate en esto: el TAC es normal en hasta el sesenta o setenta por ciento de los infartos en las primeras horas. Un TAC normal no descarta el infarto. Al contrario, confirma que es isquémico y que puedes trombolizar.' },
        { show: ['pre'], note: 'Signos sutiles y ASPECTS',
          say: 'A veces se ven signos precoces sutiles: borramiento del núcleo lenticular, pérdida del ribete insular, surcos borrados, o la arteria cerebral media hiperdensa, que es el trombo mismo. El score ASPECTS, de cero a diez, mide cuánto territorio de la cerebral media ya está comprometido.' },
        { show: ['ang'], note: 'Buscar al candidato a trombectomía',
          say: 'Y con un NIHSS de seis o más, se agrega de inmediato una AngioTAC de cerebro y cuello, para buscar una oclusión de gran vaso que se pueda sacar con trombectomía.' },
        { show: ['trp'], note: 'Trampa: pedir resonancia primero',
          say: 'La trampa es esperar una resonancia magnética. Ve más, pero demora, y cada minuto de demora es penumbra que se pierde.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Trombolisis intravenosa',
      title: 'Ventana de 4,5 horas y dos fármacos',
      cards: [
        { title: 'Indicación', tag: 'Ventana estricta', kind: 'key', items: [
          { t: 'Déficit discapacitante', d: 'ACV isquémico confirmado sin sangre',
            say: 'Pasemos al tratamiento. La trombolisis intravenosa está indicada en todo ataque cerebrovascular isquémico con un déficit discapacitante.' },
          { t: 'Hasta 4,5 h', d: 'Desde el inicio o la última vez visto bien',
            say: 'Y dentro de una ventana estricta de hasta cuatro horas y media. Ojo con cómo se cuenta: desde el inicio de los síntomas, o desde la última vez que el paciente fue visto asintomático. Si despertó con el déficit, la hora que cuenta es cuando se acostó.' },
        ] },
        { title: 'Alteplase', tag: 'rt-PA', kind: 'pharma', items: [
          { t: '0,9 mg/kg, máximo 90 mg', d: '10 % en bolo en 1 min',
            say: 'El primer fármaco es la alteplase: cero coma nueve miligramos por kilo, con un máximo de noventa miligramos. El diez por ciento va en bolo en un minuto.' },
          { t: '90 % en infusión de 60 min', d: 'Suspender si hay deterioro',
            say: 'Y el noventa por ciento restante, en infusión durante sesenta minutos. Si durante la infusión aparece cefalea intensa, náuseas o cae el Glasgow, se suspende.' },
        ] },
        { title: 'Tenecteplase', tag: 'TNK', kind: 'pharma', items: [
          { t: '0,25 mg/kg en bolo único', d: 'Máximo 25 mg, en 5 a 10 segundos',
            say: 'El segundo es la tenecteplase: cero coma veinticinco miligramos por kilo, máximo veinticinco, en un bolo único de cinco a diez segundos.' },
          { t: 'Más afinidad por la fibrina', d: 'Preferida si viene trombectomía',
            say: 'Tiene más afinidad por la fibrina y vida media más larga. Como es un solo bolo, es más rápida, y por eso se prefiere cuando el paciente va a ir a trombectomía.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Antes de trombolizar',
      title: 'Presión arterial y contraindicaciones',
      cards: [
        { title: 'Requisito de presión', tag: 'Antes y después', kind: 'alert', items: [
          { t: 'PA < 185/110 antes de partir', d: 'Si no, bajarla primero',
            say: 'Antes de trombolizar hay un requisito que se pregunta mucho: la presión tiene que estar bajo ciento ochenta y cinco de sistólica y bajo ciento diez de diastólica. Si está más alta, primero la bajas, y recién ahí partes.' },
          { t: '< 180/105 por 24 horas', d: 'Para evitar la hemorragia',
            say: 'Y después, se mantiene bajo ciento ochenta sobre ciento cinco durante las primeras veinticuatro horas. La razón es simple: con un trombolítico y presión alta, el riesgo es transformar el infarto en una hemorragia.' },
          { t: 'Labetalol o nicardipino EV', d: 'Labetalol 10–20 mg en bolo, repetible',
            say: 'Para bajarla se usa labetalol endovenoso, en bolos de diez a veinte miligramos repetibles, o nicardipino endovenoso.' },
        ] },
        { title: 'Contraindicaciones absolutas', tag: 'No trombolizar', kind: 'criteria', items: [
          { t: 'Hemorragia intracraneal previa', d: 'En cualquier momento de la vida',
            say: 'Y las contraindicaciones absolutas. Cualquier hemorragia intracraneal previa, en cualquier momento de la vida.' },
          { t: 'TEC grave o neurocirugía < 3 meses', d: 'O sangrado interno activo',
            say: 'Un traumatismo encefalocraneano grave o una cirugía craneoespinal en los últimos tres meses, o un sangrado interno activo.' },
          { t: 'Plaquetas < 100.000 · INR > 1,7', d: 'O anticoagulante directo < 48 h',
            say: 'Una diátesis hemorrágica: plaquetas bajo cien mil, INR sobre uno coma siete o TTPA prolongado, o un anticoagulante oral directo en las últimas cuarenta y ocho horas con pruebas alteradas.' },
          { t: 'Infarto extenso ya establecido', d: '> 1/3 de la ACM o ASPECTS < 6',
            say: 'Y un infarto extenso ya establecido, de más de un tercio del territorio de la cerebral media, o con ASPECTS bajo seis. Ahí ya no queda penumbra que salvar, y sí mucho riesgo de sangrar.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Trombectomía mecánica',
      title: 'Sacar el trombo: cuándo y hasta cuándo',
      nodes: [
        { id: 'gv', col: 0, row: 1, k: 'start', t: 'Oclusión de gran vaso', s: 'Carótida terminal o ACM M1' },
        { id: 'std', col: 1, row: 0, k: 'good', t: '0 a 6 horas', s: 'NIHSS ≥ 6, ASPECTS ≥ 6, Rankin 0–1' },
        { id: 'ext', col: 1, row: 2, k: 'refer', t: '6 a 24 horas', s: 'Con mismatch en perfusión' },
        { id: 'tme', col: 2, row: 1, k: 'good', t: 'Trombectomía', s: 'Stent retriever o aspiración' },
        { id: 'pue', col: 3, row: 0, k: 'alert', t: 'Terapia puente', s: 'Trombolizar ya y trasladar' },
        { id: 'trp', col: 3, row: 2, k: 'trap', t: 'Esperar la trombectomía', s: 'Sin dar el trombolítico' },
      ],
      edges: [
        { from: 'gv', to: 'std' }, { from: 'gv', to: 'ext' }, { from: 'std', to: 'tme' }, { from: 'ext', to: 'tme' },
        { from: 'tme', to: 'pue', label: 'si es candidato a IVT' }, { from: 'tme', to: 'trp', label: 'error' },
      ],
      steps: [
        { show: ['gv'], note: 'Solo sirve en gran vaso',
          say: 'La trombectomía mecánica es sacar el trombo con un catéter, por vía femoral o radial, con un stent retriever o por aspiración. Pero solo sirve si hay una oclusión de gran vaso: la carótida interna terminal o el primer segmento de la cerebral media, lo que te mostró la AngioTAC.' },
        { show: ['std'], note: 'Ventana estándar',
          say: 'La ventana estándar es de cero a seis horas, en mayores de dieciocho años, con NIHSS de seis o más, ASPECTS de seis o más, y un paciente que antes era independiente, con Rankin de cero a uno.' },
        { show: ['ext'], note: 'Ventana extendida en centros especializados',
          say: 'Y existe una ventana extendida, de seis a veinticuatro horas, en pacientes seleccionados con neuroimagen avanzada según los ensayos DAWN y DEFUSE tres. Lo que se busca es el mismatch: un núcleo pequeño y una penumbra grande que todavía se puede salvar.' },
        { show: ['tme'], note: 'Centro terciario de referencia',
          say: 'Eso se hace en un centro terciario de referencia, así que tu rol como médico general es reconocer al candidato y derivarlo sin demora.' },
        { show: ['pue'], note: 'Principio EUNACOM: terapia puente',
          say: 'Y aquí está el principio que el examen pregunta. Si el paciente es candidato a trombolisis y además tiene una oclusión de gran vaso, se tromboliza de inmediato y, en paralelo, se coordina el traslado a trombectomía. Eso es la terapia puente.' },
        { show: ['trp'], note: 'Nunca demorar el trombolítico',
          say: 'La trampa es no dar el trombolítico mientras se decide el traslado. Jamás se demora el trombolítico esperando a hemodinamia.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo en UTAC',
      title: 'Hipertensión permisiva y prevención precoz',
      cards: [
        { title: 'Presión sin trombolisis', tag: 'Hipertensión permisiva', kind: 'alert', items: [
          { t: 'Tratar solo si > 220/120', d: 'O si hay IAM, disección aórtica o falla cardíaca',
            say: 'El paciente se hospitaliza en una unidad de tratamiento del ataque cerebral, la UTAC, que reduce la morbimortalidad en más de un veinticinco por ciento. Y ahora cambia la regla de la presión. Si el paciente no fue trombolizado, se tolera la hipertensión: solo se trata sobre doscientos veinte sobre ciento veinte, o si hay un infarto al miocardio, una disección aórtica o falla cardíaca.' },
          { t: 'Bajar máximo 15 % en 24 h', d: 'La penumbra depende de la presión',
            say: 'Y si hay que bajarla, como máximo un quince por ciento en veinticuatro horas. ¿Por qué? Porque la penumbra vive de la presión de las colaterales. Si la bajas bruscamente, la matas.' },
        ] },
        { title: 'Medidas generales', tag: 'Neuroprotección', kind: 'normal', items: [
          { t: 'Glicemia entre 70 y 180 mg/dL', d: 'Insulina según protocolo',
            say: 'Además, glicemia entre setenta y ciento ochenta, evitando tanto la hipoglicemia como la hiperglicemia.' },
          { t: 'Normotermia y SatO₂ > 94 %', d: 'Paracetamol si T° > 37,5 °C',
            say: 'Normotermia, con paracetamol si pasa de treinta y siete y medio, porque la fiebre duplica el daño neuronal. Y saturación sobre noventa y cuatro por ciento.' },
        ] },
        { title: 'Antitrombóticos', tag: 'Ojo con los tiempos', kind: 'pharma', items: [
          { t: 'AAS 250 mg precoz', d: 'Si trombolizó: esperar 24 h y TAC de control',
            say: 'Aspirina, doscientos cincuenta miligramos oral en las primeras veinticuatro a cuarenta y ocho horas. Pero la regla de oro: si el paciente recibió trombolisis, la aspirina se posterga veinticuatro horas, y solo se inicia después de un TAC de control sin sangre.' },
          { t: 'NIHSS ≤ 3: doble antiagregación', d: 'AAS + clopidogrel por 21 días',
            say: 'En el infarto menor, con NIHSS de tres o menos, no cardioembólico, va doble antiagregación: aspirina cien más clopidogrel setenta y cinco, con carga de trescientos, por veintiún días, y luego monoterapia. Lo retomamos en la próxima clase, con el ataque isquémico transitorio.' },
          { t: 'Atorvastatina 80 mg', d: 'Independiente del colesterol',
            say: 'Y atorvastatina ochenta miligramos precoz, independiente del colesterol basal.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión, tal como lo vas a razonar en urgencias y en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Déficit focal súbito', 'TAC sin contraste en ≤ 30 min', 'Pedir resonancia primero'],
          say: 'Repasemos las trampas. Déficit focal súbito: TAC sin contraste en treinta minutos o menos. El error es esperar una resonancia.' },
        { cells: ['TAC normal a las 2 horas', 'Trombolisis IV', 'Pensar que no es un infarto'],
          say: 'TAC normal a las dos horas: eso no descarta el infarto, confirma que no hay sangre. La conducta es trombolizar.' },
        { cells: ['PA 200/115 y candidato a IVT', 'Labetalol hasta < 185/110 y luego IVT', 'Trombolizar con esa presión'],
          say: 'Candidato a trombolisis con presión de doscientos sobre ciento quince: primero labetalol hasta bajar de ciento ochenta y cinco sobre ciento diez, y luego se tromboliza.' },
        { cells: ['No trombolizado, PA 190/100', 'No bajar la presión', 'Bajarla a lo normal'],
          say: 'En cambio, en el paciente no trombolizado con ciento noventa sobre cien, no se toca la presión. El error es normalizarla y matar la penumbra.' },
        { cells: ['Trombolizado hace 6 horas', 'Diferir AAS hasta TAC a las 24 h', 'Dar aspirina de inmediato'],
          say: 'Si ya recibió trombolítico, la aspirina espera veinticuatro horas y un TAC de control.' },
        { cells: ['Candidato a IVT con oclusión de M1', 'Trombolizar y trasladar: terapia puente', 'Esperar la trombectomía'],
          say: 'Y con una oclusión de gran vaso en un candidato a trombolisis: terapia puente, trombolizar y trasladar, sin esperar.' },
        { cells: ['Hemiparesia pura sin afasia', 'Infarto lacunar', 'Infarto de la cerebral media'],
          say: 'En la clínica, la hemiparesia pura sin afasia ni trastorno sensitivo es lacunar. Si hubiera afasia, pensarías en la cerebral media.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 67 años, hipertenso. Hace 90 minutos presentó en forma súbita afasia y hemiparesia derecha braquiocrural (NIHSS 13). PA 205/115 mmHg, glicemia 118 mg/dL. El TAC de encéfalo sin contraste, informado a los 25 minutos del ingreso, es normal.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar alteplase 0,9 mg/kg de inmediato' },
        { letter: 'B', text: 'Labetalol EV hasta PA < 185/110 mmHg y luego trombolisis' },
        { letter: 'C', text: 'No tratar la presión: hipertensión permisiva hasta 220/120 mmHg' },
        { letter: 'D', text: 'AAS 250 mg y hospitalizar en UTAC' },
        { letter: 'E', text: 'Solicitar resonancia magnética antes de decidir' },
      ],
      correct: 'B',
      explanation: 'Infarto de la ACM izquierda en ventana (< 4,5 h), TAC sin sangre: candidato a trombolisis. La PA debe estar < 185/110 mmHg antes de iniciar el trombolítico: se baja con labetalol o nicardipino EV y luego se tromboliza. La hipertensión permisiva hasta 220/120 es para el paciente no trombolizado.',
      say: {
        stem: 'Vamos con un caso. Hombre de sesenta y siete años, hipertenso. Hace noventa minutos presentó de golpe afasia y hemiparesia derecha, con un NIHSS de trece. Su presión es de doscientos cinco sobre ciento quince, la glicemia normal, y el TAC sin contraste, informado a los veinticinco minutos, es normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: alteplase de inmediato, labetalol hasta bajar de ciento ochenta y cinco sobre ciento diez y luego trombolisis, no tocar la presión, aspirina y UTAC, o pedir una resonancia. Piénsalo.',
        answer: 'Es la B. Está en ventana, el TAC no muestra sangre y el déficit es importante: es candidato a trombolisis. Pero con doscientos cinco sobre ciento quince no puedes partir; primero bajas la presión con labetalol. La C es la trampa: la hipertensión permisiva es para el que no se tromboliza. Y la A olvida el requisito de la presión, que es justamente lo que evita la hemorragia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 93',
      stem: 'Un paciente de 67 años presenta hemiparesia derecha de dos horas de evolución, que inició de manera súbita y se asocia a dificultades para hablar. Al examen físico tiene hemiparesia faciobraquiocrural derecha y afasia. Su TAC de cerebro es normal.',
      question: 'La conducta más adecuada es:',
      options: [
        { letter: 'A', text: 'Anticoagular con heparina' },
        { letter: 'B', text: 'Administrar antiagregantes plaquetarios' },
        { letter: 'C', text: 'Solicitar resonancia magnética nuclear' },
        { letter: 'D', text: 'Realizar embolectomía' },
        { letter: 'E', text: 'Realizar trombólisis' },
      ],
      correct: 'E',
      explanation: 'Déficit focal súbito de 2 horas con TAC normal: el TAC descarta hemorragia y confirma un infarto isquémico en ventana (< 4,5 h). Lo más urgente es la trombolisis EV.',
      say: {
        stem: 'Ahora preguntas reales. Esta es del EUNACOM de julio de dos mil diecinueve. Paciente de sesenta y siete años con hemiparesia derecha de inicio súbito hace dos horas, con dificultad para hablar. Tiene hemiparesia faciobraquiocrural derecha y afasia, y su TAC de cerebro es normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: anticoagular con heparina, antiagregantes, resonancia magnética, embolectomía, o trombolisis. Piénsalo.',
        answer: 'Es la E, trombolisis. El TAC normal no te dice que no hay infarto: te dice que no hay sangre. Con dos horas de evolución, está dentro de la ventana de cuatro horas y media. La C es el distractor tentador, porque la resonancia ve mejor el infarto, pero demora y no cambia la conducta. Y los antiagregantes llegan después, no antes del trombolítico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 121',
      stem: 'Paciente con cefalea súbita y hemiplejia del hemicuerpo izquierdo, sin alteraciones sensitivas ni del habla.',
      question: '¿Diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Hemorragia intracerebral en cápsula interna' },
        { letter: 'B', text: 'AVE isquémico de territorio carotídeo' },
        { letter: 'C', text: 'Hematoma subdural agudo' },
        { letter: 'D', text: 'AVE isquémico de territorio basilar' },
        { letter: 'E', text: 'Infarto lacunar' },
      ],
      correct: 'E',
      explanation: 'Hemiplejia pura, sin compromiso sensitivo ni del lenguaje: síndrome lacunar motor puro (brazo posterior de la cápsula interna). La ausencia de afasia, hemianopsia y negligencia indica que no hay compromiso cortical.',
      say: {
        stem: 'Esta es del EUNACOM de enero de dos mil veintitrés. Paciente con cefalea súbita y hemiplejia del hemicuerpo izquierdo, sin alteraciones sensitivas ni del habla.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: hemorragia en la cápsula interna, infarto de territorio carotídeo, hematoma subdural agudo, infarto de territorio basilar, o infarto lacunar. Piénsalo.',
        answer: 'Es la E, infarto lacunar. Fíjate en lo que falta: no hay trastorno sensitivo ni del lenguaje. Una hemiplejia pura es el síndrome motor puro de la cápsula interna. El distractor tentador es la B, el territorio carotídeo, pero un infarto cortical de la cerebral media izquierda daría afasia, y aquí el lenguaje está intacto. Y un infarto basilar daría un síndrome cruzado, con pares craneales.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 76',
      stem: 'Un paciente de 32 años presenta dolor cervical intenso, mientras realizaba deporte, que se irradia hacia la cara, zona temporal y se asocia a cefalea intensa. Al examen físico se observa ptosis y miosis derechas.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Parálisis del tercer nervio craneal' },
        { letter: 'B', text: 'Aneurisma cerebral anterior, con compromiso del tercer nervio craneal' },
        { letter: 'C', text: 'Infarto vertebrobasilar' },
        { letter: 'D', text: 'Migraña hemipléjica' },
        { letter: 'E', text: 'Disección carotidea' },
      ],
      correct: 'E',
      explanation: 'Adulto joven con dolor cervical y cefalea tras esfuerzo o elongación: disección arterial (TOAST: otra etiología determinada). La ptosis con miosis es un síndrome de Horner por compromiso simpático a nivel de la carótida.',
      say: {
        stem: 'Esta es del EUNACOM de agosto de dos mil veintiuno. Paciente de treinta y dos años que, haciendo deporte, presenta un dolor cervical intenso que se irradia a la cara y la zona temporal, con cefalea intensa. Al examen tiene ptosis y miosis derechas.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: parálisis del tercer par, aneurisma con compromiso del tercer par, infarto vertebrobasilar, migraña hemipléjica, o disección carotídea. Piénsalo.',
        answer: 'Es la E, disección carotídea. Es la causa que vimos en la clasificación TOAST: el adulto joven con dolor cervical después de un esfuerzo o una elongación. La ptosis con miosis es un síndrome de Horner, porque la vía simpática viaja pegada a la carótida. El distractor tentador es el tercer par, pero la parálisis del tercer par da ptosis con la pupila dilatada, no contraída.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 1',
      stem: 'Una paciente de 40 años, usuaria de anticonceptivos orales, consulta por cefalea holocránea, muy intensa, de 5 días de evolución, que se ha asociado a náuseas y vómitos alimentarios, mayores en la mañana, y que no ha respondido al uso de analgésicos orales. Hoy presentó una convulsión tónico-clónica. En su examen físico tiene sopor superficial paresia de las extremidades derechas.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Migraña por anticonceptivos' },
        { letter: 'B', text: 'Infarto cerebral extenso' },
        { letter: 'C', text: 'Accidente vascular lacunar' },
        { letter: 'D', text: 'Epilepsia con parálisis de Todd' },
        { letter: 'E', text: 'Trombosis venosa cerebral' },
      ],
      correct: 'E',
      explanation: 'Cefalea progresiva de días con vómitos matinales (signos de hipertensión endocraneana), convulsión y déficit focal en usuaria de anticonceptivos orales: trombosis venosa cerebral, una de las causas de "otra etiología determinada" en TOAST.',
      say: {
        stem: 'Y la última, del EUNACOM de diciembre de dos mil diecinueve. Mujer de cuarenta años, usuaria de anticonceptivos orales, con cinco días de cefalea holocránea muy intensa, con vómitos de predominio matinal, que no cede con analgésicos. Hoy convulsionó, y al examen está soporosa y con paresia de las extremidades derechas.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: migraña por anticonceptivos, infarto cerebral extenso, infarto lacunar, epilepsia con parálisis de Todd, o trombosis venosa cerebral. Piénsalo.',
        answer: 'Es la E, trombosis venosa cerebral, otra de las causas del grupo de otra etiología determinada. Junta las pistas: una cefalea de días con vómitos matinales, que habla de hipertensión endocraneana, una convulsión, un déficit focal, y un factor protrombótico, los anticonceptivos. El infarto arterial tienta por la paresia, pero se instala de golpe, no con cinco días de cefalea que va en aumento.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Tiempo es cerebro', kind: 'key', items: [
          { t: 'TAC sin contraste en ≤ 30 min', d: 'Busca sangre, no el infarto',
            say: 'Cerremos con las reglas de oro. Frente a un déficit focal súbito, TAC sin contraste en treinta minutos o menos. Su objetivo es descartar sangre, y un TAC normal no descarta el infarto: te autoriza a trombolizar.' },
          { t: 'Hemiparesia pura = lacunar', d: 'Afasia = cortical, cerebral media',
            say: 'En la clínica, la afasia te lleva a la corteza y a la cerebral media; la hemiparesia pura, a una laguna.' },
        ] },
        { title: 'Reperfusión', tag: 'El reloj manda', kind: 'alert', items: [
          { t: 'Trombolisis hasta 4,5 h', d: 'Con PA < 185/110 antes de partir',
            say: 'La trombolisis va hasta las cuatro horas y media, con la presión bajo ciento ochenta y cinco sobre ciento diez antes de partir.' },
          { t: 'Gran vaso: trombectomía', d: 'Hasta 6 h; 6–24 h con mismatch; terapia puente',
            say: 'Si hay una oclusión de gran vaso, trombectomía hasta las seis horas, o hasta veinticuatro con mismatch, y sin demorar el trombolítico: terapia puente.' },
        ] },
        { title: 'UTAC', tag: 'Después', kind: 'pharma', items: [
          { t: 'Sin trombolisis: tolerar hasta 220/120', d: 'Bajar máximo 15 % en 24 h',
            say: 'Si no se tromboliza, hipertensión permisiva hasta doscientos veinte sobre ciento veinte.' },
          { t: 'AAS: 24 h después de trombolizar', d: 'Tras TAC de control sin sangre',
            say: 'Y la aspirina espera veinticuatro horas si hubo trombolítico. Si te llevas una sola idea de hoy: descarta sangre con el TAC, mira el reloj, y cuida la presión según si trombolizas o no. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'ACV isquémico agudo: reperfusión',
    root: N('start', 'Déficit focal súbito', 'TAC sin contraste en ≤ 30 min',
      'Paciente con un déficit neurológico focal de inicio súbito. Es una emergencia tiempo-dependiente, y se pide un TAC sin contraste, informado en treinta minutos o menos.',
      ['', N('q', '¿Hay sangre en el TAC?', 'Hemorragia o no',
        'La primera pregunta no es si hay infarto, sino si hay sangre.',
        ['SÍ', N('refer', 'ACV hemorrágico', 'Trombolisis contraindicada',
          'Si hay sangre, es un ataque cerebrovascular hemorrágico. El trombolítico está prohibido y el manejo es otro.')],
        ['NO', N('q', '¿Cuánto tiempo desde la última vez visto bien?', 'El reloj decide',
          'Si no hay sangre, es isquémico, aunque el TAC sea normal. Ahora manda el reloj: ¿cuánto tiempo pasó desde la última vez que se le vio bien?',
          ['≤ 4,5 h', N('alert', 'Trombolisis IV + AngioTAC', 'PA < 185/110 antes; AAS a las 24 h',
            'Dentro de cuatro horas y media, trombolisis intravenosa con alteplase o tenecteplase, con la presión bajo ciento ochenta y cinco sobre ciento diez. Si la AngioTAC muestra una oclusión de gran vaso, se traslada a trombectomía en paralelo: terapia puente. La aspirina espera veinticuatro horas.')],
          ['> 4,5 h', N('q', '¿Oclusión de gran vaso?', 'AngioTAC',
            'Fuera de la ventana del trombolítico, la pregunta es si hay una oclusión de gran vaso en la AngioTAC.',
            ['SÍ', N('refer', 'Trombectomía mecánica', 'Hasta 6 h; 6–24 h con mismatch',
              'Si la hay, se deriva a trombectomía: estándar hasta las seis horas, y hasta las veinticuatro en pacientes seleccionados con mismatch en la perfusión.')],
            ['NO', N('ok', 'UTAC + AAS 250 mg', 'Hipertensión permisiva hasta 220/120',
              'Si no, hospitalización en la UTAC con aspirina doscientos cincuenta, estatina, e hipertensión permisiva: solo se baja la presión sobre doscientos veinte sobre ciento veinte.')])])])]),
  },
};
