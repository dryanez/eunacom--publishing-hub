/**
 * MOTOR EDITORIAL: LIBRO GORDO EUNACOM 2026 (ESTILO AMIR / AEE)
 * Compilador Puppeteer a PDF en formato A4 con:
 *   1. Portada oficial con imagen específica, filo cromático, chip y NUEVO LOGO AEE.
 *   2. Título oficial: "90 Preguntas de Práctica".
 *   3. Página 2: Matriz oficial de Códigos Perfil V3, niveles legales (Dx/Tx/Seg/GES) e índice de preguntas.
 *   4. Sección I: Cuadernillo limpio de Preguntas 1 a 90 (2 columnas, SIN respuestas a la vista).
 *   5. Sección II: Solucionario Comentado y Razonado al final del libro con análisis distractor por distractor y clave oficial.
 */

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const mapper = require('./code_to_manual_mapper.cjs');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const DIST_DIR = path.join(__dirname, '..', 'dist');
const ASSETS_DIR = path.join(__dirname, '..', 'assets');

const U = id => `https://images.unsplash.com/${id}?fm=jpg&q=80&w=1200&auto=format&fit=crop`;

const SPECIALTIES = {
  cardiologia: {
    name: 'Cardiología',
    sub: '& Sistema Cardiovascular',
    code: 'CD',
    num: '01',
    color: '#ea580c',
    chip: '#b8410a',
    photo: U('photo-1559757296-5c84adc6d116'),
    inputFile: 'ENSAYO_90Q_CARDIOLOGIA.json',
    outFile: 'Libro_Gordo_Cardiologia_90Q.pdf',
  },
  gastroenterologia: {
    name: 'Gastroenterología',
    sub: '& Hepatología',
    code: 'GH',
    num: '03',
    color: '#15803d',
    chip: '#10602e',
    photo: U('photo-1715529282042-75cc2f360a73'),
    inputFile: 'ENSAYO_90Q_GASTROENTEROLOGIA.json',
    outFile: 'Libro_Gordo_Gastroenterologia_90Q.pdf',
  },
  infectologia: {
    name: 'Infectología',
    sub: '& Microbiología Clínica',
    code: 'IF',
    num: '02',
    color: '#4d7c0f',
    chip: '#3d6209',
    photo: U('photo-1631651368361-c8e3f4785fc3'),
    inputFile: 'ENSAYO_90Q_INFECTOLOGIA.json',
    outFile: 'Libro_Gordo_Infectologia_90Q.pdf',
  },
  neumologia: {
    name: 'Respiratorio',
    sub: '& Neumología Clínica',
    code: 'RP',
    num: '04',
    color: '#0f766e',
    chip: '#0b5a54',
    photo: U('photo-1631651363531-fd29aec4cb5c'),
    inputFile: 'ENSAYO_90Q_NEUMOLOGIA.json',
    outFile: 'Libro_Gordo_Respiratorio_90Q.pdf',
  },
  nefrologia: {
    name: 'Nefrología',
    sub: '& Medio Interno',
    code: 'NF',
    num: '05',
    color: '#a16207',
    chip: '#7d4c05',
    photo: U('photo-1559757175-053139280de2'),
    inputFile: 'ENSAYO_90Q_NEFROLOGIA.json',
    outFile: 'Libro_Gordo_Nefrologia_90Q.pdf',
  },
  diabetes: {
    name: 'Diabetes Mellitus',
    sub: '& Dislipidemias',
    code: 'DM',
    num: '06',
    color: '#0891b2',
    chip: '#06697f',
    photo: U('photo-1714642596931-2293df25c4a3'),
    inputFile: 'ENSAYO_90Q_DIABETES.json',
    outFile: 'Libro_Gordo_Diabetes_90Q.pdf',
  },
  endocrinologia: {
    name: 'Endocrinología',
    sub: '& Metabolismo',
    code: 'EM',
    num: '07',
    color: '#7c3aed',
    chip: '#5b21b6',
    photo: U('photo-1715529134931-b28c2984b79d'),
    inputFile: 'ENSAYO_90Q_ENDOCRINOLOGIA.json',
    outFile: 'Libro_Gordo_Endocrinologia_90Q.pdf',
  },
  hematologia: {
    name: 'Hémato-oncología',
    sub: '& Hemostasia',
    code: 'HO',
    num: '08',
    color: '#be123c',
    chip: '#91092d',
    photo: U('photo-1576086213369-97a306d36557'),
    inputFile: 'ENSAYO_90Q_HEMATOLOGIA.json',
    outFile: 'Libro_Gordo_Hematologia_90Q.pdf',
  },
  reumatologia: {
    name: 'Reumatología',
    sub: '& Inmunología Clínica',
    code: 'RI',
    num: '09',
    color: '#9f1239',
    chip: '#7c0e2d',
    photo: U('photo-1530497610245-94d3c16cda28'),
    inputFile: 'ENSAYO_90Q_REUMATOLOGIA.json',
    outFile: 'Libro_Gordo_Reumatologia_90Q.pdf',
  },
  neurologia: {
    name: 'Neurología',
    sub: '& Geriatría',
    code: 'NR',
    num: '10',
    color: '#6d28d9',
    chip: '#4c1d95',
    photo: U('photo-1715529134972-221f23a6c701'),
    inputFile: 'ENSAYO_90Q_NEUROLOGIA.json',
    outFile: 'Libro_Gordo_Neurologia_90Q.pdf',
  },
  ponderado: {
    name: 'Medicina Interna (Ensayo Ponderado)',
    sub: '1.082 Preguntas Reales · EUNACOM 2013-2025',
    code: 'MI',
    num: '00',
    modulo: 'MÓDULO 1',
    color: '#0d9488',
    chip: '#0f766e',
    photo: U('photo-1576091160399-112ba8d25d1d'),
    inputFile: 'ENSAYO_EUNACOM_MODULO_1_PONDERADO_90Q.json',
    outFile: 'Libro_Gordo_EUNACOM_Modulo_1_Ponderado_90Q.pdf',
  },

  // ── MÓDULO 2: CIRUGÍA Y ESPECIALIDADES (Tomos 11 al 17) ──
  cirugia: {
    name: 'Cirugía General',
    sub: 'Abdomen Agudo & Anestesia',
    code: 'CG',
    num: '11',
    modulo: 'MÓDULO 2',
    color: '#334155',
    chip: '#1f2937',
    photo: U('photo-1507688270584-0566e2c493f6'),
    inputFile: 'ENSAYO_90Q_CIRUGIA.json',
    outFile: 'Libro_Gordo_Cirugia_90Q.pdf',
  },
  traumatologia: {
    name: 'Traumatología',
    sub: '& Ortopedia',
    code: 'TO',
    num: '12',
    modulo: 'MÓDULO 2',
    color: '#b45309',
    chip: '#8a3f06',
    photo: U('photo-1631651365457-d52b7b3a7e79'),
    inputFile: 'ENSAYO_90Q_TRAUMATOLOGIA.json',
    outFile: 'Libro_Gordo_Traumatologia_90Q.pdf',
  },
  urologia: {
    name: 'Urología',
    sub: 'Urolitiasis, HPB & Cáncer',
    code: 'UR',
    num: '13',
    modulo: 'MÓDULO 2',
    color: '#0369a1',
    chip: '#024e79',
    photo: U('photo-1559757175-9e351c9a1301'),
    inputFile: 'ENSAYO_90Q_UROLOGIA.json',
    outFile: 'Libro_Gordo_Urologia_90Q.pdf',
  },
  otorrino: {
    name: 'Otorrinolaringología',
    sub: 'ORL Clínica & Urgencias',
    code: 'OR',
    num: '14',
    modulo: 'MÓDULO 2',
    color: '#4338ca',
    chip: '#312a99',
    photo: U('photo-1650897492414-8661563845a7'),
    inputFile: 'ENSAYO_90Q_OTORRINO.json',
    outFile: 'Libro_Gordo_Otorrinolaringologia_90Q.pdf',
  },
  oftalmologia: {
    name: 'Oftalmología',
    sub: 'Ojo Rojo, Glaucoma & Retina',
    code: 'OF',
    num: '15',
    modulo: 'MÓDULO 2',
    color: '#0e7490',
    chip: '#0a5566',
    photo: U('photo-1616012481039-5de1dcb42934'),
    inputFile: 'ENSAYO_90Q_OFTALMOLOGIA.json',
    outFile: 'Libro_Gordo_Oftalmologia_90Q.pdf',
  },
  dermatologia: {
    name: 'Dermatología',
    sub: 'Psoriasis, Cáncer de Piel & NET',
    code: 'DE',
    num: '16',
    modulo: 'MÓDULO 2',
    color: '#a21caf',
    chip: '#79148a',
    photo: U('photo-1707079346045-58fed6cde83a'),
    inputFile: 'ENSAYO_90Q_DERMATOLOGIA.json',
    outFile: 'Libro_Gordo_Dermatologia_90Q.pdf',
  },
  psiquiatria: {
    name: 'Psiquiatría General',
    sub: '& Salud Mental',
    code: 'PS',
    num: '17',
    modulo: 'MÓDULO 2',
    color: '#7e22ce',
    chip: '#5d189c',
    photo: U('photo-1715527498459-22c8534b6b49'),
    inputFile: 'ENSAYO_90Q_PSIQUIATRIA.json',
    outFile: 'Libro_Gordo_Psiquiatria_90Q.pdf',
  },

  // ── MÓDULO 3: MATERNO - INFANTIL (Tomos 18 al 20) ──
  pediatria: {
    name: 'Pediatría General',
    sub: '& Neonatología',
    code: 'PD',
    num: '18',
    modulo: 'MÓDULO 3',
    color: '#c2410c',
    chip: '#93300a',
    photo: U('photo-1504743591040-f3bec9c542cd'),
    inputFile: 'ENSAYO_90Q_PEDIATRIA.json',
    outFile: 'Libro_Gordo_Pediatria_90Q.pdf',
  },
  obstetricia: {
    name: 'Obstetricia',
    sub: '& Medicina Materno-Fetal',
    code: 'OB',
    num: '19',
    modulo: 'MÓDULO 3',
    color: '#9d174d',
    chip: '#76103a',
    photo: U('photo-1574706473454-a3b3da3fc5b5'),
    inputFile: 'ENSAYO_90Q_OBSTETRICIA.json',
    outFile: 'Libro_Gordo_Obstetricia_90Q.pdf',
  },
  ginecologia: {
    name: 'Ginecología',
    sub: '& Oncología Ginecológica',
    code: 'GO',
    num: '20',
    modulo: 'MÓDULO 3',
    color: '#be185d',
    chip: '#8f1246',
    photo: U('photo-1715527498597-2a076e3a2f30'),
    inputFile: 'ENSAYO_90Q_GINECOLOGIA.json',
    outFile: 'Libro_Gordo_Ginecologia_90Q.pdf',
  },

  // ── MÓDULO 4: SALUD PÚBLICA Y GESTIÓN (Tomo 21) ──
  saludpublica: {
    name: 'Salud Pública',
    sub: 'Epidemiología & Bioética',
    code: 'SP',
    num: '21',
    modulo: 'MÓDULO 4',
    color: '#166534',
    chip: '#0f4a26',
    photo: U('photo-1631824683860-9a7aa1fe0713'),
    inputFile: 'ENSAYO_90Q_SALUDPUBLICA.json',
    outFile: 'Libro_Gordo_SaludPublica_90Q.pdf',
  },
};

