import React, { FC } from 'react';
import {
  CheckoutItemContainer,
  ImageContainer,
  QuantityContainer,
  RemoveButtonContainer,
  TextContainer,
} from './checkout-item.styles';
import { ShopItem } from 'core/models/item.model';
import { useDispatch } from 'react-redux';
import { addItem, clearItemFromCart, removeItem } from 'core/state/cart/cart.actions';

export const CheckoutItem: FC<{ item: ShopItem; }> = ({ item }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = item;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => dispatch(removeItem(item))}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => dispatch(addItem(item))}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>${price}</TextContainer>
      <RemoveButtonContainer onClick={() => dispatch(clearItemFromCart(item))}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};
