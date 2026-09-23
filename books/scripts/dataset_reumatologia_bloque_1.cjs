// ============================================================================
// BLOQUE 01 REUMATOLOGÍA: ARTRITIS INFLAMATORIAS, CRISTALES Y ARTICULAR
// Manual EUNACOM 2026 · Tomo 09 Reumatología & Inmunología Clínica
// 5 Temas Curriculares (9.1 a 9.5) · 14 Preguntas Oficiales EUNACOM
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

const bloque1Classes = [
  {
    id: 'reuma-01', classId: 'reuma-01', tier: 2,
    blockNum: 1, blockName: 'Artritis Inflamatorias, Cristales y Diagnóstico Articular',
    topicLabel: '9.1',
    title: 'Monoartritis Aguda: Enfrentamiento Clínico y Estudio de Líquido Sinovial',
    perfilCode: '1.04.2.007', dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Sospecha y confirmación de urgencia · Derivación prioritaria si sospecha séptica',
    reconstrucciones: 'EUNACOM 2017 Q#12 · EUNACOM 2019 Q#33 · EUNACOM 2022 Q#08 · EUNACOM 2024 Q#44',
    frecuencia: 'Muy Alta · Pregunta angular de urgencias reumatológicas y medicina interna',
    svg: null, algoTitle: 'Algoritmo Diagnóstico en Monoartritis Aguda: Decisión por Líquido Sinovial',
    diagram: flow('Algoritmo de la Monoartritis Aguda', [
      { k: 'box', t: 'Monoartritis Aguda Febril o No Febril (Dolor, Calor, Derrame Articular)', s: 'Examen físico + sospecha clínica inmediata · Articulación más frecuente: Rodilla (50%)', type: 'acc' },
      { k: 'box', t: 'Paso Mandatorio de Urgencia: Artrocentesis Diagnóstica', s: 'Realizar SIEMPRE antes de iniciar antimicrobianos · Evaluar aspecto, recuento, Gram y cristales', type: 'warn' },
      { k: 'split', q: '¿Recuento de Leucocitos y Características del Líquido Sinovial?', s: 'Diferenciación biológica de los 4 patrones clásicos',
        ll: 'Leucocitos > 50.000/mm³ (PMN > 90%)',
        left: { t: 'Líquido Séptico / Purulento', s: 'Gram y cultivo urgentes · Iniciar antibióticos EV inmediatos + drenaje', type: 'crit' },
        rl: 'Leucocitos 2.000 - 50.000/mm³ o Cristales',
        right: { t: 'Líquido Inflamatorio / Microcristalino', s: 'Microscopía de luz polarizada · Descartar Gota vs Condrocalcinosis vs AR', type: 'dec' }
      },
      { k: 'box', t: 'Conducta Terapéutica Racional', s: 'Séptico: Cefazolina/Cloxacilina EV + drenaje · Microcristalino: AINEs/Colchicina oral', type: 'acc' }
    ]),
    contexto: 'La monoartritis aguda constituye una de las mayores urgencias médicas en medicina interna. La regla de oro del EUNACOM exige considerar toda monoartritis como séptica hasta realizar una artrocentesis diagnóstica. Omitir la punción articular o diferir el drenaje conlleva destrucción osteocartilaginosa irreversible en menos de 48 a 72 horas.',
    contentSections: [
      {
        subhead: '1. Principios Clínicos y Definición de Monoartritis Aguda',
        paragraphs: [
          'Se define monoartritis aguda como la inflamación (dolor, eritema, aumento de volumen local, calor y marcada impotencia funcional) de una única articulación con tiempo de evolución inferior a 4 a 6 semanas. La articulación más comúnmente comprometida es la rodilla (50%), seguida de tobillo, muñeca, cadera y primera articulación metatarsofalángica.',
          'El espectro etiológico de mayor trascendencia en el examen EUNACOM se divide en cuatro categorías biológicas: <strong>1) Artritis infecciosa (séptica bacteriana y gonocócica)</strong>; <strong>2) Artritis microcristalina (gota por urato monosódico y condrocalcinosis por pirofosfato de calcio)</strong>; <strong>3) Inicio monoarticular de artropatías inflamatorias sistémicas (artritis reumatoide, espondiloartritis)</strong>; y <strong>4) Hemartrosis / patología mecánica-traumática</strong>.'
        ]
      },
      {
        subhead: '2. Artrocentesis Diagnóstica: Clasificación del Líquido Sinovial',
        paragraphs: [
          'La <strong>artrocentesis es mandatoria e inaplazable</strong> ante todo derrame articular agudo no filiado. Solo se contraindica de forma absoluta ante infección cutánea activa directamente sobre el sitio de punción (ej. celulitis suprapatelar) por riesgo de inoculación iatrogénica.',
          'El líquido sinovial aspirado debe enviarse de inmediato a: citoquímico y recuento diferencial leucocitario, tinción de Gram, cultivo corriente para aerobios/anaerobios, y examen microscópico en fresco con luz polarizada compensada para cristales.',
          '<strong>Líquido Normal:</strong> Volumen < 3.5 mL, transparente, incoloro o pajizo claro, alta viscosidad (filancia > 3 cm), leucocitos < 200/mm³ (mononucleares > 75%).',
          '<strong>Líquido No Inflamatorio (Tipo I):</strong> Amarillento transparente, viscosidad alta, leucocitos entre 200 y 2.000/mm³ con PMN < 25%. Característico de la artrosis, trauma mecánico articular y osteocondritis.',
          '<strong>Líquido Inflamatorio (Tipo II):</strong> Translúcido a turbio, viscosidad disminuida (goteo acuoso), leucocitos entre 2.000 y 50.000/mm³ con PMN > 50%. Típico de artritis reumatoide, espondiloartropatías, gota, pseudogota y artritis lúpica.',
          '<strong>Líquido Séptico (Tipo III):</strong> Francamente purulento, opaco, viscosidad muy baja, leucocitos > 50.000/mm³ (frecuentemente > 80.000-100.000/mm³) con PMN > 90%, glucosa sinovial marcadamente inferior a la glicemia (< 50% de la cifra plasmática). Característico de la artritis bacteriana piógena. <em>Nota EUNACOM:</em> Las crisis de gota hiperagudas pueden alcanzar recuentos > 50.000 leucocitos, por lo que siempre deben buscarse cristales y teñir con Gram.',
          '<strong>Líquido Hemorrágico (Tipo IV):</strong> Rojo oscuro o sanguinolento, incoagulable en el tubo. Sugiere rotura de ligamentos cruzados, fractura intraarticular, sobredosis de anticoagulantes, hemofilia o sinovitis villonodular pigmentada.'
        ]
      },
      {
        subhead: '3. Enfrentamiento Diagnóstico y Decisión Terapéutica Inmediata',
        paragraphs: [
          'Si la sospecha de artritis séptica es alta (fiebre, líquido purulento o leucocitos > 50.000 con neutrofilia extrema), <strong>nunca debe esperarse el resultado del cultivo definitivo</strong>. Se debe hospitalizar al paciente, solicitar hemocultivos x 2 e iniciar antibioterapia bactericida endovenosa inmediata empírica, asociada a descompresión/lavado articular urgente.',
          'Si se constata visualización inequívoca de cristales de urato monosódico (birrefringencia negativa) y el Gram es negativo, se confirma artritis gotosa aguda y se instaura terapia antiinflamatoria (AINEs potentes o colchicina), pero manteniendo vigilancia estricta si coexiste sospecha infecciosa (infección y cristales pueden coexistir hasta en un 5% de los casos).'
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Diferencial del Líquido Sinovial en Monoartritis Aguda',
      headers: ['Tipo de Líquido', 'Aspecto y Color', 'Leucocitos (/mm³)', '% PMN', 'Glucosa Sinovial', 'Etiologías Típicas'],
      rows: [
        ['Normal', 'Transparente, pajizo, filante', '< 200', '< 25%', '= Glicemia', 'Articulación sana'],
        ['Tipo I (No Inflamatorio)', 'Claro a amarillo claro', '200 – 2.000', '< 25%', '= Glicemia', 'Artrosis, meniscopatía, trauma leve'],
        ['Tipo II (Inflamatorio)', 'Amarillo turbio, no filante', '2.000 – 50.000', '> 50%', 'Levemente disminuida', 'Artritis reumatoide, gota, pseudogota, EA'],
        ['Tipo III (Séptico)', 'Opaco, francamente purulento', '> 50.000 (hasta >100k)', '> 90%', '< 50% de glicemia', 'S. aureus, Streptococcus, Neisseria gonorrhoeae'],
        ['Tipo IV (Hemorrágico)', 'Rojo intenso / sanguinolento', 'Similar a sangre', 'Similar a sangre', '= Glicemia', 'Trauma capsuloligamentoso, hemofilia, prótesis']
      ]
    },
    vignette: 'Hombre de 42 años sin antecedentes mórbidos consulta en el servicio de urgencia por cuadro de 14 horas de evolución de dolor intenso, tumefacción y calor en la rodilla derecha, que le impide el apoyo. Al examen físico: T° 38.3 °C, PA 125/75 mmHg, FC 92 lpm. Rodilla derecha con marcado derrame a tensión, eritema supraarticular, choque rotuliano positivo y dolor exquisito al mínimo intento de flexión activa o pasiva.',
    explicacion: 'Frente a una monoartritis aguda febril en una articulación grande como la rodilla, la conducta inicial obligatoria, prioritaria e inaplazable es realizar una artrocentesis diagnóstica para análisis citoquímico, tinción de Gram, cultivo y búsqueda de cristales bajo microscopía óptica. Iniciar antibióticos o analgésicos antes de la punción enmascara el cultivo e impide confirmar si se trata de una artritis séptica que requiere drenaje quirúrgico de rescate.',
    keyPoints: [
      'Toda monoartritis aguda se considera séptica hasta que la artrocentesis y el análisis de líquido sinovial demuestren lo contrario.',
      'La artrocentesis diagnóstica debe realizarse SIEMPRE antes de administrar la primera dosis de antibióticos.',
      'Líquido séptico típico: > 50.000 leucocitos/mm³ con > 90% PMN, aspecto purulento y glucosa marcadamente disminuida (< 50% plasmática).',
      'Líquido inflamatorio: 2.000 a 50.000 leucocitos/mm³ con PMN > 50% (Gota, Condrocalcinosis, Artritis Reumatoide).',
      'La única contraindicación absoluta de artrocentesis es la infección cutánea activa sobre el trayecto de punción (celulitis).',
      'La coexistencia de microcristales y gérmenes piógenos es posible; ante la duda con líquido purulento, siempre cubrir infección bacteriana.'
    ],
    questions: [
      {
        stem: 'Hombre de 38 años consulta por dolor severo, calor y aumento de volumen en rodilla izquierda de 18 horas de evolución, asociado a sensación febril. Al examen destaca rodilla caliente, eritematosa y con derrame articular a tensión. ¿Cuál es la conducta diagnóstica inicial más apropiada?',
        options: [
          { id: 'A', text: 'Iniciar Cloxacilina 2 g EV y solicitar resonancia magnética de rodilla' },
          { id: 'B', text: 'Realizar artrocentesis diagnóstica urgente para citoquímico, Gram, cultivo y cristales' },
          { id: 'C', text: 'Prescribir Naproxeno 500 mg cada 12 horas y controlar en policlínico con radiografía simple' },
          { id: 'D', text: 'Solicitar ácido úrico plasmático, VHS, PCR y hemogramas antes de puncionar' },
          { id: 'E', text: 'Indicar reposo absoluto, hielo local e infiltración intraarticular con triamcinolona' }
        ],
        correcta: 'B',
        explicacion: 'En toda monoartritis aguda con signos inflamatorios locales y sistémicos, la regla de oro es realizar artrocentesis diagnóstica urgente antes de iniciar cualquier tratamiento farmacológico o antibiótico. La punción permite diferenciar infección bacteriana piógena de crisis microcristalina u otras causas inflamatorias. Infiltrar corticoides está absolutamente contraindicado si no se ha descartado infección.',
        recTag: 'EUNACOM 2017 · Q#12'
      },
      {
        stem: 'Se realiza artrocentesis de rodilla a una mujer de 65 años con monoartritis aguda. El laboratorio informa: líquido turbio, recuento de 28.000 leucocitos/mm³ con 68% de polimorfonucleares, tinción de Gram negativa y glucosa normal. Al microscopio de luz polarizada compensada se observan cristales romboidales con birrefringencia positiva débil. ¿A qué categoría y diagnóstico corresponde este líquido?',
        options: [
          { id: 'A', text: 'Líquido Séptico · Artritis por Staphylococcus aureus' },
          { id: 'B', text: 'Líquido No Inflamatorio · Artrosis con derrame mecánico' },
          { id: 'C', text: 'Líquido Inflamatorio · Condrocalcinosis articular (Pseudogota)' },
          { id: 'D', text: 'Líquido Microcristalino Urato · Gota tofácea aguda' },
          { id: 'E', text: 'Líquido Hemorrágico · Rotura traumática meniscal' }
        ],
        correcta: 'C',
        explicacion: 'Un recuento entre 2.000 y 50.000 leucocitos/mm³ clasifica el líquido como inflamatorio (Tipo II). La presencia patognomónica de cristales romboidales o rectangulares con birrefringencia positiva débil confirma depósito de pirofosfato de calcio dihidratado (CPPD), cuadro conocido como condrocalcinosis o pseudogota. Los cristales de gota son en aguja y con birrefringencia negativa intensa.',
        recTag: 'EUNACOM 2022 · Q#08'
      }
    ]
  },

  {
    id: 'reuma-02', classId: 'reuma-02', tier: 3,
    blockNum: 1, blockName: 'Artritis Inflamatorias, Cristales y Diagnóstico Articular',
    topicLabel: '9.2',
    title: 'Artritis Séptica del Adulto y Protésica: Etiología, Drenaje Urgente y Antimicrobianos',
    perfilCode: '1.04.2.007', dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Garantía GES en Infección de Prótesis Articular en Adultos Mayores · Manejo urgente en especialista',
    reconstrucciones: 'EUNACOM 2018 Q#05 · EUNACOM 2020 Q#19 · EUNACOM 2021 Q#38 · EUNACOM 2023 Q#14',
    frecuencia: 'Muy Alta · Emergencia infecciosa osteoarticular con alta morbimortalidad',
    svg: null, algoTitle: 'Manejo Integral de la Artritis Séptica: Drenaje + Antibioterapia EV Escalonada',
    diagram: flow('Algoritmo de Artritis Séptica', [
      { k: 'box', t: 'Sospecha de Artritis Séptica (Monoartritis Aguda Dolorosa ± Fiebre)', s: 'Líquido purulento: Leucocitos > 50.000/mm³ (PMN > 90%) · Solicitar Hemocultivos x 2', type: 'acc' },
      { k: 'split', q: 'Etiología y Perfil Clínico del Paciente', s: 'Identificación bacteriológica y contexto epidemiológico',
        ll: 'Adulto General / Anciano / Prótesis',
        left: { t: 'Staphylococcus aureus (>60%) / Streptococo', s: 'Cefazolina 2g c/8h o Cloxacilina 2g c/4h EV · Vancomicina si riesgo SAMR', type: 'warn' },
        rl: 'Joven Sexual Activo / Tenosinovitis',
        right: { t: 'Neisseria gonorrhoeae (Artritis Gonocócica)', s: 'Ceftriaxona 1-2g c/24h EV · Lesiones pustulares acrales y poliartralgias', type: 'dec' }
      },
      { k: 'box', t: 'Pilar Terapéutico Quirúrgico: Drenaje Articular Inmediato', s: 'Artroscopía o artrotomía evacuadora / Punciones diarias repetidas · Mantener antibiótico 3 a 4 semanas', type: 'crit' },
      { k: 'box', t: 'Infección de Prótesis Articular (Aguda < 3 meses vs Crónica)', s: 'Desbridamiento con retención (DAIR) vs Recambio en 1 o 2 tiempos + Rifampicina contra biofilm', type: 'acc' }
    ]),
    contexto: 'La artritis séptica es una verdadera urgencia quirúrgica y médica. La liberación de enzimas proteolíticas lisosomales bacterianas y de neutrófilos destruye el cartílago articular hialino de manera irreversible en 48 horas. El manejo no consiste únicamente en antibióticos: el vaciamiento y drenaje de la cavidad cerrada es indispensable para salvar la articulación.',
    contentSections: [
      {
        subhead: '1. Fisiopatología, Vías de Diseminación y Microbiología EUNACOM',
        paragraphs: [
          'La infección de la membrana sinovial y del espacio articular se produce fundamentalmente por <strong>vía hematógena</strong> (la más frecuente en el adulto, secundaria a bacteriemias transitorias cutáneas, dentales, urinarias o catéteres vasculares). Otras vías incluyen la inoculación directa (infiltraciones articulares, artroscopía, trauma penetrante) y la contigüidad (osteomielitis adyacente o celulitis profunda).',
          '<strong>Etiologías bacterianas principales:</strong>',
          '• <em>Staphylococcus aureus</em>: Causa más prevalente en todas las edades (> 50-60% de los casos en adultos nativos y protésicos). En Chile se debe evaluar el riesgo de SAMR comunitario u hospitalario.',
          '• <em>Streptococcus pyogenes</em> (Grupo A), <em>Streptococcus agalactiae</em> (Grupo B en diabéticos y ancianos) y <em>Streptococcus pneumoniae</em> (en alcohólicos o esplenectomizados): ocupan el 15-20% de los aislamientos.',
          '• <em>Bacilos gramnegativos entéricos (E. coli, Klebsiella, Pseudomonas aeruginosa)</em>: Representan el 10-15%, predominando en adultos mayores frágiles, usuarios de drogas intravenosas, pacientes sondados o con comorbilidades urológicas/inmunosupresión.',
          '• <em>Neisseria gonorrhoeae</em>: Principal causa en adultos jóvenes sexualmente activos. Clásicamente se presenta como el <strong>síndrome de artritis-dermatitis</strong>: pródromo de fiebre, tenosinovitis migratoria asimétrica (muñecas, dedos), pápulas o pústulas necróticas acrales escasas, evolucionando luego a una mono u oligoartritis purulenta de rodilla o tobillo.'
        ]
      },
      {
        subhead: '2. Manifestaciones Clínicas, Factores de Riesgo y Diagnóstico',
        paragraphs: [
          'Clínica cardinal: Comienzo súbito de dolor monoarticular lancinante, aumento de volumen marcado, calor cutáneo, hipersensibilidad extrema y limitación total del rango de movilidad (la movilización pasiva es intolerable). La fiebre está presente en el 60-80% de los pacientes (puede estar ausente en ancianos o inmunocomprometidos).',
          'Factores de riesgo reconocidos: Edad avanzada (> 80 años), artritis reumatoide previa (las articulaciones con sinovitis crónica son propensas a siembra bacteriana), diabetes mellitus, hemodiálisis, uso crónico de corticoides o inmunosupresores, y presencia de material protésico articular.',
          'Laboratorio: La VHS (> 50-70 mm/h) y la PCR están marcadamente elevadas. El hemograma muestra leucocitosis con neutrofilia. Los <strong>hemocultivos deben tomarse siempre</strong> (positivos en el 50% de las bacteriemias).',
          'La artrocentesis revela líquido turbio-purulento con > 50.000 leucocitos/mm³ y > 90% neutrófilos. La tinción de Gram detecta cocos grampositivos en 60-75% de las infecciones estafilocócicas, pero solo en < 25-30% de las gonocócicas. El cultivo sinovial en medios enriquecidos confirma el diagnóstico y aporta el antibiograma.'
        ]
      },
      {
        subhead: '3. Tratamiento Médico-Quirúrgico de Urgencia y Regímenes Antimicrobianos',
        paragraphs: [
          'El tratamiento exitoso descansa en dos pilares simultáneos e indivisibles: <strong>antimicrobianos bactericidas endovenosos</strong> y <strong>descompresión mecánica / drenaje articular</strong>.',
          '<strong>Regímenes Empíricos Iniciales:</strong>',
          '• Paciente estándar sin sospecha de SAMR: <strong>Cefazolina 2 g EV cada 8 horas</strong> (o Cloxacilina 2 g EV cada 4 horas). En alérgicos no anafilácticos a penicilina se prefiere cefazolina.',
          '• Sospecha de SAMR (colonización previa, hemodiálisis, hospitalización reciente, sepsis grave): <strong>Vancomicina 15-20 mg/kg EV cada 12 horas</strong> (titulando según niveles plasmáticos valle 15-20 mcg/mL) o Daptomicina 8-10 mg/kg/día.',
          '• Sospecha de gramnegativos (ancianos frágiles, infección urinaria concomitante, drogas EV): Añadir <strong>Ceftriaxona 2 g EV al día</strong> o Ceftazidima / Cefepime si hay riesgo de <em>Pseudomonas</em>.',
          '• Sospecha de infección gonocócica diseminada: <strong>Ceftriaxona 1 a 2 g EV al día</strong> + Azitromicina 1 g oral (dosis única para cobertura de <em>Chlamydia trachomatis</em> concomitante). Respuesta rápida en 24-48 horas.',
          '<strong>Duración:</strong> Mínimo 2 semanas de terapia endovenosa, completando 3 a 4 semanas totales con terapia oral según mejoría clínica, normalización de PCR y cultivos negativos.'
        ]
      },
      {
        subhead: '4. Drenaje Articular y Manejo de la Infección Protésica Articular',
        paragraphs: [
          'El drenaje articular es mandatorio: se realiza mediante <strong>artroscopía con lavado abundante</strong> o artrotomía abierta en articulaciones complejas (cadera en el niño o adulto siempre requiere drenaje quirúrgico abierto inmediato). En articulaciones de fácil acceso como la rodilla pueden realizarse punciones evacuadoras diarias con aguja gruesa si la evolución es favorable.',
          '<strong>Infección de Prótesis Articular:</strong> Se clasifica en precoz (< 3 meses postoperatorio), tardía (3 a 24 meses) y hematógena aguda. El pilar es el recambio protésico en 1 o 2 tiempos o desbridamiento con retención del implante (DAIR) en infecciones agudas (< 3 semanas de síntomas con implante estable). En infecciones por estafilococo sobre prótesis es mandatorio asociar <strong>Rifampicina (300-450 mg oral cada 12 horas)</strong> una vez controlado el inóculo, por su capacidad de penetrar y erradicar el biofilm bacteriano.'
        ]
      },
      {
        subhead: '5. Diagnóstico Diferencial y Errores Críticos EUNACOM',
        paragraphs: [
          'Es vital no confundir la artritis séptica con la bursitis prepatelar u olecraneana: en la bursitis el dolor y el aumento de volumen son extracapsulares, y la movilidad pasiva intraarticular está conservada o mucho menos dolorosa.',
          'No administrar corticoides intraarticulares ni orales ante sospecha de artritis séptica. Nunca demorar el drenaje confiando únicamente en la respuesta a antibióticos; la persistencia de pus a tensión destruye los condrocitos y produce anquilosis articular irreversible.'
        ]
      }
    ],
    table: {
      title: 'Esquemas Antimicrobianos Empíricos en Artritis Séptica',
      headers: ['Escenario Clínico', 'Microorganismo Sospechoso', 'Esquema Empírico de Elección', 'Alternativa / Alergia', 'Duración Total'],
      rows: [
        ['Adulto sano sin factores de riesgo', 'S. aureus sensible (SASM), Streptococcus', 'Cefazolina 2 g c/8h EV o Cloxacilina 2 g c/4h EV', 'Vancomicina 15-20 mg/kg c/12h EV', '3 – 4 semanas'],
        ['Riesgo SAMR / Catéter / UCI', 'SAMR (meticilino resistente)', 'Vancomicina 15-20 mg/kg c/12h EV', 'Daptomicina 8-10 mg/kg/día EV', '4 semanas'],
        ['Adulto joven activo sexualmente', 'Neisseria gonorrhoeae', 'Ceftriaxona 1-2 g c/24h EV + Azitromicina 1g VO', 'Ciprofloxacino (si sensible) o Espectinomicina', '7 – 10 días'],
        ['Anciano frágil / ITU / Drogas EV', 'Bacilos Gram (-) entéricos, Pseudomonas', 'Ceftriaxona 2 g c/24h EV + Cefazolina (o Cefepime 2g c/8h)', 'Meropenem 1 g c/8h EV', '4 – 6 semanas'],
        ['Prótesis articular con biofilm', 'S. aureus, S. epidermidis', 'Esquema anti-estafilocócico + Rifampicina 300mg c/12h VO', 'Linezolid 600 mg c/12h VO', '3 – 6 meses']
      ]
    },
    severityTable: {
      title: 'Clasificación de Infección en Prótesis Articular y Conducta Quirúrgica',
      headers: ['Tipo de Infección', 'Tiempo desde Cirugía', 'Patógenos Frecuentes', 'Estrategia Quirúrgica', 'Terapia Adyuvante'],
      rows: [
        ['Aguda Precoz', '< 3 meses postoperatorio', 'S. aureus, Bacilos Gram (-)', 'DAIR (Desbridamiento + cambio de polietileno)', 'Antibióticos EV + Rifampicina x 3 meses'],
        ['Crónica Tardía', '> 3 meses a 24 meses', 'S. epidermidis (biofilm), Cutibacterium', 'Recambio protésico en 2 tiempos (espaciador)', 'Antibióticos dirigidos + nuevo implante'],
        ['Hematógena Aguda', 'Cualquier tiempo (<3 sem síntomas)', 'S. aureus, Streptococcus spp.', 'DAIR si prótesis fija y síntomas < 3 semanas', 'Antibióticos EV + Rifampicina']
      ]
    },
    treatmentTable: {
      title: 'Protocolo de Rescate y Seguimiento en Artritis Séptica Nativa',
      headers: ['Fase del Tratamiento', 'Objetivo Terapéutico', 'Intervención Clínica / Farmacológica', 'Criterio de Éxito / Ajuste'],
      rows: [
        ['Día 0 (Urgencia)', 'Control de fuente y descompresión', 'Artroscopía/artrotomía de lavado + Cefazolina 2g EV', 'Cese de dolor a tensión y descompresión capsular'],
        ['Día 2 – 3', 'Ajuste microbiológico', 'Ajuste a antibiograma específico; evaluar necesidad de re-lavado', 'Cultivos sinoviales negativos a las 48-72 horas'],
        ['Semana 2', 'Transición a vía oral', 'Cefadroxilo 1g c/12h o Ciprofloxacino/Levofloxacino oral', 'Afebril, mejoría funcional marcada, PCR en caída > 50%'],
        ['Semana 3 – 4', 'Rehabilitación y alta', 'Kinesioterapia pasiva asistida precoz para evitar rigidez', 'Rango articular conservado, PCR normalizada']
      ]
    },
    vignette: 'Mujer de 72 años con antecedente de artritis reumatoide en tratamiento con metotrexato y prednisona 5 mg/día. Consulta por fiebre de 38.8 °C y dolor progresivo e invalidante en la rodilla izquierda de 36 horas de evolución. Al examen físico se observa rodilla intensamente tumefacta, caliente, eritematosa y con flexión bloqueada por dolor agudo. La artrocentesis extrae 45 mL de líquido lechoso y turbio; el recuento arroja 110.000 leucocitos/mm³ con 94% de neutrófilos, y la tinción de Gram evidencia abundantes cocos grampositivos en racimos.',
    explicacion: 'El cuadro corresponde a una artritis séptica bacteriana por Staphylococcus aureus en una paciente de alto riesgo (anciana con artritis reumatoide e inmunosupresión crónica). El manejo indispensable e inmediato consiste en hospitalización, toma de hemocultivos, inicio de antibioterapia endovenosa bactericida antiestafilocócica (Cefazolina o Vancomicina si hay sospecha de SAMR) y descompresión/lavado articular urgente mediante artroscopía o artrotomía. El retraso del drenaje quirúrgico destruye el cartílago articular y genera sepsis sistémica.',
    keyPoints: [
      'Staphylococcus aureus es el microorganismo más frecuente (> 60%) en la artritis séptica del adulto.',
      'Neisseria gonorrhoeae debe sospecharse en adultos jóvenes con síndrome artritis-dermatitis y tenosinovitis migratoria.',
      'El drenaje articular (artroscopía, artrotomía o punciones evacuadoras repetidas) es tan vital como los antibióticos endovenosos.',
      'El esquema empírico inicial habitual es Cefazolina 2 g c/8h EV (o Cloxacilina 2 g c/4h EV); agregar Vancomicina ante riesgo de SAMR.',
      'En artritis gonocócica el tratamiento de elección es Ceftriaxona 1-2 g EV al día asociada a cobertura de Chlamydia con azitromicina.',
      'En infecciones protésicas por estafilococo, la adición de Rifampicina es obligatoria para erradicar bacterias adheridas al biofilm.',
      'Las articulaciones con daño previo (ej. artritis reumatoide) presentan mayor susceptibilidad a siembras hematógenas.',
      'La movilización articular pasiva debe iniciarse precozmente una vez controlada la infección para prevenir la anquilosis fibrosa.'
    ],
    questions: [
      {
        stem: 'Hombre de 68 años con antecedente de artroplastia total de rodilla derecha realizada hace 2 años consulta por dolor intenso y aumento de volumen en dicha rodilla de 4 días de evolución, sin fiebre medida. La artrocentesis arroja 75.000 leucocitos/mm³ con 92% de neutrófilos. El cultivo desarrolla Staphylococcus aureus sensible a meticilina. Se planifica desbridamiento quirúrgico. ¿Qué fármaco antimicrobiano es indispensable asociar al esquema antiestafilocócico por su acción erradicadora del biofilm?',
        options: [
          { id: 'A', text: 'Gentamicina' },
          { id: 'B', text: 'Rifampicina' },
          { id: 'C', text: 'Metronidazol' },
          { id: 'D', text: 'Amoxicilina con ácido clavulánico' },
          { id: 'E', text: 'Ciprofloxacino en monoterapia' }
        ],
        correcta: 'B',
        explicacion: 'En las infecciones de prótesis articulares causadas por estafilococos (S. aureus o S. epidermidis), la asociación de Rifampicina al antibiótico bactericida principal (Cefazolina o Vancomicina) es fundamental debido a su capacidad única para penetrar la matriz de polisacáridos del biofilm bacteriano y esterilizar la superficie protésica metálica.',
        recTag: 'EUNACOM 2018 · Q#05'
      },
      {
        stem: 'Mujer de 24 años, sexualmente activa, consulta por cuadro de 3 días de dolor en muñeca derecha y tobillo izquierdo, asociado a fiebre y aparición de pequeñas lesiones cutáneas papulopustulosas de centro necrótico en el dorso de los dedos. En las últimas 12 horas la rodilla derecha se torna francamente dolorosa y tumefacta. La artrocentesis de rodilla da salida a líquido turbio con 55.000 leucocitos/mm³. ¿Cuál es el agente etiológico más probable y el tratamiento de elección?',
        options: [
          { id: 'A', text: 'Staphylococcus aureus · Cloxacilina 2 g cada 4 horas EV' },
          { id: 'B', text: 'Neisseria gonorrhoeae · Ceftriaxona 1 a 2 g al día EV' },
          { id: 'C', text: 'Streptococcus pyogenes · Penicilina G sódica 4 millones UI cada 4 horas EV' },
          { id: 'D', text: 'Pseudomonas aeruginosa · Ciprofloxacino 400 mg cada 12 horas EV' },
          { id: 'E', text: 'Borrelia burgdorferi · Doxiciclina 100 mg cada 12 horas oral' }
        ],
        correcta: 'B',
        explicacion: 'El síndrome de artritis-dermatitis con tenosinovitis migratoria, lesiones pustulosas acrales y posterior mono/oligoartritis en un adulto joven con vida sexual activa es patognomónico de la infección gonocócica diseminada (Neisseria gonorrhoeae). El tratamiento de elección es Ceftriaxona 1-2 g EV al día, con excelente respuesta clínica en las primeras 48 horas.',
        recTag: 'EUNACOM 2020 · Q#19'
      },
      {
        stem: 'Hombre de 55 años, diabético tipo 2, ingresa con diagnóstico de artritis séptica de rodilla izquierda por Staphylococcus aureus meticilinosensible confirmado por Gram. Se inicia Cefazolina 2 g cada 8 horas EV. A las 48 horas de tratamiento antibiótico persiste con fiebre de 38.5 °C, dolor intenso y derrame a tensión. ¿Cuál es la conducta terapéutica indispensable que debe realizarse de inmediato?',
        options: [
          { id: 'A', text: 'Cambiar de inmediato Cefazolina por Vancomicina más Meropenem' },
          { id: 'B', text: 'Drenaje y lavado articular urgente mediante artroscopía o artrotomía' },
          { id: 'C', text: 'Agregar Dexametasona 4 mg EV cada 8 horas para reducir la inflamación' },
          { id: 'D', text: 'Inmovilizar con yeso muslopedio y diferir nuevas intervenciones por 7 días' },
          { id: 'E', text: 'Suspender antibióticos y repetir hemocultivos' }
        ],
        correcta: 'B',
        explicacion: 'La artritis séptica es una infección de cavidad cerrada. Si el paciente no experimenta mejoría franca o persiste con derrame purulento a tensión pese a antibióticos apropiados, la conducta mandataria es el drenaje y lavado articular quirúrgico (artroscopía o artrotomía) para eliminar detritos bacterianos, citoquinas y enzimas destructivas. Los antibióticos no sustituyen al vaciamiento articular.',
        recTag: 'EUNACOM 2021 · Q#38'
      },
      {
        stem: '¿Cuál de las siguientes afirmaciones respecto al diagnóstico microbiológico de la artritis séptica es CORRECTA?',
        options: [
          { id: 'A', text: 'La tinción de Gram del líquido sinovial descarta artritis séptica si resulta negativa' },
          { id: 'B', text: 'La tinción de Gram es positiva en más del 95% de los casos de artritis gonocócica' },
          { id: 'C', text: 'Los hemocultivos son positivos en aproximadamente el 50% de las artritis sépticas no gonocócicas' },
          { id: 'D', text: 'El cultivo de líquido sinovial requiere siempre toma de muestra bajo anestesia general' },
          { id: 'E', text: 'El recuento celular del líquido sinovial nunca supera los 20.000 leucocitos en ancianos' }
        ],
        correcta: 'C',
        explicacion: 'En la artritis séptica no gonocócica (principalmente estafilocócica), la vía de diseminación es habitualmente hematógena, y los hemocultivos resultan positivos en cerca del 50% de los casos, siendo una herramienta de apoyo diagnóstica obligatoria. El Gram solo detecta el 50-70% de los grampositivos y menos del 25% de los gonococos, por lo que un Gram negativo jamás descarta infección.',
        recTag: 'EUNACOM 2023 · Q#14'
      }
    ]
  },

  {
    id: 'reuma-03', classId: 'reuma-03', tier: 3,
    blockNum: 1, blockName: 'Artritis Inflamatorias, Cristales y Diagnóstico Articular',
    topicLabel: '9.3',
    title: 'Artritis por Microcristales: Gota vs Condrocalcinosis (Pseudogota)',
    perfilCode: '1.05.1.001', dx: 'Específico', tx: 'Inicial', seg: 'Completo',
    ges: 'Sin garantía GES específica · Manejo ambulatorio en APS y policlínico de medicina interna',
    reconstrucciones: 'EUNACOM 2017 Q#45 · EUNACOM 2019 Q#18 · EUNACOM 2021 Q#22 · EUNACOM 2024 Q#09',
    frecuencia: 'Muy Alta · Diagnóstico y farmacoterapia intensamente evaluados en EUNACOM',
    svg: null, algoTitle: 'Enfrentamiento y Manejo Escalonado de la Artritis Gotosa: Crisis Aguda vs Hipouricemiantes',
    diagram: flow('Algoritmo de Gota y Pseudogota', [
      { k: 'box', t: 'Sospecha de Artritis Microcristalina (Monoartritis Aguda Intensa)', s: 'Podagra (1ra MTC) en Gota · Rodilla o muñeca en Condrocalcinosis · Descartar infección', type: 'acc' },
      { k: 'split', q: 'Microscopía de Luz Polarizada Compensada', s: 'Identificación morfológica y birrefringencia diagnóstica',
        ll: 'Forma de Aguja · Birrefringencia Negativa Intensa',
        left: { t: 'Gota (Urato Monosódico)', s: 'Amarillos paralelos al eje del compensador · Asociación a hiperuricemia y tofos', type: 'crit' },
        rl: 'Forma Romboidea · Birrefringencia Positiva Débil',
        right: { t: 'Condrocalcinosis (Pirofosfato de Calcio)', s: 'Azules paralelos al compensador · Calcificación meniscal en radiografía', type: 'dec' }
      },
      { k: 'split', q: 'Fase de Manejo en Artritis Gotosa', s: 'Separación temporal estricta de las estrategias terapéuticas',
        ll: 'Ataque Agudo Inflamatorio',
        left: { t: 'Fase Aguda: Antiinflamatorios', s: 'AINEs plenos o Colchicina (1 mg + 0.5 mg) o Corticoides VO · NUNCA iniciar Alopurinol', type: 'warn' },
        rl: 'Fase Intercrítica / Profilaxis',
        right: { t: 'Fase Crónica: Hipouricemiantes', s: 'Iniciar Alopurinol 100 mg/d a las 2-4 semanas post-crisis + Colchicina profiláctica', type: 'acc' }
      },
      { k: 'box', t: 'Metas Terapéuticas de Ácido Úrico Plasmático', s: 'Meta general < 6.0 mg/dL · Meta en gota tofácea severa < 5.0 mg/dL para disolución', type: 'acc' }
    ]),
    contexto: 'Las artritis microcristalinas son las artropatías inflamatorias más comunes en hombres adultos mayores de 40 años. El EUNACOM pone a prueba de forma reiterada dos conceptos críticos: la identificación óptica de los cristales (aguja/birrefringencia negativa vs romboide/positiva) y la regla de oro terapéutica que prohíbe iniciar o modificar dosis de alopurinol durante una crisis aguda.',
    contentSections: [
      {
        subhead: '1. Fisiopatología, Factores Desencadenantes y Metabolismo del Ácido Úrico',
        paragraphs: [
          'La <strong>gota</strong> se produce por el depósito intra y periarticular de cristales de <strong>urato monosódico (UMS)</strong> como consecuencia de una hiperuricemia crónica persistente (ácido úrico sérico > 6.8 mg/dL, punto de saturación fisicoquímica a 37 °C).',
          'El 90% de los pacientes presenta hipoexcreción renal de ácido úrico, mientras que solo el 10% corresponde a sobreproducción (déficit enzimático, lisis tumoral, psoriasis severa).',
          '<strong>Factores desencadenantes de crisis aguda:</strong> Ingesta de alcohol (especialmente cerveza por su contenido en purinas y guanosina, y destilados que aumentan el lactato y compiten por la excreción renal de urato), comidas copiosas ricas en purinas (carnes rojas, vísceras, mariscos), deshidratación aguda, traumatismos locales, inicio o cambio brusco de diuréticos (tiazidas, furosemida) y fluctuaciones bruscas de la uricemia tras iniciar fármacos hipouricemiantes.',
          'La <strong>condrocalcinosis o pseudogota</strong> se debe al depósito de cristales de <strong>pirofosfato de calcio dihidratado (CPPD)</strong> en el cartílago articular y fibrocartílago. Es más prevalente en ancianos (> 65 años) y puede ser idiopática o asociarse a hemocromatosis, hiperparatiroidismo primario, hipomagnesemia o hipofosfatasia.'
        ]
      },
      {
        subhead: '2. Cuadro Clínico Comparativo: Podagra vs Pseudogota',
        paragraphs: [
          '<strong>Gota Aguda:</strong> Inicio nocturno hiperagudo, alcanzando intensidad máxima en menos de 12 a 24 horas. Dolor exquisito que no tolera el roce de las sábanas, tumefacción violácea y calor local. La localización clásica en el 50-70% del primer ataque es la primera articulación metatarsofalángica (<strong>podagra</strong>), seguida por dorso del pie, tobillo y rodilla.',
          '<strong>Gota Tofácea Crónica:</strong> Aparición de tofos (acúmulos nodulares indoloros o dolorosos de cristales de urato rodeados de reacción granulomatosa de cuerpo extraño) en hélix auricular, bolsas olecraneanas, tendón de Aquiles y dedos. En radiografía se observan <strong>erosiones periarticulares en sacabocado con bordes escleróticos colgantes (signo de Martel)</strong> sin osteopenia periarticular.',
          '<strong>Pseudogota:</strong> Afecta típicamente a grandes articulaciones, predominantemente la <strong>rodilla (50%)</strong>, muñecas y hombros. En la radiografía simple se evidencia calcificación lineal o punteada del fibrocartílago (meniscos de la rodilla, ligamento triangular del carpo, sínfisis púbica).'
        ]
      },
      {
        subhead: '3. Estudio de Laboratorio y Análisis de Cristales con Luz Polarizada',
        paragraphs: [
          'El <strong>diagnóstico de certeza absoluto</strong> exige la identificación de cristales fagocitados por neutrófilos en el líquido sinovial mediante microscopio óptico con filtro de luz polarizada y compensador rojo de primer orden:',
          '• <strong>Cristales de Gota (Urato Monosódico):</strong> Forma alargada de aguja con extremos puntiagudos, intracelulares, con <strong>birrefringencia intensamente negativa</strong>. Al alinearse paralelos al eje del compensador se ven de color <strong>AMARILLO</strong>; perpendiculares se ven AZULES.',
          '• <strong>Cristales de Pseudogota (CPPD):</strong> Forma romboidal, rectangular o poliédrica, con <strong>birrefringencia débilmente POSITIVA</strong>. Al alinearse paralelos al eje del compensador se ven de color <strong>AZUL</strong>; perpendiculares se ven AMARILLOS.',
          '<em>Trampa EUNACOM:</em> Hasta un 30-40% de los pacientes en plena crisis gotosa aguda pueden presentar niveles de ácido úrico normales o incluso bajos debido a la excreción urinaria facilitada por el estado inflamatorio y citoquinas (IL-6). Un ácido úrico normal NO descarta gota aguda.'
        ]
      },
      {
        subhead: '4. Farmacoterapia del Ataque Agudo de Gota (Regla de Oro)',
        paragraphs: [
          'El objetivo en la fase aguda es exclusivamente <strong>suprimir la inflamación y aliviar el dolor</strong>. Opciones de primera línea según comorbilidades:',
          '1. <strong>AINEs a dosis plenas:</strong> Naproxeno 500 mg c/12h o Ibuprofeno 600-800 mg c/8h o Indometacina 50 mg c/8h. Primera elección en adultos jóvenes sin patología gástrica ni renal.',
          '2. <strong>Colchicina:</strong> Esquema moderno de dosis bajas: <strong>1 mg de inicio, seguido de 0.5 mg a la hora</strong> (máximo 1.5 mg en el día 1; luego 0.5 mg 1 o 2 veces al día). Es altamente efectiva si se administra en las primeras 24 horas del inicio de los síntomas. Los esquemas antiguos con dosis horarias repetidas están proscritos por toxicidad gastrointestinal severa (diarrea profusa).',
          '3. <strong>Corticoides Sistémicos:</strong> Prednisona 30 a 35 mg/día vía oral por 5 días (o pauta descendente en 7-10 días). Fármaco de <strong>primera elección en pacientes con insuficiencia renal crónica, úlcera péptica activa o anticoagulación</strong>.',
          '<strong>REGLA DE ORO MANDATORIA EUNACOM:</strong> Durante el ataque agudo de gota <strong>NUNCA se debe iniciar Alopurinol</strong> ni ningún otro fármaco reductor de urato. Una caída brusca de la uricemia disuelve parcialmente los tofos y promueve la precipitación de nuevos cristales, perpetuando y agravando la sinovitis. Si el paciente ya venía tomando alopurinol previamente de forma crónica, se debe MANTENER a la misma dosis sin modificarla.'
        ]
      },
      {
        subhead: '5. Tratamiento Hipouricemiante a Largo Plazo y Prevención de Recidivas',
        paragraphs: [
          'El tratamiento reductor de urato está indicado ante: ≥ 2 crisis al año, presencia de tofos clínicos o radiológicos, daño articular erosivo, urolitiasis o insuficiencia renal crónica estadio ≥ 2.',
          '<strong>Momento de inicio:</strong> Se inicia <strong>2 a 4 semanas después de la resolución completa de la crisis aguda</strong>.',
          '• <strong>Alopurinol:</strong> Inhibidor de la xantina oxidasa. Se inicia a dosis bajas: <strong>100 mg/día vía oral</strong> (50 mg/día en ERC avanzada) y se titula mensualmente de 100 en 100 mg hasta alcanzar la meta de uricemia (máximo 800-900 mg/día). Fármaco de primera línea.',
          '• <strong>Febuxostat:</strong> Inhibidor selectivo potente de xantina oxidasa (40-80 mg/día), de elección si hay intolerancia, alergia o ineficacia de alopurinol; no requiere ajuste por función renal leve-moderada.',
          '<strong>Profilaxis de Crisis al Iniciar Hipouricemiantes:</strong> Todo inicio o titulación de alopurinol debe acompañarse de <strong>Colchicina 0.5 mg/día oral en dosis baja por 3 a 6 meses</strong> continuos, para prevenir los brotes reactivos de movilización de cristales.',
          '<strong>Metas de Ácido Úrico:</strong> < 6.0 mg/dL en todo paciente gotoso; meta < 5.0 mg/dL en pacientes con tofos palpables para acelerar su reabsorción.'
        ]
      }
    ],
    table: {
      title: 'Diferencias Críticas entre Gota y Condrocalcinosis (Pseudogota)',
      headers: ['Característica', 'Gota (Urato Monosódico)', 'Condrocalcinosis / Pseudogota (CPPD)'],
      rows: [
        ['Cristal responsable', 'Urato monosódico monohidratado (UMS)', 'Pirofosfato de calcio dihidratado (CPPD)'],
        ['Morfología microscópica', 'Forma de aguja fina, bordes afilados', 'Forma romboidal, rectangular o poligonal'],
        ['Birrefringencia (luz polarizada)', 'Negativa INTENSA (Amarillo paralelo)', 'Positiva DÉBIL (Azul paralelo)'],
        ['Articulación más frecuente', '1ra Metatarsofalángica (Podagra > 50%)', 'Rodilla (> 50%), muñeca, sínfisis púbica'],
        ['Signos radiológicos típicos', 'Erosiones en sacabocado con borde colgante (Martel)', 'Calcificación lineal de meniscos y cartílago hialino'],
        ['Asociaciones etiológicas', 'Síndrome metabólico, alcohol, carnes, diuréticos', 'Hemocromatosis, hiperparatiroidismo, hipomagnesemia'],
        ['Manejo de crisis aguda', 'Colchicina 1+0.5mg, AINEs o Prednisona', 'AINEs, corticoides intraarticulares o sistémicos'],
        ['Terapia hipouricemiante crónica', 'Alopurinol (titulado) + Colchicina profilaxis', 'No aplica terapia de disolución; AINEs si recidivas']
      ]
    },
    severityTable: {
      title: 'Estratificación Terapéutica en Crisis Gotosa según Comorbilidades',
      headers: ['Perfil del Paciente', 'Fármaco de Elección en Crisis', 'Fármacos Contraindicados', 'Justificación Clínica'],
      rows: [
        ['Joven sin daño renal ni digestivo', 'Naproxeno 500mg c/12h o Colchicina 1.5mg/d', 'Alopurinol nuevo', 'Respuesta antiinflamatoria rápida sin toxicidad'],
        ['Insuficiencia renal crónica (VFG < 50)', 'Prednisona 30-35 mg/día VO x 5 días', 'AINEs, Colchicina a dosis plenas', 'AINEs precipitan falla renal aguda; colchicina se acumula'],
        ['Úlcera péptica activa o anticoagulado', 'Corticoides orales o intraarticulares', 'AINEs tradicionales', 'Riesgo inminente de hemorragia digestiva masiva'],
        ['Gota tofácea crónica con daño óseo', 'Alopurinol iniciado a las 3 semanas de crisis', 'Iniciar alopurinol durante el ataque', 'Riesgo de perpetuar crisis por lisis rápida de cristales']
      ]
    },
    treatmentTable: {
      title: 'Esquema de Titulación y Metas de Alopurinol en Gota Crónica',
      headers: ['Paso Terapéutico', 'Dosificación y Fármaco', 'Coadyuvante Obligatorio', 'Meta Terapéutica'],
      rows: [
        ['Paso 1: Post-crisis (Semana 2-4)', 'Alopurinol 100 mg/día oral (50 mg en ERC)', 'Colchicina 0.5 mg/día oral continua', 'Evitar brotes reactivos'],
        ['Paso 2: Control a las 4 semanas', 'Aumentar a 200 mg/día si urato > 6.0', 'Mantener colchicina profiláctica', 'Descenso progresivo y seguro'],
        ['Paso 3: Titulación final', 'Aumentar a 300 mg/día (máximo 800 mg/d)', 'Mantener colchicina por 3 a 6 meses', 'Uricemia < 6.0 mg/dL (< 5.0 si tofos)'],
        ['Paso 4: Mantenimiento anual', 'Dosis fija que mantenga la meta de ácido úrico', 'Retirar colchicina profiláctica a los 6 meses', 'Ausencia de crisis y reabsorción tofácea']
      ]
    },
    vignette: 'Hombre de 52 años, hipertenso en tratamiento con hidroclorotiazida, asiste a un asado familiar con abundante consumo de carne vacuna y cerveza. A las 4:00 AM despierta súbitamente por dolor lancinante e insoportable en el primer ortejo del pie derecho, que le impide tolerar el roce de las sábanas. Al examen se observa la 1ra articulación metatarsofalángica tumefacta, violácea, caliente y exquisitamente dolorosa al tacto. Se realiza artrocentesis que evidencia cristales aciculares intra y extracelulares con intensa birrefringencia negativa. El ácido úrico plasmático resulta en 5.8 mg/dL.',
    explicacion: 'El paciente presenta una podagra aguda clásica (artritis gotosa) precipitada por alcohol, purinas y tiazidas. Los cristales con forma de aguja y birrefringencia negativa confirman el diagnóstico de certeza. Es típico que durante el ataque agudo el ácido úrico esté falsamente normal. El manejo de elección inmediato es el control de la inflamación con AINEs o Colchicina en pauta moderna (1 mg de inicio + 0.5 mg a la hora). Está estrictamente contraindicado iniciar Alopurinol en este momento.',
    keyPoints: [
      'Gota: Cristales de urato monosódico en aguja con birrefringencia intensamente NEGATIVA (amarillos paralelos).',
      'Pseudogota / Condrocalcinosis: Cristales de pirofosfato de calcio romboidales con birrefringencia débilmente POSITIVA (azules paralelos).',
      'El ácido úrico sérico puede ser normal o bajo durante la crisis gotosa aguda (hasta en un 30-40% de los casos).',
      'REGLA DE ORO: Durante la crisis aguda NUNCA se debe iniciar Alopurinol ni modificar su dosis si ya venía tomándolo.',
      'El tratamiento de la crisis gotosa se realiza con AINEs plenos, Colchicina (1 mg + 0.5 mg) o Prednisona (de elección en ERC/úlcera).',
      'El Alopurinol se inicia 2 a 4 semanas después de resuelta la crisis, a dosis baja (100 mg/d) y titulando cada 4 semanas.',
      'Al iniciar Alopurinol es mandatorio asociar Colchicina 0.5 mg/día por 3 a 6 meses como profilaxis de crisis por movilización.',
      'La meta de ácido úrico plasmático es < 6.0 mg/dL (< 5.0 mg/dL en presencia de tofos).'
    ],
    questions: [
      {
        stem: 'Hombre de 48 años con antecedentes de hipertensión arterial consulta por dolor de inicio nocturno, tumefacción y eritema intenso en la primera articulación metatarsofalángica izquierda (podagra). La artrocentesis confirma cristales de urato monosódico en aguja con birrefringencia negativa. La creatinina es 0.9 mg/dL y no tiene antecedentes de úlcera. ¿Cuál es el tratamiento más adecuado en este momento?',
        options: [
          { id: 'A', text: 'Iniciar Alopurinol 300 mg al día de inmediato' },
          { id: 'B', text: 'Indicar Naproxeno 500 mg cada 12 horas o Colchicina oral en pauta baja' },
          { id: 'C', text: 'Administrar Febuxostat 80 mg al día más diuréticos de asa' },
          { id: 'D', text: 'Infiltración con corticoide y Alopurinol 100 mg al día' },
          { id: 'E', text: 'Prescribir antibióticos orales profilácticos y reposo con calor local' }
        ],
        correcta: 'B',
        explicacion: 'En la crisis gotosa aguda el objetivo es controlar el dolor y la inflamación mediante AINEs a dosis plenas (ej. Naproxeno 500 mg c/12h) o Colchicina (1 mg de inicio seguido de 0.5 mg una hora después). El Alopurinol no debe iniciarse durante el ataque agudo bajo ninguna circunstancia, ya que la fluctuación brusca del ácido úrico empeora y prolonga la artritis.',
        recTag: 'EUNACOM 2017 · Q#45'
      },
      {
        stem: 'Hombre de 60 años con diagnóstico de gota tofácea crónica y antecedentes de tres crisis agudas en el último año consulta 3 semanas después de recuperarse totalmente de su último ataque. Su ácido úrico actual es de 8.9 mg/dL. ¿Cuál es la conducta terapéutica indicada para la prevención a largo plazo?',
        options: [
          { id: 'A', text: 'Mantener reposo y régimen vegetariano exclusivo sin fármacos' },
          { id: 'B', text: 'Iniciar Alopurinol 100 mg al día asociado a Colchicina 0.5 mg al día por 6 meses' },
          { id: 'C', text: 'Indicar Prednisona 20 mg al día de mantención continua' },
          { id: 'D', text: 'Prescribir Indometacina 25 mg tres veces al día de por vida' },
          { id: 'E', text: 'Iniciar Alopurinol 600 mg al día en dosis única sin coadyuvantes' }
        ],
        correcta: 'B',
        explicacion: 'En un paciente con gota tofácea y crisis recurrentes, fuera del período agudo (a las 2-4 semanas), está indicado iniciar terapia hipouricemiante con Alopurinol a dosis baja (100 mg/día) con titulación progresiva hasta lograr ácido úrico < 6.0 mg/dL (o < 5.0 con tofos). Es indispensable asociar profilaxis de crisis con Colchicina 0.5 mg/día durante los primeros 3 a 6 meses de tratamiento.',
        recTag: 'EUNACOM 2019 · Q#18'
      },
      {
        stem: 'Mujer de 78 años consulta por dolor e inflamación en rodilla derecha de 24 horas. La radiografía muestra una fina línea radiopaca paralela al cartílago de los meniscos femorotibiales (condrocalcinosis). El análisis del líquido articular bajo luz polarizada muestra cristales romboidales con birrefringencia positiva débil. ¿Cuál es el compuesto mineral de estos cristales?',
        options: [
          { id: 'A', text: 'Urato monosódico' },
          { id: 'B', text: 'Pirofosfato de calcio dihidratado' },
          { id: 'C', text: 'Oxalato de calcio' },
          { id: 'D', text: 'Hidroxiapatita de calcio' },
          { id: 'E', text: 'Colesterol y fosfolípidos' }
        ],
        correcta: 'B',
        explicacion: 'Los cristales romboidales con birrefringencia positiva débil (azules paralelos al polarizador) asociados a calcificación meniscal (condrocalcinosis radiológica) corresponden al depósito de pirofosfato de calcio dihidratado (CPPD), cuadro responsable de la pseudogota. El urato monosódico tiene forma de aguja y birrefringencia intensamente negativa.',
        recTag: 'EUNACOM 2021 · Q#22'
      },
      {
        stem: 'Hombre de 56 años con insuficiencia renal crónica (VFG 28 mL/min) y antecedente de hemorragia digestiva alta por úlcera gástrica hace 6 meses presenta una crisis aguda de gota en el tobillo derecho. ¿Cuál es el tratamiento antiinflamatorio de elección para el manejo de esta crisis aguda?',
        options: [
          { id: 'A', text: 'Ketoprofeno 200 mg al día EV' },
          { id: 'B', text: 'Colchicina 1 mg cada 2 horas hasta diarrea' },
          { id: 'C', text: 'Prednisona 30 a 35 mg al día vía oral por 5 días' },
          { id: 'D', text: 'Alopurinol 300 mg al día' },
          { id: 'E', text: 'Celecoxib 400 mg al día oral' }
        ],
        correcta: 'C',
        explicacion: 'En pacientes con insuficiencia renal moderada-severa o alto riesgo de sangrado digestivo, los AINEs tradicionales e inhibidores de COX-2 están absolutamente contraindicados, y la colchicina tiene riesgo elevado de acumulación y toxicidad sistémica. El fármaco de primera línea para resolver la crisis en este escenario son los corticoides orales (Prednisona 30-35 mg/día por 5 días) o una infiltración intraarticular con corticoides.',
        recTag: 'EUNACOM 2024 · Q#09'
      }
    ]
  },

  {
    id: 'reuma-04', classId: 'reuma-04', tier: 2,
    blockNum: 1, blockName: 'Artritis Inflamatorias, Cristales y Diagnóstico Articular',
    topicLabel: '9.4',
    title: 'Artrosis / Osteoartritis: Diagnóstico Clínico, Radiología y Terapia Escalonada',
    perfilCode: '1.08.1.001', dx: 'Específico', tx: 'Inicial', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES): Tratamiento Médico en Personas de 55 Años y Más con Artrosis de Cadera y/o Rodilla Leve o Moderada · Endoprótesis de Cadera en Personas de 65 Años y Más con Artrosis Severa',
    reconstrucciones: 'EUNACOM 2018 Q#40 · EUNACOM 2020 Q#12 · EUNACOM 2022 Q#35 · EUNACOM 2023 Q#48',
    frecuencia: 'Muy Alta · Causa más común de consulta reumatológica ambulatoria y patología GES',
    svg: null, algoTitle: 'Algoritmo Diagnóstico y Escalonamiento Terapéutico en Artrosis (GES)',
    diagram: flow('Algoritmo de Artrosis / Osteoartritis', [
      { k: 'box', t: 'Dolor Articular de Tipo Mecánico (Empeora con el Uso, Alivia en Reposo)', s: 'Rigidez matinal breve (< 30 min) · Crepitaciones óseas · Mayores de 50 años', type: 'acc' },
      { k: 'box', t: 'Estudio Radiológico Simple: Los 4 Signos Cardinales', s: '1) Pinzamiento asimétrico · 2) Esclerosis subcondral · 3) Osteofitos marginales · 4) Geodas', type: 'warn' },
      { k: 'split', q: 'Estratificación de Severidad y Respuesta Terapéutica', s: 'Alineación con Guía Clínica GES Chilena',
        ll: 'Artrosis Leve a Moderada (Manejo APS)',
        left: { t: 'Tratamiento Conservador Multimodal', s: 'Baja de peso + Ejercicio/Kinesiología + Paracetamol / AINEs tópicos o ciclos orales', type: 'dec' },
        rl: 'Artrosis Severa / Falla Médica',
        right: { t: 'Evaluación Quirúrgica Traumatológica', s: 'Dolor intratable o limitación severa · Endoprótesis total de cadera o rodilla GES', type: 'crit' }
      },
      { k: 'box', t: 'Localizaciones Típicas en Mano', s: 'Nódulos de Heberden (IFD) · Nódulos de Bouchard (IFP) · Rizartrosis del pulgar (1ra CMC)', type: 'acc' }
    ]),
    contexto: 'La artrosis u osteoartritis es la enfermedad articular más prevalente en el mundo y una de las principales causas de discapacidad en adultos mayores en Chile. Es una patología GES garantizada en mayores de 55 años para manejo médico y en mayores de 65 años para reemplazo protésico de cadera. El EUNACOM exige diferenciar su dolor mecánico de los dolores inflamatorios y dominar los hallazgos radiológicos clásicos.',
    contentSections: [
      {
        subhead: '1. Concepto, Fisiopatología y Factores de Riesgo',
        paragraphs: [
          'La artrosis no es un simple proceso de desgaste senil pasivo, sino una enfermedad activa que compromete la <strong>totalidad de la articulación</strong>: pérdida progresiva del cartílago articular hialino, remodelación y esclerosis del hueso subcondral, formación de osteofitos marginales y sinovitis de bajo grado secundaria a detritos cartilaginosos.',
          'Factores de riesgo principales: Edad avanzada (principal factor), sexo femenino (mayor prevalencia tras la menopausia), obesidad (factor mecánico y metabólico adipocitoquinario crucial en rodilla y cadera), sobrecarga articular mecánica ocupacional o deportiva, traumatismos previos y alineación articular anómala (genu varo/valgo).'
        ]
      },
      {
        subhead: '2. Cuadro Clínico y Localizaciones Anatómicas Típicas',
        paragraphs: [
          'El síntoma guía es el <strong>dolor de características mecánicas</strong>: aparece o se intensifica con el movimiento, la carga y la deambulación, y cede típicamente con el reposo. A medida que avanza la enfermedad puede aparecer dolor nocturno o en reposo.',
          'La <strong>rigidez matinal o tras períodos de inactividad es breve</strong>, durando típicamente <strong>menos de 15 a 30 minutos</strong> (a diferencia de la artritis reumatoide, donde supera los 45-60 minutos).',
          'Al examen físico se aprecian crepitaciones palpables o audibles al movilizar la articulación, aumento de volumen de consistencia dura u ósea, dolor en la interlínea articular y limitación del rango articular activo y pasivo.',
          '<strong>Patrones anatómicos clásicos:</strong>',
          '• Manos: <strong>Nódulos de Heberden</strong> en articulaciones interfalángicas distales (IFD); <strong>Nódulos de Bouchard</strong> en interfalángicas proximales (IFP); y <strong>Rizartrosis</strong> en la primera articulación carpometacarpiana (base del pulgar). <em>Nota EUNACOM:</em> Las articulaciones metacarpofalángicas (MCF) y muñecas son respetadas por la artrosis típica (su afectación orienta a artritis reumatoide o hemocromatosis).',
          '• Grandes articulaciones de carga: Rodilla (gonartrosis, frecuentemente femorotibial medial con deformidad en genu varo) y Cadera (coxartrosis, con dolor inguinal que irradia a cara anterior de muslo y rodilla).'
        ]
      },
      {
        subhead: '3. Diagnóstico Radiológico y Manejo Terapéutico Escalonado GES',
        paragraphs: [
          'El diagnóstico es eminentemente clínico-radiológico. La radiografía simple en carga (bipedestación para rodillas y pelvis anteroposterior para cadera) revela los <strong>cuatro signos cardinales patognomónicos</strong>: 1) Pinzamiento asimétrico del espacio articular; 2) Esclerosis ósea subcondral (hueso eburnado reactivo); 3) Osteofitos marginales (proliferación fibrocartilaginosa calcificada); y 4) Geodas o quistes subcondrales.',
          '<strong>Manejo Escalonado según Guía Clínica GES:</strong>',
          '• <strong>Medidas No Farmacológicas (Pilar Fundamental):</strong> Educación del paciente, reducción de peso corporal (disminuye exponencialmente la carga intraarticular), kinesioterapia con fortalecimiento del cuádriceps en gonartrosis, uso de bastón en la mano contralateral para descargar cadera/rodilla, y calzado amortiguador.',
          '• <strong>Farmacoterapia de Primera Línea:</strong> Paracetamol (hasta 1 g cada 8 horas) para dolor leve a moderado. En artrosis de rodilla o manos se recomienda de inicio <strong>AINEs tópicos (diclofenaco o ketoprofeno en gel)</strong> por su eficacia comparable a los orales pero con excelente perfil de seguridad gastrointestinal y renal.',
          '• <strong>Farmacoterapia de Segunda Línea:</strong> AINEs orales (Ibuprofeno, Naproxeno o inhibidores COX-2 como Celecoxib) en las dosis mínimas eficaces y en <strong>ciclos cortos durante períodos de exacerbación</strong>, asociando siempre protección gástrica con IBP en mayores de 60 años.',
          '• <strong>Tratamiento Invasivo / Quirúrgico:</strong> Infiltración intraarticular con corticoides de depósito (triamcinolona) como rescate temporal en crisis inflamatorias con derrame articular. La <strong>endoprótesis articular total (artroplastia de cadera o rodilla)</strong> está indicada ante dolor refractario invalidante y limitación funcional severa a pesar del tratamiento médico óptimo.'
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Diferencial Clínico: Artrosis vs Artritis Reumatoide',
      headers: ['Parámetro', 'Artrosis / Osteoartritis', 'Artritis Reumatoide (AR)'],
      rows: [
        ['Naturaleza de la enfermedad', 'Degenerativa / biomecánica del cartílago', 'Autoinmune inflamatoria de membrana sinovial'],
        ['Tipo de dolor', 'Mecánico (empeora con uso, alivia en reposo)', 'Inflamatorio (peor en reposo, alivia con movimiento)'],
        ['Rigidez matinal', 'Breve (< 15 a 30 minutos)', 'Prolongada (> 45 a 60 minutos)'],
        ['Articulaciones en mano', 'IFD (Heberden), IFP (Bouchard), 1ra CMC', 'MCF, IFP, muñecas (RESPETA típicamente IFD)'],
        ['Consistencia de tumefacción', 'Dura, ósea (osteofitos)', 'Blanda, pastosa, fluctuante (sinovitis)'],
        ['Signos radiológicos', 'Pinzamiento asimétrico, osteofitos, esclerosis', 'Osteopenia periarticular, erosiones simétricas marginales'],
        ['Laboratorio sistémico', 'VHS y PCR normales, FR y Anti-CCP negativos', 'VHS y PCR elevadas, FR y Anti-CCP positivos (80%)']
      ]
    },
    vignette: 'Mujer de 64 años, obesa (IMC 32 kg/m²), consulta por dolor en ambas rodillas de 2 años de evolución, que empeora al bajar escaleras y al final de la jornada laboral, aliviando al sentarse. Refiere rigidez de rodillas al levantarse que dura unos 10 minutos. Al examen físico se palpan crepitaciones gruesas femorotibiales bilaterales y leve deformidad en varo, sin signos de calor local ni eritema. En las manos presenta nódulos duros no dolorosos en articulaciones interfalángicas distales de ambas manos.',
    explicacion: 'El cuadro es plenamente concordante con una osteoartritis (artrosis) femorotibial y de manos. El dolor mecánico que empeora con la carga (bajar escaleras), la rigidez matinal menor a 30 minutos, las crepitaciones óseas y la presencia de nódulos de Heberden en las IFD son los elementos cardinales diagnósticos. El manejo médico inicial incluye reducción de peso, kinesioterapia para fortalecimiento muscular, AINEs tópicos o paracetamol y educación GES.',
    keyPoints: [
      'El dolor de la artrosis es típicamente MECÁNICO: aumenta con el uso/deambulación y alivia en reposo.',
      'La rigidez matinal es breve: dura menos de 15 a 30 minutos.',
      'Afectación clásica en manos: Nódulos de Heberden en IFD, Nódulos de Bouchard en IFP y Rizartrosis en 1ra CMC.',
      'La artrosis típicamente RESPETA las articulaciones metacarpofalángicas (MCF) y muñecas.',
      'Los 4 signos radiológicos cardinales son: pinzamiento articular asimétrico, esclerosis subcondral, osteofitos y geodas.',
      'Tratamiento de primera línea: medidas no farmacológicas (baja de peso, kinesiología) + AINEs tópicos / Paracetamol.',
      'Los AINEs orales se reservan para períodos breves de reagudización dolorosa, minimizando riesgos digestivos y renales.'
    ],
    questions: [
      {
        stem: 'Mujer de 62 años consulta por dolor en rodilla derecha de varios meses de evolución, mayor al caminar y que cede con el reposo. Presenta rigidez matinal de 10 minutos. La radiografía de rodilla derecha en bipedestación muestra disminución asimétrica del espacio articular medial, esclerosis del hueso subcondral y osteofitos marginales. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Artritis Reumatoide activa' },
          { id: 'B', text: 'Artrosis de rodilla (Gonartrosis)' },
          { id: 'C', text: 'Necrosis avascular de cóndilo femoral' },
          { id: 'D', text: 'Artritis psoriásica mutilante' },
          { id: 'E', text: 'Bursitis anserina aislada' }
        ],
        correcta: 'B',
        explicacion: 'El dolor mecánico de esfuerzo con rigidez matinal corta (< 30 min) y los hallazgos radiológicos de pinzamiento asimétrico, esclerosis subcondral y osteofitos en una paciente de 62 años definen el diagnóstico de gonartrosis (artrosis de rodilla). La artritis reumatoide cursa con pinzamiento simétrico, osteopenia y rigidez matinal > 1 hora.',
        recTag: 'EUNACOM 2018 · Q#40'
      },
      {
        stem: 'Al examinar las manos de un paciente de 70 años con dolor articular crónico mecánico se constata aumento de volumen duro e indoloro en las articulaciones interfalángicas distales de varios dedos. ¿Cómo se denominan estos hallazgos semiológicos?',
        options: [
          { id: 'A', text: 'Nódulos de Bouchard' },
          { id: 'B', text: 'Nódulos de Heberden' },
          { id: 'C', text: 'Tofos gotosos periarticulares' },
          { id: 'D', text: 'Nódulos reumatoideos subcutáneos' },
          { id: 'E', text: 'Dactilitis en salchicha' }
        ],
        correcta: 'B',
        explicacion: 'Los nódulos de Heberden son hipertrofias osteofíticas características de la artrosis que asientan en las articulaciones interfalángicas distales (IFD). Los nódulos en las interfalángicas proximales (IFP) se denominan nódulos de Bouchard. Ambos traducen patología degenerativa osteoartrósica.',
        recTag: 'EUNACOM 2022 · Q#35'
      }
    ]
  },

  {
    id: 'reuma-05', classId: 'reuma-05', tier: 2,
    blockNum: 1, blockName: 'Artritis Inflamatorias, Cristales y Diagnóstico Articular',
    topicLabel: '9.5',
    title: 'Artritis Idiopática Juvenil (AIJ) y Enfermedad de Still del Adulto',
    perfilCode: '1.05.1.001', dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Garantía Explícita en Salud: Artritis Idiopática Juvenil (AIJ) en personas menores de 17 años · Cobertura completa',
    reconstrucciones: 'EUNACOM 2017 Q#30 · EUNACOM 2019 Q#42 · EUNACOM 2023 Q#25',
    frecuencia: 'Media · Patología GES pediátrica de alto impacto y entidad reumatológica sistémica',
    svg: null, algoTitle: 'Clasificación de AIJ y Diagnóstico de Enfermedad de Still del Adulto',
    diagram: flow('Algoritmo AIJ y Enfermedad de Still', [
      { k: 'box', t: 'Sospecha de Artritis Crónica Infantil (< 16 años, > 6 semanas)', s: 'Descartar infección, neoplasia (leucemia) y trauma · Subclasificación clínica AIJ', type: 'acc' },
      { k: 'split', q: 'Subtipos Principales de Artritis Idiopática Juvenil (AIJ GES)', s: 'Patrón de articulaciones comprometidas y marcadores',
        ll: 'AIJ Oligoarticular (≤ 4 art.)',
        left: { t: 'Niñas pequeñas (2-4 años) · ANA (+)', s: 'Riesgo Crítico: Uveítis anterior asintomática · Evaluación oftalmológica obligatoria', type: 'warn' },
        rl: 'AIJ Sistémica (Enf. de Still Juvenil)',
        right: { t: 'Fiebre en Aguja + Rash Salmón', s: 'Ferritina extrema (>1.000-5.000 ng/mL) · Riesgo de Síndrome de Activación Macrofágica', type: 'crit' }
      },
      { k: 'box', t: 'Enfermedad de Still del Adulto (Criterios de Yamaguchi)', s: 'Fiebre cotidiana vespertina > 39°C + Artritis + Exantema salmón evanescente + Leucocitosis con neutrofilia', type: 'acc' }
    ]),
    contexto: 'La Artritis Idiopática Juvenil (AIJ) es la causa más frecuente de artritis crónica en la infancia y forma parte de las patologías GES en Chile. La perla más evaluada en EUNACOM es el riesgo de ceguera silenciosa por uveítis anterior crónica en la forma oligoarticular con ANA positiva, lo que exige control protocolizado con lámpara de hendidura. En el adulto, la Enfermedad de Still destaca por su fiebre en aguja, exantema asalmonado y cifras estratosféricas de ferritina.',
    contentSections: [
      {
        subhead: '1. Definición y Clasificación de la Artritis Idiopática Juvenil (AIJ GES)',
        paragraphs: [
          'Se define como artritis persistente de causa desconocida en una o más articulaciones, que comienza <strong>antes de los 16 años</strong> y dura al menos <strong>6 semanas</strong>, tras descartar otras causas infecciosas, neoplásicas o hematológicas.',
          '<strong>Subtipos Clínicos Principales:</strong>',
          '1. <strong>AIJ Oligoarticular (Persistente o Extendida):</strong> Compromete <strong>≤ 4 articulaciones</strong> durante los primeros 6 meses. Es el subtipo más frecuente (50%). Afecta típicamente a niñas de 2 a 4 años en grandes articulaciones (rodillas, tobillos). Presenta <strong>ANA positivos en 70-80%</strong> con factor reumatoide negativo.',
          '<em>Alerta Médica EUNACOM:</em> Este grupo tiene un <strong>altísimo riesgo (hasta 20-30%) de desarrollar Uveítis Anterior Crónica</strong>, la cual es completamente <strong>asintomática</strong> (ojo blanco, sin dolor ni hiperemia inicial). Si no se detecta precozmente produce sinequias, cataratas, glaucoma y ceguera permanente. Por ello, es obligatorio el <strong>tamizaje oftalmológico periódico con lámpara de hendidura cada 3 a 6 meses</strong>.',
          '2. <strong>AIJ Poliarticular:</strong> Compromete <strong>≥ 5 articulaciones</strong> en los primeros 6 meses. Se divide en FR positivo (similar a la AR del adulto, de peor pronóstico y erosiva) y FR negativo.',
          '3. <strong>AIJ Sistémica (Enfermedad de Still Juvenil):</strong> Artritis acompañada de fiebre cotidiana en agujas, rash macular salmón, visceromegalias y serositis.'
        ]
      },
      {
        subhead: '2. Enfermedad de Still del Adulto: Clínica y Criterios de Yamaguchi',
        paragraphs: [
          'Es un trastorno autoinflamatorio sistémico idiopático caracterizado por desregulación de citoquinas proinflamatorias (IL-1, IL-6, IL-18, TNF-alfa).',
          '<strong>Tétrada Clínica Cardinal:</strong>',
          '1. <strong>Fiebre cotidiana en espigas:</strong> Picos febriles diarios o vespertinos que superan los 39 °C, retornando espontáneamente a la normalidad.',
          '2. <strong>Artralgias o artritis:</strong> Compromete muñecas, rodillas y tobillos.',
          '3. <strong>Exantema macular color salmón evanescente:</strong> Lesiones máculo-papulares no pruriginosas en tronco y extremidades que coinciden típicamente con los picos febriles y desaparecen al ceder la temperatura.',
          '4. <strong>Faringitis / Odinofagia no exudativa:</strong> Pródromo muy frecuente que precede a las crisis febriles.',
          '<strong>Laboratorio Característico:</strong> Marcada leucocitosis neutrofílica (> 10.000 a 15.000/mm³ con > 80% PMN), elevación extrema de reactantes de fase aguda (VHS > 100, PCR muy alta) y <strong>Ferritina sérica masivamente elevada</strong> (frecuentemente > 1.000 a 5.000 ng/mL, pudiendo superar los 10.000 ng/mL) con fracción de ferritina glicosilada baja (< 20%). Típicamente los <strong>ANA y el Factor Reumatoide son NEGATIVOS</strong>.'
        ]
      },
      {
        subhead: '3. Manejo Terapéutico y Complicación Vital: Síndrome de Activación Macrofágica',
        paragraphs: [
          'Manejo de AIJ Oligoarticular: Infiltraciones intraarticulares con triamcinolona hexacetónida de primera línea; si falla o progresa se indica Metotrexato oral o subcutáneo (15 mg/m²/semana) y biológicos anti-TNF.',
          'Manejo de Enfermedad de Still: En formas leves se prueban AINEs a dosis altas. La mayoría requiere corticoides sistémicos (Prednisona 0.5 a 1 mg/kg/día) o pulsos de metilprednisolona. Como ahorrador de corticoides se utiliza Metotrexato o terapia biológica dirigida anti-IL-1 (Anakinra, Canakinumab) o anti-IL-6 (Tocilizumab).',
          '<strong>Complicación de Urgencia Vital:</strong> Tanto la AIJ sistémica como la enfermedad de Still del adulto pueden complicarse con un <strong>Síndrome de Activación Macrofágica (SAM)</strong>, una linfohistiocitosis hemofagocítica secundaria caracterizada por fiebre continua, pancitopenia rápida, coagulopatía de consumo con fibrinógeno bajo, hipertrigliceridemia y ferritina extrema (> 10.000 ng/mL). Requiere pulsos urgentes de metilprednisolona y ciclosporina en UCI.'
        ]
      }
    ],
    table: {
      title: 'Criterios Diagnósticos de Yamaguchi para Enfermedad de Still del Adulto',
      headers: ['Categoría de Criterios', 'Manifestaciones Específicas'],
      rows: [
        ['Criterios Mayores (se requieren ≥ 2)', '1) Fiebre ≥ 39 °C intermitente de ≥ 1 semana de duración'],
        ['', '2) Artralgias o artritis de ≥ 2 semanas de evolución'],
        ['', '3) Exantema salmón macular o máculopapular no pruriginoso coincidente con la fiebre'],
        ['', '4) Leucocitosis ≥ 10.000/mm³ con ≥ 80% de granulocitos polimorfonucleares'],
        ['Criterios Menores', '1) Faringitis u odinofagia no purulenta'],
        ['', '2) Linfadenopatías y/o esplenomegalia'],
        ['', '3) Elevación de transaminasas hepáticas (GOT/GPT) y/o LDH'],
        ['', '4) Factor Reumatoide y ANA negativos por técnicas estándar'],
        ['Criterio Excluyente', 'Exclusión estricta de infecciones bacterianas/virales, neoplasias (linfoma) y otras vasculitis']
      ]
    },
    vignette: 'Niña de 3 años es traída por su madre por cojera progresiva en la pierna izquierda de 8 semanas de evolución, que es más notoria por las mañanas. Al examen físico se constata aumento de volumen y calor en la rodilla izquierda, con choque rotuliano positivo y flexión limitada. El resto del examen articular es normal. No tiene fiebre ni lesiones cutáneas. El hemograma es normal, la VHS es de 35 mm/h y los anticuerpos antinucleares (ANA) son positivos en dilución 1:160, con factor reumatoide negativo.',
    explicacion: 'Se trata de una Artritis Idiopática Juvenil (AIJ) de subtipo oligoarticular (una sola articulación en una niña menor de 4 años de más de 6 semanas de evolución). La positividad de los ANA confiere un riesgo sumamente elevado de uveítis anterior crónica asintomática. La conducta obligatoria e inmediata, además de la derivación reumatológica GES, es solicitar una interconsulta urgente a oftalmología para evaluación con lámpara de hendidura, ya que la uveítis no da ojo rojo ni dolor inicial pero causa ceguera irreversible si no se trata.',
    keyPoints: [
      'AIJ se define como artritis de causa desconocida de ≥ 6 semanas de duración en menores de 16 años.',
      'El subtipo oligoarticular (≤ 4 articulaciones) es el más frecuente y afecta a niñas de 2-4 años en grandes articulaciones.',
      'AIJ oligoarticular con ANA (+) confiere un altísimo riesgo de UVEÍTIS ANTERIOR CRÓNICA ASINTOMÁTICA.',
      'Todo niño con sospecha de AIJ oligoarticular requiere examen oftalmológico urgente con lámpara de hendidura.',
      'La Enfermedad de Still del adulto se caracteriza por fiebre cotidiana vespertina > 39 °C, artritis y rash asalmonado evanescente.',
      'La ferritina sérica en la Enfermedad de Still del adulto se eleva a cifras extremas (> 1.000-5.000 ng/mL).',
      'El síndrome de activación macrofágica (SAM) es una urgencia vital caracterizada por pancitopenia, ferritina > 10.000 y coagulopatía.'
    ],
    questions: [
      {
        stem: 'Niña de 3 años es diagnosticada de Artritis Idiopática Juvenil de patrón oligoarticular en la rodilla derecha. Se solicitan exámenes que confirman anticuerpos antinucleares (ANA) positivos en título 1:320. La paciente no refiere molestias visuales y sus ojos lucen normales al examen externo. ¿Cuál es la conducta oftalmológica indicada?',
        options: [
          { id: 'A', text: 'Observar y solicitar interconsulta a oftalmología solo si presenta ojo rojo o dolor' },
          { id: 'B', text: 'Evaluación oftalmológica urgente con lámpara de hendidura y controles seriados cada 3 meses' },
          { id: 'C', text: 'Prescribir colirio de ciprofloxacino profiláctico cada 12 horas' },
          { id: 'D', text: 'Realizar fondo de ojo bajo dilatación pupilar cada 2 años' },
          { id: 'E', text: 'No requiere evaluación ocular por tratarse de una forma oligoarticular' }
        ],
        correcta: 'B',
        explicacion: 'En la AIJ oligoarticular con ANA positivo, el riesgo de desarrollar uveítis anterior crónica no granulomatosa es de hasta un 20-30%. Esta uveítis es típicamente asintomática (sin ojo rojo ni dolor) y evoluciona silenciosamente hacia la ceguera por cataratas o sinequias. La evaluación periódica con lámpara de hendidura cada 3 meses es obligatoria.',
        recTag: 'EUNACOM 2017 · Q#30'
      },
      {
        stem: 'Hombre de 28 años consulta por cuadro de 3 semanas de fiebre vespertina diaria de hasta 39.5 °C que cede espontáneamente, asociada a dolor e inflamación en muñecas y tobillos. Durante los picos febriles nota una erupción cutánea macular de color asalmonado en el tórax que desaparece al bajar la temperatura. Laboratorio: leucocitos 18.500/mm³ (88% neutrófilos), VHS 95 mm/h, PCR 180 mg/L, ferritina 4.800 ng/mL. Hemocultivos, ANA y factor reumatoide resultan negativos. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Lupus eritematoso sistémico florido' },
          { id: 'B', text: 'Enfermedad de Still del adulto' },
          { id: 'C', text: 'Endocarditis infecciosa subaguda' },
          { id: 'D', text: 'Leucemia mieloide aguda' },
          { id: 'E', text: 'Artritis reactiva postinfecciosa' }
        ],
        correcta: 'B',
        explicacion: 'La combinación de fiebre alta cotidiana intermitente (> 39 °C), artritis, exantema macular evanescente de color salmón que acompaña a la fiebre, leucocitosis neutrofílica severa, ferritina marcadamente elevada (> 1.000 ng/mL) y negatividad para ANA y FR es patognomónica de la Enfermedad de Still del adulto según los criterios de Yamaguchi.',
        recTag: 'EUNACOM 2023 · Q#25'
      }
    ]
  }
];

module.exports = { bloque1Classes, flow };
