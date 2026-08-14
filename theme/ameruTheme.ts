import { createTheme } from '@mui/material/styles';
import { designTokens } from '@/design-system/tokens';

export const ameruTheme = createTheme({
  palette: {
    primary: { main: designTokens.color.primary, contrastText: designTokens.color.onPrimary },
    secondary: { main: designTokens.color.secondary, contrastText: designTokens.color.onSecondary },
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
