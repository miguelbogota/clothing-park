import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { persistStore } from 'redux-persist';
import { persistedReducer } from 'core/state/root.reducer';

const middlewares = process.env.NODE_ENV !== 'development' ?  [] : [
  logger,
];

export const rootStore = createStore(persistedReducer, applyMiddleware(...middlewares));
export const rootPersistor = persistStore(rootStore);
