# Atomic design conventions

The design system supports variants at every level, but variants must represent stable semantic differences rather than arbitrary page styling.

## Atoms

Atoms expose small, typed variants such as `DesignButtonVariant`, `SurfaceVariant`, `TagVariant`, and typography roles. Atoms consume design tokens and remain domain-neutral.

## Molecules

Molecules compose atoms around one semantic purpose. They may expose variants when the composition has a recurring presentation mode. They should not introduce raw palette values or page-specific layout constants.

## Organisms

Organisms compose molecules and atoms into reusable sections or interaction units. Organism variants may alter density, emphasis, surface treatment, or responsive composition.

## Templates

Templates define page structure. Template variants are allowed when a structural layout recurs, such as `collection`, `detail`, `gallery`, or `reading`. A page-specific exception should remain local instead of becoming a template variant.

## Promotion rule

Promote a structure upward only when its repeated invariant is clearer and cheaper to express through the abstraction. Do not create generic components merely because two implementations currently resemble one another.

## Cultural boundary

Generic atoms and layout primitives must not know about Ameru clans, historical periods, proverbs, philosophical concepts, artifacts, or other domain entities. Cultural components compose the generic system and may encode those semantics.
