// Clase 19.21 (Obstetricia) — guion docente escrito a mano (estándar Módulo 1). Tema nuevo de hueco del Perfil V3.
// Fuente clínica: books/scripts/dataset_obstetricia_bloque_2.cjs (ob-21, tema 19.21, tier 2). Códigos 1.01.3.002, 3.01.1.007, 3.01.2.007
// (Dx sospecha/específico · Tx inicial · Seguimiento derivar, según books/data/v3_codemap.json).
// Preguntas reales (class_questions.cjs ob-21; verificadas contra el banco real): Julio 2024 P59 (gemelar bicorial de 36 semanas),
// Julio 2019 P54 (gemelo muerto en bicorial de 26 semanas), Diciembre 2017 P177 (hiperemesis) y Diciembre 2022 P179 (doxilamina más piridoxina).
// Enunciados y alternativas del banco real. Para cardiopatía y embarazo el banco real no tiene preguntas: se usa la pregunta práctica del libro
// (Perfil V3 1.01.3.002) con la etiqueta «Banco EUNACOM · Caso representativo», sin inventar fecha.
// No usadas: Diciembre 2017 P178 y Enero 2023 P56 (repiten la doxilamina de Diciembre 2022 P179), Agosto 2021 P143 (gemelos discordantes: el
// enunciado del banco llega cortado, sin el inicio del caso) y las de HELLP, colestasia o hígado graso (otras clases de obstetricia).
// Fotos: esquema de corionicidad y amnionicidad y esquema del síndrome de transfusión feto-fetal (Nelson 22.ª ed.). No hay fotos locales de
// hiperemesis ni de cardiopatía en el embarazo.
// En movimiento: scenes/ob_nuevas.html (?v=gemelar), gráfico solo código con las semanas de control e interrupción del libro.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-21',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cardiopatía, embarazo múltiple e hiperemesis gravídica: el riesgo materno, la corionicidad y el manejo inicial',
      say: 'Bienvenido. Hoy reunimos tres situaciones del embarazo que el médico general debe reconocer a tiempo. La cardiopatía, que se tolera según la lesión y a veces contraindica el embarazo. El embarazo múltiple, donde todo gira alrededor de la corionicidad. Y la hiperemesis gravídica, la forma grave de los vómitos, en la que no se te puede olvidar la tiamina. Empecemos por el corazón.',
    },

    {
      type: 'flow',
      kicker: 'Cardiopatía y embarazo',
      title: 'Por qué el embarazo descompensa el corazón',
      nodes: [
        { id: 'v', col: 0, row: 1, k: 'cause', t: 'Volumen plasmático +40-50%', s: 'Gasto cardíaco +30-50%' },
        { id: 'p', col: 1, row: 1, k: 'mech', t: 'Máximo a las 28-32 semanas', s: 'FC +10-20 lpm · RVS baja' },
        { id: 'l', col: 2, row: 1, k: 'mech', t: 'Trabajo de parto', s: 'Gasto cardíaco +50% con contracciones' },
        { id: 'a', col: 3, row: 1, k: 'alert', t: 'Autotransfusión postparto', s: 'La retracción uterina devuelve sangre' },
        { id: 'r', col: 4, row: 1, k: 'risk', t: 'Primeras 24-72 horas', s: 'El período más peligroso' },
        { id: 'e', col: 2, row: 3, k: 'effect', t: 'Estenosis mitral', s: 'La taquicardia reduce el llenado → edema pulmonar' },
        { id: 'i', col: 3, row: 3, k: 'good', t: 'Insuficiencias leves', s: 'La RVS baja las alivia' },
      ],
      edges: [
        { from: 'v', to: 'p' }, { from: 'p', to: 'l' }, { from: 'l', to: 'a' }, { from: 'a', to: 'r' }, { from: 'p', to: 'e' }, { from: 'p', to: 'i' },
      ],
      steps: [
        { show: ['v', 'p'], note: 'El corazón trabaja bastante más',
          say: 'Para entender qué cardiopatías se toleran, parte por la fisiología. En el embarazo el volumen plasmático aumenta cuarenta a cincuenta por ciento, y el gasto cardíaco treinta a cincuenta, con un máximo entre las veintiocho y las treinta y dos semanas. La frecuencia sube diez a veinte latidos y baja la resistencia vascular sistémica.' },
        { show: ['l', 'a', 'r'], note: 'Parto y postparto: lo más riesgoso',
          say: 'En el trabajo de parto, el gasto cardíaco sube otro cincuenta por ciento con las contracciones. Y tras el alumbramiento, la retracción uterina devuelve sangre a la circulación, una autotransfusión. Las primeras veinticuatro a setenta y dos horas del puerperio son el período más peligroso.' },
        { show: ['e', 'i'], note: 'Estenosis descompensan; insuficiencias, bien',
          say: 'Por eso la estenosis mitral es la valvulopatía que más descompensa: la taquicardia reduce el llenado y causa edema pulmonar. En cambio, el descenso de la resistencia sistémica alivia las insuficiencias valvulares, que suelen tolerarse bien.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Cardiopatía y embarazo',
      title: 'Cuándo sospechar cardiopatía',
      cards: [
        { title: 'Es de verdad', tag: 'Sospechar y confirmar', kind: 'alert', items: [
          { t: 'Soplo diastólico o sistólico ≥ 3/6', d: 'Cianosis, arritmia sostenida, cardiomegalia',
            say: 'Se sospecha ante un soplo diastólico, un soplo sistólico de grado tres sobre seis o más, cianosis, una arritmia sostenida o cardiomegalia.' },
          { t: 'Disnea progresiva o de reposo, ortopnea', d: 'Hemoptisis, síncope de esfuerzo',
            say: 'Y ante una disnea progresiva o de reposo, ortopnea, hemoptisis o un síncope de esfuerzo.' },
          { t: 'ECG y ecocardiograma', d: 'Equipo: cardiología, obstetricia y anestesia',
            say: 'Se confirma con electrocardiograma y ecocardiograma, y el estudio y el manejo son en equipo, con cardiología, obstetricia y anestesia.' },
        ] },
        { title: 'Es normal', tag: 'No sobrediagnosticar', kind: 'normal', items: [
          { t: 'Soplo sistólico suave', d: 'Disnea leve y edema de piernas',
            say: 'Lo normal en el embarazo es un soplo sistólico suave, una disnea leve y edema de las piernas. No todo soplo es una cardiopatía.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cardiopatía y embarazo',
      title: 'Qué lesiones contraindican el embarazo',
      cards: [
        { title: 'Riesgo muy alto', tag: 'Clase IV de la OMS modificada', kind: 'alert', items: [
          { t: 'Hipertensión pulmonar severa o Eisenmenger', d: 'Mortalidad materna 30-50%',
            say: 'Las lesiones de riesgo muy alto, clase cuatro de la Organización Mundial de la Salud modificada, contraindican el embarazo. La más importante es la hipertensión pulmonar severa o el síndrome de Eisenmenger, con una mortalidad materna de treinta a cincuenta por ciento.' },
          { t: 'Estenosis severa sintomática', d: 'Mitral o aórtica',
            say: 'También la estenosis mitral o aórtica severa y sintomática.' },
          { t: 'Miocardiopatía con FEVI < 30%', d: 'O periparto con disfunción residual',
            say: 'La miocardiopatía con fracción de eyección menor de treinta por ciento, o el antecedente de miocardiopatía periparto con disfunción residual.' },
          { t: 'Marfan con raíz > 45 mm', d: 'Coartación aórtica severa',
            say: 'El síndrome de Marfan con raíz aórtica dilatada, de más de cuarenta y cinco milímetros, y la coartación aórtica severa.' },
        ] },
        { title: 'Qué se hace', tag: 'Consejería', kind: 'key', items: [
          { t: 'Anticoncepción segura', d: 'Si ya está embarazada: Ley 21.030',
            say: 'Se recomienda anticoncepción segura y, si la paciente ya está embarazada, se ofrece la interrupción terapéutica en las causales de la ley veintiún mil treinta.' },
        ] },
        { title: 'Bien toleradas', tag: 'Control habitual', kind: 'normal', items: [
          { t: 'CIA o CIV pequeñas o corregidas, ductus pequeño', d: 'Prolapso mitral sin IM significativa',
            say: 'Se toleran bien las comunicaciones interauricular o interventricular pequeñas o corregidas, un ductus pequeño, el prolapso mitral sin insuficiencia significativa, las insuficiencias valvulares leves o moderadas y las arritmias benignas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cardiopatía y embarazo',
      title: 'Fármacos, parto y puerperio',
      cards: [
        { title: 'Manejo médico', tag: 'Control preconcepcional', kind: 'pharma', items: [
          { t: 'Furosemida, metoprolol, digoxina', d: 'Evitar atenolol · reposo relativo',
            say: 'El manejo incluye control preconcepcional, reposo relativo, tratar la anemia, la infección y la hipertensión, y vigilar la insuficiencia cardíaca con furosemida, betabloqueadores como metoprolol, evitando el atenolol, y digoxina.' },
          { t: 'Contraindicados: IECA, ARA II, amiodarona, estatinas', d: 'Válvulas mecánicas: anticoagulación estricta',
            say: 'Están contraindicados los IECA, los ARA dos, la amiodarona y las estatinas. Las válvulas mecánicas exigen anticoagulación estricta: la warfarina tiene riesgo de embriopatía entre las seis y las doce semanas y se reemplaza por heparina de bajo peso molecular, bajo control de cardiología, suspendiéndola antes del parto.' },
        ] },
        { title: 'Parto y puerperio', tag: 'Vaginal, con epidural', kind: 'key', items: [
          { t: 'Parto vaginal de elección', d: 'Epidural precoz, expulsivo acortado con fórceps',
            say: 'El parto vaginal es de elección, con analgesia epidural precoz y un expulsivo acortado con fórceps.' },
          { t: 'Cesárea solo si hay indicación', d: 'Marfan con aorta dilatada, estenosis aórtica severa, IC, anticoagulación oral',
            say: 'La cesárea se reserva para indicaciones obstétricas y para Marfan con aorta dilatada, estenosis aórtica severa, insuficiencia cardíaca y anticoagulación oral.' },
          { t: 'Sin metilergonovina ni bolos de oxitocina', d: 'Monitorizar 48-72 horas',
            say: 'Se evitan la metilergonovina y los bolos de oxitocina, que vasodilatan y causan hipotensión, y se monitoriza a la paciente al menos cuarenta y ocho a setenta y dos horas después del parto. La profilaxis antibiótica de endocarditis solo se indica en válvula protésica, endocarditis previa o cardiopatía congénita cianótica.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Embarazo múltiple',
      title: 'Diagnóstico y corionicidad',
      cards: [
        { title: 'Sospecha', tag: 'Se confirma con ecografía', kind: 'criteria', items: [
          { t: 'Altura uterina mayor que la edad gestacional', d: 'Dos polos fetales y dos focos',
            say: 'Se sospecha por una altura uterina mayor que la edad gestacional, hiperemesis, un aumento exagerado de peso, dos polos fetales palpables y dos focos de latidos. Se confirma con ecografía.' },
          { t: 'Dicigotos y monocigotos', d: 'Dicigotos: siempre bicoriales y biamnióticos',
            say: 'Dos tercios de los gemelos son dicigotos, y siempre bicoriales y biamnióticos. Los monocigotos pueden ser bicoriales, monocoriales biamnióticos o monocoriales monoamnióticos, según el día de la división. Son factores de riesgo la edad materna, la reproducción asistida y los antecedentes familiares.' },
        ] },
        { title: 'Lo más importante', tag: 'Corionicidad a las 11-14 semanas', kind: 'key', items: [
          { t: 'Signo lambda: bicorial', d: 'Extensión triangular de placenta entre las membranas',
            say: 'La corionicidad se determina entre las once y las catorce semanas. El signo lambda, una extensión triangular de tejido placentario entre las membranas, indica una gestación bicorial. Mira este esquema: arriba, el gemelar dicigoto, con dos placentas y dos sacos; abajo, los monocigotos, con la división en distintos momentos, y distinto número de placentas y de sacos. Y en esta ecografía, la membrana gruesa con su pico triangular, el signo lambda.',
            photos: [
              { src: 'biblioteca/14_obstetricia/ob-21/01_corionicidad-amnionicidad-esquema__nelson_p1320.jpg', label: 'Corionicidad y amnionicidad', at: 'Mira este esquema', credit: 'Nelson 22.ª ed., p. 1320' },
              { src: 'biblioteca/14_obstetricia/ob-21/03_signo-lambda-eco__obgynus_p137.jpg', label: 'Signo lambda: bicorial', at: 'Y en esta ecografía', credit: 'Ultrasound in Obstetrics and Gynecology: A Practical Approach, Fig. 7.2' },
            ] },
          { t: 'Signo T: monocorial', d: 'Membrana delgada en ángulo recto',
            say: 'El signo T, una membrana delgada que sale en ángulo recto, indica una gestación monocorial. Mira esta ecografía: una membrana fina separa los dos sacos. Y los monocoriales comparten placenta y vasos, por eso su riesgo perinatal es mayor.',
            photo: { src: 'biblioteca/14_obstetricia/ob-21/04_signo-T-monocorial__obgynus_p81.jpg', label: 'Monocorial: membrana fina', at: 'Mira esta ecografía', credit: 'Ultrasound in Obstetrics and Gynecology: A Practical Approach, Fig. 4.20' } },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Embarazo múltiple',
      title: 'Complicaciones fetales y maternas',
      cards: [
        { title: 'Fetales', tag: 'Todas las gestaciones múltiples', kind: 'alert', items: [
          { t: 'Prematurez: la mitad antes de las 37 semanas', d: 'RCIU y discordancia de peso > 20-25%',
            say: 'La mitad de los gemelos nace antes de las treinta y siete semanas. Hay restricción de crecimiento, discordancia de peso mayor de veinte a veinticinco por ciento, y malformaciones, al doble de frecuencia.' },
          { t: 'Un gemelo muerto en un bicorial', d: '2.º o 3.er trimestre: bienestar fetal y coagulación',
            say: 'Si muere un gemelo en un bicorial, en el segundo o tercer trimestre, se vigila con pruebas de bienestar fetal y de coagulación, por el riesgo de coagulopatía.' },
        ] },
        { title: 'Solo monocoriales', tag: 'Comparten placenta y vasos', kind: 'criteria', items: [
          { t: 'Transfusión feto-fetal', d: 'Donante con oligohidramnios · receptor con polihidramnios',
            say: 'En los monocoriales aparece el síndrome de transfusión feto-fetal. Mira esta ilustración: un gemelo, el donante, bombea sangre al otro, el receptor, por conexiones vasculares de la placenta. El donante tiene oligohidramnios y el receptor, polihidramnios. Y en esta ecografía, el receptor con mucho líquido y el donante pegado a su membrana. El tratamiento es el láser fetoscópico.',
            photos: [
              { src: 'biblioteca/14_obstetricia/ob-21/02_transfusion-feto-fetal-esquema__nelson_p1315.jpg', label: 'Transfusión feto-fetal', at: 'Mira esta ilustración', credit: 'Nelson 22.ª ed., Fig. 118.10' },
              { src: 'biblioteca/14_obstetricia/ob-21/05_tttf-donante-receptor-eco__obgynus_p143.jpg', label: 'Donante y receptor', at: 'Y en esta ecografía', credit: 'Ultrasound in Obstetrics and Gynecology: A Practical Approach, p. 143' },
            ] },
          { t: 'Anemia-policitemia, enredo de cordones', d: 'Muerte de un gemelo: riesgo para el sobreviviente',
            say: 'Se suman la anemia-policitemia y el enredo de cordones en los monoamnióticos. Y si muere uno, hay riesgo de daño o muerte del sobreviviente.' },
        ] },
        { title: 'Maternas', tag: 'Suplementar y prevenir', kind: 'key', items: [
          { t: 'Hiperemesis, anemia, preeclampsia ×3', d: 'DG, colestasia, atonía, más cesárea',
            say: 'Las complicaciones maternas son hiperemesis, anemia, preeclampsia tres veces más frecuente, diabetes gestacional, colestasia intrahepática, hemorragia postparto por atonía y más cesárea. Se suplementa hierro y ácido fólico, y se indica aspirina de ciento cincuenta miligramos en la noche desde el primer trimestre si hay riesgo de preeclampsia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Embarazo múltiple',
      title: 'Control, derivación y cuándo interrumpir',
      cards: [
        { title: 'Control', tag: 'Todo gemelar se deriva a ARO', kind: 'criteria', items: [
          { t: 'Monocoriales: eco cada 2 semanas desde las 16', d: 'Crecimiento, líquido amniótico, Doppler',
            say: 'Todo embarazo múltiple se deriva a alto riesgo obstétrico. La vigilancia ecográfica es más frecuente: cada dos semanas desde las dieciséis en los monocoriales, con medición de crecimiento, líquido amniótico y Doppler.' },
          { t: 'Bicoriales: cada 4 semanas desde las 20', d: 'Corticoides si hay riesgo antes de las 34',
            say: 'En los bicoriales, cada cuatro semanas desde las veinte. Y se administran corticoides antenatales si hay riesgo de parto antes de las treinta y cuatro semanas.' },
        ] },
        { title: 'Momento de interrupción', tag: 'Sin complicaciones', kind: 'key', items: [
          { t: 'Bicorial biamniótico: 38 semanas', d: 'Monocorial biamniótico: 36',
            say: 'El momento de interrupción se pregunta. El bicorial biamniótico sin complicaciones, alrededor de las treinta y ocho semanas. El monocorial biamniótico, a las treinta y seis.' },
          { t: 'Monoamniótico: 32-34 semanas, cesárea', d: 'Por el enredo de cordones',
            say: 'Y el monoamniótico, a las treinta y dos a treinta y cuatro semanas, siempre por cesárea.' },
        ] },
        { title: 'Vía del parto', tag: 'Depende del primer gemelo', kind: 'alert', items: [
          { t: 'Primero cefálico y biamniótico: se puede intentar vaginal', d: 'Monocorial o bicorial',
            say: 'La vía depende del primer gemelo. Si está en presentación cefálica y es biamniótico, se puede intentar un parto vaginal.' },
          { t: 'Cesárea: primero no cefálico, monoamniótico, ≥ 3 fetos', d: 'Oxitocina en el puerperio: atonía',
            say: 'Si el primero no es cefálico, si es monoamniótico o si hay tres o más fetos, cesárea. Y en el puerperio se previene la atonía uterina con oxitocina.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Hiperemesis gravídica',
      title: 'De la náusea del embarazo a la hiperemesis',
      cards: [
        { title: 'Náuseas y vómitos', tag: '50-80% de las embarazadas', kind: 'normal', items: [
          { t: 'Desde las 4-6 semanas', d: 'Máximo a las 9-12 · ceden a las 16-20',
            say: 'Las náuseas y los vómitos afectan a cincuenta a ochenta por ciento de las embarazadas. Comienzan hacia las cuatro a seis semanas, alcanzan su máximo a las nueve a doce y ceden a las dieciséis a veinte.' },
        ] },
        { title: 'Hiperemesis gravídica', tag: 'La forma grave', kind: 'alert', items: [
          { t: 'Vómitos incoercibles y baja de peso > 5%', d: 'Deshidratación y cetonuria',
            say: 'La hiperemesis gravídica es la forma grave: vómitos persistentes e incoercibles, con pérdida de más de cinco por ciento del peso previo, deshidratación y cetonuria.' },
          { t: 'Hipokalemia, alcalosis hipoclorémica', d: 'Más frecuente en gemelar y mola',
            say: 'Hay alteraciones hidroelectrolíticas: hipokalemia y alcalosis metabólica hipoclorémica. Se asocia a niveles altos de beta hCG, por eso es más frecuente en el embarazo múltiple y en la mola hidatidiforme.' },
        ] },
        { title: 'Estudio', tag: 'Es un diagnóstico de exclusión', kind: 'criteria', items: [
          { t: 'Electrolitos, creatinina, glicemia, cetonuria', d: 'Orina con urocultivo, pruebas hepáticas, amilasa o lipasa',
            say: 'Se piden electrolitos, creatinina, glicemia, cetonuria, orina completa con urocultivo, pruebas hepáticas, que pueden subir levemente, y amilasa o lipasa.' },
          { t: 'TSH, T4 libre y ecografía', d: 'Hipertiroidismo transitorio, mola, gemelar',
            say: 'Se agregan TSH con T cuatro libre, por el hipertiroidismo gestacional transitorio, y una ecografía para confirmar el embarazo intrauterino, descartar una mola y detectar gemelos. Se descartan gastroenteritis, hepatitis, pancreatitis, colecistitis, apendicitis e infección urinaria. En la segunda mitad, un vómito con hipertensión sugiere HELLP, no hiperemesis.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Hiperemesis gravídica',
      title: 'Tratamiento: ambulatorio u hospitalizado',
      cards: [
        { title: 'Leve a moderado', tag: 'Tolera líquidos, sin cetonuria', kind: 'pharma', items: [
          { t: 'Comidas pequeñas y frecuentes', d: 'Evitar olores, reposo; jengibre',
            say: 'Si tolera líquidos y no hay cetonuria, el manejo es ambulatorio: comidas pequeñas y frecuentes, evitar olores desencadenantes y reposo. El jengibre puede ayudar.' },
          { t: 'Doxilamina más piridoxina oral', d: 'Primera línea farmacológica',
            say: 'La primera línea farmacológica es doxilamina más piridoxina, que es vitamina B seis, por vía oral. Eso se pregunta tal cual.' },
          { t: 'Metoclopramida, dimenhidrinato, ondansetrón', d: 'Si no basta',
            say: 'Si no basta, se pasa a metoclopramida, dimenhidrinato u ondansetrón.' },
        ] },
        { title: 'Hospitalizar', tag: 'Hiperemesis', kind: 'alert', items: [
          { t: 'No tolera líquidos, cetonuria, baja > 5%', d: 'Deshidratación o alteración electrolítica',
            say: 'Se hospitaliza si no tolera líquidos, hay deshidratación, cetonuria, una baja de peso de más de cinco por ciento o alteraciones electrolíticas.' },
          { t: 'Suero con dextrosa y potasio', d: 'Antiemético endovenoso',
            say: 'Se hidrata con suero fisiológico o Ringer, con dextrosa y potasio según los exámenes, y se da un antiemético endovenoso.' },
          { t: 'Tiamina 100 mg EV antes o junto con la glucosa', d: 'Previene la encefalopatía de Wernicke',
            say: 'Y tiamina, cien miligramos endovenosos, antes o junto con la glucosa, para prevenir la encefalopatía de Wernicke: oftalmoplejía, ataxia y confusión. El sodio se corrige lento, por el riesgo de mielinólisis pontina.' },
        ] },
        { title: 'Complicaciones', tag: 'Refractaria', kind: 'criteria', items: [
          { t: 'Wernicke, Mallory-Weiss, trombosis', d: 'Menor peso fetal si es prolongada',
            say: 'Las complicaciones son la encefalopatía de Wernicke, el desgarro de Mallory-Weiss, la desnutrición, la trombosis venosa por deshidratación y, si es prolongada, un menor peso fetal. En los casos refractarios se usa nutrición enteral o parenteral. No se interrumpe el embarazo por hiperemesis, salvo casos excepcionales.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Gemelar: cuándo controlar y cuándo interrumpir',
      images: [
        { src: 'animaciones/ob-21/A1_gemelar_control_interrupcion.mp4', label: 'Línea de las semanas según la corionicidad', credit: 'Gráfico propio con los controles y las semanas del libro' },
      ],
      steps: [
        { note: 'La corionicidad decide el calendario',
          say: 'Mira la línea de las semanas. Los monocoriales se controlan con ecografía cada dos semanas desde las dieciséis, porque comparten placenta y pueden hacer una transfusión feto-fetal. Los bicoriales, cada cuatro semanas desde las veinte. Y la interrupción cambia: el bicorial biamniótico, a las treinta y ocho; el monocorial biamniótico, a las treinta y seis; el monoamniótico, a las treinta y dos a treinta y cuatro, por cesárea. Primero defines la corionicidad, y con eso lo sabes todo.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la consulta de la embarazada a la conducta.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Cardiopatía, gemelar e hiperemesis: conducta inicial',
      head: ['Situación', 'Conducta', 'Derivar'],
      rows: [
        { cells: ['Eisenmenger o HTP severa', 'Desaconsejar o interrumpir (Ley 21.030); anticoncepción', 'Siempre a centro terciario'],
          say: 'Hipertensión pulmonar severa o Eisenmenger: se desaconseja el embarazo, se ofrece la interrupción en las causales de la ley y se da anticoncepción segura. Siempre a centro terciario.' },
        { cells: ['Cardiopatía bien tolerada', 'Control habitual con eco; tratar anemia e HTA', 'Si aparece disnea o arritmia'],
          say: 'Una cardiopatía bien tolerada, como una CIA pequeña o un prolapso mitral, se controla de forma habitual, y se deriva si aparece disnea o arritmia.' },
        { cells: ['Gemelar bicorial', 'Signo lambda · interrupción a las 38 semanas', 'Todo embarazo múltiple a ARO'],
          say: 'Gemelar bicorial: signo lambda, y si no hay complicaciones, se interrumpe a las treinta y ocho semanas. Todo múltiple va a alto riesgo.' },
        { cells: ['Gemelar monocorial', 'Signo T · eco cada 2 semanas desde las 16 · 36 semanas', 'Monoamniótico: 32-34 semanas, cesárea'],
          say: 'Gemelar monocorial: signo T, ecografía cada dos semanas desde las dieciséis, y interrupción a las treinta y seis. El monoamniótico, a las treinta y dos a treinta y cuatro, por cesárea.' },
        { cells: ['Gemelo muerto en bicorial (2.º-3.er trimestre)', 'Bienestar fetal y pruebas de coagulación', 'No interrumpir de inmediato'],
          say: 'Un gemelo muerto en un bicorial en el segundo o tercer trimestre: se vigila con pruebas de bienestar fetal y de coagulación. En el monocorial el sobreviviente corre más riesgo.' },
        { cells: ['Náuseas y vómitos leves', 'Dieta fraccionada + doxilamina más piridoxina', 'Si no responde'],
          say: 'Náuseas y vómitos leves: dieta fraccionada y doxilamina más piridoxina. Si no responde, metoclopramida u ondansetrón.' },
        { cells: ['Hiperemesis gravídica', 'Hospitalizar; SF o Ringer con dextrosa y K; tiamina; antiemético EV', 'Si es refractaria o hay Wernicke'],
          say: 'Hiperemesis gravídica: hospitalizar, suero con dextrosa y potasio, tiamina antes o con la glucosa y antiemético endovenoso. La tiamina es lo que se olvida.' },
        { cells: ['Vómitos con hipertensión en la 2.ª mitad', 'Sospechar HELLP', 'No es hiperemesis'],
          say: 'Y vómitos con hipertensión en la segunda mitad del embarazo no son hiperemesis: piensa en HELLP.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Primigesta de 24 años, con 10 semanas de embarazo, consulta en el servicio de urgencia por vómitos de un mes de evolución, que aumentan, y que desde hace dos días le impiden tolerar líquidos. Ha bajado 6 kg desde antes del embarazo. Al examen: mucosas secas, FC 112 lpm, PA 100/60 mmHg. La orina muestra cetonas ++ y el potasio plasmático es 3,0 mEq/L. La ecografía muestra dos sacos gestacionales con membrana fina y con signo lambda.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Hospitalizar, hidratar con suero y dextrosa con potasio, tiamina y antiemético endovenoso, y derivar el gemelar bicorial a ARO' },
        { letter: 'B', text: 'Manejo ambulatorio con dieta fraccionada y doxilamina más piridoxina' },
        { letter: 'C', text: 'Interrumpir el embarazo por hiperemesis' },
        { letter: 'D', text: 'Suero glucosado sin tiamina para corregir la cetosis' },
        { letter: 'E', text: 'Solicitar angiografía pulmonar' },
      ],
      correct: 'A',
      explanation: 'Es una hiperemesis gravídica (vómitos incoercibles con pérdida de más de 5% del peso, deshidratación, cetonuria e hipokalemia) en un embarazo gemelar bicorial biamniótico, que explica los niveles altos de β-hCG. Corresponde hospitalizar, hidratar con suero fisiológico o Ringer con dextrosa y potasio, administrar tiamina antes o junto con la glucosa para prevenir la encefalopatía de Wernicke, y dar un antiemético endovenoso. Los antieméticos orales y la dieta fraccionada bastan solo cuando la paciente tolera líquidos y no tiene cetonuria. El gemelar bicorial se deriva a ARO para la vigilancia y la interrupción a las 38 semanas si no hay complicaciones.',
      say: {
        stem: 'Una primigesta de veinticuatro años, con diez semanas de embarazo, consulta por vómitos de un mes que aumentan, y que hace dos días no le dejan tolerar líquidos. Ha bajado seis kilos. Tiene mucosas secas, frecuencia cardíaca de ciento doce, presión de cien sobre sesenta, cetonas en la orina y potasio de tres. La ecografía muestra dos sacos con una membrana fina y signo lambda.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: hospitalizar con suero, dextrosa y potasio, tiamina y antiemético endovenoso, y derivar a alto riesgo; manejo ambulatorio con doxilamina y piridoxina; interrumpir el embarazo; suero glucosado sin tiamina; o una angiografía pulmonar. Piénsalo.',
        answer: 'Es la A. Es una hiperemesis gravídica, con baja de más de cinco por ciento del peso, cetonuria e hipokalemia, en un gemelar bicorial, que explica la hCG alta. Se hospitaliza, se hidrata con dextrosa y potasio, y se da tiamina antes o junto con la glucosa, para evitar el Wernicke. La B tienta, pero es para la paciente que tolera líquidos y no tiene cetonuria. Y la D es el error: la glucosa sin tiamina puede precipitar un Wernicke.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 59',
      stem: 'Una paciente de 39 años, cursando un embarazo gemelar bicorial biamniótico de 36 semanas, acude a control. Se encuentra en buenas condiciones generales, sin síntomas. Al examen tiene signos vitales normales y su ecografía obstétrica muestra al primer gemelo creciendo con una estimación de peso fetal de 2.850 gramos y al segundo gemelo con una estimación de 2.750 gramos, con líquido amniótico normal.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar control ecográfico en una semana' },
        { letter: 'B', text: 'Programar cesárea electiva a las 38 semanas' },
        { letter: 'C', text: 'Inducir el parto de inmediato' },
        { letter: 'D', text: 'Solicitar ecografía Doppler de arterias uterinas' },
        { letter: 'E', text: 'Realizar cesárea de urgencia' },
      ],
      correct: 'A',
      explanation: 'Un gemelar bicorial biamniótico sin complicaciones, con crecimiento concordante y bienestar conservado, se vigila y se interrumpe alrededor de las 38 semanas, por lo que a las 36 semanas se mantiene el control ecográfico. La vía del parto depende de la presentación del primer gemelo y de la amnionicidad (si el primero es cefálico y biamniótico, puede ser vaginal), no del embarazo gemelar en sí.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Una paciente de treinta y nueve años, con un embarazo gemelar bicorial biamniótico de treinta y seis semanas, está bien y sin síntomas. La ecografía muestra pesos fetales estimados de dos mil ochocientos cincuenta y dos mil setecientos cincuenta gramos, con líquido amniótico normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: control ecográfico en una semana; cesárea electiva a las treinta y ocho semanas; inducir de inmediato; Doppler de arterias uterinas; o cesárea de urgencia. Piénsalo.',
        answer: 'Es la A. Un bicorial biamniótico sin complicaciones se interrumpe alrededor de las treinta y ocho semanas, así que a las treinta y seis se sigue controlando. La B tienta porque pone una cesárea a las treinta y ocho, pero la vía depende de la presentación del primer gemelo: si es cefálico y biamniótico, puede ser un parto vaginal. Un monocorial biamniótico se habría interrumpido a las treinta y seis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 54',
      stem: 'Una paciente de 34 años, cursando su primer embarazo, gemelar, bicorial biamniótico, de 26 semanas de edad gestacional. Se controla con ecografía obstétrica, que visualiza un gemelo muerto, sin compromiso hemodinámico del gemelo sobreviviente.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar extracción del feto muerto' },
        { letter: 'B', text: 'Realizar controles periódicos con dímero D' },
        { letter: 'C', text: 'Interrumpir el embarazo' },
        { letter: 'D', text: 'Realizar cesárea a las 37 semanas' },
        { letter: 'E', text: 'Realizar controles periódicos con pruebas de coagulación' },
      ],
      correct: 'E',
      explanation: 'El manejo de un gemelo muerto depende de la edad gestacional y de la corionicidad. En el segundo y tercer trimestre, los monocoriales tienden a interrumpirse, porque si uno muere el otro también puede sufrir daño. En los bicoriales se puede observar, con vigilancia del bienestar fetal y controles periódicos de las pruebas de coagulación, por el riesgo de coagulopatía materna.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecinueve. Una paciente de treinta y cuatro años, en su primer embarazo, gemelar bicorial biamniótico de veintiséis semanas, tiene en la ecografía un gemelo muerto, sin compromiso hemodinámico del sobreviviente.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: extraer el feto muerto; controles con dímero D; interrumpir el embarazo; cesárea a las treinta y siete semanas; o controles con pruebas de coagulación. Piénsalo.',
        answer: 'Es la E. En un bicorial, con el sobreviviente estable, se observa, con vigilancia fetal y controles de coagulación, por el riesgo de coagulopatía. La C tienta, y sería la conducta en un monocorial, porque comparten vasos y el sobreviviente corre más riesgo. Por eso lo primero es siempre la corionicidad.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 177',
      stem: 'Una paciente de 18 años, cursando un embarazo de 11 semanas, presenta vómitos frecuentes desde inicios del embarazo, pero que han ido en aumento. Hace 24 horas ha empeorado, al punto que no ha podido ingerir líquidos adecuadamente, por lo que acude al servicio de urgencia.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Gastroparesia gestacional' },
        { letter: 'B', text: 'Cólico biliar' },
        { letter: 'C', text: 'Hepatitis' },
        { letter: 'D', text: 'Hiperemesis gravídica' },
        { letter: 'E', text: 'Síndrome de HELLP' },
      ],
      correct: 'D',
      explanation: 'Los vómitos persistentes del primer trimestre que impiden tolerar líquidos y llevan a deshidratación definen la hiperemesis gravídica, relacionada con los niveles altos de β-hCG. Se maneja con hospitalización, hidratación endovenosa, reposición de electrolitos, tiamina y antieméticos. El HELLP aparece en la segunda mitad del embarazo, con hipertensión, hemólisis y trombocitopenia.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Una paciente de dieciocho años, con un embarazo de once semanas, tiene vómitos frecuentes que han ido en aumento. Hace veinticuatro horas empeoró y no ha podido ingerir líquidos adecuadamente.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: gastroparesia gestacional; cólico biliar; hepatitis; hiperemesis gravídica; o síndrome de HELLP. Piénsalo.',
        answer: 'Es la D. Vómitos del primer trimestre que ya no permiten tolerar líquidos son una hiperemesis gravídica. La E tienta por los vómitos, pero el HELLP aparece en la segunda mitad del embarazo, con hipertensión, hemólisis y plaquetas bajas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2022 · Pregunta 179',
      stem: 'Una paciente de 24 años, primigesta de 12 semanas, consulta porque presenta náuseas y vómitos que afectan significativamente su calidad de vida.',
      question: '¿Cuál de los siguientes tratamientos es más adecuado para el manejo inicial de esta paciente?',
      options: [
        { letter: 'A', text: 'Corticoides orales' },
        { letter: 'B', text: 'Omeprazol oral' },
        { letter: 'C', text: 'Doxilamina más piridoxina oral' },
        { letter: 'D', text: 'Metoclopramida oral' },
        { letter: 'E', text: 'Ondansetrón oral' },
      ],
      correct: 'C',
      explanation: 'La primera línea de las náuseas y vómitos del embarazo que afectan la calidad de vida es la combinación de doxilamina (antihistamínico) más piridoxina (vitamina B6) por vía oral, junto con medidas dietéticas. La metoclopramida y el ondansetrón son segunda línea si no hay respuesta; los corticoides se reservan para casos refractarios y el omeprazol no trata el cuadro.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veintidós. Una paciente de veinticuatro años, primigesta de doce semanas, tiene náuseas y vómitos que afectan significativamente su calidad de vida.',
        question: '¿Cuál es el tratamiento más adecuado para el manejo inicial?',
        options: 'Las opciones: corticoides orales; omeprazol; doxilamina más piridoxina; metoclopramida; u ondansetrón. Piénsalo.',
        answer: 'Es la C. La primera línea es la doxilamina más piridoxina, por vía oral, con medidas de la dieta. La D y la E tientan porque son antieméticos conocidos, pero son de segunda línea, si no hay respuesta. Los corticoides se reservan para casos refractarios, y el omeprazol no trata este cuadro.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Una mujer de 28 años, con una cardiopatía conocida, consulta en control preconcepcional porque desea embarazarse.',
      question: '¿En cuál de las siguientes condiciones se debe desaconsejar el embarazo por su alta mortalidad materna?',
      options: [
        { letter: 'A', text: 'Comunicación interauricular reparada' },
        { letter: 'B', text: 'Prolapso de válvula mitral sin insuficiencia significativa' },
        { letter: 'C', text: 'Hipertensión arterial pulmonar severa (síndrome de Eisenmenger)' },
        { letter: 'D', text: 'Extrasistolía ventricular benigna' },
        { letter: 'E', text: 'Insuficiencia mitral leve' },
      ],
      correct: 'C',
      explanation: 'La hipertensión arterial pulmonar severa, incluido el síndrome de Eisenmenger, tiene una mortalidad materna de 30-50% (clase IV de la OMS modificada) y contraindica el embarazo. Las lesiones reparadas, el prolapso mitral sin insuficiencia y las insuficiencias valvulares leves se toleran bien, porque el embarazo disminuye la resistencia vascular sistémica.',
      say: {
        stem: 'Un caso representativo del banco, porque en cardiopatía y embarazo no hay una pregunta real. Una mujer de veintiocho años, con una cardiopatía conocida, consulta en un control preconcepcional porque desea embarazarse.',
        question: '¿En cuál de estas condiciones se debe desaconsejar el embarazo por su alta mortalidad materna?',
        options: 'Las opciones: una comunicación interauricular reparada; un prolapso mitral sin insuficiencia significativa; una hipertensión pulmonar severa, con Eisenmenger; una extrasistolía ventricular benigna; o una insuficiencia mitral leve. Piénsalo.',
        answer: 'Es la C. La hipertensión pulmonar severa, con Eisenmenger, tiene una mortalidad materna de treinta a cincuenta por ciento y contraindica el embarazo. Las otras se toleran bien: las lesiones reparadas, el prolapso sin insuficiencia significativa y las insuficiencias leves, porque en el embarazo baja la resistencia vascular sistémica.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: cardiopatía, embarazo múltiple e hiperemesis',
      cards: [
        { title: 'Cardiopatía', tag: 'Riesgo materno', kind: 'key', items: [
          { t: 'Eisenmenger o HTP severa: no embarazo', d: 'Mortalidad materna 30-50%',
            say: 'Cerremos con las reglas de oro. La hipertensión pulmonar severa o el Eisenmenger, con una mortalidad materna de treinta a cincuenta por ciento, contraindica el embarazo. Las lesiones reparadas y las insuficiencias leves se toleran bien.' },
          { t: 'Riesgo máximo: postparto inmediato', d: 'IECA, ARA II, amiodarona y estatinas: contraindicados',
            say: 'El mayor riesgo está en las primeras veinticuatro a setenta y dos horas del postparto. El parto vaginal es de elección. Y están contraindicados los IECA, los ARA dos, la amiodarona y las estatinas.' },
        ] },
        { title: 'Gemelar', tag: 'Corionicidad primero', kind: 'alert', items: [
          { t: 'Lambda: bicorial · T: monocorial', d: 'A las 11-14 semanas',
            say: 'En el gemelar, la corionicidad se define a las once a catorce semanas: signo lambda es bicorial y signo T es monocorial.' },
          { t: 'Interrumpir: 38 · 36 · 32-34', d: 'Bi-bi · mono-bi · mono-mono por cesárea',
            say: 'Se interrumpe a las treinta y ocho semanas el bicorial, a las treinta y seis el monocorial biamniótico, y a las treinta y dos a treinta y cuatro el monoamniótico, por cesárea. La vía depende del primer gemelo.' },
        ] },
        { title: 'Hiperemesis', tag: 'Lo que se pregunta', kind: 'alert', items: [
          { t: 'Leve: doxilamina más piridoxina', d: 'Metoclopramida u ondansetrón si no responde',
            say: 'Para náuseas y vómitos leves, doxilamina más piridoxina. En la hiperemesis, hospitalizas, hidratas con dextrosa y potasio y das tiamina antes o junto con la glucosa. Si te llevas una sola idea de hoy: en el gemelar, primero la corionicidad; en la cardiópata, primero la lesión; y en la hiperemesis, nunca glucosa sin tiamina. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Cardiopatía, gemelar e hiperemesis: conducta inicial',
    root: N('start', 'Embarazada con una de tres situaciones', 'Cardiopatía, gemelar o vómitos',
      'Una embarazada consulta por una cardiopatía conocida, por un gemelar o por vómitos. Primero defines cuál de las tres es, porque cada una tiene su propia pregunta clave.',
      ['Cardiopatía conocida o sospechada', N('q', '¿Qué lesión es?', 'Hipertensión pulmonar, estenosis o lesión leve',
        'Si es una cardiopatía, la pregunta clave es qué lesión es y cuán severa.',
        ['HTP severa, Eisenmenger, estenosis severa', N('refer', 'Desaconsejar o interrumpir', 'Ley 21.030; anticoncepción; centro terciario',
          'Con hipertensión pulmonar severa, Eisenmenger, estenosis severa sintomática, miocardiopatía con fracción menor de treinta por ciento o Marfan con aorta dilatada, se desaconseja el embarazo, se ofrece la interrupción en las causales de la ley y se deriva a un centro terciario.')],
        ['Lesión leve o reparada', N('ok', 'Control habitual con ecocardiograma', 'Parto vaginal; monitorizar 48-72 h',
          'Si la lesión es leve o está reparada, control habitual con ecocardiograma, tratando la anemia y la hipertensión. Parto vaginal con epidural y monitoreo de cuarenta y ocho a setenta y dos horas después.')],
      )],
      ['Embarazo gemelar', N('q', '¿Cuál es la corionicidad?', 'Eco a las 11-14 semanas: lambda o T',
        'Si es un gemelar, defines la corionicidad en la ecografía de las once a catorce semanas.',
        ['Signo lambda: bicorial', N('do', 'Control ARO, eco cada 4 semanas desde las 20', 'Interrupción a las 38 semanas',
          'El bicorial se controla con ecografía cada cuatro semanas desde las veinte, y sin complicaciones se interrumpe alrededor de las treinta y ocho semanas.')],
        ['Signo T: monocorial', N('refer', 'ARO, eco cada 2 semanas desde las 16', 'Biamniótico 36 semanas; monoamniótico 32-34, cesárea',
          'El monocorial se controla cada dos semanas desde las dieciséis, por el riesgo de transfusión feto-fetal. El biamniótico se interrumpe a las treinta y seis semanas, y el monoamniótico, a las treinta y dos a treinta y cuatro, por cesárea.')],
      )],
      ['Vómitos en el primer trimestre', N('q', '¿Tolera líquidos y no hay cetonuria?', 'Peso, cetonuria y electrolitos',
        'Si son vómitos del primer trimestre, descartas otras causas y te preguntas si tolera líquidos, si hay cetonuria y cuánto peso perdió.',
        ['Sí: leve a moderado', N('do', 'Ambulatorio', 'Dieta fraccionada + doxilamina más piridoxina',
          'Si tolera líquidos y no hay cetonuria, manejo ambulatorio con comidas pequeñas y frecuentes y doxilamina más piridoxina. Si no responde, metoclopramida u ondansetrón.')],
        ['No: hiperemesis', N('alert', 'Hospitalizar', 'Dextrosa y K, tiamina antes de la glucosa, antiemético EV',
          'Si no tolera líquidos, hay cetonuria, baja de más de cinco por ciento del peso o alteraciones electrolíticas, es hiperemesis: hospitalizas, hidratas con dextrosa y potasio, das tiamina antes o junto con la glucosa y un antiemético endovenoso.')],
      )],
    ),
  },
};
