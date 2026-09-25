// Clase 18.14 — guion docente escrito a mano (estándar Módulo 3 · Pediatría).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-14).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-14',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Convulsiones febriles en pediatría, crisis simple versus compleja, criterios de punción lumbar, fármacos de rescate agudo, riesgo de recurrencia y educación familiar',
      say: 'Bienvenidos a la clase sobre convulsiones febriles en pediatría, una de las emergencias que mayor angustia genera en los padres y una pregunta obligada en el examen EUNACOM. En esta sesión aprenderemos a clasificar con precisión las crisis en simples y complejas, dominaremos las indicaciones estrictas de punción lumbar para descartar meningitis sin caer en estudios innecesarios, revisaremos el manejo agudo con benzodiacepinas y aclararemos el pronóstico real de recurrencia y epilepsia. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología neurotérmica',
      title: 'Inmadurez Neuronal Cortical, Citoquinas Pirógenas y Despolarización Sincrónica',
      nodes: [
        { id: 'inm', col: 0, row: 1, k: 'start', t: 'Inmadurez de corteza cerebral', s: 'Mielinización incompleta y canales iónicos con umbral de excitabilidad bajo' },
        { id: 'cit', col: 1, row: 1, k: 'mech', t: 'Liberación de citoquinas IL-1 y TNF', s: 'Respuesta inmune a infección extracraneal que eleva bruscamente la temperatura' },
        { id: 'umb', col: 2, row: 1, k: 'risk', t: 'Descenso crítico de umbral convulsivo', s: 'Alteración de la conductancia gabaérgica y aumento de la transmisión glutamatérgica' },
        { id: 'des', col: 3, row: 1, k: 'alert', t: 'Descarga neuronal sincrónica bilateral', s: 'Activación cortical masiva autolimitada que genera crisis tónico clónica' },
      ],
      edges: [
        { from: 'inm', to: 'cit', label: 'vulnerabilidad biológica' },
        { from: 'cit', to: 'umb', label: 'fiebre de ascenso rápido' },
        { from: 'umb', to: 'des', label: 'hiperexcitabilidad' },
      ],
      steps: [
        {
          show: ['inm', 'cit'],
          note: 'Vulnerabilidad del cerebro inmaduro y alza térmica aguda',
          say: 'El cerebro infantil en desarrollo presenta una inmadurez intrínseca en sus circuitos inhibitorios gabaérgicos. Ante una infección sistémica o respiratoria común, la liberación masiva de interleuquinas pirógenas desencadena un ascenso térmico rápido que desestabiliza las membranas celulares.',
        },
        {
          show: ['umb', 'des'],
          note: 'Colapso del umbral bioeléctrico y despolarización masiva autolimitada',
          say: 'Esta elevación brusca de la temperatura reduce drásticamente el umbral convulsivo de las neuronas corticales inmaduras, desatando una descarga paroxística sincrónica y bilateral que se traduce clínicamente en una crisis motora generalizada, la cual cede espontáneamente en pocos minutos.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Definición operativa y epidemiología',
      title: 'Criterios Diagnósticos de la Academia Americana de Pediatría',
      cards: [
        {
          title: 'Definición Estricta de Convulsión Febril',
          tag: 'Tres requisitos excluyentes que confirman la entidad',
          kind: 'key',
          items: [
            {
              t: 'Rango de edad característico: Seis meses a cinco años',
              d: 'Pico máximo de incidencia entre los doce y dieciocho meses; excepcional antes de los seis meses o después de los seis años',
              say: 'La convulsión febril se define como una crisis convulsiva que ocurre exclusivamente en niños de seis meses a cinco años, con un pico clásico entre los doce y dieciocho meses de vida.',
            },
            {
              t: 'Presencia de fiebre sin infección del sistema nervioso central',
              d: 'Temperatura axilar igual o superior a 38.0 grados originada por una infección extracraneal (faringitis, otitis, virosis)',
              say: 'Debe asociarse a fiebre documentada por una causa extracraneal, descartando de plano meningitis, encefalitis o abscesos del sistema nervioso central.',
            },
          ],
        },
        {
          title: 'Criterios de Exclusión Obligatorios',
          tag: 'Descartar epilepsia y desórdenes hidroelectrolíticos',
          kind: 'criteria',
          items: [
            {
              t: 'Ausencia de antecedentes de crisis convulsivas afebriles previas',
              d: 'Si el paciente tiene historia de crisis afebriles no se cataloga como convulsión febril sino como epilepsia gatillada por fiebre',
              say: 'El niño no debe registrar antecedentes de crisis convulsivas afebriles previas ni diagnóstico previo de epilepsia, ya que de lo contrario se considera una crisis epiléptica secundaria.',
            },
            {
              t: 'Ausencia de trastorno hidroelectrolítico o metabólico agudo',
              d: 'Descartar hipoglicemia severa, hipocalcemia, hiponatremia o intoxicación exógena que justifique la despolarización neuronal',
              say: 'Es indispensable confirmar que no existan desequilibrios hidroelectrolíticos graves, hipoglicemia o intoxicaciones exógenas como desencadenantes de la crisis.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Clasificación clínica fundamental',
      title: 'Diferenciación Crucial: Crisis Febril Simple versus Compleja',
      cards: [
        {
          title: 'Convulsión Febril Simple (Típica o Benigna)',
          tag: 'Representa el setenta y cinco al ochenta por ciento de los casos',
          kind: 'normal',
          items: [
            {
              t: 'Semiología generalizada, duración breve y episodio único',
              d: 'Tónico-clónica bilateral generalizada, duración menor a 15 minutos (habitualmente 2 a 3 min) y única en 24 horas',
              say: 'La crisis simple se caracteriza por ser generalizada tónico-clónica bilateral, durar menos de quince minutos y presentarse como un episodio único dentro de un período de veinticuatro horas.',
            },
            {
              t: 'Recuperación neurológica rápida sin déficit postictal',
              d: 'Recuperación completa del estado de alerta en menos de una hora sin paresia de Todd ni alteraciones motoras focales',
              say: 'El paciente recupera plenamente su nivel de conciencia habitual en menos de una hora, sin mostrar ninguna focalidad motora residual ni la temida paresia de Todd.',
            },
          ],
        },
        {
          title: 'Convulsión Febril Compleja (Atípica)',
          tag: 'Presencia de al menos uno de cuatro criterios de alarma',
          kind: 'alert',
          items: [
            {
              t: 'Semiología focal o inicio focal con generalización secundaria',
              d: 'Movimientos clónicos limitados a un hemicuerpo, desviación de la mirada o asimetría motora evidente',
              say: 'Se define como compleja ante cualquier elemento de focalidad motora, como sacudidas restringidas a un solo brazo, una pierna o un hemicuerpo.',
            },
            {
              t: 'Duración mayor a quince minutos o recurrencia en veinticuatro horas',
              d: 'Crisis prolongada sobre 15 minutos o repetición de dos o más crisis en el mismo episodio febril en 24 horas',
              say: 'También clasifica como compleja si se prolonga por más de quince minutos, si se repite en menos de un día o si deja una paresia motora residual.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Semiología comparativa',
      title: 'Comparación Esencial entre Crisis Febril Simple y Compleja',
      head: ['Parámetro Clínico', 'Crisis Febril Simple', 'Crisis Febril Compleja', 'Implicancia Práctica'],
      rows: [
        {
          cells: ['Semiología motora', 'Generalizada bilateral', 'Focal o asimétrica', 'La focalidad exige neuroimagen diferida'],
          say: 'La crisis simple es simétrica y generalizada, mientras que la crisis compleja muestra focalidad motora que obliga a descartar patología estructural.',
        },
        {
          cells: ['Duración del evento', 'Menor a quince minutos', 'Mayor a quince minutos', 'Si sobrepasa cinco minutos requiere frenado activo'],
          say: 'La gran mayoría de las simples duran menos de cinco minutos; una duración mayor a quince minutos define formalmente una crisis compleja.',
        },
        {
          cells: ['Frecuencia en 24 horas', 'Episodio único', 'Dos o más episodios', 'La recurrencia precoz incrementa el riesgo neuroquirúrgico'],
          say: 'La crisis simple ocurre una sola vez en veinticuatro horas, a diferencia de la compleja que recurre dentro del mismo proceso febril.',
        },
        {
          cells: ['Déficit postictal (Todd)', 'Ausente (recuperación total)', 'Presente (paresia residual)', 'La paresia de Todd obliga a estudio hospitalario'],
          say: 'La persistencia de debilidad muscular residual o paresia de Todd en el período postictal es un marcador inequívoco de crisis compleja.',
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Manejo agudo de emergencia',
      title: 'Secuencia de Reanimación y Frenado de la Crisis Activa',
      nodes: [
        { id: 'seg', col: 0, row: 1, k: 'start', t: 'Seguridad y vía aérea (ABC)', s: 'Posición de decúbito lateral, retirar objetos peligrosos y oxígeno SOS' },
        { id: 'cro', col: 1, row: 1, k: 'mech', t: 'Cronometrar tiempo de crisis', s: 'Más del noventa por ciento de las crisis ceden solas antes de 3 minutos' },
        { id: 'cin', col: 2, row: 1, k: 'q', t: '¿Supera los cinco minutos?', s: 'Tiempo límite fisiológico tras el cual se define estatus precoz' },
        { id: 'ben', col: 3, row: 1, k: 'alert', t: 'Administrar benzodiacepina', s: 'Midazolam intranasal o bucal, o Diazepam rectal o Lorazepam EV' },
        { id: 'obs', col: 4, row: 1, k: 'good', t: 'Monitoreo ventilatorio estricto', s: 'Vigilar depresión respiratoria post frenado y saturación de oxígeno' },
      ],
      edges: [
        { from: 'seg', to: 'cro', label: 'evaluación inicial' },
        { from: 'cro', to: 'cin', label: 'espera activa' },
        { from: 'cin', to: 'ben', label: 'crisis persistente' },
        { from: 'ben', to: 'obs', label: 'respuesta' },
      ],
      steps: [
        {
          show: ['seg', 'cro'],
          note: 'Medidas generales de protección y control del tiempo',
          say: 'Al presenciar una convulsión febril activa lo primero es proteger al niño, colocarlo de lado en decúbito lateral para prevenir la aspiración, despejar la vía aérea y controlar el tiempo exacto con reloj.',
        },
        {
          show: ['cin', 'ben', 'obs'],
          note: 'Umbral de cinco minutos para administración de benzodiacepinas',
          say: 'Si la crisis no cede espontáneamente a los cinco minutos, se considera estatus epiléptico precoz y se debe administrar de inmediato una benzodiacepina de acción rápida, manteniendo estricto monitoreo de la vía aérea.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Farmacoterapia de rescate agudo',
      title: 'Benzodiacepinas de Primera Línea en la Crisis Prolongada',
      cards: [
        {
          title: 'Vías No Invasivas de Elección en Urgencia',
          tag: 'Rapidez de acción sin necesidad de vía venosa periférica',
          kind: 'pharma',
          items: [
            {
              t: 'Midazolam intranasal o bucal: De primera elección',
              d: 'Dosis: 0.2 a 0.3 mg/kg administrados con atomizador nasal o en la mucosa yugal; rápido inicio de acción en 2 a 3 minutos',
              say: 'El midazolam intranasal o transmucoso a dosis de cero punto dos a cero punto tres miligramos por kilo es hoy la primera línea por su absorción ultrarrápida sin requerir acceso vascular.',
            },
            {
              t: 'Diazepam por vía rectal: Alternativa clásica',
              d: 'Dosis: 0.3 a 0.5 mg/kg vía rectal con cánula o jeringa sin aguja; eficaz en el ámbito prehospitalario y domicilio',
              say: 'El diazepam por vía rectal a dosis de cero punto tres a cero punto cinco miligramos por kilo sigue siendo una alternativa ampliamente disponible en el ámbito prehospitalario y doméstico.',
            },
          ],
        },
        {
          title: 'Vía Endovenosa si se Dispone de Acceso Vascular',
          tag: 'Manejo en box de reanimación hospitalario',
          kind: 'pharma',
          items: [
            {
              t: 'Lorazepam o Diazepam endovenoso lento',
              d: 'Lorazepam 0.1 mg/kg EV en 2 minutos o Diazepam 0.2 a 0.3 mg/kg EV lento; vigilar depresión ventilatoria',
              say: 'Si el paciente ya cuenta con una vía venosa permeable, se administra lorazepam endovenoso a cero punto un miligramos por kilo o diazepam endovenoso lento diluido.',
            },
            {
              t: 'Regla de las dos dosis y preparación para segunda línea',
              d: 'Se puede repetir una segunda dosis de benzodiacepina a los 5 a 10 minutos; si persiste, pasar a Levetiracetam o Fenitoína EV',
              say: 'Si la convulsión continúa tras cinco minutos se puede reiterar una segunda dosis, activando el protocolo de estatus convulsivo con levetiracetam o fenitoína endovenosa si no remite.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Evaluación diagnóstica dirigida',
      title: 'Indicaciones Estrictas de Punción Lumbar en Convulsión Febril',
      cards: [
        {
          title: 'Punción Lumbar Obligatoria: Sospecha de Meningitis',
          tag: 'Descartar infección del sistema nervioso central sin dilación',
          kind: 'alert',
          items: [
            {
              t: 'Presencia de signos meníngeos o fontanela abombada',
              d: 'Rigidez de nuca, signos de Kernig o Brudzinski positivos o fontanela anterior tensa y abombada en el lactante',
              say: 'La punción lumbar es mandataria e inmediata ante cualquier signo de irritación meníngea, fontanela abombada o compromiso de conciencia prolongado que sugiera infección intracraneal.',
            },
            {
              t: 'Aspecto séptico, letargia o irritabilidad extrema persistente',
              d: 'El niño que luce tóxico, hipoperfundido o con quejido tras la fase postictal debe estudiarse para sepsis y meningitis',
              say: 'Un niño con apariencia tóxica persistente, somnolencia desmedida o quejido respiratorio debe someterse a estudio de líquido cefalorraquídeo para descartar meningitis bacteriana.',
            },
          ],
        },
        {
          title: 'Escenarios Especiales con Bajo Umbral para Punción',
          tag: 'Factores que enmascaran la clínica meníngea',
          kind: 'criteria',
          items: [
            {
              t: 'Lactantes menores de doce meses sin foco evidente',
              d: 'A esta edad los signos meníngeos clásicos pueden estar totalmente ausentes; considerar fuertemente PL entre 6 y 12 meses',
              say: 'En menores de doce meses los signos meníngeos clásicos son sumamente inconstantes, por lo que se debe mantener un umbral muy bajo para punción lumbar, en especial si faltan vacunas.',
            },
            {
              t: 'Tratamiento antibiótico previo reciente',
              d: 'El uso de antibióticos orales puede decapitar el cuadro clínico de una meningitis bacteriana en evolución',
              say: 'El antecedente de haber recibido antibióticos en los días previos puede enmascarar los signos clínicos de una meningitis bacteriana en curso, justificando la realización del procedimiento.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Qué NO hacer en urgencias',
      title: 'Exámenes Innecesarios en la Convulsión Febril Simple',
      cards: [
        {
          title: 'Contraindicación de Estudios Invasivos de Rutina',
          tag: 'Proteger al paciente de sobreintervenciones diagnósticas',
          kind: 'criteria',
          items: [
            {
              t: 'Prohibida la Punción Lumbar de rutina en crisis simple',
              d: 'En un niño mayor de doce meses con examen neurológico normal, foco claro (ejemplo OMA) y vacunas al día, la PL no procede',
              say: 'En un niño mayor de doce meses con vacunas completas, examen neurológico normal y un foco infeccioso evidente, la punción lumbar está totalmente contraindicada por ser invasiva e innecesaria.',
            },
            {
              t: 'Prohibida la Tomografía Axial Computarizada (TAC) de cerebro',
              d: 'La neuroimagen urgente solo expone a radiación ionizante inútil y no aporta beneficio en crisis febriles simples',
              say: 'La tomografía computarizada cerebral de urgencia no está indicada en las crisis simples, pues somete al paciente a radiación innecesaria sin modificar en absoluto la conducta médica.',
            },
          ],
        },
        {
          title: 'Inutilidad del Electroencefalograma de Urgencia',
          tag: 'El trazado no predice recurrencia ni previene epilepsia',
          kind: 'alert',
          items: [
            {
              t: 'El EEG urgente carece de valor predictivo',
              d: 'Puede mostrar enlentecimiento inespecífico postictal transitorio que confunde al clínico y genera angustia infundada',
              say: 'El electroencefalograma no debe solicitarse en la urgencia frente a una crisis febril simple, ya que las alteraciones inespecíficas postictales no predicen la recurrencia ni el desarrollo de epilepsia.',
            },
            {
              t: 'No solicitar exámenes de laboratorio sanguíneo de rutina',
              d: 'Hemograma, electrolitos y PCR no son necesarios a menos que la historia clínica sugiera deshidratación o diarrea severa',
              say: 'Tampoco se requiere hemograma ni bioquímica sanguínea de rutina en un niño con una crisis febril típica y foco clínico claro como una otitis o un catarro común.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Mitos versus evidencia científica',
      title: 'Mitos y Realidades Demostradas en Convulsiones Febriles',
      head: ['Concepto Erróneo Común', 'Evidencia Científica Demostrada', 'Manejo Médico Correcto', 'Mensaje Clave Padres'],
      rows: [
        {
          cells: ['Antipiréticos evitan crisis', 'No alteran el umbral convulsivo', 'Usar solo por confort térmico', 'El paracetamol alivia el malestar'],
          say: 'Los antipiréticos como el paracetamol alivian el malestar del niño pero no reducen el riesgo de recurrencia de una nueva crisis febril.',
        },
        {
          cells: ['Indicar anticonvulsivantes', 'Riesgos superan a los beneficios', 'No prescribir fármacos continuos', 'El valproato genera daño hepático'],
          say: 'El uso continuado de fármacos antiepilépticos como ácido valproico está formalmente desaconsejado en crisis simples por su toxicidad potencial.',
        },
        {
          cells: ['Provoca daño neurológico', 'No causan secuelas cognitivas', 'Tranquilizar a los cuidadores', 'La crisis simple no destruye neuronas'],
          say: 'Las convulsiones febriles simples no dejan secuelas neurológicas ni comprometen el desarrollo psicomotor ni el intelecto futuro del niño.',
        },
        {
          cells: ['Evoluciona a epilepsia', 'Riesgo similar a población general', 'Explicar la naturaleza benigna', 'Menos del dos por ciento tendrá epilepsia'],
          say: 'El riesgo de desarrollar epilepsia tras una crisis simple es de apenas uno a dos por ciento, prácticamente idéntico al de la población general.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Pronóstico y evolución',
      title: 'Riesgo de Recurrencia Febril y Factores Predictores',
      cards: [
        {
          title: 'Tasa Global de Recurrencia y Cronología',
          tag: 'Uno de cada tres niños presentará un nuevo episodio',
          kind: 'key',
          items: [
            {
              t: 'Probabilidad promedio de recurrencia del treinta por ciento',
              d: 'Aproximadamente un tercio de los pacientes que sufren una primera crisis febril presentará otro episodio en futuros cuadros febriles',
              say: 'La probabilidad promedio de presentar una nueva convulsión febril en cuadros infecciosos posteriores es de un tercio, ocurriendo la gran mayoría de estas dentro del primer año posterior.',
            },
            {
              t: 'Mayor riesgo si el debut ocurre antes de los doce meses',
              d: 'En menores de un año al momento del debut, la tasa de recurrencia asciende hasta el cincuenta por ciento',
              say: 'Si el primer evento se manifiesta antes del primer año de vida, la tasa de recurrencia futura trepa hasta un cincuenta por ciento debido al largo tiempo que le resta de inmadurez termorreguladora.',
            },
          ],
        },
        {
          title: 'Factores de Alto Riesgo de Recurrencia',
          tag: 'Elementos que duplican la probabilidad de nuevo evento',
          kind: 'criteria',
          items: [
            {
              t: 'Historia familiar de convulsión febril en primer grado',
              d: 'Padres o hermanos con antecedente de convulsiones febriles en la infancia es el factor predictivo más consistente',
              say: 'El antecedente de convulsiones febriles en padres o hermanos es el factor de riesgo genético más potente para predecir la repetición de un nuevo episodio.',
            },
            {
              t: 'Crisis con temperatura baja o alza muy breve',
              d: 'Convulsión desencadenada con fiebre menor a 38.5 grados o tras menos de una hora de evolución térmica',
              say: 'El desarrollo de la crisis con temperaturas moderadas menores a treinta y ocho coma cinco grados o de aparición muy temprana también anticipa mayor facilidad para recurrir.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Pronóstico neurológico alejado',
      title: 'Riesgo de Epilepsia Posterior: Realidad versus Temor',
      cards: [
        {
          title: 'Riesgo en Crisis Simple: Mínimo y Tranquilizador',
          tag: 'Sin impacto en el coeficiente intelectual ni en la escolaridad',
          kind: 'normal',
          items: [
            {
              t: 'Riesgo de epilepsia de uno a dos por ciento',
              d: 'Cifra casi idéntica a la prevalencia basal de epilepsia en la población pediátrica general sin convulsiones febriles',
              say: 'En niños con convulsión febril simple el riesgo de padecer epilepsia en la adolescencia o adultez es de apenas uno a dos por ciento, idéntico al de cualquier niño sano.',
            },
            {
              t: 'Desarrollo psicomotor y rendimiento escolar intactos',
              d: 'Los estudios de seguimiento a largo plazo confirman que no existe alteración cognitiva ni retraso del aprendizaje',
              say: 'Múltiples estudios de cohortes confirman que las crisis febriles simples no reducen el rendimiento académico ni generan trastornos conductuales a largo plazo.',
            },
          ],
        },
        {
          title: 'Factores que Elevan el Riesgo en Crisis Complejas',
          tag: 'Subgrupo seleccionado que requiere seguimiento neurológico',
          kind: 'alert',
          items: [
            {
              t: 'Crisis complejas con semiología focal o estatus prolongado',
              d: 'La presencia de elementos atípicos eleva el riesgo de epilepsia posterior hasta un cinco a diez por ciento',
              say: 'En cambio, cuando la crisis fue compleja con signos focales motores o duración prolongada, el riesgo de epilepsia aumenta a un rango de cinco a diez por ciento.',
            },
            {
              t: 'Retraso del desarrollo psicomotor o historia de epilepsia',
              d: 'La coexistencia de daño neurológico preexistente o familiares de primer grado con epilepsia eleva el riesgo sobre el diez por ciento',
              say: 'Si se suma una alteración previa del desarrollo psicomotor o antecedentes familiares de epilepsia idiopática, el riesgo puede superar el diez por ciento justificando control con neuropediatra.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de actuación clínica',
      title: 'Algoritmo de Enfrentamiento de la Crisis Convulsiva Asociada a Fiebre',
      say: 'Examinemos el algoritmo paso a paso para el manejo agudo, la estratificación en simple o compleja y la decisión de realizar o evitar la punción lumbar.',
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.2.006',
      title: 'Conducta Médica en Convulsión Febril Simple Típica',
      stem: 'Un niño de 20 meses presenta en su domicilio una crisis convulsiva tónico-clónica generalizada de 3 minutos de duración en el contexto de fiebre de 39.3°C. Al evaluarlo en el box de urgencia 30 minutos después, el niño se encuentra despierto, activo, afebril, con examen neurológico normal y signos meníngeos negativos. Se constata una otitis media aguda derecha. Calendario de vacunas completo.',
      question: '¿Cuál es la conducta diagnóstica y terapéutica más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar punción lumbar inmediata y TAC de cerebro con contraste' },
        { letter: 'B', text: 'Iniciar tratamiento anticonvulsivante profiláctico con Ácido Valproico oral por 2 años' },
        { letter: 'C', text: 'Diagnosticar convulsión febril simple, tratar la otitis media con amoxicilina oral, educar a los padres y dar de alta' },
        { letter: 'D', text: 'Hospitalizar en UCI pediátrica para infusión continua de Fenitoína' },
        { letter: 'E', text: 'Solicitar Electroencefalograma de urgencia previo al alta' },
      ],
      correct: 'C',
      explanation: 'El paciente presenta una clásica Convulsión Febril Simple (edad típica de 20 meses, crisis generalizada de 3 minutos de duración, recuperación ad integrum inmediata, examen neurológico normal y foco infeccioso claro con vacunas al día). En este escenario no está indicada la punción lumbar, el TAC ni el EEG de urgencia. La conducta correcta es tratar la infección de origen (Otitis Media Aguda con amoxicilina oral a 80-90 mg/kg/día), tranquilizar y educar a los padres respecto a la naturaleza benigna del cuadro y dar de alta con signos de alarma claros.',
      say: {
        stem: 'Niño de veinte meses con crisis generalizada de tres minutos en contexto de fiebre alta que recupera conciencia normal y presenta otitis media aguda derecha.',
        question: '¿Cuál es la conducta diagnóstica y terapéutica más adecuada?',
        options: 'La opción A punción lumbar inmediata y tomografía. La B iniciar ácido valproico oral por dos años. La C diagnosticar convulsión febril simple, tratar la otitis media con amoxicilina oral, educar a los padres y dar de alta. La D hospitalizar en cuidados intensivos. La E electroencefalograma de urgencia. Analiza la benignidad del cuadro.',
        answer: 'La respuesta correcta es la C. Se trata de una crisis febril simple con foco evidente, requiriendo tratar la otitis media con amoxicilina, educar a la familia y dar el alta.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.2.006',
      title: 'Criterios de Clasificación de Convulsión Febril Compleja',
      stem: '¿Cuál de las siguientes características clínicas clasifica a una crisis convulsiva asociada a fiebre como una CONVULSIÓN FEBRIL COMPLEJA?',
      options: [
        { letter: 'A', text: 'Duración de 4 minutos con movimientos clónicos en las cuatro extremidades' },
        { letter: 'B', text: 'Ocurrencia de sacudidas clónicas limitadas exclusivamente al hemicuerpo derecho y duración de 18 minutos' },
        { letter: 'C', text: 'Presencia de fiebre de 40.2°C al momento de la convulsión' },
        { letter: 'D', text: 'Edad del paciente de 18 meses al momento del debut' },
        { letter: 'E', text: 'Recuperación completa del estado de alerta en 15 minutos sin déficit motor' },
      ],
      correct: 'B',
      explanation: 'La convulsión febril compleja (o atípica) se define por la presencia de al menos uno de los siguientes cuatro criterios cardinales: 1) Semiología focal o asimétrica (en este caso sacudidas clónicas limitadas al hemicuerpo derecho); 2) Duración prolongada superior a 15 minutos (en este caso 18 minutos); 3) Recurrencia en menos de 24 horas dentro del mismo proceso febril; o 4) Presencia de déficit neurológico postictal residual (paresia de Todd). La magnitud de la temperatura y la edad no definen si la crisis es simple o compleja.',
      say: {
        stem: 'Pregunta conceptual sobre los criterios que definen a una convulsión febril compleja o atípica.',
        question: '¿Cuál de las siguientes características clasifica a la crisis como compleja?',
        options: 'La opción A duración de cuatro minutos generalizada. La B sacudidas limitadas al hemicuerpo derecho y duración de dieciocho minutos. La C fiebre sobre cuarenta grados. La D edad de dieciocho meses. La E recuperación rápida sin déficit. Recuerda los cuatro criterios de atipia.',
        answer: 'La respuesta correcta es la B. La semiología focal en un hemicuerpo y la duración mayor a quince minutos son criterios definitorios de crisis febril compleja.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro EUNACOM',
      title: 'Puntos Clave y Perlas Indispensables en Convulsiones Febriles',
      cards: [
        {
          title: 'Conducta en el Box y Criterios de Punción',
          tag: 'Actuación clínica racional y fundamentada',
          kind: 'key',
          items: [
            {
              t: 'Punción lumbar solo si hay sospecha de meningitis',
              d: 'Signos meníngeos, lactante menor de 12 meses dudoso, antibióticos previos o toxicidad clínica persistente',
              say: 'Reserven la punción lumbar para pacientes con signos meníngeos, sospecha de sepsis, uso de antibióticos previos o menores de doce meses sin vacunas.',
            },
            {
              t: 'Prohibidos los anticonvulsivantes continuos',
              d: 'El uso profiláctico prolongado de fármacos antiepilépticos está contraindicado por efectos adversos inaceptables',
              say: 'Nunca indiquen anticonvulsivantes profilácticos continuos como valproato o fenobarbital en crisis simples; los riesgos superan con creces los beneficios.',
            },
          ],
        },
        {
          title: 'Manejo del Estatus y Educación a la Familia',
          tag: 'Tranquilizar con evidencia sólida',
          kind: 'pharma',
          items: [
            {
              t: 'Midazolam o Diazepam si la crisis supera cinco minutos',
              d: 'Midazolam intranasal a 0.2 mg/kg o Diazepam rectal a 0.3 a 0.5 mg/kg frenan la crisis antes del estatus prolongado',
              say: 'Si la crisis supera los cinco minutos indiquen de inmediato midazolam intranasal o diazepam rectal para evitar la progresión hacia un estatus convulsivo.',
            },
            {
              t: 'Tranquilizar a los padres: Excelente pronóstico neurológico',
              d: 'Explicar que la crisis simple no produce daño cerebral ni retraso cognitivo y que el riesgo de epilepsia es mínimo',
              say: 'Eduquen a los padres con tranquilidad: expliquen que la crisis simple no daña las neuronas y que el riesgo de epilepsia futura es apenas del uno al dos por ciento.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Enfrentamiento de la Crisis Convulsiva Asociada a Fiebre en Pediatría',
    root: N(
      'start',
      'Niño de 6 Meses a 5 Años con Crisis Convulsiva en Contexto de Fiebre',
      'Evaluación inicial inmediata de la vía aérea, ventilación, signos vitales y duración de la crisis',
      'Iniciamos el abordaje asegurando la vía aérea y evaluando si la convulsión se encuentra activa o ya ha cedido.',
      [
        'Crisis convulsiva activa en el box de urgencia (Tiempo de evolución)',
        N(
          'q',
          '¿La crisis convulsiva supera los cinco minutos de duración continua?',
          'Estatus epiléptico precoz que exige frenado farmacológico inmediato',
          'Si la crisis persiste por más de cinco minutos procedemos a la administración de benzodiacepinas.',
          [
            'Sí: Duración mayor a 5 minutos (Estatus epiléptico febril precoz)',
            N(
              'alert',
              'Administración Inmediata de Benzodiacepinas de Rescate',
              'Midazolam intranasal 0.2 mg/kg o Diazepam rectal 0.3-0.5 mg/kg · Si hay vía venosa Lorazepam EV 0.1 mg/kg · Oxígeno por mascarilla · Preparar segunda línea si no cede a 10 min',
              'Administramos midazolam intranasal o diazepam rectal con aporte de oxígeno y monitorización ventilatoria estricta.',
            ),
          ],
          [
            'No: Cede espontáneamente en menos de cinco minutos',
            N(
              'ok',
              'Posición de Seguridad y Monitorización Postictal',
              'Decúbito lateral de seguridad · Aspirar secreciones solo si obstruyen · Monitoreo continuo de frecuencia cardíaca y saturación · Evaluación de recuperación del estado de alerta',
              'Colocamos al paciente en decúbito lateral de seguridad y monitorizamos su recuperación de conciencia.',
            ),
          ],
        ),
      ],
      [
        'Crisis ya detenida: Clasificación Semiográfica y Decisión de Punción Lumbar',
        N(
          'q',
          '¿Presenta signos meníngeos, aspecto séptico o es menor de 12 meses dudoso?',
          'Evaluación de fontanela abombada, rigidez de nuca, petequias o letargia persistente',
          'Una vez recuperado el estado postictal evaluamos la presencia de signos meníngeos o aspecto séptico.',
          [
            'Sí: Signos meníngeos, toxicidad, lactante dudoso o antibióticos previos',
            N(
              'refer',
              'Hospitalización Urgente y Punción Lumbar para Descartar Meningitis',
              'Hospitalizar de inmediato · Punción lumbar para estudio citoquímico, Gram y cultivo de LCR · Hemocultivos · Antibioticoterapia empírica con Cefotaxima EV si sospecha sepsis',
              'Ante signos meníngeos o aspecto séptico hospitalizamos de inmediato para punción lumbar y antibioticoterapia parenteral.',
            ),
          ],
          [
            'No: Examen neurológico normal, foco claro, sin signos meníngeos',
            N(
              'q',
              '¿Cumple criterios de Convulsión Febril Simple o Compleja?',
              'Generalizada, menor a 15 min y única en 24h versus focal, prolongada o repetida',
              'En el niño con examen neurológico normal diferenciamos entre crisis simple o compleja.',
              [
                'Convulsión Febril Simple (Generalizada, < 15 min, única en 24 horas)',
                N(
                  'ok',
                  'Manejo Ambulatorio, Tratamiento del Foco Infeccioso y Educación',
                  'Tratar foco infeccioso de origen (amoxicilina en OMA) · No realizar PL, TAC ni EEG · Educar en medidas de seguridad ante nueva crisis · Alta ambulatoria con signos de alarma',
                  'En la crisis simple tratamos el foco infeccioso primario, educamos a los padres en seguridad y otorgamos el alta.',
                ),
              ],
              [
                'Convulsión Febril Compleja (Focal, > 15 min, recurrente o paresia de Todd)',
                N(
                  'refer',
                  'Observación Hospitalaria y Estudio Neuroimagenológico Diferido',
                  'Hospitalizar en observación por 24 horas · Evaluación por neurología infantil · Resonancia o TAC cerebral diferido si focalidad persistente · No requiere PL de rutina si está lúcido',
                  'Si la crisis fue compleja hospitalizamos en observación durante veinticuatro horas para control y estudio neurológico.',
                ),
              ],
            ),
          ],
        ),
      ],
    ),
  },
};
