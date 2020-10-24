import React from 'react';
import { render } from '@testing-library/react';
import { FormInput } from './form-input.component';

test('renders learn react link', () => {
  const { getByText } = render(<FormInput />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
