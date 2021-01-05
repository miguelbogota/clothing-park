import { combineReducers } from 'redux';
import { userReducer } from 'core/state/user/user.reducer';
import { cartReducer } from './cart/cart.reducer';

export const RootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});
