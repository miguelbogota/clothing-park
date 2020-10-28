import React, { Dispatch, FC, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { NavigationBar } from 'components/navigation-bar/navigation-bar.component';
import { Home } from 'pages/home/home.component';
import { Shop } from 'pages/shop/shop.component';
import { Authentication } from 'pages/authentication/authentication.component';
import { NotFound } from 'pages/not-found/not-found.component';
import { auth, createUserProfileDocument } from 'core/services/firebase/firebase.service';
import { ShopUser, ShopUserNull } from 'core/models/user.model';
import { setCurrentUser } from 'state/user/user.actions';
import { ReduxReducer } from 'core/models/state.model';
import { UserActions } from 'core/models/state-actions/user-state.model';

interface ConnectedDispatch {
  setCurrentUser: (user: ShopUserNull) => void;
}

interface AppProps extends ConnectedDispatch {
  currentUser: ShopUserNull;
}

const AppBase: FC<AppProps> = ({ currentUser = null, setCurrentUser = () => console.error('Error!') }) => {

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user, {});
        userRef?.onSnapshot((snapshot) => {
          setCurrentUser({ uid: snapshot.id, ...snapshot.data() as ShopUser });
        });
      }
      else { setCurrentUser(null); }
    });
    return () => unsubscribeFromAuth();
  }, [setCurrentUser]);

  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} exact />
        <Route path="/signin" exact render={() => currentUser ? (<Redirect to='/' />) : (<Authentication />)} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};


const mapStateToProps = (state: ReduxReducer) => ({ currentUser: state.user });

const mapDispatchToProps = (dispatch: Dispatch<UserActions<ShopUserNull>>): ConnectedDispatch => {
  return ({ setCurrentUser: (user: ShopUserNull) => dispatch(setCurrentUser(user)) });
};
export const App: FC = connect(mapStateToProps, mapDispatchToProps)(AppBase);
