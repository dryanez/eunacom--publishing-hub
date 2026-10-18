// Clase 7.13 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_endocrinologia.cjs (endo-13).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'endo-13',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Shock que no responde a volumen ni a noradrenalina: hidrocortisona primero, exámenes después',
      say: 'Bienvenidos. Hoy vemos la crisis suprarrenal aguda, una urgencia de frecuencia muy alta en el examen. En la clase anterior vimos la insuficiencia suprarrenal crónica, el Addison y la secundaria; hoy vemos qué pasa cuando ese paciente se enfrenta a un estrés y no tiene cortisol para responder. Todo el tema se resume en una regla: ante la sospecha, hidrocortisona de inmediato, sin esperar ningún examen.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Por qué el shock no responde a nada?',
      nodes: [
        { id: 'est', col: 0, row: 1, k: 'cause', t: 'Estrés agudo', s: 'Infección, cirugía, vómitos' },
        { id: 'fal', col: 1, row: 1, k: 'mech', t: 'Falta de cortisol', s: 'Absoluta o relativa' },
        { id: 'rec', col: 2, row: 0, k: 'mech', t: 'Receptores alfa-1 sin respuesta', s: 'Arteriolas sordas a catecolaminas' },
        { id: 'vas', col: 2, row: 2, k: 'effect', t: 'Vasodilatación masiva', s: 'Resistencias vasculares colapsadas' },
        { id: 'sho', col: 3, row: 1, k: 'alert', t: 'Shock refractario', s: 'No responde a volumen ni aminas' },
        { id: 'hc', col: 4, row: 1, k: 'good', t: 'Hidrocortisona', s: 'Devuelve la respuesta vascular' },
      ],
      edges: [
        { from: 'est', to: 'fal', label: 'desenmascara' },
        { from: 'fal', to: 'rec' }, { from: 'fal', to: 'vas' },
        { from: 'rec', to: 'sho' }, { from: 'vas', to: 'sho' },
        { from: 'sho', to: 'hc', label: 'solo revierte con' },
      ],
      steps: [
        { show: ['est'], note: 'El gatillo es un estrés que exige más cortisol',
          say: 'Partamos por el mecanismo, porque explica la pregunta clásica del examen. El punto de partida es un estrés fisiológico intenso: una infección, una cirugía, una gastroenteritis. En una persona sana, las suprarrenales responden subiendo el cortisol.' },
        { show: ['fal'], note: 'La suprarrenal no puede responder',
          say: 'Pero si el paciente tiene una insuficiencia suprarrenal, o lleva tiempo tomando corticoides y su eje está frenado, no puede responder. Queda con una falta absoluta o relativa de cortisol justo cuando más lo necesita.' },
        { show: ['rec'], note: 'El cortisol es permisivo para las catecolaminas',
          say: 'Y aquí está la clave. El cortisol es un mediador permisivo: mantiene la expresión y la sensibilidad de los receptores alfa uno de las arteriolas. Sin cortisol, las arteriolas quedan sordas a las catecolaminas, tanto a las propias como a las que tú le pongas.' },
        { show: ['vas'], note: 'Se pierde el tono arteriolar',
          say: 'El resultado es una vasodilatación sistémica masiva, con colapso de las resistencias vasculares y aumento de la permeabilidad capilar.' },
        { show: ['sho'], note: 'Shock que no responde a noradrenalina',
          say: 'Eso produce un shock distributivo e hipovolémico que no responde a los fluidos ni a la noradrenalina. Fíjate en la palabra refractario, porque es la pista que el examen te deja en el enunciado.' },
        { show: ['hc'], note: 'Por eso el tratamiento es el corticoide',
          say: 'Y el mecanismo te da la respuesta: si el problema es que falta cortisol para que las aminas funcionen, subir la noradrenalina no sirve. Lo que revierte el shock es darle el cortisol que falta, la hidrocortisona.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Gatillantes',
      title: '¿Qué precipita la crisis?',
      cards: [
        { title: 'Los más frecuentes', tag: 'Causa número 1', kind: 'alert', items: [
          { t: 'Infección intercurrente', d: 'Bacteriana o viral: la causa número 1',
            say: 'Veamos qué precipita la crisis. El gatillante número uno es una infección intercurrente, bacteriana o viral. Por eso, en todo paciente en crisis, después de estabilizarlo, vas a buscar el foco.' },
          { t: 'Gastroenteritis con vómitos', d: 'No logra absorber el fármaco oral',
            say: 'El segundo escenario que más se pregunta es la gastroenteritis con vómitos. El paciente con Addison tiene su hidrocortisona oral, pero si vomita todo, no la absorbe, y además pierde volumen.' },
        ] },
        { title: 'Errores con los corticoides', tag: 'Iatrogenia', kind: 'pharma', items: [
          { t: 'Suspensión brusca del corticoide', d: 'Eje frenado por uso prolongado',
            say: 'Luego vienen los errores con los corticoides: el paciente que usaba corticoides por tiempo prolongado y los suspende de golpe.' },
          { t: 'No subir la dosis ante estrés', d: 'Cirugía mayor o trauma',
            say: 'Y el que no aumenta su dosis frente a un estrés, como una cirugía mayor o un traumatismo. Su eje no puede fabricar el extra que el cuerpo pide.' },
        ] },
        { title: 'Hemorragia suprarrenal bilateral', tag: 'Debut sin antecedentes', kind: 'criteria', items: [
          { t: 'Waterhouse-Friderichsen', d: 'Meningococcemia fulminante',
            say: 'Y ojo con la crisis en alguien sin antecedentes: una hemorragia suprarrenal bilateral masiva destruye ambas glándulas de golpe. En la meningococcemia fulminante se llama síndrome de Waterhouse-Friderichsen. Mira esta piel: púrpura extensa, que no blanquea al presionar, con centros oscuros de necrosis. Y en estos pies, los ortejos ya necróticos. Si un paciente con estas lesiones está en shock y no responde a la noradrenalina, piensa en las suprarrenales: necesita hidrocortisona, además del antibiótico.',
            photos: [
              { src: 'biblioteca/05_endocrinologia/endo-13/atlas_104_sindrome_de_waterhouse_frideri.jpg', label: 'Púrpura fulminante', at: 'Mira esta piel', credit: 'Harrison 21.ª ed., Fig. 19-7 (de Fitzpatrick, Color Atlas 8.ª ed.)' },
              { src: 'biblioteca/05_endocrinologia/endo-13/02_waterhouse_friderichsen_pies__bailey_p619.jpg', label: 'Necrosis distal', at: 'Y en estos pies', credit: 'Bailey & Love 27.ª ed., p. 619' },
            ] },
          { t: 'Síndrome antifosfolípido', d: 'Trombosis suprarrenal',
            say: 'La otra causa es la trombosis suprarrenal del síndrome antifosfolípido.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Cómo llega el paciente en crisis',
      cards: [
        { title: 'Tríada clásica', tag: 'Reconocer en segundos', kind: 'key', items: [
          { t: 'Shock desproporcionado', d: 'Hipotensión severa para la causa aparente',
            say: 'Ahora, cómo llega el paciente. La tríada tiene tres elementos. El primero es la hipotensión severa o el shock, desproporcionado a la causa aparente: una gastroenteritis que no debería tener a un adulto en setenta de sistólica.' },
          { t: 'Compromiso de conciencia', d: 'Letargia, confusión, estupor o coma',
            say: 'El segundo es el compromiso de conciencia, desde la letargia y la confusión hasta el estupor o el coma.' },
          { t: 'Dolor abdominal y vómitos', d: 'Simula un abdomen agudo quirúrgico',
            say: 'Y el tercero, el más engañoso: síntomas digestivos intensos, con dolor en el hemiabdomen superior, náuseas y vómitos incoercibles. Simula un abdomen agudo quirúrgico. Si operas a este paciente sin corticoide, lo pierdes en pabellón.' },
        ] },
        { title: 'Otros hallazgos', tag: 'Acompañan', kind: 'criteria', items: [
          { t: 'Fiebre alta y mialgias', d: 'Por la infección o el hipotálamo',
            say: 'Además puede tener fiebre alta, por la infección que la gatilló o por desregulación del hipotálamo, mialgias intensas y signos de deshidratación severa.' },
        ] },
        { title: 'Primaria o secundaria', tag: 'Mira la piel', kind: 'alert', items: [
          { t: 'Addison: hiperpigmentación', d: 'Pliegues y encías',
            say: 'Y una pista que conecta con la clase anterior: en el Addison vas a ver hiperpigmentación en pliegues y encías.' },
          { t: 'Secundaria o post-corticoides', d: 'Piel pálida, inicio fulminante',
            say: 'En cambio, en la crisis secundaria o por suspender corticoides, la piel es pálida y el cuadro aparece de forma fulminante. Que no haya manchas no descarta la crisis.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Laboratorio',
      title: 'Lo que muestran los exámenes',
      cards: [
        { title: 'Tríada de laboratorio', tag: 'Se pregunta', kind: 'key', items: [
          { t: 'Hiponatremia', d: 'Sodio bajo 130 mEq/L',
            say: 'Veamos el laboratorio. Lo primero es la hiponatremia, con sodio bajo ciento treinta.' },
          { t: 'Hiperkalemia', d: 'Solo en la forma primaria',
            say: 'Lo segundo, la hiperkalemia, que puede llegar a niveles que amenazan con una arritmia. Ojo: es exclusiva de la forma primaria, porque ahí también falta la aldosterona. En la secundaria, la aldosterona sigue funcionando y el potasio puede estar normal.' },
          { t: 'Hipoglicemia', d: 'Sin cortisol no hay gluconeogénesis',
            say: 'Lo tercero, la hipoglicemia marcada, bajo cincuenta a sesenta. El mecanismo es simple: el cortisol mantiene la gluconeogénesis hepática, y sin él la glucosa cae.' },
        ] },
        { title: 'Otros hallazgos', tag: 'Acompañan', kind: 'criteria', items: [
          { t: 'Acidosis metabólica', d: 'Brecha aniónica normal o algo alta',
            say: 'Además puede haber acidosis metabólica, con brecha aniónica normal o levemente aumentada.' },
          { t: 'Azoemia prerrenal', d: 'Nitrógeno ureico y creatinina altos',
            say: 'Y azoemia prerrenal, con nitrógeno ureico y creatinina elevados por la hipoperfusión. No te confundas: esa creatinina alta no significa que el problema principal sea el riñón.' },
        ] },
        { title: 'La regla de oro', tag: 'Nunca esperar', kind: 'alert', items: [
          { t: 'Tomar cortisol, ACTH y electrolitos', d: 'Una muestra rápida',
            say: 'Y ahora lo más importante de esta parte. Si tienes tiempo, tomas una muestra rápida para cortisol, ACTH y electrolitos.' },
          { t: 'Tratar sin esperar el resultado', d: 'El diagnóstico es clínico',
            say: 'Pero nunca esperas el resultado para tratar. El diagnóstico de la crisis es clínico, y cada hora de retraso aumenta la mortalidad.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico diferencial',
      title: 'Crisis suprarrenal frente a otros shocks',
      head: ['Tipo de shock', 'Respuesta a noradrenalina', 'Pista clave'],
      rows: [
        { cells: ['Crisis suprarrenal', 'Refractario hasta dar corticoide', 'Hipo-Na + hiper-K + hipoglicemia + corticoide previo'],
          say: 'Comparemos con los otros shocks, porque el examen te los pone de distractor. La crisis suprarrenal es refractaria a la noradrenalina hasta que das el corticoide, y la pista está en la hiponatremia, la hiperkalemia, la hipoglicemia y el antecedente de corticoides.' },
        { cells: ['Séptico puro', 'Respuesta transitoria favorable', 'Foco evidente, leucocitosis, lactato alto'],
          say: 'El shock séptico puro sí responde, al menos de forma transitoria, a la noradrenalina, y tiene un foco evidente. Ojo, porque la sepsis puede ser justamente el gatillante de una crisis suprarrenal.' },
        { cells: ['Hipovolémico hemorrágico', 'Responde a sangre y volumen', 'Anemia aguda, trauma o sangrado'],
          say: 'El hipovolémico hemorrágico responde a la reposición de volumen y sangre, y tiene anemia aguda o un antecedente de sangrado.' },
        { cells: ['Cardiogénico', 'Empeora con fluidos; requiere inotrópicos', 'Ingurgitación yugular, edema pulmonar'],
          say: 'Y el cardiogénico empeora con los fluidos y necesita inotrópicos. Tiene ingurgitación yugular, edema pulmonar y un electrocardiograma que sugiere infarto.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento inmediato',
      title: 'Las tres medidas de rescate',
      nodes: [
        { id: 'sos', col: 0, row: 1, k: 'start', t: 'Sospecha clínica', s: 'Shock refractario + antecedente' },
        { id: 'mue', col: 1, row: 0, k: 'q', t: 'Muestra rápida', s: 'Cortisol, ACTH, electrolitos' },
        { id: 'esp', col: 1, row: 2, k: 'trap', t: 'Esperar el resultado', s: 'Mata al paciente' },
        { id: 'hc', col: 2, row: 1, k: 'good', t: 'Hidrocortisona 100 mg EV', s: 'Bolo directo, minuto cero' },
        { id: 'sf', col: 3, row: 0, k: 'good', t: 'Suero fisiológico 0,9%', s: '1 a 2 L en las primeras 2 h' },
        { id: 'sg', col: 3, row: 2, k: 'good', t: 'Suero glucosado 10% o 5%', s: 'Corrige la hipoglicemia' },
        { id: 'dex', col: 2, row: 3, k: 'refer', t: 'Sin hidrocortisona', s: 'Dexametasona 4 a 6 mg EV' },
      ],
      edges: [
        { from: 'sos', to: 'mue' }, { from: 'sos', to: 'esp', label: 'nunca' },
        { from: 'mue', to: 'hc', label: 'sin esperar' },
        { from: 'hc', to: 'sf' }, { from: 'hc', to: 'sg' },
        { from: 'hc', to: 'dex', label: 'si no hay' },
      ],
      steps: [
        { show: ['sos'], note: 'La sospecha basta para tratar',
          say: 'Vamos al tratamiento, que es lo que más se pregunta. Todo parte de la sospecha clínica: shock que no responde, en un paciente con Addison, con corticoides previos, o con la tríada que acabamos de ver.' },
        { show: ['mue', 'esp'], note: 'Se toma la muestra, pero no se espera',
          say: 'Tomas la muestra de sangre, y sigues de largo. La alternativa que dice esperar el cortisol para confirmar suena rigurosa, pero es la trampa: esperar el resultado es dejar morir al paciente.' },
        { show: ['hc'], note: 'Medida 1: el corticoide en el minuto cero',
          say: 'La primera medida, en el minuto cero, es hidrocortisona cien miligramos endovenosa en bolo directo. Es lo que devuelve la respuesta de los vasos a las catecolaminas.' },
        { show: ['sf'], note: 'Medida 2: volumen agresivo',
          say: 'La segunda es la reanimación agresiva con suero fisiológico al cero coma nueve: uno a dos litros en las primeras dos horas, para restaurar la volemia y corregir la hiponatremia.' },
        { show: ['sg'], note: 'Medida 3: glucosa en paralelo',
          say: 'Y la tercera, en paralelo, suero glucosado al diez o al cinco por ciento, para revertir la hipoglicemia y reponer el glucógeno del hígado. Si la hipoglicemia es severa, el libro indica además un bolo de glucosa hipertónica al treinta por ciento.' },
        { show: ['dex'], note: 'Plan B: dexametasona',
          say: '¿Y si no tienes hidrocortisona? Das dexametasona, cuatro a seis miligramos endovenosa en bolo. Tiene una ventaja: no interfiere con la medición del cortisol, así que después puedes hacer el test de estimulación con ACTH sin problema.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Farmacología',
      title: '¿Por qué hidrocortisona y no otro?',
      cards: [
        { title: 'Hidrocortisona', tag: 'Fármaco de elección', kind: 'pharma', items: [
          { t: 'Efecto glucocorticoide y mineralocorticoide', d: 'A dosis altas hace ambos trabajos',
            say: 'Una pregunta que el examen hace con frecuencia: ¿por qué hidrocortisona? Porque a dosis altas tiene, además de su efecto glucocorticoide, un potente efecto mineralocorticoide.' },
          { t: 'Satura la enzima renal', d: 'El cortisol sobrante activa el receptor mineralocorticoide',
            say: 'El mecanismo es elegante. En el riñón, una enzima inactiva el cortisol para que no toque el receptor mineralocorticoide. A dosis de estrés, esa enzima se satura, y el cortisol sobrante actúa como si fuera aldosterona: retiene sodio y elimina potasio.' },
        ] },
        { title: 'Fludrocortisona', tag: 'No en la fase aguda', kind: 'alert', items: [
          { t: 'Innecesaria en el shock', d: 'La hidrocortisona ya la reemplaza',
            say: 'Por eso, la fludrocortisona no se da en la fase aguda, aunque el paciente tenga un Addison. La hidrocortisona a dosis altas ya cubre ese efecto.' },
        ] },
        { title: 'Dexametasona', tag: 'Alternativa', kind: 'normal', items: [
          { t: 'Solo si no hay hidrocortisona', d: 'No interfiere con el cortisol medido',
            say: 'Y la dexametasona queda como alternativa, cuando no hay hidrocortisona a mano, con la ventaja que ya vimos para el estudio posterior.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Trastornos específicos',
      title: 'Qué corrige cada medida',
      cards: [
        { title: 'Shock', tag: 'Tono vascular', kind: 'alert', items: [
          { t: 'Hidrocortisona + suero salino', d: 'Riesgo: colapso cardiopulmonar',
            say: 'Ordenemos qué corrige cada medida. El shock se corrige con la hidrocortisona, que devuelve el tono vascular, más el suero fisiológico. Si no se corrige, el riesgo es el colapso cardiopulmonar.' },
        ] },
        { title: 'Hipoglicemia', tag: 'Gluconeogénesis', kind: 'key', items: [
          { t: 'Glucosa al 30% en bolo + SG 10%', d: 'Riesgo: convulsiones, daño cerebral',
            say: 'La hipoglicemia se corrige con glucosa: bolo de glucosa hipertónica y suero glucosado. Si no, el riesgo es la convulsión y el daño cerebral.' },
        ] },
        { title: 'Hiperkalemia', tag: 'Falta de aldosterona', kind: 'pharma', items: [
          { t: 'Hidrocortisona + suero salino', d: 'Riesgo: arritmia ventricular',
            say: 'Y fíjate en la hiperkalemia. No necesitas un tratamiento aparte: la hidrocortisona, con su efecto mineralocorticoide, y el suero salino la corrigen. El peligro, mientras tanto, es la arritmia ventricular.' },
          { t: 'Acidosis: volumen', d: 'Y soporte ventilatorio',
            say: 'La acidosis se corrige reanimando con volumen y con soporte ventilatorio si hace falta.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Después del rescate',
      title: 'Estabilizar, bajar la dosis y buscar el gatillo',
      cards: [
        { title: 'Mantención', tag: 'Primeras 24 a 48 h', kind: 'pharma', items: [
          { t: 'Hidrocortisona 50 mg c/6 h', d: 'O 200 mg en 24 h en infusión',
            say: 'Después del bolo, se mantiene la hidrocortisona endovenosa en fase de estrés: cincuenta miligramos cada seis horas, o doscientos miligramos en veinticuatro horas en infusión continua.' },
          { t: 'Descenso gradual', d: '50 mg c/8 h, luego c/12 h, luego oral',
            say: 'Una vez estable, en general a las veinticuatro o cuarenta y ocho horas, se baja de a poco: cincuenta cada ocho horas, luego cada doce, hasta la dosis oral habitual de veinte a treinta miligramos al día.' },
        ] },
        { title: 'Fludrocortisona', tag: 'Solo en Addison', kind: 'criteria', items: [
          { t: 'Vuelve bajo 50 mg/día de HC', d: '0,05 a 0,1 mg/día oral',
            say: '¿Y cuándo vuelve la fludrocortisona? En el Addison, cuando la hidrocortisona baja de cincuenta miligramos al día. Bajo ese umbral ya no alcanza su efecto mineralocorticoide, y se reinstala la fludrocortisona oral, cero coma cero cinco a cero coma uno miligramos al día.' },
        ] },
        { title: 'Buscar el gatillante', tag: 'Obligatorio', kind: 'alert', items: [
          { t: 'Hemocultivos, urocultivo, Rx tórax', d: 'Y antibióticos empíricos si hay foco',
            say: 'Y no olvides el gatillante. Hemocultivos, urocultivo y radiografía de tórax, y antibióticos empíricos amplios ante cualquier sospecha de infección. El paciente se maneja en una unidad de paciente crítico, con monitoreo continuo.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Sin cortisol, la noradrenalina no sirve',
      images: [
        { src: 'animaciones/endo-13/A1_shock_sin_cortisol.mp4', label: 'Crisis suprarrenal', credit: 'Ilustración: Servier Medical Art, CC BY 4.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Hidrocortisona cien miligramos en bolo',
          say: 'El cortisol mantiene los receptores alfa uno de las arteriolas. Sin él, la noradrenalina rebota y el shock no responde, aunque subas la dosis. Lo que lo revierte es la hidrocortisona, cien miligramos endovenosa en bolo, junto con suero fisiológico y glucosado.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Hiperplasia suprarrenal congénita',
      title: 'Un bloqueo, dos consecuencias',
      nodes: [
        { id: 'def', col: 0, row: 2, k: 'cause', t: 'Déficit de 21-hidroxilasa', s: 'Más del 90% de las HSC' },
        { id: 'cor', col: 1, row: 1, k: 'mech', t: 'Falta cortisol', s: 'Sube la ACTH' },
        { id: 'hip', col: 2, row: 1, k: 'mech', t: 'Suprarrenal hiperplásica', s: 'Se acumula 17-hidroxiprogesterona' },
        { id: 'and', col: 3, row: 1, k: 'effect', t: 'Exceso de andrógenos', s: 'Los precursores se desvían' },
        { id: 'gen', col: 4, row: 1, k: 'effect', t: 'Genitales ambiguos', s: 'Niña 46,XX, útero y ovarios normales' },
        { id: 'ald', col: 1, row: 3, k: 'mech', t: 'Falta aldosterona', s: 'Forma perdedora de sal' },
        { id: 'sal', col: 4, row: 3, k: 'alert', t: 'Crisis perdedora de sal', s: 'Semanas 1 a 3: shock, hipo-Na, hiper-K' },
      ],
      edges: [
        { from: 'def', to: 'cor' }, { from: 'cor', to: 'hip' },
        { from: 'hip', to: 'and' }, { from: 'and', to: 'gen' },
        { from: 'def', to: 'ald' }, { from: 'ald', to: 'sal' },
      ],
      steps: [
        { show: ['def'], note: 'Defecto autosómico recesivo de la síntesis de cortisol',
          say: 'Ahora, la crisis suprarrenal del recién nacido: la hiperplasia suprarrenal congénita. Son defectos autosómicos recesivos de la síntesis de cortisol, y en más del noventa por ciento de los casos lo que falta es la enzima veintiuno hidroxilasa.' },
        { show: ['cor', 'hip'], note: 'Sin freno, la ACTH estimula sin parar',
          say: 'Sin cortisol, la hipófisis pierde el freno y sube la ACTH. La ACTH estimula sin parar a las suprarrenales, que se hiperplasian, y se acumula el precursor que queda antes del bloqueo: la diecisiete hidroxiprogesterona.' },
        { show: ['and', 'gen'], note: 'La causa más frecuente de ambigüedad genital',
          say: 'Ese precursor se desvía hacia andrógenos. Por eso la recién nacida, con cariotipo cuarenta y seis XX, útero y ovarios normales, nace con genitales ambiguos: clitoromegalia y fusión labioescrotal. Es la causa más frecuente de ambigüedad genital.' },
        { show: ['ald', 'sal'], note: 'El varón no avisa: sus genitales son normales',
          say: 'Y en la forma perdedora de sal, dos tercios de las formas clásicas, falta también la aldosterona. Entre la primera y la tercera semana de vida aparece la crisis, con shock, hiponatremia, hiperkalemia, acidosis e hipoglicemia. Ojo con el varón: como sus genitales son normales, la crisis llega sin aviso.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Hiperplasia suprarrenal congénita',
      title: 'Cómo la reconoces y qué haces',
      cards: [
        { title: 'Sospecha', tag: 'Tres escenarios', kind: 'criteria', items: [
          { t: 'Recién nacida con genitales ambiguos', d: 'No asignar sexo hasta completar el estudio',
            say: 'Hay tres escenarios de sospecha. El primero, la recién nacida con genitales ambiguos. Y una regla: no se asigna el sexo hasta completar el estudio con el equipo especializado.' },
          { t: 'Lactante en crisis perdedora de sal', d: 'Rechazo alimentario, vómitos, mal incremento de peso',
            say: 'El segundo, el lactante de una a tres semanas que rechaza la alimentación, vomita, no sube de peso y se deshidrata hasta el shock. En el varón, a veces la única pista es un escroto hiperpigmentado.' },
          { t: 'Forma no clásica', d: 'Pubarquia precoz, o hirsutismo que simula SOP',
            say: 'Y el tercero, la forma no clásica: un niño con pubarquia precoz, crecimiento acelerado y edad ósea avanzada, o una mujer joven con hirsutismo, acné y oligomenorrea que parece un ovario poliquístico.' },
        ] },
        { title: 'No confundir', tag: 'Se pregunta', kind: 'alert', items: [
          { t: 'Estenosis hipertrófica del píloro', d: 'Alcalosis hipoclorémica e hipokalemia',
            say: 'El lactante que vomita también te hace pensar en la estenosis hipertrófica del píloro. La diferencia está en los gases: el píloro da alcalosis hipoclorémica con hipokalemia. La hiperplasia da lo contrario: hiperkalemia y acidosis.' },
        ] },
        { title: 'Crisis perdedora de sal', tag: 'Sin esperar el resultado', kind: 'pharma', items: [
          { t: '17-hidroxiprogesterona muy alta', d: 'Más electrolitos, glicemia, cariotipo, ecografía',
            say: 'El diagnóstico es la diecisiete hidroxiprogesterona muy elevada, junto con electrolitos, glicemia, cariotipo y ecografía pélvica y suprarrenal. Pero la crisis es una emergencia: tomas la muestra y no esperas el resultado.' },
          { t: 'SF 10–20 mL/kg + glucosa + HC 50–100 mg/m²', d: 'Hidrocortisona: unos 25 mg en el lactante',
            say: 'Bolo de suero fisiológico de diez a veinte mililitros por kilo, que puedes repetir, glucosa endovenosa para la hipoglicemia, e hidrocortisona de cincuenta a cien miligramos por metro cuadrado, unos veinticinco miligramos en el lactante. Es la misma lógica del adulto.' },
          { t: 'Mantención: endocrinología pediátrica', d: 'HC oral + fludrocortisona + sal',
            say: 'Después se deriva a endocrinología pediátrica, que mantiene hidrocortisona oral, fludrocortisona y sal en el lactante, con dosis de estrés en cada enfermedad intercurrente.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Complicaciones de los corticoides',
      title: 'El corticoide crónico: retirarlo lento y prevenir',
      cards: [
        { title: 'Supresión del eje', tag: 'La insuficiencia más frecuente', kind: 'alert', items: [
          { t: 'Prednisona ≥ 20 mg/día por > 3 semanas', d: 'O rasgos cushingoides: suponer eje frenado',
            say: 'Volvamos al adulto, porque el gatillante iatrogénico merece su propia diapositiva. La supresión del eje por corticoides es la causa más frecuente de insuficiencia suprarrenal. Debes suponerla con veinte miligramos o más de prednisona al día por más de tres semanas, o con rasgos cushingoides. Con menos de cinco miligramos, o cursos de menos de tres semanas, es improbable.' },
          { t: 'Nunca suspender de golpe', d: 'Bajar hasta prednisona 5 mg/día, luego lento',
            say: 'Por eso el corticoide crónico nunca se suspende de golpe. Se baja en forma escalonada hasta la dosis fisiológica, cinco miligramos de prednisona, y desde ahí lentamente, midiendo el cortisol matinal.' },
          { t: 'Dosis de estrés', d: 'Fiebre: x2–x3 oral · cirugía o vómitos: HC EV',
            say: 'Y mientras el eje esté frenado, se indican dosis de estrés: duplicar o triplicar la dosis oral si hay fiebre, e hidrocortisona de cincuenta a cien miligramos endovenosa en cirugía mayor, trauma o vómitos.' },
        ] },
        { title: 'Cushing iatrogénico', tag: 'Uso crónico', kind: 'criteria', items: [
          { t: 'Hiperglicemia vespertina, HTA, hipo-K', d: 'Y obesidad central, dislipidemia',
            say: 'El uso crónico produce un Cushing iatrogénico. Lo metabólico: diabetes esteroidal de predominio vespertino, hipertensión, hipokalemia, obesidad central y dislipidemia.' },
          { t: 'Osteoporosis, infecciones, catarata', d: 'TBC, zóster, Pneumocystis; miopatía proximal',
            say: 'Y además osteoporosis con fracturas vertebrales, que aparece desde dosis tan bajas como dos coma cinco a siete coma cinco miligramos por más de tres meses. Suma infecciones, como la reactivación de tuberculosis y zóster, catarata subcapsular posterior, glaucoma, miopatía proximal y úlcera péptica si se asocia a antiinflamatorios.' },
        ] },
        { title: 'Prevención', tag: 'Si dura 3 meses o más', kind: 'pharma', items: [
          { t: 'Menor dosis, toma matinal, vía local', d: 'El menor tiempo posible',
            say: 'La prevención parte por usar la menor dosis por el menor tiempo, en una toma en la mañana, y preferir las vías locales: inhalada, tópica o intraarticular.' },
          { t: 'Calcio, vitamina D, FRAX', d: 'Bifosfonato si el riesgo es moderado o alto',
            say: 'Si el tratamiento va a durar tres meses o más: calcio y vitamina D, evaluación del riesgo de fractura con FRAX y densitometría, y bifosfonato si el riesgo es moderado o alto. Controlas glicemia, presión, potasio y la vista, y descartas una tuberculosis latente.' },
          { t: 'Cotrimoxazol contra Pneumocystis', d: '≥ 20 mg/día > 4 semanas + otro inmunosupresor',
            say: 'Y la profilaxis de Pneumocystis con cotrimoxazol, cuando la dosis es de veinte miligramos o más de prednisona por más de cuatro semanas, junto a otro inmunosupresor.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol de decisión, tal como lo vas a razonar frente al paciente en shock.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Sospecha de crisis en shock', 'Muestra + hidrocortisona inmediata', 'Esperar el cortisol para tratar'],
          say: 'Repasemos las trampas. Ante la sospecha de crisis en shock: tomas la muestra y das hidrocortisona de inmediato. El error es esperar el cortisol.' },
        { cells: ['Shock que no responde a volumen', 'Hidrocortisona 100 mg EV', 'Subir la noradrenalina o dar dopamina'],
          say: 'Shock que no responde a volumen en un paciente con antecedente suprarrenal: hidrocortisona. Subir la noradrenalina o agregar dopamina no sirve sin cortisol.' },
        { cells: ['Addison en fase aguda', 'Solo hidrocortisona a dosis altas', 'Agregar fludrocortisona'],
          say: 'Addison en crisis: basta la hidrocortisona a dosis altas. Agregar fludrocortisona en la fase aguda es innecesario.' },
        { cells: ['Addison con vómitos o diarrea', 'Hidrocortisona endovenosa', 'Solo subir la dosis oral'],
          say: 'Paciente con insuficiencia suprarrenal que vomita: hidrocortisona endovenosa. Subir la dosis oral no sirve si no la absorbe.' },
        { cells: ['Dolor abdominal + shock + Addison', 'Crisis suprarrenal', 'Laparotomía por abdomen agudo'],
          say: 'Dolor abdominal intenso con shock en un Addison: es la crisis, no un abdomen quirúrgico.' },
        { cells: ['No hay hidrocortisona', 'Dexametasona 4 a 6 mg EV', 'Esperar a conseguirla'],
          say: 'Si no hay hidrocortisona, dexametasona. No se espera a conseguirla.' },
        { cells: ['Lactante de 1–3 semanas: vómitos, hipo-Na, hiper-K', 'Crisis de HSC: hidrocortisona', 'Pensar en estenosis del píloro'],
          say: 'Lactante de una a tres semanas que vomita, con sodio bajo y potasio alto: es una crisis perdedora de sal por hiperplasia suprarrenal congénita. El píloro daría potasio bajo y alcalosis.' },
        { cells: ['Prednisona ≥ 20 mg/día por > 3 semanas', 'Retiro escalonado y dosis de estrés', 'Suspenderla de golpe'],
          say: 'Y el paciente con corticoide crónico: se retira de forma escalonada y recibe dosis de estrés. Suspenderlo de golpe es fabricar una crisis suprarrenal.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 39 años con enfermedad de Addison en tratamiento con hidrocortisona y fludrocortisona. Hace 48 horas inicia vómitos y diarrea, sin tolerar sus comprimidos. Llega soporoso, febril (38,8 °C), PA 70/40 mmHg, FC 130 lpm, con dolor abdominal difuso sin peritonismo e hiperpigmentación en manos y mucosa oral. HGT 48 mg/dL.',
      question: '¿Cuál es la conducta inmediata más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar cortisol plasmático y ACTH, y tratar según resultado' },
        { letter: 'B', text: 'Hidrocortisona 100 mg EV en bolo + suero fisiológico y suero glucosado' },
        { letter: 'C', text: 'Iniciar noradrenalina y solicitar TAC de abdomen' },
        { letter: 'D', text: 'Fludrocortisona oral y aumentar la hidrocortisona oral al doble' },
        { letter: 'E', text: 'Laparotomía exploradora por abdomen agudo' },
      ],
      correct: 'B',
      explanation: 'Crisis suprarrenal gatillada por gastroenteritis con intolerancia oral: shock, compromiso de conciencia, dolor abdominal e hipoglicemia. Se trata de inmediato con hidrocortisona 100 mg EV en bolo, suero fisiológico y suero glucosado, sin esperar exámenes. La fludrocortisona no se usa en la fase aguda y la vía oral no sirve con vómitos.',
      say: {
        stem: 'Vamos con un caso. Hombre de treinta y nueve años, con Addison en tratamiento con hidrocortisona y fludrocortisona. Hace dos días empezó con vómitos y diarrea, y no ha podido tomar sus comprimidos. Llega soporoso, con fiebre, presión de setenta con cuarenta, frecuencia de ciento treinta, dolor abdominal difuso sin peritonismo, hiperpigmentación en las manos y la boca, y un hemoglucotest de cuarenta y ocho.',
        question: '¿Cuál es la conducta inmediata más adecuada?',
        options: 'Las alternativas: pedir cortisol y ACTH y tratar según el resultado, hidrocortisona endovenosa en bolo con suero fisiológico y glucosado, noradrenalina y una TAC de abdomen, fludrocortisona y duplicar la hidrocortisona oral, o una laparotomía. Piénsalo.',
        answer: 'Es la B. Tiene todo: Addison, un gatillante que le impidió absorber el fármaco, shock, compromiso de conciencia, dolor abdominal e hipoglicemia. Hidrocortisona cien miligramos en bolo, suero fisiológico y suero glucosado, ya. El distractor tentador es la A, porque pedir cortisol parece ordenado, pero esperar el resultado es el error que mata. Y la D falla dos veces: la vía oral no sirve si vomita, y la fludrocortisona no se usa en la fase aguda.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 20',
      stem: 'Un paciente tiene diarrea de 3 días de evolución, asociada a malestar general marcado y vómitos alimentarios, con deterioro del estado general. Al examen físico se observa deshidratado, con FC: 110 x’, PA: 70/40 mmHg, abdomen doloroso, sin irritación peritoneal. Se solicitan exámenes, entre los que destacan Na+: 126 mEq/L, K+: 4,7 mEq/L, glicemia: 58 mg/dl, PCR: 4,0, blancos: 12.000 por mm3, creatinina 2,3 mg/dl. Se administran 3 litros de suero fisiológico, sin lograr estabilizar al paciente.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Insuficiencia renal aguda' },
        { letter: 'B', text: 'Shigelosis' },
        { letter: 'C', text: 'Peritonitis aguda' },
        { letter: 'D', text: 'Insuficiencia suprarrenal aguda' },
        { letter: 'E', text: 'Accidente vascular hemorrágico' },
      ],
      correct: 'D',
      explanation: 'Shock refractario a 3 litros de suero, hiponatremia, hipoglicemia y potasio en el límite alto, con dolor abdominal sin irritación peritoneal: crisis suprarrenal clásica. La creatinina elevada es azoemia prerrenal por hipoperfusión, no el diagnóstico principal.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil dieciocho. Paciente con tres días de diarrea, vómitos y gran compromiso del estado general. Está deshidratado, con frecuencia de ciento diez y presión de setenta con cuarenta, y el abdomen duele pero sin irritación peritoneal. Tiene sodio de ciento veintiséis, potasio de cuatro coma siete, glicemia de cincuenta y ocho y creatinina de dos coma tres. Le pasan tres litros de suero fisiológico y no se estabiliza.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: insuficiencia renal aguda, shigelosis, peritonitis aguda, insuficiencia suprarrenal aguda, o un accidente vascular hemorrágico. Piénsalo.',
        answer: 'Es la D, insuficiencia suprarrenal aguda. La palabra clave es que tres litros de suero no lo estabilizan: eso es shock refractario. Súmale la hiponatremia, la hipoglicemia y el dolor abdominal sin peritonismo. El distractor tentador es la insuficiencia renal aguda, porque la creatinina está alta, pero eso es la azoemia prerrenal que ya vimos: consecuencia de la hipoperfusión, no la causa del shock.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 6',
      stem: 'Una lactante de 2 meses con cuadro de dolor abdominal y vómitos desde hace semanas que en las últimas horas ha empeorado asociándose fiebre, taquipnea y compromiso de conciencia. Al su ingreso destaca PA: 40/20, FC 130x’, examen pulmonar con crépitos difusos. Se solicitan exámenes de laboratorio donde destaca creatinina 0.9, glicemia 40, Na+ 132, K+ 5.7, hemograma con leucocitosis. Se inicia Ceftriaxona y aporte de suero fisiológico en bolo sin respuesta luego de una hora.',
      question: 'El fármaco de elección para el manejo de esta paciente es:',
      options: [
        { letter: 'A', text: 'Vancomicina' },
        { letter: 'B', text: 'Noradrenalina' },
        { letter: 'C', text: 'Hidrocortisona' },
        { letter: 'D', text: 'Vasopresina' },
        { letter: 'E', text: 'Dopamina' },
      ],
      correct: 'C',
      explanation: 'Hiperplasia suprarrenal congénita con crisis suprarrenal gatillada por una infección: shock que no responde al volumen, hiponatremia, hiperkalemia e hipoglicemia. El fármaco de elección es la hidrocortisona EV (50-100 mg/m²), con fluidos y glucosa; las aminas no revierten el shock sin cortisol.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil trece, esta vez en pediatría. Lactante de dos meses con semanas de dolor abdominal y vómitos, que ahora se agrava con fiebre, taquipnea y compromiso de conciencia. Presión de cuarenta con veinte, crépitos difusos, glicemia de cuarenta, sodio de ciento treinta y dos y potasio de cinco coma siete. Recibe ceftriaxona y bolos de suero, sin respuesta después de una hora.',
        question: '¿Cuál es el fármaco de elección?',
        options: 'Las opciones: vancomicina, noradrenalina, hidrocortisona, vasopresina o dopamina. Piénsalo.',
        answer: 'Es la C, hidrocortisona. Es una crisis suprarrenal en un lactante, y en esa edad la causa más probable es la hiperplasia suprarrenal congénita que vimos, descompensada por una infección. Fíjate en la tríada: hiponatremia, hiperkalemia e hipoglicemia, con shock que no responde al volumen. El distractor tentador es la noradrenalina, porque es el vasopresor clásico del shock, pero ya sabes por qué no funciona sin cortisol.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 160',
      stem: 'Una niña de 7 años, con antecedente de hiperplasia suprarrenal congénita, en tratamiento con hidrocortisona y fludrocortisona, consulta por cuadro de 4 días de diarrea, fiebre y malestar general. Al examen físico tiene leve taquicardia y algunos signos de deshidratación.',
      question: 'Además de la reposición de volumen, ¿qué conducta es la más adecuada?',
      options: [
        { letter: 'A', text: 'Fludrocortisona endovenosa' },
        { letter: 'B', text: 'Betametasona oral' },
        { letter: 'C', text: 'Prednisona oral' },
        { letter: 'D', text: 'Hidrocortisona endovenosa' },
        { letter: 'E', text: 'Aumentar la dosis de hidrocortisona oral' },
      ],
      correct: 'D',
      explanation: 'Paciente con insuficiencia suprarrenal que se descompensa por una infección con diarrea: se sospecha crisis suprarrenal y se trata con un corticoide de acción rápida por vía endovenosa, la hidrocortisona. La vía oral no asegura la absorción.',
      say: {
        stem: 'Una más, del EUNACOM de diciembre de dos mil diecinueve. Niña de siete años con hiperplasia suprarrenal congénita, en tratamiento con hidrocortisona y fludrocortisona. Lleva cuatro días con diarrea, fiebre y malestar general, y tiene leve taquicardia y algunos signos de deshidratación.',
        question: 'Además de reponer volumen, ¿qué conducta es la más adecuada?',
        options: 'Las opciones: fludrocortisona endovenosa, betametasona oral, prednisona oral, hidrocortisona endovenosa, o aumentar la dosis de hidrocortisona oral. Piénsalo.',
        answer: 'Es la D, hidrocortisona endovenosa. Tiene una insuficiencia suprarrenal conocida, un gatillante infeccioso, diarrea y deshidratación: es una crisis en curso, aunque todavía no esté en shock. El distractor tentador es la E, subir la dosis oral, porque suena a lo que se hace ante el estrés, pero con diarrea y en una crisis la vía oral no es confiable. Y la fludrocortisona no es la prioridad en la fase aguda.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2019 · Pregunta 102",
      "stem": "Un paciente alcohólico, en situación de calle, con antecedente de una tuberculosis tratada hace 2 años, consulta por astenia de 3 meses de evolución, asociada a debilidad muscular, dolor abdominal y diarrea. Al examen físico tiene FC 110 lpm, PA 90/60 mmHg y presenta hiperpigmentación en los pliegues y melanoplaquias. Entre sus exámenes destaca creatinina 1,0 mg/dl, sodio 131 mEq/L, potasio 5,6 mEq/L, cloro 94 mEq/L, hematocrito 35% y blancos 7.500 por mm³.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Síndrome paraneoplásico"
        },
        {
          "letter": "B",
          "text": "Cáncer de origen desconocido"
        },
        {
          "letter": "C",
          "text": "Enfermedad de Addison"
        },
        {
          "letter": "D",
          "text": "Daño hepático crónico"
        },
        {
          "letter": "E",
          "text": "Tuberculosis renal"
        }
      ],
      "correct": "C",
      "explanation": "Astenia, hipotensión, síntomas digestivos, hiperpigmentación de pliegues y mucosas, hiponatremia e hiperkalemia: insuficiencia suprarrenal primaria (Addison). El antecedente de tuberculosis apunta a la segunda causa más frecuente, después de la autoinmune. La hiperpigmentación se debe a la ACTH elevada.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil diecinueve. Paciente alcohólico, en situación de calle, con una tuberculosis tratada hace dos años. Tiene tres meses de astenia, debilidad, dolor abdominal y diarrea. Está hipotenso y taquicárdico, con hiperpigmentación de pliegues y manchas oscuras en la boca. Sodio ciento treinta y uno y potasio cinco coma seis.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: síndrome paraneoplásico, cáncer de origen desconocido, enfermedad de Addison, daño hepático crónico, o tuberculosis renal. Piénsalo.",
        "answer": "Es la C, enfermedad de Addison. Hiperpigmentación, hipotensión, sodio bajo y potasio alto son la firma de la insuficiencia suprarrenal primaria, y la tuberculosis es su segunda causa. El paraneoplásico tienta por la baja de peso, pero el Cushing ectópico daría hipertensión e hipokalemia, justo lo contrario."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.03.3.003 · Complicaciones del tratamiento esteroidal",
      "stem": "Un hombre de 60 años usa prednisona 20 mg/día desde hace 8 meses por una enfermedad pulmonar intersticial. Suspendió el fármaco bruscamente hace 4 días por miedo a sus efectos adversos. Consulta por náuseas, vómitos y debilidad intensa. PA 80/50 mmHg, natremia 131 mEq/L.",
      "question": "¿Cuál es la complicación más probable y su manejo?",
      "options": [
        {
          "letter": "A",
          "text": "Síndrome de Cushing: suspender corticoides"
        },
        {
          "letter": "B",
          "text": "Hipotiroidismo: levotiroxina"
        },
        {
          "letter": "C",
          "text": "Hiperaldosteronismo: espironolactona"
        },
        {
          "letter": "D",
          "text": "Feocromocitoma: bloqueo alfa"
        },
        {
          "letter": "E",
          "text": "Insuficiencia suprarrenal aguda secundaria por supresión del eje: hidrocortisona endovenosa y volumen"
        }
      ],
      "correct": "E",
      "explanation": "Los corticoides en dosis suprafisiológicas por más de 3 semanas suprimen el eje hipotálamo-hipófisis-suprarrenal, y su suspensión brusca puede causar insuficiencia suprarrenal aguda. Se trata con hidrocortisona endovenosa (100 mg en bolo) y suero fisiológico, sin esperar exámenes. Por eso los corticoides prolongados se retiran en forma gradual.",
      "say": {
        "stem": "Un hombre de sesenta años usaba prednisona hace ocho meses y la suspendió bruscamente hace cuatro días. Llega con vómitos, debilidad intensa, hipotensión y sodio bajo.",
        "question": "¿Cuál es la complicación más probable y su manejo?",
        "options": "Las opciones: Cushing, hipotiroidismo, hiperaldosteronismo, feocromocitoma o insuficiencia suprarrenal aguda con hidrocortisona endovenosa y volumen. Piénsalo.",
        "answer": "Es la E. Los corticoides prolongados suprimen el eje suprarrenal y la suspensión brusca causa una crisis suprarrenal, que se trata con hidrocortisona y volumen. Cushing tienta por el uso crónico, pero ese es el problema mientras los toma, no al suspenderlos."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Sospecha', tag: 'Diagnóstico clínico', kind: 'key', items: [
          { t: 'Shock refractario + antecedente', d: 'Addison, corticoides o hiperplasia congénita',
            say: 'Cerremos con las reglas de oro. Shock que no responde a volumen ni aminas, en un paciente con Addison, corticoides previos o hiperplasia suprarrenal congénita: piensa en crisis suprarrenal.' },
          { t: 'Hipo-Na + hiper-K + hipoglicemia', d: 'La hiperkalemia, solo en la primaria',
            say: 'El laboratorio lo apoya con hiponatremia, hipoglicemia y, si es primaria, hiperkalemia.' },
          { t: 'Lactante con vómitos e hiper-K', d: 'Hiperplasia suprarrenal congénita, no píloro',
            say: 'En el lactante de pocas semanas con vómitos, hiponatremia e hiperkalemia, piensa en la hiperplasia suprarrenal congénita, no en el píloro.' },
        ] },
        { title: 'Tratamiento', tag: 'Minuto cero', kind: 'pharma', items: [
          { t: 'Hidrocortisona 100 mg EV en bolo', d: 'Sin esperar ningún examen',
            say: 'El tratamiento es hidrocortisona cien miligramos endovenosa en bolo, sin esperar ningún examen.' },
          { t: 'Suero fisiológico + glucosado', d: 'Sin fludrocortisona en la fase aguda',
            say: 'Junto con suero fisiológico y suero glucosado. Y sin fludrocortisona en la fase aguda.' },
        ] },
        { title: 'Después', tag: 'No olvidar', kind: 'alert', items: [
          { t: 'Corticoide crónico: nunca de golpe', d: 'Retiro escalonado y dosis de estrés',
            say: 'El corticoide crónico nunca se suspende de golpe: se retira de forma escalonada y, mientras el eje esté frenado, con dosis de estrés.' },
          { t: 'Buscar y tratar el gatillante', d: 'Infección: la causa número 1',
            say: 'Después, buscas y tratas el gatillante, que casi siempre es una infección. Si te llevas una sola idea de hoy: en la crisis suprarrenal, la hidrocortisona va primero y los exámenes después. En la próxima clase seguimos con la corteza suprarrenal, pero con el problema contrario: el exceso de aldosterona. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Crisis suprarrenal: del shock al rescate',
    root: N('start', 'Shock hipotensivo', 'Con compromiso de conciencia o dolor abdominal',
      'Paciente en shock, con compromiso de conciencia o dolor abdominal y vómitos. La primera pregunta no es un examen: es el contexto.',
      ['', N('q', '¿Antecedente suprarrenal o corticoides?', 'O no responde a volumen y aminas',
        '¿Tiene Addison, usa corticoides, o simplemente no responde al volumen ni a la noradrenalina?',
        ['No', N('refer', 'Otros shocks', 'Séptico, hipovolémico, cardiogénico',
          'Si no hay nada que lo sugiera y el shock responde, piensas en los otros: séptico, hipovolémico o cardiogénico. Pero si deja de responder, vuelve a pensar en la suprarrenal.')],
        ['Sí', N('alert', 'Sospecha de crisis suprarrenal', 'Muestra rápida y no esperar',
          'Si lo tiene, sospechas crisis suprarrenal. Tomas una muestra para cortisol, ACTH y electrolitos, y no esperas el resultado.',
          ['', N('q', '¿Hay hidrocortisona?', 'Minuto cero',
            '¿Tienes hidrocortisona a mano?',
            ['Sí', N('do', 'Hidrocortisona 100 mg EV', 'Más suero fisiológico y glucosado',
              'Hidrocortisona cien miligramos endovenosa en bolo, con suero fisiológico uno a dos litros y suero glucosado para la hipoglicemia.',
              ['', N('ok', 'Estabilizar y bajar la dosis', 'Buscar el gatillante',
                'Luego mantienes la hidrocortisona endovenosa, la bajas de a poco hasta la dosis oral, reinstalas la fludrocortisona en el Addison cuando bajas de cincuenta miligramos al día, y buscas el gatillante con cultivos y radiografía de tórax.')])],
            ['No', N('do', 'Dexametasona 4 a 6 mg EV', 'Más suero fisiológico y glucosado',
              'Si no hay hidrocortisona, dexametasona cuatro a seis miligramos endovenosa, con el mismo volumen y glucosa. No interfiere con la medición del cortisol.')])])])]),
  },
};
