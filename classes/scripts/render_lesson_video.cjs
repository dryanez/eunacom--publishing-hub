/**
 * render_lesson_video.cjs
 * Graba una clase del Reproductor Suizo como video MP4 1080p con locución ElevenLabs.
 * Cada segmento de narración se sintetiza por separado y la pantalla revela su paso
 * exactamente cuando empieza ese audio, con las animaciones reales del reproductor.
 *
 * Uso:
 *   ELEVENLABS_API_KEY=... [ELEVENLABS_VOICE_ID=...] node classes/scripts/render_lesson_video.cjs gastro-02
 *   node classes/scripts/render_lesson_video.cjs gastro-02 --dry   # silencio con duración estimada (sin API)
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..', '..');
const classId = process.argv[2];
const DRY = process.argv.includes('--dry');
const API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID || 'pNInz6obpgDQGcFmaJgB';
const MODEL_ID = process.env.ELEVENLABS_MODEL_ID || 'eleven_multilingual_v2';

const RATE = 44100;
const GAP_SEGMENT = 0.45;
const SLIDE_LEAD_IN = 0.9;
const SLIDE_TAIL = 0.8;

if (!classId) { console.error('Uso: node render_lesson_video.cjs <classId> [--dry]'); process.exit(1); }
if (!DRY && !API_KEY) { console.error('Falta ELEVENLABS_API_KEY (o usa --dry).'); process.exit(1); }

function ffmpegPath() {
  try { return execFileSync('python3', ['-c', 'import imageio_ffmpeg;print(imageio_ffmpeg.get_ffmpeg_exe())']).toString().trim(); }
  catch { return 'ffmpeg'; }
}
const FFMPEG = ffmpegPath();

function loadClass() {
  const html = fs.readFileSync(path.join(ROOT, 'classes', 'decks', 'Reproductor_Suiza_Oficial.html'), 'utf8');
  const classes = JSON.parse(html.match(/const CLASSES = (\[.*?\]);\n/s)[1]);
  const cls = classes.find(c => c.id === classId);
  if (!cls) throw new Error(`Clase no encontrada: ${classId}`);
  return cls;
}

async function synthesize(text, outFile) {
  if (fs.existsSync(outFile) && fs.statSync(outFile).size > 0) return;
  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}?output_format=mp3_44100_128`, {
    method: 'POST',
    headers: { 'xi-api-key': API_KEY, 'Content-Type': 'application/json', Accept: 'audio/mpeg' },
    body: JSON.stringify({ text, model_id: MODEL_ID, voice_settings: { stability: 0.45, similarity_boost: 0.8, style: 0.25, use_speaker_boost: true } }),
  });
  if (!res.ok) throw new Error(`ElevenLabs ${res.status}: ${(await res.text()).slice(0, 300)}`);
  fs.writeFileSync(outFile, Buffer.from(await res.arrayBuffer()));
}

// Decodifica a PCM mono 16-bit para poder armar la pista con silencios exactos.
function decodePcm(file) {
  return execFileSync(FFMPEG, ['-v', 'error', '-i', file, '-f', 's16le', '-ac', '1', '-ar', String(RATE), '-'], { maxBuffer: 1 << 30 });
}

function silence(seconds) { return Buffer.alloc(Math.round(seconds * RATE) * 2); }

function wav(pcm) {
  const h = Buffer.alloc(44);
  h.write('RIFF', 0); h.writeUInt32LE(36 + pcm.length, 4); h.write('WAVE', 8); h.write('fmt ', 12);
  h.writeUInt32LE(16, 16); h.writeUInt16LE(1, 20); h.writeUInt16LE(1, 22); h.writeUInt32LE(RATE, 24);
  h.writeUInt32LE(RATE * 2, 28); h.writeUInt16LE(2, 32); h.writeUInt16LE(16, 34); h.write('data', 36); h.writeUInt32LE(pcm.length, 40);
  return Buffer.concat([h, pcm]);
}

async function main() {
  const cls = loadClass();
  const outDir = path.join(ROOT, 'classes', 'dist', 'video', classId);
  const audioDir = path.join(ROOT, 'classes', 'dist', 'audio', classId, DRY ? 'dry' : VOICE_ID);
  fs.mkdirSync(outDir, { recursive: true });
  fs.mkdirSync(audioDir, { recursive: true });

  // 1. Audio por segmento y línea de tiempo (en segundos desde el inicio del video)
  const timeline = [];
  const pcmParts = [];
  let t = 0;
  for (let si = 0; si < cls.slides.length; si++) {
    const slide = cls.slides[si];
    timeline.push({ at: t, slide: si });
    pcmParts.push(silence(SLIDE_LEAD_IN)); t += SLIDE_LEAD_IN;
    for (let gi = 0; gi < slide.segments.length; gi++) {
      const seg = slide.segments[gi];
      let pcm;
      if (DRY) {
        pcm = silence(Math.max(1.5, seg.text.split(/\s+/).length / 2.6));
      } else {
        const file = path.join(audioDir, `s${String(si).padStart(2, '0')}_g${String(gi).padStart(2, '0')}.mp3`);
        process.stdout.write(`  voz slide ${si + 1} segmento ${gi + 1}...\r`);
        await synthesize(seg.text, file);
        pcm = decodePcm(file);
      }
      timeline.push({ at: t, slide: si, step: seg.step });
      pcmParts.push(pcm); t += pcm.length / 2 / RATE;
      pcmParts.push(silence(GAP_SEGMENT)); t += GAP_SEGMENT;
    }
    pcmParts.push(silence(SLIDE_TAIL)); t += SLIDE_TAIL;
  }
  const total = t;
  const wavFile = path.join(outDir, 'narracion.wav');
  fs.writeFileSync(wavFile, wav(Buffer.concat(pcmParts)));
  console.log(`\nPista de audio: ${total.toFixed(1)} s`);

  // 2. Grabación del reproductor siguiendo la misma línea de tiempo
  const { chromium } = require(process.env.PW || 'playwright');
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 }, recordVideo: { dir: outDir, size: { width: 1920, height: 1080 } } });
  const recStart = Date.now();
  const page = await context.newPage();
  await page.goto('file://' + path.join(ROOT, 'classes', 'decks', 'Reproductor_Suiza_Oficial.html'));
  await page.addStyleTag({ content: '.swiss-dock{display:none !important}' });
  await page.evaluate(id => { setClass(CLASSES.findIndex(c => c.id === id)); }, classId);
  await page.waitForTimeout(500);

  const t0 = (Date.now() - recStart) / 1000;
  const wallStart = Date.now();
  for (const ev of timeline) {
    const wait = ev.at * 1000 - (Date.now() - wallStart);
    if (wait > 0) await page.waitForTimeout(wait);
    if (ev.step === undefined) await page.evaluate(i => jumpTo(i), ev.slide);
    else await page.evaluate(s => { if (s !== currentStepIdx) revealStep(s, true); }, ev.step);
  }
  const rest = total * 1000 - (Date.now() - wallStart);
  if (rest > 0) await page.waitForTimeout(rest);
  const video = page.video();
  await context.close();
  await browser.close();
  const webm = await video.path();

  // 3. Mezcla final: recorta el arranque del navegador y une la voz
  const mp4 = path.join(outDir, `${classId}.mp4`);
  execFileSync(FFMPEG, ['-y', '-v', 'error', '-ss', t0.toFixed(3), '-i', webm, '-i', wavFile, '-t', total.toFixed(3),
    '-map', '0:v', '-map', '1:a', '-c:v', 'libx264', '-preset', 'medium', '-crf', '20', '-pix_fmt', 'yuv420p', '-r', '30',
    '-c:a', 'aac', '-b:a', '160k', '-movflags', '+faststart', mp4]);
  fs.unlinkSync(webm);
  console.log(`✔ Video: ${mp4} (${(fs.statSync(mp4).size / 1e6).toFixed(1)} MB, ${Math.round(total)} s)`);
}

main().catch(e => { console.error(e); process.exit(1); });
