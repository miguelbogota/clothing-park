import React, { Dispatch, FC } from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from 'assets/images/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from 'state/cart/cart.actions';
import { CartActions } from 'core/models/state-actions/cart-state.model';

const unHandled = () => console.error('Not handled');

interface ConnectedDispatch {
  toggleCartHidden: () => void;
}

const CartIconBase: FC<ConnectedDispatch> = ({ toggleCartHidden = unHandled  }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<CartActions>): ConnectedDispatch => {
  return ({ toggleCartHidden: () => dispatch(toggleCartHidden()) });
};
export const CartIcon: FC = connect(null, mapDispatchToProps)(CartIconBase);
