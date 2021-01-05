import React, { FC } from 'react';
import './cart-dropdown.styles.scss';
import { UIButton } from 'components/ui-button/ui-button.component';
import { CartItemBase } from 'components/cart-item/cart-item.component';
import { ReduxReducer } from 'core/models/state-actions/state.model';
import { useSelector } from 'react-redux';
import { ShopItem } from 'core/models/item.model';

export const CartDropdown: FC = () => {
  const { cartItems } = useSelector(({ cart: { cartItems }}: ReduxReducer) => ({ cartItems }));
  return (
    <div className='cart-dropdown'>
      <div className="cart-items">
        {cartItems.map((cartItem: ShopItem) => <CartItemBase key={cartItem.id} item={cartItem} />)}
      </div>
      <UIButton>Go TO CHECKOUT</UIButton>
    </div>
  );
};
