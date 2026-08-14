import { render, screen } from '@testing-library/react';
import { BarazaInvitation } from '@/components/organisms/BarazaInvitation';

describe('BarazaInvitation', () => {
  it('presents Baraza la Ontologia as a distinct intellectual destination', () => {
    render(
      <BarazaInvitation
        title="Cultural memory becomes philosophical inquiry"
        description="A space for Ameru and African philosophical inquiry."
        href="/baraza"
      />,
    );

    expect(screen.getByText('Baraza la Ontologia')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Enter the Baraza' })).toHaveAttribute('href', '/baraza');
  });
});
