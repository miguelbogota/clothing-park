import React from 'react';
import { render } from '@testing-library/react';
import { NotFound } from './not-found.component';

test('renders learn react link', () => {
  const { getByText } = render(<NotFound />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
