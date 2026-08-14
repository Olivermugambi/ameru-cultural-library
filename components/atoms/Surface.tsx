'use client';

import { Paper, type PaperProps } from '@mui/material';

export type SurfaceVariant = 'default' | 'subtle' | 'raised' | 'outlined' | 'inverse';

export interface SurfaceProps extends PaperProps {
  variant?: SurfaceVariant;
}

export function Surface({ variant = 'default', sx, ...props }: SurfaceProps) {
  const styles = {
    default: { backgroundColor: 'background.paper', boxShadow: 'none' },
    subtle: { backgroundColor: 'background.default', boxShadow: 'none' },
    raised: { backgroundColor: 'background.paper', boxShadow: 2 },
    outlined: { backgroundColor: 'background.paper', boxShadow: 'none', border: 1, borderColor: 'divider' },
    inverse: { backgroundColor: 'text.primary', color: 'background.paper', boxShadow: 'none' },
  }[variant];

  return <Paper elevation={0} sx={{ ...styles, ...sx }} {...props} />;
}
