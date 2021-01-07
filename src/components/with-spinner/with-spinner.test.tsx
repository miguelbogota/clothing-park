import React from 'react';
import { render } from '@testing-library/react';
import { WithSpinner } from './with-spinner.component';

test('renders learn react link', () => {
  const { getByText } = render(<WithSpinner />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
