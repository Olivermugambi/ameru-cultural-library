import type { Metadata } from 'next';
import './globals.css';
import { inter, playfairDisplay } from '@/design-system/fonts';
import { AppProviders } from '@/components/providers/AppProviders';

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
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
