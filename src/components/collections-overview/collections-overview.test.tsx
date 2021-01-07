import React from 'react';
import { render } from '@testing-library/react';
import { CollectionsOverview } from './collections-overview.component';

test('renders learn react link', () => {
  const { getByText } = render(<CollectionsOverview />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
