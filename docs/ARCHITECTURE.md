# Frontend Architecture

## Responsibility

This repository implements the Ameru Cultural Library frontend. It owns the user-facing experience: route composition, presentation, interaction, responsive behavior, accessibility, and the atomic design system.

The backend is a separate FastAPI repository: `Olivermugambi/ameru-cultural-library-backend`. It owns authoritative content contracts, validation, relationships, provenance/status semantics, media metadata, and the persistence boundary.

The frontend must not become a second content authority.

## Runtime boundary

```text
Browser
  │
  ▼
Next.js App Router
  │
  ├── application shell
  ├── templates
  ├── organisms
  ├── molecules / atoms
  └── API client/access layer
          │
          │ HTTPS / JSON
          ▼
FastAPI backend /api/v1
          │
          ├── domain
          ├── schemas
          ├── services
          └── repositories
```

The API boundary is explicit. Page components should not embed knowledge of persistence or database implementation.

## Application shell

There is exactly one application shell and one global site navigation. The root/provider composition owns the shell; pages own content.

Required invariant:

```text
RootLayout
  → AppProviders
    → AppShell
      → SiteNavigation
        → page content
```

A route must never introduce another `AppShell`, global `AppBar`, site title/menu, or equivalent navigation boundary. This invariant exists because duplicate sticky navigation previously produced two simultaneously visible headers.

## Atomic design

```text
Atoms
  ↓
Molecules
  ↓
Organisms
  ↓
Templates
  ↓
Pages
```

Components must have clear semantic responsibility. Variants are preferred when the same conceptual component needs different visual or interaction treatments.

Create a new component when the semantic role changes, not merely because a page needs different spacing or content. Create a variant when the semantic role remains the same.

Templates own page composition, not domain truth. Pages should remain thin and compose existing primitives.

## Content architecture

The frontend should consume canonical backend concepts including:

- books and authors/contributors
- themes and collections
- artifacts and places
- articles
- learning items and quizzes
- programs
- Baraza concepts, inquiries, texts, and thinkers
- media assets
- sources and provenance
- content status

The frontend must preserve distinctions among source/authoritative material, editorial interpretation, contemporary contribution, and speculative inquiry.

## Media

Media rendering is semantic, not merely cosmetic.

- `contain`: the complete object must remain visible; use for book covers and culturally significant artifact imagery where cropping could remove meaning.
- `cover`: cropping is permitted only where the visual contract explicitly allows it.
- `gallery`: preserve complete-object context and provide accessible descriptions/attribution.

Do not fix image problems by arbitrary CSS cropping.

## Stitch relationship

The Stitch design/template defines the intended visual hierarchy, composition, responsive behavior, and interaction vocabulary. It does not define the production architecture.

The frontend must not copy the Stitch prototype's SPA state architecture, global-header implementation, or page-local data model merely because they appear in the prototype.

When Stitch shows a reusable pattern, map it to the atomic system. When a pattern is genuinely new, add it deliberately and test its contract.

## Feature boundaries

The principal product areas are Home, Explore, Library, Museum, Learn, Programs, Baraza, and a conditional Community experience.

Baraza is not a generic community feed. It is an intellectual/cultural inquiry space and must preserve distinctions between historical/source material, interpretation, and contemporary inquiry.

Community is conditional. Its implementation requires an explicit product/editorial/moderation decision rather than being inferred solely from the Stitch prototype.

## Failure boundaries

Do not:

- add a second application shell
- create frontend-only authoritative cultural data
- invent cultural or historical claims
- introduce a CMS merely to avoid designing the API contract
- duplicate design-system components instead of adding variants
- bypass API contracts with page-local mock models once the backend contract exists
- weaken tests, CI, or Vercel configuration to hide architectural failures
