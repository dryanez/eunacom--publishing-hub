// Clase 8.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_hematologia.cjs (hem-01).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'hem-01',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Confirmar la anemia, medir el VCM y preguntarle a la médula si está respondiendo',
      say: 'Bienvenidos al bloque de hematología. Partimos por la base de todo: el síndrome anémico. Hoy vas a aprender a leer un hemograma con dos preguntas. Primero, ¿de qué tamaño son los glóbulos rojos? Y segundo, ¿la médula está respondiendo o no? Con esas dos respuestas ordenas casi cualquier anemia del examen, y todas las clases que vienen después se cuelgan de este esquema.',
    },

    {
      type: 'points',
      kicker: 'Definición',
      title: '¿Cuándo hay anemia?',
      cards: [
        { title: 'Criterios OMS', tag: 'Se mira la hemoglobina', kind: 'criteria', items: [
          { t: 'Hombre: Hb < 13 g/dL', d: 'Mujer adulta no embarazada: < 12 g/dL',
            say: 'Empecemos por la definición. La anemia es la disminución de la masa de glóbulos rojos, y en la práctica la medimos con la hemoglobina. Los cortes de la Organización Mundial de la Salud se preguntan: menos de trece gramos por decilitro en el hombre adulto, y menos de doce en la mujer adulta no embarazada.' },
          { t: 'Embarazo: Hb < 11 g/dL', d: 'Segundo trimestre: < 10,5 g/dL',
            say: 'En la embarazada el corte baja a once, en el primer y tercer trimestre. ¿Y por qué en el segundo trimestre baja todavía más, a diez coma cinco? Porque el volumen plasmático crece más rápido que los glóbulos rojos: es una hemodilución fisiológica, no una anemia real.' },
        ] },
        { title: 'Hematocrito', tag: 'Regla de tres', kind: 'key', items: [
          { t: 'Hto ≈ 3 × Hb', d: 'En glóbulos rojos de tamaño y color normal',
            say: 'El hematocrito se relaciona con la hemoglobina en una proporción aproximada de tres a uno. Una hemoglobina de diez corresponde, más o menos, a un hematocrito de treinta. Te sirve para detectar rápido un examen que no cuadra.' },
          { t: 'Ante discrepancia, manda la Hb', d: 'La volemia distorsiona el hematocrito',
            say: 'Pero si los dos valores no coinciden, manda la hemoglobina. El hematocrito depende mucho del agua del plasma: en la deshidratación se sobrestima y puede esconder una anemia. Ojo con eso en el adulto mayor deshidratado.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Primera pregunta',
      title: 'El VCM orienta la causa',
      nodes: [
        { id: 'vcm', col: 0, row: 2, k: 'start', t: 'Volumen corpuscular medio', s: 'Normal: 80 a 100 fL' },
        { id: 'mic', col: 1, row: 0, k: 'mech', t: 'Microcítica', s: 'VCM < 80 fL' },
        { id: 'mic2', col: 2, row: 0, k: 'effect', t: 'Falla hemo o globina', s: 'Ferropenia o talasemia' },
        { id: 'nor', col: 1, row: 2, k: 'mech', t: 'Normocítica', s: 'VCM 80 a 100 fL' },
        { id: 'nor2', col: 2, row: 2, k: 'effect', t: 'Inflamación, ERC, mixta', s: 'O ferropenia inicial' },
        { id: 'mac', col: 1, row: 4, k: 'mech', t: 'Macrocítica', s: 'VCM > 100 fL' },
        { id: 'mac2', col: 2, row: 4, k: 'effect', t: 'Falla del ADN', s: 'Déficit de B12 o folato' },
        { id: 'mac3', col: 3, row: 4, k: 'effect', t: 'Falla de membrana', s: 'Hepatopatía, alcohol, hipotiroidismo' },
      ],
      edges: [
        { from: 'vcm', to: 'mic' }, { from: 'mic', to: 'mic2' },
        { from: 'vcm', to: 'nor' }, { from: 'nor', to: 'nor2' },
        { from: 'vcm', to: 'mac' }, { from: 'mac', to: 'mac2' }, { from: 'mac', to: 'mac3' },
      ],
      steps: [
        { show: ['vcm'], note: 'El tamaño del glóbulo rojo cuenta qué falló al fabricarlo',
          say: 'Ya confirmaste la anemia. La primera pregunta es el tamaño del glóbulo rojo, el volumen corpuscular medio, o VCM. Lo normal va de ochenta a cien fentolitros. Y el tamaño no es un dato suelto: te cuenta qué falló cuando la médula fabricó ese glóbulo.' },
        { show: ['mic', 'mic2'], note: 'Chico: faltó hemoglobina para llenarlo',
          say: 'Si el glóbulo es chico, bajo ochenta, es una anemia microcítica. Lo que falló es la hemoglobina: o faltó el grupo hemo, que es la ferropenia, o faltaron las cadenas de globina, que es la talasemia. Esas dos son el diferencial clásico de la microcitosis.' },
        { show: ['nor', 'nor2'], note: 'Tamaño normal: inflamación, riñón o mezcla',
          say: 'Si el tamaño es normal, entre ochenta y cien, piensa en la inflamación crónica, en la insuficiencia renal, o en un cuadro mixto o inicial, por ejemplo una ferropenia que todavía no alcanza a achicar los glóbulos.' },
        { show: ['mac', 'mac2'], note: 'Grande: el núcleo no se dividió a tiempo',
          say: 'Si el glóbulo es grande, sobre cien, es macrocítica. La causa clásica es una falla en la síntesis de ADN, por déficit de vitamina B doce o de folato. El núcleo no alcanza a dividirse y la célula queda grande.' },
        { show: ['mac3'], note: 'Macrocitosis sin megaloblastos',
          say: 'Pero hay otra vía a la macrocitosis: la alteración de la membrana. La ves en la hepatopatía, en el consumo de alcohol y en el hipotiroidismo. Cuando el examen te muestra un VCM alto, antes de pensar solo en la B doce, mira si hay alcohol, daño hepático o tiroides.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Índices eritrocitarios',
      title: 'HCM, CHCM y RDW: afinan el diagnóstico',
      cards: [
        { title: 'Color del glóbulo', tag: 'Normo o hipocromía', kind: 'criteria', items: [
          { t: 'HCM normal: 27 a 33 pg', d: 'Hemoglobina por glóbulo rojo',
            say: 'El tamaño no es el único índice. La hemoglobina corpuscular media, o HCM, mide cuánta hemoglobina lleva cada glóbulo, y lo normal va de veintisiete a treinta y tres picogramos.' },
          { t: 'CHCM normal: 32 a 36 g/dL', d: 'Define normocromía o hipocromía',
            say: 'Y la concentración de hemoglobina corpuscular media, entre treinta y dos y treinta y seis. Entre las dos definen si el glóbulo es normocrómico o hipocrómico, es decir, si está bien pintado o pálido. La microcitosis casi siempre viene con hipocromía.' },
        ] },
        { title: 'RDW', tag: 'Anisocitosis', kind: 'key', items: [
          { t: 'Normal: 11,5 a 14,5 %', d: 'Mide cuán distintos son los glóbulos',
            say: 'El RDW, la amplitud de distribución eritrocitaria, mide cuán distintos entre sí son los glóbulos rojos. Lo normal va de once coma cinco a catorce coma cinco por ciento.' },
          { t: 'RDW > 15 %: ferropenia', d: 'Talasemia: RDW normal, glóbulos parejos',
            say: 'Y aquí está su utilidad en el examen. En la ferropenia conviven glóbulos viejos normales con glóbulos nuevos chicos, entonces el RDW sube sobre quince. En la talasemia todos los glóbulos son chicos por igual, y el RDW suele ser normal. Microcitosis con RDW alto, piensa en hierro.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Segunda pregunta',
      title: '¿La médula está respondiendo?',
      nodes: [
        { id: 'ret', col: 0, row: 1, k: 'start', t: 'Reticulocitos', s: 'Glóbulos rojos recién salidos' },
        { id: 'cor', col: 1, row: 1, k: 'mech', t: 'Índice reticulocitario corregido', s: '% retic × (Hto/45) ÷ maduración' },
        { id: 'fac', col: 1, row: 3, k: 'trap', t: 'Factor de maduración', s: '1 · 1,5 · 2 · 2,5 según Hto' },
        { id: 'reg', col: 2, row: 0, k: 'good', t: 'IRC > 2 %: regenerativa', s: 'La médula responde' },
        { id: 'reg2', col: 3, row: 0, k: 'effect', t: 'Hemólisis o hemorragia aguda', s: 'Se pierden glóbulos en la periferia' },
        { id: 'arr', col: 2, row: 2, k: 'alert', t: 'IRC < 2 %: arregenerativa', s: 'La médula no responde' },
        { id: 'arr2', col: 3, row: 2, k: 'effect', t: 'Sustrato, médula o citocinas', s: 'Carencias, aplasia, inflamación, uremia' },
      ],
      edges: [
        { from: 'ret', to: 'cor' }, { from: 'fac', to: 'cor', label: 'corrige' },
        { from: 'cor', to: 'reg', label: 'mayor a 2' }, { from: 'reg', to: 'reg2' },
        { from: 'cor', to: 'arr', label: 'menor a 2' }, { from: 'arr', to: 'arr2' },
      ],
      steps: [
        { show: ['ret'], note: 'Los reticulocitos miden la respuesta de la médula',
          say: 'Ahora la segunda pregunta, que es la que más ordena el diagnóstico: ¿la médula está respondiendo? Para saberlo miramos los reticulocitos, los glóbulos rojos recién salidos de la médula. Si hay anemia y la médula está sana, debería estar fabricando más.' },
        { show: ['cor'], note: 'El porcentaje crudo engaña en la anemia grave',
          say: 'El problema es que el porcentaje de reticulocitos engaña. Si hay pocos glóbulos rojos, cualquier cantidad de reticulocitos parece un porcentaje alto. Por eso se corrige: se multiplica el porcentaje por el hematocrito del paciente dividido por cuarenta y cinco, que es el hematocrito normal.' },
        { show: ['fac'], note: 'Hto 36 o más: 1 · 26–35: 1,5 · 16–25: 2 · menos de 15: 2,5',
          say: 'Y después se divide por un factor de maduración, porque en la anemia grave los reticulocitos salen antes y duran más en la sangre. El factor es uno con hematocrito de treinta y seis o más, uno coma cinco entre veintiséis y treinta y cinco, dos entre dieciséis y veinticinco, y dos coma cinco bajo quince. El resultado es el índice reticulocitario corregido.' },
        { show: ['reg'], note: 'Médula sana, el problema está afuera',
          say: 'Si ese índice es mayor a dos por ciento, la anemia es regenerativa. La médula está sana y respondiendo, así que el problema está afuera: los glóbulos se están perdiendo o destruyendo en la periferia.' },
        { show: ['reg2'], note: 'Hemólisis, o hemorragia aguda ya reexpandida',
          say: 'Las causas son dos: la hemólisis, sea autoinmune, por hiperesplenismo o por microangiopatía, y la hemorragia aguda, una vez que la volemia se ha reexpandido. Ahí se piden LDH, bilirrubina y frotis.' },
        { show: ['arr'], note: 'La médula no alcanza a responder',
          say: 'Si el índice es menor a dos por ciento, la anemia es arregenerativa o hipoproliferativa. Hay anemia, pero la médula no está respondiendo como debería. El problema está adentro, en la fábrica.' },
        { show: ['arr2'], note: 'Falta materia prima, falla la fábrica o la frenan',
          say: 'Y la fábrica puede fallar por tres razones. Falta materia prima: hierro, B doce o folato. La médula está dañada: aplasia, leucemia o mielodisplasia. O la frenan las citocinas: la anemia de enfermedades crónicas y la uremia. Casi todo el resto del bloque de anemias cabe en este casillero.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Lo que se pregunta',
      title: 'Tres trampas del índice reticulocitario',
      cards: [
        { title: 'Hemorragia crónica', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: 'Sangrado digestivo crónico', d: 'Es arregenerativo: se agota el hierro',
            say: 'Ahora, tres trampas. La primera: si sangrar es perder glóbulos en la periferia, ¿por qué la hemorragia digestiva crónica es arregenerativa? Porque con cada gota se va también hierro. Con el tiempo se agotan los depósitos, y la médula ya no tiene con qué responder.' },
        ] },
        { title: 'Hemorragia aguda', tag: 'Aún no regenera', kind: 'criteria', items: [
          { t: 'Regenera tras reexpandir volemia', d: 'La médula necesita unos días',
            say: 'La segunda: la hemorragia aguda sí es regenerativa, pero una vez que la volemia se ha reexpandido. La médula no responde en el mismo minuto del sangrado.' },
        ] },
        { title: 'Hemólisis intensa', tag: 'VCM falsamente alto', kind: 'key', items: [
          { t: 'Reticulocitos grandes: > 110 fL', d: 'Pueden subir el VCM a macrocítico',
            say: 'Y la tercera, que confunde a muchos. En una hemólisis intensa, la médula lanza tantos reticulocitos, que son más grandes que un glóbulo maduro, que el VCM medido sube. Puedes ver una anemia macrocítica que no es por B doce, sino una crisis hemolítica. La diferencia está en los reticulocitos altos. Esto sale en una pregunta real que viene.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos las dos preguntas en un solo árbol, en el orden en que lo vas a razonar frente al hemograma.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Clasificación: VCM más reticulocitos',
      head: ['VCM', 'Reticulocitos', 'Causas principales', 'Pista clave'],
      rows: [
        { cells: ['Microcítica (< 80 fL)', 'IRC < 2 %', 'Ferropenia, rasgo talasémico, sideroblástica', 'RDW alto en ferropenia'],
          say: 'Repasemos con la tabla completa. Microcítica y arregenerativa: ferropenia, rasgo talasémico o anemia sideroblástica. La pista para separar la ferropenia es el RDW alto.' },
        { cells: ['Normocítica (80–100 fL)', 'IRC < 2 %', 'Enfermedad crónica, ERC, mieloma, aplasia', 'Rouleaux en el mieloma; ferritina alta en inflamación'],
          say: 'Normocítica y arregenerativa: enfermedad crónica o inflamatoria, enfermedad renal crónica, mieloma múltiple o aplasia. Si en el frotis ves glóbulos apilados como monedas, el rouleaux, piensa en mieloma. Y en la inflamación la ferritina está alta, que es justo lo que vemos en la próxima clase.' },
        { cells: ['Normocítica (80–100 fL)', 'IRC > 2 %', 'Hemólisis aguda, hemorragia aguda reciente', 'Esquistocitos en PTT o SHU; esferocitos en AHAI'],
          say: 'Normocítica y regenerativa: hemólisis aguda o hemorragia aguda reciente. El frotis orienta: esquistocitos, que son glóbulos rotos, en la microangiopatía, y esferocitos en la anemia hemolítica autoinmune.' },
        { cells: ['Macrocítica (> 100 fL)', 'IRC < 2 %', 'Déficit de B12 o folato, alcohol, hipotiroidismo', 'Neutrófilos hipersegmentados, macroovalocitos'],
          say: 'Macrocítica y arregenerativa: déficit de B doce o folato, alcohol o hipotiroidismo. Si el frotis muestra neutrófilos hipersegmentados y macroovalocitos, es megaloblástica.' },
        { cells: ['Macrocítica (> 100 fL)', 'IRC > 2 %', 'Crisis hemolítica intensa', 'Reticulocitos grandes elevan el VCM'],
          say: 'Y macrocítica pero regenerativa: la crisis hemolítica intensa, donde los reticulocitos grandes suben el VCM. El error es tratarla como un déficit de B doce.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 72 años, autovalente, consulta en CESFAM por astenia y palidez progresiva de 3 meses. Niega melena o hematuria. Hemograma: Hb 8,8 g/dL, Hto 27 %, VCM 74 fL, HCM 24 pg, leucocitos 6.100/µL, plaquetas 420.000/µL, reticulocitos 0,6 %. Soplo sistólico eyectivo II/VI aórtico, sin taquicardia ni insuficiencia cardíaca.',
      question: '¿Cuál es la interpretación y la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Anemia regenerativa; solicitar LDH, bilirrubina y Coombs directo' },
        { letter: 'B', text: 'Anemia microcítica arregenerativa; perfil de hierro y estudio endoscópico alto y bajo' },
        { letter: 'C', text: 'Anemia microcítica; iniciar sulfato ferroso y controlar hemograma en 3 meses' },
        { letter: 'D', text: 'Anemia normocítica; solicitar biopsia de médula ósea' },
        { letter: 'E', text: 'Anemia grave; transfundir glóbulos rojos' },
      ],
      correct: 'B',
      explanation: 'VCM 74 y HCM 24: microcítica hipocrómica. IRC = 0,6 × (27/45) ÷ 1,5 ≈ 0,24 %: arregenerativa. Con trombocitosis reactiva, la sospecha es ferropenia por sangrado digestivo oculto: perfil de hierro inmediato y endoscopía digestiva alta más colonoscopía. Sin inestabilidad, no se transfunde.',
      say: {
        stem: 'Vamos con un caso. Hombre de setenta y dos años, autovalente, consulta en el CESFAM por astenia y palidez progresiva de tres meses. Niega melena o hematuria. Hemoglobina ocho coma ocho, hematocrito veintisiete, VCM setenta y cuatro, HCM veinticuatro, plaquetas cuatrocientas veinte mil y reticulocitos cero coma seis por ciento. Tiene un soplo sistólico suave, sin taquicardia ni insuficiencia cardíaca.',
        question: '¿Cuál es la interpretación y la conducta más adecuada?',
        options: 'Las opciones: anemia regenerativa con estudio de hemólisis, anemia microcítica arregenerativa con perfil de hierro y endoscopías, sulfato ferroso y control en tres meses, biopsia de médula, o transfusión. Piénsalo.',
        answer: 'Es la B. Aplica las dos preguntas. El VCM de setenta y cuatro dice microcítica. Y si corriges los reticulocitos, cero coma seis por veintisiete cuarenta y cincoavos, dividido por uno coma cinco, da cerca de cero coma dos: arregenerativa. Las plaquetas altas son la trombocitosis reactiva de la ferropenia. En un hombre mayor, eso es sangrado digestivo oculto hasta demostrar lo contrario. El distractor tentador es dar hierro y controlar: trata el número y deja pasar un cáncer.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 87',
      stem: 'Un paciente de 46 años, sin antecedentes, cursa con cuadro de disnea y palidez desde hace 2 semanas, asociado a coluria e ictericia. Al examen físico se aprecian mucosas pálidas y se palpa esplenomegalia, sin otros hallazgos.',
      question: 'El examen de elección para el diagnóstico etiológico en este caso es:',
      options: [
        { letter: 'A', text: 'Haptoglobina' },
        { letter: 'B', text: 'LDH' },
        { letter: 'C', text: 'Coombs' },
        { letter: 'D', text: 'Hemograma con reticulocitos' },
        { letter: 'E', text: 'Bilirrubina total e indirecta' },
      ],
      correct: 'D',
      explanation: 'El cuadro sugiere una anemia hemolítica. El estudio parte por el hemograma con reticulocitos, que confirma la anemia y muestra que es regenerativa. Recién después se pide el Coombs directo para buscar la causa autoinmune.',
      say: {
        stem: 'Ahora preguntas reales. La primera es del EUNACOM de julio de dos mil trece. Paciente de cuarenta y seis años, sin antecedentes, con dos semanas de disnea y palidez, coluria e ictericia. Al examen, mucosas pálidas y esplenomegalia.',
        question: '¿Cuál es el examen de elección para el diagnóstico etiológico?',
        options: 'Las opciones: haptoglobina, LDH, Coombs, hemograma con reticulocitos, o bilirrubina total e indirecta. Piénsalo.',
        answer: 'La respuesta es la D, hemograma con reticulocitos. Palidez, ictericia y bazo grande te hacen pensar en hemólisis, pero el primer paso sigue siendo el mismo de toda anemia: confirmarla y preguntarle a la médula si responde. Si los reticulocitos están altos, es regenerativa y la hemólisis se confirma. El Coombs es el distractor tentador, pero viene después, cuando ya sabes que hay hemólisis y buscas si es autoinmune.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 18',
      stem: 'Una paciente de 29 años, sin antecedentes, consulta por disnea progresiva asociada a fatigabilidad. Al examen físico destaca mucosas pálidas, cardiopulmonar normal. Se solicita hemograma que muestra hemoglobina 8.3mg/dL, hematocrito 26%, VCM 110, reticulocitos 0.3%, leucocitos 8.500/mm3 y plaquetas 200.000/mm3.',
      question: 'El diagnóstico más probable en este caso es:',
      options: [
        { letter: 'A', text: 'Anemia falciforme' },
        { letter: 'B', text: 'Anemia perniciosa' },
        { letter: 'C', text: 'Anemia ferropénica' },
        { letter: 'D', text: 'Anemia por enfermedades crónicas' },
        { letter: 'E', text: 'Anemia por déficit de vitamina B6' },
      ],
      correct: 'B',
      explanation: 'VCM 110 con reticulocitos bajos: anemia macrocítica arregenerativa, por falla en la síntesis de ADN. La causa más frecuente de déficit de B12 es la anemia perniciosa. La ferropenia es microcítica y la enfermedad crónica, normocítica.',
      say: {
        stem: 'La segunda es del mismo examen, julio de dos mil trece. Mujer de veintinueve años con disnea progresiva y fatigabilidad, mucosas pálidas. Hemoglobina ocho coma tres, hematocrito veintiséis, VCM ciento diez, reticulocitos cero coma tres por ciento, y leucocitos y plaquetas normales.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: anemia falciforme, anemia perniciosa, anemia ferropénica, anemia por enfermedades crónicas, o déficit de vitamina B seis. Piénsalo.',
        answer: 'Es la B, anemia perniciosa. Aplica las dos preguntas: VCM de ciento diez es macrocítica, y reticulocitos de cero coma tres es arregenerativa. Macrocítica arregenerativa es falla del ADN, y la causa clásica de déficit de B doce es la anemia perniciosa, que vemos en detalle más adelante. La ferropénica cae por el tamaño: es microcítica. Y la de enfermedades crónicas suele ser normocítica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 21',
      stem: 'Un paciente de 29 años presenta ictericia, disnea y compromiso marcado del estado general. Su examen físico solo muestra ictericia de escleras y piel, sin alteraciones relevantes en el examen segmentario. Sus exámenes de laboratorio muestran hemograma con hematocrito: 12%, hemoglobina: 4,1 g/dL, plaquetas: 250.000/mm³, glóbulos blancos 7.800/mm³, VCM: 103 fL y CHCM: 32 pg; en el frotis se observa presencia de microesferocitos. Las pruebas hepáticas muestran GOT: 52 U/L, GPT: 56 U/L, bilirrubina total: 4,1 mg/dL, bilirrubina directa 0,5: mg/dL, GGT: 50 U/L, fosfatasas alcalinas: 211 U/L y LDH: 960 U/L.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Hepatitis A' },
        { letter: 'B', text: 'Anemia por déficit de vitamina B12' },
        { letter: 'C', text: 'Hemólisis' },
        { letter: 'D', text: 'Anemia aplásica' },
        { letter: 'E', text: 'Mielodisplasia' },
      ],
      correct: 'C',
      explanation: 'Anemia aguda y grave con bilirrubina indirecta y LDH elevadas y microesferocitos: hemólisis, probablemente autoinmune. El VCM sube por el aumento de reticulocitos, que son más grandes. El Coombs directo confirma la causa autoinmune.',
      say: {
        stem: 'Y la última, del EUNACOM de diciembre de dos mil veinticinco. Hombre de veintinueve años con ictericia, disnea y gran compromiso del estado general. Hematocrito doce, hemoglobina cuatro coma uno, VCM ciento tres, y microesferocitos en el frotis. La bilirrubina total es cuatro coma uno con la directa en cero coma cinco, y la LDH está en novecientos sesenta.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: hepatitis A, déficit de vitamina B doce, hemólisis, anemia aplásica, o mielodisplasia. Piénsalo.',
        answer: 'Es la C, hemólisis. La bilirrubina es casi toda indirecta, la LDH está alta y hay microesferocitos: los glóbulos se están destruyendo. Y aquí está la trampa que vimos: el VCM de ciento tres empuja a marcar déficit de B doce. Pero ese VCM alto lo ponen los reticulocitos, que son grandes. Una anemia macrocítica con signos de hemólisis es una crisis hemolítica hasta demostrar lo contrario.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Definición', tag: 'Se mira la Hb', kind: 'criteria', items: [
          { t: 'Hb < 13 hombre, < 12 mujer', d: 'Embarazo: < 11; manda la Hb, no el Hto',
            say: 'Cerremos con las reglas de oro. Anemia es hemoglobina bajo trece en el hombre y bajo doce en la mujer no embarazada, y ante cualquier discrepancia manda la hemoglobina, no el hematocrito.' },
        ] },
        { title: 'Las dos preguntas', tag: 'VCM y reticulocitos', kind: 'key', items: [
          { t: 'VCM: micro, normo o macro', d: 'Hierro o globina · inflamación o riñón · ADN o membrana',
            say: 'La primera pregunta es el VCM: la microcitosis es hierro o globina, la normocitosis es inflamación o riñón, y la macrocitosis es ADN o membrana.' },
          { t: 'IRC > 2 %: el problema está afuera', d: 'IRC < 2 %: el problema está en la médula',
            say: 'La segunda pregunta es el índice reticulocitario corregido. Sobre dos, la médula responde y el problema está afuera: hemólisis o hemorragia aguda. Bajo dos, el problema está en la médula: falta sustrato, está dañada o la frenan.' },
        ] },
        { title: 'Trampas', tag: 'Ojo', kind: 'alert', items: [
          { t: 'Sangrado crónico = arregenerativo', d: 'Se agota el hierro',
            say: 'La hemorragia crónica es arregenerativa porque se agota el hierro, y la hemólisis intensa puede dar un VCM alto por los reticulocitos.' },
          { t: 'Microcitosis: pedir perfil de hierro', d: 'Es lo que vemos en la próxima clase',
            say: 'Y frente a una microcitosis, el siguiente paso es el perfil de hierro, que es justamente la próxima clase. Si te llevas una sola idea de hoy: todo hemograma se lee con dos preguntas, de qué tamaño es el glóbulo rojo y si la médula está respondiendo. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Enfrentamiento inicial de la anemia',
    root: N('start', 'Hb baja confirmada', 'Hombre < 13 · mujer < 12 g/dL',
      'Partimos con una hemoglobina baja, confirmada con los cortes de la Organización Mundial de la Salud. Antes de clasificar, evalúa si el paciente está estable y descarta un sangrado agudo activo.',
      ['', N('q', '¿IRC mayor a 2 %?', 'Reticulocitos corregidos',
        'La primera bifurcación es la médula: calcula el índice reticulocitario corregido. ¿Está sobre o bajo dos por ciento?',
        ['Sí', N('alert', 'Regenerativa', 'Hemólisis o hemorragia aguda',
          'Sobre dos por ciento, la médula responde y el problema está en la periferia: hemólisis o hemorragia aguda reciente.',
          ['', N('do', 'LDH, bilirrubina y frotis', 'Esquistocitos o esferocitos',
            'Pide LDH, bilirrubina y frotis. Los esquistocitos orientan a microangiopatía, y los esferocitos a hemólisis autoinmune.')])],
        ['No', N('q', 'Arregenerativa: ¿VCM?', 'Falla central o carencial',
          'Bajo dos por ciento, la médula no responde. Ahora el VCM te dice dónde buscar.',
          ['< 80 fL', N('do', 'Microcítica', 'Perfil de hierro con ferritina',
            'Si es microcítica, pide el perfil de hierro con ferritina. Ferropenia o talasemia; y en el adulto, la ferropenia obliga a buscar sangrado digestivo.')],
          ['80–100 fL', N('do', 'Normocítica', 'Función renal e inflamación',
            'Si es normocítica, pide función renal y busca inflamación crónica, sin olvidar el mieloma y la aplasia.')],
          ['> 100 fL', N('do', 'Macrocítica', 'B12, folato, TSH, alcohol',
            'Si es macrocítica, mide vitamina B doce y folato, y busca alcohol, daño hepático e hipotiroidismo.')])])]),
  },
};
