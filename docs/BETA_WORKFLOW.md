# Mates Quest Beta workflow

## Branches

- `main`: Production. Never receives untested work.
- `beta`: continuously deployable Beta environment.
- `feature/*`: short-lived development branches created from `beta`.
- `fix/*`: short-lived bug-fix branches created from `beta`.

## Build architecture

The source application remains a functional clone of Production. Beta identity and isolation are applied **at build time**, never through runtime patches.

- Single source of truth: `src/config/app-config.json`.
- Build command: `npm run build`.
- Generated deployment directory: `dist/`.
- Beta-only static assets: `src/beta/`.
- Build implementation: `scripts/build-beta.mjs`.

The build creates:

- `dist/index.html` with the visible Beta badge and About screen;
- `dist/manifest.json` with the Beta PWA identity;
- `dist/service-worker.js` with Beta-only cache cleanup;
- Beta-named application icons.

`dist/` is generated and must not be committed.

## Promotion flow

1. Create a `feature/*` or `fix/*` branch from `beta`.
2. Implement and test the change without touching `main`.
3. Merge into `beta`.
4. GitHub Actions runs the deterministic Beta build check.
5. Test the deployed Beta for several days.
6. Fix all regressions in Beta.
7. Promote the verified changes to `main` in one reviewed release.

## Isolation requirements

Beta uses:

- application name `Mates Quest Beta`;
- a visible Beta/version indicator;
- its own manifest identity;
- cache names beginning with `mates-quest-beta-`;
- browser storage keys beginning with `matesQuestBeta`;
- a separate IndexedDB database name if IndexedDB is introduced;
- a dedicated Firebase project, `mates-quest-beta`;
- Firestore documents prefixed with `beta-` as an additional client namespace;
- deployment under `/beta/`, with Beta-only cache and browser-storage names.

## Firebase infrastructure as code

- `.firebaserc` records the explicit `beta` alias; workflows still pass
  `--project mates-quest-beta` so the target cannot depend on a local default.
- `firebase.json` wires the versioned Rules and indexes.
- `firestore.rules` and `firestore.indexes.json` are the deployable contract.
- `Firebase configuration validation` compiles Rules in the Emulator and runs
  the non-destructive rollback rehearsal.
- `Deploy Firebase Beta infrastructure` runs only from `beta`, targets only
  `mates-quest-beta`, and authenticates through GitHub OIDC + Google Workload
  Identity Federation. No service-account key is stored in GitHub or the repo.

The GitHub environment `firebase-beta` contains only these identifiers:

- `GCP_WIF_PROVIDER`: Workload Identity Provider resource name.
- `GCP_FIREBASE_BETA_SERVICE_ACCOUNT`: deployer service-account email.

They are configuration identifiers, not private keys. The Google trust policy
restricts impersonation to `reciomalodavid/Mates-quest` on `refs/heads/beta`.

Rollback and data-recovery procedure: `13_SYNC_BACKUP_RECOVERY.md`.

## Prohibited implementation patterns

Do not build Beta with runtime patches or DOM mutation hacks. In particular, avoid:

- CSS appended after the application loads;
- JavaScript that rewrites the existing interface after load;
- `MutationObserver`-based feature wiring;
- duplicated version constants;
- Service Workers that delete caches outside their own environment prefix;
- direct feature development on `main`.

## Deployment configuration

Recommended Cloudflare Pages settings:

- branch: `beta`;
- build command: `npm run build`;
- output directory: `dist`;
- Node.js: 22.

Cloudflare supplies `CF_PAGES_COMMIT_SHA`, which is displayed in the About screen.

## Commit style

Use focused, descriptive commits, for example:

- `chore: initialize isolated beta environment`
- `refactor: centralize application configuration`
- `feat: add decimal multiplication practice`
- `fix: keep generated exercises within selected parameters`
