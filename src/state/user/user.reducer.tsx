import { AuthUserProps } from 'core/models/props/auth-user';
import { ReduxState } from 'core/models/state.model';
import { ShopUser } from 'core/models/user.model';

export const userReducer = (
  state: AuthUserProps = { currentUser: null },
  action: ReduxState<ShopUser | null>
): { currentUser: ShopUser | null } => {

  switch (action.type) {
    case 'SET_CURRENT_USER': return { ...state, ...action.payload } as AuthUserProps;
    default: return state;
  }

};
