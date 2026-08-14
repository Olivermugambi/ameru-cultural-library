'use client';

import Image from 'next/image';
import { Box, type BoxProps } from '@mui/material';

export type MediaFrameVariant = 'standard' | 'portrait' | 'wide' | 'square';
export type MediaFrameFit = 'cover' | 'contain';

export interface MediaFrameProps extends Omit<BoxProps, 'children'> {
  src: string;
  alt: string;
  variant?: MediaFrameVariant;
  fit?: MediaFrameFit;
  priority?: boolean;
}

const ratios: Record<MediaFrameVariant, string> = {
  standard: '4 / 3', portrait: '3 / 4', wide: '16 / 9', square: '1 / 1',
};

export function MediaFrame({ src, alt, variant = 'standard', fit = 'cover', priority = false, sx, ...props }: MediaFrameProps) {
  return (
    <Box sx={{ position: 'relative', aspectRatio: ratios[variant], overflow: 'hidden', borderRadius: 2, ...sx }} {...props}>
      <Image src={src} alt={alt} fill priority={priority} sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: fit }} />
    </Box>
  );
}
