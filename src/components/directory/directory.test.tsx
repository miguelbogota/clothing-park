import React from 'react';
import { render } from '@testing-library/react';
import { Directory } from './directory.component';

test('renders learn react link', () => {
  const { getByText } = render(<Directory />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
