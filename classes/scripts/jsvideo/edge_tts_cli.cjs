// Reemplazo de `edge-tts` (CLI de Python) con msedge-tts: --voice V --rate +4% --text T --write-media out.mp3
const tryReq = ps => { for (const x of ps) { try { return require(x); } catch (e) {} } throw new Error('falta msedge-tts: npm i -g msedge-tts'); };
const { MsEdgeTTS, OUTPUT_FORMAT } = tryReq(['msedge-tts', require('os').homedir() + '/fotos_tools/node_tts/node_modules/msedge-tts', require('child_process').execSync('npm root -g').toString().trim() + '/msedge-tts']); const fs = require('fs'), path = require('path'), os = require('os');
const a = process.argv.slice(2), g = k => { const i = a.indexOf(k); return i >= 0 ? a[i + 1] : undefined; };
(async () => {
  const tts = new MsEdgeTTS(); await tts.setMetadata(g('--voice') || 'es-CL-LorenzoNeural', OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
  const out = g('--write-media'); const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'tts-'));
  const { audioFilePath } = await tts.toFile(dir, g('--text') || '', { rate: g('--rate') || '+0%' });
  fs.copyFileSync(audioFilePath, out); fs.rmSync(dir, { recursive: true }); tts.close(); process.exit(0);
})().catch(e => { console.error(e.message || e); process.exit(1); });
