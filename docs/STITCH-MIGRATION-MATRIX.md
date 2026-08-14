# Stitch → Production Migration Matrix

| Prototype | Production | Atomic strategy | Priority |
|---|---|---|---|
| Header | GlobalHeader | organism | P0 |
| Navigation | BottomNavigation + responsive desktop nav | organism | P0 |
| HomeScreen | `/` | DiscoveryTemplate + organisms | P1 |
| ExploreScreen | `/explore` | Discovery/Collection templates | P1 |
| LibraryScreen | `/library` | CollectionTemplate | P1 |
| MuseumScreen | `/museum` | GalleryTemplate + Atlas | P1 |
| BarazaScreen | `/baraza` | DiscussionTemplate + cultural organisms | P1 |
| LearnScreen | `/learn` | LearningTemplate | P2 |
| CommunityScreen | `/community` | DiscussionTemplate + CommunityFeed | P2 |
| BookReaderModal | book reader route/dialog | ReadingTemplate | P2 |
| ArtifactDetailModal | artifact detail | DetailTemplate | P2 |
| AtlasModal | museum atlas | Atlas organism | P2 |
| ThemeDetailModal | theme detail | DetailTemplate | P2 |
| ThesisModal | Baraza thesis flow | Baraza organism | P2 |
| DailyQuizModal | quiz flow | learning interaction | P3 |
| WorkshopsCalendarModal | events/programs | EventCalendar organism | P3 |
| CreatePostModal | community contribution | reusable dialog | P3 |
| ProfileModal | profile | ProfileTemplate | P3 |
| ContributorModal | contributor detail | DetailTemplate | P3 |
| ArticleModal | article/detail content | ReadingTemplate | P3 |
| MoreMenuModal | responsive secondary navigation | navigation organism | P0 |

## Existing production routes to preserve/reconcile

- `/`
- `/library`
- `/library/books`
- `/library/audios`
- `/library/images`
- `/library/videos`

These routes should be visually migrated rather than deleted merely because the prototype uses a tabbed shell.

## Migration order

1. Token/theme foundation.
2. Global shell.
3. Atoms and common molecules.
4. Home.
5. Explore.
6. Library and existing library subroutes.
7. Museum and atlas.
8. Baraza.
9. Learn.
10. Community/programs.
11. Search.
12. Detail/read/dialog experiences.
13. Accessibility, responsive, loading/error/empty states.

## Definition of done

A surface is migrated only when its implementation is production-routed, responsive, accessible, token-driven, composed from the atomic system, and behaviorally equivalent to the intended Stitch interaction—not merely visually similar at one viewport.
