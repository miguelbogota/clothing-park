import { UIButton } from 'components/ui-button/ui-button.component';
import React, { FC } from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';

export const StripeCheckoutButton: FC<{ price: number; }> = ({ price }) => {
  const priceForStripe = price * 100;
  // eslint-disable-next-line max-len
  const publishableKey = 'pk_test_51I7SKtGKJNEOu97X3g5x1qWJa5Wj01YZjo03iexFv4QZV7PuflYXwc5LfBzgL8Tw0vQksrECa6JGaYkI5m9avcuW00yNUvjhGG';

  const onToken = (token: Token) => {
    // eslint-disable-next-line no-console
    console.log('Information from Stripe.js', token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      name='Clothing Park Ltd.'
      billingAddress
      shippingAddress
      image='https://raw.githubusercontent.com/miguelbogota/clothing-park/139398d5e4733dbcfe204288552c0c398e07eada/src/assets/images/logo.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    >
      <UIButton>Pay Now</UIButton>
    </StripeCheckout>
  );
};
