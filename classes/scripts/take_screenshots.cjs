const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    defaultViewport: { width: 1440, height: 900 }
  });
  const page = await browser.newPage();
  const url = 'file:///' + path.resolve('classes/decks/Reproductor_Suiza_Oficial.html').replace(/\\/g, '/');
  await page.goto(url, { waitUntil: 'networkidle0' });

  // 0a. Cover slide of intro-01 (EUNACOM 101 Inducción Oficial)
  await page.evaluate(() => {
    const idx = CLASSES.findIndex(c => c.id === 'intro-01');
    if (idx >= 0) { setClass(idx); jumpTo(0); }
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'classes/scripts/screen_cover_intro.png' });
  console.log('Saved screen_cover_intro.png');

  // 0b. Cover slide of gastro-01 (Reflujo y Barrett)
  await page.evaluate(() => {
    const idx = CLASSES.findIndex(c => c.id === 'gastro-01');
    if (idx >= 0) { setClass(idx); jumpTo(0); }
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'classes/scripts/screen_cover_gastro.png' });
  console.log('Saved screen_cover_gastro.png');

  // 0c. Cover slide of nefro-01 (Injuria Renal Aguda)
  await page.evaluate(() => {
    const idx = CLASSES.findIndex(c => c.id === 'nefro-01');
    if (idx >= 0) { setClass(idx); jumpTo(0); }
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'classes/scripts/screen_cover_nefro.png' });
  console.log('Saved screen_cover_nefro.png');

  // 0d. Gastro-01 Slide 2: Pure clinical presentation (Zero badges, Zero audit matrix)
  await page.evaluate(() => {
    const idx = CLASSES.findIndex(c => c.id === 'gastro-01');
    if (idx >= 0) { setClass(idx); jumpTo(1); }
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'classes/scripts/screen_gastro_slide2.png' });
  console.log('Saved screen_gastro_slide2.png');

  // 0e. Gastro-01 Slide 5: Barrett Seattle Protocol
  await page.evaluate(() => {
    const idx = CLASSES.findIndex(c => c.id === 'gastro-01');
    if (idx >= 0) { setClass(idx); jumpTo(4); }
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'classes/scripts/screen_gastro01_barrett_protocol.png' });
  console.log('Saved screen_gastro01_barrett_protocol.png');

  // 0f. Gastro-01 Slide 6: Barrett Algoritmo Escalonado
  await page.evaluate(() => {
    const idx = CLASSES.findIndex(c => c.id === 'gastro-01');
    if (idx >= 0) { setClass(idx); jumpTo(5); }
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'classes/scripts/screen_gastro01_barrett_algo.png' });
  console.log('Saved screen_gastro01_barrett_algo.png');

  // 0g. Gastro-02 Cover: Úlcera Péptica, Dispepsia y H. pylori
  await page.evaluate(() => {
    const idx = CLASSES.findIndex(c => c.id === 'gastro-02');
    if (idx >= 0) { setClass(idx); jumpTo(0); }
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'classes/scripts/screen_cover_gastro02.png' });
  console.log('Saved screen_cover_gastro02.png');

  // 0h. Gastro-02 Slide 4: Diagnóstico Diferencial Úlcera Duodenal vs Gástrica
  await page.evaluate(() => {
    const idx = CLASSES.findIndex(c => c.id === 'gastro-02');
    if (idx >= 0) { setClass(idx); jumpTo(3); }
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'classes/scripts/screen_gastro02_ulcer_differential.png' });
  console.log('Saved screen_gastro02_ulcer_differential.png');

  // 0i. Gastro-02 Slide 6: Algoritmo SVG Dispepsia y Úlcera Péptica
  await page.evaluate(() => {
    const idx = CLASSES.findIndex(c => c.id === 'gastro-02');
    if (idx >= 0) { setClass(idx); jumpTo(5); }
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'classes/scripts/screen_gastro02_algo.png' });
  console.log('Saved screen_gastro02_algo.png');

  // 0j. Gastro-02 Slide 7: Matriz de Decisiones Pépticas
  await page.evaluate(() => {
    const idx = CLASSES.findIndex(c => c.id === 'gastro-02');
    if (idx >= 0) { setClass(idx); jumpTo(6); }
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'classes/scripts/screen_gastro02_decisions_table.png' });
  console.log('Saved screen_gastro02_decisions_table.png');

  // Switch back to Nefro 1.1 for interactive whiteboard tests
  await page.evaluate(() => {
    const idx = CLASSES.findIndex(c => c.id === 'nefro-01');
    if (idx >= 0) { setClass(idx); jumpTo(1); }
  });
  await new Promise(r => setTimeout(r, 600));

  // 1. Step 0: Initial whiteboard state (Tarjeta 1 activa, siguientes en espera)
  await page.screenshot({ path: 'classes/scripts/screen_step0.png' });
  console.log('Saved screen_step0.png');

  // 2. Advance to Step 1: Animate hand-drawn connecting arrow and highlighter marks
  await page.evaluate(() => nextStep());
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'classes/scripts/screen_step1_arrow.png' });
  console.log('Saved screen_step1_arrow.png');

  // 3. Advance to Step 2: Full whiteboard revealed with all arrows and highlights
  await page.evaluate(() => nextStep());
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'classes/scripts/screen_step2_full.png' });
  console.log('Saved screen_step2_full.png');

  // 4. Diagram slide (dynamically found)
  const figIdx = await page.evaluate(() => currentClass().slides.findIndex(s => s.type === 'figure' || s.type === 'figura'));
  if (figIdx >= 0) {
    await page.evaluate((i) => jumpTo(i), figIdx);
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: 'classes/scripts/screen_diagram.png' });
    console.log('Saved screen_diagram.png');
  }

  // 5. Question slide
  const qIdx = await page.evaluate(() => currentClass().slides.findIndex(s => s.type === 'quiz' || s.type === 'question'));
  if (qIdx >= 0) {
    await page.evaluate((i) => jumpTo(i), qIdx);
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: 'classes/scripts/screen_quiz_stem.png' });
    console.log('Saved screen_quiz_stem.png');

    // Advance to reveal question and options
    await page.evaluate(() => nextStep());
    await page.evaluate(() => nextStep());
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: 'classes/scripts/screen_quiz_full.png' });
    console.log('Saved screen_quiz_full.png');
  }

  // 6. Test Audio Duration & Teacher Notes Drawer on Slide 4 (Fisiopatología KDIGO - 355 palabras)
  await page.evaluate(() => jumpTo(4));
  await new Promise(r => setTimeout(r, 700));
  
  // Verify audio duration label
  const audioInfo = await page.evaluate(() => {
    return {
      status: document.getElementById('audio-status-label') ? document.getElementById('audio-status-label').innerText : '',
      current: document.getElementById('audio-time-current') ? document.getElementById('audio-time-current').innerText : '',
      total: document.getElementById('audio-time-total') ? document.getElementById('audio-time-total').innerText : '',
      speed: document.getElementById('btn-audio-speed') ? document.getElementById('btn-audio-speed').innerText : ''
    };
  });
  console.log('Audio UI State on Slide 5 (Fisiopatología):', audioInfo);
  await page.screenshot({ path: 'classes/scripts/screen_audio_duration.png' });
  console.log('Saved screen_audio_duration.png');

  // Open Teacher Notes drawer to display the full clinical lecture
  await page.evaluate(() => {
    const d = document.getElementById('notes-drawer');
    d.style.display = 'flex';
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'classes/scripts/screen_notes_drawer.png' });
  console.log('Saved screen_notes_drawer.png');

  // 6. Inspect DOM for any emoji characters
  const emojiCheck = await page.evaluate(() => {
    const text = document.body.innerText;
    const emojiRegex = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{1F900}-\u{1F9FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}]/gu;
    const matches = text.match(emojiRegex);
    return {
      foundEmojis: matches ? matches.length : 0,
      emojis: matches || []
    };
  });
  console.log('Zero-Emoji Audit Result:', JSON.stringify(emojiCheck));

  const brainDir = 'C:/Users/PC/.gemini/antigravity/brain/1d7a0239-d155-4cb9-9422-60adf8cd5e8c';
  if (fs.existsSync('classes/scripts/screen_cover_intro.png')) {
    fs.copyFileSync('classes/scripts/screen_cover_intro.png', brainDir + '/screen_cover_intro.png');
  }
  if (fs.existsSync('classes/scripts/screen_cover_gastro.png')) {
    fs.copyFileSync('classes/scripts/screen_cover_gastro.png', brainDir + '/screen_cover_gastro.png');
  }
  if (fs.existsSync('classes/scripts/screen_cover_nefro.png')) {
    fs.copyFileSync('classes/scripts/screen_cover_nefro.png', brainDir + '/screen_cover_nefro.png');
  }
  if (fs.existsSync('classes/scripts/screen_gastro_slide2.png')) {
    fs.copyFileSync('classes/scripts/screen_gastro_slide2.png', brainDir + '/screen_gastro_slide2.png');
  }
  if (fs.existsSync('classes/scripts/screen_gastro01_barrett_protocol.png')) {
    fs.copyFileSync('classes/scripts/screen_gastro01_barrett_protocol.png', brainDir + '/screen_gastro01_barrett_protocol.png');
  }
  if (fs.existsSync('classes/scripts/screen_gastro01_barrett_algo.png')) {
    fs.copyFileSync('classes/scripts/screen_gastro01_barrett_algo.png', brainDir + '/screen_gastro01_barrett_algo.png');
  }
  if (fs.existsSync('classes/scripts/screen_cover_gastro02.png')) {
    fs.copyFileSync('classes/scripts/screen_cover_gastro02.png', brainDir + '/screen_cover_gastro02.png');
  }
  if (fs.existsSync('classes/scripts/screen_gastro02_ulcer_differential.png')) {
    fs.copyFileSync('classes/scripts/screen_gastro02_ulcer_differential.png', brainDir + '/screen_gastro02_ulcer_differential.png');
  }
  if (fs.existsSync('classes/scripts/screen_gastro02_algo.png')) {
    fs.copyFileSync('classes/scripts/screen_gastro02_algo.png', brainDir + '/screen_gastro02_algo.png');
  }
  if (fs.existsSync('classes/scripts/screen_gastro02_decisions_table.png')) {
    fs.copyFileSync('classes/scripts/screen_gastro02_decisions_table.png', brainDir + '/screen_gastro02_decisions_table.png');
  }
  fs.copyFileSync('classes/scripts/screen_step0.png', brainDir + '/screen_step0.png');
  fs.copyFileSync('classes/scripts/screen_step1_arrow.png', brainDir + '/screen_step1_arrow.png');
  fs.copyFileSync('classes/scripts/screen_step2_full.png', brainDir + '/screen_step2_full.png');
  fs.copyFileSync('classes/scripts/screen_diagram.png', brainDir + '/screen_diagram.png');
  if (fs.existsSync('classes/scripts/screen_quiz_stem.png')) {
    fs.copyFileSync('classes/scripts/screen_quiz_stem.png', brainDir + '/screen_quiz_stem.png');
  }
  if (fs.existsSync('classes/scripts/screen_quiz_full.png')) {
    fs.copyFileSync('classes/scripts/screen_quiz_full.png', brainDir + '/screen_quiz_full.png');
  }
  if (fs.existsSync('classes/scripts/screen_audio_duration.png')) {
    fs.copyFileSync('classes/scripts/screen_audio_duration.png', brainDir + '/screen_audio_duration.png');
  }
  if (fs.existsSync('classes/scripts/screen_notes_drawer.png')) {
    fs.copyFileSync('classes/scripts/screen_notes_drawer.png', brainDir + '/screen_notes_drawer.png');
  }
  console.log('All screenshots copied to brain directory.');

  await browser.close();
})();
