import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userReducer } from 'core/state/user/user.reducer';
import { cartReducer } from './cart/cart.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export const persistedReducer = persistReducer({
  key: 'root',
  storage,
  whitelist: ['cart'],
}, rootReducer);
