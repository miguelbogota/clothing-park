import React, { FC } from 'react';
import './shop.styles.scss';
import { CollectionOverview } from 'components/collection-overview/collection-overview.component';

export const Shop: FC = () => {
  return (
    <div className='shop-page'>
      <CollectionOverview />
    </div>
  );
};
