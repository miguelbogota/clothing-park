import React, { FC } from 'react';
import './collection-item.styles.scss';
import { ShopItem } from 'core/models/item.model';

export const CollectionItem: FC<ShopItem> = ({ name = '', imageUrl = '', price = 0 }) => {
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  );
};
