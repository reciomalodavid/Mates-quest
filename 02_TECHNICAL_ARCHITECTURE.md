# Mates Quest — Technical Architecture

## Stack confirmado

- Frontend: HTML, CSS y JavaScript vanilla, concentrados en `index.html`.
- Build Beta: script ESM de Node (`scripts/build-beta.mjs`), Node 20 o superior.
- Package manager: npm; no hay dependencias runtime declaradas.
- Hosting: GitHub Pages.
- Cloud: Firebase Web SDK compat 10.12.2, solo App + Firestore.
- Persistencia local: `localStorage`; IndexedDB no se usa.

## Entornos

| Entorno | Rama fuente | URL | Build |
|---|---|---|---|
| Producción | `main` | `https://reciomalodavid.github.io/Mates-quest/` | Estático, `7.1-auditada` |
| Beta | `beta` | `https://reciomalodavid.github.io/Mates-quest/beta/` | `npm run build`, `1.0.0-beta.1` |

La publicación Beta compila `beta`, sustituye solo `main:/beta/` y hace commit automático. Esto escribe artefactos en `main`, aunque no modifica los archivos raíz de Producción.

## Firebase

- Project ID observado: `mates-quest`.
- Servicios usados por el cliente: Firestore.
- Auth: no se carga ni se usa.
- Storage, Functions, Firebase Hosting, Messaging y App Check: no observados.
- Producción y Beta comparten proyecto y colección `syncs`; Beta usa IDs `beta-<CODE>`.

## Estado, caché y PWA

- Producción: `matesQuestDB_v1`, `matesQuestSyncCode`, caché `mates-quest-v7-1`.
- Beta: `matesQuestBeta:db:v1`, `matesQuestBeta:syncCode`, caché `mates-quest-beta-1.0.0-beta.1`.
- Cada entorno tiene manifest, iconos y Service Worker propios.

## Integraciones y deuda

- Firebase se carga desde `gstatic.com` al iniciar la sincronización.
- La app es un monolito HTML de más de 400 KB; dificulta tests y ownership de módulos.
- No hay tests funcionales automatizados ni esquema formal.
- No hay autenticación ni autorización por usuario; la seguridad depende de Rules y del código compartido.

