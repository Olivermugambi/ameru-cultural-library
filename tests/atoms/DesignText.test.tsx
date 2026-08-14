import { render, screen } from '@testing-library/react';
import { DesignText } from '@/components/atoms/DesignText';

describe('DesignText', () => {
  it('maps the display variant to the heading hierarchy', () => {
    render(<DesignText variant="display">Ameru Library</DesignText>);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Ameru Library');
  });

  it('renders body text by default', () => {
    render(<DesignText>Library description</DesignText>);
    expect(screen.getByText('Library description')).toBeInTheDocument();
  });
});
