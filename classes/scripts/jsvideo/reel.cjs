// Reels por bloques (1080x1920, 30 fps) para los formatos de redes que no son «pregunta real + animación»:
// Verdadero o falso · Solo la animación · Clase en 60 s · 3 preguntas en 60 s · La trampa (A vs B).
// La ficha vive en reels/<id>.json: una lista de bloques ("beats") con lo que se dice y lo que se ve.
// Bloques: hook · vf · count · verdict · clip · points · quiz · reveal · compare · rule · cta (ver scenes/reel.html).
//
//   node classes/scripts/jsvideo/reel.cjs build <id>               → voz, tiempos, audio, cuadros de los clips
//   node classes/scripts/jsvideo/reel.cjs frames <id> t1 t2 …      → PNG para revisar (out/reels/<id>/review/)
//   node classes/scripts/jsvideo/reel.cjs render <id> [--workers 6] → out/reels/<id>_reel.mp4 (+ <id>_post.txt)
//   node classes/scripts/jsvideo/reel.cjs all <id>                 → build + render (y borra los cuadros intermedios)
// Voz: Edge es-CL-LorenzoNeural +10 % (necesita red). Chrome del sistema: CHROME_PATH=".../Google Chrome".
const fs = require('fs'), path = require('path'), os = require('os'), crypto = require('crypto');
const { spawn, execFileSync } = require('child_process');

const HERE = __dirname, ROOT = path.join(HERE, '..', '..', '..');
const args = process.argv.slice(2), [cmd, id] = args;
const opt = k => { const i = args.indexOf('--' + k); return i >= 0 ? args[i + 1] : null; };
const VOICE = opt('voice') || 'es-CL-LorenzoNeural', RATE = opt('rate') || '+10%';
const W = 1080, H = 1920, FPS = 30;
const OUT = path.join(HERE, 'out', 'reels', id || '_');
const SPEC_FILE = path.join(HERE, 'reels', (id || '_') + '.json');
const dur = f => +execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f]).toString().trim();

// ---------------------------------------------------------------- voz con marcas de palabra (igual que short.cjs)
let TTS;
async function speak(text, out) {
  if (!TTS) TTS = require(path.join(os.homedir(), 'fotos_tools', 'node_tts', 'node_modules', 'msedge-tts'));
  const { MsEdgeTTS, OUTPUT_FORMAT } = TTS;
  const tts = new MsEdgeTTS();
  await tts.setMetadata(VOICE, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3, { wordBoundaryEnabled: true });
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'reel-tts-'));
  const r = await tts.toFile(dir, text, { rate: RATE });
  fs.copyFileSync(r.audioFilePath, out);
  const meta = JSON.parse(fs.readFileSync(r.metadataFilePath, 'utf8')).Metadata
    .filter(m => m.Type === 'WordBoundary').map(m => ({ w: m.Data.text.Text, a: m.Data.Offset / 1e7, b: (m.Data.Offset + m.Data.Duration) / 1e7 }));
  fs.writeFileSync(out.replace(/\.mp3$/, '.json'), JSON.stringify(meta));
  fs.rmSync(dir, { recursive: true }); tts.close();
}
async function voice(text) {
  const f = path.join(OUT, 'voz', crypto.createHash('md5').update(VOICE + RATE + '|' + text).digest('hex').slice(0, 12) + '.mp3');
  for (let i = 0; !fs.existsSync(f.replace(/\.mp3$/, '.json')); i++) {
    try { await speak(text, f); } catch (e) { if (i >= 3) throw e; await new Promise(r => setTimeout(r, 1500 * (i + 1))); }
  }
  return { file: f, ad: dur(f), words: JSON.parse(fs.readFileSync(f.replace(/\.mp3$/, '.json'))) };
}
const norm = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9ñ,/]/g, '');
function align(text, words) {
  const toks = text.split(/\s+/).filter(Boolean); let k = 0;
  return words.map(w => {
    for (let j = k; j < Math.min(toks.length, k + 4); j++) {
      if (norm(toks[j]).replace(/,$/, '') === norm(w.w).replace(/,$/, '') || norm(toks[j]).startsWith(norm(w.w))) {
        const tk = toks[j]; k = j + 1;
        return { ...w, d: tk.replace(/^[«"(]+|[»")]+$/g, '').replace(/[.,;:]+$/, ''), brk: /[.,;:?!…]$/.test(tk) };
      }
    }
    return { ...w, d: w.w, brk: false };
  });
}

