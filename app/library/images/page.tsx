'use client';
import { Box, Typography, AppBar, Toolbar, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeProvider} from '@mui/material/styles';
import { ameruTheme } from '@/theme/ameruTheme';
import Link from 'next/link';

export default function LibraryHome() {
  return (
    <ThemeProvider theme={ameruTheme}>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', color: 'text.primary' }}>
        {/* ────────── NAVIGATION BAR ────────── */}
        <AppBar position="static" elevation={0}>
          <Toolbar>
            <Typography variant="h6"  sx={{ flexGrow: 1, fontWeight: 700, color: 'primary.main' }}>
              <Link href="/">
                Ameru Cultural Library
              </Link>
            </Typography>            
            <TextField
              size="small"
              variant="outlined"
              placeholder="Search the archive..."
              InputProps={{
                endAdornment: <SearchIcon color="action" />,
              }}
              sx={{
                bgcolor: 'white',
                borderRadius: 2,
                width: 250,
              }}
            />
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
    );
}
        