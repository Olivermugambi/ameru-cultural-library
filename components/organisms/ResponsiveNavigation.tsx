'use client';

import Link from 'next/link';
import { Box, Divider, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import { DesignText } from '@/components/atoms/DesignText';

const navigation = [
  ['Home', '/'],
  ['Explore', '/explore'],
  ['Library', '/library'],
  ['Museum', '/museum'],
  ['Baraza', '/baraza'],
  ['Learn', '/learn'],
  ['Community', '/community'],
] as const;

export interface ResponsiveNavigationProps {
  open: boolean;
  onClose: () => void;
}

export function ResponsiveNavigation({ open, onClose }: ResponsiveNavigationProps) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose} ModalProps={{ keepMounted: true }}>
      <Box sx={{ width: { xs: 300, sm: 340 }, py: 2 }} role="presentation">
        <Box sx={{ px: 3, pb: 2 }}>
          <DesignText variant="title" color="primary.main">Ameru Cultural Library</DesignText>
        </Box>
        <Divider />
        <List component="nav" aria-label="Mobile navigation">
          {navigation.map(([label, href]) => (
            <ListItemButton key={href} component={Link} href={href} onClick={onClose}>
              <ListItemText primary={label} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
