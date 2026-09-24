// Clase 3.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_gastroenterologia.cjs (gastro-14).
// La tabla del libro (serología B) tiene 4 columnas; aquí se resume a 3 (marcadores · interpretación · trampa).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gastro-14',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'La aguda mata rápido, la crónica mata lento, y la serología B de memoria',
      say: 'Bienvenidos. Hoy vemos hepatitis aguda y crónica, un tema de alta rentabilidad. Toda la clase gira en torno a un contraste: la hepatitis aguda mata rápido, la crónica mata lento. Y hay una tabla, la serología de la hepatitis B, que se pregunta literal en casi todos los exámenes. Al final la vas a saber leer sin memorizarla.',
    },

    {
      type: 'flow',
      kicker: 'El eje de la clase',
      title: 'Aguda vs crónica: qué mata y qué se vigila',
      nodes: [
        { id: 'hep', col: 0, row: 2, k: 'start', t: 'Transaminasas elevadas', s: 'Inflamación del hepatocito' },
        { id: 'agu', col: 1, row: 1, k: 'cause', t: 'Aguda: < 6 meses', s: 'VHA, VHB, VHE, herpes, alcohol, fármacos' },
        { id: 'ful', col: 2, row: 1, k: 'alert', t: 'Hepatitis fulminante', s: 'Encefalopatía < 8 sem de la ictericia' },
        { id: 'tp', col: 3, row: 1, k: 'q', t: 'Se vigila con TP / INR', s: 'No con bilirrubina ni transaminasas' },
        { id: 'cro', col: 1, row: 3, k: 'cause', t: 'Crónica: > 6 meses', s: 'NASH, VHB, VHC, autoinmune' },
        { id: 'cir', col: 2, row: 3, k: 'risk', t: 'Cirrosis', s: 'Mata lento' },
        { id: 'fib', col: 3, row: 3, k: 'q', t: 'Elastografía o biopsia', s: 'Inflamación vs fibrosis' },
      ],
      edges: [
        { from: 'hep', to: 'agu' }, { from: 'agu', to: 'ful', label: 'riesgo' }, { from: 'ful', to: 'tp' },
        { from: 'hep', to: 'cro' }, { from: 'cro', to: 'cir', label: 'riesgo' }, { from: 'cir', to: 'fib' },
      ],
      steps: [
        { show: ['hep'], note: 'Identificar la causa, tratarla y dar soporte',
          say: 'Partamos por la definición. Hepatitis es la elevación de las transaminasas por inflamación del hepatocito. Y el manejo universal, sea cual sea la causa, tiene tres pasos: identificarla, tratarla y dar soporte.' },
        { show: ['agu'], note: 'Virus, alcohol, fármacos, Amanita',
          say: 'La primera pregunta es cuánto tiempo lleva, porque la división en seis meses no es académica: define el riesgo. La aguda dura menos de seis meses, y sus causas son los virus A, B y E, los herpesvirus, el alcohol, los fármacos y tóxicos como la Amanita phalloides.' },
        { show: ['ful'], note: 'En un hígado previamente sano',
          say: '¿Y de qué muere el paciente con una hepatitis aguda? De hepatitis fulminante: encefalopatía, con desorientación, asterixis y sopor, que aparece dentro de las ocho semanas de iniciada la ictericia, en un hígado que antes estaba sano.' },
        { show: ['tp'], note: 'También el criterio de derivación a trasplante',
          say: 'Y aquí está el dato clave. Lo que se vigila es el tiempo de protrombina, o el INR. No la bilirrubina, y no el nivel de transaminasas. La protrombina es el marcador pronóstico, y también el criterio para derivar a trasplante. Esa trampa se pregunta.' },
        { show: ['cro', 'cir'], note: 'Mata lento, por cirrosis',
          say: 'La hepatitis crónica, en cambio, dura más de seis meses. Sus causas son la esteatohepatitis metabólica, los virus B y C, y la hepatitis autoinmune. No mata rápido: mata lento, por cirrosis, que es el tema de la próxima clase.' },
        { show: ['fib'], note: 'Grado = velocidad · estadio = daño hecho',
          say: 'Por eso se evalúa distinto: con elastografía hepática o biopsia. Estas separan dos cosas: el grado de inflamación, que dice qué tan rápido avanza, y el estadio de fibrosis, que dice cuánto daño ya está hecho.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Hepatitis A y E',
      title: 'La aguda que se resuelve sola',
      cards: [
        { title: 'Hepatitis A', tag: 'Fecal-oral', kind: 'key', items: [
          { t: 'Agua, alimentos, jardines infantiles', d: 'Endémica en Chile · notificación inmediata',
            say: 'Vamos a los virus, partiendo por la hepatitis A. Se transmite por vía fecal oral: agua y alimentos contaminados, contactos en jardines infantiles, o práctica sexual oro anal. En Chile es endémica, con brotes, y es de notificación obligatoria inmediata a la SEREMI de Salud.' },
          { t: 'Pródromo → ictericia, coluria, acolia', d: 'En niños suele ser anictérica',
            say: 'La clínica es un pródromo de fiebre y malestar, y después ictericia, coluria y acolia. En los niños suele pasar sin ictericia.' },
          { t: 'IgM anti-VHA', d: 'Primer examen en toda hepatitis aguda',
            say: 'El diagnóstico es la IgM anti hepatitis A, y es el primer examen que pides ante toda hepatitis aguda. Ojo: la IgG aislada solo indica infección pasada o vacunación.' },
        ] },
        { title: 'Formas atípicas y contactos', tag: 'Se preguntan', kind: 'criteria', items: [
          { t: 'Colestásica, recurrente, fulminante', d: 'Fulminante ~0,1 %',
            say: 'Tiene formas atípicas: la colestásica, donde predominan la fosfatasa alcalina y la GGT; la recurrente, que recae a las cuatro a ocho semanas por un mecanismo inmune; y la fulminante, que es rara, cerca del cero coma uno por ciento.' },
          { t: 'Extradomiciliario: vacuna', d: 'Conviviente: inmunoglobulina + vacuna',
            say: 'Los contactos se manejan distinto según la cercanía. El contacto fuera de la casa recibe vacuna; el conviviente, inmunoglobulina más vacuna. Y desde dos mil dieciocho la vacuna está en el programa nacional, a los dieciocho meses.' },
        ] },
        { title: 'Hepatitis E', tag: 'Embarazada', kind: 'alert', items: [
          { t: 'Igual que la A…', d: 'Salvo en la embarazada: letalidad hasta 20 %',
            say: 'La hepatitis E se comporta igual que la A, con una excepción que se pregunta: en la embarazada, la falla hepática aguda tiene una letalidad de hasta un veinte por ciento.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Hepatitis B',
      title: 'Cómo se contagia y quién se cronifica',
      cards: [
        { title: 'Transmisión', tag: 'Tres vías', kind: 'key', items: [
          { t: 'Sexual, parenteral, vertical', d: 'Cortopunzante con fuente AgHBs +: ~30 %',
            say: 'La hepatitis B se transmite por vía sexual, que es la principal en el adulto, parenteral y vertical. En un accidente cortopunzante con una fuente positiva, el riesgo de contagio es cercano al treinta por ciento.' },
        ] },
        { title: 'Historia natural', tag: 'Depende de la edad', kind: 'criteria', items: [
          { t: 'Adulto: 90 % cura, 10 % cronifica', d: 'Recién nacido: más de 90 % cronifica',
            say: 'Y fíjate en la historia natural, porque es exactamente al revés según la edad. El adulto sano cura en el noventa por ciento y cronifica solo en el diez. El recién nacido, en cambio, cronifica en más del noventa por ciento.' },
          { t: 'Fulminante ~1 %', d: 'Diez veces más que la A',
            say: 'Y el riesgo de fulminante es cercano al uno por ciento, diez veces el de la hepatitis A.' },
        ] },
        { title: 'Manejo y contactos', tag: 'GES en la crónica', kind: 'pharma', items: [
          { t: 'Aguda: soporte + TP', d: 'Crónica: derivar por GES',
            say: 'El brote agudo se maneja con soporte y vigilando la protrombina. La crónica tiene garantía GES: se deriva para carga viral, antígeno e, elastografía y antivirales, como tenofovir o entecavir.' },
          { t: 'Exposición reciente: IgHB + vacuna', d: 'Contactos: vacuna',
            say: 'Los contactos se vacunan, y si la exposición fue reciente, inmunoglobulina anti hepatitis B más vacuna.' },
          { t: 'RN de madre AgHBs +', d: 'Vacuna + IgHB < 12 h · lactancia sí',
            say: 'Y el recién nacido de madre con antígeno positivo recibe vacuna más inmunoglobulina en las primeras doce horas. La lactancia no se contraindica. Esa es otra trampa frecuente.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Serología de la hepatitis B',
      title: 'Leerla con dos preguntas',
      nodes: [
        { id: 'ag', col: 0, row: 2, k: 'start', t: 'AgHBs', s: '¿Hay virus?' },
        { id: 'pos', col: 1, row: 1, k: 'q', t: 'AgHBs +', s: 'Hay virus: ¿es aguda?' },
        { id: 'agu', col: 2, row: 0, k: 'alert', t: 'IgM anti-HBc +', s: 'Hepatitis B aguda' },
        { id: 'cro', col: 2, row: 1, k: 'risk', t: 'IgM anti-HBc −', s: 'Hepatitis B crónica' },
        { id: 'neg', col: 1, row: 3, k: 'q', t: 'AgHBs −', s: 'No hay virus circulante' },
        { id: 'ven', col: 2, row: 2, k: 'trap', t: 'IgM anti-HBc +', s: 'Período de ventana' },
        { id: 'res', col: 2, row: 3, k: 'good', t: 'Anti-HBs + anti-HBc IgG', s: 'Infección resuelta' },
        { id: 'vac', col: 2, row: 4, k: 'good', t: 'Anti-HBs aislado', s: 'Inmune por vacuna' },
      ],
      edges: [
        { from: 'ag', to: 'pos', label: 'positivo' }, { from: 'pos', to: 'agu' }, { from: 'pos', to: 'cro' },
        { from: 'ag', to: 'neg', label: 'negativo' }, { from: 'neg', to: 'ven' }, { from: 'neg', to: 'res' }, { from: 'neg', to: 'vac' },
      ],
      steps: [
        { show: ['ag'], note: 'AgHBs = hay virus · IgM anti-HBc = es aguda',
          say: 'Ahora la serología, y la vamos a leer con solo dos preguntas. El antígeno de superficie responde si hay virus. La IgM anti core responde si es agudo. Con eso sale toda la tabla.' },
        { show: ['pos', 'agu'], note: 'Hay virus y es agudo',
          say: 'Antígeno de superficie positivo: hay virus. Si además la IgM anti core es positiva, es agudo. Eso es una hepatitis B aguda.' },
        { show: ['cro'], note: 'Hay virus, pero no es agudo',
          say: 'Antígeno positivo con IgM anti core negativa: hay virus, pero no es agudo. Eso es una hepatitis B crónica.' },
        { show: ['neg', 'ven'], note: 'Aguda, con el antígeno aún negativo',
          say: 'Y la trampa: antígeno negativo, pero IgM anti core positiva. Es agudo, pero el antígeno ya se negativizó y los anticuerpos protectores todavía no aparecen. Es el período de ventana, y sigue siendo una infección aguda.' },
        { show: ['res'], note: 'Tuvo contacto con el virus',
          say: 'Si el antígeno es negativo y hay anti superficie más anti core IgG, el paciente se infectó y se curó: infección resuelta.' },
        { show: ['vac'], note: 'La vacuna solo genera anti-HBs',
          say: 'Y si solo tiene anti superficie, sin anti core, está inmune por vacuna. ¿Por qué? Porque la vacuna solo trae el antígeno de superficie. Si ves cualquier anticuerpo anti core, ese paciente estuvo infectado, no vacunado.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Hepatitis C',
      title: 'Casi siempre crónica, hoy curable',
      cards: [
        { title: 'Transmisión y curso', tag: 'Parenteral', kind: 'key', items: [
          { t: 'Drogas EV, transfusiones antes de 1996', d: 'Tatuajes y pírsines sin control',
            say: 'La hepatitis C se transmite por vía parenteral: drogas endovenosas, transfusiones anteriores a mil novecientos noventa y seis, y tatuajes o pírsines sin control.' },
          { t: 'Cronifica 80–90 %', d: 'Rara vez da cuadro agudo',
            say: 'Y al revés de la B en el adulto, rara vez da un cuadro agudo reconocible, y cronifica entre el ochenta y el noventa por ciento. Por eso casi siempre la encuentras como una hepatitis crónica.' },
        ] },
        { title: 'Diagnóstico en dos pasos', tag: 'Se pregunta', kind: 'criteria', items: [
          { t: 'Anti-VHC: tamizaje', d: 'Confirmar con ARN-VHC por PCR',
            say: 'El diagnóstico es en dos pasos. Primero, anticuerpos anti hepatitis C como tamizaje. Después, confirmación con ARN viral por PCR.' },
          { t: 'Anticuerpo + con PCR −', d: 'Infección pasada resuelta',
            say: '¿Por qué hace falta el segundo paso? Porque un anticuerpo positivo con una PCR negativa es una infección pasada, ya resuelta. El anticuerpo solo no te dice si hay virus.' },
        ] },
        { title: 'Tratamiento', tag: 'Garantizado', kind: 'pharma', items: [
          { t: 'Antivirales de acción directa', d: '8–12 semanas · curación > 95 %',
            say: 'El tratamiento son los antivirales de acción directa, por ocho a doce semanas, con más de un noventa y cinco por ciento de curación. El interferón quedó obsoleto, y en Chile el tratamiento está garantizado, con meta de eliminación.' },
          { t: 'Con cirrosis: ecografía semestral', d: 'Aunque el virus se haya erradicado',
            say: 'Pero ojo: si el paciente ya tenía cirrosis, la vigilancia de hepatocarcinoma con ecografía cada seis meses se mantiene, aunque el virus se haya erradicado. Curar el virus no borra la cirrosis.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Alcohol y fármacos',
      title: 'El patrón de laboratorio decide',
      cards: [
        { title: 'Hepatitis alcohólica', tag: 'AST/ALT > 2', kind: 'key', items: [
          { t: 'Ictericia + hepatomegalia dolorosa', d: 'En un bebedor',
            say: 'Pasemos a las causas no virales de hepatitis aguda. La alcohólica se presenta con ictericia y hepatomegalia dolorosa en un bebedor.' },
          { t: 'AST/ALT > 2, ambas < 300–400', d: 'Más GGT y VCM elevados',
            say: 'Y su sello es de laboratorio: la relación AST sobre ALT mayor de dos, con ambas habitualmente bajo trescientos o cuatrocientos. Las virales o tóxicas, en cambio, pasan de mil. Se suman la GGT y el volumen corpuscular medio elevados.' },
          { t: 'Grave: Maddrey → prednisolona', d: 'Más abstinencia y soporte nutricional',
            say: 'La gravedad se estima con la función discriminante de Maddrey, que usa protrombina y bilirrubina. Si es grave o hay encefalopatía, se agregan corticoides, prednisolona, a la abstinencia y el soporte nutricional.' },
        ] },
        { title: 'Hepatitis por fármacos', tag: 'Suspender siempre', kind: 'alert', items: [
          { t: 'Paracetamol: N-acetilcisteína', d: 'Dosis dependiente · útil incluso tarde',
            say: 'La hepatitis por fármacos la puede dar cualquier fármaco. El clásico es el paracetamol, que es dosis dependiente y tiene antídoto: la N acetilcisteína, útil incluso si se da de forma tardía.' },
          { t: 'Antituberculosos: suspender todos', d: 'Isoniazida, pirazinamida, rifampicina',
            say: 'Los antituberculosos, isoniazida, pirazinamida y rifampicina: se suspenden todos y se deriva. Otros clásicos son amoxicilina con clavulánico, estatinas, isotretinoína, antiepilépticos y nitrofurantoína.' },
          { t: 'Diagnóstico por descarte', d: 'Relación temporal con el fármaco',
            say: 'El diagnóstico es por descarte y por la relación temporal con el inicio del fármaco. Y la conducta es siempre la misma: suspenderlo de inmediato.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Crónicas no virales',
      title: 'NASH y las autoinmunes',
      cards: [
        { title: 'Esteatohepatitis metabólica', tag: 'La más frecuente', kind: 'key', items: [
          { t: 'Resistencia a la insulina', d: 'Obesidad, DM2, dislipidemia',
            say: 'Y cerramos con las crónicas no virales. La esteatohepatitis metabólica, o NASH, es hoy la causa más frecuente de hepatopatía crónica. Aparece con resistencia a la insulina: obesidad, diabetes tipo dos, dislipidemia y síndrome metabólico.' },
          { t: 'Hígado brillante, AST/ALT < 1', d: 'Tratamiento: bajar 7–10 % de peso',
            say: 'La ecografía muestra un hígado brillante, y las transaminasas están levemente altas, con la relación AST sobre ALT menor de uno, al revés que en el alcohol. Es un diagnóstico de exclusión, y se trata con baja de peso de al menos siete a diez por ciento, ejercicio y control metabólico.' },
        ] },
        { title: 'Autoinmunes', tag: 'El perfil las delata', kind: 'criteria', items: [
          { t: 'Hepatitis autoinmune', d: 'Mujer, ANA, ASMA, anti-LKM1 · corticoides + azatioprina',
            say: 'Las autoinmunes se reconocen por el perfil. La hepatitis autoinmune: mujer con otra enfermedad autoinmune, como tiroiditis de Hashimoto, hipergammaglobulinemia y anticuerpos ANA, anti músculo liso o anti LKM uno. Se trata con corticoides y azatioprina.' },
          { t: 'Cirrosis biliar primaria', d: 'Mujer 40–60, prurito, AMA + · ursodesoxicólico',
            say: 'La cirrosis biliar primaria: mujer de cuarenta a sesenta años con prurito y colestasia, es decir, fosfatasa alcalina y GGT altas con transaminasas normales, y anticuerpos antimitocondriales positivos. Se trata con ácido ursodesoxicólico.' },
          { t: 'Colangitis esclerosante primaria', d: 'Hombre joven, colitis ulcerosa, p-ANCA',
            say: 'Y la colangitis esclerosante primaria: hombre joven con colitis ulcerosa y p ANCA, con una colangio resonancia que muestra la vía biliar en rosario, y riesgo de colangiocarcinoma.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos todo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Serología B: las combinaciones que se preguntan',
      head: ['Marcadores', 'Interpretación', 'Trampa'],
      rows: [
        { cells: ['AgHBs + · IgM anti-HBc +', 'Hepatitis B aguda', 'Vigilar con TP, no con bilirrubina'],
          say: 'Repasemos la serología en una tabla. Antígeno positivo e IgM anti core positiva: hepatitis B aguda, y se vigila con la protrombina.' },
        { cells: ['AgHBs + · IgM anti-HBc −', 'Hepatitis B crónica', 'Derivar por GES'],
          say: 'Antígeno positivo e IgM negativa: hepatitis B crónica, que se deriva por GES.' },
        { cells: ['AgHBs − · IgM anti-HBc +', 'Período de ventana', 'Sigue siendo aguda'],
          say: 'Antígeno negativo con IgM positiva: período de ventana. No te confundas por el antígeno negativo: sigue siendo una infección aguda.' },
        { cells: ['Anti-HBs + · anti-HBc IgG +', 'Infección resuelta', 'Estuvo infectado'],
          say: 'Anti superficie con anti core IgG: infección resuelta. Estuvo infectado y se curó.' },
        { cells: ['Anti-HBs + aislado', 'Inmune por vacuna', 'La vacuna no genera anti-HBc'],
          say: 'Y anti superficie aislado: inmune por vacuna. La vacuna nunca genera anti core.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 52 años, bebedor habitual, consulta por ictericia y dolor en hipocondrio derecho. Al examen: hepatomegalia dolorosa. Laboratorio: AST 260 U/L, ALT 100 U/L, GGT muy elevada, VCM 104 fL. IgM anti-VHA y AgHBs negativos.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Hepatitis A aguda' },
        { letter: 'B', text: 'Hepatitis alcohólica' },
        { letter: 'C', text: 'Esteatohepatitis metabólica (NASH)' },
        { letter: 'D', text: 'Hepatitis autoinmune' },
        { letter: 'E', text: 'Hepatitis B en período de ventana' },
      ],
      correct: 'B',
      explanation: 'Ictericia y hepatomegalia dolorosa en un bebedor, con AST/ALT > 2, transaminasas bajo 300–400, GGT y VCM elevados: hepatitis alcohólica. La NASH tiene AST/ALT < 1. El período de ventana requiere IgM anti-HBc positiva, que no se informa.',
      say: {
        stem: 'Vamos al caso. Hombre de cincuenta y dos años, bebedor habitual, con ictericia y dolor en el hipocondrio derecho. Tiene una hepatomegalia dolorosa. En el laboratorio, AST de doscientos sesenta y ALT de cien, GGT muy elevada y volumen corpuscular medio de ciento cuatro. La IgM anti hepatitis A y el antígeno de superficie B son negativos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las alternativas: hepatitis A aguda, hepatitis alcohólica, esteatohepatitis metabólica, hepatitis autoinmune, o hepatitis B en período de ventana. Piénsalo.',
        answer: 'Es la B. Haz la división: doscientos sesenta sobre cien, la relación es mayor de dos, con transaminasas bajo trescientos, y GGT y volumen corpuscular elevados. Es el sello del alcohol. La NASH tienta porque también es un hígado graso, pero ahí la relación es menor de uno. Y para hablar de ventana necesitas una IgM anti core positiva, que aquí no está.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 122',
      stem: 'Una paciente se realiza exámenes porque su pareja fue diagnosticada de hepatitis B. Tiene AgHBs negativo y anticuerpos anti-HBs (antisuperficie) positivos.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Vacunada contra la hepatitis B' },
        { letter: 'B', text: 'Hepatitis B aguda' },
        { letter: 'C', text: 'Hepatitis B crónica' },
        { letter: 'D', text: 'Hepatitis B en período de ventana' },
        { letter: 'E', text: 'Infección asintomática por virus hepatitis B' },
      ],
      correct: 'A',
      explanation: 'AgHBs negativo descarta infección activa y anti-HBs positivo indica inmunidad. Sin anti-HBc informados, el anti-HBs aislado corresponde a inmunidad por vacuna (una infección resuelta tendría anti-HBc IgG positivo). No hay enfermedad activa ni período de ventana.',
      say: {
        stem: 'Y ahora preguntas reales. Esta es del EUNACOM de julio de dos mil quince. Una paciente se hace exámenes porque su pareja fue diagnosticada de hepatitis B. Tiene antígeno de superficie negativo y anticuerpos anti superficie positivos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: vacunada, hepatitis B aguda, hepatitis B crónica, período de ventana, o infección asintomática. Piénsalo.',
        answer: 'La respuesta es la A, vacunada. Aplica las dos preguntas: el antígeno negativo dice que no hay virus, y el anti superficie dice que está inmune. Como no hay anti core, esa inmunidad viene de la vacuna. El período de ventana tienta por el antígeno negativo, pero exige una IgM anti core positiva.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 26',
      stem: 'Mujer de 30 años con 10 días de astenia, fiebre, malestar y dolor epigástrico; hace 2 días ictericia y hoy orinas oscuras. FC 96/min, PA 100/60, ictericia franca, sin compromiso de conciencia, sin signos peritoneales. GOT 2.640 U/L, GPT 2.860 U/L, GGT 180, FA 412, protrombinemia 52 %, bilirrubina total 9,2 mg/dL (directa 6,6), albúmina 3,4 g/dL. IgM anti-VHA 5,5 U (VN < 0,2).',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Dieta blanda y reposo en domicilio' },
        { letter: 'B', text: 'Hospitalizar' },
        { letter: 'C', text: 'Solicitar ecografía abdominal y controlar de forma ambulatoria' },
        { letter: 'D', text: 'Solicitar colangiopancreatografía por resonancia magnética' },
        { letter: 'E', text: 'Indicar N-acetilcisteína oral' },
      ],
      correct: 'B',
      explanation: 'Hepatitis A aguda con protrombinemia de 52 %. Sin encefalopatía aún no es fulminante, pero la caída del tiempo de protrombina es el marcador de gravedad y riesgo de progresión: obliga a hospitalizar. El manejo ambulatorio es para la hepatitis A no complicada con protrombina normal.',
      say: {
        stem: 'Esta es del EUNACOM de julio de dos mil veinticuatro. Mujer de treinta años con diez días de astenia, fiebre y dolor epigástrico, que hace dos días se puso ictérica. Está lúcida, sin signos peritoneales. Transaminasas sobre dos mil, bilirrubina de nueve, protrombinemia de cincuenta y dos por ciento, e IgM anti hepatitis A positiva.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: reposo en domicilio, hospitalizar, ecografía y control ambulatorio, colangio resonancia, o N acetilcisteína. Piénsalo.',
        answer: 'Es la B, hospitalizar. Es una hepatitis A, y la tentación es mandarla a la casa porque la A se resuelve sola. Pero mira la protrombina: cincuenta y dos por ciento. Todavía no hay encefalopatía, así que no es fulminante, pero el tiempo de protrombina es justamente el marcador que vigilamos, y está cayendo. Ni las transaminasas sobre dos mil ni la bilirrubina deciden aquí: decide la protrombina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 83',
      stem: 'Mujer de 20 años en tratamiento con isotretinoína hace 10 días por acné, con dolor abdominal, astenia, ictericia y orinas oscuras. Hígado palpable 3 cm bajo el reborde. GOT 328 U/L, GPT 459 U/L, bilirrubina 1,8 mg/dL, FA 80, GGT 92, protrombinemia 80 %. IgG anti-VHA (+), IgM anti-VHA (−), AgHBs (−), anti-HBc totales (+); anti-VHC y autoinmunidad pendientes.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Hepatitis A' },
        { letter: 'B', text: 'Hepatitis B' },
        { letter: 'C', text: 'Hepatitis C' },
        { letter: 'D', text: 'Hepatitis por fármacos' },
        { letter: 'E', text: 'Hepatitis autoinmune' },
      ],
      correct: 'D',
      explanation: 'IgM anti-VHA negativa descarta hepatitis A aguda (la IgG solo marca contacto previo). AgHBs negativo descarta infección B activa; anti-HBc sin AgHBs indica exposición pasada. Por descarte y por la relación temporal con isotretinoína: hepatitis por fármacos. Conducta: suspender el fármaco de inmediato.',
      say: {
        stem: 'Y la última, del EUNACOM de diciembre de dos mil diecinueve. Mujer de veinte años que hace diez días toma isotretinoína por acné, y consulta por dolor abdominal, astenia e ictericia. Transaminasas de trescientos a cuatrocientos, protrombina normal. En la serología: IgG anti hepatitis A positiva con IgM negativa, antígeno de superficie negativo y anti core totales positivos. Hepatitis C y autoinmunidad, pendientes.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: hepatitis A, hepatitis B, hepatitis C, hepatitis por fármacos, o hepatitis autoinmune. Piénsalo.',
        answer: 'Es la D, hepatitis por fármacos. Esta pregunta está armada con serologías que distraen. La IgG de la A solo dice contacto pasado. El anti core positivo tienta hacia la B, pero sin antígeno de superficie no hay virus: es una exposición antigua. Descartados los virus, queda la relación temporal con un fármaco hepatotóxico conocido. Y la conducta, suspenderlo de inmediato.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Aguda vs crónica', tag: 'El eje', kind: 'key', items: [
          { t: 'Aguda: fulminante · vigilar TP', d: 'No la bilirrubina ni las transaminasas',
            say: 'Cerremos con las reglas de oro. La hepatitis aguda mata por fulminante, y se vigila con el tiempo de protrombina.' },
          { t: 'Crónica: cirrosis · elastografía o biopsia', d: 'B y C crónicas: GES',
            say: 'La crónica mata por cirrosis, se evalúa con elastografía o biopsia, y las hepatitis B y C crónicas tienen garantía GES.' },
        ] },
        { title: 'Serología', tag: 'Dos preguntas', kind: 'criteria', items: [
          { t: 'AgHBs = hay virus', d: 'IgM anti-HBc = es aguda',
            say: 'En la serología B, el antígeno de superficie dice que hay virus, y la IgM anti core dice que es agudo. Antígeno positivo con IgM negativa, crónica.' },
          { t: 'Anti-HBc = estuvo infectado', d: 'Anti-HBs aislado = vacuna',
            say: 'Cualquier anti core significa que estuvo infectado; el anti superficie aislado, que está vacunado.' },
        ] },
        { title: 'Perlas', tag: 'Se preguntan', kind: 'alert', items: [
          { t: 'AST/ALT > 2: alcohol', d: 'Paracetamol: N-acetilcisteína',
            say: 'Relación AST sobre ALT mayor de dos: alcohol. Paracetamol: N acetilcisteína. Y ante cualquier fármaco sospechoso, suspenderlo.' },
          { t: 'Hepatitis C: confirmar con PCR', d: 'Curable con antivirales de acción directa',
            say: 'La hepatitis C se confirma con PCR y hoy se cura. Si te llevas una sola idea de hoy: en la aguda manda la protrombina, y en la serología B, el antígeno dice si hay virus y la IgM dice si es agudo. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Hepatitis: aguda vs crónica',
    root: N('start', 'Transaminasas elevadas', 'Inflamación del hepatocito',
      'Transaminasas elevadas. El eje que ordena toda la clase es si la hepatitis es aguda o crónica.',
      ['', N('q', '¿Menos de 6 meses?', 'Aguda vs crónica',
        '¿Lleva menos de seis meses de evolución?',
        ['Aguda', N('do', 'IgM anti-VHA · AgHBs · IgM anti-HBc', 'Buscar la causa',
          'En la hepatitis aguda pedimos IgM anti hepatitis A, antígeno de superficie e IgM anti core de hepatitis B, y buscamos alcohol y fármacos.',
          ['', N('q', '¿Encefalopatía o TP alterado?', 'El marcador es el tiempo de protrombina',
            'El riesgo es la hepatitis fulminante. ¿Hay encefalopatía, o el tiempo de protrombina está alterado?',
            ['SÍ', N('alert', 'Hospitalizar · fulminante: trasplante', 'No se mide con la bilirrubina',
              'Si la protrombina cae, se hospitaliza para vigilar. Y si además hay encefalopatía, es una hepatitis fulminante: derivación a centro de trasplante.')],
            ['NO', N('ok', 'Soporte + tratar la causa', 'Fármaco: suspender · Paracetamol: NAC',
              'Si no, soporte y tratar la causa: suspender el fármaco sospechoso, y en el paracetamol dar N acetilcisteína.')])])],
        ['Crónica', N('refer', 'Estudio de causa + GES', 'VHB · VHC · NASH · autoinmune',
          'La hepatitis crónica mata por cirrosis. Buscamos virus B y C, esteatohepatitis y autoinmunes. Las hepatitis B y C crónicas tienen garantía GES: derivar para carga viral, elastografía y antivirales.')])]),
  },
};
