// Clase 3.6 — guion docente escrito a mano (estándar Módulo 3 · Obstetricia).
// Fuente clínica: books/scripts/dataset_obstetricia.cjs (ob-06).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-06',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Criterios de severidad, eclampsia, síndrome HELLP, protocolo de sulfato de magnesio de Zuspan, antídoto gluconato de calcio y manejo de la crisis hipertensiva',
      say: 'Bienvenidos a la clase sobre emergencias hipertensivas en el embarazo. Nos enfrentamos a las complicaciones más temidas de la obstetricia: la preeclampsia severa, la eclampsia y el síndrome HELLP. En esta sesión aprenderemos a identificar de inmediato los criterios formales de severidad, a manejar el sulfato de magnesio según el esquema de Zuspan, a emplear el gluconato de calcio como antídoto y a controlar la crisis con labetalol endovenoso. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Cadena de complicación',
      title: 'Espectro evolutivo de las emergencias hipertensivas obstétricas',
      nodes: [
        { id: 'pes', col: 0, row: 1, k: 'start', t: 'Preeclampsia severa', s: 'Cifras tensionales críticas o daño agudo de órgano blanco' },
        { id: 'pre', col: 1, row: 0, k: 'alert', t: 'Pródromos eclampsia', s: 'Cefalea intensa refractaria, escotomas, fotopsias y clonus' },
        { id: 'ecl', col: 2, row: 0, k: 'trap', t: 'Eclampsia', s: 'Convulsiones tónico clónicas generalizadas con riesgo de hemorragia cerebral' },
        { id: 'hlp', col: 2, row: 2, k: 'trap', t: 'Síndrome HELLP', s: 'Microangiopatía trombótica con hemólisis, enzimas hepáticas y plaquetopenia' },
        { id: 'res', col: 4, row: 1, k: 'good', t: 'Estabilización y parto', s: 'Sulfato de magnesio, control tensional e interrupción expedita' },
      ],
      edges: [
        { from: 'pes', to: 'pre', label: 'isquemia cerebral' },
        { from: 'pre', to: 'ecl', label: 'falla autorregulación' },
        { from: 'pes', to: 'hlp', label: 'microtrombosis difusa' },
        { from: 'ecl', to: 'res', label: 'estabilizar y cesárea' },
        { from: 'hlp', to: 'res', label: 'interrupción curativa' },
      ],
      steps: [
        {
          show: ['pes'],
          note: 'Punto de partida de la severidad',
          say: 'La preeclampsia con criterios de severidad se caracteriza por crisis hipertensivas o compromiso hemodinámico y celular de órganos vitales. A partir de este momento la paciente entra en inminente riesgo de complicaciones que amenazan la vida tanto de la madre como del feto.',
        },
        {
          show: ['pre', 'ecl'],
          note: 'Encefalopatía hipertensiva y eclampsia',
          say: 'Cuando el vasoespasmo cerebral y el edema vasogénico vencen los mecanismos de autorregulación vascular, aparecen los síntomas premonitorios de eclampsia: cefalea pulsátil, fosfenos e hiperreflexia patológica con clonus. Si no se frena inmediatamente con sulfato de magnesio, sobrevienen convulsiones tónico clónicas generalizadas con altísimo riesgo de accidente cerebrovascular hemorrágico letal.',
        },
        {
          show: ['hlp', 'res'],
          note: 'Síndrome HELLP e interrupción obligatoria',
          say: 'Paralelamente, la microangiopatía trombótica difusa puede desencadenar el síndrome HELLP con hemólisis microangiopática intravascular, necrosis hepatocelular y consumo masivo de plaquetas. Tanto en la eclampsia como en el síndrome HELLP, la única cura definitiva es la interrupción del embarazo una vez estabilizada la madre con sulfato de magnesio.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Criterios diagnósticos formales',
      title: 'Criterios de severidad en preeclampsia',
      cards: [
        {
          title: 'Cifras tensionales y síntomas',
          tag: 'Alerta clínica inmediata',
          kind: 'alert',
          items: [
            {
              t: 'Crisis hipertensiva severa',
              d: 'Sistólica mayor o igual a 160 o diastólica mayor o igual a 110 mmHg',
              say: 'Una presión arterial mayor o igual a ciento sesenta con ciento diez milímetros de mercurio en dos tomas separadas por quince minutos define una crisis hipertensiva severa que requiere rescate farmacológico inmediato para evitar rotura vascular encefálica.',
            },
            {
              t: 'Síntomas premonitorios neurológicos',
              d: 'Cefalea frontal severa refractaria, fotopsias, escotomas o clonus',
              say: 'La presencia de cefalea intensa holocraneana o frontal que no cede a analgésicos comunes, alteraciones visuales como fosfenos o escotomas centellantes, o clonus inagotable, anuncia una convulsión inminente por edema vasogénico occipital.',
            },
            {
              t: 'Epigastralgia severa o hipocondrio derecho',
              d: 'Dolor en barra por distensión aguda de la cápsula de Glisson',
              say: 'El dolor epigástrico o en hipocondrio derecho traduce isquemia y distensión aguda de la cápsula hepática de Glisson por necrosis centrolobulillar, siendo la antesala de un hematoma subcapsular hepático con riesgo de rotura catastrófica.',
            },
          ],
        },
        {
          title: 'Compromiso de laboratorio',
          tag: 'Disfunción multiorgánica',
          kind: 'criteria',
          items: [
            {
              t: 'Trombocitopenia severa',
              d: 'Recuento de plaquetas menor a cien mil por milímetro cúbico',
              say: 'El recuento de plaquetas menor a cien mil por milímetro cúbico refleja consumo periférico acelerado por daño endotelial extenso y depósito difuso de fibrina en la microvasculatura.',
            },
            {
              t: 'Disfunción hepática y renal',
              d: 'Transaminasas duplicadas o creatinina mayor a uno coma uno',
              say: 'La elevación de transaminasas séricas al doble del límite superior normal y la creatinina plasmática mayor a uno coma un miligramos por decilitro confirman falla orgánica avanzada y pérdida de la función de filtración.',
            },
            {
              t: 'Edema agudo de pulmón',
              d: 'Insuficiencia respiratoria por fuga capilar alveolar y poscarga crítica',
              say: 'El edema pulmonar es una emergencia de máxima gravedad producida por aumento de la permeabilidad capilar y disfunción ventricular izquierda aguda secundaria a la elevadísima poscarga vascular periférica.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Semiología de alarma',
      title: 'Pesquisa clínica de pródromos y complicaciones graves',
      head: ['Signo o síntoma clínico', 'Sustrato fisiopatológico', 'Riesgo inminente', 'Conducta médica inmediata'],
      rows: [
        {
          cells: ['Cefalea holocraneana severa y fotopsias', 'Edema cerebral vasogénico parieto-occipital', 'Crisis convulsiva de eclampsia', 'Sulfato de magnesio bolo endovenoso'],
          say: 'La cefalea intensa y los fosfenos traducen edema cerebral vasogénico occipital y preceden a las convulsiones. Exigen administrar sulfato de magnesio de inmediato para estabilizar la membrana neuronal.',
        },
        {
          cells: ['Clonus patológico de tres o más batidas', 'Hiperexcitabilidad corticoespinal motora', 'Inestabilidad de membrana neuronal', 'Sulfato de magnesio y monitoreo en UCI'],
          say: 'El clonus inagotable al dorsiflectar el pie revela hiperexcitabilidad del sistema nervioso central y anticipa una crisis convulsiva generalizada. Requiere ingreso inmediato a una unidad de cuidados intensivos.',
        },
        {
          cells: ['Dolor epigástrico en barra con náuseas', 'Necrosis hepatocelular y hematoma subcapsular', 'Rotura hepática y hemoperitoneo', 'Ecografía abdominal e interrupción urgente'],
          say: 'El dolor en barra epigástrico alerta sobre distensión de la cápsula hepática y riesgo de rotura con hemoperitoneo letal. Obliga a descartar hematoma subcapsular y planificar la interrupción.',
        },
        {
          cells: ['Disnea súbita y estertores crepitantes', 'Fuga capilar pulmonar y sobrecarga miocárdica', 'Insuficiencia respiratoria aguda y asfixia', 'Oxigenoterapia, furosemida e intubación'],
          say: 'Los crepitantes difusos traducen edema agudo de pulmón. En este caso específico sí está indicada la furosemida endovenosa junto con soporte ventilatorio y restricción hídrica estricta.',
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Neuropatología obstétrica',
      title: 'Fisiopatología de la eclampsia y encefalopatía hipertensiva',
      nodes: [
        { id: 'vas', col: 0, row: 1, k: 'start', t: 'Vasoespasmo cerebral', s: 'Presión de perfusión crítica sobrepasa la autorregulación' },
        { id: 'fba', col: 1, row: 1, k: 'mech', t: 'Fuga hematoencefálica', s: 'Aumento de permeabilidad con disrupción de uniones estrechas' },
        { id: 'ede', col: 2, row: 1, k: 'alert', t: 'Edema vasogénico', s: 'Compromiso parieto occipital bilateral con síndrome PRES' },
        { id: 'des', col: 3, row: 1, k: 'risk', t: 'Despolarización sincrónica', s: 'Descarga cortical generalizada facilitada por receptores NMDA' },
        { id: 'con', col: 4, row: 1, k: 'trap', t: 'Convulsión tónico clónica', s: 'Crisis eclampsica con hipoxia fetal y riesgo de muerte materna' },
      ],
      edges: [
        { from: 'vas', to: 'fba', label: 'hiperpresión' },
        { from: 'fba', to: 'ede', label: 'extravasación' },
        { from: 'ede', to: 'des', label: 'irritación cortical' },
        { from: 'des', to: 'con', label: 'crisis convulsiva' },
      ],
      steps: [
        {
          show: ['vas', 'fba'],
          note: 'Pérdida de la autorregulación vascular cerebral',
          say: 'Cuando la presión arterial media supera los límites superiores de autorregulación cerebral, los vasos del lecho encefálico se dilatan de forma forzada, provocando hiperperfusión y rotura de la barrera hematoencefálica con fuga masiva de proteínas y líquido al intersticio.',
        },
        {
          show: ['ede'],
          note: 'Síndrome de leucoencefalopatía posterior reversible',
          say: 'El líquido extravasado genera edema vasogénico de predominio en las regiones parieto-occipitales del encéfalo, configurando el llamado síndrome de leucoencefalopatía posterior reversible. Esto explica por qué las pacientes presentan ceguera cortical transitoria, escotomas y cefalea occipital intensa.',
        },
        {
          show: ['des', 'con'],
          note: 'Crisis convulsiva generalizada eclampsica',
          say: 'El edema cortical y la isquemia focal generan hiperexcitabilidad neuronal mediada por receptores de glutamato de tipo N-metil-D-aspartato, desencadenando una despolarización sincrónica generalizada. Esto culmina en la crisis convulsiva tónico clónica de la eclampsia, que induce bradicardia fetal severa y riesgo inminente de sangrado intracraneano materno.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Microangiopatía trombótica',
      title: 'Criterios diagnósticos del Síndrome HELLP (Consenso de Tennessee)',
      cards: [
        {
          title: 'Tríada diagnóstica de laboratorio',
          tag: 'Criterios de Tennessee',
          kind: 'alert',
          items: [
            {
              t: 'H: Hemólisis microangiopática',
              d: 'Esquistocitos en frotis, bilirrubina indirecta alta y LDH mayor a 600',
              say: 'La destrucción mecánica de glóbulos rojos al circular por capilares lesionados y redes de fibrina produce esquistocitos en el frotis, hiperbilirrubinemia de predominio indirecto y lactato deshidrogenasa mayor a seiscientas unidades por litro.',
            },
            {
              t: 'EL: Elevación de enzimas hepáticas',
              d: 'Transaminasas AST o ALT mayores o iguales a setenta unidades',
              say: 'La necrosis isquémica focal hepatocelular secundaria a microtrombos intrahepáticos eleva las transaminasas séricas por encima de setenta unidades por litro o al doble de sus valores de referencia normales.',
            },
            {
              t: 'LP: Plaquetopenia por consumo',
              d: 'Recuento de plaquetas menor a cien mil por milímetro cúbico',
              say: 'El daño endotelial diseminado activa la agregación plaquetaria intravascular a gran escala, provocando un rápido consumo periférico que derrumba el recuento plaquetario por debajo de cien mil.',
            },
          ],
        },
        {
          title: 'Complicaciones y conducta definitiva',
          tag: 'Emergencia vital',
          kind: 'key',
          items: [
            {
              t: 'Hematoma subcapsular y rotura hepática',
              d: 'Shock hemorrágico súbito con colapso hemodinámico materno',
              say: 'La complicación quirúrgica más temida del síndrome HELLP es la rotura de un hematoma subcapsular hepático, manifestada por dolor en puñalada en hipocondrio derecho y shock hipovolémico súbito que exige laparotomía urgente.',
            },
            {
              t: 'Interrupción inmediata curativa',
              d: 'Único tratamiento causal definitivo tras estabilización médica',
              say: 'El síndrome HELLP es una patología biológicamente progresiva que no responde a manejo expectante. Su único tratamiento curativo es la interrupción del embarazo, la cual debe ejecutarse expeditamente tras estabilizar a la paciente.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico diferencial crítico',
      title: 'Distinción entre Síndrome HELLP e Hígado Graso Agudo del Embarazo',
      head: ['Parámetro clínico', 'Síndrome HELLP', 'Hígado Graso Agudo del Embarazo (HGAE)'],
      rows: [
        {
          cells: ['Presión arterial', 'Hipertensión severa frecuente (mayor a 160/110)', 'Habitualmente normotensa o hipertensión leve tardía'],
          say: 'El síndrome HELLP casi siempre se acompaña de hipertensión arterial severa, mientras que el hígado graso agudo suele debutar con presión arterial estrictamente normal.',
        },
        {
          cells: ['Glicemia plasmática', 'Normal', 'Hipoglicemia severa marcada (menor a 60 mg/dL)'],
          say: 'La hipoglicemia severa es el signo distintivo cardinal del hígado graso agudo por falla mitocondrial hepática masiva, mientras que en el HELLP la glicemia permanece en rangos normales.',
        },
        {
          cells: ['Perfil de coagulación', 'Plaquetopenia aislada inicial', 'Coagulopatía severa precoz con prolongación de protrombina'],
          say: 'El hígado graso agudo cursa con insuficiencia hepática fulminante con coagulopatía precoz y caída rápida de la protrombina, mientras que el HELLP inicia con trombocitopenia aislada.',
        },
        {
          cells: ['Hiperuricemia y amonio', 'Elevación leve a moderada', 'Hiperuricemia extrema y elevación tóxica de amonio'],
          say: 'El hígado graso agudo presenta hiperuricemia desproporcionada y encefalopatía hepática con aumento de amonio, orientando hacia insuficiencia hepatocelular primaria.',
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Neuroprofilaxis de elección',
      title: 'Protocolo de infusión de Sulfato de Magnesio (Esquema de Zuspan)',
      nodes: [
        { id: 'ind', col: 0, row: 1, k: 'start', t: 'Indicación clínica', s: 'Preeclampsia severa, inminencia de eclampsia o convulsión activa' },
        { id: 'car', col: 1, row: 1, k: 'mech', t: 'Dosis de carga endovenosa', s: 'Cuatro a cinco gramos de sulfato de magnesio al 20 por ciento en 20 minutos' },
        { id: 'man', col: 2, row: 1, k: 'good', t: 'Infusión de mantenimiento', s: 'Uno a dos gramos por hora en bomba de infusión continua' },
        { id: 'pos', col: 3, row: 1, k: 'alert', t: 'Mantenimiento posparto', s: 'Mantener infusión continua estricta por 24 horas posteriores al parto' },
        { id: 'vig', col: 4, row: 1, k: 'risk', t: 'Monitoreo clínico horario', s: 'Vigilancia horaria de reflejos, frecuencia respiratoria y diuresis' },
      ],
      edges: [
        { from: 'ind', to: 'car', label: 'inicio de urgencia' },
        { from: 'car', to: 'man', label: 'infusión continua' },
        { from: 'man', to: 'pos', label: 'período de riesgo' },
        { from: 'pos', to: 'vig', label: 'control de seguridad' },
      ],
      steps: [
        {
          show: ['ind', 'car'],
          note: 'Dosis de carga de sulfato de magnesio',
          say: 'El sulfato de magnesio es muy superior a las benzodiacepinas y fenitoína para prevenir y yugular convulsiones eclampsicas actuando como antagonista de los receptores NMDA y vasodilatador cerebral. Se inicia con una dosis de carga de cuatro a cinco gramos endovenosos administrados en quince a veinte minutos diluidos en suero fisiológico o glucosado.',
        },
        {
          show: ['man', 'pos'],
          note: 'Mantenimiento durante el parto y puerperio',
          say: 'Inmediatamente tras la carga, se continúa con una infusión de mantenimiento de uno a dos gramos por hora en bomba continua. Esta infusión debe mantenerse durante todo el trabajo de parto y prolongarse rigurosamente durante las primeras veinticuatro horas del posparto, cuando ocurre casi la mitad de los episodios eclampsicos.',
        },
        {
          show: ['vig'],
          note: 'Monitoreo de seguridad horaria',
          say: 'Debido a su estrecho margen terapéutico y a que se elimina de manera exclusiva por filtración renal, cada hora se debe verificar la presencia de reflejo patelar vivo, frecuencia respiratoria normal y diuresis horaria suficiente para prevenir una sobredosis accidental.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Seguridad y farmacovigilancia',
      title: 'Monitoreo de toxicidad por magnesio y antídoto obligatorio',
      cards: [
        {
          title: 'Tríada de control clínico horario',
          tag: 'Parámetros obligatorios',
          kind: 'pharma',
          items: [
            {
              t: 'Reflejo rotuliano o patelar presente',
              d: 'Su abolición es el primer signo de intoxicación por magnesio',
              say: 'La abolición del reflejo rotuliano es el signo clínico más temprano y fidedigno de intoxicación. Ocurre con concentraciones séricas de ocho a diez miliequivalentes por litro y precede a la parálisis respiratoria.',
            },
            {
              t: 'Frecuencia respiratoria sobre doce',
              d: 'Mínimo doce a dieciséis respiraciones por minuto',
              say: 'Una frecuencia respiratoria menor a doce respiraciones por minuto indica depresión del centro respiratorio por bloqueo neuromuscular, constituyendo una emergencia vital con riesgo de paro hipóxico.',
            },
            {
              t: 'Diuresis mayor a 30 mililitros por hora',
              d: 'Eliminación renal obligatoria para evitar acumulación',
              say: 'El magnesio se excreta íntegramente por los riñones. Una diuresis menor a treinta mililitros por hora provoca acumulación plasmática progresiva e intoxicación grave en cuestión de pocas horas.',
            },
          ],
        },
        {
          title: 'Antídoto específico de rescate',
          tag: 'Gluconato de calcio al 10%',
          kind: 'alert',
          items: [
            {
              t: 'Administración de emergencia',
              d: 'Un gramo de gluconato de calcio endovenoso lento en 3 a 5 minutos',
              say: 'Frente a la pérdida del reflejo rotuliano o bradipnea, la conducta médica inmediata consiste en suspender la infusión de sulfato de magnesio y administrar un gramo de gluconato de calcio al diez por ciento por vía endovenosa lenta en tres a cinco minutos.',
            },
            {
              t: 'Disponibilidad a la cabecera',
              d: 'Ampolla de gluconato de calcio visible al lado de la paciente',
              say: 'La ampolla de gluconato de calcio debe estar permanentemente preparada a la cabecera de toda paciente que reciba sulfato de magnesio para responder de forma instantánea ante cualquier signo de toxicidad neuromuscular.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Control hemodinámico de emergencia',
      title: 'Manejo de la crisis hipertensiva severa (PA mayor o igual a 160/110 mmHg)',
      head: ['Fármaco de rescate', 'Dosis y vía de administración', 'Tiempo de acción', 'Precauciones clínicas'],
      rows: [
        {
          cells: ['Labetalol endovenoso', 'Bolo inicial 20 mg EV; luego 40 y 80 mg cada 15 a 20 min', 'Cinco a diez minutos', 'Evitar en pacientes asmáticas severas o bradicárdicas'],
          say: 'El labetalol endovenoso es el fármaco de primera línea de rescate. Se administra en bolos crecientes de veinte, cuarenta y ochenta miligramos hasta una dosis acumulada máxima de trescientos miligramos, controlando la presión cada cinco minutos.',
        },
        {
          cells: ['Nifedipino oral de liberación rápida', 'Diez a veinte miligramos vía oral (deglutido, no sublingual)', 'Quince a veinte minutos', '¡Nunca morder ni dar sublingual por hipotensión brusca!'],
          say: 'El nifedipino oral es una excelente alternativa si no se dispone de vía venosa inmediata. Debe tragarse entero, jamás administrarse sublingual para evitar un colapso tensional súbito con sufrimiento fetal agudo.',
        },
        {
          cells: ['Hidralazina endovenosa', 'Cinco a diez miligramos en bolo lento cada veinte minutos', 'Diez a veinte minutos', 'Riesgo de taquicardia refleja y cefalea pulsátil'],
          say: 'La hidralazina endovenosa es un vasodilatador directo arteriolar seguro, aunque puede desencadenar taquicardia materna refleja y cefalea pulsátil que puede confundirse con síntomas premonitorios.',
        },
        {
          cells: ['Meta tensional del rescate', '140 a 150 sistólica y 90 a 100 diastólica', 'Progresiva y controlada', '¡Nunca reducir la presión a valores normales menores a 120/80!'],
          say: 'La meta nunca es normalizar la presión a cifras menores a ciento veinte con ochenta. Un descenso excesivo provocaría colapso en la perfusión útero placentaria y asfixia fetal aguda irreversible.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de emergencia obstétrica',
      title: 'Algoritmo de actuación ante preeclampsia severa, eclampsia y síndrome HELLP',
      say: 'Revisemos el algoritmo estructurado de emergencia frente a una paciente con preeclampsia severa, convulsiones o síndrome HELLP.',
    },

    {
      type: 'table',
      kicker: 'Trampas frecuentes EUNACOM',
      title: 'Distracciones y errores comunes en emergencias hipertensivas',
      head: ['Situación presentada en la pregunta', 'Error habitual del postulante', 'Conducta médica correcta'],
      rows: [
        {
          cells: ['Paciente con eclampsia convulsionando activamente', 'Administrar Diazepam o Fenitoína como primera línea', 'Sulfato de magnesio cuatro a cinco gramos endovenosos'],
          say: 'En la eclampsia las benzodiacepinas no son de primera línea. El sulfato de magnesio reduce a la mitad la recurrencia de crisis convulsivas en comparación con cualquier anticonvulsivante tradicional.',
        },
        {
          cells: ['Abolición de reflejos osteotendinosos bajo infusión de magnesio', 'Aumentar la hidratación y controlar en dos horas', 'Suspender infusión y administrar gluconato de calcio al diez por ciento'],
          say: 'La pérdida del reflejo rotuliano es el primer signo de intoxicación. Se suspende el sulfato de inmediato y se administra el antídoto específico endovenoso sin esperar a que ocurra paro respiratorio.',
        },
        {
          cells: ['Crisis hipertensiva de 180/120 mmHg en el puerperio', 'Bajar la presión por debajo de 120/80 de forma agresiva', 'Descenso paulatino hacia 140 a 150 de sistólica y 90 a 100 de diastólica'],
          say: 'Bajar la presión bruscamente puede causar isquemia cerebral materna y colapso de órganos diana. La meta terapéutica busca siempre un rango de seguridad moderado y bien tolerado.',
        },
        {
          cells: ['Síndrome HELLP confirmado a las 31 semanas', 'Conducta expectante hasta las 34 semanas para ganar madurez', 'Interrupción expedita del embarazo independiente de las semanas'],
          say: 'El síndrome HELLP nunca se maneja de forma expectante. La interrupción del embarazo es la única cura causal y debe realizarse tras estabilizar hemodinámicamente a la paciente.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso de razonamiento clínico',
      title: 'Manejo de la intoxicación aguda por Sulfato de Magnesio',
      stem: 'Una paciente de 34 semanas con diagnóstico de preeclampsia con criterios de severidad se encuentra recibiendo infusión continua de Sulfato de Magnesio a 2 g/hora. Al realizar el control clínico horario, el médico constata: paciente somnolienta pero orientada, frecuencia respiratoria de 10 respiraciones por minuto y ausencia completa del reflejo rotuliano bilateral. La diuresis de la última hora fue de 15 mL.',
      question: '¿Cuál es la conducta médica inmediata?',
      options: [
        { letter: 'A', text: 'Aumentar el goteo de sulfato de magnesio para profundizar la neuroprotección' },
        { letter: 'B', text: 'Suspender de inmediato la infusión de sulfato de magnesio y administrar gluconato de calcio al 10% endovenoso' },
        { letter: 'C', text: 'Administrar 10 mg de diazepam endovenoso para estimular el centro respiratorio' },
        { letter: 'D', text: 'Proceder a intubación orotraqueal de urgencia sin administrar antídotos' },
        { letter: 'E', text: 'Indicar furosemida 40 mg endovenosa para forzar la diuresis' },
      ],
      correct: 'B',
      explanation: 'La paciente presenta una Intoxicación Aguda por Sulfato de Magnesio, manifestada por la tríada clásica: abolición del reflejo rotuliano (ocurre con magnesemia mayor a 8 a 10 mEq/L), bradipnea con frecuencia respiratoria menor a 12 por minuto y oliguria (menor a 30 mL/h) que favorece la acumulación tóxica del catión. La conducta inmediata de emergencia consiste en suspender la infusión de sulfato de magnesio y administrar el antídoto específico: Gluconato de Calcio al 10% (1 gramo endovenoso lento en 3 a 5 minutos) para revertir el bloqueo neuromuscular.',
      say: {
        stem: 'Una paciente de treinta y cuatro semanas con preeclampsia severa recibe sulfato de magnesio en bomba continua. En el control horario presenta frecuencia respiratoria de diez por minuto, ausencia bilateral del reflejo rotuliano y diuresis de quince mililitros en la última hora.',
        question: '¿Cuál es la conducta médica inmediata?',
        options: 'La opción A propone aumentar la infusión. La B suspender el sulfato de magnesio y administrar gluconato de calcio al diez por ciento endovenoso. La C diazepam endovenoso. La D intubación orotraqueal sin antídoto. La E furosemida endovenosa. Piénsalo.',
        answer: 'La respuesta correcta es la B. La tríada de arreflexia rotuliana, bradipnea y oliguria confirma intoxicación aguda por sulfato de magnesio. Se debe suspender la infusión inmediatamente y pasar un gramo de gluconato de calcio endovenoso lento en tres a cinco minutos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Caso de razonamiento clínico',
      title: 'Manejo de la crisis hipertensiva intraparto',
      stem: 'Durante el trabajo de parto de una primigesta de 38 semanas con preeclampsia severa, se registra una presión arterial sostenida de 175/115 mmHg. La paciente refiere cefalea frontal punzante intensa y fotopsias. No presenta broncoespasmo ni antecedentes de asma.',
      question: '¿Cuál es el fármaco de rescate endovenoso de primera línea para el control rápido de la crisis hipertensiva en este contexto?',
      options: [
        { letter: 'A', text: 'Nitroprusiato de sodio en infusión continua' },
        { letter: 'B', text: 'Labetalol endovenoso en bolo inicial de 20 mg' },
        { letter: 'C', text: 'Enalaprilato endovenoso en bolo' },
        { letter: 'D', text: 'Furosemida endovenosa en bolo' },
        { letter: 'E', text: 'Nifedipino sublingual masticado' },
      ],
      correct: 'B',
      explanation: 'Para el manejo agudo de la crisis hipertensiva severa en el embarazo (PA mayor o igual a 160/110 mmHg), el fármaco endovenoso de primera línea y de elección absoluta es el Labetalol endovenoso. Se inicia con un bolo de 20 mg EV directo en 2 minutos; si a los 10 a 20 minutos la presión persiste en rango severo, se administra un segundo bolo de 40 mg, y posteriormente 80 mg cada 10 a 20 minutos hasta una dosis máxima de 220 a 300 mg. La meta es reducir la PA a 140-150 / 90-100 mmHg.',
      say: {
        stem: 'Una primigesta de treinta y ocho semanas en trabajo de parto presenta presión arterial sostenida de ciento setenta y cinco con ciento quince milímetros de mercurio, cefalea frontal y fotopsias.',
        question: '¿Cuál es el fármaco de rescate endovenoso de primera línea para el control rápido de la crisis?',
        options: 'La opción A propone nitroprusiato de sodio. La B labetalol endovenoso en bolo inicial de veinte miligramos. La C enalaprilato endovenoso. La D furosemida en bolo. La E nifedipino sublingual masticado. Piénsalo.',
        answer: 'La respuesta correcta es la B. El labetalol endovenoso es el antihipertensivo parenteral de elección para la crisis hipertensiva en el embarazo. El enalaprilato está prohibido y el nifedipino sublingual está proscrito por riesgo de hipotensión precipitada y desaceleraciones fetales severas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Enero 2023',
      title: 'EUNACOM Enero 2023 · Pregunta 54',
      stem: 'Una embarazada de 32 semanas de gestación consulta en el servicio de urgencia por cefalea frontal intensa, fotopsias y epigastralgia. Al control de signos vitales se constata presión arterial de 160/110 mmHg y reflejos osteotendinosos vivos con clonus agotable.',
      question: '¿Cuál es la conducta terapéutica inicial prioritaria?',
      options: [
        { letter: 'A', text: 'Administrar sulfato de magnesio intravenoso' },
        { letter: 'B', text: 'Administrar diazepam 10 mg intravenoso' },
        { letter: 'C', text: 'Indicar reposo en decúbito lateral izquierdo y observar' },
        { letter: 'D', text: 'Realizar cesárea de emergencia inmediata sin medicación previa' },
        { letter: 'E', text: 'Indicar paracetamol oral y derivar a policlínico' },
      ],
      correct: 'A',
      explanation: 'La paciente presenta una preeclampsia con criterios de severidad caracterizada por crisis hipertensiva (PA 160/110 mmHg), síntomas neurológicos premonitorios de eclampsia (cefalea, fotopsias, hiperreflexia con clonus) y dolor epigástrico. La medida prioritaria inmediata es la neuroprotección y profilaxis anticonvulsivante con Sulfato de Magnesio intravenoso (esquema de Zuspan: 4 a 5 g de carga en 20 minutos), asociada al control de la presión arterial y posterior interrupción.',
      say: {
        stem: 'Una embarazada de treinta y dos semanas consulta en urgencias por cefalea intensa, fotopsias, epigastralgia, presión arterial de ciento sesenta con ciento diez milímetros de mercurio y clonus.',
        question: '¿Cuál es la conducta terapéutica inicial prioritaria?',
        options: 'La opción A propone administrar sulfato de magnesio intravenoso. La B diazepam diez miligramos intravenoso. La C reposo en decúbito lateral. La D cesárea inmediata sin medicación. La E paracetamol y derivar. Piénsalo.',
        answer: 'La respuesta correcta es la A. Los síntomas neurológicos con presión de ciento sesenta con ciento diez representan inminencia de eclampsia. La prioridad absoluta para evitar convulsiones y hemorragia cerebral materna es el sulfato de magnesio intravenoso.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Enero 2023',
      title: 'EUNACOM Enero 2023 · Pregunta 50',
      stem: 'Una paciente cursando un embarazo sobre 20 semanas consulta por dolor epigástrico constante de moderada a gran intensidad. Se constata hipertensión arterial severa. En sus exámenes de laboratorio destacan transaminasas séricas marcadamente elevadas y trombocitopenia en el hemograma.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Hepatitis viral aguda' },
        { letter: 'B', text: 'Colecistitis aguda litiásica' },
        { letter: 'C', text: 'Síndrome de HELLP' },
        { letter: 'D', text: 'Colestasia intrahepática del embarazo' },
        { letter: 'E', text: 'Púrpura trombocitopénico idiopático' },
      ],
      correct: 'C',
      explanation: 'En una embarazada de más de 20 semanas, la combinación de hipertensión arterial, epigastralgia, elevación marcada de transaminasas séricas y trombocitopenia configura la presentación clínica clásica del Síndrome de HELLP. Es una complicación microangiopática grave de la preeclampsia que requiere hospitalización inmediata, sulfato de magnesio e interrupción expedita de la gestación.',
      say: {
        stem: 'Una paciente con embarazo sobre veinte semanas presenta dolor epigástrico constante, hipertensión arterial severa, elevación marcada de transaminasas y trombocitopenia.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'La opción A plantea hepatitis viral aguda. La B colecistitis aguda. La C síndrome de HELLP. La D colestasia intrahepática. La E púrpura trombocitopénico idiopático. Piénsalo.',
        answer: 'La respuesta correcta es la C. La coexistencia de hipertensión, dolor epigástrico, hepatitis isquémica y consumo plaquetario en el segundo o tercer trimestre define el síndrome HELLP hasta demostrar lo contrario.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro',
      title: 'Conceptos clave en emergencias hipertensivas del embarazo',
      cards: [
        {
          title: 'Neuroprofilaxis y antídoto',
          tag: 'Protocolos vitales',
          kind: 'key',
          items: [
            {
              t: 'Sulfato de magnesio es superior a todo',
              d: 'Dosis de carga cuatro a cinco gramos endovenosos en veinte minutos',
              say: 'El sulfato de magnesio es el fármaco indiscutido para prevenir y tratar las convulsiones eclampsicas, superando ampliamente a las benzodiacepinas.',
            },
            {
              t: 'Gluconato de calcio al diez por ciento',
              d: 'Un gramo endovenoso lento ante arreflexia patelar u oliguria',
              say: 'Ante pérdida del reflejo rotuliano o bradipnea, se suspende la infusión y se pasa de inmediato gluconato de calcio al diez por ciento endovenoso.',
            },
          ],
        },
        {
          title: 'Rescate tensional y término',
          tag: 'Manejo en UCI obstétrica',
          kind: 'alert',
          items: [
            {
              t: 'Labetalol endovenoso en crisis',
              d: 'Bolos escalonados de veinte, cuarenta y ochenta miligramos',
              say: 'El labetalol parenteral es la primera línea en crisis hipertensiva; la meta es ciento cuarenta a ciento cincuenta con noventa a cien milímetros de mercurio.',
            },
            {
              t: 'Interrupción es la única cura',
              d: 'Eclampsia y síndrome HELLP no admiten manejo expectante',
              say: 'Si te llevas una sola idea de hoy: en eclampsia y síndrome HELLP la interrupción del embarazo es la única cura definitiva y debe realizarse de inmediato una vez estabilizada la paciente. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Actuación ante Emergencias Hipertensivas en el Embarazo',
    root: N(
      'start',
      'Sospecha de Preeclampsia Severa, Eclampsia o HELLP',
      'PA mayor o igual a 160/110 mmHg, síntomas premonitorios, epigastralgia o laboratorio alterado',
      'Iniciamos el abordaje de emergencia evaluando simultáneamente la vía aérea, las cifras tensionales y el estado neurológico.',
      [
        'Presencia de convulsiones activas o inminencia',
        N(
          'alert',
          'Eclampsia o Inminencia de Eclampsia',
          'Vía aérea permeable, oxígeno por mascarilla y prevención de trauma',
          'Si la paciente presenta convulsiones o pródromos neurológicos graves, aseguramos la vía aérea e iniciamos neuroprotección.',
          [
            'Neuroprofilaxis inmediata',
            N(
              'do',
              'Sulfato de Magnesio: Carga 4 a 5 g EV en 20 min',
              'Continuar con infusión de mantenimiento a 1 a 2 g/h por 24 horas posparto',
              'Administramos la dosis de carga de sulfato de magnesio y mantenemos la infusión continua.',
            ),
          ],
          [
            'Aparición de toxicidad por magnesio',
            N(
              'alert',
              'Antídoto: Gluconato de Calcio al 10%',
              'Suspender sulfato de magnesio · 1 g EV lento en 3 a 5 minutos ante arreflexia o bradipnea',
              'Ante pérdida del reflejo rotuliano o bradipnea, suspendemos la infusión y pasamos gluconato de calcio al diez por ciento.',
            ),
          ],
        ),
      ],
      [
        'Crisis hipertensiva aislada (PA mayor o igual a 160/110)',
        N(
          'do',
          'Crisis Hipertensiva Severa',
          'Labetalol 20 mg EV bolo en 2 min o Nifedipino 10 a 20 mg oral deglutido',
          'Si presenta crisis hipertensiva iniciamos rescate con labetalol endovenoso o nifedipino oral.',
          [
            'Meta tensional alcanzada',
            N(
              'ok',
              'PA meta: 140-150 / 90-100 mmHg',
              'Evitar hipotensión brusca para proteger la perfusión útero placentaria',
              'Alcanzada la meta de seguridad, mantenemos vigilancia hemodinámica continua sin descender a presiones normales.',
            ),
          ],
        ),
      ],
      [
        'Estabilización lograda y confirmación de severidad',
        N(
          'do',
          'Interrupción del Embarazo Programada o Urgente',
          'Eclampsia y HELLP: interrupción expedita · Preeclampsia severa mayor o igual a 34 sem: interrupción',
          'Una vez estabilizada la paciente procedemos a la interrupción del embarazo según la edad gestacional y gravedad.',
        ),
      ],
    ),
  },
};
