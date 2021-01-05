import React, { FC } from 'react';
import './collection-preview.styles.scss';
import { ShopCollection } from 'core/models/collection.model';
import { CollectionItem } from 'components/collection-item/collection-item.component';

export const CollectionPreview: FC<ShopCollection> = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='collection-title'>{title.toUpperCase()}</h1>
      <div className='collection-items'>
        {items
          .filter((_, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};
