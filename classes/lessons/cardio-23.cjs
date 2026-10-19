// Clase 4.2 (Cardiología) — Estenosis aórtica: semiología, severidad ecocardiográfica y reemplazo valvular. Guion escrito a mano.
// Fuente clínica: books/scripts/dataset_cardiologia_bloque_4.cjs (cardio-23). Códigos: 1.01.1.009 Estenosis aórtica (Dx específico ·
// Tx inicial · Seguimiento derivar) y 1.01.4.006 Ecocardiografía (emplea informe), según books/data/v3_codemap.json.
// Preguntas reales (class_questions.cjs cardio-23): Diciembre 2019 P126 (síncope + soplo + HVI), Julio 2015 P56 (angina con soplo: pedir
// ecocardiograma) y Julio 2019 P101 (joven con soplo desde la infancia, parvus et tardus). Enunciados y alternativas copiados del banco.
// Descartadas: Diciembre 2025 P174 (alternativas con texto corrupto «aór2ca» y soplo diastólico concomitante); Diciembre 2024 P131 (alternativas
// rotas); Julio 2016 P168 (EAo de libro, repite lo de Diciembre 2019 P126); Julio 2017 P110 y Julio 2015 P55 (válidas, repiten el patrón);
// Julio 2013 P53 (es de insuficiencia cardíaca: va en cardio-16).
// Fotos en contexto: ecocardiograma de estenosis aórtica valvar con domo sistólico y regurgitación (Nelson, 22.ª ed., p. 2792).
// En movimiento: scenes/cardio_b4.html ?v=ea (curvas de presión VI/aorta, gradiente y tríada de síntomas), gráfico propio de código.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cardio-23',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Reconocerla en el examen físico, pedir el ecocardiograma y saber cuándo reemplazar la válvula',
      say: 'Bienvenido. Después de los soplos en general, vemos la valvulopatía que más se pregunta en el EUNACOM: la estenosis aórtica. Casi siempre aparece como un adulto mayor con síncope, angina o falta de aire al esfuerzo y un soplo que se irradia al cuello. Hoy aprendes a reconocerla, a pedir el examen correcto, a leer el informe del ecocardiograma y a decidir cuándo hay que operar.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Una obstrucción fija a la salida del ventrículo',
      nodes: [
        { id: 'c', col: 0, row: 1, k: 'cause', t: 'Válvula calcificada', s: 'Senil o bicúspide' },
        { id: 'o', col: 1, row: 1, k: 'mech', t: 'Obstrucción fija', s: 'Sobrecarga de presión' },
        { id: 'h', col: 2, row: 1, k: 'mech', t: 'Hipertrofia concéntrica', s: 'Ley de Laplace' },
        { id: 'd', col: 3, row: 0, k: 'effect', t: 'Pared rígida', s: 'Disfunción diastólica, R4' },
        { id: 'a', col: 3, row: 2, k: 'effect', t: 'Falta de oxígeno', s: 'Angina y síncope' },
        { id: 'f', col: 4, row: 1, k: 'risk', t: 'Falla del ventrículo', s: 'Disnea: fase tardía' },
      ],
      edges: [{ from: 'c', to: 'o' }, { from: 'o', to: 'h' }, { from: 'h', to: 'd' }, { from: 'h', to: 'a' }, { from: 'd', to: 'f' }, { from: 'a', to: 'f' }],
      steps: [
        { show: ['c', 'o'], note: 'Dos causas principales',
          say: 'La estenosis aórtica es una obstrucción fija a la salida del ventrículo izquierdo. La causa más frecuente es la calcificación senil de una válvula normal, sobre los setenta años. La otra es la válvula bicúspide congénita, la anomalía cardíaca congénita más común, que se calcifica antes, entre los cuarenta y los sesenta años. Por eso, en un menor de sesenta y cinco años sin fiebre reumática, piensa primero en una bicúspide.' },
        { show: ['h'], note: 'El ventrículo se engruesa',
          say: 'Para vencer la obstrucción, el ventrículo genera más presión. Según la ley de Laplace, la tensión de la pared depende de la presión y del radio, y baja con el espesor. Entonces el ventrículo engruesa su pared y se hipertrofia de forma concéntrica, con la cavidad pequeña y la función conservada.' },
        { show: ['d', 'a'], note: 'El precio: rigidez y desbalance de oxígeno',
          say: 'Pero esa pared hipertrófica es rígida, y el ventrículo se llena mal: aparece un cuarto ruido. Además, la masa aumentada consume más oxígeno y comprime las coronarias, y de ahí vienen la angina y, con el esfuerzo, el síncope.' },
        { show: ['f'], note: 'Al final, falla el ventrículo',
          say: 'Solo en etapas muy avanzadas el ventrículo se dilata y cae la fracción de eyección. La disnea es la manifestación tardía y la de peor pronóstico.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'La tríada y la sobrevida',
      cards: [
        { title: 'Síntomas cardinales', tag: 'Cambian el pronóstico', kind: 'alert', items: [
          { t: 'Angina de esfuerzo', d: 'Sobrevida media: 5 años',
            say: 'La estenosis aórtica es silenciosa durante años. Todo cambia cuando aparece uno de tres síntomas. La angina de esfuerzo, con una sobrevida media de cinco años sin cirugía. Ojo: hasta la mitad de estos pacientes tiene además enfermedad coronaria.' },
          { t: 'Síncope de esfuerzo', d: 'Sobrevida media: 3 años',
            say: 'El síncope de esfuerzo, con tres años. El gasto cardíaco es fijo, no puede subir cuando el ejercicio dilata los vasos de los músculos, la presión cae y el cerebro se queda sin flujo.' },
          { t: 'Disnea o insuficiencia cardíaca', d: 'Sobrevida media: 2 años',
            say: 'Y la disnea, con apenas dos años, porque indica presiones de llenado muy altas.' },
        ] },
        { title: 'Dato de examen', tag: 'Mayor de 70', kind: 'key', items: [
          { t: 'Anciano con angina, síncope o disnea', d: 'Primero ecocardiograma',
            say: 'La regla para el examen: un adulto mayor con angina, síncope o disnea de esfuerzo y un soplo sistólico se estudia primero con un ecocardiograma. No con una prueba de esfuerzo y no con una coronariografía, que vienen después.' },
          { t: 'Síndrome de Heyde', d: 'Sangrado digestivo por angiodisplasias',
            say: 'Una rareza que cae a veces: el síndrome de Heyde, la estenosis aórtica con sangrado digestivo por angiodisplasias, que se cura al cambiar la válvula.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología',
      title: 'Pulso, frémito, soplo y ruidos',
      cards: [
        { title: 'Pulso y palpación', tag: 'Parvus et tardus', kind: 'key', items: [
          { t: 'Pulso parvus et tardus', d: 'Pequeño y de ascenso lento; carótidas',
            say: 'El pulso es parvus et tardus: de amplitud pequeña y ascenso lento, con una meseta prolongada, y se palpa mejor en las carótidas.' },
          { t: 'Choque sostenido, frémito', d: 'No desplazado hasta etapas avanzadas',
            say: 'El choque de la punta es sostenido y no está desplazado hasta etapas avanzadas, y puede haber un frémito sistólico en el foco aórtico y en el hueco supraesternal.' },
        ] },
        { title: 'Auscultación', tag: 'Rombo, irradiado, R2 apagado', kind: 'criteria', items: [
          { t: 'Soplo eyectivo en rombo', d: 'Foco aórtico, a ambas carótidas',
            say: 'El soplo es sistólico eyectivo, rudo, en rombo, en el foco aórtico, y se irradia a ambas carótidas. Mientras más grave la estenosis, más tardío es su pico.' },
          { t: 'R2 apagado o único; R4', d: 'Esclerosis: R2 y pulso normales',
            say: 'El componente aórtico del segundo ruido se apaga o desaparece, y es frecuente un cuarto ruido. Si el soplo es eyectivo pero el segundo ruido y el pulso son normales, es solo esclerosis aórtica, sin obstrucción importante.' },
          { t: 'Valsalva y handgrip lo disminuyen', d: 'No aumenta como la MCH',
            say: 'El soplo disminuye con la maniobra de Valsalva y con el handgrip, y aumenta con las cuclillas. En eso se distingue de la miocardiopatía hipertrófica, cuyo soplo aumenta con Valsalva y no se irradia a las carótidas.' },
        ] },
      ],
    },

    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'El gradiente entre el ventrículo y la aorta',
      images: [
        { src: 'animaciones/cardio-23/A1_ea_gradiente_y_sintomas.mp4', label: 'Gradiente y tríada de síntomas', credit: 'Animación propia con los criterios del libro' },
      ],
      steps: [
        { note: 'Sin estenosis no hay gradiente; con estenosis, sí',
          say: 'Mira las presiones. Con una válvula normal, la curva del ventrículo, en rojo, y la de la aorta, en azul, se superponen en la sístole: no hay gradiente. Con la estenosis, el ventrículo debe generar mucha más presión para empujar la sangre, y la diferencia, la zona sombreada, es el gradiente.' },
        { note: 'Los números de la severidad y la sobrevida',
          say: 'Cuando el gradiente medio llega a cuarenta milímetros de mercurio, la velocidad pico a cuatro metros por segundo y el área a un centímetro cuadrado, la estenosis es severa. Abajo, la sobrevida con cada síntoma: cinco, tres y dos años.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Ecocardiograma',
      title: 'Cómo leer el informe',
      cards: [
        { title: 'Los tres números', tag: 'Estenosis severa', kind: 'criteria', items: [
          { t: 'Velocidad pico ≥ 4 m/s', d: 'La medida más reproducible',
            say: 'Mira este ecocardiograma de una estenosis aórtica valvar: la válvula se abomba en sístole, forma un domo, y abajo el Doppler color muestra además una regurgitación. El informe da tres números. La velocidad pico del chorro, que es la más reproducible: cuatro metros por segundo o más es severa.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-23/01_estenosis-aortica-valvar-eco-domo-sistolico-y-regurgitacion__nelson_p2792.jpg', label: 'Eco: estenosis aórtica', at: 'Mira este ecocardiograma', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., p. 2792' } },
          { t: 'Gradiente medio ≥ 40 mmHg', d: 'Entre el ventrículo y la aorta',
            say: 'El gradiente medio, de cuarenta milímetros de mercurio o más.' },
          { t: 'Área valvular ≤ 1,0 cm²', d: 'Indexada < 0,6 cm²/m²',
            say: 'Y el área valvular aórtica, de un centímetro cuadrado o menos, o menos de cero coma seis indexada a la superficie corporal.' },
        ] },
        { title: 'Casos difíciles y otros exámenes', tag: 'Complementan', kind: 'key', items: [
          { t: 'Área pequeña, gradiente bajo', d: 'Eco con dobutamina o score de calcio',
            say: 'Si el área es pequeña pero el gradiente es bajo, hay dos posibilidades: una estenosis con la función del ventrículo reducida, que se aclara con un eco de estrés con dobutamina, o una estenosis paradójica con función normal, que se completa con el score de calcio por tomografía.' },
          { t: 'ECG: HVI · Rx: aorta dilatada', d: 'Coronariografía antes de operar',
            say: 'El electrocardiograma muestra hipertrofia del ventrículo izquierdo, y la radiografía suele ser normal, a veces con dilatación de la aorta ascendente. Antes de operar se estudian las coronarias. La prueba de esfuerzo está contraindicada si hay síntomas.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Severidad',
      title: 'Estratificación ecocardiográfica',
      head: ['Parámetro', 'Leve', 'Moderada', 'Severa'],
      rows: [
        { cells: ['Velocidad pico', '2,6 a 2,9 m/s', '3,0 a 3,9 m/s', '≥ 4,0 m/s'],
          say: 'Velocidad pico: leve, entre dos coma seis y dos coma nueve metros por segundo; moderada, entre tres y tres coma nueve; severa, cuatro o más.' },
        { cells: ['Gradiente medio', '< 25 mmHg', '25 a 39 mmHg', '≥ 40 mmHg'],
          say: 'Gradiente medio: leve, menos de veinticinco; moderada, entre veinticinco y treinta y nueve; severa, cuarenta o más milímetros de mercurio.' },
        { cells: ['Área valvular', '> 1,5 cm²', '1,0 a 1,5 cm²', '≤ 1,0 cm²'],
          say: 'Área valvular: leve, más de uno coma cinco centímetros cuadrados; moderada, de uno a uno coma cinco; severa, uno o menos.' },
        { cells: ['Cociente adimensional', '> 0,50', '0,25 a 0,50', '< 0,25'],
          say: 'Y el cociente adimensional: bajo cero coma veinticinco es severa. Con que cumpla uno de los criterios de severidad ya se considera una estenosis severa.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'No hay tratamiento médico que cambie la historia',
      cards: [
        { title: 'Medidas en espera', tag: 'Con cautela', kind: 'normal', items: [
          { t: 'Estatinas no frenan la progresión', d: 'IECA en dosis bajas si hay HTA',
            say: 'No existe un fármaco que modifique la historia natural. Las estatinas no frenan la progresión. Si el paciente es hipertenso, se trata con cuidado, con dosis bajas de IECA o ARA dos que suben de a poco.' },
          { t: 'Evitar deshidratación y vasodilatadores', d: 'Diuréticos con prudencia',
            say: 'Se evitan la deshidratación y los vasodilatadores potentes, y se usan los diuréticos con prudencia, porque el ventrículo rígido depende de la precarga. En la estenosis severa se evita el esfuerzo máximo. No se indica profilaxis de endocarditis en la válvula nativa.' },
        ] },
        { title: 'Reemplazo valvular', tag: 'Indicación', kind: 'alert', items: [
          { t: 'Síntomas: sin esperar', d: 'Angina, síncope o disnea',
            say: 'La indicación más fuerte de reemplazo valvular es la estenosis severa con síntomas, sin esperar.' },
          { t: 'FEVI < 50%, esfuerzo anormal', d: 'O cirugía cardíaca por otra causa',
            say: 'También se opera al asintomático con fracción de eyección menor de cincuenta por ciento, al que desarrolla síntomas o cae la presión en una prueba de esfuerzo vigilada, y al que se opera de otra cirugía cardíaca, como un by-pass. Y se considera operar al asintomático con una velocidad pico de cinco metros por segundo o más.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Qué válvula, qué vía',
      title: 'Cirugía o TAVI',
      nodes: [
        { id: 's', col: 0, row: 2, k: 'start', t: 'Estenosis severa con indicación', s: 'Equipo valvular' },
        { id: 'q', col: 1, row: 2, k: 'q', t: '¿Edad y riesgo?', s: 'Anatomía y fragilidad' },
        { id: 'a', col: 3, row: 0, k: 'good', t: 'Cirugía (SAVR)', s: 'Menor de 65-75 años, bajo riesgo' },
        { id: 't', col: 3, row: 2, k: 'alert', t: 'TAVI', s: '75-80 años o más, frágil, riesgo alto' },
        { id: 'n', col: 3, row: 4, k: 'trap', t: 'Valvuloplastía con balón', s: 'Solo puente o paliativa' },
      ],
      edges: [{ from: 's', to: 'q' }, { from: 'q', to: 'a' }, { from: 'q', to: 't' }, { from: 'q', to: 'n' }],
      steps: [
        { show: ['s', 'q'], note: 'El equipo decide la vía',
          say: 'Una vez decidida la intervención, el equipo valvular elige la vía según la edad, el riesgo quirúrgico, la fragilidad y la anatomía.' },
        { show: ['a'], note: 'Joven y bajo riesgo: cirugía',
          say: 'La cirugía de reemplazo valvular es de elección en el paciente más joven, menor de sesenta y cinco a setenta y cinco años, con bajo riesgo operatorio, o que necesita otra cirugía cardíaca. La prótesis mecánica dura más, pero exige acenocumarol de por vida. La biológica evita el anticoagulante, aunque se degenera, y se prefiere sobre los sesenta y cinco a setenta años.' },
        { show: ['t'], note: 'Mayor o frágil: TAVI',
          say: 'El implante percutáneo, el TAVI, es de elección a partir de los setenta y cinco a ochenta años, en el paciente frágil o con riesgo quirúrgico intermedio o alto, si la anatomía lo permite.' },
        { show: ['n'], note: 'El balón es solo un puente',
          say: 'La valvuloplastía con balón se reestenosa en meses, y se usa solo como puente o paliación. Ojo con la trampa: nunca es el tratamiento definitivo de la estenosis aórtica del adulto.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del soplo aórtico a la decisión de operar.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Estenosis aórtica: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Anciano con angina y soplo sistólico', 'Ecocardiograma Doppler', 'Prueba de esfuerzo o coronariografía primero'],
          say: 'Anciano con angina y un soplo sistólico: primero ecocardiograma. Pedir la prueba de esfuerzo o la coronariografía antes es el error clásico.' },
        { cells: ['Soplo eyectivo, R2 apagado, parvus et tardus', 'Estenosis aórtica', 'Miocardiopatía hipertrófica'],
          say: 'Soplo eyectivo con segundo ruido apagado y pulso parvus et tardus: estenosis aórtica. La miocardiopatía hipertrófica tiene pulso amplio y rápido.' },
        { cells: ['Menor de 65 años sin fiebre reumática', 'Válvula bicúspide', 'Degeneración senil'],
          say: 'Menor de sesenta y cinco años sin fiebre reumática: lo más probable es una válvula bicúspide, y no una degeneración senil.' },
        { cells: ['Severa con síntomas', 'Reemplazo valvular', 'Tratamiento médico y control anual'],
          say: 'Estenosis severa con síntomas: reemplazo valvular. Seguir con tratamiento médico y control anual es el error.' },
        { cells: ['Asintomático con FEVI < 50%', 'Reemplazo valvular', 'Esperar a que aparezcan síntomas'],
          say: 'Asintomático, pero con la fracción de eyección bajo cincuenta por ciento: también se opera. No se espera a los síntomas.' },
        { cells: ['Anciano frágil de 80 años', 'TAVI', 'Valvuloplastía con balón definitiva'],
          say: 'Anciano frágil de ochenta años: TAVI. La valvuloplastía con balón no es definitiva.' },
        { cells: ['Estenosis aórtica con hipertensión', 'IECA en dosis bajas, con cautela', 'Vasodilatadores y nitratos en dosis altas'],
          say: 'Estenosis aórtica con hipertensión: dosis bajas de IECA, con cautela. Los vasodilatadores potentes pueden bajar la presión y provocar un síncope.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 78 años consulta por dos episodios de síncope ocurridos al apurar el paso para cruzar la calle. PA 105/75 mmHg, pulsos carotídeos de ascenso lento y débil amplitud. Soplo sistólico rudo eyectivo IV/VI en el 2.º espacio intercostal derecho, irradiado a ambos vasos del cuello, con segundo ruido único y apagado. El ecocardiograma Doppler demuestra un área valvular aórtica de 0,7 cm², un gradiente medio de 48 mmHg y una FEVI de 60%.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Betabloqueador y control en 6 meses' },
        { letter: 'B', text: 'Prueba de esfuerzo para definir la capacidad funcional' },
        { letter: 'C', text: 'Reemplazo valvular aórtico percutáneo (TAVI) evaluado por el equipo valvular' },
        { letter: 'D', text: 'Valvuloplastía aórtica con balón como tratamiento definitivo' },
        { letter: 'E', text: 'Nitroglicerina sublingual y alta' },
      ],
      correct: 'C',
      explanation: 'Estenosis aórtica severa sintomática: síncope de esfuerzo, pulso parvus et tardus, soplo irradiado a las carótidas con R2 apagado, AVA ≤ 1,0 cm² y gradiente medio ≥ 40 mmHg. Con síntomas la indicación de reemplazo valvular es inmediata aunque la FEVI sea normal. A los 78 años, con riesgo quirúrgico intermedio o alto, la modalidad de elección es el TAVI; la cirugía es la alternativa si el riesgo es bajo. La prueba de esfuerzo está contraindicada.',
      say: {
        stem: 'Un hombre de setenta y ocho años tiene dos síncopes al apurar el paso. El pulso carotídeo es lento y débil, y hay un soplo sistólico rudo en el foco aórtico, irradiado al cuello, con el segundo ruido apagado. El ecocardiograma muestra un área de cero coma siete centímetros cuadrados, un gradiente medio de cuarenta y ocho milímetros de mercurio y una fracción de eyección de sesenta por ciento.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: betabloqueador y control; prueba de esfuerzo; reemplazo valvular percutáneo evaluado por el equipo valvular; valvuloplastía con balón definitiva; o nitroglicerina y alta. Piénsalo.',
        answer: 'Es la C. Es una estenosis aórtica severa sintomática, y con síntomas se reemplaza la válvula, aunque la fracción de eyección sea normal. A los setenta y ocho años la vía de elección es el TAVI. La B es la trampa: la prueba de esfuerzo está contraindicada en la estenosis severa sintomática. Y la D falla porque el balón es solo un puente.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 126',
      stem: 'Un paciente de 80 años presenta disnea de esfuerzo de algunos meses de evolución, progresiva. Hace 24 horas sufre un síncope, con recuperación completa. Al examen físico tiene FC: 75x’, PA: 110/70 mmHg se palpa el choque de la punta en el 4° espacio intercostal, línea medio clavicular y se ausculta el corazón con presencia de soplo protomesosistólico III/VI y segundo ruido muy apagado. El examen pulmonar no muestra alteraciones. Se solicita un electrocardiograma, que muestra un ritmo sinusal con onda S de 23 mm en V2 y onda R de 16 mm en V5.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Estenosis aórtica' },
        { letter: 'B', text: 'Estenosis mitral' },
        { letter: 'C', text: 'Insuficiencia aórtica' },
        { letter: 'D', text: 'Insuficiencia mitral' },
        { letter: 'E', text: 'Cardiopatía coronaria' },
      ],
      correct: 'A',
      explanation: 'Anciano con disnea de esfuerzo y síncope, soplo eyectivo y segundo ruido muy apagado, con hipertrofia del ventrículo izquierdo en el ECG (S de V2 más R de V5 por sobre 35 mm): estenosis aórtica clásica. La estenosis mitral da un retumbo diastólico y las insuficiencias, soplos holosistólico o diastólico.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecinueve. Un hombre de ochenta años tiene disnea de esfuerzo progresiva y, hace un día, un síncope con recuperación completa. Hay un soplo sistólico de grado tres y el segundo ruido está muy apagado. El electrocardiograma muestra una onda S de veintitrés milímetros en V dos y una R de dieciséis en V cinco.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: estenosis aórtica; estenosis mitral; insuficiencia aórtica; insuficiencia mitral; o cardiopatía coronaria. Piénsalo.',
        answer: 'Es la A. Síncope y disnea de esfuerzo en un anciano, soplo eyectivo y segundo ruido apagado, y la suma de la S de V dos con la R de V cinco, treinta y nueve milímetros, que supera los treinta y cinco: hipertrofia ventricular izquierda. La E tienta por la edad, pero la cardiopatía coronaria no explica el soplo ni el segundo ruido apagado.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 56',
      stem: 'Un paciente de 79 años presenta dolor torácico opresivo, que aparece al caminar y que cede con el reposo. Al examen físico se ausculta un soplo sistólico IV de VI, irradiado a la zona baja del cuello.',
      question: 'El examen más adecuado para proseguir con su estudio es:',
      options: [
        { letter: 'A', text: 'Prueba de esfuerzo' },
        { letter: 'B', text: 'Electrocardiograma' },
        { letter: 'C', text: 'Coronariografía' },
        { letter: 'D', text: 'AngioTAC de torax' },
        { letter: 'E', text: 'Ecocardiografía doppler' },
      ],
      correct: 'E',
      explanation: 'Un anciano con dolor opresivo de esfuerzo parece tener una angina estable, pero el soplo sistólico IV/VI irradiado al cuello hace pensar en una estenosis aórtica, y el primer examen es el ecocardiograma Doppler. La prueba de esfuerzo está contraindicada si hay una estenosis severa y la coronariografía se hace después, como estudio preoperatorio.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil quince. Un hombre de setenta y nueve años tiene dolor torácico opresivo al caminar, que cede con el reposo. Al examen, un soplo sistólico de grado cuatro, irradiado a la zona baja del cuello.',
        question: '¿Cuál es el examen más adecuado para continuar el estudio?',
        options: 'Las opciones: prueba de esfuerzo; electrocardiograma; coronariografía; angioTAC de tórax; o ecocardiografía Doppler. Piénsalo.',
        answer: 'Es la E. Parece una angina estable, pero el soplo irradiado al cuello apunta a una estenosis aórtica, y se estudia primero con ecocardiograma Doppler. La A es la trampa: la prueba de esfuerzo está contraindicada si la estenosis es severa. La coronariografía viene después, como estudio previo a la cirugía.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 101',
      stem: 'Un paciente de 20 años, con antecedente de soplo en su infancia, consulta por sensación de opresión precordial, que aparece al caminar, se asocia a disnea leve y que cede rápidamente con el reposo. Al examen físico tiene PA: 150/80 mmHg, FC: 63x’, pulso débil, regular, de ascenso lento. El examen cardíaco muestra un soplo sistólico eyectivo, paraesternal, que se irradia al cuello. Su electrocardiograma muestra signos de hipertrofia del ventrículo izquierdo.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Estenosis mitral' },
        { letter: 'B', text: 'Estenosis aórtica' },
        { letter: 'C', text: 'Insuficiencia mitral' },
        { letter: 'D', text: 'Insuficiencia aórtica' },
        { letter: 'E', text: 'Miocardiopatía hipertrófica' },
      ],
      correct: 'B',
      explanation: 'Un joven con soplo desde la infancia, angina de esfuerzo, pulso débil y de ascenso lento, soplo eyectivo que se irradia al cuello e hipertrofia ventricular tiene una estenosis aórtica, probablemente por válvula bicúspide. El pulso parvus et tardus la distingue de la miocardiopatía hipertrófica, que tiene pulso amplio y rápido.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecinueve. Un joven de veinte años, con un soplo desde la infancia, tiene opresión precordial al caminar que cede rápido con el reposo. El pulso es débil y de ascenso lento, hay un soplo sistólico eyectivo paraesternal que se irradia al cuello, y el electrocardiograma muestra hipertrofia del ventrículo izquierdo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: estenosis mitral; estenosis aórtica; insuficiencia mitral; insuficiencia aórtica; o miocardiopatía hipertrófica. Piénsalo.',
        answer: 'Es la B. Es una estenosis aórtica, probablemente por una válvula bicúspide congénita, y por eso se manifiesta tan joven. La E tienta porque también hay hipertrofia y angina, pero la miocardiopatía hipertrófica tiene un pulso amplio y rápido, no débil y de ascenso lento.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: estenosis aórtica',
      cards: [
        { title: 'Reconocer', tag: 'Semiología y eco', kind: 'key', items: [
          { t: 'Parvus et tardus, eyectivo a carótidas, R2 apagado', d: 'Tríada: angina, síncope, disnea',
            say: 'Cerremos con las reglas de oro. Pulso parvus et tardus, soplo eyectivo irradiado a las carótidas y segundo ruido apagado. Los síntomas son angina, síncope y disnea, con sobrevidas de cinco, tres y dos años.' },
          { t: 'Severa: ≥ 4 m/s, ≥ 40 mmHg, ≤ 1,0 cm²', d: 'Primero eco; esfuerzo contraindicado',
            say: 'Severa es una velocidad de cuatro metros por segundo, un gradiente de cuarenta milímetros de mercurio o un área de un centímetro cuadrado. El primer examen es el ecocardiograma.' },
        ] },
        { title: 'Tratar', tag: 'Operar a tiempo', kind: 'alert', items: [
          { t: 'Síntomas o FEVI < 50%: reemplazo', d: 'No hay tratamiento médico que cambie la historia',
            say: 'Con síntomas, o con fracción de eyección menor de cincuenta por ciento, se reemplaza la válvula. No existe tratamiento médico que cambie la historia natural.' },
          { t: 'Cirugía en joven; TAVI en ≥ 75-80 o frágil', d: 'Balón solo puente',
            say: 'Cirugía en el más joven y de bajo riesgo, TAVI en el mayor o frágil, y el balón solo como puente. Si te llevas una sola idea de hoy: en la estenosis aórtica, la aparición de síntomas obliga a operar. Nos vemos en la próxima clase, con la insuficiencia aórtica.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Estenosis aórtica: del soplo a la intervención',
    root: N('start', 'Soplo aórtico + síncope, angina o disnea', 'Adulto mayor o joven con bicúspide',
      'Un paciente con un soplo sistólico eyectivo en el foco aórtico, irradiado al cuello, y con angina, síncope o disnea de esfuerzo. Lo primero es el ecocardiograma Doppler.',
      ['Eco: leve o moderada', N('ok', 'Control', 'Eco cada tres a cinco años (leve) o uno a dos (moderada)',
        'Si es leve o moderada, se controla con ecocardiograma cada tres a cinco años en la leve y cada uno a dos años en la moderada.')],
      ['Eco: severa', N('q', 'Estenosis severa', 'Velocidad ≥ 4 · gradiente ≥ 40 · área ≤ 1,0',
        'Si es severa, la pregunta es si hay indicación de intervenir: síntomas, fracción de eyección bajo cincuenta, prueba de esfuerzo anormal o cirugía cardíaca por otra causa.',
        ['Asintomático y sin otros criterios', N('do', 'Seguimiento estrecho', 'Eco cada seis a doce meses',
          'Si no hay síntomas ni otros criterios, se hace seguimiento estrecho con ecocardiograma cada seis a doce meses y se enseña a consultar ante cualquier síntoma.')],
        ['Con indicación', N('alert', 'Reemplazo valvular', 'Equipo valvular',
          'Si hay indicación, el equipo valvular elige la vía.',
          ['Menor de 65-75 años, bajo riesgo', N('ok', 'Cirugía (SAVR)', 'Mecánica con acenocumarol o biológica',
            'En el menor de sesenta y cinco a setenta y cinco años y de bajo riesgo, se hace cirugía de reemplazo valvular.')],
          ['75-80 años o más, frágil', N('ok', 'TAVI', 'Implante percutáneo',
            'En el paciente de setenta y cinco a ochenta años o más, frágil, o con riesgo alto, se hace el implante percutáneo.')],
        )],
      )],
    ),
  },
};
