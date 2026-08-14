'use client';

import Link from 'next/link';
import { Box, Container, Stack } from '@mui/material';
import { DesignButton } from '@/components/atoms/DesignButton';
import { DesignText } from '@/components/atoms/DesignText';
import { MediaFrame } from '@/components/molecules/MediaFrame';

export type HomeHeroVariant = 'editorial' | 'immersive';

export interface HomeHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  image?: string;
  primaryAction: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  variant?: HomeHeroVariant;
}

export function HomeHero({ eyebrow, title, description, image, primaryAction, secondaryAction, variant = 'editorial' }: HomeHeroProps) {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 12 }, background: variant === 'immersive' ? 'linear-gradient(135deg, #F1E4D5 0%, #FAF7F1 70%)' : 'background.default' }}>
      <Container maxWidth="xl">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Stack spacing={2.5} flex={1}>
            {eyebrow && <DesignText variant="label" color="secondary.main">{eyebrow}</DesignText>}
            <DesignText variant="display" sx={{ fontSize: { xs: '2.7rem', md: '4.5rem' } }}>{title}</DesignText>
            <DesignText color="text.secondary" sx={{ maxWidth: 650 }}>{description}</DesignText>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
              <DesignButton component={Link} href={primaryAction.href}>{primaryAction.label}</DesignButton>
              {secondaryAction && <DesignButton component={Link} href={secondaryAction.href} variant="outlined">{secondaryAction.label}</DesignButton>}
            </Stack>
          </Stack>
          {image && <Box flex={1} width="100%"><MediaFrame src={image} alt="" variant="portrait" priority /></Box>}
        </Stack>
      </Container>
    </Box>
  );
}
