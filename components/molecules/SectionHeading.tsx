'use client';

import { Stack } from '@mui/material';
import { DesignButton } from '@/components/atoms/DesignButton';
import { DesignText } from '@/components/atoms/DesignText';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function SectionHeading({ eyebrow, title, description, actionLabel, onAction }: SectionHeadingProps) {
  return (
    <Stack spacing={1}>
      {eyebrow && <DesignText variant="label" sx={{ color: 'secondary.main', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{eyebrow}</DesignText>}
      <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', sm: 'center' }} gap={2}>
        <Stack spacing={0.5}>
          <DesignText variant="headline">{title}</DesignText>
          {description && <DesignText color="text.secondary">{description}</DesignText>}
        </Stack>
        {actionLabel && <DesignButton variant="text" onClick={onAction}>{actionLabel}</DesignButton>}
      </Stack>
    </Stack>
  );
}
