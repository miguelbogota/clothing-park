import { ShopUser, ShopUserNull } from 'core/models/user.model';
import { UserActions } from 'core/models/state-actions/user-state.model';

export const userReducer = (state: ShopUserNull = null, action: UserActions<ShopUserNull>): ShopUserNull => {

  switch (action.type) {
    case 'SET_CURRENT_USER': return action.payload ? { ...state, ...action.payload } as ShopUser : null;
    default: return state;
  }

};
