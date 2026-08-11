# Mates Quest — Handoff

**Fecha:** 2026-08-11

## Estado exacto

- Repo: `reciomalodavid/Mates-quest`.
- Producción: `main`, raíz GitHub Pages, build `7.1-auditada`, Firebase `mates-quest`; intacta.
- Beta: rama `beta`, HEAD funcional `30517b3`, publicada en `/beta/`.
- Firebase Beta: `mates-quest-beta`, Firestore Native en `eur3`.
- Rules Beta compiladas y desplegadas.
- El build publicado apunta a `mates-quest-beta` y usa documentos `syncs/beta-{CODE}`.

## Datos copiados

- Origen: `mates-quest/syncs/BJTJAG`.
- Destino usado por Beta: `mates-quest-beta/syncs/beta-BJTJAG`.
- Hash canónico de `fields` en origen y destino: `592f3be4af6054d5f17948384dcbcfaad1576901b7ff0a712589cb3bb980ea7e`.
- Existe además `mates-quest-beta/syncs/BJTJAG` como copia conservadora; no se usa y no debe eliminarse sin autorización.
- Backup administrativo temporal creado en Cloud Shell: `$HOME/mates-quest-backup/BJTJAG.json`.
- No se borró ni modificó el documento de origen.

## Commits clave

- `30517b3`: conecta el build Beta al Firebase aislado.
- `febbce0`: publicación automática de ese build en `main:/beta/`.
- Punto de rollback anterior a la conexión: `7c86c6a` o el ancestro funcional documentado `cda8a67`.

## Validación pendiente

1. Abrir `https://reciomalodavid.github.io/Mates-quest/beta/`.
2. Vincular/confirmar el código `BJTJAG`.
3. Verificar que aparecen los perfiles correctos.
4. Hacer un cambio pequeño y comprobar sincronización.

## Automatización pendiente

Configurar identidad de GitHub Actions con permisos mínimos sobre `mates-quest-beta` para desplegar Rules sin Cloud Shell. No es necesaria para usar ni seguir desarrollando Beta.

## Riesgos / no tocar

- No desplegar estas Rules sobre `mates-quest`.
- No modificar la raíz de Producción.
- No borrar ninguna de las copias Firestore ni el backup.
- La autorización sigue basada en un código de seis caracteres; separar proyectos mejora el aislamiento, pero Auth/ownership continúa pendiente.
