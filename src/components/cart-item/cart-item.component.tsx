import { ShopItem } from 'core/models/item.model';
import React, { FC } from 'react';
import './cart-item.styles.scss';

export const CartItem: FC<{ item: ShopItem; }> = ({ item: { name, imageUrl, price, quantity } }) => {
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt="item"/>
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} x {price}</span>
      </div>
    </div>
  );
};
