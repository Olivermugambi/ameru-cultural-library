import { createTheme } from '@mui/material/styles';
import { designTokens } from '@/design-system/tokens';

export const ameruTheme = createTheme({
  palette: {
    primary: { main: designTokens.color.primary, contrastText: designTokens.color.onPrimary },
    secondary: { main: designTokens.color.secondary, contrastText: designTokens.color.onSecondary },
    tertiary: { main: designTokens.color.tertiary, contrastText: designTokens.color.onTertiary },
    primaryContainer: { main: designTokens.color.primaryContainer, contrastText: designTokens.color.onPrimaryContainer },
    secondaryContainer: { main: designTokens.color.secondaryContainer, contrastText: designTokens.color.onSecondaryContainer },
    tertiaryContainer: { main: designTokens.color.tertiaryContainer, contrastText: designTokens.color.onTertiaryContainer },
    onPrimaryContainer: { main: designTokens.color.onPrimaryContainer },
    onSecondaryContainer: { main: designTokens.color.onSecondaryContainer },
    onTertiaryContainer: { main: designTokens.color.onTertiaryContainer },
    surfaceVariant: { main: designTokens.color.surfaceVariant },
    surfaceContainer: { main: designTokens.color.surfaceContainer },
    surfaceContainerLow: { main: designTokens.color.surfaceContainerLow },
    surfaceContainerHigh: { main: designTokens.color.surfaceContainerHigh },
    inverseSurface: { main: designTokens.color.inverseSurface },
    inverseOnSurface: { main: designTokens.color.inverseOnSurface },
    background: { default: designTokens.color.background, paper: designTokens.color.surface },
    text: { primary: designTokens.color.textPrimary, secondary: designTokens.color.textSecondary },
    divider: designTokens.color.divider,
    error: { main: designTokens.color.error, contrastText: designTokens.color.onError },
  },
  typography: {
    fontFamily: designTokens.typography.body.fontFamily,
    h1: { fontFamily: designTokens.typography.display.fontFamily, fontWeight: 700, fontSize: '3rem', color: designTokens.color.primary },
    h2: { fontFamily: designTokens.typography.heading.fontFamily, fontWeight: 600, fontSize: '2.2rem' },
    h3: { fontFamily: designTokens.typography.heading.fontFamily, fontWeight: 600 },
    h4: { fontFamily: designTokens.typography.heading.fontFamily, fontWeight: 600, fontSize: '1.6rem' },
    body1: { fontSize: '1.05rem', lineHeight: 1.75, color: designTokens.color.textPrimary },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: { borderRadius: designTokens.radius.md },
  spacing: designTokens.spacing.md,
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: designTokens.radius.md, padding: '10px 20px', boxShadow: 'none', textTransform: 'none' },
        containedPrimary: { backgroundColor: designTokens.color.primary },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { backgroundColor: designTokens.color.background, color: designTokens.color.primary, boxShadow: 'none' },
      },
    },
  },
});
