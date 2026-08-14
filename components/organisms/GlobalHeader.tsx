'use client';

import Link from 'next/link';
import { AppBar, Box, IconButton, Stack, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { DesignButton } from '@/components/atoms/DesignButton';
import { DesignText } from '@/components/atoms/DesignText';

const navigation = [
  ['Explore', '/explore'],
  ['Library', '/library'],
  ['Museum', '/museum'],
  ['Baraza', '/baraza'],
  ['Learn', '/learn'],
  ['Community', '/community'],
] as const;

export interface GlobalHeaderProps {
  onMenu?: () => void;
}

export function GlobalHeader({ onMenu }: GlobalHeaderProps) {
  const theme = useTheme();
  const compact = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="sticky" elevation={0} color="transparent" component="header">
      <Toolbar sx={{ minHeight: { xs: 64, md: 76 }, px: { xs: 2, md: 4 }, maxWidth: 1440, width: '100%', mx: 'auto' }}>
        {compact && (
          <IconButton onClick={onMenu} aria-label="Open navigation" sx={{ mr: 1 }}>
            <MenuIcon />
          </IconButton>
        )}
        <Box component={Link} href="/" sx={{ textDecoration: 'none', color: 'inherit', mr: { md: 4 }, flexShrink: 0 }}>
          <DesignText variant="title" sx={{ color: 'primary.main', lineHeight: 1.1 }}>Ameru Cultural Library</DesignText>
        </Box>
        {!compact && (
          <Stack component="nav" aria-label="Primary navigation" direction="row" spacing={0.5} sx={{ flex: 1 }}>
            {navigation.map(([label, href]) => (
              <DesignButton key={href} component={Link} href={href} variant="text" size="small">{label}</DesignButton>
            ))}
          </Stack>
        )}
        <DesignButton component={Link} href="/search" variant="outlined" size="small">Search</DesignButton>
      </Toolbar>
    </AppBar>
  );
}
