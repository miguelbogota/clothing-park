import React from 'react';
import { render } from '@testing-library/react';
import { Shop } from './shop.component';

test('renders learn react link', () => {
  const { getByText } = render(<Shop />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
