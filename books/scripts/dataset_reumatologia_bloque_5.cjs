// ============================================================================
// BLOQUE 05 REUMATOLOGÍA: VASCULITIS SISTÉMICAS, PARTES BLANDAS Y METABOLISMO ÓSEO
// Manual EUNACOM 2026 · Tomo 09 Reumatología & Inmunología Clínica
// 4 Temas Curriculares (9.21 a 9.24) · 12 Preguntas Oficiales EUNACOM
// Editorial Standard: Variable Clinical Flow (Tier 3 = 4 págs, Tier 2 = 2-3 págs)
// ============================================================================

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
      const maxH = Math.max(lh, rh);
      y = top + maxH;
      prev = { y, xs: [lcx, rcx] };
    } else if (r.k === 'box') {
      if (prev) step(r.al, r.from);
      const bw = 596, bx = 12;
      const h = draw(bx, bw, r);
      y += h;
      prev = { y, xs: [CX] };
    }
  });
  return `<svg viewBox="0 0 620 ${y + 8}" width="100%" xmlns="http://www.w3.org/2000/svg">\n<style>\n.ln{stroke:#9f1239;stroke-width:1.5;fill:none}\nrect{stroke-width:1.5;stroke:#9f1239;fill:#ffffff}\nrect.dec{fill:#fff1f2;stroke:#be123c}\nrect.warn{fill:#fff7ed;stroke:#ea580c}\nrect.acc{fill:#9f1239;stroke:#881337}\ntext{font-family:ui-sans-serif,system-ui,sans-serif;font-size:11px;fill:#1e293b}\ntext.t{font-size:12px}\ntext.accT{fill:#ffffff}\ntext.accS{fill:#fce7f3;font-size:10px}\ntext.warnT{fill:#9a3412}\ntext.sub{fill:#64748b;font-size:10px}\ntext.lbl{font-size:10px;fill:#9f1239;font-weight:700}\n</style>\n${P.join('\n')}\n</svg>`;
}

