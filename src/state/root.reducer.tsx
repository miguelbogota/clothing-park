import { combineReducers } from 'redux';
import { userReducer } from 'state/user/user.reducer';
import { cartReducer } from './cart/cart.reducer';

export const RootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});
