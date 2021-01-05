import React from 'react';
import { render } from '@testing-library/react';
import { CollectionOverview } from './collection-overview.component';

test('renders learn react link', () => {
  const { getByText } = render(<CollectionOverview />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
