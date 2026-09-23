/**
 * TOMO 15 · OFTALMOLOGÍA — BLOQUE 01: Síndrome de Ojo Rojo & Superficie Ocular
 * Clases 15.1 a 15.5 · Editorial EUNACOM 2026 · Color #0e7490
 */

function flow(title, rows, customColor = '#0e7490') {
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
    .acc{fill:var(--acc, ${customColor})}.accT{fill:#fff}.accS{font-size:8px;fill:#eafdf3}
    .dec{fill:var(--acc-t, #e0f2fe);stroke:var(--acc-p, ${customColor});stroke-width:1}
    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}
    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar)}
  </style>
  ${P.join('\n  ')}
</svg>`;
  return { title, svg };
}

const bloque1 = [
  {
    id: 'oftal-01',
    classId: 'oftal-01',
    tier: 3,
    blockNum: 1,
    blockName: 'Síndrome de Ojo Rojo & Superficie Ocular',
    topicLabel: '15.1',
    title: 'Enfrentamiento Clínico del Ojo Rojo: Superficial vs Profundo',
    perfilCode: '2.01.1.097',
    dx: 'Sospecha', tx: 'Inicial', seg: 'Derivar',
    ges: 'Sin garantía GES específica · Guía de Urgencia Oftalmológica APS',
    reconstrucciones: null,
    frecuencia: 'Máxima rentabilidad · Reconocimiento de los 5 signos de alarma de ojo rojo grave',
    diagram: flow('Algoritmo de Triage y Enfrentamiento del Síndrome de Ojo Rojo', [
      { t: 'Paciente con Ojo Rojo en Atención Primaria de Urgencia', s: 'Evaluar anamnesis, agudeza visual monocular, dolor, reactividad pupilar e inyección' },
      { k: 'split', q: '¿Presenta Signos de Alarma: Dolor Severo, Baja de AV, Miosis/Midriasis o Hipopión?', s: 'Bifurcación clínica crítica: Ojo Rojo Superficial vs Ojo Rojo Profundo', ll: 'Sin signos de alarma · Inyección periférica', rl: 'Con signos de alarma · Inyección periquerática',
        left: { t: 'Ojo Rojo Superficial (Conjuntivitis / Hiposfagma)', s: 'Secreción, sensación de cuerpo extraño, AV normal · Manejo médico en APS sin derivación urgente', type: 'acc' },
        right: { t: 'Ojo Rojo Profundo (Uveítis, Glaucoma Agudo, Queratitis)', s: 'Dolor ciliar intenso, inyección periquerática violácea · DERIVACIÓN URGENTE A OFTALMOLOGÍA', type: 'warn' },
        ll: 'ojo rojo superficial', rl: 'ojo rojo profundo' },
      { t: 'Conducta Inmediata según Clasificación', s: 'Superficial: colirios tópicos según etiología · Profundo: analgesia, hipotensores si procede y traslado inmediato', type: 'dec', al: 'triage clínico', from: 'right' },
    ]),
    contexto: 'El ojo rojo es uno de los motivos de consulta más frecuentes en urgencias y APS. El objetivo primordial del médico general no es diagnosticar sutilezas de la lámpara de hendidura, sino discriminar de inmediato entre un cuadro superficial benigno y un cuadro profundo que compromete la visión y exige derivación de urgencia al oftalmólogo.',
    contentSections: [
      {
        subhead: '1. Anatomía Vascular y Semiología de la Inyección Ocular',
        paragraphs: [
          'La circulación ocular superficial y profunda definen los dos patrones de enrojecimiento cardinales:<br>' +
          '• <strong>Inyección Conjuntival (Superficial):</strong> Dilatación de los vasos conjuntivales posteriores. Se caracteriza por un color rojo brillante, máximo en los fondos de saco y periferia, que <strong>disminuye hacia el limbo esclerocorneal</strong>. Los vasos son móviles sobre la esclera y se blanquean rápidamente con vasoconstrictores tópicos (fenilefrina al 2.5%). Típica de conjuntivitis y blefaritis.<br>' +
          '• <strong>Inyección Ciliar o Periquerática (Profunda):</strong> Dilatación de las arterias ciliares anteriores profundas. Se observa como un <strong>halo violáceo o rojo oscuro periquerático inmediato a la córnea</strong>. Los vasos no se desplazan al mover la conjuntiva y <strong>no se blanquean con fenilefrina</strong>. Es el sello de patología intraocular grave: queratitis, uveítis anterior y glaucoma agudo.',
        ],
      },
      {
        subhead: '2. Los Cinco Signos de Alarma de Ojo Rojo Grave',
        paragraphs: [
          'La presencia de cualquiera de los siguientes 5 signos clínicos excluye el diagnóstico de conjuntivitis y obliga a la <strong>derivación urgente e inmediata a oftalmología</strong>:<br>' +
          '1. <strong>Disminución de la Agudeza Visual:</strong> Ninguna conjuntivitis no complicada reduce la visión más allá de visión borrosa transitoria por lágrimas/secreción que aclara al parpadear.<br>' +
          '2. <strong>Dolor Ocular Real (Dolor Ciliar/Profundo):</strong> El ojo superficial tiene ardor, quemazón o sensación de arenilla; el dolor sordo, terebrante o lancinante indica compromiso corneal, uveal o hipertensión ocular.<br>' +
          '3. <strong>Alteraciones Pupilares:</strong> Miosis unilateral hiporreactiva (uveítis anterior) o midriasis media paralítica y arreactiva (glaucoma agudo).<br>' +
          '4. <strong>Pérdida de Transparencia Corneal / Defecto Epitelial:</strong> Edema corneal en vidrio deslustrado o tinción positiva con fluoresceína bajo luz azul de cobalto.<br>' +
          '5. <strong>Cámara Anterior Anormal:</strong> Presencia de nivel de pus (hipopión), nivel hemático (hipema) o cámara muy estrecha/plana.',
        ],
      },
      {
        subhead: '3. Diagnóstico Diferencial de las Etiologías Mayores',
        paragraphs: [
          '• <strong>Glaucoma Agudo de Ángulo Cerrado:</strong> Cefalea hemicraneana brutal, náuseas, vómitos, midriasis media fija, PIO > 50 mmHg, ojo pétreo a la palpación.<br>' +
          '• <strong>Uveítis Anterior Aguda (Iridociclitis):</strong> Dolor ocular moderado, fotofobia consensual intensa, miosis hiporreactiva, células inflamatorias en cámara anterior (fenómeno de Tyndall).<br>' +
          '• <strong>Queratitis y Úlcera Corneal:</strong> Dolor punzante, blefarospasmo, fotofobia severa, tinción corneal con fluoresceína positiva.<br>' +
          '• <strong>Endoftalmitis Aguda:</strong> Ojo rojo doloroso postquirúrgico (catarata previa) o postraumático con hipopión y pérdida visual masiva. Emergencia quirúrgica máxima.',
        ],
      },
      {
        subhead: '4. Hiposfagma (Hemorragia Subconjuntival)',
        paragraphs: [
          'Es la acumulación de sangre en el espacio subconjuntival por rotura de un capilar conjuntival. Se presenta como una <strong>mancha roja intensa, homogénea, bien delimitada, indolora y sin secreción</strong>.<br>' +
          'La agudeza visual y los reflejos pupilares son estrictamente normales. Suele ser idiopática o desencadenada por maniobras de Valsalva (tos, vómito, esfuerzo físico) o traumatismo mínimo.<br>' +
          '<strong>Conducta en APS:</strong> Tranquilizar al paciente, controlar la presión arterial sistémica y observar. No requiere colirios antibióticos ni corticoides; se reabsorbe espontáneamente en 10 a 14 días sin secuelas.',
        ],
      },
    ],
    table: {
      title: 'Diagnóstico Diferencial del Ojo Rojo según Localización y Signos Clínicos',
      headers: ['Característica', 'Conjuntivitis', 'Uveítis Anterior', 'Glaucoma Agudo', 'Queratitis'],
      rows: [
        ['Inyección', 'Conjuntival periférica', 'Ciliar / Periquerática', 'Mixta / Periquerática intensa', 'Ciliar / Periquerática'],
        ['Dolor ocular', 'Ausente (solo prurito/arenilla)', 'Moderado a severo', 'Lancinante, muy severo', 'Intenso + Blefarospasmo'],
        ['Agudeza visual', 'Normal', 'Disminución leve-moderada', 'Disminución severa', 'Disminución variable'],
        ['Pupila', 'Normal, reactiva', 'Miosis hiporreactiva', 'Midriasis media fija', 'Normal o miosis refleja'],
        ['Córnea', 'Transparente', 'Transparente (precipitados retro)', 'Opaca / Vidrio esmerilado', 'Infiltrado / Úlcera fluo+'],
        ['Secreción', 'Mucopurulenta o serosa', 'Acuosa / Sin secreción', 'Acuosa / Sin secreción', 'Acuosa a purulenta'],
      ],
    },
    severityTable: {
      title: 'Criterios de Ojo Rojo Grave vs Leve / Benigno en Urgencias APS',
      headers: ['Parámetro', 'Ojo Rojo Benigno (Superficial)', 'Ojo Rojo Grave (Profundo)', 'Acción Médica Requerida'],
      rows: [
        ['Agudeza visual', 'Conservada (20/20 a 20/30)', 'Disminuida (< 20/50 o dedos)', 'Derivación urgente si disminuye'],
        ['Reactividad pupilar', 'Isocóricas y fotorreactivas', 'Asimétrica, miosis o midriasis', 'Sospecha de uveítis o glaucoma'],
        ['Tinción fluoresceína', 'Negativa (epitelio intacto)', 'Positiva (dendritas, úlceras)', 'Prohibir corticoides; derivar'],
        ['Palpación ocular', 'Normotenso y blando', 'Pétreo / Duro como piedra', 'Glaucoma agudo: hipotensores'],
        ['Cámara anterior', 'Transparente, sin celularidad', 'Hipopión / Hipema / Tyndall', 'Derivación oftalmológica en <2h'],
      ],
    },
    treatmentTable: {
      title: 'Protocolo de Manejo y Triage de Ojo Rojo en Atención Primaria',
      headers: ['Entidad Sospechada', 'Manejo Inicial en APS', 'Contraindicación Absoluta', 'Plazo de Derivación'],
      rows: [
        ['Conjuntivitis bacteriana', 'Aseo + Cloranfenicol colirio 0.5% c/4h por 7 días', 'Uso de corticoides tópicos', 'No deriva; control en 48-72h'],
        ['Queratitis / Úlcera corneal', 'Ciclopléjico colirio + parche suave transitorio', 'CORTICOIDES TÓPICOS', 'Urgente en el mismo día'],
        ['Glaucoma agudo de ángulo cerrado', 'Manitol 15-20% EV + Acetazolamida 500mg VO + Timolol', 'Midriáticos (atropina/tropicamida)', 'EMERGENCIA INMEDIATA'],
        ['Uveítis anterior aguda', 'Analgesia oral + Ciclopléjico para evitar sinequias', 'Mióticos / Pilocarpina', 'Urgente dentro de 24 horas'],
      ],
    },
    vignette: 'Hombre de 38 años consulta en SAPU por ojo derecho rojo y muy doloroso de 6 horas de evolución. Refiere fotofobia intensa y visión borrosa en dicho ojo. Al examen físico: agudeza visual OD 20/80 (OI 20/20). Se observa inyección periquerática violácea marcada, pupila derecha en miosis de 2 mm poco reactiva a la luz y córnea con transparencia conservada sin tinciones.',
    explicacion: 'El cuadro presenta signos de alarma inequívocos de ojo rojo profundo: dolor ocular real, disminución significativa de la agudeza visual, inyección periquerática y pupila en miosis unilateral hiporreactiva. Esta combinación es diagnóstica de Uveítis Anterior Aguda (iridociclitis). La conducta obligatoria del médico general es derivar de urgencia al oftalmólogo para examen en lámpara de hendidura (confirmación de Tyndall) e inicio de corticoterapia tópica y midriáticos; está estrictamente prohibido dar de alta con antibióticos o lubricantes.',
    keyPoints: [
      'Ojo rojo profundo = inyección ciliar/periquerática violácea, dolor ocular sordo y disminución de agudeza visual.',
      'Ojo rojo superficial = inyección conjuntival periférica, secreción, sensación de arenilla y agudeza visual normal.',
      'Los 5 signos de alarma obligan a derivación urgente: baja de AV, dolor ocular real, alteración pupilar, hipopión/hipema y córnea opaca/fluo+.',
      'La miosis hiporreactiva orienta a uveítis anterior; la midriasis media fija orienta a glaucoma agudo.',
      'El hiposfagma es indoloro, no afecta la visión y no requiere tratamiento farmacológico: se resuelve solo en 2 semanas.',
      'JAMÁS indicar corticoides tópicos en un ojo rojo sin diagnóstico oftalmológico previo; pueden agravar úlceras y perforar la córnea.',
    ],
    questions: [
      {
        stem: 'Un hombre de 62 años consulta en el servicio de urgencias por dolor ocular derecho intenso de inicio brusco hace 3 horas, asociado a náuseas y vómitos. Refiere ver halos de colores alrededor de las luces. Al examen: inyección periquerática severa, córnea con pérdida difusa del brillo ("en vidrio esmerilado"), pupila derecha en midriasis media fija no reactiva y consistencia ocular pétrea a la palpación digital. ¿Cuál es el diagnóstico y la conducta inmediata más adecuada?',
        options: [
          { id: 'A', text: 'Uveítis anterior aguda; indicar colirio de atropina al 1% y derivar a policlínico' },
          { id: 'B', text: 'Conjuntivitis hiperaguda; indicar ceftriaxona intramuscular y lavado con suero' },
          { id: 'C', text: 'Glaucoma agudo de ángulo cerrado; iniciar manitol endovenoso, acetazolamida oral y timolol tópico, y derivar de urgencia' },
          { id: 'D', text: 'Queratitis bacteriana severa; indicar colirios reforzados de vancomicina y oclusión' },
          { id: 'E', text: 'Desprendimiento de retina; reposo en cama en posición decúbito supino y derivar vía GES' },
        ],
        correcta: 'C',
        explicacion: 'El cuadro clínico con cefalea ocular lancinante, náuseas, halos de colores, midriasis media fija, edema corneal en vidrio deslustrado y ojo pétreo a la palpación es patognomónico de un Glaucoma Agudo de Ángulo Cerrado (cierre angular con PIO típicamente > 50-70 mmHg). Es una emergencia oftalmológica absoluta que requiere inicio inmediato de hipotensores oculares sistémicos y tópicos (manitol EV, acetazolamida oral, betabloqueador tópico como timolol) y derivación urgente para iridotomía láser. La atropina (A) está contraindicada porque dilata más la pupila y agrava el bloqueo. Perla. Midriasis media fija más dolor y ojo pétreo es siempre glaucoma agudo.',
        recTag: 'Banco Oficial AEE · Perfil V3 2.01.1.097',
      },
      {
        stem: 'Una mujer de 24 años consulta por ojo izquierdo rojo de 24 horas de evolución, asociado a sensación de arenilla y prurito leve. Al examen: agudeza visual 20/20 en ambos ojos, inyección conjuntival periférica difusa con vasos móviles que respeta el limbo esclerocorneal, secreción mucosa escasa, pupilas isocóricas y reactivas, córnea transparente. ¿Cuál es la conducta más adecuada en la atención primaria?',
        options: [
          { id: 'A', text: 'Derivar de urgencia a oftalmología en menos de 2 horas' },
          { id: 'B', text: 'Indicar colirio antibiótico (cloranfenicol al 0.5%), medidas de higiene y control ambulatorio si no mejora' },
          { id: 'C', text: 'Indicar colirio de dexametasona al 0.1% cada 4 horas por 7 días' },
          { id: 'D', text: 'Solicitar tomografía computarizada de órbita y encéfalo' },
          { id: 'E', text: 'Realizar tonometría aplanática y prueba de provocación con midriáticos' },
        ],
        correcta: 'B',
        explicacion: 'Se trata de un cuadro clásico de Ojo Rojo Superficial (conjuntivitis bacteriana o viral incipiente) sin signos de alarma: agudeza visual normal, inyección puramente periférica que respeta el limbo, pupilas normales y córnea transparente. La conducta correcta en APS es el manejo sintomático e higiénico con colirio antibiótico de amplio espectro (cloranfenicol tópico) y educación. Los corticoides (C) están contraindicados en APS sin lámpara de hendidura. No requiere derivación urgente (A) ni imágenes (D). Perla. Ojo rojo sin dolor, sin baja de visión y con pupilas normales se maneja en APS sin derivación.',
        recTag: 'Banco Oficial AEE · Perfil V3 2.01.1.097',
      },
      {
        stem: 'Un paciente de 45 años con antecedente de espondiloartritis seronegativa consulta por dolor sordo en ojo izquierdo, fotofobia intensa y lagrimeo. Al examen se constata inyección periquerática, agudeza visual OI 20/40 y pupila izquierda miótica de 2 mm que responde escasamente a la luz, a diferencia de la derecha que mide 4 mm. La tinción con fluoresceína es negativa. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Uveítis anterior aguda' },
          { id: 'B', text: 'Glaucoma agudo de ángulo cerrado' },
          { id: 'C', text: 'Úlcera corneal herpética' },
          { id: 'D', text: 'Conjuntivitis alérgica estacional' },
          { id: 'E', text: 'Epiescleritis simple' },
        ],
        correcta: 'A',
        explicacion: 'La presencia de ojo rojo profundo (inyección ciliar/periquerática), dolor ocular, fotofobia, miosis hiporreactiva unilateral y antecedente de enfermedad reumatológica (espondiloartritis asociada a HLA-B27) es la presentación arquetípica de una Uveítis Anterior Aguda (iridociclitis). La miosis se produce por espasmo del esfínter pupilar y del músculo ciliar debido a la inflamación intraocular. El glaucoma agudo (B) cursa con midriasis media fija, no miosis. La queratitis (C) tendría tinción positiva con fluoresceína. Trampa. Confundir la miosis de la uveítis con la midriasis media del glaucoma agudo es un error que invierte el tratamiento.',
        recTag: 'Banco Oficial AEE · Perfil V3 2.01.1.097',
      },
      {
        stem: 'Un hombre de 58 años despierta con una mancha roja viva en el sector nasal del ojo derecho. No refiere traumatismo, dolor, pérdida de visión ni secreción ocular. Al examen: hemorragia plana homogénea que oculta los vasos esclerales en la conjuntiva bulbar nasal, agudeza visual 20/20 bilateral, pupilas normales y córnea transparente. Presión arterial: 125/80 mmHg. ¿Cuál es la conducta indicada?',
        options: [
          { id: 'A', text: 'Indicar ácido tranexámico oral y reposo absoluto' },
          { id: 'B', text: 'Tranquilizar al paciente, explicar que se resolverá en 10-14 días y no indicar fármacos tópicos' },
          { id: 'C', text: 'Instilar colirio de fenilefrina para lograr vasoconstricción inmediata' },
          { id: 'D', text: 'Realizar paracentesis conjuntival para evacuar el hematoma' },
          { id: 'E', text: 'Derivar de inmediato para fotocoagulación láser' },
        ],
        correcta: 'B',
        explicacion: 'El cuadro corresponde a un Hiposfagma o hemorragia subconjuntival espontánea. Es una patología benigna y autolimitada, secundaria a la rotura de un capilar conjuntival frágil (frecuente tras tos, estornudo o maniobra de Valsalva nocturna). Dado que no hay dolor, la visión es normal y los reflejos pupilares están indemnes, la conducta es netamente expectante: educación, tranquilidad y control tensional si procede. Se reabsorbe espontáneamente en 1 a 2 semanas. No requiere gotas (B). Trampa. Indicar colirios antibióticos o hemostáticos en el hiposfagma es una conducta incorrecta que medicaliza un cuadro benigno.',
        recTag: 'Banco Oficial AEE · Perfil V3 2.01.1.097',
      },
    ],
  },

  {
    id: 'oftal-02',
    classId: 'oftal-02',
    tier: 2,
    blockNum: 1,
    blockName: 'Síndrome de Ojo Rojo & Superficie Ocular',
    topicLabel: '15.2',
    title: 'Conjuntivitis Infecciosas (Bacterianas, Virales) y Alérgicas',
    perfilCode: '6.02.1.005',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Sin garantía GES específica · Norma Técnica de Infecciones de Superficie Ocular',
    reconstrucciones: 'EUNACOM 2014 (Q#82) · EUNACOM Diciembre 2018 (Q#45)',
    frecuencia: 'Muy alta · Diagnóstico diferencial entre etiología bacteriana, viral y gonocócica neonatal',
    diagram: flow('Algoritmo Diagnóstico y Terapéutico de las Conjuntivitis en APS', [
      { t: 'Paciente con Ojo Rojo Superficial y Secreción Ocular', s: 'Evaluar tipo de secreción (purulenta vs acuosa), prurito, adenopatías y bilateralidad' },
      { k: 'split', q: '¿Secreción Mucopurulenta Matutina vs Prurito Dominante vs Adenopatía Preauricular?', s: 'Diferenciación etiológica entre bacteriana, alérgica y viral', ll: 'Purulenta matutina / Párpados pegados', rl: 'Acuosa con ganglio doloroso O Prurito bilateral',
        left: { t: 'Conjuntivitis Bacteriana Típica', s: 'Staphylococcus aureus / Streptococcus pneumoniae · Cloranfenicol tópico 0.5% c/4h por 7 días', type: 'acc' },
        right: { t: 'Viral (Adenovirus) vs Alérgica', s: 'Adenovirus: lavado frecuente y lágrimas · Alérgica: antihistamínicos tópicos (olopatadina 0.1%)', type: 'warn' },
        ll: 'etiología bacteriana', rl: 'etiología viral/alérgica' },
      { t: 'Alerta Especial: Conjuntivitis Hiperaguda Gonocócica', s: 'Secreción purulenta masiva continua en chorro: Ceftriaxona 1g IM/EV urgente por riesgo de perforación corneal', type: 'dec', al: 'alerta neonatal/ETS', from: 'left' },
    ]),
    contexto: 'La conjuntivitis es la causa más prevalente de ojo rojo en el mundo. El médico general debe saber tratar de forma completa las formas habituales, reconocer las altamente contagiosas por adenovirus para emitir reposo laboral/escolar, y pesquisar de inmediato la forma hiperaguda por Neisseria gonorrhoeae, que destruye la córnea en 48 horas.',
    contentSections: [
      {
        subhead: '1. Conjuntivitis Bacteriana Común e Hiperaguda',
        paragraphs: [
          '• <strong>Conjuntivitis Bacteriana Común:</strong> Producida por <em>Staphylococcus aureus</em>, <em>Streptococcus pneumoniae</em> y <em>Haemophilus influenzae</em>. Su sello clínico es la <strong>secreción mucopurulenta espesa y abundante</strong> que produce aglutinación de párpados y pestañas ("despierta con los ojos pegados"). La inyección es conjuntival difusa, sin dolor profundo ni alteración visual.<br>' +
          'Tratamiento: Limpieza de secreciones con suero fisiológico y <strong>colirio de cloranfenicol al 0.5%</strong> o ciprofloxacino cada 4 horas durante 7 días. Si no responde en 48–72 horas, derivar.<br>' +
          '• <strong>Conjuntivitis Hiperaguda Gonocócica (<em>Neisseria gonorrhoeae</em>):</strong> Típica en recién nacidos (oftalmia neonatorum a los 2-5 días de vida) o adultos jóvenes sexualmente activos. Secreción purulenta hiperabundante en chorro, quemosis severa. <strong>Riesgo crítico:</strong> El gonococo puede penetrar y perforar el epitelio corneal intacto. Tratamiento: Ceftriaxona 1 g IM/EV monodosis (en neonatos 25-50 mg/kg) + lavados continuos.',
        ],
      },
      {
        subhead: '2. Conjuntivitis Viral (Fiebre Faringoconjuntival y Queratoconjuntivitis Epidémica)',
        paragraphs: [
          'Causada fundamentalmente por <strong>Adenovirus</strong> (serotipos 8, 19 y 37). Es sumamente contagiosa por contacto mano-ojo y fómites.<br>' +
          '• <strong>Clínica cardinal:</strong> Secreción acuosa o serosa, sensación de cuerpo extraño/arenilla, hiperemia conjuntival intensa con <strong>reacción folicular en conjuntiva tarsal inferior</strong>, y el hallazgo semiológico clave: <strong>ADENOPATÍA PREAURICULAR DOLOROSA</strong> a la palpación.<br>' +
          'Frecuentemente bilateraliza al cabo de 2 a 3 días y puede asociar fiebre, odinofagia y síntomas catarrales (fiebre faringoconjuntival). Puede complicarse con infiltrados numulares subepiteliales corneales.<br>' +
          '• <strong>Tratamiento:</strong> Es netamente de soporte: compresas frías, lágrimas artificiales sin preservantes, lavado frecuente de manos y <strong>licencia médica/aislamiento por 7 a 10 días</strong> por su altísima tasa de transmisión.',
        ],
      },
      {
        subhead: '3. Conjuntivitis Alérgica (Estacional y Perenne)',
        paragraphs: [
          'Hipersensibilidad tipo I mediada por IgE y degranulación de mastocitos ante alérgenos ambientales (pólenes, ácaros, epitelio animal).<br>' +
          '• <strong>Signo cardinal indiscutible: PRURITO INTENSO Y BILATERAL</strong>. Sin prurito, el diagnóstico de alergia es muy improbable.<br>' +
          'Se acompaña de lagrimeo, edema palpebral y <strong>quemosis conjuntival</strong> (edema gelatinoso de la conjuntiva bulbar) con reacción papilar ("papilas en empedrado" en conjuntiva tarsal superior).<br>' +
          '• <strong>Tratamiento:</strong> Evitar el alérgeno, compresas frías y <strong>antihistamínicos tópicos con efecto estabilizador mastocitario</strong> (olopatadina al 0.1-0.2% colirio cada 12 horas o ketotifeno). Los corticoides tópicos se reservan exclusivamente para casos graves bajo supervisión oftalmológica.',
        ],
      },
    ],
    table: {
      title: 'Diferenciación Clínica de las Conjuntivitis más Frecuentes',
      headers: ['Criterio', 'Bacteriana Simple', 'Viral (Adenovirus)', 'Alérgica', 'Gonocócica'],
      rows: [
        ['Secreción', 'Mucopurulenta, espesa', 'Acuosa o serosa', 'Acuosa / mucosa filamentosa', 'Purulenta masiva en chorro'],
        ['Síntoma cardinal', 'Pestañas pegadas al despertar', 'Sensación arenilla + contagio', 'PRURITO intenso bilateral', 'Quemosis masiva + pus'],
        ['Adenopatía preauricular', 'Ausente', 'Presente y dolorosa (típica)', 'Ausente', 'Presente y dolorosa'],
        ['Reacción conjuntival', 'Papilar leve', 'Folicular inferior', 'Papilas en empedrado', 'Quemosis hemorrágica'],
        ['Tratamiento de elección', 'Cloranfenicol tópico 7 días', 'Sintomático + Aislamiento', 'Olopatadina colirio 0.1%', 'Ceftriaxona IM/EV urgente'],
      ],
    },
    vignette: 'Joven de 19 años consulta por ojo derecho rojo de 48 horas de evolución, que hoy comenzó en el ojo izquierdo. Refiere sensación de arenilla, lagrimeo abundante y párpados hinchados. Además, presenta tos y odinofagia leve. Al examen: inyección conjuntival bilateral difusa, secreción serosa y se palpa un nódulo doloroso de 1 cm por delante del trago auricular derecho. Agudeza visual 20/20 bilateral.',
    explicacion: 'La presencia de inyección conjuntival superficial bilateral, secreción puramente acuosa/serosa, inicio monocular con contagio al otro ojo, pródromos respiratorios altos y adenopatía preauricular dolorosa palpable es patognomónica de Conjuntivitis Viral por Adenovirus (fiebre faringoconjuntival). El manejo es estrictamente sintomático con lágrimas artificiales, compresas frías y medidas rigurosas de aislamiento y lavado de manos; no se deben indicar antibióticos tópicos ni corticoides.',
    keyPoints: [
      'Conjuntivitis bacteriana = secreción purulenta matutina con pestañas aglutinadas; responde a cloranfenicol colirio.',
      'Conjuntivitis viral (Adenovirus) = secreción acuosa + folículos + adenopatía preauricular dolorosa; altamente contagiosa.',
      'Conjuntivitis alérgica = PRURITO intenso y bilateral; responde a antihistamínicos tópicos (olopatadina).',
      'La conjuntivitis hiperaguda por gonococo genera pus abundante en chorro y perfora la córnea: requiere Ceftriaxona IM/EV.',
      'En ninguna conjuntivitis está justificado el uso de corticoides tópicos en atención primaria.',
    ],
    questions: [
      {
        stem: 'Un escolar de 8 años es traído por su madre por presentar prurito ocular bilateral intenso de 1 mes de evolución, que empeora en primavera, asociado a lagrimeo y frotamiento constante de los ojos. Al examen se observa hiperemia conjuntival bilateral moderada y en la eversión del párpado superior se aprecian múltiples papilas poligonales hipertróficas dispuestas en empedrado. La agudeza visual es 20/20 bilateral. ¿Cuál es el tratamiento de primera línea más adecuado?',
        options: [
          { id: 'A', text: 'Ciprofloxacino colirio al 0.3% cada 4 horas por 10 días' },
          { id: 'B', text: 'Olopatadina colirio al 0.1% cada 12 horas y compresas frías' },
          { id: 'C', text: 'Acetato de prednisolona colirio al 1% cada 2 horas por 1 mes' },
          { id: 'D', text: 'Aciclovir ungüento oftálmico 5 veces al día' },
          { id: 'E', text: 'Oclusión ocular bilateral estricta por 72 horas' },
        ],
        correcta: 'B',
        explicacion: 'El cuadro de prurito ocular bilateral estacional recidivante con papilas gigantes en empedrado en el tarso superior corresponde a una conjuntivitis alérgica (o queratoconjuntivitis primaveral). El tratamiento de primera línea de elección son los antihistamínicos tópicos con acción dual de estabilización mastocitaria, como la olopatadina al 0.1% o ketotifeno colirio, asociados a compresas frías. Los antibióticos (A) no tienen rol en alergia. Los corticoides tópicos (C) pueden inducir glaucoma o catarata y están contraindicados como automedicación o primera línea sin especialista. Perla. Prurito ocular bilateral intenso es sinónimo de conjuntivitis alérgica.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.005',
      },
      {
        stem: 'Un recién nacido de 4 días de vida es llevado a urgencias por presentar abundante secreción purulenta espesa que brota a presión de ambos ojos, con marcado edema palpebral y quemosis conjuntival. La tinción de Gram de la secreción muestra diplococos gramnegativos intracelulares. ¿Cuál es la conducta terapéutica de urgencia obligatoria?',
        options: [
          { id: 'A', text: 'Iniciar eritromicina oral y colirio de sulfacetamida por 14 días' },
          { id: 'B', text: 'Administrar ceftriaxona endovenosa o intramuscular, lavado conjuntival continuo y evaluar a los padres' },
          { id: 'C', text: 'Indicar cloranfenicol tópico y control ambulatorio en policlínico en 7 días' },
          { id: 'D', text: 'Instilar colirio de ganciclovir y solicitar carga viral de citomegalovirus' },
          { id: 'E', text: 'Realizar sondaje de la vía lagrimal de urgencia bajo anestesia general' },
        ],
        correcta: 'B',
        explicacion: 'La oftalmia neonatorum hiperaguda en los primeros 2 a 5 días de vida con diplococos gramnegativos intracelulares es causada por Neisseria gonorrhoeae transmitida durante el parto. Representa una emergencia oftalmológica y pediátrica crítica debido a la capacidad del gonococo de atravesar el epitelio corneal intacto y producir úlcera corneal con perforación y endoftalmitis en menos de 24-48 horas. El tratamiento exige hospitalización, ceftriaxona parenteral (25-50 mg/kg EV/IM), irrigación salina profusa frecuente para retirar detritos y estudio/tratamiento de ambos progenitores. Trampa. Pensar que un colirio antibiótico tópico es suficiente para tratar la conjuntivitis gonocócica neonatal es un error letal para el ojo del recién nacido.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.005',
      },
    ],
  },

  {
    id: 'oftal-03',
    classId: 'oftal-03',
    tier: 2,
    blockNum: 1,
    blockName: 'Síndrome de Ojo Rojo & Superficie Ocular',
    topicLabel: '15.3',
    title: 'Patología Palpebral: Orzuelo, Chalazión, Blefaritis y Dacriocistitis',
    perfilCode: '6.02.1.002',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Sin garantía GES específica · Norma de Atención Primaria Oftalmológica',
    reconstrucciones: 'EUNACOM 2017 (Q#64) · EUNACOM Diciembre 2021 (Q#33)',
    frecuencia: 'Alta rentabilidad · Diferenciación entre orzuelo agudo, chalazión crónico y dacriocistitis',
    diagram: flow('Algoritmo de Nódulos Palpebrales y Lagrimales en APS', [
      { t: 'Paciente con Nódulo, Inflamación o Edema Palpebral / Periocular', s: 'Evaluar localización (borde palpebral, placa tarsal o saco lagrimal) y presencia de dolor' },
      { k: 'split', q: '¿Lesión Dolorosa Aguda vs Nódulo Indoloro Crónico?', s: 'Diferenciación entre infección bacteriana activa y granuloma lipídico', ll: 'Dolor agudo, eritema, calor local', rl: 'Nódulo duro, indoloro, semanas de evolución',
        left: { t: 'Orzuelo (Palpebral) o Dacriocistitis (Canto Interno)', s: 'Palpebral: calor local + pomada antibiótica · Canto interno con epífora: amoxicilina/clavulánico oral', type: 'acc' },
        right: { t: 'Chalazión Crónico (Granuloma Meibomiano)', s: 'Obstrucción no infecciosa de glándula de Meibomio · Calor local; si persiste > 2 meses: drenaje o corticoide', type: 'warn' },
        ll: 'infección aguda dolorosa', rl: 'granuloma crónico indoloro' },
      { t: 'Blefaritis Asociada a Disfunción de Glándulas de Meibomio', s: 'Aseo de borde palpebral diario con champú neutro diluido + compresas tibias como base terapéutica', type: 'dec', al: 'patología crónica de base', from: 'left' },
    ]),
    contexto: 'Las afecciones palpebrales y del aparato lagrimal son motivos de consulta diarios en la práctica ambulatoria. El médico debe distinguir un orzuelo agudo de un chalazión crónico, indicar la higiene palpebral correcta para la blefaritis y diagnosticar la dacriocistitis aguda en el canto interno, evitando maniobras que propaguen la infección.',
    contentSections: [
      {
        subhead: '1. Orzuelo vs Chalazión: Clave Semiológica Fundamental',
        paragraphs: [
          '• <strong>Orzuelo:</strong> Infección bacteriana <strong>aguda y dolorosa</strong> de las glándulas palpebrales, provocada casi siempre por <em>Staphylococcus aureus</em>. Se divide en:<br>' +
          '- <em>Orzuelo externo:</em> Absceso de las glándulas sebáceas de Zeiss o sudoríparas de Moll en el borde palpebral libre, visible como una pústula dolorosa en la base de una pestaña.<br>' +
          '- <em>Orzuelo interno:</em> Infección aguda de una glándula de Meibomio dentro del tarso, con tumefacción eritematosa hacia la conjuntiva tarsal.<br>' +
          'Tratamiento: Compresas tibias húmedas 3 a 4 veces al día (favorece la vasodilatación y drenaje espontáneo) + <strong>ungüento oftálmico antibiótico</strong> (terramicina o eritromicina). No se punciona precozmente.<br>' +
          '• <strong>Chalazión:</strong> Inflamación <strong>granulomatosa lipídica crónica e indolora</strong> secundaria a la obstrucción del conducto excretor de una glándula de Meibomio, sin proliferación bacteriana activa. Se palpa como un nódulo firme, redondeado, indoloro en el espesor del párpado, cubierto por piel móvil. Tratamiento: Inicialmente compresas tibias y masaje; si persiste más de 2 meses o causa astigmatismo corneal por compresión, se realiza curetaje quirúrgico o infiltración intralesional de triamcinolona.',
        ],
      },
      {
        subhead: '2. Blefaritis: Anterior vs Posterior',
        paragraphs: [
          'Inflamación crónica bilateral del borde palpebral, frecuentemente asociada a dermatitis seborreica y rosácea.<br>' +
          '• <strong>Blefaritis Anterior:</strong> Afecta la base de las pestañas; puede ser eccematosa/seborreica (escamas grasosas amarillentas) o estafilocócica (collaretes duros alrededor del tallo folicular y microúlceras).<br>' +
          '• <strong>Blefaritis Posterior:</strong> Por <strong>disfunción de las glándulas de Meibomio (DGM)</strong>. El orificio glandular está taponado por secreción espesa cerosa (semejante a pasta dental al exprimir el borde), generando alteración de la capa lipídica de la lágrima y ojo seco evaporativo.<br>' +
          '• <strong>Tratamiento:</strong> El pilar angular es la <strong>higiene palpebral diaria</strong> con champú neutro de bebé diluido o toallitas específicas, precedido de compresas calientes. En casos moderados o con rosácea asociada, se indica doxiciclina oral (100 mg/día por 4 a 6 semanas) por su efecto modulador sobre la secreción lipídica.',
        ],
      },
      {
        subhead: '3. Dacriocistitis Aguda: Urgencia Infecciosa del Saco Lagrimal',
        paragraphs: [
          'Infección bacteriana aguda del <strong>saco lagrimal</strong>, casi siempre secundaria a una obstrucción mecánica crónica del conducto nasolagrimal (dacrioestenosis). Microorganismos: <em>S. aureus</em> y <em>S. pneumoniae</em>.<br>' +
          '• <strong>Presentación clínica:</strong> Tumefacción eritematosa, dolorosa, tensa y caliente en la <strong>región inferomedial de la órbita (canto interno del ojo)</strong>, asociada a epífora (lagrimeo continuo) y reflujo de material mucopurulento por el punto lagrimal al comprimir el saco.<br>' +
          '• <strong>Tratamiento:</strong> <strong>Antibióticos orales sistémicos con cobertura para estafilococo</strong> (amoxicilina-ácido clavulánico o cefadroxilo) + analgésicos y calor local. <strong>CONTRAINDICACIÓN ABSOLUTA:</strong> NUNCA realizar sondaje de la vía lagrimal en fase aguda porque puede desgarrar el saco y diseminar la infección a celulitis orbitaria. Una vez resuelto el cuadro agudo, el tratamiento definitivo es la dacriocistorrinostomía (DCR) quirúrgica.',
        ],
      },
    ],
    table: {
      title: 'Comparación Semiología: Orzuelo, Chalazión, Blefaritis y Dacriocistitis',
      headers: ['Patología', 'Estructura Afectada', 'Etiología', 'Semiología Cardinal', 'Conducta de Primera Línea'],
      rows: [
        ['Orzuelo', 'Glándulas de Zeiss/Moll o Meibomio', 'Infecciosa aguda (S. aureus)', 'Nódulo eritematoso agudo y muy DOLOROSO', 'Calor local húmedo + pomada antibiótica'],
        ['Chalazión', 'Glándula de Meibomio', 'Granulomatosa lipídica crónica', 'Nódulo duro en tarso, INDOLORO, piel móvil', 'Calor local; curetaje si > 2 meses'],
        ['Blefaritis', 'Borde libre palpebral y pestañas', 'DGM / Seborrea / S. aureus', 'Escamas en pestañas, ardor crónico, hiperemia', 'Higiene palpebral diaria con champú neutro'],
        ['Dacriocistitis', 'Saco lagrimal (canto interno)', 'Obstrucción nasolagrimal + bacteria', 'Masa dolorosa y roja inferomedial + epífora', 'Amoxicilina/clavulánico oral; no sondar'],
      ],
    },
    vignette: 'Mujer de 54 años consulta por una masa enrojecida y muy dolorosa localizada bajo el ángulo medial del ojo izquierdo de 3 días de evolución, con lagrimeo continuo y fiebre de 37.8 °C. Al examen físico: tumefacción tumefacta eritematosa muy sensible en la región del canto interno inferomedial, cuya presión suave genera salida de pus por el punto lagrimal inferior izquierdo. Movilidad ocular conservada y agudeza visual 20/20.',
    explicacion: 'La localización estricta de una masa eritematosa inflamatoria aguda y dolorosa en el canto interno inferior del ojo (proyección del saco lagrimal), asociada a epífora y reflujo purulento a la compresión, certifica el diagnóstico de Dacriocistitis Aguda. La conducta médica correcta en atención primaria es iniciar tratamiento antibiótico sistémico oral con amoxicilina-ácido clavulánico (o cefadroxilo) junto con calor local y analgesia, derivando a oftalmología para eventual resolución quirúrgica diferida (dacriocistorrinostomía). El sondaje lagrimal está estrictamente contraindicado en la fase aguda.',
    keyPoints: [
      'Orzuelo = nódulo agudo, eritematoso y MUY DOLOROSO en el borde palpebral; se trata con calor local y antibiótico tópico.',
      'Chalazión = nódulo crónico INDOLORO en el espesor del párpado por retención sebácea; curetaje si persiste >2 meses.',
      'Blefaritis = inflamación crónica del borde palpebral; el tratamiento pilar es la higiene diaria con champú neutro.',
      'Dacriocistitis aguda = masa roja y muy dolorosa en el canto interno del ojo con epífora; requiere antibióticos sistémicos orales.',
      'En dacriocistitis aguda está PROHIBIDO realizar sondaje de la vía lagrimal por riesgo de diseminación orbitaria.',
    ],
    questions: [
      {
        stem: 'Un hombre de 42 años consulta por la aparición de un nódulo firme en el párpado superior derecho de 6 semanas de evolución. Refiere que hace dos meses tuvo un cuadro inflamatorio doloroso que se resolvió solo, quedando esta lesión que no le duele en absoluto pero le causa molestia estética. Al examen se palpa un nódulo subcutáneo redondeado de 5 mm en el espesor del tarso superior, no adherido a la piel y completamente indoloro a la palpación. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Orzuelo interno agudo' },
          { id: 'B', text: 'Chalazión' },
          { id: 'C', text: 'Carcinoma sebáceo de párpado' },
          { id: 'D', text: 'Dacriocistitis crónica' },
          { id: 'E', text: 'Quiste de inclusión epidérmica' },
        ],
        correcta: 'B',
        explicacion: 'La evolución de un nódulo palpebral firme, bien delimitado e indoloro de semanas de duración, que frecuentemente sucede a un episodio agudo inflamatorio (orzuelo previo mal drenado), es la presentación clásica del Chalazión. Se debe a un granuloma por cuerpo extraño lipídico secundario a la oclusión crónica del conducto excretor de una glándula de Meibomio. El orzuelo agudo (A) se caracteriza por dolor agudo y eritema. El carcinoma sebáceo (C) debe sospecharse solo ante chalaziones recidivantes atípicos en ancianos con pérdida de pestañas (madarosis). Perla. Nódulo palpebral crónico e indoloro en el tarso es siempre un chalazión.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.002',
      },
      {
        stem: 'Una mujer de 68 años acude por dolor intenso, hinchazón y enrojecimiento en el ángulo interno del ojo derecho desde hace 48 horas. Al examen se aprecia una masa eritematosa muy fluctuante y sensible sobre el hueso nasal, a nivel del saco lagrimal, con reflujo de pus por el punto lagrimal al presionarla suavemente. ¿Cuál de las siguientes conductas está ESTRICTAMENTE CONTRAINDICADA en este momento?',
        options: [
          { id: 'A', text: 'Iniciar amoxicilina con ácido clavulánico oral' },
          { id: 'B', text: 'Indicar calor local húmedo y analgésicos orales' },
          { id: 'C', text: 'Realizar un sondaje urgente de la vía lagrimal con estilete' },
          { id: 'D', text: 'Derivar a oftalmología para control en 24 a 48 horas' },
          { id: 'E', text: 'Tomar cultivo de la secreción purulenta descargada' },
        ],
        correcta: 'C',
        explicacion: 'En la dacriocistitis aguda supurada, el saco lagrimal se encuentra intensamente inflamado, friable e infectado por gérmenes piógenos. El sondaje de la vía lagrimal en esta fase está formalmente contraindicado porque puede lacerar o perforar la pared del saco, creando falsas vías y diseminando la infección a los tejidos circundantes en forma de celulitis orbitaria o flemón facial. El manejo correcto consiste en antibióticos orales (amoxicilina-clavulánico), calor local y postergar cualquier procedimiento mecánico o quirúrgico (como la dacriocistorrinostomía) hasta que el proceso agudo esté totalmente inactivo. Trampa. Intentar destapar la vía lagrimal con sonda durante la infección aguda es una contraindicación de examen.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.002',
      },
    ],
  },

  {
    id: 'oftal-04',
    classId: 'oftal-04',
    tier: 2,
    blockNum: 1,
    blockName: 'Síndrome de Ojo Rojo & Superficie Ocular',
    topicLabel: '15.4',
    title: 'Queratitis Aguda y Úlcera Corneal Herpética (Prohibición de Corticoides)',
    perfilCode: '6.02.1.006',
    dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Sin garantía GES específica · Norma Técnica de Infecciones Corneales',
    reconstrucciones: 'EUNACOM Julio 2016 (Q#102) · EUNACOM Diciembre 2022 (Q#58)',
    frecuencia: 'Máxima · La regla de oro más evaluada en oftalmología: PROHIBICIÓN de corticoides en úlceras corneales',
    diagram: flow('Algoritmo de Queratitis y Lesiones Corneales en APS', [
      { t: 'Paciente con Ojo Rojo Periquerático, Dolor Severo, Blefarospasmo y Fotofobia', s: 'Paso mandatorio: Realizar tinción con fluoresceína e inspección con luz azul de cobalto' },
      { k: 'split', q: '¿Patrón de Tinción Corneal Positiva: Dendrítica vs Infiltrado Estromal Redondeado?', s: 'Diferenciación etiológica entre queratitis herpética y bacteriana en lentes de contacto', ll: 'Lesión lineal ramificada (dendrita) con bulbos', rl: 'Infiltrado blanco-amarillento redondeado estromal',
        left: { t: 'Úlcera Corneal Herpética (VHS-1)', s: 'Aciclovir pomada oftálmica 3% 5 veces/día · PROHIBICIÓN ABSOLUTA DE CORTICOIDES', type: 'acc' },
        right: { t: 'Queratitis Bacteriana (Pseudomonas en Lentes de Contacto)', s: 'Colirios antibióticos reforzados de amplio espectro · Retirar lente y derivar de urgencia', type: 'warn' },
        ll: 'patrón dendrítico herpético', rl: 'úlcera bacteriana supurada' },
      { t: 'Conducta Médica Obligatoria en APS', s: 'Ciclopléjico colirio para el dolor + derivación prioritaria a oftalmología · NUNCA prescribir colirios con corticoides', type: 'dec', al: 'protección corneal', from: 'left' },
    ]),
    contexto: 'La queratitis representa una inflamación de la córnea que compromete directamente el eje visual. La tinción con fluoresceína es el examen de cabecera fundamental. La regla de oro indiscutible del EUNACOM es la contraindicación absoluta de los corticoides tópicos ante una úlcera dendrítica por herpes simple, ya que inducen replicación viral descontrolada, úlcera geográfica gigante y perforación ocular.',
    contentSections: [
      {
        subhead: '1. Fisiopatología y Presentación Clínica de la Queratitis',
        paragraphs: [
          'La córnea es el tejido más densamente inervado del organismo (nervio oftálmico V1). Por ello, cualquier alteración epitelial o estromal desencadena el clásico <strong>tríada protectora corneal</strong>:<br>' +
          '1. <strong>Dolor ocular punzante intenso</strong> (sensación de que algo corta o raspa el ojo).<br>' +
          '2. <strong>Blefarospasmo reflejo invencible</strong> (imposibilidad de abrir activamente los párpados).<br>' +
          '3. <strong>Fotofobia extrema y lagrimeo abundante</strong>.<br>' +
          'Se acompaña siempre de <strong>inyección periquerática o ciliar marcada</strong> y disminución variable de la agudeza visual. El examen con <strong>tira de fluoresceína bajo luz azul de cobalto</strong> es el método diagnóstico definitivo en APS.',
        ],
      },
      {
        subhead: '2. Úlcera Corneal Herpética (Virus Herpes Simple Tipo 1)',
        paragraphs: [
          'Es la causa más común de ceguera corneal infecciosa en países desarrollados. Tras la primoinfección, el virus queda acantonado en el ganglio de Gasser del trigémino y se reactiva por fiebre, estrés o inmunosupresión.<br>' +
          '• <strong>Lesión patognomónica: ÚLCERA DENDRÍTICA</strong>. Es una lesión epitelial lineal ramificada en forma de "árbol o helecho" con pequeños botones terminales en los extremos. Se asocia a <strong>hipoestesia corneal</strong> (pérdida de sensibilidad táctil corneal al tocarla con una torunda de algodón).<br>' +
          '• <strong>Tratamiento:</strong> <strong>Aciclovir ungüento oftálmico al 3%</strong> aplicado 5 veces al día por 10 a 14 días (o ganciclovir gel tópico). Se puede asociar aciclovir oral en pacientes inmunodeprimidos.<br>' +
          '• <strong>REGLA DE ORO DE MÁXIMA RENTABILIDAD: LOS CORTICOIDES TÓPICOS ESTÁN ESTRICTAMENTE PROHIBIDOS</strong>. El uso inadvertido de corticoides frena la inmunidad local, multiplica la replicación viral y transforma la úlcera dendrítica en una <strong>úlcera geográfica extensa</strong> con lisis del estroma y alto riesgo de perforación corneal permanente.',
        ],
      },
      {
        subhead: '3. Queratitis Bacteriana y Usuarios de Lentes de Contacto',
        paragraphs: [
          'Constituye una urgencia visual extrema. Su principal factor de riesgo es el <strong>uso indebido de lentes de contacto blandos</strong> (dormir con ellos, higiene con agua corriente).<br>' +
          '• <strong>Microorganismos:</strong> <em>Pseudomonas aeruginosa</em> (altamente destructiva en usuarios de lentes de contacto por enzimas elastasas) y <em>S. aureus</em>.<br>' +
          '• <strong>Clínica:</strong> Infiltrado corneal blanquecino o amarillento estromal denso, con defecto epitelial sobreyacente y formación precoz de <strong>hipopión en cámara anterior</strong> (nivel de pus estéril reactivo en el fondo de la cámara anterior).<br>' +
          '• <strong>Manejo:</strong> Suspender y retirar inmediatamente los lentes de contacto (guardarlos para cultivo), colirios antibióticos reforzados de amplio espectro (vancomicina + ceftazidima o moxifloxacino) y <strong>derivación urgente en el día al oftalmólogo</strong>.',
        ],
      },
    ],
    table: {
      title: 'Queratitis Herpética vs Queratitis Bacteriana vs Queratitis Actínica',
      headers: ['Tipo de Queratitis', 'Factor Desencadenante', 'Patrón de Tinción con Fluoresceína', 'Terapia de Elección', 'Error Fatal a Evitar'],
      rows: [
        ['Herpética (VHS-1)', 'Estrés, fiebre, inmunodepresión', 'Úlcera dendrítica ramificada con botones', 'Aciclovir tópico 3% pomada', 'USO DE CORTICOIDES TÓPICOS'],
        ['Bacteriana (Pseudomonas)', 'Lentes de contacto blandos', 'Infiltrado estromal blanco + hipopión', 'Ceftazidima / Moxifloxacino', 'Ocluir el ojo con parche'],
        ['Actínica (Soldador / Nieve)', 'Exposición a rayos UV sin gafas', 'Queratitis punteada difusa superficial', 'Ciclopléjico + Pomada lubricante', 'Uso repetido de anestésico tópico'],
        ['Fúngica (Fusarium)', 'Trauma con vegetal / rama de árbol', 'Infiltrado con bordes plumosos y lesiones satélite', 'Voriconazol / Natamicina tópica', 'Tratar como infección bacteriana'],
      ],
    },
    vignette: 'Joven de 28 años consulta por ojo derecho muy rojo, doloroso y con fotofobia intensa de 24 horas de evolución. Refiere antecedente de herpes labial recurrente. Al examen: inyección periquerática intensa. La tinción con fluoresceína bajo filtro azul de cobalto revela una úlcera epitelial ramificada en forma de dendrita con botones terminales en el tercio central de la córnea.',
    explicacion: 'El hallazgo de una úlcera epitelial corneal dendrítica lineal ramificada con botones terminales patognomónica de Queratitis Herpética por Virus Herpes Simple (VHS-1). La conducta terapéutica de elección en APS es iniciar inmediatamente pomada oftálmica de Aciclovir al 3% cinco veces al día y derivar a oftalmología. Está formalmente contraindicado el uso de cualquier colirio que contenga corticoides, ya que desencadenaría una úlcera geográfica destructiva con perforación corneal.',
    keyPoints: [
      'Úlcera dendrítica ramificada con bulbos terminales teñida con fluoresceína = Queratitis herpética por VHS-1.',
      'CONTRAINDICACIÓN ABSOLUTA: JAMÁS prescribir corticoides tópicos en úlceras herpéticas (producen úlcera geográfica y perforación).',
      'El tratamiento de elección de la queratitis herpética es Aciclovir oftálmico en pomada al 3% (5 veces al día).',
      'En usuarios de lentes de contacto con infiltrado corneal blanco, sospechar Pseudomonas aeruginosa y derivar de urgencia.',
      'La queratitis del soldador (actínica) es bilateral, cursa con queratitis punteada superficial difusa y cura en 24-48 horas con lubricantes.',
      'Los anestésicos locales tópicos solo se usan para el examen diagnóstico en el box; su uso repetido destruye el epitelio corneal.',
    ],
    questions: [
      {
        stem: 'Un paciente de 35 años consulta por dolor ocular derecho punzante, fotofobia intensa y lagrimeo de dos días de evolución. Al teñir la córnea con una gota de fluoresceína y observar bajo luz azul de cobalto, se aprecia una lesión epitelial corneal superficial de aspecto arborescente y ramificado con extremos bulbosos. ¿Cuál de los siguientes fármacos está FORMALMENTE CONTRAINDICADO por el riesgo de inducir perforación corneal?',
        options: [
          { id: 'A', text: 'Aciclovir ungüento oftálmico al 3%' },
          { id: 'B', text: 'Ganciclovir gel oftálmico al 0.15%' },
          { id: 'C', text: 'Dexametasona colirio oftálmico al 0.1%' },
          { id: 'D', text: 'Ciclopentolato colirio al 1%' },
          { id: 'E', text: 'Lágrimas artificiales de hialuronato de sodio' },
        ],
        correcta: 'C',
        explicacion: 'La imagen descrita es patognomónica de una queratitis epitelial herpética (úlcera dendrítica). Los corticoides tópicos (como dexametasona, prednisolona o betametasona) están terminantemente contraindicados en esta patología. Los corticoides inhiben la respuesta inmune celular local y promueven la replicación y dispersión viral a través de todo el epitelio y estroma corneal, transformando la dendrita en una úlcera geográfica gigante con necrosis estromal (queratomalacia) y perforación del globo ocular. El tratamiento adecuado es el aciclovir tópico (A). Trampa. Prescribir corticoides para "desinflamar" un ojo rojo sin confirmar indemnidad corneal con fluoresceína es una de las mayores fuentes de iatrogenia grave en oftalmología.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.006',
      },
      {
        stem: 'Un joven de 22 años, usuario habitual de lentes de contacto blandos que reconoce no retirárselos para dormir, consulta por dolor ocular izquierdo muy severo, disminución de la agudeza visual y enrojecimiento de 24 horas de evolución. Al examen con linterna se observa una mancha blanquecina redondeada de 2 mm en el centro de la córnea y un nivel horizontal blanco de 1 mm en el fondo de la cámara anterior (hipopión). ¿Cuál es el patógeno más probablemente involucrado y la conducta inmediata?',
        options: [
          { id: 'A', text: 'Virus herpes simple; iniciar aciclovir oral y colirio de corticoides' },
          { id: 'B', text: 'Pseudomonas aeruginosa; retirar lentes de contacto, iniciar colirios reforzados de amplio espectro y derivar de urgencia' },
          { id: 'C', text: 'Acanthamoeba; realizar raspado corneal ambulatorio y ocluir el ojo con parche' },
          { id: 'D', text: 'Staphylococcus epidermidis; indicar lágrimas artificiales y control en 1 semana' },
          { id: 'E', text: 'Adenovirus serotipo 8; indicar reposo laboral por 7 días' },
        ],
        correcta: 'B',
        explicacion: 'La aparición de un infiltrado estromal corneal blanco-amarillento ulcerado con hipopión en un usuario de lentes de contacto blandos es una emergencia oftalmológica mayor compatible con Queratitis Bacteriana Aguda, cuyo agente causal más frecuente y destructivo es Pseudomonas aeruginosa. Esta bacteria produce proteasas y elastasas capaces de lisar la córnea completa en menos de 24 a 48 horas. La conducta obligatoria es retirar y guardar los lentes para cultivo, iniciar terapia antibiótica empírica reforzada de amplio espectro (como ceftazidima + vancomicina o fluoroquinolona de 4.ª generación en dosis de carga) y derivar de inmediato al oftalmólogo. El ojo infectado NUNCA se debe ocluir con parche. Perla. Usuario de lentes de contacto con dolor e infiltrado blanco corneal es Pseudomonas hasta demostrar lo contrario.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.006',
      },
    ],
  },

  {
    id: 'oftal-05',
    classId: 'oftal-05',
    tier: 2,
    blockNum: 1,
    blockName: 'Síndrome de Ojo Rojo & Superficie Ocular',
    topicLabel: '15.5',
    title: 'Escleritis y Epiescleritis: Prueba de Fenilefrina y Enfermedades Reumatológicas',
    perfilCode: '6.02.1.021',
    dx: 'Sospecha', tx: 'Inicial', seg: 'Derivar',
    ges: 'Sin garantía GES específica · Enlace con Garantías Reumatológicas GES',
    reconstrucciones: 'EUNACOM 2015 (Q#112) · EUNACOM Julio 2021 (Q#19)',
    frecuencia: 'Media-alta · Diferenciación semiológica mediante la prueba de blanqueamiento con fenilefrina',
    diagram: flow('Algoritmo Diagnóstico: Epiescleritis vs Escleritis vs Uveítis', [
      { t: 'Paciente con Ojo Rojo Sectorial o Profundo y Dolor Ocular', s: 'Evaluar intensidad del dolor (molestia leve vs dolor sordo terebrante) e irradiación' },
      { k: 'split', q: '¿Instilación de Fenilefrina Tópica al 2.5% Blanquea los Vasos en 15 Minutos?', s: 'Diferenciación diagnóstica patognomónica del plexo vascular comprometido', ll: 'Blanqueamiento POSITIVO (Desaparece el enrojecimiento)', rl: 'Blanqueamiento NEGATIVO (Persiste el color violáceo)',
        left: { t: 'Epiescleritis (Plexo Superficial)', s: 'Curso benigno, molestia leve, sin pérdida visual · Tratamiento con AINE tópicos o lágrimas', type: 'acc' },
        right: { t: 'Escleritis (Plexo Profundo y Esclera)', s: 'Dolor óseo terebrante nocturno · 50% asociada a Artritis Reumatoide o Vasculitis Sistémica', type: 'warn' },
        ll: 'plexo epiescleral superficial', rl: 'inflamación escleral profunda' },
      { t: 'Manejo Escalonado de la Escleritis', s: 'AINE sistémicos orales + Corticoterapia sistémica + Estudio reumatológico y derivación prioritaria', type: 'dec', al: 'terapia reumatológica', from: 'right' },
    ]),
    contexto: 'La epiescleritis y la escleritis son dos inflamaciones de la cubierta externa del globo ocular que difieren radicalmente en su gravedad y pronóstico. La epiescleritis es benigna y autolimitada; la escleritis es destructiva, extremadamente dolorosa y en más del 50% de los casos constituye la primera manifestación de una enfermedad autoinmune sistémica potencialmente letal como la artritis reumatoide o vasculitis.',
    contentSections: [
      {
        subhead: '1. Anatomía y la Prueba de Blanqueamiento con Fenilefrina',
        paragraphs: [
          'La pared ocular externa cuenta con tres plexos vasculares superpuestos: conjuntival (el más superficial), epiescleral superficial y plexo epiescleral profundo adosado a la esclera.<br>' +
          '• <strong>La Prueba de la Fenilefrina (Test de Blanqueamiento):</strong> Se instila una gota de fenilefrina al 2.5% o al 10% en el ojo afecto y se reevalúa a los 10 a 15 minutos:<br>' +
          '- <strong>En la Epiescleritis:</strong> El plexo superficial responde intensamente a los agonistas alfa-1 adrenérgicos, produciendo <strong>vasoconstricción completa con desaparición (blanqueamiento) del enrojecimiento</strong>.<br>' +
          '- <strong>En la Escleritis:</strong> La inflamación radica en el plexo profundo y vasos esclerales que no responden al vasoconstrictor tópico: <strong>el enrojecimiento y el tono violáceo persisten inalterados</strong>.',
        ],
      },
      {
        subhead: '2. Epiescleritis: Cuadro Clínico y Manejo',
        paragraphs: [
          'Afecta predominantemente a adultos jóvenes, más frecuente en mujeres.<br>' +
          '• <strong>Clínica:</strong> Enrojecimiento en cuña o sectorial de color <strong>rojo salmón o brillante</strong>, habitualmente temporal. Molestia leve, sensación de cuerpo extraño o ardor, pero <strong>sin dolor ocular intenso</strong>.<br>' +
          'La agudeza visual es estrictamente normal, la pupila es reactiva y no hay afectación de la córnea ni de la cámara anterior.<br>' +
          '• <strong>Conducta:</strong> Es un cuadro benigno, autolimitado en 1 a 3 semanas. La mayoría no requiere fármacos; se indican compresas frías, lágrimas artificiales y, si hay molestias moderadas, un curso corto de AINE tópico (nepafenaco, ketorolaco) o AINE oral (ibuprofeno).',
        ],
      },
      {
        subhead: '3. Escleritis: Banderas Rojas y Conexión Reumatológica',
        paragraphs: [
          'Inflamación granulomatosa necrotizante o no necrotizante de la túnica escleral. Es una enfermedad destructiva grave.<br>' +
          '• <strong>Clínica cardinal: DOLOR OCULAR TEREBRANTE INTENSO</strong>, sordo y profundo que irradia a la órbita, frente y mandíbula, y que <strong>despierta al paciente por la noche</strong>. El ojo presenta un color <strong>rojo oscuro o violáceo azulado</strong> característico a la luz natural.<br>' +
          '• <strong>Asociación Sistémica:</strong> Más del 50% de los casos se asocian a enfermedades reumatológicas sistémicas: <strong>Artritis Reumatoide (la causa más frecuente)</strong>, Granulomatosis con Poliangeítis (Wegener), Lupus Eritematoso Sistémico y Policondritis Recidivante.<br>' +
          '• <strong>Complicaciones:</strong> Escleromalacia perforante (adelgazamiento escleral extremo con visualización de la coroides oscura subyacente sin inflamación dolorosa, típica de AR avanzada) y pérdida visual.<br>' +
          '• <strong>Tratamiento:</strong> NUNCA responde a colirios tópicos. Requiere <strong>AINE orales en dosis altas</strong> (indometacina) como primera línea; si no responde o es necrotizante, <strong>corticoides sistémicos (prednisona oral 1 mg/kg/día)</strong> y terapia inmunosupresora (metotrexato, ciclofosfamida o biológicos anti-TNF), junto con estudio reumatológico completo y derivación urgente.',
        ],
      },
    ],
    table: {
      title: 'Diagnóstico Diferencial: Epiescleritis vs Escleritis Anterior',
      headers: ['Parámetro', 'Epiescleritis', 'Escleritis Anterior'],
      rows: [
        ['Dolor ocular', 'Leve molestia, ardor o sensación de arenilla', 'Dolor sordo, TEREBRANTE, severo, que despierta de noche'],
        ['Tonalidad del ojo', 'Rojo salmón / rojo brillante sectorial', 'Rojo oscuro / violáceo azulado difuso o nodular'],
        ['Test de Fenilefrina 2.5%', 'BLANQUEA (vasoconstricción completa)', 'NO BLANQUEA (persiste congestión profunda)'],
        ['Asociación sistémica', 'Rara (< 20%, idiopática habitual)', '> 50% autoinmune (Artritis Reumatoide, Wegener)'],
        ['Amenaza visual', 'Nula (benigna, autolimitada)', 'Alta (adelgazamiento, escleromalacia, perforación)'],
        ['Tratamiento', 'Lágrimas artificiales, AINE tópico si molesta', 'AINE orales, corticoides sistémicos, inmunosupresores'],
      ],
    },
    vignette: 'Mujer de 52 años con antecedente de artritis reumatoide en tratamiento con metotrexato consulta por dolor ocular bilateral muy intenso de 5 días de evolución, de predominio en el ojo izquierdo. Refiere que el dolor es continuo, profundo, le irradia al hemicráneo ipsilateral y no le permite dormir. Al examen: agudeza visual 20/25 bilateral. El ojo izquierdo muestra hiperemia difusa con marcada coloración violácea bajo la conjuntiva bulbar. Se instila fenilefrina al 2.5%, constatándose persistencia del eritema violáceo y del dolor tras 15 minutos.',
    explicacion: 'El cuadro de dolor ocular sordo severo que interrumpe el sueño, con inyección violácea profunda que no se blanquea tras la instilación de fenilefrina tópica en una paciente con artritis reumatoide, es diagnóstico inequívoco de Escleritis Anterior. A diferencia de la epiescleritis (que es indolora o leve y se blanquea con fenilefrina), la escleritis compromete la túnica colágena profunda y requiere tratamiento sistémico con AINEs orales a dosis plenas o corticoides orales sistémicos (prednisona), además de derivación urgente a oftalmología y reumatología para evitar el adelgazamiento escleral y la escleromalacia perforante.',
    keyPoints: [
      'La prueba de fenilefrina al 2.5% blanquea la epiescleritis pero NO blanquea la escleritis.',
      'La epiescleritis cursa con molestia leve y es benigna; la escleritis produce un dolor terebrante nocturno insoportable.',
      'Más del 50% de las escleritis se asocian a enfermedades reumatológicas sistémicas, principalmente Artritis Reumatoide.',
      'La escleritis NO responde a colirios tópicos; exige AINEs orales o corticoides sistémicos e inmunosupresores.',
      'La escleromalacia perforante es el adelgazamiento escleral grave indoloro en pacientes con artritis reumatoide de larga data.',
    ],
    questions: [
      {
        stem: 'Una mujer de 32 años consulta por enrojecimiento sectorial en el ojo derecho de 3 días de evolución, asociado a sensación leve de arenilla, sin dolor intenso ni baja de visión. Al examen: agudeza visual 20/20 bilateral, inyección vascular roja brillante triangular en el sector temporal de la conjuntiva bulbar. Tras instilar una gota de fenilefrina al 2.5%, la hiperemia vascular desaparece casi por completo a los 10 minutos. ¿Cuál es el diagnóstico más probable y la conducta médica indicada?',
        options: [
          { id: 'A', text: 'Escleritis necrotizante; iniciar pulsos de metilprednisolona endovenosa' },
          { id: 'B', text: 'Epiescleritis simple; indicar lubricantes oculares o AINE tópico y tranquilizar a la paciente' },
          { id: 'C', text: 'Glaucoma agudo incipiente; indicar pilocarpina al 2% en colirio' },
          { id: 'D', text: 'Uveítis anterior aguda; solicitar resonancia magnética cerebral' },
          { id: 'E', text: 'Queratitis estromal herpética; iniciar aciclovir endovenoso' },
        ],
        correcta: 'B',
        explicacion: 'El blanqueamiento vascular completo tras la instilación de fenilefrina tópica al 2.5% certifica que la dilatación vascular se ubica exclusivamente en el plexo epiescleral superficial, lo que define a la Epiescleritis Simple. La ausencia de dolor severo y la conservación de la visión apoyan la benignidad del cuadro. La conducta en APS es sintomática (lágrimas artificiales, compresas frías o un AINE tópico) con resolución espontánea en 1 a 2 semanas. La escleritis (A) no se blanquearía y presentaría dolor intenso terebrante. Perla. Ojo rojo sectorial que blanquea con fenilefrina y no duele intensamente es epiescleritis.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.021',
      },
      {
        stem: 'Un paciente de 60 años con antecedente de granulomatosis con poliangeítis (Wegener) consulta por dolor ocular lancinante en ojo derecho que le impide dormir y le irradia a la frente. Al examen físico se aprecia una zona nodular sobreelevada de color violáceo oscuro en la esclera superior que no se modifica con la instilación de fenilefrina tópica. ¿Cuál es la complicación más temida si este cuadro no recibe tratamiento sistémico oportuno?',
        options: [
          { id: 'A', text: 'Catarata cortical senil bilateral' },
          { id: 'B', text: 'Necrosis y adelgazamiento escleral con perforación del globo ocular (escleromalacia)' },
          { id: 'C', text: 'Desprendimiento de retina regmatógeno por desgarro gigante' },
          { id: 'D', text: 'Oclusión de la vena central de la retina' },
          { id: 'E', text: 'Neuropatía óptica isquémica anterior no arterítica' },
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta una escleritis nodular anterior en el contexto de una vasculitis necrotizante sistémica (Granulomatosis con Poliangeítis). La falta de blanqueamiento con fenilefrina confirma la inflamación de la vasculatura escleral profunda. La complicación más grave y temida de la escleritis no tratada es la necrosis y lisis del colágeno escleral, lo que produce adelgazamiento escleral severo (la esclera se vuelve traslúcida y se visualiza la coroides subyacente de color azul oscuro) con eventual perforación ocular y pérdida irrecuperable del ojo (escleromalacia perforante). Requiere tratamiento inmunosupresor sistémico agresivo inmediato. Trampa. Pensar que la escleritis solo causa molestias inflamatorias superficiales sin riesgo estructural del ojo es un error conceptual grave.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.021',
      },
    ],
  },
];

module.exports = {
  bloque1,
  flow,
};
