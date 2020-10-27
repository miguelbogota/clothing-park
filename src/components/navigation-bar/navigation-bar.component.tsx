import React, { FC } from 'react';
import './navigation-bar.styles.scss';
import { Link } from 'react-router-dom';
import { auth } from 'core/services/firebase/firebase.service';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { connect } from 'react-redux';
import { ReduxReducer } from 'core/models/state.model';
import { AuthUserProps } from 'core/models/props/auth-user';

export const NavigationBarBase: FC<AuthUserProps> = ({ currentUser = null }) => {
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

const mapStateToProps = (state: ReduxReducer) => ({ currentUser: state.user });
export const NavigationBar: FC = connect(mapStateToProps)(NavigationBarBase);