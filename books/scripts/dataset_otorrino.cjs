/**
 * DATASET MASTER · Tomo 14: Otorrinolaringología
 * EUNACOM 2026 · Colección Oficial · Módulo 2 Cirugía y Especialidades Quirúrgicas
 * Color Oficial: #4338ca (Índigo) · Código: OR · 20 Clases · 5 Bloques · 56 Preguntas AEE
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
    .acc{fill:var(--acc, #4338ca)}.accT{fill:#fff}.accS{font-size:8px;fill:#e0e7ff}
    .dec{fill:var(--acc-t, #eef2ff);stroke:var(--acc-p, #c7d2fe);stroke-width:1}
    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}
    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar)}
  </style>
  ${P.join('\n  ')}
</svg>`;
  return { title, svg };
}


const otorrinoClasses = [
  {
    "id": "orl-01",
    "classId": "orl-01",
    "tier": 3,
    "blockNum": 1,
    "blockName": "Patología del Oído Externo y Medio",
    "topicLabel": "14.1",
    "title": "Otitis Media Aguda (OMA): Diagnóstico Otoscópico, Etiología y Criterios Antimicrobianos",
    "perfilCode": "4.02.4.016",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "Sin garantía GES específica · Cobertura AUGE en caso de hipoacusia neurosensorial secundaria o complicación",
    "reconstrucciones": "EUNACOM Diciembre 2018 (Q#42) · EUNACOM Julio 2021 (Q#18) · EUNACOM Diciembre 2023 (Q#56)",
    "frecuencia": "Altísima rentabilidad · 2 a 3 preguntas por examen sobre diagnóstico otoscópico, dosis de amoxicilina y conducta ante falla a las 48-72h",
    "svg": null,
    "algoTitle": "Algoritmo de Diagnóstico y Tratamiento Escalonado de la Otitis Media Aguda (OMA)",
    "diagram": flow("Algoritmo de Diagnóstico y Tratamiento Escalonado de la Otitis Media Aguda (OMA)", [
      {
            "t": "Sospecha Clínica de OMA",
            "s": [
                  "Otalgia aguda, irritabilidad/llanto en lactantes",
                  "Fiebre y antecedente de infección respiratoria alta viral"
            ],
            "type": "acc"
      },
      {
            "al": "Otoscopía neumática obligatoria",
            "w": 440
      },
      {
            "k": "split",
            "q": "¿Hallazgos otoscópicos cardinales de OMA?",
            "s": "Abombamiento timpánico marcado + Eritema + Disminución de movilidad",
            "ll": "Confirmación diagnóstica de OMA",
            "rl": "Tímpano translúcido o ámbar sin abombamiento",
            "left": {
                  "t": "OMA Confirmada",
                  "s": "Estratificar factores de riesgo y edad",
                  "type": "acc"
            },
            "right": {
                  "t": "Otitis Media con Efusión (OME)",
                  "s": "Observación clínica · No antibióticos",
                  "type": "dec"
            }
      },
      {
            "al": "Estratificación de edad y gravedad",
            "from": "left",
            "w": 460
      },
      {
            "k": "split",
            "q": "¿Edad < 6 meses, OMA bilateral en < 2 años u OMA severa?",
            "s": "Fiebre ≥ 39°C, otalgia intensa persistente o supuración espontánea",
            "ll": "Sí: Inicio inmediato",
            "rl": "No: ≥ 2 años leve/moderada",
            "left": {
                  "t": "Amoxicilina Altas Dosis",
                  "s": "80-90 mg/kg/día oral en 2 tomas x 7-10 días",
                  "type": "acc"
            },
            "right": {
                  "t": "Observación estricta 48h o Amoxicilina",
                  "s": "Reevaluar si persiste dolor o fiebre",
                  "type": "dec"
            }
      },
      {
            "al": "Evaluación clínica a las 48-72 horas",
            "from": "left",
            "w": 460
      },
      {
            "k": "split",
            "q": "¿Persiste fiebre u otalgia a las 48-72 horas?",
            "s": "Sospecha de germen resistente productor de betalactamasas",
            "ll": "Falla terapéutica documentada",
            "rl": "Buena respuesta clínica",
            "left": {
                  "t": "Cambio a Amoxicilina + Ácido Clavulánico",
                  "s": "80-90 mg/kg/día (base amoxicilina 14:1) oral x 10 días",
                  "type": "warn"
            },
            "right": {
                  "t": "Completar tratamiento habitual",
                  "s": "Control auditivo ambulatorio al mes",
                  "type": "acc"
            }
      }
]),
    "contexto": "La Otitis Media Aguda (OMA) es la infección bacteriana más frecuente de la infancia y una de las causas líderes de prescripción de antimicrobianos en atención primaria y servicios de urgencia. En el examen EUNACOM se evalúa de forma reiterada la capacidad de discriminar entre una OMA inflamatoria supurada (que exige antibioticoterapia precoz en dosis plenas) y una otitis con efusión serosa (que no debe recibir antibióticos), así como la correcta conducta terapéutica ante la falla de primera línea a las 48-72 horas.",
    "contentSections": [
      {
            "subhead": "1. Fisiopatología, Disfunción Tubárica y Microbiología",
            "paragraphs": [
                  "La <strong>otitis media aguda (OMA)</strong> es un proceso inflamatorio e infeccioso de la mucosa del oído medio y celdas mastoideas de curso agudo (< 3 semanas). La génesis de la enfermedad radica casi invariablemente en una <strong>disfunción de la trompa de Eustaquio</strong>, habitualmente desencadenada por una infección respiratoria alta de etiología viral (rinovirus, VRS, influenza, adenovirus). La obstrucción tubárica genera una presión negativa intratimpánica persistente, con transudación serosa posterior y colonización bacteriana retrógrada desde la nasofaringe.",
                  "Los tres patógenos bacterianos dominantes en pediatría y adultos son: <em>Streptococcus pneumoniae</em> (neumococo, 35-40%), <em>Haemophilus influenzae</em> no tipificable (30-35%, de los cuales un 30-40% produce betalactamasas), y <em>Moraxella catarrhalis</em> (10-15%, >90% productora de betalactamasas). Tras la introducción de la vacuna neumocócica conjugada (PCV10/PCV13 en el PNI de Chile), la proporción relativa de <em>H. influenzae</em> ha aumentado de manera significativa."
            ]
      },
      {
            "subhead": "2. Criterios Diagnósticos y Hallazgos Otoscópicos Cardinales",
            "paragraphs": [
                  "El diagnóstico de certeza de la OMA es eminentemente <strong>clínico y otoscópico</strong>, requiriendo el cumplimiento estricto de tres criterios indispensables: (1) <em>Inicio agudo y reciente de signos y síntomas</em> (otalgia severa, tirones de oreja o llanto inconsolable en lactantes, fiebre); (2) <em>Signos evidentes de efusión en oído medio</em> (abombamiento timpánico moderado a severo, nivel hidroaéreo visible o perforación timpánica con otorrea aguda no traumática); y (3) <em>Signos de inflamación timpánica activa</em> (eritema intenso de la membrana timpánica, opacidad y marcada disminución o ausencia de movilidad en la otoscopía neumática).",
                  "El <strong>abombamiento de la membrana timpánica</strong> es el signo otoscópico individual más sensible, específico y reproducible de OMA supurada. El eritema aislado sin abombamiento ni hipomovilidad suele responder a llanto o hiperemia por fiebre viral y no justifica el inicio de antibióticos (véase Tabla 14.1)."
            ]
      },
      {
            "subhead": "3. Terapia Farmacológica: Dosis Plenas de Amoxicilina y Escalonamiento",
            "paragraphs": [
                  "El antibiótico de <strong>primera línea indiscutido</strong> en Chile y guías internacionales (AAP/MINSAL) es la <strong>Amoxicilina oral en dosis altas: 80 a 90 mg/kg/día dividida cada 12 horas</strong> (dosis máxima 2 a 3 g/día) durante 7 a 10 días (10 días en menores de 2 años u OMA severa; 5-7 días en mayores de 2 años con cuadros leves). La dosis alta es mandatoria para superar las cepas de <em>Streptococcus pneumoniae</em> con susceptibilidad disminuida a penicilinas por mutación de las PBP (proteínas fijadoras de penicilina).",
                  "Si el paciente presenta <strong>falla terapéutica a las 48-72 horas</strong> (persistencia o empeoramiento de fiebre y otalgia), o si ha recibido amoxicilina en los últimos 30 días, o presenta conjuntivitis purulenta concurrente (síndrome otitis-conjuntivitis habitualmente por <em>H. influenzae</em>), se debe escalar de inmediato a <strong>Amoxicilina + Ácido Clavulánico (relación 14:1) a 80-90 mg/kg/día de amoxicilina</strong> oral.",
                  "En pacientes con alergia confirmada a penicilina no anafiláctica (alergia tipo IV / exantema tardío), se utiliza una cefalosporina oral de 2ª o 3ª generación (Cefuroxima axetil 30 mg/kg/día o Cefdinir). En anafilaxia o hipersensibilidad inmediata mediada por IgE, la alternativa de rescate son los macrólidos (Azitromicina 10 mg/kg el día 1, seguido de 5 mg/kg/día del día 2 al 5) o Claritromicina (15 mg/kg/día), reconociendo tasas de resistencia neumocócica del 25-30%."
            ]
      },
      {
            "subhead": "4. OMA Recurrente y Criterios de Derivación a Otorrinolaringología",
            "paragraphs": [
                  "Se define <strong>OMA Recurrente (OMAr)</strong> como la presencia de: (a) <strong>≥ 3 episodios documentados de OMA en 6 meses</strong>, o (b) <strong>≥ 4 episodios en 12 meses</strong> (con al menos 1 episodio en los últimos 6 meses), siempre que exista resolución clínica y otoscópica completa entre los eventos.",
                  "Estos pacientes requieren derivación a ORL para estudio de factores predisponentes (hipertrofia adenoidea, fisura palatina, reflujo faringolaríngeo) e instalación de <strong>tubos de ventilación timpánica (colleras)</strong> asociados o no a <strong>adenoidectomía</strong>, lo que restaura la aireación del oído medio y reduce drásticamente las recurrencias bacterianas."
            ]
      }
],
    "table": {
      "title": "Diagnóstico Diferencial Otoscópico y Manejo Clínico en Patología de Oído Medio",
      "headers": [
            "Entidad Clínica",
            "Signos Otoscópicos Cardinales",
            "Sintomatología Predominante",
            "Conducta Terapéutica Oficial"
      ],
      "rows": [
            [
                  "Otitis Media Aguda (OMA)",
                  "Abombamiento timpánico marcado, eritema intenso, opacidad y otorrea aguda si hay perforación",
                  "Otalgia lancinante aguda, fiebre, hipoacusia conductiva transitoria",
                  "Amoxicilina 80-90 mg/kg/día oral x 7-10 días + analgesia con Paracetamol / Ibuprofeno"
            ],
            [
                  "Otitis Media con Efusión (OME)",
                  "Membrana timpánica retraída, color ámbar/amarillento, nivel hidroaéreo o burbujas visibles",
                  "Hipoacusia de conducción indolora, sin fiebre ni eritema agudo",
                  "Observación clínica estricta x 3 meses · Prohibidos antibióticos y antihistamínicos"
            ],
            [
                  "Miringitis Bulosa",
                  "Bulás hemorrágicas o serosas en la superficie externa del tímpano",
                  "Otalgia súbita e hiperaguda desgarradora, sangrado escaso",
                  "Analgesia potente + Macrólido oral (asociado a Mycoplasma pneumoniae y virus)"
            ],
            [
                  "Otitis Externa Difusa",
                  "Edema y eritema circunferencial del CAE con detritos; tímpano indemne",
                  "Signo del trago (+), dolor extremo a la tracción del pabellón, prurito",
                  "Aseo cuidadoso del CAE + gotas óticas de Ciprofloxacino/Corticoides tópicos"
            ]
      ]
},
    "severityTable": {
      "title": "Estratificación de Severidad y Criterios de Alarma en OMA Pediátrica y del Adulto",
      "headers": [
            "Nivel de Severidad",
            "Criterios Clínicos Definitorios",
            "Factores de Alto Riesgo Microbiológico",
            "Esquema Terapéutico Recomendado"
      ],
      "rows": [
            [
                  "OMA Leve a Moderada",
                  "Fiebre < 39°C, otalgia leve o autolimitada, niño > 2 años sin toxicidad sistémica",
                  "Sin uso de antibióticos en últimos 30 días, sin asistencia a sala cuna",
                  "Amoxicilina oral 80-90 mg/kg/día en 2 tomas x 7 días"
            ],
            [
                  "OMA Severa",
                  "Fiebre ≥ 39°C axilar, otalgia severa continua > 48 horas, o niño < 2 años con compromiso bilateral",
                  "Lactante menor de 6 meses, antecedente de OMA en el último mes",
                  "Amoxicilina 90 mg/kg/día oral x 10 días (o Amoxicilina-Clavulánico directo)"
            ],
            [
                  "OMA con Complicación Inminente",
                  "Eritema retroauricular, edema fluctuante, caída del pabellón auricular, parálisis facial o vértigo",
                  "Patógenos resistentes, inmunodeficiencia, colesteatoma subyacente",
                  "Hospitalización inmediata, TAC de peñasco con contraste, Ceftriaxona EV + Miringotomía"
            ]
      ]
},
    "treatmentTable": {
      "title": "Protocolo Antimicrobiano Escalonado en Otitis Media Aguda (Guía EUNACOM 2026)",
      "headers": [
            "Escenario Terapéutico",
            "Fármaco de Elección y Vía",
            "Dosis y Posología Pediátrica",
            "Duración y Objetivo Clínico"
      ],
      "rows": [
            [
                  "Primera Línea Estándar",
                  "Amoxicilina oral",
                  "80-90 mg/kg/día dividida cada 12 horas (máx 3 g/día)",
                  "7 a 10 días · Erradicación de S. pneumoniae resistente"
            ],
            [
                  "Falla Clínica a 48-72h",
                  "Amoxicilina + Ácido Clavulánico oral",
                  "80-90 mg/kg/día de amoxicilina (relación 14:1) cada 12h",
                  "10 días · Cobertura de H. influenzae y M. catarrhalis"
            ],
            [
                  "Alergia Leve a Penicilina (no IgE)",
                  "Cefuroxima axetil oral",
                  "30 mg/kg/día dividida en 2 tomas (con alimentos)",
                  "10 días · Alternativa con baja reactividad cruzada"
            ],
            [
                  "Alergia Grave / Anafiláctica (IgE)",
                  "Azitromicina o Claritromicina oral",
                  "Azitromicina: 10 mg/kg día 1, luego 5 mg/kg/día días 2-5",
                  "5 días · Rescate estricto en anafilaxia confirmada"
            ],
            [
                  "Vómitos incoercibles / Mala absorción",
                  "Ceftriaxona intramuscular o EV",
                  "50 mg/kg/día IM o EV dosis única diaria x 1-3 dosis",
                  "Rescate parenteral ambulatorio o pre-hospitalario"
            ]
      ]
},
    "vignette": "Un niño de 18 meses, previamente sano y con vacunas al día, es llevado al servicio de urgencia por su madre debido a fiebre de hasta 39.2°C axilar de 24 horas de evolución, llanto desconsolado e irritabilidad marcada durante la noche, llevándose las manos repetidamente hacia la oreja derecha. Como antecedente, presentó un resfriado común hace 5 días en la sala cuna. Al examen físico se observa febril, reactivo, sin signos meníngeos. La otoscopía del oído izquierdo es normal; en el oído derecho se evidencia una membrana timpánica francamente abombada, eritematosa, opaca y con nula movilidad al estímulo neumático, sin otorrea.",
    "explicacion": "El cuadro clínico y otoscópico es patognomónico de una Otitis Media Aguda (OMA) derecha de curso severo (fiebre > 39°C y dolor intenso en lactante < 2 años). El abombamiento timpánico asociado a eritema e hipomovilidad confirma la presencia de efusión purulenta hipertensiva en el oído medio. La conducta oficial de elección inmediata es el inicio de Amoxicilina oral en dosis altas de 80 a 90 mg/kg/día dividida en 2 tomas por 10 días, asociada a analgesia reglada con Paracetamol o Ibuprofeno. No está indicado el uso de descongestionantes ni antihistamínicos. Se debe instruir a los padres a consultar de inmediato si presenta signos de alarma (edema retroauricular, somnolencia) o si persiste la fiebre tras 48-72 horas de antibiótico para escalar a amoxicilina-clavulánico.",
    "keyPoints": [
      "El abombamiento de la membrana timpánica es el signo otoscópico cardinal más específico para el diagnóstico de OMA supurada.",
      "El tratamiento antimicrobiano de primera línea es la Amoxicilina oral a 80-90 mg/kg/día dividida cada 12 horas.",
      "Si no existe mejoría clínica tras 48 a 72 horas de amoxicilina, la conducta mandataria es cambiar a Amoxicilina + Ácido Clavulánico (80-90 mg/kg/día).",
      "La presencia de otorrea espontánea calma transitoriamente la otalgia debido a la descompresión mecánica del tímpano.",
      "La OMA Recurrente se define por ≥ 3 episodios en 6 meses o ≥ 4 en 1 año; requiere evaluación por ORL para inserción de tubos de ventilación.",
      "En niños menores de 6 meses, toda sospecha de OMA debe tratarse obligatoriamente con antibióticos sin período de observación.",
      "Los antihistamínicos y corticoides orales carecen de utilidad en OMA no complicada y están formalmente desaconsejados."
],
    "questions": [
      {
            "stem": "Un lactante de 14 meses es diagnosticado de otitis media aguda derecha y se le prescribe amoxicilina en dosis de 85 mg/kg/día. A las 72 horas de tratamiento, la madre vuelve a consultar porque el niño persiste febril (38.8°C), muy irritable y con dolor en el oído. La otoscopía de control muestra persistencia del abombamiento y eritema timpánico. ¿Cuál es la conducta terapéutica más adecuada en este momento?",
            "options": [
                  {
                        "id": "A",
                        "text": "Aumentar la dosis de amoxicilina a 120 mg/kg/día y controlar en 48 horas."
                  },
                  {
                        "id": "B",
                        "text": "Cambiar el tratamiento antimicrobiano a amoxicilina con ácido clavulánico oral."
                  },
                  {
                        "id": "C",
                        "text": "Suspender la amoxicilina e iniciar gotas óticas de ciprofloxacino con hidrocortisona."
                  },
                  {
                        "id": "D",
                        "text": "Derivar de urgencia para miringotomía y timpanocentesis inmediata."
                  },
                  {
                        "id": "E",
                        "text": "Mantener la amoxicilina por 48 horas adicionales ya que el efecto bactericida puede tardar hasta 5 días."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. La persistencia de fiebre y otalgia con persistencia de signos otoscópicos a las 48-72 horas de tratamiento con amoxicilina a dosis altas constituye una falla terapéutica de primera línea. El mecanismo fisiopatológico principal es la infección por cepas de Haemophilus influenzae no tipificable o Moraxella catarrhalis productoras de betalactamasas. La conducta estandarizada por MINSAL y guías internacionales es el cambio inmediato a amoxicilina-ácido clavulánico (80-90 mg/kg/día de componente amoxicilina en relación 14:1). Opción A: Incorrecta, dosis superiores de amoxicilina sola no superan la resistencia por betalactamasas. Opción C: Incorrecta, las gotas óticas no penetran a través de una membrana timpánica íntegra. Opción D: Incorrecta, la timpanocentesis se reserva para mastoiditis, sepsis o recién nacidos. Opción E: Incorrecta, la falta de respuesta a las 72h exige cambio de antibiótico.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.4.016"
      },
      {
            "stem": "Un niño de 4 años presenta cuadro de 2 días de rinorrea serosa y fiebre leve. Su madre nota que no responde adecuadamente cuando se le habla despacio. Al examen físico, el niño no tiene dolor ótico. La otoscopía revela tímpanos íntegros, de aspecto translúcido pero discretamente opacos y de color amarillento-ámbar, con presencia de nivel hidroaéreo y burbujas detrás de la membrana, sin eritema ni abombamiento. ¿Cuál es el diagnóstico y la conducta de elección?",
            "options": [
                  {
                        "id": "A",
                        "text": "Otitis media aguda; iniciar amoxicilina a 90 mg/kg/día por 10 días."
                  },
                  {
                        "id": "B",
                        "text": "Otitis media con efusión; conducta expectante y control en 3 meses."
                  },
                  {
                        "id": "C",
                        "text": "Otitis media crónica colesteatomatosa; solicitar TAC de peñasco urgente."
                  },
                  {
                        "id": "D",
                        "text": "Otitis externa difusa; indicar gotas óticas de neomicina y polimixina B."
                  },
                  {
                        "id": "E",
                        "text": "Disfunción tubárica aguda; iniciar corticoides orales y antihistamínicos por 14 días."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. La presencia de líquido o burbujas en el oído medio con membrana timpánica retraída o en posición neutra, sin signos inflamatorios agudos (sin eritema ni abombamiento) y sin sintomatología aguda (sin otalgia ni fiebre alta), define a la Otitis Media con Efusión (OME u otitis serosa). La inmensa mayoría de los casos resuelve espontáneamente en un período de 8 a 12 semanas. La conducta recomendada por guías clínicas es la observación expectante durante 3 meses. Ni los antibióticos, ni los corticoides, ni los antihistamínicos han demostrado beneficio y están desaconsejados. Si la efusión persiste pasados los 3 meses y se acompaña de hipoacusia bilateral significativa (> 20-30 dB), se indica la colocación de tubos de ventilación timpánica.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.4.016"
      },
      {
            "stem": "¿Cuál de los siguientes microorganismos es el agente etiológico aislado con mayor frecuencia en la otitis media aguda bacteriana no complicada en Chile?",
            "options": [
                  {
                        "id": "A",
                        "text": "Pseudomonas aeruginosa"
                  },
                  {
                        "id": "B",
                        "text": "Streptococcus pneumoniae"
                  },
                  {
                        "id": "C",
                        "text": "Staphylococcus aureus"
                  },
                  {
                        "id": "D",
                        "text": "Klebsiella pneumoniae"
                  },
                  {
                        "id": "E",
                        "text": "Streptococcus pyogenes"
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. Streptococcus pneumoniae (neumococo) continúa siendo el patógeno bacteriano más frecuente y clínicamente agresivo en OMA, responsable del 35-40% de los casos confirmados por timpanocentesis, seguido de Haemophilus influenzae no tipificable (30-35%) y Moraxella catarrhalis (10-15%). Pseudomonas aeruginosa y Staphylococcus aureus son agentes de otitis externa o de otitis media crónica supurada, no de OMA no complicada.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.4.016"
      },
      {
            "stem": "Un lactante de 11 meses presenta su tercer episodio de otitis media aguda supurada en los últimos 4 meses, respondiendo satisfactoriamente a la amoxicilina en cada oportunidad. La madre pregunta cuál es la definición médica de su condición y el paso a seguir. ¿Cuál es la respuesta correcta?",
            "options": [
                  {
                        "id": "A",
                        "text": "Corresponde a una otitis media crónica supurada y debe iniciar profilaxis antibiótica diaria con cotrimoxazol."
                  },
                  {
                        "id": "B",
                        "text": "Cumple criterios de otitis media recurrente y debe ser derivado al especialista otorrinolaringólogo para evaluación de tubos de ventilación."
                  },
                  {
                        "id": "C",
                        "text": "No cumple criterios de recurrencia porque se requieren al menos 5 episodios en 6 meses."
                  },
                  {
                        "id": "D",
                        "text": "Se trata de una falla inmunológica primaria y requiere inmunoglobulinas endovenosas mensuales."
                  },
                  {
                        "id": "E",
                        "text": "Debe recibir amoxicilina en dosis profiláctica continua durante toda la temporada de invierno."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. La OMA recurrente se define como la presencia de ≥ 3 episodios bien documentados de OMA en 6 meses, o ≥ 4 episodios en 12 meses (con al menos 1 en los últimos 6 meses). Este paciente (3 episodios en 4 meses) cumple cabalmente la definición y debe ser derivado a ORL para evaluar inserción de tubos de ventilación timpánica (colleras), lo cual previene nuevos episodios y protege la función auditiva. La quimioprofilaxis antibiótica prolongada está contraindicada por generar resistencia bacteriana.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.4.016"
      }
]
  },
  {
    "id": "orl-02",
    "classId": "orl-02",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Patología del Oído Externo y Medio",
    "topicLabel": "14.2",
    "title": "Otitis Media con Efusión (OME), OMC Simple y Colesteatomatosa",
    "perfilCode": "6.01.1.004",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Especialista",
    "ges": "Garantía GES Hipoacusia Neurosensorial Bilateral en el prematuro y del adulto de 65 años y más",
    "reconstrucciones": "EUNACOM Diciembre 2019 (Q#78) · EUNACOM Julio 2022 (Q#31)",
    "frecuencia": "Alta rentabilidad · 1 a 2 preguntas por examen distinguiendo OME (observación 3 meses) de OMC colesteatomatosa (lisis ósea, cirugía obligatoria)",
    "svg": null,
    "algoTitle": "Algoritmo de Diagnóstico Diferencial y Manejo de la Patología Crónica del Oído Medio",
    "diagram": flow("Algoritmo de Diagnóstico Diferencial y Manejo de la Patología Crónica del Oído Medio", [
      {
            "t": "Paciente con Hipoacusia de Conducción u Otorrea Crónica",
            "s": [
                  "Otoscopía otomicroscópica minuciosa del tímpano"
            ],
            "type": "acc"
      },
      {
            "al": "Evaluación del estado de la membrana timpánica",
            "w": 440
      },
      {
            "k": "split",
            "q": "¿Membrana timpánica íntegra o perforada?",
            "s": "Integridad timpánica y características de la perforación",
            "ll": "Íntegra con líquido retrotimpánico",
            "rl": "Perforación timpánica persistente > 3 meses",
            "left": {
                  "t": "Otitis Media con Efusión (OME)",
                  "s": "Nivel hidroaéreo o burbujas · Sin eritema",
                  "type": "dec"
            },
            "right": {
                  "t": "Otitis Media Crónica (OMC)",
                  "s": "Evaluar tipo y localización de la perforación",
                  "type": "acc"
            }
      },
      {
            "al": "Estratificación de OME vs OMC",
            "from": "right",
            "w": 460
      },
      {
            "k": "split",
            "q": "¿Perforación marginal / pars flácida con escamas fétidas?",
            "s": "Diferenciación entre OMC Simple vs Colesteatoma",
            "ll": "Sí: Sospecha de Colesteatoma",
            "rl": "No: Perforación central, pars tensa limpia",
            "left": {
                  "t": "OMC Colesteatomatosa (Riesgo Osteolítico)",
                  "s": "TAC de peñasco sin contraste + Timpanomastoidectomía",
                  "type": "warn"
            },
            "right": {
                  "t": "OMC Simple Benigna",
                  "s": "Gotas de ciprofloxacino en reagudización + Timpanoplastia electiva",
                  "type": "acc"
            }
      }
]),
    "contexto": "La patología crónica del oído medio abarca desde la otitis media con efusión serosa (OME) hasta las variantes destructivas de la otitis media crónica (OMC). En EUNACOM es imprescindible saber que la OME se observa por 3 meses antes de plantear colleras; que la OMC simple tiene perforación central no marginal con otorrea mucosa indolora; y que la presencia de escamas de queratina o perforación atical/marginal define al colesteatoma, una patología osteolítica que exige TAC y resolución quirúrgica obligatoria por riesgo de fístula laberíntica y abscesos endocraneales.",
    "contentSections": [
      {
            "subhead": "1. Otitis Media con Efusión (OME): Fisiopatología y Conducta de 3 Meses",
            "paragraphs": [
                  "La <strong>Otitis Media con Efusión (OME)</strong>, también llamada otitis serosa o secretora, es la presencia de exudado no purulento en la cavidad del oído medio con membrana timpánica intacta, en ausencia de signos o síntomas de infección aguda. Su etiología primordial es la disfunción ventilatoria de la trompa de Eustaquio (secundaria a hipertrofia adenoidea en niños, o rinitis alérgica). Es la <strong>causa más frecuente de hipoacusia de conducción en niños de edad preescolar y escolar</strong>.",
                  "El 80-90% de los derrames serosos resuelven espontáneamente en un plazo de 3 meses. Por ende, la <strong>conducta clínica inicial es la observación expectante por 12 semanas</strong> con audiometría e impedanciometría de seguimiento (que muestra una curva B plana). Los antibióticos orales, antihistamínicos, descongestionantes y corticoides están formalmente desaconsejados. Si la OME persiste más de 3 meses con hipoacusia conductiva bilateral documentada (umbral > 25-30 dB), está indicada la miringotomía con colocación de <strong>tubos de ventilación timpánica (colleras)</strong>."
            ]
      },
      {
            "subhead": "2. Otitis Media Crónica Simple (OMC Supurada Benigna)",
            "paragraphs": [
                  "La <strong>OMC simple o benigna</strong> se define como una inflamación crónica del mucoperiostio del oído medio caracterizada por una <strong>perforación timpánica permanente que respeta el annulus fibrosus (perforación central en la pars tensa)</strong> y otorrea indolora intermitente o persistente por más de 6 a 12 semanas.",
                  "Los microorganismos predominantes son <em>Pseudomonas aeruginosa</em> y <em>Staphylococcus aureus</em>. En las fases activas supurativas, el tratamiento consiste en aseo auditivo bajo otomicroscopía y <strong>gotas óticas de Ciprofloxacino al 0.3%</strong> (¡evitar aminoglucósidos tópicos por ototoxicidad cocleovestibular ante tímpano abierto!). En fase seca, el tratamiento definitivo es quirúrgico mediante <strong>timpanoplastia electiva</strong> para cerrar la membrana y restituir la audición."
            ]
      },
      {
            "subhead": "3. Otitis Media Crónica Colesteatomatosa: Alarma Osteolítica y Quirúrgica",
            "paragraphs": [
                  "El <strong>colesteatoma</strong> es una lesión no neoplásica pero localmente destructiva y osteolítica, formada por acumulación de <strong>epitelio escamoso estratificado queratinizante</strong> dentro de la hendidura del oído medio y mastoides. Se manifiesta típicamente con <strong>perforación marginal (que compromete el reborde óseo o annulus) o atical (en la pars flácida)</strong>, acompañada de escamas blanquecinas nacaradas y otorrea crónica fétida purulenta, refractaria a antibióticos.",
                  "Debido a la producción de enzimas colagenasas y citoquinas líticas, el colesteatoma destruye la cadena oscicular (conduciendo a hipoacusia severa), el canal de Falopio (causando <em>parálisis facial periférica</em>), el canal semicircular lateral (generando <em>fístula laberíntica y vértigo</em>) y el tegmen tympani (produciendo <em>meningitis o absceso cerebral temporal/cerebeloso</em>). Su confirmación imagenológica requiere <strong>TAC de peñascos de alta resolución sin contraste</strong> y su tratamiento es <strong>quirúrgico ineludible (timpanomastoidectomía radical o conservadora)</strong>."
            ]
      }
],
    "table": {
      "title": "Diagnóstico Diferencial: OME vs OMC Simple vs OMC Colesteatomatosa",
      "headers": [
            "Característica Clínica",
            "Otitis Media con Efusión (OME)",
            "OMC Simple (Supurada)",
            "OMC Colesteatomatosa"
      ],
      "rows": [
            [
                  "Estado Timpánico",
                  "Tímpano íntegro, retraído, color ámbar, burbujas visibles",
                  "Perforación central en pars tensa (respeta el annulus)",
                  "Perforación marginal en pars flácida o bolsillo de retracción atical"
            ],
            [
                  "Otorrea",
                  "Ausente (líquido retenido detrás del tímpano)",
                  "Otorrea mucosa o purulenta no fétida, indolora",
                  "Otorrea fétida persistente con escamas nacaradas de queratina"
            ],
            [
                  "Comportamiento Óseo",
                  "No osteolítico · Reversible espontáneamente",
                  "Rara vez osteolítico · Cadena típicamente conservada",
                  "Altamente osteolítico: erosión de huesecillos, laberinto y tegmen"
            ],
            [
                  "Conducta Oficial",
                  "Observación 3 meses; colleras si persiste hipoacusia",
                  "Aseo + Ciprofloxacino tópico; timpanoplastia en fase seca",
                  "TAC de peñasco sin contraste + Mastoidectomía quirúrgica obligatoria"
            ]
      ]
},
    "severityTable": null,
    "treatmentTable": null,
    "vignette": "Un hombre de 42 años consulta por hipoacusia progresiva izquierda y supuración ótica intermitente de larga data. Refiere que en el último mes la supuración se ha vuelto constante y con olor sumamente fétido, asociándose hace 4 días a sensación de inestabilidad y mareo al limpiarse el oído. A la otoscopía se aprecia en el oído izquierdo una perforación marginal en la región posterosuperior y pars flácida del tímpano, a través de la cual asoman detritos blanquecinos escamosos fétidos y tejido de granulación. Al comprimir el trago, el paciente experimenta una crisis vertiginosa con nistagmo horizontal hacia la derecha.",
    "explicacion": "El cuadro clínico corresponde a una Otitis Media Crónica Colesteatomatosa izquierda complicada. La localización atical/marginal de la perforación junto a la visualización de escamas nacaradas de queratina y fetidez extrema son diagnósticas de colesteatoma. El signo de la fístula positivo (vértigo y nistagmo inducidos por compresión neumática del CAE) demuestra erosión osteolítica del canal semicircular lateral por la masa epidérmica. La conducta prioritaria es solicitar un TAC de peñasco de alta resolución sin contraste para evaluar la extensión ósea y derivar de urgencia al especialista otorrinolaringólogo para exploración y mastoidectomía quirúrgica para erradicar el colesteatoma y prevenir meningitis o fístulas extensas.",
    "keyPoints": [
      "La OME es la causa más común de hipoacusia conductiva en preescolares y se maneja con conducta expectante durante 3 meses.",
      "En OME no deben indicarse antibióticos, antihistamínicos ni corticoides de rutina.",
      "La OMC simple se caracteriza por perforación timpánica central que respeta el annulus, con otorrea no fétida.",
      "El colesteatoma presenta perforación marginal en la pars flácida con escamas nacaradas blanquecinas y otorrea intensamente fétida.",
      "El colesteatoma es una lesión osteolítica destructiva con riesgo de parálisis facial, fístula laberíntica y abscesos intracraneales.",
      "El examen de elección para estudiar la anatomía y extensión del colesteatoma es el TAC de peñasco sin contraste.",
      "El tratamiento del colesteatoma es siempre quirúrgico (timpanomastoidectomía); los antibióticos tópicos solo controlan la sobreinfección."
],
    "questions": [
      {
            "stem": "Un escolar de 6 años es evaluado en el policlínico por sospecha de déficit atencional, ya que en el colegio la profesora nota que no obedece las órdenes y pide con frecuencia que le repitan las frases. No ha tenido otalgia ni fiebre. A la otoscopía se aprecian membranas timpánicas íntegras, ligeramente retraídas, de color amarillento y con visualización de nivel hidroaéreo y burbujas bilaterales. La timpanometría arroja curvas tipo B bilaterales con hipoacusia de conducción de 25 dB. El cuadro se ha documentado por 4 meses consecutivos. ¿Cuál es el tratamiento de elección?",
            "options": [
                  {
                        "id": "A",
                        "text": "Corticoides sistémicos orales en pulsos por 10 días."
                  },
                  {
                        "id": "B",
                        "text": "Amoxicilina con ácido clavulánico por 21 días consecutivos."
                  },
                  {
                        "id": "C",
                        "text": "Inserción bilateral de tubos de ventilación timpánica (colleras)."
                  },
                  {
                        "id": "D",
                        "text": "Realización inmediata de mastoidectomía bilateral abierta."
                  },
                  {
                        "id": "E",
                        "text": "Tratamiento prolongado con antihistamínicos orales y descongestionantes nasales."
                  }
            ],
            "correcta": "C",
            "explicacion": "La opción correcta es la C. El paciente presenta una Otitis Media con Efusión (OME) crónica persistente por más de 3 meses, acompañada de hipoacusia conductiva bilateral documentada que está interfiriendo en su rendimiento escolar y comunicación. Cuando la OME persiste más allá del período de observación de 3 meses con impacto auditivo (> 20-25 dB), la indicación formal y de elección es la miringotomía con colocación de tubos de ventilación timpánica (colleras), la cual restablece la ventilación de la caja timpánica y normaliza los umbrales auditivos de inmediato. Las opciones A, B y E carecen de efectividad demostrada en guías clínicas y exponen a efectos adversos innecesarios. La opción D es un procedimiento quirúrgico mayor para colesteatoma o mastoiditis, no para OME.",
            "recTag": "Banco Oficial AEE · Perfil V3 6.01.1.004"
      },
      {
            "stem": "¿Cuál de los siguientes hallazgos al examen otoscópico orienta con mayor especificidad a una otitis media crónica colesteatomatosa por sobre una otitis media crónica simple?",
            "options": [
                  {
                        "id": "A",
                        "text": "Perforación central puntiforme en el cuadrante anteroinferior de la pars tensa."
                  },
                  {
                        "id": "B",
                        "text": "Presencia de escamas blanquecinas nacaradas en una perforación marginal en la pars flácida."
                  },
                  {
                        "id": "C",
                        "text": "Membrana timpánica abombada y eritematosa con pulsación visible."
                  },
                  {
                        "id": "D",
                        "text": "Otorrea mucosa transparente no fétida a través de una perforación amplia que respeta el annulus."
                  },
                  {
                        "id": "E",
                        "text": "Membrana timpánica íntegra con burbujas de aire retro timpánicas."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. Las características patognomónicas del colesteatoma en la otoscopía son la perforación marginal (que compromete el reborde óseo o annulus), habitualmente localizada en la pars flácida (ático) o cuadrante posterosuperior, a través de la cual protruyen detritos blanquecinos de queratina (escamas nacaradas) y pólipos inflamatorios con secreción purulenta de olor fétido. En contraste, la OMC simple presenta perforación central en la pars tensa respetando el annulus con otorrea mucosa no fétida (opciones A y D). La opción C describe una OMA supurada hiperaguda y la opción E describe una OME serosa.",
            "recTag": "Banco Oficial AEE · Perfil V3 6.01.1.004"
      }
]
  },
  {
    "id": "orl-03",
    "classId": "orl-03",
    "tier": 3,
    "blockNum": 1,
    "blockName": "Patología del Oído Externo y Medio",
    "topicLabel": "14.3",
    "title": "Otitis Externa Difusa vs Otitis Externa Maligna en Diabéticos",
    "perfilCode": "4.02.4.017",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "Sin garantía GES específica",
    "reconstrucciones": "EUNACOM Diciembre 2017 (Q#64) · EUNACOM Julio 2020 (Q#12) · EUNACOM Diciembre 2022 (Q#45)",
    "frecuencia": "Altísima rentabilidad · 2 preguntas por examen distinguiendo el tratamiento tópico de la otitis de nadador vs la gravedad de la otitis maligna en el adulto mayor diabético",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico y Terapéutico de la Otitis Externa Difusa y Maligna Necrotizante",
    "diagram": flow("Algoritmo Diagnóstico y Terapéutico de la Otitis Externa Difusa y Maligna Necrotizante", [
      {
            "t": "Paciente con Otalgia Intensa, Signo del Trago (+) y Otorrea",
            "s": [
                  "Inspección del pabellón y otoscopía cuidadosa del CAE"
            ],
            "type": "acc"
      },
      {
            "al": "Estratificación de factores de riesgo y hallazgos otoscópicos",
            "w": 460
      },
      {
            "k": "split",
            "q": "¿Paciente diabético o inmunodeprimido con dolor nocturno severo?",
            "s": "Presencia de tejido de granulación en el piso del CAE o compromiso de pares craneales",
            "ll": "Sí: Sospecha de Otitis Externa Maligna",
            "rl": "No: Paciente inmunocompetente (ej. nadador)",
            "left": {
                  "t": "Alarma de Otitis Externa Maligna (OEM)",
                  "s": "Osteomielitis de la base del cráneo por Pseudomonas",
                  "type": "warn"
            },
            "right": {
                  "t": "Otitis Externa Difusa (Oído de Nadador)",
                  "s": "Infección bacteriana circunscrita al CAE",
                  "type": "acc"
            }
      },
      {
            "al": "Conducta en Otitis Externa Difusa",
            "from": "right",
            "w": 440
      },
      {
            "t": "Tratamiento Tópico Ambulatorio",
            "s": [
                  "Aseo ótico cuidadoso de detritos del CAE",
                  "Gotas de Ciprofloxacino 0.3% + Corticoide c/8-12h x 7-10 días",
                  "Analgesia oral reglada (AINEs) y suspensión estricta del agua"
            ],
            "type": "acc"
      },
      {
            "al": "Conducta urgente en Sospecha de OEM",
            "from": "left",
            "w": 440
      },
      {
            "t": "Hospitalización Inmediata y Estudio de OEM",
            "s": [
                  "TAC de peñasco y base de cráneo con contraste",
                  "Biopsia de tejido de granulación + Cultivo para Pseudomonas",
                  "Ciprofloxacino EV o Ceftazidima EV en dosis máximas prolongadas (6-8 semanas)"
            ],
            "type": "crit"
      }
]),
    "contexto": "La otitis externa representa una de las consultas más frecuentes en atención de urgencia estival. El médico general debe dominar dos escenarios radicalmente distintos: (1) La Otitis Externa Difusa benigna (oído de nadador), que cura rápidamente con gotas antibióticas tópicas y analgesia sin requerir antibióticos orales; y (2) La Otitis Externa Maligna o Necrotizante, una osteomielitis de la base del cráneo por Pseudomonas aeruginosa en pacientes ancianos con diabetes mellitus, patología potencialmente letal que causa parálisis facial y requiere hospitalización inmediata y antibioticoterapia endovenosa prolongada.",
    "contentSections": [
      {
            "subhead": "1. Otitis Externa Difusa Aguda: Etiología y Signo del Trago (+)",
            "paragraphs": [
                  "La <strong>otitis externa difusa aguda (oído de nadador)</strong> es la dermo-epidermitis aguda infecciosa que compromete la piel del conducto auditivo externo (CAE). Su factor predisponente clásico es la humedad excesiva (baños en piscinas, playas), el rascado o traumatismos locales con hisopos (cotonitos), lo que barre la capa protectora lipídica del cerumen y altera el pH ácido cutáneo, favoreciendo la proliferación bacteriana.",
                  "El agente microbiológico causal en > 70-80% de los casos es <strong><em>Pseudomonas aeruginosa</em></strong>, seguido de <em>Staphylococcus aureus</em> (15-20%). La clínica se distingue por <strong>otalgia severa desproporcionada, prurito inicial y exquisito dolor a la tracción del pabellón auricular o a la presión del trago (Signo del Trago positivo)</strong>. A la otoscopía se observa eritema y edema difuso del CAE que ocluye la luz, con presencia de detritos blanquecinos o verdosos y membrana timpánica íntegra (o difícil de visualizar por el edema)."
            ]
      },
      {
            "subhead": "2. Manejo de la Otitis Externa Difusa: Primacía de la Vía Tópica",
            "paragraphs": [
                  "El tratamiento de la otitis externa difusa no complicada se basa en tres pilares: (1) <strong>Aseo meticuloso del CAE</strong> retirando detritos mediante aspiración o hisopado suave bajo visualización directa; (2) <strong>Gotas óticas antibióticas de Ciprofloxacino (0.3%) asociado o no a Dexametasona o Hidrocortisona</strong>, administrando 3 a 4 gotas cada 8 a 12 horas por 7 a 10 días; y (3) <strong>Analgesia reglada por vía oral con AINEs</strong> (Ibuprofeno, Ketoprofeno) o Paracetamol.",
                  "<strong>Los antibióticos orales NO están indicados</strong> en la otitis externa difusa simple porque las gotas tópicas alcanzan concentraciones locales mil veces superiores a la concentración inhibitoria mínima tisular. Los antibióticos orales solo se agregan si la infección se extiende más allá del CAE hacia el pabellón auricular (celulitis periauricular) o si el paciente está inmunocomprometido. Debe prohibirse estrictamente el ingreso de agua al oído durante todo el tratamiento."
            ]
      },
      {
            "subhead": "3. Otitis Externa Maligna (Necrotizante): Fisiopatología y Osteomielitis",
            "paragraphs": [
                  "La <strong>otitis externa maligna (OEM) o necrotizante</strong> no es una neoplasia sino una <strong>infección invasiva necrotizante y osteomielitis progresiva del hueso temporal y base del cráneo</strong>, causada casi exclusivamente por <strong><em>Pseudomonas aeruginosa</em></strong> (raramente por hongos como <em>Aspergillus</em> en VIH severo). Ocurre típicamente en <strong>ancianos con diabetes mellitus mal controlada</strong> o en pacientes con inmunosupresión celular severa.",
                  "La infección se inicia en el CAE y progresa a través de las fisuras de Santorini y la unión osteocartilaginosa hacia la fosa infratemporal, el agujero estilomastoideo y el foramen yugular. La sintomatología se caracteriza por <strong>otalgia intensa, profunda y terebrante, de predominio nocturno, que no cede con analgésicos habituales</strong>, acompañada de otorrea fétida persistente."
            ]
      },
      {
            "subhead": "4. Hallazgos Cardinales de OEM, Neuroimagen y Esquema Antimicrobiano",
            "paragraphs": [
                  "El hallazgo otoscópico patognomónico es la presencia de <strong>tejido de granulación inflamatorio en el piso del conducto auditivo externo, en la unión osteocartilaginosa</strong>. La complicación más temida es la extensión a pares craneales: el <strong>nervio facial (VII par) es el primer y más frecuentemente comprometido</strong> (parálisis facial periférica ipsilateral de mal pronóstico), seguido por los pares bajos (IX, X, XI en el foramen yugular y XII en el canal hipogloso).",
                  "El estudio confirmatorio requiere <strong>TAC de peñasco y base de cráneo con contraste</strong> (que demuestra erosión ósea y osteólisis del hueso timpánico y clivus) asociado a cintigrafía ósea con Tc-99 o Ga-67 para monitorizar actividad y resolución. El manejo exige <strong>hospitalización inmediata, control estricto de la glicemia y antibioticoterapia endovenosa prolongada en dosis altas: Ciprofloxacino EV (400 mg c/8-12h) o Ceftazidima EV (2 g c/8h) o Meropenem EV durante un mínimo de 6 a 8 semanas</strong>."
            ]
      }
],
    "table": {
      "title": "Diagnóstico Diferencial: Otitis Externa Difusa vs Otitis Externa Maligna",
      "headers": [
            "Criterio Comparativo",
            "Otitis Externa Difusa Aguda",
            "Otitis Externa Maligna (Necrotizante)"
      ],
      "rows": [
            [
                  "Población de Riesgo",
                  "Cualquier edad, nadadores, usuarios de hisopos/cotonitos",
                  "Adultos mayores (> 65 años) diabéticos o inmunodeprimidos"
            ],
            [
                  "Etiología Principal",
                  "Pseudomonas aeruginosa (70%) y S. aureus (20%)",
                  "Pseudomonas aeruginosa (> 95% de los casos)"
            ],
            [
                  "Severidad del Dolor",
                  "Otalgia aguda moderada a severa, signo del trago (+)",
                  "Dolor terebrante intolerable, nocturno, que despierta al paciente"
            ],
            [
                  "Hallazgo Otoscópico",
                  "Edema y eritema difuso del CAE con detritos descamativos",
                  "Tejido de granulación en el piso del CAE (unión osteocartilaginosa)"
            ],
            [
                  "Compromiso Nervioso",
                  "Ausente · Función de pares craneales rigurosamente intacta",
                  "Frecuente parálisis del VII par craneal (facial); luego IX, X, XI, XII"
            ],
            [
                  "Manejo Terapéutico",
                  "Ambulatorio: Gotas tópicas de Ciprofloxacino + analgesia oral",
                  "Hospitalario urgente: Ciprofloxacino o Ceftazidima EV x 6-8 semanas"
            ]
      ]
},
    "severityTable": {
      "title": "Criterios de Gravedad y Progresión en Otitis Externa Maligna",
      "headers": [
            "Estadio Clínico",
            "Compromiso Anatómico",
            "Riesgo de Mortalidad",
            "Conducta Médica Inmediata"
      ],
      "rows": [
            [
                  "Estadio I (Local)",
                  "Limitado a los tejidos blandos y cartílago del CAE",
                  "Baja (< 5%) con terapia oportuna",
                  "Ciprofloxacino EV o dosis altas orales bajo estricto control"
            ],
            [
                  "Estadio II (Óseo)",
                  "Osteomielitis del hueso temporal con parálisis facial (VII par)",
                  "Moderada (15-20%)",
                  "Ceftazidima o Ciprofloxacino EV en dosis máximas + control de glicemia"
            ],
            [
                  "Estadio III (Base Cráneo)",
                  "Extensión a pares bajos (IX, X, XI, XII), clivus y fosa posterior",
                  "Alta (30-50%) · Riesgo de trombosis de seno sigmoide",
                  "Biterapia EV (Meropenem + Ciprofloxacino) + Debridamiento quirúrgico selectivo"
            ]
      ]
},
    "treatmentTable": {
      "title": "Protocolo Terapéutico Comparativo de Infecciones del Oído Externo",
      "headers": [
            "Patología",
            "Fármacos de Elección",
            "Vía y Posología",
            "Duración y Medidas Adyuvantes"
      ],
      "rows": [
            [
                  "Otitis Externa Difusa Leve",
                  "Solución ácida ótica (Ácido acético al 2%)",
                  "Gotas óticas: 3-4 gotas cada 8 horas",
                  "7 días · Restablecer pH ácido del CAE"
            ],
            [
                  "Otitis Externa Difusa Moderada",
                  "Ciprofloxacino 0.3% + Dexametasona tópica",
                  "Gotas óticas: 3-4 gotas cada 8 a 12 horas",
                  "7 a 10 días · Aseo previo del conducto; calor seco"
            ],
            [
                  "Otitis Externa con Celulitis",
                  "Ciprofloxacino oral + gotas tópicas",
                  "Ciprofloxacino 500 mg cada 12h oral + gotas",
                  "10 días · Monitoreo ambulatorio estrecho"
            ],
            [
                  "Otitis Externa Maligna (OEM)",
                  "Ciprofloxacino EV o Ceftazidima EV",
                  "Ciprofloxacino 400 mg c/8-12h EV o Ceftazidima 2g c/8h EV",
                  "6 a 8 semanas continuas · Control cintigráfico / TAC"
            ]
      ]
},
    "vignette": "Un hombre de 74 años, con antecedente de diabetes mellitus tipo 2 de 20 años de evolución con mal control metabólico (última HbA1c de 10.2%), consulta en el servicio de urgencia por otalgia izquierda progresiva de 3 semanas de evolución, que se ha hecho intolerable en las últimas noches, impidiéndole dormir. Ha recibido dos ciclos de gotas óticas de polimixina-neomicina sin mejoría. Al examen físico se aprecia lúcido pero adolorido; presenta asimetría facial izquierda evidente con imposibilidad para ocluir el ojo izquierdo y borramiento del surco nasogeniano homolateral. A la otoscopía se observa conducto auditivo externo izquierdo con secreción purulenta fétida y una proliferación de tejido rojizo friable de granulación en el piso del CAE, en la unión osteocartilaginosa.",
    "explicacion": "El paciente presenta una Otitis Externa Maligna (OEM) o necrotizante izquierda complicada con parálisis facial periférica ipsilateral (compromiso del VII par craneal). Los factores de riesgo (adulto mayor con diabetes descompensada), el dolor nocturno severo refractario y el hallazgo patognomónico de tejido de granulación en el piso del CAE conforman el diagnóstico clínico clásico. La presencia de parálisis facial indica extensión ósea hacia el foramen estilomastoideo y empeora el pronóstico. La conducta de elección obligatoria es la hospitalización inmediata, solicitud de TAC de peñasco y base de cráneo con contraste para evaluar osteomielitis, toma de cultivo del tejido de granulación para Pseudomonas aeruginosa, optimización del control glicémico con insulina y el inicio urgente de Ciprofloxacino o Ceftazidima por vía endovenosa en dosis altas durante un mínimo de 6 a 8 semanas.",
    "keyPoints": [
      "La otitis externa difusa aguda (oído de nadador) se trata con aseo del CAE y gotas óticas de Ciprofloxacino; NO requiere antibióticos orales.",
      "El dolor exquisito a la presión del trago (Signo del Trago +) y tracción del pabellón es característico de patología del CAE.",
      "La Otitis Externa Maligna es una osteomielitis de la base del cráneo causada por Pseudomonas aeruginosa en pacientes diabéticos descompensados.",
      "El hallazgo físico patognomónico de la otitis externa maligna es el tejido de granulación en el piso del conducto auditivo externo.",
      "El VII par craneal (facial) es el nervio craneano que se compromete con mayor frecuencia en la otitis externa maligna.",
      "El estudio imagenológico de confirmación de OEM es el TAC de peñasco con contraste para evaluar osteólisis ósea.",
      "El tratamiento de la OEM requiere hospitalización y antibioticoterapia EV prolongada (Ciprofloxacino o Ceftazidima) durante 6 a 8 semanas."
],
    "questions": [
      {
            "stem": "Un joven de 22 años, aficionado al surf, consulta por dolor intenso en el oído derecho de 48 horas de evolución, acompañado de sensación de oído tapado y prurito. No ha tenido fiebre ni síntomas respiratorios. Al examen físico, la movilización del pabellón auricular y la palpación del trago provocan un dolor muy intenso. La otoscopía revela edema circunferencial eritematoso del conducto auditivo externo con detritos blanquecinos abundantes, sin permitir ver con claridad el tímpano. ¿Cuál es el tratamiento de primera línea más adecuado?",
            "options": [
                  {
                        "id": "A",
                        "text": "Amoxicilina con ácido clavulánico 875/125 mg cada 12 horas por vía oral por 10 días."
                  },
                  {
                        "id": "B",
                        "text": "Aseo ótico y gotas óticas de ciprofloxacino con corticoide tópico por 7 a 10 días, asociado a analgesia oral."
                  },
                  {
                        "id": "C",
                        "text": "Ciprofloxacino oral 500 mg cada 12 horas por 14 días y reposo laboral."
                  },
                  {
                        "id": "D",
                        "text": "Lavado de oídos con abundante agua tibia a presión para despejar el conducto."
                  },
                  {
                        "id": "E",
                        "text": "Hospitalización inmediata para administración de ceftriaxona endovenosa."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. El caso corresponde a una clásica Otitis Externa Difusa Aguda (oído de nadador), producida habitualmente por Pseudomonas aeruginosa y favorecida por la exposición al agua. El signo del trago intensamente positivo es el sello clínico. En ausencia de signos de diseminación periauricular o inmunosupresión, el tratamiento de elección es estrictamente local: aspiración o aseo suave de los detritos del CAE y aplicación de gotas óticas que contengan fluoroquinolonas (Ciprofloxacino) asociadas o no a corticoides (Dexametasona) para reducir el edema, junto a analgesia oral con AINEs y protección estricta del agua. Los antibióticos orales (opciones A y C) no son necesarios y tienen menor eficacia local. El lavado con agua a presión (opción D) está contraindicado ya que agrava la inflamación y puede lesionar el conducto o el tímpano.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.4.017"
      },
      {
            "stem": "¿Cuál es el microorganismo causal más frecuente tanto de la otitis externa difusa aguda como de la otitis externa maligna necrotizante?",
            "options": [
                  {
                        "id": "A",
                        "text": "Staphylococcus epidermidis"
                  },
                  {
                        "id": "B",
                        "text": "Pseudomonas aeruginosa"
                  },
                  {
                        "id": "C",
                        "text": "Streptococcus pneumoniae"
                  },
                  {
                        "id": "D",
                        "text": "Haemophilus influenzae"
                  },
                  {
                        "id": "E",
                        "text": "Moraxella catarrhalis"
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. Pseudomonas aeruginosa es una bacteria gramnegativa que causa más del 70-80% de las otitis externas difusas y más del 95% de las otitis externas malignas necrotizantes en pacientes diabéticos. Su afinidad por medios húmedos y su producción de exotoxinas y proteasas facilitan la invasión dermoepidérmica y la osteólisis del hueso temporal.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.4.017"
      },
      {
            "stem": "Una mujer de 78 años, diabética de larga data con mal apego al tratamiento, consulta por otalgia derecha intensa de predominio nocturno, refractaria a paracetamol y tramadol, asociada a otorrea purulenta fétida. A la otoscopía se evidencia marcado edema del CAE con presencia de tejido de granulación eritematoso en el piso del conducto en la unión osteocartilaginosa. Al examen neurológico presenta desviación de la comisura bucal hacia la izquierda y lagoftalmos derecho. ¿Cuál es el examen inicial de elección para evaluar la extensión ósea de este cuadro?",
            "options": [
                  {
                        "id": "A",
                        "text": "Radiografía simple de cráneo en proyección de Schüller."
                  },
                  {
                        "id": "B",
                        "text": "Tomografía computarizada (TAC) de peñasco y base de cráneo con contraste."
                  },
                  {
                        "id": "C",
                        "text": "Resonancia magnética nuclear de encéfalo sin contraste."
                  },
                  {
                        "id": "D",
                        "text": "Ecografía de partes blandas de la región parotídea y retroauricular."
                  },
                  {
                        "id": "E",
                        "text": "Audiometría tonal y potenciales evocados auditivos de tronco encefálico."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. El cuadro corresponde a una Otitis Externa Maligna (OEM) necrotizante complicada con parálisis del VII par craneal. El estudio inicial de elección para diagnosticar la osteólisis, evaluar el compromiso cortical del peñasco, el foramen estilomastoideo y la base del cráneo es la Tomografía Computarizada (TAC) de peñasco y base de cráneo con contraste. La radiografía simple carece de resolución suficiente y la RM es útil posteriormente para evaluar partes blandas endocraneales, pero el TAC define la osteólisis ósea.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.4.017"
      },
      {
            "stem": "¿Cuál es la complicación neurológica por compromiso de pares craneales que se observa con mayor frecuencia en la evolución de la otitis externa maligna?",
            "options": [
                  {
                        "id": "A",
                        "text": "Parálisis del nervio hipogloso (XII par)."
                  },
                  {
                        "id": "B",
                        "text": "Parálisis del nervio facial (VII par)."
                  },
                  {
                        "id": "C",
                        "text": "Parálisis del nervio abducens (VI par)."
                  },
                  {
                        "id": "D",
                        "text": "Neuropatía del nervio trigémino (V par)."
                  },
                  {
                        "id": "E",
                        "text": "Parálisis del nervio accesorio espinal (XI par)."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. El nervio facial (VII par craneal) emerge por el agujero estilomastoideo, inmediatamente adyacente a la porción posterior e inferior del conducto auditivo externo. Por esta estrecha vecindad anatómica, es el primer y más frecuente par craneal afectado en la otitis externa maligna (hasta en el 50% de los casos avanzados), manifestándose como una parálisis facial periférica ipsilateral.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.4.017"
      }
]
  },
  {
    "id": "orl-04",
    "classId": "orl-04",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Patología del Oído Externo y Medio",
    "topicLabel": "14.4",
    "title": "Complicaciones de Otitis: Mastoiditis Aguda y Tromboflebitis",
    "perfilCode": "4.02.4.017",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Especialista",
    "ges": "Sin garantía GES específica · Ley de Urgencias médica",
    "reconstrucciones": "EUNACOM Julio 2018 (Q#49) · EUNACOM Diciembre 2021 (Q#72)",
    "frecuencia": "Alta rentabilidad · 1 a 2 preguntas por examen reconociendo la tríada retroauricular de mastoiditis y el manejo intrahospitalario urgente",
    "svg": null,
    "algoTitle": "Algoritmo de Diagnóstico y Conducta Urgente en Mastoiditis Aguda Pediátrica",
    "diagram": flow("Algoritmo de Diagnóstico y Conducta Urgente en Mastoiditis Aguda Pediátrica", [
      {
            "t": "Paciente con OMA Previa o en Curso con Deterioro Clínico",
            "s": [
                  "Aparición de signos inflamatorios retroauriculares"
            ],
            "type": "acc"
      },
      {
            "al": "Examen físico de la región retroauricular y mastoidea",
            "w": 460
      },
      {
            "k": "split",
            "q": "¿Eritema, fluctuación y desplazamiento anteroinferior del pabellón?",
            "s": "Borramiento del surco retroauricular + Signos inflamatorios",
            "ll": "Sí: Sospecha fundada de Mastoiditis Aguda",
            "rl": "No: Adenitis retroauricular simple sin OMA",
            "left": {
                  "t": "Mastoiditis Aguda Coalescente",
                  "s": "Acúmulo purulento en celdas mastoideas con osteólisis",
                  "type": "crit"
            },
            "right": {
                  "t": "Adenitis / Celulitis Retroauricular",
                  "s": "Otoscopía normal · Tratamiento antibiótico oral",
                  "type": "dec"
            }
      },
      {
            "al": "Protocolo hospitalario obligatorio",
            "from": "left",
            "w": 440
      },
      {
            "t": "Hospitalización + TAC de Peñasco con Contraste",
            "s": [
                  "Descartar absceso subperióstico, empiema epidural o tromboflebitis de seno sigmoide",
                  "Antibioticoterapia EV inmediata: Ceftriaxona 100 mg/kg/día EV (+ Vancomicina / Metronidazol)",
                  "Miringotomía descompresiva + Mastoidecmotía si hay colección subperióstica"
            ],
            "type": "warn"
      }
]),
    "contexto": "La mastoiditis aguda es la complicación intratemporal supurativa más frecuente de la otitis media aguda en la infancia. Se produce cuando la infección de las celdas mastoideas destruye las trabéculas óseas (mastoiditis coalescente) y se abre paso hacia el periostio formando un absceso subperióstico. En el EUNACOM se evalúa de manera regular el reconocimiento del signo del pabellón despegado/empujado hacia adelante, el borramiento del surco retroauricular, la solicitud inmediata de TAC de peñasco y la hospitalización para antibióticos endovenosos y eventual mastoidectomía.",
    "contentSections": [
      {
            "subhead": "1. Fisiopatología de la Mastoiditis Coalescente",
            "paragraphs": [
                  "Toda otitis media aguda se acompaña de un grado variable de inflamación de la mucosa de las celdas mastoideas por continuidad anatómica a través del <em>aditus ad antrum</em>. Sin embargo, se denomina <strong>Mastoiditis Aguda</strong> propiamente tal a la progresión purulenta que genera <strong>hiperpresión, necrosis isquémica y lisis de las trabéculas óseas mastoideas (mastoiditis coalescente)</strong>.",
                  "Los patógenos implicados son idénticos a los de la OMA: <em>Streptococcus pneumoniae</em> (el más agresivo y común), <em>Streptococcus pyogenes</em>, <em>Haemophilus influenzae</em> y <em>Staphylococcus aureus</em>. La acumulación de pus bajo presión puede romper la cortical externa del hueso temporal generando un <strong>absceso subperióstico</strong>, o extenderse hacia la fosa craneal posterior o media causando meningitis, absceso cerebral o <strong>tromboflebitis séptica del seno lateral/sigmoide</strong>."
            ]
      },
      {
            "subhead": "2. Presentación Clínica Cardinal: La Tríada Retroauricular",
            "paragraphs": [
                  "La mastoiditis aguda se observa con mayor frecuencia en niños menores de 2 años. La clínica se caracteriza por la reaparición o empeoramiento de fiebre alta, compromiso del estado general y dolor retroauricular pulsátil intenso tras un episodio reciente de OMA.",
                  "Al examen físico destacan tres signos patognomónicos: (1) <strong>Eritema, edema y aumento de volumen doloroso sobre la región mastoidea</strong>; (2) <strong>Borramiento del surco retroauricular</strong>; y (3) <strong>Desplazamiento anteroinferior del pabellón auricular ('oreja despegada o en asa')</strong>. A la otoscopía se confirma el abombamiento o perforación timpánica con otorrea purulenta profusa, asociado con frecuencia a la caída o abombamiento de la pared posterosuperior del conducto auditivo externo."
            ]
      },
      {
            "subhead": "3. Diagnóstico por Imágenes y Tromboflebitis del Seno Lateral",
            "paragraphs": [
                  "Ante la sospecha clínica de mastoiditis aguda, el examen de elección indiscutido es el <strong>TAC de peñasco y cerebro con contraste endovenoso</strong>. El TAC permite confirmar la ocupación completa de las celdas mastoideas, la pérdida de las trabéculas óseas (coalescencia), la presencia de absceso subperióstico y descartar complicaciones intracraneales.",
                  "La <strong>tromboflebitis séptica del seno lateral (seno sigmoide)</strong> es una complicación temible caracterizada por picos febriles en agujas ('fiebre en picos de sierra'), calofríos intensos, cefalea y signos de hipertensión endocraneana. En el TAC o angio-TAC con contraste se evidencia el clásico <strong>signo del delta vacío</strong> (defecto de llene central en el seno venoso rodeado de realce dural)."
            ]
      },
      {
            "subhead": "4. Manejo Terapéutico Hospitalario y Criterios Quirúrgicos",
            "paragraphs": [
                  "El manejo de la mastoiditis aguda exige <strong>hospitalización inmediata</strong>. Las medidas fundamentales son: (1) <strong>Antibioticoterapia endovenosa de amplio espectro</strong>: de primera línea <strong>Ceftriaxona (100 mg/kg/día EV)</strong> asociada a Clindamicina (o Vancomicina si hay sospecha de neumococo resistente o S. aureus meticilino-resistente); (2) <strong>Miringotomía descompresiva</strong> con aspiración del pus de oído medio para cultivo y descompresión;",
                  "Si el paciente presenta un <strong>absceso subperióstico fluctuante documentado, o no responde tras 24 a 48 horas de antibióticos endovenosos, o presenta complicaciones neurológicas</strong>, está indicada la intervención quirúrgica inmediata por otorrinolaringólogo mediante <strong>mastoidecmotía simple (cortical) con drenaje de colecciones</strong>."
            ]
      }
],
    "table": {
      "title": "Diagnóstico Diferencial: Mastoiditis Aguda vs Adenitis Retroauricular",
      "headers": [
            "Criterio de Evaluación",
            "Mastoiditis Aguda Coalescente",
            "Adenitis Retroauricular / Celulitis"
      ],
      "rows": [
            [
                  "Otoscopía",
                  "OMA evidente: tímpano abombado o perforado con otorrea",
                  "Otoscopía rigurosamente normal (tímpano sano)"
            ],
            [
                  "Surco Retroauricular",
                  "Borrado por el edema y colección subperióstica",
                  "Respetado; el ganglio es móvil o delimitado sobre el surco"
            ],
            [
                  "Posición del Pabellón",
                  "Desplazado hacia adelante y hacia abajo ('oreja en asa')",
                  "Posición anatómica normal del pabellón auricular"
            ],
            [
                  "TAC de Peñasco",
                  "Pérdida de trabéculas óseas y coalescencia mastoidea",
                  "Celdas mastoideas bien aireadas sin osteólisis"
            ],
            [
                  "Conducta Médica",
                  "Hospitalización + Ceftriaxona EV + TAC de peñasco urgente",
                  "Ambulatorio: antibióticos orales (Cloxacilina o Cefadroxilo)"
            ]
      ]
},
    "severityTable": null,
    "treatmentTable": null,
    "vignette": "Un lactante de 16 meses es llevado al servicio de urgencia por su madre por presentar fiebre alta de hasta 39.5°C, irritabilidad y llanto continuo de 48 horas de evolución. La madre refiere que hace 8 días completó un ciclo de 7 días de amoxicilina por otitis media aguda con mejoría transitoria. Al examen físico, el niño se encuentra febril, decaído. En la región retroauricular derecha se palpa una masa intensamente eritematosa, empastada, caliente y fluctuante al tacto, con borramiento del surco retroauricular y desplazamiento anteroinferior del pabellón auricular derecho. La otoscopía derecha muestra conducto estrechado por edema posterosuperior y membrana timpánica eritematosa y abombada.",
    "explicacion": "El cuadro clínico reúne la totalidad de los elementos diagnósticos de una Mastoiditis Aguda derecha coalescente con probable absceso subperióstico, que se desarrolló como complicación de una OMA mal controlada. El borramiento del surco retroauricular junto a la fluctuación local y el desplazamiento hacia adelante y abajo de la oreja son patognomónicos. La conducta inmediata mandatoria es la hospitalización urgente en pediatría, la toma de hemocultivos, la solicitud de un TAC de peñascos y encéfalo con contraste para confirmar la colección ósea y descartar trombosis de seno sigmoide o empiema, y el inicio inmediato de antibioticoterapia parenteral con Ceftriaxona endovenosa en dosis meningeas (100 mg/kg/día) asociada a clindamicina o vancomicina. La presencia de fluctuación obliga a interconsulta urgente a ORL para drenaje quirúrgico mediante miringotomía y mastoidectomía.",
    "keyPoints": [
      "La mastoiditis aguda es la complicación intratemporal más común de la OMA en la infancia.",
      "La tríada clínica definitoria es eritema/dolor retroauricular, borramiento del surco retroauricular y desplazamiento del pabellón auricular hacia adelante.",
      "Toda sospecha de mastoiditis aguda exige hospitalización inmediata.",
      "El TAC de peñasco con contraste es el patrón de oro imagenológico para confirmar la coalescencia ósea y descartar complicaciones endocraneales.",
      "El tratamiento inicial consiste en Ceftriaxona endovenosa en dosis altas (100 mg/kg/día) más miringotomía descompresiva.",
      "La presencia de absceso subperióstico fluctuante o falta de respuesta a antibióticos a las 24-48h indica mastoidectomía quirúrgica urgente.",
      "La tromboflebitis del seno sigmoide se sospecha ante fiebre en picos de sierra y cefalea; en el TAC muestra el signo del delta vacío."
],
    "questions": [
      {
            "stem": "Un niño de 2 años presenta fiebre de 39.3°C, irritabilidad y tumefacción retroauricular izquierda dolorosa y eritematosa que desplaza el pabellón auricular hacia adelante y borra el surco retroauricular. La otoscopía muestra tímpano izquierdo abombado e hiperémico. ¿Cuál es la conducta diagnóstica y terapéutica inicial más adecuada?",
            "options": [
                  {
                        "id": "A",
                        "text": "Indicar amoxicilina con ácido clavulánico oral por 14 días y citar a control ambulatorio en 48 horas."
                  },
                  {
                        "id": "B",
                        "text": "Solicitar ecografía de partes blandas y dar de alta con antiinflamatorios no esteroidales."
                  },
                  {
                        "id": "C",
                        "text": "Hospitalizar de inmediato, solicitar TAC de peñasco con contraste e iniciar ceftriaxona endovenosa."
                  },
                  {
                        "id": "D",
                        "text": "Realizar drenaje por punción ambulatoria en sala de procedimientos e indicar cefadroxilo oral."
                  },
                  {
                        "id": "E",
                        "text": "Instilar gotas óticas de ciprofloxacino y solicitar radiografía de cráneo simple."
                  }
            ],
            "correcta": "C",
            "explicacion": "La opción correcta es la C. El paciente presenta una Mastoiditis Aguda izquierda, complicación supurativa mayor de la OMA. Constituye una urgencia médica que exige hospitalización inmediata. El examen imagenológico de elección es el TAC de peñasco y cráneo con contraste endovenoso para confirmar la coalescencia de las celdas mastoideas y descartar absceso subperióstico o trombosis de senos durales. El tratamiento inicial mandatario es antibioticoterapia endovenosa de amplio espectro (Ceftriaxona EV) asociada a evaluación urgente por especialista otorrinolaringólogo para miringotomía o mastoidectomía. El manejo ambulatorio con antibióticos orales (opciones A y B) es una negligencia médica ante una infección osteolítica del hueso temporal.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.4.017"
      },
      {
            "stem": "¿Cuál de los siguientes signos imagenológicos en el angio-TAC de cráneo o TAC con contraste es característico de la trombosis séptica del seno sigmoide como complicación de una otitis media o mastoiditis?",
            "options": [
                  {
                        "id": "A",
                        "text": "Signo de la cuerda en la arteria cerebral media."
                  },
                  {
                        "id": "B",
                        "text": "Signo del delta vacío (defecto de llene central en el seno venoso dural)."
                  },
                  {
                        "id": "C",
                        "text": "Realce leptomeníngeo difuso en base de cráneo sin colecciones."
                  },
                  {
                        "id": "D",
                        "text": "Hiperdensidad espontánea del clivus y del agujero magno."
                  },
                  {
                        "id": "E",
                        "text": "Neumoencéfalo espontáneo en cisterna perimesencefálica."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. El 'signo del delta vacío' (empty delta sign) es el hallazgo clásico en el TAC de cerebro con contraste o angio-TAC venoso, caracterizado por un defecto de repleción intraluminal (el trombo que no capta contraste) rodeado por el realce de la pared dural ricamente vascularizada del seno sigmoide o sagital. Es altamente indicativo de tromboflebitis séptica de los senos venosos durales secundaria a infecciones óticas contiguas.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.4.017"
      }
]
  },
  {
    "id": "orl-05",
    "classId": "orl-05",
    "tier": 2,
    "blockNum": 2,
    "blockName": "Audiología & Trastornos del Equilibrio",
    "topicLabel": "14.5",
    "title": "Evaluación Auditiva: Audiometría, Impedanciometría y Diapasones (Rinne y Weber)",
    "perfilCode": "4.02.4.004",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Completo",
    "ges": "Garantía GES Hipoacusia Moderada, Severa y Profunda en menores de 4 años · GES Hipoacusia en mayores de 65 años",
    "reconstrucciones": "EUNACOM Diciembre 2018 (Q#15) · EUNACOM Julio 2020 (Q#28) · EUNACOM Diciembre 2022 (Q#19)",
    "frecuencia": "Altísima rentabilidad · 2 preguntas por examen sobre interpretación de pruebas con diapasones (Rinne y Weber) y curvas timpanométricas de Jerger",
    "svg": null,
    "algoTitle": "Algoritmo de Interpretación Diagnóstica de Diapasones, Audiometría y Timpanometría",
    "diagram": flow("Algoritmo de Interpretación Diagnóstica de Diapasones, Audiometría y Timpanometría", [
      {
            "t": "Paciente con Queja de Hipoacusia Unilateral o Bilateral",
            "s": [
                  "Otoscopía para descartar tapón de cerumen o cuerpo extraño"
            ],
            "type": "acc"
      },
      {
            "al": "Prueba de Diapasones en Vértice Craneal (Test de Weber)",
            "w": 460
      },
      {
            "k": "split",
            "q": "¿Hacia dónde lateraliza el sonido en el Test de Weber?",
            "s": "Vibración del diapasón de 512 Hz en el vértex o frente",
            "ll": "Lateraliza al oído enfermo / peor",
            "rl": "Lateraliza al oído sano / mejor",
            "left": {
                  "t": "Hipoacusia de Conducción (Transmisión)",
                  "s": "Oído medio o externo bloquea ruido ambiental",
                  "type": "acc"
            },
            "right": {
                  "t": "Hipoacusia Sensorioneural (Percepción)",
                  "s": "Cóclea o nervio auditivo lesionado en lado enfermo",
                  "type": "dec"
            }
      },
      {
            "al": "Confirmación con Test de Rinne en oído enfermo",
            "from": "left",
            "w": 460
      },
      {
            "k": "split",
            "q": "¿Test de Rinne: Vía Ósea vs Vía Aérea?",
            "s": "Comparación del sonido en mastoides (VO) vs frente al CAE (VA)",
            "ll": "Rinne Negativo: VO > VA",
            "rl": "Rinne Positivo: VA > VO",
            "left": {
                  "t": "Hipoacusia de Conducción Confirmada",
                  "s": "Otitis media, perforación, otoesclerosis · Timpanometría",
                  "type": "acc"
            },
            "right": {
                  "t": "Normal o HSN en ese oído",
                  "s": "En HSN la VA sigue siendo más eficiente que la VO",
                  "type": "dec"
            }
      },
      {
            "al": "Impedanciometría (Curvas de Jerger)",
            "from": "left",
            "w": 440
      },
      {
            "t": "Clasificación Timpanométrica de Jerger",
            "s": [
                  "Curva A: Normal (pico centrado en 0 daPa)",
                  "Curva B: Plana (Líquido en oído medio / OME o perforación)",
                  "Curva C: Desplazada a presiones negativas (< -100 daPa: disfunción tubárica)"
            ],
            "type": "acc"
      }
]),
    "contexto": "La evaluación funcional auditiva es un pilar evaluado con frecuencia fija en el EUNACOM. La distinción semiológica entre una hipoacusia de conducción (oído externo/medio) y una hipoacusia sensorioneural (cóclea/nervio VIII) mediante diapasones de 512 Hz (Rinne y Weber) es una competencia clínica elemental que no tolera errores conceptuales. Asimismo, la interpretación de la audiometría tonal (gap óseo-aéreo) y las curvas timpanométricas de Jerger permite diagnosticar de forma precisa patologías como OME, otoesclerosis y disfunción de la trompa de Eustaquio.",
    "contentSections": [
      {
            "subhead": "1. Acumetría Clínica con Diapasones: Test de Weber y Test de Rinne",
            "paragraphs": [
                  "La <strong>acumetría</strong> utiliza un diapasón de 512 Hz (o 256 Hz) para diferenciar al lado de la cama del paciente una hipoacusia de conducción o transmisión de una sensorioneural o de percepción:",
                  "<strong>Test de Weber:</strong> Se coloca la base del diapasón vibrando en la línea media del cráneo (frente, vértex o incisivos superiores). En audición normal o hipoacusia simétrica, el sonido se percibe centrado en la línea media (sin lateralización). En <strong>hipoacusia de conducción unilateral</strong>, el sonido <strong>lateraliza hacia el oído enfermo</strong> (debido a que la alteración mecánica atenúa el ruido ambiente enmascarante y concentra la vibración ósea). En <strong>hipoacusia sensorioneural unilateral</strong>, el sonido <strong>lateraliza hacia el oído sano</strong> (porque la cóclea del oído afectado no es capaz de transducir la vibración).",
                  "<strong>Test de Rinne:</strong> Compara la audición por vía aérea (VA) frente al conducto auditivo externo con la audición por vía ósea (VO) sobre la apófisis mastoides. El <strong>Rinne Positivo (VA > VO)</strong> es el patrón normal (la vía aérea es fisiológicamente el doble de eficiente) y también se observa en la hipoacusia sensorioneural pura. El <strong>Rinne Negativo (VO > VA)</strong> ocurre cuando el sonido se oye mejor o por más tiempo en el hueso mastoideo que en el aire, lo cual es <strong>patognomónico de hipoacusia de conducción</strong>."
            ]
      },
      {
            "subhead": "2. Audiometría Tonal: Umbrales Auditivos y Gap Óseo-Aéreo",
            "paragraphs": [
                  "La <strong>audiometría tonal liminar</strong> cuantifica el umbral auditivo en decibeles (dB HL) a través de frecuencias entre 125 y 8000 Hz, evaluando por separado la vía aérea (auriculares) y la vía ósea (vibrador mastoideo):",
                  "<strong>Audición Normal:</strong> Umbrales de ambas vías entre 0 y 20-25 dB HL sin separación.",
                  "<strong>Hipoacusia de Conducción:</strong> La vía ósea está normal (≤ 20 dB), pero la vía aérea está descendida (> 20 dB). La diferencia entre ambas curvas se denomina <strong>Gap o brecha óseo-aérea (≥ 15 dB)</strong>, indicando patología obstructiva mecánica en CAE u oído medio (cerumen, OME, perforación, otoesclerosis).",
                  "<strong>Hipoacusia Sensorioneural:</strong> Ambas curvas (ósea y aérea) están descendidas paralelamente, superpuestas o con una diferencia menor a 10 dB (sin gap). Indica lesión en las células ciliadas del órgano de Corti o en el nervio coclear (presbiacusia, hipoacusia súbita, ototoxicidad, neurinoma del acústico).",
                  "<strong>Hipoacusia Mixta:</strong> Ambas curvas están descendidas, pero persiste un gap óseo-aéreo significativo (≥ 15 dB)."
            ]
      },
      {
            "subhead": "3. Impedanciometría y Curvas Timpanométricas de Jerger",
            "paragraphs": [
                  "La <strong>impedanciometría</strong> evalúa la compliance o distensibilidad del sistema tímpano-oscicular en respuesta a variaciones de presión de aire aplicadas en el CAE, generando el <strong>timpanograma</strong>, clasificado según James Jerger:",
                  "<strong>Curva A (Normal):</strong> Pico de compliance normal (0.3 a 1.6 ml) centrado entre -100 y +50 daPa. Oído medio sano y adecuadamente aireado.",
                  "<strong>Curva As (Shallow/Rígida):</strong> Pico centrado en 0 daPa pero de amplitud marcadamente reducida (< 0.3 ml). Típica de rigidez del sistema de huesecillos: <strong>otoesclerosis</strong> o timpanoesclerosis extensa.",
                  "<strong>Curva Ad (Deep/Flácida):</strong> Pico centrado pero de amplitud infinita o excesiva (> 1.6 ml). Indica <strong>disyunción de la cadena oscicular</strong> o membrana timpánica monomérica hiperflácida.",
                  "<strong>Curva B (Plana / Sin pico):</strong> No hay punto de máxima distensibilidad. El hallazgo clásico es <strong>otitis media con efusión (líquido seroso retrotimpánico)</strong>. Si el volumen del conducto es anormalmente alto (> 2.5 ml), indica perforación timpánica amplia o colleras permeables.",
                  "<strong>Curva C (Presión negativa):</strong> Pico de distensibilidad desplazado hacia presiones marcadamente negativas (< -100 a -150 daPa). Diagnóstica de <strong>disfunción de la trompa de Eustaquio</strong> (obstrucción tubárica)."
            ]
      }
],
    "table": {
      "title": "Síntesis Semiología de Pruebas Auditivas: Diapasones, Audiometría y Timpanometría",
      "headers": [
            "Parámetro / Prueba",
            "Audición Normal",
            "Hipoacusia de Conducción",
            "Hipoacusia Sensorioneural"
      ],
      "rows": [
            [
                  "Test de Weber",
                  "Indiferente / Centrado en línea media",
                  "Lateraliza al oído enfermo (peor audición)",
                  "Lateraliza al oído sano (mejor audición)"
            ],
            [
                  "Test de Rinne",
                  "Positivo bilateral (VA > VO)",
                  "Negativo en oído enfermo (VO > VA)",
                  "Positivo en oído enfermo (VA > VO)"
            ],
            [
                  "Audiometría Tonal",
                  "Ambas curvas ≤ 20 dB HL",
                  "Vía ósea normal + Vía aérea descendida (Gap ≥ 15 dB)",
                  "Ambas curvas descendidas juntas (Sin Gap)"
            ],
            [
                  "Timpanograma Típico",
                  "Curva A de Jerger (Pico centrado en 0)",
                  "Curva B (plana por líquido) o Curva C (tubárica) o As",
                  "Curva A de Jerger rigurosamente normal"
            ],
            [
                  "Reflejo Estapedial",
                  "Presente bilateralmente",
                  "Ausente al estimular el oído con patología de conducción",
                  "Presente si HSN es leve-moderada (con reclutamiento)"
            ]
      ]
},
    "severityTable": null,
    "treatmentTable": null,
    "vignette": "Una mujer de 34 años, previamente sana y sin antecedentes de otorrea ni trauma, consulta por hipoacusia progresiva del oído derecho de 1 año de evolución, que empeoró tras el parto de su segundo hijo. No presenta dolor ni acúfenos pulsátiles. Al examen otoscópico, ambos conductos auditivos externos están limpios y las membranas timpánicas son transparentes, íntegras y normales. Al examen con diapasón de 512 Hz, la prueba de Weber lateraliza claramente hacia el oído derecho. La prueba de Rinne es negativo en el oído derecho (VO > VA) y positivo en el oído izquierdo (VA > VO). El timpanograma muestra una curva As en el oído derecho.",
    "explicacion": "Los hallazgos semiológicos con diapasón demuestran de forma inequívoca una hipoacusia de conducción del oído derecho: el Weber lateraliza al oído afectado (derecho) y el Rinne es negativo (la audición por vía ósea sobrepasa a la aérea por bloqueo de la transmisión en el oído medio). Dado que la otoscopía es rigurosamente normal (tímpano sano sin perforación ni líquido) y la paciente es una mujer joven cuyo cuadro progresó en el puerperio, asociada a una curva timpanométrica As (rigidez de la cadena oscicular), el diagnóstico más probable es una Otoesclerosis con fijación de la platina del estribo a la ventana oval. La conducta médica es solicitar audiometría tonal confirmatoria y derivar a ORL para estudio y eventual estapedostomía quirúrgica.",
    "keyPoints": [
      "En el Test de Weber, el sonido lateraliza al oído enfermo en hipoacusia de conducción y al oído sano en hipoacusia sensorioneural.",
      "En el Test de Rinne, un resultado negativo (VO > VA) es patognomónico de hipoacusia de conducción.",
      "En la hipoacusia sensorioneural, el Test de Rinne sigue siendo positivo (VA > VO).",
      "La brecha u oscilación óseo-aérea (Gap ≥ 15 dB) en la audiometría tonal confirma compromiso mecánico del oído externo o medio.",
      "La curva B (plana) en la timpanometría es característica de Otitis Media con Efusión (líquido en la caja timpánica).",
      "La curva C (presión negativa < -100 daPa) es diagnóstica de disfunción de la trompa de Eustaquio.",
      "La curva As (baja compliance) con otoscopía normal en mujer joven orienta fuertemente a Otoesclerosis."
],
    "questions": [
      {
            "stem": "Un paciente consulta por hipoacusia en el oído izquierdo. Al examen con diapasón de 512 Hz, la prueba de Weber lateraliza hacia el oído derecho y la prueba de Rinne es positiva bilateralmente (VA > VO en ambos oídos). ¿A cuál de los siguientes diagnósticos orienta este patrón semiológico?",
            "options": [
                  {
                        "id": "A",
                        "text": "Hipoacusia de conducción del oído izquierdo."
                  },
                  {
                        "id": "B",
                        "text": "Hipoacusia sensorioneural del oído izquierdo."
                  },
                  {
                        "id": "C",
                        "text": "Hipoacusia de conducción del oído derecho."
                  },
                  {
                        "id": "D",
                        "text": "Audición perfectamente normal en ambos oídos."
                  },
                  {
                        "id": "E",
                        "text": "Tapón de cerumen ocluyente en el conducto auditivo izquierdo."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. En el Test de Weber, el sonido lateraliza hacia el oído contralateral (sano) en las hipoacusias sensorioneurales; al lateralizar al oído derecho, indica que el oído izquierdo es el hipoacúsico sensorioneural. Además, el Test de Rinne positivo bilateral (VA > VO) confirma que no hay alteración de la conducción en el oído izquierdo, ya que las hipoacusias sensorioneurales conservan un Rinne positivo (la vía aérea sigue siendo más eficiente que la vía ósea, aunque ambas estén proporcionalmente descendidas). Una hipoacusia de conducción izquierda (opciones A y E) mostraría Weber al oído izquierdo y Rinne negativo izquierdo.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.4.004"
      },
      {
            "stem": "¿Cuál de las siguientes curvas de la clasificación de Jerger en la timpanometría se asocia de forma característica a la presencia de líquido seroso intratimpánico en la otitis media con efusión (OME)?",
            "options": [
                  {
                        "id": "A",
                        "text": "Curva A (pico centrado a 0 daPa con amplitud normal)."
                  },
                  {
                        "id": "B",
                        "text": "Curva As (amplitud disminuida con presión normal)."
                  },
                  {
                        "id": "C",
                        "text": "Curva B (curva aplanada sin punto de máxima compliance)."
                  },
                  {
                        "id": "D",
                        "text": "Curva C (pico desplazado a presiones negativas menores a -100 daPa)."
                  },
                  {
                        "id": "E",
                        "text": "Curva Ad (amplitud muy aumentada por discontinuidad de cadena)."
                  }
            ],
            "correcta": "C",
            "explicacion": "La opción correcta es la C. La curva tipo B de Jerger es una curva plana, caracterizada por la ausencia de un pico móvil de compliance timpánica debido a la presencia de líquido no compresible (exudado o transudado seroso) en la cavidad del oído medio que impide la movilidad del tímpano ante los cambios de presión. Es el hallazgo timpanométrico clásico de la Otitis Media con Efusión (OME). La curva A es normal, la curva As indica rigidez (otoesclerosis), la curva C indica presión negativa por disfunción tubárica y la curva Ad indica luxación de cadena o tímpano monomérico.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.4.004"
      }
]
  },
  {
    "id": "orl-06",
    "classId": "orl-06",
    "tier": 3,
    "blockNum": 2,
    "blockName": "Audiología & Trastornos del Equilibrio",
    "topicLabel": "14.6",
    "title": "Hipoacusia Sensorioneural Súbita, Trauma Acústico y Presbiacusia",
    "perfilCode": "4.02.4.004",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Especialista",
    "ges": "Garantía GES Hipoacusia bilateral en personas de 65 años y más (audífonos)",
    "reconstrucciones": "EUNACOM Diciembre 2017 (Q#88) · EUNACOM Julio 2019 (Q#24) · EUNACOM Diciembre 2021 (Q#51)",
    "frecuencia": "Altísima rentabilidad · 2 a 3 preguntas por examen: la hipoacusia sensorioneural súbita como URGENCIA MÉDICA tratada con corticoides precoces y la presbiacusia en el adulto mayor GES",
    "svg": null,
    "algoTitle": "Algoritmo de Diagnóstico y Manejo de Urgencia en Hipoacusia Sensorioneural Súbita",
    "diagram": flow("Algoritmo de Diagnóstico y Manejo de Urgencia en Hipoacusia Sensorioneural Súbita", [
      {
            "t": "Instalación Súbita de Hipoacusia Unilateral (< 72 horas)",
            "s": [
                  "Acúfeno unilateral agudo, sensación de oído tapado o plenitud ótica"
            ],
            "type": "acc"
      },
      {
            "al": "Otoscopía inmediata para descartar causa mecánica",
            "w": 440
      },
      {
            "k": "split",
            "q": "¿Otoscopía rigurosamente normal y Rinne (+) con Weber al lado sano?",
            "s": "Descarte de cerumen, agua, disfunción tubárica o cuerpo extraño",
            "ll": "Sí: Confirmación clínica de HSN Aguda",
            "rl": "No: Causa mecánica evidente",
            "left": {
                  "t": "Alarma: Hipoacusia Sensorioneural Súbita (HSNS)",
                  "s": "URGENCIA MÉDICA ORL · Ventana terapéutica crítica",
                  "type": "warn"
            },
            "right": {
                  "t": "Hipoacusia de Conducción",
                  "s": "Extracción de cerumen / Manejo local",
                  "type": "dec"
            }
      },
      {
            "al": "Criterio Audiométrico de HSNS",
            "from": "left",
            "w": 460
      },
      {
            "t": "Confirmación Audiométrica Inmediata",
            "s": [
                  "Pérdida auditiva neurosensorial ≥ 30 dB en al menos 3 frecuencias consecutivas",
                  "Instalada en menos de 72 horas"
            ],
            "type": "acc"
      },
      {
            "al": "Tratamiento de Urgencia en las Primeras 48-72h",
            "w": 460
      },
      {
            "t": "Corticoterapia Sistémica en Altas Dosis Inmediata",
            "s": [
                  "Prednisona oral 1 mg/kg/día (máx 60 mg/d) en toma matinal por 10 a 14 días",
                  "Derivación urgente a ORL para eventuales corticoides intratimpánicos",
                  "RMN de ángulo pontocerebeloso para descartar Schwannoma vestibular"
            ],
            "type": "crit"
      }
]),
    "contexto": "La Hipoacusia Sensorioneural Súbita (HSNS) idiopática es una de las verdaderas emergencias de la especialidad otorrinolaringológica: el pronóstico funcional de recuperación auditiva depende directamente de la precocidad con que se instaure la corticoterapia oral en altas dosis (dentro de los primeros 7 a 14 días). El examen EUNACOM castiga severamente el error de confundir una HSNS con un 'oído tapado por cerumen' o 'catarro tubárico' y diferir el tratamiento. Asimismo, la presbiacusia senil se evalúa como la patología auditiva más prevalente del adulto mayor en el régimen GES.",
    "contentSections": [
      {
            "subhead": "1. Hipoacusia Sensorioneural Súbita (HSNS): Definición y Urgencia Médica",
            "paragraphs": [
                  "La <strong>Hipoacusia Sensorioneural Súbita (HSNS)</strong> se define formalmente según criterios de consenso internacional como una <strong>disminución de la audición de tipo sensorioneural de al menos 30 dB en al menos tres frecuencias audiométricas consecutivas, instaurada en un período menor a 72 horas</strong>.",
                  "En más del 90% de los casos es idiopática, postulándose mecanismos virales (reactivación de virus herpes simplex en la cóclea), microvasculares (isquemia o microtrombosis de la arteria auditiva interna/laberíntica) o fenómenos inmunomediados. Afecta habitualmente a un solo oído (98% unilateral). El paciente relata despertar con el oído 'ensordecido', acompañado de un acúfeno agudo intenso de tono agudo y sensación de taponamiento o plenitud ótica, asociándose a inestabilidad o vértigo leve en 30-40% de los casos."
            ]
      },
      {
            "subhead": "2. Diagnóstico Diferencial y Error Frecuente en Urgencia",
            "paragraphs": [
                  "El <strong>error más grave y frecuente en la atención primaria</strong> es atribuir la hipoacusia súbita a un tapón de cerumen 'invisible' o a una disfunción tubárica por resfriado, indicando lavados de oído o descongestionantes y postergando la evaluación audiológica. Esto hace perder la ventana de oportunidad terapéutica, resultando en sordera neurosensorial definitiva e irreversible.",
                  "Al examen físico, la <strong>otoscopía es rigurosamente normal</strong>. La prueba de diapasones revela <strong>Weber lateralizado hacia el oído sano</strong> y <strong>Rinne positivo en el oído enfermo (VA > VO)</strong>. Toda sospecha exige audiometría urgente en las primeras 24-48 horas. Una vez estabilizado el paciente, debe realizarse una <strong>Resonancia Magnética de conducto auditivo interno y ángulo pontocerebeloso</strong> para descartar de forma fehaciente un <em>Schwannoma vestibular (neurinoma del acústico)</em>, presente en el 1 al 3% de los casos."
            ]
      },
      {
            "subhead": "3. Terapia con Corticoides y Factores Pronósticos",
            "paragraphs": [
                  "El <strong>único tratamiento con evidencia sólida de eficacia es la corticoterapia precoz en dosis altas</strong>. Se debe indicar de inmediato: <strong>Prednisona oral a 1 mg/kg/día (máximo 60 mg/día) durante 10 a 14 días</strong>, seguido de una pauta de descenso progresivo en 7 a 10 días. Si existen contraindicaciones sistémicas para corticoides orales (diabetes lábil, úlcera péptica activa, hipertensión severa refractaria) o si la respuesta es incompleta, el especialista ORL aplica <strong>inyecciones intratimpánicas de dexametasona o metilprednisolona</strong> a través de la membrana timpánica.",
                  "Los factores de mal pronóstico son: retraso en el inicio del tratamiento (> 14 días), hipoacusia profunda o cofosis inicial (> 90 dB), edad avanzada (> 65 años), curva audiométrica descendente en frecuencias agudas y presencia de vértigo severo asociado."
            ]
      },
      {
            "subhead": "4. Trauma Acústico y Presbiacusia: Perfil Audiométrico y GES",
            "paragraphs": [
                  "<strong>Trauma Acústico Agudo vs Crónico:</strong> El trauma acústico agudo resulta de una exposición breve a un ruido de alta intensidad (> 140 dB, ej. explosión o disparo), causando rotura de uniones ciliares o desprendimiento del órgano de Corti con acúfeno agudo permanente. El <strong>trauma acústico crónico (hipoacusia laboral por ruido)</strong> se genera por exposición prolongada a ruidos industriales (> 85 dB); su sello patognomónico en la audiometría es una <strong>muesca o escotoma acústico simétrico a los 4000 Hz</strong> (con recuperación parcial a los 8000 Hz).",
                  "<strong>Presbiacusia:</strong> Es el deterioro fisiológico coclear asociado a la edad (> 65 años), con degeneración de células ciliadas basales y atrofia de la estría vascular. Se caracteriza por una <strong>hipoacusia sensorioneural bilateral, simétrica, progresiva, de predominio en frecuencias agudas (3000-8000 Hz)</strong>. La queja principal es: <em>'escucho que me hablan, pero no entiendo lo que dicen'</em> (marcada alteración en la discriminación del lenguaje en ambientes ruidosos). En Chile, es una <strong>patología con Garantía Explícita en Salud (GES N° 56)</strong> para personas de 65 años y más, garantizando la entrega e implementación de <strong>audífonos bilaterales</strong> y rehabilitación auditiva."
            ]
      }
],
    "table": {
      "title": "Diagnóstico Diferencial: Hipoacusia Súbita vs Trauma Acústico vs Presbiacusia",
      "headers": [
            "Entidad Clínica",
            "Etiología / Fisiopatología",
            "Patrón Audiométrico Típico",
            "Tratamiento / Cobertura"
      ],
      "rows": [
            [
                  "Hipoacusia Sensorioneural Súbita",
                  "Idiopática (viral / microvascular) · Lesión coclear aguda",
                  "Caída HSN ≥ 30 dB en ≥ 3 frecuencias consecutivas unilateral",
                  "URGENCIA: Prednisona oral 1 mg/kg/día x 10-14 días precoz"
            ],
            [
                  "Trauma Acústico Crónico",
                  "Exposición ocupacional repetida a ruido industrial > 85 dB",
                  "Muesca o escotoma sensorial selectivo en frecuencia 4000 Hz",
                  "Prevención: Protectores auditivos; daño ya instalado es irreversible"
            ],
            [
                  "Presbiacusia del Adulto Mayor",
                  "Envejecimiento y degeneración de células ciliadas y estría vascular",
                  "HSN bilateral y simétrica descendente en frecuencias agudas",
                  "Garantía GES en ≥ 65 años: Implementación de audífonos"
            ],
            [
                  "Neurinoma del Acústico (VIII)",
                  "Schwannoma benigno del nervio vestibular en el CAI",
                  "HSN unilateral progresiva con discriminación muy deteriorada",
                  "RMN con gadolinio · Microcirugía o radiocirugía estereotáxica"
            ]
      ]
},
    "severityTable": {
      "title": "Estratificación de Gravedad y Pronóstico en Hipoacusia Sensorioneural Súbita",
      "headers": [
            "Grado de Pérdida Auditiva",
            "Umbral Promedio Tonal",
            "Tasa de Recuperación con Corticoides",
            "Conducta Terapéutica Inmediata"
      ],
      "rows": [
            [
                  "Leve a Moderada",
                  "26 a 55 dB HL",
                  "Alta (70-80% recuperación funcional)",
                  "Prednisona oral 1 mg/kg/día en monoterapia x 14 días"
            ],
            [
                  "Severa",
                  "56 a 89 dB HL",
                  "Intermedia (40-50% con tratamiento precoz)",
                  "Prednisona oral + Derivación precoz para rescate intratimpánico"
            ],
            [
                  "Profunda / Cofosis",
                  "≥ 90 dB HL (anacusia funcional)",
                  "Baja (< 20-30%) · Alto riesgo de secuela permanente",
                  "Corticoides orales + Inyecciones intratimpánicas urgentes + RMN"
            ]
      ]
},
    "treatmentTable": {
      "title": "Esquema Farmacológico de Rescate en Hipoacusia Sensorioneural Súbita",
      "headers": [
            "Fase del Tratamiento",
            "Fármaco y Vía de Administración",
            "Dosis y Pauta de Administración",
            "Objetivo Clínico"
      ],
      "rows": [
            [
                  "Ataque Sistémico Inmediato",
                  "Prednisona oral",
                  "1 mg/kg/día (máx 60 mg/d) dosis única matinal x 10-14 días",
                  "Inhibición de respuesta inflamatoria e inmunológica coclear"
            ],
            [
                  "Protección Gástrica",
                  "Omeprazol oral",
                  "20 mg al día en ayunas durante la corticoterapia",
                  "Prevención de úlcera péptica inducida por corticoides"
            ],
            [
                  "Descenso Progresivo",
                  "Prednisona oral",
                  "Reducción de 10-20 mg cada 3 a 5 días hasta suspender",
                  "Prevención de insuficiencia suprarrenal aguda"
            ],
            [
                  "Rescate Transtimpánico (ORL)",
                  "Dexametasona / Metilprednisolona",
                  "Inyección intratimpánica semanal (3 a 4 sesiones)",
                  "Altas concentraciones perilinfáticas sin toxicidad sistémica"
            ]
      ]
},
    "vignette": "Un abogado de 48 años, sin antecedentes de trauma acústico ni enfermedades crónicas, consulta en el servicio de urgencia relatando que al despertar hace 36 horas notó que 'no oye nada' por el oído izquierdo y que siente un pito agudo continuo (tinnitus) y sensación de presión en ese oído. Pensó que era un tapón de cera y se aplicó gotas de glicerina sin mejoría. Al examen físico no hay fiebre ni mareos. La otoscopía de ambos oídos es rigurosamente normal, con tímpanos íntegros y nacarados. Al examen con diapasón, el Weber lateraliza hacia el oído derecho (sano) y el Rinne es positivo en ambos oídos (VA > VO).",
    "explicacion": "El cuadro clínico corresponde a una Hipoacusia Sensorioneural Súbita (HSNS) del oído izquierdo. La semiología con diapasón confirma la etiología neurosensorial: Weber al oído sano y Rinne positivo bilateral (sin gap de conducción mecánico). Ante una otoscopía normal y un cuadro de inicio menor a 72 horas, estamos frente a una urgencia otorrinolaringológica mayor. La conducta médica prioritaria es no demorar el tratamiento: se debe iniciar de inmediato Prednisona oral en dosis altas (1 mg/kg/día, típicamente 60 mg/día) con protección gástrica y solicitar de forma prioritaria una audiometría tonal confirmatoria. Además, una vez iniciado el tratamiento, se debe programar una RMN de ángulo pontocerebeloso con gadolinio para descartar neurinoma del acústico.",
    "keyPoints": [
      "La Hipoacusia Sensorioneural Súbita es una URGENCIA MÉDICA definida por una caída ≥ 30 dB en ≥ 3 frecuencias en < 72 horas.",
      "Ante una hipoacusia brusca con otoscopía normal, el error más grave es atribuirla a cerumen o disfunción tubárica y observar.",
      "El único tratamiento con eficacia comprobada son los corticoides sistémicos en altas dosis (Prednisona 1 mg/kg/día por 10-14 días).",
      "La ventana de máxima eficacia para el inicio de corticoides son las primeras 48 a 72 horas del cuadro.",
      "Todo paciente con HSNS debe ser estudiado con RMN de ángulo pontocerebeloso para descartar Schwannoma vestibular.",
      "El trauma acústico crónico ocupacional se manifiesta con una muesca o escotoma clásico en la frecuencia 4000 Hz.",
      "La presbiacusia produce hipoacusia HSN bilateral, simétrica y de tonos agudos en > 65 años, cubierta por el programa GES N° 56."
],
    "questions": [
      {
            "stem": "Un hombre de 52 años consulta por pérdida súbita de la audición del oído derecho que notó al despertar hoy en la mañana, asociada a tinnitus agudo. No refiere dolor, fiebre ni secreción. A la otoscopía, ambos conductos auditivos externos están limpios y las membranas timpánicas son de aspecto normal. La prueba de Weber lateraliza al oído izquierdo y el Rinne es positivo en ambos oídos. ¿Cuál es la conducta inicial de elección que debe instaurarse de forma inmediata?",
            "options": [
                  {
                        "id": "A",
                        "text": "Realizar lavado de oído bilateral con agua tibia para retirar eventual tapón de cera profundo."
                  },
                  {
                        "id": "B",
                        "text": "Indicar descongestionantes orales y citar a control ambulatorio en 3 semanas."
                  },
                  {
                        "id": "C",
                        "text": "Iniciar de inmediato prednisona oral en dosis de 1 mg/kg/día y solicitar audiometría urgente."
                  },
                  {
                        "id": "D",
                        "text": "Prescribir gotas óticas de ciprofloxacino con hidrocortisona cada 8 horas por 7 días."
                  },
                  {
                        "id": "E",
                        "text": "Tranquilizar al paciente indicando que se trata de un cuadro viral autolimitado que no requiere fármacos."
                  }
            ],
            "correcta": "C",
            "explicacion": "La opción correcta es la C. El paciente presenta una Hipoacusia Sensorioneural Súbita (HSNS) derecha, una verdadera emergencia médica en ORL. La otoscopía normal descarta patología de oído externo o perforaciones, y el Weber al oído contralateral (izquierdo) con Rinne positivo confirma daño sensorioneural en el oído derecho. La única terapia con sólida evidencia que previene la sordera permanente es la corticoterapia oral en altas dosis (Prednisona 1 mg/kg/día por 10-14 días) iniciada de manera precoz en las primeras horas, complementada con audiometría urgente. Las opciones A y D son errores graves en oído con tímpano sano, y diferir la conducta (opciones B y E) conlleva secuelas irreversibles.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.4.004"
      },
      {
            "stem": "Un paciente de 72 años consulta porque desde hace 3 años presenta dificultad para entender las conversaciones cuando asiste a reuniones familiares o en lugares con ruido de fondo, refiriendo que 'oye pero no entiende'. No tiene otalgia ni vértigo. La audiometría demuestra una hipoacusia sensorioneural bilateral y simétrica, con mayor caída en los tonos agudos (3000 a 8000 Hz) y caída de la discriminación de la palabra al 60%. ¿Cuál es el diagnóstico más probable y el beneficio en el sistema de salud chileno?",
            "options": [
                  {
                        "id": "A",
                        "text": "Otoesclerosis bilateral; resolución quirúrgica con estapedectomía GES."
                  },
                  {
                        "id": "B",
                        "text": "Presbiacusia; patología con Garantía Explícita en Salud (GES) con indicación de audífonos bilaterales."
                  },
                  {
                        "id": "C",
                        "text": "Enfermedad de Ménière bilateral; tratamiento con restricción de sal y acetazolamida."
                  },
                  {
                        "id": "D",
                        "text": "Trauma acústico crónico; derivación a mutualidad de seguridad laboral para indemnización."
                  },
                  {
                        "id": "E",
                        "text": "Neurinoma del acústico bilateral; estudio genético urgente para Neurofibromatosis tipo 1."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. La presbiacusia es la pérdida auditiva fisiológica relacionada con el envejecimiento, caracterizada por hipoacusia sensorioneural bilateral, simétrica y de predominio en frecuencias agudas, con dificultad desproporcionada para la discriminación fonémica en ambientes ruidosos. En Chile, la hipoacusia en personas de 65 años y más cuenta con Garantía Explícita en Salud (GES N° 56), que asegura el acceso a confirmación diagnóstica, entrega e implementación de audífonos y rehabilitación auditiva integral.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.4.004"
      },
      {
            "stem": "Un calderero industrial de 45 años, con 20 años de labor en maestranza sin uso constante de protectores auditivos, se realiza una audiometría ocupacional periódica. ¿Cuál de los siguientes hallazgos audiométricos es característico y patognomónico del trauma acústico crónico por ruido laboral?",
            "options": [
                  {
                        "id": "A",
                        "text": "Pérdida auditiva de conducción con curva timpanométrica tipo B."
                  },
                  {
                        "id": "B",
                        "text": "Caída del umbral auditivo neurosensorial en las frecuencias graves (250 a 500 Hz)."
                  },
                  {
                        "id": "C",
                        "text": "Muesca o escotoma neurosensorial bilateral selectivo en la frecuencia de 4000 Hz."
                  },
                  {
                        "id": "D",
                        "text": "Brecha óseo-aérea de 30 dB en todas las frecuencias con vía ósea normal."
                  },
                  {
                        "id": "E",
                        "text": "Caída plana sensorioneural de 90 dB en todas las frecuencias del oído derecho únicamente."
                  }
            ],
            "correcta": "C",
            "explicacion": "La opción correcta es la C. El trauma acústico crónico por exposición laboral a ruido de alta intensidad (> 85 dB) produce un daño selectivo irreversible en las células ciliadas externas basales de la cóclea, lo que se traduce típicamente en la audiometría tonal como una caída o muesca ('escotoma acústico') simétrica en la frecuencia de 4000 Hz (y en menor medida 3000 o 6000 Hz), con recuperación relativa en los 8000 Hz.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.4.004"
      },
      {
            "stem": "En un paciente con hipoacusia sensorioneural súbita idiopática de 48 horas de evolución, ¿cuál de los siguientes estudios de neuroimagen es el de elección para descartar de forma definitiva una patología retrococlear como el neurinoma del acústico (schwannoma vestibular)?",
            "options": [
                  {
                        "id": "A",
                        "text": "Radiografía de cráneo en proyección transorbitaria."
                  },
                  {
                        "id": "B",
                        "text": "Tomografía computarizada (TAC) de cerebro sin contraste."
                  },
                  {
                        "id": "C",
                        "text": "Resonancia magnética nuclear (RMN) de cerebro y ángulo pontocerebeloso con gadolinio."
                  },
                  {
                        "id": "D",
                        "text": "Angiografía cerebral por sustracción digital de arteria basilar."
                  },
                  {
                        "id": "E",
                        "text": "Ecografía Doppler de arterias carótidas y vertebrales."
                  }
            ],
            "correcta": "C",
            "explicacion": "La opción correcta es la C. La Resonancia Magnética (RMN) de peñasco, conducto auditivo interno y ángulo pontocerebeloso con medio de contraste (gadolinio) y secuencias finas potenciadas en T1 y T2 (CISS o FIESTA) es el examen de elección para detectar schwannomas vestibulares intracanaliculares incipientes (< 5 mm) que no son visibles en el TAC.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.4.004"
      }
]
  },
  {
    "id": "orl-07",
    "classId": "orl-07",
    "tier": 3,
    "blockNum": 2,
    "blockName": "Audiología & Trastornos del Equilibrio",
    "topicLabel": "14.7",
    "title": "Síndrome Vertiginoso Periférico: VPPB, Neuronitis Vestibular y Enfermedad de Ménière",
    "perfilCode": "4.02.4.009",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Especialista",
    "ges": "Sin garantía GES específica",
    "reconstrucciones": "EUNACOM Diciembre 2018 (Q#22) · EUNACOM Julio 2020 (Q#45) · EUNACOM Diciembre 2022 (Q#33) · EUNACOM Diciembre 2023 (Q#12)",
    "frecuencia": "Altísima rentabilidad · 3 a 4 preguntas por examen: diagnóstico diferencial del vértigo periférico (duración en segundos vs días vs horas), maniobra de Dix-Hallpike/Epley en VPPB y protocolo HINTS para descartar ACV de fosa posterior",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico del Síndrome Vertiginoso Periférico vs Central (Protocolo HINTS)",
    "diagram": flow("Algoritmo Diagnóstico del Síndrome Vertiginoso Periférico vs Central (Protocolo HINTS)", [
      {
            "t": "Paciente con Mareo / Vértigo Ilusorio de Movimiento",
            "s": [
                  "Anamnesis de temporalidad y duración de cada crisis"
            ],
            "type": "acc"
      },
      {
            "al": "Estratificación de la Duración del Episodio",
            "w": 460
      },
      {
            "k": "split",
            "q": "¿Cuál es la duración de las crisis vertiginosas?",
            "s": "Diferenciación temporal de etiologías vestibulares periféricas",
            "ll": "Segundos (< 1 min) gatillado por giros en la cama",
            "rl": "Horas a Días (episodio prolongado o recurrente)",
            "left": {
                  "t": "VPPB (Vértigo Posicional Paroxístico)",
                  "s": "Dix-Hallpike (+) · Tratamiento: Maniobra de Epley",
                  "type": "acc"
            },
            "right": {
                  "t": "Crisis de Horas o Vértigo Continuo",
                  "s": "Analizar síntomas cocleares asociados",
                  "type": "dec"
            }
      },
      {
            "al": "Diferenciación de Vértigo Prolongado",
            "from": "right",
            "w": 460
      },
      {
            "k": "split",
            "q": "¿Existen síntomas auditivos asociados (hipoacusia fluctuante / tinnitus)?",
            "s": "Compromiso de función coclear vs vestibular pura",
            "ll": "Sí: Crisis de 20 min a horas con HSN en graves",
            "rl": "No: Vértigo continuo de varios días tras cuadro viral",
            "left": {
                  "t": "Enfermedad de Ménière",
                  "s": "Hidrops endolinfático · Restricción de sal + Diuréticos",
                  "type": "acc"
            },
            "right": {
                  "t": "Neuronitis Vestibular Aguda",
                  "s": "Protocolo HINTS · Corticoides orales en fase aguda",
                  "type": "warn"
            }
      },
      {
            "al": "Protocolo HINTS para descartar ACV Cerebeloso",
            "from": "right",
            "w": 460
      },
      {
            "t": "Examen HINTS (Head Impulse, Nystagmus, Test of Skew)",
            "s": [
                  "Head Impulse anormal (sacada correctiva) = Periférico (tranquilizador)",
                  "Nistagmo bidireccional que cambia de sentido o vertical = CENTRAL (ACV)",
                  "Skew test con desalineación vertical ocular = CENTRAL (ACV fosa posterior)"
            ],
            "type": "crit"
      }
]),
    "contexto": "El síndrome vertiginoso es un motivo de consulta crítico donde el médico debe cumplir dos objetivos prioritarios: (1) Descartar precozmente un evento cerebrovascular isquémico de fosa posterior mediante el protocolo HINTS al lado de la cama; y (2) Diagnosticar con precisión las tres grandes patologías vestibulares periféricas: VPPB (crisis de segundos con Dix-Hallpike positivo que cura con maniobra de Epley sin fármacos), Neuronitis Vestibular (vértigo continuo de días sin hipoacusia) y Enfermedad de Ménière (crisis de horas con hipoacusia sensorioneural fluctuante y plenitud ótica).",
    "contentSections": [
      {
            "subhead": "1. Vértigo Posicional Paroxístico Benigno (VPPB): Canalitiasis y Maniobras",
            "paragraphs": [
                  "El <strong>VPPB</strong> es la causa más frecuente de vértigo vestibular periférico en el mundo (hasta 50% de los casos). Es causado por <strong>canalitiasis</strong>: desprendimiento de otoconias u otolitos de carbonato de calcio desde la mácula del utrículo hacia los canales semicirculares (en el 85-90% de los casos hacia el <strong>canal semicircular posterior</strong>).",
                  "<strong>Clínica:</strong> Episodios breves de <strong>vértigo ilusorio de giro de objetos que duran típicamente entre 10 y 60 segundos</strong>, desencadenados exclusivamente por cambios posicionales de la cabeza respecto a la gravedad (girar en la cama, acostarse, agacharse a atarse los zapatos o mirar hacia arriba). No hay hipoacusia ni acúfenos.",
                  "<strong>Diagnóstico:</strong> Se confirma mediante la <strong>Maniobra de Dix-Hallpike</strong>: al acostar al paciente con la cabeza rotada 45° y extendida 20°, se desencadena tras una <em>latencia de 2 a 5 segundos</em> un vértigo intenso y un <strong>nistagmo torsional y vertical geotrópico hacia arriba que se fatiga y agota en < 30-45 segundos</strong>.",
                  "<strong>Tratamiento:</strong> El tratamiento de elección <strong>NO son los fármacos sedantes vestibulares ni la cinarizina</strong>, sino las <strong>maniobras de reposición canalicular de Epley o Semont</strong>, las cuales logran la curación completa en más del 90% de los casos en la misma consulta al retornar los otolitos al utrículo."
            ]
      },
      {
            "subhead": "2. Neuronitis Vestibular Aguda: Déficit Unilateral sin Hipoacusia",
            "paragraphs": [
                  "La <strong>Neuronitis Vestibular</strong> (o neuritis vestibular) es un cuadro inflamatorio agudo del nervio vestibular (habitualmente de origen viral por reactivación de HSV-1 o post-infección respiratoria alta).",
                  "Se manifiesta como un <strong>síndrome vestibular agudo: crisis de vértigo rotatorio continuo, intenso e invalidante que dura entre 2 y 5 días</strong>, acompañado de náuseas, vómitos profusos, palidez, sudoración e inestabilidad para la marcha con lateropulsión hacia el lado lesionado. <strong>Ausencia estricta de hipoacusia o acúfenos</strong> (si se acompaña de hipoacusia súbita se denomina <em>laberintitis aguda</em>).",
                  "Al examen destaca un <strong>nistagmo espontáneo unidireccional, horizontal-rotatorio, que bate hacia el oído sano</strong>, cuya intensidad aumenta al mirar hacia el lado de batido (Ley de Alexander) y disminuye con la fijación visual. El tratamiento en las primeras 48 horas incluye <strong>antieméticos y sedantes vestibulares (Dimenhidrinato, Lorazepam) solo por 48 horas</strong> para no frenar la compensación central, junto a <strong>corticoides orales (Metilprednisolona o Prednisona 1 mg/kg/día x 7 días)</strong> para acelerar la recuperación vestibular."
            ]
      },
      {
            "subhead": "3. Enfermedad de Ménière: Hidrops Endolinfático y Tríada Clásica",
            "paragraphs": [
                  "La <strong>Enfermedad de Ménière</strong> se produce por un <strong>hidrops endolinfático</strong> (distensión y aumento excesivo de presión de la endolinfa en el laberinto membranoso cocleovestibular por reabsorción deficiente en el saco endolinfático).",
                  "Se diagnostica por la presencia de una <strong>tríada cardinal recurrente:</strong> (1) <strong>Crisis espontáneas de vértigo rotatorio que duran de 20 minutos a 12 horas</strong> (habitualmente entre 2 y 4 horas); (2) <strong>Hipoacusia sensorioneural fluctuante documentada</strong>, típicamente en frecuencias graves y medias (250-1000 Hz) en etapas iniciales; y (3) <strong>Acúfenos de tono grave y sensación de plenitud ótica o presión</strong> en el oído afectado, que suelen preceder a las crisis como pródromo.",
                  "<strong>Tratamiento:</strong> En la crisis aguda: reposo y sedantes vestibulares. En el manejo intercrítico preventivo: <strong>restricción estricta de sodio en la dieta (< 2 g/día)</strong>, abandono de cafeína y tabaco, y uso de <strong>diuréticos tiazídicos (Hidroclorotiazida 25-50 mg/día) o Betahistina (16-24 mg cada 12 horas)</strong> para reducir el volumen endolinfático. En casos refractarios: inyecciones intratimpánicas de corticoides o gentamicina (laberintectomía química)."
            ]
      },
      {
            "subhead": "4. Protocolo HINTS: Descarte de Infarto Cerebeloso / Tronco Encefálico",
            "paragraphs": [
                  "En un paciente que consulta en urgencia con un síndrome vestibular agudo (vértigo continuo y nistagmo), la prioridad clínica es descartar un <strong>accidente cerebrovascular isquémico de fosa posterior (PICA o AICA)</strong>. En las primeras 24-48 horas, la RMN de encéfalo puede tener hasta un 12-20% de falsos negativos; en cambio, el <strong>protocolo semiológico HINTS tiene una sensibilidad del 100% y especificidad del 96%</strong> (superior a la RM precoz) cuando es realizado por un médico entrenado.",
                  "El protocolo consta de 3 pruebas: (1) <strong>Head Impulse Test (Impulso Cefálico):</strong> Un impulso normal (sin sacada correctiva) en un paciente con vértigo continuo orienta fuertemente a causa <em>CENTRAL</em>; la presencia de sacada correctiva de refijación orienta a periférico; (2) <strong>Nystagmus (Nistagmo):</strong> El nistagmo central es <em>bidireccional</em> (cambia de dirección según hacia dónde mira el paciente) o puramente <em>vertical u oscilatorio</em>. El periférico es unidireccional y horizontal; (3) <strong>Test of Skew (Desalineación vertical ocular):</strong> La presencia de skew deviation (ojo que sube o baja al ocluir y desocluir alternativamente) es un signo inequívoco de patología <em>CENTRAL</em> (troncoencefálica). Ante cualquier signo de alarma HINTS (INFARCT: Impulse normal, Fast-phase alternating, Refixation on Cover Test), se debe hospitalizar de urgencia por ACV."
            ]
      }
],
    "table": {
      "title": "Diagnóstico Diferencial Clínico de los Principales Síndromes Vertiginosos Periféricos",
      "headers": [
            "Criterio Comparativo",
            "VPPB",
            "Neuronitis Vestibular",
            "Enfermedad de Ménière"
      ],
      "rows": [
            [
                  "Duración de la Crisis",
                  "Segundos (10 a 60 segundos por episodio)",
                  "Días (2 a 5 días de vértigo continuo continuo)",
                  "Horas (20 minutos a 12 horas; típica 2-4h)"
            ],
            [
                  "Gatillante Principal",
                  "Cambios posturales cefálicos (giros en la cama)",
                  "Espontáneo tras cuadro viral respiratorio alto",
                  "Espontáneo, precedido de acúfeno y presión ótica"
            ],
            [
                  "Síntomas Auditivos",
                  "Ninguno (audición rigurosamente normal)",
                  "Ninguno (oído medio e interno coclear indemnes)",
                  "Hipoacusia sensorioneural fluctuante en tonos graves + tinnitus"
            ],
            [
                  "Hallazgo al Examen",
                  "Dix-Hallpike (+): nistagmo torsional geotrópico",
                  "Nistagmo horizontal unidireccional a oído sano",
                  "Audiometría con caída en frecuencias graves"
            ],
            [
                  "Tratamiento de Elección",
                  "Maniobra de Epley / Semont (¡sin fármacos!)",
                  "Corticoides orales + reposo (sedantes máx 48h)",
                  "Restricción de sal (< 2 g/d) + Diuréticos / Betahistina"
            ]
      ]
},
    "severityTable": {
      "title": "Protocolo HINTS para Diferenciación de Vértigo Agudo: Periférico vs Central (ACV)",
      "headers": [
            "Componente del Test HINTS",
            "Hallazgo en Vértigo Periférico",
            "Hallazgo en Vértigo Central (ACV)",
            "Interpretación Clínica de Alarma"
      ],
      "rows": [
            [
                  "H: Head Impulse (Impulso Cefálico)",
                  "Anormal: Presencia de sacada correctiva de refijación",
                  "Normal: Ojos se mantienen en el objetivo sin sacada",
                  "Un impulso cefálico NORMAL ante vértigo continuo sugiere ACV central"
            ],
            [
                  "N: Nystagmus (Tipo de Nistagmo)",
                  "Unidireccional horizontal (aumenta al mirar al lado del batido)",
                  "Bidireccional (cambia de sentido al cambiar la mirada) o Vertical",
                  "Nistagmo que cambia de dirección o vertical es estrictamente CENTRAL"
            ],
            [
                  "TS: Test of Skew (Alineación Ocular)",
                  "Normal: Ojos alineados verticalmente sin movimiento de refijación",
                  "Anormal: Desalineación vertical con sacada correctiva vertical",
                  "Skew deviation positiva indica lesión del tronco encefálico (ACV)"
            ]
      ]
},
    "treatmentTable": {
      "title": "Abordaje Farmacológico y Físico del Síndrome Vertiginoso Periférico",
      "headers": [
            "Patología Vestibular",
            "Fase / Objetivo",
            "Fármacos / Maniobras de Elección",
            "Posología y Recomendaciones"
      ],
      "rows": [
            [
                  "VPPB",
                  "Resolución mecánica",
                  "Maniobra de reposición de Epley o Semont",
                  "Realizada en box de atención · No usar cinarizina ni sedantes"
            ],
            [
                  "Neuronitis Vestibular",
                  "Control agudo (primeras 48h)",
                  "Dimenhidrinato 50 mg c/8h o Lorazepam 1 mg SL",
                  "Suspender estrictamente a las 48h para permitir compensación central"
            ],
            [
                  "Neuronitis Vestibular",
                  "Aceleración de recuperación",
                  "Prednisona oral 1 mg/kg/día x 7 días con descenso",
                  "Inicia en las primeras 72 horas del cuadro"
            ],
            [
                  "Enfermedad de Ménière",
                  "Crisis aguda sintomática",
                  "Reposo en cama + Clorpromazina o Lorazepam EV",
                  "Manejo en sala de observación de urgencia"
            ],
            [
                  "Enfermedad de Ménière",
                  "Prevención de recurrencias",
                  "Dieta hiposódica (< 2g/d) + Hidroclorotiazida 25-50 mg/d",
                  "Mantener de por vida; agregar Betahistina 24 mg c/12h"
            ]
      ]
},
    "vignette": "Una mujer de 62 años consulta en el policlínico por episodios reiterados de mareo intenso y sensación de giro de las paredes que se inician bruscamente cada vez que se da vuelta hacia el lado derecho en la cama o al mirar hacia los estantes altos de la cocina. Cada episodio dura alrededor de 30 a 40 segundos y cede completamente si se mantiene inmóvil. No refiere disminución de la audición, zumbidos ni dolor. El examen neurológico básico y la otoscopía son normales. Al realizar la maniobra de Dix-Hallpike hacia la derecha, luego de una latencia de 3 segundos, se desencadena un vértigo rotatorio violento y se observa un nistagmo torsional y vertical hacia arriba que se fatiga y desaparece a los 25 segundos.",
    "explicacion": "La historia clínica de crisis vertiginosas de segundos de duración desencadenadas por cambios posturales de la cabeza, junto a la presencia de un test de Dix-Hallpike positivo con nistagmo torsional geotrópico fatigable y latencia, es diagnóstica y patognomónica de un Vértigo Posicional Paroxístico Benigno (VPPB) del canal semicircular posterior derecho. El mecanismo fisiopatológico es la canalitiasis (otolitos libres en la endolinfa del canal). La conducta médica de elección inmediata es realizar la maniobra de reposición de partículas de Epley en la misma camilla de atención, la cual desplaza las partículas cálcicas de vuelta hacia el utrículo. No está indicado el uso de fármacos sedantes vestibulares ni vasodilatadores como cinarizina o flunarizina, los cuales no resuelven la causa mecánica y causan somnolencia y parkinsonismo en adultos mayores.",
    "keyPoints": [
      "El VPPB es la causa más común de vértigo periférico; se caracteriza por crisis de segundos (< 1 min) desencadenadas por giros de la cabeza.",
      "La maniobra de Dix-Hallpike confirma el VPPB al observar nistagmo torsional geotrópico con latencia y fatigabilidad.",
      "El tratamiento del VPPB es mecánico mediante la maniobra de reposición de Epley; los fármacos están desaconsejados.",
      "La Neuronitis Vestibular produce vértigo continuo de 2 a 5 días con nistagmo horizontal unidireccional y SIN hipoacusia.",
      "Los sedantes vestibulares en la neuronitis solo deben usarse por 48 horas como máximo para no bloquear la compensación central.",
      "La Enfermedad de Ménière se distingue por crisis de 20 minutos a horas con hipoacusia fluctuante sensorioneural en tonos graves y acúfenos.",
      "En el protocolo HINTS, un nistagmo bidireccional, un test de skew positivo o un impulso cefálico normal ante vértigo continuo alertan de un ACV cerebeloso."
],
    "questions": [
      {
            "stem": "Una paciente de 58 años consulta por crisis breves de sensación de giro del entorno de 20 a 30 segundos de duración, que aparecen exclusivamente al acostarse en su cama o al darse vuelta hacia la izquierda. No ha presentado sordera, fiebre ni tinnitus. La maniobra de Dix-Hallpike izquierda provoca vértigo intenso y nistagmo torsional que bate hacia arriba y se agota a los 20 segundos. ¿Cuál es el tratamiento más indicado?",
            "options": [
                  {
                        "id": "A",
                        "text": "Indicar flunarizina 10 mg por la noche por 3 meses."
                  },
                  {
                        "id": "B",
                        "text": "Realizar maniobra de reposición canalicular de Epley en la consulta."
                  },
                  {
                        "id": "C",
                        "text": "Prescribir corticoides orales en dosis descendentes por 14 días."
                  },
                  {
                        "id": "D",
                        "text": "Hospitalizar para tratamiento con betahistina endovenosa continua."
                  },
                  {
                        "id": "E",
                        "text": "Solicitar tomografía computarizada de cerebro de urgencia y reposo absoluto en cama."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. La clínica y la maniobra diagnóstica de Dix-Hallpike positiva con latencia y fatigabilidad son diagnósticas de Vértigo Posicional Paroxístico Benigno (VPPB) del canal posterior izquierdo. El tratamiento curativo de primera línea indiscutido son las maniobras de reposición de partículas (maniobra de Epley o maniobra de Semont), que resuelven mecánicamente la canalitiasis en más del 85-90% de los casos en una sola sesión. El uso de bloqueadores de canales de calcio como flunarizina (opción A) o sedantes vestibulares no corrige la alteración anatómica y está desaconsejado en guías clínicas.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.4.009"
      },
      {
            "stem": "Un hombre de 40 años presenta desde hace 24 horas un cuadro agudo de vértigo rotatorio continuo e invalidante, asociado a náuseas y vómitos reiterados, que le impide ponerse de pie. Tuvo un cuadro respiratorio viral hace una semana. Al examen físico destaca un nistagmo horizontal espontáneo que bate hacia la derecha, el cual aumenta de intensidad al mirar hacia la derecha y disminuye al fijar la vista. La otoscopía es normal y la audición con diapasón no muestra alteraciones. ¿Cuál es el diagnóstico más probable?",
            "options": [
                  {
                        "id": "A",
                        "text": "Enfermedad de Ménière en etapa inicial."
                  },
                  {
                        "id": "B",
                        "text": "Neuronitis vestibular izquierda."
                  },
                  {
                        "id": "C",
                        "text": "Vértigo posicional paroxístico benigno."
                  },
                  {
                        "id": "D",
                        "text": "Accidente cerebrovascular isquémico de arteria basilar."
                  },
                  {
                        "id": "E",
                        "text": "Otoesclerosis laberíntica aguda."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. El cuadro corresponde a una Neuronitis Vestibular (en este caso izquierda). Se caracteriza por un síndrome vestibular agudo con vértigo prolongado continuo de días de evolución tras un pródromo viral, nistagmo periférico unidireccional que bate hacia el lado contralateral sano (bate a la derecha, por hipofunción vestibular izquierda) y rigurosa ausencia de síntomas cocleares (sin hipoacusia ni acúfenos). El VPPB dura segundos, Ménière dura horas con hipoacusia y acúfenos, y los ACV típicamente presentan nistagmo central o déficit neurológico focal.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.4.009"
      },
      {
            "stem": "Un hombre de 50 años refiere episodios recurrentes de vértigo rotatorio que se prolongan por 3 a 4 horas cada vez, asociados a náuseas intensas. En las crisis nota una disminución de la audición del oído derecho y un zumbido grave continuo con sensación de presión ótica. Entre los episodios la audición mejora pero no vuelve completamente a la normalidad. ¿Cuál es el pilar farmacológico y dietético fundamental para la prevención a largo plazo de nuevas crisis en este paciente?",
            "options": [
                  {
                        "id": "A",
                        "text": "Antibioticoterapia profiláctica con azitromicina oral semanal."
                  },
                  {
                        "id": "B",
                        "text": "Restricción de sodio en la dieta asociada a diuréticos como hidroclorotiazida."
                  },
                  {
                        "id": "C",
                        "text": "Maniobras de Epley semanales de forma preventiva."
                  },
                  {
                        "id": "D",
                        "text": "Suplementación con dosis altas de calcio y vitamina D."
                  },
                  {
                        "id": "E",
                        "text": "Tratamiento anticoagulante permanente con acenocumarol."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. El paciente presenta la tríada clásica de la Enfermedad de Ménière: crisis de vértigo de horas de duración + hipoacusia fluctuante sensorioneural en tonos graves + acúfenos y plenitud ótica ipsilateral. La fisiopatología central es el hidrops endolinfático (exceso de líquido en el laberinto membranoso). El tratamiento profiláctico de elección para reducir la frecuencia e intensidad de las crisis a largo plazo consiste en la restricción de sal en la dieta (< 2 g/día) y el uso de diuréticos (hidroclorotiazida o triamtereno) asociados a betahistina.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.4.009"
      },
      {
            "stem": "Al evaluar a un paciente de 67 años con factores de riesgo cardiovascular que consulta en urgencias por vértigo agudo continuo y nistagmo, ¿cuál de los siguientes hallazgos en la exploración física según el protocolo HINTS orienta con mayor fuerza a un origen CENTRAL (accidente cerebrovascular de fosa posterior) por sobre una causa periférica?",
            "options": [
                  {
                        "id": "A",
                        "text": "Prueba de impulso cefálico (Head Impulse Test) francamente anormal con sacada correctiva de refijación."
                  },
                  {
                        "id": "B",
                        "text": "Nistagmo horizontal unidireccional que aumenta al mirar en la dirección del batido."
                  },
                  {
                        "id": "C",
                        "text": "Presencia de nistagmo bidireccional que cambia de dirección según hacia dónde mire el paciente."
                  },
                  {
                        "id": "D",
                        "text": "Ausencia de desviación en la alineación ocular vertical en el test de oclusión alternada (Test of Skew)."
                  },
                  {
                        "id": "E",
                        "text": "Otoscopía normal y audición conservada en ambos oídos."
                  }
            ],
            "correcta": "C",
            "explicacion": "La opción correcta es la C. En el protocolo HINTS para el síndrome vestibular agudo, un nistagmo que cambia de dirección según la dirección de la mirada (bidireccional: bate a la derecha al mirar a la derecha y bate a la izquierda al mirar a la izquierda) o un nistagmo puramente vertical es estrictamente CENTRAL e indica isquemia del tronco encefálico o cerebelo (accidente cerebrovascular de fosa posterior). Por el contrario, un nistagmo unidireccional (opción B) y un impulso cefálico anormal con sacada correctiva (opción A) son signos de disfunción vestibular periférica como la neuronitis.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.4.009"
      }
]
  },
  {
    "id": "orl-08",
    "classId": "orl-08",
    "tier": 2,
    "blockNum": 2,
    "blockName": "Audiología & Trastornos del Equilibrio",
    "topicLabel": "14.8",
    "title": "Parálisis Facial Periférica (Bell) vs Síndrome de Ramsay Hunt",
    "perfilCode": "4.02.5.011",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Completo",
    "ges": "Sin garantía GES específica",
    "reconstrucciones": "EUNACOM Diciembre 2019 (Q#41) · EUNACOM Julio 2021 (Q#63) · EUNACOM Diciembre 2023 (Q#29)",
    "frecuencia": "Altísima rentabilidad · 2 preguntas por examen distinguiendo parálisis facial central (respeta frente) de periférica (compromete frente) y el tratamiento de Bell (prednisona + protección ocular) vs Ramsay Hunt (valaciclovir)",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico de la Parálisis Facial Periférica y Descarte de Causa Central",
    "diagram": flow("Algoritmo Diagnóstico de la Parálisis Facial Periférica y Descarte de Causa Central", [
      {
            "t": "Paciente con Asimetría Facial y Debilidad Motora Aguda",
            "s": [
                  "Inspección dinámica de la musculatura mímica facial"
            ],
            "type": "acc"
      },
      {
            "al": "Prueba de la Frente: Diferenciación Central vs Periférica",
            "w": 460
      },
      {
            "k": "split",
            "q": "¿Puede arrugar la frente y elevar la ceja del lado afectado?",
            "s": "Inervación corticonuclear bilateral de la mitad superior de la cara",
            "ll": "Sí: Frente conservada",
            "rl": "No: Compromiso de frente y ojo (lagoftalmos)",
            "left": {
                  "t": "Parálisis Facial Central (Supranuclear)",
                  "s": "Sospecha de ACV Isquémico / Hemorrágico · Código ACV",
                  "type": "crit"
            },
            "right": {
                  "t": "Parálisis Facial Periférica (Infranuclear)",
                  "s": "Compromiso de todo el hemicara ipsilateral",
                  "type": "acc"
            }
      },
      {
            "al": "Inspección otoscópica y del pabellón auricular",
            "from": "right",
            "w": 460
      },
      {
            "k": "split",
            "q": "¿Presencia de vesículas herpéticas en concha auricular o CAE?",
            "s": "Reactivación de virus varicela-zóster en ganglio geniculado",
            "ll": "Sí: Vesículas + Otalgia + Parálisis",
            "rl": "No: Conducto auditivo y tímpano sanos",
            "left": {
                  "t": "Síndrome de Ramsay Hunt (Zóster Ótico)",
                  "s": "Valaciclovir / Aciclovir + Prednisona en dosis altas",
                  "type": "warn"
            },
            "right": {
                  "t": "Parálisis de Bell (Idiopática)",
                  "s": "Prednisona oral 1 mg/kg/día x 7-10 días + Protección ocular",
                  "type": "acc"
            }
      }
]),
    "contexto": "La parálisis facial es un motivo de consulta que genera gran alarma en el paciente y exige una discriminación semiológica instantánea por parte del médico: la parálisis facial central respeta la musculatura de la frente por tener doble inervación hemisférica y obliga a descartar un ACV encefálico; en cambio, la parálisis periférica afecta tanto la mitad superior como inferior de la cara (imposibilidad de arrugar la frente y lagoftalmos). El tratamiento precoz con corticoides sistémicos y la protección ocular rigurosa son imperativos para evitar secuelas motoras y úlceras corneales.",
    "contentSections": [
      {
            "subhead": "1. Semiología Diferencial: Parálisis Central vs Parálisis Periférica",
            "paragraphs": [
                  "El <strong>nervio facial (VII par craneal)</strong> inerva todos los músculos de la mímica facial. El núcleo motor del facial en la protuberancia se divide en dos porciones: la porción superior (que inerva la frente y el músculo orbicular de los párpados) recibe fibras corticonucleares de <strong>ambos hemisferios cerebrales</strong> (inervación bilateral); mientras que la porción inferior (músculos peribucales y mejilla) solo recibe fibras cruzadas del hemisferio contralateral.",
                  "Por este principio anatómico elemental: (a) En una <strong>Parálisis Facial Central (supranuclear)</strong>, producida por un infarto o hemorragia cerebral, <strong>se preserva la motilidad de la frente</strong> (el paciente puede arrugar la frente y cerrar con fuerza los párpados de ambos lados) y solo existe asimetría en la mitad inferior de la cara (desviación de la comisura bucal); (b) En una <strong>Parálisis Facial Periférica (infranuclear)</strong>, existe una lesión del nervio facial en su trayecto o núcleo, con <strong>compromiso total y homogéneo de todo el hemicara ipsilateral</strong>: borramiento de arrugas frontales, lagoftalmos (imposibilidad de cerrar el ojo), caída de la comisura labial y signo de Bell (desviación del globo ocular hacia arriba y afuera al intentar cerrar el ojo)."
            ]
      },
      {
            "subhead": "2. Parálisis de Bell (Idiopática): Clínica y Tratamiento Precoz",
            "paragraphs": [
                  "La <strong>Parálisis de Bell</strong> es la causa más común de parálisis facial periférica aguda (60-75% de los casos). Se debe a una inflamación y edema del nervio facial en su porción laberíntica intratemporal, atribuida a la reactivación del virus herpes simplex tipo 1 (HSV-1). Se instala típicamente en 24 a 48 horas, a menudo precedida de dolor mastoideo o retroauricular leve y disgeusia (alteración del gusto en los 2/3 anteriores de la lengua por la cuerda del tímpano).",
                  "<strong>Tratamiento:</strong> El pilar terapéutico con mayor evidencia es el <strong>inicio precoz (en las primeras 72 horas) de Corticoides Sistémicos en dosis altas: Prednisona 1 mg/kg/día oral (máximo 60 mg/día) durante 7 a 10 días</strong>, con pauta de descenso posterior en 5 días. Los antivirales en monoterapia carecen de utilidad, y su adición a corticoides solo se reserva para casos severos (House-Brackmann grado IV-VI).",
                  "<strong>Protección Ocular Estricta:</strong> Debido al lagoftalmos y la falta de parpadeo, el riesgo de <em>queratitis por exposición y úlcera corneal grave</em> es muy alto. Es <strong>obligatorio indicar lágrimas artificiales (carboximetilcelulosa o hipromelosa) cada 1-2 horas durante el día, gel lubricante oclusivo en la noche y oclusión del ojo con parche micropore nocturno</strong>."
            ]
      },
      {
            "subhead": "3. Síndrome de Ramsay Hunt (Herpes Zóster Ótico): Pronóstico y Manejo",
            "paragraphs": [
                  "El <strong>Síndrome de Ramsay Hunt</strong> es la segunda causa más frecuente de parálisis periférica y es producido por la <strong>reactivación del virus varicela-zóster (VZV) latente en el ganglio geniculado</strong> del nervio facial.",
                  "Se manifiesta por la tríada clásica de: (1) <strong>Parálisis facial periférica severa</strong>; (2) <strong>Otalgia intensa, quemante e invalidante</strong>; y (3) <strong>Erupción de vesículas herpéticas eritematosas dolorosas en el pabellón auricular, concha, CAE o membrana timpánica (área de Ramsay Hunt)</strong> y en ocasiones en el paladar blando. Frecuentemente compromete al nervio vestibulococlear (VIII par) por contigüidad, asociando hipoacusia sensorioneural y vértigo rotatorio agudo.",
                  "Su pronóstico de recuperación motora es significativamente peor que el de la parálisis de Bell (solo 30-50% de recuperación completa sin terapia precoz). El tratamiento requiere la asociación inmediata de <strong>Valaciclovir oral (1000 mg cada 8 horas por 7 a 10 días)</strong> o Aciclovir (800 mg 5 veces al día) junto a <strong>Prednisona oral a 1 mg/kg/día por 10 a 14 días</strong>, asociado a analgesia potente por riesgo de neuralgia posherpética."
            ]
      }
],
    "table": {
      "title": "Diagnóstico Diferencial: Parálisis de Bell vs Síndrome de Ramsay Hunt vs ACV Central",
      "headers": [
            "Característica",
            "Parálisis de Bell (Idiopática)",
            "Síndrome de Ramsay Hunt",
            "Parálisis Facial Central (ACV)"
      ],
      "rows": [
            [
                  "Afectación de la Frente",
                  "Comprometida (No arruga frente ni eleva ceja)",
                  "Comprometida (No arruga frente ni eleva ceja)",
                  "RESPETADA (Arruga frente y eleva ambas cejas)"
            ],
            [
                  "Cierre Ocular (Lagoftalmos)",
                  "Presente (Signo de Bell positivo)",
                  "Presente (Lagoftalmos severo doloroso)",
                  "Normal (Cierre ocular simétrico y completo)"
            ],
            [
                  "Examen Otológico",
                  "Otoscopía y pabellón rigurosamente normales",
                  "Vesículas herpéticas dolorosas en concha/CAE",
                  "Normal · Puede tener déficit motor de extremidades"
            ],
            [
                  "Etiología Principal",
                  "Reactivación HSV-1 en nervio intratemporal",
                  "Reactivación VZV en ganglio geniculado",
                  "Infarto o hemorragia de arteria cerebral media/cortical"
            ],
            [
                  "Tratamiento de Elección",
                  "Prednisona oral 1 mg/kg/d x 7-10d + Gotas oculares",
                  "Valaciclovir 1g c/8h + Prednisona 1 mg/kg/d x 10d",
                  "Activación Código ACV · Neuroimagen urgente"
            ]
      ]
},
    "severityTable": null,
    "treatmentTable": null,
    "vignette": "Una mujer de 38 años consulta por asimetría facial de instalación rápida en las últimas 24 horas. Al mirarse al espejo esta mañana notó que no puede cerrar el ojo derecho y que al tomar líquidos se le escapan por la comisura derecha de la boca. Al examen neurológico se evidencia borramiento de los pliegues de la frente en el lado derecho con imposibilidad de arrugar la frente o levantar la ceja derecha, lagoftalmos derecho con exposición escleral y desviación de la comisura bucal hacia la izquierda al sonreír. El resto del examen neurológico y de pares craneales es rigurosamente normal. La otoscopía bilateral es normal y no se observan vesículas cutáneas.",
    "explicacion": "La incapacidad para arrugar la frente ipsilateral junto con el lagoftalmos y la desviación de la comisura bucal confirma de manera inequívoca una Parálisis Facial Periférica (infranuclear) derecha. Al no encontrarse vesículas herpéticas en el pabellón o CAE (lo que descarta Ramsay Hunt), no haber antecedente de trauma ni signos de compromiso de otros pares craneanos, el diagnóstico es Parálisis de Bell (idiopática). La conducta terapéutica de elección inmediata, que debe iniciarse dentro de las primeras 72 horas del cuadro, es la administración de Prednisona oral a dosis de 1 mg/kg/día durante 7 a 10 días. Es de vital importancia prescribir medidas de protección corneal obligatorias: lágrimas artificiales frecuentes durante el día, ungüento oftálmico nocturno y oclusión palpebral nocturna con parche para evitar queratitis por exposición.",
    "keyPoints": [
      "La parálisis facial periférica compromete la totalidad del hemicara ipsilateral, incluyendo la frente y el cierre ocular (lagoftalmos).",
      "La parálisis facial central respeta la musculatura de la frente gracias a la doble inervación corticonuclear bilateral.",
      "La Parálisis de Bell se trata con Prednisona oral a 1 mg/kg/día durante 7 a 10 días iniciada en las primeras 72 horas.",
      "La protección de la córnea mediante lágrimas artificiales, ungüento lubricante y parche nocturno es mandataria en toda parálisis periférica.",
      "El Síndrome de Ramsay Hunt asocia parálisis periférica con otalgia severa y vesículas herpéticas en concha auricular y CAE.",
      "El tratamiento de Ramsay Hunt requiere la combinación precoz de Valaciclovir (1000 mg c/8h) o Aciclovir con Prednisona oral.",
      "El signo de Bell consiste en la desviación del globo ocular hacia arriba y afuera al intentar cerrar el ojo parético."
],
    "questions": [
      {
            "stem": "Un paciente de 60 años consulta en urgencia por desviación de la comisura bucal hacia la derecha y dificultad para pronunciar las palabras desde hace 2 horas. Al examen físico se aprecia incapacidad para elevar la comisura labial izquierda; sin embargo, el paciente arruga la frente de forma perfectamente simétrica y ocluye ambos ojos con fuerza normal sin lagoftalmos. ¿Cuál es la localización topográfica más probable de la lesión y la conducta inmediata?",
            "options": [
                  {
                        "id": "A",
                        "text": "Lesión del nervio facial periférico izquierdo en el foramen estilomastoideo; indicar prednisona oral ambulatoria."
                  },
                  {
                        "id": "B",
                        "text": "Lesión corticonuclear o hemisférica cerebral derecha (parálisis facial central); activar código de sospecha de ACV y solicitar TAC de cerebro de urgencia."
                  },
                  {
                        "id": "C",
                        "text": "Síndrome de Ramsay Hunt atípico; iniciar valaciclovir oral en altas dosis."
                  },
                  {
                        "id": "D",
                        "text": "Parálisis de Bell de curso frustro; indicar reposo y control ambulatorio en una semana."
                  },
                  {
                        "id": "E",
                        "text": "Otitis media aguda complicada con compresión del canal de Falopio; solicitar TAC de peñasco."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. El hallazgo clave es la preservación completa de la motilidad de la frente (el paciente arruga la frente simétricamente y no tiene lagoftalmos) con debilidad limitada a la mitad inferior de la cara. Esto define una Parálisis Facial Central (supranuclear). Debido a que las fibras que inervan la musculatura frontal reciben inervación bilateral de la corteza motora, una lesión cerebral unilateral (habitualmente un accidente cerebrovascular isquémico o hemorrágico en el hemisferio contralateral, en este caso derecho) respeta la frente. Requiere activación inmediata del código de sospecha de ACV y realización urgente de neuroimagen (TAC de cerebro). Confundirla con una parálisis de Bell y derivar a domicilio con corticoides (opción A) es un error médico de máxima gravedad.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.5.011"
      },
      {
            "stem": "Un paciente de 68 años consulta por intenso dolor en la oreja derecha de 3 días de evolución, asociándose hoy a parálisis facial derecha completa con imposibilidad para cerrar el ojo y mareo rotatorio. A la inspección del pabellón auricular y del conducto auditivo externo derecho se observan múltiples vesículas eritematosas, algunas de ellas con costras melicéricas, muy sensibles a la palpación. ¿Cuál es el tratamiento de elección?",
            "options": [
                  {
                        "id": "A",
                        "text": "Gotas óticas de ciprofloxacino asociadas a paracetamol oral por 7 días."
                  },
                  {
                        "id": "B",
                        "text": "Valaciclovir oral 1000 mg cada 8 horas asociado a prednisona oral 1 mg/kg/día por 10 días y protección ocular."
                  },
                  {
                        "id": "C",
                        "text": "Cefazolina endovenosa hospitalizada para cobertura de Staphylococcus aureus meticilino-sensible."
                  },
                  {
                        "id": "D",
                        "text": "Carbamazepina oral en dosis crecientes como tratamiento exclusivo de neuralgia del trigémino."
                  },
                  {
                        "id": "E",
                        "text": "Drenaje quirúrgico urgente de las vesículas en sala de procedimientos menores."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. El cuadro clínico corresponde al Síndrome de Ramsay Hunt (herpes zóster ótico), producido por la reactivación del virus varicela-zóster en el ganglio geniculado del nervio facial, con afectación concomitante del nervio vestibulococlear (vértigo). La tríada patognomónica es otalgia severa, parálisis facial periférica y vesículas herpéticas en la concha o conducto auditivo externo. El tratamiento de elección consiste en la combinación precoz de un antiviral sistémico activo contra VZV (Valaciclovir 1 g cada 8 horas o Aciclovir 800 mg 5 veces al día) más Corticoides orales en altas dosis (Prednisona 1 mg/kg/día) por 10 a 14 días, sumado a medidas estrictas de lubricación y protección corneal.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.5.011"
      }
]
  },
  {
    "id": "orl-09",
    "classId": "orl-09",
    "tier": 2,
    "blockNum": 3,
    "blockName": "Rinología & Senos Paranasales",
    "topicLabel": "14.9",
    "title": "Rinitis Alérgica vs No Alérgica: Clasificación ARIA y Corticoides Intranasales",
    "perfilCode": "4.02.4.012",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "Sin garantía GES específica · Cobertura AUGE en asma bronquial asociada",
    "reconstrucciones": "EUNACOM Diciembre 2018 (Q#55) · EUNACOM Julio 2020 (Q#71) · EUNACOM Diciembre 2022 (Q#14)",
    "frecuencia": "Alta rentabilidad · 2 preguntas por examen sobre fármaco de primera línea (corticoides intranasales), criterios ARIA y rinitis medicamentosa por rebote de oximetazolina",
    "svg": null,
    "algoTitle": "Algoritmo Terapéutico Escalonado de la Rinitis Alérgica según Guías ARIA",
    "diagram": flow("Algoritmo Terapéutico Escalonado de la Rinitis Alérgica según Guías ARIA", [
      {
            "t": "Paciente con Rinorrea Acuosa, Prurito Nasal, Estornudos y Congestión",
            "s": [
                  "Rinoscopía anterior: cornetes hipertróficos, pálidos o azulados"
            ],
            "type": "acc"
      },
      {
            "al": "Clasificación ARIA según Temporalidad e Impacto en Calidad de Vida",
            "w": 460
      },
      {
            "k": "split",
            "q": "¿Temporalidad: < 4 días/sem o < 4 semanas consecutivas?",
            "s": "Diferenciación entre Rinitis Intermitente vs Persistente",
            "ll": "Intermitente (< 4d/sem o < 4 sem)",
            "rl": "Persistente (≥ 4d/sem Y ≥ 4 sem consecutivas)",
            "left": {
                  "t": "Rinitis Alérgica Intermitente",
                  "s": "Evaluar severidad (sueño, actividades, trabajo)",
                  "type": "acc"
            },
            "right": {
                  "t": "Rinitis Alérgica Persistente",
                  "s": "Alta probabilidad de inflamación crónica",
                  "type": "warn"
            }
      },
      {
            "al": "Estratificación de Gravedad (Leve vs Moderada-Severa)",
            "from": "right",
            "w": 460
      },
      {
            "k": "split",
            "q": "¿Altera el sueño, interfiere en actividades escolares/laborales o síntomas molestos?",
            "s": "Presencia de al menos uno de estos 4 criterios define Moderada-Severa",
            "ll": "Sí: Moderada a Severa",
            "rl": "No: Leve (ningún criterio alterado)",
            "left": {
                  "t": "Corticoides Intranasales (1ª Línea)",
                  "s": "Fluticasona o Mometasona 1-2 puff c/fosa/día continuo",
                  "type": "crit"
            },
            "right": {
                  "t": "Antihistamínico de 2ª Generación",
                  "s": "Cetirizina, Loratadina o Desloratadina oral",
                  "type": "acc"
            }
      }
]),
    "contexto": "La rinitis alérgica es la enfermedad inmunológica crónica más prevalente en la población general y se asocia estrechamente al asma bronquial ('una sola vía aérea'). El examen EUNACOM evalúa de forma reiterada la prescripción de corticoides intranasales como el tratamiento de primera línea más eficaz para el control de la congestión y la inflamación de la mucosa, así como el descarte de rinitis no alérgica (vasomotora y medicamentosa por abuso de vasoconstrictores tópicos como la oximetazolina).",
    "contentSections": [
      {
            "subhead": "1. Fisiopatología, Hipersensibilidad Tipo I y Clínica Cardinal",
            "paragraphs": [
                  "La <strong>rinitis alérgica</strong> es una inflamación de la mucosa nasal mediada por inmunoglobulina E (IgE) tras la exposición a aeroalérgenos (ácaros del polvo doméstico <em>Dermatophagoides pteronyssinus</em>, pólenes de pastos/árboles, caspa de animales y hongos ambientales). Es una reacción de hipersensibilidad inmediata (tipo I de Gell y Coombs) donde los mastocitos sensibilizados liberan histamina, leucotrienos y prostaglandinas.",
                  "La tétrada clínica cardinal está constituida por: <strong>(1) Rinorrea acuosa anterior y posterior ('goteo claro'); (2) Congestión u obstrucción nasal bilateral; (3) Prurito nasal, ocular y faríngeo ('saludo alérgico'); y (4) Estornudos en salva o paroxísticos</strong>. Al examen físico (rinoscopía anterior) destaca la presencia de <strong>mucosa nasal pálida, edematosa o de aspecto azulado/violáceo</strong>, con hipertrofia de cornetes inferiores y secreción hialina líquida, asociada a ojeras alérgicas (pliegues de Dennie-Morgan)."
            ]
      },
      {
            "subhead": "2. Clasificación de Consenso ARIA (Allergic Rhinitis and its Impact on Asthma)",
            "paragraphs": [
                  "Las guías internacionales ARIA han sustituido la antigua clasificación de 'estacional vs perenne' por un enfoque clínico basado en la frecuencia y la severidad:",
                  "<strong>Frecuencia:</strong> (a) <em>Intermitente:</em> Síntomas presentes menos de 4 días a la semana O durante menos de 4 semanas consecutivas; (b) <em>Persistente:</em> Síntomas presentes 4 o más días a la semana Y durante 4 o más semanas consecutivas.",
                  "<strong>Severidad:</strong> Se clasifica en <em>Leve</em> si no existe ninguna alteración funcional. Se clasifica en <strong>Moderada a Severa</strong> si está presente <strong>al menos uno</strong> de los siguientes criterios: (1) Alteración del patrón del sueño; (2) Interferencia en actividades cotidianas, de ocio o deportivas; (3) Deterioro del rendimiento laboral o escolar; o (4) Síntomas intensamente molestos para el paciente."
            ]
      },
      {
            "subhead": "3. Terapia Farmacológica: Supremacía de los Corticoides Intranasales",
            "paragraphs": [
                  "El <strong>fármaco de primera línea más potente y eficaz para todas las formas moderadas a severas y persistentes son los Corticoides Intranasales (CIN)</strong>: Furoato de fluticasona, Propionato de fluticasona o Furoato de mometasona (1 a 2 pulverizaciones en cada fosa nasal una vez al día). Los CIN son los únicos agentes que controlan eficazmente la <em>obstrucción nasal</em> además del prurito y los estornudos, gracias a su acción genómica antiinflamatoria. Poseen una biodisponibilidad sistémica insignificante (< 1%) y no causan supresión del eje hipotálamo-hipofisario.",
                  "Los <strong>antihistamínicos orales de 2ª generación (H1 no sedantes)</strong>: Cetirizina (10 mg/d), Desloratadina (5 mg/d), Levocetirizina o Loratadina son de elección en formas intermitentes leves o como coadyuvantes en fases de crisis de prurito y rinorrea, careciendo de efecto sedante ni anticolinérgico.",
                  "<strong>Rinitis Medicamentosa (Alerta EUNACOM):</strong> Ocurre por el uso abusivo o prolongado (> 5 a 7 días consecutivos) de descongestionantes nasales tópicos imidazólicos (Oximetazolina, Tramazolina). Genera un efecto rebote por <em>taquifilaxia y downregulation de receptores alfa-1 adrenérgicos</em>, provocando vasodilatación masiva y necrosis mucosa. Su tratamiento consiste en la <strong>suspensión inmediata del vasoconstrictor y el inicio de corticoides intranasales</strong> en dosis altas para desinflamar la mucosa."
            ]
      }
],
    "table": {
      "title": "Diagnóstico Diferencial: Rinitis Alérgica vs Rinitis No Alérgicas",
      "headers": [
            "Entidad Clínica",
            "Fisiopatología / Gatillante",
            "Hallazgo Clínico Clave",
            "Tratamiento de Elección"
      ],
      "rows": [
            [
                  "Rinitis Alérgica",
                  "Mediada por IgE contra aeroalérgenos (pólenes, ácaros)",
                  "Prurito, estornudos en salva, mucosa pálida/edematosa",
                  "Corticoides intranasales (Fluticasona/Mometasona) ± Antihistamínicos H1"
            ],
            [
                  "Rinitis Medicamentosa",
                  "Abuso crónico de oximetazolina tópica (> 5-7 días)",
                  "Congestión nasal severa de rebote, mucosa eritematosa violácea",
                  "Suspensión tajante del descongestionante tópico + Corticoides intranasales"
            ],
            [
                  "Rinitis Vasomotora",
                  "Hiperreactividad parasimpática ante cambios de temperatura/olores",
                  "Rinorrea acuosa profusa al comer (gustatoria) o al frío, sin prurito",
                  "Bromuro de ipratropio intranasal en spray tópico"
            ],
            [
                  "Rinitis Infecciosa Aguda",
                  "Infección viral aguda (Rinovirus, Coronavirus)",
                  "Rinorrea inicialmente mucosa luego mucopurulenta, odinofagia, fiebre",
                  "Lavados nasales con suero fisiológico + Paracetamol · Autolimitada"
            ]
      ]
},
    "severityTable": null,
    "treatmentTable": null,
    "vignette": "Un joven de 19 años consulta por obstrucción nasal bilateral constante, estornudos frecuentes por las mañanas y goteo nasal transparente desde hace 2 meses. Refiere que no logra dormir bien debido a la nariz tapada y que durante las clases universitarias siente sueño y desconcentración. Como antecedente, durante las últimas 3 semanas ha estado aplicándose spray de oximetazolina 4 veces al día, notando que al principio se destapaba la nariz de inmediato, pero ahora apenas le dura una hora el efecto y se le vuelve a tapar peor que antes. A la rinoscopía anterior se aprecian cornetes inferiores sumamente engrosados, hipertróficos y eritematosos que contactan el tabique.",
    "explicacion": "El paciente presenta una Rinitis Alérgica Persistente Moderada-Severa (síntomas > 4 días/semana por > 4 semanas con alteración del sueño y rendimiento diurno) sobre la cual se ha desarrollado una Rinitis Medicamentosa iatrogénica secundaria al uso excesivo de descongestionantes tópicos (oximetazolina > 5 días consecutivos). La pérdida de eficacia y el empeoramiento de la obstrucción responden a la taquifilaxia y vasodilatación de rebote característica. La conducta clínica prioritaria es: (1) Explicar al paciente el mecanismo y suspender de forma tajante e inmediata el uso de oximetazolina; (2) Iniciar tratamiento con Corticoides Intranasales en dosis plenas (Furoato de fluticasona o Mometasona 2 puff en cada fosa nasal al día) durante al menos 1 a 2 meses para desinflamar la mucosa nasal; y (3) Asociar lavados nasales diarios con solución salina hipertónica o fisiológica.",
    "keyPoints": [
      "La clasificación ARIA divide la rinitis alérgica en intermitente (< 4d/sem o < 4 sem) vs persistente (≥ 4d/sem y ≥ 4 sem).",
      "La afectación del sueño, actividades o rendimiento laboral/escolar define a la rinitis como Moderada a Severa.",
      "Los corticoides intranasales (fluticasona, mometasona) son el fármaco de primera línea más eficaz para la rinitis alérgica moderada-severa.",
      "Los antihistamínicos orales de 2ª generación (cetirizina, desloratadina) no son sedantes y controlan prurito y estornudos, pero poco la congestión.",
      "La rinitis medicamentosa es causada por el uso de descongestionantes tópicos (oximetazolina) por más de 5 a 7 días.",
      "El tratamiento de la rinitis medicamentosa es la suspensión inmediata del vasoconstrictor y el inicio de corticoides intranasales.",
      "La rinitis vasomotora cursa con rinorrea acuosa ante cambios de temperatura sin prurito ni estornudos, tratándose con bromuro de ipratropio tópico."
],
    "questions": [
      {
            "stem": "Un estudiante de 24 años consulta por rinorrea acuosa profusa, prurito ocular y nasal intenso y salvas de estornudos que se presentan durante 5 a 6 días a la semana desde hace 2 meses coincidiendo con la primavera. Relata que se despierta en la noche con la nariz totalmente obstruida y que esto afecta su concentración para estudiar. A la rinoscopía anterior se aprecian cornetes inferiores hipertróficos y pálidos. De acuerdo con las guías clínicas internacionales (ARIA), ¿cuál es la clasificación de su enfermedad y el tratamiento de primera línea más adecuado?",
            "options": [
                  {
                        "id": "A",
                        "text": "Rinitis alérgica intermitente leve; clorfenamina oral 4 mg cada 8 horas."
                  },
                  {
                        "id": "B",
                        "text": "Rinitis alérgica persistente moderada-severa; corticoide intranasal en spray diario (ej. fluticasona o mometasona)."
                  },
                  {
                        "id": "C",
                        "text": "Rinitis vasomotora pura; bromuro de ipratropio nasal según necesidad."
                  },
                  {
                        "id": "D",
                        "text": "Rinosinusitis crónica poliposa; amoxicilina oral con ácido clavulánico por 21 días."
                  },
                  {
                        "id": "E",
                        "text": "Rinitis alérgica persistente leve; oximetazolina nasal tópica cada 12 horas por 1 mes."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. De acuerdo con la clasificación de consenso ARIA, el paciente tiene síntomas ≥ 4 días a la semana durante ≥ 4 semanas (lo que define el patrón 'Persistente') y presenta alteración del sueño y deterioro de su rendimiento de estudio (lo que define la categoría 'Moderada a Severa'). Para la rinitis alérgica persistente moderada-severa, la terapia de primera línea más eficaz y recomendada son los Corticoides Intranasales (fluticasona, mometasona o ciclesonida), que actúan sobre todos los mediadores inflamatorios y son superiores a los antihistamínicos orales en el alivio de la obstrucción nasal.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.4.012"
      },
      {
            "stem": "¿Cuál es la causa subyacente y la conducta terapéutica correcta ante un paciente que presenta congestión nasal severa y empeoramiento clínico progresivo tras haber utilizado spray nasal de oximetazolina de venta libre de manera continua durante 4 semanas?",
            "options": [
                  {
                        "id": "A",
                        "text": "Sobreinfección bacteriana por Pseudomonas; indicar ciprofloxacino oral."
                  },
                  {
                        "id": "B",
                        "text": "Rinitis medicamentosa por rebote vasomotor; suspender la oximetazolina e iniciar corticoides intranasales."
                  },
                  {
                        "id": "C",
                        "text": "Poliposis nasal inducida por descongestionantes; derivar a cirugía endoscópica inmediata."
                  },
                  {
                        "id": "D",
                        "text": "Desensibilización alérgica; aumentar la frecuencia de aplicación de oximetazolina a cada 4 horas."
                  },
                  {
                        "id": "E",
                        "text": "Perforación del tabique nasal por toxicidad; realizar cauterización química urgente."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. Los vasoconstrictores tópicos alfa-adrenérgicos (oximetazolina, tramazolina, fenilefrina) producen taquifilaxia y vasodilatación paradójica de rebote ('rinitis medicamentosa') si se utilizan por más de 5 a 7 días consecutivos. La conducta obligatoria consiste en la suspensión inmediata y definitiva del fármaco vasoconstrictor y el inicio de corticoides tópicos intranasales (como fluticasona o mometasona) para reducir la hipertrofia e inflamación endotelial de los cornetes.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.4.012"
      }
]
  },
  {
    "id": "orl-10",
    "classId": "orl-10",
    "tier": 2,
    "blockNum": 3,
    "blockName": "Rinología & Senos Paranasales",
    "topicLabel": "14.10",
    "title": "Rinosinusitis Aguda Viral vs Bacteriana: Criterios y Complicaciones Orbitarias",
    "perfilCode": "4.02.4.012",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "Sin garantía GES específica",
    "reconstrucciones": "EUNACOM Diciembre 2017 (Q#39) · EUNACOM Julio 2021 (Q#42) · EUNACOM Diciembre 2023 (Q#60)",
    "frecuencia": "Alta rentabilidad · 2 preguntas por examen: criterios clínicos para diferenciar rinosinusitis viral de bacteriana (tiempo > 10 días o doble caída) y detección de celulitis orbitaria",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico de Rinosinusitis Aguda y Manejo de Complicaciones",
    "diagram": flow("Algoritmo Diagnóstico de Rinosinusitis Aguda y Manejo de Complicaciones", [
      {
            "t": "Paciente con Rinorrea Purulenta, Obstrucción Nasal y Dolor Facial",
            "s": [
                  "Anamnesis de tiempo de evolución y curva térmica"
            ],
            "type": "acc"
      },
      {
            "al": "Criterios Temporales y Clínicos de Rinosinusitis Bacteriana Aguda (RSBA)",
            "w": 460
      },
      {
            "k": "split",
            "q": "¿Cumple criterios de RSBA?",
            "s": "Duración ≥ 10 días sin mejoría, empeoramiento tras mejoría (doble caída) o fiebre ≥ 39°C con rinorrea purulenta > 3 días",
            "ll": "Sí: Criterios de RSBA cumplidos",
            "rl": "No: < 10 días y en franca mejoría",
            "left": {
                  "t": "Rinosinusitis Bacteriana Aguda",
                  "s": "Tratamiento antibiótico oral: Amoxicilina de 1ª línea",
                  "type": "acc"
            },
            "right": {
                  "t": "Rinosinusitis Viral (Resfriado Común)",
                  "s": "Tratamiento puramente sintomático · No antibióticos",
                  "type": "dec"
            }
      },
      {
            "al": "Banderas Rojas de Complicación Orbitaria / Intracraneal",
            "from": "left",
            "w": 460
      },
      {
            "k": "split",
            "q": "¿Edema palpebral, proptosis, oftalmoplejía o disminución de visión?",
            "s": "Extensión a la órbita por lámina papirácea del etmoides (Chandler)",
            "ll": "Alarma de Celulitis Orbitaria (Chandler II-V)",
            "rl": "Sin signos de compromiso orbitario",
            "left": {
                  "t": "Urgencia Quirúrgica / Hospitalaria",
                  "s": "Hospitalizar + TAC de senos y órbitas con contraste + Ceftriaxona EV",
                  "type": "crit"
            },
            "right": {
                  "t": "Manejo Ambulatorio",
                  "s": "Amoxicilina 80-90 mg/kg/d o 1g c/12h oral x 7-10 días",
                  "type": "acc"
            }
      }
]),
    "contexto": "La inmensa mayoría de las rinosinusitis agudas son de origen viral (> 98%) y autolimitadas. Uno de los mayores desafíos en la práctica clínica ambulatoria es evitar la prescripción innecesaria de antibióticos en resfriados comunes. El EUNACOM exige reconocer con precisión los 3 criterios clínicos de la Sociedad Americana de Enfermedades Infecciosas (IDSA) que confirman una etiología bacteriana (duración ≥ 10 días, doble caída o inicio severo) y diagnosticar de forma inmediata las complicaciones orbitarias (clasificación de Chandler) que amenazan la visión.",
    "contentSections": [
      {
            "subhead": "1. Definición y Fisiopatología de la Rinosinusitis",
            "paragraphs": [
                  "La <strong>Rinosinusitis Aguda (RSA)</strong> se define como la inflamación de la mucosa de la cavidad nasal y de los senos paranasales de menos de 4 semanas de evolución, caracterizada por la presencia de al menos dos de los siguientes síntomas: (1) <strong>Obstrucción/congestión nasal</strong>; (2) <strong>Rinorrea purulenta (anterior o descarga posterior)</strong>; (3) <strong>Dolor o sensación de presión facial</strong> (frontal, maxilar o retroocular); y/o (4) <strong>Hiposmia o anosmia</strong>.",
                  "La causa desencadenante en más del 98% de los episodios es un <strong>resfriado común viral</strong> (rinovirus, influenza, parainfluenza) que inflama la mucosa del complejo ostiomeatal, obstruye los ostium de drenaje de los senos paranasales, paraliza el transporte mucociliar y altera la presión parcial de oxígeno intratélica, favoreciendo la sobreinfección bacteriana secundaria únicamente en el 0.5 a 2% de los casos."
            ]
      },
      {
            "subhead": "2. Criterios Diagnósticos de Rinosinusitis Bacteriana Aguda (RSBA)",
            "paragraphs": [
                  "Para evitar el sobreuso de antimicrobianos, las guías internacionales (IDSA/EPOS) establecen que la <strong>Rinosinusitis Bacteriana Aguda (RSBA)</strong> solo puede diagnosticarse de forma fundada si el paciente cumple <strong>al menos uno de los tres siguientes criterios clínicos</strong>:",
                  "<strong>1. Síntomas persistentes sin mejoría por ≥ 10 días:</strong> Obstrucción nasal, rinorrea purulenta o dolor facial que no muestran ningún signo de resolución tras 10 días de evolución.",
                  "<strong>2. Empeoramiento de síntomas ('Doble caída' o 'Double sickening'):</strong> Paciente que tras un cuadro de resfriado viral típico de 4-5 días comienza a mejorar, pero súbitamente presenta una recaída aguda con fiebre reaparecida, aumento de la cefalea y rinorrea francamente purulenta.",
                  "<strong>3. Inicio severo:</strong> Presencia concomitante de <strong>fiebre alta (≥ 39°C) y rinorrea purulenta o dolor facial intenso durante al menos 3 a 4 días consecutivos</strong> al inicio de la enfermedad.",
                  "<em>El color verde o purulento de la secreción nasal por sí solo NO es diagnóstico de infección bacteriana</em>, ya que la lisis de neutrófilos en cuadros virales genera coloración amarillenta o verdosa. <strong>La radiografía simple de senos paranasales NO está indicada</strong> debido a su baja especificidad y altos falsos positivos."
            ]
      },
      {
            "subhead": "3. Terapia Antimicrobiana Escalonada en RSBA",
            "paragraphs": [
                  "Los microorganismos causales de RSBA son idénticos a los de la OMA: <em>Streptococcus pneumoniae</em> (30-40%), <em>Haemophilus influenzae</em> no tipificable (30%) y <em>Moraxella catarrhalis</em> (10%).",
                  "El antibiótico de <strong>primera línea de elección es la Amoxicilina oral en dosis de 80-90 mg/kg/día en niños y 875/125 mg cada 12 horas o 1 g cada 12 horas en adultos</strong> durante 7 a 10 días (5-7 días en adultos con buena respuesta). Si existe riesgo de cepas productoras de betalactamasas (uso de antibióticos en los últimos 30 días, enfermedad crónica o falla a las 48-72h), se indica <strong>Amoxicilina + Ácido Clavulánico</strong> oral. Como terapia coadyuvante son de gran utilidad los lavados nasales con solución salina fisiológica y los corticoides intranasales."
            ]
      },
      {
            "subhead": "4. Complicaciones Orbitarias: Clasificación de Chandler y Urgencia",
            "paragraphs": [
                  "Debido a la extrema delgadez de la <strong>lámina papirácea del etmoides</strong>, los senos etmoidales son el punto de partida del 80-90% de las complicaciones orbitarias en niños. Se clasifican según Hubert Chandler:",
                  "<strong>Grupo I: Celulitis Preseptal (Periorbitaria):</strong> Edema y eritema palpebral por delante del septum orbitario; la agudeza visual, los movimientos oculares y la pupila son <strong>rigurosamente normales, sin proptosis</strong>. Tratamiento ambulatorio u hospitalario con antibióticos orales o EV.",
                  "<strong>Grupo II: Celulitis Orbitaria (Postseptal):</strong> Infección difusa de la grasa orbitaria. Se caracteriza por <strong>proptosis (exoftalmos), oftalmoplejía dolorosa y quemosis conjuntival</strong>.",
                  "<strong>Grupo III: Absceso Subperióstico:</strong> Colección purulenta entre la lámina papirácea y el periostio orbitario, desplazando el globo ocular hacia abajo y afuera.",
                  "<strong>Grupo IV: Absceso Orbitario:</strong> Colección purulenta intraparenquimatosa orbitaria con grave deterioro de la agudeza visual y defecto pupilar aferente relativo.",
                  "<strong>Grupo V: Trombosis del Seno Cavernoso:</strong> Complicación fatal con afección orbitaria bilateral rápidamente progresiva, parálisis de los pares craneales III, IV, V1, V2 y VI y signos de sepsis.",
                  "Ante cualquier signo de alarma orbitaria (proptosis, limitación de movimientos oculares o caída de la visión), la conducta obligatoria es la <strong>hospitalización inmediata, TAC de senos y órbitas con contraste y Ceftriaxona EV + Vancomicina</strong>, con drenaje quirúrgico urgente por ORL si existe colección."
            ]
      }
],
    "table": {
      "title": "Clasificación de Chandler de Complicaciones Orbitarias de la Rinosinusitis",
      "headers": [
            "Estadio Chandler",
            "Afectación Anatómica",
            "Signos Clínicos Clave",
            "Conducta Médica Inmediata"
      ],
      "rows": [
            [
                  "I: Celulitis Preseptal",
                  "Tejido celular subcutáneo anterior al septum orbitario",
                  "Edema y eritema palpebral · Motilidad y visión normales",
                  "Amoxicilina-Clavulánico oral o Cefazolina EV si lactante"
            ],
            [
                  "II: Celulitis Orbitaria",
                  "Grasa orbitaria profunda (posterior al septum)",
                  "Proptosis, oftalmoplejía dolorosa y quemosis",
                  "Hospitalización urgente + TAC de órbitas + Ceftriaxona EV"
            ],
            [
                  "III: Absceso Subperióstico",
                  "Colección purulenta bajo el periostio orbitario / etmoides",
                  "Globo ocular desplazado hacia abajo y afuera, diplopía",
                  "TAC con contraste + Drenaje quirúrgico urgente por ORL"
            ],
            [
                  "IV: Absceso Orbitario",
                  "Pus en el espacio conal/intraconal de la órbita",
                  "Oftalmoplejía completa, pérdida visual severa, amaurosis",
                  "Drenaje quirúrgico descompresivo de emergencia + Antibióticos EV"
            ],
            [
                  "V: Trombosis Seno Cavernoso",
                  "Extensión retrógrada séptica a través de venas oftálmicas",
                  "Proptosis bilateral, compromiso pares III, IV, V1, VI, estupor",
                  "UCI, Ceftriaxona + Vancomicina + Heparina anticoagulante"
            ]
      ]
},
    "severityTable": null,
    "treatmentTable": null,
    "vignette": "Un niño de 7 años presenta cuadro de 6 días de rinorrea mucopurulenta bilateral y congestión nasal tratado sintomáticamente como resfriado común. En las últimas 24 horas presenta fiebre alta de 39.4°C y su madre nota tumefacción progresiva en el ojo izquierdo. Al examen físico se aprecia edema y eritema palpebral marcado en el ojo izquierdo, junto con proptosis evidente del globo ocular y limitación muy dolorosa a la abducción y elevación de dicho ojo. La agudeza visual se encuentra conservada por el momento.",
    "explicacion": "El paciente presenta una Celulitis Orbitaria (postseptal, Chandler grado II) del ojo izquierdo desarrollada como complicación aguda de una rinosinusitis etmoidal. La presencia de proptosis y oftalmoplejía dolorosa confirma de forma indiscutible que el proceso infeccioso ha franqueado el septum orbitario a través de la lámina papirácea hacia la cavidad orbitaria profunda, diferenciándola de una celulitis preseptal simple. Esta condición es una emergencia otorrinolaringológica y oftalmológica por el alto riesgo de absceso orbitario, amaurosis irreversible por compresión del nervio óptico y trombosis del seno cavernoso. La conducta inmediata mandataria es la hospitalización urgente, toma de hemocultivos, solicitud de Tomografía Computarizada (TAC) de cavidades paranasales y órbitas con contraste endovenoso, e inicio inmediato de antibioticoterapia parenteral de amplio espectro (Ceftriaxona EV asociada a Clindamicina o Vancomicina).",
    "keyPoints": [
      "La rinosinusitis bacteriana se diagnostica con: síntomas ≥ 10 días, o empeoramiento tras mejoría (doble caída), o fiebre ≥ 39°C con secreción purulenta > 3 días.",
      "El color verdoso o purulento de la mucosidad nasal NO indica por sí solo infección bacteriana ni justifica antibióticos.",
      "La radiografía de senos paranasales está en desuso y no se recomienda para el diagnóstico de rinosinusitis aguda no complicada.",
      "El antibiótico oral de primera línea para la RSBA es la Amoxicilina (o Amoxicilina con Ácido Clavulánico) por 7 a 10 días.",
      "La celulitis preseptal presenta párpado inflamado con motilidad ocular y agudeza visual rigurosamente normales.",
      "La celulitis orbitaria se distingue por proptosis (exoftalmos), oftalmoplejía dolorosa y quemosis conjuntival.",
      "Toda sospecha de complicación orbitaria exige hospitalización inmediata, TAC de órbitas y senos con contraste y antibióticos EV."
],
    "questions": [
      {
            "stem": "Un hombre de 32 años consulta por cuadro de congestión nasal, rinorrea amarillenta espesa y cefalea frontal opresiva de 12 días de evolución sin mejoría. Refiere haber utilizado paracetamol e inhalaciones de vapor sin experimentar alivio. No presenta fiebre actual ni alteraciones visuales. Al examen físico se aprecia descarga mucopurulenta en el meato medio a la rinoscopía anterior y sensibilidad a la palpación sobre ambos senos maxilares. ¿Cuál es el diagnóstico y la conducta de elección?",
            "options": [
                  {
                        "id": "A",
                        "text": "Rinitis alérgica estacional; iniciar antihistamínicos orales y derivar a inmunoterapia."
                  },
                  {
                        "id": "B",
                        "text": "Rinosinusitis viral no complicada; mantener analgesia sintomática exclusiva por 10 días más."
                  },
                  {
                        "id": "C",
                        "text": "Rinosinusitis bacteriana aguda; iniciar tratamiento con amoxicilina oral por 7 a 10 días."
                  },
                  {
                        "id": "D",
                        "text": "Sinusitis fúngica invasora; hospitalizar para debridamiento quirúrgico inmediato."
                  },
                  {
                        "id": "E",
                        "text": "Poliposis nasal sobreinfectada; solicitar radiografía simple de cráneo en proyección de Waters."
                  }
            ],
            "correcta": "C",
            "explicacion": "La opción correcta es la C. El paciente cumple el criterio diagnóstico formal de Rinosinusitis Bacteriana Aguda (RSBA) al presentar síntomas cardinales de rinosinusitis (obstrucción, rinorrea purulenta, dolor facial) persistentes por más de 10 días sin ninguna evidencia de mejoría clínica. Este criterio temporal de persistencia es el más sensible para diagnosticar sobreinfección bacteriana secundaria. La conducta de primera línea establecida por las guías clínicas es iniciar tratamiento antibiótico oral con Amoxicilina (o amoxicilina con ácido clavulánico) por 7 a 10 días, asociada a lavados con solución salina. Mantener solo analgésicos a los 12 días (opción B) prolonga el cuadro y expone a complicaciones.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.4.012"
      },
      {
            "stem": "Un escolar de 8 años con rinosinusitis aguda presenta aumento de volumen y eritema palpebral izquierdo. Al examen físico se comprueba limitación en la aducción y abducción del ojo izquierdo, diplopía y proptosis del globo ocular. La agudeza visual se mantiene conservada. ¿A cuál de los siguientes estadios de la clasificación de Chandler corresponde este cuadro clínico?",
            "options": [
                  {
                        "id": "A",
                        "text": "Estadio I: Celulitis preseptal o periorbitaria."
                  },
                  {
                        "id": "B",
                        "text": "Estadio II: Celulitis orbitaria postseptal."
                  },
                  {
                        "id": "C",
                        "text": "Estadio III: Absceso subperióstico."
                  },
                  {
                        "id": "D",
                        "text": "Estadio IV: Absceso orbitario con pérdida visual."
                  },
                  {
                        "id": "E",
                        "text": "Estadio V: Trombosis séptica del seno cavernoso."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. La presencia de signos de afección postseptal como proptosis (exoftalmos) y oftalmoplejía con diplopía dolorosa, en ausencia de una colección delimitada visible o amaurosis, define el Estadio II de Chandler (Celulitis Orbitaria postseptal). En el Estadio I (celulitis preseptal), el edema se confina a la dermis palpebral anterior y los movimientos oculares están rigurosamente conservados sin proptosis. Requiere hospitalización inmediata, TAC con contraste y antibióticos endovenosos de amplio espectro.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.4.012"
      }
]
  },
  {
    "id": "orl-11",
    "classId": "orl-11",
    "tier": 3,
    "blockNum": 3,
    "blockName": "Rinología & Senos Paranasales",
    "topicLabel": "14.11",
    "title": "Epistaxis Anterior vs Posterior: Cauterización y Taponamientos",
    "perfilCode": "4.02.4.014",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Completo",
    "ges": "Sin garantía GES específica · Ley de Urgencias médica si shock hipovolémico",
    "reconstrucciones": "EUNACOM Diciembre 2017 (Q#50) · EUNACOM Julio 2019 (Q#38) · EUNACOM Diciembre 2021 (Q#14) · EUNACOM Diciembre 2023 (Q#82)",
    "frecuencia": "Altísima rentabilidad · 3 a 4 preguntas por examen: manejo escalonado de la epistaxis anterior (compresión digital -> vasoconstrictor -> cauterización con nitrato de plata -> taponamiento anterior) y gravedad de la epistaxis posterior con taponamiento y antibióticos profilácticos",
    "svg": null,
    "algoTitle": "Algoritmo de Manejo Escalonado de Urgencia en Epistaxis Anterior y Posterior",
    "diagram": flow("Algoritmo de Manejo Escalonado de Urgencia en Epistaxis Anterior y Posterior", [
      {
            "t": "Paciente con Hemorragia Nasal Activa (Epistaxis)",
            "s": [
                  "Evaluación del ABC: Vía aérea, signos vitales y estabilidad hemodinámica"
            ],
            "type": "acc"
      },
      {
            "al": "1ª Medida Inmediata Obligatoria",
            "w": 460
      },
      {
            "t": "Compresión Digital Continua y Postura Correcta",
            "s": [
                  "Cabeza inclinada ligeramente hacia adelante (evitar deglutir sangre)",
                  "Presión bimanual sobre las alas nasales continuas por 10 a 15 minutos de reloj"
            ],
            "type": "acc"
      },
      {
            "al": "Evaluación tras 15 minutos de compresión",
            "w": 440
      },
      {
            "k": "split",
            "q": "¿Cede el sangrado con la compresión digital?",
            "s": "Revisión bajo rinoscopía anterior con buena iluminación y aspiración",
            "ll": "Sí: Hemostasia lograda",
            "rl": "No: Sangrado persiste activo",
            "left": {
                  "t": "Epistaxis Anterior Controlada",
                  "s": "Lubricación con vaselina sólida tópica · Evitar hurgado",
                  "type": "acc"
            },
            "right": {
                  "t": "Escarbar Causa y Ubicar Vaso Sangrante",
                  "s": "Algodón con vasoconstrictor tópico (oximetazolina/lidocaína)",
                  "type": "warn"
            }
      },
      {
            "al": "Inspección de Fosa Nasal y Orofaringe",
            "from": "right",
            "w": 460
      },
      {
            "k": "split",
            "q": "¿Vaso visible en Plexo de Kiesselbach vs Sangrado posterior masivo?",
            "s": "Sangrado anterior (área de Little) vs Sangrado posterior por pared posterior de faringe",
            "ll": "Vaso anterior puntual visible",
            "rl": "Sangrado posterior profuso / Fracaso anterior",
            "left": {
                  "t": "Cauterización Química con Nitrato de Plata",
                  "s": "Cauterizar en forma concéntrica · ¡Solo un lado del tabique!",
                  "type": "acc"
            },
            "right": {
                  "t": "Taponamiento Posterior + Hospitalización",
                  "s": "Sonda Foley o balón posterior + Taponamiento anterior + Antibióticos profilácticos",
                  "type": "crit"
            }
      }
]),
    "contexto": "La epistaxis es una de las urgencias otorrinolaringológicas más prevalentes en servicios de urgencia y atención primaria. El examen EUNACOM evalúa rigurosamente el escalonamiento terapéutico estandarizado: compresión digital firme con cabeza hacia adelante -> aplicación de vasoconstrictores tópicos -> cauterización química puntual con nitrato de plata -> taponamiento anterior. Asimismo, se evalúa la identificación de la epistaxis posterior (origen en arteria esfenopalatina en adultos mayores hipertensos), la cual es potencialmente letal y exige taponamiento posterior con sonda Foley, hospitalización obligatoria y cobertura antibiótica profiláctica para evitar el síndrome de shock tóxico.",
    "contentSections": [
      {
            "subhead": "1. Anatomía Vascular Nasal: Plexo de Kiesselbach vs Arteria Esfenopalatina",
            "paragraphs": [
                  "La vascularización nasal proviene de ramas de los sistemas de la arteria carótida externa e interna:",
                  "<strong>Epistaxis Anterior (> 90% de los casos):</strong> Se origina en el <strong>Plexo de Kiesselbach (Área de Little)</strong>, ubicado en la porción anteroinferior del tabique nasal cartilaginoso. Es una anastomosis ricamente vascularizada entre: la arteria labial superior (rama de la facial), la arteria palatina mayor, la arteria esfenopalatina (rama terminal de la maxilar interna) y las arterias etmoidales anteriores. Es la forma clásica en niños, adolescentes y adultos jóvenes, habitualmente benigna, autolimitada y secundaria a microtraumatismos (hurgado nasal digital), resequedad ambiental o rinitis alérgica.",
                  "<strong>Epistaxis Posterior (5-10% de los casos):</strong> Se origina predominantemente en las ramas posteriores de la <strong>Arteria Esfenopalatina</strong> o en el plexo de Woodruff (pared posterolateral de la cavidad nasal). Ocurre típicamente en <strong>adultos mayores con hipertensión arterial crónica, ateroesclerosis o coagulopatías/anticoagulación</strong>. El sangrado es profuso, incoercible, bilateral y fluye de forma constante hacia la orofaringe y vía aérea digestiva, con alto riesgo de shock hipovolémico y aspiración."
            ]
      },
      {
            "subhead": "2. Manejo Escalonado de Urgencia en Epistaxis Anterior",
            "paragraphs": [
                  "El enfrentamiento de la epistaxis anterior sigue una secuencia protocolizada ineludible:",
                  "<strong>Paso 1: Medidas Generales y Compresión Digital:</strong> Paciente sentado con el tronco y la <strong>cabeza inclinados ligeramente hacia adelante</strong> (¡nunca hacia atrás, para evitar la deglución de sangre que induce vómitos y broncoaspiración!). Se indica al paciente sonarse suavemente para expulsar coágulos y se aplica <strong>compresión digital bimanual firme sobre el tercio inferior cartilaginoso de la nariz (alas nasales contra el tabique) durante 10 a 15 minutos continuos de reloj</strong>. Esta medida resuelve el 70-80% de los episodios.",
                  "<strong>Paso 2: Vasoconstrictor Tópico:</strong> Si persiste el sangrado, se coloca un algodón embebido en solución anestésica y vasoconstrictora (Lidocaína al 2% con adrenalina o nafazolina/oximetazolina) a presión moderada en la fosa nasal por 5 a 10 minutos.",
                  "<strong>Paso 3: Cauterización Química o Eléctrica:</strong> Al retirar el algodón, si se visualiza el vaso sangrante en el plexo de Kiesselbach, se procede a la <strong>cauterización química con barra de Nitrato de Plata al 75%</strong>, aplicándola suavemente en forma concéntrica alrededor del vaso sangrante durante unos segundos. <em>Regla de Oro: ¡PROHIBIDO cauterizar ambos lados del tabique nasal simultáneamente!</em> (riesgo inminente de necrosis isquémica del cartílago y perforación septal permanente).",
                  "<strong>Paso 4: Taponamiento Anterior:</strong> Si no se logra ubicar el vaso o la cauterización fracasa, se realiza un <strong>taponamiento nasal anterior</strong> utilizando gasa orillada con vaselina sólida o esponjas hemostáticas expansibles de alcohol polivinílico (Merocel). Debe introducirse en capas de acordeón hacia el piso de la fosa nasal. Se mantiene colocado por <strong>48 horas</strong>, prescribiendo reposo relativo, lubricación tópica y no suspender analgesia."
            ]
      },
      {
            "subhead": "3. Epistaxis Posterior: Sonda Foley, Taponamiento y Hospitalización",
            "paragraphs": [
                  "Se debe sospechar una <strong>epistaxis posterior</strong> cuando el taponamiento anterior bien realizado no detiene el sangrado y se observa un flujo constante de sangre roja fresca cayendo por la pared posterior de la faringe a través de la úvula, o en pacientes mayores con epistaxis masiva que compromete los signos vitales.",
                  "<strong>Taponamiento Posterior con Sonda Foley:</strong> En el box de urgencia, el procedimiento de elección es introducir por la fosa sangrante una <strong>sonda vesical Foley N° 12 o 14 Fr lubricada</strong> hasta que la punta sea visible en la orofaringe; se insufla el balón con <strong>8 a 10 mL de agua destilada o suero</strong> (nunca aire), se tracciona suavemente hacia adelante para impactar el balón en la coana posterior ocluida, y se fija a nivel de la columela con protección de gasa para evitar la necrosis alar.",
                  "Posteriormente, se complementa siempre con un <strong>taponamiento anterior ipsilateral</strong>.",
                  "<strong>Protocolo Hospitalario Mandatorio:</strong> Todo paciente con taponamiento posterior requiere: (1) <strong>Hospitalización obligatoria</strong> con monitorización hemodinámica continua (riesgo de hipoxemia, bradiarritmias por reflejo nasovagal y aspiración); (2) <strong>Profilaxis antibiótica sistémica obligatoria</strong> (Amoxicilina-Clavulánico o Cefazolina) para prevenir el <strong>Síndrome de Shock Tóxico estafilocócico y la rinosinusitis secundaria</strong> por obstrucción de ostium; y (3) Retiro programado del tapón a las 48-72 horas por especialista ORL (o ligadura endoscópica de arteria esfenopalatina en pabellón si hay fracaso)."
            ]
      }
],
    "table": {
      "title": "Diagnóstico Diferencial Clínico y Manejo: Epistaxis Anterior vs Epistaxis Posterior",
      "headers": [
            "Parámetro Clínico",
            "Epistaxis Anterior (Kiesselbach)",
            "Epistaxis Posterior (Esfenopalatina)"
      ],
      "rows": [
            [
                  "Frecuencia Relativa",
                  "90 a 95% de todas las consultas por epistaxis",
                  "5 a 10% de los casos (alta gravedad clínica)"
            ],
            [
                  "Población Típica",
                  "Niños, adolescentes y adultos jóvenes sanos",
                  "Adultos mayores (> 60 años), hipertensos crónicos, aterosclerosis"
            ],
            [
                  "Vaso Sanguíneo Causal",
                  "Plexo de Kiesselbach (Área de Little anteroinferior)",
                  "Arteria Esfenopalatina o ramas de la maxilar interna"
            ],
            [
                  "Inspección Faríngea",
                  "Escasa o nula sangre en pared posterior faríngea",
                  "Flujo continuo y profuso de sangre roja fresca en orofaringe"
            ],
            [
                  "Manejo Inicial de Elección",
                  "Compresión digital x 15 min -> Nitrato de plata -> Taponamiento anterior",
                  "Taponamiento posterior con Sonda Foley insuflada + Taponamiento anterior"
            ],
            [
                  "Destino del Paciente",
                  "Ambulatorio (retiro de Merocel a las 48 horas)",
                  "Hospitalización OBLIGATORIA + Antibióticos EV/orales profilácticos"
            ]
      ]
},
    "severityTable": {
      "title": "Estratificación de Gravedad y Riesgo Hemodinámico en Epistaxis",
      "headers": [
            "Nivel de Severidad",
            "Signos Clínicos / Hemodinámicos",
            "Riesgo Complicaciones",
            "Conducta Médica Inmediata"
      ],
      "rows": [
            [
                  "Epistaxis Leve",
                  "Signos vitales normales, sangrado anterior unilateral autolimitado",
                  "Mínimo · Cese espontáneo",
                  "Compresión digital de alas nasales x 15 minutos en postura anterior"
            ],
            [
                  "Epistaxis Moderada",
                  "Sangrado activo continuo, no cede a compresión digital, signos vitales estables",
                  "Anemización leve, recidiva",
                  "Vasoconstrictor tópico + Cauterización química con nitrato de plata o Merocel"
            ],
            [
                  "Epistaxis Severa / Posterior",
                  "Sangrado profuso posterior, taquicardia, hipotensión, shock hipovolémico",
                  "Alto: Shock, paro hipóxico, broncoaspiración",
                  "ABC de reanimación, dos vías venosas, Sonda Foley posterior + Hospitalización urgente"
            ]
      ]
},
    "treatmentTable": {
      "title": "Protocolo Terapéutico Escalonado en Epistaxis de Urgencia",
      "headers": [
            "Escalón Terapéutico",
            "Intervención Clínica",
            "Detalles Técnicos y Fármacos",
            "Precauciones de Seguridad"
      ],
      "rows": [
            [
                  "Escalón 1",
                  "Compresión digital directa",
                  "Pinzar alas nasales contra tabique x 15 min continuos",
                  "Cabeza hacia adelante · Respirar por la boca"
            ],
            [
                  "Escalón 2",
                  "Vasoconstricción tópica",
                  "Cotón con Lidocaína al 2% + Adrenalina u Oximetazolina",
                  "Dejar colocado 5-10 minutos en la fosa nasal"
            ],
            [
                  "Escalón 3",
                  "Cauterización química puntual",
                  "Nitrato de Plata al 75% en bastón concéntrico",
                  "PROHIBIDO cauterizar ambos lados del tabique (perforación)"
            ],
            [
                  "Escalón 4",
                  "Taponamiento anterior",
                  "Gasa vaselinada o esponja de Merocel x 48 horas",
                  "Colocar en plano horizontal hacia el piso nasal"
            ],
            [
                  "Escalón 5",
                  "Taponamiento posterior",
                  "Sonda Foley N° 12-14 insuflada con 8-10 mL de agua",
                  "Hospitalizar + Amoxicilina-Clavulánico profiláctico obligatorio"
            ]
      ]
},
    "vignette": "Un hombre de 71 años, hipertenso crónico en tratamiento irregular con enalapril, es traído al servicio de urgencia con sangrado nasal bilateral abundante de 1 hora de evolución. Al ingreso se encuentra pálido, sudoroso, con presión arterial de 190/105 mmHg y frecuencia cardíaca de 105 lpm. Se le realiza compresión digital de las alas nasales durante 15 minutos y se coloca taponamiento nasal anterior con Merocel bilateral sin éxito, observándose abundante sangre roja rutilante cayendo de manera continua por la pared posterior de la orofaringe que le provoca accesos de tos y arcadas.",
    "explicacion": "El cuadro clínico corresponde a una Epistaxis Posterior masiva, originada con altísima probabilidad en ramas de la arteria esfenopalatina en un paciente adulto mayor hipertenso con crisis hipertensiva reactiva. La falla del taponamiento anterior y la persistencia de sangrado profuso hacia la orofaringe confirman el origen posterior. La conducta inmediata de elección para el control de la hemorragia es la realización de un Taponamiento Posterior mediante la colocación de una sonda vesical Foley insuflada con 8 a 10 mL de solución salina en la nasofaringe, traccionada y anclada en la coana, asociada a nuevo taponamiento anterior ipsilateral. El paciente debe ser obligatoriamente hospitalizado en cama monitorizada, iniciar control paulatino de la presión arterial, solicitar pruebas de coagulación y hemograma, e instaurar antibioticoterapia profiláctica oral o EV con Amoxicilina-Clavulánico para prevenir el síndrome de shock tóxico y rinosinusitis aguda mientras permanezca el tapón (48-72 horas).",
    "keyPoints": [
      "El 90% de las epistaxis son anteriores y se originan en el Plexo de Kiesselbach (Área de Little) en el tabique anteroinferior.",
      "La primera medida obligatoria en epistaxis anterior es la compresión digital de las alas nasales con cabeza inclinada hacia adelante por 15 minutos.",
      "Está terminantemente prohibido cauterizar ambos lados del tabique nasal simultáneamente por riesgo de perforación septal.",
      "El taponamiento anterior (Merocel o gasa) se retira habitualmente a las 48 horas.",
      "La epistaxis posterior proviene habitualmente de la arteria esfenopalatina en adultos mayores hipertensos y fluye hacia la orofaringe.",
      "El taponamiento posterior se realiza con sonda Foley insuflada con agua en la nasofaringe y exige HOSPITALIZACIÓN obligatoria.",
      "Todo taponamiento posterior requiere profilaxis antibiótica (amoxicilina-clavulánico) para prevenir el Síndrome de Shock Tóxico estafilocócico."
],
    "questions": [
      {
            "stem": "Un niño de 9 años consulta en el servicio de urgencia por sangrado nasal derecho activo tras hurgarse la nariz. Al examen físico se encuentra hemodinámicamente estable. Se realiza compresión bimanual de las alas nasales durante 15 minutos continuos con cabeza hacia adelante, pero al soltar persiste sangrado leve. Al colocar un algodón con vasoconstrictor y retirar bajo buena luz con espéculo nasal, se visualiza claramente un vaso sangrante superficial en la porción anteroinferior del tabique nasal derecho. ¿Cuál es la conducta terapéutica de elección a continuación?",
            "options": [
                  {
                        "id": "A",
                        "text": "Realizar taponamiento nasal posterior con sonda Foley de urgencia."
                  },
                  {
                        "id": "B",
                        "text": "Cauterización química del vaso sangrante con bastón de nitrato de plata."
                  },
                  {
                        "id": "C",
                        "text": "Indicar ácido tranexámico endovenoso y hospitalizar para observación."
                  },
                  {
                        "id": "D",
                        "text": "Cauterización bilateral simultánea de ambas caras del tabique nasal."
                  },
                  {
                        "id": "E",
                        "text": "Indicar al paciente mantener la cabeza inclinada hacia atrás durante las próximas 4 horas."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. Una vez identificado el punto sangrante específico en el plexo de Kiesselbach (porción anteroinferior del tabique nasal) tras una compresión digital no resolutiva y preparación con vasoconstrictor tópico, el tratamiento estándar de elección es la cauterización química puntual del vaso con un bastón de nitrato de plata al 75%. La cauterización debe aplicarse de forma suave y concéntrica alrededor del vaso sangrante. La opción D es un grave error médico que causa necrosis y perforación del cartílago septal; la opción E induce deglución de sangre y vómitos; y las opciones A y C son medidas desproporcionadas para una epistaxis anterior puntual.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.4.014"
      },
      {
            "stem": "Una paciente de 75 años con antecedentes de hipertensión arterial presenta epistaxis masiva que no ha cedido tras taponamiento anterior bilateral con Merocel, evidenciándose sangrado activo continuo y abundante por la faringe posterior. Se decide realizar taponamiento nasal posterior con sonda Foley. Respecto al manejo integral de esta paciente, ¿cuál de las siguientes medidas es una indicación OBLIGATORIA?",
            "options": [
                  {
                        "id": "A",
                        "text": "Alta inmediata a domicilio con indicación de retirar la sonda Foley a las 12 horas."
                  },
                  {
                        "id": "B",
                        "text": "Hospitalización con monitorización de signos vitales e inicio de antibióticos profilácticos sistémicos."
                  },
                  {
                        "id": "C",
                        "text": "Insuflar el balón de la sonda Foley con 25 mL de aire para asegurar hemostasia máxima."
                  },
                  {
                        "id": "D",
                        "text": "Suspensión absoluta de toda hidratación parenteral y mantener presión arterial sistólica sobre 180 mmHg."
                  },
                  {
                        "id": "E",
                        "text": "Realizar cauterización a ciegas con nitrato de plata de la pared posterior de la orofaringe."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. La epistaxis posterior que requiere taponamiento con balón o sonda Foley es una situación clínica grave que exige HOSPITALIZACIÓN OBLIGATORIA del paciente por riesgo de hipoxia, bradiarritmias por reflejo nasovagal y aspiración. Además, la presencia de taponamiento posterior ocluye el ostium de drenaje de los senos paranasales y favorece la proliferación bacteriana en tejidos retenidos, lo que hace mandatorio el inicio de profilaxis antibiótica sistémica (habitualmente amoxicilina con ácido clavulánico o cefazolina) para prevenir el temible Síndrome de Shock Tóxico estafilocócico y la rinosinusitis aguda supurada. El balón se insufla con agua (nunca aire, que se desinfla por difusión) y solo con 8-10 mL para evitar necrosis tisular.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.4.014"
      },
      {
            "stem": "¿Cuál es la anastomosis arterial responsable de la gran mayoría de las epistaxis anteriores en niños y adultos jóvenes, localizada en la región anteroinferior del tabique nasal?",
            "options": [
                  {
                        "id": "A",
                        "text": "Plexo venoso pampiniforme."
                  },
                  {
                        "id": "B",
                        "text": "Plexo de Kiesselbach (Área de Little)."
                  },
                  {
                        "id": "C",
                        "text": "Plexo venoso de Woodruff."
                  },
                  {
                        "id": "D",
                        "text": "Arteria carótida interna terminal."
                  },
                  {
                        "id": "E",
                        "text": "Arteria meníngea media."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. El Plexo de Kiesselbach (o Área de Little) es una red vascular ricamente anastomosada en la submucosa de la porción anteroinferior del tabique nasal, donde confluyen ramas de la arteria esfenopalatina, palatina mayor, labial superior y etmoidal anterior. Es el sitio anatómico de origen de más del 90% de las epistaxis anteriores.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.4.014"
      },
      {
            "stem": "¿Por qué motivo está formalmente contraindicado realizar cauterización con nitrato de plata en ambas caras del tabique nasal de forma simultánea en una misma sesión?",
            "options": [
                  {
                        "id": "A",
                        "text": "Porque induce una crisis hipertensiva severa mediada por barorreceptores."
                  },
                  {
                        "id": "B",
                        "text": "Por el riesgo de provocar isquemia, necrosis avascular y perforación septal permanente."
                  },
                  {
                        "id": "C",
                        "text": "Porque aumenta el riesgo de desarrollar poliposis nasal alérgica difusa."
                  },
                  {
                        "id": "D",
                        "text": "Porque desencadena parálisis del nervio olfatorio con anosmia irreversible."
                  },
                  {
                        "id": "E",
                        "text": "Porque genera una sobreinfección inmediata por Pseudomonas aeruginosa."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. El cartílago del tabique nasal (cartílago cuadrangular) es avascular y se nutre exclusivamente por difusión a partir del pericondrio que lo recubre bilateralmente. Si se cauteriza de forma química o eléctrica ambas caras del tabique al mismo nivel simultáneamente, se destruye el aporte sanguíneo de ambos lados, provocando necrosis isquémica del cartílago subyacente y una perforación septal permanente, complicación grave y de difícil reparación quirúrgica.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.4.014"
      }
]
  },
  {
    "id": "orl-12",
    "classId": "orl-12",
    "tier": 2,
    "blockNum": 3,
    "blockName": "Rinología & Senos Paranasales",
    "topicLabel": "14.12",
    "title": "Poliposis Nasal, Desviación Septal y Fractura Nasal",
    "perfilCode": "4.02.4.018",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Especialista",
    "ges": "Sin garantía GES específica",
    "reconstrucciones": "EUNACOM Diciembre 2018 (Q#66) · EUNACOM Julio 2021 (Q#54) · EUNACOM Diciembre 2022 (Q#77)",
    "frecuencia": "Alta rentabilidad · 2 preguntas por examen: tríada de Samter/Widal (poliposis + asma + AINEs) y descarte obligatorio de hematoma septal en trauma nasal",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico en Patología Estructural y Obstructiva Nasal",
    "diagram": flow("Algoritmo Diagnóstico en Patología Estructural y Obstructiva Nasal", [
      {
            "t": "Paciente con Obstrucción Nasal Crónica o Antecedente de Trauma Facial",
            "s": [
                  "Inspección externa del dorso y rinoscopía anterior minuciosa"
            ],
            "type": "acc"
      },
      {
            "al": "Estratificación de Etiología: Neoplásica / Inflamatoria vs Traumática",
            "w": 460
      },
      {
            "k": "split",
            "q": "¿Antecedente de traumatismo nasal agudo reciente?",
            "s": "Diferenciación entre fractura traumática vs patología endonasal crónica",
            "ll": "Sí: Traumatismo nasal agudo",
            "rl": "No: Obstrucción crónica progresiva",
            "left": {
                  "t": "Evaluación de Fractura Nasal",
                  "s": "Inspección de dorso + Rinoscopía para descartar hematoma septal",
                  "type": "warn"
            },
            "right": {
                  "t": "Inspección de Fosas Nasales",
                  "s": "Evaluar mucosa, cornetes y presencia de masas endonasales",
                  "type": "acc"
            }
      },
      {
            "al": "Regla de Oro en Traumatismo Nasal",
            "from": "left",
            "w": 460
      },
      {
            "k": "split",
            "q": "¿Presencia de abombamiento violáceo bilateral y blando del tabique?",
            "s": "Signo patognomónico de Hematoma Septal (Alarma Isquémica)",
            "ll": "Sí: Hematoma Septal Confirmado",
            "rl": "No: Fractura nasal simple",
            "left": {
                  "t": "Drenaje Quirúrgico Inmediato",
                  "s": "Incisión + Drenaje de coágulos + Taponamiento compresión bilateral",
                  "type": "crit"
            },
            "right": {
                  "t": "Manejo Traumatológico",
                  "s": "Hielo local, analgesia; reducción cerrada antes del día 7-10",
                  "type": "acc"
            }
      },
      {
            "al": "Hallazgos en Obstrucción Crónica",
            "from": "right",
            "w": 460
      },
      {
            "k": "split",
            "q": "¿Masas translúcidas bilaterales ('granos de uva pelada') insensibles?",
            "s": "Diferenciación entre Poliposis Nasal vs Desviación Septal pura",
            "ll": "Sí: Poliposis Nasal Bilateral",
            "rl": "No: Desviación óseo-cartilaginosa fija",
            "left": {
                  "t": "Poliposis Nasal (Tríada de Samter)",
                  "s": "Corticoides intranasales en dosis altas ± Corticoides orales",
                  "type": "acc"
            },
            "right": {
                  "t": "Desviación Septal",
                  "s": "Septoplastia quirúrgica electiva si obstrucción invalidante",
                  "type": "dec"
            }
      }
]),
    "contexto": "Las alteraciones estructurales e inflamatorias crónicas de la cavidad nasal comparten el síntoma cardinal de insuficiencia ventilatoria nasal. En el traumatismo nasal agudo, la máxima prioridad que evalúa el EUNACOM es el descarte obligatorio del hematoma septal mediante rinoscopía, el cual constituye una urgencia quirúrgica inmediata para evitar la necrosis del cartílago y la 'nariz en silla de montar'. Por otra parte, la poliposis nasal bilateral exige investigar la tríada de Samter (poliposis, asma bronquial y broncoespasmo grave por AINEs), mientras que un pólipo unilateral siempre obliga a descartar papiloma invertido o neoplasia maligna.",
    "contentSections": [
      {
            "subhead": "1. Fractura Nasal y la Urgencia del Hematoma Septal",
            "paragraphs": [
                  "La <strong>fractura nasal</strong> es la fractura facial más frecuente. Se manifiesta clínicamente por epistaxis inicial, dolor local, edema de partes blandas, deformidad o laterorrinia evidente y crepitación ósea a la palpación cuidadosa del dorso nasal. La radiografía simple de huesos propios de la nariz tiene valor médico-legal pero el diagnóstico y la indicación quirúrgica son <strong>estrictamente clínicos</strong>.",
                  "<strong>Hematoma Septal (Urgencia Máxima):</strong> En todo paciente con trauma nasal es <strong>obligatorio realizar una rinoscopía anterior para descartar un hematoma del tabique</strong>. Se produce por la rotura de vasos submucosos con acumulación de sangre entre el cartílago cuadrangular y el pericondrio, observándose como un <strong>abombamiento fluctuante, rojo-violáceo o azulado, blando al tacto, habitualmente bilateral en el tabique que ocluye las fosas nasales</strong>.",
                  "<em>Conducta Inmediata:</em> Dado que el cartílago septal carece de irrigación propia y se nutre por difusión desde el pericondrio, el hematoma provoca <strong>isquemia y necrosis avascular del cartílago en 24 a 48 horas</strong>, con riesgo de sobreinfección (absceso septal) y pérdida definitiva del soporte nasal dorsal (<strong>deformidad en silla de montar</strong>). Su tratamiento es el <strong>drenaje quirúrgico urgente por incisión y aspiración de los coágulos, seguido de taponamiento nasal bilateral compresivo y cobertura antibiótica</strong>."
            ]
      },
      {
            "subhead": "2. Poliposis Nasal y Tríada de Widal / Samter (Enfermedad Respiratoria Exacerbada por Aspirina)",
            "paragraphs": [
                  "Los <strong>pólipos nasales</strong> son formaciones tumorales benignas y edematosas de la mucosa de los senos paranasales (principalmente etmoidales) que prolapsan hacia la cavidad nasal. A la rinoscopía anterior o nasofibroscopía se aprecian como <strong>masas lisas, brillantes, translúcidas de color blanco-grisáceo o perlado ('aspecto de uva pelada'), indoloras a la palpación e insensibles al tacto</strong>, a diferencia de los cornetes que son rojizos y muy sensibles.",
                  "La <strong>Tríada de Samter (o de Widal / EREA: Enfermedad Respiratoria Exacerbada por Aspirina)</strong> es una entidad clínica de altísima relevancia para el EUNACOM caracterizada por la asociación de: <strong>(1) Poliposis nasal bilateral extensa; (2) Asma bronquial de difícil control; y (3) Intolerancia o broncoespasmo grave inducido por Aspirina (AAS) y antiinflamatorios no esteroidales (AINEs)</strong>.",
                  "<em>Tratamiento de la Poliposis:</em> Primera línea: <strong>Corticoides intranasales en dosis altas continuos</strong> (mometasona o fluticasona) asociados a ciclos breves de corticoides orales (prednisona). En casos refractarios o con obstrucción total: <strong>Cirugía Endoscópica Funcional de Senos Paranasales (FESS)</strong> o terapias biológicas anti-IL-4/IL-13 (Dupilumab).",
                  "<em>Alerta EUNACOM:</em> Todo <strong>pólipo nasal unilateral en un adulto</strong> debe considerarse sospechoso de <strong>Papiloma Invertido</strong> (tumor epitelial benigno pero localmente invasivo con 10% de degeneración maligna a carcinoma espinocelular) o adenocarcinoma, exigiendo biopsia y TAC."
            ]
      },
      {
            "subhead": "3. Desviación del Tabique Nasal e Hipertrofia Compensatoria",
            "paragraphs": [
                  "La <strong>desviación septal</strong> es una deformidad congénita o postraumática del tabique nasal óseo o cartilaginoso. Produce una obstrucción ventilatoria nasal mecánica fija y constante, predominantemente unilateral.",
                  "De forma fisiopatológica clásica, la fosa nasal contralateral (más ancha) desarrolla una <strong>hipertrofia compensatoria del cornete inferior</strong> para regular la resistencia nasal y acondicionar el aire inspirado. El tratamiento sintomático inicial incluye corticoides intranasales; la corrección definitiva es quirúrgica mediante <strong>septoplastia electiva</strong> (asociada habitualmente a turbinoplastia del cornete hipertrófico) cuando la obstrucción genera síntomas invalidantes o se asocia a rinosinusitis recurrente o SAHOS."
            ]
      }
],
    "table": {
      "title": "Diagnóstico Diferencial: Poliposis Nasal vs Cornete Hipertrófico vs Hematoma Septal",
      "headers": [
            "Lesión Endonasal",
            "Aspecto a la Rinoscopía",
            "Sensibilidad al Tacto",
            "Conducta Terapéutica Inmediata"
      ],
      "rows": [
            [
                  "Pólipo Nasal Benigno",
                  "Masa translúcida brillante, blanco-grisácea ('uva pelada')",
                  "COMPLETAMENTE INDOLORO y no sangra al tacto suave",
                  "Corticoides intranasales en altas dosis · Cirugía FESS si refractario"
            ],
            [
                  "Cornete Inferior Hipertrófico",
                  "Mucosa eritematosa o rosada, consistencia firme elástica",
                  "MUY DOLOROSO y sensible al contacto con el estilete",
                  "Corticoides intranasales / Descongestionantes / Turbinoplastia"
            ],
            [
                  "Hematoma Septal Agudo",
                  "Tumefacción abombada violácea, fluctuante y blanda en tabique",
                  "Doloroso a la palpación local tras antecedente traumático",
                  "URGENCIA: Drenaje quirúrgico inmediato + Taponamiento compresivo bilateral"
            ],
            [
                  "Papiloma Invertido",
                  "Masa unilateral de aspecto cerebiforme o vegetante carnosa",
                  "Sangra con facilidad · Destrucción ósea local",
                  "Biopsia + Resección quirúrgica amplia por riesgo de carcinoma (10%)"
            ]
      ]
},
    "severityTable": null,
    "treatmentTable": null,
    "vignette": "Un joven de 17 años acude al servicio de urgencia 3 horas después de haber recibido un golpe de puño en la nariz durante un partido de fútbol. Refiere dolor nasal intenso y epistaxis que ya cesó. Al examen físico se evidencia marcado edema del dorso nasal con discreta laterorrinia hacia la derecha y equimosis periorbitaria. A la rinoscopía anterior con buena iluminación, se observa en ambas fosas nasales un abombamiento rojo-violáceo, liso y fluctuante que se origina desde el tabique nasal y que ocluye casi por completo el paso de aire.",
    "explicacion": "El hallazgo de una masa violácea fluctuante bilateral que compromete el tabique nasal tras un traumatismo facial agudo es patognomónico de un Hematoma Septal (del tabique nasal). La presencia de un hematoma septal constituye una verdadera urgencia médica y quirúrgica. Debido a que el cartílago cuadrangular se nutre exclusivamente por difusión desde el pericondrio, el hematoma diseca el pericondrio privando al cartílago de su irrigación, lo que desencadena necrosis avascular y reabsorción del cartílago septal en 24 a 48 horas, con secuela permanente de deformidad nasal en 'silla de montar' o formación de un absceso septal. La conducta de elección que no admite demora es el drenaje quirúrgico inmediato mediante incisión del mucopericondrio y aspiración de los coágulos, seguido de taponamiento nasal anterior compresivo bilateral y cobertura antibiótica oral.",
    "keyPoints": [
      "En todo traumatismo nasal es obligatorio descartar hematoma septal mediante rinoscopía anterior.",
      "El hematoma septal se visualiza como un abombamiento fluctuante violáceo en el tabique y exige DRENAJE QUIRÚRGICO INMEDIATO.",
      "La falta de drenaje de un hematoma septal conduce a necrosis isquémica del cartílago y deformidad en 'silla de montar'.",
      "Los pólipos nasales son masas bilaterales translúcidas, indoloras e insensibles al tacto ('aspecto de uva pelada').",
      "La Tríada de Samter (o Widal) consiste en: poliposis nasal bilateral + asma bronquial + intolerancia severa a la Aspirina y AINEs.",
      "En la tríada de Samter están estrictamente prohibidos la aspirina y los AINEs por riesgo de broncoespasmo fatal.",
      "Todo pólipo nasal UNILATERAL en un adulto debe ser biopsiado para descartar Papiloma Invertido o neoplasia maligna."
],
    "questions": [
      {
            "stem": "Un adolescente de 15 años sufre un pelotazo en la cara durante un partido de básquetbol, presentando deformidad nasal y epistaxis que cede espontáneamente. Al ser examinado en el policlínico de choque 6 horas más tarde, el médico realiza una rinoscopía anterior y constata un abombamiento violáceo, blando y bilateral en el tabique nasal que obstruye ambas fosas nasales. ¿Cuál es el diagnóstico más probable y la conducta inmediata que debe adoptarse?",
            "options": [
                  {
                        "id": "A",
                        "text": "Hipertrofia compensatoria de cornetes; indicar descongestionantes tópicos por 7 días."
                  },
                  {
                        "id": "B",
                        "text": "Hematoma septal; realizar incisión, drenaje quirúrgico inmediato y taponamiento nasal bilateral compresivo."
                  },
                  {
                        "id": "C",
                        "text": "Fractura nasal simple no desplazada; solicitar radiografía de huesos propios y citar a control en 10 días."
                  },
                  {
                        "id": "D",
                        "text": "Poliposis nasal postraumática aguda; iniciar prednisona oral en dosis altas."
                  },
                  {
                        "id": "E",
                        "text": "Desviación septal cartilaginosa fija; programar septoplastia electiva en 6 meses."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. La presencia de una tumefacción abombada violácea y fluctuante en el tabique nasal tras un traumatismo agudo es la manifestación clínica típica del Hematoma Septal. Es una emergencia otorrinolaringológica: el cartílago septal sufre necrosis isquémica por desprendimiento del pericondrio en menos de 24 a 48 horas si no se descomprime, lo que provocaría la pérdida de soporte de la pirámide nasal (deformidad en silla de montar). La conducta inmediata ineludible es el drenaje quirúrgico de los coágulos mediante incisión del mucopericondrio, colocación de taponamiento anterior bilateral compresivo y cobertura antibiótica. Diferir la conducta (opción C) o usar descongestionantes (opción A) conduce a secuelas estéticas y funcionales irreparables.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.4.018"
      },
      {
            "stem": "Una paciente de 46 años con antecedentes de asma bronquial de difícil control consulta por obstrucción nasal bilateral progresiva y anosmia. A la rinoscopía anterior se observan múltiples masas translúcidas, brillantes, de color grisáceo y consistencia blanda, completamente insensibles al tacto, que prolapsan desde el meato medio hacia ambas fosas nasales. Refiere además que hace un año presentó un episodio de broncoespasmo severo que requirió ingreso a UCI tras ingerir ketorolaco. ¿Cuál es el diagnóstico sindromático de esta paciente y qué clase de analgésicos debe evitar estrictamente?",
            "options": [
                  {
                        "id": "A",
                        "text": "Granulomatosis con poliangeítis; debe evitar el uso de paracetamol."
                  },
                  {
                        "id": "B",
                        "text": "Síndrome de Churg-Strauss; debe evitar los antibióticos betalactámicos."
                  },
                  {
                        "id": "C",
                        "text": "Tríada de Samter (Enfermedad respiratoria exacerbada por aspirina); debe evitar estrictamente la aspirina y todos los AINEs."
                  },
                  {
                        "id": "D",
                        "text": "Papilomatosis respiratoria recurrente; debe evitar el uso de corticoides intranasales."
                  },
                  {
                        "id": "E",
                        "text": "Rinitis medicamentosa; debe evitar los descongestionantes tópicos y antihistamínicos."
                  }
            ],
            "correcta": "C",
            "explicacion": "La opción correcta es la C. La coexistencia de Poliposis Nasal bilateral (masas translúcidas insensibles como uva pelada) + Asma Bronquial + Intolerancia severa con broncoespasmo a la Aspirina y otros AINEs constituye la clásica Tríada de Samter (o Tríada de Widal / EREA). El mecanismo subyacente es una disregulación de la vía del ácido araquidónico: al bloquear la enzima COX-1 con AINEs, la cascada metabólica se desvía masivamente hacia la vía de la lipooxigenasa, produciendo una sobreproducción extrema de cisteinil-leucotrienos (LTC4, LTD4, LTE4) que provocan broncoconstricción fatal, vasodilatación y edema mucoso. Estos pacientes deben tener contraindicados de por vida la aspirina y todos los AINEs inhibidores de COX-1.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.4.018"
      }
]
  },
  {
    "id": "orl-13",
    "classId": "orl-13",
    "tier": 3,
    "blockNum": 4,
    "blockName": "Faringe, Laringe & Vía Aérea Superior",
    "topicLabel": "14.13",
    "title": "Faringoamigdalitis Aguda Bacteriana: Criterios de Centor/McIsaac y Penicilina",
    "perfilCode": "4.01.2.002",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "Sin garantía GES específica",
    "reconstrucciones": "EUNACOM Diciembre 2017 (Q#11) · EUNACOM Julio 2019 (Q#05) · EUNACOM Diciembre 2021 (Q#22) · EUNACOM Diciembre 2023 (Q#09)",
    "frecuencia": "Altísima rentabilidad · 3 a 4 preguntas por examen: criterios de Centor/McIsaac (ausencia de tos, exudado, fiebre, adenopatía), profilaxis de fiebre reumática y esquema de penicilina benzatina de elección",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico y Terapéutico de la Faringitis Aguda según Escala de McIsaac",
    "diagram": flow("Algoritmo Diagnóstico y Terapéutico de la Faringitis Aguda según Escala de McIsaac", [
      {
            "t": "Paciente con Odinofagia Aguda y Fiebre",
            "s": [
                  "Inspección orofaríngea: buscar exudado amigdalino y signos virales"
            ],
            "type": "acc"
      },
      {
            "al": "Estratificación Clínica: Criterios de Centor Modificado por McIsaac",
            "w": 460
      },
      {
            "t": "Puntuación de McIsaac (0 a 5 puntos)",
            "s": [
                  "Fiebre > 38°C (+1) · Exudado o hipertrofia amigdalina (+1)",
                  "Adenopatía cervical anterior dolorosa (+1) · Ausencia de tos (+1)",
                  "Edad 3-14 años (+1) · Edad 15-44 años (0) · Edad ≥ 45 años (-1)"
            ],
            "type": "acc"
      },
      {
            "al": "Decisión Terapéutica según Puntaje Total",
            "w": 460
      },
      {
            "k": "split",
            "q": "¿Puntaje de McIsaac ≤ 1 vs 2-3 vs ≥ 4 puntos?",
            "s": "Probabilidad de Streptococcus pyogenes (SBHGA)",
            "ll": "Puntaje ≤ 1 (Riesgo < 5-10%)",
            "rl": "Puntaje ≥ 4 (Riesgo > 50-60%)",
            "left": {
                  "t": "Etiología Viral Muy Probable",
                  "s": "Manejo puramente sintomático · No antibióticos",
                  "type": "dec"
            },
            "right": {
                  "t": "Etiología Bacteriana (SBHGA)",
                  "s": "Antibioticoterapia empírica o test rápido/cultivo",
                  "type": "crit"
            }
      },
      {
            "al": "Tratamiento de Elección en Faringoamigdalitis Estreptocócica",
            "from": "right",
            "w": 460
      },
      {
            "t": "Penicilina Benzatina IM o Amoxicilina Oral x 10 días",
            "s": [
                  "Penicilina Benzatina 1.200.000 UI IM dosis única (> 27 kg / adultos)",
                  "Amoxicilina oral 50 mg/kg/día (máx 1g/d) cada 12 o 24 horas x 10 días completos",
                  "Objetivo primario: Erradicación y prevención de FIEBRE REUMÁTICA AGUDA"
            ],
            "type": "acc"
      }
]),
    "contexto": "La faringoamigdalitis aguda es uno de los motivos de consulta más frecuentes en todas las edades. La inmensa mayoría de las faringitis en menores de 3 años y en adultos son de causa viral (rinovirus, adenovirus, EBV). El objetivo prioritario evaluado de forma incisiva en el EUNACOM es identificar al Streptococcus pyogenes (estreptococo betahemolítico del grupo A - SBHGA) mediante la escala de Centor/McIsaac para evitar el sobreuso de antibióticos en cuadros virales, y prescribir Penicilina Benzatina o Amoxicilina por 10 días completos con el propósito fundamental de prevenir la fiebre reumática aguda y complicaciones supurativas.",
    "contentSections": [
      {
            "subhead": "1. Etiología Viral vs Bacteriana: El SBHGA como Blanco Terapéutico",
            "paragraphs": [
                  "Más del 70-85% de las faringitis agudas en adultos y > 50-70% en niños son de <strong>etiología viral</strong> (adenovirus, rinovirus, coronavirus, virus influenza, virus Epstein-Barr causante de mononucleosis infecciosa). Los signos que orientan fuertemente a causa viral son: <strong>tos, coriza/rinorrea, disfonía, conjuntivitis, aftas orales y diarrea</strong>.",
                  "El único patógeno bacteriano común que justifica tratamiento antibiótico formal es el <strong><em>Streptococcus pyogenes</em> (Estreptococo Betahemolítico del Grupo A - SBHGA)</strong>, responsable del 15-30% de los casos en niños de 3 a 14 años y solo del 5-10% en adultos. En niños menores de 3 años, la faringitis estreptocócica es extraordinariamente rara y casi nunca se asocia a fiebre reumática."
            ]
      },
      {
            "subhead": "2. Criterios Diagnósticos de Centor Modificado por McIsaac",
            "paragraphs": [
                  "Dado que el exudado pultáceo blanco en las amígdalas puede presentarse tanto en infecciones bacterianas como en virales (especialmente por adenovirus o mononucleosis por EBV), se utiliza la <strong>Escala de McIsaac</strong> para estimar la probabilidad de SBHGA y normar la conducta:",
                  "<strong>Criterios (1 punto cada uno):</strong> (1) Fiebre cuantificada > 38.0°C axilar; (2) Exudado amigdalino o amígdalas intensamente tumefactas; (3) Adenopatías cervicales anteriores dolorosas a la palpación; (4) Ausencia de tos; y (5) Factor edad: 3 a 14 años (+1 punto), 15 a 44 años (0 puntos), ≥ 45 años (-1 punto).",
                  "<strong>Conducta según Puntaje Total:</strong>",
                  "• <strong>0 a 1 punto (Riesgo < 5-10%):</strong> No realizar pruebas diagnósticas ni indicar antibióticos; manejo puramente sintomático con analgésicos.",
                  "• <strong>2 a 3 puntos (Riesgo 15-30%):</strong> Realizar test de detección rápida de antígeno estreptocócico (Strep-test) o cultivo faríngeo; tratar solo si resulta positivo.",
                  "• <strong>4 a 5 puntos (Riesgo 50-60%):</strong> Indicación de test rápido/cultivo o inicio empírico inmediato de tratamiento antibiótico bactericida."
            ]
      },
      {
            "subhead": "3. Esquema Antimicrobiano de Elección: Prevención de Fiebre Reumática",
            "paragraphs": [
                  "El <em>Streptococcus pyogenes</em> conserva una <strong>sensibilidad del 100% a la penicilina</strong> en todo el mundo (no existen cepas resistentes a penicilinas descritas en la historia de la medicina). Por tanto, los antibióticos de primera línea indiscutidos son:",
                  "<strong>Opción 1 (Asegura cumplimiento):</strong> <strong>Penicilina Benzatina intramuscular en dosis única: 1.200.000 UI IM</strong> en pacientes con peso > 27 kg o adultos; <strong>600.000 UI IM</strong> en niños con peso < 27 kg.",
                  "<strong>Opción 2:</strong> <strong>Amoxicilina oral: 50 mg/kg/día dividida cada 12 o 24 horas (máximo 1 g/día) durante 10 días completos</strong>. Se requieren obligatoriamente 10 días para erradicar el germen de la orofaringe y prevenir la fiebre reumática aguda (los esquemas de 5 o 7 días no aseguran prevención de carditis reumática).",
                  "<strong>Alergia a Penicilina:</strong> En pacientes con alergia demostrada no anafiláctica se utilizan cefalosporinas de 1ª generación (Cefadroxilo 30 mg/kg/d x 10d). En pacientes con antecedente de <em>anafilaxia o alergia mediada por IgE</em>, el fármaco de elección es un macrólido: <strong>Azitromicina (12 mg/kg/día en niños o 500 mg/día en adultos por 5 días)</strong> o Claritromicina (15 mg/kg/día x 10 días).",
                  "<em>Nota clave EUNACOM:</em> La antibioticoterapia previene eficazmente la <strong>fiebre reumática aguda</strong> y los abscesos periamigdalinos, pero <strong>NO previene la glomerulonefritis postestreptocócica (GNPE)</strong>, la cual se desencadena por inmunocomplejos independientemente del tratamiento."
            ]
      }
],
    "table": {
      "title": "Criterios Clínicos de McIsaac y Probabilidad de Faringitis Estreptocócica (SBHGA)",
      "headers": [
            "Puntuación Total",
            "Probabilidad de SBHGA",
            "Conducta Diagnóstica Oficial",
            "Tratamiento Recomendado"
      ],
      "rows": [
            [
                  "0 a 1 punto",
                  "< 5% en adultos; < 10% en niños",
                  "No requiere test microbiológico ni cultivo",
                  "Sintomático exclusivo: Paracetamol / Ibuprofeno"
            ],
            [
                  "2 puntos",
                  "10 a 17%",
                  "Test rápido de antígeno estreptocócico o cultivo",
                  "Tratar solo si el test de laboratorio es positivo"
            ],
            [
                  "3 puntos",
                  "25 a 35%",
                  "Test rápido de antígeno estreptocócico o cultivo",
                  "Tratar solo si el test de laboratorio es positivo"
            ],
            [
                  "4 a 5 puntos",
                  "50 a 60%",
                  "Test rápido / Cultivo o Tratamiento empírico directo",
                  "Penicilina Benzatina IM dosis única o Amoxicilina x 10 días"
            ]
      ]
},
    "severityTable": {
      "title": "Diagnóstico Diferencial: Faringitis Viral vs Estreptocócica vs Mononucleosis",
      "headers": [
            "Característica",
            "Faringitis Viral Común",
            "Faringitis Estreptocócica (SBHGA)",
            "Mononucleosis Infecciosa (EBV)"
      ],
      "rows": [
            [
                  "Síntomas de Vía Aérea",
                  "Tos presente, rinorrea, disfonía, aftas orales",
                  "AUSENCIA RIGUROSA DE TOS, coriza o disfonía",
                  "Ausencia de tos; odinofagia muy intensa y prolongada"
            ],
            [
                  "Exudado Amigdalino",
                  "Raro o puntiforme fino (adenovirus)",
                  "Exudado blanquecino en placas confluentes pultáceas",
                  "Exudado blanco-grisáceo extenso con membranas gruesas"
            ],
            [
                  "Adenopatías",
                  "Submandibulares pequeñas no dolorosas",
                  "Yugulodigástricas anteriores muy dolorosas",
                  "Adenopatías cervicales POSTERIORES, axilares y esplenomegalia"
            ],
            [
                  "Efecto de Amoxicilina",
                  "Sin cambios en la evolución natural",
                  "Curación rápida en 24-48 horas sin recidivas",
                  "EXANTEMA MÁCULO-PAPULAR PRURIGINOSO SEVERO (rash por amoxicilina)"
            ]
      ]
},
    "treatmentTable": {
      "title": "Esquema Antimicrobiano Oficial en Faringoamigdalitis por SBHGA",
      "headers": [
            "Fármaco y Presentación",
            "Población y Vía",
            "Dosis y Posología",
            "Duración y Objetivo"
      ],
      "rows": [
            [
                  "Penicilina Benzatina IM",
                  "Adultos y niños > 27 kg",
                  "1.200.000 UI intramuscular profunda",
                  "Dosis ÚNICA · Máxima adherencia y erradicación garantizada"
            ],
            [
                  "Penicilina Benzatina IM",
                  "Niños < 27 kg",
                  "600.000 UI intramuscular profunda",
                  "Dosis ÚNICA · Prevención de fiebre reumática aguda"
            ],
            [
                  "Amoxicilina oral",
                  "Pediátrico y adultos",
                  "50 mg/kg/día cada 12h o 24h (adultos 500 mg c/12h o 1g/d)",
                  "10 DÍAS COMPLETOS OBLIGATORIOS · Tasa de curación > 95%"
            ],
            [
                  "Azitromicina oral (Alergia IgE)",
                  "Alérgicos a penicilina",
                  "12 mg/kg/día en niños (adultos 500 mg/día)",
                  "5 días consecutivos · Rescate estricto en anafilaxia confirmada"
            ]
      ]
},
    "vignette": "Un niño de 8 años es llevado al consultorio por su madre debido a fiebre de 38.9°C y odinofagia intensa de 24 horas de evolución que le dificulta tragar la saliva. No presenta tos, rinorrea ni deposiciones líquidas. Al examen físico se encuentra febril, sin dificultad respiratoria. A la inspección de la orofaringe se evidencian amígdalas palatinas aumentadas de volumen, hiperémicas, con exudado pultáceo blanquecino abundante en placas sobre las criptas, y petequias en el paladar blando. A la palpación cervical se detectan adenopatías submandibulares y yugulodigástricas anteriores bilaterales de 2 cm, sumamente sensibles. El resto del examen físico es normal.",
    "explicacion": "El paciente presenta una Faringoamigdalitis Aguda Bacteriana por Streptococcus pyogenes (SBHGA). Al evaluar los criterios de McIsaac: edad 3-14 años (+1), fiebre > 38°C (+1), exudado amigdalino (+1), adenopatías cervicales anteriores sensibles (+1) y ausencia de tos (+1), alcanza una puntuación de 5 puntos (máxima probabilidad clínica > 50-60% de infección estreptocócica). La presencia de petequias en el paladar blando refuerza la sospecha. La conducta médica de elección inmediata es el tratamiento con Penicilina Benzatina 600.000 UI IM en dosis única (o 1.200.000 UI si pesa > 27 kg) o Amoxicilina oral 50 mg/kg/día dividida cada 12 horas durante 10 días completos. El objetivo fundamental de completar el tratamiento es prevenir la carditis y artritis de la fiebre reumática aguda y los abscesos cervicales supurativos.",
    "keyPoints": [
      "La presencia de tos, rinorrea, disfonía o conjuntivitis prácticamente descarta SBHGA y confirma etiología viral.",
      "Los 4 criterios de Centor son: fiebre > 38°C, exudado amigdalino, adenopatías cervicales anteriores dolorosas y ausencia de tos.",
      "La escala de McIsaac añade el factor edad: 3-14 años (+1), 15-44 años (0), ≥ 45 años (-1).",
      "El tratamiento de primera línea es Penicilina Benzatina IM dosis única o Amoxicilina oral por 10 DÍAS COMPLETOS.",
      "El objetivo prioritario del tratamiento antibiótico es la prevención de la Fiebre Reumática Aguda.",
      "El tratamiento antibiótico NO previene la Glomerulonefritis Postestreptocócica (GNPE).",
      "La amoxicilina en un paciente con mononucleosis por EBV desencadena un exantema máculo-papular característico en > 90% de los casos."
],
    "questions": [
      {
            "stem": "Un escolar de 7 años es traído a la consulta por fiebre de 38.6°C y odinofagia de 2 días de evolución. No tiene tos ni mucosidad nasal. Al examen físico destaca faringe eritematosa con amígdalas aumentadas de tamaño con exudado pultáceo y adenopatías cervicales anteriores bilaterales muy sensibles a la palpación. Según los criterios de Centor modificados por McIsaac, ¿cuántos puntos tiene y cuál es la conducta de elección?",
            "options": [
                  {
                        "id": "A",
                        "text": "2 puntos; manejo puramente sintomático con paracetamol oral."
                  },
                  {
                        "id": "B",
                        "text": "3 puntos; solicitar hemograma con frotis y radiografía de tórax."
                  },
                  {
                        "id": "C",
                        "text": "5 puntos; iniciar tratamiento antibiótico con penicilina benzatina IM o amoxicilina oral por 10 días."
                  },
                  {
                        "id": "D",
                        "text": "4 puntos; iniciar ciprofloxacino oral por 5 días para evitar nefropatía."
                  },
                  {
                        "id": "E",
                        "text": "1 punto; indicar gárgaras con sal y citar a control en 7 días si persiste con fiebre."
                  }
            ],
            "correcta": "C",
            "explicacion": "La opción correcta es la C. El paciente suma exactamente 5 puntos en la escala de McIsaac: fiebre > 38°C (+1), exudado amigdalino (+1), adenopatías anteriores sensibles (+1), ausencia de tos (+1) y edad de 3 a 14 años (+1). Con 5 puntos, la probabilidad de infección por Streptococcus pyogenes supera el 50-60%, estando formalmente indicado el inicio inmediato de tratamiento antibiótico de primera línea: Penicilina Benzatina intramuscular en dosis única o Amoxicilina oral (50 mg/kg/día) durante 10 días completos con el objetivo primordial de prevenir la fiebre reumática aguda.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.01.2.002"
      },
      {
            "stem": "Respecto a las complicaciones de la faringoamigdalitis aguda por Streptococcus pyogenes (estreptococo betahemolítico del grupo A), ¿cuál de las siguientes afirmaciones es CORRECTA?",
            "options": [
                  {
                        "id": "A",
                        "text": "El tratamiento antibiótico precoz previene eficazmente la glomerulonefritis aguda postestreptocócica."
                  },
                  {
                        "id": "B",
                        "text": "El tratamiento antibiótico con penicilina benzatina o amoxicilina por 10 días previene la fiebre reumática aguda."
                  },
                  {
                        "id": "C",
                        "text": "La penicilina benzatina no tiene efecto en la prevención de abscesos periamigdalinos supurativos."
                  },
                  {
                        "id": "D",
                        "text": "La glomerulonefritis solo se presenta tras infecciones estreptocócicas de la piel y nunca tras faringitis."
                  },
                  {
                        "id": "E",
                        "text": "Se ha comprobado una tasa de resistencia a penicilina superior al 20% en cepas chilenas de Streptococcus pyogenes."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. Es una regla de oro de la infectología y pediatría: el tratamiento antibiótico adecuado de la faringitis estreptocócica previene de manera categórica la aparición de la Fiebre Reumática Aguda y sus secuelas valvulares cardíacas, siempre que se administre penicilina benzatina o se completen 10 días de antibióticos orales. Por el contrario (opción A), los antibióticos NO previenen la Glomerulonefritis Postestreptocócica (GNPE), la cual depende de una respuesta inmune mediada por inmunocomplejos y antígenos nefritogénicos que se activa independientemente de la erradicación bacteriana. La opción E es falsa: el SBHGA mantiene un 100% de sensibilidad a la penicilina.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.01.2.002"
      },
      {
            "stem": "Un adolescente de 16 años consulta por odinofagia severa de 5 días de evolución, astenia marcada y fiebre. El médico sospecha amigdalitis bacteriana y le prescribe amoxicilina 875 mg cada 12 horas. Al tercer día de amoxicilina, el paciente acude a urgencias por la aparición de un exantema máculo-papular eritematoso difuso y pruriginoso en tronco y extremidades. Al examen actual presenta amígdalas hipertróficas con exudado blanco-grisáceo, adenopatías cervicales posteriores y epitrocleares palpables y esplenomegalia a 3 cm bajo el reborde costal. ¿Cuál es el diagnóstico más probable?",
            "options": [
                  {
                        "id": "A",
                        "text": "Alergia anafiláctica grave a la amoxicilina mediada por IgE."
                  },
                  {
                        "id": "B",
                        "text": "Mononucleosis infecciosa por virus de Epstein-Barr (EBV)."
                  },
                  {
                        "id": "C",
                        "text": "Escarlatina estreptocócica clásica con signo de Pastia."
                  },
                  {
                        "id": "D",
                        "text": "Infección aguda por citomegalovirus refractaria a penicilina."
                  },
                  {
                        "id": "E",
                        "text": "Shock tóxico estreptocócico fulminante."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. La aparición de un exantema máculo-papular eritematoso difuso (rash por aminopenicilinas) en más del 90-95% de los pacientes con Mononucleosis Infecciosa por Virus de Epstein-Barr (EBV) tras recibir amoxicilina o ampicilina es un efecto inmunomediado clásico no alérgico. La presencia de odinofagia prolongada, exudado amigdalino, adenopatías en cadena cervical posterior y epitrocleares, sumado a esplenomegalia, confirma el síndrome mononucleósico.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.01.2.002"
      },
      {
            "stem": "En un paciente de 25 años con faringoamigdalitis estreptocócica confirmada por test rápido, con antecedente de reacción anafiláctica severa previa a la penicilina (edema de glotis y colapso circulatorio), ¿cuál de los siguientes antibióticos es la opción terapéutica de primera línea más adecuada?",
            "options": [
                  {
                        "id": "A",
                        "text": "Amoxicilina con ácido clavulánico oral."
                  },
                  {
                        "id": "B",
                        "text": "Cefadroxilo oral en dosis altas."
                  },
                  {
                        "id": "C",
                        "text": "Azitromicina oral por 5 días."
                  },
                  {
                        "id": "D",
                        "text": "Ceftriaxona intramuscular en dosis única."
                  },
                  {
                        "id": "E",
                        "text": "Ampicilina oral por 10 días."
                  }
            ],
            "correcta": "C",
            "explicacion": "La opción correcta es la C. Ante un antecedente fidedigno de reacción alérgica grave anafiláctica mediada por IgE (edema laríngeo, broncoespasmo o shock anafiláctico) a las penicilinas, están terminantemente contraindicados todos los antibióticos betalactámicos, incluyendo aminopenicilinas (opciones A y E) y cefalosporinas (opciones B y D) por riesgo de reacción anafiláctica cruzada potencialmente mortal. En esta situación clínica, los macrólidos (Azitromicina 500 mg/día por 5 días o Claritromicina 250-500 mg cada 12 horas por 10 días) constituyen la alternativa terapéutica formal de elección.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.01.2.002"
      }
]
  },
  {
    "id": "orl-14",
    "classId": "orl-14",
    "tier": 3,
    "blockNum": 4,
    "blockName": "Faringe, Laringe & Vía Aérea Superior",
    "topicLabel": "14.14",
    "title": "Complicaciones Supurativas: Absceso Periamigdalino, Parafaríngeo y Retrofaríngeo",
    "perfilCode": "4.01.2.001",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Especialista",
    "ges": "Sin garantía GES específica · Ley de Urgencias médica si compromiso de vía aérea",
    "reconstrucciones": "EUNACOM Diciembre 2018 (Q#34) · EUNACOM Julio 2020 (Q#58) · EUNACOM Diciembre 2022 (Q#89)",
    "frecuencia": "Altísima rentabilidad · 2 a 3 preguntas por examen: tríada del absceso periamigdalino (trismus, voz en papa caliente y desviación de la úvula), punción/drenaje urgente y descarte de absceso retrofaríngeo en lactantes",
    "svg": null,
    "algoTitle": "Algoritmo de Diagnóstico y Manejo de Infecciones Profundas del Cuello y Espacios Fasciales",
    "diagram": flow("Algoritmo de Diagnóstico y Manejo de Infecciones Profundas del Cuello y Espacios Fasciales", [
      {
            "t": "Paciente con Odinofagia Asimétrica Severa, Fiebre y Trismus",
            "s": [
                  "Inspección orofaríngea con abatelenguas e iluminación directa"
            ],
            "type": "acc"
      },
      {
            "al": "Examen Orofaríngeo y Clasificación Anatómica del Espacio Fascial",
            "w": 460
      },
      {
            "k": "split",
            "q": "¿Abombamiento unilateral del pilar anterior con desviación de úvula?",
            "s": "Diferenciación entre Absceso Periamigdalino vs Parafaríngeo vs Retrofaríngeo",
            "ll": "Sí: Úvula desviada hacia lado contralateral",
            "rl": "No: Abombamiento pared posterior o tortícolis",
            "left": {
                  "t": "Absceso Periamigdalino (Flemón)",
                  "s": "Trismus + Voz en 'papa caliente' + Sialorrea",
                  "type": "crit"
            },
            "right": {
                  "t": "Absceso Retrofaríngeo / Parafaríngeo",
                  "s": "Lactantes < 5 años, tortícolis, estridor, ensanchamiento prevertebral",
                  "type": "warn"
            }
      },
      {
            "al": "Conducta Inmediata en Absceso Periamigdalino",
            "from": "left",
            "w": 460
      },
      {
            "t": "Punción / Drenaje + Cobertura Antibiótica EV",
            "s": [
                  "Punción diagnóstica y evacuadora con aguja gruesa en punto de máximo abombamiento",
                  "Antibioticoterapia EV: Penicilina Sódica + Metronidazol EV o Ceftriaxona + Clindamicina",
                  "Corticoides EV (Dexametasona 8 mg) para reducir edema y trismus"
            ],
            "type": "crit"
      },
      {
            "al": "Conducta en Absceso Retrofaríngeo",
            "from": "right",
            "w": 460
      },
      {
            "t": "Hospitalización URGENTE + TAC de Cuello con Contraste",
            "s": [
                  "Riesgo inminente de mediastinitis descendente y asfixia",
                  "Pabellón quirúrgico para drenaje urgente por cirujano ORL"
            ],
            "type": "crit"
      }
]),
    "contexto": "Las infecciones supurativas de los espacios profundos del cuello representan verdaderas urgencias quirúrgicas en otorrinolaringología por su potencial letalidad debido a obstrucción mecánica de la vía aérea y diseminación hacia el mediastino posterior (mediastinitis necrotizante descendente). En el EUNACOM se evalúa de manera fija el reconocimiento inmediato de la tríada cardinal del absceso periamigdalino (trismus por espasmo del músculo pterigoideo interno, voz de papa caliente y desviación contralateral de la úvula), su drenaje por punción e inicio de antibióticos endovenosos.",
    "contentSections": [
      {
            "subhead": "1. Absceso Periamigdalino (Quinsy): Clínica y Tríada Clásica",
            "paragraphs": [
                  "El <strong>absceso periamigdalino</strong> es la infección profunda del cuello más frecuente en adolescentes y adultos jóvenes. Se produce por la diseminación de una faringoamigdalitis aguda supurada que atraviesa la cápsula amigdalina hacia el espacio virtual periamigdalino (entre la cápsula y el músculo constrictor superior de la faringe). La microbiología es típicamente polimicrobiana: mezcla de <em>Streptococcus pyogenes</em>, <em>Streptococcus anginosus</em> y bacterias anaerobias orales (<em>Fusobacterium necrophorum</em>, <em>Prevotella</em>, <em>Peptostreptococcus</em>).",
                  "La <strong>tríada semiológica clásica patognomónica</strong> está constituida por: (1) <strong>Trismus intenso</strong> (dificultad o imposibilidad para abrir la boca debido a la irritación y espasmo inflamatorio del músculo pterigoideo interno adyacente); (2) <strong>Voz en 'papa caliente' o voz gangosa/apagada</strong> (rinolalia cerrada); y (3) <strong>Desviación manifiesta de la úvula hacia el lado CONTRALATERAL</strong>, producida por el abombamiento asimétrico del pilar amigdalino anterior y del paladar blando superior que empuja la amígdala hacia la línea media.",
                  "El cuadro se acompaña de odinofagia unilateral intolerable, otalgia refleja ipsilateral (por el nervio glosofaríngeo), sialorrea profusa por imposibilidad de deglutir y fiebre alta con aliento fétido."
            ]
      },
      {
            "subhead": "2. Manejo Terapéutico del Absceso Periamigdalino: Drenaje y Antibióticos",
            "paragraphs": [
                  "El tratamiento del absceso periamigdalino comprende tres pilares esenciales e inmediatos:",
                  "<strong>1. Drenaje Mecánico (Paso Crucial):</strong> Si existe colección fluctuante, la descompresión es mandatoria. En el box de urgencia se realiza <strong>punción con aguja gruesa (trocar 18G con tope) o incisión y drenaje</strong> en el punto de máxima prominencia del pilar amigdalino anterior superior (previa anestesia tópica e infiltrativa). El drenaje proporciona un alivio sintomático y del trismus casi instantáneo y permite la toma de cultivo bacteriológico.",
                  "<strong>2. Antibioticoterapia Endovenosa de Amplio Espectro:</strong> Debido a la presencia de anaerobios, los esquemas de elección son: <strong>Amoxicilina + Ácido Clavulánico EV (1.2 g c/8h)</strong>, o <strong>Penicilina Sódica (2 a 4 millones UI c/4h EV) + Metronidazol (500 mg c/8h EV)</strong>, o <strong>Ceftriaxona (2 g/día EV) + Clindamicina (600 mg c/8h EV)</strong>.",
                  "<strong>3. Corticoterapia y Analgesia:</strong> Una dosis endovenosa de Dexametasona (8 a 10 mg EV) acelera notablemente la reducción del edema tisular y la resolución del trismus.",
                  "<em>Amigdalectomía:</em> La amigdalectomía en caliente (en la fase aguda) solo se reserva si falla el drenaje o hay compromiso de vía aérea. Si el paciente tiene antecedentes de amigdalitis recurrentes, se programa una amigdalectomía electiva ('en frío') a las 4 a 6 semanas."
            ]
      },
      {
            "subhead": "3. Absceso Retrofaríngeo: Urgencia Pediátrica y Ensanchamiento Prevertebral",
            "paragraphs": [
                  "El <strong>absceso retrofaríngeo</strong> se produce en el espacio localizado entre la fascia bucofaríngea y la fascia alar prevertebral. Este espacio contiene los <strong>ganglios linfáticos retrofaríngeos de Gilette</strong>, los cuales drenan las adenoides, fosas nasales y senos paranasales, y sufren una atrofia fisiológica progresiva hasta desaparecer alrededor de los 4 a 5 años de edad. Por ello, el <strong>absceso retrofaríngeo es casi exclusivo de lactantes y niños menores de 5 años</strong> (en adultos se debe a cuerpos extraños clavados como espinas de pescado o trauma instrumental).",
                  "<strong>Clínica:</strong> Fiebre alta, rechazo alimentario, sialorrea, rigidez de nuca y <strong>tortícolis dolorosa</strong>, voz apagada (estridor inspiratorio o respiración estertorosa con cabeza en hiperextensión). A diferencia del absceso periamigdalino, <em>la orofaringe anterior suele verse normal</em>, observándose un abombamiento en la pared posterior de la faringe.",
                  "<strong>Diagnóstico y Radiografía:</strong> La <strong>Radiografía lateral de cuello en hiperextensión e inspiración</strong> demuestra el <strong>ensanchamiento patológico del espacio de partes blandas prevertebrales</strong> (más del ancho de un cuerpo vertebral cervical en C2 o más del doble del cuerpo vertebral en C6), con pérdida de la lordosis cervical y presencia de aire/nivel hidroaéreo. El <strong>TAC de cuello con contraste</strong> es el examen definitivo.",
                  "<strong>Tratamiento:</strong> Es una <strong>emergencia quirúrgica absoluta</strong> por el altísimo riesgo de asfixia y <strong>Mediastinitis Necrotizante Descendente</strong> (el espacio retrofaríngeo se comunica directamente con el mediastino posterior a través del 'espacio peligroso' o <em>danger space</em>). Exige hospitalización en UCI, intubación cuidadosa y <strong>drenaje quirúrgico urgente en pabellón</strong> bajo anestesia general junto a Ceftriaxona + Clindamicina EV."
            ]
      },
      {
            "subhead": "4. Absceso Parafaríngeo y Angina de Ludwig",
            "paragraphs": [
                  "<strong>Absceso Parafaríngeo:</strong> Afecta el espacio faringomaxilar lateral (con sus compartimentos preestíleo y retroestíleo). Clínicamente produce trismus severo, desplazamiento medial de la pared lateral faríngea y amígdala (sin inflamación primaria amigdalina) y tumefacción dolorosa en el ángulo de la mandíbula. Su mayor peligro es la <strong>erosión de la arteria carótida interna</strong> y la <strong>tromboflebitis séptica de la vena yugular interna (Síndrome de Lemierre)</strong> por <em>Fusobacterium necrophorum</em>.",
                  "<strong>Angina de Ludwig:</strong> Es una celulitis gangrenosa rápidamente progresiva y potencialmente mortal que compromete bilateralmente los <strong>espacios submandibular, sublingual y submentoniano</strong>, originada en el 80% de los casos a partir de <strong>infecciones odontogénicas de los molares inferiores (2° y 3° molar)</strong>. Se manifiesta por una induración leñosa del piso de la boca sin fluctuación palpable, con <strong>elevación y protrusión forzada de la lengua hacia atrás</strong> que ocluye la orofaringe y causa asfixia súbita. El manejo prioritario indiscutido es el <strong>aseguramiento inmediato de la vía aérea (a menudo mediante traqueostomía o intubación con fibrobroncoscopio)</strong>, seguido de descompresión quirúrgica y antibióticos EV."
            ]
      }
],
    "table": {
      "title": "Diagnóstico Diferencial de Infecciones Cervicales Profundas",
      "headers": [
            "Entidad Infecciosa",
            "Población Típica",
            "Signos Clínicos Cardinales",
            "Complicación Mayor / Conducta"
      ],
      "rows": [
            [
                  "Absceso Periamigdalino",
                  "Adolescentes y adultos jóvenes (15-35 años)",
                  "Trismus, voz en papa caliente, úvula desviada al lado sano",
                  "Punción/drenaje con aguja en box + Penicilina+Metronidazol EV"
            ],
            [
                  "Absceso Retrofaríngeo",
                  "Lactantes y preescolares (< 5 años)",
                  "Tortícolis, estridor, abombamiento pared posterior faríngea",
                  "Mediastinitis descendente · TAC con contraste + Pabellón urgente"
            ],
            [
                  "Absceso Parafaríngeo",
                  "Cualquier edad tras faringitis u otitis",
                  "Trismus, tumefacción bajo ángulo mandibular, masa cervical",
                  "Erosión carotídea y Síndrome de Lemierre · Drenaje quirúrgico"
            ],
            [
                  "Angina de Ludwig",
                  "Adultos con infección de molares inferiores",
                  "Induración leñosa de piso de boca con elevación de la lengua",
                  "ASFIXIA INMINENTE: Asegurar vía aérea + Traqueostomía + Drenaje"
            ]
      ]
},
    "severityTable": {
      "title": "Criterios de Gravedad e Indicación de Vía Aérea Quirúrgica en Infecciones de Cuello",
      "headers": [
            "Signo de Alarma",
            "Mecanismo Patogénico",
            "Riesgo Inminente",
            "Acción Inmediata"
      ],
      "rows": [
            [
                  "Estridor / Disnea inspiratoria",
                  "Edema y compresión del espacio supraglótico y laringe",
                  "Paro cardiorrespiratorio por asfixia mecánica aguda",
                  "Intubación con fibrobroncoscopio o Traqueostomía de urgencia"
            ],
            [
                  "Induración leñosa submandibular",
                  "Compromiso de espacios sublingual y submandibular",
                  "Retropulsión completa de la base de lengua",
                  "Asegurar vía aérea antes de cualquier manipulación orofaríngea"
            ],
            [
                  "Ensanchamiento mediastínico en TAC",
                  "Diseminación a través del 'danger space' prevertebral",
                  "Mediastinitis necrotizante descendente (mortalidad > 40%)",
                  "Toracotomía / Mediastinotomía y drenaje cervical por equipo de tórax"
            ]
      ]
},
    "treatmentTable": {
      "title": "Esquemas Antimicrobianos Endovenosos en Infecciones Profundas del Cuello",
      "headers": [
            "Infección Espacial",
            "Esquema Antimicrobiano EV",
            "Dosis Habitual Adulto",
            "Dosis Pediátrica"
      ],
      "rows": [
            [
                  "Absceso Periamigdalino",
                  "Amoxicilina + Ácido Clavulánico EV",
                  "1.2 g cada 8 horas EV",
                  "100 mg/kg/día de amoxicilina dividida c/8h"
            ],
            [
                  "Absceso Periamigdalino (Alternativa)",
                  "Penicilina Sódica + Metronidazol EV",
                  "Penicilina 4 millones c/4h + Metronidazol 500mg c/8h",
                  "Penicilina 200.000 UI/kg/d + Metronidazol 30 mg/kg/d"
            ],
            [
                  "Absceso Retrofaríngeo / Parafaríngeo",
                  "Ceftriaxona + Clindamicina EV",
                  "Ceftriaxona 2 g/día + Clindamicina 600 mg c/8h",
                  "Ceftriaxona 100 mg/kg/día + Clindamicina 40 mg/kg/d"
            ],
            [
                  "Angina de Ludwig Odontogénica",
                  "Ceftriaxona + Metronidazol o Meropenem",
                  "Ceftriaxona 2g/d + Metronidazol 500mg c/8h EV",
                  "Meropenem 2g c/8h si shock o inmunodeprimido"
            ]
      ]
},
    "vignette": "Un joven de 20 años consulta en el servicio de urgencia por odinofagia severa unilateral izquierda de 4 días de evolución que le impide tragar sus alimentos y su propia saliva, la cual se le escapa por la comisura labial. Al intentar interrogarlo, habla con una voz engorrosa y apagada ('en papa caliente') y refiere gran dificultad y dolor para abrir la boca. Al examen físico se constata temperatura de 38.8°C axilar y trismus moderado con apertura bucal limitada a 1.5 cm. Con adecuada iluminación y abatelenguas, se observa marcado aumento de volumen eritematoso del pilar amigdalino anterior izquierdo y paladar blando homolateral, el cual sobrepasa la línea media desplazando la úvula hacia la derecha. La amígdala izquierda se encuentra desplazada inferomedialmente con exudado.",
    "explicacion": "El paciente presenta un Absceso Periamigdalino izquierdo (infección supurada del espacio periamigdalino). El cuadro clínico reúne la tríada patognomónica completa: (1) Trismus por irritación refleja del músculo pterigoideo interno; (2) Voz apagada en 'papa caliente'; y (3) Desviación de la úvula hacia el lado contralateral (derecho) provocada por el abombamiento asimétrico del pilar anterior izquierdo. La conducta inmediata de elección para confirmar el diagnóstico y lograr el alivio sintomático y descompresión de la vía aérea es realizar la punción aspirativa con aguja gruesa (o incisión y drenaje) en el punto de máximo abombamiento del pilar amigdalino anterior izquierdo, obteniéndose material francamente purulento. Se debe iniciar simultáneamente antibioticoterapia endovenosa de amplio espectro activa contra cocos grampositivos y anaerobios orales (Amoxicilina-Ácido Clavulánico EV o Penicilina Sódica + Metronidazol EV) asociada a analgesia y corticoides endovenosos.",
    "keyPoints": [
      "La tríada del absceso periamigdalino es: trismus, voz en 'papa caliente' y desviación de la úvula hacia el lado contralateral.",
      "El trismus se produce por irritación inflamatoria del músculo pterigoideo interno contiguo al pilar amigdalino.",
      "El tratamiento inicial mandatario del absceso periamigdalino es la punción o incisión y drenaje en el punto de mayor abombamiento.",
      "El esquema antibiótico del absceso periamigdalino debe cubrir estreptococos y anaerobios orales (Amoxicilina-Clavulánico o Penicilina + Metronidazol).",
      "El absceso retrofaríngeo es típico de niños < 5 años por supuración de ganglios de Gilette; se manifiesta con tortícolis, estridor y ensanchamiento prevertebral.",
      "El mayor peligro del absceso retrofaríngeo es la mediastinitis necrotizante descendente a través del danger space.",
      "La Angina de Ludwig es una celulitis del piso de la boca que eleva la lengua; la prioridad absoluta es ASEGURAR LA VÍA AÉREA."
],
    "questions": [
      {
            "stem": "Un joven de 19 años con diagnóstico de amigdalitis aguda en tratamiento oral con amoxicilina desde hace 3 días consulta por agravamiento del cuadro. Presenta fiebre alta, odinofagia unilateral derecha intolerable, sialorrea profusa y marcada dificultad para abrir la boca. Al hablar se expresa con voz engorrosa apagada ('en papa caliente'). A la inspección orofaríngea se aprecia protrusión del pilar amigdalino anterior derecho con desplazamiento de la úvula hacia la izquierda. ¿Cuál es el procedimiento diagnóstico y terapéutico de elección que debe realizarse de inmediato?",
            "options": [
                  {
                        "id": "A",
                        "text": "Aumentar la dosis de amoxicilina oral al doble y asociar ketorolaco sublingual."
                  },
                  {
                        "id": "B",
                        "text": "Punción con aguja o incisión y drenaje del espacio periamigdalino derecho e inicio de antibióticos endovenosos."
                  },
                  {
                        "id": "C",
                        "text": "Solicitar tomografía computarizada de tórax ambulatoria para descartar masa tímica."
                  },
                  {
                        "id": "D",
                        "text": "Intubación orotraqueal de urgencia y amigdalectomía bilateral en caliente inmediata."
                  },
                  {
                        "id": "E",
                        "text": "Realizar laringoscopía indirecta con espejo para evaluar la movilidad de las cuerdas vocales."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. El cuadro clínico corresponde a un Absceso Periamigdalino derecho (quinsy), caracterizado por la tríada clásica de trismus, voz en papa caliente y desviación contralateral de la úvula provocada por la colección purulenta en el espacio periamigdalino. La conducta de elección que proporciona confirmación diagnóstica y alivio sintomático inmediato es la punción aspirativa con aguja o la incisión y drenaje en el punto de máxima fluctuación del pilar anterior, asociada al inicio inmediato de antibioticoterapia endovenosa de amplio espectro con cobertura para anaerobios (Amoxicilina-Clavulánico o Penicilina + Metronidazol). Mantener tratamiento oral (opción A) es una conducta errónea ante una colección purulenta fascial.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.01.2.001"
      },
      {
            "stem": "Un lactante de 2 años presenta fiebre alta de 39.2°C, irritabilidad, rechazo alimentario, sialorrea y una postura fija del cuello en extensión con tortícolis dolorosa y estridor inspiratorio leve. En la radiografía lateral de cuello se evidencia un marcado ensanchamiento del espacio de partes blandas prevertebrales a nivel cervical. ¿Cuál es el diagnóstico más probable y la complicación más temida de no mediar tratamiento urgente?",
            "options": [
                  {
                        "id": "A",
                        "text": "Absceso retrofaríngeo; mediastinitis necrotizante descendente."
                  },
                  {
                        "id": "B",
                        "text": "Croup viral laringotraqueal; estenosis subglótica adquirida."
                  },
                  {
                        "id": "C",
                        "text": "Epiglotitis aguda; fístula traqueoesofágica espontánea."
                  },
                  {
                        "id": "D",
                        "text": "Absceso periamigdalino bilateral; trombosis de arteria basilar."
                  },
                  {
                        "id": "E",
                        "text": "Mononucleosis infecciosa severa; rotura esplénica retardada."
                  }
            ],
            "correcta": "A",
            "explicacion": "La opción correcta es la A. En niños menores de 5 años, la inflamación y supuración de los ganglios linfáticos retrofaríngeos de Gilette origina el Absceso Retrofaríngeo. Sus manifestaciones cardinales son fiebre, sialorrea, rigidez de nuca con tortícolis, estridor inspiratorio y ensanchamiento del espacio prevertebral visible en la radiografía lateral de cuello en inspiración. La complicación más grave y potencialmente letal es la propagación de la infección purulenta a través del 'espacio peligroso' (danger space) hacia el tórax, originando una Mediastinitis Necrotizante Descendente con shock séptico y alta mortalidad. Requiere hospitalización inmediata en UCI, TAC de cuello con contraste y drenaje quirúrgico en quirófano.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.01.2.001"
      },
      {
            "stem": "¿Cuál es la causa del trismus (dificultad para la apertura bucal) característico que acompaña al absceso periamigdalino y al absceso parafaríngeo?",
            "options": [
                  {
                        "id": "A",
                        "text": "Parálisis del nervio facial a nivel del canal estilomastoideo."
                  },
                  {
                        "id": "B",
                        "text": "Compromiso inflamatorio y espasmo reflejo del músculo pterigoideo interno (medial)."
                  },
                  {
                        "id": "C",
                        "text": "Luxación traumática de la articulación temporomandibular."
                  },
                  {
                        "id": "D",
                        "text": "Compresión directa del tronco del nervio trigémino en la fosa media."
                  },
                  {
                        "id": "E",
                        "text": "Trombosis de la arteria carótida externa ipsilateral."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. El trismus en las infecciones faríngeas profundas se debe a la inflamación por contigüidad, espasmo e hipertonía refleja de los músculos masticadores, específicamente del músculo pterigoideo interno (o medial), el cual se sitúa inmediatamente lateral al músculo constrictor superior de la faringe y al espacio periamigdalino.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.01.2.001"
      },
      {
            "stem": "Un paciente de 55 años con antecedentes de mala higiene dental consulta por aumento de volumen cervical anterior y submandibular bilateral de consistencia dura 'en madera', con dolor intenso. Al examen físico destaca fiebre, dificultad respiratoria, incapacidad para tragar la saliva y elevación forzada de la lengua que se encuentra empujada hacia el paladar y hacia atrás. ¿Cuál es la prioridad absoluta en el manejo médico inmediato de este paciente?",
            "options": [
                  {
                        "id": "A",
                        "text": "Extracción inmediata en box de las piezas dentarias cariadas bajo anestesia local."
                  },
                  {
                        "id": "B",
                        "text": "Asegurar y proteger la vía aérea de forma precoz (intubación guiada o traqueostomía)."
                  },
                  {
                        "id": "C",
                        "text": "Administración de corticoides orales en altas dosis y reposo en domicilio."
                  },
                  {
                        "id": "D",
                        "text": "Solicitud de radiografía panorámica dental ambulatoria."
                  },
                  {
                        "id": "E",
                        "text": "Punción evacuadora con trocar en el piso de la boca sin anestesia."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. El paciente presenta una Angina de Ludwig, una celulitis gangrenosa rápidamente progresiva de los espacios submandibular, sublingual y submentoniano originada típicamente a partir de focos odontogénicos inferiores. El signo de máxima alarma es la induración leñosa del piso de boca que eleva y propulsa la lengua hacia la orofaringe posterior, causando una obstrucción mecánica inminente y letal de la vía aérea superior. La prioridad clínica número uno indiscutida es el aseguramiento expedito de la vía aérea (mediante intubación con fibrobroncoscopio o traqueostomía de urgencia), antes de intentar cualquier procedimiento quirúrgico de drenaje o exámenes complementarios.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.01.2.001"
      }
]
  },
  {
    "id": "orl-15",
    "classId": "orl-15",
    "tier": 2,
    "blockNum": 4,
    "blockName": "Faringe, Laringe & Vía Aérea Superior",
    "topicLabel": "14.15",
    "title": "Hipertrofia Adenotonsilar y SAHOS Infantil: Indicaciones Quirúrgicas",
    "perfilCode": "4.01.2.004",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Especialista",
    "ges": "Sin garantía GES específica",
    "reconstrucciones": "EUNACOM Diciembre 2017 (Q#76) · EUNACOM Julio 2021 (Q#12)",
    "frecuencia": "Alta rentabilidad · 2 preguntas por examen: síndrome del respirador bucal/facies adenoidea, criterios de Paradise para amigdalectomía e indicación absoluta en SAHOS infantil",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico y Criterios Quirúrgicos en Hipertrofia Adenotonsilar y SAHOS",
    "diagram": flow("Algoritmo Diagnóstico y Criterios Quirúrgicos en Hipertrofia Adenotonsilar y SAHOS", [
      {
            "t": "Niño con Respiración Bucal, Ronquidos y Pausas Apneicas Nocturnas",
            "s": [
                  "Evaluación del sueño por los padres y examen físico orofaríngeo"
            ],
            "type": "acc"
      },
      {
            "al": "Evaluación Clínica y Estudio Radiológico del Cavum",
            "w": 460
      },
      {
            "k": "split",
            "q": "¿Presencia de apneas presenciadas, sudoración nocturna o retraso ponderal?",
            "s": "Sospecha fundada de SAHOS Infantil Severo",
            "ll": "Sí: Sospecha de SAHOS significativo",
            "rl": "No: Ronquido primario simple sin apneas",
            "left": {
                  "t": "SAHOS Infantil Documentado",
                  "s": "Polisomnografía (IAH ≥ 1-5 ev/h) o clínica cardinal severa",
                  "type": "crit"
            },
            "right": {
                  "t": "Hipertrofia Adenotonsilar Moderada",
                  "s": "Rx de cavum (Índice de Fujioka) · Corticoides nasales",
                  "type": "acc"
            }
      },
      {
            "al": "Indicación Quirúrgica Absoluta",
            "from": "left",
            "w": 460
      },
      {
            "t": "Adenoamigdalectomía Quirúrgica (Indicación Absoluta)",
            "s": [
                  "1ª Indicación Absoluta de Adenoamigdalectomía en la infancia",
                  "Restaura la permeabilidad de la vía aérea superior y normaliza el sueño",
                  "Previene cor pulmonale crónico e hipertrofia ventricular derecha"
            ],
            "type": "acc"
      }
]),
    "contexto": "La hipertrofia del tejido linfoide del anillo de Waldeyer (amígdalas palatinas y adenoides) es la causa principal de obstrucción de la vía aérea superior en pediatría. En el EUNACOM se evalúa de manera prioritaria la indicación quirúrgica absoluta de adenoamigdalectomía en el Síndrome de Apnea-Hipoapnea Obstructiva del Sueño (SAHOS) infantil para prevenir el cor pulmonale y alteraciones del neurodesarrollo, así como el conocimiento riguroso de los criterios de Paradise para la amigdalectomía por infecciones bacterianas recurrentes.",
    "contentSections": [
      {
            "subhead": "1. Fisiopatología del Respirador Bucal y Facies Adenoidea",
            "paragraphs": [
                  "El <strong>anillo linfático de Waldeyer</strong> alcanza su mayor desarrollo inmunológico fisiológico entre los 2 y los 6 años de edad. Cuando la proliferación de las adenoides (amígdala faríngea en el cavum) y de las amígdalas palatinas es desproporcionada, produce una obstrucción mecánica fija de la vía aerodigestiva superior.",
                  "La respiración bucal crónica condiciona una alteración del desarrollo craneofacial conocida como <strong>Facies Adenoidea</strong>: rostro alargado y estrecho, boca constantemente entreabierta, labio superior corto y retraído, labio inferior evertido, paladar ojival alto, micrognatia mandibular, maloclusión dentaria clase II y ojeras oscuras crónicas por estasis venosa."
            ]
      },
      {
            "subhead": "2. SAHOS Infantil: Criterios Clínicos y Consecuencias Sistémicas",
            "paragraphs": [
                  "El <strong>Síndrome de Apnea-Hipoapnea Obstructiva del Sueño (SAHOS)</strong> en niños se caracteriza por episodios recurrentes de obstrucción parcial prolongada o colapso completo intermitente de la vía aérea superior durante el sueño. Se manifiesta por <strong>ronquido nocturno ruidoso, pausas respiratorias audibles seguidas de ronquido de rescate, sueño inquieto y fragmentado, sudoración nocturna profusa, enuresis secundaria</strong> y posturas anormales para dormir (hiperextensión del cuello).",
                  "A diferencia del adulto (que suele presentar hipersomnolencia diurna marcada), los niños con SAHOS manifiestan frecuentemente <strong>hiperactividad paradójica, irritabilidad diurna, dificultades de concentración y bajo rendimiento escolar</strong> (a menudo diagnosticados erróneamente como TDAH), asociados a retraso pondoestatural por gasto calórico aumentado y disminución de la secreción nocturna de hormona de crecimiento. En casos graves y prolongados, la hipoxemia alveolar nocturna y la hipercapnia desencadenan vasoconstricción pulmonar refleja y <strong>Cor Pulmonale crónico con hipertrofia ventricular derecha</strong>."
            ]
      },
      {
            "subhead": "3. Indicaciones de Amigdalectomía y Criterios de Paradise",
            "paragraphs": [
                  "Las indicaciones quirúrgicas de amigdalectomía y adenoidectomía se clasifican en absolutas y relativas:",
                  "<strong>Indicaciones Absolutas:</strong>",
                  "1. <strong>SAHOS infantil documentado o hipertrofia amigdalina severa (Grado 4: 'amígdalas en beso')</strong> que produce apneas del sueño obstructivas, cor pulmonale o alteraciones graves del crecimiento craneofacial.",
                  "2. <strong>Sospecha fundada de neoplasia maligna amigdalina unilateral</strong> (asimetría amigdalina marcada, ulceración, induración pétrea por sospecha de Linfoma o Carcinoma).",
                  "3. <strong>Hemorragia amigdalina severa recurrente</strong>.",
                  "<strong>Indicaciones Relativas (Infecciones Recurrentes / Criterios de Paradise):</strong>",
                  "Se indica amigdalectomía por infecciones bacterianas cuando se cumplen los <strong>Criterios de Paradise</strong> (episodios de faringoamigdalitis bien documentados clínicamente, con fiebre > 38.3°C, exudado o cultivo positivo para SBHGA, y tratados adecuadamente con antibióticos):",
                  "• <strong>≥ 7 episodios documentados en el último año</strong>, O",
                  "• <strong>≥ 5 episodios al año durante los últimos 2 años consecutivos</strong>, O",
                  "• <strong>≥ 3 episodios al año durante los últimos 3 años consecutivos</strong>.",
                  "Otras indicaciones relativas son: antecedente de dos abscesos periamigdalinos previos o amigdalitis hemorrágica."
            ]
      }
],
    "table": {
      "title": "Escala de Brodsky para Clasificación de la Hipertrofia de Amígdalas Palatinas",
      "headers": [
            "Grado de Brodsky",
            "Obstrucción de la Vía Aérea",
            "Hallazgo Físico en Orofaringe",
            "Relevancia Quirúrgica"
      ],
      "rows": [
            [
                  "Grado 0",
                  "0% (Amígdalas ausentes)",
                  "Amigdalectomía previa o amígdalas en fosas profundas",
                  "Sin repercusión clínica"
            ],
            [
                  "Grado 1",
                  "< 25% de la orofaringe",
                  "Amígdalas confinadas a las fosas amigdalinas",
                  "Normal fisiológico"
            ],
            [
                  "Grado 2",
                  "25 a 50% de la orofaringe",
                  "Amígdalas sobrepasan los pilares anteriores pero no tocan línea media",
                  "Común en niños · Observación"
            ],
            [
                  "Grado 3",
                  "50 a 75% de la orofaringe",
                  "Amígdalas ocupan más de la mitad del espacio orofaríngeo",
                  "Frecuente respirador bucal · Evaluar SAHOS"
            ],
            [
                  "Grado 4",
                  "> 75% ('Amígdalas en beso')",
                  "Amígdalas se tocan entre sí en la línea media",
                  "ALTA indicación quirúrgica por riesgo de apneas obstructivas"
            ]
      ]
},
    "severityTable": null,
    "treatmentTable": null,
    "vignette": "Un preescolar de 4 años es traído al policlínico por sus padres debido a ronquidos ruidosos todas las noches y respiración con la boca abierta. La madre relata angustiada que en las noches observa cómo el niño deja de respirar por lapsos de 10 a 15 segundos, tras lo cual emite un ronquido áspero de esfuerzo y se mueve bruscamente en la cama, despertando con la almohada empapada de sudor. Durante el día es sumamente irritable, hiperactivo y en el jardín infantil no logra concentrarse. Al examen físico destaca un niño delgado, con ojeras prominentes, puente nasal ancho, mordida abierta anterior y presencia de amígdalas palatinas gigantescas que se contactan en la línea media (Grado 4 de Brodsky, 'amígdalas en beso'), dejando una luz faríngea mínima.",
    "explicacion": "El cuadro clínico es patognomónico de un Síndrome de Apnea-Hipoapnea Obstructiva del Sueño (SAHOS) infantil severo secundario a hipertrofia adenotonsilar grado 4 ('amígdalas en beso'). La presencia de pausas apneicas presenciadas, sudoración nocturna, sueño fragmentado y alteraciones del comportamiento diurno (hiperactividad e irritabilidad) son altamente concordantes. El SAHOS pediátrico constituye la primera y más clara indicación quirúrgica absoluta de Adenoamigdalectomía en la infancia. La corrección quirúrgica desobstruye de forma inmediata la vía aérea superior, erradica las apneas obstructivas, previene el desarrollo de cor pulmonale crónico y revierte las alteraciones de conducta y retraso del crecimiento.",
    "keyPoints": [
      "La hipertrofia adenotonsilar es la causa más común de SAHOS en niños entre 2 y 6 años.",
      "El SAHOS infantil se manifiesta por ronquido nocturno, apneas presenciadas, sudoración y facies adenoidea.",
      "A diferencia del adulto, los niños con SAHOS presentan hiperactividad e irritabilidad diurna más que somnolencia.",
      "El SAHOS infantil severo es la indicación absoluta número uno de adenoamigdalectomía quirúrgica.",
      "Las amígdalas grado 4 de Brodsky ('amígdalas en beso') se tocan entre sí en la línea media ocluyendo > 75% de la vía aérea.",
      "Los criterios de Paradise para amigdalectomía por infecciones son: ≥ 7 en 1 año, ≥ 5/año en 2 años, o ≥ 3/año en 3 años.",
      "Una asimetría amigdalina progresiva indolora en un adulto obliga a descartar linfoma o carcinoma epidermoide."
],
    "questions": [
      {
            "stem": "Un niño de 5 años presenta ronquidos nocturnos de 6 meses de evolución y pausas respiratorias nocturnas documentadas por sus padres de hasta 15 segundos con despertares sobresaltados y sudoración profusa. En el día respira con la boca abierta y presenta retraso pondoestatural. Al examen orofaríngeo se observan amígdalas palatinas grado 4 de Brodsky que contactan en la línea media. ¿Cuál es la conducta médica de elección más indicada?",
            "options": [
                  {
                        "id": "A",
                        "text": "Tratamiento prolongado con antibióticos orales profilácticos por 6 meses."
                  },
                  {
                        "id": "B",
                        "text": "Indicación quirúrgica de adenoamigdalectomía bilateral."
                  },
                  {
                        "id": "C",
                        "text": "Uso exclusivo de descongestionantes nasales tópicos nocturnos."
                  },
                  {
                        "id": "D",
                        "text": "Observación expectante hasta los 12 años esperando la involución fisiológica espontánea."
                  },
                  {
                        "id": "E",
                        "text": "Tratamiento con estimulantes del sistema nervioso central para la hiperactividad."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. El paciente presenta un Síndrome de Apnea Obstructiva del Sueño (SAHOS) infantil severo con repercusión en el desarrollo físico y amígdalas grado 4 que colapsan la orofaringe. El SAHOS pediátrico documentado secundario a hipertrofia de amígdalas y adenoides es la indicación quirúrgica absoluta indiscutida de adenoamigdalectomía. Postergar la intervención quirúrgica (opción D) expone al niño a fallo de medro, alteraciones ortodóncicas craneofaciales irreversibles y riesgo de hipertensión pulmonar / cor pulmonale crónico.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.01.2.004"
      },
      {
            "stem": "¿Cuál de las siguientes situaciones clínicas constituye una indicación formal para considerar una amigdalectomía quirúrgica en un paciente pediátrico de acuerdo con los criterios de Paradise?",
            "options": [
                  {
                        "id": "A",
                        "text": "Haber presentado 2 episodios de amigdalitis bacteriana en el último año."
                  },
                  {
                        "id": "B",
                        "text": "Presentar 7 episodios documentados de faringoamigdalitis bacteriana en el último año tratados con antibióticos."
                  },
                  {
                        "id": "C",
                        "text": "Presentar ronquido nasal esporádico únicamente durante los resfriados comunes."
                  },
                  {
                        "id": "D",
                        "text": "Presencia de placas de caseum amigdalino fétido en criptas sin fiebre ni odinofagia."
                  },
                  {
                        "id": "E",
                        "text": "Un único episodio de amigdalitis viral asociada a conjuntivitis por adenovirus."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. Los Criterios de Paradise definen la indicación quirúrgica relativa de amigdalectomía por infecciones recurrentes basándose en una frecuencia mínima rigurosa de episodios bacterianos febriles documentados: ≥ 7 episodios en el último año; o ≥ 5 episodios por año durante 2 años consecutivos; o ≥ 3 episodios por año durante 3 años consecutivos. La caseosis amigdalina (opción D) es un cuadro benigno que no justifica cirugía resectiva de rutina.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.01.2.004"
      }
]
  },
  {
    "id": "orl-16",
    "classId": "orl-16",
    "tier": 2,
    "blockNum": 4,
    "blockName": "Faringe, Laringe & Vía Aérea Superior",
    "topicLabel": "14.16",
    "title": "Disfonía Crónica y Patología Benigna de Cuerdas Vocales: Nódulos, Pólipos y Edema de Reinke",
    "perfilCode": "4.02.5.004",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Especialista",
    "ges": "Sin garantía GES específica",
    "reconstrucciones": "EUNACOM Diciembre 2018 (Q#44) · EUNACOM Julio 2021 (Q#33)",
    "frecuencia": "Alta rentabilidad · 2 preguntas por examen: la bandera roja de disfonía > 3 semanas que exige nasofibroscopía/laringoscopía, el manejo fonoaudiológico de nódulos bilaterales vs cirugía del pólipo unilateral",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico y Conducta en Disfonía Crónica y Lesiones Benignas de Cuerdas Vocales",
    "diagram": flow("Algoritmo Diagnóstico y Conducta en Disfonía Crónica y Lesiones Benignas de Cuerdas Vocales", [
      {
            "t": "Paciente con Disfonía / Voz Ronca o Áspera > 2 a 3 Semanas",
            "s": [
                  "Regla de Oro: Toda disfonía > 3 semanas exige laringoscopía directa / nasofibroscopía"
            ],
            "type": "acc"
      },
      {
            "al": "Examen Laringoscópico de Cuerdas Vocales",
            "w": 460
      },
      {
            "k": "split",
            "q": "¿Hallazgo laringoscópico en el borde libre de las cuerdas vocales?",
            "s": "Diferenciación anatómica de patología laríngea benigna vs maligna",
            "ll": "Lesiones benignas características",
            "rl": "Masa vegetante, exofítica, ulcerada o fija",
            "left": {
                  "t": "Patología Benigna Fonotraumática",
                  "s": "Nódulos vs Pólipos vs Edema de Reinke",
                  "type": "acc"
            },
            "right": {
                  "t": "Alarma de Cáncer de Laringe",
                  "s": "Biopsia urgente por ORL · Tabaquismo crónico",
                  "type": "crit"
            }
      },
      {
            "al": "Estratificación de Lesiones Benignas Fonatorias",
            "from": "left",
            "w": 460
      },
      {
            "k": "split",
            "q": "¿Lesiones bilaterales y simétricas vs Lesión unilateral pediculada?",
            "s": "Nódulos en unión de 1/3 anterior con 2/3 posteriores vs Pólipo",
            "ll": "Bilaterales simétricas en profesora/cantante",
            "rl": "Unilateral tras sobreesfuerzo vocal agudo",
            "left": {
                  "t": "Nódulos Vocales ('Callos')",
                  "s": "Tratamiento: Terapia Fonoaudiológica (¡No cirugía inicial!)",
                  "type": "acc"
            },
            "right": {
                  "t": "Pólipo Vocal",
                  "s": "Microcirugía de laringe (Fonocirugía)",
                  "type": "warn"
            }
      }
]),
    "contexto": "La disfonía es una causa común de consulta en atención ambulatoria. El médico debe manejar con precisión dos preceptos fundamentales evaluados en el EUNACOM: (1) La 'Bandera Roja' de que toda disfonía persistente por más de 15 a 20 días en un adulto (especialmente si es fumador) exige visualización directa de la laringe para descartar cáncer escamoso; y (2) La diferenciación de las lesiones benignas de la mucosa de la cuerda vocal: los nódulos son bilaterales simétricos y se tratan con rehabilitación fonoaudiológica (la cirugía está desaconsejada de inicio); los pólipos son unilaterales y requieren resección quirúrgica; y el edema de Reinke es propio de mujeres fumadoras con voz grave.",
    "contentSections": [
      {
            "subhead": "1. Regla de Oro en Disfonía y Banderas Rojas Neoplásicas",
            "paragraphs": [
                  "Se define <strong>disfonía</strong> como la alteración en una o más de las cualidades acústicas de la voz (tono, timbre, intensidad o fatiga vocal). La inmensa mayoría de las disfonías agudas (< 2 semanas) son laringitis virales o fonotraumáticas autolimitadas.",
                  "<strong>Regla de Oro EUNACOM:</strong> Toda disfonía que se prolongue por <strong>más de 2 a 3 semanas de evolución</strong> debe ser considerada sospechosa de neoplasia maligna de cuerda vocal (carcinoma epidermoide de laringe) hasta demostrar lo contrario, siendo <strong>mandatoria la realización de una telelaringoscopía rígida o nasofibroscopía flexible</strong> por el especialista otorrinolaringólogo. Los factores de riesgo de máxima alarma son el tabaquismo activo prolongado y el consumo de alcohol."
            ]
      },
      {
            "subhead": "2. Nódulos Vocales: Los 'Callos' de la Voz y su Manejo Fonoaudiológico",
            "paragraphs": [
                  "Los <strong>nódulos de cuerda vocal</strong> son las lesiones benignas más frecuentes en profesionales de la voz (profesoras de educación básica, educadoras de párvulos, cantantes, monitores). Se producen por un <strong>microtraumatismo fonatorio repetido y crónico</strong> (abuso o mal uso vocal), que genera edema y posterior hialinización fibrosa en el punto de máximo impacto mecánico vibratorio.",
                  "<strong>Laringoscopía:</strong> Se observan como <strong>engrosamientos o nódulos blanquecinos o rosados, típicamente BILATERALES y SIMÉTRICOS, localizados en la unión del tercio anterior con los dos tercios posteriores del borde libre de ambas cuerdas vocales</strong>. Impiden el cierre glótico completo ('cierre en reloj de arena'), provocando voz soplada y escape de aire.",
                  "<strong>Tratamiento de Elección:</strong> El pilar terapéutico de primera línea es la <strong>Rehabilitación Fonoaudiológica (terapia de la voz)</strong> para reeducar la técnica fonatoria y eliminar el sobresfuerzo. <em>La cirugía inicial está formalmente contraindicada</em>, ya que si no se corrige el vicio de emisión vocal, los nódulos recidivan invariablemente. La microcirugía laríngea solo se reserva para nódulos fibrosos antiguos refractarios a foniatría prolongada."
            ]
      },
      {
            "subhead": "3. Pólipo Vocal y Edema de Reinke: Características y Cirugía",
            "paragraphs": [
                  "<strong>Pólipo de Cuerda Vocal:</strong> Es una lesión benigna pediculada o sésil, casi invariablemente <strong>UNILATERAL</strong>, que se desarrolla en el espacio de Reinke tras un <strong>traumatismo vocal agudo violento</strong> (un grito desgarrador, un acceso violento de tos o cantar forzado), con rotura de un capilar submucoso y formación de un hematoma organizado. Provoca disfonía constante con voz bitonal o diplofonía. A diferencia de los nódulos, el pólipo <strong>NO responde a la terapia fonoaudiológica y su tratamiento de elección es la Microcirugía Laríngea (Fonocirugía)</strong> para exéresis de la lesión, complementada posteriormente con fonoaudiología.",
                  "<strong>Edema de Reinke:</strong> Es una degeneración polipoidea difusa caracterizada por el acúmulo de líquido mucoide gelatinoso en todo el espacio de Reinke (lámina propia superficial) de ambas cuerdas vocales. Ocurre casi exclusivamente en <strong>mujeres adultas o mayores con tabaquismo crónico intenso</strong> asociado a reflujo faringolaríngeo y sobreesfuerzo vocal. Clínicamente se manifiesta como una <strong>voz marcadamente grave, áspera y virilizada ('voz de tabernero')</strong>, que en grados avanzados causa disnea y estridor por colapso glótico. El tratamiento requiere el <strong>abandono radical del hábito tabáquico</strong> (el tabaco perpetúa el edema) y <strong>decorticación quirúrgica de cuerdas vocales (cordotomía y aspiración del exudado gelatinoso)</strong>."
            ]
      }
],
    "table": {
      "title": "Diagnóstico Diferencial: Nódulos Vocales vs Pólipo Vocal vs Edema de Reinke",
      "headers": [
            "Lesión de Cuerda Vocal",
            "Lateralidad y Ubicación",
            "Población y Causa Principal",
            "Tratamiento de Elección"
      ],
      "rows": [
            [
                  "Nódulos Vocales",
                  "BILATERALES y simétricos · Unión 1/3 anterior con 2/3 posteriores",
                  "Profesores, cantantes · Mal uso y abuso vocal crónico",
                  "REHABILITACIÓN FONOAUDIOLÓGICA (Cirugía inicialmente desaconsejada)"
            ],
            [
                  "Pólipo Vocal",
                  "UNILATERAL · Pediculado o sésil en borde libre",
                  "Hombres adultos · Esfuerzo vocal agudo violento (grito)",
                  "MICROCIRUGÍA LARÍNGEA (Fonocirugía) + Fonoaudiología postoperatoria"
            ],
            [
                  "Edema de Reinke",
                  "Bilateral difuso · Cuerdas vocales gelatinosas abombadas",
                  "Mujeres fumadoras crónicas severas · Reflujo ácido",
                  "Cese estricto del tabaco + Decorticación quirúrgica / Aspiración"
            ],
            [
                  "Úlcera / Granuloma de Contacto",
                  "Unilateral o bilateral sobre la apófisis vocal del aritenoides",
                  "Intubación endotraqueal previa traumática o reflujo severo",
                  "Inhibidores de bomba de protones (Omeprazol) + Reposo vocal"
            ]
      ]
},
    "severityTable": null,
    "treatmentTable": null,
    "vignette": "Una profesora de enseñanza básica de 32 años consulta por disfonía progresiva de 3 meses de evolución que empeora notoriamente los viernes al finalizar la jornada laboral y mejora parcialmente durante los fines de semana. Refiere que siente fatiga al hablar y que su voz se escucha 'soplada' y sin volumen. No fuma ni consume alcohol. Al examen otorrinolaringológico mediante nasofibroscopía se visualizan ambas cuerdas vocales móviles, apreciándose dos pequeñas lesiones blanquecinas puntiformes bien delimitadas, ubicadas de forma estrictamente simétrica y enfrentada en la unión del tercio anterior con los dos tercios posteriores del borde libre de ambas cuerdas vocales, las cuales contactan impidiendo el cierre glótico completo.",
    "explicacion": "El cuadro clínico y los hallazgos laringoscópicos son característicos de Nódulos de Cuerdas Vocales bilaterales. El perfil epidemiológico (profesora de básica con sobreesfuerzo vocal continuo), la fluctuación de los síntomas y la localización clásica en espejo sobre la unión del tercio anterior con los dos tercios posteriores del borde libre confirman la génesis fonotraumática ('callosidades vocales'). La conducta terapéutica de primera línea mandataria es la derivación a Terapia de Rehabilitación Fonoaudiológica para corregir la técnica vocal, enseñar higiene fonatoria y eliminar el sobreesfuerzo muscular. La extirpación quirúrgica no está indicada como abordaje inicial porque si la paciente no aprende la técnica fonatoria correcta, las lesiones recidivan rápidamente.",
    "keyPoints": [
      "Toda disfonía que dure más de 2 a 3 semanas exige laringoscopía para descartar cáncer escamoso de laringe.",
      "Los nódulos vocales son bilaterales y simétricos, localizados en la unión del tercio anterior con los dos tercios posteriores.",
      "El tratamiento de primera línea de los nódulos vocales es la TERAPIA FONOAUDIOLÓGICA (no la cirugía).",
      "El pólipo vocal es unilateral y requiere microcirugía laríngea resectiva.",
      "El edema de Reinke produce voz grave 'de hombre' en mujeres con tabaquismo crónico masivo; se trata con cese del tabaco y cirugía.",
      "El granuloma de contacto se localiza en la apófisis vocal posterior del cartílago aritenoides, asociado a intubación previa o RGE.",
      "La parálisis de cuerda vocal unilateral en posición paramediana orienta a lesión del nervio laríngeo recurrente (sospechar cáncer de tiroides o pulmón)."
],
    "questions": [
      {
            "stem": "Una educadora de párvulos de 28 años consulta por disfonía crónica de 4 meses de evolución que se acentúa en las tardes. No fuma. La nasofibroscopía revela la presencia de dos lesiones nodulares blanquecinas pequeñas, bilaterales y simétricas, ubicadas en el borde libre de ambas cuerdas vocales en la unión del tercio anterior con los dos tercios posteriores, que provocan un defecto de cierre glótico en reloj de arena. ¿Cuál es el tratamiento de primera línea más adecuado?",
            "options": [
                  {
                        "id": "A",
                        "text": "Microcirugía laríngea con láser de CO2 inmediata."
                  },
                  {
                        "id": "B",
                        "text": "Terapia de rehabilitación fonoaudiológica y pautas de higiene vocal."
                  },
                  {
                        "id": "C",
                        "text": "Ciclo de corticoides orales en dosis altas por 21 días."
                  },
                  {
                        "id": "D",
                        "text": "Inyección de toxina botulínica en el músculo tiroaritenoideo bilateral."
                  },
                  {
                        "id": "E",
                        "text": "Reposo vocal absoluto (mutismo) prolongado por 6 meses seguidos."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. La paciente presenta nódulos vocales bilaterales típicos, producidos por el impacto repetitivo y sobreesfuerzo vocal continuado propio de su profesión docente. El tratamiento de primera línea de consenso indiscutido es la Rehabilitación Fonoaudiológica integral, orientada a corregir la hiperfunción laríngea y mejorar la técnica respiratoria y de impostación de la voz, logrando la remisión de los nódulos en la mayoría de los casos. La cirugía resectiva (opción A) está desaconsejada como manejo inicial por riesgo de fibrosis y cicatrización de la cuerda vocal y porque presenta una altísima tasa de recidiva si no se corrigen los malos hábitos fonatorios de base.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.5.004"
      },
      {
            "stem": "Un hombre de 62 años, fumador activo de 40 paquetes/año y consumidor habitual de alcohol, consulta en el centro de salud por disfonía progresiva e indolora de 6 semanas de evolución. No ha presentado fiebre, tos ni síntomas de reflujo. ¿Cuál es la conducta inmediata que debe adoptar el médico general?",
            "options": [
                  {
                        "id": "A",
                        "text": "Indicar reposo de la voz y omeprazol oral 40 mg al día por 1 mes para prueba terapéutica de reflujo."
                  },
                  {
                        "id": "B",
                        "text": "Solicitar interconsulta prioritaria a otorrinolaringología para visualización de cuerdas vocales mediante laringoscopía o nasofibroscopía."
                  },
                  {
                        "id": "C",
                        "text": "Prescribir amoxicilina con ácido clavulánico oral por 10 días ante sospecha de laringitis bacteriana."
                  },
                  {
                        "id": "D",
                        "text": "Tranquilizar al paciente explicando que se trata de cambios vocales seniles fisiológicos propios de la edad."
                  },
                  {
                        "id": "E",
                        "text": "Indicar nebulizaciones con suero fisiológico y corticoides inhalados por 2 semanas."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. Constituye una 'Regla de Oro' oncológica en otorrinolaringología: toda disfonía que persista por más de 2 a 3 semanas de evolución, y de manera crucial en un paciente mayor de 40 a 50 años con factores de riesgo mayores como tabaquismo crónico y consumo de alcohol, debe considerarse sospechosa de Cáncer de Cuerda Vocal (carcinoma epidermoide de laringe) hasta demostrar lo contrario. Es mandatoria la derivación prioritaria a ORL para examen laringoscópico directo / nasofibroscópico que permita visualizar las cuerdas vocales y tomar biopsia de cualquier lesión proliferativa, leucoplaquia o ulceración. Asumir reflujo o laringitis y dar tratamientos de prueba sin mirar la laringe (opciones A y C) retrasa de forma negligente el diagnóstico de una neoplasia curable en estadios precoces.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.5.004"
      }
]
  },
  {
    "id": "orl-17",
    "classId": "orl-17",
    "tier": 3,
    "blockNum": 4,
    "blockName": "Faringe, Laringe & Vía Aérea Superior",
    "topicLabel": "14.17",
    "title": "Croup / Laringitis Obstructiva vs Epiglotitis Aguda: Escala de Taussig y Manejo de Emergencia",
    "perfilCode": "4.02.5.004",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "Sin garantía GES específica · Ley de Urgencias médica en obstrucción laríngea severa",
    "reconstrucciones": "EUNACOM Diciembre 2017 (Q#28) · EUNACOM Julio 2019 (Q#72) · EUNACOM Diciembre 2021 (Q#39) · EUNACOM Diciembre 2023 (Q#15)",
    "frecuencia": "Altísima rentabilidad · 3 a 4 preguntas por examen: laringitis obstructiva aguda (tos perruna, estridor), escala de Taussig, dexametasona en todos los casos y adrenalina racémica en estridor de reposo vs epiglotitis aguda (prohibido bajar la lengua)",
    "svg": null,
    "algoTitle": "Algoritmo de Diagnóstico y Manejo de Emergencia en Laringitis Obstructiva Aguda (Croup)",
    "diagram": flow("Algoritmo de Diagnóstico y Manejo de Emergencia en Laringitis Obstructiva Aguda (Croup)", [
      {
            "t": "Niño con Tos Perruna / Metálica, Estridor Inspiratorio y Disfonía",
            "s": [
                  "Evaluación del estridor: ¿solo con llanto/agitación o presente en reposo?"
            ],
            "type": "acc"
      },
      {
            "al": "Estratificación de Gravedad según Escala de Taussig Modificada",
            "w": 460
      },
      {
            "k": "split",
            "q": "¿Aspecto tóxico, sialorrea, disfagia y posición de trípode?",
            "s": "Diferenciación crítica: Croup Viral vs Epiglotitis Aguda",
            "ll": "Sí: Sospecha de Epiglotitis Aguda",
            "rl": "No: Croup Viral Clásico (Laringitis Aguda)",
            "left": {
                  "t": "EMERGENCIA: Epiglotitis Aguda",
                  "s": "¡PROHIBIDO BAJALENGUAS! · Vía aérea quirúrgica en pabellón",
                  "type": "crit"
            },
            "right": {
                  "t": "Croup Laringotraqueal (Parainfluenza)",
                  "s": "Estratificar puntaje de Taussig",
                  "type": "acc"
            }
      },
      {
            "al": "Clasificación de Taussig en Croup Viral",
            "from": "right",
            "w": 460
      },
      {
            "k": "split",
            "q": "¿Estridor presente en reposo y retracción torácica moderada-severa?",
            "s": "Taussig Grado I (Leve: sin estridor en reposo) vs Grado II-III (Moderado-Grave)",
            "ll": "Grado I: Leve (estridor solo agitado)",
            "rl": "Grado II-III: Moderado a Severo (estridor en reposo)",
            "left": {
                  "t": "Croup Leve (Taussig I)",
                  "s": "Dexametasona oral 0.15-0.6 mg/kg dosis única · Manejo ambulatorio",
                  "type": "acc"
            },
            "right": {
                  "t": "Croup Moderado a Grave (Taussig II-III)",
                  "s": "Dexametasona EV/oral + Adrenalina corriente nebulizada 4 mL (1:1000)",
                  "type": "warn"
            }
      },
      {
            "al": "Observación Post-Nebulización con Adrenalina",
            "from": "right",
            "w": 460
      },
      {
            "t": "Observación en Urgencia Mínimo 2 a 4 Horas",
            "s": [
                  "Descartar efecto rebote de la adrenalina tras 2 horas",
                  "Si remite el estridor en reposo: alta con corticoides orales",
                  "Si persiste estridor en reposo o hipoxemia: hospitalizar"
            ],
            "type": "acc"
      }
]),
    "contexto": "La laringitis aguda obstructiva (croup) es la causa más común de obstrucción respiratoria alta aguda en pediatría. En el EUNACOM se evalúan de forma invariable dos dominios clínicos: (1) El manejo farmacológico del croup según la escala de Taussig: el uso mandatorio de Dexametasona (0.15-0.6 mg/kg) en todos los pacientes (incluso leves), sumado a la Adrenalina racémica o corriente nebulizada ante estridor de reposo, con observación por 2 horas para descartar efecto rebote; y (2) El diagnóstico de la Epiglotitis Aguda, cuadro bacteriano fulminante donde está terminantemente prohibido utilizar bajalenguas por riesgo de espasmo laríngeo fatal.",
    "contentSections": [
      {
            "subhead": "1. Fisiopatología del Croup Viral y Triada Clínica",
            "paragraphs": [
                  "La <strong>Laringitis Obstructiva Aguda o Croup</strong> es una infección viral de la vía aérea subglótica que compromete la laringe y la tráquea (laringotraqueítis). El agente causal dominante en > 75-80% de los casos es el <strong>Virus Parainfluenza tipo 1</strong> (seguido de Parainfluenza tipo 2 y 3, VRS, Adenovirus y virus Influenza). Afecta predominantemente a niños entre los <strong>6 meses y los 3 años de edad</strong>, con pico de incidencia en otoño e invierno.",
                  "El edema inflamatorio se concentra en la <strong>región subglótica</strong> (delimitada por el anillo cartilaginoso cricoides inelástico). Debido a la ley de Poiseuille, una reducción de solo 1 mm del diámetro subglótico en un lactante reduce el área de la vía aérea en un 75% y multiplica la resistencia al flujo aéreo por 16.",
                  "<strong>Tríada Cardinal del Croup:</strong> (1) <strong>Tos perruna, seca o metálica</strong> ('tos de perro o de foca'); (2) <strong>Estridor inspiratorio</strong> rudo; y (3) <strong>Disfonía o afonía</strong>, típicamente precedidos de coriza y fiebre baja de 1 a 2 días."
            ]
      },
      {
            "subhead": "2. Escala de Taussig y Manejo Farmacológico Escalonado",
            "paragraphs": [
                  "La severidad de la obstrucción se estratifica mediante la <strong>Escala de Taussig Modificada</strong> (evalúa estridor, retracciones intercostales, entrada de aire, color de piel y estado de conciencia):",
                  "<strong>Grado I (Leve):</strong> Estridor inspiratorio ausente en reposo (solo audible al llorar o agitarse), tos perruna presente, retracciones mínimas o ausentes, murmullo vesicular simétrico. <em>Conducta:</em> <strong>Dexametasona oral en dosis única de 0.15 a 0.6 mg/kg (máx 10-16 mg)</strong>. Alta a domicilio con analgesia y educación de signos de alarma.",
                  "<strong>Grado II (Moderado):</strong> <strong>Estridor inspiratorio continuo audible en reposo</strong>, tiraje supraesternal e intercostal evidente pero sin aleteo nasal ni cianosis. <em>Conducta:</em> <strong>Dexametasona oral o EV (0.6 mg/kg) + Nebulización con Adrenalina corriente (1:1.000) 4 a 5 mL (o adrenalina racémica al 2.25% 0.5 mL en 3 mL de suero)</strong> con oxígeno a flujo alto (4-6 L/min).",
                  "<strong>Grado III (Severo):</strong> Estridor inspiratorio y espiratorio marcado en reposo, tiraje severo con cabeceo y disnea intensa, disminución de la entrada de aire bilateral, irritabilidad o agitación psicomotora. <em>Conducta:</em> Adrenalina nebulizada inmediata + Dexametasona EV + Oxígeno suplementario.",
                  "<strong>Grado IV (Agotamiento / Asfixia):</strong> Palidez, cianosis, disminución progresiva del estridor por colapso de la ventilación ('silencio auscultatorio'), depresión del sensorio o estupor. <em>Conducta:</em> Asistencia ventilatoria de emergencia e intubación orotraqueal con tubo endotraqueal medio número menor."
            ]
      },
      {
            "subhead": "3. Adrenalina Nebulizada, Efecto Rebote y Tiempo de Observación",
            "paragraphs": [
                  "La <strong>Adrenalina nebulizada</strong> ejerce una vasoconstricción alfa-1 adrenérgica arteriolar intensa en la mucosa capilar subglótica, disminuyendo el edema y reduciendo el estridor en menos de 10 a 30 minutos.",
                  "Sin embargo, su efecto clínico desaparece a las 2 horas. Puede ocurrir un <strong>efecto rebote (reaparición del edema y del estridor)</strong>. Por tanto, <strong>todo niño que recibe adrenalina nebulizada debe permanecer en observación médica en el servicio de urgencia durante un mínimo estricto de 2 a 4 horas</strong>. Si al cabo de 2-4 horas el niño se encuentra sin estridor en reposo, con buena entrada de aire y saturación normal, puede egresar gracias a que el corticoide (dexametasona) ya inició su efecto antiinflamatorio genómico sistémico (el cual inicia a las 2-3 horas y dura hasta 48-72 horas). Si persiste con estridor de reposo, debe hospitalizarse."
            ]
      },
      {
            "subhead": "4. Epiglotitis Aguda: Emergencia Quirúrgica y Regla de Oro",
            "paragraphs": [
                  "La <strong>Epiglotitis Aguda</strong> es una infección bacteriana invasiva y fulminante de la epiglotis y repliegues aritenoepiglóticos que amenaza la vida en cuestión de minutos por oclusión mecánica completa de la laringe.",
                  "El agente etiológico histórico clásico era <em>Haemophilus influenzae</em> tipo b (Hib). Gracias a la vacuna pentavalente del PNI, su incidencia se ha reducido drásticamente, siendo provocada actualmente por <em>Streptococcus pneumoniae</em>, <em>Streptococcus pyogenes</em> o <em>Staphylococcus aureus</em> en niños mayores (2 a 7 años) o adultos.",
                  "<strong>Clínica de Alarma:</strong> Instalación súbita e hiperaguda con <strong>fiebre alta muy tóxica (> 39-40°C), aspecto séptico, odinofagia intolerable que impide deglutir la saliva provocando sialorrea o babeo continuo, estridor inspiratorio apagado y postura en trípode</strong> (niño sentado, inclinado hacia adelante con el cuello en hiperextensión y la boca abierta para respirar). <strong>No hay tos perruna ni disfonía franca</strong>.",
                  "<strong>REGLA DE ORO VITAL EUNACOM:</strong> <em>¡ESTÁ FORMALMENTE PROHIBIDO UTILIZAR BAJALENGUAS O INTENTAR VISUALIZAR LA FARINGE!</em> La estimulación mecánica del reflejo nauseoso con un abatelenguas puede desencadenar un <strong>laringoespasmo fatal inmediato con paro cardiorrespiratorio</strong>. El paciente debe ser trasladado de inmediato al quirófano junto a un anestesiólogo o cirujano para intubación orotraqueal directa o traqueostomía de emergencia bajo anestesia inhalatoria, e iniciar Ceftriaxona endovenosa."
            ]
      }
],
    "table": {
      "title": "Diagnóstico Diferencial: Laringitis Obstructiva (Croup) vs Epiglotitis Aguda",
      "headers": [
            "Parámetro Clínico",
            "Laringitis Obstructiva Aguda (Croup)",
            "Epiglotitis Aguda Fulminante"
      ],
      "rows": [
            [
                  "Etiología Principal",
                  "Viral: Virus Parainfluenza tipo 1 (75%)",
                  "Bacteriana: H. influenzae tipo b, S. pyogenes, S. pneumoniae"
            ],
            [
                  "Edad Típica",
                  "6 meses a 3 años (pico en otoño/invierno)",
                  "2 a 7 años y adultos jóvenes"
            ],
            [
                  "Comienzo / Pródromo",
                  "Progresivo (1-2 días de coriza y febrícula)",
                  "Hiperagudo y fulminante (horas de evolución con fiebre alta)"
            ],
            [
                  "Tos y Voz",
                  "TOS PERRUNA áspera, disfonía marcada",
                  "AUSENCIA DE TOS; voz gangosa o apagada ('voz de papa caliente')"
            ],
            [
                  "Signos Patognomónicos",
                  "Estridor inspiratorio rudo con tos metálica",
                  "SIALORREA / BABEO continuo y POSTURA EN TRÍPODE"
            ],
            [
                  "Examen Físico Orofaríngeo",
                  "Faringe ligeramente congestiva (seguro de examinar)",
                  "¡TERMINANTEMENTE PROHIBIDO DEPRIMIR LA LENGUA!"
            ],
            [
                  "Tratamiento de Urgencia",
                  "Dexametasona oral/EV + Adrenalina nebulizada",
                  "Aseguramiento de vía aérea en quirófano + Ceftriaxona EV"
            ]
      ]
},
    "severityTable": {
      "title": "Escala de Taussig Modificada para Clasificación del Croup en Urgencia",
      "headers": [
            "Grado Clínico",
            "Estridor Inspiratorio",
            "Tiraje y Retracciones",
            "Entrada de Aire",
            "Conducta Terapéutica Inmediata"
      ],
      "rows": [
            [
                  "Grado I (Leve)",
                  "Solo con llanto o agitación física (ausente en reposo)",
                  "Ausente o tiraje subcostal leve",
                  "Normal y simétrica",
                  "Dexametasona oral 0.15-0.6 mg/kg dosis única · Manejo ambulatorio"
            ],
            [
                  "Grado II (Moderado)",
                  "Estridor audible en reposo continuo",
                  "Tiraje supraesternal e intercostal moderado",
                  "Levemente disminuida",
                  "Dexametasona oral/EV + Adrenalina nebulizada · Observación 2h"
            ],
            [
                  "Grado III (Severo)",
                  "Estridor inspiratorio y espiratorio marcado en reposo",
                  "Tiraje severo generalizado con aleteo y cabeceo",
                  "Marcadamente disminuida",
                  "Adrenalina nebulizada + Dexametasona EV + O2 · Hospitalización"
            ],
            [
                  "Grado IV (Agotamiento)",
                  "Disminuido por colapso inspiratorio (silencio)",
                  "Agotamiento respiratorio extremo",
                  "Apenas audible / Tórax silente",
                  "Intubación orotraqueal con tubo fino + Ventilación en UCI"
            ]
      ]
},
    "treatmentTable": {
      "title": "Protocolo Farmacológico en Laringitis Obstructiva Aguda (Croup)",
      "headers": [
            "Fármaco / Intervención",
            "Dosis y Posología Pediátrica",
            "Vía de Administración",
            "Mecanismo y Observaciones"
      ],
      "rows": [
            [
                  "Dexametasona (Obligatoria)",
                  "0.15 a 0.6 mg/kg (dosis máxima 10 a 16 mg)",
                  "Oral (de elección) o Endovenosa",
                  "Dosis ÚNICA · Reduce hospitalizaciones y recidivas"
            ],
            [
                  "Adrenalina Corriente (1:1.000)",
                  "4 a 5 mL pura sin diluir (o 0.5 mL/kg, máx 5 mL)",
                  "Nebulizada con oxígeno a 6 L/min",
                  "Vasoconstricción alfa-1 en mucosa subglótica · Efecto en 15 min"
            ],
            [
                  "Adrenalina Racémica (2.25%)",
                  "0.05 mL/kg/dosis (máximo 0.5 mL) en 3 mL SF",
                  "Nebulizada con oxígeno",
                  "Eficacia idéntica a la adrenalina corriente 1:1.000"
            ],
            [
                  "Tiempo de Observación Urgencia",
                  "Mínimo 2 horas (habitual 2 a 4 horas)",
                  "En sala de observación de urgencia",
                  "Descartar efecto rebote de la adrenalina tras 120 minutos"
            ]
      ]
},
    "vignette": "Un lactante de 14 meses es llevado al servicio de urgencia a las 2:00 AM por presentar tos ronca 'perruna' de inicio brusco en la noche y dificultad respiratoria. Tuvo congestión nasal leve en los últimos 2 días. Al examen físico en la camilla se aprecia despierto, tranquilo en brazos de su madre, afebril (37.2°C axilar). Mientras se encuentra tranquilo en reposo, se ausculta un estridor inspiratorio rudo continuo, con retracción supraesternal e intercostal moderada y frecuencia respiratoria de 38 rpm, saturando 96% ambiental. El murmullo pulmonar se encuentra simétrico.",
    "explicacion": "El paciente presenta una Laringitis Obstructiva Aguda (Croup) de grado moderado (Taussig Grado II), caracterizada por la presencia de estridor inspiratorio audible en reposo continuo asociado a tiraje moderado en un lactante previamente resfriado. La etiología dominante es viral (Virus Parainfluenza). La conducta médica de elección inmediata consiste en: (1) Administrar Dexametasona en dosis única oral (o EV si no tolera) a 0.15-0.6 mg/kg (habitualmente 0.6 mg/kg), la cual reduce el edema subglótico a partir de las 2-3 horas; (2) Iniciar nebulización inmediata con Adrenalina corriente (1:1.000) 4 mL con flujo de oxígeno a 4-6 L/min para lograr una rápida vasoconstricción y alivio en 15 minutos; y (3) Mantener al niño en observación médica en el servicio de urgencia durante un mínimo de 2 a 4 horas para descartar un eventual efecto rebote tras el cese de la acción adrenérgica. Si al término del período de observación el estridor de reposo ha desaparecido completamente, el paciente puede ser dado de alta a su hogar con seguridad.",
    "keyPoints": [
      "El Croup viral (laringotraqueítis) es causado en > 75% por Virus Parainfluenza tipo 1 en niños de 6 meses a 3 años.",
      "La tríada del croup es: tos perruna, estridor inspiratorio y disfonía.",
      "La Dexametasona oral (0.15 a 0.6 mg/kg) en dosis única es obligatoria en TODOS los grados de croup (incluso leves).",
      "La Adrenalina nebulizada (corriente 1:1.000 4 mL o racémica) está indicada ante estridor presente en REPOSO (Taussig ≥ II).",
      "Todo niño nebulizado con adrenalina debe observarse por un mínimo estricto de 2 a 4 horas para descartar efecto rebote.",
      "La Epiglotitis Aguda es una emergencia bacteriana fulminante con fiebre tóxica, sialorrea/babeo y posición en trípode sin tos.",
      "En la sospecha de epiglotitis aguda está TERMINANTEMENTE PROHIBIDO usar bajalenguas por riesgo de laringoespasmo fatal."
],
    "questions": [
      {
            "stem": "Un niño de 2 años presenta cuadro de 24 horas de tos perruna y disfonía. Al examen físico en urgencia se encuentra en reposo, en brazos de su madre, afebril, con estridor inspiratorio claramente audible sin llanto y tiraje supraesternal moderado. Saturación de O2 96% al aire ambiental. ¿Cuál es el tratamiento inmediato más adecuado según las guías clínicas?",
            "options": [
                  {
                        "id": "A",
                        "text": "Amoxicilina con ácido clavulánico oral por 10 días y envío a domicilio."
                  },
                  {
                        "id": "B",
                        "text": "Nebulización con adrenalina corriente con oxígeno y administración de dexametasona oral en dosis única, dejando en observación por 2 a 4 horas."
                  },
                  {
                        "id": "C",
                        "text": "Salbutamol en aerosol con aerocámara cada 20 minutos por una hora y alta médica."
                  },
                  {
                        "id": "D",
                        "text": "Intubación orotraqueal de urgencia inmediata bajo sedación profunda."
                  },
                  {
                        "id": "E",
                        "text": "Nebulización exclusiva con suero fisiológico frío y control en el consultorio al día siguiente."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. La presencia de estridor inspiratorio presente en reposo clasifica a este Croup en Grado II o Moderado según la escala de Taussig. La indicación protocolizada indiscutida es la administración de Dexametasona oral (0.15 a 0.6 mg/kg) en dosis única más una nebulización con Adrenalina (corriente 1:1.000 4 mL o racémica), con permanencia obligatoria en observación en el servicio de urgencia durante 2 a 4 horas para vigilar la respuesta y descartar el fenómeno de rebote. El salbutamol (opción C) actúa en el músculo liso bronquial y carece de efecto sobre el edema mucoso subglótico laríngeo. Los antibióticos (opción A) no tienen indicación en el croup viral.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.5.004"
      },
      {
            "stem": "Un preescolar de 3 años es llevado a urgencia por cuadro fulminante de 4 horas de evolución caracterizado por fiebre alta de 39.8°C, aspecto intensamente tóxico y gran dificultad para respirar. No presenta tos. Al examen físico se encuentra sentado, inclinado hacia adelante con el cuello extendido (postura en trípode), con la boca entreabierta y abundante sialorrea que cae sobre su ropa al ser incapaz de deglutir. Emite un estridor inspiratorio apagado. ¿Cuál de las siguientes acciones está FORMALMENTE CONTRAINDICADA?",
            "options": [
                  {
                        "id": "A",
                        "text": "Administración de oxígeno suplementario humidificado sin invadir al paciente."
                  },
                  {
                        "id": "B",
                        "text": "Traslado inmediato a pabellón quirúrgico acompañado por un anestesiólogo."
                  },
                  {
                        "id": "C",
                        "text": "Deprimir la lengua con un abatelenguas para inspeccionar la faringe en el box de atención."
                  },
                  {
                        "id": "D",
                        "text": "Iniciar antibioticoterapia empírica endovenosa con ceftriaxona tras asegurar la vía aérea."
                  },
                  {
                        "id": "E",
                        "text": "Permitir que la madre permanezca junto al niño para minimizar el llanto y la agitación."
                  }
            ],
            "correcta": "C",
            "explicacion": "La opción correcta es la C. El cuadro clínico corresponde a una Epiglotitis Aguda, una emergencia médica fulminante con riesgo inminente de asfixia mecánica. La tríada clásica es fiebre tóxica alta, babeo continuo (sialorrea) por disfagia severa y postura en trípode, con ausencia de tos. En estos pacientes está FORMALMENTE Y TERMINANTEMENTE PROHIBIDO deprimir la lengua con un abatelenguas o forzar la inspección de la orofaringe en el box de urgencia, ya que el estímulo físico del reflejo faríngeo puede desencadenar de forma instantánea un laringoespasmo reflejo total y paro cardiorrespiratorio irreversible. El paciente debe ser trasladado de inmediato a quirófano para intubación o traqueostomía por equipo especializado.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.5.004"
      },
      {
            "stem": "¿Cuál es la razón principal por la cual un niño con laringitis obstructiva que recibe nebulización con adrenalina debe permanecer en observación médica en el servicio de urgencia durante un período de al menos 2 a 4 horas?",
            "options": [
                  {
                        "id": "A",
                        "text": "Para vigilar el desarrollo de hipertensión intracraneana secundaria a la adrenalina."
                  },
                  {
                        "id": "B",
                        "text": "Para detectar el efecto rebote (reaparición del edema y del estridor) al decaer el efecto de la adrenalina."
                  },
                  {
                        "id": "C",
                        "text": "Porque la adrenalina nebulizada tarda 3 horas en comenzar a ejercer su acción terapéutica."
                  },
                  {
                        "id": "D",
                        "text": "Para esperar los resultados de la radiografía de tórax y hemograma de rutina."
                  },
                  {
                        "id": "E",
                        "text": "Porque la dexametasona pierde su efecto clínico a las 2 horas de su administración."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. La adrenalina nebulizada tiene un inicio de acción ultrarrápido (10 a 30 minutos) por vasoconstricción alfa-1 local, pero su vida media es corta y su efecto desaparece a las 2 horas. Si el corticoide sistémico administrado conjuntamente aún no ha alcanzado niveles tisulares terapéuticos plenos (lo cual demora de 2 a 3 horas), puede producirse un 'efecto rebote' con reaparición súbita del estridor y de la insuficiencia respiratoria. Por ello, el estándar de seguridad es mantener al paciente en observación médica por 2 a 4 horas antes de autorizar el alta.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.5.004"
      },
      {
            "stem": "¿Cuál de los siguientes agentes patógenos es el causante más frecuente de la laringotraqueítis aguda (croup viral) en la infancia?",
            "options": [
                  {
                        "id": "A",
                        "text": "Virus Parainfluenza tipo 1"
                  },
                  {
                        "id": "B",
                        "text": "Haemophilus influenzae tipo b"
                  },
                  {
                        "id": "C",
                        "text": "Streptococcus pneumoniae"
                  },
                  {
                        "id": "D",
                        "text": "Virus Epstein-Barr"
                  },
                  {
                        "id": "E",
                        "text": "Bordetella pertussis"
                  }
            ],
            "correcta": "A",
            "explicacion": "La opción correcta es la A. El Virus Parainfluenza tipo 1 es responsable de más del 70 a 80% de los casos de laringotraqueítis aguda obstructiva (croup) en niños de 6 meses a 3 años. Los tipos 2 y 3 de Parainfluenza, el virus respiratorio sincicial (VRS) y el virus influenza explican la mayor parte de los casos restantes.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.5.004"
      }
]
  },
  {
    "id": "orl-18",
    "classId": "orl-18",
    "tier": 2,
    "blockNum": 5,
    "blockName": "Cuerpos Extraños, Glándulas Salivales & Oncología Cervical",
    "topicLabel": "14.18",
    "title": "Cuerpos Extraños en ORL: Pila de Botón como Emergencia Quirúrgica vs Vía Aérea",
    "perfilCode": "4.02.7.002",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Completo",
    "ges": "Sin garantía GES específica · Ley de Urgencias médica ante riesgo vital",
    "reconstrucciones": "EUNACOM Diciembre 2017 (Q#81) · EUNACOM Julio 2020 (Q#19) · EUNACOM Diciembre 2022 (Q#58)",
    "frecuencia": "Altísima rentabilidad · 2 preguntas por examen: la pila de botón en fosa nasal/CAE como emergencia quirúrgica máxima (necrosis en < 2h, prohibido irrigar), el cuerpo extraño nasal de larga data (rinorrea unilateral fétida) y aspiración en vía aérea",
    "svg": null,
    "algoTitle": "Algoritmo de Manejo y Urgencia en Cuerpos Extraños de Oído, Nariz y Vía Aérea",
    "diagram": flow("Algoritmo de Manejo y Urgencia en Cuerpos Extraños de Oído, Nariz y Vía Aérea", [
      {
            "t": "Paciente Pediátrico con Sospecha o Confirmación de Cuerpo Extraño",
            "s": [
                  "Identificación del tipo de objeto y localización anatómica exacta"
            ],
            "type": "acc"
      },
      {
            "al": "Estratificación de Urgencia Vital e Inmediata",
            "w": 460
      },
      {
            "k": "split",
            "q": "¿Es una PILA DE BOTÓN o Cuerpo Extraño en VÍA AÉREA BAJA?",
            "s": "Emergencias que no admiten ninguna demora",
            "ll": "PILA DE BOTÓN (Nasal / Ótica / Esofágica)",
            "rl": "VÍA AÉREA (Laringe / Tráquea / Bronquio)",
            "left": {
                  "t": "EMERGENCIA QUIRÚRGICA MÁXIMA",
                  "s": "Extracción inmediata en quirófano · ¡PROHIBIDO IRRIGAR!",
                  "type": "crit"
            },
            "right": {
                  "t": "SÍNDROME DE ASPIRACIÓN",
                  "s": "Atelectasia / Atrapamiento aéreo · Broncoscopía rígida urgente",
                  "type": "warn"
            }
      },
      {
            "al": "Manejo de Cuerpos Extraños Habituales (Inertes vs Orgánicos)",
            "w": 460
      },
      {
            "k": "split",
            "q": "¿Semilla / Legumbre orgánica vs Insecto vivo en el CAE?",
            "s": "Precauciones de seguridad en el conducto auditivo externo",
            "ll": "Semilla / Legumbre vegetal",
            "rl": "Insecto vivo móvil en CAE",
            "left": {
                  "t": "PROHIBIDO LAVADO CON AGUA",
                  "s": "El agua hidrata la semilla y aumenta su volumen · Gancho romo",
                  "type": "crit"
            },
            "right": {
                  "t": "Inmovilización Inmediata",
                  "s": "Instilar gotas de Vaselina líquida o Lidocaína para ahogarlo",
                  "type": "acc"
            }
      }
]),
    "contexto": "Los cuerpos extraños en el territorio otorrinolaringológico son sumamente comunes en niños preescolares (1 a 4 años). En el EUNACOM se evalúan tres escenarios clínicos de máxima rentabilidad: (1) La PILA DE BOTÓN en fosa nasal o CAE: constituye una emergencia quirúrgica absoluta debido a que genera necrosis electroquímica por licuefacción y perforación septal o timpánica en menos de 2 a 4 horas; ¡está terminantemente prohibido irrigar con agua!; (2) La sospecha de cuerpo extraño nasal inadvertido de larga data ante un niño con rinorrea purulenta unilateral fétida; y (3) La aspiración de cuerpo extraño en vía aérea con síndrome de penetración y asimetría auscultatoria.",
    "contentSections": [
      {
            "subhead": "1. Pila de Botón en ORL: La Máxima Emergencia Quirúrgica",
            "paragraphs": [
                  "La presencia de una <strong>pila de botón (batería de disco)</strong> en fosas nasales, conducto auditivo externo o esófago es una <strong>EMERGENCIA QUIRÚRGICA ABSOLUTA</strong> que debe resolverse en cuestión de minutos. Las baterías de litio generan daño tisular catastrófico mediante tres mecanismos simultáneos: (a) Generación de una corriente eléctrica continua que descompone el agua tisular en iones hidroxilo (OH-), generando una quemadura alcalina extrema; (b) Fuga cáustica de hidróxido de potasio concentrado; y (c) Necrosis por presión isquémica.",
                  "La <strong>necrosis por licuefacción y la perforación del cartílago septal o de la membrana timpánica pueden ocurrir en tan solo 2 horas</strong> desde el contacto. A la radiografía se identifica el patognomónico <strong>'signo del doble contorno' o 'signo del halo'</strong>.",
                  "<strong>REGLAS DE ORO VITALES EUNACOM:</strong>",
                  "• <strong>Extracción Inmediata:</strong> Debe extraerse de urgencia por un especialista ORL mediante instrumental específico bajo visión directa o en pabellón con anestesia general si no hay cooperación.",
                  "• <strong>¡PROHIBIDO IRRIGAR O REALIZAR LAVADO CON AGUA O SOLUCIONES SALINAS!</strong> La instilación de cualquier líquido conduce la corriente eléctrica, acelera la electrólisis cáustica y desintegra los tejidos de forma fulminante."
            ]
      },
      {
            "subhead": "2. Cuerpos Extraños Nasales y la Regla de la Rinorrea Unilateral Fétida",
            "paragraphs": [
                  "Los cuerpos extraños nasales (trozos de esponja, papeles, semillas, perlas, juguetes de plástico) son colocados por los propios niños en la fosa nasal (más común en la fosa derecha).",
                  "<strong>Alerta EUNACOM:</strong> Todo niño pequeño (habitualmente entre 2 y 5 años) que consulta por <strong>Rinorrea purulenta, espesa, unilateral y con intenso olor fétido</strong>, asociada o no a obstrucción nasal y epistaxis unilateral leve, tiene un <strong>CUERPO EXTRAÑO NASAL hasta demostrar lo contrario</strong>.",
                  "<em>Técnica de Extracción:</em> Se realiza tras instilar vasoconstrictor tópico (oximetazolina) bajo rinoscopía anterior, utilizando un <strong>gancho romo de punta angulada</strong> que se introduce por arriba y detrás del objeto para traccionarlo hacia adelante por el piso de la fosa. Está <em>desaconsejado el uso de pinzas quirúrgicas lisas</em> en objetos redondos o esféricos, ya que al apretarlos resbalan y son empujados hacia la rinofaringe con grave riesgo de aspiración traqueobronquial."
            ]
      },
      {
            "subhead": "3. Cuerpos Extraños en Conducto Auditivo Externo (CAE)",
            "paragraphs": [
                  "<strong>Semillas o Legumbres Orgánicas (porotos, lentejas, arvejas):</strong> <em>¡Está TERMINANTEMENTE CONTRAINDICADO el lavado de oídos con agua!</em> Los cuerpos orgánicos deshidratados absorben agua rápidamente, aumentando su volumen en pocas horas, lo que impacta el objeto contra las paredes óseas del CAE y la membrana timpánica provocando dolor intolerable y necrosis cutánea. Se extraen con instrumental seco (gancho romo o microaspirador).",
                  "<strong>Insectos Vivos Móviles:</strong> El movimiento y aleteo del insecto contra el tímpano genera un dolor y angustia desesperante. La primera medida obligatoria es <strong>matar e inmovilizar al insecto instilando inmediatamente en el CAE gotas de vaselina líquida, aceite mineral o lidocaína al 2%</strong>. Una vez que el insecto está muerto e inmóvil, se procede a su extracción con lavado de oído con agua tibia a 37°C o pinza cocodrilo."
            ]
      },
      {
            "subhead": "4. Aspiración de Cuerpo Extraño en la Vía Aérea",
            "paragraphs": [
                  "La aspiración de un cuerpo extraño (maní, frutos secos, fragmentos de juguetes) a la vía aérea inferior es una de las principales causas de muerte accidental en lactantes y preescolares. Se inicia típicamente con el <strong>Síndrome de Penetración</strong>: un acceso paroxístico violento de tos asfíctica súbita, cianosis, náuseas y estridor mientras el niño comía o jugaba.",
                  "El objeto se aloja con mayor frecuencia en el <strong>bronquio principal derecho</strong> (por su trayecto más vertical, amplio y en línea recta con la tráquea). Al examen físico se constata <strong>asimetría auscultatoria con disminución marcada del murmullo pulmonar y sibilancias unilaterales</strong>.",
                  "En la radiografía de tórax (la mayoría de los frutos secos son radiolúcidos) se observa el <strong>signo de atrapamiento aéreo unilateral</strong> (hiperinsuflación del pulmón afectado con aplanamiento del hemidiafragma y desplazamiento del mediastino hacia el lado contralateral en espiración) o atelectasia obstructiva. El procedimiento diagnóstico y terapéutico de elección indiscutido es la <strong>Broncoscopía Rígida de Urgencia en pabellón bajo anestesia general</strong>."
            ]
      }
],
    "table": {
      "title": "Síntesis de Conducta de Urgencia en Cuerpos Extraños Otorrinolaringológicos",
      "headers": [
            "Tipo de Cuerpo Extraño",
            "Localización",
            "Peligro Inminente / Signo Clave",
            "Conducta Médica Oficial"
      ],
      "rows": [
            [
                  "Pila de Botón (Batería)",
                  "Fosa nasal o CAE",
                  "Necrosis alcalina y perforación septal/timpánica en < 2h",
                  "URGENCIA MÁXIMA: Extracción inmediata · ¡PROHIBIDO IRRIGAR!"
            ],
            [
                  "Cuerpo Extraño Desapercibido",
                  "Fosa nasal unilateral",
                  "Rinorrea purulenta UNILATERAL FÉTIDA en preescolar",
                  "Rinoscopía anterior y extracción con gancho romo por detrás"
            ],
            [
                  "Semilla / Poroto vegetal",
                  "Conducto Auditivo Externo",
                  "Maceración e hinchazón masiva si entra en contacto con agua",
                  "¡PROHIBIDO LAVADO CON AGUA! Extracción con instrumental seco"
            ],
            [
                  "Insecto Vivo Móvil",
                  "Conducto Auditivo Externo",
                  "Dolor atroz por aleteo contra el tímpano",
                  "Instilar vaselina líquida o lidocaína para ahogarlo, luego lavar"
            ],
            [
                  "Fruto Seco (Maní / Nuez)",
                  "Bronquio principal derecho",
                  "Síndrome de penetración, sibilancias unilaterales, atelectasia",
                  "BRONCOSCOPÍA RÍGIDA DE URGENCIA en pabellón quirúrgico"
            ]
      ]
},
    "severityTable": null,
    "treatmentTable": null,
    "vignette": "La madre de una niña de 3 años consulta en urgencia porque hace 2 horas sorprendió a su hija introduciéndose un objeto metálico plano en la fosa nasal derecha que extrajo del control remoto de la televisión. La niña se queja de dolor nasal y presenta secreción sanguinolenta escasa por la narina derecha. Al examen físico, mediante rinoscopía anterior con espéculo nasal, se visualiza a 1.5 cm del vestíbulo una superficie metálica circular brillante correspondiente a una batería de botón pequeña, observándose la mucosa septal circundante intensamente edematosa y con áreas de palidez y tinte negruzco.",
    "explicacion": "La presencia de una pila de botón en una fosa nasal constituye una de las emergencias médico-quirúrgicas más apremiantes en la especialidad otorrinolaringológica pediátrica. La corriente generada por el polo negativo descompone el agua tisular liberando iones hidroxilo con formación rápida de hidróxido de potasio, produciendo una quemadura cáustica por licuefacción capaz de destruir el tabique nasal cartilaginoso en menos de 2 a 4 horas. La conducta inmediata mandatoria es: (1) NUNCA irrigar la fosa nasal con soluciones salinas ni agua corriente (ya que aceleran la reacción electrolítica cáustica de forma explosiva); y (2) Realizar la extracción inmediata de la batería de disco mediante instrumental apropiado (gancho romo colocado por detrás del objeto o aspiración) por médico entrenado o derivación inmediata a pabellón con especialista ORL si la niña no coopera.",
    "keyPoints": [
      "La pila de botón en fosa nasal o CAE es una emergencia quirúrgica absoluta por riesgo de perforación y necrosis en < 2 horas.",
      "En cuerpos extraños por pilas de botón está TERMINANTEMENTE PROHIBIDO irrigar con agua o suero.",
      "Un niño pequeño con rinorrea purulenta unilateral y de mal olor tiene un CUERPO EXTRAÑO NASAL hasta demostrar lo contrario.",
      "En cuerpos extraños esféricos nasales se usa un gancho romo por detrás; están contraindicadas las pinzas quirúrgicas lisas.",
      "En cuerpos extraños vegetales (semillas, porotos) en el CAE está prohibido el lavado con agua porque se hinchan.",
      "Ante un insecto vivo en el CAE, la primera medida obligatoria es ahogarlo con vaselina líquida o lidocaína.",
      "El cuerpo extraño en vía aérea se aloja con mayor frecuencia en el bronquio principal derecho y se extrae con broncoscopía rígida."
],
    "questions": [
      {
            "stem": "Una madre acude al servicio de urgencia con su hijo de 3 años refiriendo que el niño se introdujo en la fosa nasal izquierda una pila de botón extraída de un juguete hace aproximadamente una hora. El niño presenta llanto y sangrado nasal escaso. Al examen se confirma la presencia de la batería en la fosa nasal. ¿Cuál de las siguientes acciones es la más adecuada?",
            "options": [
                  {
                        "id": "A",
                        "text": "Realizar lavado profuso de la fosa nasal con solución salina para neutralizar el pH y expulsar la pila."
                  },
                  {
                        "id": "B",
                        "text": "Extracción inmediata del cuerpo extraño con gancho romo o derivación urgente a pabellón quirúrgico, sin realizar ninguna irrigación líquida."
                  },
                  {
                        "id": "C",
                        "text": "Indicar descongestionantes orales y citar al policlínico de otorrinolaringología en 48 horas."
                  },
                  {
                        "id": "D",
                        "text": "Instilar gotas de vaselina líquida para facilitar que la pila deslice hacia la nasofaringe."
                  },
                  {
                        "id": "E",
                        "text": "Realizar compresión digital bimanual externa sobre el dorso nasal para aplastar la batería."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. La pila de botón en una cavidad mucosa como la fosa nasal o el CAE es una emergencia quirúrgica de máxima prioridad debido a la rápida producción de quemaduras químicas alcalinas graves por electrólisis y fuga de hidróxido de potasio, las cuales pueden ocasionar perforación del cartílago septal en menos de 2 horas. La extracción debe realizarse de forma inmediata por personal entrenado con instrumental específico (gancho romo introducido por detrás del objeto). Está estrictamente contraindicada la irrigación con agua o suero (opción A) porque los líquidos actúan como electrolito conductor que acelera catastróficamente la corriente eléctrica y la destrucción tisular.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.7.002"
      },
      {
            "stem": "Un niño de 4 años es traído a la consulta médica ambulatoria porque desde hace 3 semanas presenta mucosidad purulenta amarillenta que sale exclusivamente por la fosa nasal derecha, asociada a un olor fétido muy intenso. La madre refiere que ha sido tratado previamente con amoxicilina oral por sospecha de rinosinusitis sin ninguna mejoría. ¿Cuál es el diagnóstico clínico más probable que debe descartarse en primer lugar?",
            "options": [
                  {
                        "id": "A",
                        "text": "Rinitis alérgica estacional unilateral."
                  },
                  {
                        "id": "B",
                        "text": "Cuerpo extraño nasal desapercibido en la fosa nasal derecha."
                  },
                  {
                        "id": "C",
                        "text": "Atresia de coanas bilateral congénita tardía."
                  },
                  {
                        "id": "D",
                        "text": "Fibrosis quística con sobreinfección por Pseudomonas."
                  },
                  {
                        "id": "E",
                        "text": "Desviación septal cartilaginosa pura sin componente inflamatorio."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. En pediatría, la presencia de rinorrea purulenta, persistente, UNILATERAL y con OLOR FÉTIDO de varias semanas de evolución en un niño pequeño es el cuadro clínico clásico y patognomónico de un Cuerpo Extraño Nasal retenido y desapercibido (como fragmentos de esponja, papel o goma). La impactación del objeto bloquea el drenaje fisiológico de la mucosa y genera sobreinfección bacteriana local crónica anaerobia responsable de la fetidez extrema. Requiere rinoscopía anterior o nasofibroscopía inmediata para visualización y extracción.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.7.002"
      }
]
  },
  {
    "id": "orl-19",
    "classId": "orl-19",
    "tier": 2,
    "blockNum": 5,
    "blockName": "Cuerpos Extraños, Glándulas Salivales & Oncología Cervical",
    "topicLabel": "14.19",
    "title": "Patología de Glándulas Salivales: Sialolitiasis, Parotiditis y Adenoma Pleomorfo",
    "perfilCode": "4.02.5.001",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Especialista",
    "ges": "Sin garantía GES específica",
    "reconstrucciones": "EUNACOM Diciembre 2018 (Q#68) · EUNACOM Julio 2021 (Q#47)",
    "frecuencia": "Alta rentabilidad · 2 preguntas por examen: cólico salival postprandial en la glándula submandibular (conducto de Wharton) vs parotiditis bacteriana aguda en ancianos deshidratados vs adenoma pleomorfo parotídeo",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico y Terapéutico en Patología de Glándulas Salivales",
    "diagram": flow("Algoritmo Diagnóstico y Terapéutico en Patología de Glándulas Salivales", [
      {
            "t": "Paciente con Aumento de Volumen en Región Parotídea o Submandibular",
            "s": [
                  "Anamnesis: ¿dolor al comer vs inflamación fija vs masa indolora?"
            ],
            "type": "acc"
      },
      {
            "al": "Estratificación de la Temporalidad y Características de la Masa",
            "w": 460
      },
      {
            "k": "split",
            "q": "¿Dolor cólico agudo al masticar vs Signos inflamatorios vs Nódulo firme indoloro?",
            "s": "Diferenciación entre Litiasis, Infección y Neoplasia",
            "ll": "Dolor brusco con comidas (Cólico salival)",
            "rl": "Masa firme indolora de meses o Fiebre con pus",
            "left": {
                  "t": "Sialolitiasis (Cálculo Salival)",
                  "s": "80-90% en Glándula Submandibular (Conducto de Wharton)",
                  "type": "acc"
            },
            "right": {
                  "t": "Parotiditis Aguda vs Tumor Salival",
                  "s": "Evaluar salida de pus por Stenon vs Nódulo móvil",
                  "type": "warn"
            }
      },
      {
            "al": "Manejo de la Sialolitiasis",
            "from": "left",
            "w": 460
      },
      {
            "t": "Medidas Físicas, Sialogogos y Cirugía",
            "s": [
                  "Hidratación abundante, calor local y sialogogos (jugo de limón)",
                  "Si cálculo grande palpable en piso de boca: extracción quirúrgica / sialoendoscopía"
            ],
            "type": "acc"
      },
      {
            "al": "Conducta en Patología Tumoral Parotídea",
            "from": "right",
            "w": 460
      },
      {
            "t": "Adenoma Pleomorfo (Tumor más Frecuente)",
            "s": [
                  "Masa lobulada móvil indolora en parótida sin parálisis facial",
                  "PAAF + Parotidectomía superficial con conservación del nervio facial"
            ],
            "type": "acc"
      }
]),
    "contexto": "Las glándulas salivales mayores (parótidas, submandibulares y sublinguales) son asiento de patologías litiásicas, infecciosas y tumorales con perfiles clínicos muy diferenciados. En el EUNACOM se evalúan tres cuadros típicos: (1) La Sialolitiasis, localizada en el 85% de los casos en la glándula submandibular (conducto de Wharton) que cursa con cólico salival postprandial; (2) La Parotiditis bacteriana aguda supurada en pacientes ancianos deshidratados con salida de pus por el conducto de Stenon; y (3) El Adenoma Pleomorfo, el tumor más común de la glándula parótida, de curso benigno pero con indicación quirúrgica por riesgo de malignización a carcinoma ex-adenoma pleomorfo.",
    "contentSections": [
      {
            "subhead": "1. Sialolitiasis: La Glándula Submandibular y el Conducto de Wharton",
            "paragraphs": [
                  "La <strong>sialolitiasis</strong> es la formación de cálculos en los conductos de las glándulas salivales mayores. El <strong>80 a 90% de todos los litos se localizan en la Glándula Submandibular y su conducto excretor (Conducto de Wharton)</strong>, debido a factores anatómicos y fisicoquímicos: (a) Su trayecto es largo, ascendente y antigravitatorio con una curva pronunciada sobre el músculo milohioideo; (b) La saliva submandibular es rica en mucina (más viscosa y espesa); y (c) Contiene mayor concentración de calcio y fosfatos con pH alcalino.",
                  "<strong>Clínica Patognomónica:</strong> <strong>'Cólico Salival'</strong>: aumento de volumen súbito y dolor agudo en la región submandibular que aparece de forma paroxística <strong>durante las comidas o ante el estímulo olfatorio/visual de alimentos</strong>, cediendo gradualmente 1 a 2 horas después de comer a medida que la saliva vence parcialmente la obstrucción o disminuye su producción.",
                  "<em>Diagnóstico y Manejo:</em> A la palpación bimanual del piso de boca se puede palpar el cálculo en el conducto de Wharton. La ecografía de cuello o radiografía oclusal de piso de boca confirma el lito. El tratamiento inicial incluye <strong>hidratación oral abundante, calor local, masajes glandulares y sialogogos naturales (gotas de limón, caramelos ácidos)</strong> para estimular el flujo salival. Cálculos mayores a 5 mm requieren <strong>extracción quirúrgica transoral por incisión del conducto (marsupialización) o sialoendoscopía</strong>."
            ]
      },
      {
            "subhead": "2. Parotiditis Bacteriana Aguda Supurada en el Paciente Geriátrico",
            "paragraphs": [
                  "La <strong>parotiditis aguda supurada</strong> es una infección bacteriana ascendente retrógrada a través del conducto de Stenon. Ocurre típicamente en <strong>ancianos deshidratados, pacientes postoperados graves en ayuno prolongado o usuarios de fármacos anticolinérgicos</strong> que inducen hiposialia marcada y mala higiene bucal.",
                  "El microorganismo causal en > 80% de los casos es <strong><em>Staphylococcus aureus</em></strong>.",
                  "Se manifiesta por dolor intenso, aumento de volumen eritematoso y caliente de la región parotídea y preauricular, fiebre y trismus. El signo exploratorio patognomónico es la <strong>expresión manual de la glándula parótida hacia adelante, lo cual provoca la salida de pus franco a través de la papila del conducto de Stenon</strong> (ubicada en la mucosa yugal frente al segundo molar superior).",
                  "El tratamiento requiere <strong>hospitalización, rehidratación endovenosa vigorosa y antibioticoterapia endovenosa antiestafilocócica: Cloxacilina EV (2 g c/4-6h) o Cefazolina EV</strong> (Vancomicina si sospecha de SAMR)."
            ]
      },
      {
            "subhead": "3. Tumores de Glándulas Salivales: Regla del 80% y Adenoma Pleomorfo",
            "paragraphs": [
                  "<strong>Regla del 80% en Oncología Salival:</strong>",
                  "• El <strong>80% de los tumores de glándulas salivales asientan en la Glándula Parótida</strong>.",
                  "• El <strong>80% de los tumores parotídeos son BENIGNOS</strong>.",
                  "• El <strong>80% de los tumores benignos parotídeos corresponden a ADENOMA PLEOMORFO</strong>.",
                  "<em>Regla inversa de malignidad:</em> Cuanto más pequeña es la glándula salival, mayor es la probabilidad de que un tumor sea maligno (parótida 20% malignos, submandibular 50% malignos, glándulas salivales menores en paladar 80% malignos).",
                  "<strong>Adenoma Pleomorfo (Tumor Mixto Benigno):</strong> Tumor epitelial y mesenquimático benigno. Clínicamente se manifiesta como una <strong>masa o nódulo parotídeo de consistencia firme, gomosa, de superficie lisa o discretamente lobulada, móvil, de crecimiento lento e indoloro durante meses o años</strong>. <em>Rigurosa AUSENCIA de parálisis del nervio facial (VII par)</em> (la presencia de parálisis facial en una masa parotídea es signo inequívoco de CÁNCER MALIGNO como carcinoma adenoide quístico o mucoepidermoide).",
                  "<em>Conducta Terapéutica:</em> El estudio inicial de elección es la <strong>Punción Aspirativa con Aguja Fina (PAAF) guiada por ecografía</strong> y RMN/TAC de cuello. El tratamiento de elección es la <strong>Parotidectomía superficial con disección y preservación obligatoria del nervio facial</strong>. La enucleación simple está prohibida por presentar una tasa de recurrencia local superior al 40% debido a pseudópodos microscópicos, existiendo además un riesgo de transformación maligna a <em>Carcinoma ex-adenoma pleomorfo</em> (5-10% a los 15-20 años)."
            ]
      }
],
    "table": {
      "title": "Diagnóstico Diferencial: Sialolitiasis vs Parotiditis Aguda vs Adenoma Pleomorfo",
      "headers": [
            "Entidad Salival",
            "Glándula Afectada Principal",
            "Presentación Clínica y Temporalidad",
            "Tratamiento de Elección"
      ],
      "rows": [
            [
                  "Sialolitiasis",
                  "Glándula Submandibular (85% en Wharton)",
                  "Cólico salival agudo desencadenado con las comidas",
                  "Hidratación + Sialogogos (limón) · Extracción quirúrgica"
            ],
            [
                  "Parotiditis Supurada",
                  "Glándula Parótida (Conducto de Stenon)",
                  "Inflamación aguda, fiebre, salida de pus por papila de Stenon",
                  "Hospitalización + Cloxacilina / Cefazolina EV + Hidratación"
            ],
            [
                  "Adenoma Pleomorfo",
                  "Glándula Parótida (Lóbulo superficial)",
                  "Nódulo parotídeo indoloro, móvil, crecimiento lento de años",
                  "PAAF + Parotidectomía superficial con preservación del VII par"
            ],
            [
                  "Carcinoma Maligno",
                  "Submandibular / Menores (o Parótida)",
                  "Masa pétrea fija, dolorosa, PARÁLISIS FACIAL IPSILATERAL",
                  "Parotidectomía total + Resección de facial y vaciamiento cervical"
            ]
      ]
},
    "severityTable": null,
    "treatmentTable": null,
    "vignette": "Un hombre de 45 años consulta por presentar desde hace 2 meses dolor intenso y sensación de tensión súbita en la región submandibular izquierda cada vez que se sienta a almorzar o cenar. Refiere que durante los primeros bocados de comida nota un aumento de volumen marcado 'como un huevo' debajo de la mandíbula izquierda, el cual disminuye progresivamente de tamaño una o dos horas después de terminar de comer. Al examen físico en ayunas, la glándula submandibular izquierda se palpa ligeramente sensible y al realizar la palpación bimanual del piso de la boca a lo largo del conducto de Wharton se palpa una formación dura de consistencia pétrea de unos 4 mm cerca del frenillo lingual.",
    "explicacion": "El cuadro clínico corresponde a una Sialolitiasis de la glándula submandibular izquierda con localización del cálculo en el conducto de Wharton. El dolor cólico paroxístico y la tumefacción glandular desencadenados de forma reproducible con las comidas ('cólico salival') representan la fisiopatología clásica de la obstrucción mecánica del flujo de saliva estimulado por la ingesta de alimentos. La glándula submandibular es la localización más frecuente (80-90% de las litiasis salivales) por la composición mucosa y alcalina de su secreción y el trayecto antigravitatorio ascendente del conducto de Wharton. Al ser un cálculo palpable en el segmento distal del conducto en el piso de boca, la conducta de elección consiste en estimulación con sialogogos naturales (gotas de limón), hidratación abundante, y si no expulsa espontáneamente, extracción quirúrgica transoral simple mediante sialolitotomía directa bajo anestesia local en la mucosa del piso de boca.",
    "keyPoints": [
      "El 80-90% de las sialolitiasis se localizan en la Glándula Submandibular a lo largo del conducto de Wharton.",
      "El cólico salival se caracteriza por dolor y aumento de volumen súbito submandibular durante la ingesta de alimentos.",
      "La parotiditis bacteriana aguda por S. aureus se presenta en ancianos deshidratados con salida de pus por el conducto de Stenon.",
      "El 80% de los tumores de glándulas salivales asientan en la parótida, el 80% son benignos y el 80% son adenomas pleomorfos.",
      "El adenoma pleomorfo es una masa parotídea móvil e indolora de crecimiento lento que NUNCA compromete el nervio facial.",
      "La presencia de parálisis del nervio facial en una masa parotídea es signo patognomónico de CÁNCER MALIGNO.",
      "El tratamiento del adenoma pleomorfo es la parotidectomía superficial con preservación estricta del nervio facial (la enucleación simple está prohibida)."
],
    "questions": [
      {
            "stem": "Un paciente de 50 años consulta por dolor y aumento de volumen agudo recurrente en la región submandibular derecha que aparece típicamente al comenzar a comer y cede gradualmente dos horas después. La palpación bimanual del piso de la boca revela una zona indurada milimétrica dolorosa a lo largo del trayecto del conducto salival. ¿Cuál es el diagnóstico más probable y cuál es el conducto excretor involucrado?",
            "options": [
                  {
                        "id": "A",
                        "text": "Parotiditis viral urliana; conducto de Stenon."
                  },
                  {
                        "id": "B",
                        "text": "Sialolitiasis submandibular; conducto de Wharton."
                  },
                  {
                        "id": "C",
                        "text": "Adenoma pleomorfo submandibular; conducto de Rivinus."
                  },
                  {
                        "id": "D",
                        "text": "Ranula sublingual simple; conducto de Bartolino."
                  },
                  {
                        "id": "E",
                        "text": "Angina de Ludwig inicial; conducto tireogloso persistente."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. La presentación clínica de aumento de volumen y dolor paroxístico desencadenado por el estímulo alimentario ('cólico salival') es patognomónica de Sialolitiasis. El 80 a 90% de los cálculos salivales se originan en la glándula submandibular y se impactan en su conducto excretor principal, el conducto de Wharton, el cual discurre por el piso de la boca hasta desembocar en las carúnculas sublinguales a ambos lados del frenillo lingual.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.5.001"
      },
      {
            "stem": "Una paciente de 42 años consulta por un nódulo indoloro en la región parotídea derecha que notó hace aproximadamente 1 año, de crecimiento muy lento. Al examen físico se palpa un nódulo de 2.5 cm en el polo inferior de la parótida derecha, de consistencia firme-elástica, superficie lisa, móvil, no adherido a planos profundos ni a la piel. La motilidad de la musculatura mímica facial es rigurosamente normal y simétrica en ambos lados. ¿Cuál es el diagnóstico más probable y el tratamiento quirúrgico de elección?",
            "options": [
                  {
                        "id": "A",
                        "text": "Carcinoma mucoepidermoide de alto grado; parotidectomía radical con sección del nervio facial y radioterapia."
                  },
                  {
                        "id": "B",
                        "text": "Adenoma pleomorfo; parotidectomía superficial con disección y preservación del nervio facial."
                  },
                  {
                        "id": "C",
                        "text": "Quiste branquial infectado; drenaje percutáneo ambulatorio e inicio de cloxacilina."
                  },
                  {
                        "id": "D",
                        "text": "Sialometaplasia necrotizante; enucleación tumoral simple con bisturí frío en el box."
                  },
                  {
                        "id": "E",
                        "text": "Parotiditis bacteriana crónica; tratamiento prolongado con amoxicilina-ácido clavulánico."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. El tumor más frecuente de las glándulas salivales es el Adenoma Pleomorfo (tumor mixto benigno), el cual asienta en más del 80% de los casos en la glándula parótida. Su presentación clínica es clásica: nódulo parotídeo indoloro, móvil, de consistencia elástica y crecimiento lento de meses o años, con integridad rigurosa de la función del nervio facial (VII par). El tratamiento de elección estándar es la Parotidectomía Superficial con identificación, disección y preservación del nervio facial. La enucleación simple (opción D) está formalmente contraindicada debido a que presenta un riesgo de recidiva local superior al 40% y riesgo de transformación maligna a carcinoma.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.5.001"
      }
]
  },
  {
    "id": "orl-20",
    "classId": "orl-20",
    "tier": 2,
    "blockNum": 5,
    "blockName": "Cuerpos Extraños, Glándulas Salivales & Oncología Cervical",
    "topicLabel": "14.20",
    "title": "Cáncer de Cabeza y Cuello: Carcinoma Escamoso, Banderas Rojas y Masa Cervical",
    "perfilCode": "4.02.6.001",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Especialista",
    "ges": "Garantía GES Colecistectomía / Alivio del dolor por cáncer avanzado y cuidados paliativos",
    "reconstrucciones": "EUNACOM Diciembre 2017 (Q#48) · EUNACOM Julio 2019 (Q#88) · EUNACOM Diciembre 2021 (Q#66) · EUNACOM Diciembre 2023 (Q#42)",
    "frecuencia": "Altísima rentabilidad · 2 a 3 preguntas por examen: banderas rojas oncológicas (masa cervical pétrea en > 40 años fumador es cáncer hasta demostrar lo contrario, otalgia refleja con otoscopía normal), PAAF guiada vs prohibición de biopsia incisional",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico y Banderas Rojas en el Enfrentamiento de la Masa Cervical en el Adulto",
    "diagram": flow("Algoritmo Diagnóstico y Banderas Rojas en el Enfrentamiento de la Masa Cervical en el Adulto", [
      {
            "t": "Adulto (> 40 años) con Masa Cervical o Adenopatía Persistente > 2-3 Semanas",
            "s": [
                  "Regla de Oro: Toda masa cervical en adulto fumador es CÁNCER hasta demostrar lo contrario"
            ],
            "type": "acc"
      },
      {
            "al": "Evaluación Clínica y Búsqueda de Banderas Rojas Oncológicas",
            "w": 460
      },
      {
            "k": "split",
            "q": "¿Masa pétrea, fija, > 1.5-2 cm, indolora en paciente con tabaco/alcohol?",
            "s": "Banderas rojas: disfonía > 3 sem, disfagia, úlcera oral o otalgia refleja con otoscopía normal",
            "ll": "Sí: Sospecha de Metástasis Ganglionar de Carcinoma Escamoso",
            "rl": "No: Signos inflamatorios agudos en paciente joven",
            "left": {
                  "t": "ALTO RIESGO DE NEOPLASIA",
                  "s": "Carcinoma epidermoide de cabeza y cuello metastásico a ganglio",
                  "type": "crit"
            },
            "right": {
                  "t": "Etiología Inflamatoria / Congénita",
                  "s": "Adenoflemón, Quiste branquial o tirogloso · Ecografía",
                  "type": "dec"
            }
      },
      {
            "al": "Estudio Diagnóstico Ineludible",
            "from": "left",
            "w": 460
      },
      {
            "t": "Nasofibroscopía + PAAF Guiada por Ecografía + TAC de Cuello",
            "s": [
                  "Examen minucioso de cavidad oral, orofaringe, laringe y cavum para buscar tumor primario",
                  "Punción Aspirativa con Aguja Fina (PAAF) para estudio citológico",
                  "¡PROHIBIDA LA BIOPSIA INCISIONAL ABIERTA! (Rompe planos fasciales y disemina tumor)"
            ],
            "type": "crit"
      }
]),
    "contexto": "El cáncer de cabeza y cuello comprende los tumores malignos originados en el epitelio de la mucosa del tracto aerodigestivo superior (laringe, orofaringe, cavidad oral, hipofaringe y nasofaringe). El tipo histológico en más del 90% es el Carcinoma de Células Escamosas (espinocelular). En el examen EUNACOM se evalúa de manera fija el axioma oncológico fundamental: toda adenopatía o masa cervical asintomática en un adulto mayor de 40 años con historia de tabaquismo y alcohol es una metástasis ganglionar de carcinoma escamoso hasta demostrar lo contrario. El método diagnóstico inicial de elección es la PAAF bajo ecografía, estando formalmente prohibida la biopsia incisional ganglionar.",
    "contentSections": [
      {
            "subhead": "1. Epidemiología, Factores de Riesgo y Carcinoma Escamoso",
            "paragraphs": [
                  "Más del <strong>90 al 95% de las neoplasias malignas de cabeza y cuello corresponden a Carcinomas de Células Escamosas (carcinoma epidermoide o espinocelular)</strong>.",
                  "Los factores etiológicos dominantes tradicionales son el <strong>tabaquismo crónico y el consumo nocivo de alcohol</strong>, los cuales actúan de manera intensamente sinérgica multiplicando el riesgo relativo hasta por 30 veces. En las últimas dos décadas ha emergido un segundo grupo epidemiológico: carcinomas de orofaringe (amígdala palatina y base de lengua) en adultos más jóvenes sin tabaquismo pesado, impulsados por la <strong>infección por Virus del Papiloma Humano oncogénico (VPH-16 en > 85% de los casos)</strong>, los cuales se asocian a mejor pronóstico y alta respuesta a radioterapia."
            ]
      },
      {
            "subhead": "2. Banderas Rojas Oncológicas en Otorrinolaringología",
            "paragraphs": [
                  "El médico de atención primaria y urgencias debe identificar con máxima agudeza los siguientes signos y síntomas de alarma que exigen derivación prioritaria inmediata a ORL:",
                  "• <strong>Disfonía persistente por más de 2 a 3 semanas</strong> en adulto fumador (alarma de cáncer de cuerda vocal / laringe).",
                  "• <strong>Otalgia refleja unilateral persistente con otoscopía rigurosamente normal:</strong> Se produce por irradiación dolorosa a través de ramas de los nervios glosofaríngeo (IX par / nervio de Jacobson) o vago (X par / nervio de Arnold) ante tumores de la base de la lengua, amígdala, hipofaringe o laringe.",
                  "• <strong>Úlcera indurada, placa roja (eritroplasia) o blanca (leucoplasia) en lengua o cavidad oral</strong> que no cicatriza tras 2 semanas.",
                  "• <strong>Odinofagia o disfagia unilateral progresiva</strong> con sensación de cuerpo extraño faríngeo constante.",
                  "• <strong>Obstrucción nasal unilateral, epistaxis recurrente unilateral o hipoacusia por OME unilateral en un adulto</strong> (alarma de Cáncer de Cavum / Nasofaringe por Virus Epstein-Barr que ocluye la trompa de Eustaquio)."
            ]
      },
      {
            "subhead": "3. Axioma de la Masa Cervical en el Adulto y el Rol de la PAAF",
            "paragraphs": [
                  "<strong>Regla de los 80 de Skandalakis:</strong> En un adulto mayor de 40 años que presenta una masa cervical no tiroidea persistente por más de 3 semanas:",
                  "• El <strong>80% de las masas cervicales son NEOPLÁSICAS</strong> (solo 20% son benignas/infecciosas).",
                  "• De las masas neoplásicas, el <strong>80% son MALIGNAS</strong>.",
                  "• De las masas malignas, el <strong>80% son METÁSTASIS GANGLIONARES</strong> (y solo 20% tumores primarios como linfomas).",
                  "• De las metástasis ganglionares, el <strong>80% provienen de un CARCINOMA ESCAMOSO primario situado en la vía aerodigestiva superior</strong> (por encima de las clavículas).",
                  "<strong>Secuencia Diagnóstica y REGLA DE ORO PROHIBITIVA EUNACOM:</strong>",
                  "1. <strong>Examen ORL Completo:</strong> Nasofibroscopía flexible minuciosa de toda la mucosa de cavum, orofaringe, hipofaringe y laringe para identificar el tumor primario.",
                  "2. <strong>Punción Aspirativa con Aguja Fina (PAAF) guiada por ecografía:</strong> Es el método de confirmación citológica de primera línea, con sensibilidad y especificidad > 95%, sin alterar la anatomía ganglionar.",
                  "3. <em>¡ESTÁ TERMINANTEMENTE PROHIBIDO REALIZAR BIOPSIA INCISIONAL O ESCISIONAL ABIERTA DEL GANGLIO EN PABELLÓN SIN ESTUDIO PREVIO!</em> La cirugía abierta de una adenopatía metastásica viola las barreras fasciales del cuello, siembra células tumorales en el tejido celular subcutáneo, empeora la sobrevida global y multiplica drásticamente la tasa de recidiva tumoral cervical."
            ]
      }
],
    "table": {
      "title": "Diagnóstico Diferencial Etiológico de la Masa Cervical según Grupo Etario",
      "headers": [
            "Grupo Etario",
            "Etiología Más Frecuente (80%)",
            "Ejemplos Típicos",
            "Conducta Inicial"
      ],
      "rows": [
            [
                  "Niños (< 15 años)",
                  "Infecciosa / Inflamatoria",
                  "Adenitis reactiva bacteriana o viral, adenoflemón",
                  "Antibióticos orales · Ecografía si no cede"
            ],
            [
                  "Adultos Jóvenes (16-40 años)",
                  "Congénita / Infecciosa / Linfoma",
                  "Quiste del conducto tirogloso, quiste branquial, mononucleosis",
                  "Ecografía de cuello + PAAF si sospecha de Linfoma"
            ],
            [
                  "Adultos Mayores (> 40 años)",
                  "NEOPLÁSICA MALIGNA (80%)",
                  "Metástasis de Carcinoma Escamoso de orofaringe/laringe",
                  "PAAF bajo ecografía + Nasofibroscopía urgente (¡NO BIOPSIA ABIERTA!)"
            ]
      ]
},
    "severityTable": null,
    "treatmentTable": null,
    "vignette": "Un hombre de 58 años, fumador de 30 cigarrillos al día durante 35 años y consumidor diario de vino, consulta por la aparición de un aumento de volumen indoloro en la región lateral derecha del cuello que notó hace 1 mes y que ha crecido progresivamente. Refiere además que desde hace 3 semanas siente un dolor punzante leve en el oído derecho que aparece al tragar, pero no tiene secreción ni sordera. Al examen físico se palpa una masa adenopática de 3.5 cm en el nivel II yugulodigástrico derecho, de consistencia pétrea, dura, adherida a planos profundos e indolora. La otoscopía de ambos oídos es rigurosamente normal, con tímpanos translúcidos y sanos.",
    "explicacion": "El paciente presenta una Masa Cervical de alto riesgo oncológico en un adulto mayor con factores de riesgo mayores (tabaquismo pesado y alcoholismo crónico). La consistencia pétrea, la fijación a planos profundos y el tamaño > 3 cm son signos patognomónicos de metástasis ganglionar de Carcinoma Escamoso de la vía aerodigestiva superior. La otalgia refleja derecha con otoscopía normal (conducida por el nervio glosofaríngeo o vago) es una bandera roja de primer orden que orienta a la presencia de un tumor primario oculto en la orofaringe (base de la lengua o amígdala) o hipofaringe. La conducta médica correcta e inmediata es: (1) Realizar un examen ORL completo con nasofibroscopía flexible para buscar minuciosamente el tumor primario en la mucosa; (2) Solicitar Punción Aspirativa con Aguja Fina (PAAF) de la adenopatía guiada por ecografía para confirmación citológica; y (3) Tomografía Computarizada (TAC) de cuello y tórax con contraste para etapificación. Está formalmente contraindicado extirpar el ganglio mediante biopsia incisional o abierta sin estudio completo previo.",
    "keyPoints": [
      "El Carcinoma de Células Escamosas (espinocelular) representa > 90% de los cánceres de cabeza y cuello.",
      "Toda masa cervical o adenopatía pétrea fija en un adulto > 40 años fumador es CÁNCER hasta demostrar lo contrario.",
      "La otalgia refleja con otoscopía rigurosamente normal es una bandera roja mayor de tumor de faringe o laringe.",
      "Una disfonía persistente por más de 2 a 3 semanas en un fumador exige laringoscopía para descartar cáncer de cuerda vocal.",
      "El método diagnóstico de elección para la masa cervical es la PAAF (Punción con Aguja Fina) guiada por ecografía.",
      "Está TERMINANTEMENTE PROHIBIDO realizar una biopsia incisional abierta de una masa cervical sin estudio previo.",
      "El VPH-16 es un factor etiológico mayor emergente de cáncer de orofaringe (amígdala y base de lengua) en pacientes jóvenes.",
      "La obstrucción nasal y otitis con efusión unilateral en un adulto mayor orienta a Carcinoma de Cavum (nasofaringe)."
],
    "questions": [
      {
            "stem": "Un hombre de 62 años, fumador crónico, consulta por una masa en la región lateral izquierda del cuello de 4 semanas de evolución, indolora y de consistencia pétrea de 3 cm de diámetro. Refiere además otalgia refleja izquierda ocasional con otoscopía rigurosamente normal. Respecto a la conducta diagnóstica inicial más apropiada, ¿cuál de los siguientes procedimientos es el método de elección para la confirmación anatomopatológica y qué procedimiento está formalmente contraindicado?",
            "options": [
                  {
                        "id": "A",
                        "text": "Método de elección: Biopsia incisional abierta en pabellón bajo anestesia local. Procedimiento contraindicado: PAAF bajo ecografía."
                  },
                  {
                        "id": "B",
                        "text": "Método de elección: Punción aspirativa con aguja fina (PAAF) guiada por ecografía. Procedimiento contraindicado: Biopsia ganglionar abierta antes de descartar tumor primario en vía aérea superior."
                  },
                  {
                        "id": "C",
                        "text": "Método de elección: Drenaje por aspiración con trócar grueso pensando en quiste sebáceo. Procedimiento contraindicado: Tomografía computarizada."
                  },
                  {
                        "id": "D",
                        "text": "Método de elección: Exéresis completa de la glándula tiroides de urgencia. Procedimiento contraindicado: Nasofibroscopía flexible."
                  },
                  {
                        "id": "E",
                        "text": "Método de elección: Ciclo empírico de cefadroxilo oral por 21 días. Procedimiento contraindicado: Evaluación por otorrinolaringólogo."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. En un adulto fumador mayor de 40 años, una masa cervical pétrea fija es una metástasis ganglionar de carcinoma epidermoide de cabeza y cuello hasta demostrar lo contrario. El método diagnóstico citológico de primera línea indiscutido es la Punción Aspirativa con Aguja Fina (PAAF) guiada por ecografía, la cual permite tipificar la neoplasia con alta sensibilidad sin diseminar células tumorales. Al mismo tiempo, está TERMINANTEMENTE PROHIBIDO realizar una biopsia incisional o abierta del ganglio sin haber evaluado la vía aérea superior y sin PAAF previa, debido a que la apertura quirúrgica rompe las fascias cervicales, produce siembra tumoral extracapsular masiva, deteriora el pronóstico y complica gravemente el posterior vaciamiento ganglionar cervical radical.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.6.001"
      },
      {
            "stem": "¿Cuál de los siguientes síntomas constituye una bandera roja de sospecha oncológica que obliga a descartar prioritariamente un carcinoma escamoso de la base de la lengua, hipofaringe o laringe mediante nasofibroscopía?",
            "options": [
                  {
                        "id": "A",
                        "text": "Prurito ótico bilateral con descamación del conducto auditivo externo."
                  },
                  {
                        "id": "B",
                        "text": "Otalgia persistente unilateral con examen otoscópico rigurosamente normal."
                  },
                  {
                        "id": "C",
                        "text": "Hipoacusia de conducción que lateraliza al oído afectado en el test de Weber."
                  },
                  {
                        "id": "D",
                        "text": "Estornudos en salva y rinorrea acuosa bilateral matinal."
                  },
                  {
                        "id": "E",
                        "text": "Salida de secreción mucosa bilateral no fétida con tímpanos íntegros."
                  }
            ],
            "correcta": "B",
            "explicacion": "La opción correcta es la B. La otalgia referida o refleja unilateral en presencia de un oído completamente sano (otoscopía normal) es una de las banderas rojas oncológicas más características de los tumores malignos del tracto aerodigestivo superior. El dolor se transmite por vía refleja a través de ramos sensitivos de los nervios craneales que inervan tanto la orofaringe/hipofaringe como el oído (el nervio glosofaríngeo a través del nervio timpánico de Jacobson, y el nervio vago a través del nervio auricular de Arnold). En todo adulto, especialmente si tiene antecedentes de tabaco o alcohol, este hallazgo exige nasofibroscopía inmediata para buscar un cáncer primario en amígdalas, base de lengua o laringe.",
            "recTag": "Banco Oficial AEE · Perfil V3 4.02.6.001"
      }
]
  },
];

module.exports = {
  otorrinoClasses,
  flow
};
