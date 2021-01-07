import React, { FC } from 'react';
import {
  CheckoutHeaderContainer,
  CheckoutPageContainer,
  HeaderBlockContainer,
  TotalContainer,
} from './checkout.styles';
import { selectCartItems, selectCartTotal } from 'core/state/cart/cart.selectors';
import { useSelector } from 'react-redux';
import { CheckoutItem } from 'components/checkout-item/checkout-item.component';

export const CheckoutPage: FC = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} item={cartItem} />)}
      <TotalContainer>
        <span>TOTAL: ${cartTotal}</span>
      </TotalContainer>
    </CheckoutPageContainer>
  );
};
