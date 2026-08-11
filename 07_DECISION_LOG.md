# Mates Quest — Decision Log

## 2026-08-02 — Entornos

- Decisión: `main` es Producción y `beta` es integración; Beta se sirve en `/beta/`.
- Motivo: probar sin alterar la app estable y permitir instalaciones simultáneas.
- Consecuencia: manifest, iconos, storage, caché y documentos remotos deben estar aislados.

## 2026-08-02 — Build Beta determinista

- Decisión: generar Beta en build time desde marcadores explícitos.
- Alternativa descartada: MutationObserver, CSS/JS inyectado después de cargar o parches DOM.
- Consecuencia: `src/config/app-config.json` es la fuente única de identidad Beta.

## 2026-08-11 — Producción protegida

- Decisión: la auditoría y nueva infraestructura se realizan en `beta`; no se modifica ni despliega Producción.
- Motivo: autorización expresa del usuario y prioridad de datos reales.

## 2026-08-11 — Firebase como código, sin deploy ciego

- Decisión: versionar configuración, Rules e índices en `beta`, pero no desplegarlos aún.
- Motivo: las Rules activas no se pueden recuperar y ambos entornos comparten proyecto.
- Alternativa descartada: usar el proyecto `mates-quest` como campo de pruebas.
- Consecuencia: hace falta un proyecto Firebase Beta independiente antes de automatizar deploys.

## 2026-08-11 — Seguridad transitoria

- Decisión: documentar que el código de sincronización es actualmente un secreto compartido, no una identidad.
- Consecuencia: Auth/autorización y migración compatible quedan como deuda prioritaria; no se endurecerán Rules sin inventario y rollback.

## 2026-08-11 — Separación por copia, nunca por movimiento

- Decisión: `mates-quest` permanece como Producción; `mates-quest-beta` será el destino exclusivo de una copia de los documentos `syncs/beta-*`.
- Motivo: separar entornos sin perder ni alterar el estado actual.
- Alternativas descartadas: mover documentos, borrar el origen, cambiar ambos clientes a la vez o transformar el schema durante la copia.
- Consecuencia: antes del cambio de cliente son obligatorios inventario, backup verificable, comparación de IDs/hashes y rollback. Solo `beta` cambiará de configuración.
