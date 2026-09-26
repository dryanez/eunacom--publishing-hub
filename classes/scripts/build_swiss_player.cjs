/**
 * build_swiss_player.cjs
 * Compila el reproductor de estilo Suizo (Swiss Editorial / Claude Design)
 * inyectando todas las clases de Gastroenterología y Nefrología generadas desde los libros.
 */

const fs = require('fs');
const path = require('path');
const { accentForSpecialty } = require('./specialty_colors.cjs');

const ROOT = path.join(__dirname, '..', '..');
const GASTRO_PATH = path.join(ROOT, 'classes', 'curriculum', 'gastroenterologia_decks_data.json');
const NEFRO_PATH = path.join(ROOT, 'classes', 'curriculum', 'nefrologia_decks_data.json');

const gastroDecks = fs.existsSync(GASTRO_PATH) ? JSON.parse(fs.readFileSync(GASTRO_PATH, 'utf8')) : {};
const nefroDecks = fs.existsSync(NEFRO_PATH) ? JSON.parse(fs.readFileSync(NEFRO_PATH, 'utf8')) : {};

function stripEmojis(text) {
  if (typeof text !== 'string') return text;
  return text
    .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}]/gu, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function extractSemanticCard(bullet, titleHint, sectionSubhead) {
  const clean = stripEmojis(String(bullet || '').replace(/<[^>]+>/g, '').trim());
  
  let tag = 'CONCEPTO CLAVE';
  let title = '';
  let body = clean;
  let kind = 'normal';

  // 1. Detectar prefijo formal tipo "Medidas generales: ..." o "Farmacoterapia: ..."
  const colonMatch = clean.match(/^([A-ZÁÉÍÓÚ][^:\n]{2,45}):\s+(.*)$/s);
  if (colonMatch) {
    title = colonMatch[1].trim();
    body = colonMatch[2].trim();
  } else if (/kdigo|estadio|criterio/i.test(clean)) {
    if (/estratificaci[oó]n|estadio/i.test(clean)) {
      title = 'Estratificación de Severidad (Estadios 1 a 3)';
    } else if (/definici[oó]n|deterioro brusco/i.test(clean)) {
      title = 'Definición Operativa y Criterios KDIGO';
    } else {
      title = 'Criterios Diagnósticos KDIGO';
    }
  } else if (/prueba terap[eé]utica|pirosis.*ibp/i.test(clean)) {
    title = 'Prueba Terapéutica con IBP (4–8 Semanas)';
  } else if (/ph-metr[ií]a/i.test(clean)) {
    title = 'pH-metría Esofágica de 24 Horas (Patrón Oro)';
  } else if (/endoscop[ií]a.*signos de alarma|eda obligatoria/i.test(clean)) {
    title = 'Endoscopía Alta Obligatoria (Signos de Alarma)';
  } else if (/es[oó]fago de barrett.*metaplasia/i.test(clean)) {
    title = 'Metaplasia Intestinal y Riesgo Neoplásico';
  } else if (/biopsia.*displasia/i.test(clean)) {
    title = 'Conducta según Biopsia (Displasia)';
  } else if (titleHint && !/aspecto|secci[oó]n|concepto|punto/i.test(titleHint) && titleHint.length <= 50) {
    title = titleHint;
    body = clean;
  } else {
    // Si no coincide con un patrón específico, extraer el núcleo nominal sin cortar con "..."
    const sentences = clean.split(/[.!?]\s+/);
    const firstSentence = sentences[0] || clean;
    if (firstSentence.length <= 50) {
      title = firstSentence;
      body = sentences.slice(1).join('. ');
    } else {
      const matchClause = firstSentence.match(/^([^,;]{12,50})[,;]/);
      if (matchClause) {
        title = matchClause[1].trim();
        body = clean.replace(matchClause[0], '').trim();
      } else {
        const words = firstSentence.split(' ');
        title = words.slice(0, 6).join(' ');
        body = clean;
      }
    }
  }

  if (!body || body.trim().length === 0) {
    body = clean;
  }

  // 2. Extraer Tag de categoría clínico y estilo (SIN EMOJIS)
  const fullText = (title + ' ' + body.slice(0, 100)).toLowerCase();
  if (/alarma|contraindica|urgencia|grave|riesgo|ojo|cuidado|evitar|mortalidad|shock|peligro|anuria|muerte/i.test(fullText)) {
    kind = 'alert';
    tag = 'ALERTA EUNACOM';
  } else if (/elecci[oó]n|primera l[ií]nea|gold standard|patr[oó]n oro|espec[ií]fico|pilar|confirmatorio/i.test(fullText)) {
    kind = 'key';
    tag = 'REGLA DE ORO';
  } else if (/f[aá]rmaco|dosis|ibp|esquema|mg|g\/d|diur[eé]tico|antibi[oó]tico|insulina|omeprazol/i.test(fullText)) {
    kind = 'pharma';
    tag = 'FARMACOTERAPIA';
  } else if (/criterio|kdigo|score|clasificaci[oó]n|estadio|ges|minsal/i.test(fullText)) {
    kind = 'criteria';
    tag = 'CRITERIO GES';
  } else {
    kind = 'normal';
    tag = 'CLAVE CLÍNICA';
  }

  title = stripEmojis(title.replace(/[.:,;…]+$/, '').trim());
  body = stripEmojis(body);
  tag = stripEmojis(tag);
  return { tag, title, body, kind };
}

