import React, { FC } from 'react';
import { NavigationBarContainer, LogoContainer, Options, OptionLink } from './navigation-bar.styles';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { CartIcon } from 'components/cart-icon/cart-icon.component';
import { CartDropdown } from 'components/cart-dropdown/cart-dropdown.component';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from 'core/state/user/user.selectors';
import { selectCartHidden } from 'core/state/cart/cart.selectors';
import { signOutStart } from 'core/state/user/user.actions';

export const NavigationBar: FC = () => {
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);
  const dispatch = useDispatch();
  return (
    <NavigationBarContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <Options>
        <OptionLink to='/shop'>
          SHOP
        </OptionLink>
        <OptionLink to='/contact'>
          CONTACT
        </OptionLink>
        {
          currentUser
            ? <OptionLink as="div" onClick={() => dispatch(signOutStart())}>SIGN OUT</OptionLink>
            : <OptionLink to='/signin'>SIGN IN</OptionLink>
        }
        <CartIcon />
      </Options>
      {hidden ? <CartDropdown /> : null}
    </NavigationBarContainer>
  );
};
