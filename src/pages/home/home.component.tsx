import React, { FC, useState } from 'react';
import './home.styles.scss';
import { SHOP_DATA } from 'assets/shop-data';
import { CollectionPreview } from 'components/collection-preview/collection-preview.component';

export const Home: FC = () => {
  const [collections] = useState(SHOP_DATA);
  return (
    <div className='home-page'>
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
};
