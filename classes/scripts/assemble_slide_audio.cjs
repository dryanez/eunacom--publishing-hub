/**
 * assemble_slide_audio.cjs
 * Une los segmentos de voz (classes/dist/audio/<id>/<voz>/sXX_gYY.wav|mp3, p. ej. de tts_chatterbox.py)
 * en un MP3 por diapositiva: classes/dist/audio/<id>/slide_N.mp3, que es lo que reproduce el Reproductor Suizo.
 *
 * Uso: node classes/scripts/assemble_slide_audio.cjs --voice mi_voz [<id> …]   (sin ids: todas las que tengan audio)
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..', '..');
const AUDIO = path.join(ROOT, 'classes', 'dist', 'audio');
const GAP = 0.45; // segundos de pausa entre segmentos, igual que render_lesson_video.cjs

const args = process.argv.slice(2);
const vIdx = args.indexOf('--voice');
if (vIdx < 0 || !args[vIdx + 1]) { console.error('Uso: node assemble_slide_audio.cjs --voice <carpeta> [ids…]'); process.exit(1); }
const voice = args[vIdx + 1];
const ids = args.filter((a, i) => !a.startsWith('--') && i !== vIdx + 1);

function ffmpegPath() {
  try { return execFileSync('python3', ['-c', 'import imageio_ffmpeg;print(imageio_ffmpeg.get_ffmpeg_exe())']).toString().trim(); }
  catch { return 'ffmpeg'; }
}
const FFMPEG = ffmpegPath();

const classIds = ids.length ? ids : fs.readdirSync(AUDIO).filter(d => fs.existsSync(path.join(AUDIO, d, voice)));
for (const id of classIds) {
  const dir = path.join(AUDIO, id, voice);
  const bySlide = {};
  for (const f of fs.readdirSync(dir).sort()) {
    const m = f.match(/^s(\d{2})_g(\d{2})\.(wav|mp3)$/);
    if (m) (bySlide[+m[1]] ||= []).push(path.join(dir, f));
  }
  for (const [si, files] of Object.entries(bySlide)) {
    const out = path.join(AUDIO, id, `slide_${+si + 1}.mp3`);
    const inputs = files.flatMap(f => ['-i', f]);
    const chain = files.map((_, i) => `[${i}:a]aresample=44100,aformat=channel_layouts=mono${i < files.length - 1 ? `,apad=pad_dur=${GAP}` : ''}[a${i}]`).join(';');
    const filter = `${chain};${files.map((_, i) => `[a${i}]`).join('')}concat=n=${files.length}:v=0:a=1[out]`;
    execFileSync(FFMPEG, ['-y', '-v', 'error', ...inputs, '-filter_complex', filter, '-map', '[out]', '-b:a', '128k', out]);
  }
  console.log(`✓ ${id}: ${Object.keys(bySlide).length} diapositivas`);
}
