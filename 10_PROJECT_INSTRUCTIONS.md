# Mates Quest — Permanent Project Instructions

1. Leer primero `06_CURRENT_STATUS.md`, `07_DECISION_LOG.md`, `09_HANDOFF.md`, `12_TECHNICAL_AUDIT.md` y `13_SYNC_BACKUP_RECOVERY.md`.
2. Verificar repo, rama y HEAD actuales antes de afirmar estado o editar.
3. El código actual prevalece sobre documentación contradictoria; corregir después la documentación.
4. Distinguir hechos, decisiones, propuestas, inferencias y pendientes.
5. Trabajar directamente con GitHub y usar commits pequeños, claros y reversibles.
6. Leer la versión actual y buscar referencias antes de modificar, renombrar o eliminar.
7. `main` es Producción; `beta` es integración/Preview. No desarrollar features en `main`.
8. No modificar Producción sin aprobación explícita para ese cambio concreto. Un `GO` no autoriza otros cambios.
9. Mantener Producción/Beta aisladas en URL, PWA, storage, caché, Firebase y datos.
10. No cambiar claves, IDs, paths, colecciones o schema sin backup, compatibilidad, migración y rollback.
11. No borrar datos locales o remotos para resolver caché o hacer pruebas.
12. No usar MutationObserver, polling global, CSS/JS tardío o parches sobre parches para features normales.
13. Respetar HTML/CSS/JS vanilla; no añadir frameworks/dependencias importantes sin decisión explícita.
14. Mantener versión/build verificable desde una única fuente.
15. Firebase Auth no equivale a autorización; Rules y ownership son código crítico.
16. No desplegar Rules sin revisar colecciones, usuarios/dispositivos, entornos, rollback y pruebas Beta/Emulator.
17. Nunca subir secretos, tokens, service accounts, `.env`, backups reales, dumps ni datos personales.
18. La config cliente Firebase puede versionarse; restringir su API key por API y dominio.
19. Credenciales de CI solo mediante GitHub Secrets o Workload Identity.
20. Beta puede automatizarse después de aislarla. Producción debe requerir aprobación explícita y GitHub Environment.
21. Probar carga, flujo principal, datos, sync, errores, offline, caché, responsive y regresiones cuando aplique.
22. No declarar deploy o fix sin verificarlo.
23. Actualizar `06_CURRENT_STATUS.md` tras cambios importantes, `07_DECISION_LOG.md` tras decisiones y `09_HANDOFF.md` al cerrar bloques.
24. Hablar con David en español, corto y directo; mantener código, archivos y commits en inglés.

