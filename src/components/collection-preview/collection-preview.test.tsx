import React from 'react';
import { render } from '@testing-library/react';
import { CollectionPreview } from './collection-preview.component';

test('renders learn react link', () => {
  const { getByText } = render(<CollectionPreview />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
