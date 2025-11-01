'use client';
import { Box, Typography, Grid, Button, AppBar, Toolbar, TextField, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MovieIcon from '@mui/icons-material/Movie';
import Beads from '@/components/motifs/Beads';
import { ThemeProvider} from '@mui/material/styles';
import { ameruTheme } from '@/theme/ameruTheme';
import Horizon from '@/components/motifs/Horizon';
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

        {/* ────────── HERO STRIP ────────── */}
        <Box sx={{ position: 'relative', overflow: 'hidden', py: 10, textAlign: 'center' }}>
          
          <Typography variant="h2" sx={{ mb: 2, position: 'relative' }}>
            Explore Our Living Heritage
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
            Discover stories, songs, and wisdom passed down through generations of the Ameru people.
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button variant="contained" color="primary" startIcon={<LibraryBooksIcon />} href="/library/books">
              Books
            </Button>
            <Button variant="contained" color="secondary" startIcon={<MusicNoteIcon />} href="/library/audios">
              Audio
            </Button>
            <Button variant="outlined" color="primary" startIcon={<MovieIcon />} href="/library/videos">
              Video
            </Button>
          </Box>

          <Box sx={{ mt: 6 }}>
            <Beads length={400} />
          </Box>
        </Box>

        {/* ────────── FEATURED COLLECTIONS ────────── */}
        <Container sx={{ py: 6 }}>
          <Typography variant="h4" sx={{ mb: 4, fontFamily: 'Playfair Display, serif' }}>
            Featured Collections
          </Typography>
          <Grid container spacing={3}>
            {[
              { title: 'Proverbs of the Highlands', type: 'Book' },
              { title: 'Songs of the Mugumo', type: 'Audio' },
              { title: 'Voices of Elders', type: 'Video' },
            ].map((item) => (
              <Grid size={{ xs: 12, md: 4}} key={item.title}>
                <Box
                  sx={{
                    bgcolor: 'background.paper',
                    borderRadius: 3,
                    p: 3,
                    boxShadow: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item.type} Collection
                  </Typography>
                  <Button variant="text" sx={{ mt: 2 }} color="primary">
                    View Collection →
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* ────────── CATEGORY GRID ────────── */}
        <Container sx={{ py: 6 }}>
          <Typography variant="h4" sx={{ mb: 4, fontFamily: 'Playfair Display, serif' }}>
            Browse Categories
          </Typography>
          <Grid container spacing={2}>
            {['Folklore', 'Music', 'Oral History', 'Rituals', 'Crafts', 'Nature Wisdom'].map((cat) => (
              <Grid size={{ xs: 12, sm: 6, md: 4}} key={cat}>
                <Box
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    textAlign: 'center',
                    transition: 'transform 0.2s ease',
                    ':hover': { transform: 'scale(1.03)', boxShadow: 3 },
                  }}
                >
                  <Typography variant="h6" sx={{ color: 'primary.main' }}>
                    {cat}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* ────────── FOOTER ────────── */}
        <Box sx={{ mt: 8, position: 'relative', textAlign: 'center', py: 6, bgcolor: 'background.paper' }}>
          <Horizon width={800} height={100} />
          <Typography variant="body2" sx={{ mt: 2 }}>
            © {new Date().getFullYear()} Ameru Cultural Library —  Preserving Heritage in the Digital Age.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
