/**
 * DATASET · Nefrología — Bloque 2: Trastornos del Sodio y del Agua (Disnatremias)
 * EUNACOM 2026 · Colección Oficial · Módulo 1 Medicina Interna
 * Estándar Editorial: Gastro 2-Page / Maqueta 1b con Expansión Dinámica de Tiers
 */

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
  ${P.join('\n  ')}
</svg>`;
  return { title, svg };
}

const bloque2 = [
  /* ───────────────────────── 🔴 TIER 3 (4 PÁGINAS) ───────────────────────── */
  {
    id: 'nefro-05', classId: 'nefro-05', tier: 3,
    blockNum: 2, blockName: 'Trastornos del Sodio y del Agua (Disnatremias)',
    topicLabel: '2.1', title: 'Hiponatremia Hipotónica y Síndrome de Desmielinización Osmótica',
    perfilCode: '1.09.2.007, 1.09.2.008, 1.09.4.016', dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Sin garantía GES específica · Cobertura AUGE de Urgencia en Encefalopatía Hiponatrémica Aguda Grave',
    reconstrucciones: 'EUNACOM Julio 2018 (Q#51) · EUNACOM Diciembre 2020 (Q#77) · EUNACOM Julio 2023 (Q#29)',
    frecuencia: 'Alta frecuencia en EUNACOM · Evaluación recurrente de velocidad de corrección y suero hipertónico al 3%',
    svg: null, algoTitle: 'Algoritmo Diagnóstico y Terapéutico de la Hiponatremia',
    diagram: flow('Algoritmo de Manejo de la Hiponatremia Hipotónica Grave', [
      { t: 'Sodio Plasmático < 135 mEq/L (Confirmar Osmolaridad Plasmática)', s: 'Descartar Pseudohiponatremia (Osm Normal: Hiperlipidemia/Mieloma) e Hipertónica (Osm > 295: Hiperglicemia)', type: 'warn' },
      { k: 'split', q: '¿Presenta Síntomas Neurológicos Graves (Convulsiones, Coma, Depresión Respiratoria)?',
        ll: 'SÍNTOMAS GRAVES: Compromiso encefálico agudo',
        left: { t: 'Bolo de Suero Salino Hipertónico al 3% (100–150 mL en 20 min)', s: 'Meta inmediata: elevar natremia 4–6 mEq/L en 1–2 h para yugular herniación · Repetir hasta 2 veces si persisten convulsiones', type: 'acc' },
        rl: 'ASINTOMÁTICO O SÍNTOMAS LEVES (Cefalea, Náuseas)',
        right: { t: 'Evaluar Volemia Clínica y Osmolaridad Urinaria', s: 'Determinar VEC: Hipovolémica vs Euvolémica vs Hipervolémica · Suspender fármacos desencadenantes', type: 'dec' },
      },
      { k: 'split', q: '¿Velocidad de Corrección Máxima Segura en 24 Horas?',
        ll: 'Riesgo Estándar de Mielinolisis',
        left: { t: 'Límite Máximo: ≤ 8 a 10 mEq/L en 24 Horas', s: 'Monitoreo de natremia cada 4–6 horas · Si se sobrecorrige, aportar SG 5% o Desmopresina (DDAVP)', type: 'acc' },
        rl: 'Alto Riesgo (Desnutrición, Alcoholismo, Hepatopatía)',
        right: { t: 'Límite Estricto: ≤ 6 a 8 mEq/L en 24 Horas', s: 'Prevención estricta de Síndrome de Desmielinización Osmótica (Mielinolisis Pontina Central)', type: 'warn' },
      },
    ]),
    contexto: 'La hiponatremia es el trastorno hidroelectrolítico más común en el paciente hospitalizado y representa primordialmente un desbalance en el balance de agua libre corporal total más que un déficit puro de sodio. El cerebro se adapta a la hiponatremia crónica extrayendo osmolitos orgánicos (mioinositol, taurina, glutamato) en 48 horas para evitar el edema cerebral; si el médico corrige el sodio con excesiva rapidez, el medio extracelular se hipertoniza bruscamente, deshidratando a los oligodendrocitos y destruyendo sus vainas de mielina en el puente de Varolio (Mielinolisis Pontina Central), provocando cuadriplejía flácida irreversible y síndrome de enclaustramiento (locked-in).',
    contentSections: [
      {
        subhead: '1. Clasificación Fisiopatológica y Osmolaridad Plasmática',
        paragraphs: [
          'El primer paso frente a un sodio sérico <strong>< 135 mEq/L</strong> es calcular o medir la <strong>Osmolaridad Plasmática Efectiva ($Osm_p = 2 \\times [Na] + [Glicemia] / 18$)</strong>. La hiponatremia verdadera es siempre <strong>hipotónica ($Osm_p < 275\\text{ mOsm/kg}$)</strong>. Si la osmolaridad es normal (280–295 mOsm/kg), se trata de una <strong>pseudohiponatremia</strong> por artefacto de medición en hipertrigliceridemia masiva o hiperproteinemia (mieloma múltiple); si es hipertónica (> 295 mOsm/kg), se debe a la presencia de osmolitos efectivos como la <strong>hiperglicemia</strong>, requiriendo corregir la natremia sumando <strong>1.6 a 2.0 mEq/L por cada 100 mg/dL de glicemia sobre 100 mg/dL</strong>.',
          'Una vez confirmada la hiponatremia hipotónica, se clasifica por su temporalidad en <strong>aguda (< 48 horas)</strong> o <strong>crónica (≥ 48 horas o de duración desconocida)</strong>, y por la severidad bioquímica en leve (130–134 mEq/L), moderada (125–129 mEq/L) y <strong>severa (< 125 mEq/L)</strong>.',
        ],
      },
      {
        subhead: '2. Evaluación del Volumen Extracelular (VEC)',
        paragraphs: [
          'La etiología se desglosa según el estado de volemia clínica del paciente: (1) <strong>Hipovolémica (VEC disminuido):</strong> signos de deshidratación, taquicardia ortostática, sequedad de mucosas. Se subdivide según el <strong>Sodio Urinario ($Na_u$)</strong>: $Na_u < 20\\text{ mEq/L}$ indica pérdidas extrarrenales (vómitos, diarrea, tercer espacio); $Na_u > 20\\text{ mEq/L}$ indica pérdidas renales (diuréticos tiazídicos, déficit de mineralocorticoides / Addison, nefropatía pierde sal).',
          '(2) <strong>Euvolémica (VEC clínicamente normal, sin edema ni signos de hipovolemia):</strong> las causas principales son el <strong>SIADH</strong> ($Na_u > 40\\text{ mEq/L}$, $Osm_u > 100\\text{ mOsm/kg}$), <strong>hipotiroidismo severo</strong>, <strong>insuficiencia suprarrenal secundaria</strong> (déficit de ACTH/cortisol) y la <strong>polidipsia psicógena / bebedores de cerveza</strong> ($Osm_u < 100\\text{ mOsm/kg}$, $Na_u < 20\\text{ mEq/L}$). (3) <strong>Hipervolémica (VEC aumentado con edema periférico o ascitis):</strong> Insuficiencia cardíaca congestiva, Cirrosis hepática y Síndrome Nefrótico; en todas ellas el $Na_u$ es característicamente <strong>< 20 mEq/L</strong> por disminución del volumen arterial circulante efectivo.',
        ],
      },
      {
        subhead: '3. Manejo de Urgencia en Hiponatremia Sintomática Grave',
        paragraphs: [
          'La presencia de <strong>síntomas neurogénicos de alarma (convulsiones tónico-clónicas, estupor, coma, somnolencia profunda o bradipnea)</strong> configura una emergencia médica vital secundaria a <strong>edema cerebral y riesgo inminente de enclavamiento uncal o tonsilar</strong>. La intervención prioritaria es la administración inmediata de <strong>Suero Salino Hipertónico al 3% (NaCl 3%)</strong> en bolo intravenoso de <strong>100 a 150 mL en 10 a 20 minutos</strong>.',
          'Este bolo puede repetirse hasta 2 veces adicionales (a intervalos de 20–30 minutos) si los síntomas neurológicos persisten, hasta alcanzar una <strong>elevación objetivo inicial de 4 a 6 mEq/L en el sodio sérico</strong>. Esta modesta elevación de 4–6 mEq/L es suficiente para reducir drásticamente el edema cerebral y revertir los síntomas agudos.',
        ],
      },
      {
        subhead: '4. Velocidad de Corrección y Síndrome de Desmielinización Osmótica',
        paragraphs: [
          'En hiponatremia crónica, la velocidad de corrección debe ser estrictamente vigilada: el incremento de natremia <strong>NUNCA debe superar los 8 a 10 mEq/L en las primeras 24 horas</strong>, ni más de <strong>18 mEq/L en 48 horas</strong>. En pacientes de muy alto riesgo de desmielinización (alcoholismo crónico, desnutrición calórico-proteica severa, cirrosis hepática avanzada, hipokalemia concurrente o natremia basal < 105 mEq/L), el límite máximo recomendado es de <strong>6 a 8 mEq/L en 24 horas</strong>.',
          'Si ocurre <strong>sobrecorrección accidental</strong> (por ejemplo, en hiponatremia hipovolémica que recibe suero fisiológico y "apaga" bruscamente la secreción de ADH, desencadenando poliuria acuosa masiva), se debe <strong>frenar la diuresis y reinvertir el ascenso</strong> mediante la infusión de <strong>Suero Glucosado al 5%</strong> a 3–5 mL/kg/h asociado a <strong>Desmopresina (DDAVP) 1 a 2 mcg subcutánea o IV</strong> cada 6–8 horas para reinducir retención de agua libre.',
        ],
      },
      {
        subhead: '5. Fórmulas de Cálculo y Manejo según Volemia',
        paragraphs: [
          'La <strong>fórmula de Adrogué-Madias</strong> estima el cambio de sodio sérico tras infundir 1 litro de una solución dada: $\\Delta Na = (Na_{soluci\\acute{o}n} - Na_{actual}) / (Agua\\ Corporal\\ Total + 1)$. Un litro de NaCl 3% aporta <strong>513 mEq de Na</strong>; un litro de Suero Fisiológico 0.9% aporta <strong>154 mEq de Na</strong>; el ACT se estima como $0.6 \\times peso$ en varones y $0.5 \\times peso$ en mujeres y ancianos.',
          'En pacientes <strong>asintomáticos</strong>: hipovolemia se maneja con <strong>Suero Fisiológico 0.9%</strong> para restaurar perfusión; SIADH con <strong>restricción de líquidos libres (< 800–1000 mL/día)</strong> y cápsulas orales de NaCl o furosemida; y estados edematosos (ICC, cirrosis) con restricción hídrica y <strong>diuréticos de asa (furosemida)</strong> para forzar la excreción de agua libre hipotónica.',
        ],
      },
    ],
    table: {
      title: 'Diagnóstico Diferencial de la Hiponatremia Hipotónica según Volemia y Sodio Urinario',
      headers: ['Estado de Volemia (VEC)', 'Sodio Urinario (Nau)', 'Osmolaridad Urinaria (Osmu)', 'Causas Frecuentes y Tratamiento'],
      rows: [
        ['Hipovolemia (Pérdidas Extrarrenales)', '< 20 mEq/L', '> 400 mOsm/kg', 'Vómitos, diarrea profusa, tercer espacio · Tx: Suero Fisiológico 0.9%'],
        ['Hipovolemia (Pérdidas Renales)', '> 20 mEq/L', '< 350 mOsm/kg', 'Diuréticos tiazídicos, Insuficiencia Suprarrenal primaria · Tx: SF 0.9% + Hidrocortisona'],
        ['Euvolemia (SIADH / Fármacos)', '> 40 mEq/L', '> 100 mOsm/kg (concentrada)', 'ISRS (sertralina, citalopram), Carbamazepina, Cáncer microcítico · Tx: Restricción hídrica'],
        ['Euvolemia (Baja Ingesta Solutos)', '< 20 mEq/L', '< 100 mOsm/kg (diluida)', 'Polidipsia psicógena, Síndrome de "Beer potomania" · Tx: Aporte de solutos y dieta'],
        ['Hipervolemia (Edema / Sobrecarga)', '< 20 mEq/L', '> 300 mOsm/kg', 'Insuficiencia cardíaca, Cirrosis hepática, Síndrome Nefrótico · Tx: Restricción + Furosemida'],
      ],
    },
    treatmentTable: {
      title: 'Protocolo de Seguridad y Rescate en Hiponatremia Aguda y Crónica',
      headers: ['Escenario Clínico', 'Objetivo Bioquímico', 'Régimen de Infusión / Fármaco de Elección'],
      rows: [
        ['Encefalopatía Aguda con Convulsiones', 'Elevar Na 4–6 mEq/L en 1–2 horas', 'NaCl 3% (150 mL en bolo de 20 min); repetir hasta 2 veces si no ceden convulsiones'],
        ['Corrección Segura 24 Horas', 'Ascenso máximo 8–10 mEq/L/día', 'NaCl 3% a 0.5–1 mL/kg/h en BIC tras bolo, con electrolitos plasmáticos cada 4 h'],
        ['Sobrecorrección Inadvertida (> 10 mEq/L en 24 h)', 'Frenar y re-descender natremia', 'Suspender salinos · Iniciar SG 5% (3–5 mL/kg/h) + Desmopresina (DDAVP) 1–2 mcg IV/SC'],
        ['SIADH Asintomático Crónico', 'Mantener natremia estable > 130 mEq/L', 'Restricción hídrica estricta (800–1000 mL/día) + NaCl comprimidos orales (2–3 g c/8h)'],
      ],
    },
    vignette: 'Mujer de 74 años, con antecedentes de hipertensión arterial y depresión mayor tratada con Hidroclorotiazida 25 mg/día y Citalopram 20 mg/día. Es traída al Servicio de Urgencias por sus familiares tras presentar cuadro de 24 horas de cefalea opresiva, marcha inestable y un episodio de convulsión tónico-clónica generalizada de 3 minutos de duración hace 30 minutos. Al examen físico: en sopor moderado, no responde al interrogatorio, PA 135/85 mmHg, FC 78 lpm, afebril, sin signos de deshidratación ni edemas periféricos, pupilas isocóricas. Exámenes de laboratorio: Glicemia 98 mg/dL, Sodio plasmático 112 mEq/L, Potasio 3.6 mEq/L, Creatinina 0.8 mg/dL, Osmolaridad plasmática 232 mOsm/kg. Sodio urinario 68 mEq/L, Osmolaridad urinaria 410 mOsm/kg.',
    explicacion: 'La paciente presenta una Hiponatremia Hipotónica Euvolémica Grave Sintomática (Na 112 mEq/L) con Encefalopatía Hiponatrémica y convulsiones, desencadenada por el uso concomitante de un diurético tiazídico y un inhibidor selectivo de la recaptura de serotonina (Citalopram, inductor potente de SIADH). Ante la presencia de convulsiones activas o recientes, la conducta prioritaria e impostergable es administrar un bolo de Suero Salino Hipertónico al 3% (100–150 mL en 20 minutos) con el objetivo de elevar rápidamente la natremia entre 4 y 6 mEq/L para abortar el edema cerebral hipertensivo endocranéano. El límite de corrección en 24 horas no debe superar los 8–10 mEq/L para evitar la mielinolisis pontina central.',
    keyPoints: [
      'Confirmar siempre hiponatremia hipotónica verdadera: en hiperglicemia, corregir sumando 1.6 a 2.0 mEq/L de Na por cada 100 mg/dL de glicemia sobre 100 mg/dL.',
      'Sodio < 120 mEq/L con compromiso de conciencia, estupor o convulsiones es una emergencia vital: tratamiento inmediato con bolo de NaCl al 3% (100–150 mL en 20 min).',
      'Meta de emergencia inicial: elevar el sodio sérico entre 4 y 6 mEq/L en las primeras 2 a 4 horas para revertir la hipertensión endocraneana aguda.',
      'Velocidad máxima absoluta de corrección: NO superar 8 a 10 mEq/L en 24 horas ni 18 mEq/L en 48 horas (en pacientes de alto riesgo: máx 6–8 mEq/L/día).',
      'La corrección excesivamente rápida causa Síndrome de Desmielinización Osmótica (Mielinolisis Pontina Central) con cuadriplejía flácida y disartria bulbar irreversible.',
      'Si ocurre sobrecorrección accidental, detener el ascenso infundiendo Suero Glucosado al 5% asociado a Desmopresina (DDAVP) 1 a 2 mcg IV/SC.',
      'Diuréticos tiazídicos actúan en el túbulo contorneado distal alterando la dilución urinaria: son la causa farmacológica más frecuente de hiponatremia hipovolémica grave.',
      'SIADH se caracteriza por euvolemia clínica, hiponatremia hipotónica con orina inapropiadamente concentrada (Osmu > 100) y natriuresis elevada (Nau > 40 mEq/L).',
    ],
    questions: [
      {
        stem: 'Hombre de 60 años con diagnóstico reciente de neuralgia del trigémino en tratamiento con Carbamazepina desde hace 3 semanas. Consulta por astenia, mareos, náuseas y confusión progresiva de 48 horas de evolución. Al examen físico: orientado en persona pero desorientado en tiempo y espacio, PA 125/75 mmHg, FC 74 lpm, hidratado, sin edemas periféricos ni focalidad neurológica. Exámenes de laboratorio: Glicemia 92 mg/dL, Sodio sérico 118 mEq/L, Potasio 4.2 mEq/L, Creatinina 0.7 mg/dL, Sodio urinario 52 mEq/L, Osmolaridad urinaria 380 mOsm/kg. ¿Cuál es el trastorno hidroelectrolítico y el diagnóstico etiológico más probable?',
        options: [
          { id: 'A', text: 'Hiponatremia euvolémica secundaria a SIADH inducido por carbamazepina' },
          { id: 'B', text: 'Hiponatremia hipovolémica por pérdida renal de sal' },
          { id: 'C', text: 'Pseudohiponatremia por hipertrigliceridemia farmacológica' },
          { id: 'D', text: 'Diabetes insípida central neurogénica' },
          { id: 'E', text: 'Insuficiencia suprarrenal primaria inducida por fármacos' },
        ],
        correcta: 'A',
        explicacion: 'La Carbamazepina es un fármaco anticonvulsivante clásico bien conocido por sensibilizar el túbulo colector renal a la vasopresina y estimular la liberación hipotalámica de ADH, desencadenando un SIADH yatrogénico. El paciente presenta la tríada definitoria de SIADH: (1) hiponatremia hipotónica severa (118 mEq/L), (2) estado de euvolemia clínica (sin deshidratación ni edemas), y (3) orina inapropiadamente concentrada (Osmolaridad urinaria 380 mOsm/kg > 100) con natriuresis persistente (Sodio urinario 52 mEq/L > 40) en presencia de función renal y suprarrenal conservadas. El manejo consiste en suspender la carbamazepina y restringir el consumo de agua libre.',
        recTag: 'EUNACOM Julio 2018 · Reconstrucción oficial',
      },
      {
        stem: 'Mujer de 70 años con antecedente de depresión en tratamiento con sertralina ingresa a urgencias en coma no reactivo tras presentar dos convulsiones tónico-clónicas generalizadas en su domicilio. Laboratorio de urgencia: Glicemia 105 mg/dL, Sodio plasmático 108 mEq/L, Potasio 3.9 mEq/L, Osmolaridad plasmática 225 mOsm/kg. ¿Cuál es la conducta terapéutica inmediata más adecuada?',
        options: [
          { id: 'A', text: 'Infusión continua de Suero Fisiológico 0.9% a 250 mL/hora' },
          { id: 'B', text: 'Bolo intravenoso de 100 a 150 mL de Suero Salino Hipertónico al 3% en 20 minutos' },
          { id: 'C', text: 'Restricción hídrica estricta a 500 mL/día y control electrolítico en 24 horas' },
          { id: 'D', text: 'Administración de 40 mg de furosemida intravenosa en bolo' },
          { id: 'E', text: 'Infusión rápida de Suero Glucosado al 5% con ampolla de cloruro de potasio' },
        ],
        correcta: 'B',
        explicacion: 'La paciente presenta una encefalopatía hiponatrémica aguda severa con riesgo vital inminente por edema cerebral difuso y enclavamiento encefálico manifestado por coma y convulsiones recurrentes. En este contexto crítico, las guías internacionales y los consensos nefrológicos establecen que la medida de rescate de primera línea es la infusión rápida de un bolo de 100 a 150 mL de Suero Salino Hipertónico al 3% (NaCl 3%) administrado en 20 minutos. Este bolo persigue elevar la natremia en 4 a 6 mEq/L rápidamente, lo cual reduce de inmediato el volumen celular cerebral hipertensivo y detiene las convulsiones. El suero fisiológico al 0.9% es isotónico respecto al plasma normal pero puede ser inefectivo o incluso empeorar la natremia en SIADH grave.',
        recTag: 'EUNACOM Diciembre 2020 · Reconstrucción oficial',
      },
      {
        stem: 'Hombre de 54 años con alcoholismo crónico severo y desnutrición ingresa con sodio sérico de 102 mEq/L por hiponatremia hipotónica. Se inicia reposición hidroelectrolítica con solución salina. A las 20 horas de ingreso, el control de laboratorio muestra sodio plasmático en 120 mEq/L (aumento de 18 mEq/L). El paciente evoluciona con disartria, disfagia, tetraparesia espástica y compromiso progresivo de la vigilia. ¿Cuál es el diagnóstico más probable de esta complicación?',
        options: [
          { id: 'A', text: 'Hematoma subdural crónico reagudizado' },
          { id: 'B', text: 'Encefalopatía de Wernicke por déficit de tiamina' },
          { id: 'C', text: 'Síndrome de desmielinización osmótica (mielinolisis pontina central)' },
          { id: 'D', text: 'Accidente cerebrovascular isquémico de la arteria cerebral media' },
          { id: 'E', text: 'Delirium tremens por deprivación alcohólica aguda' },
        ],
        correcta: 'C',
        explicacion: 'El cuadro corresponde al Síndrome de Desmielinización Osmótica (clásicamente conocido como Mielinolisis Pontina Central). Ocurre cuando una hiponatremia crónica severa se corrige a una velocidad excesiva (en este caso el sodio subió 18 mEq/L en 20 horas, violando ampliamente el límite de seguridad de 6–8 mEq/L/día para pacientes alcohólicos desnutridos). Al hipertonizarse bruscamente el plasma, las células cerebrales que habían agotado sus osmolitos orgánicos sufren una deshidratación osmótica masiva que lesiona de manera irreversible los oligodendrocitos pontinos, provocando desmielinización. Clínicamente se manifiesta de 2 a 6 días después de la corrección rápida con disartria, disfagia, paresia pseudobulbar, tetraparesia espástica y estado locked-in.',
        recTag: 'EUNACOM Julio 2023 · Reconstrucción oficial',
      },
      {
        stem: '¿Cuál es el mecanismo por el cual los diuréticos tiazídicos (ej. hidroclorotiazida, clortalidona) producen hiponatremia con mayor frecuencia y severidad que los diuréticos de asa (ej. furosemida)?',
        options: [
          { id: 'A', text: 'Las tiazidas actúan en el túbulo contorneado distal bloqueando la excreción de agua libre sin interferir con la médula hiperosmolar' },
          { id: 'B', text: 'Las tiazidas destruyen directamente el gradiente medular de concentración en el asa de Henle' },
          { id: 'C', text: 'Las tiazidas inhiben la síntesis central de hormona antidiurética a nivel supraóptico' },
          { id: 'D', text: 'La furosemida produce mayor pérdida de sodio urinario que las tiazidas por miligramo de fármaco' },
          { id: 'E', text: 'Las tiazidas estimulan de manera directa a los osmorreceptores hipotalámicos induciendo sed patológica' },
        ],
        correcta: 'A',
        explicacion: 'Los diuréticos tiazídicos inhiben el cotransportador Na+/Cl- en el túbulo contorneado distal, el cual es el segmento dilutor cortical de la nefrona. Al bloquear este transportador, impiden la generación normal de orina diluida, forzando la excreción de orina hipertónica rica en sodio y potasio. Crucialmente, las tiazidas NO afectan el asa de Henle, por lo que dejan intacto el intersticio medular hiperosmolar renal, permitiendo que la hormona antidiurética (ADH) siga reabsorbiendo agua libre de forma masiva en el túbulo colector. En cambio, los diuréticos de asa bloquean el cotransportador Na+/K+/2Cl- en el asa gruesa de Henle, disolviendo el gradiente medular e impidiendo que el riñón concentre la orina, lo que genera excreción de agua libre y protege paradójicamente contra la hiponatremia.',
        recTag: 'Caso tipo EUNACOM · Fisiopatología tubular',
      },
    ],
  },

  /* ───────────────────────── 🟡 TIER 2 (2 PÁGINAS) ───────────────────────── */
  {
    id: 'nefro-06', classId: 'nefro-06', tier: 2,
    blockNum: 2, blockName: 'Trastornos del Sodio y del Agua (Disnatremias)',
    topicLabel: '2.2', title: 'SIADH vs Síndrome Pierde Sal Cerebral y Polidipsia Primaria',
    perfilCode: '1.09.1.010, 1.09.2.007', dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Sin garantía GES específica',
    reconstrucciones: 'EUNACOM Julio 2016 (Q#33) · EUNACOM Diciembre 2018 (Q#64)',
    frecuencia: 'Media-alta en EUNACOM · Distinción crítica entre restricción hídrica (SIADH) y reposición con salino (Pierde Sal)',
    svg: null, algoTitle: 'Diagnóstico Diferencial: SIADH vs Pierde Sal Cerebral',
    diagram: flow('Diagnóstico y Conducta: SIADH vs Síndrome Pierde Sal Cerebral (CSW)', [
      { t: 'Hiponatremia Hipotónica con Natriuresis Elevada (Nau > 40 mEq/L)', s: 'Paciente con patología neurológica aguda (TEC, HSA) o neoplasia / fármacos', type: 'warn' },
      { k: 'split', q: '¿Cuál es el Estado de la Volemia Efectiva (VEC)?',
        ll: 'Euvolemia Clínica (Peso estable, PVC normal)',
        left: { t: 'Síndrome de Secreción Inapropiada de ADH (SIADH)', s: 'Tratamiento: Restricción Hídrica estricta (< 800–1000 mL/día) · Sal oral · Furosemida', type: 'acc' },
        rl: 'Hipovolemia Clara (PVC baja, ortostatismo, balance negativo)',
        right: { t: 'Síndrome Pierde Sal Cerebral (Cerebral Salt Wasting)', s: 'Tratamiento: Reposición Agresiva de Volumen y Sodio con Suero Fisiológico 0.9% / 3%', type: 'warn' },
      },
    ]),
    contexto: 'Diferenciar el SIADH del Síndrome Pierde Sal Cerebral en un paciente con patología intracraneana (ej. hemorragia subaracnoidea o traumatismo craneoencefálico) es una de las decisiones más críticas de la medicina intensiva. En el SIADH hay exceso de agua libre mediado por ADH con normovolemia, y el tratamiento de elección es la restricción hídrica; en el Pierde Sal Cerebral hay una natriuresis primaria mediada por péptidos natriuréticos con hipovolemia profunda. Si se aplica erróneamente restricción hídrica en un Pierde Sal Cerebral, se precipita shock hipovolémico e isquemia cerebral secundaria por vasoespasmo.',
    contentSections: [
      {
        subhead: '1. Criterios Diagnósticos de SIADH (Schwartz-Bartter)',
        paragraphs: [
          'El <strong>SIADH</strong> se define por: (1) Hiponatremia hipotónica efectiva ($Na_p < 135\\text{ mEq/L}$, $Osm_p < 275\\text{ mOsm/kg}$); (2) <strong>Osmolaridad urinaria inapropiadamente concentrada ($Osm_u > 100\\text{ mOsm/kg}$, frecuentemente > 300)</strong>; (3) <strong>Sodio urinario elevado ($Na_u > 40\\text{ mEq/L}$)</strong> con ingesta normal de sal; (4) <strong>Euvolemia clínica</strong> (ausencia de signos de deshidratación o de edema); y (5) Función tiroidea, suprarrenal y renal rigurosamente normales sin uso reciente de diuréticos.',
          'Las etiologías principales comprenden: <strong>Neoplasias</strong> (cáncer pulmonar microcítico de células pequeñas como secreción ectópica paraneoplásica clásica); <strong>fármacos</strong> (ISRS como sertralina y citalopram, carbamazepina, ciclofosfamida, antipsicóticos); <strong>patología del SNC</strong> (meningitis, encefalitis, AVC, tumores); y <strong>patología pulmonar infecciosa</strong> (neumonía comunitaria bacteriana o viral).',
        ],
      },
      {
        subhead: '2. SIADH vs Síndrome Pierde Sal Cerebral (Cerebral Salt Wasting)',
        paragraphs: [
          'El <strong>Síndrome Pierde Sal Cerebral (SPSC / CSW)</strong> ocurre en pacientes neuroquirúrgicos o con hemorragia subaracnoidea debido a la liberación masiva de péptido natriurético cerebral (BNP). A diferencia del SIADH, el paciente con Pierde Sal presenta <strong>hipovolemia verdadera</strong>, pérdida de peso, balance hídrico negativo, presión venosa central baja, hemoconcentración y elevación del BUN con relación BUN/Cr > 20.',
          'El contraste terapéutico es absoluto: el SIADH se trata con <strong>restricción de líquidos libres (800–1000 mL/día)</strong> y suplementos de sal; mientras que el Síndrome Pierde Sal Cerebral requiere <strong>expansión enérgica de volumen con Suero Fisiológico al 0.9%</strong> (o hipertónico al 3% si es severo) y mineralocorticoides (Fludrocortisona). La restricción hídrica en el CSW es fatal.',
        ],
      },
    ],
    table: {
      title: 'Comparación Diagnóstica: SIADH vs Síndrome Pierde Sal Cerebral vs Polidipsia Primaria',
      headers: ['Parámetro', 'SIADH', 'Pierde Sal Cerebral (CSW)', 'Polidipsia Psicógena'],
      rows: [
        ['Volumen Extracelular (VEC)', 'Euvolemia (clínicamente normal)', 'Hipovolemia (deshidratación, hipotensión)', 'Euvolemia a hipervolemia leve'],
        ['Osmolaridad Urinaria (Osmu)', '> 100 mOsm/kg (orina concentrada)', '> 300 mOsm/kg (orina concentrada)', '< 100 mOsm/kg (máxima dilución)'],
        ['Sodio Urinario (Nau)', '> 40 mEq/L', '> 40–80 mEq/L (pérdida renal masiva)', '< 20 mEq/L (retención renal)'],
        ['Ácido Úrico Plasmático', 'Hipouricemia (< 4 mg/dL)', 'Hipouricemia o normal', 'Normal o disminuido'],
        ['Tratamiento de Elección', 'Restricción Hídrica (< 1 L/día)', 'Expansión de Volemia (NaCl 0.9% / Fludrocortisona)', 'Restricción de agua libre oral'],
      ],
    },
    vignette: 'Hombre de 52 años, operado hace 5 días de clipaje de aneurisma de arteria comunicante anterior por hemorragia subaracnoidea Fisher III. Ingresa a control de UCI taquicárdico (FC 110 lpm), PA 90/60 mmHg (previas de 135/85), PVC 2 cmH2O (basal 8 cmH2O), diuresis de 4.500 mL en las últimas 24 horas y balance hídrico negativo de -2.800 mL. Exámenes: Sodio sérico 126 mEq/L (basal 138), Potasio 4.0 mEq/L, BUN 28 mg/dL, Creatinina 0.9 mg/dL, Sodio urinario 88 mEq/L, Osmolaridad urinaria 450 mOsm/kg.',
    explicacion: 'El paciente presenta una hiponatremia hipotónica con natriuresis elevada en contexto de una patología neuroquirúrgica intracraneana aguda. La clave diagnóstica que descarta SIADH y confirma Síndrome Pierde Sal Cerebral (CSW) es la presencia indudable de hipovolemia hemodinámica: hipotensión arterial, taquicardia ortostática, PVC colapsada (2 cmH2O) y balance hídrico marcadamente negativo con poliuria. La conducta terapéutica correcta es la reposición masiva de volumen intravascular y sodio con Suero Fisiológico al 0.9% intravenoso para prevenir el vasoespasmo e infarto cerebral secundario.',
    keyPoints: [
      'SIADH: hiponatremia hipotónica euvolémica con orina inapropiadamente concentrada (Osmu > 100 mOsm/kg) y Nau > 40 mEq/L.',
      'Cáncer pulmonar microcítico es la causa paraneoplásica clásica de SIADH por síntesis ectópica tumoral de vasopresina.',
      'Fármacos inductores frecuentes de SIADH: ISRS (citalopram, sertralina), carbamazepina, antipsicóticos y ciclofosfamida.',
      'En SIADH el paciente está clí­nicamente euvolémico: no tiene edemas ni signos de deshidratación.',
      'El tratamiento de base del SIADH euvolémico asintomático es la restricción hídrica estricta (800 a 1000 mL/día).',
      'Síndrome Pierde Sal Cerebral (CSW): natriuresis mediada por BNP en patología neuroquirúrgica que cursa con HIPOVOLEMIA real.',
      'Diferencia crítica: en SIADH se restringe agua libre; en Pierde Sal Cerebral se administra abundante suero salino al 0.9% para evitar shock e isquemia cerebral.',
    ],
    questions: [
      {
        stem: 'Mujer de 60 años con antecedentes de hipertensión arterial y depresión mayor tratada con Enalapril y Citalopram consulta para chequeo de rutina. Está completamente asintomática. En sus exámenes destaca: Sodio sérico 127 mEq/L, Potasio 4.1 mEq/L, Creatinina 0.9 mg/dL, Glicemia 88 mg/dL, Osmolaridad plasmática 262 mOsm/kg, Sodio urinario 60 mEq/L y Osmolaridad urinaria 520 mOsm/kg. Al examen físico no presenta edemas ni ortostatismo, signos vitales normales. Pruebas tiroideas y cortisol matinal normales. ¿Cuál es la causa más probable de su hiponatremia?',
        options: [
          { id: 'A', text: 'Efecto adverso del Enalapril por disminución de aldosterona' },
          { id: 'B', text: 'Secreción inadecuada de ADH (SIADH) secundaria a Citalopram' },
          { id: 'C', text: 'Insuficiencia suprarrenal primaria oculta' },
          { id: 'D', text: 'Pérdida renal de sodio por tubulopatía crónica' },
          { id: 'E', text: 'Hipotiroidismo primario descompensado' },
        ],
        correcta: 'B',
        explicacion: 'El cuadro cumple los criterios estrictos de SIADH: hiponatremia hipotónica (127 mEq/L), euvolemia clínica (sin ortostatismo ni edema), sodio urinario alto (60 mEq/L > 40) y osmolaridad urinaria concentrada (520 mOsm/kg > 100) con funciones renal, suprarrenal y tiroidea normales. Los inhibidores selectivos de la recaptura de serotonina (como el Citalopram) son una causa farmacológica frecuente y reconocida de SIADH en adultos mayores al estimular la liberación hipotalámica de hormona antidiurética.',
        recTag: 'EUNACOM Julio 2016 · Reconstrucción oficial',
      },
      {
        stem: 'Hombre de 72 años con tabaquismo severo consulta por tos crónica, baja de peso y desorientación fluctuante en la última semana. Al examen físico: adelgazado, vigil, pero desorientado en tiempo, sin focalidad neurológica, PA 130/80 mmHg, hidratado y sin edema. Exámenes: Sodio sérico 121 mEq/L, Sodio urinario 65 mEq/L, Osmolaridad urinaria 480 mOsm/kg. La radiografía de tórax muestra una masa hiliar derecha de bordes espiculados. ¿Cuál es el diagnóstico más probable del trastorno electrolítico?',
        options: [
          { id: 'A', text: 'SIADH por secreción ectópica paraneoplásica de carcinoma pulmonar de células pequeñas' },
          { id: 'B', text: 'Metástasis suprarrenales bilaterales con enfermedad de Addison' },
          { id: 'C', text: 'Síndrome hiperosmolar secundario a neoplasia pulmonar' },
          { id: 'D', text: 'Hiponatremia hipervolémica por insuficiencia cardíaca congestiva' },
          { id: 'E', text: 'Pseudohiponatremia por hiperproteinemia paraneoplásica' },
        ],
        correcta: 'A',
        explicacion: 'El carcinoma neuroendocrino de células pequeñas del pulmón (microcítico u "oat cell") es la neoplasia maligna que con mayor frecuencia causa síndromes paraneoplásicos endocrinos, destacando la secreción ectópica no regulada de hormona antidiurética (vasopresina). Esto desencadena un SIADH clásico con hiponatremia hipotónica euvolémica grave y retención inapropiada de agua libre.',
        recTag: 'EUNACOM Diciembre 2018 · Reconstrucción oficial',
      },
    ],
  },

  /* ───────────────────────── 🟡 TIER 2 (2 PÁGINAS) ───────────────────────── */
  {
    id: 'nefro-07', classId: 'nefro-07', tier: 2,
    blockNum: 2, blockName: 'Trastornos del Sodio y del Agua (Disnatremias)',
    topicLabel: '2.3', title: 'Hipernatremia y Diabetes Insípida (Central vs Nefrogénica)',
    perfilCode: '1.09.1.007, 1.09.2.008', dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Sin garantía GES específica',
    reconstrucciones: 'EUNACOM Diciembre 2015 (Q#42) · EUNACOM Julio 2021 (Q#19)',
    frecuencia: 'Media en EUNACOM · Preguntas repetidas sobre poliuria inducida por litio y prueba de desmopresina',
    svg: null, algoTitle: 'Algoritmo Diagnóstico de la Hipernatremia y la Poliuria Hipotónica',
    diagram: flow('Enfrentamiento de la Hipernatremia y Diabetes Insípida', [
      { t: 'Hipernatremia: Sodio Plasmático > 145 mEq/L (Déficit de Agua Libre)', s: 'Osmolaridad plasmática siempre elevada · Determinar mecanismo: Pérdida neta de agua vs Ganancia de sal', type: 'warn' },
      { k: 'split', q: '¿Presenta Poliuria Hipotónica (> 3 L/día u orina diluida < 300 mOsm/kg)?',
        ll: 'SÍ: Diabetes Insípida (Déficit o Resistencia a ADH)',
        left: { t: 'Prueba de Desmopresina (DDAVP)', s: 'Evaluar respuesta de concentración urinaria tras aporte de análogo de vasopresina', type: 'dec' },
        rl: 'NO: Pérdidas Extrarrenales de Agua Libre',
        right: { t: 'Pérdidas Insensibles / Deshidratación', s: 'Fiebre, hiperventilación, sudoración o falta de acceso al agua en postrados', type: 'acc' },
      },
      { k: 'split', q: '¿Aumenta la Osmolaridad Urinaria > 50% tras Desmopresina?',
        ll: 'SÍ: Aumento significativo de Osmu',
        left: { t: 'Diabetes Insípida Central (Neurogénica)', s: 'Falla hipotalámica/hipofisiaria (TEC, adenoma) · Tx: Desmopresina intranasal/oral de por vida', type: 'acc' },
        rl: 'NO: Sin cambio en la concentración urinaria',
        right: { t: 'Diabetes Insípida Nefrogénica (Resistencia Renal)', s: 'Túbulo colector insensible a ADH (Uso de LITIO, hipercalcemia) · Tx: Hidroclorotiazida + Amilorida', type: 'warn' },
      },
    ]),
    contexto: 'La hipernatremia traduce siempre un estado de hipertonicidad plasmática e hiperosmolaridad que refleja un déficit absoluto de agua libre respecto al contenido de sodio corporal. En condiciones normales, una elevación de tan solo 1 a 2% en la osmolaridad plasmática desencadena una sed imperiosa y liberación hipotalámica masiva de ADH; por ello, la hipernatremia sostenida ocurre casi exclusivamente en pacientes con incapacidad para acceder al agua por sí mismos (ancianos postrados, pacientes intubados, lactantes) o en trastornos de poliuria masiva como la Diabetes Insípida.',
    contentSections: [
      {
        subhead: '1. Fisiopatología y Cálculo del Déficit de Agua Libre',
        paragraphs: [
          'El sodio es el principal determinante osmótico del espacio extracelular. Una natremia <strong>> 145 mEq/L</strong> deshidrata intracelularmente las neuronas por gradiente osmótico, produciendo retracción de la masa encefálica con riesgo de <strong>desgarro de venas puente durales y hemorragia subaracnoidea o subdural</strong>.',
          'El cálculo del <strong>Déficit de Agua Libre (DAL)</strong> se realiza con la fórmula: $DAL = Agua\\ Corporal\\ Total \\times ([Na]_{actual} / 140 - 1)$, donde $ACT = 0.6 \\times peso$ en varones y $0.5 \\times peso$ en mujeres. Este volumen calculado de agua libre faltante debe reponerse progresivamente en 48 a 72 horas, vigilando que la velocidad de descenso del sodio <strong>NO exceda los 10 a 12 mEq/L en 24 horas</strong> para evitar la complicación opuesta: el <strong>edema cerebral iatrogénico</strong>.',
        ],
      },
      {
        subhead: '2. Diabetes Insípida: Central vs Nefrogénica',
        paragraphs: [
          'La <strong>Diabetes Insípida (DI)</strong> se manifiesta por poliuria de gran volumen (> 3 a 10 litros/día de orina diluida, $Osm_u < 300\\text{ mOsm/kg}$, densidad < 1.005) asociada a polidipsia compensatoria. La distinción etiológica se establece con la <strong>prueba terapéutica con Desmopresina (DDAVP)</strong> administrada por vía subcutánea o intranasal:',
          '(1) <strong>DI Central (Neurogénica):</strong> déficit en la síntesis o liberación hipofisiaria posterior de vasopresina secundaria a traumatismo craneoencefálico, cirugía selar, hipofisitis o idiopática. Tras administrar DDAVP, la <strong>osmolaridad urinaria aumenta en más del 50%</strong> (frecuentemente > 100%) y el débito urinario se normaliza drásticamente. Tratamiento: <strong>Desmopresina exógena (oral o intranasal)</strong>.',
          '(2) <strong>DI Nefrogénica:</strong> incapacidad del túbulo colector renal para responder a concentraciones normales o elevadas de ADH. La causa farmacológica más frecuente y emblemática en el EUNACOM es el <strong>consumo crónico de carbonato de litio</strong> (que bloquea los canales de acuaporina-2 al inhibir la GSK-3beta), seguido de la hipercalcemia severa y la hipokalemia crónica. Tras la prueba de DDAVP, la orina <strong>permanece diluida (sin aumento de $Osm_u$)</strong>. Tratamiento: suspender el litio si es posible, dieta hiposódica e indicación paradójica de <strong>Hidroclorotiazida asociada a Amilorida</strong> (que bloquea la entrada de litio por el canal ENaC en el túbulo colector).',
        ],
      },
    ],
    table: {
      title: 'Diagnóstico Diferencial y Manejo de la Poliuria Hipotónica',
      headers: ['Entidad Clínica', 'Osmolaridad Urinaria Basal', 'Respuesta a Desmopresina (DDAVP)', 'Tratamiento de Elección'],
      rows: [
        ['Diabetes Insípida Central', '< 300 mOsm/kg (diluida)', '↑ > 50% a 100% de Osmu (respuesta excelente)', 'Desmopresina (DDAVP) oral o intranasal'],
        ['Diabetes Insípida Nefrogénica (Litio)', '< 300 mOsm/kg (diluida)', 'Sin cambios o ↑ < 10% (resistencia tubular)', 'Suspender litio · Hidroclorotiazida + Amilorida'],
        ['Polidipsia Psicógena (Potomanía)', '< 100 mOsm/kg (máxima dilución)', 'Normaliza concentración con privación de agua', 'Restricción voluntaria de ingesta hídrica oral'],
      ],
    },
    vignette: 'Hombre de 26 años con trastorno bipolar en tratamiento desde hace 2 años con Carbonato de Litio 900 mg/día y Lamotrigina 100 mg/día. Consulta por sed insaciable con necesidad constante de beber agua de día y de noche, y nicturia que interrumpe su descanso cada hora. En las últimas 24 horas recolectó un volumen urinario medido de 11.500 mL. Al examen físico: mucosas secas, PA 115/70 mmHg, FC 84 lpm. Laboratorio: Glicemia 82 mg/dL, Sodio plasmático 154 mEq/L, Potasio 4.3 mEq/L, Creatinina 0.8 mg/dL, Osmolaridad plasmática 318 mOsm/kg. Densidad urinaria 1.002, Osmolaridad urinaria 95 mOsm/kg. Se administra una dosis de prueba de 2 mcg de Desmopresina subcutánea, repitiéndose la osmolaridad urinaria a las 2 horas, la cual resulta en 105 mOsm/kg (sin variación significativa).',
    explicacion: 'El cuadro corresponde a una Diabetes Insípida Nefrogénica inducida por Carbonato de Litio. El litio ingresa a las células principales del túbulo colector a través del canal epitelial de sodio (ENaC) e interfiere con la cascada de señalización intracelular del receptor V2, impidiendo la fosforilación y translocación de las acuaporinas-2 hacia la membrana luminal. Esto vuelve al riñón insensible a la vasopresina circulante. La ausencia de respuesta a la prueba de desmopresina exógena confirma la resistencia tubular periférica (nefrogénica) y descarta la DI central. El tratamiento médico de elección consiste en suspender o ajustar el litio (con psiquiatría) y administrar diuréticos tiazídicos combinados con Amilorida.',
    keyPoints: [
      'Hipernatremia (> 145 mEq/L) traduce déficit de agua libre e hiperosmolaridad plasmática obligada.',
      'Velocidad de descenso de la natremia: máximo 10 a 12 mEq/L en 24 horas para prevenir edema cerebral agudo.',
      'Fórmula de déficit de agua libre: DAL = ACT x (Nap / 140 - 1), reponer con agua libre vía enteral o SG 5% intravenoso.',
      'Diabetes insípida: poliuria hipotónica masiva (> 3 a 10 L/día) con osmolaridad urinaria baja (< 300 mOsm/kg).',
      'Prueba de Desmopresina (DDAVP): si la osmolaridad urinaria sube > 50%, el diagnóstico es DI Central; si no cambia, es DI Nefrogénica.',
      'Causa farmacológica emblemática de DI Nefrogénica en EUNACOM: Carbonato de Litio en pacientes bipolares.',
      'Tratamiento de DI Nefrogénica por litio: Hidroclorotiazida (genera hipovolemia leve que estimula reabsorción proximal de agua) + Amilorida (bloquea canal ENaC impidiendo entrada de litio).',
    ],
    questions: [
      {
        stem: 'Mujer de 28 años con antecedente de trastorno afectivo bipolar en tratamiento regular con carbonato de litio consulta por cuadro de varias semanas de polidipsia intensa y poliuria con volúmenes urinarios cercanos a 12 litros al día. Laboratorio muestra: Sodio plasmático 152 mEq/L, Glicemia 84 mg/dL, Osmolaridad urinaria 110 mOsm/kg. ¿Cuál es el mecanismo fisiopatológico primario causante de su poliuria?',
        options: [
          { id: 'A', text: 'Diuresis osmótica inducida por hiperglicemia y glucosuria' },
          { id: 'B', text: 'Resistencia del túbulo colector renal a la acción de la hormona antidiurética (diabetes insípida nefrogénica)' },
          { id: 'C', text: 'Inhibición de la secreción de vasopresina a nivel hipotalámico por el litio' },
          { id: 'D', text: 'Polidipsia primaria con supresión fisiológica total de la ADH' },
          { id: 'E', text: 'Destrucción necrótica de los túbulos proximales por toxicidad farmacológica' },
        ],
        correcta: 'B',
        explicacion: 'El uso crónico de sales de litio es la causa adquirida más frecuente de Diabetes Insípida Nefrogénica en la práctica médica y en el examen EUNACOM. El litio penetra a las células principales del túbulo colector renal a través del canal apical de sodio sensible a amilorida (ENaC) e inhibe la adenilil ciclasa y la glucógeno sintetasa kinasa 3-beta (GSK3b), bloqueando la expresión y el tráfico de acuaporinas-2 hacia la membrana apical. Esto vuelve al epitelio tubular impermeable al agua a pesar de niveles plasmáticos normales o elevados de ADH.',
        recTag: 'EUNACOM Diciembre 2015 · Reconstrucción oficial',
      },
      {
        stem: 'Hombre de 22 años sufre traumatismo encéfalo-craneano cerrado con fractura de la base del cráneo en accidente de tránsito. Al tercer día de hospitalización en UCI, presenta bruscamente poliuria de 600 mL/hora durante 4 horas consecutivas. Exámenes: Sodio sérico 150 mEq/L, Osmolaridad urinaria 140 mOsm/kg. Se sospecha diabetes insípida de origen central. ¿Cuál es la prueba diagnóstica y terapéutica inicial de elección para confirmar la sospecha?',
        options: [
          { id: 'A', text: 'Prueba de deshidratación o privación de agua durante 12 horas' },
          { id: 'B', text: 'Administración de una dosis de prueba de Desmopresina (DDAVP) y medición seriada de osmolaridad urinaria' },
          { id: 'C', text: 'Resonancia nuclear magnética de silla turca con gadolinio' },
          { id: 'D', text: 'Medición de niveles séricos de vasopresina basal y post estímulo con suero salino hipertónico' },
          { id: 'E', text: 'Biopsia de glándula hipofisiaria guiada por estereotaxia' },
        ],
        correcta: 'B',
        explicacion: 'En un paciente con hipernatremia ya establecida (Na 150 mEq/L) y poliuria hipotónica en contexto de trauma selar o base de cráneo, la prueba de privación de agua está contraindicada por el riesgo de shock y deshidratación letal. El examen indicado es la administración de una dosis de prueba de Desmopresina (DDAVP, 1 a 2 mcg SC o 10 mcg intranasal). Si la osmolaridad urinaria aumenta en más de un 50% a 100% y el volumen urinario desciende drásticamente, se confirma de forma inmediata la Diabetes Insípida Central por déficit de ADH endógena.',
        recTag: 'EUNACOM Julio 2021 · Reconstrucción oficial',
      },
    ],
  },

  /* ───────────────────────── 🟢 TIER 1 (2 PÁGINAS) ───────────────────────── */
  {
    id: 'nefro-08', classId: 'nefro-08', tier: 1,
    blockNum: 2, blockName: 'Trastornos del Sodio y del Agua (Disnatremias)',
    topicLabel: '2.4', title: 'Fluidoterapia y Terapia Diurética en la Práctica Clínica',
    perfilCode: '1.09.2.008, 1.09.1.020, 1.09.3.009', dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Sin garantía GES específica',
    reconstrucciones: 'EUNACOM Julio 2017 (Q#88) · EUNACOM Diciembre 2019 (Q#12)',
    frecuencia: 'Media en EUNACOM · Selección de fluidos en shock hipovolémico vs deshidratación y uso de diuréticos de asa',
    svg: null, algoTitle: 'Algoritmo de Selección de Cristaloides y Diuréticos',
    diagram: flow('Selección Racional de Fluidos Intravenosos y Diuréticos', [
      { t: 'Evaluación del Estado Hemodinámico y Volemia Intravascular', s: 'Determinar si la prioridad es Reanimación hemodinámica (Shock) o Reposición hidroelectrolítica', type: 'warn' },
      { k: 'split', q: '¿Presenta Inestabilidad Hemodinámica (Hipotensión, Hipoperfusión, Shock)?',
        ll: 'SÍ: Shock / Hipovolemia Aguda Severa',
        left: { t: 'Cristaloides Isotónicos: SF 0.9% o Ringer Lactato', s: 'Bolos de 500 a 1000 mL en 30–60 min · Prioridad absoluta es restaurar PAM ≥ 65 mmHg y perfusión tisular', type: 'acc' },
        rl: 'NO: Hipervolemia con Congestión Pulmonar / Periférica',
        right: { t: 'Diuréticos de Asa: Furosemida Intravenosa', s: 'Inhibición de cotransportador Na-K-2Cl · Dosis escalonadas según función renal para descongestión rápida', type: 'dec' },
      },
    ]),
    contexto: 'La fluidoterapia intravenosa debe ser prescrita como cualquier otro fármaco: considerando su composición electrolítica, tonicidad, pH e indicaciones fisiopatológicas específicas. En el shock hipovolémico o deshidratación grave, la prioridad es restaurar el volumen intravascular eficaz con cristaloides isotónicos balanceados; los sueros hipotónicos como el glucosado al 5% distribuyen dos tercios de su volumen en el espacio intracelular, siendo inefectivos para rescatar la hemodinamia. Por otra parte, la terapia diurética requiere seleccionar el fármaco según la tasa de filtración glomerular del paciente.',
    contentSections: [
      {
        subhead: '1. Composición y Selección de Cristaloides Intravenosos',
        paragraphs: [
          'Los cristaloides isotónicos de uso masivo son el <strong>Suero Fisiológico al 0.9% (NaCl 0.9%)</strong> y las soluciones balanceadas como <strong>Ringer Lactato</strong>. El NaCl 0.9% contiene <strong>154 mEq/L de Sodio y 154 mEq/L de Cloro</strong> (osmolaridad 308 mOsm/L); la infusión de grandes volúmenes de SF 0.9% genera <strong>Acidosis Metabólica Hiperclorémica con Anion Gap Normal</strong> y vasoconstricción de la arteriola renal aferente por exceso de cloro.',
          'El <strong>Ringer Lactato</strong> es más fisiológico: aporta 130 mEq/L de Na, 109 mEq/L de Cl, 4 mEq/L de K, 3 mEq/L de Ca y 28 mEq/L de lactato (buffer que se metaboliza a bicarbonato en el hígado). Es la solución de elección en reanimación de shock distributivo/séptico y en deshidratación severa.',
        ],
      },
      {
        subhead: '2. Farmacología y Uso Clínico de Diuréticos',
        paragraphs: [
          '<strong>Diuréticos de Asa (Furosemida, Torsemida):</strong> Actúan en la porción gruesa del asa ascendente de Henle inhibiendo el cotransportador $Na^+-K^+-2Cl^-$. Tienen gran eficacia natriurética (excretan hasta el 20–25% del sodio filtrado). <strong>Siguen siendo efectivos incluso con TFG muy disminuida (< 30 mL/min)</strong>. Efectos adversos: hipokalemia, hipomagnesemia, alcalosis metabólica e hiperuricemia.',
          '<strong>Tiazidas (Hidroclorotiazida, Clortalidona):</strong> Bloquean el cotransportador $Na^+-Cl^-$ en el túbulo contorneado distal. Son fármacos antihipertensivos de primera línea pero <strong>pierden su eficacia diurética cuando la TFG cae bajo 30 mL/min</strong>. Efectos adversos: hiponatremia grave, hipokalemia, hipercalcemia e hiperglicemia.',
        ],
      },
    ],
    table: {
      title: 'Comparación de Soluciones Intravenosas de Cristaloides',
      headers: ['Solución', 'Sodio (mEq/L)', 'Cloro (mEq/L)', 'Potasio (mEq/L)', 'Buffer / Osmolaridad', 'Indicación Clínica Principal'],
      rows: [
        ['Suero Fisiológico 0.9%', '154', '154', '0', 'Ninguno / 308 mOsm/L', 'Resucitación hemodinámica, alcalosis hipoclorémica'],
        ['Ringer Lactato', '130', '109', '4', 'Lactato 28 mEq/L / 273 mOsm/L', 'Shock séptico, deshidratación, cetoacidosis'],
        ['Suero Glucosado 5%', '0', '0', '0', 'Glucosa 50 g/L / 278 mOsm/L', 'Aporte de agua libre en hipernatremia, hipoglicemia'],
        ['Solución Salina 3%', '513', '513', '0', 'Ninguno / 1026 mOsm/L', 'Hiponatremia sintomática grave con edema cerebral'],
      ],
    },
    vignette: 'Mujer de 78 años con antecedentes de hipertensión arterial tratada con hidroclorotiazida consulta por diarrea profusa y vómitos de 3 días de evolución. Ingresa en sopor profundo, PA 80/50 mmHg, FC 125 lpm, turgencia cutánea severamente disminuida y mucosas secas. Laboratorio: Natremia 156 mEq/L, Cloremia 116 mEq/L, Potasemia 3.1 mEq/L, Creatinina 2.6 mg/dL, Bicarbonato 15 mEq/L.',
    explicacion: 'La paciente presenta una deshidratación hipertónica severa con shock hipovolémico evidente (hipotensión arterial severa, taquicardia y compromiso de conciencia). Aunque existe hipernatremia, la prioridad fisiopatológica inicial y absoluta en todo paciente inestable con shock es RESTAURAR LA VOLEMIA EFECTIVA Y LA PERFUSIÓN TISULAR. El fluido de rescate inicial obligado son los cristaloides isotónicos (Suero Fisiológico al 0.9% o Ringer Lactato). Infundir suero glucosado al 5% o agua pura en este momento no expande el espacio intravascular y agravaría el colapso hemodinámico.',
    keyPoints: [
      'En shock hipovolémico o deshidratación con inestabilidad hemodinámica, la prioridad es expandir el intravascular con cristaloides isotónicos (SF 0.9% o Ringer Lactato).',
      'El Suero Glucosado 5% NO sirve para reanimar shock: el 67% del volumen pasa al espacio intracelular y solo un 8% permanece en el intravascular.',
      'La infusión masiva de Suero Fisiológico al 0.9% produce acidosis metabólica hiperclorémica con anion gap normal por exceso de cloro.',
      'Furosemida es el diurético de elección en sobrecarga de volumen y edemas; mantiene su eficacia con TFG < 30 mL/min.',
      'Las tiazidas (hidroclorotiazida, clortalidona) pierden potencia diurética con TFG < 30 mL/min: en ERC avanzada para el edema se debe usar furosemida.',
      'Efectos adversos de tiazidas: hiponatremia, hipokalemia, hiperuricemia, hipercalcemia e hiperglicemia.',
    ],
    questions: [
      {
        stem: 'Hombre de 75 años con antecedente de insuficiencia renal crónica con TFG estimada de 24 mL/min (Creatinina 2.4 mg/dL) e insuficiencia cardíaca compensada consulta por aumento progresivo de edema en extremidades inferiores hasta rodillas y ortopnea de 2 almohadas. ¿Cuál es el diurético de elección para lograr la descongestión y balance negativo en este paciente?',
        options: [
          { id: 'A', text: 'Hidroclorotiazida' },
          { id: 'B', text: 'Clortalidona' },
          { id: 'C', text: 'Furosemida' },
          { id: 'D', text: 'Indapamida' },
          { id: 'E', text: 'Espironolactona en monoterapia' },
        ],
        correcta: 'C',
        explicacion: 'En pacientes con insuficiencia renal crónica avanzada con TFG < 30 mL/min, los diuréticos tiazídicos (hidroclorotiazida, clortalidona e indapamida) pierden su potencia farmacológica al no alcanzar concentraciones tubulares luminales suficientes en el túbulo distal. En este rango de falla renal, los diuréticos de asa como la Furosemida son los únicos fármacos de primera línea capaces de inducir una natriuresis potente y efectiva para revertir la sobrecarga hídrica, requiriendo frecuentemente dosis más elevadas para compensar la menor carga filtrada.',
        recTag: 'EUNACOM Julio 2017 · Reconstrucción oficial',
      },
      {
        stem: 'Mujer de 78 años con hipertensión arterial en tratamiento con hidroclorotiazida presenta 4 días de diarrea aguda abundante. Al ingreso: soporosa, PA 75/45 mmHg, FC 120 lpm, llene capilar de 4 segundos. Laboratorio de urgencia: Sodio plasmático 156 mEq/L, Potasio 3.2 mEq/L, Creatinina 2.8 mg/dL. ¿Cuál de los siguientes fluidos intravenosos debe administrarse en primer lugar?',
        options: [
          { id: 'A', text: 'Suero Glucosado al 5% a 500 mL/hora' },
          { id: 'B', text: 'Suero Fisiológico al 0.9% en bolo inicial' },
          { id: 'C', text: 'Solución salina al 3%' },
          { id: 'D', text: 'Agua destilada por vía venosa periférica' },
          { id: 'E', text: 'Solución de bicarbonato 2/3 molar' },
        ],
        correcta: 'B',
        explicacion: 'En la medicina de urgencia existe una regla fisiopatológica inquebrantable: "Frente a un paciente en shock hipovolémico, la prioridad inicial absoluta es restaurar el volumen circulante eficaz y la perfusión orgánica con cristaloides isotónicos, independientemente de la cifra de sodio sérico". Administrar suero glucosado al 5% distribuiría el 92% del volumen administrado fuera del lecho vascular, perpetuando el shock, la isquemia renal y coronaria. Una vez estabilizada la presión arterial media (PAM ≥ 65 mmHg) con SF 0.9% o Ringer Lactato, se procederá a calcular el déficit de agua libre y corregir la hipernatremia lentamente con soluciones hipotónicas.',
        recTag: 'EUNACOM Diciembre 2019 · Reconstrucción oficial',
      },
    ],
  },
];

module.exports = { bloque2 };
