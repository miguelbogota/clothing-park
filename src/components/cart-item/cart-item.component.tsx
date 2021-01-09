import React, { FC, memo } from 'react';
import { ShopItem } from 'core/models/item.model';
import { CartItemContainer, CartItemImage, ItemDetailsContainer } from './cart-item.styles';

const CartItem: FC<{ item: ShopItem; }> = ({ item: { name, imageUrl, price, quantity } }) => {
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

export const CartItemMemo = memo(CartItem);
