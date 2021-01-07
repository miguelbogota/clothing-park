import { ShopItem } from 'core/models/item.model';
import React, { FC } from 'react';
import { CartItemContainer, CartItemImage, ItemDetailsContainer } from './cart-item.styles';

export const CartItem: FC<{ item: ShopItem; }> = ({ item: { name, imageUrl, price, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} />
      <ItemDetailsContainer>
        <span>{name}</span>
        <span>{quantity} x {price}</span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};
