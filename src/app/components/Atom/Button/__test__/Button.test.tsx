import { render, screen } from '@testing-library/react';

import { Button } from '..';

describe('HomePage', () => {
  it('shoud render a correctly', () => {
    render(<Button>My Button</Button>);
    const buttonEl = screen.getByText(/My Button/i);
    expect(buttonEl).toBeInTheDocument();
  });
});
