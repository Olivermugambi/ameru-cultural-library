'use client';

import { Box, Stack, type BoxProps } from '@mui/material';
import { SectionHeading, type SectionHeadingProps } from '@/components/molecules/SectionHeading';

export type ContentSectionVariant = 'default' | 'subtle' | 'accent' | 'inverse';

export interface ContentSectionProps extends Omit<BoxProps, 'title'> {
  heading: SectionHeadingProps;
  variant?: ContentSectionVariant;
  children: React.ReactNode;
}

export function ContentSection({ heading, variant = 'default', children, sx, ...props }: ContentSectionProps) {
  const styles = {
    default: { backgroundColor: 'background.default' },
    subtle: { backgroundColor: 'surfaceContainerLow.main' },
    accent: { backgroundColor: 'primaryContainer.main' },
    inverse: { backgroundColor: 'inverseSurface.main', color: 'inverseOnSurface.main' },
  }[variant];

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 }, ...styles, ...sx }} {...props}>
      <Stack spacing={4} maxWidth="xl" mx="auto" px={{ xs: 2, sm: 3, md: 4 }}>
        <SectionHeading {...heading} />
        {children}
      </Stack>
    </Box>
  );
}
