# Mates Quest — Firebase Beta backup and rollback

## Scope and safety boundary

- Beta project: `mates-quest-beta`.
- Production project: `mates-quest`; never target it from this procedure.
- Beta source branch: `beta`.
- Infrastructure as code: `.firebaserc`, `firebase.json`, `firestore.rules` and `firestore.indexes.json`.
- Real Firestore exports/backups must never be committed.

## Known recovery points

- Code before Firebase separation: commit `7c86c6a` (fallback documented: `cda8a67`).
- Original source document remains untouched at `mates-quest/syncs/BJTJAG`.
- Verified Beta document: `mates-quest-beta/syncs/beta-BJTJAG`.
- Canonical hash of copied `fields`: `592f3be4af6054d5f17948384dcbcfaad1576901b7ff0a712589cb3bb980ea7e`.
- Administrative backup created outside GitHub: `$HOME/mates-quest-backup/BJTJAG.json` in the owner's Cloud Shell.

## Routine rollback preparation

Before any Firebase/data migration:

1. Download affected Beta documents to a dated private backup outside GitHub.
2. Hash canonical fields with `jq -S '.fields' FILE | sha256sum`.
3. Record the current `beta` commit and successful Firebase workflow run.
4. Never use `mates-quest` as a deploy/restore target.

## Code rollback

1. Create a revert commit on `beta`; do not rewrite branch history.
2. Push `beta` and wait for the architecture check and Beta publication.
3. Verify `/beta/` only. Production root must remain unchanged.

## Rules and indexes rollback

1. Restore the four Firebase configuration files from the last known-good `beta` commit.
2. Commit them to `beta`.
3. The deploy workflow uses a short-lived WIF token and explicitly targets `mates-quest-beta`.
4. Confirm the successful Firebase release before functional testing.

Emergency manual form (Beta only):

```bash
npx --yes firebase-tools@14.12.0 deploy \
  --only firestore:rules,firestore:indexes \
  --project mates-quest-beta \
  --config firebase.json
```

## Data recovery

1. Stop writes from Beta clients while restoring.
2. Confirm the backup hash.
3. Strip response metadata and retain only `{fields: .fields}`.
4. Restore only to `mates-quest-beta/syncs/beta-BJTJAG` with PATCH.
5. Read it back and compare canonical `.fields` hashes.
6. Re-enable clients and perform one read/write/read test.

Production may be read as a last-resort independent source, but this rollback never writes to it.

## Validation performed

- `npm run check:firebase-rollback` validates aliases, file wiring, the Rules boundary and a synthetic backup/restore rehearsal.
- Firestore Emulator compiles the versioned Rules with `demo-mates-quest`; no real Firebase project is contacted.
- A real restore is intentionally not performed unless recovery is required.
