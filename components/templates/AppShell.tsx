'use client';

import { Box } from '@mui/material';
import { SiteNavigation } from '@/components/organisms/SiteNavigation';

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <SiteNavigation />
      <Box component="main">{children}</Box>
    </Box>
  );
}
