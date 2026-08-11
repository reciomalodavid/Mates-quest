# Mates Quest — Handoff

**Fecha:** 2026-08-11

## Estado cerrado

- Repo: `reciomalodavid/Mates-quest`.
- Producción: `main` + Firebase `mates-quest`; intacta.
- Beta: `beta` + Firebase `mates-quest-beta`; separación funcional validada.
- Infraestructura Firestore Beta versionada y desplegable automáticamente.
- Autenticación del workflow: GitHub OIDC → Google Workload Identity Federation → cuenta de servicio Beta de mínimo privilegio; sin claves persistentes.
- Workflows pasan el destino explícito `mates-quest-beta`; no dependen del proyecto por defecto.
- Deploy automático validado en GitHub Actions run `31518939693`: éxito completo sobre Rules e índices de Beta.

## Datos y recuperación

- Destino usado: `mates-quest-beta/syncs/beta-BJTJAG`.
- Hash canónico verificado: `592f3be4af6054d5f17948384dcbcfaad1576901b7ff0a712589cb3bb980ea7e`.
- Copia conservadora `mates-quest-beta/syncs/BJTJAG` no usada; no borrar sin autorización.
- Origen `mates-quest/syncs/BJTJAG` no modificado.
- Backup privado existente: `$HOME/mates-quest-backup/BJTJAG.json`.
- Runbook completo y ensayo no destructivo: `13_SYNC_BACKUP_RECOVERY.md`.

## Automatización

- `beta-check.yml`: build y aislamiento de la aplicación.
- `publish-beta-subfolder.yml`: publica únicamente `/beta/`.
- `firebase-validate.yml`: Emulator + ensayo de rollback sin proyectos reales.
- `firebase-beta-deploy.yml`: Rules e índices únicamente en `mates-quest-beta` con WIF.

## Límites

- No promover a `main` sin autorización explícita.
- No desplegar configuración Beta sobre `mates-quest`.
- No almacenar backups, tokens, JSON de cuenta de servicio ni claves en Git.
- Auth/ownership sigue siendo una mejora futura; no forma parte de la separación de entornos.
