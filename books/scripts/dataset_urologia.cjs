/**
 * DATASET MASTER · Tomo 13: Urología
 * EUNACOM 2026 · Colección Oficial · Módulo 2 Cirugía y Especialidades Quirúrgicas
 * Color Oficial: #0369a1 (Azul Zafiro) · Código: UR · 15 Clases · 4 Bloques · 45 Preguntas AEE
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
    .acc{fill:var(--acc, #0369a1)}.accT{fill:#fff}.accS{font-size:8px;fill:#e0f2fe}
    .dec{fill:var(--acc-t, #f0f9ff);stroke:var(--acc-p, #bae6fd);stroke-width:1}
    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}
    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar)}
  </style>
  ${P.join('\n  ')}
</svg>`;
  return { title, svg };
}


const urologiaClasses = [
  {
    "id": "uro-01",
    "classId": "uro-01",
    "tier": 3,
    "blockNum": 1,
    "blockName": "Urolitiasis & Obstrucción Urinaria",
    "topicLabel": "13.1",
    "title": "Cólico Renal y Litiasis Urinaria: TAC sin Contraste, Manejo del Dolor & Expulsión Espontánea",
    "perfilCode": "4.01.1.007",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Completo",
    "ges": "Sin garantía GES específica · Ley de Urgencias en sepsis urológica o anuria obstructiva",
    "reconstrucciones": "EUNACOM Julio 2017 (Q#45) · EUNACOM Diciembre 2019 (Q#82) · EUNACOM Diciembre 2022 (Q#34)",
    "frecuencia": "Máxima rentabilidad · 3 a 5 preguntas por examen sobre analgésicos de 1ª línea, Pielotac y conducta según tamaño",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico y Terapéutico del Cólico Renal y Litiasis Urinaria",
    "contexto": "El dolor del cólico renal no se debe al raspado del cálculo sobre el urotelio sino a la distensión aguda de la cápsula renal y del músculo liso piélico provocada por la obstrucción intraluminal. Los AINEs son los fármacos de primera línea indiscutidos (superiores a los opioides) porque bloquean la síntesis de prostaglandinas que median tanto la hiperemia intrarrenal como el espasmo ureteral hipertensivo. El TAC sin contraste (Pielotac) es el patrón de oro diagnóstico porque detecta cálculos de cualquier composición química (incluso radiolúcidos de ácido úrico) con sensibilidad superior al 98%.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología del Cólico Renal y Mecanismo del Espasmo",
        "paragraphs": [
          "La <strong>urolitiasis</strong> es una patología crónica y recidivante producida por la sobresaturación urinaria y precipitación de cristales en las papilas renales (placas de Randall). Cuando un cálculo migra y se enclava en los estrechamientos fisiológicos del uréter (unión pieloureteral, cruce de vasos ilíacos o unión ureterovesical), genera una obstrucción aguda del flujo de orina.",
          "La presión retrógrada resultante estimula la síntesis intrarrenal de <strong>prostaglandinas vasodilatadoras (PGE2, PGI2)</strong>, lo que paradójicamente incrementa el flujo sanguíneo glomerular e hiperpresiona la pelvis y cápsula renal. Esto desencadena el clásico dolor paroxístico cólico que sigue el dermatoma genitofemoral e ilioinguinal (T10-L2), acompañado de náuseas, vómitos y gran inquietud motora sin posición antiálgica (véase Tabla 13.1.A)."
        ]
      },
      {
        "subhead": "2. Diagnóstico por Imágenes: Supremacía del Pielotac vs Ecografía",
        "paragraphs": [
          "El diagnóstico sindromático del cólico renal es esencialmente <strong>clínico</strong>. Sin embargo, para definir la conducta médica o quirúrgica se requiere precisar la localización anatómica exacta, el eje mayor del lito en milímetros y la presencia de hidronefrosis.",
          "El <strong>Pielotac (TAC de abdomen y pelvis sin contraste)</strong> es el examen de elección indiscutido: tiene una sensibilidad y especificidad superiores al 98%, identifica litiasis de cualquier etiología (incluyendo cálculos radiolúcidos de ácido úrico no visibles en radiografía simple) y descarta diagnósticos diferenciales críticos como aneurisma de aorta abdominal roto, apendicitis o diverticulitis. La ecografía renal y pelviana queda reservada para embarazadas, niños o centros sin acceso a tomógrafo (véase Figura 13.1)."
        ]
      },
      {
        "subhead": "3. Manejo Analgésico Agudo: Superioridad de los AINEs",
        "paragraphs": [
          "El pilar del tratamiento sintomático de urgencia son los <strong>antiinflamatorios no esteroidales (AINEs) por vía endovenosa</strong>, tales como Ketorolaco (30 mg EV) o Ketoprofeno (100 mg EV). Los AINEs no solo actúan como analgésicos centrales y periféricos, sino que revierten el mecanismo fisiopatológico clave al inhibir la COX intrarrenal, reduciendo el filtrado glomerular y aboliendo el espasmo ureteral.",
          "Los <strong>opioides (tramadol, morfina o fentanilo)</strong> constituyen la segunda línea de rescate: se reservan para dolor refractario, insuficiencia renal aguda previa o contraindicación estricta de AINEs, teniendo como desventaja el agravamiento de las náuseas, el íleo paralítico y los vómitos de origen autonómico."
        ]
      },
      {
        "subhead": "4. Conducta Definitiva según Tamaño del Cálculo",
        "paragraphs": [
          "Una vez estabilizado el dolor, el manejo definitivo depende estrictamente del diámetro máximo del lito: los cálculos <strong>menores a 5 mm</strong> presentan una tasa de expulsión espontánea del 80-90% en 2 a 4 semanas; se manejan de forma ambulatoria con analgésicos condicionales, hidratación generosa y tamizaje de la orina con colador de tela para análisis cristalográfico.",
          "En litiasis de <strong>5 a 10 mm</strong> se instaura Terapia Médica Expulsiva (TME) con un alfa-1 bloqueante como <strong>Tamsulosina (0.4 mg/día vía oral)</strong>, que relaja el músculo liso del uréter distal aumentando la tasa de expulsión y acortando los días de dolor. Cálculos <strong>mayores a 10 mm</strong> tienen baja probabilidad de salida espontánea y requieren intervención urológica activa: Litotripsia Extracorpórea por Ondas de Choque (LEOC) para litiasis renal o ureteral proximal, o Ureteroscopía semirrígida/flexible con láser para litiasis ureteral media y distal."
        ]
      },
      {
        "subhead": "5. Banderas Rojas y Prevención Secundaria de Recurrencias",
        "paragraphs": [
          "Constituyen <strong>emergencias urológicas absolutas</strong> que exigen hospitalización inmediata y descompresión urgente de la vía urinaria (mediante catéter Doble J o nefrostomía percutánea): el cólico renal asociado a fiebre o sepsis (pionefrosis obstructiva), la obstrucción en paciente monorreno anatómico o funcional, la anuria o el dolor refractario a analgesia máxima.",
          "La medida preventiva más costo-efectiva a largo plazo para todos los pacientes es mantener una <strong>ingesta de agua superior a 2.5 a 3.0 litros diarios</strong> para asegurar un volumen urinario > 2.0 L/día con densidad < 1.010. El estudio metabólico orienta terapias dirigidas: Hidroclorotiazida en hipercalciuria idiopática, Citrato de potasio en hipocitraturia o cálculos de ácido úrico, y quelantes de oxalato en hiperoxaluria entérica."
        ]
      }
    ],
    "table": {
      "title": "Tipos de Cálculos Urinarios, Frecuencia y Enfoque Fisiopatológico",
      "headers": [
        "Composición Química",
        "Frecuencia",
        "Aspecto Radiológico",
        "pH Urinario Asociado",
        "Tratamiento Específico"
      ],
      "rows": [
        [
          "Oxalato de Calcio (Mono/Dihidrato)",
          "75 - 80%",
          "Radiopaco denso",
          "Indiferente (5.5 - 6.8)",
          "Hidratación >3 L/d · Dieta hiposódica e hipoproteica animal · Hidroclorotiazida"
        ],
        [
          "Fosfato de Calcio (Brushita/Apatita)",
          "5 - 10%",
          "Radiopaco denso",
          "Alcalino (> 6.5)",
          "Descartar hiperparatiroidismo primario y acidosis tubular renal distal (tipo 1)"
        ],
        [
          "Ácido Úrico",
          "5 - 10%",
          "Radiolúcido en Rx (visible en TAC)",
          "Ácido (< 5.5)",
          "Alcalinización urinaria con Citrato de Potasio (meta pH 6.5-7.0) + Alopurinol"
        ],
        [
          "Fosfato Amónico Magnésico (Estruvita)",
          "5 - 8%",
          "Radiopaco moderado (Coraliforme)",
          "Muy alcalino (> 7.2)",
          "Asociado a bacterias productoras de ureasa (Proteus) · Nefrolitotomía percutánea + Antibióticos"
        ],
        [
          "Cistina",
          "1 - 2%",
          "Débilmente radiopaco (vidrio esmerilado)",
          "Ácido (< 6.0)",
          "Cistinuria congénita · Hidratación masiva (>4 L/d) · Alcalinización + Tiopronina/D-penicilamina"
        ]
      ]
    },
    "severityTable": {
      "title": "Criterios de Hospitalización y Derivación Urológica Urgente",
      "headers": [
        "Criterio de Gravedad",
        "Significado Fisiopatológico",
        "Conducta Obligatoria de 1ª Línea"
      ],
      "rows": [
        [
          "Cólico Renal + Fiebre / Síntomas Sépticos",
          "Pionefrosis: infección sobreagregada en vía obstruida (shock séptico)",
          "Hospitalización inmediata + Hemocultivos + Ceftriaxona EV + Descompresión urgente (Doble J)"
        ],
        [
          "Obstrucción en Riñón Único o Monorreno",
          "Riesgo inminente de necrosis tubular y pérdida renal definitiva",
          "TAC urgente + Descompresión urológica inmediata en pabellón"
        ],
        [
          "Anuria u Oliguria Extrema (< 0.5 mL/kg/h)",
          "Falla renal aguda postrenal obstructiva bilateral o unilateral en monorreno",
          "Evaluación urgente por urología para derivación urinaria antes de diálisis"
        ],
        [
          "Dolor Incontrolable o Vómitos Intratables",
          "Fracaso del manejo médico ambulatorio con riesgo de deshidratación",
          "Hospitalización para analgesia endovenosa continua e hidratación parenteral"
        ],
        [
          "Cálculo > 10 mm o Persistencia > 4 semanas",
          "Baja probabilidad de expulsión y riesgo de estenosis ureteral cicatrizal",
          "Derivación para resolución urológica electiva (LEOC, Ureteroscopía)"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Protocolo Terapéutico Escalonado en Urolitiasis",
      "headers": [
        "Escenario Clínico",
        "Objetivo Primario",
        "Tratamiento Farmacológico / Procedimiento"
      ],
      "rows": [
        [
          "Crisis Aguda de Cólico Renal",
          "Alivio sintomático y reversión del espasmo",
          "Ketorolaco 30 mg EV o Ketoprofeno 100 mg EV · Segunda línea: Tramadol 50-100 mg EV o Morfina 4-6 mg EV"
        ],
        [
          "Cálculo Ureteral < 5 mm (No complicado)",
          "Facilitar expulsión espontánea en 2-4 semanas",
          "AINEs orales a demanda · Hidratación hídrica normal (no sobrehidratar en agudo) · Filtrar orina con colador"
        ],
        [
          "Cálculo Ureteral 5 - 10 mm",
          "Terapia Médica Expulsiva (TME)",
          "Tamsulosina 0.4 mg/día VO por 28 días + Analgesia condicional · Control ecográfico o Pielotac a las 4 semanas"
        ],
        [
          "Cálculo Renal o Ureteral Alto > 10 mm",
          "Fragmentación no invasiva",
          "Litotripsia Extracorpórea por Ondas de Choque (LEOC) · Éxito condicionado por densidad < 1.000 UH"
        ],
        [
          "Cálculo Ureteral Distal o Pélvico > 10 mm",
          "Extracción endourológica directa",
          "Ureteroscopía semirrígida o flexible con litotripsia láser Holmium y canastillo de Dormia"
        ],
        [
          "Cálculo Coraliforme o > 20 mm",
          "Remoción de masa litiásica completa",
          "Nefrolitotomía Percutánea (NLPC) a través de tracto percutáneo renal"
        ]
      ]
    },
    "vignette": "Hombre de 34 años, previamente sano, consulta en el Servicio de Urgencias por dolor súbito y desgarrador en la fosa lumbar derecha de 3 horas de evolución. El dolor es paroxístico e insoportable, se irradia por el flanco hacia la región inguinal y el testículo derecho, y se acompaña de dos episodios de vómitos profusos. Al examen: PA 155/95 mmHg, FC 102 lpm, afebril (36.7 °C). Se observa extremadamente inquieto, revolcándose en la camilla sin encontrar postura de alivio. El abdomen es blando, depresible, sin signos de irritación peritoneal, con puñopercusión lumbar derecha intensamente positiva. Sedimento de orina: microhematuria con 50-60 eritrocitos por campo.",
    "explicacion": "El cuadro clínico corresponde al clásico cólico renal agudo por litiasis ureteral enclavada. La conducta médica inmediata de primera línea es la administración de analgésicos endovenosos del grupo AINE (Ketorolaco 30 mg EV o Ketoprofeno 100 mg EV), los cuales actúan directamente sobre el mecanismo fisiopatológico reduciendo la contractilidad ureteral y la presión intrapélvica. Para precisar el tamaño y posición del cálculo y descartar complicaciones, el examen diagnóstico de elección es el Pielotac (TAC sin contraste). No debe indicarse urografía con contraste ni diferirse la analgesia a la espera de imágenes.",
    "keyPoints": [
      "El dolor cólico renal es provocado por la sobredistensión capsular y piélica mediada por prostaglandinas.",
      "Los AINEs endovenosos (ketorolaco, ketoprofeno) son la primera línea analgésica obligatoria; los opioides son segunda línea.",
      "El examen de elección indiscutido para dimensionar el cálculo es el Pielotac (TAC sin contraste).",
      "Cálculos < 5 mm expulsan espontáneamente en 80-90% de los casos; cálculos de 5 a 10 mm requieren Tamsulosina 0.4 mg/d.",
      "Cálculos > 10 mm requieren resolución quirúrgica activa: LEOC en polo superior/uréter proximal y Ureteroscopía en uréter distal.",
      "La combinación de cólico renal + fiebre o sepsis constituye una pionefrosis obstructiva y exige descompresión urgente inmediata.",
      "La medida universal más efectiva para prevenir recidivas litiásicas es la ingesta de agua superior a 2.5 a 3 litros al día.",
      "Nunca indicar diuréticos ni forzar sobrehidratación rápida en la fase aguda del dolor, ya que incrementa la presión intraluminal y exacerba el cólico."
    ],
    "questions": [
      {
        "stem": "Hombre de 35 años consulta a urgencias por dolor lumbar derecho brusco de 2 horas de evolución, irradiado a testículo ipsilateral, acompañado de gran inquietud motora y vómitos. Signos vitales: PA 140/85 mmHg, FC 98 lpm, afebril (36.6 °C). Al examen: abdomen blando sin peritonismo, puñopercusión lumbar derecha dolorosa. Tras administrar ketorolaco EV con excelente alivio del dolor, ¿cuál es el examen de elección para evaluar el tamaño y ubicación exacta del cálculo?",
        "options": [
          {
            "id": "A",
            "text": "Ecografía renal y vesical con Doppler"
          },
          {
            "id": "B",
            "text": "TAC de abdomen y pelvis sin contraste (Pielotac)"
          },
          {
            "id": "C",
            "text": "Urografía excretora con medio de contraste yodado"
          },
          {
            "id": "D",
            "text": "Radiografía simple de abdomen en bipedestación"
          },
          {
            "id": "E",
            "text": "Resonancia magnética de vías urinarias (Uro-RM)"
          }
        ],
        "correcta": "B",
        "explicacion": "El TAC de abdomen y pelvis sin contraste (Pielotac) es el estándar de oro para el estudio de la litiasis urológica. Posee una sensibilidad y especificidad >98%, permitiendo visualizar cálculos de cualquier tamaño y composición (incluso los de ácido úrico que son radiolúcidos en radiografía simple). Permite medir con precisión milimétrica el lito y objetivar el grado de hidronefrosis para definir si corresponde manejo expectante o intervención urológica. Perla. La ecografía renal tiene menor rendimiento para litiasis ureterales intermedias y se reserva para embarazadas.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.1.007"
      },
      {
        "stem": "Mujer de 28 años con diagnóstico tomográfico de litiasis en tercio medio del uréter derecho de 7 mm de diámetro mayor, no obstructiva severa. El dolor fue controlado satisfactoriamente en urgencias. Función renal normal y sedimento sin signos de infección. ¿Cuál es la conducta terapéutica ambulatoria más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Observación simple con analgesia a demanda sin fármacos adicionales"
          },
          {
            "id": "B",
            "text": "Terapia médica expulsiva con tamsulosina 0.4 mg/día por hasta 4 semanas"
          },
          {
            "id": "C",
            "text": "Indicación inmediata de litotripsia extracorpórea de urgencia"
          },
          {
            "id": "D",
            "text": "Nefrolitotomía percutánea ambulatoria"
          },
          {
            "id": "E",
            "text": "Instalación de catéter Doble J profiláctico bajo anestesia local"
          }
        ],
        "correcta": "B",
        "explicacion": "Los cálculos ureterales entre 5 y 10 mm presentan una probabilidad intermedia de eliminación espontánea. La guía clínica internacional y nacional recomienda el uso de Terapia Médica Expulsiva (TME) mediante alfa-1 bloqueantes como Tamsulosina (0.4 mg una vez al día) durante un periodo de 2 a 4 semanas. Este fármaco relaja el músculo liso ureteral distal, duplicando la tasa de expulsión y reduciendo significativamente los requerimientos de analgesia de rescate. Perla. Si al cabo de 4 semanas no se ha expulsado el lito, se programa resolución quirúrgica activa.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.1.007"
      },
      {
        "stem": "Hombre de 52 años monorreno quirúrgico derecho consulta en el Servicio de Urgencias por dolor lumbar izquierdo sordo y sensación nauseosa de 8 horas de evolución. Refiere que no ha orinado en las últimas 6 horas (anuria confirmada). Exámenes: Creatinina 4.1 mg/dL (basal 1.1 mg/dL), K 5.8 mEq/L. TAC sin contraste revela lito impactado de 9 mm en la unión pieloureteral izquierda con dilatación pielocalicial moderada. ¿Cuál es la conducta prioritaria inmediata?",
        "options": [
          {
            "id": "A",
            "text": "Infusión endovenosa de 2.000 mL de suero fisiológico para forzar diuresis"
          },
          {
            "id": "B",
            "text": "Hemodiálisis urgente por catéter venoso central y diferir urología"
          },
          {
            "id": "C",
            "text": "Descompresión urológica urgente de la vía urinaria con catéter Doble J o nefrostomía"
          },
          {
            "id": "D",
            "text": "Iniciar tamsulosina 0.4 mg oral y esperar 48 horas de evolución"
          },
          {
            "id": "E",
            "text": "Administrar furosemida 80 mg endovenosa en bolo directo"
          }
        ],
        "correcta": "C",
        "explicacion": "El paciente presenta una Injuria Renal Aguda postrenal anúrica en un riñón único funcionante. Esto constituye una emergencia urológica absoluta que amenaza de forma inminente la vida y la sobrevida del parénquima renal. La conducta mandatoria es la descompresión urgente de la vía urinaria mediante la colocación retrógrada de un catéter Doble J o la punción anterógrada de una nefrostomía percutánea. Trampa. La infusión de fluidos masivos o diuréticos de asa en una vía urinaria obstruida está contraindicada porque provoca edema pulmonar agudo y mayor daño glomerular.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.1.007"
      },
      {
        "stem": "Paciente de 44 años con antecedentes de tres episodios previos de cólico renal por cálculos de oxalato de calcio. En su estudio metabólico ambulatorio se confirma hipercalciuria idiopática con calcemia y función renal normales. Además de asegurar una ingesta hídrica mayor a 3 litros al día y restricción de sodio, ¿cuál es el fármaco de elección para prevenir nuevas recurrencias?",
        "options": [
          {
            "id": "A",
            "text": "Alopurinol 300 mg/día"
          },
          {
            "id": "B",
            "text": "Citrato de potasio oral"
          },
          {
            "id": "C",
            "text": "Hidroclorotiazida 25 a 50 mg/día"
          },
          {
            "id": "D",
            "text": "Furosemida 20 mg/día"
          },
          {
            "id": "E",
            "text": "Carbonato de calcio con las comidas"
          }
        ],
        "correcta": "C",
        "explicacion": "La hidroclorotiazida (diurético tiazídico) es el tratamiento farmacológico de primera línea en la urolitiasis cálcica recidivante asociada a hipercalciuria idiopática. Las tiazidas estimulan la reabsorción activa de calcio en el túbulo contorneado distal, disminuyendo significativamente la concentración de calcio en la orina y evitando la sobresaturación de sales de oxalato. Adicionalmente, confiere protección mineral ósea. Perla. La furosemida por el contrario es calciúrica y aumentaría la formación de litos.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.1.007"
      }
    ],
    "diagram": flow("Algoritmo Diagnóstico y Terapéutico del Cólico Renal y Litiasis Urinaria", [
        {
              "t": "Sospecha de Cólico Renal Agudo",
              "s": "Dolor lumbar/flanco irradiado a genitales · Inquietud psicomotora · Náuseas/vómitos",
              "type": "warn"
        },
        {
              "k": "split",
              "q": "¿Presenta Criterios de Urgencia Urológica Absoluta (Fiebre/Sepsis, Monorreno o Anuria)?",
              "ll": "Sí: Fiebre >38°C, leucocitosis, anuria o monorreno",
              "left": {
                    "t": "Urgencia Quirúrgica Descompresiva",
                    "s": "Hospitalización inmediata · Antibioticoterapia EV · Catéter Doble J o Nefrostomía percutánea",
                    "type": "warn"
              },
              "rl": "No: Paciente hemodinámicamente estable sin infección",
              "right": {
                    "t": "Analgesia de Primera Línea + Pielotac",
                    "s": "AINEs EV (Ketorolaco/Ketoprofeno) · TAC abdomen/pelvis sin contraste",
                    "type": "dec"
              }
        },
        {
              "k": "split",
              "q": "¿Cuál es el Tamaño y Ubicación del Cálculo en el Pielotac?",
              "ll": "Cálculo < 5 mm",
              "left": {
                    "t": "Manejo Médico Expulsivo (Observación)",
                    "s": "Hidratación + AINEs orales · Filtro/colador urinario · Control en 2-4 semanas",
                    "type": "acc"
              },
              "rl": "Cálculo 5-10 mm vs > 10 mm",
              "right": {
                    "t": "Tamsulosina vs Litotripsia / Ureteroscopía",
                    "s": "5-10 mm: Tamsulosina 0.4 mg/d · >10 mm: LEOC o Ureteroscopía (distal)",
                    "type": "dec"
              }
        }
  ])
  },
  {
    "id": "uro-02",
    "classId": "uro-02",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Urolitiasis & Obstrucción Urinaria",
    "topicLabel": "13.2",
    "title": "Uropatía Obstructiva Aguda y Retención Urinaria: Sonda Foley vs Cistostomía",
    "perfilCode": "4.01.2.001",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Completo",
    "ges": "Ley de Urgencias en anuria obstructiva y sepsis urológica asociada",
    "reconstrucciones": "EUNACOM Diciembre 2018 (Q#56) · EUNACOM Julio 2021 (Q#12)",
    "frecuencia": "Alta rentabilidad · técnica de descompresión vesical y contraindicaciones de la sonda Foley",
    "svg": null,
    "algoTitle": "Algoritmo de Descompresión Urinaria de Urgencia en Globo Vesical",
    "contexto": "La retención aguda de orina (RAO) es la incapacidad súbita de vaciar la vejiga repleta, constituyendo una emergencia dolorosa que compromete rápidamente la función renal. La causa más frecuente en varones añosos es la hiperplasia prostática benigna descompensada por anticolinérgicos, opiáceos o alcohol. La regla de oro mandatoria es que ante cualquier signo de trauma uretral (uretrorragia, fractura pelviana o hematoma perineal), está estrictamente contraindicado intentar pasar una sonda Foley por el riesgo de seccionar un uretra parcialmente desgarrada, requiriendo en su lugar cistostomía suprapúbica percutánea.",
    "contentSections": [
      {
        "subhead": "1. Etiología y Presentación Clínica de la Retención Aguda de Orina",
        "paragraphs": [
          "La <strong>Retención Aguda de Orina (RAO)</strong> se manifiesta por dolor intenso en hipogastrio, agitación, diaforesis y la presencia al examen de un <strong>globo vesical palpable</strong> (masa convexa, dolorosa y de matidez hipogástrica que sobrepasa la sínfisis púbica). En pacientes añosos o con vejiga neurógena puede presentarse como incontinencia paradójica por rebalse.",
          "Las causas se agrupan en mecánicas (HPB, cáncer de próstata, litiasis uretral enclavada, coágulos vesicales, estenosis uretral), neurológicas (vejiga neurogénica, shock espinal) y farmacológicas (anticolinérgicos, antihistamínicos de 1ª generación, descongestionantes simpaticomiméticos y opiáceos)."
        ]
      },
      {
        "subhead": "2. Selección de la Técnica Descompresiva: Foley vs Cistostomía",
        "paragraphs": [
          "La <strong>sonda vesical transuretral (Foley 16-18 Fr)</strong> es la técnica de descompresión de primera elección en ausencia de contraindicaciones. Se debe lubricar generosamente la uretra con jeringa de lidocaína jalea al 2%, avanzar con suavidad y constatar salida de orina antes de insuflar el balón con agua bidestilada (nunca aire ni suero fisiológico para evitar cristalización).",
          "La <strong>Cistostomía suprapúbica por punción (Cystofix)</strong> está formalmente indicada en: (1) Sospecha o confirmación de trauma uretral (sangre en el meato, hematoma escrotal/perineal o fractura pélvica); (2) Imposibilidad técnica de cateterismo por estenosis uretral severa o falsa vía; y (3) Prostatitis aguda bacteriana grave con retención, donde el sondeo uretral es dolorosísimo y puede inducir bacteriemia."
        ]
      },
      {
        "subhead": "3. Manejo Post-Descompresión y Falsa Controversia de la Hematuria ex Vacuo",
        "paragraphs": [
          "La clásica práctica de clamar intermitentemente la sonda para prevenir la supuesta 'hematuria ex vacuo' o colapso hemodinámico ha sido desmentida por la evidencia urológica moderna: la descompresión debe ser <strong>continua, completa y no fraccionada</strong>, ya que el clampeo perpetúa el dolor y el reflujo vesicoureteral.",
          "Si el volumen inicial evacuado supera los 1.000 mL, el paciente debe mantenerse en observación por riesgo de <strong>diuresis post-obstructiva</strong> (poliuria marcada por pérdida transitoria del gradiente medular renal) que puede desencadenar hipovolemia e hipokalemia severas. Todo paciente con RAO debe ser derivado a urología para estudio causal (véase Tabla 13.2)."
        ]
      }
    ],
    "table": {
      "title": "Comparación Técnica: Sonda Foley Transuretral vs Cistostomía Suprapúbica",
      "headers": [
        "Parámetro",
        "Sonda Foley Transuretral",
        "Cistostomía Suprapúbica (Punción)"
      ],
      "rows": [
        [
          "Indicación Principal",
          "RAO por HPB, farmacológica o funcional sin trauma",
          "Trauma uretral, estenosis infranqueable, prostatitis bacteriana aguda"
        ],
        [
          "Contraindicación Absoluta",
          "Sospecha de lesión uretral (uretrorragia, fractura de pelvis)",
          "Ausencia de globo vesical palpable, cicatrices quirúrgicas bajas múltiples"
        ],
        [
          "Calibre habitual",
          "16 a 18 French (adulto)",
          "10 a 14 French (trocar)"
        ],
        [
          "Líquido para insuflar balón",
          "Agua bidestilada estéril (10 mL)",
          "Fijación con aletas o balón según modelo"
        ],
        [
          "Complicaciones tempranas",
          "Falsa vía uretral, uretrorragia, infección",
          "Punción intestinal (si no hay globo), hematoma de pared abdominal"
        ]
      ]
    },
    "vignette": "Hombre de 72 años consulta por intenso dolor en el bajo vientre e imposibilidad absoluta de orinar desde hace 14 horas, tras haber ingerido clorfenamina para un cuadro catarral. Se encuentra taquicárdico, diaforético y quejumbroso. Al examen físico se constata una masa palpable, dolorosa y mate en el hipogastrio que asciende 4 cm por encima del pubis. No hay antecedentes de trauma ni sangrado meatal.",
    "explicacion": "El paciente presenta una Retención Aguda de Orina desencadenada por el uso de un antihistamínico con potente efecto anticolinérgico sobre el músculo detrusor, en el contexto probable de una hiperplasia prostática de base. La conducta de primera línea obligatoria es la instalación inmediata de una sonda vesical tipo Foley para descompresión vesical continua y alivio del dolor. El clampeo fraccionado no está indicado y se debe registrar el volumen evacuado para monitorizar posible diuresis post-obstructiva.",
    "keyPoints": [
      "La RAO cursa con dolor hipogástrico agudo y globo vesical palpable y mate a la percusión.",
      "La instalación de sonda Foley 16-18 Fr es la primera maniobra en ausencia de signos traumáticos.",
      "Uretrorragia, hematoma perineal en mariposa o fractura pelviana contraindican absolutamente la sonda Foley.",
      "Ante contraindicación o falla del cateterismo transuretral, se realiza cistostomía suprapúbica por punción.",
      "La descompresión de la vejiga debe ser completa y continua; el clampeo intermitente está obsoleto.",
      "Volúmenes de evacuación superiores a 1.000 mL obligan a monitorizar diuresis y electrolitos por poliuria post-obstructiva."
    ],
    "questions": [
      {
        "stem": "Hombre de 24 años es traído a la urgencia tras sufrir un accidente en motocicleta con impacto en el periné contra el estanque. Al examen físico se observa sangre en el meato uretral (uretrorragia) y un voluminoso hematoma perineal en alas de mariposa. El paciente refiere intensos deseos de orinar pero no lo logra, palpándose un globo vesical a tensión. ¿Cuál es la conducta inicial más adecuada para descomprimir la vía urinaria?",
        "options": [
          {
            "id": "A",
            "text": "Instalar sonda Foley 18 Fr lubricada con lidocaína jalea con técnica estéril"
          },
          {
            "id": "B",
            "text": "Realizar cistostomía suprapúbica percutánea con trocar"
          },
          {
            "id": "C",
            "text": "Indicar analgesia potente y esperar relajación del esfínter externo"
          },
          {
            "id": "D",
            "text": "Intentar cateterismo con sonda nelaton semirrígida de pequeño calibre"
          },
          {
            "id": "E",
            "text": "Administrar tamsulosina oral y solicitar ecografía vesical de rutina"
          }
        ],
        "correcta": "B",
        "explicacion": "La presencia de uretrorragia y hematoma perineal en mariposa tras trauma pélvico o perineal es patognomónica de rotura de uretra (generalmente bulbar o membranosa). En este escenario, el cateterismo vesical a ciegas con sonda Foley está formalmente contraindicado porque puede convertir una rotura parcial en una sección uretral completa o provocar falsas vías e infección masiva. La conducta de elección inmediata para resolver la retención urinaria es la cistostomía suprapúbica por punción. Perla. El estudio posterior de la rotura se realiza con uretrocistografía retrógrada.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.2.001"
      },
      {
        "stem": "Varón de 69 años con retención urinaria aguda de 12 horas es sondado con éxito en urgencias mediante sonda Foley, evacuándose de forma inmediata 1.400 mL de orina clara. El paciente refiere alivio inmediato del dolor. ¿Cuál es la complicación fisiopatológica que debe monitorizarse con mayor atención en las primeras 24 horas?",
        "options": [
          {
            "id": "A",
            "text": "Reflejo vasovagal sostenido con paro cardíaco"
          },
          {
            "id": "B",
            "text": "Síndrome de diuresis post-obstructiva con deshidratación e hipokalemia"
          },
          {
            "id": "C",
            "text": "Estenosis uretral isquémica precoz"
          },
          {
            "id": "D",
            "text": "Necrosis tubular aguda anúrica irreversible"
          },
          {
            "id": "E",
            "text": "Hematuria ex vacuo masiva con shock hipovolémico"
          }
        ],
        "correcta": "B",
        "explicacion": "Tras la descompresión rápida de una obstrucción urinaria severa y prolongada (especialmente con volúmenes > 1.000 mL), puede desencadenarse el síndrome de diuresis post-obstructiva. Se produce por la pérdida del gradiente de concentración medular, la excreción forzada de urea retenida y la insensibilidad tubular transitoria a la ADH, pudiendo generar diuresis masiva (> 200 mL/h) con deshidratación grave, hiponatremia o hipokalemia si no se reponen parcialmente las pérdidas hidrosalinas. Perla. La hematuria ex vacuo es un evento benigno autolimitado.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.2.001"
      },
      {
        "stem": "Hombre de 76 años con antecedentes de hiperplasia prostática benigna consulta por retención aguda de orina. Durante el procedimiento de cateterismo vesical, el médico de urgencias insufla el balón de la sonda Foley al sentir resistencia, produciéndose intenso dolor y sangrado uretral activo rutilante sin salida de orina. ¿Cuál es el error técnico cometido y la conducta a seguir?",
        "options": [
          {
            "id": "A",
            "text": "Balón insuflado en uretra prostática; desinflar el balón, retirar la sonda y realizar cistostomía suprapúbica"
          },
          {
            "id": "B",
            "text": "Perforación del fondo vesical; avanzar la sonda otros 10 cm y lavar con suero helado"
          },
          {
            "id": "C",
            "text": "Rotura de la arteria pudenda; solicitar angiografía con embolización inmediata"
          },
          {
            "id": "D",
            "text": "Espasmo del esfínter externo; inyectar lidocaína endovenosa y seguir empujando"
          },
          {
            "id": "E",
            "text": "Falsa vía no complicada; dejar el balón inflado para hacer compresión hemostática"
          }
        ],
        "correcta": "A",
        "explicacion": "El error clásico consiste en insuflar el balón de autorretención en la uretra prostática o bulbar antes de constatar la presencia franca de orina en el extremo del catéter, lo que desgarra la mucosa uretral y produce dolor agudo y uretrorragia por falsa vía. La conducta inmediata es desinflar completamente el balón, retirar la sonda con suavidad y, ante el fracaso del cateterismo y la existencia de globo vesical, proceder a una cistostomía suprapúbica para descompresión urinaria segura y reposo de la uretra lesionada.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.2.001"
      }
    ],
    "diagram": flow("Algoritmo de Descompresión Urinaria de Urgencia en Globo Vesical", [
        {
              "t": "Paciente con Imposibilidad de Orinar y Dolor Hipogástrico Intenso",
              "s": "Palpación de masa dolorosa en hipogastrio mate a la percusión (Globo Vesical)",
              "type": "warn"
        },
        {
              "k": "split",
              "q": "¿Existen Signos de Traumatismo Uretral (Uretrorragia, Hematoma en Mariposa, Próstata Flotante)?",
              "ll": "Sí: Sospecha de rotura uretral o estenosis infranqueable",
              "left": {
                    "t": "Cistostomía Suprapúbica Inmediata",
                    "s": "Contraindicación absoluta de sonda Foley a ciegas · Punción percutánea (Cystofix)",
                    "type": "warn"
              },
              "rl": "No: Causa médica o prostática sin sospecha traumática",
              "right": {
                    "t": "Instalación de Sonda Foley 16-18 Fr",
                    "s": "Descompresión vesical suave y continua · Medir débito evacuado",
                    "type": "acc"
              }
        }
  ])
  },
  {
    "id": "uro-03",
    "classId": "uro-03",
    "tier": 3,
    "blockNum": 1,
    "blockName": "Urolitiasis & Obstrucción Urinaria",
    "topicLabel": "13.3",
    "title": "Hiperplasia Prostática Benigna (HPB): IPSS, Tacto Rectal, Tamsulosina/Finasteride & RTUP",
    "perfilCode": "1.14.1.001",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Completo",
    "ges": "GES N° 10: Tratamiento Quirúrgico de la Hiperplasia Benigna de la Próstata en personas sintomáticas",
    "reconstrucciones": "EUNACOM Julio 2016 (Q#89) · EUNACOM Diciembre 2020 (Q#44) · EUNACOM Julio 2023 (Q#102)",
    "frecuencia": "Máxima rentabilidad · fármacos de 1ª línea, efectos adversos de finasteride e indicaciones de cirugía",
    "svg": null,
    "algoTitle": "Algoritmo de Evaluación y Tratamiento Escalonado de la HPB",
    "contexto": "La HPB es el tumor benigno más frecuente en hombres mayores de 50 años. Su origen celular se sitúa en la zona de transición que rodea la uretra proximal, lo que explica por qué el tamaño prostático absoluto no se correlaciona linealmente con la severidad del cuadro clínico: próstatas pequeñas pero con crecimiento endovesical (lóbulo medio) pueden provocar gran obstrucción urinaria. Los alfa-1 bloqueantes actúan relajando el tono muscular del cuello vesical en 48 horas sin reducir el volumen prostático, mientras que los inhibidores de la 5-alfa reductasa reducen el volumen en un 20-30% tras 6 meses y reducen el APE sérico al 50%.",
    "contentSections": [
      {
        "subhead": "1. Anatomía Zonal y Fisiopatología de los STUI",
        "paragraphs": [
          "La próstata se organiza en zonas según la clasificación de McNeal: la <strong>zona de transición</strong> (donde se desarrolla el 95% de la HPB) y la <strong>zona periférica</strong> (origen del 75-80% de los cánceres de próstata). La proliferación adenomatosa genera dos componentes fisiopatológicos: un <strong>componente estático</strong> (masa glandular que comprime mecánicamente el lumen uretral) y un <strong>componente dinámico</strong> (aumento del tono del músculo liso estromal mediado por receptores alfa-1 adrenérgicos).",
          "Los <strong>síntomas obstructivos o de vaciado</strong> (disminución del calibre del chorro, latencia miccional, esfuerzo miccional, goteo terminal e intermitencia) reflejan la dificultad de salida del flujo. Los <strong>síntomas irritativos o de llenado</strong> (polaquiuria diurna, nicturia > 2 veces, urgencia miccional e incontinencia de urgencia) son consecuencia de la respuesta compensatoria del detrusor, que se hipertrofia formando una 'vejiga de lucha' con trabéculas y pseudodivertículos (véase Tabla 13.3.A)."
        ]
      },
      {
        "subhead": "2. Evaluación Clínica, Tacto Rectal y el Score IPSS",
        "paragraphs": [
          "La evaluación protocolizada de la HPB incluye anamnesis con el cuestionario <strong>IPSS (International Prostate Symptom Score)</strong> de 7 preguntas que categoriza los síntomas en leves (0-7), moderados (8-19) y severos (20-35).",
          "El <strong>Tacto Rectal (TR)</strong> es mandatorio: en HPB la próstata es de consistencia fibroelástica uniforme, bordes netos, indolora y con surco medio conservado o borrado simétricamente; la presencia de nódulos indurados, asimetría pétrea o pérdida de bordes orienta a neoplasia maligna. Los exámenes complementarios indispensables son el sedimento de orina (descartar infección), la creatinina sérica (descartar nefropatía obstructiva) y el <strong>Antígeno Prostático Específico (APE)</strong>."
        ]
      },
      {
        "subhead": "3. Tratamiento Médico Farmacológico: Tamsulosina vs Finasteride",
        "paragraphs": [
          "En pacientes con síntomas leves (IPSS ≤ 7) la conducta recomendada es la <strong>observación vigilante</strong> y cambios de estilo de vida (reducir ingesta de líquidos nocturnos, evitar cafeína, alcohol y anticolinérgicos).",
          "En síntomas moderados a severos (IPSS ≥ 8), los <strong>Alfa-1 bloqueantes selectivos (Tamsulosina 0.4 mg/día VO)</strong> son los fármacos de primera elección: relajan el músculo liso del trígono y próstata en 48 a 72 horas mejorando el flujo en un 20-30%, sin modificar el volumen de la glándula ni el nivel de APE. Su efecto adverso más característico es la eyaculación retrógrada y la hipotensión ortostática. Los <strong>Inhibidores de la 5-Alfa Reductasa (Finasteride 5 mg/día o Dutasteride 0.5 mg/día)</strong> bloquean la conversión de testosterona a dihidrotestosterona (DHT), reduciendo el volumen prostático en 20-25% y disminuyendo el riesgo de RAO y cirugía a largo plazo; están indicados en próstatas > 40 cc. <em>Regla de oro de examen:</em> Finasteride reduce los niveles de APE a la mitad a los 6 meses, por lo que para el screening oncológico el valor medido debe multiplicarse por dos."
        ]
      },
      {
        "subhead": "4. Indicaciones Quirúrgicas Absolutas y Garantías GES N° 10",
        "paragraphs": [
          "La cirugía de la HPB está formalmente indicada ante el fracaso del tratamiento médico o ante la aparición de <strong>complicaciones orgánicas absolutas</strong>: (1) Retención aguda de orina refractaria o a repetición (fracaso de retiro de sonda); (2) Infecciones urinarias recurrentes causadas por estasis vesical; (3) Hematuria macroscópica prostática recurrente refractaria a finasteride; (4) Litiasis vesical secundaria a obstrucción crónica; (5) Divertículos vesicales gigantes; y (6) Dilatación ureterohidronefrótica bilateral o insuficiencia renal postrenal crónica.",
          "En Chile, el <strong>GES N° 10</strong> garantiza el tratamiento quirúrgico para personas con HPB sintomática que cumplan criterios clínicos, estableciendo plazos máximos para la evaluación urológica y la intervención quirúrgica definitiva."
        ]
      },
      {
        "subhead": "5. Técnicas Quirúrgicas: RTUP vs Cirugía Abierta",
        "paragraphs": [
          "El estándar de oro histórico para próstatas con volumen <strong>menor a 80 centímetros cúbicos (cc)</strong> es la <strong>Resección Transuretral de Próstata (RTUP)</strong>, que reseca endoscópicamente el adenoma creando un canal miccional amplio. En la RTUP monopolar clásica con soluciones hipotónicas de glicina existía riesgo del 'Síndrome de RTUP' (hiponatremia dilucional por absorción sistémica masiva de líquido irrigante con confusión mental, cefalea y convulsiones), complicación erradicada en la actualidad mediante RTUP bipolar con solución salina isotónica.",
          "Para próstatas de gran volumen <strong>(> 80 cc)</strong>, la técnica clásica de elección es la <strong>Adenomectomía Prostática Abierta (Millin suprapúbica)</strong>, aunque en centros de alta complejidad la Enucleación Prostática con Láser Holmium (HoLEP) permite resolver próstatas de cualquier tamaño por vía endoscópica con mínima estadía hospitalaria."
        ]
      }
    ],
    "table": {
      "title": "Comparativa de Fármacos en Hiperplasia Prostática Benigna",
      "headers": [
        "Familia Farmacológica",
        "Fármacos Representativos",
        "Mecanismo de Acción",
        "Inicio de Efecto Clínico",
        "Impacto sobre APE",
        "Efectos Adversos Típicos"
      ],
      "rows": [
        [
          "Alfa-1 Bloqueantes Selectivos",
          "Tamsulosina (0.4 mg/d), Silodosina",
          "Relajación del músculo liso estromal y cuello vesical",
          "Rápido (48 a 72 horas)",
          "Ninguno (no altera APE)",
          "Eyaculación retrógrada, mareos, congestión nasal, síndrome de iris flácido"
        ],
        [
          "Inhibidores de 5-Alfa Reductasa (5-ARI)",
          "Finasteride (5 mg/d), Dutasteride (0.5 mg/d)",
          "Inhibición de isoenzimas de 5-AR; supresión de DHT",
          "Lento (3 a 6 meses)",
          "Reduce APE en un 50% (multiplicar x2)",
          "Disfunción eréctil, disminución de libido, ginecomastia, eyaculación reducida"
        ],
        [
          "Terapia Combinada",
          "Tamsulosina + Dutasteride",
          "Sinergia: alivio funcional rápido + reducción anatómica",
          "Rápido y sostenido",
          "Reduce APE en un 50%",
          "Suma de efectos adversos de ambas clases (preferir en próstata >40 cc)"
        ],
        [
          "Inhibidores de Fosfodiesterasa-5 (PDE5i)",
          "Tadalafilo (5 mg/d continuo)",
          "Aumento de GMPc, relajación del músculo detrusor y próstata",
          "1 a 2 semanas",
          "Ninguno",
          "Cefalea, rubor facial, dispepsia (indicado si coexiste disfunción eréctil)"
        ]
      ]
    },
    "severityTable": {
      "title": "Escala Internacional de Síntomas Prostáticos (IPSS) y Conducta Clínica",
      "headers": [
        "Puntuación IPSS",
        "Gravedad de los STUI",
        "Impacto en Calidad de Vida",
        "Conducta Terapéutica Recomendada"
      ],
      "rows": [
        [
          "0 a 7 puntos",
          "Síntomas Leves",
          "Poco o nada afectado en vida diaria",
          "Observación vigilante · Modificación de hábitos (restringir líquidos nocturnos) · Control anual"
        ],
        [
          "8 a 19 puntos",
          "Síntomas Moderados",
          "Afectación moderada de actividades",
          "Monoterapia con Alfa-1 bloqueante (Tamsulosina) · Evaluar 5-ARI si próstata >40 cc"
        ],
        [
          "20 a 35 puntos",
          "Síntomas Severos",
          "Marcada interferencia con el sueño y vida social",
          "Terapia combinada precoz (Tamsulosina + Finasteride) · Evaluar necesidad de cirugía"
        ],
        [
          "Cualquier puntaje + Complicación Orgánica",
          "HPB Complicada",
          "Riesgo de daño vesical o renal",
          "Indicación Quirúrgica Absoluta (GES N° 10): derivación prioritaria a Urología"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Indicaciones y Selección de Técnica Quirúrgica en HPB",
      "headers": [
        "Modalidad Quirúrgica",
        "Criterio de Volumen Prostático",
        "Ventajas Principales",
        "Complicaciones / Riesgos Específicos"
      ],
      "rows": [
        [
          "RTUP Monopolar / Bipolar",
          "Próstata < 80 cc (estándar de oro)",
          "Endoscópica sin herida abdominal · Recuperación rápida (sonda 1-2 días)",
          "Eyaculación retrógrada (75%), sangrado, Síndrome de RTUP (solo monopolar)"
        ],
        [
          "Adenomectomía Abierta (Millin)",
          "Próstata > 80 cc",
          "Extracción completa y rápida del adenoma voluminoso en una sola pieza",
          "Mayor sangrado intraoperatorio, herida dolorosa, estadía prolongada (sonda 5-7 días)"
        ],
        [
          "Enucleación con Láser (HoLEP)",
          "Cualquier tamaño (incluso > 100 cc)",
          "Excelente hemostasia, aplicable en anticoagulados, baja estadía",
          "Requiere cirujano con curva de aprendizaje prolongada e instrumental costoso"
        ],
        [
          "Vaporización con Láser Verde",
          "Próstatas pequeñas a medianas (< 60 cc)",
          "Procedimiento casi ambulatorio, mínimo sangrado",
          "No entrega tejido para biopsia anatomopatológica"
        ]
      ]
    },
    "vignette": "Hombre de 68 años consulta por deterioro progresivo de su calidad miccional desde hace 2 años. Refiere nicturia de 4 a 5 veces cada noche, chorro urinario débil y entrecortado con sensación de vaciamiento incompleto. Puntaje IPSS calculado: 22 puntos. Al examen: abdomen normal sin globo vesical. Tacto rectal: próstata aumentada de tamaño (estimada en 55 cc), superficie lisa, límites netos, consistencia fibroelástica y surco medio borrado, sin zonas induradas. Exámenes de laboratorio: APE total 2.4 ng/mL, creatinina 0.9 mg/dL y sedimento de orina normal. Ecografía vesical confirma residuo postmiccional de 130 mL.",
    "explicacion": "El paciente presenta una Hiperplasia Prostática Benigna con síntomas severos (IPSS 22) y residuo postmiccional patológico, sin complicaciones orgánicas absolutas inmediatas y con tacto rectal y APE benignos. La conducta terapéutica inicial de elección es el tratamiento médico farmacológico. Debido al tamaño prostático (> 40-50 cc) y la severidad de los síntomas, la alternativa más eficaz es iniciar un alfa-1 bloqueante selectivo (Tamsulosina 0.4 mg/día) asociado a un inhibidor de la 5-alfa reductasa (Finasteride 5 mg/día), logrando alivio sintomático rápido y detención de la progresión anatómica.",
    "keyPoints": [
      "La HPB se origina en la zona de transición prostática; el cáncer en la zona periférica.",
      "El tamaño de la próstata al tacto rectal o ecografía NO se correlaciona linealmente con la intensidad de los síntomas.",
      "La Tamsulosina (alfa-1 bloqueante) relaja el músculo liso prostático en 48-72 h sin modificar el volumen ni el APE.",
      "Finasteride (inhibidor 5-AR) reduce el volumen en 25% tras 6 meses y DISMINUYE EL APE AL 50% (multiplicar x2 para interpretar).",
      "Indicaciones absolutas de cirugía: RAO recurrente, ITU recurrente, litiasis vesical, hematuria prostática recurrente e hidronefrosis.",
      "La RTUP es de elección para próstatas < 80 cc; próstatas > 80 cc requieren adenomectomía abierta o enucleación láser (HoLEP).",
      "El Síndrome de RTUP (hiponatremia dilucional) ocurría por reabsorción de glicina en RTUP monopolar; hoy se previene con RTUP bipolar con suero fisiológico.",
      "La cirugía de HPB está cubierta por el GES N° 10 en personas sintomáticas con criterios de indicación quirúrgica."
    ],
    "questions": [
      {
        "stem": "Hombre de 66 años consulta por disminución del chorro urinario, intermitencia y nicturia de 3 veces por noche desde hace 8 meses. Tacto rectal: próstata de 35 cc, consistencia elástica y sin nódulos. APE: 1.8 ng/mL. Cuestionario IPSS: 16 puntos (moderado). Residuo postmiccional: 70 mL. Descartada infección urinaria, ¿cuál es el tratamiento farmacológico de primera línea más adecuado para aliviar sus síntomas?",
        "options": [
          {
            "id": "A",
            "text": "Finasteride 5 mg una vez al día"
          },
          {
            "id": "B",
            "text": "Tamsulosina 0.4 mg una vez al día"
          },
          {
            "id": "C",
            "text": "Oxibutinina 5 mg cada 12 horas"
          },
          {
            "id": "D",
            "text": "Ciprofloxacino 500 mg cada 12 horas por 2 semanas"
          },
          {
            "id": "E",
            "text": "Derivación inmediata para resección transuretral de próstata"
          }
        ],
        "correcta": "B",
        "explicacion": "En la HPB sintomática moderada (IPSS 8-19) en próstatas no muy voluminosas (< 40 cc), el fármaco de primera línea de elección son los alfa-1 bloqueantes selectivos como la Tamsulosina (0.4 mg/día). Actúan bloqueando los receptores alfa-1a adrenérgicos del cuello vesical y estroma prostático, logrando un rápido alivio de los síntomas obstructivos en 48 a 72 horas. Finasteride requiere al menos 3 a 6 meses para mostrar mejoría clínica y se reserva para próstatas > 40 cc. Perla. El efecto adverso más característico de la tamsulosina es la eyaculación retrógrada.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.14.1.001"
      },
      {
        "stem": "Hombre de 71 años en tratamiento con Finasteride 5 mg/día desde hace 1 año por HPB. En su control anual asintomático, el laboratorio informa un APE total sérico de 2.8 ng/mL. El tacto rectal no revela nódulos. ¿Cómo debe interpretarse el valor real de su APE sérico para fines de screening de cáncer de próstata?",
        "options": [
          {
            "id": "A",
            "text": "El valor real es 2.8 ng/mL y se considera normal para su edad"
          },
          {
            "id": "B",
            "text": "El valor real es 5.6 ng/mL y se encuentra en zona de sospecha oncológica"
          },
          {
            "id": "C",
            "text": "El valor real es 1.4 ng/mL debido a la sobrestimación por tiazidas"
          },
          {
            "id": "D",
            "text": "El valor del APE es inválido y debe suspenderse el finasteride por 1 mes para repetir"
          },
          {
            "id": "E",
            "text": "El finasteride no altera el valor plasmático del APE"
          }
        ],
        "correcta": "B",
        "explicacion": "Los inhibidores de la 5-alfa reductasa (finasteride y dutasteride) suprimen la estimulación andrógenica del epitelio prostático, reduciendo el nivel plasmático de APE en un 50% a partir de los 6 meses de uso continuado. Por lo tanto, para interpretar el APE sérico en un paciente que consume finasteride, es mandatorio duplicar el valor informado por el laboratorio (2.8 × 2 = 5.6 ng/mL). Un valor corregido de 5.6 ng/mL sitúa al paciente en la 'zona gris' (4-10 ng/mL), exigiendo control y descartar neoplasia. Perla. Omitir esta corrección retrasa el diagnóstico de cáncer prostático.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.14.1.001"
      },
      {
        "stem": "Paciente de 74 años con diagnóstico de HPB de 4 años de evolución en tratamiento irregular con tamsulosina. Consulta por dolor abdominal y astenia. Laboratorio: Creatinina 3.2 mg/dL (previa 1.0 mg/dL), BUN 64 mg/dL. Ecografía vesicoprostática informa próstata de 60 cc, hidronefrosis bilateral grado III y residuo postmiccional de 380 mL con paredes vesicales engrosadas y trabeculadas. Tras instalar sonda Foley y recuperar la función renal, ¿cuál es la conducta terapéutica definitiva?",
        "options": [
          {
            "id": "A",
            "text": "Mantener sonda Foley a permanencia y cambiar tamsulosina por finasteride"
          },
          {
            "id": "B",
            "text": "Indicar resección transuretral de próstata (RTUP)"
          },
          {
            "id": "C",
            "text": "Realizar nefrostomía bilateral definitiva"
          },
          {
            "id": "D",
            "text": "Aumentar tamsulosina al doble de la dosis y controlar en 6 meses"
          },
          {
            "id": "E",
            "text": "Indicar radioterapia prostática descompresiva"
          }
        ],
        "correcta": "B",
        "explicacion": "El paciente ha desarrollado una insuficiencia renal aguda postrenal por uropatía obstructiva baja bilateral secundaria a HPB descompensada. La falla renal obstructiva secundaria a HPB es una indicación quirúrgica absoluta (Garantía GES N° 10). Dado que el volumen prostático es de 60 cc (menor al umbral de 80 cc), la técnica quirúrgica de elección es la Resección Transuretral de Próstata (RTUP). Trampa. Mantener sonda a permanencia es un error que expone a sepsis urinaria recurrente y pérdida definitiva de la contractilidad del detrusor.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.14.1.001"
      },
      {
        "stem": "Durante el postoperatorio inmediato de una RTUP monopolar en un paciente con próstata de 75 cc tras 120 minutos de cirugía, el paciente presenta confusión mental, desorientación témporo-espacial, cefalea intensa y náuseas. Los signos vitales muestran PA 175/105 mmHg y FC 54 lpm. Laboratorio urgente: Sodio plasmático 116 mEq/L. ¿Cuál es el diagnóstico más probable de esta complicación?",
        "options": [
          {
            "id": "A",
            "text": "Accidente cerebrovascular isquémico embólico"
          },
          {
            "id": "B",
            "text": "Síndrome de RTUP (hiponatremia dilucional por absorción de líquido de irrigación)"
          },
          {
            "id": "C",
            "text": "Shock séptico por translocación bacteriana urinaria"
          },
          {
            "id": "D",
            "text": "Hematoma retroperitoneal masivo con shock hipovolémico"
          },
          {
            "id": "E",
            "text": "Reacción alérgica anafilactoide a la anestesia general"
          }
        ],
        "correcta": "B",
        "explicacion": "El cuadro corresponde al clásico 'Síndrome de RTUP', una complicación típica de la cirugía transuretral monopolar prolongada (> 60-90 minutos) provocada por la absorción masiva hacia los senos venosos prostáticos abiertos del líquido de irrigación hipotónico (glicina al 1.5% o sorbitol). Esto genera una hipervolemia aguda transitoria seguida de hiponatremia hipoosmolar dilucional severa (< 120 mEq/L) y edema cerebral, manifestándose con hipertensión, bradicardia refleja (reflejo de Cushing), confusión y riesgo de convulsiones. Se trata con restricción hídrica, furosemida y suero salino hipertónico al 3%.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.14.1.001"
      }
    ],
    "diagram": flow("Algoritmo de Evaluación y Tratamiento Escalonado de la HPB", [
        {
              "t": "Varón > 50 Años con Síntomas del Tracto Urinario Inferior (STUI)",
              "s": "Síntomas obstructivos (chorro débil, latencia) e irritativos (nicturia, polaquiuria)",
              "type": "warn"
        },
        {
              "t": "Evaluación Inicial: Tacto Rectal + APE + Sedimento + Residuo Postmiccional (IPSS)",
              "s": "Confirmar próstata lisa fibroelástica sin nódulos · Descartar ITU y Cáncer",
              "type": "dec"
        },
        {
              "k": "split",
              "q": "¿Existen Indicaciones Absolutas de Cirugía (GES N° 10) o Falla Farmacológica?",
              "ll": "Sí: RAO a repetición, ITU recurrente, litiasis vesical, hematuria o IRC",
              "left": {
                    "t": "Resolución Quirúrgica (RTUP vs Cirugía Abierta)",
                    "s": "< 80 cc: RTU Prostática (bipolar/mono) · > 80 cc: Adenomectomía abierta / Láser",
                    "type": "acc"
              },
              "rl": "No: Síntomas moderados a severos sin complicaciones orgánicas",
              "right": {
                    "t": "Tratamiento Médico Farmacológico",
                    "s": "Alfa-1 Bloqueante (Tamsulosina) +/- Inhibidor 5-AR (Finasteride si próstata >40 cc)",
                    "type": "dec"
              }
        }
  ])
  },
  {
    "id": "uro-04",
    "classId": "uro-04",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Urolitiasis & Obstrucción Urinaria",
    "topicLabel": "13.4",
    "title": "Incontinencia Urinaria en el Adulto: Esfuerzo vs Urgencia vs Rebose & Vejiga Neurogénica",
    "perfilCode": "4.01.1.025, 1.08.1.009",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Completo",
    "ges": "Sin garantía GES específica",
    "reconstrucciones": "EUNACOM Julio 2018 (Q#33) · EUNACOM Diciembre 2021 (Q#51)",
    "frecuencia": "Alta rentabilidad · diferenciación clínica entre incontinencia de esfuerzo y urgencia",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico Diferencial de la Incontinencia Urinaria",
    "contexto": "La incontinencia urinaria deteriora drásticamente la calidad de vida y la salud mental del paciente adulto y anciano. El pilar del diagnóstico diferencial descansa en el mecanismo: en la incontinencia de esfuerzo (IUE) el esfínter es incompetente ante aumentos de la presión intraabdominal pero el detrusor está en reposo (tratándose con ejercicios del piso pélvico o sling suburetral); en la incontinencia de urgencia (IUU) existe una contracción involuntaria prematura del detrusor durante el llenado vesical (tratándose con fármacos anticolinérgicos o agonistas beta-3 adrenérgicos). La incontinencia por rebalse ocurre en vejigas atónicas o sobreextendidas con residuo postmiccional patológico.",
    "contentSections": [
      {
        "subhead": "1. Clasificación Fisiopatológica de la Incontinencia Urinaria",
        "paragraphs": [
          "La <strong>Incontinencia Urinaria de Esfuerzo (IUE)</strong> es la pérdida involuntaria de orina sincrónica con el aumento de la presión intraabdominal (tos, risa, estornudo, ejercicio, levantamiento de carga). Es muy prevalente en mujeres multíparas por daño de los ligamentos pubouretrales y debilidad del suelo pélvico (hipermovilidad uretral) o por deficiencia esfinteriana intrínseca.",
          "La <strong>Incontinencia Urinaria de Urgencia (IUU)</strong> es el escape involuntario acompañado o precedido de una necesidad imperiosa y repentina de orinar imposible de postergar. Es la manifestación del <strong>Síndrome de Vejiga Hiperactiva (SVH)</strong>, producido por contracciones involuntarias no inhibidas del músculo detrusor durante la fase de llenado. Cuando coexisten ambos componentes se denomina <strong>Incontinencia Mixta</strong>."
        ]
      },
      {
        "subhead": "2. Incontinencia por Rebalse y Vejiga Neurogénica",
        "paragraphs": [
          "La <strong>Incontinencia por Rebalse</strong> se produce cuando la vejiga no se vacía adecuadamente y permanece sobredistendida hasta que la presión intravesical supera la resistencia uretral de salida, produciéndose un goteo continuo 'gota a gota'. Las dos causas típicas son la uropatía obstructiva severa (HPB avanzada, estenosis uretral) y la <strong>Vejiga Neurogénica Hipocontráctil o Atónica</strong> (secundaria a neuropatía diabética, lesión medular baja o fármacos anticolinérgicos).",
          "El examen clínico esencial que confirma la incontinencia por rebalse y la distingue de la IUU es la medición del <strong>Residuo Postmiccional (RPM)</strong> por ecografía o sondaje: un RPM > 100-200 mL confirma falla de vaciamiento. <em>Error grave de examen:</em> prescribir anticolinérgicos a un paciente con incontinencia por rebalse empeorará la retención urinaria e inducirá hidronefrosis."
        ]
      },
      {
        "subhead": "3. Manejo Terapéutico Escalonado según Etiología",
        "paragraphs": [
          "Para la <strong>IUE</strong>, la primera línea son los <strong>ejercicios de fortalecimiento del piso pélvico (Kegel)</strong> supervisados por kinesiólogo durante al menos 8 a 12 semanas. Si fracasa o el escape es severo, el tratamiento de elección es la cirugía mínimamente invasiva con <strong>cintas suburetrales libres de tensión (TVT o TOT)</strong>, con tasas de éxito superiores al 85-90%.",
          "Para la <strong>IUU / Vejiga Hiperactiva</strong>, el manejo inicial incluye reentrenamiento vesical y reducción de irritantes vesicales (cafeína, edulcorantes, tabaco). La primera línea farmacológica son los <strong>antimuscarínicos (Oxibutinina 5 mg c/8-12 h o Tolterodina)</strong> o los agonistas de receptores beta-3 adrenérgicos como <strong>Mirabegrón (50 mg/día)</strong>, este último de elección en ancianos por carecer de efectos adversos cognitivos, sequedad bucal y constipación (véase Tabla 13.4)."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial de los Tipos Principales de Incontinencia Urinaria",
      "headers": [
        "Característica",
        "Incontinencia de Esfuerzo (IUE)",
        "Incontinencia de Urgencia (IUU)",
        "Incontinencia por Rebalse"
      ],
      "rows": [
        [
          "Mecanismo Primario",
          "Debilidad piso pélvico / Hipermovilidad uretral",
          "Hiperactividad motora del músculo detrusor",
          "Sobredistensión vesical / Falla de contractilidad"
        ],
        [
          "Síntoma Rector",
          "Pérdida con tos, risa, estornudo o ejercicio",
          "Escape precedido de deseo imperioso e inaguantable",
          "Goteo continuo constante sin fuerza miccional"
        ],
        [
          "Volumen de Pérdida",
          "Pequeño a moderado (en chorritos al pujar)",
          "Moderado a abundante (vaciamiento vesical completo)",
          "Pequeño pero continuo (goteo incesante)"
        ],
        [
          "Residuo Postmiccional",
          "Normal (< 50 mL)",
          "Normal (< 50 mL)",
          "Marcaramente elevado (> 200 - 400 mL)"
        ],
        [
          "Tratamiento de 1ª Línea",
          "Ejercicios de Kegel · Cirugía con mallas (TOT/TVT)",
          "Oxibutinina / Mirabegrón · Reentrenamiento",
          "Aliviar obstrucción · Cateterismo intermitente limpio"
        ],
        [
          "Error que Anula Conducta",
          "Tratar con anticolinérgicos (ineficaces)",
          "Indicar cirugía de mallas suburetrales",
          "Dar anticolinérgicos (provoca RAO severa)"
        ]
      ]
    },
    "vignette": "Mujer de 54 años, multípara de 3 partos vaginales eutócicos, consulta por escapes de orina involuntarios de 1 año de evolución que interfieren con sus clases de acondicionamiento físico. Refiere que la orina escapa en chorros pequeños al toser, reír a carcajadas o saltar la cuerda. No presenta sensación de urgencia miccional, nicturia ni disuria. Examen físico: genitales externos con leve cistocele grado I, evidenciándose salida de orina por el meato uretral coincidente con la tos (prueba de esfuerzo positiva). Residuo postmiccional por ecografía: 15 mL.",
    "explicacion": "La clínica y el examen físico son patognomónicos de una Incontinencia Urinaria de Esfuerzo (IUE) no complicada en una mujer multípara con hipermovilidad uretral. La conducta terapéutica inicial de primera línea indiscutida es la terapia conservadora mediante ejercicios de fortalecimiento de la musculatura del suelo pélvico (ejercicios de Kegel) dirigidos por kinesiología durante 8 a 12 semanas. Si tras el tratamiento kinesiológico no se logra mejoría satisfactoria, se plantea la corrección quirúrgica mediante cinta suburetral transobturatriz (TOT).",
    "keyPoints": [
      "La Incontinencia de Esfuerzo ocurre con maniobras de Valsalva sincrónicas sin deseo miccional previo.",
      "La primera línea de manejo en IUE son los ejercicios de Kegel; la segunda línea es la cirugía con cintas suburetrales (TOT/TVT).",
      "La Incontinencia de Urgencia se asocia a vejiga hiperactiva y se trata con antimuscarínicos (Oxibutinina) o Mirabegrón.",
      "Mirabegrón (agonista beta-3) es de elección en ancianos para evitar los efectos adversos cognitivos y anticolinérgicos.",
      "La Incontinencia por Rebalse cursa con residuo postmiccional elevado (> 200 mL) y goteo constante.",
      "Nunca administrar fármacos anticolinérgicos ante sospecha de incontinencia por rebalse: precipita una retención aguda de orina."
    ],
    "questions": [
      {
        "stem": "Mujer de 70 años con antecedentes de hipertensión arterial consulta por escapes urinarios frecuentes. Describe que siente un deseo incontenible de orinar y que 'no alcanza a llegar al baño', perdiendo un volumen importante de orina. Se levanta a orinar 4 veces cada noche. Examen ginecológico sin distopia genital relevante. Sedimento de orina estéril y residuo postmiccional de 20 mL. ¿Cuál es el tratamiento farmacológico de primera línea más apropiado para su condición?",
        "options": [
          {
            "id": "A",
            "text": "Instalación de malla suburetral transobturatriz (TOT)"
          },
          {
            "id": "B",
            "text": "Oxibutinina o Mirabegrón oral"
          },
          {
            "id": "C",
            "text": "Cateterismo vesical intermitente cada 6 horas"
          },
          {
            "id": "D",
            "text": "Pseudoefedrina oral 60 mg cada 12 horas"
          },
          {
            "id": "E",
            "text": "Estrógenos locales en crema como monoterapia"
          }
        ],
        "correcta": "B",
        "explicacion": "El cuadro clínico corresponde a una Incontinencia Urinaria de Urgencia en el contexto de un Síndrome de Vejiga Hiperactiva, caracterizado por contracciones no inhibidas del detrusor con residuo postmiccional normal. El tratamiento farmacológico de primera línea consiste en antimuscarínicos (como Oxibutinina o Tolterodina) o en el agonista beta-3 adrenérgico Mirabegrón (preferido en pacientes geriátricos por su menor perfil de efectos anticolinérgicos centrales). La cirugía con cabestrillo (TOT) está reservada para la incontinencia de esfuerzo y no tiene utilidad en este cuadro.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.1.025"
      },
      {
        "stem": "Hombre de 68 años con diabetes mellitus de 20 años de evolución con neuropatía periférica severa consulta por incontinencia urinaria de 3 meses. Refiere que moja la ropa interior constantemente con un goteo continuo indoloro sin sentir deseos de orinar. El examen físico revela hipoestesia distal en calcetín y una masa blanda palpable en hipogastrio. ¿Cuál es el examen inicial indispensable para orientar el manejo de este paciente?",
        "options": [
          {
            "id": "A",
            "text": "Cistoscopía diagnóstica de urgencia"
          },
          {
            "id": "B",
            "text": "Medición del residuo postmiccional ecográfico o por cateterismo"
          },
          {
            "id": "C",
            "text": "Urografía retrógrada con contraste"
          },
          {
            "id": "D",
            "text": "Biopsia transrectal de próstata"
          },
          {
            "id": "E",
            "text": "Urodinamia multicanal invasiva de entrada"
          }
        ],
        "correcta": "B",
        "explicacion": "El paciente presenta el cuadro clásico de Incontinencia Urinaria por Rebalse secundaria a vejiga neurógena diabética atónica (cistopatía diabética). La denervación autonómica sensitiva impide censar el llenado vesical, llevando a sobredistensión crónica y goteo por rebalse. El examen no invasivo inicial indispensable es la medición del Residuo Postmiccional (RPM), el cual típicamente estará marcadamente elevado (> 300-500 mL), confirmando la falla de vaciamiento y previniendo la prescripción errónea de anticolinérgicos.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.08.1.009"
      },
      {
        "stem": "Mujer de 48 años que consulta por incontinencia de esfuerzo. Se le explican los ejercicios de Kegel. ¿En qué consiste exactamente esta técnica kinesiológica?",
        "options": [
          {
            "id": "A",
            "text": "Pujar repetidamente contrayendo la prensa abdominal mientras se orina"
          },
          {
            "id": "B",
            "text": "Contracciones voluntarias repetidas del músculo pubococcígeo y suelo pélvico sin activar glúteos ni abdomen"
          },
          {
            "id": "C",
            "text": "Aguantar la micción por periodos de más de 8 horas continuas"
          },
          {
            "id": "D",
            "text": "Interrumpir activamente el chorro de orina cada vez que se va al baño a orinar"
          },
          {
            "id": "E",
            "text": "Maniobras de compresión manual suprapúbica para forzar el vaciamiento vesical"
          }
        ],
        "correcta": "B",
        "explicacion": "Los ejercicios de Kegel consisten en la contracción voluntaria, aislada y repetida de los músculos del suelo pélvico (principalmente el complejo elevador del ano y pubococcígeo) sin contraer simultáneamente la musculatura de la pared abdominal anterior, los glúteos ni los aductores. Se deben realizar en series diarias programadas fuera de la micción. Perla. Interrumpir el chorro miccional al orinar ('stop-flow') no debe usarse como ejercicio regular porque altera el reflejo miccional normal y predispone a infecciones.",
        "recTag": "Banco Oficial AEE · Perfil V3 7.01.1.006"
      }
    ],
    "diagram": flow("Algoritmo Diagnóstico Diferencial de la Incontinencia Urinaria", [
        {
              "t": "Paciente con Pérdida Involuntaria de Orina",
              "s": "Evaluar anamnesis dirigida, factores de riesgo y examen físico pélvico",
              "type": "warn"
        },
        {
              "k": "split",
              "q": "¿La Pérdida Ocurre con Maniobras de Valsalva (Toser, Reír) o precedida de Deseo Miccional Imperioso?",
              "ll": "Pérdida al toser/estornudar sin deseo previo",
              "left": {
                    "t": "Incontinencia de Esfuerzo (IUE)",
                    "s": "Hipermovilidad uretral · Ejercicios de Kegel (1ª línea) · Cirugía con Mallas (TOT/TVT)",
                    "type": "acc"
              },
              "rl": "Deseo imperioso que no da tiempo a llegar al baño",
              "right": {
                    "t": "Incontinencia de Urgencia (IUU)",
                    "s": "Hiperactividad del detrusor · Antimuscarínicos (Oxibutinina) o Beta-3 (Mirabegrón)",
                    "type": "dec"
              }
        }
  ])
  },
  {
    "id": "uro-05",
    "classId": "uro-05",
    "tier": 3,
    "blockNum": 2,
    "blockName": "Urgencias Urológicas & Escroto Agudo",
    "topicLabel": "13.5",
    "title": "Torsión Testicular vs Torsión de Hidátide: Doppler Testicular & Exploración Quirúrgica <6h",
    "perfilCode": "4.01.2.002",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Completo",
    "ges": "Garantía de Urgencia Quirúrgica en sospecha de Torsión Testicular",
    "reconstrucciones": "EUNACOM Diciembre 2017 (Q#22) · EUNACOM Diciembre 2020 (Q#78) · EUNACOM Julio 2024 (Q#15)",
    "frecuencia": "Máxima rentabilidad · ventana de 6 horas, fijación bilateral y reflejo cremastérico",
    "svg": null,
    "algoTitle": "Algoritmo de Manejo Urgente del Escroto Agudo",
    "contexto": "La torsión del cordón espermático es una catástrofe vascular que conduce al infarto hemorrágico y necrosis del testículo por estrangulación del flujo venoso y arterial. El tiempo es el factor pronóstico determinante: la tasa de salvamento testicular es del 90-100% si se explora en las primeras 6 horas, cayendo a menos del 20-50% a las 12 horas y prácticamente 0% tras 24 horas. La regla de oro mandatoria es que jamás se debe retrasar la cirugía por esperar un estudio ecográfico si este no se puede realizar de forma instantánea. Además, la orquidopexia bilateral es obligatoria porque la anomalía en 'badajo de campana' es bilateral en más del 80% de los varones.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología de la Torsión del Cordón Espermático",
        "paragraphs": [
          "La <strong>torsión testicular</strong> intravaginal ocurre cuando la túnica vaginal envuelve anormalmente al testículo, epidídimo y cordón espermático proximal de forma completa, impidiendo su anclaje posterior natural a la pared escrotal. Esta variante congénita se denomina deformidad en <strong>'badajo de campana' (bell-clapper deformity)</strong> y permite que el testículo rote libremente sobre su propio eje vascular.",
          "La torsión inicialmente ocluye el retorno venoso, generando congestión hemorrágica masiva, edema severo y aumento rápido de la presión compartimental intraparenquimatosa. A los pocos giros se colapsa la perfusión arterial espermática, iniciándose la isquemia tisular caliente. La tasa de salvamento es >90% dentro de las <strong>primeras 6 horas</strong>, cayendo críticamente tras este intervalo (véase Tabla 13.5.A)."
        ]
      },
      {
        "subhead": "2. Semiología Diferencial del Escroto Agudo",
        "paragraphs": [
          "El cuadro se presenta típicamente en niños y adolescentes (pico bimodal: periodo perinatal y 12-18 años) como un <strong>dolor testicular súbito y desgarrador</strong>, muchas veces durante el sueño o tras ejercicio leve, acompañado de náuseas y vómitos autonómicos.",
          "Al examen físico destacan tres signos capitales: (1) <strong>Abolición del reflejo cremastérico ipsilateral</strong> (sensibilidad >95%; si el reflejo cremastérico está intacto y simétrico, la probabilidad de torsión testicular es sumamente baja); (2) <strong>Signo de Gouverneur positivo</strong> (testículo ascendido, horizontalizado y rotado hacia adelante); y (3) <strong>Signo de Prehn negativo</strong> (la elevación manual del testículo no alivia el dolor e incluso puede empeorarlo). En etapas avanzadas el hemiescroto se torna eritematoso, edematoso y endurecido."
        ]
      },
      {
        "subhead": "3. Torsión del Apéndice Testicular (Hidátide de Morgagni)",
        "paragraphs": [
          "Es la causa más frecuente de escroto agudo en niños de 7 a 12 años. La hidátide de Morgagni es un remanente embriológico del conducto mülleriano ubicado en el polo superior del testículo. Cuando se tuerce produce isquemia e inflamación focal.",
          "Clínicamente se distingue por presentar un dolor de inicio más insidioso y localizado estrictamente en el polo superior, con reflejo cremastérico normal conservado y testículo en posición anatómica no retraído. El signo patognomónico es el <strong>'signo del punto azul' (blue dot sign)</strong>, visible o palpable por transparencia cutánea en el polo testicular superior. Su tratamiento es estrictamente conservador con reposo y AINEs orales; no requiere pabellón quirúrgico salvo duda diagnóstica con torsión de cordón."
        ]
      },
      {
        "subhead": "4. Rol del Eco Doppler Color Testicular",
        "paragraphs": [
          "El <strong>Eco Doppler testicular</strong> muestra ausencia total de flujo vascular arterial intraparenquimatoso en la torsión de cordón espermático, junto con el 'signo del remolino' (whirlpool sign) en el trayecto funicular. Posee una sensibilidad del 85-90% y especificidad del 95%.",
          "<em>Axioma rector de urgencias EUNACOM:</em> El Doppler es un examen de apoyo en casos de sospecha intermedia o atípica. <strong>Nunca se debe postergar la exploración quirúrgica ni esperar un ecografista si la sospecha clínica de torsión testicular es alta y se está dentro de la ventana de las 6 horas</strong>. Trasladar al paciente a otro centro o diferir la llamada a pabellón por una ecografía constituye negligencia médica por pérdida de viabilidad gonadal (véase Figura 13.5)."
        ]
      },
      {
        "subhead": "5. Técnica Quirúrgica y Orquidopexia Bilateral Obligatoria",
        "paragraphs": [
          "Bajo anestesia general se realiza incisión escrotal transversa o rafe medio, apertura de la túnica vaginal, <strong>destorsión manual</strong> del cordón espermático (habitualmente hacia afuera, 'como abrir un libro') y aplicación de compresas tibias empapadas en suero fisiológico durante 10 a 15 minutos para evaluar reperfusión.",
          "Si el testículo recupera coloración rosada y sangra a la escarificación capsular, se conserva y se fija al tabique o pared escrotal mediante sutura no reabsorbible (orquidopexia). Si permanece negro-azulado y no viable, se realiza orquiectomía para prevenir necrosis estéril y formación de anticuerpos antiespermatozoides. <strong>En el 100% de los casos es mandatorio explorar y fijar el testículo contralateral (orquidopexia contralateral)</strong> en el mismo acto quirúrgico, dado que la deformidad en badajo de campana es bilateral."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial del Escroto Agudo en Pediatría y Adulto Joven",
      "headers": [
        "Parámetro Clínico",
        "Torsión Testicular",
        "Torsión de Hidátide",
        "Epididimitis Aguda"
      ],
      "rows": [
        [
          "Edad más frecuente",
          "12 a 18 años (y periodo neonatal)",
          "7 a 12 años",
          "Adultos sexualmente activos / >35 a"
        ],
        [
          "Forma de inicio del dolor",
          "Brusco, súbito e hiperagudo",
          "Gradual a subagudo",
          "Progresivo (horas a días)"
        ],
        [
          "Síntomas vegetativos (vómitos)",
          "Muy frecuentes (> 50%)",
          "Infrecuentes o ausentes",
          "Raros (predomina fiebre y disuria)"
        ],
        [
          "Posición del testículo",
          "Elevado y horizontalizado (Gouverneur +)",
          "Posición normal anatómica",
          "Normal o descendido por tumefacción"
        ],
        [
          "Reflejo cremastérico",
          "ABOLIDO / Ausente (> 95%)",
          "CONSERVADO / Presente",
          "CONSERVADO / Presente"
        ],
        [
          "Signo de Prehn (elevación)",
          "Negativo (no alivia o empeora)",
          "Indiferente",
          "POSITIVO (alivia el dolor)"
        ],
        [
          "Signo del punto azul",
          "Ausente",
          "Patognomónico en polo superior",
          "Ausente"
        ],
        [
          "Flujo en Eco Doppler",
          "Flujo arterial ausente o abolido",
          "Flujo testicular normal; halo inflamatorio",
          "Flujo aumentado (hiperemia marcada)"
        ],
        [
          "Conducta inmediata",
          "Pabellón quirúrgico de urgencia <6h",
          "Manejo médico con reposo y AINEs",
          "Antibióticos según etiología + reposo"
        ]
      ]
    },
    "severityTable": {
      "title": "Score de TWIST (Testicular Workup for Ischemia and Suspected Torsion)",
      "headers": [
        "Hallazgo Clínico al Ingreso",
        "Puntaje Asignado",
        "Interpretación y Conducta Inmediata"
      ],
      "rows": [
        [
          "Tumefacción / Aumento de volumen testicular",
          "2 puntos",
          "Puntaje 0 - 2 (Bajo Riesgo): Torsión improbable; considerar hidátide o epididimitis"
        ],
        [
          "Testículo duro o consistencia pétrea",
          "2 puntos",
          "Puntaje 3 - 4 (Riesgo Intermedio): Solicitar Eco Doppler urgente si disponible en < 30 min"
        ],
        [
          "Ausencia de reflejo cremastérico",
          "1 punto",
          "Puntaje 5 - 7 (Alto Riesgo / Torsión Confirmada): Exploración quirúrgica inmediata"
        ],
        [
          "Presencia de náuseas o vómitos",
          "1 punto",
          "No diferir pabellón para realizar ecografía en pacientes con puntaje 5 a 7"
        ],
        [
          "Testículo retraído / elevado en escroto",
          "1 punto",
          "Ventana de salvamento < 6 horas: llamar a Urgencias Urológicas de inmediato"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Tiempos Quirúrgicos y Conducta Intraoperatoria en Torsión Testicular",
      "headers": [
        "Tiempo Quirúrgico",
        "Acción Quirúrgica Específica",
        "Racionalidad Fisiopatológica y Pronóstico"
      ],
      "rows": [
        [
          "1. Incisión y Exteriorización",
          "Incisión escrotal, apertura de vaginal y exteriorización gonadal",
          "Acceso inmediato para liberar estrangulamiento vascular funicular"
        ],
        [
          "2. Destorsión Manual",
          "Giro del testículo habitualmente hacia lateral (de medial a lateral)",
          "Restablecer perfusión antes de evaluar viabilidad tisular definitiva"
        ],
        [
          "3. Calentamiento y Observación",
          "Compresas tibias con solución salina por 10 a 15 minutos",
          "Permite recuperación celular y diferenciación de tejido viable vs necrótico"
        ],
        [
          "4. Decisión: Conservar vs Extirpar",
          "Si reperfunde: Orquidopexia con 3 puntos no reabsorbibles · Si no reperfunde: Orquiectomía",
          "Prevenir atrofia y reacción inmunológica contra el testículo contralateral"
        ],
        [
          "5. Orquidopexia Contralateral Obligatoria",
          "Apertura del hemiescroto contralateral y fijación del testículo sano",
          "La anomalía anatómica en badajo de campana es bilateral en más del 80%"
        ]
      ]
    },
    "vignette": "Adolescente de 14 años es llevado al Servicio de Urgencias a las 4 AM por dolor testicular izquierdo de inicio brutal hace 2 horas, mientras dormía. El dolor es de intensidad 10/10 y se acompaña de náuseas y dos episodios de vómitos alimentarios. Al examen físico: facie de intenso dolor, FC 108 lpm, afebril (36.8 °C). El hemiescroto izquierdo está discretamente eritematoso; a la palpación el testículo izquierdo se encuentra intensamente doloroso, ascendido hacia el anillo inguinal externo y horizontalizado. El reflejo cremastérico izquierdo está completamente abolido, mientras que a derecha es vivo y normal. La elevación manual del testículo no produce alivio.",
    "explicacion": "El cuadro clínico reúne todos los elementos diagnósticos patognomónicos de una Torsión Testicular Aguda izquierda en fase hiperaguda (2 horas de evolución): dolor nocturno brusco en adolescente, vómitos reflejos, Signo de Gouverneur positivo (testículo elevado y horizontalizado), signo de Prehn negativo y reflejo cremastérico abolido. La conducta médica oficial obligatoria es el traslado inmediato a pabellón de urgencias para exploración quirúrgica sin perder tiempo en ecografía Doppler. Durante la cirugía se debe destorcer el cordón, evaluar viabilidad y realizar orquidopexia bilateral obligatoria.",
    "keyPoints": [
      "La torsión testicular es una urgencia quirúrgica tiempo-dependiente: viabilidad >90% si se opera < 6 horas.",
      "El reflejo cremastérico abolido es el signo físico más sensible (>95%) de torsión testicular.",
      "Testículo ascendido y horizontalizado = Signo de Gouverneur positivo.",
      "La elevación del testículo NO alivia el dolor en la torsión (Signo de Prehn negativo).",
      "La sospecha clínica alta de torsión obliga a exploración quirúrgica urgente sin dilación por ecografía.",
      "La torsión de hidátide de Morgagni presenta reflejo cremastérico presente y el signo del punto azul; se maneja con reposo y AINEs.",
      "La orquidopexia bilateral es mandatoria en la cirugía de torsión por la presencia bilateral de deformidad en badajo de campana.",
      "La destorsión manual prequirúrgica se realiza rotando el testículo de medial a lateral (hacia afuera, como abrir un libro)."
    ],
    "questions": [
      {
        "stem": "Niño de 13 años consulta por dolor testicular derecho de inicio brusco e intenso hace 3 horas mientras dormía, acompañado de náuseas y vómitos. Al examen físico: testículo derecho retraído hacia la parte superior del escroto, horizontalizado y muy sensible a la palpación. El reflejo cremastérico derecho está ausente. El centro asistencial no cuenta con ecógrafo disponible en turno de noche. ¿Cuál es la conducta inmediata que debe adoptarse?",
        "options": [
          {
            "id": "A",
            "text": "Indicar ketorolaco EV y trasladar en ambulancia para Eco Doppler a un hospital terciario a 2 horas de distancia"
          },
          {
            "id": "B",
            "text": "Exploración quirúrgica inmediata en pabellón por sospecha fundada de torsión testicular"
          },
          {
            "id": "C",
            "text": "Iniciar tratamiento empírico con ceftriaxona más doxiciclina y citar a control en 24 horas"
          },
          {
            "id": "D",
            "text": "Instalar suspensorio escrotal, aplicar frío local y dar de alta con reposo absoluto"
          },
          {
            "id": "E",
            "text": "Solicitar sedimento de orina y urocultivo antes de decidir interconsulta a urología"
          }
        ],
        "correcta": "B",
        "explicacion": "La clínica descrita es categórica de Torsión Testicular: paciente en grupo etario de máxima incidencia, inicio brusco nocturno, cortejo vegetativo, signo de Gouverneur positivo y reflejo cremastérico ausente. El tiempo de isquemia transcurrido es de apenas 3 horas (dentro de la ventana de máxima viabilidad < 6 horas). Ante alta sospecha clínica, NUNCA se debe postergar la cirugía ni perder tiempo valioso trasladando al paciente para una ecografía; la conducta obligatoria es la exploración quirúrgica inmediata. Perla. Trasladar al paciente costaría horas críticas de viabilidad.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.2.002"
      },
      {
        "stem": "Escolar de 9 años es traído por su madre por presentar molestias en el testículo izquierdo de 24 horas de evolución. El dolor es leve a moderado y ha caminado sin dificultad. Al examen físico el testículo izquierdo se palpa de consistencia normal, en posición anatómica eutópica. El reflejo cremastérico está intacto y simétrico bilateralmente. En el polo superior del testículo izquierdo se palpa un nódulo indurado de 4 mm muy sensible, observándose a través de la piel escrotal una pequeña mancha azulada circunscrita. ¿Cuál es el diagnóstico y el tratamiento de elección?",
        "options": [
          {
            "id": "A",
            "text": "Torsión testicular; exploración quirúrgica urgente"
          },
          {
            "id": "B",
            "text": "Torsión de hidátide de Morgagni; tratamiento médico con reposo y analgésicos AINEs"
          },
          {
            "id": "C",
            "text": "Epididimitis bacteriana; antibioticoterapia con amoxicilina oral por 10 días"
          },
          {
            "id": "D",
            "text": "Orquitis urliana; aislamiento y corticoides sistémicos"
          },
          {
            "id": "E",
            "text": "Tumor testicular de células germinales; orquiectomía inguinal radical"
          }
        ],
        "correcta": "B",
        "explicacion": "El cuadro clínico es el prototipo de una Torsión de Apéndice Testicular (Hidátide de Morgagni): dolor moderado subagudo en escolar, reflejo cremastérico conservado, testículo en posición normal y el signo patognomónico del 'punto azul' (blue dot sign), correspondiente al apéndice isquémico trombosado visible por transparencia en el polo superior. Esta patología es autolimitada y no pone en riesgo la viabilidad de la gónada; su tratamiento de elección es conservador con reposo y antiinflamatorios no esteroidales (AINEs). Perla. La cirugía se reserva solo para casos atípicos donde no se logre descartar torsión de cordón.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.2.002"
      },
      {
        "stem": "Durante la exploración quirúrgica de urgencia por torsión testicular izquierda en un paciente de 15 años operado a las 8 horas de evolución, el cirujano constata un testículo intensamente congestivo y violáceo. Se realiza la destorsión y tras 15 minutos de compresas tibias, el parénquima recupera una coloración rosada saludable y presenta sangrado rutilante a la mínima incisión de la albugínea. Se fija el testículo al escroto izquierdo. ¿Cuál es el paso quirúrgico indispensable que resta por realizar antes de cerrar la herida?",
        "options": [
          {
            "id": "A",
            "text": "Realizar biopsia en cuña del testículo izquierdo para certificar viabilidad microscópica"
          },
          {
            "id": "B",
            "text": "Exploración y orquidopexia profiláctica del testículo contralateral derecho"
          },
          {
            "id": "C",
            "text": "Instalación de prótesis testicular protésica inmediata"
          },
          {
            "id": "D",
            "text": "Sección del músculo cremáster derecho a través del conducto inguinal"
          },
          {
            "id": "E",
            "text": "Infiltración del cordón derecho con toxina botulínica"
          }
        ],
        "correcta": "B",
        "explicacion": "En toda intervención por torsión testicular, la fijación del testículo contralateral (orquidopexia profiláctica contralateral) es un paso quirúrgico formalmente obligatorio y de estándar legal. La anomalía anatómica que predispone a la torsión (la fijación alta de la túnica vaginal o deformidad en 'badajo de campana') es una condición congénita bilateral en más del 80% de los casos. Omitir la orquidopexia contralateral deja al paciente en riesgo latente de torsión del único testículo remanente o sano en el futuro, con riesgo de anorquia e infertilidad.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.2.002"
      },
      {
        "stem": "Joven de 16 años ingresa a urgencias con dolor testicular derecho intenso de 1 hora de evolución. Al examen físico se constata testículo derecho horizontalizado y muy sensible. El médico de turno decide intentar una maniobra de destorsión manual mientras se prepara el pabellón. ¿Cuál es la dirección en que habitualmente debe rotarse el testículo derecho para lograr su destorsión?",
        "options": [
          {
            "id": "A",
            "text": "De lateral hacia medial (hacia la línea media)"
          },
          {
            "id": "B",
            "text": "De medial hacia lateral (hacia el muslo derecho, como abriendo un libro)"
          },
          {
            "id": "C",
            "text": "Tracción axial cefálica firme sin rotación"
          },
          {
            "id": "D",
            "text": "Compresión anteroposterior sostenida durante 2 minutos"
          },
          {
            "id": "E",
            "text": "Rotación de 360 grados en sentido horario estricto"
          }
        ],
        "correcta": "B",
        "explicacion": "La inmensa mayoría de las torsiones testiculares (> 80%) ocurren en dirección medial (hacia la línea media del cuerpo). Por esta razón, la maniobra de destorsión manual externa consiste en rotar el testículo en sentido opuesto: de medial hacia lateral, lo que mnemotécnicamente se describe como 'abrir las páginas de un libro' (para el testículo derecho, en sentido antihorario; para el izquierdo, en sentido horario). Si la maniobra es exitosa, el paciente experimenta un alivio dramático inmediato del dolor; no obstante, la exploración quirúrgica para orquidopexia bilateral sigue siendo mandatoria.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.2.002"
      }
    ],
    "diagram": flow("Algoritmo de Manejo Urgente del Escroto Agudo", [
        {
              "t": "Dolor Testicular Agudo Intenso (Escroto Agudo)",
              "s": "Aparición brusca (frecuente nocturna) · Náuseas/vómitos · Paciente pediátrico o adolescente",
              "type": "warn"
        },
        {
              "k": "split",
              "q": "¿Examen Físico Sugiere Torsión Testicular (Cremastérico Ausente, Testículo Elevado Horizontalizado)?",
              "ll": "Reflejo cremastérico ausente · Signo de Gouverneur (+) · Dolor intratable",
              "left": {
                    "t": "Sospecha Alta de Torsión Testicular",
                    "s": "Pabellón urgente de inmediato · Exploración < 6 horas · No retrasar por Eco Doppler",
                    "type": "warn"
              },
              "rl": "Reflejo cremastérico presente · Nódulo azul visible · Dolor polo superior",
              "right": {
                    "t": "Torsión de Hidátide de Morgagni",
                    "s": "Signo del punto azul patognomónico · Manejo conservador con reposo y AINEs",
                    "type": "acc"
              }
        },
        {
              "k": "split",
              "q": "¿Duda Diagnóstica con Doppler Inmediatamente Disponible (< 30 min)?",
              "ll": "Eco Doppler: Ausencia de flujo vascular intratesticular",
              "left": {
                    "t": "Exploración Quirúrgica Urgente + Fijación Bilateral",
                    "s": "Destorsión + Calentamiento · Orquidopexia bilateral obligatoria",
                    "type": "acc"
              },
              "rl": "Eco Doppler: Flujo conservado o aumentado",
              "right": {
                    "t": "Epididimitis u otra patología",
                    "s": "Manejo médico con antibióticos y analgésicos",
                    "type": "dec"
              }
        }
  ])
  },
  {
    "id": "uro-06",
    "classId": "uro-06",
    "tier": 2,
    "blockNum": 2,
    "blockName": "Urgencias Urológicas & Escroto Agudo",
    "topicLabel": "13.6",
    "title": "Orquiepididimitis Aguda: Etiología según Edad (<35 años ETS vs >35 años E. coli) & Manejo",
    "perfilCode": "1.04.1.010",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "Sin garantía GES específica · Notificación ENO obligatoria de Gonorrea y Clamidia",
    "reconstrucciones": "EUNACOM Julio 2015 (Q#67) · EUNACOM Diciembre 2019 (Q#42)",
    "frecuencia": "Alta rentabilidad · antibióticos empíricos según grupo etario y signo de Prehn positivo",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico y Terapéutico de la Orquiepididimitis Aguda",
    "contexto": "La epididimitis aguda es la causa más común de escroto agudo en el adulto, producida casi invariablemente por vía canalicular retrógrada ascendente a través de los conductos deferentes desde una infección previa de la uretra o de la vejiga. La distinción etiológica según la edad es el concepto más evaluado en el EUNACOM: en varones < 35 años los gérmenes rectores son Chlamydia trachomatis y Neisseria gonorrhoeae (exigiendo cobertura dual y tratamiento a la pareja sexual), mientras que en > 35 años predominan enterobacterias como Escherichia coli asociadas a patología prostática.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología y Cuadro Clínico de la Infección Epididimaria",
        "paragraphs": [
          "La <strong>orquiepididimitis aguda</strong> se caracteriza por una progresión insidiosa (1 a 3 días) de dolor escrotal sordo que se intensifica, aumento de volumen, rubor y calor local en el hemiescroto afectado. A diferencia de la torsión, frecuentemente se acompaña de <strong>fiebre (> 38 °C)</strong> y síntomas urinarios como disuria, polaquiuria o secreción uretral matinal.",
          "Al examen físico se palpa un epidídimo engrosado y muy doloroso, inicialmente localizado en la cola y luego abarcando toda la glándula y el testículo (orquiepididimitis). Dos signos clínicos son cardinales: el <strong>Signo de Prehn positivo</strong> (la elevación manual suave del testículo alivia el dolor, al disminuir la tracción gravitacional sobre el cordón inflamado) y el <strong>reflejo cremastérico conservado</strong>."
        ]
      },
      {
        "subhead": "2. Esquemas Terapéuticos Empíricos según Edad",
        "paragraphs": [
          "El tratamiento antibiótico debe iniciarse de forma inmediata tras recolectar muestras (urocultivo y frotis/PCR uretral para ETS), seleccionando el esquema según el perfil etiológico:",
          "<strong>En varones menores de 35 años:</strong> Esquema dual para agentes de transmisión sexual: <strong>Ceftriaxona 500 mg IM en dosis única</strong> (cobertura para N. gonorrhoeae) + <strong>Doxiciclina 100 mg cada 12 horas vía oral por 10 a 14 días</strong> (cobertura para C. trachomatis). Es mandatorio citar y tratar a la(s) pareja(s) sexual(es) de los últimos 60 días y abstinencia sexual.",
          "<strong>En varones mayores de 35 años o con patología urológica:</strong> Cobertura para bacilos gramnegativos entéricos: <strong>Ciprofloxacino 500 mg cada 12 horas VO</strong> o Levofloxacino 500 mg/día VO por 10 a 14 días (alternativa: Cotrimoxazol forte cada 12 h)."
        ]
      },
      {
        "subhead": "3. Medidas Generales y Criterios de Complicación",
        "paragraphs": [
          "El tratamiento médico se complementa obligatoriamente con <strong>reposo en cama, suspensorio escrotal o calzoncillo ajustado</strong> para inmovilizar y elevar la bolsa, aplicación de compresas frías locales y AINEs orales durante 5 a 7 días.",
          "La falta de respuesta clínica o la persistencia de fiebre tras 48 a 72 horas de antibióticos adecuados obliga a solicitar un <strong>Eco Doppler escrotal de control</strong> para descartar la formación de un <strong>absceso epididimario o testicular</strong> (que requiere drenaje quirúrgico u orquiectomía) o un infarto testicular secundario a compresión vascular por edema masivo (véase Tabla 13.6)."
        ]
      }
    ],
    "table": {
      "title": "Protocolo Antimicrobiano en Orquiepididimitis Aguda según Grupo de Riesgo",
      "headers": [
        "Grupo Clínico",
        "Patógenos Habituales",
        "Esquema Antibiótico de 1ª Línea",
        "Duración y Medidas Adicionales"
      ],
      "rows": [
        [
          "Varones < 35 años (ETS)",
          "Chlamydia trachomatis, Neisseria gonorrhoeae",
          "Ceftriaxona 500 mg IM (dosis única) + Doxiciclina 100 mg c/12h VO",
          "10 a 14 días · Notificación ENO · Tratamiento simultáneo a parejas sexuales"
        ],
        [
          "Varones > 35 años / Instrumentados",
          "Escherichia coli, Klebsiella pneumoniae, Proteus",
          "Ciprofloxacino 500 mg c/12h VO o Levofloxacino 500 mg/d VO",
          "10 a 14 días · Estudio urológico ambulatorio de vía urinaria baja (HPB)"
        ],
        [
          "Hombres que tienen sexo con hombres (coito anal receptivo)",
          "Enterobacterias + Chlamydia + Gonococo",
          "Ceftriaxona 500 mg IM + Ciprofloxacino 500 mg c/12h VO",
          "14 días · Cobertura combinada para entéricos y gérmenes de transmisión sexual"
        ],
        [
          "Cuadro Séptico o Absceso",
          "Flora polimicrobiana nosocomial o resistente",
          "Hospitalización + Ceftriaxona 2 g/d EV o Ampicilina/Sulbactam",
          "Drenaje quirúrgico si hay colección fluctuante en ecografía"
        ]
      ]
    },
    "vignette": "Hombre de 26 años, sexualmente activo sin uso regular de preservativo, consulta por dolor progresivo en el hemiescroto derecho de 48 horas de evolución, asociado a sensación febril no cuantificada y ardor miccional leve. Al examen físico: PA 125/75 mmHg, FC 84 lpm, T° 37.9 °C. El hemiescroto derecho se observa tumefacto y caliente; se palpa el epidídimo francamente engrosado y muy sensible en todo su trayecto posterior. El reflejo cremastérico derecho está presente y activo. Al elevar manualmente el testículo derecho hacia el pubis, el paciente refiere un claro alivio del dolor.",
    "explicacion": "El paciente presenta una Epididimitis Aguda clásica de origen presumiblemente infeccioso por transmisión sexual en paciente menor de 35 años. Los hallazgos confirman la naturaleza inflamatoria: evolución subaguda en 48 horas, reflejo cremastérico conservado y Signo de Prehn positivo (alivio del dolor con la elevación escrotal). La conducta oficial de primera línea es la recolección de muestras (orina y frotis uretral) y el inicio inmediato de antibioticoterapia empírica dual con Ceftriaxona 500 mg IM en dosis única más Doxiciclina 100 mg cada 12 horas por 10 a 14 días, asociada a reposo, uso de suspensorio escrotal y tratamiento a su pareja sexual.",
    "keyPoints": [
      "La epididimitis es de inicio subagudo (días) y cursa con reflejo cremastérico presente y Signo de Prehn positivo (alivia con elevación).",
      "En < 35 años la etiología dominante es ETS (C. trachomatis y N. gonorrhoeae): Ceftriaxona IM + Doxiciclina VO.",
      "En > 35 años la etiología predominante son uropatógenos entéricos (E. coli): Ciprofloxacino o Cotrimoxazol.",
      "En varones que practican coito anal insertivo debe cubrirse tanto entéricos como ETS.",
      "El tratamiento incluye siempre suspensorio escrotal, reposo en cama, frío local y AINEs.",
      "Fiebre persistente o empeoramiento tras 72 h de antibióticos obliga a descartar absceso epididimario mediante ecografía."
    ],
    "questions": [
      {
        "stem": "Hombre de 23 años consulta por dolor testicular derecho progresivo de 3 días de evolución, disuria y febrícula. Al examen físico se constata tumefacción y aumento de volumen del epidídimo derecho, con reflejo cremastérico presente y signo de Prehn positivo. ¿Cuál es el tratamiento antibiótico empírico de primera línea más adecuado para este paciente?",
        "options": [
          {
            "id": "A",
            "text": "Ciprofloxacino 500 mg cada 12 horas por 7 días en monoterapia"
          },
          {
            "id": "B",
            "text": "Ceftriaxona 500 mg IM dosis única más Doxiciclina 100 mg cada 12 horas por 10 días"
          },
          {
            "id": "C",
            "text": "Nitrofurantoína 100 mg cada 8 horas por 5 días"
          },
          {
            "id": "D",
            "text": "Azitromicina 500 mg dosis única como tratamiento exclusivo"
          },
          {
            "id": "E",
            "text": "Amoxicilina con ácido clavulánico 875/125 mg cada 12 horas por 14 días"
          }
        ],
        "correcta": "B",
        "explicacion": "En hombres menores de 35 años sexualmente activos, la orquiepididimitis aguda es causada fundamentalmente por patógenos de transmisión sexual: Chlamydia trachomatis y Neisseria gonorrhoeae. El esquema antibiótico normado de primera línea consiste en la combinación de Ceftriaxona (500 mg o 1 g IM en dosis única para cubrir el gonococo) asociada a Doxiciclina (100 mg cada 12 horas oral por 10 a 14 días para erradicar Chlamydia). Además se debe tratar a la pareja sexual. Perla. El ciprofloxacino no cubre adecuadamente Chlamydia ni gonococo por alta tasa de resistencia.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.04.1.010"
      },
      {
        "stem": "Varón de 64 años con antecedentes de hiperplasia prostática benigna consulta por dolor y aumento de volumen en el hemiescroto izquierdo de 4 días de evolución, acompañado de disuria y fiebre de 38.4 °C. Al examen físico se palpa el testículo y epidídimo izquierdos muy sensibles y engrosados. El sedimento de orina muestra leucocituria abundante y piuria con bacterias móviles. ¿Cuál es el agente etiológico más probable de su cuadro?",
        "options": [
          {
            "id": "A",
            "text": "Neisseria gonorrhoeae"
          },
          {
            "id": "B",
            "text": "Chlamydia trachomatis serotipos D-K"
          },
          {
            "id": "C",
            "text": "Escherichia coli"
          },
          {
            "id": "D",
            "text": "Ureaplasma urealyticum"
          },
          {
            "id": "E",
            "text": "Virus de la parotiditis (Paramixovirus)"
          }
        ],
        "correcta": "C",
        "explicacion": "En hombres mayores de 35 años, y particularmente en aquellos con patología prostática de base (HPB), obstrucción urinaria baja o instrumentación urológica, la orquiepididimitis se produce por el reflujo retrógrado de orina infectada desde la uretra prostática hacia los conductos eyaculadores y deferentes. En este grupo etario, el microorganismo causante en más del 80% de los casos son las enterobacterias gramnegativas del tracto digestivo, lideradas ampliamente por Escherichia coli.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.04.1.010"
      },
      {
        "stem": "Hombre de 29 años en tratamiento antibiótico ambulatorio con ceftriaxona y doxiciclina desde hace 4 días por orquiepididimitis derecha. Reconsulta por persistencia de fiebre alta (39 °C), aumento progresivo del tamaño escrotal y dolor pulsátil insoportable. Al examen físico se palpa una zona claramente fluctuante y caliente en la pared posterior del testículo derecho. ¿Cuál es la conducta diagnóstica y terapéutica prioritaria?",
        "options": [
          {
            "id": "A",
            "text": "Aumentar la dosis de doxiciclina y citar en una semana"
          },
          {
            "id": "B",
            "text": "Solicitar ecografía testicular Doppler y derivar a urología para eventual drenaje quirúrgico de un absceso"
          },
          {
            "id": "C",
            "text": "Indicar orquidopexia bilateral inmediata por sospecha de torsión agregada"
          },
          {
            "id": "D",
            "text": "Rotar antibióticos a ciprofloxacino oral y mantener manejo ambulatorio"
          },
          {
            "id": "E",
            "text": "Realizar punción con aguja fina en el box de atención primaria para evacuar el líquido"
          }
        ],
        "correcta": "B",
        "explicacion": "La persistencia de fiebre alta, empeoramiento clínico y aparición de una zona fluctuante en el escroto tras 72-96 horas de antibioticoterapia adecuada es altamente sugerente de una complicación supurativa mayor: un <strong>absceso epididimario o testicular</strong>. La conducta mandatoria es confirmar la colección purulenta mediante Ecografía Doppler escrotal urgente y derivar al especialista en urología para hospitalización, antibioticoterapia parenteral de amplio espectro y drenaje quirúrgico o eventual orquiectomía si el parénquima está destruido.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.04.1.010"
      }
    ],
    "diagram": flow("Algoritmo Diagnóstico y Terapéutico de la Orquiepididimitis Aguda", [
        {
              "t": "Dolor y Aumento de Volumen Hemiescrotal Progresivo",
              "s": "Aparición en días · Fiebre · Disuria · Secreción uretral o síntomas prostáticos",
              "type": "warn"
        },
        {
              "k": "split",
              "q": "¿Qué Grupo Etario y Factores de Riesgo Presenta el Paciente?",
              "ll": "Menor de 35 años (Sexualmente activo)",
              "left": {
                    "t": "Etiología por ETS (C. trachomatis / N. gonorrhoeae)",
                    "s": "Ceftriaxona 500 mg IM (dosis única) + Doxiciclina 100 mg c/12h VO x 10-14 d · Tratar pareja",
                    "type": "acc"
              },
              "rl": "Mayor de 35 años o con instrumentación previa",
              "right": {
                    "t": "Etiología por Uropatógenos Entéricos (E. coli)",
                    "s": "Ciprofloxacino 500 mg c/12h VO o Cotrimoxazol forte c/12h VO por 10-14 d",
                    "type": "dec"
              }
        }
  ])
  },
  {
    "id": "uro-07",
    "classId": "uro-07",
    "tier": 2,
    "blockNum": 2,
    "blockName": "Urgencias Urológicas & Escroto Agudo",
    "topicLabel": "13.7",
    "title": "Patología Escrotal No Dolorosa: Varicocele, Hidrocele, Espermatocele & Quistes",
    "perfilCode": "4.01.1.018",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Sin garantía GES específica",
    "reconstrucciones": "EUNACOM Diciembre 2016 (Q#105) · EUNACOM Julio 2022 (Q#88)",
    "frecuencia": "Alta rentabilidad · transiluminación, varicocele izquierdo vs derecho y sospecha de masa renal",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico de Tumefacciones Escrotales Indoloras",
    "contexto": "Las masas escrotales no dolorosas abarcan patologías benignas muy frecuentes (hidrocele, espermatocele, varicocele) y la neoplasia testicular. La maniobra de transiluminación en una habitación oscura es el paso semiológico cardinal: si la masa deja pasar la luz tornándose brillante y rojiza, el contenido es líquido estéril (hidrocele o quiste epididimario). El varicocele consiste en la dilatación varicosa del plexo pampiniforme, siendo el 90% izquierdo. Un varicocele de inicio brusco en el adulto mayor, o estrictamente derecho, o que no colapsa al acostarse, constituye una bandera roja de sospecha de masa retroperitoneal o cáncer renal con invasión de la vena renal o vena cava.",
    "contentSections": [
      {
        "subhead": "1. Semiología y Maniobra de Transiluminación",
        "paragraphs": [
          "El enfrentamiento de toda masa escrotal indolora exige una palpación meticulosa bimanual para diferenciar si la lesión es <strong>intratesticular</strong> (siempre sospechosa de malignidad) o <strong>extratesticular</strong> (casi siempre benigna), y evaluar si es posible palpar el cordón espermático por encima de ella (para descartar una hernia inguinoescrotal).",
          "La <strong>Prueba de Transiluminación</strong> consiste en apoyar una fuente de luz puntual (linterna) sobre la superficie escrotal posterior: las colecciones líquidas serosas translúcidas (hidrocele y espermatocele) dejan pasar la luz iluminando toda la bolsa con un halo rosado (<strong>transiluminación positiva</strong>). Las lesiones sólidas parenquimatosas, los hematoceles y las estructuras vasculares no dejan pasar la luz (<strong>transiluminación negativa</strong>)."
        ]
      },
      {
        "subhead": "2. Hidrocele y Espermatocele: Características y Manejo",
        "paragraphs": [
          "El <strong>Hidrocele</strong> es la acumulación patológica de líquido seroso entre las hojas parietal y visceral de la túnica vaginal. Puede ser comunicante (en niños por persistencia del conducto peritoneovaginal permeable) o no comunicante (adquirido en adultos, idiopático o reactivo a trauma o infección). El testículo queda englobado dentro de la masa y no se puede palpar de forma aislada. Si es voluminoso o molesto, el tratamiento es la cirugía (hidrocelectomía de Jaboulay o Lord); la punción evacuadora está contraindicada por rápida recidiva e infección.",
          "El <strong>Espermatocele</strong> (o quiste de retención del epidídimo) es una dilatación quística benigna originada en los túbulos de la cabeza del epidídimo, llena de líquido lechoso que contiene espermatozoides. Al examen se palpa como una masa redondeada, lisa, tensa, no dolorosa y claramente diferenciable del cuerpo del testículo, situada en el polo superior."
        ]
      },
      {
        "subhead": "3. Varicocele: Graduación, Fertilidad y Banderas Rojas Renales",
        "paragraphs": [
          "El <strong>Varicocele</strong> es la dilatación y tortuosidad anormal de las venas espermáticas del plexo pampiniforme. Es la causa tratable más frecuente de <strong>infertilidad masculina</strong> (presente en el 40% de los varones con espermiograma alterado, debido al aumento de temperatura escrotal e hipoxia). Se localiza en el <strong>lado izquierdo en el 85-90% de los casos</strong> por razones anatómicas: la vena espermática izquierda drena en ángulo recto hacia la vena renal izquierda, sometida a mayor presión venosa (síndrome de cascanueces / nutcracker entre la aorta y la mesentérica superior).",
          "A la palpación se percibe como una masa blanda con sensación de <strong>'bolsa de gusanos'</strong> sobre el testículo que aumenta con la maniobra de Valsalva y <strong>desaparece o se colapsa en decúbito dorsal</strong>.",
          "<em>Banderas Rojas del Varicocele:</em> (1) Varicocele de aparición brusca en hombres mayores de 40-50 años; (2) Varicocele aislado del lado derecho; y (3) Varicocele que no se colapsa al poner al paciente en decúbito supino. Cualquiera de estas tres situaciones obliga a solicitar un TAC de abdomen para descartar un <strong>Carcinoma Renal con trombo tumoral en la vena renal izquierda o compresión retroperitoneal de la vena cava</strong> (véase Tabla 13.7)."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial de Masas Escrotales Indoloras",
      "headers": [
        "Patología",
        "Localización respecto al Testículo",
        "Consistencia y Palpación",
        "Transiluminación",
        "Conducta Terapéutica"
      ],
      "rows": [
        [
          "Hidrocele Adquirido",
          "Rodea y engloba al testículo (intravaginal)",
          "Fluctuante, lisa, redondeada, no reductible",
          "POSITIVA (+)",
          "Observación si es pequeño · Hidrocelectomía si molesta"
        ],
        [
          "Espermatocele / Quiste Epididimario",
          "Polo superior, claramente separado del testículo",
          "Quística, tensa, móvil, indolora",
          "POSITIVA (+)",
          "Observación y tranquilidad; resección solo si es doloroso"
        ],
        [
          "Varicocele Benigno",
          "Posterior y superior al testículo (izquierdo)",
          "Sensación de 'bolsa de gusanos', colapsa en decúbito",
          "NEGATIVA (-)",
          "Varicocelectomía si causa infertilidad, atrofia o dolor"
        ],
        [
          "Varicocele Secundario (Bandera Roja)",
          "Derecho, de inicio brusco o fijo en decúbito",
          "No colapsa al acostar al paciente",
          "NEGATIVA (-)",
          "TAC de abdomen urgente: descartar tumor renal / trombo cava"
        ],
        [
          "Cáncer de Testículo",
          "Intratesticular propio (parénquima)",
          "Pétrea, dura, irregular, indolora, no colapsa",
          "NEGATIVA (-)",
          "Eco Doppler + Marcadores tumorales + Orquiectomía inguinal"
        ]
      ]
    },
    "vignette": "Hombre de 24 años consulta por sensación de pesadez y tensión sorda en el escroto izquierdo tras jugar fútbol o permanecer periodos prolongados de pie. No presenta fiebre ni síntomas urinarios. Al examen físico en bipedestación, se observa una asimetría escrotal a expensas de una masa tortuosa y blanda que ocupa el polo superior y posterior del testículo izquierdo, descrita como una 'bolsa de fideos o gusanos', que se acentúa notablemente al pedirle que realice una maniobra de Valsalva. Al solicitarle que se recueste en la camilla en decúbito supino, la masa disminuye de tamaño y desaparece casi por completo.",
    "explicacion": "El cuadro clínico y los hallazgos semiológicos son patognomónicos de un Varicocele primario idiopático izquierdo Grado III. La localización izquierda en un varón joven y el colapso espontáneo de la dilatación venosa al adoptar la posición de decúbito dorsal descartan patología secundaria compresiva retroperitoneal. La conducta médica consiste en solicitar un espermiograma para evaluar repercusión funcional en la espermatogénesis y ecografía Doppler escrotal. Si se constata oligoastenospermia, dolor refractario o atrofia testicular, la indicación de elección es la corrección quirúrgica (varicocelectomía subinguinal o laparoscópica).",
    "keyPoints": [
      "La transiluminación positiva confirma contenido líquido claro seroso: hidrocele o espermatocele.",
      "En el hidrocele el líquido rodea todo el testículo; en el espermatocele la masa quística está separada en el epidídimo.",
      "El varicocele es la dilatación del plexo pampiniforme ('bolsa de gusanos') y el 90% es del lado izquierdo.",
      "El varicocele es la causa tratable más frecuente de infertilidad y oligoastenospermia en el varón.",
      "Varicocele derecho, de inicio súbito en adultos mayores o que no colapsa en decúbito es una BANDERA ROJA de tumor renal.",
      "Las punciones aspirativas de hidrocele están contraindicadas por recurrencia inmediata y riesgo de piocele."
    ],
    "questions": [
      {
        "stem": "Hombre de 58 años, previamente sano, consulta por notar hace 3 semanas un aumento de volumen indoloro en el lado derecho del escroto. Al examen físico se constata una masa varicosa tortuosa grado III en el cordón espermático derecho. Al acostar al paciente en decúbito dorsal sobre la camilla, la masa venosa permanece ingurgitada y no colapsa en absoluto. No hay dolor a la palpación. ¿Cuál es la conducta diagnóstica indispensable y prioritaria?",
        "options": [
          {
            "id": "A",
            "text": "Indicar varicocelectomía subinguinal electiva ambulatoria"
          },
          {
            "id": "B",
            "text": "Solicitar espermiograma completo para evaluar fertilidad"
          },
          {
            "id": "C",
            "text": "Solicitar TAC de abdomen y pelvis con contraste para descartar masa retroperitoneal o tumor renal"
          },
          {
            "id": "D",
            "text": "Tranquilizar al paciente explicando que es un proceso benigno degenerativo por la edad"
          },
          {
            "id": "E",
            "text": "Indicar uso de suspensorio escrotal elástico y citar en 6 meses"
          }
        ],
        "correcta": "C",
        "explicacion": "El hallazgo de un varicocele del lado derecho (sitio altamente infrecuente), de aparición tardía en un adulto de 58 años y que característicamente no se colapsa en posición de decúbito dorsal, es un signo de alarma mayor de obstrucción vascular retroperitoneal fija. La causa más temida es un Carcinoma de Células Renales con invasión y trombo tumoral de la vena cava inferior o una compresión tumoral retroperitoneal sobre el drenaje venoso espermático. La conducta obligatoria e inmediata es descartar neoplasia mediante un TAC de abdomen y pelvis con contraste.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.1.018"
      },
      {
        "stem": "Hombre de 32 años consulta por aumento progresivo de volumen del testículo derecho de 6 meses de evolución, sin dolor. Al examen físico se palpa una masa escrotal de 6 cm de diámetro, redondeada, lisa, elástica y no sensible. No es posible individualizar el testículo derecho dentro de la masa. Al apoyar la luz de una linterna en la cara posterior del escroto en penumbra, toda la masa se ilumina con un intenso halo rojo brillante homogéneo. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Tumor testicular de células de Leydig"
          },
          {
            "id": "B",
            "text": "Hidrocele testicular no complicado"
          },
          {
            "id": "C",
            "text": "Varicocele grado III"
          },
          {
            "id": "D",
            "text": "Hernia inguinoescrotal incarcerada"
          },
          {
            "id": "E",
            "text": "Hematoma testicular crónico organizado"
          }
        ],
        "correcta": "B",
        "explicacion": "La presencia de una masa escrotal indolora, fluctuante, que engloba por completo al testículo impidiendo su palpación aislada y que presenta una prueba de transiluminación intensamente positiva es patognomónica de un <strong>Hidrocele</strong> (acumulación de líquido seroso claro entre las capas de la túnica vaginal). Los tumores sólidos testiculares, las hernias y los hematoceles son opacos a la luz y arrojan transiluminación negativa.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.1.018"
      },
      {
        "stem": "Pareja de 28 años consulta por infertilidad primaria tras 14 meses de búsqueda sin éxito. El estudio de la mujer es completamente normal. El espermiograma del varón muestra concentración de 8 millones de espermatozoides/mL (oligospermia) con 25% de motilidad progresiva (astenospermia). En el examen físico se palpa un varicocele izquierdo grado II. ¿Cuál es el tratamiento que ha demostrado mayor eficacia para mejorar los parámetros seminales y la fertilidad en este paciente?",
        "options": [
          {
            "id": "A",
            "text": "Tratamiento con antioxidantes orales y vitamina E por 12 meses"
          },
          {
            "id": "B",
            "text": "Corrección quirúrgica del varicocele (varicocelectomía)"
          },
          {
            "id": "C",
            "text": "Inyecciones semanales de testosterona intramuscular"
          },
          {
            "id": "D",
            "text": "Punción evacuadora con escleroterapia percutánea del plexo"
          },
          {
            "id": "E",
            "text": "Enfriamiento testicular con bolsas de hielo dos veces al día"
          }
        ],
        "correcta": "B",
        "explicacion": "El varicocele clínico palpable asociado a alteración documentada del espermiograma (oligoastenoteratozoospermia) en el contexto de infertilidad de pareja es la indicación formal y de primera línea para la reparación quirúrgica (<strong>Varicocelectomía</strong> microquirúrgica subinguinal o laparoscópica). La ligadura de las venas espermáticas dilatadas disminuye la hipertermia y el estrés oxidativo intratesticular, logrando una mejoría significativa de la concentración y movilidad espermática en más del 60-70% de los pacientes tratados, con aumento de las tasas de embarazo espontáneo. Perla. El uso de testosterona exógena suprime el eje y empeora la infertilidad produciendo azoospermia.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.1.018"
      }
    ],
    "diagram": flow("Algoritmo Diagnóstico de Tumefacciones Escrotales Indoloras", [
        {
              "t": "Aumento de Volumen Escrotal Indoloro Crónico",
              "s": "Masa escrotal no inflamatoria · Sensación de pesadez · Hallazgo al autoexamen",
              "type": "warn"
        },
        {
              "k": "split",
              "q": "¿La Masa Escrotal Presenta Transiluminación Positiva a la Linterna?",
              "ll": "Transilumina (Contenido líquido claro translúcido)",
              "left": {
                    "t": "Hidrocele o Espermatocele",
                    "s": "Hidrocele: rodea todo el testículo · Espermatocele: móvil, separado en cabeza de epidídimo",
                    "type": "acc"
              },
              "rl": "No Transilumina (Masa sólida o vascular)",
              "right": {
                    "t": "Varicocele vs Tumor Testicular Sólido",
                    "s": "Varicocele: 'bolsa de gusanos' reducible en decúbito · Tumor: pétreo intratesticular",
                    "type": "dec"
              }
        }
  ])
  },
  {
    "id": "uro-08",
    "classId": "uro-08",
    "tier": 3,
    "blockNum": 3,
    "blockName": "Uro-Oncología",
    "topicLabel": "13.8",
    "title": "Cáncer de Próstata: Tamizaje APE, Tacto Rectal, Biopsia y Score de Gleason",
    "perfilCode": "1.12.1.001",
    "dx": "Sospecha",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "GES N° 19: Cáncer de Próstata en personas de 15 años y más",
    "reconstrucciones": "EUNACOM Julio 2017 (Q#112) · EUNACOM Diciembre 2021 (Q#19) · EUNACOM Diciembre 2023 (Q#64)",
    "frecuencia": "Máxima rentabilidad · valores de APE, zona periférica, biopsia transrectal guiada por eco y Gleason",
    "svg": null,
    "algoTitle": "Algoritmo de Tamizaje y Sospecha Diagnóstica de Cáncer de Próstata",
    "contexto": "El adenocarcinoma prostático es la neoplasia maligna más frecuente y la segunda causa de muerte por cáncer en hombres en Chile. En etapas precoces localizadas es totalmente asintomático debido a que el 70-80% se origina en la zona periférica subcapsular posterior, lejos de la uretra. Por ello, la detección oportuna depende del binomio APE + Tacto Rectal. La regla de oro diagnóstica exige que cualquier nódulo pétreo palpable al tacto rectal es indicación mandatoria de biopsia sin importar que el APE sea normal (< 4.0 ng/mL). La confirmación histológica se establece mediante biopsia transrectal con 12 cilindros clasificada según el Score de Gleason y Grupos de Grado ISUP.",
    "contentSections": [
      {
        "subhead": "1. Epidemiología, Factores de Riesgo y Anatomía Zonal",
        "paragraphs": [
          "El <strong>Cáncer de Próstata (CaP)</strong> presenta una incidencia estrechamente ligada a la edad, siendo excepcional antes de los 45 años. Los factores de riesgo demostrados son: edad avanzada, etnia afrodescendiente y <strong>antecedentes familiares de primer grado</strong> (padre o hermano con CaP duplican a triplican el riesgo individual, especialmente si fueron diagnosticados antes de los 65 años o portan mutaciones BRCA1/2).",
          "Aproximadamente el <strong>75% de los adenocarcinomas prostáticos se originan en la zona periférica</strong> de la glándula. Esta ubicación anatómica posterior hace que el tumor no cause síntomas obstructivos tempranos de compresión uretral (a diferencia de la HPB), pero lo torna accesible al dedo explorador en el <strong>Tacto Rectal</strong>."
        ]
      },
      {
        "subhead": "2. Tamizaje y Cinética del Antígeno Prostático Específico (APE)",
        "paragraphs": [
          "El <strong>Antígeno Prostático Específico (APE / PSA)</strong> es una serina proteasa sintetizada por las células epiteliales luminales para licuar el semen. Es órgano-específico pero <strong>NO cáncer-específico</strong>: se eleva por HPB, prostatitis aguda, retención urinaria, instrumentación o eyaculación reciente.",
          "El tamizaje se inicia a los <strong>50 años</strong> en la población general (o a los <strong>45 años si existen antecedentes familiares de 1° grado o raza negra</strong>). El punto de corte tradicional de normalidad es <strong>< 4.0 ng/mL</strong>. Ante un valor entre 4 y 10 ng/mL ('zona gris'), la conducta inicial es confirmar el valor a las 4-6 semanas descartando ITU y solicitar el <strong>porcentaje de APE Libre / Total</strong>: una fracción libre menor al 15% (o < 18%) se asocia fuertemente a adenocarcinoma y justifica biopsia (véase Tabla 13.8.A)."
        ]
      },
      {
        "subhead": "3. Semiología del Tacto Rectal y Criterios de Biopsia",
        "paragraphs": [
          "El tacto rectal identifica hallazgos patognomónicos de neoplasia: <strong>nódulo indurado o pétreo ('como una piedra')</strong>, asimetría marcada de consistencia o extensión extracapsular con pérdida del surco medio. <em>Regla de oro de examen:</em> Un tacto rectal sospechoso es indicación formal e inmediata de biopsia prostática, incluso si el nivel de APE total es estrictamente normal (< 4.0 ng/mL).",
          "La <strong>Biopsia Prostática guiada por Ecografía Transrectal (TRUS)</strong> o fusión con Resonancia Magnética multiparamétrica (mpRM) es el único método confirmatorio. Consiste en la toma sistemática de 10 a 12 cilindros glandulares bajo profilaxis antibiótica (quinolonas o ceftriaxona)."
        ]
      },
      {
        "subhead": "4. Clasificación Histológica: Score de Gleason y Grupos ISUP",
        "paragraphs": [
          "El <strong>Score de Gleason</strong> suma los dos patrones arquitecturales histológicos predominantes del adenocarcinoma, graduados del 1 (bien diferenciado) al 5 (indiferenciado en sábanas celulares). El primer dígito corresponde al patrón más abundante y el segundo al segundo patrón más frecuente (ej. Gleason 3 + 4 = 7).",
          "La Sociedad Internacional de Patología Urológica (ISUP) consolidó estos patrones en <strong>Grupos de Grado ISUP (1 a 5)</strong>: Grado 1 (Gleason ≤ 6), Grado 2 (Gleason 3+4=7), Grado 3 (Gleason 4+3=7, de peor pronóstico que 3+4 por predominio del patrón 4), Grado 4 (Gleason 8) y Grado 5 (Gleason 9 y 10)."
        ]
      },
      {
        "subhead": "5. Garantías Explícitas en Salud: GES N° 19",
        "paragraphs": [
          "En Chile, el <strong>GES N° 19</strong> garantiza el diagnóstico, tratamiento y seguimiento del cáncer de próstata en toda persona de 15 años y más.",
          "Establece plazos perentorios por ley: la confirmación diagnóstica mediante biopsia prostática debe realizarse dentro de los <strong>30 días</strong> desde la sospecha clínica o de laboratorio; el inicio del tratamiento primario (quirúrgico o radioterápico) dentro de los <strong>60 días</strong> tras la confirmación histológica; y la terapia de deprivación androgénica dentro de los <strong>30 días</strong> desde la indicación médica (véase Tabla 13.8.B)."
        ]
      }
    ],
    "table": {
      "title": "Cinética y Parámetros del APE en la Sospecha de Cáncer Prostático",
      "headers": [
        "Parámetro / Prueba",
        "Definición y Rango Normal",
        "Criterio de Sospecha de CaP",
        "Utilidad Clínica en Toma de Decisiones"
      ],
      "rows": [
        [
          "APE Total Absoluto",
          "Normal general: < 4.0 ng/mL",
          "APE > 4.0 ng/mL (o >10 ng/mL alto riesgo)",
          "Marcador inicial de tamizaje · Valores >10 ng/mL tienen >50% de probabilidad de CaP"
        ],
        [
          "Porcentaje APE Libre / Total",
          "Normal: > 20 - 25% libre",
          "APE Libre / Total < 15 - 18%",
          "Diferencia HPB de CaP en 'zona gris' (4-10 ng/mL): menor fracción libre indica CaP"
        ],
        [
          "Densidad del APE (D-PSA)",
          "APE total / Volumen ecográfico prostático",
          "Densidad > 0.15 ng/mL/cc",
          "Distingue elevación por próstata gigante benigna vs neoplasia focalizada"
        ],
        [
          "Velocidad del APE (V-PSA)",
          "Incremento anual en al menos 3 tomas",
          "Aumento > 0.75 ng/mL en 1 año",
          "Sugiere proliferación maligna activa incluso con valores absolutos basales normales"
        ],
        [
          "Tacto Rectal Anormal",
          "Próstata lisa fibroelástica simétrica",
          "Nódulo pétreo / asimetría / consistencia dura",
          "Indicación directa de biopsia prostática independiente del valor del APE"
        ]
      ]
    },
    "severityTable": {
      "title": "Equivalencia entre Score de Gleason Histológico y Grupos de Grado ISUP",
      "headers": [
        "Grupo de Grado ISUP",
        "Puntaje de Gleason",
        "Patrones Arquitecturales",
        "Pronóstico y Comportamiento Clínico"
      ],
      "rows": [
        [
          "Grado ISUP 1",
          "Gleason ≤ 6 (3 + 3)",
          "Glándulas tubulares bien formadas individuales",
          "Excelente pronóstico · Candidato prototipo para Vigilancia Activa"
        ],
        [
          "Grado ISUP 2",
          "Gleason 7 (3 + 4)",
          "Mayoría de glándulas bien formadas con poco patrón cribiforme (4)",
          "Riesgo Favorable Intermedio · Alta sobrevida con tratamiento curativo"
        ],
        [
          "Grado ISUP 3",
          "Gleason 7 (4 + 3)",
          "Predominio de patrón 4 fusionado/cribiforme sobre el patrón 3",
          "Riesgo Desfavorable Intermedio · Peor pronóstico que Gleason 3+4"
        ],
        [
          "Grado ISUP 4",
          "Gleason 8 (4 + 4 o 3 + 5 o 5 + 3)",
          "Glándulas fusionadas extensas o células cribiformes atípicas",
          "Alto Riesgo · Mayor propensión a invasión local y metástasis"
        ],
        [
          "Grado ISUP 5",
          "Gleason 9 - 10 (4 + 5, 5 + 4 o 5 + 5)",
          "Láminas sólidas de células anaplásicas o necrosis central",
          "Muy Alto Riesgo · Obliga a estadificación sistémica y terapia agresiva"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Estratificación de Riesgo de D'Amico para Cáncer de Próstata Localizado",
      "headers": [
        "Categoría de Riesgo",
        "Criterios Clínicos (TNM, APE, Gleason)",
        "Estudio de Diseminación Necesario",
        "Opciones de Manejo Inicial"
      ],
      "rows": [
        [
          "Bajo Riesgo",
          "cT1c-T2a Y APE < 10 ng/mL Y Gleason ≤ 6 (ISUP 1)",
          "No requiere imágenes de etapificación ósea ni TAC",
          "Vigilancia Activa (de elección) o Prostatectomía Radical o Braquiterapia"
        ],
        [
          "Riesgo Intermedio",
          "cT2b O APE 10-20 ng/mL O Gleason 7 (ISUP 2-3)",
          "TAC de abdomen y pelvis + Cintigrama óseo",
          "Prostatectomía Radical con linfadenectomía o Radioterapia Externa + TDA corta (4-6 m)"
        ],
        [
          "Alto Riesgo",
          "cT2c-T3a O APE > 20 ng/mL O Gleason 8-10 (ISUP 4-5)",
          "TAC abdomen/pelvis + Cintigrama óseo + RM multiparamétrica",
          "Radioterapia Externa + TDA prolongada (2-3 años) o Cirugía en casos seleccionados"
        ],
        [
          "Metastásico (M1)",
          "Metástasis óseas blásticas o ganglionares distantes",
          "Demostrado por cintigrama (hipercaptación) y TAC",
          "Terapia de Deprivación Androgénica (TDA continua) + Nuevos antiandrógenos"
        ]
      ]
    },
    "vignette": "Hombre de 63 años, asintomático, asiste a consulta de medicina preventiva para chequeo general. No tiene antecedentes familiares de neoplasias urológicas. Al examen físico el abdomen es normal; el tacto rectal revela una próstata moderadamente aumentada de tamaño, pero en el lóbulo derecho se palpa un nódulo indurado de consistencia pétrea de 1 cm, no doloroso y bien delimitado. Los exámenes traídos por el paciente muestran creatinina normal y un APE total sérico de 2.2 ng/mL. El paciente refiere sentirse aliviado porque su APE es normal.",
    "explicacion": "El hallazgo de un nódulo prostático indurado de consistencia pétrea al tacto rectal es un signo de alta sospecha de adenocarcinoma prostático (cT2a). En esta situación, el hecho de que el APE sérico sea menor a 4.0 ng/mL (2.2 ng/mL) NO descarta en absoluto la neoplasia, dado que entre un 15 y un 25% de los cánceres prostáticos clínicamente significativos cursan con APE dentro del rango de normalidad. La conducta obligatoria es la derivación inmediata a urología para confirmación histológica mediante biopsia prostática guiada por ultrasonido transrectal bajo garantía GES N° 19.",
    "keyPoints": [
      "El cáncer de próstata se origina en un 70-80% en la zona periférica posterior de la glándula.",
      "Tacto rectal con nódulo pétreo indurado es indicación OBLIGATORIA de biopsia, independientemente del nivel de APE.",
      "El APE es órgano-específico pero no cáncer-específico: se eleva por HPB, prostatitis aguda y retención.",
      "En la 'zona gris' del APE (4 a 10 ng/mL), un % de APE Libre / Total menor al 15% orienta fuertemente a cáncer.",
      "La confirmación diagnóstica definitiva se obtiene exclusivamente mediante biopsia transrectal ecoguiada (10-12 cilindros).",
      "El Score de Gleason evalúa la diferenciación arquitectural; Gleason 4+3 (ISUP 3) tiene peor pronóstico que 3+4 (ISUP 2).",
      "El Cáncer de Próstata está cubierto por el GES N° 19 para personas de 15 años y más, garantizando biopsia en 30 días.",
      "El tamizaje con APE + TR se recomienda desde los 50 años en población general y desde los 45 años en alto riesgo (familiares 1° grado)."
    ],
    "questions": [
      {
        "stem": "Hombre de 61 años, asintomático, acude a control de salud. El tacto rectal revela una próstata de volumen normal, sin nódulos ni asimetrías. El informe de laboratorio indica un APE total de 6.2 ng/mL. Se descarta infección urinaria y se repite el examen a las 4 semanas, confirmándose un valor de 6.4 ng/mL con una relación APE libre/total de 9%. ¿Cuál es la conducta diagnóstica más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Indicar tamsulosina 0.4 mg/día y controlar con APE en 1 año"
          },
          {
            "id": "B",
            "text": "Realizar biopsia prostática guiada por ecografía transrectal"
          },
          {
            "id": "C",
            "text": "Solicitar cintigrama óseo de cuerpo entero de entrada"
          },
          {
            "id": "D",
            "text": "Iniciar finasteride 5 mg/día por 6 meses para evaluar si el APE desciende"
          },
          {
            "id": "E",
            "text": "Tranquilizar al paciente indicando que al no haber nódulo palpable no hay riesgo oncológico"
          }
        ],
        "correcta": "B",
        "explicacion": "El paciente presenta un APE total confirmado en la 'zona gris' (4.0 a 10.0 ng/mL) con tacto rectal normal. En este rango, el porcentaje de APE Libre/Total es la herramienta de discriminación más útil: un valor inferior al 15% (en este caso 9%) se asocia a un riesgo de cáncer de próstata superior al 50-60%. La conducta oficial de elección es la confirmación histológica mediante biopsia prostática guiada por ecografía transrectal (GES N° 19). Perla. Iniciar finasteride en este momento enmascararía el APE y retrasaría el diagnóstico.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.12.1.001"
      },
      {
        "stem": "Varón de 59 años consulta por chequeo prostático. Al tacto rectal se palpa un nódulo indurado pétreo en el lóbulo prostático izquierdo. El APE sérico resulta en 1.9 ng/mL. ¿Cuál es la interpretación clínica y la conducta correcta?",
        "options": [
          {
            "id": "A",
            "text": "El APE normal descarta cáncer; se debe controlar en 3 años"
          },
          {
            "id": "B",
            "text": "Un nódulo pétreo al tacto rectal obliga a realizar biopsia prostática independiente del APE normal"
          },
          {
            "id": "C",
            "text": "Se debe solicitar relación APE libre/total para decidir si se biopsia"
          },
          {
            "id": "D",
            "text": "Indicar tratamiento antibiótico por 4 semanas por sospecha de prostatitis crónica nodular"
          },
          {
            "id": "E",
            "text": "Solicitar ecografía vesicoprostática simple y dar el alta"
          }
        ],
        "correcta": "B",
        "explicacion": "Esta es una de las reglas de oro más repetidas en el examen EUNACOM: el Tacto Rectal y el APE son métodos complementarios y mutuamente independientes. Hasta un 20% de los adenocarcinomas de próstata clínicamente significativos no elevan el APE por encima de 4.0 ng/mL (especialmente tumores muy indiferenciados o localizados). La presencia de un nódulo duro o pétreo al tacto rectal es una indicación absoluta de biopsia prostática transrectal ecoguiada, independientemente de que el APE sea bajo o normal.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.12.1.001"
      },
      {
        "stem": "El informe de anatomía patológica de una biopsia prostática transrectal informa: 'Adenocarcinoma acinar de próstata con patrón Gleason primario 4 en 60% del tejido tumoral y patrón Gleason secundario 3 en 40%'. ¿Cuál es el Score de Gleason y a qué Grupo de Grado ISUP corresponde?",
        "options": [
          {
            "id": "A",
            "text": "Gleason 3 + 4 = 7; Grupo ISUP 2"
          },
          {
            "id": "B",
            "text": "Gleason 4 + 3 = 7; Grupo ISUP 3"
          },
          {
            "id": "C",
            "text": "Gleason 4 + 4 = 8; Grupo ISUP 4"
          },
          {
            "id": "D",
            "text": "Gleason 3 + 3 = 6; Grupo ISUP 1"
          },
          {
            "id": "E",
            "text": "Gleason 4 + 5 = 9; Grupo ISUP 5"
          }
        ],
        "correcta": "B",
        "explicacion": "El score de Gleason se formula sumando primero el patrón arquitectural más frecuente (en este caso el patrón 4, presente en el 60%) seguido del segundo patrón más frecuente (patrón 3, en el 40%), resultando en Gleason 4 + 3 = 7. De acuerdo a la clasificación internacional de la ISUP, el Gleason 4+3 corresponde al Grupo de Grado ISUP 3 (pronóstico desfavorable intermedio), diferenciándose críticamente del Gleason 3+4 (ISUP 2), que posee un curso biológico mucho más favorable. Perla. El primer número siempre representa el patrón predominante.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.12.1.001"
      },
      {
        "stem": "En relación con las garantías explícitas en salud para el Cáncer de Próstata en Chile (GES N° 19), ¿cuál es el plazo máximo normado por ley para realizar la confirmación diagnóstica mediante biopsia prostática desde la sospecha clínica fundada?",
        "options": [
          {
            "id": "A",
            "text": "10 días corridos"
          },
          {
            "id": "B",
            "text": "30 días corridos"
          },
          {
            "id": "C",
            "text": "60 días corridos"
          },
          {
            "id": "D",
            "text": "90 días corridos"
          },
          {
            "id": "E",
            "text": "180 días corridos"
          }
        ],
        "correcta": "B",
        "explicacion": "La Guía Clínica AUGE / GES N° 19 establece taxativamente que todo paciente de 15 años y más con sospecha fundada de cáncer de próstata (por tacto rectal sospechoso o APE elevado persistente) tiene derecho legal a la confirmación diagnóstica mediante biopsia dentro de un plazo máximo de 30 días desde la derivación con sospecha. Una vez confirmada la biopsia, el tratamiento curativo o paliativo debe iniciarse dentro de los 60 días.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.12.1.001"
      }
    ],
    "diagram": flow("Algoritmo de Tamizaje y Sospecha Diagnóstica de Cáncer de Próstata", [
        {
              "t": "Tamizaje en Varón > 50 Años (o > 45 si Afrodescendiente o Familiar 1° Grado)",
              "s": "Determinación de Antígeno Prostático Específico (APE Total) + Tacto Rectal (TR)",
              "type": "warn"
        },
        {
              "k": "split",
              "q": "¿El Tacto Rectal es Sospechoso (Nódulo Duro, Asimetría Pétrea)?",
              "ll": "Tacto Rectal Anormal (Induración / Nódulo)",
              "left": {
                    "t": "Indicación Directa de Biopsia Prostática",
                    "s": "Independiente del nivel de APE sérico · Biopsia ecoguiada transrectal / transperineal",
                    "type": "warn"
              },
              "rl": "Tacto Rectal Normal (Próstata fibroelástica lisa)",
              "right": {
                    "t": "Estratificación por Rango de APE Total",
                    "s": "Evaluar valor absoluto y cinéticas en sangre periférica",
                    "type": "dec"
              }
        },
        {
              "k": "split",
              "q": "¿Cuál es el Rango del APE Total Sérico en Control Confirmado?",
              "ll": "APE en Zona Gris (4.0 a 10.0 ng/mL)",
              "left": {
                    "t": "Calcular % APE Libre / Total o RM multiparamétrica",
                    "s": "Si APE Libre/Total < 15-18%: Biopsia prostática · Si > 20%: Seguimiento anual",
                    "type": "dec"
              },
              "rl": "APE > 10.0 ng/mL",
              "right": {
                    "t": "Biopsia Prostática Guiada + Estadificación",
                    "s": "Riesgo de malignidad > 50% · Score de Gleason / ISUP · RM y Cintigrama",
                    "type": "acc"
              }
        }
  ])
  },
  {
    "id": "uro-09",
    "classId": "uro-09",
    "tier": 2,
    "blockNum": 3,
    "blockName": "Uro-Oncología",
    "topicLabel": "13.9",
    "title": "Cáncer de Próstata: Tratamiento según Riesgo (Cirugía, Radioterapia, Hormonoterapia)",
    "perfilCode": "4.01.1.013",
    "dx": "Sospecha",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "GES N° 19: Garantía de Tratamiento y Seguimiento en Cáncer de Próstata",
    "reconstrucciones": "EUNACOM Julio 2019 (Q#80) · EUNACOM Julio 2023 (Q#45)",
    "frecuencia": "Alta rentabilidad · manejo en enfermedad localizada vs metastásica (bloqueo androgénico)",
    "svg": null,
    "algoTitle": "Algoritmo Terapéutico del Cáncer de Próstata según Grupo de Riesgo",
    "contexto": "El tratamiento del cáncer de próstata depende de la esperanza de vida del paciente y del grupo de riesgo de D'Amico. En tumores de muy bajo y bajo riesgo (Gleason 6, APE < 10, cT1c) la 'Vigilancia Activa' es la estrategia de elección para evitar los efectos adversos de la cirugía (disfunción eréctil e incontinencia). En tumores localizados de riesgo intermedio o alto en pacientes con expectativa > 10 años, la Prostatectomía Radical y la Radioterapia Externa asociada a bloqueo androgénico ofrecen idéntica sobrevida global a largo plazo. En enfermedad metastásica (predilección por metástasis óseas osteoblásticas), el tratamiento de base es la castración médica o quirúrgica (Terapia de Deprivación Androgénica).",
    "contentSections": [
      {
        "subhead": "1. Vigilancia Activa vs Tratamiento Curativo en CaP Localizado",
        "paragraphs": [
          "La <strong>Vigilancia Activa</strong> es el estándar en pacientes con cáncer de bajo riesgo (Gleason 3+3=6 / ISUP 1, APE < 10 ng/mL y estadio clínico T1c o T2a). Consiste en monitorizar estrechamente con APE cada 3 a 6 meses, tacto rectal semestral y rebiopsias o RM prostática protocolizadas, posponiendo el tratamiento activo curativo solo si se constata progresión biológica, evitando así el sobretratamiento.",
          "El <strong>Tratamiento Curativo Activo</strong> está indicado en riesgo intermedio y alto en pacientes con expectativa de vida mayor a 10 años. Las dos alternativas de referencia son: (1) <strong>Prostatectomía Radical</strong> (extirpación completa de próstata, vesículas seminales y linfadenectomía obturatriz-ilíaca); y (2) <strong>Radioterapia Externa (RTE) conformacional / IMRT</strong>, combinada con braquiterapia y hormonoterapia según el riesgo."
        ]
      },
      {
        "subhead": "2. Secuelas Quirúrgicas y Radioterápicas",
        "paragraphs": [
          "Las complicaciones características de la prostatectomía radical son la <strong>disfunción eréctil</strong> (30-80%, por lesión de las bandeletas neurovasculares de Walsh) y la <strong>incontinencia urinaria de esfuerzo</strong> (5-15% transitoria o permanente por daño del esfínter estriado).",
          "La radioterapia no produce incontinencia inmediata pero puede generar <strong>proctitis actínica</strong> (rectorragia indolora crónica) y cistitis actínica (hematuria y polaquiuria), además de disfunción eréctil progresiva por endarteritis obliterante a los 2-3 años."
        ]
      },
      {
        "subhead": "3. Terapia de Deprivación Androgénica (TDA) en Enfermedad Avanzada",
        "paragraphs": [
          "El adenocarcinoma de próstata es andrógeno-dependiente. En pacientes con metástasis ganglionares o a distancia (típicamente <strong>metástasis óseas blásticas</strong> en columna lumbar, pelvis y costillas, visibles como focos calientes hipercaptantes en el cintigrama óseo), el pilar del tratamiento es la <strong>Terapia de Deprivación Androgénica (TDA)</strong> para reducir la testosterona sérica a niveles de castración (< 50 ng/dL).",
          "Se logra mediante castración quirúrgica (orquiectomía bilateral subcapsular) o castración médica mediante <strong>agonistas de la GnRH/LHRH (Leuprolide, Goserelina)</strong>. <em>Perla farmacológica:</em> Los agonistas GnRH producen un 'flare up' (brote) inicial transitorio de testosterona en los primeros 7-14 días, el cual debe bloquearse administrando previamente un antiandrógeno periférico (Bicalutamida) para evitar la compresión medular por metástasis vertebrales. Los antagonistas puros de GnRH (Degarelix) suprimen la testosterona de inmediato sin efecto flare (véase Tabla 13.9)."
        ]
      }
    ],
    "table": {
      "title": "Comparativa de Modalidades Terapéuticas en Cáncer de Próstata",
      "headers": [
        "Modalidad Terapéutica",
        "Escenario Clínico Indicado",
        "Mecanismo / Intervención",
        "Principales Efectos Secundarios"
      ],
      "rows": [
        [
          "Vigilancia Activa",
          "Bajo riesgo (ISUP 1, APE < 10, cT1-T2a)",
          "Monitoreo seriado con APE, TR y rebiopsias",
          "Ansiedad del paciente; riesgo de pérdida de seguimiento"
        ],
        [
          "Prostatectomía Radical",
          "Riesgo intermedio/alto localizado; expectativa >10 a",
          "Extirpación quirúrgica completa de la glándula y vesículas",
          "Disfunción eréctil (30-70%), incontinencia urinaria (5-10%)"
        ],
        [
          "Radioterapia Externa + TDA",
          "Riesgo intermedio o alto localizado/localmente avanzado",
          "Radiación ionizante guiada + Bloqueo hormonal 6 a 36 m",
          "Proctitis actínica, cistitis por radiación, sofocos, astenia"
        ],
        [
          "Castración Médica (TDA)",
          "Enfermedad metastásica M1 (ósea/ganglionar)",
          "Análogos LHRH (Leuprolide) o Antagonistas (Degarelix)",
          "Pérdida de libido, osteoporosis, síndrome metabólico, ginecomastia"
        ],
        [
          "Antiandrógenos de Nueva Generación",
          "CaP resistente a la castración (CPRC)",
          "Enzalutamida, Abiraterona, Apalutamida",
          "Fatiga, hipertensión, fracturas, toxicidad hepática (abiraterona)"
        ]
      ]
    },
    "vignette": "Hombre de 76 años consulta por dolor lumbar persistente de 2 meses de evolución que empeora por las noches. No presenta síntomas neurológicos de compresión medular. Al examen físico se constata próstata aumentada de consistencia, difusamente pétrea y fija. Exámenes de laboratorio muestran APE total de 145 ng/mL y fosfatasas alcalinas elevadas en 420 U/L. El cintigrama óseo de cuerpo entero evidencia múltiples depósitos osteoblásticos hipercaptantes diseminados en columna dorsal, lumbar, pelvis ósea y fémur proximal bilateral.",
    "explicacion": "El paciente presenta un adenocarcinoma de próstata avanzado en etapa IV (metastásico óseo M1b). El tratamiento estándar de primera línea y de mayor impacto sobre la sobrevida y el alivio sintomático del dolor óseo es la Terapia de Deprivación Androgénica (castración médica o quirúrgica). Si se utilizan agonistas de la LHRH (Leuprolide), se debe coadministrar Bicalutamida durante las primeras semanas para prevenir el fenómeno de 'flare up' hormonal que podría exacerbar el dolor o precipitar compresión medular.",
    "keyPoints": [
      "En cáncer de próstata de bajo riesgo con expectativa de vida limitada la Vigilancia Activa es la elección.",
      "Prostatectomía radical y Radioterapia externa tienen idéntica sobrevida global en tumores localizados.",
      "Las secuelas típicas de la cirugía son la disfunción eréctil y la incontinencia urinaria.",
      "La radioterapia externa puede producir proctitis y cistitis actínica a mediano y largo plazo.",
      "Las metástasis del cáncer de próstata son característicamente osteoblásticas (densas) y se detectan con cintigrama óseo.",
      "En cáncer metastásico la base del tratamiento es la Terapia de Deprivación Androgénica (TDA: análogos LHRH o Degarelix).",
      "Los análogos LHRH (Leuprolide) exigen protección con antiandrógeno (bicalutamida) para evitar el flare up inicial."
    ],
    "questions": [
      {
        "stem": "Hombre de 58 años, activo y deportista, con expectativa de vida mayor a 20 años, es diagnosticado de adenocarcinoma prostático ISUP 2 (Gleason 3+4=7) en 4 de 12 cilindros, con APE basal de 7.5 ng/mL y estadio cT1c. El estudio de etapificación con TAC y cintigrama óseo descarta metástasis. ¿Cuáles son las dos opciones terapéuticas estándar con intención curativa recomendadas para este paciente?",
        "options": [
          {
            "id": "A",
            "text": "Prostatectomía radical o Radioterapia externa conformacional"
          },
          {
            "id": "B",
            "text": "Quimioterapia con docetaxel o Terapia de deprivación androgénica exclusiva"
          },
          {
            "id": "C",
            "text": "Vigilancia activa o Cistectomía radical"
          },
          {
            "id": "D",
            "text": "Resección transuretral de próstata (RTUP) o Tamsulosina oral"
          },
          {
            "id": "E",
            "text": "Inmunoterapia con pembrolizumab o Castración quirúrgica inmediata"
          }
        ],
        "correcta": "A",
        "explicacion": "En el cáncer de próstata localizado de riesgo intermedio favorable (ISUP 2, Gleason 3+4, APE < 10) en un paciente joven con excelente estado basal y expectativa de vida prolongada (> 10-15 años), las dos alternativas terapéuticas de referencia con demostrada intención curativa y sobrevida global equivalente a 10 y 15 años son la <strong>Prostatectomía Radical</strong> (con o sin preservación de bandeletas neurovasculares) y la <strong>Radioterapia Externa</strong> (asociada o no a hormonoterapia corta). La elección entre ambas depende de la preferencia informada del paciente respecto a los perfiles de efectos secundarios (incontinencia/disfunción eréctil vs toxicidad rectal/urinaria).",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.1.013"
      },
      {
        "stem": "Varón de 73 años con cáncer de próstata metastásico óseo en columna y pelvis inicia tratamiento con el agonista LHRH Leuprolide intramuscular mensual. ¿Cuál es la razón fisiológica por la que se debe prescribir un antiandrógeno oral (como bicalutamida) durante los primeros 14 días desde la primera inyección?",
        "options": [
          {
            "id": "A",
            "text": "Prevenir la hepatotoxicidad aguda letal inducida por el leuprolide"
          },
          {
            "id": "B",
            "text": "Bloquear el brote inicial de testosterona ('flare up') que puede exacerbar el dolor óseo y causar compresión medular"
          },
          {
            "id": "C",
            "text": "Acelerar la eliminación renal de los metabolitos del leuprolide"
          },
          {
            "id": "D",
            "text": "Evitar la hiponatremia dilucional por secreción inadecuada de ADH"
          },
          {
            "id": "E",
            "text": "Prevenir la necrosis avascular de la cabeza femoral"
          }
        ],
        "correcta": "B",
        "explicacion": "Los agonistas del receptor de GnRH/LHRH (como leuprolide y goserelina) estimulan inicialmente los receptores hipofisarios de forma potente antes de producir su internalización y desensibilización (down-regulation). Durante los primeros 7 a 14 días se produce una elevación transitoria de LH y consecuentemente un aumento en la síntesis de testosterona, fenómeno conocido como <strong>'flare up' tumoral</strong>. En pacientes con metástasis óseas vertebrales, este aumento puede provocar una rápida progresión tumoral con dolor óseo intolerable, retención urinaria o compresión medular aguda. La coadministración de un antiandrógeno periférico (Bicalutamida) bloquea los receptores androgénicos prostáticos y neutraliza este riesgo.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.1.013"
      },
      {
        "stem": "Paciente de 65 años operado hace 4 meses de prostatectomía radical por adenocarcinoma prostático Gleason 3+4=7 confinado al órgano con márgenes negativos. Consulta en su control postoperatorio por queja de escapes involuntarios de orina al toser, cambiar de posición y caminar rápido, utilizando 2 a 3 absorbentes diarios. El examen neurológico es normal y no hay residuo postmiccional. ¿Cuál es el mecanismo de su incontinencia y la conducta inicial?",
        "options": [
          {
            "id": "A",
            "text": "Incontinencia de urgencia por vejiga hiperactiva; iniciar oxibutinina oral"
          },
          {
            "id": "B",
            "text": "Incontinencia de esfuerzo por debilidad/lesión esfinteriana; iniciar kinesiterapia del piso pélvico"
          },
          {
            "id": "C",
            "text": "Incontinencia por rebalse; instalar sonda Foley a permanencia"
          },
          {
            "id": "D",
            "text": "Fístula vesicoperineal; indicar cirugía abierta de urgencia"
          },
          {
            "id": "E",
            "text": "Recidiva tumoral retrovesical inmediata; indicar radioterapia pélvica"
          }
        ],
        "correcta": "B",
        "explicacion": "La incontinencia urinaria post-prostatectomía radical es predominantemente una Incontinencia Urinaria de Esfuerzo secundaria a la alteración o daño por tracción del esfínter uretral estriado y pérdida del soporte anatómico uretral. En los primeros 6 a 12 meses postoperatorios, la inmensa mayoría de los pacientes experimenta una mejoría progresiva sustancial. La conducta inicial obligatoria es la rehabilitación y fortalecimiento del esfínter mediante <strong>kinesiterapia del suelo pélvico</strong> supervisada. La colocación de un esfínter urinario artificial solo se considera tras al menos 1 año de evolución si la incontinencia persiste severa.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.1.013"
      }
    ],
    "diagram": flow("Algoritmo Terapéutico del Cáncer de Próstata según Grupo de Riesgo", [
        {
              "t": "Adenocarcinoma de Próstata Confirmado por Biopsia",
              "s": "Estratificar en grupos de riesgo según D'Amico (TNM, APE basal, Score de Gleason)",
              "type": "warn"
        },
        {
              "k": "split",
              "q": "¿El Tumor está Confinado a la Próstata (Localizado) o Presenta Metástasis a Distancia (M1)?",
              "ll": "Tumor Localizado (Bajo, Intermedio o Alto Riesgo)",
              "left": {
                    "t": "Tratamiento con Intención Curativa",
                    "s": "Bajo: Vigilancia Activa · Intermedio/Alto: Prostatectomía Radical o RT + TDA",
                    "type": "acc"
              },
              "rl": "Metastásico (M1: Metástasis óseas blásticas / ganglionares)",
              "right": {
                    "t": "Terapia de Deprivación Androgénica (TDA)",
                    "s": "Análogos LHRH (Leuprolide) o Antagonistas (Degarelix) + Nuevos antiandrógenos",
                    "type": "dec"
              }
        }
  ])
  },
  {
    "id": "uro-10",
    "classId": "uro-10",
    "tier": 3,
    "blockNum": 3,
    "blockName": "Uro-Oncología",
    "topicLabel": "13.10",
    "title": "Cáncer de Testículo: Masas Indoloras, Marcadores (AFP, b-hCG, LDH) & Orquiectomía Radical",
    "perfilCode": "1.12.1.002",
    "dx": "Sospecha",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "GES N° 20: Cáncer de Testículo en personas de 15 años y más",
    "reconstrucciones": "EUNACOM Julio 2016 (Q#51) · EUNACOM Diciembre 2018 (Q#92) · EUNACOM Julio 2022 (Q#09)",
    "frecuencia": "Máxima rentabilidad · marcadores séricos, abordaje inguinal obligatorio y prohibición de punción",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico y Terapéutico Inicial del Nódulo Testicular",
    "contexto": "El cáncer de testículo es la neoplasia sólida más común en varones jóvenes de 15 a 35 años y representa uno de los mayores éxitos de la oncología moderna, con tasas de curación global superiores al 95%. El antecedente de criptorquidia es el factor de riesgo más importante (aumenta el riesgo de 4 a 10 veces, incluso en el testículo contralateral normalmente descendido). La regla de oro absoluta y universal es que toda masa testicular sólida indolora es maligna hasta demostrar lo contrario, exigiendo ecografía testicular Doppler y marcadores séricos (AFP, b-hCG, LDH) preoperatorios. La biopsia por punción transescrotal está terminantemente prohibida debido a que altera el drenaje linfático natural diseminando el tumor hacia los ganglios inguinales; el abordaje mandatorio es la orquiectomía inguinal radical.",
    "contentSections": [
      {
        "subhead": "1. Epidemiología, Criptorquidia y Clasificación Histológica",
        "paragraphs": [
          "El <strong>Cáncer de Testículo</strong> presenta su pico de incidencia entre los 20 y los 35 años. El principal factor predisponente es la <strong>criptorquidia</strong> (testículo no descendido), la cual confiere un riesgo relativo de 4 a 10 veces mayor de desarrollar un tumor germinal. La orquidopexia precoz (antes del año de vida) disminuye pero no erradica el riesgo, y mantiene la gónada accesible a la palpación.",
          "Más del <strong>95% de los tumores testiculares derivan de células germinales (TCCG)</strong>, dividiéndose en dos grandes categorías biológicas y terapéuticas: <strong>Seminomas (50-55%)</strong> (seminoma clásico y espermatocítico) y <strong>No Seminomas (40-45%)</strong> (carcinoma embrionario, teratoma maduro/inmaduro, coriocarcinoma y tumor del saco vitelino/seno endodérmico)."
        ]
      },
      {
        "subhead": "2. Presentación Clínica y Ecografía Doppler Testicular",
        "paragraphs": [
          "La presentación típica es una <strong>masa o nódulo intratesticular duro, pétreo, firme e indoloro</strong>, descubierto frecuentemente por el propio paciente durante el baño o tras un traumatismo menor trivial que motivó la palpación. Menos del 10-15% debuta con dolor agudo por necrosis hemorrágica intratumoral.",
          "El <strong>Eco Doppler testicular bilateral</strong> es la prueba de imagen de primera línea obligatoria: tiene una sensibilidad cercana al 100% para diferenciar masas intratesticulares (malignas en >95%) de patología extratesticular benigna (epidídimo, hidrocele). Se observa típicamente una masa sólida heterogénea hipoecogénica con flujo vascular Doppler interno aumentado."
        ]
      },
      {
        "subhead": "3. Marcadores Tumorales Séricos: AFP, b-hCG y LDH",
        "paragraphs": [
          "La medición sérica de los tres <strong>marcadores tumorales</strong> es mandatoria <strong>ANTES de la orquiectomía</strong> y en el seguimiento postoperatorio: (1) <strong>Alfafetoproteína (AFP)</strong> (vida media 5-7 días; producida por el tumor del saco vitelino y carcinoma embrionario; <em>Regla de oro:</em> el seminoma puro NUNCA eleva AFP; el hallazgo de AFP elevada en un presunto seminoma descarta seminoma puro e impone el tratamiento de No Seminoma); (2) <strong>Gonadotrofina Coriónica fracción beta (b-hCG)</strong> (vida media 24-36 horas; producida por el coriocarcinoma y en un 15-20% de los seminomas sincitiotrofoblásticos); y (3) <strong>Deshidrogenasa Láctica (LDH)</strong> (marcador inespecífico proporcional a la masa y tasa de recambio celular tumoral).",
          "La persistencia de marcadores elevados tras la cirugía o su tiempo de duplicación certifica enfermedad metastásica micrometastásica residual."
        ]
      },
      {
        "subhead": "4. Técnica de Orquiectomía Inguinal Radical y Prohibición de Vía Escrotal",
        "paragraphs": [
          "El procedimiento diagnóstico y terapéutico de inicio es la <strong>Orquiectomía Inguinal Radical</strong>. Se realiza a través de una incisión inguinal (por encima del ligamento inguinal), con <strong>clampeo temprano y control vascular alto del cordón espermático a nivel del anillo inguinal profundo</strong> antes de movilizar el testículo.",
          "<em>Prohibición formal de examen:</em> <strong>La punción-biopsia transescrotal o la incisión a través del escroto está formalmente contraindicada</strong>. El testículo drena linfáticamente a los ganglios retroperitoneales lumboaórticos (aorta y cava), mientras que la piel del escroto drena a los ganglios inguinales superficiales. La punción transescrotal contamina la pared escrotal y los vasos linfáticos inguinales, provocando recidivas locales y alterando las vías clásicas de diseminación (véase Tabla 13.10.A)."
        ]
      },
      {
        "subhead": "5. Estadificación, Tratamiento Adyuvante y Garantía GES N° 20",
        "paragraphs": [
          "Tras la orquiectomía radical, la etapificación incluye TAC de tórax, abdomen y pelvis con contraste para evaluar compromiso ganglionar retroperitoneal (primer escalón metastásico) y pulmonar. El <strong>Seminoma</strong> es extraordinariamente radiosensible y quimiosensible; en estadio I la conducta puede ser observación activa, radioterapia o 1 ciclo de carboplatino. Los <strong>No Seminomas</strong> son radiorresistentes; en estadios avanzados se tratan con <strong>Quimioterapia basada en cisplatino (esquema BEP: Bleomicina, Etopósido, Cisplatino)</strong>, requiriendo Linfadenectomía Retroperitoneal (RPLND) si persisten masas ganglionares residuales post-quimioterapia.",
          "El <strong>GES N° 20</strong> cubre a toda persona de 15 años y más, garantizando la intervención quirúrgica y el tratamiento oncológico integral en plazos estrictos (véase Tabla 13.10.B)."
        ]
      }
    ],
    "table": {
      "title": "Perfil de Marcadores Tumorales en Cáncer de Testículo",
      "headers": [
        "Subtipo Histológico Tumoral",
        "Alfafetoproteína (AFP)",
        "Gonadotrofina Coriónica (b-hCG)",
        "Deshidrogenasa Láctica (LDH)",
        "Sensibilidad Radioterápica"
      ],
      "rows": [
        [
          "Seminoma Puro",
          "SIEMPRE NORMAL (0%)",
          "Elevada en 15 - 20%",
          "Elevada en enfermedad voluminosa",
          "ALTA (Radiosensible)"
        ],
        [
          "Carcinoma Embrionario",
          "Elevada en 60 - 70%",
          "Elevada en 60%",
          "Frecuentemente elevada",
          "BAJA (Radiorresistente)"
        ],
        [
          "Tumor del Saco Vitelino (Yolk Sac)",
          "ELEVADA (> 90%)",
          "Normal (0%)",
          "Elevada",
          "BAJA (Radiorresistente)"
        ],
        [
          "Coriocarcinoma Puro",
          "Normal (0%)",
          "MASIVAMENTE ELEVADA (>99%)",
          "Muy elevada (metástasis hematógenas)",
          "Radiorresistente (quimiosensible)"
        ],
        [
          "Teratoma Maduro / Inmaduro",
          "Normal",
          "Normal",
          "Normal",
          "Radiorresistente (quirúrgico)"
        ]
      ]
    },
    "severityTable": {
      "title": "Estadificación Anatómica y Pronóstica del Cáncer Testicular",
      "headers": [
        "Estadio Clínico TNM",
        "Extensión Tumoral",
        "Compromiso Linfático / Metastásico",
        "Conducta Terapéutica Post-Orquiectomía"
      ],
      "rows": [
        [
          "Estadio I",
          "Confinado estrictamente al testículo (T1-T4)",
          "N0 M0 (Ganglios retroperitoneales negativos) y marcadores normalizados",
          "Seminoma: Vigilancia o Carboplatino · No seminoma: Vigilancia o Quimioterapia BEP (1 ciclo)"
        ],
        [
          "Estadio II",
          "Tumor testicular de cualquier tamaño",
          "N1-N3 (Metástasis en ganglios retroperitoneales subdiafragmáticos) M0",
          "Seminoma: Radioterapia retroperitoneal o BEP x 3 ciclos · No seminoma: BEP x 3 ciclos +/- RPLND"
        ],
        [
          "Estadio III",
          "Tumor testicular de cualquier tamaño",
          "M1a (Ganglios supradiafragmáticos o metástasis pulmonares) o M1b (visceral)",
          "Quimioterapia de inducción con esquema BEP (3 a 4 ciclos) según riesgo IGCCCG"
        ],
        [
          "Marcadores Séricos S1-S3",
          "Persistencia de AFP, b-hCG o LDH post-cirugía",
          "Indica presencia de micrometástasis a distancia no visibles en TAC",
          "Tratar como enfermedad avanzada sistémica con quimioterapia combinada"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Protocolo Terapéutico en Cáncer Testicular según Histopatología y Etapa",
      "headers": [
        "Subtipo Histológico y Estadio",
        "Objetivo Oncológico Primario",
        "Terapia de Primera Línea",
        "Terapia de Rescate o Segunda Línea"
      ],
      "rows": [
        [
          "Paso Común Inicial (Todo Tumor Sólido)",
          "Diagnóstico histológico y control primario local",
          "Orquiectomía Inguinal Radical con clampeo vascular precoz del cordón",
          "Prohibida la biopsia transescrotal"
        ],
        [
          "Seminoma Estadio I",
          "Prevenir recurrencia ganglionar retroperitoneal",
          "Vigilancia activa protocolizada (sobrevida >99%) o Carboplatino AUC 7 (1 ciclo)",
          "Radioterapia lumbaaórtica profiláctica (20 Gy)"
        ],
        [
          "Seminoma Estadio II - III",
          "Erradicar enfermedad metastásica",
          "Quimioterapia sistémica BEP (3 a 4 ciclos) o Etopósido + Cisplatino (EP)",
          "Masas residuales > 3 cm: PET-TAC; resección si es positivo"
        ],
        [
          "No Seminoma Estadio I",
          "Manejo de micrometástasis retroperitoneales",
          "Vigilancia activa estrecha o Quimioterapia BEP (1 ciclo) si hay invasión vascular",
          "Linfadenectomía retroperitoneal primaria (RPLND)"
        ],
        [
          "No Seminoma Estadio II - III",
          "Tratamiento curativo de enfermedad sistémica",
          "Quimioterapia intensiva BEP por 3 a 4 ciclos",
          "Resección de todas las masas residuales retroperitoneales > 1 cm (teratoma residual)"
        ]
      ]
    },
    "vignette": "Hombre de 25 años, sin antecedentes mórbidos, consulta por un aumento de volumen indoloro y progresivo en el testículo derecho de 2 meses de evolución. Refiere que la gónada 'se siente más pesada y dura'. No ha presentado fiebre, disuria ni dolor lumbar. Al examen físico: en el hemitestículo derecho se palpa una masa intratesticular pétrea de 3.5 cm de diámetro, firme, insensible, que no se separa del parénquima gonadal. La masa no transilumina a la linterna. El cordón espermático se palpa normal. La ecografía testicular Doppler confirma masa sólida intratesticular hipoecogénica vascularizada de 34 mm. Los marcadores tumorales preoperatorios muestran: AFP 120 ng/mL (normal < 8), b-hCG 45 mUI/mL (normal < 5) y LDH 380 U/L.",
    "explicacion": "El cuadro clínico corresponde a un Tumor Testicular de Células Germinales No Seminomatoso (confirmado por la presencia de una masa sólida intratesticular en un adulto joven con elevación franca de Alfafetoproteína y b-hCG). La conducta obligatoria e inmediata bajo la garantía GES N° 20 es programar una Orquiectomía Inguinal Radical con abordaje por el canal inguinal y clampeo alto precoz de los vasos espermáticos. Está terminantemente prohibido realizar una biopsia por punción o un abordaje a través del escroto por el riesgo de diseminación tumoral retrógrada a los ganglios linfáticos inguinales.",
    "keyPoints": [
      "Toda masa intratesticular sólida en un varón de 15 a 35 años es maligna hasta demostrar lo contrario.",
      "La criptorquidia es el principal factor de riesgo para cáncer testicular (aumenta riesgo 4 a 10 veces).",
      "La ecografía testicular Doppler es el examen de imagen de elección con sensibilidad cercana al 100%.",
      "Los marcadores tumorales séricos (AFP, b-hCG, LDH) deben tomarse SIEMPRE antes de extirpar el testículo.",
      "El seminoma puro NUNCA eleva Alfafetoproteína (AFP); si la AFP está elevada, es un No Seminoma.",
      "La biopsia por punción transescrotal está FORMALMENTE PROHIBIDA por alterar el drenaje linfático.",
      "El abordaje quirúrgico estándar es la Orquiectomía Inguinal Radical con clampeo vascular alto.",
      "El cáncer testicular es una de las neoplasias más curables (>95%) y está cubierto por el GES N° 20."
    ],
    "questions": [
      {
        "stem": "Hombre de 27 años consulta por nódulo palpable indoloro en testículo derecho de 1 mes. La ecografía confirma masa sólida intratesticular de 2.5 cm. Los marcadores séricos muestran AFP 240 ng/mL y b-hCG normal. ¿Cuál es el abordaje quirúrgico y la conducta inicial correcta?",
        "options": [
          {
            "id": "A",
            "text": "Biopsia con aguja gruesa a través de la piel del escroto bajo anestesia local"
          },
          {
            "id": "B",
            "text": "Orquiectomía radical por abordaje inguinal con clampeo alto del cordón espermático"
          },
          {
            "id": "C",
            "text": "Enucleación simple del nódulo por incisión escrotal con biopsia rápida"
          },
          {
            "id": "D",
            "text": "Observación con ecografía seriada en 3 meses para evaluar crecimiento"
          },
          {
            "id": "E",
            "text": "Quimioterapia con bleomicina antes de cualquier procedimiento quirúrgico"
          }
        ],
        "correcta": "B",
        "explicacion": "Ante la presencia de una masa sólida intratesticular confirmada ecográficamente en un adulto joven con marcadores tumorales positivos, el procedimiento mandatorio inicial es la Orquiectomía Inguinal Radical. La incisión debe realizarse a nivel inguinal (por encima del ligamento inguinal) con clampeo vascular temprano del cordón espermático a nivel del anillo profundo para evitar la diseminación hematógena. La biopsia o abordaje transescrotal está formalmente contraindicada porque abre una vía linfática aberrante hacia los ganglios inguinales superficiales. Perla. Nunca puncionar un testículo con sospecha tumoral.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.12.1.002"
      },
      {
        "stem": "En un paciente de 30 años con masa testicular resecada mediante orquiectomía inguinal, el informe preliminar de biopsia describe 'Seminoma clásico puro'. Sin embargo, los exámenes de sangre preoperatorios y postoperatorios demuestran persistentemente una Alfafetoproteína (AFP) de 350 ng/mL (valor normal < 8 ng/mL). ¿Cuál es la implicancia clínica de este hallazgo?",
        "options": [
          {
            "id": "A",
            "text": "El diagnóstico es correcto, ya que el 50% de los seminomas puros secretan AFP"
          },
          {
            "id": "B",
            "text": "El seminoma puro NUNCA produce AFP; la elevación de AFP descarta seminoma puro y obliga a tratar al paciente como un No Seminoma"
          },
          {
            "id": "C",
            "text": "La AFP elevada se debe a necrosis tumoral y no modifica la conducta terapéutica del seminoma"
          },
          {
            "id": "D",
            "text": "La elevación de AFP indica únicamente insuficiencia hepática secundaria a fármacos anestésicos"
          },
          {
            "id": "E",
            "text": "Indica que el paciente tiene un teratoma benigno maduro sin potencial invasor"
          }
        ],
        "correcta": "B",
        "explicacion": "Esta es una regla de oro oncológica fundamental: las células de seminoma puro carecen de la capacidad genética y bioquímica para sintetizar Alfafetoproteína (AFP). Por lo tanto, si un paciente con presunto seminoma presenta elevación de AFP en suero, existe obligatoriamente un componente histológico no seminomatoso no identificado en la muestra (habitualmente carcinoma embrionario o tumor del saco vitelino). Para todos los fines terapéuticos y de pronóstico, el paciente DEBE ser reclasificado y tratado con los protocolos de Tumor No Seminomatoso (los cuales son radiorresistentes y requieren quimioterapia BEP).",
        "recTag": "Banco Oficial AEE · Perfil V3 1.12.1.002"
      },
      {
        "stem": "Hombre de 22 años operado de orquiectomía inguinal derecha por tumor no seminomatoso. El TAC de tórax, abdomen y pelvis no muestra adenopatías ni lesiones a distancia. Antes de iniciar la quimioterapia adyuvante protocolizada, ¿cuál es la medida preventiva de soporte que debe ofrecerse obligatoriamente al paciente?",
        "options": [
          {
            "id": "A",
            "text": "Criopreservación de semen en banco de esperma"
          },
          {
            "id": "B",
            "text": "Vacunación antineumocócica conjugada"
          },
          {
            "id": "C",
            "text": "Suplementación con testosterona intramuscular mensual"
          },
          {
            "id": "D",
            "text": "Instalación de reservorio venoso subcutáneo profiláctico"
          },
          {
            "id": "E",
            "text": "Nefrectomía profiláctica ipsilateral"
          }
        ],
        "correcta": "A",
        "explicacion": "Dado que el cáncer testicular afecta a hombres jóvenes en plena edad fértil y que los esquemas quimioterápicos con cisplatino (BEP) o la linfadenectomía retroperitoneal (que puede producir eyaculación retrógrada permanente por lesión de los nervios simpáticos hipogástricos) conllevan un alto riesgo de azoospermia o infertilidad transitoria o permanente, es un estándar ético y médico mandatorio ofrecer y gestionar la <strong>criopreservación de semen</strong> previo al inicio de cualquier terapia oncológica adyuvante.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.12.1.002"
      },
      {
        "stem": "¿Cuál de los siguientes factores constituye el factor de riesgo mejor establecido para el desarrollo de cáncer testicular de células germinales?",
        "options": [
          {
            "id": "A",
            "text": "Varicocele izquierdo de larga data"
          },
          {
            "id": "B",
            "text": "Criptorquidia o testículo no descendido"
          },
          {
            "id": "C",
            "text": "Infección urinaria recurrente en la infancia"
          },
          {
            "id": "D",
            "text": "Uso prolongado de ropa interior ajustada"
          },
          {
            "id": "E",
            "text": "Traumatismos testiculares a repetición en deportistas"
          }
        ],
        "correcta": "B",
        "explicacion": "La <strong>criptorquidia</strong> (falla en el descenso testicular hacia el escroto) es el factor de riesgo congénito más fuertemente asociado al cáncer testicular, multiplicando el riesgo entre 4 y 10 veces en comparación con la población general. Si bien la orquidopexia quirúrgica temprana (antes del primer año de vida) mejora el potencial de fertilidad y disminuye en parte el riesgo, no lo iguala al de la población normal, y además confiere un riesgo aumentado para el testículo contralateral normalmente descendido.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.12.1.002"
      }
    ],
    "diagram": flow("Algoritmo Diagnóstico y Terapéutico Inicial del Nódulo Testicular", [
        {
              "t": "Varón Joven (15 a 35 Años) con Nódulo o Masa Testicular Indolora",
              "s": "Masa intratesticular pétrea fija · No transilumina · Aumento de consistencia",
              "type": "warn"
        },
        {
              "t": "Ecografía Testicular Doppler Bilateral + Marcadores Tumorales Séricos",
              "s": "AFP + b-hCG + LDH basales previos a cualquier intervención",
              "type": "dec"
        },
        {
              "k": "split",
              "q": "¿Masa Intratesticular Sólida Confirmada por Ultrasonido?",
              "ll": "Masa sólida hipervascularizada intratesticular",
              "left": {
                    "t": "Orquiectomía Inguinal Radical con Clampeo Alto",
                    "s": "Incisión inguinal · Clampeo precoz del cordón · PROHIBIDA la biopsia transescrotal",
                    "type": "acc"
              },
              "rl": "Lesión extratesticular o quística benigna",
              "right": {
                    "t": "Patología Benigna (Hidrocele, Quiste)",
                    "s": "Manejo conservador o electivo según clínica",
                    "type": "dec"
              }
        },
        {
              "k": "split",
              "q": "¿Histopatología Definitiva de la Pieza Quirúrgica?",
              "ll": "Seminoma Puro (AFP estrictamente normal)",
              "left": {
                    "t": "Estadificación + Radioterapia / Carboplatino / Obs",
                    "s": "Altamente radiosensible · Excelente pronóstico (>98% cura)",
                    "type": "acc"
              },
              "rl": "No Seminoma (AFP y/o b-hCG elevadas)",
              "right": {
                    "t": "Quimioterapia BEP +/- Linfadenectomía Retroperitoneal",
                    "s": "Carcinoma embrionario, teratoma, coriocarcinoma, tumor saco vitelino",
                    "type": "warn"
              }
        }
  ])
  },
  {
    "id": "uro-11",
    "classId": "uro-11",
    "tier": 2,
    "blockNum": 3,
    "blockName": "Uro-Oncología",
    "topicLabel": "13.11",
    "title": "Cáncer Renal: Carcinoma de Células Claras, Tríada Clásica, TAC y Nefrectomía",
    "perfilCode": "4.03.1.022",
    "dx": "Sospecha",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "GES N° 76: Cáncer Renal en personas de 15 años y más",
    "reconstrucciones": "EUNACOM Diciembre 2017 (Q#77) · EUNACOM Julio 2021 (Q#104)",
    "frecuencia": "Alta rentabilidad · hallazgo incidental en ecografía, carcinoma de células claras y nefrectomía",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico y Conducta ante Incidentaloma Renal Sólido",
    "contexto": "El Carcinoma de Células Renales (CCR) es la neoplasia sólida más común del riñón, derivando el 80% de las células del túbulo contorneado proximal (subtipo de células claras). En la era del ultrasonido rutinario, más del 65-70% se detecta de forma totalmente asintomática como un incidentaloma ecográfico. La clásica tríada de Guyon (dolor en flanco, hematuria macroscópica y masa abdominal palpable) solo está presente en menos del 10% de los pacientes y traduce enfermedad localmente avanzada o metastásica. El CCR es característicamente radiorresistente y quimiorresistente; el tratamiento de elección con intención curativa es la resección quirúrgica (nefrectomía parcial nefro-preservadora o nefrectomía radical), cubierta por el GES N° 76.",
    "contentSections": [
      {
        "subhead": "1. Epidemiología, Histopatología y Síndromes Paraneoplásicos",
        "paragraphs": [
          "El <strong>Carcinoma de Células Renales (CCR)</strong> predomina en varones entre los 50 y 70 años. Sus factores de riesgo reconocidos son el tabaquismo, la obesidad, la hipertensión arterial y la enfermedad renal quística adquirida en diálisis. A nivel genético se asocia a mutaciones del gen supresor tumoral <strong>VHL (von Hippel-Lindau)</strong> en el cromosoma 3p.",
          "El 80-85% corresponde a la variante histológica de <strong>Carcinoma de Células Claras</strong> (citoplasma ópticamente vacío por acúmulo de lípidos y glucógeno). Es célebre por provocar <strong>síndromes paraneoplásicos</strong> diversos: hipercalcemia (por secreción de péptido relacionado a PTH o PTHrP), eritrocitosis / policitemia (por sobreproducción ectópica de eritropoyetina), hipertensión (por renina) y el <strong>Síndrome de Stauffer</strong> (disfunción hepática colestásica no metastásica que revierte tras extirpar el tumor renal)."
        ]
      },
      {
        "subhead": "2. Diagnóstico por Imágenes: El Valor del TAC Trifásico",
        "paragraphs": [
          "El examen confirmatorio y de etapificación de elección es el <strong>TAC de abdomen y pelvis trifásico con contraste endovenoso</strong> (fase simple, córtico-medular, nefrográfica y excretora).",
          "El criterio diagnóstico patognomónico de malignidad en una masa renal es el <strong>realce significativo tras la infusión de contraste</strong> (aumento en más de 15 a 20 Unidades Hounsfield en la fase córtico-medular en comparación con la fase simple), lo que refleja la intensa neoangiogénesis tumoral. <em>Regla de oro de examen:</em> <strong>La biopsia percutánea preoperatoria NO está indicada de rutina</strong> ante una masa renal sólida resecable con realce típico, dado que no cambia la conducta quirúrgica y expone a hematomas o falsa negatividad."
        ]
      },
      {
        "subhead": "3. Tratamiento Quirúrgico y Manejo Avanzado (GES N° 76)",
        "paragraphs": [
          "En tumores estadio T1 (<strong>masa renal ≤ 4 cm, e idealmente hasta 7 cm</strong>) la técnica de elección es la <strong>Nefrectomía Parcial</strong> (abierta, laparoscópica o robótica), la cual reseca el tumor con margen de parénquima sano, preservando masa renal funcionante con sobrevida oncológica idéntica a la cirugía radical. En tumores centrales, grandes (> 7 cm) o que infiltran el hilio, se realiza <strong>Nefrectomía Radical</strong> (extirpación en bloque del riñón dentro de la fascia de Gerota).",
          "El CCR es refractario a la quimioterapia convencional y a la radioterapia. En enfermedad metastásica avanzada se utilizan agentes diana antiangiogénicos dirigidos contra VEGF (Sunitinib, Pazopanib, Cabozantinib) o inhibidores de checkpoint inmunológico (Nivolumab + Ipilimumab) (véase Tabla 13.11)."
        ]
      }
    ],
    "table": {
      "title": "Subtipos Histológicos de Cáncer Renal y Síndromes Paraneoplásicos Asociados",
      "headers": [
        "Subtipo Histológico / Síndrome",
        "Frecuencia",
        "Características Histológicas / Clínicas",
        "Conducta Terapéutica"
      ],
      "rows": [
        [
          "Carcinoma de Células Claras",
          "75 - 80%",
          "Células con citoplasma claro rico en lípidos · Mutación gen VHL (3p)",
          "Nefrectomía parcial o radical · Antiangiogénicos (TKI) si es metastásico"
        ],
        [
          "Carcinoma Papilar (Tipo 1 y 2)",
          "10 - 15%",
          "Arquitectura papilar · Mutación oncogén MET · Multifocal en ocasiones",
          "Nefrectomía con preservación nefronal si es posible"
        ],
        [
          "Carcinoma Cromófobo",
          "5%",
          "Células poligonales eosinófilas · Excelente pronóstico oncológico",
          "Cirugía curativa de resección; baja tasa de metástasis"
        ],
        [
          "Síndrome de Stauffer",
          "Paraneoplásico",
          "Fosfatasas alcalinas elevadas, transaminasas alteradas e ictericia sin metástasis",
          "Disfunción hepática reversible que cura al extirpar el tumor renal"
        ],
        [
          "Hipercalcemia Paraneoplásica",
          "Paraneoplásico",
          "Producida por secreción ectópica de péptido PTHrP tumoral",
          "Hidratación + Bifosfonatos + Nefrectomía del primario"
        ]
      ]
    },
    "vignette": "Hombre de 56 años, hipertenso bien controlado y fumador de 15 paquetes/año, consulta por dispepsia y meteorismo. En la ecografía abdominal solicitada para estudio vesicular se pesquisa incidentalmente una lesión nodular sólida, bien circunscrita, de 3.5 cm de diámetro en la corteza del polo superior del riñón izquierdo. El paciente se encuentra totalmente asintomático, sin dolor lumbar ni hematuria. Exámenes: creatinina 0.8 mg/dL, sedimento de orina normal. El TAC trifásico de abdomen demuestra que la masa sólida presenta un realce marcado tras el medio de contraste de 45 Unidades Hounsfield en fase nefrográfica, sin invasión de la vena renal ni adenopatías.",
    "explicacion": "El hallazgo incidental de una masa cortical renal sólida con realce franco (> 15-20 UH) tras medio de contraste en un paciente adulto es altamente sugerente de un Carcinoma de Células Renales T1a. La biopsia percutánea no está indicada por presentar semiología tomográfica inequívoca de neoplasia quirúrgica. Dado que el tamaño tumoral es de 3.5 cm (menor a 4 cm) y de localización periférica, la conducta terapéutica curativa de elección es la nefrectomía parcial laparoscópica nefro-preservadora, garantizada por el GES N° 76.",
    "keyPoints": [
      "Más del 65% de los tumores renales se pesquisan como incidentalomas asintomáticos en ecografía o TAC.",
      "La clásica tríada de Guyon (dolor lumbar, hematuria y masa palpable) denota enfermedad avanzada (< 10% de los casos).",
      "El Carcinoma de Células Claras es el subtipo más frecuente (80%) y se asocia a la pérdida del gen VHL.",
      "El criterio diagnóstico tomográfico de malignidad es el realce significativo tras contraste (> 15-20 UH).",
      "La biopsia percutánea NO se realiza de rutina ante una masa renal resecable típica.",
      "Para tumores T1 (≤ 4 cm, hasta 7 cm) la nefrectomía parcial es el estándar de oro para preservar masa renal funcionante."
    ],
    "questions": [
      {
        "stem": "Mujer de 53 años consulta por control ginecológico. En la ecografía pelviana y abdominal de rutina se describe en el riñón derecho una lesión sólida hiperecogénica exofítica de 3.2 cm en el polo inferior. La paciente está asintomática. ¿Cuál es el examen confirmatorio de elección para caracterizar la lesión y planificar la conducta?",
        "options": [
          {
            "id": "A",
            "text": "Biopsia renal percutánea con aguja de corte bajo ecografía"
          },
          {
            "id": "B",
            "text": "TAC de abdomen y pelvis trifásico con contraste endovenoso"
          },
          {
            "id": "C",
            "text": "Resonancia magnética con difusión sin contraste"
          },
          {
            "id": "D",
            "text": "Cistoscopía diagnóstica con citología de orina de lavado piélico"
          },
          {
            "id": "E",
            "text": "Cintigrama renal con DMSA para evaluar función relativa"
          }
        ],
        "correcta": "B",
        "explicacion": "Ante el hallazgo ecográfico de una masa renal sólida en un paciente adulto, el estudio diagnóstico de elección estándar es la <strong>Tomografía Computarizada de abdomen y pelvis multifásica (trifásica) con contraste endovenoso</strong>. Este examen permite confirmar si la lesión es sólida o quística, evaluar el realce tras el contraste (criterio cardinal de carcinoma de células renales si aumenta > 15-20 UH), definir la anatomía quirúrgica vascular y descartar invasión de la vena renal o ganglios retroperitoneales. La biopsia percutánea preoperatoria no está indicada de rutina.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.03.1.022"
      },
      {
        "stem": "Hombre de 60 años con diagnóstico tomográfico de carcinoma renal de células claras de 3.8 cm en el tercio medio exofítico del riñón derecho, sin metástasis. Presenta creatinina normal y no tiene comorbilidades graves. ¿Cuál es el tratamiento curativo de elección recomendado actualmente por las guías urológicas y el GES N° 76?",
        "options": [
          {
            "id": "A",
            "text": "Nefrectomía radical derecha con vaciamiento ganglionar extenso"
          },
          {
            "id": "B",
            "text": "Nefrectomía parcial derecha nefro-preservadora"
          },
          {
            "id": "C",
            "text": "Radioterapia estereotáctica corporal ablativa (SBRT)"
          },
          {
            "id": "D",
            "text": "Terapia blanco con sunitinib oral durante 6 meses"
          },
          {
            "id": "E",
            "text": "Embolización arterial renal percutánea curativa"
          }
        ],
        "correcta": "B",
        "explicacion": "Para tumores renales sólidos en estadio clínico T1a (≤ 4 cm de diámetro) localizados, la <strong>Nefrectomía Parcial</strong> (resección del tumor con un margen libre de parénquima sano) es el tratamiento curativo de referencia de primera elección. Ofrece tasas de sobrevida libre de enfermedad y sobrevida global idénticas a la nefrectomía radical completa, pero preserva significativamente mayor masa nefronal funcionante, reduciendo a largo plazo el riesgo de enfermedad renal crónica, diálisis y eventos cardiovasculares adversos.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.03.1.022"
      }
    ],
    "diagram": flow("Algoritmo Diagnóstico y Conducta ante Incidentaloma Renal Sólido", [
        {
              "t": "Hallazgo Incidental de Masa Renal Sólida en Ecografía o TAC",
              "s": "Masa asintomática descubierta en chequeo o dolor lumbar atípico",
              "type": "warn"
        },
        {
              "t": "TAC de Abdomen y Pelvis Trifásico con Contraste EV",
              "s": "Evaluar realce en fase córtico-medular (> 15-20 Unidades Hounsfield)",
              "type": "dec"
        },
        {
              "k": "split",
              "q": "¿Masa Sólida Renal con Realce al Contraste (Sospecha de CCR)?",
              "ll": "Masa < 4 cm (o hasta 7 cm) exofítica",
              "left": {
                    "t": "Nefrectomía Parcial (Nefro-preservación)",
                    "s": "Preserva función renal a largo plazo · Abordaje laparoscópico o robótico",
                    "type": "acc"
              },
              "rl": "Masa > 7 cm o invasión hiliar / trombo venoso",
              "right": {
                    "t": "Nefrectomía Radical (Fascia de Gerota)",
                    "s": "Extirpación completa de riñón, grasa perirrenal y glándula suprarrenal",
                    "type": "dec"
              }
        }
  ])
  },
  {
    "id": "uro-12",
    "classId": "uro-12",
    "tier": 2,
    "blockNum": 3,
    "blockName": "Uro-Oncología",
    "topicLabel": "13.12",
    "title": "Cáncer de Vejiga: Hematuria Macroscópica Silente, Cistoscopía & RTUV",
    "perfilCode": "4.03.1.023",
    "dx": "Sospecha",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "GES N° 69: Cáncer Vesical en personas de 15 años y más",
    "reconstrucciones": "EUNACOM Julio 2018 (Q#49) · EUNACOM Diciembre 2022 (Q#61)",
    "frecuencia": "Alta rentabilidad · hematuria indolora en fumadores >50 años, cistoscopía diagnóstica y RTUV",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico del Paciente con Hematuria Macroscópica Indolora",
    "contexto": "El cáncer de vejiga es la segunda neoplasia urológica más prevalente tras el cáncer de próstata. El principal factor de riesgo atribuible en más del 50% de los casos es el consumo de tabaco (las aminas aromáticas y nitrosaminas del humo de cigarrillo se eliminan activamente por el riñón y permanecen almacenadas en la vejiga irritando el urotelio). La presentación clásica que debe grabarse en la memoria es la hematuria macroscópica monosintomática, indolora y con coágulos en un adulto mayor fumador. El examen diagnóstico de elección definitivo es la Cistoscopía con Resección Transuretral de Vejiga (RTUV), la cual permite no solo extirpar el tumor sino enviar muestra de la capa muscular propia para estratificar el pronóstico bajo el GES N° 69.",
    "contentSections": [
      {
        "subhead": "1. Factores de Riesgo y Carcinoma Urotelial",
        "paragraphs": [
          "El <strong>Cáncer de Vejiga</strong> se origina en más del 90-95% de los casos a partir del epitelio de transición, denominándose <strong>Carcinoma Urotelial</strong> (o de células transicionales). El <strong>tabaquismo</strong> es el factor etiológico más importante, multiplicando el riesgo por 3 a 4 veces. Otras causas reconocidas son la exposición ocupacional a tinturas industriales, caucho y pinturas (aminas aromáticas como la benzidina), el uso previo de ciclofosfamida y la infección crónica por Schistosoma haematobium (asociada a carcinoma escamoso vesical).",
          "El síntoma inicial en más del 85% de los pacientes es la <strong>hematuria macroscópica total, indolora, intermitente y con coágulos</strong>. Con menor frecuencia puede debutar con síntomas de irritación vesical refractarios a antibióticos (polaquiuria, tenesmo y urgencia miccional), cuadro típico del <strong>Carcinoma in Situ (CIS)</strong> vesical."
        ]
      },
      {
        "subhead": "2. Diagnóstico: Cistoscopía y Resección Transuretral (RTUV)",
        "paragraphs": [
          "Todo paciente con hematuria macroscópica sin causa infecciosa evidente debe ser sometido a un estudio sistemático que comprende: sedimento de orina con urocultivo, ecografía renal y vesical con vejiga llena, <strong>Uro-TAC (TAC con fase de excreción)</strong> para evaluar todo el tracto urotelial superior (cálices y uréteres) y <strong>Cistoscopía diagnóstica</strong>.",
          "La <strong>Cistoscopía</strong> visualiza directamente la mucosa vesical identificando tumores papilares vegetantes (en forma de coliflor o frondas de helecho). El procedimiento estándar confirmatorio y terapéutico inicial es la <strong>Resección Transuretral de Vejiga (RTUV)</strong>: se debe resecar completamente la lesión hasta llegar a la capa muscular (detrusor). Es mandatorio que el patólogo certifique la presencia de músculo detrusor en la biopsia para definir la profundidad de invasión."
        ]
      },
      {
        "subhead": "3. Diferenciación Crítica: No Músculo Invasivo vs Músculo Invasivo",
        "paragraphs": [
          "La biopsia de la RTUV divide al cáncer vesical en dos entidades biológicas completamente distintas:",
          "<strong>Cáncer de Vejiga No Músculo Invasivo (CVNMI) (75% de los casos):</strong> Comprende los estadios Ta (no invasivo papilar), T1 (invade lámina propia pero NO el músculo) y Tis (Carcinoma in Situ plano de alto grado). Se tratan con RTUV completa seguida de <strong>instilaciones intravesicales de BCG (Bacilo de Calmette-Guérin)</strong> o quimioterapia tópica (Mitomicina C) para reducir la alta tasa de recidiva.",
          "<strong>Cáncer de Vejiga Músculo Invasivo (CVMI) (25% de los casos):</strong> Estadio ≥ T2 (infiltra la capa muscular propia del detrusor). Requiere tratamiento agresivo radical: <strong>Quimioterapia neoadyuvante con cisplatino seguida de Cistectomía Radical</strong> (extirpación de vejiga, próstata y vesículas seminales en el hombre; vejiga, útero, ovarios y pared vaginal en la mujer) con derivación urinaria tipo conducto ileal de Bricker o neovejiga ortotópica (véase Tabla 13.12)."
        ]
      }
    ],
    "table": {
      "title": "Clasificación de Cáncer de Vejiga: No Músculo Invasivo vs Músculo Invasivo",
      "headers": [
        "Característica",
        "No Músculo Invasivo (CVNMI)",
        "Músculo Invasivo (CVMI)"
      ],
      "rows": [
        [
          "Estadios TNM",
          "Ta (mucosa), Tis (CIS plano), T1 (lámina propia)",
          "T2a-T2b (muscular propia), T3 (grasa perivesical), T4 (órganos vecinos)"
        ],
        [
          "Frecuencia al diagnóstico",
          "Aproximadamente el 75%",
          "Aproximadamente el 25%"
        ],
        [
          "Aspecto Cistoscópico",
          "Papilar, vegetante, digitiforme (frondas de helecho)",
          "Sólido, sésil, ulcerado, invasor en profundidad"
        ],
        [
          "Tratamiento Inicial de Elección",
          "Resección Transuretral de Vejiga (RTUV) completa",
          "Quimioterapia neoadyuvante con Cisplatino + Cistectomía Radical"
        ],
        [
          "Tratamiento Adyuvante",
          "Instilaciones intravesicales con BCG o Mitomicina C",
          "Linfadenectomía pélvica extendida + Derivación urinaria (Bricker)"
        ],
        [
          "Riesgo Principal",
          "Alta tasa de recidiva intravesical (50-70%)",
          "Metástasis ganglionares y hematógenas rápidas; letalidad elevada"
        ]
      ]
    },
    "vignette": "Hombre de 65 años, fumador activo de 30 cigarrillos al día durante 40 años, consulta por haber presentado hace 5 días un episodio de emisión de orina francamente roja con coágulos alargados vermiformes durante toda la micción. El episodio fue completamente indoloro y autolimitado, cediendo a las 24 horas. Niega disuria, fiebre, baja de peso o dolor lumbar. Al examen físico el abdomen es blando y depresible, sin masas palpables y tacto rectal con próstata lisa normal. El sedimento de orina revela hematuria microscópica persistente de 40 hematíes por campo isomórficos, sin proteinuria ni leucocitos.",
    "explicacion": "La presencia de hematuria macroscópica indolora y con coágulos en un paciente adulto mayor fumador crónico constituye una bandera roja oncológica clásica de sospecha de neoplasia del tracto urotelial (Cáncer de Vejiga) hasta demostrar lo contrario. La conducta obligatoria e inaplazable es derivar al especialista en urología bajo la cobertura del GES N° 69 para realizar estudio completo que incluye Uro-TAC y Cistoscopía diagnóstica con eventual resección transuretral de la lesión vesical.",
    "keyPoints": [
      "La hematuria macroscópica indolora en fumadores > 50 años es cáncer vesical hasta demostrar lo contrario.",
      "El tabaquismo es el factor etiológico más importante de cáncer de vejiga (carcinoma urotelial).",
      "La Cistoscopía es el examen diagnóstico confirmatorio directo de referencia.",
      "La Resección Transuretral de Vejiga (RTUV) es el procedimiento inicial diagnóstico y terapéutico.",
      "La presencia de músculo detrusor en la biopsia es obligatoria para discernir entre no invasivo e invasivo.",
      "Los tumores no músculo invasivos (Ta, T1) se tratan con RTUV e instilaciones intravesicales con BCG.",
      "Los tumores músculo invasivos (≥ T2) requieren Quimioterapia neoadyuvante y Cistectomía Radical (GES N° 69)."
    ],
    "questions": [
      {
        "stem": "Hombre de 67 años, fumador inveterado, consulta por dos episodios de orina con sangre roja y coágulos en la última semana, sin ningún tipo de dolor ni molestia miccional. El examen físico general y urológico no muestra alteraciones. El sedimento descarta infección urinaria. ¿Cuál es el examen diagnóstico de elección para visualizar directamente la lesión y confirmar la sospecha de cáncer de vejiga?",
        "options": [
          {
            "id": "A",
            "text": "Urografía retrógrada con placa postmiccional"
          },
          {
            "id": "B",
            "text": "Cistoscopía con eventual resección transuretral de la lesión"
          },
          {
            "id": "C",
            "text": "Antígeno prostático específico y ecografía prostática transrectal"
          },
          {
            "id": "D",
            "text": "Resonancia magnética pélvica simple"
          },
          {
            "id": "E",
            "text": "Citología urinaria seriada como método diagnóstico exclusivo"
          }
        ],
        "correcta": "B",
        "explicacion": "En un paciente con alta sospecha de cáncer de vejiga por hematuria macroscópica indolora y antecedente de tabaquismo severo, la <strong>Cistoscopía</strong> es el estándar de oro diagnóstico indiscutido. Permite la inspección visual endoscópica directa de toda la mucosa vesical, cuello y uretra, localizar el número, tamaño y morfología de las lesiones papilares y proceder en el mismo acto quirúrgico a la Resección Transuretral de Vejiga (RTUV) diagnóstica y terapéutica. La citología de orina es complementaria pero no reemplaza la cistoscopía.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.03.1.023"
      },
      {
        "stem": "Tras realizar una resección transuretral de vejiga (RTUV) de una masa vegetante en la pared lateral vesical en un paciente de 62 años, el patólogo informa: 'Carcinoma urotelial de alto grado que infiltra la lámina propia pero respeta la capa muscular propia; se identifican haces indemnes de músculo detrusor en la muestra (Estadio T1)'. ¿Cuál es el tratamiento adyuvante de elección para reducir el riesgo de recidiva y progresión?",
        "options": [
          {
            "id": "A",
            "text": "Cistectomía radical inmediata con conducto ileal de Bricker"
          },
          {
            "id": "B",
            "text": "Instilaciones intravesicales con BCG (Bacilo de Calmette-Guérin)"
          },
          {
            "id": "C",
            "text": "Radioterapia externa pélvica conformacional"
          },
          {
            "id": "D",
            "text": "Quimioterapia sistémica con esquema MVAC por 6 ciclos"
          },
          {
            "id": "E",
            "text": "Observación sin terapia adicional con control cistoscópico en 5 años"
          }
        ],
        "correcta": "B",
        "explicacion": "El paciente presenta un Cáncer de Vejiga No Músculo Invasivo (CVNMI) de alto riesgo estadio T1 (invasión de lámina propia pero sin penetración a la capa muscular detrusor). Tras una RTUV completa, el tratamiento adyuvante estándar de primera línea para prevenir la alta tasa de recurrencia y progresión a cáncer invasivo son las <strong>instilaciones intravesicales con BCG (Bacilo de Calmette-Guérin)</strong> en esquema de inducción semanal durante 6 semanas seguido de mantención por 1 a 3 años. La cistectomía radical se reserva para falla de BCG o invasión muscular (≥ T2).",
        "recTag": "Banco Oficial AEE · Perfil V3 4.03.1.023"
      }
    ],
    "diagram": flow("Algoritmo Diagnóstico del Paciente con Hematuria Macroscópica Indolora", [
        {
              "t": "Hematuria Macroscópica Indolora en Paciente > 50 Años o Fumador",
              "s": "Orina roja franca con coágulos · Sin disuria · Cáncer urotelial hasta demostrar lo contrario",
              "type": "warn"
        },
        {
              "t": "Ecografía Vesicorrenal + Uro-TAC con Fase Excretora",
              "s": "Evaluar masa vegetante vesical y descartar tumor del tracto urinario superior",
              "type": "dec"
        },
        {
              "k": "split",
              "q": "¿Confirmación Diagnóstica y Terapéutica por Vía Endoscópica?",
              "ll": "Cistoscopía con Resección Transuretral de Vejiga (RTUV)",
              "left": {
                    "t": "RTUV Completa con Muestra de Músculo Detrusor",
                    "s": "Resección de la lesión exofítica · Fundamental para definir estadio T",
                    "type": "acc"
              },
              "rl": "Clasificación Histopatológica por Invasión Muscular",
              "right": {
                    "t": "No Músculo Invasivo vs Músculo Invasivo",
                    "s": "Ta/T1: Instilaciones BCG · ≥ T2: Cistectomía Radical + Quimioterapia",
                    "type": "dec"
              }
        }
  ])
  },
  {
    "id": "uro-13",
    "classId": "uro-13",
    "tier": 2,
    "blockNum": 4,
    "blockName": "Infecciones Urológicas, Quistes & Hematuria",
    "topicLabel": "13.13",
    "title": "Prostatitis Aguda y Crónica: Peligro de Sepsis, Antibióticos Prolongados & Prostatodinia",
    "perfilCode": "1.11.1.006",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "Sin garantía GES específica · Cobertura hospitalaria de urgencia en bacteriemia",
    "reconstrucciones": "EUNACOM Julio 2017 (Q#88) · EUNACOM Diciembre 2020 (Q#31)",
    "frecuencia": "Alta rentabilidad · contraindicación absoluta del masaje prostático y antibióticos prolongados",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico y Terapéutico de la Prostatitis Aguda y Crónica",
    "contexto": "La prostatitis bacteriana aguda es una infección parenquimatosa invasiva grave. El estroma y acinos prostáticos están severamente inflamados y congestivos; en este estado, realizar un masaje prostático para obtener secreción está terminantemente contraindicado debido a que fuerza la translocación bacteriana masiva hacia los plexos venosos prostáticos perivesicales, desencadenando bacteriemia fulminante y shock séptico. Otro punto crucial de examen es la farmacocinética: la barrera hemato-prostática lipofílica restringe la penetración de la mayoría de los betalactámicos, siendo las fluoroquinolonas (ciprofloxacino) y el cotrimoxazol los antibióticos de elección por su alta liposolubilidad, requiriendo esquemas prolongados de 3 a 4 semanas en fase aguda y 6 a 12 semanas en fase crónica.",
    "contentSections": [
      {
        "subhead": "1. Clasificación NIH de los Síndromes de Prostatitis",
        "paragraphs": [
          "El National Institutes of Health (NIH) clasifica los síndromes prostáticos en 4 categorías: <strong>Categoría I: Prostatitis Bacteriana Aguda</strong> (infección aguda grave con compromiso sistémico y urocultivo positivo); <strong>Categoría II: Prostatitis Bacteriana Crónica</strong> (ITUs recurrentes por el mismo germen con cultivo de secreción prostática positivo); <strong>Categoría III: Síndrome de Dolor Pélvico Crónico (SDPC / Prostatodinia)</strong> (dolor perineal crónico > 3 meses con urocultivos estériles, subdividido en IIIa inflamatorio y IIIb no inflamatorio); y <strong>Categoría IV: Prostatitis Inflamatoria Asintomática</strong> (hallazgo histológico incidental en biopsia o semen).",
          "El agente etiológico principal en las categorías infecciosas (I y II) es <strong>Escherichia coli (75-80%)</strong>, seguido de otras enterobacterias como Klebsiella, Proteus mirabilis y Pseudomonas aeruginosa."
        ]
      },
      {
        "subhead": "2. Prostatitis Aguda: Clínica, Diagnóstico y Contraindicaciones",
        "paragraphs": [
          "El cuadro agudo debuta bruscamente con <strong>fiebre alta en agujas, calofríos intensos, quebrantamiento general, dolor lumbosacro y perineal severo (dolor punzante al sentarse)</strong>, disuria, polaquiuria y dificultad miccional.",
          "Al <strong>Tacto Rectal</strong> la próstata se palpa aumentada de tamaño, intensamente congestiva, caliente al tacto y <strong>exquisitamente dolorosa</strong>. <em>Regla de oro absoluta de examen:</em> <strong>Está formalmente contraindicado el masaje prostático</strong> y la palpación enérgica por el riesgo de inducir bacteriemia y shock séptico. Si el paciente presenta retención urinaria, el cateterismo uretral con sonda Foley es sumamente doloroso y puede lacerar la glándula; la conducta de elección para evacuar la orina es la <strong>cistostomía suprapúbica por punción</strong>."
        ]
      },
      {
        "subhead": "3. Farmacoterapia Antimicrobiana Prolongada",
        "paragraphs": [
          "El tratamiento requiere fármacos de elevada biodisponibilidad y solubilidad lipídica que atraviesen el epitelio acinar prostático:",
          "En cuadros leves a moderados ambulatorios: <strong>Ciprofloxacino 500 mg cada 12 horas VO</strong> o Levofloxacino 500 mg/día VO o Cotrimoxazol forte (160/800 mg) cada 12 horas VO. La duración obligatoria es de <strong>2 a 4 semanas completas</strong> para erradicar los focos bacterianos intraacinares y prevenir el paso a cronicidad.",
          "En pacientes con signos de sepsis, vómitos o comorbilidades: hospitalización inmediata para reanimación hemodinámica y antibioticoterapia endovenosa con <strong>Ceftriaxona (2 g/día EV) asociada o no a Gentamicina</strong> o Ampicilina/Sulbactam, rotando a vía oral tras 48 horas afebril hasta completar 4 semanas (véase Tabla 13.13)."
        ]
      }
    ],
    "table": {
      "title": "Clasificación NIH de los Síndromes de Prostatitis y Manejo Terapéutico",
      "headers": [
        "Categoría NIH",
        "Denominación Clínica",
        "Hallazgos en Cultivo / Microscopía",
        "Tratamiento de Elección"
      ],
      "rows": [
        [
          "Categoría I",
          "Prostatitis Bacteriana Aguda",
          "Urocultivo positivo para uropatógenos entéricos (E. coli)",
          "Ciprofloxacino oral x 3-4 semanas o Ceftriaxona EV si sepsis · Masaje PROHIBIDO"
        ],
        [
          "Categoría II",
          "Prostatitis Bacteriana Crónica",
          "ITUs recurrentes por el mismo clon bacteriano · Test de Meares-Stamey (+)",
          "Fluoroquinolonas orales prolongadas por 6 a 12 semanas (Ciprofloxacino)"
        ],
        [
          "Categoría IIIa",
          "SDPC Inflamatorio (No bacteriano)",
          "Leucocitos en secreción prostática pero cultivos negativos estériles",
          "Alfa-1 bloqueantes (Tamsulosina) + AINEs + Ensayo corto con antibiótico"
        ],
        [
          "Categoría IIIb",
          "SDPC No Inflamatorio (Prostatodinia)",
          "Sin leucocitos y sin bacterias; dolor miofascial perineal crónico",
          "Neuromoduladores (Pregabalina), fisioterapia del piso pélvico y psicoterapia"
        ],
        [
          "Categoría IV",
          "Prostatitis Asintomática",
          "Leucocitos en biopsia prostática o semen sin clínica alguna",
          "No requiere tratamiento médico (hallazgo inocuo)"
        ]
      ]
    },
    "vignette": "Hombre de 46 años, sin antecedentes de patología urológica previa, consulta en urgencias por fiebre de 39.3 °C con calofríos intensos, dolor lumbo-sacro y una sensación muy molesta de 'presión y dolor punzante en el periné al sentarse', asociado a disuria ardiente y disminución del chorro miccional de 24 horas de evolución. Al examen físico el abdomen es blando y no hay globo vesical. Al realizar un tacto rectal sumamente suave con el dedo enguantado, la próstata se palpa discretamente aumentada de volumen, muy caliente al tacto y despierta un dolor exquisito e insoportable que hace gritar al paciente.",
    "explicacion": "El cuadro clínico y el tacto rectal son concluyentes de una Prostatitis Bacteriana Aguda (Categoría I del NIH). La conducta médica obligatoria es suspender de inmediato el tacto rectal y omitir cualquier maniobra de masaje prostático debido al riesgo inminente de provocar bacteriemia y shock séptico por translocación de enterobacterias a los senos venosos periprostáticos. Se debe tomar urocultivo e iniciar de inmediato tratamiento antibiótico empírico de alta penetración tisular con una fluoroquinolona (Ciprofloxacino 500 mg cada 12 horas vía oral o Levofloxacino 500 mg/día) manteniéndolo de forma estricta durante 28 días (4 semanas).",
    "keyPoints": [
      "La prostatitis bacteriana aguda cursa con fiebre alta, dolor perineal al sentarse y disuria intensa.",
      "Al tacto rectal la próstata está caliente, turgente y exquisitamente dolorosa.",
      "El MASAJE PROSTÁTICO está formalmente contraindicado en fase aguda por riesgo de bacteriemia y sepsis.",
      "Si se produce retención urinaria en prostatitis aguda, realizar CISTOSTOMÍA suprapúbica (no sonda Foley).",
      "Los antibióticos de elección son las Fluoroquinolonas (Ciprofloxacino) y Cotrimoxazol por su liposolubilidad.",
      "La duración del tratamiento en prostatitis aguda debe ser de al menos 3 a 4 semanas para evitar cronicidad."
    ],
    "questions": [
      {
        "stem": "Hombre de 42 años consulta por cuadro de 24 horas de fiebre de 39.5 °C, calofríos, dolor perineal sordo que empeora al sentarse y disuria. Al tacto rectal suave se palpa una próstata caliente, tumefacta y extremadamente dolorosa. ¿Cuál de las siguientes acciones está FORMALMENTE CONTRAINDICADA en el manejo de este paciente?",
        "options": [
          {
            "id": "A",
            "text": "Tomar urocultivo por chorro medio antes de iniciar antibióticos"
          },
          {
            "id": "B",
            "text": "Realizar masaje prostático vigoroso para obtener secreción uretral diagnóstica"
          },
          {
            "id": "C",
            "text": "Administrar antipiréticos y AINEs para el alivio del dolor"
          },
          {
            "id": "D",
            "text": "Indicar ciprofloxacino oral por 4 semanas completas"
          },
          {
            "id": "E",
            "text": "Realizar cistostomía suprapúbica si presenta retención aguda de orina"
          }
        ],
        "correcta": "B",
        "explicacion": "En la prostatitis bacteriana aguda, el <strong>masaje prostático está formalmente contraindicado</strong>. La compresión manual de una glándula prostática agudamente infectada y microabscedada puede provocar la diseminación bacteriana masiva a través del plexo venoso periprostático hacia la circulación sistémica, precipitando una bacteriemia fulminante y shock séptico. Además, el procedimiento es extraordinariamente doloroso. El diagnóstico se confirma con la clínica típica y urocultivo simple de orina emitida. Perla. El test de Stamey con masaje se reserva únicamente para la prostatitis crónica en frío.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.11.1.006"
      },
      {
        "stem": "Varón de 50 años con diagnóstico clínico de prostatitis bacteriana aguda que se encuentra hemodinámicamente estable y tolerando adecuadamente la vía oral. Se inicia tratamiento con ciprofloxacino oral 500 mg cada 12 horas. ¿Cuál es la duración mínima recomendada de este tratamiento antibiótico para asegurar la erradicación bacteriana y prevenir la prostatitis crónica?",
        "options": [
          {
            "id": "A",
            "text": "3 a 5 días"
          },
          {
            "id": "B",
            "text": "7 a 10 días"
          },
          {
            "id": "C",
            "text": "21 a 28 días (3 a 4 semanas)"
          },
          {
            "id": "D",
            "text": "6 meses ininterrumpidos"
          },
          {
            "id": "E",
            "text": "Hasta 48 horas después de que ceda la fiebre"
          }
        ],
        "correcta": "C",
        "explicacion": "A diferencia de las cistitis o pielonefritis no complicadas que requieren cursos antibióticos de 3 a 7 días, la <strong>prostatitis bacteriana aguda requiere esquemas prolongados de 3 a 4 semanas (21 a 28 días)</strong>. Esto se debe a que la barrera hemato-prostática y el estroma fibromuscular dificultan la penetración y concentración tisular del fármaco una vez que cede la inflamación aguda inicial. Los tratamientos breves conllevan una altísima tasa de recidiva, persistencia de microfocos bacterianos y evolución tórpida hacia una prostatitis bacteriana crónica de muy difícil erradicación.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.11.1.006"
      }
    ],
    "diagram": flow("Algoritmo Diagnóstico y Terapéutico de la Prostatitis Aguda y Crónica", [
        {
              "t": "Varón con Fiebre Alta, Calofríos, Disuria y Dolor Perineal",
              "s": "Dolor 'al sentarse' · Sensación de pesadez perineal · Malestar general severo",
              "type": "warn"
        },
        {
              "t": "Tacto Rectal Suave: Próstata Caliente, Tensa y Exquisitamente Dolorosa",
              "s": "PROHIBIDO el masaje prostático (riesgo de bacteriemia y shock séptico)",
              "type": "warn"
        },
        {
              "k": "split",
              "q": "¿Paciente en Sepsis o con Retención Urinaria Aguda?",
              "ll": "Sí: Compromiso hemodinámico o globo vesical",
              "left": {
                    "t": "Hospitalización EV + Cistostomía Suprapúbica",
                    "s": "Ceftriaxona + Aminoglucósido EV · Evitar sonda Foley uretral traumática",
                    "type": "warn"
              },
              "rl": "No: Paciente estable tolerando vía oral",
              "right": {
                    "t": "Tratamiento Ambulatorio con Fluoroquinolonas",
                    "s": "Ciprofloxacino 500 mg c/12h VO o Cotrimoxazol forte por 3 a 4 semanas",
                    "type": "acc"
              }
        }
  ])
  },
  {
    "id": "uro-14",
    "classId": "uro-14",
    "tier": 2,
    "blockNum": 4,
    "blockName": "Infecciones Urológicas, Quistes & Hematuria",
    "topicLabel": "13.14",
    "title": "Quistes Renales Simples (Bosniak) & Riñón Poliquístico Autosómico Dominante",
    "perfilCode": "1.09.1.001",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Completo",
    "ges": "Sin garantía GES para quistes simples · GES N° 7 para Enfermedad Renal Crónica en PQRAD",
    "reconstrucciones": "EUNACOM Diciembre 2015 (Q#39) · EUNACOM Julio 2020 (Q#72)",
    "frecuencia": "Alta rentabilidad · clasificación de Bosniak, quistes simples vs cáncer quístico y aneurismas de Berry",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico de Quistes Renales y Clasificación de Bosniak",
    "contexto": "Los quistes renales simples son extraordinariamente comunes y benignos, encontrándose en más del 50% de las personas mayores de 50 años. Un quiste simple ecográfico típico (anecoico, redondo, de pared fina imperceptible y con refuerzo acústico posterior) no requiere ninguna intervención ni control tomográfico. La clasificación tomográfica de Bosniak (I a IV) permite distinguir las lesiones benignas que no requieren cirugía (Bosniak I y II) de aquellas con alta sospecha de carcinoma renal quístico (Bosniak III y IV: tabiques gruesos, realce al contraste o nódulos sólidos, con riesgo de malignidad > 50-90%). En contraste, la Poliquistosis Renal Autosómica Dominante (PQRAD, genes PKD1 y PKD2) es una enfermedad hereditaria sistémica que cursa con nefromegalia bilateral masiva, HTA de difícil control, progresión a insuficiencia renal terminal y riesgo de muerte por rotura de aneurismas intracraneales del polígono de Willis.",
    "contentSections": [
      {
        "subhead": "1. Quistes Renales Simples y Criterios Ecográficos de Benignidad",
        "paragraphs": [
          "Los <strong>quistes corticales simples</strong> son dilataciones adquiridas de los túbulos colectores secundarios al envejecimiento tisular. Son casi invariablemente asintomáticos y carecen de potencial maligno.",
          "Los <strong>criterios ecográficos de quiste simple benigno (Bosniak I)</strong> son estrictos: (1) Contenido completamente <strong>anecogénico</strong> (sin ecos internos ni detritus); (2) <strong>Pared delgada e imperceptible</strong>, sin engrosamientos nodulares; (3) Forma redondeada u oval con interfase nítida con el parénquima; y (4) <strong>Refuerzo acústico posterior</strong> nítido. Si una lesión quística cumple todos estos criterios ecográficos, no se requieren exámenes adicionales ni seguimiento, debiendo tranquilizarse al paciente."
        ]
      },
      {
        "subhead": "2. Clasificación de Bosniak por TAC de Masas Quísticas Renales",
        "paragraphs": [
          "Cuando un quiste en ecografía presenta tabiques internos, contenido denso o calcificaciones, se clasifica como <strong>quiste complejo</strong> y requiere evaluación mediante <strong>TAC con contraste endovenoso</strong> según la escala de <strong>Bosniak</strong>:",
          "<strong>Bosniak I y II:</strong> Quistes simples y mínimamente complicados (tabiques filiformes < 1 mm, microcalcificaciones, quistes densos hiperatenuantes < 3 cm que no realzan). Son benignos (malignidad 0%); no requieren seguimiento.",
          "<strong>Bosniak IIF (Follow-up):</strong> Múltiples tabiques finos, calcificaciones nodulares o quistes hiperdensos > 3 cm sin realce medible. Requieren seguimiento tomográfico seriado a los 6 y 12 meses (malignidad ~5%).",
          "<strong>Bosniak III y IV:</strong> Quistes complicados con tabiques gruesos irregulares con realce al contraste (Bosniak III, malignidad 50-60%) o masas con componentes nodulares sólidos francos con realce (Bosniak IV, malignidad > 85-90%). Requieren <strong>exploración quirúrgica y resección (nefrectomía parcial o radical)</strong>."
        ]
      },
      {
        "subhead": "3. Poliquistosis Renal Autosómica Dominante (PQRAD)",
        "paragraphs": [
          "La <strong>PQRAD</strong> es la enfermedad renal hereditaria más frecuente (1 en 400-1.000 nacidos vivos), con patrón autosómico dominante y penetrancia del 100%. Se debe a mutaciones en el gen <strong>PKD1 (cromosoma 16, 85% de los casos, curso más severo)</strong> o <strong>PKD2 (cromosoma 4, 15%, inicio más tardío)</strong>, que codifican para las proteínas policistina-1 y 2 en el cilio primario tubular.",
          "Clínicamente se presenta entre la 3ª y 4ª década con <strong>hipertensión arterial precoz</strong>, dolor lumbar sordo bilateral, micro o macrohematuria (por rotura de quistes) y <strong>grandes masas renales bilaterales palpables</strong> (nefromegalia que puede alcanzar varios kilogramos).",
          "<em>Complicaciones extrarrenales vitales:</em> Quistes hepáticos (poliquistosis hepática en > 70%), diverticulosis colónica, prolapso de válvula mitral y la más temida: <strong>Aneurismas saculares intracraneales en el polígono de Willis (aneurismas de Berry, 8-10%)</strong>, cuya rotura causa hemorragia subaracnoidea cataclísmica en adultos jóvenes (véase Tabla 13.14)."
        ]
      }
    ],
    "table": {
      "title": "Clasificación Tomográfica de Bosniak para Masas Renales Quísticas",
      "headers": [
        "Categoría Bosniak",
        "Hallazgos en TAC con Contraste EV",
        "Riesgo de Malignidad",
        "Conducta Clínica Normada"
      ],
      "rows": [
        [
          "Bosniak I",
          "Quiste simple benigno: pared fina como papel, densidad agua, sin tabiques ni realce",
          "0% (Benigno)",
          "Tranquilizar al paciente · No requiere seguimiento ni imágenes"
        ],
        [
          "Bosniak II",
          "Tabiques delgados (< 1 mm), calcificaciones finas, quiste hiperdenso < 3 cm sin realce",
          "0% (Benigno)",
          "Benigno · No requiere seguimiento tomográfico"
        ],
        [
          "Bosniak IIF",
          "Múltiples tabiques finos, leve engrosamiento parietal, hiperdenso > 3 cm sin realce",
          "Aproximadamente 5%",
          "Seguimiento con TAC contrastado a los 6 y 12 meses por 5 años"
        ],
        [
          "Bosniak III",
          "Tabiques engrosados e irregulares con realce contrastado francamente medible",
          "50 a 60%",
          "Quirúrgico: Nefrectomía parcial nefro-preservadora o radical"
        ],
        [
          "Bosniak IV",
          "Pared o tabiques con nódulos sólidos de partes blandas con realce marcado",
          "85 a 100%",
          "Quirúrgico: Resección oncológica (Carcinoma renal quístico)"
        ]
      ]
    },
    "vignette": "Hombre de 38 años, hijo de padre fallecido a los 52 años en hemodiálisis por enfermedad renal, consulta por dolor sordo bilateral en los flancos y sensación de pesadez abdominal de varios meses de evolución. En el examen físico destaca PA elevada de 160/100 mmHg; al palpar el abdomen se pesquisan fácilmente masas renales lobuladas voluminosas e indoloras que descienden en ambos flancos durante la inspiración. La ecografía renal muestra múltiples formaciones quísticas de diverso tamaño distribuidas difusamente en ambos riñones, con parénquima renal adelgazado y riñones de 17 cm de eje mayor, observándose además tres quistes simples en el lóbulo hepático derecho. Laboratorio: Creatinina 1.6 mg/dL.",
    "explicacion": "El cuadro clínico, los antecedentes familiares directos y los hallazgos en imágenes son diagnósticos de Poliquistosis Renal Autosómica Dominante (PQRAD). La combinación de nefromegalia bilateral palpable, hipertensión arterial y quistes hepáticos asociados es el patrón característico. El manejo médico de primera línea es el control estricto de la presión arterial (meta PA < 130/80 mmHg) con fármacos bloqueadores del sistema renina-angiotensina (IECA o ARA-II) como pilar nefroprotector. En pacientes con cefalea atípica o historia familiar de aneurismas cerebrales está indicada la Angio-RM cerebral para screening de aneurismas de Berry.",
    "keyPoints": [
      "El quiste simple en ecografía es anecoico, de pared imperceptible y con refuerzo acústico: es benigno y no requiere control.",
      "La escala de Bosniak clasifica quistes por TAC: Bosniak I y II son benignos; Bosniak III y IV son quirúrgicos (cáncer quístico).",
      "Bosniak IIF requiere seguimiento tomográfico periódico por bajo riesgo de malignización (~5%).",
      "La PQRAD es autosómica dominante por mutación en PKD1 (cr 16, más severo) o PKD2 (cr 4).",
      "La PQRAD cursa con HTA precoz, nefromegalia palpable bilateral, hematuria y progresión a falla renal terminal.",
      "La complicación extrarrenal más grave de la PQRAD son los aneurismas saculares intracraneales del polígono de Willis."
    ],
    "questions": [
      {
        "stem": "Mujer de 54 años asintomática se realiza una ecografía abdominal como parte de un chequeo preventivo. El informe describe: 'En polo superior del riñón izquierdo se observa lesión anecogénica de 3.8 cm, redondeada, de paredes delgadas e imperceptibles, con refuerzo acústico posterior nítido y sin tabiques ni calcificaciones internas'. Examen físico y función renal normales. ¿Cuál es la conducta más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Tranquilizar a la paciente y darle el alta sin necesidad de seguimiento"
          },
          {
            "id": "B",
            "text": "Solicitar TAC de abdomen y pelvis con contraste para descartar malignidad"
          },
          {
            "id": "C",
            "text": "Programar punción percutánea aspirativa del quiste para análisis citológico"
          },
          {
            "id": "D",
            "text": "Repetir ecografía renal cada 6 meses por 3 años consecutivos"
          },
          {
            "id": "E",
            "text": "Derivar a urología para quistectomía laparoscópica electiva"
          }
        ],
        "correcta": "A",
        "explicacion": "La lesión reúne todos los criterios ecográficos universales de un <strong>Quiste Renal Simple Benigno (Categoría Bosniak I)</strong>: anecogénico, paredes no visibles, refuerzo posterior y sin ecos internos ni tabiques. Los quistes simples son variantes anatómicas extremadamente prevalentes en adultos mayores de 50 años que carecen de potencial de malignización. No requieren confirmación tomográfica, punción aspirativa ni controles ecográficos seriados. La conducta médica correcta es tranquilizar a la paciente y darle el alta.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.09.1.001"
      },
      {
        "stem": "Hombre de 35 años con diagnóstico de Poliquistosis Renal Autosómica Dominante (PQRAD) e hipertensión arterial en tratamiento consulta en urgencias por cefalea súbita e hiperaguda de máxima intensidad ('la peor cefalea de su vida'), acompañada de vómitos explosivos y rigidez de nuca. ¿Cuál es la complicación vascular subyacente más probable que explica este cuadro?",
        "options": [
          {
            "id": "A",
            "text": "Trombosis de la vena renal bilateral"
          },
          {
            "id": "B",
            "text": "Rotura de aneurisma sacular intracraneal del polígono de Willis con hemorragia subaracnoidea"
          },
          {
            "id": "C",
            "text": "Encefalopatía hipertensiva con microhemorragias pontinas"
          },
          {
            "id": "D",
            "text": "Rotura de quiste renal infectado con shock séptico"
          },
          {
            "id": "E",
            "text": "Disección de aorta torácica tipo A"
          }
        ],
        "correcta": "B",
        "explicacion": "Entre un 8 y un 10% de los pacientes con Poliquistosis Renal Autosómica Dominante presentan aneurismas saculares congénitos de las arterias cerebrales del polígono de Willis (aneurismas de Berry), porcentaje que asciende al 20% si hay antecedentes familiares de aneurisma o ACV. La rotura de uno de estos aneurismas desencadena una <strong>Hemorragia Subaracnoidea (HSA)</strong> clásica, manifestada por cefalea en trueno súbita de máxima intensidad, signos meníngeos y riesgo vital inminente, requiriendo TAC de encéfalo sin contraste urgente.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.09.1.001"
      }
    ],
    "diagram": flow("Algoritmo Diagnóstico de Quistes Renales y Clasificación de Bosniak", [
        {
              "t": "Hallazgo Ecográfico de Lesión Quística en el Riñón",
              "s": "Masa anecogénica redondeada · Refuerzo acústico posterior · Pared no visible",
              "type": "warn"
        },
        {
              "k": "split",
              "q": "¿Cumple Criterios Ecográficos de Quiste Simple Típico (Bosniak I)?",
              "ll": "Quiste simple típico: Anecogénico, pared imperceptible, sin ecos internos",
              "left": {
                    "t": "Conducta: Tranquilizar y Alta (Bosniak I)",
                    "s": "Lesión benigna inocua muy frecuente en > 50 años · No requiere seguimiento",
                    "type": "acc"
              },
              "rl": "Quiste Complejo: Tabiques, calcificaciones, contenido denso o polo sólido",
              "right": {
                    "t": "TAC Trifásico con Contraste (Clasificación de Bosniak)",
                    "s": "Bosniak IIF: Seguimiento · Bosniak III / IV: Exploración quirúrgica / Resección",
                    "type": "dec"
              }
        }
  ])
  },
  {
    "id": "uro-15",
    "classId": "uro-15",
    "tier": 2,
    "blockNum": 4,
    "blockName": "Infecciones Urológicas, Quistes & Hematuria",
    "topicLabel": "13.15",
    "title": "Estudio Sistemático de la Hematuria: Glomerular vs Urológica & Banderas Rojas",
    "perfilCode": "1.07.1.001",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Completo",
    "ges": "Sin garantía GES específica · Derivación prioritaria en sospecha oncológica",
    "reconstrucciones": "EUNACOM Julio 2016 (Q#10) · EUNACOM Diciembre 2019 (Q#58)",
    "frecuencia": "Alta rentabilidad · discriminación en sedimento urinario (dismorfismo, cilindros hemáticos) y estudio urológico",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico Sistemático de la Hematuria (Micro vs Macroscópica)",
    "contexto": "La hematuria se define cuantitativamente como la presencia de 3 o más eritrocitos por campo de gran aumento en el sedimento de orina centrifugada. El paso capital e ineludible en el algoritmo diagnóstico consiste en discernir si el sangrado proviene del ovillo glomerular (patología médico-nefrológica) o de la vía urinaria excretora (patología urológico-quirúrgica). La hematuria glomerular se caracteriza por hematíes dismórficos (> 80%), acantocitos (> 5%), cilindros hemáticos y proteinuria significativa; no produce coágulos. En contraste, la presencia de coágulos sanguíneos descarta origen glomerular e identifica inequívocamente una patología de la vía urinaria baja o alta (litiasis, neoplasia urotelial o vascular), exigiendo imágenes contrastadas y cistoscopía.",
    "contentSections": [
      {
        "subhead": "1. Definición y Confirmación Microscópica",
        "paragraphs": [
          "La <strong>hematuria</strong> es la presencia anormal de eritrocitos en la orina. Se clasifica en <strong>Macroscópica</strong> (visible a simple vista, requiriendo solo 1 mL de sangre en 1 litro de orina para teñirla) y <strong>Microscópica</strong> (definida como <strong>≥ 3 eritrocitos por campo de 400x</strong> en al menos dos de tres sedimentos urinarios adecuadamente recolectados en ausencia de ejercicio extremo o menstruación).",
          "<em>Precaución con la tira reactiva (dipstick):</em> Posee alta sensibilidad pero arroja falsos positivos por mioglobinuria (rabdomiólisis), hemoglobinuria (hemólisis masiva) o contaminación con antisépticos. Toda tira reactiva positiva DEBE confirmarse con <strong>sedimento microscópico de orina en fresco</strong> para certificar la presencia de glóbulos rojos intactos."
        ]
      },
      {
        "subhead": "2. Diferenciación Rectoral: Origen Glomerular vs Extraglomerular (Urológico)",
        "paragraphs": [
          "La distinción entre hematuria glomerular y urológica es el eje formativo rector evaluado en el EUNACOM (véase Tabla 13.15):",
          "<strong>Hematuria Glomerular:</strong> La sangre proviene de la rotura de la barrera de filtración glomerular. La orina es de color 'té cargado' o 'coca-cola', es homogénea en toda la micción y <strong>NUNCA contiene coágulos</strong> (el activador de plasminógeno y la uroquinasa tubular los lisan). El sedimento revela <strong>hematíes dismórficos (> 80%)</strong>, <strong>acantocitos o células G1 (> 5%, patognomónicos de daño glomerular)</strong>, <strong>cilindros hemáticos</strong> y frecuentemente proteinuria significativa (> 0.5 a 1 g/24 h). Se deriva a nefrología.",
          "<strong>Hematuria Urológica (Extraglomerular):</strong> La sangre proviene de cualquier punto desde los cálices hasta el meato uretral (litiasis, cáncer vesical, cáncer renal, HPB, infecciones). La orina es roja rutilante y <strong>con frecuencia presenta coágulos</strong>. Los hematíes en el sedimento son <strong>isomórficos (> 80% uniformes y bicóncavos)</strong>, no hay cilindros hemáticos y no hay proteinuria significativa (< 0.3 g/24 h)."
        ]
      },
      {
        "subhead": "3. Algoritmo de Estudio en Microhematuria Asintomática y Banderas Rojas",
        "paragraphs": [
          "En todo paciente con microhematuria confirmada de origen urológico o con hematuria macroscópica indolora, se debe realizar estratificación de riesgo tumoral. Son <strong>factores de riesgo oncológico mayor</strong>: edad > 50 años, tabaquismo activo o pretérito (> 10 paquetes/año), exposición laboral a aminas aromáticas o químicos, hematuria macroscópica previa e irradiación pélvica.",
          "El protocolo de estudio estándar en pacientes de riesgo comprende: (1) Urocultivo para descartar infección bacteriana; (2) <strong>Uro-TAC con fase excretora</strong> para evaluar parénquima renal y urotelio superior; y (3) <strong>Cistoscopía flexible</strong> para inspección directa de la mucosa vesical y uretra prostática."
        ]
      }
    ],
    "table": {
      "title": "Diferenciación Diagnóstica: Hematuria Glomerular vs Hematuria Urológica",
      "headers": [
        "Parámetro Diferencial",
        "Hematuria Glomerular (Nefrológica)",
        "Hematuria Urológica (Quirúrgica)"
      ],
      "rows": [
        [
          "Color de la Orina",
          "Marrón oscuro, 'té cargado', color 'coca-cola'",
          "Roja rutilante, rosada o 'agua de carne'"
        ],
        [
          "Presencia de Coágulos",
          "AUSENTES SIEMPRE (la uroquinasa los lisa)",
          "PRESENTES FRECUENTEMENTE (descarta glomerular)"
        ],
        [
          "Morfología Eritrocitaria",
          "Hematíes Dismórficos (> 80%) y Acantocitos (> 5%)",
          "Hematíes Isomórficos (> 80% normales bicóncavos)"
        ],
        [
          "Cilindros en Sedimento",
          "Cilindros hemáticos patognomónicos o granulosos",
          "Sin cilindros eritrocitarios (pueden haber leucocitos)"
        ],
        [
          "Proteinuria Concomitante",
          "Frecuentemente significativa (> 500 mg - 3 g/d)",
          "Ausente o mínima (< 300 mg/día)"
        ],
        [
          "Etiologías Frecuentes",
          "Nefropatía por IgA, GN Postestreptocócica, Lupus",
          "Litiasis urológica, Cáncer vesical, Cáncer renal, HPB"
        ],
        [
          "Estudio Inicial Obligatorio",
          "Perfil inmunológico, C3/C4, biopsia renal (Nefrología)",
          "Ecografía / Uro-TAC + Cistoscopía (Urología)"
        ]
      ]
    },
    "vignette": "Hombre de 62 años, jubilado de fábrica de pinturas y fumador de 25 paquetes/año, consulta por hallazgo de microhematuria en examen de medicina preventiva de su empresa. Se encuentra totalmente asintomático, sin dolor lumbar, disuria ni fiebre. Sedimento de orina de control: 35-40 hematíes por campo, 95% de ellos de morfología isomórfica normal, sin acantocitos ni cilindros; proteinuria negativa y urocultivo estéril. Creatinina: 0.8 mg/dL.",
    "explicacion": "El paciente presenta una microhematuria urológica no glomerular confirmada (hematíes isomórficos > 80%, sin cilindros ni proteinuria) en un individuo con múltiples factores de riesgo mayor para neoplasia urotelial (edad > 50 años, tabaquismo y exposición laboral a tinturas/aminas aromáticas). La presencia de hematíes normales obliga a descartar patología del tracto urinario superior y bajo. La conducta médica correcta es la derivación a Urología para completar el estudio de etapificación que incluye Uro-TAC con fase excretora y cistoscopía diagnóstica.",
    "keyPoints": [
      "La hematuria se define como ≥ 3 glóbulos rojos por campo en sedimento de orina centrifugada.",
      "Toda tira reactiva positiva exige confirmación con sedimento microscópico para descartar mioglobinuria.",
      "La presencia de COÁGULOS descarta categóricamente el origen glomerular: es siempre urológica.",
      "Acantocitos (> 5%), hematíes dismórficos (> 80%) y cilindros hemáticos certifican origen glomerular.",
      "Hematuria glomerular cursa con orina color té/coca-cola y frecuentemente asocia proteinuria > 500 mg/d.",
      "Hematuria urológica asintomática en fumador > 50 años exige estudio con Uro-TAC y Cistoscopía diagnóstica."
    ],
    "questions": [
      {
        "stem": "Hombre de 24 años consulta por orinas oscuras tipo 'coca-cola' tras un cuadro de faringoamigdalitis hace 12 días. Al examen físico: PA 148/94 mmHg y leve edema bipalpebral. El sedimento de orina revela abundantes glóbulos rojos con 85% de formas dismórficas, acantocitos en 8% y cilindros hemáticos. Proteinuria de 1.2 g/24 horas. ¿Cuál es el origen de la hematuria y el paso siguiente más adecuado?",
        "options": [
          {
            "id": "A",
            "text": "Origen urológico; solicitar Uro-TAC con contraste urgente"
          },
          {
            "id": "B",
            "text": "Origen glomerular; derivar a nefrología para estudio de síndrome nefrítico"
          },
          {
            "id": "C",
            "text": "Origen prostático; iniciar tamsulosina oral y solicitar APE"
          },
          {
            "id": "D",
            "text": "Infección urinaria baja; indicar ciprofloxacino por 14 días"
          },
          {
            "id": "E",
            "text": "Litiasis ureteral silente; indicar abundante hidratación y analgesia"
          }
        ],
        "correcta": "B",
        "explicacion": "El hallazgo de hematíes dismórficos en más del 80%, acantocitos (células G1) > 5% y la presencia patognomónica de <strong>cilindros hemáticos</strong> asociados a proteinuria y síndrome nefrítico (hipertensión y edema postinfeccioso) confirman de forma inequívoca el <strong>origen glomerular</strong> del sangrado. En este escenario están contraindicados los estudios urológicos invasivos (cistoscopía) y la conducta correcta es la derivación a Nefrología para estudio etiológico y eventual biopsia renal.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.07.1.001"
      },
      {
        "stem": "¿Cuál de los siguientes hallazgos clínicos o de laboratorio en un paciente con hematuria permite descartar con mayor certeza el origen glomerular del sangrado?",
        "options": [
          {
            "id": "A",
            "text": "Presencia de coágulos sanguíneos macroscópicos en la orina emitida"
          },
          {
            "id": "B",
            "text": "Orina de aspecto turbio y espumoso"
          },
          {
            "id": "C",
            "text": "Presencia de hipertensión arterial asociada"
          },
          {
            "id": "D",
            "text": "Microhematuria aislada sin proteinuria"
          },
          {
            "id": "E",
            "text": "Aparición de hematuria posterior a ejercicio extenuante"
          }
        ],
        "correcta": "A",
        "explicacion": "La presencia de <strong>coágulos macroscópicos en la orina descarta de manera prácticamente categórica el origen glomerular</strong>. En el túbulo renal existen altas concentraciones de activador tisular del plasminógeno y uroquinasa que degradan la fibrina, impidiendo la formación de coágulos cuando el sangrado se origina en el glomérulo o túbulos proximales. Por lo tanto, cualquier paciente que elimine coágulos sanguíneos presenta un sangrado de origen extraglomerular o urológico (pelvis renal, uréter, vejiga, próstata o uretra).",
        "recTag": "Banco Oficial AEE · Perfil V3 1.07.1.001"
      }
    ],
    "diagram": flow("Algoritmo Diagnóstico Sistemático de la Hematuria (Micro vs Macroscópica)", [
        {
              "t": "Hematuria Confirmada en Sedimento Urinario (≥ 3 GR por Campo)",
              "s": "Diferenciar entre hematuria microscópica y macroscópica",
              "type": "warn"
        },
        {
              "k": "split",
              "q": "¿Existen Elementos de Origen Glomerular (Dismorfismo >80%, Acantocitos >5%, Cilindros Hemáticos o Proteinuria)?",
              "ll": "Sí: Dismórfica, acantocitos, cilindros hemáticos, proteinuria > 0.5 g/d",
              "left": {
                    "t": "Causa Nefrológica / Glomerular",
                    "s": "Nefropatía por IgA, GN Postestreptocócica, Lupus · Derivar a Nefrología",
                    "type": "warn"
              },
              "rl": "No: Isomórfica, hematíes normales, con o sin coágulos",
              "right": {
                    "t": "Causa Urológica / Extraglomerular",
                    "s": "Evaluar factores de riesgo oncológico · Solicitar Uro-TAC + Cistoscopía",
                    "type": "dec"
              }
        }
  ])
  },
];

module.exports = { urologiaClasses, flow };
