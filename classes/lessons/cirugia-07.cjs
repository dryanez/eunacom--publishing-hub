// Clase 11.7 — guion docente escrito a mano (estándar Módulo 2 · Cirugía).
// Fuente clínica: books/scripts/dataset_cirugia.cjs (cir-07).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-07',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Fisura anal, Tríada de Brodie, grados de hemorroides internas, trombosis externa, drenaje de abscesos y Regla de Goodsall',
      say: 'Bienvenidos a la séptima clase de cirugía general. Hoy abordamos la patología orificial benigna, un grupo de afecciones anorrectales extraordinariamente frecuentes en la práctica ambulatoria y en el EUNACOM. En esta sesión aprenderás a diferenciar con exactitud la fisura anal del sangrado hemorroidal indoloro, a indicar la trombectomía en la trombosis externa dentro de las primeras setenta y dos horas, y a recordar que todo absceso anorrectal se drena de inmediato sin esperar fluctuación. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico diferencial cardinal',
      title: 'Orientación semiológica de la patología anorrectal',
      nodes: [
        { id: 'mot', col: 0, row: 2, k: 'start', t: 'Motivo de consulta anal', s: 'Dolor defecatorio vs sangrado vs aumento de volumen' },
        { id: 'fis', col: 1, row: 0, k: 'alert', t: 'Fisura Anal Aguda / Crónica', s: 'Dolor punzante como cristales rotos · 90% posterior' },
        { id: 'hmi', col: 1, row: 2, k: 'mech', t: 'Hemorroides Internas', s: 'Sangrado rojo rutilante indoloro en gotas · prolapso' },
        { id: 'hme', col: 1, row: 3, k: 'trap', t: 'Hemorroides Externas Trombosadas', s: 'Nódulo violáceo agudo doloroso bajo la línea dentada' },
        { id: 'abs', col: 1, row: 4, k: 'alert', t: 'Absceso Anorrectal Criptoglandular', s: 'Masa eritematosa pulsátil · DRENAJE INMEDIATO' },
        { id: 'eli', col: 2, row: 0, k: 'good', t: 'Diltiazem o Esfinterotomía', s: 'Tratamiento médico escalonado vs cirugía ELI' },
        { id: 'ban', col: 2, row: 2, k: 'good', t: 'Bandas vs Hemorroidectomía', s: 'Ligadura elástica en I y II · cirugía en III y IV' },
        { id: 'tro', col: 2, row: 3, k: 'good', t: 'Trombectomía bajo anestesia local', s: 'Ventana de oportunidad menor a 72 horas' },
        { id: 'fis2', col: 2, row: 4, k: 'good', t: 'Fístula Anal y Regla de Goodsall', s: 'Fase crónica · orificio externo e interno' },
      ],
      edges: [
        { from: 'mot', to: 'fis', label: 'dolor con la defecación' },
        { from: 'mot', to: 'hmi', label: 'rectorragia indolora' },
        { from: 'mot', to: 'hme', label: 'nódulo súbito doloroso' },
        { from: 'mot', to: 'abs', label: 'dolor continuo y fiebre' },
        { from: 'fis', to: 'eli' },
        { from: 'hmi', to: 'ban' },
        { from: 'hme', to: 'tro' },
        { from: 'abs', to: 'fis2', label: 'secuela comunicante' },
      ],
      steps: [
        {
          show: ['mot', 'fis'],
          note: 'Fisura anal y dolor defecatorio',
          say: 'La semiología orificial es muy precisa. Si el paciente consulta por un dolor anal lacerante e insoportable que se inicia durante la defecación y persiste durante horas como una quemadura de cristales rotos, el diagnóstico es fisura anal en más del noventa por ciento de los casos. Ocurre predominantemente en la línea media posterior debido a una zona de hipoperfusión isquémica del anodermo.',
        },
        {
          show: ['hmi'],
          note: 'Hemorroides internas y rectorragia indolora',
          say: 'Si el motivo de consulta es la emisión de sangre roja rutilante fresca que gotea en la taza al final de la deposición o mancha el papel higiénico, completamente indolora, estamos ante hemorroides internas. Al originarse por encima de la línea dentada, carecen de inervación somática dolorosa. Su tratamiento depende del grado de prolapso.',
        },
        {
          show: ['hme', 'tro'],
          note: 'Trombosis hemorroidal externa',
          say: 'Si el paciente presenta un nódulo anal violáceo, indurado y sumamente doloroso de inicio súbito tras un esfuerzo físico o pujo intenso, se trata de una trombosis hemorroidal externa. Al estar cubierta por anodermo ricamente inervado, duele intensamente. Si consulta en las primeras setenta y dos horas, la conducta de elección es la trombectomía bajo anestesia local.',
        },
        {
          show: ['abs', 'fis2'],
          note: 'Abscesos y fístulas criptoglandulares',
          say: 'El dolor continuo, pulsátil, con masa perianal tumefacta, calor local y fiebre corresponde a un absceso anorrectal por infección de las criptas anales. La regla absoluta es drenarlo de inmediato sin esperar fluctuación. Tras el drenaje, entre un treinta y cincuenta por ciento evolucionará hacia una fístula anal crónica, cuyo trayecto se rige por la regla de Goodsall.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Fisura anal clásica',
      title: 'Fisura anal: Cuadro clínico, Tríada de Brodie y tratamiento escalonado',
      cards: [
        {
          title: 'Cuadro clínico y Tríada de Brodie',
          kind: 'criteria',
          items: [
            {
              text: 'Desgarro longitudinal del anodermo; noventa por ciento en línea media posterior.',
              say: 'La fisura anal es un desgarro del epitelio escamoso por debajo de la línea dentada. El dolor espasmódico desencadena una hipertonía refleja del esfínter anal interno, lo que mantiene la isquemia e impide la cicatrización espontánea.',
            },
            {
              text: 'Tríada de Brodie en fisura crónica: papila hipertrófica, úlcera y pliegue centinela.',
              say: 'Cuando la fisura lleva más de seis a ocho semanas se considera crónica y desarrolla la tríada de Brodie: en el vértice proximal una papila anal hipertrófica; en el centro la úlcera con fibras blanquecinas circulares del esfínter interno visibles; y en el extremo distal un colgajo cutáneo o pliegue centinela.',
            },
          ],
        },
        {
          title: 'Tratamiento médico escalonado de primera línea',
          kind: 'pharma',
          items: [
            {
              text: 'Aporte de fibra, abundantes líquidos y baños de asiento tibios tres veces al día.',
              say: 'El tratamiento inicial es conservador con dieta rica en fibra, ingesta de dos litros diarios de agua y baños de asiento tibios durante diez a quince minutos tras defecar. El calor local relaja el esfínter anal interno y alivia el dolor.',
            },
            {
              text: 'Bloqueadores de canales de calcio tópicos: Diltiazem al dos por ciento en crema.',
              say: 'La esfinterotomía química tópica de primera línea es el gel o pomada de Diltiazem al dos por ciento aplicado en el margen anal cada doce horas por seis a ocho semanas. Produce vasodilatación y relajación del esfínter interno, logrando la curación en más del setenta a ochenta por ciento sin causar cefalea intensa como la nitroglicerina.',
            },
          ],
        },
        {
          title: 'Tratamiento quirúrgico de segunda línea',
          kind: 'key',
          items: [
            {
              text: 'Esfinterotomía Lateral Interna: estándar de oro para fisura anal crónica refractaria.',
              say: 'Ante fracaso del tratamiento médico tras ocho semanas, el estándar quirúrgico es la esfinterotomía lateral interna. Consiste en la sección controlada del tercio inferior del esfínter interno, curando más del noventa y cinco por ciento de los casos con mínimo riesgo de incontinencia a gases.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Clasificación de Goligher',
      title: 'Clasificación y manejo de las hemorroides internas',
      head: ['Grado clínico', 'Definición según prolapso mucoso', 'Síntoma predominante', 'Tratamiento de elección'],
      rows: [
        {
          cells: [
            'Grado I',
            'Almohadillas aumentadas de tamaño que sangran pero no prolapsan por fuera del canal anal.',
            'Rectorragia roja rutilante indolora al defecar.',
            'Manejo médico con fibra, agua, evitar el pujo y flebotónicos orales.',
          ],
          say: 'Las hemorroides Grado uno sangran pero no descienden a través del orificio anal. Se manejan con medidas higiénico-dietéticas, abundante fibra y laxantes formadores de volumen para evitar el esfuerzo evacuatorio.',
        },
        {
          cells: [
            'Grado II',
            'Prolapsan por fuera del margen anal al pujar pero se reducen espontáneamente.',
            'Rectorragia y sensación de humedad o ensuciamiento perianal.',
            'Ligadura con bandas elásticas en policlínico como procedimiento de elección.',
          ],
          say: 'Las hemorroides Grado dos prolapsan con la evacuación pero regresan solas al canal anal. El procedimiento ambulatorio de elección es la ligadura con bandas elásticas en la consulta, que estrangula la mucosa redundante por encima de la línea dentada sin dolor.',
        },
        {
          cells: [
            'Grado III y IV',
            'Grado III: prolapsan y requieren reducción manual digital · Grado IV: prolapso permanente irreductible.',
            'Masa prolapsada, dolor por atascamiento mucoso e higiene deficiente.',
            'Tratamiento quirúrgico: Hemorroidectomía convencional abierta o cerrada.',
          ],
          say: 'En el Grado tres el paciente debe reintroducir manualmente el paquete hemorroidal; en el Grado cuatro el prolapso es crónico e irreductible. Ambos grados tienen indicación quirúrgica formal mediante hemorroidectomía resectiva excisional, como las técnicas de Milligan y Morgan o Ferguson.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de patología anal',
      title: 'Enfrentamiento y conducta en patología orificial benigna',
      say: 'Revisemos el algoritmo clínico para abordar el dolor anal, el sangrado y las masas perianales en la urgencia y en el policlínico.',
    },

    {
      type: 'points',
      kicker: 'Urgencias y abscesos anorrectales',
      title: 'Trombosis hemorroidal externa, abscesos y Regla de Goodsall',
      cards: [
        {
          title: 'Trombosis hemorroidal externa',
          kind: 'alert',
          items: [
            {
              text: 'Nódulo doloroso violáceo e irreductible bajo la línea pectínea de aparición súbita.',
              say: 'La trombosis hemorroidal externa se produce por la coagulación de la sangre en el plexo subcutáneo externo. Si el paciente consulta dentro de las primeras setenta y dos horas, la conducta es realizar trombectomía bajo anestesia local, lo que alivia el dolor en forma inmediata.',
            },
            {
              text: 'Si consulta después de setenta y dos horas: manejo médico conservador.',
              say: 'Si el paciente consulta después de tres días, el dolor espontáneo ya comenzó a disminuir y el trombo se encuentra en fase de reabsorción y fibrosis; la cirugía ya no aporta beneficio y se indica manejo médico conservador con analgesia y baños de asiento tibios.',
            },
          ],
        },
        {
          title: 'Abscesos anorrectales: Regla de oro',
          kind: 'criteria',
          items: [
            {
              text: 'Todo absceso anorrectal se drena quirúrgicamente de inmediato sin esperar fluctuación.',
              say: 'Un principio categórico del EUNACOM: todo absceso perianal o isquiorrectal tiene indicación de drenaje quirúrgico de urgencia inmediato. No se debe esperar a que fluctúe ni tratar exclusivamente con antibióticos, ya que la demora propaga la infección hacia las fosas isquiorrectales y eleva el riesgo de fascitis necrotizante de Fournier.',
            },
          ],
        },
        {
          title: 'Fístulas anorrectales y Regla de Goodsall',
          kind: 'key',
          items: [
            {
              text: 'Regla de Goodsall: predice el orificio interno según la ubicación del orificio externo.',
              say: 'Si el orificio fistuloso externo se ubica por delante de una línea transversal imaginaria que cruza el ano, el trayecto es recto y radial hacia la cripta correspondiente. Si el orificio externo se ubica por detrás de la línea, el trayecto es curvo y converge en la línea media posterior.',
            },
          ],
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 27',
      caseText: 'Paciente de cincuenta y dos años con hemorroides externas trombosadas desde hace seis horas, violáceas, protruidas, irreducibles y muy dolorosas. ¿Cuál es el manejo más adecuado?',
      question: '¿Cuál es el manejo más adecuado?',
      options: [
        { letter: 'A', text: 'Hemorroidectomía de urgencia en pabellón central', isCorrect: false },
        { letter: 'B', text: 'Trombectomía hemorroidal bajo anestesia local', isCorrect: true },
        { letter: 'C', text: 'Ligadura con banda elástica ambulatoria', isCorrect: false },
        { letter: 'D', text: 'Manejo médico conservador con analgesia y baños de asiento', isCorrect: false },
        { letter: 'E', text: 'Escleroterapia con sustancias químicas', isCorrect: false },
      ],
      correct: 'B',
      say: {
        stem: 'Revisemos esta pregunta real de julio de dos mil veinticinco. Un paciente de cincuenta y dos años consulta a las seis horas de evolución por un nódulo hemorroidal externo trombosado, violáceo y muy doloroso.',
        question: 'Nos consultan por el manejo más adecuado.',
        options: 'Las alternativas son: opción A, hemorroidectomía de urgencia; opción B, trombectomía hemorroidal bajo anestesia local; opción C, ligadura con banda elástica; opción D, manejo médico conservador; y opción E, escleroterapia. Piénsalo.',
        answer: 'La respuesta correcta es la opción B, trombectomía hemorroidal bajo anestesia local. En las primeras setenta y dos horas desde el inicio de los síntomas, la escisión elíptica o enucleación del coágulo bajo anestesia local proporciona un alivio sintomático inmediato y definitivo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      caseText: 'Un hombre de treinta y cuatro años, con antecedentes de constipación crónica, consulta por dolor anal punzante de alta intensidad, que compara con el corte de un vidrio, desencadenado inmediatamente durante cada defecación y que persiste con ardor durante tres horas. Refiere además manchado escaso con sangre roja fresca en el papel higiénico. A la inspección anal suave en posición genupectoral se aprecia en la línea media posterior una úlcera longitudinal profunda y un pequeño pliegue cutáneo engrosado en el margen anal. ¿Cuál es el tratamiento médico de primera línea más adecuado?',
      question: '¿Cuál es el tratamiento médico de primera línea más adecuado?',
      options: [
        { letter: 'A', text: 'Esfinterotomía lateral interna inmediata', isCorrect: false },
        { letter: 'B', text: 'Corticoides tópicos en crema por tres meses', isCorrect: false },
        { letter: 'C', text: 'Dieta rica en fibra, abundante agua, baños de asiento tibios y Diltiazem al dos por ciento tópico', isCorrect: true },
        { letter: 'D', text: 'Cauterización con nitrato de plata de la lesión', isCorrect: false },
        { letter: 'E', text: 'Antibioticoterapia oral con ciprofloxacino y metronidazol', isCorrect: false },
      ],
      correct: 'C',
      say: {
        stem: 'Analicemos este caso representativo de fisura anal crónica con pliegue centinela en la línea media posterior y dolor lancinante con la defecación.',
        question: 'Se pregunta cuál es el tratamiento médico de primera línea más adecuado.',
        options: 'Las opciones son: opción A, esfinterotomía lateral interna; opción B, corticoides tópicos por tres meses; opción C, dieta rica en fibra, agua, baños de asiento tibios y diltiazem al dos por ciento tópico; opción D, nitrato de plata; y opción E, antibióticos orales. Piénsalo.',
        answer: 'La respuesta correcta es la opción C. El manejo de primera línea de la fisura anal es siempre médico conservador: regularizar el tránsito con fibra y agua, baños de asiento tibios para relajar el esfínter y bloqueadores de canales de calcio tópicos como diltiazem al dos por ciento durante seis a ocho semanas. La cirugía se reserva para casos crónicos refractarios.',
      },
    },

    {
      type: 'points',
      kicker: 'Conceptos clave para el EUNACOM',
      title: 'Reglas de oro en patología orificial benigna',
      cards: [
        {
          title: 'Cuatro certezas clínicas',
          kind: 'key',
          items: [
            {
              text: 'Fisura anal duele al defecar; hemorroides internas sangran sin dolor.',
              say: 'Primera regla: el dolor lacerante defecatorio con quemadura prolongada define la fisura anal; el sangrado rojo rutilante indoloro en gotas que mancha el agua del inodoro corresponde a hemorroides internas.',
            },
            {
              text: 'El Diltiazem tópico al dos por ciento es el fármaco de elección en fisura anal.',
              say: 'Segunda regla: el diltiazem al dos por ciento relaja el esfínter anal interno y cura la fisura sin provocar la cefalea severa de los nitratos; la esfinterotomía lateral interna se reserva para casos refractarios.',
            },
            {
              text: 'Trombosis hemorroidal externa se opera con trombectomía en las primeras setenta y dos horas.',
              say: 'Tercera regla: si el paciente con trombosis hemorroidal externa consulta antes de tres días, se realiza trombectomía bajo anestesia local; tras setenta y dos horas el manejo es médico conservador.',
            },
            {
              text: 'Todo absceso anorrectal se drena de inmediato sin esperar fluctuación.',
              say: 'Cuarta regla: el absceso anorrectal es una urgencia quirúrgica que requiere incisión y drenaje inmediato; esperar fluctuación o confiar exclusivamente en antibióticos es una mala práctica.',
            },
          ],
        },
        {
          title: 'Idea final',
          kind: 'normal',
          items: [
            {
              text: 'Regla de Goodsall: trayecto anterior es recto y posterior es curvo a la línea media.',
              say: 'Si te llevas una sola idea de hoy: en fístulas anales los orificios anteriores a la línea transversa tienen trayecto radial recto, y los posteriores tienen trayecto curvo hacia la línea media posterior. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Enfrentamiento de la Patología Orificial Benigna',
    root: N(
      'start',
      'Paciente con sintomatología anorrectal',
      'Identificar síntoma guía: dolor defecatorio vs sangrado indoloro vs masa aguda',
      'Iniciamos el enfrentamiento semiológico inspeccionando suavemente el margen anal y separando los glúteos.',
      [
        'Dolor lacerante con la defecación (Sospecha Fisura)',
        N(
          'q',
          'Inspección: úlcera en línea media posterior',
          'Desgarro longitudinal · anodermo visible · pliegue centinela si es crónica',
          'Constatada la fisura anal, clasificamos entre aguda o crónica y definimos el escalonamiento terapéutico.',
          [
            'Manejo de primera línea',
            N(
              'do',
              'Tratamiento médico conservador con Diltiazem',
              'Fibra + agua + baños de asiento tibios + Diltiazem 2% tópico c/12h por 6 a 8 semanas',
              'Iniciamos tratamiento médico de primera línea con diltiazem tópico al dos por ciento y baños de asiento tibios.',
              [
                'Resolución clínica',
                N(
                  'ok',
                  'Cicatrización exitosa',
                  'Desaparición del dolor y cierre de la úlcera anodérmica',
                  'Se logra la cicatrización completa y se mantienen medidas de heces blandas.',
                ),
              ],
              [
                'Fracaso médico tras 8 semanas',
                N(
                  'alert',
                  'Cirugía: Esfinterotomía Lateral Interna (ELI)',
                  'Sección del tercio inferior del esfínter anal interno',
                  'Ante fracaso médico en fisura crónica refractaria indicamos esfinterotomía lateral interna.',
                ),
              ],
            ),
          ],
        ),
      ],
      [
        'Rectorragia roja rutilante indolora (Hemorroides Internas)',
        N(
          'q',
          'Estratificar según grado de prolapso de Goligher',
          'Anoscopía: paquetes vasculares por encima de la línea dentada',
          'Evaluamos el grado de prolapso de las hemorroides internas para seleccionar la intervención adecuada.',
          [
            'Grado I y II',
            N(
              'do',
              'Manejo ambulatorio y ligadura con bandas elásticas',
              'Grado I médico · Grado II ligadura elástica ambulatoria',
              'En hemorroides Grado uno y dos indicamos dieta rica en fibra y ligadura con bandas elásticas.',
            ),
          ],
          [
            'Grado III y IV',
            N(
              'do',
              'Tratamiento quirúrgico: Hemorroidectomía',
              'Técnica resectiva excisional de Milligan-Morgan o Ferguson',
              'En prolapso Grado tres o cuatro indicamos hemorroidectomía quirúrgica formal.',
            ),
          ],
        ),
      ],
      [
        'Nódulo violáceo agudo doloroso (Trombosis Externa)',
        N(
          'q',
          'Evaluar tiempo de evolución desde el inicio',
          'Masa azulada dolorosa e irreducible bajo la línea dentada',
          'En trombosis hemorroidal externa evaluamos la ventana temporal de setenta y dos horas.',
          [
            'Evolución < 72 horas',
            N(
              'do',
              'Trombectomía bajo anestesia local',
              'Incisión elíptica y enucleación del coágulo en policlínico',
              'Si consulta antes de setenta y dos horas realizamos trombectomía bajo anestesia local con alivio inmediato.',
            ),
          ],
          [
            'Evolución ≥ 72 horas',
            N(
              'ok',
              'Manejo médico conservador',
              'Analgesia oral + baños de asiento tibios · reabsorción espontánea',
              'Tras tres días el coágulo ya se organiza y se indica manejo médico conservador expectante.',
            ),
          ],
        ),
      ],
      [
        'Masa tumefacta eritematosa perianal con fiebre',
        N(
          'alert',
          'Absceso anorrectal criptoglandular',
          'Dolor pulsátil continuo · tumefacción y calor local',
          'Ante un absceso perianal está indicado el drenaje de urgencia inmediato sin esperar fluctuación.',
          [
            'Drenaje quirúrgico inmediato',
            N(
              'ok',
              'Incisión y drenaje quirúrgico amplio de urgencia',
              'Evacuación del pus y lavado · prevenir fístula o Fournier',
              'Realizamos incisión y drenaje quirúrgico amplio de urgencia para evacuar el pus.',
            ),
          ],
        ),
      ],
    ),
  },
};
