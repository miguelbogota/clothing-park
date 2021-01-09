import React from 'react';
import { render } from '@testing-library/react';
import { CartItemMemo } from './cart-item.component';

test('renders learn react link', () => {
  const { getByText } = render(<CartItemMemo />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
