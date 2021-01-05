import { ShopItem } from 'core/models/item.model';
import React, { FC } from 'react';
import './cart-item.styles.scss';

export const CartItemBase: FC<{ item: ShopItem; }> = ({
  item = { name: '', imageUrl: '', price: 0, quantity: 0 },
}) => {
  return (
    <div className='cart-item'>
      <img src={item.imageUrl} alt="item"/>
      <div className='item-details'>
        <span className='name'>{item.name}</span>
        <span className='price'>{item.quantity} x {item.price}</span>
      </div>
    </div>
  );
};
