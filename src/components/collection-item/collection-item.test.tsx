import React from 'react';
import { render } from '@testing-library/react';
import { CollectionItem } from './collection-item.component';

test('renders learn react link', () => {
  const { getByText } = render(<CollectionItem />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
