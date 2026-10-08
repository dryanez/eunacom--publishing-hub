// Prepara una clase completa para video: línea de tiempo (un "beat" por cada texto narrado), voz y audio final.
//   node classes/scripts/jsvideo/build_class.cjs <clase> [--voice edge:es-CL-LorenzoNeural | --voice dir:<carpeta>]
// --voice edge:<voz>   voz gratuita de Microsoft Edge (pip install edge-tts), sirve de borrador.
// --voice eleven:<voice_id> ElevenLabs (ELEVENLABS_API_KEY); Alejandro = m3IrTXgclGG0hR8ORocn. Gasta caracteres del plan.
// --voice dir:<carpeta> usa MP3 ya grabados (p. ej. Alejandro): <carpeta>/<id del beat>.mp3; si falta uno, usa la voz edge.
// Salida en classes/scripts/jsvideo/out/<clase>/: data.js (clase + tiempos, lo lee scenes/clase.html),
// narracion.m4a, voz/*.mp3 y frames/ de las animaciones de la clase.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { spawn, execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..', '..', '..');
const args = process.argv.slice(2);
const id = args[0];
if (!id) { console.error('uso: build_class.cjs <clase> [--voice edge:<voz> | eleven:<voice_id> | dir:<carpeta>]'); process.exit(1); }
const vi = args.indexOf('--voice');
const VOICE = vi >= 0 ? args[vi + 1] : 'edge:es-CL-LorenzoNeural';
const EDGE = VOICE.startsWith('edge:') ? VOICE.slice(5) : 'es-CL-LorenzoNeural';
const DIR = VOICE.startsWith('dir:') ? VOICE.slice(4) : null;
const ELEVEN = VOICE.startsWith('eleven:') ? VOICE.slice(7) : null;

const OUT = path.join(__dirname, 'out', id);
fs.mkdirSync(path.join(OUT, 'voz'), { recursive: true });

const lesson = require(path.join(ROOT, 'classes', 'lessons', id + '.cjs'));
const spec = id.split('-')[0];
const SPEC = { neuro: 'neurologia', resp: 'respiratorio', gastro: 'gastroenterologia', nefro: 'nefrologia', diab: 'diabetes',
  endo: 'endocrinologia', hem: 'hematologia', infecto: 'infectologia', reuma: 'reumatologia', cirugia: 'cirugia',
  derma: 'dermatologia', oftal: 'oftalmologia', orl: 'otorrinolaringologia', trauma: 'traumatologia', uro: 'urologia',
  psiq: 'psiquiatria', ped: 'pediatria', ob: 'obstetricia', gin: 'ginecologia', sp: 'salud_publica' };
const NAME = { neuro: 'Neurología', resp: 'Respiratorio', gastro: 'Gastroenterología', nefro: 'Nefrología', diab: 'Diabetes',
  endo: 'Endocrinología', hem: 'Hematología', infecto: 'Infectología', reuma: 'Reumatología', cirugia: 'Cirugía',
  derma: 'Dermatología', oftal: 'Oftalmología', orl: 'Otorrinolaringología', trauma: 'Traumatología', uro: 'Urología',
  psiq: 'Psiquiatría', ped: 'Pediatría', ob: 'Obstetricia', gin: 'Ginecología', sp: 'Salud Pública' };
let meta = {};
try { meta = JSON.parse(fs.readFileSync(path.join(ROOT, 'classes', 'curriculum', `${SPEC[spec]}_decks_data.json`)))[id] || {}; } catch (e) {}
// "Neurologia 10.16: Síndrome de Guillain-Barré: Polirradiculoneuropatía…" → "Síndrome de Guillain-Barré"
const title = (meta.title || id).replace(/^[^:]*\d+\.\d+:\s*/, '').split(':')[0].trim();

// ---------- beats ----------
const beats = [];
const add = (slide, kind, say, extra = {}) => beats.push({ id: `b${String(beats.length).padStart(3, '0')}`, slide, kind, say, ...extra });
// En el video: un caso clínico y una pregunta real EUNACOM (el reproductor conserva todas).
const seenQ = new Set();
const slides = lesson.slides.filter(s => {
  if (s.type !== 'quiz') return true;
  const k = /caso/i.test(s.kicker || '') ? 'caso' : 'pregunta';
  if (seenQ.has(k)) return false; seenQ.add(k); return true;
});
add(-1, 'intro', null, { min: 5.2 });
slides.forEach((s, si) => {
  if (s.type === 'cover') add(si, 'cover', s.say);
  else if (s.type === 'flow') s.steps.forEach((st, k) => add(si, 'step', st.say, { step: k }));
  else if (s.type === 'points') s.cards.forEach((c, ci) => c.items.forEach((it, ii) => add(si, 'item', it.say, { card: ci, item: ii })));
  else if (s.type === 'image') s.steps.forEach((st, k) => add(si, 'step', st.say, { step: k }));
  else if (s.type === 'table') s.rows.forEach((r, k) => add(si, 'row', r.say, { row: k }));
  else if (s.type === 'quiz') {
    add(si, 'stem', s.say.stem); add(si, 'question', s.say.question); add(si, 'options', s.say.options);
    add(si, 'think', null, { min: 3.2 }); add(si, 'answer', s.say.answer);
  } else if (s.type === 'pathway') {
    add(si, 'pw', s.intro, { node: -1 });
    let n = 0;
    (function walk(node) { add(si, 'pw', node.say, { node: n++ }); for (const [, kid] of node.kids || []) walk(kid); })(lesson.pathway.root);
  }
});
add(-2, 'outro', null, { min: 5.5 });

