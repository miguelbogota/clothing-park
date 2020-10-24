import React from 'react';
import { render } from '@testing-library/react';
import { UIButton } from './ui-button.component';

test('renders learn react link', () => {
  const { getByText } = render(<UIButton />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
