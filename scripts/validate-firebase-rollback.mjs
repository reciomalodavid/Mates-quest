import assert from 'node:assert/strict';
import { readFileSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const firebase = JSON.parse(readFileSync('firebase.json', 'utf8'));
const indexes = JSON.parse(readFileSync('firestore.indexes.json', 'utf8'));
const aliases = JSON.parse(readFileSync('.firebaserc', 'utf8'));
const rules = readFileSync('firestore.rules', 'utf8');

assert.equal(aliases.projects.beta, 'mates-quest-beta');
assert.equal(firebase.firestore.rules, 'firestore.rules');
assert.equal(firebase.firestore.indexes, 'firestore.indexes.json');
assert.deepEqual(indexes, { indexes: [], fieldOverrides: [] });
assert.match(rules, /match \/syncs\/\{syncId\}/);
assert.match(rules, /\^\(beta-\)\?/);
assert.match(rules, /allow read, write: if false/);

// Synthetic recovery rehearsal: canonicalise, copy and compare a Firestore-like
// payload without ever connecting to a real project.
const fixture = {
  name: 'projects/demo/databases/(default)/documents/syncs/beta-ABC234',
  fields: { active: { stringValue: 'Erick' }, profiles: { mapValue: { fields: {} } } },
};
const dir = mkdtempSync(join(tmpdir(), 'mates-quest-rollback-'));
try {
  const backup = join(dir, 'backup.json');
  const restored = join(dir, 'restored.json');
  writeFileSync(backup, JSON.stringify(fixture));
  writeFileSync(restored, JSON.stringify({ fields: JSON.parse(readFileSync(backup)).fields }));
  assert.deepEqual(JSON.parse(readFileSync(restored)).fields, fixture.fields);
} finally {
  rmSync(dir, { recursive: true, force: true });
}

console.log('Firebase Beta configuration and non-destructive rollback rehearsal passed.');
