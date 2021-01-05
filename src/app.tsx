import React, { FC, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { NavigationBar } from 'components/navigation-bar/navigation-bar.component';
import { HomePage } from 'views/home/home.component';
import { CheckoutPage } from 'views/checkout/checkout.component';
import { Shop } from 'views/shop/shop.component';
import { AuthenticationPage } from 'views/authentication/authentication.component';
import { NotFoundPage } from 'views/not-found/not-found.component';
import { auth, createUserProfileDocument } from 'core/services/firebase/firebase.service';
import { ShopUser } from 'core/models/user.model';
import { setCurrentUser } from 'core/state/user/user.actions';
import { selectCurrentUser } from 'core/state/user/user.selectors';

export const App: FC = () => {

  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user, {});
        userRef?.onSnapshot((snapshot) => {
          dispatch(setCurrentUser({ currentUser: { uid: snapshot.id, ...snapshot.data() as ShopUser } }));
        });
      }
      else { dispatch(setCurrentUser({ currentUser: null })); }
    });
    return () => unsubscribeFromAuth();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/shop" component={Shop} />
        <Route path="/checkout" component={CheckoutPage} exact />
        <Route path="/signin" exact render={() => currentUser ? (<Redirect to='/' />) : (<AuthenticationPage />)} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};
