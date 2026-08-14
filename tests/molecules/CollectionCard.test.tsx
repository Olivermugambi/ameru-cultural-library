import { render, screen } from '@testing-library/react';
import { CollectionCard } from '@/components/molecules/CollectionCard';

describe('CollectionCard', () => {
  it('exposes the collection as a navigable link', () => {
    render(
      <CollectionCard
        title="Books & Manuscripts"
        description="Written knowledge"
        image="/images/books.jpg"
        href="/library"
        label="Read"
      />,
    );

    expect(screen.getByRole('link', { name: /Books & Manuscripts/i })).toHaveAttribute('href', '/library');
    expect(screen.getByText('Read')).toBeInTheDocument();
  });
});
