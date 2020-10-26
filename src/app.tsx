import React, { FC, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { NavigationBar } from 'components/navigation-bar/navigation-bar.component';
import { Home } from 'pages/home/home.component';
import { Shop } from 'pages/shop/shop.component';
import { Authentication } from 'pages/authentication/authentication.component';
import { NotFound } from 'pages/not-found/not-found.component';
import { auth } from 'core/services/firebase/firebase.service';
import { ShopUser } from 'core/models/user.model';

export const App: FC = () => {

  const [currentUser, setCurrentUser] = useState<ShopUser | null>(null);
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => setCurrentUser(user as ShopUser));
    return () => unsubscribeFromAuth();
  }, [currentUser]);


  return (
    <BrowserRouter>
      <NavigationBar currentUser={currentUser} />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} exact />
        <Route path="/signin" component={Authentication} exact />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
