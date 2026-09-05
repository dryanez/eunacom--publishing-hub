function flow(title, rows) {
  const W = 620, CX = 310, GAP = 22;
  const P = [];
  let y = 8, prev = null;
  const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const arr = s => Array.isArray(s) ? s : (s ? [s] : []);
  function wrap(s, max) {
    if (s.length <= max) return [s];
    const mid = s.length / 2, marks = [];
    let i = s.indexOf(' · ');
    while (i !== -1) { marks.push([i, i + 3]); i = s.indexOf(' · ', i + 1); }
    if (!marks.length) { let j = s.indexOf(' '); while (j !== -1) { marks.push([j, j + 1]); j = s.indexOf(' ', j + 1); } }
    let best = null, bd = 1e9;
    marks.forEach(m => { const d = Math.abs(m[0] - mid); if (d < bd) { bd = d; best = m; } });
    return best ? [s.slice(0, best[0]).trim(), s.slice(best[1]).trim()] : [s];
  }
  function draw(x, w, o) {
    const max = Math.floor((w - 18) / 4.4);
    const subs = [];
    arr(o.s).forEach(l => wrap(String(l), max).forEach(ln => subs.push(ln)));
    const h = (o.t ? 21 : 8) + subs.length * 11 + (subs.length ? 7 : 8);
    const cls = { acc: 'acc', dec: 'dec', warn: 'warn', crit: 'warn' }[o.type] || 'b';
    const tc = { acc: 'accT', warn: 'warnT', crit: 'warnT' }[o.type] || 't';
    const sc = o.type === 'acc' ? 'accS' : (o.type === 'warn' || o.type === 'crit') ? 'warnT sub' : 'sub';
    P.push(`<rect class="${cls}" x="${x}" y="${y}" width="${w}" height="${h}" rx="3"/>`);
    let ty = y + (o.t ? 15 : 14);
    if (o.t) { P.push(`<text class="${tc} t" x="${x + w / 2}" y="${ty}" text-anchor="middle" font-weight="700">${esc(o.t)}</text>`); ty += 12; }
    subs.forEach(l => { P.push(`<text class="${sc}" x="${x + w / 2}" y="${ty}" text-anchor="middle">${esc(l)}</text>`); ty += 11; });
    return h;
  }
  function step(label, from) {
    const ty = y + GAP;
    const xs = from === 'left' ? [prev.xs[0]] : from === 'right' ? [prev.xs[prev.xs.length - 1]] : prev.xs;
    xs.forEach(x => {
      P.push(x === CX
        ? `<path class="ln" d="M${CX},${prev.y} V${ty}"/>`
        : `<path class="ln" d="M${x},${prev.y} V${prev.y + 10} H${CX} V${ty}"/>`);
    });
    if (label) P.push(`<text class="sub" x="${CX + 7}" y="${prev.y + GAP / 2 + 3}">${esc(label)}</text>`);
    y = ty;
  }
  rows.forEach(r => {
    if (r.k === 'split') {
      if (prev) step(r.al, r.from);
      const dh = draw(70, 480, { t: r.q, s: r.s, type: 'dec' });
      const db = y + dh;
      const hasL = !!(r.ll || r.rl);
      y = db + (hasL ? 40 : 24);
      const bw = 292, lx = 12, rx = 316, lcx = lx + bw / 2, rcx = rx + bw / 2, hc = y - 10;
      P.push(`<path class="ln" d="M${CX},${db} V${hc} H${lcx} V${y}"/>`);
      P.push(`<path class="ln" d="M${CX},${hc} H${rcx} V${y}"/>`);
      [[r.ll, lcx], [r.rl, rcx]].forEach(([lab, cx]) => {
        if (!lab) return;
        const ls = wrap(String(lab), 74);
        ls.forEach((line, k) => P.push(`<text class="lbl" x="${cx}" y="${y - 15 - (ls.length - 1 - k) * 9}" text-anchor="middle">${esc(line)}</text>`));
      });
      const top = y;
      const lh = draw(lx, bw, r.left);
      y = top;
      const rh = draw(rx, bw, r.right);
      y = top + Math.max(lh, rh);
      prev = { y, xs: [lcx, rcx] };
    } else {
      if (prev) step(r.al, r.from);
      const w = r.w || (r.type === 'dec' ? 480 : 420);
      const x = (W - w) / 2;
      const h = draw(x, w, r);
      y += h;
      prev = { y, xs: [CX] };
    }
  });
  const H = y + 8;
  const svg = `<svg viewBox="0 0 ${W} ${H}" width="100%" style="max-width:${W}px;font-family:'IBM Plex Sans',system-ui,sans-serif">
  <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#475569"/></marker></defs>
  <style>
    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}
    .t{font-size:10px;fill:#15181d}
    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}
    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#eafdf3}
    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}
    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}
    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar)}
  </style>
  ${P.join('\\n  ')}
</svg>`;
  return { title, svg };
}

