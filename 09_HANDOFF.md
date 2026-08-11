# Mates Quest — Handoff

**Fecha:** 2026-08-11

## Estado exacto

- Repo: `reciomalodavid/Mates-quest`.
- Producción: `main`, HEAD previo a auditoría `31a224d`, GitHub Pages raíz, build `7.1-auditada`.
- Beta: `beta`, HEAD previo `87c339b`, publicada en `/beta/`, build `1.0.0-beta.1`.
- Producción no fue modificada ni desplegada durante esta auditoría.

## Firebase

- Proyecto compartido actual: `mates-quest`.
- Cliente: Firestore compat 10.12.2, sin Auth.
- Colección: `syncs`; Beta usa documentos `beta-<CODE>`.
- Rules activas no recuperadas y anteriormente no versionadas.
- Archivos Firebase añadidos a `beta` son declarativos y todavía no desplegados.

## Trabajo realizado

- Auditoría completa de fuentes, repo, ramas, builds, URLs, Actions y cliente Firebase.
- Documentación 00–13 creada.
- Config Firebase/Rules/indexes preparada en `beta`.
- CI de validación Firebase preparado.
- Check Beta corregido para validar la clave generada real.

## Riesgos / no tocar

- No desplegar `firestore.rules` sobre `mates-quest` sin inventario, backup y rollback.
- No promover a `main` sin prueba y aprobación explícita.
- No borrar claves locales, documentos `syncs` ni cachés como solución rutinaria.

## Próximo paso

David crea una vez el proyecto Firebase Beta indicado. Después: asociarlo al alias `beta`, configurar identidad de Actions y activar deploy Beta; Producción quedará manual/protegida.

## Leer primero

1. `06_CURRENT_STATUS.md`
2. `07_DECISION_LOG.md`
3. `09_HANDOFF.md`
4. `10_PROJECT_INSTRUCTIONS.md`
5. `12_TECHNICAL_AUDIT.md`
6. `13_SYNC_BACKUP_RECOVERY.md`

