/**
 * TOMO 16 · DERMATOLOGÍA — BLOQUE 01: Semiología Cutánea, Acné, Rosácea & Alopecias
 * Clases 16.1 a 16.4 · Editorial EUNACOM 2026 · Color #a21caf
 */

function flow(title, rows, customColor = '#a21caf') {
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
    .acc{fill:var(--acc, ${customColor})}.accT{fill:#fff}.accS{font-size:8px;fill:#fae8ff}
    .dec{fill:var(--acc-t, #fdf4ff);stroke:var(--acc-p, ${customColor});stroke-width:1}
    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}
    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar)}
  </style>
  ${P.join('\n  ')}
</svg>`;
  return { title, svg };
}

const bloque1 = [
  {
    id: 'derma-01',
    classId: 'derma-01',
    tier: 2,
    blockNum: 1,
    blockName: 'Semiología Cutánea, Acné, Rosácea & Alopecias',
    topicLabel: '16.1',
    title: 'Lesiones Elementales Primarias y Secundarias de la Piel',
    perfilCode: '7.01.1.001',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Sin garantía GES específica · Base Semiomédica Universal',
    reconstrucciones: 'EUNACOM 2013 (Q#15) · EUNACOM Diciembre 2017 (Q#88)',
    frecuencia: 'Máxima · La semiología elemental es la base de más del 50% de las preguntas de dermatología',
    diagram: flow('Árbol Taxonómico de Lesiones Elementales Primarias', [
      { t: 'Evaluación Morfológica de una Lesión Cutánea Desconocida', s: 'Paso 1: Determinar mediante inspección y palpación si la lesión es plana, sólida o líquida' },
      { k: 'split', q: '¿Lesión Plana vs Sobreelevada Sólida vs Contenido Líquido?', s: 'Clasificación tripartita de las lesiones elementales primarias', ll: 'Plana (cambio de color) O Líquida', rl: 'Sobreelevada Sólida (palpable)',
        left: { t: 'Mácula (<1cm) / Mancha (>1cm) O Vesícula / Ampolla', s: 'Plana: vascular o pigmentaria · Líquida serosa: vesícula (<0.5cm) o ampolla (>0.5-1cm)', type: 'acc' },
        right: { t: 'Pápula (<1cm), Placa (>1cm) o Nódulo (Profundo)', s: 'Pápula: dérmica/epidérmica superficial · Nódulo: hipodérmico palpable · Habón: evanescente <24h', type: 'warn' },
        ll: 'cambio color / contenido líquido', rl: 'lesión sólida sobreelevada' },
      { t: 'Lesiones Secundarias por Evolución o Rascado', s: 'Escama (estrato córneo), Costra (desecación), Fisura, Erosión (no deja cicatriz) y Úlcera (deja cicatriz)', type: 'dec', al: 'evolución temporal', from: 'left' },
    ]),
    contexto: 'La dermatología es una especialidad eminentemente visual y morfológica. En el EUNACOM, la descripción exacta de la lesión elemental es la clave que permite identificar instantáneamente la patología en la viñeta clínica. El médico debe diferenciar con precisión mácula de pápula, vesícula de ampolla, y erosión de úlcera.',
    contentSections: [
      {
        subhead: '1. Lesiones Elementales Primarias: Planas y Líquidas',
        paragraphs: [
          'Se desarrollan sobre una piel previamente sana, sin modificaciones previas:<br>' +
          '• <strong>Lesiones Planas (Cambio de coloración sin relieve ni depresión detectable a la palpación):</strong><br>' +
          '- <strong>Mácula:</strong> Lesión plana circunscrita con diámetro <strong>menor a 1 cm</strong> (ej. efélides/pecas, léntigos, petequias).<br>' +
          '- <strong>Mancha:</strong> Lesión plana con diámetro <strong>mayor a 1 cm</strong> (ej. mancha café con leche, vitíligo, melasma). Si desaparece a la digitopresión (vitropresión positiva), es vascular congestiva (eritema); si no desaparece (vitropresión negativa), es purpúrica por extravasación hemática.<br>' +
          '• <strong>Lesiones con Contenido Líquido:</strong><br>' +
          '- <strong>Vesícula:</strong> Colección circunscrita de líquido seroso o hemático en epidermis, con diámetro <strong>menor a 0.5 cm</strong> (ej. herpes simple, herpes zóster, varicela).<br>' +
          '- <strong>Ampolla o Flictena:</strong> Colección líquida con diámetro <strong>mayor a 0.5 – 1 cm</strong> (ej. pénfigo, penfigoide, quemaduras de 2.° grado).<br>' +
          '- <strong>Pústula:</strong> Colección superficial de contenido <strong>purulento</strong> desde su inicio (ej. acné pustuloso, foliculitis).',
        ],
      },
      {
        subhead: '2. Lesiones Elementales Primarias Sólidas',
        paragraphs: [
          '• <strong>Pápula:</strong> Elevación sólida circunscrita de la piel con diámetro <strong>menor a 1 cm</strong>, que cura sin dejar cicatriz (ej. verruga plana, liquen plano, molusco contagioso).<br>' +
          '• <strong>Placa:</strong> Elevación sólida en meseta con extensión en superficie mayor que en altura, diámetro <strong>mayor a 1 cm</strong>, frecuentemente formada por confluencia de pápulas (ej. psoriasis vulgar).<br>' +
          '• <strong>Nódulo:</strong> Lesión redondeada u ovoide sólida, localizada en <strong>dermis profunda o tejido celular subcutáneo (hipodermis)</strong>, con diámetro mayor a 1 cm. <strong>Se palpa más de lo que se ve</strong>; suele ser firme y puede dejar cicatriz (ej. eritema nudoso, lipoma).<br>' +
          '• <strong>Habón o Roncha:</strong> Placa edematosa sobreelevada, rosada o blanquecina con halo eritematoso, producida por edema dérmico vasomotor mastocitario. Característica patognomónica: <strong>EVANESCENTE (dura menos de 24 horas y desaparece sin dejar secuela)</strong>.',
        ],
      },
      {
        subhead: '3. Lesiones Elementales Secundarias (Destinadas a Cicatrizar)',
        paragraphs: [
          'Resultan de la evolución natural o agresión externa (rascado, infección) de una lesión primaria previa:<br>' +
          '• <strong>Por pérdida de sustancia:</strong><br>' +
          '- <strong>Erosión o Excoriación:</strong> Pérdida superficial circunscrita que compromete <strong>únicamente la epidermis</strong>. <strong>CURA SIN DEJAR CICATRIZ</strong> (ej. ampolla rota, rascado por sarna).<br>' +
          '- <strong>Úlcera:</strong> Pérdida de sustancia profunda que destruye la membrana basal y compromete la <strong>dermis o hipodermis</strong>. <strong>SIEMPRE DEJA CICATRIZ</strong> al curar (ej. úlcera venosa, mal perforante plantar).<br>' +
          '- <strong>Fisura o Grieta:</strong> Desgarro lineal doloroso de la piel sin pérdida neta de sustancia (ej. quelitis angular, tiña interdigital).<br>' +
          '• <strong>Por acumulación o residuo:</strong><br>' +
          '- <strong>Escama:</strong> Laminillas córneas epidérmicas desprendidas en exceso (ej. ictiosis, psoriasis).<br>' +
          '- <strong>Costra:</strong> Desecación de exudado seroso (amarillenta), sangre (marrón-rojiza) o pus (costra melicérica en impétigo).<br>' +
          '- <strong>Escara:</strong> Tejido necrótico negro y seco delimitado de piel sana (ej. loxoscelismo cutáneo, úlcera por presión).<br>' +
          '- <strong>Liquenificación:</strong> Engrosamiento cutáneo reactivo con acentuación exagerada de las cuadrículas normales de la piel, causado por el rascado crónico repetitivo.',
        ],
      },
    ],
    table: {
      title: 'Resumen Taxonómico de Lesiones Elementales Primarias vs Secundarias',
      headers: ['Lesión', 'Tipo / Contenido', 'Tamaño de Corte', 'Nivel Anatómico', 'Ejemplo Clínico Típico'],
      rows: [
        ['Mácula', 'Plana (cambio color)', '< 1.0 cm', 'Epidérmica / Dérmica', 'Efélide (peca), petequia'],
        ['Mancha', 'Plana (cambio color)', '> 1.0 cm', 'Epidérmica / Dérmica', 'Vitíligo, mancha mongólica'],
        ['Pápula', 'Sólida sobreelevada', '< 1.0 cm', 'Epidermis / Dermis superficial', 'Acné pápula, liquen plano'],
        ['Placa', 'Sólida en meseta', '> 1.0 cm', 'Epidermis / Dermis', 'Psoriasis en placas'],
        ['Nódulo', 'Sólido circunscrito', '> 1.0 cm', 'Dermis profunda / Hipodermis', 'Eritema nudoso'],
        ['Habón / Roncha', 'Edema dérmico evanescente', 'Variable', 'Dermis papilar/reticular', 'Urticaria aguda (< 24 horas)'],
        ['Vesícula', 'Líquido seroso/hemático', '< 0.5 cm', 'Intra / Subepidérmico', 'Herpes simple, varicela'],
        ['Ampolla', 'Líquido seroso/hemático', '> 0.5 – 1.0 cm', 'Intra / Subepidérmico', 'Penfigoide ampollar, quemadura'],
        ['Erosión', 'Pérdida superficial', 'Variable', 'Solo Epidermis (SIN cicatriz)', 'Ampolla desnudada'],
        ['Úlcera', 'Pérdida profunda', 'Variable', 'Llega a Dermis (CON cicatriz)', 'Úlcera varicosa venosa'],
      ],
    },
    vignette: 'Hombre de 32 años consulta por lesiones pruriginosas en los codos. Al examen físico se aprecian lesiones sobreelevadas sólidas eritematosas que miden entre 3 y 5 cm de diámetro, con superficie aplanada en meseta y cubiertas por abundantes escamas plateadas que confluyen formando áreas extensas.',
    explicacion: 'La lesión descrita es una Placa (elevación sólida circunscrita de la piel con diámetro mayor a 1 cm y extensión en superficie que supera su grosor). La coexistencia de eritema sobreelevado en meseta con descamación laminar plateada sobre las superficies de extensión es la lesión elemental clásica y diagnóstica de la Psoriasis Vulgar en placas.',
    keyPoints: [
      'Mácula < 1 cm plana; Mancha > 1 cm plana (ambas sin relieve detectable a la palpación).',
      'Pápula < 1 cm sólida; Placa > 1 cm sólida en meseta (confluye de pápulas).',
      'Nódulo = lesión sólida profunda hipodérmica que se palpa más de lo que se ve.',
      'Habón o roncha = placa edematosa evanescente que dura menos de 24 horas.',
      'Vesícula < 0.5 cm líquida; Ampolla > 0.5 cm líquida.',
      'La erosión compromete solo epidermis y CURA SIN CICATRIZ; la úlcera compromete dermis y DEJA CICATRIZ.',
    ],
    questions: [
      {
        stem: 'Una paciente de 25 años consulta por una erupción cutánea diseminada. El médico describe lesiones circunscritas de contenido líquido claro seroso, de 2 a 3 milímetros de diámetro, agrupadas en racimo sobre una base eritematosa en el labio superior. ¿Cuál es el nombre semiológico exacto de esta lesión elemental primaria?',
        options: [
          { id: 'A', text: 'Pústula' },
          { id: 'B', text: 'Vesícula' },
          { id: 'C', text: 'Ampolla' },
          { id: 'D', text: 'Pápula' },
          { id: 'E', text: 'Erosión' },
        ],
        correcta: 'B',
        explicacion: 'Una colección circunscrita de líquido seroso, claro o hemático ubicada en la epidermis, cuyo diámetro es menor a 0.5 centímetros (en este caso 2 a 3 mm), corresponde por definición semiológica estricta a una Vesícula. Las ampollas o flictenas (C) tienen un tamaño mayor a 0.5 o 1 cm. Las pústulas (A) contienen material purulento desde su origen. Las pápulas (D) son lesiones sólidas sin líquido. Las erosiones (E) son lesiones secundarias por pérdida de sustancia. Perla. Colección líquida serosa menor a 0.5 cm es siempre una vesícula.',
        recTag: 'Banco Oficial AEE · Perfil V3 7.01.1.001',
      },
      {
        stem: '¿Cuál es la diferencia semiológica e histológica fundamental entre una erosión y una úlcera cutánea?',
        options: [
          { id: 'A', text: 'La erosión compromete solo la epidermis y cura sin dejar cicatriz, mientras que la úlcera compromete la dermis o hipodermis y cura dejando cicatriz' },
          { id: 'B', text: 'La erosión es siempre de origen infeccioso bacteriano y la úlcera es de origen autoinmune' },
          { id: 'C', text: 'La erosión es una lesión primaria y la úlcera es una lesión terciaria' },
          { id: 'D', text: 'La úlcera es indolora mientras que la erosión cursa con dolor lancinante' },
          { id: 'E', text: 'La erosión es mayor a 5 cm y la úlcera es menor a 1 cm' },
        ],
        correcta: 'A',
        explicacion: 'La diferencia patognomónica entre erosión y úlcera radica en la profundidad anatómica del daño tisular y su capacidad regenerativa. La erosión (o excoriación) es una pérdida de sustancia superficial circunscrita que afecta exclusivamente a la epidermis, respetando la membrana basal; dado que la capa basal de queratinocitos puede regenerar el epitelio por mitosis, la erosión cura restitutio ad integrum SIN DEJAR NINGUNA CICATRIZ. En cambio, la úlcera es una pérdida de sustancia profunda que destruye la membrana basal y penetra hacia la dermis reticular o tejido celular subcutáneo; como la dermis no puede regenerarse mediante mitosis epitelial, el defecto se repara mediante tejido de granulación y síntesis de colágeno fibrótico, dejando SIEMPRE UNA CICATRIZ PERMANENTE. Perla. Erosión = solo epidermis y sin cicatriz; Úlcera = llega a dermis y deja cicatriz.',
        recTag: 'Banco Oficial AEE · Perfil V3 7.01.1.001',
      },
    ],
  },

  {
    id: 'derma-02',
    classId: 'derma-02',
    tier: 2,
    blockNum: 1,
    blockName: 'Semiología Cutánea, Acné, Rosácea & Alopecias',
    topicLabel: '16.2',
    title: 'Acné Vulgar: Escalonamiento Tópico, Oral e Indicaciones de Isotretinoína',
    perfilCode: '6.01.1.002',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Sin garantía GES específica · Guía de Práctica Clínica Dermatológica',
    reconstrucciones: 'EUNACOM 2014 (Q#33) · EUNACOM Julio 2018 (Q#67)',
    frecuencia: 'Muy alta · Escalonamiento terapéutico racional y reglas de oro de la isotretinoína',
    diagram: flow('Algoritmo Escalonado de Manejo del Acné Vulgar', [
      { t: 'Paciente Adolescente o Adulto Joven con Lesiones en Cara, Pecho o Espalda', s: 'Paso 1: Clasificar subtipo (Comedoniano vs Pápulo-Pustuloso vs Nódulo-Quístico)' },
      { k: 'split', q: '¿Acné Comedoniano vs Inflamatorio Moderado vs Nódulo-Quístico Severo?', s: 'Escalamiento terapéutico progresivo según gravedad y cicatrices', ll: 'Comedoniano O Inflamatorio Leve/Moderado', rl: 'Nódulo-Quístico Severo / Conglobata / Refractario',
        left: { t: 'Terapia Tópica Escalonada ± Antibiótico Oral', s: 'Comedoniano: Retinoide tópico (adapaleno) · Inflamatorio: Peróxido de benzoilo + Doxiciclina oral', type: 'acc' },
        right: { t: 'ISOTRETINOÍNA ORAL (0.5 a 1.0 mg/kg/día)', s: 'Teratogénico absoluto: doble anticoncepción obligatoria + monitoreo de perfil lipídico y hepático', type: 'warn' },
        ll: 'tratamiento tópico / oral estándar', rl: 'isotretinoína oral sistémica' },
      { t: 'Regla de Oro de Antibióticos Tópicos', s: 'NUNCA USAR ANTIBIÓTICOS TÓPICOS EN MONOTERAPIA (combinar siempre con Peróxido de Benzoilo para evitar resistencias)', type: 'dec', al: 'alerta farmacológica', from: 'left' },
    ]),
    contexto: 'El acné vulgar es la enfermedad inflamatoria cutánea más frecuente de la adolescencia y juventud. Afecta la unidad pilosebácea y su fisiopatología tetrafactorial define el tratamiento. El médico debe dominar el escalamiento desde retinoides tópicos hasta tetraciclinas orales, y conocer con exactitud las indicaciones y precauciones vitales de la isotretinoína oral.',
    contentSections: [
      {
        subhead: '1. Fisiopatología Tetrafactorial y Clasificación Clínica',
        paragraphs: [
          'El acné involucra cuatro pilares patogénicos concatenados:<br>' +
          '1. <strong>Hiperqueratinización folicular del infundíbulo:</strong> Tapón queratínico que ocluye el ostium folicular formando la lesión elemental primaria: el <strong>COMEDÓN</strong>.<br>' +
          '2. <strong>Hipersecreción sebácea:</strong> Estimulada por andrógenos en la pubertad.<br>' +
          '3. <strong>Proliferación de <em>Cutibacterium acnes</em></strong> (antes <em>Propionibacterium acnes</em>): Bacteria anaerobia comensal que degrada triglicéridos a ácidos grasos libres proinflamatorios.<br>' +
          '4. <strong>Inflamación y respuesta inmune local:</strong> Quimiotaxis de neutrófilos con rotura folicular hacia la dermis.<br>' +
          '• <strong>Clasificación Clínica:</strong><br>' +
          '- <em>Acné Comedoniano (No inflamatorio):</em> Comedones abiertos ("puntos negros" por oxidación de la melanina y queratina) y comedones cerrados ("puntos blancos").<br>' +
          '- <em>Acné Pápulo-pustuloso (Inflamatorio leve a moderado):</em> Pápulas eritematosas inflamatorias y pústulas superficiales.<br>' +
          '- <em>Acné Nódulo-quístico o Severo:</em> Nódulos profundos, dolorosos, abscesos y fístulas con alto riesgo de <strong>cicatrices atróficas ("en picahielo") o hipertróficas/queloideas</strong>.',
        ],
      },
      {
        subhead: '2. Escalamiento Terapéutico Tópico y Oral',
        paragraphs: [
          '• <strong>1. Acné Comedoniano Puro:</strong> Fármaco de elección: <strong>Retinoides tópicos</strong> (<strong>Adapaleno al 0.1%</strong>, Tretinoína al 0.025-0.05%). Normalizan la descamación del epitelio folicular y disuelven los comedones. Se aplican de noche. Pueden asociarse a <strong>Peróxido de Benzoilo al 2.5-5%</strong> (queratolítico y bactericida potente sin generar resistencia).<br>' +
          '• <strong>2. Acné Pápulo-pustuloso Leve a Moderado:</strong> Combinación de <strong>Peróxido de Benzoilo + Retinoide tópico ± Antibiótico tópico (Clindamicina 1%)</strong>.<br>' +
          '<strong>Regla de oro de examen:</strong> NUNCA prescribir antibióticos tópicos (clindamicina o eritromicina) en monoterapia, ya que inducen resistencia bacteriana en semanas. Deben asociarse siempre al peróxido de benzoilo.<br>' +
          '• <strong>3. Acné Moderado-Severo o Extenso (Cara + Tronco):</strong> <strong>Antibióticos orales: Tetraciclinas (Doxiciclina 100 mg/día o Minociclina 50-100 mg/día)</strong> por 8 a 12 semanas, asociado a terapia tópica con peróxido de benzoilo. Efectos adversos: fotosensibilidad, esofagitis (tomar con vaso lleno de agua y no acostarse). Contraindicadas en embarazadas y niños < 8 años por tinción dental.',
        ],
      },
      {
        subhead: '3. Isotretinoína Oral: Indicaciones y Reglas Vitales',
        paragraphs: [
          'La isotretinoína (ácido 13-cis-retinoico) es el fármaco más eficaz: atrofia las glándulas sebáceas en un 90%, frena la queratinización, disminuye C. acnes y la inflamación.<br>' +
          '• <strong>Indicaciones formales de examen:</strong><br>' +
          '1. Acné nódulo-quístico o conglobata severo.<br>' +
          '2. Acné con cicatrización activa o deformante.<br>' +
          '3. Acné moderado refractario a tratamiento completo con antibióticos orales por 3 meses.<br>' +
          '4. Gran impacto psicológico o dismorfofobia.<br>' +
          '• <strong>Reglas de Oro y Seguridad:</strong><br>' +
          '- <strong>TERATOGENICIDAD EXTREMA:</strong> Malformaciones fetales mayores craneofaciales, cardíacas y del SNC. En mujeres en edad fértil exige <strong>doble método anticonceptivo eficaz</strong> iniciado 1 mes antes, durante todo el tratamiento y hasta 1 mes después de suspender el fármaco, con 2 test de embarazo negativos previos y mensuales.<br>' +
          '- <strong>Monitorización hepática y lipídica:</strong> Perfil lipídico (triglicéridos/colesterol) y pruebas hepáticas (GOT/GPT) basales y de control.<br>' +
          '- <strong>Efecto adverso universal predecible: QUEILITIS DESCAMATIVA SEVERA Y SEQUEDAD MUCOCUTÁNEA (xerosis)</strong>. Si el paciente no tiene labios partidos, no está tomando el fármaco.',
        ],
      },
    ],
    table: {
      title: 'Algoritmo Escalonado de Tratamiento del Acné Vulgar',
      headers: ['Grado / Severidad', 'Lesiones Predominantes', 'Terapia de Primera Línea', 'Alternativa / Coadyuvante'],
      rows: [
        ['Acné Comedoniano', 'Comedones abiertos y cerrados', 'Retinoide tópico (Adapaleno 0.1%) nocturno', 'Peróxido de benzoilo 2.5-5% / Ácido azelaico'],
        ['Acné Pápulo-pustuloso Leve', 'Comedones + pápulas inflamatorias', 'Peróxido de benzoilo + Retinoide tópico', 'Asociar Clindamicina tópica 1% combinada'],
        ['Acné Pápulo-pustuloso Moderado', 'Pápulas y pústulas numerosas en cara/espalda', 'Doxiciclina oral 100 mg/día + Peróxido de benzoilo', 'Minociclina oral / Terapia combinada tópica'],
        ['Acné Severo / Nódulo-quístico', 'Nódulos profundos, quistes, cicatrices', 'ISOTRETINOÍNA ORAL (0.5 a 1.0 mg/kg/día)', 'Doble anticoncepción + monitoreo lipídico/hepático'],
      ],
    },
    vignette: 'Joven de 17 años consulta por lesiones faciales de 6 meses de evolución que le generan profunda angustia social. Al examen físico se aprecian abundantes comedones abiertos y cerrados en frente y mejillas, acompañados de escasas pápulas eritematosas no confluentes, sin nódulos, quistes ni cicatrices.',
    explicacion: 'El paciente presenta un Acné Comedoniano predominante (no inflamatorio). La lesión etiopatogénica central es el comedón por hiperqueratinización infundibular. El tratamiento de primera línea de elección es un retinoide tópico, específicamente Adapaleno al 0.1% en gel aplicado por la noche, que puede combinarse con Peróxido de Benzoilo al 2.5% por la mañana. No están indicados los antibióticos orales ni la isotretinoína en este estadio.',
    keyPoints: [
      'El comedón es la lesión elemental obligatoria que define al acné vulgar.',
      'Acné comedoniano = Retinoide tópico de elección (Adapaleno o Tretinoína).',
      'NUNCA usar antibióticos tópicos en monoterapia; asociar siempre a Peróxido de Benzoilo.',
      'Acné inflamatorio moderado-severo = Tetraciclinas orales (Doxiciclina 100 mg/día) por 8 a 12 semanas.',
      'La Isotretinoína oral se indica en acné nódulo-quístico severo, cicatrizante o refractario.',
      'La Isotretinoína es teratogénica absoluta: exige doble anticoncepción y control lipídico/hepático.',
      'El efecto secundario universal de la isotretinoína es la queilitis descamativa y sequedad mucocutánea.',
    ],
    questions: [
      {
        stem: 'Un joven de 16 años presenta acné moderado con abundantes pápulas y pústulas en rostro y tercio superior del tórax. El médico decide iniciar tratamiento con un antibiótico tópico. ¿Cuál es el principio farmacológico obligatorio que debe respetarse para evitar la rápida aparición de cepas resistentes de Cutibacterium acnes?',
        options: [
          { id: 'A', text: 'Prescribir clindamicina tópica en monoterapia por al menos 6 meses continuos' },
          { id: 'B', text: 'Combinar siempre el antibiótico tópico con peróxido de benzoilo o un retinoide tópico, evitando la monoterapia' },
          { id: 'C', text: 'Alternar ciprofloxacino tópico y vancomicina en días sucesivos' },
          { id: 'D', text: 'Usar dosis ultrabajas de penicilina tópica en crema' },
          { id: 'E', text: 'Indicar corticoide tópico de alta potencia junto con el antibiótico' },
        ],
        correcta: 'B',
        explicacion: 'El uso de antibióticos tópicos en monoterapia (como clindamicina al 1% o eritromicina sola) induce de forma extraordinariamente rápida la selección y proliferación de cepas mutantes resistentes de Cutibacterium acnes, perdiendo toda su eficacia clínica en menos de 4 a 8 semanas. Las guías de práctica clínica internacionales y del MINSAL establecen como regla de oro mandatoria que los antibióticos tópicos NUNCA deben prescribirse solos, sino formulados en combinación con Peróxido de Benzoilo (el cual es un agente oxidante queratolítico frente al cual las bacterias no pueden desarrollar resistencia) o con un retinoide tópico. Perla. El antibiótico tópico en acné jamás se da solo: siempre con peróxido de benzoilo.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.1.002',
      },
      {
        stem: 'Una mujer de 22 años con acné nódulo-quístico severo y cicatrizal refractario a múltiples ciclos de doxiciclina oral es evaluada para inicio de isotretinoína oral. ¿Cuál de las siguientes condiciones es un REQUISITO OBLIGATORIO ABSOLUTO antes y durante la prescripción de este medicamento?',
        options: [
          { id: 'A', text: 'Demostrar niveles séricos indetectables de andrógenos suprarrenales' },
          { id: 'B', text: 'Doble método anticonceptivo eficaz, dos pruebas de embarazo negativas previas y monitorización mensual del perfil lipídico y pruebas hepáticas' },
          { id: 'C', text: 'Realizar biopsia cutánea previa de un nódulo activo' },
          { id: 'D', text: 'Indicar tratamiento concomitante con tetraciclinas orales a dosis altas' },
          { id: 'E', text: 'Dieta hipercalórica rica en grasas saturadas para favorecer la absorción' },
        ],
        correcta: 'B',
        explicacion: 'La isotretinoína oral es uno de los teratógenos farmacológicos humanos más potentes conocidos, induciendo la embriopatía por retinoides (microtia, anomalías del SNC, defectos cardíacos conotruncales e hidrocefalia en > 30% de los fetos expuestos). Su prescripción en mujeres con potencial de fertilidad exige un programa de prevención de embarazo estricto: dos métodos anticonceptivos complementarios iniciados 1 mes antes de empezar el fármaco, dos pruebas de embarazo negativas previas y test de embarazo mensual durante y hasta 1 mes después del cese del tratamiento. Además, debido a sus efectos sistémicos, se deben controlar basal y periódicamente el perfil lipídico (riesgo de hipertrigliceridemia y pancreatitis) y las transaminasas hepáticas (hepatotoxicidad). Está contraindicado combinar con tetraciclinas (D) por riesgo de pseudotumor cerebri. Perla. Isotretinoína exige doble anticoncepción, test de embarazo y control lipídico/hepático.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.1.002',
      },
    ],
  },

  {
    id: 'derma-03',
    classId: 'derma-03',
    tier: 2,
    blockNum: 1,
    blockName: 'Semiología Cutánea, Acné, Rosácea & Alopecias',
    topicLabel: '16.3',
    title: 'Rosácea: Subtipos Clínicos y Manejo Médico',
    perfilCode: '6.01.1.003',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Sin garantía GES específica · Guía de Manejo Dermatológico',
    reconstrucciones: 'EUNACOM 2015 (Q#82) · EUNACOM Diciembre 2019 (Q#15)',
    frecuencia: 'Alta rentabilidad · Distinción cardinal con acné (la rosácea NO tiene comedones) y subtipos',
    diagram: flow('Algoritmo Diagnóstico y Terapéutico de la Rosácea', [
      { t: 'Paciente Adulto (30-50 años) con Eritema Centrofacial Persistente y Flushing', s: 'Paso 1: Confirmar AUSENCIA DE COMEDONES (la presencia de comedones define Acné)' },
      { k: 'split', q: '¿Subtipo Clínico: Telangiectásica vs Pápulo-Pustulosa vs Fimatosa?', s: 'Bifurcación según el componente vascular, inflamatorio o hipertrófico', ll: 'Eritematotelangiectásica / Pápulo-pustulosa', rl: 'Fimatosa (Rinofima) / Ocular',
        left: { t: 'Fotoprotección + Metronidazol / Doxiciclina', s: 'Eritema/flushing: brimonidina tópica · Pápulas/pústulas: Metronidazol tópico 0.75% o Doxiciclina oral', type: 'acc' },
        right: { t: 'Rinofima (Cirugía) / Rosácea Ocular (Tetraciclinas)', s: 'Hipertrofia sebácea nasal: resección quirúrgica/láser · Ocular: higiene palpebral y tetraciclinas', type: 'warn' },
        ll: 'formas inflamatorias y vasculares', rl: 'hipertrofia y compromiso ocular' },
      { t: 'CONTRAINDICACIÓN ABSOLUTA EN ROSÁCEA', s: 'PROHIBIDO ADMINISTRAR CORTICOIDES TÓPICOS: provocan mejoría transitoria engañosa seguida de rebote destructivo grave', type: 'dec', al: 'regla de oro de examen', from: 'left' },
    ]),
    contexto: 'La rosácea es una dermatosis inflamatoria crónica común del área centrofacial que afecta preferentemente a mujeres adultas de piel clara. En el examen, la perla semiológica cardinal e indiscutible es que la rosácea NUNCA TIENE COMEDONES. El uso de corticoides tópicos es un error médico gravísimo que desencadena una rosácea esteroidal de difícil control.',
    contentSections: [
      {
        subhead: '1. Factores Desencadenantes y Diferenciación con Acné',
        paragraphs: [
          'La rosácea combina disregulación vascular (hiperreactividad endotelial), alteración de la inmunidad innata (aumento de catelicidina LL-37) y colonización por el ácaro <em>Demodex folliculorum</em>.<br>' +
          '• <strong>Desencadenantes cardinales de crisis ("Flushing" o bochornos faciales):</strong> Exposición solar (radiación UV), calor ambiental, ingesta de alcohol, comidas picantes/condimentadas, bebidas calientes, cambios bruscos de temperatura y estrés emocional.<br>' +
          '• <strong>REGLA DE ORO DE EXAMEN: LA ROSÁCEA NO TIENE COMEDONES</strong>.<br>' +
          'La presencia de comedones abiertos o cerrados certifica el diagnóstico de Acné y excluye Rosácea.',
        ],
      },
      {
        subhead: '2. Los Cuatro Subtipos Clínicos Clásicos',
        paragraphs: [
          '1. <strong>Subtipo 1: Eritematotelangiectásica:</strong> Eritema persistente centrofacial (mejillas, nariz, frente y mentón) con episodios de flushing y <strong>telangiectasias finas visibles</strong>. Sensación de ardor o quemazón.<br>' +
          '2. <strong>Subtipo 2: Pápulo-pustulosa:</strong> Pápulas eritematosas inflamatorias y pequeñas pústulas sobre una base de eritema centrofacial persistente, <strong>sin comedones</strong>. Típica en mujeres de 30 a 50 años.<br>' +
          '3. <strong>Subtipo 3: Fimatosa:</strong> Engrosamiento cutáneo con hipertrofia de glándulas sebáceas y fibrosis, produciendo nódulos dérmicos lobulados. Típica en varones en la nariz: <strong>RINOFIMA</strong> (nariz globulosa, bulbosa y deformada).<br>' +
          '4. <strong>Subtipo 4: Ocular (hasta en 50% de los pacientes):</strong> Blefaritis, inyección conjuntival, sensación de arenilla/cuerpo extraño, chalazión recurrente y telangiectasias en el borde palpebral.',
        ],
      },
      {
        subhead: '3. Manejo Médico Escalonado y la "Rosácea Esteroidea"',
        paragraphs: [
          '• <strong>Medidas Generales Mandatorias:</strong> <strong>Fotoprotección solar FPS 50+ diaria</strong> de amplio espectro, emolientes suaves, evitar desencadenantes (alcohol, picantes, calor).<br>' +
          '• <strong>Tratamiento Médico por Subtipo:</strong><br>' +
          '- <em>Flushing y eritema vascular:</em> Brimonidina tópica (agonista alfa-2 que produce vasoconstricción temporal) o láser vascular/IPL.<br>' +
          '- <em>Pápulo-pustulosa leve:</em> <strong>Metronidazol tópico al 0.75% o 1%</strong> en gel/crema, o <strong>Ivermectina tópica al 1%</strong> (antiparasitario frente a <em>Demodex</em> y antiinflamatorio), o Ácido azelaico 15%.<br>' +
          '- <em>Pápulo-pustulosa moderada-severa o refractaria:</em> <strong>Doxiciclina oral a dosis antiinflamatoria (40 a 100 mg/día por 8 a 12 semanas)</strong>.<br>' +
          '- <em>Rinofima avanzado:</em> No responde a fármacos; requiere resección quirúrgica con bisturí, electrocirugía o láser ablativo de CO₂.<br>' +
          '• <strong>TRAMPA GRAVE DE EXAMEN: CONTRAINDICACIÓN DE CORTICOIDES TÓPICOS</strong>.<br>' +
          'Los corticoides tópicos producen vasoconstricción inicial que blanquea falsamente la piel, pero al retirarlos desencadenan un efecto rebote severo ("rosácea esteroidal" o dermatitis perioral) con telangiectasias monstruosas, atrofia cutánea y brote pustuloso masivo.',
        ],
      },
    ],
    table: {
      title: 'Subtipos Clínicos de Rosácea y Tratamiento de Primera Línea',
      headers: ['Subtipo', 'Hallazgo Clínico Predominante', 'Tratamiento Tópico', 'Tratamiento Oral / Procedimiento'],
      rows: [
        ['1. Eritematotelangiectásica', 'Eritema centrofacial fijo + flushing + telangiectasias', 'Brimonidina tópica / Fotoprotector 50+', 'Láser vascular / Luz Pulsada Intensa (IPL)'],
        ['2. Pápulo-pustulosa', 'Pápulas y pústulas centrofaciales SIN comedones', 'Metronidazol 0.75% / Ivermectina 1% tópica', 'Doxiciclina oral 100 mg/día (8 a 12 semanas)'],
        ['3. Fimatosa (Rinofima)', 'Engrosamiento nasal bulboso, poros dilatados', 'Ineficaz en estadios fibrosos avanzados', 'Resección quirúrgica / Láser CO₂ ablativo'],
        ['4. Ocular', 'Blefaritis, ardor, ojo seco, chalazión recurrente', 'Higiene de párpados + lágrimas artificiales', 'Doxiciclina oral a dosis bajas por 6 semanas'],
      ],
    },
    vignette: 'Mujer de 38 años de tez clara consulta por enrojecimiento persistente en mejillas y nariz de 1 año de evolución que empeora notoriamente al tomar café caliente, beber vino tinto o salir al sol. En el último mes han aparecido múltiples lesiones solevantadas en las mejillas. Al examen físico se aprecian telangiectasias centrofaciales, pápulas eritematosas y pústulas milimétricas en mejillas y dorso nasal. No se identifican comedones en ninguna zona del rostro.',
    explicacion: 'La presencia de eritema centrofacial persistente exacerbado por desencadenantes térmicos y dietéticos (calor, alcohol), con telangiectasias y lesiones pápulo-pustulosas, en ausencia estricta de comedones, establece el diagnóstico definitivo de Rosácea Pápulo-pustulosa (Subtipo 2). La conducta terapéutica de primera línea en atención primaria consiste en fotoprotección solar estricta, evitar desencadenantes y prescribir tratamiento tópico con Metronidazol al 0.75% en gel o Ivermectina tópica al 1% (o Doxiciclina oral si el cuadro es moderado a severo). Los corticoides tópicos están formalmente contraindicados.',
    keyPoints: [
      'La rosácea NUNCA TIENE COMEDONES (la presencia de comedones define acné).',
      'Desencadenantes clásicos: sol, calor, alcohol, comidas picantes y estrés.',
      'Subtipo 1 = eritema y telangiectasias; Subtipo 2 = pápulas y pústulas; Subtipo 3 = Rinofima.',
      'El tratamiento tópico de primera línea en la rosácea pápulo-pustulosa es Metronidazol o Ivermectina.',
      'Si es moderada-severa, se indica Doxiciclina oral a dosis antiinflamatorias.',
      'PROHIBICIÓN ABSOLUTA: JAMÁS usar corticoides tópicos en rosácea (inducen rosácea esteroidal severa).',
    ],
    questions: [
      {
        stem: 'Una mujer de 44 años consulta por un cuadro de 8 meses de evolución caracterizado por enrojecimiento de mejillas y nariz que empeora al ingerir alimentos calientes o tras exponerse al sol. Al examen físico se constatan telangiectasias centrofaciales y múltiples pápulas y pústulas inflamatorias dispersas sobre ambas mejillas. No se observan comedones abiertos ni cerrados. ¿Cuál es el tratamiento tópico de primera línea más adecuado?',
        options: [
          { id: 'A', text: 'Clobetasol crema al 0.05% cada 12 horas' },
          { id: 'B', text: 'Metronidazol en gel al 0.75% o ivermectina tópica al 1%' },
          { id: 'C', text: 'Adapaleno gel al 0.1% en monoterapia' },
          { id: 'D', text: 'Mupirocina ungüento al 2%' },
          { id: 'E', text: 'Ácido salicílico al 10% en solución alcohólica' },
        ],
        correcta: 'B',
        explicacion: 'El cuadro de eritema centrofacial persistente con telangiectasias y pápulo-pústulas en ausencia de comedones en una mujer adulta de 44 años corresponde a una Rosácea Pápulo-pustulosa. El tratamiento tópico de primera línea de elección avalado por la evidencia clínica es el Metronidazol tópico al 0.75% o la Ivermectina tópica al 1% en crema (que actúa contra el ácaro Demodex y reduce la inflamación). El clobetasol (A) es un corticoide ultrapotente que está terminantemente contraindicado en rosácea porque provoca una rosácea esteroidea de rebote catastrófico. El adapaleno (C) es para acné y produciría excesiva irritación en la piel sensible con rosácea. Perla. Metronidazol o ivermectina tópica son la primera línea en rosácea pápulo-pustulosa.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.1.003',
      },
      {
        stem: '¿Cuál de los siguientes hallazgos al examen físico cutáneo permite DESCARTAR con mayor certeza el diagnóstico de rosácea y orientar definitivamente hacia acné vulgar?',
        options: [
          { id: 'A', text: 'Presencia de eritema en la región malar' },
          { id: 'B', text: 'Presencia de comedones abiertos ("puntos negros") o cerrados' },
          { id: 'C', text: 'Presencia de pústulas foliculares confluentes' },
          { id: 'D', text: 'Presencia de telangiectasias centrofaciales' },
          { id: 'E', text: 'Empeoramiento de las lesiones con la ingesta de alcohol' },
        ],
        correcta: 'B',
        explicacion: 'El criterio semiológico cardinal para el diagnóstico diferencial entre acné vulgar y rosácea es la presencia o ausencia de comedones. El comedón (abierto o cerrado) es la lesión elemental primaria y patognomónica del acné vulgar (originado por la hiperqueratinización infundibular folicular). En cambio, la rosácea es una enfermedad con disregulación vascular e inflamatoria que NUNCA cursa con formación de comedones. Si un paciente presenta pápulas, pústulas y eritema facial pero se constatan comedones al examen físico, el diagnóstico es Acné Vulgar y no Rosácea. Trampa. La rosácea puede tener pápulas, pústulas y eritema idénticos al acné, pero NUNCA comedones.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.1.003',
      },
    ],
  },

  {
    id: 'derma-04',
    classId: 'derma-04',
    tier: 2,
    blockNum: 1,
    blockName: 'Semiología Cutánea, Acné, Rosácea & Alopecias',
    topicLabel: '16.4',
    title: 'Alopecias: Androgenética, Areata y Efluvio Telógeno',
    perfilCode: '6.01.1.008',
    dx: 'Específico', tx: 'Inicial', seg: 'Completo',
    ges: 'Sin garantía GES específica · Guía de Manejo Tricológico',
    reconstrucciones: 'EUNACOM 2016 (Q#77) · EUNACOM Diciembre 2020 (Q#49)',
    frecuencia: 'Alta · Diferenciación entre alopecia cicatricial vs no cicatricial y manejo farmacológico',
    diagram: flow('Algoritmo Diagnóstico y Diferencial de las Alopecias en APS', [
      { t: 'Paciente que Consulta por Pérdida de Cabello o Zonas Alopécicas', s: 'Paso 1: Examinar cuero cabelludo buscando orificios foliculares (Cicatricial vs No Cicatricial)' },
      { k: 'split', q: '¿Orificios Foliculares Conservados (No Cicatricial)?', s: 'Diferenciación entre alopecia cicatricial irreversible y no cicatriciales reversibles', ll: 'Orificios Foliculares Presentes (No Cicatricial)', rl: 'Piel lisa brillante sin folículos (Cicatricial)',
        left: { t: 'Patrón Androgenético vs Areata en Placa vs Efluvio Difuso', s: 'Androgenética: miniaturización · Areata: placas lisas con pelos en "!" · Efluvio: caída difusa post-estrés', type: 'acc' },
        right: { t: 'Alopecia Cicatricial Irreversible (Urgente)', s: 'Lupus discoide, liquen plano pilar · Fibrosis folicular destructiva permanente · Derivar a biopsia', type: 'warn' },
        ll: 'alopecias no cicatriciales comunes', rl: 'alopecia cicatricial destructiva' },
      { t: 'Tratamiento Médico Específico No Cicatricial', s: 'Androgenética: Minoxidil tópico + Finasteride oral · Areata: Corticoides intralesionales (triamcinolona)', type: 'dec', al: 'terapia dirigida', from: 'left' },
    ]),
    contexto: 'La alopecia es un motivo de gran preocupación para los pacientes. La primera tarea del médico es verificar si la piel del cuero cabelludo conserva los orificios foliculares (alopecia no cicatricial, potencialmente recuperable) o si hay atrofia y fibrosis (alopecia cicatricial irreversible). Entre las no cicatriciales, la androgenética, la areata y el efluvio telógeno dominan la práctica.',
    contentSections: [
      {
        subhead: '1. Cicatriciales vs No Cicatriciales: La Gran División',
        paragraphs: [
          '• <strong>Alopecias Cicatriciales (Destructivas e Irreversibles):</strong> Existe un proceso inflamatorio destructivo que arrasa el folículo piloso y sus células madre de la protuberancia, reemplazándolo por tejido fibroso cicatrizal. Al examen: <strong>piel lisa, brillante, atrófica, con DESAPARICIÓN TOTAL DE LOS ORIFICIOS FOLICULARES</strong>. El pelo perdido nunca vuelve a crecer. Causas: <strong>Lupus eritematoso discoide</strong>, Liquen plano pilar, foliculitis decalvante. Requieren biopsia y tratamiento inmunosupresor precoz.<br>' +
          '• <strong>Alopecias No Cicatriciales (Potencialmente Reversibles):</strong> El folículo piloso permanece vivo e íntegro dentro de la dermis; <strong>los orificios foliculares están CONSERVADOS</strong>. El pelo puede volver a crecer si se elimina el factor causal.',
        ],
      },
      {
        subhead: '2. Alopecia Androgenética (Calvicie Común)',
        paragraphs: [
          'Es la causa más prevalente en ambos sexos. Se debe a una predisposición genética poligénica combinada con la acción de los andrógenos, específicamente la <strong>Dihidrotestosterona (DHT)</strong>, sintetizada por la enzima <strong>5-alfa reductasa tipo 2</strong>.<br>' +
          '• La DHT acorta la fase de anágeno y produce la <strong>miniaturización progresiva de los folículos</strong>, transformando pelos terminales gruesos en vellos finos y despigmentados.<br>' +
          '• <strong>Patrón masculino (escala de Hamilton-Norwood):</strong> Retroceso de la línea de implantación frontotemporal ("entradas") y pérdida en la coronilla (vértice).<br>' +
          '• <strong>Patrón femenino (escala de Ludwig):</strong> Pérdida difusa de densidad en el vértex con ensanchamiento de la raya central ("signo del árbol de navidad"), <strong>respetando la línea de implantación frontal anterior</strong>.<br>' +
          '• <strong>Tratamiento Médico de Primera Línea:</strong><br>' +
          '- <strong>Minoxidil tópico al 2% o 5%</strong> (solución o espuma): Vasodilatador que estimula la fase de anágeno y aumenta el calibre folicular.<br>' +
          '- <strong>Finasteride oral 1 mg/día</strong> (o Dutasteride): Inhibidor de la 5-alfa reductasa que reduce los niveles de DHT en un 70%. Frena la caída y recupera cabello en más del 80% de los varones. <strong>CONTRAINDICACIÓN:</strong> Mujeres en edad fértil por riesgo de feminización de fetos masculinos (teratogenicidad).',
        ],
      },
      {
        subhead: '3. Alopecia Areata y Efluvio Telógeno',
        paragraphs: [
          '• <strong>Alopecia Areata:</strong> Enfermedad autoinmune mediada por linfocitos T CD8+ que atacan los folículos en fase de anágeno.<br>' +
          '- <em>Clínica patognomónica:</em> Una o múltiples <strong>placas alopécicas redondeadas u ovales, lisas, de piel completamente normal sin descamación ni eritema</strong>.<br>' +
          '- <em>Signo patognomónico:</em> <strong>PELOS EN SIGNO DE EXCLAMACIÓN ("pelos caducos")</strong> en el borde activo de la placa (pelos cortos fracturados más delgados en su base).<br>' +
          '- Formas severas: Alopecia total (pérdida de todo el cabello del cuero cabelludo) y Alopecia universal (pérdida de todo el vello corporal: cejas, pestañas, axilar y púbico). Frecuentemente asociada a tiroiditis autoinmune o vitíligo.<br>' +
          '- <em>Tratamiento:</em> <strong>Corticoides intralesionales (acetónido de triamcinolona)</strong> infiltrados en la placa, corticoides tópicos de alta potencia o inhibidores de JAK sistémicos (baricitinib).<br>' +
          '• <strong>Efluvio Telógeno Agudo:</strong> Paso prematuro y sincrónico de gran cantidad de folículos anágenos a la fase de telógeno (fase de caída).<br>' +
          '- <em>Gatillante:</em> Aparece <strong>2 a 3 meses después de un estresor fisiológico intenso</strong> (parto puerperal, cirugía mayor, sepsis, infección febril grave como COVID-19, pérdida de peso brusca o déficit férrico severo).<br>' +
          '- <em>Clínica:</em> <strong>Caída masiva y difusa de cabello al peinarse o lavarse</strong>, con prueba de tracción ("pull test") fuertemente positiva en todo el cuero cabelludo. Es completamente benigno y autolimitado; se resuelve espontáneamente en 6 meses al cesar la causa.',
        ],
      },
    ],
    table: {
      title: 'Diagnóstico Diferencial: Alopecia Androgenética vs Areata vs Efluvio Telógeno',
      headers: ['Característica', 'Alopecia Androgenética', 'Alopecia Areata', 'Efluvio Telógeno'],
      rows: [
        ['Mecanismo fisiopatológico', 'Miniaturización folicular por Dihidrotestosterona', 'Ataque autoinmune mediado por linfocitos T', 'Paso sincrónico a telógeno tras estrés agudo'],
        ['Patrón de distribución', 'Entradas frontotemporales y coronilla (Ludwig fem)', 'Placas alopécicas redondeadas bien delimitadas', 'Caída DIFUSA de todo el cuero cabelludo'],
        ['Aspecto de la piel', 'Normal, con orificios foliculares y vellos finos', 'Piel completamente lisa, limpia, sin escama', 'Normal, sin placas circunscritas'],
        ['Signo semiológico clave', 'Miniaturización progresiva en dermoscopía', 'PELOS EN SIGNO DE EXCLAMACIÓN en el borde', 'Pull test positivo difuso (> 10 pelos con bulbo)'],
        ['Asociación sistémica', 'Síndrome metabólico, herencia poligénica', 'Tiroiditis de Hashimoto, vitíligo, atopia', 'Parto, cirugía, fiebre alta 2-3 meses antes'],
        ['Tratamiento de elección', 'Minoxidil tópico 5% + Finasteride oral 1 mg', 'Corticoides intralesionales (Triamcinolona)', 'Tranquilizar al paciente; resolución espontánea'],
      ],
    },
    vignette: 'Hombre de 28 años consulta muy alarmado porque hace 2 semanas descubrió mientras se peinaba una zona sin pelo en la región parietal derecha. Al examen físico se aprecia una placa alopécica circular única de 4 cm de diámetro, con piel completamente lisa, sin eritema, descamación ni cicatrización. Al traccionar suavemente en los bordes de la lesión se desprenden varios pelos cortos adelgazados en su extremo proximal que adoptan forma de signo de exclamación.',
    explicacion: 'La presencia de una placa alopécica redondeada solitaria de piel lisa sin signos inflamatorios ni descamación, con pelos caducos en "signo de exclamación" en la periferia activa, es diagnóstica de Alopecia Areata. Es una enfermedad autoinmune con indemnidad del folículo piloso (no cicatricial). La conducta terapéutica de primera línea en atención primaria para placas localizadas es la infiltración intralesional de corticoides (acetónido de triamcinolona) o la aplicación de corticoides tópicos de muy alta potencia (clobetasol), junto con tamizaje de tiroiditis autoinmune asociada.',
    keyPoints: [
      'Alopecia no cicatricial = orificios foliculares conservados (potencialmente reversible).',
      'Alopecia cicatricial = piel lisa y brillante sin orificios foliculares (irreversible de por vida).',
      'Alopecia androgenética = miniaturización mediada por dihidrotestosterona; responde a Finasteride y Minoxidil.',
      'El Finasteride está contraindicado en mujeres en edad fértil por teratogenicidad (feminización fetal).',
      'Alopecia areata = placas alopécicas redondas con pelos en "signo de exclamación"; responde a corticoides intralesionales.',
      'Efluvio telógeno = caída difusa 2 a 3 meses post-estrés (parto, fiebre alta, cirugía); se resuelve solo.',
    ],
    questions: [
      {
        stem: 'Un hombre de 24 años consulta por caída progresiva de cabello en las regiones temporales y en la coronilla desde hace 2 años, con patrón idéntico al de su padre. Al examen se constata retroceso de la línea de implantación frontotemporal y adelgazamiento marcado del cabello en el vértex, observándose pelos muy finos y cortos junto a los orificios foliculares conservados. ¿Cuál es el fármaco oral de elección para frenar la progresión y su mecanismo de acción?',
        options: [
          { id: 'A', text: 'Prednisona oral; inmunosupresión de linfocitos T periféricos' },
          { id: 'B', text: 'Finasteride oral; inhibición de la enzima 5-alfa reductasa tipo 2 disminuyendo la síntesis de dihidrotestosterona' },
          { id: 'C', text: 'Ketoconazol oral; inhibición de la síntesis de ergosterol' },
          { id: 'D', text: 'Espironolactona oral en dosis altas' },
          { id: 'E', text: 'Metotrexato oral semanal' },
        ],
        correcta: 'B',
        explicacion: 'El cuadro corresponde a una Alopecia Androgenética masculina (calvicie común en patrón de Hamilton-Norwood). Su fisiopatología radica en la acción de la dihidrotestosterona (DHT) sobre receptores androgénicos de folículos susceptibles, provocando su miniaturización progresiva. El fármaco oral de primera línea de elección es el Finasteride (1 mg/día), un inhibidor competitivo selectivo de la enzima 5-alfa reductasa tipo 2, que reduce los niveles tisulares y séricos de DHT en aproximadamente un 70%, deteniendo la caída en más del 85% de los pacientes y estimulando el engrosamiento del cabello miniaturizado. Perla. Finasteride oral inhibe la 5-alfa reductasa y frena la alopecia androgenética.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.1.008',
      },
      {
        stem: 'Una mujer de 30 años consulta muy angustiada porque desde hace 3 semanas se le cae el cabello en forma masiva cada vez que se peina o ducha, encontrando puñados de pelos en la almohada. Refiere que hace 3 meses dio a luz a su primer hijo por cesárea sin incidentes. Al examen físico no se aprecian placas alopécicas circunscritas; el cuero cabelludo es normal y la prueba de tracción ("pull test") es positiva difusa en toda la cabeza, desprendiéndose pelos con bulbo telógeno intacto. ¿Cuál es el diagnóstico más probable y la conducta médica indicada?',
        options: [
          { id: 'A', text: 'Alopecia areata universal incipiente; hospitalizar para pulsos de metilprednisolona' },
          { id: 'B', text: 'Efluvio telógeno agudo puerperal; tranquilizar a la paciente y explicar que el cuadro es transitorio y se recuperará espontáneamente' },
          { id: 'C', text: 'Tiña del cuero cabelludo (Tinea capitis); indicar griseofulvina oral' },
          { id: 'D', text: 'Lupus discoide cutáneo; indicar biopsia en sacabocados urgente' },
          { id: 'E', text: 'Alopecia androgenética femenina severa; indicar finasteride oral inmediato' },
        ],
        correcta: 'B',
        explicacion: 'El efluvio telógeno agudo (específicamente el efluvio postparto o telogen effluvium) se produce por la caída brusca de los niveles de estrógenos placentarios que mantenían a los cabellos artificialmente en fase de anágeno durante el embarazo. Esto precipita el paso masivo y sincronizado de gran porcentaje de folículos a la fase de telógeno (fase de reposo y caída), manifestándose clínicamente 2 a 3 meses después del parto como una caída difusa y alarmante pero sin pérdida de orificios foliculares ni formación de placas circunscritas. El cuadro es enteramente benigno y autolimitado: el ciclo capilar se normaliza y el cabello se repuebla de forma completa y espontánea en los siguientes 6 meses. La conducta correcta es descartar ferropenia, tranquilizar a la madre y no indicar tratamientos invasivos. Perla. Caída difusa masiva de pelo 2-3 meses postparto es efluvio telógeno fisiológico.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.1.008',
      },
    ],
  },
];

module.exports = {
  bloque1,
  flow,
};
