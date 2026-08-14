# Ameru Cultural Library — Atomic Design System

## Principle

The design system exists to minimize recreation without forcing unrelated concepts into generic abstractions. Reuse stable visual and interaction invariants; keep cultural semantics in domain features.

## Layer model

```text
Design Tokens
     ↓
Atoms
     ↓
Molecules
     ↓
Organisms
     ↓
Templates
     ↓
Feature Pages
```

## Proposed source tree

```text
components/
  atoms/
  molecules/
  organisms/
  templates/
  cultural/

design-system/
  tokens/
  theme/
  typography/
  motion/
  icons/
features/
  home/
  explore/
  library/
  museum/
  baraza/
  learn/
  community/
  search/
domain/
  books/
  artifacts/
  themes/
  people/
  places/
  philosophy/
  oral-history/
  events/
  programs/
```

## Initial component inventory

### Atoms

Button, IconButton, Icon, Text, Heading, Image, Avatar, Badge, Tag, Divider, Progress, Rating, Surface, Container, Skeleton, FocusRing.

### Molecules

BookMeta, ArtifactMeta, SearchField, FilterChip, SectionHeading, QuoteBlock, ProverbCard, ContentBadge, MediaMeta, EventMeta, UserIdentity, ReadingProgress, SourceCitation.

### Organisms

GlobalHeader, BottomNavigation, HeroSection, FeaturedCollection, BookCarousel, BookGrid, ArtifactGallery, ThemeGrid, SearchPanel, Timeline, Atlas, CommunityFeed, BarazaDiscussion, LearningProgress, EventCalendar, Footer.

### Templates

DiscoveryTemplate, CollectionTemplate, DetailTemplate, ReadingTemplate, GalleryTemplate, DiscussionTemplate, LearningTemplate, ProfileTemplate.

## Cultural components

Cultural components are allowed to encode Ameru-specific semantics:

- ProverbCard
- KimeruTerm
- CulturalMotif
- ElderMarker
- HistoricalPeriod
- ClanMarker
- PhilosophicalQuestion
- SourceCitation

They should compose generic atoms/molecules rather than duplicate them.

## Styling rules

1. Use centralized design tokens for color, spacing, typography, radius, elevation and motion.
2. MUI remains the primary production component/styling foundation unless a documented exception exists.
3. CSS variables may expose design tokens to non-MUI contexts.
4. Avoid arbitrary hex values in feature components.
5. Avoid arbitrary spacing values when a token exists.
6. Every interactive component requires hover/focus/active/disabled states appropriate to its context.
7. Prefer semantic HTML and accessible labels over visual-only implementation.

## Composition rules

A page should look approximately like:

```tsx
<DiscoveryTemplate>
  <HeroSection />
  <FeaturedCollection />
  <ThemeGrid />
  <BookCarousel />
</DiscoveryTemplate>
```

rather than containing duplicated card, typography, spacing and button definitions.

## Anti-patterns

Do not create:

- MegaCard components with many unrelated content modes.
- `AmeruButton`, `AmeruCard`, etc. when a generic primitive suffices.
- Page-local copies of global navigation.
- One-off token values that are visually close to an existing token.
- Components whose only purpose is to wrap a single HTML/MUI element without adding semantics or reuse.
- Domain logic inside atoms.

## Extraction rule

When a visual pattern appears for the second or third time, inspect whether it represents a stable invariant. If yes, promote it to the appropriate atomic layer. If no, keep it local.

## Verification

The design system should have a small showcase route or story-like development surface containing every atom and representative molecule/organism. This becomes the visual regression baseline for future Stitch updates.
