// Shorts verticales para redes (Reels / TikTok / Shorts), 1080x1920, 30 fps, 30-45 s, con scenes/short.html.
// Los datos de cada short viven en shorts/<id>.json (gancho, caso, alternativas, respuesta, explicación con clip,
// regla de oro, CTA, palabra clave, texto de publicación).
//
//   node classes/scripts/jsvideo/short.cjs draft <clase> [--q 0] [--clip 0]   → borrador shorts/<clase>.json desde lessons/<clase>.cjs
//   node classes/scripts/jsvideo/short.cjs build <id>                         → voz (edge, con marcas de palabra), tiempos, audio, cuadros del clip
//   node classes/scripts/jsvideo/short.cjs frames <id> t1 t2 …                → PNG sueltos para revisar (out/shorts/<id>/review/)
//   node classes/scripts/jsvideo/short.cjs render <id> [--workers 8]          → out/shorts/<id>_short.mp4 (+ <id>_post.txt)
//   node classes/scripts/jsvideo/short.cjs all <id>                           → build + render
// Voz: Edge es-CL-LorenzoNeural +10 % (necesita red). Chrome del sistema: CHROME_PATH=".../Google Chrome".
const fs = require('fs');
const path = require('path');
const os = require('os');
const crypto = require('crypto');
const { spawn, execFileSync } = require('child_process');

const HERE = __dirname, ROOT = path.join(HERE, '..', '..', '..');
const args = process.argv.slice(2);
const [cmd, id] = args;
const opt = k => { const i = args.indexOf('--' + k); return i >= 0 ? args[i + 1] : null; };
const VOICE = opt('voice') || 'es-CL-LorenzoNeural', RATE = opt('rate') || '+10%';
const W = 1080, H = 1920, FPS = 30;
const OUT = path.join(HERE, 'out', 'shorts', id || '_');
const SPEC_FILE = path.join(HERE, 'shorts', (id || '_') + '.json');
const dur = f => +execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f]).toString().trim();

