import React from 'react';
import { useTheme } from '@mui/material/styles';

export default function Beads({ length = 800, color }: { length?: number; color?: string }) {
  const theme = useTheme();
  const beadColor = color || theme.palette.secondary.main;

  const beads = Array.from({ length: Math.floor(length / 40) }, (_, i) => (
    <circle key={i} cx={i * 40 + 10} cy="10" r="5" fill={beadColor} />
  ));

  return (
    <svg width={length} height="20" viewBox={`0 0 ${length} 20`} xmlns="http://www.w3.org/2000/svg">
      {beads}
    </svg>
  );
}
