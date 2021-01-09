import React, { FC } from 'react';
import {
  CheckoutHeaderContainer,
  CheckoutPageContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from './checkout.styles';
import { selectCartItems, selectCartTotal } from 'core/state/cart/cart.selectors';
import { useDispatch, useSelector } from 'react-redux';
import { CheckoutItem } from 'components/checkout-item/checkout-item.component';
import { UIButton } from 'components/ui-button/ui-button.component';
import { useHistory } from 'react-router-dom';
import { clearCart } from 'core/state/cart/cart.actions';

export const CheckoutPage: FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const history = useHistory();

  const handlePay = () => {
    alert('Your paid your stuff, now you can leave! :v');
    dispatch(clearCart());
    history.push('/shop');
  };

  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>Product</HeaderBlockContainer>
        <HeaderBlockContainer>Description</HeaderBlockContainer>
        <HeaderBlockContainer>Quantity</HeaderBlockContainer>
        <HeaderBlockContainer>Price</HeaderBlockContainer>
        <HeaderBlockContainer>Remove</HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} item={cartItem} />)}
      <TotalContainer>
        <span>TOTAL: ${cartTotal}</span>
      </TotalContainer>
      <WarningContainer>
        *Payments are currently not supported*
        <br />
        😊
      </WarningContainer>
      <UIButton onClick={handlePay}>Pay Now</UIButton>
    </CheckoutPageContainer>
  );
};

export default CheckoutPage;
