# Mates Quest — Current Status

**Fecha de corte:** 2026-08-11 18:00 CEST  
**Fuente de verdad:** repositorio, GitHub Actions, URLs públicas y prueba REST no destructiva.

## Repositorio

- Repo: `reciomalodavid/Mates-quest` (público; conector con lectura/escritura/admin).
- Rama Producción: `main`.
- Rama Beta: `beta`.
- HEAD Producción verificado antes de esta auditoría: `31a224d6b22311580bd781c0a0ff4b57f285343f`.
- HEAD Beta verificado antes de esta auditoría: `87c339b9148c83c9f9d85becaf70cb9877a9e69c`.
- Rama histórica: `architecture/beta-bootstrap` en `519c6a0`.

## Producción

- URL: `https://reciomalodavid.github.io/Mates-quest/`.
- Build: `7.1-auditada`.
- Hosting: GitHub Pages desde `main`.
- Estado: HTTP 200 y HTML correcto verificados el 2026-08-11; flujo funcional no reprobado físicamente.
- NO TOCAR: archivos raíz de `main`, datos Firestore y Rules desplegadas sin aprobación.

## Beta

- URL: `https://reciomalodavid.github.io/Mates-quest/beta/`.
- Build publicado: `1.0.0-beta.1`, generado desde `87c339b`.
- Estado: HTTP 200, identidad Beta visible y workflow de publicación correcto.
- Check conocido: el build pasaba pero `Beta architecture check` fallaba por buscar una cadena que el template genera dinámicamente; corregido en esta rama de auditoría.

## Firebase

- Project ID: `mates-quest`.
- Servicios usados: Firebase App + Firestore compat 10.12.2.
- Auth: no usado.
- Storage, Functions, Hosting, Messaging y App Check: no observados.
- Rules/índices previos versionados: no.
- Entornos: Producción y Beta comparten proyecto; IDs Beta usan prefijo `beta-`.
- Rules activas: no descargables con el acceso disponible. La lectura anónima de un documento inexistente llegó a Firestore y devolvió 404, no `permission-denied`.
- Configuración añadida en `beta`: versionada, validable y no desplegada.

## Persistencia

- Local: `localStorage` separado por entorno.
- Remota: documentos completos en `/syncs`.
- Sync: snapshot + escrituras completas con debounce; sin control de conflicto.
- Backup/restore: no existe exportación formal; Firestore actúa como réplica, no como backup probado.

## Bugs/riesgos conocidos

1. Sin Auth: quien conozca/adivine un código puede acceder si las Rules lo permiten.
2. Rules desplegadas fuera del repo y sin historial verificable.
3. Producción y Beta comparten Firebase; no es seguro auto-desplegar Rules Beta.
4. Alerta histórica de GitHub por API key cliente; la clave no es secreta por diseño, pero debe restringirse por API/dominio en Google Cloud.
5. Escrituras completas sin versión ni resolución de conflictos.

## Próximo paso exacto

Crear un proyecto Firebase separado para Beta. Después se configurará identidad de GitHub Actions y deploy automático solo a Beta; Producción quedará como workflow manual protegido.

## Validación necesaria de David

- Una acción indicada en el resumen final de esta auditoría.

