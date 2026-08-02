# Mates Quest release checklist

A Beta build may be promoted to `main` only after every applicable item is checked.

## Identity and versioning

- [ ] The visible version matches `src/config/app-config.js`.
- [ ] The About screen shows environment, version, build date and Git commit.
- [ ] The manifest uses the correct application name and identity.
- [ ] The installed icon clearly distinguishes Beta from Production.

## Isolation

- [ ] Beta and Production can be installed simultaneously.
- [ ] Beta localStorage keys use the Beta prefix.
- [ ] Beta IndexedDB uses a distinct database name, if applicable.
- [ ] Beta caches use only the `mates-quest-beta-` prefix.
- [ ] The Beta Service Worker does not delete Production caches.
- [ ] Firebase data is isolated from Production.

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
- [ ] No MutationObserver used to patch normal interface behavior.
- [ ] New logic has focused tests or a documented manual test case.
- [ ] Changelog is updated.
- [ ] Beta has been used for several days without critical regressions.

