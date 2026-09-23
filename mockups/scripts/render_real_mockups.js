const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_DIR = path.resolve(__dirname, '..');
const COVERS_DIR = path.join(BASE_DIR, 'covers');
const OUTPUT_DIR = path.join(BASE_DIR, 'renders_real');

// Subdirectories for organized outputs
const dirs = [
  path.join(OUTPUT_DIR, '01_standing_collection'),
  path.join(OUTPUT_DIR, '02_books_5_pictures'),
  path.join(OUTPUT_DIR, 'social_1x1_instagram_post'),
  path.join(OUTPUT_DIR, 'social_4x5_instagram_portrait'),
  path.join(OUTPUT_DIR, 'social_9x16_stories_reels'),
  path.join(OUTPUT_DIR, 'web_16x9_landscape')
];
dirs.forEach(d => fs.mkdirSync(d, { recursive: true }));

function toB64(filePath) {
  const data = fs.readFileSync(filePath);
  return 'data:image/png;base64,' + data.toString('base64');
}

// 10 Books Metadata
const booksMeta = [
  { num: '01', code: 'CD', name: 'Cardiología', sub: '& Sist. Cardiovascular', color: '#ea580c', file: 'Tomo_01_Cardiologia_Completo_2026.png', pLeft: 'page_4.png', pRight: 'page_5.png', topic: '1.1 Lectura Sistemática del ECG en Urgencias' },
  { num: '02', code: 'IF', name: 'Infecciosas', sub: '& Microbiología', color: '#4d7c0f', file: 'Tomo_02_Infectologia_Completo_2026.png' },
  { num: '03', code: 'GH', name: 'Gastroenterología', sub: '& Hepatología', color: '#15803d', file: 'Tomo_03_Gastroenterologia_Completo_2026.png', pLeft: 'gastro_page_left.png', pRight: 'gastro_page_right.png', topic: '1.1 Enfermedad por Reflujo Gastroesofágico y Barrett' },
  { num: '04', code: 'RP', name: 'Respiratorio', sub: '& Neumología', color: '#0f766e', file: 'Tomo_04_Respiratorio_Completo_2026.png' },
  { num: '05', code: 'NF', name: 'Nefrología', sub: '& Medio Interno', color: '#a16207', file: 'Tomo_05_Nefrologia_Completo_2026.png' },
  { num: '06', code: 'DM', name: 'Diabetes Mellitus', sub: '& Dislipidemias', color: '#0891b2', file: 'Tomo_06_Diabetes_Completo_2026.png', pLeft: 'diabetes_page_left.png', pRight: 'diabetes_page_right.png', topic: '1.1 Diagnóstico de Diabetes Mellitus Tipo 2' },
  { num: '07', code: 'EM', name: 'Endocrinología', sub: '& Metabolismo', color: '#7c3aed', file: 'Tomo_07_Endocrinologia_Completo_2026.png' },
  { num: '08', code: 'HO', name: 'Hematología', sub: '& Oncología Médica', color: '#be123c', file: 'Tomo_08_Hematologia_Completo_2026.png', pLeft: 'hemato_page_left.png', pRight: 'hemato_page_right.png', topic: '1.1 Estudio y Diagnóstico de Anemias' },
  { num: '09', code: 'RI', name: 'Reumatología', sub: '& Inmunología', color: '#9f1239', file: 'Tomo_09_Reumatologia_Completo_2026.png' },
  { num: '10', code: 'NR', name: 'Neurología', sub: '& Geriatría', color: '#6d28d9', file: 'Tomo_10_Neurologia_y_Geriatria_Completo_2026.png', pLeft: 'neuro_page_left.png', pRight: 'neuro_page_right.png', topic: '1.1 Accidente Cerebrovascular Isquémico' }
];

