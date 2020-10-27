import { combineReducers } from 'redux';
import { userReducer } from 'state/user/user.reducer';

export const RootReducer = combineReducers({
  user: userReducer
});
