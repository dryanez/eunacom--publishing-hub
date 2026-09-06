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
  ${P.join('\n  ')}
</svg>`;
  return { title, svg };
}

const bloque3 = [
  {
    id: 'diab-11',
    classId: 'diab-11',
    tier: 2,
    blockNum: 3,
    blockName: 'Insulinoterapia y Manejo Hospitalario',
    topicLabel: '3.1',
    title: 'Tipos de Insulina, Farmacocinética e Indicaciones de Inicio',
    perfilCode: '1.04.1.004, 1.04.1.009',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES N° 2): Diabetes Mellitus Tipo 2 y Tipo 1',
    reconstrucciones: 'EUNACOM Diciembre 2018 (Q#14) · EUNACOM Julio 2021 (Q#39) · EUNACOM Diciembre 2022 (Q#52)',
    frecuencia: 'Muy Alta · Farmacocinética comparada, perfiles de acción e indicaciones de inicio en APS',
    svg: null, algoTitle: 'Clasificación Farmacocinética y Criterios de Inicio de Insulina',
    diagram: flow('Algoritmo de Selección de Insulinas e Indicación de Inicio', [
      { t: 'Evaluación de Necesidad de Insulinoterapia en DM', s: 'Indicación absoluta: DM1, cetoacidosis, embarazo, falla renal avanzada (VFG < 30 ml/min) o falla de terapia oral' },
      { k: 'split', q: '¿Insulina Basal (Cubre Ayuno e Interprandial) vs Insulina Prandial (Cubre Comidas)?', s: 'Selección según objetivo fisiológico y perfil farmacocinético', ll: 'Insulina Basal (NPH / Glargina / Degludec)', rl: 'Insulina Prandial (Cristalina / Aspart / Lispro)',
        left: { t: 'Basales: NPH (pico 4-10h, dura 12-18h) o Glargina (sin pico, dura 24h)', s: 'NPH: 1-2 dosis/día (bedtime o matinal/nocturna) · Glargina/Degludec: 1 dosis/día fija, menor hipoglicemia', type: 'acc' },
        right: { t: 'Prandiales: Cristalina (inicio 30m, dura 6-8h) vs Análogos (inicio 10m, dura 3-5h)', s: 'Cristalina: inyectar 30 min precomida · Lispro/Aspart: inyectar inmediatamente antes o tras comer', type: 'warn' },
        ll: 'control basal', rl: 'picos postprandiales' },
      { t: 'Indicaciones Formales de Inicio Inmediato de Insulina en DM2', s: 'HbA1c ≥ 9.0-10.0% con baja de peso y cetonuria · Falla a biterapia/triterapia oral a dosis plenas · Intercurrencia médica aguda grave', type: 'dec', al: 'criterios inicio', from: 'left' },
    ]),
    contexto: 'El conocimiento de los perfiles farmacocinéticos de las insulinas (inicio de acción, pico plasmático y duración efectiva) es evaluado intensamente en el EUNACOM para resolver casos de hipoglicemias nocturnas, ajustes posológicos e hiperglicemias postprandiales. Saber con precisión cuándo está indicada la insulinización en la DM2 (falla de fármacos orales, catabolismo grave, insuficiencia renal avanzada o embarazo) permite tomar decisiones terapéuticas certeras y seguras.',
    contentSections: [
      {
        subhead: '1. Perfiles Farmacocinéticos de las Insulinas Disponibles en Chile',
        paragraphs: [
          'Las insulinas se dividen según su perfil farmacocinético en basales y prandiales. La <strong>insulina NPH (Neutral Protamine Hagedorn)</strong> es una insulina de acción intermedia con inicio a las 1–2 horas, un <em>marcado pico plasmático entre las 4 y 10 horas</em> y una duración total de 12 a 18 horas. Su pico impredecible es la principal causa de <strong>hipoglicemias nocturnas</strong> cuando se administra en la cena en lugar de al acostarse (bedtime, 22:00–23:00 hrs).',
          'Los <strong>análogos basales de segunda generación (Glargina U100/U300 y Degludec)</strong> tienen una absorción lenta, carecen de pico pronunciado ("perfil plano") y ofrecen una duración de 24 hasta 42 horas, con una reducción drástica del riesgo de hipoglicemia nocturna.',
          'Las insulinas prandiales cubren el ascenso glicémico postprandial: la <strong>insulina regular o cristalina</strong> inicia su acción a los 30–60 minutos, tiene un pico a las 2–3 horas y dura 6–8 horas (debe inyectarse 30 minutos antes de la ingesta). Los <strong>análogos ultrarrápidos (Lispro, Aspart, Glulisina)</strong> inician a los 10–15 minutos, alcanzan el pico a la hora y duran 3–5 horas, lo que permite inyectarlos inmediatamente antes de la comida o incluso postprandial inmediato.',
        ],
      },
      {
        subhead: '2. Indicaciones Clínicas de Inicio de Insulina en DM2',
        paragraphs: [
          'En el contexto de la atención primaria y hospitalaria chilena, la insulinoterapia en DM2 está formalmente indicada en los siguientes escenarios: <strong>1) Debut con severa descompensación catabólica:</strong> HbA1c ≥ 9.0–10.0%, glicemias en ayunas > 250–300 mg/dL, poliuria, polidipsia intensa, baja de peso rápida involuntaria o cetonuria; <strong>2) Falla secundaria a la terapia oral:</strong> paciente que con 2 o 3 hipoglucemiantes orales a dosis óptimas (ej. metformina + sulfonilurea/iSGLT2) persiste con HbA1c sobre su meta individualizada tras 3 meses de control.',
          'Otras indicaciones prioritarias incluyen: <strong>3) Contraindicación o intolerancia a hipoglucemiantes orales</strong> (enfermedad renal crónica con VFG < 30 ml/min/1.73m² o falla hepática severa); <strong>4) Embarazo</strong> (la insulina es el fármaco de elección indiscutido); y <strong>5) Hospitalización por evento agudo</strong> (infarto agudo de miocardio, accidente cerebrovascular, sepsis grave, cirugía mayor o uso de corticoides en altas dosis).',
        ],
      },
      {
        subhead: '3. Reglas Prácticas de Administración y Almacenamiento',
        paragraphs: [
          'La insulina no abierta debe conservarse refrigerada entre 2 °C y 8 °C (nunca congelarse). Una vez abierto el frasco o lápiz, puede mantenerse a <strong>temperatura ambiente (hasta 25–30 °C) por un máximo de 28 a 30 días</strong>, protegido del calor y la luz solar directa.',
          'Debe inyectarse por vía subcutánea en abdomen, muslos, brazos o glúteos, <em>rotando siempre los sitios de punción</em> para evitar la <strong>lipohipertrofia</strong>, una complicación frecuente caracterizada por acúmulo de tejido adiposo fibrótico que genera absorción errática de la insulina y oscilaciones glicémicas inexplicables. La insulina cristalina es la <strong>única formulación que puede administrarse por vía endovenosa</strong> en bombas de infusión continua.',
        ],
      },
    ],
    table: {
      title: 'Comparación Farmacocinética de las Principales Formulaciones de Insulina',
      headers: ['Tipo de Insulina', 'Fármacos Representativos', 'Inicio de Acción', 'Pico Máximo', 'Duración Efectiva', 'Momento de Inyección'],
      rows: [
        ['Ultrarrápida (Análogo)', 'Aspart, Lispro, Glulisina', '10 – 15 minutos', '1 – 2 horas', '3 – 5 horas', '0 a 15 min antes de comer (o justo después)'],
        ['Rápida (Humana regular)', 'Cristalina / Regular', '30 – 60 minutos', '2 – 3 horas', '6 – 8 horas', '30 minutos antes de la comida principal'],
        ['Intermedia (Humana NPH)', 'NPH (Isófana)', '1 – 2 horas', '4 – 10 horas (marcado)', '12 – 18 horas', 'Al acostarse (bedtime, 22-23h) o c/12h'],
        ['Prolongada (Análogo)', 'Glargina U100, Detemir', '1 – 2 horas', 'Sin pico (plano)', '20 – 24 horas', '1 vez al día, a la misma hora'],
        ['Ultraprolongada (Análogo)', 'Degludec, Glargina U300', '30 – 90 minutos', 'Sin pico (ultraplano)', '> 24 a 42 horas', '1 vez al día (mayor flexibilidad horaria)'],
      ],
    },
    vignette: 'Un hombre de 56 años con DM2 de 8 años de evolución, en tratamiento con metformina 850 mg c/8h y glibenclamida 10 mg c/12h con adherencia confirmada, consulta por astenia, baja de peso de 5 kg en 2 meses y nicturia. Al examen físico: IMC 27 kg/m², PA 130/80 mmHg, sin edema ni signos de infección. Sus exámenes muestran: glicemia de ayunas 264 mg/dL, HbA1c 10.4%, creatinina 0.9 mg/dL y orina completa sin cetonas ni leucocituria.',
    explicacion: 'El paciente presenta una falla secundaria al tratamiento combinado oral a dosis máximas, evidenciado por HbA1c muy sobre la meta (10.4%) y síntomas catabólicos (baja de peso progresiva). La conducta indicada según las guías clínicas GES y ADA es iniciar insulinoterapia basal con insulina NPH al acostarse (o análogo basal) a dosis de 10 UI o 0.1–0.2 UI/kg/día, manteniendo la metformina y reevaluando el ajuste.',
    keyPoints: [
      'La insulina NPH tiene un pico a las 4–10 horas; inyectada en la cena genera hipoglicemia nocturna; por ello debe indicarse al acostarse (bedtime, 22:00–23:00 hrs).',
      'Los análogos ultrarrápidos (Lispro, Aspart) inician su acción en 10-15 minutos y se administran inmediatamente antes de comer; la cristalina requiere 30 minutos de anticipación.',
      'La insulina cristalina es la única formulación autorizada para uso endovenoso en bombas continuas (cetoacidosis diabética, perioperatorio, UCI).',
      'La lipohipertrofia por no rotar sitios de inyección produce absorción errática, hiperglicemias inexplicables y falsas sospechas de resistencia insulínica.',
      'En DM2 con HbA1c ≥ 9.0–10.0% y síntomas catabólicos (baja de peso, polidipsia), la indicación directa es iniciar insulinoterapia, sin insistir en más fármacos orales.',
      'En insuficiencia renal avanzada (VFG < 30 ml/min), la metformina está contraindicada y la insulina se convierte en el fármaco hipoglucemiante más seguro.',
    ],
    questions: [
      {
        stem: 'Un paciente de 65 años, diabético tipo 2 de 10 años de evolución, consulta por astenia y baja de peso involuntaria de 6 kg en el último mes, acompañada de poliuria y polidipsia. Actualmente toma metformina 850 mg cada 12 horas y glibenclamida 10 mg cada 12 horas. Sus exámenes demuestran: glicemia de ayunas 282 mg/dL, HbA1c 10.8%, creatinina 1.0 mg/dL y sedimento de orina normal. ¿Cuál es la conducta terapéutica más adecuada?',
        opciones: [
          'A) Aumentar la dosis de metformina a 1000 mg cada 8 horas y agregar pioglitazona',
          'B) Suspender glibenclamida e iniciar un inhibidor de DPP-4 (sitagliptina)',
          'C) Iniciar insulina NPH nocturna asociada a metformina',
          'D) Indicar dieta estricta sin carbohidratos y citar a control en 3 meses',
          'E) Cambiar glibenclamida por glimepirida y solicitar prueba de tolerancia a la glucosa oral'
        ],
        correcta: 'C',
        explicacion: 'El paciente presenta síntomas catabólicos francos (baja de peso de 6 kg, poliuria, polidipsia) y una HbA1c de 10.8% pese a estar en biterapia oral a dosis plenas. La indicación indiscutida en la guía GES de DM2 y normas internacionales es el inicio de insulinoterapia basal (NPH nocturna 0.1-0.2 UI/kg o 10 UI bedtime), manteniendo la metformina para mitigar el aumento de peso y mejorar la sensibilidad insulínica.',
        recTag: 'EUNACOM Diciembre 2018 (Q#14)'
      },
      {
        stem: 'Una paciente de 24 años con diabetes mellitus tipo 1 en tratamiento con esquema intensificado de insulina consulta por presentar de forma reiterada episodios de sudoración profusa, palpitaciones y temblor entre las 03:00 y las 04:00 de la madrugada. Utiliza insulina NPH a las 20:00 horas (junto con la cena) e insulina cristalina antes de cada comida principal. ¿Cuál es la modificación farmacológica más apropiada para prevenir estos episodios?',
        opciones: [
          'A) Suspender la dosis de insulina cristalina previa a la cena',
          'B) Trasladar la administración de la insulina NPH desde la cena hacia el momento de acostarse (22:30–23:00 hrs)',
          'C) Reducir los carbohidratos complejos de la colación nocturna',
          'D) Reemplazar la insulina NPH por una dosis matinal única de insulina cristalina',
          'E) Aumentar la dosis de insulina NPH en la cena para superar la hipoglicemia de rebote'
        ],
        correcta: 'B',
        explicacion: 'La insulina NPH presenta un pico de acción máximo entre 4 y 10 horas después de su inyección subcutánea. Si se administra con la cena (20:00 hrs), su pico coincide con el nadir fisiológico de glicemia entre las 02:00 y 04:00 AM, provocando hipoglicemias nocturnas sintomáticas. La medida clásica recomendada es trasladar la inyección de NPH al momento de acostarse ("bedtime", 22:30-23:00 hrs), desplazando el pico hacia las 06:00-08:00 AM, donde coincide con el despertar y el desayuno.',
        recTag: 'EUNACOM Diciembre 2022 (Q#52)'
      }
    ]
  },
  {
    id: 'diab-12',
    classId: 'diab-12',
    tier: 3,
    blockNum: 3,
    blockName: 'Insulinoterapia y Manejo Hospitalario',
    topicLabel: '3.2',
    title: 'Esquemas de Insulinoterapia y Algoritmos de Ajuste de Dosis',
    perfilCode: '1.04.1.005',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES N° 2): Diabetes Mellitus Tipo 2 y Tipo 1',
    reconstrucciones: 'EUNACOM Diciembre 2017 (Q#31) · EUNACOM Julio 2019 (Q#42) · EUNACOM Diciembre 2020 (Q#28) · EUNACOM Julio 2023 (Q#33)',
    frecuencia: 'Máxima · Ajuste de insulina NPH, corrección postprandial, fenómeno del alba y efecto Somogyi',
    svg: null, algoTitle: 'Algoritmo de Titulación de Insulina y Manejo de la Hiperglicemia Matinal',
    diagram: flow('Algoritmo de Titulación de Insulina Basal y Diagnóstico Diferencial Matinal', [
      { t: 'Paciente en Insulinoterapia Basal (NPH Bedtime 10 UI o 0.2 UI/kg)', s: 'Monitoreo de glicemias capilares en ayunas por 3 a 5 días consecutivos (Meta ayuno: 80-130 mg/dL)' },
      { k: 'split', q: '¿Glicemia de Ayuno Fuera de Meta (< 80 mg/dL o > 130 mg/dL)?', s: 'Ajuste cada 3 a 7 días basado en el promedio de glicemias de ayunas', ll: 'Glicemia Ayuno > 130 mg/dL Persistente', rl: 'Glicemia Ayuno < 70-80 mg/dL o Hipoglicemia Nocturna',
        left: { t: 'Aumentar Dosis de Insulina Basal +2 a +4 UI', s: 'Si ayuno 130-180 mg/dL: subir +2 UI · Si ayuno > 180 mg/dL: subir +4 UI · Reevaluar en 3-5 días', type: 'acc' },
        right: { t: 'Reducir Dosis de Insulina Basal -2 a -4 UI (10-20%)', s: 'Prioridad absoluta: seguridad y evitar hipoglicemia nocturna inadvertida', type: 'warn' },
        ll: 'titulación al alza', rl: 'seguridad hipoglicemia' },
      { k: 'split', q: '¿Hiperglicemia Matinal Inexplicable? -> Medir Glicemia a las 03:00 AM', s: 'Permite diferenciar el Efecto Somogyi del Fenómeno del Alba', ll: 'Glicemia 03:00 AM < 70 mg/dL: Somogyi', rl: 'Glicemia 03:00 AM > 100 mg/dL: Fenómeno del Alba',
        left: { t: 'Efecto Somogyi (Rebote Hormonal)', s: 'Hipoglicemia nocturna -> descarga de adrenalina/cortisol -> hiperglicemia matinal. Conducta: BAJAR dosis NPH nocturna o dar colación', type: 'warn' },
        right: { t: 'Fenómeno del Alba (Dawn Phenomenon)', s: 'Pico fisiológico matinal de GH y cortisol sin hipoglicemia previa. Conducta: SUBIR dosis de NPH nocturna (o trasladar a bedtime)', type: 'acc' },
        ll: 'bajar insulina', rl: 'subir insulina' },
      { t: 'Intensificación a Basal-Bolo si Persiste HbA1c Alta con Ayuno Normal', s: 'Si glicemia de ayuno está en meta pero HbA1c > 7%: agregar insulina rápida (1 bolo antes de comida principal)', type: 'dec', al: 'intensificación', from: 'right' },
    ]),
    contexto: 'El ajuste fino de la insulinoterapia es una de las competencias más evaluadas en el EUNACOM. Un error clásico de los médicos recién egresados es aumentar la insulina nocturna ante una hiperglicemia matinal sin haber descartado previamente una hipoglicemia a las 03:00 AM (Efecto Somogyi). Comprender la lógica de la titulación ambulatoria, el esquema basal-plus y basal-bolo, y la regla de ajuste de la insulina prandial según el automonitoreo permite responder con precisión casos clínicos complejos.',
    contentSections: [
      {
        subhead: '1. Esquema Basal Inicial y Reglas de Titulación Ambulatoria en APS',
        paragraphs: [
          'En el paciente con DM2 que inicia insulina, la estrategia de elección en APS es el <strong>esquema basal</strong>: continuar con metformina (para limitar el aumento ponderal y ahorrar dosis de insulina) y agregar <strong>insulina NPH nocturna (10 UI o 0.1–0.2 UI/kg de peso) al acostarse (22:00 a 23:00 hrs)</strong>. Si se dispone de análogos de acción prolongada (Glargina o Degludec), se administra una vez al día a la misma hora.',
          'La titulación se realiza evaluando el promedio de la <strong>glicemia capilar de ayuno</strong> cada 3 a 7 días: si la glicemia de ayuno supera la meta (> 130 mg/dL), se incrementa la dosis en <strong>2 UI</strong> (si ayuno 130–180 mg/dL) o <strong>4 UI</strong> (si ayuno > 180 mg/dL). Si el paciente presenta glicemias < 70 mg/dL o síntomas de hipoglicemia en la madrugada, la dosis debe reducirse inmediatamente en un 10–20% (2 a 4 UI).',
        ],
      },
      {
        subhead: '2. Diagnóstico Diferencial de la Hiperglicemia Matinal: Efecto Somogyi vs Fenómeno del Alba',
        paragraphs: [
          'Cuando un paciente que recibe insulina basal amanece reiteradamente con hiperglicemia (ej. 200–260 mg/dL en ayunas), existen dos mecanismos fisiopatológicos opuestos que exigen conductas antagónicas:',
          '<strong>1) Efecto Somogyi (Hiperglicemia de Rebote):</strong> El paciente recibe un exceso de insulina basal que produce una <em>hipoglicemia inadvertida durante la madrugada (alrededor de las 03:00 AM)</em>. Como respuesta, el organismo libera masivamente hormonas contrarreguladoras (glucagón, adrenalina, cortisol y GH) que inducen glucogenólisis y gluconeogénesis hepática intensa, provocando una marcada hiperglicemia al despertar. El paciente suele referir pesadillas, sudoración nocturna o cefalea matinal. La conducta correcta es <strong>medir la glicemia capilar a las 03:00 AM (que resultará < 70 mg/dL)</strong> y la intervención terapéutica es <strong>DISMINUIR la dosis de insulina basal nocturna o agregar una colación con carbohidratos complejos antes de dormir</strong>.',
          '<strong>2) Fenómeno del Alba (Dawn Phenomenon):</strong> Es el incremento fisiológico de la secreción de hormona de crecimiento y cortisol en las primeras horas de la mañana (04:00 a 08:00 AM), lo que incrementa la resistencia hepática a la insulina sin que haya existido hipoglicemia previa. La glicemia a las 03:00 AM resulta normal o elevada (> 100 mg/dL). La conducta terapéutica correcta es <strong>AUMENTAR la dosis de insulina basal o retrasar su inyección al acostarse</strong>.',
        ],
      },
      {
        subhead: '3. Intensificación del Tratamiento: Esquema Basal-Plus y Basal-Bolo',
        paragraphs: [
          'Si un paciente logra la meta de glicemia de ayuno (80–130 mg/dL) con su dosis basal pero la <strong>HbA1c persiste por encima de la meta tras 3 a 6 meses</strong>, o la dosis de NPH supera las 0.5–0.7 UI/kg/día, significa que las glicemias postprandiales están descontroladas.',
          'El paso siguiente es el esquema <strong>Basal-Plus</strong>: agregar 1 dosis de insulina prandial (ultrarrápida o regular, 4 UI o el 10% de la dosis basal) antes de la comida con mayor carga de carbohidratos o que genera el mayor pico postprandial (habitualmente el almuerzo en Chile). Si el control continúa insuficiente, se progresa al esquema <strong>Basal-Bolo completo</strong> (1–2 dosis basales + 3 bolos prandiales antes de desayuno, almuerzo y cena), esquema obligatorio en todos los pacientes con diabetes mellitus tipo 1.',
        ],
      },
      {
        subhead: '4. Reglas de Ajuste de la Insulina Prandial según Automonitoreo',
        paragraphs: [
          'Cada dosis de insulina prandial modifica primariamente la glicemia postprandial (2 horas después de comer) y la preprandial de la siguiente comida:',
          '• Si la glicemia post-desayuno o pre-almuerzo está elevada: se debe aumentar la insulina rápida del <strong>desayuno</strong>.<br/>' +
          '• Si la glicemia post-almuerzo o pre-once/cena está elevada: se debe aumentar la insulina rápida del <strong>almuerzo</strong>.<br/>' +
          '• Si la glicemia post-cena o al acostarse está elevada: se debe aumentar la insulina rápida de la <strong>cena</strong>.<br/>' +
          '• Si la glicemia de ayunas está elevada (sin Somogyi): se debe aumentar la insulina basal de la noche (NPH bedtime o glargina).',
        ],
      },
      {
        subhead: '5. Seguridad, Sobredosis y Regla de los Carbohidratos',
        paragraphs: [
          'En pacientes con DM1 y esquemas intensificados, el cálculo fino de insulina prandial utiliza dos conceptos clave: el <strong>Ratio Insulina:Carbohidratos (RIC)</strong> (gramos de carbohidratos cubiertos por 1 UI de insulina, estimado con la Regla del 500: 500 / Dosis Total Diaria) y el <strong>Factor de Sensibilidad a la Insulina (FSI)</strong> (miligramos/dL que desciende la glicemia por cada 1 UI de insulina rápida, estimado con la Regla del 1800: 1800 / Dosis Total Diaria).',
          'En atención primaria, el médico general debe evitar aumentos desproporcionados de insulina (> 4 UI por ajuste en pacientes ambulatorios ambulatorios) y reforzar en cada visita la técnica de inyección, la rotación de zonas anatómicas y el reconocimiento de signos de neuroglucopenia.',
        ],
      },
    ],
    table: {
      title: 'Comparación entre Esquemas de Insulinoterapia en Diabetes Mellitus',
      headers: ['Esquema', 'Componentes', 'Población Objetivo', 'Monitoreo Requerido', 'Riesgo Hipoglicemia'],
      rows: [
        ['Basal Bedtime', 'NPH 10 UI o Glargina al acostarse + Metformina oral', 'DM2 que no responde a terapia oral combinada', 'Glicemia capilar matinal en ayunas', 'Bajo a moderado'],
        ['Basal-Plus', 'Basal nocturna + 1 bolo prandial (almuerzo o comida principal)', 'DM2 con ayuno en meta pero HbA1c > 7.0%', 'Ayuno + postprandial de la comida intervenida', 'Moderado'],
        ['Basal-Bolo Intensificado', '1-2 basales (NPH c/12h o Glargina) + 3 bolos prandiales', 'Todos los DM1 y DM2 con déficit insulínico severo', 'Monitoreo 4-6 veces/día (pre y postcomidas)', 'Alto (requiere educación estricta)'],
        ['Bifásico (Mezclas fijas)', 'Premezcla NPH/Cristalina (70/30) 2 veces/día con desayuno y cena', 'DM2 con horarios de comida muy regulares y baja adherencia a múltiples punciones', 'Pre-desayuno y pre-cena', 'Moderado-alto (poca flexibilidad horaria)'],
      ],
    },
    severityTable: {
      title: 'Diagnóstico Diferencial Clave de la Hiperglicemia Matinal',
      headers: ['Parámetro Clínico', 'Efecto Somogyi (Rebote)', 'Fenómeno del Alba (Dawn Phenomenon)', 'Dosis Insuficiente de Basal'],
      rows: [
        ['Mecanismo Fisiopatológico', 'Hipoglicemia nocturna con descarga de hormonas contrarreguladoras (adrenalina, cortisol, glucagón)', 'Pico fisiológico matinal de hormona del crecimiento y cortisol', 'La dosis basal se agota antes de completar las 24 horas'],
        ['Glicemia a las 03:00 AM', '< 70 mg/dL (HIPOGLICEMIA)', '> 100 mg/dL (Normal o elevada)', '> 140 mg/dL (Elevada toda la noche)'],
        ['Síntomas Nocturnos', 'Pesadillas, sudoración profusa nocturna, cefalea matinal', 'Asintomático durante la noche', 'Poliuria y nicturia durante la noche'],
        ['Conducta Terapéutica Inmediata', 'DISMINUIR dosis de insulina basal nocturna o dar colación antes de dormir', 'AUMENTAR dosis de insulina basal nocturna o retrasarla a bedtime', 'Aumentar dosis basal o fraccionar NPH en 2 dosis (mañana y noche)'],
        ['Error Terapéutico Típico', 'Subir la insulina nocturna: agrava la hipoglicemia y perpetúa el rebote', 'Bajar la insulina nocturna: incrementa más la hiperglicemia', 'Agregar insulina rápida nocturna sin tocar la basal'],
      ],
    },
    treatmentTable: {
      title: 'Algoritmo de Titulación Escalonada de Insulina NPH Ambulatoria',
      headers: ['Nivel de Glicemia en Ayuno', 'Ajuste de Dosis Basal', 'Frecuencia de Control', 'Objetivo Clínico'],
      rows: [
        ['< 70 mg/dL (Hipoglicemia)', 'Reducir 2 a 4 UI (o 10-20% de la dosis)', 'Inmediato (control al día siguiente)', 'Evitar hipoglicemia grave y neuroglucopenia'],
        ['70 – 130 mg/dL (En Meta)', 'Mantener dosis sin cambios', 'Cada 3 meses con HbA1c', 'Consolidar control glucémico basal'],
        ['131 – 180 mg/dL (Levemente alta)', 'Aumentar 2 UI de NPH al acostarse', 'Reevaluar en 3 a 7 días con 3 ayunos', 'Llevar progresivamente a meta < 130 mg/dL'],
        ['> 180 mg/dL (Francamente alta)', 'Aumentar 4 UI de NPH al acostarse', 'Reevaluar en 3 a 5 días', 'Superar rápidamente la glucotoxicidad'],
        ['Postprandial > 180 mg/dL con ayuno en meta', 'Agregar 4 UI de insulina rápida antes de esa comida', 'Reevaluar glicemia a las 2h postprandial', 'Tránsito a esquema Basal-Plus'],
      ],
    },
    vignette: 'Un joven de 20 años con diabetes mellitus tipo 1 en tratamiento con una dosis matinal de insulina NPH y tres dosis de insulina cristalina preprandiales (desayuno, almuerzo y cena). Trae su registro de automonitoreo de los últimos 7 días: glicemia en ayunas 105 mg/dL, post-desayuno 120 mg/dL, pre-almuerzo 110 mg/dL, post-almuerzo 238 mg/dL, pre-cena 125 mg/dL y post-cena 130 mg/dL. Se encuentra asintomático y cumple rigurosamente su dieta.',
    explicacion: 'El análisis metódico del registro glucémico muestra que todas las glicemias se encuentran dentro de las metas recomendadas (80–130 mg/dL preprandial y < 180 mg/dL postprandial), excepto la glicemia postprandial del almuerzo que se eleva marcadamente a 238 mg/dL. Dado que la insulina cristalina preprandial tiene su acción máxima y cobertura directa sobre la comida que le sigue, la conducta correcta es aumentar la dosis de insulina cristalina previa al almuerzo.',
    keyPoints: [
      'La regla de oro del ajuste prandial: la glicemia elevada tras una comida se corrige modificando la dosis de insulina rápida previa a ESA comida específica.',
      'Ante una hiperglicemia matinal inexplicable, el primer paso clínico OBLIGATORIO es solicitar una glicemia capilar a las 03:00 AM para descartar Somogyi.',
      'Si a las 03:00 AM la glicemia es < 70 mg/dL, es Efecto Somogyi y la conducta es REDUCIR la insulina nocturna; si es > 100 mg/dL, es Fenómeno del Alba y se debe SUBIR.',
      'El esquema basal bedtime consiste en NPH 10 UI o 0.1-0.2 UI/kg a las 22:00-23:00 hrs manteniendo metformina oral.',
      'Los ajustes de insulina basal ambulatoria se realizan cada 3 a 7 días en escalones de +2 UI (si 130-180 mg/dL) o +4 UI (si > 180 mg/dL).',
      'Si el paciente presenta hipoglicemia en cualquier momento, la dosis responsable debe reducirse inmediatamente en un 10-20% (2 a 4 UI).',
      'Si la glicemia de ayuno está en meta (< 130 mg/dL) pero la HbA1c sigue > 7.0%, se debe iniciar esquema Basal-Plus cubriendo la comida con mayor excursión glucémica.',
      'La regla del 1800 permite calcular el Factor de Sensibilidad a la Insulina (FSI = 1800 / Dosis Total Diaria) para indicar bolos de corrección seguros.',
    ],
    questions: [
      {
        stem: 'Un paciente de 20 años, con diagnóstico de diabetes mellitus tipo 1, se encuentra en tratamiento con una dosis de insulina NPH matinal y tres dosis de insulina cristalina preprandiales. Se realiza un automonitoreo capilar que demuestra glicemias basales y postprandiales normales, excepto la glicemia medida dos horas después del almuerzo, que de manera constante se encuentra entre 220 y 250 mg/dL. ¿Cuál es la conducta más adecuada?',
        opciones: [
          'A) Aumentar la dosis de insulina NPH matinal',
          'B) Aumentar la dosis de insulina cristalina previa al almuerzo',
          'C) Agregar una dosis de insulina NPH antes del almuerzo',
          'D) Aumentar la dosis de insulina cristalina previa al desayuno',
          'E) Indicar una colación rica en proteínas a media tarde'
        ],
        correcta: 'B',
        explicacion: 'La insulina cristalina administrada antes de una comida tiene como función específica controlar la excursión glucémica postprandial producida por dicha ingesta. Dado que el paciente presenta exclusivamente hiperglicemias postprandiales tras el almuerzo (220-250 mg/dL), manteniendo el resto de sus mediciones en rangos óptimos, la conducta terapéutica precisa es aumentar la dosis de insulina cristalina administrada antes del almuerzo.',
        recTag: 'EUNACOM Diciembre 2017 (Q#31)'
      },
      {
        stem: 'Un paciente de 18 años, con diabetes mellitus tipo 1 en tratamiento con insulina NPH en dos dosis (mañana y noche) e insulina ultra-rápida antes de las comidas, consulta porque sus controles de glicemia matinal en ayunas resultan constantemente elevados, fluctuando entre 220 y 260 mg/dL. No presenta síntomas diurnos. Para precisar la causa de esta alteración y definir el tratamiento, ¿cuál es la conducta más adecuada?',
        opciones: [
          'A) Aumentar en 4 unidades la dosis de insulina NPH nocturna de forma empírica',
          'B) Solicitar una glicemia capilar a las 03:00 de la madrugada',
          'C) Solicitar una hemoglobina glicosilada fraccionada urgente',
          'D) Adelantar la inyección de NPH nocturna a la hora de la cena',
          'E) Cambiar la insulina ultra-rápida por insulina regular pre-cena'
        ],
        correcta: 'B',
        explicacion: 'La hiperglicemia matinal en ayunas en un paciente con insulina basal nocturna puede deberse a dos fenómenos con manejos radicalmente opuestos: el Efecto Somogyi (hipoglicemia nocturna que desencadena rebote hiperglicémico por hormonas contrarreguladoras) o el Fenómeno del Alba (hiperglicemia por secreción matinal de GH y cortisol). La única manera de diferenciarlos con certeza es medir la glicemia capilar en la madrugada (alrededor de las 03:00 AM). Si es baja (< 70 mg/dL) se reduce la insulina nocturna; si es normal o alta, se incrementa.',
        recTag: 'EUNACOM Julio 2019 (Q#42)'
      },
      {
        stem: 'Una mujer de 58 años, diabética tipo 2 en tratamiento con metformina 850 mg cada 12 horas e insulina NPH 14 UI al acostarse (22:30 hrs). Trae su control de glicemias capilares de ayuno de los últimos 5 días: 188, 192, 179, 195 y 184 mg/dL. No ha presentado sudoración nocturna, temblores ni pesadillas. La glicemia a las 03:00 AM fue de 145 mg/dL. ¿Cuál es el ajuste farmacológico más adecuado?',
        opciones: [
          'A) Disminuir la insulina NPH a 10 UI al acostarse',
          'B) Mantener la dosis actual y solicitar curva de tolerancia a la glucosa oral',
          'C) Aumentar la insulina NPH a 18 UI al acostarse',
          'D) Suspender la metformina y cambiar a sulfonilurea matinal',
          'E) Agregar 10 UI de insulina cristalina a las 22:30 hrs'
        ],
        correcta: 'C',
        explicacion: 'La paciente presenta glicemias de ayuno persistentemente elevadas (> 180 mg/dL) con una medición a las 03:00 AM también elevada (145 mg/dL), lo que descarta de plano un efecto Somogyi y confirma que la dosis de insulina basal nocturna es insuficiente. Según el algoritmo de titulación de insulina basal, ante glicemias de ayuno > 180 mg/dL se debe incrementar la dosis de insulina basal nocturna en 4 unidades (de 14 a 18 UI), reevaluando en 3 a 5 días.',
        recTag: 'EUNACOM Diciembre 2020 (Q#28)'
      },
      {
        stem: 'Un paciente de 62 años con DM2 en insulinoterapia basal con NPH 26 UI al acostarse y metformina 850 mg cada 8 horas. Sus glicemias de ayuno se encuentran perfectamente controladas (promedio 102 mg/dL), pero su último control de HbA1c resulta en 8.4%. Su automonitoreo evidencia glicemias post-almuerzo de 230–260 mg/dL, mientras que tras el desayuno y cena son de 130–145 mg/dL. ¿Cuál es la estrategia recomendada por las guías clínicas?',
        opciones: [
          'A) Aumentar la dosis de insulina NPH nocturna a 34 UI',
          'B) Iniciar esquema Basal-Plus agregando un bolo de insulina prandial antes del almuerzo',
          'C) Fraccionar la insulina NPH en dos tercios en la mañana y un tercio en la noche',
          'D) Agregar glibenclamida 10 mg con el almuerzo',
          'E) Suspender la insulina y reiniciar monoterapia con metformina'
        ],
        correcta: 'B',
        explicacion: 'El paciente ha alcanzado la meta de glicemia de ayuno mediante su insulina basal nocturna, pero persiste fuera de la meta de HbA1c (< 7.0%) debido a excursiones hiperglicémicas postprandiales marcadas concentradas exclusivamente en el almuerzo (230-260 mg/dL). La conducta de intensificación avalada internacionalmente es la transición a un esquema Basal-Plus, incorporando un bolo de insulina prandial (rápida o ultrarrápida, 4 UI o 10% de la basal) inmediatamente antes del almuerzo.',
        recTag: 'EUNACOM Julio 2023 (Q#33)'
      }
    ]
  },
  {
    id: 'diab-13',
    classId: 'diab-13',
    tier: 2,
    blockNum: 3,
    blockName: 'Insulinoterapia y Manejo Hospitalario',
    topicLabel: '3.3',
    title: 'Manejo de la Hiperglicemia en el Paciente Hospitalizado',
    perfilCode: '1.04.1.004',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES N° 2): Diabetes Mellitus Tipo 2',
    reconstrucciones: 'EUNACOM Julio 2018 (Q#25) · EUNACOM Diciembre 2021 (Q#47)',
    frecuencia: 'Alta · Metas glicémicas hospitalarias, suspensión de fármacos orales y proscripción del esquema móvil aislado',
    svg: null, algoTitle: 'Algoritmo de Control Glucémico en el Paciente Hospitalizado no Crítico',
    diagram: flow('Protocolo de Manejo de la Hiperglicemia en Hospitalización', [
      { t: 'Ingreso Hospitalario de Paciente con Diabetes o Hiperglicemia (> 140 mg/dL)', s: 'Paso 1: Suspender hipoglucemiantes orales (especialmente metformina ante sepsis, falla renal o contrastes)' },
      { k: 'split', q: '¿Paciente Crítico (UCI / Shock) vs No Crítico (Sala Básica / Quirúrgica)?', s: 'Define vía de administración de insulina y rango meta', ll: 'Paciente Crítico en UCI', rl: 'Paciente No Crítico en Sala Básica',
        left: { t: 'Infusión Continua EV de Insulina Cristalina', s: 'Meta glicémica: 140 – 180 mg/dL · Control glicemia capilar c/1-2 horas en bomba de infusión', type: 'warn' },
        right: { t: 'Esquema Subcutáneo Basal-Corrección (o Basal-Bolo)', s: 'Meta glicémica: 140 – 180 mg/dL · PROSCRIBIR el esquema móvil ("sliding scale") como terapia exclusiva', type: 'acc' },
        ll: 'UCI / infusión EV', rl: 'sala / subcutáneo' },
      { t: 'Esquema Basal-Corrección Subcutáneo Recomendado', s: 'Insulina NPH (o Glargina) 0.2-0.3 UI/kg/día + Bolos de Cristalina según escala de corrección precomida', type: 'dec', al: 'esquema seguro', from: 'right' },
    ]),
    contexto: 'El manejo de la hiperglicemia intrahospitalaria ha sido objeto de múltiples preguntas en el EUNACOM. La evidencia clínica contemporánea proscribe formalmente el uso del "esquema móvil" de insulina (sliding scale) como estrategia única, debido a que no previene la hiperglicemia sino que la trata tardíamente ("persiguiendo la glicemia") e incrementa las hipoglicemias. Asimismo, la suspensión sistemática de metformina al ingreso para prevenir acidosis láctica es una regla clínica de máxima jerarquía.',
    contentSections: [
      {
        subhead: '1. Metas Glicémicas y Clasificación de la Hiperglicemia Hospitalaria',
        paragraphs: [
          'Se define <strong>hiperglicemia hospitalaria</strong> como cualquier glicemia > 140 mg/dL documentada en un paciente internado, tenga o no diagnóstico previo de diabetes. La presencia de hiperglicemia de estrés se asocia directamente a mayor morbimortalidad, tasa de infecciones de herida operatoria, estadía prolongada y falla multiorgánica.',
          'La meta glucémica universal tanto en pacientes críticos (UCI) como no críticos (salas de medicina y cirugía) es <strong>mantener la glicemia entre 140 y 180 mg/dL (7.8 – 10.0 mmol/L)</strong>. Metas más estrictas (< 110 mg/dL) demostraron en grandes ensayos clínicos (NICE-SUGAR) un incremento inaceptable de hipoglicemias severas y mortalidad cardiovascular.',
        ],
      },
      {
        subhead: '2. Suspensión de Fármacos Orales y Regla de la Metformina',
        paragraphs: [
          'Al momento del ingreso hospitalario, la norma de buena práctica clínica exige <strong>suspender la totalidad de los hipoglucemiantes orales</strong>:',
          '• <strong>Metformina:</strong> Debe suspenderse de forma mandatoria ante cualquier sospecha de sepsis, hipoperfusión tisular, inestabilidad hemodinámica, insuficiencia renal aguda, hipoxemia o administración programada de medios de contraste yodados, por el riesgo letal de <em>acidosis láctica asociada a metformina (MALA)</em>.<br/>' +
          '• <strong>Sulfonilureas (glibenclamida):</strong> Deben suspenderse inmediatamente por el alto riesgo de hipoglicemias prolongadas en pacientes con ingesta oral irregular o en régimen cero.<br/>' +
          '• <strong>iSGLT2:</strong> Deben suspenderse ante cirugías mayores o cuadros infecciosos por el riesgo de cetoacidosis diabética euglicémica.',
        ],
      },
      {
        subhead: '3. El Fin del Esquema Móvil Aislado y la Terapia Basal-Bolo/Corrección',
        paragraphs: [
          'Uno de los errores más sancionados en el EUNACOM es indicar un <em>"esquema móvil de insulina cristalina según hemoglucotest"</em> de forma aislada. Este esquema es reactivo, genera grandes fluctuaciones ("montaña rusa glucémica") y no aporta cobertura basal.',
          'La estrategia de elección en sala de hospitalización es el <strong>esquema basal-corrección (si el paciente está en ayunas) o basal-bolo-corrección (si tolera alimentación oral)</strong>: se calcula una dosis total diaria de 0.2 a 0.4 UI/kg/día, administrando el 50% como insulina basal (NPH cada 12 horas o Glargina una vez al día) y el 50% restante fraccionado en bolos prandiales con insulina rápida, agregando una escala de corrección preprandial según el nivel glucémico capilar.',
        ],
      },
    ],
    table: {
      title: 'Manejo de Fármacos Antidiabéticos en el Paciente Hospitalizado',
      headers: ['Fármaco / Esquema', 'Conducta al Ingreso', 'Riesgo Principal', 'Estrategia de Reemplazo'],
      rows: [
        ['Metformina', 'SUSPENDER sistemáticamente', 'Acidosis láctica ante sepsis, hipoxemia o contraste', 'Insulina basal + bolos de corrección'],
        ['Sulfonilureas (Glibenclamida)', 'SUSPENDER sistemáticamente', 'Hipoglicemia severa y prolongada (inapetencia / ayuno)', 'Insulina basal + bolos de corrección'],
        ['iSGLT2 (Dapagliflozina, etc.)', 'SUSPENDER sistemáticamente', 'Cetoacidosis diabética euglicémica y deshidratación', 'Insulina subcutánea programada'],
        ['Esquema Móvil Aislado ("Sliding scale")', 'PROSCRIBIR como terapia única', 'Ineficacia, hiperglicemia de rebote e hipoglicemia', 'Esquema Basal-Bolo o Basal-Corrección'],
        ['Insulina Cristalina EV en Bomba', 'De elección en UCI y paciente crítico', 'Hipoglicemia si no hay control horario', 'Control de hemoglucotest c/1-2 horas'],
      ],
    },
    vignette: 'Un hombre de 68 años con DM2 de larga data en tratamiento domiciliario con metformina 850 mg c/12h ingresa al servicio de medicina por una neumonía adquirida en la comunidad grave. Al ingreso: PA 95/60 mmHg, FC 108 lpm, saturación 89% con aire ambiental, creatinina 1.6 mg/dL (basal 0.9 mg/dL) y glicemia capilar de 240 mg/dL. El médico de turno evalúa qué esquema terapéutico indicar para el control de su diabetes.',
    explicacion: 'El paciente presenta una infección respiratoria aguda con inestabilidad hemodinámica e insuficiencia renal aguda prerrenal. La conducta mandatoria es suspender inmediatamente la metformina para evitar el riesgo inminente de acidosis láctica, e iniciar insulinoterapia subcutánea con esquema basal-corrección (insulina NPH o glargina más bolos de corrección según glicemia capilar preprandial), con meta entre 140 y 180 mg/dL.',
    keyPoints: [
      'La meta de glicemia en el paciente hospitalizado (crítico y no crítico) es universalmente 140 – 180 mg/dL (7.8 – 10.0 mmol/L).',
      'Metas estrictas (< 110 mg/dL) en hospitalizados aumentan la mortalidad por hipoglicemia severa (evidencia del ensayo NICE-SUGAR).',
      'La metformina DEBE suspenderse siempre ante sepsis, shock, insuficiencia renal aguda, hipoxemia o uso de contraste yodado por riesgo de acidosis láctica.',
      'Las sulfonilureas deben suspenderse al ingresar al hospital por el riesgo extremo de hipoglicemias prolongadas en pacientes con ingesta errática.',
      'El uso exclusivo del esquema móvil de insulina rápida (sliding scale) está proscrito por ineficaz y riesgoso; debe usarse un esquema basal-corrección.',
      'En la UCI y en pacientes hemodinámicamente inestables, la vía de elección para la insulina es la infusión endovenosa continua con controles horarios.',
    ],
    questions: [
      {
        stem: 'Un paciente de 72 años, diabético tipo 2 en tratamiento ambulatorio regular con metformina 850 mg cada 8 horas, ingresa al hospital por un cuadro de sepsis de foco urinario, evidenciándose PA 88/55 mmHg, taquicardia de 112 lpm y creatinina plasmática de 2.2 mg/dL. Su glicemia capilar de ingreso es de 260 mg/dL. ¿Cuál es la indicación farmacológica más apropiada para el manejo de su diabetes durante la hospitalización?',
        opciones: [
          'A) Continuar metformina y agregar glibenclamida 5 mg cada 12 horas',
          'B) Suspender metformina e indicar insulina cristalina en esquema móvil aislado según hemoglucotest cada 6 horas',
          'C) Suspender metformina e iniciar insulinoterapia con esquema basal más correcciones de insulina rápida subcutánea',
          'D) Mantener metformina reduciendo la dosis a la mitad y administrar bicarbonato profiláctico',
          'E) Indicar hidratación vigorosa sin administrar hipoglucemiantes hasta que la glicemia supere los 300 mg/dL'
        ],
        correcta: 'C',
        explicacion: 'En todo paciente hospitalizado con sepsis, falla renal aguda o hipotensión, la metformina debe suspenderse de inmediato ante el elevado riesgo de acidosis láctica. Asimismo, el uso exclusivo del "esquema móvil" está contraindicado por su ineficacia y variabilidad. La conducta correcta y estándar es iniciar insulinoterapia programada mediante un esquema basal (NPH o análogo prolongado) complementado con dosis de corrección de insulina rápida subcutánea, buscando una meta glicémica entre 140 y 180 mg/dL.',
        recTag: 'EUNACOM Julio 2018 (Q#25)'
      },
      {
        stem: '¿Cuál es el rango de glicemia recomendado como objetivo terapéutico en la gran mayoría de los pacientes diabéticos adultos no gestantes hospitalizados en servicios de medicina interna?',
        opciones: [
          'A) 70 a 100 mg/dL',
          'B) 80 a 130 mg/dL',
          'C) 140 a 180 mg/dL',
          'D) 180 a 250 mg/dL',
          'E) Menor a 110 mg/dL en todo momento'
        ],
        correcta: 'C',
        explicacion: 'Las guías clínicas internacionales (ADA, Endocrine Society) y los consensos hospitalarios establecen que la meta de glicemia recomendada para la gran mayoría de los pacientes hospitalizados (tanto críticos como no críticos en salas de medicina) es de 140 a 180 mg/dL (7.8 a 10.0 mmol/L). Intentar descensos a valores < 110 mg/dL no reduce complicaciones infecciosas y se asocia a un aumento drástico de hipoglicemias severas y mortalidad global.',
        recTag: 'EUNACOM Diciembre 2021 (Q#47)'
      }
    ]
  },
  {
    id: 'diab-14',
    classId: 'diab-14',
    tier: 3,
    blockNum: 3,
    blockName: 'Insulinoterapia y Manejo Hospitalario',
    topicLabel: '3.4',
    title: 'Hipoglicemias: Tríada de Whipple, Fármacos Culpables y Rescate',
    perfilCode: '1.04.1.018, 1.04.1.019',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES N° 2): Diabetes Mellitus / Urgencia Médica APS',
    reconstrucciones: 'EUNACOM Diciembre 2016 (Q#19) · EUNACOM Julio 2018 (Q#34) · EUNACOM Diciembre 2020 (Q#11) · EUNACOM Julio 2022 (Q#40)',
    frecuencia: 'Máxima · Diagnóstico clínico, regla de los 15, hospitalización obligatoria por sulfonilureas y estudio de hipoglicemia facticia',
    svg: null, algoTitle: 'Algoritmo de Diagnóstico, Rescate y Criterios de Hospitalización en Hipoglicemia',
    diagram: flow('Algoritmo de Manejo de la Hipoglicemia Aguda y Criterios de Hospitalización', [
      { t: 'Sospecha Clínica de Hipoglicemia (Tríada de Whipple)', s: '1. Síntomas autonómicos/neuroglucopénicos + 2. Glicemia < 70 mg/dL + 3. Alivio inmediato con glucosa' },
      { k: 'split', q: '¿Paciente Consciente y Capaz de Tragar vs Inconsciente / Sopor Severo?', s: 'Define vía oral inmediata vs vía parenteral de emergencia', ll: 'Consciente (Deglución Conservada)', rl: 'Inconsciente / Convulsiones / Sopor',
        left: { t: 'Regla de los 15 (Vía Oral)', s: '15 g de carbohidratos simples (150 ml bebida común o 3 cucharaditas de azúcar en agua) · Esperar 15 min y repetir hemoglucotest', type: 'acc' },
        right: { t: 'Glucosa Endovenosa o Glucagón Parenteral', s: 'Ampollas de Glucosa al 30% (20-50 ml EV en bolo) o Glucagón 1 mg IM/SC · Seguir con infusión SG 10%', type: 'warn' },
        ll: 'oral 15-15', rl: 'emergencia EV' },
      { k: 'split', q: '¿Hipoglicemia Secundaria a Sulfonilurea (Glibenclamida)?', s: '¡Peligro de hipoglicemia recurrente por semivida prolongada y metabolitos activos!', ll: 'Sí: Inducida por Glibenclamida', rl: 'No: Error de Dosis de Insulina / Ejercicio',
        left: { t: 'HOSPITALIZACIÓN OBLIGATORIA POR 24-48 HORAS', s: 'Infusión continua de SG 10% y monitoreo horario · ¡Prohibido dar de alta aunque se recupere!', type: 'crit' },
        right: { t: 'Observación Ambulatoria y Ajuste de Dosis', s: 'Dar colación con carbohidratos complejos · Ajustar dosis de insulina prandial o basal · Alta con acompañante', type: 'acc' },
        ll: 'hospitalizar 24-48h', rl: 'alta tras colación' },
    ]),
    contexto: 'La hipoglicemia es la urgencia endocrinológica más frecuente en atención primaria y servicios de urgencia. En el EUNACOM se evalúa de manera recurrente la capacidad de reconocer la tríada de Whipple, ejecutar el rescate inmediato con la regla de los 15 o glucosa endovenosa al 30%, y muy especialmente, evitar el error médico grave de otorgar el alta inmediata a un paciente intoxicado por glibenclamida tras haber recuperado la conciencia, ya que sus metabolitos activos generan hipoglicemias refractarias y letales horas más tarde.',
    contentSections: [
      {
        subhead: '1. Definición, Niveles de Severidad y Tríada de Whipple',
        paragraphs: [
          'La Asociación Americana de Diabetes (ADA) clasifica la hipoglicemia en tres niveles: <strong>Nivel 1 (Valor de alerta):</strong> Glicemia < 70 mg/dL (3.9 mmol/L); <strong>Nivel 2 (Hipoglicemia clínicamente significativa):</strong> Glicemia < 54 mg/dL (3.0 mmol/L), umbral donde comienzan los síntomas neuroglucopénicos; y <strong>Nivel 3 (Hipoglicemia severa):</strong> Evento caracterizado por compromiso de conciencia, convulsiones o incapacidad de autotratamiento que requiere asistencia de un tercero, independiente de la cifra exacta de glicemia.',
          'En pacientes no diabéticos o en el estudio diagnóstico, la <strong>Tríada de Whipple</strong> es el estándar de confirmación: 1) Síntomas y signos compatibles con hipoglicemia; 2) Documentación bioquímica de glicemia plasmática baja (< 55 mg/dL en no diabéticos o < 70 mg/dL en diabéticos tratados); y 3) <em>Resolución completa e inmediata de los síntomas tras la elevación de la glicemia</em> mediante la administración de carbohidratos o glucosa.',
        ],
      },
      {
        subhead: '2. Fisiopatología y Semiología: Síntomas Autonómicos vs Neuroglucopénicos',
        paragraphs: [
          'Los síntomas de la hipoglicemia se dividen en dos grupos cronológicos y fisiopatológicos:',
          '• <strong>Síntomas neurovegetativos o autonómicos (activación simpática y parasimpática):</strong> Aparecen primero (típicamente con glicemias < 70–65 mg/dL) como señal de alarma: diaforesis fría y profusa, temblor distal, taquicardia, palpitaciones, palidez cutánea, ansiedad intensa y hambre voraz (hambre dolorosa). Los <em>betabloqueadores no cardioselectivos (como propranolol) enmascaran estos síntomas</em> (excepto la sudoración), aumentando el riesgo de hipoglicemia inadvertida.<br/>' +
          '• <strong>Síntomas neuroglucopénicos (deprivación de glucosa en el SNC):</strong> Ocurren con glicemias < 54–50 mg/dL cuando el cerebro se queda sin su sustrato energético primario: cefalea, visión borrosa o diplopía, confusión mental, disartria, conducta bizarra o agresiva, ataxia, convulsiones tónico-clónicas, sopor profundo y coma.',
        ],
      },
      {
        subhead: '3. Protocolo de Rescate: Regla de los 15 vs Glucosa Endovenosa y Glucagón',
        paragraphs: [
          'El manejo depende críticamente del estado de conciencia y de la capacidad de deglución del paciente:',
          '<strong>A) Paciente Consciente (con deglución conservada):</strong> Se aplica la <strong>Regla de los 15</strong>. Administrar <strong>15 gramos de carbohidratos de absorción rápida por vía oral</strong> (ej. 150 ml de bebida no light, 150 ml de jugo de frutas azucarado, 3–4 cucharaditas de azúcar disueltas en agua o 3 caramelos masticables). <em>Esperar 15 minutos en reposo y repetir la glicemia capilar</em>. Si persiste < 70 mg/dL, repetir 15 gramos de carbohidratos. Una vez superada la meta (> 70 mg/dL), el paciente debe ingerir una colación con carbohidratos complejos (pan, galletas, leche) para evitar una recaída.',
          '<strong>B) Paciente Inconsciente o con Vía Oral No Segura:</strong> <em>¡Está estrictamente prohibido administrar líquidos o comida por boca por riesgo de broncoaspiración fatal!</em> En el ámbito hospitalario o de urgencia, administrar <strong>Glucosa al 30% en bolo endovenoso (20 a 50 ml, equivalente a 2 a 4 ampollas de glucosa al 30%)</strong> o Glucosa al 10% (150–200 ml EV en bolo rápido), seguido de una infusión continua de Suero Glucosado al 10% a 80–100 ml/hora. En el ámbito extrahospitalario o sin vía venosa, administrar <strong>Glucagón 1 mg por vía intramuscular o subcutánea</strong> (o glucagón intranasal 3 mg si está disponible).',
        ],
      },
      {
        subhead: '4. La Trampa de la Glibenclamida y Criterios de Hospitalización Obligatoria',
        paragraphs: [
          'La <strong>glibenclamida</strong> es la causa más común de hipoglicemias severas prolongadas en adultos mayores en Chile. Posee una vida media prolongada (hasta 10–16 horas) y <em>metabolitos activos que se acumulan intensamente en pacientes con falla renal, deshidratación o hipoalbuminemia</em>.',
          '<strong>Regla de Oro para el EUNACOM:</strong> Todo paciente que presente un episodio de hipoglicemia inducido por sulfonilureas (glibenclamida, glimepirida) <strong>DEBE QUEDAR HOSPITALIZADO EN OBSERVACIÓN POR UN MÍNIMO DE 24 A 48 HORAS</strong>, con infusión continua de suero glucosado al 10% y monitoreo seriado de glicemias capilares. Dar de alta a un paciente porque "despertó y está bien tras el bolo de glucosa EV" es una negligencia médica gravísima evaluada como distractor incorrecto en el examen.',
        ],
      },
      {
        subhead: '5. Estudio Diagnóstico de Hipoglicemia en el Paciente No Diabético',
        paragraphs: [
          'Cuando un paciente sin antecedente de diabetes presenta hipoglicemias espontáneas con tríada de Whipple confirmada, se debe tomar una muestra crítica de sangre durante el episodio de hipoglicemia (glicemia < 55 mg/dL) midiendo simultáneamente: <strong>Glicemia, Insulina plasmática, Péptido C, Proinsulina y Detección de Sulfonilureas en orina</strong>.',
          '• <strong>Insulinoma (Tumor neuroendocrino de células beta):</strong> Se caracteriza por glicemia baja con <em>Insulina plasmática alta y Péptido C elevado</em> (hiperinsulinismo endógeno).<br/>' +
          '• <strong>Hipoglicemia Facticia por Insulina Exógena:</strong> El paciente se inyecta insulina subrepticiamente. Se observa <em>Insulina plasmática muy elevada pero Péptido C INDETECTABLE o suprimido</em> (ya que la insulina farmacéutica no contiene péptido C).<br/>' +
          '• <strong>Hipoglicemia Facticia por Sulfonilureas:</strong> Se observa Insulina y Péptido C elevados (simulando un insulinoma), pero se detecta la sulfonilurea en el screening toxicológico de orina o plasma.',
        ],
      },
    ],
    table: {
      title: 'Clasificación de Severidad de la Hipoglicemia según ADA y MINSAL',
      headers: ['Nivel de Severidad', 'Valor Bioquímico', 'Manifestaciones Clínicas', 'Estrategia Terapéutica Primaria'],
      rows: [
        ['Nivel 1 (Alerta)', 'Glicemia < 70 mg/dL y ≥ 54 mg/dL', 'Síntomas adrenérgicos leves (sudoración, temblor, hambre)', 'Regla de los 15 por vía oral (15 g de hidratos de carbono simples)'],
        ['Nivel 2 (Significativa)', 'Glicemia < 54 mg/dL (< 3.0 mmol/L)', 'Síntomas neuroglucopénicos incipientes (confusión, cefalea)', 'Carbohidratos orales rápidos inmediatos + colación compleja'],
        ['Nivel 3 (Severa)', 'Sin umbral numérico fijo', 'Compromiso de conciencia, convulsión, incapacidad de autotratamiento', 'Glucosa al 30% EV en bolo (20-50 ml) o Glucagón 1 mg IM/SC'],
      ],
    },
    severityTable: {
      title: 'Diagnóstico Diferencial Bioquímico de Hipoglicemias Espontáneas en Sangre Crítica',
      headers: ['Etiología de la Hipoglicemia', 'Glicemia', 'Insulina Plasmática', 'Péptido C', 'Sulfonilureas en Orina'],
      rows: [
        ['Insulinoma (Adenoma Pancreático)', 'Muy Baja (< 50 mg/dL)', 'Elevada (Inapropiada)', 'ELEVADO (Endógeno)', 'Negativo'],
        ['Hipoglicemia Facticia por Insulina Exógena', 'Muy Baja (< 50 mg/dL)', 'Muy Elevada (Exógena)', 'INDETECTABLE / BAJO', 'Negativo'],
        ['Hipoglicemia Facticia por Ingesta de Sulfonilureas', 'Muy Baja (< 50 mg/dL)', 'Elevada (Inapropiada)', 'ELEVADO (Estimulación)', 'POSITIVO'],
        ['Insuficiencia Suprarrenal / Hipopituitarismo', 'Baja (< 60 mg/dL)', 'Baja o suprimida', 'Bajo', 'Negativo (Cortisol plasmático muy bajo)'],
      ],
    },
    treatmentTable: {
      title: 'Protocolo de Rescate Terapéutico en Hipoglicemia Aguda',
      headers: ['Escenario Clínico', 'Tratamiento de Primera Línea', 'Monitoreo Inmediato', 'Destino del Paciente'],
      rows: [
        ['Consciente, coopera, vía oral expedita', '15 g de azúcar simple disuelta en agua o 150 ml jugo azucarado', 'Repetir glicemia a los 15 minutos. Si < 70, repetir dosis', 'Observación ambulatoria breve + colación de carbohidratos complejos'],
        ['Inconsciente en SAPU / Hospital con VVP', 'Glucosa al 30% 20–50 ml EV en bolo (o SG 10% 200 ml EV rápido)', 'Repetir hemoglucotest en 10-15 min tras bolo + SG 10% mantención', 'Si fue por insulina y come bien: alta. Si fue por glibenclamida: HOSPITALIZAR'],
        ['Inconsciente en domicilio / Sin acceso venoso', 'Glucagón 1 mg IM o SC (en deltoides o muslo)', 'Evaluar recuperación en 10-15 min; canalizar VVP y trasladar', 'Traslado en ambulancia a servicio de urgencia'],
        ['Hipoglicemia por Sulfonilurea (Glibenclamida)', 'Bolo de Glucosa EV + Infusión continua de Suero Glucosado al 10%', 'Controles de glicemia capilar c/1-2 horas durante 24 a 48 horas', 'HOSPITALIZACIÓN OBLIGATORIA EN SALA BÁSICA O INTERMEDIO'],
      ],
    },
    vignette: 'Un hombre de 74 años con DM2 en tratamiento con glibenclamida 10 mg cada 12 horas es traído al servicio de urgencia por su hija, tras encontrarlo profundamente dormido, diaforético y sin responder al llamado. Al ingreso se constata sopor profundo, piel fría y sudorosa, PA 130/80 mmHg, FC 102 lpm y un hemoglucotest de 32 mg/dL. Se administran 40 ml de glucosa al 30% por vía endovenosa, logrando que a los 10 minutos el paciente despierte lúcido, orientado y solicitando el alta para irse a su hogar.',
    explicacion: 'El paciente presentó una hipoglicemia severa inducida por glibenclamida. Aunque el paciente recupere la conciencia tras la administración de glucosa endovenosa en bolo, la glibenclamida posee una prolongada vida media y metabolitos activos que se eliminan con lentitud (especialmente en adultos mayores con menor reserva renal). Si se otorga el alta, la hipoglicemia recurrirá indefectiblemente horas después, con consecuencias neurológicas graves o fatales. La única conducta admisible es hospitalizar al paciente durante 24 a 48 horas con infusión de suero glucosado y controles periódicos.',
    keyPoints: [
      'La Tríada de Whipple exige: síntomas de hipoglicemia + glicemia baja comprobada + alivio inmediato tras recibir glucosa.',
      'La Regla de los 15 (para pacientes conscientes): 15 gramos de carbohidratos simples por boca, esperar 15 minutos y repetir glicemia.',
      'En pacientes inconscientes está PROHIBIDO dar líquidos o alimentos orales; se indica Glucosa al 30% EV (20-50 ml) o Glucagón 1 mg IM/SC.',
      '¡REGLA ABSOLUTA DE EUNACOM! Todo paciente con hipoglicemia por sulfonilureas (glibenclamida) DEBE hospitalizarse por 24 a 48 horas con infusión de suero glucosado.',
      'Los betabloqueadores no cardioselectivos (propranolol) bloquean la taquicardia, palpitaciones y temblor de la hipoglicemia, pero NO la sudoración.',
      'En el estudio de hipoglicemia en no diabéticos, la combinación de Insulina alta con Péptido C INDETECTABLE demuestra administración subrepticia de insulina exógena.',
      'En el insulinoma, tanto la insulina plasmática como el péptido C se encuentran inapropiadamente elevados durante la hipoglicemia espontánea.',
      'El glucagón actúa estimulando la glucogenólisis hepática; es ineficaz en pacientes con depleción de glucógeno (desnutrición severa, ayuno prolongado o alcoholismo agudo).',
    ],
    questions: [
      {
        stem: 'Un paciente de 78 años, diabético tipo 2 en tratamiento con glibenclamida 10 mg al día y metformina 850 mg cada 12 horas, es ingresado al servicio de urgencias por compromiso de conciencia de inicio súbito. Al examen se encuentra soporoso, sudoroso y pálido, con una glicemia capilar de 34 mg/dL. Se administran 40 ml de glucosa al 30% por vía endovenosa, con lo cual el paciente recupera completamente la lucidez en 5 minutos y se encuentra orientado y asintomático. ¿Cuál es la conducta más adecuada a seguir?',
        opciones: [
          'A) Dar de alta con indicación de colación rica en carbohidratos y suspender la dosis de glibenclamida de ese día',
          'B) Hospitalizar al paciente por al menos 24 a 48 horas con infusión continua de glucosa y monitoreo seriado de glicemias',
          'C) Mantener en observación por 2 horas y dar de alta si el hemoglucotest es mayor a 100 mg/dL',
          'D) Administrar 1 mg de glucagón por vía intramuscular y enviar a su domicilio con acompañante',
          'E) Reiniciar inmediatamente la metformina a dosis plena y reducir la glibenclamida a 2.5 mg'
        ],
        correcta: 'B',
        explicacion: 'La glibenclamida es una sulfonilurea de acción prolongada cuyos metabolitos activos tienen una depuración muy lenta, especialmente en pacientes ancianos con filtración glomerular reducida. Aunque la glucosa endovenosa en bolo revierta temporalmente la neuroglucopenia, el fármaco continúa circulando y produciendo hiperinsulinismo, por lo que la hipoglicemia reaparecerá inexorablemente horas después. La norma clínica exige hospitalizar al paciente por un periodo de 24 a 48 horas con aporte continuo de glucosa parenteral.',
        recTag: 'EUNACOM Diciembre 2016 (Q#19)'
      },
      {
        stem: 'Una mujer de 32 años, enfermera de profesión, sin antecedentes médicos conocidos, es traída a urgencias por haber presentado 4 episodios de confusión mental, visión borrosa y sudoración profusa en el último mes. Durante uno de los episodios en el hospital, se constata una glicemia venosa de 38 mg/dL. Los exámenes de laboratorio tomados durante la hipoglicemia revelan: insulina plasmática marcadamente elevada, péptido C indetectable y screening negativo para sulfonilureas en orina. ¿Cuál es el diagnóstico más probable?',
        opciones: [
          'A) Insulinoma maligno diseminado',
          'B) Síndrome de dumping tardío posprandial',
          'C) Administración subrepticia de insulina exógena (hipoglicemia facticia)',
          'D) Ingesta accidental o encubierta de glibenclamida',
          'E) Insuficiencia suprarrenal primaria autoinmune (Enfermedad de Addison)'
        ],
        correcta: 'C',
        explicacion: 'La secreción endógena de insulina por las células beta pancreáticas libera equimolarmente insulina y péptido C a la circulación portal. Por lo tanto, tanto en el estado fisiológico como en la presencia de un insulinoma o tras la ingesta de sulfonilureas, la elevación de la insulina plasmática se acompaña de un péptido C elevado. La combinación patognomónica de insulina plasmática muy alta con péptido C suprimido o indetectable es diagnóstica de administración exógena de insulina (habitualmente formulaciones farmacéuticas que carecen de péptido C), configurando un cuadro de hipoglicemia facticia.',
        recTag: 'EUNACOM Julio 2018 (Q#34)'
      },
      {
        stem: 'Un paciente de 22 años con DM1 presenta temblor, palpitaciones, diaforesis y una glicemia capilar de 58 mg/dL. Se encuentra lúcido, colaborativo y con capacidad para deglutir normalmente. ¿Cuál es el manejo inicial recomendado según la evidencia y guías clínicas?',
        opciones: [
          'A) Administrar 1 mg de glucagón intramuscular de inmediato',
          'B) Indicar la ingesta de 15 gramos de hidratos de carbono simples por vía oral y reevaluar la glicemia en 15 minutos',
          'C) Canalizar una vía venosa periférica e infundir 2 ampollas de glucosa al 30% en bolo',
          'D) Indicar el consumo de un sándwich con mantequilla y carne para retardar la absorción',
          'E) Indicar reposo absoluto y esperar 1 hora para una nueva medición sin ingerir alimentos'
        ],
        correcta: 'B',
        explicacion: 'En todo paciente con hipoglicemia Nivel 1 o 2 que se encuentre consciente y con la vía oral preservada, el tratamiento de elección es la "Regla de los 15": administrar 15 gramos de carbohidratos de absorción rápida por vía oral (ej. medio vaso de bebida azucarada, agua con 3 cucharaditas de azúcar o 150 ml de jugo), aguardar 15 minutos en reposo y verificar con un nuevo hemoglucotest que la glicemia supere los 70 mg/dL.',
        recTag: 'EUNACOM Diciembre 2020 (Q#11)'
      },
      {
        stem: 'Un hombre de 62 años con diabetes mellitus e hipertensión arterial consulta por mareos y sensación de desmayo ocasional. Refiere que toma enalapril, propranolol y glibenclamida. Durante los últimos controles ha presentado glicemias de 50 a 60 mg/dL sin haber percibido palpitaciones, sudoración ni temblores previos. ¿A qué fármaco de su terapia se atribuye principalmente el enmascaramiento de los síntomas autonómicos de hipoglicemia?',
        opciones: [
          'A) Enalapril',
          'B) Glibenclamida',
          'C) Propranolol',
          'D) A la combinación de enalapril con glibenclamida',
          'E) A ninguno, se debe exclusivamente a neuropatía autonómica diabética avanzada'
        ],
        correcta: 'C',
        explicacion: 'Los betabloqueadores no cardioselectivos como el propranolol bloquean los receptores beta-1 y beta-2 adrenérgicos, suprimiendo las manifestaciones mediadas por la descarga simpática ante la hipoglicemia (taquicardia, palpitaciones, temblores y ansiedad). Esto priva al paciente de sus señales de alarma tempranas, favoreciendo el desarrollo de hipoglicemias severas inadvertidas. Es un concepto clásico del EUNACOM que la sudoración (diaforesis) suele persistir, ya que está mediada por receptores colinérgicos muscarínicos simpáticos.',
        recTag: 'EUNACOM Julio 2022 (Q#40)'
      }
    ]
  }
];

module.exports = { bloque3, flow };
