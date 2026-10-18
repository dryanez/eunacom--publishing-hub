// Clase 17.16 (Psiquiatría) — guion docente escrito a mano (estándar Módulo 1), reescrito desde el tema del libro. Tier 2 del libro.
// Fuente clínica: books/scripts/dataset_psiquiatria.cjs (psiq-16). Códigos del Perfil: 5.01.2.003 Intoxicación por sustancias psicoactivas, 5.01.1.013 Dependencia de otras drogas,
// 5.01.1.011 Consumo perjudicial de alcohol y drogas, 5.01.1.035 Consumo perjudicial en niños y adolescentes, 5.01.3.011 Prevención, 5.01.4.002 Examen de orina para drogas de abuso
// y 1.10.2.002 Complicaciones neurológicas (books/data/v3_topic_codes.json).
// Preguntas reales (class_questions.cjs psiq-16 y --search "cocaína|pasta base|cannabis|benzodiacepina|flumazenil|opioide|naloxona|intoxicación|drogas|anfetamina|orina para droga"):
//   Diciembre 2025 P73 (consumo perjudicial de alcohol, precontemplación: entrevista motivacional; código de la clase), Diciembre 2025 P69 (síndrome adrenérgico por anfetaminas),
//   Agosto 2021 P44 (dolor torácico con supradesnivel tras cocaína: atenolol contraindicado), Julio 2019 P18 (clorpromazina con midriasis y taquicardia: anticolinérgico),
//   Julio 2024 P21 (coma, miosis y bradipnea: opioides).
// No usadas por repetir o salirse del libro: Diciembre 2024 P43 (enunciado de una línea, mismo tema que Agosto 2021 P44), Julio 2025 P139 (cocaína más carbamazepina, interacción no incluida en el libro),
//   Diciembre 2025 P94 (priapismo por cocaína, es de urología), Diciembre 2017 P113 (riesgo de la marihuana en adolescentes, marcada «pregunta difícil» y sin respaldo en el libro),
//   Julio 2019 P149 (dejar de fumar: tabaco, fuera del libro de esta clase), Diciembre 2018 P38 y Agosto 2021 P14 (distonía por haloperidol en pasta base: clase de esquizofrenia),
//   Diciembre 2025 P10 y Julio 2024 P41 (monóxido de carbono).
// Las preguntas del libro tienen etiqueta «Banco Oficial AEE» sin fecha: no se usan porque hay reales; el caso clínico es la viñeta del libro.
// Imágenes: ninguna. No hay foto verificada de intoxicaciones ni de cannabis en atlas_fotos_verificadas.json ni en classes/media/biblioteca.
// Animación: gráfico solo de código (psiq_nuevas.html?v=toxindromes): tablero de los cuatro toxíndromes con pupila, signos vitales y antídoto, y la advertencia de la cocaína.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'psiq-16',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Toxíndromes, cocaína, benzodiacepinas y cannabis: reconocer el síndrome, dar el antídoto correcto y no usar el fármaco prohibido',
      say: 'Bienvenido. Hoy vemos las urgencias por sustancias. El enfoque es siempre el mismo: reconocer el toxíndrome por los signos vitales y las pupilas, y de ahí sale el antídoto o la conducta. Hay dos errores que el examen castiga: dar un betabloqueador en el dolor de pecho por cocaína, y dar flumazenil a quien usa benzodiacepinas crónicamente. Después veremos el consumo perjudicial, la dependencia y el examen de orina. Partamos por los cuatro toxíndromes.',
    },

    {
      type: 'table',
      kicker: 'Toxíndromes mayores',
      title: 'Reconocerlos en urgencia',
      head: ['Toxíndrome', 'Drogas', 'Signos y pupilas', 'Conducta'],
      rows: [
        { cells: ['Simpaticomimético', 'Cocaína, pasta base, anfetaminas, éxtasis', 'Taquicardia, HTA, hipertermia, midriasis', 'Benzodiacepinas EV'],
          say: 'El simpaticomimético es el de la cocaína, la pasta base, las anfetaminas y el éxtasis: taquicardia, hipertensión severa, hipertermia, diaforesis, agitación y midriasis. El tratamiento de base son las benzodiacepinas endovenosas.' },
        { cells: ['Sedante-hipnótico', 'Benzodiacepinas, barbitúricos, zolpidem', 'Hipotensión leve, bradipnea, pupilas normales', 'Soporte ventilatorio'],
          say: 'El sedante-hipnótico es el de las benzodiacepinas, los barbitúricos y el zolpidem: sopor, ataxia, disartria, hipotensión leve y pupilas normales. Se maneja con soporte ventilatorio, y el flumazenil queda muy restringido.' },
        { cells: ['Opioide', 'Morfina, heroína, fentanilo, metadona', 'Bradipnea severa, hipotensión, miosis puntiforme', 'Naloxona EV'],
          say: 'El opioide es la tríada de coma, bradipnea severa y miosis puntiforme. Su antídoto es la naloxona.' },
        { cells: ['Anticolinérgico', 'Atropina, tricíclicos, antihistamínicos', 'Taquicardia, hipertermia, midriasis, piel seca', 'Soporte'],
          say: 'Y el anticolinérgico, que dan la atropina, los antidepresivos tricíclicos y los antihistamínicos. Tiene taquicardia, hipertermia, midriasis arreactiva y piel seca y roja. La frase para recordarlo: rojo como betarraga, seco como hueso, loco como cabra.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Cocaína y pasta base',
      title: 'Por qué la cocaína infarta',
      nodes: [
        { id: 'c', col: 0, row: 2, k: 'cause', t: 'Cocaína o pasta base', s: 'Esnifada, fumada o inyectada' },
        { id: 'r', col: 1, row: 0, k: 'mech', t: 'Bloquea la recaptación', s: 'Dopamina, noradrenalina, serotonina' },
        { id: 's', col: 3, row: 0, k: 'effect', t: 'Síndrome simpaticomimético', s: 'HTA, taquicardia, midriasis' },
        { id: 'n', col: 1, row: 4, k: 'mech', t: 'Bloquea canales de sodio', s: 'Anestésico local y proarrítmico' },
        { id: 'a', col: 3, row: 4, k: 'risk', t: 'Arritmias', s: 'Efecto anestésico local' },
        { id: 'i', col: 4, row: 2, k: 'alert', t: 'Infarto, ACV, disección', s: 'Vasoespasmo y agregación plaquetaria' },
      ],
      edges: [
        { from: 'c', to: 'r' }, { from: 'c', to: 'n' }, { from: 'r', to: 's' },
        { from: 'n', to: 'a' }, { from: 's', to: 'i' }, { from: 'a', to: 'i' },
      ],
      steps: [
        { show: ['c'], note: 'La droga y su vía',
          say: 'La cocaína y la pasta base, que es un derivado fumado, tienen un doble efecto sobre el organismo. Veamos cada uno.' },
        { show: ['r', 's'], note: 'Exceso de catecolaminas',
          say: 'Primero, bloquean la recaptación presináptica de dopamina, noradrenalina y serotonina. Queda un exceso de catecolaminas, y eso es el síndrome simpaticomimético: hipertensión, taquicardia, midriasis, diaforesis, agitación y, a veces, una psicosis paranoide transitoria con ideas de perjuicio.' },
        { show: ['n', 'a'], note: 'Efecto anestésico local sobre el corazón',
          say: 'Segundo, bloquean los canales de sodio del miocardio. Es un efecto de anestésico local que además favorece las arritmias.' },
        { show: ['i'], note: 'Complicaciones mayores',
          say: 'El resultado son las complicaciones mayores: infarto agudo por vasoespasmo coronario y agregación plaquetaria, accidente cerebrovascular, disección aórtica y rabdomiólisis. Un joven con dolor de pecho tras una fiesta es cocaína hasta que se demuestre lo contrario.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Dolor torácico por cocaína',
      title: 'Benzodiacepina sí, betabloqueador no',
      cards: [
        { title: 'Qué se hace', tag: 'Primera línea', kind: 'pharma', items: [
          { t: 'Benzodiacepinas EV', d: 'Diazepam 5-10 mg o lorazepam 2-4 mg',
            say: 'Ante el dolor torácico por cocaína, lo primero son las benzodiacepinas endovenosas, diazepam cinco a diez miligramos o lorazepam dos a cuatro miligramos. Bajan el tono simpático central, la presión y la frecuencia cardíaca.' },
          { t: 'Aspirina y nitroglicerina', d: 'AAS 250 mg; nitrato sublingual',
            say: 'Se suman aspirina, doscientos cincuenta miligramos, y nitroglicerina sublingual, para dilatar la coronaria.' },
          { t: 'Hemodinamia si no cede', d: 'Dolor o isquemia persistente',
            say: 'Y si el dolor o la isquemia no ceden con tratamiento médico, el paciente va a hemodinamia.' },
        ] },
        { title: 'La contraindicación mortal', tag: 'Alfa sin oposición', kind: 'alert', items: [
          { t: 'Betabloqueadores puros: propranolol, atenolol', d: 'Vasoespasmo y crisis hipertensiva',
            say: 'La contraindicación mortal son los betabloqueadores puros: propranolol, atenolol y metoprolol. Si bloqueas los receptores beta dos, que dilatan, la noradrenalina circulante estimula sin oposición los receptores alfa uno. El resultado es un vasoespasmo coronario masivo, una crisis hipertensiva y un paro.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Benzodiacepinas',
      title: 'Intoxicación, flumazenil y abstinencia',
      cards: [
        { title: 'Intoxicación aguda', tag: 'Sedante-hipnótico', kind: 'key', items: [
          { t: 'Sopor, ataxia, disartria, nistagmo', d: 'Pupilas normales; signos vitales estables',
            say: 'La intoxicación por benzodiacepinas produce somnolencia, ataxia, disartria, nistagmo y depresión de conciencia, con pupilas normales y signos vitales estables. La depresión respiratoria es rara si es monoterapia oral, pero grave si se combina con alcohol u opioides.' },
          { t: 'Flumazenil: muy restringido', d: 'Prohibido en uso crónico y con tricíclicos',
            say: 'El flumazenil, antagonista del receptor GABA-A, está contraindicado en el consumidor crónico de benzodiacepinas y cuando se ingirieron antidepresivos tricíclicos, porque precipita una abstinencia severa con convulsiones y un status epiléptico refractario. En el usuario habitual, se da soporte ventilatorio e hidratación.' },
        ] },
        { title: 'Abstinencia', tag: 'Reinstalar y bajar', kind: 'alert', items: [
          { t: 'Rebote, insomnio, temblor, convulsiones', d: 'Sobre todo con alprazolam',
            say: 'La abstinencia de benzodiacepinas, sobre todo de las de vida media corta como el alprazolam, da ansiedad de rebote severa, insomnio, temblor, hiperestesia, despersonalización y convulsiones.' },
          { t: 'Reinstalar una de vida media larga', d: 'Diazepam o clonazepam; bajar 10-25 % por semana',
            say: 'Se trata reinstalando una de vida media larga, diazepam o clonazepam, y programando una reducción gradual de diez a veinticinco por ciento por semana.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cannabis',
      title: 'Intoxicación y síndrome de hiperemesis',
      cards: [
        { title: 'Intoxicación aguda', tag: 'Lo que se ve', kind: 'criteria', items: [
          { t: 'Euforia, memoria alterada, apetito', d: 'Hiperemia conjuntival y taquicardia',
            say: 'La intoxicación por cannabis parte con euforia y relajación, alteración de la memoria reciente, distorsión del tiempo y del espacio, aumento del apetito, taquicardia e hiperemia conjuntival bilateral, que es muy característica.' },
          { t: 'Angustia o brote psicótico', d: 'Con dosis altas o labilidad',
            say: 'En personas lábiles o con dosis altas puede desencadenar una crisis de angustia o un brote psicótico, la psicosis inducida por cannabis.' },
        ] },
        { title: 'Hiperemesis cannabinoide', tag: 'Paradójica', kind: 'alert', items: [
          { t: 'Vómitos cíclicos en consumidor diario', d: 'Más de un año de uso diario',
            say: 'El síndrome de hiperemesis cannabinoide aparece en consumidores crónicos pesados, con más de un año de uso diario. Son episodios cíclicos de náuseas incoercibles, vómitos explosivos y dolor epigástrico.' },
          { t: 'Baños calientes: el signo', d: 'Único tratamiento: dejar el cannabis',
            say: 'El signo distintivo es la compulsión por bañarse en agua muy caliente, que alivia los síntomas. El único tratamiento definitivo es suspender el cannabis para siempre.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Otras sustancias',
      title: 'Opioides, estimulantes, alucinógenos e inhalantes',
      cards: [
        { title: 'Opioides', tag: 'Naloxona', kind: 'pharma', items: [
          { t: 'Coma, miosis y depresión respiratoria', d: 'Naloxona 0,4-2 mg IV, IM o intranasal',
            say: 'El opioide se reconoce por la tríada de coma, miosis y depresión respiratoria. Se ventila y se da naloxona, cero coma cuatro a dos miligramos endovenosa, intramuscular o intranasal, repetible. Hay que observar mucho rato, porque su efecto dura menos que el del opioide.' },
          { t: 'Abstinencia: molesta, rara vez grave', d: 'Clonidina; buprenorfina o metadona',
            say: 'La abstinencia de opioides tiene bostezos, lagrimeo, rinorrea, midriasis, piloerección, mialgias y diarrea, sin alterar la conciencia. Es muy molesta, pero rara vez grave. Se da soporte, clonidina para los síntomas autonómicos y sustitución con buprenorfina o metadona en un programa especializado.' },
        ] },
        { title: 'Otros', tag: 'Reconocer y contener', kind: 'key', items: [
          { t: 'Anfetaminas y éxtasis', d: 'Hipertermia e hiponatremia',
            say: 'Las anfetaminas y el éxtasis dan un cuadro simpaticomimético, con hipertermia e hiponatremia.' },
          { t: 'Alucinógenos e inhalantes', d: 'Contención verbal; arritmias',
            say: 'Los alucinógenos, como el LSD y la ketamina, producen alucinaciones y despersonalización, y se manejan con contención verbal. Los inhalantes dan una ebriedad breve, con riesgo de arritmia y de daño neurológico.' },
          { t: 'Alcohol: glicemia y tiamina', d: 'Depresión respiratoria si es excesivo',
            say: 'Y el alcohol en exceso causa ataxia, desinhibición y depresión respiratoria: se pide la glicemia y se da tiamina.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Consumo perjudicial y dependencia',
      title: 'Cómo se clasifica y cómo se maneja',
      cards: [
        { title: 'Definiciones', tag: 'CIE-10 y DSM-5', kind: 'criteria', items: [
          { t: 'Perjudicial: daño sin dependencia', d: 'Físico o mental',
            say: 'El consumo perjudicial es el uso que ya produjo un daño físico o mental, sin cumplir criterios de dependencia.' },
          { t: 'Dependencia: 3 de 6 criterios en un año', d: 'Deseo, control, abstinencia, tolerancia, abandono, persistencia',
            say: 'La dependencia exige tres o más de seis criterios en el último año: deseo intenso, dificultad para controlar, abstinencia, tolerancia, abandono de otros intereses y persistencia pese al daño.' },
          { t: 'DSM-5: leve, moderado, grave', d: '2-3, 4-5, 6 o más criterios',
            say: 'El DSM cinco lo une como trastorno por uso de sustancias: leve con dos o tres criterios, moderado con cuatro o cinco, y grave con seis o más.' },
        ] },
        { title: 'Conducta', tag: 'Nivel completo', kind: 'key', items: [
          { t: 'Tamizaje: ASSIST, AUDIT, CRAFFT', d: 'Drogas, alcohol, adolescentes',
            say: 'El tamizaje se hace con ASSIST para drogas, AUDIT para alcohol y CRAFFT en adolescentes.' },
          { t: 'Entrevista motivacional según la etapa', d: 'Intervención breve en el consumo de riesgo',
            say: 'La conducta parte con entrevista motivacional según la etapa del cambio, e intervención breve cuando el consumo es de riesgo. Si la persona no ve el problema, los fármacos y la psicoterapia no sirven todavía.' },
          { t: 'Derivar en dependencia grave', d: 'La recaída es parte del curso',
            say: 'Se deriva a un centro de tratamiento cuando hay dependencia grave, comorbilidad psiquiátrica o fracaso ambulatorio. Se ofrece reducción de daños, y la recaída es parte del curso de la enfermedad, no un fracaso.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Adolescentes',
      title: 'El consumo en niños y adolescentes',
      cards: [
        { title: 'Qué considerar', tag: 'Edad y riesgo', kind: 'alert', items: [
          { t: 'Alcohol, tabaco y cannabis', d: 'Inicio precoz: más dependencia',
            say: 'En niños y adolescentes las sustancias más usadas son el alcohol, el tabaco y el cannabis. Mientras más precoz el inicio, mayor el riesgo de dependencia y de comorbilidad: depresión, TDAH y trastorno de conducta.' },
          { t: 'CRAFFT: 2 o más sí', d: 'Seis preguntas; alto riesgo',
            say: 'El CRAFFT tiene seis preguntas, y dos o más respuestas afirmativas indican alto riesgo.' },
        ] },
        { title: 'Cómo se maneja', tag: 'Confidencialidad y familia', kind: 'key', items: [
          { t: 'Confidencialidad, con límite de seguridad', d: 'Terapia familiar',
            say: 'Se mantiene la confidencialidad, con el límite de la seguridad, se involucra a la familia con terapia familiar y se evalúan el rendimiento escolar y la comorbilidad psiquiátrica.' },
          { t: 'GES: menores de 20 años', d: 'Programas de tratamiento',
            say: 'Y se deriva a los programas de tratamiento del GES para menores de veinte años cuando hay dependencia o consumo perjudicial.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Laboratorio y prevención',
      title: 'Examen de orina y niveles de prevención',
      cards: [
        { title: 'Orina para drogas', tag: 'Inmunoensayo cualitativo', kind: 'criteria', items: [
          { t: 'Cuánto tiempo detecta', d: 'Cocaína 2-4 días; cannabis 3-7 y hasta un mes',
            say: 'El examen de orina es un inmunoensayo cualitativo que detecta el metabolito. La cocaína se detecta dos a cuatro días; el cannabis, tres a siete días en el uso ocasional y hasta un mes en el crónico; las benzodiacepinas, dos a cinco días, con falsos negativos para clonazepam y lorazepam.' },
          { t: 'Falsos positivos: confirmar', d: 'Cromatografía y espectrometría',
            say: 'Los falsos positivos, como la pseudoefedrina para anfetaminas o las semillas de amapola para opioides, obligan a confirmar con cromatografía y espectrometría de masas.' },
          { t: 'Positivo es exposición, no dependencia', d: 'Negativo no la excluye',
            say: 'Un resultado positivo indica exposición, no intoxicación ni dependencia, y uno negativo no la excluye. Se pide con consentimiento, salvo en urgencia.' },
        ] },
        { title: 'Prevención', tag: 'Niveles', kind: 'key', items: [
          { t: 'Primaria: universal, selectiva, indicada', d: 'Evitar el inicio',
            say: 'La prevención primaria evita el inicio. Es universal para toda la población, con impuestos, restricción de venta y programas escolares; selectiva para grupos de riesgo, como hijos de consumidores; e indicada para el consumo incipiente.' },
          { t: 'Factores protectores', d: 'Vínculo familiar, apego escolar',
            say: 'Protegen el vínculo familiar, el apego escolar y las habilidades sociales. Aumentan el riesgo el inicio precoz, el consumo entre pares y la disponibilidad.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Los cuatro toxíndromes de un vistazo',
      images: [
        { src: 'animaciones/psiq-16/A1_toxindromes.mp4', label: 'Pupilas, signos y antídoto', credit: 'Gráfico y animación propios' },
      ],
      steps: [
        { note: 'Pupila y signos vitales reconocen el toxíndrome',
          say: 'Mira cómo se arma el tablero. Con las pupilas dilatadas y la taquicardia, es simpaticomimético o anticolinérgico, y se separan por la piel: sudorosa en uno, seca en el otro. Con las pupilas puntiformes y respiración lenta, es opioide, con naloxona. Con pupilas normales y sopor, son las benzodiacepinas. Y al final se enciende la advertencia: en la cocaína, benzodiacepina, jamás un betabloqueador.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del paciente intoxicado a la conducta, según sus pupilas y sus signos.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Sustancias: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Dolor torácico tras cocaína', 'Benzodiacepina, aspirina, nitrato', 'Atenolol o propranolol'],
          say: 'Dolor de pecho tras cocaína: benzodiacepina, aspirina y nitroglicerina. El atenolol o el propranolol son el error mortal, por el efecto alfa sin oposición.' },
        { cells: ['Midriasis, HTA, fiebre, sudor', 'Síndrome adrenérgico: anfetaminas o cocaína', 'Anticolinérgico'],
          say: 'Midriasis, hipertensión, fiebre y sudor profuso: síndrome adrenérgico, por anfetaminas o cocaína. Con piel seca y retención urinaria, sería anticolinérgico.' },
        { cells: ['Sobredosis de benzodiacepina en usuario habitual', 'Soporte ventilatorio', 'Flumazenil'],
          say: 'Sobredosis de benzodiacepinas en un usuario habitual: soporte ventilatorio. El flumazenil puede precipitar convulsiones.' },
        { cells: ['Coma, miosis y bradipnea', 'Ventilar y naloxona', 'Flumazenil o benzodiacepina'],
          say: 'Coma, miosis y bradipnea: se ventila y se da naloxona. Flumazenil es de otro toxíndrome.' },
        { cells: ['Vómitos cíclicos y baños calientes', 'Hiperemesis cannabinoide', 'Gastroenteritis o pancreatitis'],
          say: 'Vómitos cíclicos con alivio en baños muy calientes en un consumidor diario de cannabis: hiperemesis cannabinoide. El tratamiento es dejar el cannabis.' },
        { cells: ['Consumo perjudicial sin conciencia', 'Entrevista motivacional', 'Disulfiram o psicoterapia de entrada'],
          say: 'Consumo perjudicial sin conciencia de problema: entrevista motivacional. Disulfiram o psicoterapia sirven cuando ya hay intención de cambiar.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 25 años llevado por sus amigos a urgencias tras consumir cocaína y alcohol en una fiesta. Tiene dolor precordial opresivo intenso, irradiado a la mandíbula y al brazo izquierdo, de 45 minutos, con sensación de muerte inminente. Está muy agitado, sudoroso, pálido, con midriasis bilateral marcada e hiperemia conjuntival. PA 205/115 mmHg, FC 135 lpm, SatO2 98 %. El electrocardiograma muestra taquicardia sinusal con infradesnivel del ST de 2 mm en V2 a V5. Un interno propone iniciar propranolol endovenoso para bajar la frecuencia y la presión.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Propranolol EV para controlar la frecuencia cardíaca y la presión' },
        { letter: 'B', text: 'Rechazar el betabloqueador; diazepam o lorazepam EV, aspirina y nitroglicerina; hemodinamia si no cede' },
        { letter: 'C', text: 'Solo observación hasta que pase el efecto de la cocaína' },
        { letter: 'D', text: 'Flumazenil EV para revertir la intoxicación' },
        { letter: 'E', text: 'Haloperidol IM para la agitación y alta con control' },
      ],
      correct: 'B',
      explanation: 'Síndrome coronario agudo por vasoespasmo e isquemia inducidos por cocaína (síndrome simpaticomimético severo). Los betabloqueadores puros están contraindicados: bloquean los receptores beta-2 vasodilatadores y dejan sin oposición el efecto alfa-1 de las catecolaminas. Se usan benzodiacepinas EV de primera línea, aspirina 250 mg y nitroglicerina; si no cede el dolor o la isquemia, se envía a hemodinamia.',
      say: {
        stem: 'Un hombre de veinticinco años llega a urgencias tras consumir cocaína y alcohol en una fiesta. Tiene dolor opresivo en el pecho desde hace cuarenta y cinco minutos, con sensación de muerte, muy agitado, sudoroso, con las pupilas muy dilatadas. La presión es de doscientos cinco sobre ciento quince, el pulso de ciento treinta y cinco, y el electrocardiograma muestra infradesnivel del ST en las derivaciones anteriores. Un interno propone propranolol endovenoso.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: propranolol; rechazar el betabloqueador y dar benzodiacepina, aspirina y nitroglicerina; solo observar; flumazenil; o haloperidol y alta. Piénsalo.',
        answer: 'Es la B. Es un síndrome coronario por cocaína. Se rechaza el betabloqueador, que deja el efecto alfa de la noradrenalina sin oposición y puede producir un vasoespasmo coronario fatal. Se dan benzodiacepinas por vía endovenosa, aspirina y nitroglicerina, y hemodinamia si el dolor no cede. La A es la trampa del interno: frenar la taquicardia suena lógico, pero es un error mortal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 44',
      stem: 'Un paciente de 23 años consulta en el servicio de urgencia, por dolor torácico de 2 horas de evolución, intenso, asociado a diaforesis y palpitaciones, que inició algunos minutos después de haber inhalado cocaína. Al examen físico presenta FC: 120x’, PA: 190/120 mmHg, ritmo regular en dos tonos, sin soplos. Su electrocardiograma muestra supradesnivel de segmento ST en las derivaciones de la pared anterior.',
      question: '¿Qué fármaco está contraindicado en el manejo de este paciente?',
      options: [
        { letter: 'A', text: 'Estreptoquinasa' },
        { letter: 'B', text: 'Clopidogrel' },
        { letter: 'C', text: 'Nitroglicerina' },
        { letter: 'D', text: 'Atenolol' },
        { letter: 'E', text: 'Diazepam' },
      ],
      correct: 'D',
      explanation: 'El betabloqueo está contraindicado en la intoxicación por cocaína, porque exacerba su acción alfa-adrenérgica y puede producir crisis hipertensivas y muerte. Lo que sí está indicado son las benzodiacepinas, junto con aspirina y nitroglicerina.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Un joven de veintitrés años consulta por dolor torácico intenso con sudor y palpitaciones, que empezó minutos después de inhalar cocaína. Tiene taquicardia, presión de ciento noventa sobre ciento veinte y supradesnivel del ST en la pared anterior.',
        question: '¿Qué fármaco está contraindicado?',
        options: 'Las opciones: estreptoquinasa; clopidogrel; nitroglicerina; atenolol; o diazepam. Piénsalo.',
        answer: 'Es la D. Tras la cocaína, el betabloqueador deja sin oposición la acción alfa de las catecolaminas y puede empeorar el vasoespasmo y la hipertensión. La E es justamente el fármaco indicado, y la nitroglicerina también. La trampa es creer que, como hay infarto, todos los fármacos del infarto sirven.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 69',
      stem: 'Un hombre encuentra a su pareja en su casa desorientada y con una actitud agresiva y agitada, por lo que la lleva al servicio de urgencia. Al examen físico presenta sudoración profusa y sus signos vitales muestran presión arterial 170/110 mmHg, frecuencia cardíaca 160 por minuto y temperatura 38,1 °C. En el examen neurológico se aprecia desorientada en tiempo y espacio, con agitación psicomotora y pupilas midriáticas isocóricas.',
      question: '¿Qué sustancia ingirió con mayor probabilidad?',
      options: [
        { letter: 'A', text: 'Barbitúricos' },
        { letter: 'B', text: 'Canabinoides' },
        { letter: 'C', text: 'Anfetaminas' },
        { letter: 'D', text: 'Órganofosforados' },
        { letter: 'E', text: 'Opiáceos' },
      ],
      correct: 'C',
      explanation: 'Síndrome adrenérgico: midriasis, taquicardia, hipertensión, agitación, sudoración e hipertermia. La cocaína y las anfetaminas son las causas clásicas. Los opiáceos y los organofosforados dan miosis; los barbitúricos, sopor con pupilas normales.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Una mujer es llevada a urgencia, desorientada, agresiva y agitada, con sudoración profusa, presión de ciento setenta sobre ciento diez, pulso de ciento sesenta, treinta y ocho coma uno de temperatura y pupilas dilatadas.',
        question: '¿Qué sustancia ingirió con mayor probabilidad?',
        options: 'Las opciones: barbitúricos; cannabinoides; anfetaminas; organofosforados; u opiáceos. Piénsalo.',
        answer: 'Es la C. Pupilas dilatadas, taquicardia, hipertensión, fiebre y sudor es un síndrome adrenérgico, el de las anfetaminas y la cocaína. La B tienta porque el cannabis también da taquicardia, pero no produce esta hipertermia ni este grado de desorientación. Y opiáceos y organofosforados dan pupilas pequeñas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 21',
      stem: 'Una mujer de 28 años, trabajadora del área de la salud, es encontrada inconsciente por su pareja en el baño de su casa. Al examen físico, está comprometida de conciencia, tiene frecuencia cardíaca de 60 por minuto, frecuencia respiratoria de 8 por minuto y se observan pupilas mióticas, sin focalidad neurológica.',
      question: '¿Qué tipo de fármaco es el responsable del cuadro de intoxicación de esta paciente?',
      options: [
        { letter: 'A', text: 'Benzodiacepinas' },
        { letter: 'B', text: 'Barbitúricos' },
        { letter: 'C', text: 'Antidepresivos tricíclicos' },
        { letter: 'D', text: 'Opioides' },
        { letter: 'E', text: 'Hipoglicemiantes' },
      ],
      correct: 'D',
      explanation: 'Síndrome opioide: compromiso de conciencia, depresión respiratoria y miosis puntiforme. Las benzodiacepinas también deprimen la conciencia y la respiración, pero sin alteración pupilar significativa; los tricíclicos dan midriasis. El antídoto es la naloxona.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Una mujer de veintiocho años, que trabaja en salud, es encontrada inconsciente en el baño. Tiene pulso de sesenta, apenas ocho respiraciones por minuto, pupilas mióticas y no hay focalidad neurológica.',
        question: '¿Qué tipo de fármaco es el responsable?',
        options: 'Las opciones: benzodiacepinas; barbitúricos; antidepresivos tricíclicos; opioides; o hipoglicemiantes. Piénsalo.',
        answer: 'Es la D. Coma, bradipnea y miosis son la tríada del opioide, y se trata con ventilación y naloxona. La A tienta porque también deprime la conciencia y la respiración, pero con pupilas de tamaño normal. Los tricíclicos, en cambio, dilatan la pupila.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 18',
      stem: 'Un paciente de 23 años, con retraso mental severo, en tratamiento con clorpromacina, sube la dosis de este medicamente de 100 a 300 mg al día, evolucionando con agitación psicomotora, confusión, boca seca, palpitaciones y malestar general. Su examen físico muestra FC: 115x’, PA: 130/90 mmHg, pupilas con midriasis.',
      question: 'El diagnóstico más probable es un síndrome:',
      options: [
        { letter: 'A', text: 'Anticolinérgico' },
        { letter: 'B', text: 'Adrenérgico' },
        { letter: 'C', text: 'Serotoninérgico' },
        { letter: 'D', text: 'Colinérgico' },
        { letter: 'E', text: 'Neuroléptico maligno' },
      ],
      correct: 'A',
      explanation: 'Síndrome anticolinérgico clásico: boca seca, midriasis, taquicardia, agitación y confusión tras aumentar un antipsicótico de baja potencia. El adrenérgico tiene sudor y hipertensión marcada; el neuroléptico maligno, rigidez e hipertermia.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecinueve. Un paciente de veintitrés años con retraso mental severo sube la clorpromazina de cien a trescientos miligramos al día. Evoluciona con agitación, confusión, boca seca, palpitaciones, taquicardia y pupilas dilatadas.',
        question: '¿El diagnóstico más probable es un síndrome...?',
        options: 'Las opciones: anticolinérgico; adrenérgico; serotoninérgico; colinérgico; o neuroléptico maligno. Piénsalo.',
        answer: 'Es la A. Boca seca, midriasis, taquicardia, confusión y agitación después de subir una fenotiazina: es un anticolinérgico. La B tienta porque también hay midriasis y taquicardia, pero el adrenérgico se acompaña de sudor profuso, y aquí la boca está seca. La E exigiría fiebre alta y rigidez.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 73',
      stem: 'Una paciente de 35 años es traída al servicio de urgencia debido a que, luego del consumo de alcohol en una fiesta, presentó una actitud agresiva peleando con otros invitados, a quienes arrojó vasos de vidrio, por lo que fue retirada del lugar. Refiere que consume alcohol de manera esporádica, habitualmente solo durante los fines de semana, y que lo hace como una forma de distenderse de su alta carga laboral. En una oportunidad fue detenida por manejar en estado de ebriedad, sin embargo, ella no considera que ello sea un problema.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar disulfiram vía oral' },
        { letter: 'B', text: 'Indicar benzodiacepinas vía oral' },
        { letter: 'C', text: 'Iniciar bupropión vía oral' },
        { letter: 'D', text: 'Realizar entrevista motivacional' },
        { letter: 'E', text: 'Derivar para psicoterapia cognitivo-conductual' },
      ],
      correct: 'D',
      explanation: 'Consumo perjudicial de alcohol con escasa conciencia del problema: está en etapa precontemplativa, por lo que primero se trabaja la motivación al cambio con entrevista motivacional. Los fármacos y la psicoterapia no sirven si no hay intención de cambiar, y las benzodiacepinas no están indicadas sin síndrome de abstinencia.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Una mujer de treinta y cinco años llega a urgencia tras pelear en una fiesta bajo los efectos del alcohol. Bebe de forma esporádica, los fines de semana, para distenderse. Una vez la detuvieron por manejar en estado de ebriedad, pero ella no cree que sea un problema.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: disulfiram; benzodiacepinas orales; bupropión; entrevista motivacional; o psicoterapia cognitivo-conductual. Piénsalo.',
        answer: 'Es la D. Ya hay daño, con la agresión y el manejo en ebriedad, y no hay conciencia de problema: está en precontemplación. Lo primero es motivar el cambio con entrevista motivacional. Las otras opciones suponen que la persona ya quiere cambiar: el disulfiram y la psicoterapia no sirven si no hay intención, y las benzodiacepinas no tienen indicación sin abstinencia.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: sustancias',
      cards: [
        { title: 'Reconocer', tag: 'Toxíndrome', kind: 'key', items: [
          { t: 'Pupila y signos vitales', d: 'Midriasis simpática; miosis, opioide',
            say: 'Cerremos con las reglas de oro. El toxíndrome se reconoce por las pupilas y los signos vitales: midriasis con taquicardia e hipertensión es simpaticomimético, y miosis con bradipnea es opioide.' },
          { t: 'Piel seca: anticolinérgico', d: 'Piel sudorosa: simpaticomimético',
            say: 'Y la piel separa el anticolinérgico, que está seco, del simpaticomimético, que suda.' },
        ] },
        { title: 'Conducta', tag: 'Lo que se pregunta', kind: 'alert', items: [
          { t: 'Cocaína: benzodiacepina, nunca betabloqueador', d: 'Más aspirina y nitrato',
            say: 'En el dolor torácico por cocaína, benzodiacepinas, aspirina y nitroglicerina. Nunca un betabloqueador.' },
          { t: 'Flumazenil: no en uso crónico', d: 'Opioide: naloxona',
            say: 'El flumazenil no se usa en el consumidor crónico de benzodiacepinas, y la naloxona es el antídoto del opioide. Si te llevas una sola idea de hoy: ante un intoxicado, primero identifica el toxíndrome, y después elige el antídoto o la conducta. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Intoxicación por sustancias: del toxíndrome a la conducta',
    root: N('start', 'Paciente intoxicado', 'Pupilas, signos vitales y piel',
      'Un paciente llega intoxicado. Sin saber qué consumió, lees tres cosas: las pupilas, los signos vitales y la piel. Esa combinación define el toxíndrome.',
      ['Midriasis, HTA, taquicardia y sudor', N('alert', 'Simpaticomimético', 'Cocaína, pasta base, anfetaminas',
        'Si hay midriasis, hipertensión, taquicardia, hipertermia y sudor, es un síndrome simpaticomimético. El tratamiento de base son las benzodiacepinas endovenosas.',
        ['Dolor torácico', N('do', 'Benzodiacepina, AAS y nitrato', 'Nunca betabloqueador',
          'Si hay dolor torácico por cocaína, benzodiacepina, aspirina y nitroglicerina, y hemodinamia si no cede. El betabloqueador está prohibido por el alfa sin oposición.')],
      )],
      ['Midriasis, piel seca, retención urinaria', N('do', 'Anticolinérgico', 'Soporte',
        'Con midriasis, piel seca y roja, retención urinaria y taquicardia, es un síndrome anticolinérgico, por atropina, tricíclicos o antihistamínicos. Se da soporte.')],
      ['Coma, miosis, bradipnea', N('alert', 'Opioide', 'Ventilar y naloxona',
        'Con coma, miosis puntiforme y depresión respiratoria, es un opioide. Se ventila y se da naloxona, y se observa un rato largo porque su efecto dura menos que el del opioide.')],
      ['Sopor y ataxia, pupilas normales', N('do', 'Benzodiacepinas', 'Soporte; flumazenil restringido',
        'Con sopor, ataxia, disartria y pupilas normales, son las benzodiacepinas. Se da soporte ventilatorio. El flumazenil queda prohibido en el usuario crónico y con tricíclicos, por el riesgo de convulsiones.')],
      ['Consumo sin intoxicación', N('q', 'Consumo perjudicial o dependencia', 'Tamizar: ASSIST, AUDIT, CRAFFT',
        'Si el paciente consulta por su consumo, se tamiza y se define si es perjudicial o dependencia.',
        ['Sin conciencia de problema', N('do', 'Entrevista motivacional', 'Según la etapa del cambio',
          'Si no reconoce el problema, entrevista motivacional según la etapa del cambio e intervención breve.')],
        ['Dependencia grave o comorbilidad', N('refer', 'Centro de tratamiento', 'GES si es menor de 20 años',
          'Si hay dependencia grave, comorbilidad psiquiátrica o fracaso ambulatorio, se deriva a un centro de tratamiento. El GES cubre a los menores de veinte años.')],
      )],
    ),
  },
};
