'use client';

import Link from 'next/link';
import { Box, Divider, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import { DesignText } from '@/components/atoms/DesignText';

const links = [
  ['Explore', '/explore'],
  ['Library', '/library'],
  ['Museum', '/museum'],
  ['Baraza', '/baraza'],
  ['Learn', '/learn'],
  ['Community', '/community'],
];

interface ResponsiveNavigationProps { open: boolean; onClose: () => void; }

export function ResponsiveNavigation({ open, onClose }: ResponsiveNavigationProps) {
  return (
    <Drawer open={open} onClose={onClose} ModalProps={{ keepMounted: true }}>
      <Box sx={{ width: { xs: 280, sm: 320 }, p: 2 }} role="navigation" aria-label="Mobile navigation">
        <DesignText variant="title" color="primary.main" sx={{ px: 2, py: 1 }}>Ameru Cultural Library</DesignText>
        <Divider sx={{ my: 1 }} />
        <List>
          {links.map(([label, href]) => (
            <ListItemButton key={href} component={Link} href={href} onClick={onClose}>
              <ListItemText primary={label} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
