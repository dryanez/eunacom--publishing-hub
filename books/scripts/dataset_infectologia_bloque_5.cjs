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

const bloque5 = [
  {
    id: 'inf-20',
    classId: 'infecto-20',
    tier: 1,
    blockNum: 5,
    blockName: 'Infecciones Comunitarias, Exantemas y Huésped Inmunocomprometido',
    topicLabel: '5.1',
    title: 'Infecciones de Piel Comunitarias: Celulitis, Erisipela y Foliculitis',
    perfilCode: '1.04.1.006',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantías Explícitas en Salud: Manejo Ambulatorio de Infecciones de Piel en APS',
    reconstrucciones: 'EUNACOM 2024 (Q#08) · EUNACOM 2022 (Q#76) · EUNACOM 2019 (Q#31)',
    frecuencia: 'Máxima rentabilidad · diagnóstico diferencial entre celulitis (S. aureus) y erisipela (S. pyogenes)',
    svg: null, algoTitle: null,
    diagram: null,
    contexto: 'Las infecciones bacterianas de piel y partes blandas son motivo de consulta diario en atención primaria y urgencias. En el EUNACOM se evalúa de manera constante la discriminación clínica entre erisipela (superficial, bordes netos sobreelevados, Streptococcus pyogenes) y celulitis (profunda, bordes mal definidos, Staphylococcus aureus), así como la elección del antibiótico antiestafilocócico de primera línea.',
    contentSections: [
      {
        subhead: '1. Erisipela vs Celulitis: fisiopatología y profundidad anatómica',
        paragraphs: [
          '• <strong>Erisipela:</strong> infección bacteriana superficial que compromete la <strong>dermis superior y los vasos linfáticos superficiales</strong>. El agente causal casi exclusivo (> 90%) es <em>Streptococcus pyogenes</em> (Estreptococo betahemolítico grupo A). Clínicamente se caracteriza por una placa eritematosa de color rojo brillante, caliente, indurada ("en piel de naranja"), con <strong>BORDES NETOS BIEN DELIMITADOS Y SOBREELEVADOS</strong> que la diferencian claramente de la piel sana. Es de inicio súbito, con fiebre alta y calofríos precoces. Localizaciones típicas: extremidades inferiores y cara (mejillas en alas de mariposa).<br>' +
          '• <strong>Celulitis:</strong> infección más profunda que compromete la <strong>dermis profunda y el tejido celular subcutáneo</strong>. Los agentes etiológicos son <em>Staphylococcus aureus</em> (meticilino-sensible o resistente SAMR) y <em>Streptococcus pyogenes</em>. Clínicamente se presenta con eritema, calor local y edema con fóvea, pero con <strong>BORDES DIFUSOS, MAL DELIMITADOS Y NO SOBREELEVADOS</strong>. Suele haber una puerta de entrada identificable (micosis interdigital por tinea pedis, úlcera venosa, traumatismo menor o picadura).',
        ],
      },
      {
        subhead: '2. Infecciones del folículo piloso: Foliculitis, Forúnculo y Ántrax estafilocócico',
        paragraphs: [
          'Producidas casi siempre por <em>Staphylococcus aureus</em>:<br>' +
          '• <strong>Foliculitis:</strong> inflamación superficial circunscrita al ostium folicular con pequeña pústula indolora centrada en un vello. Tratamiento: aseo local con jabón de clorhexidina o mupirocina tópica al 2%. (Si antecedente de baño en hidromasaje o piscina temperada pensar en <em>Pseudomonas aeruginosa</em> "foliculitis de las tinas calientes", autolimitada).<br>' +
          '• <strong>Forúnculo:</strong> nódulo inflamatorio profundo, muy doloroso y eritematoso que involucra todo el folículo piloso y el tejido perifolicular adyacente, con posterior necrosis central y salida de pus ("clavo"). Tratamiento: calor local y drenaje espontáneo o quirúrgico; antibióticos sistémicos solo si hay celulitis perilesional o signos sistémicos.<br>' +
          '• <strong>Carbunco estafilocócico / Ántrax benigno (furunculosis múltiple):</strong> conglomerado coalescente de múltiples forúnculos interconectados por tractos fistulosos en el tejido subcutáneo, típicamente en la nuca o espalda de pacientes diabéticos. Exige drenaje quirúrgico y antibióticos EV.',
        ],
      },
      {
        subhead: '3. Tratamiento antimicrobiano: del manejo ambulatorio a la hospitalización',
        paragraphs: [
          '<strong>Regla de oro de delimitación:</strong> ante toda sospecha de celulitis o erisipela, se debe <strong>delimitar con lápiz marcador indeleble el borde del eritema</strong> para monitorizar objetivamente la respuesta clínica a las 24 y 48 horas.<br>' +
          '<strong>Esquemas ambulatorios (vía oral por 7 a 10 días):</strong><br>' +
          '• <strong>Cefadroxilo oral (500 mg c/12h) o Cefalexina (500 mg c/6h) o Flucloxacilina (500 mg c/8h):</strong> fármacos de primera línea en Chile (cubren tanto S. aureus como S. pyogenes).<br>' +
          '• <strong>Alergia a betalactámicos:</strong> Clindamicina (300 mg c/8h oral) o Cotrimoxazol forte (1 comp c/12h oral si sospecha de SAMR comunitario).<br>' +
          '<strong>Criterios de hospitalización y terapia endovenosa (Cefazolina 1 g c/8h EV o Cloxacilina 1-2 g c/4-6h EV):</strong> toxicidad sistémica (SIRS/sepsis), progresión rápida a pesar de antibióticos orales por 48 horas, comorbilidades descompensadas (diabetes, cirrosis, inmunosupresión) o celulitis facial por riesgo de trombosis del seno cavernoso.',
        ],
      },
    ],
    table: {
      title: 'Erisipela vs Celulitis: Cuadro Comparativo EUNACOM',
      headers: ['Característica', 'Erisipela', 'Celulitis'],
      rows: [
        ['Profundidad anatómica', 'Dermis superficial y linfáticos', 'Dermis profunda y tejido celular subcutáneo'],
        ['Etiología principal', 'Streptococcus pyogenes (> 90%)', 'Staphylococcus aureus y S. pyogenes'],
        ['Bordes de la lesión', 'BORDES NETOS, bien delimitados y sobreelevados', 'BORDES DIFUSOS, irregulares y mal definidos'],
        ['Inicio de los síntomas', 'Brusco y agudo, con fiebre alta precoz', 'Insidioso y progresivo en 24 a 48 horas'],
        ['Puerta de entrada', 'A menudo imperceptible o maceración retroauricular', 'Tinea pedis, úlcera, laceración cutánea visible'],
        ['Tratamiento oral 1ª línea', 'Penicilina oral o Cefadroxilo / Flucloxacilina', 'Cefadroxilo o Cefalexina o Flucloxacilina'],
      ],
    },
    vignette: 'Mujer de 58 años, portadora de linfedema crónico en extremidad inferior derecha secundario a safenectomía, consulta por cuadro de inicio súbito hace 12 horas de calofríos intensos, fiebre de 39 °C y dolor ardiente en la pierna afectada. Al examen físico se aprecia en la cara anterior de la pierna derecha una placa eritematosa extensa de color rojo brillante, indurada y dolorosa, con bordes perfectamente nítidos y sobreelevados que la diferencian con claridad de la piel sana adyacente. No se palpan colecciones ni fluctuación.',
    explicacion: 'El cuadro clínico de placa eritematosa de color rojo fuego, indurada y con bordes netos, claramente delimitados y sobreelevados, de inicio brusco con fiebre alta y calofríos en una paciente con factor predisponente clásico (linfedema), es patognomónico de Erisipela por Streptococcus pyogenes. La conducta médica inmediata es delimitar el borde con marcador, iniciar reposo con extremidad elevada y administrar tratamiento antimicrobiano antiestreptocócico: en pacientes ambulatorios Cefadroxilo oral (o Penicilina V o Flucloxacilina); si presenta mala tolerancia oral o compromiso del estado general, se indica hospitalización para Cefazolina o Penicilina G sódica EV.',
    keyPoints: [
      'Erisipela: dermis superficial; Streptococcus pyogenes; placa rojo vivo con BORDES NETOS SOBREELEVADOS.',
      'Celulitis: tejido celular subcutáneo profundo; S. aureus y S. pyogenes; eritema con BORDES DIFUSOS Y MAL DELIMITADOS.',
      'Siempre buscar la puerta de entrada: tinea pedis interdigital (intertrigo micótico) es la causa más común de celulitis de extremidades.',
      'Conducta obligatoria: marcar con lápiz los bordes de la lesión para evaluar progresión o regresión objetiva.',
      'Tratamiento oral de elección en Chile: Cefadroxilo (o Cefalexina o Flucloxacilina) por 7 a 10 días.',
      'Si se sospecha SAMR comunitario (abscesos, forúnculos recurrentes, fracaso de betalactámicos): usar Cotrimoxazol o Clindamicina.',
    ],
    questions: [
      {
        stem: 'Una mujer de 64 años consulta por fiebre de 38.6 °C y dolor en la pierna izquierda. Al examen se observa una placa eritematosa caliente en la cara anteromedial de la pierna, con bordes sobreelevados, nítidos y bien delimitados respecto a la piel sana circundante. ¿Cuál es el microorganismo causal más probable?',
        options: [
          { id: 'A', text: 'Pseudomonas aeruginosa' },
          { id: 'B', text: 'Streptococcus pyogenes' },
          { id: 'C', text: 'Staphylococcus epidermidis' },
          { id: 'D', text: 'Clostridium perfringens' },
          { id: 'E', text: 'Escherichia coli' },
        ],
        correcta: 'B',
        explicacion: 'La presencia de una placa eritematosa con bordes nítidos, claramente delimitados y sobreelevados es la descripción clásica de la erisipela, la cual es producida en más del 90% de los casos por Streptococcus pyogenes (estreptococo betahemolítico del grupo A). La celulitis por S. aureus o Gram negativos produce bordes planos y difusos.',
        recTag: 'Banco de Preguntas Oficial · Infección de Piel y Partes Blandas',
      },
      {
        stem: '¿Cuál de los siguientes esquemas antimicrobianos por vía oral es el de primera línea para el tratamiento ambulatorio de una celulitis no complicada de extremidad inferior en un paciente adulto sin alergias?',
        options: [
          { id: 'A', text: 'Ciprofloxacino 500 mg cada 12 horas' },
          { id: 'B', text: 'Cefadroxilo 500 mg cada 12 horas' },
          { id: 'C', text: 'Metronidazol 500 mg cada 8 horas' },
          { id: 'D', text: 'Gentamicina oral 80 mg cada 8 horas' },
          { id: 'E', text: 'Doxiciclina 100 mg cada 24 horas' },
        ],
        correcta: 'B',
        explicacion: 'En la celulitis comunitaria no complicada, los microorganismos más frecuentes son Staphylococcus aureus meticilino-sensible y Streptococcus pyogenes. El tratamiento oral de primera línea de elección en Chile son las cefalosporinas de primera generación (Cefadroxilo 500 mg c/12h o Cefalexina 500 mg c/6h) o las penicilinas isoxazólicas (Flucloxacilina 500 mg c/8h), por su excelente perfil de eficacia y tolerancia.',
        recTag: 'Banco de Preguntas Oficial · Infección de Piel y Partes Blandas',
      },
    ],
  },
  {
    id: 'inf-21',
    classId: 'infecto-21',
    tier: 2,
    blockNum: 5,
    blockName: 'Infecciones Comunitarias, Exantemas y Huésped Inmunocomprometido',
    topicLabel: '5.2',
    title: 'Síndrome Mononucleósico y Complejo TORCH',
    perfilCode: '1.04.1.025',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud: Tamizaje Prenatal Sífilis y Chagas · Red Nacional de Salud',
    reconstrucciones: 'EUNACOM 2023 (Q#102) · EUNACOM 2021 (Q#45) · EUNACOM 2019 (Q#88)',
    frecuencia: 'Alta rentabilidad · erupción por aminopenicilinas (amoxicilina) en mononucleosis y serología TORCH',
    svg: null, algoTitle: null,
    diagram: null,
    contexto: 'El Síndrome Mononucleósico es la causa clásica de faringoamigdalitis exudativa refractaria con adenopatías y esplenomegalia en jóvenes. En el EUNACOM se evalúa de manera casi obligada el exantema inducido por amoxicilina (que simula alergia), la serología para Virus Epstein-Barr (anticuerpos heterófilos / IgM VCA) y el diagnóstico diferencial con CMV, Toxoplasma y Síndrome Retroviral Agudo (VIH primario).',
    contentSections: [
      {
        subhead: '1. Mononucleosis Infecciosa por Virus Epstein-Barr (VEB)',
        paragraphs: [
          'El Virus Epstein-Barr (herpesvirus tipo 4) se transmite a través de la saliva ("enfermedad del beso"). Infecta los linfocitos B en la orofaringe a través del receptor CD21, induciendo su proliferación desregulada.',
          'La respuesta inmune del huésped es ejecutada masivamente por <strong>linfocitos T CD8+ citotóxicos reactivos</strong>, los cuales se observan en el hemograma como los característicos <strong>Linfocitos Atípicos o de Downey (> 10%</strong> del frotis).',
          '<strong>Tríada clínica cardinal:</strong> (1) Fiebre alta prolongada (1 a 3 semanas), (2) <strong>Faringoamigdalitis exudativa con placas blanquecinas bilaterales indistinguible clínicamente de la estreptocócica</strong>, y (3) <strong>Poliadenopatías cervicales posteriores simétricas y dolorosas</strong> (a diferencia del estreptococo que compromete la cadena anterior submandibular). Se asocia a <strong>Esplenomegalia</strong> (50-60%) y hepatomegalia con leve elevación de transaminasas.',
          '<strong>La trampa clásica del EUNACOM (Erupción por Aminopenicilinas):</strong> si un paciente con mononucleosis es erróneamente diagnosticado de amigdalitis estreptocócica y tratado con <strong>Amoxicilina o Ampicilina</strong>, el 90-100% de los casos desarrolla a los 5-7 días un <strong>exantema maculopapular eritematoso difuso pruriginoso</strong>. Este fenómeno es una reacción inmunológica mediada por inmunocomplejos transitoria; <em>NO constituye una verdadera alergia a betalactámicos</em>.',
        ],
      },
      {
        subhead: '2. Diagnóstico diferencial del Síndrome Mononucleósico',
        paragraphs: [
          '• <strong>Citomegalovirus (CMV):</strong> es la <strong>causa número uno de síndrome mononucleósico con anticuerpos heterófilos NEGATIVOS</strong>. Cursa típicamente como un "síndrome febril prolongado aislado (tifoideo)" en adultos jóvenes, con escasa o nula faringitis y mínimas adenopatías.',
          '• <strong>Toxoplasmosis aguda:</strong> predomina el compromiso ganglionar cervical indoloro aislado en paciente expuesto a gatos o ingesta de carnes crudas.',
          '• <strong>Síndrome Retroviral Agudo (VIH primario):</strong> se presenta 2 a 4 semanas tras la exposición sexual de riesgo con fiebre, faringitis, adenopatías y <strong>úlceras mucocutáneas orales o genitales muy dolorosas</strong>.',
        ],
      },
      {
        subhead: '3. Complejo TORCH Perinatal',
        paragraphs: [
          'Acrónimo de infecciones congénitas perinatales: <strong>T</strong>oxoplasma, <strong>O</strong>tros (Sífilis, Chagas, Varicela, Parvovirus B19), <strong>R</strong>ubéola, <strong>C</strong>itomegalovirus y <strong>H</strong>erpes simple.',
          'Comparten clínica neonatal: restricción del crecimiento intrauterino (RCIU), hepatoesplenomegalia, ictericia a predominio directo, microcefalia y púrpura trombocitopénica ("aspecto en muffin de arándanos").',
          '<strong>Hallazgos patognomónicos de memoria EUNACOM:</strong><br>' +
          '• <strong>CMV congénito:</strong> <strong>calcificaciones periventriculares</strong>, microcefalia y es la causa #1 de <strong>hipoacusia neurosensorial congénita no hereditaria</strong>.<br>' +
          '• <strong>Toxoplasmosis congénita (Tétrada de Sabin):</strong> <strong>calcificaciones intracraneales difusas</strong>, hidrocefalia, coriorretinitis y convulsiones.<br>' +
          '• <strong>Rubéola congénita (Tríada de Gregg):</strong> <strong>catarata congénita</strong>, hipoacusia neurosensorial y cardiopatía congénita (<strong>Ductus Arterioso Persistente - DAP</strong>).',
        ],
      },
    ],
    table: {
      title: 'Diagnóstico Diferencial Etiológico del Síndrome Mononucleósico',
      headers: ['Etiología', 'Anticuerpos Heterófilos', 'Faringitis y Adenopatías', 'Perla Distintiva de Examen'],
      rows: [
        ['Virus Epstein-Barr (VEB)', 'POSITIVOS (Paul-Bunnell / Monotest)', 'Faringitis exudativa + ganglios posteriores', 'Exantema tras recibir Amoxicilina (95%)'],
        ['Citomegalovirus (CMV)', 'NEGATIVOS', 'Faringitis mínima o ausente', 'Causa #1 mononucleosis heterófilos (-)'],
        ['Toxoplasma gondii', 'NEGATIVOS', 'Adenopatías cervicales no dolorosas', 'Exposición a heces de gatos o carnes crudas'],
        ['VIH primario (SRA)', 'NEGATIVOS', 'Faringitis moderada + adenopatías', 'Úlceras mucosas orales dolorosas + rash'],
      ],
    },
    vignette: 'Joven de 19 años consulta por fiebre de 38.5 °C, dolor faríngeo intenso y astenia de 6 días. Fue evaluado en un centro ambulatorio hace 3 días donde se le diagnosticó amigdalitis aguda y se le indicó Amoxicilina oral 500 mg cada 8 horas. Tras la cuarta dosis presenta un exantema maculopapular eritematoso difuso no pruriginoso en tronco y extremidades. Al examen: faringe congestiva con grandes exudados blanquecinos amigdalinos confluentes, múltiples adenopatías laterocervicales posteriores y submandibulares sensibles de 2 cm, y bazo palpable a 3 cm bajo el reborde costal.',
    explicacion: 'El cuadro corresponde a un Síndrome Mononucleósico por Virus Epstein-Barr (VEB) con aparición del clásico exantema post-amoxicilina. La combinación de faringoamigdalitis exudativa con adenopatías de la cadena cervical posterior y esplenomegalia es el patrón típico de la mononucleosis infecciosa. La administración de aminopenicilinas en pacientes con VEB gatilla casi invariablemente un rash maculopapular autolimitado que no constituye una verdadera alergia anafiláctica a la penicilina. La conducta correcta es suspender la amoxicilina, solicitar hemograma (que revelará linfocitos atípicos > 10%) y prueba de anticuerpos heterófilos (Monotest) o serología IgM anti-VCA, e indicar reposo relativo estricto por 3 a 4 semanas sin deportes de contacto por el riesgo vital de rotura esplénica traumática.',
    keyPoints: [
      'Mononucleosis por VEB: faringitis con exudado + adenopatías cervicales posteriores + esplenomegalia.',
      'Laboratorio: leucocitosis con predominio mononuclear y LINFOCITOS ATÍPICOS > 10% en el frotis.',
      'Exantema maculopapular tras recibir Amoxicilina: inducido por VEB en > 90%; no es alergia permanente.',
      'Recomendación crítica: PROHIBIDOS deportes de contacto por 3 a 4 semanas por riesgo de rotura esplénica.',
      'Causa más frecuente de mononucleosis con anticuerpos heterófilos negativos: Citomegalovirus (CMV).',
      'TORCH: CMV produce calcificaciones periventriculares e hipoacusia; Toxoplasma produce calcificaciones difusas y coriorretinitis.',
    ],
    questions: [
      {
        stem: 'Un universitario de 20 años presenta fiebre de 39 °C, disfagia intensa y astenia de una semana. Se le diagnosticó faringitis estreptocócica hace 3 días y se le administró amoxicilina, presentando al segundo día un exantema eritematoso maculopapular generalizado. Al examen físico destaca faringe con placas pultáceas, adenopatías cervicales posteriores bilaterales y esplenomegalia palpable. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Shock anafiláctico secundario a penicilina' },
          { id: 'B', text: 'Mononucleosis infecciosa por Virus Epstein-Barr' },
          { id: 'C', text: 'Escarlatina por Streptococcus pyogenes' },
          { id: 'D', text: 'Infección aguda por Citomegalovirus' },
          { id: 'E', text: 'Lupus eritematoso sistémico inducido por fármacos' },
        ],
        correcta: 'B',
        explicacion: 'La tríada de faringitis exudativa, adenopatías cervicales posteriores y esplenomegalia asociada a la aparición de un exantema eritematoso difuso tras la ingesta de amoxicilina es patognomónica de Mononucleosis Infecciosa por Virus Epstein-Barr (VEB). La amoxicilina induce este rash en más del 90% de los pacientes infectados por VEB por alteración de la respuesta celular inmune.',
        recTag: 'Banco de Preguntas Oficial · Síndrome Mononucleósico',
      },
      {
        stem: 'Un recién nacido de 5 días de vida presenta microcefalia, ictericia y hepatoesplenomegalia. La ecografía transfontanelar revela calcificaciones periventriculares y el examen auditivo demuestra hipoacusia neurosensorial bilateral profunda. ¿Cuál es el agente etiológico congénito más probable?',
        options: [
          { id: 'A', text: 'Toxoplasma gondii' },
          { id: 'B', text: 'Citomegalovirus (CMV)' },
          { id: 'C', text: 'Treponema pallidum' },
          { id: 'D', text: 'Virus de la Rubéola' },
          { id: 'E', text: 'Virus Herpes Simplex tipo 2' },
        ],
        correcta: 'B',
        explicacion: 'El Citomegalovirus (CMV) es la infección congénita más frecuente del complejo TORCH. Su hallazgo radiológico patognomónico son las calcificaciones en la zona subependimaria periventricular, y es la principal causa no genética de hipoacusia neurosensorial infantil. Toxoplasma (A) causa calcificaciones intraparenquimatosas difusas y coriorretinitis.',
        recTag: 'Banco de Preguntas Oficial · Complejo TORCH',
      },
    ],
  },
  {
    id: 'inf-22',
    classId: 'infecto-22',
    tier: 1,
    blockNum: 5,
    blockName: 'Infecciones Comunitarias, Exantemas y Huésped Inmunocomprometido',
    topicLabel: '5.3',
    title: 'Exantemas Febriles de la Infancia: Sarampión, Rubéola, Escarlatina y Kawasaki',
    perfilCode: '1.04.1.011',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Enfermedad de Notificación Obligatoria Inmediata (ENO): Sarampión y Rubéola',
    reconstrucciones: 'EUNACOM 2023 (Q#112) · EUNACOM 2021 (Q#03) · EUNACOM 2018 (Q#59)',
    frecuencia: 'Alta rentabilidad · semiología de enantemas (Koplik vs lengua en frambuesa) y criterios de Kawasaki',
    svg: null, algoTitle: null,
    diagram: null,
    contexto: 'El diagnóstico diferencial de los exantemas febriles en la infancia es uno de los temas pediátricos/infectológicos más evaluados en el EUNACOM. La clave radica en reconocer los enantemas patognomónicos, el patrón de progresión del rash (céfalo-caudal vs centrípeto) y la identificación de la Enfermedad de Kawasaki para prevenir aneurismas coronarios con gammaglobulina.',
    contentSections: [
      {
        subhead: '1. Sarampión vs Rubéola: enfermedades de notificación inmediata',
        paragraphs: [
          '• <strong>Sarampión (Paramixovirus - Notificación Obligatoria Inmediata):</strong> transmisión aérea de altísima contagiosidad (R0 12-18). Pródromos con fiebre alta, tos perruna, coriza acuosa intensa y conjuntivitis con fotofobia severa ("facies gripal llorosa"). Enantema patognomónico: <strong>Manchas de Koplik</strong> (pápulas blanquecinas milimétricas en la mucosa yugal frente al segundo molar superior, preceden al exantema en 24-48 h). Exantema: maculopapular confluente de inicio retroauricular con <strong>progresión céfalo-caudal lenta</strong>, que descama en láminas finas ("en salvado") dejando pigmentación parduzca.<br>' +
          '• <strong>Rubéola (Togavirus - Notificación Inmediata):</strong> cuadro mucho más leve. Pródromos escasos con <strong>adenopatías retroauriculares, suboccipitales y cervicales posteriores muy dolorosas</strong>. Exantema: máculas rosadas no confluentes de rápida progresión céfalo-caudal que desaparece en 3 días ("sarampión de 3 días"). Enantema: <strong>Manchas de Forchheimer</strong> (petequias en el paladar blando).',
        ],
      },
      {
        subhead: '2. Escarlatina y Eritema Infeccioso (Megaloeritema)',
        paragraphs: [
          '• <strong>Escarlatina (<em>Streptococcus pyogenes</em> productor de exotoxina pirogénica A, B o C):</strong> se origina a partir de una faringoamigdalitis estreptocócica. Exantema micropapular eritematoso difuso con <strong>textura áspera "en papel de lija" o piel de gallina</strong>. Signos patognomónicos: (1) <strong>Líneas de Pastia</strong> (hiperpigmentación petequial lineal en los pliegues antecubitales e inguinales), (2) <strong>Facies de Filatov</strong> (eritema marcado en mejillas y frente con palidez peribucal circumoral), y (3) <strong>Lengua en fresa blanca (primeros 2 días) que evoluciona a lengua en frambuesa roja descamada (día 4-5)</strong>. Tratamiento: <strong>Amoxicilina oral 50 mg/kg/día por 10 días completos</strong> (o Penicilina Benzatina IM dosis única) para prevenir la Fiebre Reumática.<br>' +
          '• <strong>Eritema Infeccioso / 5ª Enfermedad (Parvovirus B19):</strong> inicia con el <strong>Signo de la bofetada</strong> (eritema macular confluente rojo encendido brillante en ambas mejillas con palidez peribucal). A los 2-3 días evoluciona a un exantema maculopapular eritematoso en tronco y extremidades con <strong>patrón reticulado "en encaje"</strong>, que recidiva con el calor o la exposición solar. El virus tiene tropismo por los precursores eritroides, provocando <strong>crisis aplásica severa en pacientes con anemia hemolítica previa</strong> (drepanocitosis, esferocitosis) e hidrops fetal en embarazadas.',
        ],
      },
      {
        subhead: '3. Enfermedad de Kawasaki (Vasculitis Coronaria Infantil)',
        paragraphs: [
          'Vasculitis necrotizante de vasos de mediano calibre que afecta a lactantes y preescolares (< 5 años). <strong>Es la primera causa de cardiopatía adquirida en la infancia</strong>.',
          '<strong>Criterios diagnósticos:</strong> <strong>Fiebre alta persistente de ≥ 5 días de duración</strong> refractaria a antipiréticos común + al menos <strong>4 de los siguientes 5 signos clínicos</strong>:<br>' +
          '1. <strong>Inyección conjuntival bilateral bulbar no exudativa</strong> (sin pus).<br>' +
          '2. <strong>Cambios en labios y mucosa oral:</strong> queilitis labial eritematosa fisurada, eritema faríngeo y <strong>lengua en frambuesa</strong>.<br>' +
          '3. <strong>Cambios en extremidades periféricas:</strong> edema indurado y eritema en palmas y plantas en fase aguda; descamación periungueal "en dedo de guante" en fase subaguda.<br>' +
          '4. <strong>Exantema polimorfo difuso</strong> (no vesicular).<br>' +
          '5. <strong>Linfadenopatía cervical unilateral no purulenta (≥ 1.5 cm)</strong>.',
          '<strong>Tratamiento de urgencia:</strong> <strong>Inmunoglobulina Endovenosa (IGEV 2 g/kg en infusión única) + Ácido Acetilsalicílico (Aspirina)</strong> en dosis antiinflamatoria (30-50 mg/kg/día). Administrada antes del décimo día de fiebre, reduce el riesgo de <strong>aneurismas de las arterias coronarias</strong> del 25% a menos del 3-5%.',
        ],
      },
    ],
    table: {
      title: 'Diagnóstico Diferencial de los Exantemas Febriles Clásicos de la Infancia',
      headers: ['Enfermedad', 'Agente Causal', 'Enantema / Signo Patognomónico', 'Características del Exantema', 'Tratamiento EUNACOM'],
      rows: [
        ['Sarampión', 'Paramixovirus', 'Manchas de Koplik (mucosa yugal)', 'Maculopapular céfalo-caudal confluente', 'Vitamina A oral + soporte (ENO)'],
        ['Rubéola', 'Togavirus', 'Manchas de Forchheimer + adenopatías retroauriculares', 'Macular rosado no confluente (3 días)', 'Sintomático de soporte (ENO)'],
        ['Escarlatina', 'Streptococcus pyogenes', 'Lengua en frambuesa + Líneas de Pastia + Filatov', 'Micropapular áspero "en papel de lija"', 'Amoxicilina oral por 10 días completos'],
        ['Eritema Infeccioso', 'Parvovirus B19', 'Signo de la bofetada en mejillas', 'Patrón reticulado eritematoso "en encaje"', 'Sintomático (riesgo crisis aplásica)'],
        ['Enfermedad de Kawasaki', 'Vasculitis idiopática', 'Labios fisurados + conjuntivitis seca + lengua frambuesa', 'Polimorfo + fiebre ≥ 5 días refractaria', 'Inmunoglobulina EV (2 g/kg) + Aspirina'],
      ],
    },
    vignette: 'Niño de 3 años es traído a urgencias por presentar fiebre de 39.5 °C de 6 días de evolución que no cede con paracetamol ni ibuprofeno. Al examen físico se constata inyección conjuntival bilateral intensa sin secreción purulenta, labios intensamente eritematosos secos con fisuras sangrantes, lengua de aspecto aframbuesado, un exantema maculopapular eritematoso en tronco y marcado edema duro con eritema en palmas de manos y plantas de pies. En la región cervical derecha se palpa un ganglio único de 2 cm, doloroso y no fluctuante. El ecocardiograma inicial no muestra alteraciones coronarias.',
    explicacion: 'El paciente cumple estrictamente los criterios diagnósticos de la Enfermedad de Kawasaki: fiebre prolongada de ≥ 5 días asociada a 5 de los 5 criterios clínicos clásicos (inyección conjuntival bulbar no exudativa, alteraciones de la mucosa oral con lengua en frambuesa y labios fisurados, cambios en extremidades con edema palmo-plantar, exantema polimorfo y adenopatía cervical unilateral > 1.5 cm). La complicación más grave y temida de la enfermedad de Kawasaki es la aparición de aneurismas de las arterias coronarias en la fase subaguda. La indicación terapéutica inmediata que previene esta complicación cardíaca es la infusión endovenosa de Inmunoglobulina Humana (IGEV a dosis única de 2 g/kg administrada en 10-12 horas) combinada con Ácido Acetilsalicílico (Aspirina a dosis antiinflamatoria de 30 a 50 mg/kg/día).',
    keyPoints: [
      'Sarampión: fiebre alta + tos + coriza + conjuntivitis con fotofobia + MANCHAS DE KOPLIK (ENO inmediata).',
      'Rubéola: exantema rosado de 3 días con ADENOPATÍAS RETROAURICULARES y suboccipitales dolorosas.',
      'Escarlatina: Streptococcus pyogenes; piel áspera "en papel de lija", Facies de Filatov, Líneas de Pastia y lengua en frambuesa; tratar con Amoxicilina 10 días.',
      'Eritema Infeccioso (Parvovirus B19): "signo de la bofetada" en mejillas y exantema reticulado "en encaje"; riesgo de crisis aplásica.',
      'Enfermedad de Kawasaki: fiebre ≥ 5 días + conjuntivitis no exudativa + labios fisurados/lengua frambuesa + edema palmo-plantar + exantema + adenopatía cervical > 1.5 cm.',
      'Tratamiento de Kawasaki: INMUNOGLOBULINA ENDOVENOSA (IGEV 2 g/kg) + ASPIRINA para prevenir aneurismas coronarios.',
    ],
    questions: [
      {
        stem: 'Un niño de 5 años presenta dolor faríngeo y fiebre de 38.5 °C. Al examen destaca un exantema micropapular eritematoso difuso que palidece a la presión y tiene un tacto áspero similar a un papel de lija, con acentuación del eritema en los pliegues antecubitales formando líneas transversales que no palidecen (Líneas de Pastia). Se observa lengua con papilas hipertróficas rojas prominentes. ¿Cuál es el tratamiento antibiótico indicado para este cuadro?',
        options: [
          { id: 'A', text: 'Azitromicina 10 mg/kg/día por 3 días' },
          { id: 'B', text: 'Amoxicilina oral 50 mg/kg/día por 10 días completos' },
          { id: 'C', text: 'Cefuroximo oral por 5 días' },
          { id: 'D', text: 'Ciprofloxacino oral por 7 días' },
          { id: 'E', text: 'No requiere antibióticos por tratarse de una infección viral autolimitada' },
        ],
        correcta: 'B',
        explicacion: 'El cuadro corresponde a Escarlatina, producida por cepas de Streptococcus pyogenes productoras de toxina eritrogénica. Para asegurar la erradicación bacteriana faríngea y prevenir complicaciones no supurativas tardías (especialmente la Fiebre Reumática aguda), la norma nacional e internacional exige administrar Amoxicilina oral durante 10 días completos (o alternativamente Penicilina Benzatina IM en dosis única). Pautas más cortas fracasan en prevenir la fiebre reumática.',
        recTag: 'Banco de Preguntas Oficial · Exantemas de la Infancia',
      },
      {
        stem: '¿Cuál es el principal objetivo del tratamiento precoz con Inmunoglobulina Endovenosa a altas dosis en un lactante diagnosticado con Enfermedad de Kawasaki?',
        options: [
          { id: 'A', text: 'Prevenir la progresión a glomerulonefritis post-infecciosa' },
          { id: 'B', text: 'Evitar el desarrollo de aneurismas y ectasias en las arterias coronarias' },
          { id: 'C', text: 'Reducir la duración de la descamación periungueal' },
          { id: 'D', text: 'Erradicar la portación nasal de Streptococcus' },
          { id: 'E', text: 'Prevenir la reactivación por virus varicela zóster' },
        ],
        correcta: 'B',
        explicacion: 'La complicación más temida de la Enfermedad de Kawasaki es la vasculitis coronaria, que sin tratamiento conduce a la formación de aneurismas coronarios en hasta el 25% de los pacientes, con riesgo subsecuente de infarto agudo de miocardio infantil y muerte súbita. La administración de IGEV (2 g/kg) en los primeros 10 días de evolución reduce esta incidencia a menos del 3-5%, siendo el pilar terapéutico cardioprotector indiscutido.',
        recTag: 'Banco de Preguntas Oficial · Exantemas de la Infancia',
      },
    ],
  },
  {
    id: 'inf-23',
    classId: 'infecto-23',
    tier: 2,
    blockNum: 5,
    blockName: 'Infecciones Comunitarias, Exantemas y Huésped Inmunocomprometido',
    topicLabel: '5.4',
    title: 'Varicela No Complicada vs Complicada y Herpes Zóster',
    perfilCode: '1.04.1.018, 1.04.2.010',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Vacunación Programática PNI: Vacuna contra la Varicela a los 18 y 36 meses',
    reconstrucciones: 'EUNACOM 2024 (Q#58) · EUNACOM 2022 (Q#11) · EUNACOM 2017 (Q#73)',
    frecuencia: 'Alta rentabilidad · complicaciones graves de varicela en adultos (neumonitis) y niños (ataxia/sobreinfección)',
    svg: null, algoTitle: null,
    diagram: null,
    contexto: 'La primoinfección por Virus Varicela-Zóster (VVZ) y su reactivación como Herpes Zóster son altamente prevalentes. En el EUNACOM se evalúa de manera prioritaria la identificación de las complicaciones graves de la varicela (neumonitis viral en adultos, ataxia cerebelosa aguda y sobreinfección bacteriana invasiva por S. pyogenes), el tratamiento antiviral precoz con Aciclovir y el manejo del Herpes Zóster oftálmico.',
    contentSections: [
      {
        subhead: '1. Varicela Primaria: semiología y polimorfismo lesional',
        paragraphs: [
          'El Virus Varicela-Zóster (VVZ, herpesvirus humano tipo 3) se transmite por aerosoles respiratorios (aislamiento aéreo) y por contacto directo con el líquido vesicular. Altamente contagioso: <strong>el paciente transmite desde 48 horas antes de la aparición del exantema hasta que TODAS las lesiones se encuentran en fase de COSTRA seca</strong>.',
          '<strong>Exantema patognomónico:</strong> se caracteriza por su <strong>distribución centrípeta</strong> (predominio en cuero cabelludo, cara y tronco, respetando relativamente las extremidades distales) y por su <strong>POLIMORFISMO REGIONAL ("en cielo estrellado")</strong>: coexistencia simultánea de máculas, pápulas, vesículas con contenido claro sobre base eritematosa ("gotas de rocío sobre pétalo de rosa"), pústulas y costras en una misma zona anatómica.',
        ],
      },
      {
        subhead: '2. Complicaciones mayores de la Varicela según grupo etario',
        paragraphs: [
          '• <strong>Sobreinfección bacteriana de la piel (la más frecuente en niños):</strong> causada por <em>Streptococcus pyogenes</em> o <em>Staphylococcus aureus</em> secundario al rascado por prurito intenso (impétigo, celulitis, y en casos severos fascitis necrotizante).<br>' +
          '• <strong>Ataxia Cerebelosa Aguda / Cerebelitis (complicación neurológica más común en niños):</strong> se presenta 1 a 3 semanas post-exantema con ataxia de la marcha, dismetría, temblor intencional y nistagmo, sin signos meníngeos. Pronóstico excelente, autolimitada en semanas.<br>' +
          '• <strong>Neumonitis Varicelosa (la complicación más letal, típica en ADULTOS, embarazadas y fumadores):</strong> se manifiesta al 3°-5° día del exantema con tos seca, disnea súbita, taquipnea, hemoptisis e hipoxemia severa. Radiografía de tórax: infiltrados nodulares difusos bilaterales. <strong>Mortalidad > 20-30%</strong>. Exige <strong>Aciclovir EV inmediato (10 mg/kg cada 8 horas)</strong>.<br>' +
          '• <strong>Síndrome de Reye:</strong> encefalopatía hepática aguda no inflamatoria con degeneración grasa microvesicular hepática e hiperamonemia en niños con varicela o influenza que reciben <strong>Aspirina</strong> (contraindicación absoluta de ácido acetilsalicílico en niños).',
        ],
      },
      {
        subhead: '3. Herpes Zóster y Síndrome de Ramsay-Hunt',
        paragraphs: [
          'Reactivación del VVZ latente en los ganglios de la raíz dorsal o de pares craneanos por inmunosenescencia o inmunosupresión.',
          'Cursa con dolor neuropático urente en un <strong>dermatoma unilateral estricto</strong> que no cruza la línea media, seguido de vesículas en racimo.',
          '• <strong>Herpes Zóster Oftálmico (rama V1 del trigémino):</strong> vesículas en la punta de la nariz (<strong>Signo de Hutchinson</strong>) indican compromiso del nervio nasociliar y predicen afectación corneal grave (queratitis dendrítica, uveítis, ceguera). Exige evaluación oftalmológica urgente y Aciclovir sistémico.<br>' +
          '• <strong>Síndrome de Ramsay-Hunt (ganglio geniculado del VII par):</strong> tríada de <strong>Parálisis facial periférica + Otalgia intensa + Vesículas en el conducto auditivo externo o pabellón auricular</strong>.<br>' +
          '<strong>Tratamiento:</strong> <strong>Aciclovir oral 800 mg 5 veces al día por 7 días (o Valaciclovir 1 g cada 8 h)</strong> iniciado idealmente en las primeras 72 horas para reducir el dolor agudo y la incidencia de <strong>Neuralgia Postherpética</strong> (dolor neuropático persistente > 3 meses, tratado con Pregabalina, Gabapentina o Amitriptilina).',
        ],
      },
    ],
    table: {
      title: 'Complicaciones de la Infección por Virus Varicela-Zóster (VVZ)',
      headers: ['Complicación', 'Población Vulnerable', 'Manifestación Clínica Cardinal', 'Conducta Médica EUNACOM'],
      rows: [
        ['Neumonitis Varicelosa', 'Adultos, embarazadas y fumadores', 'Disnea aguda + infiltrados nodulares bilaterales', 'Aciclovir EV (10 mg/kg c/8h) + Soporte en UCI'],
        ['Ataxia Cerebelosa Aguda', 'Niños preescolares y escolares', 'Marcha atáxica, dismetría y nistagmo post-varicela', 'Manejo conservador (autolimitada, buen pronóstico)'],
        ['Sobreinfección Bacteriana', 'Niños con prurito intenso y rascado', 'Fascitis necrotizante o celulitis con pus', 'Cefazolina / Cloxacilina o Aseo quirúrgico'],
        ['Herpes Zóster Oftálmico', 'Adultos mayores (compromiso V1 trigémino)', 'Signo de Hutchinson (vesícula punta nasal)', 'Aciclovir oral/EV + Derivación urgente a Oftalmología'],
        ['Síndrome de Ramsay-Hunt', 'Adultos con reactivación VII par', 'Parálisis facial periférica + vesículas en CAE', 'Aciclovir oral a dosis altas + Corticoides'],
      ],
    },
    vignette: 'Hombre de 32 años, previamente sano y no vacunado contra la varicela, presenta desde hace 4 días fiebre y exantema vesicular pruriginoso con lesiones en diferentes estadios en cara y tórax. Hace 12 horas agrega tos seca, disnea de reposo rápidamente progresiva y dolor torácico pleurítico bilateral. Al examen: T° 38.6 °C, FC 118 lpm, FR 32 rpm, saturación de oxígeno 88% al aire ambiente. A la auscultación pulmonar se pesquisan crépitos bilaterales difusos. La radiografía de tórax revela múltiples infiltrados micronodulares bilaterales difusos en ambos campos pulmonares.',
    explicacion: 'El paciente adulto presenta una Neumonitis Varicelosa, la complicación visceral más temida y de mayor letalidad de la varicela primaria en el adulto. La clínica de insuficiencia respiratoria aguda e infiltrados nodulares difusos en un paciente con varicela activa exige hospitalización inmediata en cuidados intensivos (UCI), oxigenoterapia para corregir la hipoxemia y administración urgente de ACICLOVIR ENDOVENOSO en dosis de 10 mg/kg cada 8 horas. No se debe intentar tratamiento con aciclovir oral, dada la escasa biodisponibilidad y la rápida letalidad del cuadro respiratorio si no se alcanzan niveles séricos antivirales terapéuticos inmediatos.',
    keyPoints: [
      'Varicela: lesiones en diferente estadio ("cielo estrellado") con distribución centrípeta; contagiosa hasta que todas son costras.',
      'Neumonitis varicelosa: complicación más grave en ADULTOS (disnea, hipoxemia, infiltrado nodular); requiere ACICLOVIR EV urgente.',
      'Ataxia cerebelosa: complicación neurológica benigna y autolimitada más común en niños.',
      'Signo de Hutchinson en Herpes Zóster: vesícula en la punta de la nariz que avisa riesgo inminente de queratitis oftálmica.',
      'Síndrome de Ramsay-Hunt: parálisis facial periférica + vesículas en el conducto auditivo externo (ganglio geniculado del nervio facial).',
      'Tratamiento de Herpes Zóster: Aciclovir oral 800 mg 5 veces al día por 7 días iniciado en las primeras 72 horas.',
    ],
    questions: [
      {
        stem: 'Un hombre de 36 años fumador consulta por disnea aguda progresiva y tos con estrías de sangre de 24 horas de evolución. Presenta desde hace 4 días un exantema vesicular polimórfico en cara y tronco compatible con varicela. La saturación de oxígeno es 89% con aire ambiental y la radiografía de tórax muestra infiltrados micronodulares bilaterales difusos. ¿Cuál es el tratamiento farmacológico prioritario?',
        options: [
          { id: 'A', text: 'Aciclovir endovenoso a dosis de 10 mg/kg cada 8 horas' },
          { id: 'B', text: 'Aciclovir oral 800 mg cada 4 horas' },
          { id: 'C', text: 'Ceftriaxona más Claritromicina endovenosa' },
          { id: 'D', text: 'Inmunoglobulina hiperinmune contra varicela zóster intramuscular' },
          { id: 'E', text: 'Metilprednisolona endovenosa en pulsos' },
        ],
        correcta: 'A',
        explicacion: 'La neumonitis varicelosa es una complicación potencialmente mortal típica del adulto joven. El tratamiento de elección indiscutido es Aciclovir por vía ENDOVENOSA a dosis de 10 mg/kg cada 8 horas durante 7 a 10 días. La vía oral (B) es insuficiente debido a su baja biodisponibilidad (15-20%) y no logra concentraciones pulmonares terapéuticas suficientes para frenar la replicación viral en el pulmón. La inmunoglobulina (D) solo sirve para profilaxis post-exposición precoz, no para tratar la enfermedad establecida.',
        recTag: 'Banco de Preguntas Oficial · Varicela y Herpes Zóster',
      },
      {
        stem: 'Una mujer de 68 años consulta por intenso dolor urente en la hemicara izquierda de 3 días de evolución, asociándose hace 24 horas a la aparición de vesículas en racimo en la frente, el párpado superior y la punta de la nariz (signo de Hutchinson positivo). ¿Cuál es la conducta médica inmediata más adecuada?',
        options: [
          { id: 'A', text: 'Iniciar Aciclovir oral a dosis plenas y solicitar evaluación urgente por Oftalmología' },
          { id: 'B', text: 'Indicar tratamiento con Carbamazepina y analgesia con Paracetamol' },
          { id: 'C', text: 'Aplicar ungüento tópico de corticoides en las lesiones nasales y párpado' },
          { id: 'D', text: 'Administrar vacuna de refuerzo contra herpes zóster' },
          { id: 'E', text: 'Realizar desbridamiento quirúrgico de las vesículas nasales' },
        ],
        correcta: 'A',
        explicacion: 'El cuadro corresponde a un Herpes Zóster Oftálmico que afecta la rama nasociliar del nervio oftálmico (V1 del trigémino), evidenciado por el signo de Hutchinson (vesículas en la punta de la nariz). Esta manifestación predice afectación corneal severa (queratitis dendrítica, uveítis anterior, glaucoma secundario y riesgo de pérdida visual irreversible). La conducta inmediata consiste en iniciar Aciclovir oral (800 mg 5 veces al día) o Valaciclovir y derivar de forma urgente al especialista en Oftalmología para examen con lámpara de hendidura.',
        recTag: 'Banco de Preguntas Oficial · Varicela y Herpes Zóster',
      },
    ],
  },
  {
    id: 'inf-24',
    classId: 'infecto-24',
    tier: 3,
    blockNum: 5,
    blockName: 'Infecciones Comunitarias, Exantemas y Huésped Inmunocomprometido',
    topicLabel: '5.5',
    title: 'Neutropenia Febril Post-Quimioterapia y Fiebre sin Foco',
    perfilCode: '1.04.1.020, 1.04.1.024',
    dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Garantía Explícita en Salud (GES): Manejo de Neutropenia Febril en Pacientes con Cáncer',
    reconstrucciones: 'EUNACOM 2024 (Q#22) · EUNACOM 2022 (Q#95) · EUNACOM 2020 (Q#12)',
    frecuencia: 'Máxima rentabilidad · emergencia médica absoluta; regla de los 60 minutos con Cefepime EV',
    svg: null, algoTitle: 'Algoritmo de Manejo de Emergencia en Neutropenia Febril (Regla de la 1ª Hora)',
    svg: null, algoTitle: 'Algoritmo de Manejo de Emergencia en Neutropenia Febril (Regla de la 1ª Hora)',
    diagram: flow('Manejo de Emergencia en Neutropenia Febril Post-Quimioterapia', [
      { t: 'Paciente Post-Quimioterapia + Fiebre ≥ 38.3 °C (o ≥ 38.0 °C x > 1 h)', s: 'Neutropenia: RAN < 500 células/mm³ · Tiempo puerta-antibiótico < 60 minutos' },
      { k: 'split', q: '¿Estratificación de Riesgo según Score MASCC?', s: 'MASCC < 21: Alto Riesgo (hospitalizar) | MASCC ≥ 21: Bajo Riesgo (ambulatorio)', ll: 'alto riesgo (mascc < 21)', rl: 'bajo riesgo (mascc ≥ 21)',
        left: { t: 'Cefepime 2g c/8h EV Inmediato (o Pip/Tazo)', s: 'Monoterapia antipseudomónica EV en < 1 h tras 2 hemocultivos', type: 'crit' },
        right: { t: 'Ciprofloxacino + Amoxi/Clavulánico Oral', s: 'Solo en pacientes estables seleccionados con control en 24 h', type: 'acc' } },
      { t: 'Vanco solo si Shock/CVC | Si Fiebre al 4°–7° día: Voriconazol EV', s: 'Aspergilosis invasora (signo del halo en TAC) · No usar Vancomicina de entrada', type: 'warn', al: 'escalamiento', from: 'left' },
    ]),
    contexto: 'La neutropenia febril post-quimioterapia es la principal emergencia oncológica infectológica. El EUNACOM evalúa dos conceptos taxativos: la regla de los 60 minutos para iniciar monoterapia antipseudomónica (Cefepime EV) tras los hemocultivos y la sospecha de micosis invasora (Voriconazol EV) ante fiebre persistente al 4°–7° día.',
    contentSections: [
      {
        subhead: '1. Definiciones Normativas y Fisiopatología',
        paragraphs: [
          'En el neutropénico <strong>no hay pus ni signos inflamatorios habituales</strong>; la fiebre suele ser la única alarma de bacteriemia.',
          '<strong>Fiebre:</strong> registro axilar único <strong>≥ 38.3 °C</strong> o <strong>≥ 38.0 °C por &gt; 1 hora</strong>. <strong>Neutropenia:</strong> <strong>RAN &lt; 500 células/mm³</strong> (o &lt; 1.000 con caída prevista a &lt; 500 en 48 h). Patógeno más temido: <strong><em>Pseudomonas aeruginosa</em></strong> (shock séptico fulminante en &lt; 12 h).',
        ],
      },
      {
        subhead: '2. Estratificación MASCC y Manejo de Emergencia',
        paragraphs: [
          '<strong>Regla de los 60 minutos:</strong> infundir el antibiótico EV en la primera hora, previa toma rápida de 2 hemocultivos.',
          '• <strong>Alto Riesgo (MASCC &lt; 21):</strong> hospitalización y <strong>Cefepime 2 g c/8h EV</strong> (o Piperacilina-Tazobactam). Vancomicina solo si hay shock, infección franca de catéter o mucositis severa.',
          '• <strong>Bajo Riesgo (MASCC ≥ 21):</strong> opción ambulatoria seleccionada con <strong>Ciprofloxacino + Amoxicilina/Clavulánico oral</strong>.',
        ],
      },
      {
        subhead: '3. Fiebre Persistente al 4°–7° Día (Micosis Invasora)',
        paragraphs: [
          'Si persiste febril al 4°–7° día con hemocultivos negativos bajo cobertura de amplio espectro, la causa más frecuente es una <strong>Infección Fúngica Invasora (Aspergilosis pulmonar o Candidiasis)</strong>.',
          'Conducta obligatoria: <strong>TAC de tórax de alta resolución</strong> (buscar el <strong>Signo del Halo</strong>) e inicio inmediato de <strong>Voriconazol EV</strong> o una Equinocandina (Caspofungina).',
        ],
      },
    ],
    table: {
      title: 'Estratificación y Manejo de la Neutropenia Febril EUNACOM',
      headers: ['Categoría de Riesgo', 'Score MASCC', 'Lugar de Tratamiento', 'Esquema de Elección'],
      rows: [
        ['Bajo Riesgo', 'MASCC ≥ 21 puntos', 'Ambulatorio / Domicilio estricto', 'Ciprofloxacino oral + Amoxicilina/Clavulánico'],
        ['Alto Riesgo', 'MASCC < 21 puntos', 'Hospitalización en Aislamiento', 'Cefepime 2 g c/8h EV (o Pip/Tazo) en < 60 min'],
        ['Alto Riesgo + Shock/CVC', 'MASCC < 21 + Foco Gram(+)', 'Unidad de Paciente Crítico (UCI)', 'Cefepime EV + Vancomicina 15-20 mg/kg EV'],
        ['Fiebre al 4°–7° día', 'Refractario a antibióticos', 'Hospitalizado con TAC de tórax', 'Voriconazol EV o Equinocandina (Caspofungina)'],
      ],
    },
    vignette: 'Hombre de 54 años en tratamiento con quimioterapia por linfoma no Hodgkin hace 9 días consulta en urgencias por sensación febril y calofríos. Al examen físico: T° 38.6 °C axilar, FC 110 lpm, PA 100/65 mmHg, FR 20 rpm. No presenta foco respiratorio, urinario ni abdominal evidente; el sitio de su catéter venoso central está sano. El hemograma de urgencia informa: Leucocitos 800/mm³, con 15% de baciliformes, 20% de segmentados (Recuento Absoluto de Neutrófilos RAN = 280/mm³) y plaquetas 65.000/mm³.',
    explicacion: 'El paciente presenta una Neutropenia Febril post-quimioterapia (registro térmico ≥ 38.3 °C con RAN < 500/mm³). Esta situación clínica constituye una emergencia médica absoluta de máxima gravedad con riesgo inminente de shock séptico bacteriano fulminante por Pseudomonas aeruginosa o enterobacterias. La conducta médica inmediata que no admite dilación es la hospitalización en aislamiento protector, toma inmediata de dos frascos de hemocultivos (periféricos y a través del CVC) e inicio dentro de los primeros 60 minutos de monoterapia antibiótica antipseudomónica endovenosa con CEFEPIME (2 g cada 8 h EV) o Piperacilina-Tazobactam. No está indicado asociar Vancomicina de entrada por encontrarse hemodinámicamente estable y sin signos de infección de catéter.',
    keyPoints: [
      'Definición de Neutropenia Febril: Fiebre ≥ 38.3 °C (o ≥ 38.0 °C por > 1 h) + RAN < 500 células/mm³.',
      'Emergencia infectológica: tiempo puerta-antibiótico DEBE ser MENOR A 60 MINUTOS.',
      'Antibiótico empírico de elección (alto riesgo): Cefepime 2 g c/8h EV (o Piperacilina-Tazobactam 4.5 g c/6h EV).',
      'Vancomicina de entrada: SOLO si hay shock séptico, infección de catéter evidente, mucositis severa o sospecha de SAMR.',
      'Bajo riesgo (MASCC ≥ 21): opción ambulatoria con Ciprofloxacino + Amoxicilina/Clavulánico oral.',
      'Fiebre persistente al 4°-7° día a pesar de antibióticos: sospechar Aspergilosis o micosis invasora e iniciar Voriconazol o Caspofungina EV.',
    ],
    questions: [
      {
        stem: 'Un paciente de 62 años que recibió quimioterapia intensiva hace 8 días por una leucemia mieloide aguda consulta en urgencias por fiebre de 38.7 °C y calofríos. Al examen no se identifica foco infeccioso evidente. El hemograma revela un recuento de leucocitos de 600/mm³ con 30% de neutrófilos totales (RAN 180/mm³). Tras la toma de hemocultivos, ¿cuál es la conducta terapéutica inmediata más adecuada?',
        options: [
          { id: 'A', text: 'Iniciar infusión endovenosa de Cefepime 2 g en menos de 60 minutos' },
          { id: 'B', text: 'Administrar Ceftriaxona 2 g EV más Vancomicina y hospitalizar en sala básica' },
          { id: 'C', text: 'Indicar tratamiento con Ciprofloxacino oral y control ambulatorio en 24 horas' },
          { id: 'D', text: 'Esperar el resultado de los hemocultivos para iniciar el antibiótico dirigido' },
          { id: 'E', text: 'Iniciar tratamiento antifúngico con Fluconazol oral en monoterapia' },
        ],
        correcta: 'A',
        explicacion: 'El paciente cursa con una neutropenia febril de alto riesgo (RAN < 500 en contexto de leucemia mieloide aguda). La recomendación Surviving Sepsis y las guías internacionales de neutropenia febril exigen el inicio inmediato de antibioterapia antipseudomónica endovenosa de amplio espectro (tiempo puerta-aguja < 60 minutos), siendo Cefepime 2 g c/8h EV (o Piperacilina-Tazobactam) el fármaco de elección. Ceftriaxona (B) no tiene cobertura contra Pseudomonas aeruginosa, el germen más letal en este escenario.',
        recTag: 'Banco de Preguntas Oficial · Neutropenia Febril',
      },
      {
        stem: 'Un paciente neutropénico febril post-quimioterapia cumple 5 días hospitalizado recibiendo Cefepime y Vancomicina EV a dosis plenas. Los hemocultivos iniciales y urocultivo resultaron negativos. A pesar de esto, el paciente persiste febril (38.8 °C) y neutropénico severo (RAN 120/mm³). ¿Cuál es la conducta diagnóstica y terapéutica prioritaria?',
        options: [
          { id: 'A', text: 'Suspender todos los antibióticos y observar la evolución espontánea' },
          { id: 'B', text: 'Solicitar TAC de tórax de alta resolución e iniciar terapia antifúngica empírica con Voriconazol o Equinocandina' },
          { id: 'C', text: 'Reemplazar Cefepime por Ciprofloxacino oral' },
          { id: 'D', text: 'Administrar corticoides sistémicos a dosis altas para yugular la fiebre' },
          { id: 'E', text: 'Indicar tratamiento con Aciclovir oral por probable reactivación herpética' },
        ],
        correcta: 'B',
        explicacion: 'En un paciente con neutropenia febril prolongada que persiste con fiebre al 4°-7° día a pesar de cobertura antibiótica bacteriana de amplio espectro óptima, la principal sospecha es una Infección Fúngica Invasora (especialmente Aspergilosis pulmonar invasora o Candidiasis diseminada). La conducta protocolizada es solicitar TAC de tórax de alta resolución (en busca de nódulos con signo del halo característicos de Aspergillus) e iniciar de inmediato cobertura antifúngica empírica con Voriconazol o una Equinocandina (Caspofungina).',
        recTag: 'Banco de Preguntas Oficial · Neutropenia Febril',
      },
    ],
  },
];

module.exports = { bloque5, flow };
