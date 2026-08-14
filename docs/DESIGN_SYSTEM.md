# Atomic Design System

## Purpose

The design system is the reusable implementation layer between the Stitch design and route-specific pages. Its purpose is to preserve visual coherence while minimizing code recreation and preventing page-local design drift.

## Hierarchy

### Atoms

Foundational primitives such as typography, icons, buttons, links, inputs, badges, media frames, dividers, and layout primitives.

Atoms should have narrow semantics and stable accessibility behavior.

### Molecules

Small reusable compositions such as search controls, metadata rows, collection/book cards, media captions, filters, and action groups.

### Organisms

Coherent sections such as site navigation, hero sections, collection rails, discovery sections, artifact galleries, learning panels, program cards, and Baraza invitations.

### Templates

Page-level composition patterns. Templates define structure and responsive layout, but do not own domain content or global navigation state.

### Pages

Route-specific composition and data orchestration. Pages should be thin.

## Variants

Variants are a first-class mechanism.

Use a variant when:

- the semantic component is the same;
- the difference is visual, density-related, responsive, or interaction-related;
- consumers can understand the variant without domain-specific hacks.

Create a new component when:

- the semantic role is different;
- the accessibility contract differs materially;
- the component lifecycle/interaction model differs;
- a variant would make the API ambiguous or encode unrelated domains.

Do not create one component per Stitch screen.

## Media variants

Media components must expose explicit semantics. At minimum the system must distinguish:

- `contain` — preserve the complete image/object;
- `cover` — crop only where safe;
- `gallery` — preserve object context and support multiple views.

Book covers and culturally significant artifacts default toward `contain` when cropping could obscure title, identity, or contextual meaning.

## Navigation ownership

`SiteNavigation` is an organism owned by the application shell. It must not be recreated by pages, templates, feature organisms, or route-local components.

A page may contain contextual navigation, filters, tabs, or search controls, but those must not masquerade as the global site header.

## Stitch mapping

For every Stitch pattern:

1. identify its semantic role;
2. search the existing system;
3. reuse the canonical component if possible;
4. add a variant if the semantic role remains the same;
5. create a new component only when the role is genuinely new;
6. add the relevant contract test;
7. verify desktop/mobile behavior.

The Stitch prototype is a visual/product reference. Its component implementation is not copied verbatim.

## Accessibility

Reusable components own baseline accessibility. New variants must preserve:

- semantic HTML;
- keyboard operability;
- visible focus;
- accessible names;
- meaningful image alternatives;
- appropriate ARIA only where native semantics are insufficient.

Accessibility defects in a shared component must be fixed at the component level rather than patched independently by pages.
