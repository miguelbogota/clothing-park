import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { NavigationBar } from 'components/navigation-bar/navigation-bar.component';
import { Home } from 'pages/home/home.component';
import { Shop } from 'pages/shop/shop.component';
import { NotFound } from 'pages/not-found/not-found.component';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} exact />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
