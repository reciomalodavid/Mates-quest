import fs from 'node:fs';

const root = new URL('../', import.meta.url);
const i18n = fs.readFileSync(new URL('src/beta/i18n.js', root), 'utf8');
const sources = [
  ['index.html', fs.readFileSync(new URL('index.html', root), 'utf8')],
  ['src/beta/beta-ui.html', fs.readFileSync(new URL('src/beta/beta-ui.html', root), 'utf8')]
];
const singleQuotedKeys = [...i18n.matchAll(/(?:^|[,{])\s*'((?:[^'\\]|\\.)*)'\s*:/gm)]
  .map(match => match[1].replaceAll("\\'", "'"));
const doubleQuotedKeys = [...i18n.matchAll(/(?:^|[,{])\s*"((?:[^"\\]|\\.)*)"\s*:/gm)]
  .map(match => JSON.parse(`"${match[1]}"`));
const keys = new Set([...singleQuotedKeys, ...doubleQuotedKeys]);
const normalize = (text) => text
  .replace(/&nbsp;/g, ' ')
  .replace(/&amp;/g, '&')
  .replace(/&times;/g, '×')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/\s+/g, ' ')
  .trim();
const candidates = [];
for (const [file, html] of sources) {
  const withoutCode = html
    .replace(/<script\b[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[\s\S]*?<\/style>/gi, '');
  for (const match of withoutCode.matchAll(/>([^<>]+)</g)) {
    const text = normalize(match[1]);
    if (/[A-Za-zÁÉÍÓÚáéíóúÑñ¿¡]/.test(text)) candidates.push({ file, text });
  }
  for (const match of withoutCode.matchAll(/\b(?:placeholder|title|aria-label|data-explanation)="([^"]+)"/g)) {
    const text = normalize(match[1]);
    if (/[A-Za-zÁÉÍÓÚáéíóúÑñ¿¡]/.test(text)) candidates.push({ file, text });
  }
}
const missing = [...new Map(candidates.filter(({ text }) => !keys.has(text))
  .map(candidate => [candidate.text, candidate])).values()];
if (missing.length) {
  console.error(`Catalan static coverage incomplete (${missing.length}):`);
  for (const { file, text } of missing) console.error(`- [${file}] ${text}`);
  process.exit(1);
}

const sourceScripts = fs.readFileSync(new URL('index.html', root), 'utf8')
  .match(/<script\\b[^>]*>([\\s\\S]*?)<\\/script>/gi)?.join('\n') || '';
const dynamicHtmlFragments = [];
for (const literal of sourceScripts.matchAll(/(?:'((?:[^'\\\\]|\\\\.)*)'|"((?:[^"\\\\]|\\\\.)*)"|`((?:[^`\\\\]|\\\\.)*)`)/g)) {
  const value = literal[1] ?? literal[2] ?? literal[3] ?? '';
  if (!value.includes('<')) continue;
  for (const fragment of value.matchAll(/>([^<>]+)</g)) {
    const text = normalize(fragment[1]);
    if (text.includes('${') || !/[A-Za-zÁÉÍÓÚáéíóúÑñ¿¡]/.test(text)) continue;
    dynamicHtmlFragments.push(text);
  }
}
const missingDynamicFragments = [...new Set(dynamicHtmlFragments)].filter(text => !keys.has(text));
if (missingDynamicFragments.length) {
  console.error(`Catalan dynamic HTML coverage incomplete (${missingDynamicFragments.length}):`);
  for (const text of missingDynamicFragments) console.error(`- ${text}`);
  process.exit(1);
}

const runtime = fs.readFileSync(new URL('src/beta/beta-runtime.js', root), 'utf8');
const runtimeKeys = [...runtime.matchAll(/\.t\(\s*['"]([^'"]+)['"]/g)].map(match => match[1]);
const missingRuntimeKeys = runtimeKeys.filter(key => !keys.has(key));
if (missingRuntimeKeys.length) {
  console.error(`Missing keyed runtime messages: ${[...new Set(missingRuntimeKeys)].join(', ')}`);
  process.exit(1);
}
for (const api of ['t,', 'addMessages,', 'matesquest:languagechange', 'sourceKeys']) {
  if (!i18n.includes(api)) {
    console.error(`Missing i18n architecture marker: ${api}`);
    process.exit(1);
  }
}
console.log(`Catalan coverage complete: ${new Set(candidates.map(({ text }) => text)).size} visible strings, ${new Set(dynamicHtmlFragments).size} dynamic HTML fragments and ${new Set(runtimeKeys).size} runtime keys.`);
