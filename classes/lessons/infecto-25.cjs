// Clase 3.25 (Infectología) — guion docente escrito a mano (estándar Módulo 1). Tema nuevo de hueco del Perfil V3.
// Fuente clínica: books/scripts/dataset_infectologia_bloque_5.cjs (inf-25 / infecto-25, tier 2). Códigos: 1.04.1.016 (influenza),
// 1.04.1.029 (COVID-19 leve a moderado, adulto) y 2.01.2.144 (SARS-CoV-2 en el niño), según books/data/v3_codemap.json.
// Preguntas reales (class_questions.cjs --search "influenza|oseltamivir|COVID|SARS-CoV|MIS-C|multisistémico"): Julio 2015 P141 (código 1.04.1.016,
// influenza en adulto sano: tratamiento sintomático) y Agosto 2021 P36 (código 2.01.2.144, MIS-C). Enunciados y alternativas copiados tal cual.
// El código 1.04.1.029 no tiene pregunta real: para COVID del adulto se usa la pregunta de práctica del libro, con la etiqueta
// "Banco EUNACOM · Caso representativo" (kicker "Pregunta del banco EUNACOM"), sin inventar fecha.
// No usadas: Julio 2013 P156 (adulto de 66 años con influenza: la clave del banco es acetaminofeno, pero el libro indica oseltamivir en los
// ≥ 65 años, grupo de riesgo; se descartó por contradecir al libro, ver REVISION_CONTENIDO) y Julio 2017 P130 (niño de 4 años con influenza B:
// clave acetaminofeno; el libro incluye a los menores de 5 años entre los grupos de riesgo con indicación de oseltamivir; confianza 0,35),
// Diciembre 2018 P10 (resfrío, código 1.05.1.022), Julio 2019 P67 (alergia al huevo y vacuna: fuera del tema) y las de embarazo y lactancia con COVID.
// El caso clínico es la viñeta del libro (influenza en una mujer de 68 años con diabetes e hipertensión): la pregunta real Julio 2013 P156 que
// la habría reemplazado se descartó.
// Fotos en contexto: TAC abdominal de un adolescente con MIS-C (Nelson 22.ª ed., Fig. 311.4). No hay foto verificada de influenza ni de COVID
// del adulto en books/data/atlas_fotos_verificadas.json ni en classes/media/biblioteca; la radiografía pediátrica de COVID (Nelson Fig. 311.3) no
// muestra hallazgos claros.
// En movimiento: scenes/infecto_nuevas.html (?v=covid) sobre Servier "pulmones" (ilustración real), CC BY 4.0: gravedad del COVID-19 del adulto.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'infecto-25',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Influenza y COVID-19 en el adulto y en el niño: a quién se trata, con qué y qué se vigila',
      say: 'Bienvenido. Hoy vemos los dos virus respiratorios que más consultas generan cada invierno: la influenza y el COVID diecinueve. Para cada uno el examen pregunta lo mismo: a quién se le da el antiviral y a quién solo se le da paracetamol. Y en el niño aparece una complicación que no se te puede pasar: el síndrome inflamatorio multisistémico. Partamos por la influenza.',
    },

    {
      type: 'points',
      kicker: 'Influenza',
      title: 'Fiebre brusca, mialgias y tos seca',
      cards: [
        { title: 'Clínica', tag: 'No es un resfrío', kind: 'key', items: [
          { t: 'Fiebre alta de inicio brusco', d: 'Mialgias, cefalea, malestar intenso',
            say: 'La influenza, causada por los virus influenza A y B, se transmite por gotitas y brota en invierno. Se presenta con fiebre alta de inicio brusco, mialgias, cefalea, un malestar intenso, tos seca y odinofagia.' },
          { t: 'Resfrío: rinorrea sin fiebre alta', d: 'Esa es la diferencia',
            say: 'En el resfrío común, en cambio, predominan la rinorrea y la congestión, sin fiebre alta. Esa diferencia ayuda. La influenza dura de tres a siete días.' },
        ] },
        { title: 'Diagnóstico', tag: 'Clínico en temporada', kind: 'criteria', items: [
          { t: 'Clínico durante la temporada', d: 'No se pide PCR a todos',
            say: 'En temporada, el diagnóstico es clínico.' },
          { t: 'PCR o inmunofluorescencia', d: 'Hospitalizados, graves o vigilancia',
            say: 'La confirmación, con PCR o inmunofluorescencia del aspirado nasofaríngeo, se reserva para pacientes hospitalizados, graves o para la vigilancia epidemiológica.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Complicaciones y riesgo',
      title: 'Quién se complica',
      cards: [
        { title: 'Complicaciones', tag: 'Qué puede pasar', kind: 'alert', items: [
          { t: 'Neumonía viral o bacteriana secundaria', d: 'Neumococo y Staphylococcus aureus',
            say: 'La influenza puede dar neumonía viral primaria o una neumonía bacteriana secundaria, por neumococo o por Staphylococcus aureus.' },
          { t: 'Descompensa enfermedades crónicas', d: 'EPOC, asma, insuficiencia cardíaca',
            say: 'También descompensa las enfermedades crónicas, como la EPOC, el asma y la insuficiencia cardíaca, y puede dar miocarditis y encefalopatía.' },
          { t: 'Síndrome de Reye con aspirina', d: 'Por eso no se usa en niños',
            say: 'Y en niños que toman aspirina, el síndrome de Reye. Por eso la aspirina no se usa.' },
        ] },
        { title: 'Grupos de riesgo', tag: 'Los que reciben antiviral', kind: 'criteria', items: [
          { t: '≥ 65 años y menores de 5 años', d: 'Sobre todo menores de 2 años',
            say: 'Los grupos de riesgo son las personas de sesenta y cinco años o más y los menores de cinco años, sobre todo los menores de dos.' },
          { t: 'Embarazadas y obesidad mórbida', d: 'Enfermedades cardiopulmonares, renales, hepáticas',
            say: 'También las embarazadas, la obesidad mórbida y las enfermedades cardiopulmonares, renales y hepáticas.' },
          { t: 'Diabetes e inmunosupresión', d: 'Se repite en el COVID',
            say: 'Y la diabetes y la inmunosupresión. Esta lista se repite en el COVID, así que apréndela una vez.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento y prevención',
      title: 'Oseltamivir: a quién y cuándo',
      cards: [
        { title: 'Oseltamivir', tag: 'Inhibidor de la neuraminidasa', kind: 'pharma', items: [
          { t: '75 mg cada 12 h por 5 días', d: 'Idealmente en las primeras 48 horas',
            say: 'El antiviral es el oseltamivir, un inhibidor de la neuraminidasa: setenta y cinco miligramos cada doce horas por cinco días, idealmente en las primeras cuarenta y ocho horas.' },
          { t: 'Grupos de riesgo y formas graves', d: 'En graves, sin esperar las 48 horas',
            say: 'Está indicado en los grupos de riesgo, en las embarazadas y en las formas graves. En un paciente grave u hospitalizado se da aunque hayan pasado más de cuarenta y ocho horas, y sin esperar la confirmación.' },
          { t: 'Adulto sano con cuadro leve', d: 'Sintomático; oseltamivir opcional',
            say: 'En cambio, un adulto sano con un cuadro leve solo necesita tratamiento sintomático: paracetamol, hidratación y reposo. El oseltamivir es opcional y acorta la enfermedad cerca de un día.' },
          { t: 'Niños: dosis por peso', d: '≤ 15 kg 30 mg; hasta > 40 kg 75 mg',
            say: 'En niños la dosis es por peso: treinta miligramos hasta quince kilos, y setenta y cinco por encima de cuarenta, siempre cada doce horas. En lactantes menores de un año son tres miligramos por kilo por dosis. Y se ajusta en insuficiencia renal.' },
        ] },
        { title: 'Prevención', tag: 'Lo que se pregunta', kind: 'key', items: [
          { t: 'Vacuna inactivada anual', d: 'Embarazadas, ≥ 65 años, crónicos, personal de salud, niños de 6 meses a 5.º básico',
            say: 'La prevención es la vacuna inactivada anual, gratuita en el Programa Nacional de Inmunizaciones para embarazadas, mayores de sesenta y cinco años, enfermos crónicos, personal de salud y niños desde los seis meses hasta quinto básico.' },
          { t: 'Lavado de manos, etiqueta respiratoria, gotitas', d: 'Quimioprofilaxis solo a contactos de alto riesgo no vacunados',
            say: 'Se suman lavado de manos, etiqueta respiratoria y aislamiento por gotitas. La profilaxis con oseltamivir se reserva para contactos de alto riesgo no vacunados.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'COVID-19 del adulto',
      title: 'Clasificar por gravedad',
      cards: [
        { title: 'Cuadro y diagnóstico', tag: 'SARS-CoV-2', kind: 'key', items: [
          { t: 'Fiebre, tos, odinofagia, mialgias', d: 'Anosmia y ageusia, menos con las variantes recientes',
            say: 'El COVID diecinueve va desde la infección asintomática hasta la insuficiencia respiratoria grave. Los síntomas son fiebre, tos, odinofagia, mialgias, cefalea, y la pérdida del olfato y del gusto, hoy menos frecuente.' },
          { t: 'PCR o test de antígeno', d: 'Mejor rendimiento los primeros 5 a 7 días',
            say: 'Se confirma con PCR o con test de antígeno, que rinde más durante los primeros cinco a siete días de síntomas.' },
        ] },
        { title: 'Gravedad', tag: 'Cuatro niveles', kind: 'criteria', items: [
          { t: 'Leve: sin disnea ni neumonía', d: 'Moderada: neumonía con SpO₂ ≥ 94%',
            say: 'Es leve si no hay disnea ni neumonía, y moderada si hay neumonía con saturación de noventa y cuatro por ciento o más.' },
          { t: 'Grave: SpO₂ < 94%, FR > 30 o infiltrados > 50%', d: 'Crítica: insuficiencia respiratoria, shock',
            say: 'Es grave si la saturación ambiental es menor de noventa y cuatro, la frecuencia respiratoria mayor de treinta o los infiltrados superan la mitad del pulmón. Y crítica si hay insuficiencia respiratoria, shock o falla multiorgánica.' },
          { t: 'Riesgo de progresión', d: 'Edad, obesidad, diabetes, enfermedad cardiovascular o renal, inmunosupresión, sin vacuna',
            say: 'Progresan más los de edad avanzada, con obesidad, diabetes, enfermedad cardiovascular o renal, inmunosupresión, y los que no están vacunados.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento del COVID-19',
      title: 'Antiviral al que tiene riesgo, dexametasona al que necesita oxígeno',
      cards: [
        { title: 'Leve a moderado', tag: 'Nivel completo', kind: 'pharma', items: [
          { t: 'Sintomático y signos de alarma', d: 'Paracetamol, hidratación, reposo y aislamiento',
            say: 'En la enfermedad leve a moderada el manejo es sintomático: paracetamol, hidratación, reposo y aislamiento mientras haya síntomas. Se educa sobre los signos de alarma: disnea, saturación baja, dolor torácico o compromiso de conciencia.' },
          { t: 'Con riesgo de progresión: nirmatrelvir/ritonavir', d: '300/100 mg cada 12 h por 5 días, en los primeros 5 días',
            say: 'Si hay riesgo de progresión, se indica nirmatrelvir con ritonavir, trescientos y cien miligramos cada doce horas por cinco días, dentro de los primeros cinco días de síntomas. Ojo con las interacciones del ritonavir y con el ajuste en insuficiencia renal. La alternativa es remdesivir por tres días.' },
          { t: 'Antibióticos solo si hay sobreinfección', d: 'Nunca de rutina',
            say: 'Los antibióticos solo se usan si hay una sobreinfección bacteriana.' },
        ] },
        { title: 'Con oxígeno', tag: 'Hospitalizar', kind: 'alert', items: [
          { t: 'Dexametasona 6 mg al día, hasta 10 días', d: 'Solo si requiere oxígeno',
            say: 'Si requiere oxígeno, se agrega dexametasona seis miligramos al día por hasta diez días, anticoagulación profiláctica y, en casos seleccionados, baricitinib o tocilizumab.' },
          { t: 'Hospitalizar con SpO₂ < 94%', d: 'Corticoide en el leve: sin beneficio',
            say: 'Se hospitaliza si la saturación es menor de noventa y cuatro por ciento. El corticoide en la enfermedad leve no tiene lugar.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Del COVID leve al crítico',
      images: [
        { src: 'animaciones/infecto-25/A1_covid_gravedad.mp4', label: 'COVID-19 del adulto: leve, moderado, grave y crítico', credit: 'Ilustración: Servier Medical Art, CC BY 4.0 · capas y rótulos propios' },
      ],
      steps: [
        { note: 'La saturación decide',
          say: 'Mira cómo avanza la gravedad. En el leve no hay neumonía y la saturación es normal. En el moderado hay neumonía, pero la saturación sigue en noventa y cuatro o más. En el grave, la saturación baja de noventa y cuatro, la frecuencia respiratoria pasa de treinta o los infiltrados superan la mitad del pulmón, y ahí se hospitaliza y se da dexametasona. En el crítico hay insuficiencia respiratoria, shock y falla multiorgánica.' },
      ],
    },

    {
      type: 'points',
      kicker: 'COVID-19 en el niño',
      title: 'Casi siempre leve, pero con signos de gravedad que vigilar',
      cards: [
        { title: 'Cuadro habitual', tag: 'Leve', kind: 'key', items: [
          { t: 'Fiebre, tos, rinorrea, síntomas digestivos', d: 'Laringitis o bronquiolitis',
            say: 'En el niño, el COVID diecinueve suele ser leve: fiebre, tos, rinorrea, síntomas digestivos, laringitis o bronquiolitis. Se maneja con tratamiento sintomático.' },
          { t: 'Más riesgo: lactantes, cardiopatías, obesidad', d: 'Inmunosupresión y enfermedades crónicas',
            say: 'Tienen más riesgo los lactantes y los niños con cardiopatías, inmunosupresión, obesidad o enfermedades crónicas.' },
        ] },
        { title: 'Signos de gravedad', tag: 'Cuándo derivar u hospitalizar', kind: 'alert', items: [
          { t: 'Dificultad respiratoria, retracciones, SpO₂ < 94%', d: 'Rechazo alimentario, somnolencia, deshidratación',
            say: 'Se vigilan los signos de gravedad: dificultad respiratoria, retracciones, saturación menor de noventa y cuatro, rechazo alimentario, somnolencia o deshidratación.' },
          { t: 'Hipoxemia: hospitalizar y dexametasona', d: 'Antiviral solo en adolescentes de riesgo ≥ 12 años y ≥ 40 kg',
            say: 'Con hipoxemia se hospitaliza y, si requiere oxígeno, se usa dexametasona. El antiviral se reserva para adolescentes de riesgo, de doce años o más y cuarenta kilos o más.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'MIS-C',
      title: 'Síndrome inflamatorio multisistémico pediátrico',
      nodes: [
        { id: 'c', col: 0, row: 1, k: 'cause', t: 'COVID-19 o contacto', s: 'Hace 2 a 6 semanas' },
        { id: 'r', col: 2, row: 1, k: 'mech', t: 'Respuesta inmune exagerada', s: 'Inflamación multisistémica' },
        { id: 'f', col: 4, row: 0, k: 'effect', t: 'Fiebre ≥ 3 días y varios órganos', s: 'Digestivo, piel, conjuntivas, corazón' },
        { id: 'l', col: 4, row: 2, k: 'alert', t: 'PCR, ferritina, dímero D, troponina, BNP altos', s: 'Linfopenia y plaquetas bajas' },
        { id: 'u', col: 2, row: 3, k: 'refer', t: 'UCI pediátrica', s: 'Inmunoglobulina, corticoides, ecocardiograma' },
      ],
      edges: [
        { from: 'c', to: 'r' }, { from: 'r', to: 'f' }, { from: 'r', to: 'l' }, { from: 'f', to: 'u' }, { from: 'l', to: 'u' },
      ],
      steps: [
        { show: ['c', 'r'], note: 'Semanas después de la infección',
          say: 'El síndrome inflamatorio multisistémico pediátrico, o MIS-C, aparece de dos a seis semanas después de la infección o del contacto con el SARS-CoV dos. Es una respuesta inmune exagerada, no la infección activa.' },
        { show: ['f'], note: 'Fiebre persistente y varios órganos',
          say: 'Se presenta con fiebre persistente, de tres días o más, con compromiso de varios órganos: dolor abdominal y vómitos que pueden simular una apendicitis, exantema, conjuntivitis, shock, miocarditis o disfunción ventricular. Mira esta tomografía de un adolescente: las asas con las paredes engrosadas, y ganglios mesentéricos aumentados.',
          photo: { src: 'biblioteca/07_infectologia/infecto-25/01_mis-c-tac-abdominal__nelson_p2620.jpg', label: 'MIS-C: compromiso digestivo', at: 'Mira esta tomografía', credit: 'Nelson 22.ª ed., Fig. 311.4' } },
        { show: ['l', 'u'], note: 'Laboratorio y derivación',
          say: 'El laboratorio muestra PCR, ferritina, dímero D, troponina y BNP elevados, con linfopenia y trombocitopenia. Se diferencia del Kawasaki por la edad mayor, el predominio de síntomas digestivos y el shock. Es una urgencia: se deriva a UCI pediátrica para inmunoglobulina endovenosa, corticoides y manejo del shock, con ecocardiograma.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Influenza versus COVID-19',
      head: ['Aspecto', 'Influenza', 'COVID-19', 'Conducta'],
      rows: [
        { cells: ['Inicio y síntomas', 'Brusco; fiebre, mialgias y cefalea intensas', 'Variable; anosmia, disnea, más prolongado', 'Confirmar con PCR o antígeno'],
          say: 'Influenza: inicio brusco, con fiebre, mialgias y cefalea intensas. COVID: más variable, con anosmia y disnea, y un curso más prolongado. Se confirma con PCR o test de antígeno.' },
        { cells: ['Antiviral', 'Oseltamivir 75 mg c/12 h × 5 días', 'Nirmatrelvir/ritonavir × 5 días o remdesivir × 3 días', 'Solo riesgo o gravedad'],
          say: 'Antivirales: oseltamivir en la influenza, nirmatrelvir con ritonavir o remdesivir en el COVID. En ambos, solo para riesgo o gravedad. En la influenza grave no se espera la confirmación.' },
        { cells: ['Corticoides', 'No de rutina', 'Dexametasona 6 mg/día si requiere oxígeno', 'Hospitalizar si SpO₂ < 94%'],
          say: 'Corticoides: no de rutina en la influenza. En el COVID, dexametasona solo si requiere oxígeno.' },
        { cells: ['Complicación pediátrica', 'Neumonía, miocarditis, Reye con aspirina', 'MIS-C 2 a 6 semanas después', 'UCI pediátrica'],
          say: 'En el niño, la influenza se complica con neumonía y síndrome de Reye si toma aspirina. El COVID, con el MIS-C, dos a seis semanas después.' },
        { cells: ['Vacuna', 'Anual (inactivada)', 'Esquema y refuerzos según el PNI', 'Priorizar grupos de riesgo'],
          say: 'Y en ambos, la vacuna: anual en la influenza, y según el esquema y los refuerzos del programa en el COVID, priorizando los grupos de riesgo.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del síndrome respiratorio febril a la conducta.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 68 años, hipertensa y diabética tipo 2, consulta en julio por fiebre de 39 °C de inicio brusco hace 24 horas, mialgias intensas, cefalea y tos seca. En su comuna hay un brote de influenza. Saturación de oxígeno 96% ambiental, frecuencia respiratoria 18 por minuto, sin disnea y auscultación pulmonar normal. No está vacunada.',
      question: '¿Cuál es el manejo más adecuado?',
      options: [
        { letter: 'A', text: 'Solo paracetamol, hidratación y reposo; el oseltamivir no tiene indicación' },
        { letter: 'B', text: 'Oseltamivir 75 mg cada 12 horas por 5 días, junto con manejo sintomático y educación sobre signos de alarma' },
        { letter: 'C', text: 'Amoxicilina-ácido clavulánico por riesgo de neumonía bacteriana' },
        { letter: 'D', text: 'Prednisona oral por 5 días' },
        { letter: 'E', text: 'Hospitalizar y solicitar PCR antes de iniciar cualquier tratamiento' },
      ],
      correct: 'B',
      explanation: 'Es una influenza en una paciente de un grupo de riesgo (más de 65 años, diabetes e hipertensión): el cuadro es típico, sin signos de neumonía ni de gravedad. Corresponde indicar oseltamivir 75 mg cada 12 horas por 5 días, idealmente en las primeras 48 horas y sin esperar la confirmación, además de tratamiento sintomático, educación sobre signos de alarma y vacunación posterior. Los antibióticos no están indicados sin sobreinfección bacteriana, y los corticoides no forman parte del tratamiento de la influenza.',
      say: {
        stem: 'Una mujer de sesenta y ocho años, hipertensa y diabética, consulta en julio por fiebre de treinta y nueve grados de inicio brusco hace veinticuatro horas, mialgias intensas, cefalea y tos seca. Hay un brote de influenza en su comuna. La saturación es noventa y seis por ciento, no tiene disnea y el pulmón está limpio. No está vacunada.',
        question: '¿Cuál es el manejo más adecuado?',
        options: 'Las opciones: solo paracetamol e hidratación; oseltamivir por cinco días con manejo sintomático; amoxicilina con ácido clavulánico; prednisona; o hospitalizar y pedir PCR antes de tratar. Piénsalo.',
        answer: 'Es la B. Es una influenza típica en una paciente de un grupo de riesgo: tiene más de sesenta y cinco años, diabetes e hipertensión. Por eso el oseltamivir sí está indicado, en las primeras cuarenta y ocho horas y sin esperar la PCR, junto con el manejo sintomático. La A sería correcta en un adulto joven sano, y esa es la trampa. Los antibióticos y la prednisona no tienen lugar sin sobreinfección bacteriana.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 141',
      stem: 'En contexto de un brote de influenza, durante el invierno, un paciente de 22 años presenta un cuadro de rinorrea, congestión nasal, fiebre, mialgias generalizadas y tos seca. Al examen físico presenta 39 grados celsius, con examen pulmonar normal.',
      question: 'El tratamiento más adecuado es:',
      options: [
        { letter: 'A', text: 'Oseltamivir' },
        { letter: 'B', text: 'Zanamivir' },
        { letter: 'C', text: 'Aciclovir' },
        { letter: 'D', text: 'Valaciclovir' },
        { letter: 'E', text: 'Paracetamol' },
      ],
      correct: 'E',
      explanation: 'Adulto joven sano, sin factores de riesgo, con influenza leve y examen pulmonar normal: el tratamiento de elección es sintomático. El oseltamivir es solo una opción en estos pacientes, porque la guía del Ministerio lo indica en los grupos de riesgo y en la influenza grave. Se debe evitar la aspirina por el riesgo de síndrome de Reye.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil quince. En un brote de influenza, durante el invierno, un hombre de veintidós años tiene rinorrea, congestión nasal, fiebre de treinta y nueve grados, mialgias y tos seca. El examen pulmonar es normal.',
        question: 'El tratamiento más adecuado es:',
        options: 'Las opciones: oseltamivir; zanamivir; aciclovir; valaciclovir; o paracetamol. Piénsalo.',
        answer: 'Es la E. Es un adulto joven, sano, sin factores de riesgo y con un cuadro leve: se trata con paracetamol. La A es la tentación, porque es una influenza. Pero la guía reserva el oseltamivir para los grupos de riesgo y las formas graves, y para el adulto sano es solo una opción. Aciclovir y valaciclovir son para herpes, no para influenza.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 36',
      stem: 'Un adolescente de 14 años presenta un cuadro de fiebre de 39ºC, desde hace 3 días, asociado a malestar general, dolor abdominal, vómitos y diarrea, seguido de marcado compromiso, por lo que acude al servicio de urgencia. Al examen físico está con compromiso hemodinámico, con frecuencia cardíaca de 120x’ y PA: 90/50 mmHg, por lo que que es manejado con suero fisiológico endovenoso, con respuesta parcial. Tiene antecedente de PCR positiva para Covid-19 hace 30 días y se solicitan nuevos exámenes, que muestran hematocrito: 33%, blancos: 14.000 por mm3, plaquetas: 80.000 por mm3, VHS: 76 mmHg, PCR: 15,5 mg/L, dímero D: 670 ng/ml y troponinas elevadas.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Sepsis bacteriana' },
        { letter: 'B', text: 'Síndrome inflamatorio multisistémico' },
        { letter: 'C', text: 'Insuficiencia suprarrenal aguda' },
        { letter: 'D', text: 'Reinfección por Covid-19' },
        { letter: 'E', text: 'Enfermedad de Kawasaki' },
      ],
      correct: 'B',
      explanation: 'Síndrome inflamatorio multisistémico pediátrico: fiebre con compromiso digestivo y hemodinámico, marcadores inflamatorios y troponina elevados, a las 4 semanas de un COVID-19 confirmado. Es una urgencia: UCI pediátrica, inmunoglobulina, corticoides y soporte, con ecocardiograma.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Un adolescente de catorce años tiene fiebre de treinta y nueve grados hace tres días, dolor abdominal, vómitos y diarrea. Está hipotenso y taquicárdico, y responde solo en parte al suero. Tuvo una PCR positiva para COVID hace treinta días. Los exámenes muestran plaquetas bajas, PCR y dímero D elevados, y troponinas elevadas.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: sepsis bacteriana; síndrome inflamatorio multisistémico; insuficiencia suprarrenal aguda; reinfección por COVID; o enfermedad de Kawasaki. Piénsalo.',
        answer: 'Es la B. Fiebre con compromiso digestivo y hemodinámico, marcadores inflamatorios y troponina alta, cuatro semanas después de un COVID: es el síndrome inflamatorio multisistémico. La E tienta, porque se parece, pero el Kawasaki es de niños más pequeños y sin predominio digestivo ni shock. Es una urgencia: UCI pediátrica, inmunoglobulina, corticoides y ecocardiograma.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un hombre de 58 años, obeso y diabético, no vacunado, consulta al segundo día de síntomas por fiebre, tos y mialgias. Test de antígeno positivo para SARS-CoV-2. Saturación 97% ambiental y frecuencia respiratoria 16 por minuto.',
      question: '¿Cuál es el manejo más adecuado?',
      options: [
        { letter: 'A', text: 'Dexametasona 6 mg diarios por 10 días' },
        { letter: 'B', text: 'Hospitalización en UCI con tocilizumab' },
        { letter: 'C', text: 'Antibiótico de amplio espectro por vía endovenosa' },
        { letter: 'D', text: 'Manejo sintomático e indicar nirmatrelvir/ritonavir por 5 días, verificando las interacciones farmacológicas' },
        { letter: 'E', text: 'Solo reposo sin antivirales porque la enfermedad es leve' },
      ],
      correct: 'D',
      explanation: 'COVID-19 leve en un paciente con factores de riesgo de progresión (obesidad, diabetes, falta de vacunación): se indica tratamiento antiviral precoz, dentro de los primeros 5 días de síntomas: nirmatrelvir/ritonavir 300/100 mg cada 12 horas por 5 días, revisando las interacciones del ritonavir y la función renal, junto con manejo sintomático y signos de alarma. La dexametasona está reservada a quienes requieren oxígeno; los antibióticos no tienen indicación sin sobreinfección bacteriana.',
      say: {
        stem: 'Una pregunta representativa del banco EUNACOM. Un hombre de cincuenta y ocho años, obeso, diabético y no vacunado, consulta al segundo día de síntomas por fiebre, tos y mialgias. El test de antígeno para SARS-CoV dos es positivo. La saturación es noventa y siete por ciento y la frecuencia respiratoria, dieciséis.',
        question: '¿Cuál es el manejo más adecuado?',
        options: 'Las opciones: dexametasona por diez días; UCI con tocilizumab; antibiótico endovenoso de amplio espectro; manejo sintomático con nirmatrelvir y ritonavir por cinco días, revisando interacciones; o solo reposo. Piénsalo.',
        answer: 'Es la D. Es un COVID leve, pero con tres factores de riesgo de progresión: obesidad, diabetes y falta de vacunación. Por eso se da el antiviral precoz, dentro de los primeros cinco días, revisando las interacciones del ritonavir. La A tienta, pero la dexametasona es solo para el que requiere oxígeno. Y la E sería correcta si no tuviera factores de riesgo.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: influenza y COVID-19',
      cards: [
        { title: 'Influenza', tag: 'Quién recibe el antiviral', kind: 'key', items: [
          { t: 'Fiebre brusca, mialgias, tos seca', d: 'Diagnóstico clínico en temporada',
            say: 'Cerremos con las reglas de oro. La influenza es fiebre brusca, mialgias y tos seca, y en temporada el diagnóstico es clínico.' },
          { t: 'Oseltamivir: riesgo y gravedad', d: 'Adulto sano leve: sintomático',
            say: 'El oseltamivir, setenta y cinco miligramos cada doce horas por cinco días, es para los grupos de riesgo y las formas graves. El adulto sano con un cuadro leve solo recibe tratamiento sintomático.' },
          { t: 'Nunca aspirina en niños', d: 'Síndrome de Reye',
            say: 'Y nunca aspirina en niños, por el síndrome de Reye.' },
        ] },
        { title: 'COVID-19', tag: 'Gravedad y niño', kind: 'alert', items: [
          { t: 'Nirmatrelvir/ritonavir si hay riesgo', d: 'En los primeros 5 días; ojo con interacciones',
            say: 'En el COVID, antiviral precoz con nirmatrelvir y ritonavir si hay riesgo de progresión, y vigilando las interacciones.' },
          { t: 'Dexametasona solo con oxígeno', d: 'Hospitalizar si SpO₂ < 94%',
            say: 'La dexametasona es solo para el que requiere oxígeno, y se hospitaliza con saturación menor de noventa y cuatro.' },
          { t: 'MIS-C: 2 a 6 semanas después', d: 'UCI pediátrica, inmunoglobulina y corticoides',
            say: 'En el niño, fiebre con compromiso de varios órganos y marcadores inflamatorios, dos a seis semanas después del COVID, es un MIS-C: UCI pediátrica. Si te llevas una sola idea de hoy: el antiviral es para el que tiene riesgo o gravedad, no para todos. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Síndrome respiratorio febril: influenza y COVID-19',
    root: N('start', 'Fiebre, mialgias y tos', 'Definir riesgo y gravedad',
      'Un paciente consulta por fiebre, mialgias y tos. Antes de decidir el tratamiento, defines dos cosas: si hay signos de gravedad y si pertenece a un grupo de riesgo.',
      ['Grave: SpO₂ < 94% o disnea', N('alert', 'Hospitalizar', 'Oxígeno; no esperar la confirmación',
        'Si hay signos de gravedad, como saturación menor de noventa y cuatro o disnea, se hospitaliza. En la influenza grave se da oseltamivir sin esperar la confirmación, y en el COVID con oxígeno se agrega dexametasona.')],
      ['Leve, con riesgo', N('do', 'Antiviral precoz', 'Oseltamivir o nirmatrelvir/ritonavir',
        'Si el cuadro es leve pero hay factores de riesgo, se da el antiviral precoz. Oseltamivir si es influenza, cinco días y de preferencia en las primeras cuarenta y ocho horas. Nirmatrelvir con ritonavir si es COVID, en los primeros cinco días, revisando las interacciones.')],
      ['Leve, sano', N('ok', 'Tratamiento sintomático', 'Paracetamol, hidratación y reposo',
        'Si es un adulto sano con un cuadro leve, tratamiento sintomático: paracetamol, hidratación, reposo y signos de alarma. El oseltamivir es solo una opción.')],
      ['Niño con fiebre y varios órganos', N('q', '¿COVID o contacto hace 2 a 6 semanas?', 'Sospechar MIS-C',
        'Si es un niño con fiebre persistente y compromiso de varios órganos, preguntas por un COVID o un contacto hace dos a seis semanas.',
        ['Sí, con PCR, ferritina o troponina altas', N('refer', 'UCI pediátrica', 'Inmunoglobulina y corticoides',
          'Si hay marcadores inflamatorios y troponina elevados, es un MIS-C. Se deriva a UCI pediátrica, para inmunoglobulina endovenosa, corticoides y manejo del shock, con ecocardiograma.')],
      )],
    ),
  },
};
