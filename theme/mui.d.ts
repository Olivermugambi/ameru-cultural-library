import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: PaletteColor;
    primaryContainer: PaletteColor;
    secondaryContainer: PaletteColor;
    tertiaryContainer: PaletteColor;
    onPrimaryContainer: PaletteColor;
    onSecondaryContainer: PaletteColor;
    onTertiaryContainer: PaletteColor;
    surfaceVariant: PaletteColor;
    surfaceContainer: PaletteColor;
    surfaceContainerLow: PaletteColor;
    surfaceContainerHigh: PaletteColor;
    inverseSurface: PaletteColor;
    inverseOnSurface: PaletteColor;
  }

  interface PaletteOptions {
    tertiary?: PaletteColorOptions;
    primaryContainer?: PaletteColorOptions;
    secondaryContainer?: PaletteColorOptions;
    tertiaryContainer?: PaletteColorOptions;
    onPrimaryContainer?: PaletteColorOptions;
    onSecondaryContainer?: PaletteColorOptions;
    onTertiaryContainer?: PaletteColorOptions;
    surfaceVariant?: PaletteColorOptions;
    surfaceContainer?: PaletteColorOptions;
    surfaceContainerLow?: PaletteColorOptions;
    surfaceContainerHigh?: PaletteColorOptions;
    inverseSurface?: PaletteColorOptions;
    inverseOnSurface?: PaletteColorOptions;
  }
}
