import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const read = (path) => fs.readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('Home composes the application shell and Stitch content sections', () => {
  const home = read('app/page.tsx');

  for (const component of ['AppShell', 'HomeHero', 'ContentSection', 'CollectionCard', 'BarazaInvitation']) {
    assert.match(home, new RegExp(`import \\{ ${component} \\}`));
  }

  assert.match(home, /Explore our collections/);
  assert.match(home, /A work to encounter/);
  assert.match(home, /Baraza la Ontologia/);
  assert.match(home, /Explore programs/);
});

test('Home uses semantic navigation destinations', () => {
  const home = read('app/page.tsx');
  assert.match(home, /href: '\/library'/);
  assert.match(home, /href: '\/museum'/);
  assert.match(home, /href="\/baraza"/);
  assert.match(home, /href="\/programs"/);
});

test('Home keeps Baraza conceptually distinct from Community', () => {
  const baraza = read('components/organisms/BarazaInvitation.tsx');
  assert.match(baraza, /Baraza la Ontologia/);
  assert.match(baraza, /philosophical inquiry/i);
  assert.doesNotMatch(baraza, /Community feed/i);
});
