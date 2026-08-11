# Mates Quest — Sync, Backup and Recovery

## Capas de datos

1. Memoria JS: objeto `db` activo.
2. LocalStorage: persistencia inmediata por instalación/entorno.
3. Firestore: réplica opcional compartida mediante código.
4. Service Worker/Cache Storage: solo assets; no contiene progreso autoritativo.

## Sincronización actual

- El usuario crea un código de seis caracteres o introduce uno existente.
- Producción usa `/syncs/{CODE}`; Beta usa `/syncs/beta-{CODE}`.
- Un listener recibe documentos completos.
- La recepción fusiona `profiles` por nombre y conserva el perfil activo local salvo que esté vacío.
- La escritura envía el objeto `db` completo después de 800 ms.

## Conflictos

- No hay versión, reloj lógico, timestamp de servidor ni merge por campo.
- Dos dispositivos simultáneos pueden sobrescribirse.
- Un cliente antiguo puede eliminar campos que no conoce al escribir el documento completo.

## Auth y autorización

- No se usa Firebase Auth.
- El código es actualmente el único secreto de acceso de aplicación.
- Las Rules activas no están verificadas; el acceso anónimo de lectura parece permitido.
- El aislamiento `beta-` es namespace, no frontera de seguridad dentro del proyecto compartido.

## Backup y restore

- Firestore no debe considerarse backup: forma parte del mismo flujo de sync y acepta sobrescrituras.
- No existe exportación de usuario, backup periódico verificado ni restore probado.
- Desvincular conserva la copia local, pero perder almacenamiento del navegador puede perder datos no sincronizados.

## Separación segura de Beta

Proyecto destino comunicado por David: `mates-quest-beta`. Su existencia y servicios activos siguen pendientes de verificación administrativa.

Reglas obligatorias:

- El proyecto `mates-quest`, sus Rules y sus documentos no se modifican ni se eliminan.
- Solo se copian documentos actuales de Beta: `/syncs/beta-{CODE}`.
- No se cambia el cliente Beta hasta verificar inventario, backup, copia y recuentos.
- Los identificadores y contenidos se conservan exactamente; no se transforma el schema durante la separación.
- Producción continúa apuntando a `mates-quest`.

### Plan previo a la copia

1. Obtener acceso administrativo seguro a origen y destino mediante GitHub Actions; nunca guardar credenciales en el repo ni en el chat.
2. Inventariar todos los documentos `syncs` cuyo ID empiece por `beta-`: ID, tamaño y hash/canonicalización, sin publicar datos en logs.
3. Crear un export/backup fechado del subconjunto Beta en almacenamiento privado con retención definida.
4. Verificar que el backup contiene el mismo número de documentos y hashes que el inventario.
5. Crear Firestore `(default)` en `mates-quest-beta`, desplegar allí únicamente las Rules e índices versionados y probarlos.
6. Copiar el subconjunto Beta sin borrar ni sobrescribir el origen.
7. Comparar origen y destino por recuento, IDs y hashes.
8. Cambiar solo el build de la rama `beta` a la configuración pública del nuevo proyecto.
9. Probar lectura, escritura y sincronización en Beta con un código copiado y con uno nuevo.
10. Mantener el origen intacto durante un periodo de observación antes de plantear cualquier limpieza, que requerirá autorización aparte.

### Rollback

Si falla cualquier validación:

1. volver a publicar el último commit Beta que apuntaba a `mates-quest`;
2. no tocar ni restaurar Producción, porque nunca habrá cambiado;
3. conservar los documentos de origen intactos;
4. tratar el proyecto Beta nuevo como copia fallida y no eliminarlo hasta revisar la causa;
5. documentar recuentos, hashes y error antes de reintentar.

El punto de retorno de código anterior a la conexión con el nuevo Firebase es `cda8a67` o su ancestro funcional inmediato; este commit solo registra el alias y no cambia el cliente.

## Rollback general

- Código: volver a un commit conocido y reconstruir Beta.
- Rules: conservar cada versión en Git y desplegar explícitamente el commit anterior.
- Datos: no hay rollback operativo hasta implantar backup/export.
- Schema: cualquier cambio debe aceptar documentos v1, escribir una versión nueva y permitir marcha atrás.

## Plan recomendado

1. Aislar Firebase Beta con el procedimiento anterior.
2. Añadir tests Emulator de lectura/escritura autorizada y denegada.
3. Incorporar `schemaVersion`, `updatedAt` de servidor y estrategia de conflicto.
4. Introducir identidad/ownership compatible con códigos existentes.
5. Añadir exportación local y backup administrado antes de migraciones.
