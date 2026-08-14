# P1 — Stitch Home migration

## Objective

Replace the legacy homepage with a production implementation derived from the Stitch Home composition while preserving the atomic design system and Ameru cultural domain boundaries.

## Composition contract

The Home page should be composed from reusable design-system primitives rather than copied Stitch markup.

Expected structure:

1. Application shell — `AppShell` / `GlobalHeader`.
2. Hero — editorial introduction, primary discovery action, supporting cultural imagery.
3. Featured collections — reusable content cards and responsive grid.
4. Cultural spotlight — artifact/book/program emphasis using domain-neutral media primitives.
5. Knowledge/program discovery — section-heading + content-section composition.
6. Baraza invitation — a first-class intellectual doorway, not a social-feed implementation.
7. Closing/community contribution CTA.

## Reuse-first rules

Before creating a component, attempt composition from existing atoms, molecules and organisms. Add a new abstraction only when the Stitch structure expresses a stable reusable invariant.

Variants are allowed at every atomic-design level. A variant must encode a stable semantic or structural difference, not a page-specific color, margin or one-off layout.

## Cultural boundary

Generic design-system components remain domain-neutral. Ameru concepts, books, artifacts, programs, people, places and Baraza concepts belong in domain components/data models composed from the generic system.

## Responsive contract

Desktop and mobile are not separate page implementations. The same composition must reflow through responsive variants and layout primitives.

## Acceptance criteria

- Matches the Stitch visual hierarchy and major interaction affordances.
- Uses the production token/theme system; no duplicated global palette or typography values.
- Reuses existing atoms/molecules/organisms wherever their contracts fit.
- New components have typed variant APIs where meaningful.
- Keyboard navigation and visible focus states remain intact.
- Images have meaningful alt text; decorative imagery is explicitly decorative.
- Reduced-motion preferences are respected.
- No hydration/server-client boundary violations.
- `npm run verify` passes.
- Vercel preview deployment succeeds.

## Adversarial checks

- Does any component exist only because it appears once on Home?
- Has page-specific styling leaked into generic primitives?
- Are variants semantic, or merely aliases for arbitrary CSS?
- Does the page remain understandable without imagery?
- Does mobile preserve the information hierarchy rather than merely shrinking desktop?
- Does Baraza remain conceptually distinct from Community?
