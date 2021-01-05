import React from 'react';
import { render } from '@testing-library/react';
import { CheckoutPage } from './checkout.component';

test('renders learn react link', () => {
  const { getByText } = render(<CheckoutPage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
