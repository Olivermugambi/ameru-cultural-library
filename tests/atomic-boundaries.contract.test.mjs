import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const read = (path) => fs.readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('generic design-system components remain free of Ameru domain imports', () => {
  const files = [
    'components/atoms/DesignText.tsx',
    'components/atoms/DesignButton.tsx',
    'components/atoms/Surface.tsx',
    'components/atoms/Tag.tsx',
    'components/molecules/SectionHeading.tsx',
    'components/molecules/MediaFrame.tsx',
    'components/molecules/CollectionCard.tsx',
  ];

  for (const file of files) {
    const source = read(file);
    assert.doesNotMatch(source, /@\/domain\//, file);
    assert.doesNotMatch(source, /Ameru[A-Z][A-Za-z]+/, file);
  }
});

test('Home-specific organisms are the allowed cultural composition boundary', () => {
  const baraza = read('components/organisms/BarazaInvitation.tsx');
  assert.match(baraza, /Baraza la Ontologia/);
  assert.match(baraza, /href/);
});
