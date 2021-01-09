import React, { FC, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { NavigationBar } from 'components/navigation-bar/navigation-bar.component';
import { HomePage } from 'views/home/home.component';
import { CheckoutPage } from 'views/checkout/checkout.component';
import { ShopPage } from 'views/shop/shop.component';
import { AuthenticationPage } from 'views/authentication/authentication.component';
import { NotFoundPage } from 'views/not-found/not-found.component';
import { selectCurrentUser } from 'core/state/user/user.selectors';
import { checkUserSession } from 'core/state/user/user.actions';
import { GlobalStyle } from './app.styles';

export const App: FC = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <GlobalStyle />
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
