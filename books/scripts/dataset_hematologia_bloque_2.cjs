const { flow } = require('./dataset_hematologia_bloque_1.cjs');

const bloque2 = [
  {
    id: 'hem-06',
    classId: 'hem-06',
    tier: 3,
    blockNum: 2,
    blockName: 'Anemias Macrocíticas, Hemolíticas y Hemoglobinopatías',
    topicLabel: '8.6',
    title: 'Anemias Macrocíticas y Megaloblásticas: Déficit de B12 (Anemia Perniciosa/Neuropatía) vs Déficit de Folato',
    perfilCode: '1.08.1.004',
    dx: 'Sospecha', tx: 'Inicial', seg: 'Completo',
    ges: 'No GES directo · Suplementación en Adulto Mayor y Cirugía Bariátrica',
    reconstrucciones: 'EUNACOM Diciembre 2017 (Q#29) · EUNACOM Diciembre 2019 (Q#03) · EUNACOM Julio 2021 (Q#18) · EUNACOM Enero 2023 (Q#25)',
    frecuencia: 'Muy Alta · Diagnóstico diferencial crucial B12 vs folato; riesgo irreversible de dar folato aislado en déficit de B12',
    svg: null, algoTitle: 'Algoritmo Diagnóstico y Terapéutico de la Anemia Megaloblástica',
    diagram: flow('Algoritmo de Anemia Macrocítica: Cobalamina vs Ácido Fólico', [
      { t: 'Anemia Macrocítica (VCM > 100 fL, con frecuencia > 110-120 fL)', s: 'Frotis periférico: Neutrófilos hipersegmentados (pleocariocitos) y macroovalocitos' },
      { k: 'split', q: 'Dosificación Plasmática Simultánea de Vitamina B12 y Ácido Fólico', s: 'Permite identificar la deficiencia vitamínica causal', ll: 'Vitamina B12 Baja (< 200 pg/mL)', rl: 'Ácido Fólico Bajo (< 3-4 ng/mL)',
        left: { t: 'Déficit de Cobalamina (B12)', s: 'Causas: Anemia Perniciosa (anti-FI / anti-células parietales), gastrectomía, veganismo estricto', type: 'acc' },
        right: { t: 'Déficit de Folato (B9)', s: 'Causas: Alcoholismo crónico, desnutrición, embarazo, fármacos antifolatos (metotrexato, fenitoína)', type: 'warn' },
        ll: 'neuropatía presente', rl: 'sin compromiso neurológico' },
      { t: '¡REGLA DE ORO DE SEGURIDAD TERAPÉUTICA!', s: 'NUNCA tratar con Ácido Fólico aislado si la B12 está baja o desconocida -> ¡Empeora la Degeneración Combinada Subaguda!', type: 'crit', al: 'alerta neurológica', from: 'left' },
      { t: 'Esquema de Reposición Intramuscular de Vitamina B12', s: 'Cianocobalamina/Hidroxocobalamina 1.000 ug IM diario x 1 sem -> semanal x 1 mes -> mensual de por vida', type: 'dec', al: 'reposición parenteral', from: 'left' }
    ]),
    contexto: 'Las anemias megaloblásticas se originan por un defecto en la síntesis de ADN con asincronía núcleo-citoplasmática. En el EUNACOM se evalúa de manera recurrente la distinción entre el déficit de cobalamina (vitamina B12) y el de ácido fólico (vitamina B9). La perla diagnóstica reina es que el déficit de B12 produce manifestaciones neurológicas graves (parestesias, pérdida de propiocepción y degeneración combinada subaguda de la médula espinal) y elevación de ácido metilmalónico, mientras que el déficit de folato no produce daño neurológico ni eleva el ácido metilmalónico. Jamás debe administrarse ácido fólico empírico aislado a un paciente con macrocitosis sin descartar déficit de B12.',
    contentSections: [
      {
        subhead: '1. Fisiopatología Molecular de la Megaloblastosis y Absorción de Cobalamina',
        paragraphs: [
          'La vitamina B12 (cobalamina) y el ácido fólico son cofactores indispensables en la síntesis de timidilato, componente esencial del ADN celular. La deficiencia de cualquiera de ellos altera la duplicación del ADN celular pero no interfiere con la síntesis de ARN ni de proteínas citoplasmáticas. Esto genera la "asincronía de maduración núcleo-citoplasmática": células precursoras con núcleos inmaduros y citoplasmas voluminosos hiperhemoglobinizados (megaloblastos), apoptosis intramedular masiva (eritropoyesis ineficaz) con elevación desproporcionada de LDH y bilirrubina indirecta (hemólisis intramedular), y liberación de macroovalocitos y neutrófilos con más de 5 lóbulos nucleares (pleocariocitos) a la sangre periférica.',
          'La vitamina B12 proviene exclusivamente de alimentos de origen animal (carnes, lácteos, huevos). En el estómago, el ácido clorhídrico y la pepsina la liberan de las proteínas alimentarias; luego se une al Factor Intrínseco (FI), glicoproteína secretada por las células parietales gástricas del fundus y cuerpo. El complejo B12-FI transita indemne por el intestino delgado hasta absorberse activamente en los últimos 60 cm del íleon terminal mediado por el receptor cubilina. Las reservas hepáticas de B12 son enormes (3.000 a 5.000 ug), por lo que su agotamiento clínico requiere de 3 a 5 años de cese total de aporte o absorción.',
          'Por el contrario, los folatos provienen de vegetales verdes crudos, legumbres y frutas, se absorben rápidamente en el yeyuno proximal, pero las reservas hepáticas son muy limitadas (5 a 10 mg), agotándose en apenas 3 a 4 meses de privación nutricional (desnutrición, alcoholismo agudo o aumento de demandas en el embarazo).'
        ]
      },
      {
        subhead: '2. Compromiso Neurológico Específico del Déficit de B12: Degeneración Combinada Subaguda',
        paragraphs: [
          'La vitamina B12 es cofactor de dos enzimas celulares: 1) Metionina sintasa (convierte homocisteína en metionina, paso acoplado al metabolismo de folatos); y 2) Metilmalonil-CoA mutasa (convierte metilmalonil-CoA en succinil-CoA en las mitocondrias). En el déficit de B12 se acumulan tanto homocisteína como ácido metilmalónico séricos.',
          'El ácido metilmalónico anómalo y los ácidos grasos de cadena impar se incorporan a las vainas de mielina del sistema nervioso, produciendo una desmielinización progresiva conocida como Degeneración Combinada Subaguda de la Médula Espinal. Esta complicación afecta simétricamente los cordones posteriores (pérdida de la sensibilidad vibratoria [palestesia] y posicional [batiestesia], marcha atáxica sensorial, signo de Romberg positivo y signo de Lhermitte) y las vías piramidales o cordones laterales (espasticidad, hiperreflexia patológica, clonus y signo de Babinski bilateral).',
          'En fases avanzadas genera demencia megaloblástica reversible ("locura megaloblástica") y neuropatía periférica sensitivo-motora simétrica distal. El déficit de ácido fólico NO produce elevación de ácido metilmalónico y NO genera degeneración combinada subaguda ni daño neurológico primario.'
        ]
      },
      {
        subhead: '3. Etiología: Anemia Perniciosa, Cirugía Bariátrica y Fármacos',
        paragraphs: [
          'La Anemia Perniciosa es la causa más común de déficit grave de B12 en adultos mayores. Es una enfermedad autoinmune caracterizada por gastritis crónica atrófica autoinmune (tipo A) con destrucción mediada por linfocitos T de las células parietales del fundus gástrico, lo que conduce a aclorhidria y ausencia total de factor intrínseco. Se asocia a anticuerpos anti-factor intrínseco (altamente específicos, 95%) y anticuerpos anti-células parietales (muy sensibles, 90%), así como a otras patologías autoinmunes (tiroiditis de Hashimoto, vitíligo, diabetes tipo 1). Conlleva un riesgo aumentado (x3) de adenocarcinoma gástrico y tumores carcinoides.',
          'Otras causas mayores de déficit de B12 son la gastrectomía total o en manga, el bypass gástrico en Y de Roux, la enfermedad de Crohn ileal, la resección quirúrgica ileal, la insuficiencia pancreática exocrina y el uso prolongado (> 3-5 años) de metformina o inhibidores de la bomba de protones (omeprazol).',
          'El déficit de folatos se observa predominantemente en el consumo crónico de alcohol (que bloquea la absorción e induce desnutrición), hepatopatías avanzadas, embarazo sin suplementación, anemia hemolítica crónica y fármacos que interfieren con la dihidrofolato reductasa (metotrexato, trimetoprima, pirimetamina) o aceleran su catabolismo (fenitoína, fenobarbital, carbamazepina).'
        ]
      },
      {
        subhead: '4. Diagnóstico de Certeza y la "Trampa Mortal" del Ácido Fólico Aislado',
        paragraphs: [
          'El hemograma muestra macrocitosis llamativa con VCM típicamente entre 110 y 130 fL (pudiendo coexistir pancitopenia leve a moderada por eritropoyesis ineficaz y disgranulopoyesis). La ferritina y el hierro sérico suelen ser normales o elevados por la lisis intramedular de precursores. Los niveles plasmáticos de vitamina B12 (< 200 pg/mL) o de ácido fólico intraeritrocitario (< 150 ng/mL) confirman el déficit. En casos límite (B12 entre 200 y 350 pg/mL), la elevación del ácido metilmalónico sérico (> 0.4 umol/L) sella el déficit celular de cobalamina.',
          'Peligro mortal EUNACOM: si a un paciente con déficit de vitamina B12 no reconocido se le administra erróneamente ácido fólico en monoterapia, el folato "corrige" temporalmente la anemia y el VCM (vence el bloqueo metabólico de la síntesis de timidilato), pero agota los escasos residuos de cobalamina en la vía de la metilmalonil-CoA, desencadenando una progresión fulminante e irreversible de la Degeneración Combinada Subaguda de la médula espinal (paraplejía fláccida-espástica y ataxia irreversible). Nunca debe darse ácido fólico sin asociar vitamina B12 o sin haber descartado fehacientemente su déficit.'
        ]
      },
      {
        subhead: '5. Esquema Terapéutico y Monitorización de la Respuesta',
        paragraphs: [
          'En el déficit de B12 por malabsorción (anemia perniciosa, gastrectomía, resección ileal), la vía de administración obligada es intramuscular: cianocobalamina o hidroxocobalamina en dosis de 1.000 ug IM diarios durante 7 días, luego 1.000 ug semanales por 4 semanas, y posteriormente 1.000 ug mensuales de por vida.',
          'Al iniciar la reposición vitamínica se produce una reactivación mitótica masiva en la médula ósea. En las primeras 48 a 72 horas, la incorporación masiva de potasio hacia el interior de los billones de nuevos eritroblastos puede generar hipopotasemia severa aguda (arritmias cardíacas letales), por lo que el potasio sérico debe monitorizarse y suplementarse si es necesario. A los 5 a 7 días se presenta una intensa crisis reticulocitaria, y la hemoglobina se normaliza en 4 a 6 semanas. Las alteraciones neurológicas revierten si llevan menos de 6 a 12 meses de evolución; el daño establecido con pérdida axonal puede ser permanente.'
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Diferencial: Déficit de Vitamina B12 vs Déficit de Ácido Fólico',
      headers: ['Característica', 'Déficit de Vitamina B12 (Cobalamina)', 'Déficit de Ácido Fólico (Folatos)'],
      rows: [
        ['Fuente Nutricional', 'Exclusivamente origen animal (carnes, huevos, lácteos)', 'Vegetales verdes frescos, legumbres, cítricos, hígado'],
        ['Sitio de Absorción', 'Íleon terminal (unido obligatoriamente a Factor Intrínseco)', 'Yeyuno proximal (absorción activa y pasiva rápida)'],
        ['Tiempo de Agotamiento', '3 a 5 años (reservas hepáticas masivas: 3-5 mg)', '3 a 4 meses (reservas hepáticas escasas: 5-10 mg)'],
        ['Compromiso Neurológico', 'Presente: Degeneración combinada subaguda, ataxia, parestesias', 'Ausente por completo (no causa daño medular mielínico)'],
        ['Ácido Metilmalónico Sérico', 'Marcadamente ELEVADO (Patognomónico del déficit de B12)', 'Estrictamente NORMAL'],
        ['Homocisteína Plasmática', 'Elevada (Metionina sintasa bloqueada)', 'Elevada (Metionina sintasa bloqueada)'],
        ['Etiología Principal', 'Anemia perniciosa, gastrectomía, bypass gástrico, resección ileal', 'Alcoholismo crónico, desnutrición, metotrexato, embarazo'],
        ['Tratamiento Estándar', 'Cianocobalamina 1.000 ug IM (mensual de por vida si malabsorción)', 'Ácido fólico 1 a 5 mg/día vía oral durante 3 a 4 meses']
      ]
    },
    severityTable: {
      title: 'Manifestaciones Clínicas y Progresión Neurológica en el Déficit de B12',
      headers: ['Sistema Afectado', 'Manifestación Semiológica', 'Mecanismo Fisiopatológico', 'Potencial de Reversibilidad'],
      rows: [
        ['Cordones Posteriores Medulares', 'Pérdida de sensibilidad vibratoria y posicional, Romberg (+), ataxia sensitiva', 'Desmielinización de fascículos de Gracilis y Cuneatus', 'Alta si se trata antes de 6 meses; secuelas si es tardío'],
        ['Vías Piramidales (Corticospinal)', 'Hiperreflexia osteotendinosa, Babinski bilateral, marcha espástica', 'Desmielinización de cordones laterales medulares', 'Moderada a baja; exige fisioterapia intensiva'],
        ['Nervios Periféricos', 'Parestesias en "guante y calcetín", ardor en pies, hipoestesia distal', 'Polineuropatía axonal y desmielinizante sensorial', 'Reversible con reposición precoz de cobalamina'],
        ['Corteza Cerebral', 'Apatía, depresión, pérdida de memoria, "locura megaloblástica"', 'Alteración de síntesis de S-adenosilmetionina en SNC', 'Completamente reversible con tratamiento vitamínico'],
        ['Mucosa Gastrointestinal', 'Glositis de Hunter (lengua depapilada dolorosa en "carne cruda")', 'Atrofia epitelial por bloqueo de recambio celular', 'Resuelve rápidamente a los pocos días de terapia']
      ]
    },
    treatmentTable: {
      title: 'Protocolo de Reposición Parenteral de Vitamina B12 y Prevención de Riesgos',
      headers: ['Fase del Tratamiento', 'Esquema y Posología', 'Monitorización Crítica', 'Peligro / Alerta Médica'],
      rows: [
        ['Fase de Carga Inicial', '1.000 ug IM diarios durante 7 días consecutivos', 'Potasio sérico a las 48 horas de iniciado', '¡Hipopotasemia severa por incorporación celular masiva!'],
        ['Fase de Consolidación', '1.000 ug IM semanales durante 4 semanas consecutivas', 'Pico reticulocitario al 5°-7° día; ascenso de Hb', 'Verificar mejoría subjetiva y resolución de glositis'],
        ['Fase de Mantención', '1.000 ug IM mensuales de por vida (en malabsorción permanente)', 'Hemograma y niveles de B12 anuales en control APS', 'No suspender jamás en gastrectomizados o anemia perniciosa'],
        ['Regla de Co-administración', 'Asociar Ácido Fólico 1-5 mg/día tras asegurar dosis de B12', 'Vitamina B12 sérica previa a prescribir folato', 'Folato solo sin B12 causa paraplejía irreversible']
      ]
    },
    vignette: {
      title: 'Caso Clínico: Anemia Macrocítica con Trastorno de la Marcha en Adulto Mayor',
      text: 'Mujer de 74 años con antecedentes de hipotiroidismo y vitíligo, consulta por astenia severa, parestesias progresivas en ambos pies y dificultad para caminar en la oscuridad de 5 meses de evolución. En el examen físico destaca palidez con tinte ictérico flavínico leve, lengua lisa depapilada y brillante, marcha atáxica con signo de Romberg positivo y reflejos rotulianos exaltados con reflejo cutáneo plantar extensor (Babinski) bilateral. Hemograma: Hb 7.1 g/dL, VCM 118 fL, Plaquetas 110.000/uL, Leucocitos 3.200/uL, Reticulocitos 0.4%, LDH 1.200 UI/L, Bilirrubina indirecta 2.3 mg/dL.',
      conducta: 'Pancitopenia megaloblástica con eritropoyesis ineficaz y degeneración combinada subaguda de la médula espinal secundaria a anemia perniciosa (asociada a autoinmunidad tiroidea y vitíligo). Se debe dosificar vitamina B12 y ácido fólico de inmediato, solicitar anticuerpos anti-factor intrínseco y anti-células parietales, e iniciar tratamiento urgente con hidroxocobalamina 1.000 ug IM diarios con monitoreo estricto de kaliemia, contraindicando formalmente el ácido fólico en monoterapia.'
    },
    keyPoints: [
      'El déficit de vitamina B12 produce afectación neurológica (degeneración combinada subaguda); el déficit de folatos NO.',
      'La degeneración combinada subaguda afecta cordones posteriores (propiocepción/vibración) y laterales (Babinski/espasticidad).',
      'El ácido metilmalónico sérico está elevado en el déficit de B12 y es rigurosamente normal en el déficit de ácido fólico.',
      'Peligro de examen: administrar ácido fólico aislado en déficit de B12 empeora irreversiblemente el daño neurológico.',
      'La anemia perniciosa se debe a gastritis atrófica autoinmune con anticuerpos anti-factor intrínseco y riesgo de cáncer gástrico.',
      'La absorción de B12 ocurre en el íleon terminal acoplada al factor intrínseco; el folato se absorbe en el yeyuno proximal.',
      'Al iniciar B12 parenteral debe vigilarse la hipopotasemia aguda por consumo intracelular de potasio en la eritropoyesis.',
      'En pacientes gastrectomizados o con bypass gástrico la suplementación de B12 debe ser profiláctica e indefinida.'
    ],
    questions: [
      {
        stem: 'Hombre de 68 años con antecedentes de gastrectomía total hace 4 años por adenocarcinoma gástrico, consulta por debilidad, inestabilidad de la marcha y hormigueo en ambos pies. El hemograma muestra Hb 8.2 g/dL y VCM 116 fL. En el examen se constata abolición de la sensibilidad vibratoria en tobillos y signo de Romberg positivo. ¿Cuál es la causa más probable de su cuadro?',
        opciones: [
          'A) Déficit de ácido fólico por malabsorción yeyunal',
          'B) Déficit de cobalamina (vitamina B12) por ausencia de factor intrínseco gástrico',
          'C) Deficiencia severa de piridoxina (vitamina B6)',
          'D) Recidiva tumoral peritoneal con compresión radicular difusa',
          'E) Polineuropatía desmielinizante inflamatoria crónica'
        ],
        correcta: 'B',
        explicacion: 'La gastrectomía total extirpa la totalidad de las células parietales gástricas, suprimiendo la secreción de factor intrínseco. Dado que las reservas hepáticas de cobalamina se agotan al cabo de 3 a 5 años, el paciente desarrolla anemia megaloblástica y degeneración combinada subaguda de la médula espinal (pérdida de sensibilidad vibratoria y ataxia propioceptiva por daño de cordones posteriores). Perla. Todo paciente con gastrectomía total o bypass gástrico requiere suplementación con vitamina B12 intramuscular o sublingual de por vida.',
        recTag: 'EUNACOM 2017 · Q#29'
      },
      {
        stem: '¿Cuál de las siguientes pruebas de laboratorio permite diferenciar con absoluta especificidad una anemia megaloblástica por deficiencia de vitamina B12 de una por deficiencia de ácido fólico?',
        opciones: [
          'A) Nivel sérico de homocisteína total',
          'B) Concentración sérica de deshidrogenasa láctica (LDH)',
          'C) Determinación de ácido metilmalónico en plasma u orina',
          'D) Recuento de reticulocitos en sangre periférica',
          'E) Presencia de neutrófilos hipersegmentados en el frotis sanguíneo'
        ],
        correcta: 'C',
        explicacion: 'El ácido metilmalónico requiere exclusivamente de la vitamina B12 (y no del ácido fólico) para su metabolización a succinil-CoA mediante la metilmalonil-CoA mutasa. Por tanto, en el déficit de cobalamina el ácido metilmalónico se encuentra marcadamente elevado, mientras que en el déficit de folato permanece rigurosamente normal. La homocisteína y la LDH se elevan en ambos déficits, y los pleocariocitos aparecen en ambos. Perla. El ácido metilmalónico alto identifica selectivamente el déficit de vitamina B12.',
        recTag: 'EUNACOM 2019 · Q#03'
      },
      {
        stem: 'Paciente de 45 años, alcohólico severo y desnutrido, es ingresado con Hb 8.0 g/dL, VCM 112 fL y frotis con macroovalocitos. No presenta déficit motor ni sensitivo. El médico tratante indica tratamiento inmediato con ácido fólico en dosis altas. ¿Cuál es el riesgo principal de haber indicado esta conducta sin haber dosificado ni administrado vitamina B12?',
        opciones: [
          'A) Crisis hemolítica aguda intravascular por sobrecarga vitamínica',
          'B) Precipitación o agravamiento irreversible del daño neurológico de la médula espinal',
          'C) Falla renal aguda por depósito tubular de cristales de folato',
          'D) Aplasia medular refractaria por inhibición de la dihidrofolato reductasa',
          'E) Hipoglicemia severa por incremento del catabolismo hepático de glucosa'
        ],
        correcta: 'B',
        explicacion: 'El ácido fólico puede corregir la anomalía hematológica (anemia y macrocitosis) al aportar nucleótidos por una vía colateral, pero no frena la desmielinización en el sistema nervioso central. Peor aún, al reactivar el consumo mitótico celular, consume las reservas residuales de vitamina B12, acelerando la degeneración combinada subaguda y provocando daño neurológico permanente e invalidante (ataxia y paraplejía). Perla. Jamás prescribir ácido fólico a ciegas en anemia macrocítica sin haber asegurado niveles normales de B12.',
        recTag: 'EUNACOM 2021 · Q#18'
      },
      {
        stem: '¿Cuál de las siguientes complicaciones metabólicas agudas debe monitorizarse estrechamente durante las primeras 48 a 72 horas del inicio de la reposición intramuscular de vitamina B12 en una anemia megaloblástica severa?',
        opciones: [
          'A) Hipercalcemia sintomática',
          'B) Hipopotasemia severa',
          'C) Hipernatremia con deshidratación celular',
          'D) Acidosis láctica tipo B',
          'E) Hipofosfatemia refractaria con tetania'
        ],
        correcta: 'B',
        explicacion: 'Al administrar cobalamina en un paciente con anemia megaloblástica grave, la médula ósea pasa de un estado de eritropoyesis ineficaz con muerte celular a una proliferación eritroblástica masiva y acelerada. Los millones de nuevos eritrocitos en formación captan ávidamente grandes cantidades de potasio extracelular para su síntesis celular interna, lo que puede provocar una caída brusca y severa del potasio plasmático (hipopotasemia aguda) con riesgo de arritmias ventriculares fatales. Perla. Vigilar y reponer potasio en las primeras 48 horas de tratamiento con vitamina B12 parenteral.',
        recTag: 'EUNACOM 2023 · Q#25'
      }
    ]
  },
  {
    id: 'hem-07',
    classId: 'hem-07',
    tier: 3,
    blockNum: 2,
    blockName: 'Anemias Macrocíticas, Hemolíticas y Hemoglobinopatías',
    topicLabel: '8.7',
    title: 'Anemia Hemolítica Autoinmune (AHAI: Anticuerpos Calientes IgG vs Crioaglutininas IgM) y Test de Coombs Directo',
    perfilCode: '1.08.1.003',
    dx: 'Sospecha', tx: 'Inicial', seg: 'Derivar',
    ges: 'No GES directo · Urgencia Hematológica de Nivel Terciario',
    reconstrucciones: 'EUNACOM Julio 2018 (Q#14) · EUNACOM Julio 2020 (Q#22) · EUNACOM Enero 2022 (Q#17) · EUNACOM Julio 2024 (Q#08)',
    frecuencia: 'Alta · Tríada de hemólisis (ictericia, anemia, orina oscura), Coombs directo, corticoterapia de 1ª línea y rituximab',
    svg: null, algoTitle: 'Algoritmo Diagnóstico y Terapéutico de la Anemia Hemolítica Autoinmune',
    diagram: flow('Algoritmo de Anemia Hemolítica Autoinmune (AHAI)', [
      { t: 'Tríada Hemolítica: Palidez + Ictericia Flavínica + Esplenomegalia', s: 'Laboratorio: Reticulocitosis (IRC > 2%), LDH elevada, Bilirrubina indirecta alta y Haptoglobina indetectable' },
      { k: 'split', q: 'Prueba de Coombs Directa (Prueba de Antiglobulina Directa - PAD)', s: 'Determina si la hemólisis está mediada por autoanticuerpos e identifica el isotipo', ll: 'Coombs Directo Positivo a IgG / Complemento', rl: 'Coombs Directo Negativo',
        left: { t: 'AHAI por Anticuerpos Calientes (80-90%)', s: 'Autoanticuerpos IgG reactivos a 37 °C · Hemólisis extravascular en bazo con Esferocitos en frotis', type: 'acc' },
        right: { t: 'Investigar Causas No Inmunes / Crioaglutininas', s: 'Descartar Microangiopatía (esquistocitos), Esferocitosis familiar, Favismo o Crioaglutininas IgM (reactivas a 4 °C)', type: 'warn' },
        ll: 'anticuerpos calientes', rl: 'crioaglutininas / no inmune' },
      { t: 'Terapia Inmediata de Primera Línea en AHAI Caliente', s: 'Corticoides: Prednisona 1 a 1.5 mg/kg/día VO (o Metilprednisolona EV en crisis grave) · Evitar transfusión si es posible', type: 'dec', al: 'terapia esteroidal', from: 'left' },
      { t: 'Segunda Línea en Caso de Resistencia o Recaída', s: 'Rituximab (anticuerpo anti-CD20) o Esplenectomía electiva con vacunación previa contra encapsulados', type: 'crit', al: 'refractariedad', from: 'left' }
    ]),
    contexto: 'La anemia hemolítica autoinmune (AHAI) representa una de las emergencias médicas más desafiantes en medicina interna. El EUNACOM exige el reconocimiento instantáneo del patrón biológico de hemólisis (reticulocitos altos, hiperbilirrubinemia indirecta, LDH marcadamente elevada y colapso de la haptoglobina plasmática). La Prueba de Coombs Directa es el examen confirmatorio de elección para AHAI por anticuerpos calientes. El médico general debe dominar el inicio precoz de corticoides sistémicos y recordar la máxima advertencia transfusional: las pruebas cruzadas siempre serán incompatibles, por lo que la transfusión de glóbulos rojos se reserva exclusivamente para inestabilidad hemodinámica vital.',
    contentSections: [
      {
        subhead: '1. Fisiopatología Inmunológica: Anticuerpos Calientes vs Crioaglutininas',
        paragraphs: [
          'La destrucción eritrocitaria en la AHAI se debe a la pérdida de tolerancia inmunológica con síntesis de autoanticuerpos dirigidos contra antígenos de la membrana del glóbulo rojo (principalmente el complejo Rh). Se clasifica fisiopatológicamente según el comportamiento térmico del anticuerpo: 1) AHAI por anticuerpos calientes (representa el 80% al 90% de los casos); y 2) Enfermedad por crioaglutininas o anticuerpos fríos (10% al 15%).',
          'En la AHAI por anticuerpos calientes, el autoanticuerpo es de isotipo IgG monomérico y reacciona con máxima afinidad a la temperatura corporal central (37 °C). Los eritrocitos opsonizados con IgG (con o sin fracción C3d del complemento) no se lisan en el torrente sanguíneo, sino que son atrapados al atravesar los cordones de Billroth en la pulpa roja del bazo, donde los macrófagos esplénicos dotados de receptores Fc-gamma fagocitan fragmentos de la membrana celular. El eritrocito pierde superficie celular manteniendo su volumen, transformándose en una esfera densa e inelástica: el microesferocito. Estos esferocitos quedan atrapados y son destruidos selectivamente en el bazo (hemólisis extravascular esplénica). Puede ser idiopática o secundaria a lupus eritematoso sistémico, leucemia linfática crónica (LLC) o fármacos (metildopa, penicilina, cefalosporinas).',
          'En la enfermedad por crioaglutininas, el anticuerpo es una inmunoglobulina IgM pentamérica que se une a los antígenos carbohidratos eritrocitarios (antígeno I/i) a bajas temperaturas (0 a 4 °C) en los lechos vasculares periféricos fríos (acras: dedos, orejas, nariz). La IgM fija ávidamente el complejo C1 del complemento, activando la cascada clásica. Al recircular la sangre a las vísceras centrales a 37 °C, la IgM se desprende, pero el complemento fijado (C3b) induce hemólisis intravascular por el complejo de ataque a membrana (MAC, C5b-9) o hemólisis extravascular hepática mediada por células de Kupffer. Es típica en infecciones por Mycoplasma pneumoniae, mononucleosis por VEB o linfomas de bajo grado.'
        ]
      },
      {
        subhead: '2. Marcadores Biológicos de Hemólisis y Prueba de Coombs Directa',
        paragraphs: [
          'El síndrome hemolítico se expresa por cuatro pilares analíticos cardinales e indispensables: 1) Elevación del Índice Reticulocitario Corregido (> 2.0%), reflejando la respuesta proliferativa de una médula ósea sana ante la hipoxia anémica; 2) Aumento de la Deshidrogenasa Láctica (LDH) plasmática, liberada por la ruptura celular eritrocitaria; 3) Hiperbilirrubinemia de predominio indirecto o no conjugada (habitualmente entre 2 y 5 mg/dL), producto del catabolismo masivo del grupo hemo por la hemooxigenasa; y 4) Colapso o indetectabilidad de la haptoglobina plasmática (< 10 mg/dL), glicoproteína hepática que se une con afinidad estequiométrica a la hemoglobina libre circulante para ser depurada por macrófagos.',
          'La confirmación inmunológica se realiza mediante la Prueba de Coombs Directa (Prueba de Antiglobulina Directa - PAD): detecta anticuerpos (IgG) o fracciones del complemento (C3d) ya fijados in vivo a la membrana de los eritrocitos del paciente. Se mezclan los hematíes lavados del paciente con suero de Coombs (antisuero anti-IgG humana y anti-C3d); la aglutinación positiva macroscópica confirma AHAI. En la forma por anticuerpos calientes, el Coombs directo es positivo para IgG (y en 50% también para C3d). En la forma por crioaglutininas, el Coombs directo es positivo selectivamente para C3d y negativo para IgG (la IgM ya se disoció a 37 °C).'
        ]
      },
      {
        subhead: '3. Cuadro Clínico Comparativo y Signos de Alarma',
        paragraphs: [
          'La AHAI por anticuerpos calientes puede iniciarse de manera brusca con astenia fulminante, taquicardia, dolor lumbar o abdominal y palidez amarillenta cérea (ictericia flavínica, no rubínica ni verdínica). En el 50% de los casos se palpa esplenomegalia leve a moderada por congestión reticuloendotelial. Las orinas pueden tornarse hipercoloreadas por exceso de urobilinógeno, pero no hay coluria verdadera (la bilirrubina indirecta no filtra por el glomérulo). Cuando coexiste una AHAI con una trombocitopenia inmune (PTI) primaria, se configura el Síndrome de Evans, entidad autoinmune grave que asocia hemólisis con diátesis hemorrágica purpúrica.',
          'Por su parte, la enfermedad por crioaglutininas se caracteriza semiológicamente por síntomas acrales desencadenados por la exposición al frío: acrocianosis dolorosa, livedo reticularis y fenómeno de Raynaud en extremidades, pabellones auriculares y punta nasal, originados por la aglutinación mecánica intravascular transitoria de hematíes en la microcirculación fría.'
        ]
      },
      {
        subhead: '4. Protocolo Terapéutico de Primera Línea en APS y Hospital',
        paragraphs: [
          'El pilar terapéutico de primera línea para la AHAI por anticuerpos calientes es la corticoterapia sistémica: prednisona oral en dosis de 1.0 a 1.5 mg/kg/día (o pulsos de metilprednisolona endovenosa 1 g/día por 3 días en crisis hemolíticas fulminantes con descompensación hemodinámica). Los corticoides suprimen la síntesis de autoanticuerpos por linfocitos B y disminuyen la expresión y avidez de los receptores Fc en los macrófagos esplénicos, frenando la destrucción eritrocitaria en el 70-80% de los pacientes al cabo de 7 a 14 días.',
          'Una vez que la hemoglobina se estabiliza y los reticulocitos descienden, la dosis de prednisona debe reducirse de forma extremadamente lenta y progresiva a lo largo de 3 a 6 meses. La suspensión prematura o rápida de esteroides precipita recaídas hemolíticas graves. Siempre debe indicarse profilaxis osteoprotectora (calcio más vitamina D) y protección gástrica.',
          'En contraste cardinal, la AHAI por crioaglutininas NO RESPONDE a corticoides ni a la esplenectomía (la hemólisis ocurre en el hígado y en vasos periféricos). Su manejo radica en evitar estrictamente la exposición al frío, mantener al paciente temperado con mantas y líquidos tibios, y administrar Rituximab en casos graves refractarios.'
        ]
      },
      {
        subhead: '5. Opciones de Segunda Línea y el Dilema de la Transfusión Sanguínea',
        paragraphs: [
          'En pacientes con AHAI por anticuerpos calientes que son corticorrefractarios (falta de respuesta a las 3 semanas), corticodedependientes (recaída al descender de 15-20 mg/día de prednisona) o que presentan contraindicaciones mayores a esteroides, las dos alternativas de segunda línea son: 1) Rituximab (anticuerpo monoclonal anti-CD20, 375 mg/m² semanal por 4 semanas), que ha desplazado a la cirugía por su alta eficacia y seguridad; y 2) Esplenectomía electiva (elimina el sitio primario de destrucción y producción de anticuerpos), la cual exige vacunación profiláctica obligatoria contra neumococo, meningococo y Haemophilus influenzae tipo b al menos 2 semanas antes de la intervención.',
          'Advertencia mayor sobre la transfusión de glóbulos rojos: dado que los autoanticuerpos IgG se dirigen casi siempre contra antígenos paneritrocitarios universales (sistema Rh), la prueba de compatibilidad cruzada in vitro en el banco de sangre resultará positiva ("incompatible") con absolutamente todas las unidades de donantes. La transfusión conlleva riesgo de hemólisis masiva y empeoramiento clínico. Por ello, la regla de oro es: EVITAR la transfusión siempre que sea posible. Solo debe indicarse transfusión ante compromiso vital inminente (shock refractario, ángor inestable, compromiso de conciencia); en ese caso se infunde la unidad "menos incompatible" de forma lenta, bajo monitorización estrecha y previa administración de corticoides endovenosos.'
        ]
      }
    ],
    table: {
      title: 'Comparación Inmunológica y Clínica: AHAI por Anticuerpos Calientes vs Crioaglutininas',
      headers: ['Parámetro', 'AHAI por Anticuerpos Calientes', 'Enfermedad por Crioaglutininas (Fríos)'],
      rows: [
        ['Frecuencia Relativa', '80% a 90% de todos los casos de AHAI', '10% a 15% de los casos'],
        ['Isotipo de Autoanticuerpo', 'IgG monomérico (rara vez IgA)', 'IgM pentamérico fijador de complemento'],
        ['Temperatura Óptima', '37 °C (temperatura corporal central)', '0 °C a 4 °C (temperatura en lechos acrales fríos)'],
        ['Sitio Principal de Lisis', 'Extravascular en Bazo (por macrófagos Fc-gamma)', 'Intravascular periférica y Extravascular en Hígado (C3b)'],
        ['Frotis Sanguíneo', 'Microesferocitos abundantes, policromatofilia', 'Aglutinación de hematíes en pilas ("rouleaux anómalo")'],
        ['Resultado Coombs Directo', 'Positivo para IgG (+/- complemento C3d)', 'Positivo exclusivamente para C3d (IgG negativo)'],
        ['Asociaciones Clínicas', 'Idiopática, LES, LLC, linfomas, fármacos (cefalosporinas)', 'Mycoplasma pneumoniae, VEB (mononucleosis), linfoma B'],
        ['Tratamiento de 1ª Línea', 'Corticoides sistémicos (Prednisona 1-1.5 mg/kg/día)', 'Evitar el frío ambiental estrictamente; Rituximab (No esteroides)']
      ]
    },
    severityTable: {
      title: 'Estratificación de Gravedad y Algoritmo Terapéutico en AHAI Caliente',
      headers: ['Nivel de Severidad', 'Parámetros Clínicos y Laboratorio', 'Intervención de Urgencia', 'Conducta de Soporte'],
      rows: [
        ['Leve / Compensada', 'Hb 9.5-11.0 g/dL, reticulocitosis moderada, asintomático en reposo', 'Prednisona oral 1 mg/kg/día; ácido fólico 5 mg/día', 'Monitoreo ambulatorio semanal en policlínico'],
        ['Moderada', 'Hb 7.5-9.4 g/dL, astenia, taquicardia de esfuerzo, ictericia leve', 'Prednisona oral 1.5 mg/kg/día; reposo relativo', 'Descartar infección desencadenante o neoplasia'],
        ['Grave / Descompensada', 'Hb < 7.0 g/dL, disnea de reposo, dolor torácico, LDH > 1.500 UI/L', 'Hospitalización inmediata; Metilprednisolona EV 1 g/día', 'Monitoreo hemodinámico continuo en UCI/UTI'],
        ['Riesgo Vital Inminente', 'Shock anémico, alteración de conciencia, isquemia miocárdica', 'Metilprednisolona EV + Transfusión unidad "menos incompatible"', 'Infusión ultralenta bajo estricta vigilancia en UCI']
      ]
    },
    treatmentTable: {
      title: 'Escalamiento Farmacológico en la Anemia Hemolítica Autoinmune por IgG',
      headers: ['Línea Terapéutica', 'Fármaco / Procedimiento', 'Dosis y Mecanismo', 'Eficacia y Tiempo de Respuesta'],
      rows: [
        ['Primera Línea Estándar', 'Prednisona vía oral', '1.0 a 1.5 mg/kg/día (disminución lenta en 3-6 meses)', 'Respuesta en 70-80% de casos al cabo de 1 a 2 semanas'],
        ['Primera Línea Urgencia', 'Metilprednisolona endovenosa', 'Pulsos de 500 a 1.000 mg/día EV por 3 días consecutivos', 'Acción rápida en crisis hemolítica aguda descompensada'],
        ['Segunda Línea Monoclonal', 'Rituximab (Anti-CD20)', '375 mg/m² EV semanal por 4 semanas (elimina linfocitos B)', 'Respuesta en 70-90% de corticorrefractarios en 3-6 semanas'],
        ['Segunda Línea Quirúrgica', 'Esplenectomía laparoscópica', 'Resección del bazo (elimina el sitio de hemólisis extravascular)', 'Remisión en 60-70%; exige vacunación contra encapsulados'],
        ['Soporte Hematopoyético', 'Ácido Fólico vía oral', '5 mg/día VO permanente durante la fase hemolítica activa', 'Previene crisis megaloblástica por consumo de folatos']
      ]
    },
    vignette: {
      title: 'Caso Clínico: Crisis Hemolítica Aguda por Anticuerpos Calientes',
      text: 'Mujer de 31 años con diagnóstico reciente de lupus eritematoso sistémico, consulta en urgencias por disnea de reposo, astenia intensa, orinas oscuras tipo coñac e ictericia escleral de 48 horas. Al examen físico: PA 100/60 mmHg, FC 115 lpm, temperatura 37.4 °C, palidez intensa con ictericia conjuntival franca y polo de bazo palpable a 2 cm bajo el reborde costal izquierdo. Hemograma: Hb 5.8 g/dL, Hto 17%, VCM 104 fL, Reticulocitos 9.2%, Leucocitos 11.200/uL, Plaquetas 240.000/uL. Perfil bioquímico: Bilirrubina total 4.8 mg/dL, Bilirrubina indirecta 4.1 mg/dL, LDH 1.340 UI/L, Haptoglobina < 5 mg/dL. El frotis revela abundantes microesferocitos.',
      conducta: 'Anemia hemolítica autoinmune (AHAI) grave por anticuerpos calientes secundaria a LES. Se debe solicitar de inmediato Prueba de Coombs Directa para confirmar IgG/C3d, hospitalizar en unidad de cuidados intermedios, iniciar metilprednisolona endovenosa 1 g/día en pulsos, administrar ácido fólico 5 mg/día y evitar la transfusión sanguínea a menos que se presente shock cardiocirculatorio refractario.'
    },
    keyPoints: [
      'Tríada cardinal de hemólisis: anemia regenerativa (reticulocitos >2%), ictericia flavínica indirecta y LDH elevada.',
      'La haptoglobina colapsada (< 10 mg/dL) es el marcador más sensible de hemólisis intravascular y extravascular masiva.',
      'La Prueba de Coombs Directa positiva para IgG confirma AHAI por anticuerpos calientes (extravascular en bazo).',
      'El tratamiento de primera línea para AHAI por anticuerpos calientes es la corticoterapia sistémica (prednisona 1-1.5 mg/kg/día).',
      'En AHAI caliente todas las unidades de banco de sangre resultan "incompatibles"; solo transfundir ante compromiso vital inminente.',
      'La AHAI por crioaglutininas (IgM / C3d) no responde a corticoides ni esplenectomía; se maneja evitando el frío y con rituximab.',
      'Enfermedad por crioaglutininas se asocia a neumonía por Mycoplasma pneumoniae, virus de Epstein-Barr y linfomas.',
      'El Síndrome de Evans combina anemia hemolítica autoinmune (AHAI) con trombocitopenia inmune primaria (PTI).'
    ],
    questions: [
      {
        stem: 'Mujer de 27 años con antecedentes de lupus eritematoso sistémico consulta por astenia, disnea de esfuerzo e ictericia leve. El laboratorio muestra Hb 7.4 g/dL, reticulocitos 8.5%, bilirrubina indirecta 3.8 mg/dL y LDH 980 UI/L. El frotis sanguíneo evidencia abundantes esferocitos. ¿Cuál es el examen confirmatorio de elección para certificar la causa de este cuadro?',
        opciones: [
          'A) Prueba de fragilidad osmótica eritrocitaria',
          'B) Prueba de Coombs directa (antiglobulina directa)',
          'C) Electroforesis de hemoglobina en medio alcalino',
          'D) Dosificación de glucosa-6-fosfato deshidrogenasa',
          'E) Citometría de flujo para CD55 y CD59'
        ],
        correcta: 'B',
        explicacion: 'La presencia de anemia regenerativa, hiperbilirrubinemia indirecta, elevación de LDH y esferocitos en una paciente lúpica orienta fuertemente a una anemia hemolítica autoinmune (AHAI). La prueba de elección para confirmar el mecanismo inmunomediado es el Test de Coombs Directo (prueba de antiglobulina directa), que detecta autoanticuerpos IgG o complemento fijados sobre los eritrocitos. La fragilidad osmótica diagnostica esferocitosis hereditaria (Coombs negativo). Perla. Esferocitos + Coombs directo (+) = Anemia hemolítica autoinmune.',
        recTag: 'EUNACOM 2018 · Q#14'
      },
      {
        stem: '¿Cuál es el tratamiento farmacológico inicial de elección en un paciente adulto diagnosticado de anemia hemolítica autoinmune por anticuerpos calientes de intensidad moderada?',
        opciones: [
          'A) Esplenectomía laparoscópica de urgencia',
          'B) Corticoides sistémicos vía oral (Prednisona 1 a 1.5 mg/kg/día)',
          'C) Transfusión inmediata de 3 unidades de glóbulos rojos desleucocitados',
          'D) Plasmaféresis terapéutica seriada',
          'E) Ciclofosfamida endovenosa en monoterapia'
        ],
        correcta: 'B',
        explicacion: 'El pilar de primera línea universalmente establecido para la AHAI por anticuerpos calientes son los glucocorticoides sistémicos (prednisona 1 a 1.5 mg/kg/día por vía oral o metilprednisolona EV en crisis grave). Los esteroides frenan el secuestro esplénico de hematíes opsonizados y reducen la producción de autoanticuerpos en el 70-80% de los pacientes. La esplenectomía y el rituximab son tratamientos de segunda línea. Perla. El tratamiento de primera línea de la AHAI caliente es siempre prednisona oral.',
        recTag: 'EUNACOM 2020 · Q#22'
      },
      {
        stem: 'Hombre de 22 años consulta por dolor en manos y coloración azulada de pabellones auriculares y dedos al exponerse al frío invernal. Refiere cuadro respiratorio febril tratado hace 2 semanas. El hemograma muestra anemia moderada y aglutinación de hematíes en el frotis. El test de Coombs directo es positivo exclusivamente para C3d y negativo para IgG. ¿Cuál es el patógeno infeccioso más frecuentemente asociado a este cuadro?',
        opciones: [
          'A) Streptococcus pneumoniae',
          'B) Mycoplasma pneumoniae',
          'C) Staphylococcus aureus',
          'D) Mycobacterium tuberculosis',
          'E) Pseudomonas aeruginosa'
        ],
        correcta: 'B',
        explicacion: 'El cuadro corresponde a una enfermedad por crioaglutininas (AHAI por anticuerpos fríos, IgM) con Coombs directo positivo selectivo para C3d y síntomas acrales inducidos por bajas temperaturas (acrocianosis/Raynaud). La causa infecciosa clásica y paradigmática es la infección respiratoria por Mycoplasma pneumoniae (que induce anticuerpos tipo crioaglutinina anti-I) y el virus de Epstein-Barr. Perla. Crioaglutininas con síntomas acrales tras neumonía atípica se asocian clásicamente a Mycoplasma pneumoniae.',
        recTag: 'EUNACOM 2022 · Q#17'
      },
      {
        stem: 'Un paciente con anemia hemolítica autoinmune por anticuerpos calientes presenta hemoglobina de 6.5 g/dL con disnea de moderados esfuerzos pero estable hemodinámicamente. El banco de sangre informa que todas las unidades de glóbulos rojos analizadas resultan incompatibles en las pruebas cruzadas. ¿Cuál es la conducta más apropiada respecto a la transfusión?',
        opciones: [
          'A) Transfundir inmediatamente 2 unidades de glóbulos rojos sin importar la incompatibilidad',
          'B) Evitar la transfusión sanguínea y mantener el tratamiento con corticoides a dosis plenas',
          'C) Indicar transfusión de plasma fresco congelado en lugar de glóbulos rojos',
          'D) Realizar lavado eritrocitario y transfundir con infusión de adrenalina continua',
          'E) Suspender los corticoides e iniciar plasmaféresis de rescate'
        ],
        correcta: 'B',
        explicacion: 'En la AHAI por anticuerpos calientes los autoanticuerpos IgG se dirigen contra antígenos compartidos por prácticamente todos los eritrocitos humanos, por lo que las pruebas cruzadas siempre serán incompatibles. Debido al alto riesgo de acelerar la hemólisis y generar reacciones transfusionales graves, la transfusión de glóbulos rojos debe evitarse en pacientes clínicamente estables, sosteniéndose el manejo con dosis plenas de corticoides. La transfusión se restringe a situaciones de shock anémico con riesgo inminente de muerte. Perla. En AHAI caliente, evite transfundir si no hay riesgo vital inmediato; los glóbulos rojos transfundidos se destruirán tan rápido como los propios.',
        recTag: 'EUNACOM 2024 · Q#08'
      }
    ]
  },
  {
    id: 'hem-08',
    classId: 'hem-08',
    tier: 2,
    blockNum: 2,
    blockName: 'Anemias Macrocíticas, Hemolíticas y Hemoglobinopatías',
    topicLabel: '8.8',
    title: 'Esferocitosis Hereditaria, Déficit de G6PD (Favismo) y Hemoglobinuria Paroxística Nocturna (HPN)',
    perfilCode: '1.08.1.003',
    dx: 'Sospecha', tx: 'Inicial', seg: 'Derivar',
    ges: 'No GES directo · Genética Médica y Hematología Terciaria',
    reconstrucciones: 'EUNACOM Julio 2019 (Q#38) · EUNACOM Enero 2022 (Q#12)',
    frecuencia: 'Media · Herencia autosómica dominante, cuerpos de Heinz, citometría de flujo CD55/CD59',
    svg: null, algoTitle: 'Enfrentamiento de las Anemias Hemolíticas Corpuscular / Congénitas',
    diagram: flow('Algoritmo de Anemias Hemolíticas Corpuscular (Coombs Negativo)', [
      { t: 'Anemia Hemolítica Regenerativa (IRC > 2%) con Test de Coombs Directo NEGATIVO', s: 'Descartada causa autoinmune · Frotis periférico y anamnesis dirigida son los pilares diagnósticos' },
      { k: 'split', q: 'Frotis Sanguíneo y Gatillante Clínico Específico', s: 'Identificación del defecto intrínseco del glóbulo rojo', ll: 'Esferocitos + Litiasis Biliar Precoz + Esplenomegalia', rl: 'Hemólisis tras Fármacos Oxidantes / Habas',
        left: { t: 'Esferocitosis Hereditaria (Enfermedad de Minkowski-Chauffard)', s: 'Mutación de espectrina/anquirina · Prueba de Fragilidad Osmótica positiva · Terapia definitiva: Esplenectomía', type: 'acc' },
        right: { t: 'Déficit de G6PD (Favismo)', s: 'Herencia ligada al X · Cuerpos de Heinz y células mordidas (degmacitos) · Estrés oxidativo (primaquina, sulfas, habas)', type: 'warn' },
        ll: 'defecto membrana', rl: 'defecto enzimático' },
      { t: 'Sospecha de Hemoglobinuria Paroxística Nocturna (HPN)', s: 'Hemólisis intravascular + Trombosis en sitios inusuales (Budd-Chiari) + Citometría flujo negativa para CD55/CD59', type: 'crit', al: 'defecto anclaje GPI', from: 'left' }
    ]),
    contexto: 'Las anemias hemolíticas corpusculares o intrínsecas se caracterizan por defectos congénitos o adquiridos en la membrana eritrocitaria, en las enzimas metabólicas protectoras o en la hemoglobina, cursando invariablemente con Prueba de Coombs Directa NEGATIVA. El EUNACOM interroga clásicamente: 1) La Esferocitosis Hereditaria (colelitiasis en jóvenes, esplenomegalia y aumento de la CHCM); 2) El Déficit de Glucosa-6-Fosfato Deshidrogenasa (favismo, cuerpos de Heinz tras exposición a sulfas o primaquina); y 3) La Hemoglobinuria Paroxística Nocturna (trombosis venosa profunda en sitios atípicos como venas suprahepáticas o mesentéricas y citometría negativa para CD55/CD59).',
    contentSections: [
      {
        subhead: '1. Esferocitosis Hereditaria (Microesferocitosis Familiar)',
        paragraphs: [
          'Es la anemia hemolítica congénita más frecuente en poblaciones de origen caucásico, transmitida con patrón autosómico dominante en el 75% de los casos. Se produce por mutaciones en genes que codifican proteínas del citoesqueleto eritrocitario vertical (anquirina, espectrina alfa y beta, banda 3 o proteína 4.2), lo que genera pérdida progresiva de la bicapa lipídica de la membrana en cada paso por la microcirculación, transformando el disco bicóncavo en una esfera rígida e inelástica (esferocito).',
          'Clínicamente se manifiesta por la tríada de ictericia neonatal o fluctuante, esplenomegalia (por atrapamiento en cordones de Billroth) y litiasis biliar pigmentaria por cálculos de bilirrubinato de calcio a edades tempranas (< 20-30 años). El hemograma muestra anemia con microesferocitosis marcada y elevación patognomónica de la Concentración de Hemoglobina Corpuscular Media (CHCM > 36 g/dL, debido a la deshidratación globular). El diagnóstico se confirma mediante la Prueba de Fragilidad Osmótica eritrocitaria o la prueba de citometría con 5-maleimida de eosina (EMA). El tratamiento curativo de los síntomas es la esplenectomía electiva (diferida hasta después de los 5 a 6 años de edad, con profilaxis vacunal completa contra bacterias encapsuladas).'
        ]
      },
      {
        subhead: '2. Déficit de Glucosa-6-Fosfato Deshidrogenasa (G6PD / Favismo)',
        paragraphs: [
          'Es la enzimopatía eritrocitaria más prevalente a nivel mundial, transmitida con herencia recesiva ligada al cromosoma X (afecta clínicamente a varones). La enzima G6PD es la única fuente de NADPH en el eritrocito maduro, cofactor esencial para mantener el glutatión en estado reducido y proteger la hemoglobina del estrés oxidativo endógeno y exógeno.',
          'Bajo condiciones basales los pacientes están asintomáticos y sin anemia. Tras la exposición a sustancias oxidantes —como la ingesta de habas frescas (favismo), infecciones bacterianas o virales intercurrentes, o fármacos (primaquina, sulfonamidas, nitrofurantoína, dapsona, ácido nalidíxico)—, el glutatión reducido se agota y la hemoglobina se oxida, precipitándose en forma de agregados insolubles adheridos a la membrana conocidos como Cuerpos de Heinz. Al pasar por el bazo, los macrófagos extraen estos cuerpos de Heinz, generando eritrocitos con muescas o "mordidos" (degmacitos o bite cells), desencadenando hemólisis intravascular aguda con hemoglobinuria. El diagnóstico se confirma midiendo la actividad cuantitativa de G6PD (debe dosificarse 2-3 meses tras la crisis, ya que durante la crisis los hematíes deficientes ya se han lisado y los reticulocitos jóvenes tienen niveles enzimáticos normales).'
        ]
      },
      {
        subhead: '3. Hemoglobinuria Paroxística Nocturna (HPN)',
        paragraphs: [
          'La HPN es un trastorno clonal adquirido de la célula madre hematopoyética pluripotencial debido a una mutación somática en el gen PIGA ligado al cromosoma X. Esta mutación impide la síntesis del anclaje de glicosilfosfatidilinositol (GPI), lo que deja a las células sanguíneas desprovistas de todas las proteínas de membrana fijadas por GPI, destacando el CD55 (factor acelerador de la degradación) y el CD59 (inhibidor del complejo de ataque de membrana).',
          'Sin CD55 ni CD59, los eritrocitos son exquisitamente sensibles a la lisis por el complemento activado. Durante la noche, una ligera hipoventilación fisiológica produce acidosis leve que activa el complemento, desencadenando hemólisis intravascular matutina (orinas oscuras con la primera micción). La HPN cursa con una tríada clínica temible: 1) Anemia hemolítica intravascular con hemosiderinuria y ferropenia por pérdidas urinarias crónicas; 2) Trombosis venosas mayores en sitios inusuales (síndrome de Budd-Chiari por trombosis de venas suprahepáticas, trombosis de la vena porta, mesentérica o senos durales cerebrales); y 3) Hipoplasia o aplasia medular asociada. El estándar de oro diagnóstico es la Citometría de Flujo en sangre periférica demostrando ausencia de CD55 y CD59. El tratamiento de elección en casos graves es el Eculizumab o Ravulizumab (anticuerpos monoclonales contra la proteína C5 del complemento).'
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Diferencial: Esferocitosis Hereditaria vs Déficit de G6PD vs HPN',
      headers: ['Criterio', 'Esferocitosis Hereditaria', 'Déficit de G6PD', 'Hemoglobinuria Paroxística Nocturna'],
      rows: [
        ['Mecanismo Patogénico', 'Defecto citoesqueleto (anquirina/espectrina)', 'Déficit enzimático (defensa antioxidante)', 'Mutación somática gen PIGA (déficit anclaje GPI)'],
        ['Patrón de Herencia', 'Autosómica dominante (75%)', 'Recesiva ligada al cromosoma X', 'Adquirida clonal no hereditaria'],
        ['Hallazgo en Frotis', 'Microesferocitos densos, sin halo central', 'Cuerpos de Heinz y células mordidas (degmacitos)', 'Pancitopenia leve a moderada sin anomalía morfológica'],
        ['Test Confirmatorio', 'Prueba Fragilidad Osmótica / Eosina-5-maleimida', 'Dosificación enzimática cuantitativa de G6PD', 'Citometría de flujo para CD55 y CD59'],
        ['Clave Clínica de Examen', 'Colelitiasis en adolescente + bazo palpable + CHCM ↑', 'Crisis hemolítica tras habas, sulfas o primaquina', 'Hemólisis intravascular + trombosis atípica (Budd-Chiari)'],
        ['Terapia Específica', 'Esplenectomía electiva (posvacunación encapsulados)', 'Evitar oxidantes (habas/fármacos); soporte en crisis', 'Eculizumab (anti-C5) / Trasplante alogénico']
      ]
    },
    vignette: {
      title: 'Caso Clínico: Anemia Hemolítica con Litiasis Biliar en Paciente Joven',
      text: 'Joven de 17 años consulta por dolor cólico en hipocondrio derecho posprandial e ictericia fluctuante. La ecografía abdominal demuestra colelitiasis múltiple microlitiásica y esplenomegalia moderada homogénea. Su padre fue colecistectomizado a los 22 años y requirió esplenectomía. Hemograma: Hb 10.2 g/dL, VCM 79 fL, CHCM 37.2 g/dL (VN 32-36), Reticulocitos 7.5%, Bilirrubina indirecta 3.2 mg/dL, LDH 520 UI/L. El frotis revela abundantes microesferocitos homogéneos. La prueba de Coombs directa es negativa.',
      conducta: 'Esferocitosis hereditaria (autosómica dominante) complicada con colelitiasis pigmentaria por hiperbilirrubinemia crónica. El Coombs directo negativo descarta causa autoinmune y la CHCM elevada sella la sospecha. Se debe confirmar con prueba de fragilidad osmótica y programar colecistectomía asociada a esplenectomía electiva previa inmunización contra neumococo, meningococo y Haemophilus influenzae.'
    },
    keyPoints: [
      'La esferocitosis hereditaria es la causa más común de anemia hemolítica congénita; herencia autosómica dominante.',
      'Tríada de esferocitosis: anemia hemolítica, colelitiasis pigmentaria en jóvenes y esplenomegalia con Coombs negativo.',
      'El aumento de la Concentración de Hemoglobina Corpuscular Media (CHCM > 36 g/dL) es patognomónico de esferocitosis.',
      'El tratamiento curativo de la esferocitosis es la esplenectomía electiva, siempre diferida > 5 años y posvacunación.',
      'Déficit de G6PD: ligado al X, cursa con cuerpos de Heinz y células mordidas tras habas, primaquina o sulfonamidas.',
      'La medición cuantitativa de G6PD debe realizarse varias semanas después de la crisis hemolítica aguda.',
      'La Hemoglobinuria Paroxística Nocturna (HPN) asocia hemólisis intravascular, trombosis en sitios raros (Budd-Chiari) y citometría sin CD55/CD59.',
      'El fármaco de elección en HPN sintomática grave es el eculizumab (anticuerpo monoclonal inhibidor del complemento C5).'
    ],
    questions: [
      {
        stem: 'Un adolescente de 16 años consulta por ictericia recurrente. En sus exámenes se constata Hb 10.8 g/dL, reticulocitos 6%, hiperbilirrubinemia indirecta y CHCM de 37.5 g/dL. El frotis sanguíneo muestra abundantes esferocitos y el test de Coombs directo resulta negativo. Se palpa esplenomegalia y la ecografía muestra litiasis biliar. ¿Cuál es el diagnóstico más probable?',
        opciones: [
          'A) Anemia hemolítica autoinmune por anticuerpos fríos',
          'B) Esferocitosis hereditaria (Minkowski-Chauffard)',
          'C) Déficit congénito de piruvato quinasa',
          'D) Hemoglobinuria paroxística nocturna',
          'E) Talasemia mayor homocigota'
        ],
        correcta: 'B',
        explicacion: 'La asociación de anemia hemolítica con microesferocitos, litiasis biliar en edad juvenil, esplenomegalia, elevación patognomónica de la CHCM (>36 g/dL) y prueba de Coombs directa negativa es diagnóstica de Esferocitosis Hereditaria. Si el Coombs fuera positivo, se trataría de una AHAI por anticuerpos calientes. Perla. Esferocitos + Coombs directo NEGATIVO + CHCM elevada = Esferocitosis hereditaria.',
        recTag: 'EUNACOM 2019 · Q#38'
      },
      {
        stem: 'Hombre de 25 años tratado recientemente con primaquina por malaria vivax presenta 48 horas después astenia, orinas oscuras tipo coluria e ictericia conjuntival franca. El frotis revela cuerpos de Heinz y eritrocitos con aspecto mordido (degmacitos). El test de Coombs directo es negativo. ¿Cuál es el diagnóstico más probable?',
        opciones: [
          'A) Anemia hemolítica microangiopática por SHU',
          'B) Deficiencia de glucosa-6-fosfato deshidrogenasa (G6PD)',
          'C) Púrpura trombocitopénica trombótica (PTT)',
          'D) Aplasia pura de glóbulos rojos por fármacos',
          'E) Intoxicación aguda por paracetamol'
        ],
        correcta: 'B',
        explicacion: 'La exposición a fármacos oxidantes (como la primaquina, sulfas o nitrofurantoína) en un paciente con deficiencia de G6PD provoca oxidación y precipitación de cadenas de hemoglobina (cuerpos de Heinz), que al ser removidos parcialmente por los macrófagos del bazo originan "células mordidas" (degmacitos o bite cells), culminando en hemólisis aguda intravascular con hemoglobinuria y Coombs negativo. Perla. Cuerpos de Heinz + células mordidas tras primaquina o sulfas = Déficit de G6PD.',
        recTag: 'EUNACOM 2022 · Q#12'
      }
    ]
  },
  {
    id: 'hem-09',
    classId: 'hem-09',
    tier: 2,
    blockNum: 2,
    blockName: 'Anemias Macrocíticas, Hemolíticas y Hemoglobinopatías',
    topicLabel: '8.9',
    title: 'Talasemias (Rasgo Beta vs Mayor) y Drepanocitosis / Anemia Falciforme (HbS)',
    perfilCode: '1.08.1.003',
    dx: 'Sospecha', tx: 'Inicial', seg: 'Derivar',
    ges: 'No GES directo · Programa Nacional de Hemoglobinopatías',
    reconstrucciones: 'EUNACOM Diciembre 2018 (Q#35) · EUNACOM Julio 2023 (Q#28)',
    frecuencia: 'Media-Alta · Diagnóstico diferencial microcitosis severa con ferritina normal, crisis vasooclusivas falciformes',
    svg: null, algoTitle: 'Enfrentamiento y Diagnóstico de las Hemoglobinopatías Estructurales y Cuantitativas',
    diagram: flow('Algoritmo de Hemoglobinopatías: Talasemia vs Drepanocitosis', [
      { t: 'Sospecha de Hemoglobinopatía: Microcitosis Extrema con Ferritina Normal O Crisis Dolorosa Oclusiva', s: 'Examen de Confirmación Rector: Electroforesis de Hemoglobina en Sangre (HPLC)' },
      { k: 'split', q: 'Resultado de la Electroforesis de Hemoglobina', s: 'Diferencia defectos cuantitativos (talasemias) de cualitativos (drepanocitosis)', ll: 'Elevación de HbA2 (> 3.5%) y/o HbF', rl: 'Presencia de Hemoglobina S (HbS > 50-80%)',
        left: { t: 'Talasemia Beta (Rasgo Menor)', s: 'Microcitosis intensa (VCM < 70) con eritrocitos normales/altos y RDW normal · ¡No dar hierro oral!', type: 'acc' },
        right: { t: 'Anemia de Células Falciformes (Drepanocitosis)', s: 'Polimerización de HbS en hipoxia -> Eritrocitos en hoz/semiluna -> Crisis vasooclusivas dolorosas', type: 'warn' },
        ll: 'rasgo talasémico', rl: 'drepanocitosis' },
      { t: 'Manejo de Urgencia en Crisis Vasooclusiva Falciforme', s: 'Hidratación EV agresiva + Analgesia opioide potente inmediata + Oxigenoterapia si hipoxemia + Descartar infección (S. pneumoniae)', type: 'crit', al: 'urgencia falciforme', from: 'right' }
    ]),
    contexto: 'Las hemoglobinopatías abarcan las talasemias (defectos cuantitativos en la tasa de síntesis de cadenas de globina alfa o beta) y las hemoglobinopatías estructurales cualitativas como la drepanocitosis (mutación puntual con producción de HbS). En el EUNACOM se evalúa de manera recurrente el reconocimiento del rasgo talasémico menor: una microcitosis desproporcionada para el grado de anemia, con recuento de glóbulos rojos elevado, RDW normal y ferritina normal, donde administrar hierro es un error grave. Por su parte, la anemia de células falciformes se interroga ante crisis vasooclusivas óseas agudas, asplenia funcional y riesgo de sepsis neumocócica fulminante.',
    contentSections: [
      {
        subhead: '1. Talasemia Beta: Rasgo Menor (Heterocigoto) vs Talasemia Mayor (Cooley)',
        paragraphs: [
          'La beta-talasemia se debe a mutaciones en el gen de la beta-globina en el cromosoma 11, lo que conduce a una disminución (beta+) o ausencia total (beta-0) de la síntesis de cadenas beta. El rasgo talasémico menor (portador heterocigoto beta+/beta o beta-0/beta) es asintomático y suele descubrirse incidentalmente en un hemograma de rutina: destaca una anemia microcítica e hipocrómica muy marcada (VCM de 60 a 72 fL) desproporcionada para una hemoglobina normal o solo levemente descendida (10 a 12 g/dL), acompañada de un recuento de eritrocitos NORMAL O ELEVADO (> 5.0 a 5.5 millones/uL), índice de Mentzer ([VCM / Recuento GR] < 13) y RDW típicamente NORMAL. El perfil de hierro es estrictamente normal.',
          'La beta-talasemia mayor o anemia de Cooley (homocigoto beta-0/beta-0) produce ausencia total de cadenas beta, con acumulación de cadenas alfa libres que precipitan e inducen apoptosis de eritroblastos (eritropoyesis ineficaz profunda y hemólisis extrema). Cursa desde el primer año de vida con anemia severa dependiente de transfusiones bimensuales crónicas, hepatoesplenomegalia masiva, facies de ardilla (deformidades óseas craneales por hiperplasia eritroide) y sobrecarga secundaria letal de hierro (hemocromatosis transfusional con cirrosis, miocardiopatía y diabetes broncínea), requiriendo quelantes de hierro (deferoxamina o deferasirox).'
        ]
      },
      {
        subhead: '2. Anemia de Células Falciformes (Drepanocitosis / Hemoglobina S)',
        paragraphs: [
          'La drepanocitosis es una hemoglobinopatía estructural originada por una mutación puntual autosómica recesiva en el gen de la beta-globina: sustitución de ácido glutámico por valina en la posición 6 de la cadena beta (formando la Hemoglobina S o HbS). En situaciones de hipoxia tisular, acidosis o deshidratación, las moléculas desoxigenadas de HbS polimerizan formando fibras rígidas insolubles que distorsionan la arquitectura eritrocitaria en forma de hoz o medialuna (drepanocitos).',
          'Los drepanocitos pierden flexibilidad y ocluyen la microcirculación capilar y poscapilar, gatillando las temidas Crisis Vasooclusivas Dolorosas (episodios de dolor isquémico óseo intolerable en fémur, columna o tórax), Síndrome Torácico Agudo (infiltrados pulmonares con disnea y dolor torácico, principal causa de muerte en adultos falciformes) y priapismo isquémico. Los microinfartos repetidos en la pulpa esplénica durante la infancia generan atrofia y fibrosis progresiva conocida como Autoesplenectomía (asplenia funcional completa hacia los 5-6 años), volviendo al paciente extraordinariamente susceptible a sepsis bacteriana fulminante por gérmenes encapsulados (Streptococcus pneumoniae, Salmonella spp., Haemophilus influenzae).'
        ]
      },
      {
        subhead: '3. Diagnóstico de Certeza y Manejo de Urgencia en APS y Hospital',
        paragraphs: [
          'El examen confirmatorio de certeza para ambas patologías es la Electroforesis de Hemoglobina (mediante cromatografía líquida de alta resolución - HPLC o enfoque isoeléctrico). En el rasgo talasémico beta, la electroforesis demuestra elevación patognomónica de la Hemoglobina A2 (> 3.5%, habitualmente 4% a 7%) y en ocasiones leve aumento de Hb Fetal. En la drepanocitosis homocigota (anemia falciforme HbSS), se detecta un pico mayoritario de HbS (> 70-90%) con ausencia de HbA1.',
          'Manejo de la crisis vasooclusiva falciforme en urgencias: 1) Hidratación endovenosa vigorosa con soluciones cristaloides isotónicas (revierte la hemoconcentración y favorece la despolimerización de la HbS); 2) Analgesia escalonada inmediata con opioides potentes (morfina EV o fentanilo); 3) Oxigenoterapia suplementaria solo si la saturación es < 92%; 4) Tratamiento empírico antibiótico inmediato de infecciones intercurrentes con cefalosporinas de 3ª generación (ceftriaxona para cubrir neumococo); y 5) Terapia preventiva a largo plazo con Hidroxiurea (fármaco que estimula la síntesis de Hemoglobina Fetal [HbF], la cual no polimeriza, reduciendo en más del 50% las crisis dolorosas y el síndrome torácico agudo).'
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Diferencial: Anemia Ferropénica vs Rasgo Talasémico Menor',
      headers: ['Parámetro Analítico', 'Anemia Ferropénica', 'Rasgo Talasémico Beta Menor'],
      rows: [
        ['Volumen Corpuscular Medio (VCM)', 'Disminuido (< 80 fL), proporcional a la anemia', 'Marcadamente disminuido (< 70 fL), desproporcionado'],
        ['Recuento de Glóbulos Rojos', 'Disminuido (< 4.0 millones/uL)', 'Normal o Aumentado (> 5.0 a 5.5 millones/uL)'],
        ['Índice de Mentzer (VCM / Millones GR)', '> 13 (orienta a ferropenia)', '< 13 (orienta fuertemente a talasemia)'],
        ['Amplitud Distribución Eritrocitaria (RDW)', 'Elevada (> 15%, anisocitosis marcada)', 'Normal (11.5 a 14.5%, microcitosis homogénea)'],
        ['Ferritina Sérica', 'Disminuida (< 30 ng/mL)', 'Estrictamente normal o ligeramente aumentada'],
        ['Electroforesis de Hemoglobina', 'Normal (HbA1 97%, HbA2 < 3%)', 'Elevación de Hemoglobina A2 (> 3.5%)'],
        ['Conducta Terapéutica', 'Suplementar con hierro oral y buscar causa sangrado', 'Asesoría genética; ¡Contraindicado dar hierro oral!']
      ]
    },
    vignette: {
      title: 'Caso Clínico: Sospecha de Rasgo Talasémico en Chequeo de Rutina',
      text: 'Hombre de 26 años, asintomático, de ascendencia mediterránea (italiana), se realiza exámenes de medicina preventiva para ingreso laboral. Hemograma: Hb 11.8 g/dL, Hto 36%, VCM 64 fL, HCM 20 pg, Glóbulos rojos 5.8 millones/uL, RDW 12.8% (normal), Plaquetas 230.000/uL, Leucocitos 6.400/uL. El médico general anterior le recetó sulfato ferroso oral por 3 meses; sin embargo, en el control actual el hemograma se mantiene idéntico. Perfil de hierro actual: Ferritina 140 ng/mL (VN 30-200), Saturación de transferrina 32%.',
      conducta: 'Rasgo talasémico beta menor. El paciente presenta microcitosis severa (VCM 64) con recuento de hematíes elevado (índice de Mentzer 64 / 5.8 = 11), RDW normal y reservas de hierro repletadas que no modificaron el cuadro tras suplementación. Se debe suspender el hierro oral de inmediato para evitar sobrecarga marcial yatrogénica y solicitar electroforesis de hemoglobina para confirmar elevación de HbA2 (> 3.5%).'
    },
    keyPoints: [
      'Rasgo talasémico menor: microcitosis extrema (VCM < 70) con GR elevados (>5 mill), RDW normal y ferritina normal.',
      'Índice de Mentzer: VCM / recuento de glóbulos rojos (en millones). Si es < 13 orienta a talasemia; si > 13 a ferropenia.',
      'La confirmación diagnóstica del rasgo talasémico beta se realiza con electroforesis de hemoglobina: HbA2 > 3.5%.',
      '¡Error grave EUNACOM!: recetar hierro a un paciente talasémico genera hemosiderosis secundaria innecesaria.',
      'La drepanocitosis se debe a sustitución de ácido glutámico por valina en la cadena beta (HbS), polimerizando en hipoxia.',
      'Complicaciones de la drepanocitosis: crisis vasooclusivas dolorosas, síndrome torácico agudo y autoesplenectomía.',
      'La asplenia funcional falciforme predispone a infecciones bacterianas mortales por gérmenes encapsulados (neumococo).',
      'La hidroxiurea es el tratamiento modificador de elección en drepanocitosis al inducir la síntesis de Hemoglobina Fetal.'
    ],
    questions: [
      {
        stem: 'Hombre de 30 años asintomático presenta un hemograma de control con Hb 12.0 g/dL, VCM 65 fL, recuento de glóbulos rojos de 5.9 millones/uL y RDW 12.2% (normal). Su perfil de hierro muestra ferritina de 180 ng/mL y saturación de transferrina de 35%. ¿Cuál es el diagnóstico más probable?',
        opciones: [
          'A) Anemia ferropénica en fase latente',
          'B) Rasgo talasémico beta menor',
          'C) Anemia de las enfermedades crónicas',
          'D) Anemia sideroblástica adquirida',
          'E) Poliglobulia secundaria a tabaquismo'
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta una microcitosis muy marcada (VCM 65 fL) desproporcionada para el valor de hemoglobina, asociada a un número elevado de eritrocitos (índice de Mentzer 65/5.9 = 11, menor a 13), con RDW homogéneo y ferritina completamente normal. Este patrón es patognomónico del rasgo talasémico beta menor. El examen confirmatorio es la electroforesis de hemoglobina que revelará HbA2 > 3.5%. Perla. Microcitosis severa con número alto de glóbulos rojos y ferritina normal = Rasgo talasémico.',
        recTag: 'EUNACOM 2018 · Q#35'
      },
      {
        stem: 'Niño de 8 años con diagnóstico de anemia de células falciformes (drepanocitosis homocigota) ingresa al servicio de urgencias por dolor osteoarticular agudo e intolerable en extremidades inferiores y fiebre de 38.5 °C. ¿Cuál es el pilar terapéutico de manejo inicial más prioritario e indispensable en este paciente?',
        opciones: [
          'A) Transfusión masiva de concentrados eritrocitarios hasta alcanzar Hb de 14 g/dL',
          'B) Hidratación endovenosa abundante, analgesia reglada con opioides potentes y cobertura antibiótica empírica',
          'C) Indicación de ácido acetilsalicílico en dosis antiinflamatorias altas y reposo en cama',
          'D) Esplenectomía de urgencia para evitar la retención masiva de drepanocitos',
          'E) Infusión inmediata de eritropoyetina humana recombinante en bolo'
        ],
        correcta: 'B',
        explicacion: 'El manejo de la crisis vasooclusiva falciforme aguda requiere tres pilares simultáneos inmediatos: hidratación endovenosa vigorosa (reduce la osmolaridad plasmática y disminuye la concentración intracelular de HbS desoxigenada frenando la polimerización), analgesia endovenosa precoz y reglada con opioides (morfina), y cobertura antibiótica empírica precoz (por ejemplo ceftriaxona) debido a la asplenia funcional que confiere riesgo inminente de sepsis por Streptococcus pneumoniae. Perla. El tratamiento de la crisis falciforme dolorosa es hidratación EV + analgesia opioide + antibióticos.',
        recTag: 'EUNACOM 2023 · Q#28'
      }
    ]
  },
  {
    id: 'hem-10',
    classId: 'hem-10',
    tier: 2,
    blockNum: 2,
    blockName: 'Anemias Macrocíticas, Hemolíticas y Hemoglobinopatías',
    topicLabel: '8.10',
    title: 'Microangiopatías Trombóticas (MAT): PTT (Déficit ADAMTS13 / Plasmaféresis) vs SHU',
    perfilCode: '1.08.1.003',
    dx: 'Sospecha', tx: 'Inicial', seg: 'Derivar',
    ges: 'No GES directo · Emergencia Médica en Unidad de Paciente Crítico',
    reconstrucciones: 'EUNACOM Diciembre 2019 (Q#42) · EUNACOM Julio 2021 (Q#36)',
    frecuencia: 'Alta · Esquistocitos en frotis, pentada de Moschcowitz, indicación urgente de plasmaféresis',
    svg: null, algoTitle: 'Algoritmo de Urgencia ante Sospecha de Microangiopatía Trombótica (MAT)',
    diagram: flow('Algoritmo de MAT: PTT vs Síndrome Hemolítico Urémico', [
      { t: 'Bíada Diagnóstica de Alarma: Anemia Hemolítica Microangiopática + Trombocitopenia de Consumo', s: 'Frotis Periférico: Esquistocitos obligatorios (> 1%) · Coagulación plasmática (TP y TTPK) NORMAL' },
      { k: 'split', q: 'Diferenciación Clínica: ¿Predominio Neurológico o Renal?', s: 'Orienta de inmediato al subtipo etiológico de MAT', ll: 'PTT (Púrpura Trombocitopénica Trombótica)', rl: 'SHU (Síndrome Hemolítico Urémico Típico)',
        left: { t: 'Déficit Severo de ADAMTS13 (< 10%)', s: 'Adulto joven con síntomas neurológicos fluctuantes (confusión, cefalea) y fiebre · Tratamiento: Plasmaféresis URGENTE', type: 'acc' },
        right: { t: 'Toxina Shiga (E. coli O157:H7 enterororrágica)', s: 'Lactante/niño con pródromo de diarrea disentérica disenteriforme -> Falla renal oligúrica aguda severa', type: 'warn' },
        ll: 'neurológico / adulto', rl: 'renal / pediátrico' },
      { t: '¡CONTRAINDICACIÓN VITAL ABSOLUTA EN MAT!', s: 'NUNCA transfundir plaquetas (salvo sangrado mortal en SNC) -> ¡"Echar leña al fuego", gatilla trombosis masiva!', type: 'crit', al: 'alerta de transfusión', from: 'left' }
    ]),
    contexto: 'Las Microangiopatías Trombóticas (MAT) son emergencias hematológicas de extrema gravedad caracterizadas por la formación de microtrombos plaquetarios en arteriolas y capilares, lo que fragmenta mecánicamente los glóbulos rojos (esquistocitos en frotis) y consume vorazmente las plaquetas. El EUNACOM evalúa: 1) La PTT en adultos (déficit de ADAMTS13, síntomas neurológicos fluctuantes y la indicación urgente de recambio plasmático/plasmaféresis); 2) El SHU típico en niños tras diarrea por E. coli enterohemorrágica (falla renal aguda); y 3) La CONTRAINDICACIÓN FORMAL de transfundir concentrados de plaquetas.',
    contentSections: [
      {
        subhead: '1. Fisiopatología: Desbalance de Multímeros del Factor von Willebrand y ADAMTS13',
        paragraphs: [
          'La Púrpura Trombocitopénica Trombótica (PTT) se origina por una deficiencia severa (< 10% de actividad) de la metaloproteinasa plasmática ADAMTS13, responsable fisiológica de clivar y cortar los multímeros gigantes ultralargos del factor von Willebrand (UL-vWF) secretados por las células endoteliales. En el 95% de los adultos, esta deficiencia es autoinmune adquirida, mediada por autoanticuerpos IgG neutralizantes dirigidos contra ADAMTS13.',
          'Al carecer de ADAMTS13, los multímeros ultralargos de vWF permanecen anclados al endotelio vascular, desplegándose bajo el estrés de cizallamiento y provocando la agregación y activación espontánea masiva de plaquetas. Esto genera microtrombos plaquetarios oclusivos en la microvasculatura de todos los órganos (especialmente cerebro, corazón y riñón), sin consumo de factores de coagulación plasmáticos (por ende, el TP, TTPA y fibrinógeno son rigurosamente NORMALES, a diferencia de la CID). Al colisionar a gran velocidad contra estas redes microtrombóticas de fibrina y plaquetas, los eritrocitos se fragmentan mecánicamente, originando la anemia hemolítica microangiopática con esquistocitos (hematíes en "casco").',
          'En el Síndrome Hemolítico Urémico (SHU) típico infantil, la patogenia no se debe a déficit de ADAMTS13 sino al daño endotelial glomerular directo provocado por la toxina Shiga (Stx1/Stx2) producida por cepas de Escherichia coli enterohemorrágica (serotipo clásico O157:H7) o Shigella dysenteriae, tras un episodio de diarrea sanguinolenta.'
        ]
      },
      {
        subhead: '2. Cuadro Clínico: La Péntada de Moschcowitz en PTT vs Tríada del SHU',
        paragraphs: [
          'La PTT clásica se describe mediante la Péntada de Moschcowitz: 1) Trombocitopenia grave de consumo (habitualmente < 20.000 a 30.000/uL con púrpura petequial); 2) Anemia hemolítica microangiopática (Coombs negativo, reticulocitos elevados, LDH altísima > 1.000 UI/L, esquistocitos > 1-2% en frotis); 3) Síntomas neurológicos fluctuantes y bizarros en más del 65% de casos (cefalea súbita, desorientación, afasia transitoria, convulsiones, paresias focales o coma); 4) Fiebre sin foco infeccioso aparente (en 50%); y 5) Compromiso renal habitualmente leve a moderado (hematuria microscópica, proteinuria o ligera alza de creatinina). Actualmente NO se exige la presencia de los 5 elementos para diagnosticar y tratar una PTT: la coexistencia de trombocitopenia más anemia con esquistocitos sin otra causa evidente es suficiente para iniciar manejo urgente.',
          'El Síndrome Hemolítico Urémico (SHU) cursa clásicamente con la tríada: anemia microangiopática + trombocitopenia + falla renal aguda oligoanúrica severa, con afectación neurológica infrecuente. Se presenta típicamente en lactantes y niños pequeños de 1 a 5 años, 5 a 10 días después de un cuadro de diarrea aguda con sangre (diarrea disenteriforme).'
        ]
      },
      {
        subhead: '3. Manejo Terapéutico de Emergencia y Contraindicaciones Fatales',
        paragraphs: [
          'La PTT tiene una mortalidad superior al 90% sin tratamiento oportuno. El pilar indiscutible y de emergencia absoluta es la Plasmaféresis o Recambio Plasmático Terapéutico (TPE) diario: remueve los autoanticuerpos anti-ADAMTS13 y los multímeros gigantes de vWF, aportando plasma fresco con ADAMTS13 activo normal. Debe iniciarse de inmediato en una UCI. Si la plasmaféresis se retrasa por traslado, se indica infusión transitoria de Plasma Fresco Congelado (PFC) a 15-30 mL/kg/día.',
          'Se asocian simultáneamente glucocorticoides sistémicos a dosis altas (metilprednisolona EV o prednisona 1 mg/kg/día) para suprimir la producción del autoanticuerpo, y en centros terciarios, agentes modernos como el Caplacizumab (nanocuerpo anti-vWF) y Rituximab.',
          '¡Alerta Vital EUNACOM!: Está ABSOLUTAMENTE CONTRAINDICADA la transfusión de plaquetas en pacientes con MAT (tanto PTT como SHU), salvo ante una hemorragia intracraneal activa potencialmente mortal. Administrar plaquetas aporta sustrato a los multímeros de vWF desregulados ("echar leña al fuego"), gatillando una oleada masiva de trombosis microvascular cerebral y coronaria con infarto y muerte súbita del paciente.'
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Diferencial: PTT vs SHU Típico vs Coagulación Intravascular Diseminada (CID)',
      headers: ['Parámetro', 'Púrpura Trombocitopénica Trombótica (PTT)', 'Síndrome Hemolítico Urémico (SHU)', 'Coagulación Intravascular Diseminada (CID)'],
      rows: [
        ['Población Típica', 'Adultos (predominio mujeres jóvenes 20-50 años)', 'Pediátrica (lactantes y niños pequeños 1-5 años)', 'Cualquier edad en paciente crítico séptico / politraumatizado'],
        ['Mecanismo Central', 'Déficit severo de ADAMTS13 (<10%) por autoanticuerpos', 'Daño endotelial por Toxina Shiga (E. coli O157:H7)', 'Activación masiva de trombina y consumo de factores'],
        ['Órgano Dominante', 'Sistema Nervioso Central (fluctuante, afasia, coma)', 'Riñón (injuria renal aguda oligoanúrica grave)', 'Sistémico multiorgánico (hemorragia + trombosis microvascular)'],
        ['Pruebas Coagulación (TP / TTPK)', 'ESTRICTAMENTE NORMALES (no se consumen factores)', 'ESTRICTAMENTE NORMALES', 'PROLONGADAS (TP ↑, TTPK ↑, Fibrinógeno ↓, Dímero D ↑↑)'],
        ['Esquistocitos en Frotis', 'Presentes y abundantes (> 1-2%)', 'Presentes y abundantes', 'Presentes en cantidad variable'],
        ['Tratamiento Cardinal', 'Plasmaféresis diaria urgente + Corticoides + Rituximab', 'Soporte hidroelectrolítico + diálisis si oliguria', 'Tratar la sepsis/causa + Hemocomponentes (PFC/crioprecipitado)']
      ]
    },
    vignette: {
      title: 'Caso Clínico: Paciente con Compromiso de Conciencia y Esquistocitos',
      text: 'Mujer de 36 años, previamente sana, es traída al servicio de urgencias por desorientación témporo-espacial fluctuante y cefalea holocraneana de 24 horas. Al ingreso se encuentra febril (38.1 °C), confusa y con petequias diseminadas en tórax y extremidades. El examen segmentario no muestra focalidad neurológica motora fija. Laboratorio de urgencia: Hb 7.2 g/dL, Plaquetas 18.000/uL, Leucocitos 9.400/uL, LDH 1.450 UI/L, Bilirrubina indirecta 3.6 mg/dL, Creatinina 1.6 mg/dL. Pruebas de coagulación: TP 12 seg (100%), TTPK 31 seg (normal), Fibrinógeno 320 mg/dL. Frotis sanguíneo: esquistocitos 3.5%. Coombs directo negativo.',
      conducta: 'Púrpura Trombocitopénica Trombótica (PTT) del adulto. Cumple la péntada clínica clásica con coagulación normal y esquistocitosis severa. Se debe contactar a la UCI de inmediato para coordinar Plasmaféresis (recambio plasmático terapéutico) de urgencia vital e iniciar pulsos de metilprednisolona endovenosa. Está estrictamente prohibido transfundir plaquetas.'
    },
    keyPoints: [
      'La PTT se produce por déficit severo (<10%) de ADAMTS13, acumulando multímeros gigantes de factor von Willebrand.',
      'Bíada suficiente para sospechar e iniciar tratamiento de PTT: anemia hemolítica microangiopática + plaquetopenia de consumo.',
      'Péntada clásica de Moschcowitz: plaquetopenia, anemia con esquistocitos, clínica neurológica, fiebre y falla renal.',
      'Diferencia clave con la CID: en la PTT y en el SHU el TP, el TTPK y el fibrinógeno son rigurosamente NORMALES.',
      'El tratamiento de emergencia vital de la PTT es la Plasmaféresis (recambio plasmático terapéutico diario) más corticoides.',
      'El SHU típico afecta a niños tras diarrea con sangre por E. coli enterohemorrágica (toxina Shiga) y causa falla renal oligúrica.',
      '¡CONTRAINDICACIÓN FORMAL!: NUNCA transfundir plaquetas en PTT o SHU salvo hemorragia intracraneal activa letal.'
    ],
    questions: [
      {
        stem: 'Mujer de 34 años consulta por confusión mental fluctuante, fiebre de 38 °C y petequias en extremidades. En sus exámenes destaca Hb 7.6 g/dL, plaquetas 14.000/uL, LDH 1.250 UI/L y abundantes esquistocitos en el frotis periférico. Las pruebas de coagulación (TP y TTPA) son estrictamente normales y el test de Coombs directo es negativo. ¿Cuál es el tratamiento de emergencia más prioritario para salvar la vida de la paciente?',
        opciones: [
          'A) Transfusión urgente de 2 aféresis de concentrados plaquetarios',
          'B) Plasmaféresis (recambio plasmático terapéutico diario)',
          'C) Esplenectomía laparoscópica de urgencia',
          'D) Anticoagulación plena con heparina de bajo peso molecular',
          'E) Infusión endovenosa de ácido tranexámico en altas dosis'
        ],
        correcta: 'B',
        explicacion: 'El cuadro corresponde a una Púrpura Trombocitopénica Trombótica (PTT) clásica (anemia hemolítica microangiopática con esquistocitos, trombocitopenia severa, síntomas neurológicos, fiebre y coagulación normal). La mortalidad sin tratamiento supera el 90%. La terapia de elección e inmediata es la Plasmaféresis o recambio plasmático terapéutico diario, que remueve los autoanticuerpos anti-ADAMTS13 y aporta enzima activa. Transfundir plaquetas está contraindicado porque empeora la trombosis microvascular. Perla. El tratamiento de urgencia de la PTT es la plasmaféresis inmediata.',
        recTag: 'EUNACOM 2019 · Q#42'
      },
      {
        stem: '¿Cuál de las siguientes intervenciones se encuentra FORMALMENTE CONTRAINDICADA en un paciente cursando con una microangiopatía trombótica (PTT o SHU) no complicada con sangrado del sistema nervioso central?',
        opciones: [
          'A) Recambio plasmático terapéutico con plasma fresco congelado',
          'B) Transfusión de concentrados de plaquetas',
          'C) Administración de glucocorticoides sistémicos a dosis altas',
          'D) Hidratación endovenosa balanceada con suero fisiológico',
          'E) Uso de rituximab en casos refractarios'
        ],
        correcta: 'B',
        explicacion: 'En las microangiopatías trombóticas (PTT y SHU), la trombocitopenia se debe a la formación masiva de microtrombos plaquetarios. La administración de transfusiones de plaquetas aporta nuevo sustrato para la trombosis microvascular descontrolada, precipitando accidentes cerebrovasculares isquémicos, infartos de miocardio y muerte súbita. La transfusión solo se contempla como medida desesperada ante sangrado intracraneal activo con riesgo de enclavamiento. Perla. Nunca transfundir plaquetas en PTT o SHU: gatilla trombosis microvascular masiva.',
        recTag: 'EUNACOM 2021 · Q#36'
      }
    ]
  }
];

module.exports = {
  bloque2
};
