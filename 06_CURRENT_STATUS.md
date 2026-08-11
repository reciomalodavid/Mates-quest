# Mates Quest — Current Status

**Fecha de corte:** 2026-08-11 18:35 CEST  
**Fuente de verdad:** repositorio GitHub y estado comunicado por David para el nuevo proyecto Firebase.

## Repositorio

- Repo: `reciomalodavid/Mates-quest` (público; conector con lectura/escritura/admin).
- Producción: rama `main`, HEAD verificado `d76ef3466cc59123c3a346618d7ef4d115d57fbb`.
- Trabajo: rama `beta`; últimos commits de este bloque: `cda8a67` y `bf4ac97`.
- `main` no se ha modificado en este bloque.

## Producción

- URL: `https://reciomalodavid.github.io/Mates-quest/`.
- Build: `7.1-auditada`.
- Firebase: `mates-quest`.
- Estado: congelado; no se han cambiado código, Rules ni datos.

## Beta

- URL publicada: `https://reciomalodavid.github.io/Mates-quest/beta/`.
- Build publicado: `1.0.0-beta.1`.
- Sigue apuntando a `mates-quest`; no se ha cambiado el cliente ni se han desplegado Rules.
- Documentos actuales: `/syncs/beta-{sixCharacterCode}`.

## Firebase Beta

- Project ID comunicado por David: `mates-quest-beta`.
- Alias `beta` añadido a `.firebaserc`.
- Existencia administrativa, Web App, Firestore `(default)` y acceso de deploy: pendientes de verificación.
- Plan de inventario, backup, copia, validación y rollback: versionado en `13_SYNC_BACKUP_RECOVERY.md`.

## Automatización

- Validación de configuración/Rules con Emulator: disponible.
- Deploy y copia reales: bloqueados hasta configurar una identidad segura para GitHub Actions con acceso limitado a ambos proyectos.
- No se usarán credenciales en archivos ni en el chat.

## Próximo paso exacto

Configurar acceso seguro de GitHub Actions a Firebase/Google Cloud para poder verificar el proyecto, inventariar y respaldar los documentos Beta y crear Firestore en el destino sin acciones manuales repetidas.

## Validación necesaria de David

Una única configuración de acceso seguro, indicada en el resumen del bloque.
