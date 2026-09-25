/**
 * export_narration.cjs
 * Exporta el guion hablado de cada clase del Reproductor Suizo a classes/narration/<id>.json,
 * listo para sintetizar la voz fuera de línea (p. ej. Chatterbox en una GPU arrendada).
 * Los nombres de archivo (sXX_gYY) son los mismos que usa render_lesson_video.cjs.
 *
 * Uso:
 *   node classes/scripts/export_narration.cjs              # solo clases con guion docente (classes/lessons)
 *   node classes/scripts/export_narration.cjs --all        # todas las clases del reproductor
 *   node classes/scripts/export_narration.cjs gastro-01 …  # clases puntuales
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const OUT = path.join(ROOT, 'classes', 'narration');
const args = process.argv.slice(2);
const ALL = args.includes('--all');
const ids = args.filter(a => !a.startsWith('--'));

const html = fs.readFileSync(path.join(ROOT, 'classes', 'decks', 'Reproductor_Suiza_Oficial.html'), 'utf8');
const classes = JSON.parse(html.match(/const CLASSES = (\[.*?\]);\r?\n/s)[1]);
const lessonIds = new Set(fs.readdirSync(path.join(ROOT, 'classes', 'lessons'))
  .filter(f => f.endsWith('.cjs')).map(f => f.replace(/\.cjs$/, '')));

const selected = classes.filter(c => (ids.length ? ids.includes(c.id) : ALL || lessonIds.has(c.id)));
fs.mkdirSync(OUT, { recursive: true });

const manifest = [];
for (const cls of selected) {
  const segments = [];
  cls.slides.forEach((slide, si) => (slide.segments || []).forEach((seg, gi) => {
    segments.push({ file: `s${String(si).padStart(2, '0')}_g${String(gi).padStart(2, '0')}`, text: seg.text });
  }));
  const chars = segments.reduce((n, s) => n + s.text.length, 0);
  fs.writeFileSync(path.join(OUT, `${cls.id}.json`), JSON.stringify({ id: cls.id, title: cls.title, specialty: cls.specialty, chars, segments }, null, 2));
  manifest.push({ id: cls.id, title: cls.title, handwritten: lessonIds.has(cls.id), slides: cls.slides.length, segments: segments.length, chars });
}
fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2));

const total = manifest.reduce((n, m) => n + m.chars, 0);
console.log(`${manifest.length} clases · ${total.toLocaleString('es-CL')} caracteres · ~${Math.round(total / 900)} min de audio (≈15 caracteres/s) → ${path.relative(ROOT, OUT)}/`);
