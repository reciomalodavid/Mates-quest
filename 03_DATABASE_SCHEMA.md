# Mates Quest — Database Schema

## LocalStorage

| Entorno | Clave de datos | Clave de sync |
|---|---|---|
| Producción | `matesQuestDB_v1` | `matesQuestSyncCode` |
| Beta | `matesQuestBeta:db:v1` | `matesQuestBeta:syncCode` |

Forma observada:

```text
database
├── active: string | null
└── profiles: map<profileName, profile>
    ├── facts: map<"minxmax", fact>
    │   ├── att: number
    │   ├── ok: number
    │   ├── recent: number[]
    │   └── lastAt: number
    ├── stars: number
    ├── points: number
    ├── bestStreak: number
    ├── sessions: number
    └── counters per module: number
```

Los campos ausentes de perfiles antiguos se completan de forma compatible al leerlos.

## Firestore

- Base de datos: `(default)` del proyecto `mates-quest`.
- Colección: `syncs`.
- Producción: `/syncs/{sixCharacterCode}`.
- Beta: `/syncs/beta-{sixCharacterCode}`.
- Contenido: copia completa del objeto local `database`.

No se observaron subcolecciones, Storage paths ni índices compuestos requeridos.

## Operaciones y conflictos

- `onSnapshot` fusiona `remote.profiles` sobre perfiles locales.
- Las escrituras posteriores hacen `set(db)` completo.
- No hay `updatedAt`, versión de schema, transacción ni control de concurrencia.
- La última escritura completa puede sobrescribir cambios simultáneos.

## Rules e índices

- `firestore.rules` expresa el contrato mínimo actual y queda **sin desplegar** hasta verificar compatibilidad y aislar Beta.
- Las Rules desplegadas no se pudieron descargar; una lectura anónima de un documento inexistente devolvió `NOT_FOUND`, señal de que la lectura anónima alcanza `syncs`.
- `firestore.indexes.json` declara que no hay índices compuestos gestionados por el repo.

