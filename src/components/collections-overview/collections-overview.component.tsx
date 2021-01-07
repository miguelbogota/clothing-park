import React, { FC } from 'react';
import { CollectionsOverviewContainer } from './collections-overview.styles';
import { useSelector } from 'react-redux';
import { selectShopCollectionsArray } from 'core/state/shop/shop.selectors';
import { CollectionPreview } from 'components/collection-preview/collection-preview.component';

export const CollectionsOverview: FC = () => {
  const collections = useSelector(selectShopCollectionsArray);
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} id={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
};
