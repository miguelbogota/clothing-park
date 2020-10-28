import React, { Dispatch, FC, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { NavigationBar } from 'components/navigation-bar/navigation-bar.component';
import { Home } from 'pages/home/home.component';
import { Shop } from 'pages/shop/shop.component';
import { Authentication } from 'pages/authentication/authentication.component';
import { NotFound } from 'pages/not-found/not-found.component';
import { auth, createUserProfileDocument } from 'core/services/firebase/firebase.service';
import { ShopUser, ShopUserNull } from 'core/models/user.model';
import { setCurrentUser } from 'state/user/user.actions';
import { ReduxState } from 'core/models/state.model';

interface IConnectedDispatch {
  setCurrentUser: (user: ShopUserNull) => void;
}

const AppBase: FC<IConnectedDispatch> = (props: IConnectedDispatch) => {

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user, {});
        userRef?.onSnapshot((snapshot) => {
          props.setCurrentUser({ uid: snapshot.id, ...snapshot.data() as ShopUser });
        });
      }
      else { props.setCurrentUser(null); }
    });
    return () => unsubscribeFromAuth();
  });


  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} exact />
        <Route path="/signin" component={Authentication} exact />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<ReduxState<ShopUserNull>>): IConnectedDispatch => {
  return ({ setCurrentUser: (user: ShopUserNull) => dispatch(setCurrentUser(user)) });
};
export const App: FC = connect(null, mapDispatchToProps)(AppBase);
