// Renderiza una clase completa (scenes/clase.html) en paralelo y le pone la narración.
//   node classes/scripts/jsvideo/build_class.cjs <clase>          (primero: tiempos y voz)
//   node classes/scripts/jsvideo/render_class.cjs <clase> [--workers 4] [--from s --to s]
// Salida: classes/scripts/jsvideo/out/<clase>/<clase>_clase.mp4
const { chromium } = require('playwright');
const { spawn, execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const args = process.argv.slice(2);
const id = args[0];
const opt = k => { const i = args.indexOf('--' + k); return i >= 0 ? args[i + 1] : null; };
const WORKERS = +(opt('workers') || Math.max(1, os.cpus().length));
const OUT = path.join(__dirname, 'out', id);
const W = 1280, H = 720, FPS = 30;

async function worker(w, f0, f1, file) {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: W, height: H } });
  await page.goto('file://' + path.join(__dirname, 'scenes', 'clase.html') + '?c=' + id);
  await page.waitForFunction(() => window.READY === true);
  const ff = spawn('ffmpeg', ['-loglevel', 'error', '-y', '-f', 'image2pipe', '-framerate', String(FPS), '-i', '-',
    '-c:v', 'libx264', '-crf', '23', '-preset', 'medium', '-pix_fmt', 'yuv420p', '-an', file], { stdio: ['pipe', 'inherit', 'inherit'] });
  for (let f = f0; f < f1; f++) {
    await page.evaluate(t => window.render(t), f / FPS);
    const buf = await page.screenshot({ type: 'jpeg', quality: 92, clip: { x: 0, y: 0, width: W, height: H } });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    PROG[w] = (f - f0 + 1) / (f1 - f0);
  }
  ff.stdin.end(); await new Promise(r => ff.on('close', r)); await browser.close();
}

const PROG = [];
(async () => {
  global.window = {}; eval(fs.readFileSync(path.join(OUT, 'data.js'), 'utf8'));
  const total = window.CLASS.total;
  const from = +(opt('from') || 0), to = Math.min(total, +(opt('to') || total));
  const F0 = Math.round(from * FPS), F1 = Math.round(to * FPS), per = Math.ceil((F1 - F0) / WORKERS);
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'clase_'));
  const parts = [...Array(WORKERS)].map((_, w) => ({ w, f0: F0 + w * per, f1: Math.min(F1, F0 + (w + 1) * per), file: path.join(tmp, `p${w}.mp4`) }))
    .filter(p => p.f1 > p.f0);
  const t0 = Date.now();
  const tick = setInterval(() => {
    const k = PROG.reduce((a, b) => a + (b || 0), 0) / parts.length, el = (Date.now() - t0) / 1000;
    process.stdout.write(`\r${id}: ${(100 * k).toFixed(1)}%  ${Math.round(el)} s, faltan ~${k > 0.01 ? Math.round(el / k - el) : '?'} s   `);
  }, 2000);
  await Promise.all(parts.map(p => worker(p.w, p.f0, p.f1, p.file)));
  clearInterval(tick);
  fs.writeFileSync(path.join(tmp, 'list.txt'), parts.map(p => `file '${p.file}'`).join('\n'));
  const out = path.join(OUT, `${id}_clase${from || to < total ? `_${Math.round(from)}-${Math.round(to)}` : ''}.mp4`);
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-f', 'concat', '-safe', '0', '-i', path.join(tmp, 'list.txt'),
    '-ss', String(from), '-t', String(to - from), '-i', path.join(OUT, 'narracion.m4a'),
    '-map', '0:v', '-map', '1:a', '-c:v', 'copy', '-c:a', 'copy', '-movflags', '+faststart', '-shortest', out]);
  fs.rmSync(tmp, { recursive: true });
  console.log(`\nok ${path.relative(process.cwd(), out)} ${(fs.statSync(out).size / 1048576).toFixed(1)} MB, ${Math.round((Date.now() - t0) / 1000)} s`);
})().catch(e => { console.error(e); process.exit(1); });
