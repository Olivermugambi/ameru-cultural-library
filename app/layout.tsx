import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ameruTheme } from '@/theme/ameruTheme';
import { inter, playfairDisplay } from '@/design-system/fonts';
import { AppShell } from '@/components/templates/AppShell';

export const metadata: Metadata = {
  title: 'Ameru Cultural Library',
  description: 'A living digital library and cultural home for Ameru knowledge, heritage, and thought.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfairDisplay.variable}`}>
        <ThemeProvider theme={ameruTheme}>
          <CssBaseline />
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
