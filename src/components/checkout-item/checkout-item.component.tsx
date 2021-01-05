import React, { FC } from 'react';
import './checkout-item.styles.scss';
import { ShopItem } from 'core/models/item.model';
import { useDispatch } from 'react-redux';
import { addItem, clearItemFromCart, removeItem } from 'core/state/cart/cart.actions';

export const CheckoutItem: FC<{ item: ShopItem; }> = ({ item }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = item;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => dispatch(removeItem(item))}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => dispatch(addItem(item))}>
          &#10095;
        </div>
      </span>
      <span className='price'>${price}</span>
      <div className='remove-button' onClick={() => dispatch(clearItemFromCart(item))}>&#10005;</div>
    </div>
  );
};
