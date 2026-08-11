# Mates Quest — Current Status

**Fecha de corte:** 2026-08-11 20:45 CEST
**Fuente de verdad:** rama `beta`, workflows de GitHub y verificaciones administrativas Firebase.

## Separación Beta / Producción

- Producción: rama `main`, raíz GitHub Pages, Firebase `mates-quest`; no modificada.
- Beta: rama `beta`, URL `/Mates-quest/beta/`, Firebase exclusivo `mates-quest-beta`.
- Firestore Beta Native `(default)` en `eur3`; Web App Beta operativa.
- El cliente Beta usa `/syncs/beta-{CODE}` y configuración pública de `mates-quest-beta`.
- Documento `beta-BJTJAG` copiado y verificado; hash canónico de `fields`: `592f3be4af6054d5f17948384dcbcfaad1576901b7ff0a712589cb3bb980ea7e`.
- Prueba funcional confirmada por el propietario: perfiles cargados correctamente en Beta.

## Firebase como código

- Versionados en `beta`: `.firebaserc`, `firebase.json`, `firestore.rules` y `firestore.indexes.json`.
- Rules desplegadas en `mates-quest-beta` y compiladas correctamente.
- No se usan Auth, Storage, Functions, Hosting Firebase, App Check ni Messaging actualmente; no se añaden configuraciones innecesarias.
- Validación CI: compilación de Rules en Firestore Emulator y ensayo no destructivo de rollback.
- Deploy CI: workflow exclusivo de `beta`, destino explícito `mates-quest-beta`, autenticación OIDC/WIF de corta duración y sin claves en el repo.
- Evidencia real: GitHub Actions run `31518939693` completado con éxito el 2026-08-11; autenticación WIF, validación y deploy de Rules/índices Beta superados.

## Rollback

- Código: revert en `beta` y republicación exclusiva de `/beta/`.
- Rules/índices/config: restauración desde un commit conocido y deploy automático exclusivo a Beta.
- Datos: backup privado, hash previo/posterior y restore PATCH exclusivo a `mates-quest-beta`.
- Procedimiento completo: `13_SYNC_BACKUP_RECOVERY.md`.
- Validación: build Beta, validación estática y ensayo de backup/restore con datos sintéticos; no contacta proyectos reales.

## Riesgo conocido fuera de este cierre

La app aún no usa Firebase Auth. Los códigos de seis caracteres siguen siendo el control de acceso funcional. Mejorar Auth/ownership será una fase posterior y requiere migración compatible.
