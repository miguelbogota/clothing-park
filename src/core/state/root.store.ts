import { createStore, applyMiddleware, Middleware, Dispatch, AnyAction } from 'redux';
import { logger } from 'redux-logger';
import { persistStore } from 'redux-persist';
import { persistedReducer } from 'core/state/root.reducer';
import createSagaMiddleware from 'redux-saga';
import { runSagas } from './root.saga';

export const reduxSaga = createSagaMiddleware();

// Production middlewares
const middlewares: Middleware<unknown, unknown, Dispatch<AnyAction>>[] = [
  reduxSaga,
];

// Development middlewares
if (process.env.NODE_ENV === 'development') {
  middlewares.push(...[
    logger,
  ]);
}

export const rootStore = createStore(persistedReducer, applyMiddleware(...middlewares));
export const rootPersistor = persistStore(rootStore);
runSagas();

