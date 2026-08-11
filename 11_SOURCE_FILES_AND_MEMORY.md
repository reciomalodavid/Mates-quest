# Mates Quest — Source Files and Memory

## Fuentes que conviene mantener accesibles

- Documentación `00_PROJECT_BRIEF.md` a `13_SYNC_BACKUP_RECOVERY.md`.
- `index.html`, `service-worker.js`, `manifest.json`.
- `src/config/app-config.json`, `scripts/build-beta.mjs` y `src/beta/*`.
- `.github/workflows/*`.
- `firebase.json`, `.firebaserc`, `firestore.rules`, `firestore.indexes.json`.
- Capturas de bugs responsive o de flujos que no puedan reproducirse automáticamente.

El repositorio actual es la fuente preferida; no conservar copias manuales antiguas como autoridad.

## Nunca subir

- Service accounts, tokens, claves privadas, `.env` o secretos.
- Exportaciones Firestore, backups reales o datos de menores/usuarios.
- `node_modules`, `dist/` de Beta, temporales o logs con datos.

## Memoria estable útil

- Repo: `reciomalodavid/Mates-quest`.
- `main` = Producción; `beta` = Preview-first.
- Producción no se toca sin aprobación concreta.
- No perder datos y no mezclar Beta/Producción son prioridades absolutas.
- David quiere acciones manuales mínimas y explicaciones cortas.

## No asumir sin verificar

- HEAD, build servido, estado de Actions o Rules activas.
- Que una publicación llegó al PWA instalado.
- Que Firebase Beta está aislado hasta que exista un proyecto separado.
- Que un bug está resuelto sin prueba real.

