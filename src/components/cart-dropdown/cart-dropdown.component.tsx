import React, { FC } from 'react';
import './cart-dropdown.styles.scss';
import { UIButton } from 'components/ui-button/ui-button.component';
import { CartItemBase } from 'components/cart-item/cart-item.component';
import { useSelector } from 'react-redux';
import { ShopItem } from 'core/models/item.model';
import { selectCartItems } from 'core/state/cart/cart.selectors';

export const CartDropdown: FC = () => {
  const cartItems = useSelector(selectCartItems);
  return (
    <div className='cart-dropdown'>
      <div className="cart-items">
        {cartItems.map((cartItem: ShopItem) => <CartItemBase key={cartItem.id} item={cartItem} />)}
      </div>
      <UIButton>Go TO CHECKOUT</UIButton>
    </div>
  );
};
