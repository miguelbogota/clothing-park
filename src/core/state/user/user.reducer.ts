import { ShopUserNull } from 'core/models/user.model';
import { UserActions, UserState } from '../../models/state/user.models';

const INITIAL_VALUES: UserState = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_VALUES, action: UserActions): UserState => {

  switch (action.type) {
    case 'SET_CURRENT_USER': return { ...state, ...action.payload as ShopUserNull };
    default: return state;
  }

};
