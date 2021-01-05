import React from 'react';
import { render } from '@testing-library/react';
import { NotFoundPage } from './not-found.component';

test('renders learn react link', () => {
  const { getByText } = render(<NotFoundPage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
