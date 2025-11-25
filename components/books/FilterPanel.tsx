import { Box, FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material";

export default function FilterPanel({
  filters,
  setFilters,
  authors,
  categories,
}: {
  filters: any;
  setFilters: (f: any) => void;
  authors: string[];
  categories: string[];
}) {
  return (
    <Box sx={{ width: 250, p: 2, borderRight: "1px solid #ddd" }}>
      <TextField
        fullWidth
        label="Search"
        value={filters.search}
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        sx={{ mb: 2 }}
      />

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Author</InputLabel>
        <Select
          value={filters.author}
          label="Author"
          onChange={(e) => setFilters({ ...filters, author: e.target.value })}
        >
          <MenuItem value="">All</MenuItem>
          {authors.map((auth) => (
            <MenuItem key={auth} value={auth}>
              {auth}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Category</InputLabel>
        <Select
          value={filters.category}
          label="Category"
          onChange={(e) =>
            setFilters({ ...filters, category: e.target.value })
          }
        >
          <MenuItem value="">All</MenuItem>
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
