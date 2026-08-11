import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const dist = resolve(root, 'dist');
const checkOnly = process.argv.includes('--check');

const read = (path) => readFile(resolve(root, path), 'utf8');
const requiredReplace = (source, search, replacement, label) => {
  if (!source.includes(search)) throw new Error(`No se encontró el marcador requerido: ${label}`);
  return source.replace(search, replacement);
};

const config = JSON.parse(await read('src/config/app-config.json'));
const betaCss = await read('src/beta/beta.css');
const betaUi = await read('src/beta/beta-ui.html');
const betaRuntime = await read('src/beta/beta-runtime.js');
const buildDate = new Date().toISOString();
const gitCommit = process.env.GITHUB_SHA || 'local-build';
const buildConfig = Object.freeze({ ...config, buildDate, gitCommit });

let html = await read('index.html');
html = requiredReplace(html, '<title>Mates Quest</title>', '<title>Mates Quest Beta</title>', 'document title');
html = requiredReplace(html, '<meta name="application-name" content="Mates Quest"/>', '<meta name="application-name" content="Mates Quest Beta"/>', 'application name');
html = requiredReplace(html, '<meta name="mates-quest-build" content="7.1-auditada"/>', `<meta name="mates-quest-environment" content="${config.environment}"/>\n<script>window.MATES_QUEST_CONFIG=Object.freeze(${JSON.stringify(buildConfig)});</script>`, 'build metadata');
const productionFirebaseConfig = `const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAMgDIyGA9EdzktM3Eij97xI-9tyPCWD4Y",
  authDomain: "mates-quest.firebaseapp.com",
  projectId: "mates-quest",
  storageBucket: "mates-quest.firebasestorage.app",
  messagingSenderId: "523832660463",
  appId: "1:523832660463:web:b357d0f443a8e9f6f0261a",
  measurementId: "G-F2NKZHHC4K"
};`;
const betaFirebaseConfig = `const FIREBASE_CONFIG = ${JSON.stringify(config.firebaseConfig, null, 2)};`;
html = requiredReplace(html, productionFirebaseConfig, betaFirebaseConfig, 'Beta Firebase client configuration');
html = requiredReplace(html, '<link href="icon-192.png" rel="icon"/>', '<link href="icon-beta-192.png" rel="icon"/>', 'browser icon');
html = requiredReplace(html, '<link href="icon-192.png" rel="apple-touch-icon"/>', '<link href="icon-beta-192.png" rel="apple-touch-icon"/>', 'Apple touch icon');
html = requiredReplace(html, '<meta content="Mates Quest" name="apple-mobile-web-app-title"/>', '<meta content="MQ Beta" name="apple-mobile-web-app-title"/>', 'Apple application title');
html = requiredReplace(html, '</head>', `<style>\n${betaCss}\n</style>\n</head>`, 'head closing tag');
html = requiredReplace(
  html,
  '<div class="app-brand"><b>Mates Quest</b><span>Práctica guiada de matemáticas</span></div>',
  '<div class="app-brand"><b id="appDisplayName">Mates Quest Beta</b><span>Práctica guiada de matemáticas</span></div>\n<span class="beta-badge" id="betaVersionBadge">BETA</span>\n<button class="about-trigger" id="aboutOpenBtn" type="button">Acerca de</button>',
  'application brand'
);
html = requiredReplace(html, "const STORAGE_KEY='matesQuestDB_v1';", "const STORAGE_KEY=`${window.MATES_QUEST_CONFIG.storagePrefix}:db:v1`;", 'local database key');
html = requiredReplace(html, "const SYNC_CODE_KEY='matesQuestSyncCode';", "const SYNC_CODE_KEY=`${window.MATES_QUEST_CONFIG.storagePrefix}:syncCode`;", 'sync code key');
html = requiredReplace(
  html,
  'let applyingRemoteChange=false;',
  "let applyingRemoteChange=false;\nfunction betaSyncDocument(code){return firestoreDB.collection('syncs').doc(`${window.MATES_QUEST_CONFIG.firebaseNamespace}-${code}`)}",
  'Firebase sync state'
);
html = html.replaceAll("firestoreDB.collection('syncs').doc(code)", 'betaSyncDocument(code)');
html = requiredReplace(html, '</body>', `${betaUi}\n<script>\n${betaRuntime}\n</script>\n</body>`, 'body closing tag');

const manifest = {
  id: './',
  name: config.appName,
  short_name: config.shortName,
  description: 'Entorno Beta de Mates Quest para probar nuevas funciones',
  start_url: './index.html?source=pwa-beta',
  scope: './',
  display: 'standalone',
  orientation: 'any',
  background_color: config.backgroundColor,
  theme_color: config.themeColor,
  icons: [
    { src: 'icon-beta-192.png', sizes: '192x192', type: 'image/png', purpose: 'any maskable' },
    { src: 'icon-beta-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
  ]
};

const cacheName = `${config.cachePrefix}-${config.version}`;
const serviceWorker = `const CACHE_PREFIX=${JSON.stringify(`${config.cachePrefix}-`)};\nconst CACHE_NAME=${JSON.stringify(cacheName)};\nconst APP_SHELL=['./index.html','./manifest.json','./icon-beta-192.png','./icon-beta-512.png'];\n\nself.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(APP_SHELL)));self.skipWaiting()});\nself.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith(CACHE_PREFIX)&&key!==CACHE_NAME).map(key=>caches.delete(key)))));self.clients.claim()});\nself.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;const url=new URL(event.request.url);if(url.origin!==self.location.origin)return;if(event.request.mode==='navigate'){event.respondWith(fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put('./index.html',copy));return response}).catch(()=>caches.match('./index.html')));return}if(APP_SHELL.some(path=>url.pathname.endsWith(path.replace('./','/')))){event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy));return response})))}});\n`;

const checks = [
  ['Beta title', html.includes('<title>Mates Quest Beta</title>')],
  ['Beta storage', html.includes('window.MATES_QUEST_CONFIG.storagePrefix}:db:v1')],
  ['Beta sync documents', html.includes('betaSyncDocument(code)')],
  ['Beta Firebase project', html.includes('"projectId": "mates-quest-beta"') && !html.includes('"projectId": "mates-quest",')],
  ['About screen', html.includes('id="aboutDialog"')],
  ['Visible version', html.includes('id="betaVersionBadge"')],
  ['Beta icon', html.includes('icon-beta-192.png')],
  ['Relative manifest identity', manifest.id === './' && manifest.scope === './'],
  ['No MutationObserver patch', !betaRuntime.includes('MutationObserver')],
  ['Isolated cache prefix', serviceWorker.includes(config.cachePrefix)]
];
const failed = checks.filter(([, ok]) => !ok);
if (failed.length) throw new Error(`Fallaron comprobaciones: ${failed.map(([name]) => name).join(', ')}`);

if (!checkOnly) {
  await rm(dist, { recursive: true, force: true });
  await mkdir(dist, { recursive: true });
  await writeFile(resolve(dist, 'index.html'), html);
  await writeFile(resolve(dist, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
  await writeFile(resolve(dist, 'service-worker.js'), serviceWorker);
  await cp(resolve(root, 'icon-beta-192.png'), resolve(dist, 'icon-beta-192.png'));
  await cp(resolve(root, 'icon-beta-512.png'), resolve(dist, 'icon-beta-512.png'));
}

console.log(`Mates Quest ${config.version}: ${checkOnly ? 'comprobación correcta' : 'build creado en dist/'}`);