function generateClinicalTeachingScript(slide, deck, specialtyName, idx, rawSlide) {
  const title = stripEmojis(slide.title || '');
  const specialty = specialtyName || 'Medicina Interna';
  const deckTitle = stripEmojis(deck.title || '');
  const qCount = deck.realQuestionCount || 4;

  // Slide 0: Cover / Apertura de Masterclass Oficial (Locución Ágil y Directa ~20 a 25s)
  if (idx === 0 || slide.type === 'cover' || (rawSlide && rawSlide.type === 'cover')) {
    if (deck.id === 'intro-01') {
      return `Bienvenidos a la inducción oficial del EUNACOM 2026. En esta sesión abordaremos la estructura de las 180 preguntas, su distribución por especialidad, cómo interpretar el Perfil V3 de ASOFAMECh y las estrategias de alto rendimiento para asegurar tu aprobación. Comencemos.`;
    }
    let rentabilidadStr = '';
    if (qCount >= 6) {
      rentabilidadStr = `un tema de máxima prioridad para el EUNACOM, acumulando ${qCount} preguntas oficiales en los exámenes históricos de 2013 a 2025`;
    } else if (qCount >= 3) {
      rentabilidadStr = `un tema de rentabilidad intermedia, evaluado en ${qCount} preguntas oficiales`;
    } else {
      rentabilidadStr = `un tema de frecuencia específica con ${qCount} preguntas en el histórico, pero con conceptos clave de descarte rápido que no podemos regalar`;
    }
    return `Bienvenidos a la clase de ${deckTitle}. Esta materia se clasifica como ${rentabilidadStr}. Pasemos directo a los conceptos esenciales que debes dominar para asegurar cada punto en el examen oficial.`;
  }

  // 1. Si rawSlide tiene notas clínicas ricas escritas, usarlas directamente como guion médico natural:
  if (rawSlide && rawSlide.notes) {
    let cleanNotes = stripEmojis(String(rawSlide.notes))
      .replace(/^\[SLIDE \d+\]\s*/i, '')
      .replace(/Exigencia legal según Perfil de Conocimientos.*?$/i, '')
      .replace(/MANEJO AUTÓNOMO APS:.*?$/i, '')
      .trim();

    const noteWords = cleanNotes.split(/\s+/).filter(Boolean);
    if (noteWords.length >= 25 && !/matriz de auditoría/i.test(cleanNotes)) {
      return cleanNotes;
    }
  }

  // 2. Bento: Explicación médica fluida y natural (SIN "Punto 1, Punto 2", SIN CESFAM)
  if (slide.type === 'bento') {
    const cards = slide.cards || [];
    let script = `${title}. `;
    
    cards.forEach((c) => {
      const cTitle = stripEmojis(c.title || '');
      const cBody = stripEmojis(c.body || '');
      if (cTitle && cBody) {
        script += `${cTitle}: ${cBody}. `;
      } else if (cBody) {
        script += `${cBody}. `;
      }
    });

    return script.trim();
  }

  // 3. Figura: Algoritmo clínico de decisión
  if (slide.type === 'figure') {
    let script = `Revisemos el algoritmo clínico para ${title}. `;
    const steps = slide.steps || [];
    if (steps.length > 0) {
      script += `En la primera fase, la prioridad clínica es: ${steps[0]}. `;
    }
    if (steps.length > 1) {
      script += `A continuación, avanzamos a la confirmación diagnóstica: ${steps[1]}. `;
    }
    if (steps.length > 2) {
      script += `Finalmente, la conducta definitiva o de urgencia establece: ${steps[2]}. `;
    }
    script += `Seguir esta secuencia de forma ordenada es la clave para responder con certeza en el examen.`;
    return script.trim();
  }

  // 4. Tabla: Criterios diferenciales y parámetros
  if (slide.type === 'table') {
    let script = `Revisemos los parámetros diferenciales en ${title}. `;
    const rows = slide.rows || [];
    rows.forEach((r) => {
      const param = (r.cells && r.cells[0]) || '';
      const val = (r.cells && r.cells[1]) || '';
      const extra = (r.cells && r.cells[2]) ? ` frente a ${r.cells[2]}` : '';
      if (param && val) {
        script += `Para ${param}, el criterio es ${val}${extra}. `;
        if (r.alert) {
          script += `Atención con este valor, ya que representa un signo de alarma crítico. `;
        }
      }
    });
    script += `Dominar estos puntos de corte permite diferenciar con rapidez las opciones en las preguntas clínicas.`;
    return script.trim();
  }

  // 5. Quiz: Casos clínicos reales comentados
  if (slide.type === 'quiz') {
    let script = `Analicemos este caso clínico: ${slide.stem} `;
    script += `La pregunta es: ${slide.question} `;
    
    const correctOpt = (slide.options || []).find(o => o.letter === slide.correct);
    const correctText = correctOpt ? correctOpt.text : '';
    
    script += `La conducta correcta es la opción ${slide.correct}: ${correctText}. `;
    if (slide.explanation) {
      script += `${slide.explanation} `;
    }

    const wrongOptions = (slide.options || []).filter(o => o.letter !== slide.correct);
    if (wrongOptions.length > 0) {
      const d1 = wrongOptions[0];
      script += `La alternativa ${d1.letter} no corresponde a la conducta de elección en esta etapa. `;
    }
    return script.trim();
  }

  return `${title}. Concepto clínico fundamental en ${specialty}.`;
}

