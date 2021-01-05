import React, { FC } from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from 'assets/images/shopping-bag.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from 'state/cart/cart.actions';
import { ReduxReducer } from 'core/models/state-actions/state.model';

export const CartIcon: FC = () => {
  const { itemCount } = useSelector(({ cart: { cartItems }}: ReduxReducer) => ({
    itemCount: cartItems.reduce((acc, item) => acc + (item.quantity ? item.quantity : 0), 0)
  }));
  const dispatch = useDispatch();
  return (
    <div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};
