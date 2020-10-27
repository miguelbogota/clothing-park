import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { RootReducer } from 'redux/root.reducer';

const middlewares = [logger];
export const RootStore = createStore(RootReducer, applyMiddleware(...middlewares));