// ---------------------------------------------------------------- build
const ATTACH = new Set(['count', 'verdict', 'reveal']);   // estos bloques se dibujan sobre la pantalla del bloque anterior
async function build() {
  const S = JSON.parse(fs.readFileSync(SPEC_FILE, 'utf8'));
  fs.mkdirSync(path.join(OUT, 'voz'), { recursive: true });
  const segs = S.beats.map((b, i) => ({ ...b, i,
    min: b.min || (b.k === 'count' ? (b.n || 3) : b.k === 'hook' ? 2.0 : b.k === 'rule' ? 2.6 : b.k === 'cta' ? 3.2 : 0),
    gap: b.gap != null ? b.gap : b.k === 'hook' ? 0.12 : 0.15,
    subs: b.subs != null ? b.subs : !['hook', 'rule', 'cta'].includes(b.k) }));
  let scr = -1; segs.forEach(s => { if (!(ATTACH.has(s.k) || s.same)) scr++; s.scr = scr; });

  let done = 0; const q = segs.filter(s => s.say);
  await Promise.all([...Array(4)].map(async () => {
    while (q.length) { const s = q.shift(); Object.assign(s, await voice(s.say)); process.stdout.write(`\rvoz ${++done}/${segs.filter(s => s.say).length}`); }
  }));
  console.log();
  let t = 0; const LEAD = 0.08;
  for (const s of segs) {
    s.t0 = t;
    if (s.words && s.words.length) s.ad = Math.min(s.ad, s.words[s.words.length - 1].b + 0.12);
    s.dur = Math.max(s.min || 0, (s.ad ? s.ad + LEAD : 0) + (s.gap || 0));
    if (s.words) s.words = align(s.say, s.words).map(w => ({ ...w, a: +(t + LEAD + w.a).toFixed(3), b: +(t + LEAD + w.b).toFixed(3) }));
    t += s.dur;
  }
  const total = +t.toFixed(3);

  // cuadros de cada clip (Chromium sin interfaz no decodifica H.264)
  const clips = {};
  for (const s of segs) for (const c of [s.clip, s.img].filter(Boolean)) {
    if (clips[c.src]) continue;
    const src = path.join(ROOT, 'classes', 'media', c.src), name = 'c' + Object.keys(clips).length, dir = path.join(OUT, 'frames', name);
    if (!fs.existsSync(path.join(dir, 'f0001.jpg'))) {
      fs.mkdirSync(dir, { recursive: true });
      execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-i', src, '-vf', 'fps=30', '-q:v', '3', path.join(dir, 'f%04d.jpg')]);
    }
    clips[c.src] = { dir: 'frames/' + name, n: fs.readdirSync(dir).filter(f => f.endsWith('.jpg')).length, dur: dur(src) };
  }
  // portada del libro que se regala
  const cta = segs.find(s => s.k === 'cta');
  if (cta && cta.cover) execFileSync('pdftoppm', ['-png', '-r', '110', '-f', '1', '-l', '1', '-singlefile', path.join(ROOT, 'books', 'dist', cta.cover), path.join(OUT, 'cover')]);

  // efectos
  const sfx = path.join(OUT, 'sfx'); fs.mkdirSync(sfx, { recursive: true });
  const SFX = {
    boom: 'sine=f=52:d=0.6,volume=1.4,afade=t=out:st=0.05:d=0.55',
    whoosh: 'anoisesrc=d=0.32:c=pink:a=0.6,highpass=f=700,lowpass=f=6000,afade=t=in:d=0.14,afade=t=out:st=0.14:d=0.18,volume=0.22',
    tick: 'sine=f=1500:d=0.05,afade=t=out:st=0.005:d=0.045,volume=0.35',
    tock: 'sine=f=900:d=0.08,afade=t=out:st=0.005:d=0.075,volume=0.45',
    pop: 'sine=f=720:d=0.05,afade=t=out:st=0.004:d=0.046,volume=0.16',
    ding: 'sine=f=988:d=0.7,afade=t=out:st=0.02:d=0.68,volume=0.30',
    ding2: 'sine=f=1480:d=0.6,afade=t=out:st=0.02:d=0.58,volume=0.20',
    buzz: 'sine=f=140:d=0.35,afade=t=out:st=0.05:d=0.3,volume=0.5',
  };
  for (const [k, f] of Object.entries(SFX)) {
    const o = path.join(sfx, k + '.wav');
    if (!fs.existsSync(o)) execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-f', 'lavfi', '-i', f, '-ar', '44100', '-ac', '1', o]);
  }
  const fx = [['boom', 0]];
  segs.forEach((s, i) => {
    if (i && segs[i - 1].scr !== s.scr) fx.push(['whoosh', s.t0 - 0.1]);
    if (s.k === 'count') for (let j = 0; j < (s.n || 3); j++) fx.push([j === (s.n || 3) - 1 ? 'tock' : 'tick', s.t0 + j]);
    if (s.k === 'reveal' || (s.k === 'verdict' && s.v)) fx.push(['ding', s.t0], ['ding2', s.t0 + 0.09]);
    if (s.k === 'verdict' && !s.v) fx.push(['buzz', s.t0]);
    if (s.k === 'rule') fx.push(['boom', s.t0 + 0.05]);
    if (s.k === 'points' || s.k === 'compare') (s.items || []).forEach((_, j) => j && fx.push(['pop', s.t0 + 0.4 + j * 0.9]));
  });
  const ins = [], parts = [];
  segs.filter(s => s.file).forEach(s => { ins.push(s.file); parts.push([ins.length - 1, s.t0 + LEAD]); });
  fx.forEach(([k, tt]) => { ins.push(path.join(sfx, k + '.wav')); parts.push([ins.length - 1, Math.max(0, tt)]); });
  const filt = parts.map(([i, tt], j) => `[${i}:a]aresample=44100,adelay=${Math.round(tt * 1000)}:all=1[a${j}]`).join(';') +
    ';' + parts.map((_, j) => `[a${j}]`).join('') + `amix=inputs=${parts.length}:normalize=0,` +
    `acompressor=threshold=0.5:ratio=3:attack=5:release=80,loudnorm=I=-14:TP=-1.5:LRA=11,apad=whole_dur=${total}[out]`;
  fs.writeFileSync(path.join(OUT, 'mix.txt'), filt);
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', ...ins.flatMap(f => ['-i', f]), '-/filter_complex', path.join(OUT, 'mix.txt'),
    '-map', '[out]', '-t', String(total), '-ar', '44100', '-c:a', 'aac', '-b:a', '160k', path.join(OUT, 'audio.m4a')]);

  const data = { ...S, clips, total, beats: segs.map(({ file, ...s }) => s) };
  fs.writeFileSync(path.join(OUT, 'data.js'), 'window.REEL = ' + JSON.stringify(data) + ';\n');
  const P = S.post || {};
  fs.writeFileSync(path.join(HERE, 'out', 'reels', `${id}_post.txt`),
    `${P.text || ''}\n\n${(P.hashtags || []).join(' ')}\n\n${P.credit ? 'Créditos: ' + P.credit : ''}\n`);
  console.log(`ok ${id}: ${total.toFixed(1)} s`);
  segs.forEach(s => console.log(`  ${s.t0.toFixed(1).padStart(5)}–${(s.t0 + s.dur).toFixed(1).padStart(5)}  ${s.k.padEnd(8)} ${s.say || ''}`));
}

