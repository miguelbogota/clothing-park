import React, { FC } from 'react';
import './checkout.styles.scss';
import { selectCartItems, selectCartTotal } from 'core/state/cart/cart.selectors';
import { useSelector } from 'react-redux';
import { CheckoutItem } from 'components/checkout-item/checkout-item.component';

export const Checkout: FC = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <div className='checkout-page'>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} item={cartItem} />)}
      <div className="total">
        <span>TOTAL: ${cartTotal}</span>
      </div>
    </div>
  );
};
