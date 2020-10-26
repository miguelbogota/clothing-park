import React, { FC } from 'react';
import './navigation-bar.styles.scss';
import { Link } from 'react-router-dom';
import { auth } from 'core/services/firebase/firebase.service';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { ShopUser } from 'core/models/user.model';

export const NavigationBar: FC<{ currentUser: ShopUser | null }> = ({ currentUser = null }) => {
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
      </div>
    </nav>
  );
};
