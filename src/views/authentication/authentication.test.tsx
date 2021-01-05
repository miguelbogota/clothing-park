import React from 'react';
import { render } from '@testing-library/react';
import { Authentication } from './authentication.component';

test('renders learn react link', () => {
  const { getByText } = render(<Authentication />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