// ---------------------------------------------------------------- render
async function page(browser) {
  const p = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  p.on('pageerror', e => console.error('scene:', e.message));
  await p.goto('file://' + path.join(HERE, 'scenes', 'reel.html') + '?s=' + id);
  await p.waitForFunction(() => window.READY === true, null, { timeout: 60000 });
  return p;
}
const launch = () => require('playwright').chromium.launch(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {});
async function frames() {
  const dir = path.join(OUT, 'review'); fs.mkdirSync(dir, { recursive: true });
  const browser = await launch(), p = await page(browser);
  for (const t of args.slice(2).filter(a => !a.startsWith('--')).map(Number)) {
    await p.evaluate(t => window.render(t), t);
    fs.writeFileSync(path.join(dir, `t${t.toFixed(2).padStart(6, '0')}.png`), await p.screenshot({ type: 'png' }));
  }
  await browser.close(); console.log('ok', path.relative(process.cwd(), dir));
}
async function render() {
  global.window = {}; eval(fs.readFileSync(path.join(OUT, 'data.js'), 'utf8'));
  const total = window.REEL.total, N = Math.round(total * FPS);
  const WK = +(opt('workers') || Math.min(6, os.cpus().length)), per = Math.ceil(N / WK);
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'reel_')), PROG = [], t0 = Date.now();
  const parts = [...Array(WK)].map((_, w) => ({ w, f0: w * per, f1: Math.min(N, (w + 1) * per), file: path.join(tmp, `p${w}.mp4`) })).filter(p => p.f1 > p.f0);
  const tick = setInterval(() => process.stdout.write(`\r${id}: ${(100 * PROG.reduce((a, b) => a + (b || 0), 0) / parts.length).toFixed(0)}%  ${Math.round((Date.now() - t0) / 1000)} s `), 2000);
  await Promise.all(parts.map(async ({ w, f0, f1, file }) => {
    const browser = await launch(), p = await page(browser);
    const ff = spawn('ffmpeg', ['-loglevel', 'error', '-y', '-f', 'image2pipe', '-framerate', String(FPS), '-i', '-',
      '-c:v', 'libx264', '-crf', '19', '-preset', 'medium', '-pix_fmt', 'yuv420p', '-an', file], { stdio: ['pipe', 'inherit', 'inherit'] });
    for (let f = f0; f < f1; f++) {
      await p.evaluate(t => window.render(t), f / FPS);
      const buf = await p.screenshot({ type: 'jpeg', quality: 93 });
      if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
      PROG[w] = (f - f0 + 1) / (f1 - f0);
    }
    ff.stdin.end(); await new Promise(r => ff.on('close', r)); await browser.close();
  }));
  clearInterval(tick);
  fs.writeFileSync(path.join(tmp, 'list.txt'), parts.map(p => `file '${p.file}'`).join('\n'));
  const out = path.join(HERE, 'out', 'reels', `${id}_reel.mp4`);
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-f', 'concat', '-safe', '0', '-i', path.join(tmp, 'list.txt'), '-i', path.join(OUT, 'audio.m4a'),
    '-map', '0:v', '-map', '1:a', '-c:v', 'copy', '-c:a', 'copy', '-movflags', '+faststart', '-shortest', out]);
  fs.rmSync(tmp, { recursive: true });
  console.log(`\nok ${path.relative(process.cwd(), out)} ${(fs.statSync(out).size / 1048576).toFixed(1)} MB, ${total.toFixed(1)} s, render ${Math.round((Date.now() - t0) / 1000)} s`);
}

(async () => {
  if (!cmd || !id) { console.error('uso: reel.cjs build|frames|render|all <id> …'); process.exit(1); }
  if (cmd === 'build') await build();
  else if (cmd === 'frames') await frames();
  else if (cmd === 'render') await render();
  else if (cmd === 'all') { await build(); await render(); for (const d of ['frames', 'review']) fs.rmSync(path.join(OUT, d), { recursive: true, force: true }); }
  process.exit(0);
})().catch(e => { console.error(e); process.exit(1); });
