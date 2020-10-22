import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from 'pages/home/home.component';
import { NotFound } from 'pages/not-found/not-found.component';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
