import React, { FC } from 'react';
import { CartContainer, ItemCountContainer, ShoppingIcon } from './cart-icon.styles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from 'core/state/cart/cart.actions';
import { selectCartCount } from 'core/state/cart/cart.selectors';

export const CartIcon: FC = () => {
  const itemCount = useSelector(selectCartCount);
  const dispatch = useDispatch();
  return (
    <CartContainer onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
  );
};
