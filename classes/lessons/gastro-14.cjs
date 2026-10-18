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
      kicker: 'Hepatitis A',
      title: 'Hepatitis A: cuándo se complica',
      cards: [
        { title: 'Señales de alarma', tag: 'Hospitalizar', kind: 'alert', items: [
          { t: 'Vómitos incoercibles, bilirrubina muy alta', d: 'INR alargado o cualquier encefalopatía',
            say: 'Una hepatitis A se sospecha complicada ante vómitos incoercibles, ictericia intensa con bilirrubina muy alta, INR alargado o cualquier signo de encefalopatía.' },
          { t: 'Mayor de 40 años o hepatopatía previa', d: 'Más riesgo de falla hepática',
            say: 'El riesgo es mayor en pacientes de más de cuarenta años o con una hepatopatía crónica previa.' },
        ] },
        { title: 'Conducta', tag: 'Falla hepática', kind: 'key', items: [
          { t: 'Hospitalizar y controlar INR y glicemia', d: 'Evitar sedantes, paracetamol y alcohol',
            say: 'Se hospitaliza, se controlan el INR y la glicemia, y se evitan los sedantes, el paracetamol y el alcohol.' },
          { t: 'Encefalopatía o INR 1,5 o más: centro con trasplante', d: 'Hepatitis fulminante',
            say: 'Si aparece encefalopatía, o el INR llega a uno coma cinco o más, es una hepatitis fulminante, y se deriva a un centro con unidad de trasplante.' },
        ] },
        { title: 'Las que no asustan', tag: 'Buen pronóstico', kind: 'normal', items: [
          { t: 'Colestásica prolongada', d: 'Manejo ambulatorio',
            say: 'La forma colestásica prolongada tiene buen pronóstico y se maneja en forma ambulatoria.' },
          { t: 'Recurrente, a las 4 a 8 semanas', d: 'También evoluciona bien',
            say: 'La recurrente, que reaparece a las cuatro a ocho semanas, también evoluciona bien.' },
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
          say: 'Y la trampa: antígeno negativo, pero IgM anti core positiva. Es agudo, pero el antígeno ya se negativizó y los anticuerpos protectores todavía no aparecen. Es el período de ventana, y sigue siendo una infección aguda. Mira este esquema en el tiempo: entre la caída del antígeno y la aparición del anti superficie, solo el anti core IgM está positivo.',
          photo: { src: 'biblioteca/01_gastroenterologia/gastro-14/S1_serologia-vhb__propio.svg', label: 'Marcadores en el tiempo', at: 'Mira este esquema', credit: 'Dibujo propio (esquema)' } },
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
      type: 'points',
      kicker: 'Imágenes y biopsia',
      title: 'Ecografía y biopsia hepática',
      cards: [
        { title: 'Ecografía hepática', tag: 'Informe', kind: 'key', items: [
          { t: 'Esteatosis: hígado brillante', d: 'Hiperecogénico',
            say: 'En la ecografía se revisan el tamaño y el borde del hígado, la ecogenicidad, la vía biliar, la porta, el bazo y el líquido libre. La esteatosis se ve como un hígado brillante, hiperecogénico.' },
          { t: 'Cirrosis: borde nodular, bazo grande, porta ancha', d: 'Porta > 13 mm, ascitis',
            say: 'La cirrosis, con un borde nodular, ecogenicidad heterogénea, el lóbulo derecho atrófico y el caudado grande, esplenomegalia, una vena porta de más de trece milímetros y ascitis.' },
          { t: 'Vigilancia del hepatocarcinoma', d: 'Cada 6 meses, con alfa-fetoproteína',
            say: 'La ecografía es además la vigilancia del hepatocarcinoma: cada seis meses, con alfafetoproteína, en todo cirrótico y en la hepatitis B crónica de riesgo.' },
        ] },
        { title: 'Biopsia hepática', tag: 'Casos dudosos', kind: 'criteria', items: [
          { t: 'Hoy se reserva para casos dudosos', d: 'Autoinmune, superposiciones, causa no aclarada',
            say: 'Hoy la biopsia se reserva para los casos dudosos: la hepatitis autoinmune, las superposiciones o una hepatopatía sin causa aclarada. La elastografía y los marcadores no invasivos la reemplazaron en la mayoría.' },
          { t: 'Percutánea con ecografía', d: 'INR menor de 1,5 y plaquetas sobre 50.000',
            say: 'Se hace por vía percutánea, guiada por ecografía, con INR menor de uno coma cinco y plaquetas sobre cincuenta mil. Con ascitis o coagulopatía se usa la vía transyugular.' },
        ] },
        { title: 'Qué informa', tag: 'Grado y estadio', kind: 'normal', items: [
          { t: 'Grado y estadio de fibrosis', d: 'METAVIR A0 a A3; F0 a F4',
            say: 'El informe entrega el grado de actividad, de A cero a A tres, y el estadio de fibrosis, de F cero a F cuatro, donde F cuatro es cirrosis.' },
          { t: 'Complicaciones', d: 'Dolor; hemorragia, menos de 1 %',
            say: 'Las complicaciones son el dolor, que es frecuente, y, raramente, la hemorragia, el neumotórax o la peritonitis biliar.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Los marcadores de la hepatitis B',
      images: [
        { src: 'animaciones/gastro-14/A1_vhb_marcadores.mp4', label: 'Hepatitis aguda resuelta', credit: 'Animación propia' },
      ],
      steps: [
        { note: 'Atento a la ventana',
          say: 'Primero aparece el antígeno de superficie, luego el anti core IgM. Cuando el antígeno desaparece y todavía no llega el anti superficie, queda un período de ventana donde solo el anti core IgM es positivo. El anti core total queda para siempre.' },
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
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2015 · Pregunta 127",
      "stem": "Hombre de 32 años regresa de un viaje a un país vecino. A los pocos días presenta un cuadro de 5 días de fiebre, asociado a malestar general, seguido luego de dolor abdominal, ictericia y orinas oscuras. Al examen físico está ictérico, con dolor a la palpación del hipocondrio derecho.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Hepatitis A"
        },
        {
          "letter": "B",
          "text": "Hepatitis B"
        },
        {
          "letter": "C",
          "text": "Hepatitis alcohólica"
        },
        {
          "letter": "D",
          "text": "Coledocolitiasis"
        },
        {
          "letter": "E",
          "text": "Fiebre tifoidea"
        }
      ],
      "correct": "A",
      "explanation": "Pródromo febril e inespecífico seguido de ictericia, coluria y dolor en hipocondrio derecho, después de un viaje, es la hepatitis A clásica, de transmisión fecal-oral. Se confirma con IgM anti-VHA y el manejo es de soporte. La hepatitis B tiene una incubación más larga, de 1 a 6 meses, y transmisión parenteral o sexual.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil quince. Hombre de treinta y dos años que volvió de un viaje a un país vecino. A los pocos días tiene cinco días de fiebre y malestar, y luego dolor abdominal, ictericia y orina oscura. Está ictérico y le duele el hipocondrio derecho.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: hepatitis A, hepatitis B, hepatitis alcohólica, coledocolitiasis, o fiebre tifoidea. Piénsalo.",
        "answer": "Es la A. Primero un pródromo con fiebre y malestar, y después la ictericia, en un viajero: es la hepatitis A de libro, que se contagia por agua y alimentos. La hepatitis B tienta porque también da ictericia, pero se transmite por sangre o vía sexual y su incubación es mucho más larga."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.06.1.021 · Hepatitis crónica",
      "stem": "Mujer de 38 años con astenia. Sus exámenes muestran GPT 180 U/L y GOT 140 U/L, elevadas en forma persistente por 8 meses, con bilirrubina normal. AgHBs y anticuerpos anti-VHC negativos; no consume alcohol ni fármacos. Tiene IgG sérica elevada y anticuerpos antinucleares y anti-músculo liso positivos.",
      "question": "¿Cuál es el diagnóstico más probable y su tratamiento?",
      "options": [
        {
          "letter": "A",
          "text": "Hepatitis C crónica; antivirales de acción directa"
        },
        {
          "letter": "B",
          "text": "Hepatitis autoinmune; prednisona con o sin azatioprina"
        },
        {
          "letter": "C",
          "text": "Esteatohepatitis metabólica; baja de peso"
        },
        {
          "letter": "D",
          "text": "Enfermedad de Wilson; penicilamina"
        },
        {
          "letter": "E",
          "text": "Hepatitis A prolongada; manejo de soporte"
        }
      ],
      "correct": "B",
      "explanation": "Hepatitis de más de 6 meses en una mujer, con hipergammaglobulinemia IgG y anticuerpos antinucleares y anti-músculo liso positivos, es una hepatitis autoinmune tipo 1. Se confirma con biopsia hepática y se trata con corticoides, solos o con azatioprina. La serología negativa descarta virus B y C.",
      "say": {
        "stem": "Vamos con una pregunta de práctica. Mujer de treinta y ocho años con cansancio y transaminasas elevadas en forma persistente por ocho meses. Las serologías de hepatitis B y C son negativas, no toma alcohol ni fármacos, y tiene la IgG alta con anticuerpos antinucleares y anti músculo liso positivos.",
        "question": "¿Cuál es el diagnóstico más probable y su tratamiento?",
        "options": "Las opciones: hepatitis C con antivirales, hepatitis autoinmune con prednisona, hígado graso con baja de peso, enfermedad de Wilson con penicilamina o hepatitis A prolongada. Piénsalo.",
        "answer": "Es la B. Una hepatitis que dura más de seis meses, en una mujer, con IgG alta y autoanticuerpos, es una hepatitis autoinmune, y responde a corticoides. La hepatitis C es el distractor clásico de la hepatitis crónica, pero aquí la serología es negativa."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2019 · Pregunta 119",
      "stem": "Hombre de 50 años, asintomático, se realiza pruebas hepáticas como parte de un chequeo médico, que muestran SGOT 332 UI/L y SGPT 210 UI/L, con bilirrubina de 1,5 mg/dL. No refiere hábitos tóxicos. Como antecedente, tuvo un hemoperitoneo traumático en 1992, que requirió transfusiones.",
      "question": "¿Qué examen se debe solicitar ante la sospecha diagnóstica?",
      "options": [
        {
          "letter": "A",
          "text": "Antígeno de superficie"
        },
        {
          "letter": "B",
          "text": "IgM para VHA"
        },
        {
          "letter": "C",
          "text": "Test de HOMA"
        },
        {
          "letter": "D",
          "text": "TAC de abdomen"
        },
        {
          "letter": "E",
          "text": "Anticuerpos totales contra VHC"
        }
      ],
      "correct": "E",
      "explanation": "Transaminasas elevadas en un paciente transfundido antes de 1996, cuando en Chile aún no se tamizaba la sangre para virus C, obligan a buscar hepatitis C con anticuerpos totales anti-VHC; si son positivos, se confirma con carga viral. La IgM anti-VHA sirve para la hepatitis aguda, no para una infección crónica.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil diecinueve. Hombre de cincuenta años, sin síntomas, que en un chequeo tiene las transaminasas elevadas, sobre trescientos. No consume alcohol. Su único antecedente es un hemoperitoneo traumático en mil novecientos noventa y dos, que requirió transfusiones.",
        "question": "¿Qué examen se debe solicitar ante la sospecha diagnóstica?",
        "options": "Las opciones: antígeno de superficie, IgM para hepatitis A, test de HOMA, tomografía de abdomen, o anticuerpos totales contra hepatitis C. Piénsalo.",
        "answer": "Es la E. Una transfusión antes de mediados de los noventa es el gran factor de riesgo de hepatitis C, y se tamiza con anticuerpos totales anti virus C. El antígeno de superficie tienta porque la hepatitis B también se transmite por sangre, pero el antecedente transfusional de esa época apunta al virus C."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2016 · Pregunta 79",
      "stem": "Adolescente de 15 años con cuadro de 5 días de evolución con fiebre, astenia, náuseas e ictericia, a lo que últimamente se ha agregado prurito. Ha tomado paracetamol (500 mg), un total de 6 tabletas. Al examen físico, hipocondrio derecho levemente sensible a la palpación. Tiene antecedente de haber estado en un campamento hace 1 mes. En sus exámenes: fosfatasas alcalinas y GGT 8 veces sobre el valor normal, transaminasas 20 veces sobre el valor normal y bilirrubinemia aumentada.",
      "question": "¿Cuál es el diagnóstico probable?",
      "options": [
        {
          "letter": "A",
          "text": "Coledocolitiasis"
        },
        {
          "letter": "B",
          "text": "Hepatitis A"
        },
        {
          "letter": "C",
          "text": "Hepatitis C"
        },
        {
          "letter": "D",
          "text": "Hepatitis por fármacos"
        },
        {
          "letter": "E",
          "text": "Hepatitis autoinmune"
        }
      ],
      "correct": "B",
      "explanation": "Pródromo febril seguido de ictericia, transaminasas muy elevadas (patrón hepatocelular) y exposición en un campamento un mes antes (incubación de 2 a 6 semanas, transmisión fecal-oral) orientan a hepatitis A. Los 3 g de paracetamol repartidos en 5 días no alcanzan dosis hepatotóxica; el prurito refleja un componente colestásico frecuente.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil dieciséis. Una adolescente de quince años tiene cinco días de fiebre, náuseas e ictericia, y ahora prurito. Estuvo en un campamento hace un mes y tomó seis tabletas de paracetamol en total. Sus transaminasas están veinte veces sobre lo normal.",
        "question": "¿Cuál es el diagnóstico probable?",
        "options": "Las opciones: coledocolitiasis, hepatitis A, hepatitis C, hepatitis por fármacos o hepatitis autoinmune. Piénsalo.",
        "answer": "Es la B. Fiebre, ictericia, transaminasas muy altas y un campamento hace un mes son una hepatitis A clásica. La hepatitis por fármacos tienta por el paracetamol, pero seis tabletas en cinco días no alcanzan una dosis tóxica."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.1.045 · Insuficiencia hepática aguda",
      "stem": "Un niño de 6 años con hepatitis A confirmada hace 8 días presenta mayor ictericia, vómitos persistentes y somnolencia. Exámenes: bilirrubina total 14 mg/dL, GPT 2.800 UI/L, glicemia 58 mg/dL e INR 2,4, que no corrige tras administrar vitamina K.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Hospitalizar y contactar precozmente a un centro con trasplante hepático"
        },
        {
          "letter": "B",
          "text": "Hospitalizar en sala común y repetir exámenes en 72 horas"
        },
        {
          "letter": "C",
          "text": "Manejo ambulatorio con reposo y control en una semana"
        },
        {
          "letter": "D",
          "text": "Iniciar corticoides endovenosos"
        },
        {
          "letter": "E",
          "text": "Administrar plasma fresco congelado y dar el alta al corregir el INR"
        }
      ],
      "correct": "A",
      "explanation": "Coagulopatía (INR 2 o más, o 1,5 o más con encefalopatía) que no corrige con vitamina K, en un niño sin hepatopatía previa, define insuficiencia hepática aguda; la hepatitis A es una causa frecuente en Chile. Requiere hospitalización en unidad crítica, manejo de hipoglicemia y encefalopatía, y contacto precoz con un centro de trasplante, porque puede progresar rápidamente.",
      "say": {
        "stem": "Un niño de seis años con hepatitis A hace ocho días tiene más ictericia, vómitos, somnolencia, glicemia baja e INR de dos coma cuatro que no corrige con vitamina K.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: hospitalizar y contactar un centro de trasplante, hospitalizar en sala común, manejo ambulatorio, corticoides o plasma y alta. Piénsalo.",
        "answer": "Es la A. Coagulopatía que no corrige con vitamina K y encefalopatía definen una insuficiencia hepática aguda, que exige contactar precozmente un centro de trasplante. El plasma tienta para corregir el INR, pero oculta la evolución y no trata la falla hepática."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.02.4.002 · Ecotomografia abdominal",
      "stem": "Un hombre de 48 años, con IMC de 33 kg/m², DM2 y triglicéridos elevados, tiene transaminasas 1,5 veces sobre lo normal en un control. No consume alcohol y las serologías de hepatitis B y C son negativas.",
      "question": "¿Cuál es el examen de imagen inicial más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Colangiopancreatografía retrógrada endoscópica"
        },
        {
          "letter": "B",
          "text": "Colangiorresonancia"
        },
        {
          "letter": "C",
          "text": "TAC de abdomen con contraste"
        },
        {
          "letter": "D",
          "text": "Biopsia hepática de entrada"
        },
        {
          "letter": "E",
          "text": "Ecotomografía abdominal"
        }
      ],
      "correct": "E",
      "explanation": "Se sospecha enfermedad hepática grasa asociada a disfunción metabólica. La ecotomografía abdominal es el examen inicial: barata, sin radiación, muestra el hígado hiperecogénico (esteatosis) y descarta otras causas. Luego se estima fibrosis con FIB-4 o elastografía. La biopsia se reserva para casos dudosos o sospecha de fibrosis avanzada.",
      "say": {
        "stem": "Un hombre obeso y diabético de cuarenta y ocho años tiene transaminasas levemente elevadas, no bebe alcohol y sus serologías para hepatitis B y C son negativas.",
        "question": "¿Cuál es el examen de imagen inicial más adecuado?",
        "options": "Las opciones: colangiopancreatografía endoscópica, colangiorresonancia, TAC con contraste, biopsia hepática o ecotomografía abdominal. Piénsalo.",
        "answer": "Es la E. Se sospecha hígado graso metabólico y la ecografía es el examen inicial, mostrando un hígado hiperecogénico. La biopsia tienta por ser definitiva, pero se reserva para casos dudosos o con sospecha de fibrosis avanzada."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.02.4.011 · Estudio funcional hepático",
      "stem": "Un hombre de 50 años, que bebe 6 vasos de vino diarios, tiene GOT 180 U/L, GPT 70 U/L, GGT 420 U/L, bilirrubina 1,2 mg/dL y tiempo de protrombina 85%. No usa fármacos.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Hepatitis viral aguda"
        },
        {
          "letter": "B",
          "text": "Coledocolitiasis"
        },
        {
          "letter": "C",
          "text": "Daño hepático por alcohol"
        },
        {
          "letter": "D",
          "text": "Hepatitis autoinmune"
        },
        {
          "letter": "E",
          "text": "Hemocromatosis"
        }
      ],
      "correct": "C",
      "explanation": "Una relación GOT/GPT mayor de 2, con transaminasas bajo 300 U/L y GGT muy elevada, es el patrón típico del daño hepático alcohólico. La hepatitis viral aguda suele dar transaminasas sobre 1.000 U/L con predominio de GPT, y la coledocolitiasis da un patrón colestásico con fosfatasa alcalina alta y dolor.",
      "say": {
        "stem": "Un hombre de cincuenta años, que bebe seis vasos de vino al día, tiene GOT de ciento ochenta, GPT de setenta y GGT de cuatrocientos veinte, con bilirrubina y protrombina normales.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: hepatitis viral aguda, coledocolitiasis, daño hepático por alcohol, hepatitis autoinmune o hemocromatosis. Piénsalo.",
        "answer": "Es la C. La GOT más del doble de la GPT, con transaminasas moderadas y GGT muy alta, es el patrón del alcohol. La hepatitis viral tienta, pero da transaminasas sobre mil con predominio de GPT."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2024 · Pregunta 26",
      "stem": "Una paciente de 30 años consulta por un cuadro de 10 días de evolución caracterizado por astenia, fiebre, malestar general y dolor epigástrico. Hace 2 días se agregó ictericia de piel y escleras, y hoy presentó orinas oscuras. Al examen físico tiene FC 96/min, PA 100/60 mmHg, ictericia franca de escleras y piel, sin alteraciones de conciencia. El abdomen es doloroso en epigastrio e hipocondrio derecho, sin signos peritoneales ni visceromegalia, con ruidos hidroaéreos conservados. Exámenes: GOT 2.640 UI/L, GPT 2.860 UI/L, GGT 180 UI/L, FA 412 UI/L, protrombinemia 52%, bilirrubina total 9,2 mg/dL, directa 6,6 mg/dL, albúmina 3,4 g/dL. IgM para virus hepatitis A: 5,5 UI (VN menor a 0,2).",
      "question": "¿Cuál es la conducta más adecuada con esta paciente?",
      "options": [
        {
          "letter": "A",
          "text": "Dieta blanda y reposo en domicilio"
        },
        {
          "letter": "B",
          "text": "Hospitalizar"
        },
        {
          "letter": "C",
          "text": "Solicitar ecografía abdominal y controlar ambulatoriamente"
        },
        {
          "letter": "D",
          "text": "Solicitar una colangiopancreatografía por resonancia magnética"
        },
        {
          "letter": "E",
          "text": "Indicar N-acetilcisteína oral"
        }
      ],
      "correct": "B",
      "explanation": "Hepatitis A con protrombina de 52% es una hepatitis aguda grave: aun sin encefalopatía, tiene riesgo de progresar a insuficiencia hepática aguda, por lo que se hospitaliza para vigilar protrombina, glicemia y conciencia. La N-acetilcisteína es específica para paracetamol y la colangiorresonancia no aporta ante un patrón hepatocelular.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Mujer de treinta años con hepatitis A confirmada, ictérica, sin compromiso de conciencia, pero con protrombina de cincuenta y dos por ciento.",
        "question": "¿Qué haces?",
        "options": "Las opciones: reposo en domicilio, hospitalizar, ecografía y control ambulatorio, colangiorresonancia, o N-acetilcisteína. Piénsalo.",
        "answer": "Es la B. Hospitalizar, porque la protrombina baja marca una hepatitis grave con riesgo de falla hepática fulminante. El reposo en domicilio sirve para la hepatitis A habitual, no con protrombina bajo sesenta por ciento."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.06.2.009 · Insuficiencia hepática aguda",
      "stem": "Mujer de 28 años sin enfermedad hepática previa presenta ictericia de 10 días. Hoy su familia la nota somnolienta y desorientada, con asterixis. Exámenes: GPT 3.200 UI/L, bilirrubina total 12 mg/dL, INR 2,8, glicemia 62 mg/dL. HBsAg e IgM anti-core positivos.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Manejo ambulatorio con control de pruebas hepáticas en 48 horas"
        },
        {
          "letter": "B",
          "text": "Hospitalizar en sala y administrar vitamina K hasta normalizar el INR"
        },
        {
          "letter": "C",
          "text": "Ingreso a UCI y contacto precoz con un centro de trasplante hepático"
        },
        {
          "letter": "D",
          "text": "Plasma fresco congelado para normalizar el INR antes de cualquier evaluación"
        },
        {
          "letter": "E",
          "text": "Corticoides en dosis altas"
        }
      ],
      "correct": "C",
      "explanation": "Encefalopatía más INR de 1,5 o más en una paciente sin hepatopatía previa define insuficiencia hepática aguda, aquí por virus hepatitis B. Requiere UCI y contacto precoz con un centro de trasplante, además de antiviral. El plasma no se usa para corregir el INR sin sangrado porque oculta el pronóstico; la vitamina K no revierte una falla de síntesis.",
      "say": {
        "stem": "Mujer de veintiocho años con hepatitis B aguda, ahora somnolienta, con asterixis e INR de dos coma ocho.",
        "question": "¿Cuál es la conducta?",
        "options": "Las opciones: manejo ambulatorio, sala con vitamina K, UCI y contacto con centro de trasplante, plasma para normalizar el INR, o corticoides. Piénsalo.",
        "answer": "Es la C. Encefalopatía con INR alterado sin hepatopatía previa es insuficiencia hepática aguda y va a UCI con contacto precoz con trasplante. Corregir el INR con plasma es tentador, pero oculta el pronóstico y no trata la falla."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2024 · Pregunta 102",
      "stem": "Mujer con obesidad, que consume 2 a 3 copas de vino solo los fines de semana y está en tratamiento con estatinas, presenta transaminasas elevadas al doble del valor normal.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Esteatohepatitis no alcohólica"
        },
        {
          "letter": "B",
          "text": "Esteatohepatitis alcohólica"
        },
        {
          "letter": "C",
          "text": "Hepatitis por fármacos"
        },
        {
          "letter": "D",
          "text": "Hepatitis por virus C"
        },
        {
          "letter": "E",
          "text": "Hepatitis autoinmune"
        }
      ],
      "correct": "A",
      "explanation": "Obesidad con elevación leve de transaminasas y consumo de alcohol bajo el umbral de riesgo orienta a enfermedad hepática grasa no alcohólica, hoy llamada esteatosis asociada a disfunción metabólica. Las estatinas rara vez causan daño hepático relevante y no se suspenden por alzas menores a 3 veces el valor normal.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil veinticuatro. Mujer obesa, que toma dos o tres copas de vino solo los fines de semana y usa estatinas, con transaminasas al doble de lo normal.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: esteatohepatitis no alcohólica, esteatohepatitis alcohólica, hepatitis por fármacos, hepatitis C, o hepatitis autoinmune. Piénsalo.",
        "answer": "Es la A. Es esteatohepatitis no alcohólica por su obesidad. Culpar a la estatina es tentador, pero rara vez daña el hígado y un alza menor a tres veces no obliga a suspenderla."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.06.4.008 · Biopsia hepática",
      "stem": "Hombre de 52 años con hepatopatía crónica de causa no precisada pese a un estudio serológico completo. Se plantea biopsia hepática. Presenta ascitis moderada, INR de 1,9 y plaquetas de 60.000/mm3.",
      "question": "¿Cuál es la vía más adecuada para obtener la biopsia?",
      "options": [
        {
          "letter": "A",
          "text": "Percutánea guiada por ecografía"
        },
        {
          "letter": "B",
          "text": "Percutánea a ciegas tras transfundir plaquetas"
        },
        {
          "letter": "C",
          "text": "Laparotomía exploradora"
        },
        {
          "letter": "D",
          "text": "No está indicada; diagnosticar solo con transaminasas"
        },
        {
          "letter": "E",
          "text": "Transyugular"
        }
      ],
      "correct": "E",
      "explanation": "La biopsia hepática percutánea está relativamente contraindicada con ascitis, INR mayor de 1,5 o plaquetas bajas, por riesgo de sangrado. En estos casos se usa la vía transyugular, que obtiene tejido desde la vena hepática sin perforar la cápsula y permite medir el gradiente de presión portal.",
      "say": {
        "stem": "Hombre con hepatopatía de causa no aclarada, que necesita biopsia, pero tiene ascitis, INR de uno coma nueve y plaquetas bajas.",
        "question": "¿Por qué vía haces la biopsia?",
        "options": "Las opciones: percutánea guiada por ecografía, percutánea a ciegas tras transfundir, laparotomía, no biopsiar o transyugular. Piénsalo.",
        "answer": "Es la E. Transyugular, porque no atraviesa la cápsula y evita el sangrado peritoneal. La percutánea guiada es la habitual, pero con ascitis y coagulopatía el riesgo es alto."
      }
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