// Pre-load all Base64 images
console.log('Encoding genuine covers and real pages...');
booksMeta.forEach(b => {
  b.b64 = toB64(path.join(COVERS_DIR, b.file));
  if (b.pLeft && fs.existsSync(path.join(BASE_DIR, b.pLeft))) {
    b.pLeftB64 = toB64(path.join(BASE_DIR, b.pLeft));
  }
  if (b.pRight && fs.existsSync(path.join(BASE_DIR, b.pRight))) {
    b.pRightB64 = toB64(path.join(BASE_DIR, b.pRight));
  }
});

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  async function captureScene(sceneKey, categoryDir, htmlGenerator) {
    const formats = [
      { id: '16x9', width: 1920, height: 1080, folder: 'web_16x9_landscape' },
      { id: '1x1', width: 1080, height: 1080, folder: 'social_1x1_instagram_post' },
      { id: '4x5', width: 1080, height: 1350, folder: 'social_4x5_instagram_portrait' },
      { id: '9x16', width: 1080, height: 1920, folder: 'social_9x16_stories_reels' }
    ];

    for (const fmt of formats) {
      await page.setViewport({ width: fmt.width, height: fmt.height, deviceScaleFactor: 1 });
      const html = htmlGenerator(fmt.width, fmt.height, fmt.id);
      await page.setContent(html, { waitUntil: 'load' });
      
      // Save to format folder
      const fmtPath = path.join(OUTPUT_DIR, fmt.folder, `${sceneKey}_${fmt.id}.jpg`);
      await page.screenshot({ path: fmtPath, type: 'jpeg', quality: 95 });

      // If 16x9 or 1x1, also save a copy to the category directory for direct viewing
      if (fmt.id === '16x9') {
        const catPath = path.join(OUTPUT_DIR, categoryDir, `${sceneKey}.jpg`);
        fs.copyFileSync(fmtPath, catPath);
      }
    }
    console.log(`✓ Completed Scene: ${sceneKey} (all 4 social formats)`);
  }

  // =========================================================================
  // 1. STANDING 5 ANGLES (ALL 10 REAL BOOKS TOGETHER)
  // =========================================================================

  // S1: 3D Isometric Domino Lineup
  await captureScene('S1_standing_isometric_domino', '01_standing_collection', (w, h, fmt) => {
    const isVertical = fmt === '9x16' || fmt === '4x5';
    const isSquare = fmt === '1x1';
    
    // In vertical / square, render in 2 tiers so books are large and clear!
    if (isVertical || isSquare) {
      const row1 = booksMeta.slice(0, 5);
      const row2 = booksMeta.slice(5, 10);
      const scale = fmt === '9x16' ? 1.05 : 0.85;
      return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          width: ${w}px; height: ${h}px;
          background: radial-gradient(circle at 50% 20%, #ffffff 0%, #edf1f7 100%);
          font-family: system-ui, -apple-system, sans-serif;
          display: flex; flex-direction: column; align-items: center; justify-content: ${fmt === '9x16' ? 'center' : 'space-evenly'};
          overflow: hidden; padding: 30px 20px;
        }
        .header { text-align: center; margin-bottom: 20px; }
        .tag { font-size: 14px; font-weight: 800; letter-spacing: 0.22em; color: #0284c7; text-transform: uppercase; }
        h1 { font-size: ${fmt === '9x16' ? 36 : 30}px; font-weight: 900; color: #0f172a; margin-top: 6px; }
        p { font-size: 15px; color: #64748b; margin-top: 4px; }
        .grid-stage { display: flex; flex-direction: column; gap: 28px; transform: scale(${scale}); }
        .tier { display: flex; gap: 16px; perspective: 1800px; transform-style: preserve-3d; }
        .book {
          width: 155px; height: 220px; position: relative; transform-style: preserve-3d;
          transform: rotateY(-22deg) rotateX(4deg);
        }
        .book::after {
          content: ''; position: absolute; bottom: -14px; left: 8px; width: 145px; height: 20px;
          background: rgba(15, 23, 42, 0.4); filter: blur(8px); transform: rotateX(85deg) skewX(-20deg);
        }
        .front {
          position: absolute; inset: 0; border-radius: 3px; background-size: cover; background-position: center;
          transform: translateZ(12px); box-shadow: inset 3px 0 5px rgba(0,0,0,0.3);
        }
        .spine {
          position: absolute; top: 0; bottom: 0; left: 0; width: 24px;
          transform: rotateY(-90deg) translateZ(0px); transform-origin: left;
          display: flex; flex-direction: column; justify-content: space-between; padding: 10px 2px;
        }
        .spine-title {
          writing-mode: vertical-rl; transform: rotate(180deg);
          font-size: 8px; font-weight: 700; color: #ffffff; letter-spacing: 0.1em; text-transform: uppercase; margin: auto;
        }
        .spine-badge { font-size: 8px; font-weight: 800; color: #fff; text-align: center; }
        .pages-right {
          position: absolute; top: 2px; bottom: 2px; right: 0; width: 24px;
          background: repeating-linear-gradient(to right, #f8fafc 0px, #e2e8f0 1px, #f8fafc 2px);
          transform: rotateY(90deg) translateZ(12px); transform-origin: right;
        }
      </style></head><body>
        <div class="header">
          <div class="tag">COLECCIÓN OFICIAL EUNACOM 2026</div>
          <h1>Módulo 1: Medicina Interna</h1>
          <p>10 Tomos Clínicos de Alta Densidad · 1ª Edición</p>
        </div>
        <div class="grid-stage">
          <div class="tier">
            ${row1.map(b => `
              <div class="book">
                <div class="spine" style="background: ${b.color}"><span class="spine-badge">${b.num}</span><span class="spine-title">${b.name}</span><span class="spine-badge">${b.code}</span></div>
                <div class="pages-right"></div>
                <div class="front" style="background-image: url('${b.b64}')"></div>
              </div>
            `).join('')}
          </div>
          <div class="tier">
            ${row2.map(b => `
              <div class="book">
                <div class="spine" style="background: ${b.color}"><span class="spine-badge">${b.num}</span><span class="spine-title">${b.name}</span><span class="spine-badge">${b.code}</span></div>
                <div class="pages-right"></div>
                <div class="front" style="background-image: url('${b.b64}')"></div>
              </div>
            `).join('')}
          </div>
        </div>
      </body></html>`;
    }

    // Horizontal 16:9 full single-row panorama
    return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        width: 1920px; height: 1080px;
        background: radial-gradient(circle at 50% 15%, #ffffff 0%, #eef2f7 100%);
        font-family: system-ui, -apple-system, sans-serif;
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        overflow: hidden;
      }
      .header { text-align: center; margin-bottom: 25px; }
      .tag { font-size: 13px; font-weight: 800; letter-spacing: 0.22em; color: #ea580c; text-transform: uppercase; }
      h1 { font-size: 34px; font-weight: 900; color: #0f172a; margin-top: 6px; }
      p { font-size: 15px; color: #64748b; margin-top: 4px; }
      .stage {
        margin-top: 20px; display: flex; gap: 16px; perspective: 2600px; transform-style: preserve-3d;
        transform: scale(1.15);
      }
      .book {
        width: 148px; height: 210px; position: relative; transform-style: preserve-3d;
        transform: rotateY(-24deg) rotateX(4deg);
      }
      .book::after {
        content: ''; position: absolute; bottom: -18px; left: 8px; width: 138px; height: 24px;
        background: rgba(15, 23, 42, 0.42); filter: blur(9px); transform: rotateX(85deg) skewX(-20deg);
      }
      .front {
        position: absolute; inset: 0; border-radius: 2px; background-size: cover; background-position: center;
        transform: translateZ(12px); box-shadow: inset 3px 0 5px rgba(0,0,0,0.3);
      }
      .front::before {
        content: ''; position: absolute; inset: 0;
        background: linear-gradient(115deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.02) 40%, rgba(0,0,0,0.22) 100%);
      }
      .spine {
        position: absolute; top: 0; bottom: 0; left: 0; width: 24px;
        transform: rotateY(-90deg) translateZ(0px); transform-origin: left;
        display: flex; flex-direction: column; justify-content: space-between; padding: 10px 2px;
      }
      .spine-title {
        writing-mode: vertical-rl; transform: rotate(180deg);
        font-size: 8px; font-weight: 700; color: #ffffff; letter-spacing: 0.1em; text-transform: uppercase; margin: auto;
      }
      .spine-badge { font-size: 8px; font-weight: 800; color: #fff; text-align: center; }
      .pages-right {
        position: absolute; top: 2px; bottom: 2px; right: 0; width: 24px;
        background: repeating-linear-gradient(to right, #f8fafc 0px, #e2e8f0 1px, #f8fafc 2px);
        transform: rotateY(90deg) translateZ(12px); transform-origin: right;
      }
    </style></head><body>
      <div class="header">
        <div class="tag">PERSPECTIVA ISOMÉTRICA 3D · 10 TOMOS</div>
        <h1>Módulo 1: Medicina Interna</h1>
        <p>Alineación Editorial con Portadas y Lomos Corporativos Auténticos</p>
      </div>
      <div class="stage">
        ${booksMeta.map(b => `
          <div class="book">
            <div class="spine" style="background: ${b.color}"><span class="spine-badge">${b.num}</span><span class="spine-title">${b.name}</span><span class="spine-badge">${b.code}</span></div>
            <div class="pages-right"></div>
            <div class="front" style="background-image: url('${b.b64}')"></div>
          </div>
        `).join('')}
      </div>
    </body></html>`;
  });

  // S2: 3D Semicircular Curved Arc
  await captureScene('S2_standing_curved_arc', '01_standing_collection', (w, h, fmt) => {
    const isVertical = fmt === '9x16' || fmt === '4x5';
    const scale = isVertical ? (w / 1920) * 1.55 : 1.12;
    return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        width: ${w}px; height: ${h}px;
        background: radial-gradient(circle at 50% 25%, #ffffff 0%, #e2e8f0 100%);
        font-family: system-ui, -apple-system, sans-serif;
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        overflow: hidden;
      }
      .header { text-align: center; margin-bottom: 25px; }
      .tag { font-size: 13px; font-weight: 800; letter-spacing: 0.22em; color: #15803d; text-transform: uppercase; }
      h1 { font-size: ${w > 1200 ? 34 : 28}px; font-weight: 900; color: #0f172a; margin-top: 6px; }
      p { font-size: 15px; color: #64748b; margin-top: 4px; }
      .stage {
        margin-top: 25px; display: flex; justify-content: center;
        perspective: 2200px; transform-style: preserve-3d;
        transform: scale(${scale});
      }
      .book-container {
        position: relative; width: 148px; height: 210px; margin: 0 4px; transform-style: preserve-3d;
      }
      .book { width: 100%; height: 100%; position: relative; transform-style: preserve-3d; }
      .book::after {
        content: ''; position: absolute; bottom: -18px; left: 5px; width: 138px; height: 24px;
        background: rgba(15, 23, 42, 0.4); filter: blur(8px); transform: rotateX(85deg);
      }
      .front {
        position: absolute; inset: 0; border-radius: 2px; background-size: cover; background-position: center;
        transform: translateZ(12px); box-shadow: inset 2px 0 4px rgba(0,0,0,0.3);
      }
      .spine {
        position: absolute; top: 0; bottom: 0; left: 0; width: 24px;
        transform: rotateY(-90deg) translateZ(0px); transform-origin: left;
        display: flex; flex-direction: column; justify-content: space-between; padding: 10px 2px;
      }
      .spine-title {
        writing-mode: vertical-rl; transform: rotate(180deg);
        font-size: 8px; font-weight: 700; color: #ffffff; letter-spacing: 0.1em; text-transform: uppercase; margin: auto;
      }
      .spine-badge { font-size: 8px; font-weight: 800; color: #fff; text-align: center; }
      .pages-right {
        position: absolute; top: 2px; bottom: 2px; right: 0; width: 24px;
        background: repeating-linear-gradient(to right, #f8fafc 0px, #e2e8f0 1px, #f8fafc 2px);
        transform: rotateY(90deg) translateZ(12px); transform-origin: right;
      }
    </style></head><body>
      <div class="header">
        <div class="tag">PERSPECTIVA CURVA PANORÁMICA</div>
        <h1>10 Libros en Arco Semicircular</h1>
        <p>Visibilidad Óptima de Portada y Título en Cada Tomo</p>
      </div>
      <div class="stage">
        ${booksMeta.map((b, i) => {
          const rel = i - 4.5;
          const rotY = rel * -5.5;
          const transZ = -Math.abs(rel) * 16;
          return `
            <div class="book-container" style="transform: rotateY(${rotY}deg) translateZ(${transZ}px);">
              <div class="book">
                <div class="spine" style="background: ${b.color}"><span class="spine-badge">${b.num}</span><span class="spine-title">${b.name}</span><span class="spine-badge">${b.code}</span></div>
                <div class="pages-right"></div>
                <div class="front" style="background-image: url('${b.b64}')"></div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </body></html>`;
  });

  // S3: Two-Tier Podium Structure
  await captureScene('S3_standing_two_tier_podium', '01_standing_collection', (w, h, fmt) => {
    const row1 = booksMeta.slice(0, 5);
    const row2 = booksMeta.slice(5, 10);
    const scale = fmt === '9x16' ? 1.05 : (w < 1200 ? 0.85 : 1.15);
    return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        width: ${w}px; height: ${h}px;
        background: radial-gradient(circle at 50% 20%, #ffffff 0%, #edf2f7 100%);
        font-family: system-ui, -apple-system, sans-serif;
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        overflow: hidden;
      }
      .header { text-align: center; margin-bottom: 25px; }
      .tag { font-size: 13px; font-weight: 800; letter-spacing: 0.22em; color: #0f766e; text-transform: uppercase; }
      h1 { font-size: ${w > 1200 ? 34 : 28}px; font-weight: 900; color: #0f172a; margin-top: 6px; }
      p { font-size: 15px; color: #64748b; margin-top: 4px; }
      .podium { display: flex; flex-direction: column; align-items: center; gap: 24px; transform: scale(${scale}); }
      .tier { display: flex; gap: 26px; }
      .card {
        width: 165px; height: 233px; position: relative; border-radius: 3px; overflow: hidden;
        box-shadow: 0 16px 28px rgba(15,23,42,0.22), 0 4px 10px rgba(15,23,42,0.1);
        border-left: 7px solid #111;
      }
      .card img { width: 100%; height: 100%; object-fit: cover; }
      .tomo-lbl {
        position: absolute; bottom: -28px; left: 50%; transform: translateX(-50%);
        font-size: 12px; font-weight: 800; color: #334155; white-space: nowrap;
      }
    </style></head><body>
      <div class="header">
        <div class="tag">ESTRUCTURA ESCALONADA · DOS NIVELES</div>
        <h1>Podio Editorial Completo</h1>
        <p>Tomo 01 al 05 (Superior) · Tomo 06 al 10 (Inferior)</p>
      </div>
      <div class="podium">
        <div class="tier">
          ${row1.map(b => `
            <div style="position: relative; margin-bottom: 25px;">
              <div class="card" style="border-left-color: ${b.color}"><img src="${b.b64}"></div>
              <div class="tomo-lbl">Tomo ${b.num} · ${b.code}</div>
            </div>
          `).join('')}
        </div>
        <div class="tier">
          ${row2.map(b => `
            <div style="position: relative; margin-bottom: 25px;">
              <div class="card" style="border-left-color: ${b.color}"><img src="${b.b64}"></div>
              <div class="tomo-lbl">Tomo ${b.num} · ${b.code}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </body></html>`;
  });

  // S4: Frontal Hero Showcase with Floor Reflection
  await captureScene('S4_standing_frontal_hero', '01_standing_collection', (w, h, fmt) => {
    const scale = w < 1200 ? (w / 1920) * 1.5 : 1.15;
    return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        width: ${w}px; height: ${h}px;
        background: linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%);
        font-family: system-ui, -apple-system, sans-serif;
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        overflow: hidden;
      }
      .header { text-align: center; margin-bottom: 30px; }
      .tag { font-size: 13px; font-weight: 800; letter-spacing: 0.22em; color: #7c3aed; text-transform: uppercase; }
      h1 { font-size: ${w > 1200 ? 34 : 28}px; font-weight: 900; color: #0f172a; margin-top: 6px; }
      p { font-size: 15px; color: #64748b; margin-top: 4px; }
      .stage { display: flex; gap: 14px; align-items: flex-end; transform: scale(${scale}); }
      .book-card {
        width: 148px; height: 210px; position: relative; background: #fff; border-radius: 2px;
        box-shadow: 0 16px 28px rgba(15,23,42,0.22); border-left: 6px solid #111;
      }
      .book-card img { width: 100%; height: 100%; object-fit: cover; border-radius: 2px; }
      .refl {
        position: absolute; bottom: -212px; left: 0; right: 0; height: 210px;
        transform: scaleY(-1); opacity: 0.15; filter: blur(1px);
        mask-image: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%);
        -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%);
      }
    </style></head><body>
      <div class="header">
        <div class="tag">EXHIBICIÓN LINEAL DEPORTIVA</div>
        <h1>Línea de Portadas Oficiales 2026</h1>
        <p>Fidelidad Gráfica Absoluta con Reflejo de Estudio</p>
      </div>
      <div class="stage">
        ${booksMeta.map(b => `
          <div class="book-card" style="border-left-color: ${b.color}">
            <img src="${b.b64}">
            <div class="refl"><img src="${b.b64}" style="width: 100%; height: 100%; object-fit: cover;"></div>
          </div>
        `).join('')}
      </div>
    </body></html>`;
  });

  // S5: Dark Studio Luxury Stage (Dark Navy & Glowing Accents)
  await captureScene('S5_standing_dark_luxury', '01_standing_collection', (w, h, fmt) => {
    const scale = w < 1200 ? (w / 1920) * 1.5 : 1.15;
    return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        width: ${w}px; height: ${h}px;
        background: radial-gradient(circle at 50% 25%, #172554 0%, #0b1329 70%, #020617 100%);
        font-family: system-ui, -apple-system, sans-serif;
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        overflow: hidden; color: #fff;
      }
      .header { text-align: center; margin-bottom: 25px; }
      .tag { font-size: 13px; font-weight: 800; letter-spacing: 0.22em; color: #38bdf8; text-transform: uppercase; }
      h1 { font-size: ${w > 1200 ? 34 : 28}px; font-weight: 900; color: #f8fafc; margin-top: 6px; }
      p { font-size: 15px; color: #94a3b8; margin-top: 4px; }
      .stage { display: flex; gap: 16px; perspective: 2400px; transform-style: preserve-3d; transform: scale(${scale}); }
      .book {
        width: 146px; height: 206px; position: relative; transform-style: preserve-3d;
        transform: rotateY(-24deg) rotateX(4deg);
      }
      .glow {
        position: absolute; bottom: -12px; left: -10px; right: -10px; height: 26px;
        filter: blur(14px); opacity: 0.65; z-index: -2;
      }
      .front {
        position: absolute; inset: 0; border-radius: 2px; background-size: cover; background-position: center;
        transform: translateZ(12px); box-shadow: inset 3px 0 5px rgba(0,0,0,0.5);
      }
      .spine {
        position: absolute; top: 0; bottom: 0; left: 0; width: 24px;
        transform: rotateY(-90deg) translateZ(0px); transform-origin: left;
        display: flex; flex-direction: column; justify-content: space-between; padding: 10px 2px;
      }
      .spine-title {
        writing-mode: vertical-rl; transform: rotate(180deg);
        font-size: 8px; font-weight: 700; color: #ffffff; letter-spacing: 0.1em; text-transform: uppercase; margin: auto;
      }
      .spine-badge { font-size: 8px; font-weight: 800; color: #fff; text-align: center; }
      .pages-right {
        position: absolute; top: 2px; bottom: 2px; right: 0; width: 24px;
        background: repeating-linear-gradient(to right, #cbd5e1 0px, #94a3b8 1px, #cbd5e1 2px);
        transform: rotateY(90deg) translateZ(12px); transform-origin: right;
      }
    </style></head><body>
      <div class="header">
        <div class="tag">EDICIÓN NOCTURNA DE LUJO</div>
        <h1>Academia Examen EUNACOM</h1>
        <p>Retroiluminación Cromática por Tomo Clínico</p>
      </div>
      <div class="stage">
        ${booksMeta.map(b => `
          <div class="book">
            <div class="glow" style="background: ${b.color};"></div>
            <div class="spine" style="background: ${b.color}"><span class="spine-badge">${b.num}</span><span class="spine-title">${b.name}</span><span class="spine-badge">${b.code}</span></div>
            <div class="pages-right"></div>
            <div class="front" style="background-image: url('${b.b64}')"></div>
          </div>
        `).join('')}
      </div>
    </body></html>`;
  });

  // =========================================================================
  // 2. PER-BOOK 5-PICTURE SUITES (WITH 100% READABLE INTERIOR SPREAD!)
  // =========================================================================

  // We will generate the complete 5-picture suite for flagship books:
  // Tomo 01 Cardio, Tomo 03 Gastro, Tomo 06 Diabetes
  const flagships = [booksMeta[0], booksMeta[2], booksMeta[5]];

  for (const book of flagships) {
    const prefix = `book_${book.num}_${book.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`;

    // Pic 1: Standing 3/4 Hero
    await captureScene(`${prefix}_pic1_standing_hero`, '02_books_5_pictures', (w, h, fmt) => {
      const isVert = fmt === '9x16' || fmt === '4x5';
      const scale = isVert ? 1.05 : 1.35;
      return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          width: ${w}px; height: ${h}px;
          background: radial-gradient(circle at 45% 35%, #ffffff 0%, #edf1f7 100%);
          font-family: system-ui, -apple-system, sans-serif;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          overflow: hidden; padding: 20px;
        }
        .header { text-align: center; margin-bottom: 20px; }
        .badge { font-size: 14px; font-weight: 800; letter-spacing: 0.2em; color: ${book.color}; text-transform: uppercase; }
        h1 { font-size: ${w > 1200 ? 38 : 30}px; font-weight: 900; color: #0f172a; margin-top: 6px; }
        p { font-size: 16px; color: #64748b; margin-top: 4px; }
        .stage { perspective: 2200px; transform-style: preserve-3d; transform: scale(${scale}); margin-top: 25px; }
        .book {
          width: 320px; height: 452px; position: relative; transform-style: preserve-3d;
          transform: rotateY(-24deg) rotateX(4deg);
        }
        .book::after {
          content: ''; position: absolute; bottom: -28px; left: 15px; width: 300px; height: 42px;
          background: rgba(15, 23, 42, 0.45); filter: blur(16px); transform: rotateX(85deg) skewX(-20deg);
        }
        .front {
          position: absolute; inset: 0; border-radius: 3px; background-image: url('${book.b64}'); background-size: cover;
          transform: translateZ(16px); box-shadow: inset 4px 0 8px rgba(0,0,0,0.35);
        }
        .spine {
          position: absolute; top: 0; bottom: 0; left: 0; width: 34px; background: ${book.color};
          transform: rotateY(-90deg) translateZ(0px); transform-origin: left;
          display: flex; flex-direction: column; justify-content: space-between; padding: 18px 4px;
        }
        .spine-title {
          writing-mode: vertical-rl; transform: rotate(180deg);
          font-size: 11px; font-weight: 700; color: #ffffff; letter-spacing: 0.12em; text-transform: uppercase; margin: auto;
        }
        .spine-badge { font-size: 11px; font-weight: 800; color: #fff; text-align: center; }
        .pages-right {
          position: absolute; top: 3px; bottom: 3px; right: 0; width: 34px;
          background: repeating-linear-gradient(to right, #f8fafc 0px, #e2e8f0 1px, #f8fafc 2px);
          transform: rotateY(90deg) translateZ(16px); transform-origin: right;
        }
      </style></head><body>
        <div class="header">
          <div class="badge">TOMO ${book.num} · MEDICINA INTERNA</div>
          <h1>Manual de ${book.name}</h1>
          <p>${book.sub} · Edición Oficial 2026</p>
        </div>
        <div class="stage">
          <div class="book">
            <div class="spine"><span class="spine-badge">${book.num}</span><span class="spine-title">${book.name} ${book.sub}</span><span class="spine-badge">${book.code}</span></div>
            <div class="pages-right"></div>
            <div class="front"></div>
          </div>
        </div>
      </body></html>`;
    });

    // Pic 2: Flat Lay Desk
    await captureScene(`${prefix}_pic2_flatlay_desk`, '02_books_5_pictures', (w, h, fmt) => {
      const isVert = fmt === '9x16' || fmt === '4x5';
      const scale = isVert ? 0.92 : 1.15;
      return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          width: ${w}px; height: ${h}px;
          background: #eae5da; font-family: system-ui, -apple-system, sans-serif;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          overflow: hidden; padding: 25px;
        }
        .header { text-align: center; margin-bottom: 20px; }
        .badge { font-size: 13px; font-weight: 800; letter-spacing: 0.18em; color: ${book.color}; text-transform: uppercase; }
        h1 { font-size: ${w > 1200 ? 32 : 26}px; font-weight: 800; color: #1c1917; margin-top: 4px; }
        .desk { position: relative; width: 880px; height: 680px; display: flex; align-items: center; justify-content: center; transform: scale(${scale}); }
        .book-flat {
          width: 440px; height: 622px; position: relative; border-radius: 4px; overflow: hidden;
          box-shadow: -18px 24px 45px rgba(28,25,23,0.35); border-left: 12px solid ${book.color};
        }
        .book-flat img { width: 100%; height: 100%; object-fit: cover; }
        .stetho {
          position: absolute; right: 40px; top: 110px; width: 220px; height: 400px;
          border: 14px solid #1e293b; border-radius: 110px; border-bottom: none;
          box-shadow: 10px 14px 20px rgba(0,0,0,0.22);
        }
        .stetho-head {
          position: absolute; right: 120px; bottom: 80px; width: 68px; height: 68px;
          background: radial-gradient(circle, #94a3b8 0%, #334155 100%);
          border: 4px solid #0f172a; border-radius: 50%; box-shadow: 6px 8px 14px rgba(0,0,0,0.3);
        }
        .pen {
          position: absolute; left: 80px; top: 160px; width: 14px; height: 360px;
          background: linear-gradient(90deg, #334155 0%, #64748b 50%, #1e293b 100%);
          border-radius: 7px; transform: rotate(-8deg); box-shadow: -8px 10px 18px rgba(0,0,0,0.25);
        }
      </style></head><body>
        <div class="header">
          <div class="badge">ESTUDIO CLÍNICO DIARIO</div>
          <h1>Tomo ${book.num}: ${book.name} en el Escritorio</h1>
        </div>
        <div class="desk">
          <div class="pen"></div>
          <div class="book-flat"><img src="${book.b64}"></div>
          <div class="stetho"></div>
          <div class="stetho-head"></div>
        </div>
      </body></html>`;
    });

    // Pic 3: Staggered Multi-Volume Stack
    await captureScene(`${prefix}_pic3_multi_volume_stack`, '02_books_5_pictures', (w, h, fmt) => {
      const isVert = fmt === '9x16' || fmt === '4x5';
      const scale = isVert ? 0.98 : 1.35;
      const b2 = booksMeta[(parseInt(book.num) % 10)];
      const b3 = booksMeta[(parseInt(book.num) + 1) % 10];
      return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          width: ${w}px; height: ${h}px;
          background: radial-gradient(circle at 50% 30%, #ffffff 0%, #e2e8f0 100%);
          font-family: system-ui, -apple-system, sans-serif;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          overflow: hidden; padding: 25px;
        }
        .header { text-align: center; margin-bottom: 25px; }
        .badge { font-size: 13px; font-weight: 800; letter-spacing: 0.18em; color: ${book.color}; text-transform: uppercase; }
        h1 { font-size: ${w > 1200 ? 36 : 28}px; font-weight: 800; color: #0f172a; margin-top: 4px; }
        p { font-size: 15px; color: #64748b; margin-top: 4px; }
        .stage { position: relative; width: 380px; height: 500px; perspective: 2200px; transform-style: preserve-3d; transform: scale(${scale}); margin-top: 30px; }
        .book-layer { position: absolute; width: 340px; height: 480px; border-radius: 4px; transform-style: preserve-3d; }
        .b-bottom {
          bottom: 0px; left: 0px; transform: rotateX(55deg) rotateZ(-32deg) translateZ(0px);
          box-shadow: -20px 30px 45px rgba(15,23,42,0.4); border-left: 14px solid ${b3.color}; border-bottom: 12px solid #e2e8f0;
        }
        .b-bottom img { width: 100%; height: 100%; object-fit: cover; opacity: 0.7; }
        .b-mid {
          bottom: 22px; left: 16px; transform: rotateX(55deg) rotateZ(-32deg) translateZ(26px);
          box-shadow: -15px 20px 35px rgba(15,23,42,0.35); border-left: 14px solid ${b2.color}; border-bottom: 12px solid #e2e8f0;
        }
        .b-mid img { width: 100%; height: 100%; object-fit: cover; opacity: 0.85; }
        .b-top {
          bottom: 44px; left: 32px; transform: rotateX(55deg) rotateZ(-32deg) translateZ(52px);
          box-shadow: -18px 24px 40px rgba(15,23,42,0.4); border-left: 14px solid ${book.color}; border-bottom: 12px solid #e2e8f0;
        }
        .b-top img { width: 100%; height: 100%; object-fit: cover; }
      </style></head><body>
        <div class="header">
          <div class="badge">COLECCIÓN DE ALTA DENSIDAD</div>
          <h1>Trilogía de Especialidades Clínicas</h1>
          <p>Tomo ${book.num} (${book.name}), Tomo ${b2.num} (${b2.name}), Tomo ${b3.num} (${b3.name})</p>
        </div>
        <div class="stage">
          <div class="book-layer b-bottom"><img src="${b3.b64}"></div>
          <div class="book-layer b-mid"><img src="${b2.b64}"></div>
          <div class="book-layer b-top"><img src="${book.b64}"></div>
        </div>
      </body></html>`;
    });

    // Pic 4: OPEN BOOK SPREAD (100% REAL READABLE INTERIOR!)
    await captureScene(`${prefix}_pic4_open_readable_spread`, '02_books_5_pictures', (w, h, fmt) => {
      const is9x16 = fmt === '9x16';
      const is4x5 = fmt === '4x5';
      const isSquare = fmt === '1x1';
      
      // In 9x16 (Stories/Reels), layout optimized vertically so the text is huge and readable!
      if (is9x16) {
        return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            width: ${w}px; height: ${h}px;
            background: radial-gradient(circle at 50% 20%, #ffffff 0%, #edf1f7 100%);
            font-family: system-ui, -apple-system, sans-serif;
            display: flex; flex-direction: column; align-items: center; justify-content: space-between;
            overflow: hidden; padding: 70px 40px;
          }
          .top-box { text-align: center; }
          .badge {
            display: inline-block; padding: 6px 18px; background: ${book.color}; color: #fff;
            font-size: 13px; font-weight: 800; letter-spacing: 0.18em; border-radius: 20px; text-transform: uppercase;
          }
          h1 { font-size: 38px; font-weight: 900; color: #0f172a; margin-top: 14px; }
          p { font-size: 17px; color: #475569; margin-top: 6px; font-weight: 500; }
          
          .open-book-spread {
            width: 1000px; height: 710px; display: flex; position: relative;
            box-shadow: 0 30px 60px rgba(15,23,42,0.3); border-radius: 4px; background: #fff;
          }
          .open-book-spread::after {
            content: ''; position: absolute; top: 0; bottom: 0; left: 50%; width: 44px;
            transform: translateX(-50%);
            background: linear-gradient(90deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.18) 100%);
            pointer-events: none; z-index: 10;
          }
          .page-leaf { width: 500px; height: 100%; overflow: hidden; background: #fff; }
          .page-leaf img { width: 100%; height: 100%; object-fit: contain; }
          
          .bottom-card {
            background: #ffffff; padding: 22px 36px; border-radius: 16px; width: 100%;
            display: flex; align-items: center; justify-content: space-between;
            box-shadow: 0 16px 32px rgba(15,23,42,0.1); border-left: 8px solid ${book.color};
          }
          .bottom-info h2 { font-size: 20px; font-weight: 800; color: #0f172a; }
          .bottom-info span { font-size: 14px; color: #64748b; font-weight: 500; }
          .cta-btn {
            background: #0f172a; color: #fff; padding: 12px 24px; border-radius: 10px;
            font-size: 14px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;
          }
        </style></head><body>
          <div class="top-box">
            <div class="badge">TOMO ${book.num} · INTERIOR OFICIAL REAL</div>
            <h1>${book.name}</h1>
            <p>${book.topic}</p>
          </div>
          <div class="open-book-spread">
            <div class="page-leaf"><img src="${book.pLeftB64}"></div>
            <div class="page-leaf"><img src="${book.pRightB64}"></div>
          </div>
          <div class="bottom-card">
            <div class="bottom-info">
              <h2>Academia Examen EUNACOM</h2>
              <span>Manuales Impresos & Digitales 2026</span>
            </div>
            <div class="cta-btn">Estudiar Ahora →</div>
          </div>
        </body></html>`;
      }

      // 16:9, 1:1, 4:5
      const scale = is4x5 ? 0.95 : (isSquare ? 0.95 : 1.25);
      return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          width: ${w}px; height: ${h}px;
          background: radial-gradient(circle at 50% 25%, #ffffff 0%, #edf1f6 100%);
          font-family: system-ui, -apple-system, sans-serif;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          overflow: hidden; padding: 25px;
        }
        .header { text-align: center; margin-bottom: 20px; }
        .badge { font-size: 13px; font-weight: 800; letter-spacing: 0.18em; color: ${book.color}; text-transform: uppercase; }
        h1 { font-size: ${w > 1200 ? 34 : 26}px; font-weight: 900; color: #0f172a; margin-top: 4px; }
        p { font-size: 15px; color: #64748b; margin-top: 2px; }
        .composition {
          display: flex; align-items: center; justify-content: center; gap: 36px;
          transform: scale(${scale}); margin-top: 25px;
        }
        .open-book {
          display: flex; position: relative;
          box-shadow: 0 25px 50px rgba(15,23,42,0.28); border-radius: 4px; background: #fff;
        }
        .open-book::after {
          content: ''; position: absolute; top: 0; bottom: 0; left: 50%; width: 44px;
          transform: translateX(-50%);
          background: linear-gradient(90deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.18) 100%);
          pointer-events: none; z-index: 10;
        }
        .page-leaf { width: 410px; height: 580px; position: relative; overflow: hidden; background: #fff; }
        .page-left { border-top-left-radius: 4px; border-bottom-left-radius: 4px; }
        .page-right { border-top-right-radius: 4px; border-bottom-right-radius: 4px; }
        .page-leaf img { width: 100%; height: 100%; object-fit: contain; display: block; }
        .companion-book {
          width: 210px; height: 296px; position: relative;
          transform: rotateY(-18deg) rotateX(4deg); transform-style: preserve-3d;
          box-shadow: 0 20px 35px rgba(15,23,42,0.3); border-radius: 3px; overflow: hidden;
          border-left: 9px solid ${book.color};
        }
        .companion-book img { width: 100%; height: 100%; object-fit: cover; }
      </style></head><body>
        <div class="header">
          <div class="badge">INTERIOR OFICIAL · 100% LEGIBLE</div>
          <h1>Tomo ${book.num}: ${book.name} — Páginas Reales</h1>
          <p>${book.topic}</p>
        </div>
        <div class="composition">
          <div class="open-book">
            <div class="page-leaf page-left"><img src="${book.pLeftB64}"></div>
            <div class="page-leaf page-right"><img src="${book.pRightB64}"></div>
          </div>
          <div class="companion-book"><img src="${book.b64}"></div>
        </div>
      </body></html>`;
    });

    // Pic 5: Macro Cinematic Closeup
    await captureScene(`${prefix}_pic5_macro_closeup`, '02_books_5_pictures', (w, h, fmt) => {
      const isVert = fmt === '9x16' || fmt === '4x5';
      const scale = isVert ? 1.05 : 1.3;
      return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          width: ${w}px; height: ${h}px;
          background: radial-gradient(circle at 40% 40%, #1e293b 0%, #0b1329 100%);
          font-family: system-ui, -apple-system, sans-serif;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          overflow: hidden; color: #fff; padding: 25px;
        }
        .header { text-align: center; margin-bottom: 25px; }
        .badge { font-size: 13px; font-weight: 800; letter-spacing: 0.22em; color: ${book.color}; text-transform: uppercase; }
        h1 { font-size: ${w > 1200 ? 36 : 28}px; font-weight: 800; color: #f8fafc; margin-top: 6px; }
        p { font-size: 15px; color: #94a3b8; margin-top: 4px; }
        .stage { position: relative; width: 620px; height: 420px; perspective: 1200px; transform-style: preserve-3d; transform: scale(${scale}); margin-top: 25px; }
        .macro-card {
          width: 100%; height: 100%; position: relative;
          transform: rotateX(24deg) rotateY(-18deg) rotateZ(4deg);
          box-shadow: -25px 35px 60px rgba(0,0,0,0.65); border-radius: 6px; overflow: hidden;
          border-left: 16px solid ${book.color};
        }
        .macro-card img { width: 130%; height: 130%; object-fit: cover; position: absolute; bottom: 0; left: 0; }
        .macro-card::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.02) 45%, rgba(0,0,0,0.35) 100%);
          z-index: 5; pointer-events: none;
        }
      </style></head><body>
        <div class="header">
          <div class="badge">DETALLE EDITORIAL · MACRO CINEMÁTICO</div>
          <h1>Tomo ${book.num} · Calidad de Portada Real</h1>
          <p>Academia Examen EUNACOM · Acabado Satinado Mate</p>
        </div>
        <div class="stage">
          <div class="macro-card"><img src="${book.b64}"></div>
        </div>
      </body></html>`;
    });
  }

  await browser.close();
  console.log('\n======================================================');
  console.log('ALL AUTHENTIC 3D RENDERS AND SOCIAL FORMATS GENERATED!');
  console.log('======================================================\n');
}

run().catch(err => {
  console.error('Fatal error in rendering pipeline:', err);
  process.exit(1);
});
