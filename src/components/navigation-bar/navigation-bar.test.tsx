import React from 'react';
import { render } from '@testing-library/react';
import { NavigationBarBase } from './navigation-bar.component';

test('renders learn react link', () => {
  const { getByText } = render(<NavigationBarBase />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
