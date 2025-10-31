import React from 'react';
import { useTheme } from '@mui/material/styles';

export default function Calabash({ size = 100 }: { size?: number }) {
  const theme = useTheme();
  return (
    <svg width={size} height={size} viewBox="0 0 200 200">
      <path
        d="M100 180 C50 160, 60 80, 100 60 C140 80, 150 160, 100 180Z"
        stroke={theme.palette.primary.main}
        strokeWidth="3"
        fill="none"
      />
      <circle cx="100" cy="60" r="8" fill={theme.palette.secondary.main} />
    </svg>
  );
}
