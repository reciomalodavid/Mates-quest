# Mates Quest Beta workflow

## Branches

- `main`: production. Never receives untested work.
- `beta`: continuously deployable beta environment.
- `feature/*`: short-lived development branches created from `beta`.
- `fix/*`: short-lived bug-fix branches created from `beta`.

## Promotion flow

1. Create a `feature/*` or `fix/*` branch from `beta`.
2. Implement and test the change without touching `main`.
3. Merge into `beta`.
4. Test the deployed Beta for several days.
5. Fix all regressions in Beta.
6. Promote the verified Beta changes to `main` in one reviewed release.

## Isolation requirements

Beta must use:

- application name `Mates Quest Beta`;
- a visible Beta/version indicator;
- its own manifest identity;
- cache names beginning with `mates-quest-beta-`;
- browser storage keys beginning with `matesQuestBeta`;
- a separate IndexedDB database name if IndexedDB is introduced;
- a separate Firebase project or an explicitly isolated Beta namespace;
- a deployment URL with a different origin from Production whenever possible.

## Prohibited implementation patterns

Do not build Beta with runtime patches or DOM mutation hacks. In particular, avoid:

- injected CSS appended after the application loads;
- injected JavaScript that rewrites the existing interface;
- `MutationObserver`-based feature wiring;
- duplicated version constants;
- Service Workers that delete caches outside their own environment prefix;
- direct feature development on `main`.

## Version source

`src/config/app-config.js` is the source of truth for the environment and application version. Build metadata and the About screen must derive from it.

## Commit style

Use focused, descriptive commits, for example:

- `chore: initialize isolated beta environment`
- `refactor: centralize application configuration`
- `feat: add decimal multiplication practice`
- `fix: keep generated exercises within selected parameters`

