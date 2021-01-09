import React, { FC } from 'react';
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
  CartDropdownButton,
} from './cart-dropdown.styles';
import { CartItemMemo } from 'components/cart-item/cart-item.component';
import { useDispatch, useSelector } from 'react-redux';
import { ShopItem } from 'core/models/item.model';
import { selectCartItems } from 'core/state/cart/cart.selectors';
import { useHistory } from 'react-router-dom';
import { toggleCartHidden } from 'core/state/cart/cart.actions';

export const CartDropdown: FC = () => {
  const cartItems = useSelector(selectCartItems);
  const history = useHistory();
  const dispatch = useDispatch();

  /** Function send the user to the checkout and closes the dropdown menu. */
  const goToCheckout = (): void => {
    history.push('/checkout');
    dispatch(toggleCartHidden());
  };

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {
          cartItems.length
            ? cartItems.map((cartItem: ShopItem) => <CartItemMemo key={cartItem.id} item={cartItem} />)
            : (<EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>)
        }
      </CartItemsContainer>
      <CartDropdownButton onClick={goToCheckout}>Go TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
  );
};
