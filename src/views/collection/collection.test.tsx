import React from 'react';
import { render } from '@testing-library/react';
import { CollectionPage } from './collection.component';

test('renders learn react link', () => {
  const { getByText } = render(<CollectionPage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
