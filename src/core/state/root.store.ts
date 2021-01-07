import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { persistStore } from 'redux-persist';
import { persistedReducer } from 'core/state/root.reducer';

// Production middlewares
const middlewares = [];

// Development middlewares
if (process.env.NODE_ENV === 'development') {
  middlewares.push(...[
    logger,
  ]);
}

export const rootStore = createStore(persistedReducer, applyMiddleware(...middlewares));
export const rootPersistor = persistStore(rootStore);
