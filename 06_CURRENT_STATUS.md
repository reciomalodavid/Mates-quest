# Mates Quest — Current Status

**Fecha de corte:** 2026-08-11 19:15 CEST  
**Fuente de verdad:** repositorio GitHub, build publicado y verificaciones administrativas ejecutadas en Google Cloud/Firebase.

## Repositorio

- Repo: `reciomalodavid/Mates-quest`.
- Producción: rama `main`; raíz publicada en build `7.1-auditada`.
- Trabajo: rama `beta`, HEAD funcional `30517b3`.
- El commit automático `febbce0` actualizó únicamente `main:/beta/`.

## Producción

- URL: `https://reciomalodavid.github.io/Mates-quest/`.
- Build: `7.1-auditada`.
- Firebase: `mates-quest`.
- Código raíz, Rules y datos de Producción: intactos.

## Beta

- URL: `https://reciomalodavid.github.io/Mates-quest/beta/`.
- Build: `1.0.0-beta.1`.
- Firebase cliente publicado: `mates-quest-beta`.
- Namespace Firestore: `/syncs/beta-{CODE}`.
- Build publicado verificado en GitHub: contiene `projectId: mates-quest-beta` y no la configuración de Producción.

## Firebase Beta

- Proyecto: `mates-quest-beta`.
- Firestore Native `(default)`: creado en `eur3`.
- Web App: `Mates Quest Beta Web`.
- Documento de datos Beta: `/syncs/beta-BJTJAG`.
- Integridad de copia verificada: hash origen/destino `592f3be4af6054d5f17948384dcbcfaad1576901b7ff0a712589cb3bb980ea7e`.
- Copia adicional conservadora `/syncs/BJTJAG`: no usada por el build y no eliminada.
- Rules Beta: compiladas y desplegadas correctamente el 2026-08-11.
- Origen `mates-quest`: no modificado ni eliminado.

## Automatización

- Build y publicación de Beta: GitHub Actions.
- Validación de arquitectura: GitHub Actions.
- Validación de Rules con Emulator: GitHub Actions.
- Deploy real de Rules: realizado manualmente; falta una identidad de GitHub Actions con permisos mínimos para automatizar futuros despliegues.

## Validación pendiente

Abrir Beta, comprobar que el código `BJTJAG` recupera los perfiles esperados y hacer una modificación pequeña para confirmar lectura y escritura. Si falla, rollback de código al commit anterior a `30517b3`; el origen permanece intacto.
