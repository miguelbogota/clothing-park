import { ShopUserNull } from 'core/models/user.model';
import { UserActions, UserState } from '../../models/state/user.models';

const INITIAL_VALUES: UserState = {
  currentUser: null,
  error: null,
};

export const userReducer = (state = INITIAL_VALUES, action: UserActions): UserState => {

  switch (action.type) {
    case 'SIGN_IN_SUCCESS': return {
      ...state,
      currentUser: action.payload as ShopUserNull,
      error: null,
    };
    case 'SIGN_IN_FAILURE': return { ...state, error: action.payload as Error };
    default: return state;
  }

};
