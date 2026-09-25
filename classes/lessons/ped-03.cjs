// Clase 18.03 — guion docente escrito a mano (estándar Módulo 3 · Pediatría).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-03).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-03',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Calendario oficial PNI Chile, hitos de los 12 y 18 meses, vacunas de virus vivos versus inactivadas, anticuerpo monoclonal nirsevimab y contraindicaciones reales',
      say: 'Bienvenidos a la clase del Programa Nacional de Inmunizaciones de Chile, una política pública fundamental y de altísima presencia en el examen EUNACOM. En esta sesión revisaremos la composición del calendario ministerial obligatorio, detallaremos cada hito por edad cronológica, analizaremos la incorporación histórica del anticuerpo monoclonal nirsevimab contra el virus respiratorio sincicial y fijaremos las contraindicaciones reales versus las falsas contraindicaciones. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Cronología inmunológica',
      title: 'Cronología de Protección Inmunológica en la Infancia',
      nodes: [
        { id: 'neo', col: 0, row: 1, k: 'start', t: 'Recién nacido', s: 'BCG intradérmica y Hepatitis B monovalente en las primeras veinticuatro horas' },
        { id: 'pri', col: 1, row: 1, k: 'mech', t: 'Dos, cuatro y seis meses', s: 'Hexavalente inyectable (DTPa-Hib-HB-VIP) y Neumococo conjugado en muslos' },
        { id: 'año', col: 2, row: 1, k: 'effect', t: 'Hito del año (12 meses)', s: 'Tresvírica viva (SRP), Meningocócica ACWY y refuerzo de Neumococo' },
        { id: 'die', col: 3, row: 1, k: 'good', t: 'Dieciocho meses', s: 'Cuarta dosis de Hexavalente, Hepatitis A inactivada y primera dosis de Varicela' },
      ],
      edges: [
        { from: 'neo', to: 'pri', label: 'dos meses' },
        { from: 'pri', to: 'año', label: 'doce meses' },
        { from: 'año', to: 'die', label: 'dieciocho meses' },
      ],
      steps: [
        {
          show: ['neo', 'pri'],
          note: 'Inmunización temprana contra patógenos invasores letales',
          say: 'La protección comienza en la maternidad con las vacunas de tuberculosis y hepatitis B, continuando a los dos, cuatro y seis meses con la vacuna hexavalente acelular y el antígeno neumocócico para proteger las vías respiratorias y el torrente sanguíneo.',
        },
        {
          show: ['año', 'die'],
          note: 'Consolidación con virus atenuados y refuerzos bacterianos',
          say: 'Al cumplir el año de vida se introducen los virus vivos atenuados de la tresvírica junto al meningococo conjugado, y a los dieciocho meses se refuerza la hexavalente completando la protección con hepatitis A y la primera dosis de varicela.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Recién nacido',
      title: 'Inmunización en la Maternidad: Vacunas BCG y Hepatitis B',
      cards: [
        {
          title: 'Vacuna BCG Intradérmica',
          tag: 'Prevención de formas graves de TBC',
          kind: 'key',
          items: [
            {
              t: 'Administración intradérmica estricta en brazo izquierdo',
              d: 'Dosis única que previene formas diseminadas meníngea y miliar de tuberculosis infantil',
              say: 'La vacuna de bacilo de Calmette Guerin se inocula por vía intradérmica estricta en el deltoides izquierdo antes del alta de la maternidad, con el objetivo de prevenir la meningitis tuberculosa y la tuberculosis miliar.',
            },
            {
              t: 'Requisito de peso mínimo de dos mil gramos',
              d: 'Contraindicada si el recién nacido pesa menos de 2.000 g o si presenta inmunodeficiencia conocida',
              say: 'Un requisito reglamentario indispensable para administrar la vacuna contra tuberculosis es que el recién nacido alcance un peso mínimo de dos mil gramos; en prematuros con peso menor se difiere hasta lograr dicho umbral.',
            },
          ],
        },
        {
          title: 'Vacuna Hepatitis B Monovalente Neonatal',
          tag: 'Corte de transmisión vertical perinatal',
          kind: 'criteria',
          items: [
            {
              t: 'Primeras doce a veinticuatro horas de vida',
              d: 'Inyección intramuscular en cara anterolateral del muslo para evitar infección crónica',
              say: 'La primera dosis de vacuna monovalente contra la hepatitis B debe inyectarse en el muslo durante las primeras doce a veinticuatro horas de vida, bloqueando la transmisión vertical del virus en el canal de parto.',
            },
            {
              t: 'Profilaxis en hijos de madres con antígeno de superficie positivo',
              d: 'Asociar inmunoglobulina específica antihepatitis B dentro de las primeras doce horas',
              say: 'Si la madre es portadora confirmada de antígeno de superficie positivo para hepatitis B, se debe administrar simultáneamente la vacuna y la inmunoglobulina específica en sitios anatómicos separados antes de doce horas.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Lactante menor',
      title: 'Inmunización a los 2, 4 y 6 Meses: Vacunas Hexavalente y Neumococo',
      cards: [
        {
          title: 'Vacuna Hexavalente Acelular (DTPa-Hib-HB-VIP)',
          tag: 'Dosis a los dos, cuatro y seis meses',
          kind: 'key',
          items: [
            {
              t: 'Protección combinada contra seis enfermedades',
              d: 'Difteria, Tétanos, Tos convulsiva acelular, Haemophilus influenzae b, Hepatitis B y Polio inactivada',
              say: 'La vacuna hexavalente inyectable protege de forma combinada contra difteria, tétanos, pertussis acelular, influenza tipo b, hepatitis B y poliomielitis inactivada, evitando reacciones adversas neurológicas severas.',
            },
            {
              t: 'Eliminación del virus polio oral vivo atenuado',
              d: 'Uso exclusivo de virus inactivado inyectable (VIP); erradicación de polio vacunal',
              say: 'En Chile la vacuna polio oral viva fue completamente sustituida por el virus inactivado inyectable dentro de la formulación hexavalente, erradicando el riesgo de parálisis flácida asociada a la vacuna.',
            },
          ],
        },
        {
          title: 'Vacuna Neumocócica Conjugada',
          tag: 'Dosis a los dos y cuatro meses',
          kind: 'criteria',
          items: [
            {
              t: 'Protección contra serotipos invasores de neumococo',
              d: 'Reduce drásticamente la tasa de bacteriemias ocultas, meningitis bacteriana y neumonías lobares',
              say: 'La vacuna neumocócica conjugada se administra a los dos y cuatro meses de vida, reduciendo en forma muy significativa las bacteriemias invasivas, las meningitis agudas y las consolidaciones pulmonares bacterianas.',
            },
            {
              t: 'Esquema especial en prematuros extremos',
              d: 'Prematuros de menos de 32 semanas reciben dosis adicional de neumococo a los 6 meses (esquema tres más uno)',
              say: 'En prematuros extremos nacidos con menos de treinta y dos semanas de gestación se incorpora una tercera dosis primaria de vacuna antineumocócica a los seis meses para garantizar una respuesta humoral suficiente.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Hito del primer año',
      title: 'El Hito de los 12 Meses: Tresvírica, Meningococo ACWY y Neumococo',
      cards: [
        {
          title: 'Vacuna Tresvírica (SRP) y Meningococo ACWY',
          tag: 'Virus vivos atenuados y polisacáridos conjugados',
          kind: 'alert',
          items: [
            {
              t: 'Tresvírica subcutánea (Sarampión, Rubéola y Parotiditis)',
              d: 'Primera dosis de virus vivos atenuados; requiere un sistema inmune celular competente',
              say: 'Al cumplir doce meses se administra por vía subcutánea la vacuna tresvírica, compuesta por virus vivos atenuados contra sarampión, rubéola y parotiditis, demandando indemnidad del sistema inmune celular.',
            },
            {
              t: 'Vacuna Meningocócica Conjugada Tetravalente',
              d: 'Protege contra serogrupos A, C, W ciento treinta y cinco e Y de Neisseria meningitidis',
              say: 'En el mismo control del año se inyecta la vacuna meningocócica conjugada que cubre los serogrupos A, C, W ciento treinta y cinco e Y, confiriendo protección contra la letal enfermedad meningocócica invasora.',
            },
          ],
        },
        {
          title: 'Refuerzo de Vacuna Antineumocócica Conjugada',
          tag: 'Consolidación de títulos séricos',
          kind: 'key',
          items: [
            {
              t: 'Dosis de refuerzo en extremidad contralateral',
              d: 'Se administra a los doce meses para prolongar la memoria inmunológica bacteriana',
              say: 'La tercera dosis o refuerzo de la vacuna antineumocócica conjugada se aplica también al año de vida en el muslo contralateral, consolidando la memoria inmunitaria de largo plazo frente a infecciones invasivas.',
            },
            {
              t: 'Regla mnemotécnica del año de vida',
              d: 'A los 12 meses: Tresvírica más Meningococo más Neumococo; nunca colocar varicela ni hexavalente',
              say: 'Fijen en su memoria esta tríada del año de vida: tresvírica, meningocócica conjugada y neumococo. Recuerden que la varicela y el refuerzo de hexavalente no corresponden al año sino a los dieciocho meses.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Hito del año y medio',
      title: 'El Hito de los 18 Meses: Hexavalente, Hepatitis A y Varicela',
      cards: [
        {
          title: 'Refuerzo de Hexavalente y Vacuna Hepatitis A',
          tag: 'Refuerzo bacteriano e inmunidad entérica',
          kind: 'key',
          items: [
            {
              t: 'Cuarta dosis de Vacuna Hexavalente Acelular',
              d: 'Refuerzo intramuscular para mantener títulos elevados de toxoides y anticuerpos bacterianos',
              say: 'A los dieciocho meses el niño recibe la cuarta dosis de la vacuna hexavalente acelular por vía intramuscular, asegurando títulos de anticuerpos protectores que perduran hasta el ingreso escolar.',
            },
            {
              t: 'Vacuna contra Hepatitis A inactivada monovalente',
              d: 'Dosis única que previene la transmisión fecal-oral en lactantes que asisten a salas cuna',
              say: 'Se administra además la vacuna monovalente contra la hepatitis A formulada con virus inactivado, cortando la cadena de transmisión fecal oral en niños que inician su socialización en jardines y salas cuna.',
            },
          ],
        },
        {
          title: 'Primera Dosis de Vacuna contra Varicela',
          tag: 'Virus vivo atenuado por vía subcutánea',
          kind: 'alert',
          items: [
            {
              t: 'Inicio de la protección contra el virus varicela zóster',
              d: 'Primera dosis a los 18 meses; la segunda dosis de refuerzo se administra a los 36 meses (3 años)',
              say: 'A los dieciocho meses se inocula la primera dosis de vacuna viva atenuada contra la varicela por vía subcutánea, programándose formalmente su segunda dosis de refuerzo a los tres años cumplidos.',
            },
            {
              t: 'Prevención de complicaciones cutáneas y neurológicas',
              d: 'Disminuye sobreinfecciones bacterianas de piel, ataxia cerebelosa y encefalitis por varicela',
              say: 'La vacunación universal contra varicela ha reducido dramáticamente las hospitalizaciones pediátricas secundarias a sobreinfecciones cutáneas por estreptococo del grupo A, neumonías y cerebelitis.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Calendario escolar',
      title: 'Vacunación Escolar: Primero, Cuarto, Quinto y Octavo Básico',
      cards: [
        {
          title: 'Primero Básico (6 Años) y Octavo Básico (13 Años)',
          tag: 'Refuerzo de virus vivos y toxoides acelulares',
          kind: 'criteria',
          items: [
            {
              t: 'Primero Básico: Segunda dosis de Tresvírica y dTpa acelular',
              d: 'Consolida eliminación de sarampión y rubéola; refuerza inmunidad contra tos convulsiva y tétanos',
              say: 'Al ingresar a primero básico los escolares reciben la segunda dosis de la vacuna tresvírica junto al toxoide diftérico y tos convulsiva acelular en formulación de niño mayor.',
            },
            {
              t: 'Octavo Básico: Refuerzo de toxoide dTpa',
              d: 'Dosis de refuerzo en adolescentes para prolongar la protección contra tétanos y pertussis',
              say: 'En octavo básico se repite la dosis de refuerzo del toxoide diftérico tetánico con componente acelular de pertussis para sostener la inmunidad comunitaria durante la adolescencia.',
            },
          ],
        },
        {
          title: 'Cuarto y Quinto Básico: Virus Papiloma Humano (VPH)',
          tag: 'Vacuna nonavalente Gardasil 9 en niñas y niños',
          kind: 'key',
          items: [
            {
              t: 'Esquema de dos dosis en niñas y niños escolares',
              d: 'Primera dosis en 4.° básico y segunda dosis en 5.° básico para cobertura de genotipos oncogénicos',
              say: 'En cuarto y quinto básico se administra la vacuna nonavalente contra el virus del papiloma humano a todas las niñas y niños, protegiendo contra los genotipos oncogénicos dieciséis y dieciocho y verrugas genitales.',
            },
            {
              t: 'Estrategia preventiva antes del inicio de actividad sexual',
              d: 'Máxima eficacia inmunogénica al administrarse en preadolescentes vírgenes al virus',
              say: 'La aplicación en la etapa escolar asegura que la población adquiera una inmunidad mucosal sólida antes del inicio de las relaciones sexuales, previniendo cánceres cervicouterinos, anales y orofaríngeos.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Innovación sanitaria histórica',
      title: 'Anticuerpo Monoclonal Nirsevimab contra Virus Respiratorio Sincicial',
      cards: [
        {
          title: 'Mecanismo de Inmunización Pasiva',
          tag: 'No es una vacuna: es un anticuerpo monoclonal',
          kind: 'key',
          items: [
            {
              t: 'Anticuerpo monoclonal IgG1 humanizado recombinante',
              d: 'Bloquea de forma directa y potente la proteína F de fusión del virus respiratorio sincicial',
              say: 'Nirsevimab no es una vacuna activa sino un anticuerpo monoclonal IgG uno humanizado que actúa por inmunización pasiva, neutralizando de manera directa la proteína de fusión del virus sincicial.',
            },
            {
              t: 'Vida media extendida que cubre toda la temporada invernal',
              d: 'Una sola inyección intramuscular confiere protección inmediata durante al menos cinco a seis meses',
              say: 'Gracias a modificaciones en su región constante, este anticuerpo posee una vida media extendida de varios meses, ofreciendo protección inmediata y continua durante toda la temporada de circulación viral.',
            },
          ],
        },
        {
          title: 'Población Objetivo y Logro Sanitario en Chile',
          tag: 'Recién nacidos y lactantes menores de 6 meses',
          kind: 'criteria',
          items: [
            {
              t: 'Administración universal a recién nacidos y lactantes',
              d: 'Dosis única intramuscular antes del alta en maternidades y en CESFAM para lactantes bajo 6 meses',
              say: 'Chile fue pionero en Latinoamérica al implementar la administración universal de nirsevimab en todas las maternidades a los recién nacidos y lactantes menores de seis meses que enfrentan su primer invierno.',
            },
            {
              t: 'Impacto epidemiológico masivo',
              d: 'Reducción de más del 80% en hospitalizaciones y prácticamente cero mortalidad por bronquiolitis VRS',
              say: 'Esta medida logró una reducción superior al ochenta por ciento en las hospitalizaciones pediátricas por bronquiolitis grave y colapso de camas críticas durante la campaña de invierno.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Seguridad en vacunación',
      title: 'Contraindicaciones Reales: Vacunas Vivas Atenuadas',
      cards: [
        {
          title: 'Poblaciones con Contraindicación Absoluta',
          tag: 'Inmunodeficiencias celulares y quimioterapia',
          kind: 'alert',
          items: [
            {
              t: 'Inmunodeficiencias primarias y quimioterapia oncológica',
              d: 'Riesgo inminente de replicación descontrolada con enfermedad vacunal diseminada potencialmente letal',
              say: 'Las vacunas de virus vivos atenuados como tresvírica, varicela y bacilo de Calmette Guerin están terminantemente prohibidas en inmunodeficiencias celulares severas o quimioterapia por riesgo de infección vacunal letal.',
            },
            {
              t: 'Corticoterapia sistémica a dosis altas prolongadas',
              d: 'Uso de prednisona a 2 mg/kg/día por más de 14 días contraindica temporalmente los virus vivos',
              say: 'El uso de corticoides sistémicos a dosis iguales o superiores a dos miligramos por kilo al día de prednisona por más de catorce días contraindica de manera transitoria la administración de virus atenuados.',
            },
          ],
        },
        {
          title: 'Embarazo y Otras Contraindicaciones Específicas',
          tag: 'Teratogénesis teórica y reacciones anafilácticas',
          kind: 'alert',
          items: [
            {
              t: 'Embarazo contraindica vacunas de virus vivos',
              d: 'Riesgo potencial de infección transplacentaria fetal; administrar vacunas vivas en el puerperio',
              say: 'El embarazo constituye una contraindicación formal para recibir vacunas vivas atenuadas por el riesgo teórico de viremia congénita, recomendándose inmunizar en el puerperio inmediato.',
            },
            {
              t: 'Anafilaxia previa confirmada a la misma vacuna',
              d: 'Reacción anafiláctica grave previa es contraindicación absoluta para futuras dosis del mismo producto',
              say: 'El antecedente fidedigno de una reacción anafiláctica severa con compromiso respiratorio o hemodinámico contraindica de por vida la readministración de ese inmunógeno específico.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Desmitificando barreras',
      title: 'Falsas Contraindicaciones Clásicas en el Examen EUNACOM',
      cards: [
        {
          title: 'Enfermedades Intercurrentes Menores',
          tag: 'Causa número uno de oportunidades perdidas',
          kind: 'criteria',
          items: [
            {
              t: 'Infección respiratoria alta o diarrea leve sin fiebre alta',
              d: 'Resfrío común, coriza, tos leve o febrícula menor a 38.5 grados NO contraindican la vacunación',
              say: 'Un catarro común, congestión nasal, diarrea leve o temperatura menor a treinta y ocho coma cinco grados jamás son motivos médicos para suspender una vacuna; diferir la cita genera desprotección injustificada.',
            },
            {
              t: 'Uso concomitante de antibióticos orales',
              d: 'El tratamiento antimicrobiano en curso no interfiere con la síntesis de anticuerpos vacunales',
              say: 'Estar recibiendo antibióticos orales por una otitis o amigdalitis no altera en absoluto la respuesta humoral a las vacunas y no constituye una contraindicación para vacunar al paciente.',
            },
          ],
        },
        {
          title: 'Alergias Alimentarias y Nacimiento Prematuro',
          tag: 'Mitos frecuentes en atención primaria',
          kind: 'key',
          items: [
            {
              t: 'Alergia al huevo y vacuna tresvírica',
              d: 'La vacuna Tresvírica actual se cultiva en fibroblastos embrionarios y es segura sin pruebas previas',
              say: 'La supuesta contraindicación de la tresvírica por alergia al huevo es un mito desmentido; la vacuna se cultiva en células de embrión de pollo y puede inocularse con seguridad en atención primaria.',
            },
            {
              t: 'Prematuros se vacunan por edad cronológica real',
              d: 'Se utiliza la edad desde el parto; nunca calcular el calendario por edad gestacional corregida',
              say: 'Graben esta regla docente de oro: los prematuros se vacunan rigurosamente según su edad cronológica desde el nacimiento, sin aplicar bajo ninguna circunstancia la corrección de edad gestacional.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Resumen ministerial',
      title: 'Calendario Oficial de Vacunación Infantil PNI Chile',
      head: ['Edad Cronológica', 'Vacunas Administradas', 'Vía de Administración', 'Tipo de Inmunógeno'],
      rows: [
        {
          cells: ['Recién Nacido', 'BCG más Hepatitis B monovalente', 'Intradérmica y muscular', 'Viva atenuada (BCG) y recombinante'],
          say: 'En el recién nacido se administra la vacuna BCG por vía intradérmica para formas miliares y la primera dosis de hepatitis B monovalente intramuscular profunda en el muslo.',
        },
        {
          cells: ['Dos y Cuatro Meses', 'Hexavalente más Neumococo conjugado', 'Intramuscular profunda', 'Inactivadas acelulares y conjugadas'],
          say: 'A los dos y cuatro meses se inyecta la vacuna hexavalente acelular y la vacuna antineumocócica conjugada en extremidades inferiores separadas para inducir títulos bacterianos robustos.',
        },
        {
          cells: ['Seis Meses', 'Tercera dosis de Hexavalente acelular', 'Intramuscular en muslo', 'Inactivada acelular bacteriana y viral'],
          say: 'A los seis meses corresponde la tercera dosis de la vacuna hexavalente acelular, completando el esquema primario del lactante contra seis patógenos invasores prevalentes.',
        },
        {
          cells: ['Doce Meses (1 Año)', 'Tresvírica, Meningococo ACWY y Neumococo', 'Subcutánea e intramuscular', 'Viva atenuada (SRP) y conjugadas'],
          say: 'Al año de vida se aplica la tresvírica de virus vivos atenuados por vía subcutánea junto a las vacunas conjugadas contra meningococo tetravalente y el refuerzo de neumococo.',
        },
        {
          cells: ['Dieciocho Meses', 'Hexavalente, Hepatitis A y Varicela', 'Intramuscular y subcutánea', 'Inactivadas y viva atenuada (Varicela)'],
          say: 'A los dieciocho meses se refuerza la hexavalente intramuscularmente y se aplican la vacuna de hepatitis A inactivada y la primera dosis de varicela viva atenuada.',
        },
        {
          cells: ['Tres Años y Escolar', 'Varicela segunda dosis, Tresvírica y dTpa', 'Subcutánea e intramuscular', 'Viva atenuada y toxoides inactivados'],
          say: 'A los tres años se administra la segunda dosis de varicela, y en la etapa escolar se completan los refuerzos de tresvírica, virus papiloma y toxoide diftérico tetánico acelular.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de vacunación',
      title: 'Algoritmo de Toma de Decisiones y Seguridad en Vacunación Pediátrica',
      say: 'Examinemos el algoritmo clínico para verificar la elegibilidad vacunal, identificar contraindicaciones reales y aplicar los esquemas en atención primaria.',
    },

    {
      type: 'quiz',
      kicker: 'Banco EUNACOM · Caso representativo',
      title: 'Vacunas Obligatorias del Hito de los 12 Meses',
      stem: 'Un lactante de 12 meses acude al vacunatorio del CESFAM con su carné de salud al día habiendo recibido todas sus vacunas hasta los 6 meses. La madre consulta cuáles son las vacunas que le corresponde recibir en este control.',
      question: '¿Cuáles son las vacunas que le corresponde administrar según el PNI chileno?',
      options: [
        { letter: 'A', text: 'Hexavalente, Hepatitis A y Varicela' },
        { letter: 'B', text: 'Tresvírica, Meningocócica conjugada ACWY y refuerzo Neumocócica conjugada' },
        { letter: 'C', text: 'Tresvírica, Varicela y Hexavalente acelular' },
        { letter: 'D', text: 'Neumocócica conjugada, Hepatitis A y Polio oral bivalente' },
        { letter: 'E', text: 'Meningocócica ACWY, Varicela y Hepatitis B monovalente' },
      ],
      correct: 'B',
      explanation: 'En el Programa Nacional de Inmunizaciones (PNI) de Chile, el hito de los 12 meses de vida contempla exactamente tres vacunas obligatorias: 1) Tresvírica (SRP: sarampión, rubéola y parotiditis, de virus vivos atenuados), 2) Meningocócica conjugada tetravalente contra serogrupos A, C, W-135 e Y, y 3) Refuerzo de Neumocócica conjugada. La Hexavalente (4.ª dosis), la Hepatitis A y la Varicela corresponden al hito de los 18 meses.',
      say: {
        stem: 'Lactante de doce meses que acude al vacunatorio con su calendario completo hasta los seis meses para recibir sus vacunas del año.',
        question: '¿Cuáles son las vacunas que le corresponde administrar según el calendario ministerial chileno?',
        options: 'La opción A propone hexavalente, hepatitis A y varicela. La B tresvírica, meningocócica conjugada y refuerzo neumocócico. La C tresvírica, varicela y hexavalente. La D polio oral y hepatitis A. La E meningocócica y varicela. Analiza cada hito.',
        answer: 'La respuesta correcta es la B. A los doce meses corresponden exactamente tresvírica, meningocócica tetravalente y refuerzo neumocócico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco EUNACOM · Caso representativo',
      title: 'Contraindicación Absoluta de Vacunas en Paciente Inmunodeprimido',
      stem: 'Un niño de 3 años en tratamiento activo con quimioterapia intensa por leucemia linfoblástica aguda es llevado al CESFAM por su madre. Ella refiere que su hijo no tiene puestas las vacunas del año y medio y consulta si pueden administrárselas hoy.',
      question: '¿Cuál de las siguientes vacunas está ABSOLUTAMENTE CONTRAINDICADA en este paciente?',
      options: [
        { letter: 'A', text: 'Vacuna Antineumocócica conjugada' },
        { letter: 'B', text: 'Vacuna contra Hepatitis A inactivada' },
        { letter: 'C', text: 'Vacuna contra la Varicela o Tresvírica' },
        { letter: 'D', text: 'Vacuna Hexavalente acelular' },
        { letter: 'E', text: 'Vacuna contra la Influenza estacional inactivada' },
      ],
      correct: 'C',
      explanation: 'Las vacunas de microorganismos vivos atenuados (Varicela, Tresvírica SRP, BCG y Fiebre Amarilla) están ABSOLUTAMENTE CONTRAINDICADAS en pacientes con inmunodeficiencias congénitas o adquiridas graves y en aquellos bajo terapia inmunosupresora citostática o quimioterapia, debido al riesgo inminente de replicación descontrolada del patógeno vacunal con desarrollo de enfermedad sistémica invasiva potencialmente letal. Las vacunas inactivadas, de toxoides o conjugadas (Neumococo, Hepatitis A, Hexavalente) son seguras, aunque pueden tener menor inmunogenicidad.',
      say: {
        stem: 'Niño de tres años en quimioterapia activa por leucemia que consulta por la administración de vacunas pendientes.',
        question: '¿Cuál de las siguientes vacunas está absolutamente contraindicada en este paciente oncológico?',
        options: 'La opción A propone antineumocócica conjugada. La B hepatitis A inactivada. La C vacuna contra varicela o tresvírica. La D hexavalente acelular. La E influenza inactivada. Recuerda el tipo de inmunógeno.',
        answer: 'La respuesta correcta es la C. Las vacunas vivas atenuadas como varicela o tresvírica están estrictamente prohibidas en inmunosuprimidos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Julio 2018 · Pregunta 101',
      title: 'Manejo de Niño sin Vacuna BCG y Contacto de Tuberculosis',
      stem: 'Un niño de 8 años, inmigrante, que no ha recibido la vacuna BCG en su país de origen, se encuentra asintomático y con examen físico normal. Su padre está siendo tratado con esquema antibiótico para tuberculosis pulmonar en su país de origen.',
      question: '¿Cuál es la conducta inicial más adecuada para este paciente?',
      options: [
        { letter: 'A', text: 'Solicitar prueba cutánea de tuberculina (PPD)' },
        { letter: 'B', text: 'Solicitar radiografía de tórax de control' },
        { letter: 'C', text: 'Solicitar baciloscopías seriadas de expectoración' },
        { letter: 'D', text: 'Iniciar profilaxis primaria inmediata con isoniazida' },
        { letter: 'E', text: 'Administrar la vacuna BCG de inmediato' },
      ],
      correct: 'E',
      explanation: 'En Chile, la vacuna BCG es de administración universal y obligatoria. Ante un niño inmigrante o no vacunado en periodo neonatal que no presenta síntomas respiratorios y tiene examen normal, la normativa ministerial establece la administración de la vacuna BCG para conferir protección contra formas meníngeas y miliares graves. Al encontrarse totalmente asintomático y sin contacto intradomiciliario actual (el padre está en el extranjero), procede la vacunación programada.',
      say: {
        stem: 'Niño de ocho años sin antecedentes de vacuna de tuberculosis que se encuentra asintomático con padre tratado en el extranjero.',
        question: '¿Cuál es la conducta inicial más adecuada para este paciente en el centro de salud?',
        options: 'La opción A plantea prueba de tuberculina. La B radiografía de tórax. La C baciloscopías. La D quimioprofilaxis con isoniazida. La E administrar la vacuna de bacilo de Calmette Guerin. Evalúa la normativa de salud.',
        answer: 'La respuesta correcta es la E. Ante la ausencia de vacuna y sin síntomas actuales de infección, procede administrar la vacuna BCG.',
      },
    },

    {
      type: 'points',
      kicker: 'Puntos clave EUNACOM',
      title: 'Reglas de Oro en Inmunizaciones Pediátricas PNI',
      cards: [
        {
          title: 'Hitos Clave del Calendario Obligatorio',
          tag: 'Doce y dieciocho meses sin confusión',
          kind: 'key',
          items: [
            {
              t: 'Doce meses: Tresvírica, Meningococo y Neumococo',
              d: 'A los 12 meses: SRP, MenACWY y refuerzo neumocócico; nunca colocar varicela ni hexavalente al año',
              say: 'Graben esta tríada del año de vida para el examen: a los doce meses van tresvírica subcutánea, meningocócica conjugada y neumococo; jamás indiquen varicela ni hexavalente a esa edad bajo ninguna circunstancia.',
            },
            {
              t: 'Dieciocho meses: Hexavalente, Hepatitis A y Varicela',
              d: 'Refuerzo de hexavalente acelular, hepatitis A inactivada y primera dosis de varicela',
              say: 'A los dieciocho meses se aplica el cuarto refuerzo de hexavalente, la vacuna contra hepatitis A y la primera dosis de varicela viva atenuada, cuya segunda dosis se posterga a los tres años.',
            },
          ],
        },
        {
          title: 'Seguridad y Falsas Contraindicaciones',
          tag: 'Virus vivos y prematuridad cronológica',
          kind: 'alert',
          items: [
            {
              t: 'Virus vivos prohibidos en inmunodeprimidos',
              d: 'Tresvírica, Varicela y BCG están formalmente contraindicadas en inmunodeficiencias y embarazo',
              say: 'Las vacunas de virus vivos como tresvírica y varicela están terminantemente prohibidas en pacientes inmunosuprimidos o embarazadas, mientras que las inactivadas y toxoides se pueden inocular con absoluta seguridad.',
            },
            {
              t: 'Prematuros se vacunan por edad postnatal',
              d: 'Se utiliza la edad cronológica desde el nacimiento, sin corregir por semanas de prematurez',
              say: 'Recuerden siempre como regla de oro que los prematuros se vacunan de acuerdo con su edad cronológica real desde el nacimiento, sin aplicar nunca la corrección de semanas de gestación. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Toma de Decisiones y Seguridad en Vacunación Pediátrica',
    root: N(
      'start',
      'Lactante o Niño que Consulta en Vacunatorio de Atención Primaria',
      'Revisión minuciosa del carné de vacunación, edad cronológica exacta y estado de salud actual',
      'Iniciamos la evaluación en el vacunatorio cotejando la edad cronológica del niño con su registro de inmunizaciones.',
      [
        'Paciente con calendario al día que asiste a su hito de edad programado',
        N(
          'q',
          '¿Cuál es la edad cronológica que cumple el paciente en este control?',
          'Selección precisa de las vacunas ministeriales asignadas al hito de desarrollo',
          'Determinamos el grupo etario correspondiente para seleccionar los inmunógenos exactos de la norma ministerial.',
          [
            'Cumple doce meses de vida (un año cumplido)',
            N(
              'ok',
              'Administración del Hito de los 12 Meses',
              'Tresvírica subcutánea más Meningocócica ACWY intramuscular más refuerzo Neumocócica conjugada',
              'A los doce meses indicamos tresvírica subcutánea junto a meningocócica tetravalente y refuerzo neumocócico.',
            ),
          ],
          [
            'Cumple dieciocho meses de vida (un año y medio)',
            N(
              'ok',
              'Administración del Hito de los 18 Meses',
              'Hexavalente acelular intramuscular más Hepatitis A inactivada más primera dosis de Varicela',
              'A los dieciocho meses indicamos refuerzo de hexavalente, hepatitis A inactivada y primera dosis de varicela.',
            ),
          ],
        ),
      ],
      [
        'Presencia de condición médica especial, enfermedad aguda o sospecha de inmunodeficiencia',
        N(
          'q',
          '¿Se trata de una inmunodeficiencia severa o de un cuadro infeccioso agudo intercurrente?',
          'Diferenciación estricta entre contraindicaciones reales y falsas contraindicaciones',
          'Evaluamos si existe compromiso inmunológico grave o si corresponde a un cuadro banale que no impide vacunar.',
          [
            'Inmunodeficiencia celular grave, leucemia, quimioterapia o corticoterapia a dosis altas',
            N(
              'alert',
              'Contraindicación Absoluta de Vacunas de Virus Vivos',
              'Suspender Tresvírica, Varicela y BCG · Administrar únicamente vacunas inactivadas, toxoides y conjugadas',
              'Frente a inmunosupresión suspendemos formalmente vacunas vivas y aplicamos solo inmunógenos inactivados.',
            ),
          ],
          [
            'Resfrío común afebril, diarrea leve, uso de antibióticos o nacimiento prematuro',
            N(
              'do',
              'Falsas Contraindicaciones: VACUNAR SIN POSTERGAR',
              'Explicar seguridad a los cuidadores y administrar todas las vacunas por edad cronológica postnatal',
              'Los resfríos leves y antibióticos son falsas contraindicaciones, debiendo vacunar por edad cronológica sin demoras.',
            ),
          ],
        ),
      ],
    ),
  },
};
