'use client';

import Link from 'next/link';
import { Box, Container, Stack } from '@mui/material';
import { DesignButton } from '@/components/atoms/DesignButton';
import { DesignText } from '@/components/atoms/DesignText';
import { Surface } from '@/components/atoms/Surface';

export interface BarazaInvitationProps {
  title: string;
  description: string;
  href: string;
}

export function BarazaInvitation({ title, description, href }: BarazaInvitationProps) {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Surface variant="inverse" sx={{ p: { xs: 3, md: 6 }, borderRadius: 4 }}>
          <Stack spacing={2.5} alignItems={{ xs: 'flex-start', md: 'center' }} textAlign={{ xs: 'left', md: 'center' }}>
            <DesignText variant="label" sx={{ color: 'secondary.light', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Baraza la Ontologia</DesignText>
            <DesignText variant="headline">{title}</DesignText>
            <DesignText color="inherit" sx={{ maxWidth: 720, opacity: 0.9 }}>{description}</DesignText>
            <DesignButton component={Link} href={href} variant="inverse">Enter the Baraza</DesignButton>
          </Stack>
        </Surface>
      </Container>
    </Box>
  );
}
