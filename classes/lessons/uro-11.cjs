// Clase 13.11 (Urología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_urologia.cjs (uro-11). Preguntas: banco real EUNACOM (class_questions.cjs y --search).
// Reales usadas: Julio 2015 P46 (tumor renal sólido pequeño: nefrectomía parcial; código propio de la clase) y Julio 2017 P78 (hipercalcemia paraneoplásica en hipernefroma operado: se estudia con PTH).
// Corte de nefrectomía parcial: el libro dice T1 hasta 4 cm e idealmente hasta 7 cm; la real de 2015 dice menor de 7 cm. Se enseña "T1, hasta 7 cm, parcial siempre que sea posible".
// El estudio completo de la hematuria se ve en uro-15 y solo se enlaza.
// Frecuencia de células claras: el texto principal dice 80-85% y la tabla 75-80%; se usa "alrededor de 80%".
// Imágenes: Bailey & Love 27.ª ed., Fig. 76.22; Radiología de tórax (CXR), Fig. 21.2.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'uro-11',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cáncer renal: carcinoma de células claras, tríada clásica, paraneoplásicos, TAC y nefrectomía',
      say: 'Bienvenido. Hoy hablamos del cáncer del riñón, y lo primero que tienes que saber es que casi nunca se presenta como lo describen los libros antiguos: hoy se descubre por casualidad en una ecografía. El examen pregunta qué examen pedir ante una masa renal sólida, por qué no se hace biopsia de rutina, cuándo la nefrectomía es parcial, y los síndromes paraneoplásicos, que son el sello de este tumor.',
    },

    {
      type: 'points',
      kicker: 'Epidemiología',
      title: 'Carcinoma de células renales',
      cards: [
        { title: 'Quién', tag: 'Riesgo', kind: 'key', items: [
          { t: 'Varón de 50 a 70 años', d: 'Tabaco, obesidad, hipertensión',
            say: 'Predomina en varones entre los cincuenta y los setenta años. Los factores de riesgo son el tabaquismo, la obesidad, la hipertensión y la enfermedad quística adquirida en pacientes en diálisis.' },
          { t: 'Gen VHL en 3p', d: 'Von Hippel-Lindau',
            say: 'Y a nivel genético se asocia a la pérdida del gen supresor VHL, de von Hippel-Lindau, en el cromosoma tres p.' },
        ] },
        { title: 'Histología', tag: 'Tipos', kind: 'normal', items: [
          { t: 'Células claras: ~80%', d: 'Del túbulo proximal',
            say: 'Cerca del ochenta por ciento son de células claras, que nacen del túbulo contorneado proximal. El citoplasma se ve claro porque está lleno de lípidos y glucógeno.' },
          { t: 'Papilar 10-15%, cromófobo 5%', d: 'Cromófobo: mejor pronóstico',
            say: 'Después vienen el papilar, con mutación de MET, y el cromófobo, de excelente pronóstico y con pocas metástasis.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Tríada clásica, hoy infrecuente',
      cards: [
        { title: 'Presentación', tag: 'Hoy', kind: 'key', items: [
          { t: 'Incidentaloma: más del 65%', d: 'Hallazgo en ecografía o TAC',
            say: 'Hoy más de dos tercios se descubren de casualidad, en una ecografía pedida por otro motivo. El paciente está asintomático.' },
          { t: 'Tríada de Guyon', d: 'Dolor en flanco, hematuria, masa palpable',
            say: 'La tríada clásica es dolor en el flanco, hematuria macroscópica y masa palpable. Está completa en menos de uno de cada diez, y significa enfermedad avanzada.' },
        ] },
        { title: 'Paraneoplásicos', tag: 'Sello del tumor', kind: 'alert', items: [
          { t: 'Hipercalcemia', d: 'Por PTHrP',
            say: 'El tumor produce péptido relacionado a la paratohormona, y eso causa hipercalcemia. Se estudia con paratohormona, que sale baja.' },
          { t: 'Policitemia', d: 'Eritropoyetina ectópica',
            say: 'Produce eritropoyetina, y sube la hemoglobina.' },
          { t: 'Hipertensión', d: 'Por renina',
            say: 'Produce renina, y causa hipertensión.' },
          { t: 'Síndrome de Stauffer', d: 'Colestasis sin metástasis hepática',
            say: 'Y el síndrome de Stauffer: fosfatasas alcalinas altas e incluso ictericia, sin metástasis hepáticas, que se corrige al sacar el tumor.' },
        ] },
      ],
    },

    {
      type: 'image',
      light: true,
      kicker: 'Así se ve',
      title: 'Carcinoma renal: pieza y metástasis',
      images: [
        { src: 'biblioteca/19_urologia/uro-11/01_pieza-nefrectomia-radical-carcinoma-renal__bailey-love_p1441.jpg', label: 'Pieza de nefrectomía radical con carcinoma renal', credit: 'Bailey & Love 27.ª ed., Fig. 76.22' },
        { src: 'biblioteca/19_urologia/uro-11/02_rx-torax-metastasis-carcinoma-renal__cxr_p288.jpg', label: 'Radiografía de tórax: nódulos pulmonares por metástasis de carcinoma renal', credit: 'CXR, Fig. 21.2' },
      ],
      steps: [
        { note: 'Tumor sólido dentro del riñón',
          say: 'Esta es la pieza de una nefrectomía radical: el tumor, de aspecto amarillento por los lípidos de las células claras, con zonas de hemorragia y necrosis, dentro del riñón.' },
        { note: 'Metástasis pulmonares',
          say: 'Y esta es una radiografía de tórax con múltiples nódulos redondos y bien delimitados, metástasis de un carcinoma renal. El pulmón es el sitio de metástasis más frecuente de este tumor.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico',
      title: 'Masa renal sólida: TAC trifásico',
      nodes: [
        { id: 'a', col: 0, row: 1, k: 'start', t: 'Masa renal sólida', s: 'Hallazgo en ecografía' },
        { id: 'b', col: 1, row: 1, k: 'good', t: 'TAC trifásico con contraste', s: 'Examen de elección' },
        { id: 'c', col: 2, row: 0, k: 'alert', t: 'Realce mayor a 15-20 UH', s: 'Neoangiogénesis tumoral' },
        { id: 'd', col: 3, row: 0, k: 'effect', t: 'Se presume cáncer', s: 'Cirugía sin biopsia' },
        { id: 'e', col: 2, row: 2, k: 'trap', t: 'Biopsia percutánea de rutina', s: 'No cambia la conducta' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'b', to: 'e' },
      ],
      steps: [
        { show: ['a', 'b'], note: 'La ecografía no basta',
          say: 'Una ecografía que muestra una masa sólida en el riñón no define la conducta. El examen de elección es el TAC de abdomen y pelvis trifásico, con contraste endovenoso. Esa misma imagen etapifica: vena renal, ganglios y anatomía quirúrgica.' },
        { show: ['c', 'd'], note: 'Realce con contraste = maligno',
          say: 'El criterio de malignidad es el realce con el contraste: un aumento de más de quince a veinte unidades Hounsfield respecto a la fase simple, que refleja los vasos nuevos del tumor. Una masa sólida que capta contraste se presume cáncer renal.' },
        { show: ['e'], note: 'No se biopsia de rutina',
          say: 'Y en una masa sólida resecable con realce típico, la biopsia percutánea no se pide de rutina. No cambia la conducta quirúrgica, y expone a hematomas y a falsos negativos. Es una trampa clásica.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Cirugía: parcial o radical',
      cards: [
        { title: 'Enfermedad localizada', tag: 'Curativo', kind: 'key', items: [
          { t: 'Tumor T1: nefrectomía parcial', d: 'Hasta 7 cm, preserva riñón',
            say: 'En un tumor T uno, que son los de hasta cuatro centímetros y que hoy llegan idealmente hasta siete, la técnica de elección es la nefrectomía parcial. Se saca el tumor con un margen de parénquima sano. Tiene la misma sobrevida oncológica que la radical y preserva función renal.' },
          { t: 'Grande, central o hiliar: radical', d: 'Más de 7 cm, en bloque con Gerota',
            say: 'Si el tumor es grande, de más de siete centímetros, central o compromete el hilio, se hace nefrectomía radical, extirpando el riñón completo dentro de la fascia de Gerota.' },
        ] },
        { title: 'Enfermedad avanzada', tag: 'Resistente', kind: 'pharma', items: [
          { t: 'Radio y quimio ineficaces', d: 'Tumor resistente',
            say: 'El cáncer renal es resistente a la quimioterapia y a la radioterapia convencionales.' },
          { t: 'Antiangiogénicos e inmunoterapia', d: 'Sunitinib, nivolumab',
            say: 'En enfermedad metastásica se usan fármacos contra el factor de crecimiento endotelial, como sunitinib, o inmunoterapia, como nivolumab con ipilimumab. Está cubierto por el GES.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Subtipos',
      title: 'Histología y paraneoplásicos',
      head: ['Entidad', 'Dato clave', 'Conducta'],
      rows: [
        { cells: ['Células claras', '~80%, gen VHL', 'Nefrectomía; antiangiogénicos si metastásico'],
          say: 'Células claras: el más frecuente, asociado a VHL, que se opera y, si hay metástasis, se trata con antiangiogénicos.' },
        { cells: ['Papilar', '10-15%, MET', 'Nefrectomía con preservación'],
          say: 'El papilar tiene mutación de MET, y a veces es multifocal.' },
        { cells: ['Cromófobo', '5%, buen pronóstico', 'Cirugía curativa'],
          say: 'El cromófobo tiene excelente pronóstico, y la cirugía suele curar.' },
        { cells: ['Stauffer', 'Fosfatasa alcalina alta, sin metástasis', 'Revierte al operar'],
          say: 'El síndrome de Stauffer es una disfunción hepática reversible que se corrige al extirpar el tumor.' },
        { cells: ['Hipercalcemia', 'PTHrP', 'Hidratación, bifosfonatos, cirugía'],
          say: 'Y la hipercalcemia paraneoplásica, por péptido relacionado a la paratohormona, se trata con hidratación, bifosfonatos y cirugía del tumor primario.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la masa renal hallada por casualidad a la cirugía.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Masa renal sólida en ecografía', 'TAC trifásico', 'Biopsia percutánea'],
          say: 'Masa renal sólida: TAC con contraste, no biopsia.' },
        { cells: ['Tumor pequeño, T1', 'Nefrectomía parcial', 'Nefrectomía radical'],
          say: 'Tumor pequeño: nefrectomía parcial. La radical se reserva para los grandes o centrales.' },
        { cells: ['Dolor, hematuria y masa', 'Enfermedad avanzada', 'Esperar la tríada'],
          say: 'La tríada completa es tardía. No se espera a verla para sospechar.' },
        { cells: ['Hipercalcemia con tumor', 'Medir PTH', 'Dar por hecho hiperparatiroidismo'],
          say: 'Con hipercalcemia y un cáncer, la paratohormona sale baja. Si está elevada, es hiperparatiroidismo primario.' },
        { cells: ['Cáncer renal metastásico', 'Antiangiogénicos', 'Quimioterapia o radioterapia'],
          say: 'Y en el metastásico, antiangiogénicos o inmunoterapia, no quimioterapia ni radioterapia.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 56 años, fumador, hipertenso. Una ecografía pedida por dispepsia muestra una masa sólida de 3,5 cm en la corteza del polo superior del riñón izquierdo. Está asintomático, con creatinina normal y orina normal. El TAC trifásico muestra realce marcado, sin invasión de la vena renal ni adenopatías.',
      question: '¿Cuál es la conducta de elección?',
      options: [
        { letter: 'A', text: 'Biopsia percutánea de la masa' },
        { letter: 'B', text: 'Nefrectomía parcial' },
        { letter: 'C', text: 'Nefrectomía radical con linfadenectomía' },
        { letter: 'D', text: 'Sunitinib' },
        { letter: 'E', text: 'Controles ecográficos cada 6 meses' },
      ],
      correct: 'B',
      explanation: 'Masa sólida con realce franco, T1a, periférica y sin metástasis: carcinoma de células renales. La conducta curativa es la nefrectomía parcial, que preserva función renal. No se biopsia de rutina.',
      say: {
        stem: 'Un hombre de cincuenta y seis años, fumador e hipertenso, con una masa sólida de tres coma cinco centímetros en el polo superior del riñón izquierdo, hallada en una ecografía. Está asintomático. El TAC trifásico muestra un realce marcado, sin invasión de la vena renal ni ganglios.',
        question: '¿Cuál es la conducta de elección?',
        options: 'Las opciones: biopsia percutánea; nefrectomía parcial; nefrectomía radical con linfadenectomía; sunitinib; o controles ecográficos. Piénsalo.',
        answer: 'Es la B. Es un tumor pequeño, periférico, con realce: cáncer renal en estadio T uno, y se hace nefrectomía parcial. La biopsia no se pide de rutina, la radical es sobretratamiento, y el sunitinib es para enfermedad metastásica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 46',
      stem: 'Un paciente de presenta dolor abdominal en el flanco izquierdo, por lo que se realiza una ecografía abdominal, que muestra un tumor renal sólido, de 2,5 cm de diámetro, en el polo superior del riñón derecho. Se solicita un TAC, que confirma el tumor renal de aspecto sólido y que capta contraste. ¿Cuál es la conducta más adecuada?',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Nefrectomía radical' },
        { letter: 'B', text: 'Nefrectomía parcial' },
        { letter: 'C', text: 'Nefroureterectomía' },
        { letter: 'D', text: 'Iniciar inhibidores de la tirosinasa' },
        { letter: 'E', text: 'Realizar seguimiento ecográfico' },
      ],
      correct: 'B',
      explanation: 'Todo tumor renal sólido que capta contraste se presume cáncer renal. Si es pequeño, se hace nefrectomía parcial; la radical es para los grandes. La nefroureterectomía es para tumores de la pelvis renal.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil quince. Un paciente con una ecografía que muestra un tumor renal sólido de dos coma cinco centímetros en el polo superior del riñón derecho. El TAC confirma que es sólido y capta contraste.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: nefrectomía radical; nefrectomía parcial; nefroureterectomía; inhibidores de la tirosinasa; o seguimiento ecográfico. Piénsalo.',
        answer: 'Es la B. Un tumor sólido que capta contraste se presume cáncer, y si es pequeño se hace nefrectomía parcial. La nefroureterectomía es para el tumor de la pelvis renal, y el seguimiento no corresponde a un tumor que realza.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 78',
      stem: 'Paciente de 63 años, con antecedente de hipernefroma operado hace un año, con buena evolución, consulta por cuadro de astenia y debilidad de 7 días, controlándose exámenes de sangre entre los que destaca calcemia de 11,8 mg/dL (valor normal 8,5-10,5 mg/dL), albúmina normal. ¿Cuál es el examen de elección para continuar el estudio de este paciente?',
      question: '¿Cuál es el examen de elección para continuar el estudio?',
      options: [
        { letter: 'A', text: 'Cintigrafía ósea' },
        { letter: 'B', text: 'Niveles plasmáticos de calcio y paratohormona' },
        { letter: 'C', text: 'TAC de abdomen y pelvis' },
        { letter: 'D', text: 'Niveles plasmáticos de vitamina D' },
        { letter: 'E', text: 'Resonancia magnética de abdomen y pelvis' },
      ],
      correct: 'B',
      explanation: 'Es una hipercalcemia, posiblemente paraneoplásica. Se estudia siempre con paratohormona: si está elevada, es hiperparatiroidismo primario; si está baja, es probablemente cáncer.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecisiete. Un paciente de sesenta y tres años con un hipernefroma operado hace un año, que consulta por astenia y debilidad. La calcemia es de once coma ocho, con albúmina normal.',
        question: '¿Cuál es el examen de elección para continuar el estudio?',
        options: 'Las opciones: cintigrafía ósea; calcio y paratohormona; TAC de abdomen y pelvis; vitamina D; o resonancia de abdomen y pelvis. Piénsalo.',
        answer: 'Es la B. Una hipercalcemia siempre se estudia con paratohormona. Con un cáncer renal, lo esperable es una paratohormona baja, por el péptido relacionado que produce el tumor. Si estuviera alta, sería un hiperparatiroidismo primario. Las imágenes vienen después.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: cáncer renal',
      cards: [
        { title: 'Diagnóstico', tag: 'Incidentaloma', kind: 'key', items: [
          { t: 'Masa sólida: TAC trifásico', d: 'Realce mayor a 15-20 UH',
            say: 'Cerremos con las reglas de oro. Una masa renal sólida se estudia con TAC trifásico, y el realce con contraste es lo que define que es un tumor. No se biopsia de rutina.' },
          { t: 'Tríada completa: enfermedad avanzada', d: 'Hoy se halla por casualidad',
            say: 'La tríada clásica es tardía. Hoy la mayoría se descubre por casualidad en una ecografía.' },
        ] },
        { title: 'Conducta', tag: 'Quirúrgica', kind: 'alert', items: [
          { t: 'T1: nefrectomía parcial', d: 'Radical si es grande o central',
            say: 'Si el tumor es pequeño, nefrectomía parcial. Si es grande o central, radical.' },
          { t: 'Hipercalcemia: medir PTH', d: 'Paraneoplásicos: PTHrP, EPO, renina',
            say: 'Y recuerda los paraneoplásicos: hipercalcemia, policitemia, hipertensión y síndrome de Stauffer. Si te llevas una sola idea de hoy: masa renal sólida que capta contraste es cáncer hasta demostrar lo contrario, sin biopsia, y se opera, parcial si es pequeño. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Masa renal sólida hallada en ecografía',
    root: N('start', 'Masa renal sólida', 'Hallazgo en ecografía',
      'Una masa renal sólida, descubierta por casualidad en una ecografía. El siguiente paso es caracterizarla con un TAC trifásico.',
      ['Siempre', N('do', 'TAC trifásico con contraste', 'Realce mayor a 15-20 UH',
        'Se pide un TAC de abdomen y pelvis trifásico. Si hay realce, es un tumor, y no se biopsia de rutina.',
        ['Tumor T1, periférico', N('ok', 'Nefrectomía parcial', 'Preserva función renal',
          'Un tumor pequeño y periférico se opera con nefrectomía parcial, con la misma sobrevida que la radical.')],
        ['Grande, central o hiliar', N('do', 'Nefrectomía radical', 'En bloque dentro de Gerota',
          'Si es grande, central o compromete el hilio, se hace nefrectomía radical.')],
        ['Metástasis', N('refer', 'Terapia sistémica', 'Antiangiogénicos e inmunoterapia',
          'Con metástasis, el tratamiento es sistémico, con antiangiogénicos o inmunoterapia. La quimioterapia y la radioterapia no sirven.')],
      )],
    ),
  },
};
