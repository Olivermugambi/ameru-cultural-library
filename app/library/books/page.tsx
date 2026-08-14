"use client";

import { useState, useMemo } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import BookCard from "@/components/books/BookCard";
import FilterPanel from "@/components/books/FilterPanel";
import { AppShell } from '@/components/templates/AppShell';

const mockBooks = [
  { id: 1, title: "MERU ORIGINS, CUSTOMS, CULTURE AND TRADITIONS: MERU ORIGINS AND TRADITIONS", author: "TARCISIO F. B. GICHUNGE", category: "History", cover: "/images/meru-culture.jpg", url: "https://read.amazon.com/sample/B079P757CL?clientId=share" },
  { id: 2, title: "EPOCHS OF AMERU IN HISTORY EXPOUNDED: EPOCHS OF AMERU HISTORY", author: "TARCISIO F. B. GICHUNGE", category: "History", cover: "/images/epochs.jpg", url: "https://read.amazon.com/sample/B096PRT2JT?clientId=share" },
  { id: 3, title: "JULIUS BAARIU M'ITOBI AN ICON OF TRUST AND INTEGRITY IN MERU KENYA: AN ICON OF TRUST IN MERU", author: "TARCISIO F. B. GICHUNGE", category: "History", cover: "/images/julius.jpg", url: "https://read.amazon.com/sample/B0DDKDNTSY?clientId=share" },
  { id: 4, title: "HISTORY OF KENYA BEFORE AND AFTER COLONIZATION: HISTORY OF KENYA", author: "TARCISIO F. B. GICHUNGE", category: "History", cover: "/images/history-kenya.jpg", url: "https://read.amazon.com/sample/B09DXB4YXW?clientId=share" },
];

export default function BooksPage() {
  const [filters, setFilters] = useState({ search: "", author: "", category: "" });
  const authors = [...new Set(mockBooks.map((b) => b.author))];
  const categories = [...new Set(mockBooks.map((b) => b.category))];
  const filteredBooks = useMemo(() => mockBooks.filter((b) =>
    (!filters.search || b.title.toLowerCase().includes(filters.search.toLowerCase())) &&
    (!filters.author || b.author === filters.author) &&
    (!filters.category || b.category === filters.category)
  ), [filters]);

  return (
    <AppShell>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', color: 'text.primary', p: 3 }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 3 }}>
            <FilterPanel filters={filters} setFilters={setFilters} authors={authors} categories={categories} />
          </Grid>
          <Grid size={{ xs: 12, md: 9 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3, gap: 2 }}>
              <Typography variant="h4" fontWeight="bold">Library Books</Typography>
              <TextField
                size="small"
                variant="outlined"
                placeholder="Search the archive..."
                value={filters.search}
                onChange={(e) => setFilters((prev) => ({ ...prev, search: e.target.value }))}
                InputProps={{ endAdornment: <SearchIcon color="action" /> }}
              />
            </Box>

            <Grid container spacing={3}>
              {filteredBooks.map((book) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={book.id}><BookCard book={book} /></Grid>
              ))}
              {filteredBooks.length === 0 && <Grid size={{ xs: 12 }}><Typography variant="body1">No books match your current filters.</Typography></Grid>}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </AppShell>
  );
}
