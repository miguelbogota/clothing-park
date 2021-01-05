import React from 'react';
import { render } from '@testing-library/react';
import { CheckoutItem } from './checkout-item.component';

test('renders learn react link', () => {
  const { getByText } = render(<CheckoutItem />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
