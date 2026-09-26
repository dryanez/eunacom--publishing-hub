/**
 * specialty_colors.cjs
 * Fuente única de verdad para el color de acento por especialidad, compartida
 * entre los libros (books/scripts/build_book.cjs) y las clases interactivas
 * (classes/scripts/build_swiss_player.cjs), para que un tomo y sus clases
 * Suizas muestren siempre el mismo color de marca.
 *
 * Ver books/docs/COLOR_SYSTEM_AND_TOKENS.md para la paleta canónica.
 */

const ACCENTS = {
  cardiologia: '#ea580c',
  diabetes: '#0891b2',
  endocrinologia: '#7c3aed',
  gastroenterologia: '#15803d',
  hematologia: '#be123c',
  infectologia: '#4d7c0f',
  nefrologia: '#a16207',
  neurologia: '#6d28d9',
  neumologia: '#0f766e',
  reumatologia: '#9f1239',
  cirugia: '#334155',
  traumatologia: '#b45309',
  urologia: '#0369a1',
  dermatologia: '#a21caf',
  oftalmologia: '#0e7490',
  otorrino: '#4338ca',
  psiquiatria: '#7e22ce',
  saludpublica: '#166534',
  pediatria: '#c2410c',
  ginecologia: '#be185d',
  obstetricia: '#9d174d',
};

// Color por defecto (rojo editorial Suizo) para contenido transversal sin
// especialidad propia, como la clase de Inducción Oficial.
const DEFAULT_ACCENT = '#B4322A';

function normalizeKey(specialtyName) {
  return String(specialtyName || '')
    .normalize('NFD').replace(/[̀-ͯ]/g, '') // quitar tildes
    .toLowerCase()
    .replace(/[^a-z]/g, '');
}

// Alias para nombres de especialidad usados en los datos de clases (con
// tildes, "y", espacios) que no calzan 1:1 con las claves de ACCENTS.
const ALIASES = {
  neumologia: 'neumologia',
  respiratorio: 'neumologia',
  neurologiaygeriatria: 'neurologia',
  otorrinolaringologia: 'otorrino',
  saludpublica: 'saludpublica',
};

function accentForSpecialty(specialtyName) {
  const key = normalizeKey(specialtyName);
  const resolved = ALIASES[key] || key;
  return ACCENTS[resolved] || DEFAULT_ACCENT;
}

function mix(hex, other, t) {
  const a = hex.replace('#', '').match(/../g).map(x => parseInt(x, 16));
  const b = other.replace('#', '').match(/../g).map(x => parseInt(x, 16));
  return '#' + a.map((v, i) => Math.round(v + (b[i] - v) * t).toString(16).padStart(2, '0')).join('');
}

function themeVars(acc) {
  return {
    acc,
    accD: mix(acc, '#000000', 0.20),
    accDp: mix(acc, '#000000', 0.40),
    accT: mix(acc, '#ffffff', 0.93),
    accP: mix(acc, '#ffffff', 0.74),
    accL: mix(acc, '#ffffff', 0.55),
    accInk: mix(acc, '#000000', 0.58),
  };
}

module.exports = { ACCENTS, DEFAULT_ACCENT, accentForSpecialty, mix, themeVars };
