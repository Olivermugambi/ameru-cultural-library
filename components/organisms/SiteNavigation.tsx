'use client';

import { useState } from 'react';
import { AppBar, Box, Drawer, IconButton, List, ListItemButton, ListItemText, Stack, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
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

export function SiteNavigation() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <AppBar position="sticky" color="transparent" elevation={0} component="header">
        <Toolbar sx={{ maxWidth: 'xl', width: '100%', mx: 'auto', justifyContent: 'space-between' }}>
          <Stack direction="row" alignItems="center" spacing={1.5}>
            {mobile && <IconButton edge="start" onClick={() => setOpen(true)} aria-label="Open navigation"><MenuIcon /></IconButton>}
            <Box component="a" href="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
              <DesignText variant="title" color="primary.main">Ameru Cultural Library</DesignText>
            </Box>
          </Stack>
          {!mobile && <Stack component="nav" direction="row" spacing={1} aria-label="Primary navigation">
            {links.map(([label, href]) => <DesignButton key={href} href={href} variant="text" size="small">{label}</DesignButton>)}
          </Stack>}
          <DesignButton href="/search" variant="outlined" size="small">Search</DesignButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)} ModalProps={{ keepMounted: true }}>
        <Box sx={{ width: { xs: 280, sm: 320 }, p: 2 }} role="navigation" aria-label="Mobile navigation">
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 1 }}>
            <DesignText variant="title" color="primary.main">Ameru Cultural Library</DesignText>
            <IconButton onClick={() => setOpen(false)} aria-label="Close navigation"><CloseIcon /></IconButton>
          </Stack>
          <List>
            {links.map(([label, href]) => <ListItemButton key={href} component="a" href={href} onClick={() => setOpen(false)}><ListItemText primary={label} /></ListItemButton>)}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
