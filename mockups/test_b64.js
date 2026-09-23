const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

function getBase64(fileRel) {
  const full = path.resolve(__dirname, fileRel);
  const data = fs.readFileSync(full);
  return 'data:image/png;base64,' + data.toString('base64');
}

const c01 = getBase64('covers/Tomo_01_Cardiologia_Completo_2026.png');
const p4 = getBase64('page_4.png');
const p5 = getBase64('page_5.png');

console.log('Base64 sizes:', c01.length, p4.length, p5.length);
