# Ameru Cultural Library — Design-to-Code Contract

## Purpose

`Ameru-Library-App-Design` is the visual and interaction reference. `ameru-cultural-library` is the production application. The design repository must not become a runtime dependency.

The production implementation must preserve four things from the prototype: visual language, information hierarchy, interaction model, and cultural intent. It may change implementation details where production architecture, accessibility, routing, data access, or responsive behavior require it.

## Product surfaces

| Design surface | Production destination | Responsibility |
|---|---|---|
| HomeScreen | `/` | Curated daily discovery across the cultural ecosystem |
| ExploreScreen | `/explore` | Thematic discovery and cultural knowledge navigation |
| LibraryScreen | `/library` | Books, journals, newspapers, audiobooks and media |
| MuseumScreen | `/museum` | Artifact discovery, detail and atlas/map experience |
| BarazaScreen | `/baraza` | Ameru/African philosophical inquiry, dialogue and theses |
| LearnScreen | `/learn` | Courses, lessons, quizzes and progress |
| CommunityScreen | `/community` | Community discussion, contributors and programs |
| More / utilities | contextual routes/drawers | Profile, atlas, workshops, search and secondary utilities |

Existing library routes remain usable where they represent real content, but should be progressively composed through the new shell and design system.

## Atomic design contract

### Atoms

Generic visual primitives with no cultural-domain knowledge:

`Button`, `IconButton`, `Icon`, `Typography`, `Image`, `Avatar`, `Badge`, `Tag`, `Divider`, `Progress`, `Rating`, `Surface`, `Container`, `Skeleton`.

### Molecules

Reusable semantic combinations:

`BookMeta`, `ArtifactMeta`, `SearchField`, `FilterChip`, `SectionHeading`, `QuoteBlock`, `ProverbCard`, `ContentBadge`, `MediaMeta`, `EventMeta`, `UserIdentity`, `ReadingProgress`.

### Organisms

Reusable sections and interaction structures:

`GlobalHeader`, `BottomNavigation`, `HeroSection`, `BookCarousel`, `ArtifactGallery`, `ThemeGrid`, `FeaturedCollection`, `SearchPanel`, `Timeline`, `Atlas`, `CommunityFeed`, `BarazaDiscussion`, `LearningProgress`, `EventCalendar`, `Footer`.

### Templates

Reusable page structures:

`DiscoveryTemplate`, `CollectionTemplate`, `DetailTemplate`, `ReadingTemplate`, `GalleryTemplate`, `DiscussionTemplate`, `LearningTemplate`, `ProfileTemplate`.

### Pages/features

Routes compose templates, organisms and domain data. Pages should not recreate generic UI primitives.

## Cultural domain boundary

Keep generic UI components culturally agnostic. Cultural semantics belong in domain models and cultural molecules/organisms.

Initial domain entities:

`Book`, `Artifact`, `Theme`, `Proverb`, `Course`, `CommunityPost`, `Person`, `Place`, `Event`, `Program`, `OralHistory`, `PhilosophicalConcept`, `Question`, `Thesis`, `Dialogue`.

The prototype's representative data is fixture material, not an authoritative historical source. Historical, political, linguistic and philosophical claims must eventually carry provenance/source metadata.

## Baraza la Ontologia

Baraza is a first-class product surface, not a renamed forum.

Its core relationship is:

`Source → Interpretation → Question → Dialogue → Comparison → Thesis → New contribution`

Baraza content should be able to relate to books, artifacts, people, places, proverbs, historical events and philosophical concepts. The long-term architecture should support comparison within Ameru thought and with wider African and other philosophical traditions without collapsing them into a single undifferentiated category.

## Design tokens

Extract the prototype's visual vocabulary into centralized production tokens before page-level migration:

- color roles rather than scattered hex values
- typography families and scale
- spacing scale
- radii
- elevation
- borders/dividers
- motion durations/easings
- responsive breakpoints
- image aspect ratios
- focus/hover/active/disabled states

The production repository currently uses MUI. Prefer expressing the token system through the existing MUI theme and CSS variables rather than introducing a second competing component system. Tailwind may remain available where already useful, but new components should not arbitrarily mix styling paradigms.

## Cultural visual language

Existing production motifs such as Beads, Calabash, Horizon, Mugumo and Weave should be retained and normalized as reusable decorative primitives. They should reinforce identity without turning every surface into ornamental decoration.

## Interaction contract

Prototype interactions that must have production equivalents include:

- book reader
- artifact detail
- artifact atlas/map
- theme detail
- daily quiz
- thesis submission
- profile
- workshops calendar
- community post creation
- contributor information
- article detail
- contextual More menu

Prefer reusable dialog/drawer patterns rather than bespoke modal implementations.

## Data contract

Prototype fixture types should become stable domain interfaces. UI components should depend on domain contracts rather than importing hard-coded fixture arrays directly.

The intended transition is:

`fixture → repository/API → domain model → feature → design-system components`

not:

`fixture → page-specific JSX`.

## Reuse rule

Do not abstract solely because two components look similar. Abstract when a reusable component preserves a stable invariant and removes future duplication. Domain-specific cards should compose generic primitives rather than become a single polymorphic mega-card.

## Acceptance criteria for each migrated surface

1. Matches the Stitch hierarchy and visual language.
2. Uses production design tokens rather than page-local visual constants.
3. Uses atomic components wherever the structure is genuinely reusable.
4. Preserves semantic cultural distinctions between content types.
5. Works responsively at mobile, tablet and desktop widths.
6. Has keyboard/focus/accessibility states.
7. Has loading, empty and error states where data is asynchronous.
8. Does not introduce a second competing design system.
9. Does not hard-code prototype-only cultural claims as authoritative facts.
10. Keeps route and domain behavior separable from presentation.

## Adversarial gates

Do not approve a migration if:

- it copies the prototype repository wholesale;
- it creates duplicate versions of an existing atom/molecule;
- it introduces page-local colors/spacing that should be tokens;
- Baraza is reduced to a generic social feed;
- content relationships are lost during visual migration;
- the page only works at the prototype viewport;
- visual similarity is achieved by sacrificing semantic HTML or accessibility;
- prototype fixture data is silently promoted to authoritative cultural data.
