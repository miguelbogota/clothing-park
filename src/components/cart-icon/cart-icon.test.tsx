import React from 'react';
import { render } from '@testing-library/react';
import { CartIcon } from './cart-icon.component';

test('renders learn react link', () => {
  const { getByText } = render(<CartIcon />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
