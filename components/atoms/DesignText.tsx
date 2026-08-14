'use client';

import { Typography, type TypographyProps } from '@mui/material';

export type DesignTextVariant =
  | 'display'
  | 'headline'
  | 'title'
  | 'body'
  | 'label'
  | 'caption';

export interface DesignTextProps extends Omit<TypographyProps, 'variant'> {
  variant?: DesignTextVariant;
}

const variantMap: Record<DesignTextVariant, TypographyProps['variant']> = {
  display: 'h1',
  headline: 'h2',
  title: 'h4',
  body: 'body1',
  label: 'button',
  caption: 'caption',
};

export function DesignText({ variant = 'body', ...props }: DesignTextProps) {
  return <Typography variant={variantMap[variant]} {...props} />;
}
