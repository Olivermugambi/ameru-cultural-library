"use client";

import { useState, useMemo } from "react";
import { AppBar, Box, Grid, Link, TextField, ThemeProvider, Toolbar, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import BookCard from "@/components/books/BookCard";
import FilterPanel from "@/components/books/FilterPanel"; // Ensure this path is correct
import { ameruTheme } from "@/theme/ameruTheme";

// TEMP: mock data — replace with fetch from your backend later
const mockBooks = [
  { 
    id: 1, 
    title: "MERU ORIGINS, CUSTOMS, CULTURE AND TRADITIONS: MERU ORIGINS AND TRADITIONS", 
    author: "TARCISIO F. B. GICHUNGE", 
    category: "History", 
    cover: "/images/meru-culture.jpg" },
  { 
    id: 2, 
    title: "EPOCHS OF AMERU IN HISTORY EXPOUNDED: EPOCHS OF AMERU HISTORY", 
    author: "TARCISIO F. B. GICHUNGE", 
    category: "History", 
    cover: "/images/epochs.jpg" 
  },
  { 
    id: 3, 
    title: "JULIUS BAARIU M'ITOBI AN ICON OF TRUST AND INTEGRITY IN MERU KENYA: AN ICON OF TRUST IN MERU", 
    author: "TARCISIO F. B. GICHUNGE", 
    category: "History", 
    cover: "/images/julius.jpg" },
  { 
    id: 4, 
    title: "HISTORY OF KENYA BEFORE AND AFTER COLONIZATION: HISTORY OF KENYA", 
    author: "TARCISIO F. B. GICHUNGE", 
    category: "History", 
    cover: "/images/history-kenya.jpg" },
];

export default function BooksPage() {
  const [filters, setFilters] = useState({
    search: "",
    author: "",
    category: "",
  });

  const authors = [...new Set(mockBooks.map((b) => b.author))];
  const categories = [...new Set(mockBooks.map((b) => b.category))];

  // filtering logic
  const filteredBooks = useMemo(() => {
    return mockBooks.filter((b) => {
      return (
        (!filters.search ||
          b.title.toLowerCase().includes(filters.search.toLowerCase())) &&
        (!filters.author || b.author === filters.author) &&
        (!filters.category || b.category === filters.category)
      );
    });
  }, [filters]);

  return (
    <ThemeProvider theme={ameruTheme}>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', color: 'text.primary' }}>
        
        {/* ────────── NAVIGATION BAR ────────── */}
        <AppBar position="static" elevation={0}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700, color: 'primary.main' }}>
              <Link href="/" color="inherit" underline="none">
                Ameru Cultural Library
              </Link>
            </Typography>
            {/* Search field moved out of the main logic structure for clarity, 
                and is now only updating the `search` filter in the state. */}
            <TextField
              size="small"
              variant="outlined"
              placeholder="Search the archive..."
              value={filters.search}
              onChange={(e) => setFilters((prev) => ({ ...prev, search: e.target.value }))}
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

        {/* ────────── MAIN CONTENT GRID ────────── */}
        {/* We use container and item to set up the two-column layout */}
        <Grid container spacing={3} sx={{ p: 3 }}>
          
          {/* Left Column: Filters (3/12 of the space on medium/large screens) */}
          <Grid size={{ xs: 12, md: 3}}>
            <FilterPanel
              filters={filters}
              setFilters={setFilters}
              authors={authors}
              categories={categories}
            />
          </Grid>

          {/* Right Column: Books Grid (9/12 of the space on medium/large screens) */}
          <Grid size={{ xs: 12, md: 9}}>
            <Typography variant="h4" fontWeight="bold" mb={3}>
              Library
            </Typography>

            <Grid container spacing={3}>
              {filteredBooks.map((book) => (
                // Use Grid item sizing for the book cards within the 9-column container
                <Grid size={{ xs: 12, sm: 6, md: 4}} key={book.id}> 
                  <BookCard book={book} />
                </Grid>
              ))}
              {filteredBooks.length === 0 && (
                <Grid size={{ xs: 12}}>
                  <Typography variant="body1">No books match your current filters.</Typography>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>

      </Box>
    </ThemeProvider>
  );
}