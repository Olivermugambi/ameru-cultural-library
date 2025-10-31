import React from 'react';
import { useTheme } from '@mui/material/styles';

export default function Mugumo({ size = 120, opacity = 0.1 }: { size?: number; opacity?: number }) {
  const theme = useTheme();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <circle cx="100" cy="100" r="90" stroke={theme.palette.primary.main} strokeWidth="3" fill="none" />
      <path
        d="M100 180 C70 140, 60 100, 100 60 C140 100, 130 140, 100 180Z"
        stroke={theme.palette.secondary.main}
        strokeWidth="2"
        fill="none"
      />
      <circle cx="100" cy="60" r="4" fill={theme.palette.secondary.main} />
    </svg>
  );
}
