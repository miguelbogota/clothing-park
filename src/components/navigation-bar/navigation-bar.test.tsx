import React from 'react';
import { render } from '@testing-library/react';
import { NavigationBar } from './navigation-bar.component';

test('renders learn react link', () => {
  const { getByText } = render(<NavigationBar />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
