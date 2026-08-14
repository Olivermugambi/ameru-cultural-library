'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { ameruTheme } from '@/theme/ameruTheme';
import { AppShell } from '@/components/templates/AppShell';

export interface AppProvidersProps {
  children: React.ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider theme={ameruTheme}>
      <CssBaseline />
      <AppShell>{children}</AppShell>
    </ThemeProvider>
  );
}
