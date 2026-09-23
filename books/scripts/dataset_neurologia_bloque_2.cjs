// ============================================================================
// BLOQUE 02 NEUROLOGÍA: CEFALEAS, SÍNDROMES CONVULSIVOS Y EPILEPSIA
// Manual EUNACOM 2026 · Tomo 10 Neurología & Geriatría (Accent color: #6d28d9 - Púrpura)
// 5 Temas Curriculares (10.6 a 10.10) · Cobertura 100% Perfil V3 & Garantías GES
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
    const cls = { acc: 'acc', dec: 'dec', warn: 'warn', crit: 'crit' }[o.type] || 'b';
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
  <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#6d28d9"/></marker></defs>
  <style>
    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}
    .t{font-size:10px;fill:#15181d}
    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#6d28d9;font-weight:700}
    .acc{fill:#6d28d9;stroke:#5b21b6}.accT{fill:#fff}.accS{font-size:8px;fill:#ede9fe}
    .dec{fill:#f5f3ff;stroke:#c4b5fd;stroke-width:1}
    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}
    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}
    .ln{stroke:#6d28d9;stroke-width:1.2;fill:none;marker-end:url(#ar)}
  </style>
  ${P.join('\n  ')}
</svg>`;
  return { title, svg };
}

const bloque2 = [
  // ==========================================================================
  // TEMA 10.6: MIGRAÑA (FISIOPATOLOGÍA, CRITERIOS IHS, TRIPTANES Y PROFILAXIS) Y CEFALEA TENSIONAL (TIER 3)
  // ==========================================================================
  {
    id: "neuro-06",
    classId: "neuro-06",
    tier: 3,
    blockNum: 2,
    blockName: "Cefaleas, Síndromes Convulsivos y Epilepsia",
    topicLabel: "10.6",
    title: "Migraña (Fisiopatología, Criterios IHS, Triptanes y Profilaxis) y Cefalea Tensional",
    perfilCode: "1.10.1.012",
    dx: "Específico",
    tx: "Completo",
    seg: "Realizar",
    ges: "Atención Primaria y Derivación Oportuna · Diagnóstico diferencial ambulatorio de cefaleas primarias vs secundarias potencialmente letales y manejo preventivo para evitar cefalea por abuso de medicación.",
    reconstrucciones: "Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026",
    frecuencia: "Máxima rentabilidad · Motivo de consulta neurológica ambulatoria N° 1 en población joven y mujeres en edad fértil",
    svg: null,
    algoTitle: "Algoritmo de Diagnóstico y Manejo Escalonado de Migraña y Cefaleas Primarias",
    diagram: flow('Algoritmo de Manejo Escalonado de la Migraña', [
      { t: 'Evaluación de Cefalea Aguda / Recurrente en Adultos', s: 'Anamnesis cronometrada · Examen físico general y neurológico completo · Fondo de ojo', type: 'acc' },
      { t: 'Paso 1: Descarte Inmediato de Banderas Rojas (SNOOP10)', s: 'Inicio súbito en trueno, fiebre, foco motor/sensitivo, inicio > 50 años, neoplasia o papiledema', type: 'warn' },
      { k: 'split', q: '¿Presenta Banderas Rojas o Sospecha de Cefalea Secundaria Grave?', s: 'Estratificación inmediata entre urgencia neuroquirúrgica/infecciosa vs cefalea primaria benigna',
        ll: 'Bandera Roja (+) o Cefalea en Trueno',
        left: { t: 'Neuroimagen Urgente (TAC / RM) + PL', s: 'Descartar hemorragia subaracnoidea, meningitis, tumor o trombosis venosa dural', type: 'crit' },
        rl: 'Examen Normal · Criterios IHS de Cefalea Primaria',
        right: { t: 'Diagnóstico Clínico: Migraña vs Tensional', s: 'Migraña: pulsátil, hemicránea, náuseas, foto/fonofobia · Tensional: opresiva en banda, leve', type: 'dec' }
      },
      { k: 'split', q: '¿Manejo Agudo Escalonado de la Crisis de Migraña?', s: 'Selección según intensidad y grado de discapacidad funcional (escala MIDAS)',
        ll: 'Crisis Leve a Moderada',
        left: { t: 'AINEs Orales + Antiemético', s: 'Ibuprofeno 400-800 mg o Naproxeno 550 mg + Metoclopramida 10 mg al inicio precoz', type: 'acc' },
        rl: 'Crisis Moderada a Severa / Falla AINEs',
        right: { t: 'Triptán Específico (Sumatriptán / Zolmitriptán)', s: 'Sumatriptán 50-100 mg VO o 6 mg SC · Contraindicado en cardiopatía coronaria o ACV', type: 'crit' }
      },
      { t: 'Paso 3: Evaluación de Criterios de Profilaxis Farmacológica', s: 'Indicada si ≥ 3-4 crisis al mes, crisis discapacitantes prolongadas o riesgo de abuso analgésico', type: 'warn' },
      { t: 'Selección de Profilaxis según Comorbilidad del Paciente', s: 'Propranolol (joven/hipertenso) · Flunarizina (vértigo) · Topiramato (obesidad) · Amitriptilina (insomnio/depresión)', type: 'acc' }
    ]),
    contexto: "La migraña y la cefalea tensional representan más del 90% de las consultas ambulatorias por dolor de cabeza en atención primaria. La migraña es una enfermedad neurovascular compleja caracterizada por hiperexcitabilidad cortical y activación del sistema trigéminovascular, con liberación del neuropéptido CGRP. La regla de oro en el EUNACOM radica en saber descartar con rigor las banderas rojas de cefaleas secundarias potencialmente letales mediante la regla SNOOP10 (como la hemorragia subaracnoidea en cefaleas en trueno), seleccionar el tratamiento abortivo escalonado precoz (AINEs vs Triptanes) y prescribir profilaxis oportuna para evitar la cefalea por abuso de medicación.",
    contentSections: [
      {
            "subhead": "1. Fisiopatología del Sistema Trigéminovascular, Depresión Cortical Propagada y Péptido CGRP",
            "paragraphs": [
                  "La migraña no es un simple trastorno vascular espástico, sino una disfunción neurovascular primaria que involucra una predisposición genética a la hiperexcitabilidad neuronal cortical y del tronco encefálico. El fenómeno biológico fundamental del aura migrañosa es la <strong>depresión cortical propagada (cortical spreading depression de Leão)</strong>: una onda de despolarización neuronal y glial que avanza lentamente (2 a 6 mm/minuto) a través de la corteza cerebral (típicamente desde el lóbulo occipital hacia adelante), seguida de una inhibición transitoria y prolongada de la actividad eléctrica neuronal. Esta onda induce alteraciones focales transitorias del flujo sanguíneo cerebral y genera los síntomas positivos y negativos del aura visual (escotomas centellantes, espectro de fortificación).",
                  "La fase de dolor de la migraña se origina por la activación retrógrada y anterógrada del <strong>sistema trigéminovascular</strong> (véase Algoritmo 10.6). Las neuronas sensitivas primarias del ganglio de Gasser que inervan las meninges y los grandes vasos durales liberan neuropéptidos vasoactivos y proinflamatorios, principalmente el <strong>péptido relacionado con el gen de la calcitonina (CGRP, Calcitonin Gene-Related Peptide)</strong>, la sustancia P y la neurocinina A. El CGRP produce una intensa vasodilatación de las arterias meníngeas, extravasación plasmática de proteínas y una inflamación neurógena estéril perivascular.",
                  "Estos estímulos aferentes viajan a través del núcleo del tracto espinal del trigémino (complejo trigeminocervical en C1-C2) hacia el tálamo y la corteza sensitiva, generando sensibilización periférica (dolor pulsátil que se agrava con el esfuerzo físico o la tos) y posteriormente sensibilización central (alodinia cutánea al tacto suave, cepillado de pelo o uso de anteojos). Los fármacos de la familia de los <strong>triptanes</strong> actúan como agonistas selectivos de los receptores serotonérgicos <strong>5-HT 1B</strong> (induciendo vasoconstricción directa de los vasos meníngeos dilatados) y <strong>5-HT 1D/1F</strong> (bloqueando presinápticamente la liberación de CGRP e inhibiendo la transmisión nociceptiva en el tronco encefálico)."
            ]
      },
      {
            "subhead": "2. Criterios Diagnósticos IHS (ICHD-3): Diferenciación entre Migraña y Cefalea Tensional",
            "paragraphs": [
                  "La Clasificación Internacional de Cefaleas (ICHD-3) de la International Headache Society define criterios diagnósticos operacionales precisos para diferenciar las cefaleas primarias más prevalentes (véase Tabla 10.6).",
                  "• <strong>Criterios de Migraña sin Aura (ICHD-3 1.1):</strong> Al menos 5 ataques que cumplan: 1) Duración del episodio entre <strong>4 y 72 horas</strong> (sin tratamiento o tratada sin éxito); 2) Cefalea que cumple al menos dos de las siguientes 4 características: a) Localización <em>unilateral (hemicránea)</em>; b) Cualidad <em>pulsátil</em> (como un martilleo o latido); c) Intensidad <em>moderada a severa</em> (interrumpe o prohíbe las actividades cotidianas); d) <em>Empeora o causa el cese de la actividad física rutinaria</em> (como caminar o subir escaleras); 3) Durante la cefalea presenta al menos uno de los siguientes: a) <em>Náuseas y/o vómitos</em>; b) <em>Fotofobia Y fonofobia</em> simultáneas.",
                  "• <strong>Criterios de Migraña con Aura (ICHD-3 1.2):</strong> Al menos 2 ataques que presentan síntomas focales neurológicos completamente reversibles: visuales (escotomas centellantes, líneas en zigzag, pérdida visual parcial; representan > 90% de las auras), sensitivos (parestesias con marcha cheiro-oral: mano a brazo y boca) o del lenguaje/disfasia. Cada síntoma individual de aura se propaga gradualmente durante ≥ 5 minutos, dura entre <strong>5 y 60 minutos</strong>, y es seguido por la cefalea dentro de los siguientes 60 minutos.",
                  "• <strong>Criterios de Cefalea Tensional (ICHD-3 2.1):</strong> Es la cefalea más frecuente a nivel poblacional. Dolor de cualidad <strong>opresiva o sorda (\"como un casco, banda o peso apretado sobre la cabeza\")</strong>, localización <strong>bilateral holocraneana u occipitofrontal</strong>, intensidad <strong>leve a moderada</strong> (permite continuar con las labores diarias aunque con molestia), <strong>NO empeora con la actividad física rutinaria</strong>. <em>Diferenciador EUNACOM crítico:</em> <strong>NO presenta náuseas ni vómitos</strong>, y puede asociar a lo sumo fotofobia O fonofobia de manera aislada, pero <em>jamás ambas juntas</em>."
            ]
      },
      {
            "subhead": "3. Enfrentamiento en Urgencias: Banderas Rojas y Regla Mnemotécnica SNOOP10",
            "paragraphs": [
                  "El error diagnóstico más grave en el servicio de urgencia es asumir erróneamente que una cefalea intensa es primaria sin antes descartar activamente una causa secundaria potencialmente mortal. La herramienta clínica universal para pesquisar banderas rojas es la regla mnemotécnica <strong>SNOOP10</strong> (véase Tabla de Banderas Rojas 10.6):",
                  "• <strong>S (Systemic symptoms / Secondary risk factors):</strong> Fiebre, baja de peso, sudoración nocturna; o paciente con antecedente oncológico conocido o inmunosupresión (infección por VIH/SIDA, trasplante, terapia inmunosupresora biológica). Obliga a descartar meningitis bacteriana, encefalitis viral, absceso cerebral, metástasis del SNC o toxoplasmosis mediante neuroimagen contrastada urgente seguida de punción lumbar.",
                  "• <strong>N (Neurologic symptoms or signs):</strong> Déficit neurológico focal objetivable al examen (paresia motora, asimetría facial, afasia, diplopía, edema papilar, reflejo plantar extensor) o compromiso del nivel de conciencia o crisis convulsiva. Requiere TAC de encéfalo sin contraste de urgencia inmediata.",
                  "• <strong>O (Onset sudden / Thunderclap):</strong> Cefalea en trueno o \"estallido\", definida como un dolor que alcanza su <strong>intensidad máxima (10/10) en menos de 1 minuto</strong> desde su inicio brusco. Es la manifestación cardinal de la <strong>hemorragia subaracnoidea (HSA)</strong> secundaria a rotura aneurismática, aunque también ocurre en disección arterial vertebral/carotídea y síndrome de vasoconstricción cerebral reversible (RCVS). <em>Conducta obligatoria EUNACOM:</em> TAC de encéfalo sin contraste inmediato; si el TAC es normal y se tomó dentro de las primeras horas, es <strong>estrictamente mandatorio realizar una punción lumbar</strong> para buscar eritrocitos y xantocromía mediante espectrofotometría.",
                  "• <strong>O (Older age / Inicio > 50 años):</strong> Cefalea de nueva aparición en un paciente mayor de 50 años sin historia previa de migraña. Debe descartarse en primer lugar la <strong>arteritis de células gigantes (arteritis de la temporal)</strong> solicitando de inmediato Velocidad de Eritrosedimentación (VHS) y PCR, además de lesiones ocupantes de espacio (neoplasias, hematoma subdural crónico).",
                  "• <strong>P (Pattern change, Progressive, Positional, Precipitated by Valsalva, Papilledema):</strong> Cambio reciente en el patrón habitual de crisis; cefalea progresiva que despierta al paciente de noche; dolor que empeora al acostarse o toser (sugiere hipertensión endocraneana); dolor ortostático que alivia al decúbito supino (hipotensión licuoral por fístula); o presencia de papiledema en el fondo de ojo."
            ]
      },
      {
            "subhead": "4. Tratamiento Abortivo de la Crisis Aguda y Prevención del Abuso de Medicación (MOH)",
            "paragraphs": [
                  "El tratamiento sintomático de la crisis de migraña debe iniciarse de forma <strong>precoz</strong>, idealmente en la primera hora tras el inicio del dolor de cabeza (y no durante el aura, donde los vasoconstrictores no son efectivos y podrían teóricamente agravar la isquemia focal) (véase Protocolo Terapéutico 10.6).",
                  "• <strong>Crisis leves a moderadas:</strong> Fármacos de primera línea son los Antiinflamatorios No Esteroideos (AINEs): <strong>Ibuprofeno 400 a 800 mg VO</strong>, <strong>Naproxeno sódico 500 a 550 mg VO</strong>, o Ácido Acetilsalicílico 1.000 mg VO. Dado que la crisis migrañosa cursa invariablemente con gastroparesia y estasis gástrica inducida por disfunción dopaminérgica central, se recomienda asociar un agente procinético como <strong>Metoclopramida 10 mg VO/EV</strong> o Domperidona 10 mg VO, lo cual acelera la absorción intestinal del analgésico y yugula las náuseas.",
                  "• <strong>Crisis moderadas a severas o falla de AINEs:</strong> La terapia específica de elección son los <strong>Triptanes</strong>. El <strong>Sumatriptán oral (50 a 100 mg)</strong> o subcutáneo (6 mg SC, con inicio de acción en 10-15 minutos) constituye el fármaco de referencia. Otras opciones orales incluyen <em>Zolmitriptán 2.5-5 mg</em> y <em>Eletriptán 40-80 mg</em>. Si el dolor recurre tras una mejoría inicial, puede repetirse una segunda dosis separada por al menos 2 horas (dosis máxima de sumatriptán: 200 mg/día VO o 12 mg/día SC).",
                  "• <strong>Contraindicaciones absolutas mayores de los triptanes:</strong> Por su efecto vasoconstrictor coronario y cerebral mediado por receptores 5-HT 1B, los triptanes están <strong>formalmente contraindicados</strong> en: antecedentes de infarto agudo al miocardio, cardiopatía coronaria demostrada, angina de Prinzmetal, ataque cerebrovascular (ACV) previo o AIT, hipertensión arterial severa o no controlada, enfermedad arterial periférica, y en subtipos raros como la migraña hemipléjica o migraña basilar.",
                  "• <strong>Cefalea por Abuso de Medicación (Medication Overuse Headache - MOH):</strong> Ocurre cuando el paciente consume analgésicos de manera crónica durante más de 10 a 15 días al mes por más de 3 meses, perpetuando un círculo vicioso de cefalea diaria de rebote. Para prevenirla, el médico debe instruir con rigor que los AINEs se limiten a <strong>menos de 15 días/mes</strong> y los triptanes o fármacos combinados con ergotamínicos o cafeína a <strong>menos de 10 días/mes</strong>."
            ]
      },
      {
            "subhead": "5. Profilaxis Farmacológica de la Migraña: Indicaciones y Selección según Comorbilidad",
            "paragraphs": [
                  "El tratamiento preventivo no busca eliminar por completo las crisis, sino reducir su frecuencia, intensidad y duración en al menos un 50%, mejorar la respuesta a la terapia abortiva y evitar la progresión a migraña crónica y cefalea por sobreuso de analgésicos.",
                  "<strong>Criterios de indicación formal de tratamiento profiláctico:</strong>",
                  "1) <strong>Frecuencia elevada:</strong> 3 o más crisis de migraña al mes, o más de 6 a 8 días de cefalea al mes;",
                  "2) <strong>Discapacidad severa:</strong> Crisis que interfieren profundamente con la vida laboral o académica del paciente a pesar de la terapia aguda correcta;",
                  "3) <strong>Contraindicación o fracaso</strong> de los tratamientos sintomáticos de rescate;",
                  "4) <strong>Riesgo inminente de cefalea por abuso analgésico</strong>;",
                  "5) Subtipos de migraña con riesgo neurológico (migraña hemipléjica, migraña con aura de troncoencéfalo).",
                  "<strong>Fármacos de Primera Línea y Selección Personalizada:</strong>",
                  "• <strong>Betabloqueadores (Propranolol 40 a 160 mg/día VO):</strong> Es el profiláctico de elección en pacientes jóvenes, ansiosos, con temblor esencial o hipertensión arterial concomitante. <em>Contraindicaciones:</em> Asma bronquial, EPOC severa, bradicardia sinusal y bloqueos auriculoventriculares.",
                  "• <strong>Calcioantagonistas (Flunarizina 5 a 10 mg/día nocturno):</strong> Bloqueador de canales de calcio con gran eficacia en migraña común y en pacientes con síntomas vestibulares o vértigo migrañoso. <em>Efectos adversos y precauciones:</em> Somnolencia, marcado aumento de peso y apetito, y riesgo de inducir síntomas extrapiramidales (parkinsonismo secundario) o depresión mayor en adultos mayores.",
                  "• <strong>Neuromoduladores / Anticonvulsivantes:</strong> 1) <strong>Topiramato (25 a 100 mg/día VO):</strong> Excelente indicación en pacientes con <em>sobrepeso u obesidad</em> (frecuentemente induce descenso ponderal). Efectos adversos: parestesias distales, lentitud cognitiva o anomia, litiasis renal y glaucoma de ángulo cerrado; <strong>teratogénico</strong> (labio leporino). 2) <strong>Ácido Valproico (500 a 1.000 mg/día VO):</strong> Muy eficaz, pero <strong>formalmente proscrito en mujeres en edad fértil</strong> por alto riesgo de teratogenicidad (defectos del tubo neural) y síndrome de ovario poliquístico.",
                  "• <strong>Antidepresivos Tricíclicos (Amitriptilina 10 a 50 mg/noche VO):</strong> Fármaco de primera línea cuando la migraña coexiste con <em>insomnio de conciliación, depresión, ansiedad, fibromialgia o cefalea mixta con componente tensional</em>. Efectos anticolinérgicos: sequedad bucal, constipación, retención urinaria y prolongación del intervalo QT."
            ]
      }
],
    table: {
      "title": "Criterios Diagnósticos IHS (ICHD-3): Migraña vs Cefalea Tensional",
      "headers": [
            "Característica Clínica",
            "Migraña sin Aura (ICHD-3 1.1)",
            "Migraña con Aura (ICHD-3 1.2)",
            "Cefalea Tensional Episódica (ICHD-3 2.1)"
      ],
      "rows": [
            [
                  "Duración del dolor",
                  "4 a 72 horas (sin tratamiento o tratada sin éxito)",
                  "Aura de 5 a 60 minutos; cefalea sigue en < 60 min y dura 4-72 h",
                  "30 minutos a 7 días continuos"
            ],
            [
                  "Localización anatómica",
                  "Unilateral / Hemicránea en 60-70% (puede ser bilateral)",
                  "Unilateral, típicamente contralateral al lado del aura",
                  "Bilateral estricta, en banda u holocraneana en casco"
            ],
            [
                  "Cualidad del dolor",
                  "Pulsátil, martillante, latiente",
                  "Pulsátil tras resolución del fenómeno focal",
                  "Opresiva, pesadez, \"como un casco o cinta apretada\" (no pulsátil)"
            ],
            [
                  "Intensidad del dolor",
                  "Moderada a severa (impide actividades habituales)",
                  "Moderada a severa (incapacitante)",
                  "Leve a moderada (permite mantener actividad habitual)"
            ],
            [
                  "Efecto de la actividad física",
                  "Se agrava francamente con caminar o subir escaleras; busca reposo a oscuras",
                  "Se intensifica con esfuerzo; paciente encamado inmóvil",
                  "NO empeora con la actividad física rutinaria ni el ejercicio leve"
            ],
            [
                  "Síntomas asociados",
                  "Náuseas y/o vómitos frecuentes; fotofobia Y fonofobia simultáneas",
                  "Náuseas, fotofobia y fonofobia tras el cese del aura",
                  "Sin náuseas ni vómitos; puede haber fotofobia O fonofobia (nunca ambas)"
            ],
            [
                  "Fenómeno de Aura",
                  "Ausente por definición",
                  "Presente: escotoma centellante, espectro fortificación, parestesias cheiro-orales",
                  "Ausente por definición"
            ]
      ]
},
    severityTable: {
      "title": "Banderas Rojas en Cefalea Aguda: Criterios Mnemotécnicos SNOOP10 y Conducta Urgente",
      "headers": [
            "Criterio / Letra SNOOP",
            "Hallazgo Clínico de Alerta",
            "Principales Sospechas Diagnósticas",
            "Conducta Médica e Imagenológica Obligatoria"
      ],
      "rows": [
            [
                  "S - Systemic symptoms / Secondary risk",
                  "Fiebre, baja de peso, sudoración nocturna; o antecedente de cáncer o infección por VIH",
                  "Meningitis bacteriana/viral, encefalitis, absceso cerebral, metástasis del SNC, toxoplasmosis",
                  "TAC con contraste o Resonancia Magnética urgente; punción lumbar inmediata tras neuroimagen"
            ],
            [
                  "N - Neurologic symptoms or signs",
                  "Déficit neurológico focal (paresia, afasia, ataxia, asimetría pupilar), alteración de conciencia o crisis",
                  "ACV isquémico/hemorrágico, hematoma subdural agudo, masa expansiva, trombosis venosa dural",
                  "TAC de encéfalo sin contraste inmediato; evaluación por neurología / neurocirugía de urgencia"
            ],
            [
                  "O - Onset sudden (Thunderclap)",
                  "Cefalea en trueno o estallido: intensidad máxima instantánea (alcanza 10/10 en menos de 1 minuto)",
                  "Hemorragia subaracnoidea (HSA) por rotura aneurismática, disección arterial cervicocraneana, SVCR",
                  "TAC cerebral urgente; si TAC es normal y se tomó en < 6-12 h, Punción Lumbar OBLIGATORIA para xantocromía"
            ],
            [
                  "O - Older age (Inicio > 50 años)",
                  "Cefalea de nuevo inicio en paciente mayor de 50 años sin historia migrañosa previa",
                  "Arteritis de la Temporal (Células Gigantes), neoplasia intracraneal, hematoma subdural crónico",
                  "Solicitar VHS y PCR urgentes (sospecha arteritis); TAC/RM cerebral; ecografía/biopsia arteria temporal"
            ],
            [
                  "P - Pattern change / Progressive",
                  "Aumento progresivo de frecuencia, intensidad o pérdida de respuesta al tratamiento habitual",
                  "Lesión ocupante de espacio en crecimiento, hematoma subdural progresivo, hidrocefalia",
                  "Neuroimagen programada prioritaria o de urgencia según velocidad de progresión"
            ],
            [
                  "P - Positional / Valsalva / Papilledema",
                  "Dolor que empeora al acostarse/Valsalva (hipertensión endocraneana) o de pie (hipotensión licuoral); papiledema",
                  "Hipertensión endocraneana idiopática, fístula de LCR, malformación de Chiari I, trombosis de senos",
                  "Fondo de ojo obligado; RM cerebral con secuencias venosas; punción lumbar con manometría"
            ]
      ]
},
    treatmentTable: {
      "title": "Tratamiento Farmacológico Escalonado de Migraña: Crisis Aguda y Profilaxis de Primera Línea",
      "headers": [
            "Categoría Terapéutica",
            "Fármaco y Vía de Administración",
            "Dosis Estándar y Posología",
            "Indicaciones Clínicas, Metas y Advertencias / Contraindicaciones"
      ],
      "rows": [
            [
                  "Terapia Aguda: AINEs de 1ª Línea",
                  "Ibuprofeno / Naproxeno oral",
                  "Ibuprofeno 400 - 800 mg VO; Naproxeno 500 - 550 mg VO al inicio",
                  "Indicado en crisis leves a moderadas. Asociar a Metoclopramida 10 mg por gastroparesia. Limitar a < 15 días/mes para evitar MOH."
            ],
            [
                  "Terapia Aguda: Triptanes Específicos",
                  "Sumatriptán / Zolmitriptán / Eletriptán",
                  "Sumatriptán 50 - 100 mg VO (repetir a las 2 h si recurre, máx 200 mg/día) o 6 mg SC",
                  "Agonistas 5-HT 1B/1D. Indicados en crisis moderadas-severas. Contraindicados en cardiopatía coronaria, ACV previo, HTA severa o migraña hemipléjica."
            ],
            [
                  "Profilaxis: Betabloqueadores",
                  "Propranolol oral",
                  "40 a 160 mg/día (fraccionado cada 8 a 12 horas)",
                  "1ª elección en adultos jóvenes, ansiosos, con temblor esencial o hipertensión. Contraindicado en asma, EPOC y bloqueos AV."
            ],
            [
                  "Profilaxis: Calcioantagonistas",
                  "Flunarizina oral",
                  "5 a 10 mg/día en dosis nocturna única",
                  "Bloqueador Ca2+ tipo L. Muy eficaz si coexiste vértigo migrañoso. Efectos adversos: aumento de peso, somnolencia, parkinsonismo y depresión."
            ],
            [
                  "Profilaxis: Anticonvulsivantes",
                  "Topiramato / Ácido Valproico",
                  "Topiramato 25 a 100 mg/día VO; Valproato 500 a 1000 mg/día VO",
                  "Topiramato: de elección en sobrepeso u obesidad (produce pérdida ponderal); teratogénico. Valproato: proscrito en mujeres en edad fértil."
            ],
            [
                  "Profilaxis: Antidepresivos Tricíclicos",
                  "Amitriptilina oral",
                  "10 a 50 mg/noche (titulación progresiva desde 10 mg)",
                  "Elección si coexiste insomnio, depresión, dolor miofascial o cefalea mixta tensional. Efectos anticolinérgicos: boca seca, constipación, sedación."
            ]
      ]
},
    vignette: "Mujer de 28 años, abogada, sin antecedentes mórbidos, consulta por cuadro de 3 años de evolución de cefaleas episódicas que se presentan 4 a 5 veces al mes. Describe el dolor como hemicráneo derecho, intensamente pulsátil, que se agrava al caminar y la obliga a encerrarse a oscuras en su habitación por intolerancia a la luz y a los ruidos, acompañado de náuseas constantes y vómitos biliosos ocasionales. Cada episodio dura entre 24 y 36 horas si no toma medicamentos. Ha usado paracetamol y ketorolaco con alivio parcial y transitorio, lo que le ha generado ausentismo laboral reiterado. El examen neurológico completo y el fondo de ojo resultan rigurosamente normales.",
    explicacion: "El cuadro cumple estrictamente los criterios diagnósticos IHS (ICHD-3) para Migraña sin aura: dolor hemicráneo pulsátil, de intensidad moderada a severa, agravado por la actividad física rutinaria, con fotofobia, fonofobia y náuseas, de más de 4 horas de duración, con examen físico normal y sin banderas rojas (regla SNOOP10). Al presentar 4 a 5 crisis mensuales discapacitantes con falla a analgésicos comunes, la paciente tiene dos indicaciones terapéuticas formales simultáneas: 1) Tratamiento de rescate agudo escalonado con un triptán oral específico (Sumatriptán 50 a 100 mg VO o Zolmitriptán) asociado a un antiemético al inicio del dolor; y 2) Inicio perentorio de tratamiento profiláctico de primera línea (como Propranolol 40-80 mg/día si no tiene asma, o Amitriptilina si asocia insomnio) para disminuir la frecuencia e intensidad de los ataques y prevenir la cefalea por sobreuso de analgésicos.",
    keyPoints: [
      "El diagnóstico de migraña y cefalea tensional es eminentemente clínico; en ausencia de banderas rojas (regla SNOOP10), la neuroimagen de rutina no está indicada.",
      "La migraña sin aura requiere al menos 5 crisis de 4 a 72 horas de dolor pulsátil unilateral moderado-severo que empeora con el ejercicio y asocia náuseas o foto/fonofobia.",
      "La cefalea tensional es bilateral, opresiva (\"en banda o casco\"), leve-moderada, no empeora con la actividad rutinaria y NUNCA cursa con náuseas ni vómitos.",
      "Los triptanes (agonistas 5-HT 1B/1D) son el tratamiento abortivo de elección en crisis moderadas a severas, pero están estrictamente contraindicados en cardiopatía coronaria, ACV previo e HTA descontrolada.",
      "La profilaxis farmacológica está indicada con ≥ 3-4 crisis mensuales o dolor discapacitante: Propranolol (primera línea general), Flunarizina (vértigo), Topiramato (obesidad) o Amitriptilina (insomnio/dolor miofascial).",
      "Para evitar la cefalea por sobreuso de medicamentos (MOH), el uso de AINEs debe limitarse a menos de 15 días al mes y el de triptanes o combinados a menos de 10 días al mes."
],
    questions: [
      {
            "stem": "Existen tratamientos profilácticos para la migraña, que disminuyen la frecuencia y la intensidad de los episodios de jaqueca. Todos los medicamentos enumerados a continuación pueden ser usados como tratamiento profiláctico, EXCEPTO:",
            "options": [
                  {
                        "id": "A",
                        "text": "Sumatriptán"
                  },
                  {
                        "id": "B",
                        "text": "Propanolol"
                  },
                  {
                        "id": "C",
                        "text": "Ácido valproico"
                  },
                  {
                        "id": "D",
                        "text": "Flunarizina"
                  },
                  {
                        "id": "E",
                        "text": "Amitriptilina"
                  }
            ],
            "correcta": "A",
            "explicacion": "La pregunta aborda el tratamiento profiláctico de la migraña, es decir, medicamentos que se usan de forma regular para disminuir la frecuencia, intensidad y duración de los episodios de jaqueca. La respuesta correcta, Sumatriptán, es la excepción porque no se utiliza para este propósito. El Sumatriptán pertenece a la clase de los triptanos, que son agonistas selectivos de los receptores 5-HT1B/1D de serotonina. Su mecanismo de acción implica la vasoconstricción de los vasos sanguíneos craneales dilatados y la inhibición de la liberación de neuropéptidos proinflamatorios, lo que resulta en un alivio rápido del dolor y los síntomas asociados a un ataque agudo de migraña. Por lo tanto, el Sumatriptán es un tratamiento abortivo o agudo, diseñado para ser tomado al inicio de una crisis de migraña para detenerla, no para prevenir futuras crisis.",
            "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.012"
      },
      {
            "stem": "Existen numerosos medicamentos que sirven para prevenir la ocurrencia de ataques de migraña. Uno de estos medicamentos es:",
            "options": [
                  {
                        "id": "A",
                        "text": "Indometacina"
                  },
                  {
                        "id": "B",
                        "text": "Propanolol"
                  },
                  {
                        "id": "C",
                        "text": "Ergotamina"
                  },
                  {
                        "id": "D",
                        "text": "Verapamilo"
                  },
                  {
                        "id": "E",
                        "text": "Tramadol"
                  }
            ],
            "correcta": "B",
            "explicacion": "La respuesta correcta es Propranolol (b) porque es un betabloqueante no selectivo, ampliamente reconocido como uno de los medicamentos de primera línea para la profilaxis de la migraña. Su mecanismo de acción exacto en la prevención de la migraña no se comprende completamente, pero se cree que involucra la modulación de la actividad adrenérgica central, la reducción de la excitabilidad neuronal y la estabilización del tono vascular. Al reducir la frecuencia y la intensidad de los ataques, mejora significativamente la calidad de vida de los pacientes. El Propranolol se administra de forma regular, no durante un ataque agudo, para disminuir la probabilidad de que ocurran los episodios migrañosos. Es una opción terapéutica efectiva y bien establecida, junto con otros betabloqueantes como el metoprolol y el timolol, ciertos anticonvulsivantes (ej. topiramato, divalproato) y antidepresivos tricíclicos (ej. amitriptilina). Sin embargo, debe usarse con precaución en pacientes con asma o enfermedad pulmonar obstructiva crónica (EPOC) debido a su potencial para causar broncoespasmo, y en aquellos con bradicardia o hipotensión. Su inclusión en la pregunta de EUNACOM resalta la importancia de conocer los tratamientos preventivos de la migraña, una condición neurológica prevalente que afecta significativamente la vida de los individuos. El manejo adecuado de la migraña abarca tanto el tratamiento agudo de los ataques como la profilaxis para reducir su incidencia.",
            "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.012"
      },
      {
            "stem": "¿Cuál de los siguientes fármacos es útil como tratamiento profiláctico de la migraña?",
            "options": [
                  {
                        "id": "A",
                        "text": "Flunarizina"
                  },
                  {
                        "id": "B",
                        "text": "Ergotamina"
                  },
                  {
                        "id": "C",
                        "text": "Sumatriptán"
                  },
                  {
                        "id": "D",
                        "text": "Clozapina"
                  },
                  {
                        "id": "E",
                        "text": "Fluoxetina"
                  }
            ],
            "correcta": "A",
            "explicacion": "La Flunarizina es un bloqueador de los canales de calcio de tipo L, y es el fármaco correcto en este contexto debido a su consolidado uso como tratamiento profiláctico de la migraña. Su mecanismo de acción exacto en la profilaxis migrañosa no está completamente dilucidado, pero se cree que actúa estabilizando las membranas neuronales, reduciendo la excitabilidad cerebral y previniendo la isquemia o hipoxia celular al mejorar el flujo sanguíneo cerebral y prevenir el vasoespasmo. Esto lo hace efectivo para disminuir la frecuencia, intensidad y duración de los ataques de migraña. La Flunarizina se administra diariamente para prevenir los episodios, no para tratar un ataque agudo ya iniciado. Es considerada una opción de primera línea en la profilaxis de la migraña en varias guías clínicas, especialmente en pacientes con migraña de alta frecuencia o con contraindicaciones a otros tratamientos. Sus efectos secundarios incluyen somnolencia, aumento de peso y, en raras ocasiones, síntomas extrapiramidales o depresión, lo que requiere un seguimiento adecuado.",
            "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.012"
      },
      {
            "stem": "Un paciente de 34 años consulta por cefaleas recurrentes, de varios años de evolución de carácter pulsátil, de localización frontoparietal y que suele ser muy intensa, agravándose con los ruidos y con la luz. Las crisis se presentan 3 a 4 veces al mes. El examen físico es normal. La conducta más adecuada es:",
            "options": [
                  {
                        "id": "A",
                        "text": "Indicar AINES durante las crisis y ergotamina entre ellas, como tratamiento profiláctico"
                  },
                  {
                        "id": "B",
                        "text": "Indicar flunarizina durante las crisis y amitriptilina entre ellas, como tratamiento profiláctico"
                  },
                  {
                        "id": "C",
                        "text": "Indicar AINES durante las crisis y ácido valproico entre ellas, como tratamiento profiláctico"
                  },
                  {
                        "id": "D",
                        "text": "Indicar ergotamínicos durante las crisis y ácido propanolol entre ellas, como tratamiento profiláctico"
                  },
                  {
                        "id": "E",
                        "text": "Solicitar TAC de cerebro"
                  }
            ],
            "correcta": "C",
            "explicacion": "El caso clínico describe a un paciente de 34 años con cefaleas recurrentes de larga evolución, de carácter pulsátil, localización frontoparietal, muy intensas, que se agravan con ruidos (fonofobia) y luz (fotofobia). La frecuencia es de 3 a 4 crisis al mes y el examen físico es normal. Esta constelación de síntomas es altamente sugestiva de Migraña sin aura, un tipo de cefalea primaria. La frecuencia de las crisis (3-4 veces al mes) es una indicación clara para iniciar tanto un tratamiento abortivo (para las crisis agudas) como un tratamiento profiláctico (para reducir la frecuencia e intensidad de las crisis). La opción C propone indicar AINES (Antiinflamatorios No Esteroideos) durante las crisis. Los AINES son una opción de tratamiento abortivo de primera línea para las crisis de migraña, especialmente para las de intensidad leve a moderada, o como primera elección antes de triptanes si los síntomas son menos severos. Además, sugiere el uso de ácido valproico como tratamiento profiláctico. El ácido valproico es un anticonvulsivante que ha demostrado ser efectivo y es considerado una opción de primera línea en la profilaxis de la migraña, junto con los betabloqueadores (como propanolol) y los antidepresivos tricíclicos (como amitriptilina). Esta combinación ofrece un abordaje completo y basado en la evidencia para el manejo de la migraña. Dado que la cefalea es una migraña típica sin signos de alarma (como inicio súbito, cambios en el patrón de la cefalea, signos neurológicos focales, etc.) y con un examen físico normal, la conducta más adecuada es iniciar el tratamiento farmacológico específico. La combinación de AINES para las crisis agudas y ácido valproico para la profilaxis es una estrategia terapéutica sólida y respaldada por las guías clínicas para pacientes con migraña de frecuencia moderada a alta.",
            "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.012"
      }
]
  },

  // ==========================================================================
  // TEMA 10.7: CEFALEA EN RACIMOS (CLUSTER) Y NEURALGIA DEL TRIGÉMINO: DIAGNÓSTICO DIFERENCIAL, MANEJO AGUDO Y PREVENTIVO (TIER 2)
  // ==========================================================================
  {
    id: "neuro-07",
    classId: "neuro-07",
    tier: 2,
    blockNum: 2,
    blockName: "Cefaleas, Síndromes Convulsivos y Epilepsia",
    topicLabel: "10.7",
    title: "Cefalea en Racimos (Cluster) y Neuralgia del Trigémino: Diagnóstico Diferencial, Manejo Agudo y Preventivo",
    perfilCode: "1.10.1.013",
    dx: "Específico",
    tx: "Completo",
    seg: "Realizar",
    ges: "Derivación Oportuna a Especialidad · Identificación precoz de síndromes de dolor neuropático craneofacial paroxístico y derivación a neurología/neurocirugía en refractariedad.",
    reconstrucciones: "EUNACOM Diciembre 2025 (Q#28) · EUNACOM Julio 2016 (Q#94) · EUNACOM Julio 2015 (Q#25)",
    frecuencia: "Alta rentabilidad · Cuadros dolorosos craneofaciales paroxísticos extremos con semiología y terapias de elección muy específicas",
    svg: null,
    algoTitle: "Diferencial y Manejo de Cefalea en Racimos y Neuralgia del Trigémino",
    diagram: null,
    contexto: "La cefalea en racimos (Cluster headache) y la neuralgia del trigémino son dos de las afecciones más intensamente dolorosas de toda la medicina. Mientras que el cluster es una cefalea trigémino-autonómica de predominio masculino caracterizada por crisis de 15 a 180 minutos con agitación psicomotora y cortejo autonómico (Horner transitorio, rinorrea, lagrimeo) que responde de forma electiva a Oxígeno al 100% y Sumatriptán SC, la neuralgia del trigémino consiste en paroxismos lancinantes ultra-breves de segundos desencadenados por roce cutáneo en ramas V2-V3, cuyo tratamiento de primera línea indiscutido es la Carbamazepina.",
    contentSections: [
      {
            "subhead": "1. Cefalea en Racimos: Fisiopatología Trigeminoautonómica, Semiología del Ataque y Rescate con Oxígeno 100%",
            "paragraphs": [
                  "La <strong>cefalea en racimos (cluster headache o cefalea de Horton)</strong> es el prototipo de las cefaleas trigémino-autonómicas (TACs). Su fisiopatología radica en una disfunción del marcapasos biológico del <strong>hipotálamo posterior</strong>, con activación refleja de la vía eferente parasimpática craneal a través del ganglio esfenopalatino y del complejo trigeminocervical.",
                  "Afecta predominantemente a <strong>varones jóvenes y de mediana edad (relación hombre:mujer de 3-4:1)</strong>, con una altísima tasa de tabaquismo activo (> 80%). Se caracteriza por una marcada periodicidad circadiana y circanual: los ataques ocurren a la misma hora del día o de la noche (frecuentemente despertando al paciente 1-2 horas después de dormirse, en fase de sueño REM) durante períodos activos o \"racimos\" que duran de 2 a 12 semanas, seguidos de remisiones asintomáticas de meses o años.",
                  "El dolor es <strong>estrictamente unilateral, peri o retroorbitario y temporal</strong>, de cualidad taladrante o lacerante y de intensidad atroz (descrita clásicamente como \"cefalea suicida\"). Cada episodio dura entre <strong>15 y 180 minutos</strong> y se acompaña obligatoriamente de <strong>síntomas autonómicos craneales ipsilaterales al dolor</strong>: inyección conjuntival, lagrimeo profuso, rinorrea o congestión nasal, edema palpebral, y un <em>síndrome de Horner ipsilateral transitorio</em> (ptosis y miosis reactiva). A diferencia de la migraña, el paciente con cluster experimenta una profunda <strong>agitación psicomotora</strong>: no tolera acostarse, deambula inquieto, se balancea o se golpea la cabeza contra superficies duras.",
                  "<strong>Tratamiento agudo de rescate:</strong> El tratamiento abortivo de primera línea es la inhalación de <strong>Oxígeno medicinal al 100% mediante mascarilla con reservorio a alto flujo (12 a 15 Litros/minuto) durante 15 a 20 minutos</strong> en posición sentada, el cual yugula la crisis en más del 70% de los casos en menos de 15 minutos sin toxicidad farmacológica. Se asocia a <strong>Sumatriptán 6 mg subcutáneo</strong> (o Zolmitriptán 5 mg spray nasal). Los analgésicos comunes, opioides y triptanes orales son totalmente inútiles debido a su lenta absorción.",
                  "<strong>Profilaxis:</strong> El fármaco de elección para la prevención de mantenimiento es el <strong>Verapamilo</strong> (240 a 960 mg/día VO), requiriendo control periódico con electrocardiograma por riesgo de bloqueo AV o bradicardia. Como terapia puente de transición rápida mientras se titula el verapamilo se emplea <strong>Prednisona oral</strong> (60-80 mg/día por 5-7 días con pauta descendente) o bloqueo del nervio occipital mayor con anestésicos locales y corticoides."
            ]
      },
      {
            "subhead": "2. Neuralgia del Trigémino Clásica vs Secundaria: Compresión Vascular y Zonas Gatillo",
            "paragraphs": [
                  "La <strong>neuralgia del trigémino (tic douloureux)</strong> se caracteriza por crisis paroxísticas de dolor facial unilateral de carácter <strong>lancinante, fulgurante o eléctrico (\"como un choque de alto voltaje\")</strong>, de intensidad máxima instantánea y de duración <strong>ultra-breve: fracciones de segundo a máximo 2 minutos</strong>.",
                  "El dolor se limita rigurosamente a la distribución sensitiva de una o más ramas del V par craneal, afectando predominantemente a la <strong>segunda rama (V2 - nervio maxilar) y tercera rama (V3 - nervio mandibular)</strong>; el compromiso aislado de la primera rama (V1 - oftálmica) ocurre en menos del 5% de los casos y obliga a sospechar etiología secundaria.",
                  "El sello diagnóstico distintivo es su desencadenamiento por estímulos táctiles o mecánicos inocuos aplicados sobre <strong>\"zonas gatillo\" (trigger zones)</strong> cutáneas o mucosas: lavarse la cara, afeitarse, cepillarse los dientes, hablar, masticar, tragar, sonreír o incluso sentir una brisa de aire frío. Entre cada paroxismo existe un período refractario transitorio donde el estímulo no genera dolor, y el paciente permanece completamente asintomático. Durante la crisis, el paciente adopta una conducta de <em>inmovilidad facial absoluta</em> (miedo a tocarse o hablar), contrastando frontalmente con la agitación motora del cluster.",
                  "<strong>Etiología:</strong> La forma <em>clásica o idiopática</em> se debe a una <strong>compresión neurovascular</strong> de la raíz sensitiva del nervio trigémino en su zona de entrada al puente (root entry zone) por un bucle arterial ectásico aberrante, con mayor frecuencia la <strong>arteria cerebelosa superior</strong>, produciendo desmielinización focal y transmisión efáptica (crosstalk axonal patológico). La forma <em>secundaria</em> se asocia a placas desmielinizantes de <strong>Esclerosis Múltiple</strong> (sospechar en mujeres jóvenes con neuralgia bilateral del trigémino) o a tumores del ángulo pontocerebeloso (neurinomas del acústico, meningiomas)."
            ]
      },
      {
            "subhead": "3. Diagnóstico Diferencial Riguroso, Tratamiento Profiláctico y Abordaje Quirúrgico",
            "paragraphs": [
                  "El diagnóstico diferencial entre cluster y neuralgia del trigémino (véase Tabla 10.7) se fundamenta en la duración del dolor (45 min vs segundos), los síntomas autonómicos (presentes en cluster, ausentes en trigémino), el comportamiento motor (inquietud psicomotora vs inmovilidad) y los gatillantes (alcohol vs zonas gatillo mecánicas). Otras cefaleas trigeminoautonómicas incluyen la <em>hemicránea paroxística</em> (ataques de 2 a 30 minutos, más frecuente en mujeres, con respuesta absoluta y diagnóstica a la <strong>Indometacina</strong>) y el síndrome <em>SUNCT/SUNA</em> (ataques de segundos con inyección conjuntival y lagrimeo prominente).",
                  "<strong>Tratamiento farmacológico de la Neuralgia del Trigémino:</strong> Los analgésicos convencionales, AINEs y opioides carecen de toda eficacia. El fármaco de primera línea absoluto es la <strong>Carbamazepina (200 a 1.200 mg/día VO)</strong>, la cual estabiliza las membranas axonales al bloquear los canales de sodio dependientes de voltaje. Logra alivio inicial en más del 80% de los pacientes. <em>Controles obligatorios:</em> Hemograma seriado (riesgo de agranulocitosis o anemia aplásica) y electrolitos plasmáticos (riesgo de hiponatremia severa por SIADH). Como alternativa con mejor tolerabilidad se utiliza <strong>Oxcarbazepina</strong> (600 a 1.800 mg/día). Fármacos de segunda línea incluyen Baclofeno, Lamotrigina y Gabapentina.",
                  "<strong>Tratamiento quirúrgico:</strong> En pacientes con neuralgia clásica refractaria al tratamiento farmacológico o con intolerancia severa a la carbamazepina, la técnica de elección con fines curativos es la <strong>Descompresión Microvascular de la fosa posterior (Cirugía de Jannetta)</strong>: craneotomía retrosigmoidea que separa el asa vascular del nervio trigémino interponiendo un parche de teflón, con una tasa de éxito superior al 80-90% preservando la sensibilidad facial. En pacientes de edad avanzada o con alto riesgo quirúrgico se opta por técnicas percutáneas ablativas (rizotomía por radiofrecuencia o compresión con balón de Fogarty del ganglio de Gasser) o radiocirugía estereotáctica con Gamma Knife."
            ]
      }
],
    table: {
      "title": "Diagnóstico Diferencial Integral: Cefalea en Racimos (Cluster) vs Neuralgia del Trigémino",
      "headers": [
            "Parámetro Clínico",
            "Cefalea en Racimos / Cluster (ICHD-3 3.1)",
            "Neuralgia del Trigémino Clásica (ICHD-3 13.1.1)"
      ],
      "rows": [
            [
                  "Demografía y factores de riesgo",
                  "Predominio masculino marcado (varones 20-50 años; relación 3-4:1); > 80% fumadores",
                  "Predominio femenino (relación 2:1); adultos mayores (> 50-60 años); bilateral en esclerosis múltiple"
            ],
            [
                  "Duración de cada ataque",
                  "15 a 180 minutos de dolor continuo insoportable",
                  "Fracciones de segundo a máximo 2 minutos (paroxismos ultra-breves en salvas)"
            ],
            [
                  "Localización topográfica",
                  "Estrictamente unilateral; peri y retroorbitaria, temporal (\"detrás del ojo\")",
                  "Estrictamente unilateral; ramas V2 (maxilar) y/o V3 (mandibular) del trigémino; V1 excepcional (< 5%)"
            ],
            [
                  "Carácter e intensidad del dolor",
                  "Taladrante, penetrante, atroz, continuo (\"cefalea suicida\")",
                  "Punzante, lancinante, como \"corriente o choque eléctrico de alto voltaje\""
            ],
            [
                  "Síntomas autonómicos craneales",
                  "OBLIGATORIOS ipsilaterales: ptosis, miosis (Horner transitorio), lagrimeo, inyección conjuntival, rinorrea",
                  "AUSENTES; si existen síntomas autonómicos notorios obliga a descartar SUNCT o masa compresiva"
            ],
            [
                  "Factores gatillantes",
                  "Consumo de alcohol (precipita crisis en minutos durante racimo), siestas diurnas",
                  "Estímulos táctiles inocuos en zonas gatillo: lavarse cara, afeitarse, cepillarse dientes, masticar, viento"
            ],
            [
                  "Comportamiento motor del paciente",
                  "Agitación psicomotora extrema: paciente inquieto, camina, se balancea, golpea la cabeza",
                  "Inmovilidad facial absoluta: miedo paroxístico a gesticular, hablar o comer (\"facies congelada\")"
            ],
            [
                  "Patrón temporal / Ritmo",
                  "Periodicidad circadiana y circanual: misma hora (típico nocturno en sueño REM); racimos de semanas",
                  "Múltiples crisis diarias erráticas sin ritmo circadiano fijo; períodos de remisión de meses a años"
            ],
            [
                  "Tratamiento agudo de rescate",
                  "Oxígeno medicinal 100% por mascarilla con reservorio 12-15 L/min x 15 min + Sumatriptán 6 mg SC",
                  "Analgésicos comunes y triptanes son inútiles; en crisis severas refractarias se usa Fenitoína EV"
            ],
            [
                  "Tratamiento de profilaxis / sostén",
                  "Profilaxis de transición: Prednisona oral o bloqueo occipital. Mantenimiento: Verapamilo 240-960 mg/día",
                  "Fármaco de elección absoluto: Carbamazepina (200-1200 mg/día) u Oxcarbazepina; segunda línea: Baclofeno"
            ],
            [
                  "Tratamiento quirúrgico refractario",
                  "Estimulación del ganglio esfenopalatino o del nervio vago",
                  "Descompresión microvascular de fosa posterior (cirugía de Jannetta); rizotomía percutánea por radiofrecuencia"
            ]
      ]
},
    vignette: "Hombre de 36 años, fumador activo de 20 cigarrillos diarios, es traído al servicio de urgencia a las 02:30 de la madrugada por un cuadro de dolor facial y craneal de intensidad intolerable que lo despertó hace 40 minutos. El paciente se encuentra visiblemente angustiado, no tolera sentarse ni acostarse en la camilla y deambula agitado por el box golpeándose la sien derecha con la palma de la mano. Al examen físico destaca un dolor atroz localizado en la región periorbitaria y temporal derecha, acompañado de marcado lagrimeo, inyección conjuntival severa, rinorrea acuosa ipsilateral y ligera ptosis palpebral derecha con miosis pupilar ipsilateral. Refiere que hace dos semanas presenta este mismo dolor todas las noches aproximadamente a la misma hora.",
    explicacion: "El cuadro clínico descrito es patognomónico de una Cefalea en Racimos (Cluster headache o cefalea de Horton): paciente varón joven, fumador, con dolor periorbitario unilateral de 40 minutos de duración, que se presenta a la misma hora durante la noche, con agitación psicomotora extrema (imposibilidad de permanecer en reposo) y cortejo autonómico ipsilateral florido (lagrimeo, inyección conjuntival, rinorrea y síndrome de Horner transitorio por afección de fibras simpáticas pericarotídeas). La conducta inmediata de elección en urgencias es administrar Oxígeno medicinal al 100% a alto flujo (12 a 15 L/min) mediante mascarilla con bolsa reservorio durante 15 a 20 minutos, asociado a Sumatriptán 6 mg vía subcutánea. Está totalmente contraindicado administrar analgésicos comunes orales por inefectividad y lentitud de absorción.",
    keyPoints: [
      "La Cefalea en Racimos es una cefalea trigémino-autonómica de predominio en varones jóvenes fumadores, caracterizada por dolor periorbitario unilateral insoportable de 15 a 180 min con agitación psicomotora.",
      "El ataque de cluster asocia obligatoriamente signos autonómicos ipsilaterales: inyección conjuntival, lagrimeo, congestión/rinorrea y síndrome de Horner transitorio (ptosis y miosis).",
      "El tratamiento abortivo de primera línea para el cluster es Oxígeno al 100% en mascarilla con reservorio a 12-15 L/min por 15 min más Sumatriptán 6 mg subcutáneo; el Verapamilo es la profilaxis de mantenimiento de elección.",
      "La Neuralgia del Trigémino se caracteriza por paroxismos lancinantes ultra-breves (segundos) en territorio V2-V3, desencadenados por el roce de zonas gatillo cutáneas o mucosas, sin cortejo autonómico.",
      "El tratamiento médico de primera línea de la Neuralgia del Trigémino es la Carbamazepina (control con hemograma y natremia); la descompresión microvascular de Jannetta es la técnica quirúrgica curativa de elección."
],
    questions: [
      {
            "stem": "Un paciente de 33 años presenta dolor tipo neurálgico, recurrente e intenso, en la zona cervical alta, posterior izquierda. Suele desencadenarse al tocar la zona. Usted sospecha una neuralgia de Arnold. El tratamiento más adecuado es:",
            "options": [
                  {
                        "id": "A",
                        "text": "Tramadol"
                  },
                  {
                        "id": "B",
                        "text": "Ketoprofeno"
                  },
                  {
                        "id": "C",
                        "text": "Carbamazepina"
                  },
                  {
                        "id": "D",
                        "text": "Diazepam"
                  },
                  {
                        "id": "E",
                        "text": "Clorpromazina"
                  }
            ],
            "correcta": "C",
            "explicacion": "El paciente presenta un cuadro clínico altamente sugerente de una neuralgia de Arnold (o neuralgia occipital), caracterizado por dolor tipo neurálgico, recurrente e intenso en la zona cervical alta, posterior izquierda, que se desencadena al tocar la zona. Este tipo de dolor, descrito como agudo, punzante o eléctrico, y la presencia de alodinia (dolor al tacto) son manifestaciones típicas del dolor neuropático, resultado de la disfunción o lesión de las vías nerviosas. La neuralgia de Arnold implica la irritación o compresión de los nervios occipitales (mayor, menor o tercero), que son nervios sensitivos. Carbamazepina es un medicamento antiepiléptico que se utiliza como tratamiento de primera línea para diversas condiciones de dolor neuropático, siendo el ejemplo más clásico la neuralgia del trigémino, pero también eficaz en otras neuralgias como la occipital. Su mecanismo de acción principal consiste en el bloqueo de los canales de sodio voltaje-dependientes en las membranas neuronales. Al estabilizar estas membranas, reduce la hiperexcitabilidad de las neuronas y la descarga anormal de impulsos nerviosos que son responsables de la sensación de dolor neuropático. Por lo tanto, la elección de Carbamazepina es la más adecuada para abordar la fisiopatología subyacente de la neuralgia de Arnold. Su capacidad para modular la actividad neuronal hiperexcitable lo convierte en un fármaco específico y eficaz para el alivio del dolor neurálgico, ofreciendo un control sintomático superior en comparación con otras opciones terapéuticas para este tipo particular de dolor.",
            "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.013"
      },
      {
            "stem": "¿Cuál de las siguientes asociaciones entre cuadro clínico y patología es INCORRECTA?",
            "options": [
                  {
                        "id": "A",
                        "text": "Cefalea temporoccipital, recurrente, opresiva – Cefalea tensional"
                  },
                  {
                        "id": "B",
                        "text": "Cefalea himicránea, pulsátil, recurrente – Jaqueca"
                  },
                  {
                        "id": "C",
                        "text": "Cefalea progresiva, matinal, con signos focales – Tumor cerebral"
                  },
                  {
                        "id": "D",
                        "text": "Dolor neurálgico en la mejilla, muy intenso, de segundos de duración – Cluster"
                  },
                  {
                        "id": "E",
                        "text": "Cefalea muy intensa, de inicio súbito – hemorragia subaracnoídea"
                  }
            ],
            "correcta": "D",
            "explicacion": "La alternativa correcta es la D porque describe incorrectamente el cuadro clínico de la cefalea en racimos (Cluster). La cefalea en racimos se caracteriza por un dolor unilateral muy intenso, usualmente alrededor del ojo o en la sien, que dura entre 15 minutos y 3 horas, y se acompaña de síntomas autonómicos ipsilaterales (lagrimeo, congestión nasal, rinorrea, ptosis, miosis). En cambio, la descripción de \"dolor neurálgico en la mejilla, muy intenso, de segundos de duración\" es más característica de la neuralgia del trigémino, una condición donde el dolor se localiza en la distribución de una o más ramas del nervio trigémino y es de tipo lancinante, breve e intenso. Si bien la Guía Clínica del MINSAL para el manejo de la cefalea (disponible en su sitio web) no aborda específicamente la neuralgia del trigémino, sí describe con detalle la cefalea en racimos, enfatizando la duración y los síntomas autonómicos.",
            "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.013"
      }
]
  },

  // ==========================================================================
  // TEMA 10.8: EPILEPSIA DEL ADULTO: CLASIFICACIÓN ILAE, FÁRMACOS ANTIEPILÉPTICOS Y MONITORIZACIÓN GES (TIER 3)
  // ==========================================================================
  {
    id: "neuro-08",
    classId: "neuro-08",
    tier: 3,
    blockNum: 2,
    blockName: "Cefaleas, Síndromes Convulsivos y Epilepsia",
    topicLabel: "10.8",
    title: "Epilepsia del Adulto: Clasificación ILAE, Fármacos Antiepilépticos y Monitorización GES",
    perfilCode: "1.10.1.007",
    dx: "Específico",
    tx: "Completo",
    seg: "Realizar",
    ges: "Garantía Explícita en Salud (GES N° 28): Epilepsia no refractaria en personas de 15 años y más · Sospecha con atención médica y solicitud de EEG en ≤ 30 días, confirmación diagnóstica con especialista e inicio inmediato de FAE garantizado por canasta pública/privada.",
    reconstrucciones: "EUNACOM Diciembre 2024 (Q#140) · EUNACOM Enero 2023 (Q#143) · EUNACOM Diciembre 2019 (Q#41) · EUNACOM Diciembre 2017 (Q#133)",
    frecuencia: "Máxima rentabilidad · Pregunta obligada en todos los exámenes históricos de neurología y medicina interna",
    svg: null,
    algoTitle: "Algoritmo de Clasificación ILAE y Selección de FAE de Primera Línea",
    diagram: flow('Algoritmo de Diagnóstico y Selección de FAE en Adultos', [
      { t: 'Confirmación de Crisis Epiléptica vs Diagnósticos Diferenciales', s: 'Anamnesis a testigos · Descarte de síncope, crisis psicógena y causas metabólicas agudas', type: 'acc' },
      { t: 'Evaluación Paraclínica Integral: EEG Interictal y RM Cerebral', s: 'EEG estándar o con privación de sueño · Resonancia con protocolo de epilepsia (Garantía GES N° 28)', type: 'warn' },
      { k: 'split', q: 'Clasificación Operativa ILAE: ¿Tipo de Inicio de la Crisis?', s: 'Determinación semiológica y neurofisiológica para guiar el espectro del fármaco antiepiléptico',
        ll: 'Crisis de Inicio Focal (Con/Sin alteración de conciencia)',
        left: { t: 'FAEs de Primera Línea para Crisis Focales', s: 'Lamotrigina, Levetiracetam o Carbamazepina/Oxcarbazepina · Bloqueo de canales Na+ y SV2A', type: 'acc' },
        rl: 'Crisis de Inicio Generalizado (GTC, Mioclonías, Ausencias)',
        right: { t: 'FAEs de Amplio Espectro Obligatorios', s: 'Ácido Valproico (varones), Levetiracetam o Lamotrigina · ¡PROSCRITAS Carbamazepina y Fenitoína!', type: 'crit' }
      },
      { k: 'split', q: '¿Perfil de Seguridad: Mujer en Edad Fértil o Adulto Mayor?', s: 'Estratificación por riesgo teratogénico, interacciones farmacológicas y comorbilidades',
        ll: 'Mujer con Potencial Fértil / Embarazo',
        left: { t: 'Valproato CONTRAINDICADO (Teratogenia)', s: 'Preferir Lamotrigina o Levetiracetam + Ácido Fólico 5 mg/día pre-concepcional riguroso', type: 'crit' },
        rl: 'Adulto Mayor (> 65 a) / Polifarmacia',
        right: { t: 'Evitar Inductores Enzimáticos CYP450', s: 'Preferir Levetiracetam o Lamotrigina en dosis bajas · Evitar Fenitoína/Carbamazepina', type: 'dec' }
      },
      { t: 'Titulación Lenta, Monitorización Periódica y Adherencia', s: 'Titular lentamente para prevenir Stevens-Johnson (Lamotrigina) · Control hematológico y hepático', type: 'acc' }
    ]),
    contexto: "La epilepsia es una de las enfermedades neurológicas crónicas más prevalentes en Chile y una patología prioritaria cubierta por las Garantías Explícitas en Salud (GES N° 28). La definición operacional de la Liga Internacional contra la Epilepsia (ILAE) establece que el diagnóstico se confirma con: 1) Al menos dos crisis no provocadas separadas por más de 24 horas; o 2) Una sola crisis no provocada cuando el riesgo de recurrencia a 10 años es superior al 60% (respaldado por un EEG epileptiforme o una lesión estructural causal en la neuroimagen). El éxito terapéutico exige dominar la clasificación de las crisis (focales vs generalizadas), seleccionar el FAE adecuado y vigilar estrictamente las contraindicaciones críticas, destacando la proscripción absoluta del ácido valproico en mujeres en edad fértil.",
    contentSections: [
      {
            "subhead": "1. Fisiopatología de la Epileptogénesis, Balance Glutamato/GABA y Clasificación ILAE 2017",
            "paragraphs": [
                  "La crisis epiléptica es la manifestación clínica originada por una <strong>descarga hipersincrónica, excesiva y anormal</strong> de una población neuronal cortical encefálica. A nivel celular, este fenómeno se produce por una ruptura del equilibrio homeostático entre la neurotransmisión excitatoria (mediada por el <strong>glutamato</strong> a través de receptores NMDA y AMPA, con entrada masiva de sodio y calcio celular) y la neurotransmisión inhibitoria (mediada por el <strong>GABA</strong> a través de receptores GABA-A, con influjo de cloro e hiperpolarización de membrana).",
                  "La clasificación operacional moderna de la ILAE (2017) abandona los términos ambiguos de \"parcial\" o \"gran mal\" y categoriza las crisis según su <strong>tipo de inicio</strong> (véase Algoritmo 10.8 y Tabla 10.8):",
                  "• <strong>Crisis de Inicio Focal:</strong> Se originan en redes neuronales limitadas a un solo hemisferio cerebral. Se subdividen según el estado de la conciencia en: 1) <em>Focal con conciencia preservada (antigua focal simple):</em> el paciente permanece consciente, interactivo y recuerda el evento; 2) <em>Focal con alteración de la conciencia (antigua focal compleja):</em> cursa con desconexión del medio, mirada extraviada, amnesia del episodio y con frecuencia automatismos oromasticatorios (chupeteo, deglución) o motores bizarros. Asimismo, pueden ser de inicio motor (clónicas, mioclónicas, atónicas) o no motor (sensitivas, sensoriales, autonómicas o psíquicas con déjà vu o auras epigástricas ascendentes).",
                  "• <strong>Crisis Focal con evolución a Tónico-Clónica Bilateral (antigua secundaria generalizada):</strong> Se inicia como una crisis focal que posteriormente se propaga y sincroniza bilateralmente en toda la corteza.",
                  "• <strong>Crisis de Inicio Generalizado:</strong> Se originan en un punto de la corteza y activan de manera rápida, sincrónica y simultánea las redes neuronales distribuidas bilateralmente en ambos hemisferios. Cursan siempre con compromiso de conciencia desde el inicio. Se dividen en: 1) <em>Motoras:</em> tónico-clónicas generalizadas (GTC), mioclónicas, clónicas, tónicas y atónicas; 2) <em>No motoras (Ausencias):</em> ausencias típicas (detención motora y desconexión breve de 5 a 15 segundos sin caída ni confusión postictal, con complejos punta-onda lenta a 3 Hz en el EEG), ausencias atípicas y mioclónicas.",
                  "• <strong>Crisis de Inicio Desconocido:</strong> Cuando no es posible determinar el inicio por falta de testigos (p. ej., crisis ocurrida durante el sueño)."
            ]
      },
      {
            "subhead": "2. Diagnóstico Paraclínico: Electroencefalograma (EEG), Neuroimagen y Marco Legal GES N° 28",
            "paragraphs": [
                  "El diagnóstico de epilepsia es fundamentalmente clínico, sustentado en una anamnesis exhaustiva a testigos presenciales. Los estudios complementarios tienen como objetivos confirmar la epileptogenicidad, clasificar el síndrome y determinar su etiología:",
                  "• <strong>Electroencefalograma (EEG):</strong> Es el examen neurofisiológico de elección. Su rol es pesquisar <em>actividad epileptiforme interictal</em> (puntas, ondas agudas, complejos punta-onda). Un EEG interictal de rutina puede ser normal en el 50% de los pacientes epilépticos; ante alta sospecha con EEG normal, debe solicitarse un <strong>EEG con privación de sueño</strong> o con maniobras de activación (hiperventilación y fotoestimulación intermitente), o una monitorización prolongada (video-EEG). <em>Regla de oro:</em> Un EEG normal no descarta epilepsia, ni un EEG inespecífico con ondas lentas confirma la enfermedad.",
                  "• <strong>Neuroimagen de Alta Resolución:</strong> La <strong>Resonancia Magnética (RM) de encéfalo con protocolo de epilepsia</strong> (cortes coronales finos en T1, T2 y FLAIR perpendiculares al eje del hipocampo) es el método de elección superior para detectar lesiones estructurales epileptogénicas sutiles: <strong>esclerosis mesial temporal (atrofia e hiperintensidad hipocámpica)</strong>, malformaciones del desarrollo cortical (displasias corticales focales), cavernomas, tumores gliales de bajo grado y secuelas isquémicas o traumáticas. El TAC de encéfalo se reserva para la urgencia inmediata.",
                  "• <strong>Marco de Garantías Explícitas en Salud (GES N° 28):</strong> En Chile, toda persona de 15 años o más con sospecha de epilepsia no refractaria tiene acceso garantizado por ley a confirmación diagnóstica con especialista y realización de EEG en un plazo máximo de <strong>30 días</strong> desde la derivación, así como inicio inmediato del tratamiento farmacológico antiepiléptico de por vida cubierto por la canasta GES."
            ]
      },
      {
            "subhead": "3. Farmacología Antiepiléptica: Mecanismos de Acción, Toxicidades Graves y Reacciones Idiosincráticas",
            "paragraphs": [
                  "El conocimiento pormenorizado de las toxicidades graves de los Fármacos Antiepilépticos (FAEs) constituye una de las áreas más evaluadas en el EUNACOM (véase Tabla de Toxicidades 10.8):",
                  "• <strong>Ácido Valproico (Divalproato de Sodio):</strong> Modulador de amplio espectro que bloquea canales de Na+ y estimula la vía GABAérgica. Es el fármaco más potente para crisis generalizadas idiopáticas (tónico-clónicas, mioclonías y ausencias). <em>Toxicidad crítica:</em> 1) <strong>Altamente teratogénico:</strong> genera defectos del tubo neural (espina bífida en 1-2%), cardiopatías congénitas y disminución del coeficiente intelectual con riesgo aumentado de trastorno del espectro autista; 2) <strong>Hepatotoxicidad aguda fulminante idiosincrática</strong> (mayor riesgo en menores de 2 años con metabolopatías); 3) Pancreatitis aguda necrotizante; 4) Aumento marcado de peso, alopecia y trombocitopenia dosis-dependiente.",
                  "• <strong>Carbamazepina:</strong> Bloqueador potente de canales de sodio dependientes de voltaje. Fármaco clásico de elección para crisis focales. <em>Toxicidad crítica:</em> 1) <strong>Síndrome de Stevens-Johnson / Necrólisis Epidérmica Tóxica (NET)</strong> (asociado fuertemente al alelo HLA-B*1502 en poblaciones asiáticas); 2) <strong>Hiponatremia severa</strong> por secreción inapropiada de hormona antidiurética (SIADH), especialmente en adultos mayores; 3) Aplasia medular, leucopenia y agranulocitosis; 4) <strong>Inducción enzimática potente de citocromos hepáticos (CYP3A4)</strong>, disminuyendo los niveles de anticonceptivos orales, warfarina y estatinas. <em>Peligro EUNACOM:</em> ¡Empeora las crisis de ausencia y las mioclonías!",
                  "• <strong>Fenitoína (Difenilhidantoína):</strong> Bloqueador de canales de sodio con <strong>farmacocinética no lineal de saturación (Michaelis-Menten)</strong>: a concentraciones terapéuticas, la vía metabólica se satura, por lo que pequeños incrementos de dosis pueden provocar saltos bruscos y tóxicos en los niveles plasmáticos. <em>Toxicidad crónica:</em> Hiperplasia gingival masiva, hirsutismo, facies tosca, neuropatía periférica, osteomalacia por depleción de vitamina D, atrofia cerebelosa con ataxia y nistagmo irreversible, anemia megaloblástica por déficit de folato. Su rango terapéutico estrecho es de <strong>10 a 20 mcg/mL</strong>.",
                  "• <strong>Lamotrigina:</strong> Bloqueador de canales de sodio y reductor de la liberación presináptica de glutamato. Fármaco de amplio espectro. <em>Toxicidad crítica:</em> <strong>Erupción cutánea grave y síndrome de Stevens-Johnson</strong>. Para evitarlo, requiere una titulación escalonada ultra-lenta (iniciar con 25 mg/día e incrementar cada 2 semanas). <em>Interacción de oro:</em> El ácido valproico inhibe la glucuronidación de la lamotrigina, duplicando su vida media; por ende, si se coadministran, la dosis de lamotrigina DEBE reducirse a la mitad.",
                  "• <strong>Levetiracetam:</strong> Se une selectivamente a la proteína vesicular sináptica <strong>SV2A</strong>, inhibiendo la exocitosis de vesículas de glutamato. Fármaco moderno de amplio espectro de primera línea. Excreción renal predominante sin metabolización por citocromo P450 (nulas interacciones farmacológicas). <em>Efectos adversos principales:</em> <strong>Alteraciones neuropsiquiátricas y conductuales</strong> (irritabilidad extrema, hostilidad, agresividad, depresión mayor, ideación suicida y psicosis reactiva)."
            ]
      },
      {
            "subhead": "4. Selección Terapéutica de Primera Línea en Poblaciones Especiales (Mujer Fértil y Adulto Mayor)",
            "paragraphs": [
                  "La elección del fármaco antiepiléptico se personaliza según el tipo de crisis, la edad, el sexo y las comorbilidades (véase Matriz Terapéutica 10.8):",
                  "• <strong>Crisis de Inicio Focal (con o sin generalización secundaria):</strong> Fármacos de primera línea son <strong>Lamotrigina</strong>, <strong>Levetiracetam</strong> o <strong>Carbamazepina</strong> (u Oxcarbazepina). La fenitoína ha quedado relegada a segunda o tercera línea por sus efectos adversos a largo plazo.",
                  "• <strong>Crisis Generalizadas Idiopáticas (Epilepsia Mioclónica Juvenil, Ausencias, GTC):</strong> El fármaco más efectivo es el <strong>Ácido Valproico</strong> en varones. Como alternativa moderna de primera línea se utilizan <strong>Levetiracetam</strong> o <strong>Lamotrigina</strong>. <em>Regla de exclusión absoluta:</em> NUNCA utilizar Carbamazepina, Fenitoína, Gabapentina ni Pregabalina en crisis generalizadas idiopáticas, pues bloquean canales de sodio de manera estrecha y agravan severamente las ausencias y mioclonías.",
                  "• <strong>Mujer en Edad Fértil y Planificación del Embarazo:</strong> El <strong>Ácido Valproico está FORMALMENTE CONTRAINDICADO</strong> debido a su elevadísimo índice teratogénico. Los fármacos de elección son <strong>Lamotrigina</strong> o <strong>Levetiracetam</strong> en monoterapia y a la menor dosis efectiva posible. Es mandatorio suplementar con <strong>Ácido Fólico en dosis altas (5 mg/día VO)</strong> desde al menos 3 meses antes de la concepción y durante todo el primer trimestre.",
                  "• <strong>Adulto Mayor (> 65 años) y Polifarmacia:</strong> El cerebro senescente tiene mayor sensibilidad a efectos sedantes y menor masa renal/hepática. Deben <strong>evitarse estrictamente los inductores enzimáticos potentes (Carbamazepina, Fenitoína, Fenobarbital)</strong> por riesgo de interacciones múltiples con anticoagulantes y fármacos cardiovasculares, hiponatremia y osteoporosis. Los fármacos de elección son <strong>Levetiracetam</strong> (iniciar a dosis bajas como 250-500 mg c/12 h y ajustar por filtración glomerular) o <strong>Lamotrigina</strong>."
            ]
      },
      {
            "subhead": "5. Monitorización Plasmática, Interacciones Farmacológicas y Definición de Epilepsia Refractaria",
            "paragraphs": [
                  "La monitorización de niveles plasmáticos de FAEs no es necesaria de rutina para todos los medicamentos, pero resulta obligatoria en: 1) <strong>Fenitoína</strong> (por su cinética de saturación no lineal, rango 10-20 mcg/mL); 2) Sospecha fundada de toxicidad clínica o sobredosis; 3) Sospecha de falta de adherencia al tratamiento; y 4) Embarazo (los niveles de Lamotrigina caen drásticamente en el segundo y tercer trimestre por hiperfiltración y aumento de glucuronidación hepática inducida por estrógenos, requiriendo monitorización y alza de dosis para prevenir crisis).",
                  "<strong>Definición de Epilepsia Refractaria (Farmacorresistente):</strong> La ILAE define la epilepsia refractaria como la <em>falla en lograr el control sostenido de crisis tras el ensayo adecuado de al menos DOS fármacos antiepilépticos de primera línea bien tolerados, apropiadamente seleccionados para el tipo de crisis y utilizados en monoterapia o combinación en dosis terapéuticas plenas</em>.",
                  "Todo paciente que cumpla criterios de epilepsia farmacorresistente debe ser derivado a un centro terciario especializado con Unidad de Epilepsia para evaluación prequirúrgica (Video-EEG prolongado, RM 3T con volumetría hipocámpica, PET cerebral y evaluación neuropsicológica) para determinar si es candidato a <strong>cirugía de resección epileptogénica</strong> (como lobectomía temporal anterior o lesionectomía) o a terapias paliativas de neuroestimulación (estimulador del nervio vago - VNS)."
            ]
      }
],
    table: {
      "title": "Clasificación Operativa ILAE 2017 de las Crisis Epilépticas: Semiología y Correlato Neuroanatómico",
      "headers": [
            "Categoría ILAE",
            "Subtipo Clínico",
            "Semiología Cardinal y Nivel de Conciencia",
            "Hallazgos Clave de Examen / EEG"
      ],
      "rows": [
            [
                  "Inicio Focal: Conciencia Preservada",
                  "Focal Motora o Sensitiva (antigua Focal Simple)",
                  "Conciencia intacta; interactúa y recuerda. Paroxismos motores clónicos focales (marcha jacksoniana), parestesias o auras",
                  "Descargas focales limitadas a corteza somatotópica contralateral"
            ],
            [
                  "Inicio Focal: Conciencia Alterada",
                  "Focal Discognitiva (antigua Focal Compleja)",
                  "Desconexión del medio, mirada fija, amnesia del evento y automatismos oromasticatorios (chupeteo) o manuales",
                  "Ondas agudas focales de origen temporal anterior o frontobasal"
            ],
            [
                  "Inicio Focal con progresión Bilateral",
                  "Focal a Tónico-Clónica Bilateral",
                  "Inicia con semiología focal motora o sensitiva, propagándose rápidamente a contracción tónica y clonías bilaterales",
                  "Foco epileptiforme inicial que se propaga y sincroniza bilateralmente"
            ],
            [
                  "Inicio Generalizado: Motoras Mayores",
                  "Tónico-Clónica Generalizada (GTC)",
                  "Pérdida brusca de conciencia, grito ictal, fase tónica (10-20 s) con cianosis, fase clónica simétrica (30-60 s) y relajación esfínteres",
                  "Paroxismos bilaterales simétricos y sincrónicos de polipunta-onda generalizada"
            ],
            [
                  "Inicio Generalizado: No Motoras",
                  "Crisis de Ausencia Típicas",
                  "Detención motora y del habla súbita (5-15 s) con mirada fija; sin caída ni confusión postictal; retoma actividad previa de inmediato",
                  "Patognomónico: descargas generalizadas de punta-onda a 3 Hz sincrónicas"
            ],
            [
                  "Inicio Generalizado: Motoras Breves",
                  "Crisis Mioclónicas",
                  "Sacudidas musculares bruscas e involuntarias bilaterales breves (\"sacudida eléctrica\") en brazos, matinales al despertar",
                  "Polipunta-onda generalizada; sello de la Epilepsia Mioclónica Juvenil"
            ]
      ]
},
    severityTable: {
      "title": "Fármacos Antiepilépticos (FAEs): Mecanismos, Toxicidades Graves y Reacciones Adversas Críticas",
      "headers": [
            "Fármaco Antiepiléptico",
            "Mecanismo de Acción Principal",
            "Efectos Adversos Graves / Reacciones Idiosincráticas",
            "Monitoreo Obligatorio y Trampas EUNACOM"
      ],
      "rows": [
            [
                  "Ácido Valproico",
                  "Bloqueo canales Na+, aumento síntesis y disminución degradación de GABA",
                  "Teratogenicidad severa (espina bífida 1-2%, cardiopatías, autismo, bajo CI); hepatotoxicidad fulminante; pancreatitis; trombocitopenia",
                  "FORMALMENTE PROSCRITO en mujeres en edad fértil. Monitorear hemograma y perfil hepático."
            ],
            [
                  "Carbamazepina",
                  "Bloqueo selectivo de canales de sodio voltaje-dependientes",
                  "Síndrome de Stevens-Johnson / NET (asociado a HLA-B*1502); hiponatremia severa por SIADH; agranulocitosis; inducción de CYP450",
                  "Monitorear natremia y hemograma. ¡Empeora crisis de ausencia y mioclonías!"
            ],
            [
                  "Fenitoína",
                  "Bloqueo selectivo de canales de sodio voltaje-dependientes",
                  "Cinética no lineal (saturación Michaelis-Menten); hiperplasia gingival; hirsutismo; atrofia cerebelosa irreversible con ataxia; anemia megaloblástica",
                  "Nivel terapéutico 10-20 mcg/mL. EV nunca en suero glucosado (cristaliza). Infusión lenta con monitor ECG por arritmias."
            ],
            [
                  "Lamotrigina",
                  "Bloqueo canales Na+ y disminución de liberación presináptica de glutamato",
                  "Rash cutáneo severo y Síndrome de Stevens-Johnson (riesgo se duplica si se coadministra con valproato o titulación rápida)",
                  "1ª elección en mujer fértil y embarazo. Titulación ultra-lenta obligatoria. Reducir dosis a la mitad si toma valproato."
            ],
            [
                  "Levetiracetam",
                  "Unión selectiva a la proteína de vesícula sináptica SV2A",
                  "Trastornos psiquiátricos y conductuales: irritabilidad extrema, hostilidad, agresividad, depresión mayor, psicosis",
                  "1ª elección en adultos mayores y polimedicados (nulas interacciones CYP450). Ajustar estrictamente por función renal."
            ]
      ]
},
    treatmentTable: {
      "title": "Matriz de Selección Terapéutica de Primera Línea según Tipo de Crisis y Perfil del Paciente (Guías GES)",
      "headers": [
            "Escenario Clínico / Perfil",
            "Fármaco de Elección (1ª Línea)",
            "Dosis Habitual y Titulación",
            "Fármacos Proscritos o Contraindicados y Justificación"
      ],
      "rows": [
            [
                  "Crisis de Inicio Focal (adulto estándar)",
                  "Lamotrigina o Levetiracetam o Carbamazepina",
                  "Lamotrigina 100-200 mg/día; Levetiracetam 1000-2000 mg/día; Carbamazepina 400-800 mg/día",
                  "Evitar Fenitoína como primera línea por cinética compleja y toxicidad acumulativa a largo plazo."
            ],
            [
                  "Crisis Generalizadas Idiopáticas (varones)",
                  "Ácido Valproico",
                  "500 a 1500 mg/día VO (fraccionado c/12 h)",
                  "Contraindicadas Carbamazepina y Fenitoína: agravan severamente ausencias y mioclonías."
            ],
            [
                  "Mujer en Edad Fértil o Embarazo",
                  "Lamotrigina o Levetiracetam + Ácido Fólico 5 mg/día",
                  "Lamotrigina 100-200 mg/día (titular muy lento); Levetiracetam 1000-1500 mg/día",
                  "TOTALMENTE PROSCRITO el Ácido Valproico por riesgo teratogénico mayor (espina bífida, TEA, bajo CI)."
            ],
            [
                  "Adulto Mayor (> 65 años) / Polifarmacia",
                  "Levetiracetam o Lamotrigina",
                  "Levetiracetam 500-1000 mg/día (ajustar por VFG); Lamotrigina 50-100 mg/día",
                  "Evitar Carbamazepina y Fenitoína por inducción de citocromo P450, hiponatremia y deterioro cognitivo."
            ],
            [
                  "Crisis de Ausencia Puras",
                  "Etosuximida (elección) o Ácido Valproico",
                  "Etosuximida 250 mg c/12 h; Ácido Valproico 500 mg c/12 h",
                  "Contraindicadas Carbamazepina, Fenitoína y Tiagabina: pueden precipitar un status de ausencia."
            ]
      ]
},
    vignette: "Mujer de 26 años, recién casada y con deseos de fertilidad a corto plazo, portadora de epilepsia generalizada idiopática diagnosticada a los 16 años, actualmente asintomática sin crisis desde hace 3 años bajo tratamiento con Ácido Valproico 500 mg cada 12 horas. Consulta a su médico de atención primaria en policlínico para planificar su embarazo y solicitar recetas. Al examen neurológico se encuentra completamente normal y su último control de función hepática y hemograma resulta estrictamente fisiológico.",
    explicacion: "El Ácido Valproico es el fármaco antiepiléptico con mayor potencial teratogénico conocido, asociándose a un riesgo del 1-2% de defectos del tubo neural (espina bífida, mielomeningocele), malformaciones cardíacas, anomalías craneofaciales y deterioro neurocognitivo a largo plazo con riesgo triplicado de trastorno del espectro autista en la descendencia. En una mujer en edad fértil que planifica embarazo, el valproato está formalmente contraindicado. La conducta obligatoria y correcta es rotar de manera programada y gradual a un FAE de primera línea con excelente perfil de seguridad materno-fetal, siendo la Lamotrigina o el Levetiracetam las alternativas de elección, titulándolos lentamente mientras se retira el valproato, e indicando simultáneamente suplementación con Ácido Fólico en dosis altas (5 mg/día) desde al menos 3 meses antes de la concepción.",
    keyPoints: [
      "La ILAE clasifica las crisis según su inicio en Focales (conciencia preservada o alterada) y Generalizadas (motoras y no motoras/ausencias).",
      "El GES N° 28 garantiza confirmación diagnóstica con especialista y EEG en ≤ 30 días, y tratamiento farmacológico gratuito de por vida.",
      "La Lamotrigina y el Levetiracetam son los FAEs de elección en mujeres en edad fértil y embarazo; el Ácido Valproico está formalmente proscrito por teratogenicidad mayor.",
      "La Carbamazepina y la Fenitoína bloquean canales de sodio de forma estrecha y están contraindicadas en crisis generalizadas idiopáticas (empeoran ausencias y mioclonías).",
      "El Levetiracetam es ideal en adultos mayores y polimedicados por nula interacción con citocromo P450, pero puede inducir alteraciones psiquiátricas e irritabilidad.",
      "La epilepsia refractaria se define como la persistencia de crisis tras el ensayo adecuado de 2 FAEs tolerados y apropiados, obligando a derivar a cirugía de epilepsia."
],
    questions: [
      {
            "stem": "Un niño de 3 años presenta una crisis convulsiva tónico clónica, en relación a un alza térmica hasta 39,6°C. Al examen físico está en buenas condiciones, con presión y pulso normal, faringe eritematosa, sin signos neurológicos focales. La conducta más adecuada es:",
            "options": [
                  {
                        "id": "A",
                        "text": "Indicar antipiréticos en relación a las alzas térmica, sin necesidad de anticonvulsivantes ni de estudio adicional"
                  },
                  {
                        "id": "B",
                        "text": "Indicar paracetamol y diazepam durante las alzas térmicas"
                  },
                  {
                        "id": "C",
                        "text": "Solicitar electroencefalograma"
                  },
                  {
                        "id": "D",
                        "text": "Solicitar hemograma, hemocultivo, exámenes de orina y estudio de líquido cefalorraquídeo"
                  },
                  {
                        "id": "E",
                        "text": "Solicitar resonancia magnética nuclear e iniciar carbamazepina"
                  }
            ],
            "correcta": "A",
            "explicacion": "La pregunta describe un caso clásico de una crisis convulsiva febril simple en un niño de 3 años. Las características clave son: edad entre 6 meses y 5 años, crisis convulsiva generalizada (tónico-clónica) asociada a un alza térmica (sin evidencia de infección del sistema nervioso central), corta duración (implícito al estar \"en buenas condiciones\" y ser un caso típico), y ausencia de signos neurológicos focales o antecedente de problemas neurológicos previos. El examen físico general, con una faringe eritematosa, sugiere una infección viral común como causa de la fiebre. En este escenario, la conducta más adecuada es indicar antipiréticos para el manejo sintomático de la fiebre (mejorar el confort del niño, no para prevenir futuras convulsiones febriles, ya que la evidencia no respalda esta idea) y ofrecer tranquilidad a los padres. No se necesitan anticonvulsivantes de forma profiláctica o crónica para las crisis febriles simples, ya que los riesgos de los fármacos superan los beneficios en la prevención de la recurrencia o el desarrollo de epilepsia. Tampoco se requiere un estudio adicional exhaustivo como EEG, RMN o punciones lumbares en el contexto de una crisis febril simple, salvo que existan características atípicas (crisis prolongada, focal, recurrencia en menos de 24h, edad fuera del rango, signos neurológicos focales, sospecha de infección del SNC). Por lo tanto, la opción A se alinea con las guías de manejo de la crisis febril simple, que enfatizan la identificación y tratamiento de la causa de la fiebre, el uso de antipiréticos para el confort, y la abstención de estudios diagnósticos invasivos o medicación antiepiléptica a largo plazo en ausencia de banderas rojas.",
            "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.007"
      },
      {
            "stem": "Un hombre de 35 años, sin patología previa, presenta cuadro caracterizado por movimientos repetitivos involuntarios de la mano derecha, seguidos de desviación de la mirada a derecha y convulsión tónico clónica de 3 minutos de duración. Niega uso de fármacos y drogas. Al examen físico se aprecia un paciente en buenas condiciones, sin alteraciones en el examen neurológico. La conducta más adecuada es:",
            "options": [
                  {
                        "id": "A",
                        "text": "Iniciar carbamazepina y solicitar RMN de cerebro"
                  },
                  {
                        "id": "B",
                        "text": "Iniciar fenitoína, sin necesidad de realizar exámenes"
                  },
                  {
                        "id": "C",
                        "text": "Solicitar electroencefalograma y decidir manejo según el resultado"
                  },
                  {
                        "id": "D",
                        "text": "Solicitar TAC de cerebro, sin contraste"
                  },
                  {
                        "id": "E",
                        "text": "Enviar a domicilio, sin necesidad de mayor estudio y reconsultar sólo en caso de repetirse el cuadro"
                  }
            ],
            "correcta": "A",
            "explicacion": "La respuesta correcta es la a) Iniciar carbamazepina y solicitar RMN de cerebro. El paciente presenta una crisis convulsiva con características focales claras (movimientos repetitivos de la mano derecha, desviación de la mirada a derecha) que luego se generaliza a una crisis tónico-clónica. Este cuadro clínico se define como una \"crisis de inicio focal con generalización secundaria\" y es altamente sugestivo de epilepsia focal, aunque sea la primera vez que ocurre (primera crisis no provocada). La conducta más adecuada frente a una primera crisis convulsiva con características focales es iniciar el estudio etiológico de manera exhaustiva y considerar el inicio de tratamiento antiepiléptico (MAE) si el riesgo de recurrencia es alto o si la crisis es de alto impacto. En este caso, la carbamazepina es un fármaco antiepiléptico de primera línea para crisis focales. La Resonancia Magnética Nuclear (RMN) de cerebro es el estudio de imagen de elección para investigar la etiología de las crisis focales, ya que permite detectar lesiones estructurales sutiles (tumores, malformaciones corticales, esclerosis mesial temporal, cavernomas, etc.) que no serían visibles en una tomografía computarizada (TAC) o que requieren un contraste específico. Es fundamental identificar la causa subyacente para un manejo adecuado y pronóstico. La combinación de iniciar un fármaco efectivo para crisis focales y solicitar el estudio de imagen más sensible para su etiología convierte a esta opción en la más completa y apropiada para el manejo inicial de este paciente. Dada la juventud del paciente y la ausencia de patología previa, la búsqueda de una causa estructural es prioritaria.",
            "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.007"
      },
      {
            "stem": "Un paciente VIH positivo, sin tratamiento antirretroviral, consulta al servicio de urgencias por compromiso de conciencia. La familia refiere que en las últimas semanas presento de forma progresiva dificultad para caminar, refiriendo “falta de fuerzas” en extremidad inferior derecha. Además, presentó una crisis convulsiva en una ocasión. Se solicita un TAC de cerebro para el estudio de la etiología. ¿Cuál es el hallazgo más probable de encontrar en este examen?",
            "options": [
                  {
                        "id": "A",
                        "text": "Signos de hipertensión endocraneana"
                  },
                  {
                        "id": "B",
                        "text": "TAC normal"
                  },
                  {
                        "id": "C",
                        "text": "Lesiones focales captantes de contraste en anillo"
                  },
                  {
                        "id": "D",
                        "text": "Multiples lesiones focales hipodensas de sustancia blanca"
                  },
                  {
                        "id": "E",
                        "text": "Hidrocefalia con aumento de los tamaños de los ventrículos"
                  }
            ],
            "correcta": "C",
            "explicacion": "El paciente presenta un cuadro neurológico progresivo y agudo (compromiso de conciencia, dificultad para caminar, crisis convulsiva) en el contexto de una infección por VIH sin tratamiento antirretroviral. Esta situación de inmunosupresión severa lo hace vulnerable a infecciones oportunistas del sistema nervioso central (SNC). La encefalitis por *Toxoplasma gondii* es la causa más común de lesiones intracraneales focales en pacientes con VIH avanzado que no reciben tratamiento o profilaxis adecuada. La presentación clínica de la toxoplasmosis cerebral concuerda perfectamente con el caso descrito: déficit neurológico focal (paresia en extremidad inferior derecha), crisis convulsivas y alteración del estado de conciencia. Estos síntomas apuntan a una lesión ocupante de espacio en el cerebro. En el estudio con tomografía computarizada (TAC) de cerebro, las lesiones por toxoplasmosis se caracterizan típicamente por ser lesiones focales múltiples (aunque pueden ser solitarias en un 30% de los casos), localizadas frecuentemente en los ganglios basales, el tálamo, la unión córtico-medular y la corteza cerebral. El hallazgo radiológico más característico de la toxoplasmosis cerebral, especialmente después de la administración de contraste, son las \"lesiones focales captantes de contraste en anillo\". Este patrón de realce indica la presencia de inflamación y disrupción de la barrera hematoencefálica en la periferia de la lesión, rodeando un centro necrótico. Por lo tanto, dado el cuadro clínico y el estado inmunológico del paciente, la opción \"c) Lesiones focales captantes de contraste en anillo\" representa el hallazgo más probable en el TAC de cerebro.",
            "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.007"
      },
      {
            "stem": "Un niño de 7 años, sin antecedentes de importancia, presenta una convulsión tónico clónica de 5 minutos de duración, autolimitada. Se recupera bien y al momento de la consulta se encuentra asintomático. El examen físico, incluyendo un adecuado examen neurológico es normal. El diagnóstico más probable es:",
            "options": [
                  {
                        "id": "A",
                        "text": "Convulsión febril benigna"
                  },
                  {
                        "id": "B",
                        "text": "Encefalitis herpética"
                  },
                  {
                        "id": "C",
                        "text": "Epilepsia"
                  },
                  {
                        "id": "D",
                        "text": "Tumor cerebral"
                  },
                  {
                        "id": "E",
                        "text": "Meningitis"
                  }
            ],
            "correcta": "C",
            "explicacion": "El caso clínico describe un niño de 7 años que presenta un primer episodio de convulsión tónico-clónica generalizada, sin un desencadenante aparente (como fiebre, traumatismo o infección). La convulsión fue autolimitada y el paciente tuvo una recuperación completa, encontrándose asintomático y con un examen neurológico normal al momento de la evaluación. La definición de **epilepsia** de la Liga Internacional contra la Epilepsia (ILAE) incluye la ocurrencia de al menos una crisis convulsiva no provocada. Aunque para un diagnóstico definitivo se suele requerir una segunda crisis o hallazgos en el electroencefalograma (EEG) que indiquen un alto riesgo de recurrencia, un primer evento de este tipo en un niño sano, sin fiebre y con examen normal, es la forma de presentación más común de la epilepsia. Por lo tanto, es el diagnóstico más probable a considerar y estudiar. La ausencia de fiebre y la edad del paciente (7 años) hacen muy poco probable una convulsión febril. La recuperación completa y la normalidad del examen neurológico descartan razonablemente procesos agudos y graves como meningitis o encefalitis.",
            "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.007"
      }
]
  },

  // ==========================================================================
  // TEMA 10.9: STATUS EPILÉPTICO CONVULSIVO: PROTOCOLO ESCALONADO DE RESCATE Y NEUROINTENSIVO (TIER 3)
  // ==========================================================================
  {
    id: "neuro-09",
    classId: "neuro-09",
    tier: 3,
    blockNum: 2,
    blockName: "Cefaleas, Síndromes Convulsivos y Epilepsia",
    topicLabel: "10.9",
    title: "Status Epiléptico Convulsivo: Protocolo Escalonado de Rescate y Neurointensivo",
    perfilCode: "1.10.2.018",
    dx: "Específico",
    tx: "Completo",
    seg: "Derivar",
    ges: "Urgencia Médica GES / Riesgo Vital Inmediato · Rescate de urgencia prehospitalario y hospitalario en Unidad de Paciente Crítico (UPC) con monitorización electroencefalográfica continua.",
    reconstrucciones: "Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026",
    frecuencia: "Máxima rentabilidad clínica · Emergencia médica tiempo-dependiente con elevada morbimortalidad neuronal y sistémica",
    svg: null,
    algoTitle: "Protocolo Cronometrado de Rescate Escalonado en Status Epiléptico Convulsivo",
    diagram: flow('Protocolo Cronometrado de Rescate en Status Epiléptico', [
      { t: 'Minuto 0 a 5: Soporte Vital Inmediato y Diagnóstico Inicial (ABC)', s: 'Vía aérea permeable · O2 al 100% · Vía venosa gruesa · Glicemia capilar INMEDIATA (descartar hipoglicemia)', type: 'acc' },
      { t: 'Minuto 5 a 10 (Fase 1: Rescate Inicial con Benzodiacepinas)', s: 'Lorazepam 4 mg EV en 2 min (0.1 mg/kg) · Si no hay vía: Midazolam 10 mg IM · Repetir 1 vez a los 5 min', type: 'warn' },
      { k: 'split', q: '¿Persiste Crisis Convulsiva tras Fase 1 Benzodiacepínica?', s: 'Evaluación estricta de respuesta clínica motora al cumplirse 10 minutos de evolución',
        ll: 'Crisis Yugulada con Éxito',
        left: { t: 'Vigilancia en Reanimación y Estudio Etiológico', s: 'Monitorización cardiorrespiratoria continua · Descartar infección, ACV, toxinas o abandono FAE', type: 'acc' },
        rl: 'Persiste Crisis al Minuto 10 (Fase 2)',
        right: { t: 'FAEs Endovenosos No Benzodiacepínicos', s: 'Levetiracetam 60 mg/kg EV (máx 4.5 g) o Fenitoína 20 mg/kg EV en SF (máx 50 mg/min)', type: 'crit' }
      },
      { k: 'split', q: '¿Persiste Crisis al Minuto 30 de Evolución? (Fase 3)', s: 'Definición operacional de STATUS EPILÉPTICO REFRACTARIO (SEER)',
        ll: 'Yugulación en Fase 2',
        left: { t: 'Mantener FAE de Mantenimiento y Controlar CPK', s: 'Vigilar rabdomiolisis e insuficiencia renal aguda mioglobinúrica · Hidratación vigorosa', type: 'acc' },
        rl: 'Persistencia a los 30 Minutos (SEER)',
        right: { t: 'Intubación Orotraqueal + Anestesia en UCI', s: 'Inducción de coma anestésico con Propofol o Midazolam · Meta: Supresión de brotes en EEG', type: 'crit' }
      },
      { t: 'Monitorización Neurointensiva Continua con EEG en UCI', s: 'Mantener patrón de supresión de brotes por 24 a 48 horas antes de retirar infusión anestésica', type: 'acc' }
    ]),
    contexto: "El status epiléptico convulsivo es una de las emergencias neurológicas más letales y tiempo-dependientes de la medicina interna y la urgencia. La ILAE 2015 estableció las definiciones operativas de tiempo: t1 (5 minutos), momento en el cual una crisis convulsiva tónico-clónica generalizada se torna anormalmente prolongada y debe iniciarse tratamiento farmacológico de rescate de inmediato; y t2 (30 minutos), momento a partir del cual se produce daño neuronal irreversible por excitotoxicidad y complicaciones sistémicas catastróficas (rabdomiolisis, falla renal aguda, acidosis láctica e hipertermia maligna). El pronóstico funcional y vital del paciente depende directamente de la rapidez con que se aplique el protocolo escalonado por fases.",
    contentSections: [
      {
            "subhead": "1. Fisiopatología Celular del Status Epiléptico: Tiempos Críticos ILAE (t1 = 5 min y t2 = 30 min)",
            "paragraphs": [
                  "En condiciones fisiológicas, una crisis convulsiva tónico-clónica generalizada autolimita espontáneamente antes de los 2 minutos gracias al agotamiento energético sináptico y a la acción compensatoria de los circuitos gabaérgicos inhibitorios. El <strong>status epiléptico</strong> se produce cuando <em>fracasan los mecanismos intrínsecos de terminación de la crisis</em> o se activan mecanismos aberrantes de mantenimiento paroxístico.",
                  "La Liga Internacional contra la Epilepsia (ILAE 2015) introdujo una definición conceptual y operativa basada en dos dimensiones temporales críticas (véase Algoritmo 10.9 y Tabla 10.9):",
                  "• <strong>Punto Temporal t1 (5 minutos):</strong> Representa el tiempo a partir del cual es sumamente improbable que la crisis cese espontáneamente y debe <strong>iniciarse el tratamiento farmacológico de emergencia (Fase 1)</strong>. A los 5 minutos de actividad continua, los receptores inhibitorios GABA-A postsinápticos comienzan a internalizarse hacia el citoplasma mediante endocitosis, perdiendo su respuesta farmacológica a las benzodiacepinas.",
                  "• <strong>Punto Temporal t2 (30 minutos):</strong> Representa el tiempo a partir del cual la actividad eléctrica continua produce <strong>daño neuronal permanente e irreversible</strong> mediado por excitotoxicidad por glutamato, influjo masivo de calcio intracelular, estrés oxidativo mitocondrial y necrosis celular (especialmente en neuronas de la corteza cerebral, hipocampo CA1/CA3 y tálamo), asociándose además a complicaciones sistémicas graves como rabdomiolisis masiva y falla multiorgánica."
            ]
      },
      {
            "subhead": "2. Fase 1 de Rescate de Emergencia: Benzodiacepinas de Acción Rápida (Lorazepam y Midazolam)",
            "paragraphs": [
                  "En los primeros 5 a 10 minutos (Fase 1), el objetivo prioritario es yugular la crisis de forma fulminante mediante el uso de <strong>Benzodiacepinas</strong>, las cuales actúan potenciando la entrada de cloro mediada por los receptores GABA-A residuales:",
                  "• <strong>Lorazepam Endovenoso (Fármaco de Elección Hospitalario):</strong> Dosis de <strong>4 mg EV en bolo lento (0.1 mg/kg)</strong> administrado en 2 minutos. Si la convulsión no cede a los 5 minutos, se puede administrar una segunda y última dosis idéntica de 4 mg EV. El lorazepam es la benzodiacepina de referencia debido a su alta afinidad por el receptor GABA-A y su menor liposolubilidad comparativa con el diazepam, lo que se traduce en un volumen de distribución menor y una duración de acción terapéutica cerebral prolongada (12 a 24 horas).",
                  "• <strong>Midazolam Intramuscular (Fármaco de Elección Prehospitalario o sin Vía Venosa):</strong> Dosis de <strong>10 mg IM en adultos (> 40 kg)</strong> o 5 mg IM (si peso < 40 kg). El ensayo clínico landmark <em>RAMPART</em> demostró que el midazolam IM administrado por paramédicos en ambulancia es tan eficaz o superior al lorazepam EV debido al ahorro de tiempo crítico al no requerir la instalación de una vía venosa periférica. También puede administrarse por vía intranasal o bucal.",
                  "• <strong>Diazepam Endovenoso:</strong> Dosis de 10 mg EV administrado a una velocidad máxima de 2-5 mg/minuto (repetible a los 5 min, máx 20 mg). Aunque cruza la barrera hematoencefálica en segundos por su extrema liposolubilidad, se redistribuye masivamente al tejido adiposo corporal en 15 a 30 minutos, haciendo caer rápidamente sus niveles cerebrales por debajo del umbral terapéutico y permitiendo la reaparición precoz de las crisis."
            ]
      },
      {
            "subhead": "3. Fase 2 de Control Urgente: Antiepilépticos Endovenosos No Benzodiacepínicos (Levetiracetam, Fenitoína, Valproato)",
            "paragraphs": [
                  "Si la actividad convulsiva persiste pasados <strong>10 minutos</strong> desde el inicio del rescate a pesar de la dosis adecuada de benzodiacepina, se pasa de inmediato a la <strong>Fase 2 (10 a 30 minutos)</strong>, administrando un fármaco antiepiléptico endovenoso en dosis de carga plena (véase Protocolo Farmacológico 10.9):",
                  "• <strong>Levetiracetam Endovenoso (1ª Elección Moderna):</strong> Dosis de <strong>60 mg/kg EV (máximo 4.500 mg)</strong> diluido en 100 mL de solución salina, infundido en 10 minutos. El estudio multicéntrico <em>ESETT (2019)</em> demostró que el levetiracetam tiene una eficacia de yugulación idéntica a la fenitoína y al valproato (~50%), pero con un perfil de seguridad hemodinámica significativamente superior, sin inducir hipotensión ni arritmias cardíacas.",
                  "• <strong>Fenitoína Endovenosa (Alternativa Clásica):</strong> Dosis de carga de <strong>20 mg/kg EV</strong> (dosis habitual en adulto: 1.250 a 1.500 mg). <em>Reglas de oro indispensables EUNACOM:</em> 1) Debe diluirse <strong>ÚNICAMENTE en Suero Fisiológico al 0.9%</strong>; está formalmente proscrito mezclarla con suero glucosado porque cristaliza y precipita en la vía; 2) La velocidad de infusión <strong>NUNCA debe exceder los 50 mg/minuto</strong>; 3) Requiere monitorización electrocardiográfica y de presión arterial continua durante toda la infusión, ya que la fenitoína y su vehículo (propilenglicol) pueden inducir hipotensión refractaria, bloqueo auriculoventricular y asistolia.",
                  "• <strong>Ácido Valproico Endovenoso:</strong> Dosis de <strong>40 mg/kg EV (máximo 3.000 mg)</strong> infundido en 10 minutos. Fármaco de excelente perfil si el paciente tiene historia previa de epilepsia generalizada o mioclónica."
            ]
      },
      {
            "subhead": "4. Fase 3: Status Epiléptico Refractario, Cuidado Neurointensivo y Anestesia General en UCI",
            "paragraphs": [
                  "Si la convulsión clínica o electrográfica continúa después de <strong>30 minutos</strong> desde el inicio del protocolo (falla de benzodiacepina de Fase 1 + FAE endovenoso de Fase 2), el cuadro se clasifica formalmente como <strong>Status Epiléptico Refractario (SEER)</strong> (véase Tabla de Refractariedad y Complicaciones 10.9).",
                  "• <strong>Conducta Inmediata:</strong> El paciente debe ser trasladado de urgencia a la Unidad de Cuidados Intensivos (UCI), someterse a <strong>Intubación Orotraqueal (IOT)</strong> con secuencia rápida de intubación para proteger la vía aérea y asegurar ventilación mecánica asistida, e iniciar <strong>Anestesia General Continua</strong>.",
                  "• <strong>Fármacos Anestésicos de Elección:</strong>",
                  "1) <strong>Propofol:</strong> Bolo inicial de 2 mg/kg EV, seguido de infusión continua de 2 a 10 mg/kg/hora. Excelente poder anticonvulsivante gabaérgico y rápido despertar al suspenderlo. <em>Alerta de seguridad:</em> Si se utiliza a dosis > 5 mg/kg/h por más de 48 horas, existe alto riesgo de <em>Síndrome de Infusión de Propofol (PRIS)</em>: acidosis metabólica severa, rabdomiolisis, hiperkalemia, hepatomegalia y colapso cardiovascular refractario.",
                  "2) <strong>Midazolam en Infusión Continua:</strong> Bolo de carga de 0.2 mg/kg EV seguido de infusión de 0.05 a 2.0 mg/kg/hora. Brinda mayor estabilidad hemodinámica que el propofol.",
                  "3) <strong>Barbitúricos (Tiopental o Pentobarbital):</strong> Reservados para status super-refractario por su potente depresión miocárdica y vasodilatación periférica.",
                  "• <strong>Monitorización Electroencefalográfica Continua (cEEG):</strong> Es obligatoria en la UCI. El objetivo del coma inducido no es únicamente paralizar la actividad motora muscular, sino alcanzar un patrón neurofisiológico de <strong>supresión de brotes (burst-suppression)</strong> con períodos de silencio eléctrico cerebral de 10 a 15 segundos entre brotes, mantenido durante al menos <strong>24 a 48 horas continuas</strong> antes de iniciar el destete anestésico muy gradual."
            ]
      },
      {
            "subhead": "5. Complicaciones Sistémicas Críticas: Rabdomiolisis, Falla Renal Aguda, Acidosis Láctica e Hipertermia",
            "paragraphs": [
                  "El status epiléptico prolongado no es únicamente una catástrofe cerebral, sino un síndrome hipermetabólico sistémico de extrema gravedad:",
                  "• <strong>Rabdomiolisis Masiva e Insuficiencia Renal Aguda:</strong> La contracción muscular tónico-clónica violenta y sostenida causa necrosis y lisis del sarcolema muscular, con liberación masiva de <strong>mioglobina</strong>, potasio y creatina quinasa (CPK habitualmente > 10.000 a 50.000 U/L) al torrente sanguíneo. La mioglobina precipita en los túbulos renales formando cilindros obstructivos y ejerciendo citotoxicidad directa por estrés oxidativo, desencadenando una <strong>Necrosis Tubular Aguda oligúrica</strong> con alza aguda de creatinina y riesgo de hiperkalemia letal. <em>Tratamiento urgente:</em> Hidratación vigorosa con solución salina isotónica para forzar diuresis (> 200-300 mL/hora) y alcalinización urinaria con bicarbonato.",
                  "• <strong>Acidosis Láctica Severa:</strong> Se origina por la glicólisis anaeróbica muscular extrema sumada a la hipoxemia transitoria, alcanzando niveles de lactato plasmático > 10-15 mmol/L y pH < 7.10. Clásicamente, la acidosis metabólica por status convulsivo revierte de manera espontánea en las primeras horas posteriores al cese de las convulsiones motoras sin requerir infusión de bicarbonato de rutina.",
                  "• <strong>Hipertermia Maligna Secundaria:</strong> El trabajo muscular masivo eleva la temperatura corporal central a > 40-41 °C. La hipertermia agrava exponencialmente la tasa de apoptosis neuronal y acelera el edema cerebral citotóxico, requiriendo enfriamiento físico activo inmediato.",
                  "• <strong>Estatus No Convulsivo (Coma con Descargas Sutiles):</strong> Tras 30-45 minutos de status convulsivo, la manifestación motora visible puede extinguirse progresivamente por agotamiento muscular o bloqueo neuromuscular, permaneciendo el paciente en coma con pequeñas mioclonías periorbitarias o de los dedos, mientras la corteza cerebral continúa en status epiléptico electrográfico fulminante. Solo se detecta mediante EEG continuo."
            ]
      }
],
    table: {
      "title": "Definiciones Operativas ILAE 2015 del Status Epiléptico: Tiempos Críticos T1 y T2",
      "headers": [
            "Tipo de Status Epiléptico",
            "Tiempo T1 (Inicio de Tratamiento Inmediato)",
            "Tiempo T2 (Inicio de Daño Neuronal Irreversible)",
            "Mecanismo Fisiopatológico y Riesgo Biológico"
      ],
      "rows": [
            [
                  "Status Convulsivo Tónico-Clónico Generalizado",
                  "5 minutos",
                  "30 minutos",
                  "Fracaso de la terminación espontánea; internalización de receptores GABA-A. A los 30 min: excitotoxicidad por glutamato, necrosis neuronal irreversible, rabdomiolisis y acidosis."
            ],
            [
                  "Status Focal con Alteración de Conciencia",
                  "10 minutos",
                  "> 60 minutos",
                  "Descargas focales continuas temporales o frontales con desconexión. Riesgo de secuelas cognitivas y lesión mesial hipocámpica a largo plazo."
            ],
            [
                  "Status de Ausencia",
                  "10 a 15 minutos",
                  "Indeterminado (sin lesión neuronal letal demostrada)",
                  "Estado crepuscular continuo con punta-onda a 3 Hz generalizada en EEG. No produce necrosis neuronal pero requiere reversión farmacológica con benzodiacepinas."
            ]
      ]
},
    severityTable: {
      "title": "Monitorización Neurointensiva, Criterios de Refractariedad y Complicaciones Sistémicas del Status",
      "headers": [
            "Entidad Clínica / Parámetro",
            "Definición Operativa y Criterios Diagnósticos",
            "Mecanismo de Falla / Daño Órgano Blanco",
            "Conducta Terapéutica y Prevención"
      ],
      "rows": [
            [
                  "Status Epiléptico Refractario (SEER)",
                  "Persistencia clínica o electrográfica de crisis tras administración adecuada de Fase 1 (benzodiacepina) + Fase 2 (FAE en dosis plena)",
                  "Endocitosis masiva de receptores GABA-A y sobreexpresión de receptores NMDA excitatorios",
                  "Traslado urgente a UCI, intubación endotraqueal inmediata y coma inducido con Propofol o Midazolam."
            ],
            [
                  "Status Epiléptico Super-Refractario (SRSE)",
                  "Persistencia o recurrencia de crisis tras ≥ 24 h de anestesia general continua, o al reducir el goteo anestésico",
                  "Neuroinflamación fulminante, apertura de BHE y daño mitocondrial sostenido",
                  "Inmunomodulación (corticoides, inmunoglobulinas), dieta cetogénica, ketamina o hipotermia controlada."
            ],
            [
                  "Rabdomiolisis e Insuficiencia Renal Aguda",
                  "Lisis de sarcolema por actividad motora tónica prolongada; elevación de CPK (> 10.000 U/L), mioglobinuria y oliguria",
                  "Precipitación intratubular de mioglobina con toxicidad tubular oxidativa directa y vasoconstricción renal",
                  "Hidratación parenteral vigorosa con solución salina al 0.9% (metas de diuresis > 200 mL/h) y alcalinización."
            ],
            [
                  "Acidosis Láctica e Hipertermia Maligna",
                  "pH < 7.10, lactato > 10-15 mmol/L y temperatura central > 40-41 °C por contracción muscular sostenida",
                  "Glicólisis anaeróbica extrema; hipertermia acelera y duplica la tasa de necrosis neuronal cerebral",
                  "Yugular las crisis motoras; enfriamiento físico activo inmediato; acidosis suele corregir sola tras cesar la crisis."
            ],
            [
                  "Status No Convulsivo en Coma",
                  "Coma persistente post-status sin clonías francas pero con descargas electrográficas continuas en EEG",
                  "Agotamiento de la placa motora o bloqueo farmacológico con persistencia de actividad ictal cerebral",
                  "EEG continuo obligatorio en UCI; optimizar infusión anestésica hasta patrón de supresión de brotes."
            ]
      ]
},
    treatmentTable: {
      "title": "Protocolo Farmacológico Escalonado por Fases en Status Epiléptico Convulsivo (Dosis y Tiempos)",
      "headers": [
            "Fase de Rescate",
            "Fármaco de Elección",
            "Dosis Exacta y Vía de Administración",
            "Metas, Velocidad de Infusión y Advertencias Críticas"
      ],
      "rows": [
            [
                  "Fase 1 (Emergencia: 0 a 10 min)",
                  "Lorazepam EV (1ª elección hospitalaria)",
                  "4 mg EV en bolo lento (0.1 mg/kg) en 2 minutos; repetir una vez a los 5 min si persiste",
                  "Alta afinidad GABA-A y prolongada acción cerebral (> 12 h). Monitorizar depresión respiratoria."
            ],
            [
                  "Fase 1 (Alternativa sin vía EV)",
                  "Midazolam IM o intranasal",
                  "10 mg IM en adultos (> 40 kg); 5 mg IM si peso < 40 kg",
                  "Elección prehospitalaria; absorción intramuscular rápida superior a diazepam (estudio RAMPART)."
            ],
            [
                  "Fase 1 (Alternativa EV estándar)",
                  "Diazepam EV",
                  "10 mg EV en bolo lento a 2-5 mg/min; repetir a los 5 min si persiste (máx 20 mg)",
                  "Rápida entrada cerebral pero se redistribuye a grasa en 15-30 min perdiendo efecto anticonvulsivante precoz."
            ],
            [
                  "Fase 2 (Control urgente: 10 a 30 min)",
                  "Levetiracetam EV (1ª elección moderna)",
                  "60 mg/kg EV (máximo 4.500 mg) diluido en 100 mL de SF, infundido en 10 minutos",
                  "Eficacia equivalente a fenitoína sin riesgo de hipotensión ni arritmias (estudio ESETT 2019)."
            ],
            [
                  "Fase 2 (Alternativa clásica)",
                  "Fenitoína EV",
                  "20 mg/kg EV diluido ÚNICAMENTE en Suero Fisiológico al 0.9% (máximo 1.500 mg)",
                  "NUNCA diluir en suero glucosado (cristaliza). Velocidad máxima 50 mg/min bajo monitor ECG por arritmias/asistolia."
            ],
            [
                  "Fase 2 (Alternativa en epilepsia conocida)",
                  "Ácido Valproico EV",
                  "40 mg/kg EV (máximo 3.000 mg) en bolo durante 10 minutos",
                  "De elección si el paciente tiene epilepsia generalizada o mioclónica previa. Evitar en sospecha de hepatopatía."
            ],
            [
                  "Fase 3 (Refractario: > 30 min)",
                  "Propofol EV en infusión continua (UCI)",
                  "Bolo de 2 mg/kg EV, seguido de infusión de 2 a 10 mg/kg/hora bajo intubación orotraqueal",
                  "Anestésico de titulación rápida. Riesgo de Síndrome de Infusión de Propofol (PRIS) si dosis alta > 48 h."
            ],
            [
                  "Fase 3 (Alternativa anestésica UCI)",
                  "Midazolam en infusión continua",
                  "Bolo de carga de 0.2 mg/kg EV, seguido de infusión titulada de 0.05 a 2.0 mg/kg/hora",
                  "Mayor estabilidad hemodinámica. Meta: supresión de brotes en EEG continuo por 24 a 48 horas."
            ]
      ]
},
    vignette: "Hombre de 44 años con antecedente de epilepsia secundaria a traumatismo encéfalo-craneano antiguo, es traído en ambulancia al servicio de urgencia presentando una crisis tónico-clónica generalizada continua de 25 minutos de evolución que inició en su trabajo. Sus familiares relatan que abandonó sus medicamentos antiepilépticos hace 5 días. En el reanimador: paciente inconsciente con movimientos clónicos bilaterales simétricos, trismus, sialorrea espesa y cianosis peribucal. Monitor: FC 138 lpm sinusal, PA 165/100 mmHg, SatO2 86% con aire ambiental, temperatura axilar 38.6 °C. El hemoglucotest marca 112 mg/dL.",
    explicacion: "El paciente cursa un Status Epiléptico Convulsivo Tónico-Clónico Generalizado activo que supera con creces el umbral t1 (5 minutos) y se encuentra peligrosamente cercano al umbral t2 (30 minutos), momento en el cual se desencadena muerte neuronal irreversible por excitotoxicidad y complicaciones sistémicas severas. La conducta médica perentoria e inmediata es: 1) Estabilizar ABC: posicionar vía aérea, aspirar secreciones y administrar oxígeno al 100% mediante mascarilla con bolsa reservorio; 2) Administrar de inmediato la Fase 1 de rescate: Lorazepam 4 mg endovenoso en bolo lento en 2 minutos (o Midazolam 10 mg IM si la vía venosa no es permeable de inmediato); 3) Si la convulsión no cede tras la benzodiacepina, iniciar de forma perentoria la Fase 2 con un antiepiléptico endovenoso: Levetiracetam 60 mg/kg EV (máx 4.5 g) en 10 min o Fenitoína 20 mg/kg EV diluida exclusivamente en suero fisiológico a una velocidad < 50 mg/min con monitor cardíaco; 4) Si persiste la crisis pasados los 30 minutos (Status Refractario), se debe proceder a intubación orotraqueal urgente, sedación profunda en coma anestésico continuo con Propofol o Midazolam y traslado prioritario a UCI con monitorización electroencefalográfica continua.",
    keyPoints: [
      "El status epiléptico convulsivo generalizado se define operacionalmente como una crisis de ≥ 5 minutos (t1: momento de rescate obligado) o crisis repetidas sin recuperación de conciencia entre ellas.",
      "A los 30 minutos (t2) se produce necrosis neuronal irreversible por excitotoxicidad mediada por glutamato y falla de autorregulación cerebral.",
      "Fase 1 (0 a 10 min): Lorazepam 4 mg EV (o Midazolam 10 mg IM si no hay vía venosa) administrado precozmente; repetir una sola vez a los 5 minutos si persiste.",
      "Fase 2 (10 a 30 min): Levetiracetam 60 mg/kg EV, Fenitoína 20 mg/kg EV (en suero fisiológico a ≤ 50 mg/min con monitor ECG) o Ácido Valproico 40 mg/kg EV.",
      "Fase 3 (> 30 min - Status Refractario): Intubación orotraqueal inmediata, inducción de coma anestésico con Propofol o Midazolam y monitorización EEG continua en UCI con meta de supresión de brotes.",
      "La complicación sistémica renal más frecuente es la rabdomiolisis con falla renal aguda por mioglobinuria, requiriendo hidratación masiva y control seriado de CPK y creatinina."
],
    questions: [
      {
            "stem": "Usted evalúa a un recién nacido, diagnosticado de asfixia, con una encefalopatía hipóxica, cae en estatus epiléptico. ¿Qué fármaco debe administrar?",
            "options": [
                  {
                        "id": "A",
                        "text": "Lidocaína"
                  },
                  {
                        "id": "B",
                        "text": "Barbitúricos"
                  },
                  {
                        "id": "C",
                        "text": "Sulfato de magnesio"
                  },
                  {
                        "id": "D",
                        "text": "Fenitoína"
                  },
                  {
                        "id": "E",
                        "text": "Lamotrigina"
                  }
            ],
            "correcta": "B",
            "explicacion": "El estatus epiléptico en un recién nacido, especialmente en el contexto de una encefalopatía hipóxico-isquémica (EHI) secundaria a asfixia, es una emergencia neurológica que requiere tratamiento inmediato para prevenir un mayor daño cerebral. El manejo de las convulsiones neonatales sigue un algoritmo escalonado. El fármaco de primera línea o, en su defecto, el segundo tras el fracaso de las benzodiacepinas (que no están en las opciones), es el **fenobarbital**, un tipo de **barbitúrico**. El fenobarbital es el anticonvulsivo más estudiado y utilizado en el período neonatal. Actúa potenciando la acción del neurotransmisor inhibidor GABA, lo que ayuda a suprimir la actividad eléctrica cerebral anómala y detener las convulsiones. Dada la gravedad del cuadro (estatus epiléptico) y las opciones disponibles, los barbitúricos son la elección correcta y estándar en la práctica clínica neonatal.",
            "recTag": "Banco Oficial AEE · Perfil V3 1.10.2.018"
      },
      {
            "stem": "Un paciente presenta un estatus convulsivo de cerca de 50 minutos de duración, que fue controlado con lorazepam + fenitoína. Evoluciona en las horas siguientes con oliguria y elevación de la creatinina plasmática. ¿Cuál es la causa más probable de la insuficiencia renal?",
            "options": [
                  {
                        "id": "A",
                        "text": "Prerrenal"
                  },
                  {
                        "id": "B",
                        "text": "Necrosis tubular aguda"
                  },
                  {
                        "id": "C",
                        "text": "Rabdomiolisis"
                  },
                  {
                        "id": "D",
                        "text": "Toxicidad renal por lorazepam"
                  },
                  {
                        "id": "E",
                        "text": "Toxicidad renal por fenitoína"
                  }
            ],
            "correcta": "C",
            "explicacion": "La alternativa correcta es **C (Rabdomiolisis)**. La rabdomiolisis es una causa importante de insuficiencia renal aguda, especialmente en pacientes que han sufrido convulsiones prolongadas. La actividad muscular intensa y sostenida durante un estatus convulsivo lleva a la liberación masiva de contenido intracelular muscular, incluyendo mioglobina, creatina quinasa (CK), y electrolitos al torrente sanguíneo. La mioglobina, al ser filtrada por los riñones, puede obstruir los túbulos renales y generar daño directo, conduciendo a la insuficiencia renal aguda. La oliguria y la elevación de la creatinina en las horas siguientes al estatus convulsivo, junto con la historia de convulsión prolongada, son altamente sugestivas de rabdomiolisis. En Chile, el MINSAL cuenta con guías clínicas para el manejo de la Insuficiencia Renal Aguda (IRA) donde se menciona la rabdomiolisis como una etiología importante, requiriendo manejo agresivo con hidratación y control de electrolitos.",
            "recTag": "Banco Oficial AEE · Perfil V3 1.10.2.018"
      },
      {
            "stem": "Lactante de 1 año, con fiebre de 40 C y convulsión tónico-clónica generalizada. ¿Cuál es la conducta más apropiada durante la crisis, después de estabilizar al paciente (ABC)?",
            "options": [
                  {
                        "id": "A",
                        "text": "Colocar enema frío"
                  },
                  {
                        "id": "B",
                        "text": "Administrar antipiréticos"
                  },
                  {
                        "id": "C",
                        "text": "Administrar anticonvulsivante"
                  },
                  {
                        "id": "D",
                        "text": "Realizar punción lumbar"
                  },
                  {
                        "id": "E",
                        "text": "Instalar vía venosa central"
                  }
            ],
            "correcta": "C",
            "explicacion": "El escenario clínico describe a un lactante de 1 año con una convulsión tónico-clónica generalizada en el contexto de fiebre alta (40°C), lo que configura una **crisis convulsiva febril**. La pregunta clave es la conducta *durante la crisis* una vez asegurado el ABC (vía aérea, ventilación y circulación). La prioridad absoluta frente a una convulsión activa, especialmente si se prolonga por más de 5 minutos (lo que define el estatus epiléptico), es **yugular la crisis convulsiva** para prevenir el daño neuronal secundario a la hipoxia y a la propia neurotoxicidad de la actividad eléctrica descontrolada. El tratamiento farmacológico de primera línea para detener una convulsión aguda son los **anticonvulsivantes**, específicamente las benzodiazepinas (como lorazepam intravenoso, diazepam intravenoso o rectal, o midazolam intramuscular/intranasal). Por lo tanto, la administración de un anticonvulsivante es la medida terapéutica inmediata y más importante después de estabilizar las funciones vitales básicas del paciente.",
            "recTag": "Banco Oficial AEE · Perfil V3 1.10.2.018"
      },
      {
            "stem": "El primer fármaco que debe administrarse a un paciente es estatus epiléptico es:",
            "options": [
                  {
                        "id": "A",
                        "text": "Fenitoína"
                  },
                  {
                        "id": "B",
                        "text": "Ácido valproico"
                  },
                  {
                        "id": "C",
                        "text": "Lorazepam"
                  },
                  {
                        "id": "D",
                        "text": "Carbamazepina"
                  },
                  {
                        "id": "E",
                        "text": "Lamotrigina"
                  }
            ],
            "correcta": "C",
            "explicacion": "La alternativa correcta es Lorazepam porque, en el manejo inicial del status epilepticus, las benzodiacepinas (como el lorazepam o el diazepam) son los fármacos de primera línea. Su rápido inicio de acción (especialmente por vía intravenosa) permite detener rápidamente la actividad convulsiva, previniendo el daño neuronal asociado al estatus epiléptico prolongado. Las guías clínicas chilenas del MINSAL para el manejo de urgencias así lo indican. El objetivo principal en los primeros minutos es detener la crisis.",
            "recTag": "Banco Oficial AEE · Perfil V3 1.10.2.018"
      }
]
  },

  // ==========================================================================
  // TEMA 10.10: PRIMERA CRISIS CONVULSIVA DEL ADULTO Y DIAGNÓSTICO DIFERENCIAL CON SÍNCOPE: ENFRENTAMIENTO, CRITERIOS DE INICIO DE FAE Y BANDERAS ROJAS (TIER 2)
  // ==========================================================================
  {
    id: "neuro-10",
    classId: "neuro-10",
    tier: 2,
    blockNum: 2,
    blockName: "Cefaleas, Síndromes Convulsivos y Epilepsia",
    topicLabel: "10.10",
    title: "Primera Crisis Convulsiva del Adulto y Diagnóstico Diferencial con Síncope: Enfrentamiento, Criterios de Inicio de FAE y Banderas Rojas",
    perfilCode: "1.10.2.015",
    dx: "Específico",
    tx: "Inicial",
    seg: "Derivar",
    ges: "Evaluación y Diagnóstico Oportuno · Descarte de crisis sintomáticas agudas secundarias a patología neurovascular o alteraciones hidroelectrolíticas.",
    reconstrucciones: "EUNACOM Diciembre 2019 (Q#144)",
    frecuencia: "Alta rentabilidad · Consulta sumamente prevalente en el Servicio de Urgencia y medicina ambulatoria",
    svg: null,
    algoTitle: "Algoritmo Diagnóstico Diferencial: Síncope vs Crisis Epiléptica",
    diagram: null,
    contexto: "La primera pérdida transitoria de la conciencia en el adulto constituye uno de los mayores desafíos diagnósticos de la práctica médica. La distinción entre un síncope (vasovagal o cardiogénico) con sacudidas mioclónicas secundarias (síncope convulsivo) y una verdadera crisis epiléptica convulsiva tónico-clónica generalizada descansa en una anamnesis semiológica rigurosa a testigos. La presencia de pródromos autonómicos prolongados y una recuperación mental lúcida inmediata orientan a síncope, mientras que la mordedura en el borde lateral de la lengua, cianosis peribucal y una confusión postictal prolongada (15-60 min) son patognomónicas de crisis epiléptica. Tras una primera crisis no provocada, el inicio de fármacos antiepilépticos está condicionado a la demostración de un riesgo de recurrencia superior al 60% mediante EEG o neuroimagen.",
    contentSections: [
      {
            "subhead": "1. Enfrentamiento Clínico de la Primera Crisis no Provocada: Anamnesis Testimonial y Descarte de Causas Sintomáticas Agudas",
            "paragraphs": [
                  "Frente a un adulto que consulta tras un episodio único de pérdida transitoria de conciencia con movimientos anormales, el primer paso clínico ineludible es <strong>diferenciar entre una crisis sintomática aguda (provocada) y una primera crisis epiléptica no provocada</strong>.",
                  "• <strong>Crisis Sintomáticas Agudas (Provocadas):</strong> Ocurren en estrecha relación temporal con una agresión sistémica, tóxica o metabólica cerebral aguda. <em>Causas más frecuentes:</em> Hipoglicemia severa (< 50 mg/dL), hiponatremia aguda grave (< 120 mEq/L) o rápida, hipocalcemia, abstinencia alcohólica (crisis por deprivación a las 24-48 horas del cese de ingesta), uremia o encefalopatía hepática, infección aguda del SNC (meningitis, encefalitis herpética), traumatismo encéfalo-craneano agudo o ataque cerebrovascular isquémico/hemorrágico en fase hiperaguda. <em>Principio EUNACOM fundamental:</em> Estas crisis <strong>NO son epilepsia</strong>, tienen bajo riesgo de recurrencia una vez resuelto el trastorno desencadenante y <strong>NO requieren tratamiento antiepiléptico crónico a permanencia</strong>.",
                  "• <strong>Primera Crisis No Provocada:</strong> Ocurre en ausencia de un factor precipitante inmediato temporal o sistémico. Requiere un estudio completo para identificar si existe una causa estructural cerebral subyacente que confiera un riesgo aumentado de recurrencias."
            ]
      },
      {
            "subhead": "2. Diagnóstico Diferencial Cardiovascular y Neuromediado: Síncope Vasovagal vs Síncope Convulsivo",
            "paragraphs": [
                  "El diagnóstico diferencial más frecuente de una crisis epiléptica es el <strong>síncope</strong>, definido como la pérdida transitoria de conciencia debida a hipoperfusión cerebral global autolimitada (véase Tabla 10.10):",
                  "• <strong>Síncope Convulsivo:</strong> Hasta en el 15-20% de los síncopes (especialmente vasovagales o cardiogénicos prolongados en los que el paciente permanece en postura vertical o erguida por ser sostenido por testigos), la hipoxia transitoria de la formación reticular del tronco encefálico desencadena <strong>sacudidas mioclónicas breves</strong>. Estas mioclonías sincopales son <em>arrítmicas, asincrónicas, multifocales, de escasa amplitud y duran menos de 10 a 15 segundos</em>, sin fase tónica previa.",
                  "• <strong>Semiología Diferenciadora de Oro:</strong>",
                  "1) <strong>Pródromos:</strong> El síncope vasovagal cursa con pródromos autonómicos graduales (mareo, visión borrosa o \"en túnel\", sensación de calor, palidez intensa, frialdad cutánea y diaforesis profusa). En la crisis epiléptica generalizada no hay pródromos, o existe un aura focal (epigástrica ascendente, psíquica, visual) de pocos segundos.",
                  "2) <strong>Mordedura de lengua:</strong> En el síncope, si hay mordedura, se localiza invariablemente en la <strong>punta de la lengua</strong> por impacto traumático de la mandíbula al caer al suelo. En la crisis epiléptica tónico-clónica, la contracción involuntaria violenta de los músculos masticatorios produce una mordedura profunda patognomónica en el <strong>borde lateral de la lengua</strong> (especificidad > 99%).",
                  "3) <strong>Color cutáneo:</strong> El paciente sincopal está característicamente <em>pálido como el papel</em> y sudoroso. El paciente en crisis epiléptica presenta <em>cianosis facial y peribucal intensa</em> por espasmo muscular respiratorio y apnea.",
                  "4) <strong>Recuperación y Estado Postictal:</strong> El paciente sincopal se recupera de manera <strong>rápida y lúcida</strong> en segundos tras adoptar el decúbito supino, orientado en persona, espacio y tiempo, reconociendo a sus acompañantes y recordando los pródromos. Por el contrario, la crisis epiléptica se sigue obligatoriamente de un <strong>período postictal prolongado (15 a 60 minutos)</strong> de estupor, somnolencia profunda, confusión mental, cefalea intensa y dolores musculares difusos.",
                  "5) <strong>Crisis no epilépticas psicógenas (pseudocrisis):</strong> Frecuentes en mujeres jóvenes; cursan con movimientos asincrónicos bizarros, balanceo pélvico, movimientos de cabeza \"lado a lado\", ojos fuertemente cerrados con resistencia activa a la apertura ocular forzada, ausencia de reflejo pupilar alterado y niveles normales de prolactina y lactato sérico."
            ]
      },
      {
            "subhead": "3. Criterios Diagnósticos ILAE de Epilepsia tras una Primera Crisis y Decisión de Inicio de FAE",
            "paragraphs": [
                  "Históricamente, se exigía la ocurrencia de al menos dos crisis no provocadas separadas por > 24 horas para diagnosticar epilepsia. Sin embargo, la <strong>definición práctica moderna de la ILAE (2014)</strong> autoriza formalmente diagnosticar Epilepsia e iniciar tratamiento con FAEs tras una <strong>primera crisis no provocada</strong> si se cumple la siguiente condición:",
                  "<em>La presencia de un riesgo estimado de recurrencia de crisis futuras superior al 60% en los próximos 10 años</em> (riesgo equivalente al que confiere haber tenido ya dos crisis espontáneas).",
                  "<strong>Criterios que confieren un riesgo de recurrencia > 60% tras una 1ª crisis:</strong>",
                  "1) <strong>Neuroimagen alterada:</strong> Presencia de una lesión estructural epileptogénica cortical demostrada en la Resonancia Magnética (o TAC) que explique la crisis: infarto isquémico secuelar, hematoma intracerebral antiguo, contusión cerebral traumática, malformación arteriovenosa, tumor primario o metástasis, displasia cortical focal o esclerosis mesial hipocámpica.",
                  "2) <strong>Electroencefalograma (EEG) epileptiforme:</strong> Presencia inequívoca de actividad paroxística interictal focal o generalizada (puntas, ondas agudas, complejos punta-onda).",
                  "3) <strong>Crisis ocurrida durante el sueño:</strong> Confiere un riesgo basal de recurrencia significativamente mayor.",
                  "4) Presencia de un <strong>déficit neurológico focal permanente</strong> al examen físico.",
                  "Si el paciente presenta un examen neurológico normal, TAC/RM de cerebro rigurosamente normal y EEG normal, el riesgo de recurrencia a 5 años es de solo 30 a 40%; en este escenario, la norma médica estándar es <strong>NO iniciar fármacos antiepilépticos</strong>, indicar medidas de higiene del sueño, prohibir el consumo de alcohol y restringir la conducción vehicular."
            ]
      },
      {
            "subhead": "4. Protocolo de Estudio Paraclínico en Urgencias, Restricción de Conducción y Banderas Rojas",
            "paragraphs": [
                  "Todo adulto que consulta en el servicio de urgencia tras una primera crisis convulsiva debe someterse a una evaluación protocolizada:",
                  "• <strong>Laboratorio básico de urgencia:</strong> Glicemia capilar inmediata, electrolitos plasmáticos (natremia, potasemia, calcemia, magnesemia), función renal (BUN, creatinina), perfil hepático, gases venosos (el lactato se eleva transitoriamente en crisis convulsiva y es normal en síncope), hemograma y cribado toxicológico en orina (cocaína, anfetaminas, benzodiacepinas).",
                  "• <strong>Electrocardiograma de 12 derivaciones (ECG):</strong> Obligatorio en todo paciente para descartar etiología cardiogénica sincopal: prolongación del intervalo QT (síndrome de QT largo), preexcitación ventricular (Wolf-Parkinson-White), patrón de Brugada o bloqueos bifasciculares.",
                  "• <strong>Neuroimagen:</strong> El <strong>TAC de encéfalo sin contraste</strong> es mandatorio en la urgencia para descartar de inmediato lesiones neuroquirúrgicas agudas (hematoma subdural, hemorragia subaracnoidea, masa tumoral expansiva o ACV isquémico extenso). Posteriormente, en el ámbito ambulatorio especializado, se complementa de forma electiva con Resonancia Magnética de cerebro.",
                  "• <strong>Restricción de actividades de riesgo y conducción:</strong> Es una obligación médico-legal advertir y consignar en la ficha clínica la <strong>prohibición estricta de conducir vehículos motorizados</strong>, operar maquinaria pesada industrial, realizar trabajos en altura o nadar sin supervisión durante al menos <strong>6 a 12 meses</strong> sin crisis."
            ]
      }
],
    table: {
      "title": "Tabla Diagnóstica Comparativa: Síncope (Vasovagal / Cardiogénico) vs Crisis Epiléptica Convulsiva",
      "headers": [
            "Parámetro Semiológico",
            "Síncope Vasovagal / Reflejo",
            "Síncope Cardiogénico / Arrítmico",
            "Crisis Epiléptica Convulsiva (Tónico-Clónica)"
      ],
      "rows": [
            [
                  "Factores desencadenantes",
                  "Bipedestación prolongada, calor ambiental, estrés emocional, aglomeraciones, fobia a agujas/sangre",
                  "Esfuerzo físico súbito, palpitaciones previas, cambios posturales bruscos o sin pródromos",
                  "Privación de sueño, consumo/abstinencia de alcohol o drogas, fotoestimulación, o sin gatillante (espontáneo)"
            ],
            [
                  "Pródromos autonómicos",
                  "Presentes y graduales (segundos a minutos): mareo, visión borrosa en túnel, diaforesis fría, palidez",
                  "Breves (< 3-5 segundos) o ausentes (\"apagón súbito\" o caída en plomo instantánea)",
                  "Presentes en inicio focal (aura epigástrica ascendente, deja vu, parestesias); ausentes en inicio generalizado"
            ],
            [
                  "Duración de la inconsciencia",
                  "Muy breve: < 15 a 30 segundos (rara vez > 1 minuto tras decúbito supino)",
                  "Extremadamente breve (segundos a 1 min), con colapso cardiovascular inmediato",
                  "Prolongada: típicamente 1 a 3 minutos continuos de actividad ictal motora"
            ],
            [
                  "Movimientos motores anormales",
                  "Mioclonías sincopales breves: sacudidas asincrónicas, arrítmicas, inician TRAS el colapso (< 15 s)",
                  "Ausentes o mioclonías anóxicas breves por hipoperfusión cerebral difusa",
                  "Secuencia estereotipada: Fase tónica generalizada (10-20 s) seguida de clonías rítmicas sincrónicas (30-60 s)"
            ],
            [
                  "Mordedura de lengua",
                  "Poco común; si ocurre, se localiza invariablemente en la PUNTA de la lengua por traumatismo al caer",
                  "Rara; en la punta si hay traumatismo facial por impacto de la caída",
                  "PATOGNOMÓNICA y profunda en el BORDE LATERAL de la lengua (contracción del pterigoideo)"
            ],
            [
                  "Tono postural y color de piel",
                  "Flacidez muscular con pérdida de tono; palidez cutánea extrema (\"blanco como el papel\") y sudoración",
                  "Pérdida brusca de tono; palidez cérea o cianosis por paro circulatorio",
                  "Hipertonía tónica con postura de descerebración/decorticación seguida de clonías; cianosis peribucal y rubicundez"
            ],
            [
                  "Pérdida de esfínteres",
                  "Muy infrecuente (solo en síncopes prolongados con vejiga muy pletórica)",
                  "Infrecuente",
                  "Frecuente (incontinencia urinaria por relajación del esfínter vesical post-crisis)"
            ],
            [
                  "Recuperación y estado postictal",
                  "Recuperación mental INMEDIATA y lúcida: orientado en segundos; recuerda pródromos; sin confusión",
                  "Recuperación rápida una vez restaurado el ritmo cardíaco y la perfusión",
                  "Estado postictal prolongado (15 a 60 min): somnolencia profunda, cefalea intensa, mialgias, confusión y amnesia"
            ],
            [
                  "Laboratorio y parámetros",
                  "Glicemia normal, ácido láctico normal o mínimamente elevado, prolactina plasmática normal",
                  "ECG alterado (arritmia, QT largo, bloqueo AV, onda delta WPW)",
                  "Acidosis láctica transitoria marcada (lactato > 5-10 mmol/L), alza transitoria de prolactina (a los 15-30 min)"
            ]
      ]
},
    vignette: "Mujer de 22 años, previamente sana y sin antecedentes de epilepsia, consulta en urgencias traída por sus compañeras de trabajo. Relatan que se encontraban de pie en una fila bancaria muy calurosa y concurrida, cuando la paciente refirió sentirse intensamente mareada, con visión borrosa y náuseas, tornándose pálida y sudorosa. A los pocos segundos se desplomó al suelo perdiendo el conocimiento durante aproximadamente 20 segundos. Una testigo afirma que mientras estaba en el suelo tuvo unas sacudidas breves y aisladas de ambos brazos que duraron cerca de 5 segundos. Al llegar el personal de primeros auxilios a los 2 minutos, la paciente se encontraba completamente despierta, orientada en tiempo y espacio, conversando con lucidez y recordando con nitidez los pródromos. No presentó relajación de esfínteres ni lesiones en la lengua. Su examen físico y neurológico actual es estrictamente normal.",
    explicacion: "El cuadro clínico corresponde a un Síncope Vasovagal (reflejo o neuromediado) típico con mioclonías anóxicas secundarias (Síncope Convulsivo). Los elementos clínicos que confirman el diagnóstico y descartan una crisis epiléptica son: 1) Factor precipitante claro (bipedestación prolongada en ambiente caluroso y concurrido); 2) Presencia de pródromos autonómicos graduales (visión borrosa, mareo, náuseas, diaforesis y palidez); 3) Pérdida de conciencia muy breve (< 30 segundos); 4) Sacudidas mioclónicas sincopales de muy corta duración (< 10-15 segundos) que aparecen TRAS el colapso por hipoperfusión transitoria del tronco encefálico; 5) Ausencia de mordedura lateral de lengua o relajación de esfínteres; y 6) Recuperación de conciencia inmediata, lúcida y sin confusión postictal. El síncope convulsivo no es una crisis epiléptica, no confiere riesgo de epilepsia, no requiere estudio electroencefalográfico ni fármacos antiepilépticos; la conducta correcta es educar en maniobras de contrapresión física y medidas higiénico-dietéticas.",
    keyPoints: [
      "El diagnóstico diferencial entre síncope y crisis epiléptica se basa en la anamnesis a testigos presenciales: pródromos, movimientos motores y período postictal.",
      "La mordedura profunda en el borde lateral de la lengua y la confusión postictal prolongada (15-60 min) son altamente específicas y patognomónicas de crisis epiléptica.",
      "El síncope convulsivo cursa con mioclonías asincrónicas breves (< 15 s) por hipoxia de tronco encefálico y recuperación de conciencia inmediata y lúcida sin postictal.",
      "Las crisis sintomáticas agudas provocadas (por hipoglicemia, hiponatremia, abstinencia alcohólica o ACV agudo) no constituyen epilepsia y no requieren FAEs a permanencia.",
      "Tras una 1ª crisis no provocada, solo se inicia FAE crónico si el riesgo de recurrencia a 10 años es > 60% (demostrado por lesión en neuroimagen o EEG epileptiforme)."
],
    questions: [
      {
            "stem": "La convulsión febril benigna:",
            "options": [
                  {
                        "id": "A",
                        "text": "generalmente no muestra alteraciones al EEG"
                  },
                  {
                        "id": "B",
                        "text": "es más frecuente en el sexo femenino"
                  },
                  {
                        "id": "C",
                        "text": "tiene antecedente familiar de epilepsia"
                  },
                  {
                        "id": "D",
                        "text": "se presenta con mayor frecuencia entre los seis y doce meses"
                  },
                  {
                        "id": "E",
                        "text": "responde bien al tratamiento con fenitoína"
                  }
            ],
            "correcta": "A",
            "explicacion": "La convulsión febril benigna (o simple) es un evento neurológico transitorio en un niño neurológicamente sano, asociado a fiebre, en ausencia de una infección del sistema nervioso central o de un desequilibrio metabólico agudo. Por definición, al ser \"benigna\" y no estar asociada a una patología cerebral subyacente, el electroencefalograma (EEG) realizado en el período interictal (es decir, cuando el niño está sin fiebre y sin crisis) es característicamente normal. Un EEG alterado sugeriría una posible condición subyacente, como una epilepsia, lo que alejaría el diagnóstico de una convulsión febril benigna simple.",
            "recTag": "Banco Oficial AEE · Perfil V3 1.10.2.015"
      },
      {
            "stem": "Un niño de 13 meses de edad presenta fiebre hasta 39,2°C y una convulsión tónico-clónica de un minuto de duración. Al examen se aprecia un lactante en buenas condiciones, sin signos neurológicos focales. En el examen segmentario sólo destaca faringe eritematosa y congestiva. La conducta más adecuada es:",
            "options": [
                  {
                        "id": "A",
                        "text": "Solicitar electroencefalograma y decidir si se iniciará tratamiento anticonvulsivante según hallazgos"
                  },
                  {
                        "id": "B",
                        "text": "Iniciar terapia anticonvulsivante inmediatamente"
                  },
                  {
                        "id": "C",
                        "text": "Hospitalizar, realizar exámenes de sangre y punción lumbar y decidir conducta, según resultados"
                  },
                  {
                        "id": "D",
                        "text": "Explicar a la madre el carácter benigno de este acontecimiento y no realizar exámenes"
                  },
                  {
                        "id": "E",
                        "text": "Solicitar resonancia magnética de cerebro"
                  }
            ],
            "correcta": "D",
            "explicacion": "El caso clínico describe a un niño de 13 meses con fiebre de 39,2°C y una convulsión tónico-clónica de un minuto de duración, sin signos neurológicos focales y en buenas condiciones generales, con una faringe eritematosa y congestiva. Esta presentación es clásica y cumple con los criterios de una **convulsión febril simple**. Las convulsiones febriles simples se caracterizan por ocurrir entre los 6 meses y los 5 años de edad, estar asociadas a fiebre (generalmente >38°C) sin signos de infección intracraneal, ser de tipo generalizada (como la tónico-clónica), durar menos de 15 minutos, y presentarse como un episodio único en 24 horas, con una recuperación completa del estado neurológico basal del niño. La faringitis eritematosa sugiere una causa viral común de la fiebre. Dada la naturaleza benigna y autolimitada de las convulsiones febriles simples, el manejo principal se centra en la educación y tranquilidad de los padres. No se requiere una investigación diagnóstica extensiva (como EEG, resonancia magnética, punción lumbar o exámenes de sangre rutinarios) en un niño que cumple con estos criterios y que se encuentra en buenas condiciones post-ictal, sin signos de alerta o focalidad neurológica. Es fundamental explicar a la madre que este tipo de eventos no causan daño cerebral, no tienen un impacto negativo en el desarrollo futuro del niño y el riesgo de desarrollar epilepsia es mínimo, aunque existe una posibilidad de recurrencia de convulsiones febriles con futuros episodios febriles.",
            "recTag": "Banco Oficial AEE · Perfil V3 1.10.2.015"
      }
]
  }
];

module.exports = {
  bloque2,
  flow,
  bloque2Classes: bloque2,
};
