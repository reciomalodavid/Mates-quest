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

## Rollback seguro

- Código: volver a un commit conocido y reconstruir Beta.
- Rules: conservar cada versión en Git y desplegar explícitamente el commit anterior.
- Datos: no hay rollback operativo hasta implantar backup/export.
- Schema: cualquier cambio debe aceptar documentos v1, escribir una versión nueva y permitir marcha atrás.

## Plan recomendado

1. Aislar Firebase Beta.
2. Añadir tests Emulator de lectura/escritura autorizada y denegada.
3. Incorporar `schemaVersion`, `updatedAt` de servidor y estrategia de conflicto.
4. Introducir identidad/ownership compatible con códigos existentes.
5. Añadir exportación local y backup administrado antes de migraciones.

