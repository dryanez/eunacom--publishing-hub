// Clase 8.21 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_hematologia.cjs (hem-21).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'hem-21',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Menos de 500 neutrófilos, fiebre y una hora para el antibiótico',
      say: 'Bienvenidos. Hoy entramos a las urgencias oncohematológicas con la más frecuente y la más letal: la neutropenia febril. Ya vimos que la quimioterapia vacía la médula; hoy vemos qué pasa cuando aparece la fiebre. El examen pregunta cuatro cosas: la definición exacta, la hora de oro, el puntaje MASCC y el antibiótico de elección. Y hay una sola idea que ordena todo: la fiebre puede ser el único signo de una sepsis que te mata en horas.',
    },

    {
      type: 'flow',
      kicker: 'Definición',
      title: 'Dos criterios que tienen que coincidir',
      nodes: [
        { id: 'qt', col: 0, row: 1, k: 'cause', t: 'Quimioterapia citotóxica', s: 'Nadir: día 7 a 14 del ciclo' },
        { id: 'ran', col: 1, row: 0, k: 'mech', t: 'RAN < 500/µL', s: 'O < 1.000 con caída prevista' },
        { id: 'fie', col: 1, row: 2, k: 'mech', t: 'Fiebre', s: '≥ 38,3 °C única o ≥ 38 °C por 1 hora' },
        { id: 'nf', col: 2, row: 1, k: 'alert', t: 'Neutropenia febril', s: 'Emergencia médica' },
        { id: 'pro', col: 3, row: 1, k: 'risk', t: 'RAN < 100/µL', s: 'Neutropenia profunda' },
        { id: 'sep', col: 4, row: 1, k: 'risk', t: 'Shock séptico', s: 'Bacilos gramnegativos' },
      ],
      edges: [
        { from: 'qt', to: 'ran' }, { from: 'ran', to: 'nf' }, { from: 'fie', to: 'nf' },
        { from: 'nf', to: 'pro', label: 'si' }, { from: 'pro', to: 'sep', label: 'riesgo máximo' },
      ],
      steps: [
        { show: ['qt'], note: 'El nadir: cuando los neutrófilos tocan fondo',
          say: 'Partamos por la definición, porque se pregunta con números exactos. El escenario es un paciente con quimioterapia. Los neutrófilos caen a su punto más bajo, el nadir, entre el día siete y el día catorce después del ciclo. Si un paciente consulta con fiebre diez días después de su quimioterapia, ya sabes lo que tienes que sospechar.' },
        { show: ['ran'], note: 'Criterio hematológico',
          say: 'El primer criterio es el hematológico: un recuento absoluto de neutrófilos, el RAN, menor de quinientos por microlitro. O menor de mil, si se espera que caiga bajo quinientos en las próximas veinticuatro a cuarenta y ocho horas, como pasa justo antes del nadir.' },
        { show: ['fie'], note: 'Criterio térmico',
          say: 'El segundo es la fiebre: una toma única de treinta y ocho coma tres o más, o de treinta y ocho o más sostenida por una hora, o registrada dos veces separadas por una hora.' },
        { show: ['nf'], note: 'Ambos criterios juntos',
          say: 'Cuando coinciden los dos, es una neutropenia febril. Y no es un diagnóstico para pensar con calma: es una emergencia médica.' },
        { show: ['pro', 'sep'], note: 'Menos de 100: el mayor riesgo',
          say: 'Si el recuento es menor de cien, hablamos de neutropenia profunda. Ahí el riesgo de que los bacilos gramnegativos del intestino pasen a la sangre y produzcan un shock séptico crece de forma exponencial, y cada hora de retraso del antibiótico aumenta la mortalidad.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Cálculo del RAN',
      title: 'El número que tienes que saber calcular',
      cards: [
        { title: 'Fórmula', tag: 'Recuento absoluto', kind: 'criteria', items: [
          { t: 'RAN = leucocitos × (% segmentados + % baciliformes)', d: 'Dividido por 100',
            say: 'El examen muchas veces no te da el RAN: te da los leucocitos y la fórmula, y tienes que calcularlo. Multiplicas los leucocitos totales por la suma del porcentaje de segmentados y de baciliformes, y divides por cien.' },
          { t: 'Ejemplo: 800 × 12% = 96/µL', d: 'Neutropenia profunda',
            say: 'Un ejemplo. Ochocientos leucocitos, con diez por ciento de segmentados y dos de baciliformes. Eso es doce por ciento de ochocientos: noventa y seis neutrófilos. Menos de cien, así que es una neutropenia profunda.' },
        ] },
        { title: 'Ojo en el examen', tag: 'Trampa', kind: 'alert', items: [
          { t: 'Leucocitos "casi normales"', d: 'No descartan la neutropenia',
            say: 'Y ojo con la trampa. Un paciente con mil leucocitos, pero con noventa por ciento de linfocitos, tiene apenas cien neutrófilos. No mires los leucocitos totales: calcula siempre los neutrófilos.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Microbiología',
      title: 'Sin neutrófilos no hay pus: la fiebre es el único signo',
      nodes: [
        { id: 'muc', col: 0, row: 0, k: 'cause', t: 'Mucositis', s: 'Boca e intestino ulcerados' },
        { id: 'tra', col: 1, row: 0, k: 'mech', t: 'Translocación', s: 'Flora propia: más del 75%' },
        { id: 'bgn', col: 2, row: 0, k: 'risk', t: 'Bacilos gramnegativos', s: 'Pseudomonas, E. coli, Klebsiella' },
        { id: 'cvc', col: 0, row: 2, k: 'cause', t: 'Catéter venoso central', s: 'Puerta de entrada' },
        { id: 'cgp', col: 2, row: 2, k: 'effect', t: 'Cocos grampositivos', s: 'S. epidermidis, S. aureus, viridans' },
        { id: 'sin', col: 3, row: 1, k: 'alert', t: 'Sin signos inflamatorios', s: 'Sin pus, sin eritema, sin infiltrado' },
        { id: 'fie', col: 4, row: 1, k: 'trap', t: 'Solo fiebre', s: 'Puede ser una sepsis fulminante' },
      ],
      edges: [
        { from: 'muc', to: 'tra' }, { from: 'tra', to: 'bgn' }, { from: 'cvc', to: 'cgp' },
        { from: 'bgn', to: 'sin' }, { from: 'cgp', to: 'sin' }, { from: 'sin', to: 'fie' },
      ],
      steps: [
        { show: ['muc', 'tra'], note: 'El enemigo viene de adentro',
          say: 'Ahora, ¿de dónde viene la infección? En más del setenta y cinco por ciento, de la propia flora del paciente. La quimioterapia ulcera la boca y el intestino, eso es la mucositis, y por esas úlceras las bacterias pasan a la sangre.' },
        { show: ['bgn'], note: 'Los más letales',
          say: 'Los más letales son los bacilos gramnegativos: Pseudomonas aeruginosa, Escherichia coli, Klebsiella y Enterobacter. Por eso el antibiótico empírico siempre tiene que cubrir Pseudomonas. Guarda esta idea.' },
        { show: ['cvc', 'cgp'], note: 'El catéter trae los grampositivos',
          say: 'Los cocos grampositivos también son muy comunes, por los catéteres venosos centrales que llevan estos pacientes: Staphylococcus epidermidis, Staphylococcus aureus y Streptococcus viridans.' },
        { show: ['sin'], note: 'La inflamación la hacen los neutrófilos',
          say: 'Y ahora lo más importante. La inflamación la hacen los neutrófilos. Si no hay neutrófilos, no hay pus, la celulitis no se pone roja ni se hincha, y la neumonía precoz no muestra infiltrado en la radiografía.' },
        { show: ['fie'], note: 'Nunca subestimes la fiebre',
          say: 'Entonces, muchas veces la fiebre es el único signo de una infección bacteriana masiva. Un paciente neutropénico con fiebre y buen aspecto puede estar en shock en pocas horas. Por eso no se espera encontrar el foco para tratar.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Score MASCC',
      title: '¿Quién puede irse a la casa?',
      cards: [
        { title: 'Puntaje MASCC', tag: 'Máximo 26 puntos', kind: 'criteria', items: [
          { t: 'Síntomas leves o nulos: 5 · moderados: 3', d: 'Sin hipotensión (PAS > 90): 5',
            say: 'Para decidir quién puede tratarse en su casa, la Sociedad Multinacional de Cuidados de Soporte en Cáncer validó el puntaje MASCC. Suma cinco puntos si los síntomas son leves o no hay, y tres si son moderados. Cinco más si no hay hipotensión, es decir, presión sistólica sobre noventa.' },
          { t: 'Sin EPOC descompensado: 4', d: 'Tumor sólido o hematológico sin hongos previos: 4',
            say: 'Cuatro si no tiene una EPOC descompensada. Y cuatro si es un tumor sólido, o una neoplasia hematológica sin infección por hongos previa.' },
          { t: 'Sin deshidratación: 3 · ambulatorio: 3', d: 'Menor de 60 años: 2',
            say: 'Tres si no está deshidratado al punto de necesitar sueros, tres si la fiebre empezó estando ambulatorio, y dos si tiene menos de sesenta años.' },
        ] },
        { title: 'Bajo riesgo', tag: 'MASCC ≥ 21', kind: 'normal', items: [
          { t: 'Complicaciones < 5%, mortalidad < 1%', d: 'Tratamiento oral ambulatorio',
            say: 'Veintiún puntos o más es bajo riesgo: menos de cinco por ciento de complicaciones y mortalidad menor de uno por ciento. Estos pacientes pueden tratarse por boca, en su casa.' },
          { t: 'Estable, con apoyo y acceso < 1 hora', d: 'Recontrol estrecho en 24 horas',
            say: 'Pero solo si están estables, sin falla de órganos, con apoyo familiar y a menos de una hora de poder reconsultar. Y se controlan de cerca a las veinticuatro horas.' },
        ] },
        { title: 'Alto riesgo', tag: 'MASCC < 21', kind: 'alert', items: [
          { t: 'Hospitalización obligatoria', d: 'Aislamiento protector o UPC',
            say: 'Bajo veintiún puntos es alto riesgo, y la hospitalización es obligatoria, en aislamiento protector o en la unidad de paciente crítico, con antibióticos endovenosos de amplio espectro.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La hora de oro',
      title: 'Antibiótico en menos de 60 minutos',
      nodes: [
        { id: 'lle', col: 0, row: 1, k: 'start', t: 'Llega a urgencias', s: 'Fiebre post quimioterapia' },
        { id: 'ana', col: 1, row: 0, k: 'q', t: 'Anamnesis dirigida', s: 'Último ciclo, catéter, focos' },
        { id: 'exa', col: 1, row: 2, k: 'q', t: 'Examen de sitios ocultos', s: 'Boca, catéter, zona perianal' },
        { id: 'tac', col: 2, row: 2, k: 'trap', t: 'Tacto rectal prohibido', s: 'Y termómetro rectal' },
        { id: 'hem', col: 2, row: 0, k: 'good', t: '2 sets de hemocultivos', s: 'Periféricos + cada lumen del CVC' },
        { id: 'atb', col: 3, row: 1, k: 'good', t: 'Antibiótico EV', s: 'En menos de 60 minutos' },
        { id: 'esp', col: 4, row: 1, k: 'trap', t: 'Esperar la radiografía', s: 'O el traslado' },
      ],
      edges: [
        { from: 'lle', to: 'ana' }, { from: 'lle', to: 'exa' }, { from: 'exa', to: 'tac', label: 'nunca' },
        { from: 'ana', to: 'hem' }, { from: 'hem', to: 'atb' }, { from: 'exa', to: 'atb' },
        { from: 'atb', to: 'esp', label: 'no retrasar por' },
      ],
      steps: [
        { show: ['lle'], note: 'La regla que salva vidas',
          say: 'Llegamos a la regla de oro de la clase. Todo paciente con neutropenia febril de alto riesgo debe recibir la primera dosis de antibiótico endovenoso en menos de sesenta minutos desde que llega a urgencias. Es la hora de oro, y ordena todo lo que haces.' },
        { show: ['ana'], note: 'Preguntas rápidas y dirigidas',
          say: 'Primero, una anamnesis corta y dirigida: cuándo fue el último ciclo de quimioterapia, si tiene catéter, y si hay algún foco respiratorio o urinario.' },
        { show: ['exa'], note: 'Buscar donde la infección se esconde',
          say: 'Luego, un examen físico rápido pero prolijo de los sitios donde la infección se esconde: la boca y la faringe, el sitio de inserción del catéter, y la zona perianal, solo mirando.' },
        { show: ['tac'], note: 'Microtrauma = bacteriemia',
          say: 'Y aquí está la prohibición que el examen adora. Está estrictamente prohibido el tacto rectal, y también el termómetro rectal. El microtrauma de la mucosa puede provocar una bacteriemia fatal.' },
        { show: ['hem'], note: 'Cultivar antes, pero sin demorar',
          say: 'Después, dos sets de hemocultivos periféricos, y además uno por cada lumen del catéter si lo tiene.' },
        { show: ['atb', 'esp'], note: 'Nada justifica esperar',
          say: 'E inmediatamente, el antibiótico endovenoso. No se espera la radiografía de tórax, ni el resultado de los exámenes, ni el traslado a otro centro. Esa demora es la respuesta incorrecta en casi todas las preguntas del tema.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Esquema empírico',
      title: 'Monoterapia antipseudomónica',
      cards: [
        { title: 'Alto riesgo', tag: 'Primera opción', kind: 'pharma', items: [
          { t: 'Cefepime 2 g c/8 h EV', d: 'En infusión extendida',
            say: 'Pasemos al antibiótico. En el paciente de alto riesgo, la elección es la monoterapia antipseudomónica endovenosa. La primera opción es el cefepime, dos gramos cada ocho horas.' },
          { t: 'O piperacilina/tazobactam 4,5 g c/6 h EV', d: 'Alternativa de igual nivel',
            say: 'O piperacilina con tazobactam, cuatro coma cinco gramos cada seis horas. Las dos cubren Pseudomonas, que era la idea que te pedí guardar.' },
          { t: 'Meropenem 1 g c/8 h EV', d: 'Si hay shock o sospecha de BLEE',
            say: 'El meropenem, un gramo cada ocho horas, se reserva para el shock séptico o la sospecha de bacterias productoras de betalactamasas de espectro extendido.' },
        ] },
        { title: 'Lo que ya no se hace', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: 'Sin aminoglucósido de rutina', d: 'Nefrotóxico, sin beneficio en sobrevida',
            say: 'Y ojo, porque aquí las preguntas antiguas te pueden confundir. Ya no se recomienda sumar de rutina un aminoglucósido, como la amikacina: es nefrotóxico y no mejora la sobrevida. La monoterapia es suficiente.' },
        ] },
        { title: 'Bajo riesgo', tag: 'MASCC ≥ 21', kind: 'normal', items: [
          { t: 'Ciprofloxacino 500–750 mg c/12 h VO', d: '+ amoxicilina/clavulánico 875/125 mg c/8 h',
            say: 'En el paciente de bajo riesgo bien seleccionado, el esquema es oral: ciprofloxacino, quinientos a setecientos cincuenta miligramos cada doce horas, más amoxicilina con ácido clavulánico, ochocientos setenta y cinco miligramos cada ocho horas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Vancomicina',
      title: 'No va de rutina: solo con indicación',
      cards: [
        { title: 'Indicaciones', tag: 'Cubrir grampositivos resistentes', kind: 'criteria', items: [
          { t: 'Shock séptico', d: 'Inestabilidad hemodinámica franca',
            say: 'La vancomicina no se incluye de rutina en el esquema inicial. Se agrega solo con indicaciones precisas. La primera: inestabilidad hemodinámica, el shock séptico.' },
          { t: 'Infección del catéter', d: 'Eritema, flebitis, secreción en el túnel',
            say: 'La segunda: infección evidente del catéter venoso central, con eritema, flebitis o secreción en el trayecto.' },
          { t: 'Colonización conocida por SAMR', d: 'Staphylococcus aureus resistente a meticilina',
            say: 'La tercera: colonización conocida por Staphylococcus aureus resistente a meticilina.' },
          { t: 'Mucositis grave · neumonía documentada', d: 'Mucositis grado 3–4 con profilaxis previa con quinolonas',
            say: 'Y la cuarta y quinta: una mucositis grave, grado tres o cuatro, en un paciente que recibió profilaxis con fluoroquinolonas, por el riesgo de Streptococcus viridans resistente; y una neumonía documentada.' },
        ] },
        { title: 'Si los cultivos salen negativos', tag: 'Desescalar', kind: 'normal', items: [
          { t: 'Suspender a las 48–72 horas', d: 'Si no hay grampositivos',
            say: 'Si se agregó por inestabilidad y a las cuarenta y ocho a setenta y dos horas no hay grampositivos en los cultivos, se suspende.' },
          { t: 'Retirar el catéter', d: 'Si hay bacteriemia por S. aureus o Candida',
            say: 'Y si el catéter causa una bacteriemia por Staphylococcus aureus o por Candida, el catéter se retira.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Si sigue con fiebre',
      title: 'Cronograma de escalamiento',
      head: ['Momento', 'Situación', 'Conducta'],
      rows: [
        { cells: ['Hora 0', 'Fiebre + RAN < 500', '2 hemocultivos + cefepime o pip/tazo en < 60 min'],
          say: 'Y si el paciente sigue con fiebre, ¿qué haces? Esta tabla ordena el tiempo. En la hora cero, hemocultivos y cefepime o piperacilina con tazobactam antes de sesenta minutos.' },
        { cells: ['48–72 horas', 'Febril pero estable', 'Mantener: revisar cultivos, no cambiar a ciegas'],
          say: 'A las cuarenta y ocho a setenta y dos horas, si sigue febril pero estable, no se cambia nada a ciegas. La fiebre en el neutropénico dura en promedio cuatro a cinco días. Se revisan los cultivos y se mantiene.' },
        { cells: ['48–72 horas', 'Deterioro o inestabilidad', 'Escalar a meropenem + vancomicina, buscar focos'],
          say: 'En cambio, si se deteriora o se inestabiliza, se escala a meropenem más vancomicina y se buscan focos nuevos.' },
        { cells: ['Día 4 a 7', 'Fiebre persistente, cultivos negativos', 'TC de tórax + galactomanano + antifúngico'],
          say: 'Y si al cuarto a séptimo día sigue con fiebre pese a antibióticos adecuados y cultivos negativos, piensa en hongos. Se pide un scanner de tórax de alta resolución buscando nódulos con signo del halo, y galactomanano de Aspergillus en suero, y se inicia un antifúngico: voriconazol, caspofungina o anfotericina B liposomal.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol de decisión, partiendo del paciente con fiebre después de la quimioterapia.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Fiebre 10 días post quimioterapia', 'Hemograma con RAN, urgente', 'Antipiréticos y control'],
          say: 'Repasemos las trampas. Fiebre a los diez días de la quimioterapia: estás en el nadir, y lo primero es un hemograma con el recuento de neutrófilos. Mandarlo a la casa con antipiréticos es el error.' },
        { cells: ['Neutropenia febril sin foco aparente', 'Antibiótico EV en < 60 min', 'Esperar radiografía o cultivos'],
          say: 'Neutropenia febril sin foco: antibiótico endovenoso en menos de una hora. Esperar la radiografía o los cultivos es la trampa, porque sin neutrófilos no hay signos.' },
        { cells: ['Examen físico del neutropénico', 'Inspeccionar zona perianal', 'Tacto rectal o termómetro rectal'],
          say: 'En el examen, la zona perianal solo se mira. El tacto rectal está prohibido.' },
        { cells: ['Alto riesgo (MASCC < 21)', 'Cefepime o pip/tazo en monoterapia', 'Sumar amikacina o vancomicina de rutina'],
          say: 'Alto riesgo: monoterapia con cefepime o piperacilina con tazobactam. Sumar de rutina amikacina o vancomicina es el error.' },
        { cells: ['Bajo riesgo (MASCC ≥ 21), estable', 'Ciprofloxacino + amoxicilina/clavulánico VO', 'Hospitalizar a todos'],
          say: 'Bajo riesgo, estable y con apoyo: ciprofloxacino más amoxicilina con clavulánico por boca, con control a las veinticuatro horas.' },
        { cells: ['Fiebre persistente pese a antibióticos', 'Buscar hongos + antifúngico empírico', 'Suspender antibióticos u observar'],
          say: 'Y fiebre persistente pese a antibióticos de amplio espectro, sin foco: se buscan hongos y se inicia antifúngico. Suspender los antibióticos y observar es el error.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 53 años con cáncer de mama en quimioterapia con adriamicina y ciclofosfamida (último ciclo hace 10 días). Consulta por fiebre de 38,6 °C y calofríos de 3 horas. Niega tos, disuria o dolor abdominal. PA 115/70 mmHg, FC 102 lpm, T° 37,8 °C. Catéter venoso central implantable sin signos inflamatorios; boca con eritema leve sin úlceras. Hb 9,4 g/dL, leucocitos 800/µL (segmentados 10%, baciliformes 2%), plaquetas 85.000/µL.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Esperar la radiografía de tórax y el urocultivo para decidir el antibiótico' },
        { letter: 'B', text: 'Tacto rectal para descartar absceso perianal y luego decidir' },
        { letter: 'C', text: 'Dos sets de hemocultivos (periféricos y por el catéter) y cefepime 2 g EV en menos de 60 minutos' },
        { letter: 'D', text: 'Ceftazidima más amikacina y vancomicina EV' },
        { letter: 'E', text: 'Paracetamol y control en 24 horas, ya que está afebril al examen' },
      ],
      correct: 'C',
      explanation: 'RAN = 800 × 12% = 96/µL: neutropenia profunda con fiebre en el nadir. Se toman dos sets de hemocultivos (periféricos y por cada lumen del CVC) y se inicia monoterapia antipseudomónica (cefepime 2 g o piperacilina/tazobactam 4,5 g EV) en menos de 60 minutos, hospitalizando en aislamiento protector. El tacto rectal está contraindicado y no se esperan imágenes.',
      say: {
        stem: 'Vamos con un caso. Mujer de cincuenta y tres años con cáncer de mama, cuyo último ciclo de quimioterapia fue hace diez días. Consulta por fiebre de treinta y ocho coma seis y calofríos. No tiene foco evidente. Presión normal, frecuencia de ciento dos, y al llegar tiene treinta y siete coma ocho. Leucocitos ochocientos, con diez por ciento de segmentados y dos de baciliformes.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes cinco opciones. Esperar la radiografía y el urocultivo. Hacer un tacto rectal. Hemocultivos y cefepime en menos de una hora. Ceftazidima, amikacina y vancomicina. O paracetamol y control, porque ahora está afebril. Piénsalo.',
        answer: 'La respuesta es la C. Calcula: doce por ciento de ochocientos son noventa y seis neutrófilos, una neutropenia profunda en pleno nadir, y ya tuvo fiebre de treinta y ocho coma seis. Hemocultivos y cefepime antes de sesenta minutos. El distractor tentador es la E, porque ahora está afebril. Pero la fiebre ya se registró, y en un neutropénico esperar es peligroso. El tacto rectal está prohibido, y la amikacina y la vancomicina no van de rutina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 58',
      stem: 'Un niño de 7 años, diagnosticado de leucemia linfoblástica aguda, inicia sus ciclos de quimioterapia hace 7 días. Consulta por fiebre asociada a malestar general. Al examen físico presenta temperatura 38,5 °C y frecuencia cardíaca 110 x minuto, sin alteraciones en el examen físico segmentario.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Administrar ceftriaxona intramuscular y controlar en 24 horas' },
        { letter: 'B', text: 'Indicar antipiréticos y controlar en caso de persistencia de la fiebre' },
        { letter: 'C', text: 'Administrar antibióticos de amplio espectro por vía endovenosa' },
        { letter: 'D', text: 'Solicitar serología para virus de Epstein-Barr y citomegalovirus' },
        { letter: 'E', text: 'Iniciar amoxicilina por vía oral' },
      ],
      correct: 'C',
      explanation: 'Fiebre 7 días después de iniciar quimioterapia: neutropenia febril hasta demostrar lo contrario. Es una urgencia infectológica que requiere antibióticos endovenosos de amplio espectro con cobertura antipseudomónica durante la primera hora, sin esperar el foco.',
      say: {
        stem: 'Ahora preguntas reales. La primera es del EUNACOM de diciembre de dos mil veinticinco. Niño de siete años con leucemia linfoblástica aguda, que inició su quimioterapia hace siete días. Consulta por fiebre de treinta y ocho coma cinco y malestar general, con un examen físico sin foco.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: ceftriaxona intramuscular y control en veinticuatro horas, antipiréticos y control, antibióticos de amplio espectro endovenosos, serología para virus, o amoxicilina oral. Piénsalo.',
        answer: 'Es la C, antibióticos de amplio espectro por vía endovenosa. Siete días después de la quimioterapia está entrando al nadir, y la fiebre sin foco es una neutropenia febril hasta demostrar lo contrario. El distractor tentador es la ceftriaxona intramuscular con control, porque suena a tratar. Pero no cubre Pseudomonas, y mandarlo a la casa sin estratificar el riesgo es peligroso.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 61',
      stem: 'Paciente con leucemia en quimioterapia. Recuento absoluto de neutrófilos: 400/mm³. Inicia fiebre 38.5°C. Inicia ATB de amplio espectro. A las 72 horas persiste febril sin foco identificado.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Agregar antifúngico empírico (anfotericina B liposomal o voriconazol)' },
        { letter: 'B', text: 'Cambiar antibiótico a vancomicina' },
        { letter: 'C', text: 'Realizar PET-CT para buscar foco' },
        { letter: 'D', text: 'Suspender ATB y observar' },
        { letter: 'E', text: 'Agregar metronidazol' },
      ],
      correct: 'A',
      explanation: 'Neutropenia febril que no responde a antibióticos de amplio espectro y sin foco: se sospecha infección fúngica invasiva (aspergilosis o candidiasis) y se agrega antifúngico empírico (anfotericina B liposomal, voriconazol o equinocandinas). El libro sitúa este paso entre el 4.º y el 7.º día de fiebre persistente.',
      say: {
        stem: 'La segunda es del EUNACOM de julio de dos mil veinticinco. Paciente con leucemia en quimioterapia, con cuatrocientos neutrófilos y fiebre de treinta y ocho coma cinco. Se inician antibióticos de amplio espectro, y a las setenta y dos horas sigue febril, sin foco.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: agregar un antifúngico empírico, cambiar a vancomicina, pedir un PET-CT, suspender los antibióticos y observar, o agregar metronidazol. Piénsalo.',
        answer: 'Es la A, agregar un antifúngico empírico. Si la fiebre persiste pese a antibióticos adecuados y no hay foco, hay que pensar en hongos, como Aspergillus o Candida. El libro lo ubica entre el cuarto y el séptimo día, pero entre estas opciones es la única correcta. Cambiar a vancomicina deja sin cobertura a los gramnegativos, y suspender los antibióticos es peligroso.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 73',
      stem: 'Paciente con diagnóstico de una leucemia mieloide aguda, en su cuarto ciclo de quimioterapia, se encuentra hospitalizado por fiebre sin foco, asociado a neutropenia (neutropenia febril), por lo que está en tratamiento con ceftazidima, amikacina y vancomicina, sin mayor respuesta. En sus exámenes de laboratorio presenta neutrófilos 100 por mm3 y en la radiografía de tórax se observa una imagen apical derecha radiopaca, de 3 cm de diámetro, espiculada y con bordes difusos.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Tuberculosis' },
        { letter: 'B', text: 'Neumonía intrahospitalaria' },
        { letter: 'C', text: 'Aspergilosis invasiva' },
        { letter: 'D', text: 'Nocardosis' },
        { letter: 'E', text: 'Neumonía por Pneumocystis jiroveci' },
      ],
      correct: 'C',
      explanation: 'La aspergilosis invasiva es una complicación clásica de la neutropenia prolongada y profunda. Por ser un hongo, no responde a los antibióticos. Se estudia con TC de tórax (nódulo con signo del halo) y galactomanano, y se trata con voriconazol.',
      say: {
        stem: 'Y la última, del EUNACOM de julio de dos mil dieciséis. Paciente con leucemia mieloide aguda, hospitalizado por neutropenia febril, con cien neutrófilos, que no responde a varios antibióticos. La radiografía muestra una imagen apical derecha de tres centímetros, espiculada y de bordes difusos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: tuberculosis, neumonía intrahospitalaria, aspergilosis invasiva, nocardiosis, o neumonía por Pneumocystis jirovecii. Piénsalo.',
        answer: 'Es la C, aspergilosis invasiva. Es la complicación clásica de la neutropenia profunda y prolongada, y como es un hongo, no responde a los antibióticos. El distractor tentador es la neumonía intrahospitalaria, porque está hospitalizado. Pero ya tiene cobertura amplia sin respuesta, y un nódulo en un neutropénico es Aspergillus hasta demostrar lo contrario. Se confirma con scanner, buscando el signo del halo, y galactomanano.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Definición', tag: 'Dos criterios', kind: 'key', items: [
          { t: 'RAN < 500 + fiebre ≥ 38,3 °C', d: 'O ≥ 38 °C sostenida por 1 hora',
            say: 'Cerremos con las reglas de oro. Neutropenia febril es un recuento de neutrófilos menor de quinientos, más fiebre de treinta y ocho coma tres, o de treinta y ocho sostenida por una hora.' },
          { t: 'Sin neutrófilos no hay signos', d: 'La fiebre puede ser lo único',
            say: 'Sin neutrófilos no hay pus ni infiltrado. La fiebre puede ser el único signo.' },
        ] },
        { title: 'Conducta', tag: 'La hora de oro', kind: 'alert', items: [
          { t: 'Hemocultivos + antibiótico EV < 60 min', d: 'Nunca tacto rectal',
            say: 'Hemocultivos y antibiótico endovenoso en menos de sesenta minutos, sin esperar imágenes, y nunca tacto rectal.' },
          { t: 'MASCC ≥ 21: oral ambulatorio', d: 'MASCC < 21: hospitalizar',
            say: 'MASCC de veintiuno o más permite tratar por boca en la casa; bajo veintiuno se hospitaliza.' },
        ] },
        { title: 'Antibióticos', tag: 'Monoterapia', kind: 'pharma', items: [
          { t: 'Cefepime o piperacilina/tazobactam', d: 'Vancomicina solo con indicación',
            say: 'Monoterapia antipseudomónica con cefepime o piperacilina con tazobactam. La vancomicina solo con indicación, y el aminoglucósido ya no va de rutina.' },
          { t: 'Fiebre día 4 a 7: pensar en hongos', d: 'TC de tórax + galactomanano',
            say: 'Si te llevas una sola idea de hoy: el neutropénico con fiebre recibe su antibiótico antipseudomónico antes de una hora, aunque se vea bien. En la próxima clase seguimos con las urgencias oncológicas: la lisis tumoral, la hipercalcemia y la compresión medular. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Neutropenia febril: de la fiebre al antibiótico',
    root: N('start', 'Fiebre post quimioterapia', 'Día 7 a 14 del ciclo',
      'Paciente en quimioterapia que consulta con fiebre. Asume que está en el nadir y actúa rápido.',
      ['', N('q', '¿RAN < 500 y fiebre ≥ 38,3 °C?', 'O ≥ 38 °C por 1 hora',
        'Calcula el recuento absoluto de neutrófilos y confirma la fiebre. ¿Cumple los dos criterios?',
        ['NO', N('ok', 'Evaluar otra causa', 'Sin criterios de neutropenia febril',
          'Si no cumple los criterios, estudias la fiebre como en cualquier paciente, con controles cercanos.')],
        ['SÍ', N('q', 'Hemocultivos + ATB EV < 60 min', 'Luego: ¿puntaje MASCC?',
          'Si cumple, es una neutropenia febril: dos sets de hemocultivos y antibiótico endovenoso antes de sesenta minutos, sin tacto rectal y sin esperar imágenes. Con el antibiótico en marcha, calculas el puntaje MASCC.',
          ['≥ 21', N('ok', 'Bajo riesgo: oral ambulatorio', 'Ciprofloxacino + amoxicilina/clavulánico',
            'Veintiuno o más, estable y con apoyo: ciprofloxacino más amoxicilina con clavulánico por boca, con control a las veinticuatro horas.')],
          ['< 21', N('alert', 'Alto riesgo: hospitalizar', 'Cefepime o pip/tazo EV en monoterapia',
            'Bajo veintiuno: hospitalización en aislamiento protector, con cefepime o piperacilina con tazobactam. Si al cuarto a séptimo día sigue con fiebre y cultivos negativos, busca hongos.')],
          ['Shock', N('alert', 'UCI: meropenem + vancomicina', 'Escalar y buscar focos',
            'Si está en shock séptico, va a cuidados intensivos con meropenem más vancomicina.')])])]),
  },
};
