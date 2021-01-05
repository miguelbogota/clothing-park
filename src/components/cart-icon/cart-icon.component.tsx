import React, { FC } from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from 'assets/images/shopping-bag.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from 'core/state/cart/cart.actions';
import { selectCartCount } from 'core/state/cart/cart.selectors';

export const CartIcon: FC = () => {
  const itemCount = useSelector(selectCartCount);
  const dispatch = useDispatch();
  return (
    <div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};
