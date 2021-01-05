import React from 'react';
import { render } from '@testing-library/react';
import { CartItem } from './cart-item.component';

test('renders learn react link', () => {
  const { getByText } = render(<CartItem />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
