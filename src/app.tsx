import React, { FC, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { NavigationBar } from 'components/navigation-bar/navigation-bar.component';
import { Home } from 'pages/home/home.component';
import { Shop } from 'pages/shop/shop.component';
import { Authentication } from 'pages/authentication/authentication.component';
import { NotFound } from 'pages/not-found/not-found.component';
import { auth, createUserProfileDocument } from 'core/services/firebase/firebase.service';
import { ShopUser } from 'core/models/user.model';
import { setCurrentUser } from 'state/user/user.actions';

export const AppBase: FC = () => {

  const [currentUser, setCurrentUser] = useState<ShopUser | null>(null);
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
  }, [currentUser]);


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

const mapDispatchToProps = (dispatch: any) => ({ setCurrentUser: (user: ShopUser) => dispatch(setCurrentUser(user)) });
export const App: FC = connect(null, mapDispatchToProps)(AppBase);
