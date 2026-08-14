import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const read = (path) => fs.readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('design atoms expose semantic variants', () => {
  const button = read('components/atoms/DesignButton.tsx');
  const surface = read('components/atoms/Surface.tsx');
  const text = read('components/atoms/DesignText.tsx');

  assert.match(button, /export type DesignButtonVariant/);
  assert.match(button, /'primary'/);
  assert.match(button, /'inverse'/);
  assert.match(surface, /export type SurfaceVariant/);
  assert.match(surface, /'outlined'/);
  assert.match(surface, /'inverse'/);
  assert.match(text, /export type DesignTextVariant/);
  assert.match(text, /'display'/);
  assert.match(text, /'body'/);
});

test('design system documents the variant promotion rule', () => {
  const conventions = read('design-system/ATOMIC-CONVENTIONS.md');
  assert.match(conventions, /variants must represent stable semantic differences/i);
  assert.match(conventions, /Do not create generic components merely because two implementations currently resemble one another/i);
});
