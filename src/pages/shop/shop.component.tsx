import React, { FC, useState } from 'react';
import './shop.styles.scss';
import { SHOP_DATA } from 'assets/data/shop-data';
import { CollectionPreview } from 'components/collection-preview/collection-preview.component';

export const Shop: FC = () => {
  const [collections] = useState(SHOP_DATA);
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
};
