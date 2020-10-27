import React from 'react';
import './index.scss';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { App } from './app';
import { RootStore } from 'state/root.store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={RootStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
