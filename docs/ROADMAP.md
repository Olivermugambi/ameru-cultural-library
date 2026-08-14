# Implementation Roadmap

This roadmap describes the frontend's remaining work after the Stitch migration, navigation corrections, and package-manager migration. GitHub epics/sub-issues are the executable source of truth; this document records their architectural ordering.

## Dependency order

```text
P1 Foundations
    │
    ├── P2 Library
    ├── P3 Museum
    └── P4 Explore/Learn
            │
            ▼
        P5 Programs
            │
            ▼
        P6 Baraza
            │
            ├── P6C Community (conditional)
            │
            ▼
        P7 Production hardening
```

Foundations are shared contracts, not a UI feature. Domain features may scaffold only against approved contracts.

## P1 — Shared foundations

Establish the frontend/backend vocabulary, media semantics, canonical routes, design-system coverage, fixtures/access boundaries, and architectural contract tests.

The corresponding backend repository is responsible for the server-side content/API implementation. Frontend contracts must remain compatible with its FastAPI `/api/v1` boundary.

## P2 — Library

Implement catalog discovery, search/filtering, themes and collections, book cards/detail, reader/media entry, and required loading/empty/error states. Replace transitional media routes with deliberate implementations or redirects.

## P3 — Museum

Implement artifact discovery/detail, cultural context and provenance presentation, media gallery behavior, and Atlas relationships/fallback behavior.

## P4 — Explore/Learn

Implement the discovery layer for themes/articles and learning experiences including quiz/thesis/progress interactions represented in Stitch.

## P5 — Programs

Implement program discovery, status/filtering, detail, schedule/location, participation affordances, and responsive states.

## P6 — Baraza la Ontologia

Implement Baraza as a dedicated philosophical/cultural inquiry experience. Preserve distinctions between historical/source material, editorial interpretation, contemporary inquiry, and speculative exploration. Link Baraza contextually to books, artifacts, learning, and programs without turning it into a generic community feed.

## P6C — Community

The Stitch prototype includes Community, profiles, contributors, and post creation. This is conditional product scope. Do not implement social/community infrastructure until product/editorial/moderation rules are explicitly approved.

## P7 — Production hardening

Complete accessibility, metadata/SEO, runtime states, media performance, responsive verification, selective visual regression, CI, Vercel, security/dependency checks, and release documentation.

## Completion invariant

The project is not complete merely when every Stitch screen exists. Completion requires:

- coherent cross-route information architecture;
- one global shell/navigation;
- atomic-design reuse with intentional variants;
- backend-owned authoritative content;
- explicit provenance/status semantics;
- correct media semantics;
- accessible and responsive interaction;
- complete automated verification;
- successful Vercel deployment.

Any feature that cannot satisfy those invariants is not ready to merge.
