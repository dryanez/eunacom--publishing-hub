// Clase 11.3 — guion docente escrito a mano (estándar Módulo 2 · Cirugía).
// Fuente clínica: books/scripts/dataset_cirugia.cjs (cir-03).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-03',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Fisiopatología, diagnóstico tomográfico de elección, estadios de Hinchey, drenaje percutáneo, Operación de Hartmann y colonoscopía diferida',
      say: 'Bienvenidos a la tercera clase de cirugía general. Hoy estudiamos la diverticulitis aguda, la patología colónica aguda más frecuente en el adulto mayor y un motivo recurrente de consulta quirúrgica de urgencia. Denominada tradicionalmente como la apendicitis del lado izquierdo, en esta clase aprenderás a diagnosticarla mediante tomografía axial computarizada, a clasificarla con la escala de Hinchey, a definir cuándo drenar por vía percutánea y cuándo indicar la operación de Hartmann de urgencia, sin olvidar la colonoscopía diferida obligatoria. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología colónica',
      title: 'De la herniación diverticular a la peritonitis fecal',
      nodes: [
        { id: 'div', col: 0, row: 2, k: 'start', t: 'Pseudodivertículos sigmoideos', s: 'Herniación mucosa en puntos vasculares débiles · 90% sigmoides' },
        { id: 'fec', col: 1, row: 1, k: 'mech', t: 'Impactación de fecalito', s: 'Aumento de presión de segmentación y microerosión' },
        { id: 'mic', col: 2, row: 0, k: 'alert', t: 'Microperforación sellada', s: 'Inflamación de grasa pericólica · flemón local Hinchey Ia' },
        { id: 'abs', col: 2, row: 2, k: 'risk', t: 'Colección loculada o absceso', s: 'Absceso pericólico Ib o pélvico a distancia Hinchey II' },
        { id: 'pur', col: 3, row: 1, k: 'alert', t: 'Peritonitis purulenta', s: 'Ruptura de absceso a cavidad libre · Hinchey III' },
        { id: 'fec2', col: 4, row: 2, k: 'trap', t: 'Peritonitis fecaloidea libre', s: 'Perforación colónica macroscópica abierta · Hinchey IV' },
      ],
      edges: [
        { from: 'div', to: 'fec', label: 'obstrucción del cuello' },
        { from: 'fec', to: 'mic', label: 'isquemia parietal' },
        { from: 'mic', to: 'abs', label: 'loculación purulenta' },
        { from: 'abs', to: 'pur', label: 'ruptura peritoneal' },
        { from: 'fec', to: 'fec2', label: 'perforación transmural masiva' },
      ],
      steps: [
        {
          show: ['div', 'fec'],
          note: 'Origen anatómico e impactación',
          say: 'Los divertículos del colon son pseudodivertículos adquiridos formados por la herniación de la mucosa y submucosa a través de la capa muscular propia, en los puntos donde penetran las arterias rectas. Más del noventa por ciento se ubican en el colon sigmoides y descendente debido a su menor radio y mayores presiones de segmentación. La diverticulitis aguda se desencadena cuando un fecalito oclusivo se impacta en el cuello diverticular, produciendo estasis e isquemia focal.',
        },
        {
          show: ['mic'],
          note: 'Microperforación e inflamación pericólica',
          say: 'La isquemia y proliferación bacteriana producen una microperforación de la delgada pared diverticular. En la gran mayoría de los casos, esta perforación es inmediatamente sellada por la grasa pericólica del mesocolon y el epiplón, constituyendo un flemón inflamatorio localizado. Esto corresponde al estadio Hinchey uno a.',
        },
        {
          show: ['abs'],
          note: 'Formación de abscesos pericólicos o pélvicos',
          say: 'Si el proceso infeccioso no se autolimita, la microperforación acumula material purulento organizado, formando un absceso pericólico pequeño o un absceso a distancia pélvico o retroperitoneal, lo que define los estadios Hinchey uno b y Hinchey dos. Estos pacientes presentan fiebre persistente y masa palpable.',
        },
        {
          show: ['pur', 'fec2'],
          note: 'Peritonitis generalizada purulenta o fecal',
          say: 'Si el absceso se rompe hacia la cavidad peritoneal libre, se genera una peritonitis purulenta generalizada o Hinchey tres. Si existe una rotura transmural abierta no contenida que vuelca heces directamente a la cavidad abdominal, estamos ante una peritonitis fecaloidea o Hinchey cuatro, cuadros gravísimos que cursan con abdomen en tabla y shock séptico.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Patogenia y anatomía colónica',
      title: 'Pseudodivertículos y divergencia clínica: diverticulitis versus hemorragia',
      cards: [
        {
          title: 'Anatomía de los pseudodivertículos',
          kind: 'key',
          items: [
            {
              text: 'Herniación adquirida de mucosa y submucosa a través de brechas en la capa muscular circular.',
              say: 'Los divertículos colónicos son pseudodivertículos o divertículos falsos porque carecen de la túnica muscular propia. Protruyen a través de las brechas anatómicas por donde ingresan los vasos sanguíneos rectos entre las tenias cólicas.',
            },
            {
              text: 'Predominio absoluto en colon sigmoides por ley de Laplace y altas presiones intraluminales.',
              say: 'De acuerdo con la ley de Laplace, el colon sigmoides es el segmento más estrecho del colon, por lo que genera las presiones de segmentación más elevadas frente a heces duras. Por eso más del noventa por ciento de la diverticulosis se concentra en el sigmoides.',
            },
          ],
        },
        {
          title: 'Diferencia fundamental con hemorragia diverticular',
          kind: 'alert',
          items: [
            {
              text: 'La hemorragia diverticular es típicamente indolora, masiva y de colon derecho.',
              say: 'Un contraste cardinal para el examen: la hemorragia diverticular cursa con sangrado rectal masivo de instalación súbita, sin dolor abdominal ni signos inflamatorios, y predomina en divertículos del colon derecho.',
            },
            {
              text: 'La diverticulitis aguda cursa con dolor intenso, fiebre y leucocitosis sin sangrado macroscópico.',
              say: 'En cambio, la diverticulitis aguda se caracteriza por inflamación parietal exquisita en la fosa ilíaca izquierda, fiebre y leucocitosis, pero casi nunca se asocia a hemorragia digestiva masiva.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología y presentación clínica',
      title: 'Apendicitis del lado izquierdo: sospecha clínica en el adulto mayor',
      cards: [
        {
          title: 'Dolor y localización en fosa ilíaca izquierda',
          kind: 'criteria',
          items: [
            {
              text: 'Dolor constante y progresivo en fosa ilíaca izquierda o hipogastrio de varios días.',
              say: 'La presentación típica es la de un paciente adulto mayor de sesenta años que consulta por dolor constante y punzante en la fosa ilíaca izquierda o el hipogastrio, de dos a tres días de evolución. Con frecuencia se asocia a constipación pertinaz, aunque algunos pacientes debutan con diarrea por inflamación de la mucosa colónica adyacente.',
            },
            {
              text: 'Síndrome febril y síntomas digestivos asociados: anorexia, náuseas y vómitos reflejos.',
              say: 'El paciente suele referir sensación febril, decaimiento general, anorexia y náuseas. La fiebre cuantificada y la taquicardia orientan a la presencia de complicación flemosa o abscedada.',
            },
          ],
        },
        {
          title: 'Examen físico: Signos de irritación peritoneal focal',
          kind: 'alert',
          items: [
            {
              text: 'Dolor exquisito a la palpación en fosa ilíaca izquierda y signo de Blumberg positivo focal.',
              say: 'Al examen físico abdominal destaca dolor exquisito y resistencia muscular a la palpación en el cuadrante inferior izquierdo. El signo de Blumberg o rebote en fosa ilíaca izquierda es positivo, traduciendo irritación del peritoneo parietal por contigüidad inflamatoria.',
            },
            {
              text: 'Masa palpable sensible en fosa ilíaca izquierda presente en el veinte por ciento de los casos.',
              say: 'En aproximadamente un quinto de los pacientes puede palparse una masa sensible, mal delimitada y firme en la fosa ilíaca izquierda, que corresponde al sigmoides intensamente engrosado empastado con asas delgadas y epiplón mayor.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Complicaciones por contigüidad',
      title: 'Fístula colovesical y sintomatología urinaria asociada',
      cards: [
        {
          title: 'Fístula colovesical',
          kind: 'alert',
          items: [
            {
              text: 'Complicación fistulosa más común de la diverticulitis recurrente.',
              say: 'La fístula colovesical es la fístula digestiva más frecuente en la enfermedad diverticular, originada por la adherencia y erosión inflamatoria del colon sigmoides sobre la cúpula vesical. Es tres veces más común en hombres debido a la interposición del útero en mujeres.',
            },
            {
              text: 'Neumaturia y fecaluria: síntomas patognomónicos en la orina.',
              say: 'Los síntomas cardinales y patognomónicos son la neumaturia, descrita como expulsión de burbujas de gas con la orina, y la fecaluria o salida de restos fecales microscópicos o macroscópicos por la uretra, acompañada de infecciones urinarias a repetición por flora polimicrobiana entérica.',
            },
          ],
        },
        {
          title: 'Diagnóstico y manejo de la fístula',
          kind: 'key',
          items: [
            {
              text: 'Tomografía computarizada con contraste oral y endovenoso: presencia de gas en la vejiga.',
              say: 'La tomografía axial computarizada confirma el diagnóstico al evidenciar aire en el interior de la vejiga en un paciente no sondado y el engrosamiento inflamatorio en contacto con el sigmoides.',
            },
            {
              text: 'Tratamiento definitivo: resección sigmoidea electiva y cierre de la brecha vesical.',
              say: 'El manejo definitivo es quirúrgico electivo: resección del segmento colónico enfermo con anastomosis primaria y reparación simple de la pared vesical.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Estadificación de Hinchey',
      title: 'Clasificación de Hinchey modificada por Wasvary y conducta clínica',
      head: ['Estadio Hinchey', 'Hallazgos anatómicos y tomográficos', 'Severidad', 'Tratamiento de elección'],
      rows: [
        {
          cells: [
            'Hinchey 0 y Ia',
            'Hinchey 0: engrosamiento parietal sin flemón · Hinchey Ia: flemón o inflamación pericólica confinada al mesocolon',
            'Diverticulitis leve no complicada',
            'Manejo ambulatorio en seleccionados; régimen líquido, paracetamol o antibióticos orales o parenterales si hay riesgo.',
          ],
          say: 'El estadio Hinchey cero corresponde a diverticulitis leve con engrosamiento de pared sin flemón. El estadio Hinchey uno a presenta flemón pericólico confinado al mesocolon. Ambos constituyen diverticulitis no complicada. En pacientes jóvenes, estables y sin comorbilidades se manejan de forma ambulatoria con dieta líquida y analgesia; en ancianos o pacientes frágiles se hospitaliza con antibióticos endovenosos.',
        },
        {
          cells: [
            'Hinchey Ib y II',
            'Hinchey Ib: absceso pericólico o mesocólico pequeño menor a tres o cuatro centímetros · Hinchey II: absceso a distancia pélvico o retroperitoneal mayor o igual a cuatro centímetros',
            'Diverticulitis complicada con absceso',
            'Hinchey Ib: antibióticos endovenosos · Hinchey II: drenaje percutáneo guiado por tomografía más antibióticos endovenosos.',
          ],
          say: 'El estadio Hinchey uno b es un absceso pericólico pequeño menor a tres o cuatro centímetros, que se trata con hospitalización y antibióticos endovenosos, resolviendo en más del ochenta por ciento sin punción. En cambio, el estadio Hinchey dos es un absceso a distancia pélvico o retroperitoneal habitualmente mayor a cuatro centímetros, cuyo tratamiento de elección es el drenaje percutáneo guiado por tomografía más antibióticos endovenosos.',
        },
        {
          cells: [
            'Hinchey III y IV',
            'Hinchey III: peritonitis purulenta generalizada sin heces libres · Hinchey IV: peritonitis fecaloidea generalizada con orificio colónico abierto',
            'Diverticulitis complicada con peritonitis difusa',
            'Cirugía de urgencia inmediata: Operación de Hartmann con sigmoidectomía y colostomía terminal.',
          ],
          say: 'Los estadios Hinchey tres y cuatro representan peritonitis generalizada purulenta y fecaloidea respectivamente. Son urgencias quirúrgicas críticas con indicación absoluta de laparotomía exploradora de urgencia. La técnica estándar salvadora es la operación de Hartmann: resección del sigmoides perforado, cierre del muñón rectal y colostomía terminal en fosa ilíaca izquierda.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico tomográfico',
      title: 'Tomografía axial computarizada de abdomen y pelvis de elección',
      cards: [
        {
          title: 'Estándar de oro indiscutido en la fase aguda',
          kind: 'key',
          items: [
            {
              text: 'Tomografía computarizada con contraste intravenoso: sensibilidad del noventa y cinco por ciento.',
              say: 'La tomografía axial computarizada de abdomen y pelvis con contraste endovenoso es el examen de elección indiscutido en la fase aguda. Permite confirmar el diagnóstico, estadificar con exactitud según la escala de Hinchey y planificar si se requiere drenaje percutáneo o cirugía.',
            },
            {
              text: 'Signos tomográficos: engrosamiento parietal mayor a cuatro milímetros y estriación grasa pericólica.',
              say: 'Los hallazgos tomográficos característicos incluyen: divertículos en colon sigmoides, engrosamiento concéntrico de la pared colónica mayor a cuatro milímetros, estriación de la grasa pericólica adyacente, presencia de colecciones purulentas loculadas y burbujas de gas extraluminal.',
            },
          ],
        },
        {
          title: 'Rol de la ecografía abdominal',
          kind: 'criteria',
          items: [
            {
              text: 'Utilidad como examen de tamizaje inicial cuando no se dispone de tomografía inmediata.',
              say: 'Aunque la ecografía puede detectar engrosamiento parietal y dolor focal bajo el transductor, tiene menor sensibilidad en presencia de abundante gas intestinal y no delimita con precisión la profundidad de los abscesos retroperitoneales.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Seguridad clínica',
      title: 'Exámenes contraindicados en fase aguda: Colonoscopía y enema baritado',
      cards: [
        {
          title: 'Colonoscopía prohibida en la fase aguda',
          kind: 'alert',
          items: [
            {
              text: 'La colonoscopía está estrictamente contraindicada durante el episodio agudo.',
              say: 'Una de las preguntas más clásicas y sancionadas del EUNACOM: la colonoscopía está formalmente contraindicada en la fase aguda de diverticulitis. La insuflación de aire endoscópica sobre una pared colónica isquémica y friable transforma una microperforación sellada en una perforación libre a cavidad peritoneal.',
            },
            {
              text: 'Riesgo de perforación iatrogénica y peritonitis fecal catastrófica.',
              say: 'Insuflar aire a presión puede desprender el epiplón bloqueador y provocar peritonitis fecal aguda que requiere cirugía de urgencia con colostomía.',
            },
          ],
        },
        {
          title: 'Enema baritado formalmente proscrito',
          kind: 'alert',
          items: [
            {
              text: 'El enema con bario produce peritonitis química grave por extravasación.',
              say: 'El enema con bario está proscrito en abdomen agudo. La extravasación del sulfato de bario al peritoneo desencadena una peritonitis química gravísima con granulomas por cuerpo extraño, adherencias masivas y una mortalidad superior al cincuenta por ciento.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Seguimiento oncológico obligatorio',
      title: 'Colonoscopía diferida a las seis a ocho semanas',
      cards: [
        {
          title: 'Momento de realización: seis a ocho semanas',
          kind: 'key',
          items: [
            {
              text: 'Colonoscopía completa una vez resuelto en su totalidad el cuadro inflamatorio agudo.',
              say: 'Una vez superado el cuadro agudo, cuando han transcurrido seis a ocho semanas y la inflamación de la pared colónica ha desaparecido, es mandatorio realizar una colonoscopía completa de control.',
            },
            {
              text: 'Objetivo imperativo: descartar adenocarcinoma de colon enmascarado.',
              say: 'El objetivo crítico de esta colonoscopía es descartar un cáncer colorrectal perforado o estenosante. Entre un tres y cinco por ciento de los cuadros catalogados inicialmente como diverticulitis complicada corresponden en realidad a un adenocarcinoma de colon que se perforó.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de decisión clínica',
      title: 'Enfrentamiento y conducta escalonada en diverticulitis aguda',
      say: 'Revisemos el árbol de decisión terapéutica ante un paciente con sospecha de diverticulitis aguda según su estadio tomográfico de Hinchey.',
    },

    {
      type: 'points',
      kicker: 'Manejo médico escalonado',
      title: 'Manejo ambulatorio versus hospitalización y antibióticos',
      cards: [
        {
          title: 'Manejo ambulatorio en Hinchey 0 e Ia seleccionados',
          kind: 'key',
          items: [
            {
              text: 'Paciente joven, afebril, con tolerancia oral conservada y buen soporte familiar.',
              say: 'En diverticulitis no complicada Hinchey cero o uno a en pacientes previamente sanos, afebriles, con dolor leve y buena tolerancia oral, es posible el manejo ambulatorio con régimen líquido, reposo relativo y analgesia con paracetamol.',
            },
          ],
        },
        {
          title: 'Criterios de hospitalización obligada',
          kind: 'alert',
          items: [
            {
              text: 'Fiebre alta, intolerancia a la vía oral, leucocitosis mayor a quince mil o inmunodepresión.',
              say: 'La hospitalización es imperativa ante fiebre superior a treinta y ocho coma cinco grados, vómitos con intolerancia oral, leucocitosis marcada, edad avanzada, comorbilidades severas o pacientes inmunodeprimidos.',
            },
            {
              text: 'Esquema parenteral: Ceftriaxona un gramo cada veinticuatro horas más Metronidazol quinientos miligramos cada ocho horas.',
              say: 'En el paciente hospitalizado iniciamos régimen cero, hidratación endovenosa y cobertura antibiótica que abarque bacilos gramnegativos entéricos y anaerobios como Bacteroides fragilis, utilizando Ceftriaxona más Metronidazol endovenosos.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Terapia intervencional',
      title: 'Drenaje percutáneo guiado por tomografía en Hinchey II',
      cards: [
        {
          title: 'Indicación de drenaje percutáneo',
          kind: 'key',
          items: [
            {
              text: 'Tratamiento de elección para abscesos pélvicos o retroperitoneales mayores o iguales a cuatro centímetros.',
              say: 'En el estadio Hinchey dos, ante un absceso a distancia pélvico o retroperitoneal de cuatro centímetros o más accesible por punción, la conducta de elección es el drenaje percutáneo guiado por tomografía o ecografía con un catéter tipo cola de cerdo.',
            },
            {
              text: 'Evita la colostomía de urgencia y permite resección electiva con anastomosis primaria.',
              say: 'El drenaje percutáneo evacúa el foco purulento sin necesidad de abrir el abdomen. Esto revierte el cuadro séptico y permite programar semanas después una sigmoidectomía electiva con anastomosis primaria, evitando al paciente una colostomía.',
            },
          ],
        },
        {
          title: 'Falla del drenaje o abscesos no accesibles',
          kind: 'alert',
          items: [
            {
              text: 'Si el absceso no es accesible o el paciente no mejora en cuarenta y ocho horas, se indica cirugía.',
              say: 'Si el absceso es inaccesible por estar rodeado de asas delgadas o si no hay mejoría clínica tras cuarenta y ocho horas de drenaje percutáneo, se debe proceder a laparotomía exploradora de urgencia.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo quirúrgico de urgencia',
      title: 'Operación de Hartmann en peritonitis purulenta y fecaloidea',
      cards: [
        {
          title: 'Indicación imperativa en Hinchey III y IV',
          kind: 'alert',
          items: [
            {
              text: 'Peritonitis generalizada purulenta o fecaloidea con inestabilidad hemodinámica.',
              say: 'La cirugía de urgencia es inmediata ante peritonitis generalizada libre, shock séptico persistente o perforación colónica masiva con heces en cavidad.',
            },
            {
              text: 'La técnica estándar tradicional de urgencia es la Operación de Hartmann.',
              say: 'La operación de Hartmann sigue siendo el procedimiento más seguro y estándar en el paciente séptico inestable con peritonitis fecal.',
            },
          ],
        },
        {
          title: 'Tiempos quirúrgicos de la técnica de Hartmann',
          kind: 'key',
          items: [
            {
              text: 'Resección del segmento sigmoideo perforado y lavado peritoneal profuso.',
              say: 'El primer paso es la sigmoidectomía: se extirpa el segmento de colon sigmoides perforado y gangrenoso, y se realiza un lavado profuso de la cavidad abdominal con abundante suero tibio.',
            },
            {
              text: 'Cierre ciego del muñón rectal y colostomía terminal en fosa ilíaca izquierda.',
              say: 'El segundo paso es cerrar el muñón rectal en fondo de saco ciego dentro de la pelvis menor, y el tercer paso es exteriorizar el colon descendente sano como una colostomía terminal definitiva en la fosa ilíaca izquierda. El tránsito puede reconstruirse electivamente tres a seis meses más tarde.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnósticos diferenciales y trampas',
      title: 'Trampas del EUNACOM en dolor en fosa ilíaca izquierda',
      head: ['Entidad clínica', 'Contexto y presentación típica', 'Elemento clave de diferenciación', 'Conducta correcta'],
      rows: [
        {
          cells: [
            'Cáncer de colon izquierdo perforado',
            'Paciente añoso con baja de peso, anemia ferropénica previa y cuadro obstructivo o perforativo',
            'Tomografía muestra masa asimétrica o invasión de órganos vecinos; a menudo indistinguible de diverticulitis',
            'Tratar la fase aguda y realizar colonoscopía obligatoria a las seis a ocho semanas para descartar neoplasia.',
          ],
          say: 'El cáncer de colon izquierdo perforado o necrosado simula con precisión una diverticulitis aguda. Por esta razón, todo paciente que se recupera de un episodio agudo debe ir a colonoscopía completa diferida a las seis a ocho semanas para biopsiar cualquier neoplasia oculta.',
        },
        {
          cells: [
            'Colitis isquémica aguda',
            'Adulto mayor con antecedente vascular o episodio previo de hipotensión arterial o shock',
            'Dolor abdominal cólico difuso seguido rápidamente de diarrea sanguinolenta franca o rectorragia',
            'Tomografía con engrosamiento parietal en territorio de vasos mesentéricos inferiores y colonoscopía precoz con biopsia.',
          ],
          say: 'La colitis isquémica cursa con dolor abdominal seguido rápidamente de diarrea sanguinolenta profusa tras un episodio de hipotensión o arritmia. Afecta zonas limítrofes de flujo como el ángulo esplénico y la unión rectosigmoidea.',
        },
        {
          cells: [
            'Patología ginecológica izquierda',
            'Mujer joven con dolor pélvico agudo irradiado a fosa ilíaca izquierda',
            'Torsión anexial, embarazo ectópico tubario izquierdo o enfermedad inflamatoria pélvica',
            'Prueba de embarazo en sangre o test de orina y ecografía ginecológica transvaginal mandatoria.',
          ],
          say: 'En mujeres en edad fértil con dolor en fosa ilíaca izquierda debemos descartar torsión ovárica izquierda, embarazo ectópico tubario o piosálpinx mediante subunidad beta de gonadotrofina coriónica y ecografía transvaginal.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 19',
      caseText: 'Un paciente de sesenta y ocho años, con antecedente de diabetes e hipertensión en tratamiento con metformina, glibenclamida y enalapril, consulta por dolor abdominal de veinticuatro horas de evolución, localizado en el hipogastrio y la fosa ilíaca izquierda, asociado a sensación de malestar general. Al examen físico presenta temperatura de treinta y siete coma ocho grados Celsius, presión arterial de cien con sesenta, frecuencia cardíaca de ochenta y ocho por minuto, abdomen doloroso a la palpación superficial y profunda, mayor en la zona descrita, con signos peritoneales localizados en dicha área y disminución de los ruidos hidroaéreos. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Infarto epiploico apendicular', isCorrect: false },
        { letter: 'B', text: 'Embolia mesentérica', isCorrect: false },
        { letter: 'C', text: 'Vólvulo de sigmoides', isCorrect: false },
        { letter: 'D', text: 'Obstrucción intestinal', isCorrect: false },
        { letter: 'E', text: 'Diverticulitis aguda', isCorrect: true },
      ],
      correct: 'E',
      say: {
        stem: 'Revisemos esta pregunta real de agosto de dos mil veintiuno. Un hombre de sesenta y ocho años con diabetes e hipertensión consulta por dolor de veinticuatro horas en hipogastrio y fosa ilíaca izquierda, con febrícula de treinta y siete coma ocho grados y signos peritoneales focales con disminución de ruidos hidroaéreos.',
        question: 'Nos consultan por el diagnóstico más probable entre las opciones.',
        options: 'Las alternativas son: opción A, infarto epiploico apendicular; opción B, embolia mesentérica; opción C, vólvulo de sigmoides; opción D, obstrucción intestinal; y opción E, diverticulitis aguda. Piénsalo.',
        answer: 'La respuesta correcta es la opción E, diverticulitis aguda. El cuadro clínico de dolor localizado en la fosa ilíaca izquierda, febrícula y peritonitis focal en un paciente adulto mayor configura la presentación clásica de apendicitis del lado izquierdo o diverticulitis aguda. El examen de confirmación de elección es la tomografía de abdomen y pelvis con contraste.',
      },
    },

    {
      type: 'points',
      kicker: 'Conceptos clave para el EUNACOM',
      title: 'Reglas de oro en diverticulitis aguda',
      cards: [
        {
          title: 'Cuatro certezas clínicas',
          kind: 'key',
          items: [
            {
              text: 'La tomografía con contraste es el estándar de oro confirmatorio.',
              say: 'Primera regla: la tomografía axial computarizada de abdomen y pelvis con contraste endovenoso es el examen de elección indiscutido para confirmar y clasificar en estadios de Hinchey.',
            },
            {
              text: 'Colonoscopía y enema de bario formalmente prohibidos en fase aguda.',
              say: 'Segunda regla: la colonoscopía y el enema baritado están estrictamente contraindicados durante el episodio agudo por el riesgo inminente de provocar una perforación colónica libre con peritonitis.',
            },
            {
              text: 'Abscesos mayores o iguales a cuatro centímetros se drenan por vía percutánea.',
              say: 'Tercera regla: los abscesos Hinchey dos de cuatro centímetros o más se tratan de elección con drenaje percutáneo guiado por tomografía más antibióticos endovenosos.',
            },
            {
              text: 'Peritonitis generalizada Hinchey III y IV requiere Operación de Hartmann.',
              say: 'Cuarta regla: la peritonitis purulenta o fecaloidea generalizada exige laparotomía de urgencia con sigmoidectomía, cierre de muñón rectal y colostomía terminal según la técnica de Hartmann.',
            },
          ],
        },
        {
          title: 'Idea final',
          kind: 'normal',
          items: [
            {
              text: 'Colonoscopía diferida a las seis a ocho semanas para descartar neoplasia colónica.',
              say: 'Si te llevas una sola idea de hoy: todo paciente que supera una diverticulitis aguda debe someterse a una colonoscopía completa diferida a las seis a ocho semanas para descartar un adenocarcinoma de colon enmascarado. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Decisión Clínica en Sospecha de Diverticulitis Aguda',
    root: N(
      'start',
      'Sospecha clínica de diverticulitis aguda',
      'Dolor en fosa ilíaca izquierda · fiebre · Blumberg local en adulto mayor',
      'Iniciamos el enfrentamiento solicitando de inmediato una tomografía computarizada de abdomen y pelvis con contraste intravenoso.',
      [
        'Hinchey 0 o Ia: No complicada',
        N(
          'q',
          'Diverticulitis no complicada (flemón pericólico)',
          'Engrosamiento parietal < 4 mm o flemón confinado al mesocolon',
          'Evaluamos el estado clínico general, tolerancia oral y comorbilidades del paciente.',
          [
            'Estable, joven, afebril, tolera vía oral',
            N(
              'ok',
              'Manejo médico ambulatorio',
              'Régimen líquido, reposo relativo y analgesia con paracetamol',
              'En pacientes seleccionados con bajo riesgo, indicamos manejo ambulatorio con control clínico en cuarenta y ocho horas.',
            ),
          ],
          [
            'Anciano, comórbido, intolerancia oral o fiebre alta',
            N(
              'do',
              'Hospitalización y antibióticos endovenosos',
              'Régimen cero · Ceftriaxona 1 g EV + Metronidazol 500 mg EV',
              'Hospitalizamos con reposo digestivo y cobertura parenteral para enterobacterias y anaerobios por siete días.',
            ),
          ],
        ),
      ],
      [
        'Hinchey Ib o II: Complicada con absceso',
        N(
          'q',
          'Presencia de absceso en la tomografía computarizada',
          'Tamaño de la colección purulenta loculada',
          'Determinamos el diámetro del absceso y su localización anatómica.',
          [
            'Absceso pequeño < 4 cm (Hinchey Ib)',
            N(
              'do',
              'Hospitalización y antibioterapia parenteral',
              'Ceftriaxona + Metronidazol endovenoso por 10 a 14 días',
              'Los abscesos menores a cuatro centímetros responden muy bien al tratamiento antibiótico exclusivo sin necesidad de punción.',
            ),
          ],
          [
            'Absceso pélvico ≥ 4 cm (Hinchey II)',
            N(
              'do',
              'Drenaje percutáneo guiado por TAC',
              'Punción y catéter de drenaje percutáneo + antibióticos EV',
              'En colecciones mayores o iguales a cuatro centímetros, la conducta de elección es el drenaje percutáneo guiado por imágenes.',
            ),
          ],
        ),
      ],
      [
        'Hinchey III o IV: Peritonitis difusa o shock',
        N(
          'alert',
          'Peritonitis generalizada purulenta o fecaloidea',
          'Abdomen en tabla · neumoperitoneo masivo · inestabilidad hemodinámica',
          'Frente a signos de peritonitis libre o shock séptico, indicamos cirugía de urgencia inmediata.',
          [
            'Laparotomía exploradora de urgencia',
            N(
              'do',
              'Operación de Hartmann de urgencia',
              'Sigmoidectomía + cierre de muñón rectal + colostomía terminal en FII',
              'Realizamos la operación de Hartmann: extirpación del sigmoides enfermo, cierre de muñón rectal y colostomía terminal.',
            ),
          ],
        ),
      ],
    ),
  },
};
