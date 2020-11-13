import React from 'react';
import { render } from '@testing-library/react';
import { CartDropdown } from './cart-dropdown.component';

test('renders learn react link', () => {
  const { getByText } = render(<CartDropdown />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
