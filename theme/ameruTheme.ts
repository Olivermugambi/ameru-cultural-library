import { createTheme } from '@mui/material/styles';

export const ameruTheme = createTheme({
  palette: {
    primary: {
      main: '#5B3A29', // deep brown
      contrastText: '#FAF7F1',
    },
    secondary: {
      main: '#C5A572', // warm gold
      contrastText: '#1B120D',
    },
    background: {
      default: '#FAF7F1',
      paper: '#FFFDF8',
    },
    text: {
      primary: '#3C2A1A',
      secondary: '#6A5C4E',
    },
    divider: '#E7D6B5',
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    h1: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 700,
      fontSize: '3rem',
      color: '#5B3A29',
    },
    h2: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 600,
      fontSize: '2.2rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.6rem',
    },
    body1: {
      fontSize: '1.05rem',
      lineHeight: 1.75,
      color: '#3C2A1A',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 20px',
          boxShadow: 'none',
          ':hover': {
            backgroundColor: '#8E5639',
          },
        },
        containedPrimary: {
          backgroundColor: '#5B3A29',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FAF7F1',
          color: '#5B3A29',
        },
      },
    },
  },
});
