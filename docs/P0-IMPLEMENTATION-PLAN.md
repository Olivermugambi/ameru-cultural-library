# P0 — Design-System Foundation and Application Shell

## Objective

Implement the minimum stable production foundation required to migrate the Stitch design without recreating UI across feature pages.

P0 does **not** migrate Home, Explore, Library, Museum, Baraza, Learn or Community content. It establishes the visual grammar, reusable primitives, responsive shell and verification surface on which those migrations will be built.

## Source of truth

- Stitch/design repository: visual language and intended interactions.
- `ameru-cultural-library`: production architecture, routing, accessibility, data boundaries and runtime behavior.
- Existing Ameru MUI theme and motifs: preserve useful cultural foundations while normalizing them into the new token/component system.

## Work packages

### P0.1 — Token foundation

Create centralized tokens for:

- color roles
- typography families and scale
- spacing
- radii
- borders/dividers
- elevation
- motion
- breakpoints
- content/image aspect ratios
- focus states

Expose them through the MUI theme and CSS variables where necessary. Feature components must not introduce arbitrary visual constants when an existing token applies.

### P0.2 — Atomic primitives

Implement only genuinely reusable primitives initially:

- Button
- IconButton
- Icon
- Typography/Heading
- Image
- Avatar
- Badge/Tag
- Divider
- Surface
- Container
- Progress
- Rating
- Skeleton
- Focus/interaction states

Every interactive primitive must support keyboard focus and disabled/active/hover states where applicable.

### P0.3 — Core molecules

Implement the first stable semantic combinations:

- SectionHeading
- SearchField
- FilterChip
- ContentBadge
- BookMeta
- ArtifactMeta
- MediaMeta
- EventMeta
- UserIdentity
- ReadingProgress
- QuoteBlock

Avoid domain-heavy components until their invariants are demonstrated by multiple features.

### P0.4 — Application shell

Implement:

- GlobalHeader
- responsive desktop navigation
- mobile navigation/bottom navigation
- page container/layout
- global modal/drawer foundation
- consistent focus behavior
- responsive navigation state

Target product destinations:

`Home → Explore → Library → Museum → Baraza → Learn → Community`

Existing library subroutes must remain reachable during migration.

### P0.5 — Design-system showcase

Add a development-only or clearly non-public showcase route that renders:

- all atoms
- representative molecules
- shell states
- typography hierarchy
- token samples
- responsive navigation states
- focus/disabled/loading states
- existing cultural motifs

This is the visual regression baseline for subsequent Stitch migrations.

### P0.6 — Verification

Before P0 is complete:

1. TypeScript passes.
2. ESLint passes.
3. Production build passes.
4. Existing routes still resolve.
5. No new feature component contains arbitrary colors where tokens apply.
6. No duplicate generic primitives are introduced.
7. Desktop, tablet and mobile shell states are verified.
8. Keyboard navigation reaches all interactive shell controls.
9. Reduced-motion behavior is respected for non-essential animation.
10. The showcase demonstrates the reusable foundation without importing the design repository.

## Explicit non-goals

P0 must not:

- port the Stitch repository wholesale;
- introduce a second competing component system;
- migrate all screens in one change;
- implement the Baraza domain model;
- introduce production API/data fetching;
- treat prototype fixture data as authoritative cultural content;
- build polymorphic mega-components merely to reduce file count.

## Exit condition

P0 is complete when a new feature page can be assembled primarily by composing existing tokens, atoms, molecules, organisms and templates, and when a visual change to the design language can be made centrally without editing every feature page.

## Adversarial checkpoint

Before beginning P1, inspect the P0 diff for:

- abstraction created before repetition;
- MUI/Tailwind styling drift;
- duplicated navigation or modal logic;
- page-specific token leakage;
- inaccessible interactive states;
- responsive behavior that only matches the Stitch viewport;
- cultural decoration used without semantic purpose.
