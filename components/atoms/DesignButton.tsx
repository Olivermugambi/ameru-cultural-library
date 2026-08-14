'use client';

import { Button, type ButtonProps } from '@mui/material';

export type DesignButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outlined' | 'text' | 'inverse';

export interface DesignButtonProps extends Omit<ButtonProps, 'variant' | 'color'> {
  variant?: DesignButtonVariant;
}

export function DesignButton({ variant = 'primary', sx, ...props }: DesignButtonProps) {
  const styles = {
    primary: { backgroundColor: 'primary.main', color: 'primary.contrastText', '&:hover': { backgroundColor: 'tertiary' } },
    secondary: { backgroundColor: 'secondary.main', color: 'secondary.contrastText', '&:hover': { backgroundColor: 'secondary.dark' } },
    tertiary: { backgroundColor: 'tertiary.main', color: 'tertiary.contrastText', '&:hover': { backgroundColor: 'primary.main' } },
    outlined: { borderColor: 'divider', color: 'text.primary' },
    text: { color: 'primary.main' },
    inverse: { backgroundColor: 'background.paper', color: 'primary.main', '&:hover': { backgroundColor: 'surfaceContainer.main' } },
  }[variant];

  const muiVariant = variant === 'outlined' ? 'outlined' : variant === 'text' ? 'text' : 'contained';
  return <Button variant={muiVariant} sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 600, ...styles, ...sx }} {...props} />;
}