function adaptDeckToSwiss(deck, specialtyName) {
  const code = (deck.perfilCodes && deck.perfilCodes[0]) || 'ASOFAMECh';
  const tierName = deck.tier === 3 ? 'MEGA-MASTERCLASS · 25 MIN' : deck.tier === 1 ? 'MICRO-CLASE · 8 MIN' : 'ESTÁNDAR · 15 MIN';
  
  const chapters = [
    { name: 'Fundamentos y Concepto', meta: '1 slide' },
    { name: 'Clínica y Diagnóstico', meta: '' },
    { name: 'Terapéutica y Decisiones', meta: '' },
    { name: 'Casos Clínicos EUNACOM', meta: '' }
  ];

  let clinCount = 0;
  let txCount = 0;
  let qCount = 0;

  // Inyectar algoritmo oficial de HDA en la clase correspondiente si no tiene figura
  const hasFig = deck.slides.some(s => s.type === 'figura' || s.type === 'figure');
  if (!hasFig && /hemorragia digestiva|hda/i.test(deck.title || '')) {
    const hdaSvgPath = path.join(ROOT, 'books', 'svg_diagrams', 'algo_hda.svg');
    if (fs.existsSync(hdaSvgPath)) {
      const hdaSvg = fs.readFileSync(hdaSvgPath, 'utf8');
      deck.slides.splice(Math.max(2, deck.slides.length - 2), 0, {
        type: 'figura',
        title: 'Algoritmo de Hemorragia Digestiva Alta (HDA) y Clasificación de Forrest',
        svg: hdaSvg,
        notes: 'Protocolo de estabilización hemodinámica (ABC), uso de IBP en bolo e infusión, sospecha varicial y tiempo de endoscopía según clasificación de Forrest.'
      });
    }
  }

  // Filtrar terminantemente cualquier diapositiva de "Matriz de Auditoría"
  const rawSlides = (deck.slides || []).filter((s, idx) => {
    if (idx === 0) return true; // Mantener portada
    const t = (s.title || '').toLowerCase();
    const nav = (s.nav || '').toLowerCase();
    if (t.includes('auditoría') || nav.includes('auditoría') || t.includes('matriz de auditoría')) {
      return false;
    }
    if (s.headers && s.headers.some(h => /código|situación clínica|seguimiento/i.test(h)) && s.rows && s.rows.length <= 2) {
      return false;
    }
    return true;
  });

  const slides = rawSlides.map((s, idx) => {
    let ch = 1;
    if (s.type === 'cover' || idx === 0) {
      ch = 0;
    } else if (s.type === 'question') {
      ch = 3;
      qCount++;
    } else if (s.type === 'table' || (s.type === 'bento' && /tratamiento|fármaco|terapia|manejo|dosis/i.test(s.title || ''))) {
      ch = 2;
      txCount++;
    } else {
      ch = 1;
      clinCount++;
    }

    let slideObj = null;

    if (s.type === 'cover' || idx === 0) {
      const qHist = deck.realQuestionCount || 0;
      const rentTier = qHist >= 6 ? 'MÁXIMA RENTABILIDAD' : (qHist >= 3 ? 'ALTA RENTABILIDAD' : 'CONCEPTO ESPECÍFICO');
      const rentColor = qHist >= 6 ? '#B4322A' : (qHist >= 3 ? '#B45309' : '#475569');
      slideObj = {
        ch: 0,
        type: 'cover',
        title: stripEmojis(s.title || deck.title),
        kicker: stripEmojis(s.kicker || (specialtyName.toUpperCase() + ' · MASTERCLASS EUNACOM')),
        subtitle: stripEmojis(s.subtitle || 'Exigencias del Perfil V3 de ASOFAMECh, algoritmos de urgencia y casos clínicos oficiales.'),
        code: 'ASOFAMECh · Código ' + code,
        realQuestionCount: qHist,
        rentabilidad: rentTier,
        rentColor: rentColor,
        specialty: specialtyName,
        deckBadge: tierName
      };
    } else if (s.type === 'table') {
      const headers = (s.headers || ['Parámetro', 'Criterio']).map(h => stripEmojis(h));
      slideObj = {
        ch,
        type: 'table',
        title: stripEmojis(s.title),
        kicker: stripEmojis(s.nav || 'TABLA CLÍNICA'),
        note: stripEmojis(s.pearl || s.subtitle || 'Parámetros clave para la toma de decisiones en el examen.'),
        cols: headers.map((_, i) => i === 0 ? '1.4fr' : '1fr'),
        head: headers,
        rows: (s.rows || []).map(r => ({
          cells: (r.cells || []).map(c => stripEmojis(c)),
          hi: !!r.highlight,
          alert: (r.cells || []).some(c => /derivar|urgencia|alerta|shock|muerte/i.test(c))
        }))
      };
    } else if (s.type === 'bento') {
      let cards = [];
      if (s.cards && Array.isArray(s.cards) && s.cards.length > 0) {
        cards = s.cards.map(c => {
          let bodyStr = '';
          if (Array.isArray(c.bullets)) {
            bodyStr = c.bullets.map(b => b.trim()).filter(Boolean).join('\n');
          } else if (typeof c.body === 'string') {
            bodyStr = c.body;
          }
          return {
            tag: stripEmojis(c.tag || 'CLAVE CLÍNICA'),
            title: stripEmojis(c.title || ''),
            body: stripEmojis(bodyStr),
            kind: c.kind || 'normal'
          };
        });
      } else if (s.tiles && Array.isArray(s.tiles) && s.tiles.length > 0) {
        if (s.tiles.length === 1 && (s.tiles[0].bullets || []).length >= 4) {
          const allB = s.tiles[0].bullets;
          const mid = Math.ceil(allB.length / 2);
          const b1 = allB.slice(0, mid);
          const b2 = allB.slice(mid);
          const t1Title = b1[0].includes(':') ? b1[0].split(':')[0] : s.title;
          const t2Title = b2[0].includes(':') ? b2[0].split(':')[0] : 'Criterios Complementarios';
          cards.push({
            tag: 'CLAVE CLÍNICA',
            title: stripEmojis(t1Title),
            body: stripEmojis(b1.join('\n')),
            kind: 'normal'
          });
          cards.push({
            tag: 'REGLA DE ORO',
            title: stripEmojis(t2Title),
            body: stripEmojis(b2.join('\n')),
            kind: 'key'
          });
        } else {
          s.tiles.forEach(t => {
            const bodyStr = (t.bullets || []).join('\n');
            const tileTitle = t.title || (t.bullets && t.bullets[0] && t.bullets[0].includes(':') ? t.bullets[0].split(':')[0] : s.title);
            cards.push({
              tag: stripEmojis(t.tag || 'CLAVE CLÍNICA'),
              title: stripEmojis(tileTitle),
              body: stripEmojis(bodyStr),
              kind: t.kind || 'normal'
            });
          });
        }
      }
      slideObj = {
        ch,
        type: 'bento',
        title: stripEmojis(s.title),
        kicker: stripEmojis(s.nav || 'CONCEPTO CLÍNICO'),
        cards: cards.length ? cards : [{ span: 6, tag: 'CLAVE CLÍNICA', title: stripEmojis(s.title), body: stripEmojis(s.subtitle || ''), kind: 'normal' }]
      };
    } else if (s.type === 'question') {
      const letters = ['A', 'B', 'C', 'D', 'E'];
      const correctOpt = (s.options || []).find(o => o.isCorrect) || {};
      slideObj = {
        ch: 3,
        type: 'quiz',
        title: stripEmojis(s.nav || ('Caso EUNACOM #' + (s.number || 1))),
        kicker: stripEmojis(s.badge || 'Pregunta Oficial EUNACOM'),
        stem: stripEmojis(s.caseText),
        question: stripEmojis(s.question || '¿Cuál es la conducta más adecuada?'),
        options: (s.options || []).map((o, oi) => ({
          letter: o.id || letters[oi] || 'A',
          text: stripEmojis(o.text)
        })),
        correct: correctOpt.id || 'A',
        explanation: stripEmojis(s.explanation || 'Justificación oficial según Perfil de Conocimientos ASOFAMECh.'),
        ref: stripEmojis(s.ref || 'Guías Clínicas GES / MINSAL 2026')
      };
    } else if (s.type === 'figura' || s.type === 'figure') {
      let rawSvg = s.svg || '';
      if (!rawSvg && s.svgFile) {
        const svgFullPath = path.resolve(ROOT, s.svgFile);
        if (fs.existsSync(svgFullPath)) {
          rawSvg = fs.readFileSync(svgFullPath, 'utf8');
        }
      }

      let cleanSvg = rawSvg
        .replace(/height=["']240px["']/gi, 'height="100%"')
        .replace(/style=["'][^"']*["']/gi, 'style="max-width:100%;max-height:100%;width:auto;height:100%;font-family:system-ui,sans-serif;"')
        .replace(/max-width:\s*\d+px;?/gi, '');

      if (!cleanSvg.includes('preserveAspectRatio')) {
        cleanSvg = cleanSvg.replace(/<svg\b/i, '<svg preserveAspectRatio="xMidYMid meet"');
      }

      let steps = s.steps || [
        '1. Sospecha diagnóstica inicial y descarte de emergencias',
        '2. Algoritmo de laboratorio, índices y confirmación',
        '3. Criterios de conducta de urgencia y derivación'
      ];

      const fullContext = ((s.title || '') + ' ' + (deck.title || '')).toLowerCase();
      if (!s.steps) {
        if (/renal|ira|kdigo|nefro/i.test(fullContext)) {
          steps = [
            '1. Descarte postrenal inmediato (Ecografía o Sonda Foley)',
            '2. Índices Urinarios: FeNa < 1% (Prerrenal) vs > 2% (NTA)',
            '3. Criterios AEIOU: Hemodiálisis de urgencia inmediata'
          ];
        } else if (/hda|hemorragia|digestiv/i.test(fullContext)) {
          steps = [
            '1. Reanimación hemodinámica precoz (cristaloides + transfusión si Hb < 7)',
            '2. IBP bolo 80 mg + infusión 8 mg/h EV y vasoactivos si DHC',
            '3. Endoscopía digestiva alta precoz en < 24h y clasificación de Forrest'
          ];
        } else if (/dispepsia|ulcera|pylori/i.test(fullContext)) {
          steps = [
            '1. Estratificación: Edad ≥ 50 años o Alarma → EDA inmediata con biopsias',
            '2. Menor de 50 años sin alarma → Test & Treat H. pylori o IBP 4 semanas',
            '3. Úlcera Gástrica (control 6-8 sem) vs Duodenal (erradicar siempre H. pylori)'
          ];
        } else if (/erge|reflujo|esofag|barrett/i.test(fullContext)) {
          steps = [
            '1. Estratificación: Banderas rojas o ≥ 50 años → EDA obligatoria con biopsias',
            '2. Paciente joven sin alarma: Típico (IBP 4-8 sem) vs Atípico (IBP doble + pH-metría 24h)',
            '3. Barrett según Biopsia: Sin displasia (IBP + EDA 3-5a) vs Displasia (RFA/EMR)'
          ];
        }
      }

      slideObj = {
        ch: 2,
        type: 'figure',
        title: stripEmojis(s.title || 'Algoritmo Clínico de Decisión'),
        kicker: 'ALGORITMO DE DECISIÓN CLÍNICA',
        caption: stripEmojis(s.caption || 'Algoritmo de decisión médica y conducta de urgencia'),
        label: stripEmojis(s.label || 'FIG. 01 · ALGORITMO OFICIAL HD'),
        svg: cleanSvg,
        steps: steps.map(st => stripEmojis(st))
      };
    } else {
      slideObj = {
        ch: 1,
        type: 'bento',
        title: stripEmojis(s.title || 'Concepto'),
        cards: [{ span: 6, tag: 'Información', title: stripEmojis(s.title || ''), body: stripEmojis(s.notes || ''), kind: 'normal' }]
      };
    }

    // Inyectar el guion pedagógico explicativo docente de Masterclass completa (250-400 palabras)
    const teachingScript = generateClinicalTeachingScript(slideObj, deck, specialtyName, idx, s);
    slideObj.notes = [teachingScript];

    return slideObj;
  });

  chapters[1].meta = clinCount + ' slides';
  chapters[2].meta = txCount + ' slides';
  chapters[3].meta = qCount + ' casos';

  return {
    id: deck.id,
    specialty: specialtyName,
    accent: accentForSpecialty(specialtyName),
    title: stripEmojis(deck.title),
    code: 'ASOFAMECh · ' + code + ' · Perfil V3',
    badge: tierName,
    chapters,
    slides
  };
}

// Adaptar todas las clases
const ALL_CLASSES = [];

// Clase 00: Inducción Oficial EUNACOM 2026
const introDeckPath = path.join(ROOT, 'classes', 'curriculum', 'eunacom_intro_deck.json');
if (fs.existsSync(introDeckPath)) {
  const introDeck = JSON.parse(fs.readFileSync(introDeckPath, 'utf8'));
  ALL_CLASSES.push(adaptDeckToSwiss(introDeck, 'Inducción Oficial'));
}

// Clases de Gastroenterología
Object.values(gastroDecks).forEach(d => {
  ALL_CLASSES.push(adaptDeckToSwiss(d, 'Gastroenterología'));
});

// Clases de Nefrología
Object.values(nefroDecks).forEach(d => {
  ALL_CLASSES.push(adaptDeckToSwiss(d, 'Nefrología'));
});

console.log(`Total clases adaptadas al estándar Suizo: ${ALL_CLASSES.length}`);

/// Cargar la plantilla HTML/JS del Reproductor Suizo
const templatePath = path.join(__dirname, 'player_template.html');
let htmlContent = fs.readFileSync(templatePath, 'utf8');

// Inyectar datos de clases y catálogo
htmlContent = htmlContent.replace('/*__CLASSES_DATA_PLACEHOLDER__*/', `const CLASSES = ${JSON.stringify(ALL_CLASSES)};`);
htmlContent = htmlContent.replace('Catálogo Oficial de Clases EUNACOM', `Catálogo Oficial de Clases EUNACOM (${ALL_CLASSES.length} Clases)`);

const outPath = path.join(ROOT, 'classes', 'decks', 'Reproductor_Suiza_Oficial.html');
fs.writeFileSync(outPath, htmlContent, 'utf8');
console.log(`✔ Reproductor Suizo Oficial generado exitosamente en: ${outPath}`);

// Copia sincronizada usada por algunos enlaces/entornos como player.html
const playerCopyPath = path.join(ROOT, 'classes', 'decks', 'player.html');
fs.writeFileSync(playerCopyPath, htmlContent, 'utf8');
console.log(`✔ Copia sincronizada generada en: ${playerCopyPath}`);

// Artefactos opcionales de un entorno de desarrollo local (Antigravity). Solo se
// escriben si esa carpeta existe en esta máquina; en cualquier otro entorno se
// omiten sin interrumpir la generación del reproductor.
const artifactDir = 'C:/Users/PC/.gemini/antigravity/brain/1d7a0239-d155-4cb9-9422-60adf8cd5e8c';
if (fs.existsSync(artifactDir)) {
  fs.writeFileSync(path.join(artifactDir, 'reproductor_suizo.html'), htmlContent, 'utf8');
  fs.writeFileSync(path.join(artifactDir, 'reproductor_suizo_oficial.html'), htmlContent, 'utf8');
  console.log('✔ Artefactos Antigravity generados exitosamente.');
}

