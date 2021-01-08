import React, { FC } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { NavigationBar } from 'components/navigation-bar/navigation-bar.component';
import { HomePage } from 'views/home/home.component';
import { CheckoutPage } from 'views/checkout/checkout.component';
import { ShopPage } from 'views/shop/shop.component';
import { AuthenticationPage } from 'views/authentication/authentication.component';
import { NotFoundPage } from 'views/not-found/not-found.component';
import { selectCurrentUser } from 'core/state/user/user.selectors';

export const App: FC = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={CheckoutPage} exact />
        <Route path="/signin" exact render={() => currentUser ? (<Redirect to='/' />) : (<AuthenticationPage />)} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};
