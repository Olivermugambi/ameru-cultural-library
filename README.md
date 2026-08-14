# Ameru Cultural Library

The Ameru Cultural Library is a digital cultural institution for discovering, preserving, interpreting, and engaging with Ameru cultural knowledge and its wider African intellectual context.

The application presents books, historical and contemporary material, cultural artifacts, programs, learning experiences, and Baraza la Ontologia. It is being implemented from the approved Stitch design/template while preserving a maintainable Next.js architecture and a reusable atomic design system.

## Architecture

This repository is the **frontend application**. It owns presentation, interaction, responsive composition, client-side experience, and the design system.

The authoritative content/API layer is maintained separately in [`ameru-cultural-library-backend`](https://github.com/Olivermugambi/ameru-cultural-library-backend), a FastAPI project. The frontend must consume backend contracts rather than becoming the authoritative source of cultural content.

```text
Ameru Cultural Library frontend
        │
        │ HTTPS / JSON API
        ▼
Ameru Cultural Library backend
        │
        ├── domain/content contracts
        ├── validation
        ├── relationships
        ├── provenance/status
        └── persistence boundary
```

Do not introduce a second content authority, CMS, or page-local data model without an explicit architectural decision.

## Design system

The UI follows an atomic design system:

```text
Atoms → Molecules → Organisms → Templates → Pages
```

Atoms provide foundational controls and visual primitives. Molecules combine them into reusable interaction units. Organisms represent coherent domain-independent sections. Templates establish page composition. Pages provide route-specific content and orchestration.

Variants are first-class. Prefer extending a canonical component with a coherent variant over creating near-duplicate components. Do not duplicate the application shell or global navigation at page level.

The Stitch design is the visual source of truth, but its SPA implementation is **not** the architectural source of truth. We reproduce the intended experience using Next.js conventions and the existing design-system boundaries.

## Product areas

The planned experience comprises:

- Home
- Explore
- Library
- Museum / cultural archive
- Learn
- Programs
- Baraza la Ontologia
- Community, subject to explicit product/editorial approval

Cross-cutting experiences include book/media viewing, artifact detail, Atlas relationships, learning/quiz interactions, program participation, and contextual relationships among cultural objects.

Baraza is intentionally distinct from a generic community feed. It is a philosophical and cultural inquiry space for recovering, interpreting, and extending Ameru and African philosophical thought.

## Backend relationship

The frontend roadmap is coordinated with the backend repository. Shared concepts include books, authors/contributors, themes, collections, artifacts, places, articles, learning items, programs, Baraza concepts/inquiries/texts/thinkers, media assets, sources, provenance, and content status.

The backend distinguishes authoritative/source material, editorial interpretation, contemporary contribution, and speculative material. The frontend must preserve those distinctions rather than flattening them into generic descriptive copy.

Media presentation also has explicit semantics. Use `contain` when the complete cultural object or book cover must remain visible; use `cover` only when cropping is semantically safe.

## Package manager

**pnpm is the only supported package manager.** The repository pins pnpm `11.18.0` through `package.json`.

Use:

```bash
corepack enable
corepack prepare pnpm@11.18.0 --activate
pnpm install --frozen-lockfile
```

Do not use npm, yarn, or bun for dependency installation. Do not regenerate or commit `package-lock.json`. CI and Vercel must use frozen pnpm lockfile installs.

## Development

```bash
pnpm install --frozen-lockfile
pnpm dev
```

For production verification:

```bash
pnpm run verify
```

`verify` runs the complete project gate: tests, TypeScript checking, linting, and production build.

## Testing policy

Use TDD for implementation work. Add or update tests with the behavior being introduced. CI must run the complete test suite and the full verification gate; a feature is not complete merely because its page renders locally.

Tests should protect architectural invariants as well as behavior, especially:

- one global application shell/navigation
- no page-owned `AppShell` or duplicate navigation
- semantic route destinations
- design-system component/variant contracts
- media `contain`/`cover` semantics
- accessibility-critical interaction contracts

## Implementation roadmap

The GitHub issue roadmap is organized as epics with executable sub-issues:

1. **Foundations** — content, media, route, and design-system contracts.
2. **Library** — catalog discovery, search/filtering, themes/collections, book detail and reader/media entry.
3. **Museum** — artifact discovery/detail and Atlas relationships.
4. **Explore/Learn** — themes, articles, learning content, quizzes, thesis/progress interactions.
5. **Programs** — program discovery, status/filtering, detail, schedule/location, participation.
6. **Baraza la Ontologia** — philosophical inquiry and cultural-intellectual commons.
7. **Community** — conditional on an explicit product/editorial/moderation decision.
8. **Production hardening** — accessibility, SEO/metadata, runtime states, media performance, responsive/visual verification, CI, Vercel, and release readiness.

Feature work must consume the shared contracts before independently inventing domain or UI structures.

## Operational rules

Start feature branches from the current `main` head. Keep pull requests narrowly scoped and independently reviewable. Use `git add` explicitly when staging changes. Never bypass CI or weaken tests to make a branch pass. Resolve Vercel failures as genuine deployment failures rather than masking them in application code.

If implementation reveals an architectural uncertainty in content semantics, API boundaries, routes, shell ownership, or the design system, stop and resolve that contract before creating a local workaround.
