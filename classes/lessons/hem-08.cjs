// Clase 8.8 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_hematologia.cjs (hem-08).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'hem-08',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Tres defectos del propio glóbulo rojo: membrana, enzima y anclaje',
      say: 'Bienvenidos. En la clase anterior vimos la anemia hemolítica autoinmune, donde el Coombs directo sale positivo. Hoy vemos lo contrario: hemólisis con Coombs negativo, porque el problema está dentro del propio glóbulo rojo. Son tres enfermedades, esferocitosis hereditaria, déficit de glucosa-seis-fosfato deshidrogenasa y hemoglobinuria paroxística nocturna, y cada una tiene una clave clínica que el examen pregunta.',
    },

    {
      type: 'flow',
      kicker: 'Mapa del tema',
      title: 'Coombs negativo: el defecto está en el glóbulo',
      nodes: [
        { id: 'hem', col: 0, row: 1, k: 'start', t: 'Hemólisis regenerativa', s: 'Reticulocitos altos' },
        { id: 'coo', col: 1, row: 1, k: 'q', t: 'Coombs directo negativo', s: 'No es autoinmune' },
        { id: 'mem', col: 2, row: 0, k: 'cause', t: 'Defecto de membrana', s: 'Esferocitosis hereditaria' },
        { id: 'enz', col: 2, row: 1, k: 'cause', t: 'Defecto enzimático', s: 'Déficit de G6PD' },
        { id: 'gpi', col: 2, row: 2, k: 'cause', t: 'Defecto de anclaje GPI', s: 'Hemoglobinuria paroxística nocturna' },
        { id: 'fro', col: 3, row: 1, k: 'good', t: 'Frotis + gatillante', s: 'Pilares del diagnóstico' },
      ],
      edges: [
        { from: 'hem', to: 'coo' },
        { from: 'coo', to: 'mem', label: 'membrana' }, { from: 'coo', to: 'enz', label: 'enzima' }, { from: 'coo', to: 'gpi', label: 'adquirido' },
        { from: 'mem', to: 'fro' }, { from: 'enz', to: 'fro' }, { from: 'gpi', to: 'fro' },
      ],
      steps: [
        { show: ['hem', 'coo'], note: 'Sin anticuerpos: el glóbulo es defectuoso',
          say: 'Partamos donde terminó la clase anterior. Tienes una anemia hemolítica regenerativa, con reticulocitos altos, y pides el Coombs directo. Si sale negativo, no hay anticuerpos pegados al glóbulo rojo. Entonces el culpable es el propio glóbulo, que viene fallado.' },
        { show: ['mem'], note: 'Citoesqueleto: el glóbulo pierde su forma',
          say: 'Ese defecto puede estar en tres lugares. El primero es la membrana: el citoesqueleto falla, y el glóbulo pierde su forma de disco. Eso es la esferocitosis hereditaria.' },
        { show: ['enz'], note: 'Enzima: el glóbulo no se defiende del oxidante',
          say: 'El segundo es una enzima, la glucosa-seis-fosfato deshidrogenasa, o G seis PD. Sin ella, el glóbulo no se puede defender del estrés oxidativo.' },
        { show: ['gpi'], note: 'La única adquirida de las tres',
          say: 'Y el tercero es el anclaje de ciertas proteínas protectoras a la membrana. Eso es la hemoglobinuria paroxística nocturna. Ojo, porque las dos primeras son hereditarias, pero esta es adquirida.' },
        { show: ['fro'], note: 'El frotis y la historia separan las tres',
          say: '¿Cómo las separas? Con dos cosas: el frotis sanguíneo, y la historia de qué gatilló la crisis. Veamos cada una.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Esferocitosis hereditaria',
      title: 'De disco a esfera: el bazo hace el resto',
      nodes: [
        { id: 'mut', col: 0, row: 1, k: 'cause', t: 'Mutación del citoesqueleto', s: 'Espectrina, anquirina, banda 3' },
        { id: 'per', col: 1, row: 1, k: 'mech', t: 'Pierde membrana', s: 'En cada paso por la microcirculación' },
        { id: 'esf', col: 2, row: 1, k: 'mech', t: 'Esferocito', s: 'Rígido, sin halo central' },
        { id: 'baz', col: 3, row: 0, k: 'effect', t: 'Esplenomegalia', s: 'Atrapados en el bazo' },
        { id: 'ict', col: 3, row: 1, k: 'effect', t: 'Ictericia fluctuante', s: 'Desde el período neonatal' },
        { id: 'lit', col: 3, row: 2, k: 'risk', t: 'Litiasis biliar pigmentaria', s: 'Antes de los 20–30 años' },
      ],
      edges: [
        { from: 'mut', to: 'per' }, { from: 'per', to: 'esf' },
        { from: 'esf', to: 'baz' }, { from: 'esf', to: 'ict' }, { from: 'esf', to: 'lit', label: 'bilirrubina crónica' },
      ],
      steps: [
        { show: ['mut'], note: 'La hemolítica congénita más frecuente en caucásicos',
          say: 'Empecemos por la esferocitosis hereditaria, la anemia hemolítica congénita más frecuente en población de origen caucásico. En tres de cada cuatro casos se hereda en forma autosómica dominante, así que casi siempre hay un padre afectado. El defecto está en proteínas del citoesqueleto: espectrina, anquirina, banda tres o proteína cuatro punto dos.' },
        { show: ['per', 'esf'], note: 'Menos membrana, mismo contenido: una esfera',
          say: 'Sin un buen andamio, el glóbulo va perdiendo trozos de membrana cada vez que pasa por un capilar. Con menos membrana y el mismo contenido, el disco se transforma en una esfera pequeña, rígida y densa. Eso es el esferocito, que en el frotis se ve sin el halo pálido central.' },
        { show: ['baz'], note: 'Cordones de Billroth: donde se atrapa el esferocito',
          say: 'Y una esfera rígida no puede pasar por los cordones del bazo. Queda atrapada y se destruye ahí. Por eso el bazo crece: la esplenomegalia es parte del cuadro.' },
        { show: ['ict', 'lit'], note: 'Tríada: anemia, ictericia y cálculos en un joven',
          say: 'La destrucción crónica genera bilirrubina indirecta, lo que da ictericia fluctuante, muchas veces desde la etapa neonatal. Y esa bilirrubina, año tras año, forma cálculos pigmentarios. Por eso el dato clásico del examen es la colelitiasis en un adolescente o adulto joven, con bazo palpable y un padre operado de la vesícula.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Esferocitosis hereditaria',
      title: 'Cómo se confirma y cómo se trata',
      cards: [
        { title: 'Laboratorio', tag: 'Coombs negativo', kind: 'criteria', items: [
          { t: 'Microesferocitos en el frotis', d: 'Densos, sin halo central',
            say: 'Veamos el laboratorio. El hemograma muestra anemia con reticulocitos altos, y en el frotis, abundantes microesferocitos. El Coombs directo es negativo.' },
          { t: 'CHCM mayor de 36 g/dL', d: 'El glóbulo está deshidratado',
            say: 'Y hay un índice que casi nadie mira y que el examen adora: la concentración de hemoglobina corpuscular media, sobre treinta y seis gramos por decilitro. Sube porque el esferocito está deshidratado, con la misma hemoglobina en menos volumen. El libro la describe como el dato patognomónico.' },
        ] },
        { title: 'Confirmación', tag: 'Examen específico', kind: 'key', items: [
          { t: 'Fragilidad osmótica', d: 'O citometría con eosina-5-maleimida',
            say: 'La confirmación es la prueba de fragilidad osmótica, porque la esfera no tolera hincharse y se rompe antes que un glóbulo normal. La alternativa moderna es la citometría con eosina cinco maleimida.' },
        ] },
        { title: 'Tratamiento', tag: 'Esplenectomía', kind: 'pharma', items: [
          { t: 'Esplenectomía electiva', d: 'Después de los 5–6 años',
            say: 'El tratamiento que resuelve la hemólisis es la esplenectomía electiva: si sacas el bazo, el esferocito ya no tiene dónde atraparse. Pero se difiere hasta después de los cinco o seis años de edad.' },
          { t: 'Vacunar antes', d: 'Neumococo, meningococo y Haemophilus',
            say: '¿Y por qué esperar y qué hacer antes? Porque sin bazo el niño queda expuesto a las bacterias encapsuladas. Por eso, antes de operar, se vacuna contra neumococo, meningococo y Haemophilus influenzae. Si ya hay cálculos, se programa también la colecistectomía.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Déficit de G6PD',
      title: 'Favismo: sano hasta que aparece el oxidante',
      nodes: [
        { id: 'x', col: 0, row: 0, k: 'cause', t: 'Herencia ligada al X', s: 'Afecta a varones' },
        { id: 'nad', col: 1, row: 0, k: 'mech', t: 'Sin NADPH', s: 'No se regenera el glutatión' },
        { id: 'gat', col: 0, row: 2, k: 'cause', t: 'Oxidante', s: 'Habas, infección, primaquina, sulfas' },
        { id: 'hei', col: 2, row: 1, k: 'mech', t: 'Cuerpos de Heinz', s: 'Hemoglobina oxidada precipitada' },
        { id: 'mor', col: 3, row: 0, k: 'effect', t: 'Células mordidas', s: 'Degmacitos' },
        { id: 'cri', col: 3, row: 2, k: 'risk', t: 'Crisis hemolítica aguda', s: 'Hemoglobinuria' },
      ],
      edges: [
        { from: 'x', to: 'nad' }, { from: 'nad', to: 'hei' }, { from: 'gat', to: 'hei', label: 'gatilla' },
        { from: 'hei', to: 'mor', label: 'el bazo muerde' }, { from: 'hei', to: 'cri' },
      ],
      steps: [
        { show: ['x'], note: 'La enzimopatía eritrocitaria más prevalente del mundo',
          say: 'Pasemos al déficit de G seis PD, la enzimopatía del glóbulo rojo más prevalente del mundo. Se hereda en forma recesiva ligada al cromosoma X, así que el paciente típico es un hombre.' },
        { show: ['nad'], note: 'Única fuente de NADPH en el glóbulo maduro',
          say: 'Esta enzima es la única fuente de NADPH en el glóbulo rojo maduro, y el NADPH mantiene el glutatión reducido, que es el escudo contra la oxidación. Pero fíjate en algo clave: en condiciones basales, el paciente está asintomático y sin anemia.' },
        { show: ['gat'], note: 'Sin gatillante no hay crisis',
          say: 'El problema aparece con un oxidante. El clásico son las habas frescas, y de ahí el nombre de favismo. También las infecciones, y fármacos como primaquina, sulfonamidas, nitrofurantoína, dapsona y ácido nalidíxico. Esa lista se pregunta.' },
        { show: ['hei'], note: 'La hemoglobina oxidada precipita en la membrana',
          say: 'Con el glutatión agotado, la hemoglobina se oxida y precipita en agregados pegados a la membrana. Esos son los cuerpos de Heinz.' },
        { show: ['mor', 'cri'], note: 'Heinz y células mordidas: la firma del frotis',
          say: 'Cuando el glóbulo pasa por el bazo, los macrófagos le arrancan esos cuerpos de Heinz y lo dejan con una muesca: la célula mordida, o degmacito. Y el paciente hace una crisis hemolítica aguda, con orina oscura por hemoglobinuria, días después de comer habas o tomar el fármaco.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Déficit de G6PD',
      title: 'Diagnóstico y manejo: cuidado con el momento',
      cards: [
        { title: 'Diagnóstico', tag: 'Ojo con el momento', kind: 'alert', items: [
          { t: 'Medir actividad de G6PD', d: 'Dosificación cuantitativa',
            say: 'El diagnóstico se confirma midiendo la actividad cuantitativa de la enzima. Pero hay una trampa sobre cuándo medirla.' },
          { t: 'No durante la crisis', d: 'Esperar 2 a 3 meses',
            say: 'Durante la crisis, los glóbulos deficientes ya se rompieron, y los que quedan son reticulocitos jóvenes, que todavía tienen niveles normales de enzima. Si mides en ese momento, puedes tener un falso normal. Por eso se dosifica dos a tres meses después de la crisis.' },
        ] },
        { title: 'Manejo', tag: 'Prevención', kind: 'pharma', items: [
          { t: 'Evitar oxidantes', d: 'Habas y fármacos de riesgo',
            say: 'El manejo es sobre todo preventivo: evitar las habas y los fármacos oxidantes. No hay que operar ni sacar el bazo.' },
          { t: 'Soporte en la crisis', d: 'Suspender el gatillante',
            say: 'Y en la crisis, suspender el gatillante y dar soporte. La diferencia con la esferocitosis es de conducta: una se opera, la otra se previene.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Hemoglobinuria paroxística nocturna',
      title: 'HPN: un clon sin protección contra el complemento',
      nodes: [
        { id: 'pig', col: 0, row: 1, k: 'cause', t: 'Mutación somática PIGA', s: 'En la célula madre, adquirida' },
        { id: 'gpi', col: 1, row: 1, k: 'mech', t: 'Sin anclaje GPI', s: 'Faltan CD55 y CD59' },
        { id: 'com', col: 2, row: 1, k: 'mech', t: 'Lisis por complemento', s: 'Hemólisis intravascular' },
        { id: 'noc', col: 3, row: 0, k: 'effect', t: 'Orina oscura matinal', s: 'Acidosis leve nocturna' },
        { id: 'tro', col: 3, row: 1, k: 'risk', t: 'Trombosis atípicas', s: 'Budd-Chiari, porta, mesentérica' },
        { id: 'apl', col: 3, row: 2, k: 'risk', t: 'Hipoplasia medular', s: 'Pancitopenia' },
      ],
      edges: [
        { from: 'pig', to: 'gpi' }, { from: 'gpi', to: 'com' },
        { from: 'com', to: 'noc' }, { from: 'com', to: 'tro' }, { from: 'pig', to: 'apl', label: 'clon medular' },
      ],
      steps: [
        { show: ['pig'], note: 'Adquirida y clonal, no hereditaria',
          say: 'La tercera es la hemoglobinuria paroxística nocturna, o HPN. A diferencia de las anteriores, no se hereda: es una mutación somática adquirida en el gen PIGA, en la célula madre hematopoyética. Por eso afecta a un clon de todas las células de la sangre.' },
        { show: ['gpi'], note: 'CD55 y CD59 frenan el complemento',
          say: 'Esa mutación impide fabricar el anclaje GPI, que sujeta varias proteínas a la membrana. Las dos que importan son el CD cincuenta y cinco y el CD cincuenta y nueve, que frenan al complemento.' },
        { show: ['com'], note: 'El complemento perfora el glóbulo en la sangre',
          say: 'Sin esos frenos, el complemento destruye al glóbulo rojo dentro del vaso. Es una hemólisis intravascular, con hemosiderinuria, y con el tiempo, ferropenia por la pérdida de hierro en la orina.' },
        { show: ['noc'], note: 'De ahí el nombre: paroxística y nocturna',
          say: 'El libro explica el nombre así: en la noche hay una leve hipoventilación, con acidosis leve que activa el complemento. Por eso el paciente nota la orina oscura en la primera micción de la mañana.' },
        { show: ['tro'], note: 'La clave de examen: trombosis en sitios raros',
          say: 'Y ahora lo más preguntado. La HPN produce trombosis venosas en sitios inusuales: venas suprahepáticas, que es el síndrome de Budd-Chiari, vena porta, mesentérica, o senos venosos cerebrales. Hemólisis más trombosis atípica: piensa en HPN.' },
        { show: ['apl'], note: 'Se conecta con la aplasia medular',
          say: 'El tercer componente es la hipoplasia o aplasia medular, que conecta con la clase de aplasia. Por eso el frotis de la HPN no muestra una forma especial, sino una pancitopenia leve a moderada.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Hemoglobinuria paroxística nocturna',
      title: 'Cómo se confirma y cómo se trata',
      cards: [
        { title: 'Tríada clínica', tag: 'Sospecha', kind: 'alert', items: [
          { t: 'Hemólisis intravascular', d: 'Hemosiderinuria y ferropenia',
            say: 'Resumamos la tríada. Primero, hemólisis intravascular, con hemosiderinuria y ferropenia.' },
          { t: 'Trombosis en sitios inusuales', d: 'Budd-Chiari, porta, senos durales',
            say: 'Segundo, trombosis en sitios raros, como el Budd-Chiari.' },
          { t: 'Hipoplasia o aplasia medular', d: 'Citopenias asociadas',
            say: 'Y tercero, falla medular. Basta ver dos de estas juntas para que la HPN aparezca en tu diagnóstico diferencial.' },
        ] },
        { title: 'Diagnóstico', tag: 'Estándar de oro', kind: 'key', items: [
          { t: 'Citometría de flujo', d: 'Ausencia de CD55 y CD59',
            say: 'El estándar de oro es la citometría de flujo en sangre periférica, que demuestra la ausencia de CD cincuenta y cinco y CD cincuenta y nueve. El Coombs, como en toda esta clase, es negativo.' },
        ] },
        { title: 'Tratamiento', tag: 'Casos graves', kind: 'pharma', items: [
          { t: 'Eculizumab o ravulizumab', d: 'Anticuerpos anti-C5 del complemento',
            say: 'El tratamiento de elección en los casos graves es el eculizumab o el ravulizumab, anticuerpos monoclonales contra la fracción C cinco del complemento. La lógica es directa: si el problema es el complemento, lo bloqueas. El trasplante alogénico queda como la opción específica restante.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos las tres en un solo árbol, partiendo desde el Coombs.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Esferocitosis vs G6PD vs HPN',
      head: ['Criterio', 'Esferocitosis', 'Déficit de G6PD', 'HPN'],
      rows: [
        { cells: ['Herencia', 'Autosómica dominante (75 %)', 'Recesiva ligada al X', 'Adquirida, clonal'],
          say: 'Repasemos lo que se pregunta. La herencia: la esferocitosis es autosómica dominante, el déficit de G seis PD es ligado al X, y la HPN no se hereda, es adquirida.' },
        { cells: ['Frotis', 'Microesferocitos sin halo', 'Heinz y células mordidas', 'Sin forma especial'],
          say: 'El frotis: microesferocitos en la esferocitosis, cuerpos de Heinz y células mordidas en el déficit enzimático, y en la HPN, nada característico.' },
        { cells: ['Confirmación', 'Fragilidad osmótica', 'G6PD cuantitativa, 2–3 meses después', 'Citometría CD55/CD59'],
          say: 'La confirmación: fragilidad osmótica, medición de la enzima lejos de la crisis, y citometría de flujo. Medir la enzima en plena crisis es la trampa clásica.' },
        { cells: ['Clave clínica', 'Colelitiasis joven + bazo + CHCM alta', 'Crisis tras habas, sulfas o primaquina', 'Hemólisis + trombosis atípica'],
          say: 'Las claves clínicas: colelitiasis en un joven con bazo grande y concentración de hemoglobina corpuscular alta; crisis después de habas, sulfas o primaquina; y hemólisis con trombosis en un sitio raro.' },
        { cells: ['Tratamiento', 'Esplenectomía tras vacunas', 'Evitar oxidantes, soporte', 'Eculizumab anti-C5'],
          say: 'Y el tratamiento: esplenectomía previa vacunación, evitar oxidantes, y eculizumab. El error típico es esplenectomizar a quien no corresponde: el bazo solo se saca en la esferocitosis.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Joven de 17 años con dolor cólico posprandial en hipocondrio derecho e ictericia fluctuante. Ecografía: colelitiasis múltiple y esplenomegalia moderada. Su padre fue colecistectomizado a los 22 años y esplenectomizado. Hb 10,2 g/dL, VCM 79 fL, CHCM 37,2 g/dL, reticulocitos 7,5 %, bilirrubina indirecta 3,2 mg/dL, LDH 520 UI/L. Frotis: abundantes microesferocitos. Coombs directo negativo.',
      question: '¿Cuál es el examen que confirma el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Prueba de fragilidad osmótica eritrocitaria' },
        { letter: 'B', text: 'Dosificación cuantitativa de G6PD' },
        { letter: 'C', text: 'Citometría de flujo para CD55 y CD59' },
        { letter: 'D', text: 'Electroforesis de hemoglobina' },
        { letter: 'E', text: 'Biopsia de médula ósea' },
      ],
      correct: 'A',
      explanation: 'Hemólisis con Coombs negativo, microesferocitos, CHCM > 36, colelitiasis juvenil, esplenomegalia y padre afectado (autosómica dominante): esferocitosis hereditaria. Se confirma con fragilidad osmótica. Luego: vacunas contra encapsulados, esplenectomía electiva y colecistectomía.',
      say: {
        stem: 'Vamos con un caso. Joven de diecisiete años con dolor cólico después de comer en el hipocondrio derecho, e ictericia que va y viene. La ecografía muestra cálculos múltiples y un bazo grande. Su padre fue operado de la vesícula a los veintidós años y también le sacaron el bazo. Tiene hemoglobina de diez punto dos, concentración de hemoglobina corpuscular de treinta y siete punto dos, reticulocitos altos, bilirrubina indirecta elevada, microesferocitos en el frotis y Coombs negativo.',
        question: '¿Cuál es el examen que confirma el diagnóstico más probable?',
        options: 'Las opciones son: fragilidad osmótica, dosificación de G seis PD, citometría para CD cincuenta y cinco y cincuenta y nueve, electroforesis de hemoglobina, o biopsia de médula. Piénsalo.',
        answer: 'Es la A. Coombs negativo, microesferocitos, concentración de hemoglobina corpuscular sobre treinta y seis, colelitiasis a los diecisiete años, bazo grande y un padre con la misma historia: esferocitosis hereditaria, y se confirma con fragilidad osmótica. La citometría tienta porque también es un examen de hemólisis con Coombs negativo, pero la HPN no da esferocitos ni es familiar. Después vienen las vacunas, la esplenectomía y la colecistectomía.',
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
      explanation: 'Anemia aguda y grave con bilirrubina indirecta y LDH altas: hemólisis, probablemente autoinmune. Los microesferocitos también aparecen en la AHAI; la esferocitosis hereditaria es crónica, menos grave y con esplenomegalia. El VCM alto se explica por los reticulocitos. El Coombs directo separa ambas.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Paciente de veintinueve años con ictericia, disnea y compromiso marcado del estado general, sin otros hallazgos al examen. Tiene hematocrito de doce y hemoglobina de cuatro punto uno, plaquetas y blancos normales, volumen corpuscular de ciento tres, y microesferocitos en el frotis. La bilirrubina total es cuatro punto uno, casi toda indirecta, y la LDH, novecientos sesenta.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: hepatitis A, déficit de vitamina B doce, hemólisis, anemia aplásica o mielodisplasia. Piénsalo.',
        answer: 'Es la C, hemólisis. Anemia grave con bilirrubina indirecta y LDH altas, y el volumen alto se explica por los reticulocitos, no por falta de B doce. Pero fíjate en el detalle que conecta con hoy: ver microesferocitos no significa esferocitosis hereditaria. También aparecen en la anemia autoinmune, y este cuadro agudo, grave y sin bazo grande apunta a eso. La esferocitosis es crónica, familiar y con esplenomegalia. El Coombs directo los separa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 106',
      stem: 'Un niño de 4 años, con antecedente de ictericia neonatal, que requirió fototerapia, es traído a la urgencia por dolor abdominal y náuseas de 4 días de evolución. Al examen físico destaca ictericia de piel y mucosas, asociado a palidez y en el examen abdominal se objetiva esplenomegalia, con bazo por 3 cm bajo el reborde costal. Su hemograma muestra hematocrito de 20%, hemoglobina de 6,9 g/dl, VCM: 70 fl, 17% de reticulocitos, blancos: 8.000 por mm3 y plaquetas: 200.000 por mm3. El frotis sanguíneo muestra macrocitosis, poiquilocitosis y anisocitosis. En sus pruebas hepáticas destaca bilirrubina 6 mg/dl, con bilirrubina directa de 0,9 mg/dl.',
      question: 'El diagnóstico más probable:',
      options: [
        { letter: 'A', text: 'Anemia hemolítica' },
        { letter: 'B', text: 'Leucemia aguda' },
        { letter: 'C', text: 'Anemia ferropénica' },
        { letter: 'D', text: 'Anemia por déficit de vitamina B12' },
        { letter: 'E', text: 'Anemia de Fanconi' },
      ],
      correct: 'A',
      explanation: 'Reticulocitos 17 % y bilirrubina de predominio indirecto: anemia hemolítica regenerativa. Blancos y plaquetas normales descartan leucemia. La ictericia neonatal y la esplenomegalia sugieren una hemolítica congénita, como la esferocitosis hereditaria.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de agosto de dos mil veintiuno. Niño de cuatro años, con antecedente de ictericia neonatal que requirió fototerapia, consulta por dolor abdominal y náuseas de cuatro días. Tiene ictericia, palidez y el bazo tres centímetros bajo el reborde. Hemoglobina de seis punto nueve, diecisiete por ciento de reticulocitos, blancos y plaquetas normales, y bilirrubina de seis, con directa de cero punto nueve.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: anemia hemolítica, leucemia aguda, anemia ferropénica, déficit de vitamina B doce, o anemia de Fanconi. Piénsalo.',
        answer: 'Es la A, anemia hemolítica. Los reticulocitos muy altos dicen que la médula está respondiendo, y la bilirrubina es casi toda indirecta. La leucemia tienta por la esplenomegalia en un niño, pero los blancos y las plaquetas están normales. Y fíjate en la pista de fondo: ictericia neonatal más bazo grande en un niño es exactamente cómo se presenta una hemolítica congénita, como la esferocitosis hereditaria.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Esferocitosis', tag: 'Membrana', kind: 'key', items: [
          { t: 'Colelitiasis joven + bazo + CHCM alta', d: 'Confirmar con fragilidad osmótica',
            say: 'Cerremos con las reglas de oro. Colelitiasis en un joven, con bazo grande, concentración de hemoglobina corpuscular alta y Coombs negativo: esferocitosis, y se confirma con fragilidad osmótica.' },
          { t: 'Esplenectomía después de los 5–6 años', d: 'Siempre vacunar antes',
            say: 'Se trata con esplenectomía después de los cinco o seis años, siempre vacunando antes contra encapsulados.' },
        ] },
        { title: 'Déficit de G6PD', tag: 'Enzima', kind: 'alert', items: [
          { t: 'Hombre + habas o sulfas + Heinz', d: 'Crisis aguda con hemoglobinuria',
            say: 'Un hombre que hace una crisis hemolítica después de habas, sulfas o primaquina, con cuerpos de Heinz y células mordidas: déficit de G seis PD.' },
          { t: 'Medir la enzima lejos de la crisis', d: '2 a 3 meses después',
            say: 'Y la enzima se mide dos a tres meses después, nunca en plena crisis.' },
        ] },
        { title: 'HPN', tag: 'Complemento', kind: 'pharma', items: [
          { t: 'Hemólisis + trombosis atípica', d: 'Citometría CD55/CD59 · eculizumab',
            say: 'Hemólisis intravascular con trombosis en un sitio raro: HPN, citometría de flujo y eculizumab. Si te llevas una sola idea de hoy: con Coombs negativo, busca la clave de cada una, el bazo y los cálculos, el oxidante, o la trombosis rara. En la próxima clase seguimos con los defectos de la hemoglobina: talasemias y anemia falciforme. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Anemia hemolítica: del Coombs al defecto intrínseco',
    root: N('start', 'Anemia hemolítica', 'Reticulocitos altos, bilirrubina indirecta',
      'Paciente con anemia, reticulocitos altos, bilirrubina indirecta y LDH elevadas: hay hemólisis. El primer paso para ordenar la causa es el Coombs directo.',
      ['', N('q', '¿Coombs directo?', 'Anticuerpos sobre el glóbulo',
        '¿El Coombs directo es positivo o negativo?',
        ['Positivo', N('refer', 'Anemia hemolítica autoinmune', 'Ver clase anterior',
          'Si es positivo, hay anticuerpos: es una anemia hemolítica autoinmune, lo que vimos en la clase anterior.')],
        ['Negativo', N('q', '¿Qué orienta la clínica y el frotis?', 'Buscar la clave de cada una',
          'Si es negativo, el defecto está en el glóbulo. Ahora mira la historia y el frotis.',
          ['Crónica, familiar, bazo grande', N('do', 'Esferocitosis: fragilidad osmótica', 'Microesferocitos, CHCM alta',
            'Hemólisis crónica, familiar, con bazo grande, cálculos y microesferocitos: esferocitosis hereditaria. Se confirma con fragilidad osmótica.',
            ['', N('ok', 'Vacunas y esplenectomía', 'Después de los 5–6 años',
              'Vacunas contra encapsulados y esplenectomía electiva después de los cinco o seis años, con colecistectomía si hay cálculos.')])],
          ['Crisis tras oxidante', N('do', 'G6PD: suspender el oxidante', 'Heinz y células mordidas',
            'Crisis aguda en un hombre después de habas o un fármaco oxidante, con cuerpos de Heinz: déficit de G seis PD. Se suspende el gatillante y se da soporte.',
            ['', N('ok', 'Medir G6PD a los 2–3 meses', 'Nunca en plena crisis',
              'La enzima se mide dos a tres meses después, para no tener un falso normal por los reticulocitos.')])],
          ['Intravascular + trombosis atípica', N('alert', 'Sospecha de HPN', 'Budd-Chiari, aplasia',
            'Hemólisis intravascular con trombosis en un sitio raro, o con falla medular: sospecha de hemoglobinuria paroxística nocturna.',
            ['', N('refer', 'Citometría CD55/CD59', 'Hematología: eculizumab',
              'Se confirma con citometría de flujo sin CD cincuenta y cinco ni cincuenta y nueve, y hematología indica eculizumab en los casos graves.')])])])]),
  },
};