// ---------- voz ----------
const hash = s => crypto.createHash('md5').update((ELEVEN ? 'eleven:' + ELEVEN : EDGE) + '|' + s).digest('hex').slice(0, 12);
const dur = f => +execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f]).toString().trim();
async function eleven(text, out) {
  const r = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${ELEVEN}?output_format=mp3_44100_128`, {
    method: 'POST', headers: { 'xi-api-key': process.env.ELEVENLABS_API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, model_id: 'eleven_multilingual_v2', voice_settings: { stability: 0.5, similarity_boost: 0.8 } }) });
  if (!r.ok) throw new Error('ElevenLabs ' + r.status + ' ' + (await r.text()).slice(0, 300));
  fs.writeFileSync(out, Buffer.from(await r.arrayBuffer()));
}
function edge(text, out) {
  return new Promise((ok, bad) => {
    const p = spawn('edge-tts', ['--voice', EDGE, '--rate', '+4%', '--text', text, '--write-media', out]);
    let err = ''; p.stderr.on('data', d => (err += d));
    p.on('close', c => (c === 0 && fs.existsSync(out) && fs.statSync(out).size > 1000 ? ok() : bad(new Error(err.slice(-400)))));
  });
}
async function voice(b) {
  if (!b.say) return;
  const own = DIR && path.join(DIR, b.id + '.mp3');
  if (own && fs.existsSync(own)) { b.audio = own; return; }
  const f = path.join(OUT, 'voz', hash(b.say) + '.mp3');
  for (let i = 0; !fs.existsSync(f) || fs.statSync(f).size < 1000; i++) {
    try { await (ELEVEN ? eleven(b.say, f) : edge(b.say, f)); } catch (e) { if (i >= 3) throw e; await new Promise(r => setTimeout(r, 1500 * (i + 1))); }
  }
  b.audio = f;
}

// cuadros de las animaciones MP4 de la clase (el navegador sin interfaz no decodifica H.264)
function frames(src) {
  const name = path.basename(src, '.mp4');
  const dir = path.join(OUT, 'frames', name);
  if (!fs.existsSync(path.join(dir, 'f0001.jpg'))) {
    fs.mkdirSync(dir, { recursive: true });
    execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-i', path.join(ROOT, 'classes', 'media', src), '-vf', 'fps=30', '-q:v', '3', path.join(dir, 'f%04d.jpg')]);
  }
  return { dir: 'frames/' + name, n: fs.readdirSync(dir).length, dur: dur(path.join(ROOT, 'classes', 'media', src)) };
}

(async () => {
  const queue = beats.slice(); let done = 0;
  await Promise.all([...Array(6)].map(async () => {
    while (queue.length) { const b = queue.shift(); await voice(b); process.stdout.write(`\rvoz ${++done}/${beats.length}`); }
  }));
  console.log();
  const media = {};
  slides.forEach((s, si) => { if (s.type === 'image') s.images.forEach(im => { if (im.src.endsWith('.mp4')) media[im.src] = frames(im.src); }); });

  // tiempos: cada beat dura su audio + una pausa; las animaciones duran al menos lo que el video
  const GAP = 0.45; let t = 0;
  for (const b of beats) {
    b.ad = b.audio ? dur(b.audio) : 0;
    b.dur = Math.max(b.min || 0, b.ad + (b.audio ? GAP : 0));
    const s = slides[b.slide];
    if (s && s.type === 'image') { const im = s.images[Math.min(b.step, s.images.length - 1)]; if (media[im.src]) b.dur = Math.max(b.dur, media[im.src].dur + 0.6); }
    if (s && (b === beats.find(x => x.slide === b.slide))) { b.lead = 0.6; b.dur += 0.6; }   // tiempo para la transición
    b.t0 = t; t += b.dur;
  }
  const total = t;

  // audio: cada voz en su instante
  const withA = beats.filter(b => b.audio);
  const inputs = withA.flatMap(b => ['-i', b.audio]);
  const filt = withA.map((b, i) => `[${i}:a]aresample=44100,adelay=${Math.round((b.t0 + (b.lead || 0) + 0.15) * 1000)}:all=1[a${i}]`).join(';') +
    ';' + withA.map((_, i) => `[a${i}]`).join('') + `amix=inputs=${withA.length}:normalize=0,apad=whole_dur=${total.toFixed(2)}[out]`;
  fs.writeFileSync(path.join(OUT, 'mix.txt'), filt);
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', ...inputs, '-filter_complex_script', path.join(OUT, 'mix.txt'), '-map', '[out]',
    '-t', total.toFixed(2), '-c:a', 'aac', '-b:a', '128k', path.join(OUT, 'narracion.m4a')]);

  const data = { id, title, spec: NAME[spec] || spec, topic: meta.topicLabel || '', slides, pathway: lesson.pathway || null, media,
    next: (slides[slides.length - 1].cards || []).flatMap(c => c.items).map(i => i.say).join(' ').match(/próxima clase[^:]*:\s*(?:la\s+|el\s+)?([^.]+)/i)?.[1] || '',
    beats: beats.map(({ audio, ...b }) => b), total };
  fs.writeFileSync(path.join(OUT, 'data.js'), 'window.CLASS = ' + JSON.stringify(data) + ';\n');
  console.log(`ok ${id}: ${beats.length} beats, ${(total / 60).toFixed(1)} min → ${path.relative(ROOT, OUT)}`);
})().catch(e => { console.error(e); process.exit(1); });
