import { Card, CardContent, Typography, CardMedia } from "@mui/material";

export default function BookCard({ book }: { book: any }) {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {book.cover && (
        <CardMedia
          component="img"
          height="200"
          image={book.cover}
          alt={book.title}
        />
      )}

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight="bold">
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {book.author}
        </Typography>
      </CardContent>
    </Card>
  );
}
