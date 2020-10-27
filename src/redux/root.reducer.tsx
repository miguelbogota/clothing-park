import { combineReducers } from 'redux';
import { userReducer } from 'redux/user/user.reducer';

export const RootReducer = combineReducers({
  user: userReducer
});
