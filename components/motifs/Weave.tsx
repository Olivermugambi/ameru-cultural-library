import React from 'react';
import { useTheme } from '@mui/material/styles';

export default function Weave({ size = 160 }: { size?: number }) {
  const theme = useTheme();
  const c = theme.palette.divider;

  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      {[0, 20, 40, 60, 80].map((x) => (
        <line key={x} x1={x} y1="0" x2={100 - x} y2="100" stroke={c} strokeWidth="1" />
      ))}
      {[0, 20, 40, 60, 80].map((y) => (
        <line key={y} x1="0" y1={y} x2="100" y2={100 - y} stroke={c} strokeWidth="1" />
      ))}
    </svg>
  );
}
