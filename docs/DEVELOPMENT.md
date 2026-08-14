# Development Guide

## Prerequisites

Use a Node.js version compatible with the current Next.js toolchain and pnpm `11.18.0`.

```bash
corepack enable
corepack prepare pnpm@11.18.0 --activate
pnpm --version
```

The output should be `11.18.0`.

## Install

Always install from the committed pnpm lockfile:

```bash
pnpm install --frozen-lockfile
```

Do not use `npm install`, `yarn`, or `bun`. Do not commit `package-lock.json`.

## Local development

```bash
pnpm dev
```

For a clean Next.js runtime when debugging stale rendering:

```bash
rm -rf .next
pnpm dev
```

## TDD workflow

Implementation follows test-driven development:

1. State the behavior/contract that must change.
2. Add or update the smallest failing test.
3. Implement the smallest coherent change.
4. Run the focused test.
5. Run the complete verification suite.
6. Inspect the rendered experience for Stitch parity and responsive behavior.
7. Commit only the intended changes.

Use explicit staging:

```bash
git add <files>
git status
git commit -m "<message>"
```

## Verification

The canonical gate is:

```bash
pnpm run verify
```

This executes the complete test suite, TypeScript checking, linting, and production build.

Do not treat a passing page-level test as sufficient. Contract tests should protect architecture, navigation ownership, route semantics, media behavior, and reusable component invariants.

## Branching

Start from the current `main` head:

```bash
git checkout main
git pull --ff-only origin main
git checkout -b <type>/<scope>
```

Keep changes focused. If work depends on an unmerged PR, document that dependency rather than silently branching from stale code.

After rebasing an already-pushed feature branch, use `git push --force-with-lease` only when necessary to update the rewritten branch. Never use blind `--force`.

## Backend integration

The backend repository is `Olivermugambi/ameru-cultural-library-backend`.

Until a backend contract is implemented, fixtures may be used only where the relevant frontend issue explicitly permits them. Fixtures are not authoritative cultural content.

When an API contract exists:

- consume the backend schema rather than recreating domain types independently;
- keep API access outside page components;
- preserve backend provenance/status semantics;
- handle loading, empty, unavailable, and error states explicitly;
- do not silently fall back to invented content.

## Design-system workflow

Before creating a component:

1. Search for an existing atom, molecule, organism, or template.
2. Determine whether an existing component can accept a variant.
3. Only create a new component if its semantic responsibility is genuinely different.
4. Add a contract test where the component is architectural/reusable.

The Stitch design should be mapped to the design system, not implemented as isolated screen markup.

## Navigation invariant

Pages must not render `AppShell`, `SiteNavigation`, or a site-level `AppBar`.

If two site titles, menus, or search controls appear at the top of the application, inspect the rendered component hierarchy before applying CSS fixes. Duplicate navigation is an architectural defect.

## Vercel

Vercel is a production deployment gate, not an optional preview detail. Deployment failures must be investigated at the build/dependency/configuration layer before changing application behavior.

The deployment must use pnpm and a frozen lockfile. A local `pnpm run verify` pass is necessary but does not prove that Vercel has successfully deployed the branch.
