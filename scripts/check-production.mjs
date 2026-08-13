import fs from 'node:fs';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);
const html = fs.readFileSync(new URL('index.html', root), 'utf8');
const i18n = fs.readFileSync(new URL('src/i18n.js', root), 'utf8');
const serviceWorker = fs.readFileSync(new URL('service-worker.js', root), 'utf8');

for (const [index, match] of [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)].entries()) {
  if (!match[1].trim()) continue;
  try {
    new vm.Script(match[1], { filename: `index-inline-script-${index + 1}.js` });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
new vm.Script(i18n, { filename: 'src/i18n.js' });
new vm.Script(serviceWorker, { filename: 'service-worker.js' });

const checks = [
  ['Production title', html.includes('<title>Mates Quest</title>') && !html.includes('<title>Mates Quest Beta</title>')],
  ['Production Firebase', html.includes('projectId: "mates-quest"') && !html.includes('projectId: "mates-quest-beta"')],
  ['Production storage', html.includes("const STORAGE_KEY='matesQuestDB_v1';")],
  ['No Beta runtime', !html.includes('MATES_QUEST_CONFIG') && !html.includes('beta-runtime')],
  ['Production blue identity', html.includes('#8ad8ff') && !html.includes('beta-badge')],
  ['Language selector', html.includes('id="languageSelect"')],
  ['Production i18n runtime', html.includes('src/i18n.js') && i18n.includes("'mates-quest:language'")],
  ['Lives removed', !html.includes('id="heartsCard"') && !html.includes('challenge-hearts')],
  ['Pensa module', html.includes('id="thinkModule"')],
  ['Decimal division teaching', html.includes('askDecimalContinuation') && html.includes('askDecimalZero')],
  ['Full division undo', html.includes('divisionBackBtn')],
  ['Production cache', serviceWorker.includes("'./src/i18n.js'") && serviceWorker.includes('mates-quest-v7-2')]
];

const failed = checks.filter(([, ok]) => !ok);
if (failed.length) {
  console.error(`Production checks failed: ${failed.map(([name]) => name).join(', ')}`);
  process.exit(1);
}

console.log(`Production checks passed (${checks.length}/${checks.length}).`);