const bloque4 = [
  {
    id: 'inf-14',
    classId: 'infecto-14',
    tier: 3,
    blockNum: 4,
    blockName: 'Zoonosis, Medicina Tropical y Vectores',
    topicLabel: '4.1',
    title: 'Síndrome Pulmonar por Hantavirus (SCPH)',
    perfilCode: '1.04.2.008',
    dx: 'Sospecha', tx: 'Inicial', seg: 'Derivar',
    ges: 'Enfermedad de Notificación Obligatoria Inmediata (ENO) · Guía Clínica MINSAL Manejo Hantavirus',
    reconstrucciones: 'EUNACOM 2024 (Q#71) · EUNACOM 2022 (Q#28) · EUNACOM 2018 (Q#90)',
    frecuencia: 'Alta rentabilidad · tríada de laboratorio clásica (trombocitopenia + hemoconcentración + inmunoblastos)',
    svg: null, algoTitle: 'Algoritmo de Sospecha y Traslado Precoz en Síndrome Cardiopulmonar por Hantavirus',
    svg: null, algoTitle: 'Algoritmo de Sospecha y Traslado Precoz en Síndrome Cardiopulmonar por Hantavirus',
    diagram: flow('Enfrentamiento y Manejo de Emergencia en Hantavirus (SCPH)', [
      { t: 'Sospecha de Hantavirus (SCPH) en Zona Centro-Sur', s: 'Exposición rural / colilargo · Fiebre + mialgias intensas en muslos y dorso' },
      { k: 'split', q: '¿Tríada de Hemograma: Plaquetas < 100k + Hto > 50% + Inmunoblastos > 10%?', s: 'Trombocitopenia | Hemoconcentración severa | Desviación izquierda con linfocitos atípicos', ll: 'tríada presente / disnea', rl: 'tríada ausente',
        left: { t: 'Restricción Hídrica Estricta + Traslado a ECMO', s: 'Prohibida sobrecarga hídrica · Traslado precoz medicalizado · Notificación ENO', type: 'crit' },
        right: { t: 'Hospitalizar en Observación Estricta', s: 'Hemograma y Rx tórax seriados c/12 h · Descartar neumonía e influenza', type: 'acc' } },
      { t: 'Confirmación por IgM Específica | ECMO Veno-Arterial si Shock', s: 'Fuga capilar pulmonar no hidrostática y depresión miocárdica refractaria', type: 'warn', al: 'rescate vital', from: 'left' },
    ]),
    contexto: 'El Hantavirus (Virus Andes) es una zoonosis de alta letalidad (30–35%) transmitida por el ratón colilargo. En el EUNACOM se evalúa de manera estricta la tríada patognomónica del hemograma, la notificación ENO inmediata y la regla de oro terapéutica: restricción estricta de fluidos y traslado precoz a centro con ECMO.',
    contentSections: [
      {
        subhead: '1. Epidemiología y Mecanismo de Transmisión',
        paragraphs: [
          'El agente causal en Chile es el <strong>Virus Andes</strong>, cuyo reservorio natural es el roedor silvestre <strong><em>Oligoryzomys longicaudatus</em> (ratón colilargo)</strong>, presente desde Coquimbo hasta Aysén.',
          'El contagio ocurre por <strong>inhalación de aerosoles</strong> de excretas secas en recintos cerrados (cabañas, bodegas, leñeras). El virus infecta el endotelio pulmonar causando <strong>fuga capilar masiva</strong> (edema pulmonar no cardiogénico) y <strong>depresión miocárdica intrínseca severa</strong>.',
        ],
      },
      {
        subhead: '2. Fases Clínicas y la Tríada Cardinal del Hemograma',
        paragraphs: [
          '• <strong>Fase Prodrómica (3–6 días):</strong> fiebre alta, cefalea y <strong>mialgias intensas en muslos y región lumbar</strong>. No hay coriza ni tos inicial.',
          '• <strong>Fase Cardiopulmonar:</strong> tos seca, disnea rápidamente progresiva y shock cardiogénico fulminante.',
          '<strong>Tríada Cardinal en Hemograma:</strong><br>' +
          '1) <strong>Trombocitopenia marcada (&lt; 100.000/mm³)</strong>.<br>' +
          '2) <strong>Hemoconcentración severa (Hematocrito &gt; 45–50%)</strong> por extravasación plasmática.<br>' +
          '3) <strong>Inmunoblastos (linfocitos atípicos) &gt; 10%</strong> en frotis.',
        ],
      },
      {
        subhead: '3. Pilares de Manejo y Regla de Restricción de Fluidos',
        paragraphs: [
          '<strong>Diagnóstico:</strong> <strong>IgM específica para Hantavirus</strong> (test rápido o ELISA ISP). ENO obligatoria inmediata.',
          '<strong>Reglas de oro terapéuticas:</strong> 1) <strong>RESTRICCIÓN HÍDRICA ESTRICTA</strong>: cualquier sobrecarga de cristaloides inunda los alvéolos y causa muerte por asfixia; 2) Vasopresor precoz: <strong>Noradrenalina</strong>; 3) <strong>Derivación precoz a centro con ECMO</strong> veno-arterial en la fase inicial de disnea.',
        ],
      },
    ],
    table: {
      title: 'Hantavirus (SCPH) vs Neumonía Grave vs Sepsis Bacteriana',
      headers: ['Parámetro', 'Hantavirus (SCPH)', 'Neumonía Grave Comunitaria', 'Shock Séptico Clásico'],
      rows: [
        ['Antecedente clave', 'Ruralidad, cabaña cerrada, colilargo', 'Brote comunitario invernal', 'Foco infeccioso evidente (piel, ITU)'],
        ['Mialgias', 'Intensas en muslos y dorso lumbar', 'Mialgias generalizadas leves', 'Variable, no predominante'],
        ['Hemograma patognomónico', 'Plaquetas < 100k + Hto > 50% + Inmunoblastos', 'Leucocitosis con neutrofilia, Hto normal', 'Leucocitosis con neutrofilia y desviación'],
        ['Manejo de fluidos', 'RESTRICCIÓN ESTRICTA (evitar sobrecarga)', 'Aporte hídrico estándar según balance', 'Carga agresiva inicial (30 mL/kg)'],
      ],
    },
    vignette: 'Hombre de 38 años, trabajador agrícola de la Región del Maule, consulta en el servicio de urgencia por 4 días de fiebre de 39 °C, cefalea holocraneana y mialgias intensas en la espalda y muslos. En las últimas 6 horas agrega tos seca y disnea de esfuerzo progresiva. Refiere haber limpiado una bodega de herramientas deshabitada hace 2 semanas. Al examen: T° 38.3 °C, PA 90/60 mmHg, FC 115 lpm, FR 28 rpm, saturación 89% con aire ambiental. Radiografía de tórax muestra infiltrados alveolares bilaterales perihiliares difusos sin cardiomegalia. Hemograma: Hematocrito 54%, Leucocitos 18.500/mm³ con 14% de linfocitos atípicos (inmunoblastos) y Plaquetas 42.000/mm³.',
    explicacion: 'El antecedente ocupacional rural de exposición a bodegas cerradas sumado a la tríada de laboratorio patognomónica (trombocitopenia severa < 50.000, hemoconcentración con Hto > 50% y presencia de inmunoblastos > 10%) en un paciente con síndrome febril y disnea progresiva es diagnóstico de Síndrome Cardiopulmonar por Hantavirus (SCPH). La conducta inmediata consiste en notificar de urgencia a la autoridad sanitaria (ENO), evitar la sobrecarga con cristaloides (aporte hídrico restrictivo), instalar oxígeno suplementario y coordinar el traslado inmediato en ambulancia medicalizada hacia un centro de alta complejidad que cuente con disponibilidad de soporte con ECMO.',
    keyPoints: [
      'Reservorio de Hantavirus en Chile: Oligoryzomys longicaudatus (ratón de cola larga); contagio por inhalación de orina/heces secas.',
      'Tríada de sospecha en hemograma: Trombocitopenia + Hemoconcentración (Hto alto) + Inmunoblastos > 10%.',
      'Mialgias muy intensas con predilección por muslos y región lumbar.',
      'Regla terapéutica de oro: MANEJO RESTRICTIVO DE FLUIDOS para evitar inundación alveolar por fuga capilar.',
      'Soporte avanzado de rescate: ECMO (Oxigenación por Membrana Extracorpórea) veno-arterial.',
      'Es una Enfermedad de Notificación Obligatoria (ENO) de carácter INMEDIATO.',
    ],
    questions: [
      {
        stem: 'Un trabajador forestal de 32 años consulta en un hospital de baja complejidad por cuadro de 3 días de fiebre alta, dolor muscular severo en muslos y sensación de falta de aire. El hemograma muestra Hematocrito de 52%, leucocitos de 16.000/mm³ con 12% de inmunoblastos y recuento de plaquetas de 48.000/mm³. ¿Cuál de las siguientes medidas terapéuticas está formalmente contraindicada o debe evitarse?',
        options: [
          { id: 'A', text: 'Carga masiva de cristaloides con 30 mL/kg en bolo' },
          { id: 'B', text: 'Oxigenoterapia con mascarilla de no reinhalación' },
          { id: 'C', text: 'Monitoreo estricto de diuresis horaria' },
          { id: 'D', text: 'Traslado en ambulancia avanzada con médico' },
          { id: 'E', text: 'Toma de serología para IgM específica' },
        ],
        correcta: 'A',
        explicacion: 'El cuadro corresponde a un Síndrome Cardiopulmonar por Hantavirus. En esta patología, la permeabilidad capilar alveolar está severamente aumentada por fuga endotelial; la administración de bolos masivos de volumen (como los 30 mL/kg típicos de la sepsis bacteriana) precipita un edema pulmonar masivo irreversible y asfixia al paciente. La guía clínica del MINSAL contraindica la resucitación agresiva con fluidos y exige manejo hemodinámico restrictivo.',
        recTag: 'Banco de Preguntas Oficial · Hantavirus',
      },
      {
        stem: '¿Cuál es el mecanismo de transmisión más frecuente del virus Hanta en Chile según la epidemiología nacional?',
        options: [
          { id: 'A', text: 'Picadura del mosquito Aedes aegypti' },
          { id: 'B', text: 'Inhalación de aerosoles contaminados con excretas de ratón colilargo' },
          { id: 'C', text: 'Consumo de carne cruda de cerdo' },
          { id: 'D', text: 'Mordedura directa de murciélago silvestre' },
          { id: 'E', text: 'Contacto sexual con personas asintomáticas' },
        ],
        correcta: 'B',
        explicacion: 'El virus Andes se transmite casi exclusivamente por vía aérea mediante la inhalación de polvo y aerosoles suspendidos en el aire provenientes de la saliva, orina o heces desecadas del roedor silvestre Oligoryzomys longicaudatus (ratón de cola larga), frecuentemente al realizar limpieza de cabañas, galpones o bodegas que han permanecido cerradas durante largo tiempo.',
        recTag: 'Banco de Preguntas Oficial · Hantavirus',
      },
    ],
  },
  {
    id: 'inf-15',
    classId: 'infecto-15',
    tier: 2,
    blockNum: 4,
    blockName: 'Zoonosis, Medicina Tropical y Vectores',
    topicLabel: '4.2',
    title: 'Enfermedad de Chagas: Aguda, Indeterminada y Crónica',
    perfilCode: '1.04.1.010',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Norma Técnica N° 162 MINSAL: Diagnóstico y Tratamiento de la Enfermedad de Chagas',
    reconstrucciones: 'EUNACOM 2023 (Q#22) · EUNACOM 2020 (Q#91) · EUNACOM 2016 (Q#44)',
    frecuencia: 'Alta rentabilidad · tamizaje prenatal universal y diagnóstico por etapas (parasitológico vs serológico)',
    svg: null, algoTitle: null,
    diagram: null,
    contexto: 'La Enfermedad de Chagas (Tripanosomiasis americana) es una zoonosis endémica en Chile entre la I y VI Región. En el examen EUNACOM se evalúa de forma reiterada la diferencia diagnóstica entre la fase aguda (exámenes parasitológicos directos como microhematocrito) y la fase crónica (serología IgG), el tamizaje perinatal universal en embarazadas y las complicaciones viscerales (bloqueo completo de rama derecha y megacolon).',
    contentSections: [
      {
        subhead: '1. Ciclo biológico, transmisión y vector en Chile',
        paragraphs: [
          'Causada por el protozoo hemoflagelado <em>Trypanosoma cruzi</em>. En Chile, el vector biológico clásico fue la vinchuca domiciliaria (<em>Triatoma infestans</em>), la cual fue declarada interrumpida en su transmisión vectorial intradomiciliaria en 1999.',
          'Hoy en día, las principales vías de transmisión en Chile son:<br>' +
          '• <strong>Vía congénita / transplacentaria (vertical):</strong> es la <strong>vía de transmisión predominante actual</strong>. Por ello, el MINSAL establece <strong>tamizaje serológico obligatorio universal con IgG en el control prenatal</strong> a toda embarazada que resida o haya nacido desde la Región del Libertador Bernardo O’Higgins hacia el norte (y a todas las extranjeras provenientes de zonas endémicas de Sudamérica).<br>' +
          '• <strong>Vía vectorial silvestre:</strong> por vinchucas silvestres (<em>Mepraia spinolai</em>) en zonas rurales del norte chico (Coquimbo, Valparaíso). El insecto defeca durante la picadura; el prurito hace que el rascado inocule los tripomastigotes metacíclicos en la herida o conjuntiva.',
        ],
      },
      {
        subhead: '2. Fases clínicas: Aguda, Crónica Indeterminada y Determinada',
        paragraphs: [
          '• <strong>Fase Aguda (parásitos en sangre):</strong> habitualmente asintomática en adultos. En niños puede cursar con síndrome febril prolongado, hepatoesplenomegalia y signos de puerta de entrada: <strong>Signo de Romaña</strong> (edema bipalpebral unilateral indoloro con adenopatía preauricular) o <strong>Chagoma de inoculación</strong>.<br>' +
          '• <strong>Fase Crónica Indeterminada (latente):</strong> serología IgG positiva sin síntomas, con ECG y radiografías normales. Dura décadas; el 70% de los pacientes nunca progresa.<br>' +
          '• <strong>Fase Crónica Determinada (30% de los infectados):</strong> destrucción de plexos nerviosos mioentéricos y fibrosis miocárdica:<br>' +
          '1. <strong>Cardiopatía chagásica:</strong> arritmias ventriculares, insuficiencia cardíaca y el hallazgo clásico en el ECG: <strong>Bloqueo Completo de Rama Derecha (BCRD) asociado a Hemibloqueo Anterior Izquierdo (HBAI)</strong>.<br>' +
          '2. <strong>Forma digestiva:</strong> <strong>Megacolon</strong> (constipación severa de semanas, fecalomas recurrentes y vólvulo de sigmoides) y <strong>Megaesófago</strong> (disfagia progresiva y regurgitación similar a acalasia).',
        ],
      },
      {
        subhead: '3. Diagnóstico por etapas y Tratamiento Antiparasitario',
        paragraphs: [
          '<strong>Regla de oro diagnóstica según la fase:</strong><br>' +
          '• <strong>Fase Aguda y Recién Nacido de madre con Chagas:</strong> la parasitemia es alta; se realiza <strong>diagnóstico PARASITOLÓGICO DIRECTO</strong> (Microhematocrito o gota gruesa) o PCR. <em>La IgG no sirve en el recién nacido porque cruza la placenta y refleja los anticuerpos de la madre</em>.<br>' +
          '• <strong>Fase Crónica:</strong> la parasitemia es indetectable; se realiza <strong>diagnóstico SEROLÓGICO</strong> mediante <strong>dos pruebas serológicas IgG diferentes positivas (ELISA IgG + IFI / HAI)</strong> confirmadas por el ISP.<br>' +
          '<strong>Tratamiento:</strong> <strong>Nifurtimox (8-10 mg/kg/día por 60 días) o Benznidazol (5-7 mg/kg/día por 60 días)</strong>. Indicación absoluta: en fase aguda, Chagas congénito, niños y adultos jóvenes en fase indeterminada (< 50 años). En embarazo el tratamiento está contraindicado durante la gestación (se trata a la madre post-parto y lactancia).',
        ],
      },
    ],
    table: {
      title: 'Diagnóstico y Manejo de la Enfermedad de Chagas según la Fase Clínica',
      headers: ['Fase Clínica', 'Método Diagnóstico de Elección', 'Manifestación Típica', 'Indicación de Fármaco Antiparasitario'],
      rows: [
        ['Aguda / Congénita', 'Parasitológico directo (Microhematocrito) / PCR', 'Signo de Romaña o asintomático en RN', 'Indicación absoluta: Nifurtimox o Benznidazol'],
        ['Crónica Indeterminada', 'Serología IgG por 2 técnicas (ELISA + IFI)', 'Completamente asintomático (ECG normal)', 'Indicado en < 50 años para prevenir progresión'],
        ['Cardiopatía Chagásica', 'Serología IgG + ECG + Ecocardiograma', 'BCRD + HBAI, arritmias ventriculares, IC', 'Manejo de IC / Marcapasos (parasiticida discutido)'],
        ['Megacolon / Megaesófago', 'Serología IgG + Rx baritada / TAC', 'Constipación pertinaz, fecalomas, disfagia', 'Manejo de la constipación, cirugía de resección'],
      ],
    },
    vignette: 'Recién nacido de término, adecuado para la edad gestacional, hijo de madre de 28 años con Chagas crónico asintomático confirmado durante el control prenatal. El lactante nace vigoroso, afebril, sin visceromegalias ni alteraciones al examen físico.',
    explicacion: 'En un recién nacido hijo de madre con Enfermedad de Chagas, la conducta protocolizada por el MINSAL consiste en realizar de inmediato al nacer un estudio parasitológico directo en sangre de cordón o punción venosa periférica mediante Microhematocrito (o PCR). La serología IgG está formalmente contraindicada para confirmar el diagnóstico al nacer porque refleja el paso transplacentario de anticuerpos maternos (falsos positivos). Si el microhematocrito inicial es positivo, se inicia tratamiento inmediato con Nifurtimox o Benznidazol (con tasas de curación > 95% en el lactante). Si resulta negativo, se repite a los 3 meses o se solicita serología IgG después de los 9-12 meses (cuando los anticuerpos maternos ya han desaparecido).',
    keyPoints: [
      'Vía de transmisión más frecuente actual en Chile: vertical / congénita transplacentaria.',
      'Tamizaje prenatal con serología IgG: universal y obligatorio en zonas endémicas (desde O’Higgins al norte).',
      'Diagnóstico en recién nacido / fase aguda: método PARASITOLÓGICO DIRECTO (microhematocrito) o PCR.',
      'Diagnóstico en fase crónica: SEROLOGÍA (dos técnicas IgG positivas: ELISA + IFI).',
      'Cardiopatía chagásica: Bloqueo Completo de Rama Derecha (BCRD) + Hemibloqueo Anterior Izquierdo (HBAI).',
      'Megacolon y megaesófago: por destrucción parasitaria de los plexos nerviosos de Meissner y Auerbach.',
      'Tratamiento de elección: Nifurtimox o Benznidazol por 60 días (contraindicados en el embarazo).',
    ],
    questions: [
      {
        stem: '¿Cuál es el método diagnóstico de elección para confirmar o descartar la transmisión congénita de la Enfermedad de Chagas en un recién nacido hijo de madre seropositiva durante sus primeros días de vida?',
        options: [
          { id: 'A', text: 'Serología ELISA IgG en sangre del recién nacido' },
          { id: 'B', text: 'Examen parasitológico directo mediante microhematocrito en sangre fresca' },
          { id: 'C', text: 'Western Blot específico para anticuerpos IgM anti-Trypanosoma cruzi' },
          { id: 'D', text: 'Radiografía de tórax y ecocardiograma neonatal' },
          { id: 'E', text: 'Esperar a los 15 años de vida para realizar tamizaje serológico' },
        ],
        correcta: 'B',
        explicacion: 'En el recién nacido, los anticuerpos IgG atraviesan la placenta libremente, por lo que una serología IgG positiva solo refleja la infección materna y no confirma enfermedad en el niño. Por este motivo, la norma ministerial indica que el diagnóstico neonatal se realiza mediante métodos parasitológicos directos que buscan visualizar el parásito vivo en sangre (microhematocrito de sangre de cordón o capilar) o mediante PCR en centros de referencia.',
        recTag: 'Banco de Preguntas Oficial · Enfermedad de Chagas',
      },
      {
        stem: 'Un hombre de 60 años originario de la Región de Coquimbo consulta por constipación crónica pertinaz de años de evolución que se ha agravado en los últimos meses, requiriendo enemas evacuantes periódicos. El enema baritado muestra marcada dilatación del colon sigmoides y recto. El electrocardiograma revela bloqueo completo de rama derecha. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Cáncer de colon izquierdo estenosante' },
          { id: 'B', text: 'Enfermedad de Chagas en fase crónica determinada' },
          { id: 'C', text: 'Enfermedad de Hirschsprung del adulto' },
          { id: 'D', text: 'Colitis ulcerosa de larga data' },
          { id: 'E', text: 'Síndrome de colon irritable variante constipación' },
        ],
        correcta: 'B',
        explicacion: 'La coexistencia de megacolon (fase digestiva) y alteraciones de conducción cardíaca típicas como el bloqueo completo de rama derecha (fase cardíaca) en un paciente procedente de una zona endémica histórica de Chile (IV Región) es la presentación característica de la Enfermedad de Chagas en fase crónica determinada. Se debe confirmar con serología IgG (ELISA e IFI).',
        recTag: 'Banco de Preguntas Oficial · Enfermedad de Chagas',
      },
    ],
  },
  {
    id: 'inf-16',
    classId: 'infecto-16',
    tier: 2,
    blockNum: 4,
    blockName: 'Zoonosis, Medicina Tropical y Vectores',
    topicLabel: '4.3',
    title: 'Enfermedades Transmitidas por Mosquitos: Dengue, Malaria y Fiebre Amarilla',
    perfilCode: '1.04.1.008, 1.04.1.018',
    dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Enfermedades de Notificación Obligatoria Inmediata (ENO): Dengue, Malaria y Fiebre Amarilla',
    reconstrucciones: 'EUNACOM 2024 (Q#45) · EUNACOM 2022 (Q#63) · EUNACOM 2017 (Q#21)',
    frecuencia: 'Alta rentabilidad · patología del viajero, signos de alarma del dengue y gota gruesa en malaria',
    svg: null, algoTitle: null,
    diagram: null,
    contexto: 'Las enfermedades transmitidas por mosquitos (arbovirosis y malaria) representan las principales causas de fiebre en viajeros procedentes del trópico que consultan en Chile. En el EUNACOM se evalúa el reconocimiento inmediato de los signos de alarma del Dengue (dolor abdominal intenso, sangrado de mucosas, fuga plasmática) y el frotis/gota gruesa para Malaria, así como la profilaxis antes de viajar.',
    contentSections: [
      {
        subhead: '1. Dengue (Flavivirus - Vector Aedes aegypti)',
        paragraphs: [
          'El virus del dengue presenta 4 serotipos (DENV-1 a 4). En Chile continental el vector no es endémico, pero sí existe en Isla de Pascua (Rapa Nui) y con hallazgos recientes en el extremo norte (Arica y Tarapacá). La gran mayoría de los casos son importados de países vecinos (Brasil, Bolivia, Perú, Argentina).',
          '<strong>Fisiopatología:</strong> la infección por un serotipo genera inmunidad homóloga de por vida, pero solo inmunidad cruzada temporal contra los otros 3 serotipos. La infección secundaria por un serotipo diferente puede desencadenar una <strong>amplificación mediada por anticuerpos (ADE)</strong>, generando una tormenta de citoquinas y fuga capilar masiva (Dengue Grave).',
          '<strong>Fases clínicas:</strong><br>' +
          '• <strong>Fase febril (días 1 a 3):</strong> fiebre alta súbita, cefalea retroorbitaria intensa ("dolor detrás de los ojos"), mialgias y artralgias intensas ("fiebre quebrantahuesos") y exantema eritematoso con islas blancas de piel sana.<br>' +
          '• <strong>Fase crítica (días 3 a 7, al caer la fiebre):</strong> período de máximo peligro por fuga plasmática.<br>' +
          '<strong>SIGNOS DE ALARMA DE DENGUE GRAVE (exigen hospitalización inmediata):</strong><br>' +
          '1. Dolor abdominal intenso y continuo.<br>' +
          '2. Vómitos persistentes.<br>' +
          '3. Acumulación clínica de fluidos (ascitis, derrame pleural).<br>' +
          '4. Sangrado de mucosas (epistaxis, gingivorragia).<br>' +
          '5. Letargia o irritabilidad extrema.<br>' +
          '6. Hepatomegalia > 2 cm.<br>' +
          '7. <strong>Laboratorio: aumento progresivo del hematocrito concurrente con caída rápida de plaquetas (< 100.000/mm³)</strong>.<br>' +
          '<strong>Tratamiento:</strong> soporte hemodinámico vigoroso con cristaloides. <strong>CONTRAINDICADOS formalmente los AINEs y la Aspirina</strong> por riesgo de hemorragia grave; analgesia exclusivamente con Paracetamol.',
        ],
      },
      {
        subhead: '2. Malaria / Paludismo (Plasmodium spp. - Mosquito Anopheles)',
        paragraphs: [
          'Transmitida por la hembra del mosquito <em>Anopheles</em>. Causada por protozoos del género <em>Plasmodium</em>: <em>P. falciparum</em> (el más letal, responsable de la malaria cerebral y hemólisis masiva), <em>P. vivax</em> y <em>P. ovale</em> (forman hipnozoítos latentes en el hígado que causan recidivas meses después) y <em>P. malariae</em>.',
          '<strong>Clínica:</strong> accesos palúdicos paroxísticos con la tríada: calofrío intenso con temblor incontrolable $\rightarrow$ fiebre alta de 40 °C con cefalea $\rightarrow$ diaforesis profusa y descenso térmico. El ciclo se repite cada 48 horas (fiebre terciana en <em>P. falciparum/vivax</em>) o cada 72 horas (fiebre cuartana en <em>P. malariae</em>). Cursa con <strong>anemia hemolítica e ictericia</strong>.',
          '<strong>Diagnóstico de certeza:</strong> <strong>Frotis sanguíneo y Gota gruesa teñidos con Giemsa</strong> tomados preferentemente durante el pico febril (permite visualizar trofozoítos en anillo y cuantificar la parasitemia).',
          '<strong>Tratamiento:</strong><br>' +
          '• <em>P. falciparum:</em> terapia combinada basada en artemisininas (Arteméter-Lumefantrina).<br>' +
          '• <em>P. vivax / P. ovale:</em> <strong>Cloroquina</strong> (elimina formas sanguíneas) + <strong>Primaquina por 14 días</strong> (obligatoria para erradicar los hipnozoítos intrahepáticos y prevenir recaídas; contraindicada en déficit de G6PD por riesgo de hemólisis).',
        ],
      },
      {
        subhead: '3. Fiebre Amarilla y Vacunación del Viajero',
        paragraphs: [
          'Flavivirus transmitido por mosquitos en zonas selváticas de Sudamérica y África. Cursa con fiebre, bradicardia relativa (signo de Faget), ictericia fulminante y sangrado digestivo ("vómito negro"). Letalidad > 20-50%.',
          '<strong>Vacuna antiamarílica (virus vivo atenuado cepa 17D):</strong> altamente eficaz, otorga inmunidad de por vida con 1 sola dosis. Debe administrarse <strong>al menos 10 días antes de viajar</strong> a zonas endémicas. Contraindicada en embarazadas, lactantes < 9 meses y pacientes con timoma o inmunosupresión severa.',
        ],
      },
    ],
    table: {
      title: 'Enfermedades Febriles Tropicales del Viajero: Diagnóstico Diferencial EUNACOM',
      headers: ['Enfermedad', 'Vector y Patógeno', 'Clínica Prototípica', 'Examen Confirmatorio', 'Terapia de Elección'],
      rows: [
        ['Dengue', 'Aedes aegypti · Flavivirus', 'Dolor retroorbitario + mialgias + exantema', 'Antígeno NS1 (< 5 d) / IgM (> 5 d)', 'Soporte con hidratación EV (prohibido AINEs)'],
        ['Malaria (P. falciparum)', 'Anopheles hembra · Plasmodium', 'Paroxismos febriles + anemia + ictericia', 'Gota gruesa y frotis sanguíneo', 'Derivados de Artemisinina (Arteméter)'],
        ['Malaria (P. vivax)', 'Anopheles · Plasmodium vivax', 'Accesos febriles cada 48 h (terciana)', 'Gota gruesa (trofozoítos en anillo)', 'Cloroquina + Primaquina (cura hipnozoítos)'],
        ['Fiebre Amarilla', 'Haemagogus / Aedes · Flavivirus', 'Fiebre + ictericia intensa + hemorragias', 'Serología IgM / PCR viral', 'Soporte intensivo en UCI (vacuna preventiva)'],
      ],
    },
    vignette: 'Joven de 26 años consulta por cuadro de 4 días de fiebre alta hasta 39.5 °C, dolor retroorbitario intenso que empeora con los movimientos oculares, mialgias generalizadas y artralgias severas. Refiere haber regresado hace 5 días de un viaje turístico al noreste de Brasil. Al examen: T° 38.8 °C, PA 110/70 mmHg, FC 92 lpm. Se aprecia exantema eritematoso difuso en tronco que respeta pequeñas zonas redondeadas de piel sana. No presenta dolor abdominal a la palpación ni signos de sangrado.',
    explicacion: 'El antecedente de viaje reciente a zona endémica tropical de Sudamérica (Brasil) sumado a la clínica de fiebre aguda, cefalea retroorbitaria intensa ("dolor detrás de los ojos"), mialgias ("fiebre quebrantahuesos") y exantema macular eritematoso con "islas blancas en un mar rojo" es patognomónico de Dengue Clásico sin signos de alarma. La conducta médica correcta es confirmar con prueba de Antígeno NS1 o serología IgM, educar sobre los signos de alarma que obligan a reconsultar de urgencia (dolor abdominal continuo, sangrado mucoso, vómitos) e indicar manejo ambulatorio con hidratación oral abundante y PARACETAMOL para la fiebre. Se debe advertir explícitamente la contraindicación de Aspirina, Ibuprofeno o Ketoprofeno por el riesgo de inducir hemorragias graves.',
    keyPoints: [
      'Dengue: dolor retroorbitario + mialgias severas ("quebrantahuesos") + exantema con islas de piel sana.',
      'Signos de alarma de Dengue: dolor abdominal persistente, vómitos, sangrado mucoso, letargia y aumento del Hto con caída de plaquetas.',
      'En Dengue están FORMALMENTE CONTRAINDICADOS los AINEs y la Aspirina por riesgo de hemorragia; solo usar Paracetamol.',
      'Malaria: sospechar en viajero procedente de zona endémica con accesos febriles paroxísticos, anemia hemolítica e ictericia.',
      'Diagnóstico de certeza de Malaria: GOTA GRUESA y frotis teñido con Giemsa.',
      'P. vivax y P. ovale requieren PRIMAQUINA por 14 días para erradicar los hipnozoítos hepáticos y prevenir recidivas.',
      'Vacuna contra Fiebre Amarilla: virus vivo atenuado; se aplica al menos 10 días antes de viajar y dura de por vida.',
    ],
    questions: [
      {
        stem: 'Un hombre de 30 años consulta en urgencias por fiebre de 39 °C, cefalea y artralgias intensas tras regresar hace 4 días de un viaje por el Amazonas. El médico sospecha clínicamente infección por virus dengue. ¿Cuál de los siguientes fármacos analgésicos está formalmente contraindicado administrar a este paciente?',
        options: [
          { id: 'A', text: 'Paracetamol' },
          { id: 'B', text: 'Ketoprofeno' },
          { id: 'C', text: 'Dipirona' },
          { id: 'D', text: 'Tramadol' },
          { id: 'E', text: 'Codeína' },
        ],
        correcta: 'B',
        explicacion: 'En los pacientes con sospecha de dengue, los antiinflamatorios no esteroidales (AINEs como Ketoprofeno, Ibuprofeno, Diclofenaco) y el ácido acetilsalicílico (Aspirina) están terminantemente contraindicados debido a su acción antiagregante plaquetaria y al riesgo de gatillar hemorragias digestivas graves y potenciar el colapso hemodinámico en caso de evolución a dengue grave. El analgésico y antipirético de elección es el Paracetamol.',
        recTag: 'Banco de Preguntas Oficial · Dengue, Malaria y Fiebre Amarilla',
      },
      {
        stem: 'Una mujer de 29 años presenta accesos febriles con calofríos intensos y sudoración profusa cada 48 horas tras regresar de un viaje por el sudeste asiático. La gota gruesa confirma la presencia de trofozoítos de Plasmodium vivax. Tras el tratamiento inicial con Cloroquina y desaparición de los parásitos en sangre, ¿cuál es la conducta necesaria para prevenir recaídas tardías?',
        options: [
          { id: 'A', text: 'Administrar Primaquina oral durante 14 días' },
          { id: 'B', text: 'Continuar Cloroquina en dosis profiláctica por 6 meses' },
          { id: 'C', text: 'Indicar tratamiento con Doxiciclina por 21 días' },
          { id: 'D', text: 'Administrar vacuna antimalárica de refuerzo' },
          { id: 'E', text: 'No requiere fármacos adicionales dado que la cloroquina es curativa' },
        ],
        correcta: 'A',
        explicacion: 'Plasmodium vivax y Plasmodium ovale tienen la capacidad biológica de generar formas intrahepáticas durmientes denominadas hipnozoítos, las cuales no son eliminadas por la cloroquina (que solo actúa sobre las formas intraeritrocitarias sanguíneas). Para lograr la cura radical y evitar recaídas que pueden presentarse meses después, es mandatario administrar Primaquina por 14 días, previa verificación de niveles normales de la enzima glucosa-6-fosfato deshidrogenasa (G6PD).',
        recTag: 'Banco de Preguntas Oficial · Dengue, Malaria y Fiebre Amarilla',
      },
    ],
  },
  {
    id: 'inf-17',
    classId: 'infecto-17',
    tier: 1,
    blockNum: 4,
    blockName: 'Zoonosis, Medicina Tropical y Vectores',
    topicLabel: '4.4',
    title: 'Zoonosis Chilenas Endémicas: Hidatidosis y Triquinosis',
    perfilCode: '1.04.1.013, 1.04.1.027',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Enfermedades de Notificación Obligatoria (ENO) · Vigilancia Epidemiológica MINSAL',
    reconstrucciones: 'EUNACOM 2023 (Q#39) · EUNACOM 2021 (Q#56) · EUNACOM 2017 (Q#42)',
    frecuencia: 'Alta rentabilidad · quiste hidatídico hepático (PAIR vs cirugía) y triada de triquinosis con eosinofilia',
    svg: null, algoTitle: null,
    diagram: null,
    contexto: 'La hidatidosis y la triquinosis son zoonosis parasitarias de alto impacto en zonas rurales y ganaderas de Chile. En el EUNACOM se evalúa de forma clásica la imagen ecográfica del quiste hidatídico (signo del camalote, membranas desprendidas), el riesgo de shock anafiláctico ante su rotura y la tríada clínica de triquinosis tras el consumo de cecinas o carne de cerdo clandestina.',
    contentSections: [
      {
        subhead: '1. Hidatidosis (Echinococcus granulosus)',
        paragraphs: [
          'La equinococosis quística es causada por la fase larvaria del cestodo <em>Echinococcus granulosus</em>. El hospedero definitivo es el perro (alberga el gusano adulto en su intestino), y los hospederos intermediarios son los ovinos, caprinos y bovinos. El ser humano es un hospedero intermediario accidental al ingerir huevos eliminados en las heces de perros que fueron alimentados con vísceras crudas con quistes.',
          '<strong>Localizaciones:</strong> <strong>Hígado (65-75%</strong>, lóbulo derecho más frecuente) y <strong>Pulmón (15-25%</strong>, bases pulmonares).',
          '<strong>Diagnóstico:</strong> ecografía abdominal (clasificación de Gharbi / OMS). Signos ecográficos clásicos: quiste con vesículas hijas en su interior (imagen en rueda de carreta) o desprendimiento de la membrana germinativa interna (<strong>Signo del Camalote o del Nenúfar</strong>). La serología (Arqueo 5 / ELISA IgG) tiene valor de apoyo.',
          '<strong>Complicaciones y Manejo:</strong> rotura traumática o espontánea con <strong>shock anafiláctico grave por liberación de líquido hidatídico</strong> y siembra peritoneal secundaria. Tratamiento: <strong>Albendazol oral (10-15 mg/kg/día)</strong> asociado a punción-aspiración-inyección-reaspiración (<strong>PAIR</strong>) con agente escolicida (suero salino hipertónico o alcohol al 95%) o cirugía conservadora (periquistectomía).',
        ],
      },
      {
        subhead: '2. Triquinosis (Trichinella spiralis)',
        paragraphs: [
          'Causada por el nematodo <em>Trichinella spiralis</em>. Se adquiere por el <strong>consumo de carne de cerdo o subproductos (cecinas, longanizas, jamón casero) crudos o mal cocidos</strong> provenientes de faenamiento clandestino sin inspección veterinaria (triquinoscopía).',
          'Las larvas enquistadas se liberan en el estómago, maduran en el intestino delgado y las hembras liberan larvas recién nacidas que penetran la circulación y migran hacia el <strong>músculo estriado esquelético de alta actividad metabólica</strong> (diafragma, maseteros, lengua, bíceps), enquistándose.',
          '<strong>Tríada clínica clásica patognomónica:</strong><br>' +
          '1. <strong>Edema bipalpebral y facial bilateral simétrico</strong> (a menudo con hemorragias subconjuntivales y en astilla bajo las uñas).<br>' +
          '2. <strong>Mialgias intensas generalizadas</strong> (dolor al masticar, deglutir o respirar).<br>' +
          '3. <strong>Fiebre alta persistente</strong> (39-40 °C).<br>' +
          '<strong>Hallazgo de laboratorio cardinal:</strong> <strong>EOSINOFILIA MARCADAMENTE ELEVADA (> 20-50%</strong> del recuento leucocitario total) junto con elevación de enzimas musculares (CPK y LDH).',
          '<strong>Tratamiento:</strong> <strong>Albendazol (400 mg cada 12 h por 10 a 14 días)</strong> o Mebendazol + analgésicos. En casos severos con miocarditis o toxicidad sistémica, se asocian corticoides (Prednisona).',
        ],
      },
    ],
    table: {
      title: 'Hidatidosis vs Triquinosis: Cuadro Resumen EUNACOM',
      headers: ['Característica', 'Hidatidosis (Echinococcus granulosus)', 'Triquinosis (Trichinella spiralis)'],
      rows: [
        ['Fuente de contagio', 'Contacto con heces de perro / agua con huevos', 'Carne de cerdo o cecinas caseras crudas'],
        ['Órgano blanco principal', 'Hígado (70%) y Pulmón (20%)', 'Músculo estriado (diafragma, maseteros)'],
        ['Manifestación cardinal', 'Masa quística indolora / hallazgo ecográfico', 'Edema bipalpebral + mialgias + fiebre'],
        ['Hallazgo clave de laboratorio', 'Imagen en camalote / serología IgG', 'Eosinofilia masiva (> 20-50%) + CPK elevada'],
        ['Complicación más temida', 'Rotura de quiste con shock anafiláctico', 'Miocarditis o encefalitis por migración'],
        ['Fármaco antiparasitario', 'Albendazol + procedimiento PAIR o Cirugía', 'Albendazol oral + Corticoides si severo'],
      ],
    },
    vignette: 'Hombre de 44 años acude a urgencias por fiebre de 39 °C, mialgias severas en brazos y piernas que le dificultan caminar y masticar, e hinchazón en los ojos de 4 días de evolución. Refiere que hace 10 días participó en un asado familiar donde consumieron carne de cerdo y longanizas artesanales faenadas en el campo. Al examen físico destaca marcado edema bipalpebral bilateral y periorbitario con hiperemia conjuntival y dolor exquisito a la palpación de las masas musculares de pantorrillas y bíceps. El hemograma informa: leucocitos 16.200/mm³ con 42% de eosinófilos (absolutos 6.800/mm³), CPK total 890 UI/L.',
    explicacion: 'El antecedente epidemiológico de consumo reciente de cecinas o carne de cerdo casera no inspeccionada, sumado a la tríada clínica de fiebre, edema bipalpebral bilateral y mialgias severas con una eosinofilia masiva (> 40%) y elevación de enzimas musculares (CPK), es la presentación clásica e inequívoca de Triquinosis aguda (fase de invasión muscular por Trichinella spiralis). La conducta médica consiste en notificar de inmediato el brote a la SEREMI de Salud (ENO) para decomisar el alimento fuente, e iniciar tratamiento con Albendazol 400 mg cada 12 horas oral por 10 a 14 días asociado a AINEs o corticoides para controlar la respuesta inflamatoria sistémica.',
    keyPoints: [
      'Hidatidosis: el perro es el hospedero definitivo; el humano se contagia al ingerir huevos de las heces caninas.',
      'Quiste hidatídico hepático: imagen ecográfica clásica de membranas desprendidas (Signo del Camalote).',
      'Rotura de quiste hidatídico: provoca SHOCK ANAFILÁCTICO y diseminación secundaria (peritoneal).',
      'Triquinosis: antecedente de consumo de cecinas o carne de cerdo casera sin inspección sanitaria.',
      'Tríada de Triquinosis: Edema bipalpebral bilateral + Mialgias severas + Fiebre.',
      'Laboratorio patognomónico de Triquinosis: EOSINOFILIA MASIVA (> 20-50%) y CPK elevada.',
      'Tratamiento de elección en ambas entidades: Albendazol oral.',
    ],
    questions: [
      {
        stem: 'Un paciente de 35 años consulta por fiebre de 38.8 °C, dolor muscular difuso y marcado edema bipalpebral bilateral tras asistir hace dos semanas a una faena clandestina de cerdos donde consumió embutidos artesanales. El hemograma muestra leucocitosis con 38% de eosinófilos. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Triquinosis' },
          { id: 'B', text: 'Hidatidosis hepática complicada' },
          { id: 'C', text: 'Fiebre tifoidea' },
          { id: 'D', text: 'Dengue con signos de alarma' },
          { id: 'E', text: 'Enfermedad de Chagas aguda' },
        ],
        correcta: 'A',
        explicacion: 'El antecedente del consumo de carne o embutidos de cerdo no fiscalizados sumado a la tríada de fiebre, edema bipalpebral y mialgias con hipereosinofilia marcada (> 30%) es patognomónico de Triquinosis (infección por Trichinella spiralis). La hidatidosis (B) no cursa con este cuadro muscular agudo ni con edema bipalpebral; el Chagas agudo (E) produce el signo de Romaña que es típicamente UNILATERAL.',
        recTag: 'Banco de Preguntas Oficial · Zoonosis Chilenas',
      },
      {
        stem: 'Durante la realización de una ecografía abdominal de rutina a un campesino de 50 años asintomático, se identifica en el lóbulo hepático derecho una masa quística redondeada de 7 cm de diámetro con tabiques internos y desprendimiento de la membrana germinativa (signo del camalote). ¿Cuál es la complicación aguda más grave que puede presentar este paciente?',
        options: [
          { id: 'A', text: 'Rotura espontánea o traumática con shock anafiláctico grave' },
          { id: 'B', text: 'Transformación a colangiocarcinoma metastásico en menos de 1 año' },
          { id: 'C', text: 'Desarrollo de hipertensión portal con cirrosis hepática descompensada' },
          { id: 'D', text: 'Perforación gástrica con hemorragia digestiva alta masiva' },
          { id: 'E', text: 'Fístula aortoentérica exanguinante' },
        ],
        correcta: 'A',
        explicacion: 'El hallazgo ecográfico del signo del camalote es característico de un quiste hidatídico hepático por Echinococcus granulosus. La complicación aguda más temida y de riesgo vital inminente es la rotura del quiste (sea espontánea por aumento de presión intracística o traumática tras un golpe menor), lo cual libera líquido hidatídico rico en antígenos altamente alergénicos hacia el peritoneo, desencadenando un shock anafiláctico fulminante y siembra peritoneal difusa de protoescólices.',
        recTag: 'Banco de Preguntas Oficial · Zoonosis Chilenas',
      },
    ],
  },
  {
    id: 'inf-18',
    classId: 'infecto-18',
    tier: 2,
    blockNum: 4,
    blockName: 'Zoonosis, Medicina Tropical y Vectores',
    topicLabel: '4.5',
    title: 'Bacteriosis Zoonóticas: Brucelosis, Leptospirosis y Fiebre Tifoidea',
    perfilCode: '1.04.1.004, 1.04.1.012, 1.04.1.017',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Enfermedades de Notificación Obligatoria (ENO) · Vigilancia Epidemiológica',
    reconstrucciones: 'EUNACOM 2024 (Q#92) · EUNACOM 2021 (Q#77) · EUNACOM 2018 (Q#14)',
    frecuencia: 'Rentabilidad media · factores de exposición (leche no pasteurizada vs aguas estancadas) y fármacos de elección',
    svg: null, algoTitle: null,
    diagram: null,
    contexto: 'Las bacteriosis zoonóticas y entéricas cursan como síndromes febriles prolongados con compromiso multisistémico. El examen EUNACOM evalúa el nexo causal específico: el consumo de quesos de cabra artesanales no pasteurizados en Brucelosis (fiebre ondulante y espondilodiscitis), el contacto con aguas estancadas contaminadas con orina de roedores en Leptospirosis (Síndrome de Weil) y la disociación pulso-temperatura en Fiebre Tifoidea.',
    contentSections: [
      {
        subhead: '1. Brucelosis (Fiebre Ondulante o de Malta)',
        paragraphs: [
          'Zoonosis bacteriana causada por cocobacilos Gram negativos intracelulares facultativos del género <em>Brucella</em>: <em>B. melitensis</em> (cabras y ovejas, la más invasora y frecuente en Chile) y <em>B. abortus</em> (bovinos).',
          '<strong>Vía de transmisión:</strong> consumo de <strong>leche cruda no pasteurizada o quesillos de cabra artesanales</strong>, o contacto ocupacional de veterinarios y matarifes con fetos abortados y placentas de animales infectados.',
          '<strong>Clínica:</strong> <strong>Fiebre ondulante vespertina o nocturna</strong> asociada a diaforesis profusa con <strong>olor característico a "paja húmeda"</strong>, astenia intensa, hepatoesplenomegalia y artralgias. Su complicación focal más frecuente e invalidante es la <strong>sacroileítis y la espondilodiscitis lumbar</strong>.',
          '<strong>Diagnóstico y Tratamiento:</strong> serología mediante Rosa de Bengala (tamizaje rápido) y aglutinación en tubo (confirmación por títulos). Gold standard: mielocultivo (médula ósea) o hemocultivo en medios bifásicos prolongados (Ruiz-Castañeda). Tratamiento combinado obligatorio para evitar recaídas: <strong>Doxiciclina 100 mg c/12h oral + Rifampicina 600-900 mg/día oral por 6 semanas consecutivas</strong> (o Doxiciclina + Gentamicina las primeras 2 semanas).',
        ],
      },
      {
        subhead: '2. Leptospirosis y Síndrome de Weil',
        paragraphs: [
          'Espiroqueta aerobia estricta (<em>Leptospira interrogans</em>) que coloniza los túbulos renales de roedores silvestres y urbanos (ratas), eliminándose en su orina.',
          '<strong>Transmisión:</strong> contacto de la piel erosionada o mucosas con <strong>aguas estancadas, barro, inundaciones o alcantarillados contaminados</strong> (trabajadores de saneamiento, pescadores, bañistas en lagunas).',
          '<strong>Forma anictérica (90%):</strong> síndrome febril bifásico agudo con <strong>sufusión conjuntival bilateral sin secreción (eritema conjuntival en vidrio esmerilado)</strong> y dolor exquisito a la compresión de las pantorrillas (músculos gastrocnemios).',
          '<strong>Síndrome de Weil (Forma ictérica grave - 10%):</strong> tríada de <strong>Ictericia rubínica + Falla renal aguda con hipokalemia + Diátesis hemorrágica</strong> (hemorragia pulmonar letal). Diagnóstico: Microaglutinación (MAT). Tratamiento: <strong>Penicilina G sódica EV (o Ceftriaxona EV) en casos graves</strong>; Doxiciclina oral en formas leves.',
        ],
      },
      {
        subhead: '3. Fiebre Tifoidea (Salmonella enterica serovar Typhi)',
        paragraphs: [
          'Bacilo Gram negativo entérico de reservorio exclusivamente humano. Transmisión fecal-oral por agua o alimentos contaminados por manipuladores portadores crónicos en vesícula biliar.',
          '<strong>Clínica por semanas:</strong><br>' +
          '• Semana 1: fiebre que asciende "en escalera", cefalea intensa, dolor abdominal sordo y constipación inicial.<br>' +
          '• Semana 2: fiebre en meseta continua (39-40 °C) con <strong>Bradicardia relativa para el nivel térmico (Signo de Faget o disociación esfigmotérmica)</strong>, hepatoesplenomegalia, "manchas rosadas" en abdomen (roséola tífica) y diarrea en puré de arvejas.<br>' +
          '• Semana 3: riesgo de complicaciones graves: <strong>perforación ileal en las placas de Peyer</strong> (abdomen agudo) y hemorragia digestiva baja masiva.',
          '<strong>Diagnóstico:</strong> <strong>Hemocultivos (positivos en 80-90% en la 1ª semana)</strong>; Coprocultivo (positivo desde la 2ª-3ª semana); Mielocultivo (el de mayor sensibilidad > 95% incluso con antibióticos previos). El test de Widal no tiene valor confirmatorio actual.',
          '<strong>Tratamiento:</strong> <strong>Ceftriaxona 2 g/día EV por 7 a 14 días</strong> (fármaco de elección por alta tasa de curación y clearance bacteriano) o Azitromicina 1 g/día oral por 7 días. El Ciprofloxacino se reserva si se confirma susceptibilidad.',
        ],
      },
    ],
    table: {
      title: 'Bacteriosis Zoonóticas: Factores de Exposición y Signos Cardinales EUNACOM',
      headers: ['Enfermedad', 'Agente y Fuente de Exposición', 'Signo Clínico Patognomónico', 'Tratamiento de Elección'],
      rows: [
        ['Brucelosis', 'Brucella spp. · Quesos de cabra no pasteurizados', 'Fiebre ondulante + sudor olor paja + sacroileítis', 'Doxiciclina + Rifampicina por 6 semanas'],
        ['Leptospirosis (Weil)', 'Leptospira · Aguas estancadas y orina de rata', 'Sufusión conjuntival + dolor pantorrillas + ictericia', 'Penicilina G sódica EV o Ceftriaxona'],
        ['Fiebre Tifoidea', 'Salmonella Typhi · Agua y comida contaminada', 'Disociación esfigmotérmica (Faget) + roséola tífica', 'Ceftriaxona EV por 7-14 días o Azitromicina'],
      ],
    },
    vignette: 'Hombre de 42 años, criador de cabras en la precordillera de la Región de Coquimbo, consulta por cuadro de 5 semanas de fiebre vespertina de hasta 38.8 °C con calofríos, astenia severa y sudoración profusa nocturna. Hace 10 días agrega dolor lumbar bajo intenso que se irradia a glúteo derecho y empeora con la marcha. Al examen físico destaca hepatomegalia sensible de 2 cm bajo el reborde costal y dolor exquisito a la maniobra de Fabere en la articulación sacroilíaca derecha. Refiere consumir habitualmente leche y queso de cabra artesanal producido en su predio.',
    explicacion: 'El antecedente del consumo habitual de productos lácteos caprinos no pasteurizados en zona rural del norte chico sumado a la clínica de síndrome febril ondulante prolongado con sudoración nocturna y compromiso articular focal lumbar/sacroilíaco (sacroileítis/espondilodiscitis) es la presentación característica de Brucelosis crónica por Brucella melitensis. La confirmación se realiza mediante Rosa de Bengala de tamizaje y aglutinación sérica o hemocultivos en medio Ruiz-Castañeda. La conducta terapéutica ineludible es el tratamiento antimicrobiano combinado prolongado con Doxiciclina 100 mg cada 12 h oral asociada a Rifampicina 600 a 900 mg al día por un mínimo de 6 semanas continuas para evitar recaídas.',
    keyPoints: [
      'Brucelosis: antecedente de consumo de quesos de cabra no pasteurizados; fiebre ondulante y sudoración con olor a paja húmeda.',
      'Complicación osteoarticular más frecuente de brucelosis: Sacroileítis y Espondilodiscitis lumbar.',
      'Tratamiento de Brucelosis: Doxiciclina + Rifampicina por 6 semanas completas (biterapia obligatoria).',
      'Leptospirosis: contacto con aguas estancadas/inundaciones contaminadas con orina de roedores; cursa con sufusión conjuntival y mialgias en pantorrillas.',
      'Síndrome de Weil: ictericia + falla renal oligúrica hipokalémica + hemorragia pulmonar; tratar con Penicilina G o Ceftriaxona EV.',
      'Fiebre tifoidea: disociación esfigmotérmica (Signo de Faget: fiebre alta con bradicardia relativa); tratamiento de elección es Ceftriaxona.',
    ],
    questions: [
      {
        stem: 'Un trabajador agrícola de 38 años consulta por fiebre de 39 °C, cefalea intensa y marcado dolor en las pantorrillas de 5 días de evolución, posterior a realizar labores de limpieza en un canal de regadío con aguas estancadas. Al examen se observa ictericia en escleras y marcada inyección conjuntival bilateral sin secreción purulenta (sufusión conjuntival). El laboratorio muestra Bilirrubina total 8.5 mg/dL de predominio directo, Creatinina 3.2 mg/dL y gases con acidosis metabólica. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Leptospirosis ictérica (Síndrome de Weil)' },
          { id: 'B', text: 'Hepatitis viral aguda tipo A' },
          { id: 'C', text: 'Colangitis aguda supurada' },
          { id: 'D', text: 'Fiebre tifoidea complicada' },
          { id: 'E', text: 'Malaria por Plasmodium vivax' },
        ],
        correcta: 'A',
        explicacion: 'El antecedente de contacto con aguas estancadas y alcantarillados sumado al cuadro de fiebre, mialgias exquisitas en las pantorrillas y el signo patognomónico de sufusión conjuntival bilateral sin pus, que progresa a falla multiorgánica con ictericia severa y falla renal aguda (Síndrome de Weil), es diagnóstico de Leptospirosis grave por Leptospira interrogans. La hepatitis A (B) y la colangitis (C) no cursan con sufusión conjuntival ni dolor marcado en pantorrillas.',
        recTag: 'Banco de Preguntas Oficial · Brucelosis y Leptospirosis',
      },
      {
        stem: '¿Cuál es el esquema antibiótico de primera línea recomendado para el tratamiento de la Brucelosis en un paciente adulto inmunocompetente?',
        options: [
          { id: 'A', text: 'Ciprofloxacino oral en monoterapia por 14 días' },
          { id: 'B', text: 'Doxiciclina oral asociada a Rifampicina oral durante 6 semanas' },
          { id: 'C', text: 'Amoxicilina / Ácido Clavulánico por 10 días' },
          { id: 'D', text: 'Ceftriaxona intramuscular en dosis única' },
          { id: 'E', text: 'Azitromicina oral por 5 días' },
        ],
        correcta: 'B',
        explicacion: 'Debido a que Brucella es un microorganismo intracelular facultativo con alta propensión a la latencia en el sistema reticuloendotelial y hueso, la monoterapia antibiótica tiene una tasa inaceptable de recaídas (> 50%). La OMS y las normas clínicas exigen biterapia sinérgica prolongada durante un mínimo de 6 semanas, siendo el régimen estándar de elección Doxiciclina (100 mg cada 12 h) asociada a Rifampicina (600 a 900 mg al día).',
        recTag: 'Banco de Preguntas Oficial · Brucelosis y Leptospirosis',
      },
    ],
  },
  {
    id: 'inf-19',
    classId: 'infecto-19',
    tier: 1,
    blockNum: 4,
    blockName: 'Zoonosis, Medicina Tropical y Vectores',
    topicLabel: '4.6',
    title: 'Ántrax (Carbunco Cutáneo y Respiratorio)',
    perfilCode: '1.04.1.003',
    dx: 'Sospecha', tx: 'Inicial', seg: 'Derivar',
    ges: 'Enfermedad de Notificación Obligatoria Inmediata (ENO) · Evento de Bioseguridad',
    reconstrucciones: 'EUNACOM 2022 (Q#87) · EUNACOM 2017 (Q#34) · EUNACOM 2014 (Q#99)',
    frecuencia: 'Rentabilidad media · lesión cutánea característica (escara negra indolora con edema gelatinoso)',
    svg: null, algoTitle: null,
    diagram: null,
    contexto: 'El carbunco o ántrax es una zoonosis bacteriana mayor causada por Bacillus anthracis con potencial de uso como agente de bioterrorismo. En el EUNACOM se evalúa de forma clásica la identificación visual de la pústula maligna cutánea (escara necrótica negra, indolora y no supurativa rodeada de vesículas y edema no foveolar) y el tratamiento de elección con Ciprofloxacino.',
    contentSections: [
      {
        subhead: '1. Agente etiológico y factores de virulencia',
        paragraphs: [
          '<em>Bacillus anthracis</em> es un bacilo Gram positivo formador de esporas, aerobio o anaerobio facultativo, encapsulado e inmóvil. Sus esporas son extremadamente resistentes al calor, desecación y desinfectantes químicos comunes, permaneciendo viables en el suelo durante décadas.',
          'Posee dos factores de virulencia mayores codificados en plásmidos:<br>' +
          '• Cápsula antifagocítica de ácido poli-D-glutámico.<br>' +
          '• Complejo exotoxínico tripartito compuesto por: <strong>Antígeno Protector (PA)</strong>, <strong>Factor Edematógeno (EF</strong>, adenilato ciclasa que causa edema masivo) y <strong>Factor Letal (LF</strong>, metaloproteinasa que induce necrosis tisular y colapso macrofágico).',
        ],
      },
      {
        subhead: '2. Formas clínicas: Carbunco Cutáneo vs Carbunco por Inhalación',
        paragraphs: [
          '• <strong>Carbunco Cutáneo ("Pústula maligna" - 95% de los casos):</strong> se adquiere por inoculación de esporas a través de microtraumatismos en la piel de personas en contacto con ganado (bovino, ovino, caprino) o productos animales contaminados (lana, cueros, huesos). Comienza como una pápula pruriginosa indolora que evoluciona a una vesícula y luego a una <strong>úlcera necrótica con escara negra central ("carbón") rodeada de una corona de vesículas y edema gelatinoso circundante no foveolar muy extenso</strong>. Es <strong>TÍPICAMENTE INDOLORA Y NO PRODUCE PUS</strong> (a menos que sufra sobreinfección bacteriana secundaria).<br>' +
          '• <strong>Carbunco Respiratorio o por Inhalación ("Enfermedad de los cardadores de lana"):</strong> inhalación de bioaerosoles de esporas. Cursa como un cuadro gripal que evoluciona bruscamente a disnea fulminante, cianosis y shock tóxico. Radiografía de tórax patognomónica: <strong>ensanchamiento mediastínico marcado</strong> secundario a linfadenitis y mediastinitis hemorrágica necrotizante.',
        ],
      },
      {
        subhead: '3. Diagnóstico y Terapia Antimicrobiana',
        paragraphs: [
          '<strong>Confirmación:</strong> Gram de la lesión vesicular o cultivo (bacilos Gram positivos en caña de bambú) y confirmación por PCR en el Instituto de Salud Pública (ISP). Notificación inmediata obligatoria.',
          '<strong>Tratamiento de elección:</strong> <strong>Ciprofloxacino 500 mg cada 12 h oral (o Levofloxacino) por 60 días</strong>, o <strong>Doxiciclina 100 mg cada 12 h oral</strong>. En el carbunco sistémico/respiratorio se utiliza triterapia EV (Ciprofloxacino + Clindamicina + Meropenem). NUNCA realizar desbridamiento quirúrgico de la escara cutánea, ya que la manipulación mecánica favorece la diseminación bacteriana y bacteriemia letal.',
        ],
      },
    ],
    table: {
      title: 'Carbunco Cutáneo vs Diagnósticos Diferenciales de Escaras Negras',
      headers: ['Patología', 'Agente Causal', 'Características de la Lesión', 'Dolor Local'],
      rows: [
        ['Ántrax (Carbunco)', 'Bacillus anthracis', 'Escara negra seca con vesículas y gran edema', 'Típicamente INDOLORA y sin pus'],
        ['Aracnoidismo cutáneo', 'Loxosceles laeta (araña de rincón)', 'Placa livedoide violácea con necrosis y flictena', 'Intensamente dolorosa (quemante)'],
        ['Ectima gangrenoso', 'Pseudomonas aeruginosa', 'Úlcera necrótica con halo eritematoso en neutropénico', 'Dolor moderado a severo'],
        ['Tularemia', 'Francisella tularensis', 'Úlcera dolorosa asociada a gran adenopatía supurada', 'Muy dolorosa'],
      ],
    },
    vignette: 'Hombre de 52 años, curtidor de cueros y lanares en una estancia rural, consulta por una lesión en el antebrazo derecho de 5 días de evolución. Refiere que inició como una picadura que no le dolía y que fue aumentando de volumen. Al examen físico se aprecia una placa ulcerada central de 2 cm cubierta por una escara negruzca seca, rodeada por un anillo de pequeñas vesículas serosas y un extenso halo de edema duro que compromete todo el antebrazo. La lesión es completamente indolora a la palpación y no presenta exudado purulento. El paciente está afebril y en buenas condiciones generales.',
    explicacion: 'El antecedente ocupacional de manipulación de cueros y lanas sin procesar sumado al hallazgo físico clásico de una escara necrótica negruzca central seca, rodeada de vesículas y un extenso edema no foveolar ("gelatinoso") que es típicamente INDOLORA y no supurativa, es patognomónico de Carbunco Cutáneo (Ántrax) por Bacillus anthracis. La conducta correcta es tomar muestra del líquido de las vesículas para tinción de Gram y cultivo/PCR, notificar de inmediato a la SEREMI de Salud (ENO inmediata) e iniciar tratamiento antimicrobiano de primera línea con Ciprofloxacino oral (500 mg cada 12 horas) durante 60 días. Se debe enfatizar la contraindicación absoluta de realizar aseo quirúrgico o curetaje de la escara.',
    keyPoints: [
      'Ántrax (Bacillus anthracis): bacilo Gram positivo esporulado; transmisión por contacto con ganado o cueros/lanas.',
      'Pústula maligna cutánea: escara necrótica negra central rodeada de vesículas y edema masivo.',
      'Signo clave: la lesión de carbunco cutáneo es TÍPICAMENTE INDOLORA y NO supurativa (sin pus).',
      'Carbunco por inhalación: mediastinitis hemorrágica con ensanchamiento mediastínico en radiografía de tórax.',
      'Antibiótico de primera línea: Ciprofloxacino oral (o Doxiciclina) por 60 días.',
      'Contraindicación formal: NO realizar desbridamiento quirúrgico de la lesión por riesgo de bacteriemia sistémica.',
    ],
    questions: [
      {
        stem: 'Un trabajador de una fábrica procesadora de cueros importados consulta por una lesión en el dorso de la mano izquierda de 4 días de evolución. Al examen se observa una escara negruzca central de consistencia dura, rodeada por vesículas con líquido claro y un marcado edema indurado en toda la mano, sin dolor a la palpación ni secreción purulenta. ¿Cuál es el tratamiento farmacológico de primera línea más adecuado?',
        options: [
          { id: 'A', text: 'Ciprofloxacino oral' },
          { id: 'B', text: 'Cefazolina endovenosa' },
          { id: 'C', text: 'Flucloxacilina oral' },
          { id: 'D', text: 'Aciclovir tópico' },
          { id: 'E', text: 'Corticoides sistémicos a dosis altas' },
        ],
        correcta: 'A',
        explicacion: 'La presentación clínica de una escara necrótica negruzca indolora con vesículas satélites y edema masivo en un trabajador expuesto a cueros o lanas animales es característica de carbunco cutáneo (Ántrax). El tratamiento antibiótico de elección recomendado internacionalmente por su alta efectividad y cobertura frente a cepas naturales y de bioseguridad es Ciprofloxacino oral (500 mg cada 12 h) o alternativamente Doxiciclina.',
        recTag: 'Banco de Preguntas Oficial · Ántrax',
      },
      {
        stem: '¿Cuál de las siguientes conductas está formalmente CONTRAINDICADA en el manejo de una lesión cutánea sospechosa de carbunco (ántrax) por Bacillus anthracis?',
        options: [
          { id: 'A', text: 'Toma de frotis de líquido vesicular para tinción de Gram' },
          { id: 'B', text: 'Desbridamiento y resección quirúrgica amplia de la escara necrótica' },
          { id: 'C', text: 'Notificación obligatoria inmediata a la autoridad sanitaria' },
          { id: 'D', text: 'Inicio precoz de tratamiento con quinolonas' },
          { id: 'E', text: 'Aislamiento de contacto del paciente con la lesión cubierta' },
        ],
        correcta: 'B',
        explicacion: 'En el carbunco cutáneo, el desbridamiento, curetaje o escisión quirúrgica de la escara necrótica está terminantemente contraindicado. La manipulación mecánica invasiva de la lesión rompe la barrera tisular local y favorece el paso masivo de las bacterias y sus toxinas hacia el torrente circulatorio, desencadenando bacteriemia, shock tóxico sistémico y muerte.',
        recTag: 'Banco de Preguntas Oficial · Ántrax',
      },
    ],
  },
];

module.exports = { bloque4, flow };
