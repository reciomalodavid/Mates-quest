# Mates Quest — Technical Audit

**Corte:** 2026-08-11.  
**Alcance:** fuentes entregadas, las tres ramas remotas, historial reciente, Actions, URLs públicas y prueba Firestore no destructiva.

## Repo y ramas

- `reciomalodavid/Mates-quest`, público, rama por defecto `main`.
- Conector verificado con permisos `pull`, `push`, `maintain` y `admin`.
- HEAD inicial `main`: `31a224d6b22311580bd781c0a0ff4b57f285343f`.
- HEAD inicial `beta`: `87c339b9148c83c9f9d85becaf70cb9877a9e69c`.
- `architecture/beta-bootstrap`: histórica, `519c6a0`.
- No hay PR abiertas.

## Runtime y build

- Producción es HTML/CSS/JS estático sin build.
- Beta usa Node >=20, npm y `scripts/build-beta.mjs`; Actions usa Node 22.
- El script transforma marcadores del HTML y genera `dist/` con identidad, manifest, SW y runtime Beta.
- No hay dependencias npm runtime ni lockfile.

## Load order y código activo

- `index.html` es un monolito de aproximadamente 425 KB y contiene UI, estilos, módulos, perfil y sync.
- Firebase se carga al final de forma dinámica desde gstatic.
- Beta incrusta archivos `src/beta/*` durante build; esos archivos no se cargan separadamente en runtime.
- `main:/beta/*` son artefactos de deploy, no fuente editable.

## Deploy

- GitHub Pages sirve `main` correctamente.
- Workflow `Publish Beta to GitHub Pages subfolder` compila `beta`, sustituye `main:/beta/`, commitea y empuja a `main`.
- Última publicación Beta y último Pages deploy: éxito el 2026-08-03.
- `Beta architecture check` fallaba aunque el build terminaba: el grep exigía el literal `matesQuestBeta:db:v1`, pero el HTML generado conserva una template expression. El check se corrige en esta auditoría.
- Riesgo: un push de Beta produce commits automáticos en la rama de Producción; el alcance está limitado a `/beta/`, pero `main` no está totalmente inmutable.

## Producción y Beta

- Producción y Beta responden HTTP 200.
- PWA, iconos, storage y caché están separados.
- El SW de Producción excluye `/beta/`.
- Beta usa documentos `beta-<CODE>`, pero comparte proyecto/colección Firebase.

## Firebase y seguridad

- Project ID: `mates-quest`; Firestore es el único servicio observado.
- No se usa Auth, App Check, Functions, Storage, Hosting ni Messaging.
- La API key Web está en el frontend; eso es normal para Firebase cliente, pero debe restringirse a APIs y dominios autorizados.
- Rules/índices no estaban en el repo.
- No fue posible descargar Rules activas con acceso cliente.
- Una lectura REST sin Auth a un documento inexistente devolvió 404 `NOT_FOUND`; por tanto, la lectura anónima no fue rechazada antes de resolver el documento.
- No se hizo ninguna escritura de auditoría.
- El código de seis caracteres aporta unas 30^6 combinaciones, pero sigue siendo un secreto compartido sin rate limiting ni identidad.

## Persistencia, sync y recovery

- LocalStorage es la fuente local inmediata.
- Cada cambio programa un `set(db)` completo con debounce de 800 ms.
- Snapshot remoto fusiona perfiles por nombre; no fusiona contadores/campos internamente.
- No hay schemaVersion, timestamps de documento, transacciones o detección de conflicto.
- Desvincular conserva datos locales.
- No hay backup/export/restore formal probado.

## Calidad

- Build checks deterministas pero sin tests unitarios/funcionales.
- No hay test automatizado de Firestore Rules ni Emulator en el estado inicial.
- No hay lint, validación HTML, duplicados IDs o smoke test de navegador.
- GitHub Pages confirma publicación, no funcionamiento de flujos matemáticos.

## Riesgos priorizados

1. **Crítico:** Rules no versionadas y acceso sin Auth.
2. **Alto:** Beta/Producción comparten proyecto Firebase.
3. **Alto:** sobrescritura completa y conflictos silenciosos.
4. **Medio:** monolito HTML difícil de probar y mantener.
5. **Medio:** artefactos Beta escriben commits en `main`.
6. **Medio:** ausencia de backup/restauración verificados.

## Recomendación mínima

1. Crear proyecto Firebase Beta separado.
2. Validar y probar Rules contra Emulator y Beta antes de cualquier deploy productivo.
3. Usar GitHub Actions con identidad segura para Beta.
4. Crear GitHub Environment `production` con aprobación para workflow manual.
5. Diseñar Auth/ownership y migración compatible antes de cerrar acceso anónimo.

