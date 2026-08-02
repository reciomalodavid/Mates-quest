# Mates Quest: arquitectura Producción/Beta

## Principio rector

Producción y Beta deben ser aplicaciones independientes. Todo desarrollo nuevo empieza en Beta, se prueba durante varios días y solo se promociona a Producción cuando está estable.

No se permiten parches acumulativos, CSS o JavaScript inyectado, MutationObservers para corregir estructura, ni modificaciones del DOM como sustituto de una arquitectura clara.

## Entornos

### Producción
- Repositorio: `reciomalodavid/Mates-quest`
- Rama: `main`
- Nombre: `Mates Quest`
- Datos, caché, manifest, Service Worker e identidad propios.
- No recibe desarrollo experimental.

### Beta
- Repositorio recomendado: `reciomalodavid/Mates-quest-beta`
- Rama principal: `main`
- Nombre: `Mates Quest Beta`
- Origen web distinto al de Producción.
- Manifest, Service Worker, cachés, almacenamiento, iconos y Firebase independientes.

## Motivo para usar otro origen

Una carpeta `/beta/` dentro de la misma web no aísla `localStorage` ni IndexedDB, porque ambos dependen del origen, no de la ruta. Un despliegue Beta en otro origen evita interferencias entre PWA, Service Workers y almacenamiento.

## Configuración única

La identidad de cada compilación debe salir de una única fuente de verdad, por ejemplo `src/config/app-config.js`:

```js
export const APP_CONFIG = {
  name: 'Mates Quest Beta',
  environment: 'beta',
  version: '1.0.0-beta.1',
  buildDate: '__BUILD_DATE__',
  gitCommit: '__GIT_COMMIT__',
  storagePrefix: 'matesQuestBeta',
  cachePrefix: 'mates-quest-beta',
  databaseNamespace: 'beta'
};
```

El proceso de compilación genera manifest, metadatos visibles y nombre de caché a partir de esta configuración.

## Aislamiento obligatorio

- URL/origen diferente.
- `name`, `short_name` e `id` del manifest diferentes.
- Iconos diferentes.
- Service Worker diferente y limitado a sus propios prefijos de caché.
- `localStorage` con prefijo propio.
- IndexedDB con nombre propio.
- Firebase Beta independiente; como segunda opción, namespace separado.
- Posibilidad de instalar Producción y Beta simultáneamente.

## Acerca de

La aplicación debe mostrar:
- versión;
- entorno;
- fecha de compilación;
- commit Git;
- estado del Service Worker;
- actualización disponible, cuando corresponda.

## Flujo Git

1. `feature/...` en el repositorio Beta.
2. Revisión y pruebas.
3. Merge a `main` de Beta.
4. Pruebas reales durante varios días.
5. Promoción controlada a Producción.

Los commits deben explicar intención y alcance, por ejemplo:
- `chore: initialize isolated beta environment`
- `refactor: extract application configuration`
- `fix: guarantee decimal division generation`

## Orden de trabajo

1. Congelar Producción.
2. Crear repositorio Beta.
3. Clonar la versión estable sin cambios funcionales.
4. Separar identidad, almacenamiento, manifest, Service Worker y Firebase.
5. Añadir configuración única y pantalla Acerca de.
6. Separar progresivamente CSS y JavaScript.
7. Añadir pruebas y checklist de lanzamiento.
8. Empezar funcionalidades nuevas.
