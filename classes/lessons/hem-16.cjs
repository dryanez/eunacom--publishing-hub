// Clase 8.16 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_hematologia.cjs (hem-16).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'hem-16',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Insuficiencia medular en semanas, blastos en el frotis y la M3 que no puede esperar',
      say: 'Bienvenidos. Hoy entramos a la oncohematología con las leucemias agudas: la mieloide aguda y la linfoblástica aguda. Es uno de los temas más preguntados del bloque. Y el examen pregunta casi siempre lo mismo: reconocer el cuadro clínico, saber qué examen confirma, distinguir la mieloide de la linfoide, y actuar de inmediato en la leucemia promielocítica, que conecta directamente con la CID de la clase anterior.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Un bloqueo madurativo que apaga la médula',
      nodes: [
        { id: 'blo', col: 0, row: 1, k: 'cause', t: 'Bloqueo madurativo', s: 'Progenitor que no madura' },
        { id: 'bla', col: 1, row: 1, k: 'mech', t: 'Blastos se acumulan', s: 'Proliferan y no mueren' },
        { id: 'ane', col: 2, row: 0, k: 'effect', t: 'Anemia', s: 'Astenia, palidez, taquicardia' },
        { id: 'neu', col: 2, row: 1, k: 'effect', t: 'Neutropenia', s: 'Fiebre e infecciones graves' },
        { id: 'pla', col: 2, row: 2, k: 'effect', t: 'Trombocitopenia', s: 'Petequias, equimosis, gingivorragia' },
        { id: 'inf', col: 3, row: 3, k: 'risk', t: 'Infiltración extramedular', s: 'Hueso, hígado, bazo, ganglios, encías' },
      ],
      edges: [
        { from: 'blo', to: 'bla' }, { from: 'bla', to: 'ane' }, { from: 'bla', to: 'neu' }, { from: 'bla', to: 'pla' },
        { from: 'bla', to: 'inf', label: 'invaden' },
      ],
      steps: [
        { show: ['blo'], note: 'La célula se queda inmadura',
          say: 'Partamos por el mecanismo. En la leucemia aguda, un progenitor de la médula sufre un bloqueo madurativo: se queda detenido en una etapa muy temprana. Además prolifera sin control y resiste la apoptosis.' },
        { show: ['bla'], note: 'Blastos: células inmaduras que llenan la médula',
          say: 'Esas células inmaduras son los blastos. Se acumulan rápido en la médula, la colapsan, y además liberan señales que inhiben la producción normal.' },
        { show: ['ane', 'neu', 'pla'], note: 'Tres síndromes: anémico, infeccioso y hemorrágico',
          say: 'El resultado es una insuficiencia medular aguda, y se traduce en tres síndromes a la vez. Anemia: astenia, palidez y taquicardia. Neutropenia: fiebre e infecciones bacterianas o por hongos. Y trombocitopenia: petequias, equimosis, gingivorragia y epistaxis, típicamente con plaquetas bajo veinte mil.' },
        { show: ['inf'], note: 'Los blastos también salen de la médula',
          say: 'Y los blastos no se quedan en la médula: invaden otros órganos. Eso da los dolores óseos, el hígado y el bazo grandes, las adenopatías y, en algunos subtipos mieloides, la hiperplasia de las encías.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: '¿Cómo llega el paciente?',
      cards: [
        { title: 'Insuficiencia medular', tag: 'En semanas', kind: 'key', items: [
          { t: 'Anemia + fiebre + sangrado', d: 'Las tres series caen a la vez',
            say: 'Veamos cómo llega el paciente. La clave es la suma: anemia, fiebre y sangrado al mismo tiempo, instalados en pocas semanas. Cuando un caso junta las tres cosas, piensa en leucemia aguda.' },
          { t: 'Evolución subaguda', d: 'Semanas, no años',
            say: 'Fíjate en el tiempo. No son años de síntomas, como en las leucemias crónicas que veremos después. Son semanas.' },
        ] },
        { title: 'Infiltración', tag: 'Pistas del subtipo', kind: 'criteria', items: [
          { t: 'Dolor óseo nocturno', d: 'Muy típico del niño con LLA',
            say: 'Luego mira la infiltración. El dolor óseo intenso, nocturno, por expansión del periostio, es muy frecuente en el niño con leucemia linfoblástica.' },
          { t: 'Hepatoesplenomegalia y adenopatías', d: 'Más en la LLA',
            say: 'La hepatoesplenomegalia y las adenopatías cervicales también orientan más a la linfoblástica.' },
          { t: 'Hiperplasia gingival', d: 'LMA mielomonocítica y monocítica',
            say: 'Y la hiperplasia de las encías es típica de los subtipos mielomonocítico y monocítico de la mieloide, la eme cuatro y la eme cinco.' },
        ] },
        { title: 'Diagnóstico diferencial', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: 'Trombocitopenia aislada no es leucemia', d: 'Eso es PTI',
            say: 'Y una distinción que ya vimos: si solo caen las plaquetas, con el resto del hemograma normal, piensa en PTI. En la leucemia aguda caen varias series.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico',
      title: 'Del hemograma al mielograma',
      nodes: [
        { id: 'sos', col: 0, row: 1, k: 'start', t: 'Sospecha clínica', s: 'Anemia + fiebre + sangrado' },
        { id: 'hem', col: 1, row: 1, k: 'q', t: 'Hemograma con frotis', s: 'Leucocitosis o leucopenia con blastos' },
        { id: 'der', col: 2, row: 0, k: 'refer', t: 'Derivación urgente', s: 'Centro terciario · GES' },
        { id: 'mie', col: 2, row: 2, k: 'good', t: 'Mielograma y biopsia', s: '≥ 20% de blastos (OMS)' },
        { id: 'cit', col: 3, row: 2, k: 'mech', t: 'Citometría y MPO', s: 'Define mieloide o linfoide' },
        { id: 'exc', col: 3, row: 0, k: 'trap', t: 'Excepciones genéticas', s: 't(8;21), inv(16), t(15;17)' },
      ],
      edges: [
        { from: 'sos', to: 'hem' }, { from: 'hem', to: 'der', label: 'blastos' }, { from: 'hem', to: 'mie' },
        { from: 'mie', to: 'cit' }, { from: 'mie', to: 'exc', label: 'aun con < 20%' },
      ],
      steps: [
        { show: ['sos', 'hem'], note: 'El primer examen es el hemograma',
          say: 'Ahora el estudio. El primer examen es el hemograma con frotis. Y ojo, que los leucocitos pueden estar altos, normales o bajos: lo que importa es ver blastos en la sangre periférica.' },
        { show: ['der'], note: 'Blastos en sangre: derivar ya',
          say: 'Blastos en la sangre periférica son una urgencia oncohematológica: se deriva de inmediato a un centro terciario. En Chile, las leucemias tienen garantía GES en todas las edades.' },
        { show: ['mie'], note: 'Confirma el mielograma: 20% de blastos',
          say: 'El examen que confirma es el mielograma, junto con la biopsia de médula ósea. El criterio de la Organización Mundial de la Salud es claro: veinte por ciento o más de blastos en la médula o en la sangre. Ese número se pregunta.' },
        { show: ['cit'], note: 'Luego se define la estirpe',
          say: 'Después se define la estirpe con la morfología, la citoquímica con mieloperoxidasa, y la citometría de flujo: ¿es mieloide o linfoide?' },
        { show: ['exc'], note: 'Algunas alteraciones bastan para diagnosticar LMA',
          say: 'Y un detalle fino: hay alteraciones genéticas que diagnostican leucemia mieloide aguda aunque los blastos no lleguen al veinte por ciento. Son la translocación ocho veintiuno, la inversión del dieciséis y la translocación quince diecisiete.' },
      ],
    },

    {
      type: 'table',
      kicker: 'LMA vs LLA',
      title: 'Mieloide o linfoide: las diferencias',
      head: ['Característica', 'LMA', 'LLA'],
      rows: [
        { cells: ['Edad', 'Adulto mayor (mediana 68 años)', 'Niños (pico 2 a 5 años)'],
          say: 'Comparemos las dos. La edad es la primera pista: la mieloide aguda es la leucemia aguda del adulto mayor, con una mediana de sesenta y ocho años. La linfoblástica es la del niño, con un pico entre los dos y los cinco años.' },
        { cells: ['Blastos', 'Grandes, citoplasma amplio, gránulos', 'Medianos, citoplasma escaso, sin gránulos'],
          say: 'En el frotis, el mieloblasto es grande, con citoplasma amplio y gránulos azurófilos. El linfoblasto es más pequeño, con poco citoplasma y sin gránulos.' },
        { cells: ['Bastones de Auer', 'Presentes: patognomónicos', 'Nunca'],
          say: 'Los bastones de Auer solo existen en la mieloide. Son patognomónicos: si los ves, descartaste una linfoblástica.' },
        { cells: ['Citoquímica', 'Mieloperoxidasa y Sudán negro positivos', 'MPO negativa · TdT positiva'],
          say: 'La mieloide es positiva para mieloperoxidasa y Sudán negro. La linfoblástica es negativa para mieloperoxidasa y expresa la enzima TdT en más del noventa y cinco por ciento de los casos.' },
        { cells: ['Infiltración', 'Encías, cloromas (M4/M5)', 'Sistema nervioso central y testículos'],
          say: 'La mieloide infiltra encías y piel. La linfoblástica prefiere las meninges y los testículos, y eso cambia su tratamiento.' },
        { cells: ['Emergencia típica', 'M3: CID → ATRA urgente', 'Lisis tumoral al iniciar quimioterapia'],
          say: 'Cada una tiene su emergencia: en la mieloide, la promielocítica con CID; en la linfoblástica, el síndrome de lisis tumoral al empezar la quimioterapia.' },
        { cells: ['Pronóstico', '30–40% de sobrevida en adultos', '> 85–90% de curación en niños'],
          say: 'Y el pronóstico es muy distinto: la linfoblástica infantil se cura en más del ochenta y cinco a noventa por ciento; la mieloide del adulto tiene una sobrevida de treinta a cuarenta por ciento.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Inmunofenotipo',
      title: 'Los marcadores que definen la estirpe',
      cards: [
        { title: 'LMA', tag: 'Mieloide', kind: 'key', items: [
          { t: 'Bastones de Auer', d: 'Lisosomas fusionados con peroxidasa',
            say: 'Vamos un poco más fino con los marcadores. Los bastones de Auer son estructuras cristalinas lineales, hechas de lisosomas fusionados y peroxidasa. Por eso se asocian a la mieloperoxidasa positiva.' },
          { t: 'CD13, CD33, CD117, MPO', d: 'Antígenos mieloides en citometría',
            say: 'En la citometría, la mieloide expresa CD trece, CD treinta y tres, CD ciento diecisiete y mieloperoxidasa.' },
        ] },
        { title: 'LLA', tag: 'Linfoide', kind: 'criteria', items: [
          { t: 'TdT positiva', d: 'Enzima nuclear del linfoblasto',
            say: 'La linfoblástica tiene la TdT, la desoxinucleotidil transferasa terminal, una enzima nuclear propia del linfoblasto.' },
          { t: 'Estirpe B: CD19, CD10, CD22', d: 'CD10 = antígeno CALLA',
            say: 'La de estirpe B expresa CD diecinueve, CD veinte, CD veintidós y el CD diez, que es el antígeno CALLA.' },
          { t: 'Estirpe T: CD3, CD7', d: 'Menos frecuente',
            say: 'Y la de estirpe T expresa CD tres y CD siete.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Leucemia promielocítica aguda',
      title: 'La M3: una urgencia que no espera el PCR',
      nodes: [
        { id: 'tra', col: 0, row: 1, k: 'cause', t: 't(15;17)', s: 'Gen de fusión PML-RARA' },
        { id: 'pro', col: 1, row: 1, k: 'mech', t: 'Promielocitos bloqueados', s: 'Llenos de gránulos procoagulantes' },
        { id: 'cid', col: 2, row: 1, k: 'alert', t: 'CID hiperfibrinolítica', s: 'Fibrinógeno bajo' },
        { id: 'hem', col: 3, row: 0, k: 'risk', t: 'Hemorragia cerebral o pulmonar', s: 'Muerte en horas' },
        { id: 'atr', col: 3, row: 2, k: 'good', t: 'ATRA inmediato', s: 'Sin esperar PCR ni FISH' },
        { id: 'sdi', col: 4, row: 3, k: 'trap', t: 'Síndrome de diferenciación', s: 'Tratar con dexametasona' },
      ],
      edges: [
        { from: 'tra', to: 'pro' }, { from: 'pro', to: 'cid', label: 'se lisan' }, { from: 'cid', to: 'hem' },
        { from: 'cid', to: 'atr', label: 'sospecha' }, { from: 'atr', to: 'sdi', label: 'vigilar' },
      ],
      steps: [
        { show: ['tra'], note: 'Una translocación que bloquea la maduración',
          say: 'Ahora la leucemia que más se pregunta: la promielocítica aguda, la eme tres. Su marca es la translocación quince diecisiete, que forma el gen de fusión PML-RARA. Esa proteína anómala impide que el promielocito madure.' },
        { show: ['pro'], note: 'Los promielocitos cargan procoagulantes',
          say: 'Esos promielocitos están llenos de gránulos con sustancias procoagulantes. Y cuando se rompen, las liberan a la sangre.' },
        { show: ['cid', 'hem'], note: 'Conexión directa con la CID',
          say: 'El resultado es lo que vimos la clase pasada: una coagulación intravascular diseminada, en este caso hiperfibrinolítica, con el fibrinógeno muy bajo. El paciente puede morir en horas por una hemorragia cerebral o pulmonar.' },
        { show: ['atr'], note: 'Basta la sospecha para iniciar ATRA',
          say: 'Por eso la conducta es inmediata. Ante la simple sospecha, blastos con muchos bastones de Auer, sangrado y fibrinógeno bajo, se inicia de inmediato ácido todo-trans-retinoico, el ATRA, junto con trióxido de arsénico o quimioterapia con antraciclinas. No se espera la confirmación por PCR o FISH. Esa es la trampa clásica.' },
        { show: ['sdi'], note: 'El ATRA hace madurar a los promielocitos',
          say: '¿Por qué funciona? El ATRA supera el bloqueo y obliga a los promielocitos a madurar a neutrófilos, así dejan de liberar procoagulantes, y la CID se resuelve en cuarenta y ocho a setenta y dos horas. Hay que vigilar el síndrome de diferenciación, que se trata con dexametasona. Y la buena noticia: la eme tres se cura en más del noventa por ciento.' },
      ],
    },

    {
      type: 'points',
      kicker: 'LLA infantil',
      title: 'LLA: el cáncer más frecuente del niño',
      cards: [
        { title: 'Epidemiología', tag: 'GES en menores de 15', kind: 'key', items: [
          { t: 'La neoplasia más común en pediatría', d: '80% de las leucemias infantiles',
            say: 'Pasemos a la linfoblástica. Es la neoplasia maligna más común de la infancia, y representa el ochenta por ciento de las leucemias del niño, con un pico entre los dos y los cinco años.' },
          { t: 'Protocolo PINDA', d: 'Sobrevida libre de enfermedad > 85–90%',
            say: 'En Chile se trata con el protocolo nacional PINDA, con garantía GES, y la sobrevida libre de enfermedad a cinco años supera el ochenta y cinco a noventa por ciento.' },
        ] },
        { title: 'Tratamiento', tag: 'Quimioterapia intensiva', kind: 'pharma', items: [
          { t: 'Inducción', d: 'Vincristina, dexametasona, L-asparaginasa, daunorrubicina',
            say: 'La inducción combina vincristina, dexametasona, L-asparaginasa y daunorrubicina, para erradicar los blastos de la médula.' },
          { t: 'Profilaxis intratecal obligatoria', d: 'Metotrexato, citarabina y dexametasona',
            say: 'Y siempre lleva profilaxis del sistema nervioso central con quimioterapia intratecal: metotrexato, citarabina y dexametasona por punción lumbar.' },
        ] },
        { title: 'Santuarios', tag: 'Por qué la intratecal', kind: 'alert', items: [
          { t: 'Meninges y testículos', d: 'La quimioterapia sistémica no llega',
            say: '¿Por qué la intratecal es obligatoria? Porque los linfoblastos infiltran temprano las meninges y los testículos, que son santuarios a los que la quimioterapia sistémica no llega. Ahí se esconden las recaídas.' },
          { t: 'Lisis tumoral', d: 'Emergencia al iniciar la quimioterapia',
            say: 'Y al iniciar la quimioterapia, vigila el síndrome de lisis tumoral, que veremos en detalle en una clase próxima.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'LMA del adulto',
      title: 'LMA: inducción, riesgo genético y trasplante',
      cards: [
        { title: 'Inducción', tag: 'Esquema 7 + 3', kind: 'pharma', items: [
          { t: 'Citarabina 7 días + daunorrubicina 3 días', d: 'Busca la remisión completa',
            say: 'La mieloide aguda del adulto se induce con el esquema siete más tres: citarabina en infusión continua por siete días y daunorrubicina por tres días. El objetivo es la remisión completa.' },
          { t: 'Aplasia de 3 a 4 semanas', d: 'Soporte intensivo',
            say: 'El precio es una aplasia profunda de tres a cuatro semanas, que requiere soporte intensivo. Ahí aparece la neutropenia febril, que también tiene su clase.' },
        ] },
        { title: 'Riesgo genético', tag: 'Define la consolidación', kind: 'criteria', items: [
          { t: 'Favorable: t(8;21), inv(16), NPM1', d: 'Consolidar con citarabina en altas dosis',
            say: 'Después, la genética define qué sigue. En el riesgo favorable, como la translocación ocho veintiuno, la inversión del dieciséis o la mutación NPM uno sin FLT tres, se consolida con citarabina en altas dosis, sin trasplante en la primera remisión.' },
          { t: 'Adverso: cariotipo complejo, TP53', d: 'Trasplante alogénico en primera remisión',
            say: 'En el riesgo adverso, con cariotipo complejo, monosomías o TP cincuenta y tres mutado, el trasplante alogénico es obligatorio en la primera remisión completa.' },
        ] },
        { title: 'Trasplante alogénico', tag: 'Curativo', kind: 'key', items: [
          { t: 'Efecto injerto contra leucemia', d: 'Riesgo intermedio o alto con donante',
            say: 'El trasplante alogénico de progenitores hematopoyéticos es el tratamiento curativo definitivo en la mieloide de riesgo intermedio o alto, sobre todo en menores de sesenta años con donante compatible. Cura por el efecto injerto contra leucemia.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol de decisión, desde el paciente con insuficiencia medular hasta la conducta.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Anemia + fiebre + sangrado en semanas', 'Hemograma con frotis', 'Pensar solo en infección'],
          say: 'Repasemos las trampas. Anemia, fiebre y sangrado instalados en semanas: el primer examen es el hemograma con frotis. El error es quedarse en una infección.' },
        { cells: ['Blastos en sangre periférica', 'Derivación urgente + mielograma', 'Controlar en unas semanas'],
          say: 'Blastos en la sangre: derivación urgente y mielograma. Nunca se controla en unas semanas.' },
        { cells: ['Confirmación diagnóstica', 'Mielograma: ≥ 20% de blastos', 'Quedarse solo con el hemograma'],
          say: 'La confirmación es el mielograma, con veinte por ciento de blastos o más. El hemograma inicia el estudio, pero no confirma.' },
        { cells: ['Bastones de Auer', 'LMA', 'Pensar en LLA'],
          say: 'Bastones de Auer: siempre mieloide.' },
        { cells: ['Auer abundantes + sangrado + fibrinógeno bajo', 'ATRA inmediato + soporte de la CID', 'Esperar el PCR de t(15;17)'],
          say: 'Bastones de Auer abundantes, sangrado y fibrinógeno bajo: ATRA inmediato con soporte de la CID. El error que mata es esperar el PCR.' },
        { cells: ['LLA infantil', 'Quimioterapia + profilaxis intratecal', 'Omitir la profilaxis del SNC'],
          say: 'Linfoblástica infantil: quimioterapia con profilaxis intratecal. Omitir la profilaxis deja a los blastos escondidos en las meninges.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 24 años con 2 semanas de astenia severa, fiebre de 38,3 °C, gingivorragia profusa y equimosis. Palidez y petequias, sin adenopatías ni visceromegalias. Hb 6,9 g/dL, leucocitos 32.000/µL con 65% de blastos grandes con gránulos y múltiples bastones de Auer, plaquetas 16.000/µL. INR 1,8, TTPK 45 s, fibrinógeno 85 mg/dL, dímero D > 15.000 ng/mL.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Esperar el resultado de PCR para t(15;17) antes de iniciar tratamiento' },
        { letter: 'B', text: 'Iniciar ATRA de inmediato, con crioprecipitado y plaquetas como soporte' },
        { letter: 'C', text: 'Iniciar heparina no fraccionada por la CID' },
        { letter: 'D', text: 'Quimioterapia intratecal con metotrexato' },
        { letter: 'E', text: 'Plasmaféresis urgente' },
      ],
      correct: 'B',
      explanation: 'Insuficiencia medular con blastos con múltiples bastones de Auer y CID (fibrinógeno bajo, dímero D alto): sospecha de leucemia promielocítica aguda. Se inicia ATRA de inmediato, sin esperar la citogenética, con soporte: crioprecipitado para el fibrinógeno y plaquetas. La heparina empeora el sangrado; la intratecal es de la LLA.',
      say: {
        stem: 'Vamos con un caso. Mujer de veinticuatro años con dos semanas de astenia severa, fiebre y gingivorragia profusa. Está pálida, con petequias, sin adenopatías. Hemoglobina de seis coma nueve, treinta y dos mil leucocitos con sesenta y cinco por ciento de blastos grandes, con gránulos y muchos bastones de Auer, y dieciséis mil plaquetas. INR de uno coma ocho, fibrinógeno de ochenta y cinco y dímero D sobre quince mil.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: esperar el PCR de la translocación, iniciar ATRA de inmediato con crioprecipitado y plaquetas, heparina, quimioterapia intratecal, o plasmaféresis. Piénsalo.',
        answer: 'La respuesta es la B. Son blastos mieloides, por los bastones de Auer, y tiene una CID con fibrinógeno bajo: es una promielocítica hasta demostrar lo contrario. Se inicia ATRA ya, con crioprecipitado y plaquetas como soporte. El distractor tentador es esperar el PCR: suena riguroso, pero la paciente puede morir de una hemorragia cerebral mientras tanto. La heparina empeora el sangrado, y la intratecal es de la linfoblástica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 118',
      stem: 'Paciente de 25 años, presenta desde hace 3 semanas compromiso del estado general, sensación febril cuantificada hasta 38°C, asociado a astenia y tendencia a presentar equimosis frente a pequeños traumatismos. Al examen físico se aprecia pálida, se palpa esplenomegalia y se observan abundantes petequias en abdomen y extremidades inferiores asociadas a equimosis en extremidades inferiores.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Leucemia aguda' },
        { letter: 'B', text: 'Mononucleosis infecciosa' },
        { letter: 'C', text: 'Linfoma' },
        { letter: 'D', text: 'Síndrome hemolítico uremico' },
        { letter: 'E', text: 'Coagulación intravascular diseminada' },
      ],
      correct: 'A',
      explanation: 'Tres semanas de fiebre, astenia y palidez, con petequias y equimosis: anemia, fiebre y sangrado a la vez, es decir, insuficiencia medular aguda. La esplenomegalia refleja infiltración. Es una leucemia aguda clásica.',
      say: {
        stem: 'Ahora las preguntas reales. La primera, del EUNACOM de julio de dos mil diecisiete. Paciente de veinticinco años con tres semanas de compromiso del estado general, fiebre de hasta treinta y ocho grados, astenia y equimosis ante traumatismos mínimos. Está pálida, con esplenomegalia, y abundantes petequias y equimosis.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: leucemia aguda, mononucleosis, linfoma, síndrome hemolítico urémico, o CID. Piénsalo.',
        answer: 'Es la A, leucemia aguda. Suma los tres síndromes: palidez por anemia, fiebre por neutropenia y petequias por trombocitopenia, instalados en semanas. Eso es insuficiencia medular aguda. La mononucleosis es el distractor, porque da fiebre y bazo grande, pero no explica el sangrado.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 154',
      stem: 'Paciente femenina, de 17 años presenta astenia, decaimiento, dolores óseos y pérdida de peso, de 2 meses evolución. Al examen físico se constatan múltiples adenopatías cervicales y axilares, con bazo palpable 3 cm debajo del reborde costal.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Linfoma de Hodgkin' },
        { letter: 'B', text: 'Leucemia mieloide aguda' },
        { letter: 'C', text: 'Leucemia linfática aguda' },
        { letter: 'D', text: 'Síndrome mononucleósico' },
        { letter: 'E', text: 'Leucemia linfática crónica' },
      ],
      correct: 'C',
      explanation: 'Clínica de leucemia aguda con dolores óseos, adenopatías y esplenomegalia en una paciente joven: orienta a leucemia linfoblástica aguda. La clínica sola no separa con certeza LMA de LLA, pero la edad y la infiltración ganglionar la inclinan hacia la LLA.',
      say: {
        stem: 'La siguiente, del EUNACOM de julio de dos mil dieciséis. Adolescente de diecisiete años con dos meses de astenia, decaimiento, dolores óseos y baja de peso. Tiene múltiples adenopatías cervicales y axilares, y el bazo palpable.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: linfoma de Hodgkin, leucemia mieloide aguda, leucemia linfática aguda, síndrome mononucleósico, o leucemia linfática crónica. Piénsalo.',
        answer: 'Es la C, leucemia linfática aguda. Fíjate en las pistas de infiltración que vimos: dolor óseo, adenopatías y bazo, en una paciente joven. Todo eso orienta a la linfoblástica. La mieloide es el distractor, pero es la leucemia del adulto mayor y no suele dar tantas adenopatías.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 15',
      stem: 'Un niño de 11 años presenta un cuadro de astenia y fiebre de algunas semanas de evolución. Al examen físico se aprecia palidez, asociado a esplenomegalia.',
      question: '¿Cuál de los siguientes exámenes es más adecuado para continuar el estudio en este paciente?',
      options: [
        { letter: 'A', text: 'IgM para virus Ebstein Baar' },
        { letter: 'B', text: 'Hemograma VHS' },
        { letter: 'C', text: 'Biopsia ganglionar' },
        { letter: 'D', text: 'IgM para Bartonella henselae' },
        { letter: 'E', text: 'Tiempos de coagulación' },
      ],
      correct: 'B',
      explanation: 'Fiebre, astenia, palidez y esplenomegalia de semanas en un niño: sospecha de leucemia aguda. El estudio se inicia con el hemograma con frotis, que busca citopenias y blastos; el mielograma viene después, para confirmar.',
      say: {
        stem: 'Otra, del EUNACOM de julio de dos mil quince. Niño de once años con astenia y fiebre de algunas semanas. Está pálido y tiene esplenomegalia.',
        question: '¿Qué examen es el más adecuado para continuar el estudio?',
        options: 'Las opciones son: IgM para Epstein Barr, hemograma con VHS, biopsia ganglionar, IgM para Bartonella, o tiempos de coagulación. Piénsalo.',
        answer: 'Es la B, el hemograma. Ante la sospecha de leucemia aguda, el primer paso es el hemograma con frotis, que muestra las citopenias y los blastos. La serología para Epstein Barr es el distractor, porque la fiebre con bazo grande hace pensar en mononucleosis, pero la palidez te dice que hay que mirar la médula primero.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 24',
      stem: 'Un niño de 8 años presenta dolores óseos, asociados a malestar general y fiebre de 3 semanas de evolución. Al examen físico se palpa el bazo aumentado de tamaño, por 3 cm bajo el reborde costal de consistencia indurada, se constatan poliadenopatías indoloras y se observan petequias y equimosis generalizadas, mayores en las extremidades inferiores',
      question: '¿Cuál es el examen de elección para confirmar el diagnóstico?',
      options: [
        { letter: 'A', text: 'Cintigrafía ósea' },
        { letter: 'B', text: 'Hemograma' },
        { letter: 'C', text: 'Biopsia esplénica' },
        { letter: 'D', text: 'Electroforesis de proteínas en sangre' },
        { letter: 'E', text: 'Mielograma' },
      ],
      correct: 'E',
      explanation: 'Niño con dolores óseos, fiebre, esplenomegalia, adenopatías y púrpura: leucemia aguda, probablemente LLA. El hemograma inicia el estudio, pero lo que confirma es el mielograma (o la biopsia de médula ósea) con 20% o más de blastos.',
      say: {
        stem: 'Y la última, del EUNACOM de agosto de dos mil veintiuno. Niño de ocho años con tres semanas de dolores óseos, malestar y fiebre. Tiene el bazo grande, adenopatías indoloras, y petequias y equimosis generalizadas.',
        question: '¿Cuál es el examen de elección para confirmar el diagnóstico?',
        options: 'Las opciones son: cintigrafía ósea, hemograma, biopsia esplénica, electroforesis de proteínas, o mielograma. Piénsalo.',
        answer: 'Es la E, el mielograma. Compárala con la pregunta anterior: allá pedían el examen para continuar el estudio, y era el hemograma. Aquí piden el que confirma, y es el mielograma, con veinte por ciento de blastos o más. El hemograma es el distractor: inicia el estudio, pero no confirma. Lee bien qué verbo usa la pregunta.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Tres series caen', kind: 'key', items: [
          { t: 'Anemia + fiebre + sangrado en semanas', d: 'Insuficiencia medular aguda',
            say: 'Cerremos con las reglas de oro. Anemia, fiebre y sangrado en semanas es insuficiencia medular aguda hasta demostrar lo contrario.' },
          { t: 'Hemograma inicia, mielograma confirma', d: '≥ 20% de blastos',
            say: 'El hemograma inicia el estudio y el mielograma confirma, con veinte por ciento de blastos o más.' },
        ] },
        { title: 'Estirpe', tag: 'Edad y marcadores', kind: 'criteria', items: [
          { t: 'Auer = LMA', d: 'LMA adulto mayor · LLA niño',
            say: 'Los bastones de Auer son siempre mieloides. La mieloide es del adulto mayor; la linfoblástica, del niño.' },
          { t: 'LLA: intratecal obligatoria', d: 'Meninges y testículos',
            say: 'La linfoblástica siempre lleva profilaxis intratecal, por los santuarios.' },
          { t: 'LMA de alto riesgo: trasplante', d: 'Alogénico en primera remisión',
            say: 'Y en la mieloide de riesgo alto, el trasplante alogénico es el tratamiento curativo.' },
        ] },
        { title: 'Promielocítica', tag: 'No esperar', kind: 'alert', items: [
          { t: 'Auer + CID = ATRA ya', d: 'Sin esperar PCR ni FISH',
            say: 'Si te llevas una sola idea de hoy: bastones de Auer con sangrado y fibrinógeno bajo es una promielocítica, y el ATRA se inicia de inmediato, sin esperar la genética. En la próxima clase veremos las leucemias crónicas, la mieloide y la linfática. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Leucemia aguda: de la sospecha a la conducta',
    root: N('start', 'Anemia + fiebre + sangrado', 'Instalados en semanas',
      'Paciente con anemia, fiebre y sangrado instalados en semanas. Sospecha insuficiencia medular aguda.',
      ['', N('q', '¿Blastos en el hemograma?', 'Hemograma con frotis',
        'El primer examen es el hemograma con frotis. ¿Hay blastos en la sangre periférica?',
        ['NO', N('do', 'Estudiar otras causas', 'PTI, aplasia, megaloblástica',
          'Si no hay blastos, estudia otras causas de citopenia, como el PTI, la aplasia o la anemia megaloblástica.')],
        ['SÍ', N('q', '¿Bastones de Auer con CID?', 'Sangrado + fibrinógeno bajo',
          'Si hay blastos, se deriva de urgencia. Pero antes, una pregunta que salva vidas: ¿hay bastones de Auer abundantes con sangrado y fibrinógeno bajo?',
          ['SÍ', N('alert', 'Sospecha de M3: ATRA inmediato', 'Crio y plaquetas · sin esperar PCR',
            'Sospecha de leucemia promielocítica: ATRA de inmediato, con crioprecipitado y plaquetas, sin esperar la genética.')],
          ['NO', N('refer', 'Derivar: mielograma + citometría', '≥ 20% blastos · GES · LMA o LLA',
            'Si no, derivación urgente a un centro terciario con garantía GES, mielograma para confirmar el veinte por ciento de blastos, y citometría para definir la estirpe. La mieloide va a inducción siete más tres, con trasplante si el riesgo es intermedio o alto; la linfoblástica, a protocolo con profilaxis intratecal.')])])]),
  },
};
