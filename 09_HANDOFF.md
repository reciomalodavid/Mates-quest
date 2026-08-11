# Mates Quest — Handoff

**Fecha:** 2026-08-11

## Estado exacto

- Repo: `reciomalodavid/Mates-quest`.
- Producción: `main`, GitHub Pages raíz, build `7.1-auditada`, Firebase `mates-quest`.
- Beta: rama `beta`, publicada en `/beta/`, build `1.0.0-beta.1`.
- Nuevo destino comunicado: `mates-quest-beta`.
- La Beta publicada todavía usa `mates-quest`; no hubo cambio de cliente, Rules ni datos.
- Ningún documento Firestore fue modificado, copiado o eliminado.

## Último trabajo

- `cda8a67`: alias Firebase `beta` registrado en `.firebaserc`.
- `bf4ac97`: procedimiento de copia no destructiva y rollback documentado.
- `96266ba`: decisión de separar por copia registrada.
- `281a07c`: estado Firebase Beta actualizado.
- `4c4d447`: publicación Beta limitada a cambios de runtime; los cambios documentales ya no regeneran `main:/beta/`.
- Documentos `syncs/beta-*` pendientes de inventario y backup administrativo.

## Riesgos / no tocar

- No desplegar Rules sobre `mates-quest`.
- No cambiar los archivos raíz de `main`.
- No cambiar el cliente Beta hasta comparar origen y destino por IDs, recuento y hashes.
- No registrar datos de usuario ni credenciales en Actions logs o en Git.

## Próximo paso

Configurar una identidad segura de GitHub Actions con permisos mínimos sobre origen y destino. Después: verificar `mates-quest-beta`, crear/configurar Firestore Beta, inventariar y respaldar `syncs/beta-*`, copiar, validar y solo entonces cambiar la configuración pública del cliente Beta.

## Leer primero

1. `06_CURRENT_STATUS.md`
2. `07_DECISION_LOG.md`
3. `09_HANDOFF.md`
4. `10_PROJECT_INSTRUCTIONS.md`
5. `13_SYNC_BACKUP_RECOVERY.md`
