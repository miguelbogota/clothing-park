import React, { FC } from 'react';
import './collection-overview.styles.scss';
import { useSelector } from 'react-redux';
import { selectShopCollections } from 'core/state/shop/shop.selectors';
import { CollectionPreview } from 'components/collection-preview/collection-preview.component';

export const CollectionOverview: FC = () => {
  const collections = useSelector(selectShopCollections);
  return (
    <div className='collection-overview'>
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} id={id} {...collectionProps} />
      ))}
    </div>
  );
};