const bloque5Classes = [
  // ==========================================================================
  // TEMA 9.21: VASCULITIS DE VASO GRANDE Y MEDIANO (TIER 3 · 4 PÁGINAS)
  // ==========================================================================
  {
    id: 'reuma-21',
    classId: 'reuma-21',
    tier: 3,
    blockNum: 5,
    blockName: 'Vasculitis Sistémicas, Reumatología de Partes Blandas y Metabolismo Óseo',
    topicLabel: '9.21',
    title: 'Vasculitis de Vaso Grande y Mediano: Arteritis de la Temporal (Células Gigantes / Urgencia Visual) y Arteritis de Takayasu',
    perfilCode: '1.09.1.008',
    dx: 'Específico',
    tx: 'Inicial',
    seg: 'Derivar',
    ges: 'Sin garantía GES directa · Urgencia médica oftalmológica y reumatológica de derivación terciaria inmediata',
    reconstrucciones: 'Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026',
    frecuencia: 'Muy Alta · Urgencia médica de pérdida visual irreversible y pregunta angular del Perfil V3',
    svg: null,
    algoTitle: 'Algoritmo de Vasculitis de Vaso Grande y Mediano: Sospecha, Rescate Visual y Biopsia',
    diagram: flow('Algoritmo de la Arteritis de la Temporal y Grandes Vasos', [
      { k: 'box', t: 'Sospecha Clínica en Paciente > 50 Años (Cefalea de Novo, Claudicación Mandibular o Síntomas Visuales)', s: 'Solicitar de inmediato: VSG, PCR y hemograma · Descartar amaurosis fugax o diplopía', type: 'acc' },
      { k: 'split', q: '¿Presenta Síntomas Visuales de Alarma (Amaurosis Fugax, Pérdida de Campo Visual o Diplopía)?', s: 'Decisión inmediata de la vía y dosis de corticoterapia sistémica',
        ll: 'SÍ: Alarma Visual Activa / Pérdida Visual Aguda',
        left: { t: 'Urgencia Médica: Bolos de Metilprednisolona EV', s: '500 a 1.000 mg/día EV x 3 días · Iniciar ANTES de cualquier examen de imagen o biopsia', type: 'crit' },
        rl: 'NO: Cefalea / Claudicación Mandibular Aislada',
        right: { t: 'Prednisona Oral a Dosis Altas Inmediata', s: 'Prednisona 1 mg/kg/día oral (40-60 mg/día) · Proteger ojo contralateral de forma inmediata', type: 'warn' }
      },
      { k: 'box', t: 'Confirmación Diagnóstica: Eco Doppler Temporal (Signo del Halo) y Biopsia Temporal', s: 'Biopsia de arteria temporal ≥ 1.5 a 2 cm · Mantener corticoides (la biopsia permanece diagnóstica 2-4 semanas)', type: 'dec' },
      { k: 'box', t: 'Manejo Coadyuvante y Ahorrador: Tocilizumab (Anti-IL-6R) + Aspirina 100 mg/día', s: 'Tocilizumab reduce recaídas y toxicidad acumulada de esteroides · Calcio + Vit D + bifosfonato de soporte', type: 'acc' }
    ]),
    contexto: 'La arteritis de células gigantes (arteritis temporal) representa la vasculitis sistémica más común en adultos mayores de 50 años y constituye una verdadera emergencia médica. Su complicación más temida es la ceguera monocular o bilateral irreversible secundaria a neuropatía óptica isquémica anterior arterítica (NOIAA). La regla de oro del EUNACOM exige iniciar corticoterapia sistémica enérgica de inmediato ante la sospecha clínica, jamás demorando el fármaco para coordinar una ecografía o biopsia temporal.',
    contentSections: [
      {
        subhead: '1. Fisiopatología, Epidemiología y Compromiso de Grandes Vasos',
        paragraphs: [
          'La <strong>arteritis de células gigantes (ACG)</strong>, clásicamente denominada arteritis de la temporal, es una panarteritis inflamatoria granulomatosa subaguda o crónica que compromete arterias de gran y mediano calibre con predilección por las ramas extracraneales de la arteria carótida (arteria temporal superficial, arteria oftálmica, arterias ciliares posteriores y arteria maxilar interna). Afecta de modo casi exclusivo a <strong>personas mayores de 50 años</strong>, con una incidencia máxima entre los 70 y 80 años y una relación mujer:hombre de 2:1 a 3:1.',
          'La inmunopatogenia involucra una respuesta inmunitaria mediada por linfocitos T cooperadores (subpoblaciones Th1 productoras de IFN-γ y Th17 productoras de IL-17 e IL-6) activados contra antígenos aún no definidos de la pared arterial. Las células dendríticas de la adventicia reclutan monocitos y macrófagos tisulares que se fusionan conformando células gigantes multinucleadas. Estos macrófagos secretan metaloproteinasas de matriz que inducen la fragmentación y digestión enzimática de la <strong>lámina elástica interna</strong>, acompañada de una proliferación neointimal obstructiva concéntrica que culmina en isquemia tisular distal crítica (véase Tabla 9.21.A).',
          'Por su parte, la <strong>Arteritis de Takayasu</strong> representa el análogo de gran vaso en pacientes jóvenes: es una arteritis granulomatosa estenosante y aneurismática que compromete el cayado aórtico, sus ramas principales (arterias subclavias, carótidas y troncos supraaórticos) y las arterias renales. Su perfil epidemiológico clásico es la mujer joven (menor de 40 años, típicamente entre 15 y 30 años, relación mujer:hombre 8:1 a 9:1). Produce claudicación de miembros superiores, asimetría de pulsos periféricos y soplos vasculares prominentes, conociéndose históricamente como la "enfermedad sin pulsos".'
        ]
      },
      {
        subhead: '2. Manifestaciones Clínicas Cardinales: De la Cefalea a la Claudicación Mandibular',
        paragraphs: [
          'El cuadro clínico de la ACG suele instalarse de manera subaguda a lo largo de semanas o meses, combinando síntomas generales con manifestaciones vasculares isquémicas localizadas:',
          '• <strong>Cefalea de nuevo inicio:</strong> Es el síntoma más frecuente (presente en más del 70-80% de los casos). Es habitualmente unilateral frontotemporal o parietooccipital, severa, punzante, resistente a analgésicos comunes y de características diferentes a cualquier cefalea previa del paciente.',
          '• <strong>Anomalías de la arteria temporal:</strong> A la palpación se constata un cordón arterial indurado, nodular, tortuoso, muy sensible al tacto y con pulso temporal marcadamente disminuido o ausente.',
          '• <strong>Hiperestesia del cuero cabelludo:</strong> Dolor exquisitely desencadenado por el mínimo roce, evidente al peinarse, cepillarse el cabello o apoyar la cabeza sobre la almohada.',
          '• <strong>Claudicación mandibular:</strong> Dolor y fatiga severa en los músculos maseteros y de la lengua que aparece típicamente tras 1 a 2 minutos de masticación continua (al comer alimentos duros como carne o corteza de pan) y que cede en reposo. Se debe a isquemia inducible de la arteria maxilar interna y de la arteria lingual. Es el <strong>síntoma clínico con mayor especificidad (> 90%)</strong> y valor predictivo para el diagnóstico de ACG.',
          '• <strong>Polimialgia Reumática (PMR):</strong> Coexiste en el 40% a 50% de los pacientes con ACG al momento del diagnóstico o durante su evolución, caracterizada por dolor y rigidez matinal severa en cinturas escapular y pélvica.',
          '• <strong>Síntomas constitucionales:</strong> Fiebre de baja a moderada cuantía, astenia, anorexia y baja de peso progresiva. En el adulto mayor, la ACG representa la causa reumatológica más frecuente de <em>Fiebre de Origen Desconocido (FOD)</em>.'
        ]
      },
      {
        subhead: '3. Enfrentamiento Diagnóstico: Reactantes, Ecografía y Biopsia Temporal',
        paragraphs: [
          'Ante la sospecha clínica de ACG se debe solicitar de inmediato un laboratorio general: la <strong>Velocidad de Sedimentación Globular (VSG)</strong> se encuentra marcadamente acelerada, superando casi siempre los 50 mm/h y con frecuencia cifras > 80 a 100 mm/h. La <strong>Proteína C Reactiva (PCR)</strong> cuantitativa está invariablemente elevada y posee mayor sensibilidad que la VSG (véase Figura 9.21). Otros hallazgos incluyen anemia normocítica normocrómica de procesos crónicos, trombocitosis reactiva y elevación discreta de fosfatasa alcalina hepática.',
          'La <strong>Ecografía Doppler color de arterias temporales</strong> muestra el patognomónico <strong>"signo del halo"</strong>: un engrosamiento concéntrico e hipoecoico de la pared arterial que traduce edema parietal transmural, no compresible con la presión del transductor. Posee una sensibilidad del 75-80% y especificidad > 90% en manos expertas.',
          'La <strong>Biopsia de arteria temporal (BAT)</strong> continúa siendo el <em>estándar de oro confirmatorio</em>. Dada la naturaleza discontinua de la inflamación con zonas sanas interpuestas denominadas "lesiones saltonas" (<em>skip lesions</em>), la muestra quirúrgica debe medir <strong>al menos 1.5 a 2 centímetros de longitud</strong> para evitar falsos negativos (véase Tabla 9.21.A). Los hallazgos histológicos muestran panarteritis con infiltrado linfomonocitario, fragmentación de la elástica interna y células gigantes.',
          '<strong>Regla de oro de urgencia EUNACOM:</strong> Si la sospecha clínica es fundada, <strong>NUNCA se debe postergar el inicio de los corticoides a la espera de la ecografía o la biopsia</strong>. Los cambios histopatológicos de la arteria temporal persisten plenamente detectables hasta 2 a 4 semanas después de instaurada la corticoterapia, mientras que posponer el tratamiento puede costarle la visión definitiva al paciente.'
        ]
      },
      {
        subhead: '4. Emergencia Oftalmológica: Neuropatía Óptica Isquémica Anterior Arterítica (NOIAA)',
        paragraphs: [
          'La complicación más grave y temida de la ACG es la pérdida visual súbita, ocurrida por <strong>Neuropatía Óptica Isquémica Anterior Arterítica (NOIAA)</strong> en más del 80% de las complicaciones oculares, secundaria a la oclusión trombótica inflamatoria de las arterias ciliares posteriores cortas que irrigan la cabeza del nervio óptico. Con menor frecuencia obedece a oclusión de la arteria central de la retina.',
          'La pérdida visual es típicamente indolora, brusca, no fluctuante y unilateral en su inicio. Con frecuencia está precedida por pródromos de alarma en los días o semanas previas: episodios de <strong>amaurosis fugax</strong> (ceguera monocular transitoria tipo "cortina que cae"), visión borrosa intermitente o diplopía por isquemia de la musculatura extraocular (véase Tabla 9.21.B).',
          'Al examen oftalmológico destaca un <strong>defecto pupilar aferente relativo (pupila de Marcus Gunn)</strong> en el ojo afectado. El fondo de ojo revela un edema de papila pálido y blanquecino ("papila en tiza") con márgenes borrosos y microhemorragias en llama peripapilares.',
          '<em>Catástrofe visual contralateral:</em> Si no se instaura tratamiento corticoideo intensivo de emergencia, entre el 25% y el 50% de los pacientes desarrollan compromiso del ojo contralateral en un intervalo que oscila entre pocas horas y semanas, culminando en ceguera bilateral permanente.'
        ]
      },
      {
        subhead: '5. Protocolo Terapéutico Escalonado: Corticoterapia de Rescate, Tocilizumab y Prevención de Daño',
        paragraphs: [
          'El pilar del tratamiento descansa en la administración rápida de esteroides a dosis inmunosupresoras plenas, estratificada según la presencia o ausencia de compromiso visual o de órgano noble (véase Tabla 9.21.C):',
          '• <strong>Con compromiso visual (NOIAA, amaurosis fugax, diplopía):</strong> Se hospitaliza al paciente de inmediato para administrar <strong>Bolos endovenosos de Metilprednisolona: 500 a 1.000 mg (1 g) EV cada 24 horas por 3 días consecutivos</strong>. Posteriormente se traslapa a Prednisona oral a razón de 1 mg/kg/día (máximo 60 a 80 mg/día).',
          '• <strong>Sin compromiso visual ni isquemia orgánica:</strong> Se inicia inmediatamente <strong>Prednisona oral 1 mg/kg/día (40 a 60 mg/día)</strong> en toma única matinal. La mejoría clínica de la cefalea y la claudicación es espectacular dentro de las primeras 24 a 48 horas, normalizándose la PCR y la VSG en 2 a 4 semanas.',
          '• <strong>Desescalamiento:</strong> La dosis plena se mantiene por 2 a 4 semanas tras la resolución clínica y analítica, iniciando luego un descenso muy lento y pautado a lo largo de 12 a 24 meses para prevenir recaídas.',
          '• <strong>Ahorrador de corticoides de primera línea:</strong> <strong>Tocilizumab</strong> (anticuerpo monoclonal recombinante anti-receptor de interleucina-6, administrado en dosis de 162 mg subcutáneo semanal). Ha demostrado en ensayos clínicos aleatorizados (ensayo GiACTA) sostener la remisión libre de corticoides y reducir drásticamente los efectos adversos de la corticoterapia prolongada.',
          '• <strong>Medidas adyuvantes obligatorias:</strong> Prescripción de <strong>Ácido acetilsalicílico (AAS) 100 mg/día</strong> para reducir el riesgo de eventos trombóticos isquémicos cerebrovasculares y visuales; profilaxis de osteoporosis inducida por corticoides con Calcio elemental (1.000-1.200 mg/día) + Vitamina D3 (800-2.000 UI/día) + bifosfonato oral (Alendronato 70 mg semanal); y protección gástrica con Inhibidores de la Bomba de Protones (Omeprazol 20 mg/día).'
        ]
      }
    ],
    table: {
      title: 'Criterios Diagnósticos y Evaluación de Biopsia de Arteria Temporal (ACR 1990 / Actualización 2022)',
      headers: ['Criterio Diagnóstico', 'Definición Clínica / Parámetro Operativo', 'Sensibilidad / Rendimiento', 'Conducta Reumatológica Obligatoria'],
      rows: [
        ['Edad al inicio', 'Aparición de síntomas en paciente de edad ≥ 50 años', '> 99% (criterio de inclusión casi universal)', 'En menores de 40 años sospechar Takayasu u otra vasculitis'],
        ['Cefalea de nuevo inicio', 'Dolor localizado reciente, unilateral, frontotemporal u occipital', '70% – 85%', 'Investigar características diferenciales de cefaleas previas'],
        ['Anomalía arterial temporal', 'Engrosamiento, hipersensibilidad al tacto o disminución de pulso', '60% – 70%', 'Palpar ambos trayectos temporales y ramas frontoparietales'],
        ['Reactantes de fase aguda', 'VSG acelerada ≥ 50 mm/h (Westergren) y/o PCR muy elevada', '> 95% combinadas', 'Una VSG normal no descarta 100% si la clínica y PCR son altas'],
        ['Biopsia arterial compatible', 'Panarteritis granulomatosa transmural y fragmentación elástica', 'Estándar de oro (85% – 90%)', 'Tomar fragmento quirúrgico ≥ 1.5-2 cm; no postergar corticoides'],
        ['Ecografía Doppler arterial', 'Signo del halo hipoecoico circunferencial en corte transversal', 'Sensibilidad 75%, Especificidad > 90%', 'Alternativa o complemento útil previo a la biopsia quirúrgica']
      ]
    },
    severityTable: {
      title: 'Criterios de Alarma y Compromiso de Arteria Oftálmica (NOIAA)',
      headers: ['Signo de Alarma Ocular', 'Mecanismo Fisiopatológico', 'Hallazgo al Examen Físico / Fondo de Ojo', 'Riesgo Clínico Inmediato'],
      rows: [
        ['Amaurosis fugax', 'Isquemia transitoria reversible de arterias ciliares posteriores', 'Episodios fugaces de pérdida visual monocular tipo telón', 'Ceguera permanente irreversible en horas o días si no se trata'],
        ['Neuropatía Óptica Isquémica (NOIAA)', 'Infarto y necrosis del nervio óptico anterior por oclusión ciliar', 'Papiledema pálido "en tiza", hemorragias peripapilares en llama', 'Defecto pupilar aferente relativo (Pupila de Marcus Gunn)'],
        ['Diplopía / Estrabismo agudo', 'Isquemia microvascular de los pares craneales oculomotores (III o VI)', 'Paresia de músculo recto lateral o incapacidad de aducción', 'Precede en 10-15% a la ceguera monocular definitiva'],
        ['Claudicación lingual o necrosis', 'Isquemia crítica de ramas de la carótida externa (arteria lingual)', 'Lengua pálida, dolor intenso al deglutir, úlcera lingual necrótica', 'Alerta de compromiso oclusivo severo y extenso de carótida externa'],
        ['Asimetría de pulso o soplo carotídeo', 'Extensión vasculítica a cayado aórtico o troncos supraaórticos', 'Diferencia de PA > 15 mmHg entre brazos o soplo en cuello', 'Riesgo de aneurisma de aorta torácica o ACV isquémico embólico']
      ]
    },
    treatmentTable: {
      title: 'Protocolo de Rescate: Corticoides Sistémicos, Tocilizumab y Prevención de Toxicidad',
      headers: ['Fase / Fármaco', 'Dosis y Vía de Administración', 'Indicación Específica', 'Objetivo Clínico y Precauciones'],
      rows: [
        ['Bolos de Metilprednisolona EV', '500 a 1.000 mg EV cada 24 horas x 3 días consecutivos', 'Urgencia visual (NOIAA, amaurosis fugax) o isquemia severa', 'Salvar ojo contralateral y rescatar tejido neuronal penumbra'],
        ['Prednisona oral de inducción', '1 mg/kg/día oral (40 – 60 mg/día) en toma única matinal', 'Inicio inmediato en ACG sin síntomas visuales o post-bolos EV', 'Alivio rápido de cefalea en 24-48h; mantener 2 a 4 semanas'],
        ['Descenso paulatino de esteroides', 'Reducción de 10 mg cada 2 semanas hasta 20 mg, luego 2.5 mg/mes', 'Mantenimiento de remisión clínica y normalización de VSG/PCR', 'Retiro en 12 a 24 meses; vigilancia estricta de recaídas'],
        ['Tocilizumab (Anti-IL-6R)', '162 mg subcutáneo cada semana (o 8 mg/kg EV cada 4 semanas)', 'Ahorrador de esteroides de 1.ª línea (aprobado FDA/EMA)', 'Reduce recaídas y dosis acumulada de corticoides (GiACTA)'],
        ['AAS + Calcio/Vit D + Bifosfonato', 'AAS 100 mg/d + Calcio 1g/d + Vit D 1.000 UI/d + Alendronato 70 mg/sem', 'Coadyuvancia obligatoria en todo paciente con corticoterapia', 'Prevenir eventos isquémicos arteriales y osteoporosis esteroidal']
      ]
    },
    vignette: {
      title: 'Caso Clínico Tipo EUNACOM · Discusión de Alta Complejidad',
      text: 'Mujer de 74 años sin antecedentes mórbidos de relevancia consulta en el servicio de urgencias por cuadro de 3 semanas de cefalea frontotemporal derecha intensa, de inicio reciente, que no cede con paracetamol ni ketoprofeno. Refiere que al masticar carne o pan presenta dolor y cansancio en los músculos de la mandíbula que la obliga a detener la alimentación. En las últimas 24 horas ha presentado dos episodios transitorios de oscurecimiento visual monocular completo en el ojo derecho de 3 a 5 minutos de duración (amaurosis fugax). Al examen físico: PA 138/82 mmHg, FC 78 lpm, afebril. Arteria temporal derecha engrosada, indurada, tortuosa, exquisitamente dolorosa a la palpación y con pulso temporal prácticamente ausente. Al peinarse refiere intenso dolor en el cuero cabelludo. El fondo de ojo actual es normal y el ojo izquierdo no presenta alteraciones. El laboratorio urgente informa: leucocitos 8.900/mm³, hemoglobina 10.8 g/dL, plaquetas 480.000/mm³, VSG 98 mm/h y PCR 84 mg/L.',
      conducta: 'La conducta inmediata, inaplazable y prioritaria es hospitalizar a la paciente en unidad de monitorización e iniciar BOLOS ENDOVENOSOS DE METILPREDNISOLONA a dosis de 500 a 1.000 mg/día durante 3 días consecutivos, asociados a interconsulta urgente con oftalmología y programación de biopsia de arteria temporal derecha (≥ 1.5 cm). La paciente presenta una Arteritis de Células Gigantes (Arteritis de la Temporal) en fase de inminente pérdida visual (amaurosis fugax) con riesgo extremo de Neuropatía Óptica Isquémica Anterior Arterítica (NOIAA). NUNCA debe retrasarse el corticoide a la espera de la biopsia quirúrgica o ecografía Doppler, ya que la histopatología permanece diagnóstica hasta por 2 a 4 semanas tras el inicio de los esteroides, mientras que posponer la terapia condena a la paciente a ceguera permanente bilateral.'
    },
    explicacion: 'La conducta inmediata, inaplazable y prioritaria es hospitalizar a la paciente en unidad de monitorización e iniciar BOLOS ENDOVENOSOS DE METILPREDNISOLONA a dosis de 500 a 1.000 mg/día durante 3 días consecutivos, asociados a interconsulta urgente con oftalmología y programación de biopsia de arteria temporal derecha (≥ 1.5 cm). La paciente presenta una Arteritis de Células Gigantes (Arteritis de la Temporal) en fase de inminente pérdida visual (amaurosis fugax) con riesgo extremo de Neuropatía Óptica Isquémica Anterior Arterítica (NOIAA). NUNCA debe retrasarse el corticoide a la espera de la biopsia quirúrgica o ecografía Doppler, ya que la histopatología permanece diagnóstica hasta por 2 a 4 semanas tras el inicio de los esteroides, mientras que posponer la terapia condena a la paciente a ceguera permanente bilateral.',
    keyPoints: [
      'La arteritis de la temporal es exclusiva de mayores de 50 años; su complicación temida es la ceguera por NOIAA.',
      'La claudicación mandibular es el síntoma clínico más específico (> 90%) de arteritis de células gigantes.',
      'Ante síntomas visuales (amaurosis fugax, diplopía), iniciar BOLOS DE METILPREDNISOLONA EV 500-1.000 mg/día x 3 días.',
      'NUNCA retrasar el corticoide para hacer la biopsia temporal; los hallazgos histológicos persisten por 2 a 4 semanas.',
      'La biopsia de arteria temporal requiere una longitud ≥ 1.5-2 cm para evitar falsos negativos por "skip lesions".',
      'Tocilizumab (anti-IL-6R) es el fármaco biológico ahorrador de corticoides de primera línea aprobado en arteritis temporal.'
    ],
    questions: [
      {
        stem: 'Mujer de 72 años consulta por cefalea temporal izquierda pulsátil de 1 mes de evolución, astenia y dolor mandibular al masticar alimentos sólidos. Hace 6 horas presentó un episodio transitorio de pérdida visual completa en ojo izquierdo de 5 minutos de duración. Al examen destaca arteria temporal izquierda engrosada y sensible. Laboratorio: VSG 105 mm/h, PCR 92 mg/L. ¿Cuál es la conducta terapéutica y diagnóstica más inmediata e imperativa?',
        options: [
          { id: 'A', text: 'Programar ecografía Doppler temporal ambulatoria e indicar ibuprofeno 600 mg cada 8 horas' },
          { id: 'B', text: 'Hospitalizar e iniciar bolos de metilprednisolona 1.000 mg/día EV de inmediato, coordinando la biopsia temporal sin retrasar el fármaco' },
          { id: 'C', text: 'Solicitar resonancia magnética cerebral con contraste y diferir corticoides hasta confirmar el diagnóstico histopatológico' },
          { id: 'D', text: 'Realizar punción lumbar urgente para descartar meningitis aséptica y solicitar anticuerpos c-ANCA' },
          { id: 'E', text: 'Iniciar prednisona 20 mg/día vía oral y controlar en policlínico en 2 semanas con nueva VSG' }
        ],
        correcta: 'B',
        explicacion: 'Opción B CORRECTA: Frente a una sospecha clínica fundada de arteritis de células gigantes asociada a pródromos de alarma visual (amaurosis fugax), la conducta obligatoria es hospitalizar e iniciar bolos de Metilprednisolona endovenosa (500 a 1.000 mg/día por 3 días) de inmediato para prevenir la neuropatía óptica isquémica irreversible y la pérdida visual contralateral. La biopsia de arteria temporal debe programarse pero jamás demorar el inicio del corticoide.\nOpción A incorrecta: Los AINEs no frenan la vasculitis ni previenen la ceguera; postergar el tratamiento es una grave negligencia.\nOpción C incorrecta: Esperar la biopsia o RM cerebral retrasa el tratamiento y expone al paciente a amaurosis definitiva en horas.\nOpción D incorrecta: El cuadro no corresponde a neuroinfección ni a vasculitis ANCA.\nOpción E incorrecta: Dosis de 20 mg/día es insuficiente para rescate visual en arteritis temporal (requiere bolos EV o 1 mg/kg/día oral en formas no complicadas).\nPerla EUNACOM: Ante amaurosis fugax o compromiso visual en arteritis de la temporal: bolos de metilprednisolona EV urgentes sin esperar biopsia.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.09.1.008'
      },
      {
        stem: '¿Cuál de los siguientes hallazgos histopatológicos en la biopsia quirúrgica de arteria temporal confirma con mayor especificidad el diagnóstico de Arteritis de Células Gigantes y cuál es la longitud mínima recomendada de la pieza operatoria para evitar falsos negativos?',
        options: [
          { id: 'A', text: 'Depósito masivo de inmunocomplejos con IgA en la lámina adventicia; longitud mínima de 3 mm' },
          { id: 'B', text: 'Necrosis fibrinoide transmural sin granulomas con abundantes neutrófilos leucocitoclásticos; longitud mínima de 5 mm' },
          { id: 'C', text: 'Infiltrado granulomatoso transmural con células gigantes multinucleadas y fragmentación de la lámina elástica interna; longitud mínima de 1.5 a 2.0 cm' },
          { id: 'D', text: 'Ateromatosis calcificada concéntrica de la túnica media con trombosis luminal reciente; longitud de 1 cm' },
          { id: 'E', text: 'Proliferación endotelial pura mediada por complejos inmunes con C3 bajo; longitud de 5 mm' }
        ],
        correcta: 'C',
        explicacion: 'Opción C CORRECTA: La histopatología clásica de la Arteritis de Células Gigantes se caracteriza por un infiltrado inflamatorio granulomatoso transmural (panarteritis), presencia de células gigantes multinucleadas y marcada fragmentación/destrucción de la lámina elástica interna por metaloproteinasas. Debido a la existencia de áreas respetadas o lesiones saltonas (skip lesions), la longitud del segmento arterial extirpado debe ser de al menos 1.5 a 2 cm para maximizar el rendimiento diagnóstico.\nOpción A incorrecta: Los depósitos de IgA son patognomónicos del Púrpura de Henoch-Schönlein en vasos pequeños.\nOpción B incorrecta: La necrosis fibrinoide neutrofílica sin granulomas corresponde a vasculitis necrotizantes de vaso mediano/pequeño (ej. Poliarteritis Nodosa o PAM).\nOpción D incorrecta: Describe aterosclerosis avanzada (arteriosclerosis de Monckeberg), patología degenerativa no inflamatoria.\nOpción E incorrecta: No traduce la inflamación granulomatosa de gran vaso.\nPerla EUNACOM: La biopsia de arteria temporal debe medir al menos 1.5-2 cm y demuestra destrucción de la lámina elástica interna con células gigantes.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.09.1.008'
      },
      {
        stem: 'En un paciente de 70 años con arteritis de células gigantes que ha presentado múltiples recaídas al intentar reducir la dosis de prednisona por debajo de 20 mg/día, desarrollando además fractura vertebral osteoporótica y diabetes inducida por corticoides. ¿Cuál es el fármaco biológico modificador de la enfermedad (DMARD biológico) de primera línea con aprobación formal para actuar como ahorrador de corticoides en esta patología?',
        options: [
          { id: 'A', text: 'Infliximab (anti-TNF alfa)' },
          { id: 'B', text: 'Tocilizumab (antagonista del receptor de interleucina-6)' },
          { id: 'C', text: 'Rituximab (anti-CD20 de células B)' },
          { id: 'D', text: 'Anakinra (antagonista del receptor de interleucina-1)' },
          { id: 'E', text: 'Secukinumab (inhibidor de interleucina-17A)' }
        ],
        correcta: 'B',
        explicacion: 'Opción B CORRECTA: Tocilizumab es un anticuerpo monoclonal humanizado dirigido contra el receptor soluble y de membrana de la interleucina-6 (IL-6R). El ensayo clínico pivotal fase III GiACTA demostró que la adición de Tocilizumab a la terapia estándar permite alcanzar y sostener la remisión libre de corticoides en más del 50% de los pacientes, reduciendo sustancialmente la dosis acumulada de glucocorticoides y sus severos efectos adversos.\nOpción A incorrecta: Los anti-TNF (infliximab, etanercept) fracasaron en ensayos clínicos en arteritis temporal y no están indicados.\nOpción C incorrecta: Rituximab es de elección en vasculitis asociadas a ANCA (GPA y PAM), no en arteritis de la temporal.\nOpción D incorrecta: Anakinra no tiene indicación formal en arteritis temporal (se usa en Enfermedad de Still o fiebre mediterránea familiar).\nOpción E incorrecta: Secukinumab está indicado en espondiloartritis y psoriasis, no en vasculitis de células gigantes.\nPerla EUNACOM: Tocilizumab (anti-IL-6R) es el biológico de elección y de primera línea como ahorrador de esteroides en arteritis temporal refractaria o con toxicidad.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.09.1.008'
      },
      {
        stem: 'Mujer de 26 años consulta por astenia, mareos posturales y parestesias progresivas en el brazo derecho al escribir o trabajar en el teclado. Al examen físico se constata presión arterial de 135/85 mmHg en el brazo izquierdo y 95/60 mmHg en el brazo derecho (diferencia de 40 mmHg), con pulso radial derecho apenas perceptible. A la auscultación se detecta un soplo sistólico eyectivo intenso en la región supraclavicular derecha y en el trayecto carotídeo. La VSG se encuentra en 65 mm/h y la PCR en 32 mg/L. ¿Cuál es la sospecha diagnóstica principal y el método de imagen vascular de elección para confirmar el diagnóstico?',
        options: [
          { id: 'A', text: 'Enfermedad de Kawasaki · Ecocardiograma transtorácico con foco en arterias coronarias' },
          { id: 'B', text: 'Poliarteritis Nodosa · Biopsia de nervio sural y piel' },
          { id: 'C', text: 'Arteritis de Takayasu · Angio-Resonancia Magnética (o Angio-TC) de aorta y troncos supraaórticos' },
          { id: 'D', text: 'Síndrome de Raynaud primario · Capilaroscopía periungueal' },
          { id: 'E', text: 'Granulomatosis con Poliangeítis · Radiografía simple de tórax y senos paranasales' }
        ],
        correcta: 'C',
        explicacion: 'Opción C CORRECTA: El cuadro clínico de una mujer joven (< 40 años) con síntomas isquémicos en extremidades superiores, marcada asimetría de pulsos periféricos y de presión arterial (> 10-20 mmHg de diferencia entre extremidades superiores), soplos vasculares prominentes y elevación de reactantes de fase aguda es patognomónico de la Arteritis de Takayasu ("enfermedad sin pulsos"). El estudio de elección es la Angio-RM o Angio-TC toracoabdominal, que evidencia engrosamiento parietal inflamatorio, estenosis, oclusiones o dilataciones aneurismáticas en la aorta y sus ramas principales.\nOpción A incorrecta: Kawasaki afecta predominantemente a niños pequeños (< 5 años) con exantema, adenopatía cervical y compromiso coronario.\nOpción B incorrecta: La PAN afecta arterias de mediano calibre sin comprometer la aorta torácica ni sus grandes ramas.\nOpción D incorrecta: El fenómeno de Raynaud es un vasoespasmo digital distal, no genera asimetría de PA braquial ni soplos supraclaviculares.\nOpción E incorrecta: GPA es una vasculitis de vaso pequeño con clínica pulmonar, de vía aérea superior y renal.\nPerla EUNACOM: Mujer joven con asimetría de pulsos, diferencia de PA > 10 mmHg entre brazos y soplos = Arteritis de Takayasu. Estudio de elección: Angio-RM.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.09.1.008'
      }
    ]
  },

  // ==========================================================================
  // TEMA 9.22: VASCULITIS DE VASO PEQUEÑO ANCA Y PÚRPURA DE HENOCH-SCHÖNLEIN (TIER 3 · 4 PÁGINAS)
  // ==========================================================================
  {
    id: 'reuma-22',
    classId: 'reuma-22',
    tier: 3,
    blockNum: 5,
    blockName: 'Vasculitis Sistémicas, Reumatología de Partes Blandas y Metabolismo Óseo',
    topicLabel: '9.22',
    title: 'Vasculitis de Vaso Pequeño ANCA Positivas (GPA, PAM, EGPA) y Púrpura de Henoch-Schönlein (Vasculitis por IgA)',
    perfilCode: '1.09.1.009',
    dx: 'Específico',
    tx: 'Inicial',
    seg: 'Derivar',
    ges: 'Garantía GES en Insuficiencia Renal Crónica Terminal (GES N° 1) · Manejo reumatológico terciario urgente',
    reconstrucciones: 'EUNACOM Enero 2023 (Q#83) · EUNACOM Diciembre 2022 (Q#24) · EUNACOM Diciembre 2018 (Q#1)',
    frecuencia: 'Muy Alta · Prototipo de síndrome riñón-pulmón y emergencias de falla orgánica múltiple',
    svg: null,
    algoTitle: 'Algoritmo Diagnóstico y Terapéutico en Vasculitis ANCA e IgA: De la Sospecha a la Remisión',
    diagram: flow('Algoritmo de Vasculitis ANCA y Púrpura de Henoch-Schönlein', [
      { k: 'box', t: 'Sospecha de Vasculitis de Pequeño Vaso (Púrpura Palpable, Compromiso Pulmonar o Renal)', s: 'Evaluar sedimento urinario (hematuria dismórfica/cilindros), función renal, Rx/TC tórax y plaquetas', type: 'acc' },
      { k: 'split', q: 'Perfil Serológico y Características Clínicas Predominantes', s: 'Diferenciación inmediata entre AAV y vasculitis por inmunocomplejos IgA',
        ll: 'ANCA (+) · Sinusitis / Nódulos / Asma / GNRP',
        left: { t: 'Vasculitis Asociadas a ANCA (AAV)', s: 'c-ANCA/PR3 (GPA) vs p-ANCA/MPO (PAM, EGPA) · Glomerulonefritis pauciinmune', type: 'crit' },
        rl: 'ANCA (-) · Plaquetas Normales · Púrpura Palpable',
        right: { t: 'Vasculitis por IgA (Henoch-Schönlein)', s: 'Tétrada: Púrpura declive + Artralgias + Dolor abdominal + Nefritis IgA · Pediatría/Adulto', type: 'warn' }
      },
      { k: 'split', q: '¿Presenta Criterios de Severidad Orgánica (Hemorragia Alveolar o Falla Renal Rápida)?', s: 'Estratificación terapéutica de inducción inmediata',
        ll: 'SÍ: Falla Renal Crítica / Hemoptisis Masiva',
        left: { t: 'Bolos Metilprednisolona + Rituximab / Ciclofosfamida', s: 'Evaluar Plasmaféresis si Creatinina > 5.7 o hemorragia alveolar refractaria', type: 'crit' },
        rl: 'NO: Formas No Amenazantes de Órgano / IgA Leve',
        right: { t: 'Corticoides Orales ± Metotrexato / Manejo Soporte', s: 'Henoch-Schönlein leve: analgesia y reposo · Vigilar proteinuria y sedimento urinario', type: 'dec' }
      },
      { k: 'box', t: 'Profilaxis Obligatoria y Mantenimiento de Remisión', s: 'Cotrimoxazol para profilaxis de P. jirovecii · Transición a Rituximab de mantenimiento o Azatioprina', type: 'acc' }
    ]),
    contexto: 'Las vasculitis necrosantes de vaso pequeño se dividen biológicamente en aquellas mediadas por anticuerpos anticitoplasma de neutrófilos (AAV: GPA, PAM y EGPA) y aquellas mediadas por depósito de inmunocomplejos (Vasculitis por IgA / Púrpura de Henoch-Schönlein). Constituyen una causa prototípica del síndrome riñón-pulmón y exigen un reconocimiento ultra-precoz: la instauración inmediata de bolos de esteroides e inmunosupresores mayores (Ciclofosfamida o Rituximab) salva al paciente de la muerte por hemorragia alveolar masiva o de la dependencia definitiva de hemodiálisis.',
    contentSections: [
      {
        subhead: '1. Clasificación de Chapel Hill y Espectro Inmunológico de Vasculitis de Pequeño Vaso',
        paragraphs: [
          'El Consenso Internacional de Chapel Hill clasifica las <strong>vasculitis de vaso pequeño</strong> (arteriolas, capilares y vénulas) en dos grandes grupos etiopatogénicos:',
          '1. <strong>Vasculitis asociadas a ANCA (AAV):</strong> Caracterizadas por la escasa o nula presencia de depósitos de complejos inmunes en la pared vascular (<em>vasculitis pauciinmunes</em>). Incluyen la Granulomatosis con Poliangeítis (GPA, antes Wegener), la Poliangeítis Microscópica (PAM) y la Granulomatosis Eosinofílica con Poliangeítis (EGPA, antes Churg-Strauss). Los <strong>c-ANCA</strong> presentan un patrón citoplasmático difuso por inmunofluorescencia y van dirigidos contra la enzima <strong>Proteinasa 3 (anti-PR3)</strong>, siendo fuertemente específicos de la GPA (85-90%). Los <strong>p-ANCA</strong> muestran un patrón perinuclear dirigido contra la <strong>Mieloperoxidasa (anti-MPO)</strong>, predominando en la PAM (70-80%) y en la EGPA (40-50%) (véase Tabla 9.22.A).',
          '2. <strong>Vasculitis por inmunocomplejos:</strong> Caracterizadas por depósitos abundantes de anticuerpos y complemento en los vasos. El prototipo indiscutido es la <strong>Vasculitis por Inmunoglobulina A (Púrpura de Henoch-Schönlein)</strong>, caracterizada por depósitos de complejos inmunes que contienen IgA1 en las paredes capilares y en el mesangio renal.'
        ]
      },
      {
        subhead: '2. Características Clínicas Diferenciales: GPA vs PAM vs EGPA',
        paragraphs: [
          '• <strong>Granulomatosis con Poliangeítis (GPA / Wegener):</strong> Se distingue por su clásica <strong>triada orgánica</strong>:',
          '  a) <em>Vía respiratoria superior:</em> Presente en más del 90% de los pacientes. Rinosinusitis crónica purulenta recidivante refractaria a múltiples ciclos antibióticos, epistaxis recurrente, costras nasales hemáticas, perforación del tabique nasal con colapso del dorso que genera la deformidad en <strong>"nariz en silla de montar"</strong>, otomastoiditis y estenosis traqueal subglótica con estridor.',
          '  b) <em>Pulmón:</em> Nódulos pulmonares bilaterales únicos o múltiples con marcada tendencia a la <strong>cavitación</strong> (paredes gruesas e irregulares), infiltrados alveolares fugaces y hemorragia alveolar.',
          '  c) <em>Riñón:</em> Glomerulonefritis necrotizante focal con proliferación extracapilar (semilunas) pauciinmune que se manifiesta como Glomerulonefritis Rápidamente Progresiva (GNRP), hematuria dismórfica, cilindros hemáticos y proteinuria moderada no nefrótica.',
          '• <strong>Poliangeítis Microscópica (PAM):</strong> A diferencia de la GPA, <strong>NO presenta inflamación granulomatosa ni afecta la vía aérea superior</strong>. Compromete casi invariablemente el riñón (GNRP pauciinmune en más del 80-90% de los casos) y los capilares alveolares pulmonares, manifestándose como capilaritis pulmonar con hemorragia alveolar difusa. Se asocia clásicamente a <strong>p-ANCA / anti-MPO</strong>.',
          '• <strong>Granulomatosis Eosinofílica con Poliangeítis (EGPA / Churg-Strauss):</strong> Clínicamente única por su vinculación con la atopia y la eosinofilia:',
          '  a) <em>Fase alérgica:</em> Asma bronquial severa de inicio en la edad adulta, resistente a corticoides inhalados, acompañada de rinosinusitis alérgica y poliposis nasal destructiva.',
          '  b) <em>Fase tisular/eosinofílica:</em> Eosinofilia periférica marcada (frecuentemente > 1.500 eosinófilos/uL o > 10% del recuento diferencial leucocitario) e infiltrados pulmonares migratorios no cavitados.',
          '  c) <em>Fase vasculítica:</em> <strong>Mononeuritis múltiple</strong> (presente en más del 70%, manifestándose como neuropatía axonal asimétrica aguda: pie caído por lesión del nervio ciático poplíteo externo o mano caída por nervio radial) y púrpura palpable. La principal causa de muerte es la <strong>miocardiopatía eosinofílica</strong> (miocarditis necrotizante e insuficiencia cardíaca congestiva refractaria).'
        ]
      },
      {
        subhead: '3. Púrpura de Henoch-Schönlein (Vasculitis por IgA)',
        paragraphs: [
          'Es la vasculitis sistémica más prevalente en la población pediátrica (pico de incidencia entre los 3 y 10 años, precedida habitualmente en un 50-75% por una infección respiratoria alta estreptocócica o viral), aunque puede presentarse en adultos con un curso renal más agresivo y tórpido.',
          'Se manifiesta por una <strong>tétrada clínica cardinal</strong>:',
          '1. <strong>Púrpura palpable no trombocitopénica:</strong> Lesiones petequiales y purpúricas sobreelevadas que no desaparecen a la vitropresión, simétricas, de distribución declive característica: miembros inferiores (pantorrillas, tobillos) y región glútea, respetando típicamente el tronco y cara.',
          '2. <strong>Artralgias o artritis:</strong> Periarticular, transitoria, no deformante ni erosiva, con marcado predominio en grandes articulaciones de extremidades inferiores (rodillas y tobillos).',
          '3. <strong>Dolor abdominal cólico:</strong> Secundario a isquemia y edema de la submucosa intestinal (angina intestinal). Puede complicarse con hemorragia digestiva alta o baja, íleo paralítico y, en niños pequeños, <strong>invaginación intestinal (intususcepción ileoileal)</strong>.',
          '4. <strong>Nefropatía por IgA:</strong> Se presenta en el 30-50% de los pacientes como hematuria microscópica o macroscópica asintomática con proteinuria. La histología renal es idéntica a la Enfermedad de Berger (proliferación mesangial con depósitos intensos de IgA1 granular en inmunofluorescencia).',
          '<em>Parámetro analítico crítico EUNACOM:</em> El <strong>recuento de plaquetas es rigurosamente NORMAL o está discretamente elevado</strong> (trombocitosis reactiva). Un recuento plaquetario bajo descarta de inmediato el Púrpura de Henoch-Schönlein y obliga a sospechar trombocitopenia inmune (PTI), púrpura trombocitopénico trombótico (PTT) o síndrome hemolítico urémico (SHU).'
        ]
      },
      {
        subhead: '4. Urgencia Crítica: Síndrome Riñón-Pulmón y Hemorragia Alveolar Difusa',
        paragraphs: [
          'La confluencia de hemorragia alveolar difusa y glomerulonefritis necrotizante rápidamente progresiva define el <strong>Síndrome Riñón-Pulmón</strong>, una de las mayores catástrofes en medicina interna (véase Tabla 9.22.B).',
          'La <strong>Hemorragia Alveolar Difusa (HAD)</strong> se produce por capilaritis neutrofílica alveolar con rotura de la membrana basal endotelial y extravasación masiva de hematíes hacia los alvéolos. Clínicamente se manifiesta por disnea aguda, hipoxemia refractaria e infiltrados alveolares algodonosos bilaterales difusos en alas de mariposa en la radiografía o TC de tórax. <em>Trampa de examen:</em> La hemoptisis puede estar completamente AUSENTE en hasta un 30% a 35% de los pacientes (la sangre queda atrapada en el espacio alveolar sin alcanzar la vía aérea proximal).',
          'El examen confirmatorio de urgencia es el <strong>Lavado Broncoalveolar (LBA)</strong> seriado mediante fibrobroncoscopía: demuestra un líquido de aspiración progresivamente más hemorrágico y rojizo en tres alícuotas secuenciales consecutivas, con presencia de más del 20% de macrófagos alveolares cargados de hemosiderina (<em>siderófagos</em> teñidos con azul de Prusia de Perls). Además, la <strong>Capacidad de Difusión de Monóxido de Carbono (DLCO) se encuentra marcadamente ELEVADA</strong> (> 100-130% del teórico) debido a la gran avidez del monóxido de carbono por la hemoglobina intraalveolar libre extravasada (véase Figura 9.22).'
        ]
      },
      {
        subhead: '5. Protocolos Terapéuticos de Inducción, Remisión y Sostén',
        paragraphs: [
          'El manejo de las vasculitis ANCA se estructura en dos fases: <strong>inducción de la remisión</strong> y <strong>mantenimiento de la remisión</strong> (véase Tabla 9.22.C):',
          '• <strong>Inducción en AAV grave o amenazante de la vida/órgano (insuficiencia renal aguda o HAD):</strong>',
          '  1. <strong>Bolos de Metilprednisolona EV:</strong> 500 a 1.000 mg EV diarios por 3 días consecutivos, continuando con prednisona oral 1 mg/kg/día con pauta de descenso progresivo.',
          '  2. <strong>Inmunosupresión combinada (Rituximab vs Ciclofosfamida):</strong> Se asocia <strong>Rituximab</strong> (375 mg/m² EV semanal por 4 semanas) O <strong>Ciclofosfamida</strong> (pulsos EV de 0.5 a 0.75 g/m² cada mes por 3 a 6 pulsos, o 2 mg/kg/día oral). Los estudios multicéntricos RAVE y RITUXVAS demostraron que Rituximab no es inferior a Ciclofosfamida y es de <strong>primera elección en mujeres o varones jóvenes en edad reproductiva</strong> (para evitar la insuficiencia ovárica prematura y la azoospermia por ciclofosfamida), en recaídas y en pacientes con toxicidad urológica previa.',
          '  3. <strong>Plasmaféresis (Recambio Plasmático Terapéutico):</strong> Indicada de forma selectiva en pacientes con <strong>hemorragia alveolar difusa severa con insuficiencia respiratoria hipoxémica</strong> o en aquellos con falla renal avanzada rápidamente progresiva (creatinina sérica > 5.7 mg/dL o requerimiento de hemodiálisis aguda) para remover rápidamente los ANCA circulantes.',
          '  4. <strong>Profilaxis obligatoria:</strong> Administración mandatoria de <strong>Cotrimoxazol (Trimetoprim-Sulfametoxazol 160/800 mg 3 veces por semana)</strong> durante todo el periodo de inducción para prevenir la neumonía letal por <em>Pneumocystis jirovecii</em> secundaria a linfopenia farmacológica.',
          '• <strong>Mantenimiento de la remisión:</strong> Una vez lograda la remisión completa (habitualmente a los 3 a 6 meses), se traslapa a <strong>Rituximab de mantenimiento</strong> (500 mg EV cada 6 meses) o <strong>Azatioprina</strong> (2 mg/kg/día oral) por un mínimo de 24 a 36 meses.',
          '• <strong>Manejo de la Vasculitis por IgA (Henoch-Schönlein):</strong> En la mayoría de los casos pediátricos es un cuadro autolimitado que requiere únicamente reposo, analgesia con paracetamol y observación ambulatoria. El uso de <strong>Prednisona oral (1 a 2 mg/kg/día por 1 a 2 semanas)</strong> está formalmente indicado ante <strong>dolor abdominal cólico severo, hemorragia digestiva, compromiso testicular o nefritis moderada a severa</strong> (proteinuria en rango nefrótico o caída de VFG), sin embargo no previene la aparición ulterior de nefropatía a largo plazo.'
        ]
      }
    ],
    table: {
      title: 'Patrones Serológicos ANCA, Compromiso Clínico Renal y Pulmonar en Vasculitis de Pequeño Vaso',
      headers: ['Vasculitis de Pequeño Vaso', 'Marcador Serológico Principal', 'Compromiso de Vía Aérea y Pulmón', 'Compromiso Renal Típico', 'Histopatología Clave'],
      rows: [
        ['Granulomatosis con Poliangeítis (GPA)', 'c-ANCA positivo en 85-90% (Anticuerpo Anti-Proteinasa 3 / PR3)', 'Sinusitis purulenta, nariz en silla de montar, nódulos pulmonares cavitados bilaterales', 'Glomerulonefritis necrotizante con semilunas pauciinmune (GNRP)', 'Granulomas necrotizantes intra y extravasculares con necrosis'],
        ['Poliangeítis Microscópica (PAM)', 'p-ANCA positivo en 70-80% (Anticuerpo Anti-Mieloperoxidasa / MPO)', 'Capilaritis pulmonar con hemorragia alveolar difusa; NO hay granulomas ni vía alta', 'GNRP pauciinmune severa en > 85% de los pacientes; rápida pérdida de VFG', 'Vasculitis necrotizante sin granulomas; depósitos inmunes escasos'],
        ['Granulomatosis Eosinofílica (EGPA)', 'p-ANCA / Anti-MPO en 40-50% (50% seronegativo)', 'Asma grave del adulto refractaria, pólipos nasales, infiltrados pulmonares fugaces', 'Glomerulonefritis pauciinmune leve a moderada (menos frecuente que en GPA/PAM)', 'Infiltración masiva de eosinófilos en tejidos y granulomas eosinofílicos'],
        ['Vasculitis por IgA (Henoch-Schönlein)', 'ANCA negativos; elevación de IgA sérica en 50%', 'Excepcional compromiso alveolar; vía aérea superior respetada', 'Hematuria glomerular microscópica/macroscópica y proteinuria (Nefritis IgA)', 'Vasculitis leucocitoclástica con depósitos de IgA1 mesangial granular']
      ]
    },
    severityTable: {
      title: 'Criterios de Severidad Orgánica, Síndrome Riñón-Pulmón y Hemorragia Alveolar Difusa',
      headers: ['Manifestación Crítica', 'Parámetro Diagnóstico / Criterio de Gravedad', 'Método Confirmatorio de Elección', 'Riesgo / Conducta de Rescate'],
      rows: [
        ['Hemorragia Alveolar Difusa (HAD)', 'Disnea aguda súbita, hipoxemia (PaFi < 200), infiltrados bilaterales en alas de mariposa', 'Lavado Broncoalveolar (LBA) seriado con alícuotas más hemáticas y >20% siderófagos', 'Mortalidad > 50%; intubación orotraqueal y bolos de metilprednisolona + plasmaféresis'],
        ['GNRP Pauciinmune Aguda', 'Duplicación de creatinina en < 2 semanas, oliguria, sedimento activo (cilindros hemáticos)', 'Biopsia renal percutánea: semilunas celulares > 50% de glomérulos e IF negativa', 'Pérdida irreversible de función renal; inicio de diálisis y Rituximab/Ciclofosfamida'],
        ['Mononeuritis múltiple severa', 'Déficit motor periférico asimétrico brusco (pie caído / mano caída) con dolor neuropático', 'Electromiografía (EMG) con velocidad de conducción: neuropatía axonal motora asimétrica', 'Daño axonal permanente; corticoterapia enérgica + ciclofosfamida (típica de EGPA)'],
        ['Isquemia miocárdica / Miocarditis', 'Insuficiencia cardíaca congestiva, troponinas elevadas, fracción de eyección deprimida', 'Ecocardiograma Doppler transtorácico y Resonancia Magnética Cardíaca con realce tardío', 'Principal causa de muerte en EGPA; hospitalización en UCI y soporte inotrópico'],
        ['Abdomen agudo por vasculitis', 'Dolor abdominal severo continuo, peritonismo, melena masiva o perforación intestinal', 'Angio-TC de abdomen y pelvis: engrosamiento de asas intestinales y neumatosis', 'Isquemia mesentérica con perforación; requiere laparotomía exploradora urgente']
      ]
    },
    treatmentTable: {
      title: 'Protocolo de Inducción con Ciclofosfamida, Rituximab y Criterios de Plasmaféresis',
      headers: ['Intervención Terapéutica', 'Régimen y Dosis Estándar', 'Población / Indicación Preferente', 'Toxicidad Crítica y Medidas de Soporte'],
      rows: [
        ['Bolos de Metilprednisolona EV', '500 a 1.000 mg EV cada 24 horas x 3 días consecutivos', 'Toda forma de vasculitis ANCA grave con riesgo vital u orgánico', 'Hiperglicemia severa, hipertensión, psicosis esteroidal, sepsis bacteriana'],
        ['Rituximab (Anti-CD20)', '375 mg/m² EV semanal x 4 dosis (o 1.000 mg días 1 y 15)', 'De elección en jóvenes (preserva fertilidad), recaídas o GPA severa', 'Reacciones infusionales agudas, hipogammaglobulinemia, reactivación de VHB'],
        ['Ciclofosfamida (Pulsos EV)', '0.5 a 0.75 g/m² EV mensual x 3 a 6 meses + Mesna', 'Alternativa en falla renal catastrófica o falta de acceso a Rituximab', 'Cistitis hemorrágica (prevenida con Mesna e hidratación), mielosupresión'],
        ['Plasmaféresis (Recambio Plasmático)', '6 a 7 sesiones de 40 a 60 mL/kg de plasma en 14 días', 'Hemorragia alveolar con hipoxemia severa o creatinina > 5.7 mg/dL', 'Hipotensión por volemia, coagulopatía de consumo, infecciones por catéter'],
        ['Cotrimoxazol profiláctico', '160/800 mg (1 comprimido fuerte) oral 3 veces por semana', 'Obligatorio en todo paciente bajo Rituximab o Ciclofosfamida', 'Prevenir neumonía fatal por Pneumocystis jirovecii; controlar hemograma']
      ]
    },
    vignette: {
      title: 'Caso Clínico Tipo EUNACOM · Discusión de Alta Complejidad',
      text: 'Hombre de 48 años sin antecedentes médicos consulta en el servicio de urgencias por cuadro de 2 meses de evolución de astenia profunda, rinorrea purulenta fétida matinal, epistaxis recurrentes y sensación de obstrucción nasal que fue tratada en dos oportunidades con amoxicilina/clavulánico sin mejoría. En los últimos 4 días agrega tos seca, fiebre de 38.4 °C, disnea progresiva de esfuerzos y orinas de color oscuro tipo "té cargado". Al examen físico destaca paciente enflaquecido, taquipneico a 26 rpm, saturando 89% a aire ambiental. A la rinoscopia se aprecia destrucción y perforación del tabique nasal anterior con costras sanguinolentas abundantes. A la auscultación pulmonar presenta crépitos inspiratorios bibasales. No presenta edemas en extremidades inferiores. La radiografía y tomografía de tórax revelan múltiples lesiones nodulares en ambos campos pulmonares, varias de ellas con evidente cavitación central de paredes gruesas. Exámenes de laboratorio: hemoglobina 8.6 g/dL, leucocitos 14.500/mm³ con 82% neutrófilos, plaquetas 520.000/mm³, creatinina 4.2 mg/dL (basal desconocida), nitrógeno ureico 68 mg/dL, sedimento urinario con hematuria macroscópica (más de 50 hematíes por campo con 45% de hematíes dismórficos y cilindros hemáticos) y proteinuria de 1.8 g en 24 horas.',
      conducta: 'El diagnóstico más probable es una Granulomatosis con Poliangeítis (GPA / antes Wegener) con compromiso de vía aérea superior, pulmonar cavitado y síndrome nefrítico rápidamente progresivo (GNRP). La conducta médica inmediata consiste en hospitalización urgente en Unidad de Paciente Crítico (UPC), toma de anticuerpos c-ANCA (anti-PR3) y anticuerpos anti-MBG, inicio inmediato de BOLOS DE METILPREDNISOLONA 1.000 mg EV diarios por 3 días asociados a terapia de inducción con RITUXIMAB (375 mg/m² semanal) o CICLOFOSFAMIDA EV mensual, profilaxis contra Pneumocystis con cotrimoxazol y coordinación de biopsia renal percutánea urgente. Si el paciente presenta progresión a falla respiratoria por hemorragia alveolar o elevación acelerada de creatinina, debe asociarse plasmaféresis de rescate.'
    },
    explicacion: 'El diagnóstico más probable es una Granulomatosis con Poliangeítis (GPA / antes Wegener) con compromiso de vía aérea superior, pulmonar cavitado y síndrome nefrítico rápidamente progresivo (GNRP). La conducta médica inmediata consiste en hospitalización urgente en Unidad de Paciente Crítico (UPC), toma de anticuerpos c-ANCA (anti-PR3) y anticuerpos anti-MBG, inicio inmediato de BOLOS DE METILPREDNISOLONA 1.000 mg EV diarios por 3 días asociados a terapia de inducción con RITUXIMAB (375 mg/m² semanal) o CICLOFOSFAMIDA EV mensual, profilaxis contra Pneumocystis con cotrimoxazol y coordinación de biopsia renal percutánea urgente. Si el paciente presenta progresión a falla respiratoria por hemorragia alveolar o elevación acelerada de creatinina, debe asociarse plasmaféresis de rescate.',
    keyPoints: [
      'La GPA (Wegener) cursa clásicamente con c-ANCA (Anti-PR3 positivo) y nódulos pulmonares cavitados bilaterales.',
      'La perforación del tabique nasal con deformidad en "nariz en silla de montar" es patognomónica de GPA.',
      'La PAM cursa con p-ANCA (Anti-MPO positivo), GNRP pauciinmune y hemorragia alveolar SIN compromiso de vía alta.',
      'La EGPA (Churg-Strauss) se define por asma severo del adulto, eosinofilia > 1.500/uL y mononeuritis múltiple.',
      'En Púrpura de Henoch-Schönlein (IgA), el recuento de plaquetas es NORMAL; plaquetas bajas descartan el diagnóstico.',
      'La inducción en AAV grave exige bolos de metilprednisolona EV + Rituximab o Ciclofosfamida + cotrimoxazol profiláctico.'
    ],
    questions: [
      {
        stem: 'Hombre de 52 años consulta por rinorrea purulenta, epistaxis y dolor facial de 3 meses. La TC de senos paranasales muestra pansinusitis erosiva y la TC de tórax revela múltiples nódulos bilaterales, tres de ellos francamente cavitados. La creatinina es de 3.6 mg/dL y el sedimento urinario presenta cilindros hemáticos y hematíes dismórficos. ¿Cuál es el autoanticuerpo sérico con mayor especificidad diagnóstica para confirmar la patología del paciente?',
        options: [
          { id: 'A', text: 'Anticuerpos anti-membrana basal glomerular (Anti-MBG)' },
          { id: 'B', text: 'Anticuerpos c-ANCA dirigidos contra Proteinasa 3 (Anti-PR3)' },
          { id: 'C', text: 'Anticuerpos antinucleares con patrón centromérico' },
          { id: 'D', text: 'Anticuerpos p-ANCA dirigidos contra Mieloperoxidasa (Anti-MPO)' },
          { id: 'E', text: 'Anticuerpos anti-péptido citrulinado cíclico (Anti-CCP)' }
        ],
        correcta: 'B',
        explicacion: 'Opción B CORRECTA: El cuadro clínico de sinusitis destructiva crónica, nódulos pulmonares cavitados y glomerulonefritis rápidamente progresiva (GNRP) es la triada patognomónica de la Granulomatosis con Poliangeítis (GPA / Wegener). El marcador serológico característico, con una especificidad superior al 95-98%, son los anticuerpos c-ANCA con especificidad para la enzima Proteinasa 3 (Anti-PR3).\nOpción A incorrecta: Los Anti-MBG caracterizan al Síndrome de Goodpasture (hemorragia alveolar y GNRP lineal en IF, pero no causa nódulos cavitados ni sinusitis destructiva).\nOpción C incorrecta: Los anticuerpos anticentrómero se asocian a Esclerosis Sistémica Limitada (CREST).\nOpción D incorrecta: Los p-ANCA / Anti-MPO son característicos de la Poliangeítis Microscópica (PAM) y EGPA, cuadros que no presentan nódulos cavitados ni destrucción de vía aérea superior.\nOpción E incorrecta: Los Anti-CCP son marcadores diagnósticos de Artritis Reumatoide.\nPerla EUNACOM: Nódulos pulmonares cavitados + sinusitis destructiva + glomerulonefritis = GPA (c-ANCA / Anti-PR3).',
        recTag: 'Banco Oficial AEE · Perfil V3 1.09.1.009'
      },
      {
        stem: 'Mujer de 42 años con antecedente de asma bronquial corticodependiente diagnosticada a los 35 años y poliposis nasal consulta por dolor urente brusco y pérdida de la dorsiflexión del pie derecho ("pie caído"), seguido de debilidad para extender los dedos de la mano izquierda ("mano caída"). El hemograma destaca leucocitosis de 16.200/mm³ con 34% de eosinófilos (recuento absoluto de 5.508 eosinófilos/uL). La radiografía de tórax muestra infiltrados pulmonares no cavitados migratorios bilaterales. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Granulomatosis Eosinofílica con Poliangeítis (EGPA / Síndrome de Churg-Strauss)' },
          { id: 'B', text: 'Aspergilosis Broncopulmonar Alérgica (ABPA)' },
          { id: 'C', text: 'Poliangeítis Microscópica (PAM)' },
          { id: 'D', text: 'Síndrome Hipereosinofílico Idiopático sin vasculitis' },
          { id: 'E', text: 'Poliarteritis Nodosa clásica (PAN)' }
        ],
        correcta: 'A',
        explicacion: 'Opción A CORRECTA: La triada de asma severa de inicio en la edad adulta, hipereosinofilia periférica marcada (> 1.500/uL o > 10%) y mononeuritis múltiple asimétrica (pie caído por nervio ciático poplíteo externo y mano caída por nervio radial) es patognomónica de la Granulomatosis Eosinofílica con Poliangeítis (EGPA / antes Churg-Strauss). La presencia de infiltrados pulmonares migratorios refuerza el diagnóstico.\nOpción B incorrecta: ABPA cursa con asma e infiltrados con eosinofilia, pero no produce mononeuritis múltiple ni vasculitis sistémica.\nOpción C incorrecta: La PAM no cursa con asma severo ni hipereosinofilia periférica masiva.\nOpción D incorrecta: El síndrome hipereosinofílico no presenta típicamente el pródromo asmático severo ni las características vasculíticas histológicas de la EGPA.\nOpción E incorrecta: La PAN produce mononeuritis múltiple pero no se asocia a asma ni a eosinofilia marcada.\nPerla EUNACOM: Asma del adulto + eosinofilia periférica masiva + mononeuritis múltiple (pie caído) = EGPA (Churg-Strauss).',
        recTag: 'Banco Oficial AEE · Perfil V3 1.09.1.009'
      },
      {
        stem: 'Paciente de 40 años diagnosticado de Granulomatosis con Poliangeítis con compromiso renal severo y hemorragia alveolar difusa con requerimiento de ventilación mecánica invasiva. Se inicia tratamiento con bolos de metilprednisolona EV y Rituximab. Con respecto a las medidas complementarias de rescate y profilaxis infecciosa, ¿cuál de las siguientes combinaciones de conductas terapéuticas es la más adecuada?',
        options: [
          { id: 'A', text: 'Indicar plasmaféresis de rescate y profilaxis obligatoria con Cotrimoxazol oral' },
          { id: 'B', text: 'Indicar hemodiálisis peritoneal profiláctica e iniciar aciclovir endovenoso continuo' },
          { id: 'C', text: 'Administrar heparina en infusión continua a dosis plenas por riesgo de trombosis pulmonar' },
          { id: 'D', text: 'Realizar traqueostomía inmediata e indicar ceftriaxona en monoterapia' },
          { id: 'E', text: 'Suspender los corticoides por riesgo de sobreinfección fúngica e iniciar ciclosporina' }
        ],
        correcta: 'A',
        explicacion: 'Opción A CORRECTA: En pacientes con vasculitis ANCA y falla orgánica crítica caracterizada por hemorragia alveolar difusa con hipoxemia grave o falla renal avanzada rápidamente progresiva, la plasmaféresis (recambio plasmático terapéutico) remueve rápidamente los anticuerpos patógenos y mediadores proinflamatorios de la circulación. Asimismo, todo paciente que recibe terapia de inducción inmunosupresora intensa con corticoides en dosis altas y Rituximab o Ciclofosfamida tiene indicación mandataria de profilaxis contra la neumonía por Pneumocystis jirovecii con Cotrimoxazol (Trimetoprim-Sulfametoxazol).\nOpción B incorrecta: La diálisis peritoneal no está indicada de rutina; aciclovir no cubre el riesgo de Pneumocystis.\nOpción C incorrecta: La heparina plena agravaría fatalmente la hemorragia alveolar difusa.\nOpción D incorrecta: La traqueostomía inmediata no tiene indicación y ceftriaxona no cubre oportunistas.\nOpción E incorrecta: Suspender los esteroides en vasculitis activa con hemorragia pulmonar causa la muerte inmediata del paciente.\nPerla EUNACOM: En vasculitis ANCA severa: plasmaféresis ante hemorragia alveolar difusa y profilaxis con cotrimoxazol contra Pneumocystis.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.09.1.009'
      },
      {
        stem: 'Niño de 7 años consulta por dolor abdominal cólico difuso, dolor en ambos tobillos y una erupción cutánea purulenta violácea sobreelevada en ambas extremidades inferiores y nalgas, de 4 días de evolución tras un cuadro de resfrío común. Al examen físico destaca abdomen blando pero doloroso a la palpación difusa sin peritonismo, rodillas y tobillos con aumento de volumen periarticular doloroso y púrpura palpable bilateral confluente en piernas. El hemograma muestra: hematocrito 38%, leucocitos 9.800/mm³, plaquetas 310.000/mm³. El examen de orina revela microhematuria (15 hematíes por campo) sin proteinuria. ¿Cuál es el diagnóstico más probable y el pilar del manejo inicial?',
        options: [
          { id: 'A', text: 'Púrpura Trombocitopénico Inmune (PTI) · Inmunoglobulina endovenosa urgente' },
          { id: 'B', text: 'Meningococcemia fulminante · Ceftriaxona EV inmediata y aislamiento respiratorio' },
          { id: 'C', text: 'Púrpura de Henoch-Schönlein (Vasculitis por IgA) · Reposo, analgesia con paracetamol y monitorización ambulatoria estrecha de PA y orina' },
          { id: 'D', text: 'Síndrome Urémico Hemolítico · Transfusión urgente de plaquetas y plasmaféresis' },
          { id: 'E', text: 'Lupus eritematoso sistémico pediátrico · Ciclofosfamida endovenosa inmediata' }
        ],
        correcta: 'C',
        explicacion: 'Opción C CORRECTA: El cuadro clínico de púrpura palpable en extremidades inferiores y glúteos, artralgias/artritis y dolor abdominal cólico postinfeccioso con un recuento plaquetario rigurosamente normal (310.000/mm³) configura la tétrada diagnóstica del Púrpura de Henoch-Schönlein (Vasculitis por IgA). En ausencia de dolor abdominal intratable, sangrado digestivo o nefritis severa, el curso es típicamente benigno y autolimitado, requiriendo reposo, analgesia con paracetamol y vigilancia seriada de presión arterial y sedimento urinario.\nOpción A incorrecta: El PTI se define por trombocitopenia severa (< 50.000/uL) y el púrpura es plano (no palpable).\nOpción B incorrecta: La meningococcemia es un cuadro hiperagudo con shock séptico, fiebre alta y púrpura fulminante rápidamente progresivo.\nOpción D incorrecta: El SUH cursa con trombocitopenia, anemia hemolítica microangiopática y falla renal aguda anúrica; transfundir plaquetas empeora la microtrombosis.\nOpción E incorrecta: No cumple criterios de LES y la presentación es clásica de vasculitis por IgA pediátrica.\nPerla EUNACOM: Púrpura palpable en nalgas y piernas + dolor abdominal + plaquetas NORMALES = Púrpura de Henoch-Schönlein (Vasculitis por IgA).',
        recTag: 'Banco Oficial AEE · Perfil V3 1.09.1.009'
      }
    ]
  },

  // ==========================================================================
  // TEMA 9.23: FIBROMIALGIA Y POLIMIALGIA REUMÁTICA (TIER 2 · 2-3 PÁGINAS)
  // ==========================================================================
  {
    id: 'reuma-23',
    classId: 'reuma-23',
    tier: 2,
    blockNum: 5,
    blockName: 'Vasculitis Sistémicas, Reumatología de Partes Blandas y Metabolismo Óseo',
    topicLabel: '9.23',
    title: 'Fibromialgia y Polimialgia Reumática: Diagnóstico Diferencial, Reactantes de Fase Aguda y Manejo en APS',
    perfilCode: '1.09.1.012',
    dx: 'Específico',
    tx: 'Completo',
    seg: 'Completo',
    ges: 'Manejo en Atención Primaria de Salud (APS) · Sin garantía GES específica',
    reconstrucciones: 'Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026',
    frecuencia: 'Muy Alta · Diagnóstico diferencial recurrente en medicina interna y atención primaria',
    svg: null,
    algoTitle: 'Diagnóstico Diferencial: Fibromialgia vs Polimialgia Reumática',
    diagram: null,
    contexto: 'La diferenciación entre la Polimialgia Reumática (PMR) y la Fibromialgia (FM) constituye una de las distinciones semiológicas y terapéuticas más evaluadas en el examen EUNACOM. Mientras que la PMR es una patología inflamatoria del adulto mayor con reactantes de fase aguda sumamente elevados que responde espectacularmente a corticoides a dosis bajas, la Fibromialgia es un síndrome de dolor nociplástico por sensibilización central en mujeres jóvenes o de mediana edad con exámenes de laboratorio rigurosamente normales, en donde los corticoides y opioides están FORMALMENTE CONTRAINDICADOS.',
    contentSections: [
      {
        subhead: '1. Polimialgia Reumática (PMR): Semiología, Reactantes y Respuesta a Esteroides',
        paragraphs: [
          'La <strong>Polimialgia Reumática</strong> es una enfermedad inflamatoria sistémica casi exclusiva de personas <strong>mayores de 50 años</strong> (edad promedio de presentación > 70 años), con una frecuencia dos veces superior en mujeres. Fisiopatológicamente se caracteriza por sinovitis y bursitis subdeltoidea, trocantérica y de articulaciones facetarias interapofisarias cervicales y lumbares.',
          '<strong>Cuadro Clínico Cardinal:</strong>',
          '• Dolor bilateral, simétrico e intenso con marcada rigidez matinal prolongada (> 45 a 60 minutos) en la <strong>cintura escapular</strong> (hombros y cuello) y en la <strong>cintura pélvica</strong> (caderas y muslos).',
          '• Los pacientes relatan severa dificultad funcional para peinarse, ponerse un suéter o abrigo, elevar los brazos por sobre el plano horizontal y levantarse de un asiento bajo o de la cama.',
          '• <strong>Examen Físico:</strong> La movilidad activa de hombros y caderas está marcadamente limitada por dolor, pero <strong>la movilidad pasiva está conservada</strong>. No existe atrofia ni déficit motor intrínseco: la <strong>fuerza muscular es rigurosamente normal</strong> una vez que se supera la inhibición por dolor.',
          '• <strong>Laboratorio Cardinal:</strong> La <strong>Velocidad de Sedimentación Globular (VSG)</strong> se encuentra marcadamente acelerada, típicamente > 40-50 mm/h (a menudo superando los 80 a 100 mm/h). La Proteína C Reactiva (PCR) está muy elevada. Un rasgo crucial para el examen es que <strong>las enzimas musculares (CPK y aldolasa) son ESTRICTAMENTE NORMALES</strong>, lo que permite diferenciarla de forma inmediata de las miopatías inflamatorias (polimiositis/dermatomiositis).',
          '• <strong>Tratamiento y "Prueba Terapéutica Diagnóstica":</strong> La respuesta a los glucocorticoides a dosis bajas es <strong>espectacular, dramática y casi mágica: Prednisona 15 a 20 mg/día vía oral</strong> induce el alivio completo o superior al 70-80% del dolor y la rigidez en un plazo de 24 a 72 horas. La ausencia de mejoría rotunda dentro de los primeros 7 días de tratamiento descarta casi con certeza la PMR (véase Tabla 9.23).'
        ]
      },
      {
        subhead: '2. Fibromialgia: Fisiopatología Nociplástica, Criterios ACR y Normalidad Analítica',
        paragraphs: [
          'La <strong>Fibromialgia</strong> es el arquetipo de <strong>dolor nociplástico</strong>, originado por una <strong>sensibilización central</strong> con alteración en el procesamiento sensorial del sistema nervioso central: existe una amplificación ascendente de las señales nociceptivas (hiperalgesia) y una pérdida de las vías inhibitorias descendentes del dolor (alodinia difusa). No existe inflamación tisular, daño articular ni patología muscular periférica.',
          'Afecta predominantemente a <strong>mujeres en edad fértil y madura (20 a 55 años)</strong>, con una proporción 6:1 respecto a los hombres.',
          '<strong>Manifestaciones Cardinales:</strong>',
          '1. <strong>Dolor musculoesquelético crónico generalizado:</strong> De al menos 3 meses de duración, presente en esqueleto axial y en cuatro cuadrantes corporales (arriba y abajo de la cintura, a ambos lados del cuerpo).',
          '2. <strong>Sueño no reparador:</strong> Los pacientes duermen pero se despiertan sintiéndose agotados ("como si no hubieran descansado nada"), debido a una intrusión de ondas alfa en el sueño profundo delta (fase IV no REM).',
          '3. <strong>Fatiga crónica profunda y rigidez matinal:</strong> Agotamiento invalidante matinal y vespertino.',
          '4. <strong>Trastornos neurocognitivos ("fibrofog"):</strong> Fallas de memoria reciente, dificultad de concentración y enlentecimiento del procesamiento mental.',
          '5. <strong>Comorbilidades psicosomáticas asociadas:</strong> Síndrome de intestino irritable, cefalea tensional o migraña, dismenorrea, vejiga hiperactiva y trastornos del ánimo (ansiedad generalizada y depresión mayor reactiva).',
          '<strong>Criterios Diagnósticos ACR (2010 / Revisión 2016):</strong> Ya no se exige el recuento estricto de los 18 puntos dolorosos clásicos a la digitopresión (tender points). Se basa en la combinación de un <strong>Índice de Dolor Generalizado (WPI ≥ 7)</strong> y una <strong>Escala de Gravedad de Síntomas (SSS ≥ 5)</strong>, o WPI 4-6 con SSS ≥ 9, con síntomas presentes por al menos 3 meses y sin otra enfermedad que justifique el dolor.',
          '<strong>Laboratorio:</strong> La <strong>VSG, PCR, hemograma, CPK, pruebas tiroideas, ANA y Factor Reumatoide son RIGUROSAMENTE NORMALES</strong>. Si la VSG o la PCR están elevadas, se debe sospechar de inmediato otra enfermedad (PMR, neoplasia, lupus, AR).'
        ]
      },
      {
        subhead: '3. Enfrentamiento Terapéutico en APS: Fármacos Moduladores vs Errores Iatrogénicos',
        paragraphs: [
          'El tratamiento de la fibromialgia descansa primordialmente en un enfoque multidimensional no farmacológico y farmacológico (véase Tabla 9.23):',
          '• <strong>Pilar de Primera Línea No Farmacológico (Mandatorio):</strong> Educación clara y desmitificadora del paciente (validando su dolor sin etiquetarlo como enfermedad degenerativa o deformante), prescripción de <strong>ejercicio aeróbico de bajo impacto progresivo</strong> (caminatas, natación, bicicleta estática, yoga o tai-chi al menos 30 minutos 3 a 5 veces por semana) y Terapia Cognitivo-Conductual (TCC).',
          '• <strong>Tratamiento Farmacológico de Primera Línea (Neuromoduladores Centrales):</strong>',
          '  1. <strong>Inhibidores de la recaptación de serotonina y noradrenalina (ISRN):</strong> <strong>Duloxetina (30 a 60 mg/día)</strong> o Milnaciprán. Mejoran el dolor, la fatiga y el componente depresivo/ansioso.',
          '  2. <strong>Ligandos de la subunidad alfa-2-delta de los canales de calcio:</strong> <strong>Pregabalina (75 a 150 mg/día en la noche)</strong> o Gabapentina. Disminuyen la liberación presináptica de glutamato y sustancia P en la médula espinal, mejorando el dolor y la calidad del sueño.',
          '  3. <strong>Antidepresivos tricíclicos:</strong> <strong>Amitriptilina (10 a 25 mg en la noche)</strong>. De gran utilidad en atención primaria por su bajo costo para restituir la fase IV del sueño y modular las vías descendentes del dolor.',
          '• <strong>ERRORES TERAPÉUTICOS QUE ANULAN LA RESPUESTA EN EUNACOM:</strong>',
          '  - <strong>Glucocorticoides (Prednisona):</strong> Están <strong>FORMALMENTE CONTRAINDICADOS en Fibromialgia</strong>. No tienen diana biológica antiinflamatoria en el dolor nociplástico, son totalmente ineficaces y producen daño iatrogénico grave (síndrome de Cushing, osteoporosis, diabetes e inmunosupresión).',
          '  - <strong>Opioides mayores (Morfina, Oxicodona, Fentanilo):</strong> Están contraindicados por inducir <em>hiperalgesia paradójica inducida por opioides</em>, dependencia y tolerancia sin mejoría funcional a largo plazo.',
          '  - <strong>AINEs en monoterapia:</strong> Poseen escasa o nula eficacia en el dolor nociplástico central.'
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Diferencial Clínico, Analítico y Farmacológico: Fibromialgia vs Polimialgia Reumática',
      headers: ['Parámetro Diferencial', 'Polimialgia Reumática (PMR)', 'Fibromialgia (FM)', 'Relevancia EUNACOM'],
      rows: [
        ['Edad habitual de inicio', 'Siempre mayores de 50 años (pico > 70 años)', 'Mujeres jóvenes y edad media (20 – 55 años)', 'Edad < 50 años descarta prácticamente PMR'],
        ['Naturaleza biológica', 'Enfermedad inflamatoria sistémica (sinovitis/bursitis)', 'Trastorno nociplástico por sensibilización central', 'PMR es inflamatoria; Fibromialgia es funcional/neuromodulada'],
        ['Localización del dolor', 'Cinturas escapular y pélvica bilateral simétrica', 'Dolor difuso generalizado en 4 cuadrantes corporales', 'PMR no duele en manos ni pies distales; FM duele difuso'],
        ['Rigidez matinal', 'Severa, prolongada (habitualmente > 45 a 60 minutos)', 'Variable, subjetiva, referida como "agarrotamiento"', 'En PMR el paciente no puede salir de la cama ni vestirse'],
        ['Fuerza muscular y CPK', 'Fuerza normal (inhibida por dolor); CPK NORMAL', 'Fuerza muscular normal; CPK ESTRICTAMENTE NORMAL', 'CPK elevada orienta a miositis inflamatoria, no a PMR ni FM'],
        ['Reactantes de fase aguda', 'VSG muy acelerada (> 50-100 mm/h) y PCR muy alta', 'VSG y PCR RIGUROSAMENTE NORMALES', 'Una VSG alta descarta FM pura; una VSG normal descarta PMR'],
        ['Asociación sistémica', 'Arteritis de células gigantes / temporal (15% – 20%)', 'Colon irritable, cefalea tensional, depresión/ansiedad', 'En PMR pesquisar siempre cefalea temporal y claudicación'],
        ['Respuesta a corticoides', 'ESPECTACULAR a Prednisona 15-20 mg/día (alivio en 48-72h)', 'NULA o deletérea (CONTRAINDICADOS FORMALMENTE)', 'Pregunta fija: PMR responde a dosis bajas; FM NUNCA corticoides'],
        ['Tratamiento de 1.ª línea', 'Prednisona 15 mg/día oral con desescalamiento lento', 'Ejercicio aeróbico + Duloxetina / Pregabalina / Amitriptilina', 'En FM el pilar es ejercicio aeróbico de bajo impacto en APS']
      ]
    },
    vignette: {
      title: 'Caso Clínico Tipo EUNACOM · Atención Primaria y Diferenciación',
      text: 'Mujer de 68 años consulta en su CESFAM por cuadro de 6 semanas de evolución de dolor progresivo y marcada rigidez matinal en ambos hombros, cuello y caderas. Refiere que por las mañanas necesita más de una hora para poder levantarse de la cama y requiere ayuda de su hija para ponerse los zapatos y peinarse. No refiere cefalea, pérdida visual ni alteraciones en la mandíbula. Al examen físico: paciente en buenas condiciones generales, afebril. Movilidad activa de hombros limitada por dolor, pero la movilidad pasiva está conservada. Fuerza muscular 5/5 en las cuatro extremidades. No se palpan sinovitis en manos, muñecas ni rodillas. El laboratorio solicitado en el consultorio muestra: hematocrito 34%, hemoglobina 11.2 g/dL normocítica normocrómica, leucocitos 7.800/mm³, plaquetas 380.000/mm³, VSG 88 mm/h, PCR 48 mg/L, creatina fosfoquinasa (CPK) 72 U/L (normal), factor reumatoide negativo y pruebas tiroideas (TSH) normales.',
      conducta: 'El diagnóstico más probable es una Polimialgia Reumática (PMR). La conducta terapéutica de primera línea e inmediata en la atención primaria es iniciar PREDNISONA ORAL EN DOSIS BAJAS a razón de 15 mg al día en toma matinal única. Se debe citar a control clínico en 48 a 72 horas para verificar la respuesta terapéutica (que debe ser espectacular, con alivio sintomático superior al 70-80%), educar a la paciente sobre signos de alarma de arteritis temporal (cefalea, dolor mandibular, visión borrosa) y planificar un descenso muy lento y progresivo de la corticoterapia a lo largo de 12 a 18 meses, asociando prevención de osteoporosis con calcio y vitamina D.'
    },
    explicacion: 'El diagnóstico más probable es una Polimialgia Reumática (PMR). La conducta terapéutica de primera línea e inmediata en la atención primaria es iniciar PREDNISONA ORAL EN DOSIS BAJAS a razón de 15 mg al día en toma matinal única. Se debe citar a control clínico en 48 a 72 horas para verificar la respuesta terapéutica (que debe ser espectacular, con alivio sintomático superior al 70-80%), educar a la paciente sobre signos de alarma de arteritis temporal (cefalea, dolor mandibular, visión borrosa) y planificar un descenso muy lento y progresivo de la corticoterapia a lo largo de 12 a 18 meses, asociando prevención de osteoporosis con calcio y vitamina D.',
    keyPoints: [
      'La Polimialgia Reumática afecta a personas > 50 años con dolor y rigidez matinal > 45 min en hombros y caderas.',
      'En la PMR la VSG y la PCR están marcadamente elevadas, mientras que la CPK es rigurosamente NORMAL.',
      'La PMR responde de forma rápida y espectacular a Prednisona a dosis bajas (15 a 20 mg/día) en 48 a 72 horas.',
      'La Fibromialgia es un dolor nociplástico por sensibilización central con VSG, PCR y CPK estrictamente NORMALES.',
      'Los corticoides y los opioides están FORMALMENTE CONTRAINDICADOS en el tratamiento de la Fibromialgia.',
      'El tratamiento de elección en Fibromialgia combina ejercicio aeróbico de bajo impacto con Duloxetina o Pregabalina.'
    ],
    questions: [
      {
        stem: 'Mujer de 71 años consulta por rigidez matinal de 90 minutos de duración en cuello, hombros y caderas de 2 meses de evolución, que le impide levantarse del sillón y peinarse. Al examen físico no se palpan sinovitis periféricas y la fuerza muscular segmentaria es normal. El laboratorio revela hemoglobina de 11.0 g/dL, VSG de 92 mm/h, PCR de 54 mg/L y CPK normal de 65 U/L. No refiere cefalea ni síntomas oculares. ¿Cuál es el tratamiento de elección para iniciar en esta paciente?',
        options: [
          { id: 'A', text: 'Prednisona 15 mg vía oral al día' },
          { id: 'B', text: 'Metilprednisolona 1.000 mg EV en bolos diarios por 3 días' },
          { id: 'C', text: 'Metotrexato 15 mg semanal asociado a ácido fólico' },
          { id: 'D', text: 'Paracetamol 1 g cada 8 horas y tramadol en gotas' },
          { id: 'E', text: 'Pregabalina 75 mg en la noche y derivación a salud mental' }
        ],
        correcta: 'A',
        explicacion: 'Opción A CORRECTA: El cuadro clínico de una paciente mayor de 50 años con dolor y rigidez matinal prolongada en cinturas escapular y pélvica, marcada aceleración de la VSG y PCR, con fuerza muscular y CPK normales corresponde a una Polimialgia Reumática clásica. El tratamiento de primera línea de elección son los corticoides a dosis bajas: Prednisona oral 15 a 20 mg/día, produciendo una mejoría espectacular en menos de 48-72 horas.\nOpción B incorrecta: Los bolos de metilprednisolona EV se reservan para vasculitis con riesgo de ceguera (arteritis temporal con amaurosis), no para PMR no complicada.\nOpción C incorrecta: El metotrexato se reserva como ahorrador de corticoides de segunda línea en recaídas frecuentes, no de inicio.\nOpción D incorrecta: Los analgésicos comunes no controlan la inflamación de la PMR.\nOpción E incorrecta: Es el tratamiento de fibromialgia, incompatible con VSG de 92 mm/h.\nPerla EUNACOM: En Polimialgia Reumática: Prednisona 15 a 20 mg/día oral con mejoría espectacular en 48-72 horas.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.09.1.012'
      },
      {
        stem: 'Mujer de 36 años consulta por dolores osteomusculares generalizados en extremidades superiores, inferiores y columna de 10 meses de evolución. Refiere insomnio de mantención, sensación de fatiga extrema matinal "como si no hubiera dormido", colon irritable y cefaleas tensionales frecuentes. Al examen físico no hay artritis, la fuerza muscular es 5/5 simétrica y presenta dolor exquisito a la presión suave en múltiples puntos musculotendinosos del cuerpo. El hemograma, la VSG (8 mm/h), la PCR (1.2 mg/L), la TSH, la CPK y los anticuerpos antinucleares (ANA) son normales. ¿Cuál es el tratamiento de primera línea más apropiado?',
        options: [
          { id: 'A', text: 'Prednisona 40 mg/día oral por 4 semanas y reposo en cama' },
          { id: 'B', text: 'Educación del dolor, ejercicio aeróbico progresivo de bajo impacto y Duloxetina oral' },
          { id: 'C', text: 'Sulfasalazina 1 g cada 12 horas e infiltración intraarticular con triamcinolona' },
          { id: 'D', text: 'Sulfato de morfina de liberación prolongada y reposo absoluto' },
          { id: 'E', text: 'Celecoxib 200 mg cada 12 horas de forma indefinida' }
        ],
        correcta: 'B',
        explicacion: 'Opción B CORRECTA: La paciente cumple criterios de Fibromialgia: dolor musculoesquelético crónico generalizado (> 3 meses en 4 cuadrantes), sueño no reparador, fatiga crónica, síntomas somáticos acompañantes y normalidad estricta de reactantes de fase aguda y enzimas musculares. El pilar fundamental de manejo es la educación, la actividad física aeróbica regular de bajo impacto (caminata, natación, bicicleta) y fármacos neuromoduladores como la Duloxetina (30-60 mg/día) o Pregabalina/Amitriptilina.\nOpción A incorrecta: Los glucocorticoides están formalmente contraindicados en fibromialgia por ineficacia y severa toxicidad.\nOpción C incorrecta: No hay artritis inflamatoria periférica; sulfasalazina carece de indicación.\nOpción D incorrecta: Los opioides mayores están contraindicados por inducir hiperalgesia paradójica y adicción.\nOpción E incorrecta: Los AINEs en monoterapia continua tienen escasa eficacia en dolor nociplástico y causan riesgo digestivo/cardiovascular.\nPerla EUNACOM: En Fibromialgia: NUNCA corticoides ni opioides; el pilar es ejercicio aeróbico + Duloxetina/Pregabalina.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.09.1.012'
      }
    ]
  },

  // ==========================================================================
  // TEMA 9.24: OSTEOPOROSIS Y SALUD ÓSEA (TIER 2 · 2-3 PÁGINAS)
  // ==========================================================================
  {
    id: 'reuma-24',
    classId: 'reuma-24',
    tier: 2,
    blockNum: 5,
    blockName: 'Vasculitis Sistémicas, Reumatología de Partes Blandas y Metabolismo Óseo',
    topicLabel: '9.24',
    title: 'Osteoporosis y Salud Ósea: Densitometría (T-score vs Z-score), Fracturas por Fragilidad, FRAX y Terapia Farmacológica',
    perfilCode: '1.09.1.014',
    dx: 'Específico',
    tx: 'Completo',
    seg: 'Completo',
    ges: 'Garantía GES en Tratamiento Quirúrgico de Fractura de Cadera en Adultos Mayores (GES N° 10) y Órtesis',
    reconstrucciones: 'EUNACOM Enero 2023 (Q#84) · EUNACOM Diciembre 2022 (Q#54) · EUNACOM Diciembre 2018 (Q#114) · EUNACOM Julio 2015 (Q#62)',
    frecuencia: 'Muy Alta · Patología prevalente del adulto mayor, fracturas por fragilidad y farmacología en APS',
    svg: null,
    algoTitle: 'Algoritmo Diagnóstico y Terapéutico en Osteoporosis y Fracturas por Fragilidad',
    diagram: flow('Algoritmo de Osteoporosis y Prevención de Fracturas', [
      { k: 'box', t: 'Evaluación de Riesgo de Fractura en Adulto Mayor (Mujer ≥ 65 a, Hombre ≥ 70 a, o Factores de Riesgo)', s: 'Buscar antecedentes de fractura previa de bajo impacto, corticoides crónicos, bajo peso o tabaco', type: 'acc' },
      { k: 'split', q: '¿Presenta Antecedente de Fractura por Fragilidad Mayor (Cadera o Vértebra)?', s: 'Decisión diagnóstica directa e inmediata',
        ll: 'SÍ: Fractura de Cadera o Vértebra por Caída Nivel',
        left: { t: 'Diagnóstico Clínico Directo de Osteoporosis', s: 'NO requiere densitometría previa para iniciar tratamiento farmacológico de rescate', type: 'crit' },
        rl: 'NO: Paciente Asintomático / Tamizaje Preventivo',
        right: { t: 'Solicitar Densitometría Ósea DEXA (L1-L4 y Cadera)', s: 'Evaluar T-score en posmenopausia / FRAX con cálculo de riesgo de fractura a 10 años', type: 'warn' }
      },
      { k: 'split', q: 'Interpretación de Densitometría Ósea (T-Score OMS)', s: 'Clasificación de densidad mineral ósea',
        ll: 'T-Score ≤ -2.5 DE (Osteoporosis)',
        left: { t: 'Iniciar Terapia Antirresortiva Farmacológica', s: 'Bifosfonato de 1.ª línea: Alendronato 70 mg/semana VO (o Ác. Zoledrónico EV)', type: 'crit' },
        rl: 'T-Score entre -1.0 y -2.5 DE (Osteopenia)',
        right: { t: 'Calcular Score FRAX Calibrado para Chile', s: 'Tratar si Riesgo Fractura Mayor ≥ 20% o Cadera ≥ 3% · Asegurar Calcio y Vitamina D', type: 'dec' }
      },
      { k: 'box', t: 'Pilar Terapéutico Base: Calcio 1.000-1.200 mg/día + Vitamina D3 800-2.000 UI/día', s: 'Instrucciones estrictas para bifosfonatos orales: ayuno, vaso de agua lleno y bipedestación 30-60 minutos', type: 'acc' }
    ]),
    contexto: 'La osteoporosis es una enfermedad esquelética sistémica silente caracterizada por masa ósea disminuida y deterioro microarquitectónico con consecuente fragilidad ósea. Su mayor relevancia radica en las fracturas por fragilidad, especialmente la fractura de cadera, asociada a una mortalidad del 20-30% al primer año. La regla de oro del EUNACOM establece que la presencia de una fractura por fragilidad en cadera o vértebra define automáticamente el diagnóstico de osteoporosis e impone el inicio de tratamiento antirresortivo sin requerir una densitometría ósea previa.',
    contentSections: [
      {
        subhead: '1. Fisiopatología, Fracturas por Fragilidad y Diagnóstico Clínico Directo',
        paragraphs: [
          'La masa ósea del adulto es el resultado del balance dinámico entre la resorción ósea osteoclástica y la formación ósea osteoblástica acopladas en las unidades de remodelado óseo. A partir de los 30 a 35 años sobreviene una pérdida fisiológica anual de masa ósea (0.5% a 1%), la cual se acelera drásticamente en la mujer durante la posmenopausia inmediata (pérdida de hasta un 3-5% anual durante los primeros 5 a 10 años) por la deprivación estrogénica, que incrementa la expresión del ligando del receptor activador del factor nuclear kappa B (RANKL) y prolonga la sobrevida de los osteoclastos.',
          'Una <strong>fractura por fragilidad</strong> se define como aquella producida por un traumatismo de bajo impacto, equivalente o menor a una caída desde la propia altura o en bipedestación (excluyendo traumas mayores como accidentes vehiculares o caídas de altura, y fracturas de dedos, cráneo o columna cervical).',
          'Los <strong>sitios anatómicos cardinales de fractura osteoporótica</strong> son:',
          '1. <strong>Columna vertebral:</strong> Fracturas por aplastamiento acuñado dorsal y lumbar. Son las más frecuentes (constituyen más del 40-50% de todas las fracturas), pero más de dos tercios cursan de forma asintomática o se manifiestan por pérdida progresiva de estatura (> 3-4 cm) y cifosis dorsal ("joroba de viuda").',
          '2. <strong>Cadera (cuello femoral y región intertrocantérica):</strong> Es la complicación de mayor morbimortalidad (mortalidad del 20% al 30% en los 12 meses posteriores a la fractura y pérdida permanente de autovalencia en más del 50% de los sobrevivientes). Es una <strong>patología con Garantía Explícita en Salud (GES N° 10)</strong> en personas de 65 años y más.',
          '3. <strong>Radio distal (Fractura de Colles):</strong> Es la fractura por fragilidad más precoz en mujeres posmenopáusicas (frecuente entre los 50 y 65 años tras apoyar la mano en flexión dorsal durante una caída de nivel).',
          '4. <strong>Húmero proximal y pelvis:</strong> Frecuentes en el anciano frágil.',
          '<strong>Regla de oro EUNACOM:</strong> La presencia de una <strong>fractura por fragilidad vertebral o de cadera en un adulto mayor establece por sí misma el diagnóstico clínico de OSTEOPOROSIS</strong>, independientemente del valor de la densitometría ósea, e indica el inicio perentorio de terapia farmacológica de rescate.'
        ]
      },
      {
        subhead: '2. Densitometría Ósea (DEXA): Criterios de la OMS, T-Score vs Z-Score y FRAX',
        paragraphs: [
          'La <strong>absorciometría de rayos X de doble energía (DEXA)</strong> constituye el examen de referencia para cuantificar la densidad mineral ósea (DMO, expresada en g/cm²). Los sitios de medición estandarizados son la <strong>columna lumbar (vértebras L1 a L4)</strong> y la <strong>cadera (cuello femoral y cadera total)</strong> (véase Tabla 9.24).',
          '<strong>Criterios Diagnósticos Densitométricos de la OMS (Basados en T-score):</strong>',
          '• <strong>Normal:</strong> T-score mayor o igual a <strong>-1.0 DE</strong>.',
          '• <strong>Osteopenia (baja masa ósea):</strong> T-score entre <strong>-1.0 y -2.5 DE</strong>.',
          '• <strong>Osteoporosis:</strong> T-score menor o igual a <strong>-2.5 DE</strong> en cualquiera de los sitios evaluados (columna lumbar, cuello femoral o cadera total).',
          '• <strong>Osteoporosis Severa o Establecida:</strong> T-score menor o igual a -2.5 DE asociado a <strong>una o más fracturas por fragilidad</strong> documentadas.',
          '<strong>Diferenciación Conceptual: T-score vs Z-score:</strong>',
          '• <strong>T-score:</strong> Número de desviaciones estándar por encima o debajo de la media de DMO de una <em>población joven sana de 20 a 30 años del mismo sexo</em> (pico de masa ósea). Es el parámetro diagnóstico estándar que debe utilizarse en <strong>mujeres posmenopáusicas y en varones de 50 años o más</strong>.',
          '• <strong>Z-score:</strong> Número de desviaciones estándar en comparación con una <em>población de la misma edad, sexo y etnia</em>. Se utiliza en <strong>mujeres premenopáusicas, varones menores de 50 años y niños</strong>. Un <strong>Z-score ≤ -2.0 DE</strong> se define como "baja densidad mineral ósea por debajo del rango esperado para la edad" y obliga a investigar causas secundarias de osteoporosis (uso crónico de glucocorticoides ≥ 5 mg/día por > 3 meses, hiperparatiroidismo primario, hipertiroidismo, hipogonadismo, enfermedad celíaca o síndrome de malabsorción, mieloma múltiple y alcoholismo).',
          '• <strong>Herramienta FRAX (Fracture Risk Assessment Tool):</strong> Algoritmo computarizado validado por la OMS y calibrado para la población chilena que calcula la <strong>probabilidad a 10 años de sufrir una fractura osteoporótica mayor</strong> (cadera, vértebra clínica, muñeca o húmero) y una fractura de cadera aislada. <em>Umbral de intervención en osteopenia:</em> Se indica iniciar fármacos si el riesgo a 10 años de fractura mayor es <strong>≥ 20%</strong> o si el riesgo de fractura de cadera es <strong>≥ 3%</strong>.'
        ]
      },
      {
        subhead: '3. Terapia Farmacológica Escalonada: Calcio, Vitamina D, Bifosfonatos, Denosumab y Teriparatida',
        paragraphs: [
          'El manejo de la osteoporosis abarca medidas universales y fármacos modificadores del metabolismo óseo (véase Figura 9.24 y Tabla 9.24):',
          '• <strong>Pilar Universal de Soporte:</strong>',
          '  1. <strong>Calcio elemental:</strong> Aporte de <strong>1.000 a 1.200 mg/día</strong>, idealmente mediante la dieta (lácteos, frutos secos, legumbres). Si la ingesta es deficitaria, se suplementa con Carbonato de calcio (requiere medio ácido gástrico, tomar con comidas) o Citrato de calcio (de elección en usuarios de omeprazol o con hipoclorhidria).',
          '  2. <strong>Vitamina D3 (Colecalciferol):</strong> Aporte de <strong>800 a 2.000 UI/día</strong> para alcanzar y sostener niveles séricos de 25-hidroxivitamina D [25-(OH)-D] ≥ 30 ng/mL.',
          '  3. <strong>Medidas no farmacológicas:</strong> Ejercicios de fortalecimiento muscular y carga gravitacional (caminata vigorosa), prevención activa de caídas en el domicilio (retirar alfombras, barras de apoyo en baño), cese de tabaquismo y moderación de alcohol.',
          '• <strong>Bifosfonatos Orales (Fármacos de Primera Línea en APS):</strong>',
          '  - <strong>Alendronato:</strong> <strong>70 mg vía oral una vez por semana</strong> (o Risedronato 35 mg semanal). Inhiben la enzima farnesil pirofosfato sintasa de los osteoclastos induciendo su apoptosis.',
          '  - <strong>INSTRUCCIONES ESTRICTAS DE ADMINISTRACIÓN ORAL (Pregunta angular EUNACOM):</strong> Para maximizar su baja absorción gastrointestinal (< 1%) y <strong>prevenir el riesgo de esofagitis química erosiva y úlceras esofágicas graves</strong>, el alendronato debe tomarse estrictamente <strong>en ayunas al despertar, con un vaso lleno de agua pura (200 mL)</strong>, el paciente debe <strong>permanecer en bipedestación o sentado erguido durante al menos 30 a 60 minutos</strong> (sin recostarse), y no debe ingerir alimentos, bebidas ni otros medicamentos durante esa hora.',
          '  - <em>Contraindicaciones de bifosfonatos orales:</em> Estenosis esofágica, acalasia, incapacidad para mantenerse sentado o de pie por 30 minutos, cirugía bariátrica con malabsorción, y <strong>enfermedad renal crónica severa con Clearance de creatinina < 30-35 mL/min</strong>.',
          '• <strong>Bifosfonatos Endovenosos:</strong> <strong>Ácido Zoledrónico (5 mg EV infundido en 15 minutos una vez al año)</strong>. De elección ante intolerancia digestiva severa, falta de adherencia a la vía oral o tras una fractura de cadera reciente. Efecto adverso: síndrome pseudogripal agudo en las primeras 48 horas.',
          '• <strong>Denosumab (Anticuerpo Monoclonal Anti-RANKL):</strong> Administrado en dosis de <strong>60 mg subcutáneo cada 6 meses</strong>. Bloquea la interacción entre RANKL y el receptor RANK de los osteoclastos. Es el fármaco de elección en <strong>insuficiencia renal crónica avanzada con VFG < 30 mL/min</strong> (no tiene clearance renal), pero exige asegurar calcemia normal previa por riesgo de hipocalcemia severa. <em>Alerta crítica:</em> Nunca debe suspenderse abruptamente sin una dosis de consolidación con bifosfonato, debido al riesgo de pérdida rápida de masa ósea y fracturas vertebrales múltiples de rebote.',
          '• <strong>Teriparatida (Análogo de Paratohormona PTH 1-34):</strong> Fármaco <strong>osteoformador / anabólico</strong> (20 mcg subcutáneo diario por un máximo de 24 meses). Indicado en osteoporosis muy severa (T-score < -3.5, fracturas vertebrales recurrentes o falla comprobada a bifosfonatos).'
        ]
      }
    ],
    table: {
      title: 'Criterios Densitométricos OMS y Posología Farmacológica en Osteoporosis',
      headers: ['Fármaco / Clasificación', 'Criterio Operativo / Dosis Terapéutica', 'Vía y Frecuencia de Uso', 'Indicación / Precauciones Clínicas Clave'],
      rows: [
        ['DMO Normal', 'T-score ≥ -1.0 DE en columna o cadera', 'Tamizaje preventivo', 'Dieta equilibrada en calcio, actividad física y cesación tabáquica'],
        ['Osteopenia', 'T-score entre -1.0 y -2.5 DE', 'Seguimiento con FRAX', 'Tratar si FRAX mayor ≥ 20% o cadera ≥ 3%; soporte con Calcio/Vit D'],
        ['Osteoporosis', 'T-score ≤ -2.5 DE o fractura fragilidad', 'Tratamiento farmacológico', 'Iniciar bifosfonato de primera línea + calcio elemental y vitamina D'],
        ['Alendronato sódico', '70 mg comprimido vía oral', 'Una vez por semana en ayuno', 'Tomar con vaso de agua pura; bipedestación estricta 30-60 min; ClCr > 35'],
        ['Ácido Zoledrónico', '5 mg solución en infusión endovenosa', 'Una vez al año (infusión en 15 min)', 'De elección si intolerancia oral o fractura de cadera; vigilar calcemia'],
        ['Denosumab (Anti-RANKL)', '60 mg solución inyectable subcutánea', 'Una vez cada 6 meses', 'Uso seguro en falla renal (VFG < 30); riesgo de rebote si se suspende'],
        ['Teriparatida (PTH 1-34)', '20 mcg inyección subcutánea diaria', 'Diaria por máximo 24 meses', 'Agente osteoformador en osteoporosis severa o fractura bajo bifosfonatos']
      ]
    },
    vignette: {
      title: 'Caso Clínico Tipo EUNACOM · Atención Primaria y Salud Ósea',
      text: 'Mujer de 69 años con antecedente de tabaquismo activo (15 paquetes/año) y menopausia a los 48 años sin terapia de reemplazo hormonal acude a control en policlínico. Trae resultado de densitometría ósea DEXA solicitada de forma preventiva: DMO en columna lumbar (L1-L4) con T-score de -2.9 DE y en cuello femoral con T-score de -2.6 DE (Z-score en columna -1.1 DE). La paciente no refiere antecedentes de fracturas previas ni dolores óseos. Su estatura actual es de 158 cm (2 cm menos que a los 30 años). Sus exámenes de laboratorio muestran: hemograma normal, calcemia 9.4 mg/dL, fósforo 3.2 mg/dL, creatinina 0.8 mg/dL (ClCr 68 mL/min), fosfatasas alcalinas normales y 25-hidroxivitamina D en 18 ng/mL (insuficiencia de vitamina D). No presenta reflujo gastroesofágico ni trastornos de deglución.',
      conducta: 'La paciente presenta una OSTEOPOROSIS densitométrica según los criterios de la OMS (T-score ≤ -2.5 DE tanto en columna lumbar como en cuello femoral). La conducta médica integral de primera línea consiste en: 1) Corrección de la insuficiencia de vitamina D con Colecalciferol (Vitamina D3) 2.000 UI/día oral; 2) Asegurar aporte de calcio elemental de 1.000 a 1.200 mg/día (mediante dieta y suplemento de carbonato de calcio con las comidas); 3) Iniciar terapia antirresortiva de primera línea con ALENDRONATO 70 mg VÍA ORAL UNA VEZ POR SEMANA; 4) Educar de manera rigurosa sobre las normas de ingestión del alendronato (ayuno matinal estricto con un vaso grande de agua pura de 200 mL, permanecer sentado erguido o de pie por 30 a 60 minutos sin recostarse y no comer nada durante esa hora para evitar esofagitis química); y 5) Recomendar ejercicios de fuerza y equilibrio, cese de tabaco y control densitométrico en 2 años.'
    },
    explicacion: 'La paciente presenta una OSTEOPOROSIS densitométrica según los criterios de la OMS (T-score ≤ -2.5 DE tanto en columna lumbar como en cuello femoral). La conducta médica integral de primera línea consiste en: 1) Corrección de la insuficiencia de vitamina D con Colecalciferol (Vitamina D3) 2.000 UI/día oral; 2) Asegurar aporte de calcio elemental de 1.000 a 1.200 mg/día (mediante dieta y suplemento de carbonato de calcio con las comidas); 3) Iniciar terapia antirresortiva de primera línea con ALENDRONATO 70 mg VÍA ORAL UNA VEZ POR SEMANA; 4) Educar de manera rigurosa sobre las normas de ingestión del alendronato (ayuno matinal estricto con un vaso grande de agua pura de 200 mL, permanecer sentado erguido o de pie por 30 a 60 minutos sin recostarse y no comer nada durante esa hora para evitar esofagitis química); y 5) Recomendar ejercicios de fuerza y equilibrio, cese de tabaco y control densitométrico en 2 años.',
    keyPoints: [
      'Una fractura por fragilidad en cadera o vértebra define automáticamente OSTEOPOROSIS sin requerir densitometría.',
      'Densitometría OMS: Normal T-score ≥ -1.0; Osteopenia -1.0 a -2.5; Osteoporosis T-score ≤ -2.5 DE.',
      'El T-score se utiliza en posmenopáusicas y varones ≥ 50 años; el Z-score se utiliza en jóvenes (< 50 años).',
      'Un Z-score ≤ -2.0 DE obliga a descartar sistemáticamente causas secundarias de pérdida ósea (corticoides, Cushing).',
      'El Alendronato exige ayuno estricto, vaso con agua pura y bipedestación por 30 a 60 min para prevenir esofagitis.',
      'Denosumab (anti-RANKL) se puede usar con VFG < 30 mL/min, pero nunca suspender sin bifosfonato por riesgo de rebote.'
    ],
    questions: [
      {
        stem: 'Mujer de 76 años previamente autovalente resbala en el pasillo de su casa y cae desde su propia altura, sufriendo dolor intenso en la ingle derecha e incapacidad funcional para la bipedestación. La radiografía de pelvis confirma una fractura subcapital desplazada del cuello femoral derecho, por lo que es hospitalizada para artroplastía de cadera. No cuenta con densitometría ósea previa. ¿Cuál es el diagnóstico esquelético que se establece clínicamente de manera automática y cuál es la conducta farmacológica apropiada para el alta?',
        options: [
          { id: 'A', text: 'Osteopenia leve · Indicar suplemento de vitamina D3 aislada y solicitar densitometría ósea ambulatoria antes de cualquier fármaco' },
          { id: 'B', text: 'Osteoporosis clínica establecida · Iniciar tratamiento con calcio, vitamina D y terapia antirresortiva (bifosfonato o denosumab) sin requerir densitometría previa' },
          { id: 'C', text: 'Trauma mecánico aislado sin osteoporosis · No requiere tratamiento farmacológico óseo ya que la fractura es traumática' },
          { id: 'D', text: 'Osteomalacia por déficit de calcio · Indicar calcitriol a altas dosis y diferir los antirresortivos de forma definitiva' },
          { id: 'E', text: 'Artrosis de cadera complicada · Iniciar condroitín sulfato y AINEs de forma indefinida' }
        ],
        correcta: 'B',
        explicacion: 'Opción B CORRECTA: Toda fractura producida por un traumatismo de bajo impacto (caída desde la propia altura) en sitios cardinales como cadera o columna vertebral en un adulto mayor establece por sí misma el diagnóstico clínico de Osteoporosis (incluso Osteoporosis Severa/Establecida). No es necesario realizar ni esperar una densitometría ósea previa para justificar el inicio de terapia antirresortiva farmacológica (bifosfonato como alendronato o ácido zoledrónico, o denosumab) asociada a suplementación de calcio y vitamina D.\nOpción A incorrecta: Una fractura de cadera por caída de nivel nunca se cataloga como osteopenia; diferir el fármaco a la espera de DEXA es un error conceptual.\nOpción C incorrecta: Una caída desde la propia altura es un trauma de bajo impacto, característico de hueso frágil osteoporótico.\nOpción D incorrecta: La osteomalacia es una alteración de la mineralización de la matriz osteoide (por déficit extremo de vitamina D), mucho menos común que la osteoporosis senil.\nOpción E incorrecta: La fractura femoral por fragilidad no se maneja como artrosis con condroitina.\nPerla EUNACOM: Fractura de cadera o vértebra por caída de nivel = Diagnóstico automático de Osteoporosis; iniciar antirresortivo sin esperar DEXA.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.09.1.014'
      },
      {
        stem: 'Mujer de 64 años acude a control con densitometría ósea que informa un T-score de -2.8 DE en columna lumbar L1-L4 y -2.6 DE en cuello femoral. No tiene antecedentes de fracturas previas, su clearance de creatinina es de 62 mL/min y no presenta antecedentes digestivos. Se decide iniciar Alendronato 70 mg vía oral semanal. ¿Cuáles son las instrucciones farmacológicas indispensables que deben entregarse a la paciente para garantizar la absorción y prevenir la esofagitis química erosiva?',
        options: [
          { id: 'A', text: 'Tomar el comprimido junto con el almuerzo acompañado de un vaso de leche para proteger la mucosa gástrica' },
          { id: 'B', text: 'Tomar el comprimido en ayunas al despertar con un vaso lleno de agua pura, permaneciendo en bipedestación o sentado erguido al menos 30 a 60 minutos sin comer' },
          { id: 'C', text: 'Tomar el comprimido justo antes de acostarse en la cama con jugo de naranja para acidificar el medio gástrico' },
          { id: 'D', text: 'Masticar o disolver el comprimido en agua tibia junto con el suplemento de carbonato de calcio' },
          { id: 'E', text: 'Ingerir el fármaco cada 12 horas con las comidas principales y mantener reposo en decúbito supino por 1 hora' }
        ],
        correcta: 'B',
        explicacion: 'Opción B CORRECTA: Los bifosfonatos orales (alendronato, risedronato) presentan una biodisponibilidad oral extremadamente baja (< 1%) y son altamente irritantes para el epitelio esofágico. Para evitar esofagitis erosiva, úlceras esofágicas graves o perforación, y garantizar su absorción, deben ingerirse estrictamente en ayunas al despertar, con un vaso completo de agua corriente pura (sin gas, leche, té ni café), el paciente debe permanecer en posición erguida (de pie o sentado) durante al menos 30 a 60 minutos (prohibido acostarse), y posponer cualquier alimento, bebida o medicamento por al menos una hora.\nOpción A incorrecta: Los lácteos y alimentos quelan el alendronato con el calcio e impiden totalmente su absorción.\nOpción C incorrecta: Tomar el bifosfonato antes de dormir e irse a la cama favorece el reflujo esofágico y la retención del fármaco en el esófago, provocando esofagitis necrotizante grave.\nOpción D incorrecta: Masticar el comprimido genera úlceras orofaríngeas severas; además el calcio quelante anula el alendronato.\nOpción E incorrecta: El alendronato para osteoporosis se toma una vez a la semana en ayuno, nunca dos veces al día ni acostado.\nPerla EUNACOM: Alendronato: ayuno matinal estricto, vaso de agua pura y permanecer erguido 30-60 minutos para evitar esofagitis química.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.09.1.014'
      }
    ]
  }
];

module.exports = { bloque5Classes, flow };
