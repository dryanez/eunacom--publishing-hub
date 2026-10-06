// Video con JavaScript: cada escena es una página HTML que define window.SCENE = {duration, fps?} y window.render(t)
// (dibuja el cuadro del instante t, siempre igual para el mismo t). Chromium sin interfaz dibuja cada cuadro y ffmpeg
// los une en un MP4.
//   node classes/scripts/jsvideo/render.cjs <escena> <clase>/<archivo>          → classes/media/animaciones/<clase>/<archivo>.mp4
//   node classes/scripts/jsvideo/render.cjs <escena> --sheet <salida.png> [n]   → hoja de contacto (n cuadros) para revisar
//   node classes/scripts/jsvideo/render.cjs <escena> --frames <salida_dir> t1 t2 …   → cuadros sueltos (storyboard)
const { chromium } = require('playwright');
const { spawn, execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const HERE = __dirname;
const [scene, ...rest] = process.argv.slice(2);
if (!scene) { console.error('uso: render.cjs <escena> <clase>/<archivo> | --sheet out.png [n] | --frames dir t…'); process.exit(1); }
const W = 1280, H = 720;

async function open() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  const [name, q] = scene.split('?');
  await page.goto('file://' + path.join(HERE, 'scenes', name + '.html') + (q ? '?' + q : ''));
  await page.waitForFunction(() => window.READY === true);
  const info = await page.evaluate(() => window.SCENE);
  return { browser, page, info };
}

async function shot(page, t) {
  await page.evaluate(t => window.render(t), t);   // render puede ser async (cuadros de video)
  return page.screenshot({ type: 'png', clip: { x: 0, y: 0, width: W, height: H } });
}

(async () => {
  const { browser, page, info } = await open();
  const fps = info.fps || 30, dur = info.duration;

  if (rest[0] === '--frames') {
    const dir = rest[1]; fs.mkdirSync(dir, { recursive: true });
    for (const t of rest.slice(2).map(Number)) fs.writeFileSync(path.join(dir, `t${t.toFixed(1).padStart(6, '0')}.png`), await shot(page, t));
  } else if (rest[0] === '--sheet') {
    const out = rest[1], n = +(rest[2] || 12);
    const tmp = fs.mkdtempSync('/tmp/jsv_');
    for (let i = 0; i < n; i++) fs.writeFileSync(path.join(tmp, `f${String(i).padStart(3, '0')}.png`), await shot(page, (dur * (i + 0.5)) / n));
    const cols = 4, rows = Math.ceil(n / cols);
    execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-i', path.join(tmp, 'f%03d.png'),
      '-vf', `scale=480:-1,tile=${cols}x${rows}:padding=6:color=white`, '-frames:v', '1', out]);
    fs.rmSync(tmp, { recursive: true });
  } else {
    const out = path.join(HERE, '..', '..', 'media', 'animaciones', rest[0] + '.mp4');
    fs.mkdirSync(path.dirname(out), { recursive: true });
    const ff = spawn('ffmpeg', ['-loglevel', 'error', '-y', '-f', 'image2pipe', '-framerate', String(fps), '-i', '-',
      '-c:v', 'libx264', '-crf', '24', '-preset', 'slow', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an', out],
      { stdio: ['pipe', 'inherit', 'inherit'] });
    const total = Math.round(dur * fps);
    for (let f = 0; f < total; f++) {
      const buf = await shot(page, f / fps);
      if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
      if (f % fps === 0) process.stdout.write(`\r${scene}: ${Math.round((100 * f) / total)}%`);
    }
    ff.stdin.end();
    await new Promise(r => ff.on('close', r));
    console.log(`\nok ${path.relative(process.cwd(), out)} ${Math.round(fs.statSync(out).size / 1024)} KB`);
  }
  await browser.close();
})();
