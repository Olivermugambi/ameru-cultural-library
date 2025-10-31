import React from 'react';
import { useTheme } from '@mui/material/styles';

export default function Horizon({ width = 600, height = 100 }: { width?: number; height?: number }) {
  const theme = useTheme();
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <path
        d={`M0 ${height} Q ${width/4} ${height/2}, ${width/2} ${height-20} T ${width} ${height}`}
        fill={theme.palette.secondary.main}
        opacity={0.3}
      />
    </svg>
  );
}
