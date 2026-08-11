import fs from 'node:fs';

const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const i18n = fs.readFileSync(new URL('../src/beta/i18n.js', import.meta.url), 'utf8');
const keys = new Set([...i18n.matchAll(/(?:^|[,{])\s*'((?:[^'\\]|\\.)*)'\s*:/gm)].map(match => match[1].replaceAll("\\'", "'")));
const withoutCode = html.replace(/<script\b[\s\S]*?<\/script>/gi, '').replace(/<style\b[\s\S]*?<\/style>/gi, '');
const candidates = [];
for (const match of withoutCode.matchAll(/>([^<>]+)</g)) {
  const text = match[1].replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&times;/g, '×').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();
  if (/[A-Za-zÁÉÍÓÚáéíóúÑñ¿¡]/.test(text)) candidates.push(text);
}
for (const match of withoutCode.matchAll(/\b(?:placeholder|title|aria-label)="([^"]+)"/g)) {
  const text = match[1].replace(/\s+/g, ' ').trim();
  if (/[A-Za-zÁÉÍÓÚáéíóúÑñ¿¡]/.test(text)) candidates.push(text);
}
const missing = [...new Set(candidates)].filter(text => !keys.has(text));
if (missing.length) {
  console.error(`Catalan static coverage incomplete (${missing.length}):`);
  for (const text of missing) console.error(`- ${text}`);
  process.exit(1);
}
console.log(`Catalan static coverage complete (${new Set(candidates).size} visible strings).`);
