import React, { FC } from 'react';
import './navigation-bar.styles.scss';
import { Link } from 'react-router-dom';
import { auth } from 'core/services/firebase/firebase.service';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { CartIcon } from 'components/cart-icon/cart-icon.component';
import { CartDropdown } from 'components/cart-dropdown/cart-dropdown.component';
import { useSelector } from 'react-redux';
import { ReduxReducer } from 'core/models/state-actions/state.model';

export const NavigationBar: FC = () => {
  const { currentUser, hidden } = useSelector(
    ({ user: { current }, cart: { hidden } }: ReduxReducer) => ({ currentUser: current, hidden }),
  );
  return (
    <nav className='navigation-bar'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className="options">
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {
          currentUser
            ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
            : <Link className='option' to='/signin'>SIGN IN</Link>
        }
        <CartIcon />
      </div>
      {hidden ? <CartDropdown /> : null}
    </nav>
  );
};
