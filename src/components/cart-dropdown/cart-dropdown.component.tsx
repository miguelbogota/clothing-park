import React, { FC } from 'react';
import './cart-dropdown.styles.scss';
import { UIButton } from 'components/ui-button/ui-button.component';
import { CartItem } from 'components/cart-item/cart-item.component';
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
    <div className='cart-dropdown'>
      <div className="cart-items">
        {
          cartItems.length
            ? cartItems.map((cartItem: ShopItem) => <CartItem key={cartItem.id} item={cartItem} />)
            : (<span className="empty-message">Your cart is empty</span>)
        }
      </div>
      <UIButton onClick={goToCheckout}>Go TO CHECKOUT</UIButton>
    </div>
  );
};
