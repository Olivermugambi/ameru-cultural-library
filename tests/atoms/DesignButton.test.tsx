import { render, screen } from '@testing-library/react';
import { DesignButton } from '@/components/atoms/DesignButton';

describe('DesignButton', () => {
  it.each(['primary', 'secondary', 'tertiary', 'outlined', 'text', 'inverse'] as const)('renders the %s variant', (variant) => {
    render(<DesignButton variant={variant}>Explore</DesignButton>);
    expect(screen.getByRole('button', { name: 'Explore' })).toBeInTheDocument();
  });
});
