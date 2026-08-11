# Mates Quest — Product Requirements

**Fuente:** comportamiento del código en `beta` y decisiones registradas hasta 2026-08-11.

## MVP implementado

1. Crear o seleccionar un perfil.
2. Elegir un módulo matemático y dificultad.
3. Resolver el ejercicio guiado y recibir feedback.
4. Guardar progreso localmente.
5. Crear o vincular un código de sincronización opcional.

## Requisitos funcionales

- Conservar perfiles, progreso y selección activa tras cerrar la app.
- Permitir varios perfiles dentro de la misma instalación.
- Sincronizar el documento asociado a un código sin borrar los datos locales al desvincular.
- Mantener Beta separada de Producción en PWA, caché, almacenamiento y documentos remotos.
- Mostrar en Beta entorno, versión, fecha y commit.

## Requisitos no funcionales

- Mobile-first y controles táctiles utilizables.
- Funcionamiento offline después de una primera carga correcta.
- Cambios pequeños, reversibles y probados primero en Beta.
- Ninguna migración destructiva sin backup, compatibilidad y rollback.

## Criterios de aceptación generales

- La app carga sin errores de consola.
- El flujo principal de cada módulo termina y actualiza el perfil.
- El progreso sobrevive a recarga y reapertura.
- Producción y Beta pueden coexistir sin compartir claves locales ni cachés.
- Un fallo de red no destruye progreso local.

## Casos límite conocidos

- Dos dispositivos pueden escribir el mismo documento casi a la vez; no existe resolución de conflictos por campo.
- El código de sincronización funciona como secreto compartido y puede ser adivinado o compartido.
- Una escritura remota usa `set(db)` completo; una versión antigua puede sobrescribir campos nuevos.

## Decisiones cerradas

- `main` es Producción y `beta` es integración/Preview.
- GitHub Pages publica Producción en `/Mates-quest/` y Beta en `/Mates-quest/beta/`.
- Producción no se modifica sin aprobación explícita de David.
- No usar MutationObserver ni parches DOM para construir Beta.

## Dudas abiertas

- Modelo definitivo de identidad/autorización para sustituir el código como único control.
- Política de retención, exportación y recuperación de datos.
- Alcance futuro por curso/edad y métricas que debe ver el adulto.

