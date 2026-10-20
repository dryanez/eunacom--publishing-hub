// Guiones de voz de las clases, para grabarlos después con la voz propia (VoiceStudio / OmniVoice).
// Lee out/<clase>/data.js, que queda después de build_class.cjs, y escribe en classes/guiones_voz/:
//   <clase>.txt   para leer o pegar en VoiceStudio: un párrafo por trozo [b001], con su inicio y su duración
//   <clase>.json  [{ id, t: inicio del audio (s), dur: duración del audio actual (s), say }] para cambiar la voz
//                 sin volver a renderizar: cada trozo nuevo se ajusta a dur y se mezcla en el mismo momento.
//   node classes/scripts/jsvideo/guion_voz.cjs [clase …]   (sin clases: todas las que tienen data.js)
const fs = require('fs'), path = require('path');
const OUT = path.join(__dirname, 'out'), DEST = path.join(__dirname, '..', '..', 'guiones_voz');
fs.mkdirSync(DEST, { recursive: true });
const mmss = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
const ids = process.argv.slice(2).length ? process.argv.slice(2) : fs.readdirSync(OUT).filter(d => fs.existsSync(path.join(OUT, d, 'data.js')));
let n = 0, chars = 0, secs = 0;
for (const id of ids.sort()) {
  const f = path.join(OUT, id, 'data.js');
  if (!fs.existsSync(f)) { console.log('falta', f); continue; }
  const C = JSON.parse(fs.readFileSync(f, 'utf8').replace(/^window\.CLASS\s*=\s*/, '').replace(/;\s*$/, ''));
  const beats = C.beats.filter(b => b.say).map(b => ({ id: b.id, t: +(b.t0 + (b.lead || 0)).toFixed(2), dur: +(+b.ad).toFixed(2), say: b.say }));
  const txt = [`${C.title}`, `${C.spec} · Tema ${C.topic} · clase ${C.id} · ${beats.length} trozos · ${mmss(C.total)} de video`, '',
    'Lee cada trozo en un audio aparte y guárdalo con su código (b001.mp3, b002.mp3…). La duración es la de la voz actual: si la tuya',
    'queda parecida (±15 %), el video no hay que volver a renderizarlo.', '',
    ...beats.map(b => `[${b.id}] ${mmss(b.t)} · ${b.dur.toFixed(1)} s\n${b.say}\n`)].join('\n');
  fs.writeFileSync(path.join(DEST, id + '.txt'), txt);
  fs.writeFileSync(path.join(DEST, id + '.json'), JSON.stringify({ id: C.id, title: C.title, total: C.total, beats }, null, 1));
  n++; chars += beats.reduce((s, b) => s + b.say.length, 0); secs += beats.reduce((s, b) => s + b.dur, 0);
}
console.log(`${n} guiones en ${path.relative(process.cwd(), DEST)} · ${(chars / 1e6).toFixed(2)} M caracteres · ${(secs / 3600).toFixed(1)} h de voz`);
