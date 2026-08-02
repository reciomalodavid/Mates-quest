# Mates Quest release checklist

A Beta build may be promoted to `main` only after every applicable item is checked.

## Build and identity

- [ ] `npm run build` finishes successfully.
- [ ] GitHub Actions passes on the final Beta commit.
- [ ] The visible version matches `src/config/app-config.json`.
- [ ] The About screen shows environment, version, build date and Git commit.
- [ ] The generated manifest uses the correct application name and identity.
- [ ] The installed icon clearly distinguishes Beta from Production.

## Isolation

- [ ] Beta and Production can be installed simultaneously.
- [ ] Beta localStorage keys use the `matesQuestBeta` prefix.
- [ ] Beta IndexedDB uses a distinct database name, if applicable.
- [ ] Beta caches use only the `mates-quest-beta-` prefix.
- [ ] The Beta Service Worker does not delete Production caches.
- [ ] Firebase document IDs use the Beta namespace.
- [ ] Beta is deployed from `dist/` on an origin different from Production.

## Functional checks

- [ ] Application opens online.
- [ ] Application opens offline after first load.
- [ ] Update from the previous Beta version works.
- [ ] Profiles persist after closing and reopening.
- [ ] Firebase sync works with Beta data only.
- [ ] Sum and subtraction work.
- [ ] Multiplication works.
- [ ] Division works.
- [ ] Tables work.
- [ ] Roots work.
- [ ] Fractions work.
- [ ] Order of operations works.
- [ ] Equations work.
- [ ] Learn content opens correctly.

## Devices and layout

- [ ] iPad landscape.
- [ ] iPad portrait.
- [ ] iPhone portrait.
- [ ] Desktop browser.
- [ ] No horizontal overflow.
- [ ] Main actions remain visible without excessive scrolling.
- [ ] Keyboard/input controls do not cover essential content.

## Quality

- [ ] No browser console errors.
- [ ] No duplicate element IDs.
- [ ] No temporary CSS or JavaScript injections.
- [ ] No `MutationObserver` used to patch normal interface behavior.
- [ ] New logic has focused tests or a documented manual test case.
- [ ] Changelog is updated.
- [ ] Beta has been used for several days without critical regressions.
