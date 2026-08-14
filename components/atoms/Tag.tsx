'use client';

import { Chip, type ChipProps } from '@mui/material';

export type TagVariant = 'default' | 'primary' | 'secondary' | 'muted' | 'inverse';

export interface TagProps extends Omit<ChipProps, 'color' | 'variant'> {
  variant?: TagVariant;
}

export function Tag({ variant = 'default', sx, ...props }: TagProps) {
  const styles = {
    default: { backgroundColor: 'surfaceVariant.main', color: 'text.primary' },
    primary: { backgroundColor: 'primaryContainer.main', color: 'onPrimaryContainer.main' },
    secondary: { backgroundColor: 'secondaryContainer.main', color: 'onSecondaryContainer.main' },
    muted: { backgroundColor: 'transparent', color: 'text.secondary', border: 1, borderColor: 'divider' },
    inverse: { backgroundColor: 'inverseSurface.main', color: 'inverseOnSurface.main' },
  }[variant];

  return <Chip size="small" sx={{ borderRadius: 999, fontWeight: 600, ...styles, ...sx }} {...props} />;
}
