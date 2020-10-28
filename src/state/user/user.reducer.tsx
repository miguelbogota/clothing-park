import { ReduxState } from 'core/models/state.model';
import { ShopUser, ShopUserNull } from 'core/models/user.model';

export const userReducer = (state: ShopUserNull = null, action: ReduxState<ShopUserNull>): ShopUserNull => {

  switch (action.type) {
    case 'SET_CURRENT_USER': return action.payload ? { ...state, ...action.payload } as ShopUser : null;
    default: return state;
  }

};
