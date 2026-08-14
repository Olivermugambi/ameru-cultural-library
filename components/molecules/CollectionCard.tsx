'use client';

import Link from 'next/link';
import { CardActionArea, CardContent, Stack } from '@mui/material';
import { DesignText } from '@/components/atoms/DesignText';
import { MediaFrame } from '@/components/molecules/MediaFrame';
import { Tag } from '@/components/atoms/Tag';

export type CollectionCardVariant = 'standard' | 'featured' | 'compact';

export interface CollectionCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  label?: string;
  variant?: CollectionCardVariant;
}

export function CollectionCard({ title, description, image, href, label, variant = 'standard' }: CollectionCardProps) {
  return (
    <CardActionArea component={Link} href={href} sx={{ height: '100%', borderRadius: 3, p: variant === 'compact' ? 0 : 1 }}>
      <Stack spacing={2}>
        <MediaFrame src={image} alt="" variant={variant === 'compact' ? 'wide' : 'standard'} />
        <CardContent sx={{ pt: 0 }}>
          <Stack spacing={1}>
            {label && <Tag label={label} variant="secondary" />}
            <DesignText variant="title">{title}</DesignText>
            <DesignText color="text.secondary" variant="body">{description}</DesignText>
          </Stack>
        </CardContent>
      </Stack>
    </CardActionArea>
  );
}
