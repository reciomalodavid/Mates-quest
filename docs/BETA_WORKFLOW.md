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
- Firebase documents prefixed with the Beta namespace;
- a deployment URL with a different origin from Production.

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
