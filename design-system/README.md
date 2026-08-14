# Ameru Cultural Library Design System

P0.1 establishes the shared visual vocabulary derived from the Stitch design prototype.

`tokens.ts` is the source of truth for semantic colors, typography roles, spacing, radii, and elevation. The MUI theme consumes these tokens rather than duplicating raw values.

Rules:

- Prefer semantic tokens over raw color, spacing, radius, or shadow values.
- Generic atoms must not encode cultural-domain data.
- Cultural atoms belong above the generic primitive layer.
- Components should consume the MUI theme or exported tokens; page-specific visual constants are discouraged.
- Stitch is a design reference, not a runtime dependency.
- Keep the token vocabulary intentionally small; add a token only when it represents a stable reusable invariant.
