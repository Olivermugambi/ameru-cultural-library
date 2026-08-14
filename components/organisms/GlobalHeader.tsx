'use client';

import Link from 'next/link';
import { AppBar, Box, IconButton, Stack, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { DesignButton } from '@/components/atoms/DesignButton';
import { DesignText } from '@/components/atoms/DesignText';

const links = [
  ['Explore', '/explore'],
  ['Library', '/library'],
  ['Museum', '/museum'],
  ['Baraza', '/baraza'],
  ['Learn', '/learn'],
  ['Community', '/community'],
];

interface GlobalHeaderProps { onMenu?: () => void; }

export function GlobalHeader({ onMenu }: GlobalHeaderProps) {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <AppBar position="sticky" color="transparent" elevation={0} component="header">
      <Toolbar sx={{ maxWidth: 'xl', width: '100%', mx: 'auto', justifyContent: 'space-between' }}>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          {mobile && <IconButton edge="start" onClick={onMenu} aria-label="Open navigation"><MenuIcon /></IconButton>}
          <Box component={Link} href="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
            <DesignText variant="title" color="primary.main">Ameru Cultural Library</DesignText>
          </Box>
        </Stack>
        {!mobile && <Stack component="nav" direction="row" spacing={1} aria-label="Primary navigation">
          {links.map(([label, href]) => <DesignButton key={href} component={Link} href={href} variant="text" size="small">{label}</DesignButton>)}
        </Stack>}
        <DesignButton component={Link} href="/search" variant="outlined" size="small">Search</DesignButton>
      </Toolbar>
    </AppBar>
  );
}
