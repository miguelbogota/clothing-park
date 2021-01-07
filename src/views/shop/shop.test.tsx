import React from 'react';
import { render } from '@testing-library/react';
import { ShopPage } from './shop.component';

test('renders learn react link', () => {
  const { getByText } = render(<ShopPage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