// ---------------------------------------------------------------- borrador desde una lección
function draft() {
  const L = require(path.join(ROOT, 'classes', 'lessons', id + '.cjs'));
  const quizzes = L.slides.filter(s => s.type === 'quiz' && /real/i.test(s.kicker || ''));
  const q = quizzes[+(opt('q') || 0)] || L.slides.find(s => s.type === 'quiz');
  const clips = L.slides.filter(s => s.type === 'image').flatMap(s => s.images).filter(i => i.src.endsWith('.mp4'));
  const clip = clips[+(opt('clip') || 0)];
  const NAME = { cardio: 'Cardiología', neuro: 'Neurología', resp: 'Respiratorio', gastro: 'Gastroenterología', nefro: 'Nefrología', diab: 'Diabetes',
    endo: 'Endocrinología', hem: 'Hematología', infecto: 'Infectología', reuma: 'Reumatología', cirugia: 'Cirugía',
    derma: 'Dermatología', oftal: 'Oftalmología', orl: 'Otorrinolaringología', trauma: 'Traumatología', uro: 'Urología',
    psiq: 'Psiquiatría', ped: 'Pediatría', ob: 'Obstetricia', gin: 'Ginecología', sp: 'Salud Pública' };
  const spec = NAME[id.split('-')[0]] || id;
  const m = (q.title || '').match(/EUNACOM\s+(\w+)\s+(\d{4})/);
  const MES = { Enero: 'Ene', Febrero: 'Feb', Marzo: 'Mar', Abril: 'Abr', Mayo: 'May', Junio: 'Jun', Julio: 'Jul', Agosto: 'Ago',
    Septiembre: 'Sep', Octubre: 'Oct', Noviembre: 'Nov', Diciembre: 'Dic' };
  // el caso hablado de la lección, sin la frase "Una pregunta real del EUNACOM de …", en frases cortas
  const stem = (q.say && q.say.stem || q.stem).replace(/^[^.]*(pregunta real|caso)[^.]*\.\s*/i, '');
  const sent = stem.split(/(?<=[.])\s+/).filter(Boolean).slice(0, 4);
  const ans = (q.say && q.say.answer || q.explanation).split(/(?<=[.])\s+/);
  const d = {
    id, lesson: id, spec, source: m ? `Pregunta real EUNACOM · ${MES[m[1]] || m[1]} ${m[2]}` : 'Pregunta real EUNACOM',
    _todo: 'Revisar TODO: gancho (≤5 palabras), case.t (líneas cortas), explain (3 frases ≤12 palabras), rule, crop del clip (short.cjs frames).',
    hook: { top: 'TODO gancho', big: 'TODO ¿…?', say: 'TODO gancho hablado.', frame: 6 },
    case: sent.map((s, i) => ({ t: s.replace(/[.]$/, ''), say: (i ? '' : 'Pregunta real del EUNACOM. ') + s })),
    question: { t: q.question, say: q.question + ' Tienes 5 segundos.' },
    options: q.options, correct: q.correct,
    answer: { t: (q.options.find(o => o.letter === q.correct) || {}).text, say: ans[0] },
    clip: clip ? { src: clip.src, panels: [{ crop: [10, 116, 600, 600] }] } : null,
    explain: ans.slice(1, 4).map((s, i, a) => ({ say: s, clip: clip ? [i * 6, (i + 1) * 6] : null, chip: '' })),
    rule: { t: 'TODO regla de oro', s: '', say: 'Regla de oro: TODO.' },
    cta: { keyword: 'TODO', t: `y te mando las 10 preguntas reales de ${spec}`, say: `Comenta TODO y te mando las 10 preguntas reales de ${spec}.` },
    loop: { say: 'Y la próxima vez…' },
    highlight: [],
    post: { text: 'TODO', hashtags: ['#EUNACOM', '#medicina', '#estudiantesdemedicina'], credit: clip ? (clip.credit || '').replace(/\s*·.*$/, '') + '. Rótulos y animación: Academia Examen EUNACOM.' : '' },
  };
  if (fs.existsSync(SPEC_FILE) && !args.includes('--force')) { console.error(`ya existe ${SPEC_FILE} (usa --force)`); process.exit(1); }
  fs.writeFileSync(SPEC_FILE, JSON.stringify(d, null, 2) + '\n');
  console.log('borrador', path.relative(process.cwd(), SPEC_FILE));
}

