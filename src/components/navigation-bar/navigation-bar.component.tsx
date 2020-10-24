import React, { FC } from 'react';
import './navigation-bar.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/images/logo.svg';

export const NavigationBar: FC = () => {
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
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      </div>
    </nav>
  );
};
