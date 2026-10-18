// Clase 18.25 (Pediatría) — guion docente escrito a mano (estándar Módulo 1). Tema nuevo de hueco del Perfil V3.
// Fuente clínica: books/scripts/dataset_pediatria_bloque_3.cjs (ped-25). Códigos (v3_topic_codes.json y v3_codemap.json):
// 2.01.1.056 Inmunodeficiencias, 2.01.1.014 Infecciones recurrentes, 2.01.1.044 Hepatomegalia, 2.01.4.015 Hemograma
// (el codemap indica el nivel de Dx, Tx y seguimiento de cada uno; el libro: Dx sospecha · Tx inicial · derivar).
// Preguntas reales (rq por códigos + class_questions.cjs --search "inmunodeficiencia|hemograma|nadir|coqueluche|SCID"):
// Diciembre 2022 P136 y Enero 2023 P12 (inmunodeficiencia humoral), Julio 2025 P55 (SCID: vacunas vivas contraindicadas),
// Julio 2016 P151 (hemograma con linfocitosis del lactante: coqueluche), Julio 2025 P69 (nadir fisiológico de la hemoglobina) y
// Diciembre 2018 P115 (anemia ferropénica por VCM). Enunciados y alternativas copiados tal cual del banco.
// No usadas: Diciembre 2019 P167 (infecciones recurrentes con obstrucción nasal y ronquido: la clave "rinitis alérgica" es discutible,
// el cuadro es el de hipertrofia adenoidea, y la propia explicación del banco lo reconoce); las de hepatoesplenomegalia neonatal (TORCH,
// clase de infecciones congénitas); las de púrpura trombocitopénica y leucemia (clases de hematología pediátrica).
// Ninguna pregunta real del banco trata la hepatomegalia ni la glucogenosis: la voz usa el caso clínico del libro (la glucogenosis tipo I
// queda en el caso del libro, sin fecha inventada).
// Foto: eccema de Wiskott-Aldrich (Fitzpatrick Fig. 144-7). Sin foto de candidiasis oral pediátrica, de timo ni de glucogenosis en las
// fuentes locales (las imágenes de Nelson de 22q11 y de glucogenosis salen en negativo y no sirven).
// En movimiento: scenes/ped_nuevas.html (?v=hemograma), gráfico solo código (el tema no tiene anatomía que animar).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-25',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Infecciones recurrentes, inmunodeficiencias, hepatomegalia y hemograma: cuándo es normal y cuándo derivar',
      say: 'Bienvenido. Hoy juntamos tres motivos de consulta que se cruzan: el niño que se enferma mucho, el que tiene el hígado grande, y el hemograma que sale raro y no lo es. El examen pregunta lo mismo en los tres: saber cuándo tranquilizar, cuándo pedir un estudio sencillo y cuándo derivar. Partamos por el niño de sala cuna.',
    },

    {
      type: 'points',
      kicker: 'Infecciones recurrentes',
      title: 'Normal contra signos de alarma',
      cards: [
        { title: 'Lo normal', tag: 'Casi todos los niños', kind: 'normal', items: [
          { t: '6 a 10 virales al año', d: 'Menor de 5 años; más en sala cuna',
            say: 'Un niño sano menor de cinco años tiene seis a diez infecciones respiratorias virales al año, y más si asiste a sala cuna. Son leves y se recuperan por completo. Si el crecimiento es normal, no se estudia.' },
          { t: 'Causas no inmunológicas', d: 'Atopia, adenoides, reflujo, tabaco',
            say: 'Y las causas más frecuentes de infecciones recurrentes no son inmunológicas: atopia y asma, sala cuna o hermanos mayores, hipertrofia adenoidea, reflujo, tabaquismo pasivo, cuerpo extraño y malformaciones anatómicas. También descartas fibrosis quística, discinesia ciliar, VIH y desnutrición.' },
        ] },
        { title: 'Signos de alarma', tag: 'Fundación Jeffrey Modell', kind: 'alert', items: [
          { t: '8 otitis, 2 sinusitis o 2 neumonías al año', d: 'O 2 infecciones profundas',
            say: 'Ahora los signos de alarma de una inmunodeficiencia primaria. Ocho o más otitis medias en un año, dos o más sinusitis graves, dos o más neumonías, y dos o más infecciones profundas, como meningitis, sepsis, osteomielitis o celulitis.' },
          { t: 'Abscesos profundos, candidiasis persistente', d: 'Antibióticos EV o por 2 meses sin efecto',
            say: 'También abscesos cutáneos u orgánicos profundos recurrentes, candidiasis oral o cutánea persistente después del año, una infección que requiere antibióticos endovenosos, o antibióticos por dos meses o más con poco efecto.' },
          { t: 'Falla de medro, oportunistas, familia', d: 'Muertes tempranas por infección',
            say: 'Y la falla de medro, las infecciones por gérmenes oportunistas y el antecedente familiar de inmunodeficiencia o de muertes tempranas por infección.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Qué haces tú',
      title: 'Estudio inicial y derivación',
      cards: [
        { title: 'Estudio inicial', tag: 'Inicial', kind: 'criteria', items: [
          { t: 'Hemograma con recuento absoluto', d: 'Linfocitos y neutrófilos; VHS o PCR',
            say: 'Si hay signos de alarma, tu estudio inicial es sencillo: hemograma con recuento absoluto de linfocitos y neutrófilos, velocidad de sedimentación o proteína C reactiva.' },
          { t: 'Inmunoglobulinas IgG, IgA, IgM', d: 'Test de VIH; Rx de tórax; test del sudor',
            say: 'Se agregan las inmunoglobulinas séricas, IgG, IgA e IgM, el test de VIH, una radiografía de tórax y, según el cuadro, el test del sudor.' },
        ] },
        { title: 'Conducta', tag: 'Derivar', kind: 'alert', items: [
          { t: 'Con signos de alarma: inmunología', d: 'Tratar las infecciones precozmente',
            say: 'El niño con signos de alarma se deriva a inmunología, y mientras tanto se tratan las infecciones precozmente.' },
          { t: 'Sin vacunas vivas si hay defecto celular', d: 'BCG y rotavirus',
            say: 'Y si sospechas un defecto celular, no se indican las vacunas vivas, como la BCG y la del rotavirus.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Inmunodeficiencias primarias',
      title: 'El tipo de infección dice el compartimento',
      cards: [
        { title: 'Humorales', tag: 'Linfocitos B · 50-60%', kind: 'key', items: [
          { t: 'Piógenas sinopulmonares después de los 6 meses', d: 'Cuando desaparece la IgG materna',
            say: 'El tipo de infección te orienta al compartimento afectado. Los defectos humorales, de los linfocitos B, son la mitad o más de los casos. Dan infecciones bacterianas piógenas sinopulmonares, como otitis, sinusitis y neumonías por neumococo y Haemophilus, y empiezan después de los seis meses, cuando desaparece la IgG de la madre.' },
          { t: 'Bruton: varón, sin amígdalas', d: 'IgG, IgA e IgM muy bajas; sin CD19',
            say: 'La agammaglobulinemia ligada al X, de Bruton, es un varón sin amígdalas, con IgG, IgA e IgM muy bajas y linfocitos B ausentes.' },
          { t: 'Déficit selectivo de IgA, el más frecuente', d: 'Anafilaxia con transfusiones; celiaquía',
            say: 'El déficit selectivo de IgA es el más frecuente, a menudo asintomático, con riesgo de anafilaxia ante transfusiones y asociación con celiaquía y atopia. Y la inmunodeficiencia común variable aparece en adolescentes y adultos.' },
        ] },
        { title: 'Celulares', tag: 'Linfocitos T', kind: 'alert', items: [
          { t: 'Virales graves, hongos, Pneumocystis', d: 'Diarrea crónica, falla de medro, linfopenia',
            say: 'Los defectos celulares, de los linfocitos T, dan infecciones virales graves, candidiasis, Pneumocystis y diarrea crónica desde los primeros meses, con falla de medro y linfopenia.' },
          { t: 'SCID: antes de los 6 meses, sin timo', d: 'Urgencia; trasplante; sin vacunas vivas',
            say: 'La inmunodeficiencia combinada grave aparece antes de los seis meses, y en la radiografía no se ve el timo. Es una urgencia que se resuelve con trasplante de médula, y contraindica las vacunas vivas, la BCG y la del rotavirus.' },
          { t: 'DiGeorge: cardiopatía, hipocalcemia, timo pequeño', d: 'Microdeleción 22q11; hemoderivados irradiados',
            say: 'El síndrome de DiGeorge, por una microdeleción del cromosoma veintidós, trae una cardiopatía conotruncal, hipocalcemia por hipoparatiroidismo, timo hipoplásico y dismorfia facial. Los hemoderivados deben ser irradiados.' },
        ] },
        { title: 'Wiskott-Aldrich', tag: 'Tríada', kind: 'criteria', items: [
          { t: 'Plaquetas pequeñas, eccema, infecciones', d: 'Varón con sangrado',
            say: 'El Wiskott-Aldrich es una tríada: trombocitopenia con plaquetas pequeñas, eccema e infecciones. Mira este eccema, con costras y excoriaciones en las manos de un niño con este síndrome.',
            photo: { src: 'biblioteca/15_pediatria/ped-25/01_eccema-wiskott-aldrich__fitzpatrick_p1396.jpg', label: 'Eccema en Wiskott-Aldrich', at: 'Mira este eccema', credit: 'Fitzpatrick Dermatology, Fig. 144-7' } },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Fagocitos, complemento y secundarias',
      title: 'Lo que falta para completar el mapa',
      cards: [
        { title: 'Fagocitos y complemento', tag: 'Otros compartimentos', kind: 'criteria', items: [
          { t: 'Granulomatosa crónica', d: 'Abscesos por catalasa positivos; DHR o NBT',
            say: 'En los defectos de los fagocitos, la enfermedad granulomatosa crónica produce abscesos y adenitis por gérmenes catalasa positivos, como Staphylococcus aureus, Serratia y Aspergillus. Se diagnostica con la prueba de dihidrorrodamina o con el NBT.' },
          { t: 'Adhesión leucocitaria', d: 'Caída tardía del cordón, onfalitis',
            say: 'En el déficit de adhesión leucocitaria, el cordón umbilical se cae tarde, hay onfalitis y una leucocitosis marcada sin pus.' },
          { t: 'Complemento: C5-C9 y Neisseria', d: 'C3: piógenas; C1-inhibidor: angioedema',
            say: 'En el complemento, el déficit de C cinco a C nueve produce infecciones recurrentes por Neisseria, el de C tres produce infecciones piógenas graves, y el déficit del inhibidor de C uno produce angioedema hereditario, sin infecciones.' },
        ] },
        { title: 'Secundarias primero', tag: 'Lo más frecuente', kind: 'alert', items: [
          { t: 'VIH, desnutrición, nefrótico, asplenia', d: 'Quimioterapia y corticoides',
            say: 'Las inmunodeficiencias secundarias son más frecuentes que las primarias y se descartan primero: VIH, desnutrición, síndrome nefrótico, asplenia, quimioterapia y corticoides.' },
          { t: 'Inmunoglobulina de reemplazo', d: 'Cotrimoxazol; trasplante en las graves',
            say: 'La sospecha se confirma en inmunología. El tratamiento depende del defecto: inmunoglobulina endovenosa o subcutánea en los defectos humorales, profilaxis con cotrimoxazol y trasplante de células madre en las formas combinadas graves.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Inmunodeficiencias',
      title: 'Compartimento, infección y examen',
      head: ['Compartimento', 'Infecciones típicas', 'Ejemplos', 'Examen orientador'],
      rows: [
        { cells: ['Humoral (B)', 'Piógenas sinopulmonares desde los 6 meses', 'Bruton, IgA, común variable', 'IgG, IgA, IgM; CD19'],
          say: 'Para ordenarlo. Humoral: infecciones piógenas desde los seis meses; Bruton, déficit de IgA, inmunodeficiencia común variable; pides inmunoglobulinas y linfocitos B.' },
        { cells: ['Celular (T) y combinada', 'Virales graves, hongos, Pneumocystis', 'SCID, DiGeorge, Wiskott-Aldrich', 'Linfocitos; Rx de tórax; subpoblaciones'],
          say: 'Celular y combinada: virales graves, hongos y Pneumocystis, con falla de medro. Pides recuento de linfocitos, radiografía para el timo y subpoblaciones.' },
        { cells: ['Fagocitos', 'Abscesos, adenitis, catalasa positivos', 'Granulomatosa crónica, adhesión leucocitaria', 'Hemograma; DHR o NBT'],
          say: 'Fagocitos: abscesos y adenitis por catalasa positivos, y se estudia con dihidrorrodamina o NBT.' },
        { cells: ['Complemento', 'Neisseria recurrente', 'Déficit de C5-C9 y C3', 'CH50, C3 y C4'],
          say: 'Complemento: Neisseria recurrente, y se estudia con CH cincuenta y las fracciones C tres y C cuatro.' },
        { cells: ['Secundarias', 'Variables', 'VIH, desnutrición, nefrótico', 'Test de VIH, albúmina, hemograma'],
          say: 'Y secundarias, que son las primeras en descartar: VIH, desnutrición y nefrótico.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Hepatomegalia',
      title: 'Primero decide si es real',
      cards: [
        { title: 'Normal o ptosis', tag: 'No todo hígado palpable es grande', kind: 'normal', items: [
          { t: 'Normal: 1-2 cm en lactante, 1 cm en escolar', d: 'Bajo el reborde costal',
            say: 'El hígado se palpa normalmente uno o dos centímetros bajo el reborde costal en el lactante, y hasta un centímetro en el escolar.' },
          { t: 'Ptosis por hiperinsuflación', d: 'Asma, bronquiolitis: medir por percusión',
            say: 'Cuidado con la ptosis hepática por hiperinsuflación, en el asma o la bronquiolitis. Se mide el espacio hepático por percusión: el borde superior desciende, pero el tamaño total es normal. La hepatomegalia verdadera tiene el tamaño aumentado a la percusión.' },
        ] },
        { title: 'Qué la acompaña', tag: 'Orienta la causa', kind: 'key', items: [
          { t: 'Con esplenomegalia', d: 'TORCH, mononucleosis, hemólisis, leucemia, depósito',
            say: 'Con esplenomegalia, piensas en infecciones congénitas, mononucleosis, hemólisis, leucemias y linfomas, enfermedades de depósito como Gaucher, o hipertensión portal.' },
          { t: 'Con ictericia o colestasia', d: 'Atresia de vías biliares, hepatitis',
            say: 'Con ictericia o colestasia, atresia de vías biliares y hepatitis. Y con insuficiencia cardíaca, congestión hepática, con hepatomegalia dolorosa e ingurgitación yugular.' },
          { t: 'Aislada, con hipoglicemia de ayuno corto', d: 'Glucogenosis tipo I: facies de muñeca',
            say: 'La hepatomegalia aislada con hipoglicemia después de un ayuno corto es una glucogenosis tipo uno, el déficit de glucosa seis fosfatasa. El niño tiene facies de muñeca, abdomen prominente, acidosis láctica, hipertrigliceridemia e hiperuricemia: el hígado no puede liberar glucosa.' },
        ] },
        { title: 'Estudio y derivación', tag: 'Inicial / derivar', kind: 'criteria', items: [
          { t: 'Hemograma, transaminasas, glicemia, eco', d: 'Lípidos, uricemia, lactato',
            say: 'El estudio inicial es hemograma y frotis, transaminasas, bilirrubina fraccionada, glicemia en ayuno, perfil lipídico, ácido úrico, lactato y ecografía abdominal.' },
          { t: 'Derivar si persiste o hay hipoglicemia', d: 'Consistencia aumentada o síntomas',
            say: 'Se deriva si la hepatomegalia es persistente, de consistencia aumentada, si hay otros síntomas o si hay hipoglicemia. Otras causas: obesidad con hígado graso, fibrosis quística, enfermedad de Wilson después de los tres años, galactosemia y tirosinemia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Hemograma pediátrico',
      title: 'Los valores cambian con la edad',
      cards: [
        { title: 'Serie roja y plaquetas', tag: 'El corte de 11', kind: 'criteria', items: [
          { t: 'RN: Hb 14-20 g/dL', d: 'Nadir fisiológico a los 2-3 meses: 10-11',
            say: 'El hemograma pediátrico se lee con la edad. La hemoglobina del recién nacido es de catorce a veinte, cae a un nadir fisiológico a los dos a tres meses, de unos diez a once, y eso es normal.' },
          { t: 'Límite inferior: 11 hasta los 5 años', d: '11,5 de 5 a 11 años; 12 en adolescentes',
            say: 'Desde los seis meses hasta los cinco años, hay anemia si la hemoglobina es menor de once. Entre cinco y once años, el límite es once coma cinco, y en adolescentes, doce.' },
          { t: 'Plaquetas 150.000-450.000', d: 'A cualquier edad',
            say: 'Las plaquetas son de ciento cincuenta mil a cuatrocientos cincuenta mil a cualquier edad.' },
        ] },
        { title: 'Serie blanca', tag: 'Dos cruces', kind: 'key', items: [
          { t: 'Leucocitos según la edad', d: 'RN 9.000-30.000; escolar 4.500-13.500',
            say: 'Los leucocitos del recién nacido van de nueve mil a treinta mil con neutrófilos; en el lactante, de seis mil a diecisiete mil quinientos; en el preescolar de cinco mil quinientos a quince mil quinientos; y en el escolar de cuatro mil quinientos a trece mil quinientos.' },
          { t: 'Linfocitos predominan hasta los 4-6 años', d: 'Un lactante con 60% de linfocitos es normal',
            say: 'La fórmula tiene dos cruces fisiológicos. A los cinco a siete días predominan los linfocitos, y siguen predominando hasta los cuatro a seis años, cuando se invierte a neutrófilos. Por eso un lactante con sesenta por ciento de linfocitos es normal, y no sugiere leucemia ni infección viral.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Linfocitos y neutrófilos según la edad',
      images: [
        { src: 'animaciones/ped-25/A1_cruce_formula.mp4', label: 'Los dos cruces de la fórmula leucocitaria', credit: 'Animación propia · esquema con valores aproximados' },
      ],
      steps: [
        { note: 'Dos cruces fisiológicos',
          say: 'Mira las dos curvas. Al nacer predominan los neutrófilos. A los cinco a siete días se cruzan, y los linfocitos pasan a ser la población dominante durante toda la lactancia y la edad preescolar. Recién entre los cuatro y los seis años vuelven a cruzarse, y desde ahí los neutrófilos mandan, como en el adulto. Mientras estás en la zona de los linfocitos, un hemograma con sesenta por ciento de linfocitos es normal.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Interpretación',
      title: 'Qué sugiere cada alteración',
      cards: [
        { title: 'Serie blanca', tag: 'Con el frotis', kind: 'alert', items: [
          { t: 'Bacteriana: > 15.000, neutrofilia, desviación', d: 'Baciliformes > 10%; granulaciones tóxicas',
            say: 'Una infección bacteriana da más de quince mil leucocitos, neutrofilia, desviación a izquierda, con baciliformes sobre diez por ciento, y granulaciones tóxicas. Ojo, que una leucopenia bajo cinco mil con neutropenia también puede ser una sepsis grave.' },
          { t: 'Neutropenia < 1.500; grave < 500', d: 'Virus, fármacos, neutropenia étnica benigna',
            say: 'La neutropenia es un recuento absoluto bajo mil quinientos, y grave bajo quinientos. Sus causas son virales, fármacos y la neutropenia étnica benigna.' },
          { t: 'Linfocitosis: coqueluche, mononucleosis', d: 'Eosinofilia > 500: atopia, parásitos',
            say: 'La linfocitosis marcada sugiere coqueluche, mononucleosis, con linfocitos atípicos, o virosis. Y la eosinofilia, sobre quinientos, atopia o parasitosis.' },
        ] },
        { title: 'Serie roja y plaquetas', tag: 'Y cuándo es urgente', kind: 'criteria', items: [
          { t: 'Microcítica: ferropenia o talasemia', d: 'RDW alto contra normal; Mentzer < 13',
            say: 'La anemia microcítica es ferropenia, con RDW alto, o talasemia, con RDW normal y un índice de Mentzer menor de trece.' },
          { t: 'Trombocitopenia aislada tras virosis: PTI', d: 'Niño sano',
            say: 'Una trombocitopenia aislada en un niño sano después de una virosis es una púrpura trombocitopénica inmune.' },
          { t: 'Pancitopenia, blastos o dolor óseo', d: 'Leucemia: GES, hematología urgente',
            say: 'Y pancitopenia, blastos, o citopenias con hepatoesplenomegalia o dolor óseo, es sospecha de leucemia: cobertura GES y derivación urgente a hematología. El hemograma siempre se interpreta con la edad, la clínica y el frotis.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Valores normales del hemograma según la edad',
      head: ['Edad', 'Hemoglobina (g/dL)', 'Leucocitos (/mm³)', 'Fórmula predominante'],
      rows: [
        { cells: ['Recién nacido', '14 a 20', '9.000 a 30.000', 'Neutrófilos'],
          say: 'Para fijar los valores. Recién nacido: hemoglobina de catorce a veinte, leucocitos de nueve mil a treinta mil, y predominan los neutrófilos.' },
        { cells: ['2 a 3 meses', '9,5 a 12 (nadir)', '6.000 a 17.500', 'Linfocitos'],
          say: 'A los dos a tres meses, el nadir fisiológico de la hemoglobina, de nueve coma cinco a doce, con predominio de linfocitos. No necesita hierro por ese solo valor.' },
        { cells: ['6 meses a 2 años', '≥ 11', '6.000 a 17.500', 'Linfocitos (50-70%)'],
          say: 'De seis meses a dos años: hemoglobina de once o más y linfocitos entre cincuenta y setenta por ciento.' },
        { cells: ['2 a 5 años', '≥ 11', '5.500 a 15.500', 'Linfocitos hasta los 4-6 años'],
          say: 'De dos a cinco años: sigue el límite de once y los linfocitos dominan hasta los cuatro a seis años.' },
        { cells: ['6 a 12 años', '≥ 11,5', '4.500 a 13.500', 'Neutrófilos'],
          say: 'De seis a doce años el corte sube a once coma cinco y dominan de nuevo los neutrófilos.' },
        { cells: ['Adolescentes', '≥ 12', '4.500 a 13.000', 'Neutrófilos'],
          say: 'Y en el adolescente, doce o más, con neutrófilos. La trampa típica es llamar leucemia o infección viral a un lactante normal con mayoría de linfocitos.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la consulta por infecciones o un hemograma raro a la conducta.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Lactante de 15 meses, previamente sano hasta los 6 meses, que desde entonces ha tenido candidiasis oral a repetición, cuatro otitis medias agudas y dos neumonías que requirieron hospitalización. Su peso y talla están en el percentil 25. Al examen no se observan amígdalas ni ganglios palpables. Un hermano varón por línea materna falleció de neumonía a los 3 años. El hemograma muestra leucocitos 9.800/mm³ y linfocitos T normales.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Tranquilizar: es un patrón normal para un niño de sala cuna' },
        { letter: 'B', text: 'Solicitar IgG, IgA e IgM y recuento de linfocitos B, y derivar a inmunología' },
        { letter: 'C', text: 'Indicar BCG y vacuna rotavirus para estimular la inmunidad' },
        { letter: 'D', text: 'Iniciar profilaxis antibiótica y controlar en un año' },
        { letter: 'E', text: 'Solicitar prueba de dihidrorrodamina' },
      ],
      correct: 'B',
      explanation: 'La edad de inicio (después de los 6 meses, cuando cae la IgG materna), las infecciones piógenas sinopulmonares y óticas recurrentes, la ausencia de tejido linfoide y el antecedente de un varón fallecido por línea materna sugieren una inmunodeficiencia humoral (agammaglobulinemia ligada al X de Bruton). La candidiasis sola no basta para sospechar un defecto celular. Se solicitan IgG, IgA e IgM y recuento de linfocitos B, y se deriva a inmunología; el tratamiento es inmunoglobulina de reemplazo.',
      say: {
        stem: 'Un lactante de quince meses, sano hasta los seis, tiene desde entonces candidiasis oral a repetición, cuatro otitis medias y dos neumonías con hospitalización. El peso y la talla están en el percentil veinticinco. No se ven amígdalas ni se palpan ganglios. Un hermano de la madre, varón, murió de neumonía a los tres años. Los leucocitos son nueve mil ochocientos y los linfocitos T son normales.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: tranquilizar; pedir inmunoglobulinas y linfocitos B y derivar a inmunología; BCG y rotavirus; profilaxis antibiótica y control en un año; o prueba de dihidrorrodamina. Piénsalo.',
        answer: 'Es la B. Infecciones piógenas desde los seis meses, sin amígdalas ni ganglios y un varón de la familia materna fallecido: es una agammaglobulinemia de Bruton. Pides inmunoglobulinas y linfocitos B, y derivas. La candidiasis tienta hacia un defecto celular, pero con linfocitos T normales y ese patrón, el defecto es humoral. Y las vacunas vivas jamás se dan ante la sospecha.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2022 · Pregunta 136',
      stem: 'Un lactante de 15 meses fue sano hasta los 6 meses de edad, pero, después de ello, ha presentado candidiasis oral a repetición, cuatro otitis medias aguda y dos neumonías que han requerido hospitalización.',
      question: '¿Cuál es la causa más probable de su inmunodepresión?',
      options: [
        { letter: 'A', text: 'Inmunodeficiencia humoral' },
        { letter: 'B', text: 'Inmunodeficiencia combinada severa' },
        { letter: 'C', text: 'Alteración de la fagocitosis' },
        { letter: 'D', text: 'Déficit de complemento' },
        { letter: 'E', text: 'Inmunodeficiencia celular' },
      ],
      correct: 'A',
      explanation: 'Las infecciones bacterianas sinopulmonares y óticas recurrentes que comienzan después de los 6 meses corresponden a un defecto de producción de anticuerpos. La inmunodeficiencia combinada grave se presenta antes de los 6 meses con infecciones oportunistas; los defectos de fagocitos dan abscesos y adenitis; el déficit de complemento da infecciones por Neisseria; y un defecto celular puro se acompaña de infecciones virales y oportunistas graves.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veintidós. Un lactante de quince meses estuvo sano hasta los seis, y después tuvo candidiasis oral a repetición, cuatro otitis medias y dos neumonías con hospitalización.',
        question: '¿Cuál es la causa más probable de su inmunodepresión?',
        options: 'Las opciones: inmunodeficiencia humoral; inmunodeficiencia combinada severa; alteración de la fagocitosis; déficit de complemento; o inmunodeficiencia celular. Piénsalo.',
        answer: 'Es la A. Las infecciones sinopulmonares y óticas que parten después de los seis meses, cuando cae la IgG de la madre, son de un defecto de anticuerpos. La B tienta por la candidiasis, pero la combinada grave aparece antes de los seis meses, con oportunistas y falla de medro.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 12',
      stem: 'Niño que después de los 6 meses presenta candidiasis bucal, otitis media recurrente y 2 neumonías hospitalizadas.',
      question: '¿Cuál es la inmunodeficiencia más probable?',
      options: [
        { letter: 'A', text: 'Inmunodeficiencia celular (DiGeorge)' },
        { letter: 'B', text: 'Déficit de complemento' },
        { letter: 'C', text: 'Inmunodeficiencia humoral (agammaglobulinemia)' },
        { letter: 'D', text: 'Inmunodeficiencia combinada severa (SCID)' },
        { letter: 'E', text: 'Enfermedad granulomatosa crónica' },
      ],
      correct: 'C',
      explanation: 'El inicio después de los 6 meses con otitis y neumonías piógenas recurrentes es característico de un defecto humoral como la agammaglobulinemia de Bruton. DiGeorge se presenta desde el período neonatal con hipocalcemia y cardiopatía; el complemento predispone a Neisseria; el SCID se manifiesta antes de los 6 meses; y la granulomatosa crónica produce abscesos por gérmenes catalasa positivos.',
      say: {
        stem: 'Una pregunta real del EUNACOM de enero de dos mil veintitrés. Un niño, después de los seis meses, presenta candidiasis bucal, otitis media recurrente y dos neumonías con hospitalización.',
        question: '¿Cuál es la inmunodeficiencia más probable?',
        options: 'Las opciones: inmunodeficiencia celular tipo DiGeorge; déficit de complemento; inmunodeficiencia humoral; inmunodeficiencia combinada severa; o enfermedad granulomatosa crónica. Piénsalo.',
        answer: 'Es la C. Otitis y neumonías recurrentes después de los seis meses son un defecto de anticuerpos. La A tienta por la candidiasis, pero DiGeorge se manifiesta desde el período neonatal, con hipocalcemia y cardiopatía.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 55',
      stem: 'Lactante de 8 meses con inmunodeficiencia combinada severa (SCID) diagnosticada.',
      question: '¿Cuál de las siguientes vacunas está absolutamente contraindicada?',
      options: [
        { letter: 'A', text: 'Vacuna antihepatitis B' },
        { letter: 'B', text: 'Vacuna polio oral (OPV) de virus vivos atenuados' },
        { letter: 'C', text: 'Vacuna antineumocócica conjugada' },
        { letter: 'D', text: 'BCG inactivada' },
        { letter: 'E', text: 'Vacuna antiinfluenza inactivada' },
      ],
      correct: 'B',
      explanation: 'Las vacunas con virus vivos atenuados (polio oral, SRP, varicela, BCG) están contraindicadas en las inmunodeficiencias graves. La polio oral puede causar poliomielitis paralítica por virus vacunal en inmunocomprometidos; se usa la polio inactivada. La BCG es una vacuna viva, no inactivada, y también está contraindicada, pero la alternativa D la describe como inactivada.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un lactante de ocho meses tiene diagnosticada una inmunodeficiencia combinada severa.',
        question: '¿Cuál de las vacunas está absolutamente contraindicada?',
        options: 'Las opciones: hepatitis B; polio oral de virus vivos atenuados; neumocócica conjugada; BCG descrita como inactivada; o influenza inactivada. Piénsalo.',
        answer: 'Es la B. Las vacunas de virus vivos, como la polio oral, están contraindicadas en las inmunodeficiencias graves, porque el virus vacunal puede causar enfermedad. Las inactivadas, como la hepatitis B, la neumocócica y la influenza, son seguras. Ojo con la D: en la realidad la BCG es una vacuna viva, pero aquí aparece descrita como inactivada, y por eso no es la respuesta.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 151',
      stem: 'Un niño de 5 meses de edad presenta un cuadro de rinorrea y tos, que va en aumento, hasta presentar accesos de tos y dificultar la alimentación. Al examen físico está en buenas condicioness generales, afebril y sin alteraciones en el examen cardiopulmonar. Se solicita un hemograma, que muestra leucocitosis de 17.000, con 78% de linfocitos y 22% de neutrófilos. La PCR y VHS están levemente elevadas. Se solicita una radiografía de tórax, que muestra un patrón intersticial leve.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Neumonía atípica' },
        { letter: 'B', text: 'Infección por virus influenza' },
        { letter: 'C', text: 'Infección por adenovirus' },
        { letter: 'D', text: 'Coqueluche' },
        { letter: 'E', text: 'Bronquiolitis aguda' },
      ],
      correct: 'D',
      explanation: 'Es una coqueluche clásica: tos en accesos, precedida por un cuadro catarral, y linfocitosis marcada en el hemograma (78% de linfocitos), con el niño afebril y en buenas condiciones.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil dieciséis. Un niño de cinco meses tiene rinorrea y una tos que va en aumento hasta hacerse en accesos, y le dificulta la alimentación. Está en buenas condiciones, afebril, y sin alteraciones cardiopulmonares. El hemograma muestra diecisiete mil leucocitos, con setenta y ocho por ciento de linfocitos. La radiografía muestra un patrón intersticial leve.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: neumonía atípica; influenza; adenovirus; coqueluche; o bronquiolitis aguda. Piénsalo.',
        answer: 'Es la D. Tos en accesos tras un cuadro catarral, sin fiebre, y una linfocitosis marcada son una coqueluche. Aquí la linfocitosis no es la fisiológica: llega a setenta y ocho por ciento con diecisiete mil leucocitos. La E tienta, pero la bronquiolitis tiene sibilancias y no linfocitosis de este tipo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 69',
      stem: 'Lactante de 2 meses con hemograma: hemoglobina 10.2 g/dL, VCM normal, sin síntomas. La madre pregunta si debe iniciar suplemento de hierro.',
      question: '¿Cuál es la explicación correcta?',
      options: [
        { letter: 'A', text: 'Anemia fisiológica del lactante: normal, no requiere tratamiento' },
        { letter: 'B', text: 'Anemia ferropénica: iniciar hierro elemental 2 mg/kg/día' },
        { letter: 'C', text: 'Anemia hemolítica: solicitar Coombs directo' },
        { letter: 'D', text: 'Anemia por déficit de folato: iniciar ácido fólico' },
        { letter: 'E', text: 'Anemia aplásica: derivar a hematología' },
      ],
      correct: 'A',
      explanation: 'Nadir fisiológico a los 2-3 meses: la hemoglobina cae a 9,5-11 g/dL por dilución, disminución de eritropoyetina y destrucción de eritrocitos fetales. Es normal y no requiere tratamiento.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un lactante de dos meses tiene un hemograma con hemoglobina de diez coma dos, VCM normal, y está sin síntomas. La madre pregunta si debe iniciar hierro.',
        question: '¿Cuál es la explicación correcta?',
        options: 'Las opciones: anemia fisiológica, normal; anemia ferropénica con hierro; anemia hemolítica con Coombs; déficit de folato; o anemia aplásica. Piénsalo.',
        answer: 'Es la A. A los dos a tres meses la hemoglobina cae a un nadir fisiológico de nueve coma cinco a once, por dilución, menos eritropoyetina y destrucción de los glóbulos rojos fetales. Es normal y no se trata. La B tienta porque once es el corte de los seis meses a los cinco años, pero a esta edad el corte es otro.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 115',
      stem: 'Un niño de 9 meses tiene palidez de piel y mucosas, por lo que se solicita un hemograma, que muestra hemoglobina: 9 g/dl, hematocrito: 36%, VCM: 68 fl, glóbulos blancos: 6.500 por mm3, plaquetas: 450.000 por mm3.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Anemia ferropriva' },
        { letter: 'B', text: 'Anemia por enfermedades crónicos' },
        { letter: 'C', text: 'Trombocitosis esencial' },
        { letter: 'D', text: 'Hemoglobinopatía' },
        { letter: 'E', text: 'Microesferocitosis familiar' },
      ],
      correct: 'A',
      explanation: 'Es una anemia ferropénica clásica por la edad (9 meses) y por la microcitosis (VCM 68 fL, bajo el límite de unos 70 fL del año). La hemoglobina de 9 está bajo el límite de 11 g/dL de esta edad.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil dieciocho. Un niño de nueve meses tiene palidez. El hemograma muestra hemoglobina de nueve, hematocrito treinta y seis por ciento, VCM de sesenta y ocho, seis mil quinientos leucocitos y cuatrocientas cincuenta mil plaquetas.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: anemia ferropénica; anemia de enfermedad crónica; trombocitosis esencial; hemoglobinopatía; o microesferocitosis familiar. Piénsalo.',
        answer: 'Es la A. Hemoglobina de nueve, bajo el corte de once de esta edad, con un VCM de sesenta y ocho, bajo el límite de unos setenta del año: es una anemia ferropénica, la más frecuente del lactante. La plaquetosis leve acompaña a la ferropenia, y por eso la C no es primaria.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: inmunidad, hígado y hemograma',
      cards: [
        { title: 'Infecciones e inmunidad', tag: 'Cuándo sospechar', kind: 'key', items: [
          { t: 'Niño sano de sala cuna: 6-10 al año', d: 'Leves y con crecimiento normal: sin estudio',
            say: 'Cerremos con las reglas de oro. Un niño de sala cuna con seis a diez infecciones virales leves y buen crecimiento no se estudia: se tranquiliza.' },
          { t: 'Alarma: neumonías, profundas, falla de medro', d: 'IgG, IgA, IgM, hemograma, VIH',
            say: 'Con dos o más neumonías, infecciones profundas, antibióticos endovenosos o falla de medro, pides hemograma con recuento absoluto, inmunoglobulinas y VIH, y derivas.' },
          { t: 'Humoral desde los 6 meses; SCID antes', d: 'Sin vacunas vivas en los celulares',
            say: 'El defecto humoral parte después de los seis meses y se trata con inmunoglobulina de reemplazo. El combinado grave parte antes, y no lleva vacunas vivas.' },
        ] },
        { title: 'Hígado y hemograma', tag: 'No sobrediagnosticar', kind: 'alert', items: [
          { t: 'Hepatomegalia: percutir y buscar el asociado', d: 'Hipoglicemia de ayuno corto: glucogenosis I',
            say: 'La hepatomegalia se confirma por percusión, y se orienta por lo asociado. La aislada con hipoglicemia de ayuno corto y acidosis láctica es la glucogenosis tipo uno.' },
          { t: 'Lactante: linfocitos predominan hasta los 4-6 años', d: 'Hb < 11 hasta los 5 años es anemia',
            say: 'En el hemograma del lactante y del preescolar predominan los linfocitos, y eso no es leucemia. Y hasta los cinco años, una hemoglobina menor de once es anemia, salvo el nadir fisiológico de los dos a tres meses.' },
          { t: 'Blastos, pancitopenia o dolor óseo', d: 'Leucemia: derivar urgente',
            say: 'Blastos, pancitopenia o dolor óseo, sospecha de leucemia y derivación urgente. Si te llevas una sola idea de hoy: el hemograma pediátrico se interpreta con la edad del niño. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Infecciones recurrentes, hepatomegalia y hemograma',
    root: N('start', 'Consulta por infecciones o hemograma raro', 'Edad, gravedad, crecimiento, antecedentes',
      'Te consultan por un niño que se enferma mucho, por un hígado grande o por un hemograma que parece raro. Revisas la edad, la gravedad, el crecimiento y los antecedentes, y te preguntas: ¿hay un signo de alarma?',
      ['Infecciones leves, crecimiento normal', N('ok', 'Patrón normal', 'Seis a diez virales al año: tranquilizar',
        'Si las infecciones son leves, de recuperación completa y el crecimiento es normal, es el patrón esperable, sobre todo en sala cuna. Tranquilizas y no pides exámenes.')],
      ['Signos de alarma de inmunodeficiencia', N('do', 'Estudio inicial', 'Hemograma, IgG, IgA, IgM, VIH, Rx de tórax',
        'Si hay neumonías o infecciones profundas repetidas, antibióticos endovenosos, falla de medro, candidiasis persistente o familiares afectados, pides hemograma con recuento absoluto, inmunoglobulinas, VIH y radiografía de tórax.',
        ['Alterado o sospecha persistente', N('refer', 'Inmunología', 'Sin vacunas vivas si hay defecto celular',
          'Derivas a inmunología, tratas las infecciones precozmente y no indicas vacunas vivas si sospechas un defecto celular. Antes descartas las causas secundarias, como VIH y desnutrición.')],
      )],
      ['Hígado grande', N('q', '¿Hepatomegalia real?', 'Percutir el espacio hepático',
        'Si hay un hígado grande, lo primero es confirmar que sea real, midiendo el espacio hepático por percusión, porque la ptosis por hiperinsuflación es normal.',
        ['Con hipoglicemia o persistente', N('refer', 'Estudio y derivación', 'Glicemia, lípidos, ácido úrico, lactato, eco',
          'Si es real, pides hemograma, transaminasas, glicemia en ayuno, lípidos, ácido úrico, lactato y ecografía. Con hipoglicemia de ayuno corto piensas en glucogenosis, y derivas.')],
      )],
      ['Hemograma del lactante con linfocitos', N('q', '¿Normal para la edad?', 'Compara con los valores por edad',
        'Si el hemograma es de un lactante o preescolar con mayoría de linfocitos, lo comparas con los valores por edad.',
        ['Sin blastos ni citopenias', N('ok', 'Es fisiológico', 'Linfocitos hasta los 4-6 años',
          'Si el frotis es normal, sin blastos ni citopenias, es fisiológico, y no es leucemia ni infección viral.')],
        ['Blastos, pancitopenia o dolor óseo', N('alert', 'Sospecha de leucemia', 'GES; hematología urgente',
          'Con blastos, pancitopenia o dolor óseo con hepatoesplenomegalia, sospechas leucemia y derivas con urgencia a hematología, con cobertura GES.')],
      )],
    ),
  },
};
