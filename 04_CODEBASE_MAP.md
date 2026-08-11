# Mates Quest — Codebase Map

## Árbol relevante de `beta`

```text
index.html                       Aplicación fuente compartida con Producción
manifest.json                   PWA de Producción
service-worker.js               Caché de Producción
src/config/app-config.json      Fuente única de identidad Beta
src/beta/                       UI, CSS y runtime exclusivos de Beta
scripts/build-beta.mjs          Genera dist/ para Beta
.github/workflows/              Checks y publicación
firebase.json                   Configuración Firebase versionada
firestore.rules                 Contrato de Rules aún no desplegado
firestore.indexes.json          Índices versionados
00_...13_*.md                   Documentación operativa
```

## Entry points y load order

1. `index.html` contiene estructura, estilos y lógica de Producción.
2. En Beta, `scripts/build-beta.mjs` sustituye marcadores deterministas.
3. El build incrusta `src/beta/beta.css`, `beta-ui.html` y `beta-runtime.js`.
4. El navegador registra el `service-worker.js` situado junto al HTML servido.
5. `initCloudSync()` carga Firebase App y Firestore compat de forma dinámica.

## Dónde cambiar

- Lógica de módulos, perfiles o sync común: `index.html` en `beta`.
- Identidad/versión/namespace Beta: `src/config/app-config.json`.
- UI técnica Beta: `src/beta/*`.
- Transformación y aislamiento Beta: `scripts/build-beta.mjs`.
- PWA Producción: `manifest.json`, `service-worker.js` solo con aprobación.
- CI/deploy: `.github/workflows/*`.
- Seguridad declarativa: `firestore.rules` y `firebase.json`.

## Artefactos y legacy

- `dist/` es generado y no se versiona en `beta`.
- `main:/beta/` contiene artefactos generados para GitHub Pages.
- `architecture/beta-bootstrap` es una rama histórica; no debe usarse como fuente actual.
- Ningún archivo debe retirarse sin revisar imports, build, manifest, SW y workflows.

