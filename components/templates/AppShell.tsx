'use client';

import { useState } from 'react';
import { Box } from '@mui/material';
import { GlobalHeader } from '@/components/organisms/GlobalHeader';
import { ResponsiveNavigation } from '@/components/organisms/ResponsiveNavigation';

export function AppShell({ children }: { children: React.ReactNode }) {
  const [navigationOpen, setNavigationOpen] = useState(false);
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <GlobalHeader onMenu={() => setNavigationOpen(true)} />
      <ResponsiveNavigation open={navigationOpen} onClose={() => setNavigationOpen(false)} />
      <Box component="main">{children}</Box>
    </Box>
  );
}
