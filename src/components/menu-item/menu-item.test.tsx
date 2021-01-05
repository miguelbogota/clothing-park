import React from 'react';
import { render } from '@testing-library/react';
import { MenuItem } from './menu-item.component';

test('renders learn react link', () => {
  const { getByText } = render(<MenuItem />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