// ---------------------------------------------------------------- voz con marcas de palabra
let TTS;
async function speak(text, out) {
  if (!TTS) TTS = require(path.join(os.homedir(), 'fotos_tools', 'node_tts', 'node_modules', 'msedge-tts'));
  const { MsEdgeTTS, OUTPUT_FORMAT } = TTS;
  const tts = new MsEdgeTTS();
  await tts.setMetadata(VOICE, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3, { wordBoundaryEnabled: true });
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'short-tts-'));
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
// recupera la puntuación y mayúsculas del texto original para cada palabra hablada
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
async function build() {
  const S = JSON.parse(fs.readFileSync(SPEC_FILE, 'utf8'));
  fs.mkdirSync(path.join(OUT, 'voz'), { recursive: true });
  const segs = [];
  const add = (kind, say, o = {}) => segs.push({ kind, say, ...o });
  add('hook', S.hook.say, { min: 2.1, gap: 0.12, subs: false });
  S.case.forEach((c, i) => add('case', c.say, { i, gap: 0.08 }));
  add('question', S.question.say, { gap: 0.15 });
  add('count', null, { min: 5.0 });
  add('answer', S.answer.say, { gap: 0.15, min: 2.0 });
  S.explain.forEach((e, i) => add('explain', e.say, { i, gap: 0.12 }));
  add('rule', S.rule.say, { gap: 0.25, min: 2.8, subs: false });
  add('cta', S.cta.say, { gap: 0.2, min: 3.2, subs: false });
  add('loop', S.loop.say, { gap: 0.05, min: 0.9 });

  let done = 0; const q = segs.filter(s => s.say);
  await Promise.all([...Array(4)].map(async () => {
    while (q.length) { const s = q.shift(); Object.assign(s, await voice(s.say)); process.stdout.write(`\rvoz ${++done}/${segs.filter(s => s.say).length}`); }
  }));
  console.log();
  let t = 0;
  const LEAD = 0.08;
  for (const s of segs) {
    s.t0 = t;
    if (s.words && s.words.length) s.ad = Math.min(s.ad, s.words[s.words.length - 1].b + 0.12);   // sin el silencio final del TTS
    s.dur = Math.max(s.min || 0, (s.ad ? s.ad + LEAD : 0) + (s.gap || 0));
    if (s.words) s.words = align(s.say, s.words).map(w => ({ ...w, a: +(t + LEAD + w.a).toFixed(3), b: +(t + LEAD + w.b).toFixed(3) }));
    t += s.dur;
  }
  const total = +t.toFixed(3);

  // cuadros del clip (Chromium sin interfaz no decodifica H.264)
  let media = null;
  if (S.clip) {
    const src = path.join(ROOT, 'classes', 'media', S.clip.src), dir = path.join(OUT, 'frames');
    if (!fs.existsSync(path.join(dir, 'f0001.jpg'))) {
      fs.mkdirSync(dir, { recursive: true });
      execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-i', src, '-vf', 'fps=30', '-q:v', '2', path.join(dir, 'f%04d.jpg')]);
    }
    media = { dir: 'frames', n: fs.readdirSync(dir).filter(f => f.endsWith('.jpg')).length, dur: dur(src) };
  }

  // portada del libro que se regala en la CTA (primera página del PDF de books/dist)
  if (S.cta.cover) {
    const pdf = path.join(ROOT, 'books', 'dist', S.cta.cover), png = path.join(OUT, 'cover');
    execFileSync('pdftoppm', ['-png', '-r', '110', '-f', '1', '-l', '1', '-singlefile', pdf, png]);
  }

  // efectos (sintetizados con ffmpeg, sin licencias)
  const sfx = path.join(OUT, 'sfx'); fs.mkdirSync(sfx, { recursive: true });
  const SFX = {
    boom: 'sine=f=52:d=0.6,volume=1.4,afade=t=out:st=0.05:d=0.55',
    whoosh: 'anoisesrc=d=0.32:c=pink:a=0.6,highpass=f=700,lowpass=f=6000,afade=t=in:d=0.14,afade=t=out:st=0.14:d=0.18,volume=0.22',
    tick: 'sine=f=1500:d=0.05,afade=t=out:st=0.005:d=0.045,volume=0.35',
    tock: 'sine=f=900:d=0.08,afade=t=out:st=0.005:d=0.075,volume=0.45',
    pop: 'sine=f=720:d=0.05,afade=t=out:st=0.004:d=0.046,volume=0.16',
    ding: 'sine=f=988:d=0.7,afade=t=out:st=0.02:d=0.68,volume=0.30',
    ding2: 'sine=f=1480:d=0.6,afade=t=out:st=0.02:d=0.58,volume=0.20',
  };
  for (const [k, f] of Object.entries(SFX)) {
    const o = path.join(sfx, k + '.wav');
    if (!fs.existsSync(o)) execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-f', 'lavfi', '-i', f, '-ar', '44100', '-ac', '1', o]);
  }
  const at = k => segs.find(s => s.kind === k);
  const cases = segs.filter(s => s.kind === 'case'), ex = segs.filter(s => s.kind === 'explain');
  const qs = at('question'), cnt = at('count');
  const fx = [['boom', 0], ['whoosh', cases[0].t0]];
  cases.slice(1).forEach(c => fx.push(['pop', c.t0 + 0.05]));
  S.options.forEach((o, i) => fx.push(['pop', qs.t0 + 0.35 + i * 0.22]));
  for (let i = 0; i < 5; i++) fx.push([i === 4 ? 'tock' : 'tick', cnt.t0 + i]);
  fx.push(['ding', at('answer').t0], ['ding2', at('answer').t0 + 0.09], ['whoosh', ex[0].t0 - 0.1]);
  ex.slice(1).forEach(e => fx.push(['pop', e.t0]));
  fx.push(['whoosh', at('rule').t0 - 0.1], ['boom', at('rule').t0 + 0.05], ['whoosh', at('cta').t0 - 0.1]);

  const ins = [], parts = [];
  segs.filter(s => s.file).forEach(s => { ins.push(s.file); parts.push([ins.length - 1, s.t0 + LEAD, 1]); });
  fx.forEach(([k, tt]) => { ins.push(path.join(sfx, k + '.wav')); parts.push([ins.length - 1, Math.max(0, tt), 1]); });
  const filt = parts.map(([i, tt], j) => `[${i}:a]aresample=44100,adelay=${Math.round(tt * 1000)}:all=1[a${j}]`).join(';') +
    ';' + parts.map((_, j) => `[a${j}]`).join('') + `amix=inputs=${parts.length}:normalize=0,` +
    `acompressor=threshold=0.5:ratio=3:attack=5:release=80,loudnorm=I=-14:TP=-1.5:LRA=11,apad=whole_dur=${total}[out]`;
  fs.writeFileSync(path.join(OUT, 'mix.txt'), filt);
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', ...ins.flatMap(f => ['-i', f]), '-/filter_complex', path.join(OUT, 'mix.txt'),
    '-map', '[out]', '-t', String(total), '-ar', '44100', '-c:a', 'aac', '-b:a', '160k', path.join(OUT, 'audio.m4a')]);

  const data = { ...S, media, total, segs: segs.map(({ file, ...s }) => s) };
  fs.writeFileSync(path.join(OUT, 'data.js'), 'window.SHORT = ' + JSON.stringify(data) + ';\n');
  // texto de publicación
  const P = S.post || {};
  fs.writeFileSync(path.join(HERE, 'out', 'shorts', `${id}_post.txt`),
    `${P.text || ''}\n\n${(P.hashtags || []).join(' ')}\n\n${P.credit ? 'Créditos: ' + P.credit : ''}\n`);
  console.log(`ok ${id}: ${total.toFixed(1)} s`);
  segs.forEach(s => console.log(`  ${s.t0.toFixed(1).padStart(5)}–${(s.t0 + s.dur).toFixed(1).padStart(5)}  ${s.kind.padEnd(8)} ${s.say || ''}`));
}

