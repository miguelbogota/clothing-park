import React from 'react';
import { render } from '@testing-library/react';
import { Checkout } from './checkout.component';

test('renders learn react link', () => {
  const { getByText } = render(<Checkout />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
