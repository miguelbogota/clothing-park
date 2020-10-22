import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from 'pages/home/home.component';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
}
