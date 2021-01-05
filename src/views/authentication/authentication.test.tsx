import React from 'react';
import { render } from '@testing-library/react';
import { AuthenticationPage } from './authentication.component';

test('renders learn react link', () => {
  const { getByText } = render(<AuthenticationPage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
