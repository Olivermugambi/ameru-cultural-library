import Link from 'next/link';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

export default function NavBar() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Ameru Cultural Library
        </Typography>
        <Link href="/"><Button color="inherit">Home</Button></Link>
        <Link href="/library"><Button color="inherit">Library</Button></Link>
        <Link href="/about"><Button color="inherit">About</Button></Link>
        <Link href="/contact"><Button color="inherit">Contact</Button></Link>
      </Toolbar>
    </AppBar>
  );
}
