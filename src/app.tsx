import React, { Dispatch, FC, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { NavigationBar } from 'components/navigation-bar/navigation-bar.component';
import { Home } from 'views/home/home.component';
import { Shop } from 'views/shop/shop.component';
import { Authentication } from 'views/authentication/authentication.component';
import { NotFound } from 'views/not-found/not-found.component';
import { auth, createUserProfileDocument } from 'core/services/firebase/firebase.service';
import { ShopUser } from 'core/models/user.model';
import { setCurrentUser } from 'core/state/user/user.actions';
import { UserActions, UserState } from 'core/models/state-actions/user-state.model';
import { ReduxReducer } from 'core/models/state-actions/state.model';

const unHandled = () => console.error('Not handled');

interface ConnectedDispatch {
  setCurrentUser: (user: UserState) => void;
}

interface AppProps extends ConnectedDispatch {
  currentUser: UserState;
}

const AppBase: FC<AppProps> = ({ currentUser = null, setCurrentUser = unHandled }) => {

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user, {});
        userRef?.onSnapshot((snapshot) => {
          setCurrentUser({ current: { uid: snapshot.id, ...snapshot.data() as ShopUser } });
        });
      }
      else { setCurrentUser({ current: null }); }
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


const mapStateToProps = ({ user: { current } }: ReduxReducer) => ({ currentUser: current } as unknown as AppProps);

const mapDispatchToProps = (dispatch: Dispatch<UserActions>): ConnectedDispatch => {
  return ({ setCurrentUser: (user: UserState) => dispatch(setCurrentUser(user)) });
};
export const App: FC = connect(mapStateToProps, mapDispatchToProps)(AppBase);
