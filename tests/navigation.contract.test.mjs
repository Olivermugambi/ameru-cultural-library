import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const read = (path) => fs.readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('AppProviders owns the single application shell boundary', () => {
  const providers = read('components/providers/AppProviders.tsx');
  assert.match(providers, /<AppShell>\{children\}<\/AppShell>/);
});

test('AppShell renders exactly one site navigation', () => {
  const shell = read('components/templates/AppShell.tsx');
  assert.match(shell, /<SiteNavigation\s*\/>/);
  assert.doesNotMatch(shell, /GlobalHeader|ResponsiveNavigation|NavBar/);
});

test('Pages do not create nested application shells', () => {
  for (const path of ['app/page.tsx', 'app/library/page.tsx', 'app/library/books/page.tsx']) {
    const page = read(path);
    assert.doesNotMatch(page, /<AppShell>/, path);
    assert.doesNotMatch(page, /components\/templates\/AppShell/, path);
    assert.doesNotMatch(page, /<AppBar\b/, path);
  }
});

test('SiteNavigation has one visible title per viewport state', () => {
  const navigation = read('components/organisms/SiteNavigation.tsx');
  assert.equal((navigation.match(/Ameru Cultural Library/g) ?? []).length, 2);
  assert.match(navigation, /aria-label="Primary navigation"/);
  assert.match(navigation, /aria-label="Mobile navigation"/);
  assert.match(navigation, /href="\/search"/);
});

test('Featured book cover supports containment without cropping', () => {
  const media = read('components/molecules/MediaFrame.tsx');
  const hero = read('components/organisms/HomeHero.tsx');
  assert.match(media, /MediaFrameFit = 'cover' \| 'contain'/);
  assert.match(media, /objectFit: fit/);
  assert.match(hero, /imageFit\?: 'cover' \| 'contain'/);
  assert.match(hero, /fit=\{imageFit\}/);
});
