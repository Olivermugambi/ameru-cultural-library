'use client';
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  AppBar,
  Toolbar,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider} from '@mui/material/styles';
import { ameruTheme } from '@/theme/ameruTheme';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import Mugumo from '@/components/motifs/Mugumo';


export default function LandingPage() {
  return (
    <ThemeProvider theme={ameruTheme}>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        {/* --- Header --- */}
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700, color: 'primary.main' }}>
              Ameru Cultural Library
            </Typography>
            <Button color="primary" variant="outlined" href="/library">
              Enter Library
            </Button>
          </Toolbar>
        </AppBar>

        {/* --- Hero Section --- */}
        <Box
          sx={{
            textAlign: 'center',
            py: { xs: 8, md: 12 },
            background: 'linear-gradient(180deg, #F1E5D1 0%, #F9F5EF 100%)',
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h2" color="primary.main" gutterBottom>
              Preserving the Spirit of Ameru
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={4}>
              Explore the songs, stories, and wisdom of the Ameru people —
              digitized, catalogued, and freely accessible to generations.
            </Typography>
            <Button variant="contained" color="primary" size="large" href="/library">
              Explore the Archive
            </Button>
          </Container>
        </Box>

        {/* --- Categories Section --- */}
        <Container sx={{ py: 8 }}>
          <Typography variant="h4" align="center" gutterBottom color="primary.main">
            Discover Our Collections
          </Typography>
          <Typography align="center" color="text.secondary" mb={6}>
            Books, oral traditions, and multimedia artefacts brought together to tell our story.
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                title: 'Books & Manuscripts',
                icon: <LibraryBooksIcon sx={{ color: 'secondary.main', fontSize: 40 }} />,
                img: '/images/books.jpg',
                desc: 'Digitized texts, historical manuscripts, and written folklore.',
              },
              {
                title: 'Audio Recordings',
                icon: <LibraryMusicIcon sx={{ color: 'secondary.main', fontSize: 40 }} />,
                img: '/images/audio.jpg',
                desc: 'Songs, oral histories, and recorded interviews with elders.',
              },
              {
                title: 'Video Archives',
                icon: <VideoLibraryIcon sx={{ color: 'secondary.main', fontSize: 40 }} />,
                img: '/images/video.jpg',
                desc: 'Documentaries and cultural ceremonies captured in motion.',
              },
            ].map((cat, i) => (
              <Grid size={{ xs: 12, md: 4}} key={i}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'translateY(-5px)' },
                  }}
                >
                  <CardMedia component="img" height="220" image={cat.img} alt={cat.title} />
                  <CardContent>
                    <Typography variant="h6" gutterBottom color="primary.main">
                      {cat.icon}&nbsp;&nbsp;&nbsp;{cat.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {cat.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* --- Featured Artefact Section --- */}
        <Box sx={{ py: 8, bgcolor: '#EDE1D0' }}>
          <Container maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom color="primary.main">
              Featured Artefact
            </Typography>
            <Card
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                mt: 4,
                borderRadius: 3,
                boxShadow: 2,
              }}
            >
              <CardMedia
                component="img"
                image="/images/featured.jpg"
                alt="Featured Artefact"
                sx={{ width: { md: '50%' }, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom color="primary.main">
                  AMERU OF KENYA LIVED IN EGYPT LONG AGO: AMERU LIVED IN EGYPT
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={2}>
                  by TARCISIO F. B. GICHUNGE (Author), Gichunge WA M'Thirua (Introduction) <br></br>
                  When we were small children, a disease known as Corona Virus emerged and shrouded 
                  the whole world from December, 2019. That disease was baptized “Covid-19” 
                  (Corona virus Disease 2019) because it emerged in 2019. That Covid-19 shook 
                  the entire world because it was spread by shaking of hands with those infected. 
                  Thus, we were made to avoid shaking hands with any one; to us it was a disease that 
                  had come to make people look like enemies by avoiding greetings altogether.
                </Typography>
                <Button variant="contained" color="primary" href="https://www.amazon.com/AMERU-KENYA-LIVED-EGYPT-LONG-ebook/dp/B0B56Y8XVC/ref=sr_1_6?s=books&sr=1-6">
                  Read Now
                </Button>
              </CardContent>
            </Card>
          </Container>
        </Box>

        {/* --- Woven pattern at the bottom --- */}
        <Box
          sx={{
            backgroundImage: 'url(/patterns/woven.jpg)',
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat',
            py: 8,
          }}
        >
          <Typography variant="h2" align="center" color="primary.contrastText">
            Voices of Our People
          </Typography>
        </Box>

        {/* --- Footer --- */}
        <Box sx={{ py: 4, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Ameru Cultural Library. Preserving Heritage in the Digital Age.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
