import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { RootReducer } from 'core/state/root.reducer';

const middlewares = [logger];
export const RootStore = createStore(RootReducer, applyMiddleware(...middlewares));
