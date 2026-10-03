// Clase 8.12 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_hematologia.cjs (hem-12).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'hem-12',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Trombocitopenia aislada en un paciente sano: a quién observar y a quién tratar',
      say: 'Bienvenidos. En la clase anterior aprendimos a leer los exámenes de la hemostasia, y dejamos un patrón pendiente: plaquetas bajas con tiempos de coagulación normales. Hoy vemos su causa más preguntada, la trombocitopenia inmune, o PTI. Es de frecuencia máxima en el examen, y lo que se pregunta es siempre lo mismo: reconocerla, diferenciar al niño del adulto, y saber cuándo basta observar y cuándo hay que tratar.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Anticuerpos que destruyen y frenan plaquetas',
      nodes: [
        { id: 'lb', col: 0, row: 1, k: 'cause', t: 'Linfocitos B autorreactivos', s: 'Trastorno autoinmune adquirido' },
        { id: 'igg', col: 1, row: 1, k: 'mech', t: 'IgG anti-GP IIb/IIIa e Ib/IX', s: 'La plaqueta queda opsonizada' },
        { id: 'mac', col: 2, row: 0, k: 'mech', t: 'Macrófagos del bazo', s: 'Receptores Fc-gamma' },
        { id: 'des', col: 3, row: 0, k: 'effect', t: 'Destrucción periférica', s: 'Vida media: de 7–10 días a horas' },
        { id: 'meg', col: 2, row: 2, k: 'mech', t: 'Megacariocitos bloqueados', s: 'La médula produce menos' },
        { id: 'tro', col: 4, row: 1, k: 'risk', t: 'Trombocitopenia aislada', s: 'Resto del hemograma normal' },
      ],
      edges: [
        { from: 'lb', to: 'igg' }, { from: 'igg', to: 'mac', label: 'reconoce' }, { from: 'mac', to: 'des' },
        { from: 'igg', to: 'meg', label: 'también' }, { from: 'des', to: 'tro' }, { from: 'meg', to: 'tro' },
      ],
      steps: [
        { show: ['lb'], note: 'PTI: antes idiopática, hoy inmune',
          say: 'Partamos por el mecanismo. La PTI, que antes se llamaba idiopática, es una enfermedad autoinmune adquirida: aparecen linfocitos B que fabrican anticuerpos contra las propias plaquetas.' },
        { show: ['igg'], note: 'El blanco: las glicoproteínas de la membrana',
          say: 'Son anticuerpos IgG dirigidos contra las glicoproteínas de la membrana de la plaqueta, sobre todo la dos b tres a y la uno b. ¿Te acuerdas de ellas? Son los receptores de la agregación y la adhesión que vimos en la clase anterior.' },
        { show: ['mac', 'des'], note: 'El bazo es el lugar de la destrucción',
          say: 'La plaqueta cubierta de IgG pasa por el bazo, y los macrófagos la reconocen por sus receptores Fc gamma y se la comen. Una plaqueta que debería durar siete a diez días dura apenas horas. Guarda este dato: el bazo es el protagonista, y sobre él actúan varios tratamientos.' },
        { show: ['meg'], note: 'No solo se destruyen: también se fabrican menos',
          say: 'Pero hay un segundo golpe. Los mismos anticuerpos se pegan a los megacariocitos en la médula y frenan su maduración. Así que las plaquetas no solo se destruyen más: también se producen menos.' },
        { show: ['tro'], note: 'Sin esquistocitos; glóbulos rojos y blancos normales',
          say: 'El resultado es una trombocitopenia aislada. Los glóbulos rojos y los blancos son normales, salvo una anemia si ha sangrado, y en el frotis no hay esquistocitos. Esa es la diferencia con el púrpura trombótico de la clase de microangiopatías.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Un diagnóstico de exclusión',
      cards: [
        { title: 'Primer paso', tag: 'Siempre', kind: 'alert', items: [
          { t: 'Frotis de sangre periférica', d: 'O repetir en tubo con citrato',
            say: 'Antes de diagnosticar nada, hay un paso de laboratorio que no se salta. Ante toda trombocitopenia aislada en un hemograma automatizado, pides un frotis, o repites la muestra en un tubo con citrato o heparina.' },
          { t: 'Descartar pseudotrombocitopenia', d: 'El EDTA agrupa las plaquetas en grumos',
            say: '¿Por qué? Porque existe la pseudotrombocitopenia por EDTA. En algunas personas, el anticoagulante del tubo hace que las plaquetas se agrupen en grumos gigantes, y la máquina no los cuenta. El paciente está sano; el error es del tubo.' },
        ] },
        { title: 'El paciente con PTI', tag: 'Examen físico normal', kind: 'key', items: [
          { t: 'Solo púrpura mucocutáneo', d: 'Petequias, equimosis, sangrado de mucosas',
            say: 'El segundo pilar es el examen físico. En la PTI el paciente está bien, y lo único que encuentras son las manifestaciones del sangrado: petequias, equimosis y sangrado de mucosas, como epistaxis o gingivorragia.' },
          { t: 'Bazo no palpable', d: 'Sin adenopatías ni fiebre',
            say: 'Y el bazo no se palpa. Aunque el bazo destruye las plaquetas, no crece. Este es el dato semiológico clave del tema.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico diferencial',
      title: 'Lo que no calza con PTI',
      nodes: [
        { id: 'tro', col: 0, row: 2, k: 'start', t: 'Trombocitopenia aislada', s: 'Frotis confirma' },
        { id: 'esp', col: 1, row: 0, k: 'alert', t: 'Esplenomegalia, adenopatías o fiebre', s: 'Descarta PTI primaria' },
        { id: 'neo', col: 2, row: 0, k: 'risk', t: 'Leucemia, linfoma', s: 'O hiperesplenismo, cirrosis' },
        { id: 'adu', col: 1, row: 3, k: 'q', t: 'Adulto con PTI', s: '¿Es secundaria?' },
        { id: 'sec', col: 2, row: 3, k: 'refer', t: 'Buscar LES, VIH, VHC', s: 'Y Helicobacter pylori' },
        { id: 'pti', col: 3, row: 2, k: 'good', t: 'PTI primaria', s: 'Diagnóstico de exclusión' },
      ],
      edges: [
        { from: 'tro', to: 'esp', label: 'si hay' }, { from: 'esp', to: 'neo' },
        { from: 'tro', to: 'adu' }, { from: 'adu', to: 'sec' }, { from: 'sec', to: 'pti', label: 'negativo' },
      ],
      steps: [
        { show: ['tro'], note: 'La PTI se diagnostica descartando',
          say: 'La PTI no tiene un examen que la confirme. Es un diagnóstico de exclusión: llegas a ella cuando descartas lo demás.' },
        { show: ['esp'], note: 'Examen físico anormal = otra cosa',
          say: 'Y lo primero que la descarta es el examen físico. Si hay esplenomegalia palpable, adenopatías patológicas o fiebre, esto no es una PTI primaria.' },
        { show: ['neo'], note: 'Leucemia: la trampa clásica',
          say: 'Tienes que buscar una leucemia, un linfoma, un hiperesplenismo o una cirrosis. La leucemia es la trampa más frecuente: un niño con petequias, pero además palidez, fiebre o una visceromegalia, no tiene una PTI.' },
        { show: ['adu'], note: 'En el adulto, hay que buscar la causa',
          say: 'En el adulto hay un paso más, porque la PTI puede ser secundaria a otra enfermedad.' },
        { show: ['sec'], note: 'Mimetismo molecular',
          say: 'Hay que descartar activamente lupus, VIH, hepatitis C e infección por Helicobacter pylori. Estos agentes se parecen a las glicoproteínas de la plaqueta, y el anticuerpo que los ataca termina atacando también a las plaquetas.' },
        { show: ['pti'], note: 'Solo entonces: PTI primaria',
          say: 'Si todo eso es negativo, recién ahí hablas de PTI primaria.' },
      ],
    },

    {
      type: 'points',
      kicker: 'La diferencia que más se pregunta',
      title: 'PTI del niño: aguda y benigna',
      cards: [
        { title: 'Presentación', tag: 'Niño de 2 a 6 años', kind: 'criteria', items: [
          { t: 'Inicio súbito y explosivo', d: 'Petequias y hematomas espontáneos',
            say: 'Ahora la diferencia que el examen pregunta sin descanso: el niño y el adulto son casi dos enfermedades distintas. En el niño, con un pico entre los dos y los seis años, el inicio es brusco: en horas o pocos días aparecen petequias y hematomas espontáneos.' },
          { t: '1 a 3 semanas post virosis', d: 'O tras vacunas (sarampión, varicela)',
            say: 'Y hay un antecedente típico: una a tres semanas antes tuvo un cuadro viral febril, o recibió una vacuna, como la de sarampión o varicela. Está presente en más del setenta y cinco por ciento de los niños. Afecta por igual a niños y niñas.' },
        ] },
        { title: 'Evolución', tag: 'Autolimitada', kind: 'normal', items: [
          { t: 'Plaquetas muy bajas', d: 'A menudo < 20.000/µL',
            say: 'Las plaquetas suelen estar muy bajas, muchas veces bajo veinte mil. Eso asusta, pero no te dejes llevar por el número.' },
          { t: 'Remite sola en > 80 %', d: 'En 3 a 6 meses, sin secuelas',
            say: 'Porque en más del ochenta por ciento de los niños el cuadro es benigno y se resuelve solo, en tres a seis meses, sin necesidad de fármacos tóxicos. Por eso la conducta en la mayoría es observar, y tratar solo si hay sangrado de mucosas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'La diferencia que más se pregunta',
      title: 'PTI del adulto: insidiosa y crónica',
      cards: [
        { title: 'Presentación', tag: 'Mujer de 18 a 40 años', kind: 'criteria', items: [
          { t: 'Predominio femenino', d: '3 a 4 mujeres por cada hombre',
            say: 'El adulto es el reverso de la moneda. Predomina en mujeres jóvenes, entre dieciocho y cuarenta años, con tres a cuatro mujeres por cada hombre.' },
          { t: 'Inicio insidioso', d: 'Semanas a meses, sin virosis previa',
            say: 'El inicio es insidioso, de semanas a meses, y no hay una infección previa que lo gatille.' },
        ] },
        { title: 'Evolución', tag: 'Crónica', kind: 'alert', items: [
          { t: 'Cronicidad en más del 70 %', d: 'No se espera que remita sola',
            say: 'Y tiende a la cronicidad en más del setenta por ciento de los casos. En el niño esperas que se vaya; en el adulto, esperas que se quede.' },
          { t: 'Buscar causa secundaria', d: 'LES, VIH, VHC, H. pylori',
            say: 'Por eso en el adulto siempre buscas las causas secundarias que vimos: lupus, VIH, hepatitis C y Helicobacter. En los dos casos, eso sí, el bazo no se palpa.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cuándo tratar',
      title: 'Se trata el sangrado, no el número',
      cards: [
        { title: 'El objetivo', tag: 'Recuento seguro', kind: 'key', items: [
          { t: 'No es normalizar a 150.000', d: 'Meta: sobre 30.000 a 50.000/µL',
            say: 'Pasemos al tratamiento, y partamos por el objetivo, porque ahí está la trampa. No buscamos llevar las plaquetas a ciento cincuenta mil. Buscamos un recuento seguro, habitualmente sobre treinta a cincuenta mil, que evite hemorragias graves con la menor toxicidad posible.' },
        ] },
        { title: 'Solo observar', tag: 'Sin corticoides', kind: 'normal', items: [
          { t: 'Asintomático o petequias aisladas', d: 'Con plaquetas > 30.000/µL',
            say: 'Por eso, el adulto sin síntomas, o con unas pocas petequias secas, y con más de treinta mil plaquetas, no necesita tratamiento inmunosupresor.' },
          { t: 'Control, educación, evitar AINE', d: 'Y evitar traumatismos',
            say: 'Se observa en forma ambulatoria, se educa, y se le pide evitar los antiinflamatorios no esteroidales y los golpes. Un AINE en un paciente sin plaquetas suma una segunda falla a la hemostasia primaria.' },
        ] },
        { title: 'Tratar', tag: 'Primera línea', kind: 'alert', items: [
          { t: 'Plaquetas < 20.000 a 30.000/µL', d: 'Aunque esté asintomático',
            say: 'Se trata en dos situaciones. La primera: plaquetas bajo veinte a treinta mil, aunque el paciente no tenga síntomas, por el riesgo de sangrado espontáneo.' },
          { t: 'Sangrado de mucosas activo', d: 'Con cualquier recuento',
            say: 'La segunda: sangrado activo de mucosas, como epistaxis abundante, gingivorragia, hematuria, metrorragia o hematomas extensos, sea cual sea el recuento.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Primera línea',
      title: 'Corticoides sistémicos',
      cards: [
        { title: 'Dexametasona en pulsos', tag: 'Respuesta más rápida', kind: 'pharma', items: [
          { t: '40 mg/día por 4 días', d: 'Ciclos cada 14 a 28 días, 1 a 3 ciclos',
            say: 'El pilar de la primera línea son los corticoides, con dos esquemas equivalentes. El primero es dexametasona oral en pulsos: cuarenta miligramos al día por cuatro días seguidos, en ciclos cada catorce a veintiocho días, uno a tres ciclos.' },
          { t: 'Menor exposición a esteroides', d: 'Respuesta más sostenida',
            say: 'Tiene la ventaja de una respuesta más rápida y sostenida, con menos toxicidad a largo plazo, porque el paciente pasa menos días con corticoides.' },
        ] },
        { title: 'Prednisona oral', tag: 'Esquema clásico', kind: 'pharma', items: [
          { t: '1 mg/kg/día por 2 a 4 semanas', d: 'Descenso lento en 4 a 6 semanas',
            say: 'El segundo es prednisona oral, un miligramo por kilo al día por dos a cuatro semanas, y luego un descenso lento en cuatro a seis semanas.' },
          { t: 'Responde el 70 a 80 %', d: 'En 4 a 14 días',
            say: 'Con cualquiera de los dos, responde el setenta a ochenta por ciento de los pacientes, en cuatro a catorce días. Fíjate en ese plazo: sirve para la mayoría, pero no para el paciente que está sangrando ahora. Para él existe otra herramienta.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Urgencia',
      title: 'Inmunoglobulina: saturar el bazo',
      nodes: [
        { id: 'urg', col: 0, row: 1, k: 'start', t: 'Sangrado grave o cirugía urgente', s: 'Plaquetas muy bajas' },
        { id: 'ig', col: 1, row: 1, k: 'good', t: 'IgEV 1 g/kg/día', s: 'Por 1 a 2 días' },
        { id: 'fc', col: 2, row: 0, k: 'mech', t: 'Bloquea receptores Fc', s: 'Los macrófagos dejan de comer' },
        { id: 'sub', col: 3, row: 0, k: 'effect', t: 'Plaquetas suben en 24–48 h', s: 'Efecto dura 2 a 4 semanas' },
        { id: 'snc', col: 1, row: 3, k: 'alert', t: 'Hemorragia intracraneana', s: 'Riesgo vital' },
        { id: 'tri', col: 3, row: 3, k: 'alert', t: 'IgEV + metilprednisolona + plaquetas', s: 'Todo junto, en UCI' },
      ],
      edges: [
        { from: 'urg', to: 'ig' }, { from: 'ig', to: 'fc' }, { from: 'fc', to: 'sub' },
        { from: 'urg', to: 'snc', label: 'si es del SNC' }, { from: 'snc', to: 'tri' },
      ],
      steps: [
        { show: ['urg'], note: 'Cuando no se puede esperar a los corticoides',
          say: 'Veamos la urgencia. Plaquetopenia grave con sangrado de mucosas activo, necesidad de una cirugía urgente, o sospecha de sangrado intracraneano. Aquí no puedes esperar dos semanas.' },
        { show: ['ig'], note: 'Terapia de rescate de acción rápida',
          say: 'La herramienta es la inmunoglobulina endovenosa, un gramo por kilo al día por uno a dos días.' },
        { show: ['fc'], note: 'Vuelve el protagonista: el bazo',
          say: '¿Cómo funciona? Vuelve el mecanismo del inicio. La inmunoglobulina ocupa en forma masiva los receptores Fc de los macrófagos del bazo. Es como saturar el bazo: el macrófago ya no tiene dónde reconocer a la plaqueta cubierta de anticuerpos, y deja de destruirla.' },
        { show: ['sub'], note: 'Rápida pero transitoria',
          say: 'Así las plaquetas suben a niveles seguros en apenas veinticuatro a cuarenta y ocho horas. Pero el efecto es transitorio: dura dos a cuatro semanas. Es un puente, no una cura.' },
        { show: ['snc'], note: 'Cefalea brusca, déficit focal, coma',
          say: 'Y el escenario extremo: hemorragia con riesgo vital, como una hemorragia subaracnoidea o intraparenquimatosa. Piensa en ella ante una cefalea brusca, un déficit focal o compromiso de conciencia.' },
        { show: ['tri'], note: 'La única vez que se transfunden plaquetas',
          say: 'Ahí se da todo junto: inmunoglobulina, un gramo de metilprednisolona endovenosa en bolo, y transfusión continua de plaquetas. Las plaquetas se destruyen rápido, pero dan minutos u horas de hemostasia para permitir la neurocirugía. Fuera de este escenario, transfundir plaquetas en la PTI es un error.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Segunda línea',
      title: 'Cuando los corticoides no bastan',
      cards: [
        { title: 'Agonistas de trombopoyetina', tag: 'Estimulan la médula', kind: 'pharma', items: [
          { t: 'Eltrombopag oral o romiplostim SC', d: 'Respuesta sostenida en > 80 %',
            say: 'Si el paciente depende de los corticoides, o no responde y sigue con menos de treinta mil plaquetas y sangrado, pasamos a segunda línea. La primera opción son los agonistas del receptor de trombopoyetina: eltrombopag, oral y diario, o romiplostim, subcutáneo y semanal.' },
          { t: 'Atacan el segundo golpe', d: 'Sin inmunosupresión',
            say: 'Estimulan directamente a los megacariocitos, es decir, atacan el segundo golpe del mecanismo, la producción. Logran respuestas sostenidas en más del ochenta por ciento, sin inmunosuprimir.' },
        ] },
        { title: 'Rituximab', tag: 'Anti-CD20', kind: 'normal', items: [
          { t: 'Elimina los linfocitos B', d: 'Los que fabrican el anticuerpo',
            say: 'La segunda opción es el rituximab, un anticuerpo anti CD veinte, que elimina los clones de linfocitos B que fabrican los autoanticuerpos. Ataca el origen del problema.' },
        ] },
        { title: 'Esplenectomía', tag: 'Cura > 65 % de adultos', kind: 'alert', items: [
          { t: 'Diferida al menos 12 meses', d: 'Por si remite en forma tardía',
            say: 'Y la tercera es la esplenectomía laparoscópica, que cura a más del sesenta y cinco por ciento de los adultos, porque saca el sitio principal de destrucción y de producción de anticuerpos. Pero se pospone al menos doce meses desde el diagnóstico, para dar tiempo a una remisión espontánea tardía.' },
          { t: 'Vacunar antes', d: 'Contra bacterias encapsuladas',
            say: 'Y antes de operar, el paciente se vacuna contra las bacterias encapsuladas. Eso se pregunta.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol, desde el hemograma alterado hasta la conducta.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Niño vs adulto, y las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Trombocitopenia aislada en el hemograma', 'Frotis o repetir en citrato', 'Diagnosticar PTI sin frotis'],
          say: 'Repasemos las trampas. Trombocitopenia aislada en un hemograma: primero el frotis. El error es diagnosticar PTI sin descartar la pseudotrombocitopenia.' },
        { cells: ['Petequias + esplenomegalia o adenopatías', 'Buscar leucemia o linfoma', 'Llamarlo PTI'],
          say: 'Petequias con esplenomegalia, adenopatías o fiebre: busca una leucemia o un linfoma. El bazo palpable descarta la PTI primaria.' },
        { cells: ['Niño post virosis, sin sangrado de mucosas', 'Observar: remite en > 80 %', 'Corticoides por el número'],
          say: 'Niño después de una virosis, con petequias pero sin sangrado de mucosas: observar, porque más del ochenta por ciento remite solo. El error es tratar por el número.' },
        { cells: ['Adulto asintomático, > 30.000/µL', 'Observar, evitar AINE', 'Iniciar corticoides'],
          say: 'Adulto sin síntomas y con más de treinta mil plaquetas: observar y evitar antiinflamatorios. Tampoco lleva corticoides.' },
        { cells: ['Adulto < 20.000–30.000/µL sin sangrado grave', 'Prednisona o dexametasona', 'Transfundir plaquetas'],
          say: 'Adulto con menos de veinte a treinta mil plaquetas, sin sangrado grave: corticoides, prednisona o dexametasona. Transfundir plaquetas es el error clásico, porque se destruyen en minutos.' },
        { cells: ['Sangrado mucoso activo grave o cirugía urgente', 'IgEV (+ corticoides)', 'Esperar la respuesta a corticoides'],
          say: 'Sangrado mucoso grave o cirugía urgente: inmunoglobulina endovenosa, que actúa en uno o dos días. Los corticoides solos tardan demasiado.' },
        { cells: ['Refractario o corticodependiente', 'AR-TPO, rituximab o esplenectomía', 'Esplenectomía antes de 12 meses'],
          say: 'Y el refractario: agonistas de trombopoyetina, rituximab o esplenectomía. Pero la esplenectomía no antes de doce meses, y con vacunas previas.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 28 años, sana, consulta por 3 semanas de petequias en las piernas y equimosis pequeñas. Sin epistaxis, gingivorragia ni metrorragia. Examen físico: petequias en extremidades inferiores, sin adenopatías, bazo no palpable. Hb 13 g/dL, leucocitos normales, plaquetas 14.000/µL. TP y TTPK normales. Frotis: trombocitopenia real, sin esquistocitos.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Observación ambulatoria y evitar AINE' },
        { letter: 'B', text: 'Transfusión de concentrado de plaquetas' },
        { letter: 'C', text: 'Prednisona 1 mg/kg/día' },
        { letter: 'D', text: 'Esplenectomía laparoscópica' },
        { letter: 'E', text: 'Plasmaféresis urgente' },
      ],
      correct: 'C',
      explanation: 'PTI del adulto con plaquetas bajo 20.000–30.000/µL: se trata aunque no haya sangrado mucoso. Primera línea: prednisona 1 mg/kg/día (o dexametasona 40 mg/día por 4 días). La observación es para más de 30.000/µL; la transfusión, solo para el riesgo vital; la esplenectomía, para el refractario después de 12 meses; la plasmaféresis, para el PTT.',
      say: {
        stem: 'Vamos con un caso. Mujer de veintiocho años, sana, con tres semanas de petequias y equimosis pequeñas en las piernas. No tiene epistaxis, gingivorragia ni metrorragia. No hay adenopatías y el bazo no se palpa. Hemoglobina y leucocitos normales, plaquetas en catorce mil, tiempos de coagulación normales, y el frotis confirma una trombocitopenia real, sin esquistocitos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: observar y evitar antiinflamatorios, transfundir plaquetas, prednisona un miligramo por kilo, esplenectomía, o plasmaféresis urgente. Piénsalo.',
        answer: 'La respuesta es la C. Es una PTI del adulto, con un examen físico normal y un frotis sin esquistocitos. No sangra por mucosas, pero tiene catorce mil plaquetas, bajo el corte de veinte a treinta mil, así que se trata con corticoides. El distractor tentador es observar, pero eso es para quien tiene más de treinta mil. La transfusión es solo para el riesgo vital, la esplenectomía llega después de doce meses, y la plasmaféresis es del púrpura trombótico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 75',
      stem: 'Niño de 6 años previamente sano, sin medicamentos, consulta por púrpura petequial generalizada de inicio súbito posterior a infección viral. Plaquetas: 10.000/mm³. Resto del hemograma normal. Sin adenopatías ni visceromegalias.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Púrpura trombocitopénica inmune (PTI)' },
        { letter: 'B', text: 'Púrpura trombótica trombocitopénica' },
        { letter: 'C', text: 'Síndrome hemolítico urémico' },
        { letter: 'D', text: 'Coagulación intravascular diseminada' },
        { letter: 'E', text: 'Leucemia aguda linfoide' },
      ],
      correct: 'A',
      explanation: 'Niño sano, inicio súbito tras una virosis, trombocitopenia aislada y examen físico normal: PTI. Sin anemia hemolítica ni falla renal (no es PTT ni SHU) y sin otras series alteradas ni visceromegalias (no es leucemia).',
      say: {
        stem: 'Ahora preguntas reales. Esta es del EUNACOM de julio de dos mil veinticinco. Niño de seis años, sano, sin medicamentos, con púrpura petequial generalizada de inicio súbito después de una infección viral. Plaquetas en diez mil, el resto del hemograma normal, y sin adenopatías ni visceromegalias.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: trombocitopenia inmune, púrpura trombótico, síndrome hemolítico urémico, coagulación intravascular diseminada, o leucemia linfoblástica aguda. Piénsalo.',
        answer: 'Es la A. Tiene todo el perfil del niño: inicio súbito, virosis previa, plaquetas aisladas muy bajas, y un examen físico normal. El distractor más tentador es la leucemia, porque también da petequias en un niño; pero la leucemia altera las otras series y suele dar visceromegalias o adenopatías, y aquí no hay nada de eso. El púrpura trombótico y el síndrome hemolítico tendrían anemia hemolítica y falla renal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 101',
      stem: 'Un niño de 5 años cursa un cuadro respiratorio alto desde hace 7 días que ha recibido tratamiento con paracetamol e ibuprofeno. Consulta por aparición de múltiples lesiones cutáneas consistentes en petequias y equimosis en las extremidades y el abdomen, asociadas a epistaxis en algunas oportunidades. Se solicitan exámenes, destacando hemograma con hematocrito: 42%, hemoglobina: 14 g/dL, glóbulos blancos: 9.500/mm³ con 65% linfocitos, 30% neutrófilos y 5% monocitos, plaquetas: 60.000/mm³.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Leucemia linfática aguda' },
        { letter: 'B', text: 'Meningococcemia' },
        { letter: 'C', text: 'Púrpura trombocitopénica inmune' },
        { letter: 'D', text: 'Alteración de la hemostasia secundaria a fármacos' },
        { letter: 'E', text: 'Púrpura de Schönlein-Henoch' },
      ],
      correct: 'C',
      explanation: 'Trombocitopenia aislada tras una virosis en un niño: PTI. Ninguna otra serie está alterada, lo que aleja la leucemia. La disfunción plaquetaria por AINE y el Schönlein-Henoch tienen plaquetas normales.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Niño de cinco años con un cuadro respiratorio alto de siete días, tratado con paracetamol e ibuprofeno. Aparecen petequias y equimosis en las extremidades y el abdomen, con algunas epistaxis. Hemoglobina normal, leucocitos normales, y plaquetas en sesenta mil.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: leucemia linfoblástica aguda, meningococcemia, trombocitopenia inmune, alteración de la hemostasia por fármacos, o púrpura de Schönlein Henoch. Piénsalo.',
        answer: 'Es la C. Otra vez: niño, virosis previa y trombocitopenia aislada. El distractor tentador es el ibuprofeno, porque altera la función plaquetaria; pero no baja el recuento, y aquí las plaquetas están en sesenta mil. El Schönlein Henoch también tiene plaquetas normales. Y los leucocitos y la hemoglobina normales alejan la leucemia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2024 · Pregunta 121',
      stem: 'Adulto con PTI sin sangrado grave, plaquetas en 5.000:',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Corticoides 1mg/kg' },
        { letter: 'B', text: 'Transfusión de plaquetas' },
        { letter: 'C', text: 'Terapia biológica' },
        { letter: 'D', text: 'Amoxicilina' },
        { letter: 'E', text: 'Ibuprofeno' },
      ],
      correct: 'A',
      explanation: 'PTI del adulto con plaquetas muy bajas, sin sangrado grave: primera línea con corticoides (prednisona 1 mg/kg/día). La transfusión de plaquetas se reserva para el sangrado con riesgo vital; la terapia biológica es de segunda línea.',
      say: {
        stem: 'Y una última, del EUNACOM de diciembre de dos mil veinticuatro. Es corta: adulto con PTI, sin sangrado grave, y plaquetas en cinco mil.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: corticoides a un miligramo por kilo, transfusión de plaquetas, terapia biológica, amoxicilina, o ibuprofeno. Piénsalo.',
        answer: 'Es la A, corticoides. Cinco mil plaquetas está muy bajo el corte, así que se trata, y la primera línea son los corticoides. El distractor es la transfusión de plaquetas, porque el número asusta; pero sin sangrado grave es inútil, ya que el bazo las destruye en minutos. La terapia biológica, como el rituximab, es de segunda línea. Y el ibuprofeno está contraindicado.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Exclusión', kind: 'key', items: [
          { t: 'Primero el frotis', d: 'Descartar pseudotrombocitopenia',
            say: 'Cerremos con las reglas de oro. Ante una trombocitopenia aislada, primero el frotis.' },
          { t: 'Bazo palpable: no es PTI', d: 'Buscar leucemia o linfoma',
            say: 'La PTI tiene un examen físico normal. Si hay bazo palpable, adenopatías o fiebre, busca otra cosa.' },
        ] },
        { title: 'Niño vs adulto', tag: 'Dos enfermedades', kind: 'criteria', items: [
          { t: 'Niño: post viral, remite sola', d: 'Observar en la mayoría',
            say: 'El niño hace una PTI aguda, después de una virosis, que remite sola en más del ochenta por ciento: se observa.' },
          { t: 'Adulto: mujer joven, crónica', d: 'Buscar LES, VIH, VHC, H. pylori',
            say: 'El adulto, sobre todo la mujer joven, hace una PTI insidiosa y crónica, y hay que buscar causas secundarias.' },
        ] },
        { title: 'Tratamiento', tag: 'El sangrado manda', kind: 'pharma', items: [
          { t: 'Corticoides si < 20.000–30.000', d: 'O sangrado de mucosas',
            say: 'Se trata con corticoides si hay menos de veinte a treinta mil plaquetas o sangrado de mucosas. La inmunoglobulina es para la urgencia.' },
          { t: 'Plaquetas: solo riesgo vital', d: 'Con IgEV y metilprednisolona',
            say: 'Y las plaquetas se transfunden solo ante un sangrado con riesgo vital. Si te llevas una sola idea de hoy: la PTI es una trombocitopenia aislada en un paciente con examen físico normal, y se trata el sangrado, no el número. En la próxima clase pasamos de las plaquetas a los factores: hemofilia y von Willebrand. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Trombocitopenia inmune: del hemograma a la conducta',
    root: N('start', 'Trombocitopenia aislada', 'TP y TTPK normales',
      'Hemograma con plaquetas bajas, el resto de las series normales, y tiempos de coagulación normales.',
      ['', N('q', '¿El frotis la confirma?', 'Descartar grumos por EDTA',
        'Lo primero es el frotis, o repetir la muestra en citrato. ¿La trombocitopenia es real?',
        ['No', N('ok', 'Pseudotrombocitopenia', 'Paciente sano',
          'Si el frotis muestra grumos de plaquetas, es una pseudotrombocitopenia por EDTA. El paciente está sano.')],
        ['Sí', N('q', '¿Examen físico normal?', 'Bazo, adenopatías, fiebre',
          'Si es real, examina al paciente. ¿Tiene solo púrpura, o además bazo palpable, adenopatías o fiebre?',
          ['No', N('refer', 'Buscar otra causa', 'Leucemia, linfoma, hiperesplenismo',
            'Con esplenomegalia, adenopatías o fiebre no es una PTI primaria. Busca leucemia, linfoma, hiperesplenismo o cirrosis.')],
          ['Sí: PTI', N('q', '¿Cómo sangra y cuántas plaquetas?', 'El sangrado manda',
            'Examen normal: es una PTI. En el adulto, descarta lupus, VIH, hepatitis C y Helicobacter. Ahora decide según el sangrado y el recuento.',
            ['Sin sangrado, > 30.000', N('ok', 'Observar', 'Educar y evitar AINE',
              'Sin sangrado o con petequias aisladas y más de treinta mil plaquetas: observación y educación, sin corticoides. Es la conducta en la mayoría de los niños.')],
            ['< 20.000–30.000 o mucosas', N('do', 'Corticoides', 'Dexametasona o prednisona',
              'Menos de veinte a treinta mil, o sangrado de mucosas: corticoides, dexametasona en pulsos o prednisona un miligramo por kilo. Si no responde, segunda línea.')],
            ['Sangrado grave o SNC', N('alert', 'IgEV + metilprednisolona', '+ plaquetas si hay riesgo vital',
              'Sangrado grave o cirugía urgente: inmunoglobulina endovenosa. Si hay riesgo vital, como una hemorragia cerebral, se suma metilprednisolona y transfusión de plaquetas.')])])])]),
  },
};