// Cargar Nuevo Logo AEE en SVG
let aeeLogoSvg = '';
const newLogoPath = path.join(ASSETS_DIR, 'aee_logo_new.svg');
if (fs.existsSync(newLogoPath)) {
  aeeLogoSvg = fs.readFileSync(newLogoPath, 'utf8');
} else {
  console.warn('No se encontró aee_logo_new.svg');
}

function renderHtmlBook(specKey) {
  const spec = SPECIALTIES[specKey];
  if (!spec) throw new Error(`Especialidad no soportada: ${specKey}`);

  const jsonFile = path.join(DIST_DIR, spec.inputFile);
  if (!fs.existsSync(jsonFile)) throw new Error(`Falta el archivo: ${jsonFile}`);

  const questions = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));

  // 1. Matriz de códigos Perfil V3 organizada por Bloque (Parte A)
  const blockCodeMap = {};
  questions.forEach(q => {
    const rawCodes = String(q.perfilCode || '').split(/[,\s]+/).map(s => s.trim()).filter(Boolean);
    const bNum = q.blockNum || 1;
    const bName = q.blockName || `Bloque ${bNum}`;
    rawCodes.forEach(c => {
      const key = `${bNum}__${c}`;
      if (!blockCodeMap[key]) {
        blockCodeMap[key] = {
          code: c,
          title: q.topicTitle,
          blockNum: bNum,
          blockName: bName,
          dx: q.legalLevel?.dx || 'Específico',
          tx: q.legalLevel?.tx || 'Inicial',
          seg: q.legalLevel?.seg || 'Derivar',
          ges: q.legalLevel?.ges || '—',
          qNums: []
        };
      }
      blockCodeMap[key].qNums.push(q.number);
    });
  });

  const blockRows = Object.values(blockCodeMap).sort((a, b) => {
    if (a.blockNum !== b.blockNum) return a.blockNum - b.blockNum;
    return a.code.localeCompare(b.code, undefined, { numeric: true });
  });

  let lastMatrixBlock = 0;
  const matrixRowsByBlockHtml = blockRows.map(r => {
    let blockHeaderRow = '';
    if (r.blockNum && r.blockNum !== lastMatrixBlock) {
      lastMatrixBlock = r.blockNum;
      blockHeaderRow = `
        <tr class="tr-block-header">
          <td colspan="6">BLOQUE ${r.blockNum}: ${r.blockName.toUpperCase()}</td>
        </tr>
      `;
    }
    const uniqueQNums = [...new Set(r.qNums)].sort((a, b) => a - b);
    const manualRef = mapper.getManualReference(r.code);
    const manualStr = manualRef ? manualRef.referenceString : '—';
    return `${blockHeaderRow}
      <tr>
        <td class="td-code">${r.code}</td>
        <td class="td-title">${r.title}</td>
        <td>Dx: <strong>${r.dx}</strong><br>Tx: <strong>${r.tx}</strong> · Seg: <strong>${r.seg}</strong></td>
        <td>${r.ges && r.ges !== '—' ? '<span class="pill-ges">GES</span>' : '—'}</td>
        <td class="td-q">${uniqueQNums.map(n => 'Q' + n).join(', ')}</td>
        <td class="td-manual"><span class="pill-manual">${manualStr}</span></td>
      </tr>
    `;
  }).join('');

  // 2. Matriz de códigos Perfil V3 en Orden Numérico Correlativo Estricto (Parte B - Sin Bloques)
  const numericalCodeMap = {};
  questions.forEach(q => {
    const rawCodes = String(q.perfilCode || '').split(/[,\s]+/).map(s => s.trim()).filter(Boolean);
    rawCodes.forEach(c => {
      if (!numericalCodeMap[c]) {
        numericalCodeMap[c] = {
          code: c,
          title: q.topicTitle,
          blockNum: q.blockNum || 1,
          blockName: q.blockName || `Bloque ${q.blockNum || 1}`,
          dx: q.legalLevel?.dx || 'Específico',
          tx: q.legalLevel?.tx || 'Inicial',
          seg: q.legalLevel?.seg || 'Derivar',
          ges: q.legalLevel?.ges || '—',
          qNums: []
        };
      }
      numericalCodeMap[c].qNums.push(q.number);
    });
  });

  const sortedCodes = Object.keys(numericalCodeMap).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  const matrixRowsNumericalHtml = sortedCodes.map(codeKey => {
    const r = numericalCodeMap[codeKey];
    const uniqueQNums = [...new Set(r.qNums)].sort((a, b) => a - b);
    const manualRef = mapper.getManualReference(r.code);
    const manualStr = manualRef ? manualRef.referenceString : '—';
    return `
      <tr>
        <td class="td-code">${r.code}</td>
        <td class="td-title">${r.title}</td>
        <td>Dx: <strong>${r.dx}</strong><br>Tx: <strong>${r.tx}</strong> · Seg: <strong>${r.seg}</strong></td>
        <td>${r.ges && r.ges !== '—' ? '<span class="pill-ges">GES</span>' : '—'}</td>
        <td class="td-q">${uniqueQNums.map(n => 'Q' + n).join(', ')}</td>
        <td class="td-manual"><span class="pill-manual">${manualStr}</span></td>
      </tr>
    `;
  }).join('');

  // Renderizar preguntas con divisores de bloque
  let lastSectionBlock = 0;
  const questionsHtml = questions.map(q => {
    let blockHeaderHtml = '';
    if (q.blockNum && q.blockNum !== lastSectionBlock) {
      lastSectionBlock = q.blockNum;
      blockHeaderHtml = `
        <div class="block-divider">
          <span class="block-divider-badge">BLOQUE ${q.blockNum}</span>
          <span class="block-divider-title">${q.blockName || ('Bloque ' + q.blockNum)}</span>
        </div>
      `;
    }
    return `${blockHeaderHtml}
      <div class="q-box">
        <div class="q-top">
          <span class="q-badge">PREGUNTA ${q.number}</span>
          <span class="q-code-label">${q.perfilCode || ''}</span>
        </div>
        <div class="q-stem">
          <strong class="q-num">${q.number}.</strong>${q.stem}
        </div>
        <div class="q-opts">
          ${q.options.map(opt => `
            <div class="q-opt-line">
              <span class="q-opt-char">${opt.id})</span>
              <span>${opt.text}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  // Renderizar solucionario a ancho completo horizontal (sin cajas pequeñas, sin columnas forzadas)
  let lastSolBlock = 0;
  const solutionsHtml = questions.map(q => {
    let blockHeaderHtml = '';
    if (q.blockNum && q.blockNum !== lastSolBlock) {
      lastSolBlock = q.blockNum;
      blockHeaderHtml = `
        <div class="block-divider sol-divider">
          <span class="block-divider-badge sol-badge-divider">BLOQUE ${q.blockNum}</span>
          <span class="block-divider-title">${q.blockName || ('Bloque ' + q.blockNum)} · SOLUCIONARIO OFICIAL</span>
        </div>
      `;
    }
    const gesBadge = (q.legalLevel?.ges && q.legalLevel.ges !== '—') ? '<span class="pill-ges">GES</span>' : '';
    return `${blockHeaderHtml}
      <div class="sol-item-full">
        <div class="sol-full-header">
          <div class="sol-full-left">
            <span class="sol-full-qnum">PREGUNTA ${q.number}</span>
            <span class="sol-full-clave">Respuesta: ${q.correcta}</span>
            <span class="sol-full-topic">${q.topicTitle || ''}</span>
          </div>
          <div class="sol-full-right">
            <span class="sol-full-code">${q.perfilCode || ''}</span>
            <span class="sol-full-legal">Dx: ${q.legalLevel?.dx || 'Específico'} · Tx: ${q.legalLevel?.tx || 'Inicial'} · Seg: ${q.legalLevel?.seg || 'Derivar'}</span>
            ${gesBadge}
          </div>
        </div>
        <div class="sol-full-body">
          <p class="sol-full-text">${q.explicacion}</p>
        </div>
      </div>
    `;
  }).join('');

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>90 Preguntas de Práctica · ${spec.name} · AEE</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500;600&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <style>
    @page {
      size: A4 portrait;
      margin: 14mm 12mm 14mm 12mm;
    }
    @page :first {
      margin: 0;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 0;
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 8.5pt;
      line-height: 1.34;
      color: #1e293b;
      background: white;
    }

    /* ════════════ PORTADA EDITORIAL CON FOTO Y NUEVO LOGO AEE (FULL BLEED) ════════════ */
    .cover-page {
      page-break-after: always;
      width: 100vw;
      height: 100vh;
      min-height: 297mm;
      max-height: 297mm;
      background: #0b1420;
      color: white;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 34mm 26mm 24mm 32mm;
      box-sizing: border-box;
      margin: 0;
    }
    .cover-photo {
      position: absolute;
      inset: 0;
      background-image: url('${spec.photo}');
      background-size: cover;
      background-position: center;
      filter: grayscale(0.4) brightness(0.45) contrast(1.1);
      z-index: 1;
    }
    .cover-veil {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(11,20,32,0.85) 0%, rgba(11,20,32,0.50) 35%, rgba(11,20,32,0.92) 75%, rgba(11,20,32,0.98) 100%);
      z-index: 2;
    }
    .cover-spine {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 14px;
      background: ${spec.color};
      z-index: 3;
    }
    .cover-watermark {
      position: absolute;
      right: -25px;
      top: 60px;
      font-family: 'Archivo', sans-serif;
      font-size: 190pt;
      font-weight: 900;
      line-height: 0.8;
      color: rgba(255, 255, 255, 0.05);
      user-select: none;
      pointer-events: none;
      z-index: 3;
    }
    .cover-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 4;
    }
    .cover-logo-svg {
      width: 240px;
      height: auto;
    }
    .cover-edition {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 8.5pt;
      letter-spacing: 0.15em;
      color: #0bd9e7;
      border: 1px solid rgba(11,217,231,0.4);
      background: rgba(11,20,32,0.6);
      padding: 5px 12px;
      border-radius: 4px;
      font-weight: 600;
    }
    .cover-main {
      margin-top: auto;
      margin-bottom: 15mm;
      z-index: 4;
    }
    .cover-chip {
      display: inline-block;
      padding: 6px 14px;
      background: ${spec.chip};
      font-family: 'IBM Plex Mono', monospace;
      font-size: 9.5pt;
      font-weight: 700;
      letter-spacing: 0.15em;
      color: white;
      border-radius: 3px;
      margin-bottom: 16px;
    }
    .cover-title-main {
      font-family: 'Archivo', sans-serif;
      font-size: 44pt;
      font-weight: 900;
      line-height: 0.95;
      color: #ffffff;
      letter-spacing: -0.03em;
      margin: 0;
      text-transform: uppercase;
    }
    .cover-subject {
      font-family: 'Archivo', sans-serif;
      font-size: 22pt;
      font-weight: 700;
      color: #38bdf8;
      margin-top: 12px;
      letter-spacing: -0.01em;
    }
    .cover-subject-sub {
      font-size: 13pt;
      font-weight: 500;
      color: #94a3b8;
      margin-top: 4px;
    }
    .cover-rule {
      width: 100%;
      height: 1px;
      background: rgba(255, 255, 255, 0.25);
      margin: 20px 0 14px 0;
    }
    .cover-meta {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 8.5pt;
      letter-spacing: 0.08em;
      color: #94a3b8;
      display: flex;
      justify-content: space-between;
    }

    /* ════════════ PÁGINA 2: MATRIZ DE CÓDIGOS PERFIL V3 (FRONT MATTER) ════════════ */
    .front-matter {
      page-break-after: always;
      padding: 10px 0;
    }
    .fm-header {
      border-bottom: 2px solid ${spec.color};
      padding-bottom: 8px;
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .fm-title {
      font-family: 'Archivo', sans-serif;
      font-size: 16pt;
      font-weight: 900;
      color: #0f172a;
      text-transform: uppercase;
      margin: 0;
    }
    .fm-subtitle {
      font-size: 9pt;
      color: #64748b;
      margin-top: 3px;
    }
    .code-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 7.5pt;
      line-height: 1.3;
    }
    .code-table th {
      background: #0f172a;
      color: white;
      text-align: left;
      padding: 6px 8px;
      font-family: 'Archivo', sans-serif;
      font-size: 7.5pt;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .code-table td {
      padding: 5px 8px;
      border-bottom: 1px solid #e2e8f0;
      vertical-align: top;
    }
    .code-table tr:nth-child(even) {
      background: #f8fafc;
    }
    .tr-block-header td {
      background: #0f172a !important;
      color: #0bd9e7 !important;
      font-family: 'Archivo', sans-serif;
      font-size: 7.8pt;
      font-weight: 800;
      letter-spacing: 0.06em;
      padding: 6px 8px;
    }
    .td-code {
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      color: ${spec.color};
      white-space: nowrap;
    }
    .td-title {
      font-weight: 600;
      color: #1e293b;
    }
    .td-q {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 7pt;
      color: #475569;
      font-weight: 600;
    }
    .pill-ges {
      display: inline-block;
      background: #fef2f2;
      color: #991b1b;
      border: 1px solid #fecaca;
      padding: 1px 4px;
      border-radius: 3px;
      font-size: 6.5pt;
      font-weight: 700;
    }
    .td-manual {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 6.8pt;
      color: #0369a1;
      font-weight: 600;
    }
    .pill-manual {
      display: inline-block;
      background: #f0f9ff;
      color: #0284c7;
      border: 1px solid #bae6fd;
      padding: 2px 5px;
      border-radius: 3px;
      font-size: 6.5pt;
      font-weight: 600;
      white-space: nowrap;
    }

    /* ════════════ CABECERAS DE SECCIÓN Y DIVISORES DE BLOQUE ════════════ */
    .section-banner {
      background: linear-gradient(90deg, #0f172a 0%, #1e293b 100%);
      color: white;
      padding: 10px 14px;
      border-left: 5px solid ${spec.color};
      border-radius: 4px;
      margin-bottom: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .section-banner h2 {
      font-family: 'Archivo', sans-serif;
      font-size: 12pt;
      font-weight: 800;
      margin: 0;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .section-banner span {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 8pt;
      color: #94a3b8;
    }

    .block-divider {
      column-span: all;
      background: #0f172a;
      color: white;
      border-left: 4px solid ${spec.color};
      padding: 6px 12px;
      margin: 14px 0 10px 0;
      display: flex;
      align-items: center;
      gap: 10px;
      border-radius: 4px;
      break-inside: avoid;
    }
    .block-divider.sol-divider {
      border-left-color: #10b981;
    }
    .block-divider-badge {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 7.5pt;
      font-weight: 700;
      background: ${spec.color};
      color: white;
      padding: 2px 7px;
      border-radius: 3px;
      letter-spacing: 0.05em;
    }
    .sol-badge-divider {
      background: #10b981 !important;
    }
    .block-divider-title {
      font-family: 'Archivo', sans-serif;
      font-size: 9pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: white;
    }

    /* ════════════ RUNNING HEADERS ════════════ */
    .running-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1.5px solid ${spec.color};
      padding-bottom: 3px;
      margin-bottom: 12px;
      font-family: 'Archivo', sans-serif;
      font-size: 7.2pt;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #64748b;
    }
    .running-header strong {
      color: #0f172a;
      font-weight: 800;
    }

    /* ════════════ CUERPO A 2 COLUMNAS ════════════ */
    .content-columns {
      column-count: 2;
      column-gap: 16px;
      column-rule: 1px solid #e2e8f0;
      text-align: justify;
    }

    /* ════════════ SECCIÓN I: ÍTEMS DE PREGUNTA (LIMPIOS) ════════════ */
    .q-box {
      break-inside: avoid;
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 1px dashed #cbd5e1;
    }
    .q-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;
    }
    .q-badge {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 6.8pt;
      font-weight: 700;
      background: #f1f5f9;
      color: #334155;
      padding: 1px 5px;
      border-radius: 3px;
      border: 1px solid #cbd5e1;
    }
    .q-code-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 6.8pt;
      font-weight: 600;
      color: ${spec.color};
    }
    .q-stem {
      font-size: 8.2pt;
      font-weight: 600;
      color: #0f172a;
      line-height: 1.32;
      margin-bottom: 6px;
    }
    .q-stem strong.q-num {
      font-family: 'Archivo', sans-serif;
      font-size: 9.5pt;
      font-weight: 900;
      color: ${spec.color};
      margin-right: 4px;
    }
    .q-opts {
      padding-left: 2px;
    }
    .q-opt-line {
      font-size: 8pt;
      line-height: 1.28;
      margin-bottom: 3.5px;
      display: flex;
      align-items: flex-start;
      gap: 5px;
    }
    .q-opt-char {
      font-family: 'Archivo', sans-serif;
      font-weight: 700;
      color: #475569;
      min-width: 14px;
    }

    /* ════════════ SECCIÓN II: SOLUCIONARIO RAZONADO A ANCHO COMPLETO HORIZONTAL ════════════ */
    .sol-page {
      page-break-before: always;
    }
    .sol-container-full {
      width: 100%;
    }
    .sol-item-full {
      break-inside: avoid;
      margin-bottom: 12px;
      padding: 9px 0 11px 0;
      border-bottom: 1px solid #e2e8f0;
      width: 100%;
    }
    .sol-full-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6px;
      padding-bottom: 4px;
      border-bottom: 1px solid #f1f5f9;
    }
    .sol-full-left {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }
    .sol-full-qnum {
      font-family: 'Archivo', sans-serif;
      font-weight: 800;
      font-size: 8.5pt;
      color: #0f172a;
      letter-spacing: 0.02em;
    }
    .sol-full-clave {
      font-family: 'Archivo', sans-serif;
      font-size: 8.5pt;
      font-weight: 900;
      background: #10b981;
      color: white;
      padding: 2px 9px;
      border-radius: 3px;
      letter-spacing: 0.04em;
    }
    .sol-full-topic {
      font-size: 8.2pt;
      font-weight: 600;
      color: #334155;
    }
    .sol-full-right {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .sol-full-code {
      font-family: 'JetBrains Mono', monospace;
      font-size: 7.2pt;
      font-weight: 700;
      color: ${spec.color};
      background: #f8fafc;
      padding: 1px 7px;
      border: 1px solid #e2e8f0;
      border-radius: 3px;
    }
    .sol-full-legal {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 7pt;
      color: #64748b;
      font-weight: 600;
    }
    .sol-full-body {
      font-size: 8.2pt;
      line-height: 1.45;
      color: #334155;
      text-align: justify;
    }
    .sol-full-text {
      margin: 0;
    }
  </style>
</head>
<body>

  <!-- 1. PORTADA EDITORIAL OFICIAL CON FOTO Y NUEVO LOGO AEE -->
  <div class="cover-page">
    <div class="cover-photo"></div>
    <div class="cover-veil"></div>
    <div class="cover-spine"></div>
    <div class="cover-watermark">${spec.code}</div>
    
    <div class="cover-top">
      <div class="cover-logo-svg">${aeeLogoSvg}</div>
      <div class="cover-edition">TOMO ${spec.num} · 1ª EDICIÓN 2026</div>
    </div>

    <div class="cover-main">
      <div class="cover-chip">${spec.modulo || 'MÓDULO 1: MEDICINA INTERNA'}</div>
      <h1 class="cover-title-main">${spec.name.toUpperCase()}</h1>
      <div class="cover-subject">90 Preguntas de Práctica</div>
      <div class="cover-subject-sub">${spec.sub ? spec.sub.replace(/^& /, '') : ''}</div>
    </div>
  </div>

  <!-- 2. FRONT MATTER: MATRICES DE CÓDIGOS PERFIL V3 -->
  <div class="front-matter">
    <!-- PARTE A: DISTRIBUCIÓN POR BLOQUES -->
    <div class="fm-header">
      <div>
        <h2 class="fm-title">Matriz Perfil V3 · Distribución por Bloques</h2>
        <div class="fm-subtitle">${spec.name} · Secuencia Cardinal de Estudio (Bloque 1 a 5)</div>
      </div>
      <div style="font-family: 'IBM Plex Mono'; font-size: 8pt; color: ${spec.color}; font-weight: 700;">
        TOMO ${spec.num} · PARTE A: POR BLOQUES
      </div>
    </div>

    <table class="code-table">
      <thead>
        <tr>
          <th style="width: 12%;">Código V3</th>
          <th style="width: 30%;">Situación Clínica / Patología</th>
          <th style="width: 18%;">Nivel Legal Exigido</th>
          <th style="width: 8%;">GES</th>
          <th style="width: 12%;">Preguntas</th>
          <th style="width: 20%;">Manual de Estudio AEE</th>
        </tr>
      </thead>
      <tbody>
        ${matrixRowsByBlockHtml}
      </tbody>
    </table>

    <!-- PARTE B: ORDEN NUMÉRICO CORRELATIVO (SIN BLOQUES) -->
    <div style="page-break-before: always; height: 10px;"></div>
    <div class="fm-header" style="margin-top: 15px;">
      <div>
        <h2 class="fm-title">Índice Correlativo Oficial Perfil V3</h2>
        <div class="fm-subtitle">${spec.name} · Códigos en Orden Numérico Correlativo Estricto (Sin Bloques)</div>
      </div>
      <div style="font-family: 'IBM Plex Mono'; font-size: 8pt; color: ${spec.color}; font-weight: 700;">
        TOMO ${spec.num} · PARTE B: ORDEN NUMÉRICO
      </div>
    </div>

    <table class="code-table">
      <thead>
        <tr>
          <th style="width: 12%;">Código V3</th>
          <th style="width: 30%;">Situación Clínica / Patología</th>
          <th style="width: 18%;">Nivel Legal Exigido</th>
          <th style="width: 8%;">GES</th>
          <th style="width: 12%;">Preguntas</th>
          <th style="width: 20%;">Manual de Estudio AEE</th>
        </tr>
      </thead>
      <tbody>
        ${matrixRowsNumericalHtml}
      </tbody>
    </table>
  </div>

  <!-- 3. SECCIÓN I: CUADERNILLO DE PREGUNTAS 1 A 90 (LIMPIO) -->
  <div class="running-header">
    <div><strong>AEE · ACADEMIA EXAMEN EUNACOM</strong> · 90 PREGUNTAS DE PRÁCTICA</div>
    <div>${spec.name.toUpperCase()} · TOMO ${spec.num}</div>
  </div>

  <div class="section-banner">
    <div>
      <h2>Sección I · Cuadernillo de Preguntas (1 a 90)</h2>
      <span>Organizado estrictamente por Bloques Cardinales · Responda sin consultar la solución</span>
    </div>
    <span style="color: #0bd9e7; font-weight: 700;">90 ÍTEMS</span>
  </div>

  <div class="content-columns">
    ${questionsHtml}
  </div>

  <!-- 4. SECCIÓN II: SOLUCIONARIO RAZONADO & MATRIZ LEGAL AL FINAL (A ANCHO COMPLETO HORIZONTAL) -->
  <div class="sol-page">
    <div class="running-header">
      <div><strong>AEE · ACADEMIA EXAMEN EUNACOM</strong> · SOLUCIONARIO OFICIAL RAZONADO</div>
      <div>${spec.name.toUpperCase()} · RESPUESTAS Y FUNDAMENTACIÓN CLÍNICA</div>
    </div>

    <div class="section-banner" style="border-left-color: #10b981;">
      <div>
        <h2>Sección II · Solucionario Razonado & Matriz Perfil V3</h2>
        <span>Justificación médica de la clave correcta y análisis exhaustivo de cada distractor · Ancho Completo</span>
      </div>
      <span style="color: #10b981; font-weight: 700;">CLAVES 1 A 90</span>
    </div>

    <div class="sol-container-full">
      ${solutionsHtml}
    </div>
  </div>

</body>
</html>`;
}

async function buildPdf(specKey) {
  console.log(`\nCompilando PDF Libro Gordo para: [${specKey}]...`);
  const spec = SPECIALTIES[specKey];
  if (!spec) throw new Error(`Clave no válida: ${specKey}`);

  const html = renderHtmlBook(specKey);
  const tempHtmlPath = path.join(DIST_DIR, `temp_libro_gordo_${specKey}.html`);
  fs.writeFileSync(tempHtmlPath, html, 'utf8');

  const browser = await puppeteer.launch({
    headless: true,
    executablePath: CHROME_PATH,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto('file://' + tempHtmlPath, { waitUntil: 'networkidle0', timeout: 90000 });
  await page.evaluateHandle('document.fonts.ready');

  let outPdf = path.join(DIST_DIR, spec.outFile);
  let written = false;
  const candidates = [
    outPdf,
    outPdf.replace(/\.pdf$/, '_v2.pdf'),
    outPdf.replace(/\.pdf$/, '_v3.pdf'),
    outPdf.replace(/\.pdf$/, `_${Date.now()}.pdf`)
  ];

  for (const candidate of candidates) {
    try {
      await page.pdf({
        path: candidate,
        format: 'A4',
        printBackground: true,
        margin: { top: 0, bottom: 0, left: 0, right: 0 }
      });
      outPdf = candidate;
      written = true;
      break;
    } catch (err) {
      if (err.code === 'EBUSY') {
        console.warn(`[AVISO] Archivo bloqueado por visor (${path.basename(candidate)}). Probando alternativa...`);
        continue;
      }
      throw err;
    }
  }
  if (!written) throw new Error(`No se pudo escribir el archivo PDF para ${specKey}`);

  await browser.close();
  if (fs.existsSync(tempHtmlPath)) fs.unlinkSync(tempHtmlPath);

  const stats = fs.statSync(outPdf);
  console.log(`✓ Generado exitosamente: ${outPdf} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
}

async function main() {
  const arg = (process.argv[2] || 'cardiologia').toLowerCase();

  if (arg === 'all') {
    const keys = Object.keys(SPECIALTIES);
    console.log(`Iniciando compilación masiva de ${keys.length} libros en PDF (Nuevo Estándar)...`);
    for (const k of keys) {
      await buildPdf(k);
    }
  } else {
    await buildPdf(arg);
  }
}

main().catch(err => {
  console.error('Error fatal durante la compilación:', err);
  process.exit(1);
});
