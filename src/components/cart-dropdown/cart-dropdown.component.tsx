import React, { FC } from 'react';
import './cart-dropdown.styles.scss';
import { UIButton } from 'components/ui-button/ui-button.component';

export const CartDropdown: FC = () => {
  return (
    <div className='cart-dropdown'>
      <div className="cart-items"></div>
      <UIButton>Go TO CHECKOUT</UIButton>
    </div>
  );
};
