'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { ameruTheme } from '@/theme/ameruTheme';
import { AppShell } from '@/components/templates/AppShell';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={ameruTheme}>
      <CssBaseline />
      <AppShell>{children}</AppShell>
    </ThemeProvider>
  );
}