// ---------------------------------------------------------------- render
async function page(browser) {
  const p = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  await p.goto('file://' + path.join(HERE, 'scenes', 'short.html') + '?s=' + id);
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
  const total = window.SHORT.total, N = Math.round(total * FPS);
  const WK = +(opt('workers') || Math.min(8, os.cpus().length)), per = Math.ceil(N / WK);
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'short_')), PROG = [], t0 = Date.now();
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
  const out = path.join(HERE, 'out', 'shorts', `${id}_short.mp4`);
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-f', 'concat', '-safe', '0', '-i', path.join(tmp, 'list.txt'), '-i', path.join(OUT, 'audio.m4a'),
    '-map', '0:v', '-map', '1:a', '-c:v', 'copy', '-c:a', 'copy', '-movflags', '+faststart', '-shortest', out]);
  fs.rmSync(tmp, { recursive: true });
  console.log(`\nok ${path.relative(process.cwd(), out)} ${(fs.statSync(out).size / 1048576).toFixed(1)} MB, ${total.toFixed(1)} s, render ${Math.round((Date.now() - t0) / 1000)} s`);
}

(async () => {
  if (!cmd || !id) { console.error('uso: short.cjs draft|build|frames|render|all <id> …'); process.exit(1); }
  if (cmd === 'draft') draft();
  else if (cmd === 'build') await build();
  else if (cmd === 'frames') await frames();
  else if (cmd === 'render') await render();
  else if (cmd === 'all') { await build(); await render(); }
  process.exit(0);
})().catch(e => { console.error(e); process.exit(1); });
