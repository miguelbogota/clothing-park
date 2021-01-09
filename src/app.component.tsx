import React, { FC, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationBar } from 'components/navigation-bar/navigation-bar.component';
import { selectCurrentUser } from 'core/state/user/user.selectors';
import { checkUserSession } from 'core/state/user/user.actions';
import { GlobalStyle } from './app.styles';
import { UISpinner } from 'components/ui-spinner/ui-spinner.componet';

const HomePage = lazy(() => import('views/home/home.component'));
const ShopPage = lazy(() => import('views/shop/shop.component'));
const CheckoutPage = lazy(() => import('views/checkout/checkout.component'));
const AuthenticationPage = lazy(() => import('views/authentication/authentication.component'));
const NotFoundPage = lazy(() => import('views/not-found/not-found.component'));

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
      <Suspense fallback={<UISpinner />}>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} exact />
          <Route path="/signin" exact render={() => currentUser ? (<Redirect to='/' />) : (<AuthenticationPage />)} />
          <Route path="*" component={NotFoundPage} exact />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};
