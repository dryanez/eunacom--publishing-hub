/**
 * ============================================================================
 * TOMO 17: PSIQUIATRÍA GENERAL & SALUD MENTAL
 * Manual EUNACOM 2026 · Módulo 2: Cirugía & Especialidades Quirúrgicas
 * Color Temático: #7e22ce (Púrpura Real)
 * 18 Clases Curriculares Oficiales · 4 Bloques Temáticos
 * 52 Preguntas Oficiales AEE con Solucionario Razonado Distractor por Distractor
 * ============================================================================
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
  <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#7e22ce"/></marker></defs>
  <style>
    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}
    .t{font-size:10px;fill:#15181d}
    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#7e22ce;font-weight:700}
    .acc{fill:#7e22ce;stroke:#6b21a8}.accT{fill:#fff}.accS{font-size:8px;fill:#f3e8ff}
    .dec{fill:#faf5ff;stroke:#d8b4fe;stroke-width:1}
    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}
    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}
    .ln{stroke:#7e22ce;stroke-width:1.2;fill:none;marker-end:url(#ar)}
  </style>
  ${P.join('\n  ')}
</svg>`;
  return { title, svg, toString() { return this.svg; } };
}


const psiquiatriaClasses = [
  {
    "id": "psiq-01",
    "classId": "psiq-01",
    "tier": 3,
    "blockNum": 1,
    "blockName": "Trastornos del Ánimo & Urgencias Suicidas",
    "topicLabel": "17.1",
    "title": "Trastorno Depresivo Mayor: Criterios DSM-5, Escalas, ISRS y Guía GES",
    "perfilCode": "4.01.1.001",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "Garantía Explícita en Salud (GES N° 21): Depresión en personas de 15 años y más · Sospecha con confirmación diagnóstica en ≤ 24 horas en Atención Primaria de Salud (APS), inicio inmediato de psicoterapia y farmacoterapia (ISRS de 1.ª línea), y control clínico presencial a las 2 semanas.",
    "reconstrucciones": "EUNACOM Julio 2024 (Q#6) · EUNACOM Julio 2019 (Q#150)",
    "frecuencia": "Máxima rentabilidad · Patología de salud mental más preguntada en el EUNACOM",
    "svg": null,
    "algoTitle": "Algoritmo de Escalonamiento Terapéutico en Depresión Mayor y Manejo de Falta de Respuesta",
    "diagram": {
      "title": "Algoritmo de Escalonamiento Terapéutico en Depresión Mayor",
      "svg": "<svg viewBox=\"0 0 620 389\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#7e22ce\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#7e22ce;font-weight:700}\n    .acc{fill:#7e22ce;stroke:#6b21a8}.accT{fill:#fff}.accS{font-size:8px;fill:#f3e8ff}\n    .dec{fill:#faf5ff;stroke:#d8b4fe;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#7e22ce;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Sospecha de Episodio Depresivo Mayor (Criterios DSM-5)</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">≥ 5 síntomas por ≥ 2 semanas · Obligatorio: Ánimo depresivo o Anhedonia</text>\n  <path class=\"ln\" d=\"M310,47 V69\"/>\n  <rect class=\"warn\" x=\"100\" y=\"69\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Evaluación de Seguridad Inmediata y Descarte Bipolar / Orgánico</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">Indagar activamente riesgo suicida · Descartar hipomanía previa, TSH, anemia y fármacos</text>\n  <path class=\"ln\" d=\"M310,108 V130\"/>\n  <rect class=\"dec\" x=\"70\" y=\"130\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"145\" text-anchor=\"middle\" font-weight=\"700\">Estratificación de Severidad Clínica (Escala PHQ-9 o Hamilton)</text>\n  <text class=\"sub\" x=\"310\" y=\"157\" text-anchor=\"middle\">Definir nivel de atención según severidad y red de apoyo</text>\n  <path class=\"ln\" d=\"M310,169 V199 H158 V209\"/>\n  <path class=\"ln\" d=\"M310,199 H462 V209\"/>\n  <text class=\"lbl\" x=\"158\" y=\"194\" text-anchor=\"middle\">Leve a Moderada (PHQ-9 10-19)</text>\n  <text class=\"lbl\" x=\"462\" y=\"194\" text-anchor=\"middle\">Grave con Psicosis o Suicidio Inminente</text>\n  <rect class=\"acc\" x=\"12\" y=\"209\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"158\" y=\"224\" text-anchor=\"middle\" font-weight=\"700\">Manejo en APS (Garantía GES N° 21)</text>\n  <text class=\"accS\" x=\"158\" y=\"236\" text-anchor=\"middle\">ISRS 1.ª línea (Sertralina / Escitalopram) + Psicoterapia</text>\n  <text class=\"accS\" x=\"158\" y=\"247\" text-anchor=\"middle\">Control a 2 semanas</text>\n  <rect class=\"crit\" x=\"316\" y=\"209\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"462\" y=\"224\" text-anchor=\"middle\" font-weight=\"700\">Derivación Urgente / Hospitalización</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"236\" text-anchor=\"middle\">ISRS + Antipsicótico atípico o evaluación TEC</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"247\" text-anchor=\"middle\">Vigilancia estricta</text>\n  <path class=\"ln\" d=\"M158,259 V269 H310 V281\"/>\n  <path class=\"ln\" d=\"M462,259 V269 H310 V281\"/>\n  <rect class=\"dec\" x=\"70\" y=\"281\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"296\" text-anchor=\"middle\" font-weight=\"700\">Reevaluación de Respuesta a las 4 a 6 Semanas</text>\n  <text class=\"sub\" x=\"310\" y=\"308\" text-anchor=\"middle\">Evaluar adherencia · Si respuesta parcial: optimizar dosis a rango máximo tolerado</text>\n  <path class=\"ln\" d=\"M310,320 V342\"/>\n  <rect class=\"acc\" x=\"100\" y=\"342\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"357\" text-anchor=\"middle\" font-weight=\"700\">Fase de Mantenimiento Post-Remisión</text>\n  <text class=\"accS\" x=\"310\" y=\"369\" text-anchor=\"middle\">Mantener misma dosis por 6 a 12 meses tras remisión completa para evitar recaídas</text>\n</svg>"
    },
    "contexto": "El trastorno depresivo mayor (TDM) es la principal causa de discapacidad por enfermedad mental a nivel global y un problema de salud pública prioritario en Chile garantizado por GES N° 21. La depresión no es una debilidad del carácter ni un duelo prolongado, sino una alteración neurobiológica con disminución de neurotransmisores monoaminérgicos (serotonina, noradrenalina, dopamina) y disfunción del eje hipotálamo-hipófisis-suprarrenal con atrofia del hipocampo. El médico general debe dominar el diagnóstico clínico preciso, descartar organicidad y trastorno bipolar, iniciar ISRS a dosis adecuadas advirtiendo el período de latencia y sostener el tratamiento de mantenimiento para evitar recaídas.",
    "contentSections": [
      {
        "subhead": "1. Neurobiología, Etiopatogenia y Epidemiología de la Depresión",
        "paragraphs": [
          "La fisiopatología de la depresión involucra la <strong>hipótesis monoaminérgica</strong> (déficit funcional en la neurotransmisión de serotonina [5-HT], noradrenalina [NA] y dopamina [DA] en vías límbicas y corticales frontales), complementada por la <strong>teoría neurotrófica</strong>, en la cual el estrés crónico y el hipercortisolismo sostenido reducen la expresión del factor neurotrófico derivado del cerebro (BDNF), produciendo atrofia neuronal y pérdida sináptica en el hipocampo y la corteza prefrontal dorsolateral.",
          "En Chile, la prevalencia de depresión en la población adulta bordea el 17%, con una relación mujer:hombre de 2:1. La enfermedad presenta una alta carga de comorbilidad somática (enfermedad coronaria, diabetes mellitus, accidente cerebrovascular) y confiere un riesgo 20 veces mayor de muerte por suicidio en comparación con la población general sin patología afectiva."
        ]
      },
      {
        "subhead": "2. Criterios Diagnósticos DSM-5 y Síntomas Cardinales",
        "paragraphs": [
          "Para el diagnóstico de <strong>Episodio Depresivo Mayor según DSM-5</strong>, se requiere la presencia de al menos <strong>cinco (5) de los siguientes nueve síntomas durante un período mínimo de dos (2) semanas consecutivas</strong>, representando un cambio respecto al funcionamiento previo, y donde al menos uno de los síntomas debe ser obligatoriamente: <strong>1) Estado de ánimo deprimido</strong> la mayor parte del día, casi todos los días, o <strong>2) Anhedonia</strong> (marcada disminución del interés o placer en casi todas las actividades).",
          "Los siete síntomas restantes incluyen: <strong>3)</strong> Pérdida o aumento significativo de peso (>5% en un mes) o alteración del apetito; <strong>4)</strong> Insomnio (frecuentemente de despertar precoz o terminal) o hipersomnia casi todos los días; <strong>5)</strong> Agitación o enlentecimiento psicomotor observable; <strong>6)</strong> Fatiga o pérdida de energía casi todos los días; <strong>7)</strong> Sentimientos de inutilidad o culpa excesiva o inapropiada; <strong>8)</strong> Disminución de la capacidad para pensar o concentrarse, o indecisión; y <strong>9)</strong> Pensamientos recurrentes de muerte, ideación suicida recurrente con o sin plan estructurado.",
          "<em>Exclusión obligatoria:</em> Los síntomas no deben ser atribuibles a efectos fisiológicos de sustancias (drogas, alcohol, fármacos como corticoides o betabloqueadores), a patología médica (hipotiroidismo, anemia severa, déficit de vitamina B12, lupus), ni explicarse por un episodio maníaco o hipomaníaco previo (lo cual clasificaría el cuadro como Trastorno Bipolar)."
        ]
      },
      {
        "subhead": "3. Evaluación de Gravedad, Escalas Clínicas y Subtipos de Depresión",
        "paragraphs": [
          "La cuantificación de la severidad guía la conducta médica. En Chile, la guía clínica GES N° 21 recomienda el uso del <strong>Patient Health Questionnaire-9 (PHQ-9)</strong>: puntaje 5-9 indica depresión leve; 10-14 depresión moderada; 15-19 moderadamente grave; y 20-27 depresión grave.",
          "<strong>Subtipos clínicos relevantes para el examen:</strong>",
          "• <strong>Depresión Melancólica:</strong> Anhedonia absoluta, falta de reactividad del ánimo ante estímulos placenteros, despertar precoz (al menos 2 horas antes de lo habitual), empeoramiento matutino marcado del ánimo, enlentecimiento psicomotor grave, pérdida marcada de peso y culpa excesiva. Responde preferentemente a fármacos con acción dual o tricíclicos.",
          "• <strong>Depresión Atípica:</strong> Reactividad del ánimo conservada (se alegra temporalmente ante eventos positivos), hiperfagia con ganancia de peso (hambre de carbohidratos), hipersomnia, parálisis de plomo (pesadez intensa en extremidades) y patrón duradero de hipersensibilidad al rechazo interpersonal.",
          "• <strong>Depresión Psicótica:</strong> Episodio depresivo acompañado de ideas delirantes congruentes con el ánimo (ruina económica, culpa imperdonable, hipocondría nihilista o Síndrome de Cotard) o alucinaciones auditivas. Es una <em>urgencia psiquiátrica</em> que requiere combinación de antidepresivo + antipsicótico o Terapia Electroconvulsiva (TEC)."
        ]
      },
      {
        "subhead": "4. Farmacoterapia Antidepresiva Escalonada: ISRS, Duales y Manejo de No Respuesta",
        "paragraphs": [
          "Los <strong>Inhibidores Selectivos de la Recaptación de Serotonina (ISRS)</strong> constituyen la <strong>primera línea absoluta</strong> de tratamiento en APS por su favorable perfil de seguridad, baja letalidad en sobredosis y tolerancia:",
          "• <strong>Sertralina:</strong> Dosis inicial de 50 mg/día en la mañana (puede titularse a 100-200 mg/día). Fármaco de elección en pacientes con cardiopatía isquémica y durante la lactancia materna.",
          "• <strong>Escitalopram:</strong> Dosis de 10 a 20 mg/día. El más selectivo, con menores interacciones por citocromo P450.",
          "• <strong>Fluoxetina:</strong> Dosis de 20 a 60 mg/día. Vida media prolongada (7-14 días con su metabolito norfluoxetina), ventajoso ante olvidos de tomas pero requiere lavado prolongado.",
          "<strong>Período de latencia terapéutica:</strong> Todo médico debe explicar al paciente que el efecto antidepresivo demora <strong>entre 2 y 4 semanas</strong> en manifestarse, mientras que los efectos adversos (náuseas, cefalea, dispepsia, ansiedad transitoria) aparecen en los primeros días y suelen remitir espontáneamente.",
          "<strong>Conducta ante falta de respuesta:</strong> Si tras 4 a 6 semanas a dosis terapéutica plena hay respuesta nula o insuficiente con buena tolerancia, la conducta es <strong>aumentar la dosis</strong> al techo terapéutico antes de rotar. Si fracasa a dosis máxima o hay intolerancia, se rota a otro ISRS o a un antidepresivo dual (IRSN: Venlafaxina, Duloxetina) o multimodal (Bupropión, Mirtazapina)."
        ]
      },
      {
        "subhead": "5. Duración del Tratamiento, Criterios GES y Derivación a Especialista",
        "paragraphs": [
          "<strong>Regla de Oro de Mantenimiento:</strong> Una vez alcanzada la remisión sintomática completa, el tratamiento farmacológico <strong>DEBE mantenerse a la misma dosis eficaz durante un período mínimo de 6 a 12 meses</strong> en un primer episodio depresivo para prevenir recaídas tempranas. En pacientes con 3 o más episodios recurrentes o factores de alto riesgo, el mantenimiento puede ser indefinido.",
          "<strong>Criterios de Derivación Inmediata a Nivel Secundario (COSAM / Psiquiatría):</strong> 1) Riesgo suicida moderado o alto; 2) Presencia de síntomas psicóticos; 3) Sospecha de trastorno bipolar (antecedente de manía/hipomanía); 4) Depresión severa refractaria (falla a 2 esquemas antidepresivos bien indicados); 5) Depresión con comorbilidad grave por abuso de sustancias; y 6) Depresión grave en el embarazo o puerperio con rechazo alimentario."
        ]
      }
    ],
    "table": {
      "title": "Criterios Diagnósticos DSM-5 y Clasificación por Subtipos Clínicos de Depresión",
      "headers": [
        "Subtipo Clínico",
        "Características Cardinales",
        "Biomarcadores / Clínica Clave",
        "Fármaco Preferencial"
      ],
      "rows": [
        [
          "Depresión Típica / Mayor",
          "≥ 5 de 9 criterios por ≥ 2 semanas con ánimo bajo o anhedonia",
          "Insomnio de conciliación/intermedio, anorexia, astenia, culpa",
          "ISRS (Sertralina 50-100 mg, Escitalopram 10-20 mg)"
        ],
        [
          "Depresión Melancólica",
          "Anhedonia completa, falta de reactividad afectiva, culpa patológica",
          "Despertar precoz (> 2 h antes), peor en la mañana, baja de peso rápida",
          "Duales (Venlafaxina), Tricíclicos (Amitriptilina) o TEC si severa"
        ],
        [
          "Depresión Atípica",
          "Reactividad del ánimo positiva transitoria, sensibilidad al rechazo",
          "Hipersomnia diurna, hiperfagia (\"carbo craving\"), parálisis de plomo",
          "ISRS, Bupropión o IMAO en casos resistentes"
        ],
        [
          "Depresión Psicótica",
          "Delirios de culpa, ruina, hipocondría extrema (Cotard) o alucinaciones",
          "Emergencia psiquiátrica · Riesgo suicida extremo · Catatonía",
          "ISRS/IRSN + Antipsicótico atípico (Olanzapina/Quetiapina) o TEC"
        ],
        [
          "Depresión Estacional (SAD)",
          "Episodios recurrentes en otoño/invierno con remisión en primavera",
          "Hipersomnia, aumento de peso, relación con privación de luz solar",
          "Fototerapia matinal (10.000 lux) + ISRS (Fluoxetina/Bupropión)"
        ]
      ]
    },
    "severityTable": {
      "title": "Estratificación de Severidad PHQ-9, Hamilton y Criterios de Derivación GES N° 21",
      "headers": [
        "Puntaje PHQ-9",
        "Nivel de Severidad",
        "Manejo Clínico Recomendado",
        "Nivel de Derivación"
      ],
      "rows": [
        [
          "0 – 4 puntos",
          "Mínimo / Sin depresión",
          "Educación en hábitos de sueño y vida saludable",
          "Atención Primaria (seguimiento de rutina)"
        ],
        [
          "5 – 9 puntos",
          "Depresión Leve",
          "Psicoeducación, intervenciones psicosociales breves, consejería",
          "APS · Seguimiento activo a las 2-4 semanas"
        ],
        [
          "10 – 14 puntos",
          "Depresión Moderada",
          "Psicoterapia estructurada (TCC) + Farmacoterapia de 1.ª línea (ISRS)",
          "APS · Control cada 2 semanas hasta estabilidad"
        ],
        [
          "15 – 19 puntos",
          "Depresión Moderadamente Grave",
          "ISRS a dosis plenas + Psicoterapia GES · Apoyo familiar estricto",
          "APS / Consultoría de Salud Mental"
        ],
        [
          "20 – 27 puntos",
          "Depresión Grave",
          "Farmacoterapia combinada o dual · Evaluación de hospitalización si hay suicidio",
          "Derivación URGENTE a COSAM / Servicio de Urgencia"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Farmacología Antidepresiva de Primera y Segunda Línea: Dosis, Efectos y Precauciones",
      "headers": [
        "Fármaco / Familia",
        "Mecanismo de Acción",
        "Dosis Habitual / Vía",
        "Efectos Adversos y Perlas Críticas"
      ],
      "rows": [
        [
          "Sertralina (ISRS)",
          "Inhibición selectiva recaptación 5-HT",
          "50 – 200 mg/día VO (mañana)",
          "Seguro en cardiopatía isquémica y lactancia · Molestias GI transitorias al inicio"
        ],
        [
          "Escitalopram (ISRS)",
          "Inhibición selectiva pura de 5-HT",
          "10 – 20 mg/día VO (mañana)",
          "Menores interacciones farmacológicas · Precaución prolongación QTc en dosis > 20 mg"
        ],
        [
          "Fluoxetina (ISRS)",
          "Inhibición recaptación 5-HT + 5-HT2c",
          "20 – 60 mg/día VO (mañana)",
          "Leve efecto estimulante · Vida media larga (disminuye síndrome de discontinuación)"
        ],
        [
          "Venlafaxina (IRSN)",
          "Inhibición dual 5-HT y NA (a dosis > 150 mg)",
          "75 – 225 mg/día VO (con comida)",
          "Eficaz en dolor neuropático y melancolía · Monitorizar presión arterial sistémica"
        ],
        [
          "Bupropión (IRND)",
          "Inhibición recaptación NA y DA",
          "150 – 300 mg/día VO (mañana)",
          "Sin disfunción sexual ni ganancia de peso · Útil para cesación tabáquica · Prohibido en epilepsia/TCA"
        ],
        [
          "Mirtazapina (NaSSA)",
          "Antagonista alfa-2 presináptico y 5-HT2/3",
          "15 – 45 mg/día VO (noche)",
          "Sedación e incremento marcado de apetito · Excelente en ancianos con insomnio y baja de peso"
        ]
      ]
    },
    "vignette": {
      "title": "Caso Clínico Tipo EUNACOM",
      "text": "Mujer de 41 años, profesora de enseñanza básica, sin antecedentes mórbidos previos, consulta en el CESFAM acompañada por su esposo. Refiere que desde hace 6 semanas presenta tristeza persistente que no cede ante situaciones agradables, llanto espontáneo casi diario y marcada falta de motivación que le impide disfrutar de sus pasatiempos. Presenta insomnio terminal despertando a las 04:00 AM con angustia intensa, fatiga durante el día y ha perdido 4 kg de peso por falta de apetito. Se siente una \"inútil\" y refiere sentimientos de culpa desproporcionados por problemas domésticos cotidianos. Su puntaje en la escala PHQ-9 es de 17 puntos. Al ser interrogada directamente, niega ideación de muerte estructurada y no presenta antecedentes personales ni familiares de euforia o hiperactividad.",
      "conducta": "La paciente cumple con los criterios DSM-5 para un Episodio Depresivo Mayor (ánimo deprimido, anhedonia, baja de peso, insomnio terminal, fatiga, culpa excesiva y disfunción laboral de 6 semanas de evolución), clasificado como moderadamente grave (PHQ-9 = 17) con patrón melancólico. Según la Guía Clínica GES N° 21, la conducta médica obligatoria en APS es: 1) Iniciar tratamiento farmacológico de primera línea con un ISRS como Sertralina 50 mg/día o Escitalopram 10 mg/día en la mañana; 2) Indicar psicoterapia individual estructurada; 3) Educar detalladamente a la paciente y su esposo sobre el período de latencia del fármaco (el alivio clínico demora entre 2 y 4 semanas, mientras que las náuseas iniciales son transitorias); y 4) Citar a un control presencial a las 2 semanas para evaluar adherencia, tolerancia y reevaluar seguridad. Está contraindicado usar benzodiacepinas en monoterapia, ya que no tratan la depresión de base y conllevan riesgo de dependencia."
    },
    "explicacion": "La paciente cumple con los criterios DSM-5 para un Episodio Depresivo Mayor (ánimo deprimido, anhedonia, baja de peso, insomnio terminal, fatiga, culpa excesiva y disfunción laboral de 6 semanas de evolución), clasificado como moderadamente grave (PHQ-9 = 17) con patrón melancólico. Según la Guía Clínica GES N° 21, la conducta médica obligatoria en APS es: 1) Iniciar tratamiento farmacológico de primera línea con un ISRS como Sertralina 50 mg/día o Escitalopram 10 mg/día en la mañana; 2) Indicar psicoterapia individual estructurada; 3) Educar detalladamente a la paciente y su esposo sobre el período de latencia del fármaco (el alivio clínico demora entre 2 y 4 semanas, mientras que las náuseas iniciales son transitorias); y 4) Citar a un control presencial a las 2 semanas para evaluar adherencia, tolerancia y reevaluar seguridad. Está contraindicado usar benzodiacepinas en monoterapia, ya que no tratan la depresión de base y conllevan riesgo de dependencia.",
    "keyPoints": [
      "El diagnóstico de Trastorno Depresivo Mayor exige al menos 5 de 9 criterios DSM-5 por ≥ 2 semanas consecutivas, con presencia obligatoria de ánimo deprimido o anhedonia.",
      "En Chile, el TDM en mayores de 15 años está cubierto por GES N° 21: la confirmación diagnóstica e inicio terapéutico deben realizarse dentro de 24 horas desde la sospecha.",
      "Los ISRS (Sertralina 50-100 mg/día o Escitalopram 10-20 mg/día) son la primera línea farmacológica de elección en atención primaria.",
      "Latencia de acción: los antidepresivos requieren entre 2 y 4 semanas para alcanzar su efecto terapéutico; jamás suspender precozmente por aparente ineficacia en la primera semana.",
      "Regla de oro de mantenimiento: tras lograr la remisión clínica completa, el fármaco se debe mantener a la misma dosis durante 6 a 12 meses para evitar recaídas.",
      "Sertralina es el antidepresivo más seguro en pacientes con cardiopatía isquémica reciente y de primera elección en la mujer durante la lactancia materna.",
      "Bupropión no produce disfunción sexual ni aumento de peso, pero está formalmente contraindicado en pacientes con epilepsia o antecedentes de bulimia/anorexia por riesgo de convulsiones.",
      "Trampa del examen: Está estrictamente contraindicado prescribir benzodiacepinas en monoterapia para tratar la depresión, pues carecen de efecto antidepresivo y aumentan el riesgo de cronificación y suicidio impulsivo."
    ],
    "questions": [
      {
        "stem": "Una mujer de 38 años consulta por un cuadro de 5 semanas de evolución caracterizado por ánimo persistentemente bajo, anhedonia, pérdida de 3 kg de peso, dificultad para concentrarse en su trabajo y despertar precoz con angustia matinal. Niega antecedentes mórbidos y su examen físico es normal. Se aplica escala PHQ-9 con resultado de 16 puntos. No presenta ideación suicida ni antecedentes personales o familiares de manía. ¿Cuál es la conducta terapéutica inicial más adecuada según la guía clínica GES?",
        "options": [
          {
            "id": "A",
            "text": "Indicar Clonazepam 1 mg cada 12 horas por 3 meses y control al término del tratamiento"
          },
          {
            "id": "B",
            "text": "Iniciar Sertralina 50 mg al día, asociar psicoterapia, educar sobre la latencia de 2 a 4 semanas y controlar en 2 semanas"
          },
          {
            "id": "C",
            "text": "Derivar inmediatamente a hospitalización psiquiátrica cerrada para inicio de terapia electroconvulsiva"
          },
          {
            "id": "D",
            "text": "Indicar reposo laboral exclusivo por 30 días sin iniciar psicofármacos hasta una segunda evaluación"
          },
          {
            "id": "E",
            "text": "Iniciar Amitriptilina 150 mg al día junto con Haloperidol 5 mg cada noche"
          }
        ],
        "correcta": "B",
        "explicacion": "La paciente presenta un episodio depresivo mayor moderadamente grave cubierto por el GES N° 21. La indicación correcta de primera línea es un ISRS como Sertralina 50 mg/día por la mañana, acompañado de psicoterapia, educación al paciente sobre el período de latencia terapéutica (2-4 semanas) y control en 2 semanas para supervisar adherencia y tolerancia. El distractor A es erróneo porque las benzodiacepinas no tienen acción antidepresiva y generan dependencia. El distractor C es incorrecto porque no hay ideación suicida activa ni síntomas psicóticos que justifiquen hospitalización o TEC. El distractor D posterga injustificadamente el tratamiento normado. El distractor E usa dosis tóxicas de tricíclicos y antipsicóticos innecesarios. Perla de examen: Todo inicio de ISRS en APS debe acompañarse de educación sobre la latencia de respuesta para evitar el abandono prematuro por parte del paciente.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.1.001"
      },
      {
        "stem": "Un hombre de 45 años con diagnóstico de trastorno depresivo mayor inició tratamiento con Sertralina 50 mg/día hace 5 semanas. En su control refiere buena tolerancia al fármaco, sin efectos adversos, pero persiste con ánimo deprimido, anhedonia moderada y desgano que limitan su rendimiento laboral. El examen mental no evidencia síntomas psicóticos ni riesgo suicida. ¿Cuál es la conducta farmacológica más indicada en este momento?",
        "options": [
          {
            "id": "A",
            "text": "Aumentar la dosis de Sertralina a 100 mg/día y reevaluar en 3 a 4 semanas"
          },
          {
            "id": "B",
            "text": "Suspender de inmediato la Sertralina y rotar a Amitriptilina"
          },
          {
            "id": "C",
            "text": "Asociar Alprazolam 2 mg al día de forma permanente"
          },
          {
            "id": "D",
            "text": "Declarar refractariedad terapéutica y solicitar evaluación para psicocirugía"
          },
          {
            "id": "E",
            "text": "Mantener la dosis de 50 mg/día sin cambios por otros 6 meses a la espera de respuesta tardía"
          }
        ],
        "correcta": "A",
        "explicacion": "Cuando un paciente muestra una respuesta parcial o insuficiente tras 4 a 6 semanas de tratamiento antidepresivo con buena tolerancia a dosis inicial, el primer paso clínico racional es optimizar la dosis dentro del rango terapéutico (subir Sertralina a 100 mg/día, pudiendo llegar hasta 200 mg/día) antes de considerar el cambio de fármaco. El distractor B es erróneo porque rotar a un tricíclico sin haber intentado optimizar el primer ISRS expone innecesariamente al paciente a efectos anticolinérgicos y cardiotoxicidad. El distractor C agrega una benzodiacepina sin valor antidepresivo. El distractor D es absurdo. El distractor E mantiene una dosis subterapéutica prolongando la discapacidad del paciente. Perla de examen: En falla de respuesta antidepresiva con buena tolerancia, optimizar dosis a rango pleno siempre precede al cambio de familia farmacológica.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.1.001"
      },
      {
        "stem": "Un hombre de 76 años, viudo hace 3 meses, es llevado a urgencias por su hija debido a que en las últimas 2 semanas dejó de alimentarse y beber líquidos casi por completo, encontrándose caquéctico y con deshidratación clínica. En la entrevista balbucea con gran lentitud afirmando que \"mis órganos internos se pudrieron, ya estoy muerto y enterrado, no merezco comer\". El laboratorio muestra urea elevada y sodio en 150 mEq/L. ¿Cuál es el diagnóstico sindromático y la conducta prioritaria?",
        "options": [
          {
            "id": "A",
            "text": "Trastorno adaptativo leve; se indica psicoterapia ambulatoria semanal"
          },
          {
            "id": "B",
            "text": "Demencia vascular avanzada; se indica donepezilo e internación en hogar de ancianos"
          },
          {
            "id": "C",
            "text": "Depresión mayor con síntomas psicóticos (Síndrome de Cotard); hospitalización urgente, hidratación parenteral y evaluación de TEC"
          },
          {
            "id": "D",
            "text": "Esquizofrenia paranoide tardía; iniciar Haloperidol 20 mg IM cada 8 horas en sala general"
          },
          {
            "id": "E",
            "text": "Duelo no complicado; tranquilizar a la familia e indicar vitaminas orales"
          }
        ],
        "correcta": "C",
        "explicacion": "El paciente presenta una depresión psicótica grave con delirio nihilista o de negación de órganos (Síndrome de Cotard), acompañada de deshidratación y riesgo vital inminente por rechazo alimentario completo. Esta es una indicación clásica de hospitalización médica/psiquiátrica de urgencia para soporte hidroelectrolítico y evaluación de Terapia Electroconvulsiva (TEC), que es el tratamiento de más rápida respuesta y mayor eficacia en depresión psicótica con compromiso vital en el adulto mayor. Los distractores A y E minimizan un cuadro mortal. El distractor B confunde el cuadro afectivo psicótico agudo con demencia. El distractor D propone dosis tóxicas de antipsicóticos típicos que causarían rigidez extrema y muerte. Trampa de examen: La presencia de delirios nihilistas (Cotard) en un anciano con depresión severa y rechazo alimentario constituye una emergencia psiquiátrica que prioriza la TEC sobre la farmacoterapia lenta.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.1.001"
      },
      {
        "stem": "Una paciente de 29 años tratada por un primer episodio de depresión mayor moderada con Escitalopram 10 mg/día alcanza la remisión sintomática completa (PHQ-9 = 2 puntos, asintomática, reincorporada a sus labores) al cumplir 3 meses de terapia. Pregunta cuándo puede suspender el medicamento. ¿Cuál es la indicación médica correcta?",
        "options": [
          {
            "id": "A",
            "text": "Suspender de inmediato el fármaco, ya que al no haber síntomas se considera curada"
          },
          {
            "id": "B",
            "text": "Disminuir la dosis a la mitad durante una semana y luego suspender"
          },
          {
            "id": "C",
            "text": "Mantener la misma dosis de 10 mg/día durante al menos 6 a 12 meses adicionales para prevenir recaídas"
          },
          {
            "id": "D",
            "text": "Cambiar a Clonazepam de mantención por 1 año"
          },
          {
            "id": "E",
            "text": "Tomar el fármaco únicamente los días en que experimente tristeza o desánimo"
          }
        ],
        "correcta": "C",
        "explicacion": "La regla de oro del tratamiento antidepresivo establece que, tras lograr la remisión clínica completa en un primer episodio depresivo mayor, la fase de mantenimiento debe prolongarse a la misma dosis eficaz durante un período de 6 a 12 meses (guías GES y MINSAL). Suspender prematuramente el antidepresivo al desaparecer los síntomas (A y B) se asocia a una tasa de recaída superior al 50% en los primeros 6 meses. El distractor D expone a dependencia y no previene recaídas afectivas. El distractor E es un error conceptual grave ya que los antidepresivos no funcionan como analgésicos a demanda. Perla de examen: En el primer episodio depresivo mayor, la duración mínima de mantención post-remisión es de 6 a 12 meses a dosis plena para consolidar la plasticidad sináptica.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.1.001"
      }
    ],
    "vignetteText": "Mujer de 41 años, profesora de enseñanza básica, sin antecedentes mórbidos previos, consulta en el CESFAM acompañada por su esposo. Refiere que desde hace 6 semanas presenta tristeza persistente que no cede ante situaciones agradables, llanto espontáneo casi diario y marcada falta de motivación que le impide disfrutar de sus pasatiempos. Presenta insomnio terminal despertando a las 04:00 AM con angustia intensa, fatiga durante el día y ha perdido 4 kg de peso por falta de apetito. Se siente una \"inútil\" y refiere sentimientos de culpa desproporcionados por problemas domésticos cotidianos. Su puntaje en la escala PHQ-9 es de 17 puntos. Al ser interrogada directamente, niega ideación de muerte estructurada y no presenta antecedentes personales ni familiares de euforia o hiperactividad."
  },
  {
    "id": "psiq-02",
    "classId": "psiq-02",
    "tier": 3,
    "blockNum": 1,
    "blockName": "Trastornos del Ánimo & Urgencias Suicidas",
    "topicLabel": "17.2",
    "title": "Trastorno Bipolar I y II: Manía vs Hipomanía, Estabilizadores (Litio/Valproato) y Guía GES",
    "perfilCode": "1.12.1.002",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Garantía Explícita en Salud (GES N° 52): Trastorno Bipolar en personas de 15 años y más · Confirmación diagnóstica por médico especialista en psiquiatría en ≤ 60 días desde la sospecha, inicio inmediato de tratamiento farmacológico estabilizador del ánimo y hospitalización de urgencia protegida en episodio maníaco agudo.",
    "reconstrucciones": "Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026",
    "frecuencia": "Alta · Diagnóstico diferencial crítico de depresión recurrente y urgencias afectivas",
    "svg": null,
    "algoTitle": "Algoritmo Diferencial y Terapéutico: Manía Aguda vs Hipomanía vs Depresión Bipolar",
    "diagram": {
      "title": "Algoritmo Diferencial y Terapéutico del Trastorno Bipolar",
      "svg": "<svg viewBox=\"0 0 620 411\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#7e22ce\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#7e22ce;font-weight:700}\n    .acc{fill:#7e22ce;stroke:#6b21a8}.accT{fill:#fff}.accS{font-size:8px;fill:#f3e8ff}\n    .dec{fill:#faf5ff;stroke:#d8b4fe;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#7e22ce;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Evaluación de Paciente con Ánimo Elevado, Expansivo o Irritable</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Aumento de energía · Disminución de necesidad de dormir · Verborrea y fuga de ideas</text>\n  <path class=\"ln\" d=\"M310,47 V69\"/>\n  <rect class=\"dec\" x=\"70\" y=\"69\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">¿Presenta Criterios de Manía o de Hipomanía?</text>\n  <text class=\"sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">Duración, repercusión funcional y presencia de psicosis</text>\n  <path class=\"ln\" d=\"M310,108 V138 H158 V148\"/>\n  <path class=\"ln\" d=\"M310,138 H462 V148\"/>\n  <text class=\"lbl\" x=\"158\" y=\"133\" text-anchor=\"middle\">Manía (≥ 7 días, psicosis o disfunción severa)</text>\n  <text class=\"lbl\" x=\"462\" y=\"133\" text-anchor=\"middle\">Hipomanía (≥ 4 días, sin psicosis ni disfunción grave)</text>\n  <rect class=\"crit\" x=\"12\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"158\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Trastorno Bipolar Tipo I</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"175\" text-anchor=\"middle\">Urgencia psiquiátrica · Riesgo de daño</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"186\" text-anchor=\"middle\">Hospitalización frecuente</text>\n  <rect class=\"dec\" x=\"316\" y=\"148\" width=\"292\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"462\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Trastorno Bipolar Tipo II</text>\n  <text class=\"sub\" x=\"462\" y=\"175\" text-anchor=\"middle\">Requiere antecedente de ≥ 1 Episodio Depresivo Mayor</text>\n  <path class=\"ln\" d=\"M158,198 V208 H310 V220\"/>\n  <path class=\"ln\" d=\"M462,198 V208 H310 V220\"/>\n  <rect class=\"warn\" x=\"100\" y=\"220\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">Manejo de Fase Maníaca Aguda</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"247\" text-anchor=\"middle\">Antipsicótico atípico (Olanzapina/Quetiapina/Risperidona)</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"258\" text-anchor=\"middle\">+ Estabilizador (Litio o Valproato)</text>\n  <path class=\"ln\" d=\"M310,270 V292\"/>\n  <rect class=\"acc\" x=\"100\" y=\"292\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"307\" text-anchor=\"middle\" font-weight=\"700\">Tratamiento de Mantenimiento Profiláctico</text>\n  <text class=\"accS\" x=\"310\" y=\"319\" text-anchor=\"middle\">Carbonato de Litio (meta litemia 0.6-1.0 mEq/L) · Monitoreo renal y tiroideo semestral</text>\n  <path class=\"ln\" d=\"M310,331 V353\"/>\n  <rect class=\"warn\" x=\"100\" y=\"353\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"368\" text-anchor=\"middle\" font-weight=\"700\">Regla de Oro en Depresión Bipolar</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"380\" text-anchor=\"middle\">PROHIBIDA la monoterapia con antidepresivos</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"391\" text-anchor=\"middle\">Riesgo de viraje maníaco e inducción de ciclado rápido</text>\n</svg>"
    },
    "contexto": "El trastorno bipolar es una patología psiquiátrica crónica y recurrente caracterizada por fluctuaciones patológicas del estado de ánimo entre polos de exaltación (manía/hipomanía) y depresión profunda. Su base genética es la más alta entre los trastornos psiquiátricos mayores (heredabilidad ~80%). Un error frecuente y catastrófico en el examen y en la clínica es confundir una depresión bipolar con una depresión monopolar y prescribir antidepresivos en monoterapia, lo que induce viraje a manía severa, aceleración de ciclos o conductas suicidas. El pilar innegociable es el uso de estabilizadores del ánimo, siendo el litio el fármaco de referencia con demostrada capacidad antisuicida.",
    "contentSections": [
      {
        "subhead": "1. Clasificación Nosológica: Trastorno Bipolar I vs Bipolar II vs Ciclotimia",
        "paragraphs": [
          "La distinción entre los subtipos de trastorno bipolar radica en la magnitud del polo de exaltación anímica:",
          "• <strong>Trastorno Bipolar Tipo I:</strong> Requiere la ocurrencia de al menos <strong>un episodio maníaco completo</strong> a lo largo de la vida. No es obligatorio haber presentado un episodio depresivo para el diagnóstico (aunque más del 90% los presentará). Un solo episodio maníaco sella el diagnóstico de Bipolar I.",
          "• <strong>Trastorno Bipolar Tipo II:</strong> Requiere al menos <strong>un episodio hipomaníaco</strong> Y al menos <strong>un episodio depresivo mayor</strong>. Si el paciente alguna vez presentó un episodio maníaco, el diagnóstico es Bipolar I, nunca Bipolar II.",
          "• <strong>Trastorno Ciclotímico:</strong> Presencia durante al menos 2 años (1 año en niños/adolescentes) de períodos fluctuantes con síntomas hipomaníacos y depresivos que no alcanzan los criterios de gravedad ni duración para hipomanía ni depresión mayor."
        ]
      },
      {
        "subhead": "2. Criterios DSM-5: Diagnóstico Diferencial entre Manía e Hipomanía",
        "paragraphs": [
          "Tanto la manía como la hipomanía comparten la tríada cardinal: ánimo anormal y persistentemente elevado, expansivo o irritable, y un aumento anormal y persistente de la actividad o la energía dirigida a objetivos, acompañado de al menos tres de los siguientes síntomas (cuatro si el ánimo es solo irritable):",
          "<strong>1)</strong> Autoestima exagerada o megalomanía; <strong>2)</strong> Disminución de la necesidad de dormir (se siente descansado tras dormir 2-3 horas); <strong>3)</strong> Verborrea o presión para hablar; <strong>4)</strong> Fuga de ideas o pensamiento acelerado; <strong>5)</strong> Facilidad de distracción; <strong>6)</strong> Aumento de actividad dirigida a metas o agitación psicomotora; y <strong>7)</strong> Participación desmedida en actividades con alto potencial de consecuencias perjudiciales (compras descontroladas, indiscreciones sexuales, inversiones imprudentes).",
          "<strong>Las tres diferencias clave que diferencian Manía de Hipomanía son:</strong>",
          "• <strong>Duración mínima:</strong> Manía requiere al menos <strong>7 días consecutivos</strong> (o cualquier duración si requiere hospitalización); Hipomanía requiere al menos <strong>4 días consecutivos</strong>.",
          "• <strong>Disfunción social/laboral:</strong> En la manía la disfunción es <em>grave y evidente</em>; en la hipomanía <em>no hay disfunción social ni laboral significativa</em> (incluso puede aumentar la productividad).",
          "• <strong>Síntomas psicóticos:</strong> La presencia de síntomas psicóticos (delirios de grandeza, alucinaciones) clasifica el episodio <strong>automáticamente como MANÍA</strong> (Bipolar I), independientemente de la duración. La hipomanía NUNCA cursa con psicosis."
        ]
      },
      {
        "subhead": "3. Manejo Farmacológico de la Manía Aguda y Depresión Bipolar",
        "paragraphs": [
          "<strong>Fase Maníaca Aguda:</strong> Es una emergencia médica. El tratamiento de elección consiste en la combinación de un <strong>antipsicótico atípico</strong> (Olanzapina 10-20 mg/día, Risperidona 2-6 mg/día, Quetiapina 400-800 mg/día o Aripiprazol) asociado a un <strong>estabilizador del ánimo</strong> (Carbonato de Litio o Valproato de sodio). Si coexiste agitación severa o riesgo para sí mismo o terceros, se indica hospitalización psiquiátrica protegida (cobertura GES N° 52).",
          "<strong>Fase Depresiva Bipolar:</strong> La depresión bipolar NO se trata igual que la unipolar. Los fármacos aprobados y con mayor evidencia son <strong>Quetiapina</strong> (300 mg/día), <strong>Lurasidona</strong>, <strong>Cariprazina</strong> o la combinación de <strong>Olanzapina + Fluoxetina</strong>. La <strong>Lamotrigina</strong> es muy eficaz en la prevención y tratamiento de fases depresivas pero requiere titulación muy lenta para prevenir el síndrome de Stevens-Johnson.",
          "<strong>Contraindicación EUNACOM absoluta:</strong> NUNCA prescribir antidepresivos en monoterapia en un paciente bipolar. Los antidepresivos pueden desencadenar un <em>viraje maníaco</em> agudo, inducir ciclado rápido (> 4 episodios al año) o aumentar la impulsividad y suicidabilidad."
        ]
      },
      {
        "subhead": "4. Carbonato de Litio: Monitorización, Rango Terapéutico y Toxicidad",
        "paragraphs": [
          "El <strong>Carbonato de Litio</strong> es el estándar de oro en la profilaxis del trastorno bipolar y el único fármaco con <strong>efecto antisuicida comprobado e independiente</strong> en esta patología.",
          "<strong>Niveles plasmáticos (Litemia):</strong> El litio posee un margen terapéutico muy estrecho. Se monitoriza mediante muestra sanguínea matinal obtenida exactamente a las <strong>12 horas post-dosis</strong>:",
          "• Rango de mantenimiento profiláctico: <strong>0.6 a 1.0 mEq/L</strong>.",
          "• Rango de manía aguda: <strong>0.8 a 1.2 mEq/L</strong>.",
          "<strong>Evaluación basal previa obligatoria:</strong> Función renal (creatinina, VFG), orina completa, función tiroidea (TSH), electrolitos plasmáticos, ECG y test de embarazo.",
          "<strong>Toxicidad por Litio:</strong> Se gatilla frecuentemente por hipovolemia, deshidratación, dieta hiposódica o fármacos que disminuyen su excreción renal: <strong>AINEs, diuréticos tiazídicos e IECA/ARA-II</strong> (asociaciones que aumentan los niveles de litio y están desaconsejadas):",
          "• <em>Litemia 1.5 – 2.0 mEq/L (leve):</em> Náuseas, vómitos, diarrea, temblor fino de manos, debilidad muscular.",
          "• <em>Litemia 2.0 – 2.5 mEq/L (moderada):</em> Temblor grosero, ataxia, disartria, hiperreflexia, confusión, clonus.",
          "• <em>Litemia > 2.5 mEq/L (grave):</em> Convulsiones, arritmias, insuficiencia renal aguda, coma y muerte. Manejo: suspensión de litio, hidratación masiva con suero salino isotónico; <strong>Hemodiálisis de urgencia</strong> si litemia > 4.0 mEq/L (o > 2.5 mEq/L con deterioro neurológico o falla renal)."
        ]
      },
      {
        "subhead": "5. Otros Estabilizadores y Consideraciones Especiales en la Mujer",
        "paragraphs": [
          "• <strong>Valproato de Sodio / Ácido Valproico:</strong> Excelente en manía disfórica, episodios mixtos y ciclado rápido. Rango terapéutico: <strong>50 a 100 µg/mL</strong>. Exige control de función hepática y hemograma (riesgo de trombocitopenia y pancreatitis). <em>Alerta teratogénica:</em> Altamente teratogénico (espina bífida, defectos del tubo neural, retraso cognitivo en el feto), contraindicado en mujeres en edad fértil sin anticoncepción rigurosa.",
          "• <strong>Lamotrigina:</strong> Profilaxis de recaídas depresivas. Requiere inicio con 25 mg/día y titulación quincenal escalonada debido al riesgo de rash cutáneo grave (Síndrome de Stevens-Johnson / NET)."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial Clínico: Manía vs Hipomanía vs Episodio Mixto",
      "headers": [
        "Parámetro",
        "Episodio Maníaco (Bipolar I)",
        "Episodio Hipomaníaco (Bipolar II)",
        "Episodio Mixto"
      ],
      "rows": [
        [
          "Duración mínima",
          "≥ 7 días consecutivos (o cualquier duración si se hospitaliza)",
          "≥ 4 días consecutivos",
          "Cumple criterios de manía/hipomanía + síntomas depresivos simultáneos"
        ],
        [
          "Disfunción funcional",
          "Severa: incapacidad laboral, quiebra económica, problemas legales",
          "Ausente o leve: funcionalidad social y laboral conservada",
          "Severa con gran disforia, angustia e impulsividad"
        ],
        [
          "Síntomas psicóticos",
          "Frecuentes (delirios megalomaníacos, místicos o auditivos)",
          "ESTRICTAMENTE AUSENTES (su presencia = manía)",
          "Pueden estar presentes (congruentes o incongruentes)"
        ],
        [
          "Criterio de hospitalización",
          "Frecuentemente necesaria por riesgo físico o social",
          "NUNCA requiere hospitalización (si requiere = manía)",
          "Alta necesidad por riesgo suicida extremo"
        ],
        [
          "Diagnóstico resultante",
          "Trastorno Bipolar Tipo I (un solo episodio lo define)",
          "Trastorno Bipolar Tipo II (exige además depresión previa)",
          "Especificador de Bipolar I o II según gravedad"
        ]
      ]
    },
    "severityTable": {
      "title": "Monitorización de Estabilizadores del Ánimo: Niveles, Toxicidad y Precauciones",
      "headers": [
        "Estabilizador",
        "Rango Terapéutico",
        "Órganos Diana / Toxicidad Crónica",
        "Interacciones Peligrosas"
      ],
      "rows": [
        [
          "Carbonato de Litio",
          "0.6 – 1.0 mEq/L (mantenimiento) · 0.8 – 1.2 mEq/L (agudo)",
          "Nefropatía tubulointersticial, diabetes insípida nefrogénica, hipotiroidismo",
          "AINEs, Tiazidas, IECA/ARA-II (aumentan litemia por retención renal)"
        ],
        [
          "Valproato Sódico",
          "50 – 100 µg/mL",
          "Hepatotoxicidad, trombocitopenia, pancreatitis, teratogénesis mayor (tubo neural)",
          "Aumenta niveles de lamotrigina (reduce su depuración hepática)"
        ],
        [
          "Lamotrigina",
          "Monitoreo clínico (titulación lenta 25 mg c/2 sem)",
          "Rash cutáneo, Síndrome de Stevens-Johnson, Necrólisis Epidérmica Tóxica",
          "Valproato duplica su nivel; Carbamazepina reduce su nivel a la mitad"
        ],
        [
          "Carbamazepina",
          "4 – 12 µg/mL",
          "Aplasia medular, agranulocitosis, hiponatremia por SIADH, inducción CYP3A4",
          "Autoinductor enzimático masivo · Disminuye eficacia de anticonceptivos"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Esquemas Terapéuticos en Fase Maníaca, Depresión Bipolar y Profilaxis",
      "headers": [
        "Escenario Clínico",
        "Estrategia de Primera Línea",
        "Alternativa Terapéutica",
        "Fármacos Contraindicados / Errores"
      ],
      "rows": [
        [
          "Manía Aguda Severa con Psicosis",
          "Antipsicótico atípico (Olanzapina 10-20 mg o Risperidona 3-6 mg) + Litio o Valproato",
          "Haloperidol 5 mg IM/VO + Lorazepam (agitación aguda) o TEC si refractaria",
          "Antidepresivos · Suspender inmediatamente si los tomaba"
        ],
        [
          "Manía Aguda Moderada",
          "Monoterapia con Litio, Valproato o Quetiapina 400-800 mg/día",
          "Aripiprazol 15-30 mg/día o Asenapina",
          "Monoterapia con benzodiacepinas a largo plazo"
        ],
        [
          "Depresión Bipolar Aguda",
          "Quetiapina 300 mg/día o Lurasidona 40-80 mg/día o Olanzapina-Fluoxetina",
          "Lamotrigina (titulación lenta) o Cariprazina",
          "ISRS o Duales en monoterapia (riesgo de viraje y suicidio)"
        ],
        [
          "Profilaxis y Mantenimiento",
          "Carbonato de Litio (meta 0.6-0.8 mEq/L) como estándar de oro",
          "Valproato sódico o Lamotrigina (si predominan depresiones)",
          "Abandono de controles de litemia, creatinina y TSH semestrales"
        ]
      ]
    },
    "vignette": {
      "title": "Caso Clínico Tipo EUNACOM",
      "text": "Hombre de 24 años, estudiante de arquitectura, es llevado al servicio de urgencias por Carabineros y sus padres debido a conductas extravagantes y agresivas. Refieren que desde hace 5 días no duerme más de 1 hora por noche, afirmando no sentir cansancio porque \"posee energía cósmica infinita\". En los últimos días gastó todo el dinero de su matrícula en comprar 14 relojes de lujo para \"repartir la riqueza\", ha salido desnudo al balcón gritando que fue elegido por el gobierno para rediseñar la capital y habla a una velocidad incontrolable saltando de un tema a otro sin pausas. Al examen mental: vigil, francamente agitado, hiperbólico, verborreico con fuga de ideas, desinhibido y con delirios megalomaníacos floridos. No consume drogas ilícitas (screening toxicológico en orina negativo). Presentó un episodio de depresión moderada a los 20 años tratado transitoriamente con psicoterapia.",
      "conducta": "El paciente presenta un Episodio Maníaco Agudo con síntomas psicóticos (insomnio sin fatiga, verborrea, fuga de ideas, gastos imprudentes, megalomanía delirante y riesgo para sí mismo/terceros de 5 días de evolución), lo que confirma el diagnóstico de Trastorno Bipolar Tipo I (Garantía GES N° 52). La presencia de psicosis y riesgo conductual severo constituye una urgencia médica que exige: 1) Hospitalización psiquiátrica inmediata en una unidad de corta estadía; 2) Inicio de farmacoterapia de combinación con un antipsicótico atípico de control rápido (ej. Olanzapina 10-20 mg/día o Risperidona 3-6 mg/día) asociado a un estabilizador del ánimo como Carbonato de Litio o Valproato de sodio; 3) Solicitar laboratorio basal (función renal, TSH, hemograma, ECG); y 4) Notificación y derivación por GES N° 52. Está formalmente contraindicado el alta ambulatoria o la indicación de antidepresivos."
    },
    "explicacion": "El paciente presenta un Episodio Maníaco Agudo con síntomas psicóticos (insomnio sin fatiga, verborrea, fuga de ideas, gastos imprudentes, megalomanía delirante y riesgo para sí mismo/terceros de 5 días de evolución), lo que confirma el diagnóstico de Trastorno Bipolar Tipo I (Garantía GES N° 52). La presencia de psicosis y riesgo conductual severo constituye una urgencia médica que exige: 1) Hospitalización psiquiátrica inmediata en una unidad de corta estadía; 2) Inicio de farmacoterapia de combinación con un antipsicótico atípico de control rápido (ej. Olanzapina 10-20 mg/día o Risperidona 3-6 mg/día) asociado a un estabilizador del ánimo como Carbonato de Litio o Valproato de sodio; 3) Solicitar laboratorio basal (función renal, TSH, hemograma, ECG); y 4) Notificación y derivación por GES N° 52. Está formalmente contraindicado el alta ambulatoria o la indicación de antidepresivos.",
    "keyPoints": [
      "Un solo episodio maníaco a lo largo de la vida es suficiente para diagnosticar Trastorno Bipolar Tipo I de forma definitiva.",
      "La hipomanía dura al menos 4 días, no genera disfunción social/laboral grave y NUNCA cursa con síntomas psicóticos ni requiere hospitalización.",
      "Cualquier episodio expansivo que presente delirios o alucinaciones, o que requiera hospitalización, se clasifica automáticamente como MANÍA.",
      "El tratamiento de elección en manía aguda grave es la combinación de un antipsicótico atípico (Olanzapina, Risperidona, Quetiapina) con un estabilizador (Litio o Valproato).",
      "El Carbonato de Litio es el estándar de oro en prevención de recaídas y el único estabilizador con reducción demostrada del riesgo suicida.",
      "Rango terapéutico de la litemia: 0.6 a 1.0 mEq/L en mantenimiento; se mide en sangre exactamente a las 12 horas post-dosis.",
      "Toxicidad por litio: temblor grosero, ataxia y confusión con litemia > 1.5-2.0; hemodiálisis indicada si > 4.0 mEq/L o > 2.5 mEq/L con compromiso neurológico grave.",
      "Trampa EUNACOM: En depresión bipolar está estrictamente contraindicada la monoterapia con antidepresivos convencionales (ISRS/duales), debido al riesgo de viraje maníaco fulminante e inducción de ciclado rápido."
    ],
    "questions": [
      {
        "stem": "Un joven de 23 años es traído a urgencias por sus amigos debido a que lleva 6 días durmiendo 2 horas diarias sin manifestar fatiga, hablando de forma acelerada e ininterrumpida, y regalando todas sus pertenencias en la vía pública porque \"recibió un mandato divino para liderar una nueva era cósmica\". Al examen físico destaca taquicardia sinusal de 105 lpm, orientado en persona pero desorientado en tiempo, con fuga de ideas y delirios de grandeza. ¿Cuál es el diagnóstico clínico y la conducta inmediata?",
        "options": [
          {
            "id": "A",
            "text": "Trastorno Bipolar Tipo II en hipomanía; indicar psicoterapia ambulatoria y Sertralina"
          },
          {
            "id": "B",
            "text": "Trastorno Bipolar Tipo I en episodio maníaco con psicosis; hospitalización psiquiátrica inmediata e inicio de antipsicótico atípico más estabilizador"
          },
          {
            "id": "C",
            "text": "Trastorno por déficit atencional del adulto; iniciar Metilfenidato oral"
          },
          {
            "id": "D",
            "text": "Trastorno de personalidad esquizoide descompensado; indicar reposo en domicilio y Clonazepam"
          },
          {
            "id": "E",
            "text": "Depresión psicótica; indicar fluoxetina en dosis altas y control ambulatorio en 30 días"
          }
        ],
        "correcta": "B",
        "explicacion": "El cuadro clínico describe un episodio maníaco agudo con síntomas psicóticos (delirios megalomaníacos místicos, insomnio sin fatiga, fuga de ideas, desinhibición y conductas perjudiciales). La presencia de psicosis descarta de plano la hipomanía (A) y confirma Trastorno Bipolar Tipo I. La conducta obligatoria es la hospitalización psiquiátrica de urgencia para proteger al paciente e iniciar combinación de antipsicótico atípico (Olanzapina o Risperidona) + estabilizador (Litio o Valproato) bajo garantía GES N° 52. Los estimulantes (C) empeoran la manía. El distractor D confunde psicosis con personalidad. El distractor E usa antidepresivos que están formalmente contraindicados en manía. Perla de examen: La presencia de delirios o la necesidad de hospitalización elevan automáticamente el episodio a manía (Bipolar I), excluyendo hipomanía.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.12.1.002"
      },
      {
        "stem": "Una mujer de 31 años con antecedente de depresión tratada hace 2 semanas con Fluoxetina 20 mg/día acude a control acompañada por su madre, quien relata que en los últimos 4 días la paciente se muestra irritable, no ha dormido más de 3 horas por noche sin acusar cansancio, habla sin parar y gastó el sueldo del mes en compras innecesarias, manteniéndose sin embargo orientada y sin delirios ni alucinaciones. No hay alteración de conciencia. ¿Cuál es la sospecha diagnóstica y la conducta más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Efecto adverso transitorio de la Fluoxetina; mantener la dosis por 4 semanas más"
          },
          {
            "id": "B",
            "text": "Falta de adherencia al antidepresivo; duplicar la dosis de Fluoxetina a 40 mg al día"
          },
          {
            "id": "C",
            "text": "Viraje hipomaníaco/maníaco en contexto de Trastorno Bipolar no diagnosticado; suspender de inmediato la Fluoxetina e iniciar estabilizador del ánimo"
          },
          {
            "id": "D",
            "text": "Respuesta eutímica normal al tratamiento antidepresivo exitoso"
          },
          {
            "id": "E",
            "text": "Crisis de angustia atípica; asociar Diazepam 10 mg cada 8 horas"
          }
        ],
        "correcta": "C",
        "explicacion": "La paciente presentó un viraje afectivo (desarrollo de síntomas maníacos/hipomaníacos como insomnio sin cansancio, verborrea, irritabilidad y prodigalidad) inducido por la introducción de un antidepresivo (Fluoxetina). Este fenómeno revela un Trastorno Bipolar subyacente que había sido erróneamente diagnosticado y tratado como depresión unipolar. La conducta obligatoria e inaplazable es suspender inmediatamente el antidepresivo y prescribir un estabilizador del ánimo (como Litio, Quetiapina o Valproato), derivando a especialista bajo GES N° 52. Mantener o subir el antidepresivo (A y B) puede desencadenar una manía psicótica destructiva. Perla de examen: Ante cualquier viraje a euforia o insomnio sin fatiga tras iniciar un antidepresivo, suspender de inmediato el fármaco e investigar antecedente bipolar.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.12.1.002"
      },
      {
        "stem": "Un paciente de 35 años con trastorno bipolar tipo I en tratamiento regular con Carbonato de Litio 900 mg/día consulta en urgencias por un cuadro de 48 horas de vómitos, diarrea profusa, debilidad muscular y temblor grosero en extremidades que le dificulta caminar. Al examen físico destaca disartria moderada, ataxia de la marcha e hiperreflexia osteotendinosa generalizada. El hemoglucotest es normal y los signos vitales muestran PA 100/60 mmHg, FC 92 lpm. Se obtiene litemia de urgencia que resulta en 2.3 mEq/L. ¿Cuál es la conducta médica inmediata?",
        "options": [
          {
            "id": "A",
            "text": "Indicar reposición oral de líquidos en domicilio y reducir la dosis de litio a la mitad"
          },
          {
            "id": "B",
            "text": "Suspender de inmediato el Carbonato de Litio, hospitalizar e iniciar hidratación endovenosa abundante con suero fisiológico"
          },
          {
            "id": "C",
            "text": "Administrar Diuréticos tiazídicos para forzar la eliminación renal del litio"
          },
          {
            "id": "D",
            "text": "Indicar lavado gástrico y administrar carbón activado seriado"
          },
          {
            "id": "E",
            "text": "Administrar Flumazenil endovenoso para revertir la toxicidad neuromuscular"
          }
        ],
        "correcta": "B",
        "explicacion": "El paciente presenta una intoxicación moderada por litio (litemia 2.3 mEq/L, temblor grosero, ataxia, disartria, diarrea y debilidad), frecuentemente desencadenada por deshidratación y depleción de sodio secundaria a pérdidas gastrointestinales (el riñón retiene litio en el túbulo proximal al censar hipovolemia). La conducta obligatoria es: 1) Suspender inmediatamente el litio; 2) Hospitalizar al paciente; 3) Hidratación endovenosa enérgica con suero fisiológico (el aporte de sodio y volumen restaura la perfusión renal y compite con el litio promoviendo su excreción); y 4) Monitorizar litemia y función renal seriada. Las tiazidas (C) están contraindicadas porque aumentan la litemia. El carbón activado (D) no une metales como el litio. Trampa de examen: El carbón activado NO sirve en intoxicación por litio; el pilar terapéutico es la volemización masiva con solución fisiológica.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.12.1.002"
      },
      {
        "stem": "Una mujer de 26 años con antecedente de trastorno bipolar tipo I bien controlado consulta en el policlínico porque desea planificar un embarazo con su pareja. Actualmente está en tratamiento con Ácido Valproico 1.000 mg/día con niveles plasmáticos estables de 75 µg/mL. ¿Cuál es la conducta médica más adecuada respecto a su farmacoterapia?",
        "options": [
          {
            "id": "A",
            "text": "Mantener el ácido valproico a la misma dosis ya que suspenderlo garantiza una recaída maníaca"
          },
          {
            "id": "B",
            "text": "Reemplazar el ácido valproico por Carbamazepina en dosis terapéuticas"
          },
          {
            "id": "C",
            "text": "Planificar el cambio gradual a un estabilizador con menor teratogenicidad (ej. Lamotrigina o antipsicóticos atípicos como Quetiapina) y suplementar con ácido fólico en dosis altas"
          },
          {
            "id": "D",
            "text": "Suspender todos los fármacos de inmediato y no usar ningún psicofármaco durante todo el embarazo"
          },
          {
            "id": "E",
            "text": "Añadir carbonato de litio al valproato para proteger al feto"
          }
        ],
        "correcta": "C",
        "explicacion": "El Ácido Valproico es el estabilizador con mayor potencial teratogénico conocido, asociándose a una tasa de defectos del tubo neural (espina bífida, anencefalia) del 1-2%, malformaciones craneofaciales y cardiovasculares, y deterioro del neurodesarrollo cognitivo. Por tanto, en una paciente en edad reproductiva con deseo de embarazo, la conducta correcta es planificar previamente la transición a fármacos con mejor perfil reproductivo (como Lamotrigina o Quetiapina/Olanzapina), asegurando estabilidad anímica y administrando ácido fólico en dosis de 4 a 5 mg/día. La carbamazepina (B) también es teratogénica. Suspender todo (D) genera un riesgo altísimo de recaída maníaca grave en el embarazo y puerperio. Perla de examen: El valproato sódico está formalmente proscrito en mujeres en edad fértil con deseo concepcional por su elevada teratogenicidad.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.12.1.002"
      }
    ],
    "vignetteText": "Hombre de 24 años, estudiante de arquitectura, es llevado al servicio de urgencias por Carabineros y sus padres debido a conductas extravagantes y agresivas. Refieren que desde hace 5 días no duerme más de 1 hora por noche, afirmando no sentir cansancio porque \"posee energía cósmica infinita\". En los últimos días gastó todo el dinero de su matrícula en comprar 14 relojes de lujo para \"repartir la riqueza\", ha salido desnudo al balcón gritando que fue elegido por el gobierno para rediseñar la capital y habla a una velocidad incontrolable saltando de un tema a otro sin pausas. Al examen mental: vigil, francamente agitado, hiperbólico, verborreico con fuga de ideas, desinhibido y con delirios megalomaníacos floridos. No consume drogas ilícitas (screening toxicológico en orina negativo). Presentó un episodio de depresión moderada a los 20 años tratado transitoriamente con psicoterapia."
  },
  {
    "id": "psiq-03",
    "classId": "psiq-03",
    "tier": 3,
    "blockNum": 1,
    "blockName": "Trastornos del Ánimo & Urgencias Suicidas",
    "topicLabel": "17.3",
    "title": "Evaluación y Manejo del Riesgo Suicida: Factores de Riesgo e Indicación de Hospitalización",
    "perfilCode": "1.09.2.001",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Protocolo Nacional de Prevención del Suicidio MINSAL y Urgencia Médica · Atención inmediata en servicio de urgencias, hospitalización protegida en intento reciente o alto riesgo inminente, prohibición de alta sin red de apoyo continente.",
    "reconstrucciones": "EUNACOM Julio 2024 (Q#6) · EUNACOM Julio 2019 (Q#150)",
    "frecuencia": "Máxima prioridad médica · Urgencia psiquiátrica de descarte obligatorio en todo paciente con trastorno mental",
    "svg": null,
    "algoTitle": "Algoritmo de Estratificación de Riesgo Suicida y Criterios de Hospitalización Inmediata",
    "diagram": {
      "title": "Algoritmo de Estratificación de Riesgo Suicida y Manejo en Urgencias",
      "svg": "<svg viewBox=\"0 0 620 400\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#7e22ce\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#7e22ce;font-weight:700}\n    .acc{fill:#7e22ce;stroke:#6b21a8}.accT{fill:#fff}.accS{font-size:8px;fill:#f3e8ff}\n    .dec{fill:#faf5ff;stroke:#d8b4fe;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#7e22ce;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Paciente con Ideación Suicida, Intento Previo o Alerta Conductual</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Indagar activamente sobre deseos de morir, método, planificación y cartas de despedida</text>\n  <path class=\"ln\" d=\"M310,47 V69\"/>\n  <rect class=\"warn\" x=\"100\" y=\"69\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Pregunta Directa sobre Suicidio (Intervención Terapéutica Inmediata)</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">REGLA DE ORO: Preguntar NO induce el suicidio, alivia la angustia y permite intervenir</text>\n  <path class=\"ln\" d=\"M310,108 V130\"/>\n  <rect class=\"dec\" x=\"70\" y=\"130\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"145\" text-anchor=\"middle\" font-weight=\"700\">Estratificación del Nivel de Riesgo Suicida (Escala SAD PERSONS)</text>\n  <text class=\"sub\" x=\"310\" y=\"157\" text-anchor=\"middle\">Evaluación de letalidad, impulsividad y red de contención familiar</text>\n  <path class=\"ln\" d=\"M310,169 V199 H158 V209\"/>\n  <path class=\"ln\" d=\"M310,199 H462 V209\"/>\n  <text class=\"lbl\" x=\"158\" y=\"194\" text-anchor=\"middle\">Riesgo Alto / Inminente (Plan estructurado, alta letalidad, sin red)</text>\n  <text class=\"lbl\" x=\"462\" y=\"194\" text-anchor=\"middle\">Riesgo Bajo / Moderado (Ideación sin plan, red familiar sólida)</text>\n  <rect class=\"crit\" x=\"12\" y=\"209\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"158\" y=\"224\" text-anchor=\"middle\" font-weight=\"700\">Hospitalización Psiquiátrica Inmediata</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"236\" text-anchor=\"middle\">Acompañamiento 1:1</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"247\" text-anchor=\"middle\">Retiro de elementos cortopunzantes y fármacos</text>\n  <rect class=\"dec\" x=\"316\" y=\"209\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"462\" y=\"224\" text-anchor=\"middle\" font-weight=\"700\">Manejo Ambulatorio Supervisado</text>\n  <text class=\"sub\" x=\"462\" y=\"236\" text-anchor=\"middle\">Fármacos bajo custodia de terceros</text>\n  <text class=\"sub\" x=\"462\" y=\"247\" text-anchor=\"middle\">Control en ≤ 48-72 h en APS/COSAM</text>\n  <path class=\"ln\" d=\"M158,259 V269 H310 V281\"/>\n  <path class=\"ln\" d=\"M462,259 V269 H310 V281\"/>\n  <rect class=\"acc\" x=\"100\" y=\"281\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"296\" text-anchor=\"middle\" font-weight=\"700\">Tratamiento Específico con Evidencia Antisuicida</text>\n  <text class=\"accS\" x=\"310\" y=\"308\" text-anchor=\"middle\">Carbonato de Litio (Trastorno Bipolar/TDM) · Clozapina (Esquizofrenia) · TEC de urgencia</text>\n  <path class=\"ln\" d=\"M310,320 V342\"/>\n  <rect class=\"warn\" x=\"100\" y=\"342\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"357\" text-anchor=\"middle\" font-weight=\"700\">Criterio de Seguridad Inviolable en Urgencias</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"369\" text-anchor=\"middle\">PROHIBIDO dar de alta a un paciente con intento</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"380\" text-anchor=\"middle\">reciente hasta ser evaluado por especialista</text>\n</svg>"
    },
    "contexto": "El suicidio es una de las principales causas de muerte prematura en personas jóvenes y adultas en Chile y una de las mayores urgencias psiquiátricas a las que se enfrenta el médico general. El acto suicida es el desenlace de un sufrimiento psicológico intolerable en el contexto de patologías psiquiátricas tratables (depresión mayor, trastorno bipolar, esquizofrenia, abuso de sustancias y trastornos de la personalidad). La evaluación del riesgo suicida es una competencia legal y médica obligatoria del Perfil V3: el médico general debe preguntar directamente sobre el plan suicida sin temor, calcular el nivel de riesgo mediante factores clínicos y herramientas como la escala SAD PERSONS, ordenar el retiro de medios letales e indicar la hospitalización inmediata cuando exista riesgo vital.",
    "contentSections": [
      {
        "subhead": "1. Epidemiología, Neurobiología y Factores de Riesgo Mayores",
        "paragraphs": [
          "En Chile, la tasa de mortalidad por suicidio se sitúa en torno a 10 por 100.000 habitantes. Existe una marcada disparidad por género: las mujeres presentan una frecuencia 3 a 4 veces mayor de <strong>intentos de suicidio</strong> (conducta parasuicida o tentativa), pero los hombres presentan una tasa 4 a 5 veces superior de <strong>suicidio consumado</strong>, debido al uso de métodos de mayor letalidad biomecánica (ahorcamiento, armas de fuego, precipitación de altura).",
          "<strong>Factores de riesgo sociodemográficos y clínicos mayores:</strong>",
          "• <strong>El predictor aislado más potente de suicidio consumado es el antecedente de intento suicida previo</strong> (multiplica el riesgo por 30 a 40 veces).",
          "• Género masculino, edad avanzada (> 65 años) o adolescencia/adulto joven (15-24 años).",
          "• Vivir solo, viudez, divorcio reciente, aislamiento social, cesantía o quiebra económica.",
          "• Presencia de enfermedad psiquiátrica: Trastorno Depresivo Mayor (particularmente con insomnio severo, anhedonia y desesperanza), Trastorno Bipolar, Esquizofrenia, Trastorno Límite de Personalidad.",
          "• Abuso comórbido de alcohol o drogas (desinhibe y aumenta la impulsividad del acto letal).",
          "• Enfermedad médica crónica dolorosa o invalidante (cáncer, dolor neuropático refractario, insuficiencia renal terminal)."
        ]
      },
      {
        "subhead": "2. Evaluación Clínica del Riesgo Suicida y Mitos que Anulan Respuestas",
        "paragraphs": [
          "La entrevista clínica debe estructurarse escalonadamente: 1) Ideación pasiva de muerte (\"¿ha deseado no despertar?\"); 2) Ideación suicida activa (\"¿ha pensado en quitarse la vida?\"); 3) Planificación (\"¿ha pensado cómo lo haría?\"); 4) Disponibilidad del método (\"¿tiene acceso a pastillas, armas o sogas?\"); y 5) Actos preparatorios (dejar cartas de despedida, regalar pertenencias queridas, ordenar testamentos).",
          "<strong>Mitos fundamentales en el examen EUNACOM:</strong>",
          "• <em>Mito 1: \"Preguntar sobre suicidio puede inducir la idea o empujar al paciente al acto\".</em> <strong>FALSO.</strong> Preguntar de forma empática y directa alivia la soledad del paciente, desmitifica el tabú y es la única forma de evaluar el riesgo e intervenir a tiempo.",
          "• <em>Mito 2: \"El que se quiere suicidar no lo dice\".</em> <strong>FALSO.</strong> Más del 75% de las personas que consuman el suicidio dieron señales verbales o conductuales directas o indirectas en las semanas previas.",
          "• <em>Mito 3: \"La mejoría rápida tras una crisis suicida significa que el riesgo pasó\".</em> <strong>FALSO.</strong> El período inmediatamente posterior a una remisión parcial de la inhibición psicomotora de la depresión es de máximo riesgo: el paciente recupera la energía volitiva para ejecutar el plan suicida preconcebido."
        ]
      },
      {
        "subhead": "3. Escala SAD PERSONS y Estratificación Operativa en Urgencias",
        "paragraphs": [
          "La escala mnemotécnica <strong>SAD PERSONS</strong> (un punto por cada parámetro presente) es la herramienta de tamizaje más validada internacionalmente:",
          "• <strong>S</strong> (Sex): Sexo masculino (1 pto)",
          "• <strong>A</strong> (Age): Edad < 19 o > 45 años (1 pto)",
          "• <strong>D</strong> (Depression): Presencia de depresión mayor (1 pto)",
          "• <strong>P</strong> (Previous attempt): Intento suicida previo (1 pto)",
          "• <strong>E</strong> (Ethanol abuse): Abuso de alcohol o drogas (1 pto)",
          "• <strong>R</strong> (Rational thinking loss): Pérdida de juicio racional (psicosis) (1 pto)",
          "• <strong>S</strong> (Social supports lacking): Ausencia de red de apoyo social/familiar (1 pto)",
          "• <strong>O</strong> (Organized plan): Plan suicida organizado o método letal (1 pto)",
          "• <strong>N</strong> (No spouse): Soltero, viudo o divorciado (1 pto)",
          "• <strong>S</strong> (Sickness): Enfermedad somática crónica (1 pto)",
          "<strong>Conducta según puntuación:</strong> 0 a 4 puntos: Riesgo bajo (seguimiento ambulatorio con red continental); 5 a 6 puntos: Riesgo moderado (evaluación urgente por psiquiatra); <strong>7 a 10 puntos: Riesgo alto/extremo (hospitalización psiquiátrica obligatoria e inmediata)</strong>."
        ]
      },
      {
        "subhead": "4. Criterios Innegociables de Hospitalización Psiquiátrica Inmediata",
        "paragraphs": [
          "La <strong>hospitalización psiquiátrica inmediata</strong> (en servicio de psiquiatría o sala de observación protegida con vigilancia visual continua 1 a 1) es OBLIGATORIA ante cualquiera de los siguientes hallazgos:",
          "<strong>1)</strong> Intento suicida reciente de mediana a alta letalidad (intoxicación medicamentosa grave, ahorcamiento frustrado, uso de arma de fuego, precipitación);",
          "<strong>2)</strong> Presencia de plan suicida activo, estructurado y letal con intención inminente de ejecución;",
          "<strong>3)</strong> Presencia de síntomas psicóticos (delirios de ruina/culpa o alucinaciones auditivas de comando que ordenan suicidarse);",
          "<strong>4)</strong> Agitación psicomotora severa con impulsividad y consumo concomitante de sustancias;",
          "<strong>5)</strong> Ausencia absoluta de red de contención familiar o social capaz de supervisar al paciente 24/7;",
          "<strong>6)</strong> Persistencia de la ideación suicida tras la atención de urgencia (paciente que refiere que \"volverá a intentarlo apenas salga\")."
        ]
      },
      {
        "subhead": "5. Intervenciones Terapéuticas con Evidencia Específica Antisuicida",
        "paragraphs": [
          "• <strong>Carbonato de Litio:</strong> Demostrado en ensayos clínicos que reduce significativamente la tasa de suicidio consumado e intentos en pacientes con Trastorno Bipolar y Depresión Mayor recurrente, de forma independiente de su efecto estabilizador.",
          "• <strong>Clozapina:</strong> Único antipsicótico con indicación formal aprobada por la FDA para reducir la conducta suicida en pacientes con <strong>Esquizofrenia y Trastorno Esquizoafectivo</strong> de alto riesgo.",
          "• <strong>Ketamina / Esketamina intranasal:</strong> Rápida reducción de la ideación suicida aguda (en horas) en depresión resistente, utilizada como terapia puente bajo estricta monitorización hospitalaria.",
          "• <strong>Terapia Electroconvulsiva (TEC):</strong> Intervención de rescate de máxima efectividad y rapidez en ideación suicida inminente con rechazo alimentario o depresión psicótica refractaria.",
          "• <strong>Medidas de seguridad física:</strong> Retiro absoluto de fármacos del domicilio (entrega administrada por terceros), armas, elementos cortantes y venenos; prohibición de armas en el entorno familiar."
        ]
      }
    ],
    "table": {
      "title": "Factores de Riesgo Suicida, Desencadenantes Agudos y Factores Protectores",
      "headers": [
        "Categoría",
        "Factores de Alto Riesgo",
        "Señales de Alarma Inminente",
        "Factores Protectores Fuertes"
      ],
      "rows": [
        [
          "Sociodemográficos",
          "Hombres, > 65 años o 15-24 años, viudos, desempleados, aislamiento",
          "Regalar posesiones queridas, cerrar cuentas bancarias, cartas de despedida",
          "Hijos pequeños a cargo, red de apoyo extensa, empleo estable"
        ],
        [
          "Clínico-Psiquiátricos",
          "Intento previo (factor N° 1), depresión melancólica, trastorno bipolar, adicciones",
          "Desesperanza extrema, insomnio refractario, calma repentina sospechosa",
          "Buena adherencia a tratamiento psiquiátrico, alianza terapéutica sólida"
        ],
        [
          "Psicopatológicos",
          "Impulsividad alta, agitación, delirios de culpa/ruina, alucinaciones de comando",
          "Declaración explícita de método con acceso a armas o pastillas",
          "Creencias religiosas/morales firmes contrarias al suicidio"
        ],
        [
          "Biológicos / Médicos",
          "Dolor crónico intratable, cáncer terminal, diagnóstico reciente de VIH o ELA",
          "Intoxicación aguda por alcohol que desinhibe la barrera inhibitoria",
          "Capacidad de resolución de problemas, proyectos futuros viables"
        ]
      ]
    },
    "severityTable": {
      "title": "Escala SAD PERSONS y Conducta Operativa en el Servicio de Urgencias",
      "headers": [
        "Puntuación Total",
        "Estratificación de Riesgo",
        "Conducta Clínica Inmediata",
        "Destino del Paciente"
      ],
      "rows": [
        [
          "0 – 2 puntos",
          "Riesgo Leve",
          "Manejo ambulatorio si existe red familiar continente; retiro de fármacos del alcance",
          "Alta con control ambulatorio en APS en < 7 días"
        ],
        [
          "3 – 4 puntos",
          "Riesgo Moderado Bajo",
          "Manejo ambulatorio intensivo; entrega de fármacos administrados por familiar",
          "Control ambulatorio prioritario en COSAM en < 48-72 h"
        ],
        [
          "5 – 6 puntos",
          "Riesgo Moderado Alto",
          "Evaluación médica prolongada en urgencias; interconsulta urgente a psiquiatría",
          "Definir hospitalización según capacidad de contención familiar"
        ],
        [
          "7 – 8 puntos",
          "Riesgo Severo / Alto",
          "HOSPITALIZACIÓN OBLIGATORIA en unidad psiquiátrica; vigilancia 1:1 continua",
          "Ingreso a cama psiquiátrica cerrada o sala de agudos"
        ],
        [
          "9 – 10 puntos",
          "Riesgo Extremo / Inminente",
          "HOSPITALIZACIÓN INMEDIATA INVOLUNTARIA si es necesario; medidas de sujeción física si agitación",
          "Ingreso inmediato a UPC / Psiquiatría con enfermería exclusiva"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Protocolo de Seguridad Física, Farmacoterapia Antisuicida y Redes de Apoyo",
      "headers": [
        "Nivel de Intervención",
        "Medidas Inmediatas en Urgencias",
        "Fármacos con Evidencia Antisuicida",
        "Acciones Prohibidas / Errores"
      ],
      "rows": [
        [
          "Seguridad Ambiental",
          "Acompañamiento visual 1 a 1 permanente · Retirar cinturones, cordones, vidrios y medicamentos",
          "Ketamina EV o Esketamina nasal en unidades de cuidados intensivos",
          "Dejar al paciente solo en el box o en el baño de urgencias"
        ],
        [
          "Enfermedad Afectiva Base",
          "Tratamiento enérgico de depresión mayor o manía · Tratar insomnio y angustia aguda",
          "Carbonato de Litio (meta 0.6-1.0 mEq/L) reduce suicidio en TDM y Bipolar",
          "Prescribir cajas completas de antidepresivos tricíclicos o BZD letales"
        ],
        [
          "Esquizofrenia / Psicosis",
          "Tratar síntomas psicóticos e ideas de comando · Contención farmacológica si agitación",
          "Clozapina (único antipsicótico con evidencia antisuicida formal FDA)",
          "Minimizar alucinaciones auditivas imperativas de autoagresión"
        ],
        [
          "Refractariedad Extrema",
          "Depresión severa con rechazo alimentario o catatonía con riesgo vital inminente",
          "Terapia Electroconvulsiva (TEC) de urgencia bilateral",
          "Demorar la decisión de TEC esperando meses de respuesta a fármacos"
        ]
      ]
    },
    "vignette": {
      "title": "Caso Clínico Tipo EUNACOM",
      "text": "Hombre de 54 años, obrero de la construcción, viudo hace 4 meses y recientemente despedido de su trabajo, es llevado al servicio de urgencias por su cuñado tras haber sido encontrado en su domicilio sentado en la cama con una botella vacía de pisco, una soga atada a una viga del techo y una carta dirigida a sus hijos pidiendo perdón. Al ingreso el paciente se muestra somnoliento pero reactivo a estímulos verbales, aliento alcohólico evidente, llanto fácil, facie sufriente. Al ser interrogado directamente en privado, admite con voz baja: \"No tengo por qué mentirle doctor, ya no le encuentro sentido a nada desde que mi señora falleció y me quedé sin trabajo; apenas salga de aquí voy a terminar lo que empecé\". Presenta antecedentes de hipertensión arterial y un intento previo de autoeliminación por sobredosis hace 12 años.",
      "conducta": "El paciente presenta un cuadro de riesgo suicida extremo e inminente: reúne múltiples factores de máxima gravedad (sexo masculino, edad, viudez reciente, cesantía, consumo perjudicial de alcohol, antecedente de intento suicida previo [factor pronóstico N° 1], método letal altamente preparado con soga montada, carta de despedida estructurada y persistencia explícita de la ideación suicida al ingreso). Puntaje SAD PERSONS estimado: 9/10 puntos. La conducta médica inmediata e ineludible es: 1) Prohibir formalmente el alta médica, independientemente de la petición del paciente o de su cuñado; 2) Indicar hospitalización psiquiátrica de urgencia en una unidad de cuidados especiales / corta estadía; 3) Asignar vigilancia continua 1 a 1 por personal de salud (no dejar solo en ningún momento, ni siquiera para ir al baño); 4) Retirar todo elemento potencialmente peligroso (ropa con cordones, cinturón, pertenencias personales); 5) Manejar la intoxicación etílica aguda; e 6) Iniciar estudio y tratamiento para depresión mayor."
    },
    "explicacion": "El paciente presenta un cuadro de riesgo suicida extremo e inminente: reúne múltiples factores de máxima gravedad (sexo masculino, edad, viudez reciente, cesantía, consumo perjudicial de alcohol, antecedente de intento suicida previo [factor pronóstico N° 1], método letal altamente preparado con soga montada, carta de despedida estructurada y persistencia explícita de la ideación suicida al ingreso). Puntaje SAD PERSONS estimado: 9/10 puntos. La conducta médica inmediata e ineludible es: 1) Prohibir formalmente el alta médica, independientemente de la petición del paciente o de su cuñado; 2) Indicar hospitalización psiquiátrica de urgencia en una unidad de cuidados especiales / corta estadía; 3) Asignar vigilancia continua 1 a 1 por personal de salud (no dejar solo en ningún momento, ni siquiera para ir al baño); 4) Retirar todo elemento potencialmente peligroso (ropa con cordones, cinturón, pertenencias personales); 5) Manejar la intoxicación etílica aguda; e 6) Iniciar estudio y tratamiento para depresión mayor.",
    "keyPoints": [
      "El antecedente de intento suicida previo es el factor de riesgo independiente más potente para suicidio consumado a largo plazo.",
      "Preguntar directamente y de forma empática sobre la presencia de ideas, planes y métodos suicidas es obligatorio y NO induce el suicidio.",
      "En Chile, los hombres se suicidan con una frecuencia 4 a 5 veces mayor que las mujeres debido a la elección de métodos más letales (ahorcamiento, armas de fuego).",
      "La escala SAD PERSONS orienta la gravedad clínica: puntajes ≥ 7 puntos indican riesgo severo y exigen hospitalización psiquiátrica inmediata.",
      "Todo paciente con intento suicida reciente o plan estructurado activo debe permanecer con acompañamiento visual 1 a 1 permanente.",
      "El Carbonato de Litio y la Clozapina son los únicos dos fármacos que han demostrado reducir la mortalidad por suicidio en ensayos clínicos controlados.",
      "La Terapia Electroconvulsiva (TEC) es el tratamiento de rescate de elección en pacientes con ideación suicida refractaria inminente o depresión psicótica.",
      "Trampa del examen: Jamás otorgar el alta ambulatoria a un paciente que acaba de frustrar un intento suicida basándose exclusivamente en que \"promete que no lo volverá a hacer\"; la evaluación por especialista es legal y éticamente obligatoria."
    ],
    "questions": [
      {
        "stem": "Un hombre de 58 años, cesante y con consumo problemático de alcohol, es traído a urgencias por un vecino que lo encontró con una carta de despedida y una soga preparada en su dormitorio. Al ser examinado, el paciente llora, reconoce que intentó ahorcarse pero la cuerda se rompió, y afirma categóricamente que \"apenas pueda se arrojará bajo el metro porque la vida no vale nada\". El acompañante solicita llevarlo a su casa argumentando que él lo cuidará. ¿Cuál es la conducta médica correcta?",
        "options": [
          {
            "id": "A",
            "text": "Acceder a la petición del acompañante, indicando reposo en domicilio y Clonazepam 2 mg"
          },
          {
            "id": "B",
            "text": "Rechazar el alta, ordenar vigilancia 1 a 1 permanente y tramitar hospitalización psiquiátrica inmediata de urgencia"
          },
          {
            "id": "C",
            "text": "Prescribir Sertralina 50 mg al día y citar a control ambulatorio en el CESFAM en 7 días"
          },
          {
            "id": "D",
            "text": "Hacer firmar un alta voluntaria al paciente y liberarlo de responsabilidad médica"
          },
          {
            "id": "E",
            "text": "Indicar lavado gástrico y mantener en observación por 2 horas"
          }
        ],
        "correcta": "B",
        "explicacion": "El paciente presenta un riesgo suicida extremo e inminente con intento frustrado de alta letalidad (ahorcamiento), plan activo persistente y desesperanza profunda. La única conducta éticamente admisible y legalmente normada en Chile es la hospitalización psiquiátrica inmediata, impidiendo el alta médica aún contra la voluntad del paciente o del acompañante (hospitalización involuntaria de urgencia según Ley 21.331 de salud mental), con acompañamiento visual continuo 1 a 1 para evitar fugas o actos autolíticos intrahospitalarios. El distractor A comete negligencia médica al delegar el cuidado en un vecino. El distractor C confía en un fármaco con latencia de semanas ante un riesgo de horas. El distractor D es una falta médico-legal grave, pues no se puede otorgar alta voluntaria a un paciente con juicio de realidad comprometido por patología afectiva aguda con riesgo vital. Perla de examen: En riesgo suicida inminente con método letal estructurado, la hospitalización cerrada protegida no es negociable.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.09.2.001"
      },
      {
        "stem": "Durante un control de salud en APS, un médico sospecha que una paciente de 42 años con depresión mayor moderada podría estar pensando en suicidarse, pero duda si interrogarla al respecto por temor a que la pregunta actúe como un estímulo desencadenante o aumente su angustia. Según la evidencia médica y las guías clínicas del MINSAL, ¿cuál es la afirmación correcta?",
        "options": [
          {
            "id": "A",
            "text": "No se debe preguntar directamente; es preferible esperar a que la paciente mencione el tema espontáneamente"
          },
          {
            "id": "B",
            "text": "Preguntar directamente sobre suicidio es mandatorio, no induce la conducta suicida y suele generar alivio emocional en la paciente"
          },
          {
            "id": "C",
            "text": "Solo los médicos especialistas en psiquiatría están autorizados por ley a interrogar sobre ideas de muerte"
          },
          {
            "id": "D",
            "text": "Indagar sobre el método suicida está contraindicado porque enseña alternativas letales al paciente"
          },
          {
            "id": "E",
            "text": "La pregunta solo debe formularse en presencia de Carabineros para asegurar un marco legal"
          }
        ],
        "correcta": "B",
        "explicacion": "Uno de los mitos más arraigados y peligrosos en salud mental es creer que hablar de suicidio induce el acto. La evidencia científica demuestra de forma concluyente que preguntar de manera respetuosa, empática y directa (\"¿Ha pensado que no vale la pena vivir?\", \"¿Ha pensado en quitarse la vida?\", \"¿Tiene algún plan para hacerlo?\") NO siembra la idea en el paciente; por el contrario, disminuye la angustia, rompe el aislamiento y es la única herramienta disponible para cuantificar el riesgo e implementar medidas de protección oportunas. Los demás distractores representan mitos o aberraciones operativas que entorpecen la prevención del suicidio en atención primaria. Perla de examen: Preguntar sobre suicidio nunca induce la conducta; desahoga al paciente y salva vidas.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.09.2.001"
      },
      {
        "stem": "Un hombre de 28 años con diagnóstico de esquizofrenia paranoide ha presentado dos intentos suicidas impulsivos de alta letalidad en el último año a pesar de recibir tratamiento con Risperidona 6 mg/día. Se encuentra actualmente eutímico pero con suspicacia residual. ¿Cuál es el psicofármaco que ha demostrado reducir de forma específica y significativa la conducta suicida en pacientes con esquizofrenia?",
        "options": [
          {
            "id": "A",
            "text": "Haloperidol"
          },
          {
            "id": "B",
            "text": "Clozapina"
          },
          {
            "id": "C",
            "text": "Clorpromazina"
          },
          {
            "id": "D",
            "text": "Alprazolam"
          },
          {
            "id": "E",
            "text": "Sertralina"
          }
        ],
        "correcta": "B",
        "explicacion": "La Clozapina es el único fármaco antipsicótico que cuenta con aprobación formal por la FDA y respaldo en guías clínicas internacionales para la indicación específica de reducción del riesgo de conducta suicida recurrente en pacientes con Esquizofrenia o Trastorno Esquizoafectivo (estudio pivotal InterSePT). En pacientes con trastornos del ánimo, el fármaco con similar propiedad antisuicida demostrada es el Carbonato de Litio. El Haloperidol (A) y la Clorpromazina (C) no reducen el suicidio per se e incluso pueden aumentarlo por inducción de acatisia severa. Las benzodiacepinas (D) pueden favorecer la desinhibición conductual. Perla de examen: En esquizofrenia con conducta suicida recurrente, la Clozapina es el fármaco de elección por su acción antisuicida específica.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.09.2.001"
      },
      {
        "stem": "Una mujer de 22 años con antecedente de trastorno de personalidad limítrofe es ingresada a observación de urgencias tras ingerir 20 comprimidos de Paracetamol en un acto impulsivo tras discutir con su novio. Se realiza lavado gástrico y administración de N-acetilcisteína. A las 4 horas, la paciente se muestra tranquila, afirma que \"solo fue una tontería para llamar la atención\" y exige el alta inmediata porque tiene que presentarse a trabajar. Sus padres se niegan a recibirla en casa por estar agotados de sus crisis. ¿Cuál es la conducta médica correcta?",
        "options": [
          {
            "id": "A",
            "text": "Dar el alta médica inmediata con citación abierta a su policlínico"
          },
          {
            "id": "B",
            "text": "Hacerla firmar el alta voluntaria y dejar constancia en ficha clínica"
          },
          {
            "id": "C",
            "text": "Mantener en observación protegida, completar el protocolo de N-acetilcisteína y asegurar evaluación psiquiátrica formal previa al alta"
          },
          {
            "id": "D",
            "text": "Administrar Haloperidol 10 mg IM para disciplinar la conducta impulsiva"
          },
          {
            "id": "E",
            "text": "Indicar reposo en sala de espera sin vigilancia médica"
          }
        ],
        "correcta": "C",
        "explicacion": "Todo paciente que ingresa por un intento de autoeliminación (independientemente de si es calificado como \"manipulativo\" o reactivo a trastorno de personalidad) debe permanecer en observación médica y bajo protección hasta completar el manejo médico-toxicológico (en este caso, protocolo de NAC por sobredosis de paracetamol) y recibir una evaluación integral por médico psiquiatra. Además, la ausencia de red de contención familiar (los padres no la reciben) contraindica el alta ambulatoria inmediata, requiriéndose coordinar una red de apoyo o ingreso a corta estadía. El alta voluntaria (B) no es válida cuando existe riesgo vital potencial o juicio temporalmente comprometido. El distractor D utiliza antipsicóticos con fin punitivo, lo cual es inaceptable y antiético. Perla de examen: Ningún paciente con intoxicación voluntaria puede ser dado de alta sin completar el protocolo toxicológico y la evaluación de salud mental.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.09.2.001"
      }
    ],
    "vignetteText": "Hombre de 54 años, obrero de la construcción, viudo hace 4 meses y recientemente despedido de su trabajo, es llevado al servicio de urgencias por su cuñado tras haber sido encontrado en su domicilio sentado en la cama con una botella vacía de pisco, una soga atada a una viga del techo y una carta dirigida a sus hijos pidiendo perdón. Al ingreso el paciente se muestra somnoliento pero reactivo a estímulos verbales, aliento alcohólico evidente, llanto fácil, facie sufriente. Al ser interrogado directamente en privado, admite con voz baja: \"No tengo por qué mentirle doctor, ya no le encuentro sentido a nada desde que mi señora falleció y me quedé sin trabajo; apenas salga de aquí voy a terminar lo que empecé\". Presenta antecedentes de hipertensión arterial y un intento previo de autoeliminación por sobredosis hace 12 años."
  },
  {
    "id": "psiq-04",
    "classId": "psiq-04",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Trastornos del Ánimo & Urgencias Suicidas",
    "topicLabel": "17.4",
    "title": "Depresión Posparto y Trastornos Afectivos Perinatales: Blues vs Depresión vs Psicosis Puerperal",
    "perfilCode": "1.11.1.002",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "Garantía Explícita en Salud (GES N° 21): Depresión en personas de 15 años y más · Tamizaje universal obligatorio con Escala de Edimburgo (EPDS) en controles de niño sano a los 2 y 6 meses en APS · Manejo con psicoterapia y fármacos compatibles con la lactancia.",
    "reconstrucciones": "Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026",
    "frecuencia": "Alta · Pregunta habitual sobre tamizaje con Escala de Edimburgo y seguridad de ISRS en lactancia",
    "svg": null,
    "algoTitle": "Algoritmo Diferencial del Estado de Ánimo en el Puerperio: Tristeza Materna vs Depresión vs Psicosis",
    "diagram": {
      "title": "Diagnóstico Diferencial y Abordaje de Trastornos Afectivos Perinatales",
      "svg": "<svg viewBox=\"0 0 620 350\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#7e22ce\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#7e22ce;font-weight:700}\n    .acc{fill:#7e22ce;stroke:#6b21a8}.accT{fill:#fff}.accS{font-size:8px;fill:#f3e8ff}\n    .dec{fill:#faf5ff;stroke:#d8b4fe;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#7e22ce;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Puérpera con Alteración Afectiva en el Postparto</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Tamizaje universal con Escala de Depresión Postnatal de Edimburgo (EPDS)</text>\n  <path class=\"ln\" d=\"M310,47 V69\"/>\n  <rect class=\"dec\" x=\"70\" y=\"69\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">¿Cuándo iniciaron los síntomas y cuál es la gravedad clínica?</text>\n  <text class=\"sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">Diferenciar Blues vs Depresión Postparto vs Psicosis Puerperal</text>\n  <path class=\"ln\" d=\"M310,108 V138 H158 V148\"/>\n  <path class=\"ln\" d=\"M310,138 H462 V148\"/>\n  <text class=\"lbl\" x=\"158\" y=\"133\" text-anchor=\"middle\">Blues Materno (Inicio días 3-5, remite en &lt; 14 días)</text>\n  <text class=\"lbl\" x=\"462\" y=\"133\" text-anchor=\"middle\">Depresión Postparto (EPDS ≥ 10 ptos, &gt; 2 semanas)</text>\n  <rect class=\"acc\" x=\"12\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"158\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Tristeza Puerperal (Blues)</text>\n  <text class=\"accS\" x=\"158\" y=\"175\" text-anchor=\"middle\">Labilidad emocional benigna</text>\n  <text class=\"accS\" x=\"158\" y=\"186\" text-anchor=\"middle\">Apoyo familiar · No requiere fármacos</text>\n  <rect class=\"warn\" x=\"316\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"462\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Depresión Postparto (GES N° 21)</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"175\" text-anchor=\"middle\">ISRS (Sertralina de elección en</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"186\" text-anchor=\"middle\">lactancia) + Psicoterapia díada</text>\n  <path class=\"ln\" d=\"M158,198 V208 H310 V220\"/>\n  <path class=\"ln\" d=\"M462,198 V208 H310 V220\"/>\n  <rect class=\"crit\" x=\"100\" y=\"220\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">Psicosis Puerperal: Emergencia Médica Obstétrica/Psiquiátrica</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"247\" text-anchor=\"middle\">Delirios centrados en el bebé, confusión, alucinaciones</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"258\" text-anchor=\"middle\">Riesgo de infanticidio/suicidio · Hospitalización inmediata</text>\n  <path class=\"ln\" d=\"M310,270 V292\"/>\n  <rect class=\"acc\" x=\"100\" y=\"292\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"307\" text-anchor=\"middle\" font-weight=\"700\">Protección de la Lactancia Materna</text>\n  <text class=\"accS\" x=\"310\" y=\"319\" text-anchor=\"middle\">Sertralina y Paroxetina tienen menor excreción en leche</text>\n  <text class=\"accS\" x=\"310\" y=\"330\" text-anchor=\"middle\">NO suspender lactancia sin indicación estricta</text>\n</svg>"
    },
    "contexto": "El período perinatal representa la etapa de mayor vulnerabilidad biológica y psicosocial para la mujer debido al colapso hormonal estrogénico y progestacional post-alumbramiento, la privación de sueño y las demandas del cuidado del recién nacido. El espectro clínico abarca desde la disforia puerperal fisiológica y autolimitada (baby blues, presente en hasta el 80% de las madres) hasta la depresión posparto (10-15%) y la psicosis puerperal (0.1-0.2%), esta última constituyendo una emergencia psiquiátrica absoluta por el riesgo de infanticidio y suicidio. La pesquisa mediante la escala de Edimburgo y el inicio precoz de ISRS seguros en la lactancia salvan el desarrollo del lactante y la integridad de la familia.",
    "contentSections": [
      {
        "subhead": "1. Diagnóstico Diferencial de la Tríada Afectiva Puerperal",
        "paragraphs": [
          "• <strong>Tristeza Materna / Disforia Puerperal (\"Baby Blues\"):</strong> Afecta al 50-80% de las mujeres. Se inicia precozmente (días 3 a 5 postparto) y se caracteriza por labilidad emocional, llanto fácil, irritabilidad leve y fatiga. Crucialmente, <strong>el vínculo con el recién nacido está preservado, no hay ideación de daño y remite espontáneamente en 10 a 14 días</strong> sin requerir farmacoterapia, únicamente educación y apoyo familiar.",
          "• <strong>Depresión Posparto (DPP):</strong> Afecta al 10-15% de las puérperas. Se inicia habitualmente entre la 2.ª y 6.ª semana postparto (pudiendo debutar hasta el año). Cumple criterios de depresión mayor: anhedonia, llanto frecuente, sentimientos de incompetencia materna, culpa excesiva, rechazo o desapego hacia el bebé e insomnio que persiste incluso cuando el bebé duerme.",
          "• <strong>Psicosis Puerperal:</strong> Emergencia médica gravísima (1-2 por 1.000 partos). Inicio hiperagudo (primeras 1 a 2 semanas). Se manifiesta con insomnio severo total, agitación psicomotora, perplejidad, labilidad maníaca, desorganización del pensamiento y <strong>delirios frecuentemente centrados en el recién nacido</strong> (creer que está poseído por el demonio o destinado a sufrir) con riesgo elevado de <strong>infanticidio y suicidio</strong>. Más del 70% corresponde a una manifestación de Trastorno Bipolar no diagnosticado."
        ]
      },
      {
        "subhead": "2. Tamizaje Obligatorio con Escala de Edimburgo (EPDS)",
        "paragraphs": [
          "En el sistema de salud chileno (Chile Crece Contigo y GES N° 21), se realiza <strong>tamizaje universal para depresión posparto mediante la Escala de Depresión Postnatal de Edimburgo (EPDS)</strong> durante los controles de salud infantil en APS (habitualmente a los 2 y 6 meses postparto):",
          "• <strong>Puntaje < 10 puntos:</strong> Bajo riesgo de depresión.",
          "• <strong>Puntaje ≥ 10 puntos (o respuesta positiva en la pregunta 10 sobre ideación suicida):</strong> Tamizaje positivo que obliga a confirmación diagnóstica inmediata en APS e ingreso a Garantía GES N° 21 dentro de 24 horas."
        ]
      },
      {
        "subhead": "3. Manejo Terapéutico y Psicofármacos Compatibles con la Lactancia Materna",
        "paragraphs": [
          "El manejo de la depresión posparto incluye psicoterapia individual, intervenciones de fomento de la díada madre-hijo y farmacoterapia cuando el cuadro es moderado a severo:",
          "• <strong>Fármaco de elección en lactancia materna: Sertralina</strong> (dosis 50 a 100 mg/día). Presenta un índice de paso a la leche materna extremadamente bajo (< 2-3% de la dosis materna ajustada por peso) y niveles plasmáticos indetectables en el lactante, sin efectos adversos descritos.",
          "• <strong>Alternativa segura: Paroxetina</strong> (también baja excreción láctea, aunque con mayor efecto sedante y anticolinérgico).",
          "• <strong>Fluoxetina:</strong> Mayor excreción láctea y vida media muy prolongada; se prefiere evitar su inicio de novo en lactancia exclusiva, aunque si la paciente ya respondía a ella previamente no es obligatorio cambiarla.",
          "• <strong>Conducta en Psicosis Puerperal:</strong> Hospitalización psiquiátrica de urgencia inmediata (en lo posible en unidades conjuntas madre-hijo con supervisión de enfermería continua para proteger al recién nacido), antipsicóticos atípicos (Olanzapina o Haloperidol) + estabilizador del ánimo; la Terapia Electroconvulsiva (TEC) es el tratamiento de elección por su rapidez y seguridad."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial: Disforia Puerperal (Blues) vs Depresión Posparto vs Psicosis Puerperal",
      "headers": [
        "Característica",
        "Disforia Puerperal (\"Blues\")",
        "Depresión Posparto (DPP)",
        "Psicosis Puerperal"
      ],
      "rows": [
        [
          "Prevalencia",
          "50 – 80% de las madres",
          "10 – 15% de las madres",
          "0.1 – 0.2% (1-2 por 1.000 partos)"
        ],
        [
          "Inicio temporal",
          "Precoz: 3.º a 5.º día postparto",
          "2.ª a 6.ª semana (hasta 1 año)",
          "Hiperagudo: 3.º a 14.º día postparto"
        ],
        [
          "Clínica cardinal",
          "Labilidad emocional, llanto, fatiga",
          "Anhedonia, culpa, desapego, tristeza",
          "Delirios sobre el bebé, confusión, alucinaciones"
        ],
        [
          "Vínculo con el bebé",
          "Preservado y afectuoso",
          "Dificultoso, ambivalente, culpa",
          "Ruptura grave · RIESGO DE INFANTICIDIO"
        ],
        [
          "Evolución y manejo",
          "Autolimitado (< 14 días) · Apoyo familiar",
          "Persistente · ISRS (Sertralina) + TCC",
          "EMERGENCIA MÉDICA · Hospitalización inmediata + TEC/Antipsicóticos"
        ]
      ]
    },
    "vignette": {
      "title": "Caso Clínico Tipo EUNACOM",
      "text": "Primigesta de 27 años, con antecedente de parto vaginal eutócico hace 7 semanas sin incidentes obstétricos, acude al control de niño sano de los 2 meses en el CESFAM. La enfermera detecta en la Escala de Edimburgo un puntaje de 15 puntos y la deriva a médico. En la entrevista, la paciente rompe en llanto desconsolado, refiriendo que desde hace 1 mes no disfruta estar con su hijo, siente que \"no nació para ser madre\", no logra dormir aun cuando su bebé duerme plácidamente y se siente permanentemente exhausta y culpable. La interacción muestra a la madre distante pero protectora con el lactante. Niega ideación de daño al menor y no presenta síntomas psicóticos. Alimenta con lactancia materna exclusiva y desea continuarla.",
      "conducta": "La paciente presenta una Depresión Posparto confirmada (síntomas de depresión mayor de 1 mes de evolución con tamizaje positivo EPDS 15 ≥ 10 puntos en control de 2 meses). El inicio tardío (> 2 semanas) y la severidad descartan un baby blues o tristeza puerperal benigna. La conducta correcta según la Guía GES N° 21 y normas de lactancia es: 1) Iniciar tratamiento farmacológico con Sertralina 50 mg/día por vía oral matinal (fármaco de primera elección por su mínimo paso a leche materna y comprobada seguridad neonatal); 2) Mantener la lactancia materna exclusiva (no está indicado suspenderla); 3) Integrar a psicoterapia individual y talleres de apoyo a la díada madre-hijo; y 4) Citar a control en 2 semanas. Está formalmente contraindicado tranquilizar a la madre sin tratamiento o indicarle suspender la lactancia de forma innecesaria."
    },
    "explicacion": "La paciente presenta una Depresión Posparto confirmada (síntomas de depresión mayor de 1 mes de evolución con tamizaje positivo EPDS 15 ≥ 10 puntos en control de 2 meses). El inicio tardío (> 2 semanas) y la severidad descartan un baby blues o tristeza puerperal benigna. La conducta correcta según la Guía GES N° 21 y normas de lactancia es: 1) Iniciar tratamiento farmacológico con Sertralina 50 mg/día por vía oral matinal (fármaco de primera elección por su mínimo paso a leche materna y comprobada seguridad neonatal); 2) Mantener la lactancia materna exclusiva (no está indicado suspenderla); 3) Integrar a psicoterapia individual y talleres de apoyo a la díada madre-hijo; y 4) Citar a control en 2 semanas. Está formalmente contraindicado tranquilizar a la madre sin tratamiento o indicarle suspender la lactancia de forma innecesaria.",
    "keyPoints": [
      "El \"Baby blues\" o tristeza posparto inicia en los primeros 3 a 5 días y se resuelve espontáneamente antes de las 2 semanas sin necesidad de fármacos.",
      "La Depresión Posparto se pesquisa universalmente en APS mediante la Escala de Edimburgo (EPDS); un puntaje ≥ 10 puntos exige confirmación y manejo activo bajo GES N° 21.",
      "Sertralina es el antidepresivo de elección durante la lactancia materna por su baja excreción en leche y excelente perfil de seguridad en el lactante.",
      "Paroxetina es una alternativa segura en lactancia, mientras que Fluoxetina se evita como primera opción por su larga vida media y metabolitos activos.",
      "La Psicosis Puerperal es una emergencia psiquiátrica absoluta con riesgo inminente de infanticidio y suicidio que exige hospitalización inmediata y separación protegida supervisada.",
      "Trampa del examen: Nunca atribuir una depresión con anhedonia y culpa persistente a las 6 semanas del parto a un \"baby blues normal\"; el blues dura menos de 14 días."
    ],
    "questions": [
      {
        "stem": "Una madre primípara de 24 años consulta al 5.° día postparto por llanto fácil, hipersensibilidad emocional y fatiga. Refiere que a ratos se siente desbordada por los cuidados del recién nacido, pero amamanta a su hijo con afecto y logra descansar cuando sus familiares la apoyan. Su examen mental no muestra anhedonia persistente, desapego ni ideas delirantes. ¿Cuál es el diagnóstico más probable y la conducta adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Depresión posparto mayor; iniciar Sertralina 50 mg al día de inmediato"
          },
          {
            "id": "B",
            "text": "Disforia puerperal (\"Baby Blues\"); brindar psicoeducación, apoyo familiar y seguimiento clínico sin prescribir psicofármacos"
          },
          {
            "id": "C",
            "text": "Psicosis puerperal incipiente; derivar de urgencia a hospitalización cerrada"
          },
          {
            "id": "D",
            "text": "Trastorno de pánico postparto; prescribir Alprazolam en gotas cada 8 horas"
          },
          {
            "id": "E",
            "text": "Encefalopatía puerperal; solicitar resonancia magnética de encéfalo urgente"
          }
        ],
        "correcta": "B",
        "explicacion": "El cuadro corresponde típicamente a una Disforia Puerperal o \"Baby Blues\", condición transitoria y benigna que afecta hasta al 80% de las mujeres entre el 3.º y 5.º día del puerperio producto de la caída hormonal estrogénica y el agotamiento físico. Se caracteriza por labilidad y llanto fácil, pero con vínculo madre-hijo intacto y sin compromiso del funcionamiento global ni anhedonia profunda. Su curso es autolimitado y remite espontáneamente antes de los 10 a 14 días. La conducta correcta es educar a la madre y la familia, fomentar el soporte en los cuidados del niño y realizar seguimiento ambulatorio sin requerir psicofármacos. La Sertralina (A) se reserva para depresión mayor posparto instalada. Perla de examen: El baby blues remite espontáneamente en menos de dos semanas y no requiere farmacoterapia.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.11.1.002"
      },
      {
        "stem": "Una mujer de 29 años, en su 4.ª semana de puerperio, consulta por anhedonia profunda, llanto diario, culpa intensa y temor a quedarse sola con su bebé porque \"siente que no lo quiere lo suficiente\". En el CESFAM se aplica Escala de Edimburgo (EPDS) con 16 puntos. La paciente amamanta a su hijo con leche materna exclusiva y manifiesta su deseo de continuar haciéndolo. ¿Cuál es el tratamiento farmacológico de primera elección en este escenario?",
        "options": [
          {
            "id": "A",
            "text": "Suspender definitivamente la lactancia e iniciar Amitriptilina 150 mg al día"
          },
          {
            "id": "B",
            "text": "Mantener la lactancia materna e iniciar tratamiento con Sertralina 50 mg al día"
          },
          {
            "id": "C",
            "text": "Indicar Fenobarbital 100 mg cada noche para garantizar el sueño materno"
          },
          {
            "id": "D",
            "text": "Indicar Fluoxetina 60 mg al día junto con bromocriptina para inhibir la prolactina"
          },
          {
            "id": "E",
            "text": "Evitar todo tratamiento farmacológico y esperar a que el niño cumpla 6 meses"
          }
        ],
        "correcta": "B",
        "explicacion": "La paciente presenta una Depresión Posparto moderada a severa (EPDS 16 ≥ 10 puntos). En mujeres que amamantan, la Sertralina es el fármaco de primera línea absoluto debido a que sus niveles en la leche materna son prácticamente indetectables y no se asocia a toxicidad ni sedación en el lactante. La lactancia materna aporta beneficios inmunológicos y de apego indispensables, por lo que NO debe suspenderse salvo contraindicaciones estrictas (A). El fenobarbital (C) pasa a la leche causando sedación severa y depresión respiratoria neonatal. La bromocriptina (D) inhibe la lactancia y está proscrita para este fin. Dejar sin tratamiento (E) deteriora gravemente el neurodesarrollo cognitivo y emocional del lactante. Perla de examen: Sertralina es el antidepresivo de elección en la depresión posparto con lactancia materna.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.11.1.002"
      }
    ],
    "vignetteText": "Primigesta de 27 años, con antecedente de parto vaginal eutócico hace 7 semanas sin incidentes obstétricos, acude al control de niño sano de los 2 meses en el CESFAM. La enfermera detecta en la Escala de Edimburgo un puntaje de 15 puntos y la deriva a médico. En la entrevista, la paciente rompe en llanto desconsolado, refiriendo que desde hace 1 mes no disfruta estar con su hijo, siente que \"no nació para ser madre\", no logra dormir aun cuando su bebé duerme plácidamente y se siente permanentemente exhausta y culpable. La interacción muestra a la madre distante pero protectora con el lactante. Niega ideación de daño al menor y no presenta síntomas psicóticos. Alimenta con lactancia materna exclusiva y desea continuarla."
  },
  {
    "id": "psiq-05",
    "classId": "psiq-05",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Trastornos del Ánimo & Urgencias Suicidas",
    "topicLabel": "17.5",
    "title": "Trastorno Depresivo Persistente (Distimia) y Trastorno Adaptativo",
    "perfilCode": "1.11.1.002",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "GES N° 21 en caso de sobreimposición de episodio depresivo mayor (\"depresión doble\") · Manejo en APS con psicoterapia de apoyo y resolución de estresores psicosociales.",
    "reconstrucciones": "Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026",
    "frecuencia": "Media · Diagnóstico diferencial cronológico de cuadros depresivos subagudos y crónicos",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico: Trastorno Adaptativo vs Distimia vs Episodio Depresivo Mayor",
    "diagram": {
      "title": "Algoritmo Diagnóstico: Adaptativo vs Distimia vs Depresión Mayor",
      "svg": "<svg viewBox=\"0 0 620 339\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#7e22ce\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#7e22ce;font-weight:700}\n    .acc{fill:#7e22ce;stroke:#6b21a8}.accT{fill:#fff}.accS{font-size:8px;fill:#f3e8ff}\n    .dec{fill:#faf5ff;stroke:#d8b4fe;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#7e22ce;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Paciente con Síntomas Depresivos o Angustiosos Subagudos</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Identificar relación con estresor biográfico identificable y tiempo de evolución</text>\n  <path class=\"ln\" d=\"M310,47 V69\"/>\n  <rect class=\"dec\" x=\"70\" y=\"69\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">¿Existe un Estresor Psicosocial Claro en los Últimos 3 Meses?</text>\n  <text class=\"sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">Relación de causalidad temporal y proporcionalidad de la respuesta</text>\n  <path class=\"ln\" d=\"M310,108 V138 H158 V148\"/>\n  <path class=\"ln\" d=\"M310,138 H462 V148\"/>\n  <text class=\"lbl\" x=\"158\" y=\"133\" text-anchor=\"middle\">Estresor claro en ≤ 3 meses (Duelo, divorcio, desempleo)</text>\n  <text class=\"lbl\" x=\"462\" y=\"133\" text-anchor=\"middle\">Sin estresor o cuadro crónico de larga data</text>\n  <rect class=\"dec\" x=\"12\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"158\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Trastorno Adaptativo</text>\n  <text class=\"sub\" x=\"158\" y=\"175\" text-anchor=\"middle\">Desproporción al estresor · No cumple TDM</text>\n  <text class=\"sub\" x=\"158\" y=\"186\" text-anchor=\"middle\">Cede en &lt; 6 meses post-estresor</text>\n  <rect class=\"warn\" x=\"316\" y=\"148\" width=\"292\" height=\"39\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"462\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Evaluar Duración del Cuadro Depresivo</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"175\" text-anchor=\"middle\">Diferenciar cronicidad continua vs episodios recurrentes</text>\n  <path class=\"ln\" d=\"M158,198 V208 H310 V220\"/>\n  <path class=\"ln\" d=\"M462,198 V208 H310 V220\"/>\n  <rect class=\"acc\" x=\"100\" y=\"220\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">Trastorno Depresivo Persistente (Distimia)</text>\n  <text class=\"accS\" x=\"310\" y=\"247\" text-anchor=\"middle\">Ánimo deprimido la mayor parte del día durante ≥</text>\n  <text class=\"accS\" x=\"310\" y=\"258\" text-anchor=\"middle\">2 años (adultos) o ≥ 1 año (niños/adolescentes)</text>\n  <path class=\"ln\" d=\"M310,270 V292\"/>\n  <rect class=\"warn\" x=\"100\" y=\"292\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"307\" text-anchor=\"middle\" font-weight=\"700\">Concepto de \"Depresión Doble\"</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"319\" text-anchor=\"middle\">Episodio depresivo mayor agudo sobreimpuesto a una distimia de base · Requiere ISRS plenos</text>\n</svg>"
    },
    "contexto": "El espectro depresivo no se agota en el episodio mayor episódico. En la consulta ambulatoria de atención primaria son sumamente frecuentes dos entidades que se confunden a menudo: el Trastorno Adaptativo (una respuesta desadaptativa aguda y desproporcionada ante un estresor biográfico identificable, cuyo tratamiento es psicoterapéutico) y el Trastorno Depresivo Persistente o Distimia (un estado de ánimo melancólico y sombrío continuo de al menos 2 años de evolución, que el paciente asume como su \"forma de ser\", pero que responde a farmacoterapia y psicoterapia combinada). Distinguir estas entidades evita la polifarmacia innecesaria en trastornos reactivos transitorios y permite tratar cuadros crónicos subdiagnosticados.",
    "contentSections": [
      {
        "subhead": "1. Trastorno Adaptativo: Definición, Criterios DSM-5 y Manejo",
        "paragraphs": [
          "El <strong>Trastorno Adaptativo</strong> se define por el desarrollo de síntomas emocionales (depresión, ansiedad o mixtos) o conductuales en respuesta a un <strong>estresor psicosocial identificable</strong> (ej. divorcio, despido laboral, migración, quiebra económica, diagnóstico de enfermedad médica no invalidante):",
          "• <strong>Criterio temporal de inicio:</strong> Los síntomas deben aparecer dentro de los <strong>primeros 3 meses</strong> tras el inicio del estresor.",
          "• <strong>Desproporción o impacto:</strong> Malestar intenso desproporcionado a la gravedad o intensidad del estresor, o deterioro clínicamente significativo en lo social, laboral u otras áreas.",
          "• <strong>Exclusión:</strong> No cumple criterios para otro trastorno mental (no alcanza a constituir un Episodio Depresivo Mayor completo) y no es una exacerbación de un trastorno preexistente.",
          "• <strong>Criterio temporal de cese:</strong> Una vez que el estresor o sus consecuencias han cesado, los síntomas <strong>no persisten más de seis (6) meses adicionales</strong>.",
          "• <strong>Tratamiento:</strong> El pilar es la <strong>psicoterapia breve focalizada en crisis</strong> y resolución de problemas. <em>Regla de Oro:</em> Los psicofármacos (antidepresivos o benzodiacepinas) NO son la primera línea; las benzodiacepinas pueden usarse solo de forma muy acotada (1 a 2 semanas) si coexiste insomnio severo incapacitante, advirtiendo el riesgo de dependencia."
        ]
      },
      {
        "subhead": "2. Trastorno Depresivo Persistente (Distimia): Criterios y Concepto de Depresión Doble",
        "paragraphs": [
          "La <strong>Distimia</strong> (unificada en el DSM-5 como Trastorno Depresivo Persistente) es un trastorno afectivo crónico caracterizado por estado de ánimo deprimido durante la mayor parte del día, presente más días que los que está ausente, durante un período continuo de <strong>al menos dos (2) años en adultos</strong> (o al menos 1 año en niños y adolescentes).",
          "• Durante este período, el paciente nunca ha estado libre de síntomas durante más de dos meses seguidos.",
          "• Se acompaña de al menos dos síntomas adicionales: alteración del apetito, insomnio/hipersomnia, baja energía o fatiga, baja autoestima, falta de concentración o indecisión, y sentimientos de desesperanza.",
          "• El paciente suele consultar diciendo que \"siempre ha sido así, taciturno o negativo\", asumiendo la depresión como un rasgo de personalidad (\"temperamento depresivo\").",
          "• <strong>Concepto de Depresión Doble:</strong> Ocurre cuando un paciente con distimia crónica de base presenta una exacerbación sintomática aguda que cumple todos los criterios de un <strong>Episodio Depresivo Mayor</strong> sobreimpuesto. Al tratarse el episodio mayor con antidepresivos, el paciente retorna a su línea de base distímica, requiriéndose optimización del tratamiento farmacológico y psicoterapéutico a largo plazo."
        ]
      },
      {
        "subhead": "3. Diagnóstico Diferencial y Algoritmo Terapéutico",
        "paragraphs": [
          "La diferenciación clínica se sustenta en tres ejes: <strong>estresor, severidad sintomática y tiempo de evolución</strong>:",
          "• Si hay estresor claro en < 3 meses, síntomas no cumplen TDM y resuelven en < 6 meses post-estresor: <strong>Trastorno Adaptativo</strong> (psicoterapia).",
          "• Si hay ≥ 5 de 9 criterios DSM-5 por ≥ 2 semanas con deterioro evidente: <strong>Episodio Depresivo Mayor</strong> (ISRS + TCC).",
          "• Si el ánimo es crónicamente bajo por ≥ 2 años sin cumplir TDM continuo: <strong>Distimia</strong> (ISRS a largo plazo + TCC).",
          "• Si tras la pérdida de un ser querido hay tristeza normal, llanto y dolor sin culpa patológica ni ideación de muerte: <strong>Duelo no complicado</strong> (proceso normal, no requiere intervención médica)."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial: Trastorno Adaptativo vs Distimia vs Depresión Mayor vs Duelo Normal",
      "headers": [
        "Entidad Clínica",
        "Desencadenante",
        "Duración Temporal",
        "Gravedad / Criterios DSM-5",
        "Tratamiento Principal"
      ],
      "rows": [
        [
          "Trastorno Adaptativo",
          "Estresor identificable previo (< 3 meses)",
          "< 6 meses tras cese del estresor",
          "Malestar desproporcionado pero < 5 criterios TDM",
          "Psicoterapia focalizada · No requiere ISRS"
        ],
        [
          "Distimia (T. Dep. Persistente)",
          "Habitualmente insidioso / biológico",
          "≥ 2 años continuos (≥ 1 año en niños)",
          "Subumbral a TDM pero persistente crónico",
          "ISRS (Sertralina/Escitalopram) + Psicoterapia"
        ],
        [
          "Episodio Depresivo Mayor",
          "Variable (puede ser endógeno o reactivo)",
          "≥ 2 semanas consecutivas",
          "≥ 5 de 9 criterios con disfunción marcada",
          "ISRS de 1.ª línea + Psicoterapia (GES N° 21)"
        ],
        [
          "Duelo Normal / No Complicado",
          "Fallecimiento de ser querido",
          "Meses (picos ante fechas conmemorativas)",
          "Tristeza con autoestima conservada; olas de dolor",
          "Acompañamiento empático y red de apoyo"
        ]
      ]
    },
    "vignette": {
      "title": "Caso Clínico Tipo EUNACOM",
      "text": "Hombre de 32 años, ingeniero comercial, consulta en atención primaria por desánimo, cefalea tensional y dificultad para conciliar el sueño desde hace 6 semanas. Relata que hace 2 meses su empresa realizó una reestructuración de personal y fue transferido a una sucursal lejana con cambio de jefatura y aumento de responsabilidades. Refiere que desde entonces le cuesta desconectarse del trabajo, siente ansiedad los domingos por la tarde y llora ocasionalmente los fines de semana. Sin embargo, mantiene su apetito normal, disfruta compartir con sus hijos, juega fútbol con sus amigos los sábados y no presenta sentimientos de culpa, enlentecimiento psicomotor ni ideas de muerte. Su puntaje PHQ-9 es de 7 puntos (depresión leve subumbral).",
      "conducta": "El cuadro clínico corresponde a un Trastorno Adaptativo con estado de ánimo deprimido y ansiedad (reacción desadaptativa a un estresor laboral claro ocurrido hace 2 meses, con síntomas emocionales desproporcionados que causan malestar pero no cumplen los 5 criterios mínimos requeridos para un Episodio Depresivo Mayor). La conducta médica correcta en APS es: 1) Psicoeducación y validación del impacto emocional del estresor; 2) Derivar a psicoterapia de apoyo breve orientada a resolución de problemas y manejo del estrés laboral; 3) Recomendar higiene del sueño y técnicas de relajación; y 4) Seguimiento ambulatorio en 3 a 4 semanas para verificar la evolución. Está formalmente desaconsejado iniciar antidepresivos o prescribir benzodiacepinas de forma prolongada."
    },
    "explicacion": "El cuadro clínico corresponde a un Trastorno Adaptativo con estado de ánimo deprimido y ansiedad (reacción desadaptativa a un estresor laboral claro ocurrido hace 2 meses, con síntomas emocionales desproporcionados que causan malestar pero no cumplen los 5 criterios mínimos requeridos para un Episodio Depresivo Mayor). La conducta médica correcta en APS es: 1) Psicoeducación y validación del impacto emocional del estresor; 2) Derivar a psicoterapia de apoyo breve orientada a resolución de problemas y manejo del estrés laboral; 3) Recomendar higiene del sueño y técnicas de relajación; y 4) Seguimiento ambulatorio en 3 a 4 semanas para verificar la evolución. Está formalmente desaconsejado iniciar antidepresivos o prescribir benzodiacepinas de forma prolongada.",
    "keyPoints": [
      "El Trastorno Adaptativo inicia dentro de los 3 meses posteriores a un estresor biográfico identificable y se resuelve en menos de 6 meses tras el fin del estresor.",
      "Los síntomas del Trastorno Adaptativo no alcanzan el umbral diagnóstico de 5 criterios de un Episodio Depresivo Mayor.",
      "El tratamiento de elección del Trastorno Adaptativo es la psicoterapia breve; los psicofármacos NO son la primera línea y no deben indicarse rutinariamente.",
      "La Distimia (Trastorno Depresivo Persistente) exige al menos 2 años de ánimo depresivo continuo en adultos (al menos 1 año en niños y adolescentes).",
      "En la distimia, el paciente no permanece más de 2 meses consecutivos sin síntomas durante el período de 2 años.",
      "Depresión doble es la concurrencia de un Episodio Depresivo Mayor agudo sobreimpuesto a una Distimia crónica preexistente.",
      "Trampa de examen: No prescribir antidepresivos a un paciente con reacción adaptativa a un estresor que conserva capacidad de disfrute y tiene menos de 5 criterios de TDM."
    ],
    "questions": [
      {
        "stem": "Un hombre de 26 años consulta en el CESFAM por llanto fácil, insomnio de conciliación y desconcentración de 4 semanas de evolución. Refiere que hace 6 semanas terminó una relación de pareja de 3 años de duración. Al examen mental se aprecia angustiado, pero mantiene reactividad afectiva, sale a correr por las tardes, se alimenta bien y no presenta anhedonia generalizada ni ideas de muerte. Su PHQ-9 resulta en 6 puntos. ¿Cuál es el diagnóstico más probable y la conducta adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Trastorno depresivo mayor grave; iniciar Sertralina 100 mg al día e interconsulta a COSAM"
          },
          {
            "id": "B",
            "text": "Trastorno adaptativo con ánimo depresivo; indicar psicoterapia de apoyo breve y consejería sin psicofármacos"
          },
          {
            "id": "C",
            "text": "Trastorno de pánico; prescribir Clonazepam 2 mg cada 8 horas por 6 meses"
          },
          {
            "id": "D",
            "text": "Distimia crónica; indicar antidepresivos tricíclicos por 2 años"
          },
          {
            "id": "E",
            "text": "Trastorno bipolar tipo II; iniciar carbonato de litio inmediato"
          }
        ],
        "correcta": "B",
        "explicacion": "El paciente presenta una reacción emocional desadaptativa temporal ante un estresor biográfico claro (ruptura amorosa hace 6 semanas). Los síntomas llevan 4 semanas (< 3 meses de inicio), causan malestar pero no cumplen los 5 criterios exigidos para un Episodio Depresivo Mayor (mantiene apetito, reactividad afectiva y capacidad de actividad física). Corresponde a un Trastorno Adaptativo. El manejo correcto en atención primaria es la psicoterapia breve y consejería para elaboración del duelo vincular, sin indicación de antidepresivos (A) ni benzodiacepinas crónicas (C). La distimia (D) requiere al menos 2 años de evolución continua. Perla de examen: En trastorno adaptativo reactivo a un estresor identificable, la psicoterapia es el tratamiento angular y no se indican antidepresivos de entrada.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.11.1.002"
      },
      {
        "stem": "Una mujer de 39 años consulta en salud mental refiriendo: \"Toda mi vida he sido una persona triste y sin energía; desde la universidad, hace más de 10 años, siento que veo el mundo en blanco y negro, me canso con facilidad y tengo muy baja autoestima\". Refiere que nunca ha tenido episodios de euforia ni períodos libres de síntomas que superen las 3 o 4 semanas seguidas. Su examen físico y tiroideo son normales. ¿Cuál es el diagnóstico más probable y el pilar terapéutico?",
        "options": [
          {
            "id": "A",
            "text": "Trastorno adaptativo; reposo laboral exclusivo"
          },
          {
            "id": "B",
            "text": "Trastorno Depresivo Persistente (Distimia); tratamiento combinado con ISRS a largo plazo y psicoterapia cognitivo-conductual"
          },
          {
            "id": "C",
            "text": "Trastorno de personalidad esquizoide; tratamiento con antipsicóticos típicos"
          },
          {
            "id": "D",
            "text": "Episodio depresivo mayor único; suspensión de fármacos a los 3 meses"
          },
          {
            "id": "E",
            "text": "Trastorno ciclotímico; monoterapia con valproato sódico"
          }
        ],
        "correcta": "B",
        "explicacion": "El cuadro de ánimo depresivo crónico, baja energía, baja autoestima y anhedonia leve a moderada de curso continuo durante más de 10 años, sin períodos asintomáticos superiores a 2 meses, cumple con precisión los criterios diagnósticos del Trastorno Depresivo Persistente (Distimia). A diferencia de la creencia tradicional de que la distimia solo responde a psicoterapia, la evidencia actual demuestra que el tratamiento óptimo es la combinación de un ISRS (como Sertralina o Escitalopram) a dosis plenas durante períodos prolongados asociado a psicoterapia cognitivo-conductual estructurada. El trastorno adaptativo (A) requiere un estresor reciente (< 3 meses) y dura menos de 6 meses. La personalidad esquizoide (C) no presenta ánimo depresivo ni sufrimiento egodistónico. Perla de examen: La distimia exige al menos 2 años de síntomas continuos en adultos y se beneficia significativamente de la combinación de ISRS y psicoterapia.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.11.1.002"
      }
    ],
    "vignetteText": "Hombre de 32 años, ingeniero comercial, consulta en atención primaria por desánimo, cefalea tensional y dificultad para conciliar el sueño desde hace 6 semanas. Relata que hace 2 meses su empresa realizó una reestructuración de personal y fue transferido a una sucursal lejana con cambio de jefatura y aumento de responsabilidades. Refiere que desde entonces le cuesta desconectarse del trabajo, siente ansiedad los domingos por la tarde y llora ocasionalmente los fines de semana. Sin embargo, mantiene su apetito normal, disfruta compartir con sus hijos, juega fútbol con sus amigos los sábados y no presenta sentimientos de culpa, enlentecimiento psicomotor ni ideas de muerte. Su puntaje PHQ-9 es de 7 puntos (depresión leve subumbral)."
  },
  {
    "id": "psiq-06",
    "classId": "psiq-06",
    "tier": 3,
    "blockNum": 2,
    "blockName": "Trastornos de Ansiedad, TOC & Trauma",
    "topicLabel": "17.6",
    "title": "Trastorno de Pánico y Agorafobia: Manejo Agudo vs Mantenimiento con ISRS",
    "perfilCode": "1.03.1.003",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "Norma Técnica de Salud Mental MINSAL · Atención priorizada en APS, manejo de la crisis aguda en el Servicio de Urgencias y derivación a COSAM en refractariedad.",
    "reconstrucciones": "Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026",
    "frecuencia": "Máxima rentabilidad · Causa extraordinariamente frecuente de consulta en urgencias médicas",
    "svg": null,
    "algoTitle": "Algoritmo de Manejo de la Crisis de Pánico Aguda y Prevención a Largo Plazo",
    "diagram": {
      "title": "Algoritmo de Manejo del Trastorno de Pánico y Agorafobia",
      "svg": "<svg viewBox=\"0 0 620 400\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#7e22ce\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#7e22ce;font-weight:700}\n    .acc{fill:#7e22ce;stroke:#6b21a8}.accT{fill:#fff}.accS{font-size:8px;fill:#f3e8ff}\n    .dec{fill:#faf5ff;stroke:#d8b4fe;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#7e22ce;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Crisis de Angustia / Ataque de Pánico Agudo en Urgencias</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Inicio brusco · Palpitaciones, disnea, opresión precordial, sensación de muerte inminente</text>\n  <path class=\"ln\" d=\"M310,47 V69\"/>\n  <rect class=\"warn\" x=\"100\" y=\"69\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Descarte Obligatorio de Patología Médica Aguda</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">ECG de 12 derivaciones · Troponinas si dolor torácico · Glicemia y saturación O2</text>\n  <path class=\"ln\" d=\"M310,108 V130\"/>\n  <rect class=\"dec\" x=\"70\" y=\"130\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"145\" text-anchor=\"middle\" font-weight=\"700\">¿Presenta Desencadenante Orgánico o Crisis Primaria?</text>\n  <text class=\"sub\" x=\"310\" y=\"157\" text-anchor=\"middle\">Diferenciación de SCA, TEP, arritmias, feocromocitoma y consumo de tóxicos</text>\n  <path class=\"ln\" d=\"M310,169 V199 H158 V209\"/>\n  <path class=\"ln\" d=\"M310,199 H462 V209\"/>\n  <text class=\"lbl\" x=\"158\" y=\"194\" text-anchor=\"middle\">Sospecha Médica / Tóxica Positiva</text>\n  <text class=\"lbl\" x=\"462\" y=\"194\" text-anchor=\"middle\">Exámenes Normales: Crisis de Pánico Primaria</text>\n  <rect class=\"crit\" x=\"12\" y=\"209\" width=\"292\" height=\"39\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"158\" y=\"224\" text-anchor=\"middle\" font-weight=\"700\">Manejo Somático Específico</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"236\" text-anchor=\"middle\">Tratar causa de base · Monitorización hemodinámica</text>\n  <rect class=\"dec\" x=\"316\" y=\"209\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"462\" y=\"224\" text-anchor=\"middle\" font-weight=\"700\">Contención Verbal y Ambiente Tranquilo</text>\n  <text class=\"sub\" x=\"462\" y=\"236\" text-anchor=\"middle\">Respiración diafragmática</text>\n  <text class=\"sub\" x=\"462\" y=\"247\" text-anchor=\"middle\">Benzodiacepina SL/VO solo si no cede</text>\n  <path class=\"ln\" d=\"M158,259 V269 H310 V281\"/>\n  <path class=\"ln\" d=\"M462,259 V269 H310 V281\"/>\n  <rect class=\"acc\" x=\"100\" y=\"281\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"296\" text-anchor=\"middle\" font-weight=\"700\">Confirmación Diagnóstica de Trastorno de Pánico</text>\n  <text class=\"accS\" x=\"310\" y=\"308\" text-anchor=\"middle\">Crisis recurrentes e inesperadas + ≥ 1 mes de ansiedad anticipatoria o evitación</text>\n  <path class=\"ln\" d=\"M310,320 V342\"/>\n  <rect class=\"acc\" x=\"100\" y=\"342\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"357\" text-anchor=\"middle\" font-weight=\"700\">Tratamiento de Mantenimiento Definitivo (1.ª Línea)</text>\n  <text class=\"accS\" x=\"310\" y=\"369\" text-anchor=\"middle\">ISRS (Sertralina 50-100 mg / Escitalopram 10-20 mg) a dosis inicial baja + TCC</text>\n  <text class=\"accS\" x=\"310\" y=\"380\" text-anchor=\"middle\">Retiro de BZD en 4-6 sem</text>\n</svg>"
    },
    "contexto": "El ataque de pánico es una descarga paroxística masiva e inesperada del sistema nervioso simpático originada en la hiperactividad de la amígdala cerebral y el locus coeruleus, que alcanza su máxima intensidad en menos de 10 minutos. Los pacientes acuden aterrorizados a urgencias creyendo experimentar un infarto agudo al miocardio, un accidente cerebrovascular o \"estar volviéndose locos\". El Trastorno de Pánico se diagnostica cuando los ataques son recurrentes y se asocian a \"miedo al miedo\" (ansiedad anticipatoria) o conductas de evitación fóbica (Agorafobia). En el examen, la clave es realizar siempre un descarte somático inicial con ECG, reservar las benzodiacepinas para el rescate agudo acotado y prescribir ISRS como tratamiento curativo a largo plazo.",
    "contentSections": [
      {
        "subhead": "1. Neurobiología de la Ansiedad Paroxística y Criterios DSM-5 de Crisis de Pánico",
        "paragraphs": [
          "La crisis de pánico se sustenta en una hiperreactividad del circuito neuroanatómico del miedo, que integra el <strong>núcleo central de la amígdala</strong>, el hipocampo y las proyecciones al <strong>locus coeruleus</strong> (centro noradrenérgico pontino) y núcleos autonómicos bulbares, gatillando una oleada simpaticomimética brusca.",
          "Según el DSM-5, un <strong>Ataque de Pánico (Crisis de Angustia)</strong> es la aparición súbita de miedo o malestar intenso que alcanza su pico en pocos minutos, acompañada de al menos <strong>cuatro (4) de los siguientes trece síntomas</strong>: 1) Palpitaciones o taquicardia; 2) Sudoración; 3) Temblores o sacudidas; 4) Sensación de dificultad para respirar o asfixia; 5) Sensación de atragantamiento; 6) Dolor o molestias precordiales; 7) Náuseas o malestar abdominal; 8) Inestabilidad, mareo o desmayo; 9) Escalofríos o sensación de calor; 10) Parestesias (entumecimiento u hormigueo); 11) Desrealización (sensación de irrealidad) o despersonalización (separarse de uno mismo); 12) Miedo a perder el control o \"volverse loco\"; y 13) <strong>Miedo inminente a morir</strong>."
        ]
      },
      {
        "subhead": "2. Criterios Diagnósticos de Trastorno de Pánico y Agorafobia",
        "paragraphs": [
          "Tener un ataque de pánico aislado no equivale a tener Trastorno de Pánico. El <strong>Trastorno de Pánico</strong> requiere:",
          "• Ataques de pánico <strong>imprevistos y recurrentes</strong> (sin desencadenante evidente inmediato).",
          "• Al menos a uno de los ataques le ha seguido <strong>un período mínimo de un (1) mes</strong> de uno o ambos de los siguientes hechos: <strong>1) Inquietud o preocupación continua</strong> acerca de sufrir nuevas crisis o sus consecuencias (\"¿me dará un infarto?\", ansiedad anticipatoria); o <strong>2) Cambio desadaptativo significativo del comportamiento</strong> relacionado con las crisis (ej. conductas de evitación para no hacer ejercicio o no salir solo).",
          "• <strong>Agorafobia:</strong> Miedo o ansiedad intensa en dos o más de las siguientes situaciones: uso de transporte público, espacios abiertos (plazas, estacionamientos), sitios cerrados (tiendas, cines), hacer filas o estar en multitudes, o estar fuera de casa solo. El motivo central es el <strong>temor a que escapar sea difícil o a no recibir ayuda</strong> en caso de presentar síntomas tipo pánico u otros incapacitantes."
        ]
      },
      {
        "subhead": "3. Diagnóstico Diferencial Somático Obligatorio en Urgencias",
        "paragraphs": [
          "En todo paciente que consulta por primera vez con síntomas de pánico en urgencias es <strong>obligatorio descartar patología médica potencialmente letal</strong>:",
          "• <strong>Cardiovascular:</strong> Síndrome coronario agudo, arritmias paroxísticas (TPSV, FA), prolapso de válvula mitral, miocardiopatía hipertrófica. <em>Examen obligatorio:</em> <strong>Electrocardiograma de 12 derivaciones</strong> y troponinas si hay factores de riesgo o dolor atípico.",
          "• <strong>Respiratorio:</strong> Tromboembolismo pulmonar (TEP), crisis asmática, neumotórax espontáneo.",
          "• <strong>Endocrino / Metabólico:</strong> Hipertiroidismo (solicitar TSH), feocromocitoma (hipertensión paroxística lábil), hipoglicemia (glicemia capilar), hipocalcemia (signos de Chvostek y Trousseau).",
          "• <strong>Tóxicos y Fármacos:</strong> Consumo de cocaína, anfetaminas, cafeína en exceso, abstinencia a alcohol o benzodiacepinas."
        ]
      },
      {
        "subhead": "4. Manejo Farmacológico: Crisis Aguda vs Tratamiento de Mantenimiento",
        "paragraphs": [
          "<strong>Manejo de la Crisis Aguda en Urgencias:</strong>",
          "1) Contención verbal y tranquilidad en un box silencioso, con tono de voz calmo y firme; 2) Ejercicios de respiración diafragmática pausada (para revertir la alcalosis respiratoria por hiperventilación que causa parestesias peribucales y carpopedales); 3) Si la angustia es intolerable y no cede con medidas ambientales, se administra una <strong>benzodiacepina de acción rápida por vía sublingual u oral</strong>: <strong>Clonazepam 0.5 a 1 mg</strong> o <strong>Lorazepam 1 a 2 mg</strong>. Se desaconsejan las vías parenterales (IM/EV) salvo agitación psicomotora extrema.",
          "<strong>Tratamiento de Mantenimiento a Largo Plazo:</strong>",
          "• <strong>Fármacos de Primera Línea: ISRS</strong> (Sertralina 50-100 mg/día, Escitalopram 10-20 mg/día, Paroxetina 20-40 mg/día) o IRSN (Venlafaxina).",
          "• <em>Fenómeno de Hipersensibilidad Serotoninérgica Inicial:</em> En los primeros días de un ISRS, los pacientes con pánico pueden experimentar un aumento paradójico de la ansiedad y palpitaciones. <em>Regla de Oro:</em> <strong>Iniciar el ISRS a la mitad de la dosis terapéutica</strong> (ej. Sertralina 25 mg/día o Escitalopram 5 mg/día) durante los primeros 7 a 14 días, y luego subir a dosis plena.",
          "• <strong>Uso de Benzodiacepinas:</strong> Solo como \"puente\" transitorio (2 a 4 semanas) mientras inicia el efecto del ISRS, con retiro programado gradual para evitar tolerancia y adicción."
        ]
      },
      {
        "subhead": "5. Psicoterapia Cognitivo-Conductual y Pronóstico",
        "paragraphs": [
          "La <strong>Terapia Cognitivo-Conductual (TCC)</strong> es tan eficaz como la farmacoterapia y presenta una <strong>tasa significativamente menor de recaídas a largo plazo tras el retiro del tratamiento</strong>.",
          "Sus componentes clave son: 1) Psicoeducación sobre el origen benigno de los síntomas fisiológicos del miedo; 2) Reestructuración cognitiva de pensamientos catastróficos (\"el corazón acelerado no significa que tendré un paro cardíaco\"); y 3) <strong>Exposición interoceptiva y en vivo</strong> (inducir voluntariamente hiperventilación o taquicardia para romper el condicionamiento del miedo, y exposición gradual a los sitios agorafóbicos evitados)."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial del Ataque de Pánico: Causas Psiquiátricas vs Médicas",
      "headers": [
        "Etiología / Cuadro",
        "Hallazgos Clínicos Clave",
        "Examen de Descarte Inmediato",
        "Diferencia Crítica con Pánico Primario"
      ],
      "rows": [
        [
          "Trastorno de Pánico Primario",
          "Pico en < 10 min, miedo a morir/volverse loco, temblor, desrealización",
          "ECG normal, laboratorio basal normal",
          "Ataques imprevistos recurrentes con ansiedad anticipatoria posterior"
        ],
        [
          "Síndrome Coronario Agudo (SCA)",
          "Dolor retroesternal opresivo irradiado a mandíbula/brazo, diaforesis fría",
          "ECG de 12 derivaciones + Troponinas seriadas",
          "Dolor se prolonga > 20-30 min y suele asociarse a esfuerzo o factores CV"
        ],
        [
          "Tromboembolismo Pulmonar",
          "Disnea súbita inexplicable, dolor pleurítico, taquipnea, taquicardia",
          "AngioTAC de tórax / Dímero D",
          "Hipoxemia marcada en gases arteriales (SatO2 < 90%)"
        ],
        [
          "Feocromocitoma",
          "Tríada clásica: cefalea paroxística + diaforesis + palpitaciones con HTA",
          "Metanefrinas libres en plasma o fraccionadas en orina 24 h",
          "Crisis de hipertensión arterial maligna paroxística muy severa (> 200/120)"
        ],
        [
          "Hipertiroidismo / Tirotoxicosis",
          "Pérdida de peso, temblor fino distal persistente, bocio, intolerancia al calor",
          "TSH baja (< 0.01) y T4 libre elevada",
          "Taquicardia y ansiedad sostenidas que no remiten entre episodios"
        ]
      ]
    },
    "severityTable": {
      "title": "Batería de Exámenes Obligatoria en Primer Ataque de Pánico y Banderas Rojas",
      "headers": [
        "Examen / Parámetro",
        "Justificación Médica Innegociable",
        "Hallazgo Anormal de Alarma",
        "Conducta Ante Positividad"
      ],
      "rows": [
        [
          "Electrocardiograma (ECG)",
          "Descartar arritmias paroxísticas (TPSV, WPW), isquemia y síndrome QT largo",
          "Supradesnivel ST, inversión T, PR corto con onda delta",
          "Manejo protocolizado de SCA o interconsulta a cardiología"
        ],
        [
          "Glicemia Capilar (HGT)",
          "Descartar hipoglicemia aguda causante de descarga adrenérgica reactiva",
          "Glicemia < 60 mg/dL",
          "Administración de glucosa oral o glucosado al 30% EV"
        ],
        [
          "Saturación O2 y Hemoglucotest",
          "Descartar hipoxemia oculta y alcalosis por hiperventilación",
          "SatO2 < 93% en aire ambiente",
          "Estudiar patología pulmonar aguda (Rx tórax, AngioTAC)"
        ],
        [
          "Screening Toxicológico Orina",
          "Descartar simpaticomiméticos (cocaína, pasta base, anfetaminas)",
          "Cannabis, cocaína o metanfetaminas positivas",
          "Soporte y desintoxicación; proscribir betabloqueadores puros"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Farmacoterapia Escalonada: Crisis Aguda vs Fase de Mantenimiento",
      "headers": [
        "Fase del Tratamiento",
        "Fármaco de Elección",
        "Dosis / Vía de Administración",
        "Objetivo y Reglas de Oro"
      ],
      "rows": [
        [
          "Crisis Aguda en Urgencias",
          "Clonazepam o Lorazepam",
          "Clonazepam 0.5 – 1 mg VO/SL o Lorazepam 1 – 2 mg VO/SL",
          "Control rápido de la angustia tras contención verbal · No usar EV rutinario"
        ],
        [
          "Inicio de Mantenimiento",
          "Sertralina o Escitalopram",
          "Sertralina 25 mg/día x 7 días, luego 50 mg/día (máx 150-200 mg)",
          "Titulación lenta para evitar empeoramiento paradójico de la ansiedad"
        ],
        [
          "Alternativa de Mantenimiento",
          "Paroxetina o Venlafaxina",
          "Paroxetina 10 mg/día -> 20-40 mg/día o Venlafaxina 75-150 mg/día",
          "Eficacia antipánico demostrada · Mayor sedación o efecto noradrenérgico"
        ],
        [
          "Terapia Puente",
          "Benzodiacepina a dosis fija baja",
          "Clonazepam 0.5 mg c/12 h durante las primeras 3 a 4 semanas",
          "Cubrir período de latencia del ISRS · Retiro gradual en semanas 4 a 6"
        ]
      ]
    },
    "vignette": {
      "title": "Caso Clínico Tipo EUNACOM",
      "text": "Mujer de 33 años, secretaria ejecutiva, consulta en el servicio de urgencias a las 02:00 AM traída por su esposo. Refiere que hace 30 minutos, mientras miraba televisión en su cama, sintió súbitamente palpitaciones intensas en el pecho, opresión retroesternal, sensación de asfixia y hormigueo en ambas manos, acompañados de una certeza aterradora de que \"estaba sufriendo un infarto y moriría\". En el box de urgencias luce sudorosa, pálida y angustiada. Al examen físico: PA 135/85 mmHg, FC 115 lpm regular, SatO2 99% ambiental, examen cardiopulmonar rigurosamente normal. El ECG de 12 derivaciones muestra taquicardia sinusal a 112 lpm sin alteraciones del segmento ST ni de la onda T. Las troponinas ultrasensibles son negativas. Refiere haber presentado episodios idénticos hace 2 y 4 semanas, y desde entonces no viaja en metro ni sale de su casa sin compañía por miedo a sufrir otra crisis.",
      "conducta": "La paciente presenta un Ataque de Pánico Agudo en el contexto de un Trastorno de Pánico con Agorafobia comórbida (crisis paroxísticas imprevistas y recurrentes seguidas de ansiedad anticipatoria persistente y conductas de evitación agorafóbica). El ECG y las enzimas descartan síndrome coronario agudo. La conducta médica inmediata en urgencias consiste en: 1) Brindar contención verbal empática explicando que los síntomas corresponden a una descarga de ansiedad y que su corazón está sano; 2) Guiar respiración diafragmática para revertir la hiperventilación; 3) Administrar Clonazepam 0.5 a 1 mg sublingual para el alivio sintomático inmediato; y 4) Para el tratamiento definitivo ambulatorio, indicar un ISRS de primera línea (Sertralina 25 mg/día por 7 días, aumentando luego a 50 mg/día) asociado a Terapia Cognitivo-Conductual, planificando el retiro gradual de la benzodiacepina en un mes. Está formalmente contraindicado dejar a la paciente solo con benzodiacepinas a permanencia."
    },
    "explicacion": "La paciente presenta un Ataque de Pánico Agudo en el contexto de un Trastorno de Pánico con Agorafobia comórbida (crisis paroxísticas imprevistas y recurrentes seguidas de ansiedad anticipatoria persistente y conductas de evitación agorafóbica). El ECG y las enzimas descartan síndrome coronario agudo. La conducta médica inmediata en urgencias consiste en: 1) Brindar contención verbal empática explicando que los síntomas corresponden a una descarga de ansiedad y que su corazón está sano; 2) Guiar respiración diafragmática para revertir la hiperventilación; 3) Administrar Clonazepam 0.5 a 1 mg sublingual para el alivio sintomático inmediato; y 4) Para el tratamiento definitivo ambulatorio, indicar un ISRS de primera línea (Sertralina 25 mg/día por 7 días, aumentando luego a 50 mg/día) asociado a Terapia Cognitivo-Conductual, planificando el retiro gradual de la benzodiacepina en un mes. Está formalmente contraindicado dejar a la paciente solo con benzodiacepinas a permanencia.",
    "keyPoints": [
      "El ataque de pánico se caracteriza por inicio brusco y alcance de intensidad máxima en menos de 10 minutos, acompañado de miedo inminente a morir o volverse loco.",
      "En todo primer episodio de pánico es mandatorio descartar patología médica mediante examen físico y Electrocardiograma de 12 derivaciones.",
      "El Trastorno de Pánico exige ataques recurrentes e imprevistos seguidos de al menos 1 mes de ansiedad anticipatoria o evitación conductual.",
      "Agorafobia es el temor a encontrarse en lugares o situaciones donde escapar sea difícil o no haya ayuda disponible ante una crisis de pánico.",
      "Las benzodiacepinas (Clonazepam o Lorazepam) se usan exclusivamente como rescate agudo o terapia puente en las primeras 2 a 4 semanas.",
      "Los ISRS (Sertralina, Escitalopram, Paroxetina) son el tratamiento farmacológico de elección a largo plazo.",
      "Para evitar el empeoramiento paradójico de la ansiedad por estimulación 5-HT inicial, los ISRS deben titularse comenzando con la mitad de la dosis durante 1 a 2 semanas.",
      "Trampa de examen: Prescribir benzodiacepinas en monoterapia a permanencia para el trastorno de pánico es un error que produce tolerancia, dependencia y rebote agorafóbico."
    ],
    "questions": [
      {
        "stem": "Una mujer de 29 años llega al servicio de urgencias por tercera vez en el mes manifestando sensación de ahogo, opresión en el pecho, taquicardia y miedo inminente a morir, iniciado bruscamente hace 20 minutos mientras estaba sentada en su trabajo. Su ECG, hemograma, enzimas cardíacas y radiografía de tórax resultan normales. Relata que vive con angustia constante pensando cuándo volverá a repetirse el episodio y ha evitado salir sola a la calle. ¿Cuál es la estrategia farmacológica de mantenimiento más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Indicar Alprazolam 0.5 mg cada 8 horas en monoterapia continua por un año"
          },
          {
            "id": "B",
            "text": "Iniciar Sertralina a dosis inicial de 25 mg al día titulando a 50 mg al día, asociar psicoterapia cognitivo-conductual y usar benzodiacepinas solo como puente transitorio"
          },
          {
            "id": "C",
            "text": "Prescribir Propranolol 80 mg cada 12 horas como monoterapia de por vida"
          },
          {
            "id": "D",
            "text": "Indicar Haloperidol 5 mg en gotas en caso de angustia y dar el alta sin controles"
          },
          {
            "id": "E",
            "text": "Mantener conducta expectante sin fármacos ya que todos los exámenes resultaron normales"
          }
        ],
        "correcta": "B",
        "explicacion": "La paciente presenta un Trastorno de Pánico con agorafobia incipiente. El tratamiento farmacológico de elección y primera línea a largo plazo son los Inhibidores Selectivos de la Recaptación de Serotonina (ISRS) como Sertralina, iniciando a dosis bajas (25 mg/día) para minimizar la exacerbación inicial de ansiedad, asociada a Terapia Cognitivo-Conductual (TCC). Las benzodiacepinas se utilizan únicamente como puente transitorio (primeras 2-4 semanas) mientras se instala el efecto terapéutico del ISRS. El distractor A comete el error grave de perpetuar benzodiacepinas en monoterapia, lo que genera adicción y rebote. El distractor C usa betabloqueadores que controlan la taquicardia periférica pero no tratan el trastorno de pánico central. El distractor D usa antipsicóticos típicos innecesarios. Perla de examen: En trastorno de pánico, los ISRS a titulación lenta son la base del tratamiento definitivo, reservando las benzodiacepinas como rescate inicial acotado.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.03.1.003"
      },
      {
        "stem": "Un hombre de 24 años consulta en urgencias por palpitaciones violently intensas, parestesias en dedos de las manos, temblor y sensación de atragantamiento que iniciaron hace 15 minutos. El examen cardiopulmonar y el ECG son rigurosamente normales. El médico tratante concluye que se trata de un ataque de pánico agudo. ¿Cuál es el manejo inicial más adecuado en la sala de urgencias?",
        "options": [
          {
            "id": "A",
            "text": "Administrar Adenosina 6 mg endovenosa en bolo rápido"
          },
          {
            "id": "B",
            "text": "Realizar contención verbal, tranquilizar en box silencioso, entrenar respiración pausada y administrar Clonazepam 0.5 a 1 mg sublingual u oral si no cede"
          },
          {
            "id": "C",
            "text": "Indicar intubación orotraqueal por riesgo inminente de paro respiratorio"
          },
          {
            "id": "D",
            "text": "Administrar Morfina 10 mg subcutánea para calmar la sensación de opresión"
          },
          {
            "id": "E",
            "text": "Hacer respirar al paciente en una bolsa plástica herméticamente cerrada durante 15 minutos ininterrumpidos"
          }
        ],
        "correcta": "B",
        "explicacion": "El manejo de la crisis de angustia aguda en el servicio de urgencias se basa en medidas no farmacológicas iniciales: ubicar al paciente en un entorno tranquilo, brindar contención verbal asegurando que no se encuentra en peligro vital y reeducar el patrón respiratorio para frenar la hiperventilación diafragmática. Si la ansiedad persiste elevada, se indica una benzodiacepina de acción rápida y absorción sublingual u oral como Clonazepam 0.5-1 mg o Lorazepam 1 mg. La adenosina (A) es para taquicardias paroxísticas supraventriculares, no para taquicardia sinusal por pánico. La morfina (D) está contraindicada. Respirar en bolsa plástica cerrada (E) está obsoleto y proscrito porque puede causar hipoxia severa y arritmias. Perla de examen: La contención verbal empática y las benzodiacepinas orales/sublinguales constituyen el pilar de rescate en la crisis de pánico aguda.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.03.1.003"
      },
      {
        "stem": "Un paciente de 36 años con diagnóstico reciente de trastorno de pánico inicia tratamiento con Fluoxetina 20 mg/día. Al cuarto día acude muy alarmado al consultorio señalando que siente \"más temblor, más palpitaciones y más angustia que antes de empezar las pastillas\", pensando que el fármaco le hizo daño. ¿Cuál es la explicación neurobiológica y la conducta médica adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Es una reacción alérgica grave; suspender inmediatamente todo antidepresivo"
          },
          {
            "id": "B",
            "text": "Es una hiperactivación serotoninérgica 5-HT inicial transitoria; educar al paciente, reducir temporalmente la dosis a la mitad (10 mg) y considerar un ansiolítico puente"
          },
          {
            "id": "C",
            "text": "El paciente desarrolló un infarto agudo al miocardio; trasladar de inmediato a hemodinamia"
          },
          {
            "id": "D",
            "text": "El paciente finge los síntomas para obtener licencia; dar el alta sin indicaciones"
          },
          {
            "id": "E",
            "text": "Duplicar la dosis de Fluoxetina a 40 mg para vencer la resistencia"
          }
        ],
        "correcta": "B",
        "explicacion": "Al iniciar un ISRS en pacientes con trastorno de pánico, el incremento agudo de serotonina en la corteza y amígdala estimula de forma precoz receptores postsinápticos 5-HT2A y 5-HT2C antes de que ocurra la desensibilización de autorreceptores, lo que desencadena un aumento paradójico transitorio de ansiedad, temblor y taquicardia en los primeros 5 a 10 días. La conducta correcta es anticipar este fenómeno, educar al paciente para que no abandone la terapia, disminuir la dosis a la mitad temporalmente (10 mg de fluoxetina o 25 mg de sertralina) y usar una benzodiacepina a dosis baja como puente sintomático durante las primeras semanas. Duplicar la dosis (E) exacerbaría el cuadro. Perla de examen: En trastorno de pánico, los ISRS deben iniciarse siempre a mitad de dosis para evitar el síndrome de aumento paradójico de ansiedad.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.03.1.003"
      },
      {
        "stem": "Una mujer de 40 años que sufrió múltiples ataques de pánico hace 6 meses ha dejado de utilizar el transporte público, no acude a centros comerciales ni supermercados, y únicamente sale a la puerta de su casa si va acompañada por su esposo, refiriendo pánico a \"quedarse atrapada y no poder escapar si le viene una crisis\". ¿Cuál es el diagnóstico complementario y el tratamiento psicoterapéutico más eficaz?",
        "options": [
          {
            "id": "A",
            "text": "Trastorno delirante persecutorio; psicoterapia psicoanalítica"
          },
          {
            "id": "B",
            "text": "Agorafobia; Terapia Cognitivo-Conductual con técnicas de exposición interoceptiva y en vivo"
          },
          {
            "id": "C",
            "text": "Trastorno de personalidad obsesiva; hipnoterapia regresiva"
          },
          {
            "id": "D",
            "text": "Fobia social pura; relajación muscular progresiva exclusiva"
          },
          {
            "id": "E",
            "text": "Trastorno conversivo; hospitalización psiquiátrica prolongada"
          }
        ],
        "correcta": "B",
        "explicacion": "La paciente presenta Agorafobia, definida por el miedo intenso y evitación de situaciones donde escapar pueda ser difícil o la ayuda inaccesible en caso de desarrollar síntomas tipo pánico (transporte, multitudes, salir sola de casa). La psicoterapia con mayor nivel de evidencia científica (Nivel IA) para la agorafobia es la Terapia Cognitivo-Conductual (TCC), específicamente mediante desensibilización sistemática con técnicas de exposición en vivo gradual a las situaciones temidas y exposición interoceptiva a las sensaciones corporales. El distractor A confunde la evitación fóbica con delirios. El distractor D confunde agorafobia con fobia social (en la fobia social el miedo es al escrutinio y juicio negativo de los demás, no a quedar atrapado o morir). Perla de examen: La TCC con técnicas de exposición en vivo e interoceptiva es la psicoterapia de elección en agorafobia.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.03.1.003"
      }
    ],
    "vignetteText": "Mujer de 33 años, secretaria ejecutiva, consulta en el servicio de urgencias a las 02:00 AM traída por su esposo. Refiere que hace 30 minutos, mientras miraba televisión en su cama, sintió súbitamente palpitaciones intensas en el pecho, opresión retroesternal, sensación de asfixia y hormigueo en ambas manos, acompañados de una certeza aterradora de que \"estaba sufriendo un infarto y moriría\". En el box de urgencias luce sudorosa, pálida y angustiada. Al examen físico: PA 135/85 mmHg, FC 115 lpm regular, SatO2 99% ambiental, examen cardiopulmonar rigurosamente normal. El ECG de 12 derivaciones muestra taquicardia sinusal a 112 lpm sin alteraciones del segmento ST ni de la onda T. Las troponinas ultrasensibles son negativas. Refiere haber presentado episodios idénticos hace 2 y 4 semanas, y desde entonces no viaja en metro ni sale de su casa sin compañía por miedo a sufrir otra crisis."
  },
  {
    "id": "psiq-07",
    "classId": "psiq-07",
    "tier": 2,
    "blockNum": 2,
    "blockName": "Trastornos de Ansiedad, TOC & Trauma",
    "topicLabel": "17.7",
    "title": "Trastorno de Ansiedad Generalizada (TAG) y Fobia Social",
    "perfilCode": "1.09.1.006",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "Norma de Salud Mental MINSAL · Manejo integral ambulatorio en Atención Primaria de Salud.",
    "reconstrucciones": "Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026",
    "frecuencia": "Alta · Motivo habitual de consulta por síntomas somáticos crónicos (cefalea, bruxismo, colon irritable)",
    "svg": null,
    "algoTitle": "Algoritmo Diferencial: TAG vs Ansiedad Social vs Timidez Normal",
    "diagram": {
      "title": "Algoritmo Diferencial y Terapéutico en Trastornos de Ansiedad Crónicos",
      "svg": "<svg viewBox=\"0 0 620 339\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#7e22ce\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#7e22ce;font-weight:700}\n    .acc{fill:#7e22ce;stroke:#6b21a8}.accT{fill:#fff}.accS{font-size:8px;fill:#f3e8ff}\n    .dec{fill:#faf5ff;stroke:#d8b4fe;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#7e22ce;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Paciente con Síntomas Ansiosos Crónicos y Disfunción Cotidiana</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Identificar si la ansiedad es difusa multitemática o focalizada en interacción social</text>\n  <path class=\"ln\" d=\"M310,47 V69\"/>\n  <rect class=\"dec\" x=\"70\" y=\"69\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Foco Principal de la Preocupación y Temporalidad</text>\n  <text class=\"sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">TAG vs Fobia Social (Trastorno de Ansiedad Social)</text>\n  <path class=\"ln\" d=\"M310,108 V138 H158 V148\"/>\n  <path class=\"ln\" d=\"M310,138 H462 V148\"/>\n  <text class=\"lbl\" x=\"158\" y=\"133\" text-anchor=\"middle\">Preocupación excesiva por múltiples temas (≥ 6 meses)</text>\n  <text class=\"lbl\" x=\"462\" y=\"133\" text-anchor=\"middle\">Miedo al escrutinio social y vergüenza en público</text>\n  <rect class=\"warn\" x=\"12\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"158\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Trastorno de Ansiedad Generalizada (TAG)</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"175\" text-anchor=\"middle\">Tensión muscular, inquietud, insomnio de conciliación</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"186\" text-anchor=\"middle\">ISRS/IRSN + TCC</text>\n  <rect class=\"dec\" x=\"316\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"462\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Fobia Social (Ansiedad Social)</text>\n  <text class=\"sub\" x=\"462\" y=\"175\" text-anchor=\"middle\">Generalizada (ISRS) vs Circunscrita a</text>\n  <text class=\"sub\" x=\"462\" y=\"186\" text-anchor=\"middle\">hablar en público (Propranolol de rescate)</text>\n  <path class=\"ln\" d=\"M158,198 V208 H310 V220\"/>\n  <path class=\"ln\" d=\"M462,198 V208 H310 V220\"/>\n  <rect class=\"warn\" x=\"100\" y=\"220\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">Regla de Oro Farmacológica en Ansiedad Crónica</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"247\" text-anchor=\"middle\">PROHIBIDO el uso prolongado de benzodiacepinas</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"258\" text-anchor=\"middle\">ISRS (Escitalopram/Sertralina) o Venlafaxina</text>\n  <path class=\"ln\" d=\"M310,270 V292\"/>\n  <rect class=\"acc\" x=\"100\" y=\"292\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"307\" text-anchor=\"middle\" font-weight=\"700\">Psicoterapia Cognitivo-Conductual</text>\n  <text class=\"accS\" x=\"310\" y=\"319\" text-anchor=\"middle\">Reestructuración cognitiva y entrenamiento en habilidades sociales y relajación</text>\n</svg>"
    },
    "contexto": "La ansiedad patológica crónica se manifiesta predominantemente bajo dos formas clínicas muy prevalentes: el Trastorno de Ansiedad Generalizada (TAG), en el cual el paciente vive en un estado de \"alerta permanente\" con preocupación flotante y desmedida por múltiples aspectos de la vida diaria (salud, finanzas, familia, trabajo) durante al menos 6 meses, acompañado de tensión muscular marcada; y el Trastorno de Ansiedad Social (Fobia Social), donde el núcleo patológico es el temor pánico a ser juzgado, humillado o evaluado negativamente por otros. Ambas entidades se benefician de ISRS y TCC, advirtiendo en el examen que las benzodiacepinas NUNCA deben prescribirse como mantenimiento crónico por su riesgo adictivo y deterioro cognitivo.",
    "contentSections": [
      {
        "subhead": "1. Trastorno de Ansiedad Generalizada (TAG): Criterios DSM-5",
        "paragraphs": [
          "El TAG se caracteriza por <strong>ansiedad y preocupación excesivas (anticipación aprensiva)</strong> sobre una amplia gama de acontecimientos o actividades, presente la mayor parte de los días durante <strong>al menos seis (6) meses</strong>:",
          "• Al paciente le resulta sumamente difícil controlar la preocupación (\"no puedo parar de pensar en lo peor\").",
          "• Se asocia a al menos <strong>tres (3) de los siguientes seis síntomas</strong> (solo uno en niños): 1) Inquietud o sensación de estar atrapado o con los nervios de punta; 2) Facilidad para fatigarse; 3) Dificultad para concentrarse o quedarse con la mente en blanco; 4) Irritabilidad; 5) <strong>Tensión muscular</strong> (frecuente motivo de consulta por contracturas cervicales, bruxismo o cefalea tensional); y 6) <strong>Trastornos del sueño</strong> (típicamente insomnio de conciliación o sueño inquieto no reparador).",
          "• A diferencia del trastorno de pánico, en el TAG no hay picos paroxísticos bruscos con sensación inminente de muerte, sino un \"ruido de fondo\" continuo de preocupación."
        ]
      },
      {
        "subhead": "2. Fobia Social (Trastorno de Ansiedad Social)",
        "paragraphs": [
          "La <strong>Fobia Social</strong> se define por un miedo o ansiedad intensos en una o más <strong>situaciones sociales en las que el individuo está expuesto al posible examen por parte de otras personas</strong> (interacciones sociales, ser observado comiendo o bebiendo, o actuar delante de otras personas):",
          "• El individuo teme actuar de cierta manera o mostrar síntomas de ansiedad (rubor facial, temblor de voz o manos, sudoración) que sean <strong>evaluados negativamente</strong> (que resulten humillantes o vergonzosos).",
          "• Las situaciones sociales casi siempre provocan miedo o se evitan activamente o se resisten con gran sufrimiento.",
          "• <strong>Subtipo Circunscrito (\"de actuación\"):</strong> El miedo se limita exclusivamente a hablar o actuar en público (músicos, conferencistas, estudiantes ante disertaciones), mientras que en situaciones sociales informales la persona es plenamente competente.",
          "• <strong>Diagnóstico diferencial:</strong> La timidez normal no produce deterioro laboral ni evitación incapacitante. En el trastorno de personalidad esquizoide, el paciente no tiene interés en socializar; en la fobia social, <em>sí desea relacionarse</em> pero el miedo al escrutinio lo paraliza."
        ]
      },
      {
        "subhead": "3. Tratamiento Farmacológico y Psicoterapéutico",
        "paragraphs": [
          "• <strong>Primera Línea en TAG y Fobia Social Generalizada:</strong> <strong>ISRS</strong> (Escitalopram 10-20 mg/día, Sertralina 50-150 mg/día, Paroxetina) o <strong>IRSN</strong> (Venlafaxina 75-150 mg/día). Presentan excelente eficacia ansiolítica a largo plazo sin riesgo de abuso.",
          "• <strong>Fobia Social de Actuación / Desempeño Circunscrito:</strong> El tratamiento farmacológico de rescate de elección es un <strong>betabloqueador: Propranolol en dosis de 10 a 40 mg vía oral administrado 30 a 60 minutos antes del evento</strong>. Bloquea los síntomas periféricos simpáticos (taquicardia, temblor distal, rubor, sudoración) permitiendo el desempeño.",
          "• <strong>Regla EUNACOM sobre Benzodiacepinas:</strong> Están estrictamente desaconsejadas como tratamiento crónico. En el TAG, su uso continuado > 4-8 semanas genera tolerancia, dependencia física y deterioro de memoria, sin tratar la etiología de la preocupación.",
          "• <strong>Pregabalina:</strong> Fármaco modulador gabaérgico de segunda línea útil en TAG en casos de intolerancia o falta de respuesta a ISRS."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial: TAG vs Fobia Social vs Trastorno de Pánico",
      "headers": [
        "Criterio Clínico",
        "Trastorno Ansiedad Generalizada (TAG)",
        "Fobia Social (Ansiedad Social)",
        "Trastorno de Pánico"
      ],
      "rows": [
        [
          "Foco de la ansiedad",
          "Preocupación difusa por múltiples temas cotidianos",
          "Miedo al escrutinio, vergüenza y evaluación ajena",
          "Miedo paroxístico a morir o volverse loco"
        ],
        [
          "Curso temporal",
          "Continuo y flotante (mínimo 6 meses)",
          "Gatillado por exposición a situaciones sociales",
          "Paroxístico en crisis (< 10 min de pico)"
        ],
        [
          "Síntomas cardinales",
          "Tensión muscular, bruxismo, fatiga, insomnio",
          "Rubor facial, temblor de voz, sudoración, tartamudeo",
          "Palpitaciones masivas, opresión precordial, asfixia"
        ],
        [
          "Tratamiento de elección",
          "ISRS (Escitalopram/Sertralina) + TCC",
          "ISRS (generalizada) o Propranolol (actuación)",
          "ISRS + TCC (BZD solo rescate agudo)"
        ],
        [
          "Error farmacológico",
          "Prescribir Clonazepam o Diazepam crónico indefinido",
          "No indicar Propranolol previo en pánico escénico",
          "Asumir infarto y no iniciar ISRS tras descarte"
        ]
      ]
    },
    "vignette": {
      "title": "Caso Clínico Tipo EUNACOM",
      "text": "Hombre de 28 años, egresado de derecho, consulta por ansiedad intensa y contracturas musculares. Relata que desde hace más de 1 año vive preocupado en exceso por el futuro: teme no aprobar su examen de grado, que sus padres enfermen gravemente, que su automóvil sufra un desperfecto o que sus ahorros sean insuficientes, reconociendo que sus preocupaciones son exageradas pero incapaz de controlarlas. Presenta cefalea holocraneana tensional frecuente, bruxismo nocturno, fatiga matinal y marcada dificultad para conciliar el sueño por rumiaciones continuas. No presenta ataques de pánico ni miedo específico a relacionarse con pares.",
      "conducta": "El paciente cumple con todos los criterios diagnósticos DSM-5 para Trastorno de Ansiedad Generalizada (TAG): preocupación excesiva e incontrolable sobre múltiples ámbitos de la vida presente durante más de 1 año (> 6 meses mínimos), acompañada de tensión muscular, fatiga, cefalea e insomnio de conciliación. El tratamiento de primera línea normado en guías clínicas es: 1) Iniciar un ISRS como Escitalopram 10 mg/día o Sertralina 50 mg/día; 2) Indicar Terapia Cognitivo-Conductual para el entrenamiento en reestructuración cognitiva y desactivación fisiológica (relajación muscular progresiva de Jacobson); y 3) Higiene del sueño. Está contraindicado prescribir benzodiacepinas de forma crónica en monoterapia."
    },
    "explicacion": "El paciente cumple con todos los criterios diagnósticos DSM-5 para Trastorno de Ansiedad Generalizada (TAG): preocupación excesiva e incontrolable sobre múltiples ámbitos de la vida presente durante más de 1 año (> 6 meses mínimos), acompañada de tensión muscular, fatiga, cefalea e insomnio de conciliación. El tratamiento de primera línea normado en guías clínicas es: 1) Iniciar un ISRS como Escitalopram 10 mg/día o Sertralina 50 mg/día; 2) Indicar Terapia Cognitivo-Conductual para el entrenamiento en reestructuración cognitiva y desactivación fisiológica (relajación muscular progresiva de Jacobson); y 3) Higiene del sueño. Está contraindicado prescribir benzodiacepinas de forma crónica en monoterapia.",
    "keyPoints": [
      "El Trastorno de Ansiedad Generalizada (TAG) exige preocupación excesiva e incontrolable por múltiples temas presente por ≥ 6 meses.",
      "La tensión muscular marcada (bruxismo, contracturas cervicales) es el síntoma somático distintivo del TAG.",
      "Los ISRS (Escitalopram, Sertralina) y los IRSN (Venlafaxina) son los fármacos de primera elección para el TAG.",
      "La Fobia Social se define por el miedo irracional a la evaluación negativa, el escrutinio o la vergüenza en público.",
      "En la fobia social circunscrita a hablar en público (pánico escénico), el fármaco de rescate es Propranolol 10 a 40 mg VO 1 hora antes.",
      "Trampa del examen: Las benzodiacepinas no curan el TAG y están formalmente contraindicadas como terapia de mantenimiento crónico debido a su alto potencial de dependencia, caídas y deterioro cognitivo."
    ],
    "questions": [
      {
        "stem": "Una abogada de 34 años consulta por tensión muscular cervical continua, bruxismo, irritabilidad y preocupación excesiva por su desempeño laboral, sus finanzas y la salud de sus hijos, presente durante los últimos 8 meses. Refiere que le resulta imposible desconectarse de sus pensamientos y tarda más de 2 horas en conciliar el sueño. Su examen físico no muestra alteraciones neurológicas. ¿Cuál es el diagnóstico clínico y el tratamiento de primera línea?",
        "options": [
          {
            "id": "A",
            "text": "Crisis de pánico; Clonazepam 2 mg sublingual cada vez que sienta angustia"
          },
          {
            "id": "B",
            "text": "Trastorno de Ansiedad Generalizada; iniciar Escitalopram o Sertralina asociado a Terapia Cognitivo-Conductual"
          },
          {
            "id": "C",
            "text": "Trastorno de personalidad obsesiva; psicoterapia psicoanalítica exclusiva"
          },
          {
            "id": "D",
            "text": "Depresión psicótica; iniciar Haloperidol 5 mg al día"
          },
          {
            "id": "E",
            "text": "Fobia social; prescribir Propranolol diario matinal"
          }
        ],
        "correcta": "B",
        "explicacion": "El cuadro cumple con los criterios diagnósticos DSM-5 para Trastorno de Ansiedad Generalizada (TAG): preocupación excesiva e incontrolable sobre múltiples ámbitos de la vida diaria presente durante más de 6 meses (8 meses en el caso), asociada a tensión muscular, irritabilidad e insomnio. El tratamiento de elección y primera línea avalado por la evidencia son los ISRS (Escitalopram 10-20 mg/día o Sertralina 50-100 mg/día) o IRSN (Venlafaxina) combinados con Terapia Cognitivo-Conductual (TCC). Las benzodiacepinas a demanda (A) no tratan la patología de base y conllevan riesgo adictivo. No hay síntomas psicóticos (D). El Propranolol (E) no es el tratamiento de mantenimiento del TAG. Perla de examen: El criterio temporal del TAG es de al menos 6 meses y su tratamiento de 1.ª línea son los ISRS.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.09.1.006"
      },
      {
        "stem": "Un estudiante universitario de 22 años consulta porque debe presentar su tesis de titulación frente a una comisión académica en dos semanas. Refiere que en su vida social habitual comparte normalmente con amigos y familia, pero cada vez que debe hablar frente a un público numeroso experimenta taquicardia violenta, temblor incontrolable en las manos, sudoración fría y rubor facial intenso que le impiden exponer. Niega síntomas ansiosos en su vida diaria. ¿Cuál es el diagnóstico y la conducta farmacológica más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Trastorno de pánico; iniciar Sertralina 100 mg al día por 1 año"
          },
          {
            "id": "B",
            "text": "Fobia social circunscrita a la actuación en público; indicar Propranolol 10 a 40 mg vía oral 30 a 60 minutos antes de la disertación"
          },
          {
            "id": "C",
            "text": "Trastorno de ansiedad generalizada; indicar Clonazepam 2 mg diario"
          },
          {
            "id": "D",
            "text": "Trastorno adaptativo; indicar reposo médico y suspensión de la titulación"
          },
          {
            "id": "E",
            "text": "Agorafobia grave; iniciar Terapia Electroconvulsiva"
          }
        ],
        "correcta": "B",
        "explicacion": "El cuadro corresponde a un Trastorno de Ansiedad Social (Fobia Social) en su subtipo circunscrito o de actuación en público (pánico escénico). Al no existir un trastorno de ansiedad generalizado en la vida diaria, no está indicado el uso de antidepresivos continuos a largo plazo. La indicación farmacológica de elección y alta rentabilidad para este escenario en el EUNACOM es un betabloqueador no cardioselectivo: Propranolol 10 a 40 mg vía oral tomado 30 a 60 minutos antes de la exposición. El fármaco bloquea los receptores adrenérgicos periféricos suprimiendo el temblor, la taquicardia y el rubor sin alterar la claridad cognitiva. Perla de examen: En fobia social de actuación circunscrita a hablar en público, el Propranolol administrado 1 hora antes es el tratamiento de rescate de elección.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.09.1.006"
      }
    ],
    "vignetteText": "Hombre de 28 años, egresado de derecho, consulta por ansiedad intensa y contracturas musculares. Relata que desde hace más de 1 año vive preocupado en exceso por el futuro: teme no aprobar su examen de grado, que sus padres enfermen gravemente, que su automóvil sufra un desperfecto o que sus ahorros sean insuficientes, reconociendo que sus preocupaciones son exageradas pero incapaz de controlarlas. Presenta cefalea holocraneana tensional frecuente, bruxismo nocturno, fatiga matinal y marcada dificultad para conciliar el sueño por rumiaciones continuas. No presenta ataques de pánico ni miedo específico a relacionarse con pares."
  },
  {
    "id": "psiq-08",
    "classId": "psiq-08",
    "tier": 2,
    "blockNum": 2,
    "blockName": "Trastornos de Ansiedad, TOC & Trauma",
    "topicLabel": "17.8",
    "title": "Trastorno Obsesivo-Compulsivo (TOC): Obsesiones, Compulsiones e ISRS",
    "perfilCode": "1.13.1.004",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Norma Técnica de Psiquiatría del Adulto MINSAL · Derivación a Nivel Secundario (COSAM / Psiquiatría ambulatoria) en casos moderados a severos.",
    "reconstrucciones": "Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026",
    "frecuencia": "Media · Diagnóstico diferencial con Trastorno de la Personalidad Obsesivo-Compulsiva (TPOC)",
    "svg": null,
    "algoTitle": "Algoritmo de Abordaje Terapéutico en TOC: TCC con EPR y Titulación de Fármacos",
    "diagram": {
      "title": "Algoritmo Diagnóstico y Terapéutico del Trastorno Obsesivo-Compulsivo",
      "svg": "<svg viewBox=\"0 0 620 400\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#7e22ce\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#7e22ce;font-weight:700}\n    .acc{fill:#7e22ce;stroke:#6b21a8}.accT{fill:#fff}.accS{font-size:8px;fill:#f3e8ff}\n    .dec{fill:#faf5ff;stroke:#d8b4fe;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#7e22ce;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Pesquisa de Pensamientos Intrusivos y Conductas Repetitivas</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Consumen &gt; 1 hora al día o causan malestar clínico significativo y disfunción</text>\n  <path class=\"ln\" d=\"M310,47 V69\"/>\n  <rect class=\"dec\" x=\"70\" y=\"69\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">¿Cuál es la Naturaleza de los Pensamientos y Actos?</text>\n  <text class=\"sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">Diferenciación entre TOC (Egodistónico) vs TPOC (Egosintónico)</text>\n  <path class=\"ln\" d=\"M310,108 V138 H158 V148\"/>\n  <path class=\"ln\" d=\"M310,138 H462 V148\"/>\n  <text class=\"lbl\" x=\"158\" y=\"133\" text-anchor=\"middle\">TOC (Egodistónico: lucha contra la idea, causan angustia)</text>\n  <text class=\"lbl\" x=\"462\" y=\"133\" text-anchor=\"middle\">TPOC (Egosintónico: perfeccionismo rígido sin obsesiones)</text>\n  <rect class=\"warn\" x=\"12\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"158\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Trastorno Obsesivo-Compulsivo</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"175\" text-anchor=\"middle\">Obsesiones (ideas) + Compulsiones</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"186\" text-anchor=\"middle\">(actos que bajan la ansiedad)</text>\n  <rect class=\"dec\" x=\"316\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"462\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Trastorno de Personalidad Anancástico</text>\n  <text class=\"sub\" x=\"462\" y=\"175\" text-anchor=\"middle\">Patrón de vida perfeccionista</text>\n  <text class=\"sub\" x=\"462\" y=\"186\" text-anchor=\"middle\">No presenta obsesiones ni rituales</text>\n  <path class=\"ln\" d=\"M158,198 V208 H310 V220\"/>\n  <path class=\"ln\" d=\"M462,198 V208 H310 V220\"/>\n  <rect class=\"acc\" x=\"100\" y=\"220\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">Tratamiento Psicoterapéutico de Elección</text>\n  <text class=\"accS\" x=\"310\" y=\"247\" text-anchor=\"middle\">Terapia Cognitivo-Conductual con Exposición y Prevención de Respuesta (EPR)</text>\n  <path class=\"ln\" d=\"M310,259 V281\"/>\n  <rect class=\"acc\" x=\"100\" y=\"281\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"296\" text-anchor=\"middle\" font-weight=\"700\">Farmacoterapia de Primera Línea en Dosis Altas</text>\n  <text class=\"accS\" x=\"310\" y=\"308\" text-anchor=\"middle\">ISRS a dosis máximas (Sertralina 200 mg / Fluoxetina 60-80 mg) · Latencia 8 a 12 semanas</text>\n  <path class=\"ln\" d=\"M310,320 V342\"/>\n  <rect class=\"warn\" x=\"100\" y=\"342\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"357\" text-anchor=\"middle\" font-weight=\"700\">Segunda Línea en Refractariedad</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"369\" text-anchor=\"middle\">Clomipramina (Tricíclico serotoninérgico potente)</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"380\" text-anchor=\"middle\">o Potenciación con Antipsicóticos atípicos</text>\n</svg>"
    },
    "contexto": "El Trastorno Obsesivo-Compulsivo (TOC) es una patología neuropsiquiátrica crónica y frecuentemente incapacitante mediada por la disfunción de los circuitos cortico-estriado-tálamo-corticales (CETC). Se caracteriza por la presencia de obsesiones (pensamientos, impulsos o imágenes intrusivas, recurrentes e indeseadas que generan intensa angustia) y compulsiones (conductas repetitivas o actos mentales que el sujeto se siente impulsado a realizar para neutralizar la obsesión y reducir la ansiedad). En el EUNACOM se evalúan dos perlas críticas: 1) Diferenciar el TOC (egodistónico, el paciente reconoce lo absurdo de la idea y lucha contra ella) del Trastorno de Personalidad Obsesivo-Compulsivo (egosintónico, perfeccionismo que el paciente considera adecuado); y 2) El tratamiento farmacológico del TOC requiere dosis de ISRS significativamente más altas que la depresión y latencias de respuesta más largas (8 a 12 semanas).",
    "contentSections": [
      {
        "subhead": "1. Definición y Criterios Diagnósticos DSM-5 del TOC",
        "paragraphs": [
          "El DSM-5 ubica al TOC en una categoría independiente (\"Trastornos Obsesivo-Compulsivos y Relacionados\"), desligándolo de los trastornos de ansiedad:",
          "• <strong>Obsesiones:</strong> Pensamientos, impulsos o imágenes recurrentes y persistentes que se experimentan como <strong>intrusivos y no deseados (egodistónicos)</strong>, y que en la mayoría de los individuos causan marcada ansiedad o malestar. El paciente intenta ignorar, suprimir o neutralizar dichos pensamientos mediante otro pensamiento o acto (compulsión). Temas frecuentes: contaminación/gérmenes, dudas repetitivas (daño, cerraduras, gas), simetría/orden y pensamientos agresivos o tabú.",
          "• <strong>Compulsiones:</strong> Comportamientos repetitivos (lavarse las manos, ordenar, comprobar) o actos mentales (rezar, contar, repetir palabras en silencio) que el individuo realiza en respuesta a una obsesión o con arreglo a reglas rígidas. Su objetivo es <strong>prevenir o reducir la angustia</strong> o evitar un acontecimiento temido, pero no están conectados de forma realista con lo que pretenden neutralizar o son claramente excesivos.",
          "• <strong>Criterio de disfunción:</strong> Las obsesiones o compulsiones <strong>consumen más de una (1) hora al día</strong> o causan malestar clínicamente significativo o deterioro funcional."
        ]
      },
      {
        "subhead": "2. Diagnóstico Diferencial Crucial: TOC vs Trastorno de la Personalidad Obsesivo-Compulsivo (TPOC)",
        "paragraphs": [
          "Esta es una de las preguntas de mayor discriminación en el examen:",
          "• <strong>TOC:</strong> Es <strong>egodistónico</strong>. El paciente sufre intensamente por los pensamientos intrusivos, reconoce que son absurdos o desproporcionados (insight conservado) y realiza rituales agotadores que desea detener.",
          "• <strong>Trastorno de la Personalidad Obsesivo-Compulsiva (TPOC / Anancástico):</strong> Es <strong>egosintónico</strong>. Es un patrón generalizado de preocupación por el orden, el perfeccionismo y el control mental e interpersonal a expensas de la flexibilidad. El individuo cree firmemente que su manera de hacer las cosas es \"la correcta y moralmente superior\", <strong>NO presenta obsesiones intrusivas ni rituales compulsivos</strong>, y no siente necesidad de cambiar su personalidad."
        ]
      },
      {
        "subhead": "3. Tratamiento Multimodal: Psicoterapia EPR y Farmacoterapia en Dosis Altas",
        "paragraphs": [
          "• <strong>Psicoterapia de Elección: Terapia Cognitivo-Conductual con Exposición con Prevención de Respuesta (EPR)</strong>. Es la técnica más eficaz: el paciente se expone gradualmente al estímulo obsesivo (ej. tocar una manilla de puerta) con la prohibición estricta de ejecutar la compulsión neutralizadora (lavarse las manos), logrando la habituación y extinción de la angustia.",
          "• <strong>Farmacoterapia de Primera Línea: ISRS a Dosis Altas</strong> (Sertralina 150-200 mg/día, Fluoxetina 60-80 mg/día, Escitalopram 20 mg/día o Paroxetina 40-60 mg/día). <em>Regla de Oro:</em> El TOC requiere dosis hasta 2 veces superiores a las usadas en depresión y la respuesta tarda entre <strong>8 y 12 semanas</strong> en evaluarse.",
          "• <strong>Segunda Línea: Clomipramina</strong> (antidepresivo tricíclico con potente inhibición de recaptación de 5-HT; muy eficaz pero con efectos adversos anticolinérgicos y cardiotoxicidad) o potenciación con antipsicóticos atípicos (Aripiprazol o Risperidona a dosis bajas)."
        ]
      }
    ],
    "table": {
      "title": "Diferenciación Conceptual: Trastorno Obsesivo-Compulsivo (TOC) vs Personalidad Obsesivo-Compulsiva (TPOC)",
      "headers": [
        "Característica",
        "Trastorno Obsesivo-Compulsivo (TOC)",
        "Trastorno Personalidad Obsesivo-Compulsivo (TPOC)"
      ],
      "rows": [
        [
          "Sintonía con el yo",
          "EGODISTÓNICO: el síntoma es ajeno y causa gran sufrimiento",
          "EGOSINTÓNICO: el sujeto considera que su conducta es correcta"
        ],
        [
          "Presencia de obsesiones",
          "SIEMPRE presentes (ideas intrusivas, indeseadas, absurdas)",
          "AUSENTES (no hay obsesiones intrusivas)"
        ],
        [
          "Presencia de rituales",
          "SIEMPRE presentes (compulsiones para calmar la angustia)",
          "AUSENTES (no hay rituales estereotipados)"
        ],
        [
          "Consumo de tiempo",
          "Severo: consume horas al día limpiando, ordenando o contando",
          "Dedicación excesiva al trabajo por perfeccionismo y minuciosidad"
        ],
        [
          "Tratamiento de elección",
          "ISRS en dosis altas + TCC con Exposición y Prevención de Respuesta",
          "Psicoterapia individual psicodinámica o cognitiva"
        ]
      ]
    },
    "vignette": {
      "title": "Caso Clínico Tipo EUNACOM",
      "text": "Joven de 21 años, estudiante de ingeniería, consulta en el CESFAM acompañado por su madre. Relata que desde hace 8 meses sufre de pensamientos continuos e involuntarios de que sus manos están contaminadas con bacterias letales. Para calmar la angustia intolerable que le genera esta idea, se lava las manos con jabón desinfectante exactamente 15 veces seguidas tras tocar cualquier objeto en su casa, invirtiendo más de 4 horas diarias en esta rutina. Al examen físico presenta dermatitis de contacto severa con fisuras y eritema en ambas manos producto de los lavados. El paciente llora durante la entrevista afirmando: \"Doctor, yo sé perfectamente que no me voy a infectar y que es una estupidez lavarme tanto, pero si no lo hago siento que me va a dar un ataque de pánico\".",
      "conducta": "El cuadro corresponde a un Trastorno Obsesivo-Compulsivo (TOC) con obsesiones de contaminación y compulsiones de lavado y limpieza, de carácter claramente egodistónico (el paciente tiene insight preservado, reconoce que la idea es irracional y sufre por la esclavitud del ritual que consume > 4 horas al día). La conducta médica correcta es: 1) Derivar a nivel secundario (COSAM / Psiquiatría) según norma técnica; 2) Indicar Terapia Cognitivo-Conductual con Exposición con Prevención de Respuesta (EPR); 3) Iniciar farmacoterapia de primera línea con un ISRS en dosis altas (ej. Sertralina iniciando en 50 mg y titulando hacia 150-200 mg/día); 4) Educar sobre la latencia de respuesta prolongada (requiere entre 8 y 12 semanas para valorar eficacia plena); y 5) Manejo dermatológico local con cremas emolientes. Está contraindicado prescribir benzodiacepinas crónicas."
    },
    "explicacion": "El cuadro corresponde a un Trastorno Obsesivo-Compulsivo (TOC) con obsesiones de contaminación y compulsiones de lavado y limpieza, de carácter claramente egodistónico (el paciente tiene insight preservado, reconoce que la idea es irracional y sufre por la esclavitud del ritual que consume > 4 horas al día). La conducta médica correcta es: 1) Derivar a nivel secundario (COSAM / Psiquiatría) según norma técnica; 2) Indicar Terapia Cognitivo-Conductual con Exposición con Prevención de Respuesta (EPR); 3) Iniciar farmacoterapia de primera línea con un ISRS en dosis altas (ej. Sertralina iniciando en 50 mg y titulando hacia 150-200 mg/día); 4) Educar sobre la latencia de respuesta prolongada (requiere entre 8 y 12 semanas para valorar eficacia plena); y 5) Manejo dermatológico local con cremas emolientes. Está contraindicado prescribir benzodiacepinas crónicas.",
    "keyPoints": [
      "El TOC se define por la presencia de obsesiones (pensamientos intrusivos egodistónicos) y compulsiones (actos para neutralizar la angustia) que consumen > 1 hora/día.",
      "Diferencia cardinal: En el TOC el síntoma es egodistónico (el paciente reconoce lo absurdo y sufre); en el TPOC es egosintónico (cree que su perfeccionismo es virtuoso).",
      "La psicoterapia de elección indiscutida para el TOC es la Terapia Cognitivo-Conductual con Exposición y Prevención de Respuesta (EPR).",
      "Farmacoterapia: Los ISRS (Sertralina, Fluoxetina) son la 1.ª línea, pero requieren dosis más elevadas que en depresión (ej. Sertralina 200 mg) y latencias de 8 a 12 semanas.",
      "Clomipramina (tricíclico) es el fármaco más eficaz de segunda línea en casos resistentes.",
      "Trampa del examen: No confundir TOC con Trastorno de la Personalidad Obsesivo-Compulsivo; el paciente con TPOC no tiene obsesiones intrusivas ni rituales de lavado."
    ],
    "questions": [
      {
        "stem": "Un hombre de 26 años consulta porque desde hace 6 meses siente la necesidad imperiosa de revisar la cerradura de la puerta de su departamento exactamente 12 veces antes de salir, por temor a que entren ladrones. Reconoce que esta conducta es ridícula y absurda, pero si intenta no realizarla experimenta una angustia intolerable. La rutina le hace llegar tarde a su trabajo a diario. ¿Cuál es el diagnóstico más probable y la psicoterapia de elección?",
        "options": [
          {
            "id": "A",
            "text": "Trastorno de la personalidad anancástico; psicoanálisis clásico"
          },
          {
            "id": "B",
            "text": "Trastorno Obsesivo-Compulsivo; Terapia Cognitivo-Conductual con Exposición y Prevención de Respuesta"
          },
          {
            "id": "C",
            "text": "Esquizofrenia paranoide incipiente; terapia ocupacional"
          },
          {
            "id": "D",
            "text": "Trastorno delirante celotípico; terapia familiar sistémica"
          },
          {
            "id": "E",
            "text": "Fobia social; desensibilización sistemática a la interacción"
          }
        ],
        "correcta": "B",
        "explicacion": "El paciente presenta un Trastorno Obsesivo-Compulsivo (TOC) con obsesiones de duda/daño y compulsiones de comprobación. El cuadro es nítidamente egodistónico (el paciente reconoce que es absurdo e intenta no hacerlo, pero la angustia lo doblega), lo que excluye el trastorno de personalidad anancástico/TPOC (A). La psicoterapia con mayor grado de recomendación y evidencia científica en TOC es la Terapia Cognitivo-Conductual con Exposición con Prevención de Respuesta (EPR), en la cual se expone al paciente al estímulo que gatilla la obsesión impidiendo la ejecución del ritual de comprobación. No hay psicosis (C y D). Perla de examen: En el TOC la clínica es egodistónica y la psicoterapia obligada es la Exposición con Prevención de Respuesta.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.13.1.004"
      },
      {
        "stem": "Un paciente de 29 años con diagnóstico de TOC inició tratamiento con Fluoxetina 20 mg/día hace 4 semanas por indicación de médico general. En el control refiere no haber notado ninguna mejoría en sus rituales de orden y simetría, tolerando bien el medicamento. Pregunta si debe abandonar el tratamiento por ineficaz. ¿Cuál es la conducta médica correcta?",
        "options": [
          {
            "id": "A",
            "text": "Suspender la Fluoxetina y catalogar al paciente como refractario absoluto"
          },
          {
            "id": "B",
            "text": "Explicar que en el TOC se requieren dosis de ISRS más altas (titular Fluoxetina hasta 60 a 80 mg al día) y tiempos de espera de 8 a 12 semanas para evaluar la respuesta"
          },
          {
            "id": "C",
            "text": "Cambiar de inmediato a Clonazepam 2 mg cada 8 horas"
          },
          {
            "id": "D",
            "text": "Indicar internación inmediata en un hospital psiquiátrico cerrado"
          },
          {
            "id": "E",
            "text": "Asociar Haloperidol 10 mg al día en monoterapia"
          }
        ],
        "correcta": "B",
        "explicacion": "Una de las particularidades farmacológicas fundamentales del TOC en el EUNACOM es que la respuesta terapéutica exige dosis significativamente mayores de ISRS que las empleadas en la depresión mayor (ej. Fluoxetina 60-80 mg/día, Sertralina 200 mg/día) y un período de latencia sustancialmente más prolongado (8 a 12 semanas para alcanzar la meseta terapéutica). Evaluar la respuesta a las 4 semanas con dosis baja (20 mg de fluoxetina) es un error metodológico. La conducta correcta es educar al paciente, titular progresivamente la dosis hacia el rango máximo tolerado y esperar el tiempo normado antes de rotar de fármaco. Perla de examen: En el TOC los ISRS requieren dosis altas y un período de evaluación mínimo de 8 a 12 semanas.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.13.1.004"
      }
    ],
    "vignetteText": "Joven de 21 años, estudiante de ingeniería, consulta en el CESFAM acompañado por su madre. Relata que desde hace 8 meses sufre de pensamientos continuos e involuntarios de que sus manos están contaminadas con bacterias letales. Para calmar la angustia intolerable que le genera esta idea, se lava las manos con jabón desinfectante exactamente 15 veces seguidas tras tocar cualquier objeto en su casa, invirtiendo más de 4 horas diarias en esta rutina. Al examen físico presenta dermatitis de contacto severa con fisuras y eritema en ambas manos producto de los lavados. El paciente llora durante la entrevista afirmando: \"Doctor, yo sé perfectamente que no me voy a infectar y que es una estupidez lavarme tanto, pero si no lo hago siento que me va a dar un ataque de pánico\"."
  },
  {
    "id": "psiq-09",
    "classId": "psiq-09",
    "tier": 2,
    "blockNum": 2,
    "blockName": "Trastornos de Ansiedad, TOC & Trauma",
    "topicLabel": "17.9",
    "title": "Trastorno de Estrés Postraumático (TEPT) y Estrés Agudo",
    "perfilCode": "1.13.1.004",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "Ley N° 21.057 y Programas de Apoyo a Víctimas de Delitos Violentos (CAVD) · Derivación a salud mental y psicoterapia especializada.",
    "reconstrucciones": "Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026",
    "frecuencia": "Alta · Pregunta habitual sobre criterio de corte temporal (1 mes) y proscripción de BZD",
    "svg": null,
    "algoTitle": "Algoritmo Temporal y Terapéutico: Trastorno de Estrés Agudo (< 1 mes) vs TEPT (> 1 mes)",
    "diagram": {
      "title": "Algoritmo Diagnóstico y Terapéutico: Trauma Agudo vs TEPT",
      "svg": "<svg viewBox=\"0 0 620 400\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#7e22ce\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#7e22ce;font-weight:700}\n    .acc{fill:#7e22ce;stroke:#6b21a8}.accT{fill:#fff}.accS{font-size:8px;fill:#f3e8ff}\n    .dec{fill:#faf5ff;stroke:#d8b4fe;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#7e22ce;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Exposición a Evento Traumático con Amenaza a la Vida o Integridad</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Accidentes graves, asalto armado, agresión sexual, desastres naturales o tortura</text>\n  <path class=\"ln\" d=\"M310,47 V69\"/>\n  <rect class=\"dec\" x=\"70\" y=\"69\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Tiempo Transcurrido desde la Ocurrencia del Trauma</text>\n  <text class=\"sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">La frontera temporal diagnóstica crítica en el examen es 1 mes (30 días)</text>\n  <path class=\"ln\" d=\"M310,108 V138 H158 V148\"/>\n  <path class=\"ln\" d=\"M310,138 H462 V148\"/>\n  <text class=\"lbl\" x=\"158\" y=\"133\" text-anchor=\"middle\">Síntomas duran entre 3 días y 1 mes</text>\n  <text class=\"lbl\" x=\"462\" y=\"133\" text-anchor=\"middle\">Síntomas persisten más allá de 1 mes</text>\n  <rect class=\"dec\" x=\"12\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"158\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Trastorno de Estrés Agudo</text>\n  <text class=\"sub\" x=\"158\" y=\"175\" text-anchor=\"middle\">Primeros Auxilios Psicológicos</text>\n  <text class=\"sub\" x=\"158\" y=\"186\" text-anchor=\"middle\">Apoyo de red · NO usar BZD profilácticas</text>\n  <rect class=\"warn\" x=\"316\" y=\"148\" width=\"292\" height=\"39\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"462\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Trastorno de Estrés Postraumático (TEPT)</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"175\" text-anchor=\"middle\">Intrusión, Evitación, Alteración Cognitiva/Ánimo e Hiperalerta</text>\n  <path class=\"ln\" d=\"M158,198 V208 H310 V220\"/>\n  <path class=\"ln\" d=\"M462,198 V208 H310 V220\"/>\n  <rect class=\"acc\" x=\"100\" y=\"220\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">Tratamiento Farmacológico de Primera Línea en TEPT</text>\n  <text class=\"accS\" x=\"310\" y=\"247\" text-anchor=\"middle\">ISRS (Sertralina 50-150 mg / Paroxetina 20-40 mg) · Prazosina si hay pesadillas graves</text>\n  <path class=\"ln\" d=\"M310,259 V281\"/>\n  <rect class=\"acc\" x=\"100\" y=\"281\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"296\" text-anchor=\"middle\" font-weight=\"700\">Psicoterapia Focalizada en el Trauma</text>\n  <text class=\"accS\" x=\"310\" y=\"308\" text-anchor=\"middle\">TCC centrada en trauma / Terapia EMDR (Desensibilización y reprocesamiento)</text>\n  <path class=\"ln\" d=\"M310,320 V342\"/>\n  <rect class=\"warn\" x=\"100\" y=\"342\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"357\" text-anchor=\"middle\" font-weight=\"700\">Contraindicación Absoluta EUNACOM</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"369\" text-anchor=\"middle\">PROHIBIDAS las benzodiacepinas en monoterapia</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"380\" text-anchor=\"middle\">(interfieren con la extinción del miedo y cronifican)</text>\n</svg>"
    },
    "contexto": "El trauma psicológico mayor desencadena alteraciones neuroendocrinas persistentes caracterizadas por hipofunción de la corteza prefrontal medial, hiperactividad amigdalina y sensibilización noradrenérgica central. El DSM-5 clasifica las reacciones patológicas al trauma en dos entidades según el tiempo de evolución: el Trastorno de Estrés Agudo (síntomas que se presentan entre los 3 días y el primer mes post-trauma) y el Trastorno de Estrés Postraumático (TEPT, cuando los síntomas persisten por más de 1 mes). En el EUNACOM se evalúan con especial énfasis tres conceptos: el punto de corte temporal de 1 mes, la primera línea con ISRS y psicoterapia de reprocesamiento (EMDR/TCC), y la proscripción estricta de las benzodiacepinas en el trauma agudo.",
    "contentSections": [
      {
        "subhead": "1. Criterio de Exposición y Cuatro Clústeres Sintomáticos del TEPT",
        "paragraphs": [
          "El <strong>Criterio A</strong> exige exposición a la muerte, lesión grave o violencia sexual real o amenaza, ya sea por experiencia directa, presenciándolo en persona, conociendo que le ocurrió a un ser querido cercano, o por exposición repetida a detalles aversivos (personal de emergencias).",
          "El cuadro clínico del <strong>TEPT según DSM-5</strong> se organiza en <strong>cuatro (4) dominios o clústeres cardinales</strong>:",
          "• <strong>1. Síntomas de Intrusión (Reexperimentación):</strong> Recuerdos angustiosos recurrentes e involuntarios del evento, pesadillas traumáticas repetitivas, <strong>reacciones disociativas (flashbacks)</strong> en las que el sujeto siente o actúa como si el trauma se estuviera repitiendo en el presente, y malestar psicológico/reactividad fisiológica intensa ante estímulos recordatorios.",
          "• <strong>2. Evitación Persistente:</strong> Evitación activa de recuerdos, pensamientos o sentimientos vinculados al trauma, así como de recordatorios externos (lugares, personas, conversaciones, actividades).",
          "• <strong>3. Alteraciones Negativas Cognitivas y del Estado de Ánimo:</strong> Amnesia disociativa del evento traumático, creencias negativas exageradas sobre uno mismo o el mundo (\"el mundo es totalmente peligroso\", \"estoy destruido\"), culpa desproporcionada hacia uno mismo, anhedonia marcada, desapego de los demás y restricción afectiva.",
          "• <strong>4. Alteraciones de la Alerta y Reactividad (Hiperalerta):</strong> Hipervigilancia constante, respuesta de sobresalto exagerada ante ruidos menores, irritabilidad o arrebatos de furia, conductas autodestructivas, problemas de concentración e insomnio grave."
        ]
      },
      {
        "subhead": "2. Punto de Corte Temporal: Estrés Agudo vs TEPT",
        "paragraphs": [
          "• <strong>Trastorno de Estrés Agudo:</strong> La duración de los síntomas es de <strong>un mínimo de 3 días hasta un máximo de un (1) mes</strong> tras la exposición al evento traumático. Presenta síntomas similares con marcado componente disociativo inicial.",
          "• <strong>Trastorno de Estrés Postraumático (TEPT):</strong> Se diagnostica cuando la duración de los síntomas <strong>supera un (1) mes (más de 30 días)</strong> desde la ocurrencia del trauma (o inicio con expresión retardada meses o años después).",
          "• <em>Manejo en la fase aguda inmediata:</em> Primeros Auxilios Psicológicos (PAP), seguridad física, escucha no invasiva y facilitación de la red de apoyo. <strong>El \"debriefing psicológico\" individual obligatorio e inmediato está desaconsejado</strong> porque puede retraumatizar a la víctima."
        ]
      },
      {
        "subhead": "3. Tratamiento Farmacológico y Psicoterapia Específica",
        "paragraphs": [
          "• <strong>Psicoterapia de Primera Línea:</strong> Terapia Cognitivo-Conductual centrada en el trauma (TCC-CT) y <strong>Terapia de Desensibilización y Reprocesamiento por Movimientos Oculares (EMDR)</strong>. Permiten reprocesar las memorias traumáticas encapsuladas y desensibilizar la hiperactivación amigdalina.",
          "• <strong>Farmacoterapia de Primera Línea: ISRS</strong> (Sertralina 50-150 mg/día o Paroxetina 20-40 mg/día) o IRSN (Venlafaxina). Reducen la intrusión, la ansiedad y la disforia.",
          "• <strong>Tratamiento de las Pesadillas Traumáticas: Prazosina</strong> (antagonista alfa-1 adrenérgico central; dosis 1 a 5 mg al acostarse). Muy eficaz para suprimir las pesadillas y el insomnio refractario al reducir la hiperactividad noradrenérgica nocturna.",
          "• <strong>Contraindicación EUNACOM de Oro:</strong> Las <strong>benzodiacepinas están formalmente desaconsejadas</strong> en el trauma agudo y TEPT. No previenen el TEPT, potencian el condicionamiento del miedo, interfieren con la extinción psicológica del trauma en la psicoterapia y conllevan alto riesgo de dependencia en pacientes traumatizados."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial: Trastorno de Estrés Agudo vs Trastorno de Estrés Postraumático (TEPT)",
      "headers": [
        "Parámetro",
        "Trastorno de Estrés Agudo",
        "Trastorno de Estrés Postraumático (TEPT)"
      ],
      "rows": [
        [
          "Duración temporal",
          "3 días a 1 mes (máximo 30 días post-trauma)",
          "Más de 1 mes (crónico si > 3 meses; de inicio retardado si > 6 meses)"
        ],
        [
          "Clínica predominante",
          "Gran componente disociativo inicial, aturdimiento, desrealización",
          "Los 4 clústeres: Intrusión, Evitación, Cognición/ánimo negativo, Hiperalerta"
        ],
        [
          "Intervención inmediata",
          "Primeros Auxilios Psicológicos (PAP) y red familiar",
          "TCC centrada en trauma / EMDR + Farmacoterapia de 1.ª línea"
        ],
        [
          "Farmacoterapia inicial",
          "Generalmente NO requiere psicofármacos; NO dar BZD",
          "ISRS (Sertralina / Paroxetina) + Prazosina si hay pesadillas"
        ],
        [
          "Error frecuente",
          "Prescribir Clonazepam o forzar un debriefing traumático",
          "Minimizar los flashbacks como si fueran \"recuerdos normales\""
        ]
      ]
    },
    "vignette": {
      "title": "Caso Clínico Tipo EUNACOM",
      "text": "Mujer de 35 años, cajera de banco, consulta en salud mental a los 4 meses de haber sido víctima de un asalto armado en su sucursal, donde fue encañonada en la cabeza por delincuentes durante 20 minutos. Relata que desde entonces no puede dormir porque presenta pesadillas aterradoras en las que revive el cañón del arma sobre su frente, despierta gritando y sudorosa, y sufre sobresaltos violentos ante cualquier sonido metálico o frenazo de vehículo en la calle (flashbacks). Ha renunciado a su empleo, no puede ver noticias ni películas de acción, evita salir a la calle sola y se siente \"desconectada afectivamente de sus hijos, como si estuviera muerta por dentro\".",
      "conducta": "La paciente presenta un Trastorno de Estrés Postraumático (TEPT) crónico según criterios DSM-5: exposición a evento con riesgo vital evidente, duración mayor a 1 mes (4 meses de evolución) y presencia de los cuatro clústeres cardinales (intrusión con pesadillas y flashbacks, evitación de recordatorios del asalto, alteraciones cognitivas/afectivas con anestesia emocional y desapego, e hiperalerta con sobresaltos e insomnio). El manejo médico correcto de primera línea comprende: 1) Psicoterapia focalizada en trauma (TCC centrada en trauma o EMDR); 2) Farmacoterapia con un ISRS de primera línea como Sertralina 50 mg/día (titulable a 100-150 mg/día) o Paroxetina; y 3) Si persisten las pesadillas traumáticas severas, evaluar asociar Prazosina nocturna. Las benzodiacepinas en monoterapia están formalmente desaconsejadas."
    },
    "explicacion": "La paciente presenta un Trastorno de Estrés Postraumático (TEPT) crónico según criterios DSM-5: exposición a evento con riesgo vital evidente, duración mayor a 1 mes (4 meses de evolución) y presencia de los cuatro clústeres cardinales (intrusión con pesadillas y flashbacks, evitación de recordatorios del asalto, alteraciones cognitivas/afectivas con anestesia emocional y desapego, e hiperalerta con sobresaltos e insomnio). El manejo médico correcto de primera línea comprende: 1) Psicoterapia focalizada en trauma (TCC centrada en trauma o EMDR); 2) Farmacoterapia con un ISRS de primera línea como Sertralina 50 mg/día (titulable a 100-150 mg/día) o Paroxetina; y 3) Si persisten las pesadillas traumáticas severas, evaluar asociar Prazosina nocturna. Las benzodiacepinas en monoterapia están formalmente desaconsejadas.",
    "keyPoints": [
      "La frontera temporal diagnóstica es 1 mes: síntomas entre 3 días y 1 mes = Estrés Agudo; síntomas > 1 mes = TEPT.",
      "Los 4 clústeres del TEPT son: 1) Intrusión (flashbacks, pesadillas); 2) Evitación; 3) Alteraciones cognitivas/ánimo negativo; y 4) Hiperalerta.",
      "Los flashbacks son episodios disociativos donde el paciente siente y actúa como si el trauma estuviera ocurriendo nuevamente en el presente.",
      "Los ISRS (Sertralina y Paroxetina) son los psicofármacos de primera línea aprobados para el tratamiento del TEPT.",
      "La Prazosina (antagonista alfa-1) es el fármaco de elección para tratar las pesadillas traumáticas refractarias del TEPT.",
      "Trampa del examen: Las benzodiacepinas están contraindicadas como tratamiento del TEPT; no previenen el trastorno, interfieren con la psicoterapia de reprocesamiento y generan adicción."
    ],
    "questions": [
      {
        "stem": "Una mujer de 32 años sufrió un accidente automovilístico grave hace 3 semanas en el cual falleció su acompañante. Desde hace 10 días presenta insomnio, llanto frecuente, sobresaltos intensos ante ruidos de motores y recuerdos intrusivos involuntarios del choque. Niega antecedentes psiquiátricos previos. ¿Cuál es el diagnóstico más adecuado en este momento?",
        "options": [
          {
            "id": "A",
            "text": "Trastorno de Estrés Postraumático crónico"
          },
          {
            "id": "B",
            "text": "Trastorno de Estrés Agudo"
          },
          {
            "id": "C",
            "text": "Esquizofrenia paranoide reactiva"
          },
          {
            "id": "D",
            "text": "Trastorno de pánico primario"
          },
          {
            "id": "E",
            "text": "Trastorno somatomorfo indiferenciado"
          }
        ],
        "correcta": "B",
        "explicacion": "El cuadro se inicia tras un evento traumático de amenaza vital hace 3 semanas y los síntomas llevan 10 días de evolución. Dado que la duración del cuadro es menor a 1 mes (menos de 30 días desde el evento), la clasificación nosológica precisa según el DSM-5 es Trastorno de Estrés Agudo. Si los síntomas de intrusión, evitación e hiperalerta persistieran más allá del mes de evolución, el diagnóstico se reclasificaría como Trastorno de Estrés Postraumático (A). No existen elementos psicóticos (C) ni crisis paroxísticas espontáneas desvinculadas del trauma (D). Perla de examen: En patología postraumática, la frontera temporal es exactamente 1 mes: menos de 30 días es Estrés Agudo, más de 30 días es TEPT.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.13.1.004"
      },
      {
        "stem": "Un hombre de 40 años diagnosticado de Trastorno de Estrés Postraumático (TEPT) tras haber sido víctima de secuestro hace 6 meses recibe tratamiento con Sertralina 100 mg/día y TCC. Si bien ha mejorado en su reactividad general durante el día, persiste con pesadillas aterradoras recurrentes en las que revive el encierro, despertando con diaforesis profusa y taquicardia todas las noches. ¿Cuál es el fármaco adyuvante con mayor evidencia específica para el control de las pesadillas en el TEPT?",
        "options": [
          {
            "id": "A",
            "text": "Prazosina"
          },
          {
            "id": "B",
            "text": "Diazepam"
          },
          {
            "id": "C",
            "text": "Haloperidol"
          },
          {
            "id": "D",
            "text": "Litio"
          },
          {
            "id": "E",
            "text": "Metilfenidato"
          }
        ],
        "correcta": "A",
        "explicacion": "La Prazosina es un antagonista selectivo de los receptores alfa-1 adrenérgicos que cruza la barrera hematoencefálica y disminuye la hiperactividad noradrenérgica central durante el sueño REM. Cuenta con sólida evidencia clínica para la reducción específica de las pesadillas traumáticas y la mejoría de la calidad del sueño en pacientes con TEPT. Las benzodiacepinas como Diazepam (B) están contraindicadas porque alteran la arquitectura del sueño REM y aumentan la desensibilización negativa. El haloperidol (C) y el metilfenidato (E) no tienen indicación en este escenario. Perla de examen: Prazosina es el fármaco de elección para el tratamiento de las pesadillas traumáticas e insomnio del TEPT.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.13.1.004"
      }
    ],
    "vignetteText": "Mujer de 35 años, cajera de banco, consulta en salud mental a los 4 meses de haber sido víctima de un asalto armado en su sucursal, donde fue encañonada en la cabeza por delincuentes durante 20 minutos. Relata que desde entonces no puede dormir porque presenta pesadillas aterradoras en las que revive el cañón del arma sobre su frente, despierta gritando y sudorosa, y sufre sobresaltos violentos ante cualquier sonido metálico o frenazo de vehículo en la calle (flashbacks). Ha renunciado a su empleo, no puede ver noticias ni películas de acción, evita salir a la calle sola y se siente \"desconectada afectivamente de sus hijos, como si estuviera muerta por dentro\"."
  },
  {
    "id": "psiq-10",
    "classId": "psiq-10",
    "tier": 3,
    "blockNum": 3,
    "blockName": "Trastornos Psicóticos & Urgencias Psiquiátricas",
    "topicLabel": "17.10",
    "title": "Esquizofrenia: Síntomas Positivos/Negativos, Antipsicóticos Atípicos y GES",
    "perfilCode": "1.05.1.002",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Garantía Explícita en Salud (GES N° 34): Primer Episodio de Esquizofrenia en personas de 15 años y más · Sospecha con confirmación diagnóstica en ≤ 20 días por médico psiquiatra, e inicio de tratamiento farmacológico y psicosocial integral en ≤ 24 horas desde la confirmación.",
    "reconstrucciones": "Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026",
    "frecuencia": "Máxima rentabilidad · Patología psicótica angular del examen y garantía GES prioritaria",
    "svg": null,
    "algoTitle": "Algoritmo de Primer Episodio Psicótico, Confirmación GES N° 34 y Titulación de Antipsicóticos",
    "diagram": {
      "title": "Algoritmo de Primer Episodio Psicótico y Manejo GES de Esquizofrenia",
      "svg": "<svg viewBox=\"0 0 620 389\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#7e22ce\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#7e22ce;font-weight:700}\n    .acc{fill:#7e22ce;stroke:#6b21a8}.accT{fill:#fff}.accS{font-size:8px;fill:#f3e8ff}\n    .dec{fill:#faf5ff;stroke:#d8b4fe;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#7e22ce;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Sospecha de Primer Episodio Psicótico (15 a 35 años)</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Delirios, alucinaciones auditivas, lenguaje desorganizado o conducta catatónica</text>\n  <path class=\"ln\" d=\"M310,47 V69\"/>\n  <rect class=\"warn\" x=\"100\" y=\"69\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Descarte Orgánico y Toxicológico Inmediato en Urgencias</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">Screening de drogas en orina (cannabis, cocaína) · TAC encéfalo · Hemograma, TSH y VDRL</text>\n  <path class=\"ln\" d=\"M310,108 V130\"/>\n  <rect class=\"dec\" x=\"70\" y=\"130\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"145\" text-anchor=\"middle\" font-weight=\"700\">¿Presenta Criterios de Agitación o Riesgo Inminente?</text>\n  <text class=\"sub\" x=\"310\" y=\"157\" text-anchor=\"middle\">Evaluación de seguridad, insight y red de apoyo familiar</text>\n  <path class=\"ln\" d=\"M310,169 V199 H158 V209\"/>\n  <path class=\"ln\" d=\"M310,199 H462 V209\"/>\n  <text class=\"lbl\" x=\"158\" y=\"194\" text-anchor=\"middle\">Agitación psicomotora o riesgo de auto/heteroagresión</text>\n  <text class=\"lbl\" x=\"462\" y=\"194\" text-anchor=\"middle\">Paciente contenido con red familiar continente</text>\n  <rect class=\"crit\" x=\"12\" y=\"209\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"158\" y=\"224\" text-anchor=\"middle\" font-weight=\"700\">Hospitalización Inmediata en Agudos</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"236\" text-anchor=\"middle\">Contención escalonada</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"247\" text-anchor=\"middle\">Antipsicótico sedante (Olanzapina o Haloperidol)</text>\n  <rect class=\"dec\" x=\"316\" y=\"209\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"462\" y=\"224\" text-anchor=\"middle\" font-weight=\"700\">Activación Inmediata de Garantía GES N° 34</text>\n  <text class=\"sub\" x=\"462\" y=\"236\" text-anchor=\"middle\">Derivación preferencial a psiquiatra</text>\n  <text class=\"sub\" x=\"462\" y=\"247\" text-anchor=\"middle\">(meta ≤ 20 días) e inicio de APS</text>\n  <path class=\"ln\" d=\"M158,259 V269 H310 V281\"/>\n  <path class=\"ln\" d=\"M462,259 V269 H310 V281\"/>\n  <rect class=\"acc\" x=\"100\" y=\"281\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"296\" text-anchor=\"middle\" font-weight=\"700\">Tratamiento Farmacológico de 1.ª Línea (Atípicos)</text>\n  <text class=\"accS\" x=\"310\" y=\"308\" text-anchor=\"middle\">Risperidona (2-4 mg/día), Olanzapina (10-20 mg/día) o Aripiprazol · Menor SEP</text>\n  <path class=\"ln\" d=\"M310,320 V342\"/>\n  <rect class=\"acc\" x=\"100\" y=\"342\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"357\" text-anchor=\"middle\" font-weight=\"700\">Mantenimiento Prolongado y Prevención de Recaídas</text>\n  <text class=\"accS\" x=\"310\" y=\"369\" text-anchor=\"middle\">Mantener tratamiento por 1 a 2 años tras remisión en primer episodio · Monitoreo metabólico</text>\n</svg>"
    },
    "contexto": "La esquizofrenia es un trastorno psiquiátrico mayor crónico, heterogéneo y discapacitante, con una prevalencia cercana al 1% de la población mundial y pico de inicio en el adulto joven (18-25 años en hombres, 25-35 años en mujeres). Su etiopatogenia es neuroevolutiva y multifactorial, involucrando una disfunción del sistema dopaminérgico con hiperactividad en la vía mesolímbica (responsable de los síntomas positivos: delirios y alucinaciones) e hipoactividad en la vía mesocortical (responsable de los síntomas negativos y cognitivos: abulia, aplanamiento afectivo y alogia). En Chile está protegida por la Garantía GES N° 34. El médico general debe saber reconocer el debut psicótico, descartar consumo de sustancias y causas médicas orgánicas, e iniciar antipsicóticos de segunda generación vigilando los efectos adversos metabólicos y extrapiramidales.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología, Vías Dopaminérgicas y Epidemiología",
        "paragraphs": [
          "La <strong>hipótesis dopaminérgica de la esquizofrenia</strong> establece una disociación entre dos vías cerebrales fundamentales:",
          "• <strong>Vía Mesolímbica (hiperactiva):</strong> Proyecta desde el área tegmental ventral (VTA) hacia el núcleo accumbens. El exceso de tono dopaminérgico produce los <strong>síntomas positivos</strong> (delirios, alucinaciones auditivas, suspicacia extrema y pensamiento desorganizado). Los fármacos antipsicóticos bloquean los receptores D2 en esta vía, suprimiendo dichos síntomas.",
          "• <strong>Vía Mesocortical (hipoactiva):</strong> Proyecta desde el VTA hacia la corteza prefrontal dorsolateral y ventromedial. El déficit dopaminérgico genera los <strong>síntomas negativos</strong> (apatía, abulia, alogia, anhedonia y aplanamiento afectivo) y el déficit cognitivo.",
          "• <em>Vía Nigroestriada y Tuberoinfundibular:</em> Vías normales no afectadas primariamente por la enfermedad; el bloqueo no selectivo de receptores D2 por antipsicóticos típicos en estas vías produce <strong>síntomas extrapiramidales (SEP)</strong> e <strong>hiperprolactinemia</strong> (galactorrea, amenorrea, disfunción sexual).",
          "<em>Consumo de cannabis:</em> El consumo habitual de marihuana en adolescentes con predisposición genética previa multiplica por 2 a 4 veces el riesgo de desarrollar esquizofrenia y adelanta la edad de inicio del primer brote."
        ]
      },
      {
        "subhead": "2. Criterios Diagnósticos DSM-5 y Síntomas de Primer Rango de Schneider",
        "paragraphs": [
          "Para el diagnóstico de <strong>Esquizofrenia según DSM-5</strong>, se requiere:",
          "• <strong>Criterio A (Síntomas Activos):</strong> Presencia de al menos <strong>dos (2) o más de los siguientes síntomas durante al menos un (1) mes</strong> (o menos si se trata con éxito), y donde al menos uno de ellos debe ser obligatoriamente uno de los tres primeros: <strong>1) Ideas delirantes</strong>; <strong>2) Alucinaciones</strong> (típicamente auditivas comentadoras de los actos o en tercera persona); <strong>3) Lenguaje desorganizado</strong>; <strong>4) Comportamiento muy desorganizado o catatónico</strong>; y <strong>5) Síntomas negativos</strong> (expresión emotiva disminuida o abulia).",
          "• <strong>Criterio B:</strong> Disfunción sociolaboral marcada respecto al nivel previo al debut.",
          "• <strong>Criterio C (Duración Total):</strong> Signos continuos del trastorno que persisten durante <strong>al menos seis (6) meses</strong> (incluyendo al menos 1 mes de síntomas de la fase activa, más fases prodrómicas o residuales con síntomas negativos o atenuados).",
          "• <strong>Criterio D y E:</strong> Exclusión de trastorno esquizoafectivo, trastorno bipolar, consumo de tóxicos o enfermedad médica orgánica (ej. encefalitis límbica, lupus, epilepsia del lóbulo temporal)."
        ]
      },
      {
        "subhead": "3. Diagnóstico Diferencial Médico Orgánico y Toxicológico Obligatorio",
        "paragraphs": [
          "Todo primer episodio psicótico exige un estudio exhaustivo en el servicio de urgencias o APS para <strong>descartar causas secundarias potencialmente reversibles</strong>:",
          "• <strong>Screening toxicológico de drogas en orina:</strong> Descarte indispensable de cannabis, cocaína, anfetaminas, pasta base, fenciclidina y éxtasis.",
          "• <strong>Neuroimagen:</strong> <strong>TAC de encéfalo sin contraste o Resonancia Magnética</strong> en todo primer episodio para descartar tumores cerebrales (meningiomas frontales), accidente cerebrovascular, hidrocefalia o malformaciones vasculares.",
          "• <strong>Laboratorio general:</strong> Hemograma completo, VHS/PCR, función renal, pruebas hepáticas, electrolitos plasmáticos, <strong>TSH y T4 libre</strong> (psicosis mixedematosa o tirotóxica), <strong>VDRL / RPR</strong> (neurosífilis) y serología VIH.",
          "• <strong>Punción Lumbar:</strong> Indicada si coexiste fiebre, cefalea súbita, signos meníngeos o sospecha de encefalitis viral / autoinmune (anti-NMDAR en mujeres jóvenes)."
        ]
      },
      {
        "subhead": "4. Tratamiento con Antipsicóticos de Segunda Generación (Atípicos)",
        "paragraphs": [
          "Los <strong>antipsicóticos de segunda generación (atípicos)</strong> son la <strong>primera línea absoluta</strong> de tratamiento debido a su menor propensión a inducir síntomas extrapiramidales y discinesia tardía, actuando mediante un bloqueo dual de receptores D2 y serotoninérgicos 5-HT2A:",
          "• <strong>Risperidona:</strong> Dosis de 2 a 6 mg/día. Altamente eficaz en síntomas positivos; a dosis > 6 mg/día aumenta el riesgo de efectos extrapiramidales e hiperprolactinemia.",
          "• <strong>Olanzapina:</strong> Dosis de 10 a 20 mg/día. Excelente efecto sedante y control rápido del delirio. <em>Alerta metabólica:</em> Fuerte propensión a ganancia marcada de peso, dislipidemia y diabetes mellitus tipo 2.",
          "• <strong>Quetiapina:</strong> Dosis de 300 a 800 mg/día. Fuerte efecto sedante y casi nulo riesgo extrapiramidal; requiere ajuste de dosis y control metabólico.",
          "• <strong>Aripiprazol:</strong> Dosis de 10 a 30 mg/día. Agonista parcial D2; no produce ganancia de peso ni sedación, pero puede causar acatisia inicial.",
          "• <strong>Monitoreo metabólico obligatorio:</strong> Peso, circunferencia abdominal, presión arterial, glicemia y perfil lipídico basal, al mes, a los 3 meses y luego anualmente."
        ]
      },
      {
        "subhead": "5. Manejo de Efectos Adversos Extrapiramidales y Duración del Tratamiento",
        "paragraphs": [
          "• <strong>Distonía Aguda:</strong> Espasmo muscular sostenido y doloroso que aparece en las primeras 24-48 horas de iniciado un antipsicótico típico (crisis oculógiras, tortícolis, trismus, opistótonos). Tratamiento de urgencia: <strong>Biperideno 5 mg IM o EV</strong> (anticolinérgico).",
          "• <strong>Parkinsonismo Farmacológico:</strong> Temblor de reposo, rigidez en rueda dentada y bradicinesia que aparece a las semanas de tratamiento. Manejo: reducir la dosis del antipsicótico, rotar a atípico o agregar Biperideno oral de forma temporal.",
          "• <strong>Acatisia:</strong> Sensación subjetiva de inquietud motora intolerable con necesidad imperiosa de moverse (no poder quedarse sentado). Tratamiento: <strong>Propranolol 20 a 80 mg/día</strong> o benzodiacepinas.",
          "• <strong>Discinesia Tardía:</strong> Movimientos coreoatetoides involuntarios oro-facio-linguales (masticación, protrusión de lengua) tras años de tratamiento con antipsicóticos. El biperideno la empeora; se maneja rotando a Clozapina.",
          "• <strong>Duración del Mantenimiento:</strong> Tras la remisión de un <strong>primer episodio psicótico</strong>, el tratamiento antipsicótico debe mantenerse de forma continua durante al menos <strong>1 a 2 años</strong>. En pacientes con recaídas múltiples, el tratamiento es indefinido."
        ]
      }
    ],
    "table": {
      "title": "Síntomas Positivos vs Síntomas Negativos en Esquizofrenia y Vías Neurobiológicas",
      "headers": [
        "Categoría Sintomática",
        "Manifestaciones Clínicas Clave",
        "Vía Dopaminérgica Comprometida",
        "Respuesta Farmacológica"
      ],
      "rows": [
        [
          "Síntomas Positivos",
          "Delirios (persecución, perjuicio, místicos), alucinaciones auditivas, habla desorganizada",
          "Hiperactividad mesolímbica (exceso D2)",
          "Excelente respuesta a antipsicóticos (bloqueo D2)"
        ],
        [
          "Síntomas Negativos",
          "Aplanamiento afectivo, abulia (falta de voluntad), alogia (pobreza del habla), anhedonia",
          "Hipoactividad mesocortical prefrontal",
          "Pobre respuesta a antipsicóticos; mejor con atípicos y psicosocial"
        ],
        [
          "Síntomas Cognitivos",
          "Déficit de memoria de trabajo, atención ejecutiva alterada, procesamiento lento",
          "Disfunción cortical prefrontal y del hipocampo",
          "Rehabilitación cognitiva; no remiten plenamente con fármacos"
        ],
        [
          "Síntomas Afectivos",
          "Disforia, depresión post-psicótica, riesgo suicida elevado",
          "Disfunción límbico-cortical compleja",
          "Manejo con antidepresivos cautelosos o estabilizadores"
        ]
      ]
    },
    "severityTable": {
      "title": "Perfil Farmacológico de Antipsicóticos de Segunda Generación (Atípicos)",
      "headers": [
        "Antipsicótico Atípico",
        "Dosis Diaria Habitual",
        "Riesgo Extrapiramidal (SEP)",
        "Riesgo Síndrome Metabólico",
        "Perfil Clínico Preferencial"
      ],
      "rows": [
        [
          "Risperidona",
          "2 – 6 mg/día VO",
          "Moderado (aumenta a dosis > 6 mg)",
          "Moderado (hiperprolactinemia alta)",
          "Excelente eficacia en síntomas positivos y agitación"
        ],
        [
          "Olanzapina",
          "10 – 20 mg/día VO/IM",
          "Muy bajo",
          "MUY ALTO (ganancia severa de peso, diabetes)",
          "Excelente control de crisis aguda, insomnio y delusiones"
        ],
        [
          "Quetiapina",
          "300 – 800 mg/día VO",
          "Casi nulo (seguro en Parkinson)",
          "Alto (sedación marcada y aumento de peso)",
          "Ideal en psicosis con insomnio, comorbilidad afectiva o Parkinson"
        ],
        [
          "Aripiprazol",
          "10 – 30 mg/día VO",
          "Bajo (puede dar acatisia)",
          "Muy bajo (neutro metabólico)",
          "Excelente en pacientes jóvenes preocupados por el peso; no seda"
        ],
        [
          "Clozapina",
          "100 – 400 mg/día VO",
          "Mínimo (cero discinesia)",
          "Muy alto · RIESGO DE AGRANULOCITOSIS",
          "Estándar de oro en Esquizofrenia Refractaria (Nivel Secundario)"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Protocolo de Manejo de Reacciones Adversas Motoras por Antipsicóticos",
      "headers": [
        "Efecto Adverso Motor",
        "Cronología Típica",
        "Signos Clínicos Cardinales",
        "Tratamiento Médico Inmediato"
      ],
      "rows": [
        [
          "Distonía Aguda",
          "Primeras 24 a 48 horas post-inicio",
          "Crisis oculógiras, tortícolis espasmódica, trismus, laringoespasmo",
          "Biperideno 5 mg IM/EV (repetible en 30 min) o Difenhidramina"
        ],
        [
          "Acatisia",
          "Primeros días a semanas",
          "Inquietud subjetiva intolerable, necesidad de caminar, incapacidad de sentarse",
          "Propranolol 20-80 mg/día o Clonazepam; reducir dosis de antipsicótico"
        ],
        [
          "Parkinsonismo",
          "Primeras semanas a meses",
          "Temblor de reposo, rigidez plástica en rueda dentada, marcha a pequeños pasos",
          "Biperideno 2-4 mg/día VO transitorio o rotar a antipsicótico atípico"
        ],
        [
          "Discinesia Tardía",
          "Años de tratamiento continuo",
          "Movimientos coreoatetoides peribucales (\"chupeteo\", muecas involuntarias)",
          "Rotar a Clozapina · PROHIBIDO dar Biperideno (la empeora) · Valbenazina"
        ]
      ]
    },
    "vignette": {
      "title": "Caso Clínico Tipo EUNACOM",
      "text": "Hombre de 21 años, estudiante universitario de informática, es llevado al CESFAM por sus padres debido a un cambio progresivo en su conducta de 7 meses de evolución. Comenzó con aislamiento en su habitación, abandono de sus estudios y descuido del aseo personal. Desde hace 2 meses cubre las ventanas de su pieza con papel aluminio, afirmando con convicción que los servicios de inteligencia extranjeros instalaron micrófonos en las paredes para espiar sus pensamientos e interferir en su cerebro mediante telepatía. En las últimas semanas sus padres lo escuchan hablar solo en voz alta respondiendo a voces que comentan sus movimientos en tercera persona. Al examen mental: facie inexpresiva, afecto plano, suspicaz, soliloquios evidentes, pensamiento disgregado con delirio de persecución e influencia física, y nula conciencia de enfermedad. El screening toxicológico en orina para drogas es negativo y la glicemia, TSH y hemograma resultan normales.",
      "conducta": "El paciente presenta un cuadro clínico típico de un Primer Episodio de Esquizofrenia: presencia de síntomas positivos (delirios de persecución y referencia, alucinaciones auditivas comentadoras en tercera persona), lenguaje desorganizado y síntomas negativos (abulia, aislamiento social, aplanamiento afectivo y deterioro de la higiene) de más de 6 meses de evolución con más de 1 mes de síntomas activos, habiéndose descartado consumo de drogas y patología somática. Según la Garantía GES N° 34 (Primer Episodio de Esquizofrenia), la conducta médica obligatoria es: 1) Activar la notificación GES N° 34 y derivar a confirmación diagnóstica con especialista en psiquiatría (plazo máximo legal: 20 días); 2) Iniciar tratamiento farmacológico de primera línea con un antipsicótico de segunda generación (atípico) como Risperidona (iniciando con 1-2 mg/día y titulando a 3-4 mg/día) u Olanzapina (5-10 mg/día); 3) Solicitar TAC de encéfalo para completar el descarte de organicidad cerebral; y 4) Coordinar seguimiento y apoyo psicosocial familiar estrecho."
    },
    "explicacion": "El paciente presenta un cuadro clínico típico de un Primer Episodio de Esquizofrenia: presencia de síntomas positivos (delirios de persecución y referencia, alucinaciones auditivas comentadoras en tercera persona), lenguaje desorganizado y síntomas negativos (abulia, aislamiento social, aplanamiento afectivo y deterioro de la higiene) de más de 6 meses de evolución con más de 1 mes de síntomas activos, habiéndose descartado consumo de drogas y patología somática. Según la Garantía GES N° 34 (Primer Episodio de Esquizofrenia), la conducta médica obligatoria es: 1) Activar la notificación GES N° 34 y derivar a confirmación diagnóstica con especialista en psiquiatría (plazo máximo legal: 20 días); 2) Iniciar tratamiento farmacológico de primera línea con un antipsicótico de segunda generación (atípico) como Risperidona (iniciando con 1-2 mg/día y titulando a 3-4 mg/día) u Olanzapina (5-10 mg/día); 3) Solicitar TAC de encéfalo para completar el descarte de organicidad cerebral; y 4) Coordinar seguimiento y apoyo psicosocial familiar estrecho.",
    "keyPoints": [
      "El diagnóstico de Esquizofrenia según DSM-5 exige al menos 6 meses de evolución total continua con al menos 1 mes de síntomas activos (delirios, alucinaciones o habla desorganizada).",
      "En Chile, el Primer Episodio de Esquizofrenia en personas de 15 años y más está garantizado por el GES N° 34 (confirmación en ≤ 20 días e inicio de terapia en ≤ 24 h post-confirmación).",
      "Todo primer episodio psicótico exige descarte toxicológico en orina y neuroimagen (TAC de encéfalo) para descartar causas secundarias.",
      "Los antipsicóticos de segunda generación (Risperidona, Olanzapina, Quetiapina, Aripiprazol) son la primera línea de tratamiento farmacológico.",
      "La distonía aguda (espasmo ocular o cervical en las primeras 48 h) se trata de urgencia con Biperideno 5 mg IM o EV.",
      "La acatisia (inquietud motora subjetiva intolerable) se trata de primera línea con Propranolol o benzodiacepinas.",
      "Tras la remisión de un primer episodio psicótico, el tratamiento antipsicótico debe mantenerse de forma continua durante al menos 1 a 2 años para prevenir recaídas.",
      "Trampa del examen: La discinesia tardía aparece tras años de tratamiento con antipsicóticos y empeora gravemente si se administra biperideno o anticolinérgicos; el manejo de elección es rotar a Clozapina."
    ],
    "questions": [
      {
        "stem": "Un joven de 20 años es llevado a la consulta médica por sus padres debido a que en los últimos 7 meses ha abandonado la universidad, se aísla en su habitación y afirma que una organización criminal lo espía a través de la televisión. En el examen mental se constata afecto aplanado, soliloquios y alucinaciones auditivas de voces que comentan lo que hace. El examen físico y el screening de drogas en orina son normales. ¿Cuál es el diagnóstico clínico y la conducta médico-legal más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Trastorno delirante crónico; manejo ambulatorio exclusivo en APS sin derivación"
          },
          {
            "id": "B",
            "text": "Primer Episodio de Esquizofrenia; activar Garantía Explícita en Salud (GES N° 34), iniciar antipsicótico atípico y derivar a confirmación por especialista"
          },
          {
            "id": "C",
            "text": "Trastorno esquizoafectivo; indicar Sertralina 100 mg y reposo en casa"
          },
          {
            "id": "D",
            "text": "Psicosis reactiva breve; esperar resolución espontánea antes de cumplir el mes"
          },
          {
            "id": "E",
            "text": "Trastorno de personalidad esquizotípico; indicar psicoterapia individual sin fármacos"
          }
        ],
        "correcta": "B",
        "explicacion": "El paciente cumple criterios DSM-5 para Esquizofrenia: síntomas positivos (delirios de persecución, alucinaciones auditivas comentadoras), síntomas negativos (aplanamiento afectivo, abulia) y disfunción sociolaboral grave de más de 6 meses de duración en un adulto joven con tóxicos negativos. En Chile, este cuadro constituye un Primer Episodio de Esquizofrenia cubierto por la Garantía GES N° 34, que garantiza confirmación diagnóstica por psiquiatra en ≤ 20 días y tratamiento integral en ≤ 24 horas desde la confirmación. La conducta correcta es notificar el caso GES, iniciar un antipsicótico atípico de primera línea (ej. Risperidona u Olanzapina) y derivar a nivel secundario. El trastorno psicótico breve (D) dura menos de un mes. Perla de examen: En Chile, todo primer episodio de esquizofrenia en mayores de 15 años debe notificarse e ingresar por GES N° 34.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.05.1.002"
      },
      {
        "stem": "Un paciente de 22 años diagnosticado de esquizofrenia inicia tratamiento con Haloperidol 5 mg cada 12 horas por vía oral. A las 24 horas de la primera dosis, es llevado a urgencias por presentar de forma brusca una desviación conjugada y sostenida de la mirada hacia arriba (crisis oculógira), contractura dolorosa intensa del cuello con inclinación lateral (tortícolis) y trismus mandibular. El paciente se encuentra angustiado pero plenamente vigil y afebril. ¿Cuál es el diagnóstico y el tratamiento de elección inmediato?",
        "options": [
          {
            "id": "A",
            "text": "Síndrome neuroléptico maligno; administrar dantroleno endovenoso urgente"
          },
          {
            "id": "B",
            "text": "Distonía aguda inducida por antipsicóticos; administrar Biperideno 5 mg intramuscular o endovenoso lento"
          },
          {
            "id": "C",
            "text": "Status epiléptico no convulsivo; administrar fenitoína en infusión rápida"
          },
          {
            "id": "D",
            "text": "Acatisia aguda; prescribir propranolol oral a permanencia"
          },
          {
            "id": "E",
            "text": "Tétanos generalizado; administrar toxoide antitetánico e inmunoglobulina"
          }
        ],
        "correcta": "B",
        "explicacion": "El cuadro corresponde a una Distonía Aguda, reacción adversa extrapiramidal precoz (habitualmente en las primeras 24 a 48 horas tras iniciar o aumentar la dosis de un antipsicótico de alta potencia como Haloperidol). Se produce por un bloqueo dopaminérgico agudo que genera un predominio colinérgico relativo en los ganglios basales, manifestándose como contracciones musculares tónicas dolorosas e involuntarias (crisis oculógiras, tortícolis espasmódica, trismus). El tratamiento de rescate inmediato y específico es un anticolinérgico de acción central: Biperideno 5 mg IM o EV lento, con resolución de los síntomas en 10 a 20 minutos. El SNM (A) cursa con hipertermia grave, rigidez en tubo de plomo y disautonomía. Perla de examen: La distonía aguda por antipsicóticos es precoz y se trata de urgencia con Biperideno parenteral.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.05.1.002"
      },
      {
        "stem": "Un hombre de 26 años con esquizofrenia en tratamiento con Olanzapina 15 mg/día acude a control de salud a los 6 meses de terapia, manteniéndose sin síntomas psicóticos activos. En los exámenes de laboratorio destaca aumento de peso de 9 kg, glicemia en ayunas de 136 mg/dL (confirmada en segunda toma en 132 mg/dL) y triglicéridos en 280 mg/dL. ¿Cuál es la complicación que presenta y la conducta médica indicada?",
        "options": [
          {
            "id": "A",
            "text": "Hipotiroidismo farmacológico; iniciar levotiroxina 100 mcg al día"
          },
          {
            "id": "B",
            "text": "Síndrome metabólico y diabetes mellitus inducidos por Olanzapina; indicar manejo dietético, metformina y evaluar rotación a un antipsicótico con menor perfil metabólico como Aripiprazol"
          },
          {
            "id": "C",
            "text": "Resistencia a antipsicóticos; duplicar la dosis de Olanzapina a 30 mg al día"
          },
          {
            "id": "D",
            "text": "Suspensión inmediata de todo tratamiento antipsicótico sin reemplazo"
          },
          {
            "id": "E",
            "text": "Insuficiencia suprarrenal secundaria; administrar hidrocortisona endovenosa"
          }
        ],
        "correcta": "B",
        "explicacion": "La Olanzapina (junto con la Clozapina) es el antipsicótico con mayor riesgo de síndrome metabólico, provocando ganancia ponderal masiva, hipertrigliceridemia, resistencia a la insulina y debut de Diabetes Mellitus tipo 2. La conducta médica integral ante este hallazgo consiste en: 1) Diagnosticar y tratar la diabetes mellitus y dislipidemia con cambios en el estilo de vida y metformina; y 2) Planificar la rotación gradual del antipsicótico hacia un agente con perfil metabólico neutro, siendo Aripiprazol o Ziprasidona las opciones de elección. Suspender el antipsicótico sin sustituto (D) gatillaría una recaída psicótica grave. Perla de examen: Olanzapina tiene el mayor riesgo de ganancia ponderal y diabetes mellitus entre los atípicos; Aripiprazol es neutro metabólicamente.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.05.1.002"
      },
      {
        "stem": "Un paciente de 24 años que presentó un primer episodio de esquizofrenia paranoide logra la remisión completa de sus ideas delirantes y alucinaciones tras 6 meses de tratamiento con Risperidona 3 mg/día. Se encuentra asintomático y ha retomado sus actividades cotidianas. Sus familiares preguntan cuánto tiempo debe continuar tomando el antipsicótico. Según las guías clínicas y la evidencia psiquiátrica, ¿cuál es la duración mínima recomendada del tratamiento de mantenimiento?",
        "options": [
          {
            "id": "A",
            "text": "El medicamento puede suspenderse de inmediato ya que se logró la remisión completa"
          },
          {
            "id": "B",
            "text": "Debe mantenerse durante al menos 1 a 2 años continuos tras la remisión del primer episodio para evitar recaídas"
          },
          {
            "id": "C",
            "text": "Solo debe tomarlo en los días en que vuelva a escuchar voces"
          },
          {
            "id": "D",
            "text": "Debe suspenderse a las 4 semanas y reemplazarse por psicoterapia exclusiva"
          },
          {
            "id": "E",
            "text": "Debe mantenerse por 3 meses y luego usar únicamente benzodiacepinas"
          }
        ],
        "correcta": "B",
        "explicacion": "En un paciente que ha presentado un primer episodio psicótico esquizofrénico y alcanza la remisión sintomática, las guías internacionales y la guía GES N° 34 recomiendan mantener el tratamiento antipsicótico de forma continua y a dosis terapéutica durante un período mínimo de 1 a 2 años. La suspensión precoz del antipsicótico antes del año se asocia a una tasa de recaída psicótica superior al 70-80% en los siguientes 12 meses, con el agravante de que cada recaída produce deterioro neurocognitivo residual y mayor riesgo de refractariedad. En pacientes con dos o más episodios psicóticos previos, la mantención se prolonga a 5 años o de por vida. Perla de examen: En un primer episodio de esquizofrenia con remisión completa, la duración mínima del tratamiento de mantenimiento con antipsicóticos es de 1 a 2 años.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.05.1.002"
      }
    ],
    "vignetteText": "Hombre de 21 años, estudiante universitario de informática, es llevado al CESFAM por sus padres debido a un cambio progresivo en su conducta de 7 meses de evolución. Comenzó con aislamiento en su habitación, abandono de sus estudios y descuido del aseo personal. Desde hace 2 meses cubre las ventanas de su pieza con papel aluminio, afirmando con convicción que los servicios de inteligencia extranjeros instalaron micrófonos en las paredes para espiar sus pensamientos e interferir en su cerebro mediante telepatía. En las últimas semanas sus padres lo escuchan hablar solo en voz alta respondiendo a voces que comentan sus movimientos en tercera persona. Al examen mental: facie inexpresiva, afecto plano, suspicaz, soliloquios evidentes, pensamiento disgregado con delirio de persecución e influencia física, y nula conciencia de enfermedad. El screening toxicológico en orina para drogas es negativo y la glicemia, TSH y hemograma resultan normales."
  },
  {
    "id": "psiq-11",
    "classId": "psiq-11",
    "tier": 2,
    "blockNum": 3,
    "blockName": "Trastornos Psicóticos & Urgencias Psiquiátricas",
    "topicLabel": "17.11",
    "title": "Clozapina y Esquizofrenia Refractaria: Monitorización de Hemograma",
    "perfilCode": "1.05.1.002",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Garantía Explícita en Salud (GES N° 34): Canasta de Esquizofrenia Refractaria · Programa Nacional de Farmacovigilancia de Clozapina con monitoreo hematológico obligatorio.",
    "reconstrucciones": "Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026",
    "frecuencia": "Alta · Pregunta habitual sobre el criterio de refractariedad y el punto de corte del RAN",
    "svg": null,
    "algoTitle": "Algoritmo de Monitorización Hematológica y Criterios de Suspensión Inmediata de Clozapina",
    "diagram": {
      "title": "Protocolo de Seguridad y Monitorización Hematológica con Clozapina",
      "svg": "<svg viewBox=\"0 0 620 422\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#7e22ce\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#7e22ce;font-weight:700}\n    .acc{fill:#7e22ce;stroke:#6b21a8}.accT{fill:#fff}.accS{font-size:8px;fill:#f3e8ff}\n    .dec{fill:#faf5ff;stroke:#d8b4fe;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#7e22ce;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Esquizofrenia Refractaria (Criterios de Kane)</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Falla a ≥ 2 antipsicóticos a dosis plenas por ≥ 6 semanas (al menos 1 atípico)</text>\n  <path class=\"ln\" d=\"M310,47 V69\"/>\n  <rect class=\"warn\" x=\"100\" y=\"69\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Evaluación Basal Obligatoria Previa al Inicio</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">Hemograma basal: Leucocitos ≥ 3.500/mm³ Y Recuento</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"107\" text-anchor=\"middle\">Absoluto de Neutrófilos (RAN) ≥ 2.000/mm³</text>\n  <path class=\"ln\" d=\"M310,119 V141\"/>\n  <rect class=\"dec\" x=\"70\" y=\"141\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"156\" text-anchor=\"middle\" font-weight=\"700\">Periodicidad del Hemograma de Control según Tiempo de Tratamiento</text>\n  <text class=\"sub\" x=\"310\" y=\"168\" text-anchor=\"middle\">Calendario estricto de farmacovigilancia obligatorio por norma MINSAL</text>\n  <path class=\"ln\" d=\"M310,180 V210 H158 V220\"/>\n  <path class=\"ln\" d=\"M310,210 H462 V220\"/>\n  <text class=\"lbl\" x=\"158\" y=\"205\" text-anchor=\"middle\">Primeros 6 meses de tratamiento</text>\n  <text class=\"lbl\" x=\"462\" y=\"205\" text-anchor=\"middle\">De 6 a 12 meses (Quincenal) · &gt; 12 meses (Mensual)</text>\n  <rect class=\"crit\" x=\"12\" y=\"220\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"158\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">Hemograma Semanal Ineludible</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"247\" text-anchor=\"middle\">Vigilancia estrecha del período de</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"258\" text-anchor=\"middle\">máximo riesgo de agranulocitosis</text>\n  <rect class=\"dec\" x=\"316\" y=\"220\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"462\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">Vigilancia Quincenal y Mensual</text>\n  <text class=\"sub\" x=\"462\" y=\"247\" text-anchor=\"middle\">Se mantiene durante todo el tiempo</text>\n  <text class=\"sub\" x=\"462\" y=\"258\" text-anchor=\"middle\">que el paciente reciba el fármaco</text>\n  <path class=\"ln\" d=\"M158,270 V280 H310 V292\"/>\n  <path class=\"ln\" d=\"M462,270 V280 H310 V292\"/>\n  <rect class=\"crit\" x=\"100\" y=\"292\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"307\" text-anchor=\"middle\" font-weight=\"700\">Alerta de Neutropenia Severa (Agranulocitosis): RAN &lt; 1.000/mm³</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"319\" text-anchor=\"middle\">SUSPENSIÓN INMEDIATA Y DEFINITIVA · Aislamiento protector</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"330\" text-anchor=\"middle\">Prohibida la reexposición de por vida</text>\n  <path class=\"ln\" d=\"M310,342 V364\"/>\n  <rect class=\"warn\" x=\"100\" y=\"364\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"379\" text-anchor=\"middle\" font-weight=\"700\">Otras Reacciones Adversas Críticas de Clozapina</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"391\" text-anchor=\"middle\">Miocarditis (primeras semanas), convulsiones</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"402\" text-anchor=\"middle\">dosis-dependientes e hipomotilidad intestinal/íleo paralítico</text>\n</svg>"
    },
    "contexto": "La Clozapina es el antipsicótico más eficaz de la historia de la psicofarmacología, considerado el estándar de oro indiscutido para la Esquizofrenia Refractaria y la psicosis con conducta suicida persistente. A pesar de su eficacia superior y ausencia de efectos extrapiramidales o discinesia tardía, su uso está restringido a nivel secundario y regulado por un estricto Programa Nacional de Farmacovigilancia debido a su potencial de causar agranulocitosis potencialmente mortal en un 0.8% de los tratados. En el examen EUNACOM es mandatorio dominar: la definición formal de refractariedad, el calendario de hemogramas obligatorios (semanal los primeros 6 meses) y el valor de corte del RAN (< 1.000/mm³) que obliga a la suspensión definitiva e irreversible del medicamento.",
    "contentSections": [
      {
        "subhead": "1. Definición de Esquizofrenia Refractaria y Criterios de Inicio de Clozapina",
        "paragraphs": [
          "Aproximadamente un 30% de los pacientes con esquizofrenia presentan resistencia al tratamiento convencional. La <strong>Esquizofrenia Refractaria</strong> se define formally (criterios de Kane / guías GES N° 34) como la persistencia de síntomas psicóticos moderados a severos que causan disfunción, tras el <strong>fracaso de al menos dos (2) esquemas terapéuticos con antipsicóticos diferentes administrados a dosis plenas durante un período mínimo de seis (6) semanas cada uno</strong>, donde al menos uno de los antipsicóticos ensayados debe haber sido de segunda generación (atípico), habiéndose constatado adherencia verificada.",
          "Ante la confirmación de refractariedad, la <strong>Clozapina es el fármaco de elección indiscutible e insustituible</strong>."
        ]
      },
      {
        "subhead": "2. Monitorización Hematológica y Protocolo del Recuento Absoluto de Neutrófilos (RAN)",
        "paragraphs": [
          "La complicación más temida de la clozapina es la <strong>agranulocitosis</strong> (mecanismo inmunoalérgico y tóxico medular con lisis de precursores mieloides), cuya máxima incidencia ocurre en las primeras 18 semanas de tratamiento.",
          "<strong>Requisitos basales para iniciar Clozapina:</strong> Leucocitos totales ≥ 3.500/mm³ y <strong>Recuento Absoluto de Neutrófilos (RAN) ≥ 2.000/mm³</strong> (o ≥ 1.500/mm³ en neutropenia étnica benigna).",
          "<strong>Calendario de Hemogramas Obligatorio por Norma MINSAL:</strong>",
          "• <strong>Primeros 6 meses (semanas 1 a 26):</strong> Hemograma con recuento diferencial <strong>SEMANAL</strong>.",
          "• <strong>Segundos 6 meses (semanas 27 a 52):</strong> Hemograma <strong>QUINCENAL</strong>.",
          "• <strong>A partir del año (semana 53 en adelante):</strong> Hemograma <strong>MENSUAL</strong> durante todo el tiempo que el paciente tome clozapina y hasta 4 semanas después de suspenderla.",
          "<strong>Puntos de Corte del RAN y Conducta Médica:</strong>",
          "• <strong>RAN 1.500 – 1.999/mm³ (alerta verde/amarilla):</strong> Mantener clozapina con control hematológico bisemanal.",
          "• <strong>RAN 1.000 – 1.499/mm³ (neutropenia moderada):</strong> Suspender temporalmente clozapina, hemograma diario hasta recuperación > 1.500/mm³.",
          "• <strong>RAN < 1.000/mm³ (AGRANULOCITOSIS / Alerta Roja):</strong> <strong>SUSPENSIÓN INMEDIATA Y DEFINITIVA DE LA CLOZAPINA</strong>. Hospitalización en aislamiento protector, interconsulta a hematología, evaluación de factor estimulante de colonias de granulocitos (G-CSF). <em>Regla de Oro:</em> <strong>Está ESTRICTAMENTE PROHIBIDA la reexposición a Clozapina de por vida</strong> en pacientes que sufrieron agranulocitosis por el riesgo inminente de recidiva fulminante y muerte."
        ]
      },
      {
        "subhead": "3. Otras Reacciones Adversas Críticas de la Clozapina",
        "paragraphs": [
          "• <strong>Miocarditis y Miocardiopatía:</strong> Ocurre típicamente en el primer mes. Se manifiesta con disnea, dolor precordial, taquicardia persistente no explicada y fiebre. Exige ECG, troponinas, ecocardiograma y suspensión inmediata del fármaco ante confirmación.",
          "• <strong>Convulsiones tónico-clónicas:</strong> Reacción dosis-dependiente (riesgo elevado con dosis > 600 mg/día). Se maneja reduciendo la dosis y asociando ácido valproico.",
          "• <strong>Hipomotilidad Gastrointestinal Severa (Íleo Paralítico):</strong> Por su potente acción anticolinérgica; puede causar constipación extrema, impactación fecal, vólvulo intestinal y necrosis fatal. Exige prevención activa con laxantes osmóticos.",
          "• <strong>Sialorrea nocturna y sedación:</strong> Muy frecuentes pero benignas; se manejan con medidas locales o antimuscarínicos selectivos.",
          "• <strong>Síndrome Metabólico severo:</strong> Ganancia rápida de peso y dislipidemia."
        ]
      }
    ],
    "table": {
      "title": "Protocolo de Seguridad y Monitoreo Hematológico de Clozapina según Niveles de RAN",
      "headers": [
        "Nivel de RAN (Neutrófilos)",
        "Estado Hematológico",
        "Conducta Médica Inmediata",
        "Posibilidad de Reexposición"
      ],
      "rows": [
        [
          "RAN ≥ 2.000/mm³",
          "Normal / Seguro",
          "Continuar tratamiento según calendario habitual (semanal -> quincenal -> mensual)",
          "Uso continuado autorizado"
        ],
        [
          "RAN 1.500 – 1.999/mm³",
          "Neutropenia Leve",
          "Continuar clozapina pero intensificar controles a dos veces por semana hasta normalizar",
          "Permitida bajo vigilancia estrecha"
        ],
        [
          "RAN 1.000 – 1.499/mm³",
          "Neutropenia Moderada",
          "Suspender temporalmente clozapina · Hemograma diario · Reanudar al superar 1.500",
          "Permitida tras recuperación completa"
        ],
        [
          "RAN < 1.000/mm³",
          "AGRANULOCITOSIS SEVERA",
          "SUSPENSIÓN INMEDIATA Y DEFINITIVA · Aislamiento protector · G-CSF",
          "FORMALMENTE PROHIBIDA DE POR VIDA"
        ]
      ]
    },
    "vignette": {
      "title": "Caso Clínico Tipo EUNACOM",
      "text": "Hombre de 27 años con diagnóstico de esquizofrenia de 5 años de evolución, con múltiples hospitalizaciones por delirios persecutorios y alucinaciones persistentes a pesar de haber recibido Risperidona 6 mg/día por 8 semanas y posteriormente Olanzapina 20 mg/día por 10 semanas con adherencia estrictamente supervisada por su familia. El psiquiatra tratante decide iniciar Clozapina tras constatar un hemograma basal con leucocitos de 6.200/mm³ y RAN de 3.800/mm³. A la 7.ª semana de tratamiento con Clozapina (dosis 250 mg/día), con notable remisión de sus síntomas psicóticos, el hemograma de control semanal evidencia leucocitos totales de 2.100/mm³ y Recuento Absoluto de Neutrófilos (RAN) de 820/mm³. El paciente se encuentra afebril y asintomático.",
      "conducta": "El paciente presenta una Agranulocitosis inducida por Clozapina (RAN 820/mm³, cifra inferior al umbral crítico de 1.000/mm³). La conducta médica obligatoria e inmediata según las normas internacionales y el protocolo MINSAL es: 1) Suspender de forma inmediata, definitiva e irrevocable la Clozapina; 2) Hospitalizar al paciente en una unidad de aislamiento de contacto y protector con monitorización estricta de signos vitales (vigilar fiebre); 3) Interconsulta urgente a Hematología para evaluación de inicio de factor estimulante de colonias de granulocitos (G-CSF / Filgrastim); 4) Prohibir el uso de otros fármacos mielosupresores; y 5) Dejar constancia destacada en ficha clínica de que la paciente tiene formalmente contraindicada la reexposición a Clozapina de por vida. El distractor de reducir la dosis o esperar una semana es un error mortal."
    },
    "explicacion": "El paciente presenta una Agranulocitosis inducida por Clozapina (RAN 820/mm³, cifra inferior al umbral crítico de 1.000/mm³). La conducta médica obligatoria e inmediata según las normas internacionales y el protocolo MINSAL es: 1) Suspender de forma inmediata, definitiva e irrevocable la Clozapina; 2) Hospitalizar al paciente en una unidad de aislamiento de contacto y protector con monitorización estricta de signos vitales (vigilar fiebre); 3) Interconsulta urgente a Hematología para evaluación de inicio de factor estimulante de colonias de granulocitos (G-CSF / Filgrastim); 4) Prohibir el uso de otros fármacos mielosupresores; y 5) Dejar constancia destacada en ficha clínica de que la paciente tiene formalmente contraindicada la reexposición a Clozapina de por vida. El distractor de reducir la dosis o esperar una semana es un error mortal.",
    "keyPoints": [
      "Esquizofrenia refractaria se define por el fracaso a ≥ 2 ensayos con antipsicóticos a dosis plenas por ≥ 6 semanas (al menos un atípico).",
      "La Clozapina es el fármaco de elección indiscutido en esquizofrenia refractaria y en psicosis con conducta suicida persistente.",
      "Calendario de hemogramas con clozapina: semanal durante los primeros 6 meses, quincenal de los 6 a 12 meses, y mensual de por vida.",
      "Si el RAN cae por debajo de 1.000/mm³, se debe suspender la clozapina de inmediato y queda formalmente proscrita la reexposición de por vida.",
      "La Clozapina no produce síntomas extrapiramidales ni discinesia tardía, pero puede causar miocarditis, convulsiones e íleo paralítico fatal.",
      "Trampa del examen: Ante un RAN < 1.000/mm³ en un paciente con Clozapina, jamás bajar la dosis ni repetir el examen en una semana sin suspender; la suspensión inmediata es la única conducta correcta."
    ],
    "questions": [
      {
        "stem": "Un paciente de 28 años con esquizofrenia paranoide ha recibido tratamiento con Haloperidol 10 mg/día durante 8 semanas y posteriormente con Risperidona 6 mg/día durante 8 semanas, ambas con adherencia confirmada por sus cuidadores, persistiendo con alucinaciones auditivas agresivas e ideación delirante severa que le impiden salir a la calle. Su hemograma basal muestra leucocitos 6.500/mm³ con neutrófilos en 4.200/mm³. ¿Cuál es el diagnóstico clínico y el tratamiento farmacológico de elección?",
        "options": [
          {
            "id": "A",
            "text": "Psicosis reactiva; suspender antipsicóticos e iniciar psicoterapia"
          },
          {
            "id": "B",
            "text": "Esquizofrenia refractaria; iniciar tratamiento con Clozapina bajo protocolo de monitorización hematológica"
          },
          {
            "id": "C",
            "text": "Trastorno bipolar maníaco; iniciar monoterapia con carbamazepina"
          },
          {
            "id": "D",
            "text": "Simulación de síntomas; dar el alta sin medicación"
          },
          {
            "id": "E",
            "text": "Esquizofrenia simple; rotar a Clorpromazina en dosis bajas"
          }
        ],
        "correcta": "B",
        "explicacion": "El paciente cumple rigurosamente con los criterios de Esquizofrenia Refractaria (falla terapéutica demostrada a dos antipsicóticos distintos en dosis plenas durante al menos 6 semanas cada uno, incluyendo un antipsicótico atípico como la risperidona). En este escenario clínico, el único fármaco que ha demostrado eficacia estadísticamente significativa y superior es la Clozapina. Dado que su hemograma basal es normal (leucocitos > 3.500 y RAN > 2.000), la indicación correcta es iniciar Clozapina bajo el protocolo estricto de farmacovigilancia hematológica obligatoria (hemograma semanal los primeros 6 meses). Los demás distractores corresponden a errores diagnósticos graves. Perla de examen: En esquizofrenia refractaria tras falla de 2 antipsicóticos plenos, la Clozapina es el tratamiento de elección.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.05.1.002"
      },
      {
        "stem": "Un paciente de 34 años con esquizofrenia refractaria en tratamiento con Clozapina 300 mg/día acude a su control en la semana 10 de terapia. Su hemograma de control protocolizado muestra leucocitos totales de 2.200/mm³ y Recuento Absoluto de Neutrófilos (RAN) de 790/mm³. El paciente no presenta fiebre ni síntomas infecciosos. ¿Cuál es la conducta médica inmediata e ineludible?",
        "options": [
          {
            "id": "A",
            "text": "Reducir la dosis de Clozapina a 150 mg al día y repetir el hemograma en un mes"
          },
          {
            "id": "B",
            "text": "Suspender de inmediato la Clozapina, hospitalizar en aislamiento protector y contraindicar la reexposición de por vida"
          },
          {
            "id": "C",
            "text": "Mantener la Clozapina e indicar amoxicilina profiláctica por vía oral"
          },
          {
            "id": "D",
            "text": "Asociar Biperideno 5 mg cada 12 horas para estimular la médula ósea"
          },
          {
            "id": "E",
            "text": "Asumir error de laboratorio, tranquilizar al paciente y mantener la dosis"
          }
        ],
        "correcta": "B",
        "explicacion": "El paciente presenta una agranulocitosis inducida por Clozapina (RAN < 1.000/mm³, en este caso 790/mm³). Esta es una complicación potencialmente mortal por sepsis neutropénica fulminante. La conducta médica normada e innegociable es: 1) Suspensión inmediata y definitiva de la Clozapina; 2) Hospitalización en aislamiento protector; 3) Evaluación hematológica para eventual uso de Filgrastim (G-CSF); y 4) Registrar la contraindicación absoluta y permanente de reexposición a Clozapina de por vida. Reducir la dosis (A) o esperar (E) expone al paciente a muerte inminente por shock séptico. El biperideno (D) no tiene ninguna acción sobre la médula ósea. Perla de examen: Con Clozapina, un RAN < 1.000/mm³ exige la suspensión inmediata y definitiva del fármaco sin posibilidad de reexposición de por vida.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.05.1.002"
      }
    ],
    "vignetteText": "Hombre de 27 años con diagnóstico de esquizofrenia de 5 años de evolución, con múltiples hospitalizaciones por delirios persecutorios y alucinaciones persistentes a pesar de haber recibido Risperidona 6 mg/día por 8 semanas y posteriormente Olanzapina 20 mg/día por 10 semanas con adherencia estrictamente supervisada por su familia. El psiquiatra tratante decide iniciar Clozapina tras constatar un hemograma basal con leucocitos de 6.200/mm³ y RAN de 3.800/mm³. A la 7.ª semana de tratamiento con Clozapina (dosis 250 mg/día), con notable remisión de sus síntomas psicóticos, el hemograma de control semanal evidencia leucocitos totales de 2.100/mm³ y Recuento Absoluto de Neutrófilos (RAN) de 820/mm³. El paciente se encuentra afebril y asintomático."
  },
  {
    "id": "psiq-12",
    "classId": "psiq-12",
    "tier": 2,
    "blockNum": 3,
    "blockName": "Trastornos Psicóticos & Urgencias Psiquiátricas",
    "topicLabel": "17.12",
    "title": "Trastorno Delirante Crónico vs Psicosis Reactiva Breve",
    "perfilCode": "4.01.1.001",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Norma Técnica de Salud Mental MINSAL · Sin cobertura GES directa para trastorno delirante crónico no esquizofrénico · Derivación a COSAM.",
    "reconstrucciones": "Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026",
    "frecuencia": "Media · Diagnóstico diferencial cronológico y funcional de las psicosis no esquizofrénicas",
    "svg": null,
    "algoTitle": "Algoritmo Diferencial de las Psicosis según Duración, Estructura del Delirio y Funcionalidad",
    "diagram": {
      "title": "Diagnóstico Diferencial de Psicosis: Tiempo de Evolución y Tipo de Delirio",
      "svg": "<svg viewBox=\"0 0 620 339\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#7e22ce\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#7e22ce;font-weight:700}\n    .acc{fill:#7e22ce;stroke:#6b21a8}.accT{fill:#fff}.accS{font-size:8px;fill:#f3e8ff}\n    .dec{fill:#faf5ff;stroke:#d8b4fe;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#7e22ce;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Paciente con Síntomas Psicóticos (Delirios y/o Alucinaciones)</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Evaluar duración temporal exacta y nivel de funcionalidad global extradelirante</text>\n  <path class=\"ln\" d=\"M310,47 V69\"/>\n  <rect class=\"dec\" x=\"70\" y=\"69\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">¿Cuánto tiempo lleva el cuadro y cuál es el tipo de delirio?</text>\n  <text class=\"sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">Diferenciación cronológica y fenomenológica</text>\n  <path class=\"ln\" d=\"M310,108 V138 H158 V148\"/>\n  <path class=\"ln\" d=\"M310,138 H462 V148\"/>\n  <text class=\"lbl\" x=\"158\" y=\"133\" text-anchor=\"middle\">Duración &lt; 1 mes con retorno ad integrum post-estresor</text>\n  <text class=\"lbl\" x=\"462\" y=\"133\" text-anchor=\"middle\">Delirio persistente ≥ 1 mes, no bizarro, funcional</text>\n  <rect class=\"dec\" x=\"12\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"158\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Trastorno Psicótico Breve</text>\n  <text class=\"sub\" x=\"158\" y=\"175\" text-anchor=\"middle\">Inicio súbito post-trauma</text>\n  <text class=\"sub\" x=\"158\" y=\"186\" text-anchor=\"middle\">Resolución completa en &lt; 30 días · Buen pronóstico</text>\n  <rect class=\"warn\" x=\"316\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"462\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Trastorno Delirante Crónico (Paranoia)</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"175\" text-anchor=\"middle\">Ideas de celos, persecución o grandeza</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"186\" text-anchor=\"middle\">Funcionalidad conservada fuera del delirio</text>\n  <path class=\"ln\" d=\"M158,198 V208 H310 V220\"/>\n  <path class=\"ln\" d=\"M462,198 V208 H310 V220\"/>\n  <rect class=\"warn\" x=\"100\" y=\"220\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">Trastorno Esquizofreniforme (1 a 6 meses)</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"247\" text-anchor=\"middle\">Clínica idéntica a esquizofrenia pero duración intermedia</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"258\" text-anchor=\"middle\">Si supera 6 meses = Esquizofrenia</text>\n  <path class=\"ln\" d=\"M310,270 V292\"/>\n  <rect class=\"acc\" x=\"100\" y=\"292\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"307\" text-anchor=\"middle\" font-weight=\"700\">Abordaje Terapéutico en Trastorno Delirante</text>\n  <text class=\"accS\" x=\"310\" y=\"319\" text-anchor=\"middle\">Antipsicóticos atípicos + Psicoterapia de apoyo · NO confrontar directamente el delirio</text>\n</svg>"
    },
    "contexto": "No toda psicosis es esquizofrenia. En la práctica clínica y en el examen EUNACOM, la diferenciación temporal y fenomenológica de los cuadros psicóticos es un ejercicio diagnóstico de alta rentabilidad. El Trastorno Psicótico Breve es una descompensación psicótica florida de inicio súbito desencadenada frecuentemente por un estresor biográfico severo, que dura menos de un mes y cura sin secuelas funcionales (\"restitutio ad integrum\"). Por el contrario, el Trastorno Delirante Crónico (antigua paranoia) se caracteriza por la presencia de una o más ideas delirantes no bizarras y bien sistematizadas (celos, persecución, erotomanía, hipocondría) que persisten por más de un mes, donde el paciente mantiene una vida laboral y social asombrosamente intacta fuera del núcleo del delirio.",
    "contentSections": [
      {
        "subhead": "1. Trastorno Psicótico Breve: Criterios DSM-5 y Manejo",
        "paragraphs": [
          "El <strong>Trastorno Psicótico Breve</strong> se define por la presencia súbita de al menos uno de los siguientes síntomas psicóticos: 1) Delirios; 2) Alucinaciones; 3) Lenguaje desorganizado; o 4) Comportamiento muy desorganizado o catatónico:",
          "• <strong>Criterio Temporal Cardinal:</strong> La duración del episodio es de <strong>al menos un (1) día pero MENOS de un (1) mes</strong> (menos de 30 días), con <strong>retorno final completo al nivel de funcionamiento previo</strong>.",
          "• <strong>Desencadenantes:</strong> Frecuentemente ocurre con \"estresor grave\" (psicosis reactiva tras catástrofes naturales, duelos traumáticos masivos o agresiones violentas) o en el posparto.",
          "• <strong>Tratamiento:</strong> Contención en ambiente protegido, antipsicóticos a dosis bajas por tiempo limitado (semanas a pocos meses) y psicoterapia de apoyo. El pronóstico a largo plazo es excelente."
        ]
      },
      {
        "subhead": "2. Trastorno Delirante Crónico (Paranoia): Fenomenología y Subtipos",
        "paragraphs": [
          "El <strong>Trastorno Delirante</strong> se caracteriza por la presencia de una o más <strong>ideas delirantes que persisten durante al menos un (1) mes</strong>:",
          "• <strong>Criterio de Exclusión Negativo:</strong> Nunca se ha cumplido el Criterio A de esquizofrenia (no hay alucinaciones preponderantes, ni lenguaje desorganizado, ni catatonía, ni síntomas negativos). Si hay alucinaciones, son secundarias al delirio (ej. oler veneno en la comida en delirio de perjuicio).",
          "• <strong>Preservación Funcional:</strong> Fuera del impacto directo de la idea delirante, <strong>el funcionamiento psicosocial no está marcadamente deteriorado ni el comportamiento es manifiestamente extravagante o bizarro</strong>. El paciente suele conservar su empleo, su autocuidado y su discurso formal.",
          "• <strong>Subtipos Clínicos Clásicos:</strong>",
          "  - <em>Celotípico (Síndrome de Otelo):</em> Convicción delirante inamovible de que el cónyuge le es infiel. <strong>Es de muy alto riesgo de violencia intrafamiliar y homicidio.</strong>",
          "  - <em>Persecutorio:</em> Creencia de que es víctima de conspiración, espionaje o difamación.",
          "  - <em>Erotomaníaco (Síndrome de Clérambault):</em> Convicción de que una persona de estatus superior (famoso, jefe) está enamorada de él en secreto.",
          "  - <em>Somático:</em> Creencia delirante de estar infestado por parásitos (Síndrome de Ekbom) o emitir mal olor corporal.",
          "  - <em>Grandiosidad:</em> Convicción de poseer un talento o descubrimiento extraordinario no reconocido."
        ]
      },
      {
        "subhead": "3. Diagnóstico Diferencial Cronológico de los Trastornos Psicóticos",
        "paragraphs": [
          "La cronología es la clave decisiva en las viñetas del EUNACOM:",
          "• <strong>Menos de 1 mes:</strong> <strong>Trastorno Psicótico Breve</strong> (con restitución completa).",
          "• <strong>Entre 1 mes y 6 meses:</strong> <strong>Trastorno Esquizofreniforme</strong> (síntomas idénticos a esquizofrenia pero duración transitoria; si supera los 6 meses se reclasifica como esquizofrenia).",
          "• <strong>Más de 6 meses (con síntomas negativos y deterioro global):</strong> <strong>Esquizofrenia</strong>.",
          "• <strong>Más de 1 mes (delirio estructurado no bizarro con funcionalidad conservada):</strong> <strong>Trastorno Delirante Crónico</strong>.",
          "• <strong>Manejo del Trastorno Delirante:</strong> Alianza terapéutica difícil por falta de insight. El médico <strong>NUNCA debe confrontar agresivamente el delirio</strong> (rompe la relación) <strong>ni tampoco validarlo o reforzarlo</strong>; se adopta una postura neutral de escucha empática enfocada en el sufrimiento que la idea genera. Fármacos: antipsicóticos atípicos (Aripiprazol, Risperidona)."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial Cronológico y Clínico del Espectro Psicótico",
      "headers": [
        "Trastorno Psicótico",
        "Duración Temporal Requerida",
        "Tipo de Delirio y Síntomas",
        "Nivel de Deterioro Funcional",
        "Pronóstico Global"
      ],
      "rows": [
        [
          "Trastorno Psicótico Breve",
          "≥ 1 día y < 1 mes (< 30 días)",
          "Florido, polimorfo, reactivo a estresor",
          "Grave agudo pero con restitución completa ad integrum",
          "Excelente"
        ],
        [
          "Trastorno Esquizofreniforme",
          "≥ 1 mes y < 6 meses",
          "Idéntico a esquizofrenia (positivos y negativos)",
          "Moderado a severo durante el episodio",
          "Reservado (60-80% progresa a esquizofrenia)"
        ],
        [
          "Esquizofrenia",
          "≥ 6 meses continuos (≥ 1 mes activo)",
          "Bizarro, delirios de influencia, alucinaciones auditivas",
          "Severo, progresivo, afecto plano y abulia",
          "Crónico / Manejo de rehabilitación GES"
        ],
        [
          "Trastorno Delirante Crónico",
          "≥ 1 mes (suele llevar años)",
          "No bizarro, bien estructurado y verosímil (celos, daño)",
          "CONSERVADO en áreas no vinculadas al delirio",
          "Crónico refractario a psicofármacos"
        ]
      ]
    },
    "vignette": {
      "title": "Caso Clínico Tipo EUNACOM",
      "text": "Hombre de 52 años, contador general de una empresa transnacional con excelente desempeño profesional, es llevado a la consulta médica por su esposa. Ella refiere llorando que desde hace 8 meses su esposo vive obsesionado con la idea de que ella le es infiel con el conserje del edificio. El paciente revisa a diario su teléfono, inspecciona minuciosamente su ropa interior buscando manchas, contrató detectives privados y la sigue en su trayecto al trabajo. Al ser interrogado en privado, el paciente se muestra perfectamente vestido, lúcido, con un discurso educado y coherente, explicando: \"Doctor, yo amo a mi esposa y soy un hombre racional, pero tengo pruebas matemáticas de su traición; cada vez que ella enciende la luz de la sala le está enviando una señal en código al conserje\". Niega escuchar voces, su estado de ánimo es eutímico salvo por la angustia de la supuesta infidelidad, y en su trabajo sigue siendo considerado el mejor profesional del área.",
      "conducta": "El paciente presenta un Trastorno Delirante Crónico subtipo Celotípico (Síndrome de Otelo): presencia de una idea delirante bien estructurada, no bizarra y verosímil (infidelidad conyugal) de más de 1 mes de evolución (8 meses), sin alucinaciones auditivas, ni desorganización del pensamiento, ni síntomas negativos, y con una funcionalidad sociolaboral completamente conservada fuera del núcleo del delirio. La conducta médica correcta es: 1) Evaluar el riesgo de violencia intrafamiliar (la celotipia delirante es de altísimo riesgo de agresiones a la pareja); 2) Iniciar tratamiento con antipsicóticos atípicos (ej. Risperidona o Aripiprazol a dosis moderadas); 3) Proponer una intervención psicoterapéutica individual y de apoyo sin confrontar de forma directa la creencia delirante (\"no discuto lo que usted siente, pero veo que esto le genera mucho sufrimiento y desgaste\"); y 4) Derivar a nivel secundario (COSAM / Psiquiatría)."
    },
    "explicacion": "El paciente presenta un Trastorno Delirante Crónico subtipo Celotípico (Síndrome de Otelo): presencia de una idea delirante bien estructurada, no bizarra y verosímil (infidelidad conyugal) de más de 1 mes de evolución (8 meses), sin alucinaciones auditivas, ni desorganización del pensamiento, ni síntomas negativos, y con una funcionalidad sociolaboral completamente conservada fuera del núcleo del delirio. La conducta médica correcta es: 1) Evaluar el riesgo de violencia intrafamiliar (la celotipia delirante es de altísimo riesgo de agresiones a la pareja); 2) Iniciar tratamiento con antipsicóticos atípicos (ej. Risperidona o Aripiprazol a dosis moderadas); 3) Proponer una intervención psicoterapéutica individual y de apoyo sin confrontar de forma directa la creencia delirante (\"no discuto lo que usted siente, pero veo que esto le genera mucho sufrimiento y desgaste\"); y 4) Derivar a nivel secundario (COSAM / Psiquiatría).",
    "keyPoints": [
      "El Trastorno Psicótico Breve dura entre 1 día y menos de 1 mes, resolviendo con restitución completa ad integrum.",
      "El Trastorno Esquizofreniforme tiene una duración de entre 1 y 6 meses; si los síntomas superan los 6 meses se diagnostica Esquizofrenia.",
      "El Trastorno Delirante Crónico exige delirios no bizarros de ≥ 1 mes de duración, con preservación de la funcionalidad global fuera del núcleo delirante.",
      "En el trastorno delirante NO hay alucinaciones prominentes, ni lenguaje desorganizado, ni síntomas negativos.",
      "El subtipo celotípico (Síndrome de Otelo) es de muy alto riesgo de violencia física hacia la pareja y exige evaluación prioritaria de seguridad.",
      "Regla relacional: Nunca confrontar directamente el delirio ni validar su veracidad; adoptar una postura empática enfocada en el malestar subjetivo del paciente."
    ],
    "questions": [
      {
        "stem": "Una mujer de 48 años, ingeniera en sistemas con excelente desempeño laboral, acude al cuartel de policía y posteriormente a la posta médica denunciando que sus vecinos de departamento han taladrado microscópicamente el piso para introducir gas tóxico que le causa ardor en la piel al dormir. Al examen mental se presenta pulcra, colaboradora, con discurso fluido y coherente, sin alteraciones del lenguaje ni síntomas negativos, y niega escuchar voces. El cuadro lleva 4 meses de evolución sin deterioro en otras áreas de su vida. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Esquizofrenia paranoide avanzada"
          },
          {
            "id": "B",
            "text": "Trastorno Delirante Crónico tipo persecutorio/somático"
          },
          {
            "id": "C",
            "text": "Trastorno psicótico breve reactivo"
          },
          {
            "id": "D",
            "text": "Demencia frontotemporal incipiente"
          },
          {
            "id": "E",
            "text": "Trastorno de ansiedad generalizada"
          }
        ],
        "correcta": "B",
        "explicacion": "La paciente presenta una idea delirante estructurada (persecutoria con tinte somático) que persiste por más de 1 mes (4 meses de evolución) en ausencia de los síntomas cardinales de esquizofrenia (no hay alucinaciones auditivas, disgregación del lenguaje ni síntomas negativos como abulia o aplanamiento) y con conservación intacta del funcionamiento profesional y social fuera de la temática del delirio. Corresponde clásicamente a un Trastorno Delirante Crónico. La esquizofrenia (A) cursa con disfunción sociolaboral global y síntomas negativos. El trastorno psicótico breve (C) dura menos de 30 días. Perla de examen: La conservación de la funcionalidad laboral e interpersonal fuera de la temática delirante es el sello característico del Trastorno Delirante Crónico.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.1.001"
      },
      {
        "stem": "Un comerciante de 38 años sin antecedentes psiquiátricos pierde su local comercial en un incendio intencional. A los dos días comienza con agitación psicomotora, insomnio total, llanto incontrolable y afirmaciones de que \"ve demonios que le ordenan caminar en círculos\". Es hospitalizado y tratado transitoriamente con dosis bajas de Risperidona. Al día 18 del cuadro, los síntomas psicóticos desaparecen por completo, encontrándose orientado, reflexivo y reincorporándose plenamente a sus actividades comerciales. ¿Cuál es el diagnóstico retrospectivo definitivo?",
        "options": [
          {
            "id": "A",
            "text": "Esquizofrenia hebefrénica"
          },
          {
            "id": "B",
            "text": "Trastorno Psicótico Breve con desencadenante grave"
          },
          {
            "id": "C",
            "text": "Trastorno esquizofreniforme residual"
          },
          {
            "id": "D",
            "text": "Trastorno de personalidad límite"
          },
          {
            "id": "E",
            "text": "Trastorno bipolar en manía pura"
          }
        ],
        "correcta": "B",
        "explicacion": "El cuadro se inició bruscamente tras un estresor biográfico masivo (pérdida del sustento laboral en un incendio), cursó con síntomas psicóticos floridos (alucinaciones, delirio, desorganización) y se resolvió completamente con restitución ad integrum a los 18 días de evolución (dentro del rango temporal menor a 1 mes). El diagnóstico DSM-5 definitivo es Trastorno Psicótico Breve con desencadenante grave (anteriormente llamado psicosis reactiva breve). El trastorno esquizofreniforme (C) requiere una duración de entre 1 y 6 meses. La esquizofrenia (A) requiere al menos 6 meses de signos continuos. Perla de examen: El trastorno psicótico breve dura menos de 30 días y se resuelve con restitución completa al estado premórbido.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.1.001"
      }
    ],
    "vignetteText": "Hombre de 52 años, contador general de una empresa transnacional con excelente desempeño profesional, es llevado a la consulta médica por su esposa. Ella refiere llorando que desde hace 8 meses su esposo vive obsesionado con la idea de que ella le es infiel con el conserje del edificio. El paciente revisa a diario su teléfono, inspecciona minuciosamente su ropa interior buscando manchas, contrató detectives privados y la sigue en su trayecto al trabajo. Al ser interrogado en privado, el paciente se muestra perfectamente vestido, lúcido, con un discurso educado y coherente, explicando: \"Doctor, yo amo a mi esposa y soy un hombre racional, pero tengo pruebas matemáticas de su traición; cada vez que ella enciende la luz de la sala le está enviando una señal en código al conserje\". Niega escuchar voces, su estado de ánimo es eutímico salvo por la angustia de la supuesta infidelidad, y en su trabajo sigue siendo considerado el mejor profesional del área."
  },
  {
    "id": "psiq-13",
    "classId": "psiq-13",
    "tier": 3,
    "blockNum": 3,
    "blockName": "Trastornos Psicóticos & Urgencias Psiquiátricas",
    "topicLabel": "17.13",
    "title": "Síndrome Neuroléptico Maligno (SNM): Hipertermia, Rigidez, CPK y Manejo",
    "perfilCode": "1.13.2.001",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Derivar",
    "ges": "Emergencia Médica Vital en Servicio de Urgencias · Traslado inmediato a Unidad de Paciente Crítico (UPC).",
    "reconstrucciones": "Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026",
    "frecuencia": "Máxima gravedad clínica · Urgencia médica iatrogénica de diagnóstico diferencial obligatorio",
    "svg": null,
    "algoTitle": "Algoritmo de Reconocimiento y Rescate en Urgencias: SNM vs Síndrome Serotoninérgico",
    "diagram": {
      "title": "Algoritmo de Manejo de Urgencias del Síndrome Neuroléptico Maligno",
      "svg": "<svg viewBox=\"0 0 620 400\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#7e22ce\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#7e22ce;font-weight:700}\n    .acc{fill:#7e22ce;stroke:#6b21a8}.accT{fill:#fff}.accS{font-size:8px;fill:#f3e8ff}\n    .dec{fill:#faf5ff;stroke:#d8b4fe;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#7e22ce;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Paciente con Tratamiento Antipsicótico que Presenta Deterioro Agudo</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Aumento reciente de dosis o inicio de neuroléptico de alta potencia (Haloperidol)</text>\n  <path class=\"ln\" d=\"M310,47 V69\"/>\n  <rect class=\"warn\" x=\"100\" y=\"69\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Tétrada Clínica Cardinal del SNM</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">1. Hipertermia (&gt; 38-40 °C) · 2. Rigidez \"en caño de plomo\"</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"107\" text-anchor=\"middle\">3. Disautonomía · 4. Compromiso de conciencia</text>\n  <path class=\"ln\" d=\"M310,119 V141\"/>\n  <rect class=\"dec\" x=\"70\" y=\"141\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"156\" text-anchor=\"middle\" font-weight=\"700\">Diagnóstico Diferencial: ¿Es SNM o Síndrome Serotoninérgico?</text>\n  <text class=\"sub\" x=\"310\" y=\"168\" text-anchor=\"middle\">Examen de reflejos osteotendinosos y clonus</text>\n  <path class=\"ln\" d=\"M310,180 V210 H158 V220\"/>\n  <path class=\"ln\" d=\"M310,210 H462 V220\"/>\n  <text class=\"lbl\" x=\"158\" y=\"205\" text-anchor=\"middle\">Rigidez plástica, hiporreflexia, CPK masiva (&gt; 1.000-10.000 UI/L)</text>\n  <text class=\"lbl\" x=\"462\" y=\"205\" text-anchor=\"middle\">Hiperreflexia, clonus espontáneo/inducible, diarrea</text>\n  <rect class=\"crit\" x=\"12\" y=\"220\" width=\"292\" height=\"39\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"158\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">Síndrome Neuroléptico Maligno (SNM)</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"247\" text-anchor=\"middle\">Bloqueo dopaminérgico · Rabdomiólisis e injuria renal aguda</text>\n  <rect class=\"dec\" x=\"316\" y=\"220\" width=\"292\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"462\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">Síndrome Serotoninérgico (Hunter)</text>\n  <text class=\"sub\" x=\"462\" y=\"247\" text-anchor=\"middle\">Exceso 5-HT · Clonus ocular · Manejo con Ciproheptadina</text>\n  <path class=\"ln\" d=\"M158,259 V269 H310 V281\"/>\n  <path class=\"ln\" d=\"M462,259 V269 H310 V281\"/>\n  <rect class=\"crit\" x=\"100\" y=\"281\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"296\" text-anchor=\"middle\" font-weight=\"700\">Conducta Inmediata Innegociable en Urgencias</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"308\" text-anchor=\"middle\">SUSPENSIÓN INMEDIATA DEL ANTIPSICÓTICO · Traslado a UPC · Enfriamiento físico externo</text>\n  <path class=\"ln\" d=\"M310,320 V342\"/>\n  <rect class=\"acc\" x=\"100\" y=\"342\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"357\" text-anchor=\"middle\" font-weight=\"700\">Hidratación Masiva y Fármacos Específicos</text>\n  <text class=\"accS\" x=\"310\" y=\"369\" text-anchor=\"middle\">Suero fisiológico EV (meta diuresis &gt; 2 mL/kg/h)</text>\n  <text class=\"accS\" x=\"310\" y=\"380\" text-anchor=\"middle\">Bromocriptina (agonista D2) o Dantroleno EV</text>\n</svg>"
    },
    "contexto": "El Síndrome Neuroléptico Maligno (SNM) es una reacción adversa idiosincrática potencialmente mortal desencadenada por el bloqueo dopaminérgico agudo y masivo en los ganglios basales y el hipotálamo, secundario al uso de cualquier fármaco antipsicótico (con mayor riesgo en neurolépticos típicos de alta potencia como Haloperidol o tras la suspensión brusca de agonistas dopaminérgicos en pacientes con Parkinson). Presenta una mortalidad histórica del 10 al 20% atribuida a falla multiorgánica y shock. En el EUNACOM se evalúa con rigor: la tétrada clásica (hipertermia, rigidez extrema en \"tubo de plomo\", inestabilidad autonómica y alteración del sensorio), la elevación extrema de la creatina fosfoquinasa (CPK), la diferenciación con el Síndrome Serotoninérgico (donde hay hiperreflexia y clonus, no rigidez plástica), la suspensión inmediata del fármaco y la reposición hídrica agresiva para prevenir la falla renal por rabdomiólisis.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología del Bloqueo Dopaminérgico Agudo e Incidencia",
        "paragraphs": [
          "El SNM se origina por una <strong>depleción o bloqueo brusco de la transmisión dopaminérgica</strong> en dos sitios neuroanatómicos cardinales:",
          "• <strong>Hipotálamo anterior:</strong> El bloqueo de receptores D2 altera el centro termorregulador central, gatillando una pérdida del control de la temperatura corporal e <strong>hipertermia severa</strong> que puede superar los 40 °C.",
          "• <strong>Vía Nigroestriada (ganglios basales):</strong> El bloqueo D2 genera una contracción muscular tónica masiva y desregulada, produciendo una <strong>rigidez muscular extrema y generalizada (rigidez en \"caño de plomo\" o plástico-cérea)</strong>.",
          "• <em>Hipermetabolismo muscular y Rabdomiólisis:</em> La contracción tónica sostenida destruye los miocitos estriados, liberando mioglobina a la circulación y provocando una elevación masiva de la <strong>Creatina Fosfoquinasa (CPK > 1.000 a 50.000 UI/L)</strong>, con alto riesgo de necrosis tubular aguda por mioglobinuria y falla renal aguda anúrica.",
          "<em>Factores de riesgo:</em> Dosis altas o escalamiento rápido de antipsicóticos, formulaciones de depósito parenterales, deshidratación, agitación previa y sexo masculino."
        ]
      },
      {
        "subhead": "2. Tétrada Clínica Cardinal y Hallazgos de Laboratorio",
        "paragraphs": [
          "La presentación clínica típica se desarrolla en un período de 24 a 72 horas y consta de cuatro pilares inseparables:",
          "<strong>1. Hipertermia:</strong> Temperatura axilar o rectal típicamente <strong>> 38 °C</strong>, alcanzando frecuentemente 39.5 a 41 °C, refractaria a antipiréticos convencionales.",
          "<strong>2. Rigidez Muscular Severa:</strong> Rigidez generalizada \"en caño de plomo\" o resistencia plástica uniforme en todas las articulaciones, con posible rigidez en rueda dentada.",
          "<strong>3. Inestabilidad Autonómica (Disautonomía):</strong> Presión arterial lábil y fluctuante (picos hipertensivos alternados con hipotensión), <strong>taquicardia sinusal marcada (> 100-120 lpm)</strong>, diaforesis profusa (sudoración copiosa), taquipnea e incontinencia urinaria.",
          "<strong>4. Alteración del Nivel de Conciencia:</strong> Evoluciona progresivamente desde confusión leve, mutismo o estupor catatónico hasta el coma profundo.",
          "<strong>Laboratorio característico:</strong> <strong>CPK marcadamente elevada</strong> (habitualmente > 1.000 UI/L y frecuentemente > 10.000 UI/L), leucocitosis neutrofílica importante (15.000 a 30.000/mm³), elevación de nitrógeno ureico y creatinina, acidosis metabólica láctica y mioglobinuria en sedimento de orina."
        ]
      },
      {
        "subhead": "3. Diagnóstico Diferencial Crítico: SNM vs Síndrome Serotoninérgico vs Hipertermia Maligna",
        "paragraphs": [
          "Esta diferenciación es una de las preguntas clásicas del examen:",
          "• <strong>Síndrome Serotoninérgico (Criterios de Hunter):</strong> Gatillado por fármacos serotoninérgicos (ISRS, IRSN, Tramadol, IMAO, éxtasis/MDMA). A diferencia del SNM, cursa con <strong>HIPERREFLEXIA osteotendinosa marcada</strong>, <strong>CLONUS espontáneo, inducible u ocular</strong>, diarrea profusa, temblor fino y midriasis bilateral. En el serotoninérgico la rigidez es menor y se localiza más en extremidades inferiores.",
          "• <strong>Hipertermia Maligna:</strong> Ocurre de forma hiperaguda en el pabellón quirúrgico tras la exposición a <strong>anestésicos inhalatorios halogenados (sevoflurano, halotano) o succinilcolina</strong> por mutación del receptor de rianodina (RYR1). Rigidez masiva e hipertermia de minutos.",
          "• <strong>Infección del SNC (Meningitis / Encefalitis):</strong> Descartar siempre con punción lumbar si hay duda clínica."
        ]
      },
      {
        "subhead": "4. Protocolo de Rescate y Tratamiento en Unidad de Paciente Crítico (UPC)",
        "paragraphs": [
          "El SNM es una emergencia médica que exige ingreso inmediato a UPC:",
          "<strong>1. Medida Inicial Absoluta: SUSPENDER INMEDIATAMENTE EL ANTIPSICÓTICO</strong> causante (y cualquier otro fármaco bloqueador dopaminérgico como metoclopramida).",
          "<strong>2. Medidas de Soporte Vital:</strong> Enfriamiento físico activo (mantas térmicas frías, compresas heladas axilares e inguinales, sueros fríos), monitorización hemodinámica continua y protección de la vía aérea.",
          "<strong>3. Hidratación Endovenosa Agresiva:</strong> Infusión masiva de <strong>suero fisiológico (3 a 6 L/día)</strong> con el objetivo de asegurar una <strong>diuresis forzada de al menos 2 a 3 mL/kg/hora</strong> para arrastrar la mioglobina y prevenir la falla renal aguda oligúrica; alcalinización urinaria con bicarbonato de sodio si coexiste acidosis grave.",
          "<strong>4. Farmacoterapia Específica de Rescate:</strong>",
          "• <strong>Bromocriptina:</strong> Agonista dopaminérgico D2 oral/enteral (dosis 2.5 a 5 mg cada 8 horas, hasta 20 mg/día); revierte el bloqueo dopaminérgico hipotalámico y estriatal.",
          "• <strong>Amantadina:</strong> Agonista dopaminérgico alternativo (100 a 200 mg cada 12 horas).",
          "• <strong>Dantroleno Sódico:</strong> Relajante muscular periférico que actúa bloqueando la liberación de calcio desde el retículo sarcoplásmico (dosis 1 a 2.5 mg/kg EV en bolo, repetible hasta 10 mg/kg/día); indicado en rigidez extrema con hipertermia severa e hipercatabolismo."
        ]
      },
      {
        "subhead": "5. Reintroducción Segura de Psicofármacos Post-Resolución",
        "paragraphs": [
          "Una vez resuelto el cuadro (normalización de CPK y temperatura por al menos 14 días), si el paciente requiere tratamiento antipsicótico por su enfermedad de base, se debe esperar un <strong>mínimo de dos (2) semanas</strong> tras la recuperación completa, seleccionar un antipsicótico de segunda generación con baja afinidad D2 (como Quetiapina o Clozapina), titular a dosis mínimas eficaces y monitorizar estrechamente la temperatura y la CPK."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial Clínico: Síndrome Neuroléptico Maligno vs Síndrome Serotoninérgico",
      "headers": [
        "Característica",
        "Síndrome Neuroléptico Maligno (SNM)",
        "Síndrome Serotoninérgico (Criterios de Hunter)"
      ],
      "rows": [
        [
          "Fármacos desencadenantes",
          "Antipsicóticos (Haloperidol, Risperidona) · Retiro de Levodopa",
          "ISRS, IRSN, Tramadol, Tricíclicos, IMAO, MDMA (éxtasis)"
        ],
        [
          "Comienzo temporal",
          "Subagudo e insidioso (días a semanas post-cambio de dosis)",
          "Hiperagudo (horas después de una coingesta o sobredosis)"
        ],
        [
          "Tono muscular",
          "RIGIDEZ EN \"CAÑO DE PLOMO\" extrema, uniforme y generalizada",
          "Rigidez leve a moderada (predomina en miembros inferiores)"
        ],
        [
          "Reflejos osteotendinosos",
          "HIPORREFLEXIA o reflejos disminuidos por hipertonía plástica",
          "HIPERREFLEXIA MARCADA Y CLONUS (espontáneo / inducible)"
        ],
        [
          "Pupilas y Gastrointestinal",
          "Pupilas normales · Estreñimiento por anticolinérgicos",
          "MIDRIASIS bilateral marcada · DIARREA profusa y borborigmos"
        ],
        [
          "Tratamiento específico",
          "Dantroleno EV + Bromocriptina (agonista dopaminérgico)",
          "Ciproheptadina (antagonista 5-HT2A) + Benzodiacepinas"
        ]
      ]
    },
    "severityTable": {
      "title": "Marcadores de Gravedad y Criterios de Falla Multiorgánica en el SNM",
      "headers": [
        "Parámetro de Laboratorio",
        "Valor Crítico / Hallazgo",
        "Mecanismo Fisiopatológico",
        "Consecuencia Clínica Potencial"
      ],
      "rows": [
        [
          "Creatina Fosfoquinasa (CPK)",
          "> 10.000 a 50.000 UI/L",
          "Rabdomiólisis masiva por hipercontractilidad tónica",
          "Necrosis tubular aguda mioglobinúrica"
        ],
        [
          "Temperatura Corporal",
          "> 40.0 °C (hiperpirexia central)",
          "Parálisis del centro termorregulador hipotalámico",
          "Edema cerebral, convulsiones y colapso circulatorio"
        ],
        [
          "Creatinina y BUN",
          "BUN/Crea > 20 con oliguria (< 0.5 mL/kg/h)",
          "Falla renal aguda por mioglobina y vasoconstricción",
          "Necesidad de terapia de reemplazo renal (Hemodiálisis)"
        ],
        [
          "Recuento Leucocitario",
          "> 20.000 a 30.000/mm³ (neutrofilia sin foco)",
          "Respuesta inflamatoria sistémica hipermetabólica",
          "Simulación de sepsis grave"
        ],
        [
          "Gases Arteriales",
          "Acidosis metabólica láctica (pH < 7.25)",
          "Hipoperfusión tisular y metabolismo anaeróbico muscular",
          "Arritmias ventriculares y paro cardíaco"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Protocolo Terapéutico Escalonado en Unidad de Paciente Crítico para SNM",
      "headers": [
        "Fase / Objetivo",
        "Fármaco o Intervención",
        "Dosis y Vía de Administración",
        "Metas Clínicas y Advertencias"
      ],
      "rows": [
        [
          "1. Medida Vital Inmediata",
          "SUSPENSIÓN DE ANTIPSICÓTICOS",
          "Cese total e inmediato de todo bloqueador D2",
          "No retrasar la suspensión esperando exámenes de laboratorio"
        ],
        [
          "2. Soporte Hemodinámico",
          "Suero Fisiológico al 0.9% enérgico",
          "3.000 a 6.000 mL en 24 h endovenoso",
          "Meta estricta: Diuresis > 2 a 3 mL/kg/h para lavado renal"
        ],
        [
          "3. Enfriamiento Físico",
          "Medidas físicas externas activas",
          "Compresas frías en cuello/axilas/ingles, mantas térmicas",
          "Evitar antipiréticos comunes (paracetamol no actúa en termorregulación hipotalámica)"
        ],
        [
          "4. Agonista Dopaminérgico",
          "Bromocriptina (oral o sonda)",
          "2.5 a 5 mg cada 8 horas (titulable hasta 20 mg/día)",
          "Restaura el tono dopaminérgico central en hipotálamo"
        ],
        [
          "5. Relajante Muscular Directo",
          "Dantroleno Sódico EV",
          "1 a 2.5 mg/kg en bolo EV cada 6 h (máximo 10 mg/kg/día)",
          "Bloquea canal de rianodina muscular · Suspender si hepatotoxicidad"
        ]
      ]
    },
    "vignette": {
      "title": "Caso Clínico Tipo EUNACOM",
      "text": "Hombre de 31 años con diagnóstico de esquizofrenia paranoide, ingresado hace 4 días al hospital por descompensación psicótica agresiva, habiéndosele administrado Haloperidol 10 mg IM al día y Clorpromazina 100 mg VO al día. En el pase de visita de la mañana, la enfermera alerta que el paciente se encuentra con compromiso progresivo de conciencia, soporoso, sin responder a preguntas y con diaforesis profusa que empapa las sábanas. Al examen físico: temperatura axilar de 39.8 °C, PA 175/105 mmHg muy lábil, FC 128 lpm regular, taquipneico a 28 rpm. Al movilizar las cuatro extremidades se evidencia una rigidez extrema y continua que opone gran resistencia al movimiento pasivo (\"en caño de plomo\"), con hiporreflexia osteotendinosa. El examen pulmonar y abdominal no muestran focos infecciosos evidentes. Los exámenes urgentes revelan: CPK 16.800 UI/L, leucocitos 19.500/mm³ con desviación a la izquierda, creatinina 2.3 mg/dL y orina de color pardo oscuro.",
      "conducta": "El paciente presenta un cuadro clínico inequívoco de Síndrome Neuroléptico Maligno (SNM): desarrollo de la tétrada clásica (hipertermia severa de 39.8 °C, rigidez muscular plástica en caño de plomo, inestabilidad autonómica con taquicardia/hipertensión lábil/diaforesis y compromiso de conciencia) tras el inicio reciente de antipsicóticos de alta potencia, acompañado del sello biológico de rabdomiólisis extrema (CPK > 16.000 UI/L, leucocitosis y falla renal aguda mioglobinúrica). La conducta médica inmediata e innegociable comprende: 1) Suspender de forma inmediata y definitiva todos los antipsicóticos; 2) Trasladar de urgencia a una Unidad de Paciente Crítico (UPC); 3) Iniciar hidratación endovenosa abundante y masiva con suero fisiológico para forzar diuresis (> 2-3 mL/kg/h) y prevenir la nefropatía por mioglobina; 4) Medidas de enfriamiento físico activo; y 5) Administrar fármacos específicos de rescate: Bromocriptina (agonista dopaminérgico D2) y/o Dantroleno sódico endovenoso."
    },
    "explicacion": "El paciente presenta un cuadro clínico inequívoco de Síndrome Neuroléptico Maligno (SNM): desarrollo de la tétrada clásica (hipertermia severa de 39.8 °C, rigidez muscular plástica en caño de plomo, inestabilidad autonómica con taquicardia/hipertensión lábil/diaforesis y compromiso de conciencia) tras el inicio reciente de antipsicóticos de alta potencia, acompañado del sello biológico de rabdomiólisis extrema (CPK > 16.000 UI/L, leucocitosis y falla renal aguda mioglobinúrica). La conducta médica inmediata e innegociable comprende: 1) Suspender de forma inmediata y definitiva todos los antipsicóticos; 2) Trasladar de urgencia a una Unidad de Paciente Crítico (UPC); 3) Iniciar hidratación endovenosa abundante y masiva con suero fisiológico para forzar diuresis (> 2-3 mL/kg/h) y prevenir la nefropatía por mioglobina; 4) Medidas de enfriamiento físico activo; y 5) Administrar fármacos específicos de rescate: Bromocriptina (agonista dopaminérgico D2) y/o Dantroleno sódico endovenoso.",
    "keyPoints": [
      "El Síndrome Neuroléptico Maligno se caracteriza por la tétrada: hipertermia, rigidez muscular en \"caño de plomo\", inestabilidad autonómica y alteración del sensorio.",
      "La elevación masiva de la CPK (> 1.000 a > 10.000 UI/L) secundaria a rabdomiólisis es el hallazgo bioquímico distintivo del SNM.",
      "Diferencia cardinal con el Síndrome Serotoninérgico: el SNM cursa con rigidez en caño de plomo e hiporreflexia; el serotoninérgico cursa con hiperreflexia marcada y clonus.",
      "La primera medida terapéutica obligatoria y vital es la suspensión inmediata de todos los fármacos antipsicóticos.",
      "La hidratación endovenosa masiva con suero salino para forzar diuresis (> 2 mL/kg/h) es indispensable para evitar la necrosis tubular aguda por mioglobinuria.",
      "Los fármacos específicos de rescate en UPC son la Bromocriptina (agonista D2) y el Dantroleno sódico EV (relajante muscular del retículo sarcoplásmico).",
      "Trampa de examen: Ante la sospecha de SNM, jamás administrar antipiréticos comunes esperando que baje la fiebre sin suspender el antipsicótico; el paracetamol no revierte la hipertermia central dopaminérgica."
    ],
    "questions": [
      {
        "stem": "Un paciente de 29 años con esquizofrenia en tratamiento hospitalario con Haloperidol 15 mg/día presenta fiebre de 39.5 °C, diaforesis profusa, presión arterial fluctuante entre 160/100 y 90/60 mmHg, taquicardia de 125 lpm y estupor. Al examen físico destaca rigidez muscular generalizada en caño de plomo. El laboratorio urgente informa leucocitos de 21.000/mm³ y CPK en 14.200 UI/L. ¿Cuál es el diagnóstico más probable y la primera medida que debe implementarse?",
        "options": [
          {
            "id": "A",
            "text": "Meningitis bacteriana aguda; iniciar Ceftriaxona y Vancomicina manteniendo el antipsicótico"
          },
          {
            "id": "B",
            "text": "Síndrome Neuroléptico Maligno; suspender de inmediato el Haloperidol e iniciar hidratación endovenosa masiva y traslado a UPC"
          },
          {
            "id": "C",
            "text": "Distonía laríngea aguda; administrar Biperideno 5 mg intramuscular"
          },
          {
            "id": "D",
            "text": "Síndrome serotoninérgico; administrar Ciproheptadina oral exclusiva"
          },
          {
            "id": "E",
            "text": "Catatonía periódica benigna; aumentar la dosis de Haloperidol a 30 mg al día"
          }
        ],
        "correcta": "B",
        "explicacion": "El paciente presenta la presentación clásica del Síndrome Neuroléptico Maligno (SNM): hipertermia severa, rigidez muscular plástica en caño de plomo, inestabilidad autonómica, compromiso de conciencia y elevación masiva de la CPK con leucocitosis en contexto de uso de antipsicóticos típicos. La primera medida obligatoria y vital es la suspensión inmediata del fármaco bloqueador dopaminérgico (Haloperidol) y el traslado a UPC para soporte hemodinámico e hidratación endovenosa agresiva para prevenir la falla renal por rabdomiólisis. Mantener el antipsicótico o aumentarlo (A y E) es una conducta mortal. El biperideno (C) no es efectivo para el SNM. Perla de examen: En el SNM, suspender de inmediato el antipsicótico es la primera medida innegociable.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.13.2.001"
      },
      {
        "stem": "Un paciente de 35 años que consume Paroxetina 40 mg/día por depresión acude a urgencias tras ingerir 200 mg de Tramadol por un lumbago agudo. A las pocas horas presenta agitación psicomotora, diarrea acuosa profusa, temblor y fiebre de 38.6 °C. Al examen físico destaca midriasis bilateral reactiva, taquicardia de 120 lpm, hiperreflexia osteotendinosa patológica generalizada (4+) y clonus inducible en ambos tobillos. ¿Cuál es el diagnóstico diferencial correcto frente al síndrome neuroléptico maligno?",
        "options": [
          {
            "id": "A",
            "text": "Síndrome Neuroléptico Maligno; cursa con clonus e hiperreflexia"
          },
          {
            "id": "B",
            "text": "Síndrome Serotoninérgico; caracterizado por la presencia distintiva de hiperreflexia, clonus y diarrea por exceso de serotonina"
          },
          {
            "id": "C",
            "text": "Intoxicación colinérgica por organofosforados"
          },
          {
            "id": "D",
            "text": "Tétanos generalizado cefálico"
          },
          {
            "id": "E",
            "text": "Crisis tirotóxica aguda"
          }
        ],
        "correcta": "B",
        "explicacion": "El cuadro corresponde a un Síndrome Serotoninérgico desencadenado por la interacción farmacológica entre un ISRS (Paroxetina) y un analgésico opioide con potente inhibición de la recaptación de serotonina (Tramadol). Los criterios diagnósticos de Hunter establecen que la presencia de clonus (inducible, espontáneo u ocular) asociado a agitación, diaforesis, diarrea e hiperreflexia patológica es diagnóstica de toxicidad serotoninérgica. Esta hiperreflexia y clonus contrastan nítidamente con el Síndrome Neuroléptico Maligno, en el cual predomina la rigidez muscular continua en caño de plomo con reflejos osteotendinosos disminuidos o abolidos y sin diarrea. Perla de examen: La hiperreflexia osteotendinosa y el clonus diferencian al Síndrome Serotoninérgico de la rigidez en caño de plomo del Síndrome Neuroléptico Maligno.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.13.2.001"
      },
      {
        "stem": "¿Cuál es el objetivo fisiopatológico fundamental de la hidratación endovenosa masiva con solución fisiológica en el manejo de un paciente con Síndrome Neuroléptico Maligno y CPK de 22.000 UI/L?",
        "options": [
          {
            "id": "A",
            "text": "Aumentar la litemia plasmática para estabilizar el ánimo"
          },
          {
            "id": "B",
            "text": "Garantizar una diuresis forzada de 2 a 3 mL/kg/hora para prevenir la necrosis tubular aguda y la falla renal por mioglobinuria"
          },
          {
            "id": "C",
            "text": "Inducir hiponatremia dilucional para frenar las contracciones musculares"
          },
          {
            "id": "D",
            "text": "Disminuir la presión intracraneana mediante hemodilución osmótica"
          },
          {
            "id": "E",
            "text": "Favorecer la excreción hepática del antipsicótico vía biliar"
          }
        ],
        "correcta": "B",
        "explicacion": "En el Síndrome Neuroléptico Maligno, la contracción muscular sostenida y tónica produce rabdomiólisis masiva con liberación de grandes cantidades de mioglobina y enzimas musculares a la sangre (CPK > 20.000 UI/L). La mioglobina precipita en los túbulos renales formando cilindros que causan obstrucción intratubular y toxicidad tubular oxidativa directa, lo que desencadena una necrosis tubular aguda oligúrica grave que históricamente constituía la causa primaria de muerte. La fluidoterapia agresiva con suero salino isotónico (3 a 6 L/día) busca expandir el volumen intravascular y mantener un flujo urinario elevado (meta 2 a 3 mL/kg/h) para arrastrar la mioglobina antes de que precipite, salvaguardando la función renal. Perla de examen: La meta de la fluidoterapia en el SNM con rabdomiólisis es forzar diuresis para evitar la falla renal por mioglobina.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.13.2.001"
      },
      {
        "stem": "Un paciente ingresado en la UCI con diagnóstico de Síndrome Neuroléptico Maligno grave persiste con temperatura de 40.2 °C y rigidez generalizada severa a pesar de 6 horas de suspensión de neurolépticos, enfriamiento físico e hidratación intensa. Se decide iniciar farmacoterapia específica de rescate. ¿Cuál de los siguientes esquemas farmacológicos es el indicado en esta situación?",
        "options": [
          {
            "id": "A",
            "text": "Dantroleno sódico endovenoso y/o Bromocriptina por sonda nasogástrica"
          },
          {
            "id": "B",
            "text": "Flumazenil endovenoso en bolo continuo"
          },
          {
            "id": "C",
            "text": "Naloxona subcutánea seriada"
          },
          {
            "id": "D",
            "text": "Haloperidol en infusión continua de baja dosis"
          },
          {
            "id": "E",
            "text": "Ciproheptadina oral exclusiva"
          }
        ],
        "correcta": "A",
        "explicacion": "En los casos graves, refractarios o con hipertermia extrema de Síndrome Neuroléptico Maligno, los dos fármacos con indicación formal de rescate son: 1) Dantroleno sódico endovenoso (relajante muscular de acción periférica que bloquea los canales de rianodina inhibiendo la liberación de calcio del retículo sarcoplásmico y deteniendo el hipermetabolismo muscular); y 2) Bromocriptina (agonista de los receptores dopaminérgicos D2 que restaura el tono dopaminérgico central en el hipotálamo y los ganglios basales). El flumazenil (B) es para sobredosis de benzodiacepinas. La naloxona (C) es para intoxicación por opioides. El haloperidol (D) está estrictamente proscrito por ser la causa del cuadro. La ciproheptadina (E) es para síndrome serotoninérgico. Perla de examen: Dantroleno EV y Bromocriptina son los fármacos de rescate específicos en el SNM refractario.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.13.2.001"
      }
    ],
    "vignetteText": "Hombre de 31 años con diagnóstico de esquizofrenia paranoide, ingresado hace 4 días al hospital por descompensación psicótica agresiva, habiéndosele administrado Haloperidol 10 mg IM al día y Clorpromazina 100 mg VO al día. En el pase de visita de la mañana, la enfermera alerta que el paciente se encuentra con compromiso progresivo de conciencia, soporoso, sin responder a preguntas y con diaforesis profusa que empapa las sábanas. Al examen físico: temperatura axilar de 39.8 °C, PA 175/105 mmHg muy lábil, FC 128 lpm regular, taquipneico a 28 rpm. Al movilizar las cuatro extremidades se evidencia una rigidez extrema y continua que opone gran resistencia al movimiento pasivo (\"en caño de plomo\"), con hiporreflexia osteotendinosa. El examen pulmonar y abdominal no muestran focos infecciosos evidentes. Los exámenes urgentes revelan: CPK 16.800 UI/L, leucocitos 19.500/mm³ con desviación a la izquierda, creatinina 2.3 mg/dL y orina de color pardo oscuro."
  },
  {
    "id": "psiq-14",
    "classId": "psiq-14",
    "tier": 3,
    "blockNum": 3,
    "blockName": "Trastornos Psicóticos & Urgencias Psiquiátricas",
    "topicLabel": "17.14",
    "title": "Agitación Psicomotora en Urgencias: Protocolo de Contención Escalonada",
    "perfilCode": "1.09.2.001",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Protocolo Nacional de Manejo de la Agitación Psicomotora MINSAL · Ley N° 21.331 de Derechos en Salud Mental · Registro obligatorio de medidas de contención.",
    "reconstrucciones": "Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026",
    "frecuencia": "Máxima frecuencia práctica · Urgencia médica diaria en servicios de urgencia y APS",
    "svg": null,
    "algoTitle": "Algoritmo Escalonado de Contención en Agitación Psicomotora: Verbal -> Farmacológica -> Física",
    "diagram": {
      "title": "Protocolo Escalonado de Manejo de la Agitación Psicomotora",
      "svg": "<svg viewBox=\"0 0 620 422\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#7e22ce\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#7e22ce;font-weight:700}\n    .acc{fill:#7e22ce;stroke:#6b21a8}.accT{fill:#fff}.accS{font-size:8px;fill:#f3e8ff}\n    .dec{fill:#faf5ff;stroke:#d8b4fe;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#7e22ce;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Paciente con Agitación Psicomotora, Inquietud Extrema o Agresividad</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Asegurar la escena · Mantener distancia de seguridad y vía de escape libre para el equipo</text>\n  <path class=\"ln\" d=\"M310,47 V69\"/>\n  <rect class=\"warn\" x=\"100\" y=\"69\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Paso 1: Descarte Inmediato de Causas Médicas Orgánicas y Tóxicas</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">Hemoglucotest (HGT) inmediato · Saturación O2</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"107\" text-anchor=\"middle\">Descartar TEC, hipoxia, intoxicación y delirium</text>\n  <path class=\"ln\" d=\"M310,119 V141\"/>\n  <rect class=\"dec\" x=\"70\" y=\"141\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"156\" text-anchor=\"middle\" font-weight=\"700\">Paso 2: Contención Verbal y Desescalada Ambiental</text>\n  <text class=\"sub\" x=\"310\" y=\"168\" text-anchor=\"middle\">¿El paciente responde al diálogo empático en un box tranquilo?</text>\n  <path class=\"ln\" d=\"M310,180 V210 H158 V220\"/>\n  <path class=\"ln\" d=\"M310,210 H462 V220\"/>\n  <text class=\"lbl\" x=\"158\" y=\"205\" text-anchor=\"middle\">Colabora / Acepta medicación oral</text>\n  <text class=\"lbl\" x=\"462\" y=\"205\" text-anchor=\"middle\">Hostilidad severa / Riesgo inminente de violencia</text>\n  <rect class=\"dec\" x=\"12\" y=\"220\" width=\"292\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"158\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">Contención Farmacológica Vía Oral</text>\n  <text class=\"sub\" x=\"158\" y=\"247\" text-anchor=\"middle\">Lorazepam 2 mg VO o Risperidona/Olanzapina bucodispersable</text>\n  <rect class=\"crit\" x=\"316\" y=\"220\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"462\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">Paso 3: Contención Farmacológica Intramuscular</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"247\" text-anchor=\"middle\">Haloperidol 5 mg IM + Lorazepam 2-4</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"258\" text-anchor=\"middle\">mg IM (sinergia sedante segura)</text>\n  <path class=\"ln\" d=\"M158,270 V280 H310 V292\"/>\n  <path class=\"ln\" d=\"M462,270 V280 H310 V292\"/>\n  <rect class=\"warn\" x=\"100\" y=\"292\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"307\" text-anchor=\"middle\" font-weight=\"700\">Paso 4: Contención Física Mecánica (Último Recurso)</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"319\" text-anchor=\"middle\">Sujeción de 4 puntos por equipo entrenado de 5 personas</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"330\" text-anchor=\"middle\">Orden médica escrita · Revisión c/15-30 min</text>\n  <path class=\"ln\" d=\"M310,342 V364\"/>\n  <rect class=\"crit\" x=\"100\" y=\"364\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"379\" text-anchor=\"middle\" font-weight=\"700\">Contraindicación Mortal en Urgencias</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"391\" text-anchor=\"middle\">PROHIBIDO coadministrar Olanzapina IM con Lorazepam</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"402\" text-anchor=\"middle\">IM (riesgo de colapso cardiorrespiratorio fatal)</text>\n</svg>"
    },
    "contexto": "La agitación psicomotora es un estado de hiperactividad motora desorganizada e improductiva acompañada de tensión interna, agresividad verbal o física e impulsividad, que pone en riesgo inminente la integridad física del paciente, del personal de salud y de terceros. Constituye una de las situaciones más complejas en los servicios de urgencia. El enfrentamiento médico debe seguir rigurosamente tres axiomas: 1) Primero descartar etiología orgánica potencialmente letal (hipoglicemia, hipoxia, traumatismo encéfalo-craneano, intoxicaciones, delirium hiperactivo); 2) Seguir un protocolo de contención escalonada obligatoria (Verbal -> Farmacológica -> Física como último recurso reglamentado); y 3) Conocer los esquemas farmacológicos de control rápido (Haloperidol + Lorazepam IM), respetando la contraindicación letal de mezclar Olanzapina IM con benzodiacepinas parenterales.",
    "contentSections": [
      {
        "subhead": "1. Definición, Etiología y Descarte Orgánico Sistemático Inicial",
        "paragraphs": [
          "La agitación psicomotora es un <strong>síndrome conductual, no una enfermedad</strong>. Su etiología se divide en dos grandes grupos:",
          "• <strong>Etiología Orgánica / Médica (DELIRIUM hiperactivo):</strong> Es la primera causa que el médico DEBE descartar. Frecuente en adultos mayores, pacientes postoperados o con patología somática. Causas: <strong>hipoglicemia</strong> (descarte obligatorio inmediato con glicemia capilar), <strong>hipoxia</strong> (oximetría de pulso), traumatismo encéfalo-craneano (TEC), accidente cerebrovascular, meningitis/encefalitis, sepsis, retención aguda de orina o fecaloma, e intoxicación/abstinencia por alcohol o drogas (cocaína, benzodiacepinas).",
          "• <strong>Etiología Psiquiátrica Primaria:</strong> Crisis maníaca en Trastorno Bipolar, brote psicótico en Esquizofrenia, crisis de pánico grave o descompensación impulsiva en Trastorno de Personalidad Límite o Antisocial."
        ]
      },
      {
        "subhead": "2. Nivel 1: Seguridad de la Escena y Contención Verbal (Desescalada)",
        "paragraphs": [
          "Antes de cualquier contacto físico, el equipo de salud debe asegurar la escena:",
          "• <strong>Seguridad del personal:</strong> Nunca ingresar solo a evaluar a un paciente agitado; mantener la puerta del box abierta y ubicarse siempre <strong>entre el paciente y la salida</strong> (garantizando una vía de escape libre para el examinador).",
          "• <strong>Desescalada verbal:</strong> Es el <strong>primer paso obligatorio</strong>. Hablar con tono de voz calmo, bajo y firme; mantener una distancia de seguridad de al menos dos brazos; no invadir el espacio personal ni realizar movimientos bruscos; escuchar empáticamente y validar su malestar sin discutir delirios ni mostrar actitud punitiva o desafiante; y ofrecer alternativas voluntarias de medicación."
        ]
      },
      {
        "subhead": "3. Nivel 2: Contención Farmacológica Rápida y Combinaciones Seguras",
        "paragraphs": [
          "Si la desescalada verbal fracasa o existe riesgo inminente de violencia, se pasa a la <strong>contención farmacológica</strong>:",
          "• <strong>Vía Oral (si el paciente colabora):</strong> Es la vía preferencial. <strong>Lorazepam 2 mg VO</strong> o <strong>Risperidona 2 mg VO / Olanzapina 10 mg en comprimidos bucodispersables</strong>.",
          "• <strong>Vía Intramuscular (si rechaza vía oral o agitación grave):</strong>",
          "  - <strong>Esquema Clásico de Elección en Urgencias:</strong> <strong>Haloperidol 5 mg IM + Lorazepam 2 a 4 mg IM</strong> (pueden administrarse juntos en la misma jeringa o por separado). <em>Ventajas:</em> La combinación ofrece una sinergia sedante más rápida que los fármacos por separado, permite usar menores dosis de cada uno y <strong>la benzodiacepina previene activamente la distonía aguda</strong> producida por el haloperidol.",
          "  - <strong>Alternativa con Antipsicóticos Atípicos IM:</strong> <strong>Olanzapina 10 mg IM</strong> o <strong>Aripiprazol 9.75 mg IM</strong>.",
          "• <strong>CONTRAINDICACIÓN MORTAL EUNACOM:</strong> Está <strong>ESTRICTAMENTE PROHIBIDO coadministrar Olanzapina IM con Lorazepam IM (o cualquier benzodiacepina parenteral)</strong> debido al riesgo documentado de <strong>colapso cardiorrespiratorio severo, hipotensión refractaria y muerte súbita</strong>. Si se usa Olanzapina IM, deben transcurrir al menos 2 horas antes de considerar una benzodiacepina."
        ]
      },
      {
        "subhead": "4. Nivel 3: Contención Física Mecánica y Marco Médico-Legal (Ley 21.331)",
        "paragraphs": [
          "La <strong>contención física mecánica</strong> (inmovilización en cama) es una <strong>medida excepcional de último recurso</strong>, indicada únicamente ante fracaso de las medidas verbales y farmacológicas para evitar daño físico inminente al paciente o terceros.",
          "<strong>Normas operativas y legales indispensables:</strong>",
          "• Requiere un equipo coordinado de al menos <strong>cinco (5) personas</strong> (una para la cabeza y una para cada extremidad) bajo el mando del médico.",
          "• <strong>Sujeción de 4 puntos:</strong> Fijación de muñecas y tobillos a la estructura rígida de la cama (nunca a las barandas móviles), con cabecera elevada a 30-45° para prevenir la broncoaspiración.",
          "• <strong>Exigencia legal estricta (Ley 21.331):</strong> Debe existir <strong>orden médica escrita</strong> en la ficha clínica detallando la justificación, hora de inicio y término previsto.",
          "• <strong>Monitorización continua:</strong> Control de signos vitales, saturación O2 y <strong>revisión de perfusión vascular periférica cada 15 a 30 minutos</strong>.",
          "• Retiro progresivo de las sujeciones (una a una) apenas el paciente recupere la calma conductual."
        ]
      },
      {
        "subhead": "5. Consideraciones en Poblaciones Especiales: Adulto Mayor y Delirium",
        "paragraphs": [
          "En el adulto mayor con <strong>Delirium hiperactivo</strong> (síndrome confusional agudo):",
          "• Las benzodiacepinas están <strong>formalmente contraindicadas</strong> en monoterapia (salvo abstinencia alcohólica) porque empeoran la desorientación, inducen efecto paradójico y duplican el riesgo de caídas y broncoaspiración.",
          "• El fármaco de elección para el control de la agitación severa en el anciano es <strong>Haloperidol a dosis muy bajas: 0.5 a 1 mg VO/IM</strong>, o antipsicóticos atípicos como Quetiapina 25 mg VO."
        ]
      }
    ],
    "table": {
      "title": "Etiología de la Agitación Psicomotora: Diferencias entre Origen Orgánico y Psiquiátrico",
      "headers": [
        "Parámetro Clínico",
        "Agitación de Causa Orgánica (Delirium)",
        "Agitación de Causa Psiquiátrica Primaria"
      ],
      "rows": [
        [
          "Nivel de conciencia",
          "FLUCTUANTE, confuso, desorientado témporo-espacialmente",
          "VIGIL, lúcido, orientado en tiempo y espacio"
        ],
        [
          "Comienzo temporal",
          "Agudo / Súbito (horas a días), empeora en la noche (\"sundowning\")",
          "Insidioso o subagudo con antecedentes psiquiátricos previos"
        ],
        [
          "Alucinaciones",
          "Predominantemente VISUALES o táctiles (zoopsias, sombras)",
          "Predominantemente AUDITIVAS complejas o en tercera persona"
        ],
        [
          "Examen físico / Signos vitales",
          "FRECUENTEMENTE ALTERADOS (fiebre, sudoración, taquicardia, focalidad)",
          "Habitualmente normales salvo taquicardia por esfuerzo motor"
        ],
        [
          "Manejo prioritario",
          "TRATAR LA CAUSA MÉDICA DE BASE (HGT, oxígeno, antibióticos, sonda)",
          "Contención escalonada + Antipsicóticos / Benzodiacepinas"
        ]
      ]
    },
    "severityTable": {
      "title": "Escala de Agitación y Sedación de Richmond (RASS) y Decisiones en Urgencias",
      "headers": [
        "Puntaje RASS",
        "Término Clínico",
        "Descripción Conductual del Paciente",
        "Intervención de Urgencia"
      ],
      "rows": [
        [
          "+ 4",
          "Combativo / Violento",
          "Francamente violento, peligro inmediato para el personal",
          "Contención física inmediata de 4 puntos + Fármacos IM"
        ],
        [
          "+ 3",
          "Muy Agitado",
          "Agresivo, se retira vías venosas y tubos, no coopera",
          "Contención farmacológica parenteral (Haloperidol + Lorazepam)"
        ],
        [
          "+ 2",
          "Agitado",
          "Movimientos frecuentes no coordinados, lucha con el ventilador",
          "Contención verbal + Ansiolítico oral o antipsicótico atípico"
        ],
        [
          "+ 1",
          "Inquieto",
          "Ansioso, aprensivo pero movimientos no agresivos ni vigorosos",
          "Desescalada verbal en ambiente tranquilo y observación"
        ],
        [
          "0",
          "Alerta y Tranquilo",
          "Estado basal normal óptimo",
          "Mantener observación médica general"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Protocolo Farmacológico en Agitación Psicomotora según Vía y Seguridad",
      "headers": [
        "Fármaco / Vía",
        "Dosis Estándar en Urgencias",
        "Ventajas Clínicas Clave",
        "Advertencias y Contraindicaciones Críticas"
      ],
      "rows": [
        [
          "Haloperidol IM",
          "2.5 a 5 mg IM (máximo 15-20 mg/día)",
          "Eficacia sedante rápida sin sedación respiratoria profunda",
          "Riesgo de distonía aguda y prolongación del intervalo QTc"
        ],
        [
          "Lorazepam IM",
          "2 a 4 mg IM (máximo 8 mg/día)",
          "Excelente absorción IM regular y rápido efecto ansiolítico",
          "Evitar en ancianos con delirium (empeora la confusión)"
        ],
        [
          "Haloperidol + Lorazepam IM",
          "5 mg Haloperidol + 2 mg Lorazepam IM",
          "SINERGIA DE ELECCIÓN: Mayor rapidez y previene distonías",
          "Monitorizar saturación de oxígeno y frecuencia respiratoria"
        ],
        [
          "Olanzapina IM",
          "10 mg IM (5 mg en ancianos)",
          "Antipsicótico atípico con excelente control de hostilidad",
          "PROHIBIDO MEZCLAR CON LORAZEPAM IM (muerte por colapso CV)"
        ],
        [
          "Haloperidol en Ancianos",
          "0.5 a 1 mg VO/IM (dosis geriátrica)",
          "Control seguro de delirium sin hipotensión ni sedación excesiva",
          "Nunca usar dosis de adulto joven en adultos mayores"
        ]
      ]
    },
    "vignette": {
      "title": "Caso Clínico Tipo EUNACOM",
      "text": "Hombre de 26 años con antecedente de esquizofrenia paranoide con abandono de tratamiento hace 3 meses, es trasladado al servicio de urgencias por personal de SAMU y Carabineros debido a que en su domicilio se encerró con un cuchillo, rompió mobiliario y amenazó de muerte a su madre afirmando que \"estaba poseída por un demonio\". Al ingresar al box de urgencias se encuentra en extremo hostil, gritando insultos, en posición de guardia con puños cerrados, lanzando patadas contra las camillas e intentando golpear a cualquier persona que se acerque. El médico intenta una desescalada verbal manteniendo la distancia, pero el paciente responde con mayor agresividad verbal y lanza una bandeja metálica hacia la enfermera, amenazando con \"romperles el cuello a todos\".",
      "conducta": "El paciente presenta una Agitación Psicomotora Severa con riesgo inminente de violencia física extrema hacia el personal de salud (RASS +4), en contexto de descompensación psicótica aguda por abandono de antipsicóticos. Ante el fracaso de la contención verbal y la existencia de agresión activa con objetos contundentes, la conducta médica inmediata protocolizada es: 1) Ejecutar contención física mecánica transitoria de cuatro extremidades mediante un equipo coordinado de 5 funcionarios capacitados para asegurar la inmovilización física del paciente sin lesionarlo; 2) Administrar inmediatamente contención farmacológica intramuscular con la combinación de elección en urgencias: Haloperidol 5 mg IM asociado a Lorazepam 2 a 4 mg IM; 3) Monitorizar continuamente signos vitales, saturación O2 y perfusión periférica distal cada 15 minutos; 4) Dejar constancia legal por escrito en ficha clínica según Ley N° 21.331; y 5) Realizar descarte de tóxicos y glicemia tan pronto ceda la agitación motora. Está formalmente contraindicado dejar al paciente sin sujeción o coadministrar Olanzapina IM con benzodiacepinas parenterales."
    },
    "explicacion": "El paciente presenta una Agitación Psicomotora Severa con riesgo inminente de violencia física extrema hacia el personal de salud (RASS +4), en contexto de descompensación psicótica aguda por abandono de antipsicóticos. Ante el fracaso de la contención verbal y la existencia de agresión activa con objetos contundentes, la conducta médica inmediata protocolizada es: 1) Ejecutar contención física mecánica transitoria de cuatro extremidades mediante un equipo coordinado de 5 funcionarios capacitados para asegurar la inmovilización física del paciente sin lesionarlo; 2) Administrar inmediatamente contención farmacológica intramuscular con la combinación de elección en urgencias: Haloperidol 5 mg IM asociado a Lorazepam 2 a 4 mg IM; 3) Monitorizar continuamente signos vitales, saturación O2 y perfusión periférica distal cada 15 minutos; 4) Dejar constancia legal por escrito en ficha clínica según Ley N° 21.331; y 5) Realizar descarte de tóxicos y glicemia tan pronto ceda la agitación motora. Está formalmente contraindicado dejar al paciente sin sujeción o coadministrar Olanzapina IM con benzodiacepinas parenterales.",
    "keyPoints": [
      "En todo paciente agitado es obligatorio descartar primero causas orgánicas potencialmente reversibles: glicemia capilar (hipoglicemia) y oximetría (hipoxia).",
      "El protocolo de contención es estrictamente escalonado: 1) Verbal y ambiental; 2) Farmacológica; 3) Mecánica física de último recurso.",
      "La contención verbal exige mantener siempre la vía de escape despejada entre el médico y la puerta del box, sin acorralar al paciente.",
      "El esquema farmacológico intramuscular de primera elección en agitación aguda severa es la combinación de Haloperidol 5 mg IM + Lorazepam 2 mg IM.",
      "La combinación de Haloperidol con Lorazepam ofrece mayor rapidez de sedación, menor dosis requerida y prevención de la distonía aguda.",
      "En adultos mayores con delirium hiperactivo, las benzodiacepinas están contraindicadas; el fármaco de elección es Haloperidol a dosis muy bajas (0.5 a 1 mg).",
      "La contención física mecánica de 4 puntos requiere indicación médica escrita obligatoria en ficha clínica y supervisión de signos vitales cada 15 a 30 minutos.",
      "Trampa mortal de urgencias: Está estrictamente prohibido asociar Olanzapina IM con Lorazepam IM (o cualquier benzodiacepina parenteral) por riesgo de colapso cardiorrespiratorio severo y paro cardíaco."
    ],
    "questions": [
      {
        "stem": "Un hombre de 24 años con esquizofrenia paranoide descompensada ingresa a urgencias en estado de extrema agitación psicomotora, amenazando físicamente al equipo médico y arrojando mobiliario. Tras fracasar la contención verbal, se decide realizar contención física mecánica transitoria y administrar fármacos parenterales de rescate. ¿Cuál es la combinación farmacológica intramuscular más segura, eficaz y recomendada para el control rápido de la agitación en urgencias?",
        "options": [
          {
            "id": "A",
            "text": "Haloperidol 5 mg IM asociado a Lorazepam 2 mg IM"
          },
          {
            "id": "B",
            "text": "Olanzapina 10 mg IM asociada a Lorazepam 4 mg IM en la misma jeringa"
          },
          {
            "id": "C",
            "text": "Morfina 10 mg IM asociada a Diazepam 10 mg IM"
          },
          {
            "id": "D",
            "text": "Fenobarbital 200 mg IM en monoterapia"
          },
          {
            "id": "E",
            "text": "Biperideno 10 mg IM asociado a Clorpromazina 100 mg EV directo"
          }
        ],
        "correcta": "A",
        "explicacion": "La combinación de Haloperidol 5 mg IM con Lorazepam 2 a 4 mg IM es el estándar de oro en los servicios de urgencia para el manejo de la agitación psicomotora severa no orgánica. La sinergia entre el antipsicótico (bloqueo D2 rápido) y la benzodiacepina (agonismo gabaérgico ansiolítico y sedante) permite una sedación conductual más veloz y eficaz con menores dosis de cada agente, con la enorme ventaja adicional de que el Lorazepam previene la aparición de distonías agudas inducidas por el haloperidol. La alternativa B comete un error mortal: asociar Olanzapina IM con Lorazepam IM está formalmente contraindicado por riesgo de depresión cardiorrespiratoria e hipotensión severa fatal. Los demás fármacos no tienen indicación en este contexto. Perla de examen: Haloperidol 5 mg IM + Lorazepam 2 mg IM es la combinación de elección en urgencias para la agitación psicomotora.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.09.2.001"
      },
      {
        "stem": "Un anciano de 82 años hospitalizado en medicina interna al segundo día postoperatorio de fractura de cadera presenta bruscamente en horas de la noche agitación, desorientación témporo-espacial, alucinaciones visuales viendo animales en el techo e intentos reiterados de arrancarse la vía venosa y la sonda Foley. Sus signos vitales son estables y el hemoglucotest es de 110 mg/dL. ¿Cuál es el diagnóstico clínico y el manejo farmacológico de elección en caso de requerir sedación?",
        "options": [
          {
            "id": "A",
            "text": "Crisis de angustia; administrar Alprazolam 2 mg sublingual"
          },
          {
            "id": "B",
            "text": "Delirium hiperactivo orgánico; buscar y corregir la causa desencadenante y usar Haloperidol a dosis bajas (0.5 a 1 mg VO/IM) si hay riesgo físico"
          },
          {
            "id": "C",
            "text": "Debut de esquizofrenia tardía; iniciar Risperidona 6 mg al día"
          },
          {
            "id": "D",
            "text": "Demencia tipo Alzheimer; prescribir Memantina en bolo"
          },
          {
            "id": "E",
            "text": "Trastorno adaptativo; indicar reposo y contención mecánica sin medicamentos"
          }
        ],
        "correcta": "B",
        "explicacion": "El paciente presenta un Delirium hiperactivo (síndrome confusional agudo caracterizado por inicio brusco, fluctuación circadiana vespertina, desorientación y alucinaciones visuales en un adulto mayor hospitalizado). El primer pilar terapéutico es identificar y tratar la causa subyacente (dolor, retención urinaria, infección urinaria, fármacos anticolinérgicos, deshidratación). Si la agitación pone en riesgo la seguridad física del paciente, el fármaco de elección es Haloperidol en dosis muy bajas (0.5 a 1 mg vía oral o intramuscular), el cual controla la psicosis confusional sin causar depresión respiratoria. Las benzodiacepinas (A) están formalmente contraindicadas en el delirium no alcohólico porque producen sedación paradójica, empeoran la confusión cognitiva y aumentan el riesgo de caídas y broncoaspiración. Perla de examen: En el delirium del adulto mayor, las benzodiacepinas están contraindicadas; el fármaco de elección es Haloperidol a dosis muy bajas (0.5-1 mg).",
        "recTag": "Banco Oficial AEE · Perfil V3 1.09.2.001"
      },
      {
        "stem": "¿Cuál de las siguientes combinaciones de psicofármacos parenterales está ESTRICTAMENTE CONTRAINDICADA en el servicio de urgencias por asociarse a un alto riesgo de colapso cardiorrespiratorio fatal e hipotensión severa refractaria?",
        "options": [
          {
            "id": "A",
            "text": "Haloperidol IM asociado a Lorazepam IM"
          },
          {
            "id": "B",
            "text": "Olanzapina IM coadministrada de forma simultánea con Lorazepam IM"
          },
          {
            "id": "C",
            "text": "Haloperidol IM asociado a Biperideno IM"
          },
          {
            "id": "D",
            "text": "Clorpromazina VO asociada a Diazepam VO"
          },
          {
            "id": "E",
            "text": "Risperidona VO asociada a Clonazepam VO"
          }
        ],
        "correcta": "B",
        "explicacion": "Múltiples alertas de seguridad farmacológica de la FDA y de la Agencia Europea de Medicamentos (EMA), reflejadas en las guías del MINSAL, prohíben estrictamente la administración parenteral simultánea de Olanzapina IM junto con Benzodiacepinas parenterales (como Lorazepam IM o Diazepam EV/IM). La coadministración parenteral de ambos fármacos deprime de forma sinérgica y fulminante los centros bulbares cardiorrespiratorios, produciendo bradicardia extrema, hipotensión severa, paro respiratorio y muerte súbita. Si se administra Olanzapina IM, deben transcurrir al menos 2 horas antes de considerar el uso de una benzodiacepina. En cambio, Haloperidol + Lorazepam IM (A) es una combinación segura y ampliamente avalada. Trampa mortal de examen: Nunca coadministrar Olanzapina IM con benzodiacepinas parenterales por riesgo de paro cardiorrespiratorio fatal.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.09.2.001"
      },
      {
        "stem": "Respecto a la contención física mecánica de cuatro extremidades en un paciente con agitación psicomotora violenta que no respondió a contención verbal ni farmacológica, ¿cuál es una exigencia legal y clínica obligatoria según la Ley N° 21.331 de salud mental en Chile?",
        "options": [
          {
            "id": "A",
            "text": "La indicación puede ser verbal y no requiere ser registrada en la ficha clínica"
          },
          {
            "id": "B",
            "text": "Debe existir una indicación médica explícita registrada por escrito en la ficha clínica, detallando la justificación, y se debe supervisar y registrar la condición del paciente cada 15 a 30 minutos"
          },
          {
            "id": "C",
            "text": "El paciente debe ser dejado en posición prono (boca abajo) para evitar que muerda al personal"
          },
          {
            "id": "D",
            "text": "La sujeción mecánica debe mantenerse fija por un período mínimo obligatorio de 24 horas ininterrumpidas"
          },
          {
            "id": "E",
            "text": "Las sujeciones deben atarse directamente a las barandas laterales móviles de la camilla"
          }
        ],
        "correcta": "B",
        "explicacion": "La contención mecánica es una medida terapéutica de última instancia regulada estrictamente por la Ley N° 21.331 (del reconocimiento y protección de los derechos de las personas en la atención de salud mental). Sus exigencias legales y clínicas innegociables son: 1) Indicación médica formal, fundada y escrita en la ficha clínica con hora de inicio; 2) Supervisión médica y de enfermería continua con registro cada 15 a 30 minutos de signos vitales, nivel de conciencia y perfusión de extremidades; 3) Retiro precoz y progresivo apenas ceda la agitación; 4) El paciente DEBE colocarse en decúbito supino con cabecera elevada a 30-45° (nunca prono por riesgo de asfixia posicional [C]); y 5) Las sujeciones deben fijarse a la estructura fija de la cama, nunca a barandas móviles (E). Perla de examen: La contención física requiere orden médica escrita obligatoria y monitorización de pulsos y signos vitales cada 15 a 30 minutos.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.09.2.001"
      }
    ],
    "vignetteText": "Hombre de 26 años con antecedente de esquizofrenia paranoide con abandono de tratamiento hace 3 meses, es trasladado al servicio de urgencias por personal de SAMU y Carabineros debido a que en su domicilio se encerró con un cuchillo, rompió mobiliario y amenazó de muerte a su madre afirmando que \"estaba poseída por un demonio\". Al ingresar al box de urgencias se encuentra en extremo hostil, gritando insultos, en posición de guardia con puños cerrados, lanzando patadas contra las camillas e intentando golpear a cualquier persona que se acerque. El médico intenta una desescalada verbal manteniendo la distancia, pero el paciente responde con mayor agresividad verbal y lanza una bandeja metálica hacia la enfermera, amenazando con \"romperles el cuello a todos\"."
  },
  {
    "id": "psiq-15",
    "classId": "psiq-15",
    "tier": 3,
    "blockNum": 4,
    "blockName": "Adicciones, Personalidad & Salud Mental Infanto-Juvenil",
    "topicLabel": "17.15",
    "title": "Trastorno por Uso de Alcohol: Abstinencia, Delirium Tremens (CIWA-Ar) y Encefalopatía Wernicke",
    "perfilCode": "1.09.1.001",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "Garantía GES Consumo Perjudicial o Dependencia de Alcohol y Drogas en personas menores de 20 años · Programa Nacional de Detección e Intervención Breve del Alcoholismo MINSAL en APS.",
    "reconstrucciones": "EUNACOM Julio 2024 (Q#6) · EUNACOM Julio 2019 (Q#150)",
    "frecuencia": "Máxima rentabilidad · Causa líder de morbimortalidad psiquiátrica y urgencias toxicológicas en Chile",
    "svg": null,
    "algoTitle": "Algoritmo de Manejo de la Abstinencia Alcohólica según Escala CIWA-Ar y Prevención de Wernicke",
    "diagram": {
      "title": "Algoritmo de Manejo de la Abstinencia Alcohólica y Delirium Tremens",
      "svg": "<svg viewBox=\"0 0 620 400\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#7e22ce\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#7e22ce;font-weight:700}\n    .acc{fill:#7e22ce;stroke:#6b21a8}.accT{fill:#fff}.accS{font-size:8px;fill:#f3e8ff}\n    .dec{fill:#faf5ff;stroke:#d8b4fe;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#7e22ce;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Paciente con Consumo Crónico de Alcohol que Suspende Ingesta</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Aparición de temblor distal, diaforesis, náuseas, ansiedad e insomnio a las 6-12 horas</text>\n  <path class=\"ln\" d=\"M310,47 V69\"/>\n  <rect class=\"crit\" x=\"100\" y=\"69\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">REGLA DE ORO INNEGOCIABLE: Tiamina Parenteral (Vitamina B1)</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">Tiamina 100-300 mg EV/IM ANTES de cualquier solución glucosada (previene Wernicke fatal)</text>\n  <path class=\"ln\" d=\"M310,108 V130\"/>\n  <rect class=\"dec\" x=\"70\" y=\"130\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"145\" text-anchor=\"middle\" font-weight=\"700\">Estratificación de Gravedad según Escala CIWA-Ar</text>\n  <text class=\"sub\" x=\"310\" y=\"157\" text-anchor=\"middle\">Monitoreo clínico seriado de la abstinencia alcohólica</text>\n  <path class=\"ln\" d=\"M310,169 V199 H158 V209\"/>\n  <path class=\"ln\" d=\"M310,199 H462 V209\"/>\n  <text class=\"lbl\" x=\"158\" y=\"194\" text-anchor=\"middle\">CIWA-Ar &lt; 10 (Abstinencia Leve)</text>\n  <text class=\"lbl\" x=\"462\" y=\"194\" text-anchor=\"middle\">CIWA-Ar ≥ 15 o Complicaciones (Convulsión / Delirium Tremens)</text>\n  <rect class=\"dec\" x=\"12\" y=\"209\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"158\" y=\"224\" text-anchor=\"middle\" font-weight=\"700\">Manejo Ambulatorio Supervisado</text>\n  <text class=\"sub\" x=\"158\" y=\"236\" text-anchor=\"middle\">Acompañamiento familiar · Hidratación oral</text>\n  <text class=\"sub\" x=\"158\" y=\"247\" text-anchor=\"middle\">Vitaminas del complejo B</text>\n  <rect class=\"crit\" x=\"316\" y=\"209\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"462\" y=\"224\" text-anchor=\"middle\" font-weight=\"700\">Hospitalización Inmediata en Sala / UPC</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"236\" text-anchor=\"middle\">Benzodiacepinas a dosis altas guiadas</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"247\" text-anchor=\"middle\">por síntomas (Diazepam o Lorazepam)</text>\n  <path class=\"ln\" d=\"M158,259 V269 H310 V281\"/>\n  <path class=\"ln\" d=\"M462,259 V269 H310 V281\"/>\n  <rect class=\"warn\" x=\"100\" y=\"281\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"296\" text-anchor=\"middle\" font-weight=\"700\">Manejo Farmacológico de Primera Línea</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"308\" text-anchor=\"middle\">Diazepam 10-20 mg VO c/1-2 h (o Lorazepam 2-4</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"319\" text-anchor=\"middle\">mg si cirrosis o daño hepático) hasta CIWA &lt; 10</text>\n  <path class=\"ln\" d=\"M310,331 V353\"/>\n  <rect class=\"acc\" x=\"100\" y=\"353\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"368\" text-anchor=\"middle\" font-weight=\"700\">Prevención de Recaídas a Largo Plazo</text>\n  <text class=\"accS\" x=\"310\" y=\"380\" text-anchor=\"middle\">Psicoterapia motivacional (Prochaska) + Naltrexona (bloquea refuerzo) o Disulfiram</text>\n</svg>"
    },
    "contexto": "El trastorno por uso de alcohol es la principal adicción en Chile y la causa de mayor carga de enfermedad por discapacidad y muerte prematura en la población adulta. La dependencia etílica genera una adaptación neuroquímica profunda caracterizada por la desensibilización de los receptores gabaérgicos inhibidores y la hipersensibilización de los receptores glutamatérgicos NMDA excitadores. Cuando el consumo se interrumpe de forma brusca, se produce una tormenta hiperglutamatérgica y noradrenérgica que se manifiesta clínicamente como el Síndrome de Abstinencia Alcohólica, cuyas complicaciones mortales son las convulsiones de abstinencia, el Delirium Tremens (mortalidad hasta el 5%) y la Encefalopatía de Wernicke irreversible. En el EUNACOM se evalúan con rigor absoluto dos axiomas: la administración de Tiamina EV SIEMPRE antes de sueros glucosados, y el uso de benzodiacepinas orales/EV tituladas por la escala CIWA-Ar.",
    "contentSections": [
      {
        "subhead": "1. Neurobiología de la Dependencia y Cronología de la Abstinencia",
        "paragraphs": [
          "El etanol actúa como un potente modulador alostérico positivo del receptor GABA-A (inhibición) e inhibidor del receptor NMDA (glutamato). La ingesta crónica induce una regulación a la baja de los receptores GABA-A y una sobrerregulación de los receptores NMDA. El cese o reducción brusca de la alcoholemia desata una <strong>hiperactividad autonómica y neurotoxicidad glutamatérgica</strong>.",
          "<strong>Cronología clásica del Síndrome de Abstinencia Alcohólica:</strong>",
          "• <strong>Temblor y disautonomía leve (6 a 12 horas):</strong> Temblor fino distal de manos, diaforesis, taquicardia leve, hipertensión, náuseas, vómitos e insomnio.",
          "• <strong>Alucinosis Alcohólica (12 a 24 horas):</strong> Alucinaciones predominantemente auditivas o visuales en un paciente que se encuentra <strong>CON SENSORIO LÚCIDO Y ORIENTADO</strong>. No hay confusión ni desorientación témporo-espacial (diferencia fundamental con el delirium tremens).",
          "• <strong>Convulsiones por Abstinencia (\"Rum Fits\", 12 a 48 horas):</strong> Convulsiones tónico-clónicas generalizadas autolimitadas, habitualmente únicas o en salvas breves. Se tratan con benzodiacepinas; <em>no requieren anticonvulsivantes clásicos como fenitoína a permanencia</em>.",
          "• <strong>Delirium Tremens (48 a 96 horas):</strong> La forma más grave y potencialmente mortal (mortalidad del 5 al 15% sin tratamiento). Se manifiesta con <strong>confusión mental global, desorientación témporo-espacial</strong>, temblor grosero de reposo e intención, hipertermia, diaforesis profusa, agitación psicomotora extrema y <strong>alucinaciones visuales zoopsias</strong> (ver insectos, culebras o ratas en el cuerpo o en la habitación)."
        ]
      },
      {
        "subhead": "2. Encefalopatía de Wernicke y Síndrome de Korsakoff: Prevención Obligatoria",
        "paragraphs": [
          "La <strong>Encefalopatía de Wernicke</strong> es una emergencia neurológica aguda causada por el <strong>déficit severo de Tiamina (Vitamina B1)</strong>, cofactor esencial de la transetolasa y la piruvato deshidrogenasa en el metabolismo cerebral de la glucosa, frecuente en alcohólicos por desnutrición y malabsorción intestinal.",
          "• <strong>Tríada Clásica de Wernicke:</strong> 1) <strong>Oftalmoplejía</strong> (parálisis del VI par, nistagmo horizontal/vertical o parálisis de la mirada conjugada); 2) <strong>Ataxia de la marcha</strong> y del tronco; y 3) <strong>Síndrome confusional agudo (delirium)</strong>. La tríada completa solo se observa en el 30% de los casos; basta la presencia de uno o dos signos en un paciente con consumo crónico para sospecharlo.",
          "• <strong>REGLA DE ORO VITAL EUNACOM: SIEMPRE ADMINISTRAR TIAMINA ANTES DE CUALQUIER SUERO GLUCOSADO.</strong> La administración de glucosa intravenosa sin tiamina previa consume las últimas reservas neuronales de vitamina B1 al ingresar a la vía glucolítica, desencadenando una acidosis láctica focal y necrosis hemorrágica irreversible de los cuerpos mamilares y núcleos talámicos, transformando un cuadro reversible en un daño cerebral permanente.",
          "• <strong>Síndrome de Korsakoff:</strong> Secuela neuropsiquiátrica crónica e irreversible del Wernicke no tratado a tiempo. Se caracteriza por <strong>amnesia anterógrada profunda</strong> (incapacidad total de incorporar nueva información) y <strong>confabulación</strong> (invención inconsciente de historias verosímiles para llenar las lagunas amnésicas, sin intención de mentir), con memoria remota relativamente preservada."
        ]
      },
      {
        "subhead": "3. Escala CIWA-Ar y Protocolo de Tratamiento con Benzodiacepinas",
        "paragraphs": [
          "La escala <strong>CIWA-Ar (Clinical Institute Withdrawal Assessment for Alcohol, revised)</strong> es el instrumento estándar internacional para cuantificar la gravedad de la abstinencia y guiar la administración de fármacos (evalúa náuseas, temblor, sudoración, ansiedad, agitación, alteraciones táctiles, auditivas, visuales, cefalea y orientación; puntaje 0-67):",
          "• <strong>Puntaje < 10:</strong> Abstinencia leve (no requiere benzodiacepinas de rutina).",
          "• <strong>Puntaje 10 a 19:</strong> Abstinencia moderada (requiere benzodiacepinas orales supervisadas).",
          "• <strong>Puntaje ≥ 20:</strong> Abstinencia severa / Delirium Tremens inminente (hospitalización inmediata y benzodiacepinas enérgicas).",
          "<strong>Fármacos de Elección para la Abstinencia:</strong>",
          "• <strong>Diazepam:</strong> Fármaco de primera línea de elección si la función hepática está conservada, debido a su rápido inicio de acción y vida media prolongada con metabolitos activos (desmetildiazepam) que proporcionan una \"auto-titulación\" suave y previenen convulsiones de rebote (dosis 10 a 20 mg VO cada 1 a 2 horas según escala CIWA-Ar).",
          "• <strong>Lorazepam:</strong> Fármaco de elección estricta en pacientes con <strong>insuficiencia hepática / cirrosis hepática avanzada</strong>, adultos mayores o pacientes con EPOC severo. Al metabolizarse exclusivamente por glucuronidación hepática directa sin generar metabolitos activos, no se acumula en falla hepatocelular (dosis 2 a 4 mg VO o SL cada 2 horas)."
        ]
      },
      {
        "subhead": "4. Intervención Breve en APS y Fármacos para Prevención de Recaídas",
        "paragraphs": [
          "• <strong>Cuestionario AUDIT (Alcohol Use Disorders Identification Test):</strong> Instrumento de 10 preguntas validado por MINSAL en APS para clasificar consumo de bajo riesgo (< 8 ptos), consumo de riesgo (8-15 ptos: consejería e intervención breve) y probable dependencia (> 16 ptos: derivación a programa especializado).",
          "• <strong>Entrevista Motivacional (Modelo de Prochaska y DiClemente):</strong> Evaluar en qué etapa del cambio se encuentra el paciente: Precontemplación (no reconoce el problema) -> Contemplación (ambivalencia) -> Preparación -> Acción -> Mantenimiento. El médico debe adaptar la intervención a la etapa sin confrontar.",
          "• <strong>Farmacoterapia para la Deshabituación y Abstinencia a Largo Plazo:</strong>",
          "  - <strong>Naltrexona:</strong> Antagonista opioide que bloquea los receptores mu-opioides en el sistema de recompensa límbico, reduciendo el \"craving\" (deseo compulsivo) y el placer derivado del consumo de alcohol. Contraindicado en falla hepática aguda o uso concomitante de opioides.",
          "  - <strong>Disulfiram:</strong> Inhibidor irreversible de la aldehído deshidrogenasa. Si el paciente bebe alcohol, se acumula acetaldehído en minutos produciendo una reacción aversiva severa (náuseas, vómitos incoercibles, rubor, hipotensión y taquicardia). Requiere un paciente altamente motivado y supervisión estricta.",
          "  - <strong>Acamprosato:</strong> Modulador de la transmisión glutamatérgica NMDA que reduce la disforia protracted de la abstinencia; seguro en insuficiencia hepática ya que se excreta por vía renal."
        ]
      }
    ],
    "table": {
      "title": "Fases Temporales de la Abstinencia Alcohólica: Cronología, Clínica y Diagnóstico",
      "headers": [
        "Etapa / Síndrome",
        "Tiempo Post-Última Ingesta",
        "Manifestaciones Clínicas Cardinales",
        "Nivel de Conciencia"
      ],
      "rows": [
        [
          "Abstinencia Leve / Temblor",
          "6 a 12 horas",
          "Temblor fino distal, sudoración, taquicardia, náuseas, ansiedad",
          "Vigil y orientado"
        ],
        [
          "Alucinosis Alcohólica",
          "12 a 24 horas",
          "Alucinaciones visuales o auditivas floridas sin amnesia posterior",
          "SENSORIO LÚCIDO Y ORIENTADO (Diferencia con DT)"
        ],
        [
          "Convulsiones de Abstinencia",
          "12 a 48 horas",
          "Crisis tónico-clónicas generalizadas, únicas o en salvas breves",
          "Estupor postictal transitorio breve"
        ],
        [
          "Delirium Tremens",
          "48 a 96 horas (hasta 7 días)",
          "Confusión global, desorientación, disautonomía severa, zoopsias, fiebre",
          "COMPROMISO SEVERO DE CONCIENCIA Y CONFUSIÓN"
        ],
        [
          "Encefalopatía de Wernicke",
          "Cualquier momento (déficit B1)",
          "Tríada: Oftalmoplejía (VI par) + Ataxia de la marcha + Delirium",
          "Confusional agudo / Estupor progresivo"
        ]
      ]
    },
    "severityTable": {
      "title": "Escala CIWA-Ar y Protocolo de Administración de Benzodiacepinas en Urgencias",
      "headers": [
        "Puntaje CIWA-Ar",
        "Severidad del Cuadro",
        "Esquema de Benzodiacepina",
        "Destino y Monitorización"
      ],
      "rows": [
        [
          "CIWA-Ar < 10 puntos",
          "Abstinencia Leve",
          "Medidas generales, hidratación oral, complejo B oral; no requiere BZD de rutina",
          "Manejo ambulatorio con familiar continente en domicilio"
        ],
        [
          "CIWA-Ar 10 – 19 puntos",
          "Abstinencia Moderada",
          "Diazepam 10-20 mg VO cada 1-2 horas (o Lorazepam 2 mg si hepatopatía) hasta CIWA < 10",
          "Observación médica en urgencias / Cama básica"
        ],
        [
          "CIWA-Ar 20 – 30 puntos",
          "Abstinencia Severa",
          "Diazepam 20 mg VO cada 1 hora o 10 mg EV lento cada 15 min hasta sedación tranquila",
          "HOSPITALIZACIÓN OBLIGATORIA en cama monitorizada"
        ],
        [
          "CIWA-Ar > 30 puntos o DT",
          "Delirium Tremens / Vital",
          "Infusión continua o bolos repetidos EV de BZD + Monitorización hemodinámica",
          "Ingreso inmediato a Unidad de Paciente Crítico (UPC)"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Protocolo Farmacológico Integral en Trastorno por Uso de Alcohol",
      "headers": [
        "Fase Terapéutica",
        "Fármaco de Elección",
        "Dosis y Vía de Administración",
        "Reglas de Oro y Advertencias Críticas"
      ],
      "rows": [
        [
          "Prevención de Wernicke",
          "Tiamina (Vitamina B1)",
          "100 a 300 mg EV o IM al día por 3 a 5 días",
          "ADMINISTRAR SIEMPRE ANTES DE CUALQUIER SUERO GLUCOSADO"
        ],
        [
          "Abstinencia Hepática Normal",
          "Diazepam VO o EV",
          "10 a 20 mg VO c/1-2 h según escala CIWA-Ar",
          "Vida media larga con metabolitos activos · Autotitulación suave"
        ],
        [
          "Abstinencia en Cirrótico",
          "Lorazepam VO o SL",
          "2 a 4 mg VO/SL cada 2 horas según CIWA-Ar",
          "No genera metabolitos activos · No se acumula en falla hepática"
        ],
        [
          "Deshabituación (Anticraving)",
          "Naltrexona oral",
          "50 mg una vez al día por vía oral",
          "Reduce el placer del alcohol · Prohibido si consume opioides o hepatitis"
        ],
        [
          "Deshabituación (Terapia Aversiva)",
          "Disulfiram oral",
          "250 mg al día por vía oral bajo supervisión",
          "Inhibe aldehído deshidrogenasa · Reacción vómitos/shock con alcohol"
        ]
      ]
    },
    "vignette": {
      "title": "Caso Clínico Tipo EUNACOM",
      "text": "Hombre de 49 años, con antecedente de consumo perjudicial de alcohol de 20 años de evolución (ingesta diaria de 1 litro de vino y pisco), cesó bruscamente la ingesta hace 60 horas tras una discusión con su cónyuge. Es llevado al servicio de urgencias por personal de SAMU por presentar agitación psicomotora, sudoración profusa y temblor extremo. Al examen físico: desorientado en tiempo, espacio y persona, vigil pero con atención inatrapable, diaforesis profusa que empapa la ropa, temblor grosero en extremidades superiores que le impide sostener un vaso, PA 175/100 mmHg, FC 124 lpm regular, temperatura axilar de 38.3 °C. Grita aterrorizado señalando que las sábanas de su camilla están llenas de arañas negras gigantes que intentan morderlo (zoopsias). El puntaje CIWA-Ar estimado es de 26 puntos. Presenta estigmas de hepatopatía crónica compensada (eritema palmar y arañas vasculares).",
      "conducta": "El paciente presenta un Delirium Tremens establecido (fase máxima y grave del síndrome de abstinencia alcohólica complicada: aparición entre las 48 y 96 horas del cese del consumo, caracterizada por compromiso global de la conciencia y desorientación témporo-espacial, disautonomía severa con taquicardia/hipertensión/fiebre, temblor grosero e intensas alucinaciones visuales zoopsias con terror y agitación). Es una emergencia médica vital con riesgo de colapso hemodinámico, arritmias y muerte. La conducta médica inmediata e innegociable comprende: 1) Hospitalización urgente en cama monitorizada de agudos o UPC; 2) Administrar inmediatamente Tiamina 100 a 300 mg endovenosa o intramuscular ANTES de cualquier aporte de soluciones glucosadas para prevenir la encefalopatía de Wernicke; 3) Administrar benzodiacepinas a dosis altas guiadas por CIWA-Ar (al presentar estigmas de hepatopatía, se prefiere Lorazepam 2 a 4 mg sublingual o endovenoso lento para evitar sobreacumulación, o Diazepam oral si hay buena tolerancia enteral); 4) Corrección hidroelectrolítica con suero salino isotónico, magnesio y potasio; y 5) Contención ambiental en un box iluminado y tranquilo."
    },
    "explicacion": "El paciente presenta un Delirium Tremens establecido (fase máxima y grave del síndrome de abstinencia alcohólica complicada: aparición entre las 48 y 96 horas del cese del consumo, caracterizada por compromiso global de la conciencia y desorientación témporo-espacial, disautonomía severa con taquicardia/hipertensión/fiebre, temblor grosero e intensas alucinaciones visuales zoopsias con terror y agitación). Es una emergencia médica vital con riesgo de colapso hemodinámico, arritmias y muerte. La conducta médica inmediata e innegociable comprende: 1) Hospitalización urgente en cama monitorizada de agudos o UPC; 2) Administrar inmediatamente Tiamina 100 a 300 mg endovenosa o intramuscular ANTES de cualquier aporte de soluciones glucosadas para prevenir la encefalopatía de Wernicke; 3) Administrar benzodiacepinas a dosis altas guiadas por CIWA-Ar (al presentar estigmas de hepatopatía, se prefiere Lorazepam 2 a 4 mg sublingual o endovenoso lento para evitar sobreacumulación, o Diazepam oral si hay buena tolerancia enteral); 4) Corrección hidroelectrolítica con suero salino isotónico, magnesio y potasio; y 5) Contención ambiental en un box iluminado y tranquilo.",
    "keyPoints": [
      "La Encefalopatía de Wernicke es causada por déficit de tiamina (B1); su tríada clásica es oftalmoplejía (VI par), ataxia y confusión.",
      "REGLA DE ORO VITAL: Todo paciente alcohólico debe recibir TIAMINA EV/IM antes de cualquier solución glucosada para evitar precipitar un Wernicke irreversible.",
      "El Síndrome de Korsakoff es la secuela crónica e irreversible del Wernicke no tratado, manifestada por amnesia anterógrada severa y confabulación.",
      "La alucinosis alcohólica ocurre a las 12-24 h con alucinaciones pero SENSORIO LÚCIDO; el Delirium Tremens ocurre a las 48-72 h con CONFUSIÓN y disautonomía.",
      "El Delirium Tremens es una emergencia médica vital (mortalidad hasta 15%) caracterizada por confusión, agitación, fiebre y zoopsias.",
      "El Diazepam es la benzodiacepina de elección en abstinencia alcohólica en pacientes con función hepática conservada.",
      "El Lorazepam es la benzodiacepina obligatoria de elección en pacientes con CIRROSIS HEPÁTICA o insuficiencia hepatocelular porque no genera metabolitos activos.",
      "Trampa del examen: Nunca tratar las convulsiones de abstinencia alcohólica con fenitoína continua de por vida; se tratan de forma aguda con benzodiacepinas."
    ],
    "questions": [
      {
        "stem": "Un hombre de 52 años en situación de calle con antecedente de alcoholismo crónico severo y desnutrición extrema es llevado a urgencias por compromiso de conciencia progresivo. Al examen físico destaca sopor profundo, nistagmo bilateral horizontal y ataxia de tronco que le impide la bipedestación. La glicemia capilar informa 48 mg/dL. ¿Cuál es la secuencia farmacológica obligatoria que debe administrarse de inmediato?",
        "options": [
          {
            "id": "A",
            "text": "Administrar 4 ampollas de suero glucosado al 30% EV en bolo rápido y luego evaluar vitaminas"
          },
          {
            "id": "B",
            "text": "Administrar Tiamina 100 mg endovenosa o intramuscular previo o simultáneo a la infusión de suero glucosado"
          },
          {
            "id": "C",
            "text": "Administrar Fenitoína 1 g en infusión endovenosa rápida"
          },
          {
            "id": "D",
            "text": "Administrar Naloxona 0.4 mg EV y Flumazenil 0.5 mg EV directo"
          },
          {
            "id": "E",
            "text": "Administrar Insulina cristalina 10 UI subcutáneas"
          }
        ],
        "correcta": "B",
        "explicacion": "El paciente presenta la tríada clásica de la Encefalopatía de Wernicke (oftalmoplejía/nistagmo, ataxia y confusión/sopor) agravada por hipoglicemia severa. La regla de oro absoluta e innegociable en urgencias es que en todo paciente con alcoholismo crónico o desnutrición severa, la administración de TIAMINA (Vitamina B1, 100 a 300 mg EV o IM) DEBE preceder o administrarse de forma estrictamente simultánea al suero glucosado. Administrar glucosa sola (A) consume la escasa tiamina de reserva como cofactor metabólico, precipitando la necrosis hemorrágica irreversible de los cuerpos mamilares y el tronco encefálico (Síndrome de Korsakoff o muerte). La fenitoína (C) no previene ni trata el Wernicke. Perla de examen: La Tiamina se administra SIEMPRE antes de la glucosa en el paciente alcohólico para evitar desencadenar una encefalopatía de Wernicke irreversible.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.09.1.001"
      },
      {
        "stem": "Un hombre de 45 años con antecedente de cirrosis hepática Child-Pugh B por alcoholismo crónico ingresa a urgencias por un síndrome de abstinencia alcohólica moderado a severo (CIWA-Ar de 18 puntos) con temblor marcado, náuseas, diaforesis y ansiedad extrema tras 24 horas del cese de ingesta. ¿Cuál es la benzodiacepina de elección para tratar la abstinencia en este paciente con daño hepático demostrado?",
        "options": [
          {
            "id": "A",
            "text": "Diazepam"
          },
          {
            "id": "B",
            "text": "Lorazepam"
          },
          {
            "id": "C",
            "text": "Clordiazepóxido"
          },
          {
            "id": "D",
            "text": "Alprazolam"
          },
          {
            "id": "E",
            "text": "Midazolam"
          }
        ],
        "correcta": "B",
        "explicacion": "En pacientes con insuficiencia hepatocelular o cirrosis hepática demostrada, las benzodiacepinas de vida media larga que dependen de la oxidación microsómica por citocromo P450 hepático (como Diazepam y Clordiazepóxido) sufren una dramática disminución en su depuración, acumulándose de forma impredecible y gatillando una encefalopatía hepática grave o coma. Por ello, la benzodiacepina de elección absoluta en pacientes cirróticos con abstinencia alcohólica es el LORAZEPAM (o alternativamente Oxazepam), ya que se metaboliza exclusivamente por glucuronidación directa, proceso que no depende del citocromo P450 y que se encuentra conservado en la cirrosis, además de carecer de metabolitos activos. Perla de examen: En abstinencia alcohólica con cirrosis hepática, el fármaco de elección es Lorazepam porque no depende del citocromo P450.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.09.1.001"
      },
      {
        "stem": "Un paciente alcohólico de 42 años consulta en urgencias a las 18 horas de su último trago refiriendo escuchar voces de personas desconocidas que murmuran amenazas a través de la pared del baño. En el examen mental se constata vigil, perfectamente orientado en tiempo y espacio (sabe la fecha exacta y dónde está), con atención preservada y juicio parcialmente conservado, reconociendo que las voces podrían deberse a haber dejado el trago. El examen neurológico es normal. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Delirium Tremens"
          },
          {
            "id": "B",
            "text": "Alucinosis Alcohólica"
          },
          {
            "id": "C",
            "text": "Esquizofrenia paranoide de inicio tardío"
          },
          {
            "id": "D",
            "text": "Encefalopatía hepática grado IV"
          },
          {
            "id": "E",
            "text": "Demencia de Korsakoff"
          }
        ],
        "correcta": "B",
        "explicacion": "El cuadro corresponde típicamente a una Alucinosis Alcohólica: complicación de la abstinencia alcohólica que aparece en las primeras 12 a 24 horas del cese de consumo, caracterizada por la presencia de alucinaciones auditivas o visuales vívidas en un paciente con SENSORIO RIGUROSAMENTE LÚCIDO Y PLENA ORIENTACIÓN témporo-espacial. Esta lucidez de la conciencia es la diferencia cardinal con el Delirium Tremens (A), el cual ocurre más tardíamente (48-72 h) y se define obligatoriamente por confusión global, desorientación, estupor y grave inestabilidad autonómica. La esquizofrenia (C) exige al menos 6 meses de evolución. Perla de examen: La alucinosis alcohólica cursa con sensorio lúcido y orientado; el delirium tremens cursa con desorientación y compromiso global de conciencia.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.09.1.001"
      },
      {
        "stem": "Un hombre de 38 años con dependencia severa al alcohol logra superar la abstinencia hospitalaria con éxito y se encuentra motivado para mantenerse sin beber. En policlínico de adicciones se decide indicar un fármaco que actúa como antagonista de los receptores opioides mu, bloqueando los efectos reforzadores placenteros del alcohol y reduciendo el \"craving\" o deseo impulsivo de consumo. ¿Cuál es dicho fármaco?",
        "options": [
          {
            "id": "A",
            "text": "Disulfiram"
          },
          {
            "id": "B",
            "text": "Naltrexona"
          },
          {
            "id": "C",
            "text": "Metadona"
          },
          {
            "id": "D",
            "text": "Acamprosato"
          },
          {
            "id": "E",
            "text": "Buprenorfina"
          }
        ],
        "correcta": "B",
        "explicacion": "La Naltrexona es un antagonista competitivo de los receptores opioides mu y kappa. Al bloquear estos receptores en el área tegmental ventral y el núcleo accumbens, impide que el consumo de alcohol estimule la liberación de endorfinas que median el placer y el refuerzo positivo, reduciendo el \"craving\" (deseo imperioso de beber) y disminuyendo la probabilidad de recaídas a consumo masivo. El Disulfiram (A) no bloquea el placer sino que inhibe la enzima aldehído deshidrogenasa produciendo una intoxicación aversiva por acetaldehído. El Acamprosato (D) modula la transmisión glutamatérgica NMDA. La metadona (C) y buprenorfina (E) se usan para dependencia a opioides, no al alcohol. Perla de examen: Naltrexona es el antagonista opioide de elección para reducir el deseo compulsivo (craving) en la dependencia de alcohol.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.09.1.001"
      }
    ],
    "vignetteText": "Hombre de 49 años, con antecedente de consumo perjudicial de alcohol de 20 años de evolución (ingesta diaria de 1 litro de vino y pisco), cesó bruscamente la ingesta hace 60 horas tras una discusión con su cónyuge. Es llevado al servicio de urgencias por personal de SAMU por presentar agitación psicomotora, sudoración profusa y temblor extremo. Al examen físico: desorientado en tiempo, espacio y persona, vigil pero con atención inatrapable, diaforesis profusa que empapa la ropa, temblor grosero en extremidades superiores que le impide sostener un vaso, PA 175/100 mmHg, FC 124 lpm regular, temperatura axilar de 38.3 °C. Grita aterrorizado señalando que las sábanas de su camilla están llenas de arañas negras gigantes que intentan morderlo (zoopsias). El puntaje CIWA-Ar estimado es de 26 puntos. Presenta estigmas de hepatopatía crónica compensada (eritema palmar y arañas vasculares)."
  },
  {
    "id": "psiq-16",
    "classId": "psiq-16",
    "tier": 2,
    "blockNum": 4,
    "blockName": "Adicciones, Personalidad & Salud Mental Infanto-Juvenil",
    "topicLabel": "17.16",
    "title": "Intoxicación y Abstinencia por Sustancias (Cocaína, Cannabis, Benzodiacepinas)",
    "perfilCode": "5.01.1.011",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Derivar",
    "ges": "Garantía GES Consumo de Drogas en menores de 20 años · Programa Nacional SENDA / MINSAL.",
    "reconstrucciones": "Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026",
    "frecuencia": "Alta · Pregunta recurrente sobre dolor torácico por cocaína y contraindicación de betabloqueadores",
    "svg": null,
    "algoTitle": "Algoritmo de Toxíndromes Mayores: Cocaína vs Benzodiacepinas vs Opioides",
    "diagram": {
      "title": "Algoritmo de Urgencias Toxicológicas por Sustancias de Abuso",
      "svg": "<svg viewBox=\"0 0 620 339\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#7e22ce\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#7e22ce;font-weight:700}\n    .acc{fill:#7e22ce;stroke:#6b21a8}.accT{fill:#fff}.accS{font-size:8px;fill:#f3e8ff}\n    .dec{fill:#faf5ff;stroke:#d8b4fe;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#7e22ce;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Paciente con Sospecha de Intoxicación Aguda por Drogas</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Evaluación rápida de signos vitales, pupilas, estado mental y piel (Toxíndromes)</text>\n  <path class=\"ln\" d=\"M310,47 V69\"/>\n  <rect class=\"dec\" x=\"70\" y=\"69\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Identificación del Toxíndrome Dominante en Urgencias</text>\n  <text class=\"sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">Clínica simpaticomimética vs sedante-hipnótica</text>\n  <path class=\"ln\" d=\"M310,108 V138 H158 V148\"/>\n  <path class=\"ln\" d=\"M310,138 H462 V148\"/>\n  <text class=\"lbl\" x=\"158\" y=\"133\" text-anchor=\"middle\">Simpaticomimético: Midriasis, HTA, Taquicardia, Diaforesis</text>\n  <text class=\"lbl\" x=\"462\" y=\"133\" text-anchor=\"middle\">Sedante-Hipnótico: Miosis/Normal, Hipotensión, Bradipnea</text>\n  <rect class=\"crit\" x=\"12\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"158\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Intoxicación por Cocaína / Anfetaminas</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"175\" text-anchor=\"middle\">Riesgo de vasoespasmo coronario, arritmias y ACV</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"186\" text-anchor=\"middle\">Manejo con Benzodiacepinas EV</text>\n  <rect class=\"dec\" x=\"316\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"462\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Sobredosis de Benzodiacepinas / Opioides</text>\n  <text class=\"sub\" x=\"462\" y=\"175\" text-anchor=\"middle\">BZD: Soporte de vía aérea (Flumazenil restringido)</text>\n  <text class=\"sub\" x=\"462\" y=\"186\" text-anchor=\"middle\">Opioides: Naloxona EV</text>\n  <path class=\"ln\" d=\"M158,198 V208 H310 V220\"/>\n  <path class=\"ln\" d=\"M462,198 V208 H310 V220\"/>\n  <rect class=\"warn\" x=\"100\" y=\"220\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">TRAMPA MORTAL EN DOLOR TORÁCICO POR COCAÍNA</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"247\" text-anchor=\"middle\">PROHIBIDOS los betabloqueadores puros</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"258\" text-anchor=\"middle\">(Propranolol/Atenolol) por vasoespasmo alfa no opuesto</text>\n  <path class=\"ln\" d=\"M310,270 V292\"/>\n  <rect class=\"acc\" x=\"100\" y=\"292\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"307\" text-anchor=\"middle\" font-weight=\"700\">Pilar Terapéutico en Toxicidad por Cocaína</text>\n  <text class=\"accS\" x=\"310\" y=\"319\" text-anchor=\"middle\">Benzodiacepinas EV (Diazepam o Lorazepam) + Nitratos sublinguales si persiste isquemia</text>\n</svg>"
    },
    "contexto": "Las urgencias toxicológicas por abuso de sustancias constituyen un motivo frecuente de consulta crítica en los servicios de urgencia chilenos. El enfrentamiento clínico se basa en el reconocimiento inmediato de los \"toxíndromes\" mayores: el síndrome simpaticomimético (cocaína, pasta base, anfetaminas) caracterizado por hipertensión maligna, taquicardia, midriasis y riesgo de vasoespasmo coronario; el síndrome sedante-hipnótico (benzodiacepinas), y el síndrome opioide. Dos perlas de examen de máxima jerarquía son: 1) En el dolor torácico por cocaína los betabloqueadores puros están formalmente contraindicados por desencadenar vasoconstricción coronaria masiva alfa sin oposición, siendo las benzodiacepinas el tratamiento de primera línea; y 2) El Flumazenil está contraindicado en la sobredosis de benzodiacepinas en pacientes con consumo crónico por el riesgo letal de desencadenar status epiléptico refractario.",
    "contentSections": [
      {
        "subhead": "1. Intoxicación por Cocaína y Pasta Base: Simpaticomimetismo y Vasoespasmo",
        "paragraphs": [
          "La cocaína bloquea la recaptación presináptica de dopamina, noradrenalina y serotonina, además de bloquear canales de sodio miocárdicos (efecto anestésico local y proarrítmico):",
          "• <strong>Clínica:</strong> Midriasis bilateral reactiva, taquicardia, hipertensión arterial severa, diaforesis, agitación psicomotora, hipertermia y psicosis paranoide transitoria con ideas de perjuicio.",
          "• <strong>Complicaciones Mayores:</strong> Isquemia miocárdica e infarto agudo al miocardio (por vasoespasmo coronario intenso y agregación plaquetaria facilitada), accidente cerebrovascular hemorrágico o isquémico, disección aórtica y rabdomiólisis.",
          "• <strong>Manejo del Dolor Torácico por Cocaína:</strong> <strong>Benzodiacepinas endovenosas de primera línea (Diazepam 5-10 mg EV o Lorazepam 2-4 mg EV)</strong> para reducir el tono simpático central, la presión arterial y la frecuencia cardíaca; Ácido Acetilsalicílico (AAS 250 mg) y Nitroglicerina sublingual para vasodilatación coronaria.",
          "• <strong>CONTRAINDICACIÓN MORTAL EUNACOM: BETABLOQUEADORES PUROS (Propranolol, Atenolol, Metoprolol).</strong> Si se bloquean los receptores beta-2 vasodilatadores, la noradrenalina circulante estimula de forma pura e irrestricta los receptores alfa-1 vasculares (\"alfa sin oposición\"), gatillando un <strong>vasoespasmo coronario masivo, crisis hipertensiva maligna y paro cardíaco irreversible</strong>."
        ]
      },
      {
        "subhead": "2. Intoxicación y Abstinencia por Benzodiacepinas",
        "paragraphs": [
          "• <strong>Intoxicación Aguda:</strong> Somnolencia, ataxia, disartria, nistagmo y depresión del nivel de conciencia con pupilas de tamaño normal o midriáticas lentas y signos vitales estables. La depresión respiratoria es rara en monoterapia oral, pero grave si se combina con alcohol u opioides.",
          "• <strong>Rol Restringido de Flumazenil:</strong> Antagonista competitivo selectivo del receptor GABA-A. Su uso debe ser extremadamente cauteloso: <strong>ESTÁ FORMALMENTE CONTRAINDICADO EN CONSUMIDORES CRÓNICOS DE BENZODIACEPINAS O COINGESTA DE ANTIDEPRESIVOS TRICÍCLICOS</strong>, ya que precipita de forma fulminante un síndrome de abstinencia severo con <strong>convulsiones y status epiléptico refractario mortal</strong>. La conducta de elección en intoxicación por BZD en usuarios habituales es el <strong>soporte ventilatorio e hidratación conservadora</strong>.",
          "• <strong>Síndrome de Abstinencia a BZD:</strong> Ansiedad de rebote severa, insomnio, temblor, hiperestesia sensorial, despersonalización y <strong>convulsiones de abstinencia</strong> tras suspensión brusca de BZD de vida media corta (Alprazolam). Manejo: reinstaurar BZD de vida media larga (Diazepam o Clonazepam) y pautar una reducción gradual y escalonada del 10 al 25% semanal."
        ]
      },
      {
        "subhead": "3. Cannabis: Intoxicación Aguda y Síndrome de Hiperemesis Cannabinoide",
        "paragraphs": [
          "• <strong>Intoxicación Aguda:</strong> Euforia inicial seguida de relajación, alteración de la memoria a corto plazo, distorsión témporo-espacial, aumento del apetito (\"bajón\"), taquicardia sinusal e <strong>hiperemia conjuntival (inyección conjuntival bilateral característica)</strong>. En personas con labilidad o dosis altas puede gatillar crisis de angustia paroxísticas o brotes psicóticos agudos (\"psicosis inducida por cannabis\").",
          "• <strong>Síndrome de Hiperemesis Cannabinoide:</strong> Cuadro clínico paradójico en consumidores crónicos pesados (> 1 año de uso diario) caracterizado por <strong>episodios cíclicos recurrentes de náuseas incoercibles, vómitos explosivos y dolor abdominal epigástrico</strong>. <em>Signo patognomónico:</em> <strong>Compulsión por tomar baños o duchas prolongadas con agua muy caliente</strong>, lo cual alivia los síntomas al modular los receptores TRPV1 cutáneos. El único tratamiento definitivo es la <strong>cesación permanente del cannabis</strong>."
        ]
      }
    ],
    "table": {
      "title": "Toxíndromes Mayores en el Servicio de Urgencias: Reconocimiento Clínico Rápido",
      "headers": [
        "Toxíndrome",
        "Drogas Típicas",
        "Signos Vitales y Pupilas",
        "Manifestaciones Clínicas y Antídoto"
      ],
      "rows": [
        [
          "Simpaticomimético",
          "Cocaína, pasta base, anfetaminas, éxtasis",
          "Taquicardia, HTA severa, hipertermia, MIDRIASIS",
          "Diaforesis, agitación, vasoespasmo · Antídoto: BENZODIACEPINAS EV"
        ],
        [
          "Sedante-Hipnótico",
          "Benzodiacepinas, barbitúricos, zolpidem",
          "Hipotensión leve, bradipnea, pupilas normales",
          "Sopor, ataxia, disartria · Soporte ventilatorio (Flumazenil restringido)"
        ],
        [
          "Opioide",
          "Morfina, heroína, fentanilo, metadona",
          "BRADIPNEA SEVERA, hipotensión, MIOSIS PUNTIFORME",
          "Coma, depresión respiratoria mortal · Antídoto: NALOXONA EV"
        ],
        [
          "Anticolinérgico",
          "Atropina, antidepresivos tricíclicos, antihistamínicos",
          "Taquicardia, hipertermia, MIDRIASIS ARREACTIVA",
          "Piel seca y roja (\"rojo como betarraga, seco como hueso, loco como cabra\")"
        ]
      ]
    },
    "vignette": {
      "title": "Caso Clínico Tipo EUNACOM",
      "text": "Hombre de 25 años es llevado por sus amigos al servicio de urgencias tras consumir cocaína y alcohol en una fiesta clandestina. Presenta dolor precordial opresivo intenso irradiado a mandíbula y brazo izquierdo de 45 minutos de evolución, acompañado de sensación inminente de muerte. Al examen físico se aprecia en extremo agitado, sudoroso, pálido, con midriasis bilateral marcada e hiperemia conjuntival. Signos vitales: PA 205/115 mmHg, FC 135 lpm, SatO2 98%. El electrocardiograma de 12 derivaciones evidencia taquicardia sinusal con infradesnivel del segmento ST de 2 mm en derivaciones V2 a V5. Un interno de medicina propone iniciar Propranolol endovenoso para descender la frecuencia cardíaca y la presión arterial.",
      "conducta": "El paciente presenta un Síndrome Coronario Agudo secundario a vasoespasmo coronario e isquemia miocárdica inducida por intoxicación aguda por cocaína (síndrome simpaticomimético severo). La propuesta de administrar Propranolol (o cualquier betabloqueador puro) es un ERROR GRAVE Y MORTAL: al bloquear los receptores beta-2 vasodilatadores del lecho coronario y periférico, la gran cantidad de catecolaminas circulantes estimula sin oposición los receptores alfa-1 adrenérgicos, provocando un vasoespasmo coronario oclusivo total, elevación catastrófica de la presión arterial y riesgo de fibrilación ventricular o disección aórtica. La conducta médica correcta e inmediata comprende: 1) Rechazar la administración de betabloqueadores; 2) Administrar Benzodiacepinas endovenosas de primera línea (ej. Diazepam 5 a 10 mg EV lento o Lorazepam 2-4 mg EV) para calmar la descarga simpática central; 3) Indicar Aspirina 250 mg oral; 4) Administrar Nitroglicerina sublingual o en infusión para inducir vasodilatación coronaria directa; y 5) Enviar a hemodinamia si no cede el dolor ni la isquemia tras el tratamiento médico."
    },
    "explicacion": "El paciente presenta un Síndrome Coronario Agudo secundario a vasoespasmo coronario e isquemia miocárdica inducida por intoxicación aguda por cocaína (síndrome simpaticomimético severo). La propuesta de administrar Propranolol (o cualquier betabloqueador puro) es un ERROR GRAVE Y MORTAL: al bloquear los receptores beta-2 vasodilatadores del lecho coronario y periférico, la gran cantidad de catecolaminas circulantes estimula sin oposición los receptores alfa-1 adrenérgicos, provocando un vasoespasmo coronario oclusivo total, elevación catastrófica de la presión arterial y riesgo de fibrilación ventricular o disección aórtica. La conducta médica correcta e inmediata comprende: 1) Rechazar la administración de betabloqueadores; 2) Administrar Benzodiacepinas endovenosas de primera línea (ej. Diazepam 5 a 10 mg EV lento o Lorazepam 2-4 mg EV) para calmar la descarga simpática central; 3) Indicar Aspirina 250 mg oral; 4) Administrar Nitroglicerina sublingual o en infusión para inducir vasodilatación coronaria directa; y 5) Enviar a hemodinamia si no cede el dolor ni la isquemia tras el tratamiento médico.",
    "keyPoints": [
      "El toxíndrome simpaticomimético (cocaína, pasta base) se caracteriza por taquicardia, hipertensión severa, hipertermia, diaforesis y midriasis bilateral.",
      "En el dolor torácico inducido por cocaína, los betabloqueadores puros (Propranolol, Atenolol) están FORMALMENTE CONTRAINDICADOS por estimulación alfa sin oposición.",
      "El tratamiento de primera línea de la isquemia y dolor torácico por cocaína son las BENZODIACEPINAS ENDOVENOSAS asociadas a nitratos.",
      "El Flumazenil está contraindicado en la sobredosis de benzodiacepinas en pacientes con consumo crónico por el riesgo letal de desencadenar status epiléptico.",
      "La tríada de sobredosis de opioides es: miosis puntiforme, depresión respiratoria y coma (se revierte con Naloxona EV).",
      "El Síndrome de Hiperemesis Cannabinoide cursa con vómitos cíclicos y alivio sintomático con baños prolongados de agua caliente.",
      "Trampa del examen: Jamás indicar betabloqueadores puros a un paciente hipertenso o con dolor torácico tras consumir cocaína; el fármaco de elección es una benzodiacepina EV."
    ],
    "questions": [
      {
        "stem": "Un hombre de 24 años consulta en urgencias por dolor precordial opresivo de 30 minutos de evolución tras haber consumido cocaína. Al ingreso destaca muy angustiado, sudoroso, con midriasis bilateral reactiva, PA 195/110 mmHg y FC 130 lpm. El ECG muestra taquicardia sinusal e infradesnivel del ST de 1.5 mm en cara anterolateral. ¿Cuál de los siguientes fármacos está FORMALMENTE CONTRAINDICADO en este paciente?",
        "options": [
          {
            "id": "A",
            "text": "Diazepam endovenoso"
          },
          {
            "id": "B",
            "text": "Nitroglicerina sublingual"
          },
          {
            "id": "C",
            "text": "Propranolol endovenoso"
          },
          {
            "id": "D",
            "text": "Ácido Acetilsalicílico oral"
          },
          {
            "id": "E",
            "text": "Lorazepam endovenoso"
          }
        ],
        "correcta": "C",
        "explicacion": "En la intoxicación por cocaína con complicaciones cardiovasculares (dolor torácico, isquemia miocárdica, hipertensión severa), los betabloqueadores puros no selectivos (como Propranolol) o selectivos (Atenolol, Metoprolol) están formalmente contraindicados. Al antagonizar los receptores beta-2 vasculares que median vasodilatación, la gran sobrecarga de noradrenalina y adrenalina circulante estimula libremente los receptores alfa-1 vasculares (fenómeno de estimulación alfa sin oposición), lo que intensifica drásticamente el vasoespasmo de las arterias coronarias y la vasoconstricción periférica, pudiendo desencadenar infarto masivo transmural, crisis hipertensiva maligna y muerte. El tratamiento de primera línea son las benzodiacepinas EV (A y E), nitratos (B) y AAS (D). Perla de examen: Los betabloqueadores puros están contraindicados en dolor torácico por cocaína por el riesgo de vasoespasmo alfa sin oposición.",
        "recTag": "Banco Oficial AEE · Perfil V3 5.01.1.011"
      },
      {
        "stem": "Una mujer de 65 años con antecedente de insomnio crónico en tratamiento regular con Clonazepam 2 mg diario desde hace 10 años es traída a urgencias en sopor profundo tras ingerir accidentalmente una dosis triple de su medicación junto con una copa de vino. Sus signos vitales son estables (PA 115/70 mmHg, FC 72 lpm, SatO2 97% ambiental) y no presenta compromiso hemodinámico ni apnea. El médico de turno evalúa administrar Flumazenil endovenoso para revertir el sopor. ¿Por qué está desaconsejado o contraindicado el uso de Flumazenil en este escenario?",
        "options": [
          {
            "id": "A",
            "text": "Porque el flumazenil carece de acción sobre los receptores de clonazepam"
          },
          {
            "id": "B",
            "text": "Porque en usuarios crónicos de benzodiacepinas el flumazenil precipita un síndrome de abstinencia agudo severo con alto riesgo de status epiléptico refractario mortal"
          },
          {
            "id": "C",
            "text": "Porque el flumazenil produce hiperpotasemia fulminante"
          },
          {
            "id": "D",
            "text": "Porque está reservado exclusivamente para sobredosis de morfina y opioides"
          },
          {
            "id": "E",
            "text": "Porque aumenta la presión intraocular de forma irreversible"
          }
        ],
        "correcta": "B",
        "explicacion": "El Flumazenil es un antagonista competitivo selectivo de los receptores GABA-A. Si bien revierte rápidamente el efecto de las benzodiacepinas en intoxicaciones agudas accidentales en pacientes sin consumo previo (ej. reversión de sedación post-endoscopía), está formalmente contraindicado o fuertemente desaconsejado en pacientes con consumo crónico de benzodiacepinas (como esta paciente con 10 años de uso de clonazepam). En estos pacientes, el bloqueo súbito del receptor GABA precipita de forma violenta un síndrome de abstinencia agudo caracterizado por convulsiones generalizadas y status epiléptico de muy difícil manejo que puede ser letal. Dado que la paciente mantiene signos vitales estables y adecuada ventilación, la conducta correcta es la observación protegida y el soporte clínico hasta que el fármaco se metabolice. Perla de examen: El flumazenil no debe usarse en sobredosis de benzodiacepinas en pacientes dependientes crónicos por riesgo de status epiléptico.",
        "recTag": "Banco Oficial AEE · Perfil V3 5.01.1.011"
      }
    ],
    "vignetteText": "Hombre de 25 años es llevado por sus amigos al servicio de urgencias tras consumir cocaína y alcohol en una fiesta clandestina. Presenta dolor precordial opresivo intenso irradiado a mandíbula y brazo izquierdo de 45 minutos de evolución, acompañado de sensación inminente de muerte. Al examen físico se aprecia en extremo agitado, sudoroso, pálido, con midriasis bilateral marcada e hiperemia conjuntival. Signos vitales: PA 205/115 mmHg, FC 135 lpm, SatO2 98%. El electrocardiograma de 12 derivaciones evidencia taquicardia sinusal con infradesnivel del segmento ST de 2 mm en derivaciones V2 a V5. Un interno de medicina propone iniciar Propranolol endovenoso para descender la frecuencia cardíaca y la presión arterial."
  },
  {
    "id": "psiq-17",
    "classId": "psiq-17",
    "tier": 2,
    "blockNum": 4,
    "blockName": "Adicciones, Personalidad & Salud Mental Infanto-Juvenil",
    "topicLabel": "17.17",
    "title": "Trastornos de la Personalidad: Clúster A, B y C",
    "perfilCode": "1.09.1.001",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Norma Técnica de Salud Mental MINSAL · Atención y psicoterapia de Trastorno Límite de Personalidad en Red Secundaria (COSAM).",
    "reconstrucciones": "Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026",
    "frecuencia": "Alta · Diagnóstico diferencial de conductas impulsivas, parasuicidio y estilos interpersonales desadaptativos",
    "svg": null,
    "algoTitle": "Algoritmo de Identificación de los 10 Trastornos de Personalidad según los 3 Clústeres DSM-5",
    "diagram": {
      "title": "Clasificación Diagnóstica de los Trastornos de la Personalidad",
      "svg": "<svg viewBox=\"0 0 620 339\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#7e22ce\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#7e22ce;font-weight:700}\n    .acc{fill:#7e22ce;stroke:#6b21a8}.accT{fill:#fff}.accS{font-size:8px;fill:#f3e8ff}\n    .dec{fill:#faf5ff;stroke:#d8b4fe;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#7e22ce;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Patrón Permanente, Inflexible y Egosintónico de Conducta y Afectividad</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Inicio en la adolescencia o adultez temprana · Estable en el tiempo · Malestar o deterioro</text>\n  <path class=\"ln\" d=\"M310,47 V69\"/>\n  <rect class=\"dec\" x=\"70\" y=\"69\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Clasificación según los Tres Clústeres del DSM-5</text>\n  <text class=\"sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">Rasgos cognitivos, emocionales e interpersonales dominantes</text>\n  <path class=\"ln\" d=\"M310,108 V138 H158 V148\"/>\n  <path class=\"ln\" d=\"M310,138 H462 V148\"/>\n  <text class=\"lbl\" x=\"158\" y=\"133\" text-anchor=\"middle\">Clúster A (Raros / Excéntricos)</text>\n  <text class=\"lbl\" x=\"462\" y=\"133\" text-anchor=\"middle\">Clúster B (Dramáticos / Emocionales)</text>\n  <rect class=\"dec\" x=\"12\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"158\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Paranoide, Esquizoide y Esquizotípico</text>\n  <text class=\"sub\" x=\"158\" y=\"175\" text-anchor=\"middle\">Aislamiento social, desconfianza, pensamiento mágico</text>\n  <text class=\"sub\" x=\"158\" y=\"186\" text-anchor=\"middle\">Frialdad afectiva</text>\n  <rect class=\"crit\" x=\"316\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"462\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Límite (Borderline), Antisocial, Histriónico, Narcisista</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"175\" text-anchor=\"middle\">Desregulación emocional, impulsividad,</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"186\" text-anchor=\"middle\">parasuicidios, manipulación y falta de empatía</text>\n  <path class=\"ln\" d=\"M158,198 V208 H310 V220\"/>\n  <path class=\"ln\" d=\"M462,198 V208 H310 V220\"/>\n  <rect class=\"warn\" x=\"100\" y=\"220\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">Clúster C (Ansiosos / Temerosos)</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"247\" text-anchor=\"middle\">Evitativo (teme el rechazo), Dependiente (necesidad</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"258\" text-anchor=\"middle\">de sumisión), Obsesivo-Compulsivo (TPOC: rigidez)</text>\n  <path class=\"ln\" d=\"M310,270 V292\"/>\n  <rect class=\"acc\" x=\"100\" y=\"292\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"307\" text-anchor=\"middle\" font-weight=\"700\">Tratamiento de Elección en Trastorno Límite (Borderline)</text>\n  <text class=\"accS\" x=\"310\" y=\"319\" text-anchor=\"middle\">Terapia Dialéctico-Conductual (DBT) · Fármacos solo como apoyo sintomático temporal</text>\n</svg>"
    },
    "contexto": "Un Trastorno de la Personalidad es un patrón perdurable, generalizado e inflexible de experiencia interna y comportamiento que se desvía acusadamente de las expectativas culturales del sujeto, con inicio en la adolescencia o adultez temprana, de carácter estable en el tiempo y que causa malestar clínicamente significativo o deterioro en lo social y laboral. A diferencia de los trastornos del ánimo, los rasgos de personalidad son egosintónicos (el individuo los percibe como parte integral de su identidad). El DSM-5 los agrupa en tres clústeres (A, B y C). En el EUNACOM destacan: el Trastorno Límite (Borderline) por su alta frecuencia de crisis suicidas en urgencias y su respuesta a la Terapia Dialéctico-Conductual (DBT), y el diagnóstico diferencial entre el Esquizoide (desinterés social genuino) y el Evitativo (deseo de socializar pero terror al rechazo).",
    "contentSections": [
      {
        "subhead": "1. Los Tres Clústeres de la Personalidad según DSM-5",
        "paragraphs": [
          "• <strong>Clúster A (\"Raros, excéntricos, distantes\"):</strong> Tienen en común la dificultad para establecer vínculos íntimos y la suspicacia o rareza cognitiva:",
          "  - <em>Paranoide:</em> Desconfianza y suspicacia generalizada hacia los demás; interpreta los motivos ajenos como malévolos (\"me quieren perjudicar\"). Rencor persistente.",
          "  - <em>Esquizoide:</em> Patrón de desapego en las relaciones sociales y restricción de la expresión emocional. <strong>No desea ni disfruta las relaciones íntimas</strong> (incluida la familia); prefiere actividades solitarias y muestra frialdad e indiferencia a los elogios o críticas.",
          "  - <em>Esquizotípico:</em> Malestar agudo en relaciones íntimas acompañado de distorsiones cognitivas/perceptivas y comportamiento excéntrico: pensamiento mágico (creer en telepatía o clarividencia), ideas de referencia y lenguaje extravagante.",
          "• <strong>Clúster B (\"Dramáticos, emocionales, erráticos, impulsivos\"):</strong>",
          "  - <em>Límite / Borderline:</em> Inestabilidad marcada en relaciones interpersonales, autoimagen y afectos, con <strong>notable impulsividad</strong>. Esfuerzos frenéticos por evitar el abandono real o imaginado, relaciones tempestuosas de polarización (\"idealización vs devaluación\"), alteración de la identidad, <strong>conductas o amenazas suicidas recurrentes y automutilaciones (cortes en muñecas)</strong>, sensación crónica de vacío y accesos de ira inapropiada.",
          "  - <em>Antisocial:</em> Desprecio y violación de los derechos de los demás que se manifiesta <strong>desde los 15 años</strong> (engañar, robar, peleas) con diagnóstico formal <strong>solo a partir de los 18 años</strong>. Falta de remordimiento y culpa, irresponsabilidad laboral y económica, y desprecio por las leyes.",
          "  - <em>Histriónico:</em> Emotividad excesiva y búsqueda constante de atención. Se siente incómodo si no es el centro de atención, seducción sexual inapropiada, teatralidad y sugestionabilidad.",
          "  - <em>Narcisista:</em> Patrón de grandiosidad, necesidad de admiración constante y <strong>falta total de empatía</strong> hacia los demás.",
          "• <strong>Clúster C (\"Ansiosos, temerosos\"):</strong>",
          "  - <em>Evitativo:</em> Inhibición social, sentimientos de incompetencia e hipersensibilidad a la evaluación negativa. <strong>Desea intensamente tener amigos</strong>, pero evita actividades sociales por miedo al rechazo o ridículo.",
          "  - <em>Dependiente:</em> Necesidad dominante y excesiva de que le cuiden, con comportamiento sumiso y apego exagerado por miedo a la separación.",
          "  - <em>Obsesivo-Compulsivo (TPOC / Anancástico):</em> Preocupación excesiva por el orden, perfeccionismo y control mental, obstinado y rígido; egosintónico."
        ]
      },
      {
        "subhead": "2. Trastorno Límite de la Personalidad (TLP): Manejo en Crisis y DBT",
        "paragraphs": [
          "El TLP es el trastorno de personalidad que genera mayor demanda de urgencias médicas por gestos parasuicidas e impulsividad:",
          "• <strong>Manejo de Crisis en Urgencias:</strong> Curación quirúrgica limpia de heridas; actitud del médico firme, empática y neutra, <strong>evitando reforzar conductas desadaptativas ni emitir juicios punitivos</strong>. Evaluación estricta de riesgo suicida letal real.",
          "• <strong>Tratamiento Psicoterapéutico de Elección: Terapia Dialéctico-Conductual (DBT)</strong> desarrollada por Marsha Linehan. Enseña regulación emocional, tolerancia al malestar, efectividad interpersonal y mindfulness, reduciendo drásticamente las hospitalizaciones y suicidios.",
          "• <strong>Farmacoterapia:</strong> No cura el trastorno; se utiliza solo como apoyo sintomático acotado (estabilizadores del ánimo como lamotrigina/valproato para impulsividad o antipsicóticos atípicos a dosis bajas para disforia y micropsicosis)."
        ]
      }
    ],
    "table": {
      "title": "Matriz Comparativa de los 10 Trastornos de la Personalidad según DSM-5",
      "headers": [
        "Clúster",
        "Trastorno de Personalidad",
        "Rasgo Cardinal Distintivo",
        "Diagnóstico Diferencial Clave"
      ],
      "rows": [
        [
          "Clúster A (Raros)",
          "Paranoide",
          "Suspicacia constante, desconfianza, rencor",
          "Trastorno delirante (en paranoide no hay delirio fijo)"
        ],
        [
          "Clúster A (Raros)",
          "Esquizoide",
          "Aislamiento voluntario, frialdad, desinterés social",
          "Evitativo (en esquizoide NO hay deseo de socializar)"
        ],
        [
          "Clúster A (Raros)",
          "Esquizotípico",
          "Pensamiento mágico, excentricidad, rarezas",
          "Esquizofrenia (en esquizotípico no hay psicosis franca)"
        ],
        [
          "Clúster B (Dramáticos)",
          "Límite (Borderline)",
          "Inestabilidad afectiva, impulsividad, cortes en piel",
          "Trastorno Bipolar (en TLP la labilidad dura horas)"
        ],
        [
          "Clúster B (Dramáticos)",
          "Antisocial",
          "Violación de leyes, falta de culpa, psicopatía",
          "Trastorno de conducta de la infancia (< 15 años)"
        ],
        [
          "Clúster B (Dramáticos)",
          "Histriónico",
          "Búsqueda de atención, seducción, teatralidad",
          "Narcisista (en histriónico importa agradar)"
        ],
        [
          "Clúster B (Dramáticos)",
          "Narcisista",
          "Megalomanía, falta de empatía, necesidad de halago",
          "Episodio maníaco (el narcisismo es continuo)"
        ],
        [
          "Clúster C (Ansiosos)",
          "Evitativo",
          "Teme el rechazo, pero DESEA tener amigos",
          "Fobia social / Esquizoide (desea vínculo pero teme)"
        ],
        [
          "Clúster C (Ansiosos)",
          "Dependiente",
          "Sumisión, incapaz de tomar decisiones sin otros",
          "Depresión mayor (sumisión continua desde juventud)"
        ],
        [
          "Clúster C (Ansiosos)",
          "Obsesivo-Compulsivo",
          "Perfeccionismo rígido, control, egosintónico",
          "TOC (en TPOC no hay obsesiones ni compulsiones)"
        ]
      ]
    },
    "vignette": {
      "title": "Caso Clínico Tipo EUNACOM",
      "text": "Mujer de 21 años es llevada al servicio de urgencias por su novio tras provocarse múltiples cortes superficiales en ambos antebrazos con una hoja de afeitar luego de que él le manifestara que viajaría por trabajo el fin de semana. Al ingreso la paciente llora desconsoladamente diciendo que su pareja \"es un monstruo que la va a dejar sola para siempre\", mientras que media hora más tarde le suplica perdón afirmando que \"él es la única razón de su vida\". Presenta un historial de relaciones afectivas intensas y caóticas, atracones de comida seguidos de compras desmedidas, abandono de carreras universitarias y sensación permanente de \"vacío en el pecho\". En los últimos dos años ha consultado 4 veces en urgencias por intoxicaciones medicamentosas impulsivas no letales.",
      "conducta": "La paciente presenta un Trastorno de la Personalidad Límite (Borderline) del Clúster B: inestabilidad crónica en las relaciones interpersonales caracterizada por polarización extrema (idealización y devaluación), esfuerzos desesperados para evitar el abandono, conductas de automutilación repetitiva (cortes), impulsividad en gastos y atracones, sensación crónica de vacío y desregulación emocional severa. La conducta médica correcta comprende: 1) Curación aséptica de las heridas sin actitud moralizante ni castigadora; 2) Evaluación rigurosa del riesgo suicida inminente; 3) Contención emocional estructurada y calmada en el box de urgencias; y 4) Derivación a la Red de Salud Mental (COSAM / Psiquiatría ambulatoria) para ingreso a Terapia Dialéctico-Conductual (DBT), que es la psicoterapia de elección demostrada para reducir el parasuicidio y mejorar la regulación afectiva. Los psicofármacos solo se usan como coadyuvantes sintomáticos temporales."
    },
    "explicacion": "La paciente presenta un Trastorno de la Personalidad Límite (Borderline) del Clúster B: inestabilidad crónica en las relaciones interpersonales caracterizada por polarización extrema (idealización y devaluación), esfuerzos desesperados para evitar el abandono, conductas de automutilación repetitiva (cortes), impulsividad en gastos y atracones, sensación crónica de vacío y desregulación emocional severa. La conducta médica correcta comprende: 1) Curación aséptica de las heridas sin actitud moralizante ni castigadora; 2) Evaluación rigurosa del riesgo suicida inminente; 3) Contención emocional estructurada y calmada en el box de urgencias; y 4) Derivación a la Red de Salud Mental (COSAM / Psiquiatría ambulatoria) para ingreso a Terapia Dialéctico-Conductual (DBT), que es la psicoterapia de elección demostrada para reducir el parasuicidio y mejorar la regulación afectiva. Los psicofármacos solo se usan como coadyuvantes sintomáticos temporales.",
    "keyPoints": [
      "Los Trastornos de la Personalidad son patrones perdurables, rígidos y egosintónicos con debut en la adolescencia o adultez joven.",
      "Clúster A: Raros y excéntricos (Paranoide, Esquizoide, Esquizotípico).",
      "Clúster B: Dramáticos e impulsivos (Límite, Antisocial, Histriónico, Narcisista).",
      "Clúster C: Ansiosos y temerosos (Evitativo, Dependiente, Obsesivo-Compulsivo).",
      "Diferencia crítica: El Esquizoide no tiene ningún deseo de interactuar socialmente; el Evitativo desea con fervor tener amigos pero el miedo al rechazo lo inhibe.",
      "El Trastorno Límite (Borderline) se caracteriza por miedo al abandono, relaciones caóticas, automutilaciones, sensación crónica de vacío e impulsividad.",
      "La Terapia Dialéctico-Conductual (DBT) de Marsha Linehan es la psicoterapia de elección demostrada para el Trastorno Límite.",
      "Trampa de examen: El diagnóstico de Trastorno de Personalidad Antisocial exige que el paciente tenga al menos 18 años de edad y antecedentes de trastorno de conducta antes de los 15 años."
    ],
    "questions": [
      {
        "stem": "Un hombre de 34 años, soltero, informático que realiza teletrabajo en horario nocturno, es derivado por salud laboral. Vive completamente solo, no tiene amigos y refiere: \"No me interesa compartir con nadie, me siento mucho más cómodo así; los elogios o reproches de mi jefe me dan exactamente lo mismo\". No presenta ideas delirantes, alucinaciones ni síntomas afectivos. Su discurso es coherente pero con notable frialdad emocional. ¿Cuál es el diagnóstico de personalidad más probable?",
        "options": [
          {
            "id": "A",
            "text": "Trastorno de personalidad por evitación"
          },
          {
            "id": "B",
            "text": "Trastorno de personalidad esquizoide"
          },
          {
            "id": "C",
            "text": "Trastorno de personalidad esquizotípico"
          },
          {
            "id": "D",
            "text": "Trastorno de personalidad paranoide"
          },
          {
            "id": "E",
            "text": "Fobia social grave"
          }
        ],
        "correcta": "B",
        "explicacion": "El paciente presenta un Trastorno de la Personalidad Esquizoide (Clúster A): patrón dominante de distanciamiento de las relaciones sociales y restricción de la expresión emocional en el plano interpersonal. El hallazgo distintivo es que el paciente genuinamente NO desea ni disfruta de las relaciones íntimas, muestra preferencia por actividades solitarias y manifiesta indiferencia ante la aprobación o crítica ajena, sin angustia egodistónica. En contraste, el trastorno de personalidad por evitación (A) y la fobia social (E) se caracterizan porque los pacientes sí anhelan el contacto humano, pero se aíslan por miedo angustioso al rechazo o la humillación. El esquizotípico (C) presenta pensamiento mágico y rarezas perceptivas. Perla de examen: El paciente esquizoide no tiene ningún interés en socializar; el evitativo desea amigos pero teme el rechazo.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.09.1.001"
      },
      {
        "stem": "Una joven de 20 años acude al servicio de urgencias traída por su madre tras cortarse los antebrazos superficialmente con un bisturí escolar. La madre refiere que la paciente pasa de la risa al llanto en cuestión de horas, gasta dinero impulsivamente, tiene un miedo pánico a quedarse sola y con frecuencia acusa a sus familiares de \"no quererla\". ¿Cuál es el abordaje psicoterapéutico que cuenta con mayor respaldo de evidencia científica para este cuadro?",
        "options": [
          {
            "id": "A",
            "text": "Terapia Electroconvulsiva bilateral"
          },
          {
            "id": "B",
            "text": "Terapia Dialéctico-Conductual (DBT)"
          },
          {
            "id": "C",
            "text": "Psicoanálisis clásico exclusivo"
          },
          {
            "id": "D",
            "text": "Hipnosis clínica regresiva"
          },
          {
            "id": "E",
            "text": "Terapia de relajación pasiva exclusiva"
          }
        ],
        "correcta": "B",
        "explicacion": "El cuadro corresponde clínicamente a un Trastorno de Personalidad Límite (Borderline), caracterizado por desregulación afectiva severa, impulsividad, automutilaciones (cortes en piel) y miedo intenso al abandono. La Terapia Dialéctico-Conductual (DBT), desarrollada específicamente por Marsha Linehan para pacientes con desregulación emocional y conductas autolesivas repetitivas, es el modelo psicoterapéutico de primera línea que cuenta con la mayor evidencia científica en ensayos clínicos aleatorizados, demostrando reducir de forma significativa los gestos parasuicidas, las consultas en urgencias y las hospitalizaciones. Los psicofármacos se usan únicamente como apoyo sintomático. La TEC (A) no está indicada para trastornos de la personalidad. Perla de examen: La Terapia Dialéctico-Conductual (DBT) es la intervención de elección para el Trastorno Límite de Personalidad.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.09.1.001"
      }
    ],
    "vignetteText": "Mujer de 21 años es llevada al servicio de urgencias por su novio tras provocarse múltiples cortes superficiales en ambos antebrazos con una hoja de afeitar luego de que él le manifestara que viajaría por trabajo el fin de semana. Al ingreso la paciente llora desconsoladamente diciendo que su pareja \"es un monstruo que la va a dejar sola para siempre\", mientras que media hora más tarde le suplica perdón afirmando que \"él es la única razón de su vida\". Presenta un historial de relaciones afectivas intensas y caóticas, atracones de comida seguidos de compras desmedidas, abandono de carreras universitarias y sensación permanente de \"vacío en el pecho\". En los últimos dos años ha consultado 4 veces en urgencias por intoxicaciones medicamentosas impulsivas no letales."
  },
  {
    "id": "psiq-18",
    "classId": "psiq-18",
    "tier": 2,
    "blockNum": 4,
    "blockName": "Adicciones, Personalidad & Salud Mental Infanto-Juvenil",
    "topicLabel": "17.18",
    "title": "Psiquiatría Infanto-Juvenil: TDAH (Metilfenidato), Trastornos de la Conducta Alimentaria",
    "perfilCode": "4.01.1.001",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Programa de Salud Escolar y del Adolescente MINSAL · Protocolos de Nutrición y Salud Mental en Atención Primaria.",
    "reconstrucciones": "Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026",
    "frecuencia": "Alta · Preguntas habituales sobre criterios diagnósticos de TDAH, Metilfenidato y gravedad médica en Anorexia",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico de TDAH Escolar y Criterios de Hospitalización Médica en Anorexia Nervosa",
    "diagram": {
      "title": "Enfrentamiento Clínico en TDAH y Trastornos de la Conducta Alimentaria",
      "svg": "<svg viewBox=\"0 0 620 339\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#7e22ce\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#7e22ce;font-weight:700}\n    .acc{fill:#7e22ce;stroke:#6b21a8}.accT{fill:#fff}.accS{font-size:8px;fill:#f3e8ff}\n    .dec{fill:#faf5ff;stroke:#d8b4fe;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#7e22ce;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Evaluación de Salud Mental Infanto-Juvenil en APS</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Pesquisa en edad escolar y adolescencia temprana · Evaluación multientorno</text>\n  <path class=\"ln\" d=\"M310,47 V69\"/>\n  <rect class=\"dec\" x=\"70\" y=\"69\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Motivo de Consulta Cardinal: ¿Rendimiento/Conducta o Peso/Alimentación?</text>\n  <text class=\"sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">Diferenciación entre TDAH y Trastornos de la Conducta Alimentaria</text>\n  <path class=\"ln\" d=\"M310,108 V138 H158 V148\"/>\n  <path class=\"ln\" d=\"M310,138 H462 V148\"/>\n  <text class=\"lbl\" x=\"158\" y=\"133\" text-anchor=\"middle\">Déficit Atencional / Hiperactividad Escolar</text>\n  <text class=\"lbl\" x=\"462\" y=\"133\" text-anchor=\"middle\">Restricción Alimentaria, Baja Ponderal y Miedo a Engordar</text>\n  <rect class=\"dec\" x=\"12\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"158\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Trastorno Déficit Atencional (TDAH)</text>\n  <text class=\"sub\" x=\"158\" y=\"175\" text-anchor=\"middle\">Síntomas presentes antes de los 12 años en ≥ 2 ambientes</text>\n  <text class=\"sub\" x=\"158\" y=\"186\" text-anchor=\"middle\">Metilfenidato 1.ª línea</text>\n  <rect class=\"warn\" x=\"316\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"462\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Trastornos Conducta Alimentaria (TCA)</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"175\" text-anchor=\"middle\">Anorexia (IMC bajo, distorsión) vs</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"186\" text-anchor=\"middle\">Bulimia (atracones + purgas, peso normal)</text>\n  <path class=\"ln\" d=\"M158,198 V208 H310 V220\"/>\n  <path class=\"ln\" d=\"M462,198 V208 H310 V220\"/>\n  <rect class=\"crit\" x=\"100\" y=\"220\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">Criterios de Hospitalización Médica Urgente en Anorexia</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"247\" text-anchor=\"middle\">IMC &lt; 13-14 kg/m², Bradicardia &lt; 40 lpm, Hipotensión &lt; 80/50, Hipokalemia, QTc largo</text>\n  <path class=\"ln\" d=\"M310,259 V281\"/>\n  <rect class=\"acc\" x=\"100\" y=\"281\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"296\" text-anchor=\"middle\" font-weight=\"700\">Prevención del Síndrome de Realimentación</text>\n  <text class=\"accS\" x=\"310\" y=\"308\" text-anchor=\"middle\">Realimentación calórica lenta y progresiva</text>\n  <text class=\"accS\" x=\"310\" y=\"319\" text-anchor=\"middle\">Monitoreo estricto de Fósforo sérico (hipofosfatemia)</text>\n</svg>"
    },
    "contexto": "La psiquiatría infanto-juvenil abarca patologías del neurodesarrollo y del comportamiento de alta repercusión en la salud pública. Dos entidades destacan en el EUNACOM por su frecuencia y gravedad: 1) El Trastorno por Déficit de Atención e Hiperactividad (TDAH), caracterizado por inatención, hiperactividad e impulsividad con debut antes de los 12 años y presencia en al menos dos entornos (colegio y hogar), cuyo fármaco de primera línea es el estimulante Metilfenidato; y 2) Los Trastornos de la Conducta Alimentaria (TCA), destacando la Anorexia Nervosa (restricción severa con peso significativamente bajo, miedo intenso a engordar y alteración de la silueta corporal) y la Bulimia Nervosa (atracones con purgas y peso habitualmente normal). En anorexia, el médico general debe reconocer de inmediato los criterios de hospitalización médica urgente por riesgo de muerte súbita arritmogénica y prevenir el síndrome de realimentación.",
    "contentSections": [
      {
        "subhead": "1. Trastorno por Déficit de Atención e Hiperactividad (TDAH): Criterios DSM-5 y Manejo",
        "paragraphs": [
          "El TDAH es una condición del neurodesarrollo con base genética poligénica (heredabilidad ~75%) ligada a un déficit de dopamina y noradrenalina en la corteza prefrontal:",
          "• <strong>Criterios Diagnósticos Obligatorios:</strong>",
          "  1) Presencia de al menos <strong>seis (6) síntomas</strong> de inatención y/o seis síntomas de hiperactividad-impulsividad durante al menos <strong>6 meses</strong> (en mayores de 17 años y adultos bastan 5 síntomas).",
          "  2) Varios síntomas deben haber estado presentes <strong>antes de los 12 años de edad</strong>.",
          "  3) Los síntomas deben manifestarse en <strong>al menos dos (2) entornos diferentes</strong> (ej. en el colegio y en la casa). Si un niño solo se distrae en clases pero rinde y se concentra en el hogar, no se puede diagnosticar TDAH.",
          "  4) Deterioro evidente del rendimiento académico o social.",
          "• <strong>Subtipos Clínicos:</strong> Presentación combinada (más frecuente), con falta de atención predominante (frecuente en niñas, pasa desapercibido por no tener hiperactividad) o con hiperactividad/impulsividad predominante.",
          "• <strong>Tratamiento:</strong> Intervención multimodal (psicopedagogía, adecuaciones curriculares PIE). El <strong>tratamiento farmacológico de primera línea son los psicoestimulantes: Metilfenidato</strong> (acción corta o liberación prolongada). Bloquea la recaptación de dopamina y noradrenalina prefrontal mejorando la concentración. Efectos adversos: disminución del apetito (monitorear curva pondoestatural), insomnio de conciliación y leve taquicardia/alza tensional."
        ]
      },
      {
        "subhead": "2. Anorexia Nervosa: Criterios Clínicos y Banderas Rojas Médicas",
        "paragraphs": [
          "La <strong>Anorexia Nervosa</strong> se define por tres criterios cardinales:",
          "• <strong>1) Restricción del aporte energético</strong> en relación con las necesidades, que conduce a un <strong>peso corporal significativamente bajo</strong> (IMC < 18.5 kg/m² en adultos o percentil peso/talla < 5.º en niños).",
          "• <strong>2) Miedo intenso a ganar peso</strong> o a engordar, o comportamiento persistente que interfiere en el aumento de peso.",
          "• <strong>3) Alteración en la percepción del propio peso o de la constitución (distorsión de la imagen corporal)</strong> o falta persistente de reconocimiento del peligro que entraña el bajo peso corporal.",
          "• <em>Subtipos:</em> Restrictivo puro vs Purgativo/con atracones.",
          "• <em>Manifestaciones somáticas de desnutrición:</em> <strong>Bradicardia sinusal (< 50 lpm)</strong>, hipotensión ortostática, hipotermia, piel seca amarillenta por hipercarotenemia, <strong>lanugo</strong> (vello fino y suave en dorso y cara), amenorrea (criterio ya no obligatorio en DSM-5 pero muy frecuente) y osteoporosis.",
          "• <strong>Criterios de Hospitalización Médica Inmediata en Anorexia:</strong>",
          "  - <strong>IMC < 13 a 14 kg/m²</strong> (o pérdida de peso aguda > 20% en 3 meses).",
          "  - <strong>Bradicardia severa < 40 lpm</strong> o arritmias ventriculares.",
          "  - <strong>Presión arterial sistólica < 80 mmHg</strong> o hipotensión ortostática grave.",
          "  - <strong>Prolongación del intervalo QTc > 460 ms</strong> en el ECG.",
          "  - <strong>Hipokalemia severa (< 3.0 mEq/L)</strong>, hipofosfatemia o hipoglicemia sintomática."
        ]
      },
      {
        "subhead": "3. Bulimia Nervosa y Prevención del Síndrome de Realimentación",
        "paragraphs": [
          "• <strong>Bulimia Nervosa:</strong> Episodios recurrentes de <strong>atracones de comida</strong> (ingesta voraz y rápida en un período < 2 horas de una cantidad desmesurada de comida, con sensación de pérdida de control) seguidos de <strong>conductas compensatorias inapropiadas</strong> para evitar engordar (vómitos autoinducidos, uso de laxantes/diuréticos, ayuno compensatorio o ejercicio extenuante), al menos 1 vez por semana durante 3 meses. A diferencia de la anorexia, las pacientes con bulimia <strong>presentan habitualmente PESO NORMAL O SOBREPESO</strong>. Signos físicos: erosiones del esmalte dental lingual, hipertrofia parotídea bilateral (asialia) y <strong>Signo de Russell</strong> (callosidades en nudillos por provocar el vómito). <em>Fármaco aprobado:</em> <strong>Fluoxetina en dosis altas de 60 mg/día</strong> reduce la frecuencia de atracones y purgas.",
          "• <strong>Síndrome de Realimentación (Refeeding Syndrome):</strong> Emergencia metabólica potencialmente mortal que ocurre al reintroducir hidratos de carbono bruscamente en un paciente caquéctico. El estímulo de la insulina promueve la entrada masiva de glucosa, potasio y fósforo al interior celular, desatando una <strong>HIPOFOSFATEMIA SEVERA AGUDA</strong> que causa paro cardíaco, edema pulmonar agudo, convulsiones y rabdomiólisis. <em>Prevención:</em> Realimentación enteral lenta y progresiva (iniciar con 1.000-1.200 kcal/día) con suplementación profiláctica de fósforo, magnesio y tiamina."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial: Anorexia Nervosa vs Bulimia Nervosa vs Trastorno por Atracón",
      "headers": [
        "Característica Clínica",
        "Anorexia Nervosa",
        "Bulimia Nervosa",
        "Trastorno por Atracón (Binge Eating)"
      ],
      "rows": [
        [
          "Peso Corporal / IMC",
          "SIGNIFICATIVAMENTE BAJO (IMC < 18.5; grave < 14)",
          "HABITUALMENTE NORMAL O SOBREPESO",
          "Sobrepeso u Obesidad marcada"
        ],
        [
          "Atracones compulsivos",
          "Solo en subtipo purgativo (cantidades pequeñas)",
          "SIEMPRE PRESENTES (grandes cantidades voraces)",
          "SIEMPRE PRESENTES (con gran culpa posterior)"
        ],
        [
          "Conductas compensatorias",
          "Restricción extrema, ejercicio extenuante, purgas",
          "SIEMPRE PRESENTES (vómitos, laxantes, ayuno)",
          "ESTRICTAMENTE AUSENTES (no hay purgas)"
        ],
        [
          "Distorsión de imagen",
          "Severa (se ve gorda estando caquéctica)",
          "Preocupación excesiva por el peso y la silueta",
          "Malestar subjetivo pero sin distorsión dismórfica"
        ],
        [
          "Fármaco de elección",
          "Ningún psicofármaco revierte la emaciación",
          "Fluoxetina en dosis altas (60 mg/día) + TCC",
          "Lisdexanfetamina o Topiramato + TCC"
        ]
      ]
    },
    "vignette": {
      "title": "Caso Clínico Tipo EUNACOM",
      "text": "Adolescente de 15 años es llevada a la consulta médica por su madre debido a una baja de peso alarmante de 14 kg en los últimos 4 meses. La madre relata que la joven come exclusivamente lechuga y agua, cuenta obsesivamente las calorías de cada alimento, se pesa cuatro veces al día y realiza abdominales intensos en su pieza por más de 3 horas diarias. Al examen físico: estatura 1.62 m, peso 36 kg (IMC 13.7 kg/m², desnutrición severa), piel amarillenta y seca, presencia de vello fino tipo lanugo en la espalda, manos frías y cianóticas. Signos vitales: PA 80/50 mmHg, FC 36 lpm (bradicardia sinusal marcada), temperatura axilar de 35.2 °C. Al ser examinada, la paciente llora airadamente diciendo que \"sus padres exageran y que ella todavía tiene las piernas y el abdomen deformes por exceso de grasa\". El electrocardiograma revela bradicardia sinusal extrema e intervalo QTc prolongado de 480 ms.",
      "conducta": "La paciente presenta una Anorexia Nervosa de subtipo restrictivo con criterios médicos de hospitalización inmediata de extrema urgencia: desnutrición crítica con IMC < 14 kg/m² (13.7 kg/m²), bradicardia sinusal severa (< 40 lpm: FC 36 lpm), hipotensión marcada, hipotermia (35.2 °C) y prolongación del intervalo QTc en el ECG, lo que confiere un riesgo inminente de arritmias ventriculares malignas (Torsades de Pointes) y paro cardíaco súbito. La conducta médica inmediata e innegociable es: 1) Hospitalización urgente en sala de pediatría o unidad de cuidados intermedios/UPC; 2) Monitorización cardíaca continua; 3) Protocolo de realimentación nutricional lenta y controlada (vía enteral o mixta) con soporte de tiamina y fósforo para prevenir activamente el Síndrome de Realimentación; 4) Balance hidroelectrolítico estricto; y 5) Abordaje psiquiátrico multidisciplinario una vez estabilizada hemodinámicamente. Está formalmente contraindicado el manejo ambulatorio o esperar controles posteriores."
    },
    "explicacion": "La paciente presenta una Anorexia Nervosa de subtipo restrictivo con criterios médicos de hospitalización inmediata de extrema urgencia: desnutrición crítica con IMC < 14 kg/m² (13.7 kg/m²), bradicardia sinusal severa (< 40 lpm: FC 36 lpm), hipotensión marcada, hipotermia (35.2 °C) y prolongación del intervalo QTc en el ECG, lo que confiere un riesgo inminente de arritmias ventriculares malignas (Torsades de Pointes) y paro cardíaco súbito. La conducta médica inmediata e innegociable es: 1) Hospitalización urgente en sala de pediatría o unidad de cuidados intermedios/UPC; 2) Monitorización cardíaca continua; 3) Protocolo de realimentación nutricional lenta y controlada (vía enteral o mixta) con soporte de tiamina y fósforo para prevenir activamente el Síndrome de Realimentación; 4) Balance hidroelectrolítico estricto; y 5) Abordaje psiquiátrico multidisciplinario una vez estabilizada hemodinámicamente. Está formalmente contraindicado el manejo ambulatorio o esperar controles posteriores.",
    "keyPoints": [
      "El TDAH exige que varios síntomas de inatención o hiperactividad estén presentes antes de los 12 años y se manifiesten en al menos 2 entornos distintos (colegio y hogar).",
      "El Metilfenidato es el tratamiento farmacológico de primera elección en el TDAH en edad escolar.",
      "En la Anorexia Nervosa el peso corporal es significativamente bajo (IMC < 18.5) con miedo intenso a engordar y distorsión de la silueta corporal.",
      "Criterios de hospitalización inmediata en anorexia: IMC < 13-14 kg/m², bradicardia < 40 lpm, hipotensión < 80/50 mmHg, QTc > 460 ms e hipokalemia.",
      "En la Bulimia Nervosa existen atracones seguidos de purgas compensatorias, pero el peso corporal es habitualmente normal o en sobrepeso.",
      "La Fluoxetina en dosis altas de 60 mg/día es el fármaco de elección para reducir los atracones y purgas en la Bulimia Nervosa.",
      "El Síndrome de Realimentación cursa con hipofosfatemia severa aguda tras reintroducir hidratos de carbono en un paciente caquéctico; se previene con realimentación lenta.",
      "Trampa del examen: Ante una paciente con anorexia nervosa severa, IMC < 14 y bradicardia < 40 lpm, la conducta inmediata es hospitalizar de urgencia en medicina/pediatría; jamás iniciar psicofármacos ambulatorios."
    ],
    "questions": [
      {
        "stem": "Un niño de 8 años es traído a consulta médica porque su profesora señala que se para constantemente de su asiento en clases, habla sin parar, interrumpe a sus compañeros y no termina las guías escolares por distraerse con cualquier estímulo. Los padres relatan que en la casa el niño presenta la misma conducta desde los 5 años: no logra mantenerse sentado a la mesa, pierde constantemente los lápices y cuadernos, y le cuesta seguir instrucciones de más de un paso. Su coeficiente intelectual y examen neurológico son normales. ¿Cuál es el diagnóstico clínico y el fármaco de primera línea?",
        "options": [
          {
            "id": "A",
            "text": "Trastorno del espectro autista; iniciar Risperidona"
          },
          {
            "id": "B",
            "text": "Trastorno por Déficit de Atención e Hiperactividad (TDAH); tratamiento farmacológico de primera línea con Metilfenidato asociado a intervenciones psicopedagógicas"
          },
          {
            "id": "C",
            "text": "Trastorno bipolar maníaco precoz; iniciar Carbonato de Litio"
          },
          {
            "id": "D",
            "text": "Trastorno oposicionista desafiante puro; internación en centro psiquiátrico"
          },
          {
            "id": "E",
            "text": "Depresión infantil enmascarada; indicar Sertralina"
          }
        ],
        "correcta": "B",
        "explicacion": "El paciente cumple los criterios diagnósticos DSM-5 para Trastorno por Déficit de Atención e Hiperactividad (TDAH) subtipo combinado: presencia de síntomas de inatención, hiperactividad motora e impulsividad presentes de forma continua durante más de 6 meses, que debutaron antes de los 12 años (presentes desde los 5 años) y que se manifiestan de forma consistente en al menos dos entornos diferentes (colegio y hogar), produciendo disfunción escolar. El tratamiento farmacológico de primera elección avalado por guías clínicas mundiales y MINSAL son los psicoestimulantes, específicamente el Metilfenidato, complementado con adaptaciones psicopedagógicas curriculares (programa PIE) y orientación a los padres. Perla de examen: En TDAH escolar con compromiso en dos o más entornos, el Metilfenidato es el tratamiento farmacológico de primera línea.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.1.001"
      },
      {
        "stem": "Una adolescente de 16 años consulta traída por su colegio debido a emaciación progresiva. Al examen físico destaca con IMC de 13.5 kg/m², hipotermia de 35.0 °C, presión arterial de 75/45 mmHg y frecuencia cardíaca de 34 lpm en reposo. Se constata lanugo en espalda y abdomen escafoide. La paciente rechaza tener problemas y afirma que solo desea \"bajar un par de kilos más\". ¿Cuál es la conducta médica inmediata e ineludible?",
        "options": [
          {
            "id": "A",
            "text": "Indicar dieta hipercalórica fraccionada y citar a control en un mes en policlínico"
          },
          {
            "id": "B",
            "text": "Hospitalización médica inmediata en unidad de cuidados intensivos/intermedios para monitorización cardíaca y realimentación lenta controlada"
          },
          {
            "id": "C",
            "text": "Prescribir Fluoxetina 60 mg al día por vía oral y dar el alta a su domicilio"
          },
          {
            "id": "D",
            "text": "Derivar a psicoterapia psicoanalítica ambulatoria semanal"
          },
          {
            "id": "E",
            "text": "Indicar Metilfenidato matinal para mejorar su motivación de alimentarse"
          }
        ],
        "correcta": "B",
        "explicacion": "La paciente presenta una Anorexia Nervosa severa con criterios de hospitalización médica inmediata de urgencia: desnutrición crítica (IMC 13.5 < 14 kg/m²), bradicardia extrema (< 40 lpm: 34 lpm), hipotensión severa (75/45 mmHg) e hipotermia. Estas alteraciones confieren un riesgo inminente de arritmias ventriculares letales, asistolia y colapso circulatorio. La única conducta admisible es la hospitalización inmediata en cama monitorizada (pediatría/UPC), con estabilización hemodinámica y protocolo de realimentación enteral lenta y progresiva con control estricto de fósforo para prevenir el síndrome de realimentación. La fluoxetina ambulatoria (C) o el manejo en casa (A y D) constituyen una negligencia médica con desenlace potencialmente fatal. Perla de examen: En anorexia nervosa, un IMC < 14 kg/m² o bradicardia < 40 lpm obligan a la hospitalización médica inmediata en cama monitorizada.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.1.001"
      }
    ],
    "vignetteText": "Adolescente de 15 años es llevada a la consulta médica por su madre debido a una baja de peso alarmante de 14 kg en los últimos 4 meses. La madre relata que la joven come exclusivamente lechuga y agua, cuenta obsesivamente las calorías de cada alimento, se pesa cuatro veces al día y realiza abdominales intensos en su pieza por más de 3 horas diarias. Al examen físico: estatura 1.62 m, peso 36 kg (IMC 13.7 kg/m², desnutrición severa), piel amarillenta y seca, presencia de vello fino tipo lanugo en la espalda, manos frías y cianóticas. Signos vitales: PA 80/50 mmHg, FC 36 lpm (bradicardia sinusal marcada), temperatura axilar de 35.2 °C. Al ser examinada, la paciente llora airadamente diciendo que \"sus padres exageran y que ella todavía tiene las piernas y el abdomen deformes por exceso de grasa\". El electrocardiograma revela bradicardia sinusal extrema e intervalo QTc prolongado de 480 ms."
  }
];

module.exports = {
  psiquiatriaClasses,
  flow
};
